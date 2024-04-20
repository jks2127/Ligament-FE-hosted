"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9892:(O,y,o)=>{o.d(y,{s:()=>h});const h=(0,o(7423).fo)("LocalNotifications",{web:()=>o.e(7434).then(o.bind(o,7434)).then(v=>new v.LocalNotificationsWeb)})},5662:(O,y,o)=>{o.d(y,{c:()=>r});var g=o(9376),h=o(7864),v=o(1898);const r=(c,i)=>{let e,t;const u=(_,p,E)=>{if(typeof document>"u")return;const m=document.elementFromPoint(_,p);m&&i(m)?m!==e&&(w(),d(m,E)):w()},d=(_,p)=>{e=_,t||(t=e);const E=e;(0,g.w)(()=>E.classList.add("ion-activated")),p()},w=(_=!1)=>{if(!e)return;const p=e;(0,g.w)(()=>p.classList.remove("ion-activated")),_&&t!==e&&e.click(),e=void 0};return(0,v.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:_=>u(_.currentX,_.currentY,h.a),onMove:_=>u(_.currentX,_.currentY,h.b),onEnd:()=>{w(!0),(0,h.h)(),t=void 0}})}},2225:(O,y,o)=>{o.d(y,{g:()=>g});const g=(i,e,t,u,d)=>v(i[1],e[1],t[1],u[1],d).map(w=>h(i[0],e[0],t[0],u[0],w)),h=(i,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-i*Math.pow(d-1,3),v=(i,e,t,u,d)=>c((u-=d)-3*(t-=d)+3*(e-=d)-(i-=d),3*t-6*e+3*i,3*e-3*i,i).filter(_=>_>=0&&_<=1),c=(i,e,t,u)=>{if(0===i)return((i,e,t)=>{const u=e*e-4*i*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*i),(-e-Math.sqrt(u))/(2*i)]})(e,t,u);const d=(3*(t/=i)-(e/=i)*e)/3,w=(2*e*e*e-9*e*t+27*(u/=i))/27;if(0===d)return[Math.pow(-w,1/3)];if(0===w)return[Math.sqrt(-d),-Math.sqrt(-d)];const _=Math.pow(w/2,2)+Math.pow(d/3,3);if(0===_)return[Math.pow(w/2,.5)-e/3];if(_>0)return[Math.pow(-w/2+Math.sqrt(_),1/3)-Math.pow(w/2+Math.sqrt(_),1/3)-e/3];const p=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-w/(2*Math.sqrt(Math.pow(-d/3,3)))),m=2*Math.pow(p,1/3);return[m*Math.cos(E/3)-e/3,m*Math.cos((E+2*Math.PI)/3)-e/3,m*Math.cos((E+4*Math.PI)/3)-e/3]}},5062:(O,y,o)=>{o.d(y,{i:()=>g});const g=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5321:(O,y,o)=>{o.r(y),o.d(y,{startFocusVisible:()=>r});const g="ion-focused",v=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=c=>{let i=[],e=!0;const t=c?c.shadowRoot:document,u=c||document.body,d=l=>{i.forEach(n=>n.classList.remove(g)),l.forEach(n=>n.classList.add(g)),i=l},w=()=>{e=!1,d([])},_=l=>{e=v.includes(l.key),e||d([])},p=l=>{if(e&&void 0!==l.composedPath){const n=l.composedPath().filter(s=>!!s.classList&&s.classList.contains("ion-focusable"));d(n)}},E=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",_),t.addEventListener("focusin",p),t.addEventListener("focusout",E),t.addEventListener("touchstart",w,{passive:!0}),t.addEventListener("mousedown",w),{destroy:()=>{t.removeEventListener("keydown",_),t.removeEventListener("focusin",p),t.removeEventListener("focusout",E),t.removeEventListener("touchstart",w),t.removeEventListener("mousedown",w)},setFocus:d}}},6555:(O,y,o)=>{o.d(y,{c:()=>h});var g=o(6655);const h=i=>{const e=i;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||v(e),w=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,_=(0,g.h)(e);t=!0===e.legacy||!d&&!w&&null!==_}return t}}},v=i=>null!==i.shadowRoot&&!!(r.includes(i.tagName)&&null!==i.querySelector('[slot="label"]')||c.includes(i.tagName)&&""!==i.textContent),r=["ION-RANGE"],c=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(O,y,o)=>{o.d(y,{a:()=>r,b:()=>c,c:()=>v,d:()=>e,h:()=>i});const g={getEngine(){var t;const u=window;return u.TapticEngine||(null===(t=u.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&u.Capacitor.Plugins.Haptics},available(){var t;const u=window;return!!this.getEngine()&&("web"!==(null===(t=u.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const u=this.getEngine();if(!u)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;u.impact({style:d})},notification(t){const u=this.getEngine();if(!u)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;u.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},h=()=>g.available(),v=()=>{h()&&g.selection()},r=()=>{h()&&g.selectionStart()},c=()=>{h()&&g.selectionChanged()},i=()=>{h()&&g.selectionEnd()},e=t=>{h()&&g.impact(t)}},7366:(O,y,o)=>{o.d(y,{a:()=>g,b:()=>p,c:()=>e,d:()=>E,e:()=>L,f:()=>i,g:()=>m,h:()=>v,i:()=>h,j:()=>M,k:()=>f,l:()=>t,m:()=>w,n:()=>l,o:()=>d,p:()=>c,q:()=>r,r:()=>a,s:()=>C,t:()=>_,u:()=>n,v:()=>s,w:()=>u});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4862:(O,y,o)=>{o.d(y,{I:()=>i,a:()=>d,b:()=>c,c:()=>p,d:()=>m,f:()=>w,g:()=>u,i:()=>t,p:()=>E,r:()=>l,s:()=>_});var g=o(5861),h=o(6655),v=o(1178);const c="ion-content",i=".ion-content-scroll-host",e=`${c}, ${i}`,t=n=>"ION-CONTENT"===n.tagName,u=function(){var n=(0,g.Z)(function*(s){return t(s)?(yield new Promise(a=>(0,h.c)(s,a)),s.getScrollElement()):s});return function(a){return n.apply(this,arguments)}}(),d=n=>n.querySelector(i)||n.querySelector(e),w=n=>n.closest(e),_=(n,s)=>t(n)?n.scrollToTop(s):Promise.resolve(n.scrollTo({top:0,left:0,behavior:s>0?"smooth":"auto"})),p=(n,s,a,M)=>t(n)?n.scrollByPoint(s,a,M):Promise.resolve(n.scrollBy({top:a,left:s,behavior:M>0?"smooth":"auto"})),E=n=>(0,v.b)(n,c),m=n=>{if(t(n)){const a=n.scrollY;return n.scrollY=!1,a}return n.style.setProperty("overflow","hidden"),!0},l=(n,s)=>{t(n)?n.scrollY=s:n.style.removeProperty("overflow")}},6208:(O,y,o)=>{o.d(y,{c:()=>r,g:()=>c});var g=o(4110),h=o(6655),v=o(1178);const r=(e,t,u)=>{let d,w;void 0!==g.w&&"MutationObserver"in g.w&&(d=new MutationObserver(m=>{for(const l of m)for(const n of l.addedNodes)if(n.nodeType===Node.ELEMENT_NODE&&n.slot===t)return u(),void(0,h.r)(()=>_(n))}),d.observe(e,{childList:!0}));const _=m=>{var l;w&&(w.disconnect(),w=void 0),w=new MutationObserver(n=>{u();for(const s of n)for(const a of s.removedNodes)a.nodeType===Node.ELEMENT_NODE&&a.slot===t&&E()}),w.observe(null!==(l=m.parentElement)&&void 0!==l?l:m,{subtree:!0,childList:!0})},E=()=>{w&&(w.disconnect(),w=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},c=(e,t,u)=>{const d=null==e?0:e.toString().length,w=i(d,t);if(void 0===u)return w;try{return u(d,t)}catch(_){return(0,v.a)("Exception in provided `counterFormatter`.",_),w}},i=(e,t)=>`${e} / ${t}`},4963:(O,y,o)=>{o.d(y,{K:()=>v,a:()=>h});var g=o(4110),h=(()=>{return(r=h||(h={})).Body="body",r.Ionic="ionic",r.Native="native",r.None="none",h;var r})();const v={getEngine(){var r;return(null===(r=null==g.w?void 0:g.w.Capacitor)||void 0===r?void 0:r.isPluginAvailable("Keyboard"))&&(null==g.w?void 0:g.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const r=this.getEngine();return null!=r&&r.getResizeMode?r.getResizeMode().catch(c=>{if("UNIMPLEMENTED"!==c.code)throw c}):Promise.resolve(void 0)}}},2640:(O,y,o)=>{o.r(y),o.d(y,{KEYBOARD_DID_CLOSE:()=>r,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>M,keyboardDidClose:()=>l,keyboardDidOpen:()=>E,keyboardDidResize:()=>m,resetKeyboardAssist:()=>u,setKeyboardClose:()=>p,setKeyboardOpen:()=>_,startKeyboardAssist:()=>d,trackViewportChanges:()=>a});var g=o(4963);o(4110);const v="ionKeyboardDidShow",r="ionKeyboardDidHide";let i={},e={},t=!1;const u=()=>{i={},e={},t=!1},d=f=>{if(g.K.getEngine())w(f);else{if(!f.visualViewport)return;e=M(f.visualViewport),f.visualViewport.onresize=()=>{a(f),E()||m(f)?_(f):l(f)&&p(f)}}},w=f=>{f.addEventListener("keyboardDidShow",C=>_(f,C)),f.addEventListener("keyboardDidHide",()=>p(f))},_=(f,C)=>{n(f,C),t=!0},p=f=>{s(f),t=!1},E=()=>!t&&i.width===e.width&&(i.height-e.height)*e.scale>150,m=f=>t&&!l(f),l=f=>t&&e.height===f.innerHeight,n=(f,C)=>{const D=new CustomEvent(v,{detail:{keyboardHeight:C?C.keyboardHeight:f.innerHeight-e.height}});f.dispatchEvent(D)},s=f=>{const C=new CustomEvent(r);f.dispatchEvent(C)},a=f=>{i=Object.assign({},e),e=M(f.visualViewport)},M=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},2952:(O,y,o)=>{o.d(y,{c:()=>i});var g=o(5861),h=o(4110),v=o(4963);const r=e=>{if(void 0===h.d||e===v.a.None||void 0===e)return null;const t=h.d.querySelector("ion-app");return null!=t?t:h.d.body},c=e=>{const t=r(e);return null===t?0:t.clientHeight},i=function(){var e=(0,g.Z)(function*(t){let u,d,w,_;const p=function(){var s=(0,g.Z)(function*(){const a=yield v.K.getResizeMode(),M=void 0===a?void 0:a.mode;u=()=>{void 0===_&&(_=c(M)),w=!0,E(w,M)},d=()=>{w=!1,E(w,M)},null==h.w||h.w.addEventListener("keyboardWillShow",u),null==h.w||h.w.addEventListener("keyboardWillHide",d)});return function(){return s.apply(this,arguments)}}(),E=(s,a)=>{t&&t(s,m(a))},m=s=>{if(0===_||_===c(s))return;const a=r(s);return null!==a?new Promise(M=>{const C=new ResizeObserver(()=>{a.clientHeight===_&&(C.disconnect(),M())});C.observe(a)}):void 0};return yield p(),{init:p,destroy:()=>{null==h.w||h.w.removeEventListener("keyboardWillShow",u),null==h.w||h.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>w}});return function(u){return e.apply(this,arguments)}}()},1955:(O,y,o)=>{o.d(y,{c:()=>v});var g=o(4110),h=o(6655);const v=(r,c,i)=>{let e;const t=()=>!(void 0===c()||void 0!==r.label||null===i()),d=()=>{const _=c();if(void 0===_)return;if(!t())return void _.style.removeProperty("width");const p=i().scrollWidth;if(0===p&&null===_.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const E=e=new IntersectionObserver(m=>{1===m[0].intersectionRatio&&(d(),E.disconnect(),e=void 0)},{threshold:.01,root:r});E.observe(_)}else _.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,h.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},6690:(O,y,o)=>{o.d(y,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(v,r,c)=>{const i=v*r/c-v+"ms",e=2*Math.PI*r/c;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(v,r,c)=>{const i=r/c,e=v*i-v+"ms",t=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(v,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(v,r,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*r+(r<c/2?180:-180)}deg)`,"animation-delay":v*r/c-v+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(v,r,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*r+(r<c/2?180:-180)}deg)`,"animation-delay":v*r/c-v+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(v,r,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":v*r/c-v+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(v,r,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":v*r/c-v+"ms"}})}}},4805:(O,y,o)=>{o.r(y),o.d(y,{createSwipeBackGesture:()=>c});var g=o(6655),h=o(5062),v=o(1898);o(4349);const c=(i,e,t,u,d)=>{const w=i.ownerDocument.defaultView;let _=(0,h.i)(i);const E=a=>_?-a.deltaX:a.deltaX;return(0,v.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:a=>(_=(0,h.i)(i),(a=>{const{startX:f}=a;return _?f>=w.innerWidth-50:f<=50})(a)&&e()),onStart:t,onMove:a=>{const f=E(a)/w.innerWidth;u(f)},onEnd:a=>{const M=E(a),f=w.innerWidth,C=M/f,L=(a=>_?-a.velocityX:a.velocityX)(a),S=L>=0&&(L>.2||M>f/2),P=(S?1-C:C)*f;let A=0;if(P>5){const b=P/Math.abs(L);A=Math.min(b,540)}d(S,C<=0?.01:(0,g.l)(0,C,.9999),A)}})}},9467:(O,y,o)=>{o.d(y,{w:()=>g});const g=(r,c,i)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{i(h(t,c))});return e.observe(r,{childList:!0,subtree:!0}),e},h=(r,c)=>{let i;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)i=v(e.addedNodes[t],c)||i}),i},v=(r,c)=>1!==r.nodeType?void 0:(r.tagName===c.toUpperCase()?[r]:Array.from(r.querySelectorAll(c))).find(e=>e.value===r.value)},8091:(O,y,o)=>{o.d(y,{s:()=>i});var g=o(7582),h=o(9892),v=o(1135),r=o(8274),c=o(51);let i=(()=>{class e{constructor(u){this.cookieService=u,this.unReadMsgCount=new v.X(0)}scheduleAdvancedNotification(u,d){return(0,g.mG)(this,void 0,void 0,function*(){yield h.s.schedule({notifications:[{id:this.cookieService.getLocalNotificationCounter,title:"Hey there!",body:u,extra:d,actionTypeId:"CHAT_MSG"}]}),this.cookieService.setLocalNotificationCounter(this.cookieService.getLocalNotificationCounter+1)})}}return e.\u0275fac=function(u){return new(u||e)(r.LFG(c.R))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2110:(O,y,o)=>{o.d(y,{H:()=>_});var g=o(7582),h=o(2340),v=o(3099),r=o(7423),c=o(8274),i=o(7942),e=o(51),t=o(529),u=o(5730),d=o(4031),w=o(8091);let _=(()=>{class p{constructor(m,l,n,s,a,M){this.ionLoaderService=m,this.cookieService=l,this.http=n,this.alertService=s,this.globalService=a,this.localNotificationService=M,this.totalUnreadMsg=0}getWeavyAccessToken(){return(0,g.mG)(this,void 0,void 0,function*(){if(null!=this.cookieService.getWeavyAccessToken&&null!=this.cookieService.getWeavyAccessToken&&this.cookieService.getWeavyAccessToken.length>0)return null;{const m=yield this.ionLoaderService.showLoader(),n=this.http.get(`${h.N.apiBaseUrlV1}/chat/getAccessToken`).pipe((0,v.B)());return n.subscribe({next:s=>(0,g.mG)(this,void 0,void 0,function*(){m.dismiss(),"success"==s.result?this.cookieService.setWeavyAccessToken(s.data.access_token):this.alertService.presentAlert("Error",s)}),error:s=>{m.dismiss(),this.alertService.presentAlert("Error: Something went wrong! ",s)}}),n}})}getUnreadMsgCount(){return(0,g.mG)(this,void 0,void 0,function*(){this.getWeavyAccessToken();const l=this.http.get(`${h.N.chatServerBaseUrlV1}/api/conversations/badge`).pipe((0,v.B)());return l.subscribe({next:n=>(0,g.mG)(this,void 0,void 0,function*(){if(null!=n){let s=n.private+n.rooms+n.chat;this.globalService.unReadMsgCount.next(s),s>0&&this.totalUnreadMsg!=s&&"web"!==r.dV.getPlatform()&&(this.totalUnreadMsg=s,this.localNotificationService.scheduleAdvancedNotification("You have new messages from "+s+" users!",{demoKey:"demoValue"}))}}),error:n=>{(null==this.cookieService.getWeavyAccessToken||null==this.cookieService.getWeavyAccessToken||this.cookieService.getWeavyAccessToken.length<0)&&this.getWeavyAccessToken()}}),l})}}return p.\u0275fac=function(m){return new(m||p)(c.LFG(i.C),c.LFG(e.R),c.LFG(t.eN),c.LFG(u.c),c.LFG(d.U),c.LFG(w.s))},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},7825:(O,y,o)=>{o.d(y,{F:()=>m});var g=o(727);class h extends g.w0{constructor(n,s){super()}schedule(n,s=0){return this}}const v={setInterval(l,n,...s){const{delegate:a}=v;return null!=a&&a.setInterval?a.setInterval(l,n,...s):setInterval(l,n,...s)},clearInterval(l){const{delegate:n}=v;return((null==n?void 0:n.clearInterval)||clearInterval)(l)},delegate:void 0};var r=o(8737),i=o(6063);class e{constructor(n,s=e.now){this.schedulerActionCtor=n,this.now=s}schedule(n,s=0,a){return new this.schedulerActionCtor(this,n).schedule(a,s)}}e.now=i.l.now;const u=new class t extends e{constructor(n,s=e.now){super(n,s),this.actions=[],this._active=!1}flush(n){const{actions:s}=this;if(this._active)return void s.push(n);let a;this._active=!0;do{if(a=n.execute(n.state,n.delay))break}while(n=s.shift());if(this._active=!1,a){for(;n=s.shift();)n.unsubscribe();throw a}}}(class c extends h{constructor(n,s){super(n,s),this.scheduler=n,this.work=s,this.pending=!1}schedule(n,s=0){var a;if(this.closed)return this;this.state=n;const M=this.id,f=this.scheduler;return null!=M&&(this.id=this.recycleAsyncId(f,M,s)),this.pending=!0,this.delay=s,this.id=null!==(a=this.id)&&void 0!==a?a:this.requestAsyncId(f,this.id,s),this}requestAsyncId(n,s,a=0){return v.setInterval(n.flush.bind(n,this),a)}recycleAsyncId(n,s,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return s;null!=s&&v.clearInterval(s)}execute(n,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(n,s);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,s){let M,a=!1;try{this.work(n)}catch(f){a=!0,M=f||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),M}unsubscribe(){if(!this.closed){const{id:n,scheduler:s}=this,{actions:a}=s;this.work=this.state=this.scheduler=null,this.pending=!1,(0,r.P)(a,this),null!=n&&(this.id=this.recycleAsyncId(s,n,null)),this.delay=null,super.unsubscribe()}}}),d=u;var w=o(9751),_=o(3532);function m(l=0,n=u){return l<0&&(l=0),function E(l=0,n,s=d){let a=-1;return null!=n&&((0,_.K)(n)?s=n:a=n),new w.y(M=>{let f=function p(l){return l instanceof Date&&!isNaN(l)}(l)?+l-s.now():l;f<0&&(f=0);let C=0;return s.schedule(function(){M.closed||(M.next(C++),0<=a?this.schedule(void 0,a):M.complete())},f)})}(l,l,n)}},6063:(O,y,o)=>{o.d(y,{l:()=>g});const g={now:()=>(g.delegate||Date).now(),delegate:void 0}},3986:(O,y,o)=>{o.d(y,{l:()=>_});var g="https://js.stripe.com/v3",h=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,v="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",e=null,u=function(E,m,l){if(null===E)return null;var n=E.apply(void 0,m);return function(E,m){!E||!E._registerWrapper||E._registerWrapper({name:"stripe-js",version:"1.31.0",startTime:m})}(n,l),n},d=Promise.resolve().then(function(){return E=null,null!==e||(e=new Promise(function(m,l){if(typeof window>"u")m(null);else if(window.Stripe&&E&&console.warn(v),window.Stripe)m(window.Stripe);else try{var n=function(){for(var E=document.querySelectorAll('script[src^="'.concat(g,'"]')),m=0;m<E.length;m++){var l=E[m];if(h.test(l.src))return l}return null}();n&&E?console.warn(v):n||(n=function(E){var m=E&&!E.advancedFraudSignals?"?advancedFraudSignals=false":"",l=document.createElement("script");l.src="".concat(g).concat(m);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(l),l}(E)),n.addEventListener("load",function(){window.Stripe?m(window.Stripe):l(new Error("Stripe.js not available"))}),n.addEventListener("error",function(){l(new Error("Failed to load Stripe.js"))})}catch(s){return void l(s)}})),e;var E}),w=!1;d.catch(function(p){w||console.warn(p)});var _=function(){for(var E=arguments.length,m=new Array(E),l=0;l<E;l++)m[l]=arguments[l];w=!0;var n=Date.now();return d.then(function(s){return u(s,m,n)})}}}]);