(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[101,5,12,18,23,27,110,147,193,205,228,235,245,262,263,278,337,342,381,489,490],{1002:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o}))
var r=n(20),i=n(961)
const s=-3
var o,a;(a=o||(o={}))[a.ALL=0]="ALL",a[a.SOME=1]="SOME"
class l{constructor(e,t,n){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",n&&(this._storage.registerRemoveFunc(this._namespace,n),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,n,r=0){this._storage.put(this._namespace+e,t,n,r)}get(e){const t=this._storage.get(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e)
return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,n){this._storage.updateSize(this._namespace+e,t,n)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class c{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i.a,this._users=new i.a}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,n,r){const i=this._db.get(e)
if(i&&(this._size-=i.size,this._db.delete(e),i.entry!==t&&this._notifyRemove(e,i.entry,o.ALL)),n>this._maxSize)return void this._notifyRemove(e,t,o.ALL)
if(void 0===t)return void console.warn("Refusing to cache undefined entry ")
if(!n||n<0)return void console.warn("Refusing to cache entry with invalid size "+n)
const a=1+Math.max(r,s)-s
this._db.set(e,{entry:t,size:n,lifetime:a,lives:a}),this._size+=n,this._checkSizeLimit()}updateSize(e,t,n){const i=this._db.get(e)
if(i&&i.entry===t){for(this._size-=i.size;n>this._maxSize;){const i=this._notifyRemove(e,t,o.SOME)
if(!(Object(r.k)(i)&&i>0))return void this._db.delete(e)
n=i}i.size=n,this._size+=n,this._checkSizeLimit()}}pop(e){const t=this._db.get(e)
if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e)
if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},n=new Array
this._db.forEach((e,r)=>{const i=e.lifetime
n[i]=(n[i]||0)+e.size,this._users.forAll(n=>{const i=n.namespace
if(r.startsWith(i)){const n=t[i]||0
t[i]=n+e.size}})})
const r={}
this._users.forAll(e=>{const n=e.namespace
if(!isNaN(e.hitRate)&&e.hitRate>0){const i=t[n]||0
t[n]=i,r[n]=Math.round(100*e.hitRate)+"%"}else r[n]="0%"})
const i=Object.keys(t)
i.sort((e,n)=>t[n]-t[e]),i.forEach(n=>e[n]=Math.round(t[n]/2**20)+"MB / "+r[n])
for(let t=n.length-1;t>=0;--t){const r=n[t]
r&&(e["Priority "+(t+s-1)]=Math.round(r/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){this._db.forEach((t,n)=>{n.startsWith(e)&&(this._size-=t.size,this._db.delete(n),this._notifyRemove(n,t.entry,o.ALL))})}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,o.ALL)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,n){let r
return this._removeFuncs.some(i=>{if(e.startsWith(i[0])){const e=i[1](t,n)
return"number"==typeof e&&(r=e),!0}return!1}),r}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size
const n=this._notifyRemove(e,t.entry,o.SOME)
Object(r.k)(n)&&n>0&&(this._size+=n,t.lives=t.lifetime,t.size=n,this._db.set(e,t))}else--t.lives,this._db.set(e,t)
if(this._size<=.9*this.maxSize)return}}}},1003:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r=n(856),i=n(862),s=n(885),o=n(20),a=n(892),l=n(948),c=n(858),u=n(857)
let d=class extends i.a{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new s.a,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,t,n={}){return this._installWatch(e,t,n,a.e)}addWhen(e,t,n={}){return this._installWatch(e,t,n,a.f)}addOnCollectionChange(e,t,{initial:n=!1}={}){const r=++this.handleId
return this.handles.add([Object(a.b)(e,"after-changes",this._createSyncUpdatingCallback(),a.c),Object(a.b)(e,"change",t,{onListenerAdd:n?e=>t({added:e.toArray(),removed:[]}):void 0})],r),{remove:()=>this.handles.remove(r)}}addPromise(e){if(Object(o.j)(e))return e
const t=++this.handleId
this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(h)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0)
const n=()=>this.handles.remove(t)
return e.then(n,n),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,n={},r){const i=++this.handleId
n.sync||this._installSyncUpdatingWatch(e,i)
const s=r(e,t,n)
return this.handles.add(s,i),{remove:()=>this.handles.remove(i)}}_installSyncUpdatingWatch(e,t){const n=this._createSyncUpdatingCallback(),r=Object(a.e)(e,n,{sync:!0,equals:()=>!1})
return this.handles.add(r,t),r}_createSyncUpdatingCallback(){return()=>{this.handles.remove(h),++this.scheduleHandleId
const e=this.scheduleHandleId
this._get("updating")||this._set("updating",!0),this.handles.add(Object(l.b)(()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(h))}),h)}}}
Object(r.a)([Object(c.b)({readOnly:!0})],d.prototype,"updating",void 0),d=Object(r.a)([Object(u.a)("esri.views.support.WatchUpdatingTracking")],d)
const h=-42
var f,p;(p=f||(f={}))[p.NONE=0]="NONE",p[p.SYNC=1]="SYNC",p[p.INIT=2]="INIT"},1012:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}))
var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}
function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}}).call(this,n(39))},1019:function(e,t,n){"use strict"
var r,i
function s(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function o(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?r.Expression:e.field&&"string"==typeof e.field?r.Field:r.Unknown}function l(e,t){const n=t||a(e),s=e.valueUnit||"unknown"
return n===r.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===s?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return o})),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(r||(r={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},1024:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r,i=n(856),s=n(178),o=n(858),a=(n(859),n(868)),l=n(857),c=n(911),u=n(965),d=n(1036)
let h=r=class extends(Object(u.a)(c.a)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(n=>n.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new r({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:Object(s.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(i.a)([Object(o.b)(d.b)],h.prototype,"symbol",void 0),Object(i.a)([Object(a.a)({simple:"simple"})],h.prototype,"type",void 0),h=r=Object(i.a)([Object(l.a)("esri.renderers.SimpleRenderer")],h)
const f=h},1027:function(e,t,n){"use strict"
let r
n.d(t,"a",(function(){return i}))
const i={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.1168,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:14,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9300:0,9354:0,9367:0,9373:0,9377:0,9387:0,9391:0,9456:0,9473:0,9498:0,9674:0,9678:0,9680:0,9709:0,9712:0,9713:0,9716:0,9741:0,9748:2,9749:2,9761:0,9766:0,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,29874:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:15,102069:16,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102759:1,102760:1,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102962:0,102963:0,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2}
for(r=2e3;r<=2045;r++)i[r]=0
for(r=2056;r<=2065;r++)i[r]=0
for(r=2067;r<=2135;r++)i[r]=0
for(r=2137;r<=2154;r++)i[r]=0
for(r=2161;r<=2170;r++)i[r]=0
for(r=2172;r<=2193;r++)i[r]=0
for(r=2195;r<=2198;r++)i[r]=0
for(r=2200;r<=2203;r++)i[r]=0
for(r=2205;r<=2217;r++)i[r]=0
for(r=2222;r<=2224;r++)i[r]=1
for(r=2225;r<=2250;r++)i[r]=2
for(r=2251;r<=2253;r++)i[r]=1
for(r=2257;r<=2264;r++)i[r]=2
for(r=2274;r<=2279;r++)i[r]=2
for(r=2280;r<=2282;r++)i[r]=1
for(r=2283;r<=2289;r++)i[r]=2
for(r=2290;r<=2292;r++)i[r]=0
for(r=2308;r<=2313;r++)i[r]=0
for(r=2315;r<=2491;r++)i[r]=0
for(r=2494;r<=2866;r++)i[r]=0
for(r=2867;r<=2869;r++)i[r]=1
for(r=2870;r<=2888;r++)i[r]=2
for(r=2891;r<=2895;r++)i[r]=2
for(r=2896;r<=2898;r++)i[r]=1
for(r=2902;r<=2908;r++)i[r]=2
for(r=2915;r<=2920;r++)i[r]=2
for(r=2921;r<=2923;r++)i[r]=1
for(r=2924;r<=2930;r++)i[r]=2
for(r=2931;r<=2962;r++)i[r]=0
for(r=2964;r<=2968;r++)i[r]=2
for(r=2969;r<=2973;r++)i[r]=0
for(r=2975;r<=2991;r++)i[r]=0
for(r=2995;r<=3051;r++)i[r]=0
for(r=3054;r<=3079;r++)i[r]=0
for(r=3081;r<=3088;r++)i[r]=0
for(r=3092;r<=3101;r++)i[r]=0
for(r=3106;r<=3138;r++)i[r]=0
for(r=3146;r<=3151;r++)i[r]=0
for(r=3153;r<=3166;r++)i[r]=0
for(r=3168;r<=3172;r++)i[r]=0
for(r=3174;r<=3203;r++)i[r]=0
for(r=3294;r<=3358;r++)i[r]=0
for(r=3367;r<=3403;r++)i[r]=0
for(r=3408;r<=3416;r++)i[r]=0
for(r=3417;r<=3438;r++)i[r]=2
for(r=3441;r<=3446;r++)i[r]=2
for(r=3447;r<=3450;r++)i[r]=0
for(r=3451;r<=3459;r++)i[r]=2
for(r=3460;r<=3478;r++)i[r]=0
for(r=3554;r<=3559;r++)i[r]=0
for(r=3560;r<=3570;r++)i[r]=2
for(r=3571;r<=3581;r++)i[r]=0
for(r=3594;r<=3597;r++)i[r]=0
for(r=3601;r<=3604;r++)i[r]=0
for(r=3637;r<=3639;r++)i[r]=0
for(r=3665;r<=3667;r++)i[r]=0
for(r=3693;r<=3695;r++)i[r]=0
for(r=3701;r<=3727;r++)i[r]=0
for(r=3728;r<=3739;r++)i[r]=2
for(r=3740;r<=3751;r++)i[r]=0
for(r=3753;r<=3760;r++)i[r]=2
for(r=3761;r<=3773;r++)i[r]=0
for(r=3775;r<=3777;r++)i[r]=0
for(r=3779;r<=3781;r++)i[r]=0
for(r=3783;r<=3785;r++)i[r]=0
for(r=3788;r<=3791;r++)i[r]=0
for(r=3797;r<=3802;r++)i[r]=0
for(r=3814;r<=3816;r++)i[r]=0
for(r=3825;r<=3829;r++)i[r]=0
for(r=3832;r<=3841;r++)i[r]=0
for(r=3844;r<=3852;r++)i[r]=0
for(r=3873;r<=3885;r++)i[r]=0
for(r=3890;r<=3893;r++)i[r]=0
for(r=3907;r<=3912;r++)i[r]=0
for(r=3942;r<=3950;r++)i[r]=0
for(r=3968;r<=3970;r++)i[r]=0
for(r=3973;r<=3976;r++)i[r]=0
for(r=3986;r<=3989;r++)i[r]=0
for(r=3994;r<=3997;r++)i[r]=0
for(r=4048;r<=4051;r++)i[r]=0
for(r=4056;r<=4063;r++)i[r]=0
for(r=4093;r<=4096;r++)i[r]=0
for(r=4390;r<=4398;r++)i[r]=0
for(r=4399;r<=4413;r++)i[r]=2
for(r=4418;r<=4433;r++)i[r]=2
for(r=4455;r<=4457;r++)i[r]=2
for(r=4484;r<=4489;r++)i[r]=0
for(r=4491;r<=4554;r++)i[r]=0
for(r=4568;r<=4589;r++)i[r]=0
for(r=4652;r<=4656;r++)i[r]=0
for(r=4766;r<=4800;r++)i[r]=0
for(r=5014;r<=5016;r++)i[r]=0
for(r=5069;r<=5072;r++)i[r]=0
for(r=5105;r<=5130;r++)i[r]=0
for(r=5173;r<=5188;r++)i[r]=0
for(r=5253;r<=5259;r++)i[r]=0
for(r=5269;r<=5275;r++)i[r]=0
for(r=5292;r<=5311;r++)i[r]=0
for(r=5329;r<=5331;r++)i[r]=0
for(r=5343;r<=5349;r++)i[r]=0
for(r=5355;r<=5357;r++)i[r]=0
for(r=5387;r<=5389;r++)i[r]=0
for(r=5459;r<=5463;r++)i[r]=0
for(r=5479;r<=5482;r++)i[r]=0
for(r=5518;r<=5520;r++)i[r]=0
for(r=5530;r<=5539;r++)i[r]=0
for(r=5550;r<=5552;r++)i[r]=0
for(r=5562;r<=5583;r++)i[r]=0
for(r=5623;r<=5625;r++)i[r]=2
for(r=5631;r<=5639;r++)i[r]=0
for(r=5649;r<=5653;r++)i[r]=0
for(r=5663;r<=5680;r++)i[r]=0
for(r=5682;r<=5685;r++)i[r]=0
for(r=5875;r<=5877;r++)i[r]=0
for(r=5896;r<=5899;r++)i[r]=0
for(r=5921;r<=5940;r++)i[r]=0
for(r=6050;r<=6125;r++)i[r]=0
for(r=6244;r<=6275;r++)i[r]=0
for(r=6328;r<=6348;r++)i[r]=0
for(r=6350;r<=6356;r++)i[r]=0
for(r=6366;r<=6372;r++)i[r]=0
for(r=6381;r<=6387;r++)i[r]=0
for(r=6393;r<=6404;r++)i[r]=0
for(r=6480;r<=6483;r++)i[r]=0
for(r=6511;r<=6514;r++)i[r]=0
for(r=6579;r<=6581;r++)i[r]=0
for(r=6619;r<=6624;r++)i[r]=0
for(r=6625;r<=6627;r++)i[r]=2
for(r=6628;r<=6632;r++)i[r]=0
for(r=6634;r<=6637;r++)i[r]=0
for(r=6669;r<=6692;r++)i[r]=0
for(r=6707;r<=6709;r++)i[r]=0
for(r=6720;r<=6723;r++)i[r]=0
for(r=6732;r<=6738;r++)i[r]=0
for(r=6931;r<=6933;r++)i[r]=0
for(r=6956;r<=6959;r++)i[r]=0
for(r=7005;r<=7007;r++)i[r]=0
for(r=7057;r<=7070;r++)i[r]=2
for(r=7074;r<=7082;r++)i[r]=0
for(r=7109;r<=7118;r++)i[r]=0
for(r=7119;r<=7127;r++)i[r]=1
for(r=7374;r<=7376;r++)i[r]=0
for(r=7528;r<=7586;r++)i[r]=0
for(r=7587;r<=7645;r++)i[r]=2
for(r=7692;r<=7696;r++)i[r]=0
for(r=7755;r<=7787;r++)i[r]=0
for(r=7791;r<=7795;r++)i[r]=0
for(r=7799;r<=7801;r++)i[r]=0
for(r=7803;r<=7805;r++)i[r]=0
for(r=7825;r<=7831;r++)i[r]=0
for(r=7845;r<=7859;r++)i[r]=0
for(r=8013;r<=8032;r++)i[r]=0
for(r=8065;r<=8068;r++)i[r]=1
for(r=8518;r<=8529;r++)i[r]=2
for(r=8533;r<=8536;r++)i[r]=2
for(r=8538;r<=8540;r++)i[r]=2
for(r=8677;r<=8679;r++)i[r]=0
for(r=8836;r<=8840;r++)i[r]=0
for(r=8857;r<=8859;r++)i[r]=0
for(r=8908;r<=8910;r++)i[r]=0
for(r=9154;r<=9159;r++)i[r]=0
for(r=9205;r<=9218;r++)i[r]=0
for(r=9271;r<=9273;r++)i[r]=0
for(r=9295;r<=9297;r++)i[r]=0
for(r=9356;r<=9360;r++)i[r]=0
for(r=9404;r<=9407;r++)i[r]=0
for(r=9476;r<=9482;r++)i[r]=0
for(r=9487;r<=9494;r++)i[r]=0
for(r=9697;r<=9699;r++)i[r]=0
for(r=20002;r<=20032;r++)i[r]=0
for(r=20062;r<=20092;r++)i[r]=0
for(r=20135;r<=20138;r++)i[r]=0
for(r=20248;r<=20258;r++)i[r]=0
for(r=20348;r<=20358;r++)i[r]=0
for(r=20436;r<=20440;r++)i[r]=0
for(r=20822;r<=20824;r++)i[r]=0
for(r=20904;r<=20932;r++)i[r]=0
for(r=20934;r<=20936;r++)i[r]=0
for(r=21004;r<=21032;r++)i[r]=0
for(r=21035;r<=21037;r++)i[r]=0
for(r=21095;r<=21097;r++)i[r]=0
for(r=21148;r<=21150;r++)i[r]=0
for(r=21207;r<=21264;r++)i[r]=0
for(r=21307;r<=21364;r++)i[r]=0
for(r=21413;r<=21423;r++)i[r]=0
for(r=21453;r<=21463;r++)i[r]=0
for(r=21473;r<=21483;r++)i[r]=0
for(r=21780;r<=21782;r++)i[r]=0
for(r=21891;r<=21894;r++)i[r]=0
for(r=21896;r<=21899;r++)i[r]=0
for(r=22171;r<=22177;r++)i[r]=0
for(r=22181;r<=22187;r++)i[r]=0
for(r=22191;r<=22197;r++)i[r]=0
for(r=22234;r<=22236;r++)i[r]=0
for(r=22521;r<=22525;r++)i[r]=0
for(r=22991;r<=22994;r++)i[r]=0
for(r=23028;r<=23038;r++)i[r]=0
for(r=23830;r<=23853;r++)i[r]=0
for(r=23866;r<=23872;r++)i[r]=0
for(r=23877;r<=23884;r++)i[r]=0
for(r=23886;r<=23894;r++)i[r]=0
for(r=23946;r<=23948;r++)i[r]=0
for(r=24311;r<=24313;r++)i[r]=0
for(r=24342;r<=24347;r++)i[r]=0
for(r=24370;r<=24374;r++)i[r]=10
for(r=24375;r<=24381;r++)i[r]=0
for(r=24718;r<=24721;r++)i[r]=0
for(r=24817;r<=24821;r++)i[r]=0
for(r=24877;r<=24882;r++)i[r]=0
for(r=24891;r<=24893;r++)i[r]=0
for(r=25391;r<=25395;r++)i[r]=0
for(r=25828;r<=25838;r++)i[r]=0
for(r=26191;r<=26195;r++)i[r]=0
for(r=26391;r<=26393;r++)i[r]=0
for(r=26701;r<=26722;r++)i[r]=0
for(r=26729;r<=26799;r++)i[r]=2
for(r=26801;r<=26803;r++)i[r]=2
for(r=26811;r<=26813;r++)i[r]=2
for(r=26847;r<=26870;r++)i[r]=2
for(r=26891;r<=26899;r++)i[r]=0
for(r=26901;r<=26923;r++)i[r]=0
for(r=26929;r<=26946;r++)i[r]=0
for(r=26948;r<=26998;r++)i[r]=0
for(r=27037;r<=27040;r++)i[r]=0
for(r=27205;r<=27232;r++)i[r]=0
for(r=27258;r<=27260;r++)i[r]=0
for(r=27391;r<=27398;r++)i[r]=0
for(r=27561;r<=27564;r++)i[r]=0
for(r=27571;r<=27574;r++)i[r]=0
for(r=27581;r<=27584;r++)i[r]=0
for(r=27591;r<=27594;r++)i[r]=0
for(r=28191;r<=28193;r++)i[r]=0
for(r=28348;r<=28358;r++)i[r]=0
for(r=28402;r<=28432;r++)i[r]=0
for(r=28462;r<=28492;r++)i[r]=0
for(r=29118;r<=29122;r++)i[r]=0
for(r=29168;r<=29172;r++)i[r]=0
for(r=29177;r<=29185;r++)i[r]=0
for(r=29187;r<=29195;r++)i[r]=0
for(r=29900;r<=29903;r++)i[r]=0
for(r=30161;r<=30179;r++)i[r]=0
for(r=30491;r<=30494;r++)i[r]=0
for(r=30729;r<=30732;r++)i[r]=0
for(r=31251;r<=31259;r++)i[r]=0
for(r=31265;r<=31268;r++)i[r]=0
for(r=31275;r<=31279;r++)i[r]=0
for(r=31281;r<=31297;r++)i[r]=0
for(r=31461;r<=31469;r++)i[r]=0
for(r=31491;r<=31495;r++)i[r]=0
for(r=31917;r<=31922;r++)i[r]=0
for(r=31965;r<=32e3;r++)i[r]=0
for(r=32001;r<=32003;r++)i[r]=2
for(r=32005;r<=32031;r++)i[r]=2
for(r=32033;r<=32060;r++)i[r]=2
for(r=32064;r<=32067;r++)i[r]=2
for(r=32074;r<=32077;r++)i[r]=2
for(r=32081;r<=32086;r++)i[r]=0
for(r=32107;r<=32130;r++)i[r]=0
for(r=32133;r<=32158;r++)i[r]=0
for(r=32164;r<=32167;r++)i[r]=2
for(r=32180;r<=32199;r++)i[r]=0
for(r=32201;r<=32260;r++)i[r]=0
for(r=32301;r<=32360;r++)i[r]=0
for(r=32601;r<=32662;r++)i[r]=0
for(r=32664;r<=32667;r++)i[r]=2
for(r=32701;r<=32761;r++)i[r]=0
for(r=53001;r<=53004;r++)i[r]=0
for(r=53008;r<=53019;r++)i[r]=0
for(r=53021;r<=53032;r++)i[r]=0
for(r=53034;r<=53037;r++)i[r]=0
for(r=53042;r<=53046;r++)i[r]=0
for(r=53074;r<=53080;r++)i[r]=0
for(r=54001;r<=54004;r++)i[r]=0
for(r=54008;r<=54019;r++)i[r]=0
for(r=54021;r<=54032;r++)i[r]=0
for(r=54034;r<=54037;r++)i[r]=0
for(r=54042;r<=54046;r++)i[r]=0
for(r=54048;r<=54053;r++)i[r]=0
for(r=54074;r<=54080;r++)i[r]=0
for(r=54098;r<=54101;r++)i[r]=0
for(r=102001;r<=102040;r++)i[r]=0
for(r=102042;r<=102063;r++)i[r]=0
for(r=102065;r<=102067;r++)i[r]=0
for(r=102070;r<=102117;r++)i[r]=0
for(r=102122;r<=102216;r++)i[r]=0
for(r=102221;r<=102377;r++)i[r]=0
for(r=102382;r<=102388;r++)i[r]=0
for(r=102389;r<=102398;r++)i[r]=2
for(r=102399;r<=102444;r++)i[r]=0
for(r=102445;r<=102447;r++)i[r]=2
for(r=102448;r<=102458;r++)i[r]=0
for(r=102459;r<=102468;r++)i[r]=2
for(r=102469;r<=102499;r++)i[r]=0
for(r=102500;r<=102519;r++)i[r]=1
for(r=102520;r<=102524;r++)i[r]=0
for(r=102525;r<=102529;r++)i[r]=2
for(r=102530;r<=102588;r++)i[r]=0
for(r=102590;r<=102598;r++)i[r]=0
for(r=102601;r<=102603;r++)i[r]=0
for(r=102605;r<=102628;r++)i[r]=0
for(r=102629;r<=102646;r++)i[r]=2
for(r=102648;r<=102700;r++)i[r]=2
for(r=102701;r<=102703;r++)i[r]=0
for(r=102707;r<=102730;r++)i[r]=2
for(r=102733;r<=102758;r++)i[r]=2
for(r=102767;r<=102900;r++)i[r]=0
for(r=102901;r<=102933;r++)i[r]=2
for(r=102934;r<=102950;r++)i[r]=13
for(r=102951;r<=102960;r++)i[r]=0
for(r=102965;r<=102969;r++)i[r]=0
for(r=102971;r<=102973;r++)i[r]=0
for(r=102975;r<=102989;r++)i[r]=0
for(r=102990;r<=102992;r++)i[r]=1
for(r=102997;r<=103002;r++)i[r]=0
for(r=103003;r<=103008;r++)i[r]=2
for(r=103009;r<=103011;r++)i[r]=0
for(r=103012;r<=103014;r++)i[r]=2
for(r=103019;r<=103021;r++)i[r]=0
for(r=103022;r<=103024;r++)i[r]=2
for(r=103029;r<=103031;r++)i[r]=0
for(r=103032;r<=103034;r++)i[r]=2
for(r=103065;r<=103068;r++)i[r]=0
for(r=103074;r<=103076;r++)i[r]=0
for(r=103077;r<=103079;r++)i[r]=1
for(r=103080;r<=103082;r++)i[r]=0
for(r=103083;r<=103085;r++)i[r]=2
for(r=103090;r<=103093;r++)i[r]=0
for(r=103097;r<=103099;r++)i[r]=0
for(r=103100;r<=103102;r++)i[r]=2
for(r=103107;r<=103109;r++)i[r]=0
for(r=103110;r<=103112;r++)i[r]=2
for(r=103113;r<=103116;r++)i[r]=0
for(r=103117;r<=103120;r++)i[r]=2
for(r=103153;r<=103157;r++)i[r]=0
for(r=103158;r<=103162;r++)i[r]=2
for(r=103163;r<=103165;r++)i[r]=0
for(r=103166;r<=103168;r++)i[r]=1
for(r=103169;r<=103171;r++)i[r]=2
for(r=103186;r<=103188;r++)i[r]=0
for(r=103189;r<=103191;r++)i[r]=2
for(r=103192;r<=103195;r++)i[r]=0
for(r=103196;r<=103199;r++)i[r]=2
for(r=103200;r<=103224;r++)i[r]=0
for(r=103225;r<=103227;r++)i[r]=1
for(r=103232;r<=103237;r++)i[r]=0
for(r=103238;r<=103243;r++)i[r]=2
for(r=103244;r<=103246;r++)i[r]=0
for(r=103247;r<=103249;r++)i[r]=2
for(r=103254;r<=103256;r++)i[r]=0
for(r=103257;r<=103259;r++)i[r]=2
for(r=103264;r<=103266;r++)i[r]=0
for(r=103267;r<=103269;r++)i[r]=2
for(r=103300;r<=103375;r++)i[r]=0
for(r=103381;r<=103383;r++)i[r]=0
for(r=103384;r<=103386;r++)i[r]=1
for(r=103387;r<=103389;r++)i[r]=0
for(r=103390;r<=103392;r++)i[r]=2
for(r=103397;r<=103399;r++)i[r]=0
for(r=103400;r<=103471;r++)i[r]=2
for(r=103476;r<=103478;r++)i[r]=0
for(r=103479;r<=103481;r++)i[r]=2
for(r=103486;r<=103488;r++)i[r]=0
for(r=103489;r<=103491;r++)i[r]=2
for(r=103492;r<=103495;r++)i[r]=0
for(r=103496;r<=103499;r++)i[r]=2
for(r=103528;r<=103543;r++)i[r]=0
for(r=103544;r<=103548;r++)i[r]=2
for(r=103549;r<=103551;r++)i[r]=0
for(r=103552;r<=103554;r++)i[r]=1
for(r=103555;r<=103557;r++)i[r]=2
for(r=103558;r<=103560;r++)i[r]=0
for(r=103571;r<=103573;r++)i[r]=0
for(r=103574;r<=103576;r++)i[r]=2
for(r=103577;r<=103580;r++)i[r]=0
for(r=103581;r<=103583;r++)i[r]=2
for(r=103595;r<=103694;r++)i[r]=0
for(r=103696;r<=103699;r++)i[r]=0
for(r=103700;r<=103793;r++)i[r]=2
for(r=103794;r<=103872;r++)i[r]=0
for(r=103900;r<=103971;r++)i[r]=2},1028:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r,i=n(856),s=n(178),o=n(858),a=(n(859),n(857)),l=n(864),c=n(881),u=n(911),d=n(965),h=n(1073)
let f=r=class extends(Object(d.a)(u.a)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new h.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,n,r){null!=r&&r.origin||super.writeVisualVariables(e,t,n,r)}clone(){return new r({config:Object(s.a)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:Object(s.a)(this.fieldMap),url:Object(s.a)(this.url),visualVariables:Object(s.a)(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await Object(c.a)(e,t,this.scaleExpression)
for(const n in this.fieldMap){const r=this.fieldMap[n]
t.has(r)&&e.add(r)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}}
Object(i.a)([Object(o.b)({type:h.DictionaryLoader})],f.prototype,"_loader",null),Object(i.a)([Object(o.b)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],f.prototype,"config",void 0),Object(i.a)([Object(o.b)({type:Object,json:{write:!0}})],f.prototype,"fieldMap",void 0),Object(i.a)([Object(o.b)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],f.prototype,"scaleExpression",void 0),Object(i.a)([Object(l.a)("scaleExpression")],f.prototype,"writeData",null),Object(i.a)([Object(o.b)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],f.prototype,"scaleExpressionTitle",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],f.prototype,"url",void 0),Object(i.a)([Object(l.a)("visualVariables")],f.prototype,"writeVisualVariables",null),f=r=Object(i.a)([Object(a.a)("esri.renderers.DictionaryRenderer")],f)
const p=f},1029:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r,i=n(856),s=n(873),o=n(178),a=n(858),l=(n(859),n(868)),c=n(857),u=n(881),d=n(911),h=n(1098)
let f=r=class extends d.a{constructor(e){super(e),this.blurRadius=10,this.referenceScale=0,this.colorStops=[new h.a({ratio:0,color:new s.a("rgba(255, 140, 0, 0)")}),new h.a({ratio:.75,color:new s.a("rgba(255, 140, 0, 1)")}),new h.a({ratio:.9,color:new s.a("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap"}async collectRequiredFields(e,t){const n=this.field
n&&"string"==typeof n&&Object(u.d)(e,t,n)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new r({blurRadius:this.blurRadius,referenceScale:this.referenceScale,colorStops:Object(o.a)(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}}
Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],f.prototype,"blurRadius",void 0),Object(i.a)([Object(a.b)({type:Number})],f.prototype,"referenceScale",void 0),Object(i.a)([Object(a.b)({type:[h.a],json:{write:!0}})],f.prototype,"colorStops",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],f.prototype,"field",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{overridePolicy:(e,t,n)=>({enabled:null==n})}}})],f.prototype,"fieldOffset",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],f.prototype,"maxPixelIntensity",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],f.prototype,"minPixelIntensity",void 0),Object(i.a)([Object(l.a)({heatmap:"heatmap"})],f.prototype,"type",void 0),f=r=Object(i.a)([Object(c.a)("esri.renderers.HeatmapRenderer")],f)
const p=f},1030:function(e,t,n){"use strict"
function r(e){return function(t,n){t.hasOwnProperty("_messageBundleProps")||(t._messageBundleProps=t._messageBundleProps?t._messageBundleProps.slice():[]),t._messageBundleProps.push({bundlePath:e,propertyName:n})}}n.d(t,"a",(function(){return r}))},1032:function(e,t,n){"use strict"
n.d(t,"a",(function(){return L}))
var r,i=n(856),s=n(873),o=n(178),a=n(964),l=n(859),c=n(868),u=n(858),d=n(857),h=n(881),f=n(911),p=n(965),b=n(860),m=n(177),y=(n(353),n(77),n(880))
const g=m.a.getLogger("esri.renderers.support.AttributeColorInfo")
let O=r=class extends b.a{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(g.error(".field: field must be a string value"),null):Object(l.l)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new r({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}}
Object(i.a)([Object(u.b)({type:s.a,json:{type:[Number],write:!0}})],O.prototype,"color",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],O.prototype,"field",void 0),Object(i.a)([Object(y.a)("field")],O.prototype,"castField",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],O.prototype,"label",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],O.prototype,"valueExpression",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],O.prototype,"valueExpressionTitle",void 0),O=r=Object(i.a)([Object(d.a)("esri.renderers.support.AttributeColorInfo")],O)
const v=O
var j
let w=j=class extends b.a{constructor(){super(...arguments),this.unit=null}clone(){return new j({unit:this.unit})}}
Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],w.prototype,"unit",void 0),w=j=Object(i.a)([Object(d.a)("esri.renderers.support.DotDensityLegendOptions")],w)
const _=w
var x,S=n(1014),M=n(1022)
let E=x=class extends(Object(p.a)(f.a)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new s.a([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new M.a,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue
const t=e/this.referenceScale*this.dotValue
return t<1?1:t}getSymbol(){return new S.a({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new x({attributes:Object(o.a)(this.attributes),backgroundColor:Object(o.a)(this.backgroundColor),dotBlendingEnabled:Object(o.a)(this.dotBlendingEnabled),dotShape:Object(o.a)(this.dotShape),dotSize:Object(o.a)(this.dotSize),dotValue:Object(o.a)(this.dotValue),legendOptions:Object(o.a)(this.legendOptions),outline:Object(o.a)(this.outline),referenceScale:Object(o.a)(this.referenceScale),visualVariables:Object(o.a)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map(e=>e.field||e.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t)
for(const n of this.attributes)n.valueExpression&&await Object(h.a)(e,t,n.valueExpression),n.field&&e.add(n.field)}}
Object(i.a)([Object(u.b)({type:[v],json:{write:!0}})],E.prototype,"attributes",void 0),Object(i.a)([Object(u.b)({type:s.a,json:{write:!0}})],E.prototype,"backgroundColor",void 0),Object(i.a)([Object(u.b)({type:Boolean}),Object(a.a)("dotBlendingEnabled")],E.prototype,"blendDots",void 0),Object(i.a)([Object(u.b)({type:Boolean,json:{write:!0}})],E.prototype,"dotBlendingEnabled",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!1}})],E.prototype,"dotShape",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1}}}})],E.prototype,"dotSize",void 0),Object(i.a)([Object(u.b)({type:_,json:{write:!0}})],E.prototype,"legendOptions",void 0),Object(i.a)([Object(u.b)({type:M.a,json:{default:null,write:!0}})],E.prototype,"outline",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],E.prototype,"dotValue",void 0),Object(i.a)([Object(u.b)({type:Number}),Object(a.a)("dotValue")],E.prototype,"referenceDotValue",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],E.prototype,"referenceScale",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],E.prototype,"seed",void 0),Object(i.a)([Object(c.a)({dotDensity:"dot-density"})],E.prototype,"type",void 0),E=x=Object(i.a)([Object(d.a)("esri.renderers.DotDensityRenderer")],E)
const L=E},1035:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}))
var r=n(1038),i=n(1028),s=n(1032),o=n(1029),a=n(911),l=n(1024),c=n(1043)
const u={key:"type",base:a.a,typeMap:{heatmap:o.a,simple:l.a,"unique-value":c.a,"class-breaks":r.a,"dot-density":s.a,dictionary:i.a},errorContext:"renderer"},d={key:"type",base:a.a,typeMap:{simple:l.a,"unique-value":c.a,"class-breaks":r.a},errorContext:"renderer"}},1036:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}))
var r=n(906),i=n(1015),s=n(1101),o=n(1048),a=n(1208)
const l={types:r.i,json:{write:{writer:s.b},origins:{"web-scene":{types:r.j,write:{writer:s.b},read:{reader:Object(i.b)({types:r.j})}}}}},c={types:{base:o.a,key:"type",typeMap:{"simple-fill":r.e.typeMap["simple-fill"],"picture-fill":r.e.typeMap["picture-fill"],"polygon-3d":r.e.typeMap["polygon-3d"]}},json:{write:{writer:s.b},origins:{"web-scene":{type:a.a,write:{writer:s.b}}}}}},1038:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k}))
var r,i=n(856),s=n(906),o=n(863),a=n(178),l=n(177),c=n(20),u=n(858),d=n(880),h=n(868),f=n(865),p=n(857),b=n(864),m=n(859),y=n(881),g=n(911),O=n(965),v=n(1314),j=n(1036),w=n(1100),_=n(907)
const x=l.a.getLogger("esri.renderers.ClassBreaksRenderer"),S="percent-of-total",M="field",E=new o.a({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:S,esriNormalizeByField:M}),L=Object(m.m)(v.a)
let I=r=class extends(Object(O.a)(g.a)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,t,n){if(!Array.isArray(e))return
let r=t.minValue
return e.map(e=>{const t=new v.a
return t.read(e,n),null==t.minValue&&(t.minValue=r),null==t.maxValue&&(t.maxValue=t.minValue),r=t.maxValue,t})}writeClassBreakInfos(e,t,n,r){const i=e.map(e=>e.write({},r))
this._areClassBreaksConsecutive()&&i.forEach(e=>delete e.classMinValue),t[n]=i}castField(e){return null==e?e:"function"==typeof e?(x.error(".field: field must be a string value"),null):Object(m.l)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType")
const t=!!this.normalizationField,n=null!=this.normalizationTotal
return t||n?(e=(t?M:n&&S)||null,t&&n&&x.warn("warning: both normalizationField and normalizationTotal are set!")):e!==M&&e!==S||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,n){let r=null
r="number"==typeof e?new v.a({minValue:e,maxValue:t,symbol:Object(s.a)(n)}):L(Object(a.a)(e)),this.classBreakInfos.push(r),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,t){const n=this.classBreakInfos.length
for(let r=0;r<n;r++){const n=[this.classBreakInfos[r].minValue,this.classBreakInfos[r].maxValue]
if(n[0]===e&&n[1]===t){this.classBreakInfos.splice(r,1)
break}}}getBreakIndex(e,t){return this.valueExpression&&(Object(c.j)(t)||Object(c.j)(t.arcade))&&x.warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)}async getClassBreakInfo(e,t){let n=t
this.valueExpression&&(Object(c.j)(t)||Object(c.j)(t.arcade))&&(n={...n,arcade:await Object(_.e)()})
const r=this.getBreakIndex(e,n)
return-1!==r?this.classBreakInfos[r]:null}getSymbol(e,t){if(this.valueExpression&&(Object(c.j)(t)||Object(c.j)(t.arcade)))return void x.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")
const n=this.getBreakIndex(e,t)
return n>-1?this.classBreakInfos[n].symbol:this.defaultSymbol}async getSymbolAsync(e,t){let n=t
if(this.valueExpression&&(Object(c.j)(t)||Object(c.j)(t.arcade))){const e=await Object(_.e)(),{arcadeUtils:t}=e
t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),n={...n,arcade:e}}const r=this.getBreakIndex(e,n)
return r>-1?this.classBreakInfos[r].symbol:this.defaultSymbol}getSymbols(){const e=[]
return this.classBreakInfos.forEach(t=>{t.symbol&&e.push(t.symbol)}),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),n=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`
return`${e}.${t}.${this.classBreakInfos.reduce((e,t)=>e+t.getMeshHash(),"")}.${n}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new r({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:Object(a.a)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:Object(a.a)(this.visualVariables),legendOptions:Object(a.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,t){const n=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)]
await Promise.all(n)}async collectSymbolFields(e,t){const n=[...this.getSymbols().map(n=>n.collectRequiredFields(e,t)),Object(y.a)(e,t,this.valueExpression)]
Object(y.d)(e,t,this.field),Object(y.d)(e,t,this.normalizationField),await Promise.all(n)}_getBreakIndexForExpression(e,t){const{viewingMode:n,scale:r,spatialReference:i,arcade:s}=Object(c.u)(t,{})
let o=this._compiledValueExpression.valueExpression===this.valueExpression?this._compiledValueExpression.compiledFunction:null
const a=Object(c.t)(s).arcadeUtils
if(!o){const e=a.createSyntaxTree(this.valueExpression)
o=a.createFunction(e),this._compiledValueExpression.compiledFunction=o}this._compiledValueExpression.valueExpression=this.valueExpression
const l=a.executeFunction(o,a.createExecContext(e,a.getViewInfo({viewingMode:n,scale:r,spatialReference:i})))
return this._getBreakIndexfromInfos(l)}_getBreakIndexForField(e){const t=this.field,n=e.attributes,r=this.normalizationType
let i=parseFloat(n[t])
if(r){const e=this.normalizationTotal,t=parseFloat(n[this.normalizationField])
if("log"===r)i=Math.log(i)*Math.LOG10E
else if(r!==S||isNaN(e)){if(r===M&&!isNaN(t)){if(isNaN(i)||isNaN(t))return-1
i/=t}}else i=i/e*100}return this._getBreakIndexfromInfos(i)}_getBreakIndexfromInfos(e){const t=this.isMaxInclusive
if(null!=e&&"number"==typeof e&&!isNaN(e))for(let n=0;n<this.classBreakInfos.length;n++){const r=[this.classBreakInfos[n].minValue,this.classBreakInfos[n].maxValue]
if(r[0]<=e&&(t?e<=r[1]:e<r[1]))return n}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,t=e.length
for(let n=1;n<t;n++)if(e[n-1].maxValue!==e[n].minValue)return!1
return!0}}
Object(i.a)([Object(u.b)(j.a)],I.prototype,"backgroundFillSymbol",void 0),Object(i.a)([Object(u.b)({type:[v.a]})],I.prototype,"classBreakInfos",void 0),Object(i.a)([Object(f.a)("classBreakInfos")],I.prototype,"readClassBreakInfos",null),Object(i.a)([Object(b.a)("classBreakInfos")],I.prototype,"writeClassBreakInfos",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],I.prototype,"defaultLabel",void 0),Object(i.a)([Object(u.b)(j.b)],I.prototype,"defaultSymbol",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],I.prototype,"field",void 0),Object(i.a)([Object(d.a)("field")],I.prototype,"castField",null),Object(i.a)([Object(u.b)({type:Boolean})],I.prototype,"isMaxInclusive",void 0),Object(i.a)([Object(u.b)({type:w.a,json:{write:!0}})],I.prototype,"legendOptions",void 0),Object(i.a)([Object(u.b)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],I.prototype,"minValue",null),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],I.prototype,"normalizationField",void 0),Object(i.a)([Object(u.b)({type:Number,cast:e=>Object(m.i)(e),json:{write:!0}})],I.prototype,"normalizationTotal",void 0),Object(i.a)([Object(u.b)({type:E.apiValues,value:null,json:{type:E.jsonValues,read:E.read,write:E.write}})],I.prototype,"normalizationType",null),Object(i.a)([Object(h.a)({classBreaks:"class-breaks"})],I.prototype,"type",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],I.prototype,"valueExpression",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],I.prototype,"valueExpressionTitle",void 0),I=r=Object(i.a)([Object(p.a)("esri.renderers.ClassBreaksRenderer")],I)
const k=I},1043:function(e,t,n){"use strict"
n.d(t,"a",(function(){return T}))
var r,i=n(856),s=n(906),o=n(354),a=n(178),l=n(177),c=n(20),u=n(109),d=n(858),h=n(880),f=n(868),p=n(865),b=n(857),m=n(864),y=n(1077),g=n(859),O=n(881),v=n(914),j=n(911),w=n(965),_=n(1036),x=n(1100),S=n(1360),M=n(907),E=n(936),L=n(1200),I=n(1166)
const k=l.a.getLogger("esri.renderers.UniqueValueRenderer"),C=Object(g.m)(S.a)
let A=r=class extends(Object(w.a)(j.a)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this.type="unique-value",this.backgroundFillSymbol=null,this.field=null,this.field2=null,this.field3=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.fieldDelimiter=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return
if(!e||!t)return{type:"complete",oldValue:e,newValue:t}
let n=!1
const r={type:"collection",added:[],removed:[],changed:[],unchanged:[]}
for(let i=0;i<t.length;i++){const s=e.find(e=>e.value===t[i].value)
s?Object(y.a)(s,t[i])?(r.changed.push({type:"complete",oldValue:s,newValue:t[i]}),n=!0):r.unchanged.push({oldValue:s,newValue:t[i]}):(r.added.push(t[i]),n=!0)}for(let i=0;i<e.length;i++)t.find(t=>t.value===e[i].value)||(r.removed.push(e[i]),n=!0)
return n?r:void 0}},this._set("uniqueValueInfos",[])}get _cache(){return{compiledFunc:null}}castField(e){return null==e||"function"==typeof e?e:Object(g.l)(e)}writeField(e,t,n,r){"string"==typeof e?t[n]=e:r&&r.messages?r.messages.push(new o.a("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):k.error(".field: cannot write field to JSON since it's not a string value")}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}readPortal(e,t,n){return n.portal||v.a.getDefault()}readStyleOrigin(e,t,n){if(t.styleName)return Object.freeze({styleName:t.styleName})
if(t.styleUrl){const e=Object(E.b)(t.styleUrl,n)
return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,n,r){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=Object(E.f)(e.styleUrl,r))}set uniqueValueInfos(e){this.styleOrigin?k.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap())}addUniqueValueInfo(e,t){if(this.styleOrigin)return void k.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style")
let n
n="object"==typeof e?C(e):new S.a({value:e,symbol:Object(s.a)(t)}),this.uniqueValueInfos.push(n),this._valueInfoMap[n.value]=n}removeUniqueValueInfo(e){if(this.styleOrigin)k.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style")
else for(let t=0;t<this.uniqueValueInfos.length;t++)if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1)
break}}async getUniqueValueInfo(e,t){let n=t
return this.valueExpression&&(Object(c.j)(t)||Object(c.j)(t.arcade))&&(n={...n,arcade:await Object(M.e)()}),this._getUniqueValueInfo(e,n)}getSymbol(e,t){if(this.valueExpression&&(Object(c.j)(t)||Object(c.j)(t.arcade)))return void k.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")
const n=this._getUniqueValueInfo(e,t)
return n&&n.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let n=t
if(this.valueExpression&&(Object(c.j)(n)||Object(c.j)(n.arcade))){const e=await Object(M.e)(),{arcadeUtils:t}=e
t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),n={...n,arcade:e}}const r=this._getUniqueValueInfo(e,n)
return r&&r.symbol||this.defaultSymbol}getSymbols(){const e=[]
for(const t of this.uniqueValueInfos)t.symbol&&e.push(t.symbol)
return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${JSON.stringify(this.backgroundFillSymbol)}.${JSON.stringify(this.defaultSymbol)}.${this.uniqueValueInfos.reduce((e,t)=>e+t.getMeshHash(),"")}.${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}.${this.valueExpression}`}clone(){const e=new r({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:Object(a.a)(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:Object(a.a)(this.visualVariables),legendOptions:Object(a.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:Object(a.a)(this.backgroundFillSymbol)})
this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal)
const t=Object(a.a)(this.uniqueValueInfos)
return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(Object(a.a)(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const n=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)]
await Promise.all(n)}async collectSymbolFields(e,t){const n=[...this.getSymbols().map(n=>n.collectRequiredFields(e,t)),Object(O.a)(e,t,this.valueExpression)]
Object(O.d)(e,t,this.field),Object(O.d)(e,t,this.field2),Object(O.d)(e,t,this.field3),await Promise.all(n)}populateFromStyle(){return Object(L.b)(this.styleOrigin,{portal:this.portal}).then(e=>{const t=[]
return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach(n=>{const r=new I.a({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:n.name})
this.defaultSymbol||n.name!==e.data.defaultItem||(this.defaultSymbol=r,this._isDefaultSymbolDerived=!0)
const i=new S.a({value:n.name,symbol:r})
t.push(i),this._valueInfoMap[n.name]=i}),this._set("uniqueValueInfos",Object.freeze(t)),!this.defaultSymbol&&this.uniqueValueInfos.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this})}_updateValueInfoMap(){this._valueInfoMap={},this.uniqueValueInfos.forEach(e=>this._valueInfoMap[e.value+""]=e)}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:n,scale:r,spatialReference:i,arcade:s}=Object(c.u)(t,{})
let o=this._cache.compiledFunc
const a=Object(c.t)(s).arcadeUtils
if(!o){const e=a.createSyntaxTree(this.valueExpression)
o=a.createFunction(e),this._cache.compiledFunc=o}const l=a.executeFunction(o,a.createExecContext(e,a.getViewInfo({viewingMode:n,scale:r,spatialReference:i})))
return this._valueInfoMap[l+""]}_getUnqiueValueInfoForFields(e){const t=this.field,n=e.attributes
let r
if("function"!=typeof t&&this.field2){const e=this.field2,i=this.field3,s=[]
t&&s.push(n[t]),e&&s.push(n[e]),i&&s.push(n[i]),r=s.join(this.fieldDelimiter||"")}else"function"==typeof t?r=t(e):t&&(r=n[t])
return this._valueInfoMap[r+""]}static fromPortalStyle(e,t){const n=new r(t&&t.properties)
n._set("styleOrigin",Object.freeze({styleName:e})),n._set("portal",t&&t.portal||v.a.getDefault())
const i=n.populateFromStyle()
return i.catch(t=>{k.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)}),i}static fromStyleUrl(e,t){const n=new r(t&&t.properties)
n._set("styleOrigin",Object.freeze({styleUrl:e}))
const i=n.populateFromStyle()
return i.catch(t=>{k.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)}),i}}
Object(i.a)([Object(d.b)({readOnly:!0})],A.prototype,"_cache",null),Object(i.a)([Object(f.a)({uniqueValue:"unique-value"})],A.prototype,"type",void 0),Object(i.a)([Object(d.b)(_.a)],A.prototype,"backgroundFillSymbol",void 0),Object(i.a)([Object(d.b)({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],A.prototype,"field",void 0),Object(i.a)([Object(h.a)("field")],A.prototype,"castField",null),Object(i.a)([Object(m.a)("field")],A.prototype,"writeField",null),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],A.prototype,"field2",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],A.prototype,"field3",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],A.prototype,"valueExpression",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],A.prototype,"valueExpressionTitle",void 0),Object(i.a)([Object(d.b)({type:x.a,json:{write:!0}})],A.prototype,"legendOptions",void 0),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],A.prototype,"defaultLabel",void 0),Object(i.a)([Object(d.b)(Object(u.a)({..._.b},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],A.prototype,"defaultSymbol",null),Object(i.a)([Object(d.b)({type:String,json:{write:!0}})],A.prototype,"fieldDelimiter",void 0),Object(i.a)([Object(d.b)({type:v.a,readOnly:!0})],A.prototype,"portal",void 0),Object(i.a)([Object(p.a)("portal",["styleName"])],A.prototype,"readPortal",null),Object(i.a)([Object(d.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],A.prototype,"styleOrigin",void 0),Object(i.a)([Object(p.a)("styleOrigin",["styleName","styleUrl"])],A.prototype,"readStyleOrigin",null),Object(i.a)([Object(m.a)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],A.prototype,"writeStyleOrigin",null),Object(i.a)([Object(d.b)({type:[S.a],json:{write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],A.prototype,"uniqueValueInfos",null),A=r=Object(i.a)([Object(b.a)("esri.renderers.UniqueValueRenderer")],A)
const T=A},1045:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(913)
function i(e,t,n){t.keys().forEach(e=>{n.set(e,t.get(e),r.a.DEFAULTS)})
const i=e.metadatas
Object.keys(i).forEach(t=>{e.internalGet(t)&&n.set(t,e.internalGet(t),r.a.DEFAULTS)})}},1046:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1002)
class i{constructor(e,t){this._storage=new r.c,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t,n){this._storage.put(e,t,n,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}}},1047:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r,i=n(856),s=n(178),o=n(858),a=(n(859),n(857)),l=n(976),c=n(944)
let u=r=class extends c.a{constructor(e){super(e),this.colorRamps=null,this.type="multipart"}clone(){return new r({colorRamps:Object(s.a)(this.colorRamps)})}}
Object(i.a)([Object(o.b)({type:[l.a],json:{write:!0}})],u.prototype,"colorRamps",void 0),Object(i.a)([Object(o.b)({type:["multipart"]})],u.prototype,"type",void 0),u=r=Object(i.a)([Object(a.a)("esri.rest.support.MultipartColorRamp")],u)
const d=u},1048:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n(856),i=n(873),s=n(863),o=n(860),a=n(858),l=(n(353),n(77),n(859),n(865)),c=n(857)
const u=new s.a({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"})
let d=0,h=class extends o.a{constructor(e){super(e),this.id="sym"+d++,this.type=null,this.color=new i.a([0,0,0,1])}readColor(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e}async collectRequiredFields(e,t){}hash(){return JSON.stringify(this.toJSON())}clone(){}}
Object(r.a)([Object(a.b)({type:u.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:u.write}}})],h.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:i.a,json:{write:{allowNull:!0}}})],h.prototype,"color",void 0),Object(r.a)([Object(l.a)("color")],h.prototype,"readColor",null),h=Object(r.a)([Object(c.a)("esri.symbols.Symbol")],h)
const f=h},1055:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n(77),i=n(20),s=n(861)
function o(e,t,n=!1,o){return new Promise((l,c)=>{if(Object(s.n)(o))return void c(a())
let u=()=>{f(),c(new Error("Unable to load "+t))},d=()=>{const t=e
f(),l(t)},h=()=>{if(!e)return
const t=e
f(),t.src="",c(a())}
const f=()=>{Object(r.a)("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",d)),u=null,d=null,e=null,Object(i.k)(o)&&o.removeEventListener("abort",h),h=null,n&&URL.revokeObjectURL(t)}
Object(i.k)(o)&&o.addEventListener("abort",h),Object(r.a)("esri-image-decode")?e.decode().then(d,u):(e.addEventListener("error",u),e.addEventListener("load",d))})}function a(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error
return e.name="AbortError",e}}},1062:function(e,t,n){"use strict"
n.r(t),n.d(t,"getAllSizes",(function(){return x})),n.d(t,"getColor",(function(){return p})),n.d(t,"getOpacity",(function(){return b})),n.d(t,"getRotationAngle",(function(){return m})),n.d(t,"getSize",(function(){return y})),n.d(t,"getSizeForValue",(function(){return v})),n.d(t,"getSizeFromNumberOrVariable",(function(){return g})),n.d(t,"getSizeRangeAtScale",(function(){return j})),n.d(t,"getVisualVariableValues",(function(){return w})),n.d(t,"viewScaleRE",(function(){return f}))
var r=n(873),i=n(663),s=n(963),o=n(177),a=n(20),l=n(999),c=n(1019)
const u=o.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),d=new i.default,h=Math.PI,f=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i
function p(e,t,n){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"color"===e.type):e
if(!i)return
if("esri.renderers.visualVariables.ColorVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable")
const s="number"==typeof t,o=s?null:t,l=o&&o.attributes
let c=s?t:null
const d=i.field,{ipData:h,hasExpression:f}=i.cache
let p=i.cache.compiledFunc
if(!d&&!f){const e=i.stops
return e&&e[0]&&e[0].color}if("number"!=typeof c)if(f){if(!Object(a.k)(n)||!Object(a.k)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,r=t.getViewInfo(e),s=t.createExecContext(o,r)
if(!p){const e=t.createSyntaxTree(i.valueExpression)
p=t.createFunction(e),i.cache.compiledFunc=p}c=t.executeFunction(p,s)}else l&&(c=l[d])
const b=i.normalizationField,m=l?parseFloat(l[b]):void 0
if(null!=c&&(!b||s||!isNaN(m)&&0!==m)){isNaN(m)||s||(c/=m)
const e=_(c,h)
if(e){const t=e[0],s=e[1],o=t===s?i.stops[t].color:r.a.blendColors(i.stops[t].color,i.stops[s].color,e[2],Object(a.k)(n)?n.color:void 0)
return new r.a(o)}}}function b(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"opacity"===e.type):e
if(!r)return
if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable")
const i="number"==typeof t,s=i?null:t,o=s&&s.attributes
let l=i?t:null
const c=r.field,{ipData:d,hasExpression:h}=r.cache
let f=r.cache.compiledFunc
if(!c&&!h){const e=r.stops
return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(h){if(Object(a.j)(n)||Object(a.j)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,i=t.getViewInfo(e),o=t.createExecContext(s,i)
if(!f){const e=t.createSyntaxTree(r.valueExpression)
f=t.createFunction(e),r.cache.compiledFunc=f}l=t.executeFunction(f,o)}else o&&(l=o[c])
const p=r.normalizationField,b=o?parseFloat(o[p]):void 0
if(null!=l&&(!p||i||!isNaN(b)&&0!==b)){isNaN(b)||i||(l/=b)
const e=_(l,d)
if(e){const t=e[0],n=e[1]
if(t===n)return r.stops[t].opacity
{const i=r.stops[t].opacity
return i+(r.stops[n].opacity-i)*e[2]}}}}function m(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"rotation"===e.type):e
if(!r)return
if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable")
const i=r.axis||"heading",s="heading"===i&&"arithmetic"===r.rotationType?90:0,o="heading"===i&&"arithmetic"===r.rotationType?-1:1,l="number"==typeof t?null:t,c=l&&l.attributes,d=r.field,{hasExpression:h}=r.cache
let f=r.cache.compiledFunc,p=0
if(!d&&!h)return p
if(h){if(Object(a.j)(n)||Object(a.j)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,i=t.getViewInfo(e),s=t.createExecContext(l,i)
if(!f){const e=t.createSyntaxTree(r.valueExpression)
f=t.createFunction(e),r.cache.compiledFunc=f}p=t.executeFunction(f,s)}else c&&(p=c[d]||0)
return p="number"!=typeof p||isNaN(p)?null:s+o*p,p}function y(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.find(e=>"size"===e.type):e
if(!r)return
if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable")
const i=v(function(e,t,n){const r="number"==typeof t,i=r?null:t,s=i&&i.attributes
let o=r?t:null
const{isScaleDriven:l}=e.cache
let d=e.cache.compiledFunc
if(l){const t=Object(a.k)(n)?n.scale:void 0,r=Object(a.k)(n)?n.view:void 0
o=null==t||"3d"===r?function(e){let t=null,n=null
const r=e.stops
return r?(t=r[0].value,n=r[r.length-1].value):(t=e.minDataValue||0,n=e.maxDataValue||0),(t+n)/2}(e):t}else if(!r)switch(e.inputValueType){case c.a.Expression:{if(Object(a.j)(n)||Object(a.j)(n.arcade))return void u.error("Use of arcade expressions requires an arcade context")
const t={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},r=n.arcade.arcadeUtils,s=r.getViewInfo(t),l=r.createExecContext(i,s)
if(!d){const t=r.createSyntaxTree(e.valueExpression)
d=r.createFunction(t),e.cache.compiledFunc=d}o=r.executeFunction(d,l)
break}case c.a.Field:s&&(o=s[e.field])
break
case c.a.Unknown:o=null}if(!Object(c.f)(o))return null
if(r||!e.normalizationField)return o
const h=s?parseFloat(s[e.normalizationField]):null
return Object(c.f)(h)&&0!==h?o/h:null}(r,t,n),r,t,n,r.cache.ipData)
return null==i||isNaN(i)?0:i}function g(e,t,n){return null==e?null:Object(c.e)(e)?y(e,t,n):Object(c.f)(e)?e:null}function O(e,t,n){return Object(c.f)(n)&&e>n?n:Object(c.f)(t)&&e<t?t:e}function v(e,t,n,r,i){switch(t.transformationType){case c.b.Additive:return function(e,t,n,r){return e+(g(t.minSize,n,r)||t.minDataValue)}(e,t,n,r)
case c.b.Constant:return function(e,t,n){const r=e.stops
let i=r&&r.length&&r[0].size
return null==i&&(i=e.minSize),g(i,t,n)}(t,n,r)
case c.b.ClampedLinear:return function(e,t,n,r){const i=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),s=g(t.minSize,n,r),o=g(t.maxSize,n,r),l=Object(a.k)(r)?r.shape:void 0
if(e<=t.minDataValue)return s
if(e>=t.maxDataValue)return o
if("area"===t.scaleBy&&l){const e="circle"===l,t=e?h*(s/2)**2:s*s,n=t+i*((e?h*(o/2)**2:o*o)-t)
return e?2*Math.sqrt(n/h):Math.sqrt(n)}return s+i*(o-s)}(e,t,n,r)
case c.b.Proportional:return function(e,t,n,r){const i=Object(a.k)(r)?r.shape:void 0,s=e/t.minDataValue,o=g(t.minSize,n,r),l=g(t.maxSize,n,r)
let c=null
return c="circle"===i?2*Math.sqrt(s*(o/2)**2):"square"===i||"diamond"===i||"image"===i?Math.sqrt(s*o**2):s*o,O(c,o,l)}(e,t,n,r)
case c.b.Stops:return function(e,t,n,r,i){const[s,o,a]=_(e,i)
if(s===o)return g(t.stops[s].size,n,r)
{const e=g(t.stops[s].size,n,r)
return e+(g(t.stops[o].size,n,r)-e)*a}}(e,t,n,r,i)
case c.b.RealWorldSize:return function(e,t,n,r){const i=(Object(a.k)(r)&&r.resolution?r.resolution:1)*l.a[t.valueUnit],s=g(t.minSize,n,r),o=g(t.maxSize,n,r),{valueRepresentation:c}=t
let u=null
return u="area"===c?2*Math.sqrt(e/h)/i:"radius"===c||"distance"===c?2*e/i:e/i,O(u,s,o)}(e,t,n,r)
case c.b.Identity:return e
case c.b.Unknown:return null}}function j(e,t,n){const{isScaleDriven:r}=e.cache
if(!(r&&"3d"===n||t))return null
const i={scale:t,view:n}
let s=g(e.minSize,d,i),o=g(e.maxSize,d,i)
if(null!=s||null!=o){if(s>o){const e=o
o=s,s=e}return{minSize:s,maxSize:o}}}function w(e,t,n){if(!e.visualVariables)return
const r=[],i=[],s=[],o=[],a=[]
for(const t of e.visualVariables)switch(t.type){case"color":i.push(t)
break
case"opacity":s.push(t)
break
case"rotation":a.push(t)
break
case"size":o.push(t)}return i.forEach(e=>{const i=p(e,t,n)
r.push({variable:e,value:i})}),s.forEach(e=>{const i=b(e,t,n)
r.push({variable:e,value:i})}),a.forEach(e=>{const i=m(e,t,n)
r.push({variable:e,value:i})}),o.forEach(e=>{const i=y(e,t,n)
r.push({variable:e,value:i})}),r.filter(e=>null!=e.value)}function _(e,t){if(!t)return
let n=0,r=t.length-1
return t.some((t,i)=>e<t?(r=i,!0):(n=i,!1)),[n,r,(e-t[n])/(t[r]-t[n])]}function x(e,t,n){const r=["proportional","proportional","proportional"]
for(const i of e){const e=i.useSymbolValue?"symbol-value":y(i,t,n)
switch(i.axis){case"width":r[0]=e
break
case"depth":r[1]=e
break
case"height":r[2]=e
break
case"width-and-depth":r[0]=e,r[1]=e
break
case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e
break
default:Object(s.a)(i.axis)}}return r}},1065:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var r=n(856),i=n(863),s=n(860),o=n(177),a=n(858),l=(n(353),n(77),n(880)),c=n(857),u=n(859),d=n(1194)
const h=o.a.getLogger("esri.renderers.visualVariables.VisualVariable"),f=new i.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"})
let p=class extends s.a{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(h.error(".field: field must be a string value"),null):Object(u.l)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}}
Object(r.a)([Object(a.b)()],p.prototype,"index",void 0),Object(r.a)([Object(a.b)({type:f.apiValues,readOnly:!0,json:{read:f.read,write:f.write}})],p.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(r.a)([Object(l.a)("field")],p.prototype,"castField",null),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"valueExpression",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"valueExpressionTitle",void 0),Object(r.a)([Object(a.b)({readOnly:!0})],p.prototype,"arcadeRequired",null),Object(r.a)([Object(a.b)({type:d.a,json:{write:!0}})],p.prototype,"legendOptions",void 0),p=Object(r.a)([Object(c.a)("esri.renderers.visualVariables.VisualVariable")],p)
const b=p},1073:function(e,t,n){"use strict"
n.r(t),n.d(t,"DictionaryLoader",(function(){return b}))
var r=n(873),i=n(660),s=n(354),o=n(177),a=n(1046),l=n(20),c=n(861),u=n(355),d=n(907),h=n(668)
const f=o.a.getLogger("esri.renderers.support.DictionaryLoader"),p={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}}
class b{constructor(e,t,n){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new a.a(100),this.url=e,this.config=t,this.fieldMap=n}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){let n
this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t))
try{n=await this._dictionaryPromise}catch(e){if(Object(c.m)(e))return this._dictionaryPromise=null,null}const i={}
if(this.fieldMap)for(const t of this._symbolFields){const n=this.fieldMap[t]
if(n&&null!=e.attributes[n]){const r=""+e.attributes[n]
i[t]=r}else i[t]=""}const s=n(i,t)
if(!s||"string"!=typeof s)return null
const o=Object(u.b)(s).toString(),a=this._symbolCache.get(o)
if(a)return a.catch(()=>{this._symbolCache.pop(o)}),a
const d=s.split(";"),h=[],f=[]
for(const e of d)if(e)if(e.includes("po:")){const t=e.substr(3).split("|")
if(3===t.length){const e=t[0],n=t[1]
let i=t[2]
if("DashTemplate"===n)i=i.split(" ").map(e=>Number(e))
else if("Color"===n){const e=new r.a(i).toRgba()
i=[e[0],e[1],e[2],255*e[3]]}else i=Number(i)
f.push({primitiveName:e,propertyName:n,value:i})}}else if(e.includes("|")){for(const t of e.split("|"))if(this._itemNames.has(t)){h.push(t)
break}}else this._itemNames.has(e)&&h.push(e)
const p=!Object(l.k)(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,b=this._cimPartsToCIMSymbol(h,f,p,t)
return this._symbolCache.put(o,b,1),b}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise
if(!this.url)return void f.error("no valid URL!")
const t=Object(l.k)(e)?e.abortOptions:null,n=Object(i.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...t}),[{data:r}]=await Promise.all([n,Object(d.e)()])
if(!r)throw this._dictionaryPromise=null,new s.a("esri.renderers.DictionaryRenderer","Bad dictionary data!")
const o=r.expression,a=r.authoringInfo
this._refSymbolUrlTemplate=this.url+"/"+r.cimRefTemplateUrl,this._itemNames=new Set(r.itemsNames),this._symbolFields=a.symbol
const c={}
if(this.config){const e=this.config
for(const t in e)c[t]=e[t]}if(a.configuration)for(const e of a.configuration)c.hasOwnProperty(e.name)||(c[e.name]=e.value)
const u=[]
if(Object(l.k)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const n=this.fieldMap[t],r=e.fields.filter(e=>e.name===n)
r.length>0&&u.push({...r[0],name:t})}return this._dictionaryPromise=Object(d.b)(o,Object(l.k)(e)?e.spatialReference:null,u,c).then(e=>{const t={scale:0}
return(n,r)=>{const i=e.repurposeFeature({geometry:null,attributes:n})
return t.scale=Object(l.k)(r)?r.scale:void 0,e.evaluate({$feature:i,$view:t})}}).catch(e=>(f.error("Creating dictinoary expression failed:",e),null)),this._dictionaryPromise}async _cimPartsToCIMSymbol(e,t,n,r){const i=new Array(e.length)
for(let t=0;t<e.length;t++)i[t]=this._getSymbolPart(e[t],r)
const s=await Promise.all(i),o=this.fieldMap
for(const e of s)m(e,o)
return new h.default({data:this._combineSymbolParts(s,t,n)})}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then(e=>e.data)
const n=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),r=Object(i.default)(n,{responseType:"json",query:{f:"json"},...t})
this._ongoingRequests.set(e,r)
try{return(await r).data}catch(t){return this._ongoingRequests.delete(e),Promise.reject(t)}}_combineSymbolParts(e,t,n){if(!e||0===e.length)return null
const r={...e[0]}
if(e.length>1){r.symbolLayers=[]
for(const t of e){const e=t
r.symbolLayers.unshift(...e.symbolLayers)}}return n&&(r.callout=p),{type:"CIMSymbolReference",symbol:r,primitiveOverrides:t}}}function m(e,t){if(!e)return
const n=e.symbolLayers
if(!n)return
let r=n.length
for(;r--;){const e=n[r]
e&&!1!==e.enable&&"CIMVectorMarker"===e.type&&y(e,t)}}function y(e,t){const n=e.markerGraphics
if(n)for(const e of n){if(!e)continue
const n=e.symbol
if(n)switch(n.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":m(n,t)
break
case"CIMTextSymbol":n.fieldMap=t}}}},1077:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b}))
var r=n(862),i=n(878),s=n(20),o=n(920)
const a=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]
function l(e){return e instanceof r.a}function c(e){return e instanceof i.a?Object.keys(e.items):l(e)?Object(o.a)(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof i.a?e.items[t]:e[t]}function d(e){return e?e.declaredClass:null}function h(e,t){if(Object(s.j)(e))return!1
const n=t.split(".")
let r=e
for(const e of n){if("complete"===r.type)return!0
if("partial"!==r.type)return!1
{const t=r.diff[e]
if(!t)return!1
r=t}}return!0}function f(e,t){for(const n of t)if(h(e,n))return!0
return!1}function p(e,t){if(!("function"==typeof e||"function"==typeof t||Object(s.j)(e)&&Object(s.j)(t)))return Object(s.j)(e)||Object(s.j)(t)||"object"==typeof e&&"object"==typeof t&&d(e)!==d(t)?{type:"complete",oldValue:e,newValue:t}:function e(t,n){const r=t.diff
if(r&&"function"==typeof r)return r(t,n)
const i=c(t),o=c(n)
if(0===i.length&&0===o.length)return
if(!i.length||!o.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(t,n))return{type:"complete",oldValue:t,newValue:n}
const h=o.filter(e=>-1===i.indexOf(e)),f=i.filter(e=>-1===o.indexOf(e)),p=i.filter(e=>o.indexOf(e)>-1&&u(t,e)!==u(n,e)).concat(h,f).sort(),b=d(t)
if(b&&a.indexOf(b)>-1&&p.length)return{type:"complete",oldValue:t,newValue:n}
let m
const y=l(t)&&l(n)
for(const i of p){const o=u(t,i),a=u(n,i)
let l;(y||"function"!=typeof o&&"function"!=typeof a)&&o!==a&&(null==o&&null==a||(l=r&&r[i]&&"function"==typeof r[i]?r[i](o,a):"object"==typeof o&&"object"==typeof a&&d(o)===d(a)?e(o,a):{type:"complete",oldValue:o,newValue:a},Object(s.k)(l)&&(Object(s.k)(m)?m.diff[i]=l:m={type:"partial",diff:{[i]:l}})))}return m}(e,t)}function b(e){if(Object(s.j)(e))return!0
switch(e.type){case"complete":return!1
case"collection":{const t=e
for(const e of t.added)if(!b(e))return!1
for(const e of t.removed)if(!b(e))return!1
for(const e of t.changed)if(!b(e))return!1
return!0}case"partial":for(const t in e.diff)if(!b(e.diff[t]))return!1
return!0}}},1078:function(e,t,n){"use strict"
function r(e){var t
const n=e.layer
return"floorInfo"in n&&null!=(t=n.floorInfo)&&t.floorField&&"floors"in e.view?o(e.view.floors,n.floorInfo.floorField):null}function i(e,t){var n
return"floorInfo"in t&&null!=(n=t.floorInfo)&&n.floorField?o(e,t.floorInfo.floorField):null}function s(e,t){const{definitionExpression:n}=t
return e?n?`(${n}) AND (${e})`:e:n}function o(e,t){if(null==e||!e.length)return null
const n=e.filter(e=>""!==e).map(e=>`'${e}'`)
return n.push("''"),`${t} IN (${n.join(",")}) OR ${t} IS NULL`}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}))},1080:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}))
var r=n(970),i=n(1015),s=n(1035)
function o(e,t){return l(e,null,t)}const a=Object(i.b)({types:s.a})
function l(e,t,n){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(n&&n.messages&&n.messages.push(new r.a("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null):a(e,t,n):null}},1081:function(e,t,n){"use strict"
function r(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function i(){return r().startsWith("dark")}function s(){return"calcite-theme-"+(i()?"dark":"light")}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}))},1084:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}))
var r=n(976),i=n(944),s=n(1047)
const o={key:"type",base:i.a,typeMap:{algorithmic:r.a,multipart:s.a}}
function a(e){return e&&e.type?"algorithmic"===e.type?r.a.fromJSON(e):"multipart"===e.type?s.a.fromJSON(e):null:null}},1085:function(e,t,n){"use strict"
n.d(t,"a",(function(){return S}))
var r,i=n(856),s=n(354),o=n(863),a=n(177),l=n(876),c=n(858),u=(n(353),n(77),n(880)),d=n(865),h=n(857),f=n(864),p=n(1065),b=n(1233),m=n(1313),y=n(1019),g=n(1062)
const O=a.a.getLogger("esri.renderers.visualVariables.SizeVariable"),v=new o.a({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),j=new o.a({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"})
function w(e){if(null!=e)return"string"==typeof e||"number"==typeof e?Object(l.k)(e):"size"===e.type?Object(y.e)(e)?e:(delete(e={...e}).type,new x(e)):void 0}function _(e,t,n){if("object"!=typeof e)return e
const r=new x
return r.read(e,n),r}let x=r=class extends p.a{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:g.viewScaleRE.test(this.valueExpression)}}set expression(e){O.warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){Object(y.e)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),Object(y.e)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return Object(y.c)(this)}set maxDataValue(e){e&&this.stops&&(O.warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(O.warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return w(e)}readMaxSize(e,t,n){return _(e,0,n)}set minDataValue(e){e&&this.stops&&(O.warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(O.warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return w(e)}readMinSize(e,t,n){return _(e,0,n)}get arcadeRequired(){return!!this.valueExpression||this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value):e&&(O.warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return Object(y.d)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,t,n,r){if("$view.scale"===e){if(r&&r.messages){const e=this.index,t="string"==typeof e?e:`visualVariables[${e}]`
r.messages.push(new s.a("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:t+".valueExpression",context:r}))}}else t[n]=e}readValueUnit(e){return e?j.read(e):null}clone(){return new r({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(y.e)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(y.e)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone()})}flipSizes(){if(this.transformationType===y.b.ClampedLinear){const{minSize:e,maxSize:t}=this
return this.minSize=t,this.maxSize=e,this}if(this.transformationType===y.b.Stops){const e=this.stops,t=e.map(e=>e.size).reverse(),n=e.length
for(let r=0;r<n;r++)e[r].size=t[r]
return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(c.b)({readOnly:!0})],x.prototype,"cache",null),Object(i.a)([Object(c.b)({type:v.apiValues,json:{type:v.jsonValues,origins:{"web-map":{read:!1}},read:v.read,write:v.write}})],x.prototype,"axis",void 0),Object(i.a)([Object(c.b)({type:String,value:null,json:{read:!1}})],x.prototype,"expression",null),Object(i.a)([Object(c.b)()],x.prototype,"index",null),Object(i.a)([Object(c.b)({type:String,readOnly:!0})],x.prototype,"inputValueType",null),Object(i.a)([Object(c.b)({type:m.a,json:{write:!0}})],x.prototype,"legendOptions",void 0),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],x.prototype,"maxDataValue",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],x.prototype,"maxSize",null),Object(i.a)([Object(u.a)("maxSize")],x.prototype,"castMaxSize",null),Object(i.a)([Object(d.a)("maxSize")],x.prototype,"readMaxSize",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],x.prototype,"minDataValue",null),Object(i.a)([Object(c.b)({type:Number,value:null,json:{write:!0}})],x.prototype,"minSize",null),Object(i.a)([Object(u.a)("minSize")],x.prototype,"castMinSize",null),Object(i.a)([Object(d.a)("minSize")],x.prototype,"readMinSize",null),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],x.prototype,"normalizationField",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],x.prototype,"arcadeRequired",null),Object(i.a)([Object(c.b)({type:String})],x.prototype,"scaleBy",void 0),Object(i.a)([Object(c.b)({type:[b.a],value:null,json:{write:!0}})],x.prototype,"stops",null),Object(i.a)([Object(c.b)({type:["outline"],json:{write:!0}})],x.prototype,"target",void 0),Object(i.a)([Object(c.b)({type:String,readOnly:!0})],x.prototype,"transformationType",null),Object(i.a)([Object(c.b)({type:["size"],json:{type:["sizeInfo"]}})],x.prototype,"type",void 0),Object(i.a)([Object(c.b)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],x.prototype,"useSymbolValue",void 0),Object(i.a)([Object(c.b)({type:String,json:{write:!0}})],x.prototype,"valueExpression",void 0),Object(i.a)([Object(d.a)("valueExpression",["valueExpression","expression"])],x.prototype,"readValueExpression",null),Object(i.a)([Object(f.a)("web-scene","valueExpression")],x.prototype,"writeValueExpressionWebScene",null),Object(i.a)([Object(c.b)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],x.prototype,"valueRepresentation",void 0),Object(i.a)([Object(c.b)({type:j.apiValues,json:{write:j.write,origins:{"web-map":{read:!1},"web-scene":{write:!0}}}})],x.prototype,"valueUnit",void 0),Object(i.a)([Object(d.a)("valueUnit")],x.prototype,"readValueUnit",null),x=r=Object(i.a)([Object(h.a)("esri.renderers.visualVariables.SizeVariable")],x)
const S=x},1087:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r=function(e){return{setTimeout:(t,n)=>{const r=e.setTimeout(t,n)
return{remove:()=>e.clearTimeout(r)}}}}(globalThis)},1098:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i=n(856),s=n(873),o=n(860),a=n(858),l=(n(353),n(77),n(859),n(857))
let c=r=class extends o.a{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new r({color:this.color,ratio:this.ratio})}}
Object(i.a)([Object(a.b)({type:s.a,json:{write:!0}})],c.prototype,"color",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],c.prototype,"ratio",void 0),c=r=Object(i.a)([Object(l.a)("esri.renderers.support.HeatmapColorStop")],c)
const u=c},1100:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r,i=n(856),s=n(860),o=n(858),a=(n(353),n(77),n(859),n(857))
let l=r=class extends s.a{constructor(){super(...arguments),this.title=null}clone(){return new r({title:this.title})}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],l.prototype,"title",void 0),l=r=Object(i.a)([Object(a.a)("esri.renderers.support.LegendOptions")],l)
const c=l},1101:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}))
var r=n(906),i=n(354),s=n(20),o=n(1415),a=n(1270),l=n(1166)
function c(e,t,n,r){const i=d(e,{},{context:r,isLabelSymbol:!1})
Object(s.k)(i)&&(t[n]=i)}function u(e,t,n,r){const i=d(e,{},{context:r,isLabelSymbol:!0})
Object(s.k)(i)&&(t[n]=i)}function d(e,t,n){if(Object(s.j)(e))return null
const{context:r,isLabelSymbol:c}=n
if(r&&"web-scene"===r.origin&&!(e instanceof o.a)&&!(e instanceof l.a)){const n=Object(a.a)(e,{retainCIM:!0,hasLabelingContext:c})
return Object(s.k)(n.symbol)?n.symbol.write(t,r):(r.messages&&r.messages.push(new i.a("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:r,error:n.error})),null)}return r&&"web-map"===r.origin&&"web-style"===e.type?(r.messages&&r.messages.push(new i.a("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:r})),null):e.write(t,r)}function h(e,t){return Object(r.d)(e,null,t)}},1108:function(e,t,n){"use strict"
n.d(t,"a",(function(){return v}))
var r,i=n(856),s=n(863),o=n(860),a=n(20),l=n(858),c=(n(353),n(77),n(859),n(865)),u=n(857),d=n(864),h=n(881)
let f=r=class extends o.a{async collectRequiredFields(e,t){return Object(h.a)(e,t,this.expression)}clone(){return new r({expression:this.expression,title:this.title})}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],f.prototype,"expression",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],f.prototype,"title",void 0),f=r=Object(i.a)([Object(u.a)("esri.layers.support.FeatureExpressionInfo")],f)
const p=f
var b,m=n(1334)
const y=Object(s.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new s.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"})
let O=b=class extends o.a{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,n,r){t[n]=e.write({},r),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this
return this._isOverridden("mode")?this._get("mode"):Object(a.k)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new b({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}}
Object(i.a)([Object(l.b)({type:p,json:{write:!0}})],O.prototype,"featureExpressionInfo",void 0),Object(i.a)([Object(c.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],O.prototype,"readFeatureExpressionInfo",null),Object(i.a)([Object(d.a)("featureExpressionInfo",{featureExpressionInfo:{type:p},"featureExpression.value":{type:[0]}})],O.prototype,"writeFeatureExpressionInfo",null),Object(i.a)([Object(l.b)({type:y.apiValues,nonNullable:!0,json:{type:y.jsonValues,read:y.read,write:{writer:y.write,isRequired:!0}}})],O.prototype,"mode",null),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],O.prototype,"offset",void 0),Object(i.a)([Object(l.b)({type:m.b,json:{type:String,read:g.read,write:g.write}})],O.prototype,"unit",null),O=b=Object(i.a)([Object(u.a)("esri.layers.support.ElevationInfo")],O)
const v=O},1116:function(e,t,n){"use strict"
n.d(t,"a",(function(){return Ce})),n.d(t,"b",(function(){return ye})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return k})),n.d(t,"e",(function(){return K})),n.d(t,"f",(function(){return oe})),n.d(t,"g",(function(){return be})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return pe})),n.d(t,"j",(function(){return me}))
let r,i,s,o=!1,a=!1,l=!1,c=!1,u=null,d=!1
const h="undefined"!=typeof window?window:{},f=h.document||{head:{}},p=h.HTMLElement||class{},b={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},m=(()=>{let e=!1
try{f.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),y=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),g=(e,t,n,r)=>{n&&n.map(([n,r,i])=>{const s=v(e,n),o=O(t,i),a=j(n)
b.ael(s,r,o,a),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>b.rel(s,r,o,a))})},O=(e,t)=>n=>{try{e.$hostElement$[t](n)}catch(e){we(e)}},v=(e,t)=>4&t?f:8&t?h:16&t?f.body:e,j=e=>m?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),w="http://www.w3.org/1999/xlink",_=new WeakMap,x=(e,t,n,r)=>{let i=S(t,n),s=_e.get(i)
if(e=11===e.nodeType?e:f,s)if("string"==typeof s){e=e.head||e
let t,n=_.get(e)
n||_.set(e,n=new Set),n.has(i)||(t=f.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(i))}else!e.adoptedStyleSheets.includes(s)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])
return i},S=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),M={},E=e=>"object"==(e=typeof e)||"function"===e,L=(e,t,...n)=>{let r=null,i=null,s=null,o=!1,a=!1,l=[]
const c=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?c(r):null!=r&&"boolean"!=typeof r&&((o="function"!=typeof e&&!E(r))&&(r=String(r)),o&&a?l[l.length-1].$text$+=r:l.push(o?I(null,r):r),a=o)}
if(c(n),t&&(t.key&&(i=t.key),t.name&&(s=t.name),1)){const e=t.className||t.class
e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}if("function"==typeof e)return e(null===t?{}:t,l,A)
const u=I(e,null)
return u.$attrs$=t,l.length>0&&(u.$children$=l),u.$key$=i,u.$name$=s,u},I=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}
return n},k={},C=e=>e&&e.$tag$===k,A={forEach:(e,t)=>e.map(T).forEach(t),map:(e,t)=>e.map(T).map(t).map(P)},T=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),P=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs)
return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),L(e.vtag,t,...e.vchildren||[])}const t=I(e.vtag,e.vtext)
return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},R=(e,t,n,r,i,s)=>{if(n!==r){let o=je(e,t),a=t.toLowerCase()
if("class"===t){const t=e.classList,i=V(n),s=V(r)
t.remove(...i.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!i.includes(e)))}else if("style"===t){for(const t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="")
for(const t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("key"===t);else if("ref"===t)r&&r(e)
else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){const l=E(r)
if((o||l&&null!==r)&&!i)try{if(e.tagName.includes("-"))e[t]=r
else{let i=null==r?"":r
"list"===t?o=!1:null!=n&&e[t]==i||(e[t]=i)}}catch(e){}let c=!1
a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,c=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(w,t):e.removeAttribute(t)):(!o||4&s||i)&&!l&&(r=!0===r?"":r,c?e.setAttributeNS(w,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):je(h,a)?a.slice(2):a[2]+t.slice(3),n&&b.rel(e,t,n,!1),r&&b.ael(e,t,r,!1)}},N=/\s/,V=e=>e?e.split(N):[],z=(e,t,n,r)=>{const i=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,s=e&&e.$attrs$||M,o=t.$attrs$||M
for(r in s)r in o||R(i,r,s[r],void 0,n,t.$flags$)
for(r in o)R(i,r,s[r],o[r],n,t.$flags$)},D=(e,t,n,a)=>{let u,d,h,p=t.$children$[n],b=0
if(!o&&(l=!0,"slot"===p.$tag$&&(r&&a.classList.add(r+"-s"),p.$flags$|=p.$children$?2:1)),null!==p.$text$)u=p.$elm$=f.createTextNode(p.$text$)
else if(1&p.$flags$)u=p.$elm$=f.createTextNode("")
else{if(!c&&(c="svg"===p.$tag$),u=p.$elm$=f.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&p.$flags$?"slot-fb":p.$tag$),c&&"foreignObject"===p.$tag$&&(c=!1),z(null,p,c),null!=r&&u["s-si"]!==r&&u.classList.add(u["s-si"]=r),p.$children$)for(b=0;b<p.$children$.length;++b)d=D(e,p,b,u),d&&u.appendChild(d)
"svg"===p.$tag$?c=!1:"foreignObject"===u.tagName&&(c=!0)}return u["s-hn"]=s,3&p.$flags$&&(u["s-sr"]=!0,u["s-cr"]=i,u["s-sn"]=p.$name$||"",h=e&&e.$children$&&e.$children$[n],h&&h.$tag$===p.$tag$&&e.$elm$&&$(e.$elm$,!1)),u},$=(e,t)=>{b.$flags$|=1
const n=e.childNodes
for(let e=n.length-1;e>=0;e--){const r=n[e]
r["s-hn"]!==s&&r["s-ol"]&&(G(r).insertBefore(r,B(r)),r["s-ol"].remove(),r["s-ol"]=void 0,l=!0),t&&$(r,t)}b.$flags$&=-2},F=(e,t,n,r,i,o)=>{let a,l=e["s-cr"]&&e["s-cr"].parentNode||e
for(l.shadowRoot&&l.tagName===s&&(l=l.shadowRoot);i<=o;++i)r[i]&&(a=D(null,n,i,e),a&&(r[i].$elm$=a,l.insertBefore(a,B(t))))},U=(e,t,n,r,i)=>{for(;t<=n;++t)(r=e[t])&&(i=r.$elm$,Q(r),a=!0,i["s-ol"]?i["s-ol"].remove():$(i,!0),i.remove())},q=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),B=e=>e&&e["s-ol"]||e,G=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,H=(e,t)=>{const n=t.$elm$=e.$elm$,r=e.$children$,i=t.$children$,s=t.$tag$,o=t.$text$
let a
null!==o?(a=n["s-cr"])?a.parentNode.textContent=o:e.$text$!==o&&(n.data=o):(c="svg"===s||"foreignObject"!==s&&c,"slot"===s||z(e,t,c),null!==r&&null!==i?((e,t,n,r)=>{let i,s,o=0,a=0,l=0,c=0,u=t.length-1,d=t[0],h=t[u],f=r.length-1,p=r[0],b=r[f]
for(;o<=u&&a<=f;)if(null==d)d=t[++o]
else if(null==h)h=t[--u]
else if(null==p)p=r[++a]
else if(null==b)b=r[--f]
else if(q(d,p))H(d,p),d=t[++o],p=r[++a]
else if(q(h,b))H(h,b),h=t[--u],b=r[--f]
else if(q(d,b))"slot"!==d.$tag$&&"slot"!==b.$tag$||$(d.$elm$.parentNode,!1),H(d,b),e.insertBefore(d.$elm$,h.$elm$.nextSibling),d=t[++o],b=r[--f]
else if(q(h,p))"slot"!==d.$tag$&&"slot"!==b.$tag$||$(h.$elm$.parentNode,!1),H(h,p),e.insertBefore(h.$elm$,d.$elm$),h=t[--u],p=r[++a]
else{for(l=-1,c=o;c<=u;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===p.$key$){l=c
break}l>=0?(s=t[l],s.$tag$!==p.$tag$?i=D(t&&t[a],n,l,e):(H(s,p),t[l]=void 0,i=s.$elm$),p=r[++a]):(i=D(t&&t[a],n,a,e),p=r[++a]),i&&G(d.$elm$).insertBefore(i,B(d.$elm$))}o>u?F(e,null==r[f+1]?null:r[f+1].$elm$,n,r,a,f):a>f&&U(t,o,u)})(n,r,t,i):null!==i?(null!==e.$text$&&(n.textContent=""),F(n,null,t,i,0,i.length-1)):null!==r&&U(r,0,r.length-1),c&&"svg"===s&&(c=!1))},W=e=>{let t,n,r,i,s,o,a=e.childNodes
for(n=0,r=a.length;n<r;n++)if(t=a[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,i=0;i<r;i++)if(o=a[i].nodeType,a[i]["s-hn"]!==t["s-hn"]||""!==s){if(1===o&&s===a[i].getAttribute("slot")){t.hidden=!0
break}}else if(1===o||3===o&&""!==a[i].textContent.trim()){t.hidden=!0
break}W(t)}},J=[],Z=e=>{let t,n,r,i,s,o,l=0,c=e.childNodes,u=c.length
for(;l<u;l++){if(t=c[l],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(r=n.parentNode.childNodes,i=t["s-sn"],o=r.length-1;o>=0;o--)n=r[o],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(Y(n,i)?(s=J.find(e=>e.$nodeToRelocate$===n),a=!0,n["s-sn"]=n["s-sn"]||i,s?s.$slotRefNode$=t:J.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&J.map(e=>{Y(e.$nodeToRelocate$,n["s-sn"])&&(s=J.find(e=>e.$nodeToRelocate$===n),s&&!e.$slotRefNode$&&(e.$slotRefNode$=s.$slotRefNode$))})):J.some(e=>e.$nodeToRelocate$===n)||J.push({$nodeToRelocate$:n}))
1===t.nodeType&&Z(t)}},Y=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Q=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Q)},X=(e,t)=>{const n=e.$hostElement$,c=e.$cmpMeta$,u=e.$vnode$||I(null,null),d=C(t)?t:L(null,null,t)
if(s=n.tagName,c.$attrsToReflect$&&(d.$attrs$=d.$attrs$||{},c.$attrsToReflect$.map(([e,t])=>d.$attrs$[t]=n[e])),d.$tag$=null,d.$flags$|=4,e.$vnode$=d,d.$elm$=u.$elm$=n.shadowRoot||n,r=n["s-sc"],i=n["s-cr"],o=0!=(1&c.$flags$),a=!1,H(u,d),b.$flags$|=1,l){let e,t,n,r,i,s
Z(d.$elm$)
let o=0
for(;o<J.length;o++)e=J[o],t=e.$nodeToRelocate$,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t))
for(o=0;o<J.length;o++)if(e=J[o],t=e.$nodeToRelocate$,e.$slotRefNode$){for(r=e.$slotRefNode$.parentNode,i=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&r===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){i=s
break}(!i&&r!==t.parentNode||t.nextSibling!==i)&&t!==i&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),r.insertBefore(t,i))}else 1===t.nodeType&&(t.hidden=!0)}a&&W(d.$elm$),b.$flags$&=-2,J.length=0},K=(e,t,n)=>{const r=e
return{emit:e=>ee(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},ee=(e,t,n)=>{const r=b.ce(t,n)
return e.dispatchEvent(r),r},te=(e,t)=>{e.$flags$|=16,e.$ancestorComponent$
const n=()=>ne(e,t)
return ke(n)},ne=(e,t)=>{const n=e.$hostElement$,r=(e.$cmpMeta$.$tagName$,()=>{}),i=n
let s
return t?(ce(n,"componentWillLoad"),s=ae(i,"componentWillLoad")):(ce(n,"componentWillUpdate"),s=ae(i,"componentWillUpdate")),ce(n,"componentWillRender"),s=le(s,()=>ae(i,"componentWillRender")),r(),le(s,()=>re(e,i,t))},re=async(e,t,n)=>{const r=e.$hostElement$,i=(e.$cmpMeta$.$tagName$,()=>{})
r["s-rc"]
n&&(e=>{const t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,i=(t.$tagName$,()=>{}),s=x(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$)
10&r&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&r&&n.classList.add(s+"-s")),i()})(e)
const s=(e.$cmpMeta$.$tagName$,()=>{})
ie(e,t,r),s(),i(),se(e)},ie=(e,t,n)=>{try{u=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,X(e,t)}catch(t){we(t,e.$hostElement$)}return u=null,null},se=e=>{e.$cmpMeta$.$tagName$
const t=e.$hostElement$,n=()=>{},r=t
e.$ancestorComponent$
ae(r,"componentDidRender"),ce(t,"componentDidRender"),64&e.$flags$?(ae(r,"componentDidUpdate"),ce(t,"componentDidUpdate"),n()):(e.$flags$|=64,ae(r,"componentDidLoad"),ce(t,"componentDidLoad"),n())},oe=e=>{{const t=Oe(e),n=t.$hostElement$.isConnected
return n&&2==(18&t.$flags$)&&te(t,!1),n}},ae=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){we(e)}},le=(e,t)=>e&&e.then?e.then(t):t(),ce=(e,t)=>{},ue=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers)
const n=Object.entries(t.$members$),r=e.prototype
n.map(([e,[n]])=>{(31&n||32&n)&&Object.defineProperty(r,e,{get(){return t=e,Oe(this).$instanceValues$.get(t)
var t},set(n){((e,t,n,r)=>{const i=Oe(e),s=e,o=i.$instanceValues$.get(t),a=i.$flags$,l=s
var c,u
if(c=n,u=r.$members$[t][0],n=null==c||E(c)?c:4&u?"false"!==c&&(""===c||!!c):2&u?parseFloat(c):1&u?String(c):c,n!==o&&(i.$instanceValues$.set(t,n),1)){if(r.$watchers$&&128&a){const e=r.$watchers$[t]
e&&e.map(e=>{try{l[e](n,o,t)}catch(e){we(e,s)}})}if(2==(18&a)){if(l.componentShouldUpdate&&!1===l.componentShouldUpdate(n,o,t))return
te(i,!1)}}})(this,e,n,t)},configurable:!0,enumerable:!0})})
{const i=new Map
r.attributeChangedCallback=function(e,t,n){b.jmp(()=>{const t=i.get(e)
if(this.hasOwnProperty(t))n=this[t],delete this[t]
else if(r.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return
this[t]=(null!==n||"boolean"!=typeof this[t])&&n})},e.observedAttributes=n.filter(([e,t])=>15&t[0]).map(([e,n])=>{const r=n[1]||e
return i.set(r,e),512&n[0]&&t.$attrsToReflect$.push([e,r]),r})}}return e},de=async(e,t,n,r,i)=>{if(0==(32&t.$flags$)&&(i=e.constructor,t.$flags$|=32,customElements.whenDefined(n.$tagName$).then(()=>t.$flags$|=128),i.style)){let r=i.style
"string"!=typeof r&&(r=r[t.$modeName$=(e=>xe.map(t=>t(e)).find(e=>!!e))(e)])
const s=S(n,t.$modeName$)
if(!_e.has(s)){const e=(n.$tagName$,()=>{});((e,t,n)=>{let r=_e.get(e)
y&&n?(r=r||new CSSStyleSheet,r.replace(t)):r=t,_e.set(e,r)})(s,r,!!(1&n.$flags$)),e()}}t.$ancestorComponent$
const s=()=>te(t,!0)
s()},he=e=>{},fe=e=>{const t=e["s-cr"]=f.createComment("")
t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},pe=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]}
n.$members$=t[2],n.$listeners$=t[3],n.$watchers$=e.$watchers$,n.$attrsToReflect$=[]
const r=e.prototype.connectedCallback,i=e.prototype.disconnectedCallback
return Object.assign(e.prototype,{__registerHost(){ve(this,n)},connectedCallback(){(e=>{if(0==(1&b.$flags$)){const t=Oe(e),n=t.$cmpMeta$,r=(n.$tagName$,()=>{})
if(1&t.$flags$)g(e,t,n.$listeners$),he(t.$lazyInstance$)
else{let r
t.$flags$|=1,0,!r&&12&n.$flags$&&fe(e),n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t]
delete e[t],e[t]=n}}),de(e,t,n)}r()}})(this),r&&r.call(this)},disconnectedCallback(){(e=>{if(0==(1&b.$flags$)){const t=Oe(e)
t.$rmListeners$&&(t.$rmListeners$.map(e=>e()),t.$rmListeners$=void 0)}})(this),i&&i.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(16&n.$flags$)})}}),e.is=n.$tagName$,ue(e,n)},be=e=>{const t=new URL(e,b.$resourcesUrl$)
return t.origin!==h.location.origin?t.href:t.pathname},me=e=>b.$resourcesUrl$=e,ye=(e,t)=>t,ge=new WeakMap,Oe=e=>ge.get(e),ve=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map}
return g(e,n,t.$listeners$),ge.set(e,n)},je=(e,t)=>t in e,we=(e,t)=>(0,console.error)(e,t),_e=(new Map,new Map),xe=[],Se=[],Me=[],Ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){we(e)}e.length=0},Le=()=>{Ee(Se),Ee(Me),(d=Se.length>0)&&b.raf(Le)},Ie=e=>Promise.resolve(void 0).then(e),ke=((e,t)=>n=>{e.push(n),d||(d=!0,t&&4&b.$flags$?Ie(Le):b.raf(Le))})(Me,!0),Ce={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1}},1124:function(e,t,n){"use strict"
var r
n.d(t,"a",(function(){return r})),function(e){e[e.CGCS2000=4490]="CGCS2000",e[e.GCSMARS2000=104971]="GCSMARS2000",e[e.GCSMARS2000_SPHERE=104905]="GCSMARS2000_SPHERE",e[e.GCSMOON2000=104903]="GCSMOON2000"}(r||(r={}))},1129:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(899)
function i(){return function(e,t){if(!e[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`)
return{value:s(e[t])}}}function s(e){return function(t,...n){!function(e){const{type:t}=e
return e instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}(t)?e.call(this,t,...n):Object(r.d)(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click())}}},1144:function(e,t,n){"use strict"
function r(){const e=new Float32Array(6)
return e[0]=1,e[3]=1,e}function i(e,t,n,r){const i=t[r],s=t[r+1]
e[r]=n[0]*i+n[2]*s+n[4],e[r+1]=n[1]*i+n[3]*s+n[5]}function s(e,t,n,r=0,s=0,o=2){const a=s||t.length/o
for(let s=r;s<a;s++)i(e,t,n,s*o)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),Object.freeze({__proto__:null,create:r,clone:function(e){const t=new Float32Array(6)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},fromValues:function(e,t,n,r,i,s){const o=new Float32Array(6)
return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=i,o[5]=s,o},createView:function(e,t){return new Float32Array(e,t,6)},transform:i,transformMany:s})},1147:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return c}))
var r=n(893)
function i(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function s(e,t){const n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],a=t[5]
let l=n*s-r*i
return l?(l=1/l,e[0]=s*l,e[1]=-r*l,e[2]=-i*l,e[3]=n*l,e[4]=(i*a-s*o)*l,e[5]=(r*o-n*a)*l,e):null}function o(e,t,n){const r=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=n[0],u=n[1],d=n[2],h=n[3],f=n[4],p=n[5]
return e[0]=r*c+s*u,e[1]=i*c+o*u,e[2]=r*d+s*h,e[3]=i*d+o*h,e[4]=r*f+s*p+a,e[5]=i*f+o*p+l,e}function a(e,t,n){const r=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=Math.sin(n),u=Math.cos(n)
return e[0]=r*u+s*c,e[1]=i*u+o*c,e[2]=r*-c+s*u,e[3]=i*-c+o*u,e[4]=a,e[5]=l,e}function l(e,t,n){const r=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=n[0],u=n[1]
return e[0]=r*c,e[1]=i*c,e[2]=s*u,e[3]=o*u,e[4]=a,e[5]=l,e}function c(e,t,n){const r=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=n[0],u=n[1]
return e[0]=r,e[1]=i,e[2]=s,e[3]=o,e[4]=r*c+s*u+a,e[5]=i*c+o*u+l,e}function u(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function d(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function h(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function f(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}const p=o,b=f
Object.freeze({__proto__:null,copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},identity:i,set:function(e,t,n,r,i,s,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=s,e[5]=o,e},invert:s,determinant:function(e){return e[0]*e[3]-e[1]*e[2]},multiply:o,rotate:a,scale:l,translate:c,fromRotation:u,fromScaling:d,fromTranslation:h,str:function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+1)},add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e},subtract:f,multiplyScalar:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e},multiplyScalarAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]},equals:function(e,t){const n=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=t[0],u=t[1],d=t[2],h=t[3],f=t[4],p=t[5]
return Math.abs(n-c)<=r.a*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(i-u)<=r.a*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(s-d)<=r.a*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(o-h)<=r.a*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(a-f)<=r.a*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(l-p)<=r.a*Math.max(1,Math.abs(l),Math.abs(p))},mul:p,sub:b})},1149:function(e,t,n){"use strict"
function r(e,t,n,r){return function(e){return"function"==typeof e}(e)?e(t,n,r):e}function i(e){return[e.r,e.g,e.b,e.a]}function s(e,t,n){const r=e=>{let t=e.length
for(;t--;)if(-1===" /-,\n".indexOf(e.charAt(t)))return!1
return!0},i=[]
let s=0,a=-1
do{if(a=t.indexOf("[",s),a>=s){if(a>s){const e=t.substr(s,a-s)
i.push([e,null,r(e)])}if(s=a+1,a=t.indexOf("]",s),a>=s){if(a>s){const n=e[t.substr(s,a-s)]
n&&i.push([null,n,!1])}s=a+1}}}while(-1!==a)
if(s<t.length-1){const e=t.substr(s)
i.push([e,null,r(e)])}return e=>{let t="",r=null
for(const n of i){const[i,s,o]=n
if(i)o?r=i:(r&&(t+=r,r=null),t+=i)
else{const n=e.attributes[s]
n&&(r&&(t+=r,r=null),t+=n)}}return o(t,n)}}function o(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase()
case"Allcaps":return e.toUpperCase()
default:return e}}function a(e,t,n,r,i,s,o=!0){const a=t/i,l=n/s,c=Math.ceil(a/2),u=Math.ceil(l/2)
for(let n=0;n<s;n++)for(let d=0;d<i;d++){const h=4*(d+(o?s-n-1:n)*i)
let f=0,p=0,b=0,m=0,y=0,g=0,O=0
const v=(n+.5)*l
for(let r=Math.floor(n*l);r<(n+1)*l;r++){const n=Math.abs(v-(r+.5))/u,i=(d+.5)*a,s=n*n
for(let n=Math.floor(d*a);n<(d+1)*a;n++){let o=Math.abs(i-(n+.5))/c
const a=Math.sqrt(s+o*o)
a>=-1&&a<=1&&(f=2*a*a*a-3*a*a+1,f>0&&(o=4*(n+r*t),O+=f*e[o+3],b+=f,e[o+3]<255&&(f=f*e[o+3]/250),m+=f*e[o],y+=f*e[o+1],g+=f*e[o+2],p+=f))}}r[h]=m/p,r[h+1]=y/p,r[h+2]=g/p,r[h+3]=O/b}}function l(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}}function c(e){var t
return null==(t=e.data)?void 0:t.symbol}function u(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function d(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function h(e){return"CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type}function f(e){return"CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return b})),n.d(t,"m",(function(){return a})),n.d(t,"n",(function(){return c}))
const p=e=>isNaN(e)||!e?0:e,b=e=>{if(!e)return!1
for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":return!0}return!1}
function m(){return Promise.all([n.e(7),n.e(315)]).then(n.bind(null,1449))}},1183:function(e,t,n){"use strict"
n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return m}))
var r=n(873),i=n(906),s=n(931),o=n(77),a=n(20),l=n(876),c=n(867),u=n(1190),d=n(1317),h=n(1471)
const f=/\/resource\/(.*?)\.svg$/,p=new r.a("white")
function b(e){if(!e)return 0
if(Object(i.c)(e)){const t=function(e){const t=e.symbolLayers&&e.symbolLayers.length
if(!t)return
const n=e.symbolLayers.getItemAt(t-1)
return"outline"in n?Object(a.i)(n,"outline","size"):void 0}(e)
return Object(a.k)(t)?t:0}const t=Object(d.e)(e)
return t&&Object(l.i)(t.width)||0}function m(e){if(Object(a.j)(e)||!("symbolLayers"in e)||Object(a.j)(e.symbolLayers))return!1
switch(e.type){case"point-3d":return e.symbolLayers.some(e=>"object"===e.type)
case"line-3d":return e.symbolLayers.some(e=>"path"===e.type)
case"polygon-3d":return e.symbolLayers.some(e=>"object"===e.type||"extrude"===e.type)
default:return!1}}function y(e,t){const n=t.resource.href
return!Object(o.a)("esri-canvas-svg-support")&&e.styleOrigin&&f.test(n)?n.replace(f,"/resource/png/$1.png"):n}function g(e,t){if(!e)return null
let n=null
return Object(i.c)(e)?n=function(e){const t=e.symbolLayers
if(!t)return null
let n=null
return t.forEach(e=>{"object"===e.type&&null!=e.resource.href||(n="water"===e.type?Object(a.t)(e.color):Object(a.k)(e.material)?Object(a.t)(e.material.color):null)}),n?new r.a(n):null}(e):Object(i.b)(e)&&(n=e.color?new r.a(e.color):null),n?O(n,t):null}function O(e,t){if(null==t)return e
const n=e.toRgba()
return n[3]=n[3]*t,new r.a(n)}function v(e,t,n){var s,o,l
e&&(t||null!=n)&&(t&&(t=new r.a(t)),Object(i.c)(e)?function(e,t,n){const r=e.symbolLayers
if(!r)return
const i=e=>{const r=Object(a.k)(e)?e:null
return O(t=t||r||null!=n&&p,n)}
r.forEach(e=>{if("object"!==e.type||null==e.resource.href||t)if("water"===e.type)e.color=i(e.color)
else{const t=Object(a.k)(e.material)?e.material.color:null,r=i(t)
Object(a.j)(e.material)?e.material=new h.a({color:r}):e.material.color=r,null!=n&&"outline"in e&&Object(a.k)(e.outline)&&Object(a.k)(e.outline.color)&&(e.outline.color=O(e.outline.color,n))}})}(e,t,n):Object(i.b)(e)&&(s=e,l=n,(o=(o=t)||s.color)&&(s.color=O(o,l)),null!=l&&"outline"in s&&s.outline&&s.outline.color&&(s.outline.color=O(s.outline.color,l))))}function j(e){for(const t of e)if("number"==typeof t)return t
return null}function w(e,t,n){for(let r=0;r<3;r++){const i=e[r]
switch(i){case"symbol-value":return null!=n[r]?n[r]/t[r]:1
case"proportional":break
default:if(i&&t[r])return i/t[r]}}return 1}function _(e,t,n,r){switch(e){case"proportional":return n*r
case"symbol-value":return null!=t?t:n
default:return e}}async function x(e,t){if(e&&t)return Object(i.c)(e)?async function(e,t){const r=e.symbolLayers
r&&await Object(s.b)(r,async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t)
break
case"icon":case"line":case"text":!function(e,t){const n=j(t)
Object(a.k)(n)&&(e.size=n)}(e,t)
break
case"path":!function(e,t){const n=w(t,c.a,[e.width,void 0,e.height])
e.width=_(t[0],e.width,1,n),e.height=_(t[2],e.height,1,n)}(e,t)
break
case"object":await async function(e,t){const{resourceSize:r,symbolSize:i}=await async function(e){const t=await n.e(434).then(n.bind(null,1669)),r=await t.computeObjectLayerResourceSize(e,10),{width:i,height:s,depth:o}=e,a=[i,o,s]
let l=1
for(let e=0;e<3;e++)if(null!=a[e]){l=a[e]/r[e]
break}for(let e=0;e<3;e++)null==a[e]&&(a[e]=r[e]*l)
return{resourceSize:r,symbolSize:a}}(e),s=w(t,r,i)
e.width=_(t[0],i[0],r[0],s),e.depth=_(t[1],i[1],r[1],s),e.height=_(t[2],i[2],r[2],s)}(e,t)}}(e,t))}(e,t):void(Object(i.b)(e)&&function(e,t){const n=j(t)
if(!Object(a.j)(n))switch(e.type){case"simple-marker":e.size=n
break
case"picture-marker":{const t=e.width/e.height
t>1?(e.width=n,e.height=n*t):(e.width=n*t,e.height=n)
break}case"simple-line":e.width=n
break
case"text":e.font.size=n}}(e,t))}function S(e,t,n){if(e&&null!=t)if(Object(i.c)(e)){const r=e.symbolLayers
r&&r.forEach(e=>{if(e&&"object"===e.type)switch(n){case"tilt":e.tilt=t
break
case"roll":e.roll=t
break
default:e.heading=t}})}else Object(i.b)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=t))}function M(e){if(!e)return null
const t=e.effects.filter(e=>"bloom"!==e.type).map(e=>e.toJSON())
return Object(u.a)(t)}},1190:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return l}))
var r=n(354),i=n(109),s=n(1593),o=n(1456)
function a(e,t,n){try{return function(e){if(!e||0===e.length)return null
if(function(e){const t=e[0]
return!!t&&"scale"in t}(e)){const t=[]
for(const n of e)t.push({scale:n.scale,value:c(n.value)})
return t}return c(e)}(e)}catch(e){var r
null==n||null==(r=n.messages)||r.push(e)}return null}function l(e,t,n,r){try{const r=function(e){const t=Object(s.a)(e)
return t?Object(o.b)(t)?t.map(e=>e.toJSON()):t.map(({scale:e,effects:t})=>({scale:e,value:t.map(e=>e.toJSON())})):null}(e)
Object(i.c)(n,r,t)}catch(e){r.messages&&r.messages.push(e)}}function c(e){if(!e||!e.length)return""
const t=[]
for(const n of e){let e=[]
switch(n.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(n,"amount")]
break
case"blur":e=[u(n,"radius","pt")]
break
case"hue-rotate":e=[u(n,"angle","deg")]
break
case"drop-shadow":e=[u(n,"xoffset","pt"),u(n,"yoffset","pt"),u(n,"blurRadius","pt"),d(n,"color")]
break
case"bloom":e=[u(n,"strength"),u(n,"radius","pt"),u(n,"threshold")]}const r=`${n.type}(${e.filter(Boolean).join(" ")})`
Object(s.a)(r),t.push(r)}return t.join(" ")}function u(e,t,n){if(null==e[t])throw new r.a("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e})
return n?e[t]+n:""+e[t]}function d(e,t){if(null==e[t])throw new r.a("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e})
const n=e[t]
return`rgba(${n[0]||0}, ${n[1]||0}, ${n[2]||0}, ${n[3]/255||0})`}},1194:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r,i=n(856),s=n(858),o=(n(353),n(77),n(859),n(857)),a=n(1100)
let l=r=class extends a.a{constructor(){super(...arguments),this.showLegend=null}clone(){return new r({title:this.title,showLegend:this.showLegend})}}
Object(i.a)([Object(s.b)({type:Boolean,json:{write:!0}})],l.prototype,"showLegend",void 0),l=r=Object(i.a)([Object(o.a)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],l)
const c=l},1200:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return f}))
var r=n(660),i=n(354),s=n(861),o=n(292),a=n(914),l=n(926),c=n(1283)
const u={}
function d(e,t,n){return e.styleUrl?async function(e,t){try{return{data:(await p(e,t)).data,baseUrl:Object(o.I)(e),styleUrl:e}}catch(e){return Object(s.u)(e),null}}(e.styleUrl,n):e.styleName?function(e,t,n){const r=t&&t.portal||a.a.getDefault()
let s
const o=`${r.url} - ${r.user&&r.user.username} - ${e}`
return u[o]||(u[o]=function(e,t,n){return t.load(n).then(()=>{const r=new l.a({disableExtraQuery:!0,query:`owner:${b} AND type:${m} AND typekeywords:"${e}"`})
return t.queryItems(r,n)}).then(({results:t})=>{let r=null
const s=e.toLowerCase()
if(t&&Array.isArray(t))for(const e of t)if(e.typeKeywords.some(e=>e.toLowerCase()===s)&&e.type===m&&e.owner===b){r=e
break}if(!r)throw new i.a("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e})
return r.load(n)})}(e,r,n).then(e=>(s=e,e.fetchData())).then(t=>({data:t,baseUrl:s.itemUrl,styleName:e}))),u[o]}(e.styleName,t,n):Promise.reject(new i.a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function h(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function f(e,t){if("cimRef"===t)return e.cimRef
if(e.formatInfos&&!Object(c.c)())for(const t of e.formatInfos)if("gltf"===t.type)return t.href
return e.webRef}function p(e,t){const n={responseType:"json",query:{f:"json"},...t}
return Object(r.default)(Object(o.F)(e),n)}const b="esri_en",m="Style",y="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},1209:function(e,t,n){"use strict"
function r(e){return"string"==typeof e?document.getElementById(e):e}function i(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function s(e,t){const n=t.parentNode
n&&n.insertBefore(e,t)}function o(e,t){for(;;){const n=e.firstChild
if(!n)break
t.appendChild(n)}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),(()=>{if("function"==typeof Element.prototype.closest)return(e,t)=>e.closest(t)
Element.prototype.matches||Element.prototype.msMatchesSelector})()},1216:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r,i=n(856),s=n(354),o=n(858),a=(n(353),n(77),n(859),n(857)),l=n(864),c=n(1065)
let u=r=class extends c.a{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,t,n,r){if(r&&r.messages){const e=`visualVariables[${this.index}]`
r.messages.push(new s.a("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:r}))}}clone(){return new r({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})}}
Object(i.a)([Object(o.b)({readOnly:!0})],u.prototype,"cache",null),Object(i.a)([Object(o.b)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],u.prototype,"axis",void 0),Object(i.a)([Object(o.b)({type:["rotation"],json:{type:["rotationInfo"]}})],u.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],u.prototype,"rotationType",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),Object(i.a)([Object(l.a)("web-scene","valueExpressionTitle")],u.prototype,"writeValueExpressionTitleWebScene",null),u=r=Object(i.a)([Object(a.a)("esri.renderers.visualVariables.RotationVariable")],u)
const d=u},1222:function(e,t,n){"use strict"
n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return w}))
var r=n(899)
const i="http://www.w3.org/",s=i+"2000/svg",o=i+"1999/xlink"
let a,l=[],c=(e,t)=>{let n={}
return Object.keys(e).forEach(t=>{n[t]=e[t]}),t&&Object.keys(t).forEach(e=>{n[e]=t[e]}),n},u=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),d=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},h=(e,t,n)=>{if(""!==t.vnodeSelector)for(let r=n;r<e.length;r++)if(u(e[r],t))return r
return-1},f=(e,t,n,r)=>{let i=e[t]
if(""===i.vnodeSelector)return
let s=i.properties
if(!(s?void 0===s.key?s.bind:s.key:void 0))for(let s=0;s<e.length;s++)if(s!==t){let t=e[s]
if(u(t,i))throw new Error(`${n.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===r?r:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},p=e=>{if(e.properties){let t=e.properties.enterAnimation
t&&t(e.domNode,e.properties)}},b=[],m=!1,y=e=>{(e.children||[]).forEach(y),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},g=()=>{m=!1,b.forEach(y),b.length=0},O=e=>{b.push(e),m||(m=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(g,{timeout:16}):setTimeout(g,16))},v=e=>{let t=e.domNode
if(e.properties){let n=e.properties.exitAnimation
if(n){t.style.pointerEvents="none"
let r=()=>{t.parentNode&&(t.parentNode.removeChild(t),O(e))}
return void n(t,r,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),O(e))},j=(e,t,n)=>{if(!t)return
let i=n.eventHandlerInterceptor,a=Object.keys(t),l=a.length
for(let c=0;c<l;c++){let l=a[c],u=t[l]
if("className"===l)throw new Error('Property "className" is not supported, use "class".')
if("class"===l)x(e,u,!0)
else if("classes"===l){let t=Object.keys(u),n=t.length
for(let r=0;r<n;r++){let n=t[r]
u[n]&&e.classList.add(n)}}else if("styles"===l){let t=Object.keys(u),r=t.length
for(let i=0;i<r;i++){let r=t[i],s=u[r]
s&&(d(s),n.styleApplyer(e,r,s))}}else if("key"!==l&&null!=u){let a=typeof u
"function"===a?(0===l.lastIndexOf("on",0)&&(i&&(u=i(l,u,e,t)),"oninput"===l&&function(){let e=u
u=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}()),e[l]=u):n.namespace===s?"href"===l?e.setAttributeNS(o,l,u):e.setAttribute(l,u):"string"===a&&"value"!==l?"innerHTML"===l?e[l]=r.h.sanitize(u):e.setAttribute(l,u):e[l]=u}}},w=(e,t,n)=>{((e,t,n)=>{if(t)for(let r of t)_(r,e,void 0,n)})(e,t.children,n),t.text&&(e.textContent=t.text),j(e,t.properties,n),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,n,t.vnodeSelector,t.properties,t.children])},_=(e,t,n,r)=>{let i,o=0,a=e.vnodeSelector,l=t.ownerDocument
if(""===a)i=e.domNode=l.createTextNode(e.text),void 0!==n?t.insertBefore(i,n):t.appendChild(i)
else{for(let u=0;u<=a.length;++u){let d=a.charAt(u)
if(u===a.length||"."===d||"#"===d){let d=a.charAt(o-1),h=a.slice(o,u)
"."===d?i.classList.add(h):"#"===d?i.id=h:("svg"===h&&(r=c(r,{namespace:s})),void 0!==r.namespace?i=e.domNode=l.createElementNS(r.namespace,h):(i=e.domNode=e.domNode||l.createElement(h),"input"===h&&e.properties&&void 0!==e.properties.type&&i.setAttribute("type",e.properties.type)),void 0!==n?t.insertBefore(i,n):i.parentNode!==t&&t.appendChild(i)),o=u+1}}w(i,e,r)}},x=(e,t,n)=>{t&&t.split(" ").forEach(t=>{t&&e.classList.toggle(t,n)})},S=(e,t,n,i)=>{if(!n)return
let a=!1,l=Object.keys(n),c=l.length
for(let u=0;u<c;u++){let c=l[u],h=n[c],f=t[c]
if("class"===c)f!==h&&(x(e,f,!1),x(e,h,!0))
else if("classes"===c){let t=e.classList,n=Object.keys(h),r=n.length
for(let e=0;e<r;e++){let r=n[e],i=!!h[r]
i!==!!f[r]&&(a=!0,i?t.add(r):t.remove(r))}}else if("styles"===c){let t=Object.keys(h),n=t.length
for(let r=0;r<n;r++){let n=t[r],s=h[n]
s!==f[n]&&(a=!0,s?(d(s),i.styleApplyer(e,n,s)):i.styleApplyer(e,n,""))}}else if(h||"string"!=typeof f||(h=""),"value"===c){let t=e[c]
t!==h&&(e["oninput-value"]?t===e["oninput-value"]:h!==f)&&(e[c]=h,e["oninput-value"]=void 0),h!==f&&(a=!0)}else if(h!==f){let t=typeof h
"function"===t&&i.eventHandlerInterceptor||(i.namespace===s?"href"===c?e.setAttributeNS(o,c,h):e.setAttribute(c,h):"string"===t?"innerHTML"===c?e[c]=r.h.sanitize(h):"role"===c&&""===h?e.removeAttribute(c):e.setAttribute(c,h):e[c]!==h&&(e[c]=h),a=!0)}}return a}
a=(e,t,n)=>{let r=e.domNode,i=!1
if(e===t)return!1
let o=!1
if(""===t.vnodeSelector){if(t.text!==e.text){let e=r.ownerDocument.createTextNode(t.text)
return r.parentNode.replaceChild(e,r),t.domNode=e,i=!0,i}t.domNode=r}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(n=c(n,{namespace:s})),e.text!==t.text&&(o=!0,void 0===t.text?r.removeChild(r.firstChild):r.textContent=t.text),t.domNode=r,o=((e,t,n,r,i)=>{if(n===r)return!1
r=r||l
let s,o=(n=n||l).length,c=r.length,d=0,b=0,m=!1
for(;b<c;){let l=d<o?n[d]:void 0,c=r[b]
if(void 0!==l&&u(l,c))m=a(l,c,i)||m,d++
else{let l=h(n,c,d+1)
if(l>=0){for(s=d;s<l;s++)v(n[s]),f(n,s,e,"removed")
m=a(n[l],c,i)||m,d=l+1}else _(c,t,d<o?n[d].domNode:void 0,i),p(c),f(r,b,e,"added")}b++}if(o>d)for(s=d;s<o;s++)v(n[s]),f(n,s,e,"removed")
return m})(t,r,e.children,t.children,n)||o,o=S(r,e.properties,t.properties,n)||o,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[r,n,t.vnodeSelector,t.properties,t.children])
return o&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(r,t.properties,e.properties),i}
let M=(e,t)=>({getLastRender:()=>e,update:n=>{if(e.vnodeSelector!==n.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)")
let r=e
e=n,a(r,n,t)},domNode:e.domNode})},1223:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(1254)
let i,s=(e,t)=>{let n=[]
for(;e&&e!==t;)n.push(e),e=e.parentNode
return n}
i=Array.prototype.find?(e,t)=>e.find(t):(e,t)=>e.filter(t)[0]
let o=(e,t)=>{let n=e
return t.forEach(e=>{n=n&&n.children?i(n.children,t=>t.domNode===e):void 0}),n},a=(e,t,n)=>{let r=function(r){n("domEvent",r)
let i=t(),a=s(r.currentTarget,i.domNode)
a.reverse()
let l,c=o(i.getLastRender(),a)
return e.scheduleRender(),c&&(l=c.properties["on"+r.type].apply(c.properties.bind||this,arguments)),n("domEventProcessed",r),l}
return(e,t,n,i)=>r},l=e=>{let t,n,i=Object(r.a)(e),s=i.performanceLogger,o=!0,l=!1,c=[],u=[],d=(e,n,r)=>{let o
i.eventHandlerInterceptor=a(t,()=>o,s),o=e(n,r(),i),c.push(o),u.push(r)},h=()=>{if(n=void 0,o){o=!1,s("renderStart",void 0)
for(let e=0;e<c.length;e++){let t=u[e]()
s("rendered",void 0),c[e].update(t),s("patched",void 0)}s("renderDone",void 0),o=!0}}
return t={renderNow:h,scheduleRender:()=>{n||l||(n=requestAnimationFrame(h))},stop:()=>{n&&(cancelAnimationFrame(n),n=void 0),l=!0},resume:()=>{l=!1,o=!0,t.scheduleRender()},append:(e,t)=>{d(r.b.append,e,t)},insertBefore:(e,t)=>{d(r.b.insertBefore,e,t)},merge:(e,t)=>{d(r.b.merge,e,t)},replace:(e,t)=>{d(r.b.replace,e,t)},detach:e=>{for(let t=0;t<u.length;t++)if(u[t]===e)return u.splice(t,1),c.splice(t,1)[0]
throw new Error("renderFunction was not found")}},t}},1233:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i=n(856),s=n(860),o=n(876),a=n(858),l=(n(353),n(77),n(859),n(857))
let c=r=class extends s.a{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new r({label:this.label,size:this.size,value:this.value})}}
Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(a.b)({type:Number,cast:o.k,json:{write:!0}})],c.prototype,"size",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],c.prototype,"value",void 0),c=r=Object(i.a)([Object(l.a)("esri.renderers.visualVariables.support.SizeStop")],c)
const u=c},1245:function(e,t,n){"use strict"
function r(){const e=crypto.getRandomValues(new Uint16Array(8))
e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768
const t=t=>e[t].toString(16)
return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}n.d(t,"a",(function(){return r}))},1254:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}))
var r=n(1222)
const i={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,n)=>{"-"===t.charAt(0)?e.style.setProperty(t,n):e.style[t]=n}}
let s=e=>Object(r.c)(i,e),o={create:(e,t)=>(t=s(t),Object(r.a)(e,document.createElement("div"),void 0,t),Object(r.b)(e,t)),append:(e,t,n)=>(n=s(n),Object(r.a)(t,e,void 0,n),Object(r.b)(t,n)),insertBefore:(e,t,n)=>(n=s(n),Object(r.a)(t,e.parentNode,e,n),Object(r.b)(t,n)),merge:(e,t,n)=>(n=s(n),t.domNode=e,Object(r.d)(e,t,n),Object(r.b)(t,n)),replace:(e,t,n)=>(n=s(n),Object(r.a)(t,e.parentNode,e,n),e.parentNode.removeChild(e),Object(r.b)(t,n))}},1255:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o}))
const r=new Map
function i(){r.clear()}function s(e){return r.get(e)}function o(e,t){r.set(e,t)}function a(e){r.delete(e)}},1256:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return l}))
var r=n(923)
const i=Symbol("widget"),s=[],o={},a=new WeakMap
function l(e,t){let n=t.children
if(n&&n.length)for(let t=0;t<n.length;++t)n[t]=l(e,n[t])
else n=s
const r=t.vnodeSelector
if(h(r)){const i=t.properties||o,s=i.key||r
return{vnodeSelector:"div",properties:{key:s,afterCreate:c,afterUpdate:u,afterRemoved:d,parentWidget:e,widgetConstructor:r,widgetProperties:{...i,key:s,children:n}},children:void 0,text:void 0,domNode:null}}return t}function c(e,t,n,{parentWidget:i,widgetConstructor:s,widgetProperties:o}){const l=new s(o)
l.container=e,a.set(e,l),null==l.afterCreate||l.afterCreate(l,e),i._internalHandles.add(Object(r.c)(()=>d(e)))}function u(e,t,n,{widgetProperties:r}){const i=a.get(e)
i&&(i.set(r),null==i.afterUpdate||i.afterUpdate(i,e))}function d(e){const t=a.get(e)
t&&(t.destroy(),a.delete(e))}function h(e){return"function"==typeof e&&e[i]}},1259:function(e,t,n){"use strict"
function r(e){return e=e||globalThis.location.hostname,c.some(t=>{var n
return null!=(null==(n=e)?void 0:n.match(t))})}function i(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(a)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))
const s=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,a=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,s,o,/^jsapps.esri.com$/,a,l]},1270:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var r=n(906),i=n(354),s=n(1166),o=n(1282),a=n(1022),l=n(1473),c=n(1105),u=n(1373),d=n(1014),h=n(1208),f=n(1142),p=n(1472)
const b={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0}
function m(e,t=b){if(!e)return{symbol:null}
const{retainId:n=b.retainId,ignoreDrivers:m=b.ignoreDrivers,hasLabelingContext:y=b.hasLabelingContext,retainCIM:g=b.retainCIM}=t
let O
if(Object(r.c)(e)||e instanceof s.a)O=e.clone()
else if("cim"===e.type){var v,j
const t=null==(v=e.data)||null==(j=v.symbol)?void 0:j.type
if("CIMPointSymbol"!==t)return{error:new i.a("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})}
O=g?e.clone():o.a.fromCIMSymbol(e)}else if(e instanceof a.a)O=l.a.fromSimpleLineSymbol(e)
else if(e instanceof c.a)O=o.a.fromSimpleMarkerSymbol(e)
else if(e instanceof u.a)O=o.a.fromPictureMarkerSymbol(e)
else if(e instanceof d.a)O=h.a.fromSimpleFillSymbol(e)
else{if(!(e instanceof f.a))return{error:new i.a("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})}
O=y?p.a.fromTextSymbol(e):o.a.fromTextSymbol(e)}if(n&&"cim"!==O.type&&(O.id=e.id),m&&Object(r.c)(O))for(let e=0;e<O.symbolLayers.length;++e)O.symbolLayers.getItemAt(e)._ignoreDrivers=!0
return{symbol:O}}},1271:function(e,t,n){"use strict"
function r(e){return"h"in e&&"s"in e&&"v"in e}function i(e){return"l"in e&&"a"in e&&"b"in e}function s(e){return"l"in e&&"c"in e&&"h"in e}n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return b}))
const o=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],a=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]
function l(e,t){const n=[]
let r,i
if(e[0].length!==t.length)throw"dimensions do not match"
const s=e.length,o=e[0].length
let a=0
for(r=0;r<s;r++){for(a=0,i=0;i<o;i++)a+=e[r][i]*t[i]
n.push(a)}return n}function c(e){const t=[e.r/255,e.g/255,e.b/255].map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4),n=l(o,t)
return{x:100*n[0],y:100*n[1],z:100*n[2]}}function u(e){const t=l(a,[e.x/100,e.y/100,e.z/100]).map(e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055
return Math.min(1,Math.max(t,0))})
return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function d(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map(e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29)
return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function h(e){const t=e.l,n=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map(e=>e>6/29?e**3:3*(6/29)**2*(e-4/29))
return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function f(e){return d(c(e))}function p(e){return u(h(e))}function b(e){return function(e){return"r"in e&&"g"in e&&"b"in e}(e)?e:s(e)?function(e){return u(h(function(e){const t=e.l,n=e.c,r=e.h
return{l:t,a:n*Math.cos(r),b:n*Math.sin(r)}}(e)))}(e):i(e)?p(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?u(e):r(e)?function(e){const t=(e.h+360)%360/60,n=e.s/100,r=e.v/100*255,i=r*n,s=i*(1-Math.abs(t%2-1))
let o
switch(Math.floor(t)){case 0:o={r:i,g:s,b:0}
break
case 1:o={r:s,g:i,b:0}
break
case 2:o={r:0,g:i,b:s}
break
case 3:o={r:0,g:s,b:i}
break
case 4:o={r:s,g:0,b:i}
break
case 5:case 6:o={r:i,g:0,b:s}
break
default:o={r:0,g:0,b:0}}return o.r=Math.round(o.r+r-i),o.g=Math.round(o.g+r-i),o.b=Math.round(o.b+r-i),o}(e):e}function m(e){return r(e)?e:function(e){const t=e.r,n=e.g,r=e.b,i=Math.max(t,n,r),s=i-Math.min(t,n,r)
let o=i,a=0===s?0:i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4,l=0===s?0:s/o
return a<0&&(a+=6),a*=60,l*=100,o*=100/255,{h:a,s:l,v:o}}(b(e))}function y(e){return i(e)?e:f(b(e))}function g(e){return s(e)?e:function(e){return function(e){const t=e.l,n=e.a,r=e.b,i=Math.sqrt(n*n+r*r)
let s=Math.atan2(r,n)
return s=s>0?s:s+2*Math.PI,{l:t,c:i,h:s}}(d(c(e)))}(b(e))}function O(e,t){const n=f(e)
return n.l*=1-t,p(n)}},1283:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}))
var r=n(77)
const i=()=>!!Object(r.a)("enable-feature:force-wosr"),s=()=>!!Object(r.a)("enable-feature:direct-3d-object-feature-layer-display"),o=()=>!!Object(r.a)("enable-feature:precipitation")},1293:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r,i=n(856),s=n(873),o=n(860),a=n(858),l=(n(353),n(77),n(859)),c=n(857),u=n(864)
let d=r=class extends o.a{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,n){t[n]=null==e?0:e}clone(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}}
Object(i.a)([Object(a.b)({type:s.a,json:{type:[l.a],write:!0}})],d.prototype,"color",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],d.prototype,"label",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],d.prototype,"value",void 0),Object(i.a)([Object(u.a)("value")],d.prototype,"writeValue",null),d=r=Object(i.a)([Object(c.a)("esri.renderers.visualVariables.support.ColorStop")],d)
const h=d},1313:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r,i=n(856),s=n(858),o=(n(353),n(77),n(859),n(857)),a=n(1194)
let l=r=class extends a.a{constructor(){super(...arguments),this.customValues=null}clone(){return new r({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})}}
Object(i.a)([Object(s.b)({type:[Number],json:{write:!0}})],l.prototype,"customValues",void 0),l=r=Object(i.a)([Object(o.a)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],l)
const c=l},1314:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i=n(856),s=n(860),o=n(858),a=(n(353),n(77),n(859),n(857)),l=n(1036)
let c=r=class extends s.a{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol)
return`${this.minValue}.${this.maxValue}.${e}`}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(i.a)([Object(o.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],c.prototype,"minValue",void 0),Object(i.a)([Object(o.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],c.prototype,"maxValue",void 0),Object(i.a)([Object(o.b)(l.b)],c.prototype,"symbol",void 0),c=r=Object(i.a)([Object(a.a)("esri.renderers.support.ClassBreakInfo")],c)
const u=c},1317:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return b}))
var r=n(897),i=n(873),s=n(660),o=n(1335),a=n(876),l=n(1318)
const c="picture-fill",u="simple-fill",d="simple-marker",h=new o.a(1e3)
function f(e){const t=e.style
let n=null
if(e)switch(e.type){case d:"cross"!==t&&"x"!==t&&(n=e.color)
break
case u:"solid"===t?n=e.color:"none"!==t&&(n={type:"pattern",x:0,y:0,src:Object(r.b)(`esri/symbols/patterns/${t}.png`),width:5,height:5})
break
case c:n={type:"pattern",src:e.url,width:Object(a.h)(e.width)*e.xscale,height:Object(a.h)(e.height)*e.yscale,x:Object(a.h)(e.xoffset),y:Object(a.h)(e.yoffset)}
break
case"text":n=e.color
break
case"cim":n=Object(l.b)(e)}return n}function p(e,t){const n=e+"-"+t
return void 0!==h.get(n)?Promise.resolve(h.get(n)):Object(s.default)(e,{responseType:"image"}).then(e=>{const r=e.data,i=r.naturalWidth,s=r.naturalHeight,o=document.createElement("canvas")
o.width=i,o.height=s
const a=o.getContext("2d")
a.fillStyle=t,a.fillRect(0,0,i,s),a.globalCompositeOperation="destination-in",a.drawImage(r,0,0)
const l=o.toDataURL()
return h.put(n,l),l})}function b(e){if(!e)return null
let t
switch(e.type){case u:case c:case d:t=b(e.outline)
break
case"simple-line":{const n=Object(a.h)(e.width)
"none"!==e.style&&0!==n&&(t={color:e.color,style:m(e.style),width:n,cap:e.cap,join:"miter"===e.join?Object(a.h)(e.miterLimit):e.join})
break}default:t=null}return t}const m=function(){const e={}
return function(t){if(e[t])return e[t]
const n=t.replace(/-/g,"")
return e[t]=n,n}}(),y=new i.a([128,128,128])},1318:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return o}))
var r=n(873),i=n(1149)
function s(e){const t=Object(i.n)(e)
if("CIMTextSymbol"===t.type)return t.height
let n=0
if(t.symbolLayers)for(const e of t.symbolLayers)Object(i.i)(e)&&e.size>n?n=e.size:Object(i.k)(e)&&e.width>n?n=e.width:Object(i.h)(e)
return n}function o(e,t,n){const r=Object(i.n)(e),o=s(e)
0!==o?a(r,t/o,!1,n):function(e,t){if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const n of e.symbolLayers)switch(n.type){case"CIMPictureMarker":case"CIMVectorMarker":n.size=t
break
case"CIMPictureStroke":case"CIMSolidStroke":n.width=t}}else e.height=t}(r,t)}function a(e,t,n,r){if("CIMTextSymbol"!==e.type){if(n&&e.effects)for(const n of e.effects)c(n,t)
if(e.symbolLayers)for(const n of e.symbolLayers)switch(n.type){case"CIMPictureMarker":case"CIMVectorMarker":l(n,t,r)
break
case"CIMPictureStroke":case"CIMSolidStroke":null!=r&&r.preserveOutlineWidth||!n.width||(n.width*=t)
break
case"CIMPictureFill":n.height&&(n.height*=t),n.offsetX&&(n.offsetX*=t),n.offsetY&&(n.offsetY*=t)
break
case"CIMHatchFill":a(n.lineSymbol,t,!0,{...r,preserveOutlineWidth:!1}),n.offsetX&&(n.offsetX*=t),n.offsetY&&(n.offsetY*=t),n.separation&&(n.separation*=t)}}else e.height*=t}function l(e,t,n){if(e.markerPlacement&&function(e,t){switch(Object(i.j)(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const n=e.placementTemplate.map(e=>e*t)
e.placementTemplate=n}break
case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const n=e.placementTemplate.map(e=>e*t)
e.placementTemplate=n}break
case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t)
break
case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t)
break
case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break
case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t)
break
case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t)
break
case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size*=t,"CIMVectorMarker"===e.type&&e.markerGraphics)for(const r of e.markerGraphics)e.scaleSymbolsProportionally||a(r.symbol,t,!0,n)}function c(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t)
break
case"CIMGeometricEffectBuffer":e.size&&(e.size*=t)
break
case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t)
break
case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const n=e.dashTemplate.map(e=>e*t)
e.dashTemplate=n}break
case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t)
break
case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t)
break
case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t)
break
case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t)
break
case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t)
break
case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function u(e){const t=[]
return function e(t,n){let r
r="CIMTextSymbol"===t.type?t.symbol:t
const s="CIMPolygonSymbol"===t.type
if(r.symbolLayers)for(const t of r.symbolLayers)if(!(t.colorLocked||s&&(Object(i.k)(t)||Object(i.i)(t)&&t.markerPlacement&&Object(i.j)(t.markerPlacement))))switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor&&d(n,t.tintColor)
break
case"CIMVectorMarker":t.markerGraphics.forEach(t=>{e(t.symbol,n)})
break
case"CIMSolidStroke":case"CIMSolidFill":d(n,t.color)
break
case"CIMHatchFill":e(t.lineSymbol,n)}}(Object(i.n)(e),t),t.length?new r.a(Object(i.e)(t[0])):null}function d(e,t){for(const n of e)if(n.join(".")===t.join("."))return
e.push(t)}function h(e,t,n){t instanceof r.a||(t=new r.a(t))
const s=Object(i.n)(e)
s&&function e(t,n,r){let s
s="CIMTextSymbol"===t.type?t.symbol:t
const o="CIMPolygonSymbol"===s.type
if(s.symbolLayers)for(const t of s.symbolLayers){if(t.colorLocked)continue
if(o)if(r){const{layersToColor:e}=r
if((Object(i.k)(t)||Object(i.i)(t)&&t.markerPlacement&&Object(i.j)(t.markerPlacement))&&"fill"===e||Object(i.h)(t)&&"outline"===e)continue}else if(Object(i.k)(t)||Object(i.i)(t)&&t.markerPlacement&&Object(i.j)(t.markerPlacement))continue
const s=n.toArray()
switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor=s
break
case"CIMVectorMarker":t.markerGraphics.forEach(t=>{e(t.symbol,n,r)})
break
case"CIMSolidStroke":case"CIMSolidFill":t.color=s
break
case"CIMHatchFill":e(t.lineSymbol,n,r)}}}(s,t,n)}},1319:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}))
var r=n(874),i=n(899),s=(n(77),n(177),n(945))
function o(e,t){const n=a(e.level),r="h"+n
return delete e.level,Object(s.a)(r,{...e,class:Object(i.a)("esri-widget__heading",e.class),role:"heading","aria-level":String(n)},t)}function a(e){return Object(r.f)(Math.ceil(e),1,6)}function l(e,t=1){return a(e+t)}},1332:function(e,t,n){"use strict"
n.d(t,"a",(function(){return P}))
var r,i=n(856),s=n(863),o=n(860),a=n(178),l=n(858),c=n(859),u=n(865),d=n(857)
n(353),n(77)
let h=r=class extends o.a{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new r({minValue:this.minValue,maxValue:this.maxValue})}}
Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],h.prototype,"minValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],h.prototype,"maxValue",void 0),h=r=Object(i.a)([Object(d.a)("esri.renderer.support.AuthoringInfoClassBreakInfo")],h)
const f=h
var p
let b=p=class extends o.a{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new p({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:Object(a.a)(this.classBreakInfos)})}}
Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],b.prototype,"field",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],b.prototype,"label",void 0),Object(i.a)([Object(l.b)({type:[f],json:{write:!0}})],b.prototype,"classBreakInfos",void 0),b=p=Object(i.a)([Object(d.a)("esri.renderers.support.AuthoringInfoFieldInfo")],b)
const m=b
var y,g=n(880)
const O=new s.a({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),v=new s.a({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),j={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},w=["high-to-low","above-and-below","centered-on","extremes"],_=[...new Set(["high-to-low","above-and-below","centered-on","extremes","90-10","above","below","high-to-low","above-and-below","90-10","above","below"])],x=["seconds","minutes","hours","days","months","years"]
let S=y=class extends o.a{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new y({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}}
Object(i.a)([Object(l.b)({types:j,json:{write:!0}})],S.prototype,"endTime",void 0),Object(i.a)([Object(g.a)("endTime")],S.prototype,"castEndTime",null),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],S.prototype,"field",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],S.prototype,"maxSliderValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],S.prototype,"minSliderValue",void 0),Object(i.a)([Object(l.b)({types:j,json:{write:!0}})],S.prototype,"startTime",void 0),Object(i.a)([Object(g.a)("startTime")],S.prototype,"castStartTime",null),Object(i.a)([Object(l.b)({type:O.apiValues,value:null,json:{type:O.jsonValues,read:O.read,write:O.write}})],S.prototype,"style",null),Object(i.a)([Object(l.b)({type:_,value:null,json:{type:_,origins:{"web-scene":{type:w,write:{writer:(e,t)=>{w.indexOf(e)>-1&&(t.theme=e)}}}},write:!0}})],S.prototype,"theme",null),Object(i.a)([Object(l.b)({type:v.apiValues,json:{type:v.jsonValues,read:v.read,write:v.write}})],S.prototype,"type",void 0),Object(i.a)([Object(l.b)({type:x,json:{type:x,write:!0}})],S.prototype,"units",void 0),S=y=Object(i.a)([Object(d.a)("esri.renderers.support.AuthoringInfoVisualVariable")],S)
const M=S
var E,L=n(1084)
const I=new s.a({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),k=new s.a({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),C=new s.a({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),A=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"]
let T=E=class extends o.a{constructor(e){super(e),this.colorRamp=null,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type
return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){if(e)return Object(L.a)(e)}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type
return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e
"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new E({classificationMethod:this.classificationMethod,colorRamp:Object(a.a)(this.colorRamp),fields:this.fields&&this.fields.slice(0),field1:Object(a.a)(this.field1),field2:Object(a.a)(this.field2),focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(e=>e.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}}
Object(i.a)([Object(l.b)({type:I.apiValues,value:null,json:{type:I.jsonValues,read:I.read,write:I.write,origins:{"web-document":{default:"manual",type:I.jsonValues,read:I.read,write:I.write}}}})],T.prototype,"classificationMethod",null),Object(i.a)([Object(l.b)({types:L.b,json:{write:!0}})],T.prototype,"colorRamp",void 0),Object(i.a)([Object(u.a)("colorRamp")],T.prototype,"readColorRamp",null),Object(i.a)([Object(l.b)({type:[String],value:null,json:{write:!0}})],T.prototype,"fields",null),Object(i.a)([Object(l.b)({type:m,value:null,json:{write:!0}})],T.prototype,"field1",null),Object(i.a)([Object(l.b)({type:m,value:null,json:{write:!0}})],T.prototype,"field2",null),Object(i.a)([Object(l.b)({type:["flow-line","wave-front"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],T.prototype,"flowTheme",null),Object(i.a)([Object(l.b)({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],T.prototype,"focus",null),Object(i.a)([Object(l.b)({type:Number,value:null,json:{type:c.a,write:!0}})],T.prototype,"numClasses",null),Object(i.a)([Object(l.b)({type:A,json:{type:A,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],T.prototype,"lengthUnit",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],T.prototype,"maxSliderValue",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],T.prototype,"minSliderValue",void 0),Object(i.a)([Object(l.b)({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],T.prototype,"statistics",null),Object(i.a)([Object(l.b)({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],T.prototype,"standardDeviationInterval",null),Object(i.a)([Object(l.b)({type:k.apiValues,value:null,json:{type:k.jsonValues,read:k.read,write:k.write,origins:{"web-scene":{type:C.jsonValues,write:{writer:C.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],T.prototype,"type",null),Object(i.a)([Object(l.b)({type:[M],json:{write:!0}})],T.prototype,"visualVariables",void 0),Object(i.a)([Object(l.b)({type:["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],T.prototype,"univariateSymbolStyle",null),Object(i.a)([Object(l.b)({type:["high-to-low","above-and-below","above","below","90-10"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],T.prototype,"univariateTheme",null),T=E=Object(i.a)([Object(d.a)("esri.renderers.support.AuthoringInfo")],T)
const P=T},1334:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}))
var r=n(999)
function i(e){return null!=r.a[e]}function s(e){return 1/(r.a[e]||1)}const o=function(){const e=Object.keys(r.a)
return e.sort(),e}()},1335:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(1002)
class i{constructor(e,t){this._storage=new r.c,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t){this._storage.put(e,t,1,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}}},1350:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=1350},1360:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r,i=n(856),s=n(860),o=n(858),a=(n(353),n(77),n(880)),l=n(857),c=n(1036)
let u=r=class extends s.a{constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.value=null}castValue(e){return null==e||"string"==typeof e||"number"==typeof e?e:""+e}clone(){return new r({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol&&this.symbol.toJSON())
return`${this.value}.${e}`}}
Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],u.prototype,"description",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0}})],u.prototype,"label",void 0),Object(i.a)([Object(o.b)(c.b)],u.prototype,"symbol",void 0),Object(i.a)([Object(o.b)({json:{type:String,write:{writer:(e,t)=>{t.value=null==e?void 0:e.toString()}}}})],u.prototype,"value",void 0),Object(i.a)([Object(a.a)("value")],u.prototype,"castValue",null),u=r=Object(i.a)([Object(l.a)("esri.renderers.support.UniqueValueInfo")],u)
const d=u},1374:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return a})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return o}))
var r,i,s=n(873);(i=r||(r={}))[i.size=22]="size",i[i.lineWidth=50]="lineWidth",i[i.maxSize=120]="maxSize",i[i.maxOutlineSize=80]="maxOutlineSize",i[i.tallSymbolWidth=20]="tallSymbolWidth"
const o={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]}
function a(e,t,n){const i=r.size
let s=i,o=i
e<1?s*=.75:e>1&&(o*=1.25)
let a=i,l=i
return t&&n&&(s=o=a=l=0),[{type:"path",path:[{command:"M",values:[a,0]},{command:"L",values:[n?a:.875*a,0]},{command:"L",values:[n?s-.5*a:0,o-.5*l]},{command:"L",values:[s-.5*a,o-.5*l]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[a,0]},{command:"L",values:[a,t?0:.125*l]},{command:"L",values:[s-.5*a,t?o-.5*l:l]},{command:"L",values:[s-.5*a,o-.5*l]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[s-.5*a,o-.5*l]},{command:"L",values:[n?s-.5*a:0,o-.5*l]},{command:"L",values:[n?s-.5*a:0,t?o-.5*l:l]},{command:"L",values:[s-.5*a,t?o-.5*l:l]},{command:"Z",values:[]}]}]}function l(e){const t=r.size,n=.5*e
return[{type:"path",path:[{command:"M",values:[0,.7*t*.5]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+n]},{command:"L",values:[0,.7*t+n-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+n]},{command:"L",values:[t,n]},{command:"L",values:[t,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,0]},{command:"L",values:[t,0]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[0,.7*t*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function u(e,t){let n=t?r.tallSymbolWidth:e
const i=e,s=t?4:6
n<=r.size?n-=.5*s:n-=s
const o=t?.35*n:.5*n
return[{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,.5*o]},{command:"L",values:[.5*n,o]},{command:"L",values:[0,.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*n,o]},{command:"L",values:[.5*n,i]},{command:"L",values:[0,i-.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*n,o]},{command:"L",values:[.5*n,i]},{command:"L",values:[n,i-.5*o]},{command:"L",values:[n,.5*o]},{command:"Z",values:[]}]}]}function d(e,t){let n=t?r.tallSymbolWidth:e
const i=e,s=t?4:6
n<=r.size?n-=.5*s:n-=s
const o=.5*n,a=.15*n,l=i-a
return[{type:"ellipse",cx:.5*n,cy:l,rx:o,ry:a},{type:"path",path:[{command:"M",values:[0,a]},{command:"L",values:[0,l]},{command:"L",values:[n,l]},{command:"L",values:[n,a]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*n,cy:a,rx:o,ry:a}]}function h(e,t){let n=t?r.tallSymbolWidth:e
const i=e,s=t?4:6
n<=r.size?n-=.5*s:n-=s
const o=.15*n,a=i-o
return[{type:"ellipse",cx:.5*n,cy:a,rx:.5*n,ry:o},{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,a]},{command:"L",values:[0,a]},{command:"Z",values:[]}]}]}function f(e){let t=e
const n=e
t<r.size?t-=3:t-=6
const i=.15*t
return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[t,0]},{command:"L",values:[.5*t,n-i]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:0,rx:.5*t,ry:i}]}function p(e){let t=e
const n=e
t<r.size?t-=2:t-=4
const i=t,s=n,o=Math.floor(e/10)-1||1
return[{type:"path",path:[{command:"M",values:[.45*i,0]},{command:"L",values:[i,.5*s-o]},{command:"L",values:[.45*i-o,.5*s+o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*i,0]},{command:"L",values:[.45*i-o,.5*s+o]},{command:"L",values:[0,.5*s-o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*s-o]},{command:"L",values:[.45*i-o,.5*s+o]},{command:"L",values:[.45*i,n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*i,n]},{command:"L",values:[i,.5*s-o]},{command:"L",values:[.45*i-o,.5*s+o]},{command:"Z",values:[]}]}]}function b(e){const t=e
let n=e
return n<r.size?n-=1:n-=2,[{type:"path",path:[{command:"M",values:[.45*t,0]},{command:"L",values:[t,n]},{command:"L",values:[.45*t,.6*n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*t,0]},{command:"L",values:[.45*t,.6*n]},{command:"L",values:[0,n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,n]},{command:"L",values:[.45*t,.6*n]},{command:"L",values:[t,n]},{command:"Z",values:[]}]}]}function m(e,t){return Math.round(Math.min(Math.max(e+255*t*.75,0),255))}function y(e,t){if("type"in e&&("linear"===e.type||"pattern"===e.type))return e
const n=new s.a(e)
return new s.a([m(n.r,t),m(n.g,t),m(n.b,t),n.a])}},1416:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}))
var r=n(913)
function i(e,t,n){return t.flatten(({sublayers:e})=>e).length!==e.length||!!e.some(e=>e.originIdOf("minScale")>n||e.originIdOf("maxScale")>n||e.originIdOf("renderer")>n||e.originIdOf("labelingInfo")>n||e.originIdOf("opacity")>n||e.originIdOf("labelsVisible")>n||e.originIdOf("source")>n)||!o(e,t)}function s(e,t,n){return!!e.some(e=>{const t=e.source
return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===n.gdbVersion))||e.originIdOf("renderer")>r.a.SERVICE||e.originIdOf("labelingInfo")>r.a.SERVICE||e.originIdOf("opacity")>r.a.SERVICE||e.originIdOf("labelsVisible")>r.a.SERVICE})||!o(e,t)}function o(e,t){if(!e||!e.length)return!0
const n=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray()
if(e.length>n.length)return!1
let r=0
const i=n.length
for(const{id:t}of e){for(;r<i&&n[r]!==t;)r++
if(r>=i)return!1}return!0}function a(e){return!!e&&e.some(e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale)}},1447:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(181)
const i={category:{content:{action:{delete:{category:"Content",action:"Delete",label:{location:{details:{point:{category:"Content",action:"Delete",label:"Location",details:"Point"},line:{category:"Content",action:"Delete",label:"Location",details:"Line"},polygon:{category:"Content",action:"Delete",label:"Location",details:"Polygon"}}}},details:{allPosts:{category:"Content",action:"Delete",details:"All Posts"}}},create:{category:"Content",action:"Create",label:{upload:{category:"Content",action:"Create",label:"Upload"},url:{category:"Content",action:"Create",label:"URL"},location:{details:{point:{category:"Content",action:"Create",label:"Location",details:"Point"},line:{category:"Content",action:"Create",label:"Location",details:"Line"},polygon:{category:"Content",action:"Create",label:"Location",details:"Polygon"}}}}},update:{category:"Content",action:"Update",label:{groups:{category:"Content",action:"Update",label:"Groups"},location:{details:{point:{category:"Content",action:"Update",label:"Location",details:"Point"},line:{category:"Content",action:"Update",label:"Location",details:"Line"},polygon:{category:"Content",action:"Update",label:"Location",details:"Polygon"}}},settings:{details:{allowDiscussions:{category:"Content",action:"Update",label:"Settings",details:"Allow Discussions"},blockDiscussions:{category:"Content",action:"Update",label:"Settings",details:"Block Discussions"}}}}}}},interaction:{action:{open:{label:{popover:{details:{share:{category:"Interaction",action:"Open",label:"Popover",details:"Share"},details:{category:"Interaction",action:"Open",label:"Popover",details:"Details"},options:{category:"Interaction",action:"Open",label:"Popover",details:"Options"},help:{category:"Interaction",action:"Open",label:"Popover",details:"Help"}}},postList:{category:"Interaction",action:"Open",label:"Post List"},panel:{details:{legend:{category:"Interaction",action:"Open",label:"Panel",details:"Legend"},discussionOptions:{category:"Interaction",action:"Open",label:"Panel",details:"Discussion Options"}}},search:{category:"Interaction",action:"Open",label:"Search"},thread:{category:"Interaction",action:"Open",label:"Thread",details:{bodyAction:{category:"Interaction",action:"Open",label:"Thread",details:"Body Action"},location:{category:"Interaction",action:"Open",label:"Thread",details:"Location"},post:{category:"Interaction",action:"Open",label:"Thread",details:"Post"}}},editor:{category:"Interaction",action:"Open",label:"Editor",details:{reply:{category:"Interaction",action:"Open",label:"Editor",details:"Reply"}}},table:{category:"Interaction",action:"Open",label:"Table"},modal:{details:{newContent:{category:"Interaction",action:"Open",label:"Modal",details:"New Content"},addExistingContent:{category:"Interaction",action:"Open",label:"Modal",details:"Add Existing Content"},addContent:{category:"Interaction",action:"Open",label:"Modal",details:"Add Content"},createProject:{category:"Interaction",action:"Open",label:"Modal",details:"Create Project"},feeds:{category:"Interaction",action:"Open",label:"Modal",details:"Feeds"}}},locations:{category:"Interaction",action:"Open",label:"Locations"},stepper:{category:"Interaction",action:"Open",label:"Stepper",details:{emailNotifications:{category:"Interaction",action:"Open",label:"Stepper",details:"Email Notifications"},postActivity:{category:"Interaction",action:"Open",label:"Stepper",details:"Post Activity"}}},popUp:{details:{post:{category:"Interaction",action:"Open",label:"Pop-Up",details:"Post"}}}}},download:{category:"Interaction",action:"Download",details:{cache:{category:"Interaction",action:"Download",details:"Cache"},export:{category:"Interaction",action:"Download",details:"Export"}}},share:{label:{link:{category:"Interaction",action:"Share",label:"Link"}}},zoom:{label:{in:{category:"Interaction",action:"Zoom",label:"In"},out:{category:"Interaction",action:"Zoom",label:"Out"},to:{category:"Interaction",action:"Zoom",label:"To"}}},close:{label:{postList:{category:"Interaction",action:"Close",label:"Post List"},thread:{category:"Interaction",action:"Close",label:"Thread"},panel:{details:{legend:{category:"Interaction",action:"Close",label:"Panel",details:"Legend"}}},search:{category:"Interaction",action:"Close",label:"Search"},editor:{category:"Interaction",action:"Close",label:"Editor",details:{addPost:{category:"Interaction",action:"Close",label:"Editor",details:"Add Post"}}},table:{category:"Interaction",action:"Close",label:"Table"},modal:{details:{addContent:{category:"Interaction",action:"Close",label:"Modal",details:"Add Content"},newContent:{category:"Interaction",action:"Close",label:"Modal",details:"New Content"},addExistingContent:{category:"Interaction",action:"Close",label:"Modal",details:"Add Existing Content"},createProject:{category:"Interaction",action:"Close",label:"Modal",details:"Create Project"},managePreferences:{category:"Interaction",action:"Close",label:"Modal",details:"Manage Preferences"},discussionOptions:{category:"Interaction",action:"Close",label:"Modal",details:"Discussion Options"}}},locations:{category:"Interaction",action:"Close",label:"Locations"},popover:{details:{options:{category:"Interaction",action:"Close",label:"Popover",details:"Options"},help:{category:"Interaction",action:"Close",label:"Popover",details:"Help"}}},popUp:{details:{post:{category:"Interaction",action:"Close",label:"Pop Up",details:"Post"}}}}},search:{label:{query:{category:"Interaction",action:"Search",label:"Query",details:{focus:{category:"Interaction",action:"Search",label:"Query",details:"Focus"},loseFocus:{category:"Interaction",action:"Search",label:"Query",details:"Lose Focus"}}},filter:{category:"Interaction",action:"Search",label:"Filter",details:{clear:{category:"Interaction",action:"Search",label:"Filter",details:"Clear"}}},click:{category:"Interaction",action:"Search",label:"Click"},loadMore:{category:"Interaction",action:"Search",label:"Load More"},backToTop:{category:"Interaction",action:"Search",label:"Back to Top"},view:{category:"Interaction",action:"Search",label:"View"}}},update:{label:{categoryCard:{category:"Interaction",action:"Update",label:"Category Card"}}},viewed:{label:{recents:{category:"Interaction",action:"Viewed",label:"Recents"},empty:{category:"Interaction",action:"Viewed",label:"Empty"},post:{details:{thread:{category:"Interaction",action:"Viewed",label:"Post",details:"Thread"},postList:{category:"Interaction",action:"Viewed",label:"Post",details:"Post List"}}},filters:{details:{hostedDownloadsDisabled:{category:"Interaction",action:"Viewed",label:"Filters",details:"Hosted Downloads Disabled"},hostedDownloadsEnabled:{category:"Interaction",action:"Viewed",label:"Filters",details:"Hosted Downloads Enabled"}}}}},enable:{label:{draw:{category:"Interaction",action:"Enable",label:"Draw",details:{update:{category:"Interaction",action:"Enable",label:"Draw",details:"Update"}}},select:{category:"Interaction",action:"Enable",label:"Select"},addLocation:{category:"Interaction",action:"Enable",label:"Add Location"}}},disable:{label:{draw:{category:"Interaction",action:"Disable",label:"Draw",details:{update:{category:"Interaction",action:"Disable",label:"Draw",details:"Update"}}},select:{category:"Interaction",action:"Disable",label:"Select"},addLocation:{category:"Interaction",action:"Disable",label:"Add Location"}}},select:{label:{content:{category:"Interaction",action:"Select",label:"Content",details:{selectTool:{category:"Interaction",action:"Select",label:"Content",details:"Select Tool"}}},groups:{category:"Interaction",action:"Select",label:"Groups",details:{recents:{category:"Interaction",action:"Select",label:"Groups",details:"Recents"}}}}},draw:{label:{start:{details:{polygon:{category:"Interaction",action:"Draw",label:"Start",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Start",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Start",details:"Point"}}},complete:{details:{polygon:{category:"Interaction",action:"Draw",label:"Complete",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Complete",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Complete",details:"Point"}}},delete:{details:{polygon:{category:"Interaction",action:"Draw",label:"Delete",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Delete",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Delete",details:"Point"}}},update:{details:{polygon:{category:"Interaction",action:"Draw",label:"Update",details:"Polygon"},polyline:{category:"Interaction",action:"Draw",label:"Update",details:"Polyline"},point:{category:"Interaction",action:"Draw",label:"Update",details:"Point"}}}}},deselect:{label:{groups:{category:"Interaction",action:"Deselect",label:"Groups"},content:{category:"Interaction",action:"Deselect",label:"Content"}}},alert:{label:{warning:{details:{discussionsBlocked:{category:"Interaction",action:"Alert",label:"Warning",details:"Discussions Blocked"}}}}}}},groups:{action:{update:{label:{settings:{details:{allowDiscussions:{category:"Groups",action:"Update",label:"Settings",details:"Allow Discussions"},blockDiscussions:{category:"Groups",action:"Update",label:"Settings",details:"Block Discussions"}}}}}}},navigation:{action:{view:{label:{content:{details:{dcat:{category:"Navigation",action:"View",label:"Content",details:"DCAT"},dcatUs11:{category:"Navigation",action:"View",label:"Content",details:"DCAT-US-1.1"},dcatAp201:{category:"Navigation",action:"View",label:"Content",details:"DCAT-AP-2.0.1"},rss2:{category:"Navigation",action:"View",label:"Content",details:"RSS-2.0"},about:{category:"Navigation",action:"View",label:"Content",details:"About"},library:{category:"Navigation",action:"View",label:"Content",details:"Library"},hubSiteOgcApiLandingPage:{category:"Navigation",action:"View",label:"Content",details:"Hub Site OGC API Landing Page"}}},users:{details:{profile:{category:"Navigation",action:"View",label:"Users",details:"Profile"}}},groups:{details:{profile:{category:"Navigation",action:"View",label:"Groups",details:"Profile"},about:{category:"Navigation",action:"View",label:"Groups",details:"About"}}},search:{details:{sourceProjectSearch:{category:"Navigation",action:"View",label:"Search",details:"Source: Project Search"},sourceSearch:{category:"Navigation",action:"View",label:"Search",details:"Source: Search"},searchApiExplorer:{category:"Navigation",action:"View",label:"Search",details:"Search API Explorer"}}}}},external:{label:{hubStatus:{category:"Navigation",action:"External",label:"Hub Status"},itemDetails:{category:"Navigation",action:"External",label:"Item Details"},link:{category:"Navigation",action:"External",label:"Link"}}},edit:{label:{profile:{category:"Navigation",action:"Edit",label:"Profile"},thumbnail:{category:"Navigation",action:"Edit",label:"Thumbnail"},bio:{category:"Navigation",action:"Edit",label:"Bio"}}},onPage:{label:{overview:{category:"Navigation",action:"On Page",label:"Overview"},teams:{category:"Navigation",action:"On Page",label:"Teams"},content:{category:"Navigation",action:"On Page",label:"Content"},favorites:{category:"Navigation",action:"On Page",label:"Favorites"}}},new:{label:{content:{category:"Navigation",action:"New",label:"Content",details:{app:{category:"Navigation",action:"New",label:"Content",details:"App"},feedback:{category:"Navigation",action:"New",label:"Content",details:"Feedback"},template:{category:"Navigation",action:"New",label:"Content",details:"Template"},event:{category:"Navigation",action:"New",label:"Content",details:"Event"}}},groups:{category:"Navigation",action:"New",label:"Groups"}}}}},users:{action:{update:{label:{notifications:{details:{enabled:{category:"Users",action:"Update",label:"Notifications",details:"Enabled"},disabled:{category:"Users",action:"Update",label:"Notifications",details:"Disabled"}}}}}}},org:{}}},s={category:{CONTENT:"Content",INTERACTION:"Interaction",GROUPS:"Groups",NAVIGATION:"Navigation",USERS:"Users",ORG:"Org"},action:{DOWNLOAD:"Download",VIEW:"View",OPEN:"Open",SHARE:"Share",ZOOM:"Zoom",CLOSE:"Close",SEARCH:"Search",UPDATE:"Update",EXTERNAL:"External",DELETE:"Delete",VIEWED:"Viewed",CREATE:"Create",ENABLE:"Enable",DISABLE:"Disable",SELECT:"Select",DRAW:"Draw",DESELECT:"Deselect",EDIT:"Edit",ON_PAGE:"On-Page",NEW:"New",ALERT:"Alert"},label:{CONTENT:"Content",POPOVER:"Popover",LINK:"Link",IN:"In",OUT:"Out",POST_LIST:"Post List",THREAD:"Thread",PANEL:"Panel",QUERY:"Query",CATEGORY_CARD:"Category Card",SEARCH:"Search",TO:"To",HUB_STATUS:"Hub Status",RECENTS:"Recents",EMPTY:"Empty",EDITOR:"Editor",POST:"Post",TABLE:"Table",USERS:"Users",GROUPS:"Groups",DRAW:"Draw",SELECT:"Select",START:"Start",COMPLETE:"Complete",DELETE:"Delete",FILTER:"Filter",UPDATE:"Update",MODAL:"Modal",ITEM_DETAILS:"Item Details",UPLOAD:"Upload",URL:"URL",FILTERS:"Filters",PROFILE:"Profile",THUMBNAIL:"Thumbnail",OVERVIEW:"Overview",TEAMS:"Teams",FAVORITES:"Favorites",BIO:"Bio",CLICK:"Click",LOAD_MORE:"Load More",LOCATIONS:"Locations",ABOUT:"About",EXPLORE:"Explore",BACK_TO_TOP:"Back to Top",ADD_LOCATION:"Add Location",LOCATION:"Location",STEPPER:"Stepper",NOTIFICATIONS:"Notifications",VIEW:"View",SETTINGS:"Settings",WARNING:"Warning",POP_UP:"Pop-Up"},details:{DCAT:"DCAT",DCAT_US_1_1:"DCAT-US-1.1",DCAT_AP_2_0_1:"DCAT-AP-2.0.1",SHARE:"Share",CACHE:"Cache",EXPORT:"Export",LEGEND:"Legend",FOCUS:"Focus",LOSE_FOCUS:"Lose Focus",THREAD:"Thread",POST_LIST:"Post List",DETAILS:"Details",PROFILE:"Profile",OPTIONS:"Options",SELECT_TOOL:"Select Tool",POLYGON:"Polygon",POLYLINE:"Polyline",POINT:"Point",CLEAR:"Clear",UPDATE:"Update",HELP:"Help",RECENTS:"Recents",ADD_POST:"Add Post",ADD_CONTENT:"Add Content",NEW_CONTENT:"New Content",ADD_EXISTING_CONTENT:"Add Existing Content",ABOUT:"About",HOSTED_DOWNLOADS_DISABLED:"Hosted Downloads Disabled",HOSTED_DOWNLOADS_ENABLED:"Hosted Downloads Enabled",LIBRARY:"Library",SOURCE_PROJECT_SEARCH:"Source: Project Search",APP:"App",FEEDBACK:"Feedback",TEMPLATE:"Template",EVENT:"Event",MORE:"More",LESS:"Less",RESET:"Reset",DATE_UPDATED:"Date Updated",CREATE_PROJECT:"Create Project",REPLY:"Reply",BODY_ACTION:"Body Action",SOURCE_SEARCH:"Source: Search",SEARCH_API_EXPLORER:"Search API Explorer",HUB_SITE_OGC_API_LANDING_PAGE:"Hub Site OGC API Landing Page",LINE:"Line",MANAGE_PREFERENCES:"Manage Preferences",ENABLED:"Enabled",DISABLED:"Disabled",ALL_POSTS:"All Posts",EMAIL_NOTIFICATIONS:"Email Notifications",POST_ACTIVITY:"Post Activity",DISCUSSION_OPTIONS:"Discussion Options",ALLOW_DISCUSSIONS:"Allow Discussions",BLOCK_DISCUSSIONS:"Block Discussions",DISCUSSIONS_BLOCKED:"Discussions Blocked",FEEDS:"Feeds",POST:"Post",LOCATION:"Location"},element:{ACTIONS_MENU:"Actions Menu",CONTENT_HERO:"Content Hero",DOWNLOAD_CARD:"Download Card",EXPLORE_ALL_CONTENT:"Explore All Content",RESULTS_LIST:"Results List",ON_PAGE:"On-Page",RESET_FILTERS:"Reset Filters",CHIPS:"Chips",EXPLORE_SITE:"Explore Site",BACK_TO_TOP:"Back to Top",VIEW_BUTTON:"View Button"},response:{SUCCESS:"Success",FAILURE:"Failure"}}
var o=Object(r.c)((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDimensions=void 0,t.defaultDimensions={CATEGORY:"category",ACTION:"action",LABEL:"label"}})),a=Object(r.c)((function(e,t){var n=r.a&&r.a.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=r.a&&r.a.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),i(o,t)})),l=Object(r.c)((function(e,t){var n,i=r.a&&r.a.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},s=r.a&&r.a.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}
Object.defineProperty(t,"__esModule",{value:!0}),t.customDimensionsConfig=t.constantDimensions=t.dictionaryDimensions=t.dimensions=void 0,t.dimensions=i(i({},a.defaultDimensions),{DETAILS:"details",USER_TYPE:"userType",ID:"id",TYPE:"type",ORGANIZATION_ID:"organizationId",GROUP_ID:"groupId",GROUP_ACCESS:"groupAccess",GROUP_TYPE:"groupType",SEARCH:"search",GROUP_ORG_ID:"groupOrgId",SITE_ID:"siteId",ACCESS:"access",CONTENT_ORG_ID:"contentOrgId",ELEMENT:"element",RESPONSE:"response",POST_ID:"postId",PARENT_ID:"parentId",CHANNEL_ID:"channelId",CHANNEL_ACCESS:"channelAccess"}),t.dictionaryDimensions=[t.dimensions.CATEGORY,t.dimensions.ACTION,t.dimensions.LABEL,t.dimensions.DETAILS],t.constantDimensions=s(s([],t.dictionaryDimensions,!0),[t.dimensions.ELEMENT,t.dimensions.RESPONSE],!1),t.customDimensionsConfig=((n={})[t.dimensions.DETAILS]=1,n[t.dimensions.USER_TYPE]=2,n[t.dimensions.ID]=3,n[t.dimensions.TYPE]=4,n[t.dimensions.ORGANIZATION_ID]=5,n[t.dimensions.GROUP_ID]=6,n[t.dimensions.GROUP_ACCESS]=7,n[t.dimensions.GROUP_TYPE]=8,n[t.dimensions.SEARCH]=9,n[t.dimensions.GROUP_ORG_ID]=10,n[t.dimensions.SITE_ID]=11,n[t.dimensions.ACCESS]=12,n[t.dimensions.CONTENT_ORG_ID]=13,n[t.dimensions.ELEMENT]=14,n[t.dimensions.RESPONSE]=15,n[t.dimensions.POST_ID]=16,n[t.dimensions.PARENT_ID]=17,n[t.dimensions.CHANNEL_ID]=18,n[t.dimensions.CHANNEL_ACCESS]=19,n)})),c=Object(r.c)((function(e,t){var n
Object.defineProperty(t,"__esModule",{value:!0}),t.customMetricsConfig=t.metrics=void 0,t.metrics={POSITION:"position",SIZE:"size",DURATION:"duration",COUNT:"count"},t.customMetricsConfig=((n={})[t.metrics.POSITION]=1,n[t.metrics.SIZE]=2,n[t.metrics.DURATION]=3,n[t.metrics.COUNT]=4,n)})),u=Object(r.c)((function(e,t){var n=r.a&&r.a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.dictionary=t.customMetricsConfig=t.customDimensionsConfig=void 0
var o=n(i),a=n(s)
Object.defineProperty(t,"customDimensionsConfig",{enumerable:!0,get:function(){return l.customDimensionsConfig}}),Object.defineProperty(t,"customMetricsConfig",{enumerable:!0,get:function(){return c.customMetricsConfig}}),t.dictionary=o.default,t.constants=a.default}))},1456:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}))
var r=n(1541)
function i(e,t){const n=e.length>t.length?e:t
return(e.length>t.length?t:e).every((e,t)=>e.type===n[t].type)}function s(e,t){const n=e.length>t.length?e:t,i=e.length>t.length?t:e
for(let e=i.length;e<n.length;e++)i.push(Object(r.g)(n[e]))}function o(e){const t=e[0]
return!!t&&"type"in t}},1475:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n(77)
var r=n(20),i=n(907),s=n(1374),o=n(1183)
let a=null
function l(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function c(e,t,n){const{backgroundColor:r,outline:i,dotSize:o}=e,c=n&&n.swatchSize||s.a.size,u=Math.round(c*c/o**2*.8),d=window.devicePixelRatio,h=document.createElement("canvas"),f=c*d
h.width=f,h.height=f,h.style.width=h.width/d+"px",h.style.height=h.height/d+"px"
const p=h.getContext("2d")
if(r&&(p.fillStyle=r.toCss(!0),p.fillRect(0,0,f,f),p.fill()),p.fillStyle=t.toCss(!0),a&&a.length/2===u)for(let e=0;e<2*u;e+=2){const t=a[e],n=a[e+1]
p.fillRect(t,n,o*d,o*d),p.fill()}else{a=[]
for(let e=0;e<2*u;e+=2){const e=l(0,f),t=l(0,f)
a.push(e,t),p.fillRect(e,t,o*d,o*d),p.fill()}}i&&(i.color&&(p.strokeStyle=i.color.toCss(!0)),p.lineWidth=i.width,p.strokeRect(0,0,f,f))
const b=new Image(c,c)
return b.src=h.toDataURL(),b}function u(e,t={}){const n="horizontal"===t.align,r=n?75:24,i=n?24:75,{width:s=r,height:a=i,gradient:l=!0}=t,c=window.devicePixelRatio,u=s*c,d=a*c,h=document.createElement("canvas")
h.width=u,h.height=d,h.style.width=s+"px",h.style.height=a+"px"
const f=h.getContext("2d"),p=n?u:0,b=n?0:d
if(l){const t=f.createLinearGradient(0,0,p,b),n=e.length,r=1===n?0:1/(n-1)
e.forEach((e,n)=>t.addColorStop(n*r,e.toString())),f.fillStyle=t,f.fillRect(0,0,u,d)}else{const t=n?u/e.length:u,r=n?d:d/e.length
let i=0,s=0
for(const o of e)f.fillStyle=o.toString(),f.fillRect(i,s,t,r),i=n?i+t:0,s=n?0:s+r}const m=document.createElement("div")
return m.style.width=s+"px",m.style.height=a+"px",function(e,t){if(!t)return
e.style.filter=Object(o.e)(t)
const n=t.effects
if(n)for(const t of n)if("drop-shadow"===(null==t?void 0:t.type)){t.offsetX<0?e.style.marginLeft=Math.abs(t.offsetX)+"px":e.style.marginRight=t.offsetX+"px"
break}}(m,null==t?void 0:t.effectList),m.appendChild(h),m}async function d(e,t){switch(e.type){case"web-style":{const{previewWebStyleSymbol:r}=await n.e(433).then(n.bind(null,1775))
return r(e,d,t)}case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":{const{previewSymbol3D:r}=await Promise.all([n.e(23),n.e(235),n.e(342)]).then(n.bind(null,1632))
return r(e,t)}case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":{const{previewSymbol2D:r}=await Promise.all([n.e(23),n.e(261)]).then(n.bind(null,1776))
return r(e,t)}case"cim":{const{previewCIMSymbol:r}=await Promise.all([n.e(11),n.e(23),n.e(62),n.e(227)]).then(n.bind(null,1777))
return r(e,t)}default:return}}async function h(e,t){var s,a
if(!e)return
const l=e.sourceLayer,c=null!=(s=Object(r.k)(t)&&null!=(a=t.useSourceLayer)&&a?l:e.layer)?s:l,u=function e(t){return t&&"opacity"in t?t.opacity*e(t.parent):1}(c)
if(Object(r.k)(e.symbol)&&(!Object(r.k)(t)||!0!==t.ignoreGraphicSymbol)){const n="web-style"===e.symbol.type?await e.symbol.fetchSymbol(Object(r.k)(t)?t.abortOptions:null):e.symbol.clone()
return Object(o.a)(n,null,u),n}const d=Object(r.k)(t)&&t.renderer||c&&"renderer"in c&&c.renderer
let h=d&&"getSymbolAsync"in d?await d.getSymbolAsync(e,t):null
if(!h)return
if(h="web-style"===h.type?await h.fetchSymbol(Object(r.k)(t)?t.abortOptions:null):h.clone(),!("visualVariables"in d)||!d.visualVariables||!d.visualVariables.length)return Object(o.a)(h,null,u),h
if("arcadeRequiredForVisualVariables"in d&&d.arcadeRequiredForVisualVariables&&(Object(r.j)(t)||Object(r.j)(t.arcade))){const e={...Object(r.t)(t)}
e.arcade=await Object(i.e)(),t=e}const f=await Promise.resolve().then(n.bind(null,1062)),p=[],b=[],m=[],y=[]
for(const e of d.visualVariables)switch(e.type){case"color":p.push(e)
break
case"opacity":b.push(e)
break
case"rotation":y.push(e)
break
case"size":e.target||m.push(e)}const g=!!p.length&&p[p.length-1],O=g?f.getColor(g,e,t):null,v=!!b.length&&b[b.length-1]
let j=v?f.getOpacity(v,e,t):null
if(null!=u&&(j=null!=j?j*u:u),Object(o.a)(h,O,j),m.length){const n=f.getAllSizes(m,e,t)
await Object(o.d)(h,n)}for(const n of y)Object(o.c)(h,f.getRotationAngle(n,e,t),n.axis)
return h}},1541:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return b}))
var r=n(967),i=n(876),s=n(1560),o=n(896)
class a{constructor(e,t,n){this.strength=e,this.radius=t,this.threshold=n,this.type="bloom"}interpolate(e,t,n){this.strength=f(e.strength,t.strength,n),this.radius=f(e.radius,t.radius,n),this.threshold=f(e.threshold,t.threshold,n)}clone(){return new a(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:p(this.radius),strength:this.strength,threshold:this.threshold}}}class l{constructor(e){this.radius=e,this.type="blur"}interpolate(e,t,n){this.radius=Math.round(f(e.radius,t.radius,n))}clone(){return new l(this.radius)}toJSON(){return{type:"blur",radius:p(this.radius)}}}class c{constructor(e,t){this.type=e,this.amount=t,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,n){this.amount=f(e.amount,t.amount,n),this._updateMatrix()}clone(){return new c(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const e=this._colorMatrix||Object(s.a)()
switch(this.type){case"brightness":this._colorMatrix=((e,t)=>{const n=Object(o.t)(e,t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1)
return Object(o.u)(n,n)})(e,this.amount)
break
case"contrast":this._colorMatrix=((e,t)=>{const n=Object(o.t)(e,t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1)
return Object(o.u)(n,n)})(e,this.amount)
break
case"grayscale":this._colorMatrix=((e,t)=>{const n=1-t,r=Object(o.t)(e,.2126+.7874*n,.7152-.7152*n,.0722-.0722*n,0,.2126-.2126*n,.7152+.2848*n,.0722-.0722*n,0,.2126-.2126*n,.7152-.7152*n,.0722+.9278*n,0,0,0,0,1)
return Object(o.u)(r,r)})(e,this.amount)
break
case"invert":this._colorMatrix=((e,t)=>{const n=1-2*t,r=Object(o.t)(e,n,0,0,t,0,n,0,t,0,0,n,t,0,0,0,1)
return Object(o.u)(r,r)})(e,this.amount)
break
case"saturate":this._colorMatrix=((e,t)=>{const n=Object(o.t)(e,.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1)
return Object(o.u)(n,n)})(e,this.amount)
break
case"sepia":this._colorMatrix=((e,t)=>{const n=1-t,r=Object(o.t)(e,.393+.607*n,.769-.769*n,.189-.189*n,0,.349-.349*n,.686+.314*n,.168-.168*n,0,.272-.272*n,.534-.534*n,.131+.869*n,0,0,0,0,1)
return Object(o.u)(r,r)})(e,this.amount)}}}class u{constructor(e,t,n,r){this.offsetX=e,this.offsetY=t,this.blurRadius=n,this.color=r,this.type="drop-shadow"}interpolate(e,t,n){this.offsetX=f(e.offsetX,t.offsetX,n),this.offsetY=f(e.offsetY,t.offsetY,n),this.blurRadius=f(e.blurRadius,t.blurRadius,n),this.color[0]=Math.round(f(e.color[0],t.color[0],n)),this.color[1]=Math.round(f(e.color[1],t.color[1],n)),this.color[2]=Math.round(f(e.color[2],t.color[2],n)),this.color[3]=f(e.color[3],t.color[3],n)}clone(){return new u(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const e=[...this.color]
return e[3]*=255,{type:"drop-shadow",xoffset:p(this.offsetX),yoffset:p(this.offsetY),blurRadius:p(this.blurRadius),color:e}}}class d{constructor(e){this.angle=e,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(e,t,n){this.angle=f(e.angle,t.angle,n),this._updateMatrix()}clone(){return new d(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const e=this._colorMatrix||Object(s.a)()
this._colorMatrix=((e,t)=>{const n=Math.sin(t*Math.PI/180),r=Math.cos(t*Math.PI/180),i=Object(o.t)(e,.213+.787*r-.213*n,.715-.715*r-.715*n,.072-.072*r+.928*n,0,.213-.213*r+.143*n,.715+.285*r+.14*n,.072-.072*r-.283*n,0,.213-.213*r-.787*n,.715-.715*r+.715*n,.072+.928*r+.072*n,0,0,0,0,1)
return Object(o.u)(i,i)})(e,this.angle)}}class h{constructor(e){this.amount=e,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(e,t,n){this.amount=f(e.amount,t.amount,n)}clone(){return new h(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function f(e,t,n){return e+(t-e)*n}function p(e){return Math.round(1e3*Object(i.i)(e))/1e3}function b(e){switch(e.type){case"grayscale":case"sepia":case"invert":return new c(e.type,0)
case"saturate":case"brightness":case"contrast":return new c(e.type,1)
case"opacity":return new h(1)
case"hue-rotate":return new d(0)
case"blur":return new l(0)
case"drop-shadow":return new u(0,0,0,[...Object(r.a)("transparent")])
case"bloom":return new a(0,0,1)}}},1560:function(e,t,n){"use strict"
function r(){const e=new Float32Array(16)
return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}n.d(t,"a",(function(){return r}))
const i=r()
Object.freeze({__proto__:null,create:r,clone:function(e){const t=new Float32Array(16)
return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,n,r,i,s,o,a,l,c,u,d,h,f,p,b){const m=new Float32Array(16)
return m[0]=e,m[1]=t,m[2]=n,m[3]=r,m[4]=i,m[5]=s,m[6]=o,m[7]=a,m[8]=l,m[9]=c,m[10]=u,m[11]=d,m[12]=h,m[13]=f,m[14]=p,m[15]=b,m},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:i})},1593:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r,i,s=n(967),o=n(354),a=n(1541),l=(n(1012),n(1456)),c={exports:{}}
function u(e){if(!e||0===e.length)return null
if("string"==typeof e){const t=d(e)
return t&&0!==t.length?t:null}const t=e.map(e=>{if(!Number.isFinite(e.scale)||e.scale<=0)throw new o.a("effect:invalid-scale","scale must be finite and greater than 0",{stop:e})
return{scale:e.scale,effects:d(e.value)}})
t.sort((e,t)=>t.effects.length-e.effects.length)
for(let e=0;e<t.length-1;e++){if(!Object(l.a)(t[e].effects,t[e+1].effects))throw new o.a("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:t[e].effects,b:t[e+1].effects})
Object(l.c)(t[e].effects,t[e+1].effects)}return t.sort((e,t)=>t.scale-e.scale),t}function d(e){let t
if(!e)return[]
try{t=c.exports.parse(e)}catch(t){throw new o.a("effect:invalid-syntax","Invalid effect syntax",{value:e,error:t})}return t.map(e=>function(e){try{switch(e.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(e){let t=1
return h(e.parameters,1),1===e.parameters.length&&(t=y(e.parameters[0])),new a.c(e.name,t)}(e)
case"opacity":return function(e){let t=1
return h(e.parameters,1),1===e.parameters.length&&(t=y(e.parameters[0])),new a.f(t)}(e)
case"hue-rotate":return function(e){let t=0
return h(e.parameters,1),1===e.parameters.length&&(t=function(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=b[e.unit]))throw new o.a("effect:type-error","Expected <angle>, Actual: "+f(e),{term:e})}(e),e.value*b[e.unit]||0}(e.parameters[0])),new a.e(t)}(e)
case"blur":return function(e){let t=0
return h(e.parameters,1),1===e.parameters.length&&(t=g(e.parameters[0]),p(t,e.parameters[0])),new a.b(t)}(e)
case"drop-shadow":return function(e){const t=[]
let n=null
for(const r of e.parameters)if("color"===r.type){if(t.length&&Object.freeze(t),n)throw new o.a("effect:type-error","Accepts only one color",{})
n=O(r)}else{const e=g(r)
if(Object.isFrozen(t))throw new o.a("effect:type-error","<length> parameters not consecutive",{lengths:t})
t.push(e),3===t.length&&p(e,r)}if(t.length<2||t.length>3)throw new o.a("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${t.length}}`,{lengths:t})
return new a.d(t[0],t[1],t[2]||0,n||v("black"))}(e)
case"bloom":return function(e){let t=1,n=0,r=0
return h(e.parameters,3),e.parameters[0]&&(t=y(e.parameters[0])),e.parameters[1]&&(n=g(e.parameters[1]),p(n,e.parameters[1])),e.parameters[2]&&(r=y(e.parameters[2])),new a.a(t,n,r)}(e)}}catch(t){throw t.details.filter=e,t}throw new o.a("effect:unknown-effect",`Effect '${e.name}' is not supported`,{effect:e})}(e))}function h(e,t){if(e.length>t)throw new o.a("effect:type-error",`Function supports up to ${t} parameters, Actual: ${e.length}`,{parameters:e})}function f(e){if("color"===e.type)return"<color>"
if(e.unit){if(m[e.unit])return"<length>"
if(b[e.unit])return"<angle>"
if("%"===e.unit)return"<percentage>"}return"<double>"}function p(e,t){if(e<0)throw new o.a("effect:type-error","Negative values are not allowed, Actual: "+e,{term:t})}i=function(){function e(t,n,r,i){var s=Error.call(this,t)
return Object.setPrototypeOf&&Object.setPrototypeOf(s,e.prototype),s.expected=n,s.found=r,s.location=i,s.name="SyntaxError",s}function t(e,t,n){return n=n||" ",e.length>t?e:(t-=e.length,e+(n+=n.repeat(t)).slice(0,t))}return function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(e,Error),e.prototype.format=function(e){var n="Error: "+this.message
if(this.location){var r,i=null
for(r=0;r<e.length;r++)if(e[r].source===this.location.source){i=e[r].text.split(/\r\n|\n|\r/g)
break}var s=this.location.start,o=this.location.source+":"+s.line+":"+s.column
if(i){var a=this.location.end,l=t("",s.line.toString().length),c=i[s.line-1],u=s.line===a.line?a.column:c.length+1
n+="\n --\x3e "+o+"\n"+l+" |\n"+s.line+" | "+c+"\n"+l+" | "+t("",s.column-1)+t("",u-s.column,"^")}else n+="\n at "+o}return n},e.buildMessage=function(e,t){var n={literal:function(e){return'"'+i(e.text)+'"'},class:function(e){var t=e.parts.map((function(e){return Array.isArray(e)?s(e[0])+"-"+s(e[1]):s(e)}))
return"["+(e.inverted?"^":"")+t+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}}
function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function s(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function o(e){return n[e.type](e)}return"Expected "+function(e){var t,n,r=e.map(o)
if(r.sort(),r.length>0){for(t=1,n=1;t<r.length;t++)r[t-1]!==r[t]&&(r[n]=r[t],n++)
r.length=n}switch(r.length){case 1:return r[0]
case 2:return r[0]+" or "+r[1]
default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1]}}(e)+" but "+function(e){return e?'"'+i(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,n){var r,i={},s=(n=void 0!==n?n:{}).grammarSource,o={start:ae},a=ae,l="none",c="grad",u="turn",d=/^[ \t\n\r]/,h=/^[a-z\-]/,f=/^[0-9a-fA-F]/,p=/^[+\-]/,b=/^[0-9]/,m=re("none"),y=te("none",!1),g=te(")",!1),O=te(",",!1),v=re("whitespace"),j=ne([" ","\t","\n","\r"],!1,!1),w=re("function"),_=te("(",!1),x=re("identifier"),S=ne([["a","z"],"-"],!1,!1),M=re("percentage"),E=te("%",!1),L=re("length"),I=te("px",!1),k=te("cm",!1),C=te("mm",!1),A=te("in",!1),T=te("pt",!1),P=te("pc",!1),R=re("angle"),N=te("deg",!1),V=te("rad",!1),z=te("grad",!1),D=te("turn",!1),$=re("number"),F=re("color"),U=te("#",!1),q=ne([["0","9"],["a","f"],["A","F"]],!1,!1),B=ne(["+","-"],!1,!1),G=ne([["0","9"]],!1,!1),H=te(".",!1),W=te("e",!1),J=0,Z=0,Y=[{line:1,column:1}],Q=0,X=[],K=0
if("startRule"in n){if(!(n.startRule in o))throw new Error("Can't start parsing from rule \""+n.startRule+'".')
a=o[n.startRule]}function ee(){return t.substring(Z,J)}function te(e,t){return{type:"literal",text:e,ignoreCase:t}}function ne(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function re(e){return{type:"other",description:e}}function ie(e){var n,r=Y[e]
if(r)return r
for(n=e-1;!Y[n];)n--
for(r={line:(r=Y[n]).line,column:r.column};n<e;)10===t.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++
return Y[e]=r,r}function se(e,t){var n=ie(e),r=ie(t)
return{source:s,start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:r.line,column:r.column}}}function oe(e){J<Q||(J>Q&&(Q=J,X=[]),X.push(e))}function ae(){var e
return(e=function(){var e,n
return K++,e=J,ue(),t.substr(J,4)===l?(n=l,J+=4):(n=i,0===K&&oe(y)),n!==i?(ue(),Z=e,e=[]):(J=e,e=i),K--,e===i&&0===K&&oe(m),e}())===i&&(e=function(){var e,t
if(e=[],(t=le())!==i)for(;t!==i;)e.push(t),t=le()
else e=i
return e}()),e}function le(){var e,n,r,s
return e=J,ue(),(n=function(){var e,n,r
return K++,e=J,(n=de())!==i?(40===t.charCodeAt(J)?(r="(",J++):(r=i,0===K&&oe(_)),r!==i?(Z=e,e=n):(J=e,e=i)):(J=e,e=i),K--,e===i&&(n=i,0===K&&oe(w)),e}())!==i?(ue(),(r=function(){var e,n,r,s,o,a,l,c
if(e=J,(n=ce())!==i){for(r=[],s=J,o=ue(),44===t.charCodeAt(J)?(a=",",J++):(a=i,0===K&&oe(O)),a===i&&(a=null),l=ue(),(c=ce())!==i?s=o=[o,a,l,c]:(J=s,s=i);s!==i;)r.push(s),s=J,o=ue(),44===t.charCodeAt(J)?(a=",",J++):(a=i,0===K&&oe(O)),a===i&&(a=null),l=ue(),(c=ce())!==i?s=o=[o,a,l,c]:(J=s,s=i)
Z=e,e=function(e,t){return t.length>0?function(e,t,n){return[e].concat(function(e,t){return e.map((function(e){return e[3]}))}(t))}(e,t):[e]}(n,r)}else J=e,e=i
return e}())===i&&(r=null),ue(),41===t.charCodeAt(J)?(s=")",J++):(s=i,0===K&&oe(g)),s!==i?(ue(),Z=e,e=function(e,t){return{type:"function",name:e,parameters:t||[]}}(n,r)):(J=e,e=i)):(J=e,e=i),e}function ce(){var e,t
return e=J,(t=he())===i&&(t=fe())===i&&(t=pe())===i&&(t=function(){var e,t
return K++,e=J,ue(),(t=me())!==i?(Z=e,e=function(e){return{value:e,unit:null}}(t)):(J=e,e=i),K--,e===i&&0===K&&oe($),e}()),t!==i&&(Z=e,t=function(e){return{type:"quantity",value:e.value,unit:e.unit}}(t)),(e=t)===i&&(e=J,(t=be())!==i&&(Z=e,t=function(e){return{type:"color",colorType:e.type,value:e.value}}(t)),e=t),e}function ue(){var e,n
for(K++,e=[],d.test(t.charAt(J))?(n=t.charAt(J),J++):(n=i,0===K&&oe(j));n!==i;)e.push(n),d.test(t.charAt(J))?(n=t.charAt(J),J++):(n=i,0===K&&oe(j))
return K--,n=i,0===K&&oe(v),e}function de(){var e,n,r
if(K++,e=J,n=[],h.test(t.charAt(J))?(r=t.charAt(J),J++):(r=i,0===K&&oe(S)),r!==i)for(;r!==i;)n.push(r),h.test(t.charAt(J))?(r=t.charAt(J),J++):(r=i,0===K&&oe(S))
else n=i
return n!==i&&(Z=e,n=ee()),K--,(e=n)===i&&(n=i,0===K&&oe(x)),e}function he(){var e,n,r
return K++,e=J,ue(),(n=me())!==i?(37===t.charCodeAt(J)?(r="%",J++):(r=i,0===K&&oe(E)),r!==i?(Z=e,e=function(e){return{value:e,unit:"%"}}(n)):(J=e,e=i)):(J=e,e=i),K--,e===i&&0===K&&oe(M),e}function fe(){var e,n,r
return K++,e=J,ue(),(n=me())!==i?("px"===t.substr(J,2)?(r="px",J+=2):(r=i,0===K&&oe(I)),r!==i?(Z=e,e=function(e){return{value:e,unit:"px"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,ue(),(n=me())!==i?("cm"===t.substr(J,2)?(r="cm",J+=2):(r=i,0===K&&oe(k)),r!==i?(Z=e,e=function(e){return{value:e,unit:"cm"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,ue(),(n=me())!==i?("mm"===t.substr(J,2)?(r="mm",J+=2):(r=i,0===K&&oe(C)),r!==i?(Z=e,e=function(e){return{value:e,unit:"mm"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,ue(),(n=me())!==i?("in"===t.substr(J,2)?(r="in",J+=2):(r=i,0===K&&oe(A)),r!==i?(Z=e,e=function(e){return{value:e,unit:"in"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,ue(),(n=me())!==i?("pt"===t.substr(J,2)?(r="pt",J+=2):(r=i,0===K&&oe(T)),r!==i?(Z=e,e=function(e){return{value:e,unit:"pt"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,ue(),(n=me())!==i?("pc"===t.substr(J,2)?(r="pc",J+=2):(r=i,0===K&&oe(P)),r!==i?(Z=e,e=function(e){return{value:e,unit:"pc"}}(n)):(J=e,e=i)):(J=e,e=i)))))),K--,e===i&&0===K&&oe(L),e}function pe(){var e,n,r
return K++,e=J,(n=me())!==i?("deg"===t.substr(J,3)?(r="deg",J+=3):(r=i,0===K&&oe(N)),r!==i?(Z=e,e=function(e){return{value:e,unit:"deg"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,(n=me())!==i?("rad"===t.substr(J,3)?(r="rad",J+=3):(r=i,0===K&&oe(V)),r!==i?(Z=e,e=function(e){return{value:e,unit:"rad"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,(n=me())!==i?(t.substr(J,4)===c?(r=c,J+=4):(r=i,0===K&&oe(z)),r!==i?(Z=e,e=function(e){return{value:e,unit:"grad"}}(n)):(J=e,e=i)):(J=e,e=i),e===i&&(e=J,(n=me())!==i?(t.substr(J,4)===u?(r=u,J+=4):(r=i,0===K&&oe(D)),r!==i?(Z=e,e=function(e){return{value:e,unit:"turn"}}(n)):(J=e,e=i)):(J=e,e=i)))),K--,e===i&&(n=i,0===K&&oe(R)),e}function be(){var e,n,r,s
if(K++,e=J,35===t.charCodeAt(J)?(n="#",J++):(n=i,0===K&&oe(U)),n!==i){if(r=[],f.test(t.charAt(J))?(s=t.charAt(J),J++):(s=i,0===K&&oe(q)),s!==i)for(;s!==i;)r.push(s),f.test(t.charAt(J))?(s=t.charAt(J),J++):(s=i,0===K&&oe(q))
else r=i
r!==i?(Z=e,e={type:"hex",value:ee()}):(J=e,e=i)}else J=e,e=i
return e===i&&(e=J,(n=le())!==i&&(Z=e,n=function(e){return{type:"function",value:e}}(n)),(e=n)===i&&(e=J,(n=de())!==i&&(Z=e,n={type:"named",value:ee()}),e=n)),K--,e===i&&(n=i,0===K&&oe(F)),e}function me(){var e,n,r,s,o,a,l
for(e=J,p.test(t.charAt(J))?(t.charAt(J),J++):0===K&&oe(B),n=J,r=[],b.test(t.charAt(J))?(s=t.charAt(J),J++):(s=i,0===K&&oe(G));s!==i;)r.push(s),b.test(t.charAt(J))?(s=t.charAt(J),J++):(s=i,0===K&&oe(G))
if(46===t.charCodeAt(J)?(s=".",J++):(s=i,0===K&&oe(H)),s!==i){if(o=[],b.test(t.charAt(J))?(a=t.charAt(J),J++):(a=i,0===K&&oe(G)),a!==i)for(;a!==i;)o.push(a),b.test(t.charAt(J))?(a=t.charAt(J),J++):(a=i,0===K&&oe(G))
else o=i
o!==i?n=r=[r,s,o]:(J=n,n=i)}else J=n,n=i
if(n===i)if(n=[],b.test(t.charAt(J))?(r=t.charAt(J),J++):(r=i,0===K&&oe(G)),r!==i)for(;r!==i;)n.push(r),b.test(t.charAt(J))?(r=t.charAt(J),J++):(r=i,0===K&&oe(G))
else n=i
if(n!==i){if(r=J,101===t.charCodeAt(J)?(s="e",J++):(s=i,0===K&&oe(W)),s!==i){if(p.test(t.charAt(J))?(o=t.charAt(J),J++):(o=i,0===K&&oe(B)),o===i&&(o=null),a=[],b.test(t.charAt(J))?(l=t.charAt(J),J++):(l=i,0===K&&oe(G)),l!==i)for(;l!==i;)a.push(l),b.test(t.charAt(J))?(l=t.charAt(J),J++):(l=i,0===K&&oe(G))
else a=i
a!==i?r=s=[s,o,a]:(J=r,r=i)}else J=r,r=i
r===i&&(r=null),Z=e,e=parseFloat(ee())}else J=e,e=i
return e}if((r=a())!==i&&J===t.length)return r
throw r!==i&&J<t.length&&oe({type:"end"}),function(t,n,r){return new e(e.buildMessage(t,n),t,n,r)}(X,Q<t.length?t.charAt(Q):null,Q<t.length?se(Q,Q+1):se(Q,Q))}}},(r=c).exports&&(r.exports=i())
const b={deg:1,grad:.9,rad:180/Math.PI,turn:360},m={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72}
function y(e){!function(e){if("quantity"!==e.type||null!==e.unit&&"%"!==e.unit)throw new o.a("effect:type-error","Expected <double> or <percentage>, Actual: "+f(e),{term:e})}(e)
const t=e.value
return p(t,e),"%"===e.unit?.01*t:t}function g(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=m[e.unit]))throw new o.a("effect:type-error","Expected <length>, Actual: "+f(e),{term:e})}(e),e.value*m[e.unit]||0}function O(e){switch(e.colorType){case"hex":return Object(s.c)(e.value)
case"named":return v(e.value)
case"function":return function(e){if(h(e.parameters,4),j.test(e.name))return[y(e.parameters[0]),y(e.parameters[1]),y(e.parameters[2]),e.parameters[3]?y(e.parameters[3]):1]
if(w.test(e.name))return Object(s.d)(function(e){return function(e){if("quantity"!==e.type||null!==e.unit)throw new o.a("effect:type-error","Expected <double>, Actual: "+f(e),{term:e})}(e),p(e.value,e),e.value}(e.parameters[0]),y(e.parameters[1]),y(e.parameters[2]),e.parameters[3]?y(e.parameters[3]):1)
throw new o.a("effect:syntax-error",`Invalid color function '${e.name}'`,{colorFunction:e})}(e.value)}}function v(e){if(!Object(s.e)(e))throw new o.a("effect:unknown-color",`color '${e}' isn't valid`,{namedColor:e})
return Object(s.b)(e)}const j=/^rgba?/i,w=/^hsla?/i},1613:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n(856),i=n(862),s=n(912),o=n(20),a=n(858),l=(n(353),n(77),n(859),n(857)),c=n(933),u=n(1416),d=n(1078)
const h={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"}
let f=class extends(Object(s.b)(i.a)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null
const e=this.visibleSublayers.map(e=>{const t=Object(d.c)(this.floors,e)
return e.toExportImageJSON(t)})
return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(u.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",e=>this.notifyChange(h[e.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers
return e?e.length?"show:"+e.map(e=>e.id).join(","):"show:-1":null}get layerDefs(){var e
const t=!(null==(e=this.floors)||!e.length),n=this.visibleSublayers.filter(e=>null!=e.definitionExpression||t&&null!=e.floorInfo)
return n.length?JSON.stringify(n.reduce((e,t)=>{const n=Object(d.c)(this.floors,t),r=Object(o.k)(n)?Object(d.a)(n,t):t.definitionExpression
return e[t.id]=r,e},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent")
const e=this.layer
return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[]
if(!this.layer)return e
const t=this.layer.sublayers,n=t=>{const r=this.scale,i=0===r,s=0===t.minScale||r<=t.minScale,o=0===t.maxScale||r>=t.maxScale
t.visible&&(i||s&&o)&&(t.sublayers?t.sublayers.forEach(n):e.unshift(t))}
t&&t.forEach(n)
const r=this._get("visibleSublayers")
return!r||r.length!==e.length||r.some((t,n)=>e[n]!==t)?e:r}toJSON(){const e=this.layer
let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null}
return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}}
Object(r.a)([Object(a.b)({readOnly:!0})],f.prototype,"dynamicLayers",null),Object(r.a)([Object(a.b)()],f.prototype,"floors",void 0),Object(r.a)([Object(a.b)({readOnly:!0})],f.prototype,"hasDynamicLayers",null),Object(r.a)([Object(a.b)()],f.prototype,"layer",null),Object(r.a)([Object(a.b)({readOnly:!0})],f.prototype,"layers",null),Object(r.a)([Object(a.b)({readOnly:!0})],f.prototype,"layerDefs",null),Object(r.a)([Object(a.b)({type:Number})],f.prototype,"scale",void 0),Object(r.a)([Object(a.b)(c.a)],f.prototype,"timeExtent",void 0),Object(r.a)([Object(a.b)({readOnly:!0})],f.prototype,"version",null),Object(r.a)([Object(a.b)({readOnly:!0})],f.prototype,"visibleSublayers",null),f=Object(r.a)([Object(l.a)("esri.layers.mixins.ExportImageParameters")],f)},1631:function(e,t,n){"use strict"
n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return T})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return P})),n.d(t,"h",(function(){return j}))
var r=n(873),i=n(77),s=n(1144),o=n(1147),a=(n(899),n(177),n(945))
let l=0,c=0
const u=Object(i.a)("android"),d=Object(i.a)("chrome")||u&&u>=4?"auto":"optimizeLegibility",h={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},f=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g
let p={},b={}
const m={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},y=Math.PI
let g=1
function O(e,t){const n=e*(y/180)
return Math.abs(t*Math.sin(n))+Math.abs(t*Math.cos(n))}function v(e){return e.map(e=>`${e.command} ${e.values.join(" ")}`).join(" ").trim()}function j(e,t,n,r){if(e){if("circle"===e.type)return Object(a.a)("circle",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:e.cx,cy:e.cy,r:e.r})
if("ellipse"===e.type)return Object(a.a)("ellipse",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:e.cx,cy:e.cy,rx:e.rx,ry:e.ry})
if("rect"===e.type)return Object(a.a)("rect",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:e.x,y:e.y,width:e.width,height:e.height})
if("image"===e.type)return Object(a.a)("image",{href:e.src,x:e.x,y:e.y,width:e.width,height:e.height,preserveAspectRatio:"none"})
if("path"===e.type){const r="string"!=typeof e.path?v(e.path):e.path
return Object(a.a)("path",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:r})}if("text"===e.type)return Object(a.a)("text",{fill:t,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":r.align,"text-decoration":r.decoration,kerning:r.kerning,rotate:r.rotate,"text-rendering":d,"font-style":r.font.style,"font-variant":r.font.variant,"font-weight":r.font.weight,"font-size":r.font.size,"font-family":r.font.family,x:e.x,y:e.y},e.text)}return null}function w(e){const t={fill:"none",pattern:null,linearGradient:null}
if(e)if("type"in e&&"pattern"===e.type){const n="patternId-"+ ++l
t.fill=`url(#${n})`,t.pattern={id:n,x:e.x,y:e.y,width:e.width,height:e.height,image:{x:0,y:0,width:e.width,height:e.height,href:e.src}}}else if("type"in e&&"linear"===e.type){const n="linearGradientId-"+ ++c
t.fill=`url(#${n})`,t.linearGradient={id:n,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stops:e.colors.map(e=>({offset:e.offset,color:e.color&&new r.a(e.color).toString()}))}}else if(e){const n=new r.a(e)
t.fill=n.toString()}return t}function _(e){const t={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"}
if(e&&(null!=e.width&&(t.width=e.width),e.cap&&(t.cap=e.cap),e.join&&(t.join=e.join.toString()),e.color&&(t.color=new r.a(e.color).toString()),e.style)){let n=null
if(e.style in m&&(n=m[e.style]),Array.isArray(n)){n=n.slice(0)
for(let t=0;t<n.length;++t)n[t]*=e.width
if("butt"!==e.cap){for(let t=0;t<n.length;t+=2)n[t]-=e.width,n[t]<1&&(n[t]=1)
for(let t=1;t<n.length;t+=2)n[t]+=e.width}n=n.join(",")}t.dashArray=n}return t}function x(e,t){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}}
return e&&(n.align=e.align,n.decoration=e.decoration,n.kerning=e.kerning?"auto":"0",n.rotate=e.rotated?"90":"0",n.font.style=t.style||"normal",n.font.variant=t.variant||"normal",n.font.weight=t.weight||"normal",n.font.size=t.size&&t.size.toString()||"10pt",n.font.family=t.family||"serif"),n}function S(e){const{pattern:t,linearGradient:n}=e
if(t)return Object(a.a)("pattern",{id:t.id,patternUnits:"userSpaceOnUse",x:t.x,y:t.y,width:t.width,height:t.height},Object(a.a)("image",{x:t.image.x,y:t.image.y,width:t.image.width,height:t.image.height,href:t.image.href}))
if(n){const e=n.stops.map((e,t)=>Object(a.a)("stop",{key:t+"-stop",offset:e.offset,"stop-color":e.color}))
return Object(a.a)("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},e)}return null}function M(e,t,n){return Object(o.i)(e,Object(o.c)(e),[t,n])}function E(e,t,n,r,i){return Object(o.h)(e,Object(o.c)(e),[t,n]),e[4]=e[4]*t-r*t+r,e[5]=e[5]*n-i*n+i,e}function L(e,t){p&&"left"in p?(p.left>e&&(p.left=e),p.right<e&&(p.right=e),p.top>t&&(p.top=t),p.bottom<t&&(p.bottom=t)):p={left:e,bottom:t,right:e,top:t}}function I(e){const t=e.args,n=t.length
let r
switch(e.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(r=0;r<n;r+=2)L(t[r],t[r+1])
b.x=t[n-2],b.y=t[n-1]
break
case"H":for(r=0;r<n;++r)L(t[r],b.y)
b.x=t[n-1]
break
case"V":for(r=0;r<n;++r)L(b.x,t[r])
b.y=t[n-1]
break
case"m":{let e=0
"x"in b||(L(b.x=t[0],b.y=t[1]),e=2)
for(r=e;r<n;r+=2)L(b.x+=t[r],b.y+=t[r+1])
break}case"l":case"t":for(r=0;r<n;r+=2)L(b.x+=t[r],b.y+=t[r+1])
break
case"h":for(r=0;r<n;++r)L(b.x+=t[r],b.y)
break
case"v":for(r=0;r<n;++r)L(b.x,b.y+=t[r])
break
case"c":for(r=0;r<n;r+=6)L(b.x+t[r],b.y+t[r+1]),L(b.x+t[r+2],b.y+t[r+3]),L(b.x+=t[r+4],b.y+=t[r+5])
break
case"s":case"q":for(r=0;r<n;r+=4)L(b.x+t[r],b.y+t[r+1]),L(b.x+=t[r+2],b.y+=t[r+3])
break
case"A":for(r=0;r<n;r+=7)L(t[r+5],t[r+6])
b.x=t[n-2],b.y=t[n-1]
break
case"a":for(r=0;r<n;r+=7)L(b.x+=t[r+5],b.y+=t[r+6])}}function k(e,t,n){const r=h[e.toLowerCase()]
let i
"number"==typeof r&&(r?t.length>=r&&(i={action:e,args:t.slice(0,t.length-t.length%r)},n.push(i),I(i)):(i={action:e,args:[]},n.push(i),I(i)))}function C(e){const t={x:0,y:0,width:0,height:0}
if("circle"===e.type)t.x=e.cx-e.r,t.y=e.cy-e.r,t.width=2*e.r,t.height=2*e.r
else if("ellipse"===e.type)t.x=e.cx-e.rx,t.y=e.cy-e.ry,t.width=2*e.rx,t.height=2*e.ry
else if("image"===e.type||"rect"===e.type)t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height
else if("path"===e.type){const n=function(e){const t=("string"!=typeof e.path?v(e.path):e.path).match(f),n=[]
if(p={},b={},!t)return null
let r="",i=[]
const s=t.length
for(let e=0;e<s;++e){const s=t[e],o=parseFloat(s)
isNaN(o)?(r&&k(r,i,n),i=[],r=s):i.push(o)}k(r,i,n)
const o={x:0,y:0,width:0,height:0}
return p&&"left"in p&&(o.x=p.left,o.y=p.top,o.width=p.right-p.left,o.height=p.bottom-p.top),o}(e)
t.x=n.x,t.y=n.y,t.width=n.width,t.height=n.height}return t}function A(e){const t={x:0,y:0,width:0,height:0}
let n=null,r=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY
for(const s of e)n?(n.x=Math.min(n.x,s.x),n.y=Math.min(n.y,s.y),r=Math.max(r,s.x+s.width),i=Math.max(i,s.y+s.height)):(n=t,n.x=s.x,n.y=s.y,r=s.x+s.width,i=s.y+s.height)
return n&&(n.width=r-n.x,n.height=i-n.y),n}function T(e,t,n,r,i,a,l,c,u){let d=(l&&a?O(a,t):t)/2,h=(l&&a?O(a,n):n)/2
if(u){const e=u[0],t=u[1]
d=(l&&a?O(a,e):e)/2,h=(l&&a?O(a,t):t)/2}const f=e.width+r,p=e.height+r,b=Object(s.a)(),m=Object(s.a)()
let y=!1
if(i&&0!==f&&0!==p){const e=t!==n?t/n:f/p,r=t>n?t:n
let i=1,s=1
isNaN(r)||(e>1?(i=r/f,s=r/e/p):(s=r/p,i=r*e/f)),Object(o.f)(m,m,E(b,i,s,d,h)),y=!0}const g=e.x+(f-r)/2,v=e.y+(p-r)/2
if(Object(o.f)(m,m,M(b,d-g,h-v)),!y&&(f>t||p>n)){const e=f/t>p/n,r=(e?t:n)/(e?f:p)
Object(o.f)(m,m,E(b,r,r,g,v))}return a&&Object(o.f)(m,m,function(e,t,n,r){const i=t%360*Math.PI/180
Object(o.g)(e,Object(o.c)(e),i)
const s=Math.cos(i),a=Math.sin(i),l=e[4],c=e[5]
return e[4]=l*s-c*a+r*a-n*s+n,e[5]=c*s+l*a-n*a-r*s+r,e}(b,a,g,v)),c&&Object(o.f)(m,m,M(b,c[0],c[1])),`matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`}function P(e,t,n,r){const i=[],s=[],o=++g,l=function(e,t,n){const r=null==e?void 0:e.effects.find(e=>"bloom"===e.type)
if(!r)return null
const{strength:i,radius:s}=r,o=i>0?s:0,l=(i+o)*t,c=4*i+1
return Object(a.a)("filter",{id:"bloom"+n,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},Object(a.a)("feMorphology",{operator:"dilate",radius:(i+.5*o)*(5**(t/100)*(.4+t/100)),in:"SourceGraphic",result:"dilate"}),Object(a.a)("feGaussianBlur",{in:"dilate",stdDeviation:l/25,result:"blur"}),Object(a.a)("feGaussianBlur",{in:"blur",stdDeviation:l/50,result:"intensityBlur"}),Object(a.a)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},Object(a.a)("feFuncR",{type:"linear",slope:c}),Object(a.a)("feFuncG",{type:"linear",slope:c}),Object(a.a)("feFuncB",{type:"linear",slope:c})),Object(a.a)("feMerge",null,Object(a.a)("feMergeNode",{in:"intensityBlur"}),Object(a.a)("feMergeNode",{in:"intensityBrightness"}),Object(a.a)("feGaussianBlur",{stdDeviation:i/10})))}(null==r?void 0:r.effectView,t,o)
let c=null
if(l){var u
const e=null==r||null==(u=r.effectView)?void 0:u.effects.find(e=>"bloom"===e.type),i=(e.strength?e.strength+e.radius/2:0)/3,s=t+t*i,o=n+n*i
c=[Math.max(s,10),Math.max(o,10)]}for(const o of e){const e=[],l=[]
let u=0,d=0,h=0
for(const t of o){const{shape:n,fill:r,stroke:s,font:o,offset:a}=t
u+=s&&s.width||0
const c=w(r),f=_(s),p="text"===n.type?x(n,o):null
i.push(S(c)),e.push(j(n,c.fill,f,p)),l.push(C(n)),a&&(d+=a[0],h+=a[1])}const f=T(A(l),t,n,u,null==r?void 0:r.scale,null==r?void 0:r.rotation,null==r?void 0:r.useRotationSize,[d,h],c)
s.push(Object(a.a)("g",{transform:f},e))}return null!=r&&r.useRotationSize&&null!=r&&r.rotation&&(t=O(null==r?void 0:r.rotation,t),n=O(null==r?void 0:r.rotation,n)),l&&(t=c[0],n=c[1]),Object(a.a)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,style:"display: block;"},l,Object(a.a)("defs",null,i),l?Object(a.a)("g",{filter:`url(#bloom${o})`},s):s)}},1632:function(e,t,n){"use strict"
n.r(t),n.d(t,"getPatternDescriptor",(function(){return E})),n.d(t,"getSizeFromOptions",(function(){return A})),n.d(t,"getSymbolLayerFill",(function(){return M})),n.d(t,"previewSymbol3D",(function(){return T}))
var r=n(897),i=n(1271),s=(n(77),n(354)),o=n(177),a=n(20),l=n(861),c=n(876),u=n(1317),d=n(1847),h=n(1709),f=n(1374),p=n(1691),b=n(1183),m=n(1880)
const y=f.a.size,g=f.a.maxSize,O=f.a.maxOutlineSize,v=f.a.lineWidth,j=f.a.tallSymbolWidth,w=o.a.getLogger("esri.symbols.support.previewSymbol3D")
function _(e){const t=e.outline,n=Object(a.k)(e.material)?e.material.color:null,r=Object(a.k)(n)?n.toHex():null
if(Object(a.j)(t)||"pattern"in t&&Object(a.k)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===r?{color:"#bdc3c7",width:.75}:null
const i=Object(c.h)(t.size)||0
return{color:"rgba("+(Object(a.k)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(i,O),style:"pattern"in t&&Object(a.k)(t.pattern)&&"style"===t.pattern.type?Object(u.b)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function x(e,t=1){const n=e.a,r=Object(i.b)(e),s=r.h,o=r.s/t,a=100-(100-r.v)/t,{r:l,g:c,b:u}=Object(i.e)({h:s,s:o,v:a})
return[l,c,u,n]}function S(e){return"water"===e.type?Object(a.j)(e.color)?null:e.color:Object(a.j)(e.material)||Object(a.j)(e.material.color)?null:e.material.color}function M(e,t=0){const n=S(e)
if(!n){if("fill"===e.type)return null
const n=u.a.r,r=Object(f.c)(n,t)
return[r,r,r,100]}const r=n.toRgba()
for(let e=0;e<3;e++)r[e]=Object(f.c)(r[e],t)
return r}async function E(e,t){const n=e.style
return"none"===n?null:{type:"pattern",x:0,y:0,src:await Object(u.d)(Object(r.b)(`esri/symbols/patterns/${n}.png`),t.toCss(!0)),width:5,height:5}}function L(e){return e.outline?_(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function I(e,t){const n=S(e)
if(!n)return null
let r="rgba("
return r+=Object(f.c)(n.r,t)+",",r+=Object(f.c)(n.g,t)+",",r+=Object(f.c)(n.b,t)+",",r+n.a+");"}function k(e,t){const n=I(e,t)
return n?"pattern"in e&&Object(a.k)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:n,width:Math.min(e.size?Object(c.h)(e.size):.75,O),style:"pattern"in e&&Object(a.k)(e.pattern)&&"style"===e.pattern.type?Object(u.b)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?Object(c.h)(2):e.join:null}:{}}function C(e,t,n){const r=.75*n
return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function A(e){const t="number"==typeof(null==e?void 0:e.size)?null==e?void 0:e.size:null
return t?Object(c.h)(t):null}function T(e,t){if(0===e.symbolLayers.length)return Promise.reject(new s.a("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."))
switch(e.type){case"point-3d":return function(e,t){const n=A(t),i=t&&t.maxSize?Object(c.h)(t.maxSize):null,s=t&&t.disableUpsampling,o=e.symbolLayers,a=[]
let u=0,O=0
const v=o.getItemAt(o.length-1)
let x
return v&&"icon"===v.type&&(x=v.size&&Object(c.h)(v.size)),o.forEach(o=>{if("icon"!==o.type&&"object"!==o.type)return
const l="icon"===o.type?o.size&&Object(c.h)(o.size):0,v=n||l?Math.ceil(Math.min(n||l,i||g)):y
if(o&&o.resource&&o.resource.href){const t=function(e,t){const n=t&&t.resource,i=n&&n.href
if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url)
if(i&&"object"!==t.type)return Promise.resolve(Object(b.g)(e,t))
const s=Object(r.b)("esri/images/Legend/legend3dsymboldefault.png")
return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?Object(m.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch(e=>e).then(e=>{var t
return(null==e||null==(t=e.thumbnail)?void 0:t.url)||s}):Promise.resolve(s)}(e,o).then((function(e){const t=o.get("material.color"),n=function(e){return"icon"===e.type?"multiply":"tint"}(o)
return Object(p.b)(e,v,t,n,s)})).then((function(e){const t=e.width,n=e.height
return u=Math.max(u,t),O=Math.max(O,n),[{shape:{type:"image",x:0,y:0,width:t,height:n,src:e.url},fill:null,stroke:null}]}))
a.push(t)}else{var w
let e=v
"icon"===o.type&&x&&n&&(e=v*(l/x))
const r="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(w=t.symbolConfig)?void 0:w.isTall)||"object"===o.type&&function(e){const t=e.depth,n=e.height,r=e.width
return r&&t&&n&&r===t&&r<n}(o)
u=Math.max(u,r?j:e),O=Math.max(O,e),a.push(Promise.resolve(function(e,t,n){const r=[]
if(!e)return r
switch(e.type){case"icon":{const n=0,i=0,s=t,o=t
switch(e.resource&&e.resource.primitive||d.b){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:M(e,0),stroke:_(e)})
break
case"square":r.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[n,i]},{command:"L",values:[s,i]},{command:"L",values:[s,o]},{command:"Z",values:[]}]},fill:M(e,0),stroke:_(e)})
break
case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[.5*s,i]},{command:"L",values:[s,o]},{command:"Z",values:[]}]},fill:M(e,0),stroke:_(e)})
break
case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*s,i]},{command:"L",values:[.5*s,o]},{command:"M",values:[n,.5*o]},{command:"L",values:[s,.5*o]}]},stroke:L(e)})
break
case"x":r.push({shape:{type:"path",path:[{command:"M",values:[n,i]},{command:"L",values:[s,o]},{command:"M",values:[s,i]},{command:"L",values:[n,o]}]},stroke:L(e)})
break
case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[n,.5*o]},{command:"L",values:[.5*s,i]},{command:"L",values:[s,.5*o]},{command:"L",values:[.5*s,o]},{command:"Z",values:[]}]},fill:M(e,0),stroke:_(e)})}break}case"object":switch(e.resource&&e.resource.primitive||h.b){case"cone":{const i=C(M(e,0),M(e,-.6),n?j:t),s=Object(f.d)(t,n)
r.push({shape:s[0],fill:i}),r.push({shape:s[1],fill:i})
break}case"inverted-cone":{const n=M(e,0),i=C(n,M(e,-.6),t),s=Object(f.i)(t)
r.push({shape:s[0],fill:i}),r.push({shape:s[1],fill:n})
break}case"cube":{const i=Object(f.e)(t,n)
r.push({shape:i[0],fill:M(e,0)}),r.push({shape:i[1],fill:M(e,-.3)}),r.push({shape:i[2],fill:M(e,-.5)})
break}case"cylinder":{const i=C(M(e,0),M(e,-.6),n?j:t),s=Object(f.f)(t,n)
r.push({shape:s[0],fill:i}),r.push({shape:s[1],fill:i}),r.push({shape:s[2],fill:M(e,0)})
break}case"diamond":{const n=Object(f.g)(t)
r.push({shape:n[0],fill:M(e,-.3)}),r.push({shape:n[1],fill:M(e,0)}),r.push({shape:n[2],fill:M(e,-.3)}),r.push({shape:n[3],fill:M(e,-.7)})
break}case"sphere":{const n=C(M(e,0),M(e,-.6))
n.x1=0,n.y1=0,n.x2=.25*t,n.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:n})
break}case"tetrahedron":{const n=Object(f.k)(t)
r.push({shape:n[0],fill:M(e,-.3)}),r.push({shape:n[1],fill:M(e,0)}),r.push({shape:n[2],fill:M(e,-.6)})
break}}}return r}(o,e,r)))}}),Object(l.j)(a).then((function(e){const n=[]
return e.forEach((function(e){e.value?n.push(e.value):e.error&&w.warn("error while building swatchInfo!",e.error)})),Object(p.a)(n,[u,O],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}(e,t)
case"line-3d":return function(e,t){const n=e.symbolLayers,r=[],i=Object(b.i)(e),s=A(t),o=(t&&t.maxSize?Object(c.h)(t.maxSize):null)||O
let l,u=0,d=0
return n.forEach((e,t)=>{if(!e)return
if("line"!==e.type&&"path"!==e.type)return
const n=[]
switch(e.type){case"line":{const r=k(e,0)
if(Object(a.j)(r))break
const i=r&&r.width||0
0===t&&(l=i)
const c=Math.min(s||i,o),h=0===t?c:s?c*(i/l):c,f=h>v/2?2*h:v
d=Math.max(d,h),u=Math.max(u,f),r.width=h,n.push({shape:{type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[u,.5*d]}]},stroke:r})
break}case"path":{const t=Math.min(s||y,o),r=M(e,0),i=M(e,-.2),a=I(e,-.4),l=a?{color:a,width:1}:{}
if("quad"===e.profile){const t=e.width,s=e.height,o=Object(f.j)(t&&s?t/s:1,0===s,0===t),a={...l,join:"bevel"}
n.push({shape:o[0],fill:i,stroke:a}),n.push({shape:o[1],fill:i,stroke:a}),n.push({shape:o[2],fill:r,stroke:a})}else n.push({shape:f.m.pathSymbol3DLayer[0],fill:i,stroke:l}),n.push({shape:f.m.pathSymbol3DLayer[1],fill:r,stroke:l})
d=Math.max(d,t),u=d}}r.push(n)}),Promise.resolve(Object(p.a)(r,[u,d],{node:t&&t.node,scale:i,opacity:t&&t.opacity}))}(e,t)
case"polygon-3d":case"mesh-3d":return async function(e,t){const n="mesh-3d"===e.type,r=e.symbolLayers,i=A(t),s=t&&t.maxSize?Object(c.h)(t.maxSize):null,o=i||y,l=[]
let u=0,d=0,h=!1
for(let e=0;e<r.length;e++){const t=r.getItemAt(e),i=[]
if(n&&"fill"!==t.type)continue
const c=f.m.fill[0]
switch(t.type){case"fill":{const e=_(t),r=Math.min(o,s||g)
u=Math.max(u,r),d=Math.max(d,r),h=!0
let l=M(t,0)
const f="pattern"in t&&t.pattern,p=S(t)
!n&&Object(a.k)(f)&&"style"===f.type&&"solid"!==f.style&&p&&(l=await E(f,p)),i.push({shape:c,fill:l,stroke:e})
break}case"line":{const e=k(t,0)
if(Object(a.j)(e))break
const n={stroke:e,shape:c}
u=Math.max(u,y),d=Math.max(d,y),i.push(n)
break}case"extrude":{const e={join:"round",width:1,...k(t,-.4)},n=M(t,0),r=M(t,-.2),a=Math.min(o,s||g),l=Object(f.h)(a)
e.width=1,i.push({shape:l[0],fill:r,stroke:e}),i.push({shape:l[1],fill:r,stroke:e}),i.push({shape:l[2],fill:n,stroke:e})
const c=y,h=.7*y+.5*a
u=Math.max(u,c),d=Math.max(d,h)
break}case"water":{const e=S(t),n=x(e),r=x(e,2),a=x(e,3),l=Object(f.l)()
h=!0,i.push({shape:l[0],fill:n}),i.push({shape:l[1],fill:r}),i.push({shape:l[2],fill:a})
const c=Math.min(o,s||g)
u=Math.max(u,c),d=Math.max(d,c)
break}}l.push(i)}return Promise.resolve(Object(p.a)(l,[u,d],{node:t&&t.node,scale:h,opacity:t&&t.opacity}))}(e,t)}return Promise.reject(new s.a("symbolPreview: swatchInfo3D","symbol not supported."))}},1691:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}))
var r=n(148),i=n(660),s=n(1271),o=n(354),a=n(77),l=(n(1222),n(1223)),c=n(1631),u=n(1183)
const d=Object(l.a)()
function h(e,t,n){const r=Math.ceil(t[0]),i=Math.ceil(t[1])
if(!e.some(e=>!!e.length))return null
const s=n&&n.node||document.createElement("div")
return null!=n.opacity&&(s.style.opacity=n.opacity.toString()),null!=n.effectView&&(s.style.filter=Object(u.e)(n.effectView)),d.append(s,c.g.bind(null,e,r,i,n)),s}function f(e,t,n,r,i){switch(i){case"multiply":e[t+0]*=n[0],e[t+1]*=n[1],e[t+2]*=n[2],e[t+3]*=n[3]
break
default:{const i=Object(s.b)({r:e[t+0],g:e[t+1],b:e[t+2]})
i.h=r.h,i.s=r.s,i.v=i.v/100*r.v
const o=Object(s.e)(i)
e[t+0]=o.r,e[t+1]=o.g,e[t+2]=o.b,e[t+3]*=n[3]
break}}}function p(e,t,n,l,c){return function(e,t,n){return e?Object(i.default)(e,{responseType:"image"}).then(e=>{const r=e.data,i=r.width,s=r.height,o=i/s
let a=t
if(n){const e=Math.max(i,s)
a=Math.min(a,e)}return{image:r,width:o<=1?Math.ceil(a*o):a,height:o<=1?a:Math.ceil(a/o)}}):Promise.reject(new o.a("renderUtils: imageDataSize","href not provided."))}(e,t,c).then(i=>{const o=i.width?i.width:t,c=i.height?i.height:t
if(i.image&&function(e,t){return!(!e||"ignore"===t||"multiply"===t&&255===e.r&&255===e.g&&255===e.b&&1===e.a)}(n,l)){let t=i.image.width,r=i.image.height
Object(a.a)("edge")&&/\.svg$/i.test(e)&&(t-=1,r-=1)
const u=function(e,t){e=Math.ceil(e),t=Math.ceil(t)
const n=document.createElement("canvas")
n.width=e,n.height=t,n.style.width=e+"px",n.style.height=t+"px"
const r=n.getContext("2d")
return r.clearRect(0,0,e,t),r}(o,c)
u.drawImage(i.image,0,0,t,r,0,0,o,c)
const d=u.getImageData(0,0,o,c),h=[n.r/255,n.g/255,n.b/255,n.a],p=Object(s.b)(n)
for(let e=0;e<d.data.length;e+=4)f(d.data,e,h,p,l)
u.putImageData(d,0,0),e=u.canvas.toDataURL("image/png")}else{const t=r.b&&r.b.findCredential(e)
if(t&&t.token){const n=-1===e.indexOf("?")?"?":"&"
e=`${e}${n}token=${t.token}`}}return{url:e,width:o,height:c}}).catch((function(){return{url:e,width:t,height:t}}))}},1769:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n(990)
var r=n(921)
const i=/^-?(\d+)(\.(\d+))?$/i
function s(e,t){return e-t}function o(e,t){let n,r
return n=Number(e.toFixed(t)),n<e?r=n+1/10**t:(r=n,n-=1/10**t),n=Number(n.toFixed(t)),r=Number(r.toFixed(t)),[n,r]}function a(e,t,n,r,i){const s=c(e,t,n,r),o=null==s.previous||s.previous<=i,a=null==s.next||s.next<=i
return o&&a||s.previous+s.next<=2*i}function l(e){const t=String(e),n=t.match(i)
if(n&&n[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0}
if(t.toLowerCase().indexOf("e")>-1){const e=t.split("e"),n=e[0],r=e[1]
if(n&&r){const e=Number(n)
let t=Number(r)
const i=t>0
i||(t=Math.abs(t))
const s=l(e)
return i?(s.integer+=t,t>s.fractional?s.fractional=0:s.fractional-=t):(s.fractional+=t,t>s.integer?s.integer=1:s.integer-=t),s}}return{integer:0,fractional:0}}function c(e,t,n,r){const i={previous:null,next:null}
if(null!=n){const r=e-n,s=t-n-r
i.previous=Math.floor(Math.abs(100*s/r))}if(null!=r){const n=r-e,s=r-t-n
i.next=Math.floor(Math.abs(100*s/n))}return i}function u(e,t={}){const n=e.slice(0),{tolerance:r=2,strictBounds:i=!1,indexes:c=n.map((e,t)=>t)}=t
c.sort(s)
for(let e=0;e<c.length;e++){const t=c[e],s=n[t],u=0===t?null:n[t-1],d=t===n.length-1?null:n[t+1],h=l(s).fractional
if(h){let l,c=0,f=!1
for(;c<=h&&!f;){const t=o(s,c)
l=i&&0===e?t[1]:t[0],f=a(s,l,u,d,r),c++}f&&(n[t]=l)}}return n}const d={maximumFractionDigits:20}
function h(e){return Object(r.b)(e,d)}},1880:function(e,t,n){"use strict"
n.r(t),n.d(t,"fetchSymbolFromStyle",(function(){return p})),n.d(t,"resolveWebStyleSymbol",(function(){return f}))
var r=n(906),i=n(1259),s=n(354),o=n(292),a=n(914),l=n(936),c=n(1101),u=n(1960),d=n(1200),h=n(1921)
function f(e,t,n,r){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,n){const r=d.a.replace(/\{SymbolName\}/gi,e.name)
return Object(d.d)(r,n).then(e=>{const n=Object(d.c)(e.data)
return Object(c.a)(n,{portal:t.portal,url:Object(o.M)(Object(o.I)(r)),origin:"portal-item"})})}(e,t,r):Object(d.b)(e,t,r).then(i=>p(i,e.name,t,n,r)):Promise.reject(new s.a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function p(e,t,n,f,p){const b=e.data,m={portal:n&&n.portal||a.a.getDefault(),url:Object(o.M)(e.baseUrl),origin:"portal-item"},y=b.items.find(e=>e.name===t)
if(!y){const e=`The symbol name '${t}' could not be found`
return Promise.reject(new s.a("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let g=Object(l.b)(Object(d.e)(y,f),m),O=y.thumbnail&&y.thumbnail.href
const v=y.thumbnail&&y.thumbnail.imageData
Object(i.b)()&&(g=Object(i.a)(g),O=Object(i.a)(O))
const j={portal:n.portal,url:Object(o.M)(Object(o.I)(g)),origin:"portal-item"}
return Object(d.d)(g,p).then(i=>{const s="cimRef"===f?Object(d.c)(i.data):i.data,o=Object(c.a)(s,j)
if(o&&Object(r.c)(o)){if(O){const e=Object(l.b)(O,m)
o.thumbnail=new h.a({url:e})}else v&&(o.thumbnail=new h.a({url:"data:image/png;base64,"+v}))
e.styleUrl?o.styleOrigin=new u.a({portal:n.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new u.a({portal:n.portal,styleName:e.styleName,name:t}))}return o})}},1926:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n(856),i=n(862),s=n(77),o=n(178),a=n(177),l=n(858),c=(n(859),n(857)),u=n(1593),d=n(1456)
let h=class extends i.a{constructor(e){super(e),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=Object(s.a)("mapview-transitions-duration"),this.effects=[]}set effect(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e)
try{this._transitionTo(f(e))}catch(t){this._transitionTo([]),a.a.getLogger(this.declaredClass).warn("Invalid Effect",{effect:e,error:t})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(e){this._updateForScale(e)}get transitioning(){return null!==this._to}canTransitionTo(e){try{return this.scale>0&&p(this._current,f(e),this.scale)}catch{return!1}}transitionStep(e,t){this._applyTimeTransition(e),this._updateForScale(t)}end(){this._applyTimeTransition(this.duration)}_transitionTo(e){this.scale>0&&p(this._current,e,this.scale)?(this._final=e,this._to=Object(o.a)(e),function(e,t,n){var r,i
const s=e.length>t.length?e:t,o=e.length>t.length?t:e,a=o[o.length-1],l=null!=(r=null==a?void 0:a.scale)?r:n,c=null!=(i=null==a?void 0:a.effects)?i:[]
for(let e=o.length;e<s.length;e++)o.push({scale:l,effects:[...c]})
for(let e=0;e<s.length;e++)o[e].scale=-1===o[e].scale?n:o[e].scale,s[e].scale=-1===s[e].scale?n:s[e].scale,Object(d.c)(o[e].effects,s[e].effects)}(this._current,this._to,this.scale),this._from=Object(o.a)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?Object(o.a)(this._current[0].effects):[])}_applyTimeTransition(e){if(!(this._to&&this._from&&this._current&&this._final))return
this._time+=e
const t=Math.min(1,this._time/this.duration)
for(let e=0;e<this._current.length;e++){const n=this._current[e],r=this._from[e],i=this._to[e]
n.scale=b(r.scale,i.scale,t)
for(let e=0;e<n.effects.length;e++){const s=n.effects[e],o=r.effects[e],a=i.effects[e]
s.interpolate(o,a,t)}}1===t&&(this._current=this._final,this._set("effects",this._current[0]?Object(o.a)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(e){if(this._set("scale",e),0===this._current.length)return
const t=this._current,n=this._current.length-1
let r,i,s=1
if(1===t.length||e>=t[0].scale)i=r=t[0].effects
else if(e<=t[n].scale)i=r=t[n].effects
else for(let o=0;o<n;o++){const n=t[o],a=t[o+1]
if(n.scale>=e&&a.scale<=e){s=(e-n.scale)/(a.scale-n.scale),r=n.effects,i=a.effects
break}}for(let e=0;e<this.effects.length;e++)this.effects[e].interpolate(r[e],i[e],s)}}
function f(e){const t=Object(u.a)(e)||[]
return function(e){const t=e[0]
return!!t&&"type"in t}(t)?[{scale:-1,effects:t}]:t}function p(e,t,n){var r,i,s,o
return null==(r=e[0])||!r.effects||null==(i=t[0])||!i.effects||!((-1===(null==(s=e[0])?void 0:s.scale)||-1===(null==(o=t[0])?void 0:o.scale))&&(e.length>1||t.length>1)&&n<=0)&&Object(d.a)(e[0].effects,t[0].effects)}function b(e,t,n){return e+(t-e)*n}Object(r.a)([Object(l.b)()],h.prototype,"_to",void 0),Object(r.a)([Object(l.b)()],h.prototype,"duration",void 0),Object(r.a)([Object(l.b)({value:""})],h.prototype,"effect",null),Object(r.a)([Object(l.b)({readOnly:!0})],h.prototype,"effects",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],h.prototype,"hasEffects",null),Object(r.a)([Object(l.b)({value:0})],h.prototype,"scale",null),Object(r.a)([Object(l.b)({readOnly:!0})],h.prototype,"transitioning",null),h=Object(r.a)([Object(c.a)("esri.layers.effects.EffectView")],h)},1957:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n(873)
var r=n(20),i=n(922),s=n(921),o=(n(353),n(177))
n(1769),n(1293),o.a.getLogger("esri.renderers.support.utils")
const a=Object(i.a)("short-date")
function l(e){return Object(i.b)(new Date(e),a)}function c(e){const t=Math.floor(Math.log10(Math.abs(e)))+1,n=t<4||t>6?4:t,r=Math.abs(e)>=1e6?"compact":"standard"
return Object(s.b)(e,{notation:r,minimumSignificantDigits:2,maximumSignificantDigits:n})}function u(e,t,n){if(!Object(r.k)(t)||!Object(r.k)(e))return[]
const i=[]
for(let r=-1*n;r<=n;r++)0!==r&&i.push(t+r*e)
return i}n(1085)},1980:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n(77)
var r=n(354),i=n(20),s=n(1270)
function o(e){return Object(i.j)(e)||"simple"===e.type||"unique-value"===e.type||"class-breaks"===e.type||"dictionary"===e.type||"heatmap"===e.type}function a(e){if(Object(i.j)(e))return null
if(!o(e))return new r.a("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e})
switch(e.type){case"simple":return l(t=e,Object(s.a)(t.symbol).error)
case"unique-value":return function(e){const t=e.uniqueValueInfos.map(e=>Object(s.a)(e.symbol).error).filter(e=>!!e),n=Object(s.a)(e.defaultSymbol)
return n.error&&t.unshift(n.error),l(e,t)}(e)
case"class-breaks":return function(e){const t=e.classBreakInfos.map(e=>Object(s.a)(e.symbol).error).filter(e=>!!e),n=Object(s.a)(e.defaultSymbol)
return n.error&&t.unshift(n.error),l(e,t)}(e)
case"dictionary":case"heatmap":return null}var t
return null}function l(e,t){if(!t)return null
let n
if(n=Array.isArray(t)?t:[t],n.length>0){const t=n.map(e=>e.details.symbol.type||e.details.symbol.declaredClass).filter(e=>!!e)
t.sort()
const i=[]
return t.forEach((e,n)=>{0!==n&&e===t[n-1]||i.push(e)}),new r.a("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${i.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}},658:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return g}))
var r,i=n(856),s=n(20),o=n(355),a=n(858),l=(n(353),n(77),n(859),n(857)),c=n(875),u=n(866),d=n(659),h=n(928),f=n(904),p=n(872),b=n(662)
function m(e,t,n){return null==t?n:null==n?t:e(t,n)}let y=r=class extends c.a{constructor(...e){super(...e),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(e,t,n,r,i){return function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?{spatialReference:e,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof e?(e.spatialReference=null==e.spatialReference?d.default.WGS84:e.spatialReference,e):{xmin:e,ymin:t,xmax:n,ymax:r,spatialReference:null==i?d.default.WGS84:i}}static fromBounds(e,t){return new r({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}static fromPoint(e){return new r({xmin:e.x,ymin:e.y,zmin:e.z,xmax:e.x,ymax:e.y,zmax:e.z,spatialReference:e.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const e=new u.a({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference})
return this.hasZ&&(e.z=.5*(this.zmin+this.zmax)),this.hasM&&(e.m=.5*(this.mmin+this.mmax)),e}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(e){const t=this.center
return null!=e.z&&this.hasZ?this.offset(e.x-t.x,e.y-t.y,e.z-t.z):this.offset(e.x-t.x,e.y-t.y)}clone(){const e=new r
return e.xmin=this.xmin,e.ymin=this.ymin,e.xmax=this.xmax,e.ymax=this.ymax,e.spatialReference=this.spatialReference,null!=this.zmin&&(e.zmin=this.zmin,e.zmax=this.zmax),null!=this.mmin&&(e.mmin=this.mmin,e.mmax=this.mmax),e}contains(e){if(!e)return!1
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!t.equals(n)&&Object(b.canProject)(t,n)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),"point"===e.type?Object(h.e)(this,e):"extent"===e.type&&Object(h.c)(this,e)}equals(e){if(this===e)return!0
if(Object(s.j)(e))return!1
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!t.equals(n)&&Object(b.canProject)(t,n)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),this.xmin===e.xmin&&this.ymin===e.ymin&&this.zmin===e.zmin&&this.mmin===e.mmin&&this.xmax===e.xmax&&this.ymax===e.ymax&&this.zmax===e.zmax&&this.mmax===e.mmax}expand(e){const t=.5*(1-e),n=this.width*t,r=this.height*t
if(this.xmin+=n,this.ymin+=r,this.xmax-=n,this.ymax-=r,this.hasZ){const e=(this.zmax-this.zmin)*t
this.zmin+=e,this.zmax-=e}if(this.hasM){const e=(this.mmax-this.mmin)*t
this.mmin+=e,this.mmax-=e}return this}intersects(e){if(Object(s.j)(e))return!1
"mesh"===e.type&&(e=e.extent)
const t=this.spatialReference,n=e.spatialReference
return t&&n&&!t.equals(n)&&Object(b.canProject)(t,n)&&(e=t.isWebMercator?Object(b.geographicToWebMercator)(e):Object(b.webMercatorToGeographic)(e,!0)),Object(f.c)(e.type)(this,e)}normalize(){const e=this._normalize(!1,!0)
return Array.isArray(e)?e:[e]}offset(e,t,n){return this.xmin+=e,this.ymin+=t,this.xmax+=e,this.ymax+=t,null!=n&&(this.zmin+=n,this.zmax+=n),this}shiftCentralMeridian(){return this._normalize(!0)}union(e){return this===e||(this.xmin=Math.min(this.xmin,e.xmin),this.ymin=Math.min(this.ymin,e.ymin),this.xmax=Math.max(this.xmax,e.xmax),this.ymax=Math.max(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.min,this.zmin,e.zmin),this.zmax=m(Math.max,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.min,this.mmin,e.mmin),this.mmax=m(Math.max,this.mmax,e.mmax))),this}intersection(e){return this===e?this:Object(s.j)(e)||!this.intersects(e)?null:(this.xmin=Math.max(this.xmin,e.xmin),this.ymin=Math.max(this.ymin,e.ymin),this.xmax=Math.min(this.xmax,e.xmax),this.ymax=Math.min(this.ymax,e.ymax),(this.hasZ||e.hasZ)&&(this.zmin=m(Math.max,this.zmin,e.zmin),this.zmax=m(Math.min,this.zmax,e.zmax)),(this.hasM||e.hasM)&&(this.mmin=m(Math.max,this.mmin,e.mmin),this.mmax=m(Math.min,this.mmax,e.mmax)),this)}toJSON(e){return this.write({},e)}_shiftCM(e=Object(p.e)(this.spatialReference)){if(!e||!this.spatialReference)return this
const t=this.spatialReference,n=this._getCM(e)
if(n){const r=t.isWebMercator?Object(b.webMercatorToGeographic)(n):n
this.xmin-=n.x,this.xmax-=n.x,t.isWebMercator||(r.x=this._normalizeX(r.x,e).x),this.spatialReference=new d.default(Object(o.c)(t.isWGS84?e.altTemplate:e.wkTemplate,{Central_Meridian:r.x}))}return this}_getCM(e){let t=null
const[n,r]=e.valid,i=this.xmin,s=this.xmax
return i>=n&&i<=r&&s>=n&&s<=r||(t=this.center),t}_normalize(e,t,n){const r=this.spatialReference
if(!r)return this
if(!(n=n||Object(p.e)(r)))return this
const i=this._getParts(n).map(e=>e.extent)
if(i.length<2)return i[0]||this
if(i.length>2)return e?this._shiftCM(n):this.set({xmin:n.valid[0],xmax:n.valid[1]})
if(e)return this._shiftCM(n)
if(t)return i
let s=!0,o=!0
return i.forEach(e=>{e.hasZ||(s=!1),e.hasM||(o=!1)}),{rings:i.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(s){const n=(e.zmax-e.zmin)/2
for(let e=0;e<t.length;e++)t[e].push(n)}if(o){const n=(e.mmax-e.mmin)/2
for(let e=0;e<t.length;e++)t[e].push(n)}return t}),hasZ:s,hasM:o,spatialReference:r}}_getParts(e){let t=this.cache._parts
if(!t){t=[]
const{ymin:n,ymax:i,spatialReference:s}=this,o=this.width,a=this.xmin,l=this.xmax
let c
e=e||Object(p.e)(s)
const[u,d]=e.valid
c=this._normalizeX(this.xmin,e)
const h=c.x,f=c.frameId
c=this._normalizeX(this.xmax,e)
const b=c.x,m=c.frameId,y=h===b&&o>0
if(o>2*d){const e=new r(a<l?h:b,n,d,i,s),o=new r(u,n,a<l?b:h,i,s),c=new r(0,n,d,i,s),p=new r(u,n,0,i,s),y=[],g=[]
e.contains(c)&&y.push(f),e.contains(p)&&g.push(f),o.contains(c)&&y.push(m),o.contains(p)&&g.push(m)
for(let e=f+1;e<m;e++)y.push(e),g.push(e)
t.push({extent:e,frameIds:[f]},{extent:o,frameIds:[m]},{extent:c,frameIds:y},{extent:p,frameIds:g})}else h>b||y?t.push({extent:new r(h,n,d,i,s),frameIds:[f]},{extent:new r(u,n,b,i,s),frameIds:[m]}):t.push({extent:new r(h,n,b,i,s),frameIds:[f]})
this.cache._parts=t}const n=this.hasZ,i=this.hasM
if(n||i){const e={}
n&&(e.zmin=this.zmin,e.zmax=this.zmax),i&&(e.mmin=this.mmin,e.mmax=this.mmax)
for(let n=0;n<t.length;n++)t[n].extent.set(e)}return t}_normalizeX(e,t){const[n,r]=t.valid,i=2*r
let s,o=0
return e>r?(s=Math.ceil(Math.abs(e-r)/i),e-=s*i,o=s):e<n&&(s=Math.ceil(Math.abs(e-n)/i),e+=s*i,o=-s),{x:e,frameId:o}}}
Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"cache",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"center",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"extent",null),Object(i.a)([Object(a.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasM",null),Object(i.a)([Object(a.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasZ",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"height",null),Object(i.a)([Object(a.b)({readOnly:!0})],y.prototype,"width",null),Object(i.a)([Object(a.b)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],y.prototype,"xmin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],y.prototype,"ymin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmin",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],y.prototype,"xmax",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],y.prototype,"ymax",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmax",void 0),Object(i.a)([Object(a.b)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmax",void 0),y=r=Object(i.a)([Object(l.a)("esri.geometry.Extent")],y),y.prototype.toJSON.isDefaultToJSON=!0
const g=y},659:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return f}))
var r,i=n(856),s=n(860),o=n(178),a=n(859),l=n(858),c=n(857),u=n(864),d=n(872)
let h=r=class extends s.a{constructor(e){super(e),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}static fromJSON(e){if(!e)return null
if(e.wkid){if(102100===e.wkid)return r.WebMercator
if(4326===e.wkid)return r.WGS84}const t=new r
return t.read(e),t}normalizeCtorArgs(e){return e&&"object"==typeof e?e:{["string"==typeof e?"wkt":"wkid"]:e}}get isWGS84(){return Object(d.m)(this)}get isWebMercator(){return Object(d.p)(this)}get isGeographic(){return Object(d.h)(this)}get isWrappable(){return Object(d.q)(this)}writeWkt(e,t){this.wkid||(t.wkt=e)}clone(){if(this===r.WGS84)return r.WGS84
if(this===r.WebMercator)return r.WebMercator
const e=new r
return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),this.imageCoordinateSystem&&(e.imageCoordinateSystem=Object(o.a)(this.imageCoordinateSystem)),e}equals(e){if(null==e)return!1
if(this.imageCoordinateSystem||e.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==e.imageCoordinateSystem)return!1
const{id:t,referenceServiceName:n}=e.imageCoordinateSystem,{geodataXform:r}=e.imageCoordinateSystem,i=this.imageCoordinateSystem
return null==t||r?JSON.stringify(i)===JSON.stringify(e.imageCoordinateSystem):n?i.id===t&&i.referenceServiceName===n:i.id===t}return Object(d.d)(this,e)}toJSON(e){return this.write(void 0,e)}}
h.GCS_NAD_1927=null,h.WGS84=null,h.WebMercator=null,h.PlateCarree=null,Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isWGS84",null),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isWebMercator",null),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isGeographic",null),Object(i.a)([Object(l.b)({readOnly:!0})],h.prototype,"isWrappable",null),Object(i.a)([Object(l.b)({type:a.a,json:{write:!0}})],h.prototype,"latestWkid",void 0),Object(i.a)([Object(l.b)({type:a.a,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt}}}}}}})],h.prototype,"wkid",void 0),Object(i.a)([Object(l.b)({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid}}}}}}})],h.prototype,"wkt",void 0),Object(i.a)([Object(u.a)("wkt"),Object(u.a)("web-scene","wkt")],h.prototype,"writeWkt",null),Object(i.a)([Object(l.b)({type:a.a,json:{write:!0}})],h.prototype,"vcsWkid",void 0),Object(i.a)([Object(l.b)({type:a.a,json:{write:!0}})],h.prototype,"latestVcsWkid",void 0),Object(i.a)([Object(l.b)()],h.prototype,"imageCoordinateSystem",void 0),h=r=Object(i.a)([Object(c.a)("esri.geometry.SpatialReference")],h),h.prototype.toJSON.isDefaultToJSON=!0,h.GCS_NAD_1927=new h({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),h.WGS84=new h(d.b),h.WebMercator=new h(d.c),h.PlateCarree=new h(d.a),Object.freeze&&(Object.freeze(h.GCS_NAD_1927),Object.freeze(h.WGS84),Object.freeze(h.WebMercator))
const f=h},660:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return f}))
var r=n(78),i=n(148),s=n(354),o=n(77),a=n(178),l=n(20),c=n(861),u=n(292),d=n(966),h=n(1055)
async function f(e,t){var a
const h=Object(u.w)(e),y=Object(u.v)(e)
y||h||(e=Object(u.F)(e))
const g={url:e,requestOptions:{...Object(l.t)(t)}}
let O=Object(u.n)(e)
if(O){const e=await async function(e,t){if(null!=e.responseData)return e.responseData
if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let n,r
try{r=await e.before(t)}catch(e){n=_("request:interceptor",e,t)}if((r instanceof Error||r instanceof s.a)&&(n=_("request:interceptor",r,t)),n)throw e.error&&e.error(n),n
return r}}(O,g)
if(null!=e)return{data:e,getHeader:v,requestOptions:g.requestOptions,url:g.url}
O.after||O.error||(O=null)}if(e=g.url,"image"===(t=g.requestOptions).responseType){if(Object(o.a)("host-webworker")||Object(o.a)("host-node"))throw _("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),g)}else if(h)throw _("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),g)
if("head"===t.method){if(t.body)throw _("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),g)
if(h||y)throw _("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),g)}if(await async function(){Object(o.a)("host-webworker")?p||(p=await n.e(428).then(n.bind(null,1231))):f._abortableFetch||(f._abortableFetch=globalThis.fetch.bind(globalThis))}(),p)return p.execute(e,t)
const j=new AbortController
Object(c.q)(t,()=>j.abort())
const w={controller:j,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:O,params:g,redoRequest:!1,useIdentity:b.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},E=await async function(e){var t,n
let s,o
await async function(e){const t=e.params.url,n=e.params.requestOptions,s=e.controller.signal,o=n.body
let a=null,l=null,u=null
if(m&&"HTMLFormElement"in globalThis&&(o instanceof FormData?a=o:o instanceof HTMLFormElement&&(l=o,a=new FormData(l))),"string"==typeof o&&(u=o),e.fetchOptions={cache:n.cacheBust&&!f._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:n.headers||{},method:"head"===n.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:s},(a||u)&&(e.fetchOptions.body=a||u),"anonymous"===n.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||n.query&&n.query.token||a&&a.get&&a.get("token")||l&&l.elements.token),!e.hasToken&&r.default.apiKey&&Object(d.a)(t)&&(n.query||(n.query={}),n.query.token=r.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!S(t)&&!Object(c.n)(s)){let r
"immediate"===n.authMode?(await x(),r=await i.b.getCredential(t,{signal:s}),e.credential=r):"no-prompt"===n.authMode?(await x(),r=await i.b.getCredential(t,{prompt:!1,signal:s}).catch(()=>{}),e.credential=r):i.b&&(r=i.b.findCredential(t)),r&&(e.credentialToken=r.token,e.useSSL=!!r.ssl)}}(e)
try{do{[s,o]=await M(e)}while(!await L(e,s,o))}catch(t){const n=_("request:server",t,e.params,s)
throw n.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(n),n}const a=e.params.url
if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(a)&&!e.hasToken&&!e.credentialToken&&null!=(t=o)&&null!=(n=t.user)&&n.username&&!Object(u.A)(a)){const e=Object(u.o)(a,!0)
e&&b.trustedServers.push(e)}const l=e.credential
if(l&&i.b){const e=i.b.findServerInfo(l.server)
let t=e&&e.owningSystemUrl
if(t){t=t.replace(/\/?$/,"/sharing")
const e=i.b.findCredential(t,l.userId)
e&&-1===i.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:o,getHeader:s?e=>s.headers.get(e):v,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(w)
return null==(a=O)||null==a.after||a.after(E),E}let p
const b=r.default.request,m="FormData"in globalThis,y=[499,498,403,401],g=["COM_0056","COM_0057","SB_0008"],O=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],v=()=>null,j=Symbol()
function w(e){const t=Object(u.o)(e)
return!t||t.endsWith(".arcgis.com")||f._corsServers.includes(t)||Object(u.A)(t)}function _(e,t,n,r){let i="Error"
const o={url:n.url,requestOptions:n.requestOptions,getHeader:v,ssl:!1}
if(t instanceof s.a)return t.details?(t.details=Object(a.a)(t.details),t.details.url=n.url,t.details.requestOptions=n.requestOptions):t.details=o,t
if(t){const e=r&&(e=>r.headers.get(e)),n=r&&r.status,s=t.message
s&&(i=s),e&&(o.getHeader=e),o.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||n||0,o.subCode=t.subcode,o.messageCode=t.messageCode,"string"==typeof t.details?o.messages=[t.details]:o.messages=t.details,o.raw=j in t?t[j]:t}return Object(c.m)(t)?Object(c.e)():new s.a(e,i,o)}async function x(){i.b||await Promise.all([n.e(3),n.e(23),n.e(29),n.e(68),n.e(490)]).then(n.bind(null,669))}function S(e){return O.some(t=>t.test(e))}async function M(e){let t=e.params.url
const n=e.params.requestOptions,r=e.fetchOptions,s=Object(u.v)(t)||Object(u.w)(t),a=n.responseType||"json",l=s?0:null!=n.timeout?n.timeout:b.timeout
let d=!1
if(!s){e.useSSL&&(t=Object(u.L)(t)),n.cacheBust&&"default"===r.cache&&(t=Object(u.d)(t,"request.preventCache",Date.now()))
let s={...n.query}
e.credentialToken&&(s.token=e.credentialToken)
let a=Object(u.G)(s)
Object(o.a)("esri-url-encodes-apostrophe")&&(a=a.replace(/'/g,"%27"))
const l=t.length+1+a.length
let c
d="delete"===n.method||"post"===n.method||"put"===n.method||!!n.body||l>b.maxUrlLength
const h=n.useProxy||!!Object(u.q)(t)
if(h){const e=Object(u.r)(t)
c=e.path,!d&&c.length+1+l>b.maxUrlLength&&(d=!0),e.query&&(s={...e.query,...s})}if("HEAD"===r.method&&(d||h)){if(d){if(l>b.maxUrlLength)throw _("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params)
throw _("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw _("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(d?(r.method="delete"===n.method?"DELETE":"put"===n.method?"PUT":"POST",n.body?t=Object(u.e)(t,s):(r.body=Object(u.G)(s),r.headers["Content-Type"]="application/x-www-form-urlencoded")):t=Object(u.e)(t,s),h&&(e.useProxy=!0,t=`${c}?${t}`),s.token&&m&&r.body instanceof FormData){const e=r.body
e.set?e.set("token",s.token):e.append("token",s.token)}if(n.hasOwnProperty("withCredentials"))e.withCredentials=n.withCredentials
else if(!Object(u.s)(t,Object(u.l)()))if(Object(u.A)(t))e.withCredentials=!0
else if(i.b){const n=i.b.findServerInfo(t)
n&&n.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(r.credentials="include")}let h,p,y=0,g=!1
l>0&&(y=setTimeout(()=>{g=!0,e.controller.abort()},l))
try{if("native-request-init"===n.responseType)p=r,p.url=t
else if("image"!==n.responseType||"default"!==r.cache||"GET"!==r.method||d||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0
return!1}(n.headers)||!s&&!e.useProxy&&b.proxyUrl&&!w(t)){if(h=await f._abortableFetch(t,r),e.useProxy||function(e){const t=Object(u.o)(e)
t&&!f._corsServers.includes(t)&&f._corsServers.push(t)}(t),"native"===n.responseType)p=h
else if("HEAD"!==r.method)if(h.ok){switch(a){case"array-buffer":p=await h.arrayBuffer()
break
case"blob":case"image":p=await h.blob()
break
default:p=await h.text()}if(y&&(clearTimeout(y),y=0),"json"===a||"xml"===a||"document"===a)if(p)switch(a){case"json":p=JSON.parse(p)
break
case"xml":p=E(p,"application/xml")
break
case"document":p=E(p,"text/html")}else p=null
if(p){if("array-buffer"===a||"blob"===a){const e=h.headers.get("Content-Type")
if(/application\/json|text\/plain/i.test(e)&&p["blob"===a?"size":"byteLength"]<=750)try{const e=await new Response(p).json()
e.error&&(p=e)}catch{}}"image"===a&&p instanceof Blob&&(p=await I(URL.createObjectURL(p),e,!0))}}else p=await h.text()}else p=await I(t,e)}catch(r){if("AbortError"===r.name){if(g)throw new Error("Timeout exceeded")
throw Object(c.e)("Request canceled")}if(!(!h&&r instanceof TypeError&&b.proxyUrl)||n.body||"delete"===n.method||"head"===n.method||"post"===n.method||"put"===n.method||e.useProxy||w(t))throw r
e.redoRequest=!0,Object(u.c)({proxyUrl:b.proxyUrl,urlPrefix:Object(u.o)(t)})}finally{y&&clearTimeout(y)}return[h,p]}function E(e,t){let n
try{n=(new DOMParser).parseFromString(e,t)}catch{}if(!n||n.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error")
return n}async function L(e,t,n){if(e.redoRequest)return e.redoRequest=!1,!1
const r=e.params.requestOptions
if(!t||"native"===r.responseType||"native-request-init"===r.responseType)return!0
let s,o,a,l
if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[j]=n,s
null!=n&&n.error&&(s=n.error),s&&(o=Number(s.code),a=s.hasOwnProperty("subcode")?Number(s.subcode):null,l=s.messageCode,l=l&&l.toUpperCase())
const c=r.authMode
if(403===o&&(4===a||s.message&&s.message.toLowerCase().indexOf("ssl")>-1&&-1===s.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===o)&&-1!==y.indexOf(o)&&!S(e.params.url)&&(403!==o||-1===g.indexOf(l)&&(null==a||2===a&&e.credentialToken))){await x()
try{const t=await i.b.getCredential(e.params.url,{error:_("request:server",s,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken})
return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=null,e.credentialToken=null,!1
s=t}}if(s)throw s
return!0}function I(e,t,n=!1){const r=t.controller.signal,i=new Image
return t.withCredentials?i.crossOrigin="use-credentials":i.crossOrigin="anonymous",i.alt="",i.src=e,Object(h.a)(i,e,n,r)}f._abortableFetch=null,f._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},661:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return x}))
var r,i=n(856),s=n(353),o=n(178),a=n(20),l=n(858),c=(n(859),n(857)),u=n(864),d=n(658),h=n(875),f=n(866),p=n(659),b=n(968),m=n(928),y=n(916),g=n(929),O=n(904),v=n(662),j=n(909)
function w(e){return!Array.isArray(e[0])}let _=r=class extends h.a{constructor(...e){super(...e),this.rings=[],this.type="polygon"}static fromExtent(e){const t=e.clone().normalize(),n=e.spatialReference
let i=!1,s=!1
for(const e of t)e.hasZ&&(i=!0),e.hasM&&(s=!0)
const o={rings:t.map((function(e){const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(i&&e.hasZ){const n=e.zmin+.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(n)}if(s&&e.hasM){const n=e.mmin+.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(n)}return t})),spatialReference:n}
return i&&(o.hasZ=!0),s&&(o.hasM=!0),new r(o)}normalizeCtorArgs(e,t){let n,r,i=null,s=null
return e&&!Array.isArray(e)?(i=e.rings?e.rings:null,t||(e.spatialReference?t=e.spatialReference:e.rings||(t=e)),n=e.hasZ,r=e.hasM):i=e,i=i||[],t=t||p.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),s=i[0]&&i[0][0],s&&(void 0===n&&void 0===r?(n=s.length>2,r=s.length>3):void 0===n?n=r?s.length>3:s.length>2:void 0===r&&(r=n?s.length>3:s.length>2)),{rings:i,spatialReference:t,hasZ:n,hasM:r}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const e=Object(b.b)(this)
if(!e||isNaN(e[0])||isNaN(e[1])||this.hasZ&&isNaN(e[2]))return null
const t=new f.a
return t.x=e[0],t.y=e[1],t.spatialReference=this.spatialReference,this.hasZ&&(t.z=e[2]),t}get extent(){const{spatialReference:e}=this,t=Object(g.b)(this)
if(!t)return null
const n=new d.default(t)
return n.spatialReference=e,n}get isSelfIntersecting(){return Object(O.d)(this.rings)}writeRings(e,t){t.rings=Object(o.a)(this.rings)}addRing(e){if(!e)return
const t=this.rings,n=t.length
if(w(e)){const r=[]
for(let t=0,n=e.length;t<n;t++)r[t]=e[t].toArray()
t[n]=r}else t[n]=e.concat()
return this.notifyChange("rings"),this}clone(){const e=new r
return e.spatialReference=this.spatialReference,e.rings=Object(o.a)(this.rings),e.hasZ=this.hasZ,e.hasM=this.hasM,e}equals(e){if(this===e)return!0
if(Object(a.j)(e))return!1
const t=this.spatialReference,n=e.spatialReference
if(Object(a.k)(t)!==Object(a.k)(n))return!1
if(Object(a.k)(t)&&Object(a.k)(n)&&!t.equals(n))return!1
if(this.rings.length!==e.rings.length)return!1
const r=([e,t,n,r],[i,s,o,a])=>e===i&&t===s&&(null==n&&null==o||n===o)&&(null==r&&null==a||r===a)
for(let t=0;t<this.rings.length;t++){const n=this.rings[t],i=e.rings[t]
if(!Object(s.e)(n,i,r))return!1}return!0}contains(e){if(!e)return!1
const t=Object(v.project)(e,this.spatialReference)
return Object(m.g)(this,Object(a.k)(t)?t:e)}isClockwise(e){let t
return t=w(e)?e.map(e=>this.hasZ?this.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]):e,Object(y.g)(t,this.hasM,this.hasZ)}getPoint(e,t){if(!this._validateInputs(e,t))return null
const n=this.rings[e][t],r=this.hasZ,i=this.hasM
return r&&!i?new f.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new f.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new f.a(n[0],n[1],n[2],n[3],this.spatialReference):new f.a(n[0],n[1],this.spatialReference)}insertPoint(e,t,n){return this._validateInputs(e,t,!0)?(Object(j.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e].splice(t,0,n),this.notifyChange("rings"),this):this}removePoint(e,t){if(!this._validateInputs(e,t))return null
const n=new f.a(this.rings[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("rings"),n}removeRing(e){if(!this._validateInputs(e,null))return null
const t=this.rings.splice(e,1)[0],n=this.spatialReference,r=t.map(e=>new f.a(e,n))
return this.notifyChange("rings"),r}setPoint(e,t,n){return this._validateInputs(e,t)?(Object(j.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e][t]=n,this.notifyChange("rings"),this):this}_validateInputs(e,t,n=!1){if(null==e||e<0||e>=this.rings.length)return!1
if(null!=t){const r=this.rings[e]
if(n&&(t<0||t>r.length))return!1
if(!n&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"cache",null),Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"centroid",null),Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"extent",null),Object(i.a)([Object(l.b)({readOnly:!0})],_.prototype,"isSelfIntersecting",null),Object(i.a)([Object(l.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],_.prototype,"rings",void 0),Object(i.a)([Object(u.a)("rings")],_.prototype,"writeRings",null),_=r=Object(i.a)([Object(c.a)("esri.geometry.Polygon")],_),_.prototype.toJSON.isDefaultToJSON=!0
const x=_},662:function(e,t,n){"use strict"
n.r(t),n.d(t,"canProject",(function(){return b})),n.d(t,"geographicToWebMercator",(function(){return O})),n.d(t,"lngLatToXY",(function(){return y})),n.d(t,"project",(function(){return m})),n.d(t,"webMercatorToGeographic",(function(){return v})),n.d(t,"x2lon",(function(){return u})),n.d(t,"xyToLngLat",(function(){return g})),n.d(t,"y2lat",(function(){return d}))
var r=n(178),i=n(20),s=n(659),o=n(902),a=n(872)
function l(e){return 57.29577951308232*e}function c(e){return.017453292519943*e}function u(e){return e/o.a.radius}function d(e){return Math.PI/2-2*Math.atan(Math.exp(-e/o.a.radius))}function h(e){return null!=e.wkid||null!=e.wkt}const f=[0,0]
function p(e,t,n,r,i){const s=e,o=i
if(o.spatialReference=n,"x"in s&&"x"in o)[o.x,o.y]=t(s.x,s.y,f,r)
else if("xmin"in s&&"xmin"in o)[o.xmin,o.ymin]=t(s.xmin,s.ymin,f,r),[o.xmax,o.ymax]=t(s.xmax,s.ymax,f,r)
else if("paths"in s&&"paths"in o||"rings"in s&&"rings"in o){const e="paths"in s?s.paths:s.rings,n=[]
let i
for(let s=0;s<e.length;s++){const o=e[s]
i=[],n.push(i)
for(let e=0;e<o.length;e++)i.push(t(o[e][0],o[e][1],[0,0],r)),o[e].length>2&&i[e].push(o[e][2]),o[e].length>3&&i[e].push(o[e][3])}"paths"in o?o.paths=n:o.rings=n}else if("points"in s&&"points"in o){const e=s.points,n=[]
for(let i=0;i<e.length;i++)n[i]=t(e[i][0],e[i][1],[0,0],r),e[i].length>2&&n[i].push(e[i][2]),e[i].length>3&&n[i].push(e[i][3])
o.points=n}return i}function b(e,t){const n=e&&(h(e)?e:e.spatialReference),r=t&&(h(t)?t:t.spatialReference)
return!(e&&"type"in e&&"mesh"===e.type||t&&"type"in t&&"mesh"===t.type||!n||!r)&&(!!Object(a.d)(r,n)||Object(a.p)(r)&&Object(a.m)(n)||Object(a.p)(n)&&Object(a.m)(r))}function m(e,t){if(Object(i.j)(e))return null
const n=e.spatialReference,o=t&&(h(t)?t:t.spatialReference)
return b(n,o)?Object(a.d)(n,o)?Object(r.a)(e):Object(a.p)(o)?p(e,y,s.default.WebMercator,!1,Object(r.a)(e)):Object(a.m)(o)?p(e,g,s.default.WGS84,!1,Object(r.a)(e)):null:null}function y(e,t,n=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999)
const r=c(t)
return n[0]=c(e)*o.a.radius,n[1]=o.a.halfSemiMajorAxis*Math.log((1+Math.sin(r))/(1-Math.sin(r))),n}function g(e,t,n=[0,0],r=!1){const i=l(e/o.a.radius)
return n[0]=r?i:i-360*Math.floor((i+180)/360),n[1]=l(Math.PI/2-2*Math.atan(Math.exp(-t/o.a.radius))),n}function O(e,t=!1,n=Object(r.a)(e)){return p(e,y,s.default.WebMercator,t,n)}function v(e,t=!1,n=Object(r.a)(e)){return p(e,g,s.default.WGS84,t,n)}},663:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return m}))
var r=n(856),i=n(870),s=n(960),o=n(906),a=n(954),l=n(860),c=n(20),u=n(1049),d=n(858),h=(n(353),n(77),n(859),n(857)),f=n(869)
function p(e){if(!Object(c.k)(e))return null
const t={}
for(const n in e){const r=e[n]
r&&(t[n]=r.toJSON())}return 0!==Object.keys(t).length?t:null}let b=class extends(Object(a.a)(l.a)){constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:Object(u.b)(),configurable:!0})}normalizeCtorArgs(e,t,n,r){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:n,popupTemplate:r}}set aggregateGeometries(e){const t=this._get("aggregateGeometries")
JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){const t=this._get("attributes")
t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry")
t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol")
t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible")
t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate
for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate
if(e&&"defaultPopupTemplate"in t&&Object(c.k)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const n=this.getAttribute(e)
this.attributes[e]=t,this._notifyLayer("attributes",n,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:p(this.aggregateGeometries),geometry:Object(c.k)(this.geometry)?this.geometry.toJSON():null,symbol:Object(c.k)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){Object(c.k)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(e,t,n,r){if(!this.layer||!("graphicChanged"in this.layer))return
const i={graphic:this,property:e,oldValue:t,newValue:n}
"attributes"===e&&(i.attributeName=r),this.layer.graphicChanged(i)}}
Object(r.a)([Object(d.b)({value:null,json:{read:function(e){if(!e)return null
const t={}
for(const n in e){const r=Object(f.a)(e[n])
r&&(t[n]=r)}return 0!==Object.keys(t).length?t:null}}})],b.prototype,"aggregateGeometries",null),Object(r.a)([Object(d.b)({value:null})],b.prototype,"attributes",null),Object(r.a)([Object(d.b)({value:null,types:i.c,json:{read:f.a}})],b.prototype,"geometry",null),Object(r.a)([Object(d.b)({type:Boolean})],b.prototype,"isAggregate",void 0),Object(r.a)([Object(d.b)({clonable:"reference"})],b.prototype,"layer",void 0),Object(r.a)([Object(d.b)({type:s.a})],b.prototype,"popupTemplate",void 0),Object(r.a)([Object(d.b)({clonable:"reference"})],b.prototype,"sourceLayer",void 0),Object(r.a)([Object(d.b)({value:null,types:o.e})],b.prototype,"symbol",null),Object(r.a)([Object(d.b)({type:Boolean,value:!0})],b.prototype,"visible",null),b=Object(r.a)([Object(h.a)("esri.Graphic")],b),(b||(b={})).generateUID=u.b
const m=b},666:function(e,t,n){"use strict"
n.r(t),n.d(t,"getTimeExtentFromLayers",(function(){return u})),n.d(t,"toLocalTimeExtent",(function(){return h})),n.d(t,"toUTCTimeExtent",(function(){return d}))
var r=n(894),i=n(20),s=n(861),o=n(934)
function a(e){return"feature"===(null==e?void 0:e.type)}function l(e){return"map-image"===(null==e?void 0:e.type)}function c(e){return void 0!==e.timeInfo}async function u(e,t){if(0===e.length)return r.a.allTime
const n=e.filter(c)
await Promise.all(n.map(e=>e.load({signal:t})))
const o=[],u=[]
for(const e of n)(a(e)||l(e))&&e.timeInfo.hasLiveData?o.push(e):u.push(e)
const d=e=>Object(i.j)(e)||e.isAllTime,h=u.map(e=>e.timeInfo.fullTimeExtent)
if(h.some(d))return r.a.allTime
const f=o.map(async e=>{const{timeExtent:n}=await e.fetchRecomputedExtents({signal:t})
return n||Object(i.t)(e.timeInfo.fullTimeExtent)}),p=(await Object(s.j)(f)).map(e=>e.value)
return p.some(d)?r.a.allTime:p.concat(h).reduce((e,t)=>e.union(t))}function d(e){if(!e)return e
const{start:t,end:n}=e
return new r.a({start:Object(i.k)(t)?Object(o.b)(t,-t.getTimezoneOffset(),"minutes"):t,end:Object(i.k)(n)?Object(o.b)(n,-n.getTimezoneOffset(),"minutes"):n})}function h(e){if(!e)return e
const{start:t,end:n}=e
return new r.a({start:Object(i.k)(t)?Object(o.b)(t,t.getTimezoneOffset(),"minutes"):t,end:Object(i.k)(n)?Object(o.b)(n,n.getTimezoneOffset(),"minutes"):n})}},684:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return pn}))
var r=n(856),i=n(885),s=n(898),o=n(964),a=(n(353),n(77),n(880)),l=n(858),c=n(857),u=n(994),d=(n(990),n(862)),h=n(878),f=(n(859),n(873)),p=n(148),b=n(660),m=n(906),y=n(863),g=n(177),O=n(20),v=n(861),j=n(876),w=n(292),_=n(913),x=n(1926),S=n(1190),M=n(1613),E=n(881),L=n(1080),I=n(1980),k=n(1313),C=n(1318),A=n(1374),T=n(1691),P=n(1475),R=n(1183),N=n(1085),V=n(922),z=n(1769),D=n(1022)
const $=Object(V.a)("short-date")
function F(e,t,n,r){let i=""
0===t?i="< ":t===n&&(i="> ")
let s=null
return s=r?Object(V.b)(e,$):Object(z.a)(e),i+s}const U=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="]
async function q(e){if(!("visualVariables"in e)||!e.visualVariables)return null
const t=e.visualVariables.find(e=>"color"===e.type)
if(!t)return null
let r=null,i=null
if(t.stops){if(1===t.stops.length)return t.stops[0].color
r=t.stops[0].value,i=t.stops[t.stops.length-1].value}const s=r+(i-r)/2,{getColor:o}=await Promise.resolve().then(n.bind(null,1062))
return o(t,s)}async function B(e,t){const n=e.trailWidth||1,r=t||await q(e)||e.color
return new D.a({cap:"butt",color:r,width:n})}const G=new f.a([64,64,64])
function H(e,t){const n=[],r=e.length-1
return 5===e.length?n.push(0,2,4):n.push(0,r),e.map((e,i)=>n.indexOf(i)>-1?F(e,i,r,t):null)}async function W(e,t,r){let i=!1,s=[],o=[]
if(e.stops){const t=e.stops
s=t.map(e=>e.value),i=t.some(e=>!!e.label),i&&(o=t.map(e=>e.label))}const a=s[0],l=s[s.length-1]
if(null==a&&null==l)return null
const c=i?null:H(s,r)
return(await Promise.all(s.map(async(r,s)=>({value:r,color:"opacity"===e.type?await J(r,e,t):(await Promise.resolve().then(n.bind(null,1062))).getColor(e,r),label:i?o[s]:c[s]})))).reverse()}async function J(e,t,r=G){const i=new f.a(r),s=(await Promise.resolve().then(n.bind(null,1062))).getOpacity(t,e)
return null!=s&&(i.a=s),i}function Z(e,t){const{startIndex:n,endIndex:r,weight:i}=function(e,t){let n=0,r=t.length-1
return t.some((t,i)=>e<t.value?(r=i,!0):(n=i,!1)),{startIndex:n,endIndex:r,weight:(e-t[n].value)/(t[r].value-t[n].value)}}(e,t)
if(n===r)return t[n].color
const s=f.a.blendColors(t[n].color,t[r].color,i)
return new f.a(s)}var Y=n(1098)
n(178)
var Q=n(1317),X=n(1632)
const K={HH:315,HL:45,LL:135,LH:225},ee={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]}
function te(e){if(!e)return
const{type:t}=e
if(t.indexOf("3d")>-1)return Object(X.getSymbolLayerFill)(e.symbolLayers.getItemAt(0))
if("simple-line"===t){const t=Object(Q.e)(e)
return t&&t.color}if("simple-marker"===e.type&&("x"===e.style||"cross"===e.style)){const t=Object(Q.e)(e)
return t&&t.color}return Object(Q.c)(e)}function ne(e,t){const n=t.HH.label,r=t.LL.label,i=t.HL.label,s=t.LH.label
switch(e){case"HH":default:return{top:n,bottom:r,left:i,right:s}
case"HL":return{top:i,bottom:s,left:r,right:n}
case"LL":return{top:r,bottom:n,left:s,right:i}
case"LH":return{top:s,bottom:i,left:n,right:r}}}function re(e){let t=K[e]
return e&&null==t&&(t=K.HH),t||0}var ie=n(1081)
const se=[255,255,255],oe=[200,200,200],ae=[128,128,128]
async function le(e,t,r,i,s,o){var a,l
const c=t.legendOptions,u=c&&c.customValues,d=await async function(e,t){if("flow"===e.type)return B(e,t)
let n=null,r=null
if("simple"===e.type)n=e.symbol
else if("class-breaks"===e.type){const t=e.classBreakInfos
n=t&&t[0]&&t[0].symbol,r=t.length>1}else if("unique-value"===e.type){const t=e.uniqueValueInfos
n=t&&t[0]&&t[0].symbol,r=t.length>1}return!n||function(e){return!!e&&(Object(m.c)(e)?!!e.symbolLayers&&e.symbolLayers.some(e=>e&&"fill"===e.type):-1!==e.type.indexOf("fill"))}(n)?null:(n=n.clone(),(t||r)&&(n.type.indexOf("3d")>-1?ue(n):de(n)),n)}(e,r),h=!!d,f=!!u,p=null!=t.minSize&&null!=t.maxSize,b=t.stops&&t.stops.length>1,y=!!t.target
if(!h||!f&&!(p||b&&!y))return
const g=Object(R.i)(d)
let O=null,v=null,j=null
v=g&&!b?Object(z.d)([t.minDataValue,t.maxDataValue]):u||await async function(e,t,r,i){const s=(await Promise.resolve().then(n.bind(null,1062))).getSizeRangeAtScale(e,r,i),o=s&&he(s)
if(!s&&!o)return
let a=o.map(t=>function(e,t,n){const r=n.minSize,i=n.maxSize,s=t.minDataValue,o=t.maxDataValue
let a=null
return a=e<=r?s:e>=i?o:(e-r)/(i-r)*(o-s)+s,a}(t,e,s))
a=Object(z.d)(a)
for(let n=1;n<a.length-1;n++){const s=await fe(e,t,a[n],a[n-1],r,i)
s&&(a[n]=s[0],o[n]=s[1])}return a}(t,d,i,s)
const w=null==e?void 0:e.authoringInfo,_="univariate-color-size"===(null==w?void 0:w.type),x=_&&"above-and-below"===(null==w?void 0:w.univariateTheme)
if(!v&&b&&(v=t.stops.map(e=>e.value),O=t.stops.some(e=>!!e.label),"flow"===e.type&&(v=Object(z.d)(v)),O&&(j=t.stops.map(e=>e.label))),g&&(null==(a=v)?void 0:a.length)>2&&!x&&(v=[v[0],v[v.length-1]]),!v)return null
_&&5!==(null==(l=v)?void 0:l.length)&&(v=he({minSize:v[0],maxSize:v[v.length-1]}))
const S=g?function(e,t){const n=null==e?void 0:e.authoringInfo,r="univariate-color-size"===(null==n?void 0:n.type)
let i=[12,30]
if(r){const e=t[0],n=t[t.length-1],r=12,s=30
i=t.map(t=>r+(t-e)/(n-e)*(s-r))}return r&&"below"===(null==n?void 0:n.univariateTheme)&&i.reverse(),i}(e,v):null,M=Object(R.h)(d),E=O?null:function(e,t){const n=e.length-1
return e.map((e,r)=>F(e,r,n,t))}(v,o)
return(await Promise.all(v.map(async(n,r)=>{const o=g?S[r]:await pe(t,d,n,i,s)
return{value:n,symbol:be(x&&"class-breaks"===e.type?ce(e,r):d,o),label:O?j[r]:E[r],size:o,outlineSize:M}}))).reverse()}function ce(e,t){const n=e.classBreakInfos,r=n.length,i=r<2||!(t>=2)?n[0].symbol.clone():n[r-1].symbol.clone()
return e.visualVariables.some(e=>"color"===e.type)&&(i.type.indexOf("3d")>-1?ue(i):de(i)),i}function ue(e){"line-3d"===e.type?e.symbolLayers.forEach(e=>{e.material={color:ae}}):e.symbolLayers.forEach(e=>{"icon"!==e.type||e.resource&&e.resource.href?e.material={color:oe}:(e.material={color:se},e.outline={color:ae,size:1.5})})}function de(e){const t=Object(ie.c)()
if("cim"===e.type)Object(C.a)(e,new f.a(oe))
else if(-1!==e.type.indexOf("line"))e.color=ae
else if(e.color=t?ae:se,"simple-marker"===e.type)if(e.outline){var n,r
"#ffffff"===(null==(n=e.outline)||null==(r=n.color)?void 0:r.toHex())&&(e.outline.color=ae)}else e.outline={color:ae,width:1.5}}function he(e){const t=e.minSize,n=(e.maxSize-t)/4,r=[]
for(let e=0;e<5;e++)r.push(t+n*e)
return r}async function fe(e,t,n,r,i,s){const o=await pe(e,t,n,i,s),a=await pe(e,t,r,i,s),l=Object(z.b)(n),c=l.fractional
let u=l.integer,d=null,h=null
n>0&&n<1&&(d=10**c,u=Object(z.b)(n*=d).integer)
for(let r=u-1;r>=0;r--){const l=10**r
let c=Math.floor(n/l)*l,u=Math.ceil(n/l)*l
null!=d&&(c/=d,u/=d)
let f=(c+u)/2;[,f]=Object(z.d)([c,f,u],{indexes:[1]})
const p=await pe(e,t,c,i,s),b=await pe(e,t,u,i,s),m=await pe(e,t,f,i,s),y=Object(z.c)(o,p,a,null),g=Object(z.c)(o,b,a,null),O=Object(z.c)(o,m,a,null)
let v=y.previous<=20,j=g.previous<=20
if(v&&j&&(y.previous<=g.previous?(v=!0,j=!1):(j=!0,v=!1)),v?h=[c,p]:j?h=[u,b]:O.previous<=20&&(h=[f,m]),h)break}return h}async function pe(e,t,r,i,s){const{getSize:o}=await Promise.resolve().then(n.bind(null,1062))
return o(e,r,{scale:i,view:s,shape:"simple-marker"===t.type?t.style:null})}function be(e,t){const n=e.clone()
if(Object(m.c)(n))Object(R.i)(n)||n.symbolLayers.forEach(e=>{"fill"!==e.type&&(e.size=t)})
else if(function(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}(n))n.size=t
else if(function(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}(n)){const e=n.width,r=n.height
n.height=t,n.width=t*(e/r)}else!function(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}(n)?function(e){return"esri.symbols.TextSymbol"===e.declaredClass}(n)&&n.font&&(n.font.size=t):n.width=t
return n}var me=n(1957),ye=n(1105),ge=n(1014)
const Oe=g.a.getLogger("esri.widgets.Legend.support.ActiveLayerInfo"),ve=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,je=new y.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),we={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-34e38,34e38],f64:[-Number.MAX_VALUE,Number.MAX_VALUE]},_e=new ye.a({size:6,outline:{color:[128,128,128,.5],width:.5}}),xe=new ge.a({style:"solid"})
function Se(e){return"flow"===e.type}function Me(e){return"vector-field"===e.type}function Ee(e){return"raster-colormap"===e.type}function Le(e){return"raster-stretch"===e.type}function Ie(e){return"raster-shaded-relief"===e.type}function ke(e){return"esri.renderers.SimpleRenderer"===e.declaredClass}function Ce(e){return"esri.renderers.ClassBreaksRenderer"===e.declaredClass}function Ae(e){return"esri.renderers.UniqueValueRenderer"===e.declaredClass}function Te(e){return"esri.renderers.HeatmapRenderer"===e.declaredClass}function Pe(e){return"esri.renderers.PointCloudClassBreaksRenderer"===e.declaredClass}function Re(e){return"esri.renderers.PointCloudStretchRenderer"===e.declaredClass}function Ne(e){return"esri.renderers.PointCloudUniqueValueRenderer"===e.declaredClass}function Ve(e){return"esri.renderers.DotDensityRenderer"===e.declaredClass}function ze(e){return"esri.layers.BuildingSceneLayer"===e.declaredClass}function De(e){return"esri.layers.MapImageLayer"===e.declaredClass}function $e(e){return"esri.layers.ImageryLayer"===e.declaredClass}function Fe(e){return"esri.layers.ImageryTileLayer"===e.declaredClass}const Ue=new ye.a({style:"path",path:"M10,5 L5,0 0,5 M5,0 L5,15",size:15,outline:{width:1,color:[85,85,85,1]}})
let qe={},Be=class extends d.a{constructor(e){super(e),this._handles=new i.a,this._hasColorRamp=!1,this._hasOpacityRamp=!1,this._hasSizeRamp=!1,this._webStyleSymbolCache=new Map,this._dotDensityUrlCache=new Map,this._scaleDrivenSizeVariable=null,this._hasClusterSizeVariable=!1,this.children=new h.a,this.layerView=null,this.layer=null,this.legendElements=[],this.parent=null,this.hideLayersNotInCurrentView=!1,this.keepCacheOnDestroy=!1,this.respectLayerVisibility=!0,this.sublayerIds=[],this.title=null,this.view=null}initialize(){const e=()=>this.notifyChange("ready")
this._handles.add([Object(s.b)(this,"children","change",t=>{const{added:n,removed:r}=t,i=this._handles
n.forEach(t=>{const n="activeLayerInfo-ready-watcher-"+t.layer.uid
i.add(Object(s.a)(t,"ready",e),n)}),r.forEach(e=>i.remove(e.layer.uid)),e()})]),this.keepCacheOnDestroy||(qe={})}destroy(){this._handles.destroy(),this._handles=null,this._webStyleSymbolCache=null,this._dotDensityUrlCache=null,this._scaleDrivenSizeVariable=null,this.keepCacheOnDestroy||(qe=null)}get effectList(){const e=this.layer
let t=null
return"effect"in e&&e.effect&&(t=new x.a,t.effect=e.effect,t.end(),t.scale=this.scale),t}get opacity(){var e
const t=this.layer.opacity,n=null==(e=this.parent)?void 0:e.opacity,r=this.layer.parent,i=r&&"uid"in r?this._getParentLayerOpacity(r):null
return null!=n?n*t:null!=i?i*t:t}get ready(){return null===this.layer||(this.children.length>0?this._isGroupActive():this.legendElements.length>0)}get scale(){return this.view&&this.view.scale}get isScaleDriven(){const e=this.layer
if(null===e)return!1
if("effect"in e&&e.effect&&Array.isArray(e.effect))return!0
if("featureReduction"in e&&e.featureReduction&&"cluster"===e.featureReduction.type)return!0
if("renderer"in e&&e.renderer){if("dot-density"===e.renderer.type)return!0
const t=e.get("renderer.valueExpression")
if(ve.test(t))return!0
const n=e.get("renderer.visualVariables")
if(n)return n.some(e=>this._isScaleDrivenSizeVariable(e))}return this._isLayerScaleDriven(this.layer)}get version(){return this._get("version")+1}async buildLegendElementsForFeatureCollections(e){if(this.hideLayersNotInCurrentView&&!await this._isLayerInCurrentView())return this.legendElements=[],void this.notifyChange("ready")
const t=Array.from(e,e=>{if(function(e){return"esri.layers.FeatureLayer"===e.declaredClass}(e))return this._getRendererLegendElements(e.renderer,{title:e.title})
if(e.featureSet&&e.featureSet.features.length){const t=e.layerDefinition,n=t&&t.drawingInfo,r=n&&Object(L.a)(n.renderer),i=je.read(t.geometryType)
return r?this._getRendererLegendElements(r,{title:e.name,geometryType:i}):(Oe.warn("drawingInfo not available!"),null)}return null})
try{const e=[]
await Object(v.j)(t).then(t=>{t.forEach(({value:t})=>t&&e.push(...t))}),this.legendElements=e,this.notifyChange("ready")}catch(e){Oe.warn("error while building legend for layer!",e)}}async buildLegendElementsForRenderer(e){try{const t=!this.hideLayersNotInCurrentView||await this._isLayerInCurrentView()
this.legendElements=t?await this._getRendererLegendElements(e):[],this.notifyChange("ready")}catch(e){Oe.warn("error while building legend for layer!",e)}}async buildLegendElementsForTools(){const e=this.layer
if(function(e){return"esri.layers.VoxelLayer"===e.declaredClass}(e))this._constructLegendElementsForVoxellayer()
else if(function(e){return"esri.layers.WMTSLayer"===e.declaredClass}(e))this._constructLegendElementsForWMTSlayer()
else if(function(e){return"esri.layers.WMSLayer"===e.declaredClass}(e))await this._constructLegendElementsForWMSSublayers()
else if(ze(e))await this._constructLegendElementsForBuildingSceneLayer()
else if(De(e)||function(e){return"esri.layers.TileLayer"===e.declaredClass}(e)||ze(e))await this._constructLegendElementsForSublayers()
else{this._handles.remove("imageryLayers-watcher")
let r="default"
if($e(e)){var t,n
const i=e
r=((null==i||null==(t=i.renderingRule)?void 0:t.functionName)||"default")+"_"+(null!=(n=e.bandIds)&&n.length?e.bandIds.join(""):"###")}await this._getLegendLayers(`${e.uid}-${r}`).then(async t=>{this.legendElements=[],this.notifyChange("ready")
const n=t.map(async t=>{if($e(e)||Fe(e)){const t=e.watch(["renderingRule","bandIds"],()=>Object(v.i)(async()=>{qe.default=null,e.renderer?await this.buildLegendElementsForRenderer(e.renderer):await this.buildLegendElementsForTools()})())
this._handles.add(t,"imageryLayers-watcher")}const n=this._generateSymbolTableElementForLegendLayer(t)
n&&n.infos.length&&($e(e)&&(n.title=e.title),this.legendElements.push(n)),this.notifyChange("ready")})
await Object(v.j)(n)}).catch(e=>{Oe.warn("Request to server for legend has failed!",e)})}}async _isLayerInCurrentView(){const e=this.layer,t=this.layerView,n=t&&"createQuery"in t&&"queryFeatureCount"in t
if(!(n||t&&"createQuery"in e&&"queryFeatureCount"in e))return!0
await Object(s.h)(t,"updating")
const r=n?"createQuery"in t&&t.createQuery():"createQuery"in e&&e.createQuery()
return r.geometry=this.view.extent,0!==(n?"queryFeatureCount"in t&&await t.queryFeatureCount(r):"queryFeatureCount"in e&&await e.queryFeatureCount(r))}_getParentLayerOpacity(e){let t=1
const n=e.parent
return n&&"uid"in n&&(t=this._getParentLayerOpacity(n)),e.opacity*t}_isGroupActive(){const e=this.children
return!!e.length&&e.some(e=>e.ready)}_isScaleDrivenSizeVariable(e){if(e&&"size"!==e.type)return!1
const t=e,n=t.minSize,r=t.maxSize
return"object"==typeof n&&n?this._isScaleDrivenSizeVariable(n):"object"==typeof r&&r?this._isScaleDrivenSizeVariable(r):!!t.expression||ve.test(t.valueExpression)}_isLayerScaleDriven(e){if("minScale"in e&&e.minScale>0||"maxScale"in e&&e.maxScale>0)return!0
if("sublayers"in e&&e.sublayers)return e.sublayers.some(e=>this._isLayerScaleDriven(e))
const t=e.parent
if(!1===e.loaded&&t&&De(t)&&"source"in e&&e.source&&"map-layer"===e.source.type)for(const n of t.sourceJSON.layers)if(n.id===e.source.mapLayerId&&(n.minScale>0||n.maxScale>0))return!0
return!1}async _constructLegendElementsForVoxellayer(){this.legendElements=[],this._handles.remove("voxel-style-watcher")
const e=this.layer
this._handles.add(Object(s.e)(e,"style",()=>this._constructLegendElementsForVoxellayer()),"voxel-style-watcher")
const t=Object(O.t)(e.getVariableStyle(null)),n=[]
var r
if(t)if(null!=(r=t.uniqueValues)&&r.length){const e=[]
t.uniqueValues.forEach(t=>{t.enabled&&e.push({label:t.label||""+t.value,value:t.value,symbol:new ge.a({color:t.color,outline:null})})}),e.length&&n.push({type:"symbol-table",title:t.label,infos:e})}else if(t.transferFunction){const{colorStops:e,stretchRange:r}=t.transferFunction,i=e.toArray().reverse(),s=r.map((e,t)=>`${0===t?"<":">"} ${Object(me.b)(e)}`).reverse(),o=i.map(e=>({color:e.color,value:null,label:null}))
o[0].label=s[0],o[o.length-1].label=s[1],n.push({type:"color-ramp",title:t.label,infos:o,preview:Object(P.b)(i.map(e=>e.color))})}const i=e.opacity,o=n.reduce((e,t)=>e.concat(this._getAllInfos(t)),[]).filter(e=>!(null==e||!e.symbol)).map(e=>this._getSymbolPreview(e,i))
await Object(v.j)(o),this.legendElements=n,this.notifyChange("ready")}_constructLegendElementsForWMTSlayer(){this.legendElements=[],this._handles.remove("wmts-activeLayer-watcher")
const e=this.layer.activeLayer
if(this._handles.add(Object(s.e)(this.layer,"activeLayer",()=>this._constructLegendElementsForWMTSlayer()),"wmts-activeLayer-watcher"),e.styleId&&e.styles){let t=null
e.styles.some(n=>e.styleId===n.id&&(t=n.legendUrl,!0)),t&&(this.legendElements=[{type:"symbol-table",title:e.title,infos:[{src:t,opacity:this.opacity}]}])}this.notifyChange("ready")}async _constructLegendElementsForWMSSublayers(){this.legendElements=[],this._handles.remove("wms-sublayers-watcher")
const e=this.layer
let t=null;(e.customParameters||e.customLayerParameters)&&(t={...e.customParameters,...e.customLayerParameters}),this._handles.add(Object(s.e)(this.layer,"sublayers",()=>this._constructLegendElementsForWMSSublayers()),"wms-sublayers-watcher"),this.legendElements=await this._generateLegendElementsForWMSSublayers(e.sublayers,t),this.notifyChange("ready")}async _generateLegendElementsForWMSSublayers(e,t){const n=[]
this._handles.add(e.on("change",()=>this._constructLegendElementsForWMSSublayers()),"wms-sublayers-watcher")
const r=e.toArray()
for(const e of r){const r=e.watch(["title","visible","legendEnabled"],()=>this._constructLegendElementsForWMSSublayers())
if(this._handles.add(r,"wms-sublayers-watcher"),!this.respectLayerVisibility||e.visible&&e.legendEnabled){const r=await this._generateSymbolTableElementForWMSSublayer(e,t)
r&&r.infos.length&&n.unshift(r)}}return n}async _generateSymbolTableElementForWMSSublayer(e,t){if(!e.legendUrl&&e.sublayers){const n=(await this._generateLegendElementsForWMSSublayers(e.sublayers,t)).filter(e=>e)
return{type:"symbol-table",title:e.title,infos:n}}return this._generateSymbolTableElementForLegendUrl(e,t)}async _generateSymbolTableElementForLegendUrl(e,t){var n
let r=e.legendUrl
if(!r)return
const i={type:"symbol-table",title:e.title||e.name||e.id&&e.id+"",infos:[]}
t&&(r=Object(w.e)(r,t))
let s=null
const o=null==(n=e.layer)?void 0:n.opacity
try{s=(await Object(b.default)(r,{responseType:"image"})).data,s&&(s.style.opacity=o)}catch{}return i.infos.push({src:r,preview:s,opacity:o}),i}_getLegendLayers(e,t){const n=qe&&qe[e]
return n?Promise.resolve(n):this._legendRequest(t).then(t=>{const n=t.layers
return qe[e]=n,n})}_legendRequest(e){const t=this.layer
let n={f:"json",dynamicLayers:e}
if($e(t)){const e=t.exportImageServiceParameters.renderingRule
if(e&&(n.renderingRule=JSON.stringify(e.rasterFunctionDefinition||e.toJSON())),t.bandIds&&(n.bandIds=t.bandIds.join()),t.raster||t.viewId||t.customParameters){const{raster:e,viewId:r,customParameters:i}=t
n={raster:e,viewId:r,...n,...i}}}let r=t.url.replace(/(\/)+$/,"")
if("version"in t&&t.version>=10.01){const e=r.indexOf("?")
e>-1?r=r.substring(0,e)+"/legend"+r.substring(e):r+="/legend"}else{const e=r.toLowerCase().indexOf("/rest/"),t=r.substring(0,e)+r.substring(e+5,r.length)
r="https://utility.arcgis.com/sharing/tools/legend?soapUrl="+encodeURI(t)+"&returnbytes=true"}return Object(b.default)(r,{query:n}).then(e=>e.data)}async _constructLegendElementsForBuildingSceneLayer(){this.legendElements=[],this._handles.remove("sublayers-watcher")
const e=this.layer
this._handles.add(Object(s.e)(e,"sublayers",()=>this._constructLegendElementsForBuildingSceneLayer()),"sublayers-watcher")
try{this.legendElements=await this._generateLegendElementsForBuildingSublayers(e.sublayers,this.opacity),this.notifyChange("ready")}catch(e){Oe.warn("Request to server for legend has failed!",e)}}async _generateLegendElementsForBuildingSublayers(e,t){let n=[]
this._handles.add(e.on("change",()=>this._constructLegendElementsForBuildingSceneLayer()),"sublayers-watcher")
const r=e.toArray()
for(const e of r){const r=e.watch(["renderer","opacity","title","visible"],()=>this._constructLegendElementsForBuildingSceneLayer())
if(this._handles.add(r,"sublayers-watcher"),!this.respectLayerVisibility||e.visible){const r=e&&null!=e.opacity?e.opacity:null,i=null!=r?r*t:t
if("building-group"===e.type){const t={type:"symbol-table",title:e.title,infos:[]},r=await this._generateLegendElementsForBuildingSublayers(e.sublayers,i)
t.infos.push(...r),n=[t,...n]}else e.renderer&&(n=[...await this._getRendererLegendElements(e.renderer,{title:e.title,opacity:i,sublayer:e}),...n])}}return n.filter(e=>!!e&&(!("infos"in e)||e.infos.length>0))}async _constructLegendElementsForSublayers(){this.legendElements=[],this._handles.remove("sublayers-watcher")
const e=this.layer
this._handles.add(Object(s.e)(e,"sublayers",()=>this._constructLegendElementsForSublayers),"sublayers-watcher")
try{this.legendElements=await this._generateLegendElementsForSublayers(e.sublayers,this.opacity),this.notifyChange("ready")}catch(e){Oe.warn("Request to server for legend has failed!",e)}}async _generateLegendElementsForSublayers(e,t,n){const r=this.layer
let i=[]
this._handles.add(e.on("change",()=>this._constructLegendElementsForSublayers()),"sublayers-watcher")
let s=e.toArray()
!n&&this.sublayerIds&&this.sublayerIds.length&&(s=this.sublayerIds.map(e=>r.findSublayerById(e)).filter(Boolean))
for(const e of s){const r=e.watch("renderer, opacity, title, visible, legendEnabled",()=>this._constructLegendElementsForSublayers())
if(this._handles.add(r,"sublayers-watcher"),!this.respectLayerVisibility||e.visible&&e.legendEnabled&&this._isSublayerInScale(e)){const r=e&&null!=e.opacity?e.opacity:null,s=null!=r?r*t:t
if(e.renderer&&!e.sublayers&&e.originIdOf("renderer")>_.a.SERVICE)await e.load(),i=[...await this._getRendererLegendElements(e.renderer,{title:e.title,opacity:s,sublayer:e}),...i]
else{const t=await this._generateSymbolTableElementForSublayer(e,s,n)
t&&i.unshift(t)}}}return i.filter(e=>!!e&&(!("infos"in e)||e.infos.length>0))}async _generateSymbolTableElementForSublayer(e,t,n){if(!n){n=new Map
const t=this.layer,r=e.source
let i=null
if(r&&("map-layer"!==r.type||r.mapLayerId!==e.id||r.gdbVersion&&r.gdbVersion!==("gdbVersion"in t&&t.gdbVersion))||e.originIdOf("renderer")>_.a.SERVICE||e.originIdOf("labelingInfo")>_.a.SERVICE||e.originIdOf("labelsVisible")>_.a.SERVICE){const e=new M.a({layer:this.layer})
i=e.hasDynamicLayers?e.dynamicLayers:null,e.destroy()}const s=i||t.uid+"-default";(await this._getLegendLayers(s,i)).forEach(e=>n.set(e.layerId,e))}const r=n.get(e.id)
if((!r||null!=r&&r.subLayerIds&&r.defaultVisibility)&&e.sublayers){const r=await this._generateLegendElementsForSublayers(e.sublayers,t,n)
return{type:"symbol-table",title:e.title,infos:r}}return this._generateSymbolTableElementForLegendLayer(r,e,t)}_generateSymbolTableElementForLegendLayer(e,t,n){var r
if(!e||!e.legend||this.respectLayerVisibility&&!this._isLegendLayerInScale(e,t))return null
const i=null==t?void 0:t.renderer
let s=(null==t?void 0:t.title)||e.layerName
if(i&&(!t||(null==t?void 0:t.originIdOf("renderer"))>_.a.SERVICE)){const e=(null==t?void 0:t.title)||this._getRendererTitle(i,t)
e&&(s&&"string"!=typeof e&&"title"in e&&(e.title=s),s=e)}const o={type:"symbol-table",title:s,legendType:e.legendType?e.legendType:null,infos:[]},a=t?this._sanitizeLegendForSublayer(e.legend.slice(),t):e.legend
return(null==(r=e.legendGroups)?void 0:r.length)>0?e.legendGroups.forEach(t=>{var r
const i={type:"symbol-table",title:t.heading,legendType:e.legendType?e.legendType:null,infos:this._generateSymbolTableElementInfosForLegendLayer(a.filter(e=>e.groupId===t.id),e.layerId,n)};(null==(r=i.infos)?void 0:r.length)>0&&o.infos.push(i)}):o.infos=this._generateSymbolTableElementInfosForLegendLayer(a,e.layerId,n),o.infos.length>0?o:null}_generateSymbolTableElementInfosForLegendLayer(e,t,n){return e.map(e=>{let r=e.url
if(e.imageData&&e.imageData.length>0)r="data:image/png;base64,"+e.imageData
else{if(0===r.indexOf("http"))return null
r=Object(p.a)(`${this.layer.url}/${t}/images/${r}`)}return{label:e.label,src:r,opacity:null==n?this.opacity:n,width:e.width,height:e.height}}).filter(e=>!!e)}_isSublayerInScale(e){const t=e.minScale||0,n=e.maxScale||0
return!(t>0&&t<this.scale||n>this.scale)}_isLegendLayerInScale(e,t){const n=t||this.layer
let r=null,i=null,s=!0
return!n.minScale&&0!==n.minScale||!n.maxScale&&0!==n.maxScale?(0===e.minScale&&n.tileInfo&&(r=n.tileInfo.lods[0].scale),0===e.maxScale&&n.tileInfo&&(i=n.tileInfo.lods[n.tileInfo.lods.length-1].scale)):(r=Math.min(n.minScale,e.minScale)||n.minScale||e.minScale,i=Math.max(n.maxScale,e.maxScale)),(r>0&&r<this.scale||i>this.scale)&&(s=!1),s}_sanitizeLegendForSublayer(e,t){if("version"in this.layer&&this.layer.version<10.1||0===e.length)return e
const n=t.renderer,r=e.some(e=>e.values)
let i=null,s=null
return r&&e.some((e,t)=>(e.values||(i=t,s=e,s.label||(s.label="others")),null!=s)),n?"unique-value"===n.type?s&&(e.splice(i,1),e.push(s)):"class-breaks"===n.type&&(s&&e.splice(i,1),e.reverse(),s&&e.push(s)):s&&(e.splice(i,1),e.push(s)),e}async _getRendererLegendElements(e,t={}){return function(e,t){return ke(e)||Ce(e)||Ae(e)||Te(e)||Ve(e)?"2d"===t.type||Object(I.a)(e):Le(e)||Ee(e)||Ie(e)||Pe(e)||Re(e)||Ne(e)||Me(e)||Se(e)}(e,this.view)?function(e){return Pe(e)||Re(e)||Ne(e)||function(e){return"esri.renderers.PointCloudRGBRenderer"===e.declaredClass}(e)}(e)?this._constructPointCloudRendererLegendElements(e,t):Ve(e)?this._constructDotDensityRendererLegendElements(e):this._constructRendererLegendElements(e,t):(Oe.warn(`Renderer of type '${e.type}' not supported!`),[])}_getPointCloudRendererTitle(e){return e.legendOptions&&e.legendOptions.title||e.field}_constructPointCloudRendererLegendElements(e,t={}){const n=t.title,r=[]
let i=null,s=null
if(Pe(e))i={type:"symbol-table",title:n||this._getPointCloudRendererTitle(e),infos:[]},e.colorClassBreakInfos.forEach(e=>{i.infos.unshift({label:e.label||e.minValue+" - "+e.maxValue,value:[e.minValue,e.maxValue],symbol:this._getAppliedCloneSymbol(_e,e.color)})})
else if(Re(e)){const t=e.stops
let r=null
if(t.length&&(1===t.length&&(r=t[0].color),!r)){const e=t[0].value,n=t[t.length-1].value
null!=e&&null!=n&&(r=Z(e+(n-e)/2,t))}i={type:"symbol-table",title:null,infos:[{label:null,value:null,symbol:this._getAppliedCloneSymbol(_e,r||_e.color)}]}
const o=function(e){let t=!1,n=[],r=[]
n=e.map(e=>e.value),t=e.some(e=>!!e.label),t&&(r=e.map(e=>e.label))
const i=n[0],s=n[n.length-1]
if(null==i&&null==s)return null
const o=t?null:H(n,!1)
return n.map((n,i)=>({value:n,color:Z(n,e),label:t?r[i]:o[i]})).reverse()}(e.stops)
s={type:"color-ramp",title:n||this._getPointCloudRendererTitle(e),infos:o,preview:Object(P.b)(o.map(e=>e.color))}}else Ne(e)&&(i={type:"symbol-table",title:n||this._getPointCloudRendererTitle(e),infos:[]},e.colorUniqueValueInfos.forEach(e=>{i.infos.push({label:e.label||e.values.join(", "),value:e.values.join(", "),symbol:this._getAppliedCloneSymbol(_e,e.color)})}))
i&&i.infos.length&&r.push(i),s&&s.infos.length&&r.push(s)
const o=r.reduce((e,t)=>e.concat(t.infos),[]).filter(e=>!!e.symbol).map(t=>this._getSymbolPreview(t,this.opacity,{symbolConfig:{applyColorModulation:!!e.colorModulation}}))
return Object(v.j)(o).then(()=>r)}_getElementInfoForDotDensity(e,t){const{backgroundColor:n,outline:r,dotSize:i}=e,s=this.effectList,o=null==s?void 0:s.effects.map(e=>e.toJSON()),a=Object(S.a)(o),l=i+"-"+t+"-"+n+"-"+(r&&JSON.stringify(r.toJSON()))+"-"+a,c=this._dotDensityUrlCache,u=c.has(l)?c.get(l):Object(P.c)(e,t)
c.set(l,u)
const d={shape:{type:"image",x:0,y:0,width:u.width,height:u.height,src:u.src},fill:null,stroke:null,offset:[0,0]},h=Object(T.a)([[d]],[u.width,u.height],{effectView:this.effectList})
return{opacity:1,src:u.src,preview:h,width:u.width,height:u.height}}_constructDotDensityRendererLegendElements(e){const t=e.calculateDotValue(this.view.scale),n=e.legendOptions&&e.legendOptions.unit,r={type:"symbol-table",title:{value:t&&Math.round(t),unit:n||""},infos:[]}
return e.attributes.forEach(t=>{const n=this._getElementInfoForDotDensity(e,t.color)
n.label=t.label||t.valueExpressionTitle||t.field,r.infos.push(n)}),Promise.resolve([r])}async _constructRendererLegendElements(e,t={}){const{title:n,sublayer:r}=t,i=r||this.layer
let s=await this._loadRenderer(e)
this._hasColorRamp=!1,this._hasOpacityRamp=!1,this._hasSizeRamp=!1,this._scaleDrivenSizeVariable=null
const o=await this._getVisualVariableLegendElements(s,i)||[],a={type:"symbol-table",title:n||this._getRendererTitle(s,i),infos:[]}
let l=null,c=!1
const u=new Set
if(Se(s)&&!this._hasSizeRamp){const e=await B(s)
a.infos.push({label:null,symbol:e})}else if(function(e){const t="authoringInfo"in e&&(null==e?void 0:e.authoringInfo)
return"univariate-color-size"===(null==t?void 0:t.type)}(s)){let e=n
const t=function(e){const t="authoringInfo"in e&&(null==e?void 0:e.authoringInfo)
return"univariate-color-size"===(null==t?void 0:t.type)&&"above-and-below"===(null==t?void 0:t.univariateTheme)}(s)?"univariate-above-and-below-ramp":"univariate-color-size-ramp",r=o.findIndex(e=>"color-ramp"===e.type),i=-1!==r?o.splice(r,1)[0]:null,a=o.findIndex(e=>"size-ramp"===e.type),l=-1!==a?o.splice(a,1)[0]:null,c=[]
i&&(e=i.title,c.push(i)),l&&(e=l.title,c.push(l)),c.length>0&&o.push({type:t,title:e,infos:c})}else if(Te(s)){const e=function(e){let t=e.colorStops,n=t.length-1
if(t&&t[0]){const e=t[n]
e&&1!==e.ratio&&(t=t.slice(0),t.push(new Y.a({ratio:1,color:e.color})),n++)}return t.map((e,t)=>{let r=""
return 0===t?r="low":t===n&&(r="high"),{color:e.color,label:r,ratio:e.ratio}}).reverse()}(s)
o.push({type:"heatmap-ramp",title:n,infos:e,preview:Object(P.b)(e.map(e=>e.color),{effectList:this.effectList})})}else if(Ae(s)){const e=s&&s.authoringInfo
if(e&&"relationship"===e.type){const{focus:t,numClasses:n,field1:r,field2:l}=e
if(n&&r&&l){const e=[r,l]
let c=re(t)||0
for(const t of e){const{field:e,normalizationField:n,label:r}=t,s=r||{field:this._getFieldAlias(e,i),normField:n&&this._getFieldAlias(n,i)},o=Ue.clone()
o.angle=c,a.infos.push({label:s,symbol:o}),u.add(o),c+=90}const d=function(e){const{focus:t,infos:n,numClasses:r}=e,i=ee[r],s={}
n.forEach(e=>{s[e.value]={label:e.label,fill:te(e.symbol)}})
const o=[]
for(let e=0;e<r;e++){const t=[]
for(let n=0;n<r;n++){const r=s[i[e][n]]
t.push(r.fill)}o.push(t)}return{type:"relationship-ramp",numClasses:r,focus:t,colors:o,labels:ne(t,s),rotation:re(t)}}({focus:t,numClasses:n,infos:s.uniqueValueInfos})
o.unshift(d)}}else{const e=s.field
s.uniqueValueInfos.forEach(t=>{t.symbol&&a.infos.push({label:t.label||this._getDomainName(e,t.value,i)||t.value,value:t.value,symbol:t.symbol})})}s.defaultSymbol&&(a.infos.push({label:s.defaultLabel||"others",symbol:s.defaultSymbol}),c=!0)}else if(Ce(s))l=this._isUnclassedRenderer(s),(!l||!this._hasSizeRamp)&&(s.classBreakInfos.forEach(e=>{e.symbol&&a.infos.unshift({label:e.label||(l?null:e.minValue+" - "+e.maxValue),value:[e.minValue,e.maxValue],symbol:e.symbol})}),l&&(a.title=null),this._updateInfosforClassedSizeRenderer(s,a.infos)),s.defaultSymbol&&!l&&(a.infos.push({label:s.defaultLabel||"others",symbol:s.defaultSymbol}),c=!0)
else if(Le(s))if(Fe(this.layer)||function(e){return"esri.layers.WCSLayer"===e.declaredClass}(this.layer)){const e=this._constructTileImageryStretchRendererElements(s)
!function(e){return"stretch-ramp"===e.type}(e)?a.infos=e:o.push(e)}else{const e=this.layer
let t,n
s.statistics&&s.statistics.length&&(t=null!=s.statistics[0].min?s.statistics[0].min:s.statistics[0][0],n=null!=s.statistics[0].max?s.statistics[0].max:s.statistics[0][1])
let r=[]
const i=Object(O.t)(e.renderingRule?await e.generateRasterInfo(e.renderingRule):e.serviceRasterInfo),l=i.keyProperties.BandProperties,c=we[e.rasterInfo.pixelType.toLowerCase()]
1===i.bandCount||e.bandIds&&1===e.bandIds.length?(t=null!=t?t:i.statistics?i.statistics[e.bandIds[0]].min:c[0],n=null!=n?n:i.statistics?i.statistics[e.bandIds[0]].max:c[1],t||n?o.push(this._getStretchLegendElements(s,{min:t,max:n})):this._getServerSideLegend()):i.bandCount>=3?l&&l.length>=i.bandCount?e.bandIds&&3===e.bandIds.length?(r=e.bandIds.map(e=>l[e].BandName),a.infos=this._createSymbolTableElementMultiBand(r)):"lerc"===e.format?(r=[0,1,2].map(e=>l[e].BandName),a.infos=this._createSymbolTableElementMultiBand(r)):this._getServerSideLegend():"lerc"===e.format?(r=["band1","band2","band3"],a.infos=this._createSymbolTableElementMultiBand(r)):this._getServerSideLegend():this._getServerSideLegend()}else if(Ee(s))s.colormapInfos.forEach(e=>{a.infos.push({label:e.label,value:e.value,symbol:this._getAppliedCloneSymbol(xe,e.color)})})
else if(ke(s)){let e=s.symbol
switch(t.geometryType){case"point":e="pointSymbol"in i&&i.pointSymbol
break
case"polyline":e="lineSymbol"in i&&i.lineSymbol
break
case"polygon":e="polygonSymbol"in i&&i.polygonSymbol}s.symbol&&!this._hasSizeRamp&&a.infos.push({label:s.label,symbol:e})}else if(Me(s)){s.outputUnit&&(this.title="("+s.toJSON().outputUnit+")"),a.title=s.attributeField
const e=s.getClassBreakInfos()
null!=e&&e.length?e.forEach(e=>{a.infos.push({label:e.minValue+" - "+e.maxValue,symbol:e.symbol})}):a.infos.push({label:s.attributeField,symbol:s.getDefaultSymbol()})}else Ie(s)&&o.push(this._getStretchLegendElements(s,{min:0,max:255}))
const d=s.defaultSymbol
!d||c||ke(s)||l&&!this._hasColorRamp&&!this._hasSizeRamp&&!this._hasOpacityRamp||o.push({type:"symbol-table",infos:[{label:s.defaultLabel||"others",symbol:d}]}),a.infos.length&&o.unshift(a)
const h=null==t.opacity?this.opacity:t.opacity,f=this._isTallSymbol("visualVariables"in s&&s.visualVariables),p=$e(this.layer)||Fe(this.layer),b=o.reduce((e,t)=>e.concat(this._getAllInfos(t)),[]).filter(e=>!(null==e||!e.symbol)).map(e=>this._getSymbolPreview(e,h,{isDefault:e.symbol===d,applyScaleDrivenSize:!u.has(e.symbol),symbolConfig:{isTall:f,isSquareFill:p},effectList:u.has(e.symbol)?null:this.effectList}))
return s=null,await Object(v.j)(b),o}_getServerSideLegend(){setTimeout(()=>this.buildLegendElementsForTools(),0)}_getAllInfos(e){const t=null==e?void 0:e.infos
return t?t.reduce((e,t)=>e.concat(this._getAllInfos(t)),[]):[e]}_constructTileImageryStretchRendererElements(e){var t,n
const r=this.layer,i=r.rasterInfo,s=i.bandCount||e.statistics.length
let o,a,l=[]
const c=i.keyProperties&&i.keyProperties.BandProperties,u=null!=e&&null!=(t=e.statistics)&&t.length?e.statistics:null==i?void 0:i.statistics
if(u)o=void 0!==u[0].min?u[0].min:u[0][0],a=u[0].max||u[0][1]
else{const e=we[r.rasterInfo.pixelType.toLowerCase()]
o=e[0],a=e[1]}if(r.hasStandardTime()&&(o=r.getStandardTimeValue(o),a=r.getStandardTimeValue(a)),1===i.bandCount||1===(null==(n=r.bandIds)?void 0:n.length))return this._getStretchLegendElements(e,{min:o,max:a})
function d(e){var t
const n=(null!=r&&null!=(t=r.bandIds)&&t.length?r.bandIds:Array.from(Array(Math.min(i.bandCount,3)).keys())).map(t=>e&&e[t]&&e[t].BandName||"band"+(t+1))
return n.length<3?n.push(n[1]):n.length>3&&n.splice(3),n}return l=c&&c.length>=s?d(c):d(),this._createSymbolTableElementMultiBand(l)}_getStretchLegendElements(e,t){const n=function(e,t){let n=[]
if(e&&"multipart"===e.type)e.colorRamps.reverse().forEach((function(r,i){0===i?n.push({value:t.max,color:new f.a(r.toColor),label:"high"}):n.push({value:null,color:new f.a(r.toColor),label:""}),i===e.colorRamps.length-1?n.push({value:t.min,color:new f.a(r.fromColor),label:"low"}):n.push({value:null,color:new f.a(r.fromColor),label:""})}))
else{let r,i
e&&"algorithmic"===e.type?(r=e.fromColor,i=e.toColor):(r=[0,0,0,1],i=[255,255,255,1]),n=[{value:t.max,color:new f.a(i),label:"high"},{value:t.min,color:new f.a(r),label:"low"}]}return n}(e.colorRamp,t)
return{type:"stretch-ramp",title:"",infos:n,preview:Object(P.b)(n.map(e=>e.color))}}async _getSizeLegendElement(e,t,n,r){return{type:"size-ramp",title:this._hasClusterSizeVariable?this._getClusterTitle(t):e,infos:await le(n,t,await q(n),this.scale,this.view.type,r)}}_createSymbolTableElementMultiBand(e){const t=[],n=["red","green","blue"]
return e.forEach((e,r)=>{t.push({label:{colorName:n[r],bandName:e},src:U[r],opacity:1})}),t}_updateInfosforClassedSizeRenderer(e,t){const n=e.authoringInfo&&"class-breaks-size"===e.authoringInfo.type,r=e.classBreakInfos.some(e=>Object(R.i)(e.symbol))
if(n&&r){const n=30,r=12,i=e.classBreakInfos.length,s=(n-r)/(i>1?i-1:i)
t.forEach((e,t)=>{e.size=n-s*t})}}_isTallSymbol(e){let t=!1,n=!1
if(e)for(let r=0;r<e.length&&(!t||!n);r++){const i=e[r]
"size"===i.type&&("height"===i.axis&&(t=!0),"width-and-depth"===i.axis&&(n=!0))}return t&&n}async _getSymbolPreview(e,t,r){let i=null!=r&&r.isDefault||null!=e.size||!this._hasSizeRamp?e.size:Object(j.i)(A.a.size)
if(this._scaleDrivenSizeVariable&&null!=r&&r.applyScaleDrivenSize){const{getSize:t}=await Promise.resolve().then(n.bind(null,1062))
i=t(this._scaleDrivenSizeVariable,null,{view:this.view.type,scale:this.scale,shape:"simple-marker"===e.symbol.type?e.symbol.style:null})}return Object(P.d)(e.symbol,{size:i,opacity:t,scale:!1,symbolConfig:null==r?void 0:r.symbolConfig,effectView:null==r?void 0:r.effectList}).then(t=>(e.preview=t,e)).catch(()=>(e.preview=null,e))}async _loadRenderer(e){var t,n
const r=[],i=this.layer
e=e.clone(),this._hasClusterSizeVariable=!1
const s="visualVariables"in e&&(null==(t=e.visualVariables)?void 0:t.some(e=>"size"===e.type&&"outline"!==e.target&&!ve.test(e.valueExpression)))
if(e&&"visualVariables"in e&&!s&&"featureReduction"in i&&"cluster"===(null==(n=i.featureReduction)?void 0:n.type)){const t=this.layerView._effectiveRenderer,n=Object(O.t)(function(e,t){if(!e||!("visualVariables"in e)||!e.visualVariables)return null
const n=e.visualVariables.find(e=>"size"===e.type),r=((e,t)=>{const n=e.featuresTilingScheme.getClosestInfoForScale(e.scale).level
return null!=t&&t.levels?t.levels[n]:null})(t,n)
return r?new N.a({field:n.field,minSize:r[2].size,minDataValue:r[2].value,maxSize:r[3].size,maxDataValue:r[3].value}):null}(t,this.view))
if(n){const t=i.featureReduction
if("clusterMinSize"in t&&"clusterMaxSize"in t){const{clusterMinSize:e,clusterMaxSize:r}=t
n.legendOptions=new k.a({showLegend:e!==r})}const r=e.visualVariables||[]
e.visualVariables=r.concat([n]),this._hasClusterSizeVariable=!0}}const o=await q(e)
if(Ce(e)||Ae(e)){const t=(e.classBreakInfos||e.uniqueValueInfos).map(e=>this._fetchSymbol(e.symbol,o).then(t=>{e.symbol=t}).catch(()=>{e.symbol=null}))
Array.prototype.push.apply(r,t)}return r.push(this._fetchSymbol(e.symbol||e.defaultSymbol,e.defaultSymbol?null:o).then(t=>{this._applySymbolToRenderer(e,t,ke(e))}).catch(()=>{this._applySymbolToRenderer(e,null,ke(e))})),Object(v.j)(r).then(()=>e)}_applySymbolToRenderer(e,t,n){n?e.symbol=t:e.defaultSymbol=t}_fetchSymbol(e,t){if(!e)return Promise.reject()
if("web-style"===e.type){const n=e.portal,r=n&&n.url,i=n&&n.user&&n.user.username,s=e.name+"-"+e.styleName+"-"+e.styleUrl+"-"+r+"-"+i,o=this._webStyleSymbolCache
return o.has(s)||("2d"===this.view.type?o.set(s,e.fetchCIMSymbol()):o.set(s,e.fetchSymbol())),o.get(s).then(e=>this._getAppliedCloneSymbol(e,t)).catch(()=>(Oe.warn("Fetching web-style failed!"),Promise.reject()))}return Promise.resolve(this._getAppliedCloneSymbol(e,t))}_getAppliedCloneSymbol(e,t){if(!e||!t)return e
const n=e.clone(),r=t&&t.toRgba()
return n.type.indexOf("3d")>-1?this._applyColorTo3dSymbol(n,r):"cim"===n.type?Object(C.a)(n,t):n.color&&(n.color=new f.a(r||n.color)),n}_applyColorTo3dSymbol(e,t){t&&e.symbolLayers.forEach(e=>{e&&(e.material||(e.material={}),e.material.color=new f.a(t))})}async _getVisualVariableLegendElements(e,t){if(!("visualVariables"in e)||!e.visualVariables||"vector-field"===e.type)return null
const n=e.visualVariables,r=[],i=[],s=[]
for(const e of n)"color"===e.type?r.push(e):"size"===e.type?i.push(e):"opacity"===e.type&&s.push(e)
const o=[...r,...i,...s]
let a,l
if(0===r.length&&Ce(e)&&e.classBreakInfos&&1===e.classBreakInfos.length){const t=e.classBreakInfos[0]
a=t&&t.symbol}if(0===r.length&&ke(e)&&(a=e.symbol),a)if(a.type.indexOf("3d")>-1){const e=a.symbolLayers.getItemAt(0)
"water"===e.type?Object(O.k)(e.color)&&(l=e.color):Object(O.k)(e.material)&&Object(O.k)(e.material.color)&&(l=e.material.color)}else a.url||(l=a.color)
const c=this.effectList
return(await Promise.all(o.map(async n=>{if(!n.legendOptions||!1!==n.legendOptions.showLegend){const r=Se(e)?n.field:this._getRampTitle(n,t)
let i=null
const s="getField"in t&&t.getField&&t.getField(n.field),o=s&&Object(E.p)(s)
if("color"===n.type){const e=await W(n,null,o)
i={type:"color-ramp",title:r,infos:e,preview:Object(P.b)(e.map(e=>e.color),{effectList:c})},this._hasColorRamp||(this._hasColorRamp=!(null==i.infos||!i.infos.length))}else if("size"===n.type&&"outline"!==n.target)ve.test(n.valueExpression)?this._hasClusterSizeVariable||(this._scaleDrivenSizeVariable=n):(i=await this._getSizeLegendElement(r,n,e,o),this._hasSizeRamp||(this._hasSizeRamp=!(null==i.infos||!i.infos.length)))
else if("opacity"===n.type){const e=await W(n,l,o)
i={type:"opacity-ramp",title:r,infos:e,preview:Object(P.b)(e.map(e=>e.color),{effectList:c})},this._hasOpacityRamp||(this._hasOpacityRamp=!(null==i.infos||!i.infos.length))}return i&&i.infos?i:null}}))).filter(e=>!!e)}_getDomainName(e,t,n){if(e&&"function"!=typeof e){const r="getField"in n&&n.getField&&n.getField(e),i=r&&"getFieldDomain"in n&&n.getFieldDomain?n.getFieldDomain(r.name):null
return i&&"coded-value"===i.type?i.getName(t):null}return null}_getClusterTitle(e){const t=this.layer,n=e.field
if("featureReduction"in t&&t.featureReduction&&"cluster"===t.featureReduction.type){const e=t.featureReduction,r="popupTemplate"in e&&e.popupTemplate,i=r&&r.fieldInfos
if(i)for(const e of i)if(e.fieldName===n)return"cluster_count"===n?e.label||{showCount:!0}:e.label}return{showCount:!0}}_getRampTitle(e,t){let n=e.field,r=e.normalizationField,i=!1,s=!1,o=!1,a=null
n="function"==typeof n?null:n,r="function"==typeof r?null:r
const l=e.legendOptions&&e.legendOptions.title
if(null!=l)a=l
else if(e.valueExpressionTitle)a=e.valueExpressionTitle
else{if("renderer"in t&&t.renderer&&"authoringInfo"in t.renderer&&t.renderer.authoringInfo&&t.renderer.authoringInfo.visualVariables){const e=t.renderer.authoringInfo.visualVariables
for(let t=0;t<e.length;t++){const n=e[t]
if("color"===n.type){if("ratio"===n.style){i=!0
break}if("percent"===n.style){s=!0
break}if("percent-of-total"===n.style){o=!0
break}}}}a={field:n&&this._getFieldAlias(n,t),normField:r&&this._getFieldAlias(r,t),ratio:i,ratioPercent:s,ratioPercentTotal:o}}return a}_getRendererTitle(e,t){const n=e
if(n.legendOptions&&n.legendOptions.title)return n.legendOptions.title
if(n.valueExpressionTitle)return n.valueExpressionTitle
let r=n.field,i=null,s=null
Ce(n)&&(i=n.normalizationField,s="percent-of-total"===n.normalizationType),r="function"==typeof r?null:r,i="function"==typeof i?null:i
let o=null
return(r||i)&&(o={field:r&&this._getFieldAlias(r,t),normField:i&&this._getFieldAlias(i,t),normByPct:s}),o}_getFieldAlias(e,t){const n="popupTemplate"in t&&t.popupTemplate,r=n&&n.fieldInfos
let i=null
r&&r.some(t=>e===t.fieldName&&(i=t,!0))
let s=null
"getField"in t&&t.getField?s=t.getField(e):"fieldsIndex"in t&&t.fieldsIndex&&(s=t.fieldsIndex.get(e))
const o=i||s
let a=null
return o&&(a=i&&i.label||s&&s.alias||"name"in o&&o.name||"fieldName"in o&&o.fieldName),a}_isUnclassedRenderer(e){const t=e.visualVariables
let n=!1
return Ce(e)&&e.classBreakInfos&&1===e.classBreakInfos.length&&t&&(n=e.field?t.some(t=>!(!t||e.field!==t.field||(e.normalizationField||t.normalizationField)&&e.normalizationField!==t.normalizationField)):!!t.length),n}}
Object(r.a)([Object(l.b)()],Be.prototype,"children",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],Be.prototype,"effectList",null),Object(r.a)([Object(l.b)()],Be.prototype,"layerView",void 0),Object(r.a)([Object(l.b)()],Be.prototype,"layer",void 0),Object(r.a)([Object(l.b)()],Be.prototype,"legendElements",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],Be.prototype,"opacity",null),Object(r.a)([Object(l.b)()],Be.prototype,"parent",void 0),Object(r.a)([Object(l.b)({readOnly:!0,dependsOn:[]})],Be.prototype,"ready",null),Object(r.a)([Object(l.b)()],Be.prototype,"hideLayersNotInCurrentView",void 0),Object(r.a)([Object(l.b)()],Be.prototype,"keepCacheOnDestroy",void 0),Object(r.a)([Object(l.b)()],Be.prototype,"respectLayerVisibility",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],Be.prototype,"scale",null),Object(r.a)([Object(l.b)()],Be.prototype,"sublayerIds",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],Be.prototype,"isScaleDriven",null),Object(r.a)([Object(l.b)()],Be.prototype,"title",void 0),Object(r.a)([Object(l.b)({readOnly:!0,dependsOn:["ready"],value:0})],Be.prototype,"version",null),Object(r.a)([Object(l.b)()],Be.prototype,"view",void 0),Be=Object(r.a)([Object(c.a)("esri.widgets.Legend.support.ActiveLayerInfo")],Be)
const Ge=Be
var He=n(879)
const We="all-layer-views",Je="legend-properties",Ze=h.a.ofType(Ge),Ye=["esri.layers.BuildingSceneLayer","esri.layers.CSVLayer","esri.layers.FeatureLayer","esri.layers.GeoJSONLayer","esri.layers.GeoRSSLayer","esri.layers.GroupLayer","esri.layers.HeatmapLayer","esri.layers.ImageryLayer","esri.layers.ImageryTileLayer","esri.layers.MapImageLayer","esri.layers.OGCFeatureLayer","esri.layers.PointCloudLayer","esri.layers.StreamLayer","esri.layers.SceneLayer","esri.layers.TileLayer","esri.layers.VoxelLayer","esri.layers.WFSLayer","esri.layers.WMSLayer","esri.layers.WMTSLayer","esri.layers.WCSLayer"],Qe=["view.basemapView.baseLayerViews","view.groundView.layerViews","view.layerViews","view.basemapView.referenceLayerViews"]
let Xe=class extends d.a{constructor(e){super(e),this._handles=new i.a,this._layerViewByLayerId={},this._layerInfosByLayerViewId={},this._activeLayerInfosByLayerViewId={},this._activeLayerInfosWithNoParent=new h.a,this.activeLayerInfos=new Ze,this.basemapLegendVisible=!1,this.groundLegendVisible=!1,this.hideLayersNotInCurrentView=!1,this.keepCacheOnDestroy=!1,this.respectLayerVisibility=!0,this.layerInfos=[],this.view=null}initialize(){this._handles.add(Object(s.a)(this,"view",this._viewHandles),"view"),this._handles.add(Object(He.c)(()=>this._refresh()))}destroy(){this._destroyViewActiveLayerInfos(),this._handles.destroy(),this._handles=null,this.view=null}get state(){return this.get("view.ready")?"ready":"disabled"}_viewHandles(){this._handles.remove("state"),this.view&&this._handles.add(Object(s.a)(this,"state",this._stateHandles),"state")}_stateHandles(){this._resetAll(),"ready"===this.state&&this._watchPropertiesAndAllLayerViews()}_resetAll(){this._handles.remove([We,Je]),this._destroyViewActiveLayerInfos(),this.activeLayerInfos.removeAll()}_destroyViewActiveLayerInfos(){Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo,this)}_destroyViewActiveLayerInfo(e){this._handles.remove(e)
const t=this._activeLayerInfosByLayerViewId[e]
delete this._activeLayerInfosByLayerViewId[e],t&&t.parent&&t.parent.children.remove(t)}_watchPropertiesAndAllLayerViews(){const{allLayerViews:e}=this.view
e.length&&this._refresh(),this._handles.add(e.on("change",this._allLayerViewsChangeHandle.bind(this)),We),this._handles.add(Object(s.e)(this,"layerInfos, basemapLegendVisible, groundLegendVisible",this._propertiesChangeHandle.bind(this)),Je)}_allLayerViewsChangeHandle(e){e.removed.forEach(e=>this._destroyViewActiveLayerInfo(e.uid)),this._refresh()}_propertiesChangeHandle(){this._destroyViewActiveLayerInfos(),this._refresh()}_refresh(){this._layerInfosByLayerViewId={},this.activeLayerInfos.removeAll(),this._generateLayerViews().filter(this._filterLayerViewsByLayerInfos,this).filter(this._isLayerViewSupported,this).forEach(this._generateActiveLayerInfo,this),this._sortActiveLayerInfos(this.activeLayerInfos)}_sortActiveLayerInfos(e){if(e.length<2)return
const t=[]
e.forEach(n=>{if(!n.parent){const r=n.layer.parent,i=r&&"uid"in r&&this._layerViewByLayerId[r.uid],s=i&&this._activeLayerInfosByLayerViewId[i.uid]
s&&-1!==e.indexOf(s)&&(t.push(n),n.parent=s,s.children.add(n),this._sortActiveLayerInfos(s.children))}}),e.removeMany(t)
const n={}
this.view.allLayerViews.forEach((e,t)=>n[e.layer.uid]=t),e.sort((e,t)=>{const r=n[e.layer.uid]||0
return(n[t.layer.uid]||0)-r})}_generateLayerViews(){const e=[]
return Qe.filter(this._filterLayerViews,this).map(this.get,this).filter(e=>null!=e).forEach(this._collectLayerViews("layerViews",e)),e}_filterLayerViews(e){const t=!this.basemapLegendVisible&&("view.basemapView.baseLayerViews"===e||"view.basemapView.referenceLayerViews"===e),n=!this.groundLegendVisible&&"view.groundView.layerViews"===e
return!t&&!n}_collectLayerViews(e,t){const n=r=>(r&&r.forEach(r=>{t.push(r),n(r[e])}),t)
return n}_filterLayerViewsByLayerInfos(e){const t=this.layerInfos
return!t||!t.length||t.some(t=>this._hasLayerInfo(t,e))}_hasLayerInfo(e,t){const n=this._isLayerUIDMatching(e.layer,t.layer.uid)
return n&&(this._layerInfosByLayerViewId[t.uid]=e),n}_isLayerUIDMatching(e,t){return e&&(e.uid===t||this._hasLayerUID(e.layers,t))}_hasLayerUID(e,t){return e&&e.some(e=>this._isLayerUIDMatching(e,t))}_isLayerViewSupported(e){return!!Ye.includes(e.layer.declaredClass)&&(this._layerViewByLayerId[e.layer.uid]=e,!0)}_generateActiveLayerInfo(e){this._isLayerActive(e)?this._buildActiveLayerInfo(e):(this._handles.remove(e.uid),this._handles.add(Object(s.e)(e,"legendEnabled, layer.legendEnabled",()=>this._layerActiveHandle(e)),e.uid))}_layerActiveHandle(e){this._isLayerActive(e)&&(this._handles.remove(e.uid),this._buildActiveLayerInfo(e))}_isLayerActive(e){return!this.respectLayerVisibility||e.legendEnabled&&e.get("layer.legendEnabled")}_buildActiveLayerInfo(e){var t
const n=e.layer,r=e.uid,i=this._layerInfosByLayerViewId[r]
let o=this._activeLayerInfosByLayerViewId[r]
if(!o){const t=i&&void 0!==i.title&&i.layer.uid===n.uid
o=new Ge({layer:n,layerView:e,title:t?i.title:n.title,view:this.view,respectLayerVisibility:this.respectLayerVisibility,hideLayersNotInCurrentView:this.hideLayersNotInCurrentView,keepCacheOnDestroy:this.keepCacheOnDestroy,sublayerIds:i&&i.sublayerIds||[]}),this._activeLayerInfosByLayerViewId[r]=o}const a=n.parent&&"uid"in n.parent&&this._layerViewByLayerId[null==(t=n.parent)?void 0:t.uid]
if(o.parent=this._activeLayerInfosByLayerViewId[null==a?void 0:a.uid],!this._handles.has(r)){const t=[Object(s.e)(n,"title",e=>this._titleHandle(e,o)),Object(s.e)(n,"renderer?, opacity, pointSymbol?, lineSymbol?, polygonSymbol?",()=>this._constructLegendElements(o)),Object(s.l)(this.view,"stationary",()=>this._scaleHandle(o)),Object(s.e)(e,"_effectiveRenderer",()=>this._constructLegendElements(o)),Object(s.e)(n,"effect",()=>this._constructLegendElements(o))]
if(this.respectLayerVisibility){const r=Object(s.e)(e,"legendEnabled",e=>this._legendEnabledHandle(e,o)),i=Object(s.e)(n,"legendEnabled",e=>this._legendEnabledHandle(e,o))
t.push(r,i)}this._handles.add(t,r)}o.isScaleDriven||this._constructLegendElements(o),this._addActiveLayerInfo(o)}_titleHandle(e,t){t.title=e,this._constructLegendElements(t)}_legendEnabledHandle(e,t){e?this._addActiveLayerInfo(t):this._removeActiveLayerInfo(t)}_scaleHandle(e){(e.isScaleDriven||e.hideLayersNotInCurrentView)&&this._constructLegendElements(e)}_addActiveLayerInfo(e){const{layerView:t,layer:n}=e
if(this._isLayerActive(t)&&-1===this.activeLayerInfos.indexOf(e)){const t=e.parent
if(t)-1===t.children.indexOf(e)&&t.children.push(e),this._sortActiveLayerInfos(t.children)
else{var r
const t=null==(r=this.layerInfos)?void 0:r.some(e=>e.layer.uid===n.uid)
n.parent&&"uid"in n.parent&&!t?this._activeLayerInfosWithNoParent.add(e):(this.activeLayerInfos.add(e),this._sortActiveLayerInfos(this.activeLayerInfos))}if(this._activeLayerInfosWithNoParent.length){const e=[]
this._activeLayerInfosWithNoParent.forEach(t=>{const n=t.layer.parent,r=n&&"uid"in n&&this._layerViewByLayerId[null==n?void 0:n.uid],i=this._activeLayerInfosByLayerViewId[null==r?void 0:r.uid]
i&&(e.push(t),t.parent=i)}),e.length&&(this._activeLayerInfosWithNoParent.removeMany(e),e.forEach(e=>this._addActiveLayerInfo(e)))}}}_removeActiveLayerInfo(e){const t=e.parent
t?t.children.remove(e):this.activeLayerInfos.remove(e)}_constructLegendElements(e){const t=e.layer
"featureCollections"in t&&t.featureCollections?e.buildLegendElementsForFeatureCollections(t.featureCollections):"renderer"in t&&t.renderer?e.buildLegendElementsForRenderer(t.renderer):"url"in t&&t.url?e.buildLegendElementsForTools():e.children.forEach(e=>this._constructLegendElements(e))}}
Object(r.a)([Object(l.b)({type:Ze})],Xe.prototype,"activeLayerInfos",void 0),Object(r.a)([Object(l.b)()],Xe.prototype,"basemapLegendVisible",void 0),Object(r.a)([Object(l.b)()],Xe.prototype,"groundLegendVisible",void 0),Object(r.a)([Object(l.b)()],Xe.prototype,"hideLayersNotInCurrentView",void 0),Object(r.a)([Object(l.b)()],Xe.prototype,"keepCacheOnDestroy",void 0),Object(r.a)([Object(l.b)()],Xe.prototype,"respectLayerVisibility",void 0),Object(r.a)([Object(l.b)()],Xe.prototype,"layerInfos",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],Xe.prototype,"state",null),Object(r.a)([Object(l.b)()],Xe.prototype,"view",void 0),Xe=Object(r.a)([Object(c.a)("esri.widgets.Legend.LegendViewModel")],Xe)
const Ke=Xe
var et=n(1631),tt=n(899),nt=n(945)
const rt="esri-relationship-ramp--diamond__middle-column--label",it="esri-relationship-ramp--square__table-row",st="esri-relationship-ramp--square__table-cell",ot="esri-relationship-ramp--square__table-label"
function at(e,t,n,r){const{focus:i,labels:s}=e,o=!!i,a=function(e,t,n,r,i=60){const{focus:s,numClasses:o,colors:a,rotation:l}=e,c=!!s,u=Math.sqrt(i**2+i**2)+(c?0:5),d=[],h=[],f=[],p=(i||75)/o
for(let e=0;e<o;e++){const t=e*p
for(let n=0;n<o;n++){const r=n*p,i=Object(et.b)(a[e][n]),s=Object(et.c)(null),o={type:"rect",x:r,y:t,width:p,height:p}
d.push(Object(et.f)(i)),h.push(Object(et.h)(o,i.fill,s,null)),f.push(Object(et.d)(o))}}let b=null
c||(b="margin: -15px -15px -18px -15px")
const m=lt("left",s,t),y=lt("right",s,t),g=Object(et.a)(f),O=Object(et.e)(g,u,u,0,!1,l,!1),v=Object(et.e)(g,u,u,0,!1,c?-45:null,!1),j={filter:Object(R.e)(r),opacity:null==n?null:""+n}
return Object(nt.a)("div",{styles:j,class:c?"esri-relationship-ramp--diamond__middle-column--ramp":st},Object(nt.a)("svg",{xmlns:"http://www.w3.org/2000/svg",width:u,height:u,style:b},Object(nt.a)("defs",null,Object(nt.a)("marker",{id:t+"_arrowStart",markerWidth:"10",markerHeight:"10",refX:"5",refY:"5",markerUnits:"strokeWidth",orient:"auto"},Object(nt.a)("polyline",{points:"0,0 5,5 0,10",fill:"none",stroke:"#555555","stroke-width":"1"})),Object(nt.a)("marker",{id:t+"_arrowEnd",markerWidth:"10",markerHeight:"10",refX:"0",refY:"5",markerUnits:"strokeWidth",orient:"auto"},Object(nt.a)("polyline",{points:"5,0 0,5 5,10",fill:"none",stroke:"#555555","stroke-width":"1"})),d),Object(nt.a)("g",{transform:O},h),Object(nt.a)("g",{transform:v},Object(nt.a)("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":m.markerStart,"marker-end":m.markerEnd,x1:-10,y1:i-15,x2:-10,y2:15}),Object(nt.a)("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":y.markerStart,"marker-end":y.markerEnd,x1:15,y1:i+10,x2:i-15,y2:i+10}))))}(e,t,n,r),l=Object(tt.e)()
return o?Object(nt.a)("div",{class:"esri-relationship-ramp--diamond__container",styles:{justifyContent:"center"}},Object(nt.a)("div",{class:"esri-relationship-ramp--diamond__left-column"},l?s.right:s.left),Object(nt.a)("div",{class:"esri-relationship-ramp--diamond__middle-column"},Object(nt.a)("div",{class:rt},s.top),a,Object(nt.a)("div",{class:rt},s.bottom)),Object(nt.a)("div",{class:"esri-relationship-ramp--diamond__right-column"},l?s.left:s.right)):Object(nt.a)("div",{class:"esri-relationship-ramp--square__table"},Object(nt.a)("div",{class:it},Object(nt.a)("div",{class:Object(tt.a)(st,ot,"esri-relationship-ramp--square__table-label--right-bottom")},l?s.top:s.left),Object(nt.a)("div",{class:st}),Object(nt.a)("div",{class:Object(tt.a)(st,ot,"esri-relationship-ramp--square__table-label--left-bottom")},l?s.left:s.top)),Object(nt.a)("div",{class:it},Object(nt.a)("div",{class:st}),a,Object(nt.a)("div",{class:st})),Object(nt.a)("div",{class:it},Object(nt.a)("div",{class:Object(tt.a)(st,ot,"esri-relationship-ramp--square__table-label--right-top")},l?s.right:s.bottom),Object(nt.a)("div",{class:st}),Object(nt.a)("div",{class:Object(tt.a)(st,ot,"esri-relationship-ramp--square__table-label--left-top")},l?s.bottom:s.right)))}function lt(e,t,n){const r=n+"_arrowStart",i=n+"_arrowEnd",s="left"===e,o={markerStart:null,markerEnd:null}
switch(t){case"HL":s?o.markerStart=`url(#${i})`:o.markerEnd=`url(#${r})`
break
case"LL":o.markerStart=`url(#${i})`
break
case"LH":s?o.markerEnd=`url(#${r})`:o.markerStart=`url(#${i})`
break
default:o.markerEnd=`url(#${r})`}return o}n(1222)
var ct=n(1223)
const ut=Object(ct.a)(),dt="esri-univariate-above-and-below-ramp__symbol"
function ht(e="vertical"){const t="stroke:rgb(200, 200, 200);stroke-width:1"
return"vertical"===e?Object(nt.a)("svg",{height:"4",width:"10"},Object(nt.a)("line",{x1:"0",y1:"2",x2:"10",y2:"2",style:t})):Object(nt.a)("svg",{height:"10",width:"10"},Object(nt.a)("line",{x1:"5",y1:"0",x2:"5",y2:"10",style:t}))}function ft(e,t="vertical"){const n=document.createElement("div")
return n.style.height="20px",n.className=dt,null!=e&&(n.style.opacity=e.toString()),ut.append(n,ht.bind(null,t)),n}function pt(e,t,n="vertical",r){e.infos.forEach((e,i)=>{if(r&&2===i)e.preview=ft(t,n)
else{const t=Object(j.h)(e.size)+("horizontal"===n?20:10),r="div"===e.preview.tagName.toLowerCase(),i=r?e.preview:document.createElement("div")
i.className=dt,"horizontal"===n?i.style.width=t+"px":i.style.height=t+"px",r||i.appendChild(e.preview),e.preview=i}})}function bt(e,t="classic"){const n=e.infos
return"classic"===t?(Object(j.h)(n[0].size)+10)/2:(Object(j.h)(n[0].size)-Object(j.h)(n[n.length-1].size))/2}function mt(e,t){if(!e)return null
const n=e.infos.map(e=>e.color),r=Object(P.b)("full"===t.type?n:"above"===t.type?n.slice(0,3):n.slice(2,5),{width:t.width,height:t.height,align:t.rampAlignment,effectList:t.effectList})
return r.className="esri-legend__color-ramp",null!=t.opacity&&(r.style.opacity=t.opacity.toString()),r}function yt(e,t,n,r="vertical"){let i=0
const s=e.infos,o=Math.floor(s.length/2),a="full"===t||"above"===t?0:o,l="full"===t||"below"===t?s.length-1:o
for(let e=a;e<=l;e++)i+=n&&e===o?"horizontal"===r?10:20:Object(j.h)(s[e].size)+("horizontal"===r?20:10)
return Math.round(i)}function gt(e,t,n,r="vertical"){const i=yt(e,t,n,r),s=e.infos,o=Math.floor(s.length/2),a="full"===t||"above"===t?0:o,l="full"===t||"below"===t?s.length-1:o,c="full"===t?s[a].size+s[l].size:"above"===t?s[a].size:s[l].size,u=n?"vertical"===r?20:10:0,d="vertical"===r?10*("full"===t?2:1):20*("full"===t?2:1)
return Math.round(i-(Object(j.h)(c)/2+u/2+d/2))}function Ot(e,t,n="vertical"){const r=e.infos
let i=r.find(({type:e})=>"size-ramp"===e),s=r.find(({type:e})=>"color-ramp"===e)
var o,a
return i&&(i={...i},i.infos=[...i.infos],pt(i,t,n,!0)),s&&(s={...s},s.infos=[...s.infos]),"horizontal"===n&&(null==(o=i)||o.infos.reverse(),null==(a=s)||a.infos.reverse()),{sizeRampElement:i,colorRampElement:s}}function vt(e,t="vertical"){const n=e.infos
let r=n.find(({type:e})=>"size-ramp"===e),i=n.find(({type:e})=>"color-ramp"===e)
var s,o
return r&&(r={...r},r.infos=[...r.infos],pt(r,null,t,!1)),i&&(i={...i},i.infos=[...i.infos]),"horizontal"===t&&(null==(s=r)||s.infos.reverse(),null==(o=i)||o.infos.reverse()),{sizeRampElement:r,colorRampElement:i}}var jt=n(981)
function wt(e){e.appendChild(this)}function _t(e,t,n){if(!t)return
if("string"==typeof t||"number"==typeof t)return t
if("value"in t||"unit"in t)return Object(jt.a)(e.dotValue,t)
if("colorName"in t||"bandName"in t)return e[t.colorName]+": "+(e[t.bandName]||t.bandName)
if("showCount"in t)return t.showCount?e.clusterCountTitle:null
let r=null
return n?r=t.ratioPercentTotal?"showRatioPercentTotal":t.ratioPercent?"showRatioPercent":t.ratio?"showRatio":t.normField?"showNormField":t.field?"showField":null:xt(t,n)&&(r=t.normField?"showNormField":t.normByPct?"showNormPct":t.field?"showField":null),r?Object(jt.a)("showField"===r?"{field}":e[r],{field:t.field,normField:t.normField}):null}function xt(e,t){return!t}function St(e,t){return!!(t&&"Stretched"===t&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}var Mt=n(1319),Et=n(1129),Lt=n(1030)
const It="esri-legend--card__image-label",kt="esri-legend--card__layer-caption",Ct="esri-legend--card__layer-row",At="esri-legend--card__ramp-label",Tt="esri-legend--card__service",Pt="esri-legend--card__symbol",Rt="esri-legend--card__symbol-row",Nt="esri-legend--card__service-caption-container",Vt="esri-legend--card__symbol-container",zt="esri-legend--card__size-ramp-container",Dt="esri-legend__size-ramp--horizontal",$t="esri-legend__ramp-labels",Ft="esri-legend__layer-cell esri-legend__layer-cell--info",Ut="esri-univariate-above-and-below-ramp__color--card"
var qt,Bt;(Bt=qt||(qt={})).Auto="auto",Bt.Stack="stack",Bt.SideBySide="side-by-side"
const Gt=window.devicePixelRatio
let Ht=class extends u.a{constructor(e,t){super(e,t),this._handles=new i.a,this._hasIndicators=!1,this._selectedSectionName=null,this._sectionNames=[],this._sectionMap=new Map,this.activeLayerInfos=null,this.headingLevel=3,this.layout=qt.Stack,this.messages=null,this.messagesCommon=null,this.type="card",this.view=null}initialize(){this.own([this.watch("activeLayerInfos",e=>{this._handles.removeAll(),this._watchForSectionChanges(e)})])}destroy(){this._handles.destroy(),this._handles=null}render(){this._hasIndicators=this.layout===qt.Auto&&this.view.container.clientWidth<=768||this.layout===qt.Stack
const e=this.activeLayerInfos,t=e&&e.toArray().map(e=>this._renderLegendForLayer(e)).filter(e=>!!e)
this._hasIndicators?this._selectedSectionName&&-1!==this._sectionNames.indexOf(this._selectedSectionName)||(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):this._selectedSectionName=null
const n=this._sectionNames.length,r=this._sectionNames.map((e,t)=>{const r=Object(jt.a)(this.messagesCommon.pagination.pageText,{index:t+1,total:n})
return Object(nt.a)("div",{key:e,role:"tab",id:e,"aria-label":r,"aria-controls":e+"-panel","aria-selected":(this._selectedSectionName===e).toString(),tabIndex:this._selectedSectionName===e?0:-1,title:r,onclick:this._selectSection,onkeydown:this._focusSection,bind:this,class:this.classes("esri-legend--card__carousel-indicator",{"esri-legend--card__carousel-indicator--activated":this._selectedSectionName===e}),"data-section-name":e})}),i=this._hasIndicators&&n>1?Object(nt.a)("div",{class:"esri-legend--card__carousel-indicator-container",key:"carousel-navigation",role:"tablist"},r):null,s=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):t&&t.length?t:null,o={"esri-legend--stacked":this._hasIndicators}
return Object(nt.a)("div",{class:this.classes("esri-legend--card",o)},s||Object(nt.a)("div",{class:"esri-legend--card__message"},this.messages.noLegend),i)}_selectSection(e){const t=e.target.getAttribute("data-section-name")
t&&(this._selectedSectionName=t)}_focusSection(e){switch(e.key){case"ArrowLeft":case"ArrowRight":this._switchSectionOnArrowPress(e)
break
case"Enter":case" ":this._selectSection(e)}}_switchSectionOnArrowPress(e){const t=e.key,n="ArrowLeft"===t?-1:1,r=e.target.getAttribute("data-section-name"),i=this._sectionNames.indexOf(r),s=this._sectionNames
let o=null;-1!==i&&(s[i+n]?o=document.getElementById(s[i+n]):"ArrowLeft"===t?o=document.getElementById(s[s.length-1]):"ArrowRight"===t&&(o=document.getElementById(s[0])),o&&o.focus())}_watchForSectionChanges(e){if(this._generateSectionNames(),e){e.forEach(e=>{const t=`activeLayerInfo-${e.layer.uid}-version-change`
this._handles.remove(t),this._watchForSectionChanges(e.children),this._handles.add(e.watch("version",()=>this._generateSectionNames()),t)})
const t="activeLayerInfos-collection-change"
this._handles.remove(t),this._handles.add(e.on("change",()=>this._watchForSectionChanges(e)),t)}}_generateSectionNames(){this._sectionNames.length=0,this._selectedSectionName=null,this.activeLayerInfos&&this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo,this)}_getSectionName(e,t,n){return`${this.id}${e.uid}-type-${t.type}-${n}`}_generateSectionNamesForActiveLayerInfo(e){e.children.forEach(this._generateSectionNamesForActiveLayerInfo,this),e.legendElements&&e.legendElements.forEach((t,n)=>{this._sectionNames.push(this._getSectionName(e.layer,t,n))})}_renderLegendForLayer(e){if(!e.ready)return null
if(e.children.length){const t=e.children.map(e=>this._renderLegendForLayer(e)).toArray()
return Object(nt.a)("div",{key:e.layer.uid,class:this.classes(Tt,"esri-legend--card__group-layer")},Object(nt.a)("div",{class:Nt},e.title),t)}{const t=e.legendElements
if(t&&!t.length)return null
const n=t.some(e=>"relationship-ramp"===e.type),r=t.map((t,r)=>this._renderLegendForElement(t,e,r,n)).filter(e=>!!e)
if(!r.length)return null
const i={"esri-legend--card__group-layer-child":!!e.parent}
return Object(nt.a)("div",{key:e.layer.uid,class:this.classes(Tt,i)},Object(nt.a)("div",{class:Nt},Object(nt.a)("div",{class:"esri-legend--card__service-caption-text"},e.title)),Object(nt.a)("div",{class:"esri-legend--card__service-content"},r))}}_renderLegendForElement(e,t,n,r=!1){const i="color-ramp"===e.type,s="opacity-ramp"===e.type,o="size-ramp"===e.type,a=t.layer
let l=null
if("string"==typeof e.title)l=e.title
else if(e.title){const t=e.title,n=_t(this.messages,t,i||s)
l=t.title?`${t.title} (${n})`:n}const c=this._getSectionName(a,e,n),u=this._hasIndicators?Object(nt.a)("div",null,Object(nt.a)(Mt.a,{level:this.headingLevel,class:"esri-legend--card__carousel-title"},t.title),Object(nt.a)(Mt.a,{level:Object(Mt.b)(this.headingLevel),class:kt},l)):l?Object(nt.a)(Mt.a,{level:this.headingLevel,class:kt},l):null,d=t.effectList
let h=null
if("symbol-table"===e.type){const n=e.infos.map((n,r)=>this._renderLegendForElementInfo(n,t,e.legendType,r)).filter(e=>!!e)
if(n.length){const e=n[0].properties.classes&&n[0].properties.classes[Rt],t={"esri-legend--card__label-container":!e&&!r,"esri-legend--card__relationship-label-container":r}
h=Object(nt.a)("div",{class:this.classes(t)},n)}}else"color-ramp"===e.type||"opacity-ramp"===e.type||"heatmap-ramp"===e.type?h=this._renderLegendForRamp(e,a.opacity,d):o?h=this._renderSizeRamp(e,a.opacity):"relationship-ramp"===e.type?h=at(e,this.id,a.opacity,d):"univariate-above-and-below-ramp"===e.type?h=this._renderUnivariateAboveAndBelowRamp(e,a.opacity,d):"univariate-color-size-ramp"===e.type&&(h=this._renderUnivariateColorSizeRamp(e,a.opacity,d))
if(!h)return null
const f=Object(nt.a)("div",{key:c,class:"esri-legend--card__section",id:c+"-panel",role:"tabpanel","aria-labelledby":c,tabIndex:0},[u,h])
return this._sectionMap.set(c,f),f}_renderUnivariateAboveAndBelowRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=Ot(e,t,"horizontal")
if(!r)return null
const s=yt(r,"full",!0,"horizontal"),o=gt(r,"above",!0,"horizontal"),a=gt(r,"below",!0,"horizontal"),l=mt(i,{width:o,height:12,rampAlignment:"horizontal",opacity:t,type:"above",effectList:n}),c=mt(i,{width:a,height:12,rampAlignment:"horizontal",opacity:t,type:"below",effectList:n}),u=bt(r,"card"),d=r.infos.map(e=>e.label),h=d.length-1,f=d.map((e,t)=>0===t||t===h?Object(nt.a)("div",{key:t},e):null),p={marginTop:"3px",display:"flex"}
Object(tt.e)(this.container)?p.marginRight=u+"px":p.marginLeft=u+"px"
const b={width:s+"px",display:"flex",flexDirection:"row",justifyContent:"space-between"}
return Object(nt.a)("div",{class:Ct,key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},Object(nt.a)("div",{class:this.classes(Vt,Dt),styles:{display:"flex",flexDirection:"row"}},r.infos.map((e,t)=>Object(nt.a)("div",{key:t,class:Pt,bind:e.preview,afterCreate:wt}))),l?Object(nt.a)("div",{class:Ut,styles:p,key:"color-ramp-preview"},Object(nt.a)("div",{bind:l,afterCreate:wt}),Object(nt.a)("div",{bind:c,afterCreate:wt})):null,Object(nt.a)("div",{class:Ft},Object(nt.a)("div",{class:$t,styles:b},f)))}_renderUnivariateColorSizeRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=vt(e,"horizontal")
if(!r)return null
const s=yt(r,"full",!1,"horizontal"),o=mt(i,{width:gt(r,"full",!1,"horizontal"),height:12,rampAlignment:"horizontal",opacity:t,type:"full",effectList:n}),a=bt(r,"card"),l=r.infos.length-1,c=r.infos.map((e,t)=>0===t||t===l?Object(nt.a)("div",{key:t},e.label):null),u={marginTop:"3px",display:"flex"}
Object(tt.e)(this.container)?u.marginRight=a+"px":u.marginLeft=a+"px"
const d={width:s+"px",display:"flex",flexDirection:"row",justifyContent:"space-between"}
return Object(nt.a)("div",{class:Ct,key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},Object(nt.a)("div",{class:this.classes(Vt,Dt),styles:{display:"flex",flexDirection:"row"}},r.infos.map((e,t)=>Object(nt.a)("div",{key:t,class:Pt,bind:e.preview,afterCreate:wt}))),Object(nt.a)("div",{class:Ut,styles:u,key:"color-ramp-preview"},Object(nt.a)("div",{bind:o,afterCreate:wt})),Object(nt.a)("div",{class:Ft},Object(nt.a)("div",{class:$t,styles:d},c)))}_renderLegendForElementInfo(e,t,n,r){const i=t.layer
if(e.type)return this._renderLegendForElement(e,t,r)
const s=St(i,n)
if(e.preview){var o,a
if(!e.symbol||-1===e.symbol.type.indexOf("simple-fill")){if(!e.label)return Object(nt.a)("div",{key:r,bind:e.preview,afterCreate:wt})
const t={"esri-legend--card__symbol-cell":this._hasIndicators}
return Object(nt.a)("div",{key:r,class:this.classes(Ct,{[Rt]:this._hasIndicators})},Object(nt.a)("div",{class:this.classes(t),bind:e.preview,afterCreate:wt}),Object(nt.a)("div",{class:this.classes(It,{"esri-legend--card__label-cell":this._hasIndicators})},_t(this.messages,e.label,!1)||""))}let n=255,s=255,l=255,c=0,u=255,d=255,h=255,f=0
const p=e.symbol.color&&e.symbol.color.a,b=e.symbol.outline&&e.symbol.outline.color&&e.symbol.outline.color.a
p&&(n=e.symbol.color.r,s=e.symbol.color.g,l=e.symbol.color.b,c=e.symbol.color.a*i.opacity),b&&(u=e.symbol.outline.color.r,d=e.symbol.outline.color.g,h=e.symbol.outline.color.b,f=e.symbol.outline.color.a*i.opacity)
const m=null==(o=null==(a=e.symbol.color)?void 0:a.isBright)||o,y=m?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)",g={background:p?`rgba(${n}, ${s}, ${l}, ${c})`:"none",color:m?"black":"white",textShadow:`-1px -1px 0 ${y},\n                                              1px -1px 0 ${y},\n                                              -1px 1px 0 ${y},\n                                              1px 1px 0 ${y}`,border:b?`1px solid rgba(${u}, ${d}, ${h}, ${f})`:"none",filter:Object(R.e)(t.effectList)}
return Object(nt.a)("div",{key:r,class:Ct},Object(nt.a)("div",{class:"esri-legend--card__label-element",styles:g}," ",e.label," "))}if(e.src){const t=this._renderImage(e,i,s)
return Object(nt.a)("div",{key:r,class:Ct},t,Object(nt.a)("div",{class:It},e.label||""))}}_renderImage(e,t,n){const{label:r,src:i,opacity:s}=e,o={"esri-legend--card__imagery-layer-image--stretched":n,[Pt]:!n},a={opacity:""+(null!=s?s:t.opacity)}
return Object(nt.a)("img",{alt:_t(this.messages,r,!1),src:i,border:0,width:e.width,height:e.height,class:this.classes(o),styles:a})}_renderSizeRampLines(e){const t=e.infos,n=t[0],r=t[t.length-1],i=n.symbol,s=this._hasIndicators,o=Object(j.h)(n.size+n.outlineSize)*Gt,a=Object(j.h)(r.size+r.outlineSize)*Gt,l=s?o:o+50*Gt,c=s?o/2+50*Gt:o,u=function(e){if(e){if(e.type.indexOf("3d")>-1){const t=e.symbolLayers&&e.symbolLayers.length
if(!t)return
const n=e.symbolLayers.getItemAt(t-1).get("resource.primitive")
return"triangle"===n||"cone"===n||"tetrahedron"===n}return"triangle"===e.style}}(i),d=function(e){if(e){if(e.type.indexOf("3d")>-1){const t=e.symbolLayers&&e.symbolLayers.length
if(!t)return
const n=e.symbolLayers.getItemAt(t-1),r=n.resource&&n.resource.primitive
return"circle"===r||"cross"===r||"kite"===r||"sphere"===r||"cube"===r||"diamond"===r}{const t=e.style
return"circle"===t||"diamond"===t||"cross"===t}}}(i),h=document.createElement("canvas")
h.width=l,h.height=c,h.style.width=h.width/Gt+"px",h.style.height=h.height/Gt+"px"
const f=h.getContext("2d")
if(s){f.beginPath()
const e=0,t=0,n=l/2-a/2,r=c
f.moveTo(e,t),f.lineTo(n,r)
const i=l,s=0,o=l/2+a/2,u=c
f.moveTo(i,s),f.lineTo(o,u)}else{f.beginPath()
const e=0,t=c/2-a/2,n=l,r=0
f.moveTo(e,t),f.lineTo(n,r)
const i=0,s=c/2+a/2,o=l,u=c
f.moveTo(i,s),f.lineTo(o,u)}return f.strokeStyle="#ddd",f.stroke(),Object(nt.a)("div",{bind:h,afterCreate:wt,styles:s?{display:"flex",marginTop:`-${u?0:d?o/2:0}px`,marginBottom:`-${u?a:d?a/2:0}px`}:{display:"flex",marginRight:`-${u?0:d?o/2:0}px`,marginLeft:`-${u?0:d?a/2:0}px`}})}_renderSizeRamp(e,t){const n=e.infos,r=n[0].label,i=n[n.length-1].label
let s=n[0].preview,o=n[n.length-1].preview
const a=this._hasIndicators,l={"flex-direction":a?"column":"row-reverse"}
s&&(s=s.cloneNode(!0),s.style.display="flex"),o&&(o=o.cloneNode(!0),o.style.display="flex")
const c={opacity:null!=t?""+t:""}
return Object(nt.a)("div",{class:this.classes(Ct,{"esri-legend--card__size-ramp-row":a})},Object(nt.a)("div",{class:At},a?r:i),Object(nt.a)("div",{class:zt,styles:l},Object(nt.a)("div",{bind:s,afterCreate:wt,class:"esri-legend--card__size-ramp-preview",styles:c}),this._renderSizeRampLines(e),Object(nt.a)("div",{bind:o,afterCreate:wt,class:zt,styles:c})),Object(nt.a)("div",{class:At},a?i:r))}_renderLegendForRamp(e,t,n){const r=e.infos,i="heatmap-ramp"===e.type,s=r.length-1,o=s>2&&!i?25*s:100,a=o+20,l=r.slice(0).reverse()
l.forEach((e,t)=>{e.offset=i?e.ratio:t/s})
const c=l.length-1,u=l.length%2!=0&&l[l.length/2|0],d=u&&Object(nt.a)("div",{class:"esri-legend--card__interval-separators-container"},Object(nt.a)("div",{class:"esri-legend--card__interval-separator"},"|"),Object(nt.a)("div",{class:At},u.label)),h=r[r.length-1].label,f=r[0].label,p=[[{shape:{type:"path",path:"M0 12.5 L10 0 L10 25 Z"},fill:l[0].color,stroke:{width:0}},{shape:{type:"rect",x:10,y:0,width:o,height:25},fill:{type:"linear",x1:10,y1:0,x2:o+10,y2:0,colors:l},stroke:{width:0}},{shape:{type:"path",path:`M${o+10} 0 L${a} 12.5 L${o+10} 25 Z`},fill:l[c].color,stroke:{width:0}}]],b=Object(et.g)(p,a,25),{messages:m}=this,y={filter:Object(R.e)(n),opacity:null==t?null:""+t}
return Object(nt.a)("div",{class:Ct,styles:{justifyContent:"center"}},Object(nt.a)("div",{class:At},i?m[h]:h),Object(nt.a)("div",{class:Vt},Object(nt.a)("div",{styles:y},b),d),Object(nt.a)("div",{class:At},i?m[f]:f))}}
Object(r.a)([Object(l.b)()],Ht.prototype,"activeLayerInfos",void 0),Object(r.a)([Object(l.b)()],Ht.prototype,"headingLevel",void 0),Object(r.a)([Object(l.b)()],Ht.prototype,"layout",void 0),Object(r.a)([Object(l.b)(),Object(Lt.a)("esri/widgets/Legend/t9n/Legend")],Ht.prototype,"messages",void 0),Object(r.a)([Object(l.b)(),Object(Lt.a)("esri/t9n/common")],Ht.prototype,"messagesCommon",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],Ht.prototype,"type",void 0),Object(r.a)([Object(l.b)()],Ht.prototype,"view",void 0),Object(r.a)([Object(Et.a)()],Ht.prototype,"_selectSection",null),Ht=Object(r.a)([Object(c.a)("esri.widgets.Legend.styles.Card")],Ht)
const Wt=Ht
var Jt=n(921)
const Zt="esri-legend__service",Yt="esri-legend__layer-body",Qt="esri-legend__layer-row",Xt="esri-legend__layer-cell esri-legend__layer-cell--info",Kt="esri-legend__imagery-layer-info--stretched",en="esri-legend__layer-cell esri-legend__layer-cell--symbols",tn="esri-legend__symbol",nn="esri-legend__ramps",rn="esri-legend__size-ramp",sn="esri-legend__ramp-labels",on="esri-legend__ramp-label",an="esri-univariate-above-and-below-ramp__label",ln={display:"flex",alignItems:"flex-start"},cn={marginLeft:"3px"},un={display:"table-cell",verticalAlign:"middle"}
let dn=class extends u.a{constructor(e,t){super(e,t),this.activeLayerInfos=null,this.headingLevel=3,this.messages=null,this.type="classic"}render(){const e=this.activeLayerInfos,t=e&&e.toArray().map(e=>this._renderLegendForLayer(e)).filter(e=>!!e)
return Object(nt.a)("div",null,t&&t.length?t:Object(nt.a)("div",{class:"esri-legend__message"},this.messages.noLegend))}_renderLegendForLayer(e){if(!e.ready)return null
const t=!!e.children.length,n=`esri-legend__${e.layer.uid}-version-${e.version}`,r=e.title?Object(Mt.a)({level:this.headingLevel,class:this.classes("esri-widget__heading","esri-legend__service-label")},e.title):null
if(t){const t=e.children.map(e=>this._renderLegendForLayer(e)).toArray()
return Object(nt.a)("div",{key:n,class:this.classes(Zt,"esri-legend__group-layer")},r,t)}{const t=e.legendElements
if(t&&!t.length)return null
const i=t.map(t=>this._renderLegendForElement(t,e.layer,e.effectList)).filter(e=>!!e)
if(!i.length)return null
const s={"esri-legend__group-layer-child":!!e.parent}
return Object(nt.a)("div",{key:n,class:this.classes(Zt,s),tabIndex:0},r,Object(nt.a)("div",{class:"esri-legend__layer"},i))}}_renderLegendForElement(e,t,n,r){const i="color-ramp"===e.type,s="opacity-ramp"===e.type,o="size-ramp"===e.type
let a=null
if("symbol-table"===e.type||o){const r=e.infos.map(r=>this._renderLegendForElementInfo(r,t,n,o,e.legendType)).filter(e=>!!e)
r.length&&(a=Object(nt.a)("div",{class:Yt},r))}else"color-ramp"===e.type||"opacity-ramp"===e.type||"heatmap-ramp"===e.type||"stretch-ramp"===e.type?a=this._renderLegendForRamp(e,t.opacity):"relationship-ramp"===e.type?a=at(e,this.id,t.opacity,n):"univariate-above-and-below-ramp"===e.type?a=this._renderUnivariateAboveAndBelowRamp(e,t.opacity,n):"univariate-color-size-ramp"===e.type&&(a=this._renderUnivariateColorSizeRamp(e,t.opacity,n))
if(!a)return null
const l=e.title
let c=null
if("string"==typeof l)c=l
else if(l){const e=_t(this.messages,l,i||s)
c=xt(0,i||s)&&l.title?`${l.title} (${e})`:e}const u=r?"esri-legend__layer-child-table":"esri-legend__layer-table",d=c?Object(nt.a)("div",{class:"esri-legend__layer-caption"},c):null,h={"esri-legend__layer-table--size-ramp":o||!r}
return Object(nt.a)("div",{class:this.classes(u,h)},d,a)}_renderUnivariateAboveAndBelowRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=Ot(e,t)
if(!r)return null
const s=gt(r,"above",!0),o=gt(r,"below",!0),a=mt(i,{width:12,height:s,rampAlignment:"vertical",opacity:t,type:"above",effectList:n}),l=mt(i,{width:12,height:o,rampAlignment:"vertical",opacity:t,type:"below",effectList:n}),c=bt(r),u=r.infos.map(e=>e.label),d=u.map((e,t)=>{const n=2===t
return 0===t?Object(nt.a)("div",{key:t,class:e?a?an:on:null},e):n?Object(nt.a)("div",null):null}),h=u.length-1,f=Math.floor(u.length/2),p=u.map((e,t)=>t===f||t===h?Object(nt.a)("div",{key:t,class:e?a?an:on:null},e):null),b={display:"table-cell",verticalAlign:"middle"},m={marginTop:c+"px"},y={height:s+"px"},g={height:o+"px"}
return Object(nt.a)("div",{key:"univariate-above-and-below-ramp-preview",styles:ln},Object(nt.a)("div",{class:Yt},r.infos.map((e,t)=>Object(nt.a)("div",{class:this.classes(Qt,rn)},Object(nt.a)("div",{class:tn,styles:b,bind:e.preview,afterCreate:wt}),a||t%2!=0?null:Object(nt.a)("div",{class:Xt},u[t])))),a?Object(nt.a)("div",{styles:m,key:"color-ramp-preview"},Object(nt.a)("div",{styles:cn},Object(nt.a)("div",{styles:un},Object(nt.a)("div",{class:nn,bind:a,afterCreate:wt})),Object(nt.a)("div",{styles:un},Object(nt.a)("div",{class:sn,styles:y},d))),Object(nt.a)("div",{styles:cn},Object(nt.a)("div",{styles:un},Object(nt.a)("div",{class:nn,bind:l,afterCreate:wt})),Object(nt.a)("div",{styles:un},Object(nt.a)("div",{class:sn,styles:g},p)))):null)}_renderUnivariateColorSizeRamp(e,t,n){const{sizeRampElement:r,colorRampElement:i}=vt(e)
if(!r)return null
const s=bt(r),o=gt(r,"full",!1),a=mt(i,{width:12,height:o,rampAlignment:"vertical",opacity:t,type:"full",effectList:n}),l=r.infos.length-1,c=r.infos.map((e,t)=>0===t||t===l?Object(nt.a)("div",{key:t,class:e.label?i?an:on:null},e.label):null),u={display:"table-cell",verticalAlign:"middle"},d={marginTop:s+"px"},h={height:o+"px"}
return Object(nt.a)("div",{key:"univariate-above-and-below-ramp-preview",styles:ln},Object(nt.a)("div",{class:Yt},r.infos.map(e=>Object(nt.a)("div",{class:this.classes(Qt,rn)},Object(nt.a)("div",{class:tn,styles:u,bind:e.preview,afterCreate:wt})))),Object(nt.a)("div",{styles:d,key:"color-ramp-preview"},Object(nt.a)("div",{styles:cn},Object(nt.a)("div",{styles:un},Object(nt.a)("div",{class:nn,bind:a,afterCreate:wt})),Object(nt.a)("div",{styles:un},Object(nt.a)("div",{class:sn,styles:h},c)))))}_renderLegendForRamp(e,t){const n=e.infos,r="opacity-ramp"===e.type,i="heatmap-ramp"===e.type,s="stretch-ramp"===e.type,o=e.preview,a=r?"esri-legend__opacity-ramp":""
o.className="esri-legend__color-ramp "+a,null!=t&&(o.style.opacity=t.toString())
const l=n.map(e=>Object(nt.a)("div",{class:e.label?on:null},i?this.messages[e.label]:s?this._getStretchStopLabel(e):e.label)),c={height:o.style.height}
return Object(nt.a)("div",{class:Qt},Object(nt.a)("div",{class:en,styles:{width:"24px"}},Object(nt.a)("div",{class:nn,bind:o,afterCreate:wt})),Object(nt.a)("div",{class:Xt},Object(nt.a)("div",{class:sn,styles:c},l)))}_getStretchStopLabel(e){return e.label?this.messages[e.label]+": "+("string"==typeof e.value?e.value:Object(Jt.b)(e.value,{style:"decimal",notation:e.value.toString().indexOf("e")>-1?"scientific":"standard"})):""}_renderLegendForElementInfo(e,t,n,r,i){if(e.type)return this._renderLegendForElement(e,t,n,!0)
let s=null
const o=St(t,i)
if(e.preview?s=Object(nt.a)("div",{class:tn,bind:e.preview,afterCreate:wt}):e.src&&(s=this._renderImage(e,t,o)),!s)return null
const a={[Kt]:o},l={[Kt]:o,[rn]:!o&&r}
return Object(nt.a)("div",{class:Qt},Object(nt.a)("div",{class:this.classes(en,l)},s),Object(nt.a)("div",{class:this.classes(Xt,a)},_t(this.messages,e.label,!1)||""))}_renderImage(e,t,n){const{label:r,src:i,opacity:s}=e,o={"esri-legend__imagery-layer-image--stretched":n,[tn]:!n},a={opacity:""+(null!=s?s:t.opacity)}
return Object(nt.a)("img",{alt:_t(this.messages,r,!1),src:i,border:0,width:e.width,height:e.height,class:this.classes(o),styles:a})}}
Object(r.a)([Object(l.b)()],dn.prototype,"activeLayerInfos",void 0),Object(r.a)([Object(l.b)()],dn.prototype,"headingLevel",void 0),Object(r.a)([Object(l.b)(),Object(Lt.a)("esri/widgets/Legend/t9n/Legend")],dn.prototype,"messages",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],dn.prototype,"type",void 0),dn=Object(r.a)([Object(c.a)("esri.widgets.Legend.styles.Classic")],dn)
const hn=dn
let fn=class extends u.a{constructor(e,t){super(e,t),this._handles=new i.a,this.activeLayerInfos=null,this.basemapLegendVisible=!1,this.groundLegendVisible=!1,this.headingLevel=3,this.hideLayersNotInCurrentView=!1,this.keepCacheOnDestroy=!1,this.respectLayerVisibility=!0,this.iconClass="esri-icon-layer-list",this.label=void 0,this.layerInfos=null,this.messages=null,this.style=new hn,this.view=null,this.viewModel=new Ke}initialize(){this.own(Object(s.b)(this,"view","resize",()=>this.scheduleRender()),Object(s.b)(this,"activeLayerInfos","change",()=>this._refreshActiveLayerInfos(this.activeLayerInfos)),Object(s.e)(this,"headingLevel",e=>{const{style:t}=this
t&&(t.headingLevel=e)}),Object(s.a)(this,"style",(e,t)=>{t&&e!==t&&t.destroy(),e&&(e.activeLayerInfos=this.activeLayerInfos,"card"===e.type&&(e.view=this.view),e.headingLevel=this.headingLevel)}))}destroy(){this._handles.destroy(),this._handles=null}castStyle(e){if(e instanceof Wt||e instanceof hn)return e
if("string"==typeof e)return"card"===e?new Wt:new hn
if(e&&"string"==typeof e.type){const t={...e}
return delete t.type,new("card"===e.type?Wt:hn)(t)}return new hn}render(){return Object(nt.a)("div",{class:this.classes("esri-legend","esri-widget",this.style instanceof hn?"esri-widget--panel":null)},this.style.render())}_refreshActiveLayerInfos(e){this._handles.removeAll(),e.forEach(e=>this._renderOnActiveLayerInfoChange(e)),this.scheduleRender()}_renderOnActiveLayerInfoChange(e){const t=Object(s.a)(e,"version",()=>this.scheduleRender())
this._handles.add(t,"version_"+e.layer.uid)
const n=Object(s.b)(e,"children","change",()=>{e.children.forEach(e=>this._renderOnActiveLayerInfoChange(e))})
this._handles.add(n,"children_"+e.layer.uid),e.children.forEach(e=>this._renderOnActiveLayerInfoChange(e))}}
Object(r.a)([Object(o.a)("viewModel.activeLayerInfos")],fn.prototype,"activeLayerInfos",void 0),Object(r.a)([Object(o.a)("viewModel.basemapLegendVisible")],fn.prototype,"basemapLegendVisible",void 0),Object(r.a)([Object(o.a)("viewModel.groundLegendVisible")],fn.prototype,"groundLegendVisible",void 0),Object(r.a)([Object(l.b)()],fn.prototype,"headingLevel",void 0),Object(r.a)([Object(o.a)("viewModel.hideLayersNotInCurrentView")],fn.prototype,"hideLayersNotInCurrentView",void 0),Object(r.a)([Object(o.a)("viewModel.keepCacheOnDestroy")],fn.prototype,"keepCacheOnDestroy",void 0),Object(r.a)([Object(o.a)("viewModel.respectLayerVisibility")],fn.prototype,"respectLayerVisibility",void 0),Object(r.a)([Object(l.b)()],fn.prototype,"iconClass",void 0),Object(r.a)([Object(l.b)({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],fn.prototype,"label",void 0),Object(r.a)([Object(o.a)("viewModel.layerInfos")],fn.prototype,"layerInfos",void 0),Object(r.a)([Object(l.b)(),Object(Lt.a)("esri/widgets/Legend/t9n/Legend")],fn.prototype,"messages",void 0),Object(r.a)([Object(l.b)()],fn.prototype,"style",void 0),Object(r.a)([Object(a.a)("style")],fn.prototype,"castStyle",null),Object(r.a)([Object(o.a)("viewModel.view")],fn.prototype,"view",void 0),Object(r.a)([Object(l.b)()],fn.prototype,"viewModel",void 0),fn=Object(r.a)([Object(c.a)("esri.widgets.Legend")],fn)
const pn=fn},743:function(e,t,n){"use strict"
n.r(t),n.d(t,"arcgis_hub_map_widget_legend",(function(){return u}))
var r=n(293),i=n(995),s=n(1141),o=n(1447),a=n(898),l=n(684),c=n(299)
n(1127),n(181),n(148)
const u=class{constructor(e){Object(r.j)(this,e),this.arcgisHubWidgetPanelToggled=Object(r.e)(this,"arcgisHubWidgetPanelToggled",7),this.hubTelemetry=Object(r.e)(this,"hubTelemetry",7),this.scale="m",this.bottomOffset=0,this.topOffset=0,this.closed=!0,Object(i.a)(this,"toggleClosed","setPanelHeight","handleSetPanelRef","handleSetWidgetRef")}async componentWillLoad(){const{el:e}=this,t=e&&e.closest("arcgis-hub-map-widget-container")
this.viewPosition=null==t?void 0:t.viewPosition,this.intl=await s.a.loadIntlForComponent(e)}async componentDidLoad(){const{view:e}=this
e&&this.addWidget(),Object(c.a)()}addWidgetToView(e,t){e&&e!==t&&this.addWidget()}updateViewHeightWhenOpen(){const{closed:e}=this
this.active=!e,this.active&&this.setPanelHeight()}emitEventOnActiveChange(e){const t=e?o.a.dictionary.category.interaction.action.open.label.panel.details.legend:o.a.dictionary.category.interaction.action.close.label.panel.details.legend
this.hubTelemetry.emit(t)}handleCalcitePanelDismissedChange(e){e.stopPropagation()
const t=e.target.closed
this.arcgisHubWidgetPanelToggled.emit(t)}handlePanelToggled(e){const{target:t,detail:n}=e,{el:r}=this
t===r?this.closed=n:n||(this.closed=!0)}handleSetPanelRef(e){e&&(this.panelEl=e)}handleSetWidgetRef(e){e&&(this.legendEl=e)}toggleClosed(){this.closed=!this.closed}setPanelHeight(){const{legendEl:e,view:{size:t,container:n}}=this,[r,i]=t
this.viewHeight=i,this.viewWidth=r
const{top:s,bottom:o}=n.getBoundingClientRect(),{top:a,bottom:l}=e.getBoundingClientRect()
this.topOffset=a-s,this.viewPosition.includes("top")?this.viewHeightWithOffset=i-this.topOffset:(this.bottomOffset=o-l,this.viewHeightWithOffset=i-this.bottomOffset)}async addWidget(){const{legend:e,view:t,panelEl:n}=this
t&&n&&!e&&(await t.when(),this.legend=new l.default({view:t,container:n}),Object(a.e)(t,"size",this.setPanelHeight))}get positionClass(){const{viewPosition:e}=this
if(e)return"hub-widget-legend "+e.split("-").join(" ")}get styles(){const{viewHeight:e,viewWidth:t,viewHeightWithOffset:n,bottomOffset:r,topOffset:i,active:s}=this
let o=640
return o>e&&(o=e),{"--panel-height":n+"px","--panel-height-mobile":o+"px","--view-width":t+"px","--bottom-offset":r+"px","--top-offset":i+"px","--mobile-display":s?"flex":"none"}}render(){const{styles:e,positionClass:t,closed:n,active:i,scale:s}=this,o=this.intl.t("heading"),a=this.intl.t("textOpen"),l=this.intl.t("textClose")
return Object(r.h)(r.b,{"data-element":"map-widget-legend",style:e},Object(r.h)("calcite-panel",{class:t,closable:!0,closed:n,dismissed:n,heading:o,intlClose:l,ref:this.handleSetPanelRef}),Object(r.h)("arcgis-hub-map-widget-generic",{active:i,icon:"legend",onClick:this.toggleClosed,ref:this.handleSetWidgetRef,scale:s,text:i?l:a}))}static get assetsDirs(){return["locales"]}get el(){return Object(r.g)(this)}static get watchers(){return{view:["addWidgetToView"],closed:["updateViewHeightWhenOpen"],active:["emitEventOnActiveChange"]}}}
u.style=":host{display:block}calcite-panel div{background-color:var(--calcite-ui-foreground-1)}.esri-legend__service,.esri-legend__service>.esri-widget__heading{color:var(--calcite-ui-text-1)}.hub-widget-legend{min-width:none !important;max-width:none !important;padding:0px}@media only screen and (min-width: 640px){.hub-widget-legend.top{position:absolute}.hub-widget-legend.top{width:25rem}.hub-widget-legend.top{padding:0px}.hub-widget-legend.top{max-height:calc(var(--panel-height) - 2rem)}.hub-widget-legend.bottom{position:absolute}.hub-widget-legend.bottom{width:25rem}.hub-widget-legend.bottom{padding:0px}.hub-widget-legend.bottom{bottom:calc(var(--bottom-offset) - 2rem);max-height:calc(var(--panel-height) - 1rem)}.hub-widget-legend.right{right:100%}.hub-widget-legend.right{margin-right:1rem}.hub-widget-legend.left{left:100%}.hub-widget-legend.left{margin-left:1rem}.hub-widget-legend.bottom.left{margin-left:0.5rem}.hub-widget-legend.bottom.right{margin-right:0.5rem}}@media only screen and (max-width: 640px){.hub-widget-legend.top{position:absolute}.hub-widget-legend.top{z-index:50}.hub-widget-legend.top{padding:0px}.hub-widget-legend.top{top:calc(var(--panel-height) - var(--panel-height-mobile) + var(--top-offset) - 1rem);width:calc(var(--view-width) + 1px);display:var(--mobile-display);height:var(--panel-height-mobile)}.hub-widget-legend.bottom{position:absolute}.hub-widget-legend.bottom{z-index:50}.hub-widget-legend.bottom{padding:0px}.hub-widget-legend.bottom{bottom:calc(var(--panel-height-mobile) - var(--panel-height) - var(--bottom-offset) - 1rem);width:calc(var(--view-width) + 1px);display:var(--mobile-display);height:var(--panel-height-mobile)}.hub-widget-legend.right{right:-1rem}.hub-widget-legend.left{left:-1rem}}"},860:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return b}))
var r=n(856),i=n(862),s=n(20),o=n(178),a=n(913)
class l{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new l
return this._values.forEach((n,r)=>{e&&e.has(r)||t.set(r,Object(o.a)(n.value),n.origin)}),t}get(e,t){t=this._normalizeOrigin(t)
const n=this._values.get(e)
return null==t||(null==n?void 0:n.origin)===t?null==n?void 0:n.value:void 0}originOf(e){var t,n
return null!=(t=null==(n=this._values.get(e))?void 0:n.origin)?t:a.a.USER}keys(e){e=this._normalizeOrigin(e)
const t=[...this._values.keys()]
return null==e?t:t.filter(t=>{var n
return(null==(n=this._values.get(t))?void 0:n.origin)===e})}set(e,t,n){if((n=this._normalizeOrigin(n))===a.a.DEFAULTS){const t=this._values.get(e)
if(t&&null!=t.origin&&t.origin>n)return}this._values.set(e,new c(t,n))}delete(e,t){var n
null!=(t=this._normalizeOrigin(t))&&(null==(n=this._values.get(e))?void 0:n.origin)!==t||this._values.delete(e)}has(e,t){var n
return null!=(t=this._normalizeOrigin(t))?(null==(n=this._values.get(e))?void 0:n.origin)===t:this._values.has(e)}forEach(e){this._values.forEach(({value:t},n)=>e(t,n))}_normalizeOrigin(e){if(null!=e)return e===a.a.DEFAULTS?e:a.a.USER}}class c{constructor(e,t){this.value=e,this.origin=t}}var u=n(1045),d=n(977),h=n(920),f=n(980),p=n(857)
const b=e=>{let t=class extends e{constructor(...e){super(...e)
const t=Object(s.c)(Object(h.a)(this)),n=t.store,r=new l
t.store=r,Object(u.a)(t,n,r)}read(e,t){Object(d.a)(this,e,t)}write(e={},t){return Object(f.b)(this,e,t)}toJSON(e){return this.write({},e)}static fromJSON(e,t){return m.call(this,e,t)}}
return t=Object(r.a)([Object(p.a)("esri.core.JSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t}
function m(e,t){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const n=new this
return n.read(e,t),n}let y=class extends(b(i.a)){}
y=Object(r.a)([Object(p.a)("esri.core.JSONSupport")],y)},861:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return A})),n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return O})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return I})),n.d(t,"p",(function(){return j})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return S})),n.d(t,"t",(function(){return M})),n.d(t,"u",(function(){return p})),n.d(t,"v",(function(){return d})),n.d(t,"w",(function(){return b})),n.d(t,"x",(function(){return L})),n.d(t,"y",(function(){return R})),n.d(t,"z",(function(){return k})),n.d(t,"A",(function(){return g}))
var r=n(1087),i=n(354),s=n(932),o=n(177),a=n(20)
function l(e){return Promise.all(e)}function c(e){return new Promise((t,n)=>{try{e(t,n)}catch(e){Promise.resolve().then(()=>n(e))}})}function u(e="Aborted"){return new i.a("AbortError",e)}function d(e,t="Aborted"){if(f(e))throw u(t)}function h(e){return Object(a.k)(e)?"aborted"in e?e:e.signal:e}function f(e){const t=h(e)
return Object(a.k)(t)&&t.aborted}function p(e){if(O(e))throw e}function b(e){if(!O(e))throw e}function m(e,t){const n=h(e)
if(!Object(a.j)(n)){if(!n.aborted)return Object(s.d)(n,"abort",()=>t())
t()}}function y(e,t){const n=h(e)
if(!Object(a.j)(n))return d(n),Object(s.d)(n,"abort",()=>t(u()))}function g(e,t){const n=h(t)
return Object(a.j)(n)?e:new Promise((n,r)=>{let i=m(t,()=>r(u()))
const s=()=>i=Object(a.s)(i)
e.then(s,s),e.then(n,r)})}function O(e){return e&&"AbortError"===e.name}function v(e){return e.catch(e=>{if(!O(e))throw e})}function j(e,t=o.a.getLogger("esri")){return e.catch(e=>{O(e)||t.error(e)})}function w(){let e=null
const t=new Promise((t,n)=>{e={promise:void 0,resolve:t,reject:n}})
return e.promise=t,e}function _(e){if(!e)return
if("function"!=typeof e.forEach){const t=Object.keys(e)
return _(t.map(t=>e[t])).then(e=>{const n={}
return t.forEach((t,r)=>n[t]=e[r]),n})}const t=e
return c(e=>{const n=[]
let r=t.length
0===r&&e(n),t.forEach(t=>{const i={promise:t||Promise.resolve(t)}
n.push(i),i.promise.then(e=>{i.value=e}).catch(e=>{i.error=e}).then(()=>{--r,0===r&&e(n)})})})}function x(e){return _(e).then(e=>e.filter(e=>!!e.value).map(e=>e.value))}function S(e){return Promise.reject(e)}function M(e){return Promise.resolve(e)}function E(e,t,n){const r=new AbortController
return m(n,()=>r.abort()),new Promise((n,i)=>{let s=setTimeout(()=>{s=0,n(t)},e)
m(r,()=>{s&&(clearTimeout(s),i(u()))})})}function L(e,t,n,r){const s=n&&"abort"in n?n:null
null!=r||s||(r=n)
let o=setTimeout(()=>{o=0,s&&s.abort()},t)
const a=()=>r||new i.a("promiseUtils:timeout","The wrapped promise did not resolve within "+t+" ms")
return e.then(e=>{if(0===o)throw a()
return clearTimeout(o),e},e=>{throw clearTimeout(o),0===o?a():e})}function I(e){return e&&"function"==typeof e.then}function k(e){return I(e)?e:Promise.resolve(e)}function C(e,t=-1){let n,r,i,s,o=null
const l=(...c)=>{if(n){r=c,s&&s.reject(u()),s=w()
const e=Object(a.c)(s.promise)
if(o){const e=o
o=null,e.abort()}return e}if(i=s||w(),s=null,t>0){const r=new AbortController
n=k(e(...c,r.signal))
const i=n
E(t).then(()=>{n===i&&(s?r.abort():o=r)})}else n=1,n=k(e(...c))
const d=()=>{const e=r
r=i=n=o=null,null!=e&&l(...e)},h=n,f=i
return h.then(d,d),h.then(f.resolve,f.reject),Object(a.c)(f.promise)}
return l}function A(){let e,t
const n=new Promise((n,r)=>{e=n,t=r}),i=t=>{e(t)}
return i.resolve=t=>e(t),i.reject=e=>t(e),i.timeout=(e,t)=>r.a.setTimeout(()=>i.reject(t),e),i.promise=n,i}function T(e,t){return e.then(t,t)}function P(e,t){let n,r=new AbortController
const i=e(r.signal)
let s={promise:i,finished:!1,abort:()=>{r&&(r.abort(),r=null)}}
const o=()=>{s&&(s.finished=!0,s=null),Object(a.k)(n)&&(n.remove(),n=null),r=null}
return i.then(o,o),n=m(t,()=>{Object(a.k)(s)&&s.abort()}),s}function R(e){return Promise.resolve().then(()=>{d(e)})}},863:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}))
var r=n(109)
class i{constructor(e,t={ignoreUnknown:!1,useNumericKeys:!1}){this.jsonToAPI=e,this.options=t,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this._invertMap(e),this.apiValues=this._getKeysSorted(this.apiToJSON),this.jsonValues=this._getKeysSorted(this.jsonToAPI),this.read=e=>this.fromJSON(e),this.write=(e,t,n)=>{const i=this.toJSON(e)
void 0!==i&&Object(r.c)(n,i,t)},this.write.isJSONMapWriter=!0}toJSON(e){if(this.apiToJSON.hasOwnProperty(e)){const t=this.apiToJSON[e]
return this.options.useNumericKeys?+t:t}return this.options.ignoreUnknown?void 0:e}fromJSON(e){return this.jsonToAPI.hasOwnProperty(e)?this.jsonToAPI[e]:this.options.ignoreUnknown?void 0:e}_invertMap(e){const t={}
for(const n in e)t[e[n]]=n
return t}_getKeysSorted(e){const t=[]
for(const n in e)t.push(n)
return t.sort(),t}}function s(){return function(e,t){return new i(e,{ignoreUnknown:!0,...t})}}},864:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(858)
function i(e,t,n){let i,s
return void 0===t?(s=e,i=[void 0]):"string"!=typeof t?(s=e,i=[void 0],n=t):(s=t,i=Array.isArray(e)?e:[e]),(e,t)=>{const o=e.constructor.prototype
for(const a of i){const i=Object(r.c)(e,a,s)
i.write&&"object"==typeof i.write||(i.write={}),n&&(i.write.target=n),i.write.writer=o[t]}}}},865:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(858)
function i(e,t,n){let i,s
return void 0===t||Array.isArray(t)?(s=e,n=t,i=[void 0]):(s=t,i=Array.isArray(e)?e:[e]),(e,t)=>{const o=e.constructor.prototype
i.forEach(i=>{const a=Object(r.c)(e,i,s)
a.read&&"object"==typeof a.read||(a.read={}),a.read.reader=o[t],n&&(a.read.source=(a.read.source||[]).concat(n))})}}},866:function(e,t,n){"use strict"
n.d(t,"a",(function(){return j}))
var r,i=n(856),s=n(177),o=n(20),a=n(858),l=(n(353),n(77),n(880)),c=n(865),u=n(857),d=n(864),h=n(859),f=n(875),p=n(659),b=n(872),m=n(662)
const y=[0,0]
function g(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}const O=s.a.getLogger("esri.geometry.Point")
let v=r=class extends f.a{constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"))
const n=e._get("spatialReference")
t._set("spatialReference",Object.isFrozen(n)?n:n.clone())}normalizeCtorArgs(e,t,n,r,i){let s
if(Array.isArray(e))s=e,i=t,e=s[0],t=s[1],n=s[2],r=s[3]
else if(e&&"object"==typeof e){if(s=e,e=null!=s.x?s.x:s.longitude,t=null!=s.y?s.y:s.latitude,n=s.z,r=s.m,(i=s.spatialReference)&&"esri.geometry.SpatialReference"!==i.declaredClass&&(i=new p.default(i)),null!=s.longitude||null!=s.latitude)if(null==s.longitude)O.warn(".longitude=","Latitude was defined without longitude")
else if(null==s.latitude)O.warn(".latitude=","Longitude was defined without latitude")
else if(!s.declaredClass&&i&&i.isWebMercator){const n=Object(m.lngLatToXY)(s.longitude,s.latitude,y)
e=n[0],t=n[1]}}else g(n)?(i=n,n=null):g(r)&&(i=r,r=null)
const o={x:e,y:t}
return null==o.x&&null!=o.y?O.warn(".y=","Y coordinate was defined without an X coordinate"):null==o.y&&null!=o.x&&O.warn(".x=","X coordinate was defined without a Y coordinate"),null!=i&&(o.spatialReference=i),null!=n&&(o.z=n),null!=r&&(o.m=r),o}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e))}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e))}get latitude(){const{spatialReference:e,x:t,y:n}=this
if(e){if(e.isWebMercator)return Object(m.xyToLngLat)(t,n,y)[1]
if(e.isGeographic)return n}return null}set latitude(e){const{spatialReference:t,x:n}=this
t&&(t.isWebMercator?this._set("y",Object(m.lngLatToXY)(n,e,y)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e))}get longitude(){const{x:e,y:t,spatialReference:n}=this
if(n){if(n.isWebMercator)return Object(m.xyToLngLat)(e,t,y)[0]
if(n.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:n}=this
n&&(n.isWebMercator?this._set("x",Object(m.lngLatToXY)(e,t,y)[0]):n.isGeographic&&this._set("x",e),this._set("longitude",e))}writeX(e,t,n){t[n]=isNaN(e)?"NaN":e}readX(e){return"string"==typeof e?NaN:e}clone(){const e=new r
return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return r.copy(e,this),this}equals(e){if(Object(o.j)(e))return!1
const{x:t,y:n,z:r,m:i,spatialReference:s}=this,{z:a,m:l}=e
let{x:c,y:u,spatialReference:d}=e
if(!s.equals(d))if(s.isWebMercator&&d.isWGS84)[c,u]=Object(m.lngLatToXY)(c,u),d=s
else{if(!s.isWGS84||!d.isWebMercator)return!1;[c,u]=Object(m.xyToLngLat)(c,u),d=s}return t===c&&n===u&&r===a&&i===l&&s.wkid===d.wkid}offset(e,t,n){return function(e,t,n,r){var i
return e.x=e.x+t,e.y=e.y+n,null!=r&&(e.z=(null!=(i=e.z)?i:0)+r),e}(this,e,t,n)}normalize(){if(!this.spatialReference)return this
const e=Object(b.e)(this.spatialReference)
if(!e)return this
let t=this.x
const[n,r]=e.valid,i=2*r
let s
return t>r?(s=Math.ceil(Math.abs(t-r)/i),t-=s*i):t<n&&(s=Math.ceil(Math.abs(t-n)/i),t+=s*i),this._set("x",t),this}distance(e){return function(e,t){const n=e.x-t.x,r=e.y-t.y,i=e.hasZ&&t.hasZ?e.z-t.z:0
return Math.sqrt(n*n+r*r+i*i)}(this,e)}toArray(){const e=this.hasZ,t=this.hasM
return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(a.b)({readOnly:!0})],v.prototype,"cache",null),Object(i.a)([Object(a.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],v.prototype,"hasM",null),Object(i.a)([Object(a.b)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],v.prototype,"hasZ",null),Object(i.a)([Object(a.b)({type:Number})],v.prototype,"latitude",null),Object(i.a)([Object(a.b)({type:Number})],v.prototype,"longitude",null),Object(i.a)([Object(a.b)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),Object(l.a)(e=>isNaN(e)?e:Object(h.i)(e))],v.prototype,"x",void 0),Object(i.a)([Object(d.a)("x")],v.prototype,"writeX",null),Object(i.a)([Object(c.a)("x")],v.prototype,"readX",null),Object(i.a)([Object(a.b)({type:Number,json:{write:!0}})],v.prototype,"y",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],v.prototype,"z",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],v.prototype,"m",void 0),v=r=Object(i.a)([Object(u.a)("esri.geometry.Point")],v),v.prototype.toJSON.isDefaultToJSON=!0
const j=v},867:function(e,t,n){"use strict"
function r(){return[0,0,0]}function i(e){return[e[0],e[1],e[2]]}function s(e,t,n){return[e,t,n]}function o(e){const t=[0,0,0],n=Math.min(3,e.length)
for(let r=0;r<n;++r)t[r]=e[r]
return t}function a(e,t){return new Float64Array(e,t,3)}function l(){return s(1,1,1)}function c(){return s(1,0,0)}function u(){return s(0,1,0)}function d(){return s(0,0,1)}n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d}))
const h=[0,0,0],f=l(),p=c(),b=u(),m=d()
Object.freeze({__proto__:null,create:r,clone:i,fromValues:s,fromArray:o,createView:a,zeros:function(){return[0,0,0]},ones:l,unitX:c,unitY:u,unitZ:d,ZEROS:h,ONES:f,UNIT_X:p,UNIT_Y:b,UNIT_Z:m})},868:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n(863),i=n(858)
function s(e,t={}){var n
const s=e instanceof r.a?e:new r.a(e,t),o={type:null==(n=null==t?void 0:t.ignoreUnknown)||n?s.apiValues:String,json:{type:s.jsonValues,read:(null==t||!t.readOnly)&&{reader:s.read},write:{writer:s.write}}}
return void 0!==(null==t?void 0:t.readOnly)&&(o.readOnly=!!t.readOnly),void 0!==(null==t?void 0:t.default)&&(o.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(o.json.name=t.name),Object(i.b)(o)}},869:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return f}))
var r=n(20),i=n(658),s=n(875),o=n(889),a=n(866),l=n(661),c=n(883)
function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function d(e){return void 0!==e.points}function h(e){return void 0!==e.x&&void 0!==e.y}function f(e){return void 0!==e.paths}function p(e){return void 0!==e.rings}function b(e){return Object(r.j)(e)?null:e instanceof s.a?e:h(e)?a.a.fromJSON(e):f(e)?c.a.fromJSON(e):p(e)?l.default.fromJSON(e):d(e)?o.a.fromJSON(e):u(e)?i.default.fromJSON(e):null}function m(e){return e?h(e)?"esriGeometryPoint":f(e)?"esriGeometryPolyline":p(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":d(e)?"esriGeometryMultipoint":null:null}const y={esriGeometryPoint:a.a,esriGeometryPolyline:c.a,esriGeometryPolygon:l.default,esriGeometryEnvelope:i.default,esriGeometryMultipoint:o.a}
function g(e){return e&&y[e]||null}},870:function(e,t,n){"use strict"
n.d(t,"c",(function(){return u}))
var r=n(859),i=n(658)
n.d(t,"a",(function(){return i.default}))
var s=n(875),o=n(889),a=n(866)
n.d(t,"b",(function(){return a.a}))
var l=n(661),c=n(883)
n(659),n(888),n(869)
const u={base:s.a,key:"type",typeMap:{extent:i.default,multipoint:o.a,point:a.a,polyline:c.a,polygon:l.default}}
Object(r.k)(u)},871:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return w})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return _})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return o})),n.d(t,"o",(function(){return y})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return V})),n.d(t,"r",(function(){return C})),n.d(t,"s",(function(){return s})),n.d(t,"t",(function(){return x})),n.d(t,"u",(function(){return v})),n.d(t,"v",(function(){return O})),n.d(t,"w",(function(){return g})),n.d(t,"x",(function(){return M})),n.d(t,"y",(function(){return T})),n.d(t,"z",(function(){return a})),n.d(t,"A",(function(){return S})),n.d(t,"B",(function(){return D})),n.d(t,"C",(function(){return P})),n.d(t,"D",(function(){return $})),n.d(t,"E",(function(){return z})),n.d(t,"F",(function(){return A})),n.d(t,"G",(function(){return L}))
var r=n(867),i=n(893)
function s(e){const t=e[0],n=e[1],r=e[2]
return Math.sqrt(t*t+n*n+r*r)}function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function a(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function l(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function c(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function u(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function d(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function h(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function f(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e}function p(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function b(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function m(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2]
return Math.sqrt(n*n+r*r+i*i)}function y(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2]
return n*n+r*r+i*i}function g(e){const t=e[0],n=e[1],r=e[2]
return t*t+n*n+r*r}function O(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function v(e,t){const n=t[0],r=t[1],i=t[2]
let s=n*n+r*r+i*i
return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s),e}function j(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function w(e,t,n){const r=t[0],i=t[1],s=t[2],o=n[0],a=n[1],l=n[2]
return e[0]=i*l-s*a,e[1]=s*o-r*l,e[2]=r*a-i*o,e}function _(e,t,n,r){const i=t[0],s=t[1],o=t[2]
return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e}function x(e,t,n){const r=t[0],i=t[1],s=t[2]
return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12],e[1]=n[1]*r+n[5]*i+n[9]*s+n[13],e[2]=n[2]*r+n[6]*i+n[10]*s+n[14],e}function S(e,t,n){const r=t[0],i=t[1],s=t[2]
return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e}function M(e,t,n){const r=n[0],i=n[1],s=n[2],o=n[3],a=t[0],l=t[1],c=t[2]
let u=i*c-s*l,d=s*a-r*c,h=r*l-i*a,f=i*h-s*d,p=s*u-r*h,b=r*d-i*u
const m=2*o
return u*=m,d*=m,h*=m,f*=2,p*=2,b*=2,e[0]=a+u+f,e[1]=l+d+p,e[2]=c+h+b,e}function E(e,t,n,r){const i=[],s=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),s[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),s[2]=i[2],e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e}function L(e,t){o(I,e),o(k,t),v(I,I),v(k,k)
const n=j(I,k)
return n>1?0:n<-1?Math.PI:Math.acos(n)}const I=Object(r.f)(),k=Object(r.f)()
function C(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function A(e,t){if(e===t)return!0
const n=e[0],r=e[1],s=e[2],o=t[0],a=t[1],l=t[2]
return Math.abs(n-o)<=i.a*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-a)<=i.a*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(s-l)<=i.a*Math.max(1,Math.abs(s),Math.abs(l))}function T(e,t,n){const r=n[0]-t[0],i=n[1]-t[1],s=n[2]-t[2]
let o=r*r+i*i+s*s
return o>0?(o=1/Math.sqrt(o),e[0]=r*o,e[1]=i*o,e[2]=s*o,e):(e[0]=0,e[1]=0,e[2]=0,e)}const P=c,R=u,N=d,V=m,z=y,D=s,$=g,F=Object.freeze({__proto__:null,length:s,copy:o,set:a,add:l,subtract:c,multiply:u,divide:d,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},min:h,max:f,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:p,scaleAndAdd:b,distance:m,squaredDistance:y,squaredLength:g,negate:O,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},normalize:v,dot:j,cross:w,lerp:_,hermite:function(e,t,n,r,i,s){const o=s*s,a=o*(2*s-3)+1,l=o*(s-2)+s,c=o*(s-1),u=o*(3-2*s)
return e[0]=t[0]*a+n[0]*l+r[0]*c+i[0]*u,e[1]=t[1]*a+n[1]*l+r[1]*c+i[1]*u,e[2]=t[2]*a+n[2]*l+r[2]*c+i[2]*u,e},bezier:function(e,t,n,r,i,s){const o=1-s,a=o*o,l=s*s,c=a*o,u=3*s*a,d=3*l*o,h=l*s
return e[0]=t[0]*c+n[0]*u+r[0]*d+i[0]*h,e[1]=t[1]*c+n[1]*u+r[1]*d+i[1]*h,e[2]=t[2]*c+n[2]*u+r[2]*d+i[2]*h,e},random:function(e,t){t=t||1
const n=2*Object(i.b)()*Math.PI,r=2*Object(i.b)()-1,s=Math.sqrt(1-r*r)*t
return e[0]=Math.cos(n)*s,e[1]=Math.sin(n)*s,e[2]=r*t,e},transformMat4:x,transformMat3:S,transformQuat:M,rotateX:function(e,t,n,r){const i=[],s=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[0],s[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),s[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},rotateY:function(e,t,n,r){const i=[],s=[]
return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),s[1]=i[1],s[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},rotateZ:E,angle:L,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},exactEquals:C,equals:A,direction:T,sub:P,mul:R,div:N,dist:V,sqrDist:z,len:D,sqrLen:$})},872:function(e,t,n){"use strict"
n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return L})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return x})),n.d(t,"k",(function(){return v})),n.d(t,"l",(function(){return M})),n.d(t,"m",(function(){return y})),n.d(t,"n",(function(){return j})),n.d(t,"o",(function(){return _})),n.d(t,"p",(function(){return O})),n.d(t,"q",(function(){return S}))
var r=n(20),i=n(355),s=n(1124),o=n(1027)
const a={102113:!0,102100:!0,3857:!0,3785:!0},l={102113:!0,102100:!0,3857:!0,3785:!0,4326:!0},c='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',u=[-20037508.342788905,20037508.342788905],d=[-20037508.342787,20037508.342787],h={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:u,origin:d,dx:1e-5},102100:{wkTemplate:c,valid:u,origin:d,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:u,origin:d,dx:1e-5},3857:{wkTemplate:c,valid:u,origin:d,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}}
function f(e,t){return!Object(r.j)(e)&&!Object(r.j)(t)&&(e===t||(null!=e.wkid||null!=t.wkid?e.wkid===t.wkid||O(e)&&O(t)||null!=t.latestWkid&&e.wkid===t.latestWkid||null!=e.latestWkid&&t.wkid===e.latestWkid:!(!e.wkt||!t.wkt)&&e.wkt.toUpperCase()===t.wkt.toUpperCase()))}function p(e){return M(e)&&e.wkid?h[e.wkid]:null}function b(e){return!!M(e)&&(e.wkid?null==o.a[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function m(e){return!(w(e)||x(e))}function y(e){return M(e)&&4326===e.wkid}function g(e){return M(e)&&e.wkid===s.a.CGCS2000}function O(e){return M(e)&&null!=e.wkid&&!0===a[e.wkid]}function v(e){return M(e)&&32662===e.wkid}function j(e){return e===s.a.GCSMARS2000||e===s.a.GCSMARS2000_SPHERE}function w(e){return M(e)&&null!=e.wkid&&j(e.wkid)}function _(e){return e===s.a.GCSMOON2000}function x(e){return M(e)&&null!=e.wkid&&_(e.wkid)}function S(e){return M(e)&&null!=e.wkid&&!0===l[e.wkid]}function M(e){return Object(r.k)(e)&&(null!=e.wkid&&e.wkid>=2e3||null!=e.wkt)}const E={wkid:4326,wkt:Object(i.c)(h[4326].wkTemplate,{Central_Meridian:"0.0"})},L={wkid:102100,latestWkid:3857},I={wkid:32662}},873:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r,i,s=n(967),o=n(874),a=n(20),l=n(859)
function c(e){return Object(o.f)(Object(l.e)(e),0,255)}function u(e,t,n){return e=Number(e),isNaN(e)?n:e<t?t:e>n?n:e}class d{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,n,r=new d){return r.r=Math.round(e.r+(t.r-e.r)*n),r.g=Math.round(e.g+(t.g-e.g)*n),r.b=Math.round(e.b+(t.b-e.b)*n),r.a=e.a+(t.a-e.a)*n,r._sanitize()}static fromRgb(e,t){const n=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/)
if(n){const e=n[2].split(/\s*,\s*/),r=n[1]
if("rgb"===r&&3===e.length||"rgba"===r&&4===e.length){const n=e[0]
if("%"===n.charAt(n.length-1)){const n=e.map(e=>2.56*parseFloat(e))
return 4===e.length&&(n[3]=parseFloat(e[3])),d.fromArray(n,t)}return d.fromArray(e.map(e=>parseFloat(e)),t)}if("hsl"===r&&3===e.length||"hsla"===r&&4===e.length)return d.fromArray(Object(s.d)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new d){if(4!==e.length&&7!==e.length||"#"!==e[0])return null
const n=4===e.length?4:8,r=(1<<n)-1
let i=Number("0x"+e.substr(1))
return isNaN(i)?null:(["b","g","r"].forEach(e=>{const s=i&r
i>>=n,t[e]=4===n?17*s:s}),t.a=1,t)}static fromArray(e,t=new d){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const n=Object(s.e)(e)?Object(s.a)(e):null
return n&&d.fromArray(n,t)||d.fromRgb(e,t)||d.fromHex(e,t)}static fromJSON(e){return e&&new d([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return Object(a.k)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return Object(a.k)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){if("string"==typeof e)d.fromString(e,this)
else if(Array.isArray(e))d.fromArray(e,this)
else{var t,n,r,i
this._set(null!=(t=e.r)?t:0,null!=(n=e.g)?n:0,null!=(r=e.b)?r:0,null!=(i=e.a)?i:1),e instanceof d||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16)
return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${n.length<2?"0"+n:n}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b
return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=d.AlphaMode.ALWAYS){const t=c(this.r),n=c(this.g),r=c(this.b)
return e===d.AlphaMode.ALWAYS||1!==this.a?[t,n,r,c(255*this.a)]:[t,n,r]}clone(){return new d(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return Object(a.k)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a=r}}d.prototype.declaredClass="esri.Color",r=d||(d={}),(i=r.AlphaMode||(r.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"
const h=d},874:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return d})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return o})),n.d(t,"o",(function(){return c})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return p})),n.d(t,"r",(function(){return j}))
var r=n(871),i=n(910)
const s=new Float32Array(1)
function o(e){--e
for(let t=1;t<32;t<<=1)e|=e>>t
return e+1}function a(e,t,n){return Math.min(Math.max(e,t),n)}function l(e){return 0==(e&e-1)}function c(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e}function u(e){return 10**Math.ceil(Math.LOG10E*Math.log(e))}function d(e,t,n){return e+(t-e)*n}function h(e){return e*Math.PI/180}function f(e){return 180*e/Math.PI}function p(e,t=1e-6){return(e<0?-1:1)/Math.max(Math.abs(e),t)}function b(e){return Math.acos(a(e,-1,1))}function m(e){return Math.asin(a(e,-1,1))}function y(e,t,n=1e-6){if(isNaN(e)||isNaN(t))return!1
if(e===t)return!0
const r=Math.abs(e-t),i=Math.abs(e),s=Math.abs(t)
if(0===e||0===t||i<1e-12&&s<1e-12){if(r>.01*n)return!1}else if(r/(i+s)>n)return!1
return!0}function g(e,t,n=1e-6){return!isNaN(e)&&!isNaN(t)&&(e>t?e-t:t-e)<=n}function O(e){return v(Math.max(-x,Math.min(e,x)))}function v(e){return s[0]=e,s[0]}function j(e,t,n){const r=a((n-e)/(t-e),0,1)
return r*r*(3-2*r)}function w(e,t){const n=Object(r.s)(e),i=m(e[2]/n),s=Math.atan2(e[1]/n,e[0]/n)
return Object(r.z)(t,n,i,s),t}function _(e,t,n){return Object(i.l)(e,t[0],t[1],t[2],t[3]*n)}const x=v(34028234663852886e22)},875:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(856),i=n(860),s=n(858),o=(n(353),n(77),n(859),n(865)),a=n(857),l=n(659)
let c=class extends i.a{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=l.default.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,t){if(e instanceof l.default)return e
if(null!=e){const n=new l.default
return n.read(e,t),n}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(e){return this.cache[e]}setCacheValue(e,t){this.cache[e]=t}}
Object(r.a)([Object(s.b)()],c.prototype,"type",void 0),Object(r.a)([Object(s.b)({readOnly:!0})],c.prototype,"cache",null),Object(r.a)([Object(s.b)({readOnly:!0})],c.prototype,"extent",null),Object(r.a)([Object(s.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasM",void 0),Object(r.a)([Object(s.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasZ",void 0),Object(r.a)([Object(s.b)({type:l.default,json:{write:!0}})],c.prototype,"spatialReference",void 0),Object(r.a)([Object(o.a)("spatialReference")],c.prototype,"readSpatialReference",null),c=Object(r.a)([Object(a.a)("esri.geometry.Geometry")],c)
const u=c},876:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return o}))
const r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i
function i(e){return e?e/72*96:0}function s(e){return e?72*e/96:0}function o(e){if("string"==typeof e){const t=e.match(r)
if(t){const n=Number(t[1]),r=t[3]&&t[3].toLowerCase(),i="-"===e.charAt(0),o="px"===r?s(n):n
return i?-o:o}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function a(e=0,t=0){return{x:e,y:t}}function l(e=0,t=0){return[e,t]}function c(e=0,t=0){return[e,t]}function u(e=0,t=0,n=0){return[e,t,n]}function d(e){return e}function h(e){return e}function f(e){return e}function p(e,t){return t?(t[0]=e.x,t[1]=e.y,t.length>2&&(t[2]=0),t):[e.x,e.y]}},878:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k}))
var r,i=n(856),s=n(1061),o=n(890),a=n(178),l=n(20),c=n(982),u=n(984),d=n(948),h=n(858),f=n(859),p=n(971),b=n(857),m=n(1063),y=n(1134)
class g{constructor(){this._observers=[]}observe(e){return this._observers.includes(e)||this._observers.push(e),new y.a(this._observers,e)}notify(){const e=this._observers.slice()
for(let t=0;t<e.length;++t){const n=e[t]
n.onInvalidated(),n.onCommitted()}}}const O=new c.a(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),v=()=>{}
function j(e){return e?e instanceof I?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function w(e){if(e&&e.length)return e[0]}function _(e,t,n,r){const i=Math.min(e.length-n,t.length-r)
let s=0
for(;s<i&&e[n+s]===t[r+s];)s++
return s}const x=new Set,S=new Set,M=new Set,E=new Map
let L=0,I=r=class extends o.a.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new g,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:L++})}static isCollection(e){return null!=e&&e instanceof r}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof r?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return Object(m.d)(this._observable),this._items}set items(e){this._emitBeforeChanges(u.a.ADD)||(this._splice(0,this.length,j(e)),this._emitAfterChanges(u.a.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,n={removed:!1,callback:t}
return e.push(n),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=v,n.removed=!0,e.splice(e.indexOf(n),1)}}}return this._emitter.on(e,t)}once(e,t){const n=this.on(e,t)
return{remove(){n.remove()}}}add(e,t){if(Object(m.d)(this._observable),this._emitBeforeChanges(u.a.ADD))return this
const n=this.getNextIndex(null!=t?t:null)
return this._splice(n,0,[e]),this._emitAfterChanges(u.a.ADD),this}addMany(e,t=this._items.length){if(Object(m.d)(this._observable),!e||!e.length)return this
if(this._emitBeforeChanges(u.a.ADD))return this
const n=this.getNextIndex(t)
return this._splice(n,0,j(e)),this._emitAfterChanges(u.a.ADD),this}at(e){if(Object(m.d)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const e=this._splice(0,this.length)||[]
return this._emitAfterChanges(u.a.REMOVE),e}clone(){return Object(m.d)(this._observable),this._createNewInstance({items:this._items.map(a.a)})}concat(...e){Object(m.d)(this._observable)
const t=e.map(j)
return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const n=Object(l.c)(this._splice(0,this.length)),r=n.length
for(let i=0;i<r;i++)e.call(t,n[i],i,n)
this._emitAfterChanges(u.a.REMOVE)}every(e,t){return Object(m.d)(this._observable),this._items.every(e,t)}filter(e,t){let n
return Object(m.d)(this._observable),n=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:n})}find(e,t){return Object(m.d)(this._observable),this._items.find(e,t)}findIndex(e,t){return Object(m.d)(this._observable),this._items.findIndex(e,t)}flatten(e,t){Object(m.d)(this._observable)
const n=[]
return function e(t,n,r,i){n&&n.forEach((n,s,o)=>{t.push(n),e(t,r.call(i,n,s,o),r,i)})}(n,this,e,t),new r(n)}forEach(e,t){return Object(m.d)(this._observable),this._items.forEach(e,t)}getItemAt(e){return Object(m.d)(this._observable),this._items[e]}getNextIndex(e){Object(m.d)(this._observable)
const t=this.length
return(e=null==e?t:e)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return Object(m.d)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return Object(m.d)(this._observable),this._items.indexOf(e,t)}join(e=","){return Object(m.d)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return Object(m.d)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){Object(m.d)(this._observable)
const n=this._items.map(e,t)
return new r({items:n})}reorder(e,t=this.length-1){Object(m.d)(this._observable)
const n=this.indexOf(e)
if(-1!==n){if(t<0?t=0:t>=this.length&&(t=this.length-1),n!==t){if(this._emitBeforeChanges(u.a.MOVE))return e
this._splice(n,1),this._splice(t,0,[e]),this._emitAfterChanges(u.a.MOVE)}return e}}pop(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=w(this._splice(this.length-1,1))
return this._emitAfterChanges(u.a.REMOVE),e}push(...e){return Object(m.d)(this._observable),this._emitBeforeChanges(u.a.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(u.a.ADD)),this.length}reduce(e,t){Object(m.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduce(e,t):n.reduce(e)}reduceRight(e,t){Object(m.d)(this._observable)
const n=this._items
return 2===arguments.length?n.reduceRight(e,t):n.reduceRight(e)}remove(e){return Object(m.d)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(Object(m.d)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(u.a.REMOVE))return
const t=w(this._splice(e,1))
return this._emitAfterChanges(u.a.REMOVE),t}removeMany(e){if(Object(m.d)(this._observable),!e||!e.length||this._emitBeforeChanges(u.a.REMOVE))return[]
const t=e instanceof r?e.toArray():e,n=this._items,i=[],s=t.length
for(let e=0;e<s;e++){const r=t[e],s=n.indexOf(r)
if(s>-1){const r=1+_(t,n,e+1,s+1),o=this._splice(s,r)
o&&o.length>0&&i.push.apply(i,o),e+=r-1}}return this._emitAfterChanges(u.a.REMOVE),i}reverse(){if(Object(m.d)(this._observable),this._emitBeforeChanges(u.a.MOVE))return this
const e=this._splice(0,this.length)
return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(u.a.MOVE),this}shift(){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.REMOVE))return
const e=w(this._splice(0,1))
return this._emitAfterChanges(u.a.REMOVE),e}slice(e=0,t=this.length){return Object(m.d)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return Object(m.d)(this._observable),this._items.some(e,t)}sort(e){if(Object(m.d)(this._observable),!this.length||this._emitBeforeChanges(u.a.MOVE))return this
const t=Object(l.c)(this._splice(0,this.length))
return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(u.a.MOVE),this}splice(e,t,...n){Object(m.d)(this._observable)
const r=(t?u.a.REMOVE:0)|(n.length?u.a.ADD:0)
if(this._emitBeforeChanges(r))return[]
const i=this._splice(e,t,n)||[]
return this._emitAfterChanges(r),i}toArray(){return Object(m.d)(this._observable),this._items.slice()}toJSON(){return Object(m.d)(this._observable),this.toArray()}toLocaleString(){return Object(m.d)(this._observable),this._items.toLocaleString()}toString(){return Object(m.d)(this._observable),this._items.toString()}unshift(...e){return Object(m.d)(this._observable),!e.length||this._emitBeforeChanges(u.a.ADD)||(this._splice(0,0,e),this._emitAfterChanges(u.a.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,n){const r=this._items,i=this.itemType
let s,o
if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=Object(d.b)(()=>this._dispatchChange())),t){if(o=r.splice(e,t),this.hasEventListener("before-remove")){const t=O.acquire()
t.target=this,t.cancellable=!0
for(let n=0,i=o.length;n<i;n++)s=o[n],t.reset(s),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(n,1),r.splice(e,0,s),e+=1,n-=1,i-=1)
O.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=O.acquire()
e.target=this,e.cancellable=!1
const t=o.length
for(let n=0;n<t;n++)e.reset(o[n]),this.emit("after-remove",e)
O.release(e)}}if(n&&n.length){if(i){const e=[]
for(const t of n){const n=i.ensureType(t)
null==n&&null!=t||e.push(n)}n=e}const t=this.hasEventListener("before-add"),s=this.hasEventListener("after-add"),o=e===this.length
if(t||s){const i=O.acquire()
i.target=this,i.cancellable=!0
const a=O.acquire()
a.target=this,a.cancellable=!1
for(const l of n)t?(i.reset(l),this.emit("before-add",i),i.defaultPrevented||(o?r.push(l):r.splice(e++,0,l),this._set("length",r.length),s&&(a.reset(l),this.emit("after-add",a)))):(o?r.push(l):r.splice(e++,0,l),this._set("length",r.length),a.reset(l),this.emit("after-add",a))
O.release(a),O.release(i)}else{if(o)for(const e of n)r.push(e)
else r.splice(e,0,...n)
this._set("length",r.length)}}return(n&&n.length||o&&o.length)&&this._notifyChangeEvent(n,o),o}_emitBeforeChanges(e){let t=!1
if(this.hasEventListener("before-changes")){const n=O.acquire()
n.target=this,n.cancellable=!0,n.type=e,this.emit("before-changes",n),t=n.defaultPrevented,O.release(n)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=O.acquire()
t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),O.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return
const e=this._notifications
this._notifications=null
for(const t of e){const e=t.changes
x.clear(),S.clear(),M.clear()
for(const{added:t,removed:n}of e){if(t)if(0===M.size&&0===S.size)for(const e of t)x.add(e)
else for(const e of t)S.has(e)?(M.add(e),S.delete(e)):M.has(e)||x.add(e)
if(n)if(0===M.size&&0===x.size)for(const e of n)S.add(e)
else for(const e of n)x.has(e)?x.delete(e):(M.delete(e),S.add(e))}const n=s.a.acquire()
x.forEach(e=>{n.push(e)})
const r=s.a.acquire()
S.forEach(e=>{r.push(e)})
const i=this._items,o=t.items,a=s.a.acquire()
if(M.forEach(e=>{o.indexOf(e)!==i.indexOf(e)&&a.push(e)}),t.listeners&&(n.length||r.length||a.length)){const e={target:this,added:n,removed:r,moved:a},i=t.listeners.length
for(let n=0;n<i;n++){const r=t.listeners[n]
r.removed||r.callback.call(this,e)}}s.a.release(n),s.a.release(r),s.a.release(a)}x.clear(),S.clear(),M.clear()}}
I.ofType=e=>{if(!e)return r
if(E.has(e))return E.get(e)
let t=null
if("function"==typeof e)t=e.prototype.declaredClass
else if(e.base)t=e.base.prototype.declaredClass
else for(const n in e.typeMap){const r=e.typeMap[n].prototype.declaredClass
t?t+=" | "+r:t=r}let n=class extends r{}
return Object(i.a)([Object(p.a)({Type:e,ensureType:"function"==typeof e?Object(f.m)(e):Object(f.k)(e)})],n.prototype,"itemType",void 0),n=Object(i.a)([Object(b.a)(`esri.core.Collection<${t}>`)],n),E.set(e,n),n},Object(i.a)([Object(h.b)()],I.prototype,"length",void 0),Object(i.a)([Object(h.b)()],I.prototype,"items",null),I=r=Object(i.a)([Object(b.a)("esri.core.Collection")],I)
const k=I},879:function(e,t,n){"use strict"
var r,i,s
let o
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d}))
const a=null!=(r=null==(i=globalThis.esriConfig)?void 0:i.locale)?r:null==(s=globalThis.dojoConfig)?void 0:s.locale
function l(){var e,t
return null!=(e=null!=a?a:null==(t=globalThis.navigator)?void 0:t.language)?e:"en"}function c(){return void 0===o&&(o=l()),o}const u=[]
function d(e){return u.push(e),{remove(){u.splice(u.indexOf(e),1)}}}const h=[]
function f(e){return h.push(e),{remove(){u.splice(h.indexOf(e),1)}}}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",(function(){const e=null!=void 0?void 0:l()
o!==e&&(o=e,[...h].forEach(t=>{t.call(null,e)}),[...u].forEach(t=>{t.call(null,e)}))}))},880:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(859),i=n(1181)
const s=Object.prototype.toString
function o(e){const t="__accessorMetadata__"in e?Object(r.m)(e):e
return function(...e){if(e.push(t),"number"==typeof e[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16")
return a.apply(this,e)}}function a(e,t,n,r){Object(i.b)(e,t).cast=r}function l(...e){if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===s.call(e[0])?o(e[0]):1===e.length&&"string"==typeof e[0]?function(e){return function(t,n){Object(i.b)(t,e).cast=t[n]}}(e[0]):void 0}},881:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return M})),n.d(t,"i",(function(){return K})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return j})),n.d(t,"n",(function(){return E})),n.d(t,"o",(function(){return I})),n.d(t,"p",(function(){return U})),n.d(t,"q",(function(){return $})),n.d(t,"r",(function(){return F})),n.d(t,"s",(function(){return z})),n.d(t,"t",(function(){return ee})),n.d(t,"u",(function(){return G})),n.d(t,"v",(function(){return g})),n.d(t,"w",(function(){return H})),n.d(t,"x",(function(){return X}))
var r,i,s=n(354),o=n(20),a=n(109);(i=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"
var l=n(907)
const c=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],u=["field","normalizationField"]
function d(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(h(c,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)h(u,e,t)}function h(e,t,n){if(e)for(const r of e){const e=Object(a.b)(r,t),i=e&&"function"!=typeof e&&n.get(e)
i&&Object(a.c)(r,i.name,t)}}function f(e,t){if(null!=e&&null!=t&&t.fields.length)if("startField"in e){const n=t.get(e.startField),r=t.get(e.endField)
e.startField=n&&n.name||null,e.endField=r&&r.name||null}else{const n=t.get(e.startTimeField),r=t.get(e.endTimeField)
e.startTimeField=n&&n.name||null,e.endTimeField=r&&r.name||null}}const p=new Set
function b(e,t){return e&&t?(p.clear(),m(p,e,t),Array.from(p).sort()):[]}function m(e,t,n){var r
if(n)if(null!=t&&null!=(r=t.fields)&&r.length)if(n.includes("*"))for(const{name:n}of t.fields)e.add(n)
else for(const r of n)y(e,t,r)
else{if(n.includes("*"))return e.clear(),void e.add("*")
for(const t of n)e.add(t)}}function y(e,t,n){if("string"==typeof n)if(t){const r=t.get(n)
r&&e.add(r.name)}else e.add(n)}function g(e,t){return Object(o.j)(t)||Object(o.j)(e)?[]:t.includes("*")?e.fields.map(e=>e.name):t}async function O(e,t,n){var r
if(!n)return
const{arcadeUtils:i}=await Object(l.e)(),s=i.extractFieldNames(n,null==t||null==(r=t.fields)?void 0:r.map(e=>e.name))
for(const n of s)y(e,t,n)}async function v(e,t,r){if(r&&"1=1"!==r){const i=(await Promise.all([n.e(9),n.e(381)]).then(n.bind(null,1263))).WhereClause.create(r,t)
if(!i.isStandardized)throw new s.a("fieldUtils:collectFilterFields","Where clause is not standardized")
m(e,t,i.fieldNames)}}function j({displayField:e,fields:t}){return e||(t&&t.length?w(t,"name-or-title")||w(t,"unique-identifier")||w(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue
const e=t.name.toLowerCase()
if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function w(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name
return null}async function _(e,t){if(!t)return
const n=Object(a.b)("elevationInfo.featureExpressionInfo",t)
return n?n.collectRequiredFields(e,t.fieldsIndex):void 0}async function x(e,t,n){var r,i
if(!t||!n||"cluster"!==n.type)return
const s=[]
if(null!=(r=n.popupTemplate)&&r.expressionInfos&&s.push(...n.popupTemplate.expressionInfos.map(n=>O(e,t.fieldsIndex,n.expression))),Array.isArray(null==(i=n.popupTemplate)?void 0:i.content)){const r=n.popupTemplate.content
for(const n of r)"expression"===n.type&&n.expressionInfo&&s.push(O(e,t.fieldsIndex,n.expressionInfo.expression))}n.fields&&s.push(...n.fields.map(n=>async function(e,t,n){n.outStatistic.onStatisticValueExpression?O(e,t,n.outStatistic.onStatisticValueExpression):e.add(n.outStatistic.onStatisticField)}(e,t.fieldsIndex,n))),await Promise.all(s)}async function S(e,t,n){t&&(t.timeInfo&&Object(o.k)(n)&&n.timeExtent&&m(e,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),t.floorInfo&&m(e,t.fieldsIndex,[t.floorInfo.floorField]),Object(o.k)(n)&&Object(o.k)(n.where)&&await v(e,t.fieldsIndex,n.where))}async function M(e,t,n){t&&n&&await Promise.all(n.map(n=>async function(e,t,n){t&&n&&(n.valueExpression?await O(e,t.fieldsIndex,n.valueExpression):n.field&&y(e,t.fieldsIndex,n.field))}(e,t,n)))}function E(e){if(!e)return[]
const t="editFieldsInfo"in e&&e.editFieldsInfo
return t?b(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}async function L(e,t){const{labelingInfo:n,fieldsIndex:r}=t
n&&n.length&&await Promise.all(n.map(t=>async function(e,t,n){if(!n)return
const r=n.getLabelExpression(),i=n.where
if("arcade"===r.type)await O(e,t,r.expression)
else{const n=r.expression.match(/{[^}]*}/g)
n&&n.forEach(n=>{y(e,t,n.slice(1,-1))})}await v(e,t,i)}(e,r,t)))}function I(e){const t=e.defaultValue
return void 0!==t&&V(e,t)?t:e.nullable?null:void 0}function k(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function C(e){return null===e||k(e)}const A="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e
function T(e){return null===e||A(e)}function P(e){return null!=e&&"string"==typeof e}function R(e){return null===e||P(e)}function N(){return!0}function V(e,t){let n
switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?T:A
break
case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?C:k
break
case"string":case"esriFieldTypeString":n=e.nullable?R:P
break
default:n=N}return 1===arguments.length?n:n(t)}const z=["integer","small-integer","single","double"],D=new Set([...z,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"])
function $(e){return null!=e&&D.has(e.type)}function F(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function U(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var q,B
function G(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function H(e,t){return e.nullable&&null===t?null:$(e)&&!function(e,t){const n="string"==typeof e?W(e):e
return!!n&&(n.isInteger?A(t)&&t>=n.min&&t<=n.max:t>=n.min&&t<=n.max)}(e.type,Number(t))?q.OUT_OF_RANGE:V(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue
if(+t<n||+t>i)return r.VALUE_OUT_OF_RANGE
break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(e=>null==e||e.code!==t))return r.INVALID_CODED_VALUE}return null}(e.domain,t):null:B.INVALID_TYPE}function W(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return J
case"esriFieldTypeInteger":case"integer":return Z
case"esriFieldTypeSingle":case"single":return Y
case"esriFieldTypeDouble":case"double":return Q}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(q||(q={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(B||(B={}))
const J={min:-32768,max:32767,isInteger:!0},Z={min:-2147483648,max:2147483647,isInteger:!0},Y={min:-34e37,max:12e37,isInteger:!1},Q={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1}
function X(e,t,n){switch(e){case r.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case r.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`
case B.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`
case q.OUT_OF_RANGE:{const{min:e,max:r}=W(t.type)
return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`}}}function K(e,t){return!ee(e,t,null)}function ee(e,t,n){if(!t||!t.attributes||!e){if(Object(o.k)(n))for(const t of e)n.add(t)
return!0}const r=t.attributes
let i=!1
for(const t of e)if(!(t in r)){if(i=!0,!Object(o.k)(n))break
n.add(t)}return i}},883:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var r,i=n(856),s=n(178),o=n(858),a=(n(859),n(857)),l=n(864),c=n(658),u=n(875),d=n(866),h=n(659),f=n(929),p=n(909)
let b=r=class extends u.a{constructor(...e){super(...e),this.paths=[],this.type="polyline"}normalizeCtorArgs(e,t){let n,r,i=null,s=null
return e&&!Array.isArray(e)?(i=e.paths?e.paths:null,t||(e.spatialReference?t=e.spatialReference:e.paths||(t=e)),n=e.hasZ,r=e.hasM):i=e,i=i||[],t=t||h.default.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),s=i[0]&&i[0][0],s&&(void 0===n&&void 0===r?(n=s.length>2,r=!1):void 0===n?n=!r&&s.length>3:void 0===r&&(r=!n&&s.length>3)),{paths:i,spatialReference:t,hasZ:n,hasM:r}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:e}=this,t=Object(f.c)(this)
if(!t)return null
const n=new c.default(t)
return n.spatialReference=e,n}writePaths(e,t){t.paths=Object(s.a)(this.paths)}addPath(e){if(!e)return
const t=this.paths,n=t.length
if(function(e){return!Array.isArray(e[0])}(e)){const r=[]
for(let t=0,n=e.length;t<n;t++)r[t]=e[t].toArray()
t[n]=r}else t[n]=e.concat()
return this.notifyChange("paths"),this}clone(){const e=new r
return e.spatialReference=this.spatialReference,e.paths=Object(s.a)(this.paths),e.hasZ=this.hasZ,e.hasM=this.hasM,e}getPoint(e,t){if(!this._validateInputs(e,t))return null
const n=this.paths[e][t],r=this.hasZ,i=this.hasM
return r&&!i?new d.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new d.a(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new d.a(n[0],n[1],n[2],n[3],this.spatialReference):new d.a(n[0],n[1],this.spatialReference)}insertPoint(e,t,n){return this._validateInputs(e,t,!0)?(Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[e].splice(t,0,n),this.notifyChange("paths"),this):this}removePath(e){if(!this._validateInputs(e,null))return null
const t=this.paths.splice(e,1)[0],n=this.spatialReference,r=t.map(e=>new d.a(e,n))
return this.notifyChange("paths"),r}removePoint(e,t){if(!this._validateInputs(e,t))return null
const n=new d.a(this.paths[e].splice(t,1)[0],this.spatialReference)
return this.notifyChange("paths"),n}setPoint(e,t,n){return this._validateInputs(e,t)?(Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[e][t]=n,this.notifyChange("paths"),this):this}_validateInputs(e,t,n=!1){if(null==e||e<0||e>=this.paths.length)return!1
if(null!=t){const r=this.paths[e]
if(n&&(t<0||t>r.length))return!1
if(!n&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}}
Object(i.a)([Object(o.b)({readOnly:!0})],b.prototype,"cache",null),Object(i.a)([Object(o.b)({readOnly:!0})],b.prototype,"extent",null),Object(i.a)([Object(o.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],b.prototype,"paths",void 0),Object(i.a)([Object(l.a)("paths")],b.prototype,"writePaths",null),b=r=Object(i.a)([Object(a.a)("esri.geometry.Polyline")],b),b.prototype.toJSON.isDefaultToJSON=!0
const m=b},884:function(e,t,n){"use strict"
n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return o})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return C})),n.d(t,"p",(function(){return P})),n.d(t,"q",(function(){return f})),n.d(t,"r",(function(){return h})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return u})),n.d(t,"u",(function(){return c})),n.d(t,"v",(function(){return y})),n.d(t,"w",(function(){return L})),n.d(t,"x",(function(){return M})),n.d(t,"y",(function(){return w})),n.d(t,"z",(function(){return j})),n.d(t,"A",(function(){return T})),n.d(t,"B",(function(){return k})),n.d(t,"C",(function(){return d})),n.d(t,"D",(function(){return m}))
n(77)
var r=n(874),i=n(20),s=n(658)
function o(e=V){return[e[0],e[1],e[2],e[3]]}function a(e){return[e[0],e[1],e[2],e[3]]}function l(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}function c(e,t,n,r,i=o()){return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function u(e,t=o()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function d(e,t){return new s.default({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function h(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function f(e,t,n){if(Object(i.j)(t))l(n,e)
else if("length"in t)A(t)?(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[2]),n[3]=Math.max(e[3],t[3])):2!==t.length&&3!==t.length||(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.max(e[2],t[0]),n[3]=Math.max(e[3],t[1]))
else switch(t.type){case"extent":n[0]=Math.min(e[0],t.xmin),n[1]=Math.min(e[1],t.ymin),n[2]=Math.max(e[2],t.xmax),n[3]=Math.max(e[3],t.ymax)
break
case"point":n[0]=Math.min(e[0],t.x),n[1]=Math.min(e[1],t.y),n[2]=Math.max(e[2],t.x),n[3]=Math.max(e[3],t.y)}}function p(e,t,n=e){const r=t.length
let i=e[0],s=e[1],o=e[2],a=e[3]
for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),s=Math.min(s,n[1]),o=Math.max(o,n[0]),a=Math.max(a,n[1])}return n[0]=i,n[1]=s,n[2]=o,n[3]=a,n}function b(e){for(let t=0;t<4;t++)if(!isFinite(e[t]))return!1
return!0}function m(e){return Object(i.j)(e)||e[0]>=e[2]?0:e[2]-e[0]}function y(e){return e[1]>=e[3]?0:e[3]-e[1]}function g(e){return m(e)*y(e)}function O(e,t=[0,0]){return t[0]=(e[0]+e[2])/2,t[1]=(e[1]+e[3])/2,t}function v(e,t){return x(e,t[0],t[1])}function j(e,t){const n=t[3],r=.5*(e[0]+e[2]),i=Math.abs(t[0]-r),s=.5*(e[2]-e[0])
if(i>n+s)return!1
const o=.5*(e[1]+e[3]),a=.5*(e[3]-e[1]),l=Math.abs(t[1]-o)
if(l>n+a)return!1
if(i<s||l<a)return!0
const c=i-s,u=l-a
return c*c+u*u<=n*n}function w(e,t,n){const r=e[0],i=e[1],s=e[2],o=e[3],{x:a,y:l}=t,{x:c,y:u}=n,d=(e,t)=>(u-l)*e+(a-c)*t+(c*l-a*u)<0,h=d(r,o),f=d(s,o),p=d(s,i),b=d(r,i)
return!(h===f&&f===p&&p===b&&b===h||a<r&&c<r||a>s&&c>s||l>o&&u>o||l<i&&u<i)}function _(e,t){return x(e,t.x,t.y)}function x(e,t,n){return t>=e[0]&&n>=e[1]&&t<=e[2]&&n<=e[3]}function S(e,t,n){return t[0]>=e[0]-n&&t[1]>=e[1]-n&&t[0]<=e[2]+n&&t[1]<=e[3]+n}function M(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function E(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function L(e,t,n){if(Object(i.j)(t))return l(n,e)
const s=t[0],o=t[1],a=t[2],c=t[3]
return n[0]=Object(r.f)(e[0],s,a),n[1]=Object(r.f)(e[1],o,c),n[2]=Object(r.f)(e[2],s,a),n[3]=Object(r.f)(e[3],o,c),n}function I(e,t){const n=(e[0]+e[2])/2,r=(e[1]+e[3])/2,i=Math.max(Math.abs(t[0]-n)-m(e)/2,0),s=Math.max(Math.abs(t[1]-r)-y(e)/2,0)
return Math.sqrt(i*i+s*s)}function k(e,t,n,r=e){return r[0]=e[0]+t,r[1]=e[1]+n,r[2]=e[2]+t,r[3]=e[3]+n,r}function C(e){return e?l(e,N):o(N)}function A(e){return null!=e&&4===e.length}function T(e){return!(0!==m(e)&&isFinite(e[0])||0!==y(e)&&isFinite(e[1]))}function P(e,t){return A(e)&&A(t)?e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]:e===t}const R=[-1/0,-1/0,1/0,1/0],N=[1/0,1/0,-1/0,-1/0],V=[0,0,0,0]},885:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n(856),i=n(862),s=n(878),o=n(20),a=n(858),l=n(857)
let c=class extends i.a{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0
return this._groups.forEach(t=>{e+=t.length}),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!s.a.isCollection(e))return this
const n=this._getOrCreateGroup(t)
return Array.isArray(e)||s.a.isCollection(e)?e.forEach(e=>this._isHandle(e)&&n.push(e)):n.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach(t=>t.forEach(e))
else{const n=this._getGroup(e)
n&&t&&n.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||s.a.isCollection(e))return e.forEach(this.remove,this),this
if(!this.has(e))return this
const t=this._getGroup(e)
for(let e=0;e<t.length;e++)t[e].remove()
return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach(e=>{for(let t=0;t<e.length;t++)e[t].remove()}),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e)
const t=[]
return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return Object(o.c)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}}
Object(r.a)([Object(a.b)({readOnly:!0})],c.prototype,"size",null),c=Object(r.a)([Object(l.a)("esri.core.Handles")],c)
const u=c},886:function(e,t,n){"use strict"
n.d(t,"a",(function(){return G})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return U})),n.d(t,"e",(function(){return N})),n.d(t,"f",(function(){return R})),n.d(t,"g",(function(){return T})),n.d(t,"h",(function(){return D})),n.d(t,"i",(function(){return P})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return _})),n.d(t,"l",(function(){return C})),n.d(t,"m",(function(){return H})),n.d(t,"n",(function(){return k})),n.d(t,"o",(function(){return E})),n.d(t,"p",(function(){return L})),n.d(t,"q",(function(){return I})),n.d(t,"r",(function(){return S})),n.d(t,"s",(function(){return M})),n.d(t,"t",(function(){return A})),n.d(t,"u",(function(){return j})),n(77)
var r=n(863),i=n(20),s=n(915),o=n(659),a=n(902),l=n(872),c=n(1027)
const u=39.37,d=a.a.radius*Math.PI/200,h=/UNIT\[([^\]]+)\]\]$/i,f=c.a,p=/UNIT\[([^\]]+)\]/i,b=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),m=Object(r.b)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),y=e=>e*e,g=e=>e*e*e,O={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:y(.001)},"square-centimeters":{inBaseUnits:y(.01)},"square-decimeters":{inBaseUnits:y(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:y(1e3)},"square-inches":{inBaseUnits:y(.0254)},"square-feet":{inBaseUnits:y(.3048)},"square-yards":{inBaseUnits:y(.9144)},"square-miles":{inBaseUnits:y(1609.344)},"square-us-feet":{inBaseUnits:y(1200/3937)},acres:{inBaseUnits:.0015625*y(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*g(.001)},"cubic-centimeters":{inBaseUnits:1e3*g(.01)},"cubic-decimeters":{inBaseUnits:1e3*g(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*g(1e3)},"cubic-inches":{inBaseUnits:1e3*g(.0254)},"cubic-feet":{inBaseUnits:1e3*g(.3048)},"cubic-yards":{inBaseUnits:1e3*g(.9144)},"cubic-miles":{inBaseUnits:1e3*g(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},v=function(){const e={}
for(const t in O)for(const n in O[t].units)e[n]=t
return e}()
function j(e){const t=v[e]
if(t)return t
throw new Error("unknown type")}function w(e){return function(e){return O[e].baseUnit}(j(e))}function _(e,t=null){return t=t||j(e),O[t].baseUnit===e}function x(e,t,n){if(t===n)return e
const r=j(t)
if(r!==j(n))throw new Error("incompatible units")
const i=_(t,r)?e:function(e,t,n){return e*O[n].units[t].inBaseUnits}(e,t,r)
return _(n,r)?i:function(e,t,n){return e/O[n].units[t].inBaseUnits}(i,n,r)}function S(e,t){return x(e,t,"meters")<3e3?"meters":"kilometers"}function M(e,t){return x(e,t,"meters")<1e5?"meters":"kilometers"}function E(e,t){return x(e,t,"feet")<1e3?"feet":"miles"}function L(e,t){return x(e,t,"feet")<1e5?"feet":"miles"}function I(e,t){return x(e,t,"square-meters")<3e6?"square-meters":"square-kilometers"}function k(e,t){return x(e,t,"square-feet")<1e6?"square-feet":"square-miles"}function C(e,t,n){return x(e,t,"meters")/(n*Math.PI/180)}function A(e){return m.fromJSON(e.toLowerCase())||null}function T(e){if(e&&"object"==typeof e&&!Object(l.g)(e))return 1
const t=R(e)
return t>1e5?1:t}function P(e){return R(e)>=(e instanceof o.default?Object(s.e)(e).metersPerDegree:1e5)?"meters":D(e)}function R(e,t=a.a.metersPerDegree){return N(e,!0)||t}function N(e,t=!1){let n,r,i=null
if(null!=e&&("object"==typeof e?(n=e.wkid,r=e.wkt):"number"==typeof e?n=e:"string"==typeof e&&(r=e)),n){if(Object(l.n)(n))return a.b.metersPerDegree
if(Object(l.o)(n))return a.c.metersPerDegree
i=f.values[f[n]],!i&&t&&b.has(n)&&(i=d)}else r&&(F(r)?i=V(h.exec(r),i):$(r)&&(i=V(p.exec(r),i)))
return i}function V(e,t){return e&&e[1]?z(e[1]):t}function z(e){return parseFloat(e.split(",")[1])}function D(e){let t,n,r=null
if(null!=e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)r=f.units[f[t]]
else if(n){const e=F(n)?h:$(n)?p:null
if(e){const t=e.exec(n)
t&&t[1]&&(r=function(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e)
let n=t&&t[1]
if(!n||-1===f.units.indexOf(n)){const t=z(e)
n=null
const r=f.values
for(let e=0;e<r.length;++e)if(Math.abs(t-r[e])<1e-7){n=f.units[e]
break}}return n}(t[1]))}}return Object(i.k)(r)?A(r):null}function $(e){return/^GEOCCS/i.test(e)}function F(e){return/^PROJCS/i.test(e)}function U(e){if(!e)return null
switch(D(e)){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial"
case"50-kilometers":case"150-kilometers":case"meters":return"metric"
case null:case void 0:return null}return null}const q={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},B={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},G=Object(r.b)()(q),H=Object(r.b)()(B)
Object(r.b)()({...q,...B})},888:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}))
var r=n(863)
function i(e){return"point"===e||"multipoint"===e||"polyline"===e||"polygon"===e}const s=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),o=Object(r.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},889:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var r,i=n(856),s=n(178),o=n(858),a=(n(859),n(857)),l=n(864),c=n(658),u=n(875),d=n(866),h=n(909)
function f(e){return(t,n)=>null==t?n:null==n?t:e(t,n)}let p=r=class extends u.a{constructor(...e){super(...e),this.points=[],this.type="multipoint"}normalizeCtorArgs(e,t){if(!e&&!t)return null
const n={}
Array.isArray(e)?(n.points=e,n.spatialReference=t):function(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}(e)?n.spatialReference=e:(e.points&&(n.points=e.points),e.spatialReference&&(n.spatialReference=e.spatialReference),e.hasZ&&(n.hasZ=e.hasZ),e.hasM&&(n.hasM=e.hasM))
const r=n.points&&n.points[0]
return r&&(void 0===n.hasZ&&void 0===n.hasM?(n.hasZ=r.length>2,n.hasM=!1):void 0===n.hasZ?n.hasZ=r.length>3:void 0===n.hasM&&(n.hasM=r.length>3)),n}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const e=this.points
if(!e.length)return null
const t=new c.default,n=this.hasZ,r=this.hasM,i=n?3:2,s=e[0],o=f(Math.min),a=f(Math.max)
let l,u,d,h,[p,b]=s,[m,y]=s
for(let t=0,s=e.length;t<s;t++){const s=e[t],[c,f]=s
if(p=o(p,c),b=o(b,f),m=a(m,c),y=a(y,f),n&&s.length>2){const e=s[2]
l=o(l,e),d=a(d,e)}if(r&&s.length>i){const e=s[i]
u=o(u,e),h=a(h,e)}}return t.xmin=p,t.ymin=b,t.xmax=m,t.ymax=y,t.spatialReference=this.spatialReference,n?(t.zmin=l,t.zmax=d):(t.zmin=null,t.zmax=null),r?(t.mmin=u,t.mmax=h):(t.mmin=null,t.mmax=null),t}writePoints(e,t){t.points=Object(s.a)(this.points)}addPoint(e){return Object(h.a)(this,e),Array.isArray(e)?this.points.push(e):this.points.push(e.toArray()),this.notifyChange("points"),this}clone(){const e={points:Object(s.a)(this.points),spatialReference:this.spatialReference}
return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),new r(e)}getPoint(e){if(!this._validateInputs(e))return null
const t=this.points[e],n={x:t[0],y:t[1],spatialReference:this.spatialReference}
let r=2
return this.hasZ&&(n.z=t[2],r=3),this.hasM&&(n.m=t[r]),new d.a(n)}removePoint(e){if(!this._validateInputs(e))return null
const t=new d.a(this.points.splice(e,1)[0],this.spatialReference)
return this.notifyChange("points"),t}setPoint(e,t){return this._validateInputs(e)?(Object(h.a)(this,t),Array.isArray(t)||(t=t.toArray()),this.points[e]=t,this.notifyChange("points"),this):this}toJSON(e){return this.write({},e)}_validateInputs(e){return null!=e&&e>=0&&e<this.points.length}}
Object(i.a)([Object(o.b)({readOnly:!0})],p.prototype,"cache",null),Object(i.a)([Object(o.b)()],p.prototype,"extent",null),Object(i.a)([Object(o.b)({type:[[Number]],json:{write:{isRequired:!0}}})],p.prototype,"points",void 0),Object(i.a)([Object(l.a)("points")],p.prototype,"writePoints",null),p=r=Object(i.a)([Object(a.a)("esri.geometry.Multipoint")],p),p.prototype.toJSON.isDefaultToJSON=!0
const b=p},890:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(856),i=n(862),s=n(923),o=n(857)
class a{constructor(){this._emitter=new a.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this.target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const n=this._listenersMap&&this._listenersMap.get(e)
if(!n)return!1
const r=this.target||this
return[...n].forEach(e=>{e.call(r,t)}),n.length>0}on(e,t){if(Array.isArray(e)){const n=e.map(e=>this.on(e,t))
return Object(s.b)(n)}if(e.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported")
this._listenersMap||(this._listenersMap=new Map)
const n=this._listenersMap.get(e)||[]
return n.push(t),this._listenersMap.set(e,n),{remove:()=>{const n=this._listenersMap&&this._listenersMap.get(e)||[],r=n.indexOf(t)
r>=0&&n.splice(r,1)}}}once(e,t){const n=this.on(e,e=>{n.remove(),t.call(null,e)})
return n}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e)
return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let n=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
return n=Object(r.a)([Object(o.a)("esri.core.Evented")],n),n}
let n=class extends i.a{constructor(){super(...arguments),this._emitter=new a.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}
n=Object(r.a)([Object(o.a)("esri.core.Evented")],n),e.EventedAccessor=n}(a||(a={}))
const l=a},892:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return h}))
var r=n(932),i=n(923),s=n(20),o=n(861),a=n(1007)
function l(e,t,n={}){return u(e,t,n,f)}function c(e,t,n={}){return u(e,t,n,p)}function u(e,t,n={},r){let i=null
const o=n.once?(e,n)=>{r(e)&&(Object(s.s)(i),t(e,n))}:(e,n)=>{r(e)&&t(e,n)}
if(i=Object(a.e)(e,o,n.sync,n.equals),n.initial){const t=e()
o(t,t)}return i}function d(e,t,n,o={}){let a=null,c=null,u=null
function d(){a&&c&&(c.remove(),null==o.onListenerRemove||o.onListenerRemove(a),a=null,c=null)}function h(e){o.once&&o.once&&Object(s.s)(u),n(e)}const f=l(e,(e,n)=>{d(),Object(r.b)(e)&&(a=e,c=Object(r.c)(e,t,h),null==o.onListenerAdd||o.onListenerAdd(e))},{sync:o.sync,initial:!0})
return u=Object(i.c)(()=>{f.remove(),d()}),u}function h(e,t){return function(e,t,n){if(Object(o.n)(n))return Promise.reject(Object(o.e)())
const r=e()
if(null!=t&&t(r))return Promise.resolve(r)
let a=null
function l(){a=Object(s.s)(a)}return new Promise((r,s)=>{a=Object(i.b)([Object(o.q)(n,()=>{l(),s(Object(o.e)())}),u(e,e=>{l(),r(e)},{sync:!1,once:!0},null!=t?t:f)])})}(e,p,t)}function f(e){return!0}function p(e){return!!e}n(958)
const b={sync:!0},m={initial:!0},y={sync:!0,initial:!0}},893:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}))
const r=1e-6,i=Math.random,s=Math.PI/180,o=180/Math.PI
function a(e){return e*s}Object.freeze({__proto__:null,EPSILON:r,RANDOM:i,toRadian:a,toDegree:function(e){return e*o},equals:function(e,t){return Math.abs(e-t)<=r*Math.max(1,Math.abs(e),Math.abs(t))}})},894:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var r,i=n(856),s=n(860),o=n(20),a=n(934),l=n(858),c=(n(353),n(77),n(859),n(865)),u=n(857),d=n(864)
let h=r=class extends s.a{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return f}static get empty(){return p}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new r({end:this.end,start:this.start})}equals(e){if(!e)return!1
const t=Object(o.k)(this.start)?this.start.getTime():this.start,n=Object(o.k)(this.end)?this.end.getTime():this.end,r=Object(o.k)(e.start)?e.start.getTime():e.start,i=Object(o.k)(e.end)?e.end.getTime():e.end
return t===r&&n===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone()
const t=Object(o.b)(this.start,t=>Object(a.c)(t,e)),n=Object(o.b)(this.end,t=>Object(a.b)(Object(a.c)(t,e),1,e))
return new r({start:t,end:n})}intersection(e){if(!e)return this.clone()
if(this.isEmpty||e.isEmpty)return r.empty
if(this.isAllTime)return e.clone()
if(e.isAllTime)return this.clone()
const t=Object(o.n)(this.start,-1/0,e=>e.getTime()),n=Object(o.n)(this.end,1/0,e=>e.getTime()),i=Object(o.n)(e.start,-1/0,e=>e.getTime()),s=Object(o.n)(e.end,1/0,e=>e.getTime())
let a,l
if(i>=t&&i<=n?a=i:t>=i&&t<=s&&(a=t),n>=i&&n<=s?l=n:s>=t&&s<=n&&(l=s),!isNaN(a)&&!isNaN(l)){const e=new r
return e.start=a===-1/0?null:new Date(a),e.end=l===1/0?null:new Date(l),e}return r.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone()
const n=new r,{start:i,end:s}=this
return Object(o.k)(i)&&(n.start=Object(a.b)(i,e,t)),Object(o.k)(s)&&(n.end=Object(a.b)(s,e,t)),n}union(e){if(!e||e.isEmpty)return this.clone()
if(this.isEmpty)return e.clone()
if(this.isAllTime||e.isAllTime)return f.clone()
const t=Object(o.k)(this.start)&&Object(o.k)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,n=Object(o.k)(this.end)&&Object(o.k)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null
return new r({start:t,end:n})}}
Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"end",void 0),Object(i.a)([Object(c.a)("end")],h.prototype,"readEnd",null),Object(i.a)([Object(d.a)("end")],h.prototype,"writeEnd",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],h.prototype,"isAllTime",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],h.prototype,"isEmpty",null),Object(i.a)([Object(l.b)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"start",void 0),Object(i.a)([Object(c.a)("start")],h.prototype,"readStart",null),Object(i.a)([Object(d.a)("start")],h.prototype,"writeStart",null),h=r=Object(i.a)([Object(u.a)("esri.TimeExtent")],h)
const f=new h,p=new h({start:void 0,end:void 0}),b=h},896:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return a})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return S})),n.d(t,"m",(function(){return M})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return L})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return T})),n.d(t,"r",(function(){return E})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return o})),n.d(t,"u",(function(){return l})),n.d(t,"v",(function(){return g})),n.d(t,"w",(function(){return A})),n.d(t,"x",(function(){return C})),n.d(t,"y",(function(){return I})),n.d(t,"z",(function(){return v}))
var r=n(867),i=n(893)
function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function o(e,t,n,r,i,s,o,a,l,c,u,d,h,f,p,b,m){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=s,e[5]=o,e[6]=a,e[7]=l,e[8]=c,e[9]=u,e[10]=d,e[11]=h,e[12]=f,e[13]=p,e[14]=b,e[15]=m,e}function a(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function l(e,t){if(e===t){const n=t[1],r=t[2],i=t[3],s=t[6],o=t[7],a=t[11]
e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=s,e[11]=t[14],e[12]=i,e[13]=o,e[14]=a}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15]
return e}function c(e,t){const n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],b=t[13],m=t[14],y=t[15],g=n*a-r*o,O=n*l-i*o,v=n*c-s*o,j=r*l-i*a,w=r*c-s*a,_=i*c-s*l,x=u*b-d*p,S=u*m-h*p,M=u*y-f*p,E=d*m-h*b,L=d*y-f*b,I=h*y-f*m
let k=g*I-O*L+v*E+j*M-w*S+_*x
return k?(k=1/k,e[0]=(a*I-l*L+c*E)*k,e[1]=(i*L-r*I-s*E)*k,e[2]=(b*_-m*w+y*j)*k,e[3]=(h*w-d*_-f*j)*k,e[4]=(l*M-o*I-c*S)*k,e[5]=(n*I-i*M+s*S)*k,e[6]=(m*v-p*_-y*O)*k,e[7]=(u*_-h*v+f*O)*k,e[8]=(o*L-a*M+c*x)*k,e[9]=(r*M-n*L-s*x)*k,e[10]=(p*w-b*v+y*g)*k,e[11]=(d*v-u*w-f*g)*k,e[12]=(a*S-o*E-l*x)*k,e[13]=(n*E-r*S+i*x)*k,e[14]=(b*O-p*j-m*g)*k,e[15]=(u*j-d*O+h*g)*k,e):null}function u(e,t,n){const r=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=t[9],f=t[10],p=t[11],b=t[12],m=t[13],y=t[14],g=t[15]
let O=n[0],v=n[1],j=n[2],w=n[3]
return e[0]=O*r+v*a+j*d+w*b,e[1]=O*i+v*l+j*h+w*m,e[2]=O*s+v*c+j*f+w*y,e[3]=O*o+v*u+j*p+w*g,O=n[4],v=n[5],j=n[6],w=n[7],e[4]=O*r+v*a+j*d+w*b,e[5]=O*i+v*l+j*h+w*m,e[6]=O*s+v*c+j*f+w*y,e[7]=O*o+v*u+j*p+w*g,O=n[8],v=n[9],j=n[10],w=n[11],e[8]=O*r+v*a+j*d+w*b,e[9]=O*i+v*l+j*h+w*m,e[10]=O*s+v*c+j*f+w*y,e[11]=O*o+v*u+j*p+w*g,O=n[12],v=n[13],j=n[14],w=n[15],e[12]=O*r+v*a+j*d+w*b,e[13]=O*i+v*l+j*h+w*m,e[14]=O*s+v*c+j*f+w*y,e[15]=O*o+v*u+j*p+w*g,e}function d(e,t,n){const r=n[0],i=n[1],s=n[2]
let o,a,l,c,u,d,h,f,p,b,m,y
return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*s+t[12],e[13]=t[1]*r+t[5]*i+t[9]*s+t[13],e[14]=t[2]*r+t[6]*i+t[10]*s+t[14],e[15]=t[3]*r+t[7]*i+t[11]*s+t[15]):(o=t[0],a=t[1],l=t[2],c=t[3],u=t[4],d=t[5],h=t[6],f=t[7],p=t[8],b=t[9],m=t[10],y=t[11],e[0]=o,e[1]=a,e[2]=l,e[3]=c,e[4]=u,e[5]=d,e[6]=h,e[7]=f,e[8]=p,e[9]=b,e[10]=m,e[11]=y,e[12]=o*r+u*i+p*s+t[12],e[13]=a*r+d*i+b*s+t[13],e[14]=l*r+h*i+m*s+t[14],e[15]=c*r+f*i+y*s+t[15]),e}function h(e,t,n){const r=n[0],i=n[1],s=n[2]
return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function f(e,t,n,r){let s,o,a,l,c,u,d,h,f,p,b,m,y,g,O,v,j,w,_,x,S,M,E,L,I=r[0],k=r[1],C=r[2],A=Math.sqrt(I*I+k*k+C*C)
return A<i.a?null:(A=1/A,I*=A,k*=A,C*=A,s=Math.sin(n),o=Math.cos(n),a=1-o,l=t[0],c=t[1],u=t[2],d=t[3],h=t[4],f=t[5],p=t[6],b=t[7],m=t[8],y=t[9],g=t[10],O=t[11],v=I*I*a+o,j=k*I*a+C*s,w=C*I*a-k*s,_=I*k*a-C*s,x=k*k*a+o,S=C*k*a+I*s,M=I*C*a+k*s,E=k*C*a-I*s,L=C*C*a+o,e[0]=l*v+h*j+m*w,e[1]=c*v+f*j+y*w,e[2]=u*v+p*j+g*w,e[3]=d*v+b*j+O*w,e[4]=l*_+h*x+m*S,e[5]=c*_+f*x+y*S,e[6]=u*_+p*x+g*S,e[7]=d*_+b*x+O*S,e[8]=l*M+h*E+m*L,e[9]=c*M+f*E+y*L,e[10]=u*M+p*E+g*L,e[11]=d*M+b*E+O*L,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function p(e,t,n){const r=Math.sin(n),i=Math.cos(n),s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],u=t[9],d=t[10],h=t[11]
return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*i+c*r,e[5]=o*i+u*r,e[6]=a*i+d*r,e[7]=l*i+h*r,e[8]=c*i-s*r,e[9]=u*i-o*r,e[10]=d*i-a*r,e[11]=h*i-l*r,e}function b(e,t,n){const r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],a=t[2],l=t[3],c=t[8],u=t[9],d=t[10],h=t[11]
return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i-c*r,e[1]=o*i-u*r,e[2]=a*i-d*r,e[3]=l*i-h*r,e[8]=s*r+c*i,e[9]=o*r+u*i,e[10]=a*r+d*i,e[11]=l*r+h*i,e}function m(e,t,n){const r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],a=t[2],l=t[3],c=t[4],u=t[5],d=t[6],h=t[7]
return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i+c*r,e[1]=o*i+u*r,e[2]=a*i+d*r,e[3]=l*i+h*r,e[4]=c*i-s*r,e[5]=u*i-o*r,e[6]=d*i-a*r,e[7]=h*i-l*r,e}function y(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function g(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function O(e,t,n){let r,s,o,a=n[0],l=n[1],c=n[2],u=Math.sqrt(a*a+l*l+c*c)
return u<i.a?null:(u=1/u,a*=u,l*=u,c*=u,r=Math.sin(t),s=Math.cos(t),o=1-s,e[0]=a*a*o+s,e[1]=l*a*o+c*r,e[2]=c*a*o-l*r,e[3]=0,e[4]=a*l*o-c*r,e[5]=l*l*o+s,e[6]=c*l*o+a*r,e[7]=0,e[8]=a*c*o+l*r,e[9]=l*c*o-a*r,e[10]=c*c*o+s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function v(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function j(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function w(e,t,n){const r=t[0],i=t[1],s=t[2],o=t[3],a=r+r,l=i+i,c=s+s,u=r*a,d=r*l,h=r*c,f=i*l,p=i*c,b=s*c,m=o*a,y=o*l,g=o*c
return e[0]=1-(f+b),e[1]=d+g,e[2]=h-y,e[3]=0,e[4]=d-g,e[5]=1-(u+b),e[6]=p+m,e[7]=0,e[8]=h+y,e[9]=p-m,e[10]=1-(u+f),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}const _=Object(r.f)()
function x(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function S(e,t){const n=t[0],r=t[1],i=t[2],s=t[3],o=n+n,a=r+r,l=i+i,c=n*o,u=r*o,d=r*a,h=i*o,f=i*a,p=i*l,b=s*o,m=s*a,y=s*l
return e[0]=1-d-p,e[1]=u+y,e[2]=h-m,e[3]=0,e[4]=u-y,e[5]=1-c-p,e[6]=f+b,e[7]=0,e[8]=h+m,e[9]=f-b,e[10]=1-c-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function M(e,t,n,r,i,s,o){const a=1/(n-t),l=1/(i-r),c=1/(s-o)
return e[0]=2*s*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*s*l,e[6]=0,e[7]=0,e[8]=(n+t)*a,e[9]=(i+r)*l,e[10]=(o+s)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*c,e[15]=0,e}function E(e,t,n,r,i,s,o){const a=1/(t-n),l=1/(r-i),c=1/(s-o)
return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+n)*a,e[13]=(i+r)*l,e[14]=(o+s)*c,e[15]=1,e}function L(e,t,n,r){let s,o,l,c,u,d,h,f,p,b
const m=t[0],y=t[1],g=t[2],O=r[0],v=r[1],j=r[2],w=n[0],_=n[1],x=n[2]
return Math.abs(m-w)<i.a&&Math.abs(y-_)<i.a&&Math.abs(g-x)<i.a?a(e):(h=m-w,f=y-_,p=g-x,b=1/Math.sqrt(h*h+f*f+p*p),h*=b,f*=b,p*=b,s=v*p-j*f,o=j*h-O*p,l=O*f-v*h,b=Math.sqrt(s*s+o*o+l*l),b?(b=1/b,s*=b,o*=b,l*=b):(s=0,o=0,l=0),c=f*l-p*o,u=p*s-h*l,d=h*o-f*s,b=Math.sqrt(c*c+u*u+d*d),b?(b=1/b,c*=b,u*=b,d*=b):(c=0,u=0,d=0),e[0]=s,e[1]=c,e[2]=h,e[3]=0,e[4]=o,e[5]=u,e[6]=f,e[7]=0,e[8]=l,e[9]=d,e[10]=p,e[11]=0,e[12]=-(s*m+o*y+l*g),e[13]=-(c*m+u*y+d*g),e[14]=-(h*m+f*y+p*g),e[15]=1,e)}function I(e,t,n,r){const i=t[0],s=t[1],o=t[2],a=r[0],l=r[1],c=r[2]
let u=i-n[0],d=s-n[1],h=o-n[2],f=u*u+d*d+h*h
f>0&&(f=1/Math.sqrt(f),u*=f,d*=f,h*=f)
let p=l*h-c*d,b=c*u-a*h,m=a*d-l*u
return f=p*p+b*b+m*m,f>0&&(f=1/Math.sqrt(f),p*=f,b*=f,m*=f),e[0]=p,e[1]=b,e[2]=m,e[3]=0,e[4]=d*m-h*b,e[5]=h*p-u*m,e[6]=u*b-d*p,e[7]=0,e[8]=u,e[9]=d,e[10]=h,e[11]=0,e[12]=i,e[13]=s,e[14]=o,e[15]=1,e}function k(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function C(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function A(e,t){if(e===t)return!0
const n=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],b=e[12],m=e[13],y=e[14],g=e[15],O=t[0],v=t[1],j=t[2],w=t[3],_=t[4],x=t[5],S=t[6],M=t[7],E=t[8],L=t[9],I=t[10],k=t[11],C=t[12],A=t[13],T=t[14],P=t[15]
return Math.abs(n-O)<=i.a*Math.max(1,Math.abs(n),Math.abs(O))&&Math.abs(r-v)<=i.a*Math.max(1,Math.abs(r),Math.abs(v))&&Math.abs(s-j)<=i.a*Math.max(1,Math.abs(s),Math.abs(j))&&Math.abs(o-w)<=i.a*Math.max(1,Math.abs(o),Math.abs(w))&&Math.abs(a-_)<=i.a*Math.max(1,Math.abs(a),Math.abs(_))&&Math.abs(l-x)<=i.a*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(c-S)<=i.a*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(u-M)<=i.a*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(d-E)<=i.a*Math.max(1,Math.abs(d),Math.abs(E))&&Math.abs(h-L)<=i.a*Math.max(1,Math.abs(h),Math.abs(L))&&Math.abs(f-I)<=i.a*Math.max(1,Math.abs(f),Math.abs(I))&&Math.abs(p-k)<=i.a*Math.max(1,Math.abs(p),Math.abs(k))&&Math.abs(b-C)<=i.a*Math.max(1,Math.abs(b),Math.abs(C))&&Math.abs(m-A)<=i.a*Math.max(1,Math.abs(m),Math.abs(A))&&Math.abs(y-T)<=i.a*Math.max(1,Math.abs(y),Math.abs(T))&&Math.abs(g-P)<=i.a*Math.max(1,Math.abs(g),Math.abs(P))}function T(e){const t=i.a,n=e[0],r=e[1],s=e[2],o=e[4],a=e[5],l=e[6],c=e[8],u=e[9],d=e[10]
return Math.abs(1-(n*n+o*o+c*c))<=t&&Math.abs(1-(r*r+a*a+u*u))<=t&&Math.abs(1-(s*s+l*l+d*d))<=t}const P=u,R=k
Object.freeze({__proto__:null,copy:s,set:o,identity:a,transpose:l,invert:c,adjoint:function(e,t){const n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],b=t[13],m=t[14],y=t[15]
return e[0]=a*(h*y-f*m)-d*(l*y-c*m)+b*(l*f-c*h),e[1]=-(r*(h*y-f*m)-d*(i*y-s*m)+b*(i*f-s*h)),e[2]=r*(l*y-c*m)-a*(i*y-s*m)+b*(i*c-s*l),e[3]=-(r*(l*f-c*h)-a*(i*f-s*h)+d*(i*c-s*l)),e[4]=-(o*(h*y-f*m)-u*(l*y-c*m)+p*(l*f-c*h)),e[5]=n*(h*y-f*m)-u*(i*y-s*m)+p*(i*f-s*h),e[6]=-(n*(l*y-c*m)-o*(i*y-s*m)+p*(i*c-s*l)),e[7]=n*(l*f-c*h)-o*(i*f-s*h)+u*(i*c-s*l),e[8]=o*(d*y-f*b)-u*(a*y-c*b)+p*(a*f-c*d),e[9]=-(n*(d*y-f*b)-u*(r*y-s*b)+p*(r*f-s*d)),e[10]=n*(a*y-c*b)-o*(r*y-s*b)+p*(r*c-s*a),e[11]=-(n*(a*f-c*d)-o*(r*f-s*d)+u*(r*c-s*a)),e[12]=-(o*(d*m-h*b)-u*(a*m-l*b)+p*(a*h-l*d)),e[13]=n*(d*m-h*b)-u*(r*m-i*b)+p*(r*h-i*d),e[14]=-(n*(a*m-l*b)-o*(r*m-i*b)+p*(r*l-i*a)),e[15]=n*(a*h-l*d)-o*(r*h-i*d)+u*(r*l-i*a),e},determinant:function(e){const t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],d=e[10],h=e[11],f=e[12],p=e[13],b=e[14],m=e[15]
return(t*o-n*s)*(d*m-h*b)-(t*a-r*s)*(u*m-h*p)+(t*l-i*s)*(u*b-d*p)+(n*a-r*o)*(c*m-h*f)-(n*l-i*o)*(c*b-d*f)+(r*l-i*a)*(c*p-u*f)},multiply:u,translate:d,scale:h,rotate:f,rotateX:p,rotateY:b,rotateZ:m,fromTranslation:y,fromScaling:g,fromRotation:O,fromXRotation:v,fromYRotation:function(e,t){const n=Math.sin(t),r=Math.cos(t)
return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},fromZRotation:j,fromRotationTranslation:w,fromQuat2:function(e,t){const n=_,r=-t[0],i=-t[1],s=-t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],d=r*r+i*i+s*s+o*o
return d>0?(n[0]=2*(a*o+u*r+l*s-c*i)/d,n[1]=2*(l*o+u*i+c*r-a*s)/d,n[2]=2*(c*o+u*s+a*i-l*r)/d):(n[0]=2*(a*o+u*r+l*s-c*i),n[1]=2*(l*o+u*i+c*r-a*s),n[2]=2*(c*o+u*s+a*i-l*r)),w(e,t,n),e},getTranslation:x,getScaling:function(e,t){const n=t[0],r=t[1],i=t[2],s=t[4],o=t[5],a=t[6],l=t[8],c=t[9],u=t[10]
return e[0]=Math.sqrt(n*n+r*r+i*i),e[1]=Math.sqrt(s*s+o*o+a*a),e[2]=Math.sqrt(l*l+c*c+u*u),e},getRotation:function(e,t){const n=t[0]+t[5]+t[10]
let r=0
return n>0?(r=2*Math.sqrt(n+1),e[3]=.25*r,e[0]=(t[6]-t[9])/r,e[1]=(t[8]-t[2])/r,e[2]=(t[1]-t[4])/r):t[0]>t[5]&&t[0]>t[10]?(r=2*Math.sqrt(1+t[0]-t[5]-t[10]),e[3]=(t[6]-t[9])/r,e[0]=.25*r,e[1]=(t[1]+t[4])/r,e[2]=(t[8]+t[2])/r):t[5]>t[10]?(r=2*Math.sqrt(1+t[5]-t[0]-t[10]),e[3]=(t[8]-t[2])/r,e[0]=(t[1]+t[4])/r,e[1]=.25*r,e[2]=(t[6]+t[9])/r):(r=2*Math.sqrt(1+t[10]-t[0]-t[5]),e[3]=(t[1]-t[4])/r,e[0]=(t[8]+t[2])/r,e[1]=(t[6]+t[9])/r,e[2]=.25*r),e},fromRotationTranslationScale:function(e,t,n,r){const i=t[0],s=t[1],o=t[2],a=t[3],l=i+i,c=s+s,u=o+o,d=i*l,h=i*c,f=i*u,p=s*c,b=s*u,m=o*u,y=a*l,g=a*c,O=a*u,v=r[0],j=r[1],w=r[2]
return e[0]=(1-(p+m))*v,e[1]=(h+O)*v,e[2]=(f-g)*v,e[3]=0,e[4]=(h-O)*j,e[5]=(1-(d+m))*j,e[6]=(b+y)*j,e[7]=0,e[8]=(f+g)*w,e[9]=(b-y)*w,e[10]=(1-(d+p))*w,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e},fromRotationTranslationScaleOrigin:function(e,t,n,r,i){const s=t[0],o=t[1],a=t[2],l=t[3],c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,p=s*d,b=o*u,m=o*d,y=a*d,g=l*c,O=l*u,v=l*d,j=r[0],w=r[1],_=r[2],x=i[0],S=i[1],M=i[2],E=(1-(b+y))*j,L=(f+v)*j,I=(p-O)*j,k=(f-v)*w,C=(1-(h+y))*w,A=(m+g)*w,T=(p+O)*_,P=(m-g)*_,R=(1-(h+b))*_
return e[0]=E,e[1]=L,e[2]=I,e[3]=0,e[4]=k,e[5]=C,e[6]=A,e[7]=0,e[8]=T,e[9]=P,e[10]=R,e[11]=0,e[12]=n[0]+x-(E*x+k*S+T*M),e[13]=n[1]+S-(L*x+C*S+P*M),e[14]=n[2]+M-(I*x+A*S+R*M),e[15]=1,e},fromQuat:S,frustum:M,perspective:function(e,t,n,r,i){const s=1/Math.tan(t/2)
let o
return e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=i&&i!==1/0?(o=1/(r-i),e[10]=(i+r)*o,e[14]=2*i*r*o):(e[10]=-1,e[14]=-2*r),e},perspectiveFromFieldOfView:function(e,t,n,r){const i=Math.tan(t.upDegrees*Math.PI/180),s=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),a=Math.tan(t.rightDegrees*Math.PI/180),l=2/(o+a),c=2/(i+s)
return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-(o-a)*l*.5,e[9]=(i-s)*c*.5,e[10]=r/(n-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*n/(n-r),e[15]=0,e},ortho:E,lookAt:L,targetTo:I,str:function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+e[6]**2+e[7]**2+e[8]**2+e[9]**2+e[10]**2+e[11]**2+e[12]**2+e[13]**2+e[14]**2+e[15]**2)},add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e},subtract:k,multiplyScalar:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e},multiplyScalarAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e[9]=t[9]+n[9]*r,e[10]=t[10]+n[10]*r,e[11]=t[11]+n[11]*r,e[12]=t[12]+n[12]*r,e[13]=t[13]+n[13]*r,e[14]=t[14]+n[14]*r,e[15]=t[15]+n[15]*r,e},exactEquals:C,equals:A,isOrthoNormal:T,mul:P,sub:R})},897:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}))
var r=n(78),i=n(660),s=n(354),o=n(177),a=n(292)
const l=o.a.getLogger("esri.assets")
function c(e,t){return Object(i.default)(u(e),t)}function u(e){if(!r.default.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.a("assets:path-not-set","config.assetsPath is not set")
return Object(a.B)(r.default.assetsPath,e)}},898:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return p}))
var r=n(932),i=(n(178),n(861))
const s=/\?(\.|$)/g
function o(e,t,n,r){const i=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],o=a(e,t,n,r)
for(const t of i){const r=t.trim().replace(s,"$1"),i=e.get(r)
n.call(e,i,i,r,e)}return o}function a(e,t,n,r){return e.watch(t,n,r)}function l(e,t,n,r){return v(e,t,null,n,r)}function c(e,t,n,r){return O(e,t,j,n,r)}function u(e,t,n,r){return v(e,t,j,n,r)}function d(e,t,n,r){return O(e,t,w,n,r)}function h(e,t,n,r){return v(e,t,w,n,r)}function f(e,t,n,r){return O(e,t,_,n,r)}function p(e,t,n,r){return v(e,t,_,n,r)}function b(e,t,n,r){return O(e,t,x,n,r)}function m(e,t,n,r){return v(e,t,x,n,r)}function y(e,t,n,r){let i=!1
const s=e.watch(t,(t,r,s,o)=>{i||n.call(e,t,r,s,o)},r)
return{remove(){s.remove()},pause(){i=!0},resume(){i=!1}}}function g(e,t,n,i,s,a,l){const c={}
function u(t){const r=c[t]
r&&(a&&a(r.target,t,e,n),r.handle.remove(),delete c[t])}const d=o(e,t,(t,o,a)=>{u(a),Object(r.b)(t)&&(c[a]={handle:Object(r.c)(t,n,i),target:t},s&&s(t,a,e,n))},l)
return{remove(){d.remove()
for(const e in c)u(e)}}}function O(e,t,n,r,i){const s=e.watch(t,(t,i,s,o)=>{n&&!n(t)||null==r||r.call(e,t,i,s,o)},i)
if(Array.isArray(t))for(const i of t){const s=e.get(i)
n&&n(s)&&(null==r||r.call(e,s,s,t,e))}else{const i=e.get(t)
n&&n(i)&&(null==r||r.call(e,i,i,t,e))}return s}function v(e,t,n,r,s){const o="function"==typeof r?r:null,a="object"==typeof r?r:null
"boolean"==typeof r&&(s=r)
let l,c=!1
function u(){l&&(l.remove(),l=null)}const d=Object(i.f)()
Object(i.q)(a,()=>{u(),d.reject(Object(i.e)())})
const h={then:d.promise.then.bind(d.promise),catch:d.promise.catch.bind(d.promise),remove:u}
return Object.freeze(h),l=O(e,t,n,(t,n,r,i)=>{c=!0,u(),o&&o.call(e,t,n,r,i),d.resolve({value:t,oldValue:n,propertyName:r,target:i})},s),c&&u(),h}function j(e){return!!e}function w(e){return!e}function _(e){return!0===e}function x(e){return!1===e}},899:function(e,t,n){"use strict"
n.d(t,"a",(function(){return je})),n.d(t,"b",(function(){return Me})),n.d(t,"c",(function(){return xe})),n.d(t,"d",(function(){return Ce})),n.d(t,"e",(function(){return _e})),n.d(t,"f",(function(){return ke})),n.d(t,"g",(function(){return we})),n.d(t,"h",(function(){return Ie})),n.d(t,"i",(function(){return Se}))
var r,i,s=Function.prototype,o=Object.prototype,a=s.toString,l=o.hasOwnProperty,c=a.call(Object),u=o.toString,d=(r=Object.getPrototypeOf,i=Object,function(e){return r(i(e))}),h={exports:{}},f={},p={exports:{}},b={}
function m(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}var y=/javascript\s*\:/gim
b.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},b.getDefaultWhiteList=m,b.onAttr=function(e,t,n){},b.onIgnoreAttr=function(e,t,n){},b.safeAttrValue=function(e,t){return y.test(t)?"":t}
var g=function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},O=function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")},v=b
function j(e){return null==e}function w(e){(e=function(e){var t={}
for(var n in e)t[n]=e[n]
return t}(e||{})).whiteList=e.whiteList||v.whiteList,e.onAttr=e.onAttr||v.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||v.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||v.safeAttrValue,this.options=e}w.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,n=t.whiteList,r=t.onAttr,i=t.onIgnoreAttr,s=t.safeAttrValue
return function(e,t){";"!==(e=O(e))[e.length-1]&&(e+=";")
var n=e.length,r=!1,i=0,s=0,o=""
function a(){if(!r){var n=g(e.slice(i,s)),a=n.indexOf(":")
if(-1!==a){var l=g(n.slice(0,a)),c=g(n.slice(a+1))
if(l){var u=t(i,o.length,l,c,n)
u&&(o+=u+"; ")}}}i=s+1}for(;s<n;s++){var l=e[s]
if("/"===l&&"*"===e[s+1]){var c=e.indexOf("*/",s+2)
if(-1===c)break
i=(s=c+1)+1,r=!1}else"("===l?r=!0:")"===l?r=!1:";"===l?r||a():"\n"===l&&a()}return g(o)}(e,(function(e,t,o,a,l){var c=n[o],u=!1
if(!0===c?u=c:"function"==typeof c?u=c(a):c instanceof RegExp&&(u=c.test(a)),!0!==u&&(u=!1),a=s(o,a)){var d,h={position:t,sourcePosition:e,source:l,isWhite:u}
return u?j(d=r(o,a,h))?o+":"+a:d:j(d=i(o,a,h))?void 0:d}}))}
var _=w
!function(e,t){var n=b,r=_
for(var i in(t=e.exports=function(e,t){return new r(t).process(e)}).FilterCSS=r,n)t[i]=n[i]}(p,p.exports)
var x={indexOf:function(e,t){var n,r
if(Array.prototype.indexOf)return e.indexOf(t)
for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},forEach:function(e,t,n){var r,i
if(Array.prototype.forEach)return e.forEach(t,n)
for(r=0,i=e.length;r<i;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e)
return t?t.index:-1}},S=p.exports.FilterCSS,M=p.exports.getDefaultWhiteList,E=x
var L=new S
function I(e){return e.replace(k,"&lt;").replace(C,"&gt;")}var k=/</g,C=/>/g,A=/"/g,T=/&quot;/g,P=/&#([a-zA-Z0-9]*);?/gim,R=/&colon;?/gim,N=/&newline;?/gim,V=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,z=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,D=/u\s*r\s*l\s*\(.*/gi
function $(e){return e.replace(A,"&quot;")}function F(e){return e.replace(T,'"')}function U(e){return e.replace(P,(function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))}))}function q(e){return e.replace(R,":").replace(N," ")}function B(e){for(var t="",n=0,r=e.length;n<r;n++)t+=e.charCodeAt(n)<32?" ":e.charAt(n)
return E.trim(t)}function G(e){return B(e=q(e=U(e=F(e))))}function H(e){return I(e=$(e))}f.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},f.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}},f.onTag=function(e,t,n){},f.onIgnoreTag=function(e,t,n){},f.onTagAttr=function(e,t,n){},f.onIgnoreTagAttr=function(e,t,n){},f.safeAttrValue=function(e,t,n,r){if(n=G(n),"href"===t||"src"===t){if("#"===(n=E.trim(n)))return"#"
if("http://"!==n.substr(0,7)&&"https://"!==n.substr(0,8)&&"mailto:"!==n.substr(0,7)&&"tel:"!==n.substr(0,4)&&"data:image/"!==n.substr(0,11)&&"ftp://"!==n.substr(0,6)&&"./"!==n.substr(0,2)&&"../"!==n.substr(0,3)&&"#"!==n[0]&&"/"!==n[0])return""}else if("background"===t){if(V.lastIndex=0,V.test(n))return""}else if("style"===t){if(z.lastIndex=0,z.test(n))return""
if(D.lastIndex=0,D.test(n)&&(V.lastIndex=0,V.test(n)))return""
!1!==r&&(n=(r=r||L).process(n))}return H(n)},f.escapeHtml=I,f.escapeQuote=$,f.unescapeQuote=F,f.escapeHtmlEntities=U,f.escapeDangerHtml5Entities=q,f.clearNonPrintableCharacter=B,f.friendlyAttrValue=G,f.escapeAttrValue=H,f.onIgnoreTagStripAll=function(){return""},f.StripTagBody=function(e,t){"function"!=typeof t&&(t=function(){})
var n=!Array.isArray(e),r=[],i=!1
return{onIgnoreTag:function(s,o,a){if(function(t){return!!n||-1!==E.indexOf(e,t)}(s)){if(a.isClosing){var l="[/removed]",c=a.position+l.length
return r.push([!1!==i?i:a.position,c]),i=!1,l}return i||(i=a.position),"[removed]"}return t(s,o,a)},remove:function(e){var t="",n=0
return E.forEach(r,(function(r){t+=e.slice(n,r[0]),n=r[1]})),t+=e.slice(n)}}},f.stripCommentTag=function(e){for(var t="",n=0;n<e.length;){var r=e.indexOf("\x3c!--",n)
if(-1===r){t+=e.slice(n)
break}t+=e.slice(n,r)
var i=e.indexOf("--\x3e",r)
if(-1===i)break
n=i+3}return t},f.stripBlankChar=function(e){var t=e.split("")
return(t=t.filter((function(e){var t=e.charCodeAt(0)
return!(127===t||t<=31&&10!==t&&13!==t)}))).join("")},f.cssFilter=L,f.getDefaultCSSWhiteList=M
var W={},J=x
function Z(e){var t=J.spaceIndex(e)
if(-1===t)var n=e.slice(1,-1)
else n=e.slice(1,t+1)
return"/"===(n=J.trim(n).toLowerCase()).slice(0,1)&&(n=n.slice(1)),"/"===n.slice(-1)&&(n=n.slice(0,-1)),n}function Y(e){return"</"===e.slice(0,2)}var Q=/[^a-zA-Z0-9_:\.\-]/gim
function X(e,t){for(;t<e.length;t++){var n=e[t]
if(" "!==n)return"="===n?t:-1}}function K(e,t){for(;t>0;t--){var n=e[t]
if(" "!==n)return"="===n?t:-1}}function ee(e){return function(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}(e)?e.substr(1,e.length-2):e}W.parseTag=function(e,t,n){var r="",i=0,s=!1,o=!1,a=0,l=e.length,c="",u=""
e:for(a=0;a<l;a++){var d=e.charAt(a)
if(!1===s){if("<"===d){s=a
continue}}else if(!1===o){if("<"===d){r+=n(e.slice(i,a)),s=a,i=a
continue}if(">"===d){r+=n(e.slice(i,s)),c=Z(u=e.slice(s,a+1)),r+=t(s,r.length,c,u,Y(u)),i=a+1,s=!1
continue}if('"'===d||"'"===d)for(var h=1,f=e.charAt(a-h);""===f.trim()||"="===f;){if("="===f){o=d
continue e}f=e.charAt(a-++h)}}else if(d===o){o=!1
continue}}return i<e.length&&(r+=n(e.substr(i))),r},W.parseAttr=function(e,t){var n=0,r=[],i=!1,s=e.length
function o(e,n){if(!((e=(e=J.trim(e)).replace(Q,"").toLowerCase()).length<1)){var i=t(e,n||"")
i&&r.push(i)}}for(var a=0;a<s;a++){var l,c=e.charAt(a)
if(!1!==i||"="!==c)if(!1===i||a!==n||'"'!==c&&"'"!==c||"="!==e.charAt(a-1)){if(/\s|\n|\t/.test(c)){if(e=e.replace(/\s|\n|\t/g," "),!1===i){if(-1===(l=X(e,a))){o(J.trim(e.slice(n,a))),i=!1,n=a+1
continue}a=l-1
continue}if(-1===(l=K(e,a-1))){o(i,ee(J.trim(e.slice(n,a)))),i=!1,n=a+1
continue}}}else{if(-1===(l=e.indexOf(c,a+1)))break
o(i,J.trim(e.slice(n+1,l))),i=!1,n=(a=l)+1}else i=e.slice(n,a),n=a+1}return n<e.length&&(!1===i?o(e.slice(n)):o(i,ee(J.trim(e.slice(n))))),J.trim(r.join(" "))}
var te=p.exports.FilterCSS,ne=f,re=W,ie=re.parseTag,se=re.parseAttr,oe=x
function ae(e){return null==e}function le(e){(e=function(e){var t={}
for(var n in e)t[n]=e[n]
return t}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=ne.onIgnoreTagStripAll),e.whiteList=e.whiteList||ne.whiteList,e.onTag=e.onTag||ne.onTag,e.onTagAttr=e.onTagAttr||ne.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||ne.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||ne.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||ne.safeAttrValue,e.escapeHtml=e.escapeHtml||ne.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new te(e.css))}le.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,n=t.whiteList,r=t.onTag,i=t.onIgnoreTag,s=t.onTagAttr,o=t.onIgnoreTagAttr,a=t.safeAttrValue,l=t.escapeHtml,c=this.cssFilter
t.stripBlankChar&&(e=ne.stripBlankChar(e)),t.allowCommentTag||(e=ne.stripCommentTag(e))
var u=!1
t.stripIgnoreTagBody&&(u=ne.StripTagBody(t.stripIgnoreTagBody,i),i=u.onIgnoreTag)
var d=ie(e,(function(e,t,u,d,h){var f,p={sourcePosition:e,position:t,isClosing:h,isWhite:n.hasOwnProperty(u)}
if(!ae(f=r(u,d,p)))return f
if(p.isWhite){if(p.isClosing)return"</"+u+">"
var b=function(e){var t=oe.spaceIndex(e)
if(-1===t)return{html:"",closing:"/"===e[e.length-2]}
var n="/"===(e=oe.trim(e.slice(t+1,-1)))[e.length-1]
return n&&(e=oe.trim(e.slice(0,-1))),{html:e,closing:n}}(d),m=n[u],y=se(b.html,(function(e,t){var n,r=-1!==oe.indexOf(m,e)
return ae(n=s(u,e,t,r))?r?(t=a(u,e,t,c))?e+'="'+t+'"':e:ae(n=o(u,e,t,r))?void 0:n:n}))
return d="<"+u,y&&(d+=" "+y),b.closing&&(d+=" /"),d+">"}return ae(f=i(u,d,p))?l(d):f}),l)
return u&&(d=u.remove(d)),d}
var ce=le
!function(e,t){var n=f,r=W,i=ce
function s(e,t){return new i(t).process(e)}for(var o in(t=e.exports=s).filterXSS=s,t.FilterXSS=i,n)t[o]=n[o]
for(var o in r)t[o]=r[o]
"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=e.exports)}(h,h.exports)
var ue,de,he=function(){function e(e,t){var n,r=this
this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],audio:["autoplay","controls","loop","muted","preload"],b:[],br:[],dd:["style"],div:["align","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],ol:[],p:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(e,t,n,i){return"a"===e&&"href"===t||("img"===e||"source"===e)&&"src"===t?r.sanitizeUrl(n):h.exports.safeAttrValue(e,t,n,i)}},e&&!t?n=e:e&&t?(n=Object.create(this.arcgisFilterOptions),Object.keys(e).forEach((function(t){"whiteList"===t?n.whiteList=r._extendObjectOfArrays([r.arcgisWhiteList,e.whiteList||{}]):n[t]=e[t]}))):(n=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=n,this._xssFilter=new h.exports.FilterXSS(n)}return e.prototype.sanitize=function(e,t){switch(void 0===t&&(t={}),typeof e){case"number":return isNaN(e)||!isFinite(e)?null:e
case"boolean":return e
case"string":return this._xssFilter.process(e)
case"object":return this._iterateOverObject(e,t)
default:if(t.allowUndefined&&void 0===e)return
return null}},e.prototype.sanitizeUrl=function(e){var t=this._trim(e.substring(0,e.indexOf(":")))
return"/"===e||"#"===e||"#"===e[0]||this.allowedProtocols.indexOf(t.toLowerCase())>-1?h.exports.escapeAttrValue(e):""},e.prototype.sanitizeHTMLAttribute=function(e,t,n,r){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(e,t,n,r):h.exports.safeAttrValue(e,t,n,r)},e.prototype.validate=function(e,t){void 0===t&&(t={})
var n=this.sanitize(e,t)
return{isValid:e===n,sanitized:n}},e.prototype._extendObjectOfArrays=function(e){var t={}
return e.forEach((function(e){Object.keys(e).forEach((function(n){Array.isArray(e[n])&&Array.isArray(t[n])?t[n]=t[n].concat(e[n]):t[n]=e[n]}))})),t},e.prototype._iterateOverObject=function(e,t){var n=this
void 0===t&&(t={})
try{var r=!1,i=void 0
if(Array.isArray(e))i=e.reduce((function(e,i){var s=n.validate(i,t)
return s.isValid?e.concat([i]):(r=!0,e.concat([s.sanitized]))}),[])
else{if(!function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=u.call(e)||function(e){var t=!1
if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1
var t=d(e)
if(null===t)return!0
var n=l.call(t,"constructor")&&t.constructor
return"function"==typeof n&&n instanceof n&&a.call(n)==c}(e)){if(t.allowUndefined&&void 0===e)return
return null}i=Object.keys(e).reduce((function(i,s){var o=e[s],a=n.validate(o,t)
return a.isValid?i[s]=o:(r=!0,i[s]=a.sanitized),i}),{})}return r?i:e}catch(e){return null}},e.prototype._trim=function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},e}(),fe=n(1061),pe=n(923),be=(n(77),n(177)),me=n(1255),ye=function(e){ue||function(e){if("WebkitTransition"in e.style)ue="webkitTransitionEnd",de="webkitAnimationEnd"
else{if(!("transition"in e.style))throw new Error("Your browser is not supported!")
ue="transitionend",de="animationend"}}(e)},ge=function(e,t){return void 0===t&&(t=e+"-active"),function(n){ye(n)
var r=!1,i=function(s){r||(r=!0,n.removeEventListener(ue,i),n.removeEventListener(de,i),n.classList.remove(e),n.classList.remove(t))}
n.classList.add(e),n.addEventListener(ue,i),n.addEventListener(de,i),requestAnimationFrame((function(){n.classList.add(t)}))}},Oe=function(e,t){return void 0===t&&(t=e+"-active"),function(n,r){ye(n)
var i=!1,s=function(e){i||(i=!0,n.removeEventListener(ue,s),n.removeEventListener(de,s),r())}
n.classList.add(e),n.addEventListener(ue,s),n.addEventListener(de,s),requestAnimationFrame((function(){n.classList.add(t)}))}}
const ve=be.a.getLogger("esri.widgets.support.widgetUtils")
function je(e){const t=fe.a.acquire()
for(let e=0;e<arguments.length;e++){const n=arguments[e],r=typeof n
if("string"===r)t.push(n)
else if(Array.isArray(n))t.push.apply(t,n)
else if("object"===r)for(const e in n)n[e]&&t.push(e)}const n=t.join(" ")
return fe.a.release(t),n}const we=(()=>{const e=new Map,t=new ResizeObserver(t=>{Object(me.a)()
for(const n of t)e.get(n.target)(n)})
return(n,r,i)=>(e.has(n)&&ve.error("Already observing element",n),e.set(n,r),t.observe(n,i),Object(pe.c)(()=>{t.unobserve(n),e.delete(n)}))})()
function _e(e){const t=null==e?void 0:e.closest("[dir]")
return null!==t&&t instanceof HTMLElement&&"rtl"===t.dir||"rtl"===document.dir}function xe(e){this[e.getAttribute("data-node-ref")]=null}function Se(e){this[e.getAttribute("data-node-ref")]=e}function Me(e,t){return("enter"===e?ge:Oe)(t)}const Ee=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup","animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"].reduce((e,t)=>(e[t]=[],e),{}),Le=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],Ie=new he({whiteList:Ee,onTagAttr:(e,t,n)=>{const r=`${t}="${n}"`
if(Le.includes(t))return r},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0)
function ke(e,t){const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.top+n.height,s=r.top+r.height,o=n.top,a=r.top;(i>s||o<a)&&e.scrollIntoView({block:"end"})}function Ce(e){return"Enter"===e||" "===e}},900:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return h}))
var r=n(354),i=n(861),s=n(879)
const o=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,a={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0}
function l(e){var t
return null!=(t=a[e])&&t}const c=[],u=new Map
function d(e){for(const t of u.keys())b(e.pattern,t)&&u.delete(t)}function h(e){return c.includes(e)||(d(e),c.unshift(e)),{remove(){const t=c.indexOf(e)
t>-1&&(c.splice(t,1),d(e))}}}async function f(e){const t=Object(s.b)()
u.has(e)||u.set(e,async function(e,t){const n=[]
for(const r of c)if(b(r.pattern,e))try{return await r.fetchMessageBundle(e,t)}catch(e){n.push(e)}if(n.length)throw new r.a("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:n})
throw new r.a("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t))
const n=u.get(e)
return await m.add(n),n}function p(e){if(!o.test(e))return null
const[,t,n]=o.exec(e),r=t+(n?"-"+n.toUpperCase():"")
return l(r)?r:l(t)?t:null}function b(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}Object(s.a)(()=>{u.clear()})
const m=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(i.f)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},902:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}))
class r{constructor(e,t,n,r){this.semiMajorAxis=e,this.flattening=t,this.outerAtmosphereRimWidth=n
const i=1-this.flattening
this.semiMinorAxis=this.semiMajorAxis*i,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=r||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const i=new r(6378137,1/298.257223563,3e5,.006694379990137799),s=new r(3396190,1/169.8944472236118,23e4),o=new r(1737400,0,0)},903:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n(856),i=n(354),s=n(959),o=n(861),a=n(970),l=n(858),c=n(857)
const u="loaded",d=e=>{let t=class extends e{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(e=>{const t=this.load.bind(this)
this.load=n=>{const r=new Promise((e,t)=>{const r=Object(o.r)(n,t)
this.destroyed&&t(new i.a("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this._promiseProps.when(e,t).finally(()=>{r&&r.remove()})})
if("not-loaded"===this.loadStatus){this._set("loadStatus","loading")
const e=this._loadController=new AbortController
t({signal:e.signal}),Object(o.q)(e.signal,()=>{this._promiseProps.abort()})}return e(),r}})),this.when(()=>{this._set("loadStatus",u),this._loadController=null},e=>{this._set("loadStatus","failed"),this._set("loadError",e),this._loadController=null})}get loaded(){return this.loadStatus===u}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var e
return this.isFulfilled()||(this._set("loadError",new i.a("load:cancelled","Cancelled")),null==(e=this._loadController)||e.abort()),this}}
return Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"loaded",null),Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"loadError",void 0),Object(r.a)([Object(l.b)({clonable:!1})],t.prototype,"loadStatus",void 0),Object(r.a)([Object(l.b)({type:[a.a],readOnly:!0})],t.prototype,"loadWarnings",null),t=Object(r.a)([Object(c.a)("esri.core.Loadable")],t),t}
let h=class extends(d(s.a)){}
var f
h=Object(r.a)([Object(c.a)("esri.core.Loadable")],h),(f=h||(h={})).LoadableMixin=d,f.isLoadable=function(e){return!(!e||!e.load)}
const p=h},904:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g}))
var r=n(928)
function i(e,t){return Object(r.e)(e,t)}function s(e,t){const n=e.hasZ&&t.hasZ
let r,i,s
if(e.xmin<=t.xmin){if(r=t.xmin,e.xmax<r)return!1}else if(r=e.xmin,t.xmax<r)return!1
if(e.ymin<=t.ymin){if(i=t.ymin,e.ymax<i)return!1}else if(i=e.ymin,t.ymax<i)return!1
if(n&&t.hasZ)if(e.zmin<=t.zmin){if(s=t.zmin,e.zmax<s)return!1}else if(s=e.zmin,t.zmax<s)return!1
return!0}function o(e,t){const{points:n,hasZ:i}=t,s=i?r.b:r.a
for(const t of n)if(s(e,t))return!0
return!1}const a=[0,0],l=[0,0],c=[0,0],u=[0,0],d=[a,l,c,u],h=[[c,a],[a,l],[l,u],[u,c]]
function f(e,t){a[0]=e.xmin,a[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
for(const e of d)if(Object(r.f)(t,e))return!0
for(const n of t.rings){if(!n.length)continue
let t=n[0]
if(Object(r.a)(e,t))return!0
for(let i=1;i<n.length;i++){const s=n[i]
if(Object(r.a)(e,s)||y(t,s,h))return!0
t=s}}return!1}function p(e,t){a[0]=e.xmin,a[1]=e.ymax,l[0]=e.xmax,l[1]=e.ymax,c[0]=e.xmin,c[1]=e.ymin,u[0]=e.xmax,u[1]=e.ymin
const n=t.paths
for(const t of n){if(!n.length)continue
let i=t[0]
if(Object(r.a)(e,i))return!0
for(let n=1;n<t.length;n++){const s=t[n]
if(Object(r.a)(e,s)||y(i,s,h))return!0
i=s}}return!1}const b=[0,0]
function m(e){for(let t=0;t<e.length;t++){const n=e[t]
for(let r=0;r<n.length-1;r++){const i=n[r],s=n[r+1]
for(let n=t+1;n<e.length;n++)for(let t=0;t<e[n].length-1;t++){const r=e[n][t],o=e[n][t+1]
if(g(i,s,r,o,b)&&!(b[0]===i[0]&&b[1]===i[1]||b[0]===r[0]&&b[1]===r[1]||b[0]===s[0]&&b[1]===s[1]||b[0]===o[0]&&b[1]===o[1]))return!0}}const r=n.length
if(!(r<=4))for(let e=0;e<r-3;e++){let t=r-1
0===e&&(t=r-2)
const i=n[e],s=n[e+1]
for(let r=e+2;r<t;r++){const e=n[r],t=n[r+1]
if(g(i,s,e,t,b)&&!(b[0]===i[0]&&b[1]===i[1]||b[0]===e[0]&&b[1]===e[1]||b[0]===s[0]&&b[1]===s[1]||b[0]===t[0]&&b[1]===t[1]))return!0}}}return!1}function y(e,t,n){for(let r=0;r<n.length;r++)if(g(e,t,n[r][0],n[r][1]))return!0
return!1}function g(e,t,n,r,i){const[s,o]=e,[a,l]=t,[c,u]=n,[d,h]=r,f=d-c,p=s-c,b=a-s,m=h-u,y=o-u,g=l-o,O=m*b-f*g
if(0===O)return!1
const v=(f*y-m*p)/O,j=(b*y-g*p)/O
return v>=0&&v<=1&&j>=0&&j<=1&&(i&&(i[0]=s+v*(a-s),i[1]=o+v*(l-o)),!0)}function O(e){switch(e){case"esriGeometryEnvelope":case"extent":return s
case"esriGeometryMultipoint":case"multipoint":return o
case"esriGeometryPoint":case"point":return i
case"esriGeometryPolygon":case"polygon":return f
case"esriGeometryPolyline":case"polyline":return p}}},907:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return o})),n(870)
var r=n(20),i=n(659)
let s
function o(){return s||(s=(async()=>{const e=await Promise.all([n.e(57),n.e(168)]).then(n.bind(null,1155))
return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),s}const a=(e,t,n)=>u.create(e,t,n,null,["$feature"]),l=(e,t,n)=>u.create(e,t,n,null,["$feature","$view"]),c=(e,t,n,r)=>u.create(e,t,n,r,["$feature","$view"])
class u{constructor(e,t,n,r,i,s,o,a){this.script=e,this.evaluate=i
const l=Array.isArray(o)?o:o.fields
this.fields=l,this._syntaxTree=r,this._arcade=t,this._arcadeDictionary=n,this._arcadeFeature=s,this._spatialReference=a,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,s,a,l){const{arcade:c,Feature:d,Dictionary:h}=await o(),f=i.default.fromJSON(t),p=c.parseScript(e,l),b=a.reduce((e,t)=>({...e,[t]:null}),{})
let m=null
Object(r.k)(s)&&(m=new h(s),m.immutable=!0,b.$config=null)
const y=c.scriptUsesGeometryEngine(p)&&c.enableGeometrySupport(),g=c.scriptUsesFeatureSet(p)&&c.enableFeatureSetSupport(),O=c.scriptIsAsync(p)&&c.enableAsyncSupport(),v={vars:b,spatialReference:f,useAsync:!!O},j=new h
j.immutable=!1,j.setField("scale",0)
const w=c.compileScript(p,v)
return await Promise.all([y,g,O]),new u(e,c,h,p,e=>("$view"in e&&e.$view&&(j.setField("scale",e.$view.scale),e.$view=j),m&&(e.$config=m),w({vars:e,spatialReference:f})),new d,n,f)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}},909:function(e,t,n){"use strict"
function r(e,t,n=!1){let{hasM:r,hasZ:i}=e
Array.isArray(t)?4!==t.length||r||i?3===t.length&&n&&!r?(i=!0,r=!1):3===t.length&&r&&i&&(r=!1,i=!1):(r=!0,i=!0):(i=!i&&t.hasZ&&(!r||t.hasM),r=!r&&t.hasM&&(!i||t.hasZ)),e.hasZ=i,e.hasM=r}n.d(t,"a",(function(){return r}))},910:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return s})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return L}))
var r=n(893)
function i(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function s(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function o(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function a(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function l(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function c(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function u(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function d(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3]
return Math.sqrt(n*n+r*r+i*i+s*s)}function h(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3]
return n*n+r*r+i*i+s*s}function f(e){const t=e[0],n=e[1],r=e[2],i=e[3]
return Math.sqrt(t*t+n*n+r*r+i*i)}function p(e){const t=e[0],n=e[1],r=e[2],i=e[3]
return t*t+n*n+r*r+i*i}function b(e,t){const n=t[0],r=t[1],i=t[2],s=t[3]
let o=n*n+r*r+i*i+s*s
return o>0&&(o=1/Math.sqrt(o),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=s*o),e}function m(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function y(e,t,n,r){const i=t[0],s=t[1],o=t[2],a=t[3]
return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e[3]=a+r*(n[3]-a),e}function g(e,t,n){const r=t[0],i=t[1],s=t[2],o=t[3]
return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*s+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*s+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*s+n[15]*o,e}function O(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function v(e,t){const n=e[0],i=e[1],s=e[2],o=e[3],a=t[0],l=t[1],c=t[2],u=t[3]
return Math.abs(n-a)<=r.a*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-l)<=r.a*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(s-c)<=r.a*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(o-u)<=r.a*Math.max(1,Math.abs(o),Math.abs(u))}const j=a,w=l,_=c,x=d,S=h,M=f,E=p,L=Object.freeze({__proto__:null,copy:i,set:s,add:o,subtract:a,multiply:l,divide:c,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:u,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},distance:d,squaredDistance:h,length:f,squaredLength:p,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:b,dot:m,lerp:y,random:function(e,t){let n,i,s,o,a,l
t=t||1
do{n=2*Object(r.b)()-1,i=2*Object(r.b)()-1,a=n*n+i*i}while(a>=1)
do{s=2*Object(r.b)()-1,o=2*Object(r.b)()-1,l=s*s+o*o}while(l>=1)
const c=Math.sqrt((1-a)/l)
return e[0]=t*n,e[1]=t*i,e[2]=t*s*c,e[3]=t*o*c,e},transformMat4:g,transformQuat:function(e,t,n){const r=t[0],i=t[1],s=t[2],o=n[0],a=n[1],l=n[2],c=n[3],u=c*r+a*s-l*i,d=c*i+l*r-o*s,h=c*s+o*i-a*r,f=-o*r-a*i-l*s
return e[0]=u*c+f*-o+d*-l-h*-a,e[1]=d*c+f*-a+h*-o-u*-l,e[2]=h*c+f*-l+u*-a-d*-o,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:O,equals:v,sub:j,mul:w,div:_,dist:x,sqrDist:S,len:M,sqrLen:E})},911:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r=n(856),i=n(863),s=n(860),o=n(858),a=(n(353),n(77),n(859),n(857)),l=n(1332)
const c=new i.a({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0})
let u=class extends s.a{constructor(e){super(e),this.authoringInfo=null,this.type=null}async getRequiredFields(e){if(!this.collectRequiredFields)return[]
const t=new Set
return await this.collectRequiredFields(t,e),Array.from(t).sort()}getSymbol(e,t){}async getSymbolAsync(e,t){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}}
Object(r.a)([Object(o.b)({type:l.a,json:{write:!0}})],u.prototype,"authoringInfo",void 0),Object(r.a)([Object(o.b)({type:c.apiValues,readOnly:!0,json:{type:c.jsonValues,read:!1,write:{writer:c.write,ignoreOrigin:!0}}})],u.prototype,"type",void 0),u=Object(r.a)([Object(a.a)("esri.renderers.Renderer")],u)
const d=u},912:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}))
var r=n(856),i=n(862),s=n(885),o=n(858),a=n(857),l=n(1003)
const c=e=>{let t=class extends e{destroy(){var e,t
this.destroyed||(null==(e=this._get("handles"))||e.destroy(),null==(t=this._get("updatingHandles"))||t.destroy())}get handles(){return this._get("handles")||new s.a}get updatingHandles(){return this._get("updatingHandles")||new l.a}}
return Object(r.a)([Object(o.b)({readOnly:!0})],t.prototype,"handles",null),Object(r.a)([Object(o.b)({readOnly:!0})],t.prototype,"updatingHandles",null),t=Object(r.a)([Object(a.a)("esri.core.HandleOwner")],t),t}
let u=class extends(c(i.a)){}
u=Object(r.a)([Object(a.a)("esri.core.HandleOwner")],u)},914:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k}))
var r=n(856),i=n(78),s=n(148),o=n(660),a=n(996),l=n(354),c=n(860),u=n(903),d=n(177),h=n(20),f=n(861),p=n(858),b=(n(353),n(77),n(859)),m=n(865),y=n(857),g=n(658),O=n(879),v=n(926),j=n(862)
let w=class extends j.a{constructor(e){super(e),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}}
Object(r.a)([Object(p.b)()],w.prototype,"nextQueryParams",void 0),Object(r.a)([Object(p.b)()],w.prototype,"queryParams",void 0),Object(r.a)([Object(p.b)()],w.prototype,"results",void 0),Object(r.a)([Object(p.b)()],w.prototype,"total",void 0),w=Object(r.a)([Object(y.a)("esri.portal.PortalQueryResult")],w)
const _=w
var x,S=n(956),M=n(966)
let E
const L={PortalGroup:()=>Promise.resolve().then(n.bind(null,988)),PortalItem:()=>n.e(80).then(n.bind(null,1006)),PortalUser:()=>Promise.resolve().then(n.bind(null,956))}
let I=x=class extends(Object(c.b)(u.a)){constructor(e){super(e),this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.defaultBasemap=null,this.defaultDevBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.devBasemapGalleryGroupQuery=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=i.default.portalUrl,this.urlKey=null,this.user=null,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null)}readAuthorizedCrossOriginDomains(e){if(e)for(const t of e)-1===i.default.request.trustedServers.indexOf(t)&&i.default.request.trustedServers.push(t)
return e}readDefaultBasemap(e){return this._readBasemap(e)}readDefaultDevBasemap(e){return this._readBasemap(e)}readDefaultVectorBasemap(e){return this._readBasemap(e)}get extraQuery(){const e=!(this.user&&this.user.orgId)||this.canSearchPublic
return this.id&&!e?" AND orgid:"+this.id:null}get isOrganization(){return!!this.access}get restUrl(){let e=this.url
if(e){const t=e.indexOf("/sharing")
e=t>0?e.substring(0,t):this.url.replace(/\/+$/,""),e+="/sharing/rest"}return e}get stylesGroupQuery(){return Object(a.c)(d.a.getLogger(this.declaredClass),"stylesGroupQuery",{replacement:"stylesGroupQuery3d",version:"4.21"}),this.stylesGroupQuery3d}get thumbnailUrl(){const e=this.restUrl,t=this.thumbnail
return e&&t?this._normalizeSSL(e+"/portals/self/resources/"+t):null}readUrlKey(e){return e?e.toLowerCase():e}readUser(e){let t=null
return e&&(t=S.default.fromJSON(e),t.portal=this),t}load(e){const t=Promise.all([n.e(28),n.e(293)]).then(n.bind(null,671)).then(({default:t})=>{Object(f.v)(e),E=t}).then(()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,e)).then(e=>{if(s.b){const e=s.b
this.credential=e.findCredential(this.restUrl),this.credential||this.authMode!==x.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=e.on("credential-create",()=>{e.findCredential(this.restUrl)&&this._signIn()}))}this.sourceJSON=e,this.read(e)})
return this.addResolvingPromise(t),Promise.resolve(this)}async createClosestFacilityTask(){Object(a.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/closestFacility",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("closestFacility")
return new(0,(await Promise.all([n.e(1),n.e(2),n.e(32),n.e(60),n.e(343)]).then(n.bind(null,2430))).default)(e)}async createElevationLayers(){await this.load()
const e=this._getHelperService("defaultElevationLayers"),t=(await Promise.all([n.e(22),n.e(42),n.e(56)]).then(n.bind(null,1996))).default
return e?e.map(e=>new t({id:e.id,url:e.url})):[]}async createGeometryService(){Object(a.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/geometryService",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("geometry")
return new(0,(await n.e(159).then(n.bind(null,2416))).default)({url:e})}async createPrintTask(){Object(a.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/print",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("printTask")
return new(0,(await Promise.all([n.e(1),n.e(2),n.e(32),n.e(194)]).then(n.bind(null,2417))).default)(e)}async createRouteTask(){Object(a.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/route",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("route")
return new(0,(await Promise.all([n.e(1),n.e(2),n.e(32),n.e(60),n.e(321)]).then(n.bind(null,2279))).default)(e)}async createServiceAreaTask(){Object(a.b)(d.a.getLogger(this.declaredClass),null,{replacement:"Use helperServices url with esri/rest/serviceArea",version:"4.21"}),await this.load()
const e=this._getHelperServiceUrl("serviceArea")
return new(0,(await Promise.all([n.e(1),n.e(2),n.e(32),n.e(246)]).then(n.bind(null,2431))).default)(e)}fetchBasemaps(e,t){const n=new v.a
return n.query=e||(i.default.apiKey&&Object(M.a)(this.url)?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),n.disableExtraQuery=!0,this.queryGroups(n,t).then(e=>{if(n.num=100,n.query='type:"Web Map" -type:"Web Application"',e.total){const r=e.results[0]
return n.sortField=r.sortField||"name",n.sortOrder=r.sortOrder||"desc",r.queryItems(n,t)}return null}).then(e=>{let t
return t=e&&e.total?e.results.filter(e=>"Web Map"===e.type).map(e=>new E({portalItem:e})):[],t})}fetchCategorySchema(e){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",e).then(e=>e.categorySchema):Object(f.n)(e)?Promise.reject(Object(f.e)()):Promise.resolve([])}fetchFeaturedGroups(e){const t=this.featuredGroups,n=new v.a
if(n.num=100,n.sortField="title",t&&t.length){const r=[]
for(const e of t)r.push(`(title:"${e.title}" AND owner:${e.owner})`)
return n.query=r.join(" OR "),this.queryGroups(n,e).then(e=>e.results)}return Object(f.n)(e)?Promise.reject(Object(f.e)()):Promise.resolve([])}fetchRegions(e){var t
const n=(null==(t=this.user)?void 0:t.culture)||this.culture||Object(O.b)()
return this._request(this.restUrl+"/portals/regions",{...e,query:{culture:n}})}fetchSettings(e){var t
const n=(null==(t=this.user)?void 0:t.culture)||this.culture||Object(O.b)()
return this._request(this.restUrl+"/portals/self/settings",{...e,query:{culture:n}})}static getDefault(){return x._default&&!x._default.destroyed||(x._default=new x),x._default}queryGroups(e,t){return this._queryPortal("/community/groups",e,"PortalGroup",t)}queryItems(e,t){return this._queryPortal("/search",e,"PortalItem",t)}queryUsers(e,t){return e.sortField||(e.sortField="username"),this._queryPortal("/community/users",e,"PortalUser",t)}toJSON(){throw new l.a("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
return new x({sourceJSON:e})}_getHelperService(e){const t=this.helperServices&&this.helperServices[e]
if(!t)throw new l.a("portal:service-not-found",`The \`helperServices\` do not include an entry named "${e}"`)
return t}_getHelperServiceUrl(e){const t=this._getHelperService(e)
if(!t.url)throw new l.a("portal:service-url-not-found",`The \`helperServices\` entry "${e}" does not include a \`url\` value`)
return t.url}_fetchSelf(e=this.authMode,t=!1,n){const r=this.restUrl+"/portals/self",i={authMode:e,query:{culture:Object(O.b)().toLowerCase()},...n}
return"auto"===i.authMode&&(i.authMode="no-prompt"),t&&(i.query.default=!0),this._request(r,i)}_queryPortal(e,t,n,r){const i=Object(b.m)(v.a,t),s=t=>this._request(this.restUrl+e,{...i.toRequestOptions(this),...r}).then(e=>{const n=i.clone()
return n.start=e.nextStart,new _({nextQueryParams:n,queryParams:i,total:e.total,results:x._resultsToTypedArray(t,{portal:this},e,r)})}).then(e=>Promise.all(e.results.map(t=>"function"==typeof t.when?t.when():e)).then(()=>e,t=>(Object(f.u)(t),e)))
return n&&L[n]?L[n]().then(({default:e})=>(Object(f.v)(r),s(e))):s()}_signIn(){if(this.authMode===x.AUTH_MODE_ANONYMOUS)return Promise.reject(new l.a("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`))
if("failed"===this.loadStatus)return Promise.reject(this.loadError)
const e=e=>Promise.resolve().then(()=>"not-loaded"===this.loadStatus?(e||(this.authMode="immediate"),this.load().then(()=>null)):"loading"===this.loadStatus?this.load().then(()=>this.credential?null:(this.credential=e,this._fetchSelf("immediate"))):this.user&&this.credential===e?null:(this.credential=e,this._fetchSelf("immediate"))).then(e=>{e&&(this.sourceJSON=e,this.read(e))})
return s.b?s.b.getCredential(this.restUrl).then(t=>e(t)):e(this.credential)}_normalizeSSL(e){return e.replace(/^http:/i,"https:").replace(":7080",":7443")}_normalizeUrl(e){const t=this.credential&&this.credential.token
return this._normalizeSSL(t?e+(e.indexOf("?")>-1?"&":"?")+"token="+t:e)}_requestToTypedArray(e,t,n){return this._request(e,t).then(e=>{const t=x._resultsToTypedArray(n,{portal:this},e)
return Promise.all(t.map(t=>"function"==typeof t.when?t.when():e)).then(()=>t,()=>t)})}_readBasemap(e){if(e){const t=E.fromJSON(e)
return t.portalItem={portal:this},t}return null}_request(e,t={}){const n={f:"json",...t.query},{authMode:r=(this.authMode===x.AUTH_MODE_ANONYMOUS?"anonymous":"auto"),body:i=null,cacheBust:s=!1,method:a="auto",responseType:l="json",signal:c}=t,u={authMode:r,body:i,cacheBust:s,method:a,query:n,responseType:l,timeout:0,signal:c}
return Object(o.default)(this._normalizeSSL(e),u).then(e=>e.data)}static _resultsToTypedArray(e,t,n,r){let i
if(n){const s=Object(h.k)(r)?r.signal:null
i=n.listings||n.notifications||n.userInvitations||n.tags||n.items||n.groups||n.comments||n.provisions||n.results||n.relatedItems||n,(e||t)&&(i=i.map(n=>{const r=Object.assign(e?e.fromJSON(n):n,t)
return"function"==typeof r.load&&r.load(s),r}))}else i=[]
return i}}
I.AUTH_MODE_ANONYMOUS="anonymous",I.AUTH_MODE_AUTO="auto",I.AUTH_MODE_IMMEDIATE="immediate",Object(r.a)([Object(p.b)()],I.prototype,"access",void 0),Object(r.a)([Object(p.b)()],I.prototype,"allSSL",void 0),Object(r.a)([Object(p.b)()],I.prototype,"authMode",void 0),Object(r.a)([Object(p.b)()],I.prototype,"authorizedCrossOriginDomains",void 0),Object(r.a)([Object(m.a)("authorizedCrossOriginDomains")],I.prototype,"readAuthorizedCrossOriginDomains",null),Object(r.a)([Object(p.b)()],I.prototype,"basemapGalleryGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"bingKey",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canListApps",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canListData",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canListPreProvisionedItems",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canProvisionDirectPurchase",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canSearchPublic",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canShareBingPublic",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canSharePublic",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canSignInArcGIS",void 0),Object(r.a)([Object(p.b)()],I.prototype,"canSignInIDP",void 0),Object(r.a)([Object(p.b)()],I.prototype,"colorSetsGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"commentsEnabled",void 0),Object(r.a)([Object(p.b)({type:Date})],I.prototype,"created",void 0),Object(r.a)([Object(p.b)()],I.prototype,"credential",void 0),Object(r.a)([Object(p.b)()],I.prototype,"culture",void 0),Object(r.a)([Object(p.b)()],I.prototype,"currentVersion",void 0),Object(r.a)([Object(p.b)()],I.prototype,"customBaseUrl",void 0),Object(r.a)([Object(p.b)()],I.prototype,"defaultBasemap",void 0),Object(r.a)([Object(m.a)("defaultBasemap")],I.prototype,"readDefaultBasemap",null),Object(r.a)([Object(p.b)()],I.prototype,"defaultDevBasemap",void 0),Object(r.a)([Object(m.a)("defaultDevBasemap")],I.prototype,"readDefaultDevBasemap",null),Object(r.a)([Object(p.b)({type:g.default})],I.prototype,"defaultExtent",void 0),Object(r.a)([Object(p.b)()],I.prototype,"defaultVectorBasemap",void 0),Object(r.a)([Object(m.a)("defaultVectorBasemap")],I.prototype,"readDefaultVectorBasemap",null),Object(r.a)([Object(p.b)()],I.prototype,"description",void 0),Object(r.a)([Object(p.b)()],I.prototype,"devBasemapGalleryGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"eueiEnabled",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],I.prototype,"extraQuery",null),Object(r.a)([Object(p.b)()],I.prototype,"featuredGroups",void 0),Object(r.a)([Object(p.b)()],I.prototype,"featuredItemsGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"galleryTemplatesGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"livingAtlasGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"hasCategorySchema",void 0),Object(r.a)([Object(p.b)()],I.prototype,"helpBase",void 0),Object(r.a)([Object(p.b)()],I.prototype,"helperServices",void 0),Object(r.a)([Object(p.b)()],I.prototype,"helpMap",void 0),Object(r.a)([Object(p.b)()],I.prototype,"homePageFeaturedContent",void 0),Object(r.a)([Object(p.b)()],I.prototype,"homePageFeaturedContentCount",void 0),Object(r.a)([Object(p.b)()],I.prototype,"httpPort",void 0),Object(r.a)([Object(p.b)()],I.prototype,"httpsPort",void 0),Object(r.a)([Object(p.b)()],I.prototype,"id",void 0),Object(r.a)([Object(p.b)()],I.prototype,"ipCntryCode",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],I.prototype,"isOrganization",null),Object(r.a)([Object(p.b)()],I.prototype,"isPortal",void 0),Object(r.a)([Object(p.b)()],I.prototype,"isReadOnly",void 0),Object(r.a)([Object(p.b)()],I.prototype,"layerTemplatesGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"maxTokenExpirationMinutes",void 0),Object(r.a)([Object(p.b)({type:Date})],I.prototype,"modified",void 0),Object(r.a)([Object(p.b)()],I.prototype,"name",void 0),Object(r.a)([Object(p.b)()],I.prototype,"portalHostname",void 0),Object(r.a)([Object(p.b)()],I.prototype,"portalMode",void 0),Object(r.a)([Object(p.b)()],I.prototype,"portalProperties",void 0),Object(r.a)([Object(p.b)()],I.prototype,"region",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],I.prototype,"restUrl",null),Object(r.a)([Object(p.b)()],I.prototype,"rotatorPanels",void 0),Object(r.a)([Object(p.b)()],I.prototype,"showHomePageDescription",void 0),Object(r.a)([Object(p.b)()],I.prototype,"sourceJSON",void 0),Object(r.a)([Object(p.b)()],I.prototype,"staticImagesUrl",void 0),Object(r.a)([Object(p.b)({readOnly:!0,json:{read:!1}})],I.prototype,"stylesGroupQuery",null),Object(r.a)([Object(p.b)({json:{name:"2DStylesGroupQuery"}})],I.prototype,"stylesGroupQuery2d",void 0),Object(r.a)([Object(p.b)({json:{name:"stylesGroupQuery"}})],I.prototype,"stylesGroupQuery3d",void 0),Object(r.a)([Object(p.b)()],I.prototype,"supportsHostedServices",void 0),Object(r.a)([Object(p.b)()],I.prototype,"symbolSetsGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"templatesGroupQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"thumbnail",void 0),Object(r.a)([Object(p.b)({readOnly:!0})],I.prototype,"thumbnailUrl",null),Object(r.a)([Object(p.b)()],I.prototype,"units",void 0),Object(r.a)([Object(p.b)()],I.prototype,"url",void 0),Object(r.a)([Object(p.b)()],I.prototype,"urlKey",void 0),Object(r.a)([Object(m.a)("urlKey")],I.prototype,"readUrlKey",null),Object(r.a)([Object(p.b)()],I.prototype,"user",void 0),Object(r.a)([Object(m.a)("user")],I.prototype,"readUser",null),Object(r.a)([Object(p.b)()],I.prototype,"useStandardizedQuery",void 0),Object(r.a)([Object(p.b)()],I.prototype,"useVectorBasemaps",void 0),Object(r.a)([Object(p.b)()],I.prototype,"vectorBasemapGalleryGroupQuery",void 0),I=x=Object(r.a)([Object(y.a)("esri.portal.Portal")],I)
const k=I},915:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return d}))
var r=n(659),i=n(902),s=n(872)
function o(e){return new r.default({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const a=o(i.a),l=o(i.b),c=o(i.c),u=new r.default({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.a.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`})
function d(e){return e&&(Object(s.i)(e)||e===l)?l:e&&(Object(s.j)(e)||e===c)?c:a}function h(e){return e&&(Object(s.i)(e)||e===l)?i.b:e&&(Object(s.j)(e)||e===c)?i.c:i.a}function f(e){return Object(s.n)(e)?i.b:Object(s.o)(e)?i.c:i.a}},916:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return p}))
var r=n(872)
function i(e){if(!e)return null
if(Array.isArray(e))return e
const t=e.hasZ,n=e.hasM
if("point"===e.type)return n&&t?[e.x,e.y,e.z,e.m]:t?[e.x,e.y,e.z]:n?[e.x,e.y,e.m]:[e.x,e.y]
if("polygon"===e.type)return e.rings.slice(0)
if("polyline"===e.type)return e.paths.slice(0)
if("multipoint"===e.type)return e.points.slice(0)
if("extent"===e.type){const t=e.clone().normalize()
if(!t)return null
let n=!1,r=!1
return t.forEach(e=>{e.hasZ&&(n=!0),e.hasM&&(r=!0)}),t.map(e=>{const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]
if(n&&e.hasZ){const n=.5*(e.zmax-e.zmin)
for(let e=0;e<t.length;e++)t[e].push(n)}if(r&&e.hasM){const n=.5*(e.mmax-e.mmin)
for(let e=0;e<t.length;e++)t[e].push(n)}return t})}return null}function s(e,t){const n=t[0]-e[0],r=t[1]-e[1]
if(e.length>2&&t.length>2){const i=e[2]-t[2]
return Math.sqrt(n*n+r*r+i*i)}return Math.sqrt(n*n+r*r)}function o(e,t,n){const r=e[0]+n*(t[0]-e[0]),i=e[1]+n*(t[1]-e[1])
return e.length>2&&t.length>2?[r,i,e[2]+n*(t[2]-e[2])]:[r,i]}function a(e,t,n,r){const[i,s]=t,[o,a]=n[r],[l,c]=n[r+1],u=l-o,d=c-a,h=u*u+d*d,f=(i-o)*u+(s-a)*d,p=Math.min(1,Math.max(0,f/h))
return e[0]=o+u*p,e[1]=a+d*p,e}function l(e,t){return o(e,t,.5)}function c(e){const t=e.length
let n=0
for(let r=0;r<t-1;++r)n+=s(e[r],e[r+1])
return n}function u(e,t){if(t<=0)return e[0]
const n=e.length
let r=0
for(let i=0;i<n-1;++i){const n=s(e[i],e[i+1])
if(t-r<n){const s=(t-r)/n
return o(e[i],e[i+1],s)}r+=n}return e[n-1]}function d(e,t,n){const r=e.length
let i=0,s=0,o=0
for(let a=0;a<r;a++){const l=e[a],c=e[(a+1)%r]
let u=2
i+=l[0]*c[1]-c[0]*l[1],l.length>2&&c.length>2&&n&&(s+=l[0]*c[2]-c[0]*l[2],u=3),l.length>u&&c.length>u&&t&&(o+=l[0]*c[u]-c[0]*l[u])}return i<=0&&s<=0&&o<=0}function h(e){if("rings"in e){for(const t of e.rings)t.length<3||t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]])
if(e.rings.length>0&&!d(e.rings[0],e.hasM,e.hasZ))for(let t=0;t<e.rings.length;++t)e.rings[t]=e.rings[t].reverse()}}function f(e){return"polygon"!==e.type&&"polyline"!==e.type||p("polygon"===e.type?e.rings:e.paths,e.spatialReference),e}function p(e,t){const n=Object(r.e)(t)
if(!n)return
const i=n.valid[0],s=n.valid[1],o=s-i
for(const t of e){let e=1/0,n=-1/0
t.forEach(t=>{let r=t[0]
for(;r<i;)r+=o
for(;r>s;)r-=o
e=Math.min(e,r),n=Math.max(n,r),t[0]=r})
const r=n-e
o-r<r&&t.forEach(e=>{e[0]<0&&(e[0]+=o)})}}},921:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}))
var r=n(20),i=n(879)
const s={ar:"ar-u-nu-latn"}
let o=new WeakMap,a={}
function l(e={}){const t={}
return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function c(e,t){return function(e){const t=e||a
if(!o.has(t)){const n=Object(i.b)(),r=s[Object(i.b)()]||n
o.set(t,new Intl.NumberFormat(r,e))}return Object(r.c)(o.get(t))}(t).format(e)}Object(i.a)(()=>{o=new WeakMap,a={}})},922:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y}))
var r=n(863),i=n(879)
const s={year:"numeric",month:"numeric",day:"numeric"},o={year:"numeric",month:"long",day:"numeric"},a={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},u={...c,second:"numeric"},d={"short-date":s,"short-date-short-time":{...s,...c},"short-date-short-time-24":{...s,...c,hour12:!1},"short-date-long-time":{...s,...u},"short-date-long-time-24":{...s,...u,hour12:!1},"short-date-le":s,"short-date-le-short-time":{...s,...c},"short-date-le-short-time-24":{...s,...c,hour12:!1},"short-date-le-long-time":{...s,...u},"short-date-le-long-time-24":{...s,...u,hour12:!1},"long-month-day-year":o,"long-month-day-year-short-time":{...o,...c},"long-month-day-year-short-time-24":{...o,...c,hour12:!1},"long-month-day-year-long-time":{...o,...u},"long-month-day-year-long-time-24":{...o,...u,hour12:!1},"day-short-month-year":a,"day-short-month-year-short-time":{...a,...c},"day-short-month-year-short-time-24":{...a,...c,hour12:!1},"day-short-month-year-long-time":{...a,...u},"day-short-month-year-long-time-24":{...a,...u,hour12:!1},"long-date":l,"long-date-short-time":{...l,...c},"long-date-short-time-24":{...l,...c,hour12:!1},"long-date-long-time":{...l,...u},"long-date-long-time-24":{...l,...u,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":u},h=Object(r.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),f=(h.apiValues,h.toJSON.bind(h),h.fromJSON.bind(h),{ar:"ar-u-nu-latn-ca-gregory"})
let p=new WeakMap,b=d["short-date-short-time"]
function m(e){return d[e]||null}function y(e,t){return function(e){const t=e||b
if(!p.has(t)){const e=Object(i.b)(),n=f[Object(i.b)()]||e
p.set(t,new Intl.DateTimeFormat(n,t))}return p.get(t)}(t).format(e)}Object(i.a)(()=>{p=new WeakMap,b=d["short-date-short-time"]})},926:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var r,i=n(856),s=n(862),o=n(863),a=n(178),l=n(20),c=n(858),u=(n(859),n(857)),d=n(658),h=n(659),f=n(662)
const p=new o.a({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"})
let b=r=class extends s.a{constructor(e){super(e),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(e){"asc"!==e&&"desc"!==e||this._set("sortOrder",e)}clone(){return new r({categories:this.categories?Object(a.a)(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(e,t){let n,r
if(this.categories&&(n=this.categories.map(e=>Array.isArray(e)?JSON.stringify(e):e)),this.extent){const e=Object(f.project)(this.extent,h.default.WGS84)
Object(l.k)(e)&&(r=`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`)}let i=this.query
!this.disableExtraQuery&&e.extraQuery&&(i="("+i+")"+e.extraQuery)
const s={categories:n,bbox:r,q:i,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start}
return this.sortField&&(s.sortField=this.sortField.split(",").map(e=>p.toJSON(e.trim())).join(","),s.sortOrder=this.sortOrder),{query:{...t,...s}}}}
Object(i.a)([Object(c.b)()],b.prototype,"categories",void 0),Object(i.a)([Object(c.b)()],b.prototype,"disableExtraQuery",void 0),Object(i.a)([Object(c.b)({type:d.default})],b.prototype,"extent",void 0),Object(i.a)([Object(c.b)()],b.prototype,"filter",void 0),Object(i.a)([Object(c.b)()],b.prototype,"num",void 0),Object(i.a)([Object(c.b)()],b.prototype,"query",void 0),Object(i.a)([Object(c.b)()],b.prototype,"sortField",void 0),Object(i.a)([Object(c.b)()],b.prototype,"sortOrder",null),Object(i.a)([Object(c.b)()],b.prototype,"start",void 0),b=r=Object(i.a)([Object(u.a)("esri.portal.PortalQueryParams")],b)
const m=b},927:function(e,t,n){"use strict"
n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return $})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return C})),n.d(t,"l",(function(){return N})),n.d(t,"m",(function(){return a})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return d})),n.d(t,"q",(function(){return l})),n.d(t,"r",(function(){return c})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return o})),n.d(t,"u",(function(){return E})),n.d(t,"v",(function(){return m})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return x})),n.d(t,"y",(function(){return R})),n.d(t,"z",(function(){return v})),n.d(t,"A",(function(){return S})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return k})),n.d(t,"D",(function(){return I})),n.d(t,"E",(function(){return L})),n.d(t,"F",(function(){return O})),n.d(t,"G",(function(){return A})),n.d(t,"H",(function(){return p})),n.d(t,"I",(function(){return V}))
var r=n(20),i=(n(658),n(884))
function s(e=$){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function o(e,t,n,r,i,o,a=s()){return a[0]=e,a[1]=t,a[2]=n,a[3]=r,a[4]=i,a[5]=o,a}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,n=0,r=t.length/3){let i=e[0],s=e[1],o=e[2],a=e[3],l=e[4],c=e[5]
for(let e=0;e<r;e++)i=Math.min(i,t[n+3*e]),s=Math.min(s,t[n+3*e+1]),o=Math.min(o,t[n+3*e+2]),a=Math.max(a,t[n+3*e]),l=Math.max(l,t[n+3*e+1]),c=Math.max(c,t[n+3*e+2])
e[0]=i,e[1]=s,e[2]=o,e[3]=a,e[4]=l,e[5]=c}function d(e,t,n,r){e[0]=Math.min(e[0],e[0]+t),e[3]=Math.max(e[3],e[3]+t),e[1]=Math.min(e[1],e[1]+n),e[4]=Math.max(e[4],e[4]+n),e[2]=Math.min(e[2],e[2]+r),e[5]=Math.max(e[5],e[5]+r)}function h(e,t,n){const r=t.length
let i=e[0],s=e[1],o=e[2],a=e[3],l=e[4],c=e[5]
if(n)for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),s=Math.min(s,n[1]),o=Math.min(o,n[2]),a=Math.max(a,n[0]),l=Math.max(l,n[1]),c=Math.max(c,n[2])}else for(let e=0;e<r;e++){const n=t[e]
i=Math.min(i,n[0]),s=Math.min(s,n[1]),a=Math.max(a,n[0]),l=Math.max(l,n[1])}e[0]=i,e[1]=s,e[2]=o,e[3]=a,e[4]=l,e[5]=c}function f(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1
return!0}function p(e){return e[0]>=e[3]?0:e[3]-e[0]}function b(e){return e[1]>=e[4]?0:e[4]-e[1]}function m(e){return e[2]>=e[5]?0:e[5]-e[2]}function y(e){const t=p(e),n=m(e),r=b(e)
return Math.sqrt(t*t+n*n+r*r)}function g(e,t=[0,0,0]){return t[0]=e[0]+p(e)/2,t[1]=e[1]+b(e)/2,t[2]=e[2]+m(e)/2,t}function O(e,t=[0,0,0]){return t[0]=p(e),t[1]=b(e),t[2]=m(e),t}function v(e){return Math.max(p(e),m(e),b(e))}function j(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function w(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]}function _(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}function x(e,t){return!!Object(r.j)(t)||_(e,t)}function S(e,t,n,r,i=e){return i[0]=e[0]+t,i[1]=e[1]+n,i[2]=e[2]+r,i[3]=e[3]+t,i[4]=e[4]+n,i[5]=e[5]+r,i}function M(e,t,n=e){const r=e[0]+p(e)/2,i=e[1]+b(e)/2,s=e[2]+m(e)/2
return n[0]=r+(e[0]-r)*t,n[1]=i+(e[1]-i)*t,n[2]=s+(e[2]-s)*t,n[3]=r+(e[3]-r)*t,n[4]=i+(e[4]-i)*t,n[5]=s+(e[5]-s)*t,n}function E(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function L(e,t,n=e){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n!==e&&(n[3]=e[3],n[4]=e[4],n[5]=e[5]),n}function I(e,t,n=e){return n[3]=t[0],n[4]=t[1],n[5]=t[2],n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),e}function k(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function C(e){return e?k(e,D):s(D)}function A(e,t){return t||(t=Object(i.m)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function T(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function P(e){return 6===e.length}function R(e){return 0===p(e)&&0===b(e)&&0===m(e)}function N(e,t,n){if(Object(r.j)(e)||Object(r.j)(t))return e===t
if(!P(e)||!P(t))return!1
if(n){for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1
return!0}function V(e,t,n,r,i,s){return o(e,t,n,r,i,s,F)}const z=[-1/0,-1/0,-1/0,1/0,1/0,1/0],D=[1/0,1/0,1/0,-1/0,-1/0,-1/0],$=[0,0,0,0,0,0],F=s()},928:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return d}))
var r=n(20)
const i=[0,0]
function s(e,t){return!!Object(r.k)(t)&&u(e,t.x,t.y,t.z)}function o(e,t){if(!t.points||t.points.length)return!1
for(const n of t.points)if(!l(e,n))return!1
return!0}function a(e,t){const{xmin:n,ymin:r,zmin:i,xmax:s,ymax:o,zmax:a}=t
return e.hasZ&&t.hasZ?u(e,n,r,i)&&u(e,n,o,i)&&u(e,s,o,i)&&u(e,s,r,i)&&u(e,n,r,a)&&u(e,n,o,a)&&u(e,s,o,a)&&u(e,s,r,a):u(e,n,r)&&u(e,n,o)&&u(e,s,o)&&u(e,s,r)}function l(e,t){return u(e,t[0],t[1])}function c(e,t){return u(e,t[0],t[1],t[2])}function u(e,t,n,r){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax&&(null==r||!e.hasZ||r>=e.zmin&&r<=e.zmax)}function d(e,t){return i[1]=t.y,i[0]=t.x,h(e,i)}function h(e,t){return function(e,t){if(!e)return!1
if(function(e){return!Array.isArray(e[0][0])}(e))return f(!1,e,t)
let n=!1
for(let r=0,i=e.length;r<i;r++)n=f(n,e[r],t)
return n}(e.rings,t)}function f(e,t,n){const[r,i]=n
let s=e,o=0
for(let e=0,n=t.length;e<n;e++){o++,o===n&&(o=0)
const[a,l]=t[e],[c,u]=t[o];(l<i&&u>=i||u<i&&l>=i)&&a+(i-l)/(u-l)*(c-a)<r&&(s=!s)}return s}},929:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return h}))
var r=n(943)
const i=[]
function s(e,t,n,r){return{xmin:e,ymin:t,xmax:n,ymax:r}}function o(e,t,n,r,i,s){return{xmin:e,ymin:t,zmin:n,xmax:r,ymax:i,zmax:s}}function a(e,t,n,r,i,s){return{xmin:e,ymin:t,mmin:n,xmax:r,ymax:i,mmax:s}}function l(e,t,n,r,i,s,o,a){return{xmin:e,ymin:t,zmin:n,mmin:r,xmax:i,ymax:s,zmax:o,mmax:a}}function c(e,t=!1,n=!1){return t?n?l(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]):o(e[0],e[1],e[2],e[3],e[4],e[5]):n?a(e[0],e[1],e[2],e[3],e[4],e[5]):s(e[0],e[1],e[2],e[3])}function u(e){return e?function(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}(e)?e:function(e){return void 0!==e.x&&void 0!==e.y}(e)?function(e){const{x:t,y:n,z:r,m:i}=e,c=null!=i
return null!=r?c?l(t,n,r,i,t,n,r,i):o(t,n,r,t,n,r):c?a(t,n,i,t,n,i):s(t,n,t,n)}(e):function(e){return void 0!==e.rings}(e)?d(e):function(e){return void 0!==e.paths}(e)?h(e):function(e){return void 0!==e.points}(e)?function(e){const{hasZ:t,hasM:n,points:s}=e
return c(Object(r.c)(i,s,t,n),t,n)}(e):null:null}function d(e){const{hasZ:t,hasM:n,rings:s}=e,o=Object(r.d)(i,s,t,n)
return o?c(o,t,n):null}function h(e){const{hasZ:t,hasM:n,paths:s}=e,o=Object(r.d)(i,s,t,n)
return o?c(o,t,n):null}},931:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return l}))
var r=n(20),i=n(861)
function s(e,t,n){return Object(i.j)(e.map((e,r)=>t.apply(n,[e,r])))}function o(e,t,n){return Object(i.j)(e.map((e,r)=>t.apply(n,[e,r]))).then(e=>e.map(e=>e.value))}function a(e){return Object(r.j)(e)?Object(i.t)():e.then(e=>({ok:!0,value:e})).catch(e=>({ok:!1,error:e}))}function l(e){return e.then(e=>({ok:!0,value:e})).catch(e=>(Object(i.u)(e),{ok:!1,error:e}))}function c(e){if(!0===e.ok)return e.value
throw e.error}},932:function(e,t,n){"use strict"
function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function i(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object")
if("on"in e)return e.on(t,n)
if(Array.isArray(t)){const r=t.slice()
for(const t of r)e.addEventListener(t,n)
return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function s(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object")
if("once"in e)return e.once(t,n)
const s=i(e,t,t=>{s.remove(),n.call(e,t)})
return{remove(){s.remove()}}}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s}))
const o={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"}
function a({key:e}){return o[e]||e}},933:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return w})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return f}))
var r=n(894),i=n(658),s=n(659),o=n(936),a=n(666),l=n(1108),c=n(1076)
const u={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},d={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,n){t[n]=!e}}}},h={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.g}}},p={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},b={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}}
function m(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const y={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},g={...y,json:{...y.json,origins:{"web-document":{...y.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,n)=>n&&"service"!==n.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(c.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(c.b)(t.drawingInfo.transparency)}}},O={type:r.a,readOnly:!0,get(){var e,t
if(null==(e=this.layer)||!e.timeInfo)return null
const{datesInUnknownTimezone:n,timeOffset:r,useViewTime:i}=this.layer,s=null==(t=this.view)?void 0:t.timeExtent
let o=this.layer.timeExtent
n&&(o=Object(a.toLocalTimeExtent)(o))
let l=i?s&&o?s.intersection(o):s||o:o
if(!l||l.isEmpty||l.isAllTime)return l
r&&(l=l.offset(-r.value,r.unit)),n&&(l=Object(a.toUTCTimeExtent)(l))
const c=this._get("timeExtent")
return l.equals(c)?c:l}},v={type:i.default,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const n=i.default.fromJSON(e)
return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(n.spatialReference=s.default.fromJSON(t.spatialReference)),n}}}},read:!1}},j={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},w={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},_={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}}},934:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n(77)
const r={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}}
function s(e,t,n){const r=new Date(e.getTime())
if(t&&n){const e=i[n],{getter:s,setter:o,multiplier:a}=e
if("months"===n){const e=function(e,t){const n=new Date(e,t+1,1)
return n.setDate(0),n.getDate()}(r.getFullYear(),r.getMonth()+t)
r.getDate()>e&&r.setDate(e)}r[o](r[s]()+t*a)}return r}function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime())
case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())
case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes())
case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours())
case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate())
case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay())
case"months":return new Date(e.getFullYear(),e.getMonth(),1)
case"years":return new Date(e.getFullYear(),0,1)
case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1)
case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1)
default:return new Date}}function a(e,t,n){return 0===e?0:e*r[t]/r[n]}},936:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return l}))
var r=n(20),i=n(292)
function s(e,t){const n=t&&t.url&&t.url.path
if(e&&n&&(e=Object(i.C)(e,n,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const n=Object(i.E)(e,t.portalItem.itemUrl)
u.test(n)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(n).path)}return h(e,t&&t.portal)}function o(e,t,n=f.YES){if(!e)return e
!Object(i.u)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e)
let r=Object(i.C)(e)
if(t){const n=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path
if(n){const s=h(n,t.portal)
r=Object(i.E)(h(r,t.portal),s,s),r!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=function(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?Object(i.g)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}(r,t&&t.portal),Object(i.u)(r)&&(r=Object(i.F)(r)),null!=t&&t.resources&&null!=t&&t.portalItem&&!Object(i.u)(r)&&!Object(i.w)(r)&&n===f.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r)}),r}function a(e,t,n){return s(e,n)}function l(e,t,n,r){const i=o(e,r)
void 0!==i&&(t[n]=i)}const c=/\/items\/([^\/]+)\/resources\//,u=/^\.\/resources\//
function d(e){const t=Object(r.k)(e)?e.match(c):null
return Object(r.k)(t)?t[1]:null}function h(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e
const n=`${t.urlKey}.${t.customBaseUrl}`,r=Object(i.l)()
return Object(i.s)(r,`${r.scheme}://${n}`)?Object(i.g)(e,t.portalHostname,n):Object(i.g)(e,n,t.portalHostname)}var f,p;(p=f||(f={}))[p.YES=0]="YES",p[p.NO=1]="NO"
const b=Object.freeze({__proto__:null,fromJSON:s,toJSON:o,read:a,write:l,itemIdFromResourceUrl:d,get MarkKeep(){return f}})},943:function(e,t,n){"use strict"
function r(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function i(e){return void 0!==e.points}function s(e){return void 0!==e.x&&void 0!==e.y}function o(e){return void 0!==e.paths}function a(e){return void 0!==e.rings}function l(e){return(t,n)=>null==t?n:null==n?t:e(t,n)}n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return f}))
const c=l(Math.min),u=l(Math.max)
function d(e,t){return o(t)?f(e,t.paths,!1,!1):a(t)?f(e,t.rings,!1,!1):i(t)?b(e,t.points,!1,!1,!1,!1):r(t)?p(e,t):(s(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.x,e[3]=t.y),e)}function h(e,t){return o(t)?f(e,t.paths,!0,!1):a(t)?f(e,t.rings,!0,!1):i(t)?b(e,t.points,!0,!1,!0,!1):r(t)?p(e,t,!0,!1,!0,!1):(s(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.x,e[4]=t.y,e[5]=t.z),e)}function f(e,t,n,r){const i=n?3:2
if(!t.length||!t[0].length)return null
let s,o,a,l,[d,h]=t[0][0],[f,p]=t[0][0]
for(let e=0;e<t.length;e++){const b=t[e]
for(let e=0;e<b.length;e++){const t=b[e],[m,y]=t
if(d=c(d,m),h=c(h,y),f=u(f,m),p=u(p,y),n&&t.length>2){const e=t[2]
s=c(s,e),o=u(o,e)}if(r&&t.length>i){const e=t[i]
a=c(s,e),l=u(o,e)}}}return n?r?(e[0]=d,e[1]=h,e[2]=s,e[3]=a,e[4]=f,e[5]=p,e[6]=o,e[7]=l,e.length=8,e):(e[0]=d,e[1]=h,e[2]=s,e[3]=f,e[4]=p,e[5]=o,e.length=6,e):r?(e[0]=d,e[1]=h,e[2]=a,e[3]=f,e[4]=p,e[5]=l,e.length=6,e):(e[0]=d,e[1]=h,e[2]=f,e[3]=p,e.length=4,e)}function p(e,t,n,r,i,s){const o=t.xmin,a=t.xmax,l=t.ymin,c=t.ymax
let u=t.zmin,d=t.zmax,h=t.mmin,f=t.mmax
return i?(u=u||0,d=d||0,s?(h=h||0,f=f||0,e[0]=o,e[1]=l,e[2]=u,e[3]=h,e[4]=a,e[5]=c,e[6]=d,e[7]=f,e):(e[0]=o,e[1]=l,e[2]=u,e[3]=a,e[4]=c,e[5]=d,e)):s?(h=h||0,f=f||0,e[0]=o,e[1]=l,e[2]=h,e[3]=a,e[4]=c,e[5]=f,e):(e[0]=o,e[1]=l,e[2]=a,e[3]=c,e)}function b(e,t,n,r,i,s){const o=n?3:2,a=r&&s,l=n&&i
if(!t.length||!t[0].length)return null
let d,h,f,p,[b,m]=t[0],[y,g]=t[0]
for(let e=0;e<t.length;e++){const n=t[e],[r,i]=n
if(b=c(b,r),m=c(m,i),y=u(y,r),g=u(g,i),l&&n.length>2){const e=n[2]
d=c(d,e),h=u(h,e)}if(a&&n.length>o){const e=n[o]
f=c(d,e),p=u(h,e)}}return i?(d=d||0,h=h||0,s?(f=f||0,p=p||0,e[0]=b,e[1]=m,e[2]=d,e[3]=f,e[4]=y,e[5]=g,e[6]=h,e[7]=p,e):(e[0]=b,e[1]=m,e[2]=d,e[3]=y,e[4]=g,e[5]=h,e)):s?(f=f||0,p=p||0,e[0]=b,e[1]=m,e[2]=f,e[3]=y,e[4]=g,e[5]=p,e):(e[0]=b,e[1]=m,e[2]=y,e[3]=g,e)}},944:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n(856),i=n(860),s=n(858),o=(n(353),n(77),n(859),n(857))
let a=class extends i.a{constructor(e){super(e),this.type=null}}
Object(r.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=Object(r.a)([Object(o.a)("esri.rest.support.ColorRamp")],a)
const l=a},945:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n(1256),i=function(e){return{vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}},s=function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n]
Array.isArray(o)?s(o,t):null!=o&&!1!==o&&(o.hasOwnProperty("vnodeSelector")||(o=i(o)),t.push(o))}}
function o(e,t,...n){return"function"!=typeof e||Object(r.b)(e)?function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
if(1===n.length&&"string"==typeof n[0])return{vnodeSelector:e,properties:t||void 0,children:void 0,text:n[0],domNode:null}
var i=[]
return s(n,i),{vnodeSelector:e,properties:t||void 0,children:i,text:void 0,domNode:null}}(e,t,...n):e(t,...n)}},956:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return f}))
var r=n(856),i=n(354),s=n(860),o=n(858),a=(n(353),n(77),n(859),n(857))
let l=class extends s.a{constructor(e){super(e),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){const e=this.get("portal.restUrl")
return e?`${e}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new i.a("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}}
Object(r.a)([Object(o.b)({type:Date})],l.prototype,"created",void 0),Object(r.a)([Object(o.b)()],l.prototype,"id",void 0),Object(r.a)([Object(o.b)()],l.prototype,"portal",void 0),Object(r.a)([Object(o.b)()],l.prototype,"title",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],l.prototype,"url",null),Object(r.a)([Object(o.b)()],l.prototype,"username",void 0),l=Object(r.a)([Object(a.a)("esri.portal.PortalFolder")],l)
const c=l
var u,d=n(988)
let h=u=class extends s.a{constructor(...e){super(...e),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}get thumbnailUrl(){const e=this.url,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userContentUrl(){const e=this.get("portal.restUrl")
return e?`${e}/content/users/${this.username}`:null}get url(){const e=this.get("portal.restUrl")
return e?`${e}/community/users/${this.username}`:null}addItem(e){const t=e&&e.item,n=e&&e.data,r=e&&e.folder,i={method:"post"}
t&&(i.query=t.createPostQuery(),null!=n&&("string"==typeof n?i.query.text=n:"object"==typeof n&&(i.query.text=JSON.stringify(n))))
let s=this.userContentUrl
return r&&(s+="/"+("string"==typeof r?r:r.id)),this.portal._request(s+"/addItem",i).then(e=>(t.id=e.id,t.portal=this.portal,t.loaded?t.reload():t.load()))}deleteItem(e){let t=this.userContentUrl
return e.ownerFolder&&(t+="/"+e.ownerFolder),this.portal._request(t+`/items/${e.id}/delete`,{method:"post"}).then(()=>{e.id=null,e.portal=null})}deleteItems(e){const t=this.userContentUrl+"/deleteItems",n=e.map(e=>e.id)
if(n.length){const r={method:"post",query:{items:n.join(",")}}
return this.portal._request(t,r).then(()=>{e.forEach(e=>{e.id=null,e.portal=null})})}return Promise.resolve(void 0)}fetchFolders(){return this.portal._request(this.userContentUrl,{query:{num:1}}).then(e=>{let t
return t=e&&e.folders?e.folders.map(e=>{const t=c.fromJSON(e)
return t.portal=this.portal,t}):[],t})}fetchGroups(){return this.portal._request(this.url).then(e=>{let t
return t=e&&e.groups?e.groups.map(e=>{const t=d.default.fromJSON(e)
return t.portal=this.portal,t}):[],t})}fetchItems(e){e||(e={})
let t,r=this.userContentUrl
return e.folder&&(r+="/"+e.folder.id),n.e(80).then(n.bind(null,1006)).then(({default:n})=>{t=n
const i={folders:!1,num:e.num||10,start:e.start||1,sortField:e.sortField||"created",sortOrder:e.sortOrder||"asc"}
return this.portal._request(r,{query:i})}).then(e=>{let n
return e&&e.items?(n=e.items.map(e=>{const n=t.fromJSON(e)
return n.portal=this.portal,n}),Promise.all(n.map(e=>e.load())).catch(e=>e).then(()=>({items:n,nextStart:e.nextStart,total:e.total}))):{items:[],nextStart:-1,total:0}})}fetchTags(){return this.portal._request(this.url+"/tags").then(e=>e.tags)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}queryFavorites(e){return this.favGroupId?(this._favGroup||(this._favGroup=new d.default({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(e)):Promise.reject(new i.a("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new i.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(e){if(!e)return null
if(e.declaredClass)throw new Error("JSON object is already hydrated")
const t=new u
return t.sourceJSON=e,t.read(e),t}}
Object(r.a)([Object(o.b)()],h.prototype,"access",void 0),Object(r.a)([Object(o.b)({type:Date})],h.prototype,"created",void 0),Object(r.a)([Object(o.b)()],h.prototype,"culture",void 0),Object(r.a)([Object(o.b)()],h.prototype,"description",void 0),Object(r.a)([Object(o.b)()],h.prototype,"email",void 0),Object(r.a)([Object(o.b)()],h.prototype,"favGroupId",void 0),Object(r.a)([Object(o.b)()],h.prototype,"fullName",void 0),Object(r.a)([Object(o.b)({type:Date})],h.prototype,"modified",void 0),Object(r.a)([Object(o.b)()],h.prototype,"orgId",void 0),Object(r.a)([Object(o.b)()],h.prototype,"portal",void 0),Object(r.a)([Object(o.b)()],h.prototype,"preferredView",void 0),Object(r.a)([Object(o.b)()],h.prototype,"privileges",void 0),Object(r.a)([Object(o.b)()],h.prototype,"region",void 0),Object(r.a)([Object(o.b)()],h.prototype,"role",void 0),Object(r.a)([Object(o.b)()],h.prototype,"roleId",void 0),Object(r.a)([Object(o.b)()],h.prototype,"sourceJSON",void 0),Object(r.a)([Object(o.b)()],h.prototype,"thumbnail",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],h.prototype,"thumbnailUrl",null),Object(r.a)([Object(o.b)()],h.prototype,"units",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],h.prototype,"userContentUrl",null),Object(r.a)([Object(o.b)({readOnly:!0})],h.prototype,"url",null),Object(r.a)([Object(o.b)()],h.prototype,"username",void 0),Object(r.a)([Object(o.b)()],h.prototype,"userType",void 0),h=u=Object(r.a)([Object(a.a)("esri.portal.PortalUser")],h)
const f=h},959:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}))
var r,i,s=n(856),o=n(862),a=n(20),l=n(861),c=n(857);(i=r||(r={}))[i.PENDING=0]="PENDING",i[i.RESOLVED=1]="RESOLVED",i[i.REJECTED=2]="REJECTED"
class u{constructor(e){this.instance=e,this._resolver=Object(l.f)(),this._status=r.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=r.RESOLVED,this._cleanUp()},()=>{this._status=r.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===r.RESOLVED}isRejected(){return this._status===r.REJECTED}isFulfilled(){return this._status!==r.PENDING}abort(){this._resolver.reject(Object(l.e)())}when(e,t){return this._resolver.promise.then(e,t)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return
const e=Object(l.f)(),t=[...this._resolvingPromises,Object(a.c)(e.promise)],n=this._allPromise=Promise.all(t)
n.then(()=>{this.isFulfilled()||this._allPromise!==n||this._resolver.resolve(this.instance)},e=>{this.isFulfilled()||this._allPromise!==n||Object(l.m)(e)||this._resolver.reject(e)}),e.resolve()}}const d=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new u(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return new Promise((e,t)=>{this._promiseProps.when(e,t)}).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}
return t=Object(s.a)([Object(c.a)("esri.core.Promise")],t),t}
let h=class extends(d(o.a)){}
h=Object(s.a)([Object(c.a)("esri.core.Promise")],h)},963:function(e,t,n){"use strict"
function r(e){}function i(e){return()=>e}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n(77)},964:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n(858)
function i(e,t){const n=t?{...t,source:e}:e
return Object(r.b)({aliasOf:n})}},965:function(e,t,n){"use strict"
n.d(t,"a",(function(){return N}))
var r,i=n(856),s=n(858),o=(n(353),n(77),n(859)),a=n(865),l=n(857),c=n(864),u=n(881),d=n(1065),h=n(1293)
let f=r=class extends d.a{constructor(e){super(e),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new r({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(s.b)({readOnly:!0})],f.prototype,"cache",null),Object(i.a)([Object(s.b)({type:["color"],json:{type:["colorInfo"]}})],f.prototype,"type",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],f.prototype,"normalizationField",void 0),Object(i.a)([Object(s.b)({type:[h.a],json:{write:!0}})],f.prototype,"stops",null),f=r=Object(i.a)([Object(l.a)("esri.renderers.visualVariables.ColorVariable")],f)
const p=f
var b,m=n(860),y=n(1076)
let g=b=class extends m.a{constructor(e){super(e),this.label=null,this.opacity=null,this.value=null}readOpacity(e,t){return Object(y.b)(t.transparency)}writeOpacity(e,t,n){t[n]=Object(y.a)(e)}clone(){return new b({label:this.label,opacity:this.opacity,value:this.value})}}
Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],g.prototype,"label",void 0),Object(i.a)([Object(s.b)({type:Number,json:{type:o.a,write:{target:"transparency"}}})],g.prototype,"opacity",void 0),Object(i.a)([Object(a.a)("opacity",["transparency"])],g.prototype,"readOpacity",null),Object(i.a)([Object(c.a)("opacity")],g.prototype,"writeOpacity",null),Object(i.a)([Object(s.b)({type:Number,json:{write:!0}})],g.prototype,"value",void 0),g=b=Object(i.a)([Object(l.a)("esri.renderers.visualVariables.support.OpacityStop")],g)
const O=g
var v
let j=v=class extends d.a{constructor(e){super(e),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new v({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}}
Object(i.a)([Object(s.b)({readOnly:!0})],j.prototype,"cache",null),Object(i.a)([Object(s.b)({type:["opacity"],json:{type:["transparencyInfo"]}})],j.prototype,"type",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],j.prototype,"normalizationField",void 0),Object(i.a)([Object(s.b)({type:[O],json:{write:!0}})],j.prototype,"stops",null),j=v=Object(i.a)([Object(l.a)("esri.renderers.visualVariables.OpacityVariable")],j)
const w=j
var _=n(1216),x=n(1085),S=n(862),M=n(863),E=n(177),L=n(970)
const I=E.a.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),k={color:p,size:x.a,opacity:w,rotation:_.a},C=new M.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),A=/^\[([^\]]+)\]$/i
let T=class extends S.a{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(e){if(this._resetVariables(),(e=e&&e.filter(e=>!!e))&&e.length){for(const t of e)switch(t.type){case"color":this.colorVariables.push(t)
break
case"opacity":this.opacityVariables.push(t)
break
case"rotation":this.rotationVariables.push(t)
break
case"size":this.sizeVariables.push(t)}this.sizeVariables.length&&this.sizeVariables.some(e=>!!e.target)&&e.sort((e,t)=>{let n=null
return n=e.target===t.target?0:e.target?1:-1,n})
for(let t=0;t<e.length;t++)e[t].index=t
this._set("visualVariables",e)}else this._set("visualVariables",e)}readVariables(e,t,n){const{rotationExpression:r,rotationType:i}=t,s=r&&r.match(A),o=s&&s[1]
if(o&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:i,field:o})),e)return e.map(e=>{const t=C.read(e.type),r=k[t]
r||(I.warn("Unknown variable type: "+t),n&&n.messages&&n.messages.push(new L.a("visual-variable:unsupported",`visualVariable of type '${t}' is not supported`,{definition:e,context:n})))
const i=new r
return i.read(e,n),i})}writeVariables(e,t){const n=[]
for(const r of e){const e=r.toJSON(t)
e&&n.push(e)}return n}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}}
Object(i.a)([Object(s.b)()],T.prototype,"visualVariables",null),T=Object(i.a)([Object(l.a)("esri.renderers.visualVariables.VisualVariableFactory")],T)
const P=T,R={base:d.a,key:"type",typeMap:{opacity:w,color:p,rotation:_.a,size:x.a}},N=e=>{let t=class extends e{constructor(){super(...arguments),this._vvFactory=new P}set visualVariables(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(e,t,n){return this._vvFactory.readVariables(e,t,n)}writeVisualVariables(e,t,n,r){t[n]=this._vvFactory.writeVariables(e,r)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1
for(const e of this.visualVariables)if(e.arcadeRequired)return!0
return!1}hasVisualVariables(e,t){return e?this.getVisualVariablesForType(e,t).length>0:this.getVisualVariablesForType("size",t).length>0||this.getVisualVariablesForType("color",t).length>0||this.getVisualVariablesForType("opacity",t).length>0||this.getVisualVariablesForType("rotation",t).length>0}getVisualVariablesForType(e,t){const n=this.visualVariables
return n?n.filter(n=>n.type===e&&("string"==typeof t?n.target===t:!1!==t||!n.target)):[]}async collectVVRequiredFields(e,t){let n=[]
this.visualVariables&&(n=n.concat(this.visualVariables))
for(const r of n)r&&(r.field&&Object(u.d)(e,t,r.field),r.normalizationField&&Object(u.d)(e,t,r.normalizationField),r.valueExpression&&await Object(u.a)(e,t,r.valueExpression))}}
return Object(i.a)([Object(s.b)({types:[R],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),Object(i.a)([Object(a.a)("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),Object(i.a)([Object(c.a)("visualVariables")],t.prototype,"writeVisualVariables",null),t=Object(i.a)([Object(l.a)("esri.renderers.mixins.VisualVariablesMixin")],t),t}},966:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n(292)
const i=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]
function s(e){const t=Object(r.o)(e,!0)
return t&&t.endsWith(".arcgis.com")&&!i.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},967:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return i}))
const r={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]}
function i(e){return r[e]||r[e.toLowerCase()]}function s(e){var t
return null!=(t=r[e])?t:r[e.toLowerCase()]}function o(e){return[...s(e)]}function a(e,t,n){n<0&&++n,n>1&&--n
const r=6*n
return r<1?e+(t-e)*r:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e}function l(e,t,n,r=1){const i=(e%360+360)%360/360,s=n<=.5?n*(t+1):n+t-n*t,o=2*n-s
return[Math.round(255*a(o,s,i+1/3)),Math.round(255*a(o,s,i)),Math.round(255*a(o,s,i-1/3)),r]}function c(e){const t=e.length>5,n=t?8:4,r=(1<<n)-1,i=t?1:17,s=t?9===e.length:5===e.length
let o=Number("0x"+e.substr(1))
if(isNaN(o))return null
const a=[0,0,0,1]
let l
return s&&(l=o&r,o>>=n,a[3]=i*l/255),l=o&r,o>>=n,a[2]=i*l,l=o&r,o>>=n,a[1]=i*l,l=o&r,o>>=n,a[0]=i*l,a}},968:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}))
var r=n(916)
function i(e){return e?e.hasZ?[e.xmax-e.xmin/2,e.ymax-e.ymin/2,e.zmax-e.zmin/2]:[e.xmax-e.xmin/2,e.ymax-e.ymin/2]:null}function s(e){return e?o(e.rings,e.hasZ):null}function o(e,t){if(!e||!e.length)return null
const n=[],i=[],s=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0]
for(let n=0,r=e.length;n<r;n++){const r=a(e[n],t,s)
r&&i.push(r)}if(i.sort((e,n)=>{let r=e[2]-n[2]
return 0===r&&t&&(r=e[4]-n[4]),r}),i.length&&(n[0]=i[0][0],n[1]=i[0][1],t&&(n[2]=i[0][3]),(n[0]<s[0]||n[0]>s[1]||n[1]<s[2]||n[1]>s[3]||t&&(n[2]<s[4]||n[2]>s[5]))&&(n.length=0)),!n.length){const i=e[0]&&e[0].length?function(e,t){const n=t?[0,0,0]:[0,0],i=t?[0,0,0]:[0,0]
let s=0,o=0,a=0,l=0
for(let c=0,u=e.length;c<u-1;c++){const u=e[c],d=e[c+1]
if(u&&d){n[0]=u[0],n[1]=u[1],i[0]=d[0],i[1]=d[1],t&&u.length>2&&d.length>2&&(n[2]=u[2],i[2]=d[2])
const e=Object(r.c)(n,i)
if(e){s+=e
const n=Object(r.d)(u,d)
o+=e*n[0],a+=e*n[1],t&&n.length>2&&(l+=e*n[2])}}}return s>0?t?[o/s,a/s,l/s]:[o/s,a/s]:e.length?e[0]:null}(e[0],t):null
if(!i)return null
n[0]=i[0],n[1]=i[1],t&&i.length>2&&(n[2]=i[2])}return n}function a(e,t,n){let r=0,i=0,s=0,o=0,a=0
const l=e.length?e[0][0]:0,c=e.length?e[0][1]:0,u=e.length&&t?e[0][2]:0
for(let d=0;d<e.length;d++){const h=e[d],f=e[(d+1)%e.length],[p,b,m]=h,y=p-l,g=b-c,O=t?m-u:void 0,[v,j,w]=f,_=v-l,x=j-c,S=t?w-u:void 0,M=y*x-_*g
if(o+=M,r+=(y+_)*M,i+=(g+x)*M,t&&h.length>2&&f.length>2){const e=y*S-_*O
s+=(O+S)*e,a+=e}p<n[0]&&(n[0]=p),p>n[1]&&(n[1]=p),b<n[2]&&(n[2]=b),b>n[3]&&(n[3]=b),t&&(m<n[4]&&(n[4]=m),m>n[5]&&(n[5]=m))}if(o>0&&(o*=-1),a>0&&(a*=-1),!o)return null
o*=.5,a*=.5
const d=[r/(6*o)+l,i/(6*o)+c,o]
return t&&(n[4]===n[5]||0===a?(d[3]=(n[4]+n[5])/2,d[4]=0):(d[3]=s/(6*a)+u,d[4]=a)),d}},971:function(e,t,n){"use strict"
function r(e){return(t,n)=>{t[n]=e}}n.d(t,"a",(function(){return r}))},976:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r,i=n(856),s=n(873),o=n(178),a=n(858),l=n(859),c=n(868),u=n(857),d=n(944)
let h=r=class extends d.a{constructor(e){super(e),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new r({fromColor:Object(o.a)(this.fromColor),toColor:Object(o.a)(this.toColor),algorithm:this.algorithm})}}
Object(i.a)([Object(c.a)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],h.prototype,"algorithm",void 0),Object(i.a)([Object(a.b)({type:s.a,json:{type:[l.a],write:!0}})],h.prototype,"fromColor",void 0),Object(i.a)([Object(a.b)({type:s.a,json:{type:[l.a],write:!0}})],h.prototype,"toColor",void 0),Object(i.a)([Object(a.b)({type:["algorithmic"]})],h.prototype,"type",void 0),h=r=Object(i.a)([Object(u.a)("esri.rest.support.AlgorithmicColorRamp")],h)
const f=h},977:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}))
var r=n(1346),i=n(920),s=n(1165)
function o(e,t,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1
const i=e.read.source
if("string"==typeof i){if(i===t)return!0
if(i.indexOf(".")>-1&&0===i.indexOf(t)&&Object(r.a)(i,n))return!0}else for(const e of i){if(e===t)return!0
if(e.indexOf(".")>-1&&0===e.indexOf(t)&&Object(r.a)(e,n))return!0}return!1}function a(e,t,n,r,i){let a=Object(s.b)(t[n],i);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(a)&&(e[n]=!0)
for(const l of Object.getOwnPropertyNames(t))a=Object(s.b)(t[l],i),o(a,n,r)&&(e[l]=!0)}function l(e,t,n,r){const i=n.metadatas,o=Object(s.a)(i[t],"any",r),a=o&&o.default
if(void 0===a)return
const l="function"==typeof a?a.call(e,t,r):a
void 0!==l&&n.set(t,l)}const c={origin:"service"}
function u(e,t,n=c){if(!t||"object"!=typeof t)return
const o=Object(i.a)(e),u=o.metadatas,d={}
for(const e of Object.getOwnPropertyNames(t))a(d,u,e,t,n)
o.setDefaultOrigin(n.origin)
for(const i of Object.getOwnPropertyNames(d)){const a=Object(s.b)(u[i],n).read,l=a&&a.source
let c
c=l&&"string"==typeof l?Object(r.c)(t,l):t[i],a&&a.reader&&(c=a.reader.call(e,c,t,n)),void 0!==c&&o.set(i,c)}if(!n||!n.ignoreDefaults){o.setDefaultOrigin("defaults")
for(const t of Object.getOwnPropertyNames(u))d[t]||l(e,t,o,n)}o.setDefaultOrigin("user")}function d(e,t,n,r=c){var i
const s={...r,messages:[]}
n(s),null==(i=s.messages)||i.forEach(t=>{"warning"!==t.type||e.loaded?r&&r.messages&&r.messages.push(t):e.loadWarnings.push(t)})}},980:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}))
var r=n(353),i=n(354),s=n(177),o=n(913),a=n(920),l=n(1165)
const c=s.a.getLogger("esri.core.accessorSupport.write")
function u(e,t,n,r,i){var s,o
const a={}
return null==(s=t.write)||null==(o=s.writer)||o.call(e,r,a,n,i),a}function d(e,t,n,s,a,l){if(!s||!s.write)return!1
const u=e.get(n)
if(!a&&s.write.overridePolicy){const t=s.write.overridePolicy.call(e,u,n,l)
void 0!==t&&(a=t)}if(a||(a=s.write),!a||!1===a.enabled)return!1
if((null===u&&!a.allowNull&&!a.writerEnsuresNonNull||void 0===u)&&a.isRequired){const t=new i.a("web-document-write:property-required",`Missing value for required property '${n}' on '${e.declaredClass}'`,{propertyName:n,target:e})
return t&&l&&l.messages?l.messages.push(t):t&&!l&&c.error(t.name,t.message),!1}return!(void 0===u||null===u&&!a.allowNull&&!a.writerEnsuresNonNull||(!t.store.multipleOriginsSupported||t.store.originOf(n)===o.a.DEFAULTS)&&function(e,t,n,i,s){const o=i.default
if(void 0===o)return!1
if(null!=i.defaultEquals)return i.defaultEquals(s)
if("function"==typeof o){if(Array.isArray(s)){const i=o.call(e,t,n)
return Object(r.e)(i,s)}return!1}return o===s}(e,n,l,s,u)||!a.ignoreOrigin&&l&&l.origin&&t.store.multipleOriginsSupported&&t.store.originOf(n)<Object(o.e)(l.origin))}function h(e,t,n,r){const i=Object(a.a)(e),s=i.metadatas,o=Object(l.c)(s[t],r)
return!!o&&d(e,i,t,o,n,r)}function f(e,t,n){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return Object(a.c)(t,e.toJSON())
const r=Object(a.a)(e),i=r.metadatas
for(const h in i){const f=Object(l.c)(i[h],n)
if(!d(e,r,h,f,void 0,n))continue
const p=e.get(h),b=u(e,f,f.write&&"string"==typeof f.write.target?f.write.target:h,p,n)
var s,c
Object.keys(b).length>0&&(t=Object(a.c)(t,b),null!=n&&null!=(s=n.resources)&&null!=(c=s.pendingOperations)&&c.length&&Promise.all(n.resources.pendingOperations).then(()=>Object(a.c)(t,b)),n&&n.writtenProperties&&n.writtenProperties.push({target:e,propName:h,oldOrigin:Object(o.d)(r.store.originOf(h)),newOrigin:n.origin}))}return t}},981:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n(177),i=n(109),s=n(355),o=n(922),a=n(921)
const l=r.a.getLogger("esri.intl")
function c(e,t,n={}){const{format:r={}}=n
return Object(s.c)(e,e=>function(e,t,n){let r,s
const o=e.indexOf(":")
if(-1===o?r=e.trim():(r=e.slice(0,o).trim(),s=e.slice(o+1).trim()),!r)return""
const a=Object(i.b)(r,t)
if(null==a)return""
const l=n[s]||n[r]
return l?u(a,l):s?d(a,s):h(a)}(e,t,r))}function u(e,t){switch(t.type){case"date":return Object(o.b)(e,t.intlOptions)
case"number":return Object(a.b)(e,t.intlOptions)
default:return l.warn("missing format descriptor for key {key}"),h(e)}}function d(e,t){switch(t.toLowerCase()){case"dateformat":return Object(o.b)(e)
case"numberformat":return Object(a.b)(e)
default:return l.warn("inline format is unsupported since 4.12: "+t),/^(dateformat|datestring)/i.test(t)?Object(o.b)(e):/^numberformat/i.test(t)?Object(a.b)(e):h(e)}}function h(e){switch(typeof e){case"string":return e
case"number":return Object(a.b)(e)
case"boolean":return""+e
default:return e instanceof Date?Object(o.b)(e):""}}},984:function(e,t,n){"use strict"
var r
n.d(t,"a",(function(){return r})),function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(r||(r={}))},988:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return d}))
var r=n(856),i=n(354),s=n(860),o=n(858),a=(n(353),n(77),n(859)),l=n(857),c=n(926)
let u=class extends s.a{constructor(e){super(e),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null}get thumbnailUrl(){const e=this.url,t=this.thumbnail
return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get url(){const e=this.get("portal.restUrl")
return e?e+"/community/groups/"+this.id:null}fetchCategorySchema(e){return this.portal._request(this.url+"/categorySchema",e).then(t=>{const n=t.categorySchema||[]
return n.some(e=>"contentCategorySetsGroupQuery.LivingAtlas"===e.source)?this._fetchCategorySchemaSet("LivingAtlas",e):n})}fetchMembers(e){return this.portal._request(this.url+"/users",e)}getThumbnailUrl(e){let t=this.thumbnailUrl
return t&&e&&(t+="&w="+e),t}toJSON(){throw new i.a("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}queryItems(e,t){let n=Object(a.m)(c.a,e)
return parseFloat(this.portal.currentVersion)>5?(n=n||new c.a,this.portal._queryPortal(`/content/groups/${this.id}/search`,n,"PortalItem",t)):(n=n?n.clone():new c.a,n.query="group:"+this.id+(n.query?" "+n.query:""),this.portal.queryItems(n,t))}_fetchCategorySchemaSet(e,t){return this.portal._fetchSelf(this.portal.authMode,!0,t).then(e=>{const n=e.contentCategorySetsGroupQuery
if(n){const e=new c.a
return e.disableExtraQuery=!0,e.num=1,e.query=n,this.portal.queryGroups(e,t)}throw new i.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")}).then(n=>{if(n.total){const r=n.results[0],i=new c.a
return i.num=1,i.query=`typekeywords:"${e}"`,r.queryItems(i,t)}throw new i.a("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")}).then(e=>e.total?e.results[0].fetchData("json",t).then(e=>{const t=e&&e.categorySchema
return t&&t.length?t:[]}):[])}}
Object(r.a)([Object(o.b)()],u.prototype,"access",void 0),Object(r.a)([Object(o.b)({type:Date})],u.prototype,"created",void 0),Object(r.a)([Object(o.b)()],u.prototype,"description",void 0),Object(r.a)([Object(o.b)()],u.prototype,"id",void 0),Object(r.a)([Object(o.b)()],u.prototype,"isInvitationOnly",void 0),Object(r.a)([Object(o.b)({type:Date})],u.prototype,"modified",void 0),Object(r.a)([Object(o.b)()],u.prototype,"owner",void 0),Object(r.a)([Object(o.b)()],u.prototype,"portal",void 0),Object(r.a)([Object(o.b)()],u.prototype,"snippet",void 0),Object(r.a)([Object(o.b)()],u.prototype,"sortField",void 0),Object(r.a)([Object(o.b)()],u.prototype,"sortOrder",void 0),Object(r.a)([Object(o.b)()],u.prototype,"tags",void 0),Object(r.a)([Object(o.b)()],u.prototype,"thumbnail",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],u.prototype,"thumbnailUrl",null),Object(r.a)([Object(o.b)()],u.prototype,"title",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],u.prototype,"url",null),u=Object(r.a)([Object(l.a)("esri.portal.PortalGroup")],u)
const d=u},990:function(e,t,n){"use strict"
n(922),n(921),n(981),n(879)
var r=n(900),i=n(660),s=n(354),o=n(20)
async function a(e){if(Object(o.k)(l.fetchBundleAsset))return l.fetchBundleAsset(e)
const t=await Object(i.default)(e,{responseType:"text"})
return JSON.parse(t.data)}const l={}
var c,u=n(897)
Object(r.c)((c={pattern:"esri/",location:u.b},new class{constructor({base:e="",pattern:t,location:n=new URL(window.location.href)}){let r
r="string"==typeof n?e=>new URL(e,new URL(n,window.location.href)).href:n instanceof URL?e=>new URL(e,n).href:n,this.pattern="string"==typeof t?new RegExp("^"+t):t,this.getAssetUrl=r,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,n,i){const o=t.exec(n)
if(!o)throw new s.a("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${t}"`)
const l=o[1]?o[1]+"/":"",c=o[2],u=Object(r.b)(i),d=`${l}${c}.json`,h=u?`${l}${c}_${u}.json`:d
let f
try{f=await a(e(h))}catch(t){if(h===d)throw new s.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:t})
try{f=await a(e(d))}catch(e){throw new s.a("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:e})}}return f}(this.getAssetUrl,this.matcher,e,t)}}(c)))},994:function(e,t,n){"use strict"
n.d(t,"a",(function(){return $}))
var r=n(856),i=(n(990),n(996)),s=n(1209),o=n(890),a=n(885),l=(n(77),n(178)),c=n(177),u=n(20),d=n(959),h=n(861),f=n(892),p=n(1245),b=n(858),m=n(880),y=n(857),g=n(1063),O=n(1558),v=n(1254)
n(1223)
const j={handleInterceptedEvent:(e,t,n,r)=>(e.scheduleRender(),t.properties["on"+r.type].apply(t.properties.bind||n,[r]))},w={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,n)=>{e.style[t]=n}},_=(e,t,n=!1)=>{let r=e
return t.forEach((e,i)=>{var s
const o=null!=(s=r)&&s.children?((e,t)=>e.find(t))(r.children,t=>t.domNode===e):void 0
n&&!o&&i!==t.length-1||(r=o)}),r}
var x=n(1116),S=n(897),M=n(292)
let E
E="components/assets"
var L=n(1256),I=n(1255),k=n(899),C=n(1081),A=n(879),T=n(900)
const P="esri.widgets.Widget",R=c.a.getLogger(P)
let N=0
const V=(e=>{let t
const n={...j,...e},r=(s=n,{...w,...s}),i=r.performanceLogger
var s
let o,a=!0,l=!1
const c=[],u=[],d=(e,s,o)=>{let a
r.eventHandlerInterceptor=(e,r,s,o)=>function(e){let r
i("domEvent",e)
const s=((e,t)=>{const n=[]
for(;e&&e!==t;)n.push(e),e=e.parentNode
return n})(e.currentTarget,a.domNode),o=s.some(e=>{var t
return customElements.get(null==e||null==(t=e.tagName)?void 0:t.toLowerCase())})
if(e.eventPhase!==Event.CAPTURING_PHASE&&o){const t=e.composedPath(),n=t.slice(t.indexOf(e.currentTarget),t.indexOf(a.domNode)).filter(e=>e.getRootNode()===e.ownerDocument).reverse()
r=_(a.getLastRender(),n,!0)}else s.reverse(),r=_(a.getLastRender(),s)
let l
return r&&(l=n.handleInterceptedEvent(t,r,this,e)),i("domEventProcessed",e),l},null==n.postProcessProjectionOptions||n.postProcessProjectionOptions(r)
const l=o()
a=e(s,l,r),c.push(a),u.push(o),n.afterFirstVNodeRendered&&n.afterFirstVNodeRendered(a,l)}
let h=()=>{if(o=void 0,a){a=!1,i("renderStart",void 0)
for(let e=0;e<c.length;e++){const t=u[e]()
i("rendered",void 0),c[e].update(t),i("patched",void 0)}i("renderDone",void 0),a=!0}}
return n.modifyDoRenderImplementation&&(h=n.modifyDoRenderImplementation(h,c,u)),t={renderNow:h,scheduleRender:()=>{o||l||(o=requestAnimationFrame(h))},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),l=!0},resume:()=>{l=!1,a=!0,t.scheduleRender()},append:(e,t)=>{d(v.b.append,e,t)},insertBefore:(e,t)=>{d(v.b.insertBefore,e,t)},merge:(e,t)=>{d(v.b.merge,e,t)},replace:(e,t)=>{d(v.b.replace,e,t)},detach:e=>{for(let t=0;t<u.length;t++)if(u[t]===e)return u.splice(t,1),c.splice(t,1)[0]
throw new Error("renderFunction was not found")}},t})({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,n=/capture$/i
e.eventHandlerInterceptor=(e,r,i,s)=>{const o=t(e,r,i,s),a=n.test(e)
if(!((e=e.replace(n,"")).toLowerCase()in i)||a){const t=e[2].toLowerCase()+e.slice(3),n=e=>o.call(i,e)
i.addEventListener(t,n,a)
const r=()=>i.removeEventListener(t,n,a),l=s.afterRemoved
s.afterRemoved=e=>{null==l||l(e),r()}}return o}},handleInterceptedEvent(e,t,n,r){const{eventPhase:i,type:s}=r,o=i===Event.CAPTURING_PHASE
let a=`on${s}${o?"capture":""}`
const l=t.properties;(a in l||(a=`on${s[0].toUpperCase()}${s.slice(1)}${o?"Capture":""}`,a in l))&&(Object(I.a)(),e.scheduleRender(),l[a].call(l.bind||n,r))}})
let z=!1,D=class extends(Object(d.b)(o.a.EventedAccessor)){constructor(e,t){super(e,t),this._attached=!1,this._internalHandles=new a.a,this._projector=V,this._readyForTrueRender=!1,this.domNode=null,this.iconClass="esri-icon-checkbox-unchecked",this.label=this.declaredClass.split(".").pop(),this.visible=!0,this.key=this,this._loadLocale=Object(h.i)(async()=>{if(this._messageBundleProps&&this._messageBundleProps.length){const e=await Object(h.j)(this._messageBundleProps.map(async({bundlePath:e,propertyName:t})=>{let n=await Object(T.a)(e)
this.uiStrings&&Object.keys(this.uiStrings)&&(n=function e(t,n){for(const r in n)null!=t[r]&&("object"==typeof t[r]&&"object"==typeof n[r]?e(t[r],n[r]):t[r]=n[r])
return t}(Object(l.a)(n),this.uiStrings)),this[t]=n}))
for(const t of e)t.error&&R.error("widget-intl:locale-error",this.declaredClass,t.error)}await this.loadLocale()}),Object(x.j)(Object(M.C)(Object(S.b)("components/assets")))
const n=Object(C.b)()||"light";["light","dark"].includes(n)||Object(i.a)(R,"The following themes are deprecated: light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, and dark-red.",{version:"4.19",warnOnce:!0,see:"https://developers.arcgis.com/javascript/latest/styling/"})
const r="esri-widget-uid-"+Object(p.a)(),s=this.render.bind(this)
this._trackingTarget=new O.a(()=>this.scheduleRender())
const o=()=>{var e
if(!this._readyForTrueRender||this.destroyed)return null
if(!this.visible)return{vnodeSelector:"div",properties:{key:r,class:"",styles:{display:"none"}},domNode:void 0,children:void 0,text:void 0}
const t=s()
let{properties:n}=t
n||(t.properties=n={})
let{key:i,styles:o}=n
i||(n.key=r),o||(n.styles=o={}),o.display||(o.display="")
let a=0
return null==(e=t.children)||e.forEach(e=>{if(Object(L.b)(e.vnodeSelector))return
let{properties:t}=e
t||(e.properties=t={}),t.key||(t.key=`${this.id}--${a++}`)}),Object(L.c)(this,t)}
this.render=()=>{if(z)return o()
let e=Object(I.c)(this)
if(e)return e
this._trackingTarget.clear(),z=!0
try{e=Object(g.b)(this._trackingTarget,o)}finally{z=!1}return Object(I.d)(this,e),e},this.addResolvingPromise(this._resourcesFetch=this.beforeFirstRender().then(()=>{this._readyForTrueRender=!0,this._postInitialize()}))}normalizeCtorArgs(e,t){const n={...e}
return t&&(n.container=t),n}postInitialize(){}beforeFirstRender(){return Promise.all([this.loadDependencies(),this._loadLocale()]).then(()=>{}).catch(h.w)}async loadDependencies(){}async loadLocale(){}destroy(){this.destroyed||(this._trackingTarget=Object(u.d)(this._trackingTarget),this.viewModel=Object(u.d)(this.viewModel),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=()=>null,this._projector=null,Object(I.b)(this))}set container(e){this._get("container")||this._set("container",e)}castContainer(e){return Object(s.a)(e)}get id(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+N++}set id(e){e&&this._set("id",e)}get renderable(){return this._resourcesFetch}get test(){return{projector:this._projector,handles:this._internalHandles}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||(Object(I.b)(this),this._projector.scheduleRender())}classes(...e){return k.a.apply(this,e)}own(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments)),this._internalHandles.add(e)}renderNow(){Object(I.b)(this),this._projector.renderNow()}_postInitialize(){var e
if(this.destroyed)return
this.scheduleRender(),null!=(e=this._delegatedEventNames)&&e.length&&this._internalHandles.add(Object(f.e)(()=>this.viewModel,(e,t)=>{t&&this._internalHandles.remove("delegated-events"),e&&this._internalHandles.add(this._delegatedEventNames.map(t=>e.on(t,e=>{this.emit(t,e)})),"delegated-events")},f.a)),this.postInitialize()
const t=async()=>{await this._loadLocale().catch(h.w),this.scheduleRender()}
this._internalHandles.add([Object(A.c)(t),Object(f.e)(()=>this.uiStrings,t),Object(f.f)(()=>this.container,e=>{this.destroyed||this._attach(e)},{initial:!0,once:!0})])}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0)}_detach(e){e&&this._attached&&(this._projector.detach(this.render),e.parentNode&&e.parentNode.removeChild(e),this._attached=!1)}}
D[L.a]=!0,Object(r.a)([Object(b.b)()],D.prototype,"_readyForTrueRender",void 0),Object(r.a)([Object(b.b)({value:null})],D.prototype,"container",null),Object(r.a)([Object(m.a)("container")],D.prototype,"castContainer",null),Object(r.a)([Object(b.b)({aliasOf:"container"})],D.prototype,"domNode",void 0),Object(r.a)([Object(b.b)()],D.prototype,"iconClass",void 0),Object(r.a)([Object(b.b)()],D.prototype,"id",null),Object(r.a)([Object(b.b)()],D.prototype,"label",void 0),Object(r.a)([Object(b.b)()],D.prototype,"renderable",null),Object(r.a)([Object(b.b)()],D.prototype,"uiStrings",void 0),Object(r.a)([Object(b.b)()],D.prototype,"viewModel",void 0),Object(r.a)([Object(b.b)()],D.prototype,"visible",void 0),Object(r.a)([Object(b.b)()],D.prototype,"key",void 0),Object(r.a)([Object(b.b)()],D.prototype,"children",void 0),Object(r.a)([Object(b.b)()],D.prototype,"afterCreate",void 0),Object(r.a)([Object(b.b)()],D.prototype,"afterUpdate",void 0),Object(r.a)([Object(b.b)()],D.prototype,"afterRemoved",void 0),D=Object(r.a)([Object(y.a)(P)],D)
const $=D},995:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const r=(e,...t)=>{t.forEach(t=>{if("function"!=typeof e[t])throw new Error(`Cannot bind context. ${t} must be a function`)
e[t]=e[t].bind(e)})}},999:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n(886),i=n(902)
const s={inches:Object(r.c)(1,"meters","inches"),feet:Object(r.c)(1,"meters","feet"),"us-feet":Object(r.c)(1,"meters","us-feet"),yards:Object(r.c)(1,"meters","yards"),miles:Object(r.c)(1,"meters","miles"),"nautical-miles":Object(r.c)(1,"meters","nautical-miles"),millimeters:Object(r.c)(1,"meters","millimeters"),centimeters:Object(r.c)(1,"meters","centimeters"),decimeters:Object(r.c)(1,"meters","decimeters"),meters:Object(r.c)(1,"meters","meters"),kilometers:Object(r.c)(1,"meters","kilometers"),"decimal-degrees":1/Object(r.l)(1,"meters",i.a.radius)}}}])
