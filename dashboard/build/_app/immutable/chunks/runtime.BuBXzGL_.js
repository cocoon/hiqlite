var Xn=Array.isArray,Zn=Array.from,nt=Object.isFrozen,tt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,bn=Object.getOwnPropertyDescriptors,et=Object.prototype,lt=Array.prototype,Rn=Object.getPrototypeOf;function ut(n){return typeof n=="function"}const st=()=>{};function ot(n){return n()}function en(n){for(var t=0;t<n.length;t++)n[t]()}const g=2,ln=4,C=8,un=16,d=32,$=64,T=128,L=256,E=512,k=1024,D=2048,F=4096,b=8192,Nn=16384,sn=32768,it=65536,jn=1<<18,Q=Symbol("$state"),ft=Symbol("$state.frozen"),at=Symbol("");function on(n){return n===this.v}function In(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function fn(n){return!In(n,this.v)}function Ln(n){throw new Error("effect_in_teardown")}function Mn(){throw new Error("effect_in_unowned_derived")}function Yn(n){throw new Error("effect_orphan")}function Pn(){throw new Error("effect_update_depth_exceeded")}function _t(){throw new Error("hydration_failed")}function ct(n){throw new Error("props_invalid_value")}function Bn(){throw new Error("state_unsafe_mutation")}function an(n){return{f:0,v:n,reactions:null,equals:on,version:0}}function vt(n){var r;const t=an(n);return t.equals=fn,v!==null&&v.l!==null&&((r=v.l).s??(r.s=[])).push(t),t}function pt(n,t){return f!==null&&G()&&f.f&g&&Bn(),n.equals(t)||(n.v=t,n.version=On(),_n(n,k),G()&&i!==null&&i.f&E&&!(i.f&d)&&(_!==null&&_.includes(n)?(h(i,k),U(i)):y===null?$n([n]):y.push(n))),t}function _n(n,t){var r=n.reactions;if(r!==null)for(var e=G(),u=r.length,l=0;l<u;l++){var s=r[l],o=s.f;o&k||!e&&s===i||(h(s,t),o&(E|T)&&(o&g?_n(s,D):U(s)))}}function cn(n){i===null&&f===null&&Yn(),f!==null&&f.f&T&&Mn(),W&&Ln()}function X(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function R(n,t,r,e=!0){var u=(n&$)!==0,l={ctx:v,deps:null,nodes:null,f:n|k,first:null,fn:t,last:null,next:null,parent:u?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var s=A;try{Z(!0),H(l),l.f|=Nn}catch(a){throw P(l),a}finally{Z(s)}}else t!==null&&U(l);var o=r&&l.deps===null&&l.first===null&&l.nodes===null&&l.teardown===null;return!o&&!u&&e&&(i!==null&&X(l,i),f!==null&&f.f&g&&X(l,f)),l}function ht(n){const t=R(C,null,!1);return h(t,E),t.teardown=n,t}function wt(n){cn();var t=i!==null&&(i.f&C)!==0&&v!==null&&!v.m;if(t){var r=v;(r.e??(r.e=[])).push(n)}else{var e=vn(n);return e}}function Et(n){return cn(),pn(n)}function dt(n){const t=R($,n,!0);return()=>{P(t)}}function vn(n){return R(ln,n,!1)}function pn(n){return R(C,n,!0)}function yt(n){return pn(n)}function kt(n,t=0){return R(C|un|t,n,!0)}function mt(n,t=!0){return R(C|d,n,!0,t)}function hn(n){var t=n.teardown;if(t!==null){const r=W,e=f;nn(!0),tn(null);try{t.call(null)}finally{nn(r),tn(e)}}}function P(n,t=!0){var r=!1;if((t||n.f&jn)&&n.nodes!==null){for(var e=n.nodes.start,u=n.nodes.end;e!==null;){var l=e===u?null:e.nextSibling;e.remove(),e=l}r=!0}if(J(n,t&&!r),B(n,0),h(n,b),n.transitions)for(const o of n.transitions)o.stop();hn(n);var s=n.parent;s!==null&&n.f&d&&s.first!==null&&wn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function wn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function gt(n,t){var r=[];En(n,r,!0),Hn(r,()=>{P(n),t&&t()})}function Hn(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var u of n)u.out(e)}else t()}function En(n,t,r){if(!(n.f&F)){if(n.f^=F,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var u=e.next,l=(e.f&sn)!==0||(e.f&d)!==0;En(e,t,l?r:!1),e=u}}}function Tt(n){dn(n,!0)}function dn(n,t){if(n.f&F){n.f^=F,j(n)&&H(n);for(var r=n.first;r!==null;){var e=r.next,u=(r.f&sn)!==0||(r.f&d)!==0;dn(r,u?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}const Un=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let M=!1,Y=!1,z=[],K=[];function yn(){M=!1;const n=z.slice();z=[],en(n)}function kn(){Y=!1;const n=K.slice();K=[],en(n)}function qt(n){M||(M=!0,queueMicrotask(yn)),z.push(n)}function Ot(n){Y||(Y=!0,Un(kn)),K.push(n)}function zn(){M&&yn(),Y&&kn()}function Kn(n){let t=g|k;i===null&&(t|=T);const r={deps:null,deriveds:null,equals:on,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&g){var e=f;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function St(n){const t=Kn(n);return t.equals=fn,t}function mn(n){J(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)Gn(t[r])}}function gn(n){mn(n);var t=Sn(n),r=(S||n.f&T)&&n.deps!==null?D:E;h(n,r),n.equals(t)||(n.v=t,n.version=On())}function Gn(n){mn(n),B(n,0),h(n,b),n.first=n.last=n.deps=n.reactions=n.fn=null}const Tn=0,Vn=1;let I=Tn,N=!1,A=!1,W=!1;function Z(n){A=n}function nn(n){W=n}let m=[],x=0,f=null;function tn(n){f=n}let i=null,_=null,c=0,y=null;function $n(n){y=n}let qn=0,S=!1,v=null;function On(){return qn++}function G(){return v!==null&&v.l===null}function j(n){var s,o;var t=n.f;if(t&k)return!0;if(t&D){var r=n.deps;if(r!==null){var e=(t&T)!==0,u;if(t&L){for(u=0;u<r.length;u++)((s=r[u]).reactions??(s.reactions=[])).push(n);n.f^=L}for(u=0;u<r.length;u++){var l=r[u];if(j(l)&&gn(l),l.version>n.version)return!0;e&&!S&&!((o=l==null?void 0:l.reactions)!=null&&o.includes(n))&&(l.reactions??(l.reactions=[])).push(n)}}h(n,E)}return!1}function Wn(n,t,r){throw n}function Sn(n){var t=_,r=c,e=y,u=f,l=S;_=null,c=0,y=null,f=n.f&(d|$)?null:n,S=!A&&(n.f&T)!==0;try{var s=(0,n.fn)(),o=n.deps;if(_!==null){var a,p;if(o!==null){var q=c===0?_:o.slice(0,c).concat(_),O=q.length>16?new Set(q):null;for(p=c;p<o.length;p++)a=o[p],(O!==null?!O.has(a):!q.includes(a))&&An(n,a)}if(o!==null&&c>0)for(o.length=c+_.length,p=0;p<_.length;p++)o[c+p]=_[p];else n.deps=o=_;if(!S)for(p=c;p<o.length;p++){a=o[p];var w=a.reactions;w===null?a.reactions=[n]:w[w.length-1]!==n&&!w.includes(n)&&w.push(n)}}else o!==null&&c<o.length&&(B(n,c),o.length=c);return s}finally{_=t,c=r,y=e,f=u,S=l}}function An(n,t){const r=t.reactions;let e=0;if(r!==null){e=r.length-1;const u=r.indexOf(n);u!==-1&&(e===0?t.reactions=null:(r[u]=r[e],r.pop()))}e===0&&t.f&g&&(h(t,D),t.f&(T|L)||(t.f^=L),B(t,0))}function B(n,t){var r=n.deps;if(r!==null)for(var e=t===0?null:r.slice(0,t),u=new Set,l=t;l<r.length;l++){var s=r[l];u.has(s)||(u.add(s),(e===null||!e.includes(s))&&An(n,s))}}function J(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function H(n){var t=n.f;if(!(t&b)){h(n,E);var r=n.ctx,e=i,u=v;i=n,v=r;try{t&un||J(n),hn(n);var l=Sn(n);n.teardown=typeof l=="function"?l:null,n.version=qn}catch(s){Wn(s)}finally{i=e,v=u}}}function xn(){x>1e3&&(x=0,Pn()),x++}function Fn(n){var t=n.length;if(t!==0){xn();var r=A;A=!0;try{for(var e=0;e<t;e++){var u=n[e];if(u.first===null&&!(u.f&d))rn([u]);else{var l=[];Cn(u,l),rn(l)}}}finally{A=r}}}function rn(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(b|F))&&j(e)&&(H(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?wn(e):e.fn=null))}}function Jn(){if(N=!1,x>1001)return;const n=m;m=[],Fn(n),N||(x=0)}function U(n){I===Tn&&(N||(N=!0,queueMicrotask(Jn)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&d){if(!(r&E))return;h(t,D)}}m.push(t)}function Cn(n,t){var r=n.first,e=[];n:for(;r!==null;){var u=r.f,l=(u&(b|F))===0,s=u&d,o=(u&E)!==0,a=r.first;if(l&&(!s||!o)){if(s&&h(r,E),u&C){if(!s&&j(r)&&(H(r),a=r.first),a!==null){r=a;continue}}else if(u&ln)if(s||o){if(a!==null){r=a;continue}}else e.push(r)}var p=r.next;if(p===null){let w=r.parent;for(;w!==null;){if(n===w)break n;var q=w.next;if(q!==null){r=q;continue n}w=w.parent}}r=p}for(var O=0;O<e.length;O++)a=e[O],t.push(a),Cn(a,t)}function Dn(n){var t=I,r=m;try{xn();const u=[];I=Vn,m=u,N=!1,Fn(r);var e=n==null?void 0:n();return zn(),(m.length>0||u.length>0)&&Dn(),x=0,e}finally{I=t,m=r}}async function At(){await Promise.resolve(),Dn()}function xt(n){var t=n.f;if(t&b)return n.v;if(f!==null){var r=f.deps;_===null&&r!==null&&r[c]===n?c++:(r===null||c===0||r[c-1]!==n)&&(_===null?_=[n]:_[_.length-1]!==n&&_.push(n)),y!==null&&i!==null&&i.f&E&&!(i.f&d)&&y.includes(n)&&(h(i,k),U(i))}if(t&g){var e=n;j(e)&&gn(e)}return n.v}function Ft(n){const t=f;try{return f=null,n()}finally{f=t}}const Qn=~(k|D|E);function h(n,t){n.f=n.f&Qn|t}function Ct(n,t=!1,r){v={p:v,c:null,e:null,m:!1,s:n,x:null,l:null},t||(v.l={s:null,u:null,r1:[],r2:an(!1)})}function Dt(n){const t=v;if(t!==null){const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)vn(e[r])}v=t.p,t.m=!0}return{}}function bt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Q in n)V(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&Q in r&&V(r)}}}function V(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{V(n[e],t)}catch{}const r=Rn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=bn(r);for(let u in e){const l=e[u].get;if(l)try{l.call(n)}catch{}}}}}export{ht as A,qt as B,_t as C,Zn as D,sn as E,dt as F,Et as G,jn as H,en as I,ot as J,bt as K,it as L,st as M,yt as N,vn as O,pn as P,Dn as Q,At as R,ft as S,Ot as T,at as U,un as V,Nn as W,ut as X,In as Y,Dt as a,an as b,v as c,Ft as d,Q as e,lt as f,xt as g,tt as h,nt as i,Xn as j,rt as k,i as l,Rn as m,kt as n,et as o,Ct as p,mt as q,Tt as r,pt as s,gt as t,wt as u,ct as v,fn as w,Kn as x,St as y,vt as z};
