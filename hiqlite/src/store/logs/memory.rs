use crate::store::state_machine::memory::TypeConfigKV;
use crate::store::StorageResult;
use crate::NodeId;
use openraft::storage::LogFlushed;
use openraft::storage::LogState;
use openraft::storage::RaftLogStorage;
use openraft::LogId;
use openraft::OptionalSend;
use openraft::RaftLogReader;
use openraft::StorageError;
use openraft::StorageIOError;
use openraft::Vote;
use openraft::{CommittedLeaderId, Entry};
use redb::{Database, ReadableTable, TableDefinition};
use std::collections::{BTreeMap, Bound, VecDeque};
use std::fmt::Debug;
use std::ops::{Deref, RangeBounds};
use std::sync::Arc;
use tokio::sync::{oneshot, Mutex, RwLock};
use tokio::time::Instant;
use tokio::{fs, task};

#[derive(Debug, Clone)]
struct LogData {
    last_term: Option<u64>,
    last_node_id: Option<u64>,
    last_log_id: Option<u64>,

    last_purged: Option<LogId<u64>>,
    commited: Option<LogId<NodeId>>,
    vote: Option<Vote<NodeId>>,
}

#[derive(Debug, Clone)]
pub struct LogStore {
    logs: Arc<RwLock<BTreeMap<u64, Entry<TypeConfigKV>>>>,
    data: Arc<Mutex<LogData>>,
}

impl LogStore {
    pub fn new() -> Self {
        let logs = Arc::new(RwLock::new(BTreeMap::new()));
        let data = LogData {
            last_term: None,
            last_node_id: None,
            last_log_id: None,
            last_purged: None,
            commited: None,
            vote: None,
        };

        Self {
            logs,
            data: Arc::new(Mutex::new(data)),
        }
    }
}

impl RaftLogReader<TypeConfigKV> for LogStore {
    async fn try_get_log_entries<RB: RangeBounds<u64> + Clone + Debug + OptionalSend>(
        &mut self,
        range: RB,
    ) -> StorageResult<Vec<Entry<TypeConfigKV>>> {
        let start = match range.start_bound() {
            Bound::Included(i) => *i,
            Bound::Excluded(i) => *i + 1,
            Bound::Unbounded => 0,
        };
        let end = match range.end_bound() {
            Bound::Included(i) => *i,
            Bound::Excluded(i) => *i - 1,
            Bound::Unbounded => panic!("open end log entries get"),
        };
        if end < start {
            return Ok(Vec::default());
        }

        let mut res = Vec::with_capacity((end + 1 - start) as usize);
        let lock = self.logs.write().await;

        for (_, entry) in lock.range(start..=end) {
            res.push(entry.clone());
        }

        Ok(res)
    }
}

impl RaftLogStorage<TypeConfigKV> for LogStore {
    type LogReader = Self;

    async fn get_log_state(&mut self) -> StorageResult<LogState<TypeConfigKV>> {
        let lock = self.data.lock().await;

        let last_purged_log_id = lock.last_purged;

        let last_log_id = if let Some(log_id) = lock.last_log_id {
            let term = lock.last_term.unwrap();
            let node_id = lock.last_node_id.unwrap();
            let leader_id = CommittedLeaderId::new(term, node_id);
            Some(LogId::new(leader_id, log_id))
        } else {
            None
        };

        Ok(LogState {
            last_purged_log_id,
            last_log_id,
        })
    }

    async fn save_committed(
        &mut self,
        committed: Option<LogId<NodeId>>,
    ) -> Result<(), StorageError<NodeId>> {
        let mut lock = self.data.lock().await;
        lock.commited = committed;
        Ok(())
    }

    async fn read_committed(&mut self) -> Result<Option<LogId<NodeId>>, StorageError<NodeId>> {
        Ok(self.data.lock().await.commited)
    }

    #[tracing::instrument(level = "trace", skip(self))]
    async fn save_vote(&mut self, vote: &Vote<NodeId>) -> Result<(), StorageError<NodeId>> {
        let mut lock = self.data.lock().await;
        lock.vote = Some(*vote);
        Ok(())
    }

    async fn read_vote(&mut self) -> Result<Option<Vote<NodeId>>, StorageError<NodeId>> {
        Ok(self.data.lock().await.vote)
    }

    #[tracing::instrument(level = "trace", skip_all)]
    async fn append<I>(
        &mut self,
        entries: I,
        callback: LogFlushed<TypeConfigKV>,
    ) -> StorageResult<()>
    where
        I: IntoIterator<Item = Entry<TypeConfigKV>> + Send,
        I::IntoIter: Send,
    {
        let mut lock = self.logs.write().await;
        let mut last_log_id = None;
        for entry in entries {
            last_log_id = Some(entry.log_id);
            lock.insert(entry.log_id.index, entry);
        }

        if let Some(id) = last_log_id {
            let mut lock = self.data.lock().await;
            lock.last_log_id = Some(id.index);
            lock.last_node_id = Some(id.leader_id.node_id);
            lock.last_term = Some(id.leader_id.term);
        }

        callback.log_io_completed(Ok(()));

        Ok(())
    }

    #[tracing::instrument(level = "debug", skip(self))]
    async fn truncate(&mut self, log_id: LogId<NodeId>) -> StorageResult<()> {
        let mut lock = self.logs.write().await;
        lock.retain(|id, _| id >= &log_id.index);
        Ok(())
    }

    #[tracing::instrument(level = "debug", skip(self))]
    async fn purge(&mut self, log_id: LogId<NodeId>) -> Result<(), StorageError<NodeId>> {
        let mut lock = self.logs.write().await;
        lock.retain(|id, _| *id <= log_id.index + 1);
        Ok(())
    }

    async fn get_log_reader(&mut self) -> Self::LogReader {
        self.clone()
    }
}
