(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[139,30,439],{1013:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return u})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return a})),i.d(t,"h",(function(){return n}))
const r=0,s=100
function n(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function o(e,t){return Math.sqrt(e*e+t*t)}function a(e){const t=o(e[0],e[1])
e[0]/=t,e[1]/=t}function l(e,t){return o(e[0]-t[0],e[1]-t[1])}function c(e){return"function"==typeof e}function h(e=2){return 1/Math.max(e,1)}function u(e,t){return[!!e.minScale&&t.scaleToZoom(e.minScale)||r,!!e.maxScale&&t.scaleToZoom(e.maxScale)||s]}},1074:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return l})),i.d(t,"g",(function(){return a})),i.d(t,"h",(function(){return h}))
const r=8388607,s=8388608,n=0,o=1,a=e=>(e&s)>>>23,l=e=>e&r,c=e=>a(e)===o?254:255
function h(e){return a(e)===o}function u(e,t){return((t?s:0)|e)>>>0}},1096:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var r,s,n,o={exports:{}}
r=o,s=function(){function e(e,i,s){s=s||2
var n,o,a,c,h,u,d,f=i&&i.length,p=f?i[0]*s:e.length,m=t(e,0,p,s,!0),y=[]
if(!m||m.next===m.prev)return y
if(f&&(m=l(e,i,m,s)),e.length>80*s){n=a=e[0],o=c=e[1]
for(var x=s;x<p;x+=s)(h=e[x])<n&&(n=h),(u=e[x+1])<o&&(o=u),h>a&&(a=h),u>c&&(c=u)
d=0!==(d=Math.max(a-n,c-o))?1/d:0}return r(m,y,s,n,o,d),y}function t(e,t,i,r,s){var n,o
if(s===I(e,t,i,r)>0)for(n=t;n<i;n+=r)o=S(n,e[n],e[n+1],o)
else for(n=i-r;n>=t;n-=r)o=S(n,e[n],e[n+1],o)
if(o&&g(o,o.next)){var a=o.next
M(o),o=a}return o}function i(e,t){if(!e)return e
t||(t=e)
var i,r=e
do{if(i=!1,r.steiner||!g(r,r.next)&&0!==_(r.prev,r,r.next))r=r.next
else{var s=r.prev
if(M(r),(r=t=s)===r.next)break
i=!0}}while(i||r!==t)
return t}function r(e,t,l,c,h,u,d){if(e){!d&&u&&f(e,c,h,u)
for(var p,m,y=e;e.prev!==e.next;)if(p=e.prev,m=e.next,u?n(e,c,h,u):s(e))t.push(p.i/l),t.push(e.i/l),t.push(m.i/l),M(e),e=m.next,y=m.next
else if((e=m)===y){d?1===d?r(e=o(i(e),t,l),t,l,c,h,u,2):2===d&&a(e,t,l,c,h,u):r(i(e),t,l,c,h,u,1)
break}}}function s(e){var t=e.prev,i=e,r=e.next
if(_(t,i,r)>=0)return!1
for(var s=e.next.next;s!==e.prev;){if(y(t.x,t.y,i.x,i.y,r.x,r.y,s.x,s.y)&&_(s.prev,s,s.next)>=0)return!1
s=s.next}return!0}function n(e,t,i,r){var s=e.prev,n=e,o=e.next
if(_(s,n,o)>=0)return!1
for(var a=s.x<n.x?s.x<o.x?s.x:o.x:n.x<o.x?n.x:o.x,l=s.y<n.y?s.y<o.y?s.y:o.y:n.y<o.y?n.y:o.y,c=s.x>n.x?s.x>o.x?s.x:o.x:n.x>o.x?n.x:o.x,h=s.y>n.y?s.y>o.y?s.y:o.y:n.y>o.y?n.y:o.y,u=p(a,l,t,i,r),d=p(c,h,t,i,r),f=e.prevZ,m=e.nextZ;f&&f.z>=u&&m&&m.z<=d;){if(f!==e.prev&&f!==e.next&&y(s.x,s.y,n.x,n.y,o.x,o.y,f.x,f.y)&&_(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,m!==e.prev&&m!==e.next&&y(s.x,s.y,n.x,n.y,o.x,o.y,m.x,m.y)&&_(m.prev,m,m.next)>=0)return!1
m=m.nextZ}for(;f&&f.z>=u;){if(f!==e.prev&&f!==e.next&&y(s.x,s.y,n.x,n.y,o.x,o.y,f.x,f.y)&&_(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;m&&m.z<=d;){if(m!==e.prev&&m!==e.next&&y(s.x,s.y,n.x,n.y,o.x,o.y,m.x,m.y)&&_(m.prev,m,m.next)>=0)return!1
m=m.nextZ}return!0}function o(e,t,r){var s=e
do{var n=s.prev,o=s.next.next
!g(n,o)&&b(n,s,s.next,o)&&j(n,o)&&j(o,n)&&(t.push(n.i/r),t.push(s.i/r),t.push(o.i/r),M(s),M(s.next),s=e=o),s=s.next}while(s!==e)
return i(s)}function a(e,t,s,n,o,a){var l=e
do{for(var c=l.next.next;c!==l.prev;){if(l.i!==c.i&&x(l,c)){var h=w(l,c)
return l=i(l,l.next),h=i(h,h.next),r(l,t,s,n,o,a),void r(h,t,s,n,o,a)}c=c.next}l=l.next}while(l!==e)}function l(e,r,s,n){var o,a,l,h=[]
for(o=0,a=r.length;o<a;o++)(l=t(e,r[o]*n,o<a-1?r[o+1]*n:e.length,n,!1))===l.next&&(l.steiner=!0),h.push(m(l))
for(h.sort(c),o=0;o<h.length;o++)s=i(s=u(h[o],s),s.next)
return s}function c(e,t){return e.x-t.x}function h(e){if(e.next.prev===e)return e
let t=e
for(;;){const i=t.next
if(i.prev===t||i===t||i===e)break
t=i}return t}function u(e,t){var r=function(e,t){var i,r=t,s=e.x,n=e.y,o=-1/0
do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var a=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y)
if(a<=s&&a>o){if(o=a,a===s){if(n===r.y)return r
if(n===r.next.y)return r.next}i=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t)
if(!i)return null
if(s===o)return i
var l,c=i,h=i.x,u=i.y,f=1/0
r=i
do{s>=r.x&&r.x>=h&&s!==r.x&&y(n<u?s:o,n,h,u,n<u?o:s,n,r.x,r.y)&&(l=Math.abs(n-r.y)/(s-r.x),j(r,e)&&(l<f||l===f&&(r.x>i.x||r.x===i.x&&d(i,r)))&&(i=r,f=l)),r=r.next}while(r!==c)
return i}(e,t)
if(!r)return t
var s=w(r,e),n=i(r,r.next)
let o=h(s)
return i(o,o.next),n=h(n),h(t===r?n:t)}function d(e,t){return _(e.prev,e,t.prev)<0&&_(t.next,e,e.next)<0}function f(e,t,i,r){var s=e
do{null===s.z&&(s.z=p(s.x,s.y,t,i,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==e)
s.prevZ.nextZ=null,s.prevZ=null,function(e){var t,i,r,s,n,o,a,l,c=1
do{for(i=e,e=null,n=null,o=0;i;){for(o++,r=i,a=0,t=0;t<c&&(a++,r=r.nextZ);t++);for(l=c;a>0||l>0&&r;)0!==a&&(0===l||!r||i.z<=r.z)?(s=i,i=i.nextZ,a--):(s=r,r=r.nextZ,l--),n?n.nextZ=s:e=s,s.prevZ=n,n=s
i=r}n.nextZ=null,c*=2}while(o>1)}(s)}function p(e,t,i,r,s){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*s)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*s)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function m(e){var t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function y(e,t,i,r,s,n,o,a){return(s-o)*(t-a)-(e-o)*(n-a)>=0&&(e-o)*(r-a)-(i-o)*(t-a)>=0&&(i-o)*(n-a)-(s-o)*(r-a)>=0}function x(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var i=e
do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&b(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&(j(e,t)&&j(t,e)&&function(e,t){var i=e,r=!1,s=(e.x+t.x)/2,n=(e.y+t.y)/2
do{i.y>n!=i.next.y>n&&i.next.y!==i.y&&s<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==e)
return r}(e,t)&&(_(e.prev,e,t.prev)||_(e,t.prev,t))||g(e,t)&&_(e.prev,e,e.next)>0&&_(t.prev,t,t.next)>0)}function _(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function g(e,t){return e.x===t.x&&e.y===t.y}function b(e,t,i,r){var s=O(_(e,t,i)),n=O(_(e,t,r)),o=O(_(i,r,e)),a=O(_(i,r,t))
return s!==n&&o!==a||!(0!==s||!v(e,i,t))||!(0!==n||!v(e,r,t))||!(0!==o||!v(i,e,r))||!(0!==a||!v(i,t,r))}function v(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function O(e){return e>0?1:e<0?-1:0}function j(e,t){return _(e.prev,e,e.next)<0?_(e,t,e.next)>=0&&_(e,e.prev,t)>=0:_(e,t,e.prev)<0||_(e,e.next,t)<0}function w(e,t){var i=new T(e.i,e.x,e.y),r=new T(t.i,t.x,t.y),s=e.next,n=t.prev
return e.next=t,t.prev=e,i.next=s,s.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function S(e,t,i,r){var s=new T(e,t,i)
return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function M(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function T(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I(e,t,i,r){for(var s=0,n=t,o=i-r;n<i;n+=r)s+=(e[o]-e[n])*(e[n+1]+e[o+1]),o=n
return s}return e.deviation=function(e,t,i,r){var s=t&&t.length,n=s?t[0]*i:e.length,o=Math.abs(I(e,0,n,i))
if(s)for(var a=0,l=t.length;a<l;a++){var c=t[a]*i,h=a<l-1?t[a+1]*i:e.length
o-=Math.abs(I(e,c,h,i))}var u=0
for(a=0;a<r.length;a+=3){var d=r[a]*i,f=r[a+1]*i,p=r[a+2]*i
u+=Math.abs((e[d]-e[p])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[p+1]-e[d+1]))}return 0===o&&0===u?0:Math.abs((u-o)/o)},e.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},r=0,s=0;s<e.length;s++){for(var n=0;n<e[s].length;n++)for(var o=0;o<t;o++)i.vertices.push(e[s][n][o])
s>0&&(r+=e[s-1].length,i.holes.push(r))}return i},e},void 0!==(n=s())&&(r.exports=n)
const a=o.exports},1110:function(e,t,i){"use strict"
i.d(t,"a",(function(){return x})),i.d(t,"b",(function(){return y})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return _})),i.d(t,"e",(function(){return g})),i.d(t,"f",(function(){return b})),i.d(t,"g",(function(){return v}))
var r=i(20),s=i(869)
const n=(e,t,i)=>[t,i],o=(e,t,i)=>[t,i,e[2]],a=(e,t,i)=>[t,i,e[2],e[3]]
function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(r.k)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c({scale:e,translate:t},i){return Math.round((i-t[0])/e[0])}function h({scale:e,translate:t},i){return Math.round((t[1]-i)/e[1])}function u(e,t,i){const r=[]
let s,n,o,a
for(let l=0;l<i.length;l++){const u=i[l]
l>0?(o=c(e,u[0]),a=h(e,u[1]),o===s&&a===n||(r.push(t(u,o-s,a-n)),s=o,n=a)):(s=c(e,u[0]),n=h(e,u[1]),r.push(t(u,s,n)))}return r.length>0?r:null}function d({scale:e,translate:t},i){return i*e[0]+t[0]}function f({scale:e,translate:t},i){return t[1]-i*e[1]}function p(e,t,i){const r=new Array(i.length)
if(!i.length)return r
const[s,n]=e.scale
let o=d(e,i[0][0]),a=f(e,i[0][1])
r[0]=t(i[0],o,a)
for(let e=1;e<i.length;e++){const l=i[e]
o+=l[0]*s,a-=l[1]*n,r[e]=t(l,o,a)}return r}function m(e,t,i){const r=new Array(i.length)
for(let s=0;s<i.length;s++)r[s]=p(e,t,i[s])
return r}function y(e,t,i,r,s){return t.x=c(e,i.x),t.y=h(e,i.y),t!==i&&(r&&(t.z=i.z),s&&(t.m=i.m)),t}function x(e,t){return e&&t?Object(s.f)(t)?y(e,{},t,!1,!1):Object(s.h)(t)?function(e,t,i,r,s){const l=function(e,t,i,r){const s=[],l=i?r?a:o:r?o:n
for(let i=0;i<t.length;i++){const r=u(e,l,t[i])
r&&r.length>=2&&s.push(r)}return s.length?s:null}(e,i.paths,r,s)
return l?(t.paths=l,t):null}(e,{},t,!1,!1):Object(s.g)(t)?function(e,t,i,r,s){const l=function(e,t,i,r){const s=[],l=i?r?a:o:r?o:n
for(let i=0;i<t.length;i++){const r=u(e,l,t[i])
r&&r.length>=3&&s.push(r)}return s.length?s:null}(e,i.rings,r,s)
return l?(t.rings=l,t):null}(e,{},t,!1,!1):Object(s.e)(t)?function(e,t,i,r,s){return t.points=function(e,t,i,r){return u(e,i?r?a:o:r?o:n,t)}(e,i.points,r,s),t}(e,{},t,!1,!1):Object(s.d)(t)?function(e,t,i,r,s){return t.xmin=c(e,i.xmin),t.ymin=h(e,i.ymin),t.xmax=c(e,i.xmax),t.ymax=h(e,i.ymax),t}(e,{},t):null:null}function _(e,t,i,s,l){return Object(r.k)(i)&&(t.points=function(e,t,i,r){return p(e,i?r?a:o:r?o:n,t)}(e,i.points,s,l)),t}function g(e,t,i,s,n){return Object(r.j)(i)||(t.x=d(e,i.x),t.y=f(e,i.y),t!==i&&(s&&(t.z=i.z),n&&(t.m=i.m))),t}function b(e,t,i,s,l){return Object(r.k)(i)&&(t.rings=function(e,t,i,r){return m(e,i?r?a:o:r?o:n,t)}(e,i.rings,s,l)),t}function v(e,t,i,s,l){return Object(r.k)(i)&&(t.paths=function(e,t,i,r){return m(e,i?r?a:o:r?o:n,t)}(e,i.paths,s,l)),t}},1118:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var r=i(856),s=i(862),n=i(890),o=i(912),a=i(1010),l=i(177),c=i(20),h=i(959),u=i(858),d=(i(353),i(77),i(859),i(857))
let f=class extends(Object(o.b)(Object(a.b)(Object(h.b)(n.a.EventedMixin(s.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title"
throw l.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){return Object(c.u)(this.get("layer.opacity"),1)*Object(c.u)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var e
return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e
return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,t,i
return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(i=this.view)?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{}
return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}}
Object(r.a)([Object(u.b)()],f.prototype,"fullOpacity",null),Object(r.a)([Object(u.b)()],f.prototype,"layer",void 0),Object(r.a)([Object(u.b)()],f.prototype,"parent",void 0),Object(r.a)([Object(u.b)({readOnly:!0})],f.prototype,"suspended",null),Object(r.a)([Object(u.b)({readOnly:!0})],f.prototype,"suspendInfo",null),Object(r.a)([Object(u.b)({readOnly:!0})],f.prototype,"legendEnabled",null),Object(r.a)([Object(u.b)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),Object(r.a)([Object(u.b)({readOnly:!0})],f.prototype,"updatingProgress",null),Object(r.a)([Object(u.b)()],f.prototype,"visible",null),Object(r.a)([Object(u.b)()],f.prototype,"view",void 0),f=Object(r.a)([Object(d.a)("esri.views.layers.LayerView")],f)
const p=f},1119:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var r=i(20),s=i(1301)
class n{bindFeature(e,t,i){}write(e,t,i,n){var o
if(Object(r.j)(this._effects)||0===(null==(o=this._effects)?void 0:o.length))return this._write(e,t,n)
const a=s.a.executeEffects(this._effects,t.readLegacyGeometryForDisplay(),n.geometryEngine)
let l=s.a.next(a)
for(;l;)this._write(e,t,n,l),l=s.a.next(a)}_write(e,t,i,r){}}},1120:function(e,t,i){"use strict"
i.r(t),i.d(t,"createSymbolSchema",(function(){return a}))
var r=i(908),s=i(939)
function n(e){var t
return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return hydrateKey(e)}function a(e,t,i){if(!e)return null
switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,i){const a=t.supportsOutlineFills,l=Object(s.g)(r.d.FILL,{...t,isOutlinedFill:a}),c=i?o(l):l,h=e.clone(),u=h.outline
t.supportsOutlineFills||(h.outline=null)
const d={materialKey:c,hash:h.hash(),isOutlinedFill:!!t.supportsOutlineFills,...n(h)}
if(t.supportsOutlineFills)return d
const f=[]
if(f.push(d),u){const e=Object(s.g)(r.d.LINE,{...t,isOutline:!0}),a={materialKey:i?o(e):e,hash:u.hash(),...n(u)}
f.push(a)}return{type:"composite-symbol",layers:f,hash:f.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"simple-marker":case"picture-marker":return function(e,t,i){const a=Object(s.g)(r.d.MARKER,t),l=i?o(a):a,c=n(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"simple-line":return function(e,t,i){const a=Object(s.g)(r.d.LINE,t),l=i?o(a):a,c=e.clone(),h=c.marker
c.marker=null
const u=[]
if(u.push({materialKey:l,hash:c.hash(),...n(c)}),h){var d
const e=Object(s.g)(r.d.MARKER,t),a=i?o(e):e
h.color=null!=(d=h.color)?d:c.color,u.push({materialKey:a,hash:h.hash(),lineWidth:c.width,...n(h)})}return{type:"composite-symbol",layers:u,hash:u.reduce((e,t)=>t.hash+e,"")}}(e,t,i)
case"text":return function(e,t,i){const a=Object(s.g)(r.d.TEXT,t),l=i?o(a):a,c=n(e)
return{materialKey:l,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,i)
case"label":return function(e,t,i){const n=e.toJSON(),a=Object(s.g)(r.d.LABEL,{...t,placement:n.labelPlacement})
return{materialKey:i?o(a):a,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}(e,t,i)
case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize}
case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize}
case"web-style":return{...n(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize}
default:throw new Error("symbol not supported "+e.type)}}},1131:function(e,t,i){"use strict"
function r(){return new Float32Array(3)}function s(e){const t=new Float32Array(3)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(e,t,i){const r=new Float32Array(3)
return r[0]=e,r[1]=t,r[2]=i,r}function o(e,t){return new Float32Array(e,t,3)}function a(){return r()}function l(){return n(1,1,1)}function c(){return n(1,0,0)}function h(){return n(0,1,0)}function u(){return n(0,0,1)}i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return a}))
const d=a(),f=l(),p=c(),m=h(),y=u()
Object.freeze({__proto__:null,create:r,clone:s,fromValues:n,createView:o,zeros:a,ones:l,unitX:c,unitY:h,unitZ:u,ZEROS:d,ONES:f,UNIT_X:p,UNIT_Y:m,UNIT_Z:y})},1140:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return m})),i.d(t,"c",(function(){return x}))
var r=i(20),s=i(917),n=i(1300),o=i(872),a=i(662)
const l=[0,0]
function c(e,t){if(!t)return null
if("x"in t){const i={x:0,y:0}
return[i.x,i.y]=e(t.x,t.y,l),null!=t.z&&(i.z=t.z),null!=t.m&&(i.m=t.m),i}if("xmin"in t){const i={xmin:0,ymin:0,xmax:0,ymax:0}
return[i.xmin,i.ymin]=e(t.xmin,t.ymin,l),[i.xmax,i.ymax]=e(t.xmax,t.ymax,l),t.hasZ&&(i.zmin=t.zmin,i.zmax=t.zmax,i.hasZ=!0),t.hasM&&(i.mmin=t.mmin,i.mmax=t.mmax,i.hasM=!0),i}return"rings"in t?{rings:h(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:h(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:u(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function h(e,t){const i=[]
for(const r of e)i.push(u(r,t))
return i}function u(e,t){const i=[]
for(const r of e){const e=t(r[0],r[1],[0,0])
i.push(e),r.length>2&&e.push(r[2]),r.length>3&&e.push(r[3])}return i}async function d(e,t){if(!t)return
const i=Array.isArray(e)?e.map(e=>Object(r.k)(e.geometry)&&e.geometry.spatialReference):[e]
await Object(s.g)(i.map(e=>({source:e,dest:t})))}const f=c.bind(null,a.lngLatToXY),p=c.bind(null,a.xyToLngLat)
function m(e,t,i){if(!e)return e
if(i||(i=t,t=e.spatialReference),!Object(o.l)(t)||!Object(o.l)(i)||Object(o.d)(t,i))return e
if(Object(a.canProject)(t,i)){const t=Object(o.p)(i)?f(e):p(e)
return t.spatialReference=i,t}return Object(s.r)(n.a,[e],t,i,null)[0]}const y=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,i){if(!e||!e.length||!t||!i||Object(o.d)(t,i))return e
const r={geometries:e,inSpatialReference:t,outSpatialReference:i,resolve:null}
return this._jobs.push(r),new Promise(e=>{r.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null
const e=this._jobs.shift()
if(!e)return
const{geometries:t,inSpatialReference:i,outSpatialReference:r,resolve:l}=e
Object(a.canProject)(i,r)?Object(o.p)(r)?l(t.map(f)):l(t.map(p)):l(Object(s.r)(n.a,t,i,r,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}
function x(e,t,i){return y.push(e,t,i)}},1153:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var r=i(354)
function s(e,t){if(e&&"name"in e){const i=e
return t&&t.error(new r.a(i.name,i.message,i.details)),!1}return!0}},1158:function(e,t,i){"use strict"
function r(){return new Float32Array(4)}function s(e){const t=new Float32Array(4)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function n(e,t,i,r){const s=new Float32Array(4)
return s[0]=e,s[1]=t,s[2]=i,s[3]=r,s}function o(){return r()}function a(){return n(1,1,1,1)}function l(){return n(1,0,0,0)}function c(){return n(0,1,0,0)}function h(){return n(0,0,1,0)}function u(){return n(0,0,0,1)}i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n}))
const d=o(),f=a(),p=l(),m=c(),y=h(),x=u()
Object.freeze({__proto__:null,create:r,clone:s,fromValues:n,createView:function(e,t){return new Float32Array(e,t,4)},zeros:o,ones:a,unitX:l,unitY:c,unitZ:h,unitW:u,ZEROS:d,ONES:f,UNIT_X:p,UNIT_Y:m,UNIT_Z:y,UNIT_W:x})},1160:function(e,t,i){"use strict"
i.d(t,"a",(function(){return _})),i.d(t,"b",(function(){return x}))
var r=i(1302),s=i(908),n=i(939)
const o={marker:s.d.MARKER,fill:s.d.FILL,line:s.d.LINE,text:s.d.TEXT}
class a{constructor(e,t,i,r){const s={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},a=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(s)
this.layers=e,this.data=t,this.hash=this._createHash()+a,this.rendererKey=i
const l={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:i}
for(const t of e){const e=o[t.type]
t.materialKey=Object(n.g)(e,l),t.maxVVSize=r,t.scaleInfo=s,t.templateHash+=a}}get type(){return"expanded-cim"}_createHash(){let e=""
for(const t of this.layers)e+=t.templateHash
return e}}var l=i(1259),c=i(354),h=i(861),u=i(292),d=i(914),f=i(936),p=i(1200)
async function m(e,t,i){if(!e.name)return Promise.reject(new c.a("style-symbol-reference-name-missing","Missing name in style symbol reference"))
if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const i=p.a.replace(/\{SymbolName\}/gi,e.name)
try{const e=await Object(p.d)(i,t)
return Object(p.c)(e.data)}catch(e){return Object(h.v)(e),null}}(e,i)
try{return async function(e,t,i,r){const s=e.data,n={portal:i&&i.portal||d.a.getDefault(),url:Object(u.M)(e.baseUrl),origin:"portal-item"},o=s.items.find(e=>e.name===t)
if(!o)throw new c.a("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t})
let a=Object(f.b)(Object(p.e)(o,"cimRef"),n)
Object(l.b)()&&(a=Object(l.a)(a))
try{const e=await Object(p.d)(a,r)
return Object(p.c)(e.data)}catch(e){return Object(h.v)(e),null}}(await Object(p.b)(e,t,i),e.name,t,i)}catch(e){return Object(h.v)(e),null}}const y=async(e,t,i)=>new a(await Object(r.b)(e.data,t,i),e.data,e.rendererKey,e.maxVVSize),x=async(e,t,i,r)=>{if(!e)return null
if("cim"===e.type)return y(e,t,i)
if("web-style"===e.type){const s={type:"cim",data:await m(e,null,r),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize}
return y(s,t,i)}return e}
function _(e){if(!e)return null
const{type:t,cim:i,url:r,materialHash:s}=e,n={cim:i,type:t,mosaicHash:s,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null}
switch(t){case"marker":n.size=e.size,n.path=e.path
break
case"line":n.dashTemplate=e.dashTemplate
break
case"text":n.text=e.text,n.fontName=e.fontName}return n}},1168:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return _})),i.d(t,"d",(function(){return x})),i.d(t,"e",(function(){return p})),i.d(t,"f",(function(){return y})),i.d(t,"g",(function(){return m})),i.d(t,"h",(function(){return g}))
var r=i(1251),s=i(20),n=i(876),o=i(661),a=i(884),l=i(1033),c=i(1152),h=i(891),u=i(1395)
const d=512,f=50
function p(e,t){if(!t.isWrappable)return null
const[i,r]=Object(l.c)(t)
return e[2]>r?[Object(a.m)([e[0],e[1],r,e[3]]),Object(a.m)([i,e[1],i+e[2]-r,e[3]])]:e[0]<i?[Object(a.m)([i,e[1],e[2],e[3]]),Object(a.m)([r-(i-e[0]),e[1],r,e[3]])]:null}function m(e){return"text"===e||"esriTS"===e}function y(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function x(e){switch(Object(s.t)(e.geometry).type){case"point":case"multipoint":return 0
case"polyline":return 1
case"polygon":case"extent":return 2}return 0}function _(e,t,i){var s,o,a
if(!i||0===i.glyphMosaicItems.length)return e
const l=Object(r.a)(t.text)[1],d=i.glyphMosaicItems,f=Object(u.a)(d,l,{scale:Object(n.h)(t.font.size)/h.r,angle:null!=(s=t.angle)?s:0,xOffset:null!=(o=t.xoffset)?o:0,yOffset:null!=(a=t.yoffset)?a:0,hAlign:Object(c.e)(t.horizontalAlignment||"center"),vAlign:Object(c.g)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:h.u*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds
return e[0]=Object(n.h)(f.x-f.halfWidth),e[1]=Object(n.h)(f.y-f.halfHeight),e[2]=Object(n.h)(f.width),e[3]=Object(n.h)(f.height),e}function g(e){if(!e)return null
const{xmin:t,ymin:i,xmax:r,ymax:s,spatialReference:n}=e
return new o.default({rings:[[[t,i],[t,s],[r,s],[r,i],[t,i]]],spatialReference:n})}},1177:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n}))
var r=i(874)
function s(e,t,i=0){const s=Object(r.f)(e,0,l)
for(let e=0;e<4;e++)t[i+e]=Math.floor(256*c(s*o[e]))}function n(e,t=0){let i=0
for(let r=0;r<4;r++)i+=e[t+r]*a[r]
return i}const o=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],l=n(new Uint8ClampedArray([255,255,255,255]))
function c(e){return e-Math.floor(e)}},1203:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
class r{constructor(e,t){this.x=e,this.y=t}clone(){return new r(this.x,this.y)}equals(e,t){return e===this.x&&t===this.y}isEqual(e){return e.x===this.x&&e.y===this.y}setCoords(e,t){this.x=e,this.y=t}normalize(){const e=this.x,t=this.y,i=Math.sqrt(e*e+t*t)
this.x/=i,this.y/=i}rightPerpendicular(){const e=this.x
this.x=this.y,this.y=-e}move(e,t){this.x+=e,this.y+=t}assign(e){this.x=e.x,this.y=e.y}assignAdd(e,t){this.x=e.x+t.x,this.y=e.y+t.y}assignSub(e,t){this.x=e.x-t.x,this.y=e.y-t.y}rotate(e,t){const i=this.x,r=this.y
this.x=i*e-r*t,this.y=i*t+r*e}scale(e){this.x*=e,this.y*=e}length(){const e=this.x,t=this.y
return Math.sqrt(e*e+t*t)}static distance(e,t){const i=t.x-e.x,r=t.y-e.y
return Math.sqrt(i*i+r*r)}static add(e,t){return new r(e.x+t.x,e.y+t.y)}static sub(e,t){return new r(e.x-t.x,e.y-t.y)}}var s
!function(e){e[e.Unknown=0]="Unknown",e[e.Point=1]="Point",e[e.LineString=2]="LineString",e[e.Polygon=3]="Polygon"}(s||(s={}))},1228:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var r=i(20)
function s(e,t){return e?t?4:3:t?3:2}function n(e,t,i,n,l){if(Object(r.j)(t)||!t.lengths.length)return null
const c="upperLeft"===(null==l?void 0:l.originPosition)?-1:1
e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0)
const h=e.coords,u=[],d=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:f,coords:p}=t,m=s(i,n)
let y=0
for(const e of f){const t=o(d,p,y,e,i,n,c)
t&&u.push(t),y+=e*m}if(u.sort((e,t)=>{let r=c*e[2]-c*t[2]
return 0===r&&i&&(r=e[4]-t[4]),r}),u.length){let e=6*u[0][2]
h[0]=u[0][0]/e,h[1]=u[0][1]/e,i&&(e=6*u[0][4],h[2]=0!==e?u[0][3]/e:0),(h[0]<d[0]||h[0]>d[1]||h[1]<d[2]||h[1]>d[3]||i&&(h[2]<d[4]||h[2]>d[5]))&&(h.length=0)}if(!h.length){const e=t.lengths[0]?a(p,0,f[0],i,n):null
if(!e)return null
h[0]=e[0],h[1]=e[1],i&&e.length>2&&(h[2]=e[2])}return e}function o(e,t,i,r,n,o,a=1){const l=s(n,o)
let c=i,h=i+l,u=0,d=0,f=0,p=0,m=0
for(let i=0,s=r-1;i<s;i++,c+=l,h+=l){const i=t[c],r=t[c+1],s=t[c+2],o=t[h],a=t[h+1],l=t[h+2]
let y=i*a-o*r
p+=y,u+=(i+o)*y,d+=(r+a)*y,n&&(y=i*l-o*s,f+=(s+l)*y,m+=y),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),n&&(s<e[4]&&(e[4]=s),s>e[5]&&(e[5]=s))}if(p*a>0&&(p*=-1),m*a>0&&(m*=-1),!p)return null
const y=[u,d,.5*p]
return n&&(y[3]=f,y[4]=.5*m),y}function a(e,t,i,r,n){const o=s(r,n)
let a=t,d=t+o,f=0,p=0,m=0,y=0
for(let t=0,s=i-1;t<s;t++,a+=o,d+=o){const t=e[a],i=e[a+1],s=e[a+2],n=e[d],o=e[d+1],x=e[d+2],_=r?c(t,i,s,n,o,x):l(t,i,n,o)
if(_)if(f+=_,r){const e=u(t,i,s,n,o,x)
p+=_*e[0],m+=_*e[1],y+=_*e[2]}else{const e=h(t,i,n,o)
p+=_*e[0],m+=_*e[1]}}return f>0?r?[p/f,m/f,y/f]:[p/f,m/f]:i>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,r){const s=i-e,n=r-t
return Math.sqrt(s*s+n*n)}function c(e,t,i,r,s,n){const o=r-e,a=s-t,l=n-i
return Math.sqrt(o*o+a*a+l*l)}function h(e,t,i,r){return[e+.5*(i-e),t+.5*(r-t)]}function u(e,t,i,r,s,n){return[e+.5*(r-e),t+.5*(s-t),i+.5*(n-i)]}},1232:function(e,t,i){"use strict"
i.d(t,"a",(function(){return T})),i(77)
var r=i(20),s=i(1025),n=i(1344),o=i(1290),a=i(354),l=i(177),c=i(1123),h=i(1096),u=i(919),d=i(938),f=i(930),p=i(935),m=i(937),y=i(985),x=i(877)
const _=l.a.getLogger("esri.views.2d.engine.webgl.Mesh2D"),g=(e,t,i,r)=>{let s=0
for(let r=1;r<i;r++){const i=e[2*(t+r-1)],n=e[2*(t+r-1)+1]
s+=(e[2*(t+r)]-i)*(e[2*(t+r)+1]+n)}return r?s>0:s<0},b=({coords:e,lengths:t},i)=>{const r=[]
for(let s=0,n=0;s<t.length;n+=t[s],s+=1){const o=n,a=[]
for(;s<t.length-1&&g(e,n+t[s],t[s+1],i);s+=1,n+=t[s])a.push(n+t[s]-o)
const l=e.slice(2*o,2*(n+t[s])),c=Object(h.a)(l,a,2)
for(const e of c)r.push(e+o)}return r}
class v{constructor(e,t,i,r=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=i,this.isMapSpace=r}static fromRect({x:e,y:t,width:i,height:r}){const s=e,n=t,o=s+i,a=n+r
return v.fromScreenExtent({xmin:s,ymin:n,xmax:o,ymax:a})}static fromPath(e){const t=Object(f.f)(new p.a,e.path,!1,!1),i=t.coords,r=new Uint32Array(b(t,!0)),s=new Uint32Array(i.length/2)
for(let e=0;e<s.length;e++)s[e]=Object(m.a)(Math.floor(i[2*e]),Math.floor(i[2*e+1]))
return new v({geometry:s},r,x.r.TRIANGLES)}static fromGeometry(e,t){const i=t.geometry.type
switch(i){case"polygon":return v.fromPolygon(e,t.geometry)
case"extent":return v.fromMapExtent(e,t.geometry)
default:return _.error(new a.a("mapview-bad-type","Unable to create a mesh from type "+i,t)),v.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const i=Object(f.h)(new p.a,t,!1,!1),r=i.coords,s=new Uint32Array(b(i,!1)),n=new Uint32Array(r.length/2),o=Object(d.b)(),a=Object(d.b)()
for(let t=0;t<n.length;t++)Object(u.s)(o,r[2*t],r[2*t+1]),e.toScreen(a,o),n[t]=Object(m.a)(Math.floor(a[0]),Math.floor(a[1]))
return new v({geometry:n},s,x.r.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:i,ymax:r}){const s={geometry:new Uint32Array([Object(m.a)(e,i),Object(m.a)(t,i),Object(m.a)(e,r),Object(m.a)(e,r),Object(m.a)(t,i),Object(m.a)(t,r)])},n=new Uint32Array([0,1,2,3,4,5])
return new v(s,n,x.r.TRIANGLES)}static fromMapExtent(e,t){const[i,r]=e.toScreen([0,0],[t.xmin,t.ymin]),[s,n]=e.toScreen([0,0],[t.xmax,t.ymax]),o={geometry:new Uint32Array([Object(m.a)(i,r),Object(m.a)(s,r),Object(m.a)(i,n),Object(m.a)(i,n),Object(m.a)(s,r),Object(m.a)(s,n)])},a=new Uint32Array([0,1,2,3,4,5])
return new v(o,a,x.r.TRIANGLES)}destroy(){Object(r.k)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose()
for(const e in this._cache.vertexBuffers)Object(r.k)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return(e=>{switch(e.BYTES_PER_ELEMENT){case 1:return x.k.UNSIGNED_BYTE
case 2:return x.k.UNSIGNED_SHORT
case 4:return x.k.UNSIGNED_INT
default:throw new a.a("Cannot get DataType of array")}})(this.indices)}getIndexBuffer(e,t=x.D.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=y.a.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=x.D.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((i,r)=>({...i,[r]:y.a.createVertex(e,t,this.vertices[r])}),{})),this._cache.vertexBuffers}}var O=i(998)
const j=l.a.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),w=e=>parseFloat(e)/100
class S extends c.a{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=t.watch("version",()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new S(e,t)}_destroyGL(){Object(r.k)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(r.k)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,i,s){const[n,o]=t.size
if("geometry"!==this._clip.type&&this._lastWidth===n&&this._lastHeight===o||(this._lastWidth=n,this._lastHeight=o,this._destroyGL()),Object(r.j)(this._cache.vao)){const r=this._createMesh(t,this._clip),n=r.getIndexBuffer(e),o=r.getVertexBuffers(e)
this._cache.mesh=r,this._cache.vao=new O.a(e,i,s,o,n)}return this._cache.vao}_createTransforms(){return{dvs:Object(s.b)()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[i,r]=e.size,s="string"==typeof t.left?w(t.left)*i:t.left,n="string"==typeof t.right?w(t.right)*i:t.right,o="string"==typeof t.top?w(t.top)*r:t.top,a="string"==typeof t.bottom?w(t.bottom)*r:t.bottom,l=s,c=o
return{x:l,y:c,width:Math.max(i-n-l,0),height:Math.max(r-a-c,0)}}_createMesh(e,t){switch(t.type){case"rect":return v.fromRect(this._createScreenRect(e,t))
case"path":return v.fromPath(t)
case"geometry":return v.fromGeometry(e,t)
default:return j.error(new a.a("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),v.fromRect({x:0,y:0,width:1,height:1})}}}var M=i(908)
class T extends o.a{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}_createTransforms(){return{dvs:Object(s.b)()}}doRender(e){const t=this.createRenderParams(e),{painter:i,globalOpacity:r,profiler:s,drawPhase:n}=t,o=n===M.c.LABEL||n===M.c.HIGHLIGHT?1:r*this.computedOpacity
s.recordContainerStart(this.name),i.beforeRenderLayer(t,this._clippingInfos?255:0,o),this.updateTransforms(e.state),this.renderChildren(t),i.compositeLayer(t,o),s.recordContainerEnd()}renderChildren(e){Object(r.j)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter))
for(const t of this.children)t.beforeRender(e)
for(const t of this._renderPasses)try{t.render(e)}catch(e){}for(const t of this.children)t.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[n.a.clip],target:()=>this._clippingInfos,drawPhase:M.c.MAP|M.c.LABEL|M.c.LABEL_ALPHA|M.c.DEBUG|M.c.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(Object(r.k)(this._clippingInfos)&&(this._clippingInfos.forEach(e=>e.destroy()),this._clippingInfos=null),!this.stage)return
const e=this._clips
Object(r.k)(e)&&e.length&&(this._clippingInfos=e.items.map(e=>S.fromClipArea(this.stage,e))),this.requestRender()}}},1235:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var r=i(354),s=i(177),n=i(1110)
function o(e,t,i,r,n){const o=e.referencesGeometry()&&n?l(t,r,n):t,a=e.repurposeFeature(o)
try{return e.evaluate({...i,$feature:a})}catch(e){return s.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const a=new Map
function l(e,t,i){const{transform:o,hasZ:l,hasM:c}=i
a.has(t)||a.set(t,function(e){const t={}
switch(e){case"esriGeometryPoint":return(e,i,r,s)=>Object(n.e)(i,t,e,r,s)
case"esriGeometryPolygon":return(e,i,r,s)=>Object(n.f)(i,t,e,r,s)
case"esriGeometryPolyline":return(e,i,r,s)=>Object(n.g)(i,t,e,r,s)
case"esriGeometryMultipoint":return(e,i,r,s)=>Object(n.d)(i,t,e,r,s)
default:return s.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new r.a("mapview-arcade","Unable to handle geometryType: "+e)),e=>e}}(t))
const h=a.get(t)(e.geometry,o,l,c)
return{...e,geometry:h}}},1237:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
class r{constructor(e,t){this._pos=0
const i=t?this._roundToNearest(t,e.BYTES_PER_ELEMENT):40
this._array=new ArrayBuffer(i),this._buffer=new e(this._array),this._ctor=e,this._i16View=new Int16Array(this._array)}get length(){return this._pos}_roundToNearest(e,t){const i=Math.round(e)
return i+(t-i%t)}_ensureSize(e){if(this._pos+e>=this._buffer.length){const t=this._roundToNearest(1.25*(this._array.byteLength+e*this._buffer.BYTES_PER_ELEMENT),this._buffer.BYTES_PER_ELEMENT),i=new ArrayBuffer(t),r=new this._ctor(i)
r.set(this._buffer,0),this._array=i,this._buffer=r,this._i16View=new Int16Array(this._array)}}ensureSize(e){this._ensureSize(e)}writeF32(e){this._ensureSize(1)
const t=this._pos
return new Float32Array(this._array,4*this._pos,1)[0]=e,this._pos++,t}push(e){this._ensureSize(1)
const t=this._pos
return this._buffer[this._pos++]=e,t}writeFixed(e){this._buffer[this._pos++]=e}setValue(e,t){this._buffer[e]=t}i1616Add(e,t,i){this._i16View[2*e]+=t,this._i16View[2*e+1]+=i}getValue(e){return this._buffer[e]}incr(e){if(this._buffer.length<e)throw new Error("Increment index overflows the target buffer")
this._buffer[e]++}decr(e){this._buffer[e]--}writeRegion(e){this._ensureSize(e.length)
const t=this._pos
return this._buffer.set(e,this._pos),this._pos+=e.length,t}writeManyFrom(e,t,i){this._ensureSize(i-t)
for(let r=t;r!==i;r++)this.writeFixed(e._buffer[r])}buffer(){const e=this._array.slice(0,4*this._pos)
return this.destroy(),e}toArray(){const e=this._array,t=[]
for(let i=0;i<e.byteLength/4;i++)t.push(e[i])
return t}seek(e){this._pos=e}destroy(){this._array=null,this._buffer=null}}},1259:function(e,t,i){"use strict"
function r(e){return e=e||globalThis.location.hostname,c.some(t=>{var i
return null!=(null==(i=e)?void 0:i.match(t))})}function s(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(a)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
const n=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,a=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,o,/^jsapps.esri.com$/,a,l]},1277:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var r=i(978),s=i(1123),n=i(1059)
class o extends s.a{constructor(e,t,i,r,s,o=r,a=s){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.a(e),this.x=t,this.y=i,this.width=r,this.height=s,this.rangeX=o,this.rangeY=a}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,[n,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*i,l=this.height/this.rangeY*i
Object(r.o)(s,a,0,0,0,l,0,n,o,1),Object(r.l)(this.transforms.dvs,e.displayViewMat3,s)}}},1291:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return l}))
var r=i(897),s=i(77)
let n=null,o=null
async function a(){return n||(n=async function(){const e=Object(s.a)("esri-csp-restrictions")?await Promise.all([i.e(407),i.e(378)]).then(i.bind(null,1702)).then(e=>e.l):await i.e(318).then(i.bind(null,1703)).then(e=>e.l)
o=await e.load({locateFile:()=>Object(r.b)("esri/core/libs/libtess/libtess.wasm")})}()),n}function l(e,t){const i=Math.max(e.length,128e3)
return o.triangulate(e,t,i)}},1300:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
const r={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,i){const r=new s(e.getPointX(t),e.getPointY(t),i),n=e.hasZ(t),o=e.hasM(t)
return n&&(r.z=e.getPointZ(t)),o&&(r.m=e.getPointM(t)),r},exportPolygon:function(e,t,i){return new n(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,i){return new o(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,i){return new a(e.exportPoints(t),i,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,i){const r=e.hasZ(t),s=e.hasM(t),n=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),i)
if(r){const i=e.getZExtent(t)
n.zmin=i.vmin,n.zmax=i.vmax}if(s){const i=e.getMExtent(t)
n.mmin=i.vmin,n.mmax=i.vmax}return n}}
class s{constructor(e,t,i){this.x=e,this.y=t,this.spatialReference=i,this.z=void 0,this.m=void 0}}class n{constructor(e,t,i,r){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),r&&(this.hasM=r)}}class o{constructor(e,t,i,r){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),r&&(this.hasM=r)}}class a{constructor(e,t,i,r){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),r&&(this.hasM=r)}}class l{constructor(e,t,i,r,s){this.xmin=e,this.ymin=t,this.xmax=i,this.ymax=r,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},1301:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var r=i(869),s=i(1159),n=i(1602),o=i(1411)
class a{static executeEffects(e,t,i){const r=Object(s.c)(t)
let a=new n.a(r)
for(const t of e){const e=Object(o.a)(t)
e&&(a=e.execute(a,t,96/72,i))}return a}static next(e){const t=e.next()
return Object(s.d)(t),t}static applyEffects(e,t,i){if(!e)return t
let s=new n.a(t)
for(const t of e){const e=Object(o.a)(t)
e&&(s=e.execute(s,t,1,i))}let a,l=null
for(;a=s.next();)l?Object(r.h)(l)?Object(r.h)(a)&&l.paths.push(...a.paths):Object(r.g)(l)&&Object(r.g)(a)&&l.rings.push(...a.rings):l=a
return l}}},1302:function(e,t,i){"use strict"
i.d(t,"a",(function(){return W})),i.d(t,"b",(function(){return w}))
var r=i(873),s=i(178),n=i(177),o=i(20),a=i(876),l=i(355),c=i(907),h=i(1179),u=i(969),d=i(1424),f=i(1149),p=i(1301),m=i(1235),y=i(1433)
const x=n.a.getLogger("esri.symbols.cim.cimAnalyzer")
function _(e){switch(e){case"Butt":return u.d.BUTT
case"Square":return u.d.SQUARE
default:return u.d.ROUND}}function g(e){switch(e){case"Bevel":return u.o.BEVEL
case"Miter":return u.o.MITER
default:return u.o.ROUND}}function b(e){switch(e){case"Left":default:return"left"
case"Right":return"right"
case"Center":return"center"
case"Justify":return"justify"}}function v(e){switch(e){case"Top":default:return"top"
case"Center":return"middle"
case"Baseline":return"baseline"
case"Bottom":return"bottom"}}function O(e,t,i,r){let s
e[t]?s=e[t]:(s={},e[t]=s),s[i]=r}function j(e){const t=e.markerPlacement
return t&&t.angleToLine?u.a.MAP:u.a.SCREEN}async function w(e,t,i,r,s){const n=null!=r?r:[]
if(!e)return n
let o,a
const l={}
if("CIMSymbolReference"!==e.type)return x.error("Expect cim type to be 'CIMSymbolReference'"),n
if(o=e.symbol,a=e.primitiveOverrides,a){const e=[]
for(const i of a){const r=i.valueExpressionInfo
if(r&&t){const s=r.expression,n=Object(c.d)(s,t.spatialReference,t.fields).then(e=>{e&&O(l,i.primitiveName,i.propertyName,e)})
e.push(n)}else null!=i.value&&O(l,i.primitiveName,i.propertyName,i.value)}e.length>0&&await Promise.all(e)}const d=[]
switch(function e(t,i,r){if(t&&i)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const s=t.symbolLayers
if(!s)return
for(const t of s)switch(K(t,i,r),t.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in t&&t.url&&r.push(i.fetchResource(t.url,null))
break
case"CIMVectorMarker":{const s=t.markerGraphics
if(!s)continue
for(const t of s)if(t){const s=t.symbol
s&&e(s,i,r)}}}}}}(o,i,d),d.length>0&&await Promise.all(d),o.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,i,r,s,n,o){if(!e)return
const a=e.symbolLayers
if(!a)return
const l=e.effects
let c
const d=h.b.getSize(e)
"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=u.a.MAP)
let f=a.length
for(;f--;){const u=a[f]
if(!u||!1===u.enable)continue
let p
l&&l.length&&(p=[...l])
const m=u.effects
m&&m.length&&(l?p.push(...m):p=[...m])
const y=[]
let _
h.c.findEffectOverrides(p,t,y),_=y.length>0?V(p,y,i,r):p
const g=[]
switch(h.c.findApplicableOverrides(u,t,g),u.type){case"CIMSolidFill":S(u,_,i,g,r,s)
break
case"CIMPictureFill":M(u,_,i,g,r,n,s)
break
case"CIMHatchFill":T(u,_,i,g,r,s)
break
case"CIMGradientFill":I(u,_,i,g,r,s)
break
case"CIMSolidStroke":C(u,_,i,g,r,s,"CIMPolygonSymbol"===e.type,d)
break
case"CIMPictureStroke":R(u,_,i,g,r,s,"CIMPolygonSymbol"===e.type,d)
break
case"CIMGradientStroke":E(u,_,i,g,r,s,"CIMPolygonSymbol"===e.type,d)
break
case"CIMCharacterMarker":if(z(u,_,i,g,r,s))break
break
case"CIMPictureMarker":if(z(u,_,i,g,r,s))break
"CIMLineSymbol"===e.type&&(c=j(u)),L(u,_,i,g,r,n,s,c,d)
break
case"CIMVectorMarker":if(z(u,_,i,g,r,s))break
"CIMLineSymbol"===e.type&&(c=j(u)),F(u,_,i,g,r,s,n,c,d,o)
break
default:x.error("Cannot analyze CIM layer",u.type)}}}(o,a,l,t,n,i,s)}return n}function S(e,t,i,r,s,n){const o=e.primitiveName,a=Object(f.e)(e.color),[c,h]=Z(r,o,t,null),u=Object(l.b)(JSON.stringify(e)+h).toString()
n.push({type:"fill",templateHash:u,materialHash:c?()=>u:u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:N(o,i,"Color",s,a,B),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function M(e,t,i,r,s,n,a){const c=e.primitiveName,h=e.tintColor?Object(f.e)(e.tintColor):{r:255,g:255,b:255,a:1},[u,d]=Z(r,c,t,null),p=Object(l.b)(JSON.stringify(e)+d).toString(),m=Object(l.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString()
let y=Object(f.f)(e.scaleX)
if("width"in e){const t=e.width
let i=1
const r=n.getResource(e.url)
Object(o.k)(r)&&(i=r.width/r.height),y/=i*(e.height/t)}a.push({type:"fill",templateHash:p,materialHash:u?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:N(c,i,"TintColor",s,h,B),height:N(c,i,"Height",s,e.height),scaleX:N(c,i,"ScaleX",s,y),angle:N(c,i,"Rotation",s,Object(f.f)(e.rotation)),offsetX:N(c,i,"OffsetX",s,Object(f.f)(e.offsetX)),offsetY:N(c,i,"OffsetY",s,Object(f.f)(e.offsetY)),url:e.url})}function T(e,t,i,r,s,n){const o=["Rotation","OffsetX","OffsetY"],a=r.filter(t=>t.primitiveName!==e.primitiveName&&-1===o.indexOf(t.propertyName)),c=e.primitiveName,[h,u]=Z(r,c,t,null),d=Object(l.b)(JSON.stringify(e)+u).toString(),p=Object(l.b)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString()
n.push({type:"fill",templateHash:d,materialHash:h?U(p,i,a,s):p,cim:e,materialOverrides:a,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:N(c,i,"Separation",s,e.separation),scaleX:1,angle:N(c,i,"Rotation",s,Object(f.f)(e.rotation)),offsetX:N(c,i,"OffsetX",s,Object(f.f)(e.offsetX)),offsetY:N(c,i,"OffsetY",s,Object(f.f)(e.offsetY))})}function I(e,t,i,r,s,n){const o=e.primitiveName,[a,c]=Z(r,o,t,null),h=Object(l.b)(JSON.stringify(e)+c).toString()
n.push({type:"fill",templateHash:h,materialHash:a?U(h,i,r,s):h,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function C(e,t,i,r,s,n,o,a){const c=e.primitiveName,h=Object(f.e)(e.color),u=void 0!==e.width?e.width:4,d=_(e.capStyle),p=g(e.joinStyle),m=e.miterLimit,[y,x]=Z(r,c,t,null),b=Object(l.b)(JSON.stringify(e)+x).toString()
let v,O
if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1]
if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop()
v=e.dashTemplate,O=e.scaleDash}}n.push({type:"line",templateHash:b,materialHash:y?()=>b:b,cim:e,materialOverrides:null,isOutline:o,colorLocked:e.colorLocked,effects:t,color:N(c,i,"Color",s,h,B),width:N(c,i,"Width",s,u),cap:N(c,i,"CapStyle",s,d),join:N(c,i,"JoinStyle",s,p),miterLimit:N(c,i,"MiterLimit",s,m),referenceWidth:a,zOrder:k(e.name),dashTemplate:v,scaleDash:O})}function R(e,t,i,r,s,n,o,a){const c=Object(l.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),h=e.primitiveName,u=Object(f.e)(e.tintColor),d=void 0!==e.width?e.width:4,p=_(e.capStyle),m=g(e.joinStyle),y=e.miterLimit,[x,b]=Z(r,h,t,null),v=Object(l.b)(JSON.stringify(e)+b).toString()
n.push({type:"line",templateHash:v,materialHash:x?()=>c:c,cim:e,materialOverrides:null,isOutline:o,colorLocked:e.colorLocked,effects:t,color:N(h,i,"TintColor",s,u,B),width:N(h,i,"Width",s,d),cap:N(h,i,"CapStyle",s,p),join:N(h,i,"JoinStyle",s,m),miterLimit:N(h,i,"MiterLimit",s,y),referenceWidth:a,zOrder:k(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function E(e,t,i,r,s,n,o,a){const c=e.primitiveName,h=void 0!==e.width?e.width:4,u=_(e.capStyle),d=g(e.joinStyle),f=e.miterLimit,[p,m]=Z(r,c,t,null),y=Object(l.b)(JSON.stringify(e)+m).toString()
n.push({type:"line",templateHash:y,materialHash:p?U(y,i,r,s):y,cim:e,materialOverrides:null,isOutline:o,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:N(c,i,"Width",s,h),cap:N(c,i,"CapStyle",s,u),join:N(c,i,"JoinStyle",s,d),miterLimit:N(c,i,"MiterLimit",s,f),referenceWidth:a,zOrder:k(e.name),dashTemplate:null,scaleDash:!1})}function z(e,t,i,r,s,n){const o=e.markerPlacement
if(!o||"CIMMarkerPlacementInsidePolygon"!==o.type)return!1
const a=o,c=["Rotation","OffsetX","OffsetY"],h=r.filter(t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName)),u="url"in e?e.url:null,[d,p]=Z(r,a.primitiveName,t,null),m=Object(l.b)(JSON.stringify(e)+p).toString()
let y=a.stepY,x=null,_=1
return o.shiftOddRows&&(y*=2,x=function(e){return e?2*e:0},_=.5),n.push({type:"fill",templateHash:m,materialHash:d?U(m,i,h,s):m,cim:e,materialOverrides:h,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:N(a.primitiveName,i,"StepY",s,y,x),scaleX:_,angle:N(a.primitiveName,i,"GridAngle",s,a.gridAngle),offsetX:N(a.primitiveName,i,"OffsetX",s,Object(f.f)(a.offsetX)),offsetY:N(a.primitiveName,i,"OffsetY",s,Object(f.f)(a.offsetY)),url:u}),!0}function L(e,t,i,r,s,n,a,c,h){var u
const d=e.primitiveName,p=Object(f.f)(e.size)
let m=Object(f.f)(e.scaleX)
const y=Object(f.f)(e.rotation),x=Object(f.f)(e.offsetX),_=Object(f.f)(e.offsetY),g=e.tintColor?Object(f.e)(e.tintColor):{r:255,g:255,b:255,a:1},b=Object(l.b)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),v=G(e.markerPlacement,r,i,s),[O,j]=Z(r,d,t,v),w=Object(l.b)(JSON.stringify(e)+j).toString(),S=null!=(u=e.anchorPoint)?u:{x:0,y:0}
if("width"in e){const t=e.width
let i=1
const r=n.getResource(e.url)
Object(o.k)(r)&&(i=r.width/r.height),m/=i*(p/t)}a.push({type:"marker",templateHash:w,materialHash:O?()=>b:b,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:c,size:N(d,i,"Size",s,p),scaleX:N(d,i,"ScaleX",s,m),rotation:N(d,i,"Rotation",s,y),offsetX:N(d,i,"OffsetX",s,x),offsetY:N(d,i,"OffsetY",s,_),color:N(d,i,"TintColor",s,g,B),anchorPoint:{x:S.x,y:-S.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:h,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function F(e,t,i,r,s,n,o,a,l,c){const h=e.markerGraphics
if(!h)return
let u=0
if(e.scaleSymbolsProportionally){const t=e.frame
t&&(u=t.ymax-t.ymin)}const d=G(e.markerPlacement,r,i,s)
for(const f of h)if(f){const h=f.symbol
if(!h)continue
switch(h.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":P(e,t,d,f,r,i,s,n,o,a,l,u,c)
break
case"CIMTextSymbol":A(e,t,d,f,i,r,s,n,a,l,u)}}}function A(e,t,i,r,s,n,o,a,c,u,d){h.c.findApplicableOverrides(r,n,[])
const p=r.geometry
if(!("x"in p)||!("y"in p))return
const m=r.symbol,x=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(m),_=function(e){let t="",i=""
if(e){const r=e.toLowerCase();-1!==r.indexOf("italic")?t="italic":-1!==r.indexOf("oblique")&&(t="oblique"),-1!==r.indexOf("bold")?i="bold":-1!==r.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}(m.fontStyleName),g=Object(y.a)(m.fontFamilyName)
m.font={family:g,decoration:x,..._}
const O=e.frame,j=p.x-.5*(O.xmin+O.xmax),w=p.y-.5*(O.ymin+O.ymax),S=e.size/d,M=e.primitiveName,T=Object(f.f)(m.height)*S,I=Object(f.f)(m.angle),C=Object(f.f)(e.offsetX)+(Object(f.f)(m.offsetX)+j)*S,R=Object(f.f)(e.offsetY)+(Object(f.f)(m.offsetY)+w)*S,E=Object(f.e)(h.b.getFillColor(m))
let z=Object(f.e)(h.b.getStrokeColor(m)),L=h.b.getStrokeWidth(m)
L||(z=Object(f.e)(h.b.getFillColor(m.haloSymbol)),L=m.haloSize*S)
const[F,A]=Z(n,M,t,i),P=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),D=Object(l.b)(JSON.stringify(r)+P+A).toString()
let k=N(r.primitiveName,s,"TextString",o,r.textString,f.a,m.textCase)
if(null==k)return
const{fontStyleName:B}=m,V=g+(B?"-"+B.toLowerCase():"-regular"),G=V
"string"==typeof k&&k.indexOf("[")>-1&&m.fieldMap&&(k=Object(f.c)(m.fieldMap,k,m.textCase)),a.push({type:"text",templateHash:D,materialHash:F||"function"==typeof k||k.match(/\[(.*?)\]/)?(e,t,i)=>G+"-"+Object(f.d)(k,e,t,i):G+"-"+Object(l.b)(k),cim:m,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:V,decoration:x,weight:N(M,s,"Weight",o,_.weight),style:N(M,s,"Size",o,_.style),size:N(M,s,"Size",o,T),angle:N(M,s,"Rotation",o,I),offsetX:N(M,s,"OffsetX",o,C),offsetY:N(M,s,"OffsetY",o,R),horizontalAlignment:b(m.horizontalAlignment),verticalAlignment:v(m.verticalAlignment),text:k,color:E,outlineColor:z,outlineSize:L,referenceSize:u,sizeRatio:1,markerPlacement:i})}function P(e,t,i,r,s,n,a,c,u,m,y,x,_){const g=r.symbol,b=g.symbolLayers
if(!b)return
if(_)return void D(e,t,i,r,n,s,a,c,u,m,y,x)
let v=b.length
if(H(b))return void function(e,t,i,r,s,n,o,a,c,u,p,m){const y=r.geometry,x=s[0],_=s[1],g=Object(d.b)(y)
if(!g)return
const[b,v,O]=Object(d.d)(g,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),j={type:"sdf",geom:y,asFill:!0},w=e.primitiveName,S=Object(f.f)(e.size),M=Object(f.f)(e.rotation),T=Object(f.f)(e.offsetX),I=Object(f.f)(e.offsetY),C=_.path,R=_.primitiveName,E=x.primitiveName,z=Object(f.e)(h.b.getFillColor(_)),L=Object(f.e)(h.b.getStrokeColor(x)),F=h.b.getStrokeWidth(x)
let A=!1,P=""
for(const e of n)e.primitiveName!==R&&e.primitiveName!==E&&e.primitiveName!==w||(void 0!==e.value?P+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(A=!0))
const D=JSON.stringify({...e,markerGraphics:null}),k=Object(l.b)(JSON.stringify(j)+C).toString(),V={type:"marker",templateHash:Object(l.b)(JSON.stringify(r)+JSON.stringify(_)+JSON.stringify(x)+D+P).toString(),materialHash:A?()=>k:k,cim:j,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:v,y:O},isAbsoluteAnchorPoint:!1,size:N(e.primitiveName,o,"Size",a,S),rotation:N(e.primitiveName,o,"Rotation",a,M),offsetX:N(e.primitiveName,o,"OffsetX",a,T),offsetY:N(e.primitiveName,o,"OffsetY",a,I),scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:b,color:N(R,o,"Color",a,z,B),outlineColor:N(E,o,"Color",a,L,B),outlineWidth:N(E,o,"Width",a,F),markerPlacement:i,path:C}
c.push(V)}(e,t,i,r,b,s,n,a,c,m,y,x)
const O=p.a.applyEffects(g.effects,r.geometry,u.geometryEngine)
if(O)for(;v--;){const _=b[v]
if(_&&!1!==_.enable)switch(_.type){case"CIMSolidFill":case"CIMSolidStroke":{var j
const g=p.a.applyEffects(_.effects,O,u.geometryEngine),b=Object(d.b)(g)
if(!b)continue
const[v,w,S]=Object(d.d)(b,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),M="CIMSolidFill"===_.type,T={type:"sdf",geom:g,asFill:M},I=e.primitiveName,C=null!=(j=Object(f.f)(e.size))?j:10,R=Object(f.f)(e.rotation),E=Object(f.f)(e.offsetX),z=Object(f.f)(e.offsetY),L=_.path,F=_.primitiveName,A=Object(f.e)(M?h.b.getFillColor(_):h.b.getStrokeColor(_)),P=M?{r:0,g:0,b:0,a:0}:Object(f.e)(h.b.getStrokeColor(_)),D=h.b.getStrokeWidth(_)
if(!M&&!D)break
let k=!1,V=""
for(const e of s)e.primitiveName!==F&&e.primitiveName!==I||(void 0!==e.value?V+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(k=!0))
Object(o.k)(t)&&"function"==typeof t&&(k=!0)
const G=JSON.stringify({...e,markerGraphics:null}),U=Object(l.b)(JSON.stringify(T)+L).toString(),W={type:"marker",templateHash:Object(l.b)(JSON.stringify(r)+JSON.stringify(_)+G+V).toString(),materialHash:k?()=>U:U,cim:T,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:m,anchorPoint:{x:w,y:S},isAbsoluteAnchorPoint:!1,size:N(e.primitiveName,n,"Size",a,C),rotation:N(e.primitiveName,n,"Rotation",a,R),offsetX:N(e.primitiveName,n,"OffsetX",a,E),offsetY:N(e.primitiveName,n,"OffsetY",a,z),scaleX:1,frameHeight:x,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:v,color:N(F,n,"Color",a,A,B),outlineColor:N(F,n,"Color",a,P,B),outlineWidth:N(F,n,"Width",a,D),markerPlacement:i,path:L}
c.push(W)
break}default:D(e,t,i,r,n,s,a,c,u,m,y,x)}}}function D(e,t,i,r,s,n,c,u,d,p,m,y){const x=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,r)
let _=[]
const g=["Rotation","OffsetX","OffsetY"]
_=n.filter(t=>t.primitiveName!==e.primitiveName||-1===g.indexOf(t.propertyName))
let b=""
for(const e of n)void 0!==e.value&&(b+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`)
const[v,O,j]=h.b.getTextureAnchor(x,d),w=e.primitiveName,S=Object(f.f)(e.rotation),M=Object(f.f)(e.offsetX),T=Object(f.f)(e.offsetY),I=Object(l.b)(JSON.stringify(x)+b).toString(),C={type:"marker",templateHash:I,materialHash:_.length>0||Object(o.k)(t)&&"function"==typeof t?U(I,s,_,c):I,cim:x,materialOverrides:_,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:v,y:O},isAbsoluteAnchorPoint:!1,size:e.size,rotation:N(w,s,"Rotation",c,S),offsetX:N(w,s,"OffsetX",c,M),offsetY:N(w,s,"OffsetY",c,T),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:y,rotateClockwise:e.rotateClockwise,referenceSize:m,sizeRatio:j/Object(a.h)(e.size),markerPlacement:i}
u.push(C)}function k(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10)
if(!isNaN(t))return t}return 0}function B(e){if(!e||0===e.length)return null
const t=new r.a(e).toRgba()
return{r:t[0],g:t[1],b:t[2],a:t[3]}}function N(e,t,i,r,s,n,o){const a=t[e]
if(a){const e=a[i]
if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,o):e
if(null!=e&&e instanceof c.a)return(t,i,a)=>{let l=Object(m.a)(e,t,{$view:a},r.geometryType,i)
return null!==l&&n&&(l=n.call(null,l,o)),null!==l?l:s}}return s}function V(e,t,i,r){for(const e of t)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof c.a&&(e.fn=(e,i,s)=>Object(m.a)(t,e,{$view:s},r.geometryType,i))}const n=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e
return(i,r,o)=>{for(const e of t)e.fn&&(e.value=e.fn(i,r,o))
const a=[]
for(let i of e){var l
const e=null==(l=i)?void 0:l.primitiveName
if(e){let r=!1
for(const o of t)if(o.primitiveName===e){const e=n(o.propertyName)
null!=o.value&&o.value!==i[e]&&(r||(i=Object(s.a)(i),r=!0),i[e]=o.value)}}a.push(i)}return a}}function G(e,t,i,r){const n=[]
if(h.c.findApplicableOverrides(e,t,n),0===n.length)return e
for(const e of n)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName]
t instanceof c.a&&(e.fn=(e,i,s)=>Object(m.a)(t,e,{$view:s},r.geometryType,i))}const o=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e
return(t,i,r)=>{for(const e of n)e.fn&&(e.value=e.fn(t,i,r))
const a=Object(s.a)(e),l=e.primitiveName
for(const e of n)if(e.primitiveName===l){const t=o(e.propertyName)
null!=e.value&&e.value!==a[t]&&(a[t]=e.value)}return a}}function U(e,t,i,r){for(const e of i)if(e.valueExpressionInfo){const i=t[e.primitiveName]&&t[e.primitiveName][e.propertyName]
i instanceof c.a&&(e.fn=(e,t,s)=>Object(m.a)(i,e,{$view:s},r.geometryType,t))}return(t,r,s)=>{for(const e of i)e.fn&&(e.value=e.fn(t,r,s))
return Object(l.b)(e+h.c.buildOverrideKey(i)).toString()}}function W(e,t){if(!t||0===t.length)return e
const i=JSON.parse(JSON.stringify(e))
return h.c.applyOverrides(i,t),i}function Z(e,t,i,r){let s=!1,n=""
for(const i of e)i.primitiveName===t&&(void 0!==i.value?n+=`-${i.primitiveName}-${i.propertyName}-${JSON.stringify(i.value)}`:i.valueExpressionInfo&&(s=!0))
return Object(o.k)(i)&&"function"==typeof i&&(s=!0),Object(o.k)(r)&&"function"==typeof r&&(s=!0),[s,n]}const H=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects
let q
function K(e,t,i){e.effects&&!Object(o.k)(t.geometryEngine)&&(q?i.push(q):Object(f.l)(e.effects)&&(q=Object(f.g)(),i.push(q),q.then(e=>t.geometryEngine=e)))}},1303:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l}))
var r=i(354),s=i(177),n=i(908),o=i(942)
const a=s.a.getLogger("esri.views.2d.engine.webgl")
function l(e){return Object(o.u)(e.minDataValue)&&Object(o.u)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?n.e.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?n.e.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?n.e.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?n.e.SIZE_UNIT_VALUE:(a.error(new r.a("mapview-bad-type","Found invalid size VisualVariable",e)),n.e.NONE)}},1304:function(e,t,i){"use strict"
i.d(t,"a",(function(){return S})),i(870)
var r,s,n,o=i(77),a=i(20),l=i(1228),c=i(930),h=i(935),u=i(1312),d=i(869)
let f=0
const p=null!=(r=Object(o.a)("featurelayer-simplify-thresholds"))?r:[.5,.5,.5,.5],m=p[0],y=p[1],x=p[2],_=p[3],g=null!=(s=Object(o.a)("featurelayer-simplify-payload-size-factors"))?s:[1,2,4],b=g[0],v=g[1],O=g[2],j=null!=(n=Object(o.a)("featurelayer-simplify-mobile-factor"))?n:2,w=Object(o.a)("esri-mobile")
class S{constructor(e,t){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=e,this._layerSchema=t}static createInstance(){return f++,f=f>65535?0:f,f}get isEmpty(){return Object(a.k)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e}getAreaSimplificationThreshold(e,t){let i=1
const r=w?j:1
t>4e6?i=O*r:t>1e6?i=v*r:t>5e5?i=b*r:t>1e5&&(i=r)
let s=0
e>4e3?s=_*i:e>2e3?s=x*i:e>100?s=y:e>15&&(s=m)
let n=8
return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),s*n}setArcadeSpatialReference(e){this._arcadeSpatialReference=e}attachStorage(e){this._storage=e}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,i,r){const s=this.copy()
return s._tx+=e,s._ty+=t,s._sx*=i,s._sy*=r,s}readAttribute(e,t=!1){const i=this._readAttribute(e,t)
if(void 0!==i)return i
for(const i of this._joined){i.setIndex(this.getIndex())
const r=i._readAttribute(e,t)
if(void 0!==r)return r}}readAttributes(){const e=this._readAttributes()
for(const t of this._joined){t.setIndex(this.getIndex())
const i=t._readAttributes()
for(const t of Object.keys(i))e[t]=i[t]}return e}joinAttributes(e){this._joined.push(e)}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=Object(c.l)(e,this.geometryType,this.hasZ,this.hasM),i=Object(d.a)(t)
return i&&(i.spatialReference=this._arcadeSpatialReference),i}field(e){if(this.hasField(e))return this.readAttribute(e,!0)
for(const t of this._joined)if(t.setIndex(this.getIndex()),t.hasField(e))return t._readAttribute(e,!0)
throw new Error(`Field ${e} does not exist`)}setField(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){return JSON.stringify(this.readLegacyFeature())}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(e=null){return{attributes:this._readAttributes(),geometry:!0===(null==e?void 0:e.keepGeometryType)?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(e=null,t=null){return Promise.resolve(this.castAsJson(t))}removeIds(e){if(Object(a.j)(this._objectIdToIndex)){const e=new Map,t=this.getCursor()
for(;t.next();)e.set(t.getObjectId(),t.getIndex())
this._objectIdToIndex=e}const t=this._objectIdToIndex
for(const i of e)t.has(i)&&this.removeAtIndex(t.get(i))}removeAtIndex(e){Object(a.j)(this._deleted)&&(this._deleted=u.a.create(this.getSize())),this._deleted.set(e)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor()
for(;e.next();)yield e.readOptimizedFeature()}_getExists(){return Object(a.j)(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null
const e=this.readUnquantizedGeometry()
if(!e||e.hasIndeterminateRingOrder)return null
const t=Object(a.u)(this.getQuantizationTransform(),null)
return Object(l.a)(new h.a,e,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex}}},1310:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}))
const r=(e,t)=>e&&((...e)=>t.warn("DEBUG:",...e))||(()=>null),s=!1},1311:function(e,t,i){"use strict"
function r(e){const t=new Array(e.length)
for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)
return t}i.d(t,"a",(function(){return r}))},1312:function(e,t,i){"use strict"
i.d(t,"a",(function(){return r}))
class r{constructor(e,t){this._mask=0,this._buf=e,this._mask=t}static fromBuffer(e,t){return new r(e,t)}static create(e,t=4294967295){const i=new Uint32Array(Math.ceil(e/32))
return new r(i,t)}_getIndex(e){return Math.floor(e/32)}has(e){const t=this._mask&e
return!!(this._buf[this._getIndex(t)]&1<<t%32)}hasRange(e,t){let i=e,r=t
for(;i%32&&i!==r;){if(this.has(i))return!0
i++}for(;r%32&&i!==r;){if(this.has(i))return!0
r--}if(i===r)return!1
for(let e=i/32;e!==r/32;e++)if(this._buf[e])return!0
return!1}set(e){const t=this._mask&e,i=this._getIndex(t),r=1<<t%32
this._buf[i]|=r}setRange(e,t){let i=e,r=t
for(;i%32&&i!==r;)this.set(i++)
for(;r%32&&i!==r;)this.set(r--)
if(i!==r)for(let e=i/32;e!==r/32;e++)this._buf[e]=4294967295}unset(e){const t=this._mask&e,i=this._getIndex(t),r=1<<t%32
this._buf[i]&=4294967295^r}resize(e){const t=this._buf,i=new Uint32Array(Math.ceil(e/32))
i.set(t),this._buf=i}or(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=e._buf[t]
return this}and(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=e._buf[t]
return this}xor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=e._buf[t]
return this}ior(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=~e._buf[t]
return this}iand(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=~e._buf[t]
return this}ixor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=~e._buf[t]
return this}any(){for(let e=0;e<this._buf.length;e++)if(this._buf[e])return!0
return!1}copy(e){for(let t=0;t<this._buf.length;t++)this._buf[t]=e._buf[t]
return this}clone(){return new r(this._buf.slice(),this._mask)}clear(){for(let e=0;e<this._buf.length;e++)this._buf[e]=0}forEachSet(e){for(let t=0;t<this._buf.length;t++){let i=this._buf[t],r=32*t
if(i)for(;i;)1&i&&e(r),i>>>=1,r++}}countSet(){let e=0
return this.forEachSet(t=>{e++}),e}}},1322:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return o}))
const r=!0,s=32,n=1.5,o=200},1324:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var r=i(1251),s=i(876),n=i(969),o=i(1152),a=i(1e3),l=i(891),c=i(937),h=i(939),u=i(1013),d=i(1325),f=i(1119)
class p extends(Object(d.a)(f.a)){constructor(e,t,i,r,a,u,d,f,p,m,y,x,_,g,b,v,O,j,w=!1,S,M){super(),this._xOffset=Object(s.h)(_),this._yOffset=Object(s.h)(g),this._decoration=m||"none",this._color=a,this._haloColor=u,this._haloSize=Math.min(Math.floor(5*Object(s.h)(Object(s.k)(i))),127),this._size=Math.min(Math.round(Object(s.h)(t)),127)
const T=Math.min(Math.round(Object(s.h)(r||t)),127)
this._referenceSize=Math.round(Math.sqrt(256*T)),this._scale=this._size/l.r,this._angle=x,this._justify=Object(o.d)(d||"center"),this._xAlignD=Object(o.e)(d||"center"),this._yAlignD=Object(o.g)(f||"baseline"),this._baseline="baseline"===(f||"baseline"),this._bitset=(p===n.a.MAP?1:0)|(y?1:0)<<1
const I=h.e.load(e)
I.sdf=!0,this._materialKey=I.data,this._lineWidth=Object(s.h)(b)||512,this._lineHeight=v||1,this._textPlacement=O,this._effects=j,this._isCIM=w,this._minMaxZoom=Object(c.a)(Math.round(S*l.w),Math.round(M*l.w))}static fromText(e,t){const i=new p(e.materialKey,e.font.size,e.haloSize||0,e.font.size,e.color&&Object(a.d)(e.color)||0,e.haloColor&&Object(a.d)(e.haloColor)||0,e.horizontalAlignment,e.verticalAlignment,n.a.SCREEN,e.font.decoration,!1,e.angle||0,e.xoffset,e.yoffset,e.lineWidth,e.lineHeight,null,null,!1,u.b,u.a),[,s]=Object(r.a)(e.text)
return i.bindTextInfo(t,s),i._vertexBoundsScale=e.maxVVSize?e.maxVVSize/e.font.size:1,i}static fromCIMText(e,t,i){const s=e.scaleFactor||1,n=e.size*e.sizeRatio*s,[o,l]=Object(u.e)(e.scaleInfo,i),c=new p(e.materialKey,n,e.outlineSize*e.sizeRatio,e.referenceSize,Object(a.c)(e.color),Object(a.c)(e.outlineColor),e.horizontalAlignment,e.verticalAlignment,e.alignment,e.decoration,e.colorLocked,e.angle,e.offsetX*e.sizeRatio*s,e.offsetY*e.sizeRatio*s,512,1,e.markerPlacement,e.effects,!0,o,l),[,h]=Object(r.a)(e.text)
return c.bindTextInfo(t,h),c._vertexBoundsScale=e.maxVVSize?e.maxVVSize/n:1,c}}},1325:function(e,t,i){"use strict"
i.d(t,"a",(function(){return d}))
var r=i(20),s=i(876),n=i(930),o=i(1326),a=i(891),l=i(908),c=i(937),h=i(939),u=i(1395)
const d=e=>class extends e{constructor(...e){super(...e),this._isCIM=!1,this._vertexBoundsScale=1,this.geometryType=l.d.TEXT,this._aux=Object(c.b)(0,0,this._referenceSize,this._bitset)}bindTextInfo(e,t){e&&e.length?this._shapingInfo=Object(r.b)(e,e=>Object(u.a)(e,t,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:a.u*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM})):this._shapingInfo=null}_write(e,t,i,r){const s=t.getDisplayId()
this._writeGeometry(e,t,s,i,r)}_writeGeometry(e,t,i,s,o){const a=this._shapingInfo
if(Object(r.j)(a))return
if(Object(r.k)(this._textPlacement)){const r=null!=o?o:t.readLegacyGeometryForDisplay()
return this._writePlacedText(e,i,r,a,s)}const l=o?Object(n.q)(Object(n.d)(o),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(r.j)(l)){if(l.isPoint){const[t,r]=l.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||r<0||r>=512))return
return this._writeGlyphs(e,i,{x:t,y:r},a)}l.forEachVertex((t,r)=>this._writeGlyphs(e,i,{x:t,y:r},a))}}_writePlacedText(e,t,i,n,a){const l=Object(r.t)(this._textPlacement),c=o.a.getPlacement(i,l,Object(s.h)(1),a.geometryEngine)
if(!c)return
let h=c.next()
for(;null!=h;){const i=-h.getAngle()
n.setRotation(i)
const r=h.tx,s=-h.ty
r<0||r>=512||s<0||s>=512||(this._writeGlyphs(e,t,{x:r,y:s},n),n.setRotation(-i)),h=c.next()}}_writeGlyphs(e,t,i,r){const s=h.e.load(this._materialKey),n=Object(c.a)(Math.round(8*i.x),Math.round(8*i.y)),o=this._vertexBoundsScale,a=r.bounds,l=2*Math.max(a.width,a.height)
for(const c of r.glyphs)s.textureBinding=c.textureBinding,e.recordStart(t,s.data,this.geometryType,!0),e.vertexBounds(i.x+a.x+this._xOffset,i.y+a.y-this._yOffset,l*o,l*o),this._writeVertices(e,t,n,c),e.recordEnd()}_writeGlyph(e,t,i,r,s){const n=h.e.load(this._materialKey),o=Object(c.a)(Math.round(8*i),Math.round(8*r))
n.textureBinding=s.textureBinding,e.recordStart(t,n.data,this.geometryType,!0)
const a=s.bounds,l=this._vertexBoundsScale
e.vertexBounds(i+a.x*l,r+a.y*l,a.width*l,a.height*l),this._writeVertices(e,t,o,s),e.recordEnd()}_writeVertices(e,t,i,r){const s=e.vertexCount()
this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.upperLeft),e.vertexWrite(r.texcoords.upperLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.upperRight),e.vertexWrite(r.texcoords.upperRight),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.lowerLeft),e.vertexWrite(r.texcoords.lowerLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.lowerRight),e.vertexWrite(r.texcoords.lowerRight),e.vertexEnd(),e.indexWrite(s+0),e.indexWrite(s+1),e.indexWrite(s+2),e.indexWrite(s+1),e.indexWrite(s+3),e.indexWrite(s+2)}_writeVertexCommon(e,t,i,r){const s=this._color,n=this._haloColor,o=Object(c.b)(0,0,this._referenceSize,this._bitset),a=Object(c.b)(0,0,this._size,this._haloSize)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(s),e.vertexWrite(n),e.vertexWrite(a),e.vertexWrite(o),e.vertexWrite(this._minMaxZoom)}}},1326:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var r=i(1159),s=i(1411)
class n{static getPlacement(e,t,i,n){const o=Object(s.b)(t)
if(!o)return null
const a=Object(r.c)(e)
return o.execute(a,t,i,n)}}},1327:function(e,t,i){"use strict"
i.d(t,"a",(function(){return m}))
var r=i(20),s=i(876),n=i(1144),o=i(1042),a=i(969),l=i(1e3),c=i(891),h=i(937),u=i(939),d=i(1013),f=i(1328),p=i(1119)
class m extends(Object(f.a)(p.a)){constructor(e,t,i,r,s,l,d,f,p,m,y,x,_,g,b,v,O,j,w,S,M,T,I){super(),this.angle=r,this.height=d,this.width=l,this.xOffset=t*w,this.yOffset=i*w,this._markerPlacement=S,this._effects=M,this._anchorX=.5-(.5+v)*b.width/b.width,this._anchorY=.5-(.5+O)*b.height/b.height,this._minMaxZoom=Object(h.a)(Math.round(T*c.w),Math.round(I*c.w))
const C=(g===a.a.MAP?c.i:c.j)|(y?c.g:0)|(_?c.k:0)|(x?c.l:0),R=b&&b.sdf,E=u.d.load(e)
E.sdf=R,E.pattern=!0,E.textureBinding=b.textureBinding,this._materialKey=E.data,this._fillColor=s,this._outlineColor=p,this._sizeOutlineWidth=Object(h.b)(Math.round(Math.min(Math.sqrt(128*l),255)),Math.round(Math.min(Math.sqrt(128*d),255)),Math.round(Math.min(Math.sqrt(128*m),255)),Math.round(Math.min(Math.sqrt(128*f),255)))
const z=b.rect.x+c.A,L=b.rect.y+c.A,F=z+b.width,A=L+b.height
this._offsets.xUpperLeft=z,this._offsets.yUpperLeft=L,this._offsets.xUpperRight=F,this._offsets.yUpperRight=L,this._offsets.xBottomLeft=z,this._offsets.yBottomLeft=A,this._offsets.xBottomRight=F,this._offsets.yBottomRight=A,this._texUpperLeft=Object(h.a)(z,L),this._texUpperRight=Object(h.a)(F,L),this._texBottomLeft=Object(h.a)(z,A),this._texBottomRight=Object(h.a)(F,A),l*=j,d*=j,l*=w,d*=w
const P=Math.round(64*j)
this._bitestAndDistRatio=Object(h.a)(C,P),this._computedWidth=l,this._computedHeight=d
const D=Object(o.a)(),k=Object(n.a)()
this._applyTransformation(k,D)}static fromCIMMarker(e,t,i){const n=t&&t.width||1,o=t&&t.height||1,c=e.size,h=n/o*e.scaleX,u=e.scaleSymbolsProportionally&&e.frameHeight?c/e.frameHeight:1
let f=Object(l.c)(e.color)
const p=Object(l.c)(e.outlineColor),y=Object(s.h)(c),x=y*h,_=Object(s.h)(e.offsetX||0),g=Object(s.h)(e.offsetY||0),b=Object(s.h)(e.outlineWidth||0)*u,v=e.alignment||a.a.SCREEN,O=Object(s.h)(e.referenceSize),[j,w]=Object(d.e)(e.scaleInfo,i)
t.sdf||0!==f||(f=-1)
let S=e.rotation||0
e.rotateClockwise||(S=-S)
let M=0,T=0
const I=e.anchorPoint
I&&(e.isAbsoluteAnchorPoint?c&&(M=-I.x/(c*h),T=I.y/c):(M=I.x,T=I.y))
const C=new m(e.materialKey,_,g,S,f,x,y,O,p,b,e.colorLocked,e.scaleSymbolsProportionally,!1,v,t,M,T,e.sizeRatio,Object(r.u)(e.scaleFactor,1),e.markerPlacement,e.effects,j,w)
return C._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/x:1,C._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/y:1,C}static fromPictureMarker(e,t){const i=Math.round(Object(s.h)(e.width)),r=Math.round(Object(s.h)(e.height)),n=c.z,o=Math.round(Object(s.h)(e.xoffset||0)),l=Math.round(Object(s.h)(e.yoffset||0)),h=new m(e.materialKey,o,l,e.angle,n,i,r,r,0,0,!1,!1,!1,a.a.SCREEN,t,0,0,1,1,null,null,d.b,d.a)
return h._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.width:1,h._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.height:1,h}static fromSimpleMarker(e,t){const i=Object(l.d)(e.color),r=Math.round(Object(s.h)(e.size)),n=r,o=Math.round(Object(s.h)(e.xoffset||0)),c=Math.round(Object(s.h)(e.yoffset||0)),h=e.style,u=e.outline,f=0|(u&&u.color&&Object(l.d)(u.color)),p=0|(u&&u.width&&Math.round(Object(s.h)(u.width))),y=new m(e.materialKey,o,c,e.angle,i,r,n,n,f,p,!1,!1,"esriSMSCross"===h||"esriSMSX"===h,a.a.SCREEN,t,0,0,126/64,1,null,null,d.b,d.a)
return y.boundsType="esriSMSCircle"===h?"circle":"square",y._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.size:1,y._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.size:1,y}static fromLineSymbolMarker(e,t){const i=Object(l.d)(e.color),r=Math.round(Object(s.h)(6*e.lineWidth)),n=r,o="cross"===e.style||"x"===e.style
let c
switch(e.placement){case"begin-end":c=a.e.Both
break
case"begin":c=a.e.JustBegin
break
case"end":c=a.e.JustEnd
break
default:c=a.e.None}const h={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:c,offsetAlongLine:0},u=new m(e.materialKey,0,0,0,i,r,n,n/6,i,o?Math.round(Object(s.h)(e.lineWidth)):0,!1,!1,o,a.a.MAP,t,0,0,126/64,1,h,null,d.b,d.a)
return u.boundsType="circle"===e.style?"circle":"square",u}}},1328:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var r=i(20),s=i(876),n=i(1147),o=i(1144),a=i(919),l=i(1042),c=i(930),h=i(1326),u=i(908),d=i(937)
const f=3.14159265359/180,p=e=>class extends e{constructor(...e){super(...e),this.angle=0,this.xOffset=0,this.yOffset=0,this.width=0,this.height=0,this.boundsType="square",this._anchorX=0,this._anchorY=0,this._computedWidth=0,this._computedHeight=0,this._vertexBoundsScaleX=1,this._vertexBoundsScaleY=1,this._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0},this.geometryType=u.d.MARKER}_write(e,t,i,r){const s=t.getDisplayId()
e.recordStart(s,this._materialKey,this.geometryType,!0),this._writeGeometry(e,t,s,i,r),e.recordEnd()}_writeGeometry(e,t,i,s,n){if(Object(r.k)(this._markerPlacement))return this._writePlacedMarkers(e,t,s,n)
if(!n&&"esriGeometryPoint"===t.geometryType){const r=t.getX(),s=t.getY()
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(r<0||r>=513||s<0||s>=513))return
return this._writeVertices(e,i,this._getPos(r,s),r,s)}const o=n?Object(c.q)(Object(c.d)(n),2):"esriGeometryPolygon"===t.geometryType?t.readCentroid():t.readGeometryForDisplay()
if(!Object(r.j)(o)){if(o.isPoint){const[t,r]=o.coords
if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||r<0||r>=512))return
return this._writeVertices(e,i,this._getPos(t,r),t,r)}o.forEachVertex((t,r)=>this._writeVertices(e,i,this._getPos(t,r),t,r))}}_writePlacedMarkers(e,t,i,n){const a=null!=n?n:t.readLegacyGeometryForDisplay(),c=h.a.getPlacement(a,Object(r.t)(this._markerPlacement),Object(s.h)(1),i.geometryEngine)
if(!c)return
const u=t.getDisplayId(),d=Object(l.a)(),p=Object(o.a)()
let m=c.next()
for(;null!=m;){const t=m.tx,i=-m.ty
t>=-128&&t<=640&&i>=-128&&i<=640&&(this._applyTransformation(p,d,-m.getAngle()/f),this._writeVertices(e,u,this._getPos(t,i),t,i)),m=c.next()}}_writeVertices(e,t,i,r,s){const n=e.vertexCount()
if(this.angle){const t=Math.max(this._computedWidth*this._vertexBoundsScaleX,this._computedHeight*this._vertexBoundsScaleY)
e.vertexBounds(r+this.xOffset,s-this.yOffset,t,t)}else e.vertexBounds(r+this.xOffset,s-this.yOffset,this._computedWidth*this._vertexBoundsScaleX,this._computedHeight*this._vertexBoundsScaleY)
e.vertexWrite(i),e.vertexWrite(this._offsetUpperLeft),e.vertexWrite(this._texUpperLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetUpperRight),e.vertexWrite(this._texUpperRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomLeft),e.vertexWrite(this._texBottomLeft),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.vertexWrite(i),e.vertexWrite(this._offsetBottomRight),e.vertexWrite(this._texBottomRight),e.vertexWrite(this._bitestAndDistRatio),e.vertexWrite(t),e.vertexWrite(this._fillColor),e.vertexWrite(this._outlineColor),e.vertexWrite(this._sizeOutlineWidth),e.vertexWrite(this._minMaxZoom),e.vertexEnd(),e.indexWrite(n+0),e.indexWrite(n+1),e.indexWrite(n+2),e.indexWrite(n+1),e.indexWrite(n+3),e.indexWrite(n+2)}_applyTransformation(e,t,i=0){Object(n.a)(e,Object(l.b)(this.xOffset,-this.yOffset)),this.angle+i!==0&&Object(n.g)(e,e,f*(this.angle+i))
const r=this._computedWidth,s=this._computedHeight,o=(this._anchorX-.5)*r,c=(this._anchorY-.5)*s
Object(a.s)(t,o,c),Object(a.t)(t,t,e),this._offsetUpperLeft=Object(d.a)(16*t[0],16*t[1]),this._offsets.xUpperLeft=t[0],this._offsets.yUpperLeft=t[1],Object(a.s)(t,o+r,c),Object(a.t)(t,t,e),this._offsetUpperRight=Object(d.a)(16*t[0],16*t[1]),this._offsets.xUpperRight=t[0],this._offsets.yUpperRight=t[1],Object(a.s)(t,o,c+s),Object(a.t)(t,t,e),this._offsetBottomLeft=Object(d.a)(16*t[0],16*t[1]),this._offsets.xBottomLeft=t[0],this._offsets.yBottomLeft=t[1],Object(a.s)(t,o+r,c+s),Object(a.t)(t,t,e),this._offsetBottomRight=Object(d.a)(16*t[0],16*t[1]),this._offsets.xBottomRight=t[0],this._offsets.yBottomRight=t[1]}_getPos(e,t){return Object(d.a)(Math.round(8*e),Math.round(8*t))}}},1330:function(e,t,i){"use strict"
i.d(t,"a",(function(){return De})),i.d(t,"b",(function(){return Pe}))
var r=i(354),s=i(177),n=i(861),o=i(1068),a=i(908),l=i(939),c=i(20),h=i(876),u=i(1e3),d=i(891),f=i(1236),p=i(937),m=i(1013),y=i(930),x=(i(1096),i(1291)),_=i(935),g=i(1203),b=i(1444)
function v(e,t,i,r,s,n,o){W=0
const a=(r-i)*n,l=s&&s.length,c=l?(s[0]-i)*n:a
let h,u,d,f,p,m=O(t,i,r,0,c,n,!0)
if(m&&m.next!==m.prev){if(l&&(m=function(e,t,i,r,s,n){const o=new Array
for(let s=0,a=r.length;s<a;s++){const l=O(e,t,i,r[s]*n,s<a-1?r[s+1]*n:i*n,n,!1)
l===l.next&&(l.steiner=!0),o.push(C(l))}o.sort(D)
for(const e of o)R(e,s),s=j(s,s.next)
return s}(t,i,r,s,m,n)),a>80*n){h=d=t[0+i*n],u=f=t[1+i*n]
for(let e=n;e<c;e+=n){const r=t[e+i*n],s=t[e+1+i*n]
h=Math.min(h,r),u=Math.min(u,s),d=Math.max(d,r),f=Math.max(f,s)}p=Math.max(d-h,f-u),p=0!==p?1/p:0}w(m,e,n,h,u,p,o,0)}}function O(e,t,i,r,s,n,o){let a
if(o===function(e,t,i,r,s,n){let o=0
for(let i=r,a=s-n;i<s;i+=n)o+=(e[a+t*n]-e[i+t*n])*(e[i+1+t*n]+e[a+1+t*n]),a=i
return o}(e,t,0,r,s,n)>0)for(let i=r;i<s;i+=n)a=T(i+t*n,e[i+t*n],e[i+1+t*n],a)
else for(let i=s-n;i>=r;i-=n)a=T(i+t*n,e[i+t*n],e[i+1+t*n],a)
return a&&P(a,a.next)&&(I(a),a=a.next),a}function j(e,t=e){if(!e)return e
let i,r=e
do{if(i=!1,r.steiner||!P(r,r.next)&&0!==E(r.prev,r,r.next))r=r.next
else{if(I(r),r=t=r.prev,r===r.next)break
i=!0}}while(i||r!==t)
return t}function w(e,t,i,r,s,n,o,a){if(!e)return
!a&&n&&(e=function e(t,i,r,s){for(let n;n!==t;n=n.next){if(n=n||t,null===n.z&&(n.z=A(n.x,n.y,i,r,s)),n.prev.next!==n||n.next.prev!==n)return n.prev.next=n,n.next.prev=n,e(t,i,r,s)
n.prevZ=n.prev,n.nextZ=n.next}return t.prevZ.nextZ=null,t.prevZ=null,function(e){let t,i=1
for(;;){let r,s=e
e=null,t=null
let n=0
for(;s;){n++,r=s
let o=0
for(;o<i&&r;o++)r=r.nextZ
let a=i
for(;o>0||a>0&&r;){let i
0===o?(i=r,r=r.nextZ,a--):0!==a&&r?s.z<=r.z?(i=s,s=s.nextZ,o--):(i=r,r=r.nextZ,a--):(i=s,s=s.nextZ,o--),t?t.nextZ=i:e=i,i.prevZ=t,t=i}s=r}if(t.nextZ=null,i*=2,n<2)return e}}(t)}(e,r,s,n))
let l=e
for(;e.prev!==e.next;){const c=e.prev,h=e.next
if(n?M(e,r,s,n):S(e))t.push(c.index/i+o),t.push(e.index/i+o),t.push(h.index/i+o),I(e),e=h.next,l=h.next
else if((e=h)===l){a?1===a?w(e=k(e,t,i,o),t,i,r,s,n,o,2):2===a&&B(e,t,i,r,s,n,o):w(j(e),t,i,r,s,n,o,1)
break}}}function S(e){const t=e.prev,i=e,r=e.next
if(E(t,i,r)>=0)return!1
let s=e.next.next
const n=s
let o=0
for(;s!==e.prev&&(0===o||s!==n);){if(o++,L(t.x,t.y,i.x,i.y,r.x,r.y,s.x,s.y)&&E(s.prev,s,s.next)>=0)return!1
s=s.next}return!0}function M(e,t,i,r){const s=e.prev,n=e,o=e.next
if(E(s,n,o)>=0)return!1
const a=s.x<n.x?s.x<o.x?s.x:o.x:n.x<o.x?n.x:o.x,l=s.y<n.y?s.y<o.y?s.y:o.y:n.y<o.y?n.y:o.y,c=s.x>n.x?s.x>o.x?s.x:o.x:n.x>o.x?n.x:o.x,h=s.y>n.y?s.y>o.y?s.y:o.y:n.y>o.y?n.y:o.y,u=A(a,l,t,i,r),d=A(c,h,t,i,r)
let f=e.prevZ,p=e.nextZ
for(;f&&f.z>=u&&p&&p.z<=d;){if(f!==e.prev&&f!==e.next&&L(s.x,s.y,n.x,n.y,o.x,o.y,f.x,f.y)&&E(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,p!==e.prev&&p!==e.next&&L(s.x,s.y,n.x,n.y,o.x,o.y,p.x,p.y)&&E(p.prev,p,p.next)>=0)return!1
p=p.nextZ}for(;f&&f.z>=u;){if(f!==e.prev&&f!==e.next&&L(s.x,s.y,n.x,n.y,o.x,o.y,f.x,f.y)&&E(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;p&&p.z<=d;){if(p!==e.prev&&p!==e.next&&L(s.x,s.y,n.x,n.y,o.x,o.y,p.x,p.y)&&E(p.prev,p,p.next)>=0)return!1
p=p.nextZ}return!0}function T(e,t,i,r){const s=G.create(e,t,i)
return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function I(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function C(e){let t=e,i=e
do{(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next}while(t!==e)
return i}function R(e,t){if(t=function(e,t){let i=t
const r=e.x,s=e.y
let n,o=-1/0
do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){const e=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y)
if(e<=r&&e>o){if(o=e,e===r){if(s===i.y)return i
if(s===i.next.y)return i.next}n=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t)
if(!n)return null
if(r===o)return n.prev
const a=n,l=n.x,c=n.y
let h,u=1/0
for(i=n.next;i!==a;)r>=i.x&&i.x>=l&&r!==i.x&&L(s<c?r:o,s,l,c,s<c?o:r,s,i.x,i.y)&&(h=Math.abs(s-i.y)/(r-i.x),(h<u||h===u&&i.x>n.x)&&F(i,e)&&(n=i,u=h)),i=i.next
return n}(e,t)){const i=V(t,e)
j(i,i.next)}}function E(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function z(e,t,i,r){return!!(P(e,t)&&P(i,r)||P(e,r)&&P(i,t))||E(e,t,i)>0!=E(e,t,r)>0&&E(i,r,e)>0!=E(i,r,t)>0}function L(e,t,i,r,s,n,o,a){return(s-o)*(t-a)-(e-o)*(n-a)>=0&&(e-o)*(r-a)-(i-o)*(t-a)>=0&&(i-o)*(n-a)-(s-o)*(r-a)>=0}function F(e,t){return E(e.prev,e,e.next)<0?E(e,t,e.next)>=0&&E(e,e.prev,t)>=0:E(e,t,e.prev)<0||E(e,e.next,t)<0}function A(e,t,i,r,s){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*s)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*s)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function P(e,t){return e.x===t.x&&e.y===t.y}function D(e,t){return e.x-t.x}function k(e,t,i,r){let s=e
do{const n=s.prev,o=s.next.next
!P(n,o)&&z(n,s,s.next,o)&&F(n,o)&&F(o,n)&&(t.push(n.index/i+r),t.push(s.index/i+r),t.push(o.index/i+r),I(s),I(s.next),s=e=o),s=s.next}while(s!==e)
return s}function B(e,t,i,r,s,n,o){let a=e
do{let e=a.next.next
for(;e!==a.prev;){if(a.index!==e.index&&N(a,e)){let l=V(a,e)
return a=j(a,a.next),l=j(l,l.next),w(a,t,i,r,s,n,o,0),void w(l,t,i,r,s,n,o,0)}e=e.next}a=a.next}while(a!==e)}function N(e,t){return e.next.index!==t.index&&e.prev.index!==t.index&&!function(e,t){let i=e
do{if(i.index!==e.index&&i.next.index!==e.index&&i.index!==t.index&&i.next.index!==t.index&&z(i,i.next,e,t))return!0
i=i.next}while(i!==e)
return!1}(e,t)&&F(e,t)&&F(t,e)&&function(e,t){let i=e,r=!1
const s=(e.x+t.x)/2,n=(e.y+t.y)/2
do{i.y>n!=i.next.y>n&&i.next.y!==i.y&&s<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==e)
return r}(e,t)}function V(e,t){const i=G.create(e.index,e.x,e.y),r=G.create(t.index,t.x,t.y),s=e.next,n=t.prev
return e.next=t,t.prev=e,i.next=s,s.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}class G{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,t,i){const r=W<U.length?U[W++]:new G
return r.index=e,r.x=t,r.y=i,r.prev=null,r.next=null,r.z=null,r.prevZ=null,r.nextZ=null,r.steiner=!1,r}}const U=new Array
let W=0
for(let e=0;e<8096;e++)U.push(new G)
const Z=new b.b(0,0,0,1,0),H=new b.b(0,0,0,1,0)
function q(e,t,i){let r=0
for(let s=1;s<i;s++){const i=e[2*(t+s-1)],n=e[2*(t+s-1)+1]
r+=(e[2*(t+s)]-i)*(e[2*(t+s)+1]+n)}return r}function K(e,t,i,r,s){let n=0
for(let o=i;o<r;o+=3){const i=2*(e[o]-s),r=2*(e[o+1]-s),a=2*(e[o+2]-s)
n+=Math.abs((t[i]-t[a])*(t[r+1]-t[i+1])-(t[i]-t[r])*(t[a+1]-t[i+1]))}return n}Z.setExtent(d.P),H.setExtent(d.P)
var Y=i(969),X=i(942),J=i(1445)
const $=e=>class extends e{constructor(...e){super(...e),this.tessellationProperties={},this._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0},this.geometryType=a.d.LINE}writeGeometry(e,t,i,r){this._writeGeometry(e,t,i,r)}_initializeTessellator(e){const t=l.c.load(this._materialKey),i=l.a.load(this._materialKey),r=this._tessellationOptions,s=t.vvSizeFieldStops||t.vvSizeMinMaxValue||t.vvSizeScaleStops||t.vvSizeUnitValue,n=this.tessellationProperties._halfWidth<d.O&&!e&&!s
this.tessellationProperties.minMaxZoom=this._minMaxZoom,r.wrapDistance=65535,r.textured=this._isDashed||this._hasPattern,r.offset=this.tessellationProperties.offset,r.halfWidth=this.tessellationProperties._halfWidth
const o=n?0:1,a=i.outlinedFill?ee:Q
this._lineTessellator=new J.a(a(this.tessellationProperties,o,o),te(this.tessellationProperties),n)}_write(e,t,i,r){const s="esriGeometryPoint"===t.geometryType
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,s),this._writeGeometry(e,t,r,s),e.recordEnd()}_writeGeometry(e,t,i,r){const s=null!=i?i:t.readLegacyGeometryForDisplay(),n=this._getLines(s,r)
Object(c.j)(n)||this._writeVertices(e,t,n)}_getLines(e,t){if(Object(c.j)(e))return null
const i=e.paths||e.rings
return Object(c.j)(i)?null:function(e,t){H.setPixelMargin(t)
const i=H,r=-t,s=d.P+t
let n=[],o=!1,a=0
for(;a<e.length;){const t=[],l=e[a]
if(!l)return null
i.reset(g.a.LineString)
let[c,h]=l[0]
if(o)i.moveTo(c,h)
else{if(c<r||c>s||h<r||h>s){o=!0
continue}t.push({x:c,y:h})}let u=!1
const d=l.length
for(let e=1;e<d;++e)if(c+=l[e][0],h+=l[e][1],o)i.lineTo(c,h)
else{if(c<r||c>s||h<r||h>s){u=!0
break}t.push({x:c,y:h})}if(u)o=!0
else{if(o){const e=i.resultWithStarts()
if(e)for(const t of e)n.push(t)}else n.push({line:t,start:0})
a++,o=!1}}return n=n.filter(e=>e.line.length>1),0===n.length?null:n}(i,t?256:16)}_writeVertices(e,t,i){const r=t.getDisplayId(),s=e.vertexCount(),n=this.tessellationProperties,o=this._tessellationOptions
n.out=e,n.id=r,n.indexCount=0,n.vertexCount=0,n.offset=s,o.capType=this._capType,o.joinType=this._joinType
const a=l.a.load(this._materialKey)
this.tessellationProperties.key=a.outlinedFill?a:l.c.load(this._materialKey)
for(const{line:e,start:t}of i)o.initialDistance=t%65535,this._lineTessellator.tessellate(e,o)}},Q=(e,t,i)=>(r,s,n,o,a,l,c,h,u,d,f)=>{const m=Object(p.a)(f,Math.ceil(16*e._halfWidth)),y=Object(p.b)(Math.round(16*c),Math.round(16*h),Math.round(16*u),Math.round(16*d)),x=Object(p.b)(16*a,16*l,0,e._bitset),_=e.out
return _.vertexBounds(r,s,t,i),_.vertexWrite(Object(p.a)(8*r,8*s)),_.vertexWrite(e.id),_.vertexWrite(e._fillColor),_.vertexWrite(y),_.vertexWrite(m),_.vertexWrite(e._tl),_.vertexWrite(e._br),_.vertexWrite(x),_.vertexWrite(Object(p.a)(Math.ceil(16*e._halfReferenceWidth),0)),_.vertexWrite(e.minMaxZoom),_.vertexEnd(),e.offset+e.vertexCount++},ee=(e,t,i)=>(r,s,n,o,a,l,c,h,u,d,f)=>{const m=Object(p.b)(0,0,16*e._halfWidth,16*e._halfReferenceWidth),y=Object(p.b)(16*c+128,16*h+128,16*u+128,16*d+128),x=e.out,_=e._bitset<<24|e.id
return x.vertexBounds(r,s,t,i),x.vertexWrite(Object(p.a)(8*r,8*s)),x.vertexWrite(_),x.vertexWrite(e._fillColor),e.key.simple||(x.vertexWrite(0),x.vertexWrite(0)),x.vertexWrite(m),x.vertexWrite(y),e.key.simple||x.vertexWrite(e.minMaxZoom),x.vertexEnd(),e.offset+e.vertexCount++},te=e=>(t,i,r)=>{const s=e.out
s.indexWrite(t),s.indexWrite(i),s.indexWrite(r),e.indexCount+=3}
var ie=i(1119)
const re=s.a.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate")
class se extends($(ie.a)){constructor(e,t,i,r,s,n,o,a,c,h,u,f,y,x,_,g,b,v,O){super()
const j=l.c.load(e)
t&&(j.sdf=t.sdf,j.pattern=!0,j.textureBinding=t.textureBinding),this._capType=r,this._joinType=s,this._miterLimitCosine=Object(m.d)(n),this.tessellationProperties._fillColor=o,this.tessellationProperties._tl=a,this.tessellationProperties._br=c,this._hasPattern=h,this._isDashed=u,this._zOrder=g,this._effects=b,this._minMaxZoom=Object(p.a)(Math.round(v*d.w),Math.round(O*d.w)),this._materialKey=j.data
const w=(y?d.g:0)|(x?d.m:0)|(f?d.h:0)
this.tessellationProperties._bitset=w,this.tessellationProperties._halfWidth=.5*i,this.tessellationProperties._halfReferenceWidth=.5*_,this.tessellationProperties.offset=0,this._initializeTessellator(!1)}static fromCIMLine(e,t,i){const r=e.color,s=e.scaleFactor||1,n=!!e.dashTemplate
let o=e.cap
n&&o===Y.d.ROUND&&(o=Y.d.SQUARE)
const a=e.join,l=Object(h.h)(e.width)*s,c=Object(h.h)(e.referenceWidth),f=Object(h.h)(e.miterLimit),y=r&&Object(u.c)(r)||0,[x,_]=Object(m.e)(e.scaleInfo,i)
if(!t)return new se(e.materialKey,t,l,o,a,f,y,0,0,!1,n,e.scaleDash,e.colorLocked,!1,c,e.zOrder,e.effects,x,_)
const{rect:g,width:b,height:v}=t,O=g.x+d.A,j=g.y+d.A,w=O+b,S=j+v,M=Object(p.a)(O,j),T=Object(p.a)(w,S)
return new se(e.materialKey,t,l,o,a,f,y,M,T,!0,n,e.scaleDash,e.colorLocked,!1,c,e.zOrder,e.effects,x,_)}static fromFillOutline(e){var t
return e.isOutlinedFill&&e.outline&&"esriSLSSolid"===(null==(t=e.outline)?void 0:t.style)?se.fromSimpleLine({hash:"",materialKey:e.materialKey,...e.outline},null,!0):null}static fromSimpleLine(e,t,i=!1){const{color:r}=e,s="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,n=Object(X.i)(e.cap||"round"),o=Object(X.j)(e.join||"round")
let a=r&&"esriSLSNull"!==e.style&&Object(u.d)(r)||0
"esriSLSNull"===e.style&&(a=0)
const l=Object(h.h)(e.width),c=e.miterLimit
if(!t)return new se(e.materialKey,t,l,n,o,c,a,0,0,!1,s,!0,!1,i,l,0,null,m.b,m.a)
const{rect:f,width:y,height:x}=t,_=f.x+d.A,g=f.y+d.A,b=_+y,v=g+x,O=Object(p.a)(_,g),j=Object(p.a)(b,v)
return new se(e.materialKey,t,l,n,o,c,a,O,j,!0,s,!0,!1,i,l,0,null,m.b,m.a)}static fromPictureLineSymbol(e,t,i,r){return re.error("PictureLineSymbol support does not exist!"),null}}const ne=e=>class extends e{constructor(...e){super(...e),this.forceLibtess=!1,this._bitset=0,this._lineTemplate=null,this.geometryType=a.d.FILL}_maybeAddLineTemplate(e){this._lineTemplate=se.fromFillOutline(e)}_write(e,t,i,r){const s="esriGeometryPoint"===t.geometryType,n=l.a.load(this._materialKey)
e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,s),this._writeGeometry(e,t,n,r,s),n.outlinedFill&&Object(c.k)(this._lineTemplate)&&this._lineTemplate.writeGeometry(e,t,r,s),e.recordEnd()}_writeGeometry(e,t,i,r,s){const n=this._getGeometry(t,r,s)
if(Object(c.j)(n))return
const o=[]
if(!(n.maxLength>100)&&!this.forceLibtess&&function(e,t){const{coords:i,lengths:r,hasIndeterminateRingOrder:s}=t,n=e
if(s)return!1
let o=0
for(let e=0;e<r.length;){let t=e,s=r[e],a=q(i,o,s)
const l=[]
for(;++t<r.length;){const e=r[t],n=q(i,o+s,e)
if(!(n>0))break
a+=n,l.push(o+s),s+=e}const c=n.length
v(n,i,o,o+s,l,2,0)
const h=K(n,i,c,n.length,0),u=Math.abs(a)
if(Math.abs((h-u)/Math.max(1e-7,u))>1e-5)return n.length=0,!1
e=t,o+=s}return!0}(o,n))return void(o.length&&this._writeVertices(e,t,n.coords,n.lengths,i,o))
const a=function(e){const{coords:t,lengths:i}=e,{buffer:r}=Object(x.b)(t,i)
return r}(n)
this._writeVertices(e,t,a,[a.length/2],i)}_writeVertex(e,t,i,r,s,n){const o=Object(p.a)(1*r,1*s)
e.vertexBounds(r,s,0,0),e.vertexWrite(o),e.vertexWrite(t),i.dotDensity?e.vertexWriteF32(1/Math.abs(n.readGeometryArea())):(e.vertexWrite(this.fillColor),i.simple||(e.vertexWrite(this.tl),e.vertexWrite(this.br)),e.vertexWrite(this.aux2),e.vertexWrite(this.aux3),i.simple||e.vertexWrite(this._minMaxZoom))}_writeVertices(e,t,i,r,s,n){const o=t.getDisplayId(),a=this._bitset<<24|o,l=r.reduce((e,t)=>e+t),c=s.dotDensity?4:10,h=e.vertexCount()
e.vertexEnsureSize(c*l)
let u=0
if(n)for(const r of n){const n=i[2*r],o=i[2*r+1]
this._writeVertex(e,a,s,n,o,t),u++}else for(let r=0;r<i.length;r+=2){const n=Math.round(i[r]),o=Math.round(i[r+1])
this._writeVertex(e,a,s,n,o,t),u++}e.indexEnsureSize(u)
for(let t=0;t<u;t++)e.indexWrite(t+h)}_getGeometry(e,t,i){const r=t?Object(y.q)(Object(y.d)(t),2):e.readGeometryForDisplay()
return r?function(e,t){if(Object(c.j)(e))return null
if(!function(e,t,i){let r=0
for(let t=0;t<e.lengths.length;t++){const s=e.lengths[t]
for(let t=0;t<s;t++){const s=e.coords[2*(t+r)],n=e.coords[2*(t+r)+1]
if(s<-128||s>i||n<-128||n>i)return!0}r+=s}return!1}(e,0,d.P+128))return e
Z.setPixelMargin(t),Z.reset(g.a.Polygon)
let i=0
for(let t=0;t<e.lengths.length;t++){const r=e.lengths[t]
let s=e.coords[2*(0+i)],n=e.coords[2*(0+i)+1]
Z.moveTo(s,n)
for(let t=1;t<r;t++)s=e.coords[2*(t+i)],n=e.coords[2*(t+i)+1],Z.lineTo(s,n)
Z.close(),i+=r}const r=Z.result(!1)
if(!r)return null
const s=[],n=[]
for(const e of r){let t=0
for(const i of e)n.push(i.x),n.push(i.y),t++
s.push(t)}return new _.a(s,n)}(r,i?256:8):null}}
var oe=i(1302),ae=i(1149)
const le=s.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate")
class ce extends ie.a{constructor(e){super(),this._ongoingMaterialRequestMap=new Map,this._materialCache=new Map,this._dynamicPropertyMap=new Map,this._cimLayer=e}analyze(e,t,i,r,s){if(s&&0===s.length)return null
const n=s&&s.length>0,o=t.readLegacyFeature(),a=this._materialCache,l=this._cimLayer.materialHash
if(!l)return le.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null)
const c="function"==typeof l?l(o,i,r):l
if(a.has(c)){const e=a.get(c)
return Promise.resolve(e)}const h=this._ongoingMaterialRequestMap.get(c)
if(h)return h
const u=this._cimLayer,d=Object(oe.a)(u.cim,this._cimLayer.materialOverrides)
d.mosaicHash=c
const{type:f,url:p}=u,m={cim:d,type:f,mosaicHash:c,url:p,size:null,dashTemplate:null,text:null,fontName:null}
switch(f){case"marker":m.size=Object(ae.d)(u.size,o,i,r)
break
case"line":m.dashTemplate=u.dashTemplate
break
case"text":m.text=Object(ae.d)(u.text,o,i,r),m.fontName=Object(ae.d)(u.fontName,o,i,r)}const y=e.getMosaicItem(m,s).then(e=>(n||(this._ongoingMaterialRequestMap.delete(c),a.set(c,e)),e)).catch(e=>(this._ongoingMaterialRequestMap.delete(c),le.error(".analyze()",e.message),null))
return n||this._ongoingMaterialRequestMap.set(c,y),y}}var he=i(1153)
class ue extends(ne(ce)){constructor(e,t,i){var r
if(super(e),this._minMaxZoom=Object(p.a)(Math.round(t*d.w),Math.round(i*d.w)),Object(m.f)(e.color)){const t=(t,i,r)=>{const s=e.color(t,i,r)
return s&&Object(u.c)(s)||0}
this._dynamicPropertyMap.set("fillColor",t)}else{const t=e.color
this.fillColor=t&&Object(u.c)(t)||0}const s="CIMMarkerPlacementInsidePolygon"===(null==(r=e.cim.placement)?void 0:r.type)&&e.cim.placement.shiftOddRows?2:1,n=e.height
if(Object(m.f)(n)){const e=(e,t,i)=>n(e,t,i)*s
this._dynamicPropertyMap.set("_height",e)}else this._height=(n||0)*s
const o=e.offsetX
if(Object(m.f)(o)){const e=(e,t,i)=>{let r=Object(h.h)(o(e,t,i))+128
return r>255?r=255:r<0&&(r=0),r}
this._dynamicPropertyMap.set("_offsetX",e)}else{let e=Object(h.h)(o||0)+128
e>255?e=255:e<0&&(e=0),this._offsetX=e}const a=e.offsetY
if(Object(m.f)(a)){const e=(e,t,i)=>{let r=Object(h.h)(-a(e,t,i))+128
return r>255?r=255:r<0&&(r=0),r}
this._dynamicPropertyMap.set("_offsetY",e)}else{let e=Object(h.h)(-a||0)+128
e>255?e=255:e<0&&(e=0),this._offsetY=e}const y=e.scaleX
Object(m.f)(y)?this._dynamicPropertyMap.set("_scaleX",y):this._scaleX=y||1
const x=e.angle
if(Object(m.f)(x)){const e=(e,t,i)=>Object(f.d)(x(e,t,i))
this._dynamicPropertyMap.set("_angle",e)}else this._angle=Object(f.d)(x)||0
if(Object(c.k)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}this._cimFillLayer=e,this._fillMaterialKey=l.a.load(e.materialKey)}static fromCIMFill(e,t){const[i,r]=Object(m.e)(e.scaleInfo,t)
return new ue(e,i,r)}bindFeature(e,t,i){const r=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,s)=>{this[s]=e(r,t,i)})
const s=this._fillMaterialKey,n=this._materialCache,o=(0,this._cimFillLayer.materialHash)(r,t,i),a=n.get(o)
let l=null
if(a&&Object(he.a)(a.spriteMosaicItem)&&(l=a.spriteMosaicItem),l){const{rect:e,width:t,height:i}=l,r=e.x+d.A,n=e.y+d.A,o=r+t,a=n+i
let c=Math.round(Object(h.h)(this._height))
c>255?c=255:c<=0&&(c=a-n)
let u=Math.round(Object(h.h)(this._height/i*t||0))
u>255?u=255:u<=0&&(u=o-r)
const f=this._scaleX,m=1
this.tl=Object(p.a)(r,n),this.br=Object(p.a)(o,a),this.aux2=Object(p.b)(u,c,this._offsetX,this._offsetY),this.aux3=Object(p.b)(f,m,this._angle,0),s.sdf=l.sdf,s.pattern=!0,s.textureBinding=l.textureBinding}else this.tl=0,this.br=0,this.aux2=0,this.aux3=0,s.sdf=!1,s.pattern=!1,s.textureBinding=0
this._materialKey=s.data}}class de extends($(ce)){constructor(e,t,i){super(e),this._minMaxZoom=Object(p.a)(Math.round(t*d.w),Math.round(i*d.w)),this._cimLineLayer=e
let r=0
Object(m.f)(e.width)||(r=.5*Object(h.h)(e.width)),this._dynamicPropertyMap.set("_halfWidth",(t,i,s)=>Object(m.f)(e.width)?.5*Object(h.h)(e.width(t,i,s)):r),Object(m.f)(e.cap)?this._dynamicPropertyMap.set("_capType",e.cap):this._capType=e.cap,Object(m.f)(e.join)?this._dynamicPropertyMap.set("_joinType",e.join):this._joinType=e.join
const s=e.color
if(Object(m.f)(s)){const e=(e,t,i)=>Object(u.c)(s(e,t,i))
this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=s&&Object(u.c)(s)||0
const n=e.miterLimit
if(Object(m.f)(n)){const e=(e,t,i)=>Object(m.d)(n(e,t,i))
this._dynamicPropertyMap.set("_miterLimitCosine",e)}else this._miterLimitCosine=Object(m.d)(n)
if(Object(c.k)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}this._scaleFactor=e.scaleFactor||1,this._isDashed=null!=e.dashTemplate,this.tessellationProperties._bitset=(e.colorLocked?1:0)|(e.scaleDash?1:0)<<1,this._materialKey=e.materialKey,this._initializeTessellator(!0)}static fromCIMLine(e,t){const[i,r]=Object(m.e)(e.scaleInfo,t)
return new de(e,i,r)}bindFeature(e,t,i){const r=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,s)=>{this[s]=e(r,t,i)}),this._halfWidth*=this._scaleFactor
const s=this._materialCache,n=(0,this._cimLineLayer.materialHash)(r,t,i),o=s.get(n)
let a=null
if(o&&Object(he.a)(o.spriteMosaicItem)&&(a=o.spriteMosaicItem),a){this._hasPattern=!0
const{rect:e,width:t,height:i}=a,r=e.x+d.A,s=e.y+d.A,n=r+t,o=s+i
this.tessellationProperties._tl=Object(p.a)(r,s),this.tessellationProperties._br=Object(p.a)(n,o)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0
this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties.offset=0,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth
const c=l.c.load(this._materialKey)
a&&(c.sdf=a.sdf,c.pattern=!0,c.textureBinding=a.textureBinding),this._materialKey=c.data}}var fe=i(1144),pe=i(1042),me=i(1328)
const ye=Object(pe.a)(),xe=Object(fe.a)(),_e=s.a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate")
class ge extends(Object(me.a)(ce)){constructor(e,t,i){super(e),this._cimMarkerLayer=e,this._minMaxZoom=Object(p.a)(Math.round(t*d.w),Math.round(i*d.w))
const r=e.color
if(Object(m.f)(r)){const e=(e,t,i)=>Object(u.c)(r(e,t,i))
this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=Object(u.c)(r)
const s=e.outlineColor
if(Object(m.f)(s)){const e=(e,t,i)=>Object(u.c)(s(e,t,i))
this._dynamicPropertyMap.set("_outlineColor",e)}else this._outlineColor=Object(u.c)(s)
const n=e.size
if(Object(m.f)(n)){const e=(e,t,i)=>Object(h.h)(n(e,t,i))
this._dynamicPropertyMap.set("_size",e)}else this._size=Object(h.h)(n)||0
const o=e.scaleX
Object(m.f)(o)?this._dynamicPropertyMap.set("_scaleX",o):this._scaleX=o||1
const a=e.offsetX
if(Object(m.f)(a)){const e=(e,t,i)=>Object(h.h)(a(e,t,i))
this._dynamicPropertyMap.set("xOffset",e)}else this.xOffset=Object(h.h)(a)||0
const l=e.offsetY
if(Object(m.f)(l)){const e=(e,t,i)=>Object(h.h)(l(e,t,i))
this._dynamicPropertyMap.set("yOffset",e)}else this.yOffset=Object(h.h)(l)||0
const f=e.outlineWidth
if(Object(m.f)(f)){const e=(e,t,i)=>Object(h.h)(f(e,t,i))
this._dynamicPropertyMap.set("_outlineWidth",e)}else this._outlineWidth=Object(h.h)(f)||0
const y=e.rotation
if(Object(m.f)(y)?this._dynamicPropertyMap.set("_angle",y):this._angle=y||0,Object(c.k)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.k)(e.markerPlacement)){const t=e.markerPlacement
Object(m.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._markerPlacement=t}this._scaleFactor=Object(c.u)(e.scaleFactor,1),this._bitSet=(e.alignment===Y.a.MAP?1:0)|(e.colorLocked?1:0)<<1|(e.scaleSymbolsProportionally?1:0)<<3,this._materialKey=e.materialKey}static fromCIMMarker(e,t){const[i,r]=Object(m.e)(e.scaleInfo,t)
return new ge(e,i,r)}bindFeature(e,t,i){const s=e.readLegacyFeature()
this._dynamicPropertyMap.forEach((e,r)=>{this[r]=e(s,t,i)})
const n=this._cimMarkerLayer.materialHash,o="function"==typeof n?n(s,t,i):n,a=this._materialCache.get(o)
if(!a||!Object(he.a)(a.spriteMosaicItem)||!a.spriteMosaicItem)return void _e.error(new r.a("mapview-cim","Encountered an error when binding feature"))
const c=a.spriteMosaicItem,u=this._cimMarkerLayer.sizeRatio,f=c.width/c.height*this._scaleX,m=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle
let y=this._size,x=y*f
const _=this.xOffset,g=this.yOffset
this.xOffset*=this._scaleFactor,this.yOffset*=this._scaleFactor
const b=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/Object(h.h)(this._cimMarkerLayer.frameHeight):1,v=this._outlineWidth*b,O=Object(h.h)(this._cimMarkerLayer.referenceSize)
let j=0,w=0
const S=this._cimMarkerLayer.anchorPoint
S&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(j=-S.x/(this._size*f),w=S.y/this._size):(j=S.x,w=S.y)),this._sizeOutlineWidth=Object(p.b)(Math.round(Math.min(Math.sqrt(128*x),255)),Math.round(Math.min(Math.sqrt(128*y),255)),Math.round(Math.min(Math.sqrt(128*v),255)),Math.round(Math.min(Math.sqrt(128*O),255))),this.angle=m
const M=Math.round(64*u)
this._bitestAndDistRatio=Object(p.a)(this._bitSet,M)
const T=c.rect.x+d.A,I=c.rect.y+d.A,C=T+c.width,R=I+c.height
this._texUpperLeft=Object(p.a)(T,I),this._texUpperRight=Object(p.a)(C,I),this._texBottomLeft=Object(p.a)(T,R),this._texBottomRight=Object(p.a)(C,R)
const E=l.d.load(this._materialKey)
E.sdf=c.sdf,E.pattern=!0,E.textureBinding=c.textureBinding,this._materialKey=E.data,this._anchorX=.5-(.5+j)*c.width/c.width,this._anchorY=.5-(.5+w)*c.height/c.height,x*=u,y*=u,x*=this._scaleFactor,y*=this._scaleFactor,x*=c.rect.width/c.width,y*=c.rect.height/c.height,this._computedWidth=x,this._computedHeight=y,this._applyTransformation(xe,ye),this.xOffset=_,this.yOffset=g}}var be=i(1152),ve=i(1325),Oe=i(1311)
class je extends(Object(ve.a)(ce)){constructor(e,t,i){super(e),this._horizontalAlignment="center",this._verticalAlignment="middle",this._textToGlyphs=new Map,this._minMaxZoom=Object(p.a)(Math.round(t*d.w),Math.round(i*d.w))
const r=e.scaleFactor||1
this._cimTextLayer=e
const s=e.color
if(Object(m.f)(s)){const e=(e,t,i)=>Object(u.c)(s(e,t,i))
this._dynamicPropertyMap.set("_color",e)}else this._color=Object(u.c)(s)
const n=e.outlineColor
if(Object(m.f)(n)){const e=(e,t,i)=>Object(u.c)(n(e,t,i))
this._dynamicPropertyMap.set("_haloColor",e)}else this._haloColor=Object(u.c)(n)
let o,a,f
if(Object(m.f)(e.size)||(o=Math.min(Math.round(Object(h.h)(e.size*e.sizeRatio)),127)),this._dynamicPropertyMap.set("_size",(t,i,r)=>Object(m.f)(e.size)?Math.min(Math.round(Object(h.h)(e.size(t,i,r)*e.sizeRatio)),127):o),Object(m.f)(e.outlineSize)){const t=(t,i,r)=>Math.min(Math.floor(5*Object(h.h)(e.outlineSize(t,i,r)*e.sizeRatio)),127)
this._dynamicPropertyMap.set("_haloSize",t)}else this._haloSize=Math.min(Math.floor(5*Object(h.h)(e.outlineSize*e.sizeRatio)),127)
if(Object(m.f)(e.offsetX)||(a=Math.round(Object(h.h)(e.offsetX*e.sizeRatio))),this._dynamicPropertyMap.set("_xOffset",(t,i,r)=>Object(m.f)(e.offsetX)?Math.round(Object(h.h)(e.offsetX(t,i,r)*e.sizeRatio)):a),Object(m.f)(e.offsetY)||(f=Math.round(Object(h.h)(e.offsetY*e.sizeRatio))),this._dynamicPropertyMap.set("_yOffset",(t,i,r)=>Object(m.f)(e.offsetY)?Math.round(Object(h.h)(e.offsetY(t,i,r)*e.sizeRatio)):f),Object(m.f)(e.angle)?this._dynamicPropertyMap.set("_angle",e.angle):this._angle=e.angle,Object(m.f)(e.horizontalAlignment)?this._dynamicPropertyMap.set("_horizontalAlignment",e.horizontalAlignment):this._horizontalAlignment=e.horizontalAlignment,Object(m.f)(e.verticalAlignment)?this._dynamicPropertyMap.set("_verticalAlignment",e.verticalAlignment):this._verticalAlignment=e.verticalAlignment,Object(c.k)(e.effects)){const t=e.effects
Object(m.f)(t)?this._dynamicPropertyMap.set("_effects",t):this._effects=t}if(Object(c.k)(e.markerPlacement)){const t=e.markerPlacement
Object(m.f)(t)?this._dynamicPropertyMap.set("_markerPlacement",t):this._textPlacement=t}Object(m.f)(e.text)?this._dynamicPropertyMap.set("_text",e.text):this._text=e.text,this._scaleFactor=r
const y=Math.min(Math.round(Object(h.h)(e.referenceSize*e.sizeRatio)),127)
this._referenceSize=Math.round(Math.sqrt(256*y)),this._materialKey=e.materialKey
const x=l.f.load(this._materialKey)
x.sdf=!0,this._bitset=(e.alignment===Y.a.MAP?1:0)|(e.colorLocked?1:0)<<1,this._materialKey=x.data,this._decoration="none",this._lineHeight=1,this._lineWidth=512,this._isCIM=!0}static fromCIMText(e,t){const[i,r]=Object(m.e)(e.scaleInfo,t)
return new je(e,i,r)}async analyze(e,t,i,r){const s=t.readLegacyFeature(),n=function(e,t,i,r){return"string"==typeof e.text?e.text:"function"==typeof e.text?e.text(t,i,r):""}(this._cimTextLayer,s,i,r),o=await super.analyze(e,t,i,r,Object(Oe.a)(n))
return o&&o.glyphMosaicItems&&this._textToGlyphs.set(n,o.glyphMosaicItems),o}bindFeature(e,t,i){const r=e.readLegacyFeature()
if(this._dynamicPropertyMap.forEach((e,s)=>{this[s]=e(r,t,i)}),!this._text||0===this._text.length)return void(this._shapingInfo=null)
this._size*=this._scaleFactor,this._scale=this._size/d.r,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=Object(be.e)(this._horizontalAlignment||"center"),this._yAlignD=Object(be.g)(this._verticalAlignment||"baseline")
const s=this._textToGlyphs.get(this._text)
this.bindTextInfo(s,!1)}}class we extends(ne(ie.a)){constructor(e,t,i,r,s,n,o,a,c,h,u,f,m,y,x,_){super(),this._effects=y
const g=l.a.load(e)
t&&(g.sdf=t.sdf,g.pattern=!0,g.textureBinding=t.textureBinding),this.fillColor=i,this.tl=r,this.br=s,this.aux2=Object(p.b)(n,o,a,c),this.aux3=Object(p.b)(h,u,f,0),this._bitset=m,this._minMaxZoom=Object(p.a)(Math.round(x*d.w),Math.round(_*d.w)),this._materialKey=g.data}static fromCIMFill(e,t,i){const r=e.color,s=r&&Object(u.c)(r)||0,n=e.materialKey,[o,a]=Object(m.e)(e.scaleInfo,i)
if(!t)return new we(n,null,s,0,0,0,0,0,0,0,0,0,e.colorLocked?d.g:0,e.effects,o,a)
const{rect:l,width:c,height:y}=t,x=e.scaleX||1,_=l.x+d.A,g=l.y+d.A,b=_+c,v=g+y,O=e.height,j=x*O
let w=Math.round(O)
w>255?w=255:w<=0&&(w=v-g)
let S=Math.round(j)
S>255?S=255:S<=0&&(S=b-_)
let M=Object(h.h)(e.offsetX||0)+128
M>255&&(M=255)
let T=Object(h.h)(-e.offsetY||0)+128
T>255&&(T=255)
const I=Object(p.a)(_,g),C=Object(p.a)(b,v)
return new we(n,t,s,I,C,S,w,M,T,128,128,Object(f.b)(e.angle),e.colorLocked?d.g:0,e.effects,o,a)}static fromSimpleFill(e,t,i=!1){const{color:r}=e,s=r&&"esriSFSNull"!==e.style&&Object(u.d)(r)||0,n=i?d.g:0,o=e.materialKey
let a
if(t){const{rect:e,width:i,height:r}=t,l=e.x+d.A,c=e.y+d.A,h=l+i,u=c+r,f=Object(p.a)(l,c),y=Object(p.a)(h,u)
a=new we(o,t,s,f,y,i,r,0,0,128,128,0,n,null,m.b,m.a)}else a=new we(o,null,s,0,0,0,0,0,0,0,0,0,n,null,m.b,m.a)
return a._maybeAddLineTemplate(e),a}static fromPictureFill(e,t,i=!1){const r=d.z,{rect:s,width:n,height:o}=t,a=s.x+d.A,l=s.y+d.A,c=a+n,u=l+o,f=Object(p.a)(a,l),y=Object(p.a)(c,u)
let x=Math.round(Object(h.h)(e.width))
x>255&&(x=255)
let _=Math.round(Object(h.h)(e.height))
_>255&&(_=255)
let g=Object(h.h)(e.xoffset)+128
g>255&&(g=255)
let b=Object(h.h)(-e.yoffset)+128
b>255&&(b=255)
const v=e.materialKey,O=i?d.g:0,j=new we(v,t,r,f,y,x,_,g,b,128*e.xscale,128*e.yscale,0,O,null,m.b,m.a)
return j._maybeAddLineTemplate(e),j}}var Se=i(1327),Me=i(1324)
class Te{constructor(){this._resolver=null}isHeld(){return!!this._resolver}async acquire(){if(!this._resolver)return this._resolver=Object(n.g)(),Promise.resolve()
await this._resolver.promise,await this.acquire()}release(){const e=this._resolver
this._resolver=null,e.resolve()}}var Ie=i(1160)
const Ce=s.a.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),Re=new Array,Ee={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:0},ze={...o.g,hash:JSON.stringify(o.g),materialKey:Object(l.g)(a.d.MARKER,Ee)},Le={...o.i,hash:JSON.stringify(o.i),materialKey:Object(l.g)(a.d.LINE,Ee)},Fe={...o.h,hash:JSON.stringify(o.h),materialKey:Object(l.g)(a.d.FILL,Ee)}
function Ae(e,t){const i=e.length
return e.push(null),t.then(t=>e[i]=t),e}function Pe(e){return!!(1&e)}class De{constructor(e,t){this._idCounter=1,this._templateIdCounter=1,this._idToTemplateGroup=new Map,this._symbolToTemplate=new Map,this._fetchQueue=[],this._idToResolver=new Map,this._cimTemplateCache=new Map,this._cimAnalyses=[],this._lock=new Te,this._fetchResource=e,this._tileInfo=t}get _markerError(){return this._errorTemplates.marker[0]}get _fillError(){return this._errorTemplates.fill[0]}get _lineError(){return this._errorTemplates.line[0]}get _textError(){return this._errorTemplates.line[0]}createTemplateGroup(e,t){this._initErrorTemplates()
const i=e.hash
if(this._symbolToTemplate.has(i))return this._symbolToTemplate.get(i)
const r=new Array
t&&this._createMeshTemplates(r,t,!0),this._createMeshTemplates(r,e,!1)
const s=this._createGroupId("expanded-cim"===e.type&&ke(e))
return this._idToTemplateGroup.set(s,r),this._symbolToTemplate.set(i,s),s}getTemplateGroup(e){return this._idToTemplateGroup.has(e)?this._idToTemplateGroup.get(e):Re}getDynamicTemplateGroup(e){return this._idToTemplateGroup.has(e)?(Pe(e)||Ce.error("mapview-template-store",`Id ${e} does not refer to a dynamic template`),this._idToTemplateGroup.get(e)):Re}getMosaicItem(e,t){const i=this._createTemplateId(),r=new Promise(e=>this._idToResolver.set(i,e))
return this._fetchQueue.push({symbol:e,id:i,glyphIds:t}),r}finalize(e){return this._fetchQueue.length||this._lock.isHeld()?async function(e,t,i){try{await e.acquire(),await t(i),e.release()}catch(t){throw e.release(),t}}(this._lock,this._fetchAllQueuedResources.bind(this),e):Promise.resolve()}_initErrorTemplates(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],Fe,!1),marker:this._createMeshTemplates([],ze,!1),line:this._createMeshTemplates([],Le,!1)})}_fetchAllQueuedResources(e){if(!this._fetchQueue.length)return Promise.resolve()
const t=this._fetchQueue,i=this._cimAnalyses
return this._fetchQueue=[],this._cimAnalyses=[],Promise.all(i).then(()=>this._fetchResource(t,e).then(e=>{for(const{id:t,mosaicItem:i}of e)this._idToResolver.get(t)(i),this._idToResolver.delete(t)})).catch(e=>{Object(n.m)(e)?this._fetchQueue=this._fetchQueue.concat(t):"worker:port-closed"===e.name||Ce.error(new r.a("mapview-template-store","Unable to fetch requested texture resources",e))})}_createGroupId(e){return this._idCounter++<<1|(e?1:0)}_createTemplateId(){return this._templateIdCounter++}async _createSMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(he.a)(t,Ce)?Se.a.fromSimpleMarker(e,t):this._markerError}async _createPMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(he.a)(t,Ce)?Se.a.fromPictureMarker(e,t):this._markerError}async _createSFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(he.a)(i,Ce)?we.fromSimpleFill(e,i,t):this._fillError}async _createPFS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(he.a)(i,Ce)?we.fromPictureFill(e,i,t):this._fillError}async _createSLS(e,t){const{spriteMosaicItem:i}=await this.getMosaicItem(e)
return Object(he.a)(i,Ce)?se.fromSimpleLine(e,i):this._lineError}async _createLMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e)
return Object(he.a)(t,Ce)?Se.a.fromLineSymbolMarker(e,t):this._markerError}async _createTS(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e)
return Me.a.fromText(e,t)}async _createCIMText(e){const{glyphMosaicItems:t}=await this.getMosaicItem(Object(Ie.a)(e),Object(Oe.a)(e.text))
return Object(he.a)(t,Ce)?Me.a.fromCIMText(e,t,this._tileInfo):this._textError}async _createCIMFill(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Ie.a)(e))
return Object(he.a)(t,Ce)?we.fromCIMFill(e,t,this._tileInfo):this._fillError}async _createCIMLine(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Ie.a)(e))
return Object(he.a)(t,Ce)?se.fromCIMLine(e,t,this._tileInfo):this._lineError}async _createCIMMarker(e){const{spriteMosaicItem:t}=await this.getMosaicItem(Object(Ie.a)(e))
return Object(he.a)(t,Ce)?Se.a.fromCIMMarker(e,t,this._tileInfo):this._markerError}async _createCIM(e){const t=e.templateHash
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
switch(e.type){case"marker":i=ge.fromCIMMarker(e,this._tileInfo)
break
case"line":i=de.fromCIMLine(e,this._tileInfo)
break
case"fill":i=ue.fromCIMFill(e,this._tileInfo)
break
case"text":i=je.fromCIMText(e,this._tileInfo)}return this._cimTemplateCache.set(t,i),i}_createPrimitiveMeshTemplates(e,t,i){switch(t.type){case"esriSMS":return Ae(e,this._createSMS(t))
case"esriPMS":return Ae(e,this._createPMS(t))
case"esriSFS":return Ae(e,this._createSFS(t,i))
case"line-marker":return Ae(e,this._createLMS(t))
case"esriPFS":return Ae(e,this._createPFS(t,i))
case"esriSLS":return Ae(e,this._createSLS(t,!1))
case"esriTS":return Ae(e,this._createTS(t))
default:return Ce.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),e}}_createMeshTemplates(e,t,i){if(-1!==t.type.indexOf("3d"))return Ce.error("3D symbols are not supported with MapView"),e
if("expanded-cim"===t.type){for(const i of t.layers)"function"==typeof i.materialHash?Ae(e,this._createDynamicCIM(i)):Ae(e,this._createCIM(i))
return e}if("composite-symbol"===t.type){for(const r of t.layers)this._createPrimitiveMeshTemplates(e,r,i)
return e}return"cim"===t.type||"label"===t.type||"web-style"===t.type?e:this._createPrimitiveMeshTemplates(e,t,i)}}const ke=e=>{if(!e.layers)return!1
for(const t of e.layers)if("function"==typeof t.materialHash)return!0
return!1}},1331:function(e,t,i){"use strict"
i.d(t,"a",(function(){return I}))
var r=i(856),s=i(878),n=i(1072),o=i(354),a=i(892),l=i(858),c=(i(353),i(77),i(859),i(857)),h=i(1290),u=i(860)
i(177),i(962)
let d=class extends u.a{}
d=Object(r.a)([Object(c.a)("esri.views.layers.support.ClipArea")],d)
const f=d
var p
let m=p=class extends f{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new p({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}}
Object(r.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),Object(r.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),Object(r.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),Object(r.a)([Object(l.b)({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],m.prototype,"version",null),m=p=Object(r.a)([Object(c.a)("esri.views.layers.support.ClipRect")],m)
const y=m
i(870)
var x,_=i(875),g=i(869),b=i(658),v=i(661)
const O={base:_.a,key:"type",typeMap:{extent:b.default,polygon:v.default}}
let j=x=class extends f{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new x({geometry:this.geometry.clone()})}}
Object(r.a)([Object(l.b)({types:O,json:{read:g.a,write:!0}})],j.prototype,"geometry",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],j.prototype,"version",null),j=x=Object(r.a)([Object(c.a)("esri.views.layers.support.Geometry")],j)
const w=j
let S=class extends f{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}}
Object(r.a)([Object(l.b)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],S.prototype,"version",null),S=Object(r.a)([Object(c.a)("esri.views.layers.support.Path")],S)
const M=S,T=s.a.ofType({key:"type",base:f,typeMap:{rect:y,path:M,geometry:w}}),I=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new T,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var e,t,i,r
const s=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(i=this.view)?void 0:i.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(a.e)(()=>this.suspended,e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},a.d),Object(a.e)(()=>{var e,t
return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1},e=>{this.container&&(this.container.opacity=e)},a.d),Object(a.e)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",e=>{this.container&&(this.container.blendMode=e)},a.d),Object(a.e)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,e=>{this.container&&(this.container.effect=e)},a.d),Object(a.b)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),null!=(r=this.view)&&r.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e
const t=null==(e=this.view)?void 0:e.spatialReference
return null==t||this.supportsSpatialReference(t)}get updating(){var e
return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null
if(!t)return!0
const{minScale:i,maxScale:r}=t
return(0===i||e<=i)&&(0===r||e>=r)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale
return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}}
return Object(r.a)([Object(l.b)()],t.prototype,"attached",void 0),Object(r.a)([Object(l.b)({type:T,set(e){const t=Object(n.b)(e,this._get("clips"),T)
this._set("clips",t)}})],t.prototype,"clips",void 0),Object(r.a)([Object(l.b)()],t.prototype,"container",void 0),Object(r.a)([Object(l.b)()],t.prototype,"moving",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(r.a)([Object(l.b)()],t.prototype,"updateRequested",void 0),Object(r.a)([Object(l.b)()],t.prototype,"updating",null),Object(r.a)([Object(l.b)()],t.prototype,"view",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=Object(r.a)([Object(c.a)("esri.views.2d.layers.LayerView2D")],t),t}},1342:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var r=i(77),s=i(908),n=i(1232),o=i(1542),a=i(1534)
const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col
class c extends n.a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e)
return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e)
return t.push(e.registerRenderPass({name:"stencil",brushes:[a.a],drawPhase:s.c.DEBUG|s.c.MAP|s.c.HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(r.a)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[o.a],drawPhase:s.c.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key)
t.setTransform(e,i)}}setStencilReference(e){let t=1
for(const e of this.children)e.stencilRef=t++}}},1366:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o}))
var r=i(877),s=i(1079)
const n={geometry:[new s.a("a_pos",2,r.k.BYTE,0,2)]},o={geometry:[new s.a("a_pos",2,r.k.BYTE,0,4),new s.a("a_tex",2,r.k.BYTE,2,4)]},a={geometry:[new s.a("a_pos",2,r.k.UNSIGNED_SHORT,0,4)]}},1378:function(e,t,i){"use strict"
i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return h})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return f})),i.d(t,"h",(function(){return d})),i.d(t,"i",(function(){return p})),i.d(t,"j",(function(){return y})),i.d(t,"k",(function(){return m}))
var r=i(1051),s=i(877),n=(i(1041),i(973))
function o(e,t,i="nearest",o=!1){var a
const l=!(o&&"u8"===t.pixelType),c=l?s.q.FLOAT:s.q.UNSIGNED_BYTE,h=null==t.pixels||0===t.pixels.length?null:l?t.getAsRGBAFloat():t.getAsRGBA(),u=null==(a=e.capabilities.textureFloat)?void 0:a.textureFloatLinear,d={width:t.width,height:t.height,target:s.A.TEXTURE_2D,pixelFormat:s.p.RGBA,internalFormat:e.type===r.a.WEBGL2&&l?s.v.RGBA32F:s.p.RGBA,samplingMode:!u||"bilinear"!==i&&"cubic"!==i?s.z.NEAREST:s.z.LINEAR,dataType:c,wrapMode:s.B.CLAMP_TO_EDGE,flipped:!1}
return new n.a(e,d,h)}function a(e,t){const{spacing:i,offsets:o,coefficients:a,size:[l,c]}=t,h=i[0]>1,u={width:h?4*l:l,height:c,target:s.A.TEXTURE_2D,pixelFormat:s.p.RGBA,internalFormat:e.type===r.a.WEBGL2?s.v.RGBA32F:s.p.RGBA,dataType:s.q.FLOAT,samplingMode:s.z.NEAREST,wrapMode:s.B.CLAMP_TO_EDGE,flipped:!1},d=new Float32Array(h?l*c*16:2*o.length)
if(h)for(let e=0,t=0;e<a.length;e++)d[t++]=a[e],e%3==2&&(d[t++]=1)
else for(let e=0;e<c;e++)for(let t=0;t<l;t++){const i=4*(e*l+t),r=2*(t*c+e)
d[i]=o[r],d[i+1]=o[r+1],d[i+3]=-1===o[r]?0:1}return new n.a(e,u,d)}function l(e,t){const i={width:t.length/4,height:1,target:s.A.TEXTURE_2D,pixelFormat:s.p.RGBA,internalFormat:s.p.RGBA,dataType:s.q.UNSIGNED_BYTE,samplingMode:s.z.NEAREST,wrapMode:s.B.CLAMP_TO_EDGE,flipped:!1}
return new n.a(e,i,t)}function c(e,t,i,r=1,s=!0,n=!1){return{u_flipY:s,u_isFloatTexture:n,u_applyTransform:!!e,u_opacity:r,u_transformSpacing:e?e.spacing:null,u_transformGridSize:e?e.size:null,u_targetImageSize:t,u_srcImageSize:i}}function h(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:null}}function u(e,t){return{u_scale:e,u_offset:t}}function d(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function f(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function p(e,t){const i=e.gl,r=t.glName,s=i.getProgramParameter(r,i.ACTIVE_UNIFORMS),n=new Map
let o
for(let e=0;e<s;e++)o=i.getActiveUniform(r,e),o&&n.set(o.name,{location:i.getUniformLocation(r,o.name),info:o})
return n}function m(e,t,i){Object.keys(i).forEach(r=>{const n=t.get(r)||t.get(r+"[0]")
n&&function(e,t,i,r){if(null===r||null==i)return!1
const{info:n}=r
switch(n.type){case s.C.FLOAT:n.size>1?e.setUniform1fv(t,i):e.setUniform1f(t,i)
break
case s.C.FLOAT_VEC2:e.setUniform2fv(t,i)
break
case s.C.FLOAT_VEC3:e.setUniform3fv(t,i)
break
case s.C.FLOAT_VEC4:e.setUniform4fv(t,i)
break
case s.C.FLOAT_MAT3:e.setUniformMatrix3fv(t,i)
break
case s.C.FLOAT_MAT4:e.setUniformMatrix4fv(t,i)
break
case s.C.INT:n.size>1?e.setUniform1iv(t,i):e.setUniform1i(t,i)
break
case s.C.BOOL:e.setUniform1i(t,i?1:0)
break
case s.C.INT_VEC2:case s.C.BOOL_VEC2:e.setUniform2iv(t,i)
break
case s.C.INT_VEC3:case s.C.BOOL_VEC3:e.setUniform3iv(t,i)
break
case s.C.INT_VEC4:case s.C.BOOL_VEC4:e.setUniform4iv(t,i)
break
default:
}}(e,r,i[r],n)})}function y(e,t,i,r){i.length===r.length&&(r.some(e=>null==e)||i.some(e=>null==e)||i.forEach((i,s)=>{t.setUniform1i(i,s),e.bindTexture(r[s],s)}))}},1379:function(e,t,i){"use strict"
i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return r}))
const r={Base64:0,Hex:1,String:2,Raw:3}
function s(e,t){const i=(65535&e)+(65535&t)
return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function n(e,t,i,r,n,o){return s(function(e,t){return e<<t|e>>>32-t}(s(s(t,e),s(r,o)),n),i)}function o(e,t,i,r,s,o,a){return n(t&i|~t&r,e,t,s,o,a)}function a(e,t,i,r,s,o,a){return n(t&r|i&~r,e,t,s,o,a)}function l(e,t,i,r,s,o,a){return n(t^i^r,e,t,s,o,a)}function c(e,t,i,r,s,o,a){return n(i^(t|~r),e,t,s,o,a)}function h(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t
let i=1732584193,r=-271733879,n=-1732584194,h=271733878
for(let t=0;t<e.length;t+=16){const u=i,d=r,f=n,p=h
i=o(i,r,n,h,e[t+0],7,-680876936),h=o(h,i,r,n,e[t+1],12,-389564586),n=o(n,h,i,r,e[t+2],17,606105819),r=o(r,n,h,i,e[t+3],22,-1044525330),i=o(i,r,n,h,e[t+4],7,-176418897),h=o(h,i,r,n,e[t+5],12,1200080426),n=o(n,h,i,r,e[t+6],17,-1473231341),r=o(r,n,h,i,e[t+7],22,-45705983),i=o(i,r,n,h,e[t+8],7,1770035416),h=o(h,i,r,n,e[t+9],12,-1958414417),n=o(n,h,i,r,e[t+10],17,-42063),r=o(r,n,h,i,e[t+11],22,-1990404162),i=o(i,r,n,h,e[t+12],7,1804603682),h=o(h,i,r,n,e[t+13],12,-40341101),n=o(n,h,i,r,e[t+14],17,-1502002290),r=o(r,n,h,i,e[t+15],22,1236535329),i=a(i,r,n,h,e[t+1],5,-165796510),h=a(h,i,r,n,e[t+6],9,-1069501632),n=a(n,h,i,r,e[t+11],14,643717713),r=a(r,n,h,i,e[t+0],20,-373897302),i=a(i,r,n,h,e[t+5],5,-701558691),h=a(h,i,r,n,e[t+10],9,38016083),n=a(n,h,i,r,e[t+15],14,-660478335),r=a(r,n,h,i,e[t+4],20,-405537848),i=a(i,r,n,h,e[t+9],5,568446438),h=a(h,i,r,n,e[t+14],9,-1019803690),n=a(n,h,i,r,e[t+3],14,-187363961),r=a(r,n,h,i,e[t+8],20,1163531501),i=a(i,r,n,h,e[t+13],5,-1444681467),h=a(h,i,r,n,e[t+2],9,-51403784),n=a(n,h,i,r,e[t+7],14,1735328473),r=a(r,n,h,i,e[t+12],20,-1926607734),i=l(i,r,n,h,e[t+5],4,-378558),h=l(h,i,r,n,e[t+8],11,-2022574463),n=l(n,h,i,r,e[t+11],16,1839030562),r=l(r,n,h,i,e[t+14],23,-35309556),i=l(i,r,n,h,e[t+1],4,-1530992060),h=l(h,i,r,n,e[t+4],11,1272893353),n=l(n,h,i,r,e[t+7],16,-155497632),r=l(r,n,h,i,e[t+10],23,-1094730640),i=l(i,r,n,h,e[t+13],4,681279174),h=l(h,i,r,n,e[t+0],11,-358537222),n=l(n,h,i,r,e[t+3],16,-722521979),r=l(r,n,h,i,e[t+6],23,76029189),i=l(i,r,n,h,e[t+9],4,-640364487),h=l(h,i,r,n,e[t+12],11,-421815835),n=l(n,h,i,r,e[t+15],16,530742520),r=l(r,n,h,i,e[t+2],23,-995338651),i=c(i,r,n,h,e[t+0],6,-198630844),h=c(h,i,r,n,e[t+7],10,1126891415),n=c(n,h,i,r,e[t+14],15,-1416354905),r=c(r,n,h,i,e[t+5],21,-57434055),i=c(i,r,n,h,e[t+12],6,1700485571),h=c(h,i,r,n,e[t+3],10,-1894986606),n=c(n,h,i,r,e[t+10],15,-1051523),r=c(r,n,h,i,e[t+1],21,-2054922799),i=c(i,r,n,h,e[t+8],6,1873313359),h=c(h,i,r,n,e[t+15],10,-30611744),n=c(n,h,i,r,e[t+6],15,-1560198380),r=c(r,n,h,i,e[t+13],21,1309151649),i=c(i,r,n,h,e[t+4],6,-145523070),h=c(h,i,r,n,e[t+11],10,-1120210379),n=c(n,h,i,r,e[t+2],15,718787259),r=c(r,n,h,i,e[t+9],21,-343485551),i=s(i,u),r=s(r,d),n=s(n,f),h=s(h,p)}return[i,r,n,h]}function u(e,t=r.Hex){const i=t||r.Base64,s=h(function(e){const t=[]
for(let i=0,r=8*e.length;i<r;i+=8)t[i>>5]|=(255&e.charCodeAt(i/8))<<i%32
return t}(e),8*e.length)
switch(i){case r.Raw:return s
case r.Hex:return function(e){const t="0123456789abcdef",i=[]
for(let r=0,s=4*e.length;r<s;r++)i.push(t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15))
return i.join("")}(s)
case r.String:return function(e){const t=[]
for(let i=0,r=32*e.length;i<r;i+=8)t.push(String.fromCharCode(e[i>>5]>>>i%32&255))
return t.join("")}(s)
case r.Base64:return function(e){const t=[]
for(let i=0,r=4*e.length;i<r;i+=3){const r=(e[i>>2]>>i%4*8&255)<<16|(e[i+1>>2]>>(i+1)%4*8&255)<<8|e[i+2>>2]>>(i+2)%4*8&255
for(let s=0;s<4;s++)8*i+6*s>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-s)&63))}return t.join("")}(s)}}},1406:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}))
const r=new(i(863).a)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"})
function s(e){return r.toJSON(e)}function n(e){const{bandCount:t,attributeTable:i,colormap:r,pixelType:s}=e.rasterInfo
return 1===t&&(null!=i||null!=r||"u8"===s||"s8"===s)}},1407:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var r=i(20),s=i(930),n=i(1020),o=i(1304)
class a extends o.a{constructor(e,t,i){super(e,i),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=null==i?void 0:i.geometryType,this._features=t}static fromFeatures(e,t){const{objectIdField:i,geometryType:r}=t,n=Object(s.c)([],e,r,!1,!1,i)
for(let t=0;t<n.length;t++)n[t].displayId=e[t].displayId
return a.fromOptimizedFeatures(n,t)}static fromFeatureSet(e,t){const i=Object(s.b)(e,t.objectIdField)
return a.fromOptimizedFeatureSet(i,t)}static fromOptimizedFeatureSet(e,t){const{features:i}=e,r=a.fromOptimizedFeatures(i,t)
r._exceededTransferLimit=e.exceededTransferLimit,r._transform=e.transform
for(const t of e.fields)"esriFieldTypeDate"===t.type&&r._dateFields.add(t.name)
return r}static fromOptimizedFeatures(e,t,i){const r=o.a.createInstance(),s=new a(r,e,t)
return s._transform=i,s}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(e){const t=new Set(e)
this._features=this._features.filter(e=>!t.has(e.objectId))}append(e){for(const t of e)this._features.push(t)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let e=""
for(const t in this._current.attributes)e+=this._current.attributes[t]
return e}getIndex(){return this._featureIndex}setIndex(e){this._featureIndex=e}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){this._current.displayId=e}getGroupId(){return this._current.groupId}setGroupId(e){this._current.groupId=e}copy(){const e=new a(this.instance,this._features,this.fullSchema())
return this.copyInto(e),e}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return Object(s.j)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const e=this.readGeometry()
return Object(s.l)(e,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const e=this.readCentroid()
return Object(r.j)(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}readGeometryArea(){return Object(n.c)(this._current)?Object(s.t)(this._current.geometry,2):0}readUnquantizedGeometry(){const e=this.readGeometry()
if("esriGeometryPoint"===this.geometryType||!e)return e
const t=e.clone()
return function({coords:e,lengths:t}){let i=0
for(const r of t){for(let t=1;t<r;t++)e[2*(i+t)]+=e[2*(i+t)-2],e[2*(i+t)+1]+=e[2*(i+t)-1]
i+=r}}(t),t}readHydratedGeometry(){const e=this._current.geometry
if(Object(r.j)(e))return null
const t=e.clone()
return Object(r.k)(this._transform)&&Object(s.A)(t,t,this.hasZ,this.hasM,this._transform),t}getXHydrated(){if(!Object(n.c)(this._current))return 0
const e=this._current.geometry.coords[0],t=this.getQuantizationTransform()
return Object(r.j)(t)?e:e*t.scale[0]+t.translate[0]}getYHydrated(){if(!Object(n.c)(this._current))return 0
const e=this._current.geometry.coords[1],t=this.getQuantizationTransform()
return Object(r.j)(t)?e:t.translate[1]-e*t.scale[1]}getX(){return Object(n.c)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return Object(n.c)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!Object(n.c)(this._current))return null
const e=this._current.geometry.clone()
if(e.isPoint)return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sy+this._ty,e
let t=0
for(const i of e.lengths)e.coords[2*t]=e.coords[2*t]*this._sx+this._tx,e.coords[2*t+1]=e.coords[2*t+1]*this._sy+this._ty,t+=i
return e}readCentroid(){if(!Object(n.c)(this._current))return null
if(Object(r.j)(this._current.centroid)){const e=this._computeCentroid()
if(Object(r.j)(e))return null
e.coords[0]=(e.coords[0]-this._tx)/this._sx,e.coords[1]=(e.coords[1]-this._ty)/this._sy,this._current.centroid=e}const e=this._current.centroid.clone()
return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sx+this._ty,e}hasField(e){return e in this._current.attributes||this.getFieldNames().map(e=>e.toLowerCase()).includes(e.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(e,t){const i=this._current.attributes[e]
if(void 0!==i)return null!=i&&t&&this._dateFields.has(e)?new Date(i):i
const r=this.readAttributes(),s=e.toLocaleLowerCase().trim()
for(const e in r)if(e.toLocaleLowerCase().trim()===s){const i=this._current.attributes[e]
return null!=i&&t&&this._dateFields.has(e)?new Date(i):i}}copyInto(e){super.copyInto(e),e._featureIndex=this._featureIndex,e._transform=this._transform,e._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}},1424:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return c}))
var r=i(1177),s=i(869),n=i(1367)
function o(e){if(!e)return null
switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers
return t&&1===t.length?o(t[0]):null}case"CIMVectorMarker":{var t
const i=e.markerGraphics
if(!i||1!==i.length)return null
const r=i[0]
if(!r)return null
const s=r.geometry
if(!s)return null
const n=r.symbol
return!n||"CIMPolygonSymbol"!==n.type&&"CIMLineSymbol"!==n.type||null!=(t=n.symbolLayers)&&t.some(e=>!!e.effects)?null:{geom:s,asFill:"CIMPolygonSymbol"===n.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function a(e){let t=1/0,i=-1/0,r=1/0,s=-1/0
for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<r&&(r=e[1]),e[1]>s&&(s=e[1])
return[t,r,i,s]}function l(e){return e?e.rings?a(e.rings):e.paths?a(e.paths):Object(s.d)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,i,r,s){const[n,o,a,l]=e
if(a<n||l<o)return[0,0,0]
const c=a-n,h=l-o,u=Math.floor(31.5),d=(128-2*(u+1))/Math.max(c,h),f=Math.round(c*d)+2*u,p=Math.round(h*d)+2*u
let m=1
t&&(m=p/d/(t.ymax-t.ymin))
let y=0,x=0
if(r)if(s){if(t&&i&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin)
y=r.x/(i*e),x=r.y/i}}else y=r.x,x=r.y
return y=.5*(t.xmax+t.xmin)+y*(t.xmax-t.xmin),x=.5*(t.ymax+t.ymin)+x*(t.ymax-t.ymin),y-=n,x-=o,y*=d,x*=d,y+=u,x+=u,[m,y/f-.5,-(x/p-.5)]}function h(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),i=function(e){let t=1/0,i=-1/0,r=1/0,s=-1/0
for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<r&&(r=e[1]),e[1]>s&&(s=e[1])
return new n.a(t,r,i-t,s-r)}(t),r=Math.floor(31.5),s=(128-2*(r+1))/Math.max(i.width,i.height),o=Math.round(i.width*s)+2*r,a=Math.round(i.height*s)+2*r,l=[]
for(const n of t)if(n&&n.length>1){const t=[]
for(const o of n){let[n,a]=o
n-=i.x,a-=i.y,n*=s,a*=s,n+=r-.5,a+=r-.5,e.asFill?t.push([n,a]):t.push([Math.round(n),Math.round(a)])}if(e.asFill){const e=t.length-1
t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}l.push(t)}const c=function(e,t,i,r){const s=t*i,n=new Array(s),o=r*r+1
for(let e=0;e<s;++e)n[e]=o
for(const s of e){const e=s.length
for(let o=1;o<e;++o){const e=s[o-1],a=s[o]
let l,c,h,u
e[0]<a[0]?(l=e[0],c=a[0]):(l=a[0],c=e[0]),e[1]<a[1]?(h=e[1],u=a[1]):(h=a[1],u=e[1])
let d=Math.floor(l)-r,f=Math.floor(c)+r,p=Math.floor(h)-r,m=Math.floor(u)+r
d<0&&(d=0),f>t&&(f=t),p<0&&(p=0),m>i&&(m=i)
const y=a[0]-e[0],x=a[1]-e[1],_=y*y+x*x
for(let r=d;r<f;r++)for(let s=p;s<m;s++){let o,l,c=(r-e[0])*y+(s-e[1])*x
c<0?(o=e[0],l=e[1]):c>_?(o=a[0],l=a[1]):(c/=_,o=e[0]+c*y,l=e[1]+c*x)
const h=(r-o)*(r-o)+(s-l)*(s-l),u=(i-s-1)*t+r
h<n[u]&&(n[u]=h)}}}for(let e=0;e<s;++e)n[e]=Math.sqrt(n[e])
return n}(l,o,a,r)
return e.asFill&&function(e,t,i,r,s){for(const n of e){const e=n.length
for(let o=1;o<e;++o){const e=n[o-1],a=n[o]
let l,c,h,u
e[0]<a[0]?(l=e[0],c=a[0]):(l=a[0],c=e[0]),e[1]<a[1]?(h=e[1],u=a[1]):(h=a[1],u=e[1])
let d=Math.floor(l),f=Math.floor(c)+1,p=Math.floor(h),m=Math.floor(u)+1
d<r&&(d=r),f>t-r&&(f=t-r),p<r&&(p=r),m>i-r&&(m=i-r)
for(let n=p;n<m;++n){if(e[1]>n==a[1]>n)continue
const o=(i-n-1)*t
for(let t=d;t<f;++t)t<(a[0]-e[0])*(n-e[1])/(a[1]-e[1])+e[0]&&(s[o+t]=-s[o+t])
for(let e=r;e<d;++e)s[o+e]=-s[o+e]}}}}(l,o,a,r,c),[u(c,r),o,a]}function u(e,t){const i=2*t,s=e.length,n=new Uint8Array(4*s)
for(let t=0;t<s;++t){const s=.5-e[t]/i
Object(r.a)(s,n,4*t)}return n}},1433:function(e,t,i){"use strict"
function r(e){const t=e.toLowerCase().split(" ").join("-")
switch(t){case"serif":return"noto-serif"
case"sans-serif":return"arial-unicode-ms"
case"monospace":return"ubuntu-mono"
case"fantasy":return"cabin-sketch"
case"cursive":return"redressed"
default:return t}}function s(e){const t=function(e){if(!e.weight)return""
switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return""
switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e)
return r(e.family)+(t.length>0?t:"-regular")}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))},1443:function(e,t,i){"use strict"
function r(e,t,i,r){const s=e.clone(),n=1<<s.level,o=s.col+t,a=s.row+i
return r&&o<0?(s.col=o+n,s.world-=1):o>=n?(s.col=o-n,s.world+=1):s.col=o,s.row=a,s}i.d(t,"a",(function(){return r})),i(1478)},1444:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return c}))
var r,s,n=i(891),o=i(1203),a=i(1236)
class l{constructor(e,t,i){this.ratio=e,this.x=t,this.y=i}}class c{constructor(e,t,i,r=8,s=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=r,this.pixelMargin=s,this.tileSize=n.P*r,this.dz=e,this.yPos=t,this.xPos=i}setPixelMargin(e){e!==this.pixelMargin&&(this.pixelMargin=e,this.setExtent(this._extent))}setExtent(e){this._extent=e,this.finalRatio=this.tileSize/e*(1<<this.dz)
let t=this.pixelRatio*this.pixelMargin
t/=this.finalRatio
const i=e>>this.dz
t>i&&(t=i),this.margin=t,this.xmin=i*this.xPos-t,this.ymin=i*this.yPos-t,this.xmax=this.xmin+i+2*t,this.ymax=this.ymin+i+2*t}reset(e){this.type=e,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(e,t){this._pushLine(),this._prevIsIn=this._isIn(e,t),this._moveTo(e,t,this._prevIsIn),this._prevPt=new o.b(e,t),this._firstPt=new o.b(e,t),this._dist=0}lineTo(e,t){const i=this._isIn(e,t),r=new o.b(e,t),s=o.b.distance(this._prevPt,r)
let n,a,c,h,u,d,f,p
if(i)this._prevIsIn?this._lineTo(e,t,!0):(n=this._prevPt,a=r,c=this._intersect(a,n),this.start=this._dist+s*(1-this._r),this._lineTo(c.x,c.y,!0),this._lineTo(a.x,a.y,!0))
else if(this._prevIsIn)a=this._prevPt,n=r,c=this._intersect(a,n),this._lineTo(c.x,c.y,!0),this._lineTo(n.x,n.y,!1)
else{const e=this._prevPt,t=r
if(e.x<=this.xmin&&t.x<=this.xmin||e.x>=this.xmax&&t.x>=this.xmax||e.y<=this.ymin&&t.y<=this.ymin||e.y>=this.ymax&&t.y>=this.ymax)this._lineTo(t.x,t.y,!1)
else{const i=[]
if((e.x<this.xmin&&t.x>this.xmin||e.x>this.xmin&&t.x<this.xmin)&&(h=(this.xmin-e.x)/(t.x-e.x),p=e.y+h*(t.y-e.y),p<=this.ymin?d=!1:p>=this.ymax?d=!0:i.push(new l(h,this.xmin,p))),(e.x<this.xmax&&t.x>this.xmax||e.x>this.xmax&&t.x<this.xmax)&&(h=(this.xmax-e.x)/(t.x-e.x),p=e.y+h*(t.y-e.y),p<=this.ymin?d=!1:p>=this.ymax?d=!0:i.push(new l(h,this.xmax,p))),(e.y<this.ymin&&t.y>this.ymin||e.y>this.ymin&&t.y<this.ymin)&&(h=(this.ymin-e.y)/(t.y-e.y),f=e.x+h*(t.x-e.x),f<=this.xmin?u=!1:f>=this.xmax?u=!0:i.push(new l(h,f,this.ymin))),(e.y<this.ymax&&t.y>this.ymax||e.y>this.ymax&&t.y<this.ymax)&&(h=(this.ymax-e.y)/(t.y-e.y),f=e.x+h*(t.x-e.x),f<=this.xmin?u=!1:f>=this.xmax?u=!0:i.push(new l(h,f,this.ymax))),0===i.length)u?d?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):d?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0)
else if(i.length>1&&i[0].ratio>i[1].ratio)this.start=this._dist+s*i[1].ratio,this._lineTo(i[1].x,i[1].y,!0),this._lineTo(i[0].x,i[0].y,!0)
else{this.start=this._dist+s*i[0].ratio
for(let e=0;e<i.length;e++)this._lineTo(i[e].x,i[e].y,!0)}this._lineTo(t.x,t.y,!1)}}this._dist+=s,this._prevIsIn=i,this._prevPt=r}close(){if(this.line.length>2){const e=this._firstPt,t=this._prevPt
e.x===t.x&&e.y===t.y||this.lineTo(e.x,e.y)
const i=this.line
let r=i.length
for(;r>=4&&(i[0].x===i[1].x&&i[0].x===i[r-2].x||i[0].y===i[1].y&&i[0].y===i[r-2].y);)i.pop(),i[0].x=i[r-2].x,i[0].y=i[r-2].y,--r}}result(e=!0){return this._pushLine(),0===this.lines.length?null:(this.type===o.a.Polygon&&e&&u.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(this.type!==o.a.LineString)throw new Error("Only valid for lines")
this._pushLine()
const e=this.lines,t=e.length
if(0===t)return null
const i=[]
for(let r=0;r<t;r++)i.push({line:e[r],start:this.starts[r]||0})
return i}_isIn(e,t){return e>=this.xmin&&e<=this.xmax&&t>=this.ymin&&t<=this.ymax}_intersect(e,t){let i,r,s
if(t.x>=this.xmin&&t.x<=this.xmax)r=t.y<=this.ymin?this.ymin:this.ymax,s=(r-e.y)/(t.y-e.y),i=e.x+s*(t.x-e.x)
else if(t.y>=this.ymin&&t.y<=this.ymax)i=t.x<=this.xmin?this.xmin:this.xmax,s=(i-e.x)/(t.x-e.x),r=e.y+s*(t.y-e.y)
else{r=t.y<=this.ymin?this.ymin:this.ymax,i=t.x<=this.xmin?this.xmin:this.xmax
const n=(i-e.x)/(t.x-e.x),o=(r-e.y)/(t.y-e.y)
n<o?(s=n,r=e.y+n*(t.y-e.y)):(s=o,i=e.x+o*(t.x-e.x))}return this._r=s,new o.b(i,r)}_pushLine(){this.line&&(this.type===o.a.Point?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===o.a.LineString?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===o.a.Polygon&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(e,t,i){this.type!==o.a.Polygon?i&&(e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new o.b(e,t))):(i||(e<this.xmin&&(e=this.xmin),e>this.xmax&&(e=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new o.b(e,t)),this._is_h=!1,this._is_v=!1)}_lineTo(e,t,i){let r,s
if(this.type!==o.a.Polygon)if(i){if(e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(r=this.line[this.line.length-1],r.equals(e,t)))return
this.line.push(new o.b(e,t))}else this.line&&this.line.length>0&&this._pushLine()
else if(i||(e<this.xmin&&(e=this.xmin),e>this.xmax&&(e=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){r=this.line[this.line.length-1]
const i=r.x===e,n=r.y===t
if(i&&n)return
this._is_h&&i||this._is_v&&n?(r.x=e,r.y=t,s=this.line[this.line.length-2],s.x===e&&s.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(s=this.line[this.line.length-2],this._is_h=s.x===e,this._is_v=s.y===t)):(this._is_h=s.x===e,this._is_v=s.y===t)):(this.line.push(new o.b(e,t)),this._is_h=i,this._is_v=n)}else this.line.push(new o.b(e,t))}}class h{setExtent(e){this._ratio=4096===e?1:4096/e}get validateTessellation(){return this._ratio<1}reset(e){this.lines=[],this.line=null}moveTo(e,t){this.line&&this.lines.push(this.line),this.line=[]
const i=this._ratio
this.line.push(new o.b(e*i,t*i))}lineTo(e,t){const i=this._ratio
this.line.push(new o.b(e*i,t*i))}close(){const e=this.line
e&&!e[0].isEqual(e[e.length-1])&&e.push(e[0])}result(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}(s=r||(r={}))[s.sideLeft=0]="sideLeft",s[s.sideRight=1]="sideRight",s[s.sideTop=2]="sideTop",s[s.sideBottom=3]="sideBottom"
class u{static simplify(e,t,i){if(!i)return
const s=-t,n=e+t,o=-t,a=e+t,l=[],c=[],h=i.length
for(let e=0;e<h;++e){const t=i[e]
if(!t||t.length<2)continue
let h,u=t[0]
const d=t.length
for(let i=1;i<d;++i)h=t[i],u.x===h.x&&(u.x<=s&&(u.y>h.y?(l.push(e),l.push(i),l.push(r.sideLeft),l.push(-1)):(c.push(e),c.push(i),c.push(r.sideLeft),c.push(-1))),u.x>=n&&(u.y<h.y?(l.push(e),l.push(i),l.push(r.sideRight),l.push(-1)):(c.push(e),c.push(i),c.push(r.sideRight),c.push(-1)))),u.y===h.y&&(u.y<=o&&(u.x<h.x?(l.push(e),l.push(i),l.push(r.sideTop),l.push(-1)):(c.push(e),c.push(i),c.push(r.sideTop),c.push(-1))),u.y>=a&&(u.x>h.x?(l.push(e),l.push(i),l.push(r.sideBottom),l.push(-1)):(c.push(e),c.push(i),c.push(r.sideBottom),c.push(-1)))),u=h}if(0===l.length||0===c.length)return
u.fillParent(i,c,l),u.fillParent(i,l,c)
const d=[]
u.calcDeltas(d,c,l),u.calcDeltas(d,l,c),u.addDeltas(d,i)}static fillParent(e,t,i){const s=i.length,n=t.length
for(let o=0;o<n;o+=4){const n=t[o],l=t[o+1],c=t[o+2],h=e[n][l-1],u=e[n][l]
let d=8092,f=-1
for(let t=0;t<s;t+=4){if(i[t+2]!==c)continue
const s=i[t],n=i[t+1],o=e[s][n-1],l=e[s][n]
switch(c){case r.sideLeft:case r.sideRight:if(Object(a.a)(h.y,o.y,l.y)&&Object(a.a)(u.y,o.y,l.y)){const e=Math.abs(l.y-o.y)
e<d&&(d=e,f=t)}break
case r.sideTop:case r.sideBottom:if(Object(a.a)(h.x,o.x,l.x)&&Object(a.a)(u.x,o.x,l.x)){const e=Math.abs(l.x-o.x)
e<d&&(d=e,f=t)}}}t[o+3]=f}}static calcDeltas(e,t,i){const r=t.length
for(let s=0;s<r;s+=4){const r=[],n=u.calcDelta(s,t,i,r)
e.push(t[s]),e.push(t[s+1]),e.push(t[s+2]),e.push(n)}}static calcDelta(e,t,i,r){const s=t[e+3]
if(-1===s)return 0
const n=r.length
return n>1&&r[n-2]===s?0:(r.push(s),u.calcDelta(s,i,t,r)+1)}static addDeltas(e,t){const i=e.length
let s=0
for(let t=0;t<i;t+=4){const i=e[t+3]
i>s&&(s=i)}for(let n=0;n<i;n+=4){const i=t[e[n]],o=e[n+1],a=s-e[n+3]
switch(e[n+2]){case r.sideLeft:i[o-1].x-=a,i[o].x-=a,1===o&&(i[i.length-1].x-=a),o===i.length-1&&(i[0].x-=a)
break
case r.sideRight:i[o-1].x+=a,i[o].x+=a,1===o&&(i[i.length-1].x+=a),o===i.length-1&&(i[0].x+=a)
break
case r.sideTop:i[o-1].y-=a,i[o].y-=a,1===o&&(i[i.length-1].y-=a),o===i.length-1&&(i[0].y-=a)
break
case r.sideBottom:i[o-1].y+=a,i[o].y+=a,1===o&&(i[i.length-1].y+=a),o===i.length-1&&(i[0].y+=a)}}}}},1445:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f}))
var r=i(969),s=i(891)
function n(e,t){return e.x===t.x&&e.y===t.y}function o(e,t){return e.x=t.y,e.y=-t.x,e}function a(e,t){return e.x=-t.y,e.y=t.x,e}function l(e,t){return e.x=t.x,e.y=t.y,e}function c(e,t){return e.x=-t.x,e.y=-t.y,e}function h(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function u(e,t){return e.x*t.x+e.y*t.y}function d(e,t,i,r){return e.x=t.x*i+t.y*r,e.y=t.x*r-t.y*i,e}class f{constructor(e,t,i){this.writeVertex=e,this.writeTriangle=t,this.canUseThinTessellation=i,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(e,t){(function(e){if(!e)return
const t=e.length
if(t<=1)return
let i=0
for(let r=1;r<t;r++)n(e[r],e[i])||++i===r||(e[i]=e[r])
e.length=i+1})(e),this.canUseThinTessellation&&t.halfWidth<s.O&&!t.offset?this._tessellateThin(e,t):this._tessellate(e,t)}_tessellateThin(e,t){if(e.length<2)return
const i=t.wrapDistance||65535
let r=t.initialDistance||0,s=!1,n=e[0].x,o=e[0].y
const a=e.length
for(let t=1;t<a;++t){s&&(s=!1,r=0)
let a=e[t].x,l=e[t].y,c=a-n,h=l-o,u=Math.sqrt(c*c+h*h)
if(c/=u,h/=u,r+u>i){s=!0
const e=(i-r)/u
u=i-r,a=(1-e)*n+e*a,l=(1-e)*o+e*l,--t}const d=this.writeVertex(n,o,0,0,c,h,h,-c,0,-1,r),f=this.writeVertex(n,o,0,0,c,h,-h,c,0,1,r)
r+=u
const p=this.writeVertex(a,l,0,0,c,h,h,-c,0,-1,r),m=this.writeVertex(a,l,0,0,c,h,-h,c,0,1,r)
this.writeTriangle(d,f,p),this.writeTriangle(f,p,m),n=a,o=l}}_tessellate(e,t){const i=e[0],s=e[e.length-1],f=n(i,s),p=f?3:2
if(e.length<p)return
const m=t.pixelCoordRatio,y=null!=t.capType?t.capType:r.d.BUTT,x=null!=t.joinType?t.joinType:r.o.MITER,_=null!=t.miterLimit?Math.min(t.miterLimit,4):2,g=null!=t.roundLimit?Math.min(t.roundLimit,1.05):1.05,b=null!=t.halfWidth?t.halfWidth:2,v=!!t.textured
let O,j,w=null,S=null
const M=this.prevNormal,T=this.nextNormal
let I=-1,C=-1
const R=this.joinNormal
let E,z
const L=this.textureNormalLeft,F=this.textureNormalRight,A=this.textureNormal
let P=-1,D=-1
const k=t.wrapDistance||65535
let B=t.initialDistance||0
const N=this.writeVertex,V=this.writeTriangle,G=function(e,t,i,r,s,n){const o=N(O,j,E,z,i,r,e,t,s,n,B)
return P>=0&&D>=0&&o>=0&&V(P,D,o),P=D,D=o,o}
f&&(w=e[e.length-2],T.x=s.x-w.x,T.y=s.y-w.y,C=h(T),T.x/=C,T.y/=C)
let U=!1
for(let t=0;t<e.length;++t){if(U&&(U=!1,B=0),w&&(M.x=-T.x,M.y=-T.y,I=C,B+I>k&&(U=!0)),U){const i=(k-B)/I
I=k-B,w={x:(1-i)*w.x+i*e[t].x,y:(1-i)*w.y+i*e[t].y},--t}else w=e[t]
O=w.x,j=w.y
const i=t<=0&&!U,s=t===e.length-1
if(i||(B+=I),S=s?f?e[1]:null:e[t+1],S?(T.x=S.x-O,T.y=S.y-j,C=h(T),T.x/=C,T.y/=C):(T.x=void 0,T.y=void 0),!f){if(i){a(R,T),E=R.x,z=R.y,y===r.d.SQUARE&&(G(-T.y-T.x,T.x-T.y,T.x,T.y,0,-1),G(T.y-T.x,-T.x-T.y,T.x,T.y,0,1)),y===r.d.ROUND&&(G(-T.y-T.x,T.x-T.y,T.x,T.y,-1,-1),G(T.y-T.x,-T.x-T.y,T.x,T.y,-1,1)),y!==r.d.ROUND&&y!==r.d.BUTT||(G(-T.y,T.x,T.x,T.y,0,-1),G(T.y,-T.x,T.x,T.y,0,1))
continue}if(s){o(R,M),E=R.x,z=R.y,y!==r.d.ROUND&&y!==r.d.BUTT||(G(M.y,-M.x,-M.x,-M.y,0,-1),G(-M.y,M.x,-M.x,-M.y,0,1)),y===r.d.SQUARE&&(G(M.y-M.x,-M.x-M.y,-M.x,-M.y,0,-1),G(-M.y-M.x,M.x-M.y,-M.x,-M.y,0,1)),y===r.d.ROUND&&(G(M.y-M.x,-M.x-M.y,-M.x,-M.y,1,-1),G(-M.y-M.x,M.x-M.y,-M.x,-M.y,1,1))
continue}}let n,p,N=(Z=T,-((W=M).x*Z.y-W.y*Z.x))
if(Math.abs(N)<.01)u(M,T)>0?(R.x=M.x,R.y=M.y,N=1,n=Number.MAX_VALUE,p=!0):(a(R,T),N=1,n=1,p=!1)
else{R.x=(M.x+T.x)/N,R.y=(M.y+T.y)/N,n=h(R)
const e=(n-1)*b*m
p=n>4||e>I&&e>C}E=R.x,z=R.y
let V=x
switch(x){case r.o.BEVEL:n<1.05&&(V=r.o.MITER)
break
case r.o.ROUND:n<g&&(V=r.o.MITER)
break
case r.o.MITER:n>_&&(V=r.o.BEVEL)}switch(V){case r.o.MITER:if(G(R.x,R.y,-M.x,-M.y,0,-1),G(-R.x,-R.y,-M.x,-M.y,0,1),s)break
if(v){const e=U?0:B
P=this.writeVertex(O,j,E,z,T.x,T.y,R.x,R.y,0,-1,e),D=this.writeVertex(O,j,E,z,T.x,T.y,-R.x,-R.y,0,1,e)}break
case r.o.BEVEL:{const e=N<0
let t,i,r,n
if(e){const e=P
P=D,D=e,t=L,i=F}else t=F,i=L
if(p)r=e?a(this.innerPrev,M):o(this.innerPrev,M),n=e?o(this.innerNext,T):a(this.innerNext,T)
else{const t=e?c(this.inner,R):l(this.inner,R)
r=t,n=t}const h=e?o(this.bevelStart,M):a(this.bevelStart,M)
G(r.x,r.y,-M.x,-M.y,t.x,t.y)
const u=G(h.x,h.y,-M.x,-M.y,i.x,i.y)
if(s)break
const f=e?a(this.bevelEnd,T):o(this.bevelEnd,T)
if(p){const e=this.writeVertex(O,j,E,z,-M.x,-M.y,0,0,0,0,B)
P=this.writeVertex(O,j,E,z,T.x,T.y,n.x,n.y,t.x,t.y,B),D=this.writeVertex(O,j,E,z,T.x,T.y,f.x,f.y,i.x,i.y,B),this.writeTriangle(u,e,D)}else{if(v){const e=this.bevelMiddle
e.x=(h.x+f.x)/2,e.y=(h.y+f.y)/2,d(A,e,-M.x,-M.y),G(e.x,e.y,-M.x,-M.y,A.x,A.y),d(A,e,T.x,T.y),P=this.writeVertex(O,j,E,z,T.x,T.y,e.x,e.y,A.x,A.y,B),D=this.writeVertex(O,j,E,z,T.x,T.y,n.x,n.y,t.x,t.y,B)}else{const e=P
P=D,D=e}G(f.x,f.y,T.x,T.y,i.x,i.y)}if(e){const e=P
P=D,D=e}break}case r.o.ROUND:{const e=N<0
let t,i
if(e){const e=P
P=D,D=e,t=L,i=F}else t=F,i=L
const r=e?c(this.inner,R):l(this.inner,R)
let h,f
p?(h=e?a(this.innerPrev,M):o(this.innerPrev,M),f=e?o(this.innerNext,T):a(this.innerNext,T)):(h=r,f=r)
const m=e?o(this.roundStart,M):a(this.roundStart,M),y=e?a(this.roundEnd,T):o(this.roundEnd,T),x=G(h.x,h.y,-M.x,-M.y,t.x,t.y),_=G(m.x,m.y,-M.x,-M.y,i.x,i.y)
if(s)break
const g=this.writeVertex(O,j,E,z,-M.x,-M.y,0,0,0,0,B)
p||this.writeTriangle(P,D,g)
const b=c(this.outer,r),w=this.writeVertex(O,j,E,z,T.x,T.y,y.x,y.y,i.x,i.y,B)
let S,I
const C=n>2
if(C){let t
n!==Number.MAX_VALUE?(b.x/=n,b.y/=n,t=u(M,b),t=(n*(t*t-1)+1)/t):t=-1,S=e?o(this.startBreak,M):a(this.startBreak,M),S.x+=M.x*t,S.y+=M.y*t,I=e?a(this.endBreak,T):o(this.endBreak,T),I.x+=T.x*t,I.y+=T.y*t}d(A,b,-M.x,-M.y)
const k=this.writeVertex(O,j,E,z,-M.x,-M.y,b.x,b.y,A.x,A.y,B)
d(A,b,T.x,T.y)
const V=v?this.writeVertex(O,j,E,z,T.x,T.y,b.x,b.y,A.x,A.y,B):k,U=g,W=v?this.writeVertex(O,j,E,z,T.x,T.y,0,0,0,0,B):g
let Z=-1,H=-1
if(C&&(d(A,S,-M.x,-M.y),Z=this.writeVertex(O,j,E,z,-M.x,-M.y,S.x,S.y,A.x,A.y,B),d(A,I,T.x,T.y),H=this.writeVertex(O,j,E,z,T.x,T.y,I.x,I.y,A.x,A.y,B)),v?C?(this.writeTriangle(U,_,Z),this.writeTriangle(U,Z,k),this.writeTriangle(W,V,H),this.writeTriangle(W,H,w)):(this.writeTriangle(U,_,k),this.writeTriangle(W,V,w)):C?(this.writeTriangle(g,_,Z),this.writeTriangle(g,Z,H),this.writeTriangle(g,H,w)):(this.writeTriangle(g,_,k),this.writeTriangle(g,V,w)),p?(P=this.writeVertex(O,j,E,z,T.x,T.y,f.x,f.y,t.x,t.y,B),D=w):(P=v?this.writeVertex(O,j,E,z,T.x,T.y,f.x,f.y,t.x,t.y,B):x,this.writeTriangle(P,W,w),D=w),e){const e=P
P=D,D=e}break}}}var W,Z}}},1446:function(e,t,i){"use strict"
i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return c}))
var r=i(20),s=i(876),n=i(1e3),o=i(891),a=i(908),l=i(1303)
function c(e,t){if(!e||!t)return e
switch(t){case"radius":case"distance":return 2*e
case"diameter":case"width":return e
case"area":return Math.sqrt(e)}return e}function h(e){return e.map(e=>function(e){return{value:e.value,size:Object(s.k)(e.size)}}(e))}function u(e){if("string"==typeof e||"number"==typeof e)return Object(s.k)(e)
const t=e
return{type:"size",expression:t.expression,stops:h(t.stops)}}const d=e=>{const t=[],i=[],r=h(e),n=r.length
for(let e=0;e<6;e++){const a=r[Math.min(e,n-1)]
t.push(a.value),i.push(null==a.size?o.x:Object(s.h)(a.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}}
function f(e){const t=e&&e.length>0?{}:null,i=t?{}:null
if(!t)return{vvFields:t,vvRanges:i}
for(const r of e)if(r.field&&(t[r.type]=r.field),"size"===r.type){i.size||(i.size={})
const e=r
switch(Object(l.a)(e)){case a.e.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:u(e.minSize),maxSize:u(e.maxSize)}
break
case a.e.SIZE_SCALE_STOPS:i.size.scaleStops={stops:h(e.stops)}
break
case a.e.SIZE_FIELD_STOPS:if(e.levels){const t={}
for(const i in e.levels)t[i]=d(e.levels[i])
i.size.fieldStops={type:"level-dependent",levels:t}}else i.size.fieldStops={type:"static",...d(e.stops)}
break
case a.e.SIZE_UNIT_VALUE:i.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===r.type)i.color=y(r)
else if("opacity"===r.type)i.opacity=p(r)
else if("rotation"===r.type){const e=r
i.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:i}}function p(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]}
if("string"==typeof e.field){if(!e.stops)return null
{if(e.stops.length>8)return null
const i=e.stops
for(let e=0;e<8;++e){const r=i[Math.min(e,i.length-1)]
t.values[e]=r.value,t.opacities[e]=r.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null
{const i=e.stops&&e.stops.length>=0&&e.stops[0].opacity
for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=i}}return t}function m(e,t,i){e[4*t+0]=i.r/255,e[4*t+1]=i.g/255,e[4*t+2]=i.b/255,e[4*t+3]=i.a}function y(e){if(Object(r.j)(e))return null
if(e.normalizationField)return null
const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
if("string"==typeof e.field){if(!e.stops)return null
{if(e.stops.length>8)return null
t.field=e.field
const i=e.stops
for(let e=0;e<8;++e){const r=i[Math.min(e,i.length-1)]
t.values[e]=r.value,m(t.colors,e,r.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null
{const i=e.stops&&e.stops.length>=0&&e.stops[0].color
for(let e=0;e<8;e++)t.values[e]=1/0,m(t.colors,e,i)}}for(let e=0;e<32;e+=4)Object(n.b)(t.colors,e,!0)
return t}},1464:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return a}))
var r=i(177),s=i(876)
const n=r.a.getLogger("esri.renderers.visualVariables.support.utils"),o=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e
const t=e.clone(),i=t.visualVariables.map(e=>l(e)?c(e):e)
return t.visualVariables=i,t}
function a(e){return e.map(e=>l(e)?c(e.clone()):e)}function l(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function c(e){return e.stops=function(e,t){return t.length<=8?t:(n.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...r]=t,n=r.pop(),o=r[0].value,a=r[r.length-1].value,l=(a-o)/6,c=[]
for(let i=o;i<a;i+=l){let n=0
for(;i>=r[n].value;)n++
const o=r[n],a=t[n-1],l=i-a.value,u=o.value===a.value?1:l/(o.value-a.value)
if("color"===e){const e=r[n],s=t[n-1],o=e.color.clone()
o.r=h(s.color.r,o.r,u),o.g=h(s.color.g,o.g,u),o.b=h(s.color.b,o.b,u),o.a=h(s.color.a,o.a,u),c.push({value:i,color:o,label:e.label})}else if("size"===e){const e=r[n],o=t[n-1],a=Object(s.k)(e.size),l=h(Object(s.k)(o.size),a,u)
c.push({value:i,size:l,label:e.label})}else{const e=r[n],s=h(t[n-1].opacity,e.opacity,u)
c.push({value:i,opacity:s,label:e.label})}}return[i,...c,n]}(e,t):function(e){const[t,...i]=e,r=i.pop()
for(;i.length>6;){let e=0,t=0
for(let r=1;r<i.length;r++){const s=i[r-1],n=i[r],o=Math.abs(n.value-s.value)
o>t&&(t=o,e=r)}i.splice(e,1)}return[t,...i,r]}(t))}(e.type,e.stops),e}function h(e,t,i){return(1-i)*e+i*t}},1467:function(e,t,i){"use strict"
i.d(t,"a",(function(){return j})),i.d(t,"b",(function(){return b})),i.d(t,"c",(function(){return v})),i.d(t,"d",(function(){return w}))
var r,s=i(354),n=i(77),o=i(177),a=i(20),l=i(1379),c=i(1085),h=i(1233),u=i(856),d=i(178),f=i(858),p=(i(859),i(857)),m=i(864),y=i(1019)
let x=r=class extends c.a{writeLevels(e,t,i){for(const i in e){const e=this.levels[i]
return void(t.stops=e)}}clone(){return new r({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(y.e)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(y.e)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:Object(d.a)(this.levels)})}}
Object(u.a)([Object(f.b)()],x.prototype,"levels",void 0),Object(u.a)([Object(m.a)("levels")],x.prototype,"writeLevels",null),x=r=Object(u.a)([Object(p.a)("esri.views.2d.engine.LevelDependentSizeVariable")],x)
const _=o.a.getLogger("esri.views.2d.layers.support.clusterUtils")
n.a.add("esri-cluster-arcade-enabled",!0)
const g=Object(n.a)("esri-cluster-arcade-enabled"),b=(e,t,i,r)=>{const s=t.clone()
if(!w(s))return s
if(i.fields)for(const t of i.fields)S(e,t)
if("visualVariables"in s){const t=(s.visualVariables||[]).filter(e=>"$view.scale"!==e.valueExpression),n=v(t)
t.forEach(t=>{"rotation"===t.type?t.field?t.field=T(e,t.field,"avg_angle"):t.valueExpression&&(t.field=M(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=T(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=T(e,t.field,"avg"):(t.field=M(e,t.valueExpression,"avg"),t.valueExpression=null)}),Object(a.j)(n)&&!O(t)&&(t.push(j(i,r)),s.dynamicClusterSize=!0),s.visualVariables=t}switch(s.type){case"simple":break
case"unique-value":s.field?s.field=T(e,s.field,"mode"):s.valueExpression&&(s.field=M(e,s.valueExpression,"mode"),s.valueExpression=null)
break
case"class-breaks":s.normalizationField?(s.field=T(e,s.field,"norm",s.normalizationField),s.normalizationField=null):s.field?s.field=T(e,s.field,"avg"):(s.field=M(e,s.valueExpression,"avg"),s.valueExpression=null)}return s},v=e=>{for(const t of e)if("size"===t.type)return t
return null},O=e=>{for(const t of e)if("cluster_count"===t.field)return!0
return!1},j=(e,t)=>{const i=[new h.a({value:0,size:0}),new h.a({value:1})]
if(Object(a.j)(t))return new c.a({field:"cluster_count",stops:[...i,new h.a({value:2,size:0})]})
const r=Object.keys(t).reduce((r,s)=>({...r,[s]:[...i,new h.a({value:Math.max(2,t[s].minValue),size:e.clusterMinSize}),new h.a({value:Math.max(3,t[s].maxValue),size:e.clusterMaxSize})]}),{})
return new x({field:"cluster_count",levels:r})},w=e=>{const t=t=>_.error(new s.a("Unsupported-renderer",t,{renderer:e}))
if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType
if("field"!==i)return t("FeatureReductionCluster does not support a normalizationType of "+i),!1}}else if("simple"!==e.type)return t("FeatureReductionCluster does not support renderers of type "+e.type),!1
if(!g){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1
if(("visualVariables"in e&&e.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0}
function S(e,t){const{name:i,outStatistic:r}=t,{onStatisticField:n,onStatisticValueExpression:o,statisticType:a}=r
if(o){const t=Object(l.a)(o.toLowerCase())
e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:o,statisticType:a}})}else n?e.push({name:i,outStatistic:{onStatisticField:n,statisticType:a}}):_.error(new s.a("mapview-unsupported-field","Unable to handle field",{field:t}))}function M(e,t,i){const r=Object(l.a)(t),s="mode"===i?"cluster_type_"+r:"cluster_avg_"+r
return e.some(e=>e.name===s)||e.push({name:s,outStatistic:{onStatisticField:r,onStatisticValueExpression:t,statisticType:i}}),s}function T(e,t,i,r){if("cluster_count"===t||e.some(e=>e.name===t))return t
const s=function(e,t,i){switch(e){case"avg":case"avg_angle":return"cluster_avg_"+t
case"mode":return"cluster_type_"+t
case"norm":{const e=i,r="field",s=t.toLowerCase()+",norm:"+r+","+e.toLowerCase()
return"cluster_avg_"+Object(l.a)(s)}}}(i,t,r)
return e.some(e=>e.name===s)||("norm"===i?e.push({name:s,outStatistic:{onStatisticField:t,onStatisticNormalizationField:r,statisticType:i}}):e.push({name:s,outStatistic:{onStatisticField:t,statisticType:i}})),s}},1485:function(e,t,i){"use strict"
i.d(t,"a",(function(){return c}))
var r=i(884),s=i(943),n=i(904),o=i(869),a=i(1033),l=i(872)
function c(e){if(!e)return null
let t=null
const i=e.spatialReference,r=Object(l.e)(i)
if(!r)return"toJSON"in e?e.toJSON():e
const c=Object(l.p)(i)?102100:4326,d=a.a[c].maxX,f=a.a[c].minX,p=a.a[c].plus180Line,x=a.a[c].minus180Line
let _
const g="toJSON"in e?e.toJSON():e
if(Object(o.f)(g))_=u(g,d,f)
else if(Object(o.e)(g))g.points=g.points.map(e=>u(e,d,f)),_=g
else if(Object(o.d)(g))_=h(g,r)
else if(Object(o.g)(g)||Object(o.h)(g)){const e=y
Object(s.a)(e,g)
const i={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},r=Object(a.d)(i.xmin,f)*(2*d),o=0===r?g:function(e,t){const i=Object(a.b)(e)
for(const e of i)for(const i of e)i[0]+=t
return e}(g,r)
i.xmin+=r,i.xmax+=r,Object(n.b)(i,p)&&i.xmax!==d||Object(n.b)(i,x)&&i.xmin!==f?t=o:_=o}else _=g
return null!==t?(new m).cut(t,d):_}function h(e,t){if(!t)return e
const i=function(e,t){const i=[],{ymin:r,ymax:s}=e,n=e.xmax-e.xmin,o=e.xmin,a=e.xmax
let l
const[c,h]=t.valid
l=d(e.xmin,t)
const u=l.x,p=l.frameId
l=d(e.xmax,t)
const m=l.x,y=l.frameId,x=u===m&&n>0
if(n>2*h){const e={xmin:o<a?u:m,ymin:r,xmax:h,ymax:s},t={xmin:c,ymin:r,xmax:o<a?m:u,ymax:s},n={xmin:0,ymin:r,xmax:h,ymax:s},l={xmin:c,ymin:r,xmax:0,ymax:s},d=[],x=[]
f(e,n)&&d.push(p),f(e,l)&&x.push(p),f(t,n)&&d.push(y),f(t,l)&&x.push(y)
for(let e=p+1;e<y;e++)d.push(e),x.push(e)
i.push({extent:e,frameIds:[p]},{extent:t,frameIds:[y]},{extent:n,frameIds:d},{extent:l,frameIds:x})}else u>m||x?i.push({extent:{xmin:u,ymin:r,xmax:h,ymax:s},frameIds:[p]},{extent:{xmin:c,ymin:r,xmax:m,ymax:s},frameIds:[y]}):i.push({extent:{xmin:u,ymin:r,xmax:m,ymax:s},frameIds:[p]})
return i}(e,t).map(e=>e.extent)
return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map(e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]])}}function u(e,t,i){if(Array.isArray(e)){const r=e[0]
if(r>t){const i=Object(a.d)(r,t)
e[0]=r+i*(-2*t)}else if(r<i){const t=Object(a.d)(r,i)
e[0]=r+t*(-2*i)}}else{const r=e.x
if(r>t){const i=Object(a.d)(r,t)
e.x+=i*(-2*t)}else if(r<i){const t=Object(a.d)(r,i)
e.x+=t*(-2*i)}}return e}function d(e,t){const[i,r]=t.valid,s=2*r
let n,o=0
return e>r?(n=Math.ceil(Math.abs(e-r)/s),e-=n*s,o=n):e<i&&(n=Math.ceil(Math.abs(e-i)/s),e+=n*s,o=-n),{x:e,frameId:o}}function f(e,t){const{xmin:i,ymin:r,xmax:s,ymax:n}=t
return p(e,i,r)&&p(e,i,n)&&p(e,s,n)&&p(e,s,r)}function p(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}class m{cut(e,t){let i
if(e.rings)this.closed=!0,i=e.rings,this.minPts=4
else{if(!e.paths)return null
this.closed=!1,i=e.paths,this.minPts=2}const r=i.length,s=-2*t
for(let e=0;e<r;e++){const t=i[e]
if(t&&t.length>=this.minPts){const e=[]
for(const i of t)e.push([i[0]+s,i[1]])
i.push(e)}}return this.closed?e.rings=i:e.paths=i,e}}const y=Object(r.m)()},1486:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h}))
var r=i(1147),s=i(978),n=i(1025),o=i(919),a=i(1042),l=i(891),c=i(1277)
class h extends c.a{constructor(e,t,i){super(e,t,i,l.P,l.P)}destroy(){super.destroy(),this._transforms&&h.TransformCache.release(this.key.hash)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,[l,c]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*i,u=this.height/this.rangeY*i
Object(s.o)(n,h,0,0,0,u,0,l,c,1),Object(s.l)(this.transforms.dvs,e.displayViewMat3,n)
const d=this.transforms.labelMat2d,f=e.getScreenTransform(d,t),p=Object(a.a)()
Object(o.t)(p,[this.x,this.y],f),Object(r.a)(d,p),Object(r.f)(d,e.viewMat2d,d)}_createTransforms(){return h.TransformCache.acquire(this.key.hash)}}h.TransformCache=new class{acquire(e){return{refCount:1,version:-1,labelMat2d:Object(n.b)(),tileMat3:Object(n.b)(),dvs:Object(n.b)()}}release(e){}}},1487:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var r=i(20),s=i(891)
const n=2147483647
class o{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,i=e.byteLength/a.BYTES_PER_RECORD-t){const r=new a(new Int32Array(e,t*a.BYTES_PER_RECORD,i*a.ELEMENTS_PER_RECORD))
return new o(r)}size(){let e=this._cursor,t=0
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
const t=new o(null==(e=this._head)?void 0:e.copy())
if(!t._head)return t
let i=t._head,r=t._head._link
for(;r;)i._link=r.copy(),i=r,r=i._link
return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var e
return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}delete(e){let t=this._head,i=null
for(;t;){if(t.delete(e))return t.isEmpty()&&(Object(r.k)(i)&&(i._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0
i=t,t=t._link}return!1}}o.ELEMENTS_PER_RECORD=s.n,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT
class a{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,i=e.byteLength/this.BYTES_PER_RECORD-t){return new a(new Int32Array(e,t*this.BYTES_PER_RECORD,i*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,i=this.lookup(e)
if(i)for(this.id=n,++this._deletedCount;this.next()&&this.id===e;)this.id=n,++this._deletedCount
return this._index=t,i}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(Object(r.j)(this._offsets.instance)){this._offsets.instance=new Map
const e=this.copy()
e._index=-1
let t=0
for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._index),t=e.id)}if(!this._offsets.instance.has(e))return!1
const t=this._index
return this._index=this._offsets.instance.get(e),this.id!==n||(this._index=t,!1)}get id(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*a.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*a.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*a.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/a.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===n;);return this._index<this.size()}peekId(){const e=(this._index+1)*a.ELEMENTS_PER_RECORD
return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new a(this._packedRecords)
return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}a.ELEMENTS_PER_RECORD=s.n,a.BYTES_PER_RECORD=a.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT},1488:function(e,t,i){"use strict"
i.d(t,"a",(function(){return h}))
var r=i(354),s=i(177),n=i(1046),o=i(907),a=i(1235),l=i(1160)
const c=s.a.getLogger("esri/views/2d/engine/webgl/util/Matcher")
async function h(e,t,i,r){switch(e.type){case"simple":return u.fromBasicRenderer(e,t,i,r)
case"map":return p.fromUVRenderer(e,t,i,r)
case"interval":return f.fromCBRenderer(e,t,i,r)
case"dictionary":return x.fromDictionaryRenderer(e,t,i,r)
case"subtype":return d.fromSubtypes(e,t,i,r)}}class u{constructor(){this.type="feature",this._defaultResult=null}static async fromBasicRenderer(e,t,i,r){const s=new u
if(e.symbol){const n=await Object(l.b)(e.symbol,i,r),o=t.createTemplateGroup(n,null)
s.setDefault(o)}return s}size(){return 1}getDefault(){return this._defaultResult}setDefault(e){this._defaultResult=e}match(e,t,i,r,s){return this.getDefault()}async analyze(e,t,i,r,s,n){return null}}class d extends u{constructor(e,t){super(),this._subMatchers=e,this._subtypeField=t}static async fromSubtypes(e,t,i,r){const s=new Map,n=[]
for(const o in e.renderers){const a=parseInt(o,10),l=h(e.renderers[o],t,i,r).then(e=>s.set(a,e))
n.push(l)}return await Promise.all(n),new d(s,e.subtypeField)}match(e,t,i,r,s){const n=t.readAttribute(this._subtypeField),o=this._subMatchers.get(n)
return o?o.match(e,t,i,r,s):null}}class f extends u{constructor(e,t,i,r){super(),this.type="interval",this._intervals=[],this._isMaxInclusive=t,this._fieldIndex=r,this._field=e,this._normalizationInfo=i}static async fromCBRenderer(e,t,i,r){const{isMaxInclusive:s,normalizationField:n,normalizationTotal:o,normalizationType:a}=e,c=e.field,h=new f(c,s,{normalizationField:n,normalizationTotal:o,normalizationType:a},e.fieldIndex),u=await Object(l.b)(e.backgroundFillSymbol,i,r)
await Promise.all(e.intervals.map(async e=>{const s=await Object(l.b)(e.symbol,i,r),n=await t.createTemplateGroup(s,u),o={min:e.min,max:e.max}
h.add(o,n)}))
const d=await Object(l.b)(e.defaultSymbol,i,r)
if(d){const e=await t.createTemplateGroup(d,u)
h.setDefault(e)}return h}add(e,t){this._intervals.push({interval:e,result:t}),this._intervals.sort((e,t)=>e.interval.min-t.interval.min)}size(){return super.size()+this._intervals.length}match(e,t,i,r,s){if(null==this._fieldIndex&&!this._field)return this.getDefault()
const n=null!=this._fieldIndex?t.getComputedNumericAtIndex(this._fieldIndex):this._getValueFromField(t)
if(!n&&(null==n||isNaN(n)))return this.getDefault()
for(let e=0;e<this._intervals.length;e++){const{interval:t,result:i}=this._intervals[e],r=n>=t.min,s=this._isMaxInclusive?n<=t.max:n<t.max
if(r&&s)return i}return this.getDefault()}_needsNormalization(){const e=this._normalizationInfo
return e&&(e.normalizationField||e.normalizationTotal||e.normalizationType)}_getValueFromField(e){const t=e.readAttribute(this._field)
if(!this._needsNormalization()||null==t)return t
const{normalizationField:i,normalizationTotal:r,normalizationType:s}=this._normalizationInfo,n=!!i&&e.readAttribute(i)
if(s)switch(s){case"esriNormalizeByField":return n?t/n:void 0
case"esriNormalizeByLog":return Math.log(t)*Math.LOG10E
case"esriNormalizeByPercentOfTotal":return t/r*100
default:return void c.error("Found unknown normalization type: "+s)}else c.error("Normalization is required, but no type was set!")}}class p extends u{constructor(e,t,i){super(),this.type="map",this._nullResult=null,this._resultsMap=new Map,this._fieldsIndex=i,this._fields=e,this._seperator=t||""}static async fromUVRenderer(e,t,i,r){const s=e.fieldDelimiter,n=[e.field]
e.field2&&n.push(e.field2),e.field3&&n.push(e.field3)
const o=await Object(l.b)(e.backgroundFillSymbol,i,r),a=new p(n,s,e.fieldIndex)
await Promise.all(e.map.map(async e=>{const s=await Object(l.b)(e.symbol,i,r),n=await t.createTemplateGroup(s,o)
"<Null>"===e.value?a.setNullResult(n):a.add(e.value,n)}))
const c=await Object(l.b)(e.defaultSymbol,i,r)
if(c){const e=await t.createTemplateGroup(c,o)
a.setDefault(e)}return a}setNullResult(e){this._nullResult=e}add(e,t){this._resultsMap.set(e.toString(),t)}size(){return super.size()+this._resultsMap.size}match(e,t,i,r,s){if(null==this._fieldsIndex&&!this._fields)return this.getDefault()
const n=null!=this._fieldsIndex?t.getComputedStringAtIndex(this._fieldsIndex):this._getValueFromFields(t)
if(null!==this._nullResult&&(null==n||""===n||"<Null>"===n))return this._nullResult
if(!n&&null==n)return this.getDefault()
const o=n.toString()
return this._resultsMap.has(o)?this._resultsMap.get(o):this.getDefault()}_getValueFromFields(e){const t=[]
for(const i of this._fields){const r=e.readAttribute(i)
null==r||""===r?t.push("<Null>"):t.push(r)}return t.join(this._seperator)}}let m
async function y(){return m||(m=i.e(439).then(i.bind(null,1120))),m}class x extends u{constructor(e,t,i,r,s,o){super(),this.type="dictionary",this._groupIdCache=new n.a(100),this._loader=e,this._fieldMap=e.fieldMap,this._symbolFields=e.getSymbolFields(),this._templates=t,this._info=i,this._scaleFn=r,this._schemaUtilsModule=s,this._symbolOptions=o}static async fromDictionaryRenderer(e,t,r,s){const[{DictionaryLoader:n},l]=await Promise.all([i.e(341).then(i.bind(null,1073)),y()]),c=new n(e.url,e.config,e.fieldMap)
await c.fetchResources({spatialReference:r.spatialReference,fields:r.fields})
const h=await async function(e,t){const i=e||1
if("number"==typeof i)return(e,t,r)=>i
const r=await Object(o.d)(i,t.spatialReference,t.fields)
return(e,i,s)=>Object(a.a)(r,e,{$view:s},t.geometryType,i)||1}(e.scaleExpression,r)
return new x(c,t,r,h,l,e.symbolOptions)}async _analyzeFeature(e,t,i,s,n){const o=e.readLegacyFeature(),a=this._scaleFn(o,i,s),h=this._attributeHash(o)+"-"+a,u=this._groupIdCache.get(h)
if(u)return u
const d={...s,spatialReference:this._info.spatialReference,abortOptions:n,fields:this._info.fields},f=await this._loader.getSymbolAsync(o,d),p=this._schemaUtilsModule.createSymbolSchema(f,this._symbolOptions),m=Object(l.b)(p,this._info,t,n).then(e=>{if("expanded-cim"!==e.type)return c.error(new r.a("mapview-bad-type",`Found unexpected type ${e.type} in dictionary response`)),null
e.hash+="-"+a
for(const t of e.layers)t.scaleFactor=a,t.templateHash+="-"+a
return this._templates.createTemplateGroup(e,null)})
return this._groupIdCache.put(h,m,1),m}async analyze(e,t,i,r,s,n){const o=t.getCursor(),a=[]
for(;o.next();)a.push(this._analyzeFeature(o,i,r,s,n))
return Promise.all(a)}match(e,t,i,r,s){return null}_attributeHash(e){let t=""
for(const i of this._symbolFields){const r=this._fieldMap[i]
r&&(t+=e.attributes[r]+"-")}return t}}},1489:function(e,t,i){"use strict"
i.d(t,"a",(function(){return O}))
var r=i(354),s=i(77),n=i(177),o=i(874),a=i(20),l=i(861),c=i(1077),h=i(1016),u=i(891),d=i(1074),f=i(942),p=i(1310),m=i(1446),y=i(877)
const x=n.a.getLogger("esri.views.layers.2d.features.support.AttributeStore"),_=Object(p.b)(p.a,x),g={sharedArrayBuffer:Object(s.a)("esri-shared-array-buffer"),atomics:Object(s.a)("esri-atomics")}
function b(e,t){return i=>t(e(i))}class v{constructor(e,t,i,r){this.size=0,this.texelSize=4
const{pixelType:s,layout:n,textureOnly:o}=r
this.textureOnly=o||!1,this.pixelType=s,this._ctype=t,this.layout=n,this._resetRange(),this._shared=e,this.size=i,o||(this.data=this._initData(s,i,e,t))}get buffer(){return Object(a.b)(this.data,e=>e.buffer)}unsetComponentAllTexels(e,t){const i=Object(a.t)(this.data)
for(let r=0;r<this.size*this.size;r++)i[r*this.texelSize+e]&=~t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(e,t){const i=Object(a.t)(this.data)
for(let r=0;r<this.size*this.size;r++)i[r*this.texelSize+e]|=255&t
this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(e,t,i){const r=Object(a.t)(this.data)
for(const s of i)r[s*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}setComponentTexel(e,t,i){Object(a.t)(this.data)[i*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}unsetComponentTexel(e,t,i){Object(a.t)(this.data)[i*this.texelSize+e]&=~t,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}getData(e,t){const i=Object(d.f)(e)
return Object(a.t)(this.data)[i*this.texelSize+t]}setData(e,t,i){const r=Object(d.f)(e),s=1<<t
0!=(this.layout&s)?(this.data[r*this.texelSize+t]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):x.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===y.q.UNSIGNED_BYTE&&this._shared&&g.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===y.q.UNSIGNED_BYTE&&this._shared&&g.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(e){if(this.size=e,!this.textureOnly){const t=this._initData(this.pixelType,e,this._shared,this._ctype),i=Object(a.t)(this.data)
t.set(i),this.data=t}}toMessage(){const e=this.dirtyStart,t=this.dirtyEnd,i=this.texelSize
if(e>t)return null
this._resetRange()
const r=!(this._shared||"local"===this._ctype),s=this.pixelType,n=this.layout,o=Object(a.t)(this.data)
return{start:e,end:t,data:r&&o.slice(e*i,(t+1)*i)||null,pixelType:s,layout:n}}_initData(e,t,i,r){const s=i&&"local"!==r?SharedArrayBuffer:ArrayBuffer,n=Object(f.l)(e),o=new n(new s(t*t*4*n.BYTES_PER_ELEMENT))
for(let e=0;e<o.length;e+=4)o[e+1]=255
return o}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class O{constructor(e,t){this._client=e,this.config=t,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(u.v),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set
const i=t.supportsTextureFloat?y.q.FLOAT:y.q.UNSIGNED_BYTE
_(`Creating AttributeStore ${g.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:y.q.UNSIGNED_BYTE,layout:1},{pixelType:y.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:y.q.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}update(e,t){this.config=t
const i=t.schema.processors[0].storage,r=Object(c.a)(this._schema,i)
if((e.targets.feature||e.targets.aggregate)&&(e.storage.data=!0),r&&(Object(s.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),e.storage.data=!0,this._schema=i,this._attributeComputeMap.clear(),!Object(a.j)(i))){switch(i.target){case"feature":this._targetType=d.c
break
case"aggregate":this._targetType=d.b}if("subtype"===i.type)for(const e in i.mapping){const t=i.mapping[e]
if(Object(a.k)(t))for(const e of t.mapping)this._bindAttribute(e)}else for(const e of i.mapping)this._bindAttribute(e)}}onTileData(e,t){if(Object(a.j)(t.addOrUpdate))return
const i=t.addOrUpdate.getCursor()
for(;i.next();){const e=i.getDisplayId()
this.setAttributeData(e,i)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}async setHighlight(e,t){const i=this._getBlock(0),r=t.map(e=>Object(d.f)(e))
i.lock(),i.unsetComponentAllTexels(0,1),i.setComponent(0,1,r),i.unlock(),this._idsToHighlight.clear()
for(const t of e)this._idsToHighlight.add(t)
await this.sendUpdates()}async updateFilters(e,t){const{config:i,service:r,spatialReference:n}=t,{filters:o}=i,a=o.map((e,t)=>this._updateFilter(e,t,r,n));(await Promise.all(a)).some(e=>e)&&(e.storage.filters=!0,Object(s.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(e,t,i,r){const s=Object(d.f)(e)
this._ensureSizeForTexel(s),this._getBlock(t).setData(e,i,r)}getData(e,t,i){return this._getBlock(t).getData(e,i)}getHighlightFlag(e){return this._idsToHighlight.has(e)?u.s:0}unsetAttributeData(e){const t=Object(d.f)(e)
this._getBlock(0).setData(t,0,0)}setAttributeData(e,t){const i=Object(d.f)(e)
if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(t)),this._targetType!==Object(d.g)(e))return
const r=this._attributeComputeMap,s=this.config.supportsTextureFloat?1:2
r.size&&r.forEach((e,r)=>{const n=r*s%4,a=Math.floor(r*s/4),l=this._getBlock(a+u.e),c=e(t)
if(this.config.supportsTextureFloat)l.setData(i,n,c)
else if(c===u.x)l.setData(i,n,255),l.setData(i,n+1,255)
else{const e=Object(o.f)(Math.round(c),-32767,32766)+32768,t=255&e,r=(65280&e)>>8
l.setData(i,n,t),l.setData(i,n+1,r)}})}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise
if(this._currUpdate)return this._nextUpdate=Object(l.g)(),this._nextUpdate.promise
const e={blocks:this._blocks.map(e=>Object(a.k)(e)?e.toMessage():null)}
return this._currUpdate=this._createResources().then(()=>{const t=()=>{if(this._currUpdate=null,this._nextUpdate){const e=this._nextUpdate
this._nextUpdate=null,this.sendUpdates().then(()=>e.resolve())}},i=this._client.update(e,this._signal).then(t).catch(t)
return this._client.render(this._signal),i}).catch(e=>Object(l.m)(e)?(this._createResourcesPromise=null,this._createResources()):(x.error(new r.a("mapview-attribute-store","Encountered an error during client update",e)),Promise.resolve())),this._currUpdate}_ensureSizeForTexel(e){for(;e>=this._size*this._size;)if(this._expand())return}_bindAttribute(e){let t
if(null!=e.fieldIndex)e.normalizationField&&x.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),t=t=>t.getComputedNumericAtIndex(e.fieldIndex)
else{if(!e.field)return
t=e.normalizationField?t=>{const i=t.readAttribute(e.normalizationField)
return i?t.readAttribute(e.field)/i:null}:t=>t.readAttribute(e.field)}e.valueRepresentation&&(t=b(t,t=>Object(m.b)(t,e.valueRepresentation))),this._attributeComputeMap.set(e.binding,b(t,e=>null===e||isNaN(e)||e===1/0?u.x:e))}_createResources(){if(Object(a.k)(this._createResourcesPromise))return this._createResourcesPromise
this._getBlock(u.a),this._getBlock(u.d),_("Initializing AttributeStore")
const e={shared:g.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:Object(a.m)(this._blocks,e=>({textureOnly:e.textureOnly,buffer:e.buffer,pixelType:e.pixelType}))},t=this._client.initialize(e,this._signal).catch(e=>{Object(l.m)(e)?this._createResourcesPromise=null:x.error(new r.a("mapview-attribute-store","Encountered an error during client initialization",e))})
return this._createResourcesPromise=t,t.then(()=>Object(a.j)(this._createResourcesPromise)?this._createResources():void 0),t}_getBlock(e){const t=this._blocks[e]
if(Object(a.k)(t))return t
_("Initializing AttributeBlock at index "+e)
const i=g.sharedArrayBuffer,r=this._client.type,s=new v(i,r,this._size,this._blockDescriptors[e])
return this._blocks[e]=s,this._createResourcesPromise=null,s}_expand(){if(this._size<this.config.maxTextureSize){const e=this._size<<=1
return _("Expanding block size to",e,this._blocks),Object(a.h)(this._blocks,t=>t.expand(e)),this._createResourcesPromise=null,this._size=e,0}return x.error(new r.a("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(e,t,i,r){const s=this._filters[t],n=Object(a.k)(s)&&s.hash
if(!s&&!e)return!1
if(n===JSON.stringify(e))return!1
if(Object(a.j)(e)){if(!s)return!1
const e=1<<t+1,i=this._getBlock(0)
return this._filters[t]=null,i.setComponentAllTexels(0,e),this.sendUpdates(),!0}const o=await this._getFilter(t,i)
return await o.update(e,r),!0}async _getFilter(e,t){const r=this._filters[e]
if(Object(a.k)(r))return r
const{default:s}=await i.e(176).then(i.bind(null,1734)),n=new s({geometryType:t.geometryType,hasM:!1,hasZ:!1,timeInfo:t.timeInfo,fieldsIndex:new h.a(t.fields)})
return this._filters[e]=n,n}isVisible(e){return!!(2&this._getBlock(0).getData(e,0))}getFilterFlags(e){let t=0
const i=Object(d.e)(e.getDisplayId())
for(let r=0;r<this._filters.length;r++){const s=!!(i&1<<r),n=this._filters[r]
t|=(!s||Object(a.j)(n)||n.check(e)?1:0)<<r}let r=0
if(this._idsToHighlight.size){const t=e.getObjectId()
r=this.getHighlightFlag(t)}return t<<1|r}}},1490:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var r=i(856),s=i(1010),n=i(858),o=(i(353),i(77),i(859),i(857))
const a=e=>{let t=class extends(Object(s.b)(e)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}}
return Object(r.a)([Object(n.b)()],t.prototype,"graphics",void 0),Object(r.a)([Object(n.b)()],t.prototype,"renderer",void 0),Object(r.a)([Object(n.b)()],t.prototype,"updating",void 0),Object(r.a)([Object(n.b)()],t.prototype,"view",void 0),t=Object(r.a)([Object(o.a)("esri.views.layers.GraphicsView")],t),t}},1494:function(e,t,i){"use strict"
i.d(t,"a",(function(){return We}))
var r=i(856),s=i(862),n=i(1251),o=i(912),a=i(77),l=i(20),c=i(861),h=i(858),u=(i(353),i(859),i(857)),d=i(659),f=i(884),p=i(916),m=i(869),y=i(1485),x=i(872),_=i(1140),g=i(1179),b=i(1094),v=i(891)
class O{constructor(){this._dirties=[{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1},{vertexFrom:-1,vertexCount:-1,indexFrom:-1,indexCount:-1,allDirty:!1}]}hasDirty(){return this._dirties.some(e=>-1!==e.indexCount||e.allDirty)}markAllClean(){for(const e of this._dirties)e.indexFrom=-1,e.indexCount=-1,e.vertexFrom=-1,e.vertexCount=-1,e.allDirty=!1}markAllDirty(){for(const e of this._dirties)e.allDirty=!0}forEach(e){for(let t=0;t<this._dirties.length;++t){const{indexCount:i,indexFrom:r,vertexCount:s,vertexFrom:n,allDirty:o}=this._dirties[t],a={}
let l,c=!1;(o||-1!==n&&s>0)&&(a.geometry={count:s,from:n,allDirty:o},c=!0),(o||-1!==r&&i>0)&&(l={count:i,from:r,allDirty:o},c=!0),c&&e({indices:l,vertices:a},t)}}markDirtyIndices(e,t,i){const r=this._dirties[e],s=t,n=i
if(!r.allDirty)if(-1!==r.indexCount){const e=Math.min(r.indexFrom,s),t=Math.max(r.indexFrom+r.indexCount,s+n)-e
r.indexFrom=e,r.indexCount=t}else r.indexFrom=s,r.indexCount=n}markDirtyVertices(e,t,i,r){const s=this._dirties[e],n=i,o=r
if(!s.allDirty)if(-1!==s.vertexCount){const e=Math.min(s.vertexFrom,n),t=Math.max(s.vertexFrom+s.vertexCount,n+o)-e
s.vertexFrom=e,s.vertexCount=t}else s.vertexFrom=n,s.vertexCount=o}}class j{constructor(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}get largestRange(){return this._largestRange}rangeCreated(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}rangeResized(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}findBestRange(e){let t=this._parent._freeHead,i=null
for(;null!==t;)t.count>=e&&(!i||t.count-e<i.count-e)&&(i=t),t=t.next
return i}findAdjacentRanges(e,t){let i=!0,r=!1,s=null,n=this._parent._freeHead
for(;i&&!r;){const o=null!==s?s.from+s.count:0,a=null!==n?n.from:this._parent._size
e>=o&&e+t<=a?(i=!1,r=!0):null!==n?(s=n,n=n.next):i=!1}return[s,n]}_updateLargestRange(){let e=null,t=this._parent._freeHead
for(;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next
this._largestRange=e}}class w{constructor(e,t){this._allocated=0,this._size=e,this._freeHead=e>0?{from:0,count:e,prev:null,next:null}:null,this._bookKeeper=t||new j(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}allocate(e){const t=this._bookKeeper.findBestRange(e)
if(null===t)return-1
const i=t.from,r=t.count
if(t.from+=e,t.count-=e,this._bookKeeper.rangeResized(t,i,r),this._allocated+=e,0===t.count){const e=null!==t.prev?this._freeHead:t.next
w._removeRange(t),this._freeHead=e}return i}free(e,t){const[i,r]=this._bookKeeper.findAdjacentRanges(e,t),s={from:e,count:t,prev:i,next:r}
if(null!==i&&(i.next=s),null!==r&&(r.prev=s),this._bookKeeper.rangeCreated(s),this._allocated-=t,null!==r&&s.from+s.count===r.from){const e=s.from,t=s.count
w._fuse(s,r),w._removeRange(r),this._bookKeeper.rangeResized(s,e,t),this._bookKeeper.rangeResized(r,void 0,0)}if(null!==i&&i.from+i.count===s.from){const e=i.from,t=i.count
w._fuse(i,s),w._removeRange(s),this._bookKeeper.rangeResized(i,e,t),this._bookKeeper.rangeResized(s,void 0,0)}this._freeHead=null!==s.prev?this._freeHead:s}get fragmentation(){const e=this._size-this._allocated
return 0===e?0:1-this._bookKeeper.largestRange.count/e}static _removeRange(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)}static _fuse(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)}}var S=i(942)
const M=["FILL","LINE","MARKER","TEXT","LABEL"]
class T{constructor(e,t,i,r){this._strides=e,this._displayList=t,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=i
for(const t in e){this._freeListsAndStorage[t]={vtxFreeList:r?new w(r):null,idxFreeList:r?new w(r):null,vertexBuffers:{},indexBuffer:r?new Uint32Array(r):null}
for(const i in e[t])this._freeListsAndStorage[t].vertexBuffers[i]={data:r?Object(S.b)(r,e[t][i]):null,stride:e[t][i]}}}static fromTileData(e,t){const i=function(e){const t=e.getStrides(),i={}
for(let e=0;e<t.length;e++)i[M[e]]=t[e]
return i}(e),r=[0,0,0,0,0],s=[0,0,0,0,0],n=e.tileDisplayData.displayObjects
for(const e of n)for(const t of e.displayRecords)r[t.geometryType]=Math.max(r[t.geometryType],t.vertexFrom+t.vertexCount),s[t.geometryType]=Math.max(s[t.geometryType],t.indexFrom+t.indexCount)
const o=new T(i,e.tileDisplayData.displayList,t,null)
for(let t=0;t<e.tileBufferData.geometries.length;++t){const i=r[t],n=s[t],a=e.tileBufferData.geometries[t],l=M[t],c=o._storageFor(l),h=e.tileBufferData.geometries[t].indexBuffer
let u
c.indexBuffer=h,c.idxFreeList=new w(h.length),c.idxFreeList.allocate(n)
for(const i in a.vertexBuffer){const r=e.tileBufferData.geometries[t].vertexBuffer[i]
c.vertexBuffers[i].data=r.data,c.vertexBuffers[i].stride=r.stride
const s=Object(S.A)(r.stride),n=r.data.length*s/r.stride
u||(u=n)}c.vtxFreeList=new w(u),c.vtxFreeList.allocate(i)}return o}delete(e){const t=M[e.geometryType]
this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0}setMeshData(e,t,i,r,s){const n=M[e.geometryType]
let o,a
e.meshData=null,void 0===e.vertexFrom?(a=t.vertexCount,o=this._allocateVertices(n,a)):t.vertexCount>e.vertexCount?(this._freeVertices(n,e.vertexFrom,e.vertexCount),a=t.vertexCount,o=this._allocateVertices(n,a)):t.vertexCount===e.vertexCount?(o=e.vertexFrom,a=e.vertexCount):(this._freeVertices(n,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),o=e.vertexFrom,a=t.vertexCount)
let l,c,h,u=!0
if(void 0===e.indexFrom?(l=s,h=t.indexCount,c=this._allocateIndices(n,h)):t.indexCount>e.indexCount?(l=this._displayList.removeFromList(e),this._freeIndices(n,e.indexFrom,e.indexCount),h=t.indexCount,c=this._allocateIndices(n,h)):t.indexCount===e.indexCount?(u=!1,c=e.indexFrom,h=e.indexCount):(l=this._displayList.removeFromList(e),this._freeIndices(n,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),c=e.indexFrom,h=t.indexCount),-1!==o&&-1!==c){const s=this._storageFor(n)
if(Object(S.e)(o,c,s.vertexBuffers,s.indexBuffer,t,i,r),e.vertexFrom=o,e.indexFrom=c,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,e.vertexFrom,e.vertexCount)}return u&&this._displayList.addToList(e,l),!0}return-1!==o&&this._freeVertices(n,o,a),-1!==c&&this._freeIndices(n,c,h),e.setMeshDataFromBuffers(t,i,r),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1}tryAddMeshData(e,t){const i=t.vertexBuffer,r=t.indexBuffer,s=M[e.geometryType],n=this._allocateVertices(s,e.vertexCount)
if(-1===n)return this._freeVertices(s,n,e.vertexCount),!1
const o=this._allocateIndices(s,e.indexCount)
if(-1===o)return this._freeVertices(s,n,e.vertexCount),this._freeIndices(s,o,e.indexCount),!1
const a=this._storageFor(s)
if(Object(S.e)(n,o,a.vertexBuffers,a.indexBuffer,e,i,r),e.vertexFrom=n,e.indexFrom=o,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount)
for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,n,e.vertexCount)}return this._displayList.addToList(e),!0}_allocateVertices(e,t){const i=this._storageFor(e),r=i.vtxFreeList.allocate(t)
return-1===r||i.vtxFreeList.fragmentation>.5?-1:r}_freeVertices(e,t,i){this._storageFor(e).vtxFreeList.free(t,i)}_freeIndices(e,t,i){this._storageFor(e).idxFreeList.free(t,i)}_allocateIndices(e,t){const i=this._storageFor(e),r=i.idxFreeList.allocate(t)
return-1===r||i.idxFreeList.fragmentation>.5?-1:r}_storageFor(e){return this._freeListsAndStorage[e]}_stridesFor(e,t){return this._strides[e][t]}}var I=i(985),C=i(877),R=i(998)
class E{constructor(e){this.geometryMap=Object(S.f)(()=>({indexBuffer:I.a.createIndex(e,C.D.STATIC_DRAW),vao:null}),(t,i)=>({vertexBuffer:I.a.createVertex(e,S.a[i])}))}dispose(){for(let e=0;e<5;e++){const t=this.geometryMap[e]
if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose()
for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}}get(e){const t=this.geometryMap[e]
return{getVAO(e,i,r){if(!t.data.vao){const s={}
for(const e in t.buffers)s[e]=t.buffers[e].data.vertexBuffer
t.data.vao=new R.a(e,r,i,s,t.data.indexBuffer)}return t.data.vao}}}has(e){return null!=this.geometryMap[e]}upload(e,t){t.forEach((t,i)=>{this._upload(t,i,e)})}_upload(e,t,i){if(e.indices&&(e.indices.allDirty?this._uploadIndices(i,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(i,t,e.indices.from,e.indices.count)),e.vertices){const r=e.vertices
for(const e in r){const s=r[e]
s.allDirty?this._uploadVertices(i,t,e):null!=s.from&&null!=s.count&&this._uploadVertices(i,t,e,s.from,s.count)}}}_uploadVertices(e,t,i,r,s){const n=this.geometryMap[t]
if(!n)return
const o=e.geometries[t].vertexBuffer[i]
if(!o)return
const a=o.stride,l=o.data.buffer
n.buffers[i]&&l.byteLength>0&&(null!=r&&null!=s?n.buffers[i].data.vertexBuffer.setSubData(l,r*a,r*a,(r+s)*a):n.buffers[i].data.vertexBuffer.setData(l))}_uploadIndices(e,t,i,r){const s=this.geometryMap[t]
if(!s)return
const n=e.geometries[t].indexBuffer.buffer
s.data.indexBuffer&&n.byteLength>0&&(null!=i&&null!=r?s.data.indexBuffer.setSubData(n,4*i,4*i,4*(i+r)):s.data.indexBuffer.setData(n))}}var z=i(1486)
class L extends z.a{constructor(){super(...arguments),this._data=null,this._displayList=null,this._lastCommitTime=0,this._hasData=!1,this._invalidated=!1,this._wglBuffers=null,this._dirtyMap=new O}destroy(){super.destroy(),this.clear()}get hasData(){return!!this._hasData}get displayObjects(){var e
return null!=(e=this._displayObjects)?e:[]}getGeometry(e){return this._wglBuffers&&this._wglBuffers.has(e)?this._wglBuffers.get(e):null}getDisplayList(){return this._displayList}patch(e){if(!0===e.clear)return this.clear(),void(this._hasData=!1)
const t=e.addOrUpdate,i=e.remove
!this._data&&t&&t.tileDisplayData.displayObjects.length?(t.tileDisplayData.computeDisplayList(),this._dirtyMap=new O,this._dispRecStore=T.fromTileData(t,this._dirtyMap),this._data=t,this._dirtyMap.markAllDirty(),this._hasData=!0,e.end&&this.ready()):this._data&&(t&&t.tileDisplayData.displayObjects.length||i.length)?this._doPatchData(e):e.end&&this.ready(),e.end&&!this._data&&this.clear(),this.requestRender(),this.emit("change")}commit(e){e.time&&e.time===this._lastCommitTime||(this._lastCommitTime=e.time,this.visible&&this._data&&(this._wglBuffers||(this._wglBuffers=new E(e.context)),(this._dirtyMap.hasDirty()||this._invalidated)&&(this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._dirtyMap.markAllClean())))}clear(){this._data=null,this._displayList=null,this._dispRecStore=null,this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)}_doPatchData(e){this._invalidated=!0,this._patchData(e)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=T.fromTileData(this._data,this._dirtyMap)),this.requestRender()}_patchData(e){let t=!0
const i=e.addOrUpdate&&e.addOrUpdate.tileDisplayData&&e.addOrUpdate.tileDisplayData.displayObjects||[],r=(e.remove||[]).slice()
for(const e of i)null!=e.insertAfter&&r.push(e.id)
for(const e of r){const t=this._data.tileDisplayData.displayObjectRegistry.get(e)
if(t){this._data.tileDisplayData.displayList.removeFromList(t.displayRecords)
for(const e of t.displayRecords)this._dispRecStore.delete(e)
this._data.tileDisplayData.displayObjectRegistry.delete(e)
const i=this._data.tileDisplayData.displayObjects.indexOf(t)
this._data.tileDisplayData.displayObjects.splice(i,1)}}for(const r of i){let i,s=this._data.tileDisplayData.displayObjectRegistry.get(r.id)
if(s){const e=s.displayRecords
s.set(r),s.displayRecords=e
const t=s.displayRecords.length
for(let e=0;e<t;++e){const t=s.displayRecords[e],i=r.displayRecords[e];(e>=r.displayRecords.length||t.geometryType!==i.geometryType||t.symbolLevel!==i.symbolLevel||t.zOrder!==i.zOrder||t.materialKey!==i.materialKey)&&(this._dispRecStore.delete(s.displayRecords[e]),e<r.displayRecords.length&&(s.displayRecords[e]=void 0))}s.displayRecords.length=r.displayRecords.length}else{let e
s=r.copy(),s.displayRecords=[],this._data.tileDisplayData.displayObjectRegistry.set(r.id,s)
const t=this._data.tileDisplayData.displayObjects
if(null!=s.insertAfter)if(i={},s.insertAfter>=0){const i=this._data.tileDisplayData.displayObjectRegistry.get(s.insertAfter)
i?(e=t.indexOf(i)+1,e<t.length?t.splice(e,0,s):(t.push(s),e=t.length)):(t.push(s),e=t.length)}else t.unshift(s),e=0
else t.push(s),e=t.length
if(i){const s=r.displayRecords.length>0?1:0
let n=0
for(let r=e-1;r>=0&&n<s;--r)for(let e=t[r].displayRecords.length-1;e>=0&&n<s;--e){const s=t[r].displayRecords[e],o=this._data.tileDisplayData.displayList.getDPInfoType()
i[o]||(i[o]=s,++n)}}}const n=r.displayRecords.length
for(let o=0;o<n;++o){const n=r.displayRecords[o]
let a=s.displayRecords[o]
a?(a.meshData=n.meshData,a.materialKey=n.materialKey):(a=n.copy(),a.vertexFrom=void 0,a.indexFrom=void 0,s.displayRecords[o]=a)
const l=n.geometryType,c=this._data.tileDisplayData.displayList.getDPInfoType(),h=e.addOrUpdate.tileBufferData.geometries[l],u=h.vertexBuffer,d=h.indexBuffer
let f
i&&(f=i[c]?this._data.tileDisplayData.displayList.splitAfter(i[c]):-1),t=this._dispRecStore.setMeshData(a,n,u,d,f)&&t,i&&null!=a.indexFrom&&null!=a.indexFrom&&(i[c]=a)}}return t}}class F{constructor(){this._byGeometryType=null}get satisfied(){return!this._byGeometryType}reset(){this._byGeometryType=null}verticesFor(e){return this._byGeometryType?this._byGeometryType[e].vertices:0}indicesFor(e){return this._byGeometryType?this._byGeometryType[e].indices:0}needMore(e,t,i){if(!t&&!i)return
this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}])
const r=this._byGeometryType[e]
r.vertices+=t,r.indices+=i}}class A{constructor(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}clone(){const e=new A
for(let t=0;t<this.geometries.length;t++){const i=this.geometries[t],r=e.geometries[t]
r.indexBuffer=i.indexBuffer.slice(),r.vertexBuffer={}
for(const e in i.vertexBuffer){const{data:t,stride:s}=i.vertexBuffer[e]
r.vertexBuffer[e]={data:t.slice(),stride:s}}}return e}static deserialize(e){const t=new A
for(let i=0;i<5;++i){t.geometries[i].indexBuffer=new Uint32Array(e.geometries[i].indexBuffer),t.geometries[i].vertexBuffer={}
for(const r in e.geometries[i].vertexBuffer)t.geometries[i].vertexBuffer[r]={data:Object(S.c)(e.geometries[i].vertexBuffer[r].data,e.geometries[i].vertexBuffer[r].stride),stride:e.geometries[i].vertexBuffer[r].stride}}return t}serialize(){const e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]}
for(let t=0;t<5;++t)for(const i in this.geometries[t].vertexBuffer)e.geometries[t].vertexBuffer[i]={data:this.geometries[t].vertexBuffer[i].data.buffer,stride:this.geometries[t].vertexBuffer[i].stride}
return e}getBuffers(){const e=[]
for(let t=0;t<5;++t){e.push(this.geometries[t].indexBuffer.buffer)
for(const i in this.geometries[t].vertexBuffer)e.push(this.geometries[t].vertexBuffer[i].data.buffer)}return e}}var P=i(908)
function D(e,t,i,...r){t<e.length?e.splice(t,i,...r):e.push(...r)}const k=new Map
k.set(P.c.MAP,[P.d.FILL,P.d.LINE,P.d.MARKER,P.d.TEXT]),k.set(P.c.LABEL,[P.d.LABEL]),k.set(P.c.LABEL_ALPHA,[P.d.LABEL])
class B{constructor(){this.symbolLevels=[]}replay(e,t,i){for(const r of this.symbolLevels)for(const s of r.zLevels){const r=s.geometryDPInfo.unified
if(r)for(const s of r){const r=e.painter.getGeometryBrush(s.geometryType),n=t.getGeometry(s.geometryType),o={geometryType:s.geometryType,materialKey:s.materialKey,indexFrom:s.indexFrom,indexCount:s.indexCount,target:n}
r.prepareState(e,t),r.drawGeometry(e,t,o,i)}}}get empty(){return!this.symbolLevels||0===this.symbolLevels.length}clear(){this.symbolLevels.length=0}addToList(e,t){if(Array.isArray(e))for(const i of e)this._addToList(i,t)
else this._addToList(e,t)}removeFromList(e){Array.isArray(e)||(e=[e])
let t=null
for(const i of e)t=this._removeFromList(i)
return t}clone(){const e=new B
for(const t of this.symbolLevels)e.symbolLevels.push(t.clone())
return e}splitAfter(e){const t=this._getDisplayList(e.symbolLevel,e.zOrder),i=t.length,r=e.indexFrom+e.indexCount
for(let s=0;s<i;++s){const i=t[s]
if(i.geometryType===e.geometryType&&r>i.indexFrom&&r<=i.indexFrom+i.indexCount){if(r<i.indexFrom+i.indexCount){const e=new N
e.geometryType=i.geometryType,e.materialKey=i.materialKey,e.indexFrom=r,e.indexCount=i.indexFrom+i.indexCount-r,t.splice(s+1,0,e),i.indexCount=r-i.indexFrom}return s}}}_addToList(e,t){const i=e.symbolLevel,r=e.zOrder,s=this._getDisplayList(i,r),n=null!=t?t:s.length-1,o=n>=0&&n<s.length?s[n]:null
if(null!==o&&o.materialKey===e.materialKey&&o.indexFrom+o.indexCount===e.indexFrom&&o.geometryType===e.geometryType)o.indexCount+=e.indexCount
else{const t=new N
t.indexFrom=e.indexFrom,t.indexCount=e.indexCount,t.materialKey=e.materialKey,t.geometryType=e.geometryType,D(s,n+1,0,t)}}_removeFromList(e){const t=e.symbolLevel,i=e.zOrder,r=this._getDisplayList(t,i),s=r.length
let n
for(let t=0;t<s;++t){const i=r[t]
if(e.indexFrom+e.indexCount>i.indexFrom&&e.indexFrom<i.indexFrom+i.indexCount&&i.geometryType===e.geometryType){n=t
break}}if(void 0!==n){const t=r[n]
if(e.indexFrom===t.indexFrom)return t.indexCount-=e.indexCount,t.indexFrom+=e.indexCount,0===t.indexCount&&D(r,n,1),n-1
if(e.indexFrom+e.indexCount===t.indexFrom+t.indexCount)return t.indexCount-=e.indexCount,0===t.indexCount?(D(r,n,1),n-1):n
{const i=t.indexFrom,s=e.indexFrom-t.indexFrom,o=e.indexCount,a=t.indexFrom+t.indexCount-(e.indexFrom+e.indexCount)
t.indexCount=s
const l=new N
return l.geometryType=t.geometryType,l.materialKey=t.materialKey,l.indexFrom=i+s+o,l.indexCount=a,D(r,n+1,0,l),n}}return null}_getDisplayList(e,t){let i
const r=this.symbolLevels.length
for(let t=0;t<r;t++)if(this.symbolLevels[t].symbolLevel===e){i=this.symbolLevels[t]
break}let s
i||(i=new U,i.symbolLevel=e,this.symbolLevels.push(i))
const n=i.zLevels.length
for(let e=0;e<n;e++)if(i.zLevels[e].zLevel===t){s=i.zLevels[e]
break}return s||(s=new G,s.geometryDPInfo=new V,s.zLevel=t,i.zLevels.push(s)),s.geometryDPInfo.unified||(s.geometryDPInfo.unified=[]),s.geometryDPInfo.unified}getDPInfoType(){return"unified"}}class N{constructor(){this.materialKey=null,this.indexFrom=0,this.indexCount=0}clone(){const e=new N
return e.geometryType=this.geometryType,e.materialKey=this.materialKey,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e}}class V{constructor(){this.fill=null,this.line=null,this.marker=null,this.text=null,this.label=null,this.unified=null}clone(){const e=new V
return e.fill=this.fill&&this.fill.map(e=>e.clone()),e.line=this.line&&this.line.map(e=>e.clone()),e.marker=this.marker&&this.marker.map(e=>e.clone()),e.text=this.text&&this.text.map(e=>e.clone()),e.label=this.label&&this.label.map(e=>e.clone()),e.unified=this.unified&&this.unified.map(e=>e.clone()),e}}class G{constructor(){this.geometryDPInfo=new V}clone(){const e=new G
return e.zLevel=this.zLevel,e.geometryDPInfo=this.geometryDPInfo.clone(),e}}class U{constructor(){this.zLevels=[]}clone(){const e=new U
e.symbolLevel=this.symbolLevel
for(const t of this.zLevels)e.zLevels.push(t.clone())
return e}}class W{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(e,t,i){for(const t in e)this.vertexData.set(t,e[t])
for(const t in this.vertexData)null===e[t]&&this.vertexData.delete(t)
this.vertexCount=t,this.indexData=i}}class Z{constructor(e,t,i,r=0,s=0){this.id=e,this.geometryType=t,this.materialKey=i,this.minZoom=r,this.maxZoom=s,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}get sortKey(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey}clone(){return this.copy()}copy(){const e=new Z(this.id,this.geometryType,this.materialKey)
return e.vertexFrom=this.vertexFrom,e.vertexCount=this.vertexCount,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e.zOrder=this.zOrder,e.symbolLevel=this.symbolLevel,e.meshData=this.meshData,e.minZoom=this.minZoom,e.maxZoom=this.maxZoom,e}setMeshDataFromBuffers(e,t,i){const r=new W
for(const i in t){const s=t[i].stride,n=t[i].data,o=[],a=Object(S.A)(s)
for(let t=0;t<s*e.vertexCount/a;++t)o[t]=n[t+s*e.vertexFrom/a]
r.vertexData.set(i,o)}r.indexData.length=0
for(let t=0;t<e.indexCount;++t)r.indexData[t]=i[t+e.indexFrom]-e.vertexFrom
r.vertexCount=e.vertexCount,this.meshData=r}readMeshDataFromBuffers(e,t){this.meshData?this.meshData.clear():this.meshData=new W
for(const t in e){const i=e[t].stride,r=e[t].data,s=[],n=Object(S.A)(i)
for(let e=0;e<i*this.vertexCount/n;++e)s[e]=r[e+i*this.vertexFrom/n]
this.meshData.vertexData.set(t,s)}this.meshData.indexData.length=0
for(let e=0;e<this.indexCount;++e)this.meshData.indexData[e]=t[e+this.indexFrom]-this.vertexFrom
this.meshData.vertexCount=this.vertexCount}writeMeshDataToBuffers(e,t,i,r){for(const i in t){const r=t[i].stride,s=this.meshData.vertexData.get(i),n=t[i].data,o=Object(S.A)(r)
for(let t=0;t<r*this.meshData.vertexCount/o;++t)n[t+r*e/o]=s[t]}for(let t=0;t<this.meshData.indexData.length;++t)r[t+i]=this.meshData.indexData[t]+e
this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=i,this.indexCount=this.meshData.indexData.length}static writeAllMeshDataToBuffers(e,t,i){let r=0,s=0
for(const n of e)n.writeMeshDataToBuffers(r,t,s,i),r+=n.vertexCount,s+=n.indexCount}_computeSortKey(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType}serialize(e){return e.push(this.geometryType),e.push(this.materialKey),e.push(this.vertexFrom),e.push(this.vertexCount),e.push(this.indexFrom),e.push(this.indexCount),e.push(this.minZoom),e.push(this.maxZoom),e}static deserialize(e,t){const i=e.readInt32(),r=e.readInt32(),s=new Z(t.id,i,r)
return s.vertexFrom=e.readInt32(),s.vertexCount=e.readInt32(),s.indexFrom=e.readInt32(),s.indexCount=e.readInt32(),s.minZoom=e.readInt32(),s.maxZoom=e.readInt32(),s}}function H(e,t){if(null!==t){e.push(t.length)
for(const i of t)i.serialize(e)
return e}e.push(0)}class q{constructor(e){this.insertAfter=null,this.id=e,this.displayRecords=[]}copy(){const e=new q(this.id)
return e.set(this),e}clone(){const e=new q(this.id)
return e.displayRecords=this.displayRecords.map(e=>e.clone()),e.insertAfter=this.insertAfter,e}set(e){this.id=e.id,this.displayRecords=e.displayRecords,this.insertAfter=e.insertAfter}serialize(e){return e.push(this.id),H(e,this.displayRecords),e}static deserialize(e){const t=e.readInt32(),i=new q(t),r={id:t}
return i.displayRecords=function(e,t,i){const r=e.readInt32(),s=new Array(r)
for(let r=0;r<s.length;r++)s[r]=t.deserialize(e,i)
return s}(e,Z,r),i}}class K{constructor(){}get displayObjectRegistry(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map
for(const e of this.displayObjects)this._displayObjectRegistry.set(e.id,e)}return this._displayObjectRegistry}get displayList(){return this._displayList}computeDisplayList(){this._displayList=new B
for(const e of this.displayObjects)for(const t of e.displayRecords)this._displayList.addToList(t)}clone(){const e=new K
return this.displayObjects&&(e.displayObjects=this.displayObjects.map(e=>e.clone())),e}serialize(e){return H(e,this.displayObjects),e}_deserializeObjects(e){const t=e.readInt32(),i=new Array(t),r=new Map
for(let t=0;t<i.length;++t){const s=q.deserialize(e)
i[t]=s,r.set(s.id,s)}this.displayObjects=i,this._displayList=null,this._displayObjectRegistry=r}static deserialize(e){const t=new K
return t._deserializeObjects(e),t}}var Y=i(1487)
class X{constructor(e,t){this.data=e,this.stride=t}static decode(e){const t=Object(S.c)(e.data,e.stride),i=e.stride
return new X(t,i)}static fromVertexVector(e){const t=Object(S.c)(e.data.buffer(),e.stride),i=e.stride
return new X(t,i)}}class J{constructor(e,t,i){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=i}static decode(e){const t=e.geometryType,i=e.indexBuffer,r={}
for(const t in e.namedBuffers)r[t]=X.decode(e.namedBuffers[t])
return new J(t,i,r)}static fromVertexData(e,t){const i=e.indices,r=Object(S.c)(e.vertices,e.stride),s=e.stride,n={geometry:new X(r,s)}
return new J(t,i,n)}static fromVertexVectors(e){const t=e.geometryType,i=e.indexVector.buffer(),r={}
for(const t in e.namedVectors)r[t]=X.fromVertexVector(e.namedVectors[t])
return new J(t,i,r)}}var $=i(1237)
class Q{constructor(e,t){this.data=e,this.stride=t}get vertexCount(){const e=this.stride/4,t=this.data.length/e
return t!==(0|t)&&console.debug("Corrupted stride"),t}transfer(e,t){const i=this.data.buffer()
e.vertexCount=this.vertexCount,e.data=i,e.stride=this.stride,t.push(i)}}class ee{constructor(e,t,i){this.geometryType=e,this.indexVector=new $.a(Uint32Array,6*t),this.namedVectors={}
const r=Object(S.n)(e,i)
for(const e in r){const i=r[e]
let s
switch(i%4){case 0:case 2:s=new $.a(Uint32Array,i*t)
break
case 1:case 3:s=new $.a(Uint8Array,i*t)}this.namedVectors[e]=new Q(s,i)}}get(e){return this.namedVectors[e].data}getVector(e){return this.namedVectors[e]}transfer(e,t){const i=this.indexVector.buffer(),r={}
t.push(i)
for(const e in this.namedVectors){const i=this.namedVectors[e]
r[e]={},i.transfer(r[e],t)}e.geometryType=this.geometryType,e.indexBuffer=i,e.namedBuffers=r,this.destroy()}intoBuffers(){const e=J.fromVertexVectors(this)
return this.destroy(),e}destroy(){this.indexVector=null,this.namedVectors=null}}const te=new F,ie=new F
function re(e,t){const i={}
for(const r in e){const s={data:Object(S.b)(t,e[r]),stride:e[r]}
i[r]=s}return i}class se{constructor(){this.tileDisplayData=null,this.tileBufferData=null}reshuffle(){te.reset()
const e=function(e){const t=[[],[],[],[],[]],i=e
for(const e of i)for(const i of e.displayRecords)t[i.geometryType].push(i)
return t}(this.tileDisplayData.displayObjects)
for(const t of e)for(const e of t)e&&te.needMore(e.geometryType,e.meshData?e.meshData.vertexCount:e.vertexCount,e.meshData?e.meshData.indexData.length:e.indexCount)
const t=e.length,i=new A
for(let e=0;e<t;++e){i.geometries[e].indexBuffer=new Uint32Array(Math.round(1.5*te.indicesFor(e)))
const t=[]
for(const i in this.tileBufferData.geometries[e].vertexBuffer)t.push(this.tileBufferData.geometries[e].vertexBuffer[i].stride)
const r=se._computeVertexAlignment(t),s=Math.round(1.5*te.verticesFor(e)),n=se._align(s,r)
for(const t in this.tileBufferData.geometries[e].vertexBuffer){const r=this.tileBufferData.geometries[e].vertexBuffer[t].stride
i.geometries[e].vertexBuffer[t]={stride:r,data:Object(S.b)(n,r)}}}ie.reset(),this.tileDisplayData.displayList.clear()
for(let r=0;r<t;++r){const t=e[r]
for(const e of t){if(e.meshData)e.writeMeshDataToBuffers(ie.verticesFor(r),i.geometries[r].vertexBuffer,ie.indicesFor(r),i.geometries[r].indexBuffer),e.meshData=null
else{const t=this.tileBufferData.geometries[r].vertexBuffer,s=this.tileBufferData.geometries[r].indexBuffer,n=i.geometries[r].vertexBuffer,o=i.geometries[r].indexBuffer,a=ie.verticesFor(r),l=ie.indicesFor(r)
Object(S.e)(a,l,n,o,e,t,s),e.vertexFrom=a,e.indexFrom=l}ie.needMore(r,e.vertexCount,e.indexCount)}}for(const e of this.tileDisplayData.displayObjects)this.tileDisplayData.displayList.addToList(e.displayRecords)
this.tileBufferData=i}getStrides(){const e=[]
for(let t=0;t<this.tileBufferData.geometries.length;++t){const i=this.tileBufferData.geometries[t]
e[t]={}
for(const r in i.vertexBuffer)e[t][r]=i.vertexBuffer[r].stride}return e}clone(){const e=new se
return e.tileBufferData=this.tileBufferData.clone(),e.tileDisplayData=this.tileDisplayData.clone(),e}_guessSize(){const{displayObjects:e}=this.tileDisplayData,t=Math.min(e.length,4)
let i=0
for(let r=0;r<t;r++)i=Math.max(i,e[r].displayRecords.length)
return 2*(12*e.length+e.length*i*40)}serialize(){const e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),i=this.tileDisplayData.serialize(new $.a(Int32Array,this._guessSize())).buffer()
return t.push(i),{result:{displayData:i,bufferData:e},transferList:t}}static fromVertexData(e,t){const i={},r=new Map
for(const e of t)r.set(e.id,e)
return Object(S.h)(t=>{const s=e.data[t]
if(Object(l.k)(s)){const e=Y.a.from(s.records).getCursor()
for(;e.next();){const i=e.id,s=e.materialKey,n=e.indexFrom,o=e.indexCount,a=e.vertexFrom,l=e.vertexCount,c=r.get(i),h=new Z(i,t,s)
h.indexFrom=n,h.indexCount=o,h.vertexFrom=a,h.vertexCount=l,c.displayRecords.push(h)}i[t]=J.fromVertexData(s,t)}else i[t]=new ee(t,0,{fill:"default"}).intoBuffers()}),se.fromMeshData({displayObjects:t,vertexBuffersMap:i})}static fromMeshData(e){const t=new se,i=new K,r=new A
i.displayObjects=e.displayObjects
for(const t in e.vertexBuffersMap){const i=e.vertexBuffersMap[t]
r.geometries[t].indexBuffer=i.indexBuffer,r.geometries[t].vertexBuffer=i.namedBuffers}return t.tileDisplayData=i,t.tileBufferData=r,t}static bind(e,t){const i=new se
return i.tileDisplayData=e,i.tileBufferData=t,i}static create(e,t){const i=new se
i.tileDisplayData=new K,i.tileDisplayData.displayObjects=e
const r=[0,0,0,0,0],s=[0,0,0,0,0],n=[[],[],[],[],[]]
for(const t of e)for(const e of t.displayRecords)n[e.geometryType].push(e),r[e.geometryType]+=e.meshData.vertexCount,s[e.geometryType]+=e.meshData.indexData.length
const o=new A,a=function(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}(t)
for(let e=0;e<5;e++){const t=new Uint32Array(s[e]),i=re(a[e],r[e])
Z.writeAllMeshDataToBuffers(n[e],i,t),o.geometries[e]={indexBuffer:t,vertexBuffer:i}}return i.tileBufferData=o,i}static _align(e,t){const i=e%t
return 0===i?e:e+(t-i)}static _computeVertexAlignment(e){let t=!1,i=!1
for(const r of e)r%4==2?t=!0:r%4!=0&&(i=!0)
return i?4:t?2:1}}var ne=i(1496),oe=i(1497),ae=i(1330),le=i(1488),ce=i(1498),he=i(1489),ue=i(1500),de=i(930),fe=i(1304),pe=i(1407)
class me extends pe.a{constructor(e,t){super(e,t,null)}static from(e){const t=fe.a.createInstance(),i=[],r=e.filter(e=>!!e.geometry)
for(const e of r){const t=Object(m.c)(e.geometry)
Object(de.e)(i,[e],t,!1,!1,"uid")}return new me(t,i)}get geometryType(){const e=this._current
return e?e.geometryType:null}get insertAfter(){return this._current.insertAfter}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const e=new me(this.instance,this._features)
return this.copyInto(e),e}}var ye=i(876),xe=i(1459),_e=i(943),ge=i(1008),be=i(1033),ve=i(1666),Oe=i(968),je=i(1110),we=i(935),Se=i(1168)
const Me=new we.a,Te=new we.a,Ie="esriGeometryPolyline"
function Ce(e){e.coords.length=0,e.lengths.length=0}class Re{constructor(){this.bounds=Object(f.m)(),this.graphic=null}static acquire(e=null,t,i,r,s){let n
return 0===Re._pool.length?n=new Re:(n=Re._pool.pop(),this._set.delete(n)),n.acquire(e,t,i,r,s),n}static release(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))}static getCentroidQuantized(e,t){if(Object(m.g)(e.geometry)){const i=e.symbol
if(Object(l.j)(i))return null
if(Object(Se.f)(i.type)||Object(Se.g)(i.type)){const i=Object(Oe.b)(e.geometry)
return Object(je.b)(t,{},{x:i[0],y:i[1]},!1,!1)}}return null}acquire(e=null,t,i,r,s){e&&this.set(e,t,i,r,s)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(e,t,i,r,s){this.graphic=e,this.geometry=i,this.symbolResource=t,this.bounds=r,s&&(this.size=s)}getGeometryQuantized(e,t,i,r){const s=this.geometry
if(Object(m.g)(s)){const t=s.rings
if(1===t.length&&2===t[0].length)return Object(je.a)(e,{paths:[[t[0][0],t[0][1]]]})}else{if(Object(m.h)(s))return Ce(Me),Ce(Te),Object(de.i)(Me,s),Object(de.r)(Te,Me,s.hasZ,s.hasM,Ie,e.scale[0]),Object(de.v)(Me,Te,s.hasZ,s.hasM,Ie,e),Object(de.p)(Me,s.hasZ,s.hasM)
if(Object(m.e)(s)){const n=.5*r*Math.max(Math.abs(this.size[0])+this.size[2]-this.size[0],Math.abs(this.size[1])+this.size[3]-this.size[1]),[o,a]=Object(be.c)(i),l=a-o,c=s.points.filter(e=>{if(e[0]+n>a||e[0]-n<o){const i=[...e]
return e[0]+n>a?i[0]-=l:i[0]+=l,Object(f.j)(t,e,n)||Object(f.j)(t,i,n)}return Object(f.j)(t,e,n)})
return 0===c.length?{points:c}:Object(je.a)(e,{points:c})}}return Object(je.a)(e,this.geometry)}}Re._pool=[],Re._set=new Set
const Ee={minX:0,minY:0,maxX:0,maxY:0},ze=Object(f.m)()
function Le(e,t,i,r,s){return Ee.minX=t,Ee.minY=i,Ee.maxX=r,Ee.maxY=s,e.search(Ee)}function Fe(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}class Ae{constructor(e,t,i,r,s,n,o){this._graphics=r,this._onAdd=s,this._onRemove=n,this._hashToCIM=o,this._index=Object(xe.a)(9,Fe),this._itemByGraphic=new Map,this._inflatedSizeHelper=new g.a,this._tileInfoView=e,this._uidFieldName=i
const a=e.getClosestInfoForScale(t)
a&&(this._resolution=this._tileInfoView.getTileResolution(a.level))}setResourceManager(e){this._cimResourceManager=e,this._hittestDrawHelper=new ve.c(e)}hitTest(e,t,i,r,s){e=Object(ge.b)(e,this._tileInfoView.spatialReference)
const n=.5*r*window.devicePixelRatio*i
ze[0]=e-n,ze[1]=t-n,ze[2]=e+n,ze[3]=t+n
const o=.5*r*(i+Se.a),a=Le(this._index,e-o,t-o,e+o,t+o)
if(!a||0===a.length)return[]
const l=[],c=Object(f.m)(),h=Object(f.m)()
for(const e of a){const{geometry:t,symbolResource:i}=e
this._getSymbolBounds(c,i,t,h,s),h[3]=h[2]=h[1]=h[0]=0,Object(f.x)(c,ze)&&e.graphic.visible&&l.push(e)}if(0===l.length)return[]
const u=this._hittestDrawHelper,d=[]
for(const e of l){const{geometry:t,symbolResource:i}=e,{hash:n,textInfo:o}=i,a=this._hashToCIM.get(n)
a&&u.hitTest(ze,a.symbol,t,o,s,r)&&d.push(e)}return d.sort(Pe),d.map(e=>e.graphic)}getGraphicsData(e,t,i){const r=this._searchForItems(t)
if(0===r.length||0===i.length)return[]
r.sort((e,t)=>e.zorder-t.zorder),r[0].insertAfter=-1
for(let e=1;e<r.length;e++)r[e].insertAfter=r[e-1].graphic.uid
r.sort((e,t)=>e.graphic.uid-t.graphic.uid),i.sort((e,t)=>e.uid-t.uid)
let s,n=0,o=0
const a=t.resolution,l=[],c={originPosition:"upperLeft",scale:[a,a],translate:[t.bounds[0],t.bounds[3]]}
for(const h of i){for(o=-2;n<r.length;)if(s=r[n],n++,h.uid===s.graphic.uid){o=s.insertAfter
break}if(!s.geometry||-2===o)continue
const i=s.getGeometryQuantized(c,t.bounds,this._tileInfoView.spatialReference,a),u={...s.graphic.attributes}
u[this._uidFieldName]=h.uid,null==s.groupId&&(s.groupId=e.createTemplateGroup(s.symbol,null)),l.push({centroid:Re.getCentroidQuantized(s,c),geometry:i,attributes:u,symbol:s.symbol,groupId:s.groupId,insertAfter:o,zorder:s.zorder})}return l.sort((e,t)=>e.zorder-t.zorder),l}queryTileData(e,t){if(0===this._graphics.length)return[]
const{bounds:i,resolution:r}=t,s=this._searchForItems(t),n=[]
return 0===s.length||this._createTileGraphics(n,e,s,{originPosition:"upperLeft",scale:[r,r],translate:[i[0],i[3]]},t),n}has(e){return this._itemByGraphic.has(e)}getBounds(e){const t=this._itemByGraphic.get(e)
return t?t.bounds:null}getAllBounds(){return Array.from(this._itemByGraphic.values()).filter(e=>e.graphic.visible).map(e=>e.bounds)}addOrModify(e,t,i){if(!e||Object(l.j)(t))return
this.has(e)&&this.remove(e),this._onAdd(e)
const r=[0,0,0,0],s=this._getSymbolBounds(null,t,i,r,0),n=Re.acquire(e,t,i,Object(l.k)(s)?s:null,r)
return this._itemByGraphic.set(e,n),i&&this._index.insert(n),n.bounds}remove(e){if(!this._itemByGraphic.has(e))return
this._onRemove(e)
const t=this._itemByGraphic.get(e)
t.bounds&&this._index.remove(t),this._itemByGraphic.delete(e)}updateZ(){const e=this._graphics.items
let t,i
for(let r=0;r<e.length;r++)i=e[r],t=this._itemByGraphic.get(i),t&&(t.zorder=r)}update(e,t,i){const r=this._itemByGraphic.get(e)
r.groupId=null
const s=Object(f.f)(r.bounds)
this._index.remove(r)
const n=this._getSymbolBounds(r.bounds,t,i,r.size,0)
return Object(l.k)(n)&&r.set(e,t,i,n,r.size),i&&this._index.insert(r),{oldBounds:s,newBounds:r.bounds}}updateLevel(e){if(this._resolution===e)return
this._resolution=e,this._index.clear()
const t=this._itemByGraphic,i=[]
for(const[e,r]of t){const e=this._getSymbolBounds(r.bounds,r.symbolResource,r.geometry,r.size,0)
r.geometry&&Object(l.k)(e)&&(r.bounds=e,i.push(r))}this._index.load(i)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,i,r,s){const n=this._uidFieldName,o=this._tileInfoView.spatialReference,{bounds:a,resolution:l}=s
let c,h,u,d
i.sort((e,t)=>e.zorder-t.zorder)
for(let s=0;s<i.length;s++){u=i[s],c=u.graphic,h=u.getGeometryQuantized(r,a,o,l),d=0===s?-1:i[s-1].graphic.uid
const f={...u.graphic.attributes}
f[n]=c.uid,null==u.groupId&&(u.groupId=t.createTemplateGroup(u.symbol,null)),e.push({centroid:Re.getCentroidQuantized(u,r),geometry:h,attributes:f,symbol:u.symbol,groupId:u.groupId,insertAfter:d,zorder:u.zorder})}}_searchForItems(e){const t=this._tileInfoView.spatialReference,i=e.bounds
if(t.isWrappable){const[r,s]=Object(be.c)(t),n=Math.abs(i[2]-s)<1e-5,o=Math.abs(i[0]-r)<1e-5
if((!n||!o)&&(n||o)){const t=e.resolution
let o
o=Object(f.m)(n?[r,i[1],r+t*Se.a,i[3]]:[s-t*Se.a,i[1],s,i[3]])
const a=Le(this._index,i[0],i[1],i[2],i[3]),l=Le(this._index,o[0],o[1],o[2],o[3])
return[...new Set([...a,...l])]}}return Le(this._index,i[0],i[1],i[2],i[3])}_getSymbolBounds(e,t,i,r,s){if(!t||!t.symbol||!i)return null
if(e||(e=Object(f.m)()),Object(_e.a)(e,i),!r||0===r[0]&&0===r[1]&&0===r[2]&&0===r[3]){const{hash:e,textInfo:i}=t,n=this._hashToCIM.get(e)
if(!n)return null
r||(r=[0,0,0,0])
const o=this._inflatedSizeHelper.getSymbolInflateSize(r,n.symbol,this._cimResourceManager,s,i)
r[0]=Object(ye.h)(o[0]),r[1]=Object(ye.h)(o[1]),r[2]=Object(ye.h)(o[2]),r[3]=Object(ye.h)(o[3])}const n=this._resolution,o=g.a.safeSize(r)
return e[0]-=o*n,e[1]-=o*n,e[2]+=o*n,e[3]+=o*n,e}}const Pe=(e,t)=>{const i=Object(Se.d)(e.graphic),r=Object(Se.d)(t.graphic)
return i===r?t.zorder-e.zorder:i-r}
var De=i(1160),ke=i(1490),Be=i(1266),Ne=i(1120)
const Ve=Object(a.a)("esri-2d-graphic-debug")
function Ge(e,t,i){if(i.has(e))return i.get(e)
const r={tile:t,addedOrModified:[],removed:[]}
return i.set(e,r),r}let Ue=class extends(Object(ke.a)(Object(o.b)(s.a))){constructor(e){super(e),this._storage=new ue.a,this._displayIds=new Map,this._controller=new AbortController,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=Promise.resolve(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._updatingGraphicsTimer=null,this._hashToExpandedSymbol=new Map,this._hashToExpandedSymbolPromise=new Map,this._hashToCIMSymbolPromise=new Map,this._hashToCIM=new Map,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this._controller.abort(),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._attributeStore=null,this._hashToExpandedSymbol.clear(),this.view=null,this.renderer=null,this._hashToCIM.clear(),this._hashToCIMSymbolPromise.clear(),this._hashToExpandedSymbolPromise.clear()}_createMatcher(e,t,i){if(e){const r=Object(ce.a)({indexCount:0,fields:{}},"feature",e)
this._matcher=Object(le.a)(r,t,null,i)}}_createDisplayId(e){return this._displayIds.has(e)||this._displayIds.set(e,this._storage.createDisplayId()),this._displayIds.get(e)}initialize(){this._attributeStore=new he.a({type:"local",initialize:e=>Promise.resolve(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},Object(Be.a)()),this.container.hasHighlight=()=>this._attributeStore.hasHighlight
const e=new ae.a(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo)
this._graphicStore=new Ae(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)},e=>{const t=this._displayIds.get(e.uid)
this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)},this._hashToCIM),this._meshFactory=new oe.a(null,this.uid,e),this._templateStore=e,this.handles.add([this.watch("renderer",t=>{this._createMatcher(t,e,this.container.stage.resourceManager)
for(const e of this.graphics)this._pendingUpdate.updated.add(e)
this.requestUpdate()}),this.view.graphicsTileStore.on("update",e=>this._onTileUpdate(e)),this.container.on("attach",()=>{Ve&&this.container.enableRenderingBounds(()=>this._graphicStore.getAllBounds()),this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",e=>this._graphicsChangeHandler(e)),"graphics")
const t=this.container.stage.resourceManager
this._createMatcher(this.renderer,e,t),this._graphicStore.setResourceManager(t),this._attached=!0,this.notifyChange("updating")})])
const t=this.view.graphicsTileStore.tiles
this._onTileUpdate({added:t,removed:[]})}get updating(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0}hitTest(e){if(!this.view||!this.view.position)return null
const{resolution:t,rotation:i}=this.view.state
return this._graphicStore.hitTest(e.x,e.y,2,t,i)}update(e){Object(c.v)(this._controller.signal)
const t=e.state,{resolution:i}=t
if(this._graphicStore.updateLevel(i),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics()
this._needsProcessing=!0}}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}graphicUpdateHandler(e){const{graphic:t,property:i,newValue:r}=e
switch(i){case"attributes":case"geometry":case"symbol":this._pendingUpdate.updated.add(t),this.requestUpdate()
break
case"visible":this._setFilterState(t.uid,r),this._attributeStore.sendUpdates()}}setHighlight(e){const t=e.map(e=>this._displayIds.get(e))
this._attributeStore.setHighlight(e,t)}_getIntersectingTiles(e){const t=this._graphicStore.getBounds(e)
if(!t||0===Object(f.D)(t)||0===Object(f.v)(t))return[]
const i=Object(Se.e)(t,this.view.spatialReference)
return Object(l.k)(i)?[...new Set([...this.view.graphicsTileStore.boundsIntersections(i[0]),...this.view.graphicsTileStore.boundsIntersections(i[1])])]:this.view.graphicsTileStore.boundsIntersections(t)}async _updateTile(e){Object(c.v)(this._controller.signal)
const t=e.tile,i=this._getGraphicsData(this._templateStore,t,e.addedOrModified),r=await this._processGraphics(t,i)
return Object(c.v)(this._controller.signal),this._patchTile(t.key,{type:"update",addOrUpdate:r,remove:e.removed,end:!0,clear:!1,sort:!1}),r}_patchTile(e,t){if(!this._tiles.has(e))return
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
const{added:e,removed:t,updated:i}=this._getGraphicsToUpdate(),r=this._tilesToUpdate
let s
try{if(!this._graphicStoreUpdate){const e=this.view.state,{resolution:t}=e
this._graphicStore.updateLevel(t)}const n=[],o=new Array(e.length+t.length)
for(let e=0;e<i.length;e++){const t=i[e],a=this._getIntersectingTiles(t)
for(const e of a)s=e.id,Ge(s,e,r).removed.push(this._displayIds.get(t.uid))
n.push(this._updateGraphic(t,null)),o[e]=t}const a=i.length
for(let t=0;t<e.length;t++){const i=e[t]
o[a+t]=i,this._graphicsSet.add(i),n.push(this._addGraphic(i))}for(const e of t){this._abortProcessingGraphic(e.uid)
const t=this._getIntersectingTiles(e)
for(const i of t)s=i.id,Ge(s,i,r).removed.push(this._displayIds.get(e.uid))
this._graphicsSet.delete(e),this._graphicStore.remove(e)}let l
this._flipUpdatingGraphics(),await Promise.all(n)
for(let e=0;e<o.length;e++){l=o[e]
const t=this._getIntersectingTiles(l)
for(const e of t)s=e.id,Ge(s,e,r).addedOrModified.push(l)}this._graphicStore.updateZ()
const c=[]
for(const[e,t]of r)c.push(this._updateTile(t))
await Promise.all(c)}catch(e){Object(c.m)(e)}for(const i of t)try{const e=await this._getSymbolForGraphic(i,{})
if(e){const t=e.hash()
this._hashToExpandedSymbol.delete(t)}}catch(e){Object(c.m)(e)}r.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(e){const t=(e.attributes?Object.keys(e.attributes):[]).map(t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"}))
return Object(l.j)(e.geometry)?null:{geometryType:Object(m.c)(e.geometry),spatialReference:d.default.fromJSON(e.geometry.spatialReference),fields:t}}_getSymbolForGraphic(e,t){return Object(c.v)(this._controller.signal),Object(l.k)(e.symbol)?Promise.resolve(e.symbol):Object(l.k)(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,abortOptions:t}):Promise.resolve(this._getNullSymbol(e))}_getCIMSymbol(e,t,i){let r=this._hashToCIM.get(t)
if(r)return Promise.resolve(r)
const s=Object(g.f)(e)
if(Object(l.k)(s)){if("CIMSymbolReference"===s.type)return r=s,this._hashToCIM.set(t,r),Promise.resolve(r)
let e=this._hashToCIMSymbolPromise.get(t)
return e||(e=s.fetchCIMSymbol(i).then(e=>(this._hashToCIM.set(t,e.data),this._hashToCIMSymbolPromise.delete(t),e)).catch(e=>(this._hashToCIMSymbolPromise.delete(t),Object(c.u)(e),null)),this._hashToCIMSymbolPromise.set(t,e),e)}return Promise.resolve(null)}_expandCIMSymbol(e,t,i,r){const s=this._hashToExpandedSymbol.get(i)
if(s)return Promise.resolve(s)
let n=this._hashToExpandedSymbolPromise.get(i)
if(n)return n
const o=this.container.stage,a=this._getArcadeInfo(t),l=Object(ce.c)(null),c=Object(Ne.createSymbolSchema)(e,l)
return n=Object(De.b)(c,a,o.resourceManager,r),this._hashToExpandedSymbolPromise.set(i,n),n.then(e=>(this._hashToExpandedSymbol.set(i,e),this._hashToExpandedSymbolPromise.delete(i),e)),n}async _getSymbolResources(e,t){return Object(c.v)(this._controller.signal),this.container.stage?this._getSymbolForGraphic(e,t).then(i=>{const r=i.hash()
return this._getCIMSymbol(i,r,t).then(i=>Object(l.j)(i)?null:this._expandCIMSymbol(i,e,r,t).then(e=>{const t=e.layers.filter(e=>"text"===e.type&&"string"==typeof e.text)
if(t&&t.length>0){const i=new Array(t.length)
for(let e=0;e<t.length;e++){const r=t[e],s=[],[o]=Object(n.a)(r.text)
for(let e=0;e<o.length;e++)s.push(o.charCodeAt(e))
i[e]={symbol:r,id:e,glyphIds:s}}const s=new Map
return this.container.getMaterialItems(i).then(i=>{for(let e=0;e<t.length;e++){const r=t[e]
s.set(r.cim,{text:r.text,mosaicItem:i[e].mosaicItem})}return{symbol:e,textInfo:s,hash:r}})}return{symbol:e,hash:r}}))}).catch(e=>(Object(c.u)(e),null)):null}async _projectAndNormalizeGeometry(e,t){if(Object(c.v)(this._controller.signal),Object(l.j)(e.geometry)||"mesh"===e.geometry.type)return null
let i=e.geometry
if(Object(m.g)(i)){const e=i.rings
i.rings=e}else if(Object(m.h)(i)){const e=i.paths
i.paths=e}else if(Object(m.d)(i)){const r=await this._getSymbolForGraphic(e,t)
Object(c.v)(this._controller.signal),i=Object(Se.f)(r.type)||Object(Se.g)(r.type)?i.center:Object(Se.h)(i)}await Object(_.a)(i.spatialReference,this.view.spatialReference)
const r=Object(y.a)(i),s=Object(_.b)(r,i.spatialReference,this.view.spatialReference)
return Object(p.a)(s),s}_onTileUpdate(e){const t=Object(x.e)(this.view.spatialReference)
if(e.added&&e.added.length>0)for(const i of e.added)this._addNewTile(i,t)
if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}async _addGraphic(e){this._abortProcessingGraphic(e.uid),Object(c.v)(this._controller.signal)
const t=new AbortController
this._graphicIdToAbortController.set(e.uid,t)
const i={signal:t.signal}
try{await this._addOrUpdateGraphic(e,i),Object(c.v)(this._controller.signal),this._graphicIdToAbortController.delete(e.uid)}catch(t){if(this._graphicIdToAbortController.delete(e.uid),!Object(c.m)(t))throw t}}_updateGraphic(e,t){Object(c.v)(this._controller.signal)
const i=this._projectAndNormalizeGeometry(e,t),r=this._getSymbolResources(e,t)
return Promise.all([i,r]).then(([t,i])=>{Object(c.v)(this._controller.signal),this._graphicStore.addOrModify(e,i,t)})}_addOrUpdateGraphic(e,t){Object(c.v)(this._controller.signal)
const i=this._projectAndNormalizeGeometry(e,t),r=this._getSymbolResources(e,t)
return Promise.all([i,r]).then(([t,i])=>{Object(c.v)(this._controller.signal),this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,i,t)})}_addTile(e){const t=this.view.featuresTilingScheme.getTileBounds(Object(f.m)(),e),i=new L(e,t[0],t[3])
return this._tiles.set(e,i),this.container.addChild(i),i}async _addNewTile(e,t){const i=this._addTile(e.key),r=this._graphicStore.queryTileData(this._templateStore,e)
if(0===r.length)return
if(t){const i=Math.round((t.valid[1]-t.valid[0])/e.resolution)
for(const e of r)e.geometry&&(Object(m.f)(e.geometry)||Object(m.e)(e.geometry))&&this._wrapPoints(e,i)}const s=e.key
this._tileUpdateSet.add(e.key),this.notifyChange("updating")
try{const t={type:"update",clear:!1,addOrUpdate:await this._processGraphics(e,r),remove:[],end:!0,sort:!1}
i.patch(t),this._tileUpdateSet.delete(s),this.notifyChange("updating")}catch(e){if(this._tileUpdateSet.delete(s),this.notifyChange("updating"),!Object(c.m)(e))throw e}}_removeTile(e){if(!this._tiles.has(e))return
const t=this._tiles.get(e)
this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_setFilterState(e,t){const i=this._displayIds.get(e),r=this._attributeStore.getHighlightFlag(e)
this._attributeStore.setData(i,0,0,r|(t?v.q:0))}_getGraphicsData(e,t,i){const r=this.view,s=Object(x.e)(r.spatialReference),n=this._graphicStore.getGraphicsData(e,t,i)
if(s){const e=Math.round((s.valid[1]-s.valid[0])/t.resolution)
for(const t of n)t.geometry&&(Object(m.f)(t.geometry)||Object(m.e)(t.geometry))&&this._wrapPoints(t,e)}return n}_wrapPoints(e,t){const i=e.geometry
Object(m.e)(i)?this._wrapMultipoint(i,t):this._wrapPoint(e,t)}_wrapMultipoint(e,t){const i=e.points,r=[]
let s=0,n=0
for(const[e,o]of i){if(r.push([e+s,o]),s=0,t===Se.b){const i=5*Se.a
e+n<i?(r.push([t,0]),s=-t):e+n>Se.b-i&&(r.push([-t,0]),s=t)}else e+n<-Se.a?(r.push([t,0]),s=-t):e+n>Se.b+Se.a&&(r.push([-t,0]),s=t)
n+=e}e.points=r}_wrapPoint(e,t){const i=e.geometry
if(t===Se.b){const r=5*Se.a
i.x<r?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Se.b-r&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}else i.x<-Se.a?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>Se.b+Se.a&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}_processGraphics(e,t,i){if(!t||!t.length||!this._meshFactory)return null
const r=me.from(t),s=this._meshFactory
return this._matcher.then(t=>s.analyzeGraphics(r,this.container.stage.resourceManager,t,null,null,i).then(()=>(this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(e,r))))}_processAnalyzedGraphics(e,t){const i=this._meshFactory,r=t.getSize(),s=t.getCursor(),n={features:r,records:r,metrics:0},o=new ne.a(e.key.id,n,{fill:"default"},!1,!1),a=[]
for(;s.next();){const t=s.readGraphic()
t.insertAfter=-1===t.insertAfter?-1:this._displayIds.get(t.insertAfter),t.displayId=this._displayIds.get(t.attributes[this.uid])
const r=new q(t.displayId)
r.insertAfter=t.insertAfter,a.push(r),i.writeGraphic(o,s,e.level,this.container.stage.resourceManager)}const l=e.tileInfoView.tileInfo.isWrappable,c=o.serialize(l)
if(1!==c.length)return new se
const h=c[0].message
return se.fromVertexData(h,a)}_abortProcessingGraphic(e){this._graphicIdToAbortController.has(e)&&this._graphicIdToAbortController.get(e).abort()}_getNullSymbol(e){const t=e.geometry
return Object(m.h)(t)?b.g:Object(m.g)(t)||Object(m.d)(t)?b.f:b.e}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout(()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")},160),this.notifyChange("updating")}}
Object(r.a)([Object(h.b)({constructOnly:!0})],Ue.prototype,"requestUpdateCallback",void 0),Object(r.a)([Object(h.b)()],Ue.prototype,"container",void 0),Object(r.a)([Object(h.b)({constructOnly:!0})],Ue.prototype,"graphics",void 0),Object(r.a)([Object(h.b)()],Ue.prototype,"updating",null),Object(r.a)([Object(h.b)()],Ue.prototype,"view",void 0),Object(r.a)([Object(h.b)()],Ue.prototype,"updateRequested",void 0),Ue=Object(r.a)([Object(u.a)("esri.views.2d.layers.support.GraphicsView2D")],Ue)
const We=Ue},1496:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p})),i(1502),i(1394)
var r=i(1059),s=(i(1437),i(1466),i(891)),n=i(1074),o=i(908),a=i(942)
const l=new Map
l.set(o.d.MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),l.set(o.d.LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),l.set(o.d.FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),l.set(o.d.TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),l.set(o.d.LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4})
var c=i(1237)
class h{constructor(e,t,i){this._start={index:0,vertex:0}
const r=function(e,t,i){const{indicesPerRecord:r,multiplier:n,verticesPerRecord:o}=l.get(e)
return{recordBytes:i*s.n*Uint32Array.BYTES_PER_ELEMENT,indexBytes:n*r*i*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:n*o*i*t}}(e,t,i),n=t/4
this.geometryType=e,this._records=new c.a(Int32Array,r.recordBytes),this._indices=new c.a(Uint32Array,r.indexBytes),this._vertices=new c.a(Uint32Array,r.vertexBytes),this._metrics=new c.a(Float32Array,0),this._strideInt=n}serialize(e){const t=this._records.buffer(),i=this._indices.buffer(),r=this._vertices.buffer(),s=this._metrics.length?this._metrics.buffer():null,n=4*this._strideInt
return e.push(t,i,r),{stride:n,records:t,indices:i,vertices:r,metrics:s}}get strideInt(){return this._strideInt}get recordCount(){return this._records.length/s.n}get vertexCount(){return this._vertices.length/this._strideInt}get indexCount(){return this._indices.length}get indexWriter(){return this._indices}get vertexWriter(){return this._vertices}get metricWriter(){return this._metrics}vertexEnsureSize(e){this._vertices.ensureSize(e)}indexEnsureSize(e){this._indices.ensureSize(e)}recordStart(){this._start.index=this._indices.length,this._start.vertex=this._vertices.length}recordEnd(e,t,i,r,s,n,o,a){this._records.push(e),this._records.push(t),this._records.push(i),this._records.push(r),this._records.push(s),this._records.push(n),this._records.push(o),this._records.writeF32(a)}writeIndex(e){this._indices.push(e)}writeVertex(e){this._vertices.push(e)}writeVertexF32(e){this._vertices.writeF32(e)}copyLastFrom(e,t,i){const r=e._records.length-s.n,n=e._records.getValue(r),o=e._records.getValue(r+1),a=e._records.getValue(r+2),l=e._records.getValue(r+4),c=e._records.getValue(r+6),h=e._records.getValue(r+7),u=this._vertices.length,d=(e._start.vertex-this._vertices.length)/this._strideInt,f=this._indices.length,p=this.vertexCount
for(let t=e._start.index;t!==e._indices.length;t++){const i=e._indices.getValue(t)
this._indices.push(i-d)}for(let t=e._start.vertex;t!==e._vertices.length;t++){const i=e._vertices.getValue(t)
this._vertices.push(i)}for(let e=u;e<=this._vertices.length;e+=this._strideInt)this._vertices.i1616Add(e,t,i)
this._records.push(n),this._records.push(o),this._records.push(a),this._records.push(f),this._records.push(l),this._records.push(p),this._records.push(c),this._records.push(h)}}var u=i(1443)
function d(e){switch(e){case 1:case 8:case 32:return-1
case 2:case 64:return 0
case 4:case 16:case 128:return 1}}function f(e){switch(e){case 1:case 2:case 4:return-1
case 8:case 16:return 0
case 32:case 64:case 128:return 1}}class p{constructor(e,t,i,r,s){this._hasAggregate=!1,this.hasRecords=!1,this._data={self:new Map,neighbors:new Array},this._current={geometryType:0,writer:null,overlaps:0,start:0,insertAfter:0,sortKey:0,id:0,materialKey:0,indexStart:0,vertStart:0,isDotDensity:!1,bufferingEnabled:!1,metricBoxLenPointer:0},this.hint=t,this.tileKey=e,this._hasAggregate=r,this._pixelBufferEnabled=s,this._strideOptions=i}get hasAggregates(){return this._hasAggregate}get hasPixelBufferEnabled(){return this._pixelBufferEnabled}serialize(e){const t=[]
return t.push(this._serializeTileVertexData(this.tileKey,this.tileKey,this._data.self)),this._data.neighbors.forEach((i,s)=>{const n=1<<s,o=d(n),a=f(n),l=Object(u.a)(new r.a(this.tileKey),o,a,e),c=this._serializeTileVertexData(this.tileKey,l.id,i.vertexData)
c.message.bufferIds=i.displayIds,t.push(c)}),t}_serializeTileVertexData(e,t,i){var r,s,n,a,l
const c=new Array
return{message:{tileKeyOrigin:e,tileKey:t,data:{[o.d.MARKER]:null==(r=i.get(o.d.MARKER))?void 0:r.serialize(c),[o.d.FILL]:null==(s=i.get(o.d.FILL))?void 0:s.serialize(c),[o.d.LINE]:null==(n=i.get(o.d.LINE))?void 0:n.serialize(c),[o.d.TEXT]:null==(a=i.get(o.d.TEXT))?void 0:a.serialize(c),[o.d.LABEL]:null==(l=i.get(o.d.LABEL))?void 0:l.serialize(c)}},transferList:c}}featureStart(e,t){this._current.insertAfter=e,this._current.sortKey=t}featureEnd(){}recordStart(e,t,i,r){this._current.writer=this._getVertexWriter(i),this._current.overlaps=0,this._current.indexStart=this._current.writer.indexCount,this._current.vertStart=this._current.writer.vertexCount,this._current.bufferingEnabled=r,this._current.id=e,this._current.materialKey=t,this._current.geometryType=i,this._current.isDotDensity=!1,this._current.writer.recordStart()}recordCount(){return this._current.writer.recordCount}vertexCount(){return this._current.writer.vertexCount}indexCount(){return this._current.writer.indexCount}vertexEnsureSize(e){this._current.writer.vertexEnsureSize(e)}indexEnsureSize(e){this._current.writer.indexEnsureSize(e)}vertexBounds(e,t,i,r){this._current.bufferingEnabled&&this._addOverlap(e,t,i,r)}vertexWrite(e){this._current.writer.writeVertex(e)}vertexWriteF32(e){this._current.writer.writeVertexF32(e)}vertexEnd(){}vertexWriter(){return this._current.writer.vertexWriter}indexWrite(e){this._current.writer.writeIndex(e)}indexWriter(){return this._current.writer.indexWriter}metricWriter(){return this._current.writer.metricWriter}metricStart(e,t,i,r,s,a,l,c){this._current.writer=this._getVertexWriter(o.d.LABEL)
const h=this._current.writer.metricWriter
h.push(Object(n.f)(e)),h.push(t),h.push(i),h.push(r),h.push(s),h.push(a),h.push(l),h.push(c),h.push(255),this._current.metricBoxLenPointer=h.push(0)}metricEnd(){const e=this._current.writer.metricWriter
0===e.getValue(this._current.metricBoxLenPointer)&&e.seek(e.length-10)}metricBoxWrite(e,t,i,r){const s=this._current.writer.metricWriter
s.incr(this._current.metricBoxLenPointer),s.push(0),s.push(0),s.push(e),s.push(t),s.push(i),s.push(r)}recordEnd(){const e=this._current.vertStart,t=this._current.writer.vertexCount-e
if(!t)return!1
this.hasRecords=!0
const i=this._current.indexStart,r=this._current.writer.indexCount-i
if(this._current.writer.recordEnd(this._current.id,this._current.materialKey,this._current.insertAfter,i,r,e,t,this._current.sortKey),!this._pixelBufferEnabled||this._hasAggregate||0===this._current.overlaps||this._current.geometryType===o.d.LABEL)return!0
const n=this._current.writer
for(let e=0;e<8;e++){const t=1<<e
if(this._current.overlaps&t){this._data.neighbors[e]||(this._data.neighbors[e]={vertexData:new Map,displayIds:new Set})
const i=this._data.neighbors[e],r=this._current.geometryType
if(!i.vertexData.has(r)){const e=Object(a.n)(r,this._strideOptions).geometry,t=new h(r,e,s.y)
i.vertexData.set(r,t)}const o=i.vertexData.get(this._current.geometryType),l=8,c=512*-d(t)*l,u=512*-f(t)*l
o.copyLastFrom(n,c,u),i.displayIds.add(this._current.id)}}return!0}_addOverlap(e,t,i,r){const n=255^((e<0+i?148:e>=s.P-i?41:189)|(t<0+r?224:t>=s.P-r?7:231))
this._current.overlaps|=n}_getVertexWriter(e){if(!this._data.self.has(e)){const t=this._data.self,i=Object(a.n)(e,this._strideOptions).geometry
t.set(e,new h(e,i,this.hint.records))}return this._data.self.get(e)}}},1497:function(e,t,i){"use strict"
i.d(t,"a",(function(){return L})),i(77)
var r=i(20),s=i(861),n=i(1291),o=i(1074),a=i(354),l=i(177),c=i(874),h=i(876),u=i(969),d=i(1152),f=i(1e3),p=i(891),m=i(908),y=i(937),x=i(939),_=i(1013)
function g(e){return e.length-1}function b(e,t,i=1){const[r,s]=function(e,t){return e[t+1]}(e,t)
return Math.sqrt(r*r+s*s)*i}class v{constructor(e,t,i,r,s){this._segments=e,this._index=t,this._distance=i,this._xStart=r,this._yStart=s,this._done=!1}static create(e){return new v(e,0,0,e[0][0],e[0][1])}clone(){return new v(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(0===this._distance||1===e._distance)||e._index===this._index+1&&(1===this._distance||0===e._distance)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length)
let i=Math.acos(t)
return e>0&&(i=2*Math.PI-i),i}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this
return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<g(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const i=this.backwardLength
if(e<=i)return this._distance=(i-e)/this.length,this
let r=this.backwardLength
for(;this.prev();){if(r+this.length>e)return this._seekBackwards(e-r)
r+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t)
if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this
let i=this.remainingLength
for(;this.next();){if(i+this.length>e)return this.seek(e-i,t)
i+=this.length}return this._distance=1,t?this:null}}function O(e,t,i,r=!0){const s=function(e){let t=0
for(let i=0;i<g(e);i++)t+=b(e,i)
return t}(e),n=v.create(e),o=s/2
if(!r)return n.seek(o),void i(n.clone(),0,o+0*t,s)
const a=Math.max((s-t)/2,0),l=Math.floor(a/t),c=o-l*t
n.seek(c)
for(let e=-l;e<=l;e++)n.x<512&&n.x>=0&&n.y<512&&n.y>=0&&i(n.clone(),e,o+e*t,s),n.seek(t)}function j(e,t){const i=1e-6
if(t<=0)return
const r=e.length
if(r<3)return
const s=[]
let n=0
s.push(0)
for(let t=1;t<r;t++)n+=Object(_.c)(e[t],e[t-1]),s.push(n)
t=Math.min(t,.2*n)
const o=[]
o.push(e[0][0]),o.push(e[0][1])
const a=e[r-1][0],l=e[r-1][1],c=Object(_.h)([0,0],e[0],e[1])
Object(_.g)(c),e[0][0]+=t*c[0],e[0][1]+=t*c[1],Object(_.h)(c,e[r-1],e[r-2]),Object(_.g)(c),e[r-1][0]+=t*c[0],e[r-1][1]+=t*c[1]
for(let e=1;e<r;e++)s[e]+=t
s[r-1]+=t
const h=.5*t
for(let n=1;n<r-1;n++){let a=0,l=0,c=0
for(let r=n-1;r>=0&&!(s[r+1]<s[n]-h);r--){const o=h+s[r+1]-s[n],u=s[r+1]-s[r],d=s[n]-s[r]<h?1:o/u
if(Math.abs(d)<i)break
const f=d*d,p=d*o-.5*f*u,m=d*u/t,y=e[r+1],x=e[r][0]-y[0],_=e[r][1]-y[1]
a+=m/p*(y[0]*d*o+.5*f*(o*x-u*y[0])-f*d*u*x/3),l+=m/p*(y[1]*d*o+.5*f*(o*_-u*y[1])-f*d*u*_/3),c+=m}for(let o=n+1;o<r&&!(s[o-1]>s[n]+h);o++){const r=h-s[o-1]+s[n],u=s[o]-s[o-1],d=s[o]-s[n]<h?1:r/u
if(Math.abs(d)<i)break
const f=d*d,p=d*r-.5*f*u,m=d*u/t,y=e[o-1],x=e[o][0]-y[0],_=e[o][1]-y[1]
a+=m/p*(y[0]*d*r+.5*f*(r*x-u*y[0])-f*d*u*x/3),l+=m/p*(y[1]*d*r+.5*f*(r*_-u*y[1])-f*d*u*_/3),c+=m}o.push(a/c),o.push(l/c)}o.push(a),o.push(l)
for(let t=0,i=0;t<r;t++)e[t][0]=o[i++],e[t][1]=o[i++]}var w=i(1324)
const S=l.a.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),M=function(e){const t=new Map
return e=>(t.has(e)||t.set(e,(e=>{let t=0
if(0===e)return 1/0
for(;!(e%2);)t++,e/=2
return t})(e)),t.get(e))}(),T=e=>Math.floor(127*e+127),I=e=>Math.floor(10*e),C=e=>Math.round(e*(254/360))
class R extends w.a{constructor(e,t,i,r){var s,n,o
super(e,i.font.size,i.haloSize||0,i.font.size,i.color&&Object(f.d)(i.color)||0,i.haloColor&&Object(f.d)(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,Object(d.i)(t.labelPlacement)?u.a.MAP:u.a.SCREEN,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null,null,null,null),this._outLineLabelAngle=0,this._refPlacementPadding=0,this._refPlacementDirX=0,this._refPlacementDirY=0,this._refOffsetX=0,this._refOffsetY=0,this._zoomLevel=0,this.geometryType=m.d.LABEL,this._allowOverrun=null!=(s=t.allowOverrun)&&s,this._repeatLabel=null==(n=t.repeatLabel)||n,this._labelPosition=null!=(o=t.labelPosition)?o:"curved"
const a=function(e,t){const i=!!e.minScale&&t.scaleToZoom(e.minScale)||0
return Object(c.f)(i,0,25.5)}(t,r),l=function(e,t){const i=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255
return Object(c.f)(i,0,25.5)}(t,r),y=t.labelPlacement,[_,g]=Object(d.c)(y)
this._xAlignD=_,this._yAlignD=g,this._minZoom=a,this._maxZoom=l,this._refPlacementPadding=Object(h.h)(i.haloSize)+p.N,this._repeatLabelDistance=t.repeatLabelDistance?Object(h.h)(t.repeatLabelDistance):128
const b=x.b.load(e)
b.sdf=!0,this._materialKey=b.data}static fromLabelClass(e,t){if("esriServerLinePlacementCenterAlong"===e.labelPlacement){const t=e.symbol
t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new R(e.materialKey,e,e.symbol,t)}get _shapedBox(){return Object(r.t)(this._shapingInfo).bounds}setZoomLevel(e){this._zoomLevel=e}bindReferenceTemplate(e){let t=Object(d.f)(this._xAlignD),i=Object(d.h)(this._yAlignD)
if(this._refOffsetX=0,this._refOffsetY=0,Object(r.j)(e))return void(this._refSymbolAndPlacementOffset=Object(y.b)(0,0,T(t),T(i)))
if("circle"===e.boundsType&&(t||i)){const e=Math.sqrt(t*t+i*i)
t/=e,i/=e}const s=Math.max(e.height,e.width),n=4*this._refPlacementPadding
this._refSymbolAndPlacementOffset=Object(y.b)(n,s,T(t),T(i)),this._referenceSize=s,this._refPlacementDirX=t,this._refPlacementDirY=i,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset}_write(e,t){if(Object(r.j)(this._shapingInfo))return
const i=this._shapingInfo,s=t.getDisplayId(),n="esriGeometryPolygon"===t.geometryType?t.readLegacyCentroid():t.readLegacyGeometry()
if(n)switch(this.current={out:e,inId:s,inShaping:i,zoomLevel:this._zoomLevel},t.geometryType){case"esriGeometryPolyline":this._placeLineLabels(n)
break
case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(n)
break
default:((e,t="mapview-labeling")=>{S.error(new a.a(t,e))})("mapview-labeling",`Geometry of type ${t.geometryType} is not supported`)}}_isVisible(e,t){const i=I(this.current.zoomLevel)
return I(e)<=i&&i<=I(t)}_placePointLabels(e){const{out:t,inId:i,inShaping:r}=this.current
this._writeGlyphs(t,i,e,r)}_placeLineLabels(e){const t=function(e,t){const i=t
for(let t=0;t<e.length;t++){let r=e[t]
const s=[]
s.push(r[0])
for(let e=1;e<r.length;e++){let[t,i]=s[e-1]
t+=r[e][0],i+=r[e][1],s.push([t,i])}j(s,i)
const n=[]
n.push(s[0])
for(let e=1;e<s.length;e++){const[t,i]=s[e-1],[r,o]=s[e],a=Math.round(r-t),l=Math.round(o-i)
n.push([a,l])}e[t]=n,r=n}return e}(e.paths,this.current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),r=(this._shapedBox.width+this._repeatLabelDistance)/2
for(const e of t)O(e,r,i,this._repeatLabel)}_placeSubdivGlyphs(e,t,i,r){const s=M(t),n=this._shapedBox.width/2,o=Math.sqrt(this._repeatLabelDistance)/2,a=Math.min(i,r-i),l=Math.log2(a/(o+n/2)),c=0===t?l:Math.min(s,l),h=Math.max(this._minZoom,this.current.zoomLevel+1-c),u=this.current.zoomLevel-h,d=this._shapedBox.width/2*2**u
this.current.inShaping.isMultiline?0===t&&this._placeStraight(e,h):this._allowOverrun&&u<0?this._placeStraightAlong(e,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(e,h):"curved"===this._labelPosition&&this._placeCurved(e,h,d)}_placeStraight(e,t){const{out:i,inId:r,inShaping:s}=this.current
this._writeGlyphs(i,r,e,s,t)}_placeCurved(e,t,i){const{out:r,inId:s}=this.current
r.metricStart(s,t,e.x,e.y,0,0,0,0)
const n=e.clone(),o=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360
this._outLineLabelAngle=C(o),this._placeFirst(n,t,1),this._placeBack(e,n,t,i,1),this._placeForward(e,n,t,i,1),this._outLineLabelAngle=C(a),this._placeFirst(n,t,0),this._placeBack(e,n,t,i,0),this._placeForward(e,n,t,i,0),r.metricEnd()}_placeStraightAlong(e,t){const{out:i,inId:r}=this.current
i.metricStart(r,t,e.x,e.y,0,0,0,0)
const s=e.clone(),n=e.angle*(180/Math.PI)%360,o=(e.angle*(180/Math.PI)+180)%360
this._outLineLabelAngle=C(n),this._placeFirst(s,t,1,!0),this._outLineLabelAngle=C(o),this._placeFirst(s,t,0,!0),i.metricEnd()}_placeBack(e,t,i,r,s){const n=e.clone()
let o=e.backwardLength+0
for(;n.prev()&&!(o>=r);)this._placeOnSegment(n,t,o,i,-1,s),o+=n.length+0}_placeForward(e,t,i,r,s){const n=e.clone()
let o=e.remainingLength+0
for(;n.next()&&!(o>=r);)this._placeOnSegment(n,t,o,i,1,s),o+=n.length+0}_placeFirst(e,t,i,r=!1){const s=e,n=this.current.inShaping,o=n.glyphs,a=this.current.zoomLevel,{out:l,inId:c}=this.current
for(const h of o){const o=h.x>n.bounds.x?i:1-i,u=o*e.remainingLength+(1-o)*e.backwardLength,d=Math.abs(h.x+h.width/2-n.bounds.x),f=Math.max(0,a+Math.log2(d/(u+0))),p=Math.max(t,r?0:f)
if(h.maxZoom=25,h.angle=e.angle+(1-i)*Math.PI,h.minZoom=p,this._writeGlyph(l,c,s.x,s.y,h),i&&this._isVisible(h.minZoom,h.maxZoom)){const e=h.bounds
l.metricBoxWrite(e.center[0],e.center[1],e.width,e.height)}}}_placeOnSegment(e,t,i,r,s,n){const o=this.current.inShaping.glyphs,{out:a,inId:l}=this.current,c=this.current.inShaping,h=this.current.zoomLevel,u=e.dx/e.length,d=e.dy/e.length,f={x:e.x+i*-s*u,y:e.y+i*-s*d}
for(const u of o){const o=u.x>c.bounds.x?n:1-n
if(!(o&&1===s||!o&&-1===s))continue
const d=Math.abs(u.x+u.width/2-c.bounds.x),p=Math.max(0,h+Math.log2(d/i)-.1),m=Math.max(r,h+Math.log2(d/(i+e.length+0)))
if(0!==p&&(u.angle=e.angle+(1-n)*Math.PI,u.minZoom=m,u.maxZoom=p,this._writeGlyph(a,l,f.x,f.y,u),n&&this._isVisible(u.minZoom,u.maxZoom))){const i=u.bounds,r=e.x-t.x,s=e.y-t.y
a.metricBoxWrite(i.center[0]+r,i.center[1]+s,i.width,i.height)}}}_writeGlyphs(e,t,i,r,s=this._minZoom){if(i.x<0||i.x>=512||i.y<0||i.y>=512)return
const n=i.x+this._refOffsetX,o=i.y-this._refOffsetY
for(const i of r.glyphs)i.minZoom=s,i.maxZoom=this._maxZoom,this._writeGlyph(e,t,n,o,i)
const a=this._refPlacementDirX,l=this._refPlacementDirY,c=r.boundsT
e.metricStart(t,s,n,o,a,l,this._referenceSize,this._materialKey),e.metricBoxWrite(c.center[0],c.center[1],c.width,c.height),e.metricEnd()}_writeVertexCommon(e,t,i,r){const s=this._color,n=this._haloColor,o=Object(y.b)(0,0,this._size,this._haloSize),a=Math.max(r.minZoom,this._minZoom),l=Math.min(r.maxZoom,this._maxZoom),c=Object(y.b)(I(a),I(l),this._outLineLabelAngle,0)
e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(s),e.vertexWrite(n),e.vertexWrite(o),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(c)}}var E=i(1327),z=i(1330)
class L{constructor(e,t,i){this._loadPromise=Object(n.a)(),this._geometryType=e,this._idField=t,this._templateStore=i}update(e,t){Object(r.k)(e.mesh.labels)&&(this._labelTemplates=this._createLabelTemplates(e.mesh.labels,t)),this._schema=e}_createLabelTemplates(e,t){const i=new Map
if("simple"===e.type){for(const r of e.classes){const e=R.fromLabelClass(r,t)
i.set(r.index,e)}return i}for(const r in e.classes){const s=e.classes[r]
for(const e of s){const r=R.fromLabelClass(e,t)
i.set(e.index,r)}}return i}get templates(){return this._templateStore}async analyze(e,t,i,n,a,l,c){if(Object(s.n)(c))return
let h
"dictionary"===i.type&&(h=await i.analyze(this._idField,e.copy(),t,a,l,c))
let u=0
for(;e.next();){let t
if(t=h?h[u++]:Object(r.k)(n)&&Object(o.h)(e.getDisplayId())&&1!==e.readAttribute("cluster_count")?n.match(this._idField,e,this._geometryType,a,l):i.match(this._idField,e,this._geometryType,a,l),e.setGroupId(t),Object(z.b)(t)){const i=this._templateStore.getDynamicTemplateGroup(t)
for(const t of i)t&&t.analyze&&t.analyze(this._templateStore,e,a,l)}}return await this._loadPromise,this._templateStore.finalize(c)}async analyzeGraphics(e,t,i,r,n,o){if(Object(s.n)(o))return
const a=e.getCursor()
for(i&&await i.analyze(this._idField,a.copy(),t,r,n,o);a.next();){let e=a.getGroupId()
if(null!=e&&-1!==e||(e=i.match(this._idField,a,a.geometryType,r,n),a.setGroupId(e)),Object(z.b)(e)){const t=this._templateStore.getDynamicTemplateGroup(e)
for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,a,r,n)}a.setGroupId(e)}return await this._loadPromise,this._templateStore.finalize(o)}writeGraphic(e,t,i,r){const s=t.getGroupId(),n=t.getDisplayId(),o=this._templateStore.getTemplateGroup(s)
if(e.featureStart(t.insertAfter,0),null!=n){if(Object(z.b)(s))for(const e of o)e&&e.bindFeature(t,null,null)
if(o){for(const s of o)s&&s.write(e,t,i,r)
e.featureEnd()}}}writeCursor(e,t,i,s,n,o,a){const l=t.getGroupId(),c=t.getDisplayId(),h=this._templateStore.getTemplateGroup(l),u=this._schema.mesh.sortKey
let d=0
if(Object(r.k)(u)&&(d=null!=u.fieldIndex?t.getComputedNumericAtIndex(u.fieldIndex):null!=u.field?t.readAttribute(u.field):t.readAttribute(this._idField),d*="asc"===u.order?1:-1),e.featureStart(0,null==d||isNaN(d)?0:d),null!=c&&h){if(Object(z.b)(l))for(const e of h)e.bindFeature(t,i,s)
for(const i of h)i.write(e,t,n,a)
if(Object(r.k)(o)&&e.hasRecords){const i=o&&this._findLabelRef(h)
this._writeLabels(e,t,o,i,n,a)}e.featureEnd()}}_findLabelRef(e){for(const t of e)if(t instanceof E.a)return t
return null}_writeLabels(e,t,i,s,n,o){for(const a of i)if(Object(r.k)(a)&&a){const{glyphs:i,rtl:r,index:l}=a,c=this._labelTemplates.get(l)
c.setZoomLevel(n),c.bindReferenceTemplate(s),c.bindTextInfo(i,r),c.write(e,t,null,o)}}}},1498:function(e,t,i){"use strict"
i.d(t,"a",(function(){return L})),i.d(t,"b",(function(){return w})),i.d(t,"c",(function(){return O}))
var r=i(354),s=i(77),n=i(178),o=i(177),a=i(20),l=i(876),c=i(942),h=i(908),u=i(1303),d=i(1120),f=(i(1179),i(1367)),p=i(891)
function m(e,t){return Math.max(e,t)}i(1168),i(1160),p.f.metrics,new f.a(0,0,24,24)
var y=i(1464),x=i(1467),_=i(1406)
const g=o.a.getLogger("esri.views.2d.layers.features.schemaUtils"),b="ValidationError",v={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null}
function O(e){let t=0,i=0,r=!1,s=!0,n=!0
if(Object(a.k)(e)){if(i=function(e){if(!("visualVariables"in e))return 0
if(!e.hasVisualVariables("size"))return 0
const t=e.getVisualVariablesForType("size")
if(!t[0])return 0
const i=t[0]
if("outline"===i.target)return 0
if("stops"===i.transformationType)return i.stops.map(e=>e.size).reduce(m,0)
if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0
return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map(e=>e.size).reduce(m,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map(e=>e.size).reduce(m,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}(e),"visualVariables"in e&&(t=function(e){if(!e)return h.e.NONE
let t=0
for(const i of e)if("size"===i.type){const e=Object(u.a)(i)
t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=h.e.COLOR:"opacity"===i.type?t|=h.e.OPACITY:"rotation"===i.type&&(t|=h.e.ROTATION)
return t}(e.visualVariables||[]),r="dot-density"===e.type),"dictionary"===e.type)return{maxVVSize:i,supportsOutlineFills:!1,vvFlags:t,stride:{fill:"default"}}
if(!r){const t=e.getSymbols()
"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol)
for(const e of t)if("cim"===e.type&&(s=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline
t&&"none"!==t.style&&"solid"!==t.style&&(n=!1)
const i=t&&"none"!==t.style&&"solid"!==t.style,r="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;("picture-fill"===e.type||r||i)&&(s=!1)}}}return r&&(n=!1),{vvFlags:t,maxVVSize:i,supportsOutlineFills:n,stride:{fill:r?"dot-density":s?"simple":"default"}}}function j(e,t){const i=Object(n.a)(e)
return i.some(e=>function(e,t){const i=e.labelPlacement,s=v[t]
if(!e.symbol)return g.warn("No ILabelClass symbol specified."),!0
if(!s)return g.error(new r.a("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0
if(!s.some(e=>e===i)){const r=s[0]
i&&g.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${r}`),e.labelPlacement=r}return!1}(e,t))?[]:i}function w(e){return Object(s.a)("esri-2d-update-debug")&&console.debug("Created new schema",S(e,!0)),S(e)}function S(e,t=!1){try{var i,s
const n=function(e,t=!1){const i=new Array
return i.push(function(e,t,i=!1){const s={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,o=n?"aggregate":"feature"
if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},stride:{fill:"default"}},n={type:"subtype",mapping:{},target:"feature"},l={type:"subtype",classes:{}},c={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:n,mesh:{matcher:t,aggregateMatcher:null,labels:l,sortKey:null}},h=new Set
let u=0
for(const{renderer:c,subtypeCode:d,labelingInfo:f,labelsVisible:p}of e.sublayers){const e=L(s,o,c,i),m=z(s,o,c),y=p&&f
if("visualVariables"in c&&c.visualVariables&&c.visualVariables.length)throw new r.a(b,"Visual variables are currently not supported for subtype layers")
if("dictionary"===e.type)throw new r.a(b,"Dictionary renderer is not supported in subtype layers")
if("subtype"===e.type)throw new r.a(b,"Nested subtype renderers is not supported")
if(Object(a.k)(m)&&"subtype"===m.type)throw new r.a(b,"Nested subtype storage is not supported")
if(Object(a.k)(m)&&"dot-density"===m.type)throw new r.a(b,"Dot density attributes are not supported in subtype layers")
if(h.has(d))throw new r.a(b,"Subtype codes for sublayers must be unique")
h.add(d),t.renderers[d]=e,n.mapping[d]=m,y&&(l.classes[d]=y.map(e=>E(c,s,e,"feature",u++,i)))}return c}if("heatmap"===e.renderer.type){const{blurRadius:t,fieldOffset:i,field:r}=e.renderer
return{type:"heatmap",aggregateFields:[],attributes:s,target:o,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:C(s,{target:o,field:r,resultType:"numeric"}).field}}}{const t=[],l="aggregate"===o?Object(x.b)(t,e.renderer,n,null):e.renderer
!function(e,t){const i={mesh:!0,storage:!0}
for(const r of t){const{name:t,outStatistic:s}=r,{statisticType:n,onStatisticField:o}=s
let a=null,l=null,c=null
const h="numeric",u="feature"
"onStatisticValueExpression"in s?l=R(e,{type:"expression",target:u,valueExpression:s.onStatisticValueExpression,resultType:h}).fieldIndex:"onStatisticNormalizationField"in s?(a=R(e,{type:"field",target:u,field:o,resultType:h}).field,c=s.onStatisticNormalizationField):a=R(e,{type:"field",target:u,field:o,resultType:h}).field,R(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:a,inNormalizationField:c,inFieldIndex:l,statisticType:n})}}(s,t)
const c=L(s,o,l,i)
let h=null
const u=z(s,o,l),f=Object(_.b)(e.geometryType)
let p=e.labelsVisible&&e.labelingInfo||[],m=[]
if(n){if("selection"===n.type)throw new r.a(b,"Mapview does not support `selection` reduction type",n)
if(n.symbol){const e=O(l)
h={type:"simple",symbol:Object(d.createSymbolSchema)(n.symbol,e,i),stride:e.stride}}m=n&&n.labelsVisible&&n.labelingInfo||[]}p=j(p,f),m=j(m,f)
let y=0
const v=[...p.map(e=>E(l,s,e,"feature",y++,i)),...m.map(e=>E(l,s,e,"aggregate",y++,i))],w=function(e,t){if(Object(a.j)(t)||!t.length)return null
t.length>1&&g.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`)
const i=t[0],s="ascending"===i.order?"asc":"desc"
return i.field?{field:i.field,order:s}:i.valueExpression?{fieldIndex:R(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:s}:(g.error(new r.a(b,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}(s,e.orderBy)
return{type:"symbol",target:o,attributes:s,aggregateFields:t,storage:u,mesh:{matcher:c,labels:{type:"simple",classes:v},aggregateMatcher:h,sortKey:w}}}}(e)),i}(e,t),o={}
return n.map(t=>function(e,t,i){switch(i.target){case"feature":return void I(e,T(t),i)
case"aggregate":{if(!("featureReduction"in t))return
const s=t.featureReduction
if("selection"===s.type)throw new r.a(b,"Mapview does not support `selection` reduction type",s)
return I(e,T(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(l.h)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(l.h)(t.clusterMaxSize)/64),fields:i.aggregateFields}}),M(e.aggregate,i.attributes.fields)}(e,s,i)}}}(o,e,t)),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map(e=>e.toJSON()),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(s=e.timeExtent)?void 0:s.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,targets:o}}catch(e){if(e.fieldName===b)return g.error(e),null
throw e}}function M(e,t){for(const i in t){const r=t[i]
if(r.target!==e.name)continue
const s=e.attributes[i]
s?(s.context.mesh=s.context.mesh||r.context.mesh,s.context.storage=s.context.storage||r.context.storage):e.attributes[i]=r}return e}function T(e){var t,i,r,s,n
return[null!=(t=null==(i=Object(a.t)(e.filter))?void 0:i.toJSON())?t:null,null!=(r=null==(s=Object(a.t)(null==(n=Object(a.t)(e.featureEffect))?void 0:n.filter))?void 0:s.toJSON())?r:null]}function I(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),M(e.feature,i.attributes.fields),e}function C(e,t){return t.field?R(e,{...t,type:"field",field:t.field}):t.valueExpression?R(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function R(e,t){switch(t.type){case"expression":{const i=t.valueExpression
if(!e.fields[i]){const r=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label)
if(!e.fields[i]){const r=e.indexCount++
e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field
return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function E(e,t,i,r,s,n=!1){const o=R(t,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:a}=o,l=O(e)
return{...Object(d.createSymbolSchema)(i,l,n),fieldIndex:a,target:r,index:s}}function z(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){return i&&i.length?{type:"dot-density",mapping:i.map((i,r)=>{const{field:s,fieldIndex:n}=C(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t})
return{binding:r,field:s,fieldIndex:n}}),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,i.attributes)
case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t}
const r={storage:!0},s="numeric"
return{type:"visual-variable",mapping:Object(y.b)(i).map(i=>{var n
const o=Object(c.p)(i.type),{field:a,fieldIndex:l}=C(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:r,resultType:s})
switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:o,field:a,fieldIndex:l,normalizationField:C(e,{target:t,field:i.normalizationField,context:r,resultType:s}).field,valueRepresentation:null!=(n=i.valueRepresentation)?n:null}
case"color":return{type:"color",binding:o,field:a,fieldIndex:l,normalizationField:C(e,{target:t,field:i.normalizationField,context:r,resultType:s}).field}
case"opacity":return{type:"opacity",binding:o,field:a,fieldIndex:l,normalizationField:C(e,{target:t,field:i.normalizationField,context:r,resultType:s}).field}
case"rotation":return{type:"rotation",binding:o,field:a,fieldIndex:l}}}).filter(e=>e),target:t}}(e,t,i.visualVariables)
case"heatmap":return null}}function L(e,t,i,s=!1){const n=Object(a.u)(e,{indexCount:0,fields:{}})
switch(i.type){case"simple":case"dot-density":return function(e,t,i=!1){const r=t.getSymbols(),s=r.length?r[0]:null,n=O(t)
return{type:"simple",symbol:Object(d.createSymbolSchema)(s,n,i),stride:n.stride}}(0,i,s)
case"class-breaks":return function(e,t,i,r=!1){const s=i.backgroundFillSymbol,{field:n,fieldIndex:o}=C(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),a=i.normalizationType,l="log"===a?"esriNormalizeByLog":"percent-of-total"===a?"esriNormalizeByPercentOfTotal":"field"===a?"esriNormalizeByField":null,c=O(i),h=i.classBreakInfos.map(e=>({symbol:Object(d.createSymbolSchema)(e.symbol,c,r),min:e.minValue,max:e.maxValue})).sort((e,t)=>e.min-t.min)
return{type:"interval",attributes:e.fields,field:n,fieldIndex:o,backgroundFillSymbol:Object(d.createSymbolSchema)(s,c,r),defaultSymbol:Object(d.createSymbolSchema)(i.defaultSymbol,c,r),intervals:h,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:l,isMaxInclusive:i.isMaxInclusive,stride:c.stride}}(n,t,i,s)
case"unique-value":return function(e,t,i,s=!1){const n=[],o=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"}
if(i.field&&"string"!=typeof i.field)throw new r.a(b,"Expected renderer.field to be a string",i)
const{field:l,fieldIndex:c}=C(e,{...a,field:i.field,valueExpression:i.valueExpression}),h=O(i)
for(const e of i.uniqueValueInfos)n.push({value:""+e.value,symbol:Object(d.createSymbolSchema)(e.symbol,h,s)})
return{type:"map",attributes:e.fields,field:l,fieldIndex:c,field2:C(e,{...a,field:i.field2}).field,field3:C(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:Object(d.createSymbolSchema)(o,h),defaultSymbol:Object(d.createSymbolSchema)(i.defaultSymbol,h),map:n,stride:h.stride}}(n,t,i,s)
case"dictionary":return function(e,t,i=!1){const r=O(t)
return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,stride:r.stride}}(0,i,s)}}},1499:function(e,t,i){"use strict"
i.d(t,"a",(function(){return C}))
var r=i(861),s=i(1338),n=i(354),o=i(77),a=i(177),l=i(20),c=i(891),h=i(1074),u=i(942),d=i(1310),f=i(877),p=i(1041),m=i(973)
const y=a.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),x=Object(d.b)(d.a,y)
class _{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4
const{buffer:r,pixelType:s,textureOnly:n}=e,o=Object(u.l)(s)
this.shared=i,this.pixelType=s,this.size=t,this.textureOnly=n,n||(this.data=new o(Object(l.t)(r))),this._resetRange()}destroy(){Object(l.b)(this._texture,e=>e.dispose())
for(const e in this._fbos)Object(l.b)(this._fbos[e],t=>{"0"===e&&t.detachColorTexture(),t.dispose()}),this._fbos[e]=null
this._texture=null}get _textureDesc(){return{target:f.A.TEXTURE_2D,wrapMode:f.B.CLAMP_TO_EDGE,pixelFormat:f.p.RGBA,dataType:this.pixelType,samplingMode:f.z.NEAREST,width:this.size,height:this.size}}setData(e,t,i){const r=Object(h.f)(e),s=Object(l.t)(this.data),n=r*this.texelSize+t
!s||n>=s.length||(s[n]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}getData(e,t){if(Object(l.j)(this.data))return null
const i=Object(h.f)(e)*this.texelSize+t
return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return Object(l.u)(this._texture,()=>this._initTexture(e))}getFBO(e,t=0){if(Object(l.j)(this._fbos[t])){const i={colorTarget:f.y.TEXTURE,depthStencilTarget:f.m.NONE},r=0===t?this.getTexture(e):this._textureDesc
this._fbos[t]=new p.a(e,i,r)}return this._fbos[t]}get locked(){return!(this.pixelType!==f.q.UNSIGNED_BYTE||!this.shared||this.textureOnly||!Object(o.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const e=this.dirtyStart
return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const t=this.dirtyStart,i=this.dirtyEnd
if(!this.hasDirty)return
this._resetRange()
const r=Object(l.t)(this.data).buffer,s=this.getTexture(e),o=4,a=(t-t%this.size)/this.size,c=(i-i%this.size)/this.size,h=a,d=this.size,f=c,p=a*this.size*o,m=(d+f*this.size)*o-p,x=Object(u.l)(this.pixelType),_=new x(r,p*x.BYTES_PER_ELEMENT,m),g=this.size,b=f-h+1
if(b>this.size)return void y.error(new n.a("mapview-webgl","Out-of-bounds index when updating AttributeData"))
s.updateData(0,0,h,g,b,_)}catch(e){}t()}}update(e){const{data:t,start:i,end:r}=e
if(Object(l.k)(t)){const r=this.data,s=i*this.texelSize
for(let i=0;i<t.length;i++){const n=1<<i%this.texelSize
e.layout&n&&(r[s+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}resize(e,t){const i=this.size
if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null))
const r=Object(u.l)(this.pixelType)
this.destroy(),this.data=new r(Object(l.t)(e.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new m.a(e,this._textureDesc,Object(l.u)(this.data,void 0))
if(Object(l.k)(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,s=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(e),a=Object(u.m)(s),l=new(Object(u.l)(s))(new ArrayBuffer(i*r*a*this.texelSize)),c=e.getBoundFramebufferObject(),{x:h,y:d,width:f,height:p}=e.getViewport()
e.bindFramebuffer(o),o.readPixels(0,0,i,r,n,s,l),t.updateData(0,0,0,2*i,r/2,l),e.setViewport(h,d,f,p),e.bindFramebuffer(c)}return this.destroy(),this._texture=t,this._texture}}class g{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:i,size:r}=e
if(this.shared=i,this.size=r,x("Initializing AttributeStoreView",e),Object(l.j)(this._data))this._data=Object(l.m)(t,e=>new _(e,r,i))
else for(let e=0;e<this._data.length;e++){const s=this._data[e],n=t[e]
Object(l.k)(n)&&(Object(l.j)(s)?this._data[e]=new _(n,r,i):s.resize(n,r))}this._initialized=!0}destroy(){Object(l.b)(this._data,e=>Object(l.m)(e,e=>e.destroy())),Object(l.b)(this._defaultTexture,e=>e.dispose())}isEmpty(){const e=this._data
return Object(l.j)(e)}isUpdating(){const e=Object(l.k)(this._pendingAttributeUpdate),t=e
return Object(o.a)("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}\n  -> hasPendingUpdate ${e}`),t}getBlock(e){return Object(l.j)(this._data)?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,c.e,0,0)}getData(e,t,i,r){if(!this._data)return 0
const s=Object(l.t)(this._data)[t]
if(Object(l.j)(s))return 0
const n=s.getData(e,i)
return Object(l.k)(n)?n:r}setData(e,t,i,r){const s=Object(l.t)(this._data)[t]
Object(l.t)(s).setData(e,i,r)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void y.error(new n.a("mapview-webgl","Tried to update attribute data with a pending update"))
const t=Object(r.g)()
return x("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},t.promise}update(){if(this._initialized&&Object(l.k)(this._pendingAttributeUpdate)){const{data:e,resolver:t}=this._pendingAttributeUpdate,i=Object(l.t)(this._data)
for(let t=0;t<e.blocks.length;t++){const r=e.blocks[t],s=i[t]
Object(l.b)(s,e=>Object(l.b)(r,i=>{x("Updating block "+t,i),e.update(i)}))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){this.update()
const i=this._getDefaultTexture(e)
if(!this._initialized)return e.bindTexture(i,c.B),void(t&&(e.bindTexture(i,c.C),e.bindTexture(i,c.D),e.bindTexture(i,c.E),e.bindTexture(i,c.H)))
const r=Object(l.t)(this._data)
this._locked&&!this._forceNextUpload||(Object(l.h)(r,t=>t.updateTexture(e,()=>this._onUpdate())),this._forceNextUpload=!1),e.bindTexture(Object(l.n)(r[c.c],i,t=>t.getTexture(e)),c.B),t&&(e.bindTexture(Object(l.n)(r[c.d],i,t=>t.getTexture(e)),c.H),e.bindTexture(Object(l.n)(r[c.a],i,t=>t.getTexture(e)),c.C),e.bindTexture(Object(l.n)(r[c.e],i,t=>t.getTexture(e)),c.D),e.bindTexture(Object(l.n)(r[c.b],i,t=>t.getTexture(e)),c.E))}_getDefaultTexture(e){if(Object(l.j)(this._defaultTexture)){const t={wrapMode:f.B.CLAMP_TO_EDGE,pixelFormat:f.p.RGBA,dataType:f.q.UNSIGNED_BYTE,samplingMode:f.z.NEAREST,width:1,height:1}
this._defaultTexture=new m.a(e,t,new Uint8Array(4))}return this._defaultTexture}}var b=i(1342),v=i(873),O=i(876),j=i(886),w=i(999),S=i(1266)
function M(e,t){const i=t.length
if(e<t[0].value||1===i)return t[0].size
for(let r=1;r<i;r++)if(e<t[r].value){const i=(e-t[r-1].value)/(t[r].value-t[r-1].value)
return t[r-1].size+i*(t[r].size-t[r-1].size)}return t[i-1].size}function T(e,t,i=0){if(Object(l.j)(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0)
const{r:r,g:s,b:n,a:o}=t
e[i+0]=r*o/255,e[i+1]=s*o/255,e[i+2]=n*o/255,e[i+3]=o}class I{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops
switch(t.type){case"static":return t
case"level-dependent":return Object(l.u)(t.levels[e],()=>{let i=1/0,r=0
for(const s in t.levels){const t=parseFloat(s),n=Math.abs(e-t)
n<i&&(i=n,r=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])}
const s=2**((e-r)/2),n=Object(l.t)(t.levels[r]),o=new Float32Array(n.values)
return o[2]*=s,o[3]*=s,{sizes:Object(l.t)(n.sizes),values:o}})}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){Object(l.k)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,"dot-density"===e.type&&this._updateDotDensityInfo(e)}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:Object(S.a)().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(e){Object(l.k)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters
if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return
const r=e.size
if(r){if(i.vvSizeEnabled=!0,r.minMaxValue){const e=r.minMaxValue
let i,s
if(Object(u.r)(e.minSize)&&Object(u.r)(e.maxSize))if(Object(u.u)(e.minSize)&&Object(u.u)(e.maxSize))i=Object(O.h)(e.minSize),s=Object(O.h)(e.maxSize)
else{const r=t.scale
i=Object(O.h)(M(r,e.minSize.stops)),s=Object(O.h)(M(r,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,s])}if(r.scaleStops&&(this.vvSizeScaleStopsValue=Object(O.h)(M(t.scale,r.scaleStops.stops))),r.unitValue){const e=Object(j.f)(t.spatialReference)/w.a[r.unitValue.unit]
this.vvSizeUnitValueToPixelsRatio=e/t.resolution}r.fieldStops&&(this._vvSizeFieldStops=r.fieldStops)}const s=e.color
s&&(i.vvColorEnabled=!0,this.vvColorValues.set(s.values),this.vvColors.set(s.colors))
const n=e.opacity
n&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities))
const o=e.rotation
o&&(i.vvRotationEnabled=!0,i.vvRotationType=o.type)}_updateDotDensityInfo(e){const t=e.attributes
this.ddDotValue=e.dotValue,this.ddDotScale=e.referenceScale,this.ddDotSize=e.dotSize,this.ddDotBlending=e.dotBlendingEnabled,this.ddSeed=e.seed
for(let e=0;e<c.o;e++){const i=e>=t.length?new v.a([0,0,0,0]):t[e].color
T(this.ddColors,i,4*e)}for(let t=0;t<8;t++)this.ddActiveDots[t]=t<e.attributes.length?1:0
T(this.ddBackgroundColor,e.backgroundColor)}}class C extends b.a{constructor(e){super(e),this._rendererInfo=new I,this._materialItemsRequestQueue=new s.a,this.attributeView=new g(()=>this.onAttributeStoreUpdate())}destroy(){this.removeAllChildren(),this.children.forEach(e=>e.destroy()),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return null
const i=Object(r.g)()
return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop()
for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e)
this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){const t=super.createRenderParams(e)
return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:r}){const{painter:s,pixelRatio:n}=e,o=t.map(e=>s.textureManager.rasterizeItem(e.symbol,n,e.glyphIds,i))
Promise.all(o).then(e=>{if(!this.stage)return void r.reject()
const i=e.map((e,i)=>({id:t[i].id,mosaicItem:e}))
r.resolve(i)},r.reject)}}},1500:function(e,t,i){"use strict"
i.d(t,"a",(function(){return a}))
var r=i(1074)
class s{constructor(){this._freeIds=[],this._idCounter=1}createId(e=!1){return Object(r.d)(this._getFreeId(),e)}releaseId(e){this._freeIds.push(e)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var n=i(1312)
function o(e,t,i){if(!(e.length>t))for(;e.length<=t;)e.push(i)}class a{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new s,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const e=this._bitsets.length
return this._bitsets.push(n.a.create(this._allocatedSize,r.a)),e+1}getBitset(e){return this._bitsets[e-1]}_expand(){this._allocatedSize<<=1
for(const e of this._bitsets)e.resize(this._allocatedSize)}_ensureNumeric(e,t){this._numerics[e]||(this._numerics[e]=[]),o(this._numerics[e],t,0)}_ensureInstanceId(e){o(this._instanceIds,e,0)}_ensureString(e,t){this._strings[e]||(this._strings[e]=[]),o(this._strings[e],t,null)}createDisplayId(e=!1){const t=this._idGenerator.createId()
return t>this._allocatedSize&&this._expand(),Object(r.d)(t,e)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e)
return this._idGenerator.releaseId(e&r.a)}getComputedNumeric(e,t){return this.getComputedNumericAtIndex(e&r.a,0)}setComputedNumeric(e,t,i){return this.setComputedNumericAtIndex(e&r.a,i,0)}getComputedString(e,t){return this.getComputedStringAtIndex(e&r.a,0)}setComputedString(e,t,i){return this.setComputedStringAtIndex(e&r.a,0,i)}getComputedNumericAtIndex(e,t){const i=e&r.a
return this._ensureNumeric(t,i),this._numerics[t][i]}setComputedNumericAtIndex(e,t,i){const s=e&r.a
this._ensureNumeric(t,s),this._numerics[t][s]=i}getInstanceId(e){const t=e&r.a
return this._ensureInstanceId(t),this._instanceIds[t]}setInstanceId(e,t){const i=e&r.a
this._ensureInstanceId(i),this._instanceIds[i]=t}getComputedStringAtIndex(e,t){const i=e&r.a
return this._ensureString(t,i),this._strings[t][i]}setComputedStringAtIndex(e,t,i){const s=e&r.a
this._ensureString(t,s),this._strings[t][s]=i}getXMin(e){return this._bounds[4*(e&r.a)]}getYMin(e){return this._bounds[4*(e&r.a)+1]}getXMax(e){return this._bounds[4*(e&r.a)+2]}getYMax(e){return this._bounds[4*(e&r.a)+3]}setBounds(e,t){const i=t.readHydratedGeometry()
if(!i||!i.coords.length)return!1
let s=1/0,n=1/0,a=-1/0,l=-1/0
i.forEachVertex((e,t)=>{s=Math.min(s,e),n=Math.min(n,t),a=Math.max(a,e),l=Math.max(l,t)})
const c=e&r.a
return o(this._bounds,4*c+4,0),this._bounds[4*c]=s,this._bounds[4*c+1]=n,this._bounds[4*c+2]=a,this._bounds[4*c+3]=l,!0}}},1540:function(e,t,i){"use strict"
i.d(t,"a",(function(){return x}))
var r=i(1499),s=i(978),n=i(1025),o=i(1042),a=i(1131),l=i(1008),c=i(1123),h=i(942),u=i(985),d=i(877),f=i(998)
const p=Math.PI/180
class m extends c.a{constructor(e){super(),this._dvsMat3=Object(n.b)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program&&(this._program.dispose(),this._program=null)}doRender(e){const{context:t}=e,i=this._getBounds()
if(i.length<1)return
this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(d.b.ONE,d.b.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0)
const r=this._program
t.bindVAO(this._vao),t.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(d.r.LINES,8*i.length,d.k.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:Object(n.b)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",y().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:r,resolution:n,pixelRatio:c,rotation:h,viewpoint:u}=t,d=p*h,{x:f,y:m}=u.targetGeometry,y=Object(l.b)(f,t.spatialReference)
this._localOrigin.x=y,this._localOrigin.y=m
const x=c*r[0],_=c*r[1],g=n*x,b=n*_,v=Object(s.b)(this._dvsMat3)
Object(s.l)(v,v,i),Object(s.c)(v,v,Object(o.b)(x/2,_/2)),Object(s.d)(v,v,Object(a.d)(r[0]/g,-_/b,1)),Object(s.n)(v,v,-d)}_updateBufferData(e,t){const{x:i,y:r}=this._localOrigin,s=8*t.length,n=new Float32Array(s),o=new Uint32Array(8*t.length)
let a=0,l=0
for(const e of t)e&&(n[2*a+0]=e[0]-i,n[2*a+1]=e[1]-r,n[2*a+2]=e[0]-i,n[2*a+3]=e[3]-r,n[2*a+4]=e[2]-i,n[2*a+5]=e[3]-r,n[2*a+6]=e[2]-i,n[2*a+7]=e[1]-r,o[l+0]=a+0,o[l+1]=a+3,o[l+2]=a+3,o[l+3]=a+2,o[l+4]=a+2,o[l+5]=a+1,o[l+6]=a+1,o[l+7]=a+0,a+=4,l+=8)
if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=u.a.createVertex(e,d.D.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=u.a.createIndex(e,d.D.DYNAMIC_DRAW,o),!this._vao){const t=y()
this._vao=new f.a(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const y=()=>Object(h.g)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:d.k.FLOAT}]})
class x extends r.a{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer&&(this._boundsRenderer.destroy(),this._boundsRenderer=null)}enableRenderingBounds(e){this._boundsRenderer=new m(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(d.h.EQUAL,i.stencilRef,255),i._displayList.replay(e,i,t))}}},1582:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
var r=i(908),s=i(1540)
class n extends s.a{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some(e=>e.hasData)&&(super.renderChildren(e),e.drawPhase===r.c.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===r.c.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight
i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},2228:function(e,t,i){"use strict"
i.r(t),i.d(t,"default",(function(){return p}))
var r=i(856),s=i(663),n=i(878),o=i(858),a=(i(353),i(77),i(859),i(857)),l=i(1331),c=i(1582),h=i(1494),u=i(1118)
const d={remove(){},pause(){},resume(){}}
let f=class extends(Object(l.a)(u.a)){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new h.a({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new c.a(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e):null}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.hitTest(e).filter(e=>!!e.popupTemplate)}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){var t
let i
return"number"==typeof e?i=[e]:e instanceof s.default?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map(e=>e&&e.uid):n.a.isCollection(e)&&e.length>0&&(i=e.map(e=>e&&e.uid).toArray()),i=null==(t=i)?void 0:t.filter(e=>null!=e),i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):d}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)
this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1)
this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1
0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){var e
null==(e=this.graphicsView)||e.setHighlight(Array.from(this._highlightIds.keys()))}}
Object(r.a)([Object(o.b)()],f.prototype,"graphicsView",void 0),f=Object(r.a)([Object(a.a)("esri.views.2d.layers.GraphicsLayerView2D")],f)
const p=f}}])
