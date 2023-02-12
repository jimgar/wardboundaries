(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[1],{1014:function(t,e,o){"use strict"
o.d(e,"a",(function(){return d}))
var r,i=o(856),s=o(873),n=o(863),a=o(178),l=o(858),c=(o(859),o(868)),b=o(857),p=o(2048),u=o(1022)
const y=new n.a({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"})
let h=r=class extends p.a{constructor(...t){super(...t),this.color=new s.a([0,0,0,.25]),this.outline=new u.a,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(t,e,o){if(t&&"string"!=typeof t)return t
const r={}
return t&&(r.style=t),e&&(r.outline=e),o&&(r.color=o),r}clone(){return new r({color:Object(a.a)(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}}
Object(i.a)([Object(l.b)()],h.prototype,"color",void 0),Object(i.a)([Object(l.b)()],h.prototype,"outline",void 0),Object(i.a)([Object(c.a)({esriSFS:"simple-fill"},{readOnly:!0})],h.prototype,"type",void 0),Object(i.a)([Object(l.b)({type:y.apiValues,json:{read:y.read,write:y.write}})],h.prototype,"style",void 0),h=r=Object(i.a)([Object(b.a)("esri.symbols.SimpleFillSymbol")],h)
const d=h},1022:function(t,e,o){"use strict"
o.d(e,"a",(function(){return x}))
var r=o(856),i=o(863),s=o(178),n=o(876),a=o(858),l=(o(859),o(868)),c=o(857),b=(o(353),o(77),o(1048))
let p=class extends b.a{constructor(t){super(t),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}}
Object(r.a)([Object(l.a)({esriSLS:"simple-line"},{readOnly:!0})],p.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:Number,cast:n.k,json:{write:!0}})],p.prototype,"width",void 0),p=Object(r.a)([Object(c.a)("esri.symbols.LineSymbol")],p)
const u=p
var y,h=o(873),d=o(860),j=o(865),O=o(864),m=o(2216)
let f=y=class extends d.a{constructor(t){super(t),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(t,e,o,r){"web-map"===(null==r?void 0:r.origin)?e[o]="arrow":e[o]=t}set color(t){this._set("color",t)}readColor(t){return t&&null!=t[0]?[t[0],t[1],t[2],t[3]/255]:t}writeColor(t,e,o,r){"web-map"===(null==r?void 0:r.origin)||(e[o]=t)}clone(){return new y({color:Object(s.a)(this.color),placement:this.placement,style:this.style})}hash(){var t
return`${this.placement}.${null==(t=this.color)?void 0:t.hash()}.${this.style}`}}
Object(r.a)([Object(a.b)({type:["begin","end","begin-end"],json:{write:!0}})],f.prototype,"placement",void 0),Object(r.a)([Object(l.a)({"line-marker":"line-marker"},{readOnly:!0}),Object(a.b)({json:{origins:{"web-map":{write:!1}}}})],f.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:m.b})],f.prototype,"style",void 0),Object(r.a)([Object(O.a)("style")],f.prototype,"writeStyle",null),Object(r.a)([Object(a.b)({type:h.a,value:null,json:{write:{allowNull:!0}}})],f.prototype,"color",null),Object(r.a)([Object(j.a)("color")],f.prototype,"readColor",null),Object(r.a)([Object(O.a)("color")],f.prototype,"writeColor",null),f=y=Object(r.a)([Object(c.a)("esri.symbols.LineSymbolMarker")],f)
const v=f
var w
const g=new i.a({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"})
let S=w=class extends u{constructor(...t){super(...t),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(t,e,o,r,i,s){if(t&&"string"!=typeof t)return t
const a={}
return null!=t&&(a.style=t),null!=e&&(a.color=e),null!=o&&(a.width=Object(n.k)(o)),null!=r&&(a.cap=r),null!=i&&(a.join=i),null!=s&&(a.miterLimit=Object(n.k)(s)),a}clone(){var t
return new w({color:Object(s.a)(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(t=this.marker)?void 0:t.clone()})}hash(){var t,e
return`${super.hash()}.${null==(t=this.color)?void 0:t.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(e=this.marker)?void 0:e.hash()}`}}
Object(r.a)([Object(l.a)({esriSLS:"simple-line"},{readOnly:!0})],S.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:g.apiValues,json:{read:g.read,write:g.write}})],S.prototype,"style",void 0),Object(r.a)([Object(a.b)({type:["butt","round","square"],json:{write:{overridePolicy:(t,e,o)=>({enabled:"round"!==t&&(null==o||null==o.origin)})}}})],S.prototype,"cap",void 0),Object(r.a)([Object(a.b)({type:["miter","round","bevel"],json:{write:{overridePolicy:(t,e,o)=>({enabled:"round"!==t&&(null==o||null==o.origin)})}}})],S.prototype,"join",void 0),Object(r.a)([Object(a.b)({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":v}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],S.prototype,"marker",void 0),Object(r.a)([Object(a.b)({type:Number,json:{read:!1,write:!1}})],S.prototype,"miterLimit",void 0),S=w=Object(r.a)([Object(c.a)("esri.symbols.SimpleLineSymbol")],S)
const x=S},1072:function(t,e,o){"use strict"
o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return i}))
var r=o(878)
function i(t,e,o=r.a){return e||(e=new o),e===t||(e.removeAll(),(i=t)&&(Array.isArray(i)||"items"in i&&Array.isArray(i.items))?e.addMany(t):t&&e.add(t)),e
var i}function s(t){return t}},1076:function(t,e,o){"use strict"
o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return s}))
var r=o(859)
function i(t){const e=Object(r.e)(100*(1-t))
return Math.max(0,Math.min(e,100))}function s(t){const e=1-t/100
return Math.max(0,Math.min(e,1))}},1105:function(t,e,o){"use strict"
o.d(e,"a",(function(){return O}))
var r,i=o(856),s=o(873),n=o(863),a=o(178),l=o(876),c=o(858),b=(o(859),o(868)),p=o(857),u=o(864),y=o(2052),h=o(1022)
const d=new n.a({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"})
let j=r=class extends y.a{constructor(...t){super(...t),this.color=new s.a([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new h.a}normalizeCtorArgs(t,e,o,r){if(t&&"string"!=typeof t)return t
const i={}
return t&&(i.style=t),null!=e&&(i.size=Object(l.k)(e)),o&&(i.outline=o),r&&(i.color=r),i}writeColor(t,e){t&&"x"!==this.style&&"cross"!==this.style&&(e.color=t.toJSON()),null===t&&(e.color=null)}set path(t){this.style="path",this._set("path",t)}clone(){return new r({angle:this.angle,color:Object(a.a)(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var t
return`${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${null==(t=this.outline)?void 0:t.hash()}`}}
Object(i.a)([Object(c.b)()],j.prototype,"color",void 0),Object(i.a)([Object(u.a)("color")],j.prototype,"writeColor",null),Object(i.a)([Object(b.a)({esriSMS:"simple-marker"},{readOnly:!0})],j.prototype,"type",void 0),Object(i.a)([Object(c.b)()],j.prototype,"size",void 0),Object(i.a)([Object(c.b)({type:d.apiValues,json:{read:d.read,write:d.write}})],j.prototype,"style",void 0),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],j.prototype,"path",null),Object(i.a)([Object(c.b)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":h.a}},json:{default:null,write:!0}})],j.prototype,"outline",void 0),j=r=Object(i.a)([Object(p.a)("esri.symbols.SimpleMarkerSymbol")],j)
const O=j},1142:function(t,e,o){"use strict"
o.d(e,"a",(function(){return O}))
var r,i=o(856),s=o(873),n=o(178),a=o(876),l=o(858),c=o(880),b=o(868),p=o(857),u=o(864),y=o(2049),h=o(1048),d=o(2116)
let j=r=class extends h.a{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new y.a,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment="baseline",this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1}normalizeCtorArgs(t,e,o){if(t&&"string"!=typeof t)return t
const r={}
return t&&(r.text=t),e&&(r.font=e),o&&(r.color=o),r}writeLineWidth(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t}castLineWidth(t){return Object(a.k)(t)}writeLineHeight(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t}clone(){return new r({angle:this.angle,backgroundColor:Object(n.a)(this.backgroundColor),borderLineColor:Object(n.a)(this.borderLineColor),borderLineSize:this.borderLineSize,color:Object(n.a)(this.color),font:this.font&&this.font.clone(),haloColor:Object(n.a)(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}}
Object(i.a)([Object(l.b)({type:s.a,json:{write:!0}})],j.prototype,"backgroundColor",void 0),Object(i.a)([Object(l.b)({type:s.a,json:{write:!0}})],j.prototype,"borderLineColor",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],j.prototype,"borderLineSize",void 0),Object(i.a)([Object(l.b)({type:y.a,json:{write:!0}})],j.prototype,"font",void 0),Object(i.a)([Object(l.b)({...d.d,json:{write:!0}})],j.prototype,"horizontalAlignment",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],j.prototype,"kerning",void 0),Object(i.a)([Object(l.b)({type:s.a,json:{write:!0}})],j.prototype,"haloColor",void 0),Object(i.a)([Object(l.b)({type:Number,cast:a.k,json:{write:!0}})],j.prototype,"haloSize",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],j.prototype,"rightToLeft",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],j.prototype,"rotated",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],j.prototype,"text",void 0),Object(i.a)([Object(b.a)({esriTS:"text"},{readOnly:!0})],j.prototype,"type",void 0),Object(i.a)([Object(l.b)({...d.g,json:{write:!0}})],j.prototype,"verticalAlignment",void 0),Object(i.a)([Object(l.b)({type:Number,cast:a.k,json:{write:!0}})],j.prototype,"xoffset",void 0),Object(i.a)([Object(l.b)({type:Number,cast:a.k,json:{write:!0}})],j.prototype,"yoffset",void 0),Object(i.a)([Object(l.b)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],j.prototype,"angle",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],j.prototype,"width",void 0),Object(i.a)([Object(l.b)({type:Number})],j.prototype,"lineWidth",void 0),Object(i.a)([Object(u.a)("lineWidth")],j.prototype,"writeLineWidth",null),Object(i.a)([Object(c.a)("lineWidth")],j.prototype,"castLineWidth",null),Object(i.a)([Object(l.b)(d.f)],j.prototype,"lineHeight",void 0),Object(i.a)([Object(u.a)("lineHeight")],j.prototype,"writeLineHeight",null),j=r=Object(i.a)([Object(p.a)("esri.symbols.TextSymbol")],j)
const O=j},1166:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(856),s=o(177),n=o(861),a=o(858),l=(o(353),o(77),o(859),o(868)),c=o(857),b=o(914),p=o(936),u=o(1048),y=o(1921)
const h=s.a.getLogger("esri.symbols.WebStyleSymbol")
let d=r=class extends u.a{constructor(t){super(t),this.styleName=null,this.portal=null,this.styleUrl=null,this.thumbnail=null,this.name=null,this.type="web-style"}read(t,e){this.portal=e?e.portal:void 0,super.read(t,e)}clone(){return new r({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}fetchSymbol(t){return this._fetchSymbol("webRef",t)}fetchCIMSymbol(t){return this._fetchSymbol("cimRef",t)}async _fetchSymbol(t,e){const r=await o.e(263).then(o.bind(null,1880))
Object(n.v)(e)
const i=r.resolveWebStyleSymbol(this,{portal:this.portal},t,e)
return i.catch(t=>{h.error("#fetchSymbol()","Failed to create symbol from style",t)}),i}}
Object(i.a)([Object(a.b)({json:{write:!1}})],d.prototype,"color",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],d.prototype,"styleName",void 0),Object(i.a)([Object(a.b)({type:b.a,json:{write:!1}})],d.prototype,"portal",void 0),Object(i.a)([Object(a.b)({type:String,json:{read:p.e,write:p.g}})],d.prototype,"styleUrl",void 0),Object(i.a)([Object(a.b)({type:y.a,json:{read:!1}})],d.prototype,"thumbnail",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],d.prototype,"name",void 0),Object(i.a)([Object(l.a)({styleSymbolReference:"web-style"},{readOnly:!0})],d.prototype,"type",void 0),d=r=Object(i.a)([Object(c.a)("esri.symbols.WebStyleSymbol")],d)
const j=d},1208:function(t,e,o){"use strict"
o.d(e,"a",(function(){return x}))
var r,i=o(856),s=o(878),n=o(354),a=o(178),l=o(20),c=o(858),b=(o(859),o(868)),p=o(857),u=o(864),y=o(2047),h=o(1608),d=o(1915),j=o(2033),O=o(2034),m=o(1415),f=o(1516),v=o(2051)
const w=s.a.ofType({base:null,key:"type",typeMap:{extrude:y.a,fill:h.a,icon:d.a,line:j.a,object:O.a,text:f.a,water:v.a}}),g=s.a.ofType({base:null,key:"type",typeMap:{extrude:y.a,fill:h.a,icon:d.a,line:j.a,object:O.a,water:v.a}})
let S=r=class extends m.a{constructor(t){super(t),this.symbolLayers=new w,this.type="polygon-3d"}writeSymbolLayers(t,e,o,r){const i=t.filter(t=>"text"!==t.type)
if(r&&r.messages&&i.length<t.length){const e=t.find(t=>"text"===t.type)
r.messages.push(new n.a("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:e}))}e[o]=i.map(t=>t.write({},r)).toArray()}clone(){return new r({styleOrigin:Object(a.a)(this.styleOrigin),symbolLayers:Object(a.a)(this.symbolLayers),thumbnail:Object(a.a)(this.thumbnail)})}static fromJSON(t){const e=new r
if(e.read(t),2===e.symbolLayers.length&&"fill"===e.symbolLayers.getItemAt(0).type&&"line"===e.symbolLayers.getItemAt(1).type){const o=e.symbolLayers.getItemAt(0),r=e.symbolLayers.getItemAt(1)
!r.enabled||t.symbolLayers&&t.symbolLayers[1]&&!1===t.symbolLayers[1].enable||(o.outline={size:r.size,color:Object(l.k)(r.material)?r.material.color:null}),e.symbolLayers.removeAt(1)}return e}static fromSimpleFillSymbol(t){return new r({symbolLayers:[h.a.fromSimpleFillSymbol(t)]})}}
Object(i.a)([Object(c.b)({type:w,json:{type:g}})],S.prototype,"symbolLayers",void 0),Object(i.a)([Object(u.a)("web-scene","symbolLayers")],S.prototype,"writeSymbolLayers",null),Object(i.a)([Object(b.a)({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],S.prototype,"type",void 0),S=r=Object(i.a)([Object(p.a)("esri.symbols.PolygonSymbol3D")],S)
const x=S},1282:function(t,e,o){"use strict"
o.d(e,"a",(function(){return m}))
var r,i=o(856),s=o(878),n=o(178),a=o(858),l=(o(859),o(868)),c=o(857),b=o(1915),p=o(2034),u=o(1415),y=o(1516),h=o(1612),d=o(2221)
const j=s.a.ofType({base:null,key:"type",typeMap:{icon:b.a,object:p.a,text:y.a}})
let O=r=class extends u.a{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.symbolLayers=new j,this.type="point-3d"}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return!1
for(const t of this.symbolLayers.items)switch(t.type){case"icon":case"text":case"object":continue
default:return!1}return!0}hasVisibleCallout(){return Object(h.c)(this)}hasVisibleVerticalOffset(){return Object(h.d)(this)}clone(){return new r({verticalOffset:Object(n.a)(this.verticalOffset),callout:Object(n.a)(this.callout),styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail)})}static fromSimpleMarkerSymbol(t){return new r({symbolLayers:[b.a.fromSimpleMarkerSymbol(t)]})}static fromPictureMarkerSymbol(t){return new r({symbolLayers:[b.a.fromPictureMarkerSymbol(t)]})}static fromCIMSymbol(t){var e,o
return"CIMPointSymbol"!==(null==(e=t.data)||null==(o=e.symbol)?void 0:o.type)?null:t.data.symbol.callout?new r({symbolLayers:[b.a.fromCIMSymbol(t)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}}):new r({symbolLayers:[b.a.fromCIMSymbol(t)]})}static fromTextSymbol(t){return new r({symbolLayers:[y.a.fromTextSymbol(t)]})}}
Object(i.a)([Object(a.b)({type:d.a,json:{write:!0}})],O.prototype,"verticalOffset",void 0),Object(i.a)([Object(a.b)(h.a)],O.prototype,"callout",void 0),Object(i.a)([Object(a.b)({type:j,json:{origins:{"web-scene":{write:!0}}}})],O.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({PointSymbol3D:"point-3d"},{readOnly:!0})],O.prototype,"type",void 0),O=r=Object(i.a)([Object(c.a)("esri.symbols.PointSymbol3D")],O)
const m=O},1373:function(t,e,o){"use strict"
o.d(e,"a",(function(){return h}))
var r,i=o(856),s=o(178),n=o(876),a=o(858),l=(o(859),o(868)),c=o(865),b=o(857),p=o(2052),u=o(2222)
let y=r=class extends p.a{constructor(...t){super(...t),this.color=null,this.type="picture-marker",this.url=null,this.source=null,this.height=12,this.width=12,this.size=null}normalizeCtorArgs(t,e,o){if(t&&"string"!=typeof t&&null==t.imageData)return t
const r={}
return t&&(r.url=t),null!=e&&(r.width=Object(n.k)(e)),null!=o&&(r.height=Object(n.k)(o)),r}readHeight(t,e){return e.size||t}readWidth(t,e){return e.size||t}clone(){const t=new r({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})
return t._set("source",Object(s.a)(this.source)),t}hash(){return`${super.hash()}.${this.height}.${this.url}.${this.width}`}}
Object(i.a)([Object(a.b)({json:{write:!1}})],y.prototype,"color",void 0),Object(i.a)([Object(l.a)({esriPMS:"picture-marker"},{readOnly:!0})],y.prototype,"type",void 0),Object(i.a)([Object(a.b)(u.b)],y.prototype,"url",void 0),Object(i.a)([Object(a.b)(u.a)],y.prototype,"source",void 0),Object(i.a)([Object(a.b)({type:Number,cast:n.k,json:{write:!0}})],y.prototype,"height",void 0),Object(i.a)([Object(c.a)("height",["height","size"])],y.prototype,"readHeight",null),Object(i.a)([Object(a.b)({type:Number,cast:n.k,json:{write:!0}})],y.prototype,"width",void 0),Object(i.a)([Object(a.b)({json:{write:!1}})],y.prototype,"size",void 0),y=r=Object(i.a)([Object(b.a)("esri.symbols.PictureMarkerSymbol")],y)
const h=y},1415:function(t,e,o){"use strict"
o.d(e,"a",(function(){return $}))
var r=o(856),i=o(878),s=o(1072),n=o(177),a=o(292),l=o(970),c=o(858),b=(o(353),o(77),o(880)),p=o(865),u=o(857),y=o(864),h=o(914),d=o(936),j=o(2047),O=o(1608),m=o(1915),f=o(2033),v=o(2034),w=o(2050),g=o(1048),S=o(1671),x=o(1516),k=o(2051),L=o(1960),z=o(1921)
const D={icon:m.a,object:v.a,line:f.a,path:w.a,fill:O.a,extrude:j.a,text:x.a,water:k.a},N=i.a.ofType({base:S.a,key:"type",typeMap:D,errorContext:"symbol-layer"}),C=n.a.getLogger("esri.symbols.Symbol3D")
let M=class extends g.a{constructor(t){super(t),this.styleOrigin=null,this.thumbnail=null,this.type=null
const e=this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers,o=e&&e.type||i.a
this._set("symbolLayers",new o)}get color(){return null}set color(t){this.initialized&&C.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")}set symbolLayers(t){Object(s.b)(t,this._get("symbolLayers"))}readStyleOrigin(t,e,o){if(t.styleUrl&&t.name){const e=Object(d.b)(t.styleUrl,o)
return new L.a({styleUrl:e,name:t.name})}if(t.styleName&&t.name)return new L.a({portal:o&&o.portal||h.a.getDefault(),styleName:t.styleName,name:t.name})
o&&o.messages&&o.messages.push(new l.a("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:o,definition:t}))}writeStyleOrigin(t,e,o,r){if(t.styleUrl&&t.name){let o=Object(d.f)(t.styleUrl,r)
Object(a.u)(o)&&(o=Object(a.F)(o)),e.styleOrigin={styleUrl:o,name:t.name}}else t.styleName&&t.name&&(t.portal&&r&&r.portal&&!Object(a.t)(t.portal.restUrl,r.portal.restUrl)?r&&r.messages&&r.messages.push(new l.a("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):e.styleOrigin={styleName:t.styleName,name:t.name})}normalizeCtorArgs(t){return t instanceof S.a||t&&D[t.type]?{symbolLayers:[t]}:Array.isArray(t)?{symbolLayers:t}:t}}
Object(r.a)([Object(c.b)({json:{read:!1,write:!1}})],M.prototype,"color",null),Object(r.a)([Object(c.b)({type:N,nonNullable:!0,json:{write:!0}}),Object(b.a)(s.a)],M.prototype,"symbolLayers",null),Object(r.a)([Object(c.b)({type:L.a})],M.prototype,"styleOrigin",void 0),Object(r.a)([Object(p.a)("styleOrigin")],M.prototype,"readStyleOrigin",null),Object(r.a)([Object(y.a)("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],M.prototype,"writeStyleOrigin",null),Object(r.a)([Object(c.b)({type:z.a,json:{read:!1}})],M.prototype,"thumbnail",void 0),Object(r.a)([Object(c.b)({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],M.prototype,"type",void 0),M=Object(r.a)([Object(u.a)("esri.symbols.Symbol3D")],M)
const $=M},1471:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b}))
var r,i=o(856),s=o(860),n=o(20),a=o(858),l=(o(353),o(77),o(859),o(857)),c=o(1559)
let b=r=class extends s.a{constructor(t){super(t),this.color=null}clone(){const t={color:Object(n.k)(this.color)?this.color.clone():null}
return new r(t)}}
Object(i.a)([Object(a.b)(c.a)],b.prototype,"color",void 0),b=r=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DMaterial")],b)},1472:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(856),s=o(878),n=o(178),a=o(858),l=(o(859),o(868)),c=o(857),b=o(1415),p=o(1516),u=o(1612),y=o(2221)
const h=s.a.ofType({base:null,key:"type",typeMap:{text:p.a}})
let d=r=class extends b.a{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.styleOrigin=null,this.symbolLayers=new h,this.type="label-3d"}supportsCallout(){return!0}hasVisibleCallout(){return Object(u.c)(this)}hasVisibleVerticalOffset(){return Object(u.d)(this)}clone(){return new r({styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail),callout:Object(n.a)(this.callout),verticalOffset:Object(n.a)(this.verticalOffset)})}static fromTextSymbol(t){return new r({symbolLayers:[p.a.fromTextSymbol(t)]})}}
Object(i.a)([Object(a.b)({type:y.a,json:{write:!0}})],d.prototype,"verticalOffset",void 0),Object(i.a)([Object(a.b)(u.a)],d.prototype,"callout",void 0),Object(i.a)([Object(a.b)({json:{read:!1,write:!1}})],d.prototype,"styleOrigin",void 0),Object(i.a)([Object(a.b)({type:h})],d.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({LabelSymbol3D:"label-3d"},{readOnly:!0})],d.prototype,"type",void 0),d=r=Object(i.a)([Object(c.a)("esri.symbols.LabelSymbol3D")],d)
const j=d},1473:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(856),s=o(878),n=o(178),a=o(858),l=(o(859),o(868)),c=o(857),b=o(2033),p=o(2050),u=o(1415)
const y=s.a.ofType({base:null,key:"type",typeMap:{line:b.a,path:p.a}}),h=s.a.ofType({base:null,key:"type",typeMap:{line:b.a,path:p.a}})
let d=r=class extends u.a{constructor(t){super(t),this.symbolLayers=new y,this.type="line-3d"}clone(){return new r({styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail)})}static fromSimpleLineSymbol(t){return new r({symbolLayers:[b.a.fromSimpleLineSymbol(t)]})}}
Object(i.a)([Object(a.b)({type:y,json:{type:h}})],d.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({LineSymbol3D:"line-3d"},{readOnly:!0})],d.prototype,"type",void 0),d=r=Object(i.a)([Object(c.a)("esri.symbols.LineSymbol3D")],d)
const j=d},1516:function(t,e,o){"use strict"
o.d(e,"a",(function(){return x}))
var r,i=o(856),s=o(178),n=o(20),a=o(858),l=(o(859),o(868)),c=o(857),b=o(864),p=o(2049),u=o(1671),y=o(1559),h=o(873),d=o(860)
let j=r=class extends d.a{constructor(){super(...arguments),this.color=new h.a([0,0,0,1]),this.size=0}clone(){const t={color:Object(s.a)(this.color),size:this.size}
return new r(t)}}
Object(i.a)([Object(a.b)(y.a)],j.prototype,"color",void 0),Object(i.a)([Object(a.b)(y.b)],j.prototype,"size",void 0),j=r=Object(i.a)([Object(c.a)("esri.symbols.support.Symbol3DHalo")],j)
var O=o(1471),m=o(954)
o(353),o(77)
let f=class extends(Object(m.a)(d.a)){constructor(t){super(t),this.color=null}}
Object(i.a)([Object(a.b)(y.a)],f.prototype,"color",void 0),f=Object(i.a)([Object(c.a)("esri.symbols.support.Symbol3DTextBackground")],f)
var v,w=o(2116)
let g=v=class extends u.a{constructor(t){super(t),this._userSize=void 0,this.halo=null,this.horizontalAlignment="center",this.lineHeight=1,this.material=null,this.background=null,this.text=null,this.type="text",this.verticalAlignment="baseline"}get font(){return this._get("font")||null}set font(t){Object(n.k)(t)&&Object(n.k)(this._userSize)&&(t.size=this._userSize),this._set("font",t)}writeFont(t,e,o,r){const i={...r,textSymbol3D:!0}
e.font=t.write({},i),delete e.font.size}get size(){return Object(n.k)(this._userSize)?this._userSize:Object(n.k)(this.font)&&null!=this.font.size?this.font.size:9}set size(t){this._userSize=t,Object(n.k)(this.font)&&(this.font.size=this._userSize),this.notifyChange("size")}clone(){const t=new v({enabled:this.enabled,font:this.font&&Object(s.a)(this.font),halo:this.halo&&Object(s.a)(this.halo),horizontalAlignment:this.horizontalAlignment,lineHeight:this.lineHeight,material:Object(n.k)(this.material)?this.material.clone():null,text:this.text,verticalAlignment:this.verticalAlignment,background:Object(s.a)(this.background)})
return t._userSize=this._userSize,t}static fromTextSymbol(t){return new v({font:Object(n.k)(t.font)?t.font.clone():new p.a,halo:S(t.haloColor,t.haloSize),horizontalAlignment:t.horizontalAlignment,lineHeight:t.lineHeight,material:t.color?new O.a({color:t.color.clone()}):null,text:t.text,verticalAlignment:t.verticalAlignment,background:t.backgroundColor?new f({color:t.backgroundColor.clone()}):null})}}
function S(t,e){return t&&e>0?new j({color:Object(s.a)(t),size:e}):null}Object(i.a)([Object(a.b)({type:p.a,json:{write:!0}})],g.prototype,"font",null),Object(i.a)([Object(b.a)("font")],g.prototype,"writeFont",null),Object(i.a)([Object(a.b)({type:j,json:{write:!0}})],g.prototype,"halo",void 0),Object(i.a)([Object(a.b)({...w.e,json:{default:"center",write:!0}})],g.prototype,"horizontalAlignment",void 0),Object(i.a)([Object(a.b)({...w.f,json:{default:1,write:!0}})],g.prototype,"lineHeight",void 0),Object(i.a)([Object(a.b)({type:O.a,json:{write:!0}})],g.prototype,"material",void 0),Object(i.a)([Object(a.b)({type:f,json:{write:!0}})],g.prototype,"background",void 0),Object(i.a)([Object(a.b)(y.b)],g.prototype,"size",null),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],g.prototype,"text",void 0),Object(i.a)([Object(l.a)({Text:"text"},{readOnly:!0})],g.prototype,"type",void 0),Object(i.a)([Object(a.b)({...w.g,json:{default:"baseline",write:!0}})],g.prototype,"verticalAlignment",void 0),g=v=Object(i.a)([Object(c.a)("esri.symbols.TextSymbol3DLayer")],g)
const x=g},1559:function(t,e,o){"use strict"
o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return l}))
var r=o(873),i=o(876),s=o(859),n=o(1076)
const a={type:r.a,json:{type:[s.a],default:null,read:{source:["color","transparency"],reader:function(t,e){const o=null!=e.transparency?Object(n.b)(e.transparency):1,i=e.color
return i&&Array.isArray(i)?new r.a([i[0]||0,i[1]||0,i[2]||0,o]):null}},write:{target:{color:{type:[s.a]},transparency:{type:s.a}},writer:function(t,e){e.color=t.toJSON().slice(0,3)
const o=Object(n.a)(t.a)
0!==o&&(e.transparency=o)}}}},l={type:Number,cast:i.k,json:{write:!0}}},1608:function(t,e,o){"use strict"
o.d(e,"a",(function(){return L}))
var r,i=o(856),s=o(20),n=o(858),a=(o(353),o(77),o(859),o(868)),l=o(857),c=o(1671),b=o(2205),p=o(2206),u=o(2264),y=o(2114),h=o(2115),d=(o(177),o(962),o(1471))
let j=r=class extends d.a{constructor(t){super(t),this.colorMixMode=null}clone(){const t={color:Object(s.k)(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode}
return new r(t)}}
Object(i.a)([Object(a.a)({multiply:"multiply",replace:"replace",tint:"tint"})],j.prototype,"colorMixMode",void 0),j=r=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DFillMaterial")],j)
var O,m=o(873),f=o(860),v=o(876),w=o(1559),g=o(1846)
let S=O=class extends f.a{constructor(t){super(t),this.color=new m.a([0,0,0,1]),this.size=Object(v.i)(1),this.pattern=null,this.patternCap="butt"}clone(){const t={color:Object(s.k)(this.color)?this.color.clone():null,size:this.size,pattern:Object(s.k)(this.pattern)?this.pattern.clone():null,patternCap:this.patternCap}
return new O(t)}}
var x
Object(i.a)([Object(n.b)(w.a)],S.prototype,"color",void 0),Object(i.a)([Object(n.b)(w.b)],S.prototype,"size",void 0),Object(i.a)([Object(n.b)(y.a)],S.prototype,"pattern",void 0),Object(i.a)([Object(n.b)({type:g.a,json:{default:"butt",write:{overridePolicy(){return{enabled:Object(s.k)(this.pattern)}}}}})],S.prototype,"patternCap",void 0),S=O=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DOutline")],S)
let k=x=class extends c.a{constructor(t){super(t),this.type="fill",this.material=null,this.pattern=null,this.castShadows=!0,this.outline=null,this.edges=null}clone(){const t={edges:Object(s.k)(this.edges)?this.edges.clone():null,enabled:this.enabled,material:Object(s.k)(this.material)?this.material.clone():null,pattern:Object(s.k)(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:Object(s.k)(this.outline)?this.outline.clone():null}
return new x(t)}static fromSimpleFillSymbol(t){var e,o,r,i,s,n
const a=t.outline&&t.outline.style&&"inside-frame"!==t.outline.style&&"solid"!==t.outline.style?new p.a({style:t.outline.style}):null,l={size:null!=(e=null==(o=t.outline)?void 0:o.width)?e:0,color:(null!=(r=null==(i=t.outline)?void 0:i.color)?r:h.c).clone(),pattern:a}
return a&&null!=(s=t.outline)&&s.cap&&(l.patternCap=t.outline.cap),new x({material:new j({color:(null!=(n=t.color)?n:h.b).clone()}),pattern:t.style&&"solid"!==t.style?new u.a({style:t.style}):null,outline:l})}}
Object(i.a)([Object(a.a)({Fill:"fill"},{readOnly:!0})],k.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:j,json:{write:!0}})],k.prototype,"material",void 0),Object(i.a)([Object(n.b)(y.b)],k.prototype,"pattern",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],k.prototype,"castShadows",void 0),Object(i.a)([Object(n.b)({type:S,json:{write:!0}})],k.prototype,"outline",void 0),Object(i.a)([Object(n.b)(b.a)],k.prototype,"edges",void 0),k=x=Object(i.a)([Object(l.a)("esri.symbols.FillSymbol3DLayer")],k)
const L=k},1612:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return n})),o.d(e,"d",(function(){return s})),o.d(e,"e",(function(){return l}))
var r=o(2220),i=o(2117)
function s(t){if(!t)return!1
const e=t.verticalOffset
return!!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function n(t){if(!t)return!1
if(!t.supportsCallout||!t.supportsCallout())return!1
const e=t.callout
return!!e&&!!e.visible&&!!s(t)}function a(t){return"point-3d"===t.type||"label-3d"===t.type}function l(t){const{horizontalAlignment:e}=t
return"center"===e||"justify"===e}const c={types:{key:"type",base:r.a,typeMap:{line:i.a}},json:{write:!0}}},1671:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r=o(856),i=o(860),s=o(858),n=(o(353),o(77),o(859),o(857)),a=o(864)
let l=class extends i.a{constructor(t){super(t),this.enabled=!0,this.type=null}writeEnabled(t,e,o){t||(e[o]=t)}}
Object(r.a)([Object(s.b)({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],l.prototype,"enabled",void 0),Object(r.a)([Object(a.a)("enabled")],l.prototype,"writeEnabled",null),Object(r.a)([Object(s.b)({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],l.prototype,"type",void 0),l=Object(r.a)([Object(n.a)("esri.symbols.Symbol3DLayer")],l)
const c=l},1709:function(t,e,o){"use strict"
o.d(e,"a",(function(){return u})),o.d(e,"b",(function(){return y}))
var r,i=o(856),s=o(863),n=o(860),a=o(858),l=(o(353),o(77),o(859),o(868)),c=o(857),b=o(936)
const p=Object(s.b)()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"})
let u=r=class extends n.a{clone(){return new r({href:this.href,primitive:this.primitive})}}
Object(i.a)([Object(a.b)({type:String,json:{read:b.e,write:b.g}})],u.prototype,"href",void 0),Object(i.a)([Object(l.a)(p)],u.prototype,"primitive",void 0),u=r=Object(i.a)([Object(c.a)("esri.symbols.support.ObjectSymbol3DLayerResource")],u)
const y="sphere"},1846:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b})),o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return c})),o.d(e,"d",(function(){return s})),o.d(e,"e",(function(){return p})),o(77)
var r=o(867),i=o(927)
function s(t,{isPrimitive:e,width:o,depth:i,height:s}){const n=e?10:1
if(null==o&&null==s&&null==i)return[n*t[0],n*t[1],n*t[2]]
const a=Object(r.h)(o,i,s)
let l
for(let e=0;e<3;e++){const o=a[e]
if(null!=o){l=o/t[e]
break}}for(let e=0;e<3;e++)null==a[e]&&(a[e]=t[e]*l)
return a}const n=Object(i.t)(-.5,-.5,-.5,.5,.5,.5),a=Object(i.t)(-.5,-.5,0,.5,.5,1),l=Object(i.t)(-.5,-.5,0,.5,.5,.5)
function c(t){switch(t){case"sphere":case"cube":case"diamond":return n
case"cylinder":case"cone":case"inverted-cone":return a
case"tetrahedron":return l
default:return}}const b=["butt","square","round"],p=[...b,"none"],u=["miter","bevel","round"]},1847:function(t,e,o){"use strict"
o.d(e,"a",(function(){return d})),o.d(e,"b",(function(){return j}))
var r,i=o(856),s=o(863),n=o(860),a=o(292),l=o(858),c=(o(353),o(77),o(859),o(868)),b=o(865),p=o(857),u=o(864),y=o(936)
const h=Object(s.b)()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"})
let d=r=class extends n.a{constructor(t){super(t)}readHref(t,e,o){return t?Object(y.b)(t,o):e.dataURI}writeHref(t,e,o,r){t&&(Object(a.w)(t)?e.dataURI=t:(e.href=Object(y.f)(t,r),Object(a.u)(e.href)&&(e.href=Object(a.F)(e.href))))}clone(){return new r({href:this.href,primitive:this.primitive})}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],d.prototype,"href",void 0),Object(i.a)([Object(b.a)("href")],d.prototype,"readHref",null),Object(i.a)([Object(u.a)("href",{href:{type:String},dataURI:{type:String}})],d.prototype,"writeHref",null),Object(i.a)([Object(c.a)(h)],d.prototype,"primitive",void 0),d=r=Object(i.a)([Object(p.a)("esri.symbols.support.IconSymbol3DLayerResource")],d)
const j="circle"},1915:function(t,e,o){"use strict"
o.d(e,"a",(function(){return D}))
var r,i=o(856),s=o(177),n=o(20),a=o(292),l=o(858),c=(o(353),o(77),o(859),o(868)),b=o(857),p=o(1671),u=o(2115),y=o(1847),h=o(1559),d=o(2219),j=o(873),O=o(860),m=o(876)
let f=r=class extends O.a{constructor(t){super(t),this.color=new j.a([0,0,0,1]),this.size=Object(m.i)(1)}clone(){const t={color:Object(n.k)(this.color)?this.color.clone():null,size:this.size}
return new r(t)}}
Object(i.a)([Object(l.b)(h.a)],f.prototype,"color",void 0),Object(i.a)([Object(l.b)(h.b)],f.prototype,"size",void 0),f=r=Object(i.a)([Object(b.a)("esri.symbols.support.Symbol3DIconOutline")],f)
var v,w=o(1471)
const g=s.a.getLogger("esri.symbols.IconSymbol3DLayer")
let S=v=class extends p.a{constructor(t){super(t),this.material=null,this.resource=null,this.type="icon",this.size=12,this.anchor="center",this.anchorPosition=void 0,this.outline=void 0}clone(){return new v({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:Object(n.k)(this.material)?this.material.clone():null,outline:Object(n.k)(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})}static fromSimpleMarkerSymbol(t){const e=t.color||u.c,o=x(t),r=t.outline&&t.outline.width>0?{size:t.outline.width,color:(t.outline.color||u.c).clone()}:null
return new v({size:t.size,resource:{primitive:z(t.style)},material:{color:e},outline:r,anchor:o?"relative":void 0,anchorPosition:o})}static fromPictureMarkerSymbol(t){const e=!t.color||Object(u.a)(t.color)?u.c:t.color,o=x(t)
return new v({size:t.width<=t.height?t.height:t.width,resource:{href:t.url},material:{color:e.clone()},anchor:o?"relative":void 0,anchorPosition:o})}static fromCIMSymbol(t){return new v({resource:{href:Object(a.D)({mediaType:"application/json",data:JSON.stringify(t.data)})}})}}
function x(t){const e="width"in t?t.width:t.size,o="height"in t?t.height:t.size,r=k(t.xoffset),i=k(t.yoffset)
return(r||i)&&e&&o?{x:-r/e,y:i/o}:null}function k(t){return isFinite(t)?t:0}Object(i.a)([Object(l.b)({type:w.a,json:{write:!0}})],S.prototype,"material",void 0),Object(i.a)([Object(l.b)({type:y.a,json:{write:!0}})],S.prototype,"resource",void 0),Object(i.a)([Object(c.a)({Icon:"icon"},{readOnly:!0})],S.prototype,"type",void 0),Object(i.a)([Object(l.b)(h.b)],S.prototype,"size",void 0),Object(i.a)([Object(c.a)({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),Object(l.b)({json:{default:"center"}})],S.prototype,"anchor",void 0),Object(i.a)([Object(l.b)({type:d.a,json:{type:[Number],read:{reader:t=>new d.a({x:t[0],y:t[1]})},write:{writer:(t,e)=>{e.anchorPosition=[t.x,t.y]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],S.prototype,"anchorPosition",void 0),Object(i.a)([Object(l.b)({type:f,json:{write:!0}})],S.prototype,"outline",void 0),S=v=Object(i.a)([Object(b.a)("esri.symbols.IconSymbol3DLayer")],S)
const L={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null}
function z(t){return L[t]||(g.warn(t+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}const D=S},1921:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r,i=o(856),s=o(862),n=o(858),a=(o(353),o(77),o(859),o(857))
let l=r=class extends s.a{clone(){return new r({url:this.url})}}
Object(i.a)([Object(n.b)({type:String})],l.prototype,"url",void 0),l=r=Object(i.a)([Object(a.a)("esri.symbols.support.Thumbnail")],l)},1960:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b}))
var r,i=o(856),s=o(862),n=o(858),a=(o(353),o(77),o(859),o(857)),l=o(914)
let c=r=class extends s.a{constructor(){super(...arguments),this.portal=null}clone(){return new r({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}}
Object(i.a)([Object(n.b)({type:String})],c.prototype,"name",void 0),Object(i.a)([Object(n.b)({type:String})],c.prototype,"styleUrl",void 0),Object(i.a)([Object(n.b)({type:String})],c.prototype,"styleName",void 0),Object(i.a)([Object(n.b)({type:l.a})],c.prototype,"portal",void 0),c=r=Object(i.a)([Object(a.a)("esri.symbols.support.StyleOrigin")],c)
const b=c},2033:function(t,e,o){"use strict"
o.d(e,"a",(function(){return k}))
var r=o(856),i=o(20),s=o(876),n=o(858),a=(o(353),o(77),o(859)),l=o(868),c=o(857),b=o(873),p=o(954),u=o(860),y=o(2216)
let h=class extends(Object(p.a)(u.a)){constructor(t){super(t),this.type="style",this.placement="begin-end",this.style="arrow",this.color=null}equals(t){return Object(i.k)(t)&&t.placement===this.placement&&t.style===this.style&&(Object(i.j)(this.color)&&Object(i.j)(t.color)||Object(i.k)(this.color)&&Object(i.k)(t.color)&&this.color.toJSON()===t.color.toJSON())}}
Object(r.a)([Object(n.b)({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],h.prototype,"type",void 0),Object(r.a)([Object(n.b)({type:y.a,json:{default:"begin-end",write:!0}})],h.prototype,"placement",void 0),Object(r.a)([Object(n.b)({type:y.b,json:{default:"arrow",write:!0}})],h.prototype,"style",void 0),Object(r.a)([Object(n.b)({type:b.a,json:{type:[a.a],default:null,write:!0}})],h.prototype,"color",void 0),h=Object(r.a)([Object(c.a)("esri.symbols.LineStyleMarker3D")],h)
const d=h
var j,O=o(1671),m=o(2206),f=o(2114),v=o(2115),w=o(1559),g=o(1471),S=o(1846)
let x=j=class extends O.a{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=Object(s.i)(1),this.pattern=null,this.marker=null}clone(){const t={enabled:this.enabled,material:Object(i.k)(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,pattern:Object(i.k)(this.pattern)?this.pattern.clone():null,marker:Object(i.k)(this.marker)?this.marker.clone():null}
return new j(t)}static fromSimpleLineSymbol(t){var e,o,r
const i={enabled:!0,size:null!=(e=t.width)?e:Object(s.i)(1),cap:t.cap||"butt",join:t.join||"miter",pattern:t.style&&"inside-frame"!==t.style?new m.a({style:t.style}):null,material:new g.a({color:(t.color||v.c).clone()}),marker:t.marker?new d({placement:t.marker.placement,style:t.marker.style,color:null!=(o=null==(r=t.marker.color)?void 0:r.clone())?o:null}):null}
return new j(i)}}
Object(r.a)([Object(n.b)({type:g.a,json:{write:!0}})],x.prototype,"material",void 0),Object(r.a)([Object(l.a)({Line:"line"},{readOnly:!0})],x.prototype,"type",void 0),Object(r.a)([Object(n.b)({type:S.b,json:{write:!0,default:"miter"}})],x.prototype,"join",void 0),Object(r.a)([Object(n.b)({type:S.a,json:{write:!0,default:"butt"}})],x.prototype,"cap",void 0),Object(r.a)([Object(n.b)(w.b)],x.prototype,"size",void 0),Object(r.a)([Object(n.b)(f.a)],x.prototype,"pattern",void 0),Object(r.a)([Object(n.b)({types:{key:"type",base:d,typeMap:{style:d}},json:{write:!0}})],x.prototype,"marker",void 0),x=j=Object(r.a)([Object(c.a)("esri.symbols.LineSymbol3DLayer")],x)
const k=x},2034:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(856),s=o(20),n=o(858),a=(o(353),o(77),o(859),o(868)),l=o(857),c=o(1671),b=o(1709),p=o(862)
let u=r=class extends p.a{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0}clone(){return new r({x:this.x,y:this.y,z:this.z})}}
Object(i.a)([Object(n.b)({type:Number})],u.prototype,"x",void 0),Object(i.a)([Object(n.b)({type:Number})],u.prototype,"y",void 0),Object(i.a)([Object(n.b)({type:Number})],u.prototype,"z",void 0),u=r=Object(i.a)([Object(l.a)("esri.symbols.support.Symbol3DAnchorPosition3D")],u)
var y,h=o(1471)
let d=y=class extends c.a{constructor(t){super(t),this.material=null,this.castShadows=!0,this.resource=null,this.type="object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.heading=void 0,this.tilt=void 0,this.roll=void 0}clone(){return new y({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:Object(s.k)(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})}get isPrimitive(){return!this.resource||"string"!=typeof this.resource.href}}
Object(i.a)([Object(n.b)({type:h.a,json:{write:!0}})],d.prototype,"material",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],d.prototype,"castShadows",void 0),Object(i.a)([Object(n.b)({type:b.a,json:{write:!0}})],d.prototype,"resource",void 0),Object(i.a)([Object(a.a)({Object:"object"},{readOnly:!0})],d.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"width",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"height",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"depth",void 0),Object(i.a)([Object(a.a)({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),Object(n.b)({json:{default:"origin"}})],d.prototype,"anchor",void 0),Object(i.a)([Object(n.b)({type:u,json:{type:[Number],read:{reader:t=>new u({x:t[0],y:t[1],z:t[2]})},write:{writer:(t,e)=>{e.anchorPosition=[t.x,t.y,t.z]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],d.prototype,"anchorPosition",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"heading",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"tilt",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],d.prototype,"roll",void 0),Object(i.a)([Object(n.b)({readOnly:!0})],d.prototype,"isPrimitive",null),d=y=Object(i.a)([Object(l.a)("esri.symbols.ObjectSymbol3DLayer")],d)
const j=d},2047:function(t,e,o){"use strict"
o.d(e,"a",(function(){return y}))
var r,i=o(856),s=o(20),n=o(858),a=(o(353),o(77),o(859),o(868)),l=o(857),c=o(1671),b=o(2205),p=o(1471)
let u=r=class extends c.a{constructor(t){super(t),this.type="extrude",this.size=1,this.material=null,this.castShadows=!0,this.edges=null}clone(){return new r({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:Object(s.k)(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})}}
Object(i.a)([Object(a.a)({Extrude:"extrude"},{readOnly:!0})],u.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],u.prototype,"size",void 0),Object(i.a)([Object(n.b)({type:p.a,json:{write:!0}})],u.prototype,"material",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],u.prototype,"castShadows",void 0),Object(i.a)([Object(n.b)(b.a)],u.prototype,"edges",void 0),u=r=Object(i.a)([Object(l.a)("esri.symbols.ExtrudeSymbol3DLayer")],u)
const y=u},2048:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r=o(856),i=o(858),s=(o(353),o(77),o(859),o(857)),n=o(1022),a=o(1048)
let l=class extends a.a{constructor(t){super(t),this.outline=null,this.type=null}hash(){return`${this.type}.${this.outline&&this.outline.hash()}`}}
Object(r.a)([Object(i.b)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":n.a}},json:{default:null,write:!0}})],l.prototype,"outline",void 0),Object(r.a)([Object(i.b)({type:["simple-fill","picture-fill"],readOnly:!0})],l.prototype,"type",void 0),l=Object(r.a)([Object(s.a)("esri.symbols.FillSymbol")],l)
const c=l},2049:function(t,e,o){"use strict"
o.d(e,"a",(function(){return u}))
var r,i=o(856),s=o(860),n=o(876),a=o(858),l=(o(353),o(77),o(880)),c=o(857),b=o(2116)
let p=r=class extends s.a{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(t){return Object(n.k)(t)}clone(){return new r({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}}
Object(i.a)([Object(a.b)({type:b.a,json:{default:"none",write:!0}})],p.prototype,"decoration",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"family",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{overridePolicy:(t,e,o)=>({enabled:!o||!o.textSymbol3D})}}})],p.prototype,"size",void 0),Object(i.a)([Object(l.a)("size")],p.prototype,"castSize",null),Object(i.a)([Object(a.b)({type:b.b,json:{default:"normal",write:!0}})],p.prototype,"style",void 0),Object(i.a)([Object(a.b)({type:b.c,json:{default:"normal",write:!0}})],p.prototype,"weight",void 0),p=r=Object(i.a)([Object(c.a)("esri.symbols.Font")],p)
const u=p},2050:function(t,e,o){"use strict"
o.d(e,"a",(function(){return h}))
var r,i=o(856),s=o(20),n=o(858),a=(o(353),o(77),o(859),o(868)),l=o(865),c=o(857),b=o(1671),p=o(1471),u=o(1846)
let y=r=class extends b.a{constructor(t){super(t),this.material=null,this.castShadows=!0,this.type="path",this.profile="circle",this.join="miter",this.cap="butt",this.width=void 0,this.height=void 0,this.anchor="center",this.profileRotation="all"}readWidth(t,e){return null!=t?t:null==e.height&&null!=e.size?e.size:void 0}readHeight(t,e){return null!=t?t:null==e.width&&null!=e.size?e.size:void 0}clone(){return new r({enabled:this.enabled,material:Object(s.k)(this.material)?this.material.clone():null,castShadows:this.castShadows,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})}}
Object(i.a)([Object(n.b)({type:p.a,json:{write:!0}})],y.prototype,"material",void 0),Object(i.a)([Object(n.b)({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],y.prototype,"castShadows",void 0),Object(i.a)([Object(a.a)({Path:"path"},{readOnly:!0})],y.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:["circle","quad"],json:{write:!0,default:"circle"}})],y.prototype,"profile",void 0),Object(i.a)([Object(n.b)({type:u.b,json:{write:!0,default:"miter"}})],y.prototype,"join",void 0),Object(i.a)([Object(n.b)({type:u.e,json:{write:!0,default:"butt"}})],y.prototype,"cap",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],y.prototype,"width",void 0),Object(i.a)([Object(l.a)("width",["width","size","height"])],y.prototype,"readWidth",null),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],y.prototype,"height",void 0),Object(i.a)([Object(l.a)("height",["height","size","width"])],y.prototype,"readHeight",null),Object(i.a)([Object(n.b)({type:["center","bottom","top"],json:{write:!0,default:"center"}})],y.prototype,"anchor",void 0),Object(i.a)([Object(n.b)({type:["heading","all"],json:{write:!0,default:"all"}})],y.prototype,"profileRotation",void 0),y=r=Object(i.a)([Object(c.a)("esri.symbols.PathSymbol3DLayer")],y)
const h=y},2051:function(t,e,o){"use strict"
o.d(e,"a",(function(){return h}))
var r,i=o(856),s=o(873),n=o(178),a=o(858),l=o(859),c=o(868),b=o(857),p=o(1671)
let u=r=class extends p.a{constructor(t){super(t),this.color=y.clone(),this.type="water",this.waterbodySize="medium",this.waveDirection=null,this.waveStrength="moderate"}clone(){return new r({color:Object(n.a)(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})}}
Object(i.a)([Object(a.b)({type:s.a,nonNullable:!0,json:{type:[l.a],write:(t,e,o)=>e[o]=t.toArray(s.a.AlphaMode.UNLESS_OPAQUE),default:()=>y.clone(),defaultEquals:t=>t.toCss(!0)===y.toCss(!0)}})],u.prototype,"color",void 0),Object(i.a)([Object(c.a)({Water:"water"},{readOnly:!0})],u.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:["small","medium","large"],json:{write:!0,default:"medium"}})],u.prototype,"waterbodySize",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0,default:null}})],u.prototype,"waveDirection",void 0),Object(i.a)([Object(a.b)({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],u.prototype,"waveStrength",void 0),u=r=Object(i.a)([Object(b.a)("esri.symbols.WaterSymbol3DLayer")],u)
const y=new s.a([0,119,190]),h=u},2052:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r=o(856),i=o(876),s=o(858),n=(o(353),o(77),o(859),o(857)),a=o(1048)
let l=class extends a.a{constructor(t){super(t),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}}
Object(r.a)([Object(s.b)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],l.prototype,"angle",void 0),Object(r.a)([Object(s.b)({type:["simple-marker","picture-marker"],readOnly:!0})],l.prototype,"type",void 0),Object(r.a)([Object(s.b)({type:Number,cast:i.k,json:{write:!0}})],l.prototype,"xoffset",void 0),Object(r.a)([Object(s.b)({type:Number,cast:i.k,json:{write:!0}})],l.prototype,"yoffset",void 0),Object(r.a)([Object(s.b)({type:Number,cast:t=>"auto"===t?t:Object(i.k)(t),json:{write:!0}})],l.prototype,"size",void 0),l=Object(r.a)([Object(n.a)("esri.symbols.MarkerSymbol")],l)
const c=l},2053:function(t,e,o){"use strict"
o.d(e,"a",(function(){return h}))
var r,i=o(856),s=o(878),n=o(178),a=o(858),l=(o(859),o(868)),c=o(857),b=o(1608),p=o(1415)
const u=s.a.ofType({base:null,key:"type",typeMap:{fill:b.a}})
let y=r=class extends p.a{constructor(t){super(t),this.symbolLayers=new u,this.type="mesh-3d"}clone(){return new r({styleOrigin:Object(n.a)(this.styleOrigin),symbolLayers:Object(n.a)(this.symbolLayers),thumbnail:Object(n.a)(this.thumbnail)})}}
Object(i.a)([Object(a.b)({type:u})],y.prototype,"symbolLayers",void 0),Object(i.a)([Object(l.a)({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],y.prototype,"type",void 0),y=r=Object(i.a)([Object(c.a)("esri.symbols.MeshSymbol3D")],y)
const h=y},2113:function(t,e,o){"use strict"
o.d(e,"a",(function(){return u}))
var r=o(856),i=o(873),s=o(860),n=o(178),a=o(876),l=o(858),c=(o(859),o(857)),b=o(1559)
let p=class extends s.a{constructor(t){super(t),this.color=new i.a([0,0,0,1]),this.extensionLength=0,this.size=Object(a.i)(1)}clone(){}cloneProperties(){return{color:Object(n.a)(this.color),size:this.size,extensionLength:this.extensionLength}}}
Object(r.a)([Object(l.b)({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],p.prototype,"type",void 0),Object(r.a)([Object(l.b)(b.a)],p.prototype,"color",void 0),Object(r.a)([Object(l.b)({...b.b,json:{write:{overridePolicy:t=>({enabled:!!t})}}})],p.prototype,"extensionLength",void 0),Object(r.a)([Object(l.b)(b.b)],p.prototype,"size",void 0),p=Object(r.a)([Object(c.a)("esri.symbols.edges.Edges3D")],p)
const u=p},2114:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l})),o.d(e,"b",(function(){return a}))
var r=o(2217),i=o(2206),s=o(2218),n=o(2264)
const a={types:{key:"type",base:s.a,typeMap:{style:n.a}},json:{write:!0}},l={types:{key:"type",base:r.a,typeMap:{style:i.a}},json:{write:!0}}},2115:function(t,e,o){"use strict"
o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return i}))
var r=o(873)
const i=new r.a("white"),s=(new r.a("black"),new r.a([255,255,255,0]))
function n(t){return 0===t.r&&0===t.g&&0===t.b}},2116:function(t,e,o){"use strict"
o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"d",(function(){return c})),o.d(e,"e",(function(){return b})),o.d(e,"f",(function(){return l})),o.d(e,"g",(function(){return p}))
var r=o(874),i=o(859)
const s=["none","underline","line-through"],n=["normal","italic","oblique"],a=["normal","lighter","bold","bolder"],l={type:Number,cast:t=>{const e=Object(i.i)(t)
return 0===e?1:Object(r.f)(e,.1,4)},nonNullable:!0},c={type:["left","right","center","justify"],nonNullable:!0},b={type:["left","right","center"],nonNullable:!0},p={type:["baseline","top","middle","bottom"],nonNullable:!0}},2117:function(t,e,o){"use strict"
o.d(e,"a",(function(){return j}))
var r,i=o(856),s=o(873),n=o(178),a=o(20),l=o(876),c=o(858),b=(o(859),o(868)),p=o(857),u=o(2220),y=o(2118),h=o(1559)
let d=r=class extends u.a{constructor(t){super(t),this.type="line",this.color=new s.a([0,0,0,1]),this.size=Object(l.i)(1),this.border=null}get visible(){return this.size>0&&Object(a.k)(this.color)&&this.color.a>0}clone(){return new r({color:Object(n.a)(this.color),size:this.size,border:Object(n.a)(this.border)})}}
Object(i.a)([Object(b.a)({line:"line"},{readOnly:!0})],d.prototype,"type",void 0),Object(i.a)([Object(c.b)(h.a)],d.prototype,"color",void 0),Object(i.a)([Object(c.b)(h.b)],d.prototype,"size",void 0),Object(i.a)([Object(c.b)({type:y.a,json:{write:!0}})],d.prototype,"border",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],d.prototype,"visible",null),d=r=Object(i.a)([Object(p.a)("esri.symbols.callouts.LineCallout3D")],d)
const j=d},2118:function(t,e,o){"use strict"
o.d(e,"a",(function(){return u}))
var r,i=o(856),s=o(873),n=o(860),a=o(178),l=o(858),c=(o(859),o(857)),b=o(1559)
let p=r=class extends n.a{constructor(){super(...arguments),this.color=new s.a("white")}clone(){return new r({color:Object(a.a)(this.color)})}}
Object(i.a)([Object(l.b)(b.a)],p.prototype,"color",void 0),p=r=Object(i.a)([Object(c.a)("esri.symbols.callouts.LineCallout3DBorder")],p)
const u=p
Object.freeze({__proto__:null,get LineCallout3DBorder(){return p},default:u})},2205:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var r,i=o(2113),s=o(856),n=(o(177),o(859),o(353),o(77),o(962),o(868)),a=o(857)
let l=r=class extends i.a{constructor(t){super(t),this.type="sketch"}clone(){return new r(this.cloneProperties())}}
Object(s.a)([Object(n.a)({sketch:"sketch"},{readOnly:!0})],l.prototype,"type",void 0),l=r=Object(s.a)([Object(a.a)("esri.symbols.edges.SketchEdges3D")],l)
const c=l
var b=o(2215)
const p={types:{key:"type",base:i.a,typeMap:{solid:b.a,sketch:c}},json:{write:!0}}},2206:function(t,e,o){"use strict"
o.d(e,"a",(function(){return u}))
var r,i=o(856),s=o(863),n=o(858),a=(o(353),o(77),o(859),o(868)),l=o(857),c=o(2217)
const b=Object(s.b)()({dash:"dash","dash-dot":"dash-dot","dash-dot-dot":"long-dash-dot-dot",dot:"dot","long-dash":"long-dash","long-dash-dot":"long-dash-dot",null:"none","short-dash":"short-dash","short-dash-dot":"short-dash-dot","short-dash-dot-dot":"short-dash-dot-dot","short-dot":"short-dot",solid:"solid"})
let p=r=class extends c.a{constructor(t){super(t),this.type="style",this.style="solid"}clone(){const t={style:this.style}
return new r(t)}}
Object(i.a)([Object(n.b)({type:["style"]})],p.prototype,"type",void 0),Object(i.a)([Object(a.a)(b),Object(n.b)({type:["dash","dash-dot","dot","long-dash","long-dash-dot","long-dash-dot-dot","none","short-dash","short-dash-dot","short-dash-dot-dot","short-dot","solid"]})],p.prototype,"style",void 0),p=r=Object(i.a)([Object(l.a)("esri.symbols.patterns.LineStylePattern3D")],p)
const u=p},2215:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r,i=o(856),s=(o(177),o(859),o(353),o(77),o(962),o(868)),n=o(857),a=o(2113)
let l=r=class extends a.a{constructor(t){super(t),this.type="solid"}clone(){return new r(this.cloneProperties())}}
Object(i.a)([Object(s.a)({solid:"solid"},{readOnly:!0})],l.prototype,"type",void 0),l=r=Object(i.a)([Object(n.a)("esri.symbols.support.SolidEdges3D")],l)
const c=l},2216:function(t,e,o){"use strict"
o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return i}))
const r=["begin","end","begin-end"],i=["arrow","circle","square","diamond","cross","x"]},2217:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r=o(856),i=o(860),s=o(858),n=(o(353),o(77),o(859),o(857))
let a=class extends i.a{constructor(t){super(t)}clone(){}}
Object(r.a)([Object(s.b)({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=Object(r.a)([Object(n.a)("esri.symbols.patterns.LinePattern3D")],a)
const l=a},2218:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r=o(856),i=o(860),s=o(858),n=(o(353),o(77),o(859),o(857))
let a=class extends i.a{constructor(t){super(t)}clone(){}}
Object(r.a)([Object(s.b)({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=Object(r.a)([Object(n.a)("esri.symbols.patterns.Pattern3D")],a)
const l=a},2219:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r,i=o(856),s=o(862),n=o(858),a=(o(353),o(77),o(859),o(857))
let l=r=class extends s.a{constructor(){super(...arguments),this.x=0,this.y=0}clone(){return new r({x:this.x,y:this.y})}}
Object(i.a)([Object(n.b)({type:Number})],l.prototype,"x",void 0),Object(i.a)([Object(n.b)({type:Number})],l.prototype,"y",void 0),l=r=Object(i.a)([Object(a.a)("esri.symbols.support.Symbol3DAnchorPosition2D")],l)},2220:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var r=o(856),i=o(860),s=o(858),n=(o(353),o(77),o(859),o(857))
let a=class extends i.a{constructor(t){super(t),this.visible=!0}clone(){}}
Object(r.a)([Object(s.b)({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],a.prototype,"visible",void 0),a=Object(r.a)([Object(n.a)("esri.symbols.callouts.Callout3D")],a)
const l=a},2221:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r,i=o(856),s=o(860),n=o(858),a=(o(353),o(77),o(859),o(857)),l=o(1559)
let c=r=class extends s.a{constructor(){super(...arguments),this.screenLength=0,this.minWorldLength=0}clone(){return new r({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}}
Object(i.a)([Object(n.b)(l.b)],c.prototype,"screenLength",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0,default:0}})],c.prototype,"minWorldLength",void 0),Object(i.a)([Object(n.b)({type:Number,json:{write:!0}})],c.prototype,"maxWorldLength",void 0),c=r=Object(i.a)([Object(a.a)("esri.symbols.support.Symbol3DVerticalOffset")],c)},2222:function(t,e,o){"use strict"
o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return n}))
var r=o(292),i=o(936)
function s(t,e){return function(t){return t&&("service"===t.origin||"portal-item"===t.origin)&&t.layer&&("feature"===t.layer.type||"stream"===t.layer.type)}(e)&&!Object(r.u)(t)&&e.layer.parsedUrl?Object(r.B)(e.layer.parsedUrl.path,"images",t):Object(i.b)(t,e)}const n={json:{read:{source:["imageData","url"],reader:function(t,e,o){return e.imageData?Object(r.D)({mediaType:e.contentType||"image/png",isBase64:!0,data:e.imageData}):s(e.url,o)}},write:{writer(t,e,o,s){!function(t,e,o,s){if(Object(r.w)(t)){const n=Object(r.h)(t)
e.contentType=n.mediaType,e.imageData=n.data,o&&o.imageData===e.imageData&&o.url&&Object(i.g)(o.url,e,"url",s)}else Object(i.g)(t,e,"url",s)}(t,e,this.source,s)}}}},a={readOnly:!0,json:{read:{source:["imageData","url"],reader(t,e,o){const r={}
return e.imageData&&(r.imageData=e.imageData),e.contentType&&(r.contentType=e.contentType),e.url&&(r.url=s(e.url,o)),r}}}}},2264:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var r,i=o(856),s=o(858),n=(o(353),o(77),o(859),o(857)),a=o(2218)
let l=r=class extends a.a{constructor(t){super(t),this.type="style",this.style="solid"}clone(){const t={style:this.style}
return new r(t)}}
Object(i.a)([Object(s.b)({type:["style"]})],l.prototype,"type",void 0),Object(i.a)([Object(s.b)({type:["backward-diagonal","cross","diagonal-cross","forward-diagonal","horizontal","none","solid","vertical"],json:{read:!0,write:!0}})],l.prototype,"style",void 0),l=r=Object(i.a)([Object(n.a)("esri.symbols.patterns.StylePattern3D")],l)
const c=l},668:function(t,e,o){"use strict"
o.r(e),o.d(e,"default",(function(){return d}))
var r,i=o(856),s=o(178),n=o(355),a=o(858),l=(o(859),o(868)),c=o(865),b=o(857),p=o(864),u=o(881),y=o(1048)
let h=r=class extends y.a{constructor(t){super(t),this.data=null,this.type="cim"}readData(t,e){return e}writeData(t,e){if(t)for(const o in t)e[o]=t[o]}async collectRequiredFields(t,e){if("CIMSymbolReference"===this.data.type){const o=this.data.primitiveOverrides
if(o){const r=o.map(o=>{const r=o.valueExpressionInfo
return Object(u.a)(t,e,r.expression)})
await Promise.all(r)}}}clone(){return new r({data:Object(s.a)(this.data)})}hash(){return Object(n.b)(JSON.stringify(this.data)).toString()}}
Object(i.a)([Object(a.b)({json:{write:!1}})],h.prototype,"color",void 0),Object(i.a)([Object(a.b)({json:{write:!0}})],h.prototype,"data",void 0),Object(i.a)([Object(c.a)("data",["symbol"])],h.prototype,"readData",null),Object(i.a)([Object(p.a)("data",{})],h.prototype,"writeData",null),Object(i.a)([Object(l.a)({CIMSymbolReference:"cim"},{readOnly:!0})],h.prototype,"type",void 0),h=r=Object(i.a)([Object(b.a)("esri.symbols.CIMSymbol")],h)
const d=h},906:function(t,e,o){"use strict"
o.d(e,"a",(function(){return U})),o.d(e,"b",(function(){return N})),o.d(e,"c",(function(){return C})),o.d(e,"d",(function(){return A})),o.d(e,"e",(function(){return M})),o.d(e,"f",(function(){return $})),o.d(e,"g",(function(){return _})),o.d(e,"h",(function(){return F})),o.d(e,"i",(function(){return P})),o.d(e,"j",(function(){return T}))
var r,i=o(859),s=o(1015),n=o(668),a=(o(2047),o(2048)),l=(o(1608),o(2049),o(1915),o(1472)),c=o(1473),b=(o(2033),o(2052),o(2053)),p=(o(2034),o(2050),o(856)),u=o(178),y=o(876),h=o(858),d=o(868),j=o(857),O=o(2222)
let m=r=class extends a.a{constructor(...t){super(...t),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null}normalizeCtorArgs(t,e,o,r){if(t&&"string"!=typeof t&&null==t.imageData)return t
const i={}
return t&&(i.url=t),e&&(i.outline=e),null!=o&&(i.width=Object(y.k)(o)),null!=r&&(i.height=Object(y.k)(r)),i}clone(){const t=new r({color:Object(u.a)(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale})
return t._set("source",Object(u.a)(this.source)),t}hash(){var t
return`${super.hash()}.${null==(t=this.color)?void 0:t.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}}
Object(p.a)([Object(d.a)({esriPFS:"picture-fill"},{readOnly:!0})],m.prototype,"type",void 0),Object(p.a)([Object(h.b)(O.b)],m.prototype,"url",void 0),Object(p.a)([Object(h.b)({type:Number,json:{write:!0}})],m.prototype,"xscale",void 0),Object(p.a)([Object(h.b)({type:Number,json:{write:!0}})],m.prototype,"yscale",void 0),Object(p.a)([Object(h.b)({type:Number,cast:y.k,json:{write:!0}})],m.prototype,"width",void 0),Object(p.a)([Object(h.b)({type:Number,cast:y.k,json:{write:!0}})],m.prototype,"height",void 0),Object(p.a)([Object(h.b)({type:Number,cast:y.k,json:{write:!0}})],m.prototype,"xoffset",void 0),Object(p.a)([Object(h.b)({type:Number,cast:y.k,json:{write:!0}})],m.prototype,"yoffset",void 0),Object(p.a)([Object(h.b)(O.a)],m.prototype,"source",void 0),m=r=Object(p.a)([Object(j.a)("esri.symbols.PictureFillSymbol")],m)
const f=m
var v=o(1373),w=o(1282),g=o(1208),S=o(1014),x=o(1022),k=o(1105),L=o(1048),z=(o(1415),o(1671),o(1142)),D=(o(1516),o(2051),o(1166))
function N(t){if(!t)return!1
switch(t.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return!0
default:return!1}}function C(t){if(!t)return!1
switch(t.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return!0
default:return!1}}o(2117),o(2118)
const M={base:L.a,key:"type",typeMap:{"simple-fill":S.a,"picture-fill":f,"picture-marker":v.a,"simple-line":x.a,"simple-marker":k.a,text:z.a,"label-3d":l.a,"line-3d":c.a,"mesh-3d":b.a,"point-3d":w.a,"polygon-3d":g.a,"web-style":D.a,cim:n.default},errorContext:"symbol"},$={base:L.a,key:"type",typeMap:{"picture-marker":v.a,"simple-marker":k.a,text:z.a,"web-style":D.a,cim:n.default},errorContext:"symbol"},A=Object(s.b)({types:M}),P={base:L.a,key:"type",typeMap:{"simple-fill":S.a,"picture-fill":f,"picture-marker":v.a,"simple-line":x.a,"simple-marker":k.a,text:z.a,"line-3d":c.a,"mesh-3d":b.a,"point-3d":w.a,"polygon-3d":g.a,"web-style":D.a,cim:n.default},errorContext:"symbol"},_={base:L.a,key:"type",typeMap:{text:z.a,"label-3d":l.a},errorContext:"symbol"},T=(L.a,l.a,c.a,b.a,w.a,g.a,D.a,{base:L.a,key:"type",typeMap:{"line-3d":c.a,"mesh-3d":b.a,"point-3d":w.a,"polygon-3d":g.a,"web-style":D.a,cim:n.default},errorContext:"symbol"}),F={base:L.a,key:"type",typeMap:{"label-3d":l.a},errorContext:"symbol"},U=Object(i.k)(M)},954:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var r=o(856),i=o(862),s=(o(77),o(178)),n=o(177),a=o(20),l=o(913),c=o(920),b=o(857)
n.a.getLogger("esri.core.Clonable")
const p=t=>{let e=class extends t{clone(){const t=Object(a.v)(Object(c.a)(this),"unable to clone instance of non-accessor class"),e=t.metadatas,o=t.store,r={},i=new Map
for(const t in e){const n=e[t],a=null==o?void 0:o.originOf(t),c=n.clonable
if(n.readOnly||!1===c||a!==l.a.USER&&a!==l.a.DEFAULTS&&a!==l.a.WEB_MAP&&a!==l.a.WEB_SCENE)continue
const b=this[t]
let p=null
p="function"==typeof c?c(b):"reference"===c?b:Object(s.d)(b),null!=b&&null==p||(a===l.a.DEFAULTS?i.set(t,p):r[t]=p)}const n=new(0,Object.getPrototypeOf(this).constructor)(r)
if(i.size){var b
const t=null==(b=Object(c.a)(n))?void 0:b.store
if(t)for(const[e,o]of i)t.set(e,o,l.a.DEFAULTS)}return n}}
return e=Object(r.a)([Object(b.a)("esri.core.Clonable")],e),e}
let u=class extends(p(i.a)){}
u=Object(r.a)([Object(b.a)("esri.core.Clonable")],u)}}])
