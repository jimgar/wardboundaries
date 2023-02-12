(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[357],{742:function(e,t,n){"use strict"
n.r(t),n.d(t,"arcgis_hub_map_widget_generic",(function(){return a}))
var i=n(293),c=n(995)
const a=class{constructor(e){Object(i.j)(this,e),this.arcgisHubWidgetSelected=Object(i.e)(this,"arcgisHubWidgetSelected",7),this.scale="m",Object(c.a)(this,"emitSelected","updateExpanded")}get parentContainer(){const{el:e}=this
return e&&e.closest("arcgis-hub-map-widget-container")}connectedCallback(){const{parentContainer:e}=this
e&&(this.updateExpanded(),e.addEventListener("calciteActionPadToggle",this.updateExpanded))}disconnectedCallback(){const{parentContainer:e}=this
e&&e.removeEventListener("calciteActionPadToggle",this.updateExpanded)}emitSelected(){this.arcgisHubWidgetSelected.emit()}updateExpanded(){var e
this.expanded=null===(e=this.parentContainer)||void 0===e?void 0:e.expanded}render(){const{active:e,disabled:t,icon:n,scale:c,text:a,expanded:d,textEnabled:s}=this
return Object(i.h)(i.b,null,this.parentContainer&&Object(i.h)("calcite-action",{active:e,disabled:t,icon:n,onClick:this.emitSelected,scale:c,text:a,textEnabled:s||d}))}get el(){return Object(i.g)(this)}}
a.style=":host{display:block}"},995:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
const i=(e,...t)=>{t.forEach(t=>{if("function"!=typeof e[t])throw new Error(`Cannot bind context. ${t} must be a function`)
e[t]=e[t].bind(e)})}}}])
