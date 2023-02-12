(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[68],{1045:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var s=r(913)
function i(e,t,r){t.keys().forEach(e=>{r.set(e,t.get(e),s.a.DEFAULTS)})
const i=e.metadatas
Object.keys(i).forEach(t=>{e.internalGet(t)&&r.set(t,e.internalGet(t),s.a.DEFAULTS)})}},1452:function(e,t,r){"use strict"
function s(e){return e&&"function"==typeof e.render}function i(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r(1129),r(1030),r(996),r(77),r(177),r(1269),r(945),r(899),r(1081)},669:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",(function(){return me}))
var s=r(148),i=r(856),n=r(78),o=r(660),a=r(354),c=r(890),l=r(932),u=r(178),h=r(109),d=r(861),p=r(292),f=r(858),v=(r(859),r(857)),g=(r(353),r(77),r(981)),_=r(994),b=r(899),m=r(1030),O=(r(177),r(945))
const w="esri-identity-form__group",y="esri-identity-form__label",S="esri-input",I="esri-button"
let j=class extends _.a{constructor(e,t){super(e,t),this._usernameInputNode=null,this._passwordInputNode=null,this.messages=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1}render(){const{error:e,server:t,resource:r,signingIn:s,oAuthPrompt:i,messages:n}=this,o=Object(O.a)("div",{class:w},Object(g.a)(i?n.oAuthInfo:n.info,{server:/\.arcgis\.com/i.test(t)?"ArcGIS Online":t,resource:`(${r||n.lblItem})`})),a=i?null:Object(O.a)("div",{class:w,key:"username"},Object(O.a)("label",{class:y},n.lblUser,Object(O.a)("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:b.i,"data-node-ref":"_usernameInputNode",class:S}))),c=i?null:Object(O.a)("div",{class:w,key:"password"},Object(O.a)("label",{class:y},n.lblPwd,Object(O.a)("input",{value:"",required:!0,type:"password",bind:this,afterCreate:b.i,"data-node-ref":"_passwordInputNode",class:S}))),l=Object(O.a)("div",{class:this.classes(w,"esri-identity-form__footer")},Object(O.a)("input",{type:"submit",disabled:!!s,value:s?n.lblSigning:n.lblOk,class:I}),Object(O.a)("input",{type:"button",value:n.lblCancel,bind:this,onclick:this._cancel,class:this.classes(I,"esri-button--secondary")})),u=e?Object(O.a)("div",null,e.details&&e.details.httpStatus?n.invalidUser:n.noAuthService):null
return Object(O.a)("form",{class:"esri-identity-form",bind:this,onsubmit:this._submit},o,u,a,c,l)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(e){e.preventDefault(),this._set("signingIn",!0)
const t=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value}
this.emit("submit",t)}}
Object(i.a)([Object(f.b)(),Object(m.a)("esri/identity/t9n/identity")],j.prototype,"messages",void 0),Object(i.a)([Object(f.b)()],j.prototype,"signingIn",void 0),Object(i.a)([Object(f.b)()],j.prototype,"server",void 0),Object(i.a)([Object(f.b)()],j.prototype,"resource",void 0),Object(i.a)([Object(f.b)()],j.prototype,"error",void 0),Object(i.a)([Object(f.b)()],j.prototype,"oAuthPrompt",void 0),j=Object(i.a)([Object(v.a)("esri.identity.IdentityForm")],j)
const k=j
var A=r(923),T=r(1452),U=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],x=U.join(","),P="undefined"==typeof Element,R=P?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,C=!P&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},D=function(e,t,r){var s=Array.prototype.slice.apply(e.querySelectorAll(x))
return t&&R.call(e,x)&&s.unshift(e),s.filter(r)},N=function e(t,r,s){for(var i=[],n=Array.from(t);n.length;){var o=n.shift()
if("SLOT"===o.tagName){var a=o.assignedElements(),c=e(a.length?a:o.children,!0,s)
s.flatten?i.push.apply(i,c):i.push({scope:o,candidates:c})}else{R.call(o,x)&&s.filter(o)&&(r||!t.includes(o))&&i.push(o)
var l=o.shadowRoot||"function"==typeof s.getShadowRoot&&s.getShadowRoot(o),u=!s.shadowRootFilter||s.shadowRootFilter(o)
if(l&&u){var h=e(!0===l?o.children:l.children,!0,s)
s.flatten?i.push.apply(i,h):i.push({scope:o,candidates:h})}else n.unshift.apply(n,o.children)}}return i},E=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},q=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},F=function(e){return"INPUT"===e.tagName},L=function(e){var t=e.getBoundingClientRect(),r=t.width,s=t.height
return 0===r&&0===s},V=function(e,t){return!(t.disabled||function(e){return F(e)&&"hidden"===e.type}(t)||function(e,t){var r=t.displayCheck,s=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var i=R.call(e,"details>summary:first-of-type")?e.parentElement:e
if(R.call(i,"details:not([open]) *"))return!0
var n=C(e).host,o=(null==n?void 0:n.ownerDocument.contains(n))||e.ownerDocument.contains(e)
if(r&&"full"!==r){if("non-zero-area"===r)return L(e)}else{if("function"==typeof s){for(var a=e;e;){var c=e.parentElement,l=C(e)
if(c&&!c.shadowRoot&&!0===s(c))return L(e)
e=e.assignedSlot?e.assignedSlot:c||l===e.ownerDocument?c:l.host}e=a}if(o)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var s=t.children.item(r)
if("LEGEND"===s.tagName)return!!R.call(t,"fieldset[disabled] *")||!s.contains(e)}return!0}t=t.parentElement}return!1}(t))},M=function(e,t){return!(function(e){return function(e){return F(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,r=e.form||C(e),s=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=s(window.CSS.escape(e.name))
else try{t=s(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form)
return!i||i===e}(e)}(t)||E(t)<0||!V(e,t))},z=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},G=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==R.call(e,x)&&M(t,e)},B=U.concat("iframe").join(","),J=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==R.call(e,B)&&V(t,e)}
function H(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e)
t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var W,Y=(W=[],{activateTrap:function(e){if(W.length>0){var t=W[W.length-1]
t!==e&&t.pause()}var r=W.indexOf(e);-1===r||W.splice(r,1),W.push(e)},deactivateTrap:function(e){var t=W.indexOf(e);-1!==t&&W.splice(t,1),W.length>0&&W[W.length-1].unpause()}}),K=function(e){return setTimeout(e,0)},X=function(e,t){var r=-1
return e.every((function(e,s){return!t(e)||(r=s,!1)})),r},Q=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s]
return"function"==typeof e?e.apply(void 0,r):e},Z=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},ee=function(e,t){var r,s=(null==t?void 0:t.document)||document,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?H(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),n={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o=function(e,t,r){return e&&void 0!==e[t]?e[t]:i[r||t]},a=function(e){return!(!e||!n.containers.some((function(t){return t.contains(e)})))},c=function(e){var t=i[e]
if("function"==typeof t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o]
t=t.apply(void 0,n)}if(!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t
if("string"==typeof t&&!(a=s.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return a},l=function(){var e=c("initialFocus")
if(!1===e)return!1
if(void 0===e)if(a(s.activeElement))e=s.activeElement
else{var t=n.tabbableGroups[0]
e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},u=function(){if(n.tabbableGroups=n.containers.map((function(e){var t,r,s=function(e,t){return function e(t){var r=[],s=[]
return t.forEach((function(t,i){var n=!!t.scope,o=n?t.scope:t,a=E(o,n),c=n?e(t.candidates):o
0===a?n?r.push.apply(r,c):r.push(o):s.push({documentOrder:i,tabIndex:a,item:t,isScope:n,content:c})})),s.sort(q).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(r)}((t=t||{}).getShadowRoot?N([e],t.includeContainer,{filter:M.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:z}):D(e,t.includeContainer,M.bind(null,t)))}(e),i=(t=e,(r=r||{}).getShadowRoot?N([t],r.includeContainer,{filter:V.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):D(t,r.includeContainer,V.bind(null,r)))
if(s.length>0)return{container:e,firstTabbableNode:s[0],lastTabbableNode:s[s.length-1],nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=i.findIndex((function(t){return t===e}))
return t?i.slice(r+1).find((function(e){return G(e)})):i.slice(0,r).reverse().find((function(e){return G(e)}))}}})).filter((function(e){return!!e})),n.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},h=function e(t){!1!==t&&t!==s.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),n.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(l()))},d=function(e){var t=c("setReturnFocus",e)
return t||!1!==t&&e},p=function(e){var t=Z(e)
a(t)||(Q(i.clickOutsideDeactivates,e)?r.deactivate({returnFocus:i.returnFocusOnDeactivate&&!J(t)}):Q(i.allowOutsideClick,e)||e.preventDefault())},f=function(e){var t=Z(e),r=a(t)
r||t instanceof Document?r&&(n.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),h(n.mostRecentlyFocusedNode||l()))},v=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==Q(i.escapeDeactivates,e))return e.preventDefault(),void r.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=Z(e)
u()
var r=null
if(n.tabbableGroups.length>0){var s=X(n.tabbableGroups,(function(e){return e.container.contains(t)})),i=s>=0?n.tabbableGroups[s]:void 0
if(s<0)r=e.shiftKey?n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:n.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var o=X(n.tabbableGroups,(function(e){var r=e.firstTabbableNode
return t===r}))
if(o<0&&(i.container===t||J(t)&&!G(t)&&!i.nextTabbableNode(t,!1))&&(o=s),o>=0){var a=0===o?n.tabbableGroups.length-1:o-1
r=n.tabbableGroups[a].lastTabbableNode}}else{var l=X(n.tabbableGroups,(function(e){var r=e.lastTabbableNode
return t===r}))
if(l<0&&(i.container===t||J(t)&&!G(t)&&!i.nextTabbableNode(t))&&(l=s),l>=0){var d=l===n.tabbableGroups.length-1?0:l+1
r=n.tabbableGroups[d].firstTabbableNode}}}else r=c("fallbackFocus")
r&&(e.preventDefault(),h(r))}(e)},g=function(e){if(!Q(i.clickOutsideDeactivates,e)){var t=Z(e)
a(t)||Q(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}},_=function(){if(n.active)return Y.activateTrap(r),n.delayInitialFocusTimer=i.delayInitialFocus?K((function(){h(l())})):h(l()),s.addEventListener("focusin",f,!0),s.addEventListener("mousedown",p,{capture:!0,passive:!1}),s.addEventListener("touchstart",p,{capture:!0,passive:!1}),s.addEventListener("click",g,{capture:!0,passive:!1}),s.addEventListener("keydown",v,{capture:!0,passive:!1}),r},b=function(){if(n.active)return s.removeEventListener("focusin",f,!0),s.removeEventListener("mousedown",p,!0),s.removeEventListener("touchstart",p,!0),s.removeEventListener("click",g,!0),s.removeEventListener("keydown",v,!0),r}
return(r={activate:function(e){if(n.active)return this
var t=o(e,"onActivate"),r=o(e,"onPostActivate"),i=o(e,"checkCanFocusTrap")
i||u(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=s.activeElement,t&&t()
var a=function(){i&&u(),_(),r&&r()}
return i?(i(n.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!n.active)return this
clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,b(),n.active=!1,n.paused=!1,Y.deactivateTrap(r)
var t=o(e,"onDeactivate"),s=o(e,"onPostDeactivate"),i=o(e,"checkCanReturnFocus")
t&&t()
var a=o(e,"returnFocus","returnFocusOnDeactivate"),c=function(){K((function(){a&&h(d(n.nodeFocusedBeforeActivation)),s&&s()}))}
return a&&i?(i(d(n.nodeFocusedBeforeActivation)).then(c,c),this):(c(),this)},pause:function(){return n.paused||!n.active||(n.paused=!0,b()),this},unpause:function(){return n.paused&&n.active?(n.paused=!1,u(),_(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return n.containers=t.map((function(e){return"string"==typeof e?s.querySelector(e):e})),n.active&&u(),this}}).updateContainerElements(e),r}
const te="esri-identity-modal__content"
let re=class extends _.a{constructor(e,t){super(e,t),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.own(this.watch("open",()=>this._toggleFocusTrap()))}destroy(){this._destroyFocusTrap()}render(){const e=this.id,{open:t,content:r,title:s,messages:i}=this,n=t&&!!r,o={"esri-identity-modal--open":n,"esri-identity-modal--closed":!n},a=Object(O.a)("button",{class:"esri-identity-modal__close-button","aria-label":i.close,title:i.close,bind:this,onclick:this._close},Object(O.a)("span",{"aria-hidden":"true",class:"esri-icon-close"})),c=e+"_title",l=e+"_content",u=s?Object(O.a)("h1",{id:c,class:"esri-identity-modal__title"},s):null,h=n?Object(O.a)("div",{bind:this,class:"esri-identity-modal__dialog",role:"dialog","aria-labelledby":c,"aria-describedby":l,afterCreate:this._createFocusTrap},a,u,this._renderContent(l)):null
return Object(O.a)("div",{tabIndex:-1,class:this.classes("esri-identity-modal",o)},h)}_destroyFocusTrap(){var e
null==(e=this._focusTrap)||e.deactivate({onDeactivate:null}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:e,open:t}=this
e&&(t?e.activate():e.deactivate())}_createFocusTrap(e){this._destroyFocusTrap()
const t=requestAnimationFrame(()=>{this._focusTrap=ee(e,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()})
this.own(Object(A.c)(()=>cancelAnimationFrame(t)))}_renderContent(e){const t=this.content
return"string"==typeof t?Object(O.a)("div",{class:te,id:e,innerHTML:t}):Object(T.b)(t)?Object(O.a)("div",{class:te,id:e},t.render()):t instanceof HTMLElement?Object(O.a)("div",{class:te,id:e,bind:t,afterCreate:this._attachToNode}):null}_attachToNode(e){e.appendChild(this)}}
Object(i.a)([Object(f.b)({readOnly:!0})],re.prototype,"container",void 0),Object(i.a)([Object(f.b)()],re.prototype,"content",void 0),Object(i.a)([Object(f.b)()],re.prototype,"open",void 0),Object(i.a)([Object(f.b)(),Object(m.a)("esri/t9n/common")],re.prototype,"messages",void 0),Object(i.a)([Object(f.b)({aliasOf:"messages.auth.signIn"})],re.prototype,"title",void 0),re=Object(i.a)([Object(v.a)("esri.identity.IdentityModal")],re)
const se=re
class ie{constructor(e,t){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=e,this.storage=t,this._init()}isValid(){let e=!1
if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)e=!0
else{const t=Date.now()
this.expires>t&&(this.expires-t)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(e=!0)}return e}save(){if(!this.storage)return!1
const e=this._load(),t=this.oAuthInfo
if(t&&t.authNamespace&&t.portalUrl){let r=e[t.authNamespace]
r||(r=e[t.authNamespace]={}),this.appId||(this.appId=t.appId),r[t.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId}
try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(e))}catch(e){return console.warn(e),!1}return!0}return!1}destroy(){const e=this._load(),t=this.oAuthInfo
if(t&&t.appId&&t.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const e=t.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",r=new FormData
if(r.append("f","json"),r.append("auth_token",this.refreshToken||this.token),r.append("client_id",t.appId),r.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(e,r)
else{const t=new XMLHttpRequest
t.open("POST",e),t.send(r)}}if(t&&t.authNamespace&&t.portalUrl&&this.storage){const r=e[t.authNamespace]
if(r){delete r[t.portalUrl]
try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(e))}catch(e){console.log(e)}}}t&&(t._oAuthCred=null,this.oAuthInfo=null)}_init(){const e=this._load(),t=this.oAuthInfo
if(t&&t.authNamespace&&t.portalUrl){let r=e[t.authNamespace]
r&&(r=r[t.portalUrl],r&&(this.appId=r.appId,this.codeVerifier=r.codeVerifier,this.expires=r.expires,this.refreshToken=r.refreshToken,this.ssl=r.ssl,this.stateUID=r.stateUID,this.token=r.token,this.userId=r.userId))}}_load(){let e={}
if(this.storage){const t=this.storage.getItem("esriJSAPIOAuth")
if(t)try{e=JSON.parse(t)}catch(e){console.warn(e)}}return e}}ie.prototype.declaredClass="esri.identity.OAuthCredential"
var ne,oe=r(860)
let ae=ne=class extends oe.a{constructor(e){super(e),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return ne.fromJSON(this.toJSON())}}
Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"appId",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"authNamespace",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"expiration",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"flowType",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"forceLogin",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"forceUserId",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"locale",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"minTimeUntilExpiration",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"popup",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"popupCallbackUrl",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"popupWindowFeatures",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"portalUrl",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"preserveUrlHash",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],ae.prototype,"userId",void 0),ae=ne=Object(i.a)([Object(v.a)("esri.identity.OAuthInfo")],ae)
const ce=ae
let le=class extends oe.a{constructor(e){super(e),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}}
Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"adminTokenServiceUrl",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"currentVersion",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"hasPortal",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"hasServer",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"owningSystemUrl",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"owningTenant",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"server",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"shortLivedTokenValidity",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"tokenServiceUrl",void 0),Object(i.a)([Object(f.b)({json:{write:!0}})],le.prototype,"webTierAuth",void 0),le=Object(i.a)([Object(v.a)("esri.identity.ServerInfo")],le)
const ue=le,he={},de=e=>{const t=new p.a(e.owningSystemUrl).host,r=new p.a(e.server).host,s=/.+\.arcgis\.com$/i
return s.test(t)&&s.test(r)},pe=(e,t)=>!!(de(e)&&t&&t.some(t=>t.test(e.server)))
let fe=null,ve=null
try{fe=window.localStorage,ve=window.sessionStorage}catch{}class ge extends c.a{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this.defaultOAuthInfo=null,this.defaultTokenValidity=60,this.dialog=null,this.formConstructor=k,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=Object(p.M)(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthLocationParams(),window.addEventListener("pageshow",e=>{this._pageShowHandler(e)})}registerServers(e){const t=this.serverInfos
t?(e=e.filter(e=>!this.findServerInfo(e.server)),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach(e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)})}registerOAuthInfos(e){const t=this.oAuthInfos
if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl)
e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e}
const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t)
let s,i=this.findServerInfo(t),n=!0
i||(i=new ue,i.server=this._getServerInstanceRoot(t),r?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),s=this._findCredential(t),s?(delete e.server,Object.assign(s,e),n=!1):(s=new _e({userId:e.userId,server:i.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),s.resources=[t],this.credentials.push(s)),s.emitTokenChange(!1),n||s.refreshServerTokens()}toJSON(){return Object(u.c)({serverInfos:this.serverInfos.map(e=>e.toJSON()),oAuthInfos:this.oAuthInfos.map(e=>e.toJSON()),credentials:this.credentials.map(e=>e.toJSON())})}initialize(e){if(!e)return
"string"==typeof e&&(e=JSON.parse(e))
const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials
if(t){const e=[]
t.forEach(t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new ue(t))}),e.length&&this.registerServers(e)}if(r){const e=[]
r.forEach(t=>{t.appId&&e.push(t.declaredClass?t:new ce(t))}),e.length&&this.registerOAuthInfos(e)}s&&s.forEach(e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new _e(e)).emitTokenChange(),this.credentials.push(e))})}findServerInfo(e){let t
e=this._sanitizeUrl(e)
for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r
break}return t}findOAuthInfo(e){let t
e=this._sanitizeUrl(e)
for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r
break}return t}findCredential(e,t){let r
e=this._sanitizeUrl(e)
const s=this._isServerRsrc(e)?"server":"portal"
if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i
break}}else for(const t of this.credentials)if(this._hasSameServerInstance(t.server,e)&&-1!==this._getIdenticalSvcIdx(e,t)&&t.scope===s){r=t
break}return r}getCredential(e,t){let r,s,i=!0
t&&(r=!!t.token,s=t.error,i=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e)
const n=new AbortController,o=Object(d.g)()
if(t.signal&&Object(d.q)(t.signal,()=>{n.abort()}),Object(d.q)(n,()=>{o.reject(new a.a("identity-manager:user-aborted","ABORTED"))}),Object(d.n)(n))return o.promise
t.signal=n.signal
const c=this._isAdminResource(e),l=r?this.findCredential(e):null
let u
if(l&&s&&s.details&&498===s.details.httpStatus)l.destroy()
else if(l)return u=new a.a("identity-manager:not-authorized","You are currently signed in as: '"+l.userId+"'. You do not have access to this resource: "+e,{error:s}),o.reject(u),o.promise
const h=this._findCredential(e,t)
if(h)return o.resolve(h),o.promise
let f=this.findServerInfo(e)
if(f)!f.hasServer&&this._isServerRsrc(e)&&(f._restInfoPms=this._getTokenSvcUrl(e),f.hasServer=!0)
else{const t=this._getTokenSvcUrl(e)
if(!t)return u=new a.a("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),o.reject(u),o.promise
f=new ue,f.server=this._getServerInstanceRoot(e),"string"==typeof t?(f.tokenServiceUrl=t,f.hasPortal=!0):(f._restInfoPms=t,f.hasServer=!0),this.registerServers([f])}return f.hasPortal&&void 0===f._selfReq&&(i||Object(p.s)(f.tokenServiceUrl,this._appOrigin)||this._gwDomains.some(e=>e.tokenServiceUrl===f.tokenServiceUrl))&&(f._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(f.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,f,t,o,c)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const s=this._rePortalTokenSvc.test(e.tokenServiceUrl),i=new p.a(this._appOrigin),n=e.shortLivedTokenValidity
let c,l,u,h,d,f,v,g
t&&(g=this.tokenValidity||n||this.defaultTokenValidity,g>n&&n>0&&(g=n)),r&&(c=r.isAdmin,l=r.serverUrl,u=r.token,f=r.signal,v=r.ssl,e.customParameters=r.customParameters),c?h=e.adminTokenServiceUrl:(h=e.tokenServiceUrl,d=new p.a(h.toLowerCase()),e.webTierAuth&&null!=r&&r.serverUrl&&!v&&"http"===i.scheme&&(Object(p.s)(i.uri,h,!0)||"https"===d.scheme&&i.host===d.host&&"7080"===i.port&&"7443"===d.port)&&(h=h.replace(/^https:/i,"http:").replace(/:7443/i,":7080")))
const _={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:l,token:u,expiration:g,referer:c||s?this._appOrigin:null,client:c?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:f,...null==r?void 0:r.ioArgs}
return s||(_.withCredentials=!1),Object(o.default)(h,_).then(r=>{const s=r.data
if(!s||!s.token)return new a.a("identity-manager:authentication-failed","Unable to generate token")
const i=e.server
return he[i]||(he[i]={}),t&&(he[i][t.username]=t.password),s.validity=g,s})}isBusy(){return!!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then(e=>e.credential)}checkAppAccess(e,t,r){let s=!1
return this.getCredential(e,{prompt:!1}).then(i=>{let n
const c={f:"json"}
if("portal"===i.scope)if(t&&(this._doPortalSignIn(e)||r&&r.force))n=i.server+"/sharing/rest/oauth2/validateAppAccess",c.client_id=t
else{if(!i.token)return{credential:i}
n=i.server+"/sharing/rest"}else{if(!i.token)return{credential:i}
n=i.server+"/rest/services"}return i.token&&(c.token=i.token),Object(o.default)(n,{query:c,authMode:"anonymous"}).then(e=>{if(!1===e.data.valid)throw new a.a("identity-manager:not-authorized",`You are currently signed in as: '${i.userId}'.`,e.data)
return s=!!e.data.viewOnlyUserTypeApp,{credential:i}}).catch(e=>{if("identity-manager:not-authorized"===e.name)throw e
const t=e.details&&e.details.httpStatus
if(498===t)throw i.destroy(),new a.a("identity-manager:not-authenticated","User is not signed in.")
if(400===t)throw new a.a("identity-manager:invalid-request")
return{credential:i}})}).then(e=>({credential:e.credential,viewOnly:s}))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(Object(p.H)(e)))}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,r={}){const s=Object(d.g)(),i=()=>{var e,t,r,s,i
null==(e=c)||e.remove(),null==(t=l)||t.remove(),null==(r=u)||r.remove(),null==(s=o)||s.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=o=c=l=u=null},n=()=>{i(),this._oAuthDfd=null,s.reject(new a.a("identity-manager:user-aborted","ABORTED"))}
r.signal&&Object(d.q)(r.signal,()=>{n()})
let o=new this.formConstructor
o.resource=this.getResourceName(e),o.server=t.server,this.dialog=new se,this.dialog.content=o,this.dialog.open=!0,this.emit("dialog-create")
let c=o.on("cancel",n),l=this.dialog.watch("open",n),u=o.on("submit",e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then(n=>{i()
const o=new _e({userId:e.username,server:t.server,token:n.token,expires:null!=n.expires?Number(n.expires):null,ssl:!!n.ssl,isAdmin:r.isAdmin,validity:n.validity})
s.resolve(o)}).catch(e=>{o.error=e,o.signingIn=!1})})
return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=Object(d.g)()
const i=this._oAuthDfd
let n
null!=s&&s.signal&&Object(d.q)(s.signal,()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_
e&&!e.closed?e.close():this.dialog&&f()}),i.resUrl_=e,i.sinfo_=t,i.oinfo_=r
const o=r._oAuthCred
if(o.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&!r.popup&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32))
n=Object(p.f)(e),o.codeVerifier=n,e=crypto.getRandomValues(new Uint8Array(32)),o.stateUID=Object(p.f)(e),o.save()||(o.codeVerifier=n=null)}else o.codeVerifier=null
let c,l,u,h
this._getCodeChallenge(n).then(i=>{const n=!s||!1!==s.oAuthPopupConfirmation
r.popup&&n?(c=new this.formConstructor,c.oAuthPrompt=!0,c.server=t.server,this.dialog=new se,this.dialog.content=c,this.dialog.open=!0,this.emit("dialog-create"),l=c.on("cancel",f),u=this.dialog.watch("open",f),h=c.on("submit",()=>{v(),this._doOAuthSignIn(e,t,r,i)})):this._doOAuthSignIn(e,t,r,i)})
const f=()=>{v(),this._oAuthDfd=null,i.reject(new a.a("identity-manager:user-aborted","ABORTED"))},v=()=>{var e,t,r,s,i
null==(e=l)||e.remove(),null==(t=u)||t.remove(),null==(r=h)||r.remove(),null==(s=c)||s.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=null}
return i.promise}destroyCredentials(){this.credentials&&this.credentials.slice().forEach(e=>{e.destroy()}),this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=Object(l.c)(window,"message",t=>{var r
if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(r=t.data)?void 0:r.type)){const r=t.source
this.getCredential(e).then(e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)}).catch(e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)})}})}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthLocationParams(){let e=window.location.hash
if(e){"#"===e.charAt(0)&&(e=e.substring(1))
const r=Object(p.H)(e)
let s=!1
if(r.access_token&&r.expires_in&&r.state&&r.hasOwnProperty("username"))try{r.state=JSON.parse(r.state),r.state.portalUrl&&(this._oAuthLocationParams=r,s=!0)}catch{}else if(r.error&&r.error_description&&(console.log("IdentityManager OAuth Error: ",r.error," - ",r.error_description),"access_denied"===r.error&&(s=!0,r.state)))try{r.state=JSON.parse(r.state)}catch{}var t
s&&(window.location.hash=(null==(t=r.state)?void 0:t.hash)||"")}let r=window.location.search
if(r){"?"===r.charAt(0)&&(r=r.substring(1))
const e=Object(p.H)(r)
let t=!1
if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,t=!0)}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(t=!0,e.state)))try{e.state=JSON.parse(e.state)}catch{}if(t){var s
const t={...e};["code","error","error_description","message_code","persist","state"].forEach(e=>{delete t[e]})
const r=Object(p.G)(t),i=window.location.pathname+(r?"?"+r:"")+((null==(s=e.state)?void 0:s.hash)||"")
window.history.replaceState(window.history.state,"",i)}}}_getOAuthToken(e,t,r,s,i){return e=e.replace(/^http:/i,"https:"),Object(o.default)(e+"/sharing/rest/oauth2/token",{authMode:"anonymous",method:"post",query:s&&i?{grant_type:"authorization_code",code:t,redirect_uri:s,client_id:r,code_verifier:i}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then(e=>e.data)}_getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e)
return crypto.subtle.digest("SHA-256",t).then(e=>Object(p.f)(new Uint8Array(e)))}return Promise.resolve(null)}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new a.a("identity-manager:user-aborted","ABORTED")
this._errbackFunc(e)}}_findCredential(e,t){let r,s,i,n,o=-1
const a=t&&t.token,c=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",u=this.credentials.filter(t=>this._hasSameServerInstance(t.server,e)&&t.scope===l)
if(e=c||e,u.length)if(1===u.length){if(r=u[0],n=this.findServerInfo(r.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,r.userId),o=this._getIdenticalSvcIdx(e,r),!a)return-1===o&&r.resources.push(e),this._addResource(e,i),r;-1!==o&&(r.resources.splice(o,1),this._removeResource(e,i))}else{let t,r
if(u.some(a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,n=this.findServerInfo(t.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,t.userId),o=r,!0))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i))
else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e)
if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r
break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let r=-1
t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))}_useProxy(e,t){return t&&t.isAdmin&&!Object(p.s)(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!Object(p.s)(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new p.a(e)
return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase()
let r=t.indexOf(this._agsRest)
return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===r&&(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e}_hasSameServerInstance(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===t.substr(t.indexOf(":"))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,s=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i
return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):s.test(e)&&(e=e.replace(s,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const t=(n.default.request.proxyUrl||"").toLowerCase(),r=t?e.toLowerCase().indexOf(t+"?"):-1
return-1!==r&&(e=e.substring(r+t.length+1)),e=Object(p.F)(e),Object(p.M)(e).path}_isRESTService(e){return e.indexOf(this._agsRest)>-1}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r
if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase()
if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi
r=s.replace(e,"$1")===i.replace(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0)
return r}_isPortalDomain(e){const t=new p.a(e.toLowerCase()),r=this._portalConfig
let s=this._gwDomains.some(e=>e.regex.test(t.uri))
return!s&&r&&(s=this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl),t.uri)),s||n.default.portalUrl&&(s=Object(p.s)(t,n.default.portalUrl,!0)),s||(s=this._portals.some(e=>this._hasSameServerInstance(e,t.uri))),s=s||this._agsPortal.test(t.path),s}_isIdProvider(e,t){let r=-1,s=-1
this._gwDomains.forEach((i,n)=>{-1===r&&i.regex.test(e)&&(r=n),-1===s&&i.regex.test(t)&&(s=n)})
let i=!1
if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r&&r.owningSystemUrl
s&&de(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let r=-1
for(let s=0;s<t.resources.length;s++){const i=t.resources[s]
if(this._isIdenticalService(e,i)){r=s
break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,s
if(this._isRESTService(e)||this._isAdminResource(e)){const s=this._getServerInstanceRoot(e)
return t=s+"/admin/generateToken",r=Object(o.default)(e=s+"/rest/info",{query:{f:"json"}}).then(e=>e.data),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t=""
if(this._gwDomains.some(r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t)),t||this._portals.some(r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t)),t||(s=e.toLowerCase().indexOf("/sharing"),-1!==s&&(t=e.substring(0,s)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new p.a(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"}_processOAuthResponseParams(e,t,r){const s=t._oAuthCred
if(e.code){const i=s.codeVerifier
return s.codeVerifier=null,s.stateUID=null,s.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),i).then(i=>{const n=new _e({userId:i.username,server:r.server,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:e.state,_oAuthCred:s})
return t.userId=n.userId,s.storage=i.persist?fe:ve,s.refreshToken=i.refresh_token,s.token=null,s.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,s.userId=n.userId,s.ssl=n.ssl,s.save(),n})}const i=new _e({userId:e.username,server:r.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s})
return t.userId=i.userId,s.storage=e.persist?fe:ve,s.refreshToken=null,s.token=i.token,s.expires=i.expires,s.userId=i.userId,s.ssl=i.ssl,s.save(),Promise.resolve(i)}_processOAuthPopupParams(e){var t
const r=this._oAuthDfd
if(this._oAuthDfd=null,r)if(clearInterval(this._oAuthIntervalId),null==(t=this._oAuthOnPopupHandle)||t.remove(),e.error){const t="access_denied"===e.error,s=new a.a(t?"identity-manager:user-aborted":"identity-manager:authentication-failed",t?"ABORTED":"OAuth: "+e.error+" - "+e.error_description)
r.reject(s)}else this._processOAuthResponseParams(e,r.oinfo_,r.sinfo_).then(e=>{r.resolve(e)}).catch(e=>{r.reject(e)})}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(Object(p.H)(e)))}_exchangeToken(e,t,r){return Object(o.default)(e+"/sharing/rest/oauth2/exchangeToken",{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then(e=>e.data.token)}_getPlatformSelf(e,t){return e=e.replace(/^http:/i,"https:"),Object(o.default)(e+"/sharing/rest/oauth2/platformSelf",{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0}).then(e=>e.data)}_getPortalSelf(e,t){let r
return this._gwDomains.some(t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r)),r?Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0}):(this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080")),Object(o.default)(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then(e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e)
return!(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||Object(p.s)(r,e,!0)))}_checkProtocol(e,t,r,s){let i=!0
const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl
return n.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&Object(p.q)(n)&&(i=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!i)&&r(new a.a("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection.")),i}_enqueue(e,t,r,s,i,n){return s||(s=Object(d.g)()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=n,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1
const t=t=>{const r=e.options_&&e.options_.resource,s=e.resUrl_,i=e.refresh_
let n=!1;-1===this.credentials.indexOf(t)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,n=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||s)||t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange()
const o=this._soReqs,a={}
this._soReqs=[],o.forEach(e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_)
a[r]||(a[r]=!0,t.resources.push(e.resUrl_))}}),e.resolve(t),o.forEach(e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e)}),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,n||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=(i,n,o,c)=>{var u,h
const f=e.sinfo_,v=!e.options_||!1!==e.options_.prompt,g=f.hasPortal&&this._findOAuthInfo(e.resUrl_)
let _,b
if(i)t(new _e({userId:i,server:f.server,token:o||null,expires:null!=c?Number(c):null,ssl:!!n}))
else if(window!==window.parent&&null!=(u=this._appUrlObj.query)&&u["arcgis-auth-origin"]&&null!=(h=this._appUrlObj.query)&&h["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){var m
window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"])
const s=Object(l.c)(window,"message",e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(s.remove(),e.data.credential.expires<Date.now()?r(new a.a("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new _e(e.data.credential))):"arcgis:auth:error"===e.data.type&&(s.remove(),"tokenExpiredError"===e.data.error.name?r(new a.a("identity-manager:credential-request-failed","Parent application's token has expired.")):r(a.a.fromJSON(e.data.error))))})
Object(d.q)(null==(m=e.options_)?void 0:m.signal,()=>{s.remove()})}else if(g){let i=g._oAuthCred
if(!i){const e=new ie(g,fe),t=new ie(g,ve)
e.isValid()&&t.isValid()?e.expires>t.expires?(i=e,t.destroy()):(i=t,e.destroy()):i=e.isValid()?e:t,g._oAuthCred=i}if(i.isValid()){_=new _e({userId:i.userId,server:f.server,token:i.token,expires:i.expires,ssl:i.ssl,_oAuthCred:i})
const r=g.appId!==i.appId&&this._doPortalSignIn(e.resUrl_)
r||i.refreshToken?(e._pendingDfd=i.refreshToken?this._getOAuthToken(f.server,i.refreshToken,i.appId).then(e=>(_.expires=Date.now()+1e3*e.expires_in,_.token=e.access_token,_)):Promise.resolve(_),e._pendingDfd.then(e=>r?this._exchangeToken(e.server,g.appId,e.token).then(t=>(e.token=t,e)).catch(()=>e):e).then(e=>{t(e)}).catch(()=>{i.destroy(),s()})):t(_)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(g.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===i.stateUID&&i.codeVerifier)){const s=this._oAuthLocationParams
this._oAuthLocationParams=null,e._pendingDfd=this._processOAuthResponseParams(s,g,f).then(e=>{t(e)}).catch(r)}else{const s=()=>{v?e._pendingDfd=this.oAuthSignIn(e.resUrl_,f,g,e.options_).then(t,r):(b=new a.a("identity-manager:not-authenticated","User is not signed in."),r(b))}
this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(f.server,g.appId).then(e=>{Object(p.s)(e.portalUrl,this._appOrigin,!0)?(_=new _e({userId:e.username,server:f.server,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(_)):s()}).catch(s):s()}}else if(v){if(this._checkProtocol(e.resUrl_,f,r,e.admin_)){let s=e.options_
e.admin_&&(s=s||{},s.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,f,s).then(t,r)}}else b=new a.a("identity-manager:not-authenticated","User is not signed in."),r(b)},i=()=>{const s=e.sinfo_,i=s.owningSystemUrl,n=e.options_
let o,a,c,l
if(n&&(o=n.token,a=n.error,c=n.prompt),l=this._findCredential(i,{token:o,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e
break}if(l){const i=this.findCredential(e.resUrl_,l.userId)
if(i)t(i)
else if(pe(s,this._legacyFed)){const e=l.toJSON()
e.server=s.server,e.resources=null,t(new _e(e))}else(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then(r=>{t(new _e({userId:l.userId,server:s.server,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}))},r)}else this._busy=null,o&&(e.options_.token=null),(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:s.owningTenant,signal:e.options_.signal,token:o,error:a,prompt:c})).then(()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)},t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t)})}
this._errbackFunc=r
const n=e.sinfo_.owningSystemUrl,o=this._isServerRsrc(e.resUrl_),c=e.sinfo_._restInfoPms
c?c.promise.then(t=>{const r=e.sinfo_
if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=Object(h.b)("authInfo.tokenServicesUrl",t)||Object(h.b)("authInfo.tokenServiceUrl",t)||Object(h.b)("tokenServiceUrl",t),r.shortLivedTokenValidity=Object(h.b)("authInfo.shortLivedTokenValidity",t),r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant
const e=r.owningSystemUrl=t.owningSystemUrl
e&&this._portals.push(e)}o&&r.owningSystemUrl?i():s()},()=>{e.sinfo_._restInfoPms=null
const t=new a.a("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.")
r(t)}):o&&n?i():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then(t=>{const r={}
let s,i,n,o
return t&&(s=t.user&&t.user.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(o=t.customBaseUrl),e.sinfo_.currentVersion=n),e.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch(()=>null).then(e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r)):!s&&i&&n>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch(()=>null).then(()=>r):r}).catch(()=>null).then(t=>{e.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s()}):s()}_generateOAuthInfo(e){let t,r,s=e.portalUrl
const i=e.customBaseUrl,n=e.owningTenant,a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal
if(a){r=window.location.href
let e=r.indexOf("?")
e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=Object(o.default)(r+"/sharing/rest",{query:{f:"json"}}).then(()=>{this.defaultOAuthInfo=new ce({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})})):t=Promise.resolve(),t.then(()=>{if(this.defaultOAuthInfo)return s=s.replace(/^http:/i,"https:"),Object(o.default)(s+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:this.defaultOAuthInfo.appId,redirect_uri:Object(p.C)(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then(e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone()
e.data.urlKey&&i?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+i:t.portalUrl=s,t.popup=window!==window.top||!(Object(p.s)(s,this._appOrigin)||this._gwDomains.some(e=>e.regex.test(s)&&e.regex.test(this._appOrigin))),this.oAuthInfos.push(t)}})})}_doOAuthSignIn(e,t,r,s){const i=r._oAuthCred,n={portalUrl:r.portalUrl}
!r.popup&&r.preserveUrlHash&&window.location.hash&&(n.hash=window.location.hash),i.stateUID&&(n.uid=i.stateUID)
const o={client_id:r.appId,response_type:i.codeVerifier?"code":"token",state:JSON.stringify(n),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!i.codeVerifier)}
r.forceLogin&&(o.force_login=!0),r.forceUserId&&r.userId&&(o.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(o.redirectToUserOrgUrl=!0),i.codeVerifier&&(o.code_challenge=s||i.codeVerifier,o.code_challenge_method=s?"S256":"plain")
const c=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",u=c+"?"+Object(p.G)(o)
if(r.popup){const e=window.open(u,"esriJSAPIOAuth",r.popupWindowFeatures)
if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval(()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove()
const e=this._oAuthDfd
if(e){const t=new a.a("identity-manager:user-aborted","ABORTED")
e.reject(t)}}},500),this._oAuthOnPopupHandle=Object(l.c)(window,["arcgis:auth:hash","arcgis:auth:location:search"],e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail)})
else{const e=new a.a("identity-manager:popup-blocked","ABORTED")
this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:o,authorizeUrl:c,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=u}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"")
if(e.popup)return Object(p.C)(e.popupCallbackUrl)
if(t){const e=Object(p.M)(r)
return e.query&&["code","error","error_description","message_code","persist","state"].forEach(t=>{delete e.query[t]}),Object(p.e)(e.path,e.query)}return r}}ge.prototype.declaredClass="esri.identity.IdentityManagerBase"
let _e=class extends c.a.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=s.b.findServerInfo(this.server),t=e&&e.owningSystemUrl,r=!!t&&"server"===this.scope,i=r&&pe(e,s.b._legacyFed),n=e.webTierAuth,o=n&&s.b.normalizeWebTierAuth,a=he[this.server],c=a&&a[this.userId]
let l,u=this.resources&&this.resources[0],h=r&&s.b.findServerInfo(t),d={username:this.userId,password:c}
if(n&&!o)return
r&&!h&&s.b.serverInfos.some(e=>(s.b._isIdProvider(t,e.server)&&(h=e),!!h))
const p=h&&s.b.findCredential(h.server,this.userId)
if(!r||p){if(!i){if(r)l={serverUrl:u,token:p&&p.token,ssl:p&&p.ssl}
else if(o)d=null,l={ssl:this.ssl}
else{if(!c){let t
return u&&(u=s.b._sanitizeUrl(u),this._enqueued=1,t=s.b._enqueue(u,e,null,null,this.isAdmin,this),t.then(()=>{this._enqueued=0,this.refreshServerTokens()}).catch(()=>{this._enqueued=0})),t}this.isAdmin&&(l={isAdmin:!0})}return s.b.generateToken(r?h:e,r?null:d,l).then(e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()}).catch(()=>{})}p.refreshToken()}}refreshServerTokens(){"portal"===this.scope&&s.b.credentials.forEach(e=>{const t=s.b.findServerInfo(e.server),r=t&&t.owningSystemUrl
e!==this&&e.userId===this.userId&&r&&"server"===e.scope&&(s.b._hasSameServerInstance(this.server,r)||s.b._isIdProvider(r,this.server))&&(pe(t,s.b._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())})}emitTokenChange(e){clearTimeout(this._refreshTimer)
const t=this.server&&s.b.findServerInfo(this.server),r=t&&t.owningSystemUrl,i=r&&s.b.findServerInfo(r)
!1===e||r&&"portal"!==this.scope&&(!i||!i.webTierAuth||s.b.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null)
const e=s.b.credentials.indexOf(this)
e>-1&&s.b.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=Object(u.c)({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources
return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer)
const e=6e4*this.tokenRefreshBuffer,t=2**31-1
let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now()
r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)}}
Object(i.a)([Object(f.b)()],_e.prototype,"creationTime",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"expires",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"isAdmin",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"oAuthState",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"resources",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"scope",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"server",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"ssl",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"token",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"tokenRefreshBuffer",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"userId",void 0),Object(i.a)([Object(f.b)()],_e.prototype,"validity",void 0),_e=Object(i.a)([Object(v.a)("esri.identity.Credential")],_e)
class be extends ge{}be.prototype.declaredClass="esri.identity.IdentityManager"
const me=new be
Object(s.c)(me)},860:function(e,t,r){"use strict"
r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return v}))
var s=r(856),i=r(862),n=r(20),o=r(178),a=r(913)
class c{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new c
return this._values.forEach((r,s)=>{e&&e.has(s)||t.set(s,Object(o.a)(r.value),r.origin)}),t}get(e,t){t=this._normalizeOrigin(t)
const r=this._values.get(e)
return null==t||(null==r?void 0:r.origin)===t?null==r?void 0:r.value:void 0}originOf(e){var t,r
return null!=(t=null==(r=this._values.get(e))?void 0:r.origin)?t:a.a.USER}keys(e){e=this._normalizeOrigin(e)
const t=[...this._values.keys()]
return null==e?t:t.filter(t=>{var r
return(null==(r=this._values.get(t))?void 0:r.origin)===e})}set(e,t,r){if((r=this._normalizeOrigin(r))===a.a.DEFAULTS){const t=this._values.get(e)
if(t&&null!=t.origin&&t.origin>r)return}this._values.set(e,new l(t,r))}delete(e,t){var r
null!=(t=this._normalizeOrigin(t))&&(null==(r=this._values.get(e))?void 0:r.origin)!==t||this._values.delete(e)}has(e,t){var r
return null!=(t=this._normalizeOrigin(t))?(null==(r=this._values.get(e))?void 0:r.origin)===t:this._values.has(e)}forEach(e){this._values.forEach(({value:t},r)=>e(t,r))}_normalizeOrigin(e){if(null!=e)return e===a.a.DEFAULTS?e:a.a.USER}}class l{constructor(e,t){this.value=e,this.origin=t}}var u=r(1045),h=r(977),d=r(920),p=r(980),f=r(857)
const v=e=>{let t=class extends e{constructor(...e){super(...e)
const t=Object(n.c)(Object(d.a)(this)),r=t.store,s=new c
t.store=s,Object(u.a)(t,r,s)}read(e,t){Object(h.a)(this,e,t)}write(e={},t){return Object(p.b)(this,e,t)}toJSON(e){return this.write({},e)}static fromJSON(e,t){return g.call(this,e,t)}}
return t=Object(s.a)([Object(f.a)("esri.core.JSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t}
function g(e,t){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const r=new this
return r.read(e,t),r}let _=class extends(v(i.a)){}
_=Object(s.a)([Object(f.a)("esri.core.JSONSupport")],_)},977:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}))
var s=r(1346),i=r(920),n=r(1165)
function o(e,t,r){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1
const i=e.read.source
if("string"==typeof i){if(i===t)return!0
if(i.indexOf(".")>-1&&0===i.indexOf(t)&&Object(s.a)(i,r))return!0}else for(const e of i){if(e===t)return!0
if(e.indexOf(".")>-1&&0===e.indexOf(t)&&Object(s.a)(e,r))return!0}return!1}function a(e,t,r,s,i){let a=Object(n.b)(t[r],i);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(a)&&(e[r]=!0)
for(const c of Object.getOwnPropertyNames(t))a=Object(n.b)(t[c],i),o(a,r,s)&&(e[c]=!0)}function c(e,t,r,s){const i=r.metadatas,o=Object(n.a)(i[t],"any",s),a=o&&o.default
if(void 0===a)return
const c="function"==typeof a?a.call(e,t,s):a
void 0!==c&&r.set(t,c)}const l={origin:"service"}
function u(e,t,r=l){if(!t||"object"!=typeof t)return
const o=Object(i.a)(e),u=o.metadatas,h={}
for(const e of Object.getOwnPropertyNames(t))a(h,u,e,t,r)
o.setDefaultOrigin(r.origin)
for(const i of Object.getOwnPropertyNames(h)){const a=Object(n.b)(u[i],r).read,c=a&&a.source
let l
l=c&&"string"==typeof c?Object(s.c)(t,c):t[i],a&&a.reader&&(l=a.reader.call(e,l,t,r)),void 0!==l&&o.set(i,l)}if(!r||!r.ignoreDefaults){o.setDefaultOrigin("defaults")
for(const t of Object.getOwnPropertyNames(u))h[t]||c(e,t,o,r)}o.setDefaultOrigin("user")}function h(e,t,r,s=l){var i
const n={...s,messages:[]}
r(n),null==(i=n.messages)||i.forEach(t=>{"warning"!==t.type||e.loaded?s&&s.messages&&s.messages.push(t):e.loadWarnings.push(t)})}},980:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}))
var s=r(353),i=r(354),n=r(177),o=r(913),a=r(920),c=r(1165)
const l=n.a.getLogger("esri.core.accessorSupport.write")
function u(e,t,r,s,i){var n,o
const a={}
return null==(n=t.write)||null==(o=n.writer)||o.call(e,s,a,r,i),a}function h(e,t,r,n,a,c){if(!n||!n.write)return!1
const u=e.get(r)
if(!a&&n.write.overridePolicy){const t=n.write.overridePolicy.call(e,u,r,c)
void 0!==t&&(a=t)}if(a||(a=n.write),!a||!1===a.enabled)return!1
if((null===u&&!a.allowNull&&!a.writerEnsuresNonNull||void 0===u)&&a.isRequired){const t=new i.a("web-document-write:property-required",`Missing value for required property '${r}' on '${e.declaredClass}'`,{propertyName:r,target:e})
return t&&c&&c.messages?c.messages.push(t):t&&!c&&l.error(t.name,t.message),!1}return!(void 0===u||null===u&&!a.allowNull&&!a.writerEnsuresNonNull||(!t.store.multipleOriginsSupported||t.store.originOf(r)===o.a.DEFAULTS)&&function(e,t,r,i,n){const o=i.default
if(void 0===o)return!1
if(null!=i.defaultEquals)return i.defaultEquals(n)
if("function"==typeof o){if(Array.isArray(n)){const i=o.call(e,t,r)
return Object(s.e)(i,n)}return!1}return o===n}(e,r,c,n,u)||!a.ignoreOrigin&&c&&c.origin&&t.store.multipleOriginsSupported&&t.store.originOf(r)<Object(o.e)(c.origin))}function d(e,t,r,s){const i=Object(a.a)(e),n=i.metadatas,o=Object(c.c)(n[t],s)
return!!o&&h(e,i,t,o,r,s)}function p(e,t,r){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return Object(a.c)(t,e.toJSON())
const s=Object(a.a)(e),i=s.metadatas
for(const d in i){const p=Object(c.c)(i[d],r)
if(!h(e,s,d,p,void 0,r))continue
const f=e.get(d),v=u(e,p,p.write&&"string"==typeof p.write.target?p.write.target:d,f,r)
var n,l
Object.keys(v).length>0&&(t=Object(a.c)(t,v),null!=r&&null!=(n=r.resources)&&null!=(l=n.pendingOperations)&&l.length&&Promise.all(r.resources.pendingOperations).then(()=>Object(a.c)(t,v)),r&&r.writtenProperties&&r.writtenProperties.push({target:e,propName:d,oldOrigin:Object(o.d)(s.store.originOf(d)),newOrigin:r.origin}))}return t}}}])
