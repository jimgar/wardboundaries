(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[50,30,439],{1013:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return u})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return n}))
const s=0,r=100
function n(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function a(e,t){return Math.sqrt(e*e+t*t)}function o(e){const t=a(e[0],e[1])
e[0]/=t,e[1]/=t}function l(e,t){return a(e[0]-t[0],e[1]-t[1])}function c(e){return"function"==typeof e}function h(e=2){return 1/Math.max(e,1)}function u(e,t){return[!!e.minScale&&t.scaleToZoom(e.minScale)||s,!!e.maxScale&&t.scaleToZoom(e.maxScale)||r]}},1070:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return u})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return a})),i.d(t,"e",(function(){return f})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return _})),i.d(t,"h",(function(){return h}))
var s=i(895),r=i(877),n=i(979)
const a=Object(n.h)(r.b.SRC_ALPHA,r.b.ONE,r.b.ONE_MINUS_SRC_ALPHA,r.b.ONE_MINUS_SRC_ALPHA),o=Object(n.i)(r.b.ONE,r.b.ONE),l=Object(n.i)(r.b.ZERO,r.b.ONE_MINUS_SRC_ALPHA)
function c(e){return e===s.l.FrontFace?null:e===s.l.Alpha?l:o}function h(e){return e===s.l.FrontFace?n.e:null}const u=5e5,d={factor:-1,units:-2}
function f(e){return e?d:null}function _(e,t=r.h.LESS){return e===s.l.NONE||e===s.l.FrontFace?t:r.h.LEQUAL}},1074:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return l})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return h}))
const s=8388607,r=8388608,n=0,a=1,o=e=>(e&r)>>>23,l=e=>e&s,c=e=>o(e)===a?254:255
function h(e){return o(e)===a}function u(e,t){return((t?r:0)|e)>>>0}},1096:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var s,r,n,a={exports:{}}
s=a,r=function(){function e(e,i,r){r=r||2
var n,a,o,c,h,u,d,f=i&&i.length,_=f?i[0]*r:e.length,p=t(e,0,_,r,!0),m=[]
if(!p||p.next===p.prev)return m
if(f&&(p=l(e,i,p,r)),e.length>80*r){n=o=e[0],a=c=e[1]
for(var g=r;g<_;g+=r)(h=e[g])<n&&(n=h),(u=e[g+1])<a&&(a=u),h>o&&(o=h),u>c&&(c=u)
d=0!==(d=Math.max(o-n,c-a))?1/d:0}return s(p,m,r,n,a,d),m}function t(e,t,i,s,r){var n,a
if(r===M(e,t,i,s)>0)for(n=t;n<i;n+=s)a=E(n,e[n],e[n+1],a)
else for(n=i-s;n>=t;n-=s)a=E(n,e[n],e[n+1],a)
if(a&&y(a,a.next)){var o=a.next
S(a),a=o}return a}function i(e,t){if(!e)return e
t||(t=e)
var i,s=e
do{if(i=!1,s.steiner||!y(s,s.next)&&0!==b(s.prev,s,s.next))s=s.next
else{var r=s.prev
if(S(s),(s=t=r)===s.next)break
i=!0}}while(i||s!==t)
return t}function s(e,t,l,c,h,u,d){if(e){!d&&u&&f(e,c,h,u)
for(var _,p,m=e;e.prev!==e.next;)if(_=e.prev,p=e.next,u?n(e,c,h,u):r(e))t.push(_.i/l),t.push(e.i/l),t.push(p.i/l),S(e),e=p.next,m=p.next
else if((e=p)===m){d?1===d?s(e=a(i(e),t,l),t,l,c,h,u,2):2===d&&o(e,t,l,c,h,u):s(i(e),t,l,c,h,u,1)
break}}}function r(e){var t=e.prev,i=e,s=e.next
if(b(t,i,s)>=0)return!1
for(var r=e.next.next;r!==e.prev;){if(m(t.x,t.y,i.x,i.y,s.x,s.y,r.x,r.y)&&b(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function n(e,t,i,s){var r=e.prev,n=e,a=e.next
if(b(r,n,a)>=0)return!1
for(var o=r.x<n.x?r.x<a.x?r.x:a.x:n.x<a.x?n.x:a.x,l=r.y<n.y?r.y<a.y?r.y:a.y:n.y<a.y?n.y:a.y,c=r.x>n.x?r.x>a.x?r.x:a.x:n.x>a.x?n.x:a.x,h=r.y>n.y?r.y>a.y?r.y:a.y:n.y>a.y?n.y:a.y,u=_(o,l,t,i,s),d=_(c,h,t,i,s),f=e.prevZ,p=e.nextZ;f&&f.z>=u&&p&&p.z<=d;){if(f!==e.prev&&f!==e.next&&m(r.x,r.y,n.x,n.y,a.x,a.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,p!==e.prev&&p!==e.next&&m(r.x,r.y,n.x,n.y,a.x,a.y,p.x,p.y)&&b(p.prev,p,p.next)>=0)return!1
p=p.nextZ}for(;f&&f.z>=u;){if(f!==e.prev&&f!==e.next&&m(r.x,r.y,n.x,n.y,a.x,a.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;p&&p.z<=d;){if(p!==e.prev&&p!==e.next&&m(r.x,r.y,n.x,n.y,a.x,a.y,p.x,p.y)&&b(p.prev,p,p.next)>=0)return!1
p=p.nextZ}return!0}function a(e,t,s){var r=e
do{var n=r.prev,a=r.next.next
!y(n,a)&&x(n,r,r.next,a)&&w(n,a)&&w(a,n)&&(t.push(n.i/s),t.push(r.i/s),t.push(a.i/s),S(r),S(r.next),r=e=a),r=r.next}while(r!==e)
return i(r)}function o(e,t,r,n,a,o){var l=e
do{for(var c=l.next.next;c!==l.prev;){if(l.i!==c.i&&g(l,c)){var h=T(l,c)
return l=i(l,l.next),h=i(h,h.next),s(l,t,r,n,a,o),void s(h,t,r,n,a,o)}c=c.next}l=l.next}while(l!==e)}function l(e,s,r,n){var a,o,l,h=[]
for(a=0,o=s.length;a<o;a++)(l=t(e,s[a]*n,a<o-1?s[a+1]*n:e.length,n,!1))===l.next&&(l.steiner=!0),h.push(p(l))
for(h.sort(c),a=0;a<h.length;a++)r=i(r=u(h[a],r),r.next)
return r}function c(e,t){return e.x-t.x}function h(e){if(e.next.prev===e)return e
let t=e
for(;;){const i=t.next
if(i.prev===t||i===t||i===e)break
t=i}return t}function u(e,t){var s=function(e,t){var i,s=t,r=e.x,n=e.y,a=-1/0
do{if(n<=s.y&&n>=s.next.y&&s.next.y!==s.y){var o=s.x+(n-s.y)*(s.next.x-s.x)/(s.next.y-s.y)
if(o<=r&&o>a){if(a=o,o===r){if(n===s.y)return s
if(n===s.next.y)return s.next}i=s.x<s.next.x?s:s.next}}s=s.next}while(s!==t)
if(!i)return null
if(r===a)return i
var l,c=i,h=i.x,u=i.y,f=1/0
s=i
do{r>=s.x&&s.x>=h&&r!==s.x&&m(n<u?r:a,n,h,u,n<u?a:r,n,s.x,s.y)&&(l=Math.abs(n-s.y)/(r-s.x),w(s,e)&&(l<f||l===f&&(s.x>i.x||s.x===i.x&&d(i,s)))&&(i=s,f=l)),s=s.next}while(s!==c)
return i}(e,t)
if(!s)return t
var r=T(s,e),n=i(s,s.next)
let a=h(r)
return i(a,a.next),n=h(n),h(t===s?n:t)}function d(e,t){return b(e.prev,e,t.prev)<0&&b(t.next,e,e.next)<0}function f(e,t,i,s){var r=e
do{null===r.z&&(r.z=_(r.x,r.y,t,i,s)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e)
r.prevZ.nextZ=null,r.prevZ=null,function(e){var t,i,s,r,n,a,o,l,c=1
do{for(i=e,e=null,n=null,a=0;i;){for(a++,s=i,o=0,t=0;t<c&&(o++,s=s.nextZ);t++);for(l=c;o>0||l>0&&s;)0!==o&&(0===l||!s||i.z<=s.z)?(r=i,i=i.nextZ,o--):(r=s,s=s.nextZ,l--),n?n.nextZ=r:e=r,r.prevZ=n,n=r
i=s}n.nextZ=null,c*=2}while(a>1)}(r)}function _(e,t,i,s,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-s)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(e){var t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function m(e,t,i,s,r,n,a,o){return(r-a)*(t-o)-(e-a)*(n-o)>=0&&(e-a)*(s-o)-(i-a)*(t-o)>=0&&(i-a)*(n-o)-(r-a)*(s-o)>=0}function g(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var i=e
do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&x(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&(w(e,t)&&w(t,e)&&function(e,t){var i=e,s=!1,r=(e.x+t.x)/2,n=(e.y+t.y)/2
do{i.y>n!=i.next.y>n&&i.next.y!==i.y&&r<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next}while(i!==e)
return s}(e,t)&&(b(e.prev,e,t.prev)||b(e,t.prev,t))||y(e,t)&&b(e.prev,e,e.next)>0&&b(t.prev,t,t.next)>0)}function b(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function y(e,t){return e.x===t.x&&e.y===t.y}function x(e,t,i,s){var r=O(b(e,t,i)),n=O(b(e,t,s)),a=O(b(i,s,e)),o=O(b(i,s,t))
return r!==n&&a!==o||!(0!==r||!v(e,i,t))||!(0!==n||!v(e,s,t))||!(0!==a||!v(i,e,s))||!(0!==o||!v(i,t,s))}function v(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function O(e){return e>0?1:e<0?-1:0}function w(e,t){return b(e.prev,e,e.next)<0?b(e,t,e.next)>=0&&b(e,e.prev,t)>=0:b(e,t,e.prev)<0||b(e,e.next,t)<0}function T(e,t){var i=new R(e.i,e.x,e.y),s=new R(t.i,t.x,t.y),r=e.next,n=t.prev
return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,n.next=s,s.prev=n,s}function E(e,t,i,s){var r=new R(e,t,i)
return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function S(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function R(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M(e,t,i,s){for(var r=0,n=t,a=i-s;n<i;n+=s)r+=(e[a]-e[n])*(e[n+1]+e[a+1]),a=n
return r}return e.deviation=function(e,t,i,s){var r=t&&t.length,n=r?t[0]*i:e.length,a=Math.abs(M(e,0,n,i))
if(r)for(var o=0,l=t.length;o<l;o++){var c=t[o]*i,h=o<l-1?t[o+1]*i:e.length
a-=Math.abs(M(e,c,h,i))}var u=0
for(o=0;o<s.length;o+=3){var d=s[o]*i,f=s[o+1]*i,_=s[o+2]*i
u+=Math.abs((e[d]-e[_])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[_+1]-e[d+1]))}return 0===a&&0===u?0:Math.abs((u-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},s=0,r=0;r<e.length;r++){for(var n=0;n<e[r].length;n++)for(var a=0;a<t;a++)i.vertices.push(e[r][n][a])
r>0&&(s+=e[r-1].length,i.holes.push(s))}return i},e},void 0!==(n=r())&&(s.exports=n)
const o=a.exports},1110:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return m})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return b})),i.d(t,"e",(function(){return y})),i.d(t,"f",(function(){return x})),i.d(t,"g",(function(){return v}))
var s=i(20),r=i(869)
const n=(e,t,i)=>[t,i],a=(e,t,i)=>[t,i,e[2]],o=(e,t,i)=>[t,i,e[2],e[3]]
function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(s.k)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c({scale:e,translate:t},i){return Math.round((i-t[0])/e[0])}function h({scale:e,translate:t},i){return Math.round((t[1]-i)/e[1])}function u(e,t,i){const s=[]
let r,n,a,o
for(let l=0;l<i.length;l++){const u=i[l]
l>0?(a=c(e,u[0]),o=h(e,u[1]),a===r&&o===n||(s.push(t(u,a-r,o-n)),r=a,n=o)):(r=c(e,u[0]),n=h(e,u[1]),s.push(t(u,r,n)))}return s.length>0?s:null}function d({scale:e,translate:t},i){return i*e[0]+t[0]}function f({scale:e,translate:t},i){return t[1]-i*e[1]}function _(e,t,i){const s=new Array(i.length)
if(!i.length)return s
const[r,n]=e.scale
let a=d(e,i[0][0]),o=f(e,i[0][1])
s[0]=t(i[0],a,o)
for(let e=1;e<i.length;e++){const l=i[e]
a+=l[0]*r,o-=l[1]*n,s[e]=t(l,a,o)}return s}function p(e,t,i){const s=new Array(i.length)
for(let r=0;r<i.length;r++)s[r]=_(e,t,i[r])
return s}function m(e,t,i,s,r){return t.x=c(e,i.x),t.y=h(e,i.y),t!==i&&(s&&(t.z=i.z),r&&(t.m=i.m)),t}function g(e,t){return e&&t?Object(r.f)(t)?m(e,{},t,!1,!1):Object(r.h)(t)?function(e,t,i,s,r){const l=function(e,t,i,s){const r=[],l=i?s?o:a:s?a:n
for(let i=0;i<t.length;i++){const s=u(e,l,t[i])
s&&s.length>=2&&r.push(s)}return r.length?r:null}(e,i.paths,s,r)
return l?(t.paths=l,t):null}(e,{},t,!1,!1):Object(r.g)(t)?function(e,t,i,s,r){const l=function(e,t,i,s){const r=[],l=i?s?o:a:s?a:n
for(let i=0;i<t.length;i++){const s=u(e,l,t[i])
s&&s.length>=3&&r.push(s)}return r.length?r:null}(e,i.rings,s,r)
return l?(t.rings=l,t):null}(e,{},t,!1,!1):Object(r.e)(t)?function(e,t,i,s,r){return t.points=function(e,t,i,s){return u(e,i?s?o:a:s?a:n,t)}(e,i.points,s,r),t}(e,{},t,!1,!1):Object(r.d)(t)?function(e,t,i,s,r){return t.xmin=c(e,i.xmin),t.ymin=h(e,i.ymin),t.xmax=c(e,i.xmax),t.ymax=h(e,i.ymax),t}(e,{},t):null:null}function b(e,t,i,r,l){return Object(s.k)(i)&&(t.points=function(e,t,i,s){return _(e,i?s?o:a:s?a:n,t)}(e,i.points,r,l)),t}function y(e,t,i,r,n){return Object(s.j)(i)||(t.x=d(e,i.x),t.y=f(e,i.y),t!==i&&(r&&(t.z=i.z),n&&(t.m=i.m))),t}function x(e,t,i,r,l){return Object(s.k)(i)&&(t.rings=function(e,t,i,s){return p(e,i?s?o:a:s?a:n,t)}(e,i.rings,r,l)),t}function v(e,t,i,r,l){return Object(s.k)(i)&&(t.paths=function(e,t,i,s){return p(e,i?s?o:a:s?a:n,t)}(e,i.paths,r,l)),t}},1119:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var s=i(20),r=i(1301)
class n{bindFeature(e,t,i){}write(e,t,i,n){var a
if(Object(s.j)(this._effects)||0===(null==(a=this._effects)?void 0:a.length))return this._write(e,t,n)
const o=r.a.executeEffects(this._effects,t.readLegacyGeometryForDisplay(),n.geometryEngine)
let l=r.a.next(o)
for(;l;)this._write(e,t,n,l),l=r.a.next(o)}_write(e,t,i,s){}}},1120:function(e,t,i){"use strict"
i.r(t),i.d(t,"createSymbolSchema",(function(){return o}))
var s=i(908),r=i(939)
function n(e){var t
return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function a(e){return hydrateKey(e)}function o(e,t,i){if(!e)return null
switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,i){const o=t.supportsOutlineFills,l=Object(r.g)(s.d.FILL,{...t,isOutlinedFill:o}),c=i?a(l):l,h=e.clone(),u=h.outline
t.supportsOutlineFills||(h.outline=null)
const d={materialKey:c,hash:h.hash(),isOutlinedFill:!!t.supportsOutlineFills,...n(h)}
if(t.supportsOutlineFills)return d
const f=[]
if(f.push(d),u){const e=Object(r.g)(s.d.LINE,{...t,isOutline:!0}),o={materialKey:i?a(e):e,hash:u.hash(),...n(u)}
f.push(o)}return{type:"composite-symbol",layers:f,hash:f.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"simple-marker":case"picture-marker":return function(e,t,i){const o=Object(r.g)(s.d.MARKER,t),l=i?a(o):o,c=n(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"simple-line":return function(e,t,i){const o=Object(r.g)(s.d.LINE,t),l=i?a(o):o,c=e.clone(),h=c.marker
c.marker=null
const u=[]
if(u.push({materialKey:l,hash:c.hash(),...n(c)}),h){var d
const e=Object(r.g)(s.d.MARKER,t),o=i?a(e):e
h.color=null!=(d=h.color)?d:c.color,u.push({materialKey:o,hash:h.hash(),lineWidth:c.width,...n(h)})}return{type:"composite-symbol",layers:u,hash:u.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"text":return function(e,t,i){const o=Object(r.g)(s.d.TEXT,t),l=i?a(o):o,c=n(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"label":return function(e,t,i){const n=e.toJSON(),o=Object(r.g)(s.d.LABEL,{...t,placement:n.labelPlacement})
return{materialKey:i?a(o):o,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}(e,t,i)
case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize}
case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize}
case"web-style":return{...n(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize}
default:throw new Error("symbol not supported "+e.type)}}},1131:function(e,t,i){"use strict"
function s(){return new Float32Array(3)}function r(e){const t=new Float32Array(3)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(e,t,i){const s=new Float32Array(3)
return s[0]=e,s[1]=t,s[2]=i,s}function a(e,t){return new Float32Array(e,t,3)}function o(){return s()}function l(){return n(1,1,1)}function c(){return n(1,0,0)}function h(){return n(0,1,0)}function u(){return n(0,0,1)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return o}))
const d=o(),f=l(),_=c(),p=h(),m=u()
Object.freeze({__proto__:null,create:s,clone:r,fromValues:n,createView:a,zeros:o,ones:l,unitX:c,unitY:h,unitZ:u,ZEROS:d,ONES:f,UNIT_X:_,UNIT_Y:p,UNIT_Z:m})},1140:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return g}))
var s=i(20),r=i(917),n=i(1300),a=i(872),o=i(662)
const l=[0,0]
function c(e,t){if(!t)return null
if("x"in t){const i={x:0,y:0}
return[i.x,i.y]=e(t.x,t.y,l),null!=t.z&&(i.z=t.z),null!=t.m&&(i.m=t.m),i}if("xmin"in t){const i={xmin:0,ymin:0,xmax:0,ymax:0}
return[i.xmin,i.ymin]=e(t.xmin,t.ymin,l),[i.xmax,i.ymax]=e(t.xmax,t.ymax,l),t.hasZ&&(i.zmin=t.zmin,i.zmax=t.zmax,i.hasZ=!0),t.hasM&&(i.mmin=t.mmin,i.mmax=t.mmax,i.hasM=!0),i}return"rings"in t?{rings:h(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:h(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:u(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function h(e,t){const i=[]
for(const s of e)i.push(u(s,t))
return i}function u(e,t){const i=[]
for(const s of e){const e=t(s[0],s[1],[0,0])
i.push(e),s.length>2&&e.push(s[2]),s.length>3&&e.push(s[3])}return i}async function d(e,t){if(!t)return
const i=Array.isArray(e)?e.map(e=>Object(s.k)(e.geometry)&&e.geometry.spatialReference):[e]
await Object(r.g)(i.map(e=>({source:e,dest:t})))}const f=c.bind(null,o.lngLatToXY),_=c.bind(null,o.xyToLngLat)
function p(e,t,i){if(!e)return e
if(i||(i=t,t=e.spatialReference),!Object(a.l)(t)||!Object(a.l)(i)||Object(a.d)(t,i))return e
if(Object(o.canProject)(t,i)){const t=Object(a.p)(i)?f(e):_(e)
return t.spatialReference=i,t}return Object(r.r)(n.a,[e],t,i,null)[0]}const m=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,i){if(!e||!e.length||!t||!i||Object(a.d)(t,i))return e
const s={geometries:e,inSpatialReference:t,outSpatialReference:i,resolve:null}
return this._jobs.push(s),new Promise(e=>{s.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null
const e=this._jobs.shift()
if(!e)return
const{geometries:t,inSpatialReference:i,outSpatialReference:s,resolve:l}=e
Object(o.canProject)(i,s)?Object(a.p)(s)?l(t.map(f)):l(t.map(_)):l(Object(r.r)(n.a,t,i,s,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}
function g(e,t,i){return m.push(e,t,i)}},1153:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var s=i(354)
function r(e,t){if(e&&"name"in e){const i=e
return t&&t.error(new s.a(i.name,i.message,i.details)),!1}return!0}},1158:function(e,t,i){"use strict"
function s(){return new Float32Array(4)}function r(e){const t=new Float32Array(4)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function n(e,t,i,s){const r=new Float32Array(4)
return r[0]=e,r[1]=t,r[2]=i,r[3]=s,r}function a(){return s()}function o(){return n(1,1,1,1)}function l(){return n(1,0,0,0)}function c(){return n(0,1,0,0)}function h(){return n(0,0,1,0)}function u(){return n(0,0,0,1)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n}))
const d=a(),f=o(),_=l(),p=c(),m=h(),g=u()
Object.freeze({__proto__:null,create:s,clone:r,fromValues:n,createView:function(e,t){return new Float32Array(e,t,4)},zeros:a,ones:o,unitX:l,unitY:c,unitZ:h,unitW:u,ZEROS:d,ONES:f,UNIT_X:_,UNIT_Y:p,UNIT_Z:m,UNIT_W:g})},1160:function(e,t,i){"use strict"
i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return g}))
var s=i(1302),r=i(908),n=i(939)
const a={marker:r.d.MARKER,fill:r.d.FILL,line:r.d.LINE,text:r.d.TEXT}
class o{constructor(e,t,i,s){const r={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(r)
this.layers=e,this.data=t,this.hash=this._createHash()+o,this.rendererKey=i
const l={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:i}
for(const t of e){const e=a[t.type]
t.materialKey=Object(n.g)(e,l),t.maxVVSize=s,t.scaleInfo=r,t.templateHash+=o}}get type(){return"expanded-cim"}_createHash(){let e=""
for(const t of this.layers)e+=t.templateHash
return e}}var l=i(1259),c=i(354),h=i(861),u=i(292),d=i(914),f=i(936),_=i(1200)
async function p(e,t,i){if(!e.name)return Promise.reject(new c.a("style-symbol-reference-name-missing","Missing name in style symbol reference"))
if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const i=_.a.replace(/\{SymbolName\}/gi,e.name)
try{const e=await Object(_.d)(i,t)
return Object(_.c)(e.data)}catch(e){return Object(h.v)(e),null}}(e,i)
try{return async function(e,t,i,s){const r=e.data,n={portal:i&&i.portal||d.a.getDefault(),url:Object(u.M)(e.baseUrl),origin:"portal-item"},a=r.items.find(e=>e.name===t)
if(!a)throw new c.a("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t})
let o=Object(f.b)(Object(_.e)(a,"cimRef"),n)
Object(l.b)()&&(o=Object(l.a)(o))
try{const e=await Object(_.d)(o,s)
return Object(_.c)(e.data)}catch(e){return Object(h.v)(e),null}}(await Object(_.b)(e,t,i),e.name,t,i)}catch(e){return Object(h.v)(e),null}}const m=async(e,t,i)=>new o(await Object(s.b)(e.data,t,i),e.data,e.rendererKey,e.maxVVSize),g=async(e,t,i,s)=>{if(!e)return null
if("cim"===e.type)return m(e,t,i)
if("web-style"===e.type){const r={type:"cim",data:await p(e,null,s),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize}
return m(r,t,i)}return e}
function b(e){if(!e)return null
const{type:t,cim:i,url:s,materialHash:r}=e,n={cim:i,type:t,mosaicHash:r,url:s,size:null,dashTemplate:null,path:null,text:null,fontName:null}
switch(t){case"marker":n.size=e.size,n.path=e.path
break
case"line":n.dashTemplate=e.dashTemplate
break
case"text":n.text=e.text,n.fontName=e.fontName}return n}},1168:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return b})),i.d(t,"d",(function(){return g})),i.d(t,"e",(function(){return _})),i.d(t,"f",(function(){return m})),i.d(t,"g",(function(){return p})),i.d(t,"h",(function(){return y}))
var s=i(1251),r=i(20),n=i(876),a=i(661),o=i(884),l=i(1033),c=i(1152),h=i(891),u=i(1395)
const d=512,f=50
function _(e,t){if(!t.isWrappable)return null
const[i,s]=Object(l.c)(t)
return e[2]>s?[Object(o.m)([e[0],e[1],s,e[3]]),Object(o.m)([i,e[1],i+e[2]-s,e[3]])]:e[0]<i?[Object(o.m)([i,e[1],e[2],e[3]]),Object(o.m)([s-(i-e[0]),e[1],s,e[3]])]:null}function p(e){return"text"===e||"esriTS"===e}function m(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function g(e){switch(Object(r.t)(e.geometry).type){case"point":case"multipoint":return 0
case"polyline":return 1
case"polygon":case"extent":return 2}return 0}function b(e,t,i){var r,a,o
if(!i||0===i.glyphMosaicItems.length)return e
const l=Object(s.a)(t.text)[1],d=i.glyphMosaicItems,f=Object(u.a)(d,l,{scale:Object(n.h)(t.font.size)/h.r,angle:null!=(r=t.angle)?r:0,xOffset:null!=(a=t.xoffset)?a:0,yOffset:null!=(o=t.yoffset)?o:0,hAlign:Object(c.e)(t.horizontalAlignment||"center"),vAlign:Object(c.g)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:h.u*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds
return e[0]=Object(n.h)(f.x-f.halfWidth),e[1]=Object(n.h)(f.y-f.halfHeight),e[2]=Object(n.h)(f.width),e[3]=Object(n.h)(f.height),e}function y(e){if(!e)return null
const{xmin:t,ymin:i,xmax:s,ymax:r,spatialReference:n}=e
return new a.default({rings:[[[t,i],[t,r],[s,r],[s,i],[t,i]]],spatialReference:n})}},1177:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n}))
var s=i(874)
function r(e,t,i=0){const r=Object(s.f)(e,0,l)
for(let e=0;e<4;e++)t[i+e]=Math.floor(256*c(r*a[e]))}function n(e,t=0){let i=0
for(let s=0;s<4;s++)i+=e[t+s]*o[s]
return i}const a=[1,256,65536,16777216],o=[1/256,1/65536,1/16777216,1/4294967296],l=n(new Uint8ClampedArray([255,255,255,255]))
function c(e){return e-Math.floor(e)}},1203:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))
class s{constructor(e,t){this.x=e,this.y=t}clone(){return new s(this.x,this.y)}equals(e,t){return e===this.x&&t===this.y}isEqual(e){return e.x===this.x&&e.y===this.y}setCoords(e,t){this.x=e,this.y=t}normalize(){const e=this.x,t=this.y,i=Math.sqrt(e*e+t*t)
this.x/=i,this.y/=i}rightPerpendicular(){const e=this.x
this.x=this.y,this.y=-e}move(e,t){this.x+=e,this.y+=t}assign(e){this.x=e.x,this.y=e.y}assignAdd(e,t){this.x=e.x+t.x,this.y=e.y+t.y}assignSub(e,t){this.x=e.x-t.x,this.y=e.y-t.y}rotate(e,t){const i=this.x,s=this.y
this.x=i*e-s*t,this.y=i*t+s*e}scale(e){this.x*=e,this.y*=e}length(){const e=this.x,t=this.y
return Math.sqrt(e*e+t*t)}static distance(e,t){const i=t.x-e.x,s=t.y-e.y
return Math.sqrt(i*i+s*s)}static add(e,t){return new s(e.x+t.x,e.y+t.y)}static sub(e,t){return new s(e.x-t.x,e.y-t.y)}}var r
!function(e){e[e.Unknown=0]="Unknown",e[e.Point=1]="Point",e[e.LineString=2]="LineString",e[e.Polygon=3]="Polygon"}(r||(r={}))},1228:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var s=i(20)
function r(e,t){return e?t?4:3:t?3:2}function n(e,t,i,n,l){if(Object(s.j)(t)||!t.lengths.length)return null
const c="upperLeft"===(null==l?void 0:l.originPosition)?-1:1
e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0)
const h=e.coords,u=[],d=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:f,coords:_}=t,p=r(i,n)
let m=0
for(const e of f){const t=a(d,_,m,e,i,n,c)
t&&u.push(t),m+=e*p}if(u.sort((e,t)=>{let s=c*e[2]-c*t[2]
return 0===s&&i&&(s=e[4]-t[4]),s}),u.length){let e=6*u[0][2]
h[0]=u[0][0]/e,h[1]=u[0][1]/e,i&&(e=6*u[0][4],h[2]=0!==e?u[0][3]/e:0),(h[0]<d[0]||h[0]>d[1]||h[1]<d[2]||h[1]>d[3]||i&&(h[2]<d[4]||h[2]>d[5]))&&(h.length=0)}if(!h.length){const e=t.lengths[0]?o(_,0,f[0],i,n):null
if(!e)return null
h[0]=e[0],h[1]=e[1],i&&e.length>2&&(h[2]=e[2])}return e}function a(e,t,i,s,n,a,o=1){const l=r(n,a)
let c=i,h=i+l,u=0,d=0,f=0,_=0,p=0
for(let i=0,r=s-1;i<r;i++,c+=l,h+=l){const i=t[c],s=t[c+1],r=t[c+2],a=t[h],o=t[h+1],l=t[h+2]
let m=i*o-a*s
_+=m,u+=(i+a)*m,d+=(s+o)*m,n&&(m=i*l-a*r,f+=(r+l)*m,p+=m),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),n&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(_*o>0&&(_*=-1),p*o>0&&(p*=-1),!_)return null
const m=[u,d,.5*_]
return n&&(m[3]=f,m[4]=.5*p),m}function o(e,t,i,s,n){const a=r(s,n)
let o=t,d=t+a,f=0,_=0,p=0,m=0
for(let t=0,r=i-1;t<r;t++,o+=a,d+=a){const t=e[o],i=e[o+1],r=e[o+2],n=e[d],a=e[d+1],g=e[d+2],b=s?c(t,i,r,n,a,g):l(t,i,n,a)
if(b)if(f+=b,s){const e=u(t,i,r,n,a,g)
_+=b*e[0],p+=b*e[1],m+=b*e[2]}else{const e=h(t,i,n,a)
_+=b*e[0],p+=b*e[1]}}return f>0?s?[_/f,p/f,m/f]:[_/f,p/f]:i>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,s){const r=i-e,n=s-t
return Math.sqrt(r*r+n*n)}function c(e,t,i,s,r,n){const a=s-e,o=r-t,l=n-i
return Math.sqrt(a*a+o*o+l*l)}function h(e,t,i,s){return[e+.5*(i-e),t+.5*(s-t)]}function u(e,t,i,s,r,n){return[e+.5*(s-e),t+.5*(r-t),i+.5*(n-i)]}},1232:function(e,t,i){"use strict"
i.d(t,"a",(function(){return R})),i(77)
var s=i(20),r=i(1025),n=i(1344),a=i(1290),o=i(354),l=i(177),c=i(1123),h=i(1096),u=i(919),d=i(938),f=i(930),_=i(935),p=i(937),m=i(985),g=i(877)
const b=l.a.getLogger("esri.views.2d.engine.webgl.Mesh2D"),y=(e,t,i,s)=>{let r=0
for(let s=1;s<i;s++){const i=e[2*(t+s-1)],n=e[2*(t+s-1)+1]
r+=(e[2*(t+s)]-i)*(e[2*(t+s)+1]+n)}return s?r>0:r<0},x=({coords:e,lengths:t},i)=>{const s=[]
for(let r=0,n=0;r<t.length;n+=t[r],r+=1){const a=n,o=[]
for(;r<t.length-1&&y(e,n+t[r],t[r+1],i);r+=1,n+=t[r])o.push(n+t[r]-a)
const l=e.slice(2*a,2*(n+t[r])),c=Object(h.a)(l,o,2)
for(const e of c)s.push(e+a)}return s}
class v{constructor(e,t,i,s=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=i,this.isMapSpace=s}static fromRect({x:e,y:t,width:i,height:s}){const r=e,n=t,a=r+i,o=n+s
return v.fromScreenExtent({xmin:r,ymin:n,xmax:a,ymax:o})}static fromPath(e){const t=Object(f.f)(new _.a,e.path,!1,!1),i=t.coords,s=new Uint32Array(x(t,!0)),r=new Uint32Array(i.length/2)
for(let e=0;e<r.length;e++)r[e]=Object(p.a)(Math.floor(i[2*e]),Math.floor(i[2*e+1]))
return new v({geometry:r},s,g.r.TRIANGLES)}static fromGeometry(e,t){const i=t.geometry.type
switch(i){case"polygon":return v.fromPolygon(e,t.geometry)
case"extent":return v.fromMapExtent(e,t.geometry)
default:return b.error(new o.a("mapview-bad-type","Unable to create a mesh from type "+i,t)),v.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const i=Object(f.h)(new _.a,t,!1,!1),s=i.coords,r=new Uint32Array(x(i,!1)),n=new Uint32Array(s.length/2),a=Object(d.b)(),o=Object(d.b)()
for(let t=0;t<n.length;t++)Object(u.s)(a,s[2*t],s[2*t+1]),e.toScreen(o,a),n[t]=Object(p.a)(Math.floor(o[0]),Math.floor(o[1]))
return new v({geometry:n},r,g.r.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:i,ymax:s}){const r={geometry:new Uint32Array([Object(p.a)(e,i),Object(p.a)(t,i),Object(p.a)(e,s),Object(p.a)(e,s),Object(p.a)(t,i),Object(p.a)(t,s)])},n=new Uint32Array([0,1,2,3,4,5])
return new v(r,n,g.r.TRIANGLES)}static fromMapExtent(e,t){const[i,s]=e.toScreen([0,0],[t.xmin,t.ymin]),[r,n]=e.toScreen([0,0],[t.xmax,t.ymax]),a={geometry:new Uint32Array([Object(p.a)(i,s),Object(p.a)(r,s),Object(p.a)(i,n),Object(p.a)(i,n),Object(p.a)(r,s),Object(p.a)(r,n)])},o=new Uint32Array([0,1,2,3,4,5])
return new v(a,o,g.r.TRIANGLES)}destroy(){Object(s.k)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose()
for(const e in this._cache.vertexBuffers)Object(s.k)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return(e=>{switch(e.BYTES_PER_ELEMENT){case 1:return g.k.UNSIGNED_BYTE
case 2:return g.k.UNSIGNED_SHORT
case 4:return g.k.UNSIGNED_INT
default:throw new o.a("Cannot get DataType of array")}})(this.indices)}getIndexBuffer(e,t=g.D.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=m.a.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=g.D.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((i,s)=>({...i,[s]:m.a.createVertex(e,t,this.vertices[s])}),{})),this._cache.vertexBuffers}}var O=i(998)
const w=l.a.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),T=e=>parseFloat(e)/100
class E extends c.a{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=t.watch("version",()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new E(e,t)}_destroyGL(){Object(s.k)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(s.k)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,i,r){const[n,a]=t.size
if("geometry"!==this._clip.type&&this._lastWidth===n&&this._lastHeight===a||(this._lastWidth=n,this._lastHeight=a,this._destroyGL()),Object(s.j)(this._cache.vao)){const s=this._createMesh(t,this._clip),n=s.getIndexBuffer(e),a=s.getVertexBuffers(e)
this._cache.mesh=s,this._cache.vao=new O.a(e,i,r,a,n)}return this._cache.vao}_createTransforms(){return{dvs:Object(r.b)()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[i,s]=e.size,r="string"==typeof t.left?T(t.left)*i:t.left,n="string"==typeof t.right?T(t.right)*i:t.right,a="string"==typeof t.top?T(t.top)*s:t.top,o="string"==typeof t.bottom?T(t.bottom)*s:t.bottom,l=r,c=a
return{x:l,y:c,width:Math.max(i-n-l,0),height:Math.max(s-o-c,0)}}_createMesh(e,t){switch(t.type){case"rect":return v.fromRect(this._createScreenRect(e,t))
case"path":return v.fromPath(t)
case"geometry":return v.fromGeometry(e,t)
default:return w.error(new o.a("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),v.fromRect({x:0,y:0,width:1,height:1})}}}var S=i(908)
class R extends a.a{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}_createTransforms(){return{dvs:Object(r.b)()}}doRender(e){const t=this.createRenderParams(e),{painter:i,globalOpacity:s,profiler:r,drawPhase:n}=t,a=n===S.c.LABEL||n===S.c.HIGHLIGHT?1:s*this.computedOpacity
r.recordContainerStart(this.name),i.beforeRenderLayer(t,this._clippingInfos?255:0,a),this.updateTransforms(e.state),this.renderChildren(t),i.compositeLayer(t,a),r.recordContainerEnd()}renderChildren(e){Object(s.j)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter))
for(const t of this.children)t.beforeRender(e)
for(const t of this._renderPasses)try{t.render(e)}catch(e){}for(const t of this.children)t.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[n.a.clip],target:()=>this._clippingInfos,drawPhase:S.c.MAP|S.c.LABEL|S.c.LABEL_ALPHA|S.c.DEBUG|S.c.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(Object(s.k)(this._clippingInfos)&&(this._clippingInfos.forEach(e=>e.destroy()),this._clippingInfos=null),!this.stage)return
const e=this._clips
Object(s.k)(e)&&e.length&&(this._clippingInfos=e.items.map(e=>E.fromClipArea(this.stage,e))),this.requestRender()}}},1235:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var s=i(354),r=i(177),n=i(1110)
function a(e,t,i,s,n){const a=e.referencesGeometry()&&n?l(t,s,n):t,o=e.repurposeFeature(a)
try{return e.evaluate({...i,$feature:o})}catch(e){return r.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const o=new Map
function l(e,t,i){const{transform:a,hasZ:l,hasM:c}=i
o.has(t)||o.set(t,function(e){const t={}
switch(e){case"esriGeometryPoint":return(e,i,s,r)=>Object(n.e)(i,t,e,s,r)
case"esriGeometryPolygon":return(e,i,s,r)=>Object(n.f)(i,t,e,s,r)
case"esriGeometryPolyline":return(e,i,s,r)=>Object(n.g)(i,t,e,s,r)
case"esriGeometryMultipoint":return(e,i,s,r)=>Object(n.d)(i,t,e,s,r)
default:return r.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s.a("mapview-arcade","Unable to handle geometryType: "+e)),e=>e}}(t))
const h=o.get(t)(e.geometry,a,l,c)
return{...e,geometry:h}}},1237:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
class s{constructor(e,t){this._pos=0
const i=t?this._roundToNearest(t,e.BYTES_PER_ELEMENT):40
this._array=new ArrayBuffer(i),this._buffer=new e(this._array),this._ctor=e,this._i16View=new Int16Array(this._array)}get length(){return this._pos}_roundToNearest(e,t){const i=Math.round(e)
return i+(t-i%t)}_ensureSize(e){if(this._pos+e>=this._buffer.length){const t=this._roundToNearest(1.25*(this._array.byteLength+e*this._buffer.BYTES_PER_ELEMENT),this._buffer.BYTES_PER_ELEMENT),i=new ArrayBuffer(t),s=new this._ctor(i)
s.set(this._buffer,0),this._array=i,this._buffer=s,this._i16View=new Int16Array(this._array)}}ensureSize(e){this._ensureSize(e)}writeF32(e){this._ensureSize(1)
const t=this._pos
return new Float32Array(this._array,4*this._pos,1)[0]=e,this._pos++,t}push(e){this._ensureSize(1)
const t=this._pos
return this._buffer[this._pos++]=e,t}writeFixed(e){this._buffer[this._pos++]=e}setValue(e,t){this._buffer[e]=t}i1616Add(e,t,i){this._i16View[2*e]+=t,this._i16View[2*e+1]+=i}getValue(e){return this._buffer[e]}incr(e){if(this._buffer.length<e)throw new Error("Increment index overflows the target buffer")
this._buffer[e]++}decr(e){this._buffer[e]--}writeRegion(e){this._ensureSize(e.length)
const t=this._pos
return this._buffer.set(e,this._pos),this._pos+=e.length,t}writeManyFrom(e,t,i){this._ensureSize(i-t)
for(let s=t;s!==i;s++)this.writeFixed(e._buffer[s])}buffer(){const e=this._array.slice(0,4*this._pos)
return this.destroy(),e}toArray(){const e=this._array,t=[]
for(let i=0;i<e.byteLength/4;i++)t.push(e[i])
return t}seek(e){this._pos=e}destroy(){this._array=null,this._buffer=null}}},1259:function(e,t,i){"use strict"
function s(e){return e=e||globalThis.location.hostname,c.some(t=>{var i
return null!=(null==(i=e)?void 0:i.match(t))})}function r(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(o)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))
const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,o=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,o,l]},1277:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var s=i(978),r=i(1123),n=i(1059)
class a extends r.a{constructor(e,t,i,s,r,a=s,o=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.a(e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=a,this.rangeY=o}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),o=this.width/this.rangeX*i,l=this.height/this.rangeY*i
Object(s.o)(r,o,0,0,0,l,0,n,a,1),Object(s.l)(this.transforms.dvs,e.displayViewMat3,r)}}},1291:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return l}))
var s=i(897),r=i(77)
let n=null,a=null
async function o(){return n||(n=async function(){const e=Object(r.a)("esri-csp-restrictions")?await Promise.all([i.e(407),i.e(378)]).then(i.bind(null,1702)).then(e=>e.l):await i.e(318).then(i.bind(null,1703)).then(e=>e.l)
a=await e.load({locateFile:()=>Object(s.b)("esri/core/libs/libtess/libtess.wasm")})}()),n}function l(e,t){const i=Math.max(e.length,128e3)
return a.triangulate(e,t,i)}},1300:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
const s={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,i){const s=new r(e.getPointX(t),e.getPointY(t),i),n=e.hasZ(t),a=e.hasM(t)
return n&&(s.z=e.getPointZ(t)),a&&(s.m=e.getPointM(t)),s},exportPolygon:function(e,t,i){return new n(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,i){return new a(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,i){return new o(e.exportPoints(t),i,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,i){const s=e.hasZ(t),r=e.hasM(t),n=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),i)
if(s){const i=e.getZExtent(t)
n.zmin=i.vmin,n.zmax=i.vmax}if(r){const i=e.getMExtent(t)
n.mmin=i.vmin,n.mmax=i.vmax}return n}}
class r{constructor(e,t,i){this.x=e,this.y=t,this.spatialReference=i,this.z=void 0,this.m=void 0}}class n{constructor(e,t,i,s){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),s&&(this.hasM=s)}}class a{constructor(e,t,i,s){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),s&&(this.hasM=s)}}class o{constructor(e,t,i,s){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),s&&(this.hasM=s)}}class l{constructor(e,t,i,s,r){this.xmin=e,this.ymin=t,this.xmax=i,this.ymax=s,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},1301:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var s=i(869),r=i(1159),n=i(1602),a=i(1411)
class o{static executeEffects(e,t,i){const s=Object(r.c)(t)
let o=new n.a(s)
for(const t of e){const e=Object(a.a)(t)
e&&(o=e.execute(o,t,96/72,i))}return o}static next(e){const t=e.next()
return Object(r.d)(t),t}static applyEffects(e,t,i){if(!e)return t
let r=new n.a(t)
for(const t of e){const e=Object(a.a)(t)
e&&(r=e.execute(r,t,1,i))}let o,l=null
for(;o=r.next();)l?Object(s.h)(l)?Object(s.h)(o)&&l.paths.push(...o.paths):Object(s.g)(l)&&Object(s.g)(o)&&l.rings.push(...o.rings):l=o
return l}}},1302:function(e,t,i){"use strict"
i.d(t,"a",(function(){return W})),i.d(t,"b",(function(){return T}))
var s=i(873),r=i(178),n=i(177),a=i(20),o=i(876),l=i(355),c=i(907),h=i(1179),u=i(969),d=i(1424),f=i(1149),_=i(1301),p=i(1235),m=i(1433)
const g=n.a.getLogger("esri.symbols.cim.cimAnalyzer")
function b(e){switch(e){case"Butt":return u.d.BUTT
case"Square":return u.d.SQUARE
default:return u.d.ROUND}}function y(e){switch(e){case"Bevel":return u.o.BEVEL
case"Miter":return u.o.MITER
default:return u.o.ROUND}}function x(e){switch(e){case"Left":default:return"left"
case"Right":return"right"
case"Center":return"center"
case"Justify":return"justify"}}function v(e){switch(e){case"Top":default:return"top"
case"Center":return"middle"
case"Baseline":return"baseline"
case"Bottom":return"bottom"}}function O(e,t,i,s){let r
e[t]?r=e[t]:(r={},e[t]=r),r[i]=s}function w(e){const t=e.markerPlacement
return t&&t.angleToLine?u.a.MAP:u.a.SCREEN}async function T(e,t,i,s,r){const n=null!=s?s:[]
if(!e)return n
let a,o
const l={}
if("CIMSymbolReference"!==e.type)return g.error("Expect cim type to be 'CIMSymbolReference'"),n
if(a=e.symbol,o=e.primitiveOverrides,o){const e=[]
for(const i of o){const s=i.valueExpressionInfo
if(s&&t){const r=s.expression,n=Object(c.d)(r,t.spatialReference,t.fields).then(e=>{e&&O(l,i.primitiveName,i.propertyName,e)})
e.push(n)}else null!=i.value&&O(l,i.primitiveName,i.propertyName,i.value)}e.length>0&&await Promise.all(e)}const d=[]
switch(function e(t,i,s){if(t&&i)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const r=t.symbolLayers
if(!r)return
for(const t of r)switch(Y(t,i,s),t.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in t&&t.url&&s.push(i.fetchResource(t.url,null))
break
case"CIMVectorMarker":{const r=t.markerGraphics
if(!r)continue
for(const t of r)if(t){const r=t.symbol
r&&e(r,i,s)}}}}}}(a,i,d),d.length>0&&await Promise.all(d),a.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,i,s,r,n,a){if(!e)return
const o=e.symbolLayers
if(!o)return
const l=e.effects
let c
const d=h.b.getSize(e)
"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=u.a.MAP)
let f=o.length
for(;f--;){const u=o[f]
if(!u||!1===u.enable)continue
let _
l&&l.length&&(_=[...l])
const p=u.effects
p&&p.length&&(l?_.push(...p):_=[...p])
const m=[]
let b
h.c.findEffectOverrides(_,t,m),b=m.length>0?U(_,m,i,s):_
const y=[]
switch(h.c.findApplicableOverrides(u,t,y),u.type){case"CIMSolidFill":E(u,b,i,y,s,r)
break
case"CIMPictureFill":S(u,b,i,y,s,n,r)
break
case"CIMHatchFill":R(u,b,i,y,s,r)
break
case"CIMGradientFill":M(u,b,i,y,s,r)
break
case"CIMSolidStroke":F(u,b,i,y,s,r,"CIMPolygonSymbol"===e.type,d)
break
case"CIMPictureStroke":C(u,b,i,y,s,r,"CIMPolygonSymbol"===e.type,d)
break
case"CIMGradientStroke":j(u,b,i,y,s,r,"CIMPolygonSymbol"===e.type,d)
break
case"CIMCharacterMarker":if(A(u,b,i,y,s,r))break
break
case"CIMPictureMarker":if(A(u,b,i,y,s,r))break
"CIMLineSymbol"===e.type&&(c=w(u)),B(u,b,i,y,s,n,r,c,d)
break
case"CIMVectorMarker":if(A(u,b,i,y,s,r))break
"CIMLineSymbol"===e.type&&(c=w(u)),I(u,b,i,y,s,r,n,c,d,a)
break
default:g.error("Cannot analyze CIM layer",u.type)}}}(a,o,l,t,n,i,r)}return n}function E(e,t,i,s,r,n){const a=e.primitiveName,o=Object(f.e)(e.color),[c,h]=X(s,a,t,null),u=Object(l.b)(JSON.stringify(e)+h).toString()
n.push({type:"fill",templateHash:u,materialHash:c?()=>u:u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:k(a,i,"Color",r,o,N),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function S(e,t,i,s,r,n,o){const c=e.primitiveName,h=e.tintColor?Object(f.e)(e.tintColor):{r:255,g:255,b:255,a:1},[u,d]=X(s,c,t,null),_=Object(l.b)(JSON.stringify(e)+d).toString(),p=Object(l.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString()
let m=Object(f.f)(e.scaleX)
if("width"in e){const t=e.width
let i=1
const s=n.getResource(e.url)
Object(a.k)(s)&&(i=s.width/s.height),m/=i*(e.height/t)}o.push({type:"fill",templateHash:_,materialHash:u?()=>p:p,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:k(c,i,"TintColor",r,h,N),height:k(c,i,"Height",r,e.height),scaleX:k(c,i,"ScaleX",r,m),angle:k(c,i,"Rotation",r,Object(f.f)(e.rotation)),offsetX:k(c,i,"OffsetX",r,Object(f.f)(e.offsetX)),offsetY:k(c,i,"OffsetY",r,Object(f.f)(e.offsetY)),url:e.url})}function R(e,t,i,s,r,n){const a=["Rotation","OffsetX","OffsetY"],o=s.filter(t=>t.primitiveName!==e.primitiveName&&-1===a.indexOf(t.propertyName)),c=e.primitiveName,[h,u]=X(s,c,t,null),d=Object(l.b)(JSON.stringify(e)+u).toString(),_=Object(l.b)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString()
n.push({type:"fill",templateHash:d,materialHash:h?V(_,i,o,r):_,cim:e,materialOverrides:o,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:k(c,i,"Separation",r,e.separation),scaleX:1,angle:k(c,i,"Rotation",r,Object(f.f)(e.rotation)),offsetX:k(c,i,"OffsetX",r,Object(f.f)(e.offsetX)),offsetY:k(c,i,"OffsetY",r,Object(f.f)(e.offsetY))})}function M(e,t,i,s,r,n){const a=e.primitiveName,[o,c]=X(s,a,t,null),h=Object(l.b)(JSON.stringify(e)+c).toString()
n.push({type:"fill",templateHash:h,materialHash:o?V(h,i,s,r):h,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function F(e,t,i,s,r,n,a,o){const c=e.primitiveName,h=Object(f.e)(e.color),u=void 0!==e.width?e.width:4,d=b(e.capStyle),_=y(e.joinStyle),p=e.miterLimit,[m,g]=X(s,c,t,null),x=Object(l.b)(JSON.stringify(e)+g).toString()
let v,O
if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1]
if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop()
v=e.dashTemplate,O=e.scaleDash}}n.push({type:"line",templateHash:x,materialHash:m?()=>x:x,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:k(c,i,"Color",r,h,N),width:k(c,i,"Width",r,u),cap:k(c,i,"CapStyle",r,d),join:k(c,i,"JoinStyle",r,_),miterLimit:k(c,i,"MiterLimit",r,p),referenceWidth:o,zOrder:z(e.name),dashTemplate:v,scaleDash:O})}function C(e,t,i,s,r,n,a,o){const c=Object(l.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),h=e.primitiveName,u=Object(f.e)(e.tintColor),d=void 0!==e.width?e.width:4,_=b(e.capStyle),p=y(e.joinStyle),m=e.miterLimit,[g,x]=X(s,h,t,null),v=Object(l.b)(JSON.stringify(e)+x).toString()
n.push({type:"line",templateHash:v,materialHash:g?()=>c:c,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:k(h,i,"TintColor",r,u,N),width:k(h,i,"Width",r,d),cap:k(h,i,"CapStyle",r,_),join:k(h,i,"JoinStyle",r,p),miterLimit:k(h,i,"MiterLimit",r,m),referenceWidth:o,zOrder:z(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function j(e,t,i,s,r,n,a,o){const c=e.primitiveName,h=void 0!==e.width?e.width:4,u=b(e.capStyle),d=y(e.joinStyle),f=e.miterLimit,[_,p]=X(s,c,t,null),m=Object(l.b)(JSON.stringify(e)+p).toString()
n.push({type:"line",templateHash:m,materialHash:_?V(m,i,s,r):m,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:k(c,i,"Width",r,h),cap:k(c,i,"CapStyle",r,u),join:k(c,i,"JoinStyle",r,d),miterLimit:k(c,i,"MiterLimit",r,f),referenceWidth:o,zOrder:z(e.name),dashTemplate:null,scaleDash:!1})}function A(e,t,i,s,r,n){const a=e.markerPlacement
if(!a||"CIMMarkerPlacementInsidePolygon"!==a.type)return!1
const o=a,c=["Rotation","OffsetX","OffsetY"],h=s.filter(t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName)),u="url"in e?e.url:null,[d,_]=X(s,o.primitiveName,t,null),p=Object(l.b)(JSON.stringify(e)+_).toString()
let m=o.stepY,g=null,b=1
return a.shiftOddRows&&(m*=2,g=function(e){return e?2*e:0},b=.5),n.push({type:"fill",templateHash:p,materialHash:d?V(p,i,h,r):p,cim:e,materialOverrides:h,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:k(o.primitiveName,i,"StepY",r,m,g),scaleX:b,angle:k(o.primitiveName,i,"GridAngle",r,o.gridAngle),offsetX:k(o.primitiveName,i,"OffsetX",r,Object(f.f)(o.offsetX)),offsetY:k(o.primitiveName,i,"OffsetY",r,Object(f.f)(o.offsetY)),url:u}),!0}function B(e,t,i,s,r,n,o,c,h){var u
const d=e.primitiveName,_=Object(f.f)(e.size)
let p=Object(f.f)(e.scaleX)
const m=Object(f.f)(e.rotation),g=Object(f.f)(e.offsetX),b=Object(f.f)(e.offsetY),y=e.tintColor?Object(f.e)(e.tintColor):{r:255,g:255,b:255,a:1},x=Object(l.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),v=G(e.markerPlacement,s,i,r),[O,w]=X(s,d,t,v),T=Object(l.b)(JSON.stringify(e)+w).toString(),E=null!=(u=e.anchorPoint)?u:{x:0,y:0}
if("width"in e){const t=e.width
let i=1
const s=n.getResource(e.url)
Object(a.k)(s)&&(i=s.width/s.height),p/=i*(_/t)}o.push({type:"marker",templateHash:T,materialHash:O?()=>x:x,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:c,size:k(d,i,"Size",r,_),scaleX:k(d,i,"ScaleX",r,p),rotation:k(d,i,"Rotation",r,m),offsetX:k(d,i,"OffsetX",r,g),offsetY:k(d,i,"OffsetY",r,b),color:k(d,i,"TintColor",r,y,N),anchorPoint:{x:E.x,y:-E.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:h,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function I(e,t,i,s,r,n,a,o,l,c){const h=e.markerGraphics
if(!h)return
let u=0
if(e.scaleSymbolsProportionally){const t=e.frame
t&&(u=t.ymax-t.ymin)}const d=G(e.markerPlacement,s,i,r)
for(const f of h)if(f){const h=f.symbol
if(!h)continue
switch(h.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":D(e,t,d,f,s,i,r,n,a,o,l,u,c)
break
case"CIMTextSymbol":P(e,t,d,f,i,s,r,n,o,l,u)}}}function P(e,t,i,s,r,n,a,o,c,u,d){h.c.findApplicableOverrides(s,n,[])
const _=s.geometry
if(!("x"in _)||!("y"in _))return
const p=s.symbol,g=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(p),b=function(e){let t="",i=""
if(e){const s=e.toLowerCase();-1!==s.indexOf("italic")?t="italic":-1!==s.indexOf("oblique")&&(t="oblique"),-1!==s.indexOf("bold")?i="bold":-1!==s.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}(p.fontStyleName),y=Object(m.a)(p.fontFamilyName)
p.font={family:y,decoration:g,...b}
const O=e.frame,w=_.x-.5*(O.xmin+O.xmax),T=_.y-.5*(O.ymin+O.ymax),E=e.size/d,S=e.primitiveName,R=Object(f.f)(p.height)*E,M=Object(f.f)(p.angle),F=Object(f.f)(e.offsetX)+(Object(f.f)(p.offsetX)+w)*E,C=Object(f.f)(e.offsetY)+(Object(f.f)(p.offsetY)+T)*E,j=Object(f.e)(h.b.getFillColor(p))
let A=Object(f.e)(h.b.getStrokeColor(p)),B=h.b.getStrokeWidth(p)
B||(A=Object(f.e)(h.b.getFillColor(p.haloSymbol)),B=p.haloSize*E)
const[I,P]=X(n,S,t,i),D=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),L=Object(l.b)(JSON.stringify(s)+D+P).toString()
let z=k(s.primitiveName,r,"TextString",a,s.textString,f.a,p.textCase)
if(null==z)return
const{fontStyleName:N}=p,U=y+(N?"-"+N.toLowerCase():"-regular"),G=U
"string"==typeof z&&z.indexOf("[")>-1&&p.fieldMap&&(z=Object(f.c)(p.fieldMap,z,p.textCase)),o.push({type:"text",templateHash:L,materialHash:I||"function"==typeof z||z.match(/\[(.*?)\]/)?(e,t,i)=>G+"-"+Object(f.d)(z,e,t,i):G+"-"+Object(l.b)(z),cim:p,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:U,decoration:g,weight:k(S,r,"Weight",a,b.weight),style:k(S,r,"Size",a,b.style),size:k(S,r,"Size",a,R),angle:k(S,r,"Rotation",a,M),offsetX:k(S,r,"OffsetX",a,F),offsetY:k(S,r,"OffsetY",a,C),horizontalAlignment:x(p.horizontalAlignment),verticalAlignment:v(p.verticalAlignment),text:z,color:j,outlineColor:A,outlineSize:B,referenceSize:u,sizeRatio:1,markerPlacement:i})}function D(e,t,i,s,r,n,o,c,u,p,m,g,b){const y=s.symbol,x=y.symbolLayers
if(!x)return
if(b)return void L(e,t,i,s,n,r,o,c,u,p,m,g)
let v=x.length
if(H(x))return void function(e,t,i,s,r,n,a,o,c,u,_,p){const m=s.geometry,g=r[0],b=r[1],y=Object(d.b)(m)
if(!y)return
const[x,v,O]=Object(d.d)(y,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),w={type:"sdf",geom:m,asFill:!0},T=e.primitiveName,E=Object(f.f)(e.size),S=Object(f.f)(e.rotation),R=Object(f.f)(e.offsetX),M=Object(f.f)(e.offsetY),F=b.path,C=b.primitiveName,j=g.primitiveName,A=Object(f.e)(h.b.getFillColor(b)),B=Object(f.e)(h.b.getStrokeColor(g)),I=h.b.getStrokeWidth(g)
let P=!1,D=""
for(const e of n)e.primitiveName!==C&&e.primitiveName!==j&&e.primitiveName!==T||(void 0!==e.value?D+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(P=!0))
const L=JSON.stringify({...e,markerGraphics:null}),z=Object(l.b)(JSON.stringify(w)+F).toString(),U={type:"marker",templateHash:Object(l.b)(JSON.stringify(s)+JSON.stringify(b)+JSON.stringify(g)+L+D).toString(),materialHash:P?()=>z:z,cim:w,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:v,y:O},isAbsoluteAnchorPoint:!1,size:k(e.primitiveName,a,"Size",o,E),rotation:k(e.primitiveName,a,"Rotation",o,S),offsetX:k(e.primitiveName,a,"OffsetX",o,R),offsetY:k(e.primitiveName,a,"OffsetY",o,M),scaleX:1,frameHeight:p,rotateClockwise:e.rotateClockwise,referenceSize:_,sizeRatio:x,color:k(C,a,"Color",o,A,N),outlineColor:k(j,a,"Color",o,B,N),outlineWidth:k(j,a,"Width",o,I),markerPlacement:i,path:F}
c.push(U)}(e,t,i,s,x,r,n,o,c,p,m,g)
const O=_.a.applyEffects(y.effects,s.geometry,u.geometryEngine)
if(O)for(;v--;){const b=x[v]
if(b&&!1!==b.enable)switch(b.type){case"CIMSolidFill":case"CIMSolidStroke":{var w
const y=_.a.applyEffects(b.effects,O,u.geometryEngine),x=Object(d.b)(y)
if(!x)continue
const[v,T,E]=Object(d.d)(x,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),S="CIMSolidFill"===b.type,R={type:"sdf",geom:y,asFill:S},M=e.primitiveName,F=null!=(w=Object(f.f)(e.size))?w:10,C=Object(f.f)(e.rotation),j=Object(f.f)(e.offsetX),A=Object(f.f)(e.offsetY),B=b.path,I=b.primitiveName,P=Object(f.e)(S?h.b.getFillColor(b):h.b.getStrokeColor(b)),D=S?{r:0,g:0,b:0,a:0}:Object(f.e)(h.b.getStrokeColor(b)),L=h.b.getStrokeWidth(b)
if(!S&&!L)break
let z=!1,U=""
for(const e of r)e.primitiveName!==I&&e.primitiveName!==M||(void 0!==e.value?U+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(z=!0))
Object(a.k)(t)&&"function"==typeof t&&(z=!0)
const G=JSON.stringify({...e,markerGraphics:null}),V=Object(l.b)(JSON.stringify(R)+B).toString(),W={type:"marker",templateHash:Object(l.b)(JSON.stringify(s)+JSON.stringify(b)+G+U).toString(),materialHash:z?()=>V:V,cim:R,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:T,y:E},isAbsoluteAnchorPoint:!1,size:k(e.primitiveName,n,"Size",o,F),rotation:k(e.primitiveName,n,"Rotation",o,C),offsetX:k(e.primitiveName,n,"OffsetX",o,j),offsetY:k(e.primitiveName,n,"OffsetY",o,A),scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:m,sizeRatio:v,color:k(I,n,"Color",o,P,N),outlineColor:k(I,n,"Color",o,D,N),outlineWidth:k(I,n,"Width",o,L),markerPlacement:i,path:B}
c.push(W)
break}default:L(e,t,i,s,n,r,o,c,u,p,m,g)}}}function L(e,t,i,s,r,n,c,u,d,_,p,m){const g=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,s)
let b=[]
const y=["Rotation","OffsetX","OffsetY"]
b=n.filter(t=>t.primitiveName!==e.primitiveName||-1===y.indexOf(t.propertyName))
let x=""
for(const e of n)void 0!==e.value&&(x+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`)
const[v,O,w]=h.b.getTextureAnchor(g,d),T=e.primitiveName,E=Object(f.f)(e.rotation),S=Object(f.f)(e.offsetX),R=Object(f.f)(e.offsetY),M=Object(l.b)(JSON.stringify(g)+x).toString(),F={type:"marker",templateHash:M,materialHash:b.length>0||Object(a.k)(t)&&"function"==typeof t?V(M,r,b,c):M,cim:g,materialOverrides:b,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:_,anchorPoint:{x:v,y:O},isAbsoluteAnchorPoint:!1,size:e.size,rotation:k(T,r,"Rotation",c,E),offsetX:k(T,r,"OffsetX",c,S),offsetY:k(T,r,"OffsetY",c,R),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:w/Object(o.h)(e.size),markerPlacement:i}
u.push(F)}function z(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10)
if(!isNaN(t))return t}return 0}function N(e){if(!e||0===e.length)return null
const t=new s.a(e).toRgba()
return{r:t[0],g:t[1],b:t[2],a:t[3]}}function k(e,t,i,s,r,n,a){const o=t[e]
if(o){const e=o[i]
if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,a):e
if(null!=e&&e instanceof c.a)return(t,i,o)=>{let l=Object(p.a)(e,t,{$view:o},s.geometryType,i)
return null!==l&&n&&(l=n.call(null,l,a)),null!==l?l:r}}return r}function U(e,t,i,s){for(const e of t)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof c.a&&(e.fn=(e,i,r)=>Object(p.a)(t,e,{$view:r},s.geometryType,i))}const n=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e
return(i,s,a)=>{for(const e of t)e.fn&&(e.value=e.fn(i,s,a))
const o=[]
for(let i of e){var l
const e=null==(l=i)?void 0:l.primitiveName
if(e){let s=!1
for(const a of t)if(a.primitiveName===e){const e=n(a.propertyName)
null!=a.value&&a.value!==i[e]&&(s||(i=Object(r.a)(i),s=!0),i[e]=a.value)}}o.push(i)}return o}}function G(e,t,i,s){const n=[]
if(h.c.findApplicableOverrides(e,t,n),0===n.length)return e
for(const e of n)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof c.a&&(e.fn=(e,i,r)=>Object(p.a)(t,e,{$view:r},s.geometryType,i))}const a=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e
return(t,i,s)=>{for(const e of n)e.fn&&(e.value=e.fn(t,i,s))
const o=Object(r.a)(e),l=e.primitiveName
for(const e of n)if(e.primitiveName===l){const t=a(e.propertyName)
null!=e.value&&e.value!==o[t]&&(o[t]=e.value)}return o}}function V(e,t,i,s){for(const e of i)if(e.valueExpressionInfo){const i=t[e.primitiveName]&&t[e.primitiveName][e.propertyName]
i instanceof c.a&&(e.fn=(e,t,r)=>Object(p.a)(i,e,{$view:r},s.geometryType,t))}return(t,s,r)=>{for(const e of i)e.fn&&(e.value=e.fn(t,s,r))
return Object(l.b)(e+h.c.buildOverrideKey(i)).toString()}}function W(e,t){if(!t||0===t.length)return e
const i=JSON.parse(JSON.stringify(e))
return h.c.applyOverrides(i,t),i}function X(e,t,i,s){let r=!1,n=""
for(const i of e)i.primitiveName===t&&(void 0!==i.value?n+=`-${i.primitiveName}-${i.propertyName}-${JSON.stringify(i.value)}`:i.valueExpressionInfo&&(r=!0))
return Object(a.k)(i)&&"function"==typeof i&&(r=!0),Object(a.k)(s)&&"function"==typeof s&&(r=!0),[r,n]}const H=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects
let q
function Y(e,t,i){e.effects&&!Object(a.k)(t.geometryEngine)&&(q?i.push(q):Object(f.l)(e.effects)&&(q=Object(f.g)(),i.push(q),q.then(e=>t.geometryEngine=e)))}},1303:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l}))
var s=i(354),r=i(177),n=i(908),a=i(942)
const o=r.a.getLogger("esri.views.2d.engine.webgl")
function l(e){return Object(a.u)(e.minDataValue)&&Object(a.u)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?n.e.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?n.e.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?n.e.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?n.e.SIZE_UNIT_VALUE:(o.error(new s.a("mapview-bad-type","Found invalid size VisualVariable",e)),n.e.NONE)}},1304:function(e,t,i){"use strict"
i.d(t,"a",(function(){return E})),i(870)
var s,r,n,a=i(77),o=i(20),l=i(1228),c=i(930),h=i(935),u=i(1312),d=i(869)
let f=0
const _=null!=(s=Object(a.a)("featurelayer-simplify-thresholds"))?s:[.5,.5,.5,.5],p=_[0],m=_[1],g=_[2],b=_[3],y=null!=(r=Object(a.a)("featurelayer-simplify-payload-size-factors"))?r:[1,2,4],x=y[0],v=y[1],O=y[2],w=null!=(n=Object(a.a)("featurelayer-simplify-mobile-factor"))?n:2,T=Object(a.a)("esri-mobile")
class E{constructor(e,t){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=e,this._layerSchema=t}static createInstance(){return f++,f=f>65535?0:f,f}get isEmpty(){return Object(o.k)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e}getAreaSimplificationThreshold(e,t){let i=1
const s=T?w:1
t>4e6?i=O*s:t>1e6?i=v*s:t>5e5?i=x*s:t>1e5&&(i=s)
let r=0
e>4e3?r=b*i:e>2e3?r=g*i:e>100?r=m:e>15&&(r=p)
let n=8
return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),r*n}setArcadeSpatialReference(e){this._arcadeSpatialReference=e}attachStorage(e){this._storage=e}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,i,s){const r=this.copy()
return r._tx+=e,r._ty+=t,r._sx*=i,r._sy*=s,r}readAttribute(e,t=!1){const i=this._readAttribute(e,t)
if(void 0!==i)return i
for(const i of this._joined){i.setIndex(this.getIndex())
const s=i._readAttribute(e,t)
if(void 0!==s)return s}}readAttributes(){const e=this._readAttributes()
for(const t of this._joined){t.setIndex(this.getIndex())
const i=t._readAttributes()
for(const t of Object.keys(i))e[t]=i[t]}return e}joinAttributes(e){this._joined.push(e)}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=Object(c.l)(e,this.geometryType,this.hasZ,this.hasM),i=Object(d.a)(t)
return i&&(i.spatialReference=this._arcadeSpatialReference),i}field(e){if(this.hasField(e))return this.readAttribute(e,!0)
for(const t of this._joined)if(t.setIndex(this.getIndex()),t.hasField(e))return t._readAttribute(e,!0)
throw new Error(`Field ${e} does not exist`)}setField(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){return JSON.stringify(this.readLegacyFeature())}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(e=null){return{attributes:this._readAttributes(),geometry:!0===(null==e?void 0:e.keepGeometryType)?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(e=null,t=null){return Promise.resolve(this.castAsJson(t))}removeIds(e){if(Object(o.j)(this._objectIdToIndex)){const e=new Map,t=this.getCursor()
for(;t.next();)e.set(t.getObjectId(),t.getIndex())
this._objectIdToIndex=e}const t=this._objectIdToIndex
for(const i of e)t.has(i)&&this.removeAtIndex(t.get(i))}removeAtIndex(e){Object(o.j)(this._deleted)&&(this._deleted=u.a.create(this.getSize())),this._deleted.set(e)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor()
for(;e.next();)yield e.readOptimizedFeature()}_getExists(){return Object(o.j)(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null
const e=this.readUnquantizedGeometry()
if(!e||e.hasIndeterminateRingOrder)return null
const t=Object(o.u)(this.getQuantizationTransform(),null)
return Object(l.a)(new h.a,e,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex}}},1310:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))
const s=(e,t)=>e&&((...e)=>t.warn("DEBUG:",...e))||(()=>null),r=!1},1311:function(e,t,i){"use strict"
function s(e){const t=new Array(e.length)
for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)
return t}i.d(t,"a",(function(){return s}))},1312:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
class s{constructor(e,t){this._mask=0,this._buf=e,this._mask=t}static fromBuffer(e,t){return new s(e,t)}static create(e,t=4294967295){const i=new Uint32Array(Math.ceil(e/32))
return new s(i,t)}_getIndex(e){return Math.floor(e/32)}has(e){const t=this._mask&e
return!!(this._buf[this._getIndex(t)]&1<<t%32)}hasRange(e,t){let i=e,s=t
for(;i%32&&i!==s;){if(this.has(i))return!0
i++}for(;s%32&&i!==s;){if(this.has(i))return!0
s--}if(i===s)return!1
for(let e=i/32;e!==s/32;e++)if(this._buf[e])return!0
return!1}set(e){const t=this._mask&e,i=this._getIndex(t),s=1<<t%32
this._buf[i]|=s}setRange(e,t){let i=e,s=t
for(;i%32&&i!==s;)this.set(i++)
for(;s%32&&i!==s;)this.set(s--)
if(i!==s)for(let e=i/32;e!==s/32;e++)this._buf[e]=4294967295}unset(e){const t=this._mask&e,i=this._getIndex(t),s=1<<t%32
this._buf[i]&=4294967295^s}resize(e){const t=this._buf,i=new Uint32Array(Math.ceil(e/32))
i.set(t),this._buf=i}or(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=e._buf[t]
return this}and(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=e._buf[t]
return this}xor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=e._buf[t]
return this}ior(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=~e._buf[t]
return this}iand(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=~e._buf[t]
return this}ixor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=~e._buf[t]
return this}any(){for(let e=0;e<this._buf.length;e++)if(this._buf[e])return!0
return!1}copy(e){for(let t=0;t<this._buf.length;t++)this._buf[t]=e._buf[t]
return this}clone(){return new s(this._buf.slice(),this._mask)}clear(){for(let e=0;e<this._buf.length;e++)this._buf[e]=0}forEachSet(e){for(let t=0;t<this._buf.length;t++){let i=this._buf[t],s=32*t
if(i)for(;i;)1&i&&e(s),i>>>=1,s++}}countSet(){let e=0
return this.forEachSet(t=>{e++}),e}}},1322:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return a}))
const s=!0,r=32,n=1.5,a=200},1324:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var s=i(1251),r=i(876),n=i(969),a=i(1152),o=i(1e3),l=i(891),c=i(937),h=i(939),u=i(1013),d=i(1325),f=i(1119)
class _ extends(Object(d.a)(f.a)){constructor(e,t,i,s,o,u,d,f,_,p,m,g,b,y,x,v,O,w,T=!1,E,S){super(),this._xOffset=Object(r.h)(b),this._yOffset=Object(r.h)(y),this._decoration=p||"none",this._color=o,this._haloColor=u,this._haloSize=Math.min(Math.floor(5*Object(r.h)(Object(r.k)(i))),127),this._size=Math.min(Math.round(Object(r.h)(t)),127)
const R=Math.min(Math.round(Object(r.h)(s||t)),127)
this._referenceSize=Math.round(Math.sqrt(256*R)),this._scale=this._size/l.r,this._angle=g,this._justify=Object(a.d)(d||"center"),this._xAlignD=Object(a.e)(d||"center"),this._yAlignD=Object(a.g)(f||"baseline"),this._baseline="baseline"===(f||"baseline"),this._bitset=(_===n.a.MAP?1:0)|(m?1:0)<<1
const M=h.e.load(e)
M.sdf=!0,this._materialKey=M.data,this._lineWidth=Object(r.h)(x)||512,this._lineHeight=v||1,this._textPlacement=O,this._effects=w,this._isCIM=T,this._minMaxZoom=Object(c.a)(Math.round(E*l.w),Math.round(S*l.w))}static fromText(e,t){const i=new _(e.materialKey,e.font.size,e.haloSize||0,e.font.size,e.color&&Object(o.d)(e.color)||0,e.haloColor&&Object(o.d)(e.haloColor)||0,e.horizontalAlignment,e.verticalAlignment,n.a.SCREEN,e.font.decoration,!1,e.angle||0,e.xoffset,e.yoffset,e.lineWidth,e.lineHeight,null,null,!1,u.b,u.a),[,r]=Object(s.a)(e.text)
return i.bindTextInfo(t,r),i._vertexBoundsScale=e.maxVVSize?e.maxVVSize/e.font.size:1,i}static fromCIMText(e,t,i){const r=e.scaleFactor||1,n=e.size*e.sizeRatio*r,[a,l]=Object(u.e)(e.scaleInfo,i),c=new _(e.materialKey,n,e.outlineSize*e.sizeRatio,e.referenceSize,Object(o.c)(e.color),Object(o.c)(e.outlineColor),e.horizontalAlignment,e.verticalAlignment,e.alignment,e.decoration,e.colorLocked,e.angle,e.offsetX*e.sizeRatio*r,e.offsetY*e.sizeRatio*r,512,1,e.markerPlacement,e.effects,!0,a,l),[,h]=Object(s.a)(e.text)
return c.bindTextInfo(t,h),c._vertexBoundsScale=e.maxVVSize?e.maxVVSize/n:1,c}}},1325:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d}))
var s=i(20),r=i(876),n=i(930),a=i(1326),o=i(891),l=i(908),c=i(937),h=i(939),u=i(1395)
const d=e=>class extends e{constructor(...e){super(...e),this._isCIM=!1,this._vertexBoundsScale=1,this.geometryType=l.d.TEXT,this._aux=Object(c.b)(0,0,this._referenceSize,this._bitset)}bindTextInfo(e,t){e&&e.length?this._shapingInfo=Object(s.b)(e,e=>Object(u.a)(e,t,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:o.u*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM})):this._shapingInfo=null}_write(e,t,i,s){const r=t.getDisplayId()
this._writeGeometry(e,t,r,i,s)}_writeGeometry(e,t,i,r,a){const o=this._shapingInfo
if(Object(s.j)(o))return
if(Object(s.k)(this._textPlacement)){const s=null!=a?a:t.readLegacyGeometryForDisplay()
return this._writePlacedText(e,i,s,o,r)}const l=a?Object(n.q)(Object(n.d)(a),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(s.j)(l)){if(l.isPoint){const[t,s]=l.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||s<0||s>=512))return
return this._writeGlyphs(e,i,{x:t,y:s},o)}l.forEachVertex((t,s)=>this._writeGlyphs(e,i,{x:t,y:s},o))}}_writePlacedText(e,t,i,n,o){const l=Object(s.t)(this._textPlacement),c=a.a.getPlacement(i,l,Object(r.h)(1),o.geometryEngine)
if(!c)return
let h=c.next()
for(;null!=h;){const i=-h.getAngle()
n.setRotation(i)
const s=h.tx,r=-h.ty
s<0||s>=512||r<0||r>=512||(this._writeGlyphs(e,t,{x:s,y:r},n),n.setRotation(-i)),h=c.next()}}_writeGlyphs(e,t,i,s){const r=h.e.load(this._materialKey),n=Object(c.a)(Math.round(8*i.x),Math.round(8*i.y)),a=this._vertexBoundsScale,o=s.bounds,l=2*Math.max(o.width,o.height)
for(const c of s.glyphs)r.textureBinding=c.textureBinding,e.recordStart(t,r.data,this.geometryType,!0),e.vertexBounds(i.x+o.x+this._xOffset,i.y+o.y-this._yOffset,l*a,l*a),this._writeVertices(e,t,n,c),e.recordEnd()}_writeGlyph(e,t,i,s,r){const n=h.e.load(this._materialKey),a=Object(c.a)(Math.round(8*i),Math.round(8*s))
n.textureBinding=r.textureBinding,e.recordStart(t,n.data,this.geometryType,!0)
const o=r.bounds,l=this._vertexBoundsScale
e.vertexBounds(i+o.x*l,s+o.y*l,o.width*l,o.height*l),this._writeVertices(e,t,a,r),e.recordEnd()}_writeVertices(e,t,i,s){const r=e.vertexCount()
this._writeVertexCommon(e,t,i,s),e.vertexWrite(s.offsets.upperLeft),e.vertexWrite(s.texcoords.upperLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,s),e.vertexWrite(s.offsets.upperRight),e.vertexWrite(s.texcoords.upperRight),e.vertexEnd(),this._writeVertexCommon(e,t,i,s),e.vertexWrite(s.offsets.lowerLeft),e.vertexWrite(s.texcoords.lowerLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,s),e.vertexWrite(s.offsets.lowerRight),e.vertexWrite(s.texcoords.lowerRight),e.vertexEnd(),e.indexWrite(r+0),e.indexWrite(r+1),e.indexWrite(r+2),e.indexWrite(r+1),e.indexWrite(r+3),e.indexWrite(r+2)}_writeVertexCommon(e,t,i,s){const r=this._color,n=this._haloColor,a=Object(c.b)(0,0,this._referenceSize,this._bitset),o=Object(c.b)(0,0,this._size,this._haloSize)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(r),e.vertexWrite(n),e.vertexWrite(o),e.vertexWrite(a),e.vertexWrite(this._minMaxZoom)}}},1326:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var s=i(1159),r=i(1411)
class n{static getPlacement(e,t,i,n){const a=Object(r.b)(t)
if(!a)return null
const o=Object(s.c)(e)
return a.execute(o,t,i,n)}}},1327:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var s=i(20),r=i(876),n=i(1144),a=i(1042),o=i(969),l=i(1e3),c=i(891),h=i(937),u=i(939),d=i(1013),f=i(1328),_=i(1119)
class p extends(Object(f.a)(_.a)){constructor(e,t,i,s,r,l,d,f,_,p,m,g,b,y,x,v,O,w,T,E,S,R,M){super(),this.angle=s,this.height=d,this.width=l,this.xOffset=t*T,this.yOffset=i*T,this._markerPlacement=E,this._effects=S,this._anchorX=.5-(.5+v)*x.width/x.width,this._anchorY=.5-(.5+O)*x.height/x.height,this._minMaxZoom=Object(h.a)(Math.round(R*c.w),Math.round(M*c.w))
const F=(y===o.a.MAP?c.i:c.j)|(m?c.g:0)|(b?c.k:0)|(g?c.l:0),C=x&&x.sdf,j=u.d.load(e)
j.sdf=C,j.pattern=!0,j.textureBinding=x.textureBinding,this._materialKey=j.data,this._fillColor=r,this._outlineColor=_,this._sizeOutlineWidth=Object(h.b)(Math.round(Math.min(Math.sqrt(128*l),255)),Math.round(Math.min(Math.sqrt(128*d),255)),Math.round(Math.min(Math.sqrt(128*p),255)),Math.round(Math.min(Math.sqrt(128*f),255)))
const A=x.rect.x+c.A,B=x.rect.y+c.A,I=A+x.width,P=B+x.height
this._offsets.xUpperLeft=A,this._offsets.yUpperLeft=B,this._offsets.xUpperRight=I,this._offsets.yUpperRight=B,this._offsets.xBottomLeft=A,this._offsets.yBottomLeft=P,this._offsets.xBottomRight=I,this._offsets.yBottomRight=P,this._texUpperLeft=Object(h.a)(A,B),this._texUpperRight=Object(h.a)(I,B),this._texBottomLeft=Object(h.a)(A,P),this._texBottomRight=Object(h.a)(I,P),l*=w,d*=w,l*=T,d*=T
const D=Math.round(64*w)
this._bitestAndDistRatio=Object(h.a)(F,D),this._computedWidth=l,this._computedHeight=d
const L=Object(a.a)(),z=Object(n.a)()
this._applyTransformation(z,L)}static fromCIMMarker(e,t,i){const n=t&&t.width||1,a=t&&t.height||1,c=e.size,h=n/a*e.scaleX,u=e.scaleSymbolsProportionally&&e.frameHeight?c/e.frameHeight:1
let f=Object(l.c)(e.color)
const _=Object(l.c)(e.outlineColor),m=Object(r.h)(c),g=m*h,b=Object(r.h)(e.offsetX||0),y=Object(r.h)(e.offsetY||0),x=Object(r.h)(e.outlineWidth||0)*u,v=e.alignment||o.a.SCREEN,O=Object(r.h)(e.referenceSize),[w,T]=Object(d.e)(e.scaleInfo,i)
t.sdf||0!==f||(f=-1)
let E=e.rotation||0
e.rotateClockwise||(E=-E)
let S=0,R=0
const M=e.anchorPoint
M&&(e.isAbsoluteAnchorPoint?c&&(S=-M.x/(c*h),R=M.y/c):(S=M.x,R=M.y))
const F=new p(e.materialKey,b,y,E,f,g,m,O,_,x,e.colorLocked,e.scaleSymbolsProportionally,!1,v,t,S,R,e.sizeRatio,Object(s.u)(e.scaleFactor,1),e.markerPlacement,e.effects,w,T)
return F._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/g:1,F._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/m:1,F}static fromPictureMarker(e,t){const i=Math.round(Object(r.h)(e.width)),s=Math.round(Object(r.h)(e.height)),n=c.z,a=Math.round(Object(r.h)(e.xoffset||0)),l=Math.round(Object(r.h)(e.yoffset||0)),h=new p(e.materialKey,a,l,e.angle,n,i,s,s,0,0,!1,!1,!1,o.a.SCREEN,t,0,0,1,1,null,null,d.b,d.a)
return h._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.width:1,h._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.height:1,h}static fromSimpleMarker(e,t){const i=Object(l.d)(e.color),s=Math.round(Object(r.h)(e.size)),n=s,a=Math.round(Object(r.h)(e.xoffset||0)),c=Math.round(Object(r.h)(e.yoffset||0)),h=e.style,u=e.outline,f=0|(u&&u.color&&Object(l.d)(u.color)),_=0|(u&&u.width&&Math.round(Object(r.h)(u.width))),m=new p(e.materialKey,a,c,e.angle,i,s,n,n,f,_,!1,!1,"esriSMSCross"===h||"esriSMSX"===h,o.a.SCREEN,t,0,0,126/64,1,null,null,d.b,d.a)
return m.boundsType="esriSMSCircle"===h?"circle":"square",m._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.size:1,m._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.size:1,m}static fromLineSymbolMarker(e,t){const i=Object(l.d)(e.color),s=Math.round(Object(r.h)(6*e.lineWidth)),n=s,a="cross"===e.style||"x"===e.style
let c
switch(e.placement){case"begin-end":c=o.e.Both
break
case"begin":c=o.e.JustBegin
break
case"end":c=o.e.JustEnd
break
default:c=o.e.None}const h={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:c,offsetAlongLine:0},u=new p(e.materialKey,0,0,0,i,s,n,n/6,i,a?Math.round(Object(r.h)(e.lineWidth)):0,!1,!1,a,o.a.MAP,t,0,0,126/64,1,h,null,d.b,d.a)
return u.boundsType="circle"===e.style?"circle":"square",u}}},1328:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _}))
var s=i(20),r=i(876),n=i(1147),a=i(1144),o=i(919),l=i(1042),c=i(930),h=i(1326),u=i(908),d=i(937)
const f=3.14159265359/180,_=e=>class extends e{constructor(...e){super(...e),this.angle=0,this.xOffset=0,this.yOffset=0,this.width=0,this.height=0,this.boundsType="square",this._anchorX=0,this._anchorY=0,this._computedWidth=0,this._computedHeight=0,this._vertexBoundsScaleX=1,this._vertexBoundsScaleY=1,this._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0},this.geometryType=u.d.MARKER}_write(e,t,i,s){const r=t.getDisplayId()
e.recordStart(r,this._materialKey,this.geometryType,!0),this._writeGeometry(e,t,r,i,s),e.recordEnd()}_writeGeometry(e,t,i,r,n){if(Object(s.k)(this._markerPlacement))return this._writePlacedMarkers(e,t,r,n)
if(!n&&"esriGeometryPoint"===t.geometryType){const s=t.getX(),r=t.getY()
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(s<0||s>=513||r<0||r>=513))return
return this._writeVertices(e,i,this._getPos(s,r),s,r)}const a=n?Object(c.q)(Object(c.d)(n),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(s.j)(a)){if(a.isPoint){const[t,s]=a.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||s<0||s>=512))return
return this._writeVertices(e,i,this._getPos(t,s),t,s)}a.forEachVertex((t,s)=>this._writeVertices(e,i,this._getPos(t,s),t,s))}}_writePlacedMarkers(e,t,i,n){const o=null!=n?n:t.readLegacyGeometryForDisplay(),c=h.a.getPlacement(o,Object(s.t)(this._markerPlacement),Object(r.h)(1),i.geometryEngine)
if(!c)return
const u=t.getDisplayId(),d=Object(l.a)(),_=Object(a.a)()
let p=c.next()
for(;null!=p;){const t=p.tx,i=-p.ty
t>=-128&&t<=640&&i>=-128&&i<=640&&(this._applyTransformation(_,d,-p.getAngle()/f),this._writeVertices(e,u,this._getPos(t,i),t,i)),p=c.next()}}_writeVertices(e,t,i,s,r){const n=e.vertexCount()
if(this.angle){const t=Math.max(this._computedWidth*this._vertexBoundsScaleX,this._computedHeight*this._vertexBoundsScaleY)
e.vertexBounds(s+this.xOffset,r-this.yOffset,t,t)}else e.vertexBounds(s+this.xOffset,r-this.yOffset,this._computedWidth*this._vertexBoundsScaleX,this._computedHeight*this._vertexBoundsScaleY)
e.vertexWrite(i),e.vertexWrite(this._offsetUpperLeft),e.vertexWrite(this._texUpperLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetUpperRight),e.vertexWrite(this._texUpperRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomLeft),e.vertexWrite(this._texBottomLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomRight),e.vertexWrite(this._texBottomRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.indexWrite(n+0),e.indexWrite(n+1),e.indexWrite(n+2),e.indexWrite(n+1),e.indexWrite(n+3),e.indexWrite(n+2)}_applyTransformation(e,t,i=0){Object(n.a)(e,Object(l.b)(this.xOffset,-this.yOffset)),this.angle+i!==0&&Object(n.g)(e,e,f*(this.angle+i))
const s=this._computedWidth,r=this._computedHeight,a=(this._anchorX-.5)*s,c=(this._anchorY-.5)*r
Object(o.s)(t,a,c),Object(o.t)(t,t,e),this._offsetUpperLeft=Object(d.a)(16*t[0],16*t[1]),this._offsets.xUpperLeft=t[0],this._offsets.yUpperLeft=t[1],Object(o.s)(t,a+s,c),Object(o.t)(t,t,e),this._offsetUpperRight=Object(d.a)(16*t[0],16*t[1]),this._offsets.xUpperRight=t[0],this._offsets.yUpperRight=t[1],Object(o.s)(t,a,c+r),Object(o.t)(t,t,e),this._offsetBottomLeft=Object(d.a)(16*t[0],16*t[1]),this._offsets.xBottomLeft=t[0],this._offsets.yBottomLeft=t[1],Object(o.s)(t,a+s,c+r),Object(o.t)(t,t,e),this._offsetBottomRight=Object(d.a)(16*t[0],16*t[1]),this._offsets.xBottomRight=t[0],this._offsets.yBottomRight=t[1]}_getPos(e,t){return Object(d.a)(Math.round(8*e),Math.round(8*t))}}},1330:function(e,t,i){"use strict"
i.d(t,"a",(function(){return Le})),i.d(t,"b",(function(){return De}))
var s=i(354),r=i(177),n=i(861),a=i(1068),o=i(908),l=i(939),c=i(20),h=i(876),u=i(1e3),d=i(891),f=i(1236),_=i(937),p=i(1013),m=i(930),g=(i(1096),i(1291)),b=i(935),y=i(1203),x=i(1444)
function v(e,t,i,s,r,n,a){W=0
const o=(s-i)*n,l=r&&r.length,c=l?(r[0]-i)*n:o
let h,u,d,f,_,p=O(t,i,s,0,c,n,!0)
if(p&&p.next!==p.prev){if(l&&(p=function(e,t,i,s,r,n){const a=new Array
for(let r=0,o=s.length;r<o;r++){const l=O(e,t,i,s[r]*n,r<o-1?s[r+1]*n:i*n,n,!1)
l===l.next&&(l.steiner=!0),a.push(F(l))}a.sort(L)
for(const e of a)C(e,r),r=w(r,r.next)
return r}(t,i,s,r,p,n)),o>80*n){h=d=t[0+i*n],u=f=t[1+i*n]
for(let e=n;e<c;e+=n){const s=t[e+i*n],r=t[e+1+i*n]
h=Math.min(h,s),u=Math.min(u,r),d=Math.max(d,s),f=Math.max(f,r)}_=Math.max(d-h,f-u),_=0!==_?1/_:0}T(p,e,n,h,u,_,a,0)}}function O(e,t,i,s,r,n,a){let o
if(a===function(e,t,i,s,r,n){let a=0
for(let i=s,o=r-n;i<r;i+=n)a+=(e[o+t*n]-e[i+t*n])*(e[i+1+t*n]+e[o+1+t*n]),o=i
return a}(e,t,0,s,r,n)>0)for(let i=s;i<r;i+=n)o=R(i+t*n,e[i+t*n],e[i+1+t*n],o)
else for(let i=r-n;i>=s;i-=n)o=R(i+t*n,e[i+t*n],e[i+1+t*n],o)
return o&&D(o,o.next)&&(M(o),o=o.next),o}function w(e,t=e){if(!e)return e
let i,s=e
do{if(i=!1,s.steiner||!D(s,s.next)&&0!==j(s.prev,s,s.next))s=s.next
else{if(M(s),s=t=s.prev,s===s.next)break
i=!0}}while(i||s!==t)
return t}function T(e,t,i,s,r,n,a,o){if(!e)return
!o&&n&&(e=function e(t,i,s,r){for(let n;n!==t;n=n.next){if(n=n||t,null===n.z&&(n.z=P(n.x,n.y,i,s,r)),n.prev.next!==n||n.next.prev!==n)return n.prev.next=n,n.next.prev=n,e(t,i,s,r)
n.prevZ=n.prev,n.nextZ=n.next}return t.prevZ.nextZ=null,t.prevZ=null,function(e){let t,i=1
for(;;){let s,r=e
e=null,t=null
let n=0
for(;r;){n++,s=r
let a=0
for(;a<i&&s;a++)s=s.nextZ
let o=i
for(;a>0||o>0&&s;){let i
0===a?(i=s,s=s.nextZ,o--):0!==o&&s?r.z<=s.z?(i=r,r=r.nextZ,a--):(i=s,s=s.nextZ,o--):(i=r,r=r.nextZ,a--),t?t.nextZ=i:e=i,i.prevZ=t,t=i}r=s}if(t.nextZ=null,i*=2,n<2)return e}}(t)}(e,s,r,n))
let l=e
for(;e.prev!==e.next;){const c=e.prev,h=e.next
if(n?S(e,s,r,n):E(e))t.push(c.index/i+a),t.push(e.index/i+a),t.push(h.index/i+a),M(e),e=h.next,l=h.next
else if((e=h)===l){o?1===o?T(e=z(e,t,i,a),t,i,s,r,n,a,2):2===o&&N(e,t,i,s,r,n,a):T(w(e),t,i,s,r,n,a,1)
break}}}function E(e){const t=e.prev,i=e,s=e.next
if(j(t,i,s)>=0)return!1
let r=e.next.next
const n=r
let a=0
for(;r!==e.prev&&(0===a||r!==n);){if(a++,B(t.x,t.y,i.x,i.y,s.x,s.y,r.x,r.y)&&j(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function S(e,t,i,s){const r=e.prev,n=e,a=e.next
if(j(r,n,a)>=0)return!1
const o=r.x<n.x?r.x<a.x?r.x:a.x:n.x<a.x?n.x:a.x,l=r.y<n.y?r.y<a.y?r.y:a.y:n.y<a.y?n.y:a.y,c=r.x>n.x?r.x>a.x?r.x:a.x:n.x>a.x?n.x:a.x,h=r.y>n.y?r.y>a.y?r.y:a.y:n.y>a.y?n.y:a.y,u=P(o,l,t,i,s),d=P(c,h,t,i,s)
let f=e.prevZ,_=e.nextZ
for(;f&&f.z>=u&&_&&_.z<=d;){if(f!==e.prev&&f!==e.next&&B(r.x,r.y,n.x,n.y,a.x,a.y,f.x,f.y)&&j(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,_!==e.prev&&_!==e.next&&B(r.x,r.y,n.x,n.y,a.x,a.y,_.x,_.y)&&j(_.prev,_,_.next)>=0)return!1
_=_.nextZ}for(;f&&f.z>=u;){if(f!==e.prev&&f!==e.next&&B(r.x,r.y,n.x,n.y,a.x,a.y,f.x,f.y)&&j(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;_&&_.z<=d;){if(_!==e.prev&&_!==e.next&&B(r.x,r.y,n.x,n.y,a.x,a.y,_.x,_.y)&&j(_.prev,_,_.next)>=0)return!1
_=_.nextZ}return!0}function R(e,t,i,s){const r=G.create(e,t,i)
return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function M(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function F(e){let t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function C(e,t){if(t=function(e,t){let i=t
const s=e.x,r=e.y
let n,a=-1/0
do{if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const e=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y)
if(e<=s&&e>a){if(a=e,e===s){if(r===i.y)return i
if(r===i.next.y)return i.next}n=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t)
if(!n)return null
if(s===a)return n.prev
const o=n,l=n.x,c=n.y
let h,u=1/0
for(i=n.next;i!==o;)s>=i.x&&i.x>=l&&s!==i.x&&B(r<c?s:a,r,l,c,r<c?a:s,r,i.x,i.y)&&(h=Math.abs(r-i.y)/(s-i.x),(h<u||h===u&&i.x>n.x)&&I(i,e)&&(n=i,u=h)),i=i.next
return n}(e,t)){const i=U(t,e)
w(i,i.next)}}function j(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function A(e,t,i,s){return!!(D(e,t)&&D(i,s)||D(e,s)&&D(i,t))||j(e,t,i)>0!=j(e,t,s)>0&&j(i,s,e)>0!=j(i,s,t)>0}function B(e,t,i,s,r,n,a,o){return(r-a)*(t-o)-(e-a)*(n-o)>=0&&(e-a)*(s-o)-(i-a)*(t-o)>=0&&(i-a)*(n-o)-(r-a)*(s-o)>=0}function I(e,t){return j(e.prev,e,e.next)<0?j(e,t,e.next)>=0&&j(e,e.prev,t)>=0:j(e,t,e.prev)<0||j(e,e.next,t)<0}function P(e,t,i,s,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-s)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function D(e,t){return e.x===t.x&&e.y===t.y}function L(e,t){return e.x-t.x}function z(e,t,i,s){let r=e
do{const n=r.prev,a=r.next.next
!D(n,a)&&A(n,r,r.next,a)&&I(n,a)&&I(a,n)&&(t.push(n.index/i+s),t.push(r.index/i+s),t.push(a.index/i+s),M(r),M(r.next),r=e=a),r=r.next}while(r!==e)
return r}function N(e,t,i,s,r,n,a){let o=e
do{let e=o.next.next
for(;e!==o.prev;){if(o.index!==e.index&&k(o,e)){let l=U(o,e)
return o=w(o,o.next),l=w(l,l.next),T(o,t,i,s,r,n,a,0),void T(l,t,i,s,r,n,a,0)}e=e.next}o=o.next}while(o!==e)}function k(e,t){return e.next.index!==t.index&&e.prev.index!==t.index&&!function(e,t){let i=e
do{if(i.index!==e.index&&i.next.index!==e.index&&i.index!==t.index&&i.next.index!==t.index&&A(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&I(e,t)&&I(t,e)&&function(e,t){let i=e,s=!1
const r=(e.x+t.x)/2,n=(e.y+t.y)/2
do{i.y>n!=i.next.y>n&&i.next.y!==i.y&&r<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next}while(i!==e)
return s}(e,t)}function U(e,t){const i=G.create(e.index,e.x,e.y),s=G.create(t.index,t.x,t.y),r=e.next,n=t.prev
return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,n.next=s,s.prev=n,s}class G{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,t,i){const s=W<V.length?V[W++]:new G
return s.index=e,s.x=t,s.y=i,s.prev=null,s.next=null,s.z=null,s.prevZ=null,s.nextZ=null,s.steiner=!1,s}}const V=new Array
let W=0
for(let e=0;e<8096;e++)V.push(new G)
const X=new x.b(0,0,0,1,0),H=new x.b(0,0,0,1,0)
function q(e,t,i){let s=0
for(let r=1;r<i;r++){const i=e[2*(t+r-1)],n=e[2*(t+r-1)+1]
s+=(e[2*(t+r)]-i)*(e[2*(t+r)+1]+n)}return s}function Y(e,t,i,s,r){let n=0
for(let a=i;a<s;a+=3){const i=2*(e[a]-r),s=2*(e[a+1]-r),o=2*(e[a+2]-r)
n+=Math.abs((t[i]-t[o])*(t[s+1]-t[i+1])-(t[i]-t[s])*(t[o+1]-t[i+1]))}return n}X.setExtent(d.P),H.setExtent(d.P)
var K=i(969),Z=i(942),$=i(1445)
const J=e=>class extends e{constructor(...e){super(...e),this.tessellationProperties={},this._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0},this.geometryType=o.d.LINE}writeGeometry(e,t,i,s){this._writeGeometry(e,t,i,s)}_initializeTessellator(e){const t=l.c.load(this._materialKey),i=l.a.load(this._materialKey),s=this._tessellationOptions,r=t.vvSizeFieldStops||t.vvSizeMinMaxValue||t.vvSizeScaleStops||t.vvSizeUnitValue,n=this.tessellationProperties._halfWidth<d.O&&!e&&!r
this.tessellationProperties.minMaxZoom=this._minMaxZoom,s.wrapDistance=65535,s.textured=this._isDashed||this._hasPattern,s.offset=this.tessellationProperties.offset,s.halfWidth=this.tessellationProperties._halfWidth
const a=n?0:1,o=i.outlinedFill?ee:Q
this._lineTessellator=new $.a(o(this.tessellationProperties,a,a),te(this.tessellationProperties),n)}_write(e,t,i,s){const r="esriGeometryPoint"===t.geometryType
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,s,r),e.recordEnd()}_writeGeometry(e,t,i,s){const r=null!=i?i:t.readLegacyGeometryForDisplay(),n=this._getLines(r,s)
Object(c.j)(n)||this._writeVertices(e,t,n)}_getLines(e,t){if(Object(c.j)(e))return null
const i=e.paths||e.rings
return Object(c.j)(i)?null:function(e,t){H.setPixelMargin(t)
const i=H,s=-t,r=d.P+t
let n=[],a=!1,o=0
for(;o<e.length;){const t=[],l=e[o]
if(!l)return null
i.reset(y.a.LineString)
let[c,h]=l[0]
if(a)i.moveTo(c,h)
else{if(c<s||c>r||h<s||h>r){a=!0
continue}t.push({x:c,y:h})}let u=!1
const d=l.length
for(let e=1;e<d;++e)if(c+=l[e][0],h+=l[e][1],a)i.lineTo(c,h)
else{if(c<s||c>r||h<s||h>r){u=!0
break}t.push({x:c,y:h})}if(u)a=!0
else{if(a){const e=i.resultWithStarts()
if(e)for(const t of e)n.push(t)}else n.push({line:t,start:0})
o++,a=!1}}return n=n.filter(e=>e.line.length>1),0===n.length?null:n}(i,t?256:16)}_writeVertices(e,t,i){const s=t.getDisplayId(),r=e.vertexCount(),n=this.tessellationProperties,a=this._tessellationOptions
n.out=e,n.id=s,n.indexCount=0,n.vertexCount=0,n.offset=r,a.capType=this._capType,a.joinType=this._joinType
const o=l.a.load(this._materialKey)
this.tessellationProperties.key=o.outlinedFill?o:l.c.load(this._materialKey)
for(const{line:e,start:t}of i)a.initialDistance=t%65535,this._lineTessellator.tessellate(e,a)}},Q=(e,t,i)=>(s,r,n,a,o,l,c,h,u,d,f)=>{const p=Object(_.a)(f,Math.ceil(16*e._halfWidth)),m=Object(_.b)(Math.round(16*c),Math.round(16*h),Math.round(16*u),Math.round(16*d)),g=Object(_.b)(16*o,16*l,0,e._bitset),b=e.out
return b.vertexBounds(s,r,t,i),b.vertexWrite(Object(_.a)(8*s,8*r)),b.vertexWrite(e.id),b.vertexWrite(e._fillColor),b.vertexWrite(m),b.vertexWrite(p),b.vertexWrite(e._tl),b.vertexWrite(e._br),b.vertexWrite(g),b.vertexWrite(Object(_.a)(Math.ceil(16*e._halfReferenceWidth),0)),b.vertexWrite(e.minMaxZoom),b.vertexEnd(),e.offset+e.vertexCount++},ee=(e,t,i)=>(s,r,n,a,o,l,c,h,u,d,f)=>{const p=Object(_.b)(0,0,16*e._halfWidth,16*e._halfReferenceWidth),m=Object(_.b)(16*c+128,16*h+128,16*u+128,16*d+128),g=e.out,b=e._bitset<<24|e.id
return g.vertexBounds(s,r,t,i),g.vertexWrite(Object(_.a)(8*s,8*r)),g.vertexWrite(b),g.vertexWrite(e._fillColor),e.key.simple||(g.vertexWrite(0),g.vertexWrite(0)),g.vertexWrite(p),g.vertexWrite(m),e.key.simple||g.vertexWrite(e.minMaxZoom),g.vertexEnd(),e.offset+e.vertexCount++},te=e=>(t,i,s)=>{const r=e.out
r.indexWrite(t),r.indexWrite(i),r.indexWrite(s),e.indexCount+=3}
var ie=i(1119)
const se=r.a.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate")
class re extends(J(ie.a)){constructor(e,t,i,s,r,n,a,o,c,h,u,f,m,g,b,y,x,v,O){super()
const w=l.c.load(e)
t&&(w.sdf=t.sdf,w.pattern=!0,w.textureBinding=t.textureBinding),this._capType=s,this._joinType=r,this._miterLimitCosine=Object(p.d)(n),this.tessellationProperties._fillColor=a,this.tessellationProperties._tl=o,this.tessellationProperties._br=c,this._hasPattern=h,this._isDashed=u,this._zOrder=y,this._effects=x,this._minMaxZoom=Object(_.a)(Math.round(v*d.w),Math.round(O*d.w)),this._materialKey=w.data
const T=(m?d.g:0)|(g?d.m:0)|(f?d.h:0)
this.tessellationProperties._bitset=T,this.tessellationProperties._halfWidth=.5*i,this.tessellationProperties._halfReferenceWidth=.5*b,this.tessellationProperties.offset=0,this._initializeTessellator(!1)}static fromCIMLine(e,t,i){const s=e.color,r=e.scaleFactor||1,n=!!e.dashTemplate
let a=e.cap
n&&a===K.d.ROUND&&(a=K.d.SQUARE)
const o=e.join,l=Object(h.h)(e.width)*r,c=Object(h.h)(e.referenceWidth),f=Object(h.h)(e.miterLimit),m=s&&Object(u.c)(s)||0,[g,b]=Object(p.e)(e.scaleInfo,i)
if(!t)return new re(e.materialKey,t,l,a,o,f,m,0,0,!1,n,e.scaleDash,e.colorLocked,!1,c,e.zOrder,e.effects,g,b)
const{rect:y,width:x,height:v}=t,O=y.x+d.A,w=y.y+d.A,T=O+x,E=w+v,S=Object(_.a)(O,w),R=Object(_.a)(T,E)
return new re(e.materialKey,t,l,a,o,f,m,S,R,!0,n,e.scaleDash,e.colorLocked,!1,c,e.zOrder,e.effects,g,b)}static fromFillOutline(e){var t
return e.isOutlinedFill&&e.outline&&"esriSLSSolid"===(null==(t=e.outline)?void 0:t.style)?re.fromSimpleLine({hash:"",materialKey:e.materialKey,...e.outline},null,!0):null}static fromSimpleLine(e,t,i=!1){const{color:s}=e,r="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,n=Object(Z.i)(e.cap||"round"),a=Object(Z.j)(e.join||"round")
let o=s&&"esriSLSNull"!==e.style&&Object(u.d)(s)||0
"esriSLSNull"===e.style&&(o=0)
const l=Object(h.h)(e.width),c=e.miterLimit
if(!t)return new re(e.materialKey,t,l,n,a,c,o,0,0,!1,r,!0,!1,i,l,0,null,p.b,p.a)
const{rect:f,width:m,height:g}=t,b=f.x+d.A,y=f.y+d.A,x=b+m,v=y+g,O=Object(_.a)(b,y),w=Object(_.a)(x,v)
return new re(e.materialKey,t,l,n,a,c,o,O,w,!0,r,!0,!1,i,l,0,null,p.b,p.a)}static fromPictureLineSymbol(e,t,i,s){return se.error("PictureLineSymbol support does not exist!"),null}}const ne=e=>class extends e{constructor(...e){super(...e),this.forceLibtess=!1,this._bitset=0,this._lineTemplate=null,this.geometryType=o.d.FILL}_maybeAddLineTemplate(e){this._lineTemplate=re.fromFillOutline(e)}_write(e,t,i,s){const r="esriGeometryPoint"===t.geometryType,n=l.a.load(this._materialKey)
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,n,s,r),n.outlinedFill&&Object(c.k)(this._lineTemplate)&&this._lineTemplate.writeGeometry(e,t,s,r),e.recordEnd()}_writeGeometry(e,t,i,s,r){const n=this._getGeometry(t,s,r)
if(Object(c.j)(n))return
const a=[]
if(!(n.maxLength>100)&&!this.forceLibtess&&function(e,t){const{coords:i,lengths:s,hasIndeterminateRingOrder:r}=t,n=e
if(r)return!1
let a=0
for(let e=0;e<s.length;){let t=e,r=s[e],o=q(i,a,r)
const l=[]
for(;++t<s.length;){const e=s[t],n=q(i,a+r,e)
if(!(n>0))break
o+=n,l.push(a+r),r+=e}const c=n.length
v(n,i,a,a+r,l,2,0)
const h=Y(n,i,c,n.length,0),u=Math.abs(o)
if(Math.abs((h-u)/Math.max(1e-7,u))>1e-5)return n.length=0,!1
e=t,a+=r}return!0}(a,n))return void(a.length&&this._writeVertices(e,t,n.coords,n.lengths,i,a))
const o=function(e){const{coords:t,lengths:i}=e,{buffer:s}=Object(g.b)(t,i)
return s}(n)
this._writeVertices(e,t,o,[o.length/2],i)}_writeVertex(e,t,i,s,r,n){const a=Object(_.a)(1*s,1*r)
e.vertexBounds(s,r,0,0),e.vertexWrite(a),e.vertexWrite(t),i.dotDensity?e.vertexWriteF32(1/Math.abs(n.readGeometryArea())):(e.vertexWrite(this.fillColor),i.simple||(e.vertexWrite(this.tl),e.vertexWrite(this.br)),e.vertexWrite(this.aux2),e.vertexWrite(this.aux3),i.simple||e.vertexWrite(this._minMaxZoom))}_writeVertices(e,t,i,s,r,n){const a=t.getDisplayId(),o=this._bitset<<24|a,l=s.reduce((e,t)=>e+t),c=r.dotDensity?4:10,h=e.vertexCount()
e.vertexEnsureSize(c*l)
let u=0
if(n)for(const s of n){const n=i[2*s],a=i[2*s+1]
this._writeVertex(e,o,r,n,a,t),u++}else for(let s=0;s<i.length;s+=2){const n=Math.round(i[s]),a=Math.round(i[s+1])
this._writeVertex(e,o,r,n,a,t),u++}e.indexEnsureSize(u)
for(let t=0;t<u;t++)e.indexWrite(t+h)}_getGeometry(e,t,i){const s=t?Object(m.q)(Object(m.d)(t),2):e.readGeometryForDisplay()
return s?function(e,t){if(Object(c.j)(e))return null
if(!function(e,t,i){let s=0
for(let t=0;t<e.lengths.length;t++){const r=e.lengths[t]
for(let t=0;t<r;t++){const r=e.coords[2*(t+s)],n=e.coords[2*(t+s)+1]
if(r<-128||r>i||n<-128||n>i)return!0}s+=r}return!1}(e,0,d.P+128))return e
X.setPixelMargin(t),X.reset(y.a.Polygon)
let i=0
for(let t=0;t<e.lengths.length;t++){const s=e.lengths[t]
let r=e.coords[2*(0+i)],n=e.coords[2*(0+i)+1]
X.moveTo(r,n)
for(let t=1;t<s;t++)r=e.coords[2*(t+i)],n=e.coords[2*(t+i)+1],X.lineTo(r,n)
X.close(),i+=s}const s=X.result(!1)
if(!s)return null
const r=[],n=[]
for(const e of s){let t=0
for(const i of e)n.push(i.x),n.push(i.y),t++
r.push(t)}return new b.a(r,n)}(s,i?256:8):null}}
var ae=i(1302),oe=i(1149)
const le=r.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate")
class ce extends ie.a{constructor(e){super(),this._ongoingMaterialRequestMap=new Map,this._materialCache=new Map,this._dynamicPropertyMap=new Map,this._cimLayer=e}analyze(e,t,i,s,r){if(r&&0===r.length)return null
const n=r&&r.length>0,a=t.readLegacyFeature(),o=this._materialCache,l=this._cimLayer.materialHash
if(!l)return le.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null)
const c="function"==typeof l?l(a,i,s):l
if(o.has(c)){const e=o.get(c)
return Promise.resolve(e)}const h=this._ongoingMaterialRequestMap.get(c)
if(h)return h
const u=this._cimLayer,d=Object(ae.a)(u.cim,this._cimLayer.materialOverrides)
d.mosaicHash=c
const{type:f,url:_}=u,p={cim:d,type:f,mosaicHash:c,url:_,size:null,dashTemplate:null,text:null,fontName:null}
switch(f){case"marker":p.size=Object(oe.d)(u.size,a,i,s)
break
case"line":p.dashTemplate=u.dashTemplate
break
case"text":p.text=Object(oe.d)(u.text,a,i,s),p.fontName=Object(oe.d)(u.fontName,a,i,s)}const m=e.getMosaicItem(p,r).then(e=>(n||(this._ongoingMaterialRequestMap.delete(c),o.set(c,e)),e)).catch(e=>(this._ongoingMaterialRequestMap.delete(c),le.error(".analyze()",e.message),null))
return n||this._ongoingMaterialRequestMap.set(c,m),m}}var he=i(1153)
class ue extends(ne(ce)){constructor(e,t,i){var s
if(super(e),this._minMaxZoom=Object(_.a)(Math.round(t*d.w),Math.round(i*d.w)),Object(p.f)(e.color)){const t=(t,i,s)=>{const r=e.color(t,i,s)
return r&&Object(u.c)(r)||0}
this._dynamicPropertyMap.set("fillColor",t)}else{const t=e.color
this.fillColor=t&&Object(u.c)(t)||0}const r="CIMMarkerPlacementInsidePolygon"===(null==(s=e.cim.placement)?void 0:s.type)&&e.cim.placement.shiftOddRows?2:1,n=e.height
if(Object(p.f)(n)){const e=(e,t,i)=>n(e,t,i)*r
this._dynamicPropertyMap.set("_height",e)}else this._height=(n||0)*r
const a=e.offsetX
if(Object(p.f)(a)){const e=(e,t,i)=>{let s=Object(h.h)(a(e,t,i))+128
return s>255?s=255:s<0&&(s=0),s}
this._dynamicPropertyMap.set("_offsetX",e)}else{let e=Object(h.h)(a||0)+128
e>255?e=255:e<0&&(e=0),this._offsetX=e}const o=e.offsetY
if(Object(p.f)(o)){const e=(e,t,i)=>{let s=Object(h.h)(-o(e,t,i))+128
return s>255?s=255:s<0&&(s=0),s}
this._dynamicPropertyMap.set("_offsetY",e)}else{let e=Object(h.h)(-o||0)+128
e>255?e=255:e<0&&(e=0),this._offsetY=e}const m=e.scaleX
Object(p.f)(m)?this._dynamicPropertyMap.set("_scaleX",m):this._scaleX=m||1
const g=e.angle
if(Object(p.f)(g)){const e=(e,t,i)=>Object(f.d)(g(e,t,i))
this._dynamicPropertyMap.set("_angle",e)}else this._angle=Object(f.d)(g)||0
if(Object(c.k)(e.effects)){const t=e.effects
Object(p.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}this._cimFillLayer=e,this._fillMaterialKey=l.a.load(e.materialKey)}static fromCIMFill(e,t){const[i,s]=Object(p.e)(e.scaleInfo,t)
return new ue(e,i,s)}bindFeature(e,t,i){const s=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(s,t,i)})
const r=this._fillMaterialKey,n=this._materialCache,a=(0,this._cimFillLayer.materialHash)(s,t,i),o=n.get(a)
let l=null
if(o&&Object(he.a)(o.spriteMosaicItem)&&(l=o.spriteMosaicItem),l){const{rect:e,width:t,height:i}=l,s=e.x+d.A,n=e.y+d.A,a=s+t,o=n+i
let c=Math.round(Object(h.h)(this._height))
c>255?c=255:c<=0&&(c=o-n)
let u=Math.round(Object(h.h)(this._height/i*t||0))
u>255?u=255:u<=0&&(u=a-s)
const f=this._scaleX,p=1
this.tl=Object(_.a)(s,n),this.br=Object(_.a)(a,o),this.aux2=Object(_.b)(u,c,this._offsetX,this._offsetY),this.aux3=Object(_.b)(f,p,this._angle,0),r.sdf=l.sdf,r.pattern=!0,r.textureBinding=l.textureBinding}else this.tl=0,this.br=0,this.aux2=0,this.aux3=0,r.sdf=!1,r.pattern=!1,r.textureBinding=0
this._materialKey=r.data}}class de extends(J(ce)){constructor(e,t,i){super(e),this._minMaxZoom=Object(_.a)(Math.round(t*d.w),Math.round(i*d.w)),this._cimLineLayer=e
let s=0
Object(p.f)(e.width)||(s=.5*Object(h.h)(e.width)),this._dynamicPropertyMap.set("_halfWidth",(t,i,r)=>Object(p.f)(e.width)?.5*Object(h.h)(e.width(t,i,r)):s),Object(p.f)(e.cap)?this._dynamicPropertyMap.set("_capType",e.cap):this._capType=e.cap,Object(p.f)(e.join)?this._dynamicPropertyMap.set("_joinType",e.join):this._joinType=e.join
const r=e.color
if(Object(p.f)(r)){const e=(e,t,i)=>Object(u.c)(r(e,t,i))
this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=r&&Object(u.c)(r)||0
const n=e.miterLimit
if(Object(p.f)(n)){const e=(e,t,i)=>Object(p.d)(n(e,t,i))
this._dynamicPropertyMap.set("_miterLimitCosine",e)}else this._miterLimitCosine=Object(p.d)(n)
if(Object(c.k)(e.effects)){const t=e.effects
Object(p.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}this._scaleFactor=e.scaleFactor||1,this._isDashed=null!=e.dashTemplate,this.tessellationProperties._bitset=(e.colorLocked?1:0)|(e.scaleDash?1:0)<<1,this._materialKey=e.materialKey,this._initializeTessellator(!0)}static fromCIMLine(e,t){const[i,s]=Object(p.e)(e.scaleInfo,t)
return new de(e,i,s)}bindFeature(e,t,i){const s=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(s,t,i)}),this._halfWidth*=this._scaleFactor
const r=this._materialCache,n=(0,this._cimLineLayer.materialHash)(s,t,i),a=r.get(n)
let o=null
if(a&&Object(he.a)(a.spriteMosaicItem)&&(o=a.spriteMosaicItem),o){this._hasPattern=!0
const{rect:e,width:t,height:i}=o,s=e.x+d.A,r=e.y+d.A,n=s+t,a=r+i
this.tessellationProperties._tl=Object(_.a)(s,r),this.tessellationProperties._br=Object(_.a)(n,a)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0
this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties.offset=0,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth
const c=l.c.load(this._materialKey)
o&&(c.sdf=o.sdf,c.pattern=!0,c.textureBinding=o.textureBinding),this._materialKey=c.data}}var fe=i(1144),_e=i(1042),pe=i(1328)
const me=Object(_e.a)(),ge=Object(fe.a)(),be=r.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate")
class ye extends(Object(pe.a)(ce)){constructor(e,t,i){super(e),this._cimMarkerLayer=e,this._minMaxZoom=Object(_.a)(Math.round(t*d.w),Math.round(i*d.w))
const s=e.color
if(Object(p.f)(s)){const e=(e,t,i)=>Object(u.c)(s(e,t,i))
this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=Object(u.c)(s)
const r=e.outlineColor
if(Object(p.f)(r)){const e=(e,t,i)=>Object(u.c)(r(e,t,i))
this._dynamicPropertyMap.set("_outlineColor",e)}else this._outlineColor=Object(u.c)(r)
const n=e.size
if(Object(p.f)(n)){const e=(e,t,i)=>Object(h.h)(n(e,t,i))
this._dynamicPropertyMap.set("_size",e)}else this._size=Object(h.h)(n)||0
const a=e.scaleX
Object(p.f)(a)?this._dynamicPropertyMap.set("_scaleX",a):this._scaleX=a||1
const o=e.offsetX
if(Object(p.f)(o)){const e=(e,t,i)=>Object(h.h)(o(e,t,i))
this._dynamicPropertyMap.set("xOffset",e)}else this.xOffset=Object(h.h)(o)||0
const l=e.offsetY
if(Object(p.f)(l)){const e=(e,t,i)=>Object(h.h)(l(e,t,i))
this._dynamicPropertyMap.set("yOffset",e)}else this.yOffset=Object(h.h)(l)||0
const f=e.outlineWidth
if(Object(p.f)(f)){const e=(e,t,i)=>Object(h.h)(f(e,t,i))
this._dynamicPropertyMap.set("_outlineWidth",e)}else this._outlineWidth=Object(h.h)(f)||0
const m=e.rotation
if(Object(p.f)(m)?this._dynamicPropertyMap.set("_angle",m):this._angle=m||0,Object(c.k)(e.effects)){const t=e.effects
Object(p.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.k)(e.markerPlacement)){const t=e.markerPlacement
Object(p.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._markerPlacement=t}this._scaleFactor=Object(c.u)(e.scaleFactor,1),this._bitSet=(e.alignment===K.a.MAP?1:0)|(e.colorLocked?1:0)<<1|(e.scaleSymbolsProportionally?1:0)<<3,this._materialKey=e.materialKey}static fromCIMMarker(e,t){const[i,s]=Object(p.e)(e.scaleInfo,t)
return new ye(e,i,s)}bindFeature(e,t,i){const r=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,s)=>{this[s]=e(r,t,i)})
const n=this._cimMarkerLayer.materialHash,a="function"==typeof n?n(r,t,i):n,o=this._materialCache.get(a)
if(!o||!Object(he.a)(o.spriteMosaicItem)||!o.spriteMosaicItem)return void be.error(new s.a("mapview-cim","Encountered an error when binding feature"))
const c=o.spriteMosaicItem,u=this._cimMarkerLayer.sizeRatio,f=c.width/c.height*this._scaleX,p=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle
let m=this._size,g=m*f
const b=this.xOffset,y=this.yOffset
this.xOffset*=this._scaleFactor,this.yOffset*=this._scaleFactor
const x=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/Object(h.h)(this._cimMarkerLayer.frameHeight):1,v=this._outlineWidth*x,O=Object(h.h)(this._cimMarkerLayer.referenceSize)
let w=0,T=0
const E=this._cimMarkerLayer.anchorPoint
E&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(w=-E.x/(this._size*f),T=E.y/this._size):(w=E.x,T=E.y)),this._sizeOutlineWidth=Object(_.b)(Math.round(Math.min(Math.sqrt(128*g),255)),Math.round(Math.min(Math.sqrt(128*m),255)),Math.round(Math.min(Math.sqrt(128*v),255)),Math.round(Math.min(Math.sqrt(128*O),255))),this.angle=p
const S=Math.round(64*u)
this._bitestAndDistRatio=Object(_.a)(this._bitSet,S)
const R=c.rect.x+d.A,M=c.rect.y+d.A,F=R+c.width,C=M+c.height
this._texUpperLeft=Object(_.a)(R,M),this._texUpperRight=Object(_.a)(F,M),this._texBottomLeft=Object(_.a)(R,C),this._texBottomRight=Object(_.a)(F,C)
const j=l.d.load(this._materialKey)
j.sdf=c.sdf,j.pattern=!0,j.textureBinding=c.textureBinding,this._materialKey=j.data,this._anchorX=.5-(.5+w)*c.width/c.width,this._anchorY=.5-(.5+T)*c.height/c.height,g*=u,m*=u,g*=this._scaleFactor,m*=this._scaleFactor,g*=c.rect.width/c.width,m*=c.rect.height/c.height,this._computedWidth=g,this._computedHeight=m,this._applyTransformation(ge,me),this.xOffset=b,this.yOffset=y}}var xe=i(1152),ve=i(1325),Oe=i(1311)
class we extends(Object(ve.a)(ce)){constructor(e,t,i){super(e),this._horizontalAlignment="center",this._verticalAlignment="middle",this._textToGlyphs=new Map,this._minMaxZoom=Object(_.a)(Math.round(t*d.w),Math.round(i*d.w))
const s=e.scaleFactor||1
this._cimTextLayer=e
const r=e.color
if(Object(p.f)(r)){const e=(e,t,i)=>Object(u.c)(r(e,t,i))
this._dynamicPropertyMap.set("_color",e)}else this._color=Object(u.c)(r)
const n=e.outlineColor
if(Object(p.f)(n)){const e=(e,t,i)=>Object(u.c)(n(e,t,i))
this._dynamicPropertyMap.set("_haloColor",e)}else this._haloColor=Object(u.c)(n)
let a,o,f
if(Object(p.f)(e.size)||(a=Math.min(Math.round(Object(h.h)(e.size*e.sizeRatio)),127)),this._dynamicPropertyMap.set("_size",(t,i,s)=>Object(p.f)(e.size)?Math.min(Math.round(Object(h.h)(e.size(t,i,s)*e.sizeRatio)),127):a),Object(p.f)(e.outlineSize)){const t=(t,i,s)=>Math.min(Math.floor(5*Object(h.h)(e.outlineSize(t,i,s)*e.sizeRatio)),127)
this._dynamicPropertyMap.set("_haloSize",t)}else this._haloSize=Math.min(Math.floor(5*Object(h.h)(e.outlineSize*e.sizeRatio)),127)
if(Object(p.f)(e.offsetX)||(o=Math.round(Object(h.h)(e.offsetX*e.sizeRatio))),this._dynamicPropertyMap.set("_xOffset",(t,i,s)=>Object(p.f)(e.offsetX)?Math.round(Object(h.h)(e.offsetX(t,i,s)*e.sizeRatio)):o),Object(p.f)(e.offsetY)||(f=Math.round(Object(h.h)(e.offsetY*e.sizeRatio))),this._dynamicPropertyMap.set("_yOffset",(t,i,s)=>Object(p.f)(e.offsetY)?Math.round(Object(h.h)(e.offsetY(t,i,s)*e.sizeRatio)):f),Object(p.f)(e.angle)?this._dynamicPropertyMap.set("_angle",e.angle):this._angle=e.angle,Object(p.f)(e.horizontalAlignment)?this._dynamicPropertyMap.set("_horizontalAlignment",e.horizontalAlignment):this._horizontalAlignment=e.horizontalAlignment,Object(p.f)(e.verticalAlignment)?this._dynamicPropertyMap.set("_verticalAlignment",e.verticalAlignment):this._verticalAlignment=e.verticalAlignment,Object(c.k)(e.effects)){const t=e.effects
Object(p.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.k)(e.markerPlacement)){const t=e.markerPlacement
Object(p.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._textPlacement=t}Object(p.f)(e.text)?this._dynamicPropertyMap.set("_text",e.text):this._text=e.text,this._scaleFactor=s
const m=Math.min(Math.round(Object(h.h)(e.referenceSize*e.sizeRatio)),127)
this._referenceSize=Math.round(Math.sqrt(256*m)),this._materialKey=e.materialKey
const g=l.f.load(this._materialKey)
g.sdf=!0,this._bitset=(e.alignment===K.a.MAP?1:0)|(e.colorLocked?1:0)<<1,this._materialKey=g.data,this._decoration="none",this._lineHeight=1,this._lineWidth=512,this._isCIM=!0}static fromCIMText(e,t){const[i,s]=Object(p.e)(e.scaleInfo,t)
return new we(e,i,s)}async analyze(e,t,i,s){const r=t.readLegacyFeature(),n=function(e,t,i,s){return"string"==typeof e.text?e.text:"function"==typeof e.text?e.text(t,i,s):""}(this._cimTextLayer,r,i,s),a=await super.analyze(e,t,i,s,Object(Oe.a)(n))
return a&&a.glyphMosaicItems&&this._textToGlyphs.set(n,a.glyphMosaicItems),a}bindFeature(e,t,i){const s=e.readLegacyFeature()
if(this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(s,t,i)}),!this._text||0===this._text.length)return void(this._shapingInfo=null)
this._size*=this._scaleFactor,this._scale=this._size/d.r,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=Object(xe.e)(this._horizontalAlignment||"center"),this._yAlignD=Object(xe.g)(this._verticalAlignment||"baseline")
const r=this._textToGlyphs.get(this._text)
this.bindTextInfo(r,!1)}}class Te extends(ne(ie.a)){constructor(e,t,i,s,r,n,a,o,c,h,u,f,p,m,g,b){super(),this._effects=m
const y=l.a.load(e)
t&&(y.sdf=t.sdf,y.pattern=!0,y.textureBinding=t.textureBinding),this.fillColor=i,this.tl=s,this.br=r,this.aux2=Object(_.b)(n,a,o,c),this.aux3=Object(_.b)(h,u,f,0),this._bitset=p,this._minMaxZoom=Object(_.a)(Math.round(g*d.w),Math.round(b*d.w)),this._materialKey=y.data}static fromCIMFill(e,t,i){const s=e.color,r=s&&Object(u.c)(s)||0,n=e.materialKey,[a,o]=Object(p.e)(e.scaleInfo,i)
if(!t)return new Te(n,null,r,0,0,0,0,0,0,0,0,0,e.colorLocked?d.g:0,e.effects,a,o)
const{rect:l,width:c,height:m}=t,g=e.scaleX||1,b=l.x+d.A,y=l.y+d.A,x=b+c,v=y+m,O=e.height,w=g*O
let T=Math.round(O)
T>255?T=255:T<=0&&(T=v-y)
let E=Math.round(w)
E>255?E=255:E<=0&&(E=x-b)
let S=Object(h.h)(e.offsetX||0)+128
S>255&&(S=255)
let R=Object(h.h)(-e.offsetY||0)+128
R>255&&(R=255)
const M=Object(_.a)(b,y),F=Object(_.a)(x,v)
return new Te(n,t,r,M,F,E,T,S,R,128,128,Object(f.b)(e.angle),e.colorLocked?d.g:0,e.effects,a,o)}static fromSimpleFill(e,t,i=!1){const{color:s}=e,r=s&&"esriSFSNull"!==e.style&&Object(u.d)(s)||0,n=i?d.g:0,a=e.materialKey
let o
if(t){const{rect:e,width:i,height:s}=t,l=e.x+d.A,c=e.y+d.A,h=l+i,u=c+s,f=Object(_.a)(l,c),m=Object(_.a)(h,u)
o=new Te(a,t,r,f,m,i,s,0,0,128,128,0,n,null,p.b,p.a)}else o=new Te(a,null,r,0,0,0,0,0,0,0,0,0,n,null,p.b,p.a)
return o._maybeAddLineTemplate(e),o}static fromPictureFill(e,t,i=!1){const s=d.z,{rect:r,width:n,height:a}=t,o=r.x+d.A,l=r.y+d.A,c=o+n,u=l+a,f=Object(_.a)(o,l),m=Object(_.a)(c,u)
let g=Math.round(Object(h.h)(e.width))
g>255&&(g=255)
let b=Math.round(Object(h.h)(e.height))
b>255&&(b=255)
let y=Object(h.h)(e.xoffset)+128
y>255&&(y=255)
let x=Object(h.h)(-e.yoffset)+128
x>255&&(x=255)
const v=e.materialKey,O=i?d.g:0,w=new Te(v,t,s,f,m,g,b,y,x,128*e.xscale,128*e.yscale,0,O,null,p.b,p.a)
return w._maybeAddLineTemplate(e),w}}var Ee=i(1327),Se=i(1324)
class Re{constructor(){this._resolver=null}isHeld(){return!!this._resolver}async acquire(){if(!this._resolver)return this._resolver=Object(n.g)(),Promise.resolve()
await this._resolver.promise,await this.acquire()}release(){const e=this._resolver
this._resolver=null,e.resolve()}}var Me=i(1160)
const Fe=r.a.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),Ce=new Array,je={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:0},Ae={...a.g,hash:JSON.stringify(a.g),materialKey:Object(l.g)(o.d.MARKER,je)},Be={...a.i,hash:JSON.stringify(a.i),materialKey:Object(l.g)(o.d.LINE,je)},Ie={...a.h,hash:JSON.stringify(a.h),materialKey:Object(l.g)(o.d.FILL,je)}
function Pe(e,t){const i=e.length
return e.push(null),t.then(t=>e[i]=t),e}function De(e){return!!(1&e)}class Le{constructor(e,t){this._idCounter=1,this._templateIdCounter=1,this._idToTemplateGroup=new Map,this._symbolToTemplate=new Map,this._fetchQueue=[],this._idToResolver=new Map,this._cimTemplateCache=new Map,this._cimAnalyses=[],this._lock=new Re,this._fetchResource=e,this._tileInfo=t}get _markerError(){return this._errorTemplates.marker[0]}get _fillError(){return this._errorTemplates.fill[0]}get _lineError(){return this._errorTemplates.line[0]}get _textError(){return this._errorTemplates.line[0]}createTemplateGroup(e,t){this._initErrorTemplates()
const i=e.hash
if(this._symbolToTemplate.has(i))return this._symbolToTemplate.get(i)
const s=new Array
t&&this._createMeshTemplates(s,t,!0),this._createMeshTemplates(s,e,!1)
const r=this._createGroupId("expanded-cim"===e.type&&ze(e))
return this._idToTemplateGroup.set(r,s),this._symbolToTemplate.set(i,r),r}getTemplateGroup(e){return this._idToTemplateGroup.has(e)?this._idToTemplateGroup.get(e):Ce}getDynamicTemplateGroup(e){return this._idToTemplateGroup.has(e)?(De(e)||Fe.error("mapview-template-store",`Id ${e} does not refer to a dynamic template`),this._idToTemplateGroup.get(e)):Ce}getMosaicItem(e,t){const i=this._createTemplateId(),s=new Promise(e=>this._idToResolver.set(i,e))
return this._fetchQueue.push({symbol:e,id:i,glyphIds:t}),s}finalize(e){return this._fetchQueue.length||this._lock.isHeld()?async function(e,t,i){try{await e.acquire(),await t(i),e.release()}catch(t){throw e.release(),t}}(this._lock,this._fetchAllQueuedResources.bind(this),e):Promise.resolve()}_initErrorTemplates(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],Ie,!1),marker:this._createMeshTemplates([],Ae,!1),line:this._createMeshTemplates([],Be,!1)})}_fetchAllQueuedResources(e){if(!this._fetchQueue.length)return Promise.resolve()
const t=this._fetchQueue,i=this._cimAnalyses
return this._fetchQueue=[],this._cimAnalyses=[],Promise.all(i).then(()=>this._fetchResource(t,e).then(e=>{for(const{id:t,mosaicItem:i}of e)this._idToResolver.get(t)(i),this._idToResolver.delete(t)})).catch(e=>{Object(n.m)(e)?this._fetchQueue=this._fetchQueue.concat(t):"worker:port-closed"===e.name||Fe.error(new s.a("mapview-template-store","Unable to fetch requested texture resources",e))})}_createGroupId(e){return this._idCounter++<<1|(e?1:0)}_createTemplateId(){return this._templateIdCounter++}async _createSMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(he.a)(t,Fe)?Ee.a.fromSimpleMarker(e,t):this._markerError}async _createPMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(he.a)(t,Fe)?Ee.a.fromPictureMarker(e,t):this._markerError}async _createSFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(he.a)(i,Fe)?Te.fromSimpleFill(e,i,t):this._fillError}async _createPFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(he.a)(i,Fe)?Te.fromPictureFill(e,i,t):this._fillError}async _createSLS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(he.a)(i,Fe)?re.fromSimpleLine(e,i):this._lineError}async _createLMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(he.a)(t,Fe)?Ee.a.fromLineSymbolMarker(e,t):this._markerError}async _createTS(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e)
return Se.a.fromText(e,t)}async _createCIMText(e){const{glyphMosaicItems:t}=await this.getMosaicItem(Object(Me.a)(e),Object(Oe.a)(e.text))
return Object(he.a)(t,Fe)?Se.a.fromCIMText(e,t,this._tileInfo):this._textError}async _createCIMFill(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Me.a)(e))
return Object(he.a)(t,Fe)?Te.fromCIMFill(e,t,this._tileInfo):this._fillError}async _createCIMLine(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Me.a)(e))
return Object(he.a)(t,Fe)?re.fromCIMLine(e,t,this._tileInfo):this._lineError}async _createCIMMarker(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Me.a)(e))
return Object(he.a)(t,Fe)?Ee.a.fromCIMMarker(e,t,this._tileInfo):this._markerError}async _createCIM(e){const t=e.templateHash
if(this._cimTemplateCache.has(t))return this._cimTemplateCache.get(t)
let i
switch(e.type){case"marker":i=await this._createCIMMarker(e)
break
case"line":i=await this._createCIMLine(e)
break
case"fill":i=await this._createCIMFill(e)
break
case"text":i=await this._createCIMText(e)}return this._cimTemplateCache.set(t,i),i}async _createDynamicCIM(e){const t=e.templateHash
if(this._cimTemplateCache.has(t))return this._cimTemplateCache.get(t)
let i
switch(e.type){case"marker":i=ye.fromCIMMarker(e,this._tileInfo)
break
case"line":i=de.fromCIMLine(e,this._tileInfo)
break
case"fill":i=ue.fromCIMFill(e,this._tileInfo)
break
case"text":i=we.fromCIMText(e,this._tileInfo)}return this._cimTemplateCache.set(t,i),i}_createPrimitiveMeshTemplates(e,t,i){switch(t.type){case"esriSMS":return Pe(e,this._createSMS(t))
case"esriPMS":return Pe(e,this._createPMS(t))
case"esriSFS":return Pe(e,this._createSFS(t,i))
case"line-marker":return Pe(e,this._createLMS(t))
case"esriPFS":return Pe(e,this._createPFS(t,i))
case"esriSLS":return Pe(e,this._createSLS(t,!1))
case"esriTS":return Pe(e,this._createTS(t))
default:return Fe.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),e}}_createMeshTemplates(e,t,i){if(-1!==t.type.indexOf("3d"))return Fe.error("3D symbols are not supported with MapView"),e
if("expanded-cim"===t.type){for(const i of t.layers)"function"==typeof i.materialHash?Pe(e,this._createDynamicCIM(i)):Pe(e,this._createCIM(i))
return e}if("composite-symbol"===t.type){for(const s of t.layers)this._createPrimitiveMeshTemplates(e,s,i)
return e}return"cim"===t.type||"label"===t.type||"web-style"===t.type?e:this._createPrimitiveMeshTemplates(e,t,i)}}const ze=e=>{if(!e.layers)return!1
for(const t of e.layers)if("function"==typeof t.materialHash)return!0
return!1}},1342:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var s=i(77),r=i(908),n=i(1232),a=i(1542),o=i(1534)
const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col
class c extends n.a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e)
return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e)
return t.push(e.registerRenderPass({name:"stencil",brushes:[o.a],drawPhase:r.c.DEBUG|r.c.MAP|r.c.HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(s.a)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.a],drawPhase:r.c.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key)
t.setTransform(e,i)}}setStencilReference(e){let t=1
for(const e of this.children)e.stencilRef=t++}}},1351:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var s=i(660)
async function r(e,t){const{data:i}=await Object(s.default)(e,{responseType:"image",...t})
return i}},1361:function(e,t,i){"use strict"
var s,r,n,a,o
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.FILL_VERTEX=1]="FILL_VERTEX",e[e.FILL_DD_VERTEX=2]="FILL_DD_VERTEX",e[e.FILL_INDEX=3]="FILL_INDEX",e[e.OUTLINE_VERTEX=4]="OUTLINE_VERTEX",e[e.OUTLINE_DD_VERTEX=5]="OUTLINE_DD_VERTEX",e[e.OUTLINE_INDEX=6]="OUTLINE_INDEX",e[e.LINE_VERTEX=7]="LINE_VERTEX",e[e.LINE_DD_VERTEX=8]="LINE_DD_VERTEX",e[e.LINE_INDEX=9]="LINE_INDEX",e[e.ICON_VERTEX=10]="ICON_VERTEX",e[e.ICON_DD_VERTEX=11]="ICON_DD_VERTEX",e[e.ICON_INDEX=12]="ICON_INDEX",e[e.TEXT_VERTEX=13]="TEXT_VERTEX",e[e.TEXT_DD_VERTEX=14]="TEXT_DD_VERTEX",e[e.TEXT_INDEX=15]="TEXT_INDEX",e[e.CIRCLE_VERTEX=16]="CIRCLE_VERTEX",e[e.CIRCLE_INDEX=17]="CIRCLE_INDEX"}(s||(s={})),function(e){e[e.FILL=1]="FILL",e[e.LINE=2]="LINE",e[e.SYMBOL=3]="SYMBOL",e[e.CIRCLE=4]="CIRCLE"}(r||(r={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.OPAQUE=1]="OPAQUE",e[e.TRANSLUCENT=2]="TRANSLUCENT",e[e.SYMBOLS=3]="SYMBOLS",e[e.HITTEST=4]="HITTEST"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.FILL=1]="FILL",e[e.OUTLINE=2]="OUTLINE",e[e.LINE=3]="LINE",e[e.ICON=4]="ICON",e[e.CIRCLE=5]="CIRCLE",e[e.TEXT=6]="TEXT",e[e.TILEINFO=7]="TILEINFO"}(a||(a={})),function(e){e[e.PAINTER_CHANGED=0]="PAINTER_CHANGED",e[e.LAYOUT_CHANGED=1]="LAYOUT_CHANGED",e[e.LAYER_CHANGED=2]="LAYER_CHANGED",e[e.LAYER_REMOVED=3]="LAYER_REMOVED",e[e.SPRITES_CHANGED=4]="SPRITES_CHANGED"}(o||(o={}))},1366:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a}))
var s=i(877),r=i(1079)
const n={geometry:[new r.a("a_pos",2,s.k.BYTE,0,2)]},a={geometry:[new r.a("a_pos",2,s.k.BYTE,0,4),new r.a("a_tex",2,s.k.BYTE,2,4)]},o={geometry:[new r.a("a_pos",2,s.k.UNSIGNED_SHORT,0,4)]}},1378:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return h})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return f})),i.d(t,"h",(function(){return d})),i.d(t,"i",(function(){return _})),i.d(t,"j",(function(){return m})),i.d(t,"k",(function(){return p}))
var s=i(1051),r=i(877),n=(i(1041),i(973))
function a(e,t,i="nearest",a=!1){var o
const l=!(a&&"u8"===t.pixelType),c=l?r.q.FLOAT:r.q.UNSIGNED_BYTE,h=null==t.pixels||0===t.pixels.length?null:l?t.getAsRGBAFloat():t.getAsRGBA(),u=null==(o=e.capabilities.textureFloat)?void 0:o.textureFloatLinear,d={width:t.width,height:t.height,target:r.A.TEXTURE_2D,pixelFormat:r.p.RGBA,internalFormat:e.type===s.a.WEBGL2&&l?r.v.RGBA32F:r.p.RGBA,samplingMode:!u||"bilinear"!==i&&"cubic"!==i?r.z.NEAREST:r.z.LINEAR,dataType:c,wrapMode:r.B.CLAMP_TO_EDGE,flipped:!1}
return new n.a(e,d,h)}function o(e,t){const{spacing:i,offsets:a,coefficients:o,size:[l,c]}=t,h=i[0]>1,u={width:h?4*l:l,height:c,target:r.A.TEXTURE_2D,pixelFormat:r.p.RGBA,internalFormat:e.type===s.a.WEBGL2?r.v.RGBA32F:r.p.RGBA,dataType:r.q.FLOAT,samplingMode:r.z.NEAREST,wrapMode:r.B.CLAMP_TO_EDGE,flipped:!1},d=new Float32Array(h?l*c*16:2*a.length)
if(h)for(let e=0,t=0;e<o.length;e++)d[t++]=o[e],e%3==2&&(d[t++]=1)
else for(let e=0;e<c;e++)for(let t=0;t<l;t++){const i=4*(e*l+t),s=2*(t*c+e)
d[i]=a[s],d[i+1]=a[s+1],d[i+3]=-1===a[s]?0:1}return new n.a(e,u,d)}function l(e,t){const i={width:t.length/4,height:1,target:r.A.TEXTURE_2D,pixelFormat:r.p.RGBA,internalFormat:r.p.RGBA,dataType:r.q.UNSIGNED_BYTE,samplingMode:r.z.NEAREST,wrapMode:r.B.CLAMP_TO_EDGE,flipped:!1}
return new n.a(e,i,t)}function c(e,t,i,s=1,r=!0,n=!1){return{u_flipY:r,u_isFloatTexture:n,u_applyTransform:!!e,u_opacity:s,u_transformSpacing:e?e.spacing:null,u_transformGridSize:e?e.size:null,u_targetImageSize:t,u_srcImageSize:i}}function h(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:null}}function u(e,t){return{u_scale:e,u_offset:t}}function d(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function f(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function _(e,t){const i=e.gl,s=t.glName,r=i.getProgramParameter(s,i.ACTIVE_UNIFORMS),n=new Map
let a
for(let e=0;e<r;e++)a=i.getActiveUniform(s,e),a&&n.set(a.name,{location:i.getUniformLocation(s,a.name),info:a})
return n}function p(e,t,i){Object.keys(i).forEach(s=>{const n=t.get(s)||t.get(s+"[0]")
n&&function(e,t,i,s){if(null===s||null==i)return!1
const{info:n}=s
switch(n.type){case r.C.FLOAT:n.size>1?e.setUniform1fv(t,i):e.setUniform1f(t,i)
break
case r.C.FLOAT_VEC2:e.setUniform2fv(t,i)
break
case r.C.FLOAT_VEC3:e.setUniform3fv(t,i)
break
case r.C.FLOAT_VEC4:e.setUniform4fv(t,i)
break
case r.C.FLOAT_MAT3:e.setUniformMatrix3fv(t,i)
break
case r.C.FLOAT_MAT4:e.setUniformMatrix4fv(t,i)
break
case r.C.INT:n.size>1?e.setUniform1iv(t,i):e.setUniform1i(t,i)
break
case r.C.BOOL:e.setUniform1i(t,i?1:0)
break
case r.C.INT_VEC2:case r.C.BOOL_VEC2:e.setUniform2iv(t,i)
break
case r.C.INT_VEC3:case r.C.BOOL_VEC3:e.setUniform3iv(t,i)
break
case r.C.INT_VEC4:case r.C.BOOL_VEC4:e.setUniform4iv(t,i)
break
default:
}}(e,s,i[s],n)})}function m(e,t,i,s){i.length===s.length&&(s.some(e=>null==e)||i.some(e=>null==e)||i.forEach((i,r)=>{t.setUniform1i(i,r),e.bindTexture(s[r],r)}))}},1379:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return s}))
const s={Base64:0,Hex:1,String:2,Raw:3}
function r(e,t){const i=(65535&e)+(65535&t)
return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function n(e,t,i,s,n,a){return r(function(e,t){return e<<t|e>>>32-t}(r(r(t,e),r(s,a)),n),i)}function a(e,t,i,s,r,a,o){return n(t&i|~t&s,e,t,r,a,o)}function o(e,t,i,s,r,a,o){return n(t&s|i&~s,e,t,r,a,o)}function l(e,t,i,s,r,a,o){return n(t^i^s,e,t,r,a,o)}function c(e,t,i,s,r,a,o){return n(i^(t|~s),e,t,r,a,o)}function h(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t
let i=1732584193,s=-271733879,n=-1732584194,h=271733878
for(let t=0;t<e.length;t+=16){const u=i,d=s,f=n,_=h
i=a(i,s,n,h,e[t+0],7,-680876936),h=a(h,i,s,n,e[t+1],12,-389564586),n=a(n,h,i,s,e[t+2],17,606105819),s=a(s,n,h,i,e[t+3],22,-1044525330),i=a(i,s,n,h,e[t+4],7,-176418897),h=a(h,i,s,n,e[t+5],12,1200080426),n=a(n,h,i,s,e[t+6],17,-1473231341),s=a(s,n,h,i,e[t+7],22,-45705983),i=a(i,s,n,h,e[t+8],7,1770035416),h=a(h,i,s,n,e[t+9],12,-1958414417),n=a(n,h,i,s,e[t+10],17,-42063),s=a(s,n,h,i,e[t+11],22,-1990404162),i=a(i,s,n,h,e[t+12],7,1804603682),h=a(h,i,s,n,e[t+13],12,-40341101),n=a(n,h,i,s,e[t+14],17,-1502002290),s=a(s,n,h,i,e[t+15],22,1236535329),i=o(i,s,n,h,e[t+1],5,-165796510),h=o(h,i,s,n,e[t+6],9,-1069501632),n=o(n,h,i,s,e[t+11],14,643717713),s=o(s,n,h,i,e[t+0],20,-373897302),i=o(i,s,n,h,e[t+5],5,-701558691),h=o(h,i,s,n,e[t+10],9,38016083),n=o(n,h,i,s,e[t+15],14,-660478335),s=o(s,n,h,i,e[t+4],20,-405537848),i=o(i,s,n,h,e[t+9],5,568446438),h=o(h,i,s,n,e[t+14],9,-1019803690),n=o(n,h,i,s,e[t+3],14,-187363961),s=o(s,n,h,i,e[t+8],20,1163531501),i=o(i,s,n,h,e[t+13],5,-1444681467),h=o(h,i,s,n,e[t+2],9,-51403784),n=o(n,h,i,s,e[t+7],14,1735328473),s=o(s,n,h,i,e[t+12],20,-1926607734),i=l(i,s,n,h,e[t+5],4,-378558),h=l(h,i,s,n,e[t+8],11,-2022574463),n=l(n,h,i,s,e[t+11],16,1839030562),s=l(s,n,h,i,e[t+14],23,-35309556),i=l(i,s,n,h,e[t+1],4,-1530992060),h=l(h,i,s,n,e[t+4],11,1272893353),n=l(n,h,i,s,e[t+7],16,-155497632),s=l(s,n,h,i,e[t+10],23,-1094730640),i=l(i,s,n,h,e[t+13],4,681279174),h=l(h,i,s,n,e[t+0],11,-358537222),n=l(n,h,i,s,e[t+3],16,-722521979),s=l(s,n,h,i,e[t+6],23,76029189),i=l(i,s,n,h,e[t+9],4,-640364487),h=l(h,i,s,n,e[t+12],11,-421815835),n=l(n,h,i,s,e[t+15],16,530742520),s=l(s,n,h,i,e[t+2],23,-995338651),i=c(i,s,n,h,e[t+0],6,-198630844),h=c(h,i,s,n,e[t+7],10,1126891415),n=c(n,h,i,s,e[t+14],15,-1416354905),s=c(s,n,h,i,e[t+5],21,-57434055),i=c(i,s,n,h,e[t+12],6,1700485571),h=c(h,i,s,n,e[t+3],10,-1894986606),n=c(n,h,i,s,e[t+10],15,-1051523),s=c(s,n,h,i,e[t+1],21,-2054922799),i=c(i,s,n,h,e[t+8],6,1873313359),h=c(h,i,s,n,e[t+15],10,-30611744),n=c(n,h,i,s,e[t+6],15,-1560198380),s=c(s,n,h,i,e[t+13],21,1309151649),i=c(i,s,n,h,e[t+4],6,-145523070),h=c(h,i,s,n,e[t+11],10,-1120210379),n=c(n,h,i,s,e[t+2],15,718787259),s=c(s,n,h,i,e[t+9],21,-343485551),i=r(i,u),s=r(s,d),n=r(n,f),h=r(h,_)}return[i,s,n,h]}function u(e,t=s.Hex){const i=t||s.Base64,r=h(function(e){const t=[]
for(let i=0,s=8*e.length;i<s;i+=8)t[i>>5]|=(255&e.charCodeAt(i/8))<<i%32
return t}(e),8*e.length)
switch(i){case s.Raw:return r
case s.Hex:return function(e){const t="0123456789abcdef",i=[]
for(let s=0,r=4*e.length;s<r;s++)i.push(t.charAt(e[s>>2]>>s%4*8+4&15)+t.charAt(e[s>>2]>>s%4*8&15))
return i.join("")}(r)
case s.String:return function(e){const t=[]
for(let i=0,s=32*e.length;i<s;i+=8)t.push(String.fromCharCode(e[i>>5]>>>i%32&255))
return t.join("")}(r)
case s.Base64:return function(e){const t=[]
for(let i=0,s=4*e.length;i<s;i+=3){const s=(e[i>>2]>>i%4*8&255)<<16|(e[i+1>>2]>>(i+1)%4*8&255)<<8|e[i+2>>2]>>(i+2)%4*8&255
for(let r=0;r<4;r++)8*i+6*r>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s>>6*(3-r)&63))}return t.join("")}(r)}}},1406:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r}))
const s=new(i(863).a)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"})
function r(e){return s.toJSON(e)}function n(e){const{bandCount:t,attributeTable:i,colormap:s,pixelType:r}=e.rasterInfo
return 1===t&&(null!=i||null!=s||"u8"===r||"s8"===r)}},1407:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var s=i(20),r=i(930),n=i(1020),a=i(1304)
class o extends a.a{constructor(e,t,i){super(e,i),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=null==i?void 0:i.geometryType,this._features=t}static fromFeatures(e,t){const{objectIdField:i,geometryType:s}=t,n=Object(r.c)([],e,s,!1,!1,i)
for(let t=0;t<n.length;t++)n[t].displayId=e[t].displayId
return o.fromOptimizedFeatures(n,t)}static fromFeatureSet(e,t){const i=Object(r.b)(e,t.objectIdField)
return o.fromOptimizedFeatureSet(i,t)}static fromOptimizedFeatureSet(e,t){const{features:i}=e,s=o.fromOptimizedFeatures(i,t)
s._exceededTransferLimit=e.exceededTransferLimit,s._transform=e.transform
for(const t of e.fields)"esriFieldTypeDate"===t.type&&s._dateFields.add(t.name)
return s}static fromOptimizedFeatures(e,t,i){const s=a.a.createInstance(),r=new o(s,e,t)
return r._transform=i,r}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(e){const t=new Set(e)
this._features=this._features.filter(e=>!t.has(e.objectId))}append(e){for(const t of e)this._features.push(t)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let e=""
for(const t in this._current.attributes)e+=this._current.attributes[t]
return e}getIndex(){return this._featureIndex}setIndex(e){this._featureIndex=e}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){this._current.displayId=e}getGroupId(){return this._current.groupId}setGroupId(e){this._current.groupId=e}copy(){const e=new o(this.instance,this._features,this.fullSchema())
return this.copyInto(e),e}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return Object(r.j)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const e=this.readGeometry()
return Object(r.l)(e,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const e=this.readCentroid()
return Object(s.j)(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}readGeometryArea(){return Object(n.c)(this._current)?Object(r.t)(this._current.geometry,2):0}readUnquantizedGeometry(){const e=this.readGeometry()
if("esriGeometryPoint"===this.geometryType||!e)return e
const t=e.clone()
return function({coords:e,lengths:t}){let i=0
for(const s of t){for(let t=1;t<s;t++)e[2*(i+t)]+=e[2*(i+t)-2],e[2*(i+t)+1]+=e[2*(i+t)-1]
i+=s}}(t),t}readHydratedGeometry(){const e=this._current.geometry
if(Object(s.j)(e))return null
const t=e.clone()
return Object(s.k)(this._transform)&&Object(r.A)(t,t,this.hasZ,this.hasM,this._transform),t}getXHydrated(){if(!Object(n.c)(this._current))return 0
const e=this._current.geometry.coords[0],t=this.getQuantizationTransform()
return Object(s.j)(t)?e:e*t.scale[0]+t.translate[0]}getYHydrated(){if(!Object(n.c)(this._current))return 0
const e=this._current.geometry.coords[1],t=this.getQuantizationTransform()
return Object(s.j)(t)?e:t.translate[1]-e*t.scale[1]}getX(){return Object(n.c)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return Object(n.c)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!Object(n.c)(this._current))return null
const e=this._current.geometry.clone()
if(e.isPoint)return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sy+this._ty,e
let t=0
for(const i of e.lengths)e.coords[2*t]=e.coords[2*t]*this._sx+this._tx,e.coords[2*t+1]=e.coords[2*t+1]*this._sy+this._ty,t+=i
return e}readCentroid(){if(!Object(n.c)(this._current))return null
if(Object(s.j)(this._current.centroid)){const e=this._computeCentroid()
if(Object(s.j)(e))return null
e.coords[0]=(e.coords[0]-this._tx)/this._sx,e.coords[1]=(e.coords[1]-this._ty)/this._sy,this._current.centroid=e}const e=this._current.centroid.clone()
return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sx+this._ty,e}hasField(e){return e in this._current.attributes||this.getFieldNames().map(e=>e.toLowerCase()).includes(e.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(e,t){const i=this._current.attributes[e]
if(void 0!==i)return null!=i&&t&&this._dateFields.has(e)?new Date(i):i
const s=this.readAttributes(),r=e.toLocaleLowerCase().trim()
for(const e in s)if(e.toLocaleLowerCase().trim()===r){const i=this._current.attributes[e]
return null!=i&&t&&this._dateFields.has(e)?new Date(i):i}}copyInto(e){super.copyInto(e),e._featureIndex=this._featureIndex,e._transform=this._transform,e._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}},1424:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return c}))
var s=i(1177),r=i(869),n=i(1367)
function a(e){if(!e)return null
switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers
return t&&1===t.length?a(t[0]):null}case"CIMVectorMarker":{var t
const i=e.markerGraphics
if(!i||1!==i.length)return null
const s=i[0]
if(!s)return null
const r=s.geometry
if(!r)return null
const n=s.symbol
return!n||"CIMPolygonSymbol"!==n.type&&"CIMLineSymbol"!==n.type||null!=(t=n.symbolLayers)&&t.some(e=>!!e.effects)?null:{geom:r,asFill:"CIMPolygonSymbol"===n.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function o(e){let t=1/0,i=-1/0,s=1/0,r=-1/0
for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<s&&(s=e[1]),e[1]>r&&(r=e[1])
return[t,s,i,r]}function l(e){return e?e.rings?o(e.rings):e.paths?o(e.paths):Object(r.d)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,i,s,r){const[n,a,o,l]=e
if(o<n||l<a)return[0,0,0]
const c=o-n,h=l-a,u=Math.floor(31.5),d=(128-2*(u+1))/Math.max(c,h),f=Math.round(c*d)+2*u,_=Math.round(h*d)+2*u
let p=1
t&&(p=_/d/(t.ymax-t.ymin))
let m=0,g=0
if(s)if(r){if(t&&i&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin)
m=s.x/(i*e),g=s.y/i}}else m=s.x,g=s.y
return m=.5*(t.xmax+t.xmin)+m*(t.xmax-t.xmin),g=.5*(t.ymax+t.ymin)+g*(t.ymax-t.ymin),m-=n,g-=a,m*=d,g*=d,m+=u,g+=u,[p,m/f-.5,-(g/_-.5)]}function h(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),i=function(e){let t=1/0,i=-1/0,s=1/0,r=-1/0
for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<s&&(s=e[1]),e[1]>r&&(r=e[1])
return new n.a(t,s,i-t,r-s)}(t),s=Math.floor(31.5),r=(128-2*(s+1))/Math.max(i.width,i.height),a=Math.round(i.width*r)+2*s,o=Math.round(i.height*r)+2*s,l=[]
for(const n of t)if(n&&n.length>1){const t=[]
for(const a of n){let[n,o]=a
n-=i.x,o-=i.y,n*=r,o*=r,n+=s-.5,o+=s-.5,e.asFill?t.push([n,o]):t.push([Math.round(n),Math.round(o)])}if(e.asFill){const e=t.length-1
t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}l.push(t)}const c=function(e,t,i,s){const r=t*i,n=new Array(r),a=s*s+1
for(let e=0;e<r;++e)n[e]=a
for(const r of e){const e=r.length
for(let a=1;a<e;++a){const e=r[a-1],o=r[a]
let l,c,h,u
e[0]<o[0]?(l=e[0],c=o[0]):(l=o[0],c=e[0]),e[1]<o[1]?(h=e[1],u=o[1]):(h=o[1],u=e[1])
let d=Math.floor(l)-s,f=Math.floor(c)+s,_=Math.floor(h)-s,p=Math.floor(u)+s
d<0&&(d=0),f>t&&(f=t),_<0&&(_=0),p>i&&(p=i)
const m=o[0]-e[0],g=o[1]-e[1],b=m*m+g*g
for(let s=d;s<f;s++)for(let r=_;r<p;r++){let a,l,c=(s-e[0])*m+(r-e[1])*g
c<0?(a=e[0],l=e[1]):c>b?(a=o[0],l=o[1]):(c/=b,a=e[0]+c*m,l=e[1]+c*g)
const h=(s-a)*(s-a)+(r-l)*(r-l),u=(i-r-1)*t+s
h<n[u]&&(n[u]=h)}}}for(let e=0;e<r;++e)n[e]=Math.sqrt(n[e])
return n}(l,a,o,s)
return e.asFill&&function(e,t,i,s,r){for(const n of e){const e=n.length
for(let a=1;a<e;++a){const e=n[a-1],o=n[a]
let l,c,h,u
e[0]<o[0]?(l=e[0],c=o[0]):(l=o[0],c=e[0]),e[1]<o[1]?(h=e[1],u=o[1]):(h=o[1],u=e[1])
let d=Math.floor(l),f=Math.floor(c)+1,_=Math.floor(h),p=Math.floor(u)+1
d<s&&(d=s),f>t-s&&(f=t-s),_<s&&(_=s),p>i-s&&(p=i-s)
for(let n=_;n<p;++n){if(e[1]>n==o[1]>n)continue
const a=(i-n-1)*t
for(let t=d;t<f;++t)t<(o[0]-e[0])*(n-e[1])/(o[1]-e[1])+e[0]&&(r[a+t]=-r[a+t])
for(let e=s;e<d;++e)r[a+e]=-r[a+e]}}}}(l,a,o,s,c),[u(c,s),a,o]}function u(e,t){const i=2*t,r=e.length,n=new Uint8Array(4*r)
for(let t=0;t<r;++t){const r=.5-e[t]/i
Object(s.a)(r,n,4*t)}return n}},1433:function(e,t,i){"use strict"
function s(e){const t=e.toLowerCase().split(" ").join("-")
switch(t){case"serif":return"noto-serif"
case"sans-serif":return"arial-unicode-ms"
case"monospace":return"ubuntu-mono"
case"fantasy":return"cabin-sketch"
case"cursive":return"redressed"
default:return t}}function r(e){const t=function(e){if(!e.weight)return""
switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return""
switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e)
return s(e.family)+(t.length>0?t:"-regular")}i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))},1443:function(e,t,i){"use strict"
function s(e,t,i,s){const r=e.clone(),n=1<<r.level,a=r.col+t,o=r.row+i
return s&&a<0?(r.col=a+n,r.world-=1):a>=n?(r.col=a-n,r.world+=1):r.col=a,r.row=o,r}i.d(t,"a",(function(){return s})),i(1478)},1444:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return c}))
var s,r,n=i(891),a=i(1203),o=i(1236)
class l{constructor(e,t,i){this.ratio=e,this.x=t,this.y=i}}class c{constructor(e,t,i,s=8,r=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=s,this.pixelMargin=r,this.tileSize=n.P*s,this.dz=e,this.yPos=t,this.xPos=i}setPixelMargin(e){e!==this.pixelMargin&&(this.pixelMargin=e,this.setExtent(this._extent))}setExtent(e){this._extent=e,this.finalRatio=this.tileSize/e*(1<<this.dz)
let t=this.pixelRatio*this.pixelMargin
t/=this.finalRatio
const i=e>>this.dz
t>i&&(t=i),this.margin=t,this.xmin=i*this.xPos-t,this.ymin=i*this.yPos-t,this.xmax=this.xmin+i+2*t,this.ymax=this.ymin+i+2*t}reset(e){this.type=e,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(e,t){this._pushLine(),this._prevIsIn=this._isIn(e,t),this._moveTo(e,t,this._prevIsIn),this._prevPt=new a.b(e,t),this._firstPt=new a.b(e,t),this._dist=0}lineTo(e,t){const i=this._isIn(e,t),s=new a.b(e,t),r=a.b.distance(this._prevPt,s)
let n,o,c,h,u,d,f,_
if(i)this._prevIsIn?this._lineTo(e,t,!0):(n=this._prevPt,o=s,c=this._intersect(o,n),this.start=this._dist+r*(1-this._r),this._lineTo(c.x,c.y,!0),this._lineTo(o.x,o.y,!0))
else if(this._prevIsIn)o=this._prevPt,n=s,c=this._intersect(o,n),this._lineTo(c.x,c.y,!0),this._lineTo(n.x,n.y,!1)
else{const e=this._prevPt,t=s
if(e.x<=this.xmin&&t.x<=this.xmin||e.x>=this.xmax&&t.x>=this.xmax||e.y<=this.ymin&&t.y<=this.ymin||e.y>=this.ymax&&t.y>=this.ymax)this._lineTo(t.x,t.y,!1)
else{const i=[]
if((e.x<this.xmin&&t.x>this.xmin||e.x>this.xmin&&t.x<this.xmin)&&(h=(this.xmin-e.x)/(t.x-e.x),_=e.y+h*(t.y-e.y),_<=this.ymin?d=!1:_>=this.ymax?d=!0:i.push(new l(h,this.xmin,_))),(e.x<this.xmax&&t.x>this.xmax||e.x>this.xmax&&t.x<this.xmax)&&(h=(this.xmax-e.x)/(t.x-e.x),_=e.y+h*(t.y-e.y),_<=this.ymin?d=!1:_>=this.ymax?d=!0:i.push(new l(h,this.xmax,_))),(e.y<this.ymin&&t.y>this.ymin||e.y>this.ymin&&t.y<this.ymin)&&(h=(this.ymin-e.y)/(t.y-e.y),f=e.x+h*(t.x-e.x),f<=this.xmin?u=!1:f>=this.xmax?u=!0:i.push(new l(h,f,this.ymin))),(e.y<this.ymax&&t.y>this.ymax||e.y>this.ymax&&t.y<this.ymax)&&(h=(this.ymax-e.y)/(t.y-e.y),f=e.x+h*(t.x-e.x),f<=this.xmin?u=!1:f>=this.xmax?u=!0:i.push(new l(h,f,this.ymax))),0===i.length)u?d?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):d?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0)
else if(i.length>1&&i[0].ratio>i[1].ratio)this.start=this._dist+r*i[1].ratio,this._lineTo(i[1].x,i[1].y,!0),this._lineTo(i[0].x,i[0].y,!0)
else{this.start=this._dist+r*i[0].ratio
for(let e=0;e<i.length;e++)this._lineTo(i[e].x,i[e].y,!0)}this._lineTo(t.x,t.y,!1)}}this._dist+=r,this._prevIsIn=i,this._prevPt=s}close(){if(this.line.length>2){const e=this._firstPt,t=this._prevPt
e.x===t.x&&e.y===t.y||this.lineTo(e.x,e.y)
const i=this.line
let s=i.length
for(;s>=4&&(i[0].x===i[1].x&&i[0].x===i[s-2].x||i[0].y===i[1].y&&i[0].y===i[s-2].y);)i.pop(),i[0].x=i[s-2].x,i[0].y=i[s-2].y,--s}}result(e=!0){return this._pushLine(),0===this.lines.length?null:(this.type===a.a.Polygon&&e&&u.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(this.type!==a.a.LineString)throw new Error("Only valid for lines")
this._pushLine()
const e=this.lines,t=e.length
if(0===t)return null
const i=[]
for(let s=0;s<t;s++)i.push({line:e[s],start:this.starts[s]||0})
return i}_isIn(e,t){return e>=this.xmin&&e<=this.xmax&&t>=this.ymin&&t<=this.ymax}_intersect(e,t){let i,s,r
if(t.x>=this.xmin&&t.x<=this.xmax)s=t.y<=this.ymin?this.ymin:this.ymax,r=(s-e.y)/(t.y-e.y),i=e.x+r*(t.x-e.x)
else if(t.y>=this.ymin&&t.y<=this.ymax)i=t.x<=this.xmin?this.xmin:this.xmax,r=(i-e.x)/(t.x-e.x),s=e.y+r*(t.y-e.y)
else{s=t.y<=this.ymin?this.ymin:this.ymax,i=t.x<=this.xmin?this.xmin:this.xmax
const n=(i-e.x)/(t.x-e.x),a=(s-e.y)/(t.y-e.y)
n<a?(r=n,s=e.y+n*(t.y-e.y)):(r=a,i=e.x+a*(t.x-e.x))}return this._r=r,new a.b(i,s)}_pushLine(){this.line&&(this.type===a.a.Point?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===a.a.LineString?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===a.a.Polygon&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(e,t,i){this.type!==a.a.Polygon?i&&(e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new a.b(e,t))):(i||(e<this.xmin&&(e=this.xmin),e>this.xmax&&(e=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new a.b(e,t)),this._is_h=!1,this._is_v=!1)}_lineTo(e,t,i){let s,r
if(this.type!==a.a.Polygon)if(i){if(e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(s=this.line[this.line.length-1],s.equals(e,t)))return
this.line.push(new a.b(e,t))}else this.line&&this.line.length>0&&this._pushLine()
else if(i||(e<this.xmin&&(e=this.xmin),e>this.xmax&&(e=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){s=this.line[this.line.length-1]
const i=s.x===e,n=s.y===t
if(i&&n)return
this._is_h&&i||this._is_v&&n?(s.x=e,s.y=t,r=this.line[this.line.length-2],r.x===e&&r.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(r=this.line[this.line.length-2],this._is_h=r.x===e,this._is_v=r.y===t)):(this._is_h=r.x===e,this._is_v=r.y===t)):(this.line.push(new a.b(e,t)),this._is_h=i,this._is_v=n)}else this.line.push(new a.b(e,t))}}class h{setExtent(e){this._ratio=4096===e?1:4096/e}get validateTessellation(){return this._ratio<1}reset(e){this.lines=[],this.line=null}moveTo(e,t){this.line&&this.lines.push(this.line),this.line=[]
const i=this._ratio
this.line.push(new a.b(e*i,t*i))}lineTo(e,t){const i=this._ratio
this.line.push(new a.b(e*i,t*i))}close(){const e=this.line
e&&!e[0].isEqual(e[e.length-1])&&e.push(e[0])}result(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}(r=s||(s={}))[r.sideLeft=0]="sideLeft",r[r.sideRight=1]="sideRight",r[r.sideTop=2]="sideTop",r[r.sideBottom=3]="sideBottom"
class u{static simplify(e,t,i){if(!i)return
const r=-t,n=e+t,a=-t,o=e+t,l=[],c=[],h=i.length
for(let e=0;e<h;++e){const t=i[e]
if(!t||t.length<2)continue
let h,u=t[0]
const d=t.length
for(let i=1;i<d;++i)h=t[i],u.x===h.x&&(u.x<=r&&(u.y>h.y?(l.push(e),l.push(i),l.push(s.sideLeft),l.push(-1)):(c.push(e),c.push(i),c.push(s.sideLeft),c.push(-1))),u.x>=n&&(u.y<h.y?(l.push(e),l.push(i),l.push(s.sideRight),l.push(-1)):(c.push(e),c.push(i),c.push(s.sideRight),c.push(-1)))),u.y===h.y&&(u.y<=a&&(u.x<h.x?(l.push(e),l.push(i),l.push(s.sideTop),l.push(-1)):(c.push(e),c.push(i),c.push(s.sideTop),c.push(-1))),u.y>=o&&(u.x>h.x?(l.push(e),l.push(i),l.push(s.sideBottom),l.push(-1)):(c.push(e),c.push(i),c.push(s.sideBottom),c.push(-1)))),u=h}if(0===l.length||0===c.length)return
u.fillParent(i,c,l),u.fillParent(i,l,c)
const d=[]
u.calcDeltas(d,c,l),u.calcDeltas(d,l,c),u.addDeltas(d,i)}static fillParent(e,t,i){const r=i.length,n=t.length
for(let a=0;a<n;a+=4){const n=t[a],l=t[a+1],c=t[a+2],h=e[n][l-1],u=e[n][l]
let d=8092,f=-1
for(let t=0;t<r;t+=4){if(i[t+2]!==c)continue
const r=i[t],n=i[t+1],a=e[r][n-1],l=e[r][n]
switch(c){case s.sideLeft:case s.sideRight:if(Object(o.a)(h.y,a.y,l.y)&&Object(o.a)(u.y,a.y,l.y)){const e=Math.abs(l.y-a.y)
e<d&&(d=e,f=t)}break
case s.sideTop:case s.sideBottom:if(Object(o.a)(h.x,a.x,l.x)&&Object(o.a)(u.x,a.x,l.x)){const e=Math.abs(l.x-a.x)
e<d&&(d=e,f=t)}}}t[a+3]=f}}static calcDeltas(e,t,i){const s=t.length
for(let r=0;r<s;r+=4){const s=[],n=u.calcDelta(r,t,i,s)
e.push(t[r]),e.push(t[r+1]),e.push(t[r+2]),e.push(n)}}static calcDelta(e,t,i,s){const r=t[e+3]
if(-1===r)return 0
const n=s.length
return n>1&&s[n-2]===r?0:(s.push(r),u.calcDelta(r,i,t,s)+1)}static addDeltas(e,t){const i=e.length
let r=0
for(let t=0;t<i;t+=4){const i=e[t+3]
i>r&&(r=i)}for(let n=0;n<i;n+=4){const i=t[e[n]],a=e[n+1],o=r-e[n+3]
switch(e[n+2]){case s.sideLeft:i[a-1].x-=o,i[a].x-=o,1===a&&(i[i.length-1].x-=o),a===i.length-1&&(i[0].x-=o)
break
case s.sideRight:i[a-1].x+=o,i[a].x+=o,1===a&&(i[i.length-1].x+=o),a===i.length-1&&(i[0].x+=o)
break
case s.sideTop:i[a-1].y-=o,i[a].y-=o,1===a&&(i[i.length-1].y-=o),a===i.length-1&&(i[0].y-=o)
break
case s.sideBottom:i[a-1].y+=o,i[a].y+=o,1===a&&(i[i.length-1].y+=o),a===i.length-1&&(i[0].y+=o)}}}}},1445:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f}))
var s=i(969),r=i(891)
function n(e,t){return e.x===t.x&&e.y===t.y}function a(e,t){return e.x=t.y,e.y=-t.x,e}function o(e,t){return e.x=-t.y,e.y=t.x,e}function l(e,t){return e.x=t.x,e.y=t.y,e}function c(e,t){return e.x=-t.x,e.y=-t.y,e}function h(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function u(e,t){return e.x*t.x+e.y*t.y}function d(e,t,i,s){return e.x=t.x*i+t.y*s,e.y=t.x*s-t.y*i,e}class f{constructor(e,t,i){this.writeVertex=e,this.writeTriangle=t,this.canUseThinTessellation=i,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(e,t){(function(e){if(!e)return
const t=e.length
if(t<=1)return
let i=0
for(let s=1;s<t;s++)n(e[s],e[i])||++i===s||(e[i]=e[s])
e.length=i+1})(e),this.canUseThinTessellation&&t.halfWidth<r.O&&!t.offset?this._tessellateThin(e,t):this._tessellate(e,t)}_tessellateThin(e,t){if(e.length<2)return
const i=t.wrapDistance||65535
let s=t.initialDistance||0,r=!1,n=e[0].x,a=e[0].y
const o=e.length
for(let t=1;t<o;++t){r&&(r=!1,s=0)
let o=e[t].x,l=e[t].y,c=o-n,h=l-a,u=Math.sqrt(c*c+h*h)
if(c/=u,h/=u,s+u>i){r=!0
const e=(i-s)/u
u=i-s,o=(1-e)*n+e*o,l=(1-e)*a+e*l,--t}const d=this.writeVertex(n,a,0,0,c,h,h,-c,0,-1,s),f=this.writeVertex(n,a,0,0,c,h,-h,c,0,1,s)
s+=u
const _=this.writeVertex(o,l,0,0,c,h,h,-c,0,-1,s),p=this.writeVertex(o,l,0,0,c,h,-h,c,0,1,s)
this.writeTriangle(d,f,_),this.writeTriangle(f,_,p),n=o,a=l}}_tessellate(e,t){const i=e[0],r=e[e.length-1],f=n(i,r),_=f?3:2
if(e.length<_)return
const p=t.pixelCoordRatio,m=null!=t.capType?t.capType:s.d.BUTT,g=null!=t.joinType?t.joinType:s.o.MITER,b=null!=t.miterLimit?Math.min(t.miterLimit,4):2,y=null!=t.roundLimit?Math.min(t.roundLimit,1.05):1.05,x=null!=t.halfWidth?t.halfWidth:2,v=!!t.textured
let O,w,T=null,E=null
const S=this.prevNormal,R=this.nextNormal
let M=-1,F=-1
const C=this.joinNormal
let j,A
const B=this.textureNormalLeft,I=this.textureNormalRight,P=this.textureNormal
let D=-1,L=-1
const z=t.wrapDistance||65535
let N=t.initialDistance||0
const k=this.writeVertex,U=this.writeTriangle,G=function(e,t,i,s,r,n){const a=k(O,w,j,A,i,s,e,t,r,n,N)
return D>=0&&L>=0&&a>=0&&U(D,L,a),D=L,L=a,a}
f&&(T=e[e.length-2],R.x=r.x-T.x,R.y=r.y-T.y,F=h(R),R.x/=F,R.y/=F)
let V=!1
for(let t=0;t<e.length;++t){if(V&&(V=!1,N=0),T&&(S.x=-R.x,S.y=-R.y,M=F,N+M>z&&(V=!0)),V){const i=(z-N)/M
M=z-N,T={x:(1-i)*T.x+i*e[t].x,y:(1-i)*T.y+i*e[t].y},--t}else T=e[t]
O=T.x,w=T.y
const i=t<=0&&!V,r=t===e.length-1
if(i||(N+=M),E=r?f?e[1]:null:e[t+1],E?(R.x=E.x-O,R.y=E.y-w,F=h(R),R.x/=F,R.y/=F):(R.x=void 0,R.y=void 0),!f){if(i){o(C,R),j=C.x,A=C.y,m===s.d.SQUARE&&(G(-R.y-R.x,R.x-R.y,R.x,R.y,0,-1),G(R.y-R.x,-R.x-R.y,R.x,R.y,0,1)),m===s.d.ROUND&&(G(-R.y-R.x,R.x-R.y,R.x,R.y,-1,-1),G(R.y-R.x,-R.x-R.y,R.x,R.y,-1,1)),m!==s.d.ROUND&&m!==s.d.BUTT||(G(-R.y,R.x,R.x,R.y,0,-1),G(R.y,-R.x,R.x,R.y,0,1))
continue}if(r){a(C,S),j=C.x,A=C.y,m!==s.d.ROUND&&m!==s.d.BUTT||(G(S.y,-S.x,-S.x,-S.y,0,-1),G(-S.y,S.x,-S.x,-S.y,0,1)),m===s.d.SQUARE&&(G(S.y-S.x,-S.x-S.y,-S.x,-S.y,0,-1),G(-S.y-S.x,S.x-S.y,-S.x,-S.y,0,1)),m===s.d.ROUND&&(G(S.y-S.x,-S.x-S.y,-S.x,-S.y,1,-1),G(-S.y-S.x,S.x-S.y,-S.x,-S.y,1,1))
continue}}let n,_,k=(X=R,-((W=S).x*X.y-W.y*X.x))
if(Math.abs(k)<.01)u(S,R)>0?(C.x=S.x,C.y=S.y,k=1,n=Number.MAX_VALUE,_=!0):(o(C,R),k=1,n=1,_=!1)
else{C.x=(S.x+R.x)/k,C.y=(S.y+R.y)/k,n=h(C)
const e=(n-1)*x*p
_=n>4||e>M&&e>F}j=C.x,A=C.y
let U=g
switch(g){case s.o.BEVEL:n<1.05&&(U=s.o.MITER)
break
case s.o.ROUND:n<y&&(U=s.o.MITER)
break
case s.o.MITER:n>b&&(U=s.o.BEVEL)}switch(U){case s.o.MITER:if(G(C.x,C.y,-S.x,-S.y,0,-1),G(-C.x,-C.y,-S.x,-S.y,0,1),r)break
if(v){const e=V?0:N
D=this.writeVertex(O,w,j,A,R.x,R.y,C.x,C.y,0,-1,e),L=this.writeVertex(O,w,j,A,R.x,R.y,-C.x,-C.y,0,1,e)}break
case s.o.BEVEL:{const e=k<0
let t,i,s,n
if(e){const e=D
D=L,L=e,t=B,i=I}else t=I,i=B
if(_)s=e?o(this.innerPrev,S):a(this.innerPrev,S),n=e?a(this.innerNext,R):o(this.innerNext,R)
else{const t=e?c(this.inner,C):l(this.inner,C)
s=t,n=t}const h=e?a(this.bevelStart,S):o(this.bevelStart,S)
G(s.x,s.y,-S.x,-S.y,t.x,t.y)
const u=G(h.x,h.y,-S.x,-S.y,i.x,i.y)
if(r)break
const f=e?o(this.bevelEnd,R):a(this.bevelEnd,R)
if(_){const e=this.writeVertex(O,w,j,A,-S.x,-S.y,0,0,0,0,N)
D=this.writeVertex(O,w,j,A,R.x,R.y,n.x,n.y,t.x,t.y,N),L=this.writeVertex(O,w,j,A,R.x,R.y,f.x,f.y,i.x,i.y,N),this.writeTriangle(u,e,L)}else{if(v){const e=this.bevelMiddle
e.x=(h.x+f.x)/2,e.y=(h.y+f.y)/2,d(P,e,-S.x,-S.y),G(e.x,e.y,-S.x,-S.y,P.x,P.y),d(P,e,R.x,R.y),D=this.writeVertex(O,w,j,A,R.x,R.y,e.x,e.y,P.x,P.y,N),L=this.writeVertex(O,w,j,A,R.x,R.y,n.x,n.y,t.x,t.y,N)}else{const e=D
D=L,L=e}G(f.x,f.y,R.x,R.y,i.x,i.y)}if(e){const e=D
D=L,L=e}break}case s.o.ROUND:{const e=k<0
let t,i
if(e){const e=D
D=L,L=e,t=B,i=I}else t=I,i=B
const s=e?c(this.inner,C):l(this.inner,C)
let h,f
_?(h=e?o(this.innerPrev,S):a(this.innerPrev,S),f=e?a(this.innerNext,R):o(this.innerNext,R)):(h=s,f=s)
const p=e?a(this.roundStart,S):o(this.roundStart,S),m=e?o(this.roundEnd,R):a(this.roundEnd,R),g=G(h.x,h.y,-S.x,-S.y,t.x,t.y),b=G(p.x,p.y,-S.x,-S.y,i.x,i.y)
if(r)break
const y=this.writeVertex(O,w,j,A,-S.x,-S.y,0,0,0,0,N)
_||this.writeTriangle(D,L,y)
const x=c(this.outer,s),T=this.writeVertex(O,w,j,A,R.x,R.y,m.x,m.y,i.x,i.y,N)
let E,M
const F=n>2
if(F){let t
n!==Number.MAX_VALUE?(x.x/=n,x.y/=n,t=u(S,x),t=(n*(t*t-1)+1)/t):t=-1,E=e?a(this.startBreak,S):o(this.startBreak,S),E.x+=S.x*t,E.y+=S.y*t,M=e?o(this.endBreak,R):a(this.endBreak,R),M.x+=R.x*t,M.y+=R.y*t}d(P,x,-S.x,-S.y)
const z=this.writeVertex(O,w,j,A,-S.x,-S.y,x.x,x.y,P.x,P.y,N)
d(P,x,R.x,R.y)
const U=v?this.writeVertex(O,w,j,A,R.x,R.y,x.x,x.y,P.x,P.y,N):z,V=y,W=v?this.writeVertex(O,w,j,A,R.x,R.y,0,0,0,0,N):y
let X=-1,H=-1
if(F&&(d(P,E,-S.x,-S.y),X=this.writeVertex(O,w,j,A,-S.x,-S.y,E.x,E.y,P.x,P.y,N),d(P,M,R.x,R.y),H=this.writeVertex(O,w,j,A,R.x,R.y,M.x,M.y,P.x,P.y,N)),v?F?(this.writeTriangle(V,b,X),this.writeTriangle(V,X,z),this.writeTriangle(W,U,H),this.writeTriangle(W,H,T)):(this.writeTriangle(V,b,z),this.writeTriangle(W,U,T)):F?(this.writeTriangle(y,b,X),this.writeTriangle(y,X,H),this.writeTriangle(y,H,T)):(this.writeTriangle(y,b,z),this.writeTriangle(y,U,T)),_?(D=this.writeVertex(O,w,j,A,R.x,R.y,f.x,f.y,t.x,t.y,N),L=T):(D=v?this.writeVertex(O,w,j,A,R.x,R.y,f.x,f.y,t.x,t.y,N):g,this.writeTriangle(D,W,T),L=T),e){const e=D
D=L,L=e}break}}}var W,X}}},1446:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return c}))
var s=i(20),r=i(876),n=i(1e3),a=i(891),o=i(908),l=i(1303)
function c(e,t){if(!e||!t)return e
switch(t){case"radius":case"distance":return 2*e
case"diameter":case"width":return e
case"area":return Math.sqrt(e)}return e}function h(e){return e.map(e=>function(e){return{value:e.value,size:Object(r.k)(e.size)}}(e))}function u(e){if("string"==typeof e||"number"==typeof e)return Object(r.k)(e)
const t=e
return{type:"size",expression:t.expression,stops:h(t.stops)}}const d=e=>{const t=[],i=[],s=h(e),n=s.length
for(let e=0;e<6;e++){const o=s[Math.min(e,n-1)]
t.push(o.value),i.push(null==o.size?a.x:Object(r.h)(o.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}}
function f(e){const t=e&&e.length>0?{}:null,i=t?{}:null
if(!t)return{vvFields:t,vvRanges:i}
for(const s of e)if(s.field&&(t[s.type]=s.field),"size"===s.type){i.size||(i.size={})
const e=s
switch(Object(l.a)(e)){case o.e.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:u(e.minSize),maxSize:u(e.maxSize)}
break
case o.e.SIZE_SCALE_STOPS:i.size.scaleStops={stops:h(e.stops)}
break
case o.e.SIZE_FIELD_STOPS:if(e.levels){const t={}
for(const i in e.levels)t[i]=d(e.levels[i])
i.size.fieldStops={type:"level-dependent",levels:t}}else i.size.fieldStops={type:"static",...d(e.stops)}
break
case o.e.SIZE_UNIT_VALUE:i.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===s.type)i.color=m(s)
else if("opacity"===s.type)i.opacity=_(s)
else if("rotation"===s.type){const e=s
i.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:i}}function _(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]}
if("string"==typeof e.field){if(!e.stops)return null
{if(e.stops.length>8)return null
const i=e.stops
for(let e=0;e<8;++e){const s=i[Math.min(e,i.length-1)]
t.values[e]=s.value,t.opacities[e]=s.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null
{const i=e.stops&&e.stops.length>=0&&e.stops[0].opacity
for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=i}}return t}function p(e,t,i){e[4*t+0]=i.r/255,e[4*t+1]=i.g/255,e[4*t+2]=i.b/255,e[4*t+3]=i.a}function m(e){if(Object(s.j)(e))return null
if(e.normalizationField)return null
const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
if("string"==typeof e.field){if(!e.stops)return null
{if(e.stops.length>8)return null
t.field=e.field
const i=e.stops
for(let e=0;e<8;++e){const s=i[Math.min(e,i.length-1)]
t.values[e]=s.value,p(t.colors,e,s.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null
{const i=e.stops&&e.stops.length>=0&&e.stops[0].color
for(let e=0;e<8;e++)t.values[e]=1/0,p(t.colors,e,i)}}for(let e=0;e<32;e+=4)Object(n.b)(t.colors,e,!0)
return t}},1464:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o}))
var s=i(177),r=i(876)
const n=s.a.getLogger("esri.renderers.visualVariables.support.utils"),a=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e
const t=e.clone(),i=t.visualVariables.map(e=>l(e)?c(e):e)
return t.visualVariables=i,t}
function o(e){return e.map(e=>l(e)?c(e.clone()):e)}function l(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function c(e){return e.stops=function(e,t){return t.length<=8?t:(n.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...s]=t,n=s.pop(),a=s[0].value,o=s[s.length-1].value,l=(o-a)/6,c=[]
for(let i=a;i<o;i+=l){let n=0
for(;i>=s[n].value;)n++
const a=s[n],o=t[n-1],l=i-o.value,u=a.value===o.value?1:l/(a.value-o.value)
if("color"===e){const e=s[n],r=t[n-1],a=e.color.clone()
a.r=h(r.color.r,a.r,u),a.g=h(r.color.g,a.g,u),a.b=h(r.color.b,a.b,u),a.a=h(r.color.a,a.a,u),c.push({value:i,color:a,label:e.label})}else if("size"===e){const e=s[n],a=t[n-1],o=Object(r.k)(e.size),l=h(Object(r.k)(a.size),o,u)
c.push({value:i,size:l,label:e.label})}else{const e=s[n],r=h(t[n-1].opacity,e.opacity,u)
c.push({value:i,opacity:r,label:e.label})}}return[i,...c,n]}(e,t):function(e){const[t,...i]=e,s=i.pop()
for(;i.length>6;){let e=0,t=0
for(let s=1;s<i.length;s++){const r=i[s-1],n=i[s],a=Math.abs(n.value-r.value)
a>t&&(t=a,e=s)}i.splice(e,1)}return[t,...i,s]}(t))}(e.type,e.stops),e}function h(e,t,i){return(1-i)*e+i*t}},1467:function(e,t,i){"use strict"
i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return x})),i.d(t,"c",(function(){return v})),i.d(t,"d",(function(){return T}))
var s,r=i(354),n=i(77),a=i(177),o=i(20),l=i(1379),c=i(1085),h=i(1233),u=i(856),d=i(178),f=i(858),_=(i(859),i(857)),p=i(864),m=i(1019)
let g=s=class extends c.a{writeLevels(e,t,i){for(const i in e){const e=this.levels[i]
return void(t.stops=e)}}clone(){return new s({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(m.e)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(m.e)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:Object(d.a)(this.levels)})}}
Object(u.a)([Object(f.b)()],g.prototype,"levels",void 0),Object(u.a)([Object(p.a)("levels")],g.prototype,"writeLevels",null),g=s=Object(u.a)([Object(_.a)("esri.views.2d.engine.LevelDependentSizeVariable")],g)
const b=a.a.getLogger("esri.views.2d.layers.support.clusterUtils")
n.a.add("esri-cluster-arcade-enabled",!0)
const y=Object(n.a)("esri-cluster-arcade-enabled"),x=(e,t,i,s)=>{const r=t.clone()
if(!T(r))return r
if(i.fields)for(const t of i.fields)E(e,t)
if("visualVariables"in r){const t=(r.visualVariables||[]).filter(e=>"$view.scale"!==e.valueExpression),n=v(t)
t.forEach(t=>{"rotation"===t.type?t.field?t.field=R(e,t.field,"avg_angle"):t.valueExpression&&(t.field=S(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=R(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=R(e,t.field,"avg"):(t.field=S(e,t.valueExpression,"avg"),t.valueExpression=null)}),Object(o.j)(n)&&!O(t)&&(t.push(w(i,s)),r.dynamicClusterSize=!0),r.visualVariables=t}switch(r.type){case"simple":break
case"unique-value":r.field?r.field=R(e,r.field,"mode"):r.valueExpression&&(r.field=S(e,r.valueExpression,"mode"),r.valueExpression=null)
break
case"class-breaks":r.normalizationField?(r.field=R(e,r.field,"norm",r.normalizationField),r.normalizationField=null):r.field?r.field=R(e,r.field,"avg"):(r.field=S(e,r.valueExpression,"avg"),r.valueExpression=null)}return r},v=e=>{for(const t of e)if("size"===t.type)return t
return null},O=e=>{for(const t of e)if("cluster_count"===t.field)return!0
return!1},w=(e,t)=>{const i=[new h.a({value:0,size:0}),new h.a({value:1})]
if(Object(o.j)(t))return new c.a({field:"cluster_count",stops:[...i,new h.a({value:2,size:0})]})
const s=Object.keys(t).reduce((s,r)=>({...s,[r]:[...i,new h.a({value:Math.max(2,t[r].minValue),size:e.clusterMinSize}),new h.a({value:Math.max(3,t[r].maxValue),size:e.clusterMaxSize})]}),{})
return new g({field:"cluster_count",levels:s})},T=e=>{const t=t=>b.error(new r.a("Unsupported-renderer",t,{renderer:e}))
if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType
if("field"!==i)return t("FeatureReductionCluster does not support a normalizationType of "+i),!1}}else if("simple"!==e.type)return t("FeatureReductionCluster does not support renderers of type "+e.type),!1
if(!y){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1
if(("visualVariables"in e&&e.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0}
function E(e,t){const{name:i,outStatistic:s}=t,{onStatisticField:n,onStatisticValueExpression:a,statisticType:o}=s
if(a){const t=Object(l.a)(a.toLowerCase())
e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:a,statisticType:o}})}else n?e.push({name:i,outStatistic:{onStatisticField:n,statisticType:o}}):b.error(new r.a("mapview-unsupported-field","Unable to handle field",{field:t}))}function S(e,t,i){const s=Object(l.a)(t),r="mode"===i?"cluster_type_"+s:"cluster_avg_"+s
return e.some(e=>e.name===r)||e.push({name:r,outStatistic:{onStatisticField:s,onStatisticValueExpression:t,statisticType:i}}),r}function R(e,t,i,s){if("cluster_count"===t||e.some(e=>e.name===t))return t
const r=function(e,t,i){switch(e){case"avg":case"avg_angle":return"cluster_avg_"+t
case"mode":return"cluster_type_"+t
case"norm":{const e=i,s="field",r=t.toLowerCase()+",norm:"+s+","+e.toLowerCase()
return"cluster_avg_"+Object(l.a)(r)}}}(i,t,s)
return e.some(e=>e.name===r)||("norm"===i?e.push({name:r,outStatistic:{onStatisticField:t,onStatisticNormalizationField:s,statisticType:i}}):e.push({name:r,outStatistic:{onStatisticField:t,statisticType:i}})),r}},1485:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var s=i(884),r=i(943),n=i(904),a=i(869),o=i(1033),l=i(872)
function c(e){if(!e)return null
let t=null
const i=e.spatialReference,s=Object(l.e)(i)
if(!s)return"toJSON"in e?e.toJSON():e
const c=Object(l.p)(i)?102100:4326,d=o.a[c].maxX,f=o.a[c].minX,_=o.a[c].plus180Line,g=o.a[c].minus180Line
let b
const y="toJSON"in e?e.toJSON():e
if(Object(a.f)(y))b=u(y,d,f)
else if(Object(a.e)(y))y.points=y.points.map(e=>u(e,d,f)),b=y
else if(Object(a.d)(y))b=h(y,s)
else if(Object(a.g)(y)||Object(a.h)(y)){const e=m
Object(r.a)(e,y)
const i={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},s=Object(o.d)(i.xmin,f)*(2*d),a=0===s?y:function(e,t){const i=Object(o.b)(e)
for(const e of i)for(const i of e)i[0]+=t
return e}(y,s)
i.xmin+=s,i.xmax+=s,Object(n.b)(i,_)&&i.xmax!==d||Object(n.b)(i,g)&&i.xmin!==f?t=a:b=a}else b=y
return null!==t?(new p).cut(t,d):b}function h(e,t){if(!t)return e
const i=function(e,t){const i=[],{ymin:s,ymax:r}=e,n=e.xmax-e.xmin,a=e.xmin,o=e.xmax
let l
const[c,h]=t.valid
l=d(e.xmin,t)
const u=l.x,_=l.frameId
l=d(e.xmax,t)
const p=l.x,m=l.frameId,g=u===p&&n>0
if(n>2*h){const e={xmin:a<o?u:p,ymin:s,xmax:h,ymax:r},t={xmin:c,ymin:s,xmax:a<o?p:u,ymax:r},n={xmin:0,ymin:s,xmax:h,ymax:r},l={xmin:c,ymin:s,xmax:0,ymax:r},d=[],g=[]
f(e,n)&&d.push(_),f(e,l)&&g.push(_),f(t,n)&&d.push(m),f(t,l)&&g.push(m)
for(let e=_+1;e<m;e++)d.push(e),g.push(e)
i.push({extent:e,frameIds:[_]},{extent:t,frameIds:[m]},{extent:n,frameIds:d},{extent:l,frameIds:g})}else u>p||g?i.push({extent:{xmin:u,ymin:s,xmax:h,ymax:r},frameIds:[_]},{extent:{xmin:c,ymin:s,xmax:p,ymax:r},frameIds:[m]}):i.push({extent:{xmin:u,ymin:s,xmax:p,ymax:r},frameIds:[_]})
return i}(e,t).map(e=>e.extent)
return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map(e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]])}}function u(e,t,i){if(Array.isArray(e)){const s=e[0]
if(s>t){const i=Object(o.d)(s,t)
e[0]=s+i*(-2*t)}else if(s<i){const t=Object(o.d)(s,i)
e[0]=s+t*(-2*i)}}else{const s=e.x
if(s>t){const i=Object(o.d)(s,t)
e.x+=i*(-2*t)}else if(s<i){const t=Object(o.d)(s,i)
e.x+=t*(-2*i)}}return e}function d(e,t){const[i,s]=t.valid,r=2*s
let n,a=0
return e>s?(n=Math.ceil(Math.abs(e-s)/r),e-=n*r,a=n):e<i&&(n=Math.ceil(Math.abs(e-i)/r),e+=n*r,a=-n),{x:e,frameId:a}}function f(e,t){const{xmin:i,ymin:s,xmax:r,ymax:n}=t
return _(e,i,s)&&_(e,i,n)&&_(e,r,n)&&_(e,r,s)}function _(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}class p{cut(e,t){let i
if(e.rings)this.closed=!0,i=e.rings,this.minPts=4
else{if(!e.paths)return null
this.closed=!1,i=e.paths,this.minPts=2}const s=i.length,r=-2*t
for(let e=0;e<s;e++){const t=i[e]
if(t&&t.length>=this.minPts){const e=[]
for(const i of t)e.push([i[0]+r,i[1]])
i.push(e)}}return this.closed?e.rings=i:e.paths=i,e}}const m=Object(s.m)()},1486:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h}))
var s=i(1147),r=i(978),n=i(1025),a=i(919),o=i(1042),l=i(891),c=i(1277)
class h extends c.a{constructor(e,t,i){super(e,t,i,l.P,l.P)}destroy(){super.destroy(),this._transforms&&h.TransformCache.release(this.key.hash)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,[l,c]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*i,u=this.height/this.rangeY*i
Object(r.o)(n,h,0,0,0,u,0,l,c,1),Object(r.l)(this.transforms.dvs,e.displayViewMat3,n)
const d=this.transforms.labelMat2d,f=e.getScreenTransform(d,t),_=Object(o.a)()
Object(a.t)(_,[this.x,this.y],f),Object(s.a)(d,_),Object(s.f)(d,e.viewMat2d,d)}_createTransforms(){return h.TransformCache.acquire(this.key.hash)}}h.TransformCache=new class{acquire(e){return{refCount:1,version:-1,labelMat2d:Object(n.b)(),tileMat3:Object(n.b)(),dvs:Object(n.b)()}}release(e){}}},1487:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var s=i(20),r=i(891)
const n=2147483647
class a{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,i=e.byteLength/o.BYTES_PER_RECORD-t){const s=new o(new Int32Array(e,t*o.BYTES_PER_RECORD,i*o.ELEMENTS_PER_RECORD))
return new a(s)}size(){let e=this._cursor,t=0
for(;e;)t+=e.size(),e=e._link
return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e
for(this._cursor=this._head;this._cursor;){const e=this._cursor.size()
if(t<e)return this._cursor._index=t,!0
t-=e,this._cursor=this._cursor._link}return!1}forEach(e){const t=this.getCursor()
for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head)
let t=this._head
for(;t._link;)t=t._link
t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1
this._cursor=this._cursor._link}return!!this._cursor}copy(){var e
const t=new a(null==(e=this._head)?void 0:e.copy())
if(!t._head)return t
let i=t._head,s=t._head._link
for(;s;)i._link=s.copy(),i=s,s=i._link
return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var e
return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}delete(e){let t=this._head,i=null
for(;t;){if(t.delete(e))return t.isEmpty()&&(Object(s.k)(i)&&(i._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0
i=t,t=t._link}return!1}}a.ELEMENTS_PER_RECORD=r.n,a.BYTES_PER_RECORD=a.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT
class o{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,i=e.byteLength/this.BYTES_PER_RECORD-t){return new o(new Int32Array(e,t*this.BYTES_PER_RECORD,i*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,i=this.lookup(e)
if(i)for(this.id=n,++this._deletedCount;this.next()&&this.id===e;)this.id=n,++this._deletedCount
return this._index=t,i}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(Object(s.j)(this._offsets.instance)){this._offsets.instance=new Map
const e=this.copy()
e._index=-1
let t=0
for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._index),t=e.id)}if(!this._offsets.instance.has(e))return!1
const t=this._index
return this._index=this._offsets.instance.get(e),this.id!==n||(this._index=t,!1)}get id(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*o.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*o.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/o.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===n;);return this._index<this.size()}peekId(){const e=(this._index+1)*o.ELEMENTS_PER_RECORD
return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new o(this._packedRecords)
return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}o.ELEMENTS_PER_RECORD=r.n,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT},1488:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h}))
var s=i(354),r=i(177),n=i(1046),a=i(907),o=i(1235),l=i(1160)
const c=r.a.getLogger("esri/views/2d/engine/webgl/util/Matcher")
async function h(e,t,i,s){switch(e.type){case"simple":return u.fromBasicRenderer(e,t,i,s)
case"map":return _.fromUVRenderer(e,t,i,s)
case"interval":return f.fromCBRenderer(e,t,i,s)
case"dictionary":return g.fromDictionaryRenderer(e,t,i,s)
case"subtype":return d.fromSubtypes(e,t,i,s)}}class u{constructor(){this.type="feature",this._defaultResult=null}static async fromBasicRenderer(e,t,i,s){const r=new u
if(e.symbol){const n=await Object(l.b)(e.symbol,i,s),a=t.createTemplateGroup(n,null)
r.setDefault(a)}return r}size(){return 1}getDefault(){return this._defaultResult}setDefault(e){this._defaultResult=e}match(e,t,i,s,r){return this.getDefault()}async analyze(e,t,i,s,r,n){return null}}class d extends u{constructor(e,t){super(),this._subMatchers=e,this._subtypeField=t}static async fromSubtypes(e,t,i,s){const r=new Map,n=[]
for(const a in e.renderers){const o=parseInt(a,10),l=h(e.renderers[a],t,i,s).then(e=>r.set(o,e))
n.push(l)}return await Promise.all(n),new d(r,e.subtypeField)}match(e,t,i,s,r){const n=t.readAttribute(this._subtypeField),a=this._subMatchers.get(n)
return a?a.match(e,t,i,s,r):null}}class f extends u{constructor(e,t,i,s){super(),this.type="interval",this._intervals=[],this._isMaxInclusive=t,this._fieldIndex=s,this._field=e,this._normalizationInfo=i}static async fromCBRenderer(e,t,i,s){const{isMaxInclusive:r,normalizationField:n,normalizationTotal:a,normalizationType:o}=e,c=e.field,h=new f(c,r,{normalizationField:n,normalizationTotal:a,normalizationType:o},e.fieldIndex),u=await Object(l.b)(e.backgroundFillSymbol,i,s)
await Promise.all(e.intervals.map(async e=>{const r=await Object(l.b)(e.symbol,i,s),n=await t.createTemplateGroup(r,u),a={min:e.min,max:e.max}
h.add(a,n)}))
const d=await Object(l.b)(e.defaultSymbol,i,s)
if(d){const e=await t.createTemplateGroup(d,u)
h.setDefault(e)}return h}add(e,t){this._intervals.push({interval:e,result:t}),this._intervals.sort((e,t)=>e.interval.min-t.interval.min)}size(){return super.size()+this._intervals.length}match(e,t,i,s,r){if(null==this._fieldIndex&&!this._field)return this.getDefault()
const n=null!=this._fieldIndex?t.getComputedNumericAtIndex(this._fieldIndex):this._getValueFromField(t)
if(!n&&(null==n||isNaN(n)))return this.getDefault()
for(let e=0;e<this._intervals.length;e++){const{interval:t,result:i}=this._intervals[e],s=n>=t.min,r=this._isMaxInclusive?n<=t.max:n<t.max
if(s&&r)return i}return this.getDefault()}_needsNormalization(){const e=this._normalizationInfo
return e&&(e.normalizationField||e.normalizationTotal||e.normalizationType)}_getValueFromField(e){const t=e.readAttribute(this._field)
if(!this._needsNormalization()||null==t)return t
const{normalizationField:i,normalizationTotal:s,normalizationType:r}=this._normalizationInfo,n=!!i&&e.readAttribute(i)
if(r)switch(r){case"esriNormalizeByField":return n?t/n:void 0
case"esriNormalizeByLog":return Math.log(t)*Math.LOG10E
case"esriNormalizeByPercentOfTotal":return t/s*100
default:return void c.error("Found unknown normalization type: "+r)}else c.error("Normalization is required, but no type was set!")}}class _ extends u{constructor(e,t,i){super(),this.type="map",this._nullResult=null,this._resultsMap=new Map,this._fieldsIndex=i,this._fields=e,this._seperator=t||""}static async fromUVRenderer(e,t,i,s){const r=e.fieldDelimiter,n=[e.field]
e.field2&&n.push(e.field2),e.field3&&n.push(e.field3)
const a=await Object(l.b)(e.backgroundFillSymbol,i,s),o=new _(n,r,e.fieldIndex)
await Promise.all(e.map.map(async e=>{const r=await Object(l.b)(e.symbol,i,s),n=await t.createTemplateGroup(r,a)
"<Null>"===e.value?o.setNullResult(n):o.add(e.value,n)}))
const c=await Object(l.b)(e.defaultSymbol,i,s)
if(c){const e=await t.createTemplateGroup(c,a)
o.setDefault(e)}return o}setNullResult(e){this._nullResult=e}add(e,t){this._resultsMap.set(e.toString(),t)}size(){return super.size()+this._resultsMap.size}match(e,t,i,s,r){if(null==this._fieldsIndex&&!this._fields)return this.getDefault()
const n=null!=this._fieldsIndex?t.getComputedStringAtIndex(this._fieldsIndex):this._getValueFromFields(t)
if(null!==this._nullResult&&(null==n||""===n||"<Null>"===n))return this._nullResult
if(!n&&null==n)return this.getDefault()
const a=n.toString()
return this._resultsMap.has(a)?this._resultsMap.get(a):this.getDefault()}_getValueFromFields(e){const t=[]
for(const i of this._fields){const s=e.readAttribute(i)
null==s||""===s?t.push("<Null>"):t.push(s)}return t.join(this._seperator)}}let p
async function m(){return p||(p=i.e(439).then(i.bind(null,1120))),p}class g extends u{constructor(e,t,i,s,r,a){super(),this.type="dictionary",this._groupIdCache=new n.a(100),this._loader=e,this._fieldMap=e.fieldMap,this._symbolFields=e.getSymbolFields(),this._templates=t,this._info=i,this._scaleFn=s,this._schemaUtilsModule=r,this._symbolOptions=a}static async fromDictionaryRenderer(e,t,s,r){const[{DictionaryLoader:n},l]=await Promise.all([i.e(341).then(i.bind(null,1073)),m()]),c=new n(e.url,e.config,e.fieldMap)
await c.fetchResources({spatialReference:s.spatialReference,fields:s.fields})
const h=await async function(e,t){const i=e||1
if("number"==typeof i)return(e,t,s)=>i
const s=await Object(a.d)(i,t.spatialReference,t.fields)
return(e,i,r)=>Object(o.a)(s,e,{$view:r},t.geometryType,i)||1}(e.scaleExpression,s)
return new g(c,t,s,h,l,e.symbolOptions)}async _analyzeFeature(e,t,i,r,n){const a=e.readLegacyFeature(),o=this._scaleFn(a,i,r),h=this._attributeHash(a)+"-"+o,u=this._groupIdCache.get(h)
if(u)return u
const d={...r,spatialReference:this._info.spatialReference,abortOptions:n,fields:this._info.fields},f=await this._loader.getSymbolAsync(a,d),_=this._schemaUtilsModule.createSymbolSchema(f,this._symbolOptions),p=Object(l.b)(_,this._info,t,n).then(e=>{if("expanded-cim"!==e.type)return c.error(new s.a("mapview-bad-type",`Found unexpected type ${e.type} in dictionary response`)),null
e.hash+="-"+o
for(const t of e.layers)t.scaleFactor=o,t.templateHash+="-"+o
return this._templates.createTemplateGroup(e,null)})
return this._groupIdCache.put(h,p,1),p}async analyze(e,t,i,s,r,n){const a=t.getCursor(),o=[]
for(;a.next();)o.push(this._analyzeFeature(a,i,s,r,n))
return Promise.all(o)}match(e,t,i,s,r){return null}_attributeHash(e){let t=""
for(const i of this._symbolFields){const s=this._fieldMap[i]
s&&(t+=e.attributes[s]+"-")}return t}}},1489:function(e,t,i){"use strict"
i.d(t,"a",(function(){return O}))
var s=i(354),r=i(77),n=i(177),a=i(874),o=i(20),l=i(861),c=i(1077),h=i(1016),u=i(891),d=i(1074),f=i(942),_=i(1310),p=i(1446),m=i(877)
const g=n.a.getLogger("esri.views.layers.2d.features.support.AttributeStore"),b=Object(_.b)(_.a,g),y={sharedArrayBuffer:Object(r.a)("esri-shared-array-buffer"),atomics:Object(r.a)("esri-atomics")}
function x(e,t){return i=>t(e(i))}class v{constructor(e,t,i,s){this.size=0,this.texelSize=4
const{pixelType:r,layout:n,textureOnly:a}=s
this.textureOnly=a||!1,this.pixelType=r,this._ctype=t,this.layout=n,this._resetRange(),this._shared=e,this.size=i,a||(this.data=this._initData(r,i,e,t))}get buffer(){return Object(o.b)(this.data,e=>e.buffer)}unsetComponentAllTexels(e,t){const i=Object(o.t)(this.data)
for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+e]&=~t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(e,t){const i=Object(o.t)(this.data)
for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+e]|=255&t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(e,t,i){const s=Object(o.t)(this.data)
for(const r of i)s[r*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(e,t,i){Object(o.t)(this.data)[i*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}unsetComponentTexel(e,t,i){Object(o.t)(this.data)[i*this.texelSize+e]&=~t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}getData(e,t){const i=Object(d.f)(e)
return Object(o.t)(this.data)[i*this.texelSize+t]}setData(e,t,i){const s=Object(d.f)(e),r=1<<t
0!=(this.layout&r)?(this.data[s*this.texelSize+t]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)):g.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===m.q.UNSIGNED_BYTE&&this._shared&&y.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===m.q.UNSIGNED_BYTE&&this._shared&&y.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(e){if(this.size=e,!this.textureOnly){const t=this._initData(this.pixelType,e,this._shared,this._ctype),i=Object(o.t)(this.data)
t.set(i),this.data=t}}toMessage(){const e=this.dirtyStart,t=this.dirtyEnd,i=this.texelSize
if(e>t)return null
this._resetRange()
const s=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,a=Object(o.t)(this.data)
return{start:e,end:t,data:s&&a.slice(e*i,(t+1)*i)||null,pixelType:r,layout:n}}_initData(e,t,i,s){const r=i&&"local"!==s?SharedArrayBuffer:ArrayBuffer,n=Object(f.l)(e),a=new n(new r(t*t*4*n.BYTES_PER_ELEMENT))
for(let e=0;e<a.length;e+=4)a[e+1]=255
return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class O{constructor(e,t){this._client=e,this.config=t,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(u.v),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set
const i=t.supportsTextureFloat?m.q.FLOAT:m.q.UNSIGNED_BYTE
b(`Creating AttributeStore ${y.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:m.q.UNSIGNED_BYTE,layout:1},{pixelType:m.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:m.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}update(e,t){this.config=t
const i=t.schema.processors[0].storage,s=Object(c.a)(this._schema,i)
if((e.targets.feature||e.targets.aggregate)&&(e.storage.data=!0),s&&(Object(r.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",s),e.storage.data=!0,this._schema=i,this._attributeComputeMap.clear(),!Object(o.j)(i))){switch(i.target){case"feature":this._targetType=d.c
break
case"aggregate":this._targetType=d.b}if("subtype"===i.type)for(const e in i.mapping){const t=i.mapping[e]
if(Object(o.k)(t))for(const e of t.mapping)this._bindAttribute(e)}else for(const e of i.mapping)this._bindAttribute(e)}}onTileData(e,t){if(Object(o.j)(t.addOrUpdate))return
const i=t.addOrUpdate.getCursor()
for(;i.next();){const e=i.getDisplayId()
this.setAttributeData(e,i)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}async setHighlight(e,t){const i=this._getBlock(0),s=t.map(e=>Object(d.f)(e))
i.lock(),i.unsetComponentAllTexels(0,1),i.setComponent(0,1,s),i.unlock(),this._idsToHighlight.clear()
for(const t of e)this._idsToHighlight.add(t)
await this.sendUpdates()}async updateFilters(e,t){const{config:i,service:s,spatialReference:n}=t,{filters:a}=i,o=a.map((e,t)=>this._updateFilter(e,t,s,n));(await Promise.all(o)).some(e=>e)&&(e.storage.filters=!0,Object(r.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(e,t,i,s){const r=Object(d.f)(e)
this._ensureSizeForTexel(r),this._getBlock(t).setData(e,i,s)}getData(e,t,i){return this._getBlock(t).getData(e,i)}getHighlightFlag(e){return this._idsToHighlight.has(e)?u.s:0}unsetAttributeData(e){const t=Object(d.f)(e)
this._getBlock(0).setData(t,0,0)}setAttributeData(e,t){const i=Object(d.f)(e)
if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(t)),this._targetType!==Object(d.g)(e))return
const s=this._attributeComputeMap,r=this.config.supportsTextureFloat?1:2
s.size&&s.forEach((e,s)=>{const n=s*r%4,o=Math.floor(s*r/4),l=this._getBlock(o+u.e),c=e(t)
if(this.config.supportsTextureFloat)l.setData(i,n,c)
else if(c===u.x)l.setData(i,n,255),l.setData(i,n+1,255)
else{const e=Object(a.f)(Math.round(c),-32767,32766)+32768,t=255&e,s=(65280&e)>>8
l.setData(i,n,t),l.setData(i,n+1,s)}})}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise
if(this._currUpdate)return this._nextUpdate=Object(l.g)(),this._nextUpdate.promise
const e={blocks:this._blocks.map(e=>Object(o.k)(e)?e.toMessage():null)}
return this._currUpdate=this._createResources().then(()=>{const t=()=>{if(this._currUpdate=null,this._nextUpdate){const e=this._nextUpdate
this._nextUpdate=null,this.sendUpdates().then(()=>e.resolve())}},i=this._client.update(e,this._signal).then(t).catch(t)
return this._client.render(this._signal),i}).catch(e=>Object(l.m)(e)?(this._createResourcesPromise=null,this._createResources()):(g.error(new s.a("mapview-attribute-store","Encountered an error during client update",e)),Promise.resolve())),this._currUpdate}_ensureSizeForTexel(e){for(;e>=this._size*this._size;)if(this._expand())return}_bindAttribute(e){let t
if(null!=e.fieldIndex)e.normalizationField&&g.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),t=t=>t.getComputedNumericAtIndex(e.fieldIndex)
else{if(!e.field)return
t=e.normalizationField?t=>{const i=t.readAttribute(e.normalizationField)
return i?t.readAttribute(e.field)/i:null}:t=>t.readAttribute(e.field)}e.valueRepresentation&&(t=x(t,t=>Object(p.b)(t,e.valueRepresentation))),this._attributeComputeMap.set(e.binding,x(t,e=>null===e||isNaN(e)||e===1/0?u.x:e))}_createResources(){if(Object(o.k)(this._createResourcesPromise))return this._createResourcesPromise
this._getBlock(u.a),this._getBlock(u.d),b("Initializing AttributeStore")
const e={shared:y.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:Object(o.m)(this._blocks,e=>({textureOnly:e.textureOnly,buffer:e.buffer,pixelType:e.pixelType}))},t=this._client.initialize(e,this._signal).catch(e=>{Object(l.m)(e)?this._createResourcesPromise=null:g.error(new s.a("mapview-attribute-store","Encountered an error during client initialization",e))})
return this._createResourcesPromise=t,t.then(()=>Object(o.j)(this._createResourcesPromise)?this._createResources():void 0),t}_getBlock(e){const t=this._blocks[e]
if(Object(o.k)(t))return t
b("Initializing AttributeBlock at index "+e)
const i=y.sharedArrayBuffer,s=this._client.type,r=new v(i,s,this._size,this._blockDescriptors[e])
return this._blocks[e]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const e=this._size<<=1
return b("Expanding block size to",e,this._blocks),Object(o.h)(this._blocks,t=>t.expand(e)),this._createResourcesPromise=null,this._size=e,0}return g.error(new s.a("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(e,t,i,s){const r=this._filters[t],n=Object(o.k)(r)&&r.hash
if(!r&&!e)return!1
if(n===JSON.stringify(e))return!1
if(Object(o.j)(e)){if(!r)return!1
const e=1<<t+1,i=this._getBlock(0)
return this._filters[t]=null,i.setComponentAllTexels(0,e),this.sendUpdates(),!0}const a=await this._getFilter(t,i)
return await a.update(e,s),!0}async _getFilter(e,t){const s=this._filters[e]
if(Object(o.k)(s))return s
const{default:r}=await i.e(176).then(i.bind(null,1734)),n=new r({geometryType:t.geometryType,hasM:!1,hasZ:!1,timeInfo:t.timeInfo,fieldsIndex:new h.a(t.fields)})
return this._filters[e]=n,n}isVisible(e){return!!(2&this._getBlock(0).getData(e,0))}getFilterFlags(e){let t=0
const i=Object(d.e)(e.getDisplayId())
for(let s=0;s<this._filters.length;s++){const r=!!(i&1<<s),n=this._filters[s]
t|=(!r||Object(o.j)(n)||n.check(e)?1:0)<<s}let s=0
if(this._idsToHighlight.size){const t=e.getObjectId()
s=this.getHighlightFlag(t)}return t<<1|s}}},1490:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var s=i(856),r=i(1010),n=i(858),a=(i(353),i(77),i(859),i(857))
const o=e=>{let t=class extends(Object(r.b)(e)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}}
return Object(s.a)([Object(n.b)()],t.prototype,"graphics",void 0),Object(s.a)([Object(n.b)()],t.prototype,"renderer",void 0),Object(s.a)([Object(n.b)()],t.prototype,"updating",void 0),Object(s.a)([Object(n.b)()],t.prototype,"view",void 0),t=Object(s.a)([Object(a.a)("esri.views.layers.GraphicsView")],t),t}},1494:function(e,t,i){"use strict"
i.d(t,"a",(function(){return We}))
var s=i(856),r=i(862),n=i(1251),a=i(912),o=i(77),l=i(20),c=i(861),h=i(858),u=(i(353),i(859),i(857)),d=i(659),f=i(884),_=i(916),p=i(869),m=i(1485),g=i(872),b=i(1140),y=i(1179),x=i(1094),v=i(891)
class O{constructor(){this._dirties=[{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1}]}hasDirty(){return this._dirties.some(e=>-1!==e.indexCount||e.allDirty)}markAllClean(){for(const e of this._dirties)e.indexFrom=-1,e.indexCount=-1,e.vertexFrom=-1,e.vertexCount=-1,e.allDirty=!1}markAllDirty(){for(const e of this._dirties)e.allDirty=!0}forEach(e){for(let t=0;t<this._dirties.length;++t){const{indexCount:i,indexFrom:s,vertexCount:r,vertexFrom:n,allDirty:a}=this._dirties[t],o={}
let l,c=!1;(a||-1!==n&&r>0)&&(o.geometry={count:r,from:n,allDirty:a},c=!0),(a||-1!==s&&i>0)&&(l={count:i,from:s,allDirty:a},c=!0),c&&e({indices:l,vertices:o},t)}}markDirtyIndices(e,t,i){const s=this._dirties[e],r=t,n=i
if(!s.allDirty)if(-1!==s.indexCount){const e=Math.min(s.indexFrom,r),t=Math.max(s.indexFrom+s.indexCount,r+n)-e
s.indexFrom=e,s.indexCount=t}else s.indexFrom=r,s.indexCount=n}markDirtyVertices(e,t,i,s){const r=this._dirties[e],n=i,a=s
if(!r.allDirty)if(-1!==r.vertexCount){const e=Math.min(r.vertexFrom,n),t=Math.max(r.vertexFrom+r.vertexCount,n+a)-e
r.vertexFrom=e,r.vertexCount=t}else r.vertexFrom=n,r.vertexCount=a}}class w{constructor(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}get largestRange(){return this._largestRange}rangeCreated(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}rangeResized(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}findBestRange(e){let t=this._parent._freeHead,i=null
for(;null!==t;)t.count>=e&&(!i||t.count-e<i.count-e)&&(i=t),t=t.next
return i}findAdjacentRanges(e,t){let i=!0,s=!1,r=null,n=this._parent._freeHead
for(;i&&!s;){const a=null!==r?r.from+r.count:0,o=null!==n?n.from:this._parent._size
e>=a&&e+t<=o?(i=!1,s=!0):null!==n?(r=n,n=n.next):i=!1}return[r,n]}_updateLargestRange(){let e=null,t=this._parent._freeHead
for(;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next
this._largestRange=e}}class T{constructor(e,t){this._allocated=0,this._size=e,this._freeHead=e>0?{from:0,count:e,prev:null,next:null}:null,this._bookKeeper=t||new w(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}allocate(e){const t=this._bookKeeper.findBestRange(e)
if(null===t)return-1
const i=t.from,s=t.count
if(t.from+=e,t.count-=e,this._bookKeeper.rangeResized(t,i,s),this._allocated+=e,0===t.count){const e=null!==t.prev?this._freeHead:t.next
T._removeRange(t),this._freeHead=e}return i}free(e,t){const[i,s]=this._bookKeeper.findAdjacentRanges(e,t),r={from:e,count:t,prev:i,next:s}
if(null!==i&&(i.next=r),null!==s&&(s.prev=r),this._bookKeeper.rangeCreated(r),this._allocated-=t,null!==s&&r.from+r.count===s.from){const e=r.from,t=r.count
T._fuse(r,s),T._removeRange(s),this._bookKeeper.rangeResized(r,e,t),this._bookKeeper.rangeResized(s,void 0,0)}if(null!==i&&i.from+i.count===r.from){const e=i.from,t=i.count
T._fuse(i,r),T._removeRange(r),this._bookKeeper.rangeResized(i,e,t),this._bookKeeper.rangeResized(r,void 0,0)}this._freeHead=null!==r.prev?this._freeHead:r}get fragmentation(){const e=this._size-this._allocated
return 0===e?0:1-this._bookKeeper.largestRange.count/e}static _removeRange(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)}static _fuse(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)}}var E=i(942)
const S=["FILL","LINE","MARKER","TEXT","LABEL"]
class R{constructor(e,t,i,s){this._strides=e,this._displayList=t,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=i
for(const t in e){this._freeListsAndStorage[t]={vtxFreeList:s?new T(s):null,idxFreeList:s?new T(s):null,vertexBuffers:{},indexBuffer:s?new Uint32Array(s):null}
for(const i in e[t])this._freeListsAndStorage[t].vertexBuffers[i]={data:s?Object(E.b)(s,e[t][i]):null,stride:e[t][i]}}}static fromTileData(e,t){const i=function(e){const t=e.getStrides(),i={}
for(let e=0;e<t.length;e++)i[S[e]]=t[e]
return i}(e),s=[0,0,0,0,0],r=[0,0,0,0,0],n=e.tileDisplayData.displayObjects
for(const e of n)for(const t of e.displayRecords)s[t.geometryType]=Math.max(s[t.geometryType],t.vertexFrom+t.vertexCount),r[t.geometryType]=Math.max(r[t.geometryType],t.indexFrom+t.indexCount)
const a=new R(i,e.tileDisplayData.displayList,t,null)
for(let t=0;t<e.tileBufferData.geometries.length;++t){const i=s[t],n=r[t],o=e.tileBufferData.geometries[t],l=S[t],c=a._storageFor(l),h=e.tileBufferData.geometries[t].indexBuffer
let u
c.indexBuffer=h,c.idxFreeList=new T(h.length),c.idxFreeList.allocate(n)
for(const i in o.vertexBuffer){const s=e.tileBufferData.geometries[t].vertexBuffer[i]
c.vertexBuffers[i].data=s.data,c.vertexBuffers[i].stride=s.stride
const r=Object(E.A)(s.stride),n=s.data.length*r/s.stride
u||(u=n)}c.vtxFreeList=new T(u),c.vtxFreeList.allocate(i)}return a}delete(e){const t=S[e.geometryType]
this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0}setMeshData(e,t,i,s,r){const n=S[e.geometryType]
let a,o
e.meshData=null,void 0===e.vertexFrom?(o=t.vertexCount,a=this._allocateVertices(n,o)):t.vertexCount>e.vertexCount?(this._freeVertices(n,e.vertexFrom,e.vertexCount),o=t.vertexCount,a=this._allocateVertices(n,o)):t.vertexCount===e.vertexCount?(a=e.vertexFrom,o=e.vertexCount):(this._freeVertices(n,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),a=e.vertexFrom,o=t.vertexCount)
let l,c,h,u=!0
if(void 0===e.indexFrom?(l=r,h=t.indexCount,c=this._allocateIndices(n,h)):t.indexCount>e.indexCount?(l=this._displayList.removeFromList(e),this._freeIndices(n,e.indexFrom,e.indexCount),h=t.indexCount,c=this._allocateIndices(n,h)):t.indexCount===e.indexCount?(u=!1,c=e.indexFrom,h=e.indexCount):(l=this._displayList.removeFromList(e),this._freeIndices(n,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),c=e.indexFrom,h=t.indexCount),-1!==a&&-1!==c){const r=this._storageFor(n)
if(Object(E.e)(a,c,r.vertexBuffers,r.indexBuffer,t,i,s),e.vertexFrom=a,e.indexFrom=c,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,e.vertexFrom,e.vertexCount)}return u&&this._displayList.addToList(e,l),!0}return-1!==a&&this._freeVertices(n,a,o),-1!==c&&this._freeIndices(n,c,h),e.setMeshDataFromBuffers(t,i,s),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1}tryAddMeshData(e,t){const i=t.vertexBuffer,s=t.indexBuffer,r=S[e.geometryType],n=this._allocateVertices(r,e.vertexCount)
if(-1===n)return this._freeVertices(r,n,e.vertexCount),!1
const a=this._allocateIndices(r,e.indexCount)
if(-1===a)return this._freeVertices(r,n,e.vertexCount),this._freeIndices(r,a,e.indexCount),!1
const o=this._storageFor(r)
if(Object(E.e)(n,a,o.vertexBuffers,o.indexBuffer,e,i,s),e.vertexFrom=n,e.indexFrom=a,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,n,e.vertexCount)}return this._displayList.addToList(e),!0}_allocateVertices(e,t){const i=this._storageFor(e),s=i.vtxFreeList.allocate(t)
return-1===s||i.vtxFreeList.fragmentation>.5?-1:s}_freeVertices(e,t,i){this._storageFor(e).vtxFreeList.free(t,i)}_freeIndices(e,t,i){this._storageFor(e).idxFreeList.free(t,i)}_allocateIndices(e,t){const i=this._storageFor(e),s=i.idxFreeList.allocate(t)
return-1===s||i.idxFreeList.fragmentation>.5?-1:s}_storageFor(e){return this._freeListsAndStorage[e]}_stridesFor(e,t){return this._strides[e][t]}}var M=i(985),F=i(877),C=i(998)
class j{constructor(e){this.geometryMap=Object(E.f)(()=>({indexBuffer:M.a.createIndex(e,F.D.STATIC_DRAW),vao:null}),(t,i)=>({vertexBuffer:M.a.createVertex(e,E.a[i])}))}dispose(){for(let e=0;e<5;e++){const t=this.geometryMap[e]
if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose()
for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}}get(e){const t=this.geometryMap[e]
return{getVAO(e,i,s){if(!t.data.vao){const r={}
for(const e in t.buffers)r[e]=t.buffers[e].data.vertexBuffer
t.data.vao=new C.a(e,s,i,r,t.data.indexBuffer)}return t.data.vao}}}has(e){return null!=this.geometryMap[e]}upload(e,t){t.forEach((t,i)=>{this._upload(t,i,e)})}_upload(e,t,i){if(e.indices&&(e.indices.allDirty?this._uploadIndices(i,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(i,t,e.indices.from,e.indices.count)),e.vertices){const s=e.vertices
for(const e in s){const r=s[e]
r.allDirty?this._uploadVertices(i,t,e):null!=r.from&&null!=r.count&&this._uploadVertices(i,t,e,r.from,r.count)}}}_uploadVertices(e,t,i,s,r){const n=this.geometryMap[t]
if(!n)return
const a=e.geometries[t].vertexBuffer[i]
if(!a)return
const o=a.stride,l=a.data.buffer
n.buffers[i]&&l.byteLength>0&&(null!=s&&null!=r?n.buffers[i].data.vertexBuffer.setSubData(l,s*o,s*o,(s+r)*o):n.buffers[i].data.vertexBuffer.setData(l))}_uploadIndices(e,t,i,s){const r=this.geometryMap[t]
if(!r)return
const n=e.geometries[t].indexBuffer.buffer
r.data.indexBuffer&&n.byteLength>0&&(null!=i&&null!=s?r.data.indexBuffer.setSubData(n,4*i,4*i,4*(i+s)):r.data.indexBuffer.setData(n))}}var A=i(1486)
class B extends A.a{constructor(){super(...arguments),this._data=null,this._displayList=null,this._lastCommitTime=0,this._hasData=!1,this._invalidated=!1,this._wglBuffers=null,this._dirtyMap=new O}destroy(){super.destroy(),this.clear()}get hasData(){return!!this._hasData}get displayObjects(){var e
return null!=(e=this._displayObjects)?e:[]}getGeometry(e){return this._wglBuffers&&this._wglBuffers.has(e)?this._wglBuffers.get(e):null}getDisplayList(){return this._displayList}patch(e){if(!0===e.clear)return this.clear(),void(this._hasData=!1)
const t=e.addOrUpdate,i=e.remove
!this._data&&t&&t.tileDisplayData.displayObjects.length?(t.tileDisplayData.computeDisplayList(),this._dirtyMap=new O,this._dispRecStore=R.fromTileData(t,this._dirtyMap),this._data=t,this._dirtyMap.markAllDirty(),this._hasData=!0,e.end&&this.ready()):this._data&&(t&&t.tileDisplayData.displayObjects.length||i.length)?this._doPatchData(e):e.end&&this.ready(),e.end&&!this._data&&this.clear(),this.requestRender(),this.emit("change")}commit(e){e.time&&e.time===this._lastCommitTime||(this._lastCommitTime=e.time,this.visible&&this._data&&(this._wglBuffers||(this._wglBuffers=new j(e.context)),(this._dirtyMap.hasDirty()||this._invalidated)&&(this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._dirtyMap.markAllClean())))}clear(){this._data=null,this._displayList=null,this._dispRecStore=null,this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)}_doPatchData(e){this._invalidated=!0,this._patchData(e)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=R.fromTileData(this._data,this._dirtyMap)),this.requestRender()}_patchData(e){let t=!0
const i=e.addOrUpdate&&e.addOrUpdate.tileDisplayData&&e.addOrUpdate.tileDisplayData.displayObjects||[],s=(e.remove||[]).slice()
for(const e of i)null!=e.insertAfter&&s.push(e.id)
for(const e of s){const t=this._data.tileDisplayData.displayObjectRegistry.get(e)
if(t){this._data.tileDisplayData.displayList.removeFromList(t.displayRecords)
for(const e of t.displayRecords)this._dispRecStore.delete(e)
this._data.tileDisplayData.displayObjectRegistry.delete(e)
const i=this._data.tileDisplayData.displayObjects.indexOf(t)
this._data.tileDisplayData.displayObjects.splice(i,1)}}for(const s of i){let i,r=this._data.tileDisplayData.displayObjectRegistry.get(s.id)
if(r){const e=r.displayRecords
r.set(s),r.displayRecords=e
const t=r.displayRecords.length
for(let e=0;e<t;++e){const t=r.displayRecords[e],i=s.displayRecords[e];(e>=s.displayRecords.length||t.geometryType!==i.geometryType||t.symbolLevel!==i.symbolLevel||t.zOrder!==i.zOrder||t.materialKey!==i.materialKey)&&(this._dispRecStore.delete(r.displayRecords[e]),e<s.displayRecords.length&&(r.displayRecords[e]=void 0))}r.displayRecords.length=s.displayRecords.length}else{let e
r=s.copy(),r.displayRecords=[],this._data.tileDisplayData.displayObjectRegistry.set(s.id,r)
const t=this._data.tileDisplayData.displayObjects
if(null!=r.insertAfter)if(i={},r.insertAfter>=0){const i=this._data.tileDisplayData.displayObjectRegistry.get(r.insertAfter)
i?(e=t.indexOf(i)+1,e<t.length?t.splice(e,0,r):(t.push(r),e=t.length)):(t.push(r),e=t.length)}else t.unshift(r),e=0
else t.push(r),e=t.length
if(i){const r=s.displayRecords.length>0?1:0
let n=0
for(let s=e-1;s>=0&&n<r;--s)for(let e=t[s].displayRecords.length-1;e>=0&&n<r;--e){const r=t[s].displayRecords[e],a=this._data.tileDisplayData.displayList.getDPInfoType()
i[a]||(i[a]=r,++n)}}}const n=s.displayRecords.length
for(let a=0;a<n;++a){const n=s.displayRecords[a]
let o=r.displayRecords[a]
o?(o.meshData=n.meshData,o.materialKey=n.materialKey):(o=n.copy(),o.vertexFrom=void 0,o.indexFrom=void 0,r.displayRecords[a]=o)
const l=n.geometryType,c=this._data.tileDisplayData.displayList.getDPInfoType(),h=e.addOrUpdate.tileBufferData.geometries[l],u=h.vertexBuffer,d=h.indexBuffer
let f
i&&(f=i[c]?this._data.tileDisplayData.displayList.splitAfter(i[c]):-1),t=this._dispRecStore.setMeshData(o,n,u,d,f)&&t,i&&null!=o.indexFrom&&null!=o.indexFrom&&(i[c]=o)}}return t}}class I{constructor(){this._byGeometryType=null}get satisfied(){return!this._byGeometryType}reset(){this._byGeometryType=null}verticesFor(e){return this._byGeometryType?this._byGeometryType[e].vertices:0}indicesFor(e){return this._byGeometryType?this._byGeometryType[e].indices:0}needMore(e,t,i){if(!t&&!i)return
this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}])
const s=this._byGeometryType[e]
s.vertices+=t,s.indices+=i}}class P{constructor(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}clone(){const e=new P
for(let t=0;t<this.geometries.length;t++){const i=this.geometries[t],s=e.geometries[t]
s.indexBuffer=i.indexBuffer.slice(),s.vertexBuffer={}
for(const e in i.vertexBuffer){const{data:t,stride:r}=i.vertexBuffer[e]
s.vertexBuffer[e]={data:t.slice(),stride:r}}}return e}static deserialize(e){const t=new P
for(let i=0;i<5;++i){t.geometries[i].indexBuffer=new Uint32Array(e.geometries[i].indexBuffer),t.geometries[i].vertexBuffer={}
for(const s in e.geometries[i].vertexBuffer)t.geometries[i].vertexBuffer[s]={data:Object(E.c)(e.geometries[i].vertexBuffer[s].data,e.geometries[i].vertexBuffer[s].stride),stride:e.geometries[i].vertexBuffer[s].stride}}return t}serialize(){const e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]}
for(let t=0;t<5;++t)for(const i in this.geometries[t].vertexBuffer)e.geometries[t].vertexBuffer[i]={data:this.geometries[t].vertexBuffer[i].data.buffer,stride:this.geometries[t].vertexBuffer[i].stride}
return e}getBuffers(){const e=[]
for(let t=0;t<5;++t){e.push(this.geometries[t].indexBuffer.buffer)
for(const i in this.geometries[t].vertexBuffer)e.push(this.geometries[t].vertexBuffer[i].data.buffer)}return e}}var D=i(908)
function L(e,t,i,...s){t<e.length?e.splice(t,i,...s):e.push(...s)}const z=new Map
z.set(D.c.MAP,[D.d.FILL,D.d.LINE,D.d.MARKER,D.d.TEXT]),z.set(D.c.LABEL,[D.d.LABEL]),z.set(D.c.LABEL_ALPHA,[D.d.LABEL])
class N{constructor(){this.symbolLevels=[]}replay(e,t,i){for(const s of this.symbolLevels)for(const r of s.zLevels){const s=r.geometryDPInfo.unified
if(s)for(const r of s){const s=e.painter.getGeometryBrush(r.geometryType),n=t.getGeometry(r.geometryType),a={geometryType:r.geometryType,materialKey:r.materialKey,indexFrom:r.indexFrom,indexCount:r.indexCount,target:n}
s.prepareState(e,t),s.drawGeometry(e,t,a,i)}}}get empty(){return!this.symbolLevels||0===this.symbolLevels.length}clear(){this.symbolLevels.length=0}addToList(e,t){if(Array.isArray(e))for(const i of e)this._addToList(i,t)
else this._addToList(e,t)}removeFromList(e){Array.isArray(e)||(e=[e])
let t=null
for(const i of e)t=this._removeFromList(i)
return t}clone(){const e=new N
for(const t of this.symbolLevels)e.symbolLevels.push(t.clone())
return e}splitAfter(e){const t=this._getDisplayList(e.symbolLevel,e.zOrder),i=t.length,s=e.indexFrom+e.indexCount
for(let r=0;r<i;++r){const i=t[r]
if(i.geometryType===e.geometryType&&s>i.indexFrom&&s<=i.indexFrom+i.indexCount){if(s<i.indexFrom+i.indexCount){const e=new k
e.geometryType=i.geometryType,e.materialKey=i.materialKey,e.indexFrom=s,e.indexCount=i.indexFrom+i.indexCount-s,t.splice(r+1,0,e),i.indexCount=s-i.indexFrom}return r}}}_addToList(e,t){const i=e.symbolLevel,s=e.zOrder,r=this._getDisplayList(i,s),n=null!=t?t:r.length-1,a=n>=0&&n<r.length?r[n]:null
if(null!==a&&a.materialKey===e.materialKey&&a.indexFrom+a.indexCount===e.indexFrom&&a.geometryType===e.geometryType)a.indexCount+=e.indexCount
else{const t=new k
t.indexFrom=e.indexFrom,t.indexCount=e.indexCount,t.materialKey=e.materialKey,t.geometryType=e.geometryType,L(r,n+1,0,t)}}_removeFromList(e){const t=e.symbolLevel,i=e.zOrder,s=this._getDisplayList(t,i),r=s.length
let n
for(let t=0;t<r;++t){const i=s[t]
if(e.indexFrom+e.indexCount>i.indexFrom&&e.indexFrom<i.indexFrom+i.indexCount&&i.geometryType===e.geometryType){n=t
break}}if(void 0!==n){const t=s[n]
if(e.indexFrom===t.indexFrom)return t.indexCount-=e.indexCount,t.indexFrom+=e.indexCount,0===t.indexCount&&L(s,n,1),n-1
if(e.indexFrom+e.indexCount===t.indexFrom+t.indexCount)return t.indexCount-=e.indexCount,0===t.indexCount?(L(s,n,1),n-1):n
{const i=t.indexFrom,r=e.indexFrom-t.indexFrom,a=e.indexCount,o=t.indexFrom+t.indexCount-(e.indexFrom+e.indexCount)
t.indexCount=r
const l=new k
return l.geometryType=t.geometryType,l.materialKey=t.materialKey,l.indexFrom=i+r+a,l.indexCount=o,L(s,n+1,0,l),n}}return null}_getDisplayList(e,t){let i
const s=this.symbolLevels.length
for(let t=0;t<s;t++)if(this.symbolLevels[t].symbolLevel===e){i=this.symbolLevels[t]
break}let r
i||(i=new V,i.symbolLevel=e,this.symbolLevels.push(i))
const n=i.zLevels.length
for(let e=0;e<n;e++)if(i.zLevels[e].zLevel===t){r=i.zLevels[e]
break}return r||(r=new G,r.geometryDPInfo=new U,r.zLevel=t,i.zLevels.push(r)),r.geometryDPInfo.unified||(r.geometryDPInfo.unified=[]),r.geometryDPInfo.unified}getDPInfoType(){return"unified"}}class k{constructor(){this.materialKey=null,this.indexFrom=0,this.indexCount=0}clone(){const e=new k
return e.geometryType=this.geometryType,e.materialKey=this.materialKey,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e}}class U{constructor(){this.fill=null,this.line=null,this.marker=null,this.text=null,this.label=null,this.unified=null}clone(){const e=new U
return e.fill=this.fill&&this.fill.map(e=>e.clone()),e.line=this.line&&this.line.map(e=>e.clone()),e.marker=this.marker&&this.marker.map(e=>e.clone()),e.text=this.text&&this.text.map(e=>e.clone()),e.label=this.label&&this.label.map(e=>e.clone()),e.unified=this.unified&&this.unified.map(e=>e.clone()),e}}class G{constructor(){this.geometryDPInfo=new U}clone(){const e=new G
return e.zLevel=this.zLevel,e.geometryDPInfo=this.geometryDPInfo.clone(),e}}class V{constructor(){this.zLevels=[]}clone(){const e=new V
e.symbolLevel=this.symbolLevel
for(const t of this.zLevels)e.zLevels.push(t.clone())
return e}}class W{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(e,t,i){for(const t in e)this.vertexData.set(t,e[t])
for(const t in this.vertexData)null===e[t]&&this.vertexData.delete(t)
this.vertexCount=t,this.indexData=i}}class X{constructor(e,t,i,s=0,r=0){this.id=e,this.geometryType=t,this.materialKey=i,this.minZoom=s,this.maxZoom=r,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}get sortKey(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey}clone(){return this.copy()}copy(){const e=new X(this.id,this.geometryType,this.materialKey)
return e.vertexFrom=this.vertexFrom,e.vertexCount=this.vertexCount,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e.zOrder=this.zOrder,e.symbolLevel=this.symbolLevel,e.meshData=this.meshData,e.minZoom=this.minZoom,e.maxZoom=this.maxZoom,e}setMeshDataFromBuffers(e,t,i){const s=new W
for(const i in t){const r=t[i].stride,n=t[i].data,a=[],o=Object(E.A)(r)
for(let t=0;t<r*e.vertexCount/o;++t)a[t]=n[t+r*e.vertexFrom/o]
s.vertexData.set(i,a)}s.indexData.length=0
for(let t=0;t<e.indexCount;++t)s.indexData[t]=i[t+e.indexFrom]-e.vertexFrom
s.vertexCount=e.vertexCount,this.meshData=s}readMeshDataFromBuffers(e,t){this.meshData?this.meshData.clear():this.meshData=new W
for(const t in e){const i=e[t].stride,s=e[t].data,r=[],n=Object(E.A)(i)
for(let e=0;e<i*this.vertexCount/n;++e)r[e]=s[e+i*this.vertexFrom/n]
this.meshData.vertexData.set(t,r)}this.meshData.indexData.length=0
for(let e=0;e<this.indexCount;++e)this.meshData.indexData[e]=t[e+this.indexFrom]-this.vertexFrom
this.meshData.vertexCount=this.vertexCount}writeMeshDataToBuffers(e,t,i,s){for(const i in t){const s=t[i].stride,r=this.meshData.vertexData.get(i),n=t[i].data,a=Object(E.A)(s)
for(let t=0;t<s*this.meshData.vertexCount/a;++t)n[t+s*e/a]=r[t]}for(let t=0;t<this.meshData.indexData.length;++t)s[t+i]=this.meshData.indexData[t]+e
this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=i,this.indexCount=this.meshData.indexData.length}static writeAllMeshDataToBuffers(e,t,i){let s=0,r=0
for(const n of e)n.writeMeshDataToBuffers(s,t,r,i),s+=n.vertexCount,r+=n.indexCount}_computeSortKey(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType}serialize(e){return e.push(this.geometryType),e.push(this.materialKey),e.push(this.vertexFrom),e.push(this.vertexCount),e.push(this.indexFrom),e.push(this.indexCount),e.push(this.minZoom),e.push(this.maxZoom),e}static deserialize(e,t){const i=e.readInt32(),s=e.readInt32(),r=new X(t.id,i,s)
return r.vertexFrom=e.readInt32(),r.vertexCount=e.readInt32(),r.indexFrom=e.readInt32(),r.indexCount=e.readInt32(),r.minZoom=e.readInt32(),r.maxZoom=e.readInt32(),r}}function H(e,t){if(null!==t){e.push(t.length)
for(const i of t)i.serialize(e)
return e}e.push(0)}class q{constructor(e){this.insertAfter=null,this.id=e,this.displayRecords=[]}copy(){const e=new q(this.id)
return e.set(this),e}clone(){const e=new q(this.id)
return e.displayRecords=this.displayRecords.map(e=>e.clone()),e.insertAfter=this.insertAfter,e}set(e){this.id=e.id,this.displayRecords=e.displayRecords,this.insertAfter=e.insertAfter}serialize(e){return e.push(this.id),H(e,this.displayRecords),e}static deserialize(e){const t=e.readInt32(),i=new q(t),s={id:t}
return i.displayRecords=function(e,t,i){const s=e.readInt32(),r=new Array(s)
for(let s=0;s<r.length;s++)r[s]=t.deserialize(e,i)
return r}(e,X,s),i}}class Y{constructor(){}get displayObjectRegistry(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map
for(const e of this.displayObjects)this._displayObjectRegistry.set(e.id,e)}return this._displayObjectRegistry}get displayList(){return this._displayList}computeDisplayList(){this._displayList=new N
for(const e of this.displayObjects)for(const t of e.displayRecords)this._displayList.addToList(t)}clone(){const e=new Y
return this.displayObjects&&(e.displayObjects=this.displayObjects.map(e=>e.clone())),e}serialize(e){return H(e,this.displayObjects),e}_deserializeObjects(e){const t=e.readInt32(),i=new Array(t),s=new Map
for(let t=0;t<i.length;++t){const r=q.deserialize(e)
i[t]=r,s.set(r.id,r)}this.displayObjects=i,this._displayList=null,this._displayObjectRegistry=s}static deserialize(e){const t=new Y
return t._deserializeObjects(e),t}}var K=i(1487)
class Z{constructor(e,t){this.data=e,this.stride=t}static decode(e){const t=Object(E.c)(e.data,e.stride),i=e.stride
return new Z(t,i)}static fromVertexVector(e){const t=Object(E.c)(e.data.buffer(),e.stride),i=e.stride
return new Z(t,i)}}class ${constructor(e,t,i){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=i}static decode(e){const t=e.geometryType,i=e.indexBuffer,s={}
for(const t in e.namedBuffers)s[t]=Z.decode(e.namedBuffers[t])
return new $(t,i,s)}static fromVertexData(e,t){const i=e.indices,s=Object(E.c)(e.vertices,e.stride),r=e.stride,n={geometry:new Z(s,r)}
return new $(t,i,n)}static fromVertexVectors(e){const t=e.geometryType,i=e.indexVector.buffer(),s={}
for(const t in e.namedVectors)s[t]=Z.fromVertexVector(e.namedVectors[t])
return new $(t,i,s)}}var J=i(1237)
class Q{constructor(e,t){this.data=e,this.stride=t}get vertexCount(){const e=this.stride/4,t=this.data.length/e
return t!==(0|t)&&console.debug("Corrupted stride"),t}transfer(e,t){const i=this.data.buffer()
e.vertexCount=this.vertexCount,e.data=i,e.stride=this.stride,t.push(i)}}class ee{constructor(e,t,i){this.geometryType=e,this.indexVector=new J.a(Uint32Array,6*t),this.namedVectors={}
const s=Object(E.n)(e,i)
for(const e in s){const i=s[e]
let r
switch(i%4){case 0:case 2:r=new J.a(Uint32Array,i*t)
break
case 1:case 3:r=new J.a(Uint8Array,i*t)}this.namedVectors[e]=new Q(r,i)}}get(e){return this.namedVectors[e].data}getVector(e){return this.namedVectors[e]}transfer(e,t){const i=this.indexVector.buffer(),s={}
t.push(i)
for(const e in this.namedVectors){const i=this.namedVectors[e]
s[e]={},i.transfer(s[e],t)}e.geometryType=this.geometryType,e.indexBuffer=i,e.namedBuffers=s,this.destroy()}intoBuffers(){const e=$.fromVertexVectors(this)
return this.destroy(),e}destroy(){this.indexVector=null,this.namedVectors=null}}const te=new I,ie=new I
function se(e,t){const i={}
for(const s in e){const r={data:Object(E.b)(t,e[s]),stride:e[s]}
i[s]=r}return i}class re{constructor(){this.tileDisplayData=null,this.tileBufferData=null}reshuffle(){te.reset()
const e=function(e){const t=[[],[],[],[],[]],i=e
for(const e of i)for(const i of e.displayRecords)t[i.geometryType].push(i)
return t}(this.tileDisplayData.displayObjects)
for(const t of e)for(const e of t)e&&te.needMore(e.geometryType,e.meshData?e.meshData.vertexCount:e.vertexCount,e.meshData?e.meshData.indexData.length:e.indexCount)
const t=e.length,i=new P
for(let e=0;e<t;++e){i.geometries[e].indexBuffer=new Uint32Array(Math.round(1.5*te.indicesFor(e)))
const t=[]
for(const i in this.tileBufferData.geometries[e].vertexBuffer)t.push(this.tileBufferData.geometries[e].vertexBuffer[i].stride)
const s=re._computeVertexAlignment(t),r=Math.round(1.5*te.verticesFor(e)),n=re._align(r,s)
for(const t in this.tileBufferData.geometries[e].vertexBuffer){const s=this.tileBufferData.geometries[e].vertexBuffer[t].stride
i.geometries[e].vertexBuffer[t]={stride:s,data:Object(E.b)(n,s)}}}ie.reset(),this.tileDisplayData.displayList.clear()
for(let s=0;s<t;++s){const t=e[s]
for(const e of t){if(e.meshData)e.writeMeshDataToBuffers(ie.verticesFor(s),i.geometries[s].vertexBuffer,ie.indicesFor(s),i.geometries[s].indexBuffer),e.meshData=null
else{const t=this.tileBufferData.geometries[s].vertexBuffer,r=this.tileBufferData.geometries[s].indexBuffer,n=i.geometries[s].vertexBuffer,a=i.geometries[s].indexBuffer,o=ie.verticesFor(s),l=ie.indicesFor(s)
Object(E.e)(o,l,n,a,e,t,r),e.vertexFrom=o,e.indexFrom=l}ie.needMore(s,e.vertexCount,e.indexCount)}}for(const e of this.tileDisplayData.displayObjects)this.tileDisplayData.displayList.addToList(e.displayRecords)
this.tileBufferData=i}getStrides(){const e=[]
for(let t=0;t<this.tileBufferData.geometries.length;++t){const i=this.tileBufferData.geometries[t]
e[t]={}
for(const s in i.vertexBuffer)e[t][s]=i.vertexBuffer[s].stride}return e}clone(){const e=new re
return e.tileBufferData=this.tileBufferData.clone(),e.tileDisplayData=this.tileDisplayData.clone(),e}_guessSize(){const{displayObjects:e}=this.tileDisplayData,t=Math.min(e.length,4)
let i=0
for(let s=0;s<t;s++)i=Math.max(i,e[s].displayRecords.length)
return 2*(12*e.length+e.length*i*40)}serialize(){const e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),i=this.tileDisplayData.serialize(new J.a(Int32Array,this._guessSize())).buffer()
return t.push(i),{result:{displayData:i,bufferData:e},transferList:t}}static fromVertexData(e,t){const i={},s=new Map
for(const e of t)s.set(e.id,e)
return Object(E.h)(t=>{const r=e.data[t]
if(Object(l.k)(r)){const e=K.a.from(r.records).getCursor()
for(;e.next();){const i=e.id,r=e.materialKey,n=e.indexFrom,a=e.indexCount,o=e.vertexFrom,l=e.vertexCount,c=s.get(i),h=new X(i,t,r)
h.indexFrom=n,h.indexCount=a,h.vertexFrom=o,h.vertexCount=l,c.displayRecords.push(h)}i[t]=$.fromVertexData(r,t)}else i[t]=new ee(t,0,{fill:"default"}).intoBuffers()}),re.fromMeshData({displayObjects:t,vertexBuffersMap:i})}static fromMeshData(e){const t=new re,i=new Y,s=new P
i.displayObjects=e.displayObjects
for(const t in e.vertexBuffersMap){const i=e.vertexBuffersMap[t]
s.geometries[t].indexBuffer=i.indexBuffer,s.geometries[t].vertexBuffer=i.namedBuffers}return t.tileDisplayData=i,t.tileBufferData=s,t}static bind(e,t){const i=new re
return i.tileDisplayData=e,i.tileBufferData=t,i}static create(e,t){const i=new re
i.tileDisplayData=new Y,i.tileDisplayData.displayObjects=e
const s=[0,0,0,0,0],r=[0,0,0,0,0],n=[[],[],[],[],[]]
for(const t of e)for(const e of t.displayRecords)n[e.geometryType].push(e),s[e.geometryType]+=e.meshData.vertexCount,r[e.geometryType]+=e.meshData.indexData.length
const a=new P,o=function(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}(t)
for(let e=0;e<5;e++){const t=new Uint32Array(r[e]),i=se(o[e],s[e])
X.writeAllMeshDataToBuffers(n[e],i,t),a.geometries[e]={indexBuffer:t,vertexBuffer:i}}return i.tileBufferData=a,i}static _align(e,t){const i=e%t
return 0===i?e:e+(t-i)}static _computeVertexAlignment(e){let t=!1,i=!1
for(const s of e)s%4==2?t=!0:s%4!=0&&(i=!0)
return i?4:t?2:1}}var ne=i(1496),ae=i(1497),oe=i(1330),le=i(1488),ce=i(1498),he=i(1489),ue=i(1500),de=i(930),fe=i(1304),_e=i(1407)
class pe extends _e.a{constructor(e,t){super(e,t,null)}static from(e){const t=fe.a.createInstance(),i=[],s=e.filter(e=>!!e.geometry)
for(const e of s){const t=Object(p.c)(e.geometry)
Object(de.e)(i,[e],t,!1,!1,"uid")}return new pe(t,i)}get geometryType(){const e=this._current
return e?e.geometryType:null}get insertAfter(){return this._current.insertAfter}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const e=new pe(this.instance,this._features)
return this.copyInto(e),e}}var me=i(876),ge=i(1459),be=i(943),ye=i(1008),xe=i(1033),ve=i(1666),Oe=i(968),we=i(1110),Te=i(935),Ee=i(1168)
const Se=new Te.a,Re=new Te.a,Me="esriGeometryPolyline"
function Fe(e){e.coords.length=0,e.lengths.length=0}class Ce{constructor(){this.bounds=Object(f.m)(),this.graphic=null}static acquire(e=null,t,i,s,r){let n
return 0===Ce._pool.length?n=new Ce:(n=Ce._pool.pop(),this._set.delete(n)),n.acquire(e,t,i,s,r),n}static release(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))}static getCentroidQuantized(e,t){if(Object(p.g)(e.geometry)){const i=e.symbol
if(Object(l.j)(i))return null
if(Object(Ee.f)(i.type)||Object(Ee.g)(i.type)){const i=Object(Oe.b)(e.geometry)
return Object(we.b)(t,{},{x:i[0],y:i[1]},!1,!1)}}return null}acquire(e=null,t,i,s,r){e&&this.set(e,t,i,s,r)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(e,t,i,s,r){this.graphic=e,this.geometry=i,this.symbolResource=t,this.bounds=s,r&&(this.size=r)}getGeometryQuantized(e,t,i,s){const r=this.geometry
if(Object(p.g)(r)){const t=r.rings
if(1===t.length&&2===t[0].length)return Object(we.a)(e,{paths:[[t[0][0],t[0][1]]]})}else{if(Object(p.h)(r))return Fe(Se),Fe(Re),Object(de.i)(Se,r),Object(de.r)(Re,Se,r.hasZ,r.hasM,Me,e.scale[0]),Object(de.v)(Se,Re,r.hasZ,r.hasM,Me,e),Object(de.p)(Se,r.hasZ,r.hasM)
if(Object(p.e)(r)){const n=.5*s*Math.max(Math.abs(this.size[0])+this.size[2]-this.size[0],Math.abs(this.size[1])+this.size[3]-this.size[1]),[a,o]=Object(xe.c)(i),l=o-a,c=r.points.filter(e=>{if(e[0]+n>o||e[0]-n<a){const i=[...e]
return e[0]+n>o?i[0]-=l:i[0]+=l,Object(f.j)(t,e,n)||Object(f.j)(t,i,n)}return Object(f.j)(t,e,n)})
return 0===c.length?{points:c}:Object(we.a)(e,{points:c})}}return Object(we.a)(e,this.geometry)}}Ce._pool=[],Ce._set=new Set
const je={minX:0,minY:0,maxX:0,maxY:0},Ae=Object(f.m)()
function Be(e,t,i,s,r){return je.minX=t,je.minY=i,je.maxX=s,je.maxY=r,e.search(je)}function Ie(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}class Pe{constructor(e,t,i,s,r,n,a){this._graphics=s,this._onAdd=r,this._onRemove=n,this._hashToCIM=a,this._index=Object(ge.a)(9,Ie),this._itemByGraphic=new Map,this._inflatedSizeHelper=new y.a,this._tileInfoView=e,this._uidFieldName=i
const o=e.getClosestInfoForScale(t)
o&&(this._resolution=this._tileInfoView.getTileResolution(o.level))}setResourceManager(e){this._cimResourceManager=e,this._hittestDrawHelper=new ve.c(e)}hitTest(e,t,i,s,r){e=Object(ye.b)(e,this._tileInfoView.spatialReference)
const n=.5*s*window.devicePixelRatio*i
Ae[0]=e-n,Ae[1]=t-n,Ae[2]=e+n,Ae[3]=t+n
const a=.5*s*(i+Ee.a),o=Be(this._index,e-a,t-a,e+a,t+a)
if(!o||0===o.length)return[]
const l=[],c=Object(f.m)(),h=Object(f.m)()
for(const e of o){const{geometry:t,symbolResource:i}=e
this._getSymbolBounds(c,i,t,h,r),h[3]=h[2]=h[1]=h[0]=0,Object(f.x)(c,Ae)&&e.graphic.visible&&l.push(e)}if(0===l.length)return[]
const u=this._hittestDrawHelper,d=[]
for(const e of l){const{geometry:t,symbolResource:i}=e,{hash:n,textInfo:a}=i,o=this._hashToCIM.get(n)
o&&u.hitTest(Ae,o.symbol,t,a,r,s)&&d.push(e)}return d.sort(De),d.map(e=>e.graphic)}getGraphicsData(e,t,i){const s=this._searchForItems(t)
if(0===s.length||0===i.length)return[]
s.sort((e,t)=>e.zorder-t.zorder),s[0].insertAfter=-1
for(let e=1;e<s.length;e++)s[e].insertAfter=s[e-1].graphic.uid
s.sort((e,t)=>e.graphic.uid-t.graphic.uid),i.sort((e,t)=>e.uid-t.uid)
let r,n=0,a=0
const o=t.resolution,l=[],c={originPosition:"upperLeft",scale:[o,o],translate:[t.bounds[0],t.bounds[3]]}
for(const h of i){for(a=-2;n<s.length;)if(r=s[n],n++,h.uid===r.graphic.uid){a=r.insertAfter
break}if(!r.geometry||-2===a)continue
const i=r.getGeometryQuantized(c,t.bounds,this._tileInfoView.spatialReference,o),u={...r.graphic.attributes}
u[this._uidFieldName]=h.uid,null==r.groupId&&(r.groupId=e.createTemplateGroup(r.symbol,null)),l.push({centroid:Ce.getCentroidQuantized(r,c),geometry:i,attributes:u,symbol:r.symbol,groupId:r.groupId,insertAfter:a,zorder:r.zorder})}return l.sort((e,t)=>e.zorder-t.zorder),l}queryTileData(e,t){if(0===this._graphics.length)return[]
const{bounds:i,resolution:s}=t,r=this._searchForItems(t),n=[]
return 0===r.length||this._createTileGraphics(n,e,r,{originPosition:"upperLeft",scale:[s,s],translate:[i[0],i[3]]},t),n}has(e){return this._itemByGraphic.has(e)}getBounds(e){const t=this._itemByGraphic.get(e)
return t?t.bounds:null}getAllBounds(){return Array.from(this._itemByGraphic.values()).filter(e=>e.graphic.visible).map(e=>e.bounds)}addOrModify(e,t,i){if(!e||Object(l.j)(t))return
this.has(e)&&this.remove(e),this._onAdd(e)
const s=[0,0,0,0],r=this._getSymbolBounds(null,t,i,s,0),n=Ce.acquire(e,t,i,Object(l.k)(r)?r:null,s)
return this._itemByGraphic.set(e,n),i&&this._index.insert(n),n.bounds}remove(e){if(!this._itemByGraphic.has(e))return
this._onRemove(e)
const t=this._itemByGraphic.get(e)
t.bounds&&this._index.remove(t),this._itemByGraphic.delete(e)}updateZ(){const e=this._graphics.items
let t,i
for(let s=0;s<e.length;s++)i=e[s],t=this._itemByGraphic.get(i),t&&(t.zorder=s)}update(e,t,i){const s=this._itemByGraphic.get(e)
s.groupId=null
const r=Object(f.f)(s.bounds)
this._index.remove(s)
const n=this._getSymbolBounds(s.bounds,t,i,s.size,0)
return Object(l.k)(n)&&s.set(e,t,i,n,s.size),i&&this._index.insert(s),{oldBounds:r,newBounds:s.bounds}}updateLevel(e){if(this._resolution===e)return
this._resolution=e,this._index.clear()
const t=this._itemByGraphic,i=[]
for(const[e,s]of t){const e=this._getSymbolBounds(s.bounds,s.symbolResource,s.geometry,s.size,0)
s.geometry&&Object(l.k)(e)&&(s.bounds=e,i.push(s))}this._index.load(i)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,i,s,r){const n=this._uidFieldName,a=this._tileInfoView.spatialReference,{bounds:o,resolution:l}=r
let c,h,u,d
i.sort((e,t)=>e.zorder-t.zorder)
for(let r=0;r<i.length;r++){u=i[r],c=u.graphic,h=u.getGeometryQuantized(s,o,a,l),d=0===r?-1:i[r-1].graphic.uid
const f={...u.graphic.attributes}
f[n]=c.uid,null==u.groupId&&(u.groupId=t.createTemplateGroup(u.symbol,null)),e.push({centroid:Ce.getCentroidQuantized(u,s),geometry:h,attributes:f,symbol:u.symbol,groupId:u.groupId,insertAfter:d,zorder:u.zorder})}}_searchForItems(e){const t=this._tileInfoView.spatialReference,i=e.bounds
if(t.isWrappable){const[s,r]=Object(xe.c)(t),n=Math.abs(i[2]-r)<1e-5,a=Math.abs(i[0]-s)<1e-5
if((!n||!a)&&(n||a)){const t=e.resolution
let a
a=Object(f.m)(n?[s,i[1],s+t*Ee.a,i[3]]:[r-t*Ee.a,i[1],r,i[3]])
const o=Be(this._index,i[0],i[1],i[2],i[3]),l=Be(this._index,a[0],a[1],a[2],a[3])
return[...new Set([...o,...l])]}}return Be(this._index,i[0],i[1],i[2],i[3])}_getSymbolBounds(e,t,i,s,r){if(!t||!t.symbol||!i)return null
if(e||(e=Object(f.m)()),Object(be.a)(e,i),!s||0===s[0]&&0===s[1]&&0===s[2]&&0===s[3]){const{hash:e,textInfo:i}=t,n=this._hashToCIM.get(e)
if(!n)return null
s||(s=[0,0,0,0])
const a=this._inflatedSizeHelper.getSymbolInflateSize(s,n.symbol,this._cimResourceManager,r,i)
s[0]=Object(me.h)(a[0]),s[1]=Object(me.h)(a[1]),s[2]=Object(me.h)(a[2]),s[3]=Object(me.h)(a[3])}const n=this._resolution,a=y.a.safeSize(s)
return e[0]-=a*n,e[1]-=a*n,e[2]+=a*n,e[3]+=a*n,e}}const De=(e,t)=>{const i=Object(Ee.d)(e.graphic),s=Object(Ee.d)(t.graphic)
return i===s?t.zorder-e.zorder:i-s}
var Le=i(1160),ze=i(1490),Ne=i(1266),ke=i(1120)
const Ue=Object(o.a)("esri-2d-graphic-debug")
function Ge(e,t,i){if(i.has(e))return i.get(e)
const s={tile:t,addedOrModified:[],removed:[]}
return i.set(e,s),s}let Ve=class extends(Object(ze.a)(Object(a.b)(r.a))){constructor(e){super(e),this._storage=new ue.a,this._displayIds=new Map,this._controller=new AbortController,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=Promise.resolve(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._updatingGraphicsTimer=null,this._hashToExpandedSymbol=new Map,this._hashToExpandedSymbolPromise=new Map,this._hashToCIMSymbolPromise=new Map,this._hashToCIM=new Map,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this._controller.abort(),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._attributeStore=null,this._hashToExpandedSymbol.clear(),this.view=null,this.renderer=null,this._hashToCIM.clear(),this._hashToCIMSymbolPromise.clear(),this._hashToExpandedSymbolPromise.clear()}_createMatcher(e,t,i){if(e){const s=Object(ce.a)({indexCount:0,fields:{}},"feature",e)
this._matcher=Object(le.a)(s,t,null,i)}}_createDisplayId(e){return this._displayIds.has(e)||this._displayIds.set(e,this._storage.createDisplayId()),this._displayIds.get(e)}initialize(){this._attributeStore=new he.a({type:"local",initialize:e=>Promise.resolve(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},Object(Ne.a)()),this.container.hasHighlight=()=>this._attributeStore.hasHighlight
const e=new oe.a(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo)
this._graphicStore=new Pe(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)},e=>{const t=this._displayIds.get(e.uid)
this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)},this._hashToCIM),this._meshFactory=new ae.a(null,this.uid,e),this._templateStore=e,this.handles.add([this.watch("renderer",t=>{this._createMatcher(t,e,this.container.stage.resourceManager)
for(const e of this.graphics)this._pendingUpdate.updated.add(e)
this.requestUpdate()}),this.view.graphicsTileStore.on("update",e=>this._onTileUpdate(e)),this.container.on("attach",()=>{Ue&&this.container.enableRenderingBounds(()=>this._graphicStore.getAllBounds()),this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",e=>this._graphicsChangeHandler(e)),"graphics")
const t=this.container.stage.resourceManager
this._createMatcher(this.renderer,e,t),this._graphicStore.setResourceManager(t),this._attached=!0,this.notifyChange("updating")})])
const t=this.view.graphicsTileStore.tiles
this._onTileUpdate({added:t,removed:[]})}get updating(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0}hitTest(e){if(!this.view||!this.view.position)return null
const{resolution:t,rotation:i}=this.view.state
return this._graphicStore.hitTest(e.x,e.y,2,t,i)}update(e){Object(c.v)(this._controller.signal)
const t=e.state,{resolution:i}=t
if(this._graphicStore.updateLevel(i),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics()
this._needsProcessing=!0}}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}graphicUpdateHandler(e){const{graphic:t,property:i,newValue:s}=e
switch(i){case"attributes":case"geometry":case"symbol":this._pendingUpdate.updated.add(t),this.requestUpdate()
break
case"visible":this._setFilterState(t.uid,s),this._attributeStore.sendUpdates()}}setHighlight(e){const t=e.map(e=>this._displayIds.get(e))
this._attributeStore.setHighlight(e,t)}_getIntersectingTiles(e){const t=this._graphicStore.getBounds(e)
if(!t||0===Object(f.D)(t)||0===Object(f.v)(t))return[]
const i=Object(Ee.e)(t,this.view.spatialReference)
return Object(l.k)(i)?[...new Set([...this.view.graphicsTileStore.boundsIntersections(i[0]),...this.view.graphicsTileStore.boundsIntersections(i[1])])]:this.view.graphicsTileStore.boundsIntersections(t)}async _updateTile(e){Object(c.v)(this._controller.signal)
const t=e.tile,i=this._getGraphicsData(this._templateStore,t,e.addedOrModified),s=await this._processGraphics(t,i)
return Object(c.v)(this._controller.signal),this._patchTile(t.key,{type:"update",addOrUpdate:s,remove:e.removed,end:!0,clear:!1,sort:!1}),s}_patchTile(e,t){if(!this._tiles.has(e))return
const i=this._tiles.get(e)
this.container.onTileData(i,t),this.container.requestRender()}_graphicsChangeHandler(e){const t=this._pendingUpdate
for(const i of e.added)t.added.add(i)
for(const i of e.moved)t.updated.add(i)
for(const i of e.removed)this._pendingUpdate.added.has(i)?t.added.delete(i):t.removed.add(i)
this._processing?this._needsProcessing=!0:this._updateGraphics()}_getGraphicsToUpdate(){const e={added:[],removed:[],updated:[]}
if(!this.graphics)return e
const t=this._pendingUpdate
for(const i of this.graphics.items)t.added.has(i)?e.added.push(i):t.updated.has(i)&&e.updated.push(i)
for(const i of t.removed)this._graphicStore.has(i)&&e.removed.push(i)
return t.added.clear(),t.removed.clear(),t.updated.clear(),e}async _updateGraphics(){this._processing=!0
const{added:e,removed:t,updated:i}=this._getGraphicsToUpdate(),s=this._tilesToUpdate
let r
try{if(!this._graphicStoreUpdate){const e=this.view.state,{resolution:t}=e
this._graphicStore.updateLevel(t)}const n=[],a=new Array(e.length+t.length)
for(let e=0;e<i.length;e++){const t=i[e],o=this._getIntersectingTiles(t)
for(const e of o)r=e.id,Ge(r,e,s).removed.push(this._displayIds.get(t.uid))
n.push(this._updateGraphic(t,null)),a[e]=t}const o=i.length
for(let t=0;t<e.length;t++){const i=e[t]
a[o+t]=i,this._graphicsSet.add(i),n.push(this._addGraphic(i))}for(const e of t){this._abortProcessingGraphic(e.uid)
const t=this._getIntersectingTiles(e)
for(const i of t)r=i.id,Ge(r,i,s).removed.push(this._displayIds.get(e.uid))
this._graphicsSet.delete(e),this._graphicStore.remove(e)}let l
this._flipUpdatingGraphics(),await Promise.all(n)
for(let e=0;e<a.length;e++){l=a[e]
const t=this._getIntersectingTiles(l)
for(const e of t)r=e.id,Ge(r,e,s).addedOrModified.push(l)}this._graphicStore.updateZ()
const c=[]
for(const[e,t]of s)c.push(this._updateTile(t))
await Promise.all(c)}catch(e){Object(c.m)(e)}for(const i of t)try{const e=await this._getSymbolForGraphic(i,{})
if(e){const t=e.hash()
this._hashToExpandedSymbol.delete(t)}}catch(e){Object(c.m)(e)}s.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(e){const t=(e.attributes?Object.keys(e.attributes):[]).map(t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"}))
return Object(l.j)(e.geometry)?null:{geometryType:Object(p.c)(e.geometry),spatialReference:d.default.fromJSON(e.geometry.spatialReference),fields:t}}_getSymbolForGraphic(e,t){return Object(c.v)(this._controller.signal),Object(l.k)(e.symbol)?Promise.resolve(e.symbol):Object(l.k)(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,abortOptions:t}):Promise.resolve(this._getNullSymbol(e))}_getCIMSymbol(e,t,i){let s=this._hashToCIM.get(t)
if(s)return Promise.resolve(s)
const r=Object(y.f)(e)
if(Object(l.k)(r)){if("CIMSymbolReference"===r.type)return s=r,this._hashToCIM.set(t,s),Promise.resolve(s)
let e=this._hashToCIMSymbolPromise.get(t)
return e||(e=r.fetchCIMSymbol(i).then(e=>(this._hashToCIM.set(t,e.data),this._hashToCIMSymbolPromise.delete(t),e)).catch(e=>(this._hashToCIMSymbolPromise.delete(t),Object(c.u)(e),null)),this._hashToCIMSymbolPromise.set(t,e),e)}return Promise.resolve(null)}_expandCIMSymbol(e,t,i,s){const r=this._hashToExpandedSymbol.get(i)
if(r)return Promise.resolve(r)
let n=this._hashToExpandedSymbolPromise.get(i)
if(n)return n
const a=this.container.stage,o=this._getArcadeInfo(t),l=Object(ce.c)(null),c=Object(ke.createSymbolSchema)(e,l)
return n=Object(Le.b)(c,o,a.resourceManager,s),this._hashToExpandedSymbolPromise.set(i,n),n.then(e=>(this._hashToExpandedSymbol.set(i,e),this._hashToExpandedSymbolPromise.delete(i),e)),n}async _getSymbolResources(e,t){return Object(c.v)(this._controller.signal),this.container.stage?this._getSymbolForGraphic(e,t).then(i=>{const s=i.hash()
return this._getCIMSymbol(i,s,t).then(i=>Object(l.j)(i)?null:this._expandCIMSymbol(i,e,s,t).then(e=>{const t=e.layers.filter(e=>"text"===e.type&&"string"==typeof e.text)
if(t&&t.length>0){const i=new Array(t.length)
for(let e=0;e<t.length;e++){const s=t[e],r=[],[a]=Object(n.a)(s.text)
for(let e=0;e<a.length;e++)r.push(a.charCodeAt(e))
i[e]={symbol:s,id:e,glyphIds:r}}const r=new Map
return this.container.getMaterialItems(i).then(i=>{for(let e=0;e<t.length;e++){const s=t[e]
r.set(s.cim,{text:s.text,mosaicItem:i[e].mosaicItem})}return{symbol:e,textInfo:r,hash:s}})}return{symbol:e,hash:s}}))}).catch(e=>(Object(c.u)(e),null)):null}async _projectAndNormalizeGeometry(e,t){if(Object(c.v)(this._controller.signal),Object(l.j)(e.geometry)||"mesh"===e.geometry.type)return null
let i=e.geometry
if(Object(p.g)(i)){const e=i.rings
i.rings=e}else if(Object(p.h)(i)){const e=i.paths
i.paths=e}else if(Object(p.d)(i)){const s=await this._getSymbolForGraphic(e,t)
Object(c.v)(this._controller.signal),i=Object(Ee.f)(s.type)||Object(Ee.g)(s.type)?i.center:Object(Ee.h)(i)}await Object(b.a)(i.spatialReference,this.view.spatialReference)
const s=Object(m.a)(i),r=Object(b.b)(s,i.spatialReference,this.view.spatialReference)
return Object(_.a)(r),r}_onTileUpdate(e){const t=Object(g.e)(this.view.spatialReference)
if(e.added&&e.added.length>0)for(const i of e.added)this._addNewTile(i,t)
if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}async _addGraphic(e){this._abortProcessingGraphic(e.uid),Object(c.v)(this._controller.signal)
const t=new AbortController
this._graphicIdToAbortController.set(e.uid,t)
const i={signal:t.signal}
try{await this._addOrUpdateGraphic(e,i),Object(c.v)(this._controller.signal),this._graphicIdToAbortController.delete(e.uid)}catch(t){if(this._graphicIdToAbortController.delete(e.uid),!Object(c.m)(t))throw t}}_updateGraphic(e,t){Object(c.v)(this._controller.signal)
const i=this._projectAndNormalizeGeometry(e,t),s=this._getSymbolResources(e,t)
return Promise.all([i,s]).then(([t,i])=>{Object(c.v)(this._controller.signal),this._graphicStore.addOrModify(e,i,t)})}_addOrUpdateGraphic(e,t){Object(c.v)(this._controller.signal)
const i=this._projectAndNormalizeGeometry(e,t),s=this._getSymbolResources(e,t)
return Promise.all([i,s]).then(([t,i])=>{Object(c.v)(this._controller.signal),this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,i,t)})}_addTile(e){const t=this.view.featuresTilingScheme.getTileBounds(Object(f.m)(),e),i=new B(e,t[0],t[3])
return this._tiles.set(e,i),this.container.addChild(i),i}async _addNewTile(e,t){const i=this._addTile(e.key),s=this._graphicStore.queryTileData(this._templateStore,e)
if(0===s.length)return
if(t){const i=Math.round((t.valid[1]-t.valid[0])/e.resolution)
for(const e of s)e.geometry&&(Object(p.f)(e.geometry)||Object(p.e)(e.geometry))&&this._wrapPoints(e,i)}const r=e.key
this._tileUpdateSet.add(e.key),this.notifyChange("updating")
try{const t={type:"update",clear:!1,addOrUpdate:await this._processGraphics(e,s),remove:[],end:!0,sort:!1}
i.patch(t),this._tileUpdateSet.delete(r),this.notifyChange("updating")}catch(e){if(this._tileUpdateSet.delete(r),this.notifyChange("updating"),!Object(c.m)(e))throw e}}_removeTile(e){if(!this._tiles.has(e))return
const t=this._tiles.get(e)
this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_setFilterState(e,t){const i=this._displayIds.get(e),s=this._attributeStore.getHighlightFlag(e)
this._attributeStore.setData(i,0,0,s|(t?v.q:0))}_getGraphicsData(e,t,i){const s=this.view,r=Object(g.e)(s.spatialReference),n=this._graphicStore.getGraphicsData(e,t,i)
if(r){const e=Math.round((r.valid[1]-r.valid[0])/t.resolution)
for(const t of n)t.geometry&&(Object(p.f)(t.geometry)||Object(p.e)(t.geometry))&&this._wrapPoints(t,e)}return n}_wrapPoints(e,t){const i=e.geometry
Object(p.e)(i)?this._wrapMultipoint(i,t):this._wrapPoint(e,t)}_wrapMultipoint(e,t){const i=e.points,s=[]
let r=0,n=0
for(const[e,a]of i){if(s.push([e+r,a]),r=0,t===Ee.b){const i=5*Ee.a
e+n<i?(s.push([t,0]),r=-t):e+n>Ee.b-i&&(s.push([-t,0]),r=t)}else e+n<-Ee.a?(s.push([t,0]),r=-t):e+n>Ee.b+Ee.a&&(s.push([-t,0]),r=t)
n+=e}e.points=s}_wrapPoint(e,t){const i=e.geometry
if(t===Ee.b){const s=5*Ee.a
i.x<s?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Ee.b-s&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}else i.x<-Ee.a?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Ee.b+Ee.a&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}_processGraphics(e,t,i){if(!t||!t.length||!this._meshFactory)return null
const s=pe.from(t),r=this._meshFactory
return this._matcher.then(t=>r.analyzeGraphics(s,this.container.stage.resourceManager,t,null,null,i).then(()=>(this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(e,s))))}_processAnalyzedGraphics(e,t){const i=this._meshFactory,s=t.getSize(),r=t.getCursor(),n={features:s,records:s,metrics:0},a=new ne.a(e.key.id,n,{fill:"default"},!1,!1),o=[]
for(;r.next();){const t=r.readGraphic()
t.insertAfter=-1===t.insertAfter?-1:this._displayIds.get(t.insertAfter),t.displayId=this._displayIds.get(t.attributes[this.uid])
const s=new q(t.displayId)
s.insertAfter=t.insertAfter,o.push(s),i.writeGraphic(a,r,e.level,this.container.stage.resourceManager)}const l=e.tileInfoView.tileInfo.isWrappable,c=a.serialize(l)
if(1!==c.length)return new re
const h=c[0].message
return re.fromVertexData(h,o)}_abortProcessingGraphic(e){this._graphicIdToAbortController.has(e)&&this._graphicIdToAbortController.get(e).abort()}_getNullSymbol(e){const t=e.geometry
return Object(p.h)(t)?x.g:Object(p.g)(t)||Object(p.d)(t)?x.f:x.e}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout(()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")},160),this.notifyChange("updating")}}
Object(s.a)([Object(h.b)({constructOnly:!0})],Ve.prototype,"requestUpdateCallback",void 0),Object(s.a)([Object(h.b)()],Ve.prototype,"container",void 0),Object(s.a)([Object(h.b)({constructOnly:!0})],Ve.prototype,"graphics",void 0),Object(s.a)([Object(h.b)()],Ve.prototype,"updating",null),Object(s.a)([Object(h.b)()],Ve.prototype,"view",void 0),Object(s.a)([Object(h.b)()],Ve.prototype,"updateRequested",void 0),Ve=Object(s.a)([Object(u.a)("esri.views.2d.layers.support.GraphicsView2D")],Ve)
const We=Ve},1496:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _})),i(1502),i(1394)
var s=i(1059),r=(i(1437),i(1466),i(891)),n=i(1074),a=i(908),o=i(942)
const l=new Map
l.set(a.d.MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),l.set(a.d.LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),l.set(a.d.FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),l.set(a.d.TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),l.set(a.d.LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4})
var c=i(1237)
class h{constructor(e,t,i){this._start={index:0,vertex:0}
const s=function(e,t,i){const{indicesPerRecord:s,multiplier:n,verticesPerRecord:a}=l.get(e)
return{recordBytes:i*r.n*Uint32Array.BYTES_PER_ELEMENT,indexBytes:n*s*i*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:n*a*i*t}}(e,t,i),n=t/4
this.geometryType=e,this._records=new c.a(Int32Array,s.recordBytes),this._indices=new c.a(Uint32Array,s.indexBytes),this._vertices=new c.a(Uint32Array,s.vertexBytes),this._metrics=new c.a(Float32Array,0),this._strideInt=n}serialize(e){const t=this._records.buffer(),i=this._indices.buffer(),s=this._vertices.buffer(),r=this._metrics.length?this._metrics.buffer():null,n=4*this._strideInt
return e.push(t,i,s),{stride:n,records:t,indices:i,vertices:s,metrics:r}}get strideInt(){return this._strideInt}get recordCount(){return this._records.length/r.n}get vertexCount(){return this._vertices.length/this._strideInt}get indexCount(){return this._indices.length}get indexWriter(){return this._indices}get vertexWriter(){return this._vertices}get metricWriter(){return this._metrics}vertexEnsureSize(e){this._vertices.ensureSize(e)}indexEnsureSize(e){this._indices.ensureSize(e)}recordStart(){this._start.index=this._indices.length,this._start.vertex=this._vertices.length}recordEnd(e,t,i,s,r,n,a,o){this._records.push(e),this._records.push(t),this._records.push(i),this._records.push(s),this._records.push(r),this._records.push(n),this._records.push(a),this._records.writeF32(o)}writeIndex(e){this._indices.push(e)}writeVertex(e){this._vertices.push(e)}writeVertexF32(e){this._vertices.writeF32(e)}copyLastFrom(e,t,i){const s=e._records.length-r.n,n=e._records.getValue(s),a=e._records.getValue(s+1),o=e._records.getValue(s+2),l=e._records.getValue(s+4),c=e._records.getValue(s+6),h=e._records.getValue(s+7),u=this._vertices.length,d=(e._start.vertex-this._vertices.length)/this._strideInt,f=this._indices.length,_=this.vertexCount
for(let t=e._start.index;t!==e._indices.length;t++){const i=e._indices.getValue(t)
this._indices.push(i-d)}for(let t=e._start.vertex;t!==e._vertices.length;t++){const i=e._vertices.getValue(t)
this._vertices.push(i)}for(let e=u;e<=this._vertices.length;e+=this._strideInt)this._vertices.i1616Add(e,t,i)
this._records.push(n),this._records.push(a),this._records.push(o),this._records.push(f),this._records.push(l),this._records.push(_),this._records.push(c),this._records.push(h)}}var u=i(1443)
function d(e){switch(e){case 1:case 8:case 32:return-1
case 2:case 64:return 0
case 4:case 16:case 128:return 1}}function f(e){switch(e){case 1:case 2:case 4:return-1
case 8:case 16:return 0
case 32:case 64:case 128:return 1}}class _{constructor(e,t,i,s,r){this._hasAggregate=!1,this.hasRecords=!1,this._data={self:new Map,neighbors:new Array},this._current={geometryType:0,writer:null,overlaps:0,start:0,insertAfter:0,sortKey:0,id:0,materialKey:0,indexStart:0,vertStart:0,isDotDensity:!1,bufferingEnabled:!1,metricBoxLenPointer:0},this.hint=t,this.tileKey=e,this._hasAggregate=s,this._pixelBufferEnabled=r,this._strideOptions=i}get hasAggregates(){return this._hasAggregate}get hasPixelBufferEnabled(){return this._pixelBufferEnabled}serialize(e){const t=[]
return t.push(this._serializeTileVertexData(this.tileKey,this.tileKey,this._data.self)),this._data.neighbors.forEach((i,r)=>{const n=1<<r,a=d(n),o=f(n),l=Object(u.a)(new s.a(this.tileKey),a,o,e),c=this._serializeTileVertexData(this.tileKey,l.id,i.vertexData)
c.message.bufferIds=i.displayIds,t.push(c)}),t}_serializeTileVertexData(e,t,i){var s,r,n,o,l
const c=new Array
return{message:{tileKeyOrigin:e,tileKey:t,data:{[a.d.MARKER]:null==(s=i.get(a.d.MARKER))?void 0:s.serialize(c),[a.d.FILL]:null==(r=i.get(a.d.FILL))?void 0:r.serialize(c),[a.d.LINE]:null==(n=i.get(a.d.LINE))?void 0:n.serialize(c),[a.d.TEXT]:null==(o=i.get(a.d.TEXT))?void 0:o.serialize(c),[a.d.LABEL]:null==(l=i.get(a.d.LABEL))?void 0:l.serialize(c)}},transferList:c}}featureStart(e,t){this._current.insertAfter=e,this._current.sortKey=t}featureEnd(){}recordStart(e,t,i,s){this._current.writer=this._getVertexWriter(i),this._current.overlaps=0,this._current.indexStart=this._current.writer.indexCount,this._current.vertStart=this._current.writer.vertexCount,this._current.bufferingEnabled=s,this._current.id=e,this._current.materialKey=t,this._current.geometryType=i,this._current.isDotDensity=!1,this._current.writer.recordStart()}recordCount(){return this._current.writer.recordCount}vertexCount(){return this._current.writer.vertexCount}indexCount(){return this._current.writer.indexCount}vertexEnsureSize(e){this._current.writer.vertexEnsureSize(e)}indexEnsureSize(e){this._current.writer.indexEnsureSize(e)}vertexBounds(e,t,i,s){this._current.bufferingEnabled&&this._addOverlap(e,t,i,s)}vertexWrite(e){this._current.writer.writeVertex(e)}vertexWriteF32(e){this._current.writer.writeVertexF32(e)}vertexEnd(){}vertexWriter(){return this._current.writer.vertexWriter}indexWrite(e){this._current.writer.writeIndex(e)}indexWriter(){return this._current.writer.indexWriter}metricWriter(){return this._current.writer.metricWriter}metricStart(e,t,i,s,r,o,l,c){this._current.writer=this._getVertexWriter(a.d.LABEL)
const h=this._current.writer.metricWriter
h.push(Object(n.f)(e)),h.push(t),h.push(i),h.push(s),h.push(r),h.push(o),h.push(l),h.push(c),h.push(255),this._current.metricBoxLenPointer=h.push(0)}metricEnd(){const e=this._current.writer.metricWriter
0===e.getValue(this._current.metricBoxLenPointer)&&e.seek(e.length-10)}metricBoxWrite(e,t,i,s){const r=this._current.writer.metricWriter
r.incr(this._current.metricBoxLenPointer),r.push(0),r.push(0),r.push(e),r.push(t),r.push(i),r.push(s)}recordEnd(){const e=this._current.vertStart,t=this._current.writer.vertexCount-e
if(!t)return!1
this.hasRecords=!0
const i=this._current.indexStart,s=this._current.writer.indexCount-i
if(this._current.writer.recordEnd(this._current.id,this._current.materialKey,this._current.insertAfter,i,s,e,t,this._current.sortKey),!this._pixelBufferEnabled||this._hasAggregate||0===this._current.overlaps||this._current.geometryType===a.d.LABEL)return!0
const n=this._current.writer
for(let e=0;e<8;e++){const t=1<<e
if(this._current.overlaps&t){this._data.neighbors[e]||(this._data.neighbors[e]={vertexData:new Map,displayIds:new Set})
const i=this._data.neighbors[e],s=this._current.geometryType
if(!i.vertexData.has(s)){const e=Object(o.n)(s,this._strideOptions).geometry,t=new h(s,e,r.y)
i.vertexData.set(s,t)}const a=i.vertexData.get(this._current.geometryType),l=8,c=512*-d(t)*l,u=512*-f(t)*l
a.copyLastFrom(n,c,u),i.displayIds.add(this._current.id)}}return!0}_addOverlap(e,t,i,s){const n=255^((e<0+i?148:e>=r.P-i?41:189)|(t<0+s?224:t>=r.P-s?7:231))
this._current.overlaps|=n}_getVertexWriter(e){if(!this._data.self.has(e)){const t=this._data.self,i=Object(o.n)(e,this._strideOptions).geometry
t.set(e,new h(e,i,this.hint.records))}return this._data.self.get(e)}}},1497:function(e,t,i){"use strict"
i.d(t,"a",(function(){return B})),i(77)
var s=i(20),r=i(861),n=i(1291),a=i(1074),o=i(354),l=i(177),c=i(874),h=i(876),u=i(969),d=i(1152),f=i(1e3),_=i(891),p=i(908),m=i(937),g=i(939),b=i(1013)
function y(e){return e.length-1}function x(e,t,i=1){const[s,r]=function(e,t){return e[t+1]}(e,t)
return Math.sqrt(s*s+r*r)*i}class v{constructor(e,t,i,s,r){this._segments=e,this._index=t,this._distance=i,this._xStart=s,this._yStart=r,this._done=!1}static create(e){return new v(e,0,0,e[0][0],e[0][1])}clone(){return new v(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(0===this._distance||1===e._distance)||e._index===this._index+1&&(1===this._distance||0===e._distance)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length)
let i=Math.acos(t)
return e>0&&(i=2*Math.PI-i),i}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this
return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<y(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const i=this.backwardLength
if(e<=i)return this._distance=(i-e)/this.length,this
let s=this.backwardLength
for(;this.prev();){if(s+this.length>e)return this._seekBackwards(e-s)
s+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t)
if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this
let i=this.remainingLength
for(;this.next();){if(i+this.length>e)return this.seek(e-i,t)
i+=this.length}return this._distance=1,t?this:null}}function O(e,t,i,s=!0){const r=function(e){let t=0
for(let i=0;i<y(e);i++)t+=x(e,i)
return t}(e),n=v.create(e),a=r/2
if(!s)return n.seek(a),void i(n.clone(),0,a+0*t,r)
const o=Math.max((r-t)/2,0),l=Math.floor(o/t),c=a-l*t
n.seek(c)
for(let e=-l;e<=l;e++)n.x<512&&n.x>=0&&n.y<512&&n.y>=0&&i(n.clone(),e,a+e*t,r),n.seek(t)}function w(e,t){const i=1e-6
if(t<=0)return
const s=e.length
if(s<3)return
const r=[]
let n=0
r.push(0)
for(let t=1;t<s;t++)n+=Object(b.c)(e[t],e[t-1]),r.push(n)
t=Math.min(t,.2*n)
const a=[]
a.push(e[0][0]),a.push(e[0][1])
const o=e[s-1][0],l=e[s-1][1],c=Object(b.h)([0,0],e[0],e[1])
Object(b.g)(c),e[0][0]+=t*c[0],e[0][1]+=t*c[1],Object(b.h)(c,e[s-1],e[s-2]),Object(b.g)(c),e[s-1][0]+=t*c[0],e[s-1][1]+=t*c[1]
for(let e=1;e<s;e++)r[e]+=t
r[s-1]+=t
const h=.5*t
for(let n=1;n<s-1;n++){let o=0,l=0,c=0
for(let s=n-1;s>=0&&!(r[s+1]<r[n]-h);s--){const a=h+r[s+1]-r[n],u=r[s+1]-r[s],d=r[n]-r[s]<h?1:a/u
if(Math.abs(d)<i)break
const f=d*d,_=d*a-.5*f*u,p=d*u/t,m=e[s+1],g=e[s][0]-m[0],b=e[s][1]-m[1]
o+=p/_*(m[0]*d*a+.5*f*(a*g-u*m[0])-f*d*u*g/3),l+=p/_*(m[1]*d*a+.5*f*(a*b-u*m[1])-f*d*u*b/3),c+=p}for(let a=n+1;a<s&&!(r[a-1]>r[n]+h);a++){const s=h-r[a-1]+r[n],u=r[a]-r[a-1],d=r[a]-r[n]<h?1:s/u
if(Math.abs(d)<i)break
const f=d*d,_=d*s-.5*f*u,p=d*u/t,m=e[a-1],g=e[a][0]-m[0],b=e[a][1]-m[1]
o+=p/_*(m[0]*d*s+.5*f*(s*g-u*m[0])-f*d*u*g/3),l+=p/_*(m[1]*d*s+.5*f*(s*b-u*m[1])-f*d*u*b/3),c+=p}a.push(o/c),a.push(l/c)}a.push(o),a.push(l)
for(let t=0,i=0;t<s;t++)e[t][0]=a[i++],e[t][1]=a[i++]}var T=i(1324)
const E=l.a.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),S=function(e){const t=new Map
return e=>(t.has(e)||t.set(e,(e=>{let t=0
if(0===e)return 1/0
for(;!(e%2);)t++,e/=2
return t})(e)),t.get(e))}(),R=e=>Math.floor(127*e+127),M=e=>Math.floor(10*e),F=e=>Math.round(e*(254/360))
class C extends T.a{constructor(e,t,i,s){var r,n,a
super(e,i.font.size,i.haloSize||0,i.font.size,i.color&&Object(f.d)(i.color)||0,i.haloColor&&Object(f.d)(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,Object(d.i)(t.labelPlacement)?u.a.MAP:u.a.SCREEN,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null,null,null,null),this._outLineLabelAngle=0,this._refPlacementPadding=0,this._refPlacementDirX=0,this._refPlacementDirY=0,this._refOffsetX=0,this._refOffsetY=0,this._zoomLevel=0,this.geometryType=p.d.LABEL,this._allowOverrun=null!=(r=t.allowOverrun)&&r,this._repeatLabel=null==(n=t.repeatLabel)||n,this._labelPosition=null!=(a=t.labelPosition)?a:"curved"
const o=function(e,t){const i=!!e.minScale&&t.scaleToZoom(e.minScale)||0
return Object(c.f)(i,0,25.5)}(t,s),l=function(e,t){const i=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255
return Object(c.f)(i,0,25.5)}(t,s),m=t.labelPlacement,[b,y]=Object(d.c)(m)
this._xAlignD=b,this._yAlignD=y,this._minZoom=o,this._maxZoom=l,this._refPlacementPadding=Object(h.h)(i.haloSize)+_.N,this._repeatLabelDistance=t.repeatLabelDistance?Object(h.h)(t.repeatLabelDistance):128
const x=g.b.load(e)
x.sdf=!0,this._materialKey=x.data}static fromLabelClass(e,t){if("esriServerLinePlacementCenterAlong"===e.labelPlacement){const t=e.symbol
t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new C(e.materialKey,e,e.symbol,t)}get _shapedBox(){return Object(s.t)(this._shapingInfo).bounds}setZoomLevel(e){this._zoomLevel=e}bindReferenceTemplate(e){let t=Object(d.f)(this._xAlignD),i=Object(d.h)(this._yAlignD)
if(this._refOffsetX=0,this._refOffsetY=0,Object(s.j)(e))return void(this._refSymbolAndPlacementOffset=Object(m.b)(0,0,R(t),R(i)))
if("circle"===e.boundsType&&(t||i)){const e=Math.sqrt(t*t+i*i)
t/=e,i/=e}const r=Math.max(e.height,e.width),n=4*this._refPlacementPadding
this._refSymbolAndPlacementOffset=Object(m.b)(n,r,R(t),R(i)),this._referenceSize=r,this._refPlacementDirX=t,this._refPlacementDirY=i,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset}_write(e,t){if(Object(s.j)(this._shapingInfo))return
const i=this._shapingInfo,r=t.getDisplayId(),n="esriGeometryPolygon"===t.geometryType?t.readLegacyCentroid():t.readLegacyGeometry()
if(n)switch(this.current={out:e,inId:r,inShaping:i,zoomLevel:this._zoomLevel},t.geometryType){case"esriGeometryPolyline":this._placeLineLabels(n)
break
case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(n)
break
default:((e,t="mapview-labeling")=>{E.error(new o.a(t,e))})("mapview-labeling",`Geometry of type ${t.geometryType} is not supported`)}}_isVisible(e,t){const i=M(this.current.zoomLevel)
return M(e)<=i&&i<=M(t)}_placePointLabels(e){const{out:t,inId:i,inShaping:s}=this.current
this._writeGlyphs(t,i,e,s)}_placeLineLabels(e){const t=function(e,t){const i=t
for(let t=0;t<e.length;t++){let s=e[t]
const r=[]
r.push(s[0])
for(let e=1;e<s.length;e++){let[t,i]=r[e-1]
t+=s[e][0],i+=s[e][1],r.push([t,i])}w(r,i)
const n=[]
n.push(r[0])
for(let e=1;e<r.length;e++){const[t,i]=r[e-1],[s,a]=r[e],o=Math.round(s-t),l=Math.round(a-i)
n.push([o,l])}e[t]=n,s=n}return e}(e.paths,this.current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),s=(this._shapedBox.width+this._repeatLabelDistance)/2
for(const e of t)O(e,s,i,this._repeatLabel)}_placeSubdivGlyphs(e,t,i,s){const r=S(t),n=this._shapedBox.width/2,a=Math.sqrt(this._repeatLabelDistance)/2,o=Math.min(i,s-i),l=Math.log2(o/(a+n/2)),c=0===t?l:Math.min(r,l),h=Math.max(this._minZoom,this.current.zoomLevel+1-c),u=this.current.zoomLevel-h,d=this._shapedBox.width/2*2**u
this.current.inShaping.isMultiline?0===t&&this._placeStraight(e,h):this._allowOverrun&&u<0?this._placeStraightAlong(e,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(e,h):"curved"===this._labelPosition&&this._placeCurved(e,h,d)}_placeStraight(e,t){const{out:i,inId:s,inShaping:r}=this.current
this._writeGlyphs(i,s,e,r,t)}_placeCurved(e,t,i){const{out:s,inId:r}=this.current
s.metricStart(r,t,e.x,e.y,0,0,0,0)
const n=e.clone(),a=e.angle*(180/Math.PI)%360,o=(e.angle*(180/Math.PI)+180)%360
this._outLineLabelAngle=F(a),this._placeFirst(n,t,1),this._placeBack(e,n,t,i,1),this._placeForward(e,n,t,i,1),this._outLineLabelAngle=F(o),this._placeFirst(n,t,0),this._placeBack(e,n,t,i,0),this._placeForward(e,n,t,i,0),s.metricEnd()}_placeStraightAlong(e,t){const{out:i,inId:s}=this.current
i.metricStart(s,t,e.x,e.y,0,0,0,0)
const r=e.clone(),n=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360
this._outLineLabelAngle=F(n),this._placeFirst(r,t,1,!0),this._outLineLabelAngle=F(a),this._placeFirst(r,t,0,!0),i.metricEnd()}_placeBack(e,t,i,s,r){const n=e.clone()
let a=e.backwardLength+0
for(;n.prev()&&!(a>=s);)this._placeOnSegment(n,t,a,i,-1,r),a+=n.length+0}_placeForward(e,t,i,s,r){const n=e.clone()
let a=e.remainingLength+0
for(;n.next()&&!(a>=s);)this._placeOnSegment(n,t,a,i,1,r),a+=n.length+0}_placeFirst(e,t,i,s=!1){const r=e,n=this.current.inShaping,a=n.glyphs,o=this.current.zoomLevel,{out:l,inId:c}=this.current
for(const h of a){const a=h.x>n.bounds.x?i:1-i,u=a*e.remainingLength+(1-a)*e.backwardLength,d=Math.abs(h.x+h.width/2-n.bounds.x),f=Math.max(0,o+Math.log2(d/(u+0))),_=Math.max(t,s?0:f)
if(h.maxZoom=25,h.angle=e.angle+(1-i)*Math.PI,h.minZoom=_,this._writeGlyph(l,c,r.x,r.y,h),i&&this._isVisible(h.minZoom,h.maxZoom)){const e=h.bounds
l.metricBoxWrite(e.center[0],e.center[1],e.width,e.height)}}}_placeOnSegment(e,t,i,s,r,n){const a=this.current.inShaping.glyphs,{out:o,inId:l}=this.current,c=this.current.inShaping,h=this.current.zoomLevel,u=e.dx/e.length,d=e.dy/e.length,f={x:e.x+i*-r*u,y:e.y+i*-r*d}
for(const u of a){const a=u.x>c.bounds.x?n:1-n
if(!(a&&1===r||!a&&-1===r))continue
const d=Math.abs(u.x+u.width/2-c.bounds.x),_=Math.max(0,h+Math.log2(d/i)-.1),p=Math.max(s,h+Math.log2(d/(i+e.length+0)))
if(0!==_&&(u.angle=e.angle+(1-n)*Math.PI,u.minZoom=p,u.maxZoom=_,this._writeGlyph(o,l,f.x,f.y,u),n&&this._isVisible(u.minZoom,u.maxZoom))){const i=u.bounds,s=e.x-t.x,r=e.y-t.y
o.metricBoxWrite(i.center[0]+s,i.center[1]+r,i.width,i.height)}}}_writeGlyphs(e,t,i,s,r=this._minZoom){if(i.x<0||i.x>=512||i.y<0||i.y>=512)return
const n=i.x+this._refOffsetX,a=i.y-this._refOffsetY
for(const i of s.glyphs)i.minZoom=r,i.maxZoom=this._maxZoom,this._writeGlyph(e,t,n,a,i)
const o=this._refPlacementDirX,l=this._refPlacementDirY,c=s.boundsT
e.metricStart(t,r,n,a,o,l,this._referenceSize,this._materialKey),e.metricBoxWrite(c.center[0],c.center[1],c.width,c.height),e.metricEnd()}_writeVertexCommon(e,t,i,s){const r=this._color,n=this._haloColor,a=Object(m.b)(0,0,this._size,this._haloSize),o=Math.max(s.minZoom,this._minZoom),l=Math.min(s.maxZoom,this._maxZoom),c=Object(m.b)(M(o),M(l),this._outLineLabelAngle,0)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(r),e.vertexWrite(n),e.vertexWrite(a),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(c)}}var j=i(1327),A=i(1330)
class B{constructor(e,t,i){this._loadPromise=Object(n.a)(),this._geometryType=e,this._idField=t,this._templateStore=i}update(e,t){Object(s.k)(e.mesh.labels)&&(this._labelTemplates=this._createLabelTemplates(e.mesh.labels,t)),this._schema=e}_createLabelTemplates(e,t){const i=new Map
if("simple"===e.type){for(const s of e.classes){const e=C.fromLabelClass(s,t)
i.set(s.index,e)}return i}for(const s in e.classes){const r=e.classes[s]
for(const e of r){const s=C.fromLabelClass(e,t)
i.set(e.index,s)}}return i}get templates(){return this._templateStore}async analyze(e,t,i,n,o,l,c){if(Object(r.n)(c))return
let h
"dictionary"===i.type&&(h=await i.analyze(this._idField,e.copy(),t,o,l,c))
let u=0
for(;e.next();){let t
if(t=h?h[u++]:Object(s.k)(n)&&Object(a.h)(e.getDisplayId())&&1!==e.readAttribute("cluster_count")?n.match(this._idField,e,this._geometryType,o,l):i.match(this._idField,e,this._geometryType,o,l),e.setGroupId(t),Object(A.b)(t)){const i=this._templateStore.getDynamicTemplateGroup(t)
for(const t of i)t&&t.analyze&&t.analyze(this._templateStore,e,o,l)}}return await this._loadPromise,this._templateStore.finalize(c)}async analyzeGraphics(e,t,i,s,n,a){if(Object(r.n)(a))return
const o=e.getCursor()
for(i&&await i.analyze(this._idField,o.copy(),t,s,n,a);o.next();){let e=o.getGroupId()
if(null!=e&&-1!==e||(e=i.match(this._idField,o,o.geometryType,s,n),o.setGroupId(e)),Object(A.b)(e)){const t=this._templateStore.getDynamicTemplateGroup(e)
for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,o,s,n)}o.setGroupId(e)}return await this._loadPromise,this._templateStore.finalize(a)}writeGraphic(e,t,i,s){const r=t.getGroupId(),n=t.getDisplayId(),a=this._templateStore.getTemplateGroup(r)
if(e.featureStart(t.insertAfter,0),null!=n){if(Object(A.b)(r))for(const e of a)e&&e.bindFeature(t,null,null)
if(a){for(const r of a)r&&r.write(e,t,i,s)
e.featureEnd()}}}writeCursor(e,t,i,r,n,a,o){const l=t.getGroupId(),c=t.getDisplayId(),h=this._templateStore.getTemplateGroup(l),u=this._schema.mesh.sortKey
let d=0
if(Object(s.k)(u)&&(d=null!=u.fieldIndex?t.getComputedNumericAtIndex(u.fieldIndex):null!=u.field?t.readAttribute(u.field):t.readAttribute(this._idField),d*="asc"===u.order?1:-1),e.featureStart(0,null==d||isNaN(d)?0:d),null!=c&&h){if(Object(A.b)(l))for(const e of h)e.bindFeature(t,i,r)
for(const i of h)i.write(e,t,n,o)
if(Object(s.k)(a)&&e.hasRecords){const i=a&&this._findLabelRef(h)
this._writeLabels(e,t,a,i,n,o)}e.featureEnd()}}_findLabelRef(e){for(const t of e)if(t instanceof j.a)return t
return null}_writeLabels(e,t,i,r,n,a){for(const o of i)if(Object(s.k)(o)&&o){const{glyphs:i,rtl:s,index:l}=o,c=this._labelTemplates.get(l)
c.setZoomLevel(n),c.bindReferenceTemplate(r),c.bindTextInfo(i,s),c.write(e,t,null,a)}}}},1498:function(e,t,i){"use strict"
i.d(t,"a",(function(){return B})),i.d(t,"b",(function(){return T})),i.d(t,"c",(function(){return O}))
var s=i(354),r=i(77),n=i(178),a=i(177),o=i(20),l=i(876),c=i(942),h=i(908),u=i(1303),d=i(1120),f=(i(1179),i(1367)),_=i(891)
function p(e,t){return Math.max(e,t)}i(1168),i(1160),_.f.metrics,new f.a(0,0,24,24)
var m=i(1464),g=i(1467),b=i(1406)
const y=a.a.getLogger("esri.views.2d.layers.features.schemaUtils"),x="ValidationError",v={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null}
function O(e){let t=0,i=0,s=!1,r=!0,n=!0
if(Object(o.k)(e)){if(i=function(e){if(!("visualVariables"in e))return 0
if(!e.hasVisualVariables("size"))return 0
const t=e.getVisualVariablesForType("size")
if(!t[0])return 0
const i=t[0]
if("outline"===i.target)return 0
if("stops"===i.transformationType)return i.stops.map(e=>e.size).reduce(p,0)
if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0
return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map(e=>e.size).reduce(p,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map(e=>e.size).reduce(p,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}(e),"visualVariables"in e&&(t=function(e){if(!e)return h.e.NONE
let t=0
for(const i of e)if("size"===i.type){const e=Object(u.a)(i)
t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=h.e.COLOR:"opacity"===i.type?t|=h.e.OPACITY:"rotation"===i.type&&(t|=h.e.ROTATION)
return t}(e.visualVariables||[]),s="dot-density"===e.type),"dictionary"===e.type)return{maxVVSize:i,supportsOutlineFills:!1,vvFlags:t,stride:{fill:"default"}}
if(!s){const t=e.getSymbols()
"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol)
for(const e of t)if("cim"===e.type&&(r=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline
t&&"none"!==t.style&&"solid"!==t.style&&(n=!1)
const i=t&&"none"!==t.style&&"solid"!==t.style,s="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;("picture-fill"===e.type||s||i)&&(r=!1)}}}return s&&(n=!1),{vvFlags:t,maxVVSize:i,supportsOutlineFills:n,stride:{fill:s?"dot-density":r?"simple":"default"}}}function w(e,t){const i=Object(n.a)(e)
return i.some(e=>function(e,t){const i=e.labelPlacement,r=v[t]
if(!e.symbol)return y.warn("No ILabelClass symbol specified."),!0
if(!r)return y.error(new s.a("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0
if(!r.some(e=>e===i)){const s=r[0]
i&&y.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${s}`),e.labelPlacement=s}return!1}(e,t))?[]:i}function T(e){return Object(r.a)("esri-2d-update-debug")&&console.debug("Created new schema",E(e,!0)),E(e)}function E(e,t=!1){try{var i,r
const n=function(e,t=!1){const i=new Array
return i.push(function(e,t,i=!1){const r={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,a=n?"aggregate":"feature"
if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},stride:{fill:"default"}},n={type:"subtype",mapping:{},target:"feature"},l={type:"subtype",classes:{}},c={type:"symbol",target:"feature",aggregateFields:[],attributes:r,storage:n,mesh:{matcher:t,aggregateMatcher:null,labels:l,sortKey:null}},h=new Set
let u=0
for(const{renderer:c,subtypeCode:d,labelingInfo:f,labelsVisible:_}of e.sublayers){const e=B(r,a,c,i),p=A(r,a,c),m=_&&f
if("visualVariables"in c&&c.visualVariables&&c.visualVariables.length)throw new s.a(x,"Visual variables are currently not supported for subtype layers")
if("dictionary"===e.type)throw new s.a(x,"Dictionary renderer is not supported in subtype layers")
if("subtype"===e.type)throw new s.a(x,"Nested subtype renderers is not supported")
if(Object(o.k)(p)&&"subtype"===p.type)throw new s.a(x,"Nested subtype storage is not supported")
if(Object(o.k)(p)&&"dot-density"===p.type)throw new s.a(x,"Dot density attributes are not supported in subtype layers")
if(h.has(d))throw new s.a(x,"Subtype codes for sublayers must be unique")
h.add(d),t.renderers[d]=e,n.mapping[d]=p,m&&(l.classes[d]=m.map(e=>j(c,r,e,"feature",u++,i)))}return c}if("heatmap"===e.renderer.type){const{blurRadius:t,fieldOffset:i,field:s}=e.renderer
return{type:"heatmap",aggregateFields:[],attributes:r,target:a,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:F(r,{target:a,field:s,resultType:"numeric"}).field}}}{const t=[],l="aggregate"===a?Object(g.b)(t,e.renderer,n,null):e.renderer
!function(e,t){const i={mesh:!0,storage:!0}
for(const s of t){const{name:t,outStatistic:r}=s,{statisticType:n,onStatisticField:a}=r
let o=null,l=null,c=null
const h="numeric",u="feature"
"onStatisticValueExpression"in r?l=C(e,{type:"expression",target:u,valueExpression:r.onStatisticValueExpression,resultType:h}).fieldIndex:"onStatisticNormalizationField"in r?(o=C(e,{type:"field",target:u,field:a,resultType:h}).field,c=r.onStatisticNormalizationField):o=C(e,{type:"field",target:u,field:a,resultType:h}).field,C(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:o,inNormalizationField:c,inFieldIndex:l,statisticType:n})}}(r,t)
const c=B(r,a,l,i)
let h=null
const u=A(r,a,l),f=Object(b.b)(e.geometryType)
let _=e.labelsVisible&&e.labelingInfo||[],p=[]
if(n){if("selection"===n.type)throw new s.a(x,"Mapview does not support `selection` reduction type",n)
if(n.symbol){const e=O(l)
h={type:"simple",symbol:Object(d.createSymbolSchema)(n.symbol,e,i),stride:e.stride}}p=n&&n.labelsVisible&&n.labelingInfo||[]}_=w(_,f),p=w(p,f)
let m=0
const v=[..._.map(e=>j(l,r,e,"feature",m++,i)),...p.map(e=>j(l,r,e,"aggregate",m++,i))],T=function(e,t){if(Object(o.j)(t)||!t.length)return null
t.length>1&&y.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`)
const i=t[0],r="ascending"===i.order?"asc":"desc"
return i.field?{field:i.field,order:r}:i.valueExpression?{fieldIndex:C(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:r}:(y.error(new s.a(x,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}(r,e.orderBy)
return{type:"symbol",target:a,attributes:r,aggregateFields:t,storage:u,mesh:{matcher:c,labels:{type:"simple",classes:v},aggregateMatcher:h,sortKey:T}}}}(e)),i}(e,t),a={}
return n.map(t=>function(e,t,i){switch(i.target){case"feature":return void M(e,R(t),i)
case"aggregate":{if(!("featureReduction"in t))return
const r=t.featureReduction
if("selection"===r.type)throw new s.a(x,"Mapview does not support `selection` reduction type",r)
return M(e,R(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(l.h)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(l.h)(t.clusterMaxSize)/64),fields:i.aggregateFields}}),S(e.aggregate,i.attributes.fields)}(e,r,i)}}}(a,e,t)),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map(e=>e.toJSON()),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(r=e.timeExtent)?void 0:r.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,targets:a}}catch(e){if(e.fieldName===x)return y.error(e),null
throw e}}function S(e,t){for(const i in t){const s=t[i]
if(s.target!==e.name)continue
const r=e.attributes[i]
r?(r.context.mesh=r.context.mesh||s.context.mesh,r.context.storage=r.context.storage||s.context.storage):e.attributes[i]=s}return e}function R(e){var t,i,s,r,n
return[null!=(t=null==(i=Object(o.t)(e.filter))?void 0:i.toJSON())?t:null,null!=(s=null==(r=Object(o.t)(null==(n=Object(o.t)(e.featureEffect))?void 0:n.filter))?void 0:r.toJSON())?s:null]}function M(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),S(e.feature,i.attributes.fields),e}function F(e,t){return t.field?C(e,{...t,type:"field",field:t.field}):t.valueExpression?C(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function C(e,t){switch(t.type){case"expression":{const i=t.valueExpression
if(!e.fields[i]){const s=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:s}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label)
if(!e.fields[i]){const s=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:s}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field
return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function j(e,t,i,s,r,n=!1){const a=C(t,{type:"label-expression",target:s,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:o}=a,l=O(e)
return{...Object(d.createSymbolSchema)(i,l,n),fieldIndex:o,target:s,index:r}}function A(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){return i&&i.length?{type:"dot-density",mapping:i.map((i,s)=>{const{field:r,fieldIndex:n}=F(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t})
return{binding:s,field:r,fieldIndex:n}}),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,i.attributes)
case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t}
const s={storage:!0},r="numeric"
return{type:"visual-variable",mapping:Object(m.b)(i).map(i=>{var n
const a=Object(c.p)(i.type),{field:o,fieldIndex:l}=F(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:s,resultType:r})
switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:F(e,{target:t,field:i.normalizationField,context:s,resultType:r}).field,valueRepresentation:null!=(n=i.valueRepresentation)?n:null}
case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:F(e,{target:t,field:i.normalizationField,context:s,resultType:r}).field}
case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:F(e,{target:t,field:i.normalizationField,context:s,resultType:r}).field}
case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}}).filter(e=>e),target:t}}(e,t,i.visualVariables)
case"heatmap":return null}}function B(e,t,i,r=!1){const n=Object(o.u)(e,{indexCount:0,fields:{}})
switch(i.type){case"simple":case"dot-density":return function(e,t,i=!1){const s=t.getSymbols(),r=s.length?s[0]:null,n=O(t)
return{type:"simple",symbol:Object(d.createSymbolSchema)(r,n,i),stride:n.stride}}(0,i,r)
case"class-breaks":return function(e,t,i,s=!1){const r=i.backgroundFillSymbol,{field:n,fieldIndex:a}=F(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),o=i.normalizationType,l="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,c=O(i),h=i.classBreakInfos.map(e=>({symbol:Object(d.createSymbolSchema)(e.symbol,c,s),min:e.minValue,max:e.maxValue})).sort((e,t)=>e.min-t.min)
return{type:"interval",attributes:e.fields,field:n,fieldIndex:a,backgroundFillSymbol:Object(d.createSymbolSchema)(r,c,s),defaultSymbol:Object(d.createSymbolSchema)(i.defaultSymbol,c,s),intervals:h,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:l,isMaxInclusive:i.isMaxInclusive,stride:c.stride}}(n,t,i,r)
case"unique-value":return function(e,t,i,r=!1){const n=[],a=i.backgroundFillSymbol,o={target:t,context:{mesh:!0},resultType:"string"}
if(i.field&&"string"!=typeof i.field)throw new s.a(x,"Expected renderer.field to be a string",i)
const{field:l,fieldIndex:c}=F(e,{...o,field:i.field,valueExpression:i.valueExpression}),h=O(i)
for(const e of i.uniqueValueInfos)n.push({value:""+e.value,symbol:Object(d.createSymbolSchema)(e.symbol,h,r)})
return{type:"map",attributes:e.fields,field:l,fieldIndex:c,field2:F(e,{...o,field:i.field2}).field,field3:F(e,{...o,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:Object(d.createSymbolSchema)(a,h),defaultSymbol:Object(d.createSymbolSchema)(i.defaultSymbol,h),map:n,stride:h.stride}}(n,t,i,r)
case"dictionary":return function(e,t,i=!1){const s=O(t)
return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:s,stride:s.stride}}(0,i,r)}}},1499:function(e,t,i){"use strict"
i.d(t,"a",(function(){return F}))
var s=i(861),r=i(1338),n=i(354),a=i(77),o=i(177),l=i(20),c=i(891),h=i(1074),u=i(942),d=i(1310),f=i(877),_=i(1041),p=i(973)
const m=o.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),g=Object(d.b)(d.a,m)
class b{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4
const{buffer:s,pixelType:r,textureOnly:n}=e,a=Object(u.l)(r)
this.shared=i,this.pixelType=r,this.size=t,this.textureOnly=n,n||(this.data=new a(Object(l.t)(s))),this._resetRange()}destroy(){Object(l.b)(this._texture,e=>e.dispose())
for(const e in this._fbos)Object(l.b)(this._fbos[e],t=>{"0"===e&&t.detachColorTexture(),t.dispose()}),this._fbos[e]=null
this._texture=null}get _textureDesc(){return{target:f.A.TEXTURE_2D,wrapMode:f.B.CLAMP_TO_EDGE,pixelFormat:f.p.RGBA,dataType:this.pixelType,samplingMode:f.z.NEAREST,width:this.size,height:this.size}}setData(e,t,i){const s=Object(h.f)(e),r=Object(l.t)(this.data),n=s*this.texelSize+t
!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(e,t){if(Object(l.j)(this.data))return null
const i=Object(h.f)(e)*this.texelSize+t
return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return Object(l.u)(this._texture,()=>this._initTexture(e))}getFBO(e,t=0){if(Object(l.j)(this._fbos[t])){const i={colorTarget:f.y.TEXTURE,depthStencilTarget:f.m.NONE},s=0===t?this.getTexture(e):this._textureDesc
this._fbos[t]=new _.a(e,i,s)}return this._fbos[t]}get locked(){return!(this.pixelType!==f.q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!Object(a.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const e=this.dirtyStart
return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const t=this.dirtyStart,i=this.dirtyEnd
if(!this.hasDirty)return
this._resetRange()
const s=Object(l.t)(this.data).buffer,r=this.getTexture(e),a=4,o=(t-t%this.size)/this.size,c=(i-i%this.size)/this.size,h=o,d=this.size,f=c,_=o*this.size*a,p=(d+f*this.size)*a-_,g=Object(u.l)(this.pixelType),b=new g(s,_*g.BYTES_PER_ELEMENT,p),y=this.size,x=f-h+1
if(x>this.size)return void m.error(new n.a("mapview-webgl","Out-of-bounds index when updating AttributeData"))
r.updateData(0,0,h,y,x,b)}catch(e){}t()}}update(e){const{data:t,start:i,end:s}=e
if(Object(l.k)(t)){const s=this.data,r=i*this.texelSize
for(let i=0;i<t.length;i++){const n=1<<i%this.texelSize
e.layout&n&&(s[r+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(e,t){const i=this.size
if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null))
const s=Object(u.l)(this.pixelType)
this.destroy(),this.data=new s(Object(l.t)(e.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new p.a(e,this._textureDesc,Object(l.u)(this.data,void 0))
if(Object(l.k)(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),o=Object(u.m)(r),l=new(Object(u.l)(r))(new ArrayBuffer(i*s*o*this.texelSize)),c=e.getBoundFramebufferObject(),{x:h,y:d,width:f,height:_}=e.getViewport()
e.bindFramebuffer(a),a.readPixels(0,0,i,s,n,r,l),t.updateData(0,0,0,2*i,s/2,l),e.setViewport(h,d,f,_),e.bindFramebuffer(c)}return this.destroy(),this._texture=t,this._texture}}class y{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:i,size:s}=e
if(this.shared=i,this.size=s,g("Initializing AttributeStoreView",e),Object(l.j)(this._data))this._data=Object(l.m)(t,e=>new b(e,s,i))
else for(let e=0;e<this._data.length;e++){const r=this._data[e],n=t[e]
Object(l.k)(n)&&(Object(l.j)(r)?this._data[e]=new b(n,s,i):r.resize(n,s))}this._initialized=!0}destroy(){Object(l.b)(this._data,e=>Object(l.m)(e,e=>e.destroy())),Object(l.b)(this._defaultTexture,e=>e.dispose())}isEmpty(){const e=this._data
return Object(l.j)(e)}isUpdating(){const e=Object(l.k)(this._pendingAttributeUpdate),t=e
return Object(a.a)("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}\n  -> hasPendingUpdate ${e}`),t}getBlock(e){return Object(l.j)(this._data)?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,c.e,0,0)}getData(e,t,i,s){if(!this._data)return 0
const r=Object(l.t)(this._data)[t]
if(Object(l.j)(r))return 0
const n=r.getData(e,i)
return Object(l.k)(n)?n:s}setData(e,t,i,s){const r=Object(l.t)(this._data)[t]
Object(l.t)(r).setData(e,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void m.error(new n.a("mapview-webgl","Tried to update attribute data with a pending update"))
const t=Object(s.g)()
return g("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},t.promise}update(){if(this._initialized&&Object(l.k)(this._pendingAttributeUpdate)){const{data:e,resolver:t}=this._pendingAttributeUpdate,i=Object(l.t)(this._data)
for(let t=0;t<e.blocks.length;t++){const s=e.blocks[t],r=i[t]
Object(l.b)(r,e=>Object(l.b)(s,i=>{g("Updating block "+t,i),e.update(i)}))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){this.update()
const i=this._getDefaultTexture(e)
if(!this._initialized)return e.bindTexture(i,c.B),void(t&&(e.bindTexture(i,c.C),e.bindTexture(i,c.D),e.bindTexture(i,c.E),e.bindTexture(i,c.H)))
const s=Object(l.t)(this._data)
this._locked&&!this._forceNextUpload||(Object(l.h)(s,t=>t.updateTexture(e,()=>this._onUpdate())),this._forceNextUpload=!1),e.bindTexture(Object(l.n)(s[c.c],i,t=>t.getTexture(e)),c.B),t&&(e.bindTexture(Object(l.n)(s[c.d],i,t=>t.getTexture(e)),c.H),e.bindTexture(Object(l.n)(s[c.a],i,t=>t.getTexture(e)),c.C),e.bindTexture(Object(l.n)(s[c.e],i,t=>t.getTexture(e)),c.D),e.bindTexture(Object(l.n)(s[c.b],i,t=>t.getTexture(e)),c.E))}_getDefaultTexture(e){if(Object(l.j)(this._defaultTexture)){const t={wrapMode:f.B.CLAMP_TO_EDGE,pixelFormat:f.p.RGBA,dataType:f.q.UNSIGNED_BYTE,samplingMode:f.z.NEAREST,width:1,height:1}
this._defaultTexture=new p.a(e,t,new Uint8Array(4))}return this._defaultTexture}}var x=i(1342),v=i(873),O=i(876),w=i(886),T=i(999),E=i(1266)
function S(e,t){const i=t.length
if(e<t[0].value||1===i)return t[0].size
for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value)
return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}function R(e,t,i=0){if(Object(l.j)(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0)
const{r:s,g:r,b:n,a:a}=t
e[i+0]=s*a/255,e[i+1]=r*a/255,e[i+2]=n*a/255,e[i+3]=a}class M{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops
switch(t.type){case"static":return t
case"level-dependent":return Object(l.u)(t.levels[e],()=>{let i=1/0,s=0
for(const r in t.levels){const t=parseFloat(r),n=Math.abs(e-t)
n<i&&(i=n,s=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])}
const r=2**((e-s)/2),n=Object(l.t)(t.levels[s]),a=new Float32Array(n.values)
return a[2]*=r,a[3]*=r,{sizes:Object(l.t)(n.sizes),values:a}})}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){Object(l.k)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,"dot-density"===e.type&&this._updateDotDensityInfo(e)}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:Object(E.a)().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(e){Object(l.k)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters
if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return
const s=e.size
if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue
let i,r
if(Object(u.r)(e.minSize)&&Object(u.r)(e.maxSize))if(Object(u.u)(e.minSize)&&Object(u.u)(e.maxSize))i=Object(O.h)(e.minSize),r=Object(O.h)(e.maxSize)
else{const s=t.scale
i=Object(O.h)(S(s,e.minSize.stops)),r=Object(O.h)(S(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=Object(O.h)(S(t.scale,s.scaleStops.stops))),s.unitValue){const e=Object(w.f)(t.spatialReference)/T.a[s.unitValue.unit]
this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=e.color
r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors))
const n=e.opacity
n&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities))
const a=e.rotation
a&&(i.vvRotationEnabled=!0,i.vvRotationType=a.type)}_updateDotDensityInfo(e){const t=e.attributes
this.ddDotValue=e.dotValue,this.ddDotScale=e.referenceScale,this.ddDotSize=e.dotSize,this.ddDotBlending=e.dotBlendingEnabled,this.ddSeed=e.seed
for(let e=0;e<c.o;e++){const i=e>=t.length?new v.a([0,0,0,0]):t[e].color
R(this.ddColors,i,4*e)}for(let t=0;t<8;t++)this.ddActiveDots[t]=t<e.attributes.length?1:0
R(this.ddBackgroundColor,e.backgroundColor)}}class F extends x.a{constructor(e){super(e),this._rendererInfo=new M,this._materialItemsRequestQueue=new r.a,this.attributeView=new y(()=>this.onAttributeStoreUpdate())}destroy(){this.removeAllChildren(),this.children.forEach(e=>e.destroy()),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return null
const i=Object(s.g)()
return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop()
for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e)
this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){const t=super.createRenderParams(e)
return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:s}){const{painter:r,pixelRatio:n}=e,a=t.map(e=>r.textureManager.rasterizeItem(e.symbol,n,e.glyphIds,i))
Promise.all(a).then(e=>{if(!this.stage)return void s.reject()
const i=e.map((e,i)=>({id:t[i].id,mosaicItem:e}))
s.resolve(i)},s.reject)}}},1500:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var s=i(1074)
class r{constructor(){this._freeIds=[],this._idCounter=1}createId(e=!1){return Object(s.d)(this._getFreeId(),e)}releaseId(e){this._freeIds.push(e)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var n=i(1312)
function a(e,t,i){if(!(e.length>t))for(;e.length<=t;)e.push(i)}class o{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new r,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const e=this._bitsets.length
return this._bitsets.push(n.a.create(this._allocatedSize,s.a)),e+1}getBitset(e){return this._bitsets[e-1]}_expand(){this._allocatedSize<<=1
for(const e of this._bitsets)e.resize(this._allocatedSize)}_ensureNumeric(e,t){this._numerics[e]||(this._numerics[e]=[]),a(this._numerics[e],t,0)}_ensureInstanceId(e){a(this._instanceIds,e,0)}_ensureString(e,t){this._strings[e]||(this._strings[e]=[]),a(this._strings[e],t,null)}createDisplayId(e=!1){const t=this._idGenerator.createId()
return t>this._allocatedSize&&this._expand(),Object(s.d)(t,e)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e)
return this._idGenerator.releaseId(e&s.a)}getComputedNumeric(e,t){return this.getComputedNumericAtIndex(e&s.a,0)}setComputedNumeric(e,t,i){return this.setComputedNumericAtIndex(e&s.a,i,0)}getComputedString(e,t){return this.getComputedStringAtIndex(e&s.a,0)}setComputedString(e,t,i){return this.setComputedStringAtIndex(e&s.a,0,i)}getComputedNumericAtIndex(e,t){const i=e&s.a
return this._ensureNumeric(t,i),this._numerics[t][i]}setComputedNumericAtIndex(e,t,i){const r=e&s.a
this._ensureNumeric(t,r),this._numerics[t][r]=i}getInstanceId(e){const t=e&s.a
return this._ensureInstanceId(t),this._instanceIds[t]}setInstanceId(e,t){const i=e&s.a
this._ensureInstanceId(i),this._instanceIds[i]=t}getComputedStringAtIndex(e,t){const i=e&s.a
return this._ensureString(t,i),this._strings[t][i]}setComputedStringAtIndex(e,t,i){const r=e&s.a
this._ensureString(t,r),this._strings[t][r]=i}getXMin(e){return this._bounds[4*(e&s.a)]}getYMin(e){return this._bounds[4*(e&s.a)+1]}getXMax(e){return this._bounds[4*(e&s.a)+2]}getYMax(e){return this._bounds[4*(e&s.a)+3]}setBounds(e,t){const i=t.readHydratedGeometry()
if(!i||!i.coords.length)return!1
let r=1/0,n=1/0,o=-1/0,l=-1/0
i.forEachVertex((e,t)=>{r=Math.min(r,e),n=Math.min(n,t),o=Math.max(o,e),l=Math.max(l,t)})
const c=e&s.a
return a(this._bounds,4*c+4,0),this._bounds[4*c]=r,this._bounds[4*c+1]=n,this._bounds[4*c+2]=o,this._bounds[4*c+3]=l,!0}}},1529:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
class s{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var i
return null==(i=this._outer.get(e))?void 0:i.get(t)}set(e,t,i){const s=this._outer.get(e)
s?s.set(t,i):this._outer.set(e,new Map([[t,i]]))}delete(e,t){const i=this._outer.get(e)
i&&(i.delete(t),0===i.size&&this._outer.delete(e))}forEach(e){this._outer.forEach((t,i)=>e(t,i))}}},1540:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var s=i(1499),r=i(978),n=i(1025),a=i(1042),o=i(1131),l=i(1008),c=i(1123),h=i(942),u=i(985),d=i(877),f=i(998)
const _=Math.PI/180
class p extends c.a{constructor(e){super(),this._dvsMat3=Object(n.b)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program&&(this._program.dispose(),this._program=null)}doRender(e){const{context:t}=e,i=this._getBounds()
if(i.length<1)return
this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(d.b.ONE,d.b.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0)
const s=this._program
t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(d.r.LINES,8*i.length,d.k.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:Object(n.b)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",m().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:n,pixelRatio:c,rotation:h,viewpoint:u}=t,d=_*h,{x:f,y:p}=u.targetGeometry,m=Object(l.b)(f,t.spatialReference)
this._localOrigin.x=m,this._localOrigin.y=p
const g=c*s[0],b=c*s[1],y=n*g,x=n*b,v=Object(r.b)(this._dvsMat3)
Object(r.l)(v,v,i),Object(r.c)(v,v,Object(a.b)(g/2,b/2)),Object(r.d)(v,v,Object(o.d)(s[0]/y,-b/x,1)),Object(r.n)(v,v,-d)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,n=new Float32Array(r),a=new Uint32Array(8*t.length)
let o=0,l=0
for(const e of t)e&&(n[2*o+0]=e[0]-i,n[2*o+1]=e[1]-s,n[2*o+2]=e[0]-i,n[2*o+3]=e[3]-s,n[2*o+4]=e[2]-i,n[2*o+5]=e[3]-s,n[2*o+6]=e[2]-i,n[2*o+7]=e[1]-s,a[l+0]=o+0,a[l+1]=o+3,a[l+2]=o+3,a[l+3]=o+2,a[l+4]=o+2,a[l+5]=o+1,a[l+6]=o+1,a[l+7]=o+0,o+=4,l+=8)
if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=u.a.createVertex(e,d.D.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=u.a.createIndex(e,d.D.DYNAMIC_DRAW,a),!this._vao){const t=m()
this._vao=new f.a(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const m=()=>Object(h.g)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:d.k.FLOAT}]})
class g extends s.a{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer&&(this._boundsRenderer.destroy(),this._boundsRenderer=null)}enableRenderingBounds(e){this._boundsRenderer=new p(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(d.h.EQUAL,i.stencilRef,255),i._displayList.replay(e,i,t))}}},1571:function(e,t,i){"use strict"
function s(e,t,i){for(let s=0;s<i;++s)t[2*s]=e[s],t[2*s+1]=e[s]-t[2*s]}function r(e,t,i,r){for(let o=0;o<r;++o)n[0]=e[o],s(n,a,1),t[o]=a[0],i[o]=a[1]}i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
const n=new Float64Array(1),a=new Float32Array(2)},1582:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var s=i(908),r=i(1540)
class n extends r.a{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some(e=>e.hasData)&&(super.renderChildren(e),e.drawPhase===s.c.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.c.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight
i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},1617:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
class s{constructor(e,t,i){this._initialVelocity=e,this._stopVelocity=t,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(e){return e>this.duration}get friction(){return this._friction}value(e){return this.valueFromInitialVelocity(this._initialVelocity,e)}valueDelta(e,t){const i=this.value(e)
return this.value(e+t)-i}valueFromInitialVelocity(e,t){t=Math.min(t,this.duration)
const i=1-this.friction
return e*(i**t-1)/Math.log(i)}}},1667:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var s=i(20)
class r{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start]
return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null
const e=this._buffer[this._start]
return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null
for(const t of this._buffer)if(Object(s.k)(t)&&e(t))return t
return null}clear(e){let t=this.dequeue()
for(;Object(s.k)(t);)e&&e(t),t=this.dequeue()}}},1715:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
class s{constructor(e){this.gain=e}update(e){if(this.hasLastValue){const t=this.computeDelta(e)
this._updateDelta(t)}this.lastValue=e}reset(){this.lastValue=void 0,this.filteredDelta=void 0}get hasLastValue(){return void 0!==this.lastValue}get hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(e){return e-this.lastValue}_updateDelta(e){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*e:this.filteredDelta=e}}},1811:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var s=i(874),r=i(1715),n=i(1617)
class a{constructor(e=2.5,t=.01,i=.95,s=12){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.maxVelocity=s,this.enabled=!0,this.value=new r.a(.8),this.time=new r.a(.3)}add(e,t){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(t)<.01)return
if(this.value.hasFilteredDelta){const t=this.value.computeDelta(e)
this.value.filteredDelta*t<0&&this.value.reset()}}this.time.update(t),this.value.update(e)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta)return null
let e=this.value.filteredDelta/this.time.filteredDelta
return e=Object(s.f)(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)}createMomentum(e,t,i){return new n.a(e,t,i)}}},1824:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var s=i(20),r=i(1529),n=i(1664)
class a{constructor(e){this._rctx=e,this._store=new r.a}dispose(){this._store.forEach(e=>e.forEach(e=>e.dispose())),this._store.clear()}acquire(e,t,i,r){const a=this._store.get(e,t)
if(Object(s.k)(a))return a.ref(),a
const o=new n.a(this._rctx,e,t,i,r)
return o.ref(),this._store.set(e,t,o),o}get test(){let e=0
return this._store.forEach(t=>t.forEach(t=>e+=t.hasGLName?2:1)),{cachedWebGLObjects:e}}}},1861:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l}))
var s=i(871),r=i(867),n=i(1715),a=i(1617)
class o extends a.a{constructor(e,t,i,s,r){super(e,t,i),this.sceneVelocity=s,this.direction=r}value(e){return super.valueFromInitialVelocity(this.sceneVelocity,e)}}class l{constructor(e=300,t=12,i=.84){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.enabled=!0,this.time=new n.a(.6),this.screen=[new n.a(.4),new n.a(.4)],this.scene=[new n.a(.6),new n.a(.6),new n.a(.6)],this.tmpDirection=Object(r.f)()}add(e,t,i){if(this.enabled){if(this.time.hasLastValue&&this.time.computeDelta(i)<.015)return
this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)}}reset(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null
const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta
return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)}createMomentum(e,t,i){Object(s.z)(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta)
const r=Object(s.s)(this.tmpDirection)
r>0&&Object(s.h)(this.tmpDirection,this.tmpDirection,1/r)
const n=r/this.time.filteredDelta
return new o(e,t,i,n,this.tmpDirection)}}},1862:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
var s=i(1811)
class r extends s.a{constructor(e=3,t=.01,i=.95,s=12){super(e,t,i,s)}add(e,t){if(this.value.hasLastValue){const t=this.value.lastValue
let i=e-t
for(;i>Math.PI;)i-=2*Math.PI
for(;i<-Math.PI;)i+=2*Math.PI
e=t+i}super.add(e,t)}}},1863:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var s=i(1617),r=i(1811)
class n extends s.a{constructor(e,t,i){super(e,t,i)}value(e){const t=super.value(e)
return Math.exp(t)}valueDelta(e,t){const i=super.value(e),s=super.value(e+t)-i
return Math.exp(s)}}class a extends r.a{constructor(e=2.5,t=.01,i=.95,s=12){super(e,t,i,s)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,i){return new n(e,t,i)}}},1901:function(e,t,i){"use strict"
function s(e){let t=""
for(const i in e){const s=e[i]
if("boolean"==typeof s)s&&(t+=`#define ${i}\n`)
else if("number"==typeof s)t+=`#define ${i} ${s.toFixed()}\n`
else if("object"==typeof s){const e=s.options
let r=0
for(const i in e)t+=`#define ${e[i]} ${(r++).toFixed()}\n`
t+=`#define ${i} ${e[s.value]}\n`}}return t}i.d(t,"a",(function(){return s}))},1924:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var s=i(1287)
class r{constructor(e,t,i,s,r,n,a,o){this.createQuery=e,this.resultAvailable=t,this.getResult=i,this.disjoint=s,this.beginTimeElapsed=r,this.endTimeElapsed=n,this.createTimestamp=a,this.timestampBits=o}}function n(e,t){if(t.disjointTimerQuery)return null
let i=e.getExtension("EXT_disjoint_timer_query_webgl2")
return i&&Object(s.a)(e)?new r(()=>e.createQuery(),t=>e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE),t=>e.getQueryParameter(t,e.QUERY_RESULT),()=>e.getParameter(i.GPU_DISJOINT_EXT),t=>e.beginQuery(i.TIME_ELAPSED_EXT,t),()=>e.endQuery(i.TIME_ELAPSED_EXT),e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT),()=>e.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)):(i=e.getExtension("EXT_disjoint_timer_query"),i?new r(()=>i.createQueryEXT(),e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_AVAILABLE_EXT),e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_EXT),()=>e.getParameter(i.GPU_DISJOINT_EXT),e=>i.beginQueryEXT(i.TIME_ELAPSED_EXT,e),()=>i.endQueryEXT(i.TIME_ELAPSED_EXT),e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT),()=>i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)):null)}},1974:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var s=i(861),r=i(1351)
async function n(e){const t=i.e(486).then(i.bind(null,2182)),n=i.e(487).then(i.bind(null,2183)),a=Object(r.a)((await t).default,{signal:e}),o=Object(r.a)((await n).default,{signal:e}),l={mask:await a,overlay:await o}
return Object(s.v)(e),l}},2020:function(e,t,i){"use strict"
i.d(t,"a",(function(){return D}))
var s=i(20),r=i(861),n=i(1128),a=i(985),o=i(1041),l=(i(77),i(1257)),c=i(1051),h=i(877),u=(i(1733),i(1824)),d=i(973),f=i(998)
class _{constructor(){this.blend=!1,this.blendColor={r:0,g:0,b:0,a:0},this.blendFunction={srcRGB:h.b.ONE,dstRGB:h.b.ZERO,srcAlpha:h.b.ONE,dstAlpha:h.b.ZERO},this.blendEquation={mode:h.c.ADD,modeAlpha:h.c.ADD},this.colorMask={r:!0,g:!0,b:!0,a:!0},this.faceCulling=!1,this.cullFace=h.n.BACK,this.frontFace=h.j.CCW,this.scissorTest=!1,this.scissorRect={x:0,y:0,width:0,height:0},this.depthTest=!1,this.depthFunction=h.h.LESS,this.clearDepth=1,this.depthWrite=!0,this.depthRange={zNear:0,zFar:1},this.viewport=null,this.stencilTest=!1,this.polygonOffsetFill=!1,this.polygonOffset=[0,0],this.stencilFunction={face:h.n.FRONT_AND_BACK,func:h.h.ALWAYS,ref:0,mask:1},this.clearStencil=0,this.stencilWriteMask=1,this.stencilOperation={face:h.n.FRONT_AND_BACK,fail:h.w.KEEP,zFail:h.w.KEEP,zPass:h.w.KEEP},this.clearColor={r:0,g:0,b:0,a:0},this.program=null,this.vertexBuffer=null,this.indexBuffer=null,this.uniformBuffer=null,this.pixelPackBuffer=null,this.pixelUnpackBuffer=null,this.copyReadBuffer=null,this.copyWriteBuffer=null,this.uniformBufferBindingPoints=new Array,this.readFramebuffer=null,this.drawFramebuffer=null,this.renderbuffer=null,this.activeTexture=0,this.textureUnitMap=new Array}}class p{constructor(e){this._allocations=new Map,e?Error.stackTraceLimit=1/0:(this.add=()=>{},this.remove=()=>{})}add(e){this._allocations.set(e,(new Error).stack)}remove(e){this._allocations.delete(e)}print(){if(this._allocations.size>0){console.log(this._allocations.size+" live object allocations:")
const e=new Map
this._allocations.forEach(t=>{var i
e.set(t,(null!=(i=e.get(t))?i:0)+1)}),e.forEach((e,t)=>{const i=t.split("\n")
i.shift(),i.shift(),console.log(`${e}: ${i.shift()}`),i.forEach(e=>console.log("   ",e))})}}}const m=new class{constructor(){this.RECORD_ALLOCATIONS=!1}}
class g{constructor(){for(this._current=new Array,this._max=new Array,this._allocations=new p(m.RECORD_ALLOCATIONS);this._current.length<h.t.COUNT;)this._current.push(0),this._max.push(0)}resetMax(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)}increment(e,t){const i=++this._current[e]
this._max[e]=Math.max(i,this._max[e]),this._allocations.add(t)}decrement(e,t){--this._current[e],this._allocations.remove(t)}get max(){return this._max}get current(){return this._current}get total(){return this.current.reduce((e,t)=>e+t,0)}printResourceCount(){if(this.total>0){console.log("Live objects:")
for(let e=0;e<h.t.COUNT;++e){const t=this._current[e]
t>0&&console.log(`${h.t[e]}: ${t}`)}}this._allocations.print()}}var b=i(979),y=i(1114),x=i(1177),v=i(867),O=i(1571),w=i(1079)
function T(e,t){const i=new o.a(e,{colorTarget:h.y.TEXTURE,depthStencilTarget:h.m.NONE},{target:h.A.TEXTURE_2D,wrapMode:h.B.CLAMP_TO_EDGE,pixelFormat:h.p.RGBA,dataType:h.q.UNSIGNED_BYTE,samplingMode:h.z.NEAREST,width:1,height:1}),s=a.a.createVertex(e,h.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),r=new f.a(e,new Map([["position",0]]),{geometry:[new w.a("position",2,h.k.UNSIGNED_SHORT,0,4)]},{geometry:s}),n=Object(v.h)(5633261.287538229,2626832.878767164,1434988.0495278358),l=Object(v.h)(5633271.46742708,2626873.6381334523,1434963.231608387),c=function(i,s){const r=`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,n=e.programCache.acquire(r,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),a=new Float32Array(6)
Object(O.a)(i,a,3)
const o=new Float32Array(6)
return Object(O.a)(s,o,3),e.useProgram(n),n.setUniform3f("u_highA",a[0],a[2],a[4]),n.setUniform3f("u_lowA",a[1],a[3],a[5]),n.setUniform3f("u_highB",o[0],o[2],o[4]),n.setUniform3f("u_lowB",o[1],o[3],o[5]),n}(n,l),u=e.getBoundFramebufferObject(),{x:d,y:_,width:p,height:m}=e.getViewport()
e.bindFramebuffer(i),e.setViewport(0,0,1,1),e.bindVAO(r),e.drawArrays(h.r.TRIANGLE_STRIP,0,4)
const g=new Uint8Array(4)
i.readPixels(0,0,1,1,h.p.RGBA,h.q.UNSIGNED_BYTE,g),c.dispose(),r.dispose(!1),s.dispose(),i.dispose(),e.setViewport(d,_,p,m),e.bindFramebuffer(u)
const b=(n[2]-l[2])/25,y=Object(x.b)(g)
return Math.abs(b-y)}var E,S,R=i(1070),M={exports:{}}
E=M,void 0!==(S=function(){var e={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},t=null,i=null
function s(e){if(null==t)for(var s in t={},i={},e)"number"==typeof e[s]&&(t[e[s]]=s,i[s]=e[s])}function r(){if(null==t)throw"WebGLDebugUtils.init(ctx) not called"}function n(e){r()
var i=t[e]
return void 0!==i?"gl."+i:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function a(t,s,r,a){var o
if(void 0!==(o=e[t])&&void 0!==(o=o[s])&&o[r]){if("object"==typeof o[r]&&void 0!==o[r].enumBitwiseOr){for(var l=o[r].enumBitwiseOr,c=0,h=[],u=0;u<l.length;++u){var d=i[l[u]]
0!=(a&d)&&(c|=d,h.push(n(d)))}return c===a?h.join(" | "):n(a)}return n(a)}return null===a?"null":void 0===a?"undefined":a.toString()}function o(e,t,i){e.__defineGetter__(i,(function(){return t[i]})),e.__defineSetter__(i,(function(e){t[i]=e}))}function l(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i=e.createBuffer()
e.bindBuffer(e.ARRAY_BUFFER,i)
for(var s=0;s<t;++s)e.disableVertexAttribArray(s),e.vertexAttribPointer(s,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(s,0)
e.deleteBuffer(i)
var r=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
for(s=0;s<r;++s)e.activeTexture(e.TEXTURE0+s),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null)
for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{init:s,mightBeEnum:function(e){return r(),void 0!==t[e]},glEnumToString:n,glFunctionArgToString:a,glFunctionArgsToString:function(e,t){for(var i="",s=t.length,r=0;r<s;++r)i+=(0==r?"":", ")+a(e,s,r,t[r])
return i},makeDebugContext:function e(t,i,r,l){l=l||t,s(t),i=i||function(e,t,i){for(var s="",r=i.length,o=0;o<r;++o)s+=(0==o?"":", ")+a(t,r,o,i[o]);(function(e){window.console&&window.console.error?window.console.error(e):function(e){window.console&&window.console.log&&window.console.log(e)}(e)})("WebGL error "+n(e)+" in "+t+"("+s+")")}
var c={}
function h(e,t){return function(){r&&r(t,arguments)
var s=e[t].apply(e,arguments),n=l.getError()
return 0!=n&&(c[n]=!0,i(n,t,arguments)),s}}var u={}
for(var d in t)if("function"==typeof t[d])if("getExtension"!=d)u[d]=h(t,d)
else{var f=h(t,d)
u[d]=function(){return e(f.apply(t,arguments),i,r,l)}}else o(u,t,d)
return u.getError=function(){for(var e in c)if(c.hasOwnProperty(e)&&c[e])return c[e]=!1,e
return t.NO_ERROR},u},makeLostContextSimulatingCanvas:function(e){var t,i,s=[],r=[],n={},a=1,c=!1,h=[],u=0,d=0,f=!1,_=0,p={}
function m(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(i=e.getContext,function(){var s=i.apply(e,arguments)
if(s instanceof WebGLRenderingContext){if(s!=t){if(t)throw"got different context"
n=O(t=s)}return n}return s})
var g=function(e){s.push(m(e))},b=function(e){r.push(m(e))}
function y(){++d,c||u==d&&e.loseContext()}function x(e,t){var i=e[t]
return function(){if(y(),!c)return i.apply(e,arguments)}}function v(e){return{statusMessage:e,preventDefault:function(){f=!0}}}return function(e){var t=e.addEventListener
e.addEventListener=function(i,s,r){switch(i){case"webglcontextlost":g(s)
break
case"webglcontextrestored":b(s)
break
default:t.apply(e,arguments)}}}(e),e.loseContext=function(){if(!c){for(c=!0,u=0,++a;t.getError(););(function(){for(var e=Object.keys(p),t=0;t<e.length;++t)delete p[e]})(),p[t.CONTEXT_LOST_WEBGL]=!0
var i=v("context lost"),r=s.slice()
setTimeout((function(){for(var t=0;t<r.length;++t)r[t](i)
_>=0&&setTimeout((function(){e.restoreContext()}),_)}),0)}},e.restoreContext=function(){c&&r.length&&setTimeout((function(){if(!f)throw"can not restore. webglcontestlost listener did not call event.preventDefault";(function(){for(var e=0;e<h.length;++e){var i=h[e]
i instanceof WebGLBuffer?t.deleteBuffer(i):i instanceof WebGLFramebuffer?t.deleteFramebuffer(i):i instanceof WebGLProgram?t.deleteProgram(i):i instanceof WebGLRenderbuffer?t.deleteRenderbuffer(i):i instanceof WebGLShader?t.deleteShader(i):i instanceof WebGLTexture&&t.deleteTexture(i)}})(),l(t),c=!1,d=0,f=!1
for(var e=r.slice(),i=v("context restored"),s=0;s<e.length;++s)e[s](i)}),0)},e.loseContextInNCalls=function(e){if(c)throw"You can not ask a lost contet to be lost"
u=d+e},e.getNumCalls=function(){return d},e.setRestoreTimeout=function(e){_=e},e
function O(e){for(var i in e)"function"==typeof e[i]?n[i]=x(e,i):o(n,e,i)
n.getError=function(){if(y(),!c)for(;e=t.getError();)p[e]=!0
for(var e in p)if(p[e])return delete p[e],e
return n.NO_ERROR}
for(var s=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],r=0;r<s.length;++r){var l=s[r]
n[l]=function(t){return function(){if(y(),c)return null
var i=t.apply(e,arguments)
return i.__webglDebugContextLostId__=a,h.push(i),i}}(e[l])}var u=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"]
for(r=0;r<u.length;++r)n[l=u[r]]=function(t){return function(){return y(),c?null:t.apply(e,arguments)}}(n[l])
var d=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"]
for(r=0;r<d.length;++r)n[l=d[r]]=function(t){return function(){return y(),!c&&t.apply(e,arguments)}}(n[l])
return n.checkFramebufferStatus=function(t){return function(){return y(),c?n.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(n.checkFramebufferStatus),n.getAttribLocation=function(t){return function(){return y(),c?-1:t.apply(e,arguments)}}(n.getAttribLocation),n.getVertexAttribOffset=function(t){return function(){return y(),c?0:t.apply(e,arguments)}}(n.getVertexAttribOffset),n.isContextLost=function(){return c},n}},resetToInitialState:l}}())&&(E.exports=S)
const F=i(177).a.getLogger("esri.views.WebGLDriverTest")
var C=i(1366)
class j{constructor(e){this.context=e,this._floatBufferBlendWorking=function(e){var t,i,s,r,n
if(!e.gl)return!1
if(e.type===c.a.WEBGL1)return!(null==(r=e.capabilities.textureFloat)||!r.textureFloat||null==(n=e.capabilities.colorBufferFloat)||!n.textureFloat)
if(!((null==(t=e.capabilities.textureFloat)?void 0:t.textureFloat)&&(null==(i=e.capabilities.colorBufferFloat)?void 0:i.textureFloat)&&(null==(s=e.capabilities.colorBufferFloat)?void 0:s.floatBlend)))return!1
const l=new o.a(e,{colorTarget:h.y.TEXTURE,depthStencilTarget:h.m.NONE},{target:h.A.TEXTURE_2D,wrapMode:h.B.CLAMP_TO_EDGE,pixelFormat:h.p.RGBA,dataType:h.q.FLOAT,internalFormat:h.v.RGBA32F,samplingMode:h.z.NEAREST,width:1,height:1}),u=a.a.createVertex(e,h.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),d=new f.a(e,new Map([["a_pos",0]]),{geometry:[new w.a("a_pos",2,h.k.UNSIGNED_SHORT,0,4)]},{geometry:u}),_=e.programCache.acquire("\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]))
e.useProgram(_)
const p=e.getBoundFramebufferObject(),{x:m,y:g,width:y,height:x}=e.getViewport()
e.bindFramebuffer(l),e.setViewport(0,0,1,1),e.bindVAO(d),e.drawArrays(h.r.TRIANGLE_STRIP,0,4)
const v=Object(b.g)({blending:R.c})
e.setPipelineState(v),e.drawArrays(h.r.TRIANGLE_STRIP,0,4),M.exports.init(e)
const O=e.gl.getError()
return e.setViewport(m,g,y,x),e.bindFramebuffer(p),_.dispose(),d.dispose(!1),u.dispose(),l.dispose(),1282!==O||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}(e),async function(e){const t=new Image
if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0
const i=new o.a(e,{colorTarget:h.y.TEXTURE,depthStencilTarget:h.m.NONE},{target:h.A.TEXTURE_2D,wrapMode:h.B.CLAMP_TO_EDGE,pixelFormat:h.p.RGBA,dataType:h.q.UNSIGNED_BYTE,samplingMode:h.z.NEAREST,width:1,height:1}),s=a.a.createVertex(e,h.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),r=new f.a(e,new Map([["a_pos",0]]),C.b,{geometry:s}),n=e.programCache.acquire("\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]))
e.useProgram(n)
const l=new d.a(e,{dataType:h.q.UNSIGNED_BYTE,pixelFormat:h.p.RGBA,preMultiplyAlpha:!1,wrapMode:h.B.CLAMP_TO_EDGE,samplingMode:h.z.LINEAR},t)
e.bindTexture(l,0),n.setUniform1i("u_texture",0)
const c=e.getBoundFramebufferObject(),{x:u,y:_,width:p,height:m}=e.getViewport()
e.bindFramebuffer(i),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clearSafe(h.e.COLOR_BUFFER_BIT),e.bindVAO(r),e.drawArrays(h.r.TRIANGLE_STRIP,0,4)
const g=new Uint8Array(4)
return i.readPixels(0,0,1,1,h.p.RGBA,h.q.UNSIGNED_BYTE,g),n.dispose(),r.dispose(!1),s.dispose(),i.dispose(),l.dispose(),e.setViewport(u,_,p,m),e.bindFramebuffer(c),t.src="",255===g[0]}(e).then(e=>this._svgAlwaysPremultipliesAlpha=!e)}get floatBufferBlendWorking(){if(Object(s.j)(this._floatBufferBlendWorking))throw new Error("floatBufferBlendWorking test not yet available")
return this._floatBufferBlendWorking}get svgAlwaysPremultipliesAlpha(){if(Object(s.j)(this._svgAlwaysPremultipliesAlpha))throw new Error("svgAlwaysPremultipliesAlpha test not yet available")
return this._svgAlwaysPremultipliesAlpha}get doublePrecisionRequiresObfuscation(){if(Object(s.j)(this._doublePrecisionRequiresObfuscation)){const e=T(this.context,!1),t=T(this.context,!0)
this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}get ignoresSamplerPrecision(){return Object(s.j)(this._ignoresSamplerPrecision)&&(this._ignoresSamplerPrecision=function(e){const t=new o.a(e,{colorTarget:h.y.TEXTURE,depthStencilTarget:h.m.NONE},{target:h.A.TEXTURE_2D,wrapMode:h.B.CLAMP_TO_EDGE,pixelFormat:h.p.RGBA,dataType:h.q.UNSIGNED_BYTE,samplingMode:h.z.NEAREST,width:1,height:1}),i=new Uint8Array(4),s=a.a.createVertex(e,h.D.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),r=new f.a(e,new Map([["a_position",0]]),{geometry:[new w.a("a_position",2,h.k.SHORT,0,4)]},{geometry:s}),n=e.programCache.acquire("\nprecision highp float;\nattribute vec2 a_pos;\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n","\nprecision highp float;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",new Map([["a_pos",0]]))
e.useProgram(n)
const l=new d.a(e,{target:h.A.TEXTURE_2D,wrapMode:h.B.CLAMP_TO_EDGE,pixelFormat:h.p.RGBA,dataType:h.q.UNSIGNED_BYTE,samplingMode:h.z.NEAREST,width:1,height:1},new Uint8Array([2,255,0,0]))
n.setUniform1i("u_texture",0),e.bindTexture(l,0)
const c=e.getBoundFramebufferObject()
e.bindFramebuffer(t),e.useProgram(n)
const{x:u,y:_,width:p,height:m}=e.getViewport()
e.setViewport(0,0,1,1),e.bindVAO(r),e.drawArrays(h.r.TRIANGLE_STRIP,0,4),e.setViewport(u,_,p,m),t.readPixels(0,0,1,1,h.p.RGBA,h.q.UNSIGNED_BYTE,i),n.dispose(),r.dispose(!1),s.dispose(),t.dispose()
const g=255!==i[0]||255!==i[1]||255!==i[2]||255!==i[3]
return g&&F.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${i[0]}.${i[1]}.${i[2]}.${i[3]}]`),e.bindFramebuffer(c),g}(this.context)),this._ignoresSamplerPrecision}}var A=i(1924),B=i(1287)
function I(e,t,i,s,r){if(s&&Object(B.a)(e))return!0
if(t[i])return!1
for(const t of r)if(e.getExtension(t))return!0
return!1}class P{constructor(e,t){this.gl=e,this._depthTexture=null,this._standardDerivatives=null,this._shaderTextureLOD=null,this._fragDepth=null,this._disabledExtensions=t.disabledExtensions||{},this._debugWebGLExtensions=t.debugWebGLExtensions||{}}get drawBuffers(){return this._drawBuffers||(this._drawBuffers=function(e,t){if(t.disjointTimerQuery)return null
if(Object(B.a)(e))return{drawBuffers:e.drawBuffers.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS}
if(t.drawBuffers)return null
const i=e.getExtension("WEBGL_draw_buffers")
return i?{drawBuffers:i.drawBuffersWEBGL.bind(i),MAX_DRAW_BUFFERS:i.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:i.MAX_COLOR_ATTACHMENTS_WEBGL}:null}(this.gl,this._disabledExtensions)),this._drawBuffers}get instancing(){return this._instancing||(this._instancing=function(e){if(Object(B.a)(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e)}
const t=e.getExtension("ANGLE_instanced_arrays")
return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}(this.gl)),this._instancing}get vao(){return this._vertexArrayObject||(this._vertexArrayObject=function(e,t){if(Object(B.a)(e))return{createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),bindVertexArray:e.bindVertexArray.bind(e)}
if(t.vao)return null
const i=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object")
return i?{createVertexArray:i.createVertexArrayOES.bind(i),deleteVertexArray:i.deleteVertexArrayOES.bind(i),bindVertexArray:i.bindVertexArrayOES.bind(i)}:null}(this.gl,this._disabledExtensions)),this._vertexArrayObject}get compressedTextureETC(){return this._compressedTextureETC||(this._compressedTextureETC=function(e,t){if(t.compressedTextureETC)return null
const i=e.getExtension("WEBGL_compressed_texture_etc")
return i?{COMPRESSED_R11_EAC:i.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:i.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:i.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:i.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:i.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:i.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}(this.gl,this._disabledExtensions)),this._compressedTextureETC}get compressedTextureS3TC(){return this._compressedTextureS3TC||(this._compressedTextureS3TC=function(e,t){if(t.compressedTextureS3TC)return null
const i=e.getExtension("WEBGL_compressed_texture_s3tc")
return i?{COMPRESSED_RGB_S3TC_DXT1:i.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:i.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:i.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:i.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}(this.gl,this._disabledExtensions)),this._compressedTextureS3TC}get textureFilterAnisotropic(){return this._textureFilterAnisotropic||(this._textureFilterAnisotropic=function(e,t){if(t.textureFilterAnisotropic)return null
const i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")
return i?{MAX_TEXTURE_MAX_ANISOTROPY:i.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:i.TEXTURE_MAX_ANISOTROPY_EXT}:null}(this.gl,this._disabledExtensions)),this._textureFilterAnisotropic}get disjointTimerQuery(){return this._disjointTimerQuery||(this._disjointTimerQuery=Object(A.a)(this.gl,this._disabledExtensions)),this._disjointTimerQuery}get textureFloat(){return this._textureFloat||(this._textureFloat=function(e,t){if(Object(B.a)(e))return{textureFloat:!0,textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e.HALF_FLOAT,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}
if(e instanceof WebGLRenderingContext){const i=!t.textureHalfFloat&&e.getExtension("OES_texture_half_float")
return{textureFloat:!t.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!i,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:i?i.HALF_FLOAT_OES:void 0}}return null}(this.gl,this._disabledExtensions)),this._textureFloat}get colorBufferFloat(){return this._colorBufferFloat||(this._colorBufferFloat=function(e,t){if(Object(B.a)(e)){const i=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),s=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_float"),r=!t.floatBlend&&!t.colorBufferFloat&&e.getExtension("EXT_float_blend")
return i||s||r?{textureFloat:!!s,textureHalfFloat:!!i,floatBlend:!!r,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){const i=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),s=!t.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float"),r=!t.floatBlend&&!t.colorBufferFloat&&e.getExtension("EXT_float_blend")
return i||s||r?{textureFloat:!!s,textureHalfFloat:!!i,floatBlend:!!r,RGBA16F:i?i.RGBA16F_EXT:void 0,RGB16F:i?i.RGB16F_EXT:void 0,RGBA32F:s?s.RGBA32F_EXT:void 0}:null}return null}(this.gl,this._disabledExtensions)),this._colorBufferFloat}get blendMinMax(){return this._minMaxBlending||(this._minMaxBlending=function(e,t){if(Object(B.a)(e))return{MIN:e.MIN,MAX:e.MAX}
if(t.blendMinMax)return null
{const t=e.getExtension("EXT_blend_minmax")
return t?{MIN:t.MIN_EXT,MAX:t.MAX_EXT}:null}}(this.gl,this._disabledExtensions)),this._minMaxBlending}get depthTexture(){return null===this._depthTexture&&(this._depthTexture=I(this.gl,this._disabledExtensions,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),this._depthTexture}get standardDerivatives(){return null===this._standardDerivatives&&(this._standardDerivatives=I(this.gl,this._disabledExtensions,"standardDerivatives",!0,["OES_standard_derivatives"])),this._standardDerivatives}get shaderTextureLOD(){return null===this._shaderTextureLOD&&(this._shaderTextureLOD=I(this.gl,this._disabledExtensions,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),this._shaderTextureLOD}get fragDepth(){return null===this._fragDepth&&(this._fragDepth=I(this.gl,this._disabledExtensions,"fragDepth",!0,["EXT_frag_depth"])),this._fragDepth}get loseContext(){return this._loseContext||(this._loseContext=function(e,t){const i=t.loseContext&&e.getExtension("WEBGL_lose_context")
return i?{loseRenderingContext:()=>i.loseContext()}:null}(this.gl,this._debugWebGLExtensions)),this._loseContext}get textureNorm16(){return this._textureNorm16||(this._textureNorm16=function(e,t){if(!Object(B.a)(e))return null
if(t.textureNorm16)return null
const i=e.getExtension("EXT_texture_norm16")
return i?{R16:i.R16_EXT,RG16:i.RG16_EXT,RGB16:i.RGB16_EXT,RGBA16:i.RGBA16_EXT,R16_SNORM:i.R16_SNORM_EXT,RG16_SNORM:i.RG16_SNORM_EXT,RGB16_SNORM:i.RGB16_SNORM_EXT,RGBA16_SNORM:i.RGBA16_SNORM_EXT}:null}(this.gl,this._disabledExtensions)),this._textureNorm16}enable(e){return this[e]}}class D{constructor(e,t){this.gl=e,this.instanceCounter=new g,this.programCache=new u.a(this),this._state=new _,this._numOfDrawCalls=0,this._numOfTriangles=0,this.type=Object(B.a)(e)?c.a.WEBGL2:c.a.WEBGL1,this._loadExtensions(),this.configure(t)}configure(e){this._capabilities=new P(this.gl,e),this._parameters=this._loadParameters(e)
const t=this.gl.getParameter(this.gl.VIEWPORT)
this._state=new _,this._state.viewport={x:t[0],y:t[1],width:t[2],height:t[3]},this._stateTracker=new b.a({setBlending:e=>{if(e){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(e.opRgb,e.opAlpha),this.setBlendFunctionSeparate(e.srcRgb,e.dstRgb,e.srcAlpha,e.dstAlpha)
const t=e.color
this.setBlendColor(t.r,t.g,t.b,t.a)}else this.setBlendingEnabled(!1)},setCulling:e=>{e?(this.setFaceCullingEnabled(!0),this.setCullFace(e.face),this.setFrontFace(e.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:e=>{e?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(e.factor,e.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:e=>{e?(this.setDepthTestEnabled(!0),this.setDepthFunction(e.func)):this.setDepthTestEnabled(!1)},setStencilTest:e=>{if(e){this.setStencilTestEnabled(!0)
const t=e.function
this.setStencilFunction(t.func,t.ref,t.mask)
const i=e.operation
this.setStencilOp(i.fail,i.zFail,i.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:e=>{e?(this.setDepthWriteEnabled(!0),this.setDepthRange(e.zNear,e.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:e=>{e?this.setColorMask(e.r,e.g,e.b,e.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:e=>{e?this.setStencilWriteMask(e.mask):this.setStencilWriteMask(0)}}),this.enforceState(),this._driverTest=new j(this)}get driverTest(){return this._driverTest}get contextAttributes(){return this.gl.getContextAttributes()}get parameters(){return this._parameters}dispose(){this.programCache.dispose(),this.bindVAO(null),this.unbindBuffer(h.d.ARRAY_BUFFER),this.unbindBuffer(h.d.ELEMENT_ARRAY_BUFFER),Object(B.a)(this.gl)&&(this.unbindBuffer(h.d.UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(h.d.PIXEL_PACK_BUFFER),this.unbindBuffer(h.d.PIXEL_UNPACK_BUFFER),this.unbindBuffer(h.d.COPY_READ_BUFFER),this.unbindBuffer(h.d.COPY_WRITE_BUFFER)),this._state.textureUnitMap.length=0,Object(l.b)()&&this.instanceCounter.printResourceCount()}setPipelineState(e){this._stateTracker.setPipeline(e)}setBlendingEnabled(e){this._state.blend!==e&&(!0===e?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._state.blend=e,this._stateTracker.invalidateBlending())}externalProgramUpdate(){var e
null==(e=this._state.program)||e.stop(),this._state.program=null}externalTextureUnitUpdate(e,t){for(let t=0;t<e.length;++t)this._state.textureUnitMap[e[t]]=null
t>=0&&(this._state.activeTexture=t)}externalVertexArrayObjectUpdate(){const e=this.capabilities.vao
e&&(e.bindVertexArray(null),this._state.vertexArrayObject=null),this._state.vertexBuffer=null,this._state.indexBuffer=null}externalVertexBufferUpdate(){this._state.vertexBuffer=null}externalIndexBufferUpdate(){this._state.indexBuffer=null}setBlendColor(e,t,i,s){e===this._state.blendColor.r&&t===this._state.blendColor.g&&i===this._state.blendColor.b&&s===this._state.blendColor.a||(this.gl.blendColor(e,t,i,s),this._state.blendColor.r=e,this._state.blendColor.g=t,this._state.blendColor.b=i,this._state.blendColor.a=s,this._stateTracker.invalidateBlending())}setBlendFunction(e,t){e===this._state.blendFunction.srcRGB&&t===this._state.blendFunction.dstRGB||(this.gl.blendFunc(e,t),this._state.blendFunction.srcRGB=e,this._state.blendFunction.srcAlpha=e,this._state.blendFunction.dstRGB=t,this._state.blendFunction.dstAlpha=t,this._stateTracker.invalidateBlending())}setBlendFunctionSeparate(e,t,i,s){this._state.blendFunction.srcRGB===e&&this._state.blendFunction.srcAlpha===i&&this._state.blendFunction.dstRGB===t&&this._state.blendFunction.dstAlpha===s||(this.gl.blendFuncSeparate(e,t,i,s),this._state.blendFunction.srcRGB=e,this._state.blendFunction.srcAlpha=i,this._state.blendFunction.dstRGB=t,this._state.blendFunction.dstAlpha=s,this._stateTracker.invalidateBlending())}setBlendEquation(e){this._state.blendEquation.mode!==e&&(this.gl.blendEquation(e),this._state.blendEquation.mode=e,this._state.blendEquation.modeAlpha=e,this._stateTracker.invalidateBlending())}setBlendEquationSeparate(e,t){this._state.blendEquation.mode===e&&this._state.blendEquation.modeAlpha===t||(this.gl.blendEquationSeparate(e,t),this._state.blendEquation.mode=e,this._state.blendEquation.modeAlpha=t,this._stateTracker.invalidateBlending())}setColorMask(e,t,i,s){this._state.colorMask.r===e&&this._state.colorMask.g===t&&this._state.colorMask.b===i&&this._state.colorMask.a===s||(this.gl.colorMask(e,t,i,s),this._state.colorMask.r=e,this._state.colorMask.g=t,this._state.colorMask.b=i,this._state.colorMask.a=s,this._stateTracker.invalidateColorWrite())}setClearColor(e,t,i,s){this._state.clearColor.r===e&&this._state.clearColor.g===t&&this._state.clearColor.b===i&&this._state.clearColor.a===s||(this.gl.clearColor(e,t,i,s),this._state.clearColor.r=e,this._state.clearColor.g=t,this._state.clearColor.b=i,this._state.clearColor.a=s)}setFaceCullingEnabled(e){this._state.faceCulling!==e&&(!0===e?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._state.faceCulling=e,this._stateTracker.invalidateCulling())}setPolygonOffsetFillEnabled(e){this._state.polygonOffsetFill!==e&&(!0===e?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._state.polygonOffsetFill=e,this._stateTracker.invalidatePolygonOffset())}setPolygonOffset(e,t){this._state.polygonOffset[0]===e&&this._state.polygonOffset[1]===t||(this._state.polygonOffset[0]=e,this._state.polygonOffset[1]=t,this.gl.polygonOffset(e,t),this._stateTracker.invalidatePolygonOffset())}setCullFace(e){this._state.cullFace!==e&&(this.gl.cullFace(e),this._state.cullFace=e,this._stateTracker.invalidateCulling())}setFrontFace(e){this._state.frontFace!==e&&(this.gl.frontFace(e),this._state.frontFace=e,this._stateTracker.invalidateCulling())}setScissorTestEnabled(e){this._state.scissorTest!==e&&(!0===e?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._state.scissorTest=e)}setScissorRect(e,t,i,s){this._state.scissorRect.x===e&&this._state.scissorRect.y===t&&this._state.scissorRect.width===i&&this._state.scissorRect.height===s||(this.gl.scissor(e,t,i,s),this._state.scissorRect.x=e,this._state.scissorRect.y=t,this._state.scissorRect.width=i,this._state.scissorRect.height=s)}setDepthTestEnabled(e){this._state.depthTest!==e&&(!0===e?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._state.depthTest=e,this._stateTracker.invalidateDepthTest())}setClearDepth(e){this._state.clearDepth!==e&&(this.gl.clearDepth(e),this._state.clearDepth=e)}setDepthFunction(e){this._state.depthFunction!==e&&(this.gl.depthFunc(e),this._state.depthFunction=e,this._stateTracker.invalidateDepthTest())}setDepthWriteEnabled(e){this._state.depthWrite!==e&&(this.gl.depthMask(e),this._state.depthWrite=e,this._stateTracker.invalidateDepthWrite())}setDepthRange(e,t){this._state.depthRange.zNear===e&&this._state.depthRange.zFar===t||(this.gl.depthRange(e,t),this._state.depthRange.zNear=e,this._state.depthRange.zFar=t,this._stateTracker.invalidateDepthWrite())}setStencilTestEnabled(e){this._state.stencilTest!==e&&(!0===e?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._state.stencilTest=e,this._stateTracker.invalidateStencilTest())}setClearStencil(e){e!==this._state.clearStencil&&(this.gl.clearStencil(e),this._state.clearStencil=e)}setStencilFunction(e,t,i){this._state.stencilFunction.func===e&&this._state.stencilFunction.ref===t&&this._state.stencilFunction.mask===i||(this.gl.stencilFunc(e,t,i),this._state.stencilFunction.face=h.n.FRONT_AND_BACK,this._state.stencilFunction.func=e,this._state.stencilFunction.ref=t,this._state.stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())}setStencilFunctionSeparate(e,t,i,s){this._state.stencilFunction.face===e&&this._state.stencilFunction.func===t&&this._state.stencilFunction.ref===i&&this._state.stencilFunction.mask===s||(this.gl.stencilFuncSeparate(e,t,i,s),this._state.stencilFunction.face=e,this._state.stencilFunction.func=t,this._state.stencilFunction.ref=i,this._state.stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())}setStencilWriteMask(e){this._state.stencilWriteMask!==e&&(this.gl.stencilMask(e),this._state.stencilWriteMask=e,this._stateTracker.invalidateStencilWrite())}setStencilOp(e,t,i){this._state.stencilOperation.face===h.n.FRONT_AND_BACK&&this._state.stencilOperation.fail===e&&this._state.stencilOperation.zFail===t&&this._state.stencilOperation.zPass===i||(this.gl.stencilOp(e,t,i),this._state.stencilOperation.face=h.n.FRONT_AND_BACK,this._state.stencilOperation.fail=e,this._state.stencilOperation.zFail=t,this._state.stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())}setStencilOpSeparate(e,t,i,s){this._state.stencilOperation.face===e&&this._state.stencilOperation.fail===t&&this._state.stencilOperation.zFail===i&&this._state.stencilOperation.zPass===s||(this.gl.stencilOpSeparate(e,t,i,s),this._state.stencilOperation.face=e,this._state.stencilOperation.fail=t,this._state.stencilOperation.zFail=i,this._state.stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())}setActiveTexture(e,t=!1){const i=this._state.activeTexture
return e>=0&&(t||e!==this._state.activeTexture)&&(this.gl.activeTexture(h.a+e),this._state.activeTexture=e),i}clear(e){e&&this.gl.clear(e)}clearSafe(e,t=255){e&&(e&h.e.COLOR_BUFFER_BIT&&this.setColorMask(!0,!0,!0,!0),e&h.e.DEPTH_BUFFER_BIT&&this.setDepthWriteEnabled(!0),e&h.e.STENCIL_BUFFER_BIT&&this.setStencilWriteMask(t),this.gl.clear(e))}drawArrays(e,t,i){if(Object(l.b)()&&(this._numOfDrawCalls++,this._numOfTriangles+=z(e,i)),this.gl.drawArrays(e,t,i),Object(l.b)()){const e=Object(y.c)(this)
e&&console.error("drawArrays:",e)}}drawElements(e,t,i,r){if(Object(l.b)()&&(this._numOfDrawCalls++,this._numOfTriangles+=z(e,t)),this.gl.drawElements(e,t,i,r),Object(l.b)()){const a=Object(y.c)(this)
if(a){var n
const o=this.getBoundVAO(),l=null==o?void 0:o.indexBuffer,c={indexBuffer:l,vertexBuffers:null==o?void 0:o.vertexBuffers},h={mode:e,count:t,type:i,offset:r},u=null!=(n=Object(s.b)(l,e=>e.size))?n:0,d=r+t,f=u<d?`. Buffer is too small. Attempted to draw index ${d} of ${u}`:""
console.error(`drawElements: ${a}${f}`,{args:h,vao:c})}}}logIno(){Object(l.b)()&&console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`)}get capabilities(){return this._capabilities}setViewport(e,t,i,s){i=Math.max(Math.round(i),1),s=Math.max(Math.round(s),1)
const r=this._state.viewport
r.x===e&&r.y===t&&r.width===i&&r.height===s||(r.x=e,r.y=t,r.width=i,r.height=s,this.gl.viewport(e,t,i,s))}getViewport(){return{x:this._state.viewport.x,y:this._state.viewport.y,width:this._state.viewport.width,height:this._state.viewport.height}}useProgram(e){var t,i
this._state.program!==e&&(null==(t=this._state.program)||t.stop(),this._state.program=e,this.gl.useProgram(null!=(i=null==e?void 0:e.glName)?i:null))}bindTexture(e,t,i=!1){(t>=this.parameters.maxTextureImageUnits||t<0)&&console.error("Input texture unit is out of range of available units!")
const r=this._state.textureUnitMap[t]
return Object(s.j)(e)||null==e.glName?(Object(s.k)(r)&&(this.setActiveTexture(t,i),this.gl.bindTexture(r.descriptor.target,null)),this._state.textureUnitMap[t]=null,r):i||r!==e?(this.setActiveTexture(t,i),this.gl.bindTexture(e.descriptor.target,e.glName),e.applyChanges(),this._state.textureUnitMap[t]=e,r):(e.isDirty&&(this.setActiveTexture(t,i),e.applyChanges()),r)}unbindTextureAllUnits(e){for(let t=0;t<this.parameters.maxTextureImageUnits;t++)this._state.textureUnitMap[t]===e&&(this.bindTexture(null,t),this._state.textureUnitMap[t]=null)}bindFramebuffer(e,t=!1){if(t||this._state.readFramebuffer!==e||this._state.drawFramebuffer!==e){if(Object(s.j)(e))return this.gl.bindFramebuffer(h.o.FRAMEBUFFER,null),this._state.readFramebuffer=null,void(this._state.drawFramebuffer=null)
e.initializeAndBind(h.o.FRAMEBUFFER),this._state.readFramebuffer=e,this._state.drawFramebuffer=e}}bindFramebufferSeparate(e,t,i=!1){const r=t===h.o.READ_FRAMEBUFFER,n=r?this._state.readFramebuffer:this._state.drawFramebuffer;(i||n!==e)&&(Object(s.j)(e)?this.gl.bindFramebuffer(t,null):e.initializeAndBind(t),r?this._state.readFramebuffer=Object(s.u)(e,null):this._state.drawFramebuffer=Object(s.u)(e,null))}blitFramebuffer(e,t,i=0,s=0,r=e.width,n=e.height,a=0,o=0,l=t.width,c=t.height,u=h.e.COLOR_BUFFER_BIT,d=h.z.NEAREST){this.bindFramebufferSeparate(e,h.o.READ_FRAMEBUFFER),this.bindFramebufferSeparate(t,h.o.DRAW_FRAMEBUFFER),this.gl.blitFramebuffer(i,s,r,n,a,o,l,c,u,d)}bindBuffer(e,t){if(e)switch(null!=t||(t=e.bufferType),t){case h.d.ARRAY_BUFFER:this._state.vertexBuffer=L(this.gl,e,t,this._state.vertexBuffer)
break
case h.d.ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=L(this.gl,e,t,this._state.indexBuffer)
break
case h.d.UNIFORM_BUFFER:this._state.uniformBuffer=L(this.gl,e,t,this._state.uniformBuffer)
break
case h.d.PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=L(this.gl,e,t,this._state.pixelPackBuffer)
break
case h.d.PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=L(this.gl,e,t,this._state.pixelUnpackBuffer)
break
case h.d.COPY_READ_BUFFER:this._state.copyReadBuffer=L(this.gl,e,t,this._state.copyReadBuffer)
break
case h.d.COPY_WRITE_BUFFER:this._state.copyWriteBuffer=L(this.gl,e,t,this._state.copyWriteBuffer)}}bindRenderbuffer(e){const t=this.gl
e||(t.bindRenderbuffer(t.RENDERBUFFER,null),this._state.renderbuffer=null),this._state.renderbuffer!==e&&(t.bindRenderbuffer(t.RENDERBUFFER,e.glName),this._state.renderbuffer=e)}_getBufferBinding(e,t){if(t>=this.parameters.maxUniformBufferBindings||t<0)return console.error("Uniform buffer binding point is out of range!"),null
const i=this._state.uniformBufferBindingPoints
let r=i[t]
return Object(s.j)(r)&&(r={buffer:null,offset:0,size:0},i[t]=r),r}bindBufferBase(e,t,i){const r=this._getBufferBinding(e,t)
Object(s.j)(r)||r.buffer===i&&0===r.offset&&0===r.size||(this.gl.bindBufferBase(e,t,i?i.glName:null),r.buffer=i,r.offset=0,r.size=0)}bindBufferRange(e,t,i,r,n){const a=this._getBufferBinding(e,t)
Object(s.j)(a)||a.buffer===i&&a.offset===r&&a.size===n||(r%this._parameters.uniformBufferOffsetAlignment==0?(this.gl.bindBufferRange(e,t,i.glName,r,n),a.buffer=i,a.offset=r,a.size=n):console.error("Uniform buffer binding offset is not a multiple of the context offset alignment"))}bindUBO(e,t,i,r){Object(s.j)(t)?this.bindBufferBase(h.d.UNIFORM_BUFFER,e,null):(Object(l.b)()&&(null!=r?r:t.byteLength)>this._parameters.maxUniformBlockSize&&console.error("Attempting to bind more data than the maximum uniform block size"),t.initialize(),void 0!==i&&void 0!==r?this.bindBufferRange(h.d.UNIFORM_BUFFER,e,t.buffer,i,r):this.bindBufferBase(h.d.UNIFORM_BUFFER,e,t.buffer))}unbindUBO(e){for(let t=0,i=this._state.uniformBufferBindingPoints.length;t<i;t++){const i=this._state.uniformBufferBindingPoints[t]
Object(s.k)(i)&&i.buffer===e.buffer&&this.bindBufferBase(h.d.UNIFORM_BUFFER,t,null)}}unbindBuffer(e){switch(e){case h.d.ARRAY_BUFFER:this._state.vertexBuffer=L(this.gl,null,e,this._state.vertexBuffer)
break
case h.d.ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=L(this.gl,null,e,this._state.indexBuffer)
break
case h.d.UNIFORM_BUFFER:this._state.uniformBuffer=L(this.gl,null,e,this._state.uniformBuffer)
break
case h.d.PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=L(this.gl,null,e,this._state.pixelPackBuffer)
break
case h.d.PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=L(this.gl,null,e,this._state.pixelUnpackBuffer)
break
case h.d.COPY_READ_BUFFER:this._state.copyReadBuffer=L(this.gl,null,e,this._state.copyReadBuffer)
break
case h.d.COPY_WRITE_BUFFER:this._state.copyWriteBuffer=L(this.gl,null,e,this._state.copyWriteBuffer)}}bindVAO(e=null){Object(s.j)(e)?this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null):this._state.vertexArrayObject!==e&&(e.bind(),this._state.vertexArrayObject=e)}async clientWaitAsync(e=Object(n.a)(10)){const t={}
this.instanceCounter.increment(h.t.Sync,t)
const i=this.gl,s=i.fenceSync(h.x.SYNC_GPU_COMMANDS_COMPLETE,0)
let a
i.flush()
do{await Object(r.a)(e),a=i.clientWaitSync(s,0,0)}while(a===h.f.TIMEOUT_EXPIRED)
if(i.deleteSync(s),this.instanceCounter.decrement(h.t.Sync,t),a===h.f.WAIT_FAILED)throw new Error("Client wait failed")}getBoundFramebufferObject(e=h.o.FRAMEBUFFER){return e===h.o.READ_FRAMEBUFFER?this._state.readFramebuffer:this._state.drawFramebuffer}getBoundVAO(){return this._state.vertexArrayObject}resetState(){this.useProgram(null),this.bindVAO(null),this.bindFramebuffer(null,!0),this.unbindBuffer(h.d.ARRAY_BUFFER),this.unbindBuffer(h.d.ELEMENT_ARRAY_BUFFER),Object(B.a)(this.gl)&&(this.unbindBuffer(h.d.UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(h.d.PIXEL_PACK_BUFFER),this.unbindBuffer(h.d.PIXEL_UNPACK_BUFFER),this.unbindBuffer(h.d.COPY_READ_BUFFER),this.unbindBuffer(h.d.COPY_WRITE_BUFFER))
for(let e=0;e<this.parameters.maxTextureImageUnits;++e)this.bindTexture(null,e)
this.setBlendingEnabled(!1),this.setBlendFunction(h.b.ONE,h.b.ZERO),this.setBlendEquation(h.c.ADD),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(h.n.BACK),this.setFrontFace(h.j.CCW),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(h.h.LESS),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(h.h.ALWAYS,0,0),this.setStencilOp(h.w.KEEP,h.w.KEEP,h.w.KEEP),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}enforceState(){var e,t
const i=this.gl,r=this.capabilities.vao
r&&r.bindVertexArray(null)
for(let e=0;e<this.parameters.maxVertexAttributes;e++)i.disableVertexAttribArray(e)
if(this._state.vertexBuffer?i.bindBuffer(this._state.vertexBuffer.bufferType,this._state.vertexBuffer.glName):i.bindBuffer(h.d.ARRAY_BUFFER,null),this._state.indexBuffer?i.bindBuffer(this._state.indexBuffer.bufferType,this._state.indexBuffer.glName):i.bindBuffer(h.d.ELEMENT_ARRAY_BUFFER,null),Object(B.a)(i)){var n,a
this._state.uniformBuffer?i.bindBuffer(this._state.uniformBuffer.bufferType,this._state.uniformBuffer.glName):i.bindBuffer(h.d.UNIFORM_BUFFER,null)
for(let e=0;e<this._parameters.maxUniformBufferBindings;e++){const t=this._state.uniformBufferBindingPoints[e]
if(Object(s.k)(t)&&null!==t.buffer){const{buffer:s,offset:r,size:n}=t
0===r&&0===n?i.bindBufferBase(h.d.UNIFORM_BUFFER,e,s.glName):i.bindBufferRange(h.d.UNIFORM_BUFFER,e,s.glName,r,n)}else i.bindBufferBase(h.d.UNIFORM_BUFFER,e,null)}this._state.pixelPackBuffer?i.bindBuffer(this._state.pixelPackBuffer.bufferType,this._state.pixelPackBuffer.glName):i.bindBuffer(h.d.PIXEL_PACK_BUFFER,null),this._state.pixelUnpackBuffer?i.bindBuffer(this._state.pixelUnpackBuffer.bufferType,this._state.pixelUnpackBuffer.glName):i.bindBuffer(h.d.PIXEL_UNPACK_BUFFER,null),this._state.copyReadBuffer?i.bindBuffer(this._state.copyReadBuffer.bufferType,this._state.copyReadBuffer.glName):i.bindBuffer(h.d.COPY_READ_BUFFER,null),this._state.copyWriteBuffer?i.bindBuffer(this._state.copyWriteBuffer.bufferType,this._state.copyWriteBuffer.glName):i.bindBuffer(h.d.COPY_WRITE_BUFFER,null),i.bindFramebuffer(h.o.READ_FRAMEBUFFER,null),i.readBuffer(i.BACK),this._state.readFramebuffer&&(i.bindFramebuffer(h.o.READ_FRAMEBUFFER,this._state.readFramebuffer.glName),i.readBuffer(h.g.COLOR_ATTACHMENT0)),i.bindFramebuffer(h.o.DRAW_FRAMEBUFFER,null!=(n=null==(a=this._state.drawFramebuffer)?void 0:a.glName)?n:null)}else{var o,c
this._state.readFramebuffer=this._state.drawFramebuffer,i.bindFramebuffer(h.o.FRAMEBUFFER,null!=(o=null==(c=this._state.drawFramebuffer)?void 0:c.glName)?o:null)}if(r&&this._state.vertexArrayObject){const e=this._state.vertexArrayObject
this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null),this.bindVAO(e)}i.useProgram(null!=(e=null==(t=this._state.program)?void 0:t.glName)?e:null),i.blendColor(this._state.blendColor.r,this._state.blendColor.g,this._state.blendColor.b,this._state.blendColor.a),i.bindRenderbuffer(i.RENDERBUFFER,this._state.renderbuffer?this._state.renderbuffer.glName:null),!0===this._state.blend?i.enable(this.gl.BLEND):i.disable(this.gl.BLEND),i.blendEquationSeparate(this._state.blendEquation.mode,this._state.blendEquation.modeAlpha),i.blendFuncSeparate(this._state.blendFunction.srcRGB,this._state.blendFunction.dstRGB,this._state.blendFunction.srcAlpha,this._state.blendFunction.dstAlpha),i.clearColor(this._state.clearColor.r,this._state.clearColor.g,this._state.clearColor.b,this._state.clearColor.a),i.clearDepth(this._state.clearDepth),i.clearStencil(this._state.clearStencil),i.colorMask(this._state.colorMask.r,this._state.colorMask.g,this._state.colorMask.b,this._state.colorMask.a),i.cullFace(this._state.cullFace),i.depthFunc(this._state.depthFunction),i.depthRange(this._state.depthRange.zNear,this._state.depthRange.zFar),!0===this._state.depthTest?i.enable(i.DEPTH_TEST):i.disable(i.DEPTH_TEST),i.depthMask(this._state.depthWrite),i.frontFace(this._state.frontFace),i.lineWidth(1),!0===this._state.faceCulling?i.enable(i.CULL_FACE):i.disable(i.CULL_FACE),i.polygonOffset(this._state.polygonOffset[0],this._state.polygonOffset[1]),!0===this._state.polygonOffsetFill?i.enable(i.POLYGON_OFFSET_FILL):i.disable(i.POLYGON_OFFSET_FILL),i.scissor(this._state.scissorRect.x,this._state.scissorRect.y,this._state.scissorRect.width,this._state.scissorRect.height),!0===this._state.scissorTest?i.enable(i.SCISSOR_TEST):i.disable(i.SCISSOR_TEST),i.stencilFunc(this._state.stencilFunction.func,this._state.stencilFunction.ref,this._state.stencilFunction.mask),i.stencilOpSeparate(this._state.stencilOperation.face,this._state.stencilOperation.fail,this._state.stencilOperation.zFail,this._state.stencilOperation.zPass),!0===this._state.stencilTest?i.enable(i.STENCIL_TEST):i.disable(i.STENCIL_TEST),i.stencilMask(this._state.stencilWriteMask)
for(let e=0;e<this.parameters.maxTextureImageUnits;e++){i.activeTexture(h.a+e),i.bindTexture(h.A.TEXTURE_2D,null),i.bindTexture(h.A.TEXTURE_CUBE_MAP,null),Object(B.a)(i)&&(i.bindTexture(h.A.TEXTURE_3D,null),i.bindTexture(h.A.TEXTURE_2D_ARRAY,null))
const t=this._state.textureUnitMap[e]
Object(s.k)(t)&&i.bindTexture(t.descriptor.target,t.glName)}i.activeTexture(h.a+this._state.activeTexture),i.viewport(this._state.viewport.x,this._state.viewport.y,this._state.viewport.width,this._state.viewport.height),Object(l.b)()&&(this._numOfDrawCalls=0,this._numOfTriangles=0)}_loadExtensions(){this.type===c.a.WEBGL1&&this.gl.getExtension("OES_element_index_uint"),this.gl.getExtension("KHR_parallel_shader_compile")}_loadParameters(e){var t
const i=this.capabilities.textureFilterAnisotropic,s=null!=(t=e.maxAnisotropy)?t:1/0,r=Object(B.a)(this.gl),n=this.gl,a={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:i?Math.min(this.gl.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY),s):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),maxUniformBufferBindings:r?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0,maxVertexUniformBlocks:r?n.getParameter(n.MAX_VERTEX_UNIFORM_BLOCKS):0,maxFragmentUniformBlocks:r?n.getParameter(n.MAX_FRAGMENT_UNIFORM_BLOCKS):0,maxUniformBlockSize:r?n.getParameter(n.MAX_UNIFORM_BLOCK_SIZE):0,uniformBufferOffsetAlignment:r?n.getParameter(n.UNIFORM_BUFFER_OFFSET_ALIGNMENT):1,maxArrayTextureLayers:r?n.getParameter(n.MAX_ARRAY_TEXTURE_LAYERS):1,maxSamples:r?n.getParameter(n.MAX_SAMPLES):1}
return d.a.TEXTURE_UNIT_FOR_UPDATES=a.maxTextureImageUnits-1,a}}function L(e,t,i,s){return t?s!==t&&e.bindBuffer(i,t.glName):e.bindBuffer(i,null),t}function z(e,t){switch(e){case h.r.POINTS:return 2*t
case h.r.TRIANGLES:return t/3
case h.r.TRIANGLE_STRIP:case h.r.TRIANGLE_FAN:return t-2
default:return 0}}},2153:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var s=i(1179),r=i(1367),n=i(1424),a=i(1149)
class o{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,i){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[i,r,n]=s.d.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t)
return{size:[r,n],image:new Uint32Array(i.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,i
if("simple-line"===e.type||"esriSLS"===e.type)switch(t=Object(s.e)(e.style,e.cap),e.cap){case"butt":i="Butt"
break
case"square":i="Square"
break
default:i="Round"}else t=e.dashTemplate,i=e.cim.capStyle
const[r,n,a]=s.d.rasterizeSimpleLine(t,i)
return{size:[n,a],image:new Uint32Array(r.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let a,o,l
if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(a=s.b.fromSimpleMarker(e),l=Object(n.c)(a)):e.cim&&"CIMHatchFill"===e.cim.type?(a=s.b.fromCIMHatchFill(e.cim),o=new r.a(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(a=s.b.fromCIMInsidePolygon(e.cim),o=new r.a(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin)):(a=e.cim,l=Object(n.c)(a)),l&&!i){const[e,t,i]=Object(n.a)(l)
return e?{size:[t,i],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,h,u,d,f]=s.b.rasterize(this._rasterizationCanvas,a,o,this._resourceManager,!i)
return c?{size:[h,u],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:d,anchorY:f}:null}rasterizeImageResource(e,t,i,s){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t
const r=this._rasterizationCanvas.getContext("2d")
i instanceof ImageData?r.putImageData(i,0,0):(i.setAttribute("width",e+"px"),i.setAttribute("height",t+"px"),r.drawImage(i,0,0,e,t))
const n=r.getImageData(0,0,e,t),o=new Uint8Array(n.data)
if(s)for(const e of s)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,i,s,r]=e.oldColor,[n,a,l,c]=e.newColor
if(t===n&&i===a&&s===l&&r===c)continue
for(let e=0;e<o.length;e+=4)t===o[e]&&i===o[e+1]&&s===o[e+2]&&r===o[e+3]&&(o[e]=n,o[e+1]=a,o[e+2]=l,o[e+3]=c)}let l
for(let e=0;e<o.length;e+=4)l=o[e+3]/255,o[e]=o[e]*l,o[e+1]=o[e+1]*l,o[e+2]=o[e+2]*l
let c=o,h=e,u=t
const d=512
if(h>=d||u>=d){const i=h/u
i>1?(h=d,u=Math.round(d/i)):(u=d,h=Math.round(d*i)),c=new Uint8Array(4*h*u)
const s=new Uint8ClampedArray(c.buffer)
Object(a.m)(o,e,t,s,h,u,!1)}return{size:[h,u],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},2199:function(e,t,i){"use strict"
i.d(t,"a",(function(){return O}))
var s=i(1361)
const r={background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform lowp sampler2D u_texture;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = u_opacity * color;\n#else\ngl_FragColor = u_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","background.vert":"precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\nuniform mediump vec4 u_tlbr;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\n#endif\nvoid main() {\ngl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\nv_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\nv_tlbr             = u_tlbr / u_mosaicSize.xyxy;\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},circle:{"circle.frag":"precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float dist = length(v_offset);\nmediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\nlowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\ngl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","circle.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_stroke_color = stroke_color * stroke_opacity;\nv_stroke_width = stroke_width;\nv_radius = radius;\nv_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\nmediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\nv_offset = offset;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},fill:{"fill.frag":"precision lowp float;\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = v_color[3] * color;\n#else\ngl_FragColor = v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","fill.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\n#include <util/util.glsl>\nuniform mediump vec2 u_mosaicSize;\nuniform mediump float u_patternFactor;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\nfloat patternWidth = nextPOT(tlbr.z - tlbr.x);\nfloat patternHeight = nextPOT(tlbr.w - tlbr.y);\nfloat scaleX = 1.0 / (patternWidth * u_patternFactor);\nfloat scaleY = 1.0 / (patternHeight * u_patternFactor);\nmat3 patterMat = mat3(scaleX, 0.0,    0.0,\n0.0,    -scaleY, 0.0,\n0.0,    0.0,    1.0);\nv_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;\nv_tlbr             = tlbr / u_mosaicSize.xyxy;\n#endif\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},icon:{"icon.frag":"precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\nlowp vec4 fillPixelColor = v_color;\nfloat d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\nconst float softEdgeRatio = 0.248062016;\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * softEdgeRatio * size;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nif (v_halo_width > 0.25) {\nlowp vec4 outlinePixelColor = u_outlineColor;\nconst float outlineLimitRatio = (16.0 / 86.0);\nfloat clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\noutlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\ngl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n}\nelse {\ngl_FragColor = v_opacity * fillPixelColor;\n}\n#else\nlowp vec4 texColor = texture2D(u_texture, v_tex);\ngl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nv_color = color;\nv_opacity = opacity;\n#ifdef SDF\nv_halo_width = halo_width;\n#endif\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_opacity *= interpolatedOpacity;\nmediump float a_angle         = a_levelInfo[1];\nmediump float a_minLevel      = a_levelInfo[2];\nmediump float a_maxLevel      = a_levelInfo[3];\nmediump vec2 a_tex            = a_texAngleRange.xy;\nmediump float delta_z = 0.0;\nmediump float rotated = mod(a_angle + u_mapRotation, 256.0);\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_opacity, 0.0);\nvec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\nv_size = abs(offset);\n#ifdef SDF\noffset = (120.0 / 86.0) * offset;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_tex = a_tex.xy / u_mosaicSize;\n}"},line:{"line.frag":"precision lowp float;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#if defined (PATTERN) || defined(SDF)\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\nuniform sampler2D u_texture;\nuniform mediump float u_antialiasing;\n#endif\n#ifdef SDF\n#include <util/encoding.glsl>\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float fragDist = length(v_normal) * v_lineHalfWidth;\nlowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\nmediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\ngl_FragColor = alpha * v_color[3] * color;\n#elif defined(SDF)\nmediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY =  0.5 + 0.25 * v_normal.y;\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);\ngl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n#else\ngl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","line.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_extrude_offset;\nattribute vec4 a_dir_normal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump float u_zoomFactor;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\nconst mediump float tileCoordRatio = 8.0;\n#if defined (SDF)\nconst mediump float sdfPatternHalfWidth = 15.5;\n#endif\n#if defined (PATTERN) || defined(SDF)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_blur = blur + u_antialiasing;\nv_normal = a_dir_normal.zw * scale;\n#if defined (PATTERN) || defined(SDF)\nv_tlbr          = tlbr / u_mosaicSize.xyxy;\nv_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);\n#if defined (PATTERN)\nv_widthRatio = width / v_patternSize.y;\n#else\nv_widthRatio = width / sdfPatternHalfWidth / 2.0;\n#endif\n#endif\nv_lineHalfWidth = (width + u_antialiasing) * 0.5;\nmediump vec2 dir = a_dir_normal.xy * scale;\nmediump vec2 offset_ = a_extrude_offset.zw * scale * offset;\nmediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n#if defined (PATTERN) || defined(SDF)\nv_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = abs(v_normal.y);\nlowp float alpha = smoothstep(1.0, 0.0, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_normal = a_xnormal;\nmediump vec2 dist = u_outline_width * scale * a_offset;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},text:{"text.frag":"uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nif (u_halo > 0.5)\n{\nv_color = halo_color * opacity;\nhalo_width *= sdfPixel;\nhalo_blur *= sdfPixel;\n}\nelse\n{\nv_color = color * opacity;\nhalo_width = 0.0;\nhalo_blur = 0.0;\n}\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_color *= interpolatedOpacity;\nmediump float a_angle       = a_levelInfo[1];\nmediump float a_minLevel    = a_levelInfo[2];\nmediump float a_maxLevel    = a_levelInfo[3];\nmediump vec2 a_tex          = a_texAngleRange.xy;\nmediump float a_visMinAngle    = a_texAngleRange.z;\nmediump float a_visMaxAngle    = a_texAngleRange.w;\nmediump float delta_z = 0.0;\nmediump float angle = mod(a_angle + u_mapRotation, 256.0);\nif (a_visMinAngle < a_visMaxAngle)\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n}\nelse\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n}\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_color[3], 0.0);\nv_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_edgeDistance = edgePos - halo_width / size;\nv_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}"},util:{"encoding.glsl":"const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}","util.glsl":"float nextPOT(in float x) {\nreturn pow(2.0, ceil(log2(abs(x))));\n}"}},n=new(i(1828).a)((function(e){let t=r
return e.split("/").forEach(e=>{t&&(t=t[e])}),t}))
function a(e){return n.resolveIncludes(e)}var o=i(1901)
const l=e=>Object(o.a)({ID:e.id,PATTERN:e.pattern}),c={shaders:e=>({vertexShader:l(e)+a("background/background.vert"),fragmentShader:l(e)+a("background/background.frag")})},h=e=>Object(o.a)({ID:e.id}),u={shaders:e=>({vertexShader:h(e)+a("circle/circle.vert"),fragmentShader:h(e)+a("circle/circle.frag")})},d=e=>Object(o.a)({ID:e.id,PATTERN:e.pattern}),f={shaders:e=>({vertexShader:d(e)+a("fill/fill.vert"),fragmentShader:d(e)+a("fill/fill.frag")})},_=e=>Object(o.a)({ID:e.id}),p={shaders:e=>({vertexShader:_(e)+a("outline/outline.vert"),fragmentShader:_(e)+a("outline/outline.frag")})},m=e=>Object(o.a)({ID:e.id,SDF:e.sdf}),g={shaders:e=>({vertexShader:m(e)+a("icon/icon.vert"),fragmentShader:m(e)+a("icon/icon.frag")})},b=e=>Object(o.a)({ID:e.id,PATTERN:e.pattern,SDF:e.sdf}),y={shaders:e=>({vertexShader:b(e)+a("line/line.vert"),fragmentShader:b(e)+a("line/line.frag")})},x=e=>Object(o.a)({ID:e.id}),v={shaders:e=>({vertexShader:x(e)+a("text/text.vert"),fragmentShader:x(e)+a("text/text.frag")})}
class O{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const s=t.key<<3|this._getMaterialOptionsValue(t.type,i)
if(this._programByKey.has(s))return this._programByKey.get(s)
const r=this._getProgramTemplate(t.type),{shaders:n}=r,{vertexShader:a,fragmentShader:o}=n(i),l=t.getShaderHeader(),c=t.getShaderMain(),h=a.replace("#pragma header",l).replace("#pragma main",c),u=e.programCache.acquire(h,o,t.getAttributeLocations())
return this._programByKey.set(s,u),u}_getMaterialOptionsValue(e,t){switch(e){case s.b.BACKGROUND:{const e=t
return(e.pattern?1:0)<<1|(e.id?1:0)}case s.b.FILL:{const e=t
return(e.pattern?1:0)<<1|(e.id?1:0)}case s.b.OUTLINE:return t.id?1:0
case s.b.LINE:{const e=t
return(e.sdf?1:0)<<2|(e.pattern?1:0)<<1|(e.id?1:0)}case s.b.ICON:{const e=t
return(e.sdf?1:0)<<1|(e.id?1:0)}case s.b.CIRCLE:case s.b.TEXT:return t.id?1:0
default:return 0}}_getProgramTemplate(e){switch(e){case s.b.BACKGROUND:return c
case s.b.CIRCLE:return u
case s.b.FILL:return f
case s.b.ICON:return g
case s.b.LINE:return y
case s.b.OUTLINE:return p
case s.b.TEXT:return v
default:return null}}}},2414:function(e,t,i){"use strict"
i.r(t),i.d(t,"Stage",(function(){return Ft})),i.d(t,"LabelManager",(function(){return Zt})),i.d(t,"GraphicsView2D",(function(){return $t.a})),i.d(t,"GraphicContainer",(function(){return Jt.a})),i.d(t,"MapViewNavigation",(function(){return Oi})),i.d(t,"MagnifierView2D",(function(){return Mi}))
var s=i(354),r=i(932),n=i(77),a=i(20),o=i(948),l=i(898),c=i(893),h=i(1147),u=i(1545),d=i(1025),f=i(919),_=i(938),p=i(1986),m=i(1290),g=i(908),b=i(1344),y=i(2199),x=i(1366),v=i(1707)
const O={shaders:{vertexShader:Object(v.a)("bitBlit/bitBlit.vert"),fragmentShader:Object(v.a)("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])}
var w=i(985),T=i(877),E=i(1601),S=i(998)
class R{constructor(){this._initialized=!1}dispose(){this._program=Object(a.e)(this._program),this._vertexArrayObject=Object(a.e)(this._vertexArrayObject)}render(e,t,i,s){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA,T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",s),e.drawArrays(T.r.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0
const t=Object(E.a)(e,O)
if(!t)return!1
const i=new Int8Array(16)
i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1
const s=O.attributes,r=new S.a(e,s,x.c,{geometry:w.a.createVertex(e,T.D.STATIC_DRAW,i)})
return this._program=t,this._vertexArrayObject=r,this._initialized=!0,!0}}var M=i(1901)
const F=e=>{let t=""
t+=e[0].toUpperCase()
for(let i=1;i<e.length;i++){const s=e[i]
s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},C=e=>{const t={}
for(const i in e)t[F(i)]=e[i]
return Object(M.a)(t)},j=(e,t,i,s)=>{const r=e+e.substring(e.lastIndexOf("/")),n=t+t.substring(t.lastIndexOf("/"))
return{attributes:i,shaders:{vertexShader:C(s)+Object(v.a)(r+".vert"),fragmentShader:C(s)+Object(v.a)(n+".frag")}}},A=e=>e===g.c.HITTEST||e===g.c.LABEL_ALPHA
class B{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t,i=[],s=[]){const r=t.vsPath+"."+t.fsPath+JSON.stringify(i)+s.join(".")
if(this._programByKey.has(r))return this._programByKey.get(r)
const n=s.reduce((t,i)=>({...t,[i]:e.context.driverTest[i]}),{}),a={...i.map(e=>"string"==typeof e?{name:e,value:!0}:e).reduce((e,t)=>({...e,[t.name]:t.value}),{}),...n},{vsPath:o,fsPath:l,attributes:c}=t,h=j(o,l,c,a),u=this._rctx.programCache.acquire(h.shaders.vertexShader,h.shaders.fragmentShader,h.attributes)
if(!u)throw new Error("Unable to get program for key: ${key}")
return this._programByKey.set(r,u),u}getMaterialProgram(e,t,i,s,r,n=["ignoresSamplerPrecision"]){const o=(({rendererInfo:e,drawPhase:t},i,s,r)=>{return`${i.getVariationHash()}-${r.join(".")}-${n=t,(A(n)?1:0)|(n===g.c.HIGHLIGHT?2:0)}-${e.getVariationHash()}-${Object(a.k)(s)&&s.join(".")}`
var n})(e,t,r,n)
if(this._programByKey.has(o))return this._programByKey.get(o)
const l=((e,t,i,s)=>{const r=s.reduce((t,i)=>({...t,[i]:e.context.driverTest[i]}),{}),n={...t.getVariation(),...e.rendererInfo.getVariation(),highlight:e.drawPhase===g.c.HIGHLIGHT,id:A(e.drawPhase),...r}
if(Object(a.k)(i))for(const e of i)n[e]=!0
return n})(e,t,r,n),c=j(i,i,s,l),h=this._rctx.programCache.acquire(c.shaders.vertexShader,c.shaders.fragmentShader,c.attributes)
if(!h)throw new Error("Unable to get program for key: ${key}")
return this._programByKey.set(o,h),h}}var I=i(78),P=i(660),D=i(1251),L=i(177),z=i(861),N=i(876),k=i(1042),U=i(2153),G=i(891),V=i(1433),W=i(1603)
class X{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new W.a(0,0,e,t))}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new W.a
let i=null,s=-1
for(let r=0;r<this._free.length;++r){const n=this._free[r]
e<=n.width&&t<=n.height&&(null===i||n.y<=i.y&&n.x<=i.x)&&(i=n,s=r)}return null===i?new W.a:(this._free.splice(s,1),i.width<i.height?(i.width>e&&this._free.push(new W.a(i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new W.a(i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new W.a(i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new W.a(i.x,i.y+t,e,i.height-t))),new W.a(i.x,i.y,e,t))}release(e){for(let t=0;t<this._free.length;++t){const i=this._free[t]
if(i.y===e.y&&i.height===e.height&&i.x+i.width===e.x)i.width+=e.width
else if(i.x===e.x&&i.width===e.width&&i.y+i.height===e.y)i.height+=e.height
else if(e.y===i.y&&e.height===i.height&&e.x+e.width===i.x)i.x=e.x,i.width+=e.width
else{if(e.x!==i.x||e.width!==i.width||e.y+e.height!==i.y)continue
i.y=e.y,i.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)}}var H=i(973)
const q=e=>Math.floor(e/256)
class Y{constructor(e,t,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=t,this._glyphSource=i,this._binPack=new X(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph()}dispose(){this._binPack=null
for(const e of this._textures)e&&e.dispose()
this._textures.length=0,this._glyphData.length=0}_initDecorationGlyph(){const e=[117,149,181,207,207,181,149,117],t=[]
for(let i=0;i<e.length;i++){const s=e[i]
for(let e=0;e<11;e++)t.push(s)}const i={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(t)}
this._recordGlyph(i)}async getGlyphItems(e,t,i){const s=this._getGlyphCache(e)
return await this._fetchRanges(e,t,i),t.map(t=>this._getMosaicItem(s,e,t))}bind(e,t,i,s){const r=this._getTexture(e,i)
r.setSamplingMode(t),this._dirties[i]&&(r.setData(this._glyphData[i]),this._dirties[i]=!1),e.bindTexture(r,s)}_getGlyphCache(e){return this._glyphCache[e]||(this._glyphCache[e]={}),this._glyphCache[e]}_getTexture(e,t){return this._textures[t]||(this._textures[t]=new H.a(e,{pixelFormat:T.p.ALPHA,dataType:T.q.UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._textures[t]}_invalidate(){this._dirties[this._currentPage]=!0}async _fetchRanges(e,t,i){const s=function(e){const t=new Set
for(const i of e)t.add(q(i))
return t}(t),r=[]
s.forEach(t=>{r.push(this._fetchRange(e,t,i))}),await Promise.all(r)}async _fetchRange(e,t,i){if(t>256)return null
const s=e+t
return function(e,t,i){return e.has(t)||e.set(t,i().then(()=>{e.delete(t)}).catch(i=>{e.delete(t),Object(z.w)(i)})),e.get(t)}(this._rangePromises,s,()=>this._glyphSource.getRange(e,t,i))}_getMosaicItem(e,t,i){if(!e[i]){const s=this._glyphSource.getGlyph(t,i)
if(!s||!s.metrics)return(e=>({rect:new W.a(0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:e,sdf:!0}))(i)
const r=this._recordGlyph(s),n=this._currentPage,a=s.metrics
e[i]={rect:r,page:n,metrics:a,code:i,sdf:!0},this._invalidate()}return e[i]}_recordGlyph(e){const t=e.metrics
let i
if(0===t.width)i=new W.a(0,0,0,0)
else{const s=3,r=t.width+2*s,a=t.height+2*s
i=this._binPack.allocate(r,a),i.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new X(this.width-4,this.height-4),i=this._binPack.allocate(r,a))
const o=this._glyphData[this._currentPage],l=e.bitmap
let c,h
if(l)for(let e=0;e<a;e++){c=r*e,h=this.width*(i.y+e)+i.x
for(let e=0;e<r;e++)o[h+e]=l[c+e]}Object(n.a)("esri-glyph-debug")&&this._showDebugPage(o)}return i}_showDebugPage(e){const t=document.createElement("canvas"),i=t.getContext("2d"),s=new ImageData(this.width,this.height),r=s.data
t.width=this.width,t.height=this.height,t.style.border="1px solid black"
for(let t=0;t<e.length;++t)r[4*t+0]=e[t],r[4*t+1]=0,r[4*t+2]=0,r[4*t+3]=255
i.putImageData(s,0,0),document.body.appendChild(t)}}var K=i(1182)
class Z{constructor(e){for(this._metrics=[],this._bitmaps=[];e.next();)switch(e.tag()){case 1:{const t=e.getMessage()
for(;t.next();)switch(t.tag()){case 3:{const e=t.getMessage()
let i,s,r,n,a,o,l
for(;e.next();)switch(e.tag()){case 1:i=e.getUInt32()
break
case 2:s=e.getBytes()
break
case 3:r=e.getUInt32()
break
case 4:n=e.getUInt32()
break
case 5:a=e.getSInt32()
break
case 6:o=e.getSInt32()
break
case 7:l=e.getUInt32()
break
default:e.skip()}e.release(),i&&(this._metrics[i]={width:r,height:n,left:a,top:o,advance:l},this._bitmaps[i]=s)
break}default:t.skip()}t.release()
break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}}class ${constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,t){this._ranges[e]=t}}class J{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,t,i){const s=this._getFontStack(e)
if(s.getRange(t))return Promise.resolve()
const r=256*t,n=r+255,a=this._baseURL.replace("{fontstack}",e).replace("{range}",r+"-"+n)
return Object(P.default)(a,{responseType:"array-buffer",...i}).then(e=>{s.addRange(t,new Z(new K.a(new Uint8Array(e.data),new DataView(e.data))))})}getGlyph(e,t){const i=this._getFontStack(e)
if(!i)return
const s=Math.floor(t/256)
if(s>256)return
const r=i.getRange(s)
return r?{metrics:r.getMetrics(t),bitmap:r.getBitmap(t)}:void 0}_getFontStack(e){let t=this._glyphInfo[e]
return t||(t=this._glyphInfo[e]=new $),t}}var Q=i(1177)
class ee{constructor(e){this.size=e
const t=document.createElement("canvas")
t.width=t.height=e,this._context=t.getContext("2d"),this._gridOuter=new Float64Array(e*e),this._gridInner=new Float64Array(e*e),this._f=new Float64Array(e),this._d=new Float64Array(e),this._z=new Float64Array(e+1),this._v=new Int16Array(e)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(e,t,i=31){this._initSVG()
const s=this.createSVGString(e)
return new Promise((e,r)=>{const n=new Image
n.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(s),n.onload=()=>{n.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(n,0,0,this.size,this.size)
const t=this._context.getImageData(0,0,this.size,this.size),s=new Uint8Array(this.size*this.size*4)
for(let e=0;e<this.size*this.size;e++){const i=t.data[4*e+3]/255
this._gridOuter[e]=1===i?0:0===i?1e20:Math.max(0,.5-i)**2,this._gridInner[e]=1===i?1e20:0===i?0:Math.max(0,i-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size)
for(let e=0;e<this.size*this.size;e++){const t=this._gridOuter[e]-this._gridInner[e]
Object(Q.a)(.5-t/(2*i),s,4*e)}e(s)}
const a=t&&t.signal
a&&Object(z.q)(a,()=>r(Object(z.e)()))})}_initSVG(){if(!this._svg){const e=document.createElementNS("http://www.w3.org/2000/svg","svg")
e.setAttribute("style","position: absolute;"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.setAttribute("aria-hidden","true"),e.setAttribute("role","presentation"),document.body.appendChild(e),this._svg=e}}createSVGString(e){this._initSVG()
const t=document.createElementNS("http://www.w3.org/2000/svg","path")
t.setAttribute("d",e),this._svg.appendChild(t)
const i=t.getBBox(),s=i.width/i.height,r=this.size/2
let n,a,o,l
if(s>1){a=n=r/i.width
const e=r*(1/s)
o=this.size/4,l=r-e/2}else n=a=r/i.height,o=r-r*s/2,l=this.size/4
const c=-i.x*n+o,h=-i.y*a+l
t.setAttribute("style",`transform: matrix(${n}, 0, 0, ${a}, ${c}, ${h})`)
const u=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`
return this._svg.removeChild(t),u}_edt(e,t,i){const s=this._f,r=this._d,n=this._v,a=this._z
for(let o=0;o<t;o++){for(let r=0;r<i;r++)s[r]=e[r*t+o]
this._edt1d(s,r,n,a,i)
for(let s=0;s<i;s++)e[s*t+o]=r[s]}for(let o=0;o<i;o++){for(let i=0;i<t;i++)s[i]=e[o*t+i]
this._edt1d(s,r,n,a,t)
for(let i=0;i<t;i++)e[o*t+i]=Math.sqrt(r[i])}}_edt1d(e,t,i,s,r){i[0]=0,s[0]=-1e20,s[1]=1e20
for(let t=1,n=0;t<r;t++){let r=(e[t]+t*t-(e[i[n]]+i[n]*i[n]))/(2*t-2*i[n])
for(;r<=s[n];)n--,r=(e[t]+t*t-(e[i[n]]+i[n]*i[n]))/(2*t-2*i[n])
n++,i[n]=t,s[n]=r,s[n+1]=1e20}for(let n=0,a=0;n<r;n++){for(;s[a+1]<n;)a++
t[n]=(n-i[a])*(n-i[a])+e[i[a]]}}}var te=i(1236)
function ie(e){return e&&"static"===e.type}class se{constructor(e,t,i,s=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(t<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=i,this._requestRender=e,s>0&&(this._maxItemSize=s),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new X(this._pageWidth,this._pageHeight)
const r=Math.floor(this._pageWidth),n=Math.floor(this._pageHeight)
this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(r*n)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(e){return e>=this._mosaicPages.length?-1:this._mosaicPages[e].size[0]}getHeight(e){return e>=this._mosaicPages.length?-1:this._mosaicPages[e].size[1]}getPageTexture(e){return e<this._mosaicPages.length?this._mosaicPages[e].texture:null}has(e){return this._mosaicRects.has(e)}get itemCount(){return this._mosaicRects.size}getSpriteItem(e){return this._mosaicRects.get(e)}addSpriteItem(e,t,i,s,r,n){if(this._mosaicRects.has(e))return this._mosaicRects.get(e)
let a,o,l
if(ie(i))[a,o,l]=this._allocateImage(t[0],t[1])
else{a=new W.a(0,0,t[0],t[1]),o=this._mosaicPages.length
const e=void 0
this._mosaicPages.push({mosaicsData:i,size:t,dirty:!0,texture:e})}if(a.width<=0||a.height<=0)return null
const c={rect:a,width:t[0],height:t[1],sdf:r,simplePattern:n,pixelRatio:1,page:o}
return this._mosaicRects.set(e,c),ie(i)&&this._copy({rect:a,spriteSize:t,spriteData:i.data,page:o,pageSize:l,repeat:s,sdf:r}),c}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const e=this._spriteCopyQueue.pop()
e&&this._copy(e)}getSpriteItems(e){const t={}
for(const i of e)t[i]=this.getSpriteItem(i)
return t}getMosaicItemPosition(e){const t=this.getSpriteItem(e),i=t&&t.rect
if(!i)return null
i.width=t.width,i.height=t.height
const s=t.width,r=t.height,n=G.A,a=this._mosaicPages[t.page]
return{size:[t.width,t.height],tl:[(i.x+n)/a[0],(i.y+n)/a[1]],br:[(i.x+n+s)/a[0],(i.y+n+r)/a[1]],page:t.page}}bind(e,t,i=0,s=0){const r=this._mosaicPages[i],n=r.mosaicsData
let o=r.texture
if(o||(o=function(e,t,i){return ie(t)?new H.a(e,{pixelFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,width:i[0],height:i[1]},new Uint8Array(t.data.buffer)):new H.a(e,{pixelFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,samplingMode:T.z.LINEAR,wrapMode:T.B.CLAMP_TO_EDGE,width:i[0],height:i[1]},null)}(e,n,r.size),r.texture=o),o.setSamplingMode(t),ie(n))e.bindTexture(o,s),r.dirty&&(o.setData(new Uint8Array(n.data.buffer)),o.generateMipmap())
else{const t=n.data,i=t.bindFrame(e,o,s)
Object(a.k)(this._requestRender)&&i&&t.frameCount>0&&this._requestRender.requestRender(),t.bindFrame(e,o,s)}r.dirty=!1}static _copyBits(e,t,i,s,r,n,a,o,l,c,h){let u=s*t+i,d=o*n+a
if(h){d-=n
for(let a=-1;a<=c;a++,u=((a+c)%c+s)*t+i,d+=n)for(let t=-1;t<=l;t++)r[d+t]=e[u+(t+l)%l]}else for(let i=0;i<c;i++){for(let t=0;t<l;t++)r[d+t]=e[u+t]
u+=t,d+=n}}_copy(e){if(e.page>=this._mosaicPages.length)return
const t=this._mosaicPages[e.page],i=t.mosaicsData
if(!ie(t.mosaicsData))throw new s.a("mapview-invalid-resource","unsuitable data type!")
const r=e.spriteData,n=i.data
n&&r||console.error("Source or target images are uninitialized!"),se._copyBits(r,e.spriteSize[0],0,0,n,e.pageSize[0],e.rect.x+G.A,e.rect.y+G.A,e.spriteSize[0],e.spriteSize[1],e.repeat),t.dirty=!0}_allocateImage(e,t){e+=2*G.A,t+=2*G.A
const i=Math.max(e,t)
if(this._maxItemSize&&this._maxItemSize<i){const i=2**Math.ceil(Object(te.c)(e)),s=2**Math.ceil(Object(te.c)(t)),r=new W.a(0,0,e,t)
return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(i*s)},size:[i,s],dirty:!0,texture:void 0}),[r,this._mosaicPages.length-1,[i,s]]}const s=this._binPack.allocate(e,t)
if(s.width<=0){const i=this._mosaicPages[this._currentPage]
return!i.dirty&&ie(i.mosaicsData)&&(i.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new X(this._pageWidth,this._pageHeight),this._allocateImage(e,t)}return[s,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null
for(const e of this._mosaicPages){const t=e.texture
t&&t.dispose()
const i=e.mosaicsData
ie(i)||i.data.pause()}this._mosaicPages=null,this._mosaicRects.clear()}}var re=i(942)
const ne=new Uint32Array(256)
for(let e=0;e<256;e++){let t=e
for(let e=0;e<8;e++)t=0!=(1&t)?3988292384^t>>>1:t>>>1
ne[e]=t}const ae=new s.a("Not a PNG"),oe=new s.a("Not an animated PNG"),le=new Uint8Array([137,80,78,71,13,10,26,10])
function ce(e){const t=e.constructor===Uint8Array?e:new Uint8Array(e)
return!le.some((e,i)=>e!==t[i])}class he{constructor(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[],this.paused=!1,this.playing=!1,this.playSpeed=1,this.currentFrameNumber=0,this._lastUsedFrame=-1}static async create(e,t){const i=new he
try{await i._load(e,t)}catch(e){if(!Object(z.m)(e))return new s.a("invalid-resource","Could not load PNG: "+e.message)}return i}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(e,t,i){e.bindTexture(t,i)
const s=this.frameChanged()
if(!s)return!1
const r=this.currentFrame,n=r.frameData,a=t.descriptor
return(r.left||r.top||r.width!==a.width||r.height!==a.height)&&t.setData(null),t.updateData(0,r.left,r.top,r.width,r.height,n),this.updateUsedFrame(),s}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(e,t){try{const t=function(e,t){const i=new Uint8Array(t)
if(le.some((e,t)=>e!==i[t]))return ae
let s=!1
if(de(i,e=>!(s="acTL"===e)),!s)return oe
const r=[],n=[]
let a=null,o=null,l=0
if(de(i,(t,i,s,c)=>{const h=new DataView(i.buffer)
switch(t){case"IHDR":a=i.subarray(s+8,s+8+c),e.width=h.getUint32(s+8),e.height=h.getUint32(s+12)
break
case"acTL":e.numPlays=h.getUint32(s+8+4)
break
case"fcTL":{o&&(e.frames.push(o),l++),o=new ue,o.width=h.getUint32(s+8+4),o.height=h.getUint32(s+8+8),o.left=h.getUint32(s+8+12),o.top=h.getUint32(s+8+16)
const t=h.getUint16(s+8+20)
let i=h.getUint16(s+8+22)
0===i&&(i=100),o.delay=1e3*t/i,o.delay<=10&&(o.delay=100),e.playTime+=o.delay,o.disposeOp=h.getUint8(s+8+24),o.blendOp=h.getUint8(s+8+25),o.dataParts=[],0===l&&2===o.disposeOp&&(o.disposeOp=1)
break}case"fdAT":o&&o.dataParts.push(i.subarray(s+8+4,s+8+c))
break
case"IDAT":o&&o.dataParts.push(i.subarray(s+8,s+8+c))
break
case"IEND":n.push(_e(i,s,12+c))
break
default:r.push(_e(i,s,12+c))}}),0===e.frames.length)return oe
e.frameCount=e.frames.length
const c=new Blob(r),h=new Blob(n)
return e.frames.forEach(e=>{let t=[]
t.push(le),a.set(me(e.width),0),a.set(me(e.height),4),t.push(pe("IHDR",a)),t.push(c),e.dataParts.forEach(e=>t.push(pe("IDAT",e))),t.push(h),e.data=new Blob(t,{type:"image/png"}),delete e.dataParts,t=null}),e}(this,e)
if(t!==this)return t
this._resizeCanvas=document.createElement("canvas"),this._resizeCanvas.width=this.width,this._resizeCanvas.height=this.height,await Promise.all(this.frames.map(e=>e.createImage(this._resizeCanvas)))}catch(e){if(!Object(z.m)(e))return new s.a("invalid-resource","Could not parse PNG")}this.play()}_play(){let e,t
if(0===this.playSpeed)return void this.pause()
this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),t=this.currentFrameNumber,t-=1,t<0&&(t=this.frames.length-1),e=1*-this.frames[t].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,e=1*this.frames[this.currentFrameNumber].delay/this.playSpeed)
const i=this.frames[this.currentFrameNumber]
this.currentFrame={frameData:i.imageData,top:i.top,left:i.left,width:i.width,height:i.height},this.timerID=window.setTimeout(()=>this._play(),e)}}class ue{constructor(){this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.data=null,this.imageData=null}async createImage(e){if(null===this.imageData)return new Promise((t,i)=>{const s=URL.createObjectURL(this.data),r=document.createElement("img")
r.onload=()=>{URL.revokeObjectURL(s),this.imageData=function(e,t){t.width=e.width,t.height=e.height
const i=t.getContext("2d")
i.drawImage(e,0,0,e.width,e.height)
const s=i.getImageData(0,0,e.width,e.height),r=new Uint8Array(s.data)
let n
for(let e=0;e<r.length;e+=4)n=r[e+3]/255,r[e]=r[e]*n,r[e+1]=r[e+1]*n,r[e+2]=r[e+2]*n
return new ImageData(new Uint8ClampedArray(r.buffer),e.width,e.height)}(r,e),t()},r.onerror=()=>{URL.revokeObjectURL(s),this.imageData=null,i(new Error("Image creation error"))},r.src=s})}}function de(e,t){const i=new DataView(e.buffer)
let s,r,n,a=8
do{r=i.getUint32(a),s=fe(e,a+4,4),n=t(s,e,a,r),a+=12+r}while(!1!==n&&"IEND"!==s&&a<e.length)}function fe(e,t,i){const s=Array.prototype.slice.call(e.subarray(t,t+i))
return String.fromCharCode.apply(String,s)}function _e(e,t,i){const s=new Uint8Array(i)
return s.set(e.subarray(t,t+i)),s}function pe(e,t){const i=e.length+t.length,s=new Uint8Array(i+8),r=new DataView(s.buffer)
r.setUint32(0,t.length),s.set(function(e){const t=new Uint8Array(e.length)
for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)
return t}(e),4),s.set(t,8)
const n=function(e,t=0,i=e.length-t){let s=-1
for(let r=t,n=t+i;r<n;r++)s=s>>>8^ne[255&(s^e[r])]
return-1^s}(s,4,i)
return r.setUint32(i+4,n),s}function me(e){return new Uint8Array([e>>>24&255,e>>>16&255,e>>>8&255,255&e])}function ge(e){if(!e||0===e.byteLength)return!1
const t=e.constructor===Uint8Array?e:new Uint8Array(e)
return 71===t[0]&&73===t[1]&&70===t[2]&&56===t[3]}class be{constructor(){this.paused=!1,this.playing=!1,this.waitTillDone=!0,this.loading=!1,this.firstFrameOnly=!1,this.frames=[],this.comment="",this.length=0,this.currentFrameNumber=0,this.frameCount=0,this.playSpeed=1,this.lastFrame=null,this.playOnLoad=!0,this.complete=!1,this.interlaceOffsets=[0,4,2,1],this.interlaceSteps=[8,8,4,2],this._lastUsedFrame=-1}static async create(e,t){const i=new be
try{await i._load(e,t)}catch(e){if(!Object(z.m)(e))return new s.a("invalid-resource","Could not load PNG: "+e.message)}return i}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(e,t,i){e.bindTexture(t,i)
const s=this.frameChanged()
if(s){const e=this.currentFrame,i=e.frameData
t.updateData(0,0,0,e.width,e.height,i),this.updateUsedFrame()}return s}seekFrame(e){clearTimeout(this.timerID),this.currentFrameNumber=e%this.frames.length,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}seek(e){clearTimeout(this.timerID),e<0&&(e=0),e*=1e3,e%=this.length
let t=0
for(;e>this.frames[t].time+this.frames[t].delay&&t<this.frames.length;)t+=1
this.currentFrameNumber=t,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(e,t){try{this.loading=!0,await this._parse(e,t),this.loading=!1,this.play()}catch(e){if(!Object(z.m)(e))return new s.a("invalid-resource","Could not parse gif!")}}_parse(e,t){const i=new ye(e)
i.pos+=6,this.width=i.data[i.pos++]+(i.data[i.pos++]<<8),this.height=i.data[i.pos++]+(i.data[i.pos++]<<8)
const s=i.data[i.pos++]
return this.globalColourCount=1<<1+(7&s),i.pos++,i.pos++,128&s&&(this.globalColourTable=this._parseColourTable(this.globalColourCount,i)),new Promise((e,s)=>{setTimeout(()=>this._parseBlock(i,e,s,t),0)})}async _parseBlock(e,t,i,s){if(s&&s.signal&&Object(z.n)(s.signal))return void i(Object(z.e)())
const r=e.data[e.pos++]
if(44===r){if(this._parseImg(e),this.firstFrameOnly)return this._finishedLoading(),void t()}else{if(59===r)return this._finishedLoading(),void t()
this._parseExt(e)}"function"==typeof this.onprogress&&this.onprogress({bytesRead:e.pos,totalBytes:e.data.length,frame:this.frames.length}),setTimeout(()=>this._parseBlock(e,t,i,s),0)}_parseColourTable(e,t){const i=[]
for(let s=0;s<e;s++)i.push([t.data[t.pos++],t.data[t.pos++],t.data[t.pos++]])
return i}_parseImg(e){const t={}
this.frames.push(t),t.disposalMethod=this.disposalMethod,t.time=this.length,t.delay=10*this.delayTime,this.length+=t.delay,this.transparencyGiven?t.transparencyIndex=this.transparencyIndex:t.transparencyIndex=void 0,t.leftPos=e.data[e.pos++]+(e.data[e.pos++]<<8),t.topPos=e.data[e.pos++]+(e.data[e.pos++]<<8),t.width=e.data[e.pos++]+(e.data[e.pos++]<<8),t.height=e.data[e.pos++]+(e.data[e.pos++]<<8)
const i=e.data[e.pos++]
t.localColourTableFlag=!!(128&i),t.localColourTableFlag&&(t.localColourTable=this._parseColourTable(1<<1+(7&i),e)),this.pixelBufSize!==t.width*t.height&&(this.pixelBuf=new Uint8Array(t.width*t.height),this.pixelBufSize=t.width*t.height),this._lzwDecode(e.data[e.pos++],e.readSubBlocksB()),64&i?(t.interlaced=!0,(e=>{const t=this.pixelBufSize/e
this.interlacedBufSize!==this.pixelBufSize&&(this.deinterlaceBuf=new Uint8Array(this.pixelBufSize),this.interlacedBufSize=this.pixelBufSize)
let i=0
for(let s=0;s<4;s++)for(let r=this.interlaceOffsets[s];r<t;r+=this.interlaceSteps[s])this.deinterlaceBuf.set(this.pixelBuf.subarray(i,i+e),r*e),i+=e})(t.width)):t.interlaced=!1,this._processFrame(t)}_lzwDecode(e,t){let i,s,r,n,a,o,l,c,h
r=s=0
let u=[]
const d=1<<e,f=d+1
for(n=e+1,h=!1;!h;){for(o=a,a=0,i=0;i<n;i++)t[r>>3]&1<<(7&r)&&(a|=1<<i),r++
if(a===d){for(u=[],n=e+1,i=0;i<d;i++)u[i]=[i]
u[d]=[],u[f]=null}else{if(a===f)return void(h=!0)
for(a>=u.length?u.push(u[o].concat(u[o][0])):o!==d&&u.push(u[o].concat(u[a][0])),l=u[a],c=l.length,i=0;i<c;i++)this.pixelBuf[s++]=l[i]
u.length===1<<n&&n<12&&n++}}}_processFrame(e){e.image=document.createElement("canvas"),e.image.width=this.width,e.image.height=this.height,e.ctx=e.image.getContext("2d")
const t=e.localColourTableFlag?e.localColourTable:this.globalColourTable
null===this.lastFrame&&(this.lastFrame=e)
const i=2===this.lastFrame.disposalMethod||3===this.lastFrame.disposalMethod
i||e.ctx.drawImage(this.lastFrame.image,0,0,this.width,this.height)
const s=e.ctx.getImageData(e.leftPos,e.topPos,e.width,e.height),r=e.transparencyIndex,n=s.data,a=e.interlaced?this.deinterlaceBuf:this.pixelBuf,o=a.length
let l,c,h=0
for(let e=0;e<o;e++)l=a[e],c=t[l],r!==l?(n[h++]=c[0],n[h++]=c[1],n[h++]=c[2],n[h++]=255):i?(n[h+3]=0,h+=4):h+=4
e.ctx.putImageData(s,e.leftPos,e.topPos),this.lastFrame=e}_parseExt(e){const t=e.data[e.pos++]
249===t?this._parseGCExt(e):254===t?this.comment+=e.readSubBlocks():255===t?this._parseAppExt(e):(1===t&&(e.pos+=13),e.readSubBlocks())}_parseAppExt(e){e.pos+=1,"NETSCAPE"===e.getString(8)?e.pos+=8:(e.pos+=3,e.readSubBlocks())}_parseGCExt(e){e.pos++
const t=e.data[e.pos++]
this.disposalMethod=(28&t)>>2,this.transparencyGiven=!!(1&t),this.delayTime=e.data[e.pos++]+(e.data[e.pos++]<<8),this.transparencyIndex=e.data[e.pos++],e.pos++}_finishedLoading(){this.loading=!1,this.frameCount=this.frames.length,this.lastFrame=null,this.complete=!0,this.disposalMethod=void 0,this.transparencyGiven=void 0,this.delayTime=void 0,this.transparencyIndex=void 0,this.waitTillDone=void 0,this.pixelBuf=void 0,this.deinterlaceBuf=void 0,this.pixelBufSize=void 0,this.deinterlaceBuf=void 0,this.currentFrameNumber=0,this.frames.length>0&&this._setCurrentFrame(0),this.playOnLoad&&this.play()}_play(){let e,t
0!==this.playSpeed?(this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),t=this.currentFrameNumber,t-=1,t<0&&(t=this.frames.length-1),e=1*-this.frames[t].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,e=1*this.frames[this.currentFrameNumber].delay/this.playSpeed),this._setCurrentFrame(this.currentFrameNumber),this.timerID=window.setTimeout(()=>this._play(),e)):this.pause()}_setCurrentFrame(e){const t=this.frames[e]
this.currentFrame={frameData:t.image,top:0,left:0,width:this.width,height:this.height}}}class ye{constructor(e){this.pos=0,this.data=new Uint8ClampedArray(e),this.len=this.data.length}getString(e){let t=""
for(;e--;)t+=String.fromCharCode(this.data[this.pos++])
return t}readSubBlocks(){let e,t,i=""
do{for(t=e=this.data[this.pos++];t--;)i+=String.fromCharCode(this.data[this.pos++])}while(0!==e&&this.pos<this.len)
return i}readSubBlocksB(){let e,t
const i=[]
do{for(t=e=this.data[this.pos++];t--;)i.push(this.data[this.pos++])}while(0!==e&&this.pos<this.len)
return i}}var xe=i(1153),ve=i(1503)
const Oe=Object(k.a)(),we=L.a.getLogger("esri.views.2d.engine.webgl.TextureManager")
function Te(e,t){const i=Math.round(Object(N.h)(t)*window.devicePixelRatio),s=i>=128?2:4
return Math.min(e,i*s)}const Ee=(e,t,i)=>we.error(new s.a(e,t,i))
class Se{constructor(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}static fromMosaic(e,t){return new Se(e,t.page,t.sdf)}}class Re{constructor(e,t){this.resourceManager=t,this._invalidFontsMap=new Map,this._sdfConverter=new ee(126),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._ongoingRasterizations=new Map,this._imageRequestQueue=new ve.a({concurrency:10,process:async(e,t)=>{Object(z.v)(t)
try{return await Object(P.default)(e,{responseType:"image",signal:t})}catch(t){if(!Object(z.m)(t))throw new s.a("mapview-invalid-resource","Could not fetch requested resource at "+e,t)
throw t}}}),this._spriteMosaic=new se(e,2048,2048,500),this._glyphSource=new J(I.default.fontsUrl+"/{fontstack}/{range}.pbf"),this._glyphMosaic=new Y(1024,1024,this._glyphSource),this._rasterizer=new U.a(t)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}async rasterizeItem(e,t,i,s){if(Object(a.j)(e))return Ee("mapview-null-resource","Unable to rasterize null resource"),null
switch(e.type){case"text":case"esriTS":{const t=await this._rasterizeText(e,i,s)
return t.forEach(e=>this._setTextureBinding(g.a.GLYPH,e)),{glyphMosaicItems:t}}default:{if(Object(re.q)(e))return Ee("mapview-invalid-type","MapView does not support symbol type: "+e.type,e),null
const i=await this._rasterizeSpriteSymbol(e,t,s)
return Object(xe.a)(i)&&i&&this._setTextureBinding(g.a.SPRITE,i),{spriteMosaicItem:i}}}}bindTextures(e,t,i,s=!1){if(0===i.textureBinding)return
const r=this._bindingInfos[i.textureBinding-1],n=r.page,a=s?T.z.LINEAR_MIPMAP_LINEAR:T.z.LINEAR
switch(r.mosaicType){case g.a.SPRITE:{const i=this.sprites.getWidth(n),s=this.sprites.getHeight(n),r=Object(f.s)(Oe,i,s)
return this._spriteMosaic.bind(e,a,n,G.M),t.setUniform1i("u_texture",G.M),void t.setUniform2fv("u_mosaicSize",r)}case g.a.GLYPH:{const i=this.glyphs.width,s=this.glyphs.height,r=Object(f.s)(Oe,i,s)
return this._glyphMosaic.bind(e,a,n,G.G),t.setUniform1i("u_texture",G.G),void t.setUniform2fv("u_mosaicSize",r)}default:we.error("mapview-texture-manager","Cannot handle unknown type "+r.mosaicType)}}_hashMosaic(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3}_setTextureBinding(e,t){const i=this._hashMosaic(e,t)
if(!this._hashToBindingIndex.has(i)){const s=Se.fromMosaic(e,t),r=this._bindingInfos.length+1
this._hashToBindingIndex.set(i,r),this._bindingInfos.push(s)}t.textureBinding=this._hashToBindingIndex.get(i)}async _rasterizeText(e,t,i){let s,r
if("cim"in e){const t=e
s=t.fontName,r=t.text}else{const t=e
s=Object(V.b)(t.font),r=t.text}const n=this._invalidFontsMap.has(s),a=t||Object(re.d)(Object(D.a)(r)[0])
try{return await this._glyphMosaic.getGlyphItems(n?"arial-unicode-ms-regular":s,a,i)}catch(e){return Ee("mapview-invalid-resource",`Couldn't find font ${s}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(s,!0),this._glyphMosaic.getGlyphItems("arial-unicode-ms-regular",a,i)}}async _rasterizeSpriteSymbol(e,t,i){if(Object(re.y)(e))return null
const r=function(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`
case"esriSLS":return`${e.style}.${e.cap}`
case"esriSFS":return""+e.style
case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`
default:return"mosaicHash"in e?e.mosaicHash:JSON.stringify(e)}}(e)
if(this._spriteMosaic.has(r))return this._spriteMosaic.getSpriteItem(r)
if(Object(re.x)(e)||Object(re.t)(e))return this._handleAsyncResource(r,e,i)
const n=this._rasterizer.rasterizeJSONResource(e,1)
if(n){const{size:t,image:i,sdf:s,simplePattern:a}=n
return this._addItemToMosaic(r,t,{type:"static",data:i},Object(re.z)(e),s,a)}return new s.a("TextureManager","unrecognized or null rasterized image")}async _handleAsyncResource(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e)
let s
s=Object(re.x)(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,s)
try{await s,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return s}async _handleSVG(e,t,i){const s=await this._sdfConverter.draw(e.path,i)
return this._addItemToMosaic(t,[126,126],{type:"static",data:new Uint32Array(s.buffer)},!1,!0,!0)}async _handleGIFOrPNG(e,t,i){const r=await async function(e,t){const i=Object(re.o)(e)
let r
const n=";base64,"
if(i.includes(n)){const e=i.indexOf(n)+n.length,t=i.substring(e),s=atob(t),a=new Uint8Array(s.length)
for(let e=0;e<s.length;e++)a[e]=s.charCodeAt(e)
r=a.buffer}else try{const{data:e}=await Object(P.default)(i,{responseType:"array-buffer",...t})
r=e}catch(e){if(!Object(z.m)(e))return new s.a("mapview-invalid-resource","Could not fetch requested resource at "+i)}return r}(e,i)
if(Object(xe.a)(r)){const n=ge(r),a=ce(r)
if(!n&&!a)return new s.a("mapview-invalid-resource","Image data is neither GIF nor PNG!")
let o
try{n&&function(e){if(!e||0===e.byteLength)return!1
const t=new Uint8Array(e)
if(!ge(t))return!1
let i=0
for(let e=0,s=t.length-9;e<s;++e)if(0===t[e]&&33===t[e+1]&&249===t[e+2]&&4===t[e+3]&&0===t[e+8]&&(44===t[e+9]||33===t[e+9])&&(i++,i>1))return!0
return!1}(r)?o=await be.create(r,i):a&&function(e){const t=new Uint8Array(e)
if(!ce(t))return!1
let i=!1
return de(t,e=>!(i="acTL"===e)),i}(r)&&(o=await he.create(r,i))}catch(e){if(!Object(z.m)(e))return new s.a("mapview-invalid-resource","Could not fetch requested resource!")}if(o&&Object(xe.a)(o))return this._addItemToMosaic(t,[o.width,o.height],{type:"animated",data:o},Object(re.z)(e),!1,!1)
const l=new Blob([r],{type:n?"image/gif":"image/png"}),c=await this._imageFromBlob(l)
if(c&&c instanceof HTMLImageElement){let i=c.width,s=c.height
"esriPMS"===e.type&&(i=Math.round(Te(c.width,Object(re.k)(e))),s=Math.round(c.height*(i/c.width)))
const r="cim"in e?e.cim.colorSubstitutions:void 0,{size:n,sdf:a,image:o}=this._rasterizer.rasterizeImageResource(i,s,c,r)
return this._addItemToMosaic(t,n,{type:"static",data:o},Object(re.z)(e),a,!1)}}return new s.a("mapview-invalid-resource","Could not handle resource!")}async _handleImage(e,t,i){if(Object(re.s)(e)||Object(re.v)(e))return this._handleGIFOrPNG(e,t,i)
const r=Object(re.o)(e)
try{let s
const o=this.resourceManager.getResource(r)
if(Object(a.k)(o))s=o
else{const{data:e}=await this._imageRequestQueue.push(r,{...i})
s=e}if(Object(re.w)(r))if("width"in e&&"height"in e)s.width=Object(N.h)(e.width),s.height=Object(N.h)(e.height)
else if("cim"in e){var n
const t=e.cim
s.width=Object(N.h)(null!=(n=t.width)?n:t.scaleX*t.size),s.height=Object(N.h)(t.size)}if(!s.width||!s.height)return null
let l=s.width,c=s.height
"esriPMS"===e.type&&(l=Math.round(Te(s.width,Object(re.k)(e))),c=Math.round(s.height*(l/s.width)))
const h="cim"in e?e.cim.colorSubstitutions:void 0,{size:u,sdf:d,image:f}=this._rasterizer.rasterizeImageResource(l,c,s,h)
return this._addItemToMosaic(t,u,{type:"static",data:f},Object(re.z)(e),d,!1)}catch(e){if(!Object(z.m)(e))return new s.a("mapview-invalid-resource",`Could not fetch requested resource at ${r}. ${e.message}`)}}async _imageFromBlob(e){const t=window.URL.createObjectURL(e)
try{const{data:e}=await this._imageRequestQueue.push(t)
return window.URL.revokeObjectURL(t),e}catch(e){if(window.URL.revokeObjectURL(t),!Object(z.m)(e))return new s.a("mapview-invalid-resource","Could not fetch requested resource at "+t)
throw e}}_addItemToMosaic(e,t,i,s,r,n){return this._spriteMosaic.addSpriteItem(e,t,i,s,r,n)}}var Me=i(1696)
class Fe{constructor(){this.name=this.constructor.name}createOptions(e,t){return null}}class Ce extends Fe{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(!t.size)return
const{context:i,renderingOptions:s}=e
this._quad||(this._quad=new Me.a(i,[0,0,1,0,0,1,1,1]))
const r=i.getBoundFramebufferObject(),{x:n,y:o,width:l,height:c}=i.getViewport()
t.bindTextures(i)
const h=t.getBlock(G.a)
if(Object(a.j)(h))return
const u=h.getFBO(i),d=h.getFBO(i,1)
i.setViewport(0,0,t.size,t.size),this._computeDelta(e,d,s.labelsAnimationTime),this._updateAnimationState(e,d,u),i.bindFramebuffer(r),i.setViewport(n,o,l,c)}_computeDelta(e,t,i){const{context:s,painter:r,displayLevel:n}=e,a=r.materialManager.getProgram(e,this._desc,["delta"])
s.bindFramebuffer(t),s.setClearColor(0,0,0,0),s.clear(s.gl.COLOR_BUFFER_BIT),s.useProgram(a),a.setUniform1i("u_maskTexture",G.B),a.setUniform1i("u_sourceTexture",G.C),a.setUniform1f("u_timeDelta",e.deltaTime),a.setUniform1f("u_animationTime",i),a.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:s,painter:r}=e,n=r.materialManager.getProgram(e,this._desc,["update"])
s.bindTexture(t.colorTexture,1),s.useProgram(n),n.setUniform1i("u_sourceTexture",1),s.bindFramebuffer(i),s.setClearColor(0,0,0,0),s.clear(s.gl.COLOR_BUFFER_BIT),this._quad.draw()}}const je=e=>`#define ${(e=>e.replace("-","_").toUpperCase())(e)}\n`
function Ae(e){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:je(e)+Object(v.a)("blend/blend.vert"),fragmentShader:je(e)+Object(v.a)("blend/blend.frag")}}}const Be=L.a.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect")
class Ie{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture=Object(a.e)(this._backBufferTexture),this._quad=Object(a.e)(this._quad)}draw(e,t,i,r,n){const{context:a,drawPhase:o}=e
if(this._setupShader(a),r&&"normal"!==r&&o!==g.c.LABEL)return void this._drawBlended(e,t,i,r,n)
const l=Ae("normal"),c=a.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes)
if(!c)return void Be.error(new s.a("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'))
a.useProgram(c),t.setSamplingMode(i),a.bindTexture(t,0),c.setUniform1i("u_layerTexture",0),c.setUniform1f("u_opacity",n),a.setBlendingEnabled(!0),a.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA)
const h=this._quad
h.draw(),h.unbind(),c.dispose()}_drawBlended(e,t,i,r,n){const{context:o,state:l,pixelRatio:c,inFadeTransition:h}=e,{size:u}=l,d=o.getBoundFramebufferObject()
let f,_
if(Object(a.k)(d)){const e=d.descriptor
f=e.width,_=e.height}else f=Math.round(c*u[0]),_=Math.round(c*u[1])
this._createOrResizeTexture(e,f,_)
const p=this._backBufferTexture
d.copyToTexture(0,0,f,_,0,0,p),o.setStencilTestEnabled(!1),o.setStencilWriteMask(0),o.setBlendingEnabled(!0),o.setDepthTestEnabled(!1),o.setDepthWriteEnabled(!1)
const m=Ae(r),g=o.programCache.acquire(m.shaders.vertexShader,m.shaders.fragmentShader,m.attributes)
if(!g)return void Be.error(new s.a("mapview-BlendEffect","Error creating shader program for blend mode "+r))
o.useProgram(g),p.setSamplingMode(i),o.bindTexture(p,0),g.setUniform1i("u_backbufferTexture",0),t.setSamplingMode(i),o.bindTexture(t,1),g.setUniform1i("u_layerTexture",1),g.setUniform1f("u_opacity",n),g.setUniform1f("u_inFadeOpacity",h?1:0),o.setBlendFunction(T.b.ONE,T.b.ZERO)
const b=this._quad
b.draw(),b.unbind(),g.dispose(),o.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA)}_setupShader(e){this._quad||(this._quad=new Me.a(e,[-1,-1,1,-1,-1,1,1,1]))}_createOrResizeTexture(e,t,i){const{context:s}=e
null!==this._backBufferTexture&&t===this._size[0]&&i===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(t,i):this._backBufferTexture=new H.a(s,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:t,height:i}),this._size[0]=t,this._size[1]=i)}}class Pe extends Fe{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject()
const{width:i,height:s}=e.getViewport(),r=t.getFbos(i,s).effect0
e.bindFramebuffer(r),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:s}=e,r=s.getPostProcessingEffects(t),n=i.getBoundFramebufferObject()
for(const{postProcessingEffect:t,effect:i}of r)t.draw(e,n,i)
i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),s.blitTexture(i,n.colorTexture,T.z.NEAREST),i.setStencilTestEnabled(!0)}}const De=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],Le=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ze=L.a.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient"),Ne=[0,0,0,0]
class ke{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:0,outlineWidth:.7,innerHaloWidth:.7,outerHaloWidth:.7},this.shadeTexChanged=!0,this.texelData=new Uint8Array(1024),this.minMaxDistance=[0,0]}setHighlightOptions(e){const t=this._convertedHighlightOptions
!function(e,t){t.fillColor[0]=e.color.r/255,t.fillColor[1]=e.color.g/255,t.fillColor[2]=e.color.b/255,t.fillColor[3]=e.color.a,e.haloColor?(t.outlineColor[0]=e.haloColor.r/255,t.outlineColor[1]=e.haloColor.g/255,t.outlineColor[2]=e.haloColor.b/255,t.outlineColor[3]=e.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=e.fillOpacity,t.outlineColor[3]*=e.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=.7,t.outerHaloWidth=.7,t.innerHaloWidth=.7,t.outlinePosition=0}(e,t)
const i=t.outlinePosition-t.outlineWidth/2-t.outerHaloWidth,s=t.outlinePosition-t.outlineWidth/2,r=t.outlinePosition+t.outlineWidth/2,n=t.outlinePosition+t.outlineWidth/2+t.innerHaloWidth,a=1*Math.sqrt(Math.PI/2),o=Math.abs(i)>a?Math.round(10*(Math.abs(i)-a))/10:0,l=Math.abs(n)>a?Math.round(10*(Math.abs(n)-a))/10:0
let c
o&&!l?ze.error("The outer rim of the highlight is "+o+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!o&&l?ze.error("The inner rim of the highlight is "+l+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):o&&l&&ze.error("The highlight is "+Math.max(o,l)+"px away from the edge of the feature; consider reducing some width values.")
const h=[void 0,void 0,void 0,void 0]
function u(e,t,i){h[0]=(1-i)*e[0]+i*t[0],h[1]=(1-i)*e[1]+i*t[1],h[2]=(1-i)*e[2]+i*t[2],h[3]=(1-i)*e[3]+i*t[3]}const{texelData:d}=this
for(let e=0;e<256;++e)c=i+e/255*(n-i),c<i?(h[4*e+0]=0,h[4*e+1]=0,h[4*e+2]=0,h[4*e+3]=0):c<s?u(Ne,t.outlineColor,(c-i)/(s-i)):c<r?[h[0],h[1],h[2],h[3]]=t.outlineColor:c<n?u(t.outlineColor,t.fillColor,(c-r)/(n-r)):[h[4*e+0],h[4*e+1],h[4*e+2],h[4*e+3]]=t.fillColor,d[4*e+0]=255*h[0],d[4*e+1]=255*h[1],d[4*e+2]=255*h[2],d[4*e+3]=255*h[3]
this.minMaxDistance[0]=i,this.minMaxDistance[1]=n,this.shadeTexChanged=!0}applyHighlightOptions(e,t){this.shadeTex||(this.shadeTex=new H.a(e,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,width:256,height:1,samplingMode:T.z.LINEAR})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,256,1,this.texelData),this.shadeTexChanged=!1),e.bindTexture(this.shadeTex,G.J),t.setUniform2fv("u_minMaxDistance",this.minMaxDistance)}destroy(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)}}const Ue={shaders:{vertexShader:Object(v.a)("highlight/textured.vert"),fragmentShader:Object(v.a)("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},Ge={shaders:{vertexShader:Object(v.a)("highlight/textured.vert"),fragmentShader:Object(v.a)("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])}
var Ve=i(1079)
class We{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,G.I),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",De),e.bindVAO(this._resources.quadVAO),e.drawArrays(T.r.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,G.I),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",Le),e.bindVAO(this._resources.quadVAO),e.drawArrays(T.r.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,G.I),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),e.drawArrays(T.r.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i
const s=w.a.createVertex(e,T.D.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),r=new S.a(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new Ve.a("a_position",2,T.k.BYTE,0,4),new Ve.a("a_texcoord",2,T.k.UNSIGNED_BYTE,2,4)]},{geometry:s}),n=Object(E.a)(e,Ue),a=Object(E.a)(e,Ge)
e.useProgram(n),n.setUniform1i("u_texture",G.I),n.setUniform1i("u_shade",G.J),n.setUniform1f("u_sigma",1),e.useProgram(a),a.setUniform1i("u_texture",G.I),a.setUniform1f("u_sigma",1),this._resources={quadGeometry:s,quadVAO:r,highlightProgram:n,blurProgram:a}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}}var Xe=i(1041)
function He(e,t,i){const s=new H.a(e,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,width:t,height:i,samplingMode:T.z.LINEAR})
return[s,new Xe.a(e,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.STENCIL_RENDER_BUFFER},s)]}class qe{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)}_initialize(e,t,i){this._width=t,this._height=i
const[s,r]=He(e,t,i),[n,a]=He(e,t,i)
this._resources={sharedBlur1Tex:s,sharedBlur1Fbo:r,sharedBlur2Tex:n,sharedBlur2Fbo:a}}setup(e,t,i){!this._resources||this._width===t&&this._height===i||this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}}class Ye extends Fe{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new We,this._hlGradient=new ke,this._width=void 0,this._height=void 0,this._hlSurfaces=new qe,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new R}dispose(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:s,height:r}=t.getViewport(),n=i.getFbos(s,r).effect0
this.setup(e,s,r),t.bindFramebuffer(n),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i
const s=t%4,r=i%4
t+=s<2?-s:4-s,i+=r<2?-r:4-r,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject()
const n=Math.round(1*t),a=Math.round(1*i)
this._hlRenderer.setup(e,n,a),this._hlSurfaces.setup(e,n,a)}draw({context:e}){const t=e.getBoundFramebufferObject()
e.setViewport(0,0,1*this._adjustedWidth,1*this._adjustedHeight),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setStencilTestEnabled(!1),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(e,t.colorTexture,T.z.NEAREST,1),e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!0),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null}setHighlightOptions(e){this._hlGradient.setHighlightOptions(e)}}class Ke extends Fe{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){Object(a.k)(this._fbo)&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=G.t){if(!t.length)return null
const s=t.shift(),r=s.point.x,n=s.point.y
return this._outstanding=s,{type:"hittest",distance:i*e,position:[r,n]}}bind(e){const{context:t,attributeView:i}=e
if(!i.size)return
const s=i.getBlock(G.d)
if(Object(a.j)(s))return
const r=s.getFBO(t)
t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){const{context:t,attributeView:i}=e,s=i.getBlock(G.d)
if(Object(a.j)(this._outstanding))return
const r=this._outstanding.resolver
if(Object(a.j)(s))return r.resolve([]),void(this._outstanding=null)
const n=s.getFBO(t),o=new Uint8Array(n.width*n.height*4)
n.readPixels(0,0,n.width,n.height,T.p.RGBA,T.q.UNSIGNED_BYTE,o)
const l=[]
for(let e=0;e<o.length;e+=4)o[e]&&l.push(e/4)
this._outstanding=null,r.resolve(l)}}class Ze extends Fe{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0}dispose(){Object(a.k)(this._fbo)&&this._fbo.dispose()}bind({context:e,painter:t}){const{width:i,height:s}=e.getViewport()
this._boundFBO=e.getBoundFramebufferObject()
const r=t.getFbos(i,s).effect0
e.bindFramebuffer(r),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw({context:e,state:t,pixelRatio:i},s,r=2*G.t){const n=e.getBoundFramebufferObject(),a=t.size[1]*i,o=Math.round(r*i),l=o/2,c=o/2
this._ensureBuffer(o),s.forEach((e,t)=>{const r=new Map,h=Math.floor(t.x*i-o/2),u=Math.floor(a-t.y*i-o/2)
n.readPixels(h,u,o,o,T.p.RGBA,T.q.UNSIGNED_BYTE,this._buf)
for(let e=0;e<this._buf32.length;e++){const t=this._buf32[e]
if(4294967295!==t&&0!==t){const i=e%o,s=o-Math.floor(e/o),n=(l-i)*(l-i)+(c-s)*(c-s),a=r.has(t)?r.get(t):4294967295
r.set(t,Math.min(n,a))}}const d=Array.from(r).sort((e,t)=>e[1]-t[1]).map(e=>e[0])
e.resolve(d),s.delete(t)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}}const $e=[1,0],Je=[0,1],Qe=[1,.8,.6,.4,.2],et=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
class tt{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose())
this._mipsFBOs=null}}draw(e,t,i){const{width:s,height:r}=t,{context:n,painter:a}=e,{materialManager:o}=a,l=n.gl,c=this._programDesc,{strength:h,radius:u,threshold:d}=i
this._quad||(this._quad=new Me.a(n,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,s,r),n.setStencilTestEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),n.setStencilWriteMask(0)
const f=this._quad
f.bind(),n.bindFramebuffer(this._intensityFBO)
const _=o.getProgram(e,c.luminosityHighPass)
n.useProgram(_),n.bindTexture(t.colorTexture,0),_.setUniform1i("u_texture",0),_.setUniform3fv("u_defaultColor",[0,0,0]),_.setUniform1f("u_defaultOpacity",0),_.setUniform1f("u_luminosityThreshold",d),_.setUniform1f("u_smoothWidth",.01)
const p=[Math.round(s/2),Math.round(r/2)]
n.setViewport(0,0,p[0],p[1]),n.setClearColor(0,0,0,0),n.clear(l.COLOR_BUFFER_BIT),f.draw(),n.setBlendingEnabled(!1)
let m=this._intensityFBO.colorTexture
for(let t=0;t<this._nMips;t++){const i=o.getProgram(e,c.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[t]}])
n.useProgram(i),n.bindTexture(m,t+1),i.setUniform1i("u_colorTexture",t+1),i.setUniform2fv("u_texSize",p),i.setUniform2fv("u_direction",$e),n.setViewport(0,0,p[0],p[1])
const s=this._mipsFBOs[t]
n.bindFramebuffer(s.horizontal),f.draw(),m=s.horizontal.colorTexture,n.bindFramebuffer(s.vertical),n.bindTexture(m,t+1),i.setUniform2fv("u_direction",Je),f.draw(),m=s.vertical.colorTexture,p[0]=Math.round(p[0]/2),p[1]=Math.round(p[1]/2)}n.setViewport(0,0,s,r)
const g=o.getProgram(e,c.composite,[{name:"nummips",value:5}])
n.bindFramebuffer(this._compositeFBO),n.useProgram(g),g.setUniform1f("u_bloomStrength",h),g.setUniform1f("u_bloomRadius",u),g.setUniform1fv("u_bloomFactors",Qe),g.setUniform3fv("u_bloomTintColors",et),n.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),g.setUniform1i("u_blurTexture1",1),n.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),g.setUniform1i("u_blurTexture2",2),n.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),g.setUniform1i("u_blurTexture3",3),n.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),g.setUniform1i("u_blurTexture4",4),n.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),g.setUniform1i("u_blurTexture5",5),f.draw(),n.bindFramebuffer(t),n.setBlendingEnabled(!0)
const b=o.getProgram(e,c.blit)
n.useProgram(b),n.bindTexture(this._compositeFBO.colorTexture,6),b.setUniform1i("u_texture",6),n.setBlendFunction(T.b.ONE,T.b.ONE),f.draw(),f.unbind(),n.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),n.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:s}=e
if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return
this._size[0]=t,this._size[1]=i
const r=[Math.round(t/2),Math.round(i/2)]
this._compositeFBO?this._compositeFBO.resize(t,i):this._compositeFBO=new Xe.a(s,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.NONE,width:t,height:i}),this._intensityFBO?this._intensityFBO.resize(r[0],r[1]):this._intensityFBO=new Xe.a(s,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.NONE,width:r[0],height:r[1]},{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:r[0],height:r[1]})
for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]?(this._mipsFBOs[e].horizontal.resize(r[0],r[1]),this._mipsFBOs[e].vertical.resize(r[0],r[1])):this._mipsFBOs[e]={horizontal:new Xe.a(s,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.NONE,width:r[0],height:r[1]},{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:r[0],height:r[1]}),vertical:new Xe.a(s,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.NONE,width:r[0],height:r[1]},{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:r[0],height:r[1]})},r[0]=Math.round(r[0]/2),r[1]=Math.round(r[1]/2)}}const it=[1,0],st=[0,1]
class rt{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:s}=e,{type:r,radius:n}=i
if(0===n)return
this._createOrResizeResources(e),this._quad||(this._quad=new Me.a(s,[-1,-1,1,-1,-1,1,1,1]))
const a=this._quad
a.bind(),"blur"===r?this._gaussianBlur(e,t,n):this._radialBlur(e,t),a.unbind()}_gaussianBlur(e,t,i){const{context:s,state:r,painter:n,pixelRatio:a}=e,{size:o}=r,{materialManager:l}=n,c=this._programDesc,h=this._quad,u=[Math.round(a*o[0]),Math.round(a*o[1])],d=this._blurFBO,f=l.getProgram(e,c.gaussianBlur,[{name:"radius",value:Math.ceil(i)}])
s.useProgram(f),s.setBlendingEnabled(!1),s.bindFramebuffer(d),s.bindTexture(t.colorTexture,4),f.setUniform1i("u_colorTexture",4),f.setUniform2fv("u_texSize",u),f.setUniform2fv("u_direction",it),f.setUniform1f("u_sigma",i),h.draw(),s.bindFramebuffer(t),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.bindTexture(d.colorTexture,5),f.setUniform1i("u_colorTexture",5),f.setUniform2fv("u_direction",st),h.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:s}=e,{materialManager:r}=s,n=this._programDesc,a=this._quad,o=this._blurFBO
i.bindFramebuffer(o)
const l=r.getProgram(e,n.radialBlur)
i.useProgram(l),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),l.setUniform1i("u_colorTexture",4),a.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0)
const c=r.getProgram(e,n.blit)
i.useProgram(c),i.bindTexture(o.colorTexture,5),c.setUniform1i("u_texture",5),i.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),a.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:s}=e,{size:r}=i,n=Math.round(s*r[0]),a=Math.round(s*r[1])
this._blurFBO&&this._size[0]===n&&this._size[1]===a||(this._size[0]=n,this._size[1]=a,this._blurFBO?this._blurFBO.resize(n,a):this._blurFBO=new Xe.a(t,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.NONE,width:n,height:a},{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:n,height:a}))}}class nt{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,i){const{width:s,height:r}=t
this._createOrResizeResources(e,s,r)
const{context:n,painter:a}=e,{materialManager:o}=a,l=this._programDesc,c=this._quad,h=i.colorMatrix
c.bind()
const u=this._layerFBOTexture
n.bindFramebuffer(t),t.copyToTexture(0,0,s,r,0,0,u),n.setBlendingEnabled(!1),n.setStencilTestEnabled(!1)
const d=o.getProgram(e,l)
n.useProgram(d),n.bindTexture(u,2),d.setUniformMatrix4fv("u_coefficients",h),d.setUniform1i("u_colorTexture",2),c.draw(),n.setBlendingEnabled(!0),n.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),n.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(e,t,i){const{context:s}=e
this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new H.a(s,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:t,height:i}),this._quad||(this._quad=new Me.a(s,[-1,-1,1,-1,-1,1,1,1])))}}const at=[1,0],ot=[0,1]
class lt{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(e,t,i){const{context:s,state:r,painter:n}=e,{materialManager:a}=n,o=this._programDesc,l=t.width,c=t.height,h=[Math.round(l/2),Math.round(c/2)],{blurRadius:u,offsetX:d,offsetY:f,color:_}=i,p=[Object(N.h)(d/2),Object(N.h)(f/2)]
this._createOrResizeResources(e,l,c,h)
const m=this._horizontalBlurFBO,g=this._verticalBlurFBO
s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1)
const b=this._layerFBOTexture
t.copyToTexture(0,0,l,c,0,0,b),this._quad||(this._quad=new Me.a(s,[-1,-1,1,-1,-1,1,1,1])),s.setViewport(0,0,h[0],h[1])
const y=this._quad
y.bind(),s.setBlendingEnabled(!1)
const x=a.getProgram(e,o.blur,[{name:"radius",value:Math.ceil(u)}])
s.useProgram(x),s.bindFramebuffer(m),s.bindTexture(t.colorTexture,4),x.setUniform1i("u_colorTexture",4),x.setUniform2fv("u_texSize",h),x.setUniform2fv("u_direction",at),x.setUniform1f("u_sigma",u),y.draw(),s.bindFramebuffer(g),s.bindTexture(m.colorTexture,5),x.setUniform1i("u_colorTexture",5),x.setUniform2fv("u_direction",ot),y.draw(),s.bindFramebuffer(t),s.setViewport(0,0,l,c)
const v=a.getProgram(e,o.composite)
s.useProgram(v),s.bindTexture(g.colorTexture,2),v.setUniform1i("u_blurTexture",2),s.bindTexture(b,3),v.setUniform1i("u_layerFBOTexture",3),v.setUniform4fv("u_shadowColor",[_[3]*(_[0]/255),_[3]*(_[1]/255),_[3]*(_[2]/255),_[3]]),v.setUniformMatrix3fv("u_displayViewMat3",r.displayMat3),v.setUniform2fv("u_shadowOffset",p),y.draw(),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!0),s.setBlendFunction(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),y.unbind()}_createOrResizeResources(e,t,i,s){const{context:r}=e
this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(s[0],s[1]):this._horizontalBlurFBO=new Xe.a(r,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.NONE,width:s[0],height:s[1]},{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:s[0],height:s[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(s[0],s[1]):this._verticalBlurFBO=new Xe.a(r,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.NONE,width:s[0],height:s[1]},{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:s[0],height:s[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new H.a(r,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:t,height:i}))}}class ct{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,i){const{width:s,height:r}=t
this._createOrResizeResources(e,s,r)
const{context:n,painter:a}=e,{amount:o}=i,l=n.gl,c=this._layerFBOTexture
n.bindFramebuffer(t),t.copyToTexture(0,0,s,r,0,0,c),n.setBlendingEnabled(!0),n.setStencilTestEnabled(!1),n.setDepthTestEnabled(!1),n.setClearColor(0,0,0,0),n.clear(l.COLOR_BUFFER_BIT),a.blitTexture(n,c,T.z.NEAREST,o)}_createOrResizeResources(e,t,i){const{context:s}=e
this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new H.a(s,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.NEAREST,flipped:!1,width:t,height:i}))}}function ht(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e
default:return"colorize"}}const ut={colorize:()=>new nt,blur:()=>new rt,bloom:()=>new tt,opacity:()=>new ct,"drop-shadow":()=>new lt}
class dt{constructor(e){this._requestRender=e,this._effectMap=new Map}dispose(){this._requestRender&&(this._requestRender=null),this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||0===e.length)return[]
const t=[]
for(const i of e){const e=ht(i.type)
let s=this._effectMap.get(e)
s||(s=ut[e](),this._effectMap.set(e,s)),t.push({postProcessingEffect:s,effect:i})}return t}}var ft=i(353)
class _t{constructor(e,t){var i
this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||g.c.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=null!=(i=t.enableDefaultDraw)?i:()=>!0}render(e){const{context:t,profiler:i}=e,s=this._targetFn(),r=this.drawPhase&e.drawPhase
if(i.recordPassStart(this.name),r){this.enableDefaultDraw()&&this._doRender(e,s),i.recordPassEnd()
for(const r of this.effects){if(!r.enable())continue
const n=r.apply
i.recordPassStart(this.name+"."+n.name),i.recordBrushStart(n.name)
const a=r.args&&r.args(),{x:o,y:l,width:c,height:h}=t.getViewport(),u=t.getBoundFramebufferObject()
n.bind(e,a)
const d=n.createOptions(e,a),f=e.passOptions
e.passOptions=d,this._doRender(e,s,n.defines),e.passOptions=f,n.draw(e,a),n.unbind(e,a),t.bindFramebuffer(u),t.setViewport(o,l,c,h),i.recordBrushEnd(),i.recordPassEnd()}}}_doRender(e,t,i){if(!Object(a.j)(t))if(Object(ft.h)(t)){for(const s of t)if(s.visible)for(const t of this.brushes)e.profiler.recordBrushStart(t.name),t.prepareState(e,s,i),t.draw(e,s,i),e.profiler.recordBrushEnd()}else for(const s of this.brushes)e.profiler.recordBrushStart(s.name),s.prepareState(e,t,i),s.draw(e,t,i),e.profiler.recordBrushEnd()}}var pt=i(1548)
const mt={[g.d.FILL]:b.a.fill,[g.d.LINE]:b.a.line,[g.d.MARKER]:b.a.marker,[g.d.TEXT]:b.a.text}
class gt{constructor(e,t,i){this.context=e,this._blitRenderer=new R,this._brushCache=new Map,this._vtlMaterialManager=new y.a,this._blendEffect=new Ie,this._fboPool=[],this.effects={highlight:new Ye,hittest:new Ke,hittestVTL:new Ze,integrate:new Ce,insideEffect:new Pe("inside"),outsideEffect:new Pe("outside")},this.materialManager=new B(e),this.textureManager=new Re(t,i),this._effectsManager=new dt(t)}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){for(const i in this._fbos)this._fbos[i].resize(e,t)
return this._fbos}const i={target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,samplingMode:T.z.NEAREST,wrapMode:T.B.CLAMP_TO_EDGE,width:e,height:t},s={colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.DEPTH_STENCIL_RENDER_BUFFER},r=new pt.a(this.context,{width:e,height:t,internalFormat:T.s.DEPTH_STENCIL})
this._stencilBuf=r,this._fbos={output:new Xe.a(this.context,s,i,r),blend:new Xe.a(this.context,s,i,r),effect0:new Xe.a(this.context,s,i,r)}}return this._fbos}acquireFbo(e,t){let i
i=this._fboPool.length>0?this._fboPool.pop():new Xe.a(this.context,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.DEPTH_STENCIL_RENDER_BUFFER},{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,samplingMode:T.z.NEAREST,wrapMode:T.B.CLAMP_TO_EDGE,width:e,height:t},this._stencilBuf)
const s=i.descriptor
return s.width===e&&s.height===t||i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:i,height:s}=e.getViewport()
this._prevFBO=e.getBoundFramebufferObject()
const r=this.getFbos(i,s)
if(e.bindFramebuffer(r.output),e.setColorMask(!0,!0,!0,!0),e.setDepthWriteEnabled(!0),Object(a.k)(t)){const{r:i,g:s,b:r,a:n}=t.color
e.setClearColor(n*i/255,n*s/255,n*r/255,n)}else e.setClearColor(0,0,0,0)
e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,i){const{context:s,blendMode:r,effects:n,requireFBO:a,drawPhase:o}=e
if(a||bt(o,r,n,i))s.bindFramebuffer(this._fbos.blend),s.setColorMask(!0,!0,!0,!0),s.setClearColor(0,0,0,0),s.setDepthWriteEnabled(!0),s.setClearDepth(1),s.clear(s.gl.COLOR_BUFFER_BIT|s.gl.DEPTH_BUFFER_BIT),s.setDepthWriteEnabled(!1)
else{const e=this._getOutputFBO()
s.bindFramebuffer(e)}s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setStencilTestEnabled(!0),s.setClearStencil(t),s.setStencilWriteMask(255),s.clear(s.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:i,blendMode:s,effects:r,requireFBO:n,drawPhase:o}=e
if(n||bt(o,s,r,t)){Object(a.k)(r)&&r.length>0&&o===g.c.MAP&&this._applyEffects(e,r)
const n=this._getOutputFBO()
i.bindFramebuffer(n),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA,T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0)
const l=Object(a.j)(s)||o===g.c.HIGHLIGHT?"normal":s
this._blendEffect.draw(e,this._fbos.blend.colorTexture,T.z.NEAREST,l,t)}}renderLayers(e){if(e.bindFramebuffer(this._prevFBO),!this._fbos)return
const t=this._getOutputFBO()
e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),this.blitTexture(e,t.colorTexture,T.z.NEAREST)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose()
for(const e of this._fboPool)e.dispose()
if(this._fboPool.length=0,this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose()
this._effectsManager.dispose(),this._vtlMaterialManager&&(this._vtlMaterialManager.dispose(),this._vtlMaterialManager=null),this._prevFBO=null}getGeometryBrush(e){const t=mt[e]
let i=this._brushCache.get(t)
return void 0===i&&(i=new t,this._brushCache.set(t,i)),this._brushCache.get(t)}renderObject(e,t,i,s){const r=b.a[i]
if(!r)return null
let n=this._brushCache.get(r)
void 0===n&&(n=new r,this._brushCache.set(r,n)),n.prepareState(e,t,s),n.draw(e,t,s)}renderObjects(e,t,i,s){const r=b.a[i]
if(!r)return null
let n=this._brushCache.get(r)
void 0===n&&(n=new r,this._brushCache.set(r,n)),n.drawMany(e,t,s)}registerRenderPass(e){const t=e.brushes.map(e=>(this._brushCache.has(e)||this._brushCache.set(e,new e),this._brushCache.get(e)))
return new _t(t,e)}setHighlightOptions(e){this.effects.highlight.setHighlightOptions(e)}blitTexture(e,t,i,s=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA,T.b.ONE,T.b.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,s)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){return null!=this._renderTarget?this._renderTarget:this._fbos.output}_applyEffects(e,t){const{context:i}=e,s=this._effectsManager.getPostProcessingEffects(t)
for(const{postProcessingEffect:t,effect:r}of s)i.bindFramebuffer(this._fbos.blend),t.draw(e,this._fbos.blend,r)}}function bt(e,t,i,s){return e!==g.c.HIGHLIGHT&&(1!==s||Object(a.k)(t)&&"normal"!==t||Object(a.k)(i)&&i.length>0)}var yt=i(1667),xt=i(890),vt=i(1924)
const Ot=Object(n.a)("esri-2d-profiler")
class wt{constructor(e,t){if(this._events=new xt.a,this._entries=new Map,this._timings=new yt.a(10),!Ot)return
this._ext=Object(vt.a)(e.gl,{}),this._debugOutput=t
const i=e.gl
if(this.enableCommandLogging)for(const e in i)if("function"==typeof i[e]){const t=i[e],s=-1!==e.indexOf("draw")
i[e]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:e,args:r,isDrawCommand:s}),this._currentSummary&&(this._currentSummary.commands++,s&&this._currentSummary.drawCommands++),t.apply(i,r))}}get enableCommandLogging(){return!("object"==typeof Ot&&Ot.disableCommands)}recordContainerStart(e){Ot&&(this._currentContainer=e)}recordContainerEnd(){Ot&&(this._currentContainer=null)}recordPassStart(e){Ot&&(this._currentPass=e,this._initSummary())}recordPassEnd(){Ot&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){Ot&&(this._currentBrush=e)}recordBrushEnd(){Ot&&(this._currentBrush=null)}recordStart(e){if(Ot&&Object(a.k)(this._ext)){if(this._entries.has(e)){const t=this._entries.get(e),i=this._ext.resultAvailable(t.query),s=this._ext.disjoint()
if(i&&!s){const i=this._ext.getResult(t.query)/1e6
let s=0
if(Object(a.k)(this._timings.enqueue(i))){const e=this._timings.entries,t=e.length
let i=0
for(const t of e)i+=t
s=i/t}const r=i.toFixed(2),n=s?s.toFixed(2):"--"
this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${r} ms (${n} last 10 avg)\n${t.commandsLen} Commands (${t.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${r} ms (${n} last 10 avg)`),this._debugOutput.innerHTML=`${r} (${n})`}for(const e of t.handles)e.remove()
this._entries.delete(e)}const t={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]}
this.enableCommandLogging&&(t.handles.push(this._events.on("command",e=>{t.commandsLen++,t.commands.push(e),e.isDrawCommand&&t.drawCommands++})),t.handles.push(this._events.on("summary",e=>{t.summaries.push(e)}))),this._ext.beginTimeElapsed(t.query),this._entries.set(e,t)}}recordEnd(e){Ot&&Object(a.k)(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)}}const Tt={shaders:{vertexShader:Object(v.a)("stencil/stencil.vert"),fragmentShader:Object(v.a)("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])}
var Et=i(1922),St=i(1525),Rt=i(1051),Mt=i(2020)
class Ft extends m.a{constructor(e,t){super(),this._trash=new Set,this._clipData=new Float32Array(8),this._upperLeft=Object(_.b)(),this._upperRight=Object(_.b)(),this._lowerLeft=Object(_.b)(),this._lowerRight=Object(_.b)(),this._mat2=Object(u.b)(),this._clipRendererInitialized=!1,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0
const{canvas:i=document.createElement("canvas"),alpha:l=!0,stencil:c=!0,contextOptions:h={}}=t
this._canvas=i
const d=Object(Rt.c)("2d",i,{alpha:l,antialias:!1,depth:!0,stencil:c})
this.context=new Mt.a(Object(a.k)(d)?d:null,h),this.resourceManager=new p.a,this.painter=new gt(this.context,this,this.resourceManager),Object(n.a)("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput)),this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new Et.a,renderingOptions:t.renderingOptions,requireFBO:!1,profiler:new wt(this.context,this._debugOutput),dataUploadCounter:0},this._taskHandle=Object(o.a)({render:e=>this.renderFrame(e)}),this._taskHandle.pause(),this._lostWebGLContextHandle=Object(r.c)(i,"webglcontextlost",()=>{this.emit("webgl-error",{error:new s.a("webgl-context-lost")})}),i.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(i)}destroy(){this.removeAllChildren(),this._emptyTrash(),this._taskHandle.remove(),this._taskHandle=null,this._boundFBO=null,this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null),this._clipVAO&&(this._clipVAO.dispose(),this._clipVAO=null,this._clipVBO=null),this._clipStencilProgram&&(this._clipStencilProgram.dispose(),this._clipStencilProgram=null),this._lostWebGLContextHandle&&(this._lostWebGLContextHandle.remove(),this._lostWebGLContextHandle=null),this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas),this._debugOutput&&this._debugOutput.parentNode&&this._debugOutput.parentNode.removeChild(this._debugOutput),this.highlightOptions=null,this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){this._highlightOptionsHandle&&(this._highlightOptionsHandle.remove(),this._highlightOptionsHandle=null),this._highlightOptions=e,this._highlightOptions&&(this._highlightOptionsHandle=Object(l.a)(this._highlightOptions,"version",()=>{this.painter.setHighlightOptions(e),this.requestRender()}))}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=2e3,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0
this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:Object(d.b)()}}renderChildren(e){for(const t of this.children)t.beforeRender(e)
this._renderChildren(this.children,e)
for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context
t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,this._beforeRenderChildren(t),t.drawPhase=g.c.MAP,this.painter.beforeRenderLayers(i,this.background)
for(const i of e)i.processRender(t)
this.painter.renderLayers(i),t.drawPhase=g.c.HIGHLIGHT,this.painter.beforeRenderLayers(i)
for(const i of e)i.processRender(t)
if(this.painter.renderLayers(i),this._isLabelDrawPhaseRequired(e)){t.drawPhase=g.c.LABEL,this.painter.beforeRenderLayers(i)
for(const i of e)i.processRender(t)
this.painter.renderLayers(i)}if(Object(n.a)("esri-tiles-debug")){t.drawPhase=g.c.DEBUG,this.painter.beforeRenderLayers(i)
for(const i of e)i.processRender(t)
this.painter.renderLayers(i)}t.profiler.recordEnd("drawLayers"),this._afterRenderChildren()}_beforeRenderChildren(e){const{context:t}=this,{state:i,pixelRatio:s}=e
t.setClearDepth(1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)
const{size:r,rotation:n}=i,a=Math.round(r[0]*s),o=Math.round(r[1]*s)
if(this._boundFBO=t.getBoundFramebufferObject(),!i.spatialReference.isWrappable)return void(this._clipFrame=!1)
const l=Object(c.c)(n),u=Math.abs(Math.cos(l)),d=Math.abs(Math.sin(l)),_=Math.round(a*u+o*d),p=Math.round(i.worldScreenWidth)
if(_<=p)return void(this._clipFrame=!1)
this._clipFBO&&this._clipFBO.width===a&&this._clipFBO.height===o||(this._clipFBO=new Xe.a(t,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.DEPTH_STENCIL_RENDER_BUFFER,width:a,height:o}))
const m=(this.state.padding.left-this.state.padding.right)/2,g=(this.state.padding.bottom-this.state.padding.top)/2,b=.5*a,y=.5*o,x=1/a,v=1/o,O=p*s*.5,w=.5*(a*d+o*u),E=this._upperLeft,S=this._upperRight,R=this._lowerLeft,M=this._lowerRight
Object(f.s)(E,-O,-w),Object(f.s)(S,O,-w),Object(f.s)(R,-O,w),Object(f.s)(M,O,w),Object(h.a)(this._mat2,[b+m,y-g]),0!==n&&Object(h.g)(this._mat2,this._mat2,l),Object(f.t)(E,E,this._mat2),Object(f.t)(S,S,this._mat2),Object(f.t)(R,R,this._mat2),Object(f.t)(M,M,this._mat2)
const F=this._clipData
F.set([2*R[0]*x-1,2*(o-R[1])*v-1,2*M[0]*x-1,2*(o-M[1])*v-1,2*E[0]*x-1,2*(o-E[1])*v-1,2*S[0]*x-1,2*(o-S[1])*v-1]),this._clipRendererInitialized||this._initializeClipRenderer(t),this._clipVBO.setData(F),this._boundFBO=t.getBoundFramebufferObject(),t.bindFramebuffer(this._clipFBO),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.setClearStencil(0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT|t.gl.STENCIL_BUFFER_BIT),t.setDepthWriteEnabled(!1),this._clipFrame=!0}_afterRenderChildren(){const e=this.context
if(e.logIno(),this._clipFrame&&this._clipRendererInitialized){if(e.bindFramebuffer(this._boundFBO),this._boundFBO=null,e.bindVAO(this._clipVAO),e.useProgram(this._clipStencilProgram),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(T.w.KEEP,T.w.KEEP,T.w.REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(T.h.ALWAYS,1,255),e.drawElements(T.r.TRIANGLES,6,T.k.UNSIGNED_SHORT,0),e.bindVAO(),e.setColorMask(!0,!0,!0,!0),null!=this.background){const{r:t,g:i,b:s,a:r}=this.background.color
e.setClearColor(r*t/255,r*i/255,r*s/255,r)}else e.setClearColor(0,0,0,0)
e.clear(e.gl.COLOR_BUFFER_BIT),e.setBlendingEnabled(!0),e.setStencilFunction(T.h.EQUAL,1,255),this.painter.blitTexture(e,this._clipFBO.colorTexture,T.z.NEAREST,1),e.setStencilTestEnabled(!1)}}doRender(e){const t=this.context,{state:i,pixelRatio:s}=e
this._resizeCanvas(e),t.setViewport(0,0,s*i.size[0],s*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const{framebufferWidth:t,framebufferHeight:i}={framebufferWidth:Math.round(this._renderParameters.state.size[0]*e.resolutionScale),framebufferHeight:Math.round(this._renderParameters.state.size[1]*e.resolutionScale)},s=this.context,r=this._state.clone()
if(null!=e.rotation){const t=r.viewpoint
r.viewpoint.rotation=e.rotation,r.viewpoint=t}const n={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:r,pixelRatio:1,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},a=new Xe.a(s,{colorTarget:T.y.TEXTURE,depthStencilTarget:T.m.DEPTH_STENCIL_RENDER_BUFFER,width:t,height:i}),o=s.getBoundFramebufferObject(),l=s.getViewport()
s.bindFramebuffer(a),s.setViewport(0,0,t,i),this._renderChildren(e.children,n)
const c=this._readbackScreenshot(a,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)})
s.bindFramebuffer(o),s.setViewport(l.x,l.y,l.width,l.height),this.requestRender()
const h=await c
let u
return 1===e.outputScale?u=h:(u=new ImageData(Math.round(h.width*e.outputScale),Math.round(h.height*e.outputScale)),Object(St.e)(h,u,!0)),Object(St.b)(u,{format:e.format,quality:e.quality,rotation:0,disableDecorations:!1},document.createElement("canvas"),{flipY:!0,premultipliedAlpha:!0})}async _readbackScreenshot(e,t){const i=Object(St.a)(t.width,t.height,document.createElement("canvas"))
return await e.readPixelsAsync(t.x,t.y,t.width,t.height,T.p.RGBA,T.q.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:s},pixelRatio:r}=e,n=s[0],a=s[1],o=Math.round(n*r),l=Math.round(a*r)
t.width===o&&t.height===l||(t.width=o,t.height=l),i.width=n+"px",i.height=a+"px"}_initializeClipRenderer(e){if(this._clipRendererInitialized)return!0
const t=Object(E.a)(e,Tt)
if(!t)return!1
const i=w.a.createVertex(e,T.D.STREAM_DRAW,this._clipData),s=new Uint16Array([0,1,2,2,1,3]),r=w.a.createIndex(e,T.D.STATIC_DRAW,s),n=Tt.attributes,a={geometry:[new Ve.a("a_pos",2,T.k.FLOAT,0,8)]},o=new S.a(e,n,a,{geometry:i},r)
return this._clipStencilProgram=t,this._clipVBO=i,this._clipVAO=o,this._clipRendererInitialized=!0,!0}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash)
this._trash.clear()
for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1
for(const i of e){if(!(i instanceof m.a)){t=t||!1
break}if(i.hasLabels)return!0
t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}var Ct=i(856),jt=i(862),At=i(912),Bt=i(1400),It=i(858),Pt=(i(859),i(857)),Dt=i(874),Lt=i(1312)
class zt{constructor(e,t){this.width=e,this.height=t
const i=Math.ceil(e/1),s=Math.ceil(t/1)
this._cols=i,this._rows=s,this._cells=Lt.a.create(i*s)}insertMetrics(e){const t=this._hasCollision(e)
return 0===t&&this._markMetrics(e),t}getCellId(e,t){return e+t*this._cols}has(e){return this._cells.has(e)}hasRange(e,t){return this._cells.hasRange(e,t)}set(e){this._cells.set(e)}setRange(e,t){this._cells.setRange(e,t)}_hasCollision(e){const t=e.id
let i=0,s=0
e.save()
do{const t=e.boundsCount
i+=t
for(let i=0;i<t;i++){const t=e.boundsComputedAnchorX(i),r=e.boundsComputedAnchorY(i),n=e.boundsWidth(i)+2,a=e.boundsHeight(i)+2
switch(this._collide(t,r,n,a)){case 2:return 2
case 1:s++}}}while(e.peekId()===t&&e.next())
return e.restore(),i===s?1:0}_collide(e,t,i,s){const r=e-i/2,n=t-s/2,a=r+i,o=n+s
if(a<0||o<0||r>this.width||n>this.height)return 1
const l=Object(Dt.f)(Math.floor(r/1),0,this._cols),c=Object(Dt.f)(Math.floor(n/1),0,this._rows),h=Object(Dt.f)(Math.ceil(a/1),0,this._cols),u=Object(Dt.f)(Math.ceil(o/1),0,this._rows)
for(let e=c;e<=u;e++)for(let t=l;t<=h;t++){const i=this.getCellId(t,e)
if(this.has(i))return 2}return 0}_mark(e,t,i,s){const r=e-i/2,n=t-s/2,a=r+i,o=n+s,l=Object(Dt.f)(Math.floor(r/1),0,this._cols),c=Object(Dt.f)(Math.floor(n/1),0,this._rows),h=Object(Dt.f)(Math.ceil(a/1),0,this._cols),u=Object(Dt.f)(Math.ceil(o/1),0,this._rows)
for(let e=c;e<=u;e++)for(let t=l;t<=h;t++){const i=this.getCellId(t,e)
this.set(i)}return!1}_markMetrics(e){const t=e.id
do{const t=e.boundsCount
for(let i=0;i<t;i++){const t=e.boundsComputedAnchorX(i),s=e.boundsComputedAnchorY(i),r=e.boundsWidth(i)+2,n=e.boundsHeight(i)+2
this._mark(t,s,r,n)}}while(e.peekId()===t&&e.next())}}var Nt=i(999),kt=i(1019)
const Ut=Math.PI
function Gt(e,t){switch(t.transformationType){case kt.b.Additive:return function(e,t){return e+(Vt(t.minSize,e)||t.minDataValue)}(e,t)
case kt.b.Constant:return function(e,t){const i=e.stops
let s=i&&i.length&&i[0].size
return null==s&&(s=e.minSize),Vt(s,t)}(t,e)
case kt.b.ClampedLinear:return function(e,t){const i=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),s=Vt(t.minSize,e),r=Vt(t.maxSize,e)
return e<=t.minDataValue?s:e>=t.maxDataValue?r:s+i*(r-s)}(e,t)
case kt.b.Proportional:return function(e,t){const i=e/t.minDataValue,s=Vt(t.minSize,e),r=Vt(t.maxSize,e)
let n=null
return n=i*s,Object(Dt.f)(n,s,r)}(e,t)
case kt.b.Stops:return function(e,t){const[i,s,r]=function(e,t){if(!t)return
let i=0,s=t.length-1
return t.some((t,r)=>e<t?(s=r,!0):(i=r,!1)),[i,s,(e-t[i])/(t[s]-t[i])]}(e,t.cache.ipData)
if(i===s)return Vt(t.stops[i].size,e)
{const n=Vt(t.stops[i].size,e)
return n+(Vt(t.stops[s].size,e)-n)*r}}(e,t)
case kt.b.RealWorldSize:return function(e,t){const i=Nt.a[t.valueUnit],s=Vt(t.minSize,e),r=Vt(t.maxSize,e),{valueRepresentation:n}=t
let a=null
return a="area"===n?2*Math.sqrt(e/Ut)/i:"radius"===n||"distance"===n?2*e/i:e/i,Object(Dt.f)(a,s,r)}(e,t)
case kt.b.Identity:return e
case kt.b.Unknown:return null}}function Vt(e,t){return"number"==typeof e?e:Gt(t,e)}function Wt(e,t){const i=[]
e.forEachTile(e=>i.push(e)),i.sort((e,t)=>e.instanceId-t.instanceId),i.forEach(e=>{Object(a.k)(e.labelMetrics)&&e.isReady&&t(e,e.labelMetrics.getCursor())})}function Xt(e){return t=>Object(N.h)(Gt(t,e))}function Ht(e,t){if(!function(e){return"feature"===e.layer.type||"csv"===e.layer.type||"geojson"===e.layer.type||"ogc-feature"===e.layer.type||"stream"===e.layer.type||"subtype-group"===e.layer.type||"wfs"===e.layer.type}(t))return
const i="subtype-group"===t.layer.type?t.layer.sublayers.items:[t.layer],s=t.layer.geometryType,r=!function(e){for(const i of e){var t
const e="featureReduction"in i&&"cluster"===(null==(t=i.featureReduction)?void 0:t.type)&&i.featureReduction,s=[...i.labelingInfo||[],...e.labelingInfo||[]]
if(i.labelsVisible&&s.length&&s.some(e=>"none"===e.deconflictionStrategy))return!0}return!1}(i),n={}
if("subtype-group"!==t.layer.type){if("heatmap"===t.layer.renderer.type)return
const e=function(e){const t="visualVariables"in e&&e.visualVariables
if(!t)return null
for(const e of t)if("size"===e.type)return Xt(e)
return null}(t.layer.renderer)
n[0]=e}const o=t.tileRenderer
if(Object(a.j)(o))return
const l=t.layer.visible&&!t.suspended
e.push({tileRenderer:o,vvEvaluators:n,deconflictionEnabled:r,geometryType:s,visible:l})}class qt{run(e,t,i){const s=[]
for(let t=e.length-1;t>=0;t--)Ht(s,e[t])
this._transformMetrics(s,t),this._runCollision(s,t,i)}_runCollision(e,t,i){const[s,r]=t.state.size,n=new zt(s*t.pixelRatio,r*t.pixelRatio)
for(const{tileRenderer:t,deconflictionEnabled:s,visible:r}of e){const e=t.featuresView.attributeView
s?r?(this._prepare(t),this._collideVisible(n,t,i),this._collideInvisible(n,t)):Wt(t,(t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,255)}):Wt(t,(t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,0)})}}_isFiltered(e,t,i){const s=t.getFilterFlags(e),r=!i.hasFilter||!!(s&G.q),n=!Object(a.k)(i.featureEffect)||i.featureEffect.excludedLabelsVisible||!!(s&G.p)
return!(r&&n)}_prepare(e){const t=e.featuresView.attributeView,i=new Set
Wt(e,(s,r)=>{for(;r.nextId();)i.has(r.id)||(i.add(r.id),this._isFiltered(r.id,t,e.layerView)?t.setLabelMinZoom(r.id,254):0!==t.getLabelMinZoom(r.id)?t.setLabelMinZoom(r.id,255):t.setLabelMinZoom(r.id,0))})}_collideVisible(e,t,i){const s=t.featuresView.attributeView,r=new Set
Wt(t,(t,n)=>{for(;n.nextId();)if(!r.has(n.id))if(t.key.level===i){if(0===s.getLabelMinZoom(n.id))switch(e.insertMetrics(n)){case 1:break
case 2:s.setLabelMinZoom(n.id,254),r.add(n.id)
break
case 0:s.setLabelMinZoom(n.id,0),r.add(n.id)}}else s.setLabelMinZoom(n.id,254)})}_collideInvisible(e,t){const i=t.featuresView.attributeView,s=new Set
Wt(t,(t,r)=>{for(;r.nextId();)if(!s.has(r.id)&&255===i.getLabelMinZoom(r.id))switch(e.insertMetrics(r)){case 1:break
case 2:i.setLabelMinZoom(r.id,255),s.add(r.id)
break
case 0:i.setLabelMinZoom(r.id,0),s.add(r.id)}})}_transformMetrics(e,t){for(const{tileRenderer:i,geometryType:s,vvEvaluators:r}of e)Wt(i,(e,n)=>{const o=i.featuresView.attributeView,l=e.transforms.labelMat2d
l[4]=Math.round(l[4]),l[5]=Math.round(l[5])
const c=l[4],h=l[5],u="polyline"===s
for(;n.next();){const e=n.boundsCount,i=n.anchorX,s=n.anchorY
let d=n.size
const f=r[0]
if(Object(a.k)(f)){const e=f(o.getVVSize(n.id))
d=isNaN(e)||null==e||e===1/0?d:e}const _=n.directionX*(d/2),p=n.directionY*(d/2)
for(let r=0;r<e;r++){let e=i,a=n.anchorY
if(u){let i=e+n.boundsX(r)+_,s=a+n.boundsY(r)+p
t.state.rotation?(i=l[0]*i+l[2]*s+l[4],s=l[1]*i+l[3]*s+l[5]):(i+=c,s+=h),n.setBoundsComputedAnchorX(r,Math.floor(i)),n.setBoundsComputedAnchorY(r,Math.floor(s))}else{t.state.rotation?(e=l[0]*i+l[2]*s+l[4],a=l[1]*i+l[3]*s+l[5]):(e+=c,a+=h)
const o=e+n.boundsX(r)+_,u=a+n.boundsY(r)+p
n.setBoundsComputedAnchorX(r,o),n.setBoundsComputedAnchorY(r,u)}}}})}}const Yt=L.a.getLogger("esri.views.2d.layers.labels.LabelManager")
let Kt=class extends(Object(At.b)(jt.a)){constructor(e){super(e),this._applyVisibilityPassThrottled=Object(Bt.a)(this._applyVisibilityPass,32,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new qt}destroy(){this.collisionEngine=null,this._applyVisibilityPassThrottled.remove(),this._applyVisibilityPassThrottled=null}get updating(){return this.updateRequested}update(e){this._applyVisibilityPassThrottled(e)}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}processUpdate(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))}_applyVisibilityPass(e){try{const t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level
this.collisionEngine.run(this.view.allLayerViews.items,e,t)}catch(e){Yt.error(new s.a("mapview-labeling","Encountered an error during label decluttering",e))}}}
Object(Ct.a)([Object(It.b)()],Kt.prototype,"updateRequested",void 0),Object(Ct.a)([Object(It.b)({readOnly:!0})],Kt.prototype,"updateParameters",void 0),Object(Ct.a)([Object(It.b)()],Kt.prototype,"updating",null),Object(Ct.a)([Object(It.b)()],Kt.prototype,"view",void 0),Kt=Object(Ct.a)([Object(Pt.a)("esri.views.2d.layers.labels.LabelManager")],Kt)
const Zt=Kt
var $t=i(1494),Jt=i(1582),Qt=i(1185),ei=i(866),ti=i(1403),ii=i(1307)
let si=class extends jt.a{constructor(e){super(e),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(e){this._handles&&this._handles.forEach(e=>{e.remove()}),this._handles=null,this._destroyOverlay(),this._set("view",e),e&&(e.on("drag",["Shift"],e=>this._handleDrag(e,1),ii.b.INTERNAL),e.on("drag",["Shift","Ctrl"],e=>this._handleDrag(e,-1),ii.b.INTERNAL))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(e,t,i,s){this._box.x=e,this._box.y=t,this._box.width=i,this._box.height=s,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(e,t,i,s,r){const n=this.view,a=n.toMap(Object(N.f)(e+.5*i,t+.5*s))
let o=Math.max(i/n.width,s/n.height);-1===r&&(o=1/o),this._destroyOverlay(),this.navigation.end(),n.goTo({center:a,scale:n.scale*o})}_updateBox(e,t,i,s){const r=this._boxShape
r.setAttributeNS(null,"x",""+e),r.setAttributeNS(null,"y",""+t),r.setAttributeNS(null,"width",""+i),r.setAttributeNS(null,"height",""+s),r.setAttributeNS(null,"class","esri-zoom-box__outline")}_updateBackground(e,t,i,s){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(e,t,i,s,this.view.width,this.view.height))}_createContainer(){const e=document.createElement("div")
e.className="esri-zoom-box__container",this.view.root.appendChild(e),this._container=e}_createOverlay(){const e=this.view.width,t=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path")
i.setAttributeNS(null,"d","M 0 0 L "+e+" 0 L "+e+" "+t+" L 0 "+t+" Z"),i.setAttributeNS(null,"class","esri-zoom-box__overlay-background")
const s=document.createElementNS("http://www.w3.org/2000/svg","rect"),r=document.createElementNS("http://www.w3.org/2000/svg","svg")
r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.setAttributeNS(null,"class","esri-zoom-box__overlay"),r.appendChild(i),r.appendChild(s),this._container.appendChild(r),this._backgroundShape=i,this._boxShape=s,this._overlay=r}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(e,t,i,s,r,n){const a=e+i,o=t+s
return"M 0 0 L "+r+" 0 L "+r+" "+n+" L 0 "+n+" ZM "+e+" "+t+" L "+e+" "+o+" L "+a+" "+o+" L "+a+" "+t+" Z"}_handleDrag(e,t){const i=e.x,s=e.y,r=e.origin.x,n=e.origin.y
let a,o,l,c
switch(i>r?(a=r,l=i-r):(a=i,l=r-i),s>n?(o=n,c=s-n):(o=s,c=n-s),e.action){case"start":this._start()
break
case"update":this._update(a,o,l,c)
break
case"end":this._end(a,o,l,c,t)}e.stopPropagation()}_redraw(){if(!this._rafId)return
if(this._rafId=null,!this._overlay)return
const{x:e,y:t,width:i,height:s}=this._box
this._updateBox(e,t,i,s),this._updateBackground(e,t,i,s),this._rafId=requestAnimationFrame(this._redraw)}}
Object(Ct.a)([Object(It.b)()],si.prototype,"navigation",void 0),Object(Ct.a)([Object(It.b)()],si.prototype,"view",null),si=Object(Ct.a)([Object(Pt.a)("esri.views.2d.navigation.ZoomBox")],si)
const ri=si
i(870)
var ni=i(892),ai=i(871),oi=i(867),li=i(1861)
let ci=class extends jt.a{constructor(e){super(e),this.animationTime=0,this.momentumEstimator=new li.a(500,6,.92),this.momentum=null,this.tmpMomentum=Object(oi.f)(),this.momentumFinished=!1,this.viewpoint=new Qt.a({targetGeometry:new ei.a,scale:0,rotation:0}),Object(ni.f)(()=>this.momentumFinished,()=>this.navigation.stop())}begin(e,t){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(t),this.previousDrag=t}update(e,t){this.addToEstimator(t)
let i=t.center.x,s=t.center.y
const r=this.previousDrag
i=r?r.center.x-i:-i,s=r?s-r.center.y:s,e.viewpoint=Object(ti.w)(this.viewpoint,e.viewpoint,[i||0,s||0]),this.previousDrag=t}end(e,t){this.addToEstimator(t)
const i=e.navigation.momentumEnabled
this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(e),this.previousDrag=null,this.navigation.end()}addToEstimator(e){const t=e.center.x,i=e.center.y,s=Object(N.g)(-t,i),r=Object(oi.h)(-t,i,0)
this.momentumEstimator.add(s,r,.001*e.timestamp)}onAnimationUpdate(e){this.navigation.animationManager.animateContinous(e.viewpoint,(t,i)=>{this.momentumFinished=!this.momentum||this.momentum.isFinished(this.animationTime)
const s=.001*i
if(!this.momentumFinished){const i=this.momentum.valueDelta(this.animationTime,s)
Object(ai.h)(this.tmpMomentum,this.momentum.direction,i),Object(ti.w)(t,t,this.tmpMomentum),e.constraints.constrainByGeometry(t)}this.animationTime+=s})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}}
Object(Ct.a)([Object(It.b)()],ci.prototype,"momentumFinished",void 0),Object(Ct.a)([Object(It.b)()],ci.prototype,"viewpoint",void 0),Object(Ct.a)([Object(It.b)()],ci.prototype,"navigation",void 0),ci=Object(Ct.a)([Object(Pt.a)("esri.views.2d.navigation.actions.Pan")],ci)
const hi=ci
var ui=i(1862),di=i(1863)
let fi=class extends jt.a{constructor(e){super(e),this._animationTime=0,this._momentumFinished=!1,this._rotationMomentumEstimator=new ui.a(.6,.15,.95),this._rotationDirection=1,this._zoomDirection=1,this._zoomMomentumEstimator=new di.a,this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new Qt.a({targetGeometry:new ei.a,scale:0,rotation:0}),this.watch("_momentumFinished",e=>{e&&this.navigation.stop()})}begin(e,t){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=t.angle,this._previousRadius=this._startRadius=t.radius,this._previousCenter=t.center,this._updateTimestamp=null,e.constraints.rotationEnabled&&this.addToRotateEstimator(0,t.timestamp),this.addToZoomEstimator(t,1)}update(e,t){null===this._updateTimestamp&&(this._updateTimestamp=t.timestamp)
const i=t.angle,s=t.radius,r=t.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),a=Math.abs(s-this._startRadius),o=this._startRadius/s
if(this._previousRadius){const l=s/this._previousRadius
let c=180*(i-this._previousAngle)/Math.PI
this._rotationDirection=c>=0?1:-1,this._zoomDirection=l>=1?1:-1,e.constraints.rotationEnabled?(null===this._zoomOnly&&t.timestamp-this._updateTimestamp>200&&(this._zoomOnly=a-n>0),null===this._zoomOnly||this._zoomOnly?c=0:this.addToRotateEstimator(i-this._startAngle,t.timestamp)):c=0,this.addToZoomEstimator(t,o),this.navigation.setViewpoint([r.x,r.y],1/l,c,[this._previousCenter.x-r.x,r.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=r}end(e){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(e),this.navigation.end()}addToRotateEstimator(e,t){this._rotationMomentumEstimator.add(e,.001*t)}addToZoomEstimator(e,t){this._zoomMomentumEstimator.add(t,.001*e.timestamp)}canZoomIn(e){const t=e.scale,i=e.constraints.effectiveMaxScale
return 0===i||t>i}canZoomOut(e){const t=e.scale,i=e.constraints.effectiveMinScale
return 0===i||t<i}onAnimationUpdate(e){this.navigation.animationManager.animateContinous(e.viewpoint,(t,i)=>{const s=!this.canZoomIn(e)&&this._zoomDirection>1||!this.canZoomOut(e)&&this._zoomDirection<1,r=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),n=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),a=.001*i
if(this._momentumFinished=r&&n,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,a))*this._rotationDirection*180/Math.PI:0
let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,a)):1
const r=Object(_.b)(),n=Object(_.b)()
if(this._previousCenter){Object(f.s)(r,this._previousCenter.x,this._previousCenter.y),Object(ti.j)(n,e.size,e.padding),Object(f.m)(r,r,n)
const{constraints:a,scale:o}=e,l=o*s
s<1&&!a.canZoomInTo(l)?(s=o/a.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!a.canZoomOutTo(l)&&(s=o/a.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Object(ti.t)(t,e.viewpoint,s,i,r,e.size),e.constraints.constrainByGeometry(t)}}this._animationTime+=a})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}}
Object(Ct.a)([Object(It.b)()],fi.prototype,"_momentumFinished",void 0),Object(Ct.a)([Object(It.b)()],fi.prototype,"viewpoint",void 0),Object(Ct.a)([Object(It.b)()],fi.prototype,"navigation",void 0),fi=Object(Ct.a)([Object(Pt.a)("esri.views.2d.navigation.actions.Pinch")],fi)
const _i=fi,pi=Object(_.b)(),mi=Object(_.b)()
let gi=class extends jt.a{constructor(e){super(e),this._previousCenter=Object(_.b)(),this.viewpoint=new Qt.a({targetGeometry:new ei.a,scale:0,rotation:0})}begin(e,t){this.navigation.begin(),Object(f.s)(this._previousCenter,t.center.x,t.center.y)}update(e,t){const{state:{size:i,padding:s}}=e
Object(f.s)(pi,t.center.x,t.center.y),Object(ti.g)(mi,i,s),e.viewpoint=Object(ti.r)(this.viewpoint,e.state.paddedViewState.viewpoint,Object(ti.b)(mi,this._previousCenter,pi)),Object(f.c)(this._previousCenter,pi)}end(){this.navigation.end()}}
Object(Ct.a)([Object(It.b)()],gi.prototype,"viewpoint",void 0),Object(Ct.a)([Object(It.b)()],gi.prototype,"navigation",void 0),gi=Object(Ct.a)([Object(Pt.a)("esri.views.2d.actions.Rotate")],gi)
const bi=gi,yi=new Qt.a({targetGeometry:new ei.a}),xi=[0,0]
let vi=class extends jt.a{constructor(e){super(e),this._endTimer=null,this.animationManager=null}initialize(){this.pan=new hi({navigation:this}),this.rotate=new bi({navigation:this}),this.pinch=new _i({navigation:this}),this.zoomBox=new ri({view:this.view,navigation:this})}destroy(){this.pan.destroy(),this.rotate.destroy(),this.pinch.destroy(),this.zoomBox.destroy(),this.pan=this.rotate=this.pinch=this.zoomBox=this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(250)}async zoom(e,t=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return e<1?this.zoomIn(t):this.zoomOut(t)
this.setViewpoint(t,e,0,[0,0])}async zoomIn(e){const t=this.view,i=t.constraints.snapToNextScale(t.scale)
return this._zoomToScale(i,e)}async zoomOut(e){const t=this.view,i=t.constraints.snapToPreviousScale(t.scale)
return this._zoomToScale(i,e)}setViewpoint(e,t,i,s){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,e,t,i,s),this.end()}setViewpointImmediate(e,t=0,i=[0,0],s=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,s,e,t,i)}continousRotateClockwise(){const e=this.get("view.viewpoint")
this.animationManager.animateContinous(e,e=>{Object(ti.r)(e,e,-1)})}continousRotateCounterclockwise(){const e=this.get("view.viewpoint")
this.animationManager.animateContinous(e,e=>{Object(ti.r)(e,e,1)})}resetRotation(){this.view.rotation=0}continousPanLeft(){this._continuousPan([-10,0])}continousPanRight(){this._continuousPan([10,0])}continousPanUp(){this._continuousPan([0,10])}continousPanDown(){this._continuousPan([0,-10])}stop(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(e){const t=this.view.viewpoint
this.animationManager.animateContinous(t,t=>{Object(ti.w)(t,t,e),this.view.constraints.constrainByGeometry(t)})}_startTimer(e){return null!==this._endTimer||(this._endTimer=setTimeout(()=>{this._endTimer=null
const e=performance.now()-this._lastEventTimestamp
e<250?this._endTimer=this._startTimer(e):this._set("interacting",!1)},e)),this._endTimer}_getDefaultAnchor(){const{size:e,padding:{left:t,right:i,top:s,bottom:r}}=this.view
return xi[0]=.5*(e[0]-i+t),xi[1]=.5*(e[1]-r+s),xi}async _zoomToScale(e,t=this._getDefaultAnchor()){const{view:i}=this,{constraints:s,scale:r,viewpoint:n,size:a,padding:o}=i,l=s.canZoomInTo(e),c=s.canZoomOutTo(e)
if(!(e<r&&!l||e>r&&!c))return Object(ti.p)(yi,n,e/r,0,t,a,o),s.constrainByGeometry(yi),i.goTo(yi,{animate:!0})}_scaleRotateTranslateViewpoint(e,t,i,s,r){const{view:n}=this,{size:a,padding:o,constraints:l,scale:c,viewpoint:h}=n,u=c*i,d=l.canZoomInTo(u),f=l.canZoomOutTo(u)
return(i<1&&!d||i>1&&!f)&&(i=1),Object(ti.w)(h,h,r),Object(ti.p)(e,h,i,s,t,a,o),l.constrainByGeometry(e)}}
Object(Ct.a)([Object(It.b)()],vi.prototype,"animationManager",void 0),Object(Ct.a)([Object(It.b)({type:Boolean,readOnly:!0})],vi.prototype,"interacting",void 0),Object(Ct.a)([Object(It.b)()],vi.prototype,"pan",void 0),Object(Ct.a)([Object(It.b)()],vi.prototype,"pinch",void 0),Object(Ct.a)([Object(It.b)()],vi.prototype,"rotate",void 0),Object(Ct.a)([Object(It.b)()],vi.prototype,"view",void 0),Object(Ct.a)([Object(It.b)()],vi.prototype,"zoomBox",void 0),vi=Object(Ct.a)([Object(Pt.a)("esri.views.2d.navigation.MapViewNavigation")],vi)
const Oi=vi
var wi=i(885),Ti=i(292),Ei=i(1123)
const Si={shaders:{vertexShader:Object(v.a)("magnifier/magnifier.vert"),fragmentShader:Object(v.a)("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])}
var Ri=i(1974)
class Mi extends Ei.a{constructor(){super(),this._handles=new wi.a,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles.destroy(),this._handles=null,this._disposeRenderResources(),this._resourcesTask&&(this._resourcesTask.abort(),this._resourcesTask=null)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([Object(l.a)(e,"version",()=>{this.visible=e.visible&&Object(a.k)(e.position)&&e.size>0,this.requestRender()}),e.watch(["mask","overlay"],()=>this._reloadResources()),e.watch("size",()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:Object(d.b)()}}doRender(e){var t
const i=e.context
if(!this._resourcesTask)return void this._reloadResources()
if(e.drawPhase!==g.c.MAP||!this._canRender())return
this._updateResources(e)
const s=this._magnifier
if(Object(a.j)(s.position))return
const r=e.pixelRatio,n=s.size*r,o=1/s.factor,l=Math.ceil(o*n)
this._readbackTexture.resize(l,l)
const{size:c}=e.state,h=r*c[0],u=r*c[1],d=.5*l,f=.5*l,_=Object(Dt.f)(r*s.position.x,d,h-d-1),p=Object(Dt.f)(u-r*s.position.y,f,u-f-1)
i.setBlendingEnabled(!0)
const m=_-d,b=p-f,y=this._readbackTexture
i.bindTexture(y,0),i.gl.copyTexImage2D(y.descriptor.target,0,y.descriptor.pixelFormat,m,b,l,l,0)
const x=null==(t=this.background)?void 0:t.color,v=x?[x.a*x.r/255,x.a*x.g/255,x.a*x.b/255,x.a]:[1,1,1,1],O=(_+s.offset.x*r)/h*2-1,w=(p-s.offset.y*r)/u*2-1,E=n/h*2,S=n/u*2,R=this._program
i.bindVAO(this._vertexArrayObject),i.bindTexture(this._overlayTexture,6),i.bindTexture(this._maskTexture,7),i.useProgram(R),R.setUniform4fv("u_background",v),R.setUniform1i("u_readbackTexture",0),R.setUniform1i("u_overlayTexture",6),R.setUniform1i("u_maskTexture",7),R.setUniform4f("u_drawPos",O,w,E,S),R.setUniform1i("u_maskEnabled",s.maskEnabled?1:0),R.setUniform1i("u_overlayEnabled",s.overlayEnabled?1:0),i.setStencilTestEnabled(!1),i.setColorMask(!0,!0,!0,!0),i.drawArrays(T.r.TRIANGLE_STRIP,0,4),i.bindVAO()}_canRender(){return this.mask&&this.overlay&&null!=this._magnifier}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort()
const e=Object(a.k)(this._magnifier)?this._magnifier.maskUrl:null,t=Object(a.k)(this._magnifier)?this._magnifier.overlayUrl:null
this._resourcesTask=Object(z.h)(async i=>{const s=Object(a.j)(e)||Object(a.j)(t)?Object(Ri.a)(i):null,r=Object(a.k)(e)?Object(P.default)(e,{responseType:"image",signal:i}).then(e=>e.data):s.then(e=>e.mask),n=Object(a.k)(t)?Object(P.default)(t,{responseType:"image",signal:i}).then(e=>e.data):s.then(e=>e.overlay),[o,l]=await Promise.all([r,n])
this.mask=o,this.overlay=l,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=Object(a.e)(this._readbackTexture),this._overlayTexture=Object(a.e)(this._overlayTexture),this._maskTexture=Object(a.e)(this._maskTexture),this._vertexArrayObject=Object(a.e)(this._vertexArrayObject),this._program=Object(a.e)(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return
const t=e.context
this._resourcePixelRatio=e.pixelRatio
const i=Math.ceil(this._magnifier.size*e.pixelRatio)
this._program=function(e){return Object(E.a)(e,Si)}(t)
const s=new Uint16Array([0,1,0,0,1,1,1,0]),r=Si.attributes
this._vertexArrayObject=new S.a(t,r,x.b,{geometry:w.a.createVertex(t,T.D.STATIC_DRAW,s)}),this.overlay.width=i,this.overlay.height=i,this._overlayTexture=new H.a(t,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.NEAREST,flipped:!0,preMultiplyAlpha:!Object(Ti.z)(this.overlay.src)||!e.context.driverTest.svgAlwaysPremultipliesAlpha},this.overlay),this.mask.width=i,this.mask.height=i,this._maskTexture=new H.a(t,{target:T.A.TEXTURE_2D,pixelFormat:T.p.ALPHA,internalFormat:T.p.ALPHA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.NEAREST,flipped:!0},this.mask)
const n=1/this._magnifier.factor
this._readbackTexture=new H.a(t,{target:T.A.TEXTURE_2D,pixelFormat:T.p.RGBA,internalFormat:T.p.RGBA,dataType:T.q.UNSIGNED_BYTE,wrapMode:T.B.CLAMP_TO_EDGE,samplingMode:T.z.LINEAR,flipped:!1,width:Math.ceil(n*i),height:Math.ceil(n*i)})}}},895:function(e,t,i){"use strict"
var s,r,n,a,o,l,c,h,u,d,f,_,p,m
i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return m})),i.d(t,"e",(function(){return r})),i.d(t,"f",(function(){return u})),i.d(t,"g",(function(){return f})),i.d(t,"h",(function(){return d})),i.d(t,"i",(function(){return o})),i.d(t,"j",(function(){return l})),i.d(t,"k",(function(){return c})),i.d(t,"l",(function(){return a})),i.d(t,"m",(function(){return h})),i.d(t,"n",(function(){return _})),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(s||(s={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(r||(r={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(n||(n={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(a||(a={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(l||(l={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(c||(c={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(h||(h={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(d||(d={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(f||(f={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(_||(_={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(p||(p={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(m||(m={}))},979:function(e,t,i){"use strict"
i.d(t,"a",(function(){return k})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return h})),i.d(t,"f",(function(){return l})),i.d(t,"g",(function(){return x})),i.d(t,"h",(function(){return a})),i.d(t,"i",(function(){return n}))
var s=i(895),r=i(877)
function n(e,t,i=r.c.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function a(e,t,i,s,n=r.c.ADD,a=r.c.ADD,o=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:s,opRgb:n,opAlpha:a,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const o={face:r.n.BACK,mode:r.j.CCW},l={face:r.n.FRONT,mode:r.j.CCW},c=e=>e===s.c.Back?o:e===s.c.Front?l:null,h={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0}
function d(e){return w.intern(e)}function f(e){return E.intern(e)}function _(e){return R.intern(e)}function p(e){return F.intern(e)}function m(e){return j.intern(e)}function g(e){return B.intern(e)}function b(e){return P.intern(e)}function y(e){return L.intern(e)}function x(e){return N.intern(e)}class v{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null
const t=this.makeKey(e),i=this.interns
return i.has(t)||i.set(t,this.makeRef(e)),i.get(t)}}function O(e){return"["+e.join(",")+"]"}const w=new v(T,e=>({__tag:"Blending",...e}))
function T(e){return e?O([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const E=new v(S,e=>({__tag:"Culling",...e}))
function S(e){return e?O([e.face,e.mode]):null}const R=new v(M,e=>({__tag:"PolygonOffset",...e}))
function M(e){return e?O([e.factor,e.units]):null}const F=new v(C,e=>({__tag:"DepthTest",...e}))
function C(e){return e?O([e.func]):null}const j=new v(A,e=>({__tag:"StencilTest",...e}))
function A(e){return e?O([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const B=new v(I,e=>({__tag:"DepthWrite",...e}))
function I(e){return e?O([e.zNear,e.zFar]):null}const P=new v(D,e=>({__tag:"ColorWrite",...e}))
function D(e){return e?O([e.r,e.g,e.b,e.a]):null}const L=new v(z,e=>({__tag:"StencilWrite",...e}))
function z(e){return e?O([e.mask]):null}const N=new v((function(e){return e?O([T(e.blending),S(e.culling),M(e.polygonOffset),C(e.depthTest),A(e.stencilTest),I(e.depthWrite),D(e.colorWrite),z(e.stencilWrite)]):null}),e=>({blending:d(e.blending),culling:f(e.culling),polygonOffset:_(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:m(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:b(e.colorWrite),stencilWrite:y(e.stencilWrite)}))
class k{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,i,s){return(i||e!==t)&&(s(e),this._pipelineInvalid=!0),e}}}}])
