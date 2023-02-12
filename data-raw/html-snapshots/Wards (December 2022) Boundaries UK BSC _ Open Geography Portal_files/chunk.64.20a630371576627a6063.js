(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[64],{1257:function(t,e,_){"use strict"
_.d(e,"a",(function(){return A})),_.d(e,"b",(function(){return i})),_.d(e,"c",(function(){return R}))
var E=_(354),r=_(77)
const T=_(177).a.getLogger("esri/views/webgl"),n=!!Object(r.a)("enable-feature:webgl-debug")
function i(){return n}function R(){return n}function A(t){if(i()){const e=t.getError()
if(e){const _=function(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument."
case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range."
case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state."
case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it."
case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command."
case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost"
default:return"Unknown error"}}(t,e),r=(new Error).stack
T.error(new E.a("webgl-error","WebGL error occured",{message:_,stack:r}))}}}},1287:function(t,e,_){"use strict"
function E(t){return window.WebGL2RenderingContext&&t instanceof window.WebGL2RenderingContext}_.d(e,"a",(function(){return E}))},1529:function(t,e,_){"use strict"
_.d(e,"a",(function(){return E}))
class E{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,e){var _
return null==(_=this._outer.get(t))?void 0:_.get(e)}set(t,e,_){const E=this._outer.get(t)
E?E.set(e,_):this._outer.set(t,new Map([[e,_]]))}delete(t,e){const _=this._outer.get(t)
_&&(_.delete(e),0===_.size&&this._outer.delete(t))}forEach(t){this._outer.forEach((e,_)=>t(e,_))}}},1601:function(t,e,_){"use strict"
_.d(e,"a",(function(){return r}))
var E=_(1664)
function r(t,e,_=""){return new E.a(t,_+e.shaders.vertexShader,_+e.shaders.fragmentShader,e.attributes)}},1824:function(t,e,_){"use strict"
_.d(e,"a",(function(){return n}))
var E=_(20),r=_(1529),T=_(1664)
class n{constructor(t){this._rctx=t,this._store=new r.a}dispose(){this._store.forEach(t=>t.forEach(t=>t.dispose())),this._store.clear()}acquire(t,e,_,r){const n=this._store.get(t,e)
if(Object(E.k)(n))return n.ref(),n
const i=new T.a(this._rctx,t,e,_,r)
return i.ref(),this._store.set(t,e,i),i}get test(){let t=0
return this._store.forEach(e=>e.forEach(e=>t+=e.hasGLName?2:1)),{cachedWebGLObjects:t}}}},1828:function(t,e,_){"use strict"
_.d(e,"a",(function(){return E}))
class E{constructor(t){this.readFile=t}resolveIncludes(t){return this._resolve(t)}_resolve(t,e=new Map){if(e.has(t))return e.get(t)
const _=this._read(t)
if(!_)throw new Error("cannot find shader file "+t)
const E=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm
let r=E.exec(_)
const T=[]
for(;null!=r;)T.push({path:r[1],start:r.index,length:r[0].length}),r=E.exec(_)
let n=0,i=""
return T.forEach(t=>{i+=_.slice(n,t.start),i+=e.has(t.path)?"":this._resolve(t.path,e),n=t.start+t.length}),i+=_.slice(n),e.set(t,i),i}_read(t){return this.readFile(t)}}},1901:function(t,e,_){"use strict"
function E(t){let e=""
for(const _ in t){const E=t[_]
if("boolean"==typeof E)E&&(e+=`#define ${_}\n`)
else if("number"==typeof E)e+=`#define ${_} ${E.toFixed()}\n`
else if("object"==typeof E){const t=E.options
let r=0
for(const _ in t)e+=`#define ${t[_]} ${(r++).toFixed()}\n`
e+=`#define ${_} ${t[E.value]}\n`}}return e}_.d(e,"a",(function(){return E}))},2283:function(t,e,_){"use strict"
_.r(e)
var E=_(985)
_.d(e,"BufferObject",(function(){return E.a}))
var r=_(1041)
_.d(e,"FramebufferObject",(function(){return r.a}))
var T=_(1664)
_.d(e,"Program",(function(){return T.a}))
var n=_(1824)
_.d(e,"ProgramCache",(function(){return n.a}))
var i=_(1548)
_.d(e,"Renderbuffer",(function(){return i.a}))
var R=_(1828)
_.d(e,"ShaderCompiler",(function(){return R.a}))
var A=_(973)
_.d(e,"Texture",(function(){return A.a}))
var o=_(998)
_.d(e,"VertexArrayObject",(function(){return o.a}))
var a=_(1901)
_.d(e,"glslifyDefineMap",(function(){return a.a}))
var s=_(1601)
_.d(e,"createProgram",(function(){return s.a}))
var N=_(1051)
_.d(e,"createContextOrErrorHTML",(function(){return N.c}))},877:function(t,e,_){"use strict"
var E,r,T,n,i,R,A,o,a,s,N,u,I,c,S,O,C,M,D,h,d,L
_.d(e,"a",(function(){return l})),_.d(e,"b",(function(){return T})),_.d(e,"c",(function(){return n})),_.d(e,"d",(function(){return i})),_.d(e,"e",(function(){return E})),_.d(e,"f",(function(){return F})),_.d(e,"g",(function(){return U})),_.d(e,"h",(function(){return a})),_.d(e,"i",(function(){return G})),_.d(e,"j",(function(){return A})),_.d(e,"k",(function(){return o})),_.d(e,"l",(function(){return p})),_.d(e,"m",(function(){return L})),_.d(e,"n",(function(){return R})),_.d(e,"o",(function(){return h})),_.d(e,"p",(function(){return c})),_.d(e,"q",(function(){return O})),_.d(e,"r",(function(){return r})),_.d(e,"s",(function(){return C})),_.d(e,"t",(function(){return P})),_.d(e,"u",(function(){return D})),_.d(e,"v",(function(){return S})),_.d(e,"w",(function(){return s})),_.d(e,"x",(function(){return g})),_.d(e,"y",(function(){return d})),_.d(e,"z",(function(){return N})),_.d(e,"A",(function(){return I})),_.d(e,"B",(function(){return u})),_.d(e,"C",(function(){return f})),_.d(e,"D",(function(){return M})),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(r||(r={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(t){t[t.ADD=32774]="ADD",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(n||(n={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(i||(i={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(R||(R={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(A||(A={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(o||(o={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(a||(a={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(s||(s={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(N||(N={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(u||(u={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(I||(I={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(c||(c={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(S||(S={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(C||(C={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(M||(M={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(D||(D={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(h||(h={})),function(t){t[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP"}(d||(d={})),function(t){t[t.NONE=0]="NONE",t[t.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",t[t.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(L||(L={}))
const l=33984
var P,U
!function(t){t[t.Texture=0]="Texture",t[t.Buffer=1]="Buffer",t[t.VAO=2]="VAO",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.Framebuffer=5]="Framebuffer",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.COUNT=8]="COUNT"}(P||(P={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(U||(U={}))
const p=33306
var G,f,m,B,F,g,x
!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(G||(G={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(f||(f={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(m||(m={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(B||(B={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(F||(F={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(g||(g={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(x||(x={}))},973:function(t,e,_){"use strict"
_.d(e,"a",(function(){return A})),_(77)
var E=_(874),r=_(20),T=_(1257),n=_(1051),i=_(877),R=_(1287)
class A{constructor(t,e,_=null){if(this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,t.instanceCounter.increment(i.t.Texture,this),this._descriptor={target:i.A.TEXTURE_2D,samplingMode:i.z.LINEAR,wrapMode:i.B.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1,...e},t.type!==n.a.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),s(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1")
this._descriptor.target===i.A.TEXTURE_CUBE_MAP?this._setDataCubeMap(_):this.setData(_)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(i.t.Texture,this))}release(){this.dispose()}resize(t,e){const _=this._descriptor
if(_.width!==t||_.height!==e){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!")
_.width=t,_.height=e,this._descriptor.target===i.A.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=i.A.TEXTURE_CUBE_MAP_POSITIVE_X;e<=i.A.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(t,e){if(!this._context||!this._context.gl)return
const _=this._context.gl
this._glName||(this._glName=_.createTexture()),void 0===t&&(t=null)
const E=this._descriptor
null!=e||(e=E.target)
const n=s(e)
var u
null===t&&(E.width=E.width||4,E.height=E.height||4,n&&(E.depth=null!=(u=E.depth)?u:1))
const I=this._context.bindTexture(this,A.TEXTURE_UNIT_FOR_UPDATES)
this._context.setActiveTexture(A.TEXTURE_UNIT_FOR_UPDATES),A._validateTexture(this._context,E),this._configurePixelStorage()
const c=E.pixelFormat
let S=E.internalFormat?E.internalFormat:this._deriveInternalFormat(c,E.dataType)
if(a(t)){let r=t.width,i=t.height
const R=1
t instanceof HTMLVideoElement&&(r=t.videoWidth,i=t.videoHeight),E.width&&E.height,n&&E.depth,E.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(e,S,E.hasMipmap,r,i,R),this._texImage(e,0,S,r,i,R,t),Object(T.a)(_),E.hasMipmap&&this.generateMipmap(),void 0===E.width&&(E.width=r),void 0===E.height&&(E.height=i),n&&void 0===E.depth&&(E.depth=R)}else{const{width:A,height:a,depth:s}=E
if(null!=A&&null!=a||console.error("Width and height must be specified!"),n&&null==s&&console.error("Depth must be specified!"),E.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(e,S,E.hasMipmap,A,a,s),_.DEPTH24_STENCIL8&&S===_.DEPTH_STENCIL&&(S=_.DEPTH24_STENCIL8),o(t)){const r=t.levels,T=N(e,A,a,s),n=Math.min(T-1,r.length-1)
Object(R.a)(_)?_.texParameteri(E.target,_.TEXTURE_MAX_LEVEL,n):E.hasMipmap=E.hasMipmap&&T===r.length
const o=S
if(!function(t){return t in i.i}(o))throw new Error("Attempting to use compressed data with an umcompressed format!")
this._forEachMipmapLevel((t,_,E,T)=>{const n=r[Math.min(t,r.length-1)]
this._compressedTexImage(e,t,o,_,E,T,n)},n)}else Object(r.k)(t)?(this._texImage(e,0,S,A,a,s,t),Object(T.a)(_),E.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((t,E,r,n)=>{this._texImage(e,t,S,E,r,n,null),Object(T.a)(_)})}A._applySamplingMode(_,this._descriptor),A._applyWrapMode(_,this._descriptor),A._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(T.a)(_),this._context.bindTexture(I,A.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,_,E,r,T){T||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!")
const n=this._context.gl,i=this._descriptor,{pixelFormat:R,internalFormat:s,dataType:N,isImmutable:u,target:I}=i
if(u&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!")
const c=this._context.bindTexture(this,A.TEXTURE_UNIT_FOR_UPDATES);(e<0||_<0||E>i.width||r>i.height||e+E>i.width||_+r>i.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),a(T)?n.texSubImage2D(I,t,e,_,R,N,T):o(T)?n.compressedTexSubImage2D(I,t,e,_,E,r,s,T.levels[t]):n.texSubImage2D(I,t,e,_,E,r,R,N,T),this._context.bindTexture(c,A.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,e,_,E,r,T,n,i){i||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!")
const a=this._context.gl
if(!Object(R.a)(a))throw new Error("3D textures are not supported in WebGL1")
const N=this._descriptor,{pixelFormat:u,dataType:I,isImmutable:c,target:S,internalFormat:O}=N
if(c&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!")
s(S)||console.warn("Attempting to set 3D texture data on a non-3D texture")
const C=this._context.bindTexture(this,A.TEXTURE_UNIT_FOR_UPDATES)
if(this._context.setActiveTexture(A.TEXTURE_UNIT_FOR_UPDATES),(e<0||_<0||E<0||r>N.width||T>N.height||n>N.depth||e+r>N.width||_+T>N.height||E+n>N.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),o(i))i=i.levels[t],a.compressedTexSubImage3D(S,t,e,_,E,r,T,n,O,i)
else{const R=i
a.texSubImage3D(S,t,e,_,E,r,T,n,u,I,R)}this._context.bindTexture(C,A.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor
if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation")
t.hasMipmap=!0,this._samplingModeDirty=!0,A._validateTexture(this._context,t)}t.samplingMode===i.z.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=i.z.LINEAR_MIPMAP_NEAREST):t.samplingMode===i.z.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=i.z.NEAREST_MIPMAP_NEAREST)
const e=this._context.bindTexture(this,A.TEXTURE_UNIT_FOR_UPDATES)
this._context.setActiveTexture(A.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,A.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,A._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor
this._samplingModeDirty&&(A._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(A._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if(this._context.type===n.a.WEBGL1)return t
switch(e){case i.q.FLOAT:switch(t){case i.p.RGBA:return i.v.RGBA32F
case i.p.RGB:return i.v.RGB32F
default:throw new Error("Unable to derive format")}case i.q.UNSIGNED_BYTE:switch(t){case i.p.RGBA:return i.v.RGBA8
case i.p.RGB:return i.v.RGB8}default:return t}}_configurePixelStorage(){const t=this._context.gl,{unpackAlignment:e,flipped:_,preMultiplyAlpha:E}=this._descriptor
t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E?1:0)}_texStorage(t,e,_,E,r,T){const n=this._context.gl
if(!Object(R.a)(n))throw new Error("Immutable textures are not supported in WebGL1")
if(!function(t){return t in i.v}(e))throw new Error("Immutable textures must have a sized internal format")
if(!this._descriptor.isImmutable)return
const A=_?N(t,E,r,T):1
s(t)?n.texStorage3D(t,A,e,E,r,T):n.texStorage2D(t,A,e,E,r),this._wasImmutablyAllocated=!0}_texImage(t,e,_,E,T,i,R){const A=this._context.gl
let o=null
const N=this._context.type===n.a.WEBGL2,u=s(t),{isImmutable:I,pixelFormat:c,dataType:S}=this._descriptor
if(N&&(o=A),N||!a(R))if(I){if(Object(r.k)(R)){const _=R
u?o.texSubImage3D(t,e,0,0,0,E,T,i,c,S,_):A.texSubImage2D(t,e,0,0,E,T,c,S,_)}}else{const n=Object(r.t)(R)
u?o.texImage3D(t,e,_,E,T,i,0,c,S,n):A.texImage2D(t,e,_,E,T,0,c,S,n)}else A.texImage2D(t,0,_,c,S,R)}_compressedTexImage(t,e,_,E,T,i,R){const A=this._context.gl
let o=null
const a=s(t),N=this._descriptor.isImmutable
if(a){if(this._context.type!==n.a.WEBGL2)throw new Error("3D textures are not supported in WebGL1")
o=A}N?Object(r.k)(R)&&(a?o.compressedTexSubImage3D(t,e,0,0,0,E,T,i,_,R):A.compressedTexSubImage2D(t,e,0,0,E,T,_,R)):a?o.compressedTexImage3D(t,e,_,E,T,i,0,R):A.compressedTexImage2D(t,e,_,E,T,0,R)}_forEachMipmapLevel(t,e=1/0){let{width:_,height:E,depth:r,hasMipmap:T,target:n}=this._descriptor
const R=n===i.A.TEXTURE_3D
for(let n=0;t(n,_,E,r),T&&(1!==_||1!==E||R&&1!==r)&&!(n>=e);++n)_=Math.max(1,_>>1),E=Math.max(1,E>>1),R&&(r=Math.max(1,r>>1))}static _validateTexture(t,e){(e.width<0||e.height<0||e.depth<0)&&console.error("Negative dimension parameters are not allowed!")
const _=Object(R.a)(t.gl),r=Object(E.k)(e.width)&&Object(E.k)(e.height)
_||!e.isImmutable&&!s(e.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),_||r||("number"==typeof e.wrapMode?e.wrapMode!==i.B.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):e.wrapMode.s===i.B.CLAMP_TO_EDGE&&e.wrapMode.t===i.B.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let _=e.samplingMode,E=e.samplingMode
_===i.z.LINEAR_MIPMAP_NEAREST||_===i.z.LINEAR_MIPMAP_LINEAR?(_=i.z.LINEAR,e.hasMipmap||(E=i.z.LINEAR)):_!==i.z.NEAREST_MIPMAP_NEAREST&&_!==i.z.NEAREST_MIPMAP_LINEAR||(_=i.z.NEAREST,e.hasMipmap||(E=i.z.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,_),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,E)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var _
const E=t.capabilities.textureFilterAnisotropic
E&&t.gl.texParameterf(e.target,E.TEXTURE_MAX_ANISOTROPY,null!=(_=e.maxAnisotropy)?_:1)}}function o(t){return Object(r.k)(t)&&"type"in t&&"compressed"===t.type}function a(t){return Object(r.k)(t)&&!o(t)&&!function(t){return Object(r.k)(t)&&"byteLength"in t}(t)}function s(t){return t===i.A.TEXTURE_3D||t===i.A.TEXTURE_2D_ARRAY}function N(t,e,_,E=1){let r=Math.max(e,_)
return t===i.A.TEXTURE_3D&&(r=Math.max(r,E)),Math.round(Math.log(r)/Math.LN2)+1}A.TEXTURE_UNIT_FOR_UPDATES=0}}])
