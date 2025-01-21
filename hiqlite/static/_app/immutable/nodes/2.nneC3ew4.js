import{l as Et,r as Ht,w as Ft,a as l,t as y,c as te,p as ct,o as ge,f as je,s as ve,b as Qe,q as Yt}from"../chunks/DJmSGhnc.js";import"../chunks/CZNW28Sq.js";import{N as mt,O as Vt,p as be,k as d,l as i,t as T,g as t,j as we,h as ce,a as de,i as Z,s as z,v as x,ad as q,b as We,R as Ie,aR as et,aQ as Wt}from"../chunks/WH8gHp3S.js";import{s as Se,a as p,o as _e,m as Ze,B as ye,r as kt,d as xe,b as Zt,g as $e,i as Te,p as Xt,q as Kt,I as Gt,R as Jt,n as yt,u as Qt,j as It,k as ea,Q as re,v as ta,D as aa}from"../chunks/Dzdjl--S.js";import{c as ra,p as m,s as oa,d as la,i as N,b as Fe,a as $}from"../chunks/UlN6PZgr.js";import{s as na}from"../chunks/B1VMp0bd.js";function xt(r,e,a){if(r.multiple)return ca(r,e);for(var s of r.options){var o=Xe(s);if(ra(o,e)){s.selected=!0;return}}(!a||e!==void 0)&&(r.selectedIndex=-1)}function sa(r,e){mt(()=>{var a=new MutationObserver(()=>{var s=r.__value;xt(r,s)});return a.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function ia(r,e,a=e){var s=!0;Et(r,"change",o=>{var n=o?"[selected]":":checked",g;if(r.multiple)g=[].map.call(r.querySelectorAll(n),Xe);else{var h=r.querySelector(n)??r.querySelector("option:not([disabled])");g=h&&Xe(h)}a(g)}),mt(()=>{var o=e();if(xt(r,o,s),s&&o===void 0){var n=r.querySelector(":checked");n!==null&&(o=Xe(n),a(o))}r.__value=o,s=!1}),sa(r)}function ca(r,e){for(var a of r.options)a.selected=~e.indexOf(Xe(a))}function Xe(r){return"__value"in r?r.__value:r.value}function va(r,e,a,s=a){e.addEventListener("input",()=>{s(e[r])}),Vt(()=>{var o=a();if(e[r]!==o)if(o==null){var n=e[r];s(n)}else e[r]=o+""})}function da(r,e){Ht(window,["resize"],()=>Ft(()=>e(window[r])))}const ua=()=>{const r=na;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},fa={subscribe(r){return ua().page.subscribe(r)}};var ha=y('<span class="font-label"><a class="svelte-a0xtvp"><!></a></span>');function $t(r,e){be(e,!0);const[a,s]=oa(),o=()=>la(fa,"$page",a);let n=m(e,"selectedStep",3,!1),g=m(e,"hideUnderline",3,!1),h=ce(()=>{if(n())return"step";if(o().route.id===e.href.split("?")[0])return"page"});var B=ha(),k=d(B),E=d(k);Se(E,()=>e.children),i(k),i(B),T(()=>{p(k,"href",e.href),p(k,"target",e.target),p(k,"aria-current",t(h)),_e(k,"hideUnderline",g())}),l(r,B),we(),s()}var pa=y('<!> <div class="popover svelte-1au8ouo" popover="auto"><div class="inner fade-in svelte-1au8ouo"><!></div></div>',1);function tt(r,e){be(e,!0);let a=m(e,"ref",15),s=m(e,"roleButton",3,"button"),o=m(e,"offsetLeft",3,"0px"),n=m(e,"offsetTop",3,"0px"),g=m(e,"close",15);const h=Ze(8),B=Ze(8);let k=q(void 0),E=q(!1);de(()=>{g(b)});function v(){if(a()&&t(k))if(e.absolute)t(k).style.top=n(),t(k).style.left=o();else{let A=a().getBoundingClientRect();t(k).style.top=`calc(${A.bottom+window.scrollY}px + ${n()})`,t(k).style.left=`calc(${A.left+window.scrollX}px + ${o()})`}else console.error("button and popover ref missing")}function b(){var A;(A=t(k))==null||A.hidePopover()}function U(A){var C;let V=A.newState;x(E,V==="open"),(C=e.onToggle)==null||C.call(e,V)}var _=pa(),P=Z(_);ye(P,{get role(){return s()},id:h,ariaControls:B,popovertarget:B,onclick:v,get invisible(){return e.btnInvisible},get isDisabled(){return e.btnDisabled},get onLeft(){return e.onLeft},get onRight(){return e.onRight},get onUp(){return e.onUp},get onDown(){return e.onDown},get ref(){return a()},set ref(A){a(A)},children:(A,V)=>{var C=te(),L=Z(C);Se(L,()=>e.button),l(A,C)},$$slots:{default:!0}});var O=z(P,2);p(O,"id",B),p(O,"aria-labelledby",h);var W=d(O),H=d(W);{var F=A=>{var V=te(),C=Z(V);{var L=u=>{var S=te(),w=Z(S);Se(w,()=>e.children),l(u,S)};N(C,u=>{t(E)&&u(L)})}l(A,V)},oe=A=>{var V=te(),C=Z(V);Se(C,()=>e.children),l(A,V)};N(H,A=>{e.lazy?A(F):A(oe,!1)})}i(W),i(O),Fe(O,A=>x(k,A),()=>t(k)),T(()=>p(O,"aria-label",e.ariaLabel)),ct("toggle",O,U),l(r,_),we()}var ga=ge('<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"></path></svg>');function ba(r,e){let a=m(e,"color",8,"currentColor"),s=m(e,"opacity",8,.9),o=m(e,"width",8,"1.5rem");var n=ga();p(n,"stroke-width",2),T(()=>{p(n,"stroke",a()),p(n,"width",o()),p(n,"opacity",s())}),l(r,n)}var wa=ge('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>');function ma(r,e){let a=m(e,"opacity",8,.9),s=m(e,"width",8,"1.5rem");var o=wa();p(o,"stroke-width",2),T(()=>{p(o,"width",s()),p(o,"opacity",a())}),l(r,o)}function ka(r,e,a,s){var o,n,g;switch(r.code){case"Enter":e();break;case"Tab":(o=a.onTab)==null||o.call(a,s());break;case"ArrowUp":(n=a.onUp)==null||n.call(a,s());break;case"ArrowDown":(g=a.onDown)==null||g.call(a,s());break}}var ya=y('<div class="options svelte-13lxusw"><!></div>'),xa=y("<option></option>"),$a=y('<datalist class="absolute svelte-13lxusw"></datalist>'),La=y('<div class="magnify svelte-13lxusw"><!></div>'),Ca=y('<div class="btnSearch svelte-13lxusw"><!></div>'),Sa=y('<search class="flex container svelte-13lxusw"><!> <input type="search" autocomplete="off" aria-label="Search" placeholder="Search" class="svelte-13lxusw"> <!> <div class="relative"><div class="absolute btnDelete svelte-13lxusw"><!></div></div> <!></search>');function _a(r,e){be(e,!0);let a=m(e,"value",15,""),s=m(e,"option",15),o=m(e,"focus",15),n=m(e,"width",3,"100%");const g=Ze(8),h=Ze(8);let B=q(void 0),k=ce(()=>e.datalist&&e.datalist.length>0?h:void 0);de(()=>{o(v)});function E(){var C;(C=e.onSearch)==null||C.call(e,a())}function v(){var C;(C=t(B))==null||C.focus()}var b=Sa(),U=d(b);{var _=C=>{var L=ya(),u=d(L);Lt(u,{ariaLabel:"Search Options",get options(){return e.options},borderless:!0,get value(){return s()},set value(S){s(S)}}),i(L),l(C,L)};N(U,C=>{e.options&&C(_)})}var P=z(U,2);kt(P),p(P,"id",g),P.__keydown=[ka,E,e,a],Fe(P,C=>x(B,C),()=>t(B));var O=z(P,2);{var W=C=>{var L=$a();p(L,"id",h),$e(L,21,()=>e.datalist,Te,(u,S)=>{var w=xa(),j={};T(()=>{j!==(j=t(S))&&(w.value=(w.__value=t(S))==null?"":t(S))}),l(u,w)}),i(L),l(C,L)};N(O,C=>{e.datalist&&C(W)})}var H=z(O,2),F=d(H),oe=d(F);ye(oe,{ariaLabel:"Delete Search Input",invisible:!0,onclick:()=>a(""),children:(C,L)=>{ba(C,{color:"hsl(var(--bg-high))",width:24})},$$slots:{default:!0}}),i(F),i(H);var A=z(H,2);{var V=C=>{var L=Ca(),u=d(L);ye(u,{ariaLabel:"Search",invisible:!0,onclick:E,children:(S,w)=>{var j=La(),G=d(j);ma(G,{}),i(j),l(S,j)},$$slots:{default:!0}}),i(L),l(C,L)};N(A,C=>{e.onSearch&&C(V)})}i(b),T(()=>{xe(b,"border",e.borderless?void 0:"1px solid hsl(var(--bg-high))"),xe(b,"width",n()),p(P,"list",t(k))}),ct("focus",P,()=>{var C;return(C=e.onFocus)==null?void 0:C.call(e)}),Zt(P,a),l(r,b),we()}je(["keydown"]);var Ta=ge('<svg fill="none" viewBox="0 0 24 24" color="currentColor" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>');function vt(r,e){let a=m(e,"opacity",8,.9),s=m(e,"width",8,"1.5rem");var o=Ta();p(o,"stroke-width",2),T(()=>{p(o,"width",s()),p(o,"opacity",a())}),l(r,o)}function Ma(r,e,a,s,o){let n=r.code;n==="ArrowDown"?(r.preventDefault(),e()&&x(a,t(a)+1)):n==="ArrowUp"?(r.preventDefault(),e()&&x(a,t(a)-1)):n==="Enter"&&t(a)>-1?s(t(o)[t(a)]):n==="Enter"&&t(a)===-1&&t(o).length===1&&s(t(o)[0])}var Oa=y('<div class="btn svelte-1j5gmms"> <div class="chevron svelte-1j5gmms"><!></div></div>'),Da=y('<div class="optPopover svelte-1j5gmms"> </div>'),Ba=y('<div role="listbox" tabindex="0" class="popover svelte-1j5gmms"><!> <div class="popoverOptions svelte-1j5gmms"></div></div>'),Pa=y('<option class="opt svelte-1j5gmms"> </option>'),za=y('<select class="svelte-1j5gmms"></select>');function Lt(r,e){be(e,!0);let a=m(e,"ref",15),s=m(e,"options",19,()=>[]),o=m(e,"value",15),n=m(e,"asPopover",3,!0),g=m(e,"borderless",3,!1),h=m(e,"withSearch",3,!1),B=m(e,"fallbackOptions",3,!1),k=q(void 0),E=q($(B()?!1:n())),v=q(void 0),b=q($(h()?-1:0)),U=q(void 0),_=q(""),P=ce(()=>{if(!h())return s();if(typeof o()=="string")return s().filter(u=>u.toLowerCase().includes(t(_).toLowerCase()));let L=Number.parseInt(t(_))||o();return s().filter(u=>u===L)});de(()=>{t(E)!==n()&&x(E,n())}),de(()=>{var L,u;if(t(b)===-1&&((L=t(k))==null||L.scrollTo({top:0,behavior:"smooth"})),h()){if(t(b)<0||t(b)>t(P).length-1){x(b,-1),(u=t(U))==null||u();return}}else t(b)<0?x(b,t(P).length-1):t(b)>t(P).length-1&&x(b,0),O()});function O(){if(t(k)){let L=t(k).getElementsByTagName("button")[t(b)];L.scrollIntoView({behavior:"smooth",block:"center"}),L.focus()}else console.error("refOptions is undefined")}function W(L){var u;L==="open"&&(h()?(x(b,-1),(u=t(U))==null||u()):(x(b,$(s().findIndex(S=>S===o())||0)),O()))}function H(){return t(P).length>0?!0:(x(b,-1),!1)}function F(L){o(L),x(_,""),setTimeout(()=>{var u;(u=t(v))==null||u()},20)}var oe=te(),A=Z(oe);{var V=L=>{tt(L,{get ariaLabel(){return e.ariaLabel},roleButton:"combobox",btnInvisible:!0,get offsetTop(){return e.offsetTop},get offsetLeft(){return e.offsetLeft},onToggle:W,get onLeft(){return e.onLeft},get onRight(){return e.onRight},get onUp(){return e.onUp},get onDown(){return e.onDown},get ref(){return a()},set ref(u){a(u)},get close(){return t(v)},set close(u){x(v,$(u))},button:u=>{var S=Oa(),w=d(S),j=z(w),G=d(j);vt(G,{width:14}),i(j),i(S),T(()=>{p(S,"data-border",!g()),ve(w,`${o()??""} `)}),l(u,S)},children:(u,S)=>{var w=Ba();w.__keydown=[Ma,H,b,F,P];var j=d(w);{var G=he=>{_a(he,{onFocus:()=>x(b,-1),get value(){return t(_)},set value(ue){x(_,$(ue))},get focus(){return t(U)},set focus(ue){x(U,$(ue))}})};N(j,he=>{h()&&he(G)})}var le=z(j,2);$e(le,21,()=>t(P),Te,(he,ue,Ae)=>{ye(he,{invisible:!0,invisibleOutline:!0,onclick:()=>F(t(ue)),children:(pe,Re)=>{var Le=Da(),Ge=d(Le,!0);i(Le),T(()=>{p(Le,"aria-selected",o()===t(ue)),p(Le,"data-focus",t(b)===Ae),ve(Ge,t(ue))}),l(pe,Le)},$$slots:{default:!0}})}),i(le),Fe(le,he=>x(k,he),()=>t(k)),i(w),T(()=>xe(w,"max-height",e.maxHeight)),l(u,w)},$$slots:{button:!0,default:!0}})},C=L=>{var u=za();$e(u,21,()=>t(P),Te,(S,w)=>{var j=Pa(),G={},le=d(j,!0);i(j),T(()=>{G!==(G=t(w))&&(j.value=(j.__value=t(w))==null?"":t(w)),Xt(j,o()===t(w)),ve(le,t(w))}),l(S,j)}),i(u),T(()=>{p(u,"name",e.name),p(u,"aria-label",e.ariaLabel),_e(u,"borderless",g())}),ia(u,o),l(L,u)};N(A,L=>{t(E)?L(V):L(C,!1)})}l(r,oe),we()}je(["keydown"]);var ja=y('<div class="link noselect svelte-1bye1t3"> </div>'),Aa=y('<li class="svelte-1bye1t3"><!></li>'),Ra=y('<nav aria-label="Pagination" class="svelte-1bye1t3"><ul class="svelte-1bye1t3"></ul></nav>'),qa=y('<div class="flex gap-10 svelte-1bye1t3"><div class="flex gap-05 chunkSize noselect svelte-1bye1t3"><div class="svelte-1bye1t3">Entries</div> <div class="svelte-1bye1t3"><!></div></div> <div class="font-label total svelte-1bye1t3"> </div></div>'),Ua=y('<div class="iconLeft svelte-1bye1t3" aria-label="Go to previous page"><!></div>'),Na=y('<div class="iconRight svelte-1bye1t3" aria-label="Go to next page"><!></div>'),Ea=y('<div class="container svelte-1bye1t3"><!> <!> <!> <!></div>');function Ha(r,e){be(e,!0);const a=u=>{var S=Ra(),w=d(S);$e(w,21,()=>t(b),Te,(j,G)=>{var le=Aa(),he=d(le);ye(he,{invisible:!0,onclick:()=>P(t(G)),onLeft:U,onRight:_,children:(ue,Ae)=>{var pe=ja(),Re=d(pe,!0);i(pe),T(()=>ve(Re,t(G))),l(ue,pe)},$$slots:{default:!0}}),i(le),T(()=>{p(le,"aria-label",`go to page number: ${t(G)}`),p(le,"aria-current",g()===t(G)?"step":void 0)}),l(j,le)}),i(w),i(S),l(u,S)},s=u=>{var S=qa(),w=d(S),j=z(d(w),2),G=d(j);Lt(G,{ariaLabel:"Page Count",options:o,offsetTop:"-17rem",borderless:!0,get value(){return h()},set value(ue){h(ue)}}),i(j),i(w);var le=z(w,2),he=d(le);i(le),i(S),T(()=>ve(he,`Total: ${e.items.length??""}`)),l(u,S)},o=[5,7,10,15,20,30,50,100];let n=m(e,"itemsPaginated",15),g=m(e,"page",15,1),h=m(e,"pageSize",31,()=>$(o[0])),B=m(e,"compact",3,!1);const k=16;let E=We(()=>h()),v=q($([])),b=q($([]));de(()=>{h()!==E&&(E=We(()=>h()),g(1))}),de(()=>{let u=[];for(let S=0;S<e.items.length;S+=h()){const w=e.items.slice(S,S+h());u.push(w)}x(v,$(u)),n(u[g()-1])}),de(()=>{O()});function U(){g()>1&&P(g()-1)}function _(){g()<t(v).length&&P(g()+1)}function P(u){g(u),O()}function O(){let u=[],S=Math.floor(h()/2);if(t(v).length<=h())for(let w=1;w<=t(v).length;w++)u.push(w);else if(g()<=S)for(let w=1;w<=h();w++)u.push(w);else if(g()>t(v).length-S-1)for(let w=t(v).length-h();w<=t(v).length-1;w++)u.push(w+1);else for(let w=g()-S;w<g()-S+h();w++)u.push(w);x(b,$(u))}var W=Ea(),H=d(W),F=ce(()=>g()===1);ye(H,{onclick:U,invisible:!0,get isDisabled(){return t(F)},children:(u,S)=>{var w=Ua(),j=d(w);vt(j,{width:k}),i(w),T(()=>p(w,"data-disabled",g()===1)),l(u,w)},$$slots:{default:!0}});var oe=z(H,2);a(oe);var A=z(oe,2),V=ce(()=>g()===t(v).length);ye(A,{onclick:_,invisible:!0,get isDisabled(){return t(V)},children:(u,S)=>{var w=Na(),j=d(w);vt(j,{width:k}),i(w),T(()=>p(w,"data-disabled",g()===t(v).length)),l(u,w)},$$slots:{default:!0}});var C=z(A,2);{var L=u=>{s(u)};N(C,u=>{B()||u(L)})}i(W),l(r,W),we()}function Fa(r,e){console.log(r.code),r.code==="Enter"&&e()}var Ya=y('<label class="font-label noselect svelte-1supmpl"><input type="checkbox" class="svelte-1supmpl"> <span class="svelte-1supmpl"><!></span></label>');function Ke(r,e){be(e,!0);let a=m(e,"checked",15,!1),s=m(e,"ariaLabel",3,""),o=m(e,"borderColor",3,"hsl(var(--bg-high))");function n(){a(!a())}var g=Ya(),h=d(g);kt(h),h.__click=n,h.__keydown=[Fa,n];var B=z(h,2),k=d(B);Se(k,()=>e.children??Ie),i(B),i(g),T(()=>{p(h,"name",e.name),h.disabled=e.disabled,p(h,"aria-disabled",e.disabled),p(h,"aria-checked",a()),p(h,"aria-label",s()),xe(h,"border-color",o())}),Kt(h,a),l(r,g),we()}je(["click","keydown"]);var Va=ge('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" color="hsl(var(--action))"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>'),Wa=ge('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" color="hsl(var(--error))"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>');function Za(r,e){var a=te(),s=Z(a);{var o=g=>{var h=Va();p(h,"stroke-width",2),p(h,"width",20),p(h,"opacity",.9),l(g,h)},n=g=>{var h=Wa();p(h,"stroke-width",2),p(h,"width",20),p(h,"opacity",.9),l(g,h)};N(s,g=>{e.checked?g(o):g(n,!1)})}l(r,a)}var Xa=ge('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>');function Ka(r,e){let a=m(e,"color",8,"currentColor"),s=m(e,"opacity",8,.9),o=m(e,"width",8,"1.5rem");var n=Xa();p(n,"stroke-width",2),T(()=>{p(n,"width",o()),p(n,"color",a()),p(n,"opacity",s())}),l(r,n)}var Ga=ge('<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg>');function Ja(r,e){let a=m(e,"color",8,"currentColor"),s=m(e,"opacity",8,.9),o=m(e,"width",8,"1.5rem");var n=Ga();p(n,"stroke-width",2),T(()=>{p(n,"stroke",a()),p(n,"width",o()),p(n,"opacity",s())}),l(r,n)}var Qa=ge(`<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213
            1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0
            1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0
            1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0
            1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0
            1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52
            0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125
            1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125
            0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);function Ia(r,e){let a=m(e,"color",8,"currentColor"),s=m(e,"opacity",8,.9),o=m(e,"width",8,"1.5rem");var n=Qa();p(n,"stroke-width",2),T(()=>{p(n,"stroke",a()),p(n,"width",o()),p(n,"opacity",s())}),l(r,n)}async function er(r){var e;await((e=navigator==null?void 0:navigator.clipboard)==null?void 0:e.writeText(r))}var tr=ge(`<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5
            0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>`);function ar(r,e){let a=m(e,"color",8,"currentColor"),s=m(e,"opacity",8,.9),o=m(e,"width",8,"1.5rem");var n=tr();p(n,"stroke-width",2),T(()=>{p(n,"stroke",a()),p(n,"width",o()),p(n,"opacity",s())}),l(r,n)}var rr=y('<span class="btnSelect svelte-12u4ifk"><!></span>'),or=y('<th class="headerCheckbox svelte-12u4ifk"><!> <!></th>'),lr=y('<span class="iconOrder svelte-12u4ifk"><!></span>'),nr=y('<span class="orderText svelte-12u4ifk"> </span> <!>',1),sr=y('<span class="rawText svelte-12u4ifk"> </span>'),ir=y('<th class="svelte-12u4ifk"><span class="flex-1 label svelte-12u4ifk"><!></span> <span class="relative"><span role="none" class="absolute sizeable svelte-12u4ifk"></span></span></th>'),cr=y('<th class="headerOptions svelte-12u4ifk"><!></th>'),vr=y('<td class="checkbox svelte-12u4ifk"><!></td>'),dr=y('<span class="linkText nowrap svelte-12u4ifk"> </span>'),ur=y('<span class="linkText nowrap svelte-12u4ifk"> </span>'),fr=y('<span class="copyToClip nowrap svelte-12u4ifk"> </span>'),hr=y('<span class="checkIcon nowrap svelte-12u4ifk"><!></span>'),pr=y('<span class="onclick nowrap svelte-12u4ifk"> </span>'),gr=y('<span class="rawText nowrap svelte-12u4ifk"> </span>'),br=y('<td class="svelte-12u4ifk"><!></td>'),wr=y('<span class="btnOptions svelte-12u4ifk"><!></span>'),mr=y('<td class="options svelte-12u4ifk"><!></td>'),kr=y('<tr class="svelte-12u4ifk"><!><!><!></tr>'),yr=y('<div class="eye svelte-12u4ifk"><!></div>'),xr=y('<div class="columnSelect svelte-12u4ifk"><!></div>'),$r=y('<div class="columnSelect svelte-12u4ifk"><!></div>'),Lr=y('<div class="columnSelect svelte-12u4ifk"><!></div>'),Cr=y('<div class="columnsSelect svelte-12u4ifk"><!> <!> <!></div>'),Sr=y("<div></div>"),_r=y('<table class="svelte-12u4ifk"><thead class="svelte-12u4ifk"><tr class="svelte-12u4ifk"><!><!><!></tr></thead><tbody class="svelte-12u4ifk"><!></tbody><caption class="flex space-between svelte-12u4ifk"><div class="flex"><!> <div class="caption svelte-12u4ifk"><!></div> <!></div></caption></table>');function Tr(r,e){be(e,!0);let a=m(e,"showColumns",31,()=>$(Array(e.columns.length).fill(!0))),s=m(e,"paginationCompact",3,!1),o=m(e,"paginationPageSize",3,15),n=m(e,"selectInitHide",3,!1),g=m(e,"minWidthColPx",3,50);const h="3rem",B="2rem";let k=$(S()),E=q($(We(()=>k))),v=q(1),b=q($(We(()=>o()))),U=q(!1),_=q($(Array(e.rows.length).fill(!1))),P=ce(()=>t(_).find(c=>c===!0)),O=q(void 0),W=q($([])),H=q("up"),F=q($([])),oe=ce(()=>e.paginationDisabled!==void 0?e.paginationDisabled:e.rows.length<o()),A=ce(()=>e.paginationDisabled||t(oe)?e.rows.length:t(F)&&t(F).length?t(F).length:(t(v)!=1&&x(v,1),0)),V=$(Array(We(()=>k.length)).fill(void 0)),C=q(void 0),L=0,u=q(void 0);de(()=>{setTimeout(()=>{for(let c=1;c<k.length;c++)if(k[c]==="auto"){L=e.select?c:c-1;let f=V[c];f&&Ae(f.getBoundingClientRect().width)}},150)}),de(()=>{let c=Array(e.rows.length).fill(!1);if(t(U)){let f;t(v)===1?f=0:f=(t(v)-1)*t(b);let D=Math.min(t(v)*t(b),e.rows.length);for(let R=f;R<D;R++)c[R]=!0}x(_,$(c))}),de(()=>{let c=e.paginationDisabled||t(oe)?e.rows.length:t(F).length||0;x(W,$(Array(c).fill(()=>console.error("un-initialized popover close option"))))}),de(()=>{let c=[];for(let f=0;f<k.length;f++)a()[f]&&c.push(k[f]);x(E,$(c))}),de(()=>{if(e.highlight!==void 0&&t(C)){let c=e.highlight;!t(oe)&&t(v)>1&&(c=e.highlight-(t(v)-1)*t(b)),x(u,$(c)),setTimeout(()=>{var f,D;(D=(f=t(C))==null?void 0:f.getElementsByClassName("highlight")[0])==null||D.scrollIntoView({behavior:"smooth",block:"center"})},250)}else x(u,void 0)});function S(){let c=e.columns.map(D=>D.initialWidth),f=[...a()];return e.select&&(c=[h,...c],f=[!n(),...f]),e.options&&(c=[...c,B],f=[...f,!0]),a(f),c}function w(){return t(E).join(" ")}function j(c,f){x(_,$(Array(e.rows.length).fill(!1)));let D=1;t(H)==="up"?(D=-1,x(H,"down")):x(H,"up"),f==="string"?e.rows.sort((R,J)=>R[c].content.localeCompare(J[c].content)*D):f==="number"&&e.rows.sort((R,J)=>(R[c].content-J[c].content)*D)}function G(c){return!t(oe)&&t(v)>1?(t(v)-1)*t(b)+c:c}function le(c){L=c;let f=V[c];f?(Ae(f.getBoundingClientRect().width),window.addEventListener("mousemove",ue),window.addEventListener("mouseup",he,{once:!0})):console.error("invalid ref from refCols in onMouseDown")}function he(){window.removeEventListener("mousemove",ue)}function ue(c){let f=V[L];if(f){let D=f.getBoundingClientRect().left,R=window.scrollX+c.x-D;Ae(R)}else console.error("invalid ref from refCols in onMove")}function Ae(c){c=Math.ceil(c),c<g()&&(c=g()),k[e.select?L+1:L]=`${c}px`}var pe=_r(),Re=d(pe),Le=d(Re),Ge=d(Le);{var _t=c=>{var f=or(),D=d(f);Ke(D,{ariaLabel:"Select All",borderColor:"hsla(var(--text), .4)",get checked(){return t(U)},set checked(X){x(U,$(X))}});var R=z(D,2),J=ce(()=>!t(P));tt(R,{ariaLabel:"Selected Options",get btnDisabled(){return t(J)},btnInvisible:!0,get close(){return t(O)},set close(X){x(O,$(X))},button:X=>{var I=rr(),ne=d(I);Ka(ne,{width:"1rem"}),i(I),T(()=>p(I,"data-disabled",!t(P))),l(X,I)},children:(X,I)=>{var ne=te(),Q=Z(ne);Se(Q,()=>e.select,()=>t(_),()=>t(O)),l(X,ne)},$$slots:{button:!0,default:!0}}),i(f),l(c,f)};N(Ge,c=>{e.select&&a()[0]&&c(_t)})}var dt=z(Ge);$e(dt,17,()=>e.columns,Te,(c,f,D)=>{var R=te(),J=Z(R);{var X=I=>{var ne=ir(),Q=d(ne),se=d(Q);{var Y=K=>{var ie=nr(),fe=Z(ie),Ye=d(fe,!0);i(fe);var rt=z(fe,2);ye(rt,{invisible:!0,onclick:()=>j(D,t(f).orderType),children:(ot,pt)=>{var me=lr(),Ce=d(me);Ja(Ce,{width:"1rem"}),i(me),l(ot,me)},$$slots:{default:!0}}),T(()=>ve(Ye,t(f).content)),l(K,ie)},M=K=>{var ie=sr(),fe=d(ie,!0);i(ie),T(()=>ve(fe,t(f).content)),l(K,ie)};N(se,K=>{t(f).orderType?K(Y):K(M,!1)})}i(Q);var ae=z(Q,2),ee=d(ae);ee.__mousedown=()=>le(D),i(ae),i(ne),Fe(ne,(K,ie)=>V[ie]=K,K=>V==null?void 0:V[K],()=>[D]),l(I,ne)};N(J,I=>{a()[e.select?D+1:D]&&I(X)})}l(c,R)});var Tt=z(dt);{var Mt=c=>{var f=cr(),D=d(f);Ia(D,{width:"1.2rem"}),i(f),l(c,f)};N(Tt,c=>{e.options&&a()[a().length-1]&&c(Mt)})}i(Le),i(Re);var Je=z(Re);{const c=(f,D=Ie,R=Ie)=>{var J=kr(),X=d(J);{var I=Y=>{var M=vr(),ae=d(M);Ke(ae,{ariaLabel:"Select Row",get checked(){return t(_)[G(R())]},set checked(ee){t(_)[G(R())]=ee}}),i(M),l(Y,M)};N(X,Y=>{e.select&&a()[0]&&Y(I)})}var ne=z(X);$e(ne,17,D,Te,(Y,M,ae)=>{var ee=te(),K=Z(ee);{var ie=fe=>{var Ye=br(),rt=d(Ye);{var ot=me=>{var Ce=ce(()=>t(M).href||"");$t(me,{get href(){return t(Ce)},children:(lt,gt)=>{var qe=dr(),Me=d(qe,!0);i(qe),T(()=>{_e(qe,"muted",t(M).muted),ve(Me,t(M).content)}),l(lt,qe)},$$slots:{default:!0}})},pt=me=>{var Ce=te(),lt=Z(Ce);{var gt=Me=>{var Be=ce(()=>t(M).href||"");$t(Me,{get href(){return t(Be)},target:"_blank",children:(nt,bt)=>{var Ue=ur(),Oe=d(Ue,!0);i(Ue),T(()=>{_e(Ue,"muted",t(M).muted),ve(Oe,t(M).content)}),l(nt,Ue)},$$slots:{default:!0}})},qe=Me=>{var Be=te(),nt=Z(Be);{var bt=Oe=>{ye(Oe,{invisible:!0,onclick:()=>er(t(M).content.toString()),children:(Pe,wt)=>{var Ne=fr(),st=d(Ne,!0);i(Ne),T(()=>{_e(Ne,"muted",t(M).muted),ve(st,t(M).content)}),l(Pe,Ne)},$$slots:{default:!0}})},Ue=Oe=>{var Pe=te(),wt=Z(Pe);{var Ne=Ee=>{var ke=hr(),it=d(ke);Za(it,{get checked(){return t(M).content}}),i(ke),T(()=>_e(ke,"muted",t(M).muted)),l(Ee,ke)},st=Ee=>{var ke=te(),it=Z(ke);{var qt=He=>{ye(He,{invisible:!0,onclick:De=>{var Ve,ze;return(ze=(Ve=t(M)).onClick)==null?void 0:ze.call(Ve,De,G(R()))},children:(De,Ve)=>{var ze=pr(),Nt=d(ze,!0);i(ze),T(()=>{_e(ze,"muted",t(M).muted),ve(Nt,t(M).content)}),l(De,ze)},$$slots:{default:!0}})},Ut=He=>{var De=gr(),Ve=d(De,!0);i(De),T(()=>{_e(De,"muted",t(M).muted),ve(Ve,t(M).content)}),l(He,De)};N(it,He=>{t(M).onClick?He(qt):He(Ut,!1)},!0)}l(Ee,ke)};N(wt,Ee=>{var ke;((ke=e.columns[ae])==null?void 0:ke.showAs)==="check"?Ee(Ne):Ee(st,!1)},!0)}l(Oe,Pe)};N(nt,Oe=>{var Pe;((Pe=e.columns[ae])==null?void 0:Pe.showAs)==="copyToClip"?Oe(bt):Oe(Ue,!1)},!0)}l(Me,Be)};N(lt,Me=>{var Be;((Be=e.columns[ae])==null?void 0:Be.showAs)==="a_blank"?Me(gt):Me(qe,!1)},!0)}l(me,Ce)};N(rt,me=>{var Ce;((Ce=e.columns[ae])==null?void 0:Ce.showAs)==="a"?me(ot):me(pt,!1)})}i(Ye),l(fe,Ye)};N(K,fe=>{a()[e.select?ae+1:ae]&&fe(ie)})}l(Y,ee)});var Q=z(ne);{var se=Y=>{var M=mr(),ae=d(M);tt(ae,{ariaLabel:"Options",btnInvisible:!0,get offsetLeft(){return e.offsetLeftOptions},get offsetTop(){return e.offsetTopOptions},get close(){return t(W)[R()]},set close(ee){t(W)[R()]=ee},button:ee=>{var K=wr(),ie=d(K);ar(ie,{}),i(K),l(ee,K)},children:(ee,K)=>{var ie=te(),fe=Z(ie);Se(fe,()=>e.options,D,()=>t(W)[R()]),l(ee,ie)},$$slots:{button:!0,default:!0}}),i(M),l(Y,M)};N(Q,Y=>{e.options&&a()[a().length-1]&&Y(se)})}i(J),T(Y=>{_e(J,"highlight",t(u)===R()),xe(J,"grid-template-columns",Y)},[w]),l(f,J)};var Ot=d(Je);{var Dt=f=>{var D=te(),R=Z(D);{var J=X=>{var I=te(),ne=Z(I);$e(ne,17,()=>e.rows,Te,(Q,se,Y)=>{c(Q,()=>t(se),()=>Y)}),l(X,I)};N(R,X=>{t(_).length===e.rows.length&&X(J)})}l(f,D)},Bt=f=>{var D=te(),R=Z(D);$e(R,17,()=>t(F),Te,(J,X,I)=>{c(J,()=>t(X),()=>I)}),l(f,D)};N(Ot,f=>{t(oe)?f(Dt):f(Bt,!1)})}i(Je),Fe(Je,f=>x(C,f),()=>t(C))}var ut=z(Je),ft=d(ut),ht=d(ft),Pt=ce(()=>`-${k.length*1.4+3}rem`);tt(ht,{ariaLabel:"Select Columns",get offsetTop(){return t(Pt)},btnInvisible:!0,button:c=>{var f=yr(),D=d(f);Gt(D,{}),i(f),l(c,f)},children:(c,f)=>{var D=Cr(),R=d(D);{var J=Q=>{var se=xr(),Y=d(se);Ke(Y,{ariaLabel:"Select Column: Select",get checked(){return a()[0]},set checked(M){a(a()[0]=M,!0)},children:(M,ae)=>{et();var ee=Qe("Select");l(M,ee)},$$slots:{default:!0}}),i(se),l(Q,se)};N(R,Q=>{e.select&&Q(J)})}var X=z(R,2);$e(X,17,()=>e.columns,Te,(Q,se,Y)=>{var M=$r(),ae=d(M),ee=ce(()=>`Select Column: ${t(se).content}`);Ke(ae,{get ariaLabel(){return t(ee)},get checked(){return a()[e.select?Y+1:Y]},set checked(K){a(a()[e.select?Y+1:Y]=K,!0)},children:(K,ie)=>{et();var fe=Qe();T(()=>ve(fe,t(se).content)),l(K,fe)},$$slots:{default:!0}}),i(M),l(Q,M)});var I=z(X,2);{var ne=Q=>{var se=Lr(),Y=d(se);Ke(Y,{ariaLabel:"Select Column: Options",get checked(){return a()[a().length-1]},set checked(M){a(a()[a().length-1]=M,!0)},children:(M,ae)=>{et();var ee=Qe("Options");l(M,ee)},$$slots:{default:!0}}),i(se),l(Q,se)};N(I,Q=>{e.options&&Q(ne)})}i(D),l(c,D)},$$slots:{button:!0,default:!0}});var at=z(ht,2),zt=d(at);Se(zt,()=>e.caption??Ie),i(at);var jt=z(at,2);{var At=c=>{var f=Sr();l(c,f)},Rt=c=>{Ha(c,{get items(){return e.rows},get compact(){return s()},get itemsPaginated(){return t(F)},set itemsPaginated(f){x(F,$(f))},get page(){return t(v)},set page(f){x(v,$(f))},get pageSize(){return t(b)},set pageSize(f){x(b,$(f))}})};N(jt,c=>{t(oe)?c(At):c(Rt,!1)})}i(ft),i(ut),i(pe),T(c=>{p(pe,"aria-colcount",k.length),p(pe,"aria-rowcount",t(A)),xe(pe,"width",e.width),xe(pe,"max-width",e.maxWidth),xe(Le,"grid-template-columns",c)},[w]),l(r,pe),we()}je(["mousedown"]);var Mr=y("<p>no results</p>");function Or(r,e){be(e,!0);let a=q($([])),s=q($([]));de(()=>{let v=[],b=[];if(e.rows.length>0){for(let U of e.rows[0].columns)v.push({content:U.name,initialWidth:"12rem",orderType:n(U.value)});for(let U of e.rows){let _=[];for(let P of U.columns)_.push({content:g(P.value)});b.push(_)}}x(a,$(v)),x(s,$(b))});function o(v){return[...new Uint8Array(v)].map(b=>b.toString(16).padStart(2,"0")).join("")}function n(v){return v.hasOwnProperty("Integer")||v.hasOwnProperty("Real")?"number":"string"}function g(v){return v.hasOwnProperty("Integer")?v.Integer:v.hasOwnProperty("Real")?v.Real:v.hasOwnProperty("Text")?v.Text:v.hasOwnProperty("Blob")?`x'${o(v.Blob)}'`:"NULL"}var h=te(),B=Z(h);{var k=v=>{Tr(v,{get columns(){return t(a)},paginationPageSize:100,get rows(){return t(s)},set rows(b){x(s,$(b))}})},E=v=>{var b=Mr();l(v,b)};N(B,v=>{t(a).length>0&&t(s).length>0?v(k):v(E,!1)})}l(r,h),we()}function Dr(r,e){r.ctrlKey&&r.code==="Enter"&&e()}var Br=y('<div role="textbox" tabindex="0" class="query svelte-1o8x9h5" contenteditable=""></div>'),Pr=y('<div class="err"> </div>'),zr=y('<!> <!> <div id="query-results" class="svelte-1o8x9h5"><!></div>',1);function jr(r,e){be(e,!0);let a=m(e,"query",7),s=q($([])),o=q(""),n=q(void 0),g=q(void 0),h=ce(()=>t(n)&&t(g)?`${t(n)-t(g)}px`:"100%");de(()=>{a().query.startsWith(yt)&&(a().query=a().query.replace(`${yt}
`,""),B())});async function B(){x(s,$([])),x(o,"");let O=[];for(let F of a().query.split(/\r?\n/))F.startsWith("--")||O.push(F);let W=O.join(`
`),H=await Qt("/query",W);if(H.status===200)x(s,$(await H.json()));else{let F=await H.json();x(o,$(Object.values(F)[0]))}}async function k(O){x(g,$(O))}var E=zr(),v=Z(E);Jt(v,{resizeBottom:!0,minHeightPx:100,initialHeightPx:300,onResizeBottom:k,children:(O,W)=>{var H=Br();H.__keydown=[Dr,B],va("innerText",H,()=>a().query,F=>a().query=F),l(O,H)},$$slots:{default:!0}});var b=z(v,2);{var U=O=>{var W=Pr(),H=d(W,!0);i(W),T(()=>ve(H,t(o))),l(O,W)};N(b,O=>{t(o)&&O(U)})}var _=z(b,2),P=d(_);Or(P,{get rows(){return t(s)},set rows(O){x(s,$(O))}}),i(_),T(()=>{xe(_,"height",t(h)),xe(_,"max-height",t(h))}),da("innerHeight",O=>x(n,$(O))),l(r,E),we()}je(["keydown"]);var Ar=ge('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>');function Rr(r,e){let a=m(e,"color",8,"var(--col-err)"),s=m(e,"opacity",8,.9),o=m(e,"width",8,"1.5rem");var n=Ar();p(n,"stroke-width",2),T(()=>{p(n,"width",o()),p(n,"color",a()),p(n,"opacity",s())}),l(r,n)}function qr(r,e,a,s){t(e)?r.code==="Enter"&&(r.preventDefault(),a()):s()}function Ct(r,e,a){e.onClose(a())}var Ur=y('<div class="row svelte-1ml8s23"><div role="button" tabindex="0"><!></div> <div class="close svelte-1ml8s23"><div role="button" tabindex="0" class="close-inner svelte-1ml8s23"><!></div></div></div>');function Nr(r,e){be(e,!0);let a=m(e,"tab",15),s=m(e,"tabSelected",15),o,n=ce(()=>s()===a());function g(){let _=o.innerText;a(_),s(_)}function h(){t(n)||s(a())}var B=Ur(),k=d(B);k.__click=h,k.__keydown=[qr,n,g,h];var E=d(k);Se(E,()=>e.children),i(k),Fe(k,_=>o=_,()=>o);var v=z(k,2),b=d(v);b.__click=[Ct,e,a],b.__keydown=[Ct,e,a];var U=d(b);Rr(U,{color:"hsl(var(--error))",width:"1.2rem"}),i(b),i(v),i(B),T(()=>{It(k,ea(t(n)?"tab selected":"tab"),"svelte-1ml8s23"),p(k,"contenteditable",t(n))}),ct("blur",k,g),l(r,B),we()}je(["click","keydown"]);var Er=ge('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>');function Hr(r,e){let a=m(e,"opacity",8,.9),s=m(e,"width",8,"1.5rem");var o=Er();p(o,"stroke-width",2),T(()=>{p(o,"width",s()),p(o,"opacity",a())}),l(r,o)}function St(){re.push({id:Ze(6),query:ta})}var Fr=y('<div id="tabs" class="svelte-ko98zn"><!> <div role="button" tabindex="0" title="Add New Tab" class="ctrl add-new svelte-ko98zn"><!></div></div> <!>',1);function Yr(r,e){be(e,!0);let a=q($(re[0].id)),s=ce(()=>re.filter(v=>v.id===t(a))[0]);de(()=>{re.length>0?x(a,$(re[re.length-1].id)):x(a,"")});function o(v){let b=re.map(U=>U.id).indexOf(v);t(a)===v?re.length===1?(re.push(aa),re.shift(),x(a,$(re[0].id))):b===0?(re.shift(),x(a,$(re[0].id))):(re.splice(b,1),x(a,$(re[b-1].id))):re.splice(b,1)}var n=Fr(),g=Z(n),h=d(g);$e(h,17,()=>re,v=>v.id,(v,b,U)=>{Nr(v,{onClose:o,get tab(){return t(b).id},set tab(_){t(b).id=_},get tabSelected(){return t(a)},set tabSelected(_){x(a,$(_))},children:(_,P)=>{et();var O=Qe();T(()=>ve(O,t(b).id)),l(_,O)},$$slots:{default:!0}})});var B=z(h,2);B.__click=[St],B.__keydown=[St];var k=d(B);Hr(k,{}),i(B),i(g);var E=z(g,2);jr(E,{get query(){return t(s)}}),l(r,n),we()}je(["click","keydown"]);var Vr=y('<meta property="description" content="Hiqlite Dashboard">');function Wr(r){Yt(e=>{var a=Vr();Wt.title="Hiqlite",l(e,a)}),Yr(r,{})}export{Wr as component};
