import{K as oa,T as ia,L as sa,M as la,v as de,i as k,k as g,t as C,l as m,x as Te,j as _,p as He,g as N,w as we,m as P,z as Qe,$ as ca,y as G,q as Z}from"../chunks/disclose-version.CB8Axd_2.js";import{n as be,E as da,a0 as ua,a1 as va,e as _a,a as fa,p as pa,a2 as wa,q as Ke,K as J,u as qe,N as ee,M as j,g as U,m as M,B as ge,j as A,Q as te,a3 as ba,a4 as ga,a5 as ma}from"../chunks/runtime.DkIe4pcg.js";import{a as R,i as D,p as T}from"../chunks/props.CsIpsegE.js";import{a as me,d as he,s as L,j as ha,t as se,b as ya,k as ka,l as Ne,m as Ce,n as Le,e as Ge,i as xa,c as Xe,g as $a,A as Ma,Q as Ta,h as qa}from"../chunks/randomKey.Cr1IQtC7.js";import{o as Ye}from"../chunks/index-client.9XE4UgKZ.js";let Ze,Je,Ca=(async()=>{function ne(t,e,n,r,a){var o=t.__attributes??(t.__attributes={}),i=t.style,s="style-"+e;o[s]===n&&!a||(o[s]=n,n==null?i.removeProperty(e):i.setProperty(e,n,""))}const Se=typeof window<"u",et=Se?requestAnimationFrame:be,tt=Se?()=>performance.now():()=>Date.now(),Q={tick:t=>et(t),now:()=>tt(),tasks:new Set};function je(t){Q.tasks.forEach(e=>{e.c(t)||(Q.tasks.delete(e),e.f())}),Q.tasks.size!==0&&Q.tick(je)}function nt(t){let e;return Q.tasks.size===0&&Q.tick(je),{promise:new Promise(n=>{Q.tasks.add(e={c:t,f:n})}),abort(){Q.tasks.delete(e)}}}function ue(t,e){t.dispatchEvent(new CustomEvent(e))}function at(t){const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Ae(t){const e={},n=t.split(";");for(const r of n){const[a,o]=r.split(":");if(!a||o===void 0)break;const i=at(a.trim());e[i]=o.trim()}return e}const rt=t=>t;function ae(t,e,n,r){var a=(t&ia)!==0,o=(t&sa)!==0,i=a&&o,s=(t&la)!==0,f=i?"both":a?"in":"out",c,l=e.inert,u,v,h;function q(){return c??(c=n()(e,r==null?void 0:r(),{direction:f}))}var x={is_global:s,in(){e.inert=l,v==null||v.abort(),u==null||u.abort(),a?(ue(e,"introstart"),u=ye(e,q(),v,1,()=>{ue(e,"introend"),u=c=void 0},i?void 0:()=>{u=c=void 0})):h==null||h()},out(b){v==null||v.abort(),o?(e.inert=!0,ue(e,"outrostart"),v=ye(e,q(),u,0,()=>{ue(e,"outroend"),v=c=void 0,b==null||b()},i?void 0:()=>{v=c=void 0}),h=v.reset):b==null||b()},stop:()=>{u==null||u.abort(),v==null||v.abort()}},w=pa;if((w.transitions??(w.transitions=[])).push(x),a&&oa){let b=s;if(!b){for(var p=w.parent;p&&p.f&da;)for(;(p=p.parent)&&!(p.f&ua););b=!p||(p.f&va)!==0}b&&_a(()=>{fa(()=>x.in())})}}function ye(t,e,n,r,a,o){var i=r===1;if(wa(e)){var s;return Ke(()=>{var d=e({direction:i?"in":"out"});s=ye(t,d,n,r,a,o)}),{abort:()=>s.abort(),deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:d=>s.t(d)}}if(n==null||n.deactivate(),!(e!=null&&e.duration))return a==null||a(),{abort:be,deactivate:be,reset:be,t:()=>r};const{delay:f=0,css:c,tick:l,easing:u=rt}=e;var v=Q.now()+f,h=(n==null?void 0:n.t(v))??1-r,q=r-h,x=e.duration*Math.abs(q),w=v+x,p,b;return c?Ke(()=>{var d=[],y=Math.ceil(x/16.666666666666668);if(i&&f>0){let W=Math.ceil(f/16.666666666666668),ce=Ae(c(0,1));for(let E=0;E<W;E+=1)d.push(ce)}for(var $=0;$<=y;$+=1){var S=h+q*u($/y),V=c(S,1-S);d.push(Ae(V))}p=t.animate(d,{delay:i?0:f,duration:x+(i?f:0),easing:"linear",fill:"forwards"}),p.finished.then(()=>{a==null||a(),r===1&&p.cancel()}).catch(W=>{if(p.startTime!==null&&p.currentTime!==null)throw W})}):(h===0&&(l==null||l(0,1)),b=nt(d=>{if(d>=w)return l==null||l(r,1-r),a==null||a(),!1;if(d>=v){var y=h+q*u((d-v)/x);l==null||l(y,1-y)}return!0})),{abort:()=>{p==null||p.cancel(),b==null||b.abort(),o==null||o()},deactivate:()=>{a=void 0,o=void 0},reset:()=>{r===0&&(l==null||l(1,0))},t:d=>{var y=h+q*u((d-v)/x);return Math.min(1,Math.max(0,y))}}}let ze,Pe;ze=!0,Je=Object.freeze(Object.defineProperty({__proto__:null,prerender:ze},Symbol.toStringTag,{value:"Module"})),Pe=t=>t;function Re(t){const e=t-1;return e*e*e+1}function Be(t,{delay:e=0,duration:n=400,easing:r=Pe}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:o=>`opacity: ${o*a}`}}function ot(t,{delay:e=0,duration:n=400,easing:r=Re,axis:a="y"}={}){const o=getComputedStyle(t),i=+o.opacity,s=a==="y"?"height":"width",f=parseFloat(o[s]),c=a==="y"?["top","bottom"]:["left","right"],l=c.map(p=>`${p[0].toUpperCase()}${p.slice(1)}`),u=parseFloat(o[`padding${l[0]}`]),v=parseFloat(o[`padding${l[1]}`]),h=parseFloat(o[`margin${l[0]}`]),q=parseFloat(o[`margin${l[1]}`]),x=parseFloat(o[`border${l[0]}Width`]),w=parseFloat(o[`border${l[1]}Width`]);return{delay:e,duration:n,easing:r,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*i};${s}: ${p*f}px;padding-${c[0]}: ${p*u}px;padding-${c[1]}: ${p*v}px;margin-${c[0]}: ${p*h}px;margin-${c[1]}: ${p*q}px;border-${c[0]}-width: ${p*x}px;border-${c[1]}-width: ${p*w}px;`}}function Oe(t,e){for(const n in e)t[n]=e[n];return t}function it({fallback:t,...e}){const n=new Map,r=new Map;function a(i,s,f){const{delay:c=0,duration:l=S=>Math.sqrt(S)*30,easing:u=Re}=Oe(Oe({},e),f),v=i.getBoundingClientRect(),h=s.getBoundingClientRect(),q=v.left-h.left,x=v.top-h.top,w=v.width/h.width,p=v.height/h.height,b=Math.sqrt(q*q+x*x),d=getComputedStyle(s),y=d.transform==="none"?"":d.transform,$=+d.opacity;return{delay:c,duration:typeof l=="function"?l(b):l,easing:u,css:(S,V)=>`
			   opacity: ${S*$};
			   transform-origin: top left;
			   transform: ${y} translate(${V*q}px,${V*x}px) scale(${S+(1-S)*w}, ${S+(1-S)*p});
		   `}}function o(i,s,f){return(c,l)=>(i.set(l.key,c),()=>{if(s.has(l.key)){const u=s.get(l.key);return s.delete(l.key),a(u,c,l)}return i.delete(l.key),t&&t(c,l,f)})}return[o(r,n,!1),o(n,r,!0)]}function st(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Ve(t,e){e.darkMode=!e.darkMode}var lt=C(`<div class="moon svelte-17bgi9x"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75
                        0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75
                        21a9.753 9.753 0 009.002-5.998z"></path></svg></div>`),ct=C(`<div class="sun svelte-17bgi9x"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12
                        18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75
                        3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg></div>`),dt=C('<div role="button" tabindex="0" class="icon svelte-17bgi9x"><!></div>');function ut(t,e){J(e,!0);const n="darkMode",[r,a]=it({duration:250,easing:st});let o=R({isInitialized:!1,darkMode:!1});qe(()=>{o.isInitialized?s(o.darkMode):(o.darkMode=i(),o.isInitialized=!0)});function i(){var u,v;const l=(u=window==null?void 0:window.localStorage)==null?void 0:u.getItem(n);return l?l==="true":(v=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)"))==null?void 0:v.matches}function s(l){l?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")),localStorage.setItem(n,l.toString())}var f=dt();f.__click=[Ve,o],f.__keydown=[Ve,o];var c=k(f);D(c,()=>o.darkMode,l=>{var u=lt(),v=k(u);k(v),m(v),m(u),ae(1,u,()=>a,()=>({key:"dark",delay:200})),ae(2,u,()=>r,()=>({key:"light"})),g(l,u)},l=>{var u=ct(),v=k(u);k(v),m(v),m(u),ae(1,u,()=>a,()=>({key:"light",delay:200})),ae(2,u,()=>r,()=>({key:"dark"})),g(l,u)}),m(f),g(t,f),ee()}de(["click","keydown"]);var vt=C('<div class="theme-switch svelte-jrz9as"><!></div>');function _t(t){var e=vt(),n=k(e);ut(n,{$$legacy:!0}),m(e),g(t,e)}var ft=C("<form><!></form>");function pt(t,e){J(e,!0);let n=T(e,"method",3,"POST"),r=T(e,"isError",7);async function a(s){s.preventDefault();const f=s.currentTarget;if(f.reportValidity())r(!1);else{r(!0);return}const c=new FormData(f);let l=new URLSearchParams;if(c.forEach((v,h)=>{l.append(h,v.toString())}),e.onSubmit){e.onSubmit(f,l);return}const u=await fetch(f.action,{method:f.method,headers:{"Content-type":"application/x-www-form-urlencoded"},body:l});ha(u),e.onResponse&&(e.onResponse(u),u.ok&&f.reset())}var o=ft(),i=k(o);me(i,he(e),{}),m(o),j(()=>{L(o,"action",e.action),L(o,"method",n())}),Te("submit",o,a),g(t,o),ee()}var wt=C('<div class="container svelte-1yqkxw6"><div class="loading svelte-1yqkxw6"><div class="loading-1 svelte-1yqkxw6"></div> <div class="loading-2 svelte-1yqkxw6"></div> <div class="loading-3 svelte-1yqkxw6"></div></div></div>');function bt(t,e){let n=T(e,"background",3,!1),r=T(e,"color",3,"var(--col-text)"),a=T(e,"global",3,!1),o=T(e,"offset",3,0);var i=wt(),s=k(i),f=k(s),c=_(_(f,!0)),l=_(_(c,!0));m(s),m(i),j(()=>{se(i,"global",a()),se(i,"local",!a()),se(i,"background",n()),L(s,"style",`margin-top: ${o()??""}px;`),ne(f,"background",r()),ne(c,"background",r()),ne(l,"background",r())}),ae(3,i,()=>Be,()=>({duration:100})),g(t,i)}function We(t,e){e.onclick&&e.onclick()}var gt=C('<div class="load svelte-udh7ym"><!></div>'),mt=C('<div class="txt svelte-udh7ym"><!></div>'),ht=C('<button class="svelte-udh7ym"><!></button>');function yt(t,e){J(e,!0);let n=T(e,"type",3,"button"),r=T(e,"level",3,1),a=T(e,"width",3,"inherit"),o=T(e,"isDisabled",3,!1),i=T(e,"isLoading",3,!1),s=U(!i()),f=ge(()=>o()||i());qe(()=>{i()?setTimeout(()=>{A(s,!1)},120):setTimeout(()=>{A(s,!0)},120)});var c=ht();c.__click=[We,e],c.__keydown=[We,e];var l=k(c);D(l,i,u=>{var v=gt(),h=k(v),q=ge(()=>(r()>1,"var(--col-text)"));bt(h,{background:!1,get color(){return M(q)}}),m(v),g(u,v)},u=>{var v=He(),h=N(v);D(h,()=>M(s),q=>{var x=mt(),w=k(x);me(w,he(e),{}),m(x),ae(1,x,()=>Be),g(q,x)},null,!0),g(u,v)}),m(c),j(()=>{L(c,"type",n()),c.disabled=M(f),se(c,"l1",r()===1),se(c,"l2",r()===2),se(c,"l3",r()>2),ne(c,"width",a()),ne(c,"cursor",i()?"default":"pointer")}),g(t,c),ee()}de(["click","keydown"]);var kt=we(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0
            002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375
            3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375
            7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8
            0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125
            1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>`);function xt(t,e){let n=T(e,"opacity",0,.9),r=T(e,"width",0,20);var a=kt();L(a,"stroke-width",2),k(a),m(a),j(()=>{L(a,"width",r()),L(a,"opacity",n())}),g(t,a)}var $t=we(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138
            2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0
            01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0
            0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);function Mt(t,e){let n=T(e,"color",0,"var(--col-err)"),r=T(e,"opacity",0,.9),a=T(e,"width",0,24);var o=$t();L(o,"stroke-width",2),k(o),m(o),j(()=>{L(o,"width",a()),L(o,"color",n()),L(o,"opacity",r())}),g(t,o)}var Tt=we(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963
            7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);function qt(t,e){let n=T(e,"color",0,"var(--col-ok)"),r=T(e,"opacity",0,.9),a=T(e,"width",0,24);var o=Tt();L(o,"stroke-width",2);var i=k(o);_(i),m(o),j(()=>{L(o,"width",a()),L(o,"color",n()),L(o,"opacity",r())}),g(t,o)}function De(t,e){navigator.clipboard?navigator.clipboard.writeText(e()):console.error("Copy to clipboard is only available in secure contexts")}function Ct(t){t.code}function Ie(t,e){e()==="password"?e("text"):e("password")}function Lt(t){}var St=C('<div role="button" tabindex="0" class="btn clip svelte-1ofxkqs"><!></div>'),jt=C('<div class="nolabel svelte-1ofxkqs"></div>'),At=C('<div class="error svelte-1ofxkqs"><!> </div>'),zt=C('<div><div class="input-row svelte-1ofxkqs"><input> <div class="rel svelte-1ofxkqs"><!> <div role="button" tabindex="0" class="btn show svelte-1ofxkqs"><!></div></div></div></div> <div class="label svelte-1ofxkqs"><label class="font-label noselect svelte-1ofxkqs"> </label> <!></div>',1);function Pt(t,e){let n=T(e,"type",7,"password"),r=T(e,"name",3,"password"),a=T(e,"value",7,""),o=T(e,"label",3,"Password"),i=T(e,"autocomplete",3,"current-password"),s=T(e,"placeholder",3,"Password"),f=T(e,"title",3,"Password"),c=T(e,"disabled",3,!1),l=T(e,"min",3,"14"),u=T(e,"max",3,"128"),v=T(e,"required",3,!0),h=T(e,"width",3,"inherit"),q=T(e,"showCopy",3,!1),x=U(!1);function w(B){var re;const I=(re=B==null?void 0:B.currentTarget)==null?void 0:re.reportValidity();A(x,!I)}function p(B){B.preventDefault(),A(x,!0)}var b=zt(),d=N(b),y=k(d),$=k(y);ka($),$.__input=[Lt],$.__keydown=[Ct];var S=_(_($,!0)),V=k(S);D(V,q,B=>{var I=St();I.__click=[De,a],I.__keydown=[De,a];var re=k(I);xt(re,{}),m(I),g(B,I)});var W=_(_(V,!0));W.__click=[Ie,n],W.__keydown=[Ie,n];var ce=k(W);D(ce,()=>n()==="password",B=>{Mt(B,{width:22})},B=>{qt(B,{width:22})}),m(W),m(S),m(y),m(d);var E=_(_(d,!0)),H=k(E),Me=k(H);m(H);var ta=_(_(H,!0));D(ta,()=>M(x),B=>{var I=At(),re=k(I);D(re,()=>!o(),aa=>{var ra=jt();g(aa,ra)});var na=_(re,!0);m(I),j(()=>P(na,` ${f()??""}`)),ae(3,I,()=>ot),g(B,I)}),m(E),j(()=>{ne(d,"width",h()),L($,"type",n()),L($,"id",e.id),L($,"name",r()),L($,"title",f()),L($,"aria-label",f()),L($,"autocomplete",i()),L($,"placeholder",s()),$.disabled=c(),$.required=v()||void 0,L($,"maxlength",e.maxLength||void 0),L($,"min",l()||void 0),L($,"max",u()||void 0),L($,"pattern",e.pattern||void 0),ne($,"padding-right",q()?"55px":"30px"),L(H,"for",e.id),P(Me,o())}),ya($,a,B=>a(B)),Te("invalid",$,p),Te("blur",$,w),g(t,b)}de(["input","keydown","click"]);const Rt=""+new URL("../assets/spow-wasm_bg.C-R_-59b.wasm",import.meta.url).href,Bt=async(t={},e)=>{let n;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let a;if(typeof Buffer=="function"&&typeof Buffer.from=="function")a=Buffer.from(r,"base64");else if(typeof atob=="function"){const o=atob(r);a=new Uint8Array(o.length);for(let i=0;i<o.length;i++)a[i]=o.charCodeAt(i)}else throw new Error("Cannot decode base64-encoded data URL");n=await WebAssembly.instantiate(a,t)}else{const r=await fetch(e),a=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&a.startsWith("application/wasm"))n=await WebAssembly.instantiateStreaming(r,t);else{const o=await r.arrayBuffer();n=await WebAssembly.instantiate(o,t)}}return n.instance.exports};let F;function Ot(t){F=t}const K=new Array(128).fill(void 0);K.push(void 0,null,!0,!1);function O(t){return K[t]}let le=K.length;function Vt(t){t<132||(K[t]=le,le=t)}function ke(t){const e=O(t);return Vt(t),e}const Wt=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Ue=new Wt("utf-8",{ignoreBOM:!0,fatal:!0});Ue.decode();let ve=null;function _e(){return(ve===null||ve.byteLength===0)&&(ve=new Uint8Array(F.memory.buffer)),ve}function xe(t,e){return t=t>>>0,Ue.decode(_e().subarray(t,t+e))}function z(t){le===K.length&&K.push(K.length+1);const e=le;return le=K[e],K[e]=t,e}const Fe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>{F.__wbindgen_export_0.get(t.dtor)(t.a,t.b)});function Dt(t,e,n,r){const a={a:t,b:e,cnt:1,dtor:n},o=(...i)=>{a.cnt++;const s=a.a;a.a=0;try{return r(s,a.b,...i)}finally{--a.cnt===0?(F.__wbindgen_export_0.get(a.dtor)(s,a.b),Fe.unregister(a)):a.a=s}};return o.original=a,Fe.register(o,a,a),o}function It(t,e,n){F._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6afcae3903cc1087(t,e,z(n))}let $e=0;const Ut=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let fe=new Ut("utf-8");const Ft=typeof fe.encodeInto=="function"?function(t,e){return fe.encodeInto(t,e)}:function(t,e){const n=fe.encode(t);return e.set(n),{read:t.length,written:n.length}};function Et(t,e,n){if(n===void 0){const s=fe.encode(t),f=e(s.length,1)>>>0;return _e().subarray(f,f+s.length).set(s),$e=s.length,f}let r=t.length,a=e(r,1)>>>0;const o=_e();let i=0;for(;i<r;i++){const s=t.charCodeAt(i);if(s>127)break;o[a+i]=s}if(i!==r){i!==0&&(t=t.slice(i)),a=n(a,r,r=i+t.length*3,1)>>>0;const s=_e().subarray(a+i,a+r),f=Ft(t,s);i+=f.written,a=n(a,r,i,1)>>>0}return $e=i,a}function Ht(t){const e=Et(t,F.__wbindgen_malloc,F.__wbindgen_realloc),n=$e,r=F.pow_work_wasm(e,n);return ke(r)}function oe(t,e){try{return t.apply(this,e)}catch(n){F.__wbindgen_exn_store(z(n))}}function Qt(t,e,n,r){F.wasm_bindgen__convert__closures__invoke2_mut__h2d270e890fcceab6(t,e,z(n),z(r))}function Kt(t){ke(t)}function Nt(t,e){const n=xe(t,e);return z(n)}function Gt(t){const e=O(t).queueMicrotask;return z(e)}function Xt(t){return typeof O(t)=="function"}function Yt(t){const e=ke(t).original;return e.cnt--==1?(e.a=0,!0):!1}function Zt(t){queueMicrotask(O(t))}function Jt(){return oe(function(){const t=self.self;return z(t)},arguments)}function en(){return oe(function(){const t=window.window;return z(t)},arguments)}function tn(){return oe(function(){const t=globalThis.globalThis;return z(t)},arguments)}function nn(){return oe(function(){const t=global.global;return z(t)},arguments)}function an(t){return O(t)===void 0}function rn(t,e){const n=new Function(xe(t,e));return z(n)}function on(){return oe(function(t,e){const n=O(t).call(O(e));return z(n)},arguments)}function sn(t){const e=O(t);return z(e)}function ln(){return oe(function(t,e,n){const r=O(t).call(O(e),O(n));return z(r)},arguments)}function cn(t,e){try{var n={a:t,b:e},r=(o,i)=>{const s=n.a;n.a=0;try{return Qt(s,n.b,o,i)}finally{n.a=s}};const a=new Promise(r);return z(a)}finally{n.a=n.b=0}}function dn(t){const e=Promise.resolve(O(t));return z(e)}function un(t,e){const n=O(t).then(O(e));return z(n)}function vn(t,e){throw new Error(xe(t,e))}function _n(t,e,n){const r=Dt(t,e,8,It);return z(r)}URL=globalThis.URL;const X=await Bt({"./spow-wasm_bg.js":{__wbindgen_object_drop_ref:Kt,__wbindgen_string_new:Nt,__wbg_queueMicrotask_3cbae2ec6b6cd3d6:Gt,__wbindgen_is_function:Xt,__wbindgen_cb_drop:Yt,__wbg_queueMicrotask_481971b0d87f3dd4:Zt,__wbg_self_ce0dbfc45cf2f5be:Jt,__wbg_window_c6fb939a7f436783:en,__wbg_globalThis_d1e6af4856ba331b:tn,__wbg_global_207b558942527489:nn,__wbindgen_is_undefined:an,__wbg_newnoargs_e258087cd0daa0ea:rn,__wbg_call_27c0f87801dedf93:on,__wbindgen_object_clone_ref:sn,__wbg_call_b3ca7c6051f9bec1:ln,__wbg_new_81740750da40724f:cn,__wbg_resolve_b0083a7967828ec8:dn,__wbg_then_0c86a60e8fcfe9f6:un,__wbindgen_throw:vn,__wbindgen_closure_wrapper37:_n}},Rt),fn=X.memory,pn=X.pow_work_wasm,wn=X.__wbindgen_export_0,bn=X._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6afcae3903cc1087,gn=X.__wbindgen_malloc,mn=X.__wbindgen_realloc,hn=X.__wbindgen_exn_store,yn=X.wasm_bindgen__convert__closures__invoke2_mut__h2d270e890fcceab6,kn=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_exn_store:hn,__wbindgen_export_0:wn,__wbindgen_malloc:gn,__wbindgen_realloc:mn,_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6afcae3903cc1087:bn,memory:fn,pow_work_wasm:pn,wasm_bindgen__convert__closures__invoke2_mut__h2d270e890fcceab6:yn},Symbol.toStringTag,{value:"Module"}));Ot(kn);var xn=C('<meta property="description" content="Hiqlite Login">'),$n=C("Login",1),Mn=C('<div class="err"> </div>'),Tn=C("<!> <!> <!>",1),qn=C('<div class="container svelte-9m879t"><div class="login svelte-9m879t"><!></div></div>');function Cn(t,e){J(e,!0);const n=`${Ne}/session`;let r=U(""),a=U(!1);async function o(c,l){A(r,""),A(a,!0);let u=await Ce("/pow");if(u.status!==200){let w=await u.json();A(r,R(Object.values(w)[0])),A(a,!1);return}let v=await u.text(),h=await Ht(v);if(!h){A(r,"Error calculating pow"),A(a,!1);return}l.append("pow",h);const q=await fetch(n,{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},body:l});let x=await q.json();q.status===200?Le.set(x):A(r,R(Object.values(x)[0])),A(a,!1)}var i=qn();Qe(c=>{var l=xn();ca.title="Login",g(c,l)});var s=k(i),f=k(s);pt(f,{action:n,onSubmit:o,children:(c,l)=>{var u=Tn(),v=N(u);Pt(v,{id:"password",name:"password",autocomplete:"current-password",placeholder:"Password",title:"Valid Dashboard Password",required:!0});var h=_(_(v,!0));yt(h,{type:"submit",get isLoading(){return M(a)},set isLoading(x){A(a,R(x))},children:(x,w)=>{G();var p=$n();g(x,p)},$$slots:{default:!0}});var q=_(_(h,!0));D(q,()=>M(r),x=>{var w=Mn(),p=k(w);m(w),j(()=>P(p,M(r))),g(x,w)}),g(c,u)},$$slots:{default:!0}}),m(s),m(i),g(t,i),ee()}var ie=(t=>(t.Table="table",t.Index="index",t.Trigger="view",t.View="trigger",t))(ie||{}),Ln=C(" <br>",1),Sn=C('<section class="svelte-1843bx4"><h5 class="header"> <br> </h5> <div class="sql font-mono svelte-1843bx4"></div></section>');function jn(t,e){J(e,!0);let n=ge(()=>{var c;return(c=e.table.sql)==null?void 0:c.split(`
`)});var r=Sn(),a=k(r),o=k(a),i=_(o),s=_(i,!0);m(a);var f=_(_(a,!0));Ge(f,73,()=>M(n),xa,(c,l,u)=>{var v=Ln(),h=N(v,!0);_(h),j(()=>P(h,te(l))),g(c,v)}),m(f),m(r),j(()=>{P(o,e.table.name),P(s,` ${e.table.typ??""}: ${e.table.tbl_name??""}`)}),g(t,r),ee()}function Ee(t,e,n){e(n.view)}var An=C('<div role="button" tabindex="0"> </div>');function pe(t,e){let n=T(e,"viewSelected",7);var r=An();r.__click=[Ee,n,e],r.__keydown=[Ee,n,e];var a=k(r);m(r),j(()=>{Xe(r,`${(n()===e.view?"selected":"")??""} svelte-wxk3jy`),P(a,e.view)}),g(t,r)}de(["click","keydown"]);var zn=we('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>');function Pn(t,e){let n=T(e,"opacity",0,.9),r=T(e,"width",0,24);var a=zn();L(a,"stroke-width",2),k(a),m(a),j(()=>{L(a,"width",r()),L(a,"opacity",n())}),g(t,a)}var Rn=C('<div class="err"> </div>'),Bn=(t,e,n)=>e(te(n).name),On=(t,e,n)=>e(te(n).name),Vn=(t,e,n)=>e(te(n).name),Wn=(t,e,n)=>e(te(n).name),Dn=C('<div role="button" tabindex="0" class="btn svelte-ik7x4m"><!></div>'),In=C('<div role="button" tabindex="0"><div> </div> <!></div>'),Un=C('<!> <div class="selector svelte-ik7x4m"><!> <!> <!> <!></div> <div id="tables" class="svelte-ik7x4m"><div class="tables svelte-ik7x4m"></div> <!></div>',1);function Fn(t,e){J(e,!0);let n=U(R([])),r=U(void 0),a=U(R(ie.Table)),o=U(void 0);qe(()=>{i(M(a))});async function i(d){let y=await Ce(`/tables/${d}`);y.status===200?A(n,R(await y.json())):A(o,R(await y.json()))}function s(d){A(r,R(M(n).filter(y=>y.name===d)[0]))}function f(d){let y={id:`${d}_${$a(4)}`,query:`${Ma}
PRAGMA table_info(${d})`};Ta.push(y),s(d)}var c=Un(),l=N(c);D(l,()=>M(o),d=>{var y=Rn(),$=k(y);m(y),j(()=>P($,M(o))),g(d,y)});var u=_(_(l,!0)),v=k(u);pe(v,{get view(){return ie.Table},get viewSelected(){return M(a)},set viewSelected(d){A(a,R(d))}});var h=_(_(v,!0));pe(h,{get view(){return ie.Index},get viewSelected(){return M(a)},set viewSelected(d){A(a,R(d))}});var q=_(_(h,!0));pe(q,{get view(){return ie.Trigger},get viewSelected(){return M(a)},set viewSelected(d){A(a,R(d))}});var x=_(_(q,!0));pe(x,{get view(){return ie.View},get viewSelected(){return M(a)},set viewSelected(d){A(a,R(d))}}),m(u);var w=_(_(u,!0)),p=k(w);Ge(p,77,()=>M(n),(d,y)=>d.name,(d,y,$)=>{var S=In();S.__click=[Bn,s,y],S.__keydown=[On,s,y];var V=k(S),W=k(V);m(V);var ce=_(_(V,!0));D(ce,()=>te(y).typ==="table",E=>{var H=Dn();H.__click=[Vn,f,y],H.__keydown=[Wn,f,y];var Me=k(H);Pn(Me,{}),m(H),g(E,H)}),m(S),j(()=>{var E;Xe(S,`${(((E=M(r))==null?void 0:E.name)===te(y).name?"entry selected":"entry")??""} svelte-ik7x4m`),P(W,te(y).name)}),g(d,S)}),m(p);var b=_(_(p,!0));D(b,()=>M(r),d=>{jn(d,{get table(){return M(r)}})}),m(w),g(t,c),ee()}de(["click","keydown"]);var En=C('<div class="metric svelte-1ktnipf"><div class="label font-label svelte-1ktnipf"> </div> <div class="font-mono"><!></div></div>');function Y(t,e){var n=En(),r=k(n),a=k(r);m(r);var o=_(_(r,!0)),i=k(o);me(i,he(e),{}),m(o),m(n),j(()=>P(a,e.label)),g(t,n)}var Hn=C('<b>Metrics</b> <div class="space svelte-12lemcq"></div> <!> <!> <!> <!> <!> <!> <!> <!>',1);function Qn(t,e){J(e,!0);let n=U(void 0),r=ge(()=>{var w;return(w=M(n))==null?void 0:w.membership_config.membership.configs.join(", ")});setInterval(()=>{a()},1e4),Ye(()=>{a()});async function a(){let w=await Ce("/metrics");w.status===200?A(n,R(await w.json())):console.error(await w.json())}var o=Hn(),i=N(o),s=_(_(i,!0)),f=_(_(s,!0));Y(f,{label:"This Node",children:(w,p)=>{G();var b=Z();j(()=>{var d,y;return P(b,`${((d=M(n))==null?void 0:d.id)??""}
    ${((y=M(n))==null?void 0:y.state)??""}`)}),g(w,b)},$$slots:{default:!0}});var c=_(_(f,!0));Y(c,{label:"Current Leader",children:(w,p)=>{G();var b=Z();j(()=>{var d;return P(b,(d=M(n))==null?void 0:d.current_leader)}),g(w,b)},$$slots:{default:!0}});var l=_(_(c,!0));Y(l,{label:"Vote Leader",children:(w,p)=>{G();var b=Z();j(()=>{var d;return P(b,(d=M(n))==null?void 0:d.vote.leader_id.node_id)}),g(w,b)},$$slots:{default:!0}});var u=_(_(l,!0));Y(u,{label:"Last Log Index",children:(w,p)=>{G();var b=Z();j(()=>{var d;return P(b,(d=M(n))==null?void 0:d.last_log_index)}),g(w,b)},$$slots:{default:!0}});var v=_(_(u,!0));Y(v,{label:"Last Applied Log",children:(w,p)=>{G();var b=Z();j(()=>{var d,y,$,S,V,W;return P(b,`${((y=(d=M(n))==null?void 0:d.last_applied)==null?void 0:y.leader_id.node_id)??""}
    -
    ${((S=($=M(n))==null?void 0:$.last_applied)==null?void 0:S.leader_id.term)??""}
    -
    ${((W=(V=M(n))==null?void 0:V.last_applied)==null?void 0:W.index)??""}`)}),g(w,b)},$$slots:{default:!0}});var h=_(_(v,!0));Y(h,{label:"Last Snapshot",children:(w,p)=>{G();var b=Z();j(()=>{var d,y,$,S;return P(b,`${((y=(d=M(n))==null?void 0:d.snapshot)==null?void 0:y.leader_id)??""}
    -
    ${((S=($=M(n))==null?void 0:$.snapshot)==null?void 0:S.index)??""}`)}),g(w,b)},$$slots:{default:!0}});var q=_(_(h,!0));Y(q,{label:"Members",children:(w,p)=>{G();var b=Z();j(()=>P(b,M(r))),g(w,b)},$$slots:{default:!0}});var x=_(_(q,!0));Y(x,{label:"Millis Quorum Ack",children:(w,p)=>{G();var b=Z();j(()=>{var d;return P(b,(d=M(n))==null?void 0:d.millis_since_quorum_ack)}),g(w,b)},$$slots:{default:!0}}),g(t,o),ee()}var Kn=C('<aside class="svelte-1hgiopb"><!></aside>');function Nn(t){var e=Kn(),n=k(e);Qn(n,{$$legacy:!0}),m(e),g(t,e)}const Gn=(t,e,n)=>{if(ba(t))return ga(t);const r=e(n);return ma(t,r),r},Xn=(t,e)=>Gn(t,Yn,e),Yn=t=>{let e=U(R(t));return{get value(){return M(e)},set value(n){A(e,R(n))}}};var Zn=C('<meta name="robots" content="noindex nofollow">'),Jn=C('<nav class="svelte-1t53nk0"><!></nav> <main class="svelte-1t53nk0"><!></main> <!>',1),ea=C("<!> <!>",1);Ze=function(t,e){J(e,!0);let n=U(void 0),r=U(!1);Xn("queries",[qa]),Le.subscribe(s=>{A(n,R(s))}),Ye(async()=>{let s=await fetch(`${Ne}/session`);s.status===200&&Le.set(await s.json()),A(r,!0)});var a=ea();Qe(s=>{var f=Zn();g(s,f)});var o=N(a);D(o,()=>M(n),s=>{var f=Jn(),c=N(f),l=k(c);Fn(l,{}),m(c);var u=_(_(c,!0)),v=k(u);me(v,he(e),{}),m(u);var h=_(_(u,!0));Nn(h),g(s,f)},s=>{var f=He(),c=N(f);D(c,()=>M(r),l=>{Cn(l,{})},null,!0),g(s,f)});var i=_(_(o,!0));_t(i),g(t,a),ee()}})();export{Ca as __tla,Ze as component,Je as universal};
