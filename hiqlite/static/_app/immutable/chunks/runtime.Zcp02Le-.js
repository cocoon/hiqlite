var vt=Array.isArray,pt=Array.from,dt=Object.defineProperty,en=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyDescriptors,ht=Object.prototype,yt=Array.prototype,qn=Object.getPrototypeOf;function wt(n){return typeof n=="function"}const _t=()=>{};function gt(n){return n()}function an(n){for(var t=0;t<n.length;t++)n[t]()}const g=2,On=4,F=8,Y=16,x=32,H=64,un=128,T=256,$=512,y=1024,E=2048,L=4096,k=8192,D=16384,Tn=32768,on=65536,xt=1<<17,kn=1<<19,Sn=1<<20,fn=Symbol("$state"),bt=Symbol("legacy props"),mt=Symbol("");function Cn(n){return n===this.v}function Pn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function sn(n){return!Pn(n,this.v)}function Et(n){throw new Error("effect_in_teardown")}function jt(){throw new Error("effect_in_unowned_derived")}function qt(n){throw new Error("effect_orphan")}function Ot(){throw new Error("effect_update_depth_exceeded")}function Tt(){throw new Error("hydration_failed")}function kt(n){throw new Error("props_invalid_value")}function St(){throw new Error("state_descriptors_fixed")}function Ct(){throw new Error("state_prototype_fixed")}function Pt(){throw new Error("state_unsafe_local_read")}function Dt(){throw new Error("state_unsafe_mutation")}let R=!1;function Mt(){R=!0}function V(n){return{f:0,v:n,reactions:null,equals:Cn,version:0}}function Nt(n){return Bt(V(n))}function It(n,t=!1){var l;const r=V(n);return t||(r.equals=sn),R&&i!==null&&i.l!==null&&((l=i.l).s??(l.s=[])).push(r),r}function Bt(n){return f!==null&&f.f&g&&(b===null?Tr([n]):b.push(n)),n}function Ft(n,t){return f!==null&&tn()&&f.f&(g|Y)&&(b===null||!b.includes(n))&&Dt(),Dn(n,t)}function Dn(n,t){return n.equals(t)||(n.v=t,n.version=ot(),Mn(n,E),tn()&&o!==null&&o.f&y&&!(o.f&x)&&(d!==null&&d.includes(n)?(m(o,E),ln(o)):O===null?kr([n]):O.push(n))),t}function Mn(n,t){var r=n.reactions;if(r!==null)for(var l=tn(),e=r.length,a=0;a<e;a++){var u=r[a],s=u.f;s&E||!l&&u===o||(m(u,t),s&(y|T)&&(s&g?Mn(u,L):ln(u)))}}const Ht=1,Lt=2,Rt=4,zt=8,Gt=16,Jt=1,Kt=2,Qt=4,Ut=8,Yt=16,$t=1,Vt=2,Wt=4,Xt=1,Zt=2,Nn="[",In="[!",Bn="]",cn={},At=Symbol();function vn(n){console.warn("hydration_mismatch")}let j=!1;function nr(n){j=n}let v;function S(n){if(n===null)throw vn(),cn;return v=n}function tr(){return S(q(v))}function rr(n){if(j){if(q(v)!==null)throw vn(),cn;v=n}}function lr(n=1){if(j){for(var t=n,r=v;t--;)r=q(r);v=r}}function er(){for(var n=0,t=v;;){if(t.nodeType===8){var r=t.data;if(r===Bn){if(n===0)return t;n-=1}else(r===Nn||r===In)&&(n+=1)}var l=q(t);t.remove(),t=l}}var Fn,Hn,Ln,Rn;function ar(){if(Fn===void 0){Fn=window,Hn=document;var n=Element.prototype,t=Node.prototype;Ln=en(t,"firstChild").get,Rn=en(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function z(n=""){return document.createTextNode(n)}function W(n){return Ln.call(n)}function q(n){return Rn.call(n)}function ur(n,t){if(!j)return W(n);var r=W(v);if(r===null)r=v.appendChild(z());else if(t&&r.nodeType!==3){var l=z();return r==null||r.before(l),S(l),l}return S(r),r}function or(n,t){if(!j){var r=W(n);return r instanceof Comment&&r.data===""?q(r):r}if(t&&(v==null?void 0:v.nodeType)!==3){var l=z();return v==null||v.before(l),S(l),l}return v}function fr(n,t=1,r=!1){let l=j?v:n;for(var e;t--;)e=l,l=q(l);if(!j)return l;var a=l==null?void 0:l.nodeType;if(r&&a!==3){var u=z();return l===null?e==null||e.after(u):l.before(u),S(u),u}return S(l),l}function ir(n){n.textContent=""}function zn(n){var t=g|E;o===null?t|=T:o.f|=Sn;var r=f!==null&&f.f&g?f:null;const l={children:null,ctx:i,deps:null,equals:Cn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(l),l}function sr(n){const t=zn(n);return t.equals=sn,t}function Gn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var l=t[r];l.f&g?pn(l):C(l)}}}function cr(n){for(var t=n.parent;t!==null;){if(!(t.f&g))return t;t=t.parent}return null}function Jn(n){var t,r=o;K(cr(n));try{Gn(n),t=ft(n)}finally{K(r)}return t}function Kn(n){var t=Jn(n),r=(B||n.f&T)&&n.deps!==null?L:y;m(n,r),n.equals(t)||(n.v=t,n.version=ot())}function pn(n){Gn(n),U(n,0),m(n,D),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Qn(n){o===null&&f===null&&qt(),f!==null&&f.f&T&&jt(),_n&&Et()}function vr(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function M(n,t,r,l=!0){var e=(n&H)!==0,a=o,u={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|E,first:null,fn:t,last:null,next:null,parent:e?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var s=N;try{et(!0),rn(u),u.f|=Tn}catch(c){throw C(u),c}finally{et(s)}}else t!==null&&ln(u);var h=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Sn)===0;if(!h&&!e&&l&&(a!==null&&vr(u,a),f!==null&&f.f&g)){var w=f;(w.children??(w.children=[])).push(u)}return u}function pr(n){const t=M(F,null,!1);return m(t,y),t.teardown=n,t}function dr(n){Qn();var t=o!==null&&(o.f&x)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:f})}else{var l=dn(n);return l}}function hr(n){return Qn(),Un(n)}function yr(n){const t=M(H,n,!0);return()=>{C(t)}}function dn(n){return M(On,n,!1)}function Un(n){return M(F,n,!0)}function wr(n){return Yn(n)}function Yn(n,t=0){return M(F|Y|t,n,!0)}function _r(n,t=!0){return M(F|x,n,!0,t)}function $n(n){var t=n.teardown;if(t!==null){const r=_n,l=f;at(!0),J(null);try{t.call(null)}finally{at(r),J(l)}}}function Vn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)pn(t[r])}}function Wn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var l=r.next;C(r,t),r=l}}function gr(n){for(var t=n.first;t!==null;){var r=t.next;t.f&x||C(t),t=r}}function C(n,t=!0){var r=!1;if((t||n.f&kn)&&n.nodes_start!==null){for(var l=n.nodes_start,e=n.nodes_end;l!==null;){var a=l===e?null:q(l);l.remove(),l=a}r=!0}Wn(n,t&&!r),Vn(n),U(n,0),m(n,D);var u=n.transitions;if(u!==null)for(const h of u)h.stop();$n(n);var s=n.parent;s!==null&&s.first!==null&&Xn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Xn(n){var t=n.parent,r=n.prev,l=n.next;r!==null&&(r.next=l),l!==null&&(l.prev=r),t!==null&&(t.first===n&&(t.first=l),t.last===n&&(t.last=r))}function xr(n,t){var r=[];hn(n,r,!0),Zn(r,()=>{C(n),t&&t()})}function Zn(n,t){var r=n.length;if(r>0){var l=()=>--r||t();for(var e of n)e.out(l)}else t()}function hn(n,t,r){if(!(n.f&k)){if(n.f^=k,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var l=n.first;l!==null;){var e=l.next,a=(l.f&on)!==0||(l.f&x)!==0;hn(l,t,a?r:!1),l=e}}}function br(n){An(n,!0)}function An(n,t){if(n.f&k){Q(n)&&rn(n),n.f^=k;for(var r=n.first;r!==null;){var l=r.next,e=(r.f&on)!==0||(r.f&x)!==0;An(r,e?t:!1),r=l}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const mr=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let X=!1,Z=!1,yn=[],wn=[];function nt(){X=!1;const n=yn.slice();yn=[],an(n)}function tt(){Z=!1;const n=wn.slice();wn=[],an(n)}function Er(n){X||(X=!0,queueMicrotask(nt)),yn.push(n)}function jr(n){Z||(Z=!0,mr(tt)),wn.push(n)}function qr(){X&&nt(),Z&&tt()}function rt(n){throw new Error("lifecycle_outside_component")}const lt=0,Or=1;let A=!1,nn=lt,G=!1,N=!1,_n=!1;function et(n){N=n}function at(n){_n=n}let P=[],I=0,f=null;function J(n){f=n}let o=null;function K(n){o=n}let b=null;function Tr(n){b=n}let d=null,_=0,O=null;function kr(n){O=n}let ut=0,B=!1,i=null;function ot(){return++ut}function tn(){return!R||i!==null&&i.l===null}function Q(n){var u,s;var t=n.f;if(t&E)return!0;if(t&L){var r=n.deps,l=(t&T)!==0;if(r!==null){var e;if(t&$){for(e=0;e<r.length;e++)((u=r[e]).reactions??(u.reactions=[])).push(n);n.f^=$}for(e=0;e<r.length;e++){var a=r[e];if(Q(a)&&Kn(a),l&&o!==null&&!B&&!((s=a==null?void 0:a.reactions)!=null&&s.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}l||m(n,y)}return!1}function Sr(n,t){for(var r=t;r!==null;){if(r.f&un)try{r.fn(n);return}catch{r.f^=un}r=r.parent}throw A=!1,n}function Cr(n){return(n.f&D)===0&&(n.parent===null||(n.parent.f&un)===0)}function gn(n,t,r,l){if(A){if(r===null&&(A=!1),Cr(t))throw n;return}r!==null&&(A=!0);{Sr(n,t);return}}function ft(n){var En;var t=d,r=_,l=O,e=f,a=B,u=b,s=i,h=n.f;d=null,_=0,O=null,f=h&(x|H)?null:n,B=!N&&(h&T)!==0,b=null,i=n.ctx;try{var w=(0,n.fn)(),c=n.deps;if(d!==null){var p;if(U(n,_),c!==null&&_>0)for(c.length=_+d.length,p=0;p<d.length;p++)c[_+p]=d[p];else n.deps=c=d;if(!B)for(p=_;p<c.length;p++)((En=c[p]).reactions??(En.reactions=[])).push(n)}else c!==null&&_<c.length&&(U(n,_),c.length=_);return w}finally{d=t,_=r,O=l,f=e,B=a,b=u,i=s}}function Pr(n,t){let r=t.reactions;if(r!==null){var l=r.indexOf(n);if(l!==-1){var e=r.length-1;e===0?r=t.reactions=null:(r[l]=r[e],r.pop())}}r===null&&t.f&g&&(d===null||!d.includes(t))&&(m(t,L),t.f&(T|$)||(t.f^=$),U(t,0))}function U(n,t){var r=n.deps;if(r!==null)for(var l=t;l<r.length;l++)Pr(n,r[l])}function rn(n){var t=n.f;if(!(t&D)){m(n,y);var r=o,l=i;o=n;try{t&Y?gr(n):Wn(n),Vn(n),$n(n);var e=ft(n);n.teardown=typeof e=="function"?e:null,n.version=ut}catch(a){gn(a,n,r,l||n.ctx)}finally{o=r}}}function it(){I>1e3&&(I=0,Ot()),I++}function st(n){var t=n.length;if(t!==0){it();var r=N;N=!0;try{for(var l=0;l<t;l++){var e=n[l];e.f&y||(e.f^=y);var a=[];ct(e,a),Dr(a)}}finally{N=r}}}function Dr(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var l=n[r];if(!(l.f&(D|k)))try{Q(l)&&(rn(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?Xn(l):l.fn=null))}catch(e){gn(e,l,null,l.ctx)}}}function Mr(){if(G=!1,I>1001)return;const n=P;P=[],st(n),G||(I=0)}function ln(n){nn===lt&&(G||(G=!0,queueMicrotask(Mr)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(H|x)){if(!(r&y))return;t.f^=y}}P.push(t)}function ct(n,t){var r=n.first,l=[];n:for(;r!==null;){var e=r.f,a=(e&x)!==0,u=a&&(e&y)!==0,s=r.next;if(!u&&!(e&k))if(e&F){if(a)r.f^=y;else try{Q(r)&&rn(r)}catch(p){gn(p,r,null,r.ctx)}var h=r.first;if(h!==null){r=h;continue}}else e&On&&l.push(r);if(s===null){let p=r.parent;for(;p!==null;){if(n===p)break n;var w=p.next;if(w!==null){r=w;continue n}p=p.parent}}r=s}for(var c=0;c<l.length;c++)h=l[c],t.push(h),ct(h,t)}function xn(n){var t=nn,r=P;try{it();const e=[];nn=Or,P=e,G=!1,st(r);var l=n==null?void 0:n();return qr(),(P.length>0||e.length>0)&&xn(),I=0,l}finally{nn=t,P=r}}async function Nr(){await Promise.resolve(),xn()}function Ir(n){var c;var t=n.f,r=(t&g)!==0;if(r&&t&D){var l=Jn(n);return pn(n),l}if(f!==null){b!==null&&b.includes(n)&&Pt();var e=f.deps;d===null&&e!==null&&e[_]===n?_++:d===null?d=[n]:d.push(n),O!==null&&o!==null&&o.f&y&&!(o.f&x)&&O.includes(n)&&(m(o,E),ln(o))}else if(r&&n.deps===null)for(var a=n,u=a.parent,s=a;u!==null;)if(u.f&g){var h=u;s=h,u=h.parent}else{var w=u;(c=w.deriveds)!=null&&c.includes(s)||(w.deriveds??(w.deriveds=[])).push(s);break}return r&&(a=n,Q(a)&&Kn(a)),n.v}function Br(n){const t=f;try{return f=null,n()}finally{f=t}}const Fr=~(E|L|y);function m(n,t){n.f=n.f&Fr|t}function Hr(n){return bn().get(n)}function Lr(n,t){return bn().set(n,t),t}function Rr(n){return bn().has(n)}function bn(n){return i===null&&rt(),i.c??(i.c=new Map(zr(i)||void 0))}function zr(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Gr(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},R&&!t&&(i.l={s:null,u:null,r1:[],r2:V(!1)})}function Jr(n){const t=i;if(t!==null){const u=t.e;if(u!==null){var r=o,l=f;t.e=null;try{for(var e=0;e<u.length;e++){var a=u[e];K(a.effect),J(a.reaction),dn(a.fn)}}finally{K(r),J(l)}}i=t.p,t.m=!0}return{}}function Kr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(fn in n)mn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&fn in r&&mn(r)}}}function mn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let l in n)try{mn(n[l],t)}catch{}const r=qn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const l=jn(r);for(let e in l){const a=l[e].get;if(a)try{a.call(n)}catch{}}}}}export{H as $,en as A,o as B,Ct as C,qn as D,vt as E,Yn as F,br as G,_r as H,xr as I,j as J,tr as K,on as L,In as M,er as N,S as O,nr as P,v as Q,dn as R,fn as S,Un as T,At as U,Er as V,kt as W,xt as X,Qt as Y,sn as Z,x as _,R as a,K as a0,Jt as a1,Kt as a2,Ut as a3,bt as a4,sr as a5,It as a6,Yt as a7,xn as a8,dt as a9,Lt as aA,Rt as aB,zt as aC,Gt as aD,mt as aE,jn as aF,jr as aG,Y as aH,Tn as aI,$t as aJ,wt as aK,Vt as aL,Wt as aM,tn as aN,Hn as aO,lr as aP,Rr as aQ,Hr as aR,Lr as aS,Nr as aa,Nt as ab,pr as ac,J as ad,f as ae,z as af,kn as ag,Nn as ah,q as ai,W as aj,Xt as ak,Zt as al,ar as am,cn as an,Bn as ao,vn as ap,Tt as aq,ir as ar,pt as as,yr as at,k as au,Dn as av,hn as aw,Zn as ax,C as ay,Ht as az,Br as b,i as c,hr as d,Mt as e,an as f,Ir as g,Kr as h,zn as i,or as j,Jr as k,rt as l,ur as m,_t as n,rr as o,Gr as p,fr as q,gt as r,Pn as s,wr as t,dr as u,ht as v,yt as w,V as x,St as y,Ft as z};