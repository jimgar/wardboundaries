(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[284],{1104:function(t,e,n){"use strict"
function i(){}function a(t,e=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i)
t.el.click=HTMLElement.prototype.click,"function"==typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.d(e,"a",(function(){return a}))},1988:function(t,e,n){"use strict"
function i(t,e=[]){const n=["class","data-hmr","hydrated","shareable-on-hover","style",...e]
return t.getAttributeNames().reduce((e,i)=>n.includes(i)?e:Object.assign(Object.assign({},e),{[i]:t.getAttribute(i)}),{})}function a(t){return`<link rel="stylesheet" href="https://hubcdn.arcgis.com/@esri/hub-components/${t}/dist/calcite/calcite.css">\n<script type="module" async src="https://hubcdn.arcgis.com/@esri/hub-components/${t}/dist/hub-components/hub-components.esm.js"><\/script>`}function r(t,e){const n=t.tagName.toLowerCase(),i=t.innerHTML
var a
return`<${n} ${a=e,Object.entries(a).reduce((t,[e,n])=>[...t,`${e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}="${n}"`],[]).join(" ")}>${i}</${n}>`}function o(t){const e=t.tagName.toLowerCase()
return`<${e} config-url="...">${t.innerHTML}</${e}>`}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return i}))},698:function(t,e,n){"use strict"
n.r(e),n.d(e,"arcgis_copyable_input",(function(){return h})),n.d(e,"arcgis_share",(function(){return d})),n.d(e,"arcgis_shareable_card",(function(){return p})),n.d(e,"calcite_fab",(function(){return b}))
var i=n(293),a=n(995),r=n(1141),o=n(1447),s=n(1988),l=n(294),c=n(957),u=n(1104)
n(1127),n(181),n(56),n(179),n(953)
const h=class{constructor(t){Object(i.j)(this,t),this.arcgisHubCopyButtonClicked=Object(i.e)(this,"arcgisHubCopyButtonClicked",7),this.type="text",this.readonly=!1,this.disabled=!1,Object(a.a)(this,"onCopyButtonClick")}async componentWillLoad(){this.intl=await r.a.loadIntlForComponent(this.element),"textarea"===this.type&&(this.buttonText=this.buttonText||this.intl.t("copyCode"))}onCalciteInputInput(t){this.value=t.detail.value}onCopyButtonClick(){this.arcgisHubCopyButtonClicked.emit(this.value),(async t=>{try{await navigator.clipboard.writeText(t)}catch(t){console.error("Unable to copy to clipboard")}})(this.value)}renderCopyButton(t,e,n){return Object(i.h)("calcite-button",{class:"copy-button",disabled:this.disabled,iconStart:e,label:this.intl.t("copyButtonLabel"),onClick:this.onCopyButtonClick,slot:n},t)}render(){const t="text"===this.type
return Object(i.h)(i.b,null,Object(i.h)("calcite-label",null,Object(i.h)("slot",{name:"label"},this.label),t?Object(i.h)("calcite-input",{disabled:this.disabled,placeholder:this.placeholder,readOnly:this.readonly,type:this.type,value:this.value},this.renderCopyButton(null,"copy-to-clipboard","action")):Object(i.h)(i.a,null,Object(i.h)("calcite-input",{disabled:this.disabled,placeholder:this.placeholder,readOnly:this.readonly,scale:"l",type:this.type,value:this.value}),this.renderCopyButton(this.buttonText))))}static get assetsDirs(){return["locales"]}get element(){return Object(i.g)(this)}}
h.style=":host([type='textarea']) .copy-button{flex-shrink:1;align-self:flex-end;min-width:7rem}:host([type='textarea']) calcite-label{display:flex;flex-direction:column;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.copy-button{height:2rem}"
const d=class{constructor(t){Object(i.j)(this,t),this.hubTelemetry=Object(i.e)(this,"hubTelemetry",7),this.shareable=!1,this.shareableByValue=!1,this.shareableByReference=!1,this.domId=Object(l.a)()}get linkUrl(){let t=new URL(location.href)
const{origin:e,pathname:n,search:i,hash:a}=this
return e&&(t=new URL(e)),n&&(t.pathname=n,t.search=""),i&&(t.search=i),t.hash=null!=a?a:"",t.href}async getCardState(){const t=this.referenceElement
return t.getState?await t.getState():Object(s.d)(this.referenceElement)}getSnippetByVal(t){if(this.referenceElement&&this.shareableByValue){const{domId:e,referenceElement:n}=this
return`${Object(s.c)("5.0.0-beta.173")}\n${Object(s.a)(n,Object.assign(Object.assign({},t),{id:e}))}`}}getSnippetByRef(){const{referenceElement:t}=this
if(t&&this.shareableByReference)return`${Object(s.c)("5.0.0-beta.173")}\n${Object(s.b)(t)}>`}async updateSnippets(){const{referenceElement:t}=this
if(t){await customElements.whenDefined(t.tagName.toLowerCase())
const e=await this.getCardState()
this.snippetByVal=this.getSnippetByVal(e),this.snippetByRef=this.getSnippetByRef()}}async componentWillLoad(){this.intl=await r.a.loadIntlForComponent(this.element)}componentWillRender(){this.updateSnippets()}onCopyButtonClicked(t){t.stopPropagation()
const e=Object.assign(Object.assign({},o.a.dictionary.category.interaction.action.share.label.link),{details:t.detail})
this.hubTelemetry.emit(e)}render(){return Object(i.h)(i.b,{"data-element":"share"},this.shareable&&Object(i.h)("arcgis-copyable-input",{label:this.intl.t("copyLinkLabel"),readonly:!0,type:"text",value:this.linkUrl}),this.shareableByValue&&Object(i.h)("arcgis-copyable-input",{label:this.intl.t("copySnippetByValLabel"),readonly:!0,type:"textarea",value:this.snippetByVal}),this.shareableByReference&&Object(i.h)("arcgis-copyable-input",{label:this.intl.t("copySnippetByRefLabel"),readonly:!0,type:"textarea",value:this.snippetByRef}))}static get assetsDirs(){return["locales"]}get element(){return Object(i.g)(this)}}
d.style=":host{display:block}"
const p=class{constructor(t){Object(i.j)(this,t),this.hubTelemetry=Object(i.e)(this,"hubTelemetry",7),this.shareable=!1,this.shareableByValue=!1,this.shareableByReference=!1,this.shareableOnHover=!1,this.showShareUi=!0,this.modalIsOpen=!1,Object(a.a)(this,"onCalciteModalClose","onOpenModalButtonClick")}get isShareable(){const{shareable:t,referenceElement:e}=this
return t&&!!(null==e?void 0:e.id)}get shouldRender(){const{isShareable:t,shareableByValue:e,shareableByReference:n}=this
return t||e||n}onCalciteModalClose(){this.modalIsOpen=!1}onOpenModalButtonClick(){this.modalIsOpen=!0
const t=Object.assign({},o.a.dictionary.category.interaction.action.open.label.popover.details.share)
this.hubTelemetry.emit(t)}async componentWillLoad(){this.intl=await r.a.loadIntlForComponent(this.element)}componentDidLoad(){if(!this.referenceElement){const t=this.element.shadowRoot.querySelector("slot")
this.referenceElement=t.assignedElements()[0]}}renderSharingUi(){if(this.shouldRender)return Object(i.h)(i.a,null,Object(i.h)("label",{id:"sharing"},this.intl.t("shareableTooltip"),Object(i.h)("calcite-fab",{icon:"share",label:this.intl.t("shareableTooltip"),onClick:this.onOpenModalButtonClick})),Object(i.h)("arcgis-wormhole",null,Object(i.h)("calcite-modal",{active:this.modalIsOpen,intlClose:this.intl.t("modalClose"),onCalciteModalClose:this.onCalciteModalClose,scale:"s"},Object(i.h)("div",{slot:"header"},this.intl.t("modalHeading")),Object(i.h)("div",{slot:"content"},this.modalIsOpen&&Object(i.h)("arcgis-share",{hash:this.referenceElement&&this.referenceElement.id,referenceElement:this.referenceElement,shareable:this.shareable,shareableByReference:this.shareableByReference,shareableByValue:this.shareableByValue})))))}render(){return Object(i.h)(i.b,{"data-element":"shareable-card",tabindex:this.shouldRender&&this.shareableOnHover?"0":void 0},Object(i.h)("slot",null),this.showShareUi&&this.renderSharingUi())}static get assetsDirs(){return["locales"]}get element(){return Object(i.g)(this)}}
p.style=':host{display:flex;flex-direction:column}#sharing{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}#sharing>*{margin-top:0.125rem}:host([shareable-on-hover]){position:relative}:host([shareable-on-hover]) #sharing{pointer-events:none;position:absolute;top:100%;right:0px;left:0px;z-index:10;opacity:0;transition:opacity 150ms ease-out 2000ms}:host([shareable-on-hover]:hover) #sharing,:host([shareable-on-hover]:focus) #sharing{pointer-events:auto;opacity:1;transition:opacity 250ms ease-in 100ms}calcite-tooltip[aria-hidden="true"]{pointer-events:none}'
const b=class{constructor(t){Object(i.j)(this,t),this.appearance="outline",this.color="neutral",this.disabled=!1,this.icon="plus",this.loading=!1,this.scale="m",this.textEnabled=!1}componentDidRender(){Object(u.a)(this)}async setFocus(){Object(c.f)(this.buttonEl)}render(){const{appearance:t,color:e,disabled:n,loading:a,scale:r,textEnabled:o,icon:s,label:l,text:c}=this,u=o?null:l||c||null
return Object(i.h)("calcite-button",{appearance:"solid"===t?"solid":"outline",class:"button",color:e,disabled:n,iconStart:s,label:l,loading:a,ref:t=>{this.buttonEl=t},round:!0,scale:r,title:u,type:"button",width:"auto"},this.textEnabled?this.text:null)}get el(){return Object(i.g)(this)}}
b.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:0 12px 32px -2px rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 12px 32px -2px var(--tw-shadow-color), 0 4px 20px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}"},953:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
const i=()=>[2,1,1,1,3].map(t=>{let e=""
for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1)
return e}).join("-")},957:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return w})),n.d(e,"k",(function(){return u})),n.d(e,"l",(function(){return r})),n.d(e,"m",(function(){return m})),n.d(e,"n",(function(){return o})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return v})),n.d(e,"q",(function(){return O}))
var i=n(179),a=n(953)
function r(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${Object(a.a)()}`:""}function o(t){return Array.isArray(t)?t:Array.from(t)}function s(t){const e=p(t,`.${i.a.darkTheme}, .${i.a.lightTheme}`)
return(null==e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function l(t){const e=p(t,"[dir]")
return e?e.getAttribute("dir"):"ltr"}function c(t,e,n){const i=`[${e}]`,a=t.closest(i)
return a?a.getAttribute(e):n}function u(t){return t.getRootNode()}function h(t){return t.host||null}function d(t,{selector:e,id:n}){return function t(i){if(!i)return null
i.assignedSlot&&(i=i.assignedSlot)
const a=u(i),r=n?"getElementById"in a?a.getElementById(n):null:e?a.querySelector(e):null,o=h(a)
return r||(o?t(o):null)}(t)}function p(t,e){return function t(n){return n?n.closest(e)||t(h(u(n))):null}(t)}function b(t,e){return!!function(t,e){return function t(e,n){if(!e)return
const i=n(e)
if(void 0!==i)return i
const{parentNode:a}=e
return t(a instanceof ShadowRoot?a.host:a,n)}(t,e)}(e,e=>e===t||void 0)}function m(t){return"function"==typeof(null==t?void 0:t.setFocus)}async function f(t){if(t)return m(t)?t.setFocus():t.focus()}function y(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null)
const i=e?Array.isArray(e)?e.map(t=>`[slot="${t}"]`).join(","):`[slot="${e}"]`:":not([slot])"
return(null==n?void 0:n.all)?function(t,e,n){let i=":not([slot])"===e?g(t,":not([slot])"):Array.from(t.querySelectorAll(e))
i=n&&!1===n.direct?i:i.filter(e=>e.parentElement===t),i=(null==n?void 0:n.matches)?i.filter(t=>null==t?void 0:t.matches(n.matches)):i
const a=null==n?void 0:n.selector
return a?i.map(t=>Array.from(t.querySelectorAll(a))).reduce((t,e)=>[...t,...e],[]).filter(t=>!!t):i}(t,i,n):function(t,e,n){let i=":not([slot])"===e?g(t,":not([slot])")[0]||null:t.querySelector(e)
i=n&&!1===n.direct||(null==i?void 0:i.parentElement)===t?i:null,i=(null==n?void 0:n.matches)?(null==i?void 0:i.matches(n.matches))?i:null:i
const a=null==n?void 0:n.selector
return a?null==i?void 0:i.querySelector(a):i}(t,i,n)}function g(t,e){return t?Array.from(t.children||[]).filter(t=>null==t?void 0:t.matches(e)):[]}function w(t,e){return Array.from(t.children).filter(t=>t.matches(e))}function v(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function x(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function O(t){return Boolean(t).toString()}function j(t){return!(!t.isPrimary||0!==t.button)}}}])
