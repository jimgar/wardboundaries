(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[318,376,377,378],{1514:function(n,t){},1637:function(n,t){},1703:function(n,t,e){"use strict"
e.r(t),function(n,r){e.d(t,"l",(function(){return c}))
var o,i,a,u={exports:{}}
o=u,i=function(){return{load:function(t){const i=t.locateFile,a={}
var u=void 0!==u?u:{}
const f=(()=>{let n
return{resolve:t=>n(t),promise:new Promise(t=>n=t)}})()
u.locateFile=i,u.onRuntimeInitialized=()=>{f.resolve(a)},a.Module=u,a.whenLoaded=()=>f.promise
var c,s={}
for(c in u)u.hasOwnProperty(c)&&(s[c]=u[c])
var l,p,m,h,d,y="object"==typeof window,g="function"==typeof importScripts,v="object"==typeof n&&"object"==typeof n.versions&&"string"==typeof n.versions.node,w=""
v?(w=g?e(1514).dirname(w)+"/":r+"/",l=function(n,t){return h||(h=e(1637)),d||(d=e(1514)),n=d.normalize(n),h.readFileSync(n,t?null:"utf8")},m=function(n){var t=l(n,!0)
return t.buffer||(t=new Uint8Array(t)),function(n,t){n||D("Assertion failed: "+void 0)}(t.buffer),t},p=function(n,t,r){h||(h=e(1637)),d||(d=e(1514)),n=d.normalize(n),h.readFile(n,(function(n,e){n?r(n):t(e.buffer)}))},n.argv.length>1&&n.argv[1].replace(/\\/g,"/"),n.argv.slice(2),o.exports=u,n.on("uncaughtException",(function(n){if(!(n instanceof nn))throw n})),n.on("unhandledRejection",D),u.inspect=function(){return"[Emscripten Module object]"}):(y||g)&&(g?w=self.location.href:"undefined"!=typeof document&&document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",l=function(n){var t=new XMLHttpRequest
return t.open("GET",n,!1),t.send(null),t.responseText},g&&(m=function(n){var t=new XMLHttpRequest
return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),p=function(n,t,e){var r=new XMLHttpRequest
r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)})
var b=u.print||console.log.bind(console),_=u.printErr||console.warn.bind(console)
for(c in s)s.hasOwnProperty(c)&&(u[c]=s[c])
s=null,u.arguments,u.thisProgram,u.quit
var A,E,R=0
u.wasmBinary&&(A=u.wasmBinary),u.noExitRuntime,"object"!=typeof WebAssembly&&D("no native wasm support detected")
var P,S,j,I,T=!1,x="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0
function H(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o
if(o-t>16&&n.subarray&&x)return x.decode(n.subarray(t,o))
for(var i="";t<o;){var a=n[t++]
if(128&a){var u=63&n[t++]
if(192!=(224&a)){var f=63&n[t++]
if((a=224==(240&a)?(15&a)<<12|u<<6|f:(7&a)<<18|u<<12|f<<6|63&n[t++])<65536)i+=String.fromCharCode(a)
else{var c=a-65536
i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function M(n,t){return n%t>0&&(n+=t-n%t),n}function F(n){P=n,u.HEAP8=new Int8Array(n),u.HEAP16=new Int16Array(n),u.HEAP32=j=new Int32Array(n),u.HEAPU8=S=new Uint8Array(n),u.HEAPU16=new Uint16Array(n),u.HEAPU32=new Uint32Array(n),u.HEAPF32=new Float32Array(n),u.HEAPF64=new Float64Array(n)}u.INITIAL_MEMORY
var C=[],O=[],W=[]
function k(n){C.unshift(n)}function U(n){W.unshift(n)}var L,z=0,B=null
function D(n){throw u.onAbort&&u.onAbort(n),_(n+=""),T=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}function q(n){return n.startsWith("data:application/octet-stream;base64,")}function N(n){return n.startsWith("file://")}function G(n){try{if(n==L&&A)return new Uint8Array(A)
if(m)return m(n)
throw"both async and sync fetching of the wasm failed"}catch(n){D(n)}}function X(n){for(;n.length>0;){var t=n.shift()
if("function"!=typeof t){var e=t.func
"number"==typeof e?void 0===t.arg?I.get(e)():I.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(u)}}function Y(n){try{return E.grow(n-P.byteLength+65535>>>16),F(E.buffer),1}catch(n){}}u.preloadedImages={},u.preloadedAudios={},q(L="libtess.wasm")||(L=function(n){return u.locateFile?u.locateFile(n,w):w+n}(L))
var J={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=J.buffers[n]
0===t||10===t?((1===n?b:_)(H(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return J.varargs+=4,j[J.varargs-4>>2]},getStr:function(n){return function(n,t){return n?H(S,n,void 0):""}(n)},get64:function(n,t){return n}},K={h:function(){throw"longjmp"},l:function(n,t,e){S.copyWithin(n,t,t+e)},g:function(n){var t=S.length,e=2147483648
if((n>>>=0)>e)return!1
for(var r=1;r<=4;r*=2){var o=t*(1+.2/r)
if(o=Math.min(o,n+100663296),Y(Math.min(e,M(Math.max(n,o),65536))))return!0}return!1},f:function(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var a=j[t+8*i>>2],u=j[t+(8*i+4)>>2],f=0;f<u;f++)J.printChar(n,S[a+f])
o+=u}return j[r>>2]=o,0},b:function(){return R},k:function(n){var t=V()
try{return I.get(n)()}catch(n){if(Z(t),n!==n+0&&"longjmp"!==n)throw n
$(1,0)}},d:function(n,t){var e=V()
try{return I.get(n)(t)}catch(n){if(Z(e),n!==n+0&&"longjmp"!==n)throw n
$(1,0)}},j:function(n,t,e){var r=V()
try{return I.get(n)(t,e)}catch(n){if(Z(r),n!==n+0&&"longjmp"!==n)throw n
$(1,0)}},i:function(n,t,e,r){var o=V()
try{return I.get(n)(t,e,r)}catch(n){if(Z(o),n!==n+0&&"longjmp"!==n)throw n
$(1,0)}},e:function(n,t){var e=V()
try{I.get(n)(t)}catch(n){if(Z(e),n!==n+0&&"longjmp"!==n)throw n
$(1,0)}},c:function(n,t,e){var r=V()
try{I.get(n)(t,e)}catch(n){if(Z(r),n!==n+0&&"longjmp"!==n)throw n
$(1,0)}},a:function(n){!function(n){R=n}(n)}};(function(){var n={a:K}
function t(n,t){var e=n.exports
u.asm=e,F((E=u.asm.m).buffer),I=u.asm.q,function(n){O.unshift(n)}(u.asm.n),function(n){if(z--,u.monitorRunDependencies&&u.monitorRunDependencies(z),0==z&&B){var t=B
B=null,t()}}()}function e(n){t(n.instance)}function r(t){return function(){if(!A&&(y||g)){if("function"==typeof fetch&&!N(L))return fetch(L,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+L+"'"
return n.arrayBuffer()})).catch((function(){return G(L)}))
if(p)return new Promise((function(n,t){p(L,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return G(L)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){_("failed to asynchronously prepare wasm: "+n),D(n)}))}if(z++,u.monitorRunDependencies&&u.monitorRunDependencies(z),u.instantiateWasm)try{return u.instantiateWasm(n,t)}catch(n){return _("Module.instantiateWasm callback failed with error: "+n),!1}A||"function"!=typeof WebAssembly.instantiateStreaming||q(L)||N(L)||"function"!=typeof fetch?r(e):fetch(L,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return _("wasm streaming compile failed: "+n),_("falling back to ArrayBuffer instantiation"),r(e)}))}))})(),u.___wasm_call_ctors=function(){return(u.___wasm_call_ctors=u.asm.n).apply(null,arguments)},u._malloc=function(){return(u._malloc=u.asm.o).apply(null,arguments)},u._free=function(){return(u._free=u.asm.p).apply(null,arguments)},u._triangulate=function(){return(u._triangulate=u.asm.r).apply(null,arguments)}
var Q,V=u.stackSave=function(){return(V=u.stackSave=u.asm.s).apply(null,arguments)},Z=u.stackRestore=function(){return(Z=u.stackRestore=u.asm.t).apply(null,arguments)},$=u._setThrew=function(){return($=u._setThrew=u.asm.u).apply(null,arguments)}
function nn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function tn(n){function t(){Q||(Q=!0,u.calledRun=!0,T||(X(O),u.onRuntimeInitialized&&u.onRuntimeInitialized(),function(){if(u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;)U(u.postRun.shift())
X(W)}()))}z>0||(function(){if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)k(u.preRun.shift())
X(C)}(),z>0||(u.setStatus?(u.setStatus("Running..."),setTimeout((function(){setTimeout((function(){u.setStatus("")}),1),t()}),1)):t()))}if(B=function n(){Q||tn(),Q||(B=n)},u.run=tn,u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()()
tn()
let en=null,rn=null,on=null,an=null
const un=a.Module
let fn=0
return a.triangulate=(n,t,e)=>{en||(en=un._triangulate)
let r=un.HEAPF32
const o=un.HEAP32.BYTES_PER_ELEMENT,i=r.BYTES_PER_ELEMENT
e>fn&&(fn=e,on&&(un._free(on),on=0),rn&&(un._free(rn),rn=0)),on||(on=un._malloc(e*i)),an||(an=un._malloc(1e3*o)),rn||(rn=un._malloc(e*i)),r=un.HEAPF32,r.set(n,on/i),un.HEAP32.set(t,an/o)
const a=en(on,an,t.length,2,rn),u=2*a
r=un.HEAPF32
const f=r.slice(rn/i,rn/i+u),c={}
return c.buffer=f,c.vertexCount=a,c},a.whenLoaded()}}},void 0!==(a=i())&&(o.exports=a)
const f=u.exports,c=Object.freeze(function(n,t){for(var e=0;e<t.length;e++){const r=t[e]
if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t)
e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(n)}({__proto__:null,default:f},[u.exports]))}.call(this,e(183),"/")}}])
