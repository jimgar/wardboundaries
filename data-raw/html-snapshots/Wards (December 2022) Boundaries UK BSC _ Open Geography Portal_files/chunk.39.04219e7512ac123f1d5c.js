(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[39],{1425:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return i}))
var o="object"==typeof t&&t&&t.Object===Object&&t,r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")(),l=i.Symbol,c=Object.prototype,a=c.hasOwnProperty,s=c.toString,u=l?l.toStringTag:void 0,f=Object.prototype.toString,d=l?l.toStringTag:void 0
function m(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=a.call(t,u),n=t[u]
try{t[u]=void 0
var o=!0}catch(t){}var r=s.call(t)
return o&&(e?t[u]=n:delete t[u]),r}(t):function(t){return f.call(t)}(t)}function p(t){return null!=t&&"object"==typeof t}function g(t){return"symbol"==typeof t||p(t)&&"[object Symbol]"==m(t)}var h=/\s/,y=/^\s+/
function v(t){var e=typeof t
return null!=t&&("object"==e||"function"==e)}var w=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,x=/^0o[0-7]+$/i,A=parseInt
function R(t){if("number"==typeof t)return t
if(g(t))return NaN
if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t
t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t
t=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&h.test(t.charAt(e)););return e}(t)+1).replace(y,""):t}(t)
var n=b.test(t)
return n||x.test(t)?A(t.slice(2),n?2:8):w.test(t)?NaN:+t}var E=function(){return i.Date.now()},T=Math.max,L=Math.min
function O(t,e,n){var o,r,i,l,c,a,s=0,u=!1,f=!1,d=!0
if("function"!=typeof t)throw new TypeError("Expected a function")
function m(e){var n=o,i=r
return o=r=void 0,s=e,l=t.apply(i,n)}function p(t){return s=t,c=setTimeout(h,e),u?m(t):l}function g(t){var n=t-a
return void 0===a||n>=e||n<0||f&&t-s>=i}function h(){var t=E()
if(g(t))return y(t)
c=setTimeout(h,function(t){var n=e-(t-a)
return f?L(n,i-(t-s)):n}(t))}function y(t){return c=void 0,d&&o?m(t):(o=r=void 0,l)}function w(){var t=E(),n=g(t)
if(o=arguments,r=this,a=t,n){if(void 0===c)return p(a)
if(f)return clearTimeout(c),c=setTimeout(h,e),m(a)}return void 0===c&&(c=setTimeout(h,e)),l}return e=R(e)||0,v(n)&&(u=!!n.leading,i=(f="maxWait"in n)?T(R(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==c&&clearTimeout(c),s=0,o=a=r=c=void 0},w.flush=function(){return void 0===c?l:y(E())},w}}).call(this,n(39))},1897:function(t,e,n){"use strict"
n.d(e,"a",(function(){return ut})),n.d(e,"b",(function(){return wt})),n.d(e,"c",(function(){return bt})),n.d(e,"d",(function(){return vt})),n.d(e,"e",(function(){return st})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return dt})),n.d(e,"h",(function(){return pt})),n.d(e,"i",(function(){return xt}))
var o=n(957),r=n(1425)
function i(t){return t.split("-")[0]}function l(t){return t.split("-")[1]}function c(t){return["top","bottom"].includes(i(t))?"x":"y"}function a(t){return"y"===t?"height":"width"}function s(t,e,n){let{reference:o,floating:r}=t
const s=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,f=c(e),d=a(f),m=o[d]/2-r[d]/2,p="x"===f
let g
switch(i(e)){case"top":g={x:s,y:o.y-r.height}
break
case"bottom":g={x:s,y:o.y+o.height}
break
case"right":g={x:o.x+o.width,y:u}
break
case"left":g={x:o.x-r.width,y:u}
break
default:g={x:o.x,y:o.y}}switch(l(e)){case"start":g[f]-=m*(n&&p?-1:1)
break
case"end":g[f]+=m*(n&&p?-1:1)}return g}function u(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function f(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function d(t,e){var n
void 0===e&&(e={})
const{x:o,y:r,platform:i,rects:l,elements:c,strategy:a}=t,{boundary:s="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:p=!1,padding:g=0}=e,h=u(g),y=c[p?"floating"===m?"reference":"floating":m],v=f(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(y)))||n?y:y.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(c.floating)),boundary:s,rootBoundary:d,strategy:a})),w="floating"===m?{...l.floating,x:o,y:r}:l.reference,b=await(null==i.getOffsetParent?void 0:i.getOffsetParent(c.floating)),x=await(null==i.isElement?void 0:i.isElement(b))&&await(null==i.getScale?void 0:i.getScale(b))||{x:1,y:1},A=f(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:b,strategy:a}):w)
return{top:(v.top-A.top+h.top)/x.y,bottom:(A.bottom-v.bottom+h.bottom)/x.y,left:(v.left-A.left+h.left)/x.x,right:(A.right-v.right+h.right)/x.x}}const m=Math.min,p=Math.max
function g(t,e,n){return p(t,m(e,n))}const h={left:"right",right:"left",bottom:"top",top:"bottom"}
function y(t){return t.replace(/left|right|bottom|top/g,t=>h[t])}function v(t,e,n){void 0===n&&(n=!1)
const o=l(t),r=c(t),i=a(r)
let s="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top"
return e.reference[i]>e.floating[i]&&(s=y(s)),{main:s,cross:y(s)}}const w={start:"end",end:"start"}
function b(t){return t.replace(/start|end/g,t=>w[t])}const x=["top","right","bottom","left"],A=x.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),R=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,r,c,a
const{x:s,y:u,rects:f,middlewareData:m,placement:p,platform:g,elements:h}=e,{alignment:y=null,allowedPlacements:w=A,autoAlignment:x=!0,...R}=t,E=function(t,e,n){return(t?[...n.filter(e=>l(e)===t),...n.filter(e=>l(e)!==t)]:n.filter(t=>i(t)===t)).filter(n=>!t||l(n)===t||!!e&&b(n)!==n)}(y,x,w),T=await d(e,R),L=null!=(n=null==(o=m.autoPlacement)?void 0:o.index)?n:0,O=E[L]
if(null==O)return{}
const{main:P,cross:j}=v(O,f,await(null==g.isRTL?void 0:g.isRTL(h.floating)))
if(p!==O)return{x:s,y:u,reset:{placement:E[0]}}
const S=[T[i(O)],T[P],T[j]],D=[...null!=(r=null==(c=m.autoPlacement)?void 0:c.overflows)?r:[],{placement:O,overflows:S}],k=E[L+1]
if(k)return{data:{index:L+1,overflows:D},reset:{placement:k}}
const N=D.slice().sort((t,e)=>t.overflows[0]-e.overflows[0]),C=null==(a=N.find(t=>{let{overflows:e}=t
return e.every(t=>t<=0)}))?void 0:a.placement,H=null!=C?C:N[0].placement
return H!==p?{data:{index:L+1,overflows:D},reset:{placement:H}}:{}}}},E=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n
const{placement:o,middlewareData:r,rects:l,initialPlacement:c,platform:a,elements:s}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",flipAlignment:g=!0,...h}=t,w=i(o),x=[c,...m||(w!==c&&g?function(t){const e=y(t)
return[b(t),e,b(e)]}(c):[y(c)])],A=await d(e,h),R=[]
let E=(null==(n=r.flip)?void 0:n.overflows)||[]
if(u&&R.push(A[w]),f){const{main:t,cross:e}=v(o,l,await(null==a.isRTL?void 0:a.isRTL(s.floating)))
R.push(A[t],A[e])}if(E=[...E,{placement:o,overflows:R}],!R.every(t=>t<=0)){var T,L
const t=(null!=(T=null==(L=r.flip)?void 0:L.index)?T:0)+1,e=x[t]
if(e)return{data:{index:t,overflows:E},reset:{placement:e}}
let n="bottom"
switch(p){case"bestFit":{var O
const t=null==(O=E.map(t=>[t,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:O[0].placement
t&&(n=t)
break}case"initialPlacement":n=c}if(o!==n)return{reset:{placement:n}}}return{}}}}
function T(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function L(t){return x.some(e=>t[e]>=0)}const O=function(t){let{strategy:e="referenceHidden",...n}=void 0===t?{}:t
return{name:"hide",async fn(t){const{rects:o}=t
switch(e){case"referenceHidden":{const e=T(await d(t,{...n,elementContext:"reference"}),o.reference)
return{data:{referenceHiddenOffsets:e,referenceHidden:L(e)}}}case"escaped":{const e=T(await d(t,{...n,altBoundary:!0}),o.floating)
return{data:{escapedOffsets:e,escaped:L(e)}}}default:return{}}}}},P=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,r=await async function(t,e){const{placement:n,platform:o,elements:r}=t,a=await(null==o.isRTL?void 0:o.isRTL(r.floating)),s=i(n),u=l(n),f="x"===c(n),d=["left","top"].includes(s)?-1:1,m=a&&f?-1:1,p="function"==typeof e?e(t):e
let{mainAxis:g,crossAxis:h,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p}
return u&&"number"==typeof y&&(h="end"===u?-1*y:y),f?{x:h*m,y:g*d}:{x:g*d,y:h*m}}(e,t)
return{x:n+r.x,y:o+r.y,data:r}}}}
function j(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function S(t){if(null==t)return window
if(!j(t)){const e=t.ownerDocument
return e&&e.defaultView||window}return t}function D(t){return S(t).getComputedStyle(t)}function k(t){return j(t)?"":t?(t.nodeName||"").toLowerCase():""}function N(){const t=navigator.userAgentData
return null!=t&&t.brands?t.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function C(t){return t instanceof S(t).HTMLElement}function H(t){return t instanceof S(t).Element}function W(t){return"undefined"!=typeof ShadowRoot&&(t instanceof S(t).ShadowRoot||t instanceof ShadowRoot)}function $(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=D(t)
return/auto|scroll|overlay|hidden/.test(e+o+n)&&!["inline","contents"].includes(r)}function M(t){return["table","td","th"].includes(k(t))}function F(t){const e=/firefox/i.test(N()),n=D(t)
return"none"!==n.transform||"none"!==n.perspective||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some(t=>n.willChange.includes(t))||["paint","layout","strict","content"].some(t=>{const e=n.contain
return null!=e&&e.includes(t)})}function B(){return!/^((?!chrome|android).)*safari/i.test(N())}function V(t){return["html","body","#document"].includes(k(t))}const _=Math.min,q=Math.max,I=Math.round
function z(t,e,n){var o,r,i,l
void 0===e&&(e=!1),void 0===n&&(n=!1)
const c=t.getBoundingClientRect()
let a=1,s=1
e&&C(t)&&(a=t.offsetWidth>0&&I(c.width)/t.offsetWidth||1,s=t.offsetHeight>0&&I(c.height)/t.offsetHeight||1)
const u=H(t)?S(t):window,f=!B()&&n,d=(c.left+(f&&null!=(o=null==(r=u.visualViewport)?void 0:r.offsetLeft)?o:0))/a,m=(c.top+(f&&null!=(i=null==(l=u.visualViewport)?void 0:l.offsetTop)?i:0))/s,p=c.width/a,g=c.height/s
return{width:p,height:g,top:m,right:d+p,bottom:m+g,left:d,x:d,y:m}}function U(t){return(e=t,(e instanceof S(e).Node?t.ownerDocument:t.document)||window.document).documentElement
var e}function J(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){return z(U(t)).left+J(t).scrollLeft}function Y(t,e,n){const o=C(e),r=U(e),i=z(t,o&&function(t){const e=z(t)
return I(e.width)!==t.offsetWidth||I(e.height)!==t.offsetHeight}(e),"fixed"===n)
let l={scrollLeft:0,scrollTop:0}
const c={x:0,y:0}
if(o||!o&&"fixed"!==n)if(("body"!==k(e)||$(r))&&(l=J(e)),C(e)){const t=z(e,!0)
c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else r&&(c.x=X(r))
return{x:i.left+l.scrollLeft-c.x,y:i.top+l.scrollTop-c.y,width:i.width,height:i.height}}function G(t){return"html"===k(t)?t:t.assignedSlot||t.parentNode||(W(t)?t.host:null)||U(t)}function K(t){return C(t)&&"fixed"!==D(t).position?t.offsetParent:null}function Q(t){const e=S(t)
let n=K(t)
for(;n&&M(n)&&"static"===D(n).position;)n=K(n)
return n&&("html"===k(n)||"body"===k(n)&&"static"===D(n).position&&!F(n))?e:n||function(t){let e=G(t)
for(W(e)&&(e=e.host);C(e)&&!V(e);){if(F(e))return e
{const t=e.parentNode
e=W(t)?t.host:t}}return null}(t)||e}function Z(t){if(C(t))return{width:t.offsetWidth,height:t.offsetHeight}
const e=z(t)
return{width:e.width,height:e.height}}function tt(t,e){var n
void 0===e&&(e=[])
const o=function t(e){const n=G(e)
return V(n)?e.ownerDocument.body:C(n)&&$(n)?n:t(n)}(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=S(o),l=r?[i].concat(i.visualViewport||[],$(o)?o:[]):o,c=e.concat(l)
return r?c:c.concat(tt(l))}function et(t,e,n){return"viewport"===e?f(function(t,e){const n=S(t),o=U(t),r=n.visualViewport
let i=o.clientWidth,l=o.clientHeight,c=0,a=0
if(r){i=r.width,l=r.height
const t=B();(t||!t&&"fixed"===e)&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:l,x:c,y:a}}(t,n)):H(e)?function(t,e){const n=z(t,!1,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft
return{top:o,left:r,x:r,y:o,right:r+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):f(function(t){var e
const n=U(t),o=J(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=q(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),l=q(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0)
let c=-o.scrollLeft+X(t)
const a=-o.scrollTop
return"rtl"===D(r||n).direction&&(c+=q(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:l,x:c,y:a}}(U(t)))}function nt(t){const e=tt(t),n=function(t,e){let n=t
for(;n&&!V(n)&&!e.includes(n)&&(!H(n)||!["absolute","fixed"].includes(D(n).position));){const t=G(n)
n=W(t)?t.host:t}return n}(t,e)
let o=null
if(n&&C(n)){const t=Q(n)
$(n)?o=n:C(t)&&(o=t)}return H(o)?e.filter(t=>o&&H(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode()
if(t.contains(e))return!0
if(n&&W(n)){let n=e
do{if(n&&t===n)return!0
n=n.parentNode||n.host}while(n)}return!1}(t,o)&&"body"!==k(t)):[]}const ot={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t
const i=[..."clippingAncestors"===n?nt(e):[].concat(n),o],l=i[0],c=i.reduce((t,n)=>{const o=et(e,n,r)
return t.top=q(o.top,t.top),t.right=_(o.right,t.right),t.bottom=_(o.bottom,t.bottom),t.left=q(o.left,t.left),t},et(e,l,r))
return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t
const r=C(n),i=U(n)
if(n===i)return e
let l={scrollLeft:0,scrollTop:0}
const c={x:0,y:0}
if((r||!r&&"fixed"!==o)&&(("body"!==k(n)||$(i))&&(l=J(n)),C(n))){const t=z(n,!0)
c.x=t.x+n.clientLeft,c.y=t.y+n.clientTop}return{...e,x:e.x-l.scrollLeft+c.x,y:e.y-l.scrollTop+c.y}},isElement:H,getDimensions:Z,getOffsetParent:Q,getDocumentElement:U,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t
return{reference:Y(e,Q(n),o),floating:{...Z(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===D(t).direction}
function rt(t,e,n,o){void 0===o&&(o={})
const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:l=!0,animationFrame:c=!1}=o,a=r&&!c,s=a||i?[...H(t)?tt(t):[],...tt(e)]:[]
s.forEach(t=>{a&&t.addEventListener("scroll",n,{passive:!0}),i&&t.addEventListener("resize",n)})
let u,f=null
if(l){let o=!0
f=new ResizeObserver(()=>{o||n(),o=!1}),H(t)&&!c&&f.observe(t),f.observe(e)}let d=c?z(t):null
return c&&function e(){const o=z(t)
!d||o.x===d.x&&o.y===d.y&&o.width===d.width&&o.height===d.height||n(),d=o,u=requestAnimationFrame(e)}(),n(),()=>{var t
s.forEach(t=>{a&&t.removeEventListener("scroll",n),i&&t.removeEventListener("resize",n)}),null==(t=f)||t.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const it=(t,e,n)=>(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,c=i.filter(Boolean),a=await(null==l.isRTL?void 0:l.isRTL(e))
let u=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:d}=s(u,o,a),m=o,p={},g=0
for(let n=0;n<c.length;n++){const{name:i,fn:h}=c[n],{x:y,y:v,data:w,reset:b}=await h({x:f,y:d,initialPlacement:o,placement:m,strategy:r,middlewareData:p,rects:u,platform:l,elements:{reference:t,floating:e}})
f=null!=y?y:f,d=null!=v?v:d,p={...p,[i]:{...p[i],...w}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(m=b.placement),b.rects&&(u=!0===b.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):b.rects),({x:f,y:d}=s(u,m,a))),n=-1)}return{x:f,y:d,placement:m,strategy:r,middlewareData:p}})(t,e,{platform:ot,...n}),lt={floatingUINonChromiumPositioningFix:!0,...globalThis.calciteComponentsConfig},ct=async function(){if(lt.floatingUINonChromiumPositioningFix&&/firefox|safari/i.test(function(){const t=navigator.userAgentData
return(null==t?void 0:t.brands)?t.brands.map(t=>`${t.brand}/${t.version}`).join(" "):navigator.userAgent}())){const{getClippingRect:t,getElementRects:e,getOffsetParent:o}=await n.e(517).then(n.bind(null,2251))
ot.getClippingRect=t,ot.getOffsetParent=o,ot.getElementRects=e}}(),at=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],st="bottom-start",ut={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"}
function ft({placement:t,disableFlip:e,flipPlacements:n,offsetDistance:o,offsetSkidding:r,arrowEl:s,type:f}){const m=[(void 0===p&&(p={}),{name:"shift",options:p,async fn(t){const{x:e,y:n,placement:o}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:t=>{let{x:e,y:n}=t
return{x:e,y:n}}},...s}=p,u={x:e,y:n},f=await d(t,s),m=c(i(o)),h="x"===m?"y":"x"
let y=u[m],v=u[h]
if(r){const t="y"===m?"bottom":"right"
y=g(y+f["y"===m?"top":"left"],y,y-f[t])}if(l){const t="y"===h?"bottom":"right"
v=g(v+f["y"===h?"top":"left"],v,v-f[t])}const w=a.fn({...t,[m]:y,[h]:v})
return{...w,data:{x:w.x-e,y:w.y-n}}}}),O()]
var p
if("menu"===f)return[...m,E({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})]
if("popover"===f||"tooltip"===f){const i=[...m,P({mainAxis:"number"==typeof o?o:0,crossAxis:"number"==typeof r?r:0})]
return"auto"===t||"auto-start"===t||"auto-end"===t?i.push(R({alignment:"auto-start"===t?"start":"auto-end"===t?"end":null})):e||i.push(E(n?{fallbackPlacements:n}:{})),s&&i.push((t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=null!=t?t:{},{x:r,y:i,placement:s,rects:f,platform:d}=e
if(null==n)return{}
const m=u(o),p={x:r,y:i},h=c(s),y=l(s),v=a(h),w=await d.getDimensions(n),b="y"===h?"top":"left",x="y"===h?"bottom":"right",A=f.reference[v]+f.reference[h]-p[h]-f.floating[v],R=p[h]-f.reference[h],E=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n))
let T=E?"y"===h?E.clientHeight||0:E.clientWidth||0:0
0===T&&(T=f.floating[v])
const L=A/2-R/2,O=m[b],P=T-w[v]-m[x],j=T/2-w[v]/2+L,S=g(O,j,P),D=("start"===y?m[b]:m[x])>0&&j!==S&&f.reference[v]<=f.floating[v]
return{[h]:p[h]-(D?j<O?O-j:P-j:0),data:{[h]:S,centerOffset:j-S}}}}))({element:s})),i}return[]}function dt(t,e){const n=t.filter(t=>at.includes(t))
return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${at.map(t=>`"${t}"`).join(", ").trim()}`,{el:e}),n}function mt(t,e){const n=["left","right"]
return"rtl"===Object(o.a)(t)&&n.reverse(),e.replace(/-leading/gi,"-start").replace(/-trailing/gi,"-end").replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function pt(t,e,n=!1){if(t.open)return n?gt(e):ht(e)}const gt=Object(r.e)(ht,100,{leading:!0,maxWait:100})
async function ht({referenceEl:t,floatingEl:e,overlayPositioning:n="absolute",placement:o,disableFlip:r,flipPlacements:i,offsetDistance:l,offsetSkidding:c,includeArrow:a=!1,arrowEl:s,type:u}){var f
if(!t||!e||a&&!s)return null
await ct
const{x:d,y:m,placement:p,strategy:g,middlewareData:h}=await it(t,e,{strategy:n,placement:"auto"===o||"auto-start"===o||"auto-end"===o?void 0:mt(e,o),middleware:ft({placement:o,disableFlip:r,flipPlacements:i,offsetDistance:l,offsetSkidding:c,arrowEl:s,type:u})})
if(null==h?void 0:h.arrow){const{x:t,y:e}=h.arrow
Object.assign(s.style,{left:null!=t?t+"px":"",top:null!=e?e+"px":""})}const y=(null===(f=null==h?void 0:h.hide)||void 0===f?void 0:f.referenceHidden)?"hidden":null,v=y?"none":null
e.setAttribute("data-placement",p)
const w=`translate(${Math.round(d)}px,${Math.round(m)}px)`
Object.assign(e.style,{visibility:y,pointerEvents:v,position:g,top:"0",left:"0",transform:w})}const yt=new WeakMap
function vt(t,e,n){if(!n||!e)return
wt(t,e,n)
const o=t.overlayPositioning
Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:o}),"absolute"===o&&Et(n)
const r=rt
yt.set(t,r(e,n,()=>t.reposition()))}function wt(t,e,n){if(!n||!e)return
At(n).removeEventListener("transitionend",Rt)
const o=yt.get(t)
o&&o(),yt.delete(t)}const bt=Math.ceil(Math.hypot(4,4))
function xt(t){t&&"absolute"===t.style.position&&At(t).addEventListener("transitionend",Rt)}function At(t){return t.shadowRoot||t}function Rt(t){const e=t.target
if("opacity"===t.propertyName&&e.classList.contains(ut.animation)){const t=function(t){return Object(o.c)(t,"[data-placement]")}(e)
Et(t),At(t).removeEventListener("transitionend",Rt)}}function Et(t){t.style.transform="",t.style.top="0",t.style.left="0"}},953:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
const o=()=>[2,1,1,1,3].map(t=>{let e=""
for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1)
return e}).join("-")},957:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return R})),n.d(e,"j",(function(){return w})),n.d(e,"k",(function(){return u})),n.d(e,"l",(function(){return i})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return l})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return b})),n.d(e,"q",(function(){return A}))
var o=n(179),r=n(953)
function i(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${Object(r.a)()}`:""}function l(t){return Array.isArray(t)?t:Array.from(t)}function c(t){const e=m(t,`.${o.a.darkTheme}, .${o.a.lightTheme}`)
return(null==e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function a(t){const e=m(t,"[dir]")
return e?e.getAttribute("dir"):"ltr"}function s(t,e,n){const o=`[${e}]`,r=t.closest(o)
return r?r.getAttribute(e):n}function u(t){return t.getRootNode()}function f(t){return t.host||null}function d(t,{selector:e,id:n}){return function t(o){if(!o)return null
o.assignedSlot&&(o=o.assignedSlot)
const r=u(o),i=n?"getElementById"in r?r.getElementById(n):null:e?r.querySelector(e):null,l=f(r)
return i||(l?t(l):null)}(t)}function m(t,e){return function t(n){return n?n.closest(e)||t(f(u(n))):null}(t)}function p(t,e){return!!function(t,e){return function t(e,n){if(!e)return
const o=n(e)
if(void 0!==o)return o
const{parentNode:r}=e
return t(r instanceof ShadowRoot?r.host:r,n)}(t,e)}(e,e=>e===t||void 0)}function g(t){return"function"==typeof(null==t?void 0:t.setFocus)}async function h(t){if(t)return g(t)?t.setFocus():t.focus()}function y(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null)
const o=e?Array.isArray(e)?e.map(t=>`[slot="${t}"]`).join(","):`[slot="${e}"]`:":not([slot])"
return(null==n?void 0:n.all)?function(t,e,n){let o=":not([slot])"===e?v(t,":not([slot])"):Array.from(t.querySelectorAll(e))
o=n&&!1===n.direct?o:o.filter(e=>e.parentElement===t),o=(null==n?void 0:n.matches)?o.filter(t=>null==t?void 0:t.matches(n.matches)):o
const r=null==n?void 0:n.selector
return r?o.map(t=>Array.from(t.querySelectorAll(r))).reduce((t,e)=>[...t,...e],[]).filter(t=>!!t):o}(t,o,n):function(t,e,n){let o=":not([slot])"===e?v(t,":not([slot])")[0]||null:t.querySelector(e)
o=n&&!1===n.direct||(null==o?void 0:o.parentElement)===t?o:null,o=(null==n?void 0:n.matches)?(null==o?void 0:o.matches(n.matches))?o:null:o
const r=null==n?void 0:n.selector
return r?null==o?void 0:o.querySelector(r):o}(t,o,n)}function v(t,e){return t?Array.from(t.children||[]).filter(t=>null==t?void 0:t.matches(e)):[]}function w(t,e){return Array.from(t.children).filter(t=>t.matches(e))}function b(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function x(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function A(t){return Boolean(t).toString()}function R(t){return!(!t.isPrimary||0!==t.button)}}}])
