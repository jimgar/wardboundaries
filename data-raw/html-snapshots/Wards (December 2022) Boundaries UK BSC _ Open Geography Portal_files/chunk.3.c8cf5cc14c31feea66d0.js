(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{1007:function(t,e,n){"use strict"
n.d(e,"a",(function(){return A})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return T}))
var r,i,s=n(1061),o=n(178),c=n(2046),a=n(948),u=n(1645),l=n(1049),f=n(1346),h=n(958),d=n(920);(i=r||(r={}))[i.Untracked=0]="Untracked",i[i.Tracked=1]="Tracked"
class p{constructor(){this.uid=Object(l.b)(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null}static acquireUntracked(t,e,n,i,s){return this.pool.acquire(r.Untracked,t,e,n,i,s,o.b)}static acquireTracked(t,e,n,i){return this.pool.acquire(r.Tracked,t,e,n,null,null,i)}notify(t,e){this.type===r.Untracked?this.callback.call(this.target,t,e,this.path,this.target):this.callback.call(null,t,e)}acquire(t,e,n,r,i,s,o){this.uid=Object(l.b)(),this.removed=!1,this.type=t,this.oldValue=e,this.callback=n,this.getValue=r,this.target=i,this.path=s,this.equals=o}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=Object(l.b)(),this.removed=!0}}p.pool=new c.a(p)
const y=new s.a,g=new Set
let _
function b(t){g.delete(t),g.add(t),_||(_=Object(a.b)(O))}function v(t){if(t.removed)return
const e=t.oldValue,n=t.getValue()
t.equals(e,n)||(t.oldValue=n,t.notify(n,e))}function m(t){for(const e of g.values())e.target===t&&(e.removed=!0)}function O(){let t=10
for(;_&&t--;){_=null
const t=j(),e=y.acquire()
for(const n of t){const t=n.uid
v(n),t===n.uid&&n.removed&&e.push(n)}for(const t of g)t.removed&&(e.push(t),g.delete(t))
for(const t of e)p.pool.release(t)
y.release(e),y.release(t),w.forEach(t=>t())}}function j(){const t=y.acquire()
t.length=g.size
let e=0
for(const n of g)t[e]=n,++e
return g.clear(),t}const w=new Set
function A(t){return w.add(t),{remove(){w.delete(t)}}}function k(t,e,n,r=!1){return!t.__accessor__||t.__accessor__.destroyed?{remove(){}}:r?function(t,e,n){const r=Object(d.e)(t,e,n,(t,e,n)=>{let i=!1
return Object(h.b)(()=>Object(f.c)(t,e),(s,c)=>{t.__accessor__.destroyed?r.remove():i||(i=!0,Object(o.b)(c,s)||n.call(t,s,c,e,t),i=!1)})})
return r}(t,e,n):function(t,e,n){let r=Object(d.e)(t,e,n,(t,e,n)=>{let i,s,o=Object(h.c)(()=>Object(f.c)(t,e),(o,c)=>{t.__accessor__.destroyed||i&&i.uid!==s?r.remove():(i||(i=p.acquireUntracked(o,n,c,t,e),s=i.uid),b(i))})
return{remove:Object(d.d)(()=>{o.remove(),i&&(i.uid!==s||i.removed||(i.removed=!0,b(i)),i=null),r=o=null})}})
return r}(t,e,n)}function T(t,e,n=!1,r=o.b){return n?function(t,e,n){let r=!1
return Object(h.b)(t,(t,i)=>{r||(r=!0,n(i,t)||e(t,i),r=!1)})}(t,e,r):function(t,e,n){let r,i,s=Object(h.c)(t,(t,o)=>{r&&r.uid!==i?s.remove():(r||(r=p.acquireTracked(t,e,o,n),i=r.uid),b(r))})
return{remove:Object(d.d)(()=>{s.remove(),r&&(r.uid!==i||r.removed||(r.removed=!0,b(r)),r=null),s=null})}}(t,e,r)}function E(t){return Object(u.a)(g,e=>e.oldValue===t)}},1015:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}))
var r=n(177),i=n(109),s=n(970),o=n(1181),c=n(2214)
const a=r.a.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader")
function u(t,e,n){var r,s
t&&(!n&&!e.read||null!=(r=e.read)&&r.reader||!1===(null==(s=e.read)?void 0:s.enabled)||function(t){return"types"in t?g(t.types):y(t.type)}(t)&&Object(i.c)("read.reader",l(t),e))}function l(t){var e
const n=null!=(e=t.ndimArray)?e:0
if(n>1)return function(t){var e
const n=f(t),r=h.bind(null,n),i=null!=(e=t.ndimArray)?e:0
return(t,e,n)=>{if(null==t)return t
t=r(t,n,i)
let s=i,o=t
for(;s>0&&Array.isArray(o);)s--,o=o[0]
if(void 0!==o)for(let e=0;e<s;e++)t=[t]
return t}}(t)
if(1===n)return d(t)
if("type"in t&&p(t.type)){var r,i
const e=null==(r=t.type.prototype)||null==(i=r.itemType)?void 0:i.Type,n=d("function"==typeof e?{type:e}:{types:e})
return(e,r,i)=>{const s=n(e,r,i)
return s?new t.type(s):s}}return f(t)}function f(t){return"type"in t?function(t){return t.prototype.read?(e,n,r)=>{if(null==e)return e
const i=typeof e
if("object"!==i)return void a.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${i}'`)
const s=new t
return s.read(e,r),s}:t.fromJSON}(t.type):function(t){var e
let n=null
const r=null!=(e=t.errorContext)?e:"type"
return(e,i,c)=>{if(null==e)return e
const u=typeof e
if("object"!==u)return void a.error(`Expected JSON value of type 'object' to deserialize, but got '${u}'`)
n||(n=function(t){const e={}
for(const i in t.typeMap){var n,r
const s=t.typeMap[i],c=Object(o.a)(s.prototype)
if("function"==typeof t.key)continue
const a=c.properties[t.key]
if(!a)continue
null!=(n=a.json)&&n.type&&Array.isArray(a.json.type)&&1===a.json.type.length&&"string"==typeof a.json.type[0]&&(e[a.json.type[0]]=s)
const u=null==(r=a.json)?void 0:r.write
if(!u||!u.writer){e[i]=s
continue}const l=u.target,f="string"==typeof l?l:t.key,h={}
u.writer(i,h,f),h[f]&&(e[h[f]]=s)}return e}(t))
const l=t.key
if("string"!=typeof l)return
const f=e[l],h=f?n[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0
if(!h){const t=`Type '${f||"unknown"}' is not supported`
return c&&c.messages&&e&&c.messages.push(new s.a(r+":unsupported",t,{definition:e,context:c})),void a.error(t)}const d=new h
return d.read(e,c),d}}(t.types)}function h(t,e,n,r){return 0!==r&&Array.isArray(e)?e.map(e=>h(t,e,n,r-1)):t(e,void 0,n)}function d(t){const e=f(t)
return(t,n,r)=>{if(null==t)return t
if(Array.isArray(t)){const n=[]
for(const i of t){const t=e(i,void 0,r)
void 0!==t&&n.push(t)}return n}const i=e(t,void 0,r)
return void 0!==i?[i]:void 0}}function p(t){if(!Object(c.a)(t))return!1
const e=t.prototype.itemType
return!(!e||!e.Type)&&("function"==typeof e.Type?y(e.Type):g(e.Type))}function y(t){return!Array.isArray(t)&&!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||p(t))}function g(t){for(const e in t.typeMap)if(!y(t.typeMap[e]))return!1
return!0}},1049:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}))
let r=0
const i=0
function s(){return++r}},1061:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var r=n(982)
function i(t){t.length=0}class s{constructor(t=50,e=50){this._pool=new r.a(Array,void 0,i,e,t)}acquire(){return this._pool.acquire()}release(t){this._pool.release(t)}prune(){this._pool.prune(0)}static acquire(){return o.acquire()}static release(t){return o.release(t)}static prune(){o.prune()}}const o=new s(100)},1063:function(t,e,n){"use strict"
n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return v})),n(77)
var r=n(177),i=n(920),s=n(2111)
let o,c=[]
const a=r.a.getLogger("esri.core.Accessor")
function u(t){void 0!==o&&o.onObservableAccessed(t)}let l=!1,f=!1
function h(t,e,n){if(l)return p(t,e,n)
y(t)
const r=e.call(n)
return g(),r}function d(t,e){return h(void 0,t,e)}function p(t,e,n){const r=l
l=!0,y(t)
let i=null
try{i=e.call(n)}catch(t){f&&a.error(t)}return g(),l=r,i}function y(t){o=t,c.push(t)}function g(){const t=c.pop()
o=c.length>0?c[c.length-1]:void 0,void 0!==t&&t.onTrackingEnd()}function _(t,e){if(e.flags&s.a.DepTrackingInitialized)return
const n=f
f=!1,e.flags&s.a.AutoTracked?p(e,e.metadata.get,t):v(t,e),f=n}const b=[]
function v(t,e){e.flags&s.a.ExplicitlyTracking||(e.flags|=s.a.ExplicitlyTracking,p(e,()=>{const n=e.metadata.dependsOn||b
for(const e of n)if("string"==typeof e&&-1===e.indexOf("."))m(t,e,!1)
else{const n=Object(i.f)(e)
for(let e=0,r=t;e<n.length&&null!=r&&"object"==typeof r;++e)r=m(r,n[e],e!==n.length-1)}}),e.flags&=~s.a.ExplicitlyTracking)}function m(t,e,n){const r="?"===e[e.length-1]?e.slice(0,-1):e
if(null!=t.getItemAt||Array.isArray(t)){const e=parseInt(r,10)
if(!isNaN(e))return Array.isArray(t)?t[e]:t.getItemAt(e)}const s=Object(i.a)(t),o=null==s?void 0:s.properties.get(r)
return o&&(u(o),_(t,o)),n?t[r]:void 0}},1109:function(t,e,n){"use strict"
function r(t,e){for(const[n,r]of t)if(e(r,n))return!0
return!1}function i(t,e){for(const[n,r]of t)if(e(r,n))return r
return null}function s(t,e,n){const r=t.get(e)
if(void 0!==r)return r
const i=n()
return t.set(e,i),i}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r}))},1128:function(t,e,n){"use strict"
function r(t){return t}function i(t){return 1e3*t}function s(t){return t}function o(t){return.001*t}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o}))},1134:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var r=n(353)
class i{constructor(t,e){this._observers=t,this._observer=e}remove(){Object(r.k)(this._observers,this._observer)}}},1165:function(t,e,n){"use strict"
n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return y}))
var r=n(859),i=n(1015)
function s(t){t.name&&(t.read&&"object"==typeof t.read?void 0===t.read.source&&(t.read.source=t.name):t.read={source:t.name},t.write&&"object"==typeof t.write?void 0===t.write.target&&(t.write.target=t.name):t.write={target:t.name})}function o(t){"boolean"==typeof t.read?t.read={enabled:t.read}:"function"==typeof t.read?t.read={enabled:!0,reader:t.read}:t.read&&"object"==typeof t.read&&void 0===t.read.enabled&&(t.read.enabled=!0)}function c(t){"boolean"==typeof t.write?t.write={enabled:t.write}:"function"==typeof t.write?t.write={enabled:!0,writer:t.write}:t.write&&"object"==typeof t.write&&void 0===t.write.enabled&&(t.write.enabled=!0)}var a=n(1591)
function u(t,e){return f(t,"read",e)}function l(t,e){return f(t,"write",e)}function f(t,e,n){let r=t&&t.json
if(t&&t.json&&t.json.origins&&n){const i=t.json.origins[n.origin]
i&&("any"===e||e in i)&&(r=i)}return r}function h(t){return t.type?d(t):p(t)}function d(t){if(!t.type)return
let e=0,n=t.type
for(;Array.isArray(n)&&!Object(r.o)(n);)n=n[0],e++
return{type:n,ndimArray:e}}function p(t){if(!t.types)return
let e=0,n=t.types
for(;Array.isArray(n);)n=n[0],e++
return{types:n,ndimArray:e}}function y(t){(function(t){if(t.json||(t.json={}),o(t.json),c(t.json),s(t.json),t.json.origins)for(const e in t.json.origins)o(t.json.origins[e]),c(t.json.origins[e]),s(t.json.origins[e])
return!0})(t)&&(function(t){if(t.json&&t.json.origins){const e=t.json.origins,n={"web-document":["web-scene","web-map"]}
for(const t in n)if(e[t]){const r=e[t]
n[t].forEach(t=>{e[t]=r}),delete e[t]}}}(t),function(t){const e=function(t){return t.json.types?p(t.json):t.type?d(t):p(t)}(t)
if(t.json.origins)for(const n in t.json.origins){const r=t.json.origins[n],s=r.types?h(r):e
Object(i.a)(s,r,!1),r.types&&!r.write&&t.json.write&&t.json.write.enabled&&(r.write={...t.json.write}),Object(a.a)(s,r)}Object(i.a)(e,t.json,!0),Object(a.a)(e,t.json)}(t))}},1181:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u}))
var r=n(178),i=n(20),s=n(920)
class o{constructor(t){this.autoDestroy=!1,this.properties=t}}function c(t){let e=t.constructor.__accessorMetadata__
const n=Object.prototype.hasOwnProperty.call(t.constructor,"__accessorMetadata__")
if(e){if(!n){const n=Object.create(e.properties),i=e.autoDestroy
for(const t in n)n[t]=Object(r.a)(n[t])
e=new o(n),e.autoDestroy=i,Object.defineProperty(t.constructor,"__accessorMetadata__",{value:e,enumerable:!1,configurable:!0,writable:!0})}}else e=new o({}),Object.defineProperty(t.constructor,"__accessorMetadata__",{value:e,enumerable:!1,configurable:!0,writable:!0})
return Object(i.c)(t.constructor.__accessorMetadata__)}function a(t,e){const n=function(t){return c(t).properties}(t)
let r=n[e]
return r||(r=n[e]={}),r}function u(t,e){return Object(s.c)(t,e,f)}const l=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/
function f(t){return l.test(t)?"replace":"merge"}},1199:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
const r=[]
function i(t){r.push(t),1===r.length&&queueMicrotask(()=>{const t=r.slice()
r.length=0
for(const e of t)e()})}},1346:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s}))
var r=n(920)
function i(t,e){const n="?"===t[t.length-1]?t.slice(0,-1):t
if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(n,10)
if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const i=Object(r.a)(e)
return Object(r.b)(i,n)?i.get(n):e[n]}function s(t,e,n=0){return"string"==typeof e&&-1===e.indexOf(".")?i(e,t):function t(e,n,r){if(null==e)return e
const s=i(n[r],e)
return!s&&r<n.length-1?void 0:r===n.length-1?s:t(s,n,r+1)}(t,Object(r.f)(e),n)}function o(t,e){return s(t,e)}function c(t,e){return void 0!==s(e,t)}},1501:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r}))
class r{constructor(t,e=29){this.name=t,this._counter=0,this._items=new Array(e)}record(t){this._items[++this._counter%this._items.length]=t}get median(){return this._items.slice().sort((t,e)=>t-e)[Math.floor(this._items.length/2)]}get average(){return this._items.reduce((t,e)=>t+e,0)/this._items.length}get last(){return this._items[this._counter%this._items.length]}}},1558:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r}))
class r{constructor(t){this._notify=t,this._accessed=[],this._handles=[],this._invalidCount=0}destroy(){this._accessed.length=0,this.clear()}onInvalidated(){this._invalidCount++}onCommitted(){const t=this._invalidCount
if(1===t)return this._invalidCount=0,void this._notify()
this._invalidCount=t>0?t-1:0}onObservableAccessed(t){this._accessed.includes(t)||this._accessed.push(t)}onTrackingEnd(){const t=this._handles,e=this._accessed
for(let n=0;n<e.length;++n)t.push(e[n].observe(this))
e.length=0}clear(){const t=this._handles
for(let e=0;e<t.length;++e)t[e].remove()
t.length=0}}},1591:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return h}))
var r=n(354),i=n(177),s=n(109),o=n(2214)
const c=i.a.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer")
function a(t,e){var n
if(!e.write||e.write.writer||!1===e.write.enabled&&!e.write.overridePolicy)return
const r=null!=(n=null==t?void 0:t.ndimArray)?n:0
t&&(1===r||"type"in t&&Object(o.a)(t.type))?e.write.writer=d:r>1?e.write.writer=function(t){return function(e,n,r,i){let o
if(null===e)o=null
else{o=function t(e,n,r){return 0!==r&&Array.isArray(e)?e.map(e=>t(e,n,r-1)):f(e,n)}(e,i,t)
let n=t,r=o
for(;n>0&&Array.isArray(r);)n--,r=r[0]
if(void 0!==r)for(let t=0;t<n;t++)o=[o]}Object(s.c)(r,o,n)}}(r):e.types?Array.isArray(e.types)?e.write.writer=function(t){return(e,n,r,i)=>e&&Array.isArray(e)?l(e.filter(e=>u(e,t,i)),n,r,i):l(e,n,r,i)}(e.types[0]):e.write.writer=function(t){return(e,n,r,i)=>e?u(e,t,i)?l(e,n,r,i):void 0:l(e,n,r,i)}(e.types):e.write.writer=l}function u(t,e,n){for(const n in e.typeMap)if(t instanceof e.typeMap[n])return!0
if(null!=n&&n.messages){var i,s
const o=null!=(i=e.errorContext)?i:"type",a=`Values of type '${null!=(s="function"!=typeof e.key?t[e.key]:t.declaredClass)?s:"Unknown"}' cannot be written`
n&&n.messages&&t&&n.messages.push(new r.a(o+":unsupported",a,{definition:t,context:n})),c.error(a)}return!1}function l(t,e,n,r){Object(s.c)(n,f(t,r),e)}function f(t,e){return t&&"function"==typeof t.write?t.write({},e):t&&"function"==typeof t.toJSON?t.toJSON():"number"==typeof t?h(t):t}function h(t){return t===-1/0?-Number.MAX_VALUE:t===1/0?Number.MAX_VALUE:isNaN(t)?null:t}function d(t,e,n,r){let i
null===t?i=null:t&&"function"==typeof t.map?(i=t.map(t=>f(t,r)),"function"==typeof i.toArray&&(i=i.toArray())):i=[f(t,r)],Object(s.c)(n,i,e)}},1645:function(t,e,n){"use strict"
function r(t,e){for(const n of t.entries())if(e(n[0]))return!0
return!1}n.d(e,"a",(function(){return r})),n(20)},1845:function(t,e,n){"use strict"
var r
n.d(e,"a",(function(){return r})),function(t){t[t.INITIALIZING=0]="INITIALIZING",t[t.CONSTRUCTING=1]="CONSTRUCTING",t[t.CONSTRUCTED=2]="CONSTRUCTED"}(r||(r={}))},2046:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var r=n(20),i=n(982)
class s extends i.a{constructor(){super(...arguments),this._set=new Set}destroy(){super.destroy(),this._set=Object(r.q)(this._set)}acquire(...t){const e=super.acquire(...t)
return this._set.delete(e),e}release(t){t&&!this._set.has(t)&&(super.release(t),this._set.add(t))}_dispose(t){this._set.delete(t),super._dispose(t)}}},2111:function(t,e,n){"use strict"
var r
n.d(e,"a",(function(){return r})),function(t){t[t.Dirty=1]="Dirty",t[t.Overriden=2]="Overriden",t[t.Computing=4]="Computing",t[t.NonNullable=8]="NonNullable",t[t.HasDefaultValue=16]="HasDefaultValue",t[t.DepTrackingInitialized=32]="DepTrackingInitialized",t[t.AutoTracked=64]="AutoTracked",t[t.ExplicitlyTracking=128]="ExplicitlyTracking"}(r||(r={}))},2112:function(t,e,n){"use strict"
var r
n.d(e,"a",(function(){return i})),function(t){const e=(t,e,n,r)=>{let i=e,s=e
const o=n>>>1,c=t[i-1]
for(;s<=o;){s=i<<1,s<n&&r(t[s-1],t[s])<0&&++s
const e=t[s-1]
if(r(e,c)<=0)break
t[i-1]=e,i=s}t[i-1]=c},n=(t,e)=>t<e?-1:t>e?1:0
t.sort=function(t,r,i,s){void 0===r&&(r=0),void 0===i&&(i=t.length),void 0===s&&(s=n)
for(let n=i>>>1;n>r;n--)e(t,n,i,s)
const o=r+1
for(let n=i-1;n>r;n--){const i=t[r]
t[r]=t[n],t[n]=i,e(t,o,n,s)}},t.iterableSort=function*(t,r,i,s){void 0===r&&(r=0),void 0===i&&(i=t.length),void 0===s&&(s=n)
for(let n=i>>>1;n>r;n--)e(t,n,i,s),yield
const o=r+1
for(let n=i-1;n>r;n--){const i=t[r]
t[r]=t[n],t[n]=i,e(t,o,n,s),yield}}}(r||(r={}))
const i=r},2214:function(t,e,n){"use strict"
function r(t){return!!t&&t.prototype&&t.prototype.declaredClass&&0===t.prototype.declaredClass.indexOf("esri.core.Collection")}n.d(e,"a",(function(){return r}))},856:function(t,e,n){"use strict"
function r(t,e,n,r){var i,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r)
else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o)
return s>3&&o&&Object.defineProperty(e,n,o),o}n.d(e,"a",(function(){return r}))},857:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n(77)
var r=n(1845),i=n(1181),s=n(1063),o=n(1165)
const c=new Set,a=new Set
function u(t){return e=>{e.prototype.declaredClass=t,f(e)
const n=[],r=[]
let s=e.prototype
for(;s;)s.hasOwnProperty("initialize")&&!c.has(s.initialize)&&(c.add(s.initialize),n.push(s.initialize)),s.hasOwnProperty("destroy")&&!a.has(s.destroy)&&(a.add(s.destroy),r.push(s.destroy)),s=Object.getPrototypeOf(s)
c.clear(),a.clear()
class o extends e{constructor(...t){if(super(...t),this.constructor===o&&"function"==typeof this.postscript){if(n.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let t=n.length-1;t>=0;t--)n[t].call(this)}}),r.length){let t=!1
Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!t){t=!0
for(let t=0;t<r.length;t++)r[t].call(this)}}})}this.postscript(...t)}}}return o.__accessorMetadata__=Object(i.a)(e.prototype),o.prototype.declaredClass=t,o}}function l(t,e){return null==e.get?function(){const e=this.__accessor__.properties.get(t)
if(void 0===e)return
Object(s.d)(e)
const n=this.__accessor__.store
return n.has(t)?n.get(t):e.metadata.value}:function(){const e=this.__accessor__.properties.get(t)
if(void 0!==e)return e.getComputed()}}function f(t){const e=t.prototype,n=Object(i.a)(e).properties,s={}
for(const t of Object.getOwnPropertyNames(n)){const e=n[t]
Object(o.d)(e),s[t]={enumerable:!0,configurable:!0,get:l(t,e),set(n){const i=this.__accessor__
if(void 0!==i){if(!Object.isFrozen(this)){if(i.initialized&&e.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${t}' of ${this.declaredClass}`)
if(i.lifecycle===r.a.CONSTRUCTED&&e.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${t}' of ${this.declaredClass}`)
i.set(t,n)}}else Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:n})}}}Object.defineProperties(t.prototype,s)}},858:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u}))
var r=n(177),i=n(859),s=n(1346),o=n(1181),c=n(962)
function a(t={}){return(e,n)=>{if(e===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${e.name}.${n}. Accessor does not support static properties.`)
const a=Object.getOwnPropertyDescriptor(e,n),u=Object(o.b)(e,n)
a&&(a.get||a.set?(u.get=a.get||u.get,u.set=a.set||u.set):"value"in a&&("value"in t&&r.a.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${n}" on "${e.constructor.name}" already defined in the metadata`,t),u.value=t.value=a.value)),null!=t.readOnly&&(u.readOnly=t.readOnly)
const f=t.aliasOf
if(f){const t="string"==typeof f?f:f.source,e="string"==typeof f?null:!0===f.overridable
let r
u.dependsOn=[t],u.get=function(){let e=Object(s.b)(this,t)
if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."))
const n=Object(s.b)(this,r)
n&&(e=e.bind(n))}return e},u.readOnly||(u.set=e?function(t){void 0!==t?this._override(n,t):this._clearOverride(n)}:function(e){Object(c.a)(this,t,e)})}const h=t.type,d=t.types
u.cast||(h?u.cast=function(t){let e=0,n=t
if(Object(i.n)(t))return Object(i.f)(t)
for(;Array.isArray(n)&&1===n.length&&"string"!=typeof n[0]&&"number"!=typeof n[0];)n=n[0],e++
const r=n
if(Object(i.o)(r))return 0===e?Object(i.j)(r):Object(i.h)(Object(i.j)(r),e)
if(1===e)return Object(i.b)(r)
if(e>1)return Object(i.g)(r,e)
const s=t
return s.from?s.from:Object(i.m)(s)}(h):d&&(Array.isArray(d)?u.cast=Object(i.c)(Object(i.k)(d[0])):u.cast=Object(i.k)(d))),t.range&&(u.cast=l(u.cast,t.range)),Object(o.c)(u,t)}}function u(t,e,n){const r=Object(o.b)(t,n)
r.json||(r.json={})
let i=r.json
return void 0!==e&&(i.origins||(i.origins={}),i.origins[e]||(i.origins[e]={}),i=i.origins[e]),i}function l(t,e){return n=>{let r=+t(n)
return null!=e.step&&(r=Math.round(r/e.step)*e.step),null!=e.min&&(r=Math.max(e.min,r)),null!=e.max&&(r=Math.min(e.max,r)),r}}},859:function(t,e,n){"use strict"
n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return D})),n.d(e,"g",(function(){return k})),n.d(e,"h",(function(){return A})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return E})),n.d(e,"k",(function(){return C})),n.d(e,"l",(function(){return a})),n.d(e,"m",(function(){return m})),n.d(e,"n",(function(){return N})),n.d(e,"o",(function(){return T})),n.d(e,"p",(function(){return I})),n(77)
var r=n(177),i=n(1109)
const s=r.a.getLogger("esri.core.Accessor")
function o(t){return null==t?t:new Date(t)}function c(t){return null==t?t:!!t}function a(t){return null==t?t:t.toString()}function u(t){return null==t?t:(t=parseFloat(t),isNaN(t)?0:t)}function l(t){return null==t?t:Math.round(parseFloat(t))}function f(t){return t&&t.constructor&&void 0!==t.constructor.__accessorMetadata__}function h(t,e){return null!=e&&t&&!(e instanceof t)}function d(t){return t&&"isCollection"in t}function p(t){return t&&t.Type?"function"==typeof t.Type?t.Type:t.Type.base:null}function y(t,e){return!!f(e)&&(s.error("Accessor#set","Assigning an instance of '"+(e.declaredClass||"unknown")+"' which is not a subclass of '"+_(t)+"'"),!0)}function g(t,e){return null==e?e:d(t)?function(t,e){if(!e||!e.constructor||!d(e.constructor))return y(t,e)?e:new t(e)
const n=p(t.prototype.itemType),r=p(e.constructor.prototype.itemType)
return n?r?n===r?e:n.prototype.isPrototypeOf(r.prototype)?new t(e):(y(t,e),e):new t(e):e}(t,e):h(t,e)?y(t,e)?e:new t(e):e}function _(t){return t&&t.prototype&&t.prototype.declaredClass||"unknown"}const b=new WeakMap
function v(t){switch(t){case Number:return u
case S:return l
case Boolean:return c
case String:return a
case Date:return o
default:return Object(i.b)(b,t,()=>g.bind(null,t))}}function m(t,e){const n=v(t)
return 1===arguments.length?n:n(e)}function O(t,e,n){return 1===arguments.length?O.bind(null,t):e?Array.isArray(e)?e.map(e=>t(e,n)):[t(e,n)]:e}function j(t,e){return 1===arguments.length?O(m.bind(null,t)):O(m.bind(null,t),e)}function w(t,e,n){return 0!==e&&Array.isArray(n)?n.map(n=>w(t,e-1,n)):t(n)}function A(t,e,n){if(2===arguments.length)return A.bind(null,t,e)
if(!n)return n
let r=e,i=n=w(t,e,n)
for(;r>0&&Array.isArray(i);)r--,i=i[0]
if(void 0!==i)for(let t=0;t<r;t++)n=[n]
return n}function k(t,e,n){return 2===arguments.length?A(m.bind(null,t),e):A(m.bind(null,t),e,n)}function T(t){return!!Array.isArray(t)&&!t.some(e=>{const n=typeof e
return!("string"===n||"number"===n||"function"===n&&t.length>1)})}function E(t,e){if(2===arguments.length)return E(t).call(null,e)
const n=new Set,r=t.filter(t=>"function"!=typeof t),i=t.filter(t=>"function"==typeof t)
for(const e of t)"string"!=typeof e&&"number"!=typeof e||n.add(e)
let o=null,c=null
return(t,e)=>{if(null==t)return t
const a=typeof t,u="string"===a||"number"===a
return u&&(n.has(t)||i.some(t=>"string"===a&&t===String||"number"===a&&t===Number))||"object"===a&&i.some(e=>!h(t,e))?t:(u&&r.length?(o||(o=r.map(t=>"string"==typeof t?`'${t}'`:""+t).join(", ")),s.error("Accessor#set",`'${t}' is not a valid value for this property, only the following values are valid: ${o}`)):"object"==typeof t&&i.length?(c||(c=i.map(t=>_(t)).join(", ")),s.error("Accessor#set",`'${t}' is not a valid value for this property, value must be one of ${c}`)):s.error("Accessor#set",`'${t}' is not a valid value for this property`),e&&(e.valid=!1),null)}}function C(t,e){if(2===arguments.length)return C(t).call(null,e)
const n={},r=[],i=[]
for(const e in t.typeMap){const s=t.typeMap[e]
n[e]=m(s),r.push(_(s)),i.push(e)}const o=()=>`'${r.join("', '")}'`,c=()=>`'${i.join("', '")}'`,a="string"==typeof t.key?e=>e[t.key]:t.key
return e=>{if(t.base&&!h(t.base,e))return e
if(null==e)return e
const r=a(e)||t.defaultKeyValue,i=n[r]
if(!i)return s.error("Accessor#set",`Invalid property value, value needs to be one of ${o()}, or a plain object that can autocast (having .type = ${c()})`),null
if(!h(t.typeMap[r],e))return e
if("string"==typeof t.key&&!f(e)){const n={}
for(const r in e)r!==t.key&&(n[r]=e[r])
return i(n)}return i(e)}}class S{}const I={native:t=>({type:"native",value:t}),array:t=>({type:"array",value:t}),oneOf:t=>({type:"one-of",values:t})}
function N(t){if(!t||!("type"in t))return!1
switch(t.type){case"native":case"array":case"one-of":return!0}return!1}function D(t){switch(t.type){case"native":return m(t.value)
case"array":return O(D(t.value))
case"one-of":return function(t){let e=null
return(n,r)=>function t(e,n){if(null==e)return!0
switch(n.type){case"native":switch(n.value){case Number:case S:return"number"==typeof e
case Boolean:return"boolean"==typeof e
case String:return"string"==typeof e}return e instanceof n.value
case"array":return!!Array.isArray(e)&&!e.some(e=>!t(e,n.value))
case"one-of":return n.values.some(n=>t(e,n))}}(n,t)?n:(null==e&&(e=function t(e){switch(e.type){case"native":switch(e.value){case Number:return"number"
case String:return"string"
case Boolean:return"boolean"
case S:return"integer"
case Date:return"date"
default:return _(e.value)}case"array":return"array of "+t(e.value)
case"one-of":{const n=e.values.map(e=>t(e))
return`one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return"unknown"}(t)),s.error("Accessor#set","Invalid property value, value needs to be of type "+e),r&&(r.valid=!1),null)}(t)
default:return null}}},862:function(t,e,n){"use strict"
n.d(e,"a",(function(){return E}))
var r=n(996),i=n(177),s=n(1346),o=n(1845),c=n(1181),a=(n(77),n(178)),u=n(982),l=n(913),f=n(1063),h=n(2111),d=n(1134)
class p{constructor(t,e,n){this.properties=t,this.propertyName=e,this.metadata=n,this._observers=null,this._accessed=null,this._handles=null,this.flags=h.a.Dirty|(n.nonNullable?h.a.NonNullable:0)|(n.hasOwnProperty("value")?h.a.HasDefaultValue:0)|(void 0===n.get?h.a.DepTrackingInitialized:0)|(void 0===n.dependsOn?h.a.AutoTracked:0)}destroy(){this._accessed=null,this._observers=null,this._clearObservationHandles()}getComputed(){Object(f.d)(this)
const t=this.properties.store,e=this.propertyName,n=this.flags,r=t.get(e)
if(n&h.a.Computing)return r
if(~n&h.a.Dirty&&t.has(e))return r
this.flags|=h.a.Computing
const i=this.properties.host
let s
n&h.a.AutoTracked?s=Object(f.b)(this,this.metadata.get,i):(Object(f.e)(i,this),s=this.metadata.get.call(i)),t.set(e,s,l.a.COMPUTED)
const o=t.get(e)
return o===r?this.flags&=~h.a.Dirty:Object(f.c)(this.commit,this),this.flags&=~h.a.Computing,o}onObservableAccessed(t){t!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(t)||this._accessed.push(t))}onTrackingEnd(){this._clearObservationHandles(),this.flags|=h.a.DepTrackingInitialized
const t=this._accessed
if(null===t)return
let e=this._handles
null===e&&(e=this._handles=[])
for(let n=0;n<t.length;++n)e.push(t[n].observe(this))
t.length=0}observe(t){return null===this._observers&&(this._observers=[]),this._observers.includes(t)||this._observers.push(t),new d.a(this._observers,t)}notifyChange(){this.onInvalidated(),this.onCommitted()}invalidate(){this.onInvalidated()}onInvalidated(){~this.flags&h.a.Overriden&&(this.flags|=h.a.Dirty)
const t=this._observers
if(null!==t)for(let e=0;e<t.length;++e)t[e].onInvalidated()}commit(){this.flags&=~h.a.Dirty,this.onCommitted()}onCommitted(){if(null===this._observers)return
const t=this._observers.slice()
for(let e=0;e<t.length;++e)t[e].onCommitted()}_clearObservationHandles(){const t=this._handles
if(null!==t){for(let e=0;e<t.length;++e)t[e].remove()
t.length=0}}}class y{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(t){const e=new y
return this._values.forEach((n,r)=>{t&&t.has(r)||e.set(r,Object(a.a)(n))}),e}get(t){return this._values.get(t)}originOf(){return l.a.USER}keys(){return[...this._values.keys()]}set(t,e){this._values.set(t,e)}delete(t){this._values.delete(t)}has(t){return this._values.has(t)}forEach(t){this._values.forEach(t)}}var g=n(920)
function _(t,e,n){return void 0!==t}function b(t,e,n,r){return!(void 0===t||null==n&&t.flags&h.a.NonNullable&&(r.lifecycle,o.a.INITIALIZING,1))}function v(t){return t&&"function"==typeof t.destroy}i.a.getLogger("esri.core.accessorSupport.Properties")
class m{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=o.a.INITIALIZING,this.store=new y,this._origin=l.a.USER
const e=this.host.constructor.__accessorMetadata__,n=e.properties
for(const t in n){const e=new p(this,t,n[t])
this.properties.set(t,e)}this.metadatas=n,this._autoDestroy=e.autoDestroy}initialize(){this.lifecycle=o.a.CONSTRUCTING}constructed(){this.lifecycle=o.a.CONSTRUCTED}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const n=this.internalGet(t)
n&&v(n)&&(n.destroy(),~e.flags&h.a.NonNullable&&this._internalSet(e,null)),e.destroy()}else for(const[t,e]of this.properties)e.destroy()}get initialized(){return this.lifecycle!==o.a.INITIALIZING}get(t){const e=this.properties.get(t)
if(e.metadata.get)return e.getComputed()
Object(f.d)(e)
const n=this.store
return n.has(t)?n.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t)
if(void 0===e){const e=this.properties.get(t)
if(void 0!==e&&e.flags&h.a.HasDefaultValue)return"defaults"}return Object(l.c)(e)}has(t){return!!this.properties.has(t)&&this.store.has(t)}keys(){return[...this.properties.keys()]}internalGet(t){const e=this.properties.get(t)
if(_(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const n=this.properties.get(t)
_(n)&&this._internalSet(n,e)}getDependsInfo(t,e,n){const r=this.properties.get(e)
if(!_(r))return""
const i=new Set,s=Object(f.b)({onObservableAccessed:t=>i.add(t),onTrackingEnd:()=>{}},()=>{var e
return null==(e=r.metadata.get)?void 0:e.call(t)})
let o=`${n}${t.declaredClass.split(".").pop()}.${e}: ${s}\n`
if(0===i.size)return o
n+="  "
for(const t of i){if(!(t instanceof p))continue
const e=t.properties.host,r=t.propertyName,i=Object(g.a)(e)
o+=i?i.getDependsInfo(e,r,n):`${n}${r}: undefined\n`}return o}setAtOrigin(t,e,n){const r=this.properties.get(t)
if(_(r))return this._setAtOrigin(r,e,n)}isOverridden(t){const e=this.properties.get(t)
return void 0!==e&&!!(e.flags&h.a.Overriden)}clearOverride(t){const e=this.properties.get(t)
void 0!==e&&e.flags&h.a.Overriden&&(e.flags&=~h.a.Overriden,e.notifyChange())}override(t,e){const n=this.properties.get(t)
if(!b(n,0,e,this))return
const r=n.metadata.cast
if(r){const t=this._cast(r,e),{valid:n,value:i}=t
if(O.release(t),!n)return
e=i}n.flags|=h.a.Overriden,this._internalSet(n,e)}set(t,e){const n=this.properties.get(t)
if(!b(n,0,e,this))return
const r=n.metadata.cast
if(r){const t=this._cast(r,e),{valid:n,value:i}=t
if(O.release(t),!n)return
e=i}const i=n.metadata.set
i?i.call(this.host,e):this._internalSet(n,e)}setDefaultOrigin(t){this._origin=Object(l.e)(t)}getDefaultOrigin(){return Object(l.c)(this._origin)}notifyChange(t){const e=this.properties.get(t)
void 0!==e&&e.notifyChange()}invalidate(t){const e=this.properties.get(t)
void 0!==e&&e.invalidate()}commit(t){const e=this.properties.get(t)
void 0!==e&&e.commit()}_internalSet(t,e){const n=this.lifecycle!==o.a.INITIALIZING?this._origin:l.a.DEFAULTS
this._setAtOrigin(t,e,n)}_setAtOrigin(t,e,n){const r=this.store,i=t.propertyName
r.has(i,n)&&Object(a.b)(e,r.get(i))&&~t.flags&h.a.Overriden&&n===r.originOf(i)||(t.invalidate(),r.set(i,e,n),t.commit(),Object(f.a)(this.host,t))}_cast(t,e){const n=O.acquire()
return n.valid=!0,n.value=e,t&&(n.value=t.call(this.host,e,n)),n}}const O=new u.a(class{constructor(){this.value=null,this.valid=!0}acquire(){this.valid=!0}release(){this.value=null}})
var j=n(962),w=n(1007),A=n(858),k=n(857)
function T(t){if(null==t)return{value:t}
if(Array.isArray(t))return{type:[t[0]],value:null}
switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t
case"boolean":return{type:Boolean,value:t}
case"string":return{type:String,value:t}
case"number":return{type:Number,value:t}
case"function":return{type:t,value:null}
default:return}}class E{constructor(...t){if(this.constructor===E)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor")
Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new m(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t))}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16")
const{properties:e,declaredClass:n,constructor:r}=t
delete t.declaredClass,delete t.properties,delete t.constructor
const i=this
class s extends i{constructor(...t){super(...t),this.inherited=null,r&&r.apply(this,t)}}Object(c.a)(s.prototype)
for(const e in t){const n=t[e]
s.prototype[e]="function"==typeof n?function(...t){const r=this.inherited
let s
this.inherited=function(...t){if(i.prototype[e])return i.prototype[e].apply(this,t)}
try{s=n.apply(this,t)}catch(t){throw this.inherited=r,t}return this.inherited=r,s}:t[e]}for(const t in e){const n=T(e[t])
Object(A.b)(n)(s.prototype,t)}return Object(k.a)(n)(s)}postscript(t){const e=this.__accessor__,n=e.ctorArgs||t
e.initialize(),n&&(this.set(n),e.ctorArgs=null),e.constructed(),this.initialize()}initialize(){}destroy(){this.destroyed||(Object(w.c)(this),this.__accessor__.destroy())}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&this.__accessor__.lifecycle===o.a.CONSTRUCTED||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t)}get(t){return Object(s.b)(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}isInstanceOf(t){return Object(r.b)(i.a.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof t}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,e){return Object(j.a)(this,t,e),this}watch(t,e,n){return Object(w.d)(this,t,e,n)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,e){return this.__accessor__.override(t,e)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t)}_get(t){return this.__accessor__.internalGet(t)}_set(t,e){return this.__accessor__.internalSet(t,e),this}}},913:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c}))
var r,i,s=n(20);(i=r||(r={}))[i.DEFAULTS=0]="DEFAULTS",i[i.COMPUTED=1]="COMPUTED",i[i.SERVICE=2]="SERVICE",i[i.PORTAL_ITEM=3]="PORTAL_ITEM",i[i.WEB_SCENE=4]="WEB_SCENE",i[i.WEB_MAP=5]="WEB_MAP",i[i.USER=6]="USER"
const o=r.USER+1
function c(t){switch(t){case"defaults":return r.DEFAULTS
case"service":return r.SERVICE
case"portal-item":return r.PORTAL_ITEM
case"web-scene":return r.WEB_SCENE
case"web-map":return r.WEB_MAP
case"user":return r.USER}}function a(t){switch(t){case r.DEFAULTS:return"defaults"
case r.SERVICE:return"service"
case r.PORTAL_ITEM:return"portal-item"
case r.WEB_SCENE:return"web-scene"
case r.WEB_MAP:return"web-map"
case r.USER:return"user"}return Object(s.c)(void 0)}function u(t){return a(t)}},920:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return u}))
var r=n(923),i=n(178),s=n(20)
function o(t){return t?t.__accessor__?t.__accessor__:t.propertyInvalidated?t:null:null}function c(t,e){return null!=t&&t.metadatas&&null!=t.metadatas[e]}function a(t,e,n){return function t(e,n,r){return n?Object.keys(n).reduce((function(e,o){let c=null,a="merge"
if(r&&(c=r.path?`${r.path}.${o}`:o,a=r.policy(c)),"replace"===a)return e[o]=n[o],e
if(void 0===e[o])return e[o]=Object(i.a)(n[o]),e
let u=e[o],l=n[o]
if(u===l)return e
if(Array.isArray(l)||Array.isArray(e))u=u?Array.isArray(u)?e[o]=u.concat():e[o]=[u]:e[o]=[],l&&(Array.isArray(l)||(l=[l]),l.forEach(t=>{-1===u.indexOf(t)&&u.push(t)}))
else if(l&&"object"==typeof l)if(r){const n=r.path
r.path=Object(s.c)(c),e[o]=t(u,l,r),r.path=n}else e[o]=t(u,l,null)
else e.hasOwnProperty(o)&&!n.hasOwnProperty(o)||(e[o]=l)
return e}),e||{}):e}(t,e,n?{policy:n,path:""}:null)}function u(t){return Array.isArray(t)?t:t.split(".")}function l(t){return t.indexOf(",")>-1?t.split(",").map(t=>t.trim()):[t.trim()]}function f(t,e,n,i){const s=function(t){if(Array.isArray(t)){const e=[]
for(const n of t)e.push(...l(n))
return e}return l(t)}(e)
if(1!==s.length){const e=s.map(e=>i(t,e,n))
return Object(r.b)(e)}return i(t,s[0],n)}function h(t){let e=!1
return()=>{e||(e=!0,t())}}},923:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a}))
var r=n(20)
function i(t){return s(()=>t.forEach(t=>Object(r.k)(t)&&t.remove()))}function s(t){return{remove:()=>{t&&(t(),t=void 0)}}}function o(t){return s(()=>{const e=t()
Object(r.k)(e)&&e.remove()})}function c(t){return s(Object(r.k)(t)?()=>t.destroy():void 0)}function a(t,e){const n=setTimeout(t,e)
return s(()=>clearTimeout(n))}},948:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return E}))
var r=n(20),i=n(1199),s=n(1501),o=n(961),c=n(861),a=n(1128)
class u{constructor(t){this.phases=t,this.paused=!1,this.ticks=-1,this.removed=!1}}class l{constructor(t){this.callback=t,this.isActive=!0}remove(){this.isActive=!1}}let f=0,h=0
const d={time:Object(a.a)(0),deltaTime:Object(a.a)(0),elapsedFrameTime:Object(a.a)(0),frameDuration:Object(a.a)(0)},p=["prepare","preRender","render","postRender","update","finish"],y=[],g=new o.a
class _{constructor(t){this._task=t}remove(){this._task.removed=!0}pause(){this._task.paused=!0}resume(){this._task.paused=!1}}const b={frameTasks:g,willDispatch:!1,clearFrameTasks:function(t=!1){g.forAll(t=>{t.removed=!0}),t&&k()},dispatch:T,executeFrameTasks:function(t){const e=Object(a.a)(t-f)
f=t
const n=h>0?h:1e3/60,r=Math.max(0,e-n)
for(let i=0;i<p.length;i++){const s=performance.now(),o=p[i]
g.forAll(s=>{var c
s.paused||s.removed||(0===i&&s.ticks++,s.phases[o]&&(d.time=t,d.deltaTime=0===s.ticks?Object(a.a)(0):e,d.elapsedFrameTime=Object(a.a)(performance.now()-t),d.frameDuration=Object(a.a)(n-r),null==(c=s.phases[o])||c.call(s,d)))}),C[i].record(performance.now()-s)}k(),S.record(performance.now()-t)}}
function v(t){const e=new l(t)
return y.push(e),b.willDispatch||(b.willDispatch=!0,Object(i.a)(T)),e}function m(t){const e=new u(t)
return g.push(e),null==O&&(f=performance.now(),O=requestAnimationFrame(w)),new _(e)}let O=null
function j(t){h=Math.max(0,t)}function w(){const t=performance.now()
O=null,O=g.length>0?requestAnimationFrame(w):null,b.executeFrameTasks(t)}const A=new o.a
function k(){g.forAll(t=>{t.removed&&A.push(t)}),g.removeUnorderedMany(A.data,A.length),A.clear()}function T(){for(;y.length;){const t=Object(r.c)(y.shift())
t.isActive&&t.callback()}b.willDispatch=!1}function E(t=1,e){const n=Object(c.g)(),r=()=>{Object(c.n)(e)?n.reject(Object(c.e)()):0===t?n():(--t,Object(i.a)(()=>r()))}
return r(),n.promise}const C=p.map(t=>new s.a(t)),S=new s.a("total")},958:function(t,e,n){"use strict"
n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a}))
var r=n(1063),i=n(1558)
let s=!1
const o=[]
function c(t,e){let n=new i.a((function i(){if(!n||c)return
if(s)return void l(i)
const a=o
n.clear(),s=!0,c=!0,o=Object(r.b)(n,t),c=!1,s=!1,e(o,a),f()})),o=null,c=!1
return c=!0,o=Object(r.b)(n,t),c=!1,{remove:function(){n&&(n.destroy(),n=null,o=null)}}}function a(t,e){let n=new i.a((function(){e(s,o)})),s=null
function o(){return n?(n.clear(),s=Object(r.b)(n,t),s):null}return o(),{remove:function(){n&&(n.destroy(),n=null),s=null}}}function u(t){let e=new i.a((function i(){e&&!n&&(s?l(i):(e.clear(),s=!0,n=!0,Object(r.b)(e,t),n=!1,s=!1,f()))})),n=!1
return n=!0,Object(r.b)(e,t),n=!1,{remove:function(){e&&(e.destroy(),e=null)}}}function l(t){o.includes(t)||o.unshift(t)}function f(){for(;o.length;)o.pop()()}},961:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var r=n(353),i=n(2112)
class s{constructor(t){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new r.a,t&&(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator&&(this._allocator=t.allocator),void 0!==t.deallocator&&(this._deallocator=t.deallocator),t.shrink&&(this._shrink=()=>o(this)))}toArray(){return this.data.slice(0,this.length)}filter(t){const e=new Array
for(let n=0;n<this._length;n++){const r=this.data[n]
t(r)&&e.push(r)}return e}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length])
return}this._length=t}else{if(this._deallocator)for(let e=t;e<this._length;++e)this.data[e]=this._deallocator(this.data[e])
this._length=t,this._shrink()}}clear(){this.length=0}prune(){this.clear(),this.data=[]}push(t){this.data[this._length++]=t}pushArray(t,e=t.length){for(let n=0;n<e;n++)this.data[this._length++]=t[n]}fill(t,e){for(let n=0;n<e;n++)this.data[this._length++]=t}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]))
const t=this.data[this._length]
return++this._length,t}unshift(t){this.data.unshift(t),this._length++,o(this)}pop(){if(0===this.length)return
const t=this.data[this.length-1]
return this.length=this.length-1,this._shrink(),t}remove(t){const e=Object(r.g)(this.data,t,this.length,this._hint)
if(-1!==e)return this.data.splice(e,1),this.length=this.length-1,t}removeUnordered(t){const e=Object(r.l)(this.data,t,this.length,this._hint)
return void 0!==e&&(this.length=this.length-1),this._shrink(),e}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,e=t.length,n){this.length=Object(r.m)(this.data,t,this.length,e,this._hint,n),this._shrink()}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,e){t>=this.length||e>=this.length||t===e||([this.data[t],this.data[e]]=[this.data[e],this.data[t]])}sort(t){i.a.sort(this.data,0,this.length,t)}iterableSort(t){return i.a.iterableSort(this.data,0,this.length,t)}some(t,e){for(let n=0;n<this.length;++n)if(t.call(e,this.data[n],n,this.data))return!0
return!1}filterInPlace(t,e){let n=0
for(let r=0;r<this._length;++r){const i=this.data[r]
t.call(e,i,r,this.data)&&(this.data[r]=this.data[n],this.data[n]=i,n++)}if(this._deallocator)for(let t=n;t<this._length;t++)this.data[t]=this._deallocator(this.data[t])
return this._length=n,this._shrink(),this}forAll(t,e){const n=this.length,r=this.data
for(let i=0;i<n;++i)t.call(e,r[i],i,r)}forEach(t,e){for(let n=0;n<this.length;++n)t.call(e,this.data[n],n,this.data)}map(t,e){const n=new Array(this.length)
for(let r=0;r<this.length;++r)n[r]=t.call(e,this.data[r],r,this.data)
return n}reduce(t,e){let n=e
for(let e=0;e<this.length;++e)n=t(n,this.data[e],e,this.data)
return n}has(t){const e=this.length,n=this.data
for(let r=0;r<e;++r)if(n[r]===t)return!0
return!1}}function o(t){t.data.length>1.5*t.length&&(t.data.length=Math.floor(1.1*t.length))}},962:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c}))
var r=n(354),i=n(77),s=n(177),o=n(1346)
function c(t,e,n){if(t&&e)if("object"==typeof e)for(const n of Object.getOwnPropertyNames(e))c(t,n,e[n])
else{if(-1!==e.indexOf(".")){const r=e.split("."),i=r.splice(r.length-1,1)[0]
return void c(Object(o.b)(t,r),i,n)}const r=t.__accessor__
null!=r&&a(e,r),t[e]=n}}function a(t,e){if(Object(i.a)("esri-unknown-property-errors")&&(n=t,null==e.metadatas[n]))throw new r.a("set:unknown-property",function(t,e){return"setting unknown property '"+t+"' on instance of "+e.host.declaredClass}(t,e))
var n}s.a.getLogger("esri.core.accessorSupport.set")},970:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var r=n(498)
class i extends r.a{constructor(t,e,n){if(super(t,e,n),!(this instanceof i))return new i(t,e,n)}}i.prototype.type="warning"},982:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r}))
class r{constructor(t,e,n,r=1,i=0){if(this.ctor=t,this.acquireFunction=e,this.releaseFunction=n,this.allocationSize=r,this._pool=new Array(i),this._initialSize=i,this.ctor)for(let t=0;t<i;t++)this._pool[t]=new this.ctor
this.allocationSize=Math.max(r,1)}destroy(){this.prune(0)}acquire(...t){let e
if(r.test.disabled)e=new this.ctor
else{if(0===this._pool.length){const t=this.allocationSize
for(let e=0;e<t;e++)this._pool[e]=new this.ctor}e=this._pool.pop()}return this.acquireFunction?this.acquireFunction(e,...t):function(t){return t&&t.acquire&&"function"==typeof t.acquire}(e)&&e.acquire(...t),e}release(t){t&&!r.test.disabled&&(this.releaseFunction?this.releaseFunction(t):function(t){return t&&t.release&&"function"==typeof t.release}(t)&&t.release(),this._pool.push(t))}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let e=t;e<this._pool.length;++e){const t=this._pool[e]
this._dispose(t)}this._pool.length=t}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()}}r.test={disabled:!1}},996:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c}))
var r=n(77)
const i=new Set
function s(t,e,n=!1){n&&i.has(e)||(n&&i.add(e),t.warn("🛑 DEPRECATED - "+e))}function o(t,e,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
a(t,"Function: "+(r?r+"::":"")+e+"()",n)}}function c(t,e,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{moduleName:r}=n
a(t,"Property: "+(r?r+"::":"")+e,n)}}function a(t,e,n={}){if(Object(r.a)("esri-deprecation-warnings")){const{replacement:r,version:i,see:o,warnOnce:c}=n
let a=e
r&&(a+="\n\t🛠️ Replacement: "+r),i&&(a+="\n\t⚙️ Version: "+i),o&&(a+=`\n\t🔗 See ${o} for more details.`),s(t,a,c)}}}}])
