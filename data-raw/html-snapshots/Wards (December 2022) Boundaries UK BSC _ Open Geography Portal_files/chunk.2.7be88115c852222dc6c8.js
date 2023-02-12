(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[2],{1010:function(t,e,o){"use strict"
o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return n}))
var i=o(856),s=o(857)
let r=0
const n=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+r++})}}
return e=Object(i.a)([Object(s.a)("esri.core.Identifiable")],e),e}
let a=class extends(n(class{})){}
a=Object(i.a)([Object(s.a)("esri.core.Identifiable")],a)},1173:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var i=o(856),s=o(860),r=o(858),n=(o(353),o(77),o(859),o(857))
let a=class extends s.a{constructor(t){super(t),this.type=null}}
Object(i.a)([Object(r.b)({type:["attachments","custom","fields","media","text","expression"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=Object(i.a)([Object(n.a)("esri.popup.content.Content")],a)
const c=a},1174:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(1173)
let c=i=class extends a.a{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new i({text:this.text})}}
Object(s.a)([Object(r.b)({type:String,json:{write:!0}})],c.prototype,"text",void 0),Object(s.a)([Object(r.b)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=i=Object(s.a)([Object(n.a)("esri.popup.content.TextContent")],c)
const l=c},1189:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b}))
var i,s=o(856),r=o(863),n=o(860),a=o(178),c=o(858),l=(o(859),o(868)),p=o(857),d=o(1264)
let u=i=class extends n.a{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new i({fieldName:this.fieldName,format:this.format?Object(a.a)(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}}
Object(s.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"fieldName",void 0),Object(s.a)([Object(c.b)({type:d.a,json:{write:!0}})],u.prototype,"format",void 0),Object(s.a)([Object(c.b)({type:Boolean,json:{write:!0,default:!1}})],u.prototype,"isEditable",void 0),Object(s.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"label",void 0),Object(s.a)([Object(l.a)(new r.a({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],u.prototype,"stringFieldOption",void 0),Object(s.a)([Object(c.b)({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],u.prototype,"statisticType",void 0),Object(s.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"tooltip",void 0),Object(s.a)([Object(c.b)({type:Boolean,json:{write:!0}})],u.prototype,"visible",void 0),u=i=Object(s.a)([Object(p.a)("esri.popup.FieldInfo")],u)
const b=u},1217:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(1173)
let c=i=class extends a.a{constructor(t){super(t),this.description=null,this.displayType="auto",this.title=null,this.type="attachments"}clone(){return new i({description:this.description,displayType:this.displayType,title:this.title})}}
Object(s.a)([Object(r.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(r.b)({type:["auto","preview","list"],json:{write:!0}})],c.prototype,"displayType",void 0),Object(s.a)([Object(r.b)({type:String,json:{write:!0}})],c.prototype,"title",void 0),Object(s.a)([Object(r.b)({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=i=Object(s.a)([Object(n.a)("esri.popup.content.AttachmentsContent")],c)
const l=c},1218:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(1848),c=o(1173)
let l=i=class extends c.a{constructor(t){super(t),this.expressionInfo=null,this.type="expression"}clone(){var t
return new i({expressionInfo:null==(t=this.expressionInfo)?void 0:t.clone()})}}
Object(s.a)([Object(r.b)({type:a.a,json:{write:!0}})],l.prototype,"expressionInfo",void 0),Object(s.a)([Object(r.b)({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=i=Object(s.a)([Object(n.a)("esri.popup.content.ExpressionContent")],l)
const p=l},1219:function(t,e,o){"use strict"
o.d(e,"a",(function(){return u}))
var i,s=o(856),r=o(178),n=o(858),a=(o(859),o(857)),c=o(864),l=o(1189),p=o(1173)
let d=i=class extends p.a{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,e){e.fieldInfos=t&&t.map(t=>t.toJSON())}clone(){return new i(Object(r.a)({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}}
Object(s.a)([Object(n.b)({type:Object,json:{write:!0}})],d.prototype,"attributes",void 0),Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],d.prototype,"description",void 0),Object(s.a)([Object(n.b)({type:[l.a]})],d.prototype,"fieldInfos",void 0),Object(s.a)([Object(c.a)("fieldInfos")],d.prototype,"writeFieldInfos",null),Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],d.prototype,"title",void 0),Object(s.a)([Object(n.b)({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=i=Object(s.a)([Object(a.a)("esri.popup.content.FieldsContent")],d)
const u=d},1220:function(t,e,o){"use strict"
o.d(e,"a",(function(){return f}))
var i,s=o(856),r=o(178),n=o(858),a=(o(859),o(865)),c=o(857),l=o(864),p=o(2223),d=o(2224),u=o(1173),b=o(2265),h=o(2225),y=o(2226),j=o(2227)
let O=i=class extends u.a{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map(t=>"image"===t.type?b.a.fromJSON(t):"barchart"===t.type?p.a.fromJSON(t):"columnchart"===t.type?d.a.fromJSON(t):"linechart"===t.type?h.a.fromJSON(t):"piechart"===t.type?y.a.fromJSON(t):void 0).filter(Boolean)}writeMediaInfos(t,e){e.mediaInfos=t&&t.map(t=>t.toJSON())}clone(){return new i(Object(r.a)({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}}
Object(s.a)([Object(n.b)()],O.prototype,"activeMediaInfoIndex",void 0),Object(s.a)([Object(n.b)({type:Object,json:{write:!0}})],O.prototype,"attributes",void 0),Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],O.prototype,"description",void 0),Object(s.a)([Object(n.b)({types:[j.a]})],O.prototype,"mediaInfos",void 0),Object(s.a)([Object(a.a)("mediaInfos")],O.prototype,"readMediaInfos",null),Object(s.a)([Object(l.a)("mediaInfos")],O.prototype,"writeMediaInfos",null),Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],O.prototype,"title",void 0),Object(s.a)([Object(n.b)({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=i=Object(s.a)([Object(c.a)("esri.popup.content.MediaContent")],O)
const f=O},1234:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var i,s=o(856),r=o(178),n=o(858),a=(o(859),o(857)),c=o(1173)
let l=i=class extends c.a{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new i({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?Object(r.a)(this.outFields):null})}}
Object(s.a)([Object(n.b)()],l.prototype,"creator",void 0),Object(s.a)([Object(n.b)()],l.prototype,"destroyer",void 0),Object(s.a)([Object(n.b)()],l.prototype,"outFields",void 0),Object(s.a)([Object(n.b)({type:["custom"],readOnly:!0})],l.prototype,"type",void 0),l=i=Object(s.a)([Object(a.a)("esri.popup.content.CustomContent")],l)
const p=l},1264:function(t,e,o){"use strict"
o.d(e,"a",(function(){return y}))
var i=o(856),s=o(863)
const r=Object(s.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"})
r.toJSON.bind(r),r.fromJSON.bind(r)
var n,a=o(860),c=o(858),l=(o(353),o(77),o(859)),p=o(868),d=o(857),u=o(922),b=o(921)
let h=n=class extends a.a{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new n({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?Object(u.b)(t,{...Object(u.a)(this.dateFormat),...this.dateTimeFormatOptions}):Object(b.b)(t,Object(b.a)(this))}}
Object(i.a)([Object(p.a)(r)],h.prototype,"dateFormat",void 0),Object(i.a)([Object(c.b)({type:Object,json:{read:!1}})],h.prototype,"dateTimeFormatOptions",void 0),Object(i.a)([Object(c.b)({type:Boolean,json:{write:!0}})],h.prototype,"digitSeparator",void 0),Object(i.a)([Object(c.b)({type:l.a,json:{write:!0}})],h.prototype,"places",void 0),h=n=Object(i.a)([Object(d.a)("esri.popup.support.FieldInfoFormat")],h)
const y=h},1519:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(860),n=o(858),a=(o(353),o(77),o(859),o(857))
let c=i=class extends r.a{constructor(t){super(t),this.field=null,this.order=null}clone(){return new i({field:this.field,order:this.order})}}
Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"field",void 0),Object(s.a)([Object(n.b)({type:["asc","desc"],json:{write:!0}})],c.prototype,"order",void 0),c=i=Object(s.a)([Object(a.a)("esri.popup.support.RelatedRecordsInfoFieldOrder")],c)
const l=c},1592:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(1735)
let c=i=class extends a.a{constructor(t){super(t),this.image=null,this.type="button"}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}}
Object(s.a)([Object(r.b)()],c.prototype,"image",void 0),c=i=Object(s.a)([Object(n.a)("esri.support.Action.ActionButton")],c)
const l=c},1735:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var i,s=o(856),r=o(862),n=o(1010),a=o(858),c=(o(353),o(77),o(859),o(857))
let l=i=class extends(Object(n.b)(r.a)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}}
Object(s.a)([Object(a.b)()],l.prototype,"active",void 0),Object(s.a)([Object(a.b)()],l.prototype,"className",void 0),Object(s.a)([Object(a.b)()],l.prototype,"disabled",void 0),Object(s.a)([Object(a.b)()],l.prototype,"id",void 0),Object(s.a)([Object(a.b)()],l.prototype,"indicator",void 0),Object(s.a)([Object(a.b)()],l.prototype,"title",void 0),Object(s.a)([Object(a.b)()],l.prototype,"type",void 0),Object(s.a)([Object(a.b)()],l.prototype,"visible",void 0),l=i=Object(s.a)([Object(c.a)("esri.support.actions.ActionBase")],l)
const p=l},1796:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(860),n=o(858),a=(o(353),o(77),o(859),o(857))
let c=i=class extends r.a{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new i({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}}
Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"name",void 0),Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"title",void 0),Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"expression",void 0),Object(s.a)([Object(n.b)({type:["string","number"],json:{write:!0}})],c.prototype,"returnType",void 0),c=i=Object(s.a)([Object(a.a)("esri.popup.ExpressionInfo")],c)
const l=c},1848:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(860),n=o(858),a=(o(353),o(77),o(859),o(857))
let c=i=class extends r.a{constructor(t){super(t),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new i({title:this.title,expression:this.expression})}}
Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"title",void 0),Object(s.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"expression",void 0),Object(s.a)([Object(n.b)({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"returnType",void 0),c=i=Object(s.a)([Object(a.a)("esri.popup.ElementExpressionInfo")],c)
const l=c},1849:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(862),n=o(858),a=(o(353),o(77),o(859),o(857))
let c=i=class extends r.a{constructor(t){super(t),this.tooltip=null,this.value=null}clone(){return new i({tooltip:this.tooltip,value:this.value})}}
Object(s.a)([Object(n.b)()],c.prototype,"tooltip",void 0),Object(s.a)([Object(n.b)()],c.prototype,"value",void 0),c=i=Object(s.a)([Object(a.a)("esri.popup.content.support.ChartMediaInfoValueSeries")],c)
const l=c},1850:function(t,e,o){"use strict"
o.d(e,"a",(function(){return l}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(1735)
let c=i=class extends a.a{constructor(t){super(t),this.image=null,this.type="toggle",this.value=!1}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}}
Object(s.a)([Object(r.b)()],c.prototype,"image",void 0),Object(s.a)([Object(r.b)()],c.prototype,"value",void 0),c=i=Object(s.a)([Object(n.a)("esri.support.Action.ActionToggle")],c)
const l=c},2054:function(t,e,o){"use strict"
o.d(e,"a",(function(){return s}))
var i=o(863)
const s=Object(i.b)()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"})},2103:function(t,e,o){"use strict"
o.d(e,"a",(function(){return h}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(2119),c=o(860),l=o(178),p=o(1849)
let d=i=class extends c.a{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new i({fields:Object(l.a)(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}}
Object(s.a)([Object(r.b)({type:[String],json:{write:!0}})],d.prototype,"fields",void 0),Object(s.a)([Object(r.b)({type:String,json:{write:!0}})],d.prototype,"normalizeField",void 0),Object(s.a)([Object(r.b)({type:[p.a],json:{read:!1}})],d.prototype,"series",void 0),Object(s.a)([Object(r.b)({type:String,json:{write:!0}})],d.prototype,"tooltipField",void 0),d=i=Object(s.a)([Object(n.a)("esri.popup.content.support.ChartMediaInfoValue")],d)
const u=d
let b=class extends a.a{constructor(t){super(t),this.type=null,this.value=null}}
Object(s.a)([Object(r.b)({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0),Object(s.a)([Object(r.b)({type:u,json:{write:!0}})],b.prototype,"value",void 0),b=Object(s.a)([Object(n.a)("esri.popup.content.mixins.ChartMediaInfo")],b)
const h=b},2119:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var i=o(856),s=o(860),r=o(858),n=(o(353),o(77),o(859),o(857))
let a=class extends s.a{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}}
Object(i.a)([Object(r.b)({type:String,json:{write:!0}})],a.prototype,"altText",void 0),Object(i.a)([Object(r.b)({type:String,json:{write:!0}})],a.prototype,"caption",void 0),Object(i.a)([Object(r.b)({type:String,json:{write:!0}})],a.prototype,"title",void 0),Object(i.a)([Object(r.b)({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=Object(i.a)([Object(n.a)("esri.popup.content.mixins.MediaInfo")],a)
const c=a},2223:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(2103),c=o(2054)
let l=i=class extends a.a{constructor(t){super(t),this.type="bar-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(s.a)([Object(r.b)({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=i=Object(s.a)([Object(n.a)("esri.popup.content.BarChartMediaInfo")],l)
const p=l},2224:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(2103),c=o(2054)
let l=i=class extends a.a{constructor(t){super(t),this.type="column-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(s.a)([Object(r.b)({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=i=Object(s.a)([Object(n.a)("esri.popup.content.ColumnChartMediaInfo")],l)
const p=l},2225:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(2103),c=o(2054)
let l=i=class extends a.a{constructor(t){super(t),this.type="line-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(s.a)([Object(r.b)({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=i=Object(s.a)([Object(n.a)("esri.popup.content.LineChartMediaInfo")],l)
const p=l},2226:function(t,e,o){"use strict"
o.d(e,"a",(function(){return p}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(2103),c=o(2054)
let l=i=class extends a.a{constructor(t){super(t),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}}
Object(s.a)([Object(r.b)({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:c.a.write}})],l.prototype,"type",void 0),l=i=Object(s.a)([Object(n.a)("esri.popup.content.PieChartMediaInfo")],l)
const p=l},2227:function(t,e,o){"use strict"
o.d(e,"a",(function(){return c}))
var i=o(2223),s=o(2224),r=o(2265),n=o(2225),a=o(2226)
const c={base:o(2119).a,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i.a,"column-chart":s.a,"line-chart":n.a,"pie-chart":a.a,image:r.a}}},2265:function(t,e,o){"use strict"
o.d(e,"a",(function(){return b}))
var i,s=o(856),r=o(858),n=(o(353),o(77),o(859),o(857)),a=o(2119),c=o(860)
let l=i=class extends c.a{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new i({linkURL:this.linkURL,sourceURL:this.sourceURL})}}
Object(s.a)([Object(r.b)({type:String,json:{write:!0}})],l.prototype,"linkURL",void 0),Object(s.a)([Object(r.b)({type:String,json:{write:!0}})],l.prototype,"sourceURL",void 0),l=i=Object(s.a)([Object(n.a)("esri.popup.content.support.ImageMediaInfoValue")],l)
const p=l
var d
let u=d=class extends a.a{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new d({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}}
Object(s.a)([Object(r.b)({type:Number,json:{write:!0}})],u.prototype,"refreshInterval",void 0),Object(s.a)([Object(r.b)({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),Object(s.a)([Object(r.b)({type:p,json:{write:!0}})],u.prototype,"value",void 0),u=d=Object(s.a)([Object(n.a)("esri.popup.content.ImageMediaInfo")],u)
const b=u},960:function(t,e,o){"use strict"
o.d(e,"a",(function(){return V}))
var i=o(856),s=o(878),r=o(860),n=o(178),a=o(177),c=o(861),l=o(858),p=o(880),d=o(865),u=o(857),b=o(864),h=o(859),y=o(881),j=o(1217),O=o(1173),f=o(1234),m=o(1218),v=o(1219),w=o(1220),x=o(1174)
const g={base:null,key:"type",typeMap:{attachment:j.a,media:w.a,text:x.a,expression:m.a,field:v.a}}
var I,F=o(1796),T=o(1189)
o(353),o(77)
let S=I=class extends r.a{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new I({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}}
Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],S.prototype,"returnTopmostRaster",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],S.prototype,"showNoDataRecords",void 0),S=I=Object(i.a)([Object(u.a)("esri.popup.LayerOptions")],S)
const N=S
var A,_=o(1519)
let E=A=class extends r.a{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new A({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?Object(n.a)(this.orderByFields):null})}}
Object(i.a)([Object(l.b)({type:Boolean,json:{write:!0}})],E.prototype,"showRelatedRecords",void 0),Object(i.a)([Object(l.b)({type:[_.a],json:{write:!0}})],E.prototype,"orderByFields",void 0),E=A=Object(i.a)([Object(u.a)("esri.popup.RelatedRecordsInfo")],E)
const M=E
var R,C=o(2227),L=o(1735),D=o(1592),J=o(1850)
const B=s.a.ofType({key:"type",defaultKeyValue:"button",base:L.a,typeMap:{button:D.a,toggle:J.a}}),k={base:O.a,key:"type",typeMap:{media:w.a,custom:f.a,text:x.a,attachments:j.a,fields:v.a,expression:m.a}},Y="esri.PopupTemplate",U=a.a.getLogger(Y),P=["attachments","fields","media","text","expression"]
let z=R=class extends r.a{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(t){return Array.isArray(t)?t.map(t=>Object(h.k)(k,t)):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||Object(c.o)(t)?t:(U.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e
return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,i){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter(t=>-1!==P.indexOf(t.type)).map(t=>t&&t.toJSON(i)),e.popupElements.forEach(t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e)})):e.description=t}writeFieldInfos(t,e,o,i){const{content:s}=this,r=Array.isArray(s)?s:null
if(t){const o=r?r.filter(t=>"fields"===t.type):[],s=o.length&&o.every(t=>{var e
return null==(e=t.fieldInfos)?void 0:e.length})
e.fieldInfos=t.filter(Boolean).map(t=>{const e=t.toJSON(i)
return s&&(e.visible=!1),e})}if(r)for(const t of r)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,o,i){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(i)}writeTitle(t,e){e.title=t||""}clone(){const{actions:t}=this,e=t?Object(n.a)(t.toArray()):[]
return new R({actions:e,content:Array.isArray(this.content)?Object(n.a)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?Object(n.a)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?Object(n.a)(this.fieldInfos):null,layerOptions:this.layerOptions?Object(n.a)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?Object(n.a)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?Object(n.a)(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){const o=this.expressionInfos||[]
await this._collectExpressionInfoFields(t,e,[...o,...this._getContentExpressionInfos(this.content,o)]),Object(y.e)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set
return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return
const o=Object(n.a)(t.fieldInfos)
Array.isArray(e.fieldInfos)?o.forEach(t=>{const o=e.fieldInfos.find(e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase())
o?o.visible=!0:e.fieldInfos.push(t)}):e.fieldInfos=o}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return
const o=Object(n.a)(t.mediaInfos)
Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const i={description:!1,mediaInfos:!1}
return o.map(o=>"media"===o.type?(o.mediaInfos||!e||i.mediaInfos||(o.mediaInfos=e,i.mediaInfos=!0),w.a.fromJSON(o)):"text"===o.type?(o.text||!t||i.description||(o.text=t,i.description=!0),x.a.fromJSON(o)):"attachments"===o.type?j.a.fromJSON(o):"fields"===o.type?v.a.fromJSON(o):"expression"===o.type?m.a.fromJSON(o):void 0).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const i=[]
return t?i.push(new x.a({text:t})):i.push(new v.a),Array.isArray(e)&&e.length&&i.push(w.a.fromJSON({mediaInfos:e})),o&&i.push(j.a.fromJSON({displayType:"auto"})),i.length?i:t}_getContentElementFields(t){const e=null==t?void 0:t.type
if("attachments"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)]
if("custom"===e)return t.outFields||[]
if("fields"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos||this.fieldInfos)]
if("media"===e){const e=t.mediaInfos||[]
return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...e.reduce((t,e)=>[...t,...this._getMediaInfoFields(e)],[])]}return"text"===e?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:e,title:o,value:i}=t,s=i||{},{fields:r=[],normalizeField:n,tooltipField:a,sourceURL:c,linkURL:l}=s,p=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(c),...this._extractFieldNames(l),...r]
return n&&p.push(n),a&&p.push(a),p}_getContentExpressionInfos(t,e){return Array.isArray(t)?t.reduce((t,e)=>[...t,..."expression"===e.type&&e.expressionInfo?[e.expressionInfo]:[]],e):[]}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce((t,e)=>[...t,...this._getContentElementFields(e)],[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map(o=>Object(y.a)(t,e,o.expression)))}_getFieldInfoFields(t){return t?t.filter(t=>void 0===t.visible||!!t.visible).map(t=>t.fieldName).filter(t=>-1===t.indexOf("relationships/")&&-1===t.indexOf("expression/")):[]}_getActionsFields(t){return t?t.toArray().reduce((t,e)=>[...t,...this._getActionFields(e)],[]):[]}_getActionFields(t){const{className:e,title:o,type:i}=t,s="button"===i||"toggle"===i?t.image:""
return[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(s)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[]
const e=t.match(/{[^}]*}/g)
if(!e)return[]
const o=/\{(\w+):.+\}/,i=e.filter(t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/"))).map(t=>t.replace(o,"{$1}"))
return i?i.map(t=>t.slice(1,-1)):[]}}
Object(i.a)([Object(l.b)({type:B})],z.prototype,"actions",void 0),Object(i.a)([Object(l.b)()],z.prototype,"content",void 0),Object(i.a)([Object(p.a)("content")],z.prototype,"castContent",null),Object(i.a)([Object(d.a)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],z.prototype,"readContent",null),Object(i.a)([Object(b.a)("content",{popupElements:{type:s.a.ofType(g)},showAttachments:{type:Boolean},mediaInfos:{type:s.a.ofType(C.a)},description:{type:String}})],z.prototype,"writeContent",null),Object(i.a)([Object(l.b)({type:[F.a],json:{write:!0}})],z.prototype,"expressionInfos",void 0),Object(i.a)([Object(l.b)({type:[T.a]})],z.prototype,"fieldInfos",void 0),Object(i.a)([Object(b.a)("fieldInfos")],z.prototype,"writeFieldInfos",null),Object(i.a)([Object(l.b)({type:N})],z.prototype,"layerOptions",void 0),Object(i.a)([Object(b.a)("layerOptions")],z.prototype,"writeLayerOptions",null),Object(i.a)([Object(l.b)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],z.prototype,"lastEditInfoEnabled",void 0),Object(i.a)([Object(l.b)()],z.prototype,"outFields",void 0),Object(i.a)([Object(l.b)()],z.prototype,"overwriteActions",void 0),Object(i.a)([Object(l.b)()],z.prototype,"returnGeometry",void 0),Object(i.a)([Object(l.b)({json:{type:String}})],z.prototype,"title",void 0),Object(i.a)([Object(b.a)("title")],z.prototype,"writeTitle",null),Object(i.a)([Object(l.b)({type:M,json:{write:!0}})],z.prototype,"relatedRecordsInfo",void 0),z=R=Object(i.a)([Object(u.a)(Y)],z)
const V=z}}])
