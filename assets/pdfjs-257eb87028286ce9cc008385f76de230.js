/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=t():e["pdfjs-dist/build/pdf"]=e.pdfjsLib=t()})(this,(function(){return(()=>{var __webpack_modules__=[(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLinkAttributes",{enumerable:!0,get:function(){return n.addLinkAttributes}}),Object.defineProperty(t,"getFilenameFromUrl",{enumerable:!0,get:function(){return n.getFilenameFromUrl}}),Object.defineProperty(t,"LinkTarget",{enumerable:!0,get:function(){return n.LinkTarget}}),Object.defineProperty(t,"loadScript",{enumerable:!0,get:function(){return n.loadScript}}),Object.defineProperty(t,"PDFDateString",{enumerable:!0,get:function(){return n.PDFDateString}}),Object.defineProperty(t,"RenderingCancelledException",{enumerable:!0,get:function(){return n.RenderingCancelledException}}),Object.defineProperty(t,"build",{enumerable:!0,get:function(){return a.build}}),Object.defineProperty(t,"getDocument",{enumerable:!0,get:function(){return a.getDocument}}),Object.defineProperty(t,"LoopbackPort",{enumerable:!0,get:function(){return a.LoopbackPort}}),Object.defineProperty(t,"PDFDataRangeTransport",{enumerable:!0,get:function(){return a.PDFDataRangeTransport}}),Object.defineProperty(t,"PDFWorker",{enumerable:!0,get:function(){return a.PDFWorker}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return a.version}}),Object.defineProperty(t,"CMapCompressionType",{enumerable:!0,get:function(){return i.CMapCompressionType}}),Object.defineProperty(t,"createObjectURL",{enumerable:!0,get:function(){return i.createObjectURL}}),Object.defineProperty(t,"createPromiseCapability",{enumerable:!0,get:function(){return i.createPromiseCapability}}),Object.defineProperty(t,"createValidAbsoluteUrl",{enumerable:!0,get:function(){return i.createValidAbsoluteUrl}}),Object.defineProperty(t,"InvalidPDFException",{enumerable:!0,get:function(){return i.InvalidPDFException}}),Object.defineProperty(t,"MissingPDFException",{enumerable:!0,get:function(){return i.MissingPDFException}}),Object.defineProperty(t,"OPS",{enumerable:!0,get:function(){return i.OPS}}),Object.defineProperty(t,"PasswordResponses",{enumerable:!0,get:function(){return i.PasswordResponses}}),Object.defineProperty(t,"PermissionFlag",{enumerable:!0,get:function(){return i.PermissionFlag}}),Object.defineProperty(t,"removeNullCharacters",{enumerable:!0,get:function(){return i.removeNullCharacters}}),Object.defineProperty(t,"shadow",{enumerable:!0,get:function(){return i.shadow}}),Object.defineProperty(t,"UnexpectedResponseException",{enumerable:!0,get:function(){return i.UnexpectedResponseException}}),Object.defineProperty(t,"UNSUPPORTED_FEATURES",{enumerable:!0,get:function(){return i.UNSUPPORTED_FEATURES}}),Object.defineProperty(t,"Util",{enumerable:!0,get:function(){return i.Util}}),Object.defineProperty(t,"VerbosityLevel",{enumerable:!0,get:function(){return i.VerbosityLevel}}),Object.defineProperty(t,"AnnotationLayer",{enumerable:!0,get:function(){return o.AnnotationLayer}}),Object.defineProperty(t,"apiCompatibilityParams",{enumerable:!0,get:function(){return s.apiCompatibilityParams}})
Object.defineProperty(t,"GlobalWorkerOptions",{enumerable:!0,get:function(){return u.GlobalWorkerOptions}}),Object.defineProperty(t,"renderTextLayer",{enumerable:!0,get:function(){return l.renderTextLayer}}),Object.defineProperty(t,"SVGGraphics",{enumerable:!0,get:function(){return c.SVGGraphics}})
var n=r(1),a=r(135),i=r(4),o=r(149),s=r(139),u=r(142),l=r(151),c=r(152)
if(r(6).isNodeJS){var h=r(153).PDFNodeStream;(0,a.setPDFNetworkStreamFactory)((function(e){return new h(e)}))}else{var f,d=r(156).PDFNetworkStream;(0,n.isFetchSupported)()&&(f=r(157).PDFFetchStream),(0,a.setPDFNetworkStreamFactory)((function(e){return f&&(0,n.isValidFetchUrl)(e.url)?new f(e):new d(e)}))}},(e,t,r)=>{"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.addLinkAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,n=t.target,a=t.rel,i=t.enabled,s=void 0===i||i;(0,o.assert)(r&&"string"==typeof r,'addLinkAttributes: A valid "url" parameter must provided.')
var u=(0,o.removeNullCharacters)(r)
s?e.href=e.title=u:(e.href="",e.title="Disabled: ".concat(u),e.onclick=function(){return!1})
var l=""
switch(n){case R.NONE:break
case R.SELF:l="_self"
break
case R.BLANK:l="_blank"
break
case R.PARENT:l="_parent"
break
case R.TOP:l="_top"}e.target=l,e.rel="string"==typeof a?a:b},t.deprecated=function(e){console.log("Deprecated API usage: "+e)},t.getFilenameFromUrl=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length)
return e.substring(e.lastIndexOf("/",n)+1,n)},t.isFetchSupported=O,t.isValidFetchUrl=F,t.loadScript=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return new Promise((function(r,n){var a=document.createElement("script")
a.src=e,a.onload=function(e){t&&a.remove(),r(e)},a.onerror=function(){n(new Error("Cannot load script at: ".concat(a.src)))},(document.head||document.documentElement).appendChild(a)}))},t.StatTimer=t.RenderingCancelledException=t.PDFDateString=t.PageViewport=t.LinkTarget=t.DOMSVGFactory=t.DOMCMapReaderFactory=t.DOMCanvasFactory=t.DEFAULT_LINK_REL=t.BaseCMapReaderFactory=t.BaseCanvasFactory=void 0
var a,i=(a=r(2))&&a.__esModule?a:{default:a},o=r(4)
function s(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function c(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){l(i,n,a,o,s,"next",e)}function s(e){l(i,n,a,o,s,"throw",e)}o(void 0)}))}}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var a=v(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}var b="noopener noreferrer nofollow"
t.DEFAULT_LINK_REL=b
var _="http://www.w3.org/2000/svg",A=function(){function e(){g(this,e),this.constructor===e&&(0,o.unreachable)("Cannot initialize BaseCanvasFactory.")}return m(e,[{key:"create",value:function(e,t){(0,o.unreachable)("Abstract method `create` called.")}},{key:"reset",value:function(e,t,r){if(!e.canvas)throw new Error("Canvas is not specified")
if(t<=0||r<=0)throw new Error("Invalid canvas size")
e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function(e){if(!e.canvas)throw new Error("Canvas is not specified")
e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}}]),e}()
t.BaseCanvasFactory=A
var S=function(e){h(r,e)
var t=d(r)
function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.ownerDocument,i=void 0===a?globalThis.document:a
return g(this,r),(e=t.call(this))._document=i,e}return m(r,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size")
var r=this._document.createElement("canvas"),n=r.getContext("2d")
return r.width=e,r.height=t,{canvas:r,context:n}}}]),r}(A)
t.DOMCanvasFactory=S
var w=function(){function e(t){var r=t.baseUrl,n=void 0===r?null:r,a=t.isCompressed,i=void 0!==a&&a
g(this,e),this.constructor===e&&(0,o.unreachable)("Cannot initialize BaseCMapReaderFactory."),this.baseUrl=n,this.isCompressed=i}var t
return m(e,[{key:"fetch",value:(t=c(i.default.mark((function e(t){var r,n,a,s=this
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,this.baseUrl){e.next=3
break}throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.')
case 3:if(r){e.next=5
break}throw new Error("CMap name must be specified.")
case 5:return n=this.baseUrl+r+(this.isCompressed?".bcmap":""),a=this.isCompressed?o.CMapCompressionType.BINARY:o.CMapCompressionType.NONE,e.abrupt("return",this._fetchData(n,a).catch((function(e){throw new Error("Unable to load ".concat(s.isCompressed?"binary ":"","CMap at: ").concat(n))})))
case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_fetchData",value:function(e,t){(0,o.unreachable)("Abstract method `_fetchData` called.")}}]),e}()
t.BaseCMapReaderFactory=w
var k=function(e){h(r,e)
var t=d(r)
function r(){return g(this,r),t.apply(this,arguments)}return m(r,[{key:"_fetchData",value:function(e,t){var r=this
return O()&&F(e,document.baseURI)?fetch(e).then(function(){var e=c(i.default.mark((function e(n){var a
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.ok){e.next=2
break}throw new Error(n.statusText)
case 2:if(!r.isCompressed){e.next=10
break}return e.t0=Uint8Array,e.next=6,n.arrayBuffer()
case 6:e.t1=e.sent,a=new e.t0(e.t1),e.next=15
break
case 10:return e.t2=o.stringToBytes,e.next=13,n.text()
case 13:e.t3=e.sent,a=(0,e.t2)(e.t3)
case 15:return e.abrupt("return",{cMapData:a,compressionType:t})
case 16:case"end":return e.stop()}}),e)})))
return function(t){return e.apply(this,arguments)}}()):new Promise((function(n,a){var i=new XMLHttpRequest
i.open("GET",e,!0),r.isCompressed&&(i.responseType="arraybuffer"),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE){var e
if(200===i.status||0===i.status)if(r.isCompressed&&i.response?e=new Uint8Array(i.response):!r.isCompressed&&i.responseText&&(e=(0,o.stringToBytes)(i.responseText)),e)return void n({cMapData:e,compressionType:t})
a(new Error(i.statusText))}},i.send(null)}))}}]),r}(w)
t.DOMCMapReaderFactory=k
var x=function(){function e(){g(this,e)}return m(e,[{key:"create",value:function(e,t){(0,o.assert)(e>0&&t>0,"Invalid SVG dimensions")
var r=document.createElementNS(_,"svg:svg")
return r.setAttribute("version","1.1"),r.setAttribute("width",e+"px"),r.setAttribute("height",t+"px"),r.setAttribute("preserveAspectRatio","none"),r.setAttribute("viewBox","0 0 "+e+" "+t),r}},{key:"createElement",value:function(e){return(0,o.assert)("string"==typeof e,"Invalid SVG element type"),document.createElementNS(_,e)}}]),e}()
t.DOMSVGFactory=x
var C=function(){function e(t){var r=t.viewBox,n=t.scale,a=t.rotation,i=t.offsetX,o=void 0===i?0:i,s=t.offsetY,u=void 0===s?0:s,l=t.dontFlip,c=void 0!==l&&l
g(this,e),this.viewBox=r,this.scale=n,this.rotation=a,this.offsetX=o,this.offsetY=u
var h,f,d,p,v,y,m,b,_=(r[2]+r[0])/2,A=(r[3]+r[1])/2
switch(a=(a%=360)<0?a+360:a){case 180:h=-1,f=0,d=0,p=1
break
case 90:h=0,f=1,d=1,p=0
break
case 270:h=0,f=-1,d=-1,p=0
break
case 0:h=1,f=0,d=0,p=-1
break
default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")}c&&(d=-d,p=-p),0===h?(v=Math.abs(A-r[1])*n+o,y=Math.abs(_-r[0])*n+u,m=Math.abs(r[3]-r[1])*n,b=Math.abs(r[2]-r[0])*n):(v=Math.abs(_-r[0])*n+o,y=Math.abs(A-r[1])*n+u,m=Math.abs(r[2]-r[0])*n,b=Math.abs(r[3]-r[1])*n),this.transform=[h*n,f*n,d*n,p*n,v-h*n*_-d*n*A,y-f*n*_-p*n*A],this.width=m,this.height=b}return m(e,[{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.scale,n=void 0===r?this.scale:r,a=t.rotation,i=void 0===a?this.rotation:a,o=t.offsetX,s=void 0===o?this.offsetX:o,u=t.offsetY,l=void 0===u?this.offsetY:u,c=t.dontFlip,h=void 0!==c&&c
return new e({viewBox:this.viewBox.slice(),scale:n,rotation:i,offsetX:s,offsetY:l,dontFlip:h})}},{key:"convertToViewportPoint",value:function(e,t){return o.Util.applyTransform([e,t],this.transform)}},{key:"convertToViewportRectangle",value:function(e){var t=o.Util.applyTransform([e[0],e[1]],this.transform),r=o.Util.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],r[0],r[1]]}},{key:"convertToPdfPoint",value:function(e,t){return o.Util.applyInverseTransform([e,t],this.transform)}}]),e}()
t.PageViewport=C
var P=function(e){h(r,e)
var t=d(r)
function r(e,n){var a
return g(this,r),(a=t.call(this,e)).type=n,a}return r}(o.BaseException)
t.RenderingCancelledException=P
var R={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4}
t.LinkTarget=R
var T,E=function(){function e(){g(this,e),this.started=Object.create(null),this.times=[]}return m(e,[{key:"time",value:function(e){e in this.started&&(0,o.warn)("Timer is already running for ".concat(e)),this.started[e]=Date.now()}},{key:"timeEnd",value:function(e){e in this.started||(0,o.warn)("Timer has not been started for ".concat(e)),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e]}},{key:"toString",value:function(){var e,t=[],r=0,n=s(this.times)
try{for(n.s();!(e=n.n()).done;){var a=e.value.name
a.length>r&&(r=a.length)}}catch(c){n.e(c)}finally{n.f()}var i,o=s(this.times)
try{for(o.s();!(i=o.n()).done;){var u=i.value,l=u.end-u.start
t.push("".concat(u.name.padEnd(r)," ").concat(l,"ms\n"))}}catch(c){o.e(c)}finally{o.f()}return t.join("")}}]),e}()
function O(){return"undefined"!=typeof fetch&&"undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream}function F(e,t){try{var r=(t?new URL(e,t):new URL(e)).protocol
return"http:"===r||"https:"===r}catch(n){return!1}}t.StatTimer=E
var L=function(){function e(){g(this,e)}return m(e,null,[{key:"toDateObject",value:function(e){if(!e||!(0,o.isString)(e))return null
T||(T=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"))
var t=T.exec(e)
if(!t)return null
var r=parseInt(t[1],10),n=parseInt(t[2],10)
n=n>=1&&n<=12?n-1:0
var a=parseInt(t[3],10)
a=a>=1&&a<=31?a:1
var i=parseInt(t[4],10)
i=i>=0&&i<=23?i:0
var s=parseInt(t[5],10)
s=s>=0&&s<=59?s:0
var u=parseInt(t[6],10)
u=u>=0&&u<=59?u:0
var l=t[7]||"Z",c=parseInt(t[8],10)
c=c>=0&&c<=23?c:0
var h=parseInt(t[9],10)||0
return h=h>=0&&h<=59?h:0,"-"===l?(i+=c,s+=h):"+"===l&&(i-=c,s-=h),new Date(Date.UTC(r,n,a,i,s,u))}}]),e}()
t.PDFDateString=L},(e,t,r)=>{"use strict"
e.exports=r(3)},(e,t,r)=>{"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=function(e){var t,r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag"
function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(F){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),o=new T(n||[])
return i._invoke=function(e,t,r){var n=f
return function(a,i){if(n===p)throw new Error("Generator is already running")
if(n===v){if("throw"===a)throw i
return O()}for(r.method=a,r.arg=i;;){var o=r.delegate
if(o){var s=C(o,r)
if(s){if(s===g)continue
return s}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if(n===f)throw n=v,r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
n=p
var u=h(e,t,r)
if("normal"===u.type){if(n=r.done?v:d,u.arg===g)continue
return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=c
var f="suspendedStart",d="suspendedYield",p="executing",v="completed",g={}
function y(){}function m(){}function b(){}var _={}
_[o]=function(){return this}
var A=Object.getPrototypeOf,S=A&&A(A(E([])))
S&&S!==r&&a.call(S,o)&&(_=S)
var w=b.prototype=y.prototype=Object.create(_)
function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(i,o,s,u){var l=h(e[i],e,o)
if("throw"!==l.type){var c=l.arg,f=c.value
return f&&"object"===n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,s,u)}),(function(e){r("throw",e,s,u)})):t.resolve(f).then((function(e){c.value=e,s(c)}),(function(e){return r("throw",e,s,u)}))}u(l.arg)}var i
this._invoke=function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return i=i?i.then(a,a):a()}}function C(e,r){var n=e.iterator[r.method]
if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method))return g
r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=h(n,e.iterator,r.arg)
if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g
var i=a.arg
return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function E(e){if(e){var r=e[o]
if(r)return r.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r
return r.value=t,r.done=!0,r}
return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return m.prototype=w.constructor=b,b.constructor=m,m.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(x.prototype),x.prototype[s]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise)
var o=new x(c(t,r,n,a),i)
return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(w),l(w,u,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var r in e)t.push(r)
return t.reverse(),function r(){for(;t.length;){var n=t.pop()
if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var r=this
function n(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion
if("root"===o.tryLoc)return n("end")
if(o.tryLoc<=this.prev){var u=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc")
if(u&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r]
if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n
break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null)
var o=i?i.completion:{}
return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===e){var n=r.completion
if("throw"===n.type){var a=n.arg
R(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:E(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}("object"===n(e=r.nmd(e))?e.exports:{})
try{regeneratorRuntime=a}catch(i){Function("r","regeneratorRuntime = r")(a)}},(e,t,r)=>{"use strict"
function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var a=h(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.arrayByteLength=R,t.arraysToBytes=function(e){var t=e.length
if(1===t&&e[0]instanceof Uint8Array)return e[0]
for(var r=0,n=0;n<t;n++)r+=R(e[n])
for(var a=0,i=new Uint8Array(r),o=0;o<t;o++){var s=e[o]
s instanceof Uint8Array||(s="string"==typeof s?P(s):new Uint8Array(s))
var u=s.byteLength
i.set(s,a),a+=u}return i},t.assert=g,t.bytesToString=function(e){g(null!==e&&"object"===i(e)&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length,r=8192
if(t<r)return String.fromCharCode.apply(null,e)
for(var n=[],a=0;a<t;a+=r){var o=Math.min(a+r,t),s=e.subarray(a,o)
n.push(String.fromCharCode.apply(null,s))}return n.join("")},t.createPromiseCapability=function(){var e=Object.create(null),t=!1
return Object.defineProperty(e,"settled",{get:function(){return t}}),e.promise=new Promise((function(r,n){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,n(e)}})),e},t.createValidAbsoluteUrl=function(e,t){if(!e)return null
try{var r=t?new URL(e,t):new URL(e)
if(function(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}(r))return r}catch(n){}return null},t.encodeToXmlString=function(e){for(var t=[],r=0,n=0,a=e.length;n<a;n++){var i=e.codePointAt(n)
if(32<=i&&i<=126){var o=D[i]
o&&(r<n&&t.push(e.substring(r,n)),t.push(o),r=n+1)}else r<n&&t.push(e.substring(r,n)),t.push("&#x".concat(i.toString(16).toUpperCase(),";")),i>55295&&(i<57344||i>65533)&&n++,r=n+1}if(0===t.length)return e
r<e.length&&t.push(e.substring(r,e.length))
return t.join("")},t.escapeString=function(e){return e.replace(/([()\\\n\r])/g,(function(e){return"\n"===e?"\\n":"\r"===e?"\\r":"\\".concat(e)}))},t.getModificationDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=[e.getUTCFullYear().toString(),(e.getUTCMonth()+1).toString().padStart(2,"0"),e.getUTCDate().toString().padStart(2,"0"),e.getUTCHours().toString().padStart(2,"0"),e.getUTCMinutes().toString().padStart(2,"0"),e.getUTCSeconds().toString().padStart(2,"0")]
return t.join("")},t.getVerbosityLevel=function(){return d},t.info=function(e){d>=f.INFOS&&console.log("Info: ".concat(e))},t.isArrayBuffer=function(e){return"object"===i(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function(e,t){if(e.length!==t.length)return!1
return e.every((function(e,r){return e===t[r]}))},t.isAscii=function(e){return/^[\x00-\x7F]*$/.test(e)},t.isBool=function(e){return"boolean"==typeof e},t.isNum=function(e){return"number"==typeof e},t.isSameOrigin=function(e,t){var r
try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(a){return!1}var n=new URL(t,r)
return r.origin===n.origin},t.isString=function(e){return"string"==typeof e},t.objectFromEntries=function(e){return Object.assign(Object.create(null),Object.fromEntries(e))},t.objectSize=function(e){return Object.keys(e).length},t.removeNullCharacters=function(e){if("string"!=typeof e)return p("The argument for removeNullCharacters must be a string."),e
return e.replace(C,"")},t.setVerbosityLevel=function(e){Number.isInteger(e)&&(d=e)},t.shadow=y,t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=P,t.stringToPDFString=function(e){var t=e.length,r=[]
if("þ"===e[0]&&"ÿ"===e[1])for(var n=2;n<t;n+=2)r.push(String.fromCharCode(e.charCodeAt(n)<<8|e.charCodeAt(n+1)))
else if("ÿ"===e[0]&&"þ"===e[1])for(var a=2;a<t;a+=2)r.push(String.fromCharCode(e.charCodeAt(a+1)<<8|e.charCodeAt(a)))
else for(var i=0;i<t;++i){var o=I[e.charCodeAt(i)]
r.push(o?String.fromCharCode(o):e.charAt(i))}return r.join("")},t.stringToUTF16BEString=function(e){for(var t=["þÿ"],r=0,n=e.length;r<n;r++){var a=e.charCodeAt(r)
t.push(String.fromCharCode(a>>8&255)),t.push(String.fromCharCode(255&a))}return t.join("")},t.stringToUTF8String=function(e){return decodeURIComponent(escape(e))},t.unreachable=v
t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=p,t.VerbosityLevel=t.Util=t.UNSUPPORTED_FEATURES=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.PageActionEventType=t.OPS=t.MissingPDFException=t.IsLittleEndianCached=t.IsEvalSupportedCached=t.InvalidPDFException=t.ImageKind=t.IDENTITY_MATRIX=t.FormatError=t.FontType=t.FONT_IDENTITY_MATRIX=t.DocumentActionEventType=t.createObjectURL=t.CMapCompressionType=t.BaseException=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.AnnotationActionEventType=t.AbortException=void 0,r(5)
t.IDENTITY_MATRIX=[1,0,0,1,0,0]
t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0]
t.PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048}
t.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4}
t.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3}
t.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26}
t.AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"}
t.AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"}
t.AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"}
t.AnnotationReplyType={GROUP:"Group",REPLY:"R"}
t.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512}
t.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864}
t.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5}
t.AnnotationActionEventType={E:"Mouse Enter",X:"Mouse Exit",D:"Mouse Down",U:"Mouse Up",Fo:"Focus",Bl:"Blur",PO:"PageOpen",PC:"PageClose",PV:"PageVisible",PI:"PageInvisible",K:"Keystroke",F:"Format",V:"Validate",C:"Calculate"}
t.DocumentActionEventType={WC:"WillClose",WS:"WillSave",DS:"DidSave",WP:"WillPrint",DP:"DidPrint"}
t.PageActionEventType={O:"PageOpen",C:"PageClose"}
t.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"}
t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"}
var f={ERRORS:0,WARNINGS:1,INFOS:5}
t.VerbosityLevel=f
t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent"}
t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
var d=f.WARNINGS
function p(e){d>=f.WARNINGS&&console.log("Warning: ".concat(e))}function v(e){throw new Error(e)}function g(e,t){e||v(t)}function y(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}var m=function(){function e(t){this.constructor===e&&v("Cannot initialize BaseException."),this.message=t,this.name=this.constructor.name}return e.prototype=new Error,e.constructor=e,e}()
t.BaseException=m
var b=function(e){s(r,e)
var t=l(r)
function r(e,n){var a
return o(this,r),(a=t.call(this,e)).code=n,a}return r}(m)
t.PasswordException=b
var _=function(e){s(r,e)
var t=l(r)
function r(e,n){var a
return o(this,r),(a=t.call(this,e)).details=n,a}return r}(m)
t.UnknownErrorException=_
var A=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(m)
t.InvalidPDFException=A
var S=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(m)
t.MissingPDFException=S
var w=function(e){s(r,e)
var t=l(r)
function r(e,n){var a
return o(this,r),(a=t.call(this,e)).status=n,a}return r}(m)
t.UnexpectedResponseException=w
var k=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(m)
t.FormatError=k
var x=function(e){s(r,e)
var t=l(r)
function r(){return o(this,r),t.apply(this,arguments)}return r}(m)
t.AbortException=x
var C=/\x00/g
function P(e){g("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n)
return r}function R(e){return void 0!==e.length?e.length:(g(void 0!==e.byteLength,"arrayByteLength - invalid argument."),e.byteLength)}var T={get value(){return y(this,"value",((e=new Uint8Array(4))[0]=1,1===new Uint32Array(e.buffer,0,1)[0]))
var e}}
t.IsLittleEndianCached=T
var E={get value(){return y(this,"value",function(){try{return new Function(""),!0}catch(e){return!1}}())}}
t.IsEvalSupportedCached=E
var O,F=(O=Array(256).keys(),function(e){if(Array.isArray(e))return a(e)}(O)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(O)||function(e,t){if(e){if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(O)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){return e.toString(16).padStart(2,"0")})),L=function(){function e(){o(this,e)}var t,r,a
return t=e,a=[{key:"makeHexColor",value:function(e,t,r){return"#".concat(F[e]).concat(F[t]).concat(F[r])}},{key:"transform",value:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function(t,r){var n=e.applyTransform(t,r),a=e.applyTransform(t.slice(2,4),r),i=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(n[0],a[0],i[0],o[0]),Math.min(n[1],a[1],i[1],o[1]),Math.max(n[0],a[0],i[0],o[0]),Math.max(n[1],a[1],i[1],o[1])]}},{key:"inverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],a=e[2]*t[0]+e[3]*t[2],i=e[2]*t[1]+e[3]*t[3],o=(r+i)/2,s=Math.sqrt((r+i)*(r+i)-4*(r*i-a*n))/2,u=o+s||1,l=o-s||1
return[Math.sqrt(u),Math.sqrt(l)]}},{key:"normalizeRect",value:function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function(t,r){function n(e,t){return e-t}var a=[t[0],t[2],r[0],r[2]].sort(n),i=[t[1],t[3],r[1],r[3]].sort(n),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),a[0]===t[0]&&a[1]===r[0]||a[0]===r[0]&&a[1]===t[0]?(o[0]=a[1],o[2]=a[2],i[0]===t[1]&&i[1]===r[1]||i[0]===r[1]&&i[1]===t[1]?(o[1]=i[1],o[3]=i[2],o):null):null}}],(r=null)&&n(t.prototype,r),a&&n(t,a),e}()
t.Util=L
var I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
var M,j=(M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!r&&URL.createObjectURL){var n=new Blob([e],{type:t})
return URL.createObjectURL(n)}for(var a="data:".concat(t,";base64,"),i=0,o=e.length;i<o;i+=3){var s=255&e[i],u=255&e[i+1],l=255&e[i+2],c=s>>2,h=(3&s)<<4|u>>4,f=i+1<o?(15&u)<<2|l>>6:64,d=i+2<o?63&l:64
a+=M[c]+M[h]+M[f]+M[d]}return a})
t.createObjectURL=j
var D={60:"&lt;",62:"&gt;",38:"&amp;",34:"&quot;",39:"&apos;"}},(e,t,r)=>{"use strict"
var n=r(6)
"undefined"!=typeof globalThis&&globalThis._pdfjsCompatibilityChecked||("undefined"!=typeof globalThis&&globalThis.Math===Math||(globalThis=r(7)),globalThis._pdfjsCompatibilityChecked=!0,!globalThis.btoa&&n.isNodeJS&&(globalThis.btoa=function(e){return Buffer.from(e,"binary").toString("base64")}),!globalThis.atob&&n.isNodeJS&&(globalThis.atob=function(e){return Buffer.from(e,"base64").toString("binary")}),Object.fromEntries||r(52),globalThis.Promise.allSettled||(globalThis.Promise=r(82)),globalThis.URL=r(111),function(){var e=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),e=!0}catch(t){}e||(globalThis.ReadableStream=r(121).ReadableStream)}(),String.prototype.padStart||r(122),String.prototype.padEnd||r(128),Object.values||(Object.values=r(130)),Object.entries||(Object.entries=r(133)))},(e,t)=>{"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isNodeJS=void 0
var n=!("object"!==("undefined"==typeof process?"undefined":r(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type)
t.isNodeJS=n},(e,t,r)=>{r(8),e.exports=r(10)},(e,t,r)=>{r(9)({global:!0},{globalThis:r(10)})},(e,t,r)=>{var n=r(10),a=r(11).f,i=r(25),o=r(28),s=r(29),u=r(39),l=r(51)
e.exports=function(e,t){var r,c,h,f,d,p=e.target,v=e.global,g=e.stat
if(r=v?n:g?n[p]||s(p,{}):(n[p]||{}).prototype)for(c in t){if(f=t[c],h=e.noTargetGet?(d=a(r,c))&&d.value:r[c],!l(v?c:p+(g?".":"#")+c,e.forced)&&void 0!==h){if(typeof f==typeof h)continue
u(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),o(r,c,f,e)}}},e=>{var t=function(e){return e&&e.Math==Math&&e}
e.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof global&&global)||function(){return this}()||Function("return this")()},(e,t,r)=>{var n=r(12),a=r(14),i=r(15),o=r(16),s=r(20),u=r(22),l=r(23),c=Object.getOwnPropertyDescriptor
t.f=n?c:function(e,t){if(e=o(e),t=s(t,!0),l)try{return c(e,t)}catch(r){}if(u(e,t))return i(!a.f.call(e,t),e[t])}},(e,t,r)=>{var n=r(13)
e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},(e,t)=>{"use strict"
var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1)
t.f=a?function(e){var t=n(this,e)
return!!t&&t.enumerable}:r},e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},(e,t,r)=>{var n=r(17),a=r(19)
e.exports=function(e){return n(a(e))}},(e,t,r)=>{var n=r(13),a=r(18),i="".split
e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?i.call(e,""):Object(e)}:Object},e=>{var t={}.toString
e.exports=function(e){return t.call(e).slice(8,-1)}},e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e)
return e}},(e,t,r)=>{var n=r(21)
e.exports=function(e,t){if(!n(e))return e
var r,a
if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a
if("function"==typeof(r=e.valueOf)&&!n(a=r.call(e)))return a
if(!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a
throw TypeError("Can't convert object to primitive value")}},e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},e=>{var t={}.hasOwnProperty
e.exports=function(e,r){return t.call(e,r)}},(e,t,r)=>{var n=r(12),a=r(13),i=r(24)
e.exports=!n&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},(e,t,r)=>{var n=r(10),a=r(21),i=n.document,o=a(i)&&a(i.createElement)
e.exports=function(e){return o?i.createElement(e):{}}},(e,t,r)=>{var n=r(12),a=r(26),i=r(15)
e.exports=n?function(e,t,r){return a.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},(e,t,r)=>{var n=r(12),a=r(23),i=r(27),o=r(20),s=Object.defineProperty
t.f=n?s:function(e,t,r){if(i(e),t=o(t,!0),i(r),a)try{return s(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}},(e,t,r)=>{var n=r(21)
e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object")
return e}},(e,t,r)=>{var n=r(10),a=r(25),i=r(22),o=r(29),s=r(30),u=r(32),l=u.get,c=u.enforce,h=String(String).split("String");(e.exports=function(e,t,r,s){var u,l=!!s&&!!s.unsafe,f=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet
"function"==typeof r&&("string"!=typeof t||i(r,"name")||a(r,"name",t),(u=c(r)).source||(u.source=h.join("string"==typeof t?t:""))),e!==n?(l?!d&&e[t]&&(f=!0):delete e[t],f?e[t]=r:a(e,t,r)):f?e[t]=r:o(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},(e,t,r)=>{var n=r(10),a=r(25)
e.exports=function(e,t){try{a(n,e,t)}catch(r){n[e]=t}return t}},(e,t,r)=>{var n=r(31),a=Function.toString
"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return a.call(e)}),e.exports=n.inspectSource},(e,t,r)=>{var n=r(10),a=r(29),i="__core-js_shared__",o=n[i]||a(i,{})
e.exports=o},(e,t,r)=>{var n,a,i,o=r(33),s=r(10),u=r(21),l=r(25),c=r(22),h=r(31),f=r(34),d=r(38),p=s.WeakMap
if(o){var v=h.state||(h.state=new p),g=v.get,y=v.has,m=v.set
n=function(e,t){return t.facade=e,m.call(v,e,t),t},a=function(e){return g.call(v,e)||{}},i=function(e){return y.call(v,e)}}else{var b=f("state")
d[b]=!0,n=function(e,t){return t.facade=e,l(e,b,t),t},a=function(e){return c(e,b)?e[b]:{}},i=function(e){return c(e,b)}}e.exports={set:n,get:a,has:i,enforce:function(e){return i(e)?a(e):n(e,{})},getterFor:function(e){return function(t){var r
if(!u(t)||(r=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required")
return r}}}},(e,t,r)=>{var n=r(10),a=r(30),i=n.WeakMap
e.exports="function"==typeof i&&/native code/.test(a(i))},(e,t,r)=>{var n=r(35),a=r(37),i=n("keys")
e.exports=function(e){return i[e]||(i[e]=a(e))}},(e,t,r)=>{var n=r(36),a=r(31);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},e=>{e.exports=!1},e=>{var t=0,r=Math.random()
e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},e=>{e.exports={}},(e,t,r)=>{var n=r(22),a=r(40),i=r(11),o=r(26)
e.exports=function(e,t){for(var r=a(t),s=o.f,u=i.f,l=0;l<r.length;l++){var c=r[l]
n(e,c)||s(e,c,u(t,c))}}},(e,t,r)=>{var n=r(41),a=r(43),i=r(50),o=r(27)
e.exports=n("Reflect","ownKeys")||function(e){var t=a.f(o(e)),r=i.f
return r?t.concat(r(e)):t}},(e,t,r)=>{var n=r(42),a=r(10),i=function(e){return"function"==typeof e?e:void 0}
e.exports=function(e,t){return arguments.length<2?i(n[e])||i(a[e]):n[e]&&n[e][t]||a[e]&&a[e][t]}},(e,t,r)=>{var n=r(10)
e.exports=n},(e,t,r)=>{var n=r(44),a=r(49).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},(e,t,r)=>{var n=r(22),a=r(16),i=r(45).indexOf,o=r(38)
e.exports=function(e,t){var r,s=a(e),u=0,l=[]
for(r in s)!n(o,r)&&n(s,r)&&l.push(r)
for(;t.length>u;)n(s,r=t[u++])&&(~i(l,r)||l.push(r))
return l}},(e,t,r)=>{var n=r(16),a=r(46),i=r(48),o=function(e){return function(t,r,o){var s,u=n(t),l=a(u.length),c=i(o,l)
if(e&&r!=r){for(;l>c;)if((s=u[c++])!=s)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===r)return e||c||0
return!e&&-1}}
e.exports={includes:o(!0),indexOf:o(!1)}},(e,t,r)=>{var n=r(47),a=Math.min
e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},e=>{var t=Math.ceil,r=Math.floor
e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},(e,t,r)=>{var n=r(47),a=Math.max,i=Math.min
e.exports=function(e,t){var r=n(e)
return r<0?a(r+t,0):i(r,t)}},e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},(e,t)=>{t.f=Object.getOwnPropertySymbols},(e,t,r)=>{var n=r(13),a=/#|\.prototype\./,i=function(e,t){var r=s[o(e)]
return r==l||r!=u&&("function"==typeof t?n(t):!!t)},o=i.normalize=function(e){return String(e).replace(a,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P"
e.exports=i},(e,t,r)=>{r(53),r(72)
var n=r(42)
e.exports=n.Object.fromEntries},(e,t,r)=>{"use strict"
var n=r(16),a=r(54),i=r(62),o=r(32),s=r(63),u="Array Iterator",l=o.set,c=o.getterFor(u)
e.exports=s(Array,"Array",(function(e,t){l(this,{type:u,target:n(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,r=e.kind,n=e.index++
return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),i.Arguments=i.Array,a("keys"),a("values"),a("entries")},(e,t,r)=>{var n=r(55),a=r(58),i=r(26),o=n("unscopables"),s=Array.prototype
null==s[o]&&i.f(s,o,{configurable:!0,value:a(null)}),e.exports=function(e){s[o][e]=!0}},(e,t,r)=>{var n=r(10),a=r(35),i=r(22),o=r(37),s=r(56),u=r(57),l=a("wks"),c=n.Symbol,h=u?c:c&&c.withoutSetter||o
e.exports=function(e){return i(l,e)||(s&&i(c,e)?l[e]=c[e]:l[e]=h("Symbol."+e)),l[e]}},(e,t,r)=>{var n=r(13)
e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},(e,t,r)=>{var n=r(56)
e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},(e,t,r)=>{var n,a=r(27),i=r(59),o=r(49),s=r(38),u=r(61),l=r(24),c=r(34),h=c("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"</"+"script>"},p=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(a){}var e,t
p=n?function(e){e.write(d("")),e.close()
var t=e.parentWindow.Object
return e=null,t}(n):((t=l("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F)
for(var r=o.length;r--;)delete p.prototype[o[r]]
return p()}
s[h]=!0,e.exports=Object.create||function(e,t){var r
return null!==e?(f.prototype=a(e),r=new f,f.prototype=null,r[h]=e):r=p(),void 0===t?r:i(r,t)}},(e,t,r)=>{var n=r(12),a=r(26),i=r(27),o=r(60)
e.exports=n?Object.defineProperties:function(e,t){i(e)
for(var r,n=o(t),s=n.length,u=0;s>u;)a.f(e,r=n[u++],t[r])
return e}},(e,t,r)=>{var n=r(44),a=r(49)
e.exports=Object.keys||function(e){return n(e,a)}},(e,t,r)=>{var n=r(41)
e.exports=n("document","documentElement")},e=>{e.exports={}},(e,t,r)=>{"use strict"
var n=r(9),a=r(64),i=r(66),o=r(70),s=r(69),u=r(25),l=r(28),c=r(55),h=r(36),f=r(62),d=r(65),p=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,g=c("iterator"),y="keys",m="values",b="entries",_=function(){return this}
e.exports=function(e,t,r,c,d,A,S){a(r,t,c)
var w,k,x,C=function(e){if(e===d&&O)return O
if(!v&&e in T)return T[e]
switch(e){case y:case m:case b:return function(){return new r(this,e)}}return function(){return new r(this)}},P=t+" Iterator",R=!1,T=e.prototype,E=T[g]||T["@@iterator"]||d&&T[d],O=!v&&E||C(d),F="Array"==t&&T.entries||E
if(F&&(w=i(F.call(new e)),p!==Object.prototype&&w.next&&(h||i(w)===p||(o?o(w,p):"function"!=typeof w[g]&&u(w,g,_)),s(w,P,!0,!0),h&&(f[P]=_))),d==m&&E&&E.name!==m&&(R=!0,O=function(){return E.call(this)}),h&&!S||T[g]===O||u(T,g,O),f[t]=O,d)if(k={values:C(m),keys:A?O:C(y),entries:C(b)},S)for(x in k)(v||R||!(x in T))&&l(T,x,k[x])
else n({target:t,proto:!0,forced:v||R},k)
return k}},(e,t,r)=>{"use strict"
var n=r(65).IteratorPrototype,a=r(58),i=r(15),o=r(69),s=r(62),u=function(){return this}
e.exports=function(e,t,r){var l=t+" Iterator"
return e.prototype=a(n,{next:i(1,r)}),o(e,l,!1,!0),s[l]=u,e}},(e,t,r)=>{"use strict"
var n,a,i,o=r(13),s=r(66),u=r(25),l=r(22),c=r(55),h=r(36),f=c("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(a=s(s(i)))!==Object.prototype&&(n=a):d=!0)
var p=null==n||o((function(){var e={}
return n[f].call(e)!==e}))
p&&(n={}),h&&!p||l(n,f)||u(n,f,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},(e,t,r)=>{var n=r(22),a=r(67),i=r(34),o=r(68),s=i("IE_PROTO"),u=Object.prototype
e.exports=o?Object.getPrototypeOf:function(e){return e=a(e),n(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},(e,t,r)=>{var n=r(19)
e.exports=function(e){return Object(n(e))}},(e,t,r)=>{var n=r(13)
e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},(e,t,r)=>{var n=r(26).f,a=r(22),i=r(55)("toStringTag")
e.exports=function(e,t,r){e&&!a(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},(e,t,r)=>{var n=r(27),a=r(71)
e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={}
try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(i){}return function(r,i){return n(r),a(i),t?e.call(r,i):r.__proto__=i,r}}():void 0)},(e,t,r)=>{var n=r(21)
e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")
return e}},(e,t,r)=>{var n=r(9),a=r(73),i=r(81)
n({target:"Object",stat:!0},{fromEntries:function(e){var t={}
return a(e,(function(e,r){i(t,e,r)}),{AS_ENTRIES:!0}),t}})},(e,t,r)=>{var n=r(27),a=r(74),i=r(46),o=r(75),s=r(77),u=r(80),l=function(e,t){this.stopped=e,this.result=t}
e.exports=function(e,t,r){var c,h,f,d,p,v,g,y=r&&r.that,m=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),_=!(!r||!r.INTERRUPTED),A=o(t,y,1+m+_),S=function(e){return c&&u(c),new l(!0,e)},w=function(e){return m?(n(e),_?A(e[0],e[1],S):A(e[0],e[1])):_?A(e,S):A(e)}
if(b)c=e
else{if("function"!=typeof(h=s(e)))throw TypeError("Target is not iterable")
if(a(h)){for(f=0,d=i(e.length);d>f;f++)if((p=w(e[f]))&&p instanceof l)return p
return new l(!1)}c=h.call(e)}for(v=c.next;!(g=v.call(c)).done;){try{p=w(g.value)}catch(k){throw u(c),k}if("object"==typeof p&&p&&p instanceof l)return p}return new l(!1)}},(e,t,r)=>{var n=r(55),a=r(62),i=n("iterator"),o=Array.prototype
e.exports=function(e){return void 0!==e&&(a.Array===e||o[i]===e)}},(e,t,r)=>{var n=r(76)
e.exports=function(e,t,r){if(n(e),void 0===t)return e
switch(r){case 0:return function(){return e.call(t)}
case 1:return function(r){return e.call(t,r)}
case 2:return function(r,n){return e.call(t,r,n)}
case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")
return e}},(e,t,r)=>{var n=r(78),a=r(62),i=r(55)("iterator")
e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||a[n(e)]}},(e,t,r)=>{var n=r(79),a=r(18),i=r(55)("toStringTag"),o="Arguments"==a(function(){return arguments}())
e.exports=n?a:function(e){var t,r,n
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),i))?r:o?a(t):"Object"==(n=a(t))&&"function"==typeof t.callee?"Arguments":n}},(e,t,r)=>{var n={}
n[r(55)("toStringTag")]="z",e.exports="[object z]"===String(n)},(e,t,r)=>{var n=r(27)
e.exports=function(e){var t=e.return
if(void 0!==t)return n(t.call(e)).value}},(e,t,r)=>{"use strict"
var n=r(20),a=r(26),i=r(15)
e.exports=function(e,t,r){var o=n(t)
o in e?a.f(e,o,i(0,r)):e[o]=r}},(e,t,r)=>{r(83),r(84),r(86),r(104),r(105),r(106),r(107),r(109)
var n=r(42)
e.exports=n.Promise},(e,t,r)=>{"use strict"
var n=r(9),a=r(66),i=r(70),o=r(58),s=r(25),u=r(15),l=r(73),c=function(e,t){var r=this
if(!(r instanceof c))return new c(e,t)
i&&(r=i(new Error(void 0),a(r))),void 0!==t&&s(r,"message",String(t))
var n=[]
return l(e,n.push,{that:n}),s(r,"errors",n),r}
c.prototype=o(Error.prototype,{constructor:u(5,c),message:u(5,""),name:u(5,"AggregateError")}),n({global:!0},{AggregateError:c})},(e,t,r)=>{var n=r(79),a=r(28),i=r(85)
n||a(Object.prototype,"toString",i,{unsafe:!0})},(e,t,r)=>{"use strict"
var n=r(79),a=r(78)
e.exports=n?{}.toString:function(){return"[object "+a(this)+"]"}},(e,t,r)=>{"use strict"
var n,a,i,o,s=r(9),u=r(36),l=r(10),c=r(41),h=r(87),f=r(28),d=r(88),p=r(69),v=r(89),g=r(21),y=r(76),m=r(90),b=r(30),_=r(73),A=r(91),S=r(92),w=r(93).set,k=r(97),x=r(99),C=r(101),P=r(100),R=r(102),T=r(32),E=r(51),O=r(55),F=r(96),L=r(103),I=O("species"),M="Promise",j=T.get,D=T.set,N=T.getterFor(M),q=h,U=l.TypeError,W=l.document,B=l.process,G=c("fetch"),z=P.f,H=z,V=!!(W&&W.createEvent&&l.dispatchEvent),Y="function"==typeof PromiseRejectionEvent,X="unhandledrejection",Q=E(M,(function(){if(!(b(q)!==String(q))){if(66===L)return!0
if(!F&&!Y)return!0}if(u&&!q.prototype.finally)return!0
if(L>=51&&/native code/.test(q))return!1
var e=q.resolve(1),t=function(e){e((function(){}),(function(){}))}
return(e.constructor={})[I]=t,!(e.then((function(){}))instanceof t)})),K=Q||!A((function(e){q.all(e).catch((function(){}))})),J=function(e){var t
return!(!g(e)||"function"!=typeof(t=e.then))&&t},$=function(e,t){if(!e.notified){e.notified=!0
var r=e.reactions
k((function(){for(var n=e.value,a=1==e.state,i=0;r.length>i;){var o,s,u,l=r[i++],c=a?l.ok:l.fail,h=l.resolve,f=l.reject,d=l.domain
try{c?(a||(2===e.rejection&&re(e),e.rejection=1),!0===c?o=n:(d&&d.enter(),o=c(n),d&&(d.exit(),u=!0)),o===l.promise?f(U("Promise-chain cycle")):(s=J(o))?s.call(o,h,f):h(o)):f(n)}catch(p){d&&!u&&d.exit(),f(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&ee(e)}))}},Z=function(e,t,r){var n,a
V?((n=W.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),l.dispatchEvent(n)):n={promise:t,reason:r},!Y&&(a=l["on"+e])?a(n):e===X&&C("Unhandled promise rejection",r)},ee=function(e){w.call(l,(function(){var t,r=e.facade,n=e.value
if(te(e)&&(t=R((function(){F?B.emit("unhandledRejection",n,r):Z(X,r,n)})),e.rejection=F||te(e)?2:1,t.error))throw t.value}))},te=function(e){return 1!==e.rejection&&!e.parent},re=function(e){w.call(l,(function(){var t=e.facade
F?B.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},ne=function(e,t,r){return function(n){e(t,n,r)}},ae=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,$(e,!0))},ie=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r)
try{if(e.facade===t)throw U("Promise can't be resolved itself")
var n=J(t)
n?k((function(){var r={done:!1}
try{n.call(t,ne(ie,r,e),ne(ae,r,e))}catch(a){ae(r,a,e)}})):(e.value=t,e.state=1,$(e,!1))}catch(a){ae({done:!1},a,e)}}}
Q&&(q=function(e){m(this,q,M),y(e),n.call(this)
var t=j(this)
try{e(ne(ie,t),ne(ae,t))}catch(r){ae(t,r)}},(n=function(e){D(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(q.prototype,{then:function(e,t){var r=N(this),n=z(S(this,q))
return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=F?B.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&$(r,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),a=function(){var e=new n,t=j(e)
this.promise=e,this.resolve=ne(ie,t),this.reject=ne(ae,t)},P.f=z=function(e){return e===q||e===i?new a(e):H(e)},u||"function"!=typeof h||(o=h.prototype.then,f(h.prototype,"then",(function(e,t){var r=this
return new q((function(e,t){o.call(r,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof G&&s({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return x(q,G.apply(l,arguments))}}))),s({global:!0,wrap:!0,forced:Q},{Promise:q}),p(q,M,!1,!0),v(M),i=c(M),s({target:M,stat:!0,forced:Q},{reject:function(e){var t=z(this)
return t.reject.call(void 0,e),t.promise}}),s({target:M,stat:!0,forced:u||Q},{resolve:function(e){return x(u&&this===i?q:this,e)}}),s({target:M,stat:!0,forced:K},{all:function(e){var t=this,r=z(t),n=r.resolve,a=r.reject,i=R((function(){var r=y(t.resolve),i=[],o=0,s=1
_(e,(function(e){var u=o++,l=!1
i.push(void 0),s++,r.call(t,e).then((function(e){l||(l=!0,i[u]=e,--s||n(i))}),a)})),--s||n(i)}))
return i.error&&a(i.value),r.promise},race:function(e){var t=this,r=z(t),n=r.reject,a=R((function(){var a=y(t.resolve)
_(e,(function(e){a.call(t,e).then(r.resolve,n)}))}))
return a.error&&n(a.value),r.promise}})},(e,t,r)=>{var n=r(10)
e.exports=n.Promise},(e,t,r)=>{var n=r(28)
e.exports=function(e,t,r){for(var a in t)n(e,a,t[a],r)
return e}},(e,t,r)=>{"use strict"
var n=r(41),a=r(26),i=r(55),o=r(12),s=i("species")
e.exports=function(e){var t=n(e),r=a.f
o&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},e=>{e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation")
return e}},(e,t,r)=>{var n=r(55)("iterator"),a=!1
try{var i=0,o={next:function(){return{done:!!i++}},return:function(){a=!0}}
o[n]=function(){return this},Array.from(o,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!a)return!1
var r=!1
try{var i={}
i[n]=function(){return{next:function(){return{done:r=!0}}}},e(i)}catch(s){}return r}},(e,t,r)=>{var n=r(27),a=r(76),i=r(55)("species")
e.exports=function(e,t){var r,o=n(e).constructor
return void 0===o||null==(r=n(o)[i])?t:a(r)}},(e,t,r)=>{var n,a,i,o=r(10),s=r(13),u=r(75),l=r(61),c=r(24),h=r(94),f=r(96),d=o.location,p=o.setImmediate,v=o.clearImmediate,g=o.process,y=o.MessageChannel,m=o.Dispatch,b=0,_={},A="onreadystatechange",S=function(e){if(_.hasOwnProperty(e)){var t=_[e]
delete _[e],t()}},w=function(e){return function(){S(e)}},k=function(e){S(e.data)},x=function(e){o.postMessage(e+"",d.protocol+"//"+d.host)}
p&&v||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++])
return _[++b]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},n(b),b},v=function(e){delete _[e]},f?n=function(e){g.nextTick(w(e))}:m&&m.now?n=function(e){m.now(w(e))}:y&&!h?(i=(a=new y).port2,a.port1.onmessage=k,n=u(i.postMessage,i,1)):o.addEventListener&&"function"==typeof postMessage&&!o.importScripts&&d&&"file:"!==d.protocol&&!s(x)?(n=x,o.addEventListener("message",k,!1)):n=A in c("script")?function(e){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),S(e)}}:function(e){setTimeout(w(e),0)}),e.exports={set:p,clear:v}},(e,t,r)=>{var n=r(95)
e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},(e,t,r)=>{var n=r(41)
e.exports=n("navigator","userAgent")||""},(e,t,r)=>{var n=r(18),a=r(10)
e.exports="process"==n(a.process)},(e,t,r)=>{var n,a,i,o,s,u,l,c,h=r(10),f=r(11).f,d=r(93).set,p=r(94),v=r(98),g=r(96),y=h.MutationObserver||h.WebKitMutationObserver,m=h.document,b=h.process,_=h.Promise,A=f(h,"queueMicrotask"),S=A&&A.value
S||(n=function(){var e,t
for(g&&(e=b.domain)&&e.exit();a;){t=a.fn,a=a.next
try{t()}catch(r){throw a?o():i=void 0,r}}i=void 0,e&&e.enter()},p||g||v||!y||!m?_&&_.resolve?(l=_.resolve(void 0),c=l.then,o=function(){c.call(l,n)}):o=g?function(){b.nextTick(n)}:function(){d.call(h,n)}:(s=!0,u=m.createTextNode(""),new y(n).observe(u,{characterData:!0}),o=function(){u.data=s=!s})),e.exports=S||function(e){var t={fn:e,next:void 0}
i&&(i.next=t),a||(a=t,o()),i=t}},(e,t,r)=>{var n=r(95)
e.exports=/web0s(?!.*chrome)/i.test(n)},(e,t,r)=>{var n=r(27),a=r(21),i=r(100)
e.exports=function(e,t){if(n(e),a(t)&&t.constructor===e)return t
var r=i.f(e)
return(0,r.resolve)(t),r.promise}},(e,t,r)=>{"use strict"
var n=r(76),a=function(e){var t,r
this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor")
t=e,r=n})),this.resolve=n(t),this.reject=n(r)}
e.exports.f=function(e){return new a(e)}},(e,t,r)=>{var n=r(10)
e.exports=function(e,t){var r=n.console
r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))}},e=>{e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},(e,t,r)=>{var n,a,i=r(10),o=r(95),s=i.process,u=s&&s.versions,l=u&&u.v8
l?a=(n=l.split("."))[0]+n[1]:o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(a=n[1]),e.exports=a&&+a},(e,t,r)=>{"use strict"
var n=r(9),a=r(76),i=r(100),o=r(102),s=r(73)
n({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=i.f(t),n=r.resolve,u=r.reject,l=o((function(){var r=a(t.resolve),i=[],o=0,u=1
s(e,(function(e){var a=o++,s=!1
i.push(void 0),u++,r.call(t,e).then((function(e){s||(s=!0,i[a]={status:"fulfilled",value:e},--u||n(i))}),(function(e){s||(s=!0,i[a]={status:"rejected",reason:e},--u||n(i))}))})),--u||n(i)}))
return l.error&&u(l.value),r.promise}})},(e,t,r)=>{"use strict"
var n=r(9),a=r(76),i=r(41),o=r(100),s=r(102),u=r(73),l="No one promise resolved"
n({target:"Promise",stat:!0},{any:function(e){var t=this,r=o.f(t),n=r.resolve,c=r.reject,h=s((function(){var r=a(t.resolve),o=[],s=0,h=1,f=!1
u(e,(function(e){var a=s++,u=!1
o.push(void 0),h++,r.call(t,e).then((function(e){u||f||(f=!0,n(e))}),(function(e){u||f||(u=!0,o[a]=e,--h||c(new(i("AggregateError"))(o,l)))}))})),--h||c(new(i("AggregateError"))(o,l))}))
return h.error&&c(h.value),r.promise}})},(e,t,r)=>{"use strict"
var n=r(9),a=r(36),i=r(87),o=r(13),s=r(41),u=r(92),l=r(99),c=r(28)
n({target:"Promise",proto:!0,real:!0,forced:!!i&&o((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=u(this,s("Promise")),r="function"==typeof e
return this.then(r?function(r){return l(t,e()).then((function(){return r}))}:e,r?function(r){return l(t,e()).then((function(){throw r}))}:e)}}),a||"function"!=typeof i||i.prototype.finally||c(i.prototype,"finally",s("Promise").prototype.finally)},(e,t,r)=>{"use strict"
var n=r(108).charAt,a=r(32),i=r(63),o="String Iterator",s=a.set,u=a.getterFor(o)
i(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=u(this),r=t.string,a=t.index
return a>=r.length?{value:void 0,done:!0}:(e=n(r,a),t.index+=e.length,{value:e,done:!1})}))},(e,t,r)=>{var n=r(47),a=r(19),i=function(e){return function(t,r){var i,o,s=String(a(t)),u=n(r),l=s.length
return u<0||u>=l?e?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===l||(o=s.charCodeAt(u+1))<56320||o>57343?e?s.charAt(u):i:e?s.slice(u,u+2):o-56320+(i-55296<<10)+65536}}
e.exports={codeAt:i(!1),charAt:i(!0)}},(e,t,r)=>{var n=r(10),a=r(110),i=r(53),o=r(25),s=r(55),u=s("iterator"),l=s("toStringTag"),c=i.values
for(var h in a){var f=n[h],d=f&&f.prototype
if(d){if(d[u]!==c)try{o(d,u,c)}catch(v){d[u]=c}if(d[l]||o(d,l,h),a[h])for(var p in i)if(d[p]!==i[p])try{o(d,p,i[p])}catch(v){d[p]=i[p]}}}},e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},(e,t,r)=>{r(112),r(120),r(118)
var n=r(42)
e.exports=n.URL},(e,t,r)=>{"use strict"
r(107)
var n,a=r(9),i=r(12),o=r(113),s=r(10),u=r(59),l=r(28),c=r(90),h=r(22),f=r(114),d=r(115),p=r(108).codeAt,v=r(117),g=r(69),y=r(118),m=r(32),b=s.URL,_=y.URLSearchParams,A=y.getState,S=m.set,w=m.getterFor("URL"),k=Math.floor,x=Math.pow,C="Invalid scheme",P="Invalid host",R="Invalid port",T=/[A-Za-z]/,E=/[\d+-.A-Za-z]/,O=/\d/,F=/^(0x|0X)/,L=/^[0-7]+$/,I=/^\d+$/,M=/^[\dA-Fa-f]+$/,j=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,D=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,N=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,q=/[\u0009\u000A\u000D]/g,U=function(e,t){var r,n,a
if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return P
if(!(r=B(t.slice(1,-1))))return P
e.host=r}else if(K(e)){if(t=v(t),j.test(t))return P
if(null===(r=W(t)))return P
e.host=r}else{if(D.test(t))return P
for(r="",n=d(t),a=0;a<n.length;a++)r+=X(n[a],z)
e.host=r}},W=function(e){var t,r,n,a,i,o,s,u=e.split(".")
if(u.length&&""==u[u.length-1]&&u.pop(),(t=u.length)>4)return e
for(r=[],n=0;n<t;n++){if(""==(a=u[n]))return e
if(i=10,a.length>1&&"0"==a.charAt(0)&&(i=F.test(a)?16:8,a=a.slice(8==i?1:2)),""===a)o=0
else{if(!(10==i?I:8==i?L:M).test(a))return e
o=parseInt(a,i)}r.push(o)}for(n=0;n<t;n++)if(o=r[n],n==t-1){if(o>=x(256,5-t))return null}else if(o>255)return null
for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*x(256,3-n)
return s},B=function(e){var t,r,n,a,i,o,s,u=[0,0,0,0,0,0,0,0],l=0,c=null,h=0,f=function(){return e.charAt(h)}
if(":"==f()){if(":"!=e.charAt(1))return
h+=2,c=++l}for(;f();){if(8==l)return
if(":"!=f()){for(t=r=0;r<4&&M.test(f());)t=16*t+parseInt(f(),16),h++,r++
if("."==f()){if(0==r)return
if(h-=r,l>6)return
for(n=0;f();){if(a=null,n>0){if(!("."==f()&&n<4))return
h++}if(!O.test(f()))return
for(;O.test(f());){if(i=parseInt(f(),10),null===a)a=i
else{if(0==a)return
a=10*a+i}if(a>255)return
h++}u[l]=256*u[l]+a,2!=++n&&4!=n||l++}if(4!=n)return
break}if(":"==f()){if(h++,!f())return}else if(f())return
u[l++]=t}else{if(null!==c)return
h++,c=++l}}if(null!==c)for(o=l-c,l=7;0!=l&&o>0;)s=u[l],u[l--]=u[c+o-1],u[c+--o]=s
else if(8!=l)return
return u},G=function(e){var t,r,n,a
if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=k(e/256)
return t.join(".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,r=1,n=null,a=0,i=0;i<8;i++)0!==e[i]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=i),++a)
return a>r&&(t=n,r=a),t}(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=e[r].toString(16),r<7&&(t+=":")))
return"["+t+"]"}return e},z={},H=f({},z,{" ":1,'"':1,"<":1,">":1,"`":1}),V=f({},H,{"#":1,"?":1,"{":1,"}":1}),Y=f({},V,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),X=function(e,t){var r=p(e,0)
return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},Q={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(e){return h(Q,e.scheme)},J=function(e){return""!=e.username||""!=e.password},$=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},Z=function(e,t){var r
return 2==e.length&&T.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},ee=function(e){var t
return e.length>1&&Z(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},te=function(e){var t=e.path,r=t.length
!r||"file"==e.scheme&&1==r&&Z(t[0],!0)||t.pop()},re=function(e){return"."===e||"%2e"===e.toLowerCase()},ne={},ae={},ie={},oe={},se={},ue={},le={},ce={},he={},fe={},de={},pe={},ve={},ge={},ye={},me={},be={},_e={},Ae={},Se={},we={},ke=function(e,t,r,a){var i,o,s,u,l,c=r||ne,f=0,p="",v=!1,g=!1,y=!1
for(r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(N,"")),t=t.replace(q,""),i=d(t);f<=i.length;){switch(o=i[f],c){case ne:if(!o||!T.test(o)){if(r)return C
c=ie
continue}p+=o.toLowerCase(),c=ae
break
case ae:if(o&&(E.test(o)||"+"==o||"-"==o||"."==o))p+=o.toLowerCase()
else{if(":"!=o){if(r)return C
p="",c=ie,f=0
continue}if(r&&(K(e)!=h(Q,p)||"file"==p&&(J(e)||null!==e.port)||"file"==e.scheme&&!e.host))return
if(e.scheme=p,r)return void(K(e)&&Q[e.scheme]==e.port&&(e.port=null))
p="","file"==e.scheme?c=ge:K(e)&&a&&a.scheme==e.scheme?c=oe:K(e)?c=ce:"/"==i[f+1]?(c=se,f++):(e.cannotBeABaseURL=!0,e.path.push(""),c=Ae)}break
case ie:if(!a||a.cannotBeABaseURL&&"#"!=o)return C
if(a.cannotBeABaseURL&&"#"==o){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,c=we
break}c="file"==a.scheme?ge:ue
continue
case oe:if("/"!=o||"/"!=i[f+1]){c=ue
continue}c=he,f++
break
case se:if("/"==o){c=fe
break}c=_e
continue
case ue:if(e.scheme=a.scheme,o==n)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query
else if("/"==o||"\\"==o&&K(e))c=le
else if("?"==o)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",c=Se
else{if("#"!=o){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),c=_e
continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=we}break
case le:if(!K(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,c=_e
continue}c=fe}else c=he
break
case ce:if(c=he,"/"!=o||"/"!=p.charAt(f+1))continue
f++
break
case he:if("/"!=o&&"\\"!=o){c=fe
continue}break
case fe:if("@"==o){v&&(p="%40"+p),v=!0,s=d(p)
for(var m=0;m<s.length;m++){var b=s[m]
if(":"!=b||y){var _=X(b,Y)
y?e.password+=_:e.username+=_}else y=!0}p=""}else if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&K(e)){if(v&&""==p)return"Invalid authority"
f-=d(p).length+1,p="",c=de}else p+=o
break
case de:case pe:if(r&&"file"==e.scheme){c=me
continue}if(":"!=o||g){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&K(e)){if(K(e)&&""==p)return P
if(r&&""==p&&(J(e)||null!==e.port))return
if(u=U(e,p))return u
if(p="",c=be,r)return
continue}"["==o?g=!0:"]"==o&&(g=!1),p+=o}else{if(""==p)return P
if(u=U(e,p))return u
if(p="",c=ve,r==pe)return}break
case ve:if(!O.test(o)){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&K(e)||r){if(""!=p){var A=parseInt(p,10)
if(A>65535)return R
e.port=K(e)&&A===Q[e.scheme]?null:A,p=""}if(r)return
c=be
continue}return R}p+=o
break
case ge:if(e.scheme="file","/"==o||"\\"==o)c=ye
else{if(!a||"file"!=a.scheme){c=_e
continue}if(o==n)e.host=a.host,e.path=a.path.slice(),e.query=a.query
else if("?"==o)e.host=a.host,e.path=a.path.slice(),e.query="",c=Se
else{if("#"!=o){ee(i.slice(f).join(""))||(e.host=a.host,e.path=a.path.slice(),te(e)),c=_e
continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=we}}break
case ye:if("/"==o||"\\"==o){c=me
break}a&&"file"==a.scheme&&!ee(i.slice(f).join(""))&&(Z(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),c=_e
continue
case me:if(o==n||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&Z(p))c=_e
else if(""==p){if(e.host="",r)return
c=be}else{if(u=U(e,p))return u
if("localhost"==e.host&&(e.host=""),r)return
p="",c=be}continue}p+=o
break
case be:if(K(e)){if(c=_e,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=n&&(c=_e,"/"!=o))continue}else e.fragment="",c=we
else e.query="",c=Se
break
case _e:if(o==n||"/"==o||"\\"==o&&K(e)||!r&&("?"==o||"#"==o)){if(".."===(l=(l=p).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(te(e),"/"==o||"\\"==o&&K(e)||e.path.push("")):re(p)?"/"==o||"\\"==o&&K(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Z(p)&&(e.host&&(e.host=""),p=p.charAt(0)+":"),e.path.push(p)),p="","file"==e.scheme&&(o==n||"?"==o||"#"==o))for(;e.path.length>1&&""===e.path[0];)e.path.shift()
"?"==o?(e.query="",c=Se):"#"==o&&(e.fragment="",c=we)}else p+=X(o,V)
break
case Ae:"?"==o?(e.query="",c=Se):"#"==o?(e.fragment="",c=we):o!=n&&(e.path[0]+=X(o,z))
break
case Se:r||"#"!=o?o!=n&&("'"==o&&K(e)?e.query+="%27":e.query+="#"==o?"%23":X(o,z)):(e.fragment="",c=we)
break
case we:o!=n&&(e.fragment+=X(o,H))}f++}},xe=function(e){var t,r,n=c(this,xe,"URL"),a=arguments.length>1?arguments[1]:void 0,o=String(e),s=S(n,{type:"URL"})
if(void 0!==a)if(a instanceof xe)t=w(a)
else if(r=ke(t={},String(a)))throw TypeError(r)
if(r=ke(s,o,null,t))throw TypeError(r)
var u=s.searchParams=new _,l=A(u)
l.updateSearchParams(s.query),l.updateURL=function(){s.query=String(u)||null},i||(n.href=Pe.call(n),n.origin=Re.call(n),n.protocol=Te.call(n),n.username=Ee.call(n),n.password=Oe.call(n),n.host=Fe.call(n),n.hostname=Le.call(n),n.port=Ie.call(n),n.pathname=Me.call(n),n.search=je.call(n),n.searchParams=De.call(n),n.hash=Ne.call(n))},Ce=xe.prototype,Pe=function(){var e=w(this),t=e.scheme,r=e.username,n=e.password,a=e.host,i=e.port,o=e.path,s=e.query,u=e.fragment,l=t+":"
return null!==a?(l+="//",J(e)&&(l+=r+(n?":"+n:"")+"@"),l+=G(a),null!==i&&(l+=":"+i)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(l+="?"+s),null!==u&&(l+="#"+u),l},Re=function(){var e=w(this),t=e.scheme,r=e.port
if("blob"==t)try{return new URL(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&K(e)?t+"://"+G(e.host)+(null!==r?":"+r:""):"null"},Te=function(){return w(this).scheme+":"},Ee=function(){return w(this).username},Oe=function(){return w(this).password},Fe=function(){var e=w(this),t=e.host,r=e.port
return null===t?"":null===r?G(t):G(t)+":"+r},Le=function(){var e=w(this).host
return null===e?"":G(e)},Ie=function(){var e=w(this).port
return null===e?"":String(e)},Me=function(){var e=w(this),t=e.path
return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},je=function(){var e=w(this).query
return e?"?"+e:""},De=function(){return w(this).searchParams},Ne=function(){var e=w(this).fragment
return e?"#"+e:""},qe=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}}
if(i&&u(Ce,{href:qe(Pe,(function(e){var t=w(this),r=String(e),n=ke(t,r)
if(n)throw TypeError(n)
A(t.searchParams).updateSearchParams(t.query)})),origin:qe(Re),protocol:qe(Te,(function(e){var t=w(this)
ke(t,String(e)+":",ne)})),username:qe(Ee,(function(e){var t=w(this),r=d(String(e))
if(!$(t)){t.username=""
for(var n=0;n<r.length;n++)t.username+=X(r[n],Y)}})),password:qe(Oe,(function(e){var t=w(this),r=d(String(e))
if(!$(t)){t.password=""
for(var n=0;n<r.length;n++)t.password+=X(r[n],Y)}})),host:qe(Fe,(function(e){var t=w(this)
t.cannotBeABaseURL||ke(t,String(e),de)})),hostname:qe(Le,(function(e){var t=w(this)
t.cannotBeABaseURL||ke(t,String(e),pe)})),port:qe(Ie,(function(e){var t=w(this)
$(t)||(""==(e=String(e))?t.port=null:ke(t,e,ve))})),pathname:qe(Me,(function(e){var t=w(this)
t.cannotBeABaseURL||(t.path=[],ke(t,e+"",be))})),search:qe(je,(function(e){var t=w(this)
""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",ke(t,e,Se)),A(t.searchParams).updateSearchParams(t.query)})),searchParams:qe(De),hash:qe(Ne,(function(e){var t=w(this)
""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",ke(t,e,we)):t.fragment=null}))}),l(Ce,"toJSON",(function(){return Pe.call(this)}),{enumerable:!0}),l(Ce,"toString",(function(){return Pe.call(this)}),{enumerable:!0}),b){var Ue=b.createObjectURL,We=b.revokeObjectURL
Ue&&l(xe,"createObjectURL",(function(e){return Ue.apply(b,arguments)})),We&&l(xe,"revokeObjectURL",(function(e){return We.apply(b,arguments)}))}g(xe,"URL"),a({global:!0,forced:!o,sham:!i},{URL:xe})},(e,t,r)=>{var n=r(13),a=r(55),i=r(36),o=a("iterator")
e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r=""
return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),r+=n+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},(e,t,r)=>{"use strict"
var n=r(12),a=r(13),i=r(60),o=r(50),s=r(14),u=r(67),l=r(17),c=Object.assign,h=Object.defineProperty
e.exports=!c||a((function(){if(n&&1!==c({b:1},c(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0
var e={},t={},r=Symbol(),a="abcdefghijklmnopqrst"
return e[r]=7,a.split("").forEach((function(e){t[e]=e})),7!=c({},e)[r]||i(c({},t)).join("")!=a}))?function(e,t){for(var r=u(e),a=arguments.length,c=1,h=o.f,f=s.f;a>c;)for(var d,p=l(arguments[c++]),v=h?i(p).concat(h(p)):i(p),g=v.length,y=0;g>y;)d=v[y++],n&&!f.call(p,d)||(r[d]=p[d])
return r}:c},(e,t,r)=>{"use strict"
var n=r(75),a=r(67),i=r(116),o=r(74),s=r(46),u=r(81),l=r(77)
e.exports=function(e){var t,r,c,h,f,d,p=a(e),v="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,m=void 0!==y,b=l(p),_=0
if(m&&(y=n(y,g>2?arguments[2]:void 0,2)),null==b||v==Array&&o(b))for(r=new v(t=s(p.length));t>_;_++)d=m?y(p[_],_):p[_],u(r,_,d)
else for(f=(h=b.call(p)).next,r=new v;!(c=f.call(h)).done;_++)d=m?i(h,y,[c.value,_],!0):c.value,u(r,_,d)
return r.length=_,r}},(e,t,r)=>{var n=r(27),a=r(80)
e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(o){throw a(e),o}}},e=>{"use strict"
var t=2147483647,r=/[^\0-\u007E]/,n=/[.\u3002\uFF0E\uFF61]/g,a="Overflow: input needs wider integers to process",i=Math.floor,o=String.fromCharCode,s=function(e){return e+22+75*(e<26)},u=function(e,t,r){var n=0
for(e=r?i(e/700):e>>1,e+=i(e/t);e>455;n+=36)e=i(e/35)
return i(n+36*e/(e+38))},l=function(e){var r,n,l=[],c=(e=function(e){for(var t=[],r=0,n=e.length;r<n;){var a=e.charCodeAt(r++)
if(a>=55296&&a<=56319&&r<n){var i=e.charCodeAt(r++)
56320==(64512&i)?t.push(((1023&a)<<10)+(1023&i)+65536):(t.push(a),r--)}else t.push(a)}return t}(e)).length,h=128,f=0,d=72
for(r=0;r<e.length;r++)(n=e[r])<128&&l.push(o(n))
var p=l.length,v=p
for(p&&l.push("-");v<c;){var g=t
for(r=0;r<e.length;r++)(n=e[r])>=h&&n<g&&(g=n)
var y=v+1
if(g-h>i((t-f)/y))throw RangeError(a)
for(f+=(g-h)*y,h=g,r=0;r<e.length;r++){if((n=e[r])<h&&++f>t)throw RangeError(a)
if(n==h){for(var m=f,b=36;;b+=36){var _=b<=d?1:b>=d+26?26:b-d
if(m<_)break
var A=m-_,S=36-_
l.push(o(s(_+A%S))),m=i(A/S)}l.push(o(s(m))),d=u(f,y,v==p),f=0,++v}}++f,++h}return l.join("")}
e.exports=function(e){var t,a,i=[],o=e.toLowerCase().replace(n,".").split(".")
for(t=0;t<o.length;t++)a=o[t],i.push(r.test(a)?"xn--"+l(a):a)
return i.join(".")}},(e,t,r)=>{"use strict"
r(53)
var n=r(9),a=r(41),i=r(113),o=r(28),s=r(88),u=r(69),l=r(64),c=r(32),h=r(90),f=r(22),d=r(75),p=r(78),v=r(27),g=r(21),y=r(58),m=r(15),b=r(119),_=r(77),A=r(55),S=a("fetch"),w=a("Headers"),k=A("iterator"),x="URLSearchParams",C="URLSearchParamsIterator",P=c.set,R=c.getterFor(x),T=c.getterFor(C),E=/\+/g,O=Array(4),F=function(e){return O[e-1]||(O[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},L=function(e){try{return decodeURIComponent(e)}catch(t){return e}},I=function(e){var t=e.replace(E," "),r=4
try{return decodeURIComponent(t)}catch(n){for(;r;)t=t.replace(F(r--),L)
return t}},M=/[!'()~]|%20/g,j={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},D=function(e){return j[e]},N=function(e){return encodeURIComponent(e).replace(M,D)},q=function(e,t){if(t)for(var r,n,a=t.split("&"),i=0;i<a.length;)(r=a[i++]).length&&(n=r.split("="),e.push({key:I(n.shift()),value:I(n.join("="))}))},U=function(e){this.entries.length=0,q(this.entries,e)},W=function(e,t){if(e<t)throw TypeError("Not enough arguments")},B=l((function(e,t){P(this,{type:C,iterator:b(R(e).entries),kind:t})}),"Iterator",(function(){var e=T(this),t=e.kind,r=e.iterator.next(),n=r.value
return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),G=function(){h(this,G,x)
var e,t,r,n,a,i,o,s,u,l=arguments.length>0?arguments[0]:void 0,c=this,d=[]
if(P(c,{type:x,entries:d,updateURL:function(){},updateSearchParams:U}),void 0!==l)if(g(l))if("function"==typeof(e=_(l)))for(r=(t=e.call(l)).next;!(n=r.call(t)).done;){if((o=(i=(a=b(v(n.value))).next).call(a)).done||(s=i.call(a)).done||!i.call(a).done)throw TypeError("Expected sequence with length 2")
d.push({key:o.value+"",value:s.value+""})}else for(u in l)f(l,u)&&d.push({key:u,value:l[u]+""})
else q(d,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},z=G.prototype
s(z,{append:function(e,t){W(arguments.length,2)
var r=R(this)
r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){W(arguments.length,1)
for(var t=R(this),r=t.entries,n=e+"",a=0;a<r.length;)r[a].key===n?r.splice(a,1):a++
t.updateURL()},get:function(e){W(arguments.length,1)
for(var t=R(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value
return null},getAll:function(e){W(arguments.length,1)
for(var t=R(this).entries,r=e+"",n=[],a=0;a<t.length;a++)t[a].key===r&&n.push(t[a].value)
return n},has:function(e){W(arguments.length,1)
for(var t=R(this).entries,r=e+"",n=0;n<t.length;)if(t[n++].key===r)return!0
return!1},set:function(e,t){W(arguments.length,1)
for(var r,n=R(this),a=n.entries,i=!1,o=e+"",s=t+"",u=0;u<a.length;u++)(r=a[u]).key===o&&(i?a.splice(u--,1):(i=!0,r.value=s))
i||a.push({key:o,value:s}),n.updateURL()},sort:function(){var e,t,r,n=R(this),a=n.entries,i=a.slice()
for(a.length=0,r=0;r<i.length;r++){for(e=i[r],t=0;t<r;t++)if(a[t].key>e.key){a.splice(t,0,e)
break}t===r&&a.push(e)}n.updateURL()},forEach:function(e){for(var t,r=R(this).entries,n=d(e,arguments.length>1?arguments[1]:void 0,3),a=0;a<r.length;)n((t=r[a++]).value,t.key,this)},keys:function(){return new B(this,"keys")},values:function(){return new B(this,"values")},entries:function(){return new B(this,"entries")}},{enumerable:!0}),o(z,k,z.entries),o(z,"toString",(function(){for(var e,t=R(this).entries,r=[],n=0;n<t.length;)e=t[n++],r.push(N(e.key)+"="+N(e.value))
return r.join("&")}),{enumerable:!0}),u(G,x),n({global:!0,forced:!i},{URLSearchParams:G}),i||"function"!=typeof S||"function"!=typeof w||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,a=[e]
return arguments.length>1&&(g(t=arguments[1])&&(r=t.body,p(r)===x&&((n=t.headers?new w(t.headers):new w).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=y(t,{body:m(0,String(r)),headers:m(0,n)}))),a.push(t)),S.apply(this,a)}}),e.exports={URLSearchParams:G,getState:R}},(e,t,r)=>{var n=r(27),a=r(77)
e.exports=function(e){var t=a(e)
if("function"!=typeof t)throw TypeError(String(e)+" is not iterable")
return n(t.call(e))}},(e,t,r)=>{"use strict"
r(9)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t){(function(e){"use strict"
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(e){return"Symbol("+e+")"}
function r(){}var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0
function a(e){return"object"==typeof e&&null!==e||"function"==typeof e}var i=r,o=Promise,s=Promise.prototype.then,u=Promise.resolve.bind(o),l=Promise.reject.bind(o)
function c(e){return new o(e)}function h(e){return u(e)}function f(e){return l(e)}function d(e,t,r){return s.call(e,t,r)}function p(e,t,r){d(d(e,t,r),void 0,i)}function v(e,t){p(e,t)}function g(e,t){p(e,void 0,t)}function y(e,t,r){return d(e,t,r)}function m(e){d(e,void 0,i)}var b=function(){var e=n&&n.queueMicrotask
if("function"==typeof e)return e
var t=h(void 0)
return function(e){return d(t,e)}}()
function _(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(e,t,r)}function A(e,t,r){try{return h(_(e,t,r))}catch(n){return f(n)}}var S=function(){function e(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}return Object.defineProperty(e.prototype,"length",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.push=function(e){var t=this._back,r=t
16383===t._elements.length&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size},e.prototype.shift=function(){var e=this._front,t=e,r=this._cursor,n=r+1,a=e._elements,i=a[r]
return 16384===n&&(t=e._next,n=0),--this._size,this._cursor=n,e!==t&&(this._front=t),a[r]=void 0,i},e.prototype.forEach=function(e){for(var t=this._cursor,r=this._front,n=r._elements;!(t===n.length&&void 0===r._next||t===n.length&&(t=0,0===(n=(r=r._next)._elements).length));)e(n[t]),++t},e.prototype.peek=function(){var e=this._front,t=this._cursor
return e._elements[t]},e}()
function w(e,t){e._ownerReadableStream=t,t._reader=e,"readable"===t._state?P(e):"closed"===t._state?function(e){P(e),E(e)}(e):R(e,t._storedError)}function k(e,t){return lr(e._ownerReadableStream,t)}function x(e){"readable"===e._ownerReadableStream._state?T(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function(e,t){R(e,t)}(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function C(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function P(e){e._closedPromise=c((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r}))}function R(e,t){P(e),T(e,t)}function T(e,t){void 0!==e._closedPromise_reject&&(m(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0)}function E(e){void 0!==e._closedPromise_resolve&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0)}var O=t("[[AbortSteps]]"),F=t("[[ErrorSteps]]"),L=t("[[CancelSteps]]"),I=t("[[PullSteps]]"),M=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)},j=Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)}
function D(e,t){if(void 0!==e&&"object"!=typeof(r=e)&&"function"!=typeof r)throw new TypeError(t+" is not an object.")
var r}function N(e,t){if("function"!=typeof e)throw new TypeError(t+" is not a function.")}function q(e,t){if(!function(e){return"object"==typeof e&&null!==e||"function"==typeof e}(e))throw new TypeError(t+" is not an object.")}function U(e,t,r){if(void 0===e)throw new TypeError("Parameter "+t+" is required in '"+r+"'.")}function W(e,t,r){if(void 0===e)throw new TypeError(t+" is required in '"+r+"'.")}function B(e){return Number(e)}function G(e){return 0===e?0:e}function z(e,t){var r=Number.MAX_SAFE_INTEGER,n=Number(e)
if(n=G(n),!M(n))throw new TypeError(t+" is not a finite number")
if((n=function(e){return G(j(e))}(n))<0||n>r)throw new TypeError(t+" is outside the accepted range of 0 to "+r+", inclusive")
return M(n)&&0!==n?n:0}function H(e,t){if(!sr(e))throw new TypeError(t+" is not a ReadableStream.")}function V(e){return new Z(e)}function Y(e,t){e._reader._readRequests.push(t)}function X(e,t,r){var n=e._reader._readRequests.shift()
r?n._closeSteps():n._chunkSteps(t)}function Q(e){return e._reader._readRequests.length}function K(e){var t=e._reader
return void 0!==t&&!!ee(t)}var J,$,Z=function(){function e(e){if(U(e,1,"ReadableStreamDefaultReader"),H(e,"First parameter"),ur(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
w(this,e),this._readRequests=new S}return Object.defineProperty(e.prototype,"closed",{get:function(){return ee(this)?this._closedPromise:f(re("closed"))},enumerable:!1,configurable:!0}),e.prototype.cancel=function(e){return void 0===e&&(e=void 0),ee(this)?void 0===this._ownerReadableStream?f(C("cancel")):k(this,e):f(re("cancel"))},e.prototype.read=function(){if(!ee(this))return f(re("read"))
if(void 0===this._ownerReadableStream)return f(C("read from"))
var e,t,r=c((function(r,n){e=r,t=n}))
return te(this,{_chunkSteps:function(t){return e({value:t,done:!1})},_closeSteps:function(){return e({value:void 0,done:!0})},_errorSteps:function(e){return t(e)}}),r},e.prototype.releaseLock=function(){if(!ee(this))throw re("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
x(this)}},e}()
function ee(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function te(e,t){var r=e._ownerReadableStream
r._disturbed=!0,"closed"===r._state?t._closeSteps():"errored"===r._state?t._errorSteps(r._storedError):r._readableStreamController[I](t)}function re(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}Object.defineProperties(Z.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Z.prototype,t.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0}),"symbol"==typeof t.asyncIterator&&((J={})[t.asyncIterator]=function(){return this},$=J,Object.defineProperty($,t.asyncIterator,{enumerable:!1}))
var ne=function(){function e(e,t){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=e,this._preventCancel=t}return e.prototype.next=function(){var e=this,t=function(){return e._nextSteps()}
return this._ongoingPromise=this._ongoingPromise?y(this._ongoingPromise,t,t):t(),this._ongoingPromise},e.prototype.return=function(e){var t=this,r=function(){return t._returnSteps(e)}
return this._ongoingPromise?y(this._ongoingPromise,r,r):r()},e.prototype._nextSteps=function(){var e=this
if(this._isFinished)return Promise.resolve({value:void 0,done:!0})
var t,r,n=this._reader
if(void 0===n._ownerReadableStream)return f(C("iterate"))
var a=c((function(e,n){t=e,r=n}))
return te(n,{_chunkSteps:function(r){e._ongoingPromise=void 0,b((function(){return t({value:r,done:!1})}))},_closeSteps:function(){e._ongoingPromise=void 0,e._isFinished=!0,x(n),t({value:void 0,done:!0})},_errorSteps:function(t){e._ongoingPromise=void 0,e._isFinished=!0,x(n),r(t)}}),a},e.prototype._returnSteps=function(e){if(this._isFinished)return Promise.resolve({value:e,done:!0})
this._isFinished=!0
var t=this._reader
if(void 0===t._ownerReadableStream)return f(C("finish iterating"))
if(!this._preventCancel){var r=k(t,e)
return x(t),y(r,(function(){return{value:e,done:!0}}))}return x(t),h({value:e,done:!0})},e}(),ae={next:function(){return ie(this)?this._asyncIteratorImpl.next():f(oe("next"))},return:function(e){return ie(this)?this._asyncIteratorImpl.return(e):f(oe("return"))}}
function ie(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorImpl")}function oe(e){return new TypeError("ReadableStreamAsyncIterator."+e+" can only be used on a ReadableSteamAsyncIterator")}void 0!==$&&Object.setPrototypeOf(ae,$)
var se=Number.isNaN||function(e){return e!=e}
function ue(e){return!!function(e){return"number"==typeof e&&(!se(e)&&!(e<0))}(e)&&e!==1/0}function le(e){var t=e._queue.shift()
return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function ce(e,t,r){if(!ue(r=Number(r)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function he(e){e._queue=new S,e._queueTotalSize=0}function fe(e){return e.slice()}var de=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"view",{get:function(){if(!ge(this))throw Fe("view")
return this._view},enumerable:!1,configurable:!0}),e.prototype.respond=function(e){if(!ge(this))throw Fe("respond")
if(U(e,1,"respond"),e=z(e,"First parameter"),void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
this._view.buffer,function(e,t){if(!ue(t=Number(t)))throw new RangeError("bytesWritten must be a finite")
Ce(e,t)}(this._associatedReadableByteStreamController,e)},e.prototype.respondWithNewView=function(e){if(!ge(this))throw Fe("respondWithNewView")
if(U(e,1,"respondWithNewView"),!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views")
if(0===e.byteLength)throw new TypeError("chunk must have non-zero byteLength")
if(0===e.buffer.byteLength)throw new TypeError("chunk's buffer must have non-zero byteLength")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");(function(e,t){var r=e._pendingPullIntos.peek()
if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
r.buffer=t.buffer,Ce(e,t.byteLength)})(this._associatedReadableByteStreamController,e)},e}()
Object.defineProperties(de.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(de.prototype,t.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0})
var pe=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"byobRequest",{get:function(){if(!ve(this))throw Le("byobRequest")
if(null===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos.peek(),t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled),r=Object.create(de.prototype);(function(e,t,r){e._associatedReadableByteStreamController=t,e._view=r})(r,this,t),this._byobRequest=r}return this._byobRequest},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!ve(this))throw Le("desiredSize")
return Ee(this)},enumerable:!1,configurable:!0}),e.prototype.close=function(){if(!ve(this))throw Le("close")
if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableByteStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed");(function(e){var t=e._controlledReadableByteStream
if(!e._closeRequested&&"readable"===t._state)if(e._queueTotalSize>0)e._closeRequested=!0
else{if(e._pendingPullIntos.length>0&&e._pendingPullIntos.peek().bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer")
throw Te(e,r),r}Re(e),cr(t)}})(this)},e.prototype.enqueue=function(e){if(!ve(this))throw Le("enqueue")
if(U(e,1,"enqueue"),!ArrayBuffer.isView(e))throw new TypeError("chunk must be an array buffer view")
if(0===e.byteLength)throw new TypeError("chunk must have non-zero byteLength")
if(0===e.buffer.byteLength)throw new TypeError("chunk's buffer must have non-zero byteLength")
if(this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableByteStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to");(function(e,t){var r=e._controlledReadableByteStream
if(!e._closeRequested&&"readable"===r._state){var n=t.buffer,a=t.byteOffset,i=t.byteLength,o=n
K(r)?0===Q(r)?_e(e,o,a,i):X(r,new Uint8Array(o,a,i),!1):je(r)?(_e(e,o,a,i),xe(e)):_e(e,o,a,i),ye(e)}})(this,e)},e.prototype.error=function(e){if(void 0===e&&(e=void 0),!ve(this))throw Le("error")
Te(this,e)},e.prototype[L]=function(e){this._pendingPullIntos.length>0&&(this._pendingPullIntos.peek().bytesFilled=0),he(this)
var t=this._cancelAlgorithm(e)
return Re(this),t},e.prototype[I]=function(e){var t=this._controlledReadableByteStream
if(this._queueTotalSize>0){var r=this._queue.shift()
this._queueTotalSize-=r.byteLength,we(this)
var n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength)
e._chunkSteps(n)}else{var a=this._autoAllocateChunkSize
if(void 0!==a){var i=void 0
try{i=new ArrayBuffer(a)}catch(s){return void e._errorSteps(s)}var o={buffer:i,byteOffset:0,byteLength:a,bytesFilled:0,elementSize:1,viewConstructor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(o)}Y(t,e),ye(this)}},e}()
function ve(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")}function ge(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function ye(e){(function(e){var t=e._controlledReadableByteStream
return"readable"===t._state&&(!e._closeRequested&&(!!e._started&&(!!(K(t)&&Q(t)>0)||(!!(je(t)&&Me(t)>0)||Ee(e)>0))))})(e)&&(e._pulling?e._pullAgain=!0:(e._pulling=!0,p(e._pullAlgorithm(),(function(){e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,ye(e))}),(function(t){Te(e,t)}))))}function me(e,t){var r=!1
"closed"===e._state&&(r=!0)
var n=be(t)
"default"===t.readerType?X(e,n,r):function(e,t,r){var n=e._reader._readIntoRequests.shift()
r?n._closeSteps(t):n._chunkSteps(t)}(e,n,r)}function be(e){var t=e.bytesFilled,r=e.elementSize
return new e.viewConstructor(e.buffer,e.byteOffset,t/r)}function _e(e,t,r,n){e._queue.push({buffer:t,byteOffset:r,byteLength:n}),e._queueTotalSize+=n}function Ae(e,t){var r=t.elementSize,n=t.bytesFilled-t.bytesFilled%r,a=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),i=t.bytesFilled+a,o=i-i%r,s=a,u=!1
o>n&&(s=o-t.bytesFilled,u=!0)
for(var l,c,h,f,d,p=e._queue;s>0;){var v=p.peek(),g=Math.min(s,v.byteLength),y=t.byteOffset+t.bytesFilled
l=t.buffer,c=y,h=v.buffer,f=v.byteOffset,d=g,new Uint8Array(l).set(new Uint8Array(h,f,d),c),v.byteLength===g?p.shift():(v.byteOffset+=g,v.byteLength-=g),e._queueTotalSize-=g,Se(e,g,t),s-=g}return u}function Se(e,t,r){ke(e),r.bytesFilled+=t}function we(e){0===e._queueTotalSize&&e._closeRequested?(Re(e),cr(e._controlledReadableByteStream)):ye(e)}function ke(e){null!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=null,e._byobRequest=null)}function xe(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return
var t=e._pendingPullIntos.peek()
Ae(e,t)&&(Pe(e),me(e._controlledReadableByteStream,t))}}function Ce(e,t){var r=e._pendingPullIntos.peek()
if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");(function(e,t){t.buffer=t.buffer
var r=e._controlledReadableByteStream
if(je(r))for(;Me(r)>0;)me(r,Pe(e))})(e,r)}else(function(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")
if(Se(e,t,r),!(r.bytesFilled<r.elementSize)){Pe(e)
var n=r.bytesFilled%r.elementSize
if(n>0){var a=r.byteOffset+r.bytesFilled,i=r.buffer.slice(a-n,a)
_e(e,i,0,i.byteLength)}r.buffer=r.buffer,r.bytesFilled-=n,me(e._controlledReadableByteStream,r),xe(e)}})(e,t,r)
ye(e)}function Pe(e){var t=e._pendingPullIntos.shift()
return ke(e),t}function Re(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function Te(e,t){var r=e._controlledReadableByteStream
"readable"===r._state&&(function(e){ke(e),e._pendingPullIntos=new S}(e),he(e),Re(e),hr(r,t))}function Ee(e){var t=e._controlledReadableByteStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Oe(e,t,r){var n=Object.create(pe.prototype),a=function(){},i=function(){return h(void 0)},o=function(){return h(void 0)}
void 0!==t.start&&(a=function(){return t.start(n)}),void 0!==t.pull&&(i=function(){return t.pull(n)}),void 0!==t.cancel&&(o=function(e){return t.cancel(e)})
var s=t.autoAllocateChunkSize;(function(e,t,r,n,a,i,o){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=null,t._queue=t._queueTotalSize=void 0,he(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=i,t._pullAlgorithm=n,t._cancelAlgorithm=a,t._autoAllocateChunkSize=o,t._pendingPullIntos=new S,e._readableStreamController=t,p(h(r()),(function(){t._started=!0,ye(t)}),(function(e){Te(t,e)}))})(e,n,a,i,o,r,s)}function Fe(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function Le(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function Ie(e,t){e._reader._readIntoRequests.push(t)}function Me(e){return e._reader._readIntoRequests.length}function je(e){var t=e._reader
return void 0!==t&&!!Ne(t)}Object.defineProperties(pe.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(pe.prototype,t.toStringTag,{value:"ReadableByteStreamController",configurable:!0})
var De=function(){function e(e){if(U(e,1,"ReadableStreamBYOBReader"),H(e,"First parameter"),ur(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
if(!ve(e._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
w(this,e),this._readIntoRequests=new S}return Object.defineProperty(e.prototype,"closed",{get:function(){return Ne(this)?this._closedPromise:f(qe("closed"))},enumerable:!1,configurable:!0}),e.prototype.cancel=function(e){return void 0===e&&(e=void 0),Ne(this)?void 0===this._ownerReadableStream?f(C("cancel")):k(this,e):f(qe("cancel"))},e.prototype.read=function(e){if(!Ne(this))return f(qe("read"))
if(!ArrayBuffer.isView(e))return f(new TypeError("view must be an array buffer view"))
if(0===e.byteLength)return f(new TypeError("view must have non-zero byteLength"))
if(0===e.buffer.byteLength)return f(new TypeError("view's buffer must have non-zero byteLength"))
if(void 0===this._ownerReadableStream)return f(C("read from"))
var t,r,n=c((function(e,n){t=e,r=n}))
return function(e,t,r){var n=e._ownerReadableStream
n._disturbed=!0,"errored"===n._state?r._errorSteps(n._storedError):function(e,t,r){var n=e._controlledReadableByteStream,a=1
t.constructor!==DataView&&(a=t.constructor.BYTES_PER_ELEMENT)
var i=t.constructor,o={buffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:a,viewConstructor:i,readerType:"byob"}
if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(o),void Ie(n,r)
if("closed"!==n._state){if(e._queueTotalSize>0){if(Ae(e,o)){var s=be(o)
return we(e),void r._chunkSteps(s)}if(e._closeRequested){var u=new TypeError("Insufficient bytes to fill elements in the given buffer")
return Te(e,u),void r._errorSteps(u)}}e._pendingPullIntos.push(o),Ie(n,r),ye(e)}else{var l=new i(o.buffer,o.byteOffset,0)
r._closeSteps(l)}}(n._readableStreamController,t,r)}(this,e,{_chunkSteps:function(e){return t({value:e,done:!1})},_closeSteps:function(e){return t({value:e,done:!0})},_errorSteps:function(e){return r(e)}}),n},e.prototype.releaseLock=function(){if(!Ne(this))throw qe("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
x(this)}},e}()
function Ne(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function qe(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}function Ue(e,t){var r=e.highWaterMark
if(void 0===r)return t
if(se(r)||r<0)throw new RangeError("Invalid highWaterMark")
return r}function We(e){var t=e.size
return t||function(){return 1}}function Be(e,t){D(e,t)
var r=null==e?void 0:e.highWaterMark,n=null==e?void 0:e.size
return{highWaterMark:void 0===r?void 0:B(r),size:void 0===n?void 0:Ge(n,t+" has member 'size' that")}}function Ge(e,t){return N(e,t),function(t){return B(e(t))}}function ze(e,t,r){return N(e,r),function(r){return A(e,t,[r])}}function He(e,t,r){return N(e,r),function(){return A(e,t,[])}}function Ve(e,t,r){return N(e,r),function(r){return _(e,t,[r])}}function Ye(e,t,r){return N(e,r),function(r,n){return A(e,t,[r,n])}}function Xe(e,t){if(!$e(e))throw new TypeError(t+" is not a WritableStream.")}Object.defineProperties(De.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(De.prototype,t.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0})
var Qe=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),void 0===e?e=null:q(e,"First parameter")
var r=Be(t,"Second parameter"),n=function(e,t){D(e,t)
var r=null==e?void 0:e.abort,n=null==e?void 0:e.close,a=null==e?void 0:e.start,i=null==e?void 0:e.type,o=null==e?void 0:e.write
return{abort:void 0===r?void 0:ze(r,e,t+" has member 'abort' that"),close:void 0===n?void 0:He(n,e,t+" has member 'close' that"),start:void 0===a?void 0:Ve(a,e,t+" has member 'start' that"),write:void 0===o?void 0:Ye(o,e,t+" has member 'write' that"),type:i}}(e,"First parameter")
if(Je(this),void 0!==n.type)throw new RangeError("Invalid type is specified")
var a=We(r);(function(e,t,r,n){var a=Object.create(gt.prototype),i=function(){},o=function(){return h(void 0)},s=function(){return h(void 0)},u=function(){return h(void 0)}
void 0!==t.start&&(i=function(){return t.start(a)}),void 0!==t.write&&(o=function(e){return t.write(e,a)}),void 0!==t.close&&(s=function(){return t.close()}),void 0!==t.abort&&(u=function(e){return t.abort(e)}),yt(e,a,i,o,s,u,r,n)})(this,n,Ue(r,1),a)}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!$e(this))throw kt("locked")
return Ze(this)},enumerable:!1,configurable:!0}),e.prototype.abort=function(e){return void 0===e&&(e=void 0),$e(this)?Ze(this)?f(new TypeError("Cannot abort a stream that already has a writer")):et(this,e):f(kt("abort"))},e.prototype.close=function(){return $e(this)?Ze(this)?f(new TypeError("Cannot close a stream that already has a writer")):it(this)?f(new TypeError("Cannot close an already-closing stream")):tt(this):f(kt("close"))},e.prototype.getWriter=function(){if(!$e(this))throw kt("getWriter")
return Ke(this)},e}()
function Ke(e){return new ut(e)}function Je(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new S,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function $e(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function Ze(e){return void 0!==e._writer}function et(e,t){var r=e._state
if("closed"===r||"errored"===r)return h(void 0)
if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise
var n=!1
"erroring"===r&&(n=!0,t=void 0)
var a=c((function(r,a){e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:a,_reason:t,_wasAlreadyErroring:n}}))
return e._pendingAbortRequest._promise=a,n||nt(e,t),a}function tt(e){var t=e._state
if("closed"===t||"errored"===t)return f(new TypeError("The stream (in "+t+" state) is not in the writable state and cannot be closed"))
var r,n=c((function(t,r){var n={_resolve:t,_reject:r}
e._closeRequest=n})),a=e._writer
return void 0!==a&&e._backpressure&&"writable"===t&&Mt(a),ce(r=e._writableStreamController,vt,0),_t(r),n}function rt(e,t){"writable"!==e._state?at(e):nt(e,t)}function nt(e,t){var r=e._writableStreamController
e._state="erroring",e._storedError=t
var n=e._writer
void 0!==n&&ft(n,t),!function(e){return void 0!==e._inFlightWriteRequest||void 0!==e._inFlightCloseRequest}(e)&&r._started&&at(e)}function at(e){e._state="errored",e._writableStreamController[F]()
var t=e._storedError
if(e._writeRequests.forEach((function(e){e._reject(t)})),e._writeRequests=new S,void 0!==e._pendingAbortRequest){var r=e._pendingAbortRequest
if(e._pendingAbortRequest=void 0,r._wasAlreadyErroring)return r._reject(t),void ot(e)
p(e._writableStreamController[O](r._reason),(function(){r._resolve(),ot(e)}),(function(t){r._reject(t),ot(e)}))}else ot(e)}function it(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function ot(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0)
var t=e._writer
void 0!==t&&Tt(t,e._storedError)}function st(e,t){var r=e._writer
void 0!==r&&t!==e._backpressure&&(t?function(e){Ot(e)}(r):Mt(r)),e._backpressure=t}Object.defineProperties(Qe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Qe.prototype,t.toStringTag,{value:"WritableStream",configurable:!0})
var ut=function(){function e(e){if(U(e,1,"WritableStreamDefaultWriter"),Xe(e,"First parameter"),Ze(e))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=e,e._writer=this
var t,r=e._state
if("writable"===r)!it(e)&&e._backpressure?Ot(this):Lt(this),Pt(this)
else if("erroring"===r)Ft(this,e._storedError),Pt(this)
else if("closed"===r)Lt(this),Pt(t=this),Et(t)
else{var n=e._storedError
Ft(this,n),Rt(this,n)}}return Object.defineProperty(e.prototype,"closed",{get:function(){return lt(this)?this._closedPromise:f(xt("closed"))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!lt(this))throw xt("desiredSize")
if(void 0===this._ownerWritableStream)throw Ct("desiredSize")
return e=this._ownerWritableStream,"errored"===(t=e._state)||"erroring"===t?null:"closed"===t?0:bt(e._writableStreamController)
var e,t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return lt(this)?this._readyPromise:f(xt("ready"))},enumerable:!1,configurable:!0}),e.prototype.abort=function(e){return void 0===e&&(e=void 0),lt(this)?void 0===this._ownerWritableStream?f(Ct("abort")):function(e,t){return et(e._ownerWritableStream,t)}(this,e):f(xt("abort"))},e.prototype.close=function(){if(!lt(this))return f(xt("close"))
var e=this._ownerWritableStream
return void 0===e?f(Ct("close")):it(e)?f(new TypeError("Cannot close an already-closing stream")):ct(this)},e.prototype.releaseLock=function(){if(!lt(this))throw xt("releaseLock")
void 0!==this._ownerWritableStream&&dt(this)},e.prototype.write=function(e){return void 0===e&&(e=void 0),lt(this)?void 0===this._ownerWritableStream?f(Ct("write to")):pt(this,e):f(xt("write"))},e}()
function lt(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function ct(e){return tt(e._ownerWritableStream)}function ht(e,t){"pending"===e._closedPromiseState?Tt(e,t):function(e,t){Rt(e,t)}(e,t)}function ft(e,t){"pending"===e._readyPromiseState?It(e,t):function(e,t){Ft(e,t)}(e,t)}function dt(e){var t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
ft(e,r),ht(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function pt(e,t){var r=e._ownerWritableStream,n=r._writableStreamController,a=function(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return At(e,r),1}}(n,t)
if(r!==e._ownerWritableStream)return f(Ct("write to"))
var i=r._state
if("errored"===i)return f(r._storedError)
if(it(r)||"closed"===i)return f(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===i)return f(r._storedError)
var o=function(e){return c((function(t,r){var n={_resolve:t,_reject:r}
e._writeRequests.push(n)}))}(r)
return function(e,t,r){try{ce(e,t,r)}catch(a){return void At(e,a)}var n=e._controlledWritableStream
it(n)||"writable"!==n._state||st(n,St(e)),_t(e)}(n,t,a),o}Object.defineProperties(ut.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(ut.prototype,t.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0})
var vt={},gt=function(){function e(){throw new TypeError("Illegal constructor")}return e.prototype.error=function(e){if(void 0===e&&(e=void 0),!a(t=this)||!Object.prototype.hasOwnProperty.call(t,"_controlledWritableStream"))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
var t
"writable"===this._controlledWritableStream._state&&wt(this,e)},e.prototype[O]=function(e){var t=this._abortAlgorithm(e)
return mt(this),t},e.prototype[F]=function(){he(this)},e}()
function yt(e,t,r,n,a,i,o,s){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,he(t),t._started=!1,t._strategySizeAlgorithm=s,t._strategyHWM=o,t._writeAlgorithm=n,t._closeAlgorithm=a,t._abortAlgorithm=i
var u=St(t)
st(e,u),p(h(r()),(function(){t._started=!0,_t(t)}),(function(r){t._started=!0,rt(e,r)}))}function mt(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function bt(e){return e._strategyHWM-e._queueTotalSize}function _t(e){var t=e._controlledWritableStream
if(e._started&&void 0===t._inFlightWriteRequest)if("erroring"!==t._state){if(0!==e._queue.length){var r=e._queue.peek().value
r===vt?function(e){var t=e._controlledWritableStream;(function(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0})(t),le(e)
var r=e._closeAlgorithm()
mt(e),p(r,(function(){(function(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,"erroring"===e._state&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed"
var t=e._writer
void 0!==t&&Et(t)})(t)}),(function(e){(function(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),rt(e,t)})(t,e)}))}(e):function(e,t){var r=e._controlledWritableStream;(function(e){e._inFlightWriteRequest=e._writeRequests.shift()})(r),p(e._writeAlgorithm(t),(function(){(function(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0})(r)
var t=r._state
if(le(e),!it(r)&&"writable"===t){var n=St(e)
st(r,n)}_t(e)}),(function(t){"writable"===r._state&&mt(e),function(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,rt(e,t)}(r,t)}))}(e,r)}}else at(t)}function At(e,t){"writable"===e._controlledWritableStream._state&&wt(e,t)}function St(e){return bt(e)<=0}function wt(e,t){var r=e._controlledWritableStream
mt(e),nt(r,t)}function kt(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function xt(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function Ct(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function Pt(e){e._closedPromise=c((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"}))}function Rt(e,t){Pt(e),Tt(e,t)}function Tt(e,t){void 0!==e._closedPromise_reject&&(m(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected")}function Et(e){void 0!==e._closedPromise_resolve&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved")}function Ot(e){e._readyPromise=c((function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r})),e._readyPromiseState="pending"}function Ft(e,t){Ot(e),It(e,t)}function Lt(e){Ot(e),Mt(e)}function It(e,t){void 0!==e._readyPromise_reject&&(m(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected")}function Mt(e){void 0!==e._readyPromise_resolve&&(e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled")}Object.defineProperties(gt.prototype,{error:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(gt.prototype,t.toStringTag,{value:"WritableStreamDefaultController",configurable:!0})
var jt,Dt="undefined"!=typeof DOMException?DOMException:void 0,Nt=function(e){if("function"!=typeof e&&"object"!=typeof e)return!1
try{return new e,!0}catch(J){return!1}}(Dt)?Dt:((jt=function(e,t){this.message=e||"",this.name=t||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}).prototype=Object.create(Error.prototype),Object.defineProperty(jt.prototype,"constructor",{value:jt,writable:!0,configurable:!0}),jt)
function qt(e,t,n,a,i,o){var s=V(e),u=Ke(t)
e._disturbed=!0
var l=!1,y=h(void 0)
return c((function(b,_){var A,S,w,k
if(void 0!==o){if(A=function(){var r=new Nt("Aborted","AbortError"),n=[]
a||n.push((function(){return"writable"===t._state?et(t,r):h(void 0)})),i||n.push((function(){return"readable"===e._state?lr(e,r):h(void 0)})),T((function(){return Promise.all(n.map((function(e){return e()})))}),!0,r)},o.aborted)return void A()
o.addEventListener("abort",A)}if(R(e,s._closedPromise,(function(e){a?E(!0,e):T((function(){return et(t,e)}),!0,e)})),R(t,u._closedPromise,(function(t){i?E(!0,t):T((function(){return lr(e,t)}),!0,t)})),S=e,w=s._closedPromise,k=function(){n?E():T((function(){return function(e){var t=e._ownerWritableStream,r=t._state
return it(t)||"closed"===r?h(void 0):"errored"===r?f(t._storedError):ct(e)}(u)}))},"closed"===S._state?k():v(w,k),it(t)||"closed"===t._state){var C=new TypeError("the destination writable stream closed before all data could be piped to it")
i?E(!0,C):T((function(){return lr(e,C)}),!0,C)}function P(){var e=y
return d(y,(function(){return e!==y?P():void 0}))}function R(e,t,r){"errored"===e._state?r(e._storedError):g(t,r)}function T(e,r,n){function a(){p(e(),(function(){return O(r,n)}),(function(e){return O(!0,e)}))}l||(l=!0,"writable"!==t._state||it(t)?a():v(P(),a))}function E(e,r){l||(l=!0,"writable"!==t._state||it(t)?O(e,r):v(P(),(function(){return O(e,r)})))}function O(e,t){dt(u),x(s),void 0!==o&&o.removeEventListener("abort",A),e?_(t):b(void 0)}m(c((function(e,t){(function n(a){a?e():d(l?h(!0):d(u._readyPromise,(function(){return c((function(e,t){te(s,{_chunkSteps:function(t){y=d(pt(u,t),void 0,r),e(!1)},_closeSteps:function(){return e(!0)},_errorSteps:t})}))})),n,t)})(!1)})))}))}var Ut=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!Wt(this))throw Jt("desiredSize")
return Xt(this)},enumerable:!1,configurable:!0}),e.prototype.close=function(){if(!Wt(this))throw Jt("close")
if(!Qt(this))throw new TypeError("The stream is not in a state that permits close")
Ht(this)},e.prototype.enqueue=function(e){if(void 0===e&&(e=void 0),!Wt(this))throw Jt("enqueue")
if(!Qt(this))throw new TypeError("The stream is not in a state that permits enqueue")
return Vt(this,e)},e.prototype.error=function(e){if(void 0===e&&(e=void 0),!Wt(this))throw Jt("error")
Yt(this,e)},e.prototype[L]=function(e){he(this)
var t=this._cancelAlgorithm(e)
return zt(this),t},e.prototype[I]=function(e){var t=this._controlledReadableStream
if(this._queue.length>0){var r=le(this)
this._closeRequested&&0===this._queue.length?(zt(this),cr(t)):Bt(this),e._chunkSteps(r)}else Y(t,e),Bt(this)},e}()
function Wt(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")}function Bt(e){Gt(e)&&(e._pulling?e._pullAgain=!0:(e._pulling=!0,p(e._pullAlgorithm(),(function(){e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,Bt(e))}),(function(t){Yt(e,t)}))))}function Gt(e){var t=e._controlledReadableStream
return!!Qt(e)&&!!e._started&&(!!(ur(t)&&Q(t)>0)||Xt(e)>0)}function zt(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function Ht(e){if(Qt(e)){var t=e._controlledReadableStream
e._closeRequested=!0,0===e._queue.length&&(zt(e),cr(t))}}function Vt(e,t){if(Qt(e)){var r=e._controlledReadableStream
if(ur(r)&&Q(r)>0)X(r,t,!1)
else{var n=void 0
try{n=e._strategySizeAlgorithm(t)}catch(a){throw Yt(e,a),a}try{ce(e,t,n)}catch(i){throw Yt(e,i),i}}Bt(e)}}function Yt(e,t){var r=e._controlledReadableStream
"readable"===r._state&&(he(e),zt(e),hr(r,t))}function Xt(e){var t=e._controlledReadableStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Qt(e){var t=e._controlledReadableStream._state
return!e._closeRequested&&"readable"===t}function Kt(e,t,r,n,a,i,o){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,he(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=o,t._strategyHWM=i,t._pullAlgorithm=n,t._cancelAlgorithm=a,e._readableStreamController=t,p(h(r()),(function(){t._started=!0,Bt(t)}),(function(e){Yt(t,e)}))}function Jt(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}function $t(e,t,r){return N(e,r),function(r){return A(e,t,[r])}}function Zt(e,t,r){return N(e,r),function(r){return A(e,t,[r])}}function er(e,t,r){return N(e,r),function(r){return _(e,t,[r])}}function tr(e,t){if("bytes"!=(e=""+e))throw new TypeError(t+" '"+e+"' is not a valid enumeration value for ReadableStreamType")
return e}function rr(e,t){if("byob"!=(e=""+e))throw new TypeError(t+" '"+e+"' is not a valid enumeration value for ReadableStreamReaderMode")
return e}function nr(e,t){D(e,t)
var r=null==e?void 0:e.preventAbort,n=null==e?void 0:e.preventCancel,a=null==e?void 0:e.preventClose,i=null==e?void 0:e.signal
return void 0!==i&&function(e,t){if(!function(e){if("object"!=typeof e||null===e)return!1
try{return"boolean"==typeof e.aborted}catch(J){return!1}}(e))throw new TypeError(t+" is not an AbortSignal.")}(i,t+" has member 'signal' that"),{preventAbort:Boolean(r),preventCancel:Boolean(n),preventClose:Boolean(a),signal:i}}Object.defineProperties(Ut.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Ut.prototype,t.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0})
var ar=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),void 0===e?e=null:q(e,"First parameter")
var r=Be(t,"Second parameter"),n=function(e,t){D(e,t)
var r=e,n=null==r?void 0:r.autoAllocateChunkSize,a=null==r?void 0:r.cancel,i=null==r?void 0:r.pull,o=null==r?void 0:r.start,s=null==r?void 0:r.type
return{autoAllocateChunkSize:void 0===n?void 0:z(n,t+" has member 'autoAllocateChunkSize' that"),cancel:void 0===a?void 0:$t(a,r,t+" has member 'cancel' that"),pull:void 0===i?void 0:Zt(i,r,t+" has member 'pull' that"),start:void 0===o?void 0:er(o,r,t+" has member 'start' that"),type:void 0===s?void 0:tr(s,t+" has member 'type' that")}}(e,"First parameter")
if(or(this),"bytes"===n.type){if(void 0!==r.size)throw new RangeError("The strategy for a byte stream cannot have a size function")
Oe(this,n,Ue(r,0))}else{var a=We(r);(function(e,t,r,n){var a=Object.create(Ut.prototype),i=function(){},o=function(){return h(void 0)},s=function(){return h(void 0)}
void 0!==t.start&&(i=function(){return t.start(a)}),void 0!==t.pull&&(o=function(){return t.pull(a)}),void 0!==t.cancel&&(s=function(e){return t.cancel(e)}),Kt(e,a,i,o,s,r,n)})(this,n,Ue(r,1),a)}}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!sr(this))throw fr("locked")
return ur(this)},enumerable:!1,configurable:!0}),e.prototype.cancel=function(e){return void 0===e&&(e=void 0),sr(this)?ur(this)?f(new TypeError("Cannot cancel a stream that already has a reader")):lr(this,e):f(fr("cancel"))},e.prototype.getReader=function(e){if(void 0===e&&(e=void 0),!sr(this))throw fr("getReader")
return void 0===function(e,t){D(e,t)
var r=null==e?void 0:e.mode
return{mode:void 0===r?void 0:rr(r,t+" has member 'mode' that")}}(e,"First parameter").mode?V(this):new De(this)},e.prototype.pipeThrough=function(e,t){if(void 0===t&&(t={}),!sr(this))throw fr("pipeThrough")
U(e,1,"pipeThrough")
var r=function(e,t){D(e,t)
var r=null==e?void 0:e.readable
W(r,"readable","ReadableWritablePair"),H(r,t+" has member 'readable' that")
var n=null==e?void 0:e.writable
return W(n,"writable","ReadableWritablePair"),Xe(n,t+" has member 'writable' that"),{readable:r,writable:n}}(e,"First parameter"),n=nr(t,"Second parameter")
if(ur(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream")
if(Ze(r.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream")
return m(qt(this,r.writable,n.preventClose,n.preventAbort,n.preventCancel,n.signal)),r.readable},e.prototype.pipeTo=function(e,t){if(void 0===t&&(t={}),!sr(this))return f(fr("pipeTo"))
if(void 0===e)return f("Parameter 1 is required in 'pipeTo'.")
if(!$e(e))return f(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"))
var r
try{r=nr(t,"Second parameter")}catch(n){return f(n)}return ur(this)?f(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Ze(e)?f(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):qt(this,e,r.preventClose,r.preventAbort,r.preventCancel,r.signal)},e.prototype.tee=function(){if(!sr(this))throw fr("tee")
var e=function(e,t){var r,n,a,i,o,s=V(e),u=!1,l=!1,f=!1,d=c((function(e){o=e}))
function p(){return u||(u=!0,te(s,{_chunkSteps:function(e){b((function(){u=!1
var t=e,r=e
l||Vt(a._readableStreamController,t),f||Vt(i._readableStreamController,r),o(void 0)}))},_closeSteps:function(){u=!1,l||Ht(a._readableStreamController),f||Ht(i._readableStreamController)},_errorSteps:function(){u=!1}})),h(void 0)}function v(){}return a=ir(v,p,(function(t){if(l=!0,r=t,f){var a=fe([r,n]),i=lr(e,a)
o(i)}return d})),i=ir(v,p,(function(t){if(f=!0,n=t,l){var a=fe([r,n]),i=lr(e,a)
o(i)}return d})),g(s._closedPromise,(function(e){Yt(a._readableStreamController,e),Yt(i._readableStreamController,e),o(void 0)})),[a,i]}(this)
return fe(e)},e.prototype.values=function(e){if(void 0===e&&(e=void 0),!sr(this))throw fr("values")
var t,r,n,a,i,o=function(e,t){D(e,t)
var r=null==e?void 0:e.preventCancel
return{preventCancel:Boolean(r)}}(e,"First parameter")
return t=this,r=o.preventCancel,n=V(t),a=new ne(n,r),(i=Object.create(ae))._asyncIteratorImpl=a,i},e}()
function ir(e,t,r,n,a){void 0===n&&(n=1),void 0===a&&(a=function(){return 1})
var i=Object.create(ar.prototype)
return or(i),Kt(i,Object.create(Ut.prototype),e,t,r,n,a),i}function or(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function sr(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function ur(e){return void 0!==e._reader}function lr(e,t){return e._disturbed=!0,"closed"===e._state?h(void 0):"errored"===e._state?f(e._storedError):(cr(e),y(e._readableStreamController[L](t),r))}function cr(e){e._state="closed"
var t=e._reader
void 0!==t&&(ee(t)&&(t._readRequests.forEach((function(e){e._closeSteps()})),t._readRequests=new S),E(t))}function hr(e,t){e._state="errored",e._storedError=t
var r=e._reader
void 0!==r&&(ee(r)?(r._readRequests.forEach((function(e){e._errorSteps(t)})),r._readRequests=new S):(r._readIntoRequests.forEach((function(e){e._errorSteps(t)})),r._readIntoRequests=new S),T(r,t))}function fr(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}function dr(e,t){D(e,t)
var r=null==e?void 0:e.highWaterMark
return W(r,"highWaterMark","QueuingStrategyInit"),{highWaterMark:B(r)}}Object.defineProperties(ar.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(ar.prototype,t.toStringTag,{value:"ReadableStream",configurable:!0}),"symbol"==typeof t.asyncIterator&&Object.defineProperty(ar.prototype,t.asyncIterator,{value:ar.prototype.values,writable:!0,configurable:!0})
var pr=function(e){return e.byteLength},vr=function(){function e(e){U(e,1,"ByteLengthQueuingStrategy"),e=dr(e,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=e.highWaterMark}return Object.defineProperty(e.prototype,"highWaterMark",{get:function(){if(!yr(this))throw gr("highWaterMark")
return this._byteLengthQueuingStrategyHighWaterMark},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){if(!yr(this))throw gr("size")
return pr},enumerable:!1,configurable:!0}),e}()
function gr(e){return new TypeError("ByteLengthQueuingStrategy.prototype."+e+" can only be used on a ByteLengthQueuingStrategy")}function yr(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_byteLengthQueuingStrategyHighWaterMark")}Object.defineProperties(vr.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(vr.prototype,t.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0})
var mr=function(){return 1},br=function(){function e(e){U(e,1,"CountQueuingStrategy"),e=dr(e,"First parameter"),this._countQueuingStrategyHighWaterMark=e.highWaterMark}return Object.defineProperty(e.prototype,"highWaterMark",{get:function(){if(!Ar(this))throw _r("highWaterMark")
return this._countQueuingStrategyHighWaterMark},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){if(!Ar(this))throw _r("size")
return mr},enumerable:!1,configurable:!0}),e}()
function _r(e){return new TypeError("CountQueuingStrategy.prototype."+e+" can only be used on a CountQueuingStrategy")}function Ar(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_countQueuingStrategyHighWaterMark")}function Sr(e,t,r){return N(e,r),function(r){return A(e,t,[r])}}function wr(e,t,r){return N(e,r),function(r){return _(e,t,[r])}}function kr(e,t,r){return N(e,r),function(r,n){return A(e,t,[r,n])}}Object.defineProperties(br.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(br.prototype,t.toStringTag,{value:"CountQueuingStrategy",configurable:!0})
var xr=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t={}),void 0===r&&(r={}),void 0===e&&(e=null)
var n=Be(t,"Second parameter"),a=Be(r,"Third parameter"),i=function(e,t){D(e,t)
var r=null==e?void 0:e.flush,n=null==e?void 0:e.readableType,a=null==e?void 0:e.start,i=null==e?void 0:e.transform,o=null==e?void 0:e.writableType
return{flush:void 0===r?void 0:Sr(r,e,t+" has member 'flush' that"),readableType:n,start:void 0===a?void 0:wr(a,e,t+" has member 'start' that"),transform:void 0===i?void 0:kr(i,e,t+" has member 'transform' that"),writableType:o}}(e,"First parameter")
if(void 0!==i.readableType)throw new RangeError("Invalid readableType specified")
if(void 0!==i.writableType)throw new RangeError("Invalid writableType specified")
var o,s=Ue(a,0),u=We(a),l=Ue(n,1),d=We(n);(function(e,t,r,n,a,i){function o(){return t}function s(t){return function(e,t){var r=e._transformStreamController
return e._backpressure?y(e._backpressureChangePromise,(function(){var n=e._writable
if("erroring"===n._state)throw n._storedError
return Ir(r,t)})):Ir(r,t)}(e,t)}function u(t){return function(e,t){return Pr(e,t),h(void 0)}(e,t)}function l(){return function(e){var t=e._readable,r=e._transformStreamController,n=r._flushAlgorithm()
return Fr(r),y(n,(function(){if("errored"===t._state)throw t._storedError
Ht(t._readableStreamController)}),(function(r){throw Pr(e,r),t._storedError}))}(e)}function c(){return function(e){return Tr(e,!1),e._backpressureChangePromise}(e)}function f(t){return Rr(e,t),h(void 0)}e._writable=function(e,t,r,n,a,i){void 0===a&&(a=1),void 0===i&&(i=function(){return 1})
var o=Object.create(Qe.prototype)
return Je(o),yt(o,Object.create(gt.prototype),e,t,r,n,a,i),o}(o,s,l,u,r,n),e._readable=ir(o,c,f,a,i),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,Tr(e,!0),e._transformStreamController=void 0})(this,c((function(e){o=e})),l,d,s,u),function(e,t){var r=Object.create(Er.prototype),n=function(e){try{return Lr(r,e),h(void 0)}catch(t){return f(t)}},a=function(){return h(void 0)}
void 0!==t.transform&&(n=function(e){return t.transform(e,r)}),void 0!==t.flush&&(a=function(){return t.flush(r)}),function(e,t,r,n){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=n}(e,r,n,a)}(this,i),void 0!==i.start?o(i.start(this._transformStreamController)):o(void 0)}return Object.defineProperty(e.prototype,"readable",{get:function(){if(!Cr(this))throw jr("readable")
return this._readable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"writable",{get:function(){if(!Cr(this))throw jr("writable")
return this._writable},enumerable:!1,configurable:!0}),e}()
function Cr(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function Pr(e,t){Yt(e._readable._readableStreamController,t),Rr(e,t)}function Rr(e,t){Fr(e._transformStreamController),At(e._writable._writableStreamController,t),e._backpressure&&Tr(e,!1)}function Tr(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=c((function(t){e._backpressureChangePromise_resolve=t})),e._backpressure=t}Object.defineProperties(xr.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(xr.prototype,t.toStringTag,{value:"TransformStream",configurable:!0})
var Er=function(){function e(){throw new TypeError("Illegal constructor")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!Or(this))throw Mr("desiredSize")
return Xt(this._controlledTransformStream._readable._readableStreamController)},enumerable:!1,configurable:!0}),e.prototype.enqueue=function(e){if(void 0===e&&(e=void 0),!Or(this))throw Mr("enqueue")
Lr(this,e)},e.prototype.error=function(e){if(void 0===e&&(e=void 0),!Or(this))throw Mr("error")
var t
t=e,Pr(this._controlledTransformStream,t)},e.prototype.terminate=function(){if(!Or(this))throw Mr("terminate");(function(e){var t=e._controlledTransformStream
Ht(t._readable._readableStreamController)
var r=new TypeError("TransformStream terminated")
Rr(t,r)})(this)},e}()
function Or(e){return!!a(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function Fr(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function Lr(e,t){var r=e._controlledTransformStream,n=r._readable._readableStreamController
if(!Qt(n))throw new TypeError("Readable side is not in a state that permits enqueue")
try{Vt(n,t)}catch(a){throw Rr(r,a),r._readable._storedError}(function(e){return!Gt(e)})(n)!==r._backpressure&&Tr(r,!0)}function Ir(e,t){return y(e._transformAlgorithm(t),void 0,(function(t){throw Pr(e._controlledTransformStream,t),t}))}function Mr(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function jr(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}Object.defineProperties(Er.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),"symbol"==typeof t.toStringTag&&Object.defineProperty(Er.prototype,t.toStringTag,{value:"TransformStreamDefaultController",configurable:!0}),e.ByteLengthQueuingStrategy=vr,e.CountQueuingStrategy=br,e.ReadableByteStreamController=pe,e.ReadableStream=ar,e.ReadableStreamBYOBReader=De,e.ReadableStreamBYOBRequest=de,e.ReadableStreamDefaultController=Ut,e.ReadableStreamDefaultReader=Z,e.TransformStream=xr,e.TransformStreamDefaultController=Er,e.WritableStream=Qe,e.WritableStreamDefaultController=gt,e.WritableStreamDefaultWriter=ut,Object.defineProperty(e,"__esModule",{value:!0})})(t)},(e,t,r)=>{r(123)
var n=r(127)
e.exports=n("String","padStart")},(e,t,r)=>{"use strict"
var n=r(9),a=r(124).start
n({target:"String",proto:!0,forced:r(126)},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},(e,t,r)=>{var n=r(46),a=r(125),i=r(19),o=Math.ceil,s=function(e){return function(t,r,s){var u,l,c=String(i(t)),h=c.length,f=void 0===s?" ":String(s),d=n(r)
return d<=h||""==f?c:(u=d-h,(l=a.call(f,o(u/f.length))).length>u&&(l=l.slice(0,u)),e?c+l:l+c)}}
e.exports={start:s(!1),end:s(!0)}},(e,t,r)=>{"use strict"
var n=r(47),a=r(19)
e.exports="".repeat||function(e){var t=String(a(this)),r="",i=n(e)
if(i<0||i==1/0)throw RangeError("Wrong number of repetitions")
for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t)
return r}},(e,t,r)=>{var n=r(95)
e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},(e,t,r)=>{var n=r(10),a=r(75),i=Function.call
e.exports=function(e,t,r){return a(i,n[e].prototype[t],r)}},(e,t,r)=>{r(129)
var n=r(127)
e.exports=n("String","padEnd")},(e,t,r)=>{"use strict"
var n=r(9),a=r(124).end
n({target:"String",proto:!0,forced:r(126)},{padEnd:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},(e,t,r)=>{r(131)
var n=r(42)
e.exports=n.Object.values},(e,t,r)=>{var n=r(9),a=r(132).values
n({target:"Object",stat:!0},{values:function(e){return a(e)}})},(e,t,r)=>{var n=r(12),a=r(60),i=r(16),o=r(14).f,s=function(e){return function(t){for(var r,s=i(t),u=a(s),l=u.length,c=0,h=[];l>c;)r=u[c++],n&&!o.call(s,r)||h.push(e?[r,s[r]]:s[r])
return h}}
e.exports={entries:s(!0),values:s(!1)}},(e,t,r)=>{r(134)
var n=r(42)
e.exports=n.Object.entries},(e,t,r)=>{var n=r(9),a=r(132).entries
n({target:"Object",stat:!0},{entries:function(e){return a(e)}})},(__unused_webpack_module,exports,__w_pdfjs_require__)=>{"use strict"
Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDocument=getDocument,exports.setPDFNetworkStreamFactory=setPDFNetworkStreamFactory,exports.version=exports.PDFWorker=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFDataRangeTransport=exports.LoopbackPort=exports.DefaultCMapReaderFactory=exports.DefaultCanvasFactory=exports.build=void 0
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(2)),_util=__w_pdfjs_require__(4),_display_utils=__w_pdfjs_require__(1),_font_loader=__w_pdfjs_require__(136),_node_utils=__w_pdfjs_require__(137),_annotation_storage=__w_pdfjs_require__(138),_api_compatibility=__w_pdfjs_require__(139),_canvas=__w_pdfjs_require__(140),_worker_options=__w_pdfjs_require__(142),_is_node=__w_pdfjs_require__(6),_message_handler=__w_pdfjs_require__(143),_metadata=__w_pdfjs_require__(144),_optional_content_config=__w_pdfjs_require__(146),_transport_stream=__w_pdfjs_require__(147),_webgl=__w_pdfjs_require__(148)
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function asyncGeneratorStep(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){asyncGeneratorStep(i,n,a,o,s,"next",e)}function s(e){asyncGeneratorStep(i,n,a,o,s,"throw",e)}o(void 0)}))}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _createForOfIteratorHelper(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var DEFAULT_RANGE_CHUNK_SIZE=65536,RENDERING_CANCELLED_TIMEOUT=100,DefaultCanvasFactory=_is_node.isNodeJS?_node_utils.NodeCanvasFactory:_display_utils.DOMCanvasFactory
exports.DefaultCanvasFactory=DefaultCanvasFactory
var DefaultCMapReaderFactory=_is_node.isNodeJS?_node_utils.NodeCMapReaderFactory:_display_utils.DOMCMapReaderFactory,createPDFNetworkStream
function setPDFNetworkStreamFactory(e){createPDFNetworkStream=e}function getDocument(e){var t,r=new PDFDocumentLoadingTask
if("string"==typeof e)t={url:e}
else if((0,_util.isArrayBuffer)(e))t={data:e}
else if(e instanceof PDFDataRangeTransport)t={range:e}
else{if("object"!==_typeof(e))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object")
if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url")
t=e}var n=Object.create(null),a=null,i=null
for(var o in t)if("url"!==o||"undefined"==typeof window)if("range"!==o)if("worker"!==o)if("data"!==o||t[o]instanceof Uint8Array)n[o]=t[o]
else{var s=t[o]
if("string"==typeof s)n[o]=(0,_util.stringToBytes)(s)
else if("object"!==_typeof(s)||null===s||isNaN(s.length)){if(!(0,_util.isArrayBuffer)(s))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.")
n[o]=new Uint8Array(s)}else n[o]=new Uint8Array(s)}else i=t[o]
else a=t[o]
else n[o]=new URL(t[o],window.location).href
if(n.rangeChunkSize=n.rangeChunkSize||DEFAULT_RANGE_CHUNK_SIZE,n.CMapReaderFactory=n.CMapReaderFactory||DefaultCMapReaderFactory,n.ignoreErrors=!0!==n.stopAtErrors,n.fontExtraProperties=!0===n.fontExtraProperties,n.pdfBug=!0===n.pdfBug,Number.isInteger(n.maxImageSize)||(n.maxImageSize=-1),"boolean"!=typeof n.isEvalSupported&&(n.isEvalSupported=!0),"boolean"!=typeof n.disableFontFace&&(n.disableFontFace=_api_compatibility.apiCompatibilityParams.disableFontFace||!1),void 0===n.ownerDocument&&(n.ownerDocument=globalThis.document),"boolean"!=typeof n.disableRange&&(n.disableRange=!1),"boolean"!=typeof n.disableStream&&(n.disableStream=!1),"boolean"!=typeof n.disableAutoFetch&&(n.disableAutoFetch=!1),(0,_util.setVerbosityLevel)(n.verbosity),!i){var u={verbosity:n.verbosity,port:_worker_options.GlobalWorkerOptions.workerPort}
i=u.port?PDFWorker.fromPort(u):new PDFWorker(u),r._worker=i}var l=r.docId
return i.promise.then((function(){if(r.destroyed)throw new Error("Loading aborted")
var e=_fetchDocument(i,n,a,l),t=new Promise((function(e){var t
a?t=new _transport_stream.PDFDataTransportStream({length:n.length,initialData:n.initialData,progressiveDone:n.progressiveDone,disableRange:n.disableRange,disableStream:n.disableStream},a):n.data||(t=createPDFNetworkStream({url:n.url,length:n.length,httpHeaders:n.httpHeaders,withCredentials:n.withCredentials,rangeChunkSize:n.rangeChunkSize,disableRange:n.disableRange,disableStream:n.disableStream})),e(t)}))
return Promise.all([e,t]).then((function(e){var t=_slicedToArray(e,2),a=t[0],o=t[1]
if(r.destroyed)throw new Error("Loading aborted")
var s=new _message_handler.MessageHandler(l,a,i.port)
s.postMessageTransfers=i.postMessageTransfers
var u=new WorkerTransport(s,r,o,n)
r._transport=u,s.send("Ready",null)}))})).catch(r._capability.reject),r}function _fetchDocument(e,t,r,n){return e.destroyed?Promise.reject(new Error("Worker was destroyed")):(r&&(t.length=r.length,t.initialData=r.initialData,t.progressiveDone=r.progressiveDone),e.messageHandler.sendWithPromise("GetDocRequest",{docId:n,apiVersion:"2.7.570",source:{data:t.data,url:t.url,password:t.password,disableAutoFetch:t.disableAutoFetch,rangeChunkSize:t.rangeChunkSize,length:t.length},maxImageSize:t.maxImageSize,disableFontFace:t.disableFontFace,postMessageTransfers:e.postMessageTransfers,docBaseUrl:t.docBaseUrl,ignoreErrors:t.ignoreErrors,isEvalSupported:t.isEvalSupported,fontExtraProperties:t.fontExtraProperties}).then((function(t){if(e.destroyed)throw new Error("Worker was destroyed")
return t})))}exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory
var PDFDocumentLoadingTask=(nextDocumentId=0,function(){function e(){_classCallCheck(this,e),this._capability=(0,_util.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d"+nextDocumentId++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}return _createClass(e,[{key:"destroy",value:function(){var e=this
return this.destroyed=!0,(this._transport?this._transport.destroy():Promise.resolve()).then((function(){e._transport=null,e._worker&&(e._worker.destroy(),e._worker=null)}))}},{key:"promise",get:function(){return this._capability.promise}}]),e}()),nextDocumentId,PDFDataRangeTransport=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
_classCallCheck(this,e),this.length=t,this.initialData=r,this.progressiveDone=n,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._progressiveDoneListeners=[],this._readyCapability=(0,_util.createPromiseCapability)()}return _createClass(e,[{key:"addRangeListener",value:function(e){this._rangeListeners.push(e)}},{key:"addProgressListener",value:function(e){this._progressListeners.push(e)}},{key:"addProgressiveReadListener",value:function(e){this._progressiveReadListeners.push(e)}},{key:"addProgressiveDoneListener",value:function(e){this._progressiveDoneListeners.push(e)}},{key:"onDataRange",value:function(e,t){var r,n=_createForOfIteratorHelper(this._rangeListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e,t)}}catch(a){n.e(a)}finally{n.f()}}},{key:"onDataProgress",value:function(e,t){var r=this
this._readyCapability.promise.then((function(){var n,a=_createForOfIteratorHelper(r._progressListeners)
try{for(a.s();!(n=a.n()).done;){(0,n.value)(e,t)}}catch(i){a.e(i)}finally{a.f()}}))}},{key:"onDataProgressiveRead",value:function(e){var t=this
this._readyCapability.promise.then((function(){var r,n=_createForOfIteratorHelper(t._progressiveReadListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e)}}catch(a){n.e(a)}finally{n.f()}}))}},{key:"onDataProgressiveDone",value:function(){var e=this
this._readyCapability.promise.then((function(){var t,r=_createForOfIteratorHelper(e._progressiveDoneListeners)
try{for(r.s();!(t=r.n()).done;){(0,t.value)()}}catch(n){r.e(n)}finally{r.f()}}))}},{key:"transportReady",value:function(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function(e,t){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function(){}}]),e}()
exports.PDFDataRangeTransport=PDFDataRangeTransport
var PDFDocumentProxy=function(){function e(t,r){_classCallCheck(this,e),this._pdfInfo=t,this._transport=r}return _createClass(e,[{key:"getPage",value:function(e){return this._transport.getPage(e)}},{key:"getPageIndex",value:function(e){return this._transport.getPageIndex(e)}},{key:"getDestinations",value:function(){return this._transport.getDestinations()}},{key:"getDestination",value:function(e){return this._transport.getDestination(e)}},{key:"getPageLabels",value:function(){return this._transport.getPageLabels()}},{key:"getPageLayout",value:function(){return this._transport.getPageLayout()}},{key:"getPageMode",value:function(){return this._transport.getPageMode()}},{key:"getViewerPreferences",value:function(){return this._transport.getViewerPreferences()}},{key:"getOpenAction",value:function(){return this._transport.getOpenAction()}},{key:"getAttachments",value:function(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function(){return this._transport.getJavaScript()}},{key:"getJSActions",value:function(){return this._transport.getDocJSActions()}},{key:"getOutline",value:function(){return this._transport.getOutline()}},{key:"getOptionalContentConfig",value:function(){return this._transport.getOptionalContentConfig()}},{key:"getPermissions",value:function(){return this._transport.getPermissions()}},{key:"getMetadata",value:function(){return this._transport.getMetadata()}},{key:"getMarkInfo",value:function(){return this._transport.getMarkInfo()}},{key:"getData",value:function(){return this._transport.getData()}},{key:"getDownloadInfo",value:function(){return this._transport.downloadInfoCapability.promise}},{key:"getStats",value:function(){return this._transport.getStats()}},{key:"cleanup",value:function(){return this._transport.startCleanup()}},{key:"destroy",value:function(){return this.loadingTask.destroy()}},{key:"saveDocument",value:function(e){return this._transport.saveDocument(e)}},{key:"getFieldObjects",value:function(){return this._transport.getFieldObjects()}},{key:"hasJSActions",value:function(){return this._transport.hasJSActions()}},{key:"getCalculationOrderIds",value:function(){return this._transport.getCalculationOrderIds()}},{key:"annotationStorage",get:function(){return(0,_util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage)}},{key:"numPages",get:function(){return this._pdfInfo.numPages}},{key:"fingerprint",get:function(){return this._pdfInfo.fingerprint}},{key:"loadingParams",get:function(){return this._transport.loadingParams}},{key:"loadingTask",get:function(){return this._transport.loadingTask}}]),e}()
exports.PDFDocumentProxy=PDFDocumentProxy
var PDFPageProxy=function(){function e(t,r,n,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
_classCallCheck(this,e),this._pageIndex=t,this._pageInfo=r,this._ownerDocument=a,this._transport=n,this._stats=i?new _display_utils.StatTimer:null,this._pdfBug=i,this.commonObjs=n.commonObjs,this.objs=new PDFObjects,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this._intentStates=new Map,this.destroyed=!1}return _createClass(e,[{key:"getViewport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scale,r=e.rotation,n=void 0===r?this.rotate:r,a=e.offsetX,i=void 0===a?0:a,o=e.offsetY,s=void 0===o?0:o,u=e.dontFlip,l=void 0!==u&&u
return new _display_utils.PageViewport({viewBox:this.view,scale:t,rotation:n,offsetX:i,offsetY:s,dontFlip:l})}},{key:"getAnnotations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intent,r=void 0===t?null:t
return this.annotationsPromise&&this.annotationsIntent===r||(this.annotationsPromise=this._transport.getAnnotations(this._pageIndex,r),this.annotationsIntent=r),this.annotationsPromise}},{key:"getJSActions",value:function(){return this._jsActionsPromise||(this._jsActionsPromise=this._transport.getPageJSActions(this._pageIndex))}},{key:"render",value:function(e){var t=this,r=e.canvasContext,n=e.viewport,a=e.intent,i=void 0===a?"display":a,o=e.enableWebGL,s=void 0!==o&&o,u=e.renderInteractiveForms,l=void 0!==u&&u,c=e.transform,h=void 0===c?null:c,f=e.imageLayer,d=void 0===f?null:f,p=e.canvasFactory,v=void 0===p?null:p,g=e.background,y=void 0===g?null:g,m=e.annotationStorage,b=void 0===m?null:m,_=e.optionalContentConfigPromise,A=void 0===_?null:_
this._stats&&this._stats.time("Overall")
var S="print"===i?"print":"display"
this.pendingCleanup=!1,A||(A=this._transport.getOptionalContentConfig())
var w=this._intentStates.get(S)
w||(w=Object.create(null),this._intentStates.set(S,w)),w.streamReaderCancelTimeout&&(clearTimeout(w.streamReaderCancelTimeout),w.streamReaderCancelTimeout=null)
var k=v||new DefaultCanvasFactory({ownerDocument:this._ownerDocument}),x=new _webgl.WebGLContext({enable:s})
w.displayReadyCapability||(w.displayReadyCapability=(0,_util.createPromiseCapability)(),w.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList({pageIndex:this._pageIndex,intent:S,renderInteractiveForms:!0===l,annotationStorage:(null==b?void 0:b.getAll())||null}))
var C=function(e){var r=w.renderTasks.indexOf(P)
r>=0&&w.renderTasks.splice(r,1),(t.cleanupAfterRender||"print"===S)&&(t.pendingCleanup=!0),t._tryCleanup(),e?(P.capability.reject(e),t._abortOperatorList({intentState:w,reason:e})):P.capability.resolve(),t._stats&&(t._stats.timeEnd("Rendering"),t._stats.timeEnd("Overall"))},P=new InternalRenderTask({callback:C,params:{canvasContext:r,viewport:n,transform:h,imageLayer:d,background:y},objs:this.objs,commonObjs:this.commonObjs,operatorList:w.operatorList,pageIndex:this._pageIndex,canvasFactory:k,webGLContext:x,useRequestAnimationFrame:"print"!==S,pdfBug:this._pdfBug})
w.renderTasks||(w.renderTasks=[]),w.renderTasks.push(P)
var R=P.task
return Promise.all([w.displayReadyCapability.promise,A]).then((function(e){var r=_slicedToArray(e,2),n=r[0],a=r[1]
t.pendingCleanup?C():(t._stats&&t._stats.time("Rendering"),P.initializeGraphics({transparency:n,optionalContentConfig:a}),P.operatorListChanged())})).catch(C),R}},{key:"getOperatorList",value:function(){var e,t="oplist",r=this._intentStates.get(t)
return r||(r=Object.create(null),this._intentStates.set(t,r)),r.opListReadCapability||((e=Object.create(null)).operatorListChanged=function(){if(r.operatorList.lastChunk){r.opListReadCapability.resolve(r.operatorList)
var t=r.renderTasks.indexOf(e)
t>=0&&r.renderTasks.splice(t,1)}},r.opListReadCapability=(0,_util.createPromiseCapability)(),r.renderTasks=[],r.renderTasks.push(e),r.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList({pageIndex:this._pageIndex,intent:t})),r.opListReadCapability.promise}},{key:"streamTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.normalizeWhitespace,r=void 0!==t&&t,n=e.disableCombineTextItems,a=void 0!==n&&n,i=100
return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,normalizeWhitespace:!0===r,combineTextItems:!0!==a},{highWaterMark:i,size:function(e){return e.items.length}})}},{key:"getTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.streamTextContent(e)
return new Promise((function(e,r){var n=t.getReader(),a={items:[],styles:Object.create(null)};(function t(){n.read().then((function(r){var n,i=r.value
r.done?e(a):(Object.assign(a.styles,i.styles),(n=a.items).push.apply(n,_toConsumableArray(i.items)),t())}),r)})()}))}},{key:"_destroy",value:function(){this.destroyed=!0,this._transport.pageCache[this._pageIndex]=null
var e,t=[],r=_createForOfIteratorHelper(this._intentStates)
try{for(r.s();!(e=r.n()).done;){var n=_slicedToArray(e.value,2),a=n[0],i=n[1]
if(this._abortOperatorList({intentState:i,reason:new Error("Page was destroyed."),force:!0}),"oplist"!==a){var o,s=_createForOfIteratorHelper(i.renderTasks)
try{for(s.s();!(o=s.n()).done;){var u=o.value
t.push(u.completed),u.cancel()}}catch(l){s.e(l)}finally{s.f()}}}}catch(l){r.e(l)}finally{r.f()}return this.objs.clear(),this.annotationsPromise=null,this._jsActionsPromise=null,this.pendingCleanup=!1,Promise.all(t)}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this.pendingCleanup=!0,this._tryCleanup(e)}},{key:"_tryCleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.pendingCleanup)return!1
var t,r=_createForOfIteratorHelper(this._intentStates.values())
try{for(r.s();!(t=r.n()).done;){var n=t.value,a=n.renderTasks,i=n.operatorList
if(0!==a.length||!i.lastChunk)return!1}}catch(o){r.e(o)}finally{r.f()}return this._intentStates.clear(),this.objs.clear(),this.annotationsPromise=null,this._jsActionsPromise=null,e&&this._stats&&(this._stats=new _display_utils.StatTimer),this.pendingCleanup=!1,!0}},{key:"_startRenderPage",value:function(e,t){var r=this._intentStates.get(t)
r&&(this._stats&&this._stats.timeEnd("Page Request"),r.displayReadyCapability&&r.displayReadyCapability.resolve(e))}},{key:"_renderPageChunk",value:function(e,t){for(var r=0,n=e.length;r<n;r++)t.operatorList.fnArray.push(e.fnArray[r]),t.operatorList.argsArray.push(e.argsArray[r])
t.operatorList.lastChunk=e.lastChunk
for(var a=0;a<t.renderTasks.length;a++)t.renderTasks[a].operatorListChanged()
e.lastChunk&&this._tryCleanup()}},{key:"_pumpOperatorList",value:function(e){var t=this;(0,_util.assert)(e.intent,'PDFPageProxy._pumpOperatorList: Expected "intent" argument.')
var r=this._transport.messageHandler.sendWithStream("GetOperatorList",e).getReader(),n=this._intentStates.get(e.intent)
n.streamReader=r;(function e(){r.read().then((function(r){var a=r.value
r.done?n.streamReader=null:t._transport.destroyed||(t._renderPageChunk(a,n),e())}),(function(e){if(n.streamReader=null,!t._transport.destroyed){if(n.operatorList){n.operatorList.lastChunk=!0
for(var r=0;r<n.renderTasks.length;r++)n.renderTasks[r].operatorListChanged()
t._tryCleanup()}if(n.displayReadyCapability)n.displayReadyCapability.reject(e)
else{if(!n.opListReadCapability)throw e
n.opListReadCapability.reject(e)}}}))})()}},{key:"_abortOperatorList",value:function(e){var t=this,r=e.intentState,n=e.reason,a=e.force,i=void 0!==a&&a
if((0,_util.assert)(n instanceof Error||"object"===_typeof(n)&&null!==n,'PDFPageProxy._abortOperatorList: Expected "reason" argument.'),r.streamReader){if(!i){if(0!==r.renderTasks.length)return
if(n instanceof _display_utils.RenderingCancelledException)return void(r.streamReaderCancelTimeout=setTimeout((function(){t._abortOperatorList({intentState:r,reason:n,force:!0}),r.streamReaderCancelTimeout=null}),RENDERING_CANCELLED_TIMEOUT))}if(r.streamReader.cancel(new _util.AbortException(null==n?void 0:n.message)),r.streamReader=null,!this._transport.destroyed){var o,s=_createForOfIteratorHelper(this._intentStates)
try{for(s.s();!(o=s.n()).done;){var u=_slicedToArray(o.value,2),l=u[0]
if(u[1]===r){this._intentStates.delete(l)
break}}}catch(c){s.e(c)}finally{s.f()}this.cleanup()}}}},{key:"pageNumber",get:function(){return this._pageIndex+1}},{key:"rotate",get:function(){return this._pageInfo.rotate}},{key:"ref",get:function(){return this._pageInfo.ref}},{key:"userUnit",get:function(){return this._pageInfo.userUnit}},{key:"view",get:function(){return this._pageInfo.view}},{key:"stats",get:function(){return this._stats}}]),e}()
exports.PDFPageProxy=PDFPageProxy
var LoopbackPort=function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
_classCallCheck(this,e),this._listeners=[],this._defer=t,this._deferred=Promise.resolve(void 0)}return _createClass(e,[{key:"postMessage",value:function(e,t){var r=this
if(this._defer){var n=new WeakMap,a={data:function e(r){if("object"!==_typeof(r)||null===r)return r
if(n.has(r))return n.get(r)
var a,i
if((a=r.buffer)&&(0,_util.isArrayBuffer)(a))return i=null!=t&&t.includes(a)?new r.constructor(a,r.byteOffset,r.byteLength):new r.constructor(r),n.set(r,i),i
for(var o in i=Array.isArray(r)?[]:{},n.set(r,i),r){for(var s=void 0,u=r;!(s=Object.getOwnPropertyDescriptor(u,o));)u=Object.getPrototypeOf(u)
if(void 0!==s.value)if("function"!=typeof s.value)i[o]=e(s.value)
else if(r.hasOwnProperty&&r.hasOwnProperty(o))throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(r[o]))}return i}(e)}
this._deferred.then((function(){r._listeners.forEach((function(e){e.call(r,a)}))}))}else this._listeners.forEach((function(t){t.call(r,{data:e})}))}},{key:"addEventListener",value:function(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function(e,t){var r=this._listeners.indexOf(t)
this._listeners.splice(r,1)}},{key:"terminate",value:function(){this._listeners.length=0}}]),e}()
exports.LoopbackPort=LoopbackPort
var PDFWorker=function PDFWorkerClosure(){var pdfWorkerPorts=new WeakMap,isWorkerDisabled=!1,fallbackWorkerSrc,nextFakeWorkerId=0,fakeWorkerCapability
if(_is_node.isNodeJS&&"function"==typeof require)isWorkerDisabled=!0,fallbackWorkerSrc="./pdf.worker.js"
else if("object"===("undefined"==typeof document?"undefined":_typeof(document))&&"currentScript"in document){var _document$currentScri,pdfjsFilePath=null===(_document$currentScri=document.currentScript)||void 0===_document$currentScri?void 0:_document$currentScri.src
pdfjsFilePath&&(fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}function _getWorkerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc
if(void 0!==fallbackWorkerSrc)return _is_node.isNodeJS||(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),fallbackWorkerSrc
throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}function getMainThreadWorkerMessageHandler(){var e
try{var t
e=null===(t=globalThis.pdfjsWorker)||void 0===t?void 0:t.WorkerMessageHandler}catch(r){}return e||null}function setupFakeWorkerGlobal(){if(fakeWorkerCapability)return fakeWorkerCapability.promise
fakeWorkerCapability=(0,_util.createPromiseCapability)()
var loader=function(){var _ref12=_asyncToGenerator(_regenerator.default.mark((function _callee(){var mainWorkerMessageHandler,worker
return _regenerator.default.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(mainWorkerMessageHandler=getMainThreadWorkerMessageHandler(),!mainWorkerMessageHandler){_context.next=3
break}return _context.abrupt("return",mainWorkerMessageHandler)
case 3:if(!_is_node.isNodeJS||"function"!=typeof require){_context.next=6
break}return worker=eval("require")(_getWorkerSrc()),_context.abrupt("return",worker.WorkerMessageHandler)
case 6:return _context.next=8,(0,_display_utils.loadScript)(_getWorkerSrc())
case 8:return _context.abrupt("return",window.pdfjsWorker.WorkerMessageHandler)
case 9:case"end":return _context.stop()}}),_callee)})))
return function(){return _ref12.apply(this,arguments)}}()
return loader().then(fakeWorkerCapability.resolve,fakeWorkerCapability.reject),fakeWorkerCapability.promise}function createCDNWrapper(e){var t="importScripts('"+e+"');"
return URL.createObjectURL(new Blob([t]))}var PDFWorker=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?null:r,a=t.port,i=void 0===a?null:a,o=t.verbosity,s=void 0===o?(0,_util.getVerbosityLevel)():o
if(_classCallCheck(this,e),i&&pdfWorkerPorts.has(i))throw new Error("Cannot use more than one PDFWorker per port")
if(this.name=n,this.destroyed=!1,this.postMessageTransfers=!0,this.verbosity=s,this._readyCapability=(0,_util.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,i)return pdfWorkerPorts.set(i,this),void this._initializeFromPort(i)
this._initialize()}return _createClass(e,[{key:"_initializeFromPort",value:function(e){this._port=e,this._messageHandler=new _message_handler.MessageHandler("main","worker",e),this._messageHandler.on("ready",(function(){})),this._readyCapability.resolve()}},{key:"_initialize",value:function(){var e=this
if("undefined"!=typeof Worker&&!isWorkerDisabled&&!getMainThreadWorkerMessageHandler()){var t=_getWorkerSrc()
try{(0,_util.isSameOrigin)(window.location.href,t)||(t=createCDNWrapper(new URL(t,window.location).href))
var r=new Worker(t),n=new _message_handler.MessageHandler("main","worker",r),a=function(){r.removeEventListener("error",i),n.destroy(),r.terminate(),e.destroyed?e._readyCapability.reject(new Error("Worker was destroyed")):e._setupFakeWorker()},i=function(){e._webWorker||a()}
r.addEventListener("error",i),n.on("test",(function(t){r.removeEventListener("error",i),e.destroyed?a():t?(e._messageHandler=n,e._port=r,e._webWorker=r,t.supportTransfers||(e.postMessageTransfers=!1),e._readyCapability.resolve(),n.send("configure",{verbosity:e.verbosity})):(e._setupFakeWorker(),n.destroy(),r.terminate())})),n.on("ready",(function(t){if(r.removeEventListener("error",i),e.destroyed)a()
else try{o()}catch(n){e._setupFakeWorker()}}))
var o=function(){var t=new Uint8Array([e.postMessageTransfers?255:0])
try{n.send("test",t,[t.buffer])}catch(r){(0,_util.warn)("Cannot use postMessage transfers."),t[0]=0,n.send("test",t)}}
return void o()}catch(s){(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function(){var e=this
isWorkerDisabled||((0,_util.warn)("Setting up fake worker."),isWorkerDisabled=!0),setupFakeWorkerGlobal().then((function(t){if(e.destroyed)e._readyCapability.reject(new Error("Worker was destroyed"))
else{var r=new LoopbackPort
e._port=r
var n="fake"+nextFakeWorkerId++,a=new _message_handler.MessageHandler(n+"_worker",n,r)
t.setup(a,r)
var i=new _message_handler.MessageHandler(n,n+"_worker",r)
e._messageHandler=i,e._readyCapability.resolve(),i.send("configure",{verbosity:e.verbosity})}})).catch((function(t){e._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(t.message,'".')))}))}},{key:"destroy",value:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),pdfWorkerPorts.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},{key:"promise",get:function(){return this._readyCapability.promise}},{key:"port",get:function(){return this._port}},{key:"messageHandler",get:function(){return this._messageHandler}}],[{key:"fromPort",value:function(t){if(!t||!t.port)throw new Error("PDFWorker.fromPort - invalid method signature.")
return pdfWorkerPorts.has(t.port)?pdfWorkerPorts.get(t.port):new e(t)}},{key:"getWorkerSrc",value:function(){return _getWorkerSrc()}}]),e}()
return PDFWorker}()
exports.PDFWorker=PDFWorker
var WorkerTransport=function(){function e(t,r,n,a){_classCallCheck(this,e),this.messageHandler=t,this.loadingTask=r,this.commonObjs=new PDFObjects,this.fontLoader=new _font_loader.FontLoader({docId:r.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this),ownerDocument:a.ownerDocument}),this._params=a,this.CMapReaderFactory=new a.CMapReaderFactory({baseUrl:a.cMapUrl,isCompressed:a.cMapPacked}),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=n,this._fullReader=null,this._lastProgress=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=(0,_util.createPromiseCapability)(),this.setupMessageHandler()}return _createClass(e,[{key:"destroy",value:function(){var e=this
if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=(0,_util.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var t=[]
this.pageCache.forEach((function(e){e&&t.push(e._destroy())})),this.pageCache.length=0,this.pagePromises.length=0
var r=this.messageHandler.sendWithPromise("Terminate",null)
if(t.push(r),this.loadingTaskSettled){var n=this.loadingTask.promise.then((function(e){e.hasOwnProperty("annotationStorage")&&e.annotationStorage.resetModified()})).catch((function(){}))
t.push(n)}return Promise.all(t).then((function(){e.commonObjs.clear(),e.fontLoader.clear(),e._hasJSActionsPromise=null,e._networkStream&&e._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()}),this.destroyCapability.reject),this.destroyCapability.promise}},{key:"setupMessageHandler",value:function(){var e=this,t=this.messageHandler,r=this.loadingTask
t.on("GetReader",(function(t,r){(0,_util.assert)(e._networkStream,"GetReader - no `IPDFStream` instance available."),e._fullReader=e._networkStream.getFullReader(),e._fullReader.onProgress=function(t){e._lastProgress={loaded:t.loaded,total:t.total}},r.onPull=function(){e._fullReader.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){e._fullReader.cancel(t),r.ready.catch((function(t){if(!e.destroyed)throw t}))}})),t.on("ReaderHeadersReady",(function(t){var n=(0,_util.createPromiseCapability)(),a=e._fullReader
return a.headersReady.then((function(){a.isStreamingSupported&&a.isRangeSupported||(e._lastProgress&&r.onProgress&&r.onProgress(e._lastProgress),a.onProgress=function(e){r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}),n.resolve({isStreamingSupported:a.isStreamingSupported,isRangeSupported:a.isRangeSupported,contentLength:a.contentLength})}),n.reject),n.promise})),t.on("GetRangeReader",(function(t,r){(0,_util.assert)(e._networkStream,"GetRangeReader - no `IPDFStream` instance available.")
var n=e._networkStream.getRangeReader(t.begin,t.end)
n?(r.onPull=function(){n.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetRangeReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){n.cancel(t),r.ready.catch((function(t){if(!e.destroyed)throw t}))}):r.close()})),t.on("GetDoc",(function(t){var n=t.pdfInfo
e._numPages=n.numPages,r._capability.resolve(new PDFDocumentProxy(n,e))})),t.on("DocException",(function(e){var t
switch(e.name){case"PasswordException":t=new _util.PasswordException(e.message,e.code)
break
case"InvalidPDFException":t=new _util.InvalidPDFException(e.message)
break
case"MissingPDFException":t=new _util.MissingPDFException(e.message)
break
case"UnexpectedResponseException":t=new _util.UnexpectedResponseException(e.message,e.status)
break
case"UnknownErrorException":t=new _util.UnknownErrorException(e.message,e.details)}if(!(t instanceof Error)){(0,_util.warn)("DocException - expected a valid Error.")}r._capability.reject(t)})),t.on("PasswordRequest",(function(t){if(e._passwordCapability=(0,_util.createPromiseCapability)(),r.onPassword){try{r.onPassword((function(t){e._passwordCapability.resolve({password:t})}),t.code)}catch(n){e._passwordCapability.reject(n)}}else e._passwordCapability.reject(new _util.PasswordException(t.message,t.code))
return e._passwordCapability.promise})),t.on("DataLoaded",(function(t){r.onProgress&&r.onProgress({loaded:t.length,total:t.length}),e.downloadInfoCapability.resolve(t)})),t.on("StartRenderPage",(function(t){e.destroyed||e.pageCache[t.pageIndex]._startRenderPage(t.transparency,t.intent)})),t.on("commonobj",(function(r){var n
if(!e.destroyed){var a=_slicedToArray(r,3),i=a[0],o=a[1],s=a[2]
if(!e.commonObjs.has(i))switch(o){case"Font":var u=e._params
if("error"in s){var l=s.error;(0,_util.warn)("Error during font loading: ".concat(l)),e.commonObjs.resolve(i,l)
break}var c=null
u.pdfBug&&null!==(n=globalThis.FontInspector)&&void 0!==n&&n.enabled&&(c={registerFont:function(e,t){globalThis.FontInspector.fontAdded(e,t)}})
var h=new _font_loader.FontFaceObject(s,{isEvalSupported:u.isEvalSupported,disableFontFace:u.disableFontFace,ignoreErrors:u.ignoreErrors,onUnsupportedFeature:e._onUnsupportedFeature.bind(e),fontRegistry:c})
e.fontLoader.bind(h).catch((function(e){return t.sendWithPromise("FontFallback",{id:i})})).finally((function(){!u.fontExtraProperties&&h.data&&(h.data=null),e.commonObjs.resolve(i,h)}))
break
case"FontPath":case"Image":e.commonObjs.resolve(i,s)
break
default:throw new Error("Got unknown common object type ".concat(o))}}})),t.on("obj",(function(t){var r
if(!e.destroyed){var n=_slicedToArray(t,4),a=n[0],i=n[1],o=n[2],s=n[3],u=e.pageCache[i]
if(!u.objs.has(a))switch(o){case"Image":u.objs.resolve(a,s);(null==s||null===(r=s.data)||void 0===r?void 0:r.length)>8e6&&(u.cleanupAfterRender=!0)
break
default:throw new Error("Got unknown object type ".concat(o))}}})),t.on("DocProgress",(function(t){e.destroyed||r.onProgress&&r.onProgress({loaded:t.loaded,total:t.total})})),t.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this)),t.on("FetchBuiltInCMap",(function(t,r){if(e.destroyed)r.error(new Error("Worker was destroyed"))
else{var n=!1
r.onPull=function(){n?r.close():(n=!0,e.CMapReaderFactory.fetch(t).then((function(e){r.enqueue(e,1,[e.cMapData.buffer])})).catch((function(e){r.error(e)})))}}}))}},{key:"_onUnsupportedFeature",value:function(e){var t=e.featureId
this.destroyed||this.loadingTask.onUnsupportedFeature&&this.loadingTask.onUnsupportedFeature(t)}},{key:"getData",value:function(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function(e){var t=this
if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request"))
var r=e-1
if(r in this.pagePromises)return this.pagePromises[r]
var n=this.messageHandler.sendWithPromise("GetPage",{pageIndex:r}).then((function(e){if(t.destroyed)throw new Error("Transport destroyed")
var n=new PDFPageProxy(r,e,t,t._params.ownerDocument,t._params.pdfBug)
return t.pageCache[r]=n,n}))
return this.pagePromises[r]=n,n}},{key:"getPageIndex",value:function(e){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:e}).catch((function(e){return Promise.reject(new Error(e))}))}},{key:"getAnnotations",value:function(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}},{key:"saveDocument",value:function(e){var t,r
return this.messageHandler.sendWithPromise("SaveDocument",{numPages:this._numPages,annotationStorage:(null==e?void 0:e.getAll())||null,filename:null!==(t=null===(r=this._fullReader)||void 0===r?void 0:r.filename)&&void 0!==t?t:null}).finally((function(){e&&e.resetModified()}))}},{key:"getFieldObjects",value:function(){return this.messageHandler.sendWithPromise("GetFieldObjects",null)}},{key:"hasJSActions",value:function(){return this._hasJSActionsPromise||(this._hasJSActionsPromise=this.messageHandler.sendWithPromise("HasJSActions",null))}},{key:"getCalculationOrderIds",value:function(){return this.messageHandler.sendWithPromise("GetCalculationOrderIds",null)}},{key:"getDestinations",value:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function(e){return"string"!=typeof e?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}},{key:"getPageLabels",value:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageLayout",value:function(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}},{key:"getPageMode",value:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getViewerPreferences",value:function(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}},{key:"getOpenAction",value:function(){return this.messageHandler.sendWithPromise("GetOpenAction",null)}},{key:"getAttachments",value:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getDocJSActions",value:function(){return this.messageHandler.sendWithPromise("GetDocJSActions",null)}},{key:"getPageJSActions",value:function(e){return this.messageHandler.sendWithPromise("GetPageJSActions",{pageIndex:e})}},{key:"getOutline",value:function(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getOptionalContentConfig",value:function(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then((function(e){return new _optional_content_config.OptionalContentConfig(e)}))}},{key:"getPermissions",value:function(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function(){var e=this
return this.messageHandler.sendWithPromise("GetMetadata",null).then((function(t){var r,n,a,i
return{info:t[0],metadata:t[1]?new _metadata.Metadata(t[1]):null,contentDispositionFilename:null!==(r=null===(n=e._fullReader)||void 0===n?void 0:n.filename)&&void 0!==r?r:null,contentLength:null!==(a=null===(i=e._fullReader)||void 0===i?void 0:i.contentLength)&&void 0!==a?a:null}}))}},{key:"getMarkInfo",value:function(){return this.messageHandler.sendWithPromise("GetMarkInfo",null)}},{key:"getStats",value:function(){return this.messageHandler.sendWithPromise("GetStats",null)}},{key:"startCleanup",value:function(){var e=this
return this.messageHandler.sendWithPromise("Cleanup",null).then((function(){for(var t=0,r=e.pageCache.length;t<r;t++){var n=e.pageCache[t]
if(n)if(!n.cleanup())throw new Error("startCleanup: Page ".concat(t+1," is currently rendering."))}e.commonObjs.clear(),e.fontLoader.clear(),e._hasJSActionsPromise=null}))}},{key:"loadingTaskSettled",get:function(){return this.loadingTask._capability.settled}},{key:"loadingParams",get:function(){var e=this._params
return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:e.disableAutoFetch,disableFontFace:e.disableFontFace})}}]),e}(),PDFObjects=function(){function e(){_classCallCheck(this,e),this._objs=Object.create(null)}return _createClass(e,[{key:"_ensureObj",value:function(e){return this._objs[e]?this._objs[e]:this._objs[e]={capability:(0,_util.createPromiseCapability)(),data:null,resolved:!1}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(t)return this._ensureObj(e).capability.promise.then(t),null
var r=this._objs[e]
if(!r||!r.resolved)throw new Error("Requesting object that isn't resolved yet ".concat(e,"."))
return r.data}},{key:"has",value:function(e){var t=this._objs[e]
return(null==t?void 0:t.resolved)||!1}},{key:"resolve",value:function(e,t){var r=this._ensureObj(e)
r.resolved=!0,r.data=t,r.capability.resolve(t)}},{key:"clear",value:function(){this._objs=Object.create(null)}}]),e}(),RenderTask=function(){function e(t){_classCallCheck(this,e),this._internalRenderTask=t,this.onContinue=null}return _createClass(e,[{key:"cancel",value:function(){this._internalRenderTask.cancel()}},{key:"promise",get:function(){return this._internalRenderTask.capability.promise}}]),e}(),InternalRenderTask=(canvasInRendering=new WeakSet,function(){function e(t){var r=t.callback,n=t.params,a=t.objs,i=t.commonObjs,o=t.operatorList,s=t.pageIndex,u=t.canvasFactory,l=t.webGLContext,c=t.useRequestAnimationFrame,h=void 0!==c&&c,f=t.pdfBug,d=void 0!==f&&f
_classCallCheck(this,e),this.callback=r,this.params=n,this.objs=a,this.commonObjs=i,this.operatorListIdx=null,this.operatorList=o,this._pageIndex=s,this.canvasFactory=u,this.webGLContext=l,this._pdfBug=d,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=!0===h&&"undefined"!=typeof window,this.cancelled=!1,this.capability=(0,_util.createPromiseCapability)(),this.task=new RenderTask(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=n.canvasContext.canvas}var t
return _createClass(e,[{key:"initializeGraphics",value:function(e){var t,r=e.transparency,n=void 0!==r&&r,a=e.optionalContentConfig
if(!this.cancelled){if(this._canvas){if(canvasInRendering.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.")
canvasInRendering.add(this._canvas)}this._pdfBug&&null!==(t=globalThis.StepperManager)&&void 0!==t&&t.enabled&&(this.stepper=globalThis.StepperManager.create(this._pageIndex),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var i=this.params,o=i.canvasContext,s=i.viewport,u=i.transform,l=i.imageLayer,c=i.background
this.gfx=new _canvas.CanvasGraphics(o,this.commonObjs,this.objs,this.canvasFactory,this.webGLContext,l,a),this.gfx.beginDrawing({transform:u,viewport:s,transparency:n,background:c}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
this.running=!1,this.cancelled=!0,this.gfx&&this.gfx.endDrawing(),this._canvas&&canvasInRendering.delete(this._canvas),this.callback(e||new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex+1),"canvas"))}},{key:"operatorListChanged",value:function(){this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()):this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function(){var e=this
this._useRequestAnimationFrame?window.requestAnimationFrame((function(){e._nextBound().catch(e.cancel.bind(e))})):Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this))}},{key:"_next",value:(t=_asyncToGenerator(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cancelled){e.next=2
break}return e.abrupt("return")
case 2:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&canvasInRendering.delete(this._canvas),this.callback()))
case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"completed",get:function(){return this.capability.promise.catch((function(){}))}}]),e}()),canvasInRendering,version="2.7.570"
exports.version=version
var build="f2c7338b0"
exports.build=build},(e,t,r)=>{"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0
var a,i=(a=r(2))&&a.__esModule?a:{default:a},o=r(4)
function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var a=c(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var v,g=function(){function e(t){var r=t.docId,n=t.onUnsupportedFeature,a=t.ownerDocument,i=void 0===a?globalThis.document:a
f(this,e),this.constructor===e&&(0,o.unreachable)("Cannot initialize BaseFontLoader."),this.docId=r,this._onUnsupportedFeature=n,this._document=i,this.nativeFontFaces=[],this.styleElement=null}var t,r
return p(e,[{key:"addNativeFontFace",value:function(e){this.nativeFontFaces.push(e),this._document.fonts.add(e)}},{key:"insertRule",value:function(e){var t=this.styleElement
t||((t=this.styleElement=this._document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId),this._document.documentElement.getElementsByTagName("head")[0].appendChild(t))
var r=t.sheet
r.insertRule(e,r.cssRules.length)}},{key:"clear",value:function(){var e=this
this.nativeFontFaces.forEach((function(t){e._document.fonts.delete(t)})),this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}},{key:"bind",value:(t=i.default.mark((function e(t){var r,n,a=this
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.attached&&!t.missingFile){e.next=2
break}return e.abrupt("return")
case 2:if(t.attached=!0,!this.isFontLoadingAPISupported){e.next=19
break}if(!(r=t.createNativeFontFace())){e.next=18
break}return this.addNativeFontFace(r),e.prev=7,e.next=10,r.loaded
case 10:e.next=18
break
case 12:throw e.prev=12,e.t0=e.catch(7),this._onUnsupportedFeature({featureId:o.UNSUPPORTED_FEATURES.errorFontLoadNative}),(0,o.warn)("Failed to load font '".concat(r.family,"': '").concat(e.t0,"'.")),t.disableFontFace=!0,e.t0
case 18:return e.abrupt("return")
case 19:if(!(n=t.createFontFaceRule())){e.next=26
break}if(this.insertRule(n),!this.isSyncFontLoadingSupported){e.next=24
break}return e.abrupt("return")
case 24:return e.next=26,new Promise((function(e){var r=a._queueLoadingCallback(e)
a._prepareFontLoadEvent([n],[t],r)}))
case 26:case"end":return e.stop()}}),e,this,[[7,12]])})),r=function(){var e=this,r=arguments
return new Promise((function(n,a){var i=t.apply(e,r)
function o(e){h(i,n,a,o,s,"next",e)}function s(e){h(i,n,a,o,s,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"_queueLoadingCallback",value:function(e){(0,o.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"_prepareFontLoadEvent",value:function(e,t,r){(0,o.unreachable)("Abstract method `_prepareFontLoadEvent`.")}},{key:"isFontLoadingAPISupported",get:function(){var e
return(0,o.shadow)(this,"isFontLoadingAPISupported",!(null===(e=this._document)||void 0===e||!e.fonts))}},{key:"isSyncFontLoadingSupported",get:function(){(0,o.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function(){(0,o.unreachable)("Abstract method `_loadTestFont`.")}}]),e}()
t.FontLoader=v,t.FontLoader=v=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(r,e)
var t=u(r)
function r(e){var n
return f(this,r),(n=t.call(this,e)).loadingContext={requests:[],nextRequestId:0},n.loadTestFontId=0,n}return p(r,[{key:"_queueLoadingCallback",value:function(e){var t=this.loadingContext,r={id:"pdfjs-font-loading-".concat(t.nextRequestId++),done:!1,complete:function(){for((0,o.assert)(!r.done,"completeRequest() cannot be called twice."),r.done=!0;t.requests.length>0&&t.requests[0].done;){var e=t.requests.shift()
setTimeout(e.callback,0)}},callback:e}
return t.requests.push(r),r}},{key:"_prepareFontLoadEvent",value:function(e,t,r){var n,a,i=this
function s(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function u(e,t,r,n){return e.substring(0,t)+n+e.substring(t+r)}var l=this._document.createElement("canvas")
l.width=1,l.height=1
var c=l.getContext("2d"),h=0
var f="lt".concat(Date.now()).concat(this.loadTestFontId++),d=this._loadTestFont,p=1482184792,v=s(d=u(d,976,f.length,f),16)
for(n=0,a=f.length-3;n<a;n+=4)v=v-p+s(f,n)|0
n<f.length&&(v=v-p+s(f+"XXX",n)|0),d=u(d,16,4,(0,o.string32)(v))
var g="url(data:font/opentype;base64,".concat(btoa(d),");"),y='@font-face {font-family:"'.concat(f,'";src:').concat(g,"}")
this.insertRule(y)
var m=[]
for(n=0,a=t.length;n<a;n++)m.push(t[n].loadedName)
m.push(f)
var b=this._document.createElement("div")
for(b.style.visibility="hidden",b.style.width=b.style.height="10px",b.style.position="absolute",b.style.top=b.style.left="0px",n=0,a=m.length;n<a;++n){var _=this._document.createElement("span")
_.textContent="Hi",_.style.fontFamily=m[n],b.appendChild(_)}this._document.body.appendChild(b),function e(t,r){if(++h>30)return(0,o.warn)("Load test font never loaded."),void r()
c.font="30px "+t,c.fillText(".",0,20),c.getImageData(0,0,1,1).data[3]>0?r():setTimeout(e.bind(null,t,r))}(f,(function(){i._document.body.removeChild(b),r.complete()}))}},{key:"isSyncFontLoadingSupported",get:function(){var e=!1
if("undefined"==typeof navigator)e=!0
else{var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);(null==t?void 0:t[1])>=14&&(e=!0)}return(0,o.shadow)(this,"isSyncFontLoadingSupported",e)}},{key:"_loadTestFont",get:function(){return(0,o.shadow)(this,"_loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))}}]),r}(g)
var y=function(){function e(t,r){var n=r.isEvalSupported,a=void 0===n||n,i=r.disableFontFace,o=void 0!==i&&i,s=r.ignoreErrors,u=void 0!==s&&s,l=r.onUnsupportedFeature,c=void 0===l?null:l,h=r.fontRegistry,d=void 0===h?null:h
for(var p in f(this,e),this.compiledGlyphs=Object.create(null),t)this[p]=t[p]
this.isEvalSupported=!1!==a,this.disableFontFace=!0===o,this.ignoreErrors=!0===u,this._onUnsupportedFeature=c,this.fontRegistry=d}return p(e,[{key:"createNativeFontFace",value:function(){if(!this.data||this.disableFontFace)return null
var e=new FontFace(this.loadedName,this.data,{})
return this.fontRegistry&&this.fontRegistry.registerFont(this),e}},{key:"createFontFaceRule",value:function(){if(!this.data||this.disableFontFace)return null
var e=(0,o.bytesToString)(new Uint8Array(this.data)),t="url(data:".concat(this.mimetype,";base64,").concat(btoa(e),");"),r='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(t,"}")
return this.fontRegistry&&this.fontRegistry.registerFont(this,t),r}},{key:"getPathGenerator",value:function(e,t){if(void 0!==this.compiledGlyphs[t])return this.compiledGlyphs[t]
var r,n
try{r=e.get(this.loadedName+"_path_"+t)}catch(l){if(!this.ignoreErrors)throw l
return this._onUnsupportedFeature&&this._onUnsupportedFeature({featureId:o.UNSUPPORTED_FEATURES.errorFontGetPath}),(0,o.warn)('getPathGenerator - ignoring character: "'.concat(l,'".')),this.compiledGlyphs[t]=function(e,t){}}if(this.isEvalSupported&&o.IsEvalSupportedCached.value){for(var a,i="",s=0,u=r.length;s<u;s++)a=void 0!==(n=r[s]).args?n.args.join(","):"",i+="c."+n.cmd+"("+a+");\n"
return this.compiledGlyphs[t]=new Function("c","size",i)}return this.compiledGlyphs[t]=function(e,t){for(var a=0,i=r.length;a<i;a++)"scale"===(n=r[a]).cmd&&(n.args=[t,-t]),e[n.cmd].apply(e,n.args)}}}]),e}()
t.FontFaceObject=y},(e,t,r)=>{"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.NodeCMapReaderFactory=t.NodeCanvasFactory=void 0
var a=r(1),i=r(6),o=r(4)
function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var a=d(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var v=function e(){p(this,e),(0,o.unreachable)("Not implemented: NodeCanvasFactory")}
t.NodeCanvasFactory=v
var g=function e(){p(this,e),(0,o.unreachable)("Not implemented: NodeCMapReaderFactory")}
t.NodeCMapReaderFactory=g,i.isNodeJS&&(t.NodeCanvasFactory=v=function(e){l(r,e)
var t=h(r)
function r(){return p(this,r),t.apply(this,arguments)}return u(r,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size")
var r=require("canvas").createCanvas(e,t)
return{canvas:r,context:r.getContext("2d")}}}]),r}(a.BaseCanvasFactory),t.NodeCMapReaderFactory=g=function(e){l(r,e)
var t=h(r)
function r(){return p(this,r),t.apply(this,arguments)}return u(r,[{key:"_fetchData",value:function(e,t){return new Promise((function(r,n){require("fs").readFile(e,(function(e,a){!e&&a?r({cMapData:new Uint8Array(a),compressionType:t}):n(new Error(e))}))}))}}]),r}(a.BaseCMapReaderFactory))},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationStorage=void 0
var n=r(4)
function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._storage=new Map,this._modified=!1,this.onSetModified=null,this.onResetModified=null}var t,r,i
return t=e,(r=[{key:"getOrCreateValue",value:function(e,t){return this._storage.has(e)?this._storage.get(e):(this._storage.set(e,t),t)}},{key:"setValue",value:function(e,t){var r=this._storage.get(e),n=!1
if(void 0!==r)for(var i=0,o=Object.entries(t);i<o.length;i++){var s=a(o[i],2),u=s[0],l=s[1]
r[u]!==l&&(n=!0,r[u]=l)}else this._storage.set(e,t),n=!0
n&&this._setModified()}},{key:"getAll",value:function(){return 0===this._storage.size?null:(0,n.objectFromEntries)(this._storage)}},{key:"_setModified",value:function(){this._modified||(this._modified=!0,"function"==typeof this.onSetModified&&this.onSetModified())}},{key:"resetModified",value:function(){this._modified&&(this._modified=!1,"function"==typeof this.onResetModified&&this.onResetModified())}},{key:"size",get:function(){return this._storage.size}}])&&o(t.prototype,r),i&&o(t,i),e}()
t.AnnotationStorage=s},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.apiCompatibilityParams=void 0
var n=r(6),a=Object.create(null)
n.isNodeJS&&(a.disableFontFace=!0)
var i=Object.freeze(a)
t.apiCompatibilityParams=i},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0
var n=r(4),a=r(141)
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}var u=4096,l=16
function c(e){e.mozCurrentTransform||(e._originalSave=e.save,e._originalRestore=e.restore,e._originalRotate=e.rotate,e._originalScale=e.scale,e._originalTranslate=e.translate,e._originalTransform=e.transform,e._originalSetTransform=e.setTransform,e._transformMatrix=e._transformMatrix||[1,0,0,1,0,0],e._transformStack=[],Object.defineProperty(e,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(e,"mozCurrentTransformInverse",{get:function(){var e=this._transformMatrix,t=e[0],r=e[1],n=e[2],a=e[3],i=e[4],o=e[5],s=t*a-r*n,u=r*n-t*a
return[a/s,r/u,n/u,t/s,(a*i-n*o)/u,(r*i-t*o)/s]}}),e.save=function(){var e=this._transformMatrix
this._transformStack.push(e),this._transformMatrix=e.slice(0,6),this._originalSave()},e.restore=function(){var e=this._transformStack.pop()
e&&(this._transformMatrix=e,this._originalRestore())},e.translate=function(e,t){var r=this._transformMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5],this._originalTranslate(e,t)},e.scale=function(e,t){var r=this._transformMatrix
r[0]=r[0]*e,r[1]=r[1]*e,r[2]=r[2]*t,r[3]=r[3]*t,this._originalScale(e,t)},e.transform=function(t,r,n,a,i,o){var s=this._transformMatrix
this._transformMatrix=[s[0]*t+s[2]*r,s[1]*t+s[3]*r,s[0]*n+s[2]*a,s[1]*n+s[3]*a,s[0]*i+s[2]*o+s[4],s[1]*i+s[3]*o+s[5]],e._originalTransform(t,r,n,a,i,o)},e.setTransform=function(t,r,n,a,i,o){this._transformMatrix=[t,r,n,a,i,o],e._originalSetTransform(t,r,n,a,i,o)},e.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this._transformMatrix
this._transformMatrix=[n[0]*t+n[2]*r,n[1]*t+n[3]*r,n[0]*-r+n[2]*t,n[1]*-r+n[3]*t,n[4],n[5]],this._originalRotate(e)})}var h=function(){function e(e){this.canvasFactory=e,this.cache=Object.create(null)}return e.prototype={getCanvas:function(e,t,r,n){var a
return void 0!==this.cache[e]?(a=this.cache[e],this.canvasFactory.reset(a,t,r),a.context.setTransform(1,0,0,1,0,0)):(a=this.canvasFactory.create(t,r),this.cache[e]=a),n&&c(a.context),a},clear:function(){for(var e in this.cache){var t=this.cache[e]
this.canvasFactory.destroy(t),delete this.cache[e]}}},e}()
var f=function(){function e(){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=n.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=n.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.resumeSMaskCtx=null,this.transferMaps=null}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}(),d=function(){function e(e,t,r,n,a,i,o){this.ctx=e,this.current=new f,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=r,this.canvasFactory=n,this.webGLContext=a,this.imageLayer=i,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.contentVisible=!0,this.markedContentStack=[],this.optionalContentConfig=o,this.cachedCanvases=new h(this.canvasFactory),e&&c(e),this._cachedGetSinglePixelWidth=null}function t(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if("undefined"!=typeof ImageData&&t instanceof ImageData)e.putImageData(t,0,0)
else{var a,i,o,s,u,c,h,f,d,p=t.height,v=t.width,g=p%l,y=(p-g)/l,m=0===g?y:y+1,b=e.createImageData(v,l),_=0,A=t.data,S=b.data
if(r)switch(r.length){case 1:c=r[0],h=r[0],f=r[0],d=r[0]
break
case 4:c=r[0],h=r[1],f=r[2],d=r[3]}if(t.kind===n.ImageKind.GRAYSCALE_1BPP){var w=A.byteLength,k=new Uint32Array(S.buffer,0,S.byteLength>>2),x=k.length,C=v+7>>3,P=4294967295,R=n.IsLittleEndianCached.value?4278190080:255
if(d&&255===d[0]&&0===d[255]){var T=[R,P]
P=T[0],R=T[1]}for(i=0;i<m;i++){for(s=i<y?l:g,a=0,o=0;o<s;o++){for(var E=w-_,O=0,F=E>C?v:8*E-7,L=-8&F,I=0,M=0;O<L;O+=8)M=A[_++],k[a++]=128&M?P:R,k[a++]=64&M?P:R,k[a++]=32&M?P:R,k[a++]=16&M?P:R,k[a++]=8&M?P:R,k[a++]=4&M?P:R,k[a++]=2&M?P:R,k[a++]=1&M?P:R
for(;O<F;O++)0===I&&(M=A[_++],I=128),k[a++]=M&I?P:R,I>>=1}for(;a<x;)k[a++]=0
e.putImageData(b,0,i*l)}}else if(t.kind===n.ImageKind.RGBA_32BPP){var j=!!(c||h||f)
for(o=0,u=v*l*4,i=0;i<y;i++){if(S.set(A.subarray(_,_+u)),_+=u,j)for(var D=0;D<u;D+=4)c&&(S[D+0]=c[S[D+0]]),h&&(S[D+1]=h[S[D+1]]),f&&(S[D+2]=f[S[D+2]])
e.putImageData(b,0,o),o+=l}if(i<m){if(u=v*g*4,S.set(A.subarray(_,_+u)),j)for(var N=0;N<u;N+=4)c&&(S[N+0]=c[S[N+0]]),h&&(S[N+1]=h[S[N+1]]),f&&(S[N+2]=f[S[N+2]])
e.putImageData(b,0,o)}}else{if(t.kind!==n.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(t.kind))
var q=!!(c||h||f)
for(u=v*(s=l),i=0;i<m;i++){for(i>=y&&(u=v*(s=g)),a=0,o=u;o--;)S[a++]=A[_++],S[a++]=A[_++],S[a++]=A[_++],S[a++]=255
if(q)for(var U=0;U<a;U+=4)c&&(S[U+0]=c[S[U+0]]),h&&(S[U+1]=h[S[U+1]]),f&&(S[U+2]=f[S[U+2]])
e.putImageData(b,0,i*l)}}}}function r(e,t){for(var r=t.height,n=t.width,a=r%l,i=(r-a)/l,o=0===a?i:i+1,s=e.createImageData(n,l),u=0,c=t.data,h=s.data,f=0;f<o;f++){for(var d=f<i?l:a,p=3,v=0;v<d;v++)for(var g=void 0,y=0,m=0;m<n;m++)y||(g=c[u++],y=128),h[p]=g&y?0:255,p+=4,y>>=1
e.putImageData(s,0,f*l)}}function s(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,a=r.length;n<a;n++){var i=r[n]
void 0!==e[i]&&(t[i]=e[i])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function d(e){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function p(e,t,r,n){for(var a=e.length,i=3;i<a;i+=4){var o=e[i]
if(0===o)e[i-3]=t,e[i-2]=r,e[i-1]=n
else if(o<255){var s=255-o
e[i-3]=e[i-3]*o+t*s>>8,e[i-2]=e[i-2]*o+r*s>>8,e[i-1]=e[i-1]*o+n*s>>8}}}function v(e,t,r){for(var n=e.length,a=3;a<n;a+=4){var i=r?r[e[a]]:e[a]
t[a]=t[a]*i*.00392156862745098|0}}function g(e,t,r){for(var n=e.length,a=3;a<n;a+=4){var i=77*e[a-3]+152*e[a-2]+28*e[a-1]
t[a]=r?t[a]*r[i>>8]>>8:t[a]*i>>16}}function y(e,t,r,n){var a=t.canvas,i=t.context
e.setTransform(t.scaleX,0,0,t.scaleY,t.offsetX,t.offsetY)
var o=t.backdrop||null
if(!t.transferMap&&n.isEnabled){var s=n.composeSMask({layer:r.canvas,mask:a,properties:{subtype:t.subtype,backdrop:o}})
return e.setTransform(1,0,0,1,0,0),void e.drawImage(s,t.offsetX,t.offsetY)}(function(e,t,r,n,a,i,o){var s,u=!!i,l=u?i[0]:0,c=u?i[1]:0,h=u?i[2]:0
s="Luminosity"===a?g:v
for(var f=Math.min(n,Math.ceil(1048576/r)),d=0;d<n;d+=f){var y=Math.min(f,n-d),m=e.getImageData(0,d,r,y),b=t.getImageData(0,d,r,y)
u&&p(m.data,l,c,h),s(m.data,b.data,o),e.putImageData(b,0,d)}})(i,r,a.width,a.height,t.subtype,o,t.transferMap),e.drawImage(a,0,0)}var m=["butt","round","square"],b=["miter","round","bevel"],_={},A={}
for(var S in e.prototype={beginDrawing:function(e){var t=e.transform,r=e.viewport,n=e.transparency,a=void 0!==n&&n,i=e.background,o=void 0===i?null:i,s=this.ctx.canvas.width,u=this.ctx.canvas.height
if(this.ctx.save(),this.ctx.fillStyle=o||"rgb(255, 255, 255)",this.ctx.fillRect(0,0,s,u),this.ctx.restore(),a){var l=this.cachedCanvases.getCanvas("transparent",s,u,!0)
this.compositeCtx=this.ctx,this.transparentCanvas=l.canvas,this.ctx=l.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),d(this.ctx),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,r.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this._combinedScaleFactor=Math.hypot(this.baseTransform[0],this.baseTransform[2]),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(e,t,r,a){var i=e.argsArray,s=e.fnArray,u=t||0,l=i.length
if(l===u)return u
for(var c,h=l-u>10&&"function"==typeof r,f=h?Date.now()+15:0,d=0,p=this.commonObjs,v=this.objs;;){if(void 0!==a&&u===a.nextBreakPoint)return a.breakIt(u,r),u
if((c=s[u])!==n.OPS.dependency)this[c].apply(this,i[u])
else{var g,y=o(i[u])
try{for(y.s();!(g=y.n()).done;){var m=g.value,b=m.startsWith("g_")?p:v
if(!b.has(m))return b.get(m,r),u}}catch(_){y.e(_)}finally{y.f()}}if(++u===l)return u
if(h&&++d>10){if(Date.now()>f)return r(),u
d=0}}},endDrawing:function(){for(;this.stateStack.length||null!==this.current.activeSMask;)this.restore()
this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),this.webGLContext.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(e){this.current.lineWidth=e,this.ctx.lineWidth=e},setLineCap:function(e){this.ctx.lineCap=m[e]},setLineJoin:function(e){this.ctx.lineJoin=b[e]},setMiterLimit:function(e){this.ctx.miterLimit=e},setDash:function(e,t){var r=this.ctx
void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)},setRenderingIntent:function(e){},setFlatness:function(e){},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],a=n[0],i=n[1]
switch(a){case"LW":this.setLineWidth(i)
break
case"LC":this.setLineCap(i)
break
case"LJ":this.setLineJoin(i)
break
case"ML":this.setMiterLimit(i)
break
case"D":this.setDash(i[0],i[1])
break
case"RI":this.setRenderingIntent(i)
break
case"FL":this.setFlatness(i)
break
case"Font":this.setFont(i[0],i[1])
break
case"CA":this.current.strokeAlpha=n[1]
break
case"ca":this.current.fillAlpha=n[1],this.ctx.globalAlpha=n[1]
break
case"BM":this.ctx.globalCompositeOperation=i
break
case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup()),this.current.activeSMask=i?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null
break
case"TR":this.current.transferMaps=i}}},beginSMaskGroup:function(){var e=this.current.activeSMask,t=e.canvas.width,r=e.canvas.height,n="smaskGroupAt"+this.groupLevel,a=this.cachedCanvases.getCanvas(n,t,r,!0),i=this.ctx,o=i.mozCurrentTransform
this.ctx.save()
var u=a.context
u.scale(1/e.scaleX,1/e.scaleY),u.translate(-e.offsetX,-e.offsetY),u.transform.apply(u,o),e.startTransformInverse=u.mozCurrentTransformInverse,s(i,u),this.ctx=u,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(i),this.groupLevel++},suspendSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),y(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),this.ctx.save(),s(e,this.ctx),this.current.resumeSMaskCtx=e
var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.restore()},resumeSMaskGroup:function(){var e=this.current.resumeSMaskCtx,t=this.ctx
this.ctx=e,this.groupStack.push(t),this.groupLevel++},endSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),y(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),s(e,this.ctx)
var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t)},save:function(){this.ctx.save()
var e=this.current
this.stateStack.push(e),this.current=e.clone(),this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup(),null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup(),0!==this.stateStack.length?(this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this._cachedGetSinglePixelWidth=null):this.current.activeSMask=null},transform:function(e,t,r,n,a,i){this.ctx.transform(e,t,r,n,a,i),this._cachedGetSinglePixelWidth=null},constructPath:function(e,t){for(var r=this.ctx,a=this.current,i=a.x,o=a.y,s=0,u=0,l=e.length;s<l;s++)switch(0|e[s]){case n.OPS.rectangle:i=t[u++],o=t[u++]
var c=t[u++],h=t[u++],f=i+c,d=o+h
r.moveTo(i,o),0===c||0===h?r.lineTo(f,d):(r.lineTo(f,o),r.lineTo(f,d),r.lineTo(i,d)),r.closePath()
break
case n.OPS.moveTo:i=t[u++],o=t[u++],r.moveTo(i,o)
break
case n.OPS.lineTo:i=t[u++],o=t[u++],r.lineTo(i,o)
break
case n.OPS.curveTo:i=t[u+4],o=t[u+5],r.bezierCurveTo(t[u],t[u+1],t[u+2],t[u+3],i,o),u+=6
break
case n.OPS.curveTo2:r.bezierCurveTo(i,o,t[u],t[u+1],t[u+2],t[u+3]),i=t[u+2],o=t[u+3],u+=4
break
case n.OPS.curveTo3:i=t[u+2],o=t[u+3],r.bezierCurveTo(t[u],t[u+1],i,o,i,o),u+=4
break
case n.OPS.closePath:r.closePath()}a.setCurrentPoint(i,o)},closePath:function(){this.ctx.closePath()},stroke:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.strokeColor
if(t.globalAlpha=this.current.strokeAlpha,this.contentVisible)if("object"===i(r)&&null!=r&&r.getPattern){t.save()
var a=t.mozCurrentTransform,o=n.Util.singularValueDecompose2dScale(a)[0]
t.strokeStyle=r.getPattern(t,this)
var s=this.getSinglePixelWidth(),u=this.current.lineWidth*o
s<0&&-s>=u?(t.resetTransform(),t.lineWidth=Math.round(this._combinedScaleFactor)):t.lineWidth=Math.max(s,u),t.stroke(),t.restore()}else{var l=this.getSinglePixelWidth()
l<0&&-l>=this.current.lineWidth?(t.save(),t.resetTransform(),t.lineWidth=Math.round(this._combinedScaleFactor),t.stroke(),t.restore()):(t.lineWidth=Math.max(l,this.current.lineWidth),t.stroke())}e&&this.consumePath(),t.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.fillColor,n=!1
this.current.patternFill&&(t.save(),this.baseTransform&&t.setTransform.apply(t,this.baseTransform),t.fillStyle=r.getPattern(t,this),n=!0),this.contentVisible&&(this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill()),n&&t.restore(),e&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=_},eoClip:function(){this.pendingClip=A},beginText:function(){this.current.textMatrix=n.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var e=this.pendingTextPaths,t=this.ctx
if(void 0!==e){t.save(),t.beginPath()
for(var r=0;r<e.length;r++){var n=e[r]
t.setTransform.apply(t,n.transform),t.translate(n.x,n.y),n.addToPath(t,n.fontSize)}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths}else t.beginPath()},setCharSpacing:function(e){this.current.charSpacing=e},setWordSpacing:function(e){this.current.wordSpacing=e},setHScale:function(e){this.current.textHScale=e/100},setLeading:function(e){this.current.leading=-e},setFont:function(e,t){var r=this.commonObjs.get(e),a=this.current
if(!r)throw new Error("Can't find font for ".concat(e))
if(a.fontMatrix=r.fontMatrix||n.FONT_IDENTITY_MATRIX,0!==a.fontMatrix[0]&&0!==a.fontMatrix[3]||(0,n.warn)("Invalid font matrix for font "+e),t<0?(t=-t,a.fontDirection=-1):a.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var i=r.loadedName||"sans-serif",o="normal"
r.black?o="900":r.bold&&(o="bold")
var s=r.italic?"italic":"normal",u='"'.concat(i,'", ').concat(r.fallbackName),l=t
t<16?l=16:t>100&&(l=100),this.current.fontSizeScale=t/l,this.ctx.font="".concat(s," ").concat(o," ").concat(l,"px ").concat(u)}},setTextRenderingMode:function(e){this.current.textRenderingMode=e},setTextRise:function(e){this.current.textRise=e},moveText:function(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},setTextMatrix:function(e,t,r,n,a,i){this.current.textMatrix=[e,t,r,n,a,i],this.current.textMatrixScale=Math.sqrt(e*e+t*t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(e,t,r,a,i){var o,s=this.ctx,u=this.current,l=u.font,c=u.textRenderingMode,h=u.fontSize/u.fontSizeScale,f=c&n.TextRenderingMode.FILL_STROKE_MASK,d=!!(c&n.TextRenderingMode.ADD_TO_PATH_FLAG),p=u.patternFill&&!l.missingFile;((l.disableFontFace||d||p)&&(o=l.getPathGenerator(this.commonObjs,e)),l.disableFontFace||p?(s.save(),s.translate(t,r),s.beginPath(),o(s,h),a&&s.setTransform.apply(s,a),f!==n.TextRenderingMode.FILL&&f!==n.TextRenderingMode.FILL_STROKE||s.fill(),f!==n.TextRenderingMode.STROKE&&f!==n.TextRenderingMode.FILL_STROKE||(i&&(s.resetTransform(),s.lineWidth=Math.round(this._combinedScaleFactor)),s.stroke()),s.restore()):(f!==n.TextRenderingMode.FILL&&f!==n.TextRenderingMode.FILL_STROKE||s.fillText(e,t,r),f!==n.TextRenderingMode.STROKE&&f!==n.TextRenderingMode.FILL_STROKE||(i?(s.save(),s.moveTo(t,r),s.resetTransform(),s.lineWidth=Math.round(this._combinedScaleFactor),s.strokeText(e,0,0),s.restore()):s.strokeText(e,t,r))),d)&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:s.mozCurrentTransform,x:t,y:r,fontSize:h,addToPath:o})},get isFontSubpixelAAEnabled(){var e=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10).context
e.scale(1.5,1),e.fillText("I",0,10)
for(var t=e.getImageData(0,0,10,10).data,r=!1,a=3;a<t.length;a+=4)if(t[a]>0&&t[a]<255){r=!0
break}return(0,n.shadow)(this,"isFontSubpixelAAEnabled",r)},showText:function(e){var t=this.current,r=t.font
if(r.isType3Font)return this.showType3Text(e)
var a=t.fontSize
if(0!==a){var i,o=this.ctx,s=t.fontSizeScale,u=t.charSpacing,l=t.wordSpacing,c=t.fontDirection,h=t.textHScale*c,f=e.length,d=r.vertical,p=d?1:-1,v=r.defaultVMetrics,g=a*t.fontMatrix[0],y=t.textRenderingMode===n.TextRenderingMode.FILL&&!r.disableFontFace&&!t.patternFill
if(o.save(),t.patternFill){o.save()
var m=t.fillColor.getPattern(o,this)
i=o.mozCurrentTransform,o.restore(),o.fillStyle=m}o.transform.apply(o,t.textMatrix),o.translate(t.x,t.y+t.textRise),c>0?o.scale(h,-1):o.scale(h,1)
var b=t.lineWidth,_=!1,A=t.textMatrixScale
if(0===A||0===b){var S=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
S!==n.TextRenderingMode.STROKE&&S!==n.TextRenderingMode.FILL_STROKE||(this._cachedGetSinglePixelWidth=null,_=(b=this.getSinglePixelWidth())<0)}else b/=A
1!==s&&(o.scale(s,s),b/=s),o.lineWidth=b
var w,k=0
for(w=0;w<f;++w){var x=e[w]
if((0,n.isNum)(x))k+=p*x*a/1e3
else{var C=!1,P=(x.isSpace?l:0)+u,R=x.fontChar,T=x.accent,E=void 0,O=void 0,F=x.width
if(d){var L=x.vmetric||v,I=-(x.vmetric?L[1]:.5*F)*g,M=L[2]*g
F=L?-L[0]:F,E=I/s,O=(k+M)/s}else E=k/s,O=0
if(r.remeasure&&F>0){var j=1e3*o.measureText(R).width/a*s
if(F<j&&this.isFontSubpixelAAEnabled){var D=F/j
C=!0,o.save(),o.scale(D,1),E/=D}else F!==j&&(E+=(F-j)/2e3*a/s)}if(this.contentVisible&&(x.isInFont||r.missingFile))if(y&&!T)o.fillText(R,E,O)
else if(this.paintChar(R,E,O,i,_),T){var N=E+a*T.offset.x/s,q=O-a*T.offset.y/s
this.paintChar(T.fontChar,N,q,i,_)}k+=d?F*g-P*c:F*g+P*c,C&&o.restore()}}d?t.y-=k:t.x+=k*h,o.restore()}},showType3Text:function(e){var t,r,a,i,o=this.ctx,s=this.current,u=s.font,l=s.fontSize,c=s.fontDirection,h=u.vertical?1:-1,f=s.charSpacing,d=s.wordSpacing,p=s.textHScale*c,v=s.fontMatrix||n.FONT_IDENTITY_MATRIX,g=e.length
if(!(s.textRenderingMode===n.TextRenderingMode.INVISIBLE)&&0!==l){for(this._cachedGetSinglePixelWidth=null,o.save(),o.transform.apply(o,s.textMatrix),o.translate(s.x,s.y),o.scale(p,c),t=0;t<g;++t)if(r=e[t],(0,n.isNum)(r))i=h*r*l/1e3,this.ctx.translate(i,0),s.x+=i*p
else{var y=(r.isSpace?d:0)+f,m=u.charProcOperatorList[r.operatorListId]
if(m)this.contentVisible&&(this.processingType3=r,this.save(),o.scale(l,l),o.transform.apply(o,v),this.executeOperatorList(m),this.restore()),a=n.Util.applyTransform([r.width,0],v)[0]*l+y,o.translate(a,0),s.x+=a*p
else(0,n.warn)('Type3 character "'.concat(r.operatorListId,'" is not available.'))}o.restore(),this.processingType3=null}},setCharWidth:function(e,t){},setCharWidthAndBounds:function(e,t,r,n,a,i){this.ctx.rect(r,n,a-r,i-n),this.clip(),this.endPath()},getColorN_Pattern:function(t){var r,n=this
if("TilingPattern"===t[0]){var i=t[1],o=this.baseTransform||this.ctx.mozCurrentTransform.slice(),s={createCanvasGraphics:function(t){return new e(t,n.commonObjs,n.objs,n.canvasFactory,n.webGLContext)}}
r=new a.TilingPattern(t,i,this.ctx,s,o)}else r=(0,a.getShadingPatternFromIR)(t)
return r},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(e,t,r){var a=n.Util.makeHexColor(e,t,r)
this.ctx.strokeStyle=a,this.current.strokeColor=a},setFillRGBColor:function(e,t,r){var a=n.Util.makeHexColor(e,t,r)
this.ctx.fillStyle=a,this.current.fillColor=a,this.current.patternFill=!1},shadingFill:function(e){if(this.contentVisible){var t=this.ctx
this.save()
var r=(0,a.getShadingPatternFromIR)(e)
t.fillStyle=r.getPattern(t,this,!0)
var i=t.mozCurrentTransformInverse
if(i){var o=t.canvas,s=o.width,u=o.height,l=n.Util.applyTransform([0,0],i),c=n.Util.applyTransform([0,u],i),h=n.Util.applyTransform([s,0],i),f=n.Util.applyTransform([s,u],i),d=Math.min(l[0],c[0],h[0],f[0]),p=Math.min(l[1],c[1],h[1],f[1]),v=Math.max(l[0],c[0],h[0],f[0]),g=Math.max(l[1],c[1],h[1],f[1])
this.ctx.fillRect(d,p,v-d,g-p)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.restore()}},beginInlineImage:function(){(0,n.unreachable)("Should not call beginInlineImage")},beginImageData:function(){(0,n.unreachable)("Should not call beginImageData")},paintFormXObjectBegin:function(e,t){if(this.contentVisible&&(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(e)&&6===e.length&&this.transform.apply(this,e),this.baseTransform=this.ctx.mozCurrentTransform,t)){var r=t[2]-t[0],n=t[3]-t[1]
this.ctx.rect(t[0],t[1],r,n),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.contentVisible&&(this.restore(),this.baseTransform=this.baseTransformStack.pop())},beginGroup:function(e){if(this.contentVisible){this.save()
var t=this.ctx
e.isolated||(0,n.info)("TODO: Support non-isolated groups."),e.knockout&&(0,n.warn)("Knockout groups not supported.")
var r=t.mozCurrentTransform
if(e.matrix&&t.transform.apply(t,e.matrix),!e.bbox)throw new Error("Bounding box is required.")
var a=n.Util.getAxialAlignedBoundingBox(e.bbox,t.mozCurrentTransform),i=[0,0,t.canvas.width,t.canvas.height]
a=n.Util.intersect(a,i)||[0,0,0,0]
var o=Math.floor(a[0]),l=Math.floor(a[1]),c=Math.max(Math.ceil(a[2])-o,1),h=Math.max(Math.ceil(a[3])-l,1),f=1,d=1
c>u&&(f=c/u,c=u),h>u&&(d=h/u,h=u)
var p="groupAt"+this.groupLevel
e.smask&&(p+="_smask_"+this.smaskCounter++%2)
var v=this.cachedCanvases.getCanvas(p,c,h,!0),g=v.context
g.scale(1/f,1/d),g.translate(-o,-l),g.transform.apply(g,r),e.smask?this.smaskStack.push({canvas:v.canvas,context:g,offsetX:o,offsetY:l,scaleX:f,scaleY:d,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(o,l),t.scale(f,d)),s(t,g),this.ctx=g,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++,this.current.activeSMask=null}},endGroup:function(e){if(this.contentVisible){this.groupLevel--
var t=this.ctx
this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,e.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(t.canvas,0,0),this.restore()}},beginAnnotations:function(){this.save(),this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(e,t,r){if(this.save(),d(this.ctx),this.current=new f,Array.isArray(e)&&4===e.length){var n=e[2]-e[0],a=e[3]-e[1]
this.ctx.rect(e[0],e[1],n,a),this.clip(),this.endPath()}this.transform.apply(this,t),this.transform.apply(this,r)},endAnnotation:function(){this.restore()},paintImageMaskXObject:function(e){if(this.contentVisible){var t=this.ctx,n=e.width,a=e.height,i=this.current.fillColor,o=this.current.patternFill,s=this.processingType3
if(s&&void 0===s.compiled&&(s.compiled=n<=1e3&&a<=1e3?function(e){var t,r,n,a,i=e.width,o=e.height,s=i+1,u=new Uint8Array(s*(o+1)),l=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),c=i+7&-8,h=e.data,f=new Uint8Array(c*o),d=0
for(t=0,r=h.length;t<r;t++)for(var p=h[t],v=128;v>0;)f[d++]=p&v?0:255,v>>=1
var g=0
for(0!==f[d=0]&&(u[0]=1,++g),n=1;n<i;n++)f[d]!==f[d+1]&&(u[n]=f[d]?2:1,++g),d++
for(0!==f[d]&&(u[n]=2,++g),t=1;t<o;t++){a=t*s,f[(d=t*c)-c]!==f[d]&&(u[a]=f[d]?1:8,++g)
var y=(f[d]?4:0)+(f[d-c]?8:0)
for(n=1;n<i;n++)l[y=(y>>2)+(f[d+1]?4:0)+(f[d-c+1]?8:0)]&&(u[a+n]=l[y],++g),d++
if(f[d-c]!==f[d]&&(u[a+n]=f[d]?2:4,++g),g>1e3)return null}for(a=t*s,0!==f[d=c*(o-1)]&&(u[a]=8,++g),n=1;n<i;n++)f[d]!==f[d+1]&&(u[a+n]=f[d]?4:8,++g),d++
if(0!==f[d]&&(u[a+n]=4,++g),g>1e3)return null
var m=new Int32Array([0,s,-1,0,-s,0,0,0,1]),b=[]
for(t=0;g&&t<=o;t++){for(var _=t*s,A=_+i;_<A&&!u[_];)_++
if(_!==A){var S=[_%s,t],w=_,k=u[_]
do{var x=m[k]
do{_+=x}while(!u[_])
var C=u[_]
5!==C&&10!==C?(k=C,u[_]=0):(k=C&51*k>>4,u[_]&=k>>2|k<<2),S.push(_%s),S.push(_/s|0),u[_]||--g}while(w!==_)
b.push(S),--t}}return function(e){e.save(),e.scale(1/i,-1/o),e.translate(0,-o),e.beginPath()
for(var t=0,r=b.length;t<r;t++){var n=b[t]
e.moveTo(n[0],n[1])
for(var a=2,s=n.length;a<s;a+=2)e.lineTo(n[a],n[a+1])}e.fill(),e.beginPath(),e.restore()}}({data:e.data,width:n,height:a}):null),null!=s&&s.compiled)s.compiled(t)
else{var u=this.cachedCanvases.getCanvas("maskCanvas",n,a),l=u.context
l.save(),r(l,e),l.globalCompositeOperation="source-in",l.fillStyle=o?i.getPattern(l,this):i,l.fillRect(0,0,n,a),l.restore(),this.paintInlineImageXObject(u.canvas)}}},paintImageMaskXObjectRepeat:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0
if(this.contentVisible){var s=e.width,u=e.height,l=this.current.fillColor,c=this.current.patternFill,h=this.cachedCanvases.getCanvas("maskCanvas",s,u),f=h.context
f.save(),r(f,e),f.globalCompositeOperation="source-in",f.fillStyle=c?l.getPattern(f,this):l,f.fillRect(0,0,s,u),f.restore()
for(var d=this.ctx,p=0,v=o.length;p<v;p+=2)d.save(),d.transform(t,n,a,i,o[p],o[p+1]),d.scale(1,-1),d.drawImage(h.canvas,0,0,s,u,0,-1,1,1),d.restore()}},paintImageMaskXObjectGroup:function(e){if(this.contentVisible)for(var t=this.ctx,n=this.current.fillColor,a=this.current.patternFill,i=0,o=e.length;i<o;i++){var s=e[i],u=s.width,l=s.height,c=this.cachedCanvases.getCanvas("maskCanvas",u,l),h=c.context
h.save(),r(h,s),h.globalCompositeOperation="source-in",h.fillStyle=a?n.getPattern(h,this):n,h.fillRect(0,0,u,l),h.restore(),t.save(),t.transform.apply(t,s.transform),t.scale(1,-1),t.drawImage(c.canvas,0,0,u,l,0,-1,1,1),t.restore()}},paintImageXObject:function(e){if(this.contentVisible){var t=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image isn't ready yet")}},paintImageXObjectRepeat:function(e,t,r,a){if(this.contentVisible){var i=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
if(i){for(var o=i.width,s=i.height,u=[],l=0,c=a.length;l<c;l+=2)u.push({transform:[t,0,0,r,a[l],a[l+1]],x:0,y:0,w:o,h:s})
this.paintInlineImageXObjectGroup(i,u)}else(0,n.warn)("Dependent image isn't ready yet")}},paintInlineImageXObject:function(e){if(this.contentVisible){var r=e.width,n=e.height,a=this.ctx
this.save(),a.scale(1/r,-1/n)
var i,o,s,u=a.mozCurrentTransformInverse,l=u[0],c=u[1],h=Math.max(Math.sqrt(l*l+c*c),1),f=u[2],d=u[3],p=Math.max(Math.sqrt(f*f+d*d),1)
"function"==typeof HTMLElement&&e instanceof HTMLElement||!e.data?i=e:(t(s=(o=this.cachedCanvases.getCanvas("inlineImage",r,n)).context,e,this.current.transferMaps),i=o.canvas)
for(var v=r,g=n,y="prescale1";h>2&&v>1||p>2&&g>1;){var m=v,b=g
h>2&&v>1&&(h/=v/(m=Math.ceil(v/2))),p>2&&g>1&&(p/=g/(b=Math.ceil(g/2))),(s=(o=this.cachedCanvases.getCanvas(y,m,b)).context).clearRect(0,0,m,b),s.drawImage(i,0,0,v,g,0,0,m,b),i=o.canvas,v=m,g=b,y="prescale1"===y?"prescale2":"prescale1"}if(a.drawImage(i,0,0,v,g,0,-n,r,n),this.imageLayer){var _=this.getCanvasPosition(0,-n)
this.imageLayer.appendImage({imgData:e,left:_[0],top:_[1],width:r/u[0],height:n/u[3]})}this.restore()}},paintInlineImageXObjectGroup:function(e,r){if(this.contentVisible){var n=this.ctx,a=e.width,i=e.height,o=this.cachedCanvases.getCanvas("inlineImage",a,i)
t(o.context,e,this.current.transferMaps)
for(var s=0,u=r.length;s<u;s++){var l=r[s]
if(n.save(),n.transform.apply(n,l.transform),n.scale(1,-1),n.drawImage(o.canvas,l.x,l.y,l.w,l.h,0,-1,1,1),this.imageLayer){var c=this.getCanvasPosition(l.x,l.y)
this.imageLayer.appendImage({imgData:e,left:c[0],top:c[1],width:a,height:i})}n.restore()}}},paintSolidColorImageMask:function(){this.contentVisible&&this.ctx.fillRect(0,0,1,1)},markPoint:function(e){},markPointProps:function(e,t){},beginMarkedContent:function(e){this.markedContentStack.push({visible:!0})},beginMarkedContentProps:function(e,t){"OC"===e?this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(t)}):this.markedContentStack.push({visible:!0}),this.contentVisible=this.isContentVisible()},endMarkedContent:function(){this.markedContentStack.pop(),this.contentVisible=this.isContentVisible()},beginCompat:function(){},endCompat:function(){},consumePath:function(){var e=this.ctx
this.pendingClip&&(this.pendingClip===A?e.clip("evenodd"):e.clip(),this.pendingClip=null),e.beginPath()},getSinglePixelWidth:function(){if(null===this._cachedGetSinglePixelWidth){var e=this.ctx.mozCurrentTransform,t=Math.abs(e[0]*e[3]-e[2]*e[1]),r=Math.pow(e[0],2)+Math.pow(e[2],2),n=Math.pow(e[1],2)+Math.pow(e[3],2),a=Math.sqrt(Math.max(r,n))/t
r!==n&&this._combinedScaleFactor*a>1?this._cachedGetSinglePixelWidth=-this._combinedScaleFactor*a:t>Number.EPSILON?this._cachedGetSinglePixelWidth=1.0000001*a:this._cachedGetSinglePixelWidth=1}return this._cachedGetSinglePixelWidth},getCanvasPosition:function(e,t){var r=this.ctx.mozCurrentTransform
return[r[0]*e+r[2]*t+r[4],r[1]*e+r[3]*t+r[5]]},isContentVisible:function(){for(var e=this.markedContentStack.length-1;e>=0;e--)if(!this.markedContentStack[e].visible)return!1
return!0}},n.OPS)e.prototype[n.OPS[S]]=e.prototype[S]
return e}()
t.CanvasGraphics=d},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getShadingPatternFromIR=function(e){var t=a[e[0]]
if(!t)throw new Error("Unknown IR type: ".concat(e[0]))
return t.fromIR(e)},t.TilingPattern=void 0
var n=r(4),a={}
function i(e,t){if(t&&"undefined"!=typeof Path2D){var r=t[2]-t[0],n=t[3]-t[1],a=new Path2D
a.rect(t[0],t[1],r,n),e.clip(a)}}a.RadialAxial={fromIR:function(e){var t=e[1],r=e[2],n=e[3],a=e[4],o=e[5],s=e[6],u=e[7]
return{getPattern:function(e){var l
i(e,r),"axial"===t?l=e.createLinearGradient(a[0],a[1],o[0],o[1]):"radial"===t&&(l=e.createRadialGradient(a[0],a[1],s,o[0],o[1],u))
for(var c=0,h=n.length;c<h;++c){var f=n[c]
l.addColorStop(f[0],f[1])}return l}}}}
var o=function(){function e(e,t,r,n,a,i,o,s){var u,l=t.coords,c=t.colors,h=e.data,f=4*e.width
l[r+1]>l[n+1]&&(u=r,r=n,n=u,u=i,i=o,o=u),l[n+1]>l[a+1]&&(u=n,n=a,a=u,u=o,o=s,s=u),l[r+1]>l[n+1]&&(u=r,r=n,n=u,u=i,i=o,o=u)
var d=(l[r]+t.offsetX)*t.scaleX,p=(l[r+1]+t.offsetY)*t.scaleY,v=(l[n]+t.offsetX)*t.scaleX,g=(l[n+1]+t.offsetY)*t.scaleY,y=(l[a]+t.offsetX)*t.scaleX,m=(l[a+1]+t.offsetY)*t.scaleY
if(!(p>=m))for(var b,_,A,S,w,k,x,C,P=c[i],R=c[i+1],T=c[i+2],E=c[o],O=c[o+1],F=c[o+2],L=c[s],I=c[s+1],M=c[s+2],j=Math.round(p),D=Math.round(m),N=j;N<=D;N++){if(N<g){var q=void 0
b=d-(d-v)*(q=N<p?0:p===g?1:(p-N)/(p-g)),_=P-(P-E)*q,A=R-(R-O)*q,S=T-(T-F)*q}else{var U=void 0
b=v-(v-y)*(U=N>m?1:g===m?0:(g-N)/(g-m)),_=E-(E-L)*U,A=O-(O-I)*U,S=F-(F-M)*U}var W=void 0
w=d-(d-y)*(W=N<p?0:N>m?1:(p-N)/(p-m)),k=P-(P-L)*W,x=R-(R-I)*W,C=T-(T-M)*W
for(var B=Math.round(Math.min(b,w)),G=Math.round(Math.max(b,w)),z=f*N+4*B,H=B;H<=G;H++)(W=(b-H)/(b-w))<0?W=0:W>1&&(W=1),h[z++]=_-(_-k)*W|0,h[z++]=A-(A-x)*W|0,h[z++]=S-(S-C)*W|0,h[z++]=255}}function t(t,r,n){var a,i,o=r.coords,s=r.colors
switch(r.type){case"lattice":var u=r.verticesPerRow,l=Math.floor(o.length/u)-1,c=u-1
for(a=0;a<l;a++)for(var h=a*u,f=0;f<c;f++,h++)e(t,n,o[h],o[h+1],o[h+u],s[h],s[h+1],s[h+u]),e(t,n,o[h+u+1],o[h+1],o[h+u],s[h+u+1],s[h+1],s[h+u])
break
case"triangles":for(a=0,i=o.length;a<i;a+=3)e(t,n,o[a],o[a+1],o[a+2],s[a],s[a+1],s[a+2])
break
default:throw new Error("illegal figure")}}return function(e,r,n,a,i,o,s,u){var l,c,h,f,d=Math.floor(e[0]),p=Math.floor(e[1]),v=Math.ceil(e[2])-d,g=Math.ceil(e[3])-p,y=Math.min(Math.ceil(Math.abs(v*r[0]*1.1)),3e3),m=Math.min(Math.ceil(Math.abs(g*r[1]*1.1)),3e3),b=v/y,_=g/m,A={coords:n,colors:a,offsetX:-d,offsetY:-p,scaleX:1/b,scaleY:1/_},S=y+4,w=m+4
if(u.isEnabled)l=u.drawFigures({width:y,height:m,backgroundColor:o,figures:i,context:A}),(c=s.getCanvas("mesh",S,w,!1)).context.drawImage(l,2,2),l=c.canvas
else{var k=(c=s.getCanvas("mesh",S,w,!1)).context,x=k.createImageData(y,m)
if(o){var C=x.data
for(h=0,f=C.length;h<f;h+=4)C[h]=o[0],C[h+1]=o[1],C[h+2]=o[2],C[h+3]=255}for(h=0;h<i.length;h++)t(x,i[h],A)
k.putImageData(x,2,2),l=c.canvas}return{canvas:l,offsetX:d-2*b,offsetY:p-2*_,scaleX:b,scaleY:_}}}()
a.Mesh={fromIR:function(e){var t=e[2],r=e[3],a=e[4],s=e[5],u=e[6],l=e[7],c=e[8]
return{getPattern:function(e,h,f){var d
if(i(e,l),f)d=n.Util.singularValueDecompose2dScale(e.mozCurrentTransform)
else if(d=n.Util.singularValueDecompose2dScale(h.baseTransform),u){var p=n.Util.singularValueDecompose2dScale(u)
d=[d[0]*p[0],d[1]*p[1]]}var v=o(s,d,t,r,a,f?null:c,h.cachedCanvases,h.webGLContext)
return f||(e.setTransform.apply(e,h.baseTransform),u&&e.transform.apply(e,u)),e.translate(v.offsetX,v.offsetY),e.scale(v.scaleX,v.scaleY),e.createPattern(v.canvas,"no-repeat")}}}},a.Dummy={fromIR:function(){return{getPattern:function(){return"hotpink"}}}}
var s=function(){var e=1,t=2
function r(e,t,r,n,a){this.operatorList=e[2],this.matrix=e[3]||[1,0,0,1,0,0],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.color=t,this.canvasGraphicsFactory=n,this.baseTransform=a,this.ctx=r}return r.prototype={createPatternCanvas:function(e){var t=this.operatorList,r=this.bbox,a=this.xstep,i=this.ystep,o=this.paintType,s=this.tilingType,u=this.color,l=this.canvasGraphicsFactory;(0,n.info)("TilingType: "+s)
var c=r[0],h=r[1],f=r[2],d=r[3],p=n.Util.singularValueDecompose2dScale(this.matrix),v=n.Util.singularValueDecompose2dScale(this.baseTransform),g=[p[0]*v[0],p[1]*v[1]],y=this.getSizeAndScale(a,this.ctx.canvas.width,g[0]),m=this.getSizeAndScale(i,this.ctx.canvas.height,g[1]),b=e.cachedCanvases.getCanvas("pattern",y.size,m.size,!0),_=b.context,A=l.createCanvasGraphics(_)
return A.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(A,o,u),A.transform(y.scale,0,0,m.scale,0,0),A.transform(1,0,0,1,-c,-h),this.clipBbox(A,r,c,h,f,d),A.executeOperatorList(t),this.ctx.transform(1,0,0,1,c,h),this.ctx.scale(1/y.scale,1/m.scale),b.canvas},getSizeAndScale:function(e,t,r){e=Math.abs(e)
var n=Math.max(3e3,t),a=Math.ceil(e*r)
return a>=n?a=n:r=a/e,{scale:r,size:a}},clipBbox:function(e,t,r,n,a,i){if(Array.isArray(t)&&4===t.length){var o=a-r,s=i-n
e.ctx.rect(r,n,o,s),e.clip(),e.endPath()}},setFillAndStrokeStyleToContext:function(r,a,i){var o=r.ctx,s=r.current
switch(a){case e:var u=this.ctx
o.fillStyle=u.fillStyle,o.strokeStyle=u.strokeStyle,s.fillColor=u.fillStyle,s.strokeColor=u.strokeStyle
break
case t:var l=n.Util.makeHexColor(i[0],i[1],i[2])
o.fillStyle=l,o.strokeStyle=l,s.fillColor=l,s.strokeColor=l
break
default:throw new n.FormatError("Unsupported paint type: ".concat(a))}},getPattern:function(e,t){(e=this.ctx).setTransform.apply(e,this.baseTransform),e.transform.apply(e,this.matrix)
var r=this.createPatternCanvas(t)
return e.createPattern(r,"repeat")}},r}()
t.TilingPattern=s},(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalWorkerOptions=void 0
var r=Object.create(null)
t.GlobalWorkerOptions=r,r.workerPort=void 0===r.workerPort?null:r.workerPort,r.workerSrc=void 0===r.workerSrc?"":r.workerSrc},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0
var n,a=(n=r(2))&&n.__esModule?n:{default:n},i=r(4)
function o(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=1,c=2,h=1,f=2,d=3,p=4,v=5,g=6,y=7,m=8
function b(e){if("object"!==u(e)||null===e)return e
switch(e.name){case"AbortException":return new i.AbortException(e.message)
case"MissingPDFException":return new i.MissingPDFException(e.message)
case"UnexpectedResponseException":return new i.UnexpectedResponseException(e.message,e.status)
case"UnknownErrorException":return new i.UnknownErrorException(e.message,e.details)
default:return new i.UnknownErrorException(e.message,e.toString())}}var _=function(){function e(t,r,n){var a=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.sourceName=t,this.targetName=r,this.comObj=n,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===a.sourceName)if(t.stream)a._processStreamMessage(t)
else if(t.callback){var r=t.callbackId,i=a.callbackCapabilities[r]
if(!i)throw new Error("Cannot resolve callback ".concat(r))
if(delete a.callbackCapabilities[r],t.callback===l)i.resolve(t.data)
else{if(t.callback!==c)throw new Error("Unexpected callback case")
i.reject(b(t.reason))}}else{var o=a.actionHandler[t.action]
if(!o)throw new Error("Unknown action from worker: ".concat(t.action))
if(t.callbackId){var s=a.sourceName,u=t.sourceName
new Promise((function(e){e(o(t.data))})).then((function(e){n.postMessage({sourceName:s,targetName:u,callback:l,callbackId:t.callbackId,data:e})}),(function(e){n.postMessage({sourceName:s,targetName:u,callback:c,callbackId:t.callbackId,reason:b(e)})}))}else t.streamId?a._createStreamSink(t):o(t.data)}},n.addEventListener("message",this._onComObjOnMessage)}var t,r,n,u,_
return t=e,(r=[{key:"on",value:function(e,t){var r=this.actionHandler
if(r[e])throw new Error('There is already an actionName called "'.concat(e,'"'))
r[e]=t}},{key:"send",value:function(e,t,r){this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},r)}},{key:"sendWithPromise",value:function(e,t,r){var n=this.callbackId++,a=(0,i.createPromiseCapability)()
this.callbackCapabilities[n]=a
try{this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:n,data:t},r)}catch(o){a.reject(o)}return a.promise}},{key:"sendWithStream",value:function(e,t,r,n){var a=this,o=this.streamId++,s=this.sourceName,u=this.targetName,l=this.comObj
return new ReadableStream({start:function(r){var l=(0,i.createPromiseCapability)()
return a.streamControllers[o]={controller:r,startCall:l,pullCall:null,cancelCall:null,isClosed:!1},a._postMessage({sourceName:s,targetName:u,action:e,streamId:o,data:t,desiredSize:r.desiredSize},n),l.promise},pull:function(e){var t=(0,i.createPromiseCapability)()
return a.streamControllers[o].pullCall=t,l.postMessage({sourceName:s,targetName:u,stream:g,streamId:o,desiredSize:e.desiredSize}),t.promise},cancel:function(e){(0,i.assert)(e instanceof Error,"cancel must have a valid reason")
var t=(0,i.createPromiseCapability)()
return a.streamControllers[o].cancelCall=t,a.streamControllers[o].isClosed=!0,l.postMessage({sourceName:s,targetName:u,stream:h,streamId:o,reason:b(e)}),t.promise}},r)}},{key:"_createStreamSink",value:function(e){var t=this,r=this.actionHandler[e.action],n=e.streamId,a=this.sourceName,o=e.sourceName,s=this.comObj,u={enqueue:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2?arguments[2]:void 0
if(!this.isCancelled){var u=this.desiredSize
this.desiredSize-=r,u>0&&this.desiredSize<=0&&(this.sinkCapability=(0,i.createPromiseCapability)(),this.ready=this.sinkCapability.promise),t._postMessage({sourceName:a,targetName:o,stream:p,streamId:n,chunk:e},s)}},close:function(){this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:a,targetName:o,stream:d,streamId:n}),delete t.streamSinks[n])},error:function(e){(0,i.assert)(e instanceof Error,"error must have a valid reason"),this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:a,targetName:o,stream:v,streamId:n,reason:b(e)}))},sinkCapability:(0,i.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:e.desiredSize,ready:null}
u.sinkCapability.resolve(),u.ready=u.sinkCapability.promise,this.streamSinks[n]=u,new Promise((function(t){t(r(e.data,u))})).then((function(){s.postMessage({sourceName:a,targetName:o,stream:m,streamId:n,success:!0})}),(function(e){s.postMessage({sourceName:a,targetName:o,stream:m,streamId:n,reason:b(e)})}))}},{key:"_processStreamMessage",value:function(e){var t=e.streamId,r=this.sourceName,n=e.sourceName,a=this.comObj
switch(e.stream){case m:e.success?this.streamControllers[t].startCall.resolve():this.streamControllers[t].startCall.reject(b(e.reason))
break
case y:e.success?this.streamControllers[t].pullCall.resolve():this.streamControllers[t].pullCall.reject(b(e.reason))
break
case g:if(!this.streamSinks[t]){a.postMessage({sourceName:r,targetName:n,stream:y,streamId:t,success:!0})
break}this.streamSinks[t].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[t].sinkCapability.resolve(),this.streamSinks[t].desiredSize=e.desiredSize
var o=this.streamSinks[e.streamId].onPull
new Promise((function(e){e(o&&o())})).then((function(){a.postMessage({sourceName:r,targetName:n,stream:y,streamId:t,success:!0})}),(function(e){a.postMessage({sourceName:r,targetName:n,stream:y,streamId:t,reason:b(e)})}))
break
case p:if((0,i.assert)(this.streamControllers[t],"enqueue should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].controller.enqueue(e.chunk)
break
case d:if((0,i.assert)(this.streamControllers[t],"close should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].isClosed=!0,this.streamControllers[t].controller.close(),this._deleteStreamController(t)
break
case v:(0,i.assert)(this.streamControllers[t],"error should have stream controller"),this.streamControllers[t].controller.error(b(e.reason)),this._deleteStreamController(t)
break
case f:e.success?this.streamControllers[t].cancelCall.resolve():this.streamControllers[t].cancelCall.reject(b(e.reason)),this._deleteStreamController(t)
break
case h:if(!this.streamSinks[t])break
var s=this.streamSinks[e.streamId].onCancel
new Promise((function(t){t(s&&s(b(e.reason)))})).then((function(){a.postMessage({sourceName:r,targetName:n,stream:f,streamId:t,success:!0})}),(function(e){a.postMessage({sourceName:r,targetName:n,stream:f,streamId:t,reason:b(e)})})),this.streamSinks[t].sinkCapability.reject(b(e.reason)),this.streamSinks[t].isCancelled=!0,delete this.streamSinks[t]
break
default:throw new Error("Unexpected stream case")}}},{key:"_deleteStreamController",value:(u=a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([this.streamControllers[t].startCall,this.streamControllers[t].pullCall,this.streamControllers[t].cancelCall].map((function(e){return e&&e.promise})))
case 2:delete this.streamControllers[t]
case 3:case"end":return e.stop()}}),e,this)})),_=function(){var e=this,t=arguments
return new Promise((function(r,n){var a=u.apply(e,t)
function i(e){o(a,r,n,i,s,"next",e)}function s(e){o(a,r,n,i,s,"throw",e)}i(void 0)}))},function(e){return _.apply(this,arguments)})},{key:"_postMessage",value:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)}},{key:"destroy",value:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}])&&s(t.prototype,r),n&&s(t,n),e}()
t.MessageHandler=_},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0
var n=r(4),a=r(145)
function i(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),(0,n.assert)("string"==typeof t,"Metadata: input is not a string"),t=this._repair(t)
var r=new a.SimpleXMLParser({lowerCaseName:!0}).parseFromString(t)
this._metadataMap=new Map,r&&this._parse(r),this._data=t}var t,r,o
return t=e,(r=[{key:"_repair",value:function(e){return e.replace(/^[^<]+/,"").replace(/>\\376\\377([^<]+)/g,(function(e,t){for(var r=t.replace(/\\([0-3])([0-7])([0-7])/g,(function(e,t,r,n){return String.fromCharCode(64*t+8*r+1*n)})).replace(/&(amp|apos|gt|lt|quot);/g,(function(e,t){switch(t){case"amp":return"&"
case"apos":return"'"
case"gt":return">"
case"lt":return"<"
case"quot":return'"'}throw new Error("_repair: ".concat(t," isn't defined."))})),n="",a=0,i=r.length;a<i;a+=2){var o=256*r.charCodeAt(a)+r.charCodeAt(a+1)
n+=o>=32&&o<127&&60!==o&&62!==o&&38!==o?String.fromCharCode(o):"&#x"+(65536+o).toString(16).substring(1)+";"}return">"+n}))}},{key:"_getSequence",value:function(e){var t=e.nodeName
return"rdf:bag"!==t&&"rdf:seq"!==t&&"rdf:alt"!==t?null:e.childNodes.filter((function(e){return"rdf:li"===e.nodeName}))}},{key:"_getCreators",value:function(e){if("dc:creator"!==e.nodeName)return!1
if(!e.hasChildNodes())return!0
var t=e.childNodes[0],r=this._getSequence(t)||[]
return this._metadataMap.set(e.nodeName,r.map((function(e){return e.textContent.trim()}))),!0}},{key:"_parse",value:function(e){var t=e.documentElement
if("rdf:rdf"!==t.nodeName)for(t=t.firstChild;t&&"rdf:rdf"!==t.nodeName;)t=t.nextSibling
if(t&&"rdf:rdf"===t.nodeName&&t.hasChildNodes()){var r,n=i(t.childNodes)
try{for(n.s();!(r=n.n()).done;){var a=r.value
if("rdf:description"===a.nodeName){var o,s=i(a.childNodes)
try{for(s.s();!(o=s.n()).done;){var u=o.value,l=u.nodeName
"#text"!==l&&(this._getCreators(u)||this._metadataMap.set(l,u.textContent.trim()))}}catch(c){s.e(c)}finally{s.f()}}}}catch(c){n.e(c)}finally{n.f()}}}},{key:"getRaw",value:function(){return this._data}},{key:"get",value:function(e){var t
return null!==(t=this._metadataMap.get(e))&&void 0!==t?t:null}},{key:"getAll",value:function(){return(0,n.objectFromEntries)(this._metadataMap)}},{key:"has",value:function(e){return this._metadataMap.has(e)}}])&&s(t.prototype,r),o&&s(t,o),e}()
t.Metadata=u},(e,t,r)=>{"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleXMLParser=t.SimpleDOMNode=void 0
var a=r(4)
function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t)
if(n){var a=Object.getOwnPropertyDescriptor(n,t)
return a.get?a.get.call(r):a.value}})(e,t,r||e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var a=l(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=f(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return d(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var y=0,m=-2,b=-3,_=-4,A=-5,S=-6,w=-9
function k(e,t){var r=e[t]
return" "===r||"\n"===r||"\r"===r||"\t"===r}var x=function(){function e(){p(this,e)}return g(e,[{key:"_resolveEntities",value:function(e){var t=this
return e.replace(/&([^;]+);/g,(function(e,r){if("#x"===r.substring(0,2))return String.fromCodePoint(parseInt(r.substring(2),16))
if("#"===r.substring(0,1))return String.fromCodePoint(parseInt(r.substring(1),10))
switch(r){case"lt":return"<"
case"gt":return">"
case"amp":return"&"
case"quot":return'"'}return t.onResolveEntity(r)}))}},{key:"_parseContent",value:function(e,t){var r=[],n=t
function a(){for(;n<e.length&&k(e,n);)++n}for(;n<e.length&&!k(e,n)&&">"!==e[n]&&"/"!==e[n];)++n
var i=e.substring(t,n)
for(a();n<e.length&&">"!==e[n]&&"/"!==e[n]&&"?"!==e[n];){a()
for(var o,s="";n<e.length&&!k(e,n)&&"="!==e[n];)s+=e[n],++n
if(a(),"="!==e[n])return null;++n,a()
var u=e[n]
if('"'!==u&&"'"!==u)return null
var l=e.indexOf(u,++n)
if(l<0)return null
o=e.substring(n,l),r.push({name:s,value:this._resolveEntities(o)}),n=l+1,a()}return{name:i,attributes:r,parsed:n-t}}},{key:"_parseProcessingInstruction",value:function(e,t){var r=t
for(;r<e.length&&!k(e,r)&&">"!==e[r]&&"/"!==e[r];)++r
var n=e.substring(t,r);(function(){for(;r<e.length&&k(e,r);)++r})()
for(var a=r;r<e.length&&("?"!==e[r]||">"!==e[r+1]);)++r
return{name:n,value:e.substring(a,r),parsed:r-t}}},{key:"parseXml",value:function(e){for(var t=0;t<e.length;){var r=t
if("<"===e[t]){var n=void 0
switch(e[++r]){case"/":if(++r,(n=e.indexOf(">",r))<0)return void this.onError(w)
this.onEndElement(e.substring(r,n)),r=n+1
break
case"?":++r
var a=this._parseProcessingInstruction(e,r)
if("?>"!==e.substring(r+a.parsed,r+a.parsed+2))return void this.onError(b)
this.onPi(a.name,a.value),r+=a.parsed+2
break
case"!":if("--"===e.substring(r+1,r+3)){if((n=e.indexOf("--\x3e",r+3))<0)return void this.onError(A)
this.onComment(e.substring(r+3,n)),r=n+3}else if("[CDATA["===e.substring(r+1,r+8)){if((n=e.indexOf("]]>",r+8))<0)return void this.onError(m)
this.onCdata(e.substring(r+8,n)),r=n+3}else{if("DOCTYPE"!==e.substring(r+1,r+8))return void this.onError(S)
var i=e.indexOf("[",r+8),o=!1
if((n=e.indexOf(">",r+8))<0)return void this.onError(_)
if(i>0&&n>i){if((n=e.indexOf("]>",r+8))<0)return void this.onError(_)
o=!0}var s=e.substring(r+8,n+(o?1:0))
this.onDoctype(s),r=n+(o?2:1)}break
default:var u=this._parseContent(e,r)
if(null===u)return void this.onError(S)
var l=!1
if("/>"===e.substring(r+u.parsed,r+u.parsed+2))l=!0
else if(">"!==e.substring(r+u.parsed,r+u.parsed+1))return void this.onError(w)
this.onBeginElement(u.name,u.attributes,l),r+=u.parsed+(l?2:1)}}else{for(;r<e.length&&"<"!==e[r];)r++
var c=e.substring(t,r)
this.onText(this._resolveEntities(c))}t=r}}},{key:"onResolveEntity",value:function(e){return"&".concat(e,";")}},{key:"onPi",value:function(e,t){}},{key:"onComment",value:function(e){}},{key:"onCdata",value:function(e){}},{key:"onDoctype",value:function(e){}},{key:"onText",value:function(e){}},{key:"onBeginElement",value:function(e,t,r){}},{key:"onEndElement",value:function(e){}},{key:"onError",value:function(e){}}]),e}(),C=function(){function e(t,r){p(this,e),this.nodeName=t,this.nodeValue=r,Object.defineProperty(this,"parentNode",{value:null,writable:!0})}return g(e,[{key:"hasChildNodes",value:function(){return this.childNodes&&this.childNodes.length>0}},{key:"searchNode",value:function(e,t){if(t>=e.length)return this
for(var r=e[t],n=[],a=this;;){if(r.name===a.nodeName){if(0!==r.pos){if(0===n.length)return null
var i,o=0,s=c(h(n.pop(),1)[0].childNodes)
try{for(s.s();!(i=s.n()).done;){var u=i.value
if(r.name===u.nodeName){if(o===r.pos)return u.searchNode(e,t+1)
o++}}}catch(v){s.e(v)}finally{s.f()}return a.searchNode(e,t+1)}var l=a.searchNode(e,t+1)
if(null!==l)return l}if(a.childNodes&&0!==a.childNodes.length)n.push([a,0]),a=a.childNodes[0]
else{if(0===n.length)return null
for(;0!==n.length;){var f=h(n.pop(),2),d=f[0],p=f[1]+1
if(p<d.childNodes.length){n.push([d,p]),a=d.childNodes[p]
break}}if(0===n.length)return null}}}},{key:"dump",value:function(e){if("#text"!==this.nodeName){if(e.push("<".concat(this.nodeName)),this.attributes){var t,r=c(this.attributes)
try{for(r.s();!(t=r.n()).done;){var n=t.value
e.push(" ".concat(n.name,'="').concat((0,a.encodeToXmlString)(n.value),'"'))}}catch(s){r.e(s)}finally{r.f()}}if(this.hasChildNodes()){e.push(">")
var i,o=c(this.childNodes)
try{for(o.s();!(i=o.n()).done;){i.value.dump(e)}}catch(s){o.e(s)}finally{o.f()}e.push("</".concat(this.nodeName,">"))}else this.nodeValue?e.push(">".concat((0,a.encodeToXmlString)(this.nodeValue),"</").concat(this.nodeName,">")):e.push("/>")}else e.push((0,a.encodeToXmlString)(this.nodeValue))}},{key:"firstChild",get:function(){return this.childNodes&&this.childNodes[0]}},{key:"nextSibling",get:function(){var e=this.parentNode.childNodes
if(e){var t=e.indexOf(this)
if(-1!==t)return e[t+1]}}},{key:"textContent",get:function(){return this.childNodes?this.childNodes.map((function(e){return e.textContent})).join(""):this.nodeValue||""}}]),e}()
t.SimpleDOMNode=C
var P=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(r,e)
var t=s(r)
function r(e){var n,a=e.hasAttributes,i=void 0!==a&&a,o=e.lowerCaseName,s=void 0!==o&&o
return p(this,r),(n=t.call(this))._currentFragment=null,n._stack=null,n._errorCode=y,n._hasAttributes=i,n._lowerCaseName=s,n}return g(r,[{key:"parseFromString",value:function(e){if(this._currentFragment=[],this._stack=[],this._errorCode=y,this.parseXml(e),this._errorCode===y){var t=h(this._currentFragment,1)[0]
if(t)return{documentElement:t}}}},{key:"onResolveEntity",value:function(e){switch(e){case"apos":return"'"}return i(l(r.prototype),"onResolveEntity",this).call(this,e)}},{key:"onText",value:function(e){if(!function(e){for(var t=0,r=e.length;t<r;t++)if(!k(e,t))return!1
return!0}(e)){var t=new C("#text",e)
this._currentFragment.push(t)}}},{key:"onCdata",value:function(e){var t=new C("#text",e)
this._currentFragment.push(t)}},{key:"onBeginElement",value:function(e,t,r){this._lowerCaseName&&(e=e.toLowerCase())
var n=new C(e)
n.childNodes=[],this._hasAttributes&&(n.attributes=t),this._currentFragment.push(n),r||(this._stack.push(this._currentFragment),this._currentFragment=n.childNodes)}},{key:"onEndElement",value:function(e){this._currentFragment=this._stack.pop()||[]
var t=this._currentFragment[this._currentFragment.length-1]
if(t)for(var r=0,n=t.childNodes.length;r<n;r++)t.childNodes[r].parentNode=t}},{key:"onError",value:function(e){this._errorCode=e}}]),r}(x)
t.SimpleXMLParser=P},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OptionalContentConfig=void 0
var n=r(4)
function a(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function e(t,r){s(this,e),this.visible=!0,this.name=t,this.intent=r},l=function(){function e(t){if(s(this,e),this.name=null,this.creator=null,this._order=null,this._groups=new Map,null!==t){this.name=t.name,this.creator=t.creator,this._order=t.order
var r,n=a(t.groups)
try{for(n.s();!(r=n.n()).done;){var i=r.value
this._groups.set(i.id,new u(i.name,i.intent))}}catch(g){n.e(g)}finally{n.f()}if("OFF"===t.baseState){var o,l=a(this._groups)
try{for(l.s();!(o=l.n()).done;){o.value.visible=!1}}catch(g){l.e(g)}finally{l.f()}}var c,h=a(t.on)
try{for(h.s();!(c=h.n()).done;){var f=c.value
this._groups.get(f).visible=!0}}catch(g){h.e(g)}finally{h.f()}var d,p=a(t.off)
try{for(p.s();!(d=p.n()).done;){var v=d.value
this._groups.get(v).visible=!1}}catch(g){p.e(g)}finally{p.f()}}}var t,r,i
return t=e,(r=[{key:"isVisible",value:function(e){if("OCG"===e.type)return this._groups.has(e.id)?this._groups.get(e.id).visible:((0,n.warn)("Optional content group not found: ".concat(e.id)),!0)
if("OCMD"===e.type){if(e.expression&&(0,n.warn)("Visibility expression not supported yet."),!e.policy||"AnyOn"===e.policy){var t,r=a(e.ids)
try{for(r.s();!(t=r.n()).done;){var i=t.value
if(!this._groups.has(i))return(0,n.warn)("Optional content group not found: ".concat(i)),!0
if(this._groups.get(i).visible)return!0}}catch(v){r.e(v)}finally{r.f()}return!1}if("AllOn"===e.policy){var o,s=a(e.ids)
try{for(s.s();!(o=s.n()).done;){var u=o.value
if(!this._groups.has(u))return(0,n.warn)("Optional content group not found: ".concat(u)),!0
if(!this._groups.get(u).visible)return!1}}catch(v){s.e(v)}finally{s.f()}return!0}if("AnyOff"===e.policy){var l,c=a(e.ids)
try{for(c.s();!(l=c.n()).done;){var h=l.value
if(!this._groups.has(h))return(0,n.warn)("Optional content group not found: ".concat(h)),!0
if(!this._groups.get(h).visible)return!0}}catch(v){c.e(v)}finally{c.f()}return!1}if("AllOff"===e.policy){var f,d=a(e.ids)
try{for(d.s();!(f=d.n()).done;){var p=f.value
if(!this._groups.has(p))return(0,n.warn)("Optional content group not found: ".concat(p)),!0
if(this._groups.get(p).visible)return!1}}catch(v){d.e(v)}finally{d.f()}return!0}return(0,n.warn)("Unknown optional content policy ".concat(e.policy,".")),!0}return(0,n.warn)("Unknown group type ".concat(e.type,".")),!0}},{key:"setVisibility",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._groups.has(e)?this._groups.get(e).visible=!!t:(0,n.warn)("Optional content group not found: ".concat(e))}},{key:"getOrder",value:function(){return this._groups.size?this._order?this._order.slice():Array.from(this._groups.keys()):null}},{key:"getGroups",value:function(){return this._groups.size?(0,n.objectFromEntries)(this._groups):null}},{key:"getGroup",value:function(e){return this._groups.get(e)||null}}])&&o(t.prototype,r),i&&o(t,i),e}()
t.OptionalContentConfig=l},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0
var n,a=(n=r(2))&&n.__esModule?n:{default:n},i=r(4)
function o(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function s(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function s(e){o(i,n,a,s,u,"next",e)}function u(e){o(i,n,a,s,u,"throw",e)}s(void 0)}))}}function u(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return l(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}var d=function(){function e(t,r){var n=this
c(this,e),(0,i.assert)(r,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'),this._queuedChunks=[],this._progressiveDone=t.progressiveDone||!1
var a=t.initialData
if((null==a?void 0:a.length)>0){var o=new Uint8Array(a).buffer
this._queuedChunks.push(o)}this._pdfDataRangeTransport=r,this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._contentLength=t.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener((function(e,t){n._onReceiveData({begin:e,chunk:t})})),this._pdfDataRangeTransport.addProgressListener((function(e,t){n._onProgress({loaded:e,total:t})})),this._pdfDataRangeTransport.addProgressiveReadListener((function(e){n._onReceiveData({chunk:e})})),this._pdfDataRangeTransport.addProgressiveDoneListener((function(){n._onProgressiveDone()})),this._pdfDataRangeTransport.transportReady()}return f(e,[{key:"_onReceiveData",value:function(e){var t=new Uint8Array(e.chunk).buffer
if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t)
else{var r=this._rangeReaders.some((function(r){return r._begin===e.begin&&(r._enqueue(t),!0)}));(0,i.assert)(r,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")}}},{key:"_onProgress",value:function(e){if(void 0===e.total){var t=this._rangeReaders[0]
null!=t&&t.onProgress&&t.onProgress({loaded:e.loaded})}else{var r=this._fullRequestReader
null!=r&&r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}},{key:"_onProgressiveDone",value:function(){this._fullRequestReader&&this._fullRequestReader.progressiveDone(),this._progressiveDone=!0}},{key:"_removeRangeReader",value:function(e){var t=this._rangeReaders.indexOf(e)
t>=0&&this._rangeReaders.splice(t,1)}},{key:"getFullReader",value:function(){(0,i.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.")
var e=this._queuedChunks
return this._queuedChunks=null,new p(this,e,this._progressiveDone)}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new v(this,e,t)
return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeReaders.slice(0).forEach((function(t){t.cancel(e)})),this._pdfDataRangeTransport.abort()}},{key:"_progressiveDataLength",get:function(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}}]),e}()
t.PDFDataTransportStream=d
var p=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
c(this,e),this._stream=t,this._done=n||!1,this._filename=null,this._queuedChunks=r||[],this._loaded=0
var a,i=u(this._queuedChunks)
try{for(i.s();!(a=i.n()).done;){var o=a.value
this._loaded+=o.byteLength}}catch(s){i.e(s)}finally{i.f()}this._requests=[],this._headersReady=Promise.resolve(),t._fullRequestReader=this,this.onProgress=null}var t
return f(e,[{key:"_enqueue",value:function(e){if(!this._done){if(this._requests.length>0)this._requests.shift().resolve({value:e,done:!1})
else this._queuedChunks.push(e)
this._loaded+=e.byteLength}}},{key:"read",value:(t=s(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this._queuedChunks.length>0)){e.next=3
break}return t=this._queuedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 3:if(!this._done){e.next=5
break}return e.abrupt("return",{value:void 0,done:!0})
case 5:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[]}},{key:"progressiveDone",value:function(){this._done||(this._done=!0)}},{key:"headersReady",get:function(){return this._headersReady}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._stream._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._stream._isStreamingSupported}},{key:"contentLength",get:function(){return this._stream._contentLength}}]),e}(),v=function(){function e(t,r,n){c(this,e),this._stream=t,this._begin=r,this._end=n,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}var t
return f(e,[{key:"_enqueue",value:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e
else this._requests.shift().resolve({value:e,done:!1}),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[]
this._done=!0,this._stream._removeRangeReader(this)}}},{key:"read",value:(t=s(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._queuedChunk){e.next=4
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 4:if(!this._done){e.next=6
break}return e.abrupt("return",{value:void 0,done:!0})
case 6:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._stream._removeRangeReader(this)}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLContext=void 0
var n=r(4)
function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(t){var r=t.enable,n=void 0!==r&&r;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._enabled=!0===n}var t,r,i
return t=e,(r=[{key:"composeSMask",value:function(e){var t=e.layer,r=e.mask,n=e.properties
return o.composeSMask(t,r,n)}},{key:"drawFigures",value:function(e){var t=e.width,r=e.height,n=e.backgroundColor,a=e.figures,i=e.context
return o.drawFigures(t,r,n,a,i)}},{key:"clear",value:function(){o.cleanup()}},{key:"isEnabled",get:function(){var e=this._enabled
return e&&(e=o.tryInitGL()),(0,n.shadow)(this,"isEnabled",e)}}])&&a(t.prototype,r),i&&a(t,i),e}()
t.WebGLContext=i
var o=function(){function e(e,t,r){var n=e.createShader(r)
if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var a=e.getShaderInfoLog(n)
throw new Error("Error during shader compilation: "+a)}return n}function t(t,r){return e(t,r,t.VERTEX_SHADER)}function r(t,r){return e(t,r,t.FRAGMENT_SHADER)}function n(e,t){for(var r=e.createProgram(),n=0,a=t.length;n<a;++n)e.attachShader(r,t[n])
if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){var i=e.getProgramInfoLog(r)
throw new Error("Error during program linking: "+i)}return r}function a(e,t,r){e.activeTexture(r)
var n=e.createTexture()
return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n}var i,o
function s(){i||(o=document.createElement("canvas"),i=o.getContext("webgl",{premultipliedalpha:!1}))}var u=null
var l=null
return{tryInitGL:function(){try{return s(),!!i}catch(e){}return!1},composeSMask:function(e,l,c){var h=e.width,f=e.height
u||function(){s()
var e=o
o=null
var a=i
i=null
var l=n(a,[t(a,"  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             "),r(a,"  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ")])
a.useProgram(l)
var c={}
c.gl=a,c.canvas=e,c.resolutionLocation=a.getUniformLocation(l,"u_resolution"),c.positionLocation=a.getAttribLocation(l,"a_position"),c.backdropLocation=a.getUniformLocation(l,"u_backdrop"),c.subtypeLocation=a.getUniformLocation(l,"u_subtype")
var h=a.getAttribLocation(l,"a_texCoord"),f=a.getUniformLocation(l,"u_image"),d=a.getUniformLocation(l,"u_mask"),p=a.createBuffer()
a.bindBuffer(a.ARRAY_BUFFER,p),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),a.STATIC_DRAW),a.enableVertexAttribArray(h),a.vertexAttribPointer(h,2,a.FLOAT,!1,0,0),a.uniform1i(f,0),a.uniform1i(d,1),u=c}()
var d=u,p=d.canvas,v=d.gl
p.width=h,p.height=f,v.viewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),v.uniform2f(d.resolutionLocation,h,f),c.backdrop?v.uniform4f(d.resolutionLocation,c.backdrop[0],c.backdrop[1],c.backdrop[2],1):v.uniform4f(d.resolutionLocation,0,0,0,0),v.uniform1i(d.subtypeLocation,"Luminosity"===c.subtype?1:0)
var g=a(v,e,v.TEXTURE0),y=a(v,l,v.TEXTURE1),m=v.createBuffer()
return v.bindBuffer(v.ARRAY_BUFFER,m),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,0,h,0,0,f,0,f,h,0,h,f]),v.STATIC_DRAW),v.enableVertexAttribArray(d.positionLocation),v.vertexAttribPointer(d.positionLocation,2,v.FLOAT,!1,0,0),v.clearColor(0,0,0,0),v.enable(v.BLEND),v.blendFunc(v.ONE,v.ONE_MINUS_SRC_ALPHA),v.clear(v.COLOR_BUFFER_BIT),v.drawArrays(v.TRIANGLES,0,6),v.flush(),v.deleteTexture(g),v.deleteTexture(y),v.deleteBuffer(m),p},drawFigures:function(e,a,u,c,h){l||function(){s()
var e=o
o=null
var a=i
i=null
var u=n(a,[t(a,"  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             "),r(a,"  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ")])
a.useProgram(u)
var c={}
c.gl=a,c.canvas=e,c.resolutionLocation=a.getUniformLocation(u,"u_resolution"),c.scaleLocation=a.getUniformLocation(u,"u_scale"),c.offsetLocation=a.getUniformLocation(u,"u_offset"),c.positionLocation=a.getAttribLocation(u,"a_position"),c.colorLocation=a.getAttribLocation(u,"a_color"),l=c}()
var f=l,d=f.canvas,p=f.gl
d.width=e,d.height=a,p.viewport(0,0,p.drawingBufferWidth,p.drawingBufferHeight),p.uniform2f(f.resolutionLocation,e,a)
for(var v=0,g=0,y=c.length;g<y;g++)switch(c[g].type){case"lattice":v+=((c[g].coords.length/c[g].verticesPerRow|0)-1)*(c[g].verticesPerRow-1)*6
break
case"triangles":v+=c[g].coords.length}for(var m=new Float32Array(2*v),b=new Uint8Array(3*v),_=h.coords,A=h.colors,S=0,w=0,k=0,x=c.length;k<x;k++){var C=c[k],P=C.coords,R=C.colors
switch(C.type){case"lattice":for(var T=C.verticesPerRow,E=P.length/T|0,O=1;O<E;O++)for(var F=O*T+1,L=1;L<T;L++,F++){m[S]=_[P[F-T-1]],m[S+1]=_[P[F-T-1]+1],m[S+2]=_[P[F-T]],m[S+3]=_[P[F-T]+1],m[S+4]=_[P[F-1]],m[S+5]=_[P[F-1]+1],b[w]=A[R[F-T-1]],b[w+1]=A[R[F-T-1]+1],b[w+2]=A[R[F-T-1]+2],b[w+3]=A[R[F-T]],b[w+4]=A[R[F-T]+1],b[w+5]=A[R[F-T]+2],b[w+6]=A[R[F-1]],b[w+7]=A[R[F-1]+1],b[w+8]=A[R[F-1]+2],m[S+6]=m[S+2],m[S+7]=m[S+3],m[S+8]=m[S+4],m[S+9]=m[S+5],m[S+10]=_[P[F]],m[S+11]=_[P[F]+1],b[w+9]=b[w+3],b[w+10]=b[w+4],b[w+11]=b[w+5],b[w+12]=b[w+6],b[w+13]=b[w+7],b[w+14]=b[w+8],b[w+15]=A[R[F]],b[w+16]=A[R[F]+1],b[w+17]=A[R[F]+2]
S+=12,w+=18}break
case"triangles":for(var I=0,M=P.length;I<M;I++)m[S]=_[P[I]],m[S+1]=_[P[I]+1],b[w]=A[R[I]],b[w+1]=A[R[I]+1],b[w+2]=A[R[I]+2],S+=2,w+=3}}u?p.clearColor(u[0]/255,u[1]/255,u[2]/255,1):p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT)
var j=p.createBuffer()
p.bindBuffer(p.ARRAY_BUFFER,j),p.bufferData(p.ARRAY_BUFFER,m,p.STATIC_DRAW),p.enableVertexAttribArray(f.positionLocation),p.vertexAttribPointer(f.positionLocation,2,p.FLOAT,!1,0,0)
var D=p.createBuffer()
return p.bindBuffer(p.ARRAY_BUFFER,D),p.bufferData(p.ARRAY_BUFFER,b,p.STATIC_DRAW),p.enableVertexAttribArray(f.colorLocation),p.vertexAttribPointer(f.colorLocation,3,p.UNSIGNED_BYTE,!1,0,0),p.uniform2f(f.scaleLocation,h.scaleX,h.scaleY),p.uniform2f(f.offsetLocation,h.offsetX,h.offsetY),p.drawArrays(p.TRIANGLES,0,v),p.flush(),p.deleteBuffer(j),p.deleteBuffer(D),d},cleanup:function(){var e,t
null!==(e=u)&&void 0!==e&&e.canvas&&(u.canvas.width=0,u.canvas.height=0),null!==(t=l)&&void 0!==t&&t.canvas&&(l.canvas.width=0,l.canvas.height=0),u=null,l=null}}}()},(e,t,r)=>{"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0
var a=r(1),i=r(4),o=r(138),s=r(150)
function u(e,t,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t)
if(n){var a=Object.getOwnPropertyDescriptor(n,t)
return a.get?a.get.call(r):a.value}})(e,t,r||e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var a=v(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=y(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function y(e,t){if(e){if("string"==typeof e)return m(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),e}var S=function(){function e(){b(this,e)}return A(e,null,[{key:"create",value:function(e){switch(e.data.annotationType){case i.AnnotationType.LINK:return new k(e)
case i.AnnotationType.TEXT:return new x(e)
case i.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new P(e)
case"Btn":return e.data.radioButton?new T(e):e.data.checkBox?new R(e):new E(e)
case"Ch":return new O(e)}return new C(e)
case i.AnnotationType.POPUP:return new F(e)
case i.AnnotationType.FREETEXT:return new I(e)
case i.AnnotationType.LINE:return new M(e)
case i.AnnotationType.SQUARE:return new j(e)
case i.AnnotationType.CIRCLE:return new D(e)
case i.AnnotationType.POLYLINE:return new N(e)
case i.AnnotationType.CARET:return new U(e)
case i.AnnotationType.INK:return new W(e)
case i.AnnotationType.POLYGON:return new q(e)
case i.AnnotationType.HIGHLIGHT:return new B(e)
case i.AnnotationType.UNDERLINE:return new G(e)
case i.AnnotationType.SQUIGGLY:return new z(e)
case i.AnnotationType.STRIKEOUT:return new H(e)
case i.AnnotationType.STAMP:return new V(e)
case i.AnnotationType.FILEATTACHMENT:return new Y(e)
default:return new w(e)}}}]),e}(),w=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.isRenderable,a=void 0!==n&&n,i=r.ignoreBorder,o=void 0!==i&&i,s=r.createQuadrilaterals,u=void 0!==s&&s
b(this,e),this.isRenderable=a,this.data=t.data,this.layer=t.layer,this.page=t.page,this.viewport=t.viewport,this.linkService=t.linkService,this.downloadManager=t.downloadManager,this.imageResourcesPath=t.imageResourcesPath,this.renderInteractiveForms=t.renderInteractiveForms,this.svgFactory=t.svgFactory,this.annotationStorage=t.annotationStorage,this.enableScripting=t.enableScripting,this.hasJSActions=t.hasJSActions,this._mouseState=t.mouseState,a&&(this.container=this._createContainer(o)),u&&(this.quadrilaterals=this._createQuadrilaterals(o))}return A(e,[{key:"_createContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.data,r=this.page,n=this.viewport,a=document.createElement("section"),o=t.rect[2]-t.rect[0],s=t.rect[3]-t.rect[1]
a.setAttribute("data-annotation-id",t.id)
var u=i.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]])
if(a.style.transform="matrix(".concat(n.transform.join(","),")"),a.style.transformOrigin="".concat(-u[0],"px ").concat(-u[1],"px"),!e&&t.borderStyle.width>0){a.style.borderWidth="".concat(t.borderStyle.width,"px"),t.borderStyle.style!==i.AnnotationBorderStyleType.UNDERLINE&&(o-=2*t.borderStyle.width,s-=2*t.borderStyle.width)
var l=t.borderStyle.horizontalCornerRadius,c=t.borderStyle.verticalCornerRadius
if(l>0||c>0){var h="".concat(l,"px / ").concat(c,"px")
a.style.borderRadius=h}switch(t.borderStyle.style){case i.AnnotationBorderStyleType.SOLID:a.style.borderStyle="solid"
break
case i.AnnotationBorderStyleType.DASHED:a.style.borderStyle="dashed"
break
case i.AnnotationBorderStyleType.BEVELED:(0,i.warn)("Unimplemented border style: beveled")
break
case i.AnnotationBorderStyleType.INSET:(0,i.warn)("Unimplemented border style: inset")
break
case i.AnnotationBorderStyleType.UNDERLINE:a.style.borderBottomStyle="solid"}t.color?a.style.borderColor=i.Util.makeHexColor(0|t.color[0],0|t.color[1],0|t.color[2]):a.style.borderWidth=0}return a.style.left="".concat(u[0],"px"),a.style.top="".concat(u[1],"px"),a.style.width="".concat(o,"px"),a.style.height="".concat(s,"px"),a}},{key:"_createQuadrilaterals",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.data.quadPoints)return null
var t,r=[],n=this.data.rect,a=g(this.data.quadPoints)
try{for(a.s();!(t=a.n()).done;){var i=t.value
this.data.rect=[i[2].x,i[2].y,i[1].x,i[1].y],r.push(this._createContainer(e))}}catch(o){a.e(o)}finally{a.f()}return this.data.rect=n,r}},{key:"_createPopup",value:function(e,t){var r=this.container
this.quadrilaterals&&(e=e||this.quadrilaterals,r=this.quadrilaterals[0]),e||((e=document.createElement("div")).style.height=r.style.height,e.style.width=r.style.width,r.appendChild(e))
var n=new L({container:r,trigger:e,color:t.color,title:t.title,modificationDate:t.modificationDate,contents:t.contents,hideWrapper:!0}).render()
n.style.left=r.style.width,r.appendChild(n)}},{key:"_renderQuadrilaterals",value:function(e){return this.quadrilaterals.forEach((function(t){t.className=e})),this.quadrilaterals}},{key:"render",value:function(){(0,i.unreachable)("Abstract method `AnnotationElement.render` called")}}]),e}(),k=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.url||e.data.dest||e.data.action||e.data.isTooltipOnly||e.data.actions&&(e.data.actions.Action||e.data.actions["Mouse Up"]||e.data.actions["Mouse Down"]))
return t.call(this,e,{isRenderable:n,createQuadrilaterals:!0})}return A(r,[{key:"render",value:function(){var e=this.data,t=this.linkService,r=document.createElement("a")
return e.url?(0,a.addLinkAttributes)(r,{url:e.url,target:e.newWindow?a.LinkTarget.BLANK:t.externalLinkTarget,rel:t.externalLinkRel,enabled:t.externalLinkEnabled}):e.action?this._bindNamedAction(r,e.action):e.dest?this._bindLink(r,e.dest):e.actions&&(e.actions.Action||e.actions["Mouse Up"]||e.actions["Mouse Down"])&&this.enableScripting&&this.hasJSActions?this._bindJSAction(r,e):this._bindLink(r,""),this.quadrilaterals?this._renderQuadrilaterals("linkAnnotation").map((function(e,t){var n=0===t?r:r.cloneNode()
return e.appendChild(n),e})):(this.container.className="linkAnnotation",this.container.appendChild(r),this.container)}},{key:"_bindLink",value:function(e,t){var r=this
e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.goToDestination(t),!1},(t||""===t)&&(e.className="internalLink")}},{key:"_bindNamedAction",value:function(e,t){var r=this
e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}},{key:"_bindJSAction",value:function(e,t){var r=this
e.href=this.linkService.getAnchorUrl("")
for(var n=new Map([["Action","onclick"],["Mouse Up","onmouseup"],["Mouse Down","onmousedown"]]),a=function(){var a=o[i],s=n.get(a)
if(!s)return"continue"
e[s]=function(){var e
return null===(e=r.linkService.eventBus)||void 0===e||e.dispatch("dispatcheventinsandbox",{source:r,detail:{id:t.id,name:a}}),!1}},i=0,o=Object.keys(t.actions);i<o.length;i++)a()
e.className="internalLink"}}]),r}(w),x=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n})}return A(r,[{key:"render",value:function(){this.container.className="textAnnotation"
var e=document.createElement("img")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(e,this.data),this.container.appendChild(e),this.container}}]),r}(w),C=function(e){c(r,e)
var t=f(r)
function r(){return b(this,r),t.apply(this,arguments)}return A(r,[{key:"render",value:function(){return this.data.alternativeText&&(this.container.title=this.data.alternativeText),this.container}},{key:"_getKeyModifier",value:function(e){return navigator.platform.includes("Win")&&e.ctrlKey||navigator.platform.includes("Mac")&&e.metaKey}},{key:"_setEventListener",value:function(e,t,r,n){var a=this
t.includes("mouse")?e.addEventListener(t,(function(e){var t
null===(t=a.linkService.eventBus)||void 0===t||t.dispatch("dispatcheventinsandbox",{source:a,detail:{id:a.data.id,name:r,value:n(e),shift:e.shiftKey,modifier:a._getKeyModifier(e)}})})):e.addEventListener(t,(function(e){var t
null===(t=a.linkService.eventBus)||void 0===t||t.dispatch("dispatcheventinsandbox",{source:a,detail:{id:a.data.id,name:r,value:e.target.checked}})}))}},{key:"_setEventListeners",value:function(e,t,r){var n,a=g(t)
try{for(a.s();!(n=a.n()).done;){var i,o=l(n.value,2),s=o[0],u=o[1];("Action"===u||null!==(i=this.data.actions)&&void 0!==i&&i[u])&&this._setEventListener(e,s,u,r)}}catch(c){a.e(c)}finally{a.f()}}}]),r}(w),P=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=e.renderInteractiveForms||!e.data.hasAppearance&&!!e.data.fieldValue
return t.call(this,e,{isRenderable:n})}return A(r,[{key:"render",value:function(){var e=this,t=this.annotationStorage,r=this.data.id
this.container.className="textWidgetAnnotation"
var n=null
if(this.renderInteractiveForms){var a=t.getOrCreateValue(r,{value:this.data.fieldValue}).value,i={userValue:null,formattedValue:null,beforeInputSelectionRange:null,beforeInputValue:null}
this.data.multiLine?(n=document.createElement("textarea")).textContent=a:((n=document.createElement("input")).type="text",n.setAttribute("value",a)),i.userValue=a,n.setAttribute("id",r),n.addEventListener("input",(function(e){t.setValue(r,{value:e.target.value})}))
var o=function(e){i.formattedValue&&(e.target.value=i.formattedValue),e.target.setSelectionRange(0,0),i.beforeInputSelectionRange=null}
if(this.enableScripting&&this.hasJSActions&&(n.addEventListener("focus",(function(e){i.userValue&&(e.target.value=i.userValue)})),n.addEventListener("updatefromsandbox",(function(e){var n=e.detail,a={value:function(){i.userValue=n.value||"",t.setValue(r,{value:i.userValue.toString()}),i.formattedValue||(e.target.value=i.userValue)},valueAsString:function(){i.formattedValue=n.valueAsString||"",e.target!==document.activeElement&&(e.target.value=i.formattedValue),t.setValue(r,{formattedValue:i.formattedValue})},focus:function(){setTimeout((function(){return e.target.focus({preventScroll:!1})}),0)},userName:function(){e.target.title=n.userName},hidden:function(){e.target.style.visibility=n.hidden?"hidden":"visible",t.setValue(r,{hidden:n.hidden})},editable:function(){e.target.disabled=!n.editable},selRange:function(){var t=l(n.selRange,2),r=t[0],a=t[1]
r>=0&&a<e.target.value.length&&e.target.setSelectionRange(r,a)},strokeColor:function(){var t=n.strokeColor
e.target.style.color=s.ColorConverters["".concat(t[0],"_HTML")](t.slice(1))}}
Object.keys(n).filter((function(e){return e in a})).forEach((function(e){return a[e]()}))})),this.data.actions)){n.addEventListener("keydown",(function(t){var n
i.beforeInputValue=t.target.value
var a=-1
"Escape"===t.key?a=0:"Enter"===t.key?a=2:"Tab"===t.key&&(a=3),-1!==a&&(i.userValue=t.target.value,null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:t.target.value,willCommit:!0,commitKey:a,selStart:t.target.selectionStart,selEnd:t.target.selectionEnd}}))}))
var u=o
o=null,n.addEventListener("blur",(function(t){var n
e._mouseState.isDown&&(i.userValue=t.target.value,null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:t.target.value,willCommit:!0,commitKey:1,selStart:t.target.selectionStart,selEnd:t.target.selectionEnd}}))
u(t)})),n.addEventListener("mousedown",(function(e){i.beforeInputValue=e.target.value,i.beforeInputSelectionRange=null})),n.addEventListener("keyup",(function(e){e.target.selectionStart===e.target.selectionEnd&&(i.beforeInputSelectionRange=null)})),n.addEventListener("select",(function(e){i.beforeInputSelectionRange=[e.target.selectionStart,e.target.selectionEnd]})),"Keystroke"in this.data.actions&&n.addEventListener("input",(function(t){var n,a=-1,o=-1
if(i.beforeInputSelectionRange){var s=l(i.beforeInputSelectionRange,2)
a=s[0],o=s[1]}null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:i.beforeInputValue,change:t.data,willCommit:!1,selStart:a,selEnd:o}})})),this._setEventListeners(n,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],(function(e){return e.target.value}))}if(o&&n.addEventListener("blur",o),n.disabled=this.data.readOnly,n.name=this.data.fieldName,null!==this.data.maxLen&&(n.maxLength=this.data.maxLen),this.data.comb){var c=(this.data.rect[2]-this.data.rect[0])/this.data.maxLen
n.classList.add("comb"),n.style.letterSpacing="calc(".concat(c,"px - 1ch)")}}else(n=document.createElement("div")).textContent=this.data.fieldValue,n.style.verticalAlign="middle",n.style.display="table-cell"
return this._setTextStyle(n),this.container.appendChild(n),this.container}},{key:"_setTextStyle",value:function(e){var t=this.data.defaultAppearanceData,r=t.fontSize,n=t.fontColor,a=e.style
r&&(a.fontSize="".concat(r,"px")),a.color=i.Util.makeHexColor(n[0],n[1],n[2]),null!==this.data.textAlignment&&(a.textAlign=["left","center","right"][this.data.textAlignment])}}]),r}(C),R=function(e){c(r,e)
var t=f(r)
function r(e){return b(this,r),t.call(this,e,{isRenderable:e.renderInteractiveForms})}return A(r,[{key:"render",value:function(){var e=this.annotationStorage,t=this.data,r=t.id,n=e.getOrCreateValue(r,{value:t.fieldValue&&"Off"!==t.fieldValue}).value
this.container.className="buttonWidgetAnnotation checkBox"
var a=document.createElement("input")
return a.disabled=t.readOnly,a.type="checkbox",a.name=this.data.fieldName,n&&a.setAttribute("checked",!0),a.setAttribute("id",r),a.addEventListener("change",(function(t){var n,a=t.target.name,i=g(document.getElementsByName(a))
try{for(i.s();!(n=i.n()).done;){var o=n.value
o!==t.target&&(o.checked=!1,e.setValue(o.parentNode.getAttribute("data-annotation-id"),{value:!1}))}}catch(s){i.e(s)}finally{i.f()}e.setValue(r,{value:t.target.checked})})),this.enableScripting&&this.hasJSActions&&(a.addEventListener("updatefromsandbox",(function(t){var n=t.detail,a={value:function(){t.target.checked="Off"!==n.value,e.setValue(r,{value:t.target.checked})},focus:function(){setTimeout((function(){return t.target.focus({preventScroll:!1})}),0)},hidden:function(){t.target.style.visibility=n.hidden?"hidden":"visible",e.setValue(r,{hidden:n.hidden})},editable:function(){t.target.disabled=!n.editable}}
Object.keys(n).filter((function(e){return e in a})).forEach((function(e){return a[e]()}))})),this._setEventListeners(a,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],(function(e){return e.target.checked}))),this.container.appendChild(a),this.container}}]),r}(C),T=function(e){c(r,e)
var t=f(r)
function r(e){return b(this,r),t.call(this,e,{isRenderable:e.renderInteractiveForms})}return A(r,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation radioButton"
var e=this.annotationStorage,t=this.data,r=t.id,n=e.getOrCreateValue(r,{value:t.fieldValue===t.buttonValue}).value,a=document.createElement("input")
return a.disabled=t.readOnly,a.type="radio",a.name=t.fieldName,n&&a.setAttribute("checked",!0),a.setAttribute("pdfButtonValue",t.buttonValue),a.setAttribute("id",r),a.addEventListener("change",(function(t){var n,a=t.target,i=g(document.getElementsByName(a.name))
try{for(i.s();!(n=i.n()).done;){var o=n.value
o!==a&&e.setValue(o.getAttribute("id"),{value:!1})}}catch(s){i.e(s)}finally{i.f()}e.setValue(r,{value:a.checked})})),this.enableScripting&&this.hasJSActions&&(a.addEventListener("updatefromsandbox",(function(t){var n=t.detail,a={value:function(){var r,a=n.value,i=g(document.getElementsByName(t.target.name))
try{for(i.s();!(r=i.n()).done;){var o=r.value,s=o.getAttribute("id")
a===o.getAttribute("pdfButtonValue")?(o.setAttribute("checked",!0),e.setValue(s,{value:!0})):e.setValue(s,{value:!1})}}catch(u){i.e(u)}finally{i.f()}},focus:function(){setTimeout((function(){return t.target.focus({preventScroll:!1})}),0)},hidden:function(){t.target.style.visibility=n.hidden?"hidden":"visible",e.setValue(r,{hidden:n.hidden})},editable:function(){t.target.disabled=!n.editable}}
Object.keys(n).filter((function(e){return e in a})).forEach((function(e){return a[e]()}))})),this._setEventListeners(a,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],(function(e){return e.target.checked}))),this.container.appendChild(a),this.container}}]),r}(C),E=function(e){c(r,e)
var t=f(r)
function r(){return b(this,r),t.apply(this,arguments)}return A(r,[{key:"render",value:function(){var e=u(v(r.prototype),"render",this).call(this)
return e.className="buttonWidgetAnnotation pushButton",this.data.alternativeText&&(e.title=this.data.alternativeText),e}}]),r}(k),O=function(e){c(r,e)
var t=f(r)
function r(e){return b(this,r),t.call(this,e,{isRenderable:e.renderInteractiveForms})}return A(r,[{key:"render",value:function(){var e=this
this.container.className="choiceWidgetAnnotation"
var t=this.annotationStorage,r=this.data.id
t.getOrCreateValue(r,{value:this.data.fieldValue.length>0?this.data.fieldValue[0]:void 0})
var n=document.createElement("select")
n.disabled=this.data.readOnly,n.name=this.data.fieldName,n.setAttribute("id",r),this.data.combo||(n.size=this.data.options.length,this.data.multiSelect&&(n.multiple=!0))
var a,i=g(this.data.options)
try{for(i.s();!(a=i.n()).done;){var o=a.value,s=document.createElement("option")
s.textContent=o.displayValue,s.value=o.exportValue,this.data.fieldValue.includes(o.exportValue)&&s.setAttribute("selected",!0),n.appendChild(s)}}catch(l){i.e(l)}finally{i.f()}function u(e){var t=e.target.options
return t[t.selectedIndex].value}return this.enableScripting&&this.hasJSActions?(n.addEventListener("updatefromsandbox",(function(e){var n=e.detail,a={value:function(){var a=e.target.options,i=n.value,o=a.indexOf(i);-1!==o&&(a.selectedIndex=o,t.setValue(r,{value:i}))},focus:function(){setTimeout((function(){return e.target.focus({preventScroll:!1})}),0)},hidden:function(){e.target.style.visibility=n.hidden?"hidden":"visible",t.setValue(r,{hidden:n.hidden})},editable:function(){e.target.disabled=!n.editable}}
Object.keys(n).filter((function(e){return e in a})).forEach((function(e){return a[e]()}))})),n.addEventListener("input",(function(n){var a,i=u(n)
t.setValue(r,{value:i}),null===(a=e.linkService.eventBus)||void 0===a||a.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",changeEx:i,willCommit:!0,commitKey:1,keyDown:!1}})})),this._setEventListeners(n,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],(function(e){return e.target.checked}))):n.addEventListener("input",(function(e){t.setValue(r,{value:u(e)})})),this.container.appendChild(n),this.container}}]),r}(C),F=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!(!e.data.title&&!e.data.contents)
return t.call(this,e,{isRenderable:n})}return A(r,[{key:"render",value:function(){if(this.container.className="popupAnnotation",["Line","Square","Circle","PolyLine","Polygon","Ink"].includes(this.data.parentType))return this.container
var e='[data-annotation-id="'.concat(this.data.parentId,'"]'),t=this.layer.querySelectorAll(e)
if(0===t.length)return this.container
var r=new L({container:this.container,trigger:Array.from(t),color:this.data.color,title:this.data.title,modificationDate:this.data.modificationDate,contents:this.data.contents}),n=this.page,a=i.Util.normalizeRect([this.data.parentRect[0],n.view[3]-this.data.parentRect[1]+n.view[1],this.data.parentRect[2],n.view[3]-this.data.parentRect[3]+n.view[1]]),o=a[0]+this.data.parentRect[2]-this.data.parentRect[0],s=a[1]
return this.container.style.transformOrigin="".concat(-o,"px ").concat(-s,"px"),this.container.style.left="".concat(o,"px"),this.container.style.top="".concat(s,"px"),this.container.appendChild(r.render()),this.container}}]),r}(w),L=function(){function e(t){b(this,e),this.container=t.container,this.trigger=t.trigger,this.color=t.color,this.title=t.title,this.modificationDate=t.modificationDate,this.contents=t.contents,this.hideWrapper=t.hideWrapper||!1,this.pinned=!1}return A(e,[{key:"render",value:function(){var e=this,t=document.createElement("div")
t.className="popupWrapper",this.hideElement=this.hideWrapper?t:this.container,this.hideElement.setAttribute("hidden",!0)
var r=document.createElement("div")
r.className="popup"
var n=this.color
if(n){var o=.7*(255-n[0])+n[0],s=.7*(255-n[1])+n[1],u=.7*(255-n[2])+n[2]
r.style.backgroundColor=i.Util.makeHexColor(0|o,0|s,0|u)}var l=document.createElement("h1")
l.textContent=this.title,r.appendChild(l)
var c=a.PDFDateString.toDateObject(this.modificationDate)
if(c){var h=document.createElement("span")
h.textContent="{{date}}, {{time}}",h.dataset.l10nId="annotation_date_string",h.dataset.l10nArgs=JSON.stringify({date:c.toLocaleDateString(),time:c.toLocaleTimeString()}),r.appendChild(h)}var f=this._formatContents(this.contents)
return r.appendChild(f),Array.isArray(this.trigger)||(this.trigger=[this.trigger]),this.trigger.forEach((function(t){t.addEventListener("click",e._toggle.bind(e)),t.addEventListener("mouseover",e._show.bind(e,!1)),t.addEventListener("mouseout",e._hide.bind(e,!1))})),r.addEventListener("click",this._hide.bind(this,!0)),t.appendChild(r),t}},{key:"_formatContents",value:function(e){for(var t=document.createElement("p"),r=e.split(/(?:\r\n?|\n)/),n=0,a=r.length;n<a;++n){var i=r[n]
t.appendChild(document.createTextNode(i)),n<a-1&&t.appendChild(document.createElement("br"))}return t}},{key:"_toggle",value:function(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e&&(this.pinned=!0),this.hideElement.hasAttribute("hidden")&&(this.hideElement.removeAttribute("hidden"),this.container.style.zIndex+=1)}},{key:"_hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
e&&(this.pinned=!1),this.hideElement.hasAttribute("hidden")||this.pinned||(this.hideElement.setAttribute("hidden",!0),this.container.style.zIndex-=1)}}]),e}(),I=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0})}return A(r,[{key:"render",value:function(){return this.container.className="freeTextAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}]),r}(w),M=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0})}return A(r,[{key:"render",value:function(){this.container.className="lineAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),a=this.svgFactory.createElement("svg:line")
return a.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),a.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),a.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),a.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),a.setAttribute("stroke-width",e.borderStyle.width||1),a.setAttribute("stroke","transparent"),n.appendChild(a),this.container.append(n),this._createPopup(a,e),this.container}}]),r}(w),j=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0})}return A(r,[{key:"render",value:function(){this.container.className="squareAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),a=e.borderStyle.width,i=this.svgFactory.createElement("svg:rect")
return i.setAttribute("x",a/2),i.setAttribute("y",a/2),i.setAttribute("width",t-a),i.setAttribute("height",r-a),i.setAttribute("stroke-width",a||1),i.setAttribute("stroke","transparent"),i.setAttribute("fill","none"),n.appendChild(i),this.container.append(n),this._createPopup(i,e),this.container}}]),r}(w),D=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0})}return A(r,[{key:"render",value:function(){this.container.className="circleAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),a=e.borderStyle.width,i=this.svgFactory.createElement("svg:ellipse")
return i.setAttribute("cx",t/2),i.setAttribute("cy",r/2),i.setAttribute("rx",t/2-a/2),i.setAttribute("ry",r/2-a/2),i.setAttribute("stroke-width",a||1),i.setAttribute("stroke","transparent"),i.setAttribute("fill","none"),n.appendChild(i),this.container.append(n),this._createPopup(i,e),this.container}}]),r}(w),N=function(e){c(r,e)
var t=f(r)
function r(e){var n
b(this,r)
var a=!!(e.data.hasPopup||e.data.title||e.data.contents)
return(n=t.call(this,e,{isRenderable:a,ignoreBorder:!0})).containerClassName="polylineAnnotation",n.svgElementName="svg:polyline",n}return A(r,[{key:"render",value:function(){this.container.className=this.containerClassName
var e,t=this.data,r=t.rect[2]-t.rect[0],n=t.rect[3]-t.rect[1],a=this.svgFactory.create(r,n),i=[],o=g(t.vertices)
try{for(o.s();!(e=o.n()).done;){var s=e.value,u=s.x-t.rect[0],l=t.rect[3]-s.y
i.push(u+","+l)}}catch(h){o.e(h)}finally{o.f()}i=i.join(" ")
var c=this.svgFactory.createElement(this.svgElementName)
return c.setAttribute("points",i),c.setAttribute("stroke-width",t.borderStyle.width||1),c.setAttribute("stroke","transparent"),c.setAttribute("fill","none"),a.appendChild(c),this.container.append(a),this._createPopup(c,t),this.container}}]),r}(w),q=function(e){c(r,e)
var t=f(r)
function r(e){var n
return b(this,r),(n=t.call(this,e)).containerClassName="polygonAnnotation",n.svgElementName="svg:polygon",n}return r}(N),U=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0})}return A(r,[{key:"render",value:function(){return this.container.className="caretAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}]),r}(w),W=function(e){c(r,e)
var t=f(r)
function r(e){var n
b(this,r)
var a=!!(e.data.hasPopup||e.data.title||e.data.contents)
return(n=t.call(this,e,{isRenderable:a,ignoreBorder:!0})).containerClassName="inkAnnotation",n.svgElementName="svg:polyline",n}return A(r,[{key:"render",value:function(){this.container.className=this.containerClassName
var e,t=this.data,r=t.rect[2]-t.rect[0],n=t.rect[3]-t.rect[1],a=this.svgFactory.create(r,n),i=g(t.inkLists)
try{for(i.s();!(e=i.n()).done;){var o,s=e.value,u=[],l=g(s)
try{for(l.s();!(o=l.n()).done;){var c=o.value,h=c.x-t.rect[0],f=t.rect[3]-c.y
u.push("".concat(h,",").concat(f))}}catch(p){l.e(p)}finally{l.f()}u=u.join(" ")
var d=this.svgFactory.createElement(this.svgElementName)
d.setAttribute("points",u),d.setAttribute("stroke-width",t.borderStyle.width||1),d.setAttribute("stroke","transparent"),d.setAttribute("fill","none"),this._createPopup(d,t),a.appendChild(d)}}catch(p){i.e(p)}finally{i.f()}return this.container.append(a),this.container}}]),r}(w),B=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0,createQuadrilaterals:!0})}return A(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("highlightAnnotation"):(this.container.className="highlightAnnotation",this.container)}}]),r}(w),G=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0,createQuadrilaterals:!0})}return A(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("underlineAnnotation"):(this.container.className="underlineAnnotation",this.container)}}]),r}(w),z=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0,createQuadrilaterals:!0})}return A(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("squigglyAnnotation"):(this.container.className="squigglyAnnotation",this.container)}}]),r}(w),H=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0,createQuadrilaterals:!0})}return A(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("strikeoutAnnotation"):(this.container.className="strikeoutAnnotation",this.container)}}]),r}(w),V=function(e){c(r,e)
var t=f(r)
function r(e){b(this,r)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return t.call(this,e,{isRenderable:n,ignoreBorder:!0})}return A(r,[{key:"render",value:function(){return this.container.className="stampAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}]),r}(w),Y=function(e){c(r,e)
var t=f(r)
function r(e){var n,o
b(this,r)
var s=(o=t.call(this,e,{isRenderable:!0})).data.file,u=s.filename,l=s.content
return o.filename=(0,a.getFilenameFromUrl)(u),o.content=l,null===(n=o.linkService.eventBus)||void 0===n||n.dispatch("fileattachmentannotation",{source:p(o),id:(0,i.stringToPDFString)(u),filename:u,content:l}),o}return A(r,[{key:"render",value:function(){this.container.className="fileAttachmentAnnotation"
var e=document.createElement("div")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.addEventListener("dblclick",this._download.bind(this)),this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(e,this.data),this.container.appendChild(e),this.container}},{key:"_download",value:function(){this.downloadManager?this.downloadManager.downloadData(this.content,this.filename,""):(0,i.warn)("Download cannot be started due to unavailable download manager")}}]),r}(w),X=function(){function e(){b(this,e)}return A(e,null,[{key:"render",value:function(e){var t,r=[],n=[],s=g(e.annotations)
try{for(s.s();!(t=s.n()).done;){var u=t.value
u&&(u.annotationType!==i.AnnotationType.POPUP?r.push(u):n.push(u))}}catch(m){s.e(m)}finally{s.f()}n.length&&r.push.apply(r,n)
for(var l=0,c=r;l<c.length;l++){var h=c[l],f=S.create({data:h,layer:e.div,page:e.page,viewport:e.viewport,linkService:e.linkService,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||"",renderInteractiveForms:"boolean"!=typeof e.renderInteractiveForms||e.renderInteractiveForms,svgFactory:new a.DOMSVGFactory,annotationStorage:e.annotationStorage||new o.AnnotationStorage,enableScripting:e.enableScripting,hasJSActions:e.hasJSActions,mouseState:e.mouseState||{isDown:!1}})
if(f.isRenderable){var d=f.render()
if(h.hidden&&(d.style.visibility="hidden"),Array.isArray(d)){var p,v=g(d)
try{for(v.s();!(p=v.n()).done;){var y=p.value
e.div.appendChild(y)}}catch(m){v.e(m)}finally{v.f()}}else f instanceof F?e.div.prepend(d):e.div.appendChild(d)}}}},{key:"update",value:function(e){var t,r="matrix(".concat(e.viewport.transform.join(","),")"),n=g(e.annotations)
try{for(n.s();!(t=n.n()).done;){var a=t.value,i=e.div.querySelectorAll('[data-annotation-id="'.concat(a.id,'"]'))
i&&i.forEach((function(e){e.style.transform=r}))}}catch(o){n.e(o)}finally{n.f()}e.div.removeAttribute("hidden")}}]),e}()
t.AnnotationLayer=X},(e,t)=>{"use strict"
function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return Math.floor(255*Math.max(0,Math.min(1,e))).toString(16).padStart(2,"0")}Object.defineProperty(t,"__esModule",{value:!0}),t.ColorConverters=void 0
var o=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e)}var t,n,o
return t=e,o=[{key:"CMYK_G",value:function(e){var t=r(e,4),n=t[0],a=t[1],i=t[2],o=t[3]
return["G",1-Math.min(1,.3*n+.59*i+.11*a+o)]}},{key:"G_CMYK",value:function(e){return["CMYK",0,0,0,1-r(e,1)[0]]}},{key:"G_RGB",value:function(e){var t=r(e,1)[0]
return["RGB",t,t,t]}},{key:"G_HTML",value:function(e){var t=i(r(e,1)[0])
return"#".concat(t).concat(t).concat(t)}},{key:"RGB_G",value:function(e){var t=r(e,3)
return["G",.3*t[0]+.59*t[1]+.11*t[2]]}},{key:"RGB_HTML",value:function(e){var t=r(e,3),n=t[0],a=t[1],o=t[2],s=i(n),u=i(a),l=i(o)
return"#".concat(s).concat(u).concat(l)}},{key:"T_HTML",value:function(){return"#00000000"}},{key:"CMYK_RGB",value:function(e){var t=r(e,4),n=t[0],a=t[1],i=t[2],o=t[3]
return["RGB",1-Math.min(1,n+o),1-Math.min(1,i+o),1-Math.min(1,a+o)]}},{key:"CMYK_HTML",value:function(e){return this.RGB_HTML(this.CMYK_RGB(e))}},{key:"RGB_CMYK",value:function(e){var t=r(e,3),n=1-t[0],a=1-t[1],i=1-t[2]
return["CMYK",n,a,i,Math.min(n,a,i)]}}],(n=null)&&a(t.prototype,n),o&&a(t,o),e}()
t.ColorConverters=o},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.renderTextLayer=void 0
var n=r(4),a=function(){var e=/\S/
function t(t,r,a){var i,o=document.createElement("span"),s={angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1}
if(t._textDivs.push(o),i=r.str,!e.test(i))return s.isWhitespace=!0,void t._textDivProperties.set(o,s)
var u=n.Util.transform(t._viewport.transform,r.transform),l=Math.atan2(u[1],u[0]),c=a[r.fontName]
c.vertical&&(l+=Math.PI/2)
var h,f,d=Math.sqrt(u[2]*u[2]+u[3]*u[3]),p=d
c.ascent?p=c.ascent*p:c.descent&&(p=(1+c.descent)*p),0===l?(h=u[4],f=u[5]-p):(h=u[4]+p*Math.sin(l),f=u[5]-p*Math.cos(l)),o.style.left="".concat(h,"px"),o.style.top="".concat(f,"px"),o.style.fontSize="".concat(d,"px"),o.style.fontFamily=c.fontFamily,o.textContent=r.str,t._fontInspectorEnabled&&(o.dataset.fontName=r.fontName),0!==l&&(s.angle=l*(180/Math.PI))
var v=!1
if(r.str.length>1)v=!0
else if(r.transform[0]!==r.transform[3]){var g=Math.abs(r.transform[0]),y=Math.abs(r.transform[3])
g!==y&&Math.max(g,y)/Math.min(g,y)>1.5&&(v=!0)}if(v&&(c.vertical?s.canvasWidth=r.height*t._viewport.scale:s.canvasWidth=r.width*t._viewport.scale),t._textDivProperties.set(o,s),t._textContentStream&&t._layoutText(o),t._enhanceTextSelection){var m=1,b=0
0!==l&&(m=Math.cos(l),b=Math.sin(l))
var _,A,S=(c.vertical?r.height:r.width)*t._viewport.scale,w=d
0!==l?(_=[m,b,-b,m,h,f],A=n.Util.getAxialAlignedBoundingBox([0,0,S,w],_)):A=[h,f,h+S,f+w],t._bounds.push({left:A[0],top:A[1],right:A[2],bottom:A[3],div:o,size:[S,w],m:_})}}function r(e){if(!e._canceled){var t=e._textDivs,r=e._capability,n=t.length
if(n>1e5)return e._renderingDone=!0,void r.resolve()
if(!e._textContentStream)for(var a=0;a<n;a++)e._layoutText(t[a])
e._renderingDone=!0,r.resolve()}}function a(e,t,r){for(var n=0,a=0;a<r;a++){var i=e[t++]
i>0&&(n=n?Math.min(i,n):i)}return n}function i(e){for(var t=e._bounds,r=e._viewport,i=function(e,t,r){var n=r.map((function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}}))
o(e,n)
var a=new Array(r.length)
return n.forEach((function(e){var t=e.index
a[t]={left:e.x1New,top:0,right:e.x2New,bottom:0}})),r.map((function(t,r){var i=a[r],o=n[r]
o.x1=t.top,o.y1=e-i.right,o.x2=t.bottom,o.y2=e-i.left,o.index=r,o.x1New=void 0,o.x2New=void 0})),o(t,n),n.forEach((function(e){var t=e.index
a[t].top=e.x1New,a[t].bottom=e.x2New})),a}(r.width,r.height,t),s=function(r){var o=t[r].div,s=e._textDivProperties.get(o)
if(0===s.angle)return s.paddingLeft=t[r].left-i[r].left,s.paddingTop=t[r].top-i[r].top,s.paddingRight=i[r].right-t[r].right,s.paddingBottom=i[r].bottom-t[r].bottom,e._textDivProperties.set(o,s),"continue"
var u=i[r],l=t[r],c=l.m,h=c[0],f=c[1],d=[[0,0],[0,l.size[1]],[l.size[0],0],l.size],p=new Float64Array(64)
d.forEach((function(e,t){var r=n.Util.applyTransform(e,c)
p[t+0]=h&&(u.left-r[0])/h,p[t+4]=f&&(u.top-r[1])/f,p[t+8]=h&&(u.right-r[0])/h,p[t+12]=f&&(u.bottom-r[1])/f,p[t+16]=f&&(u.left-r[0])/-f,p[t+20]=h&&(u.top-r[1])/h,p[t+24]=f&&(u.right-r[0])/-f,p[t+28]=h&&(u.bottom-r[1])/h,p[t+32]=h&&(u.left-r[0])/-h,p[t+36]=f&&(u.top-r[1])/-f,p[t+40]=h&&(u.right-r[0])/-h,p[t+44]=f&&(u.bottom-r[1])/-f,p[t+48]=f&&(u.left-r[0])/f,p[t+52]=h&&(u.top-r[1])/-h,p[t+56]=f&&(u.right-r[0])/f,p[t+60]=h&&(u.bottom-r[1])/-h}))
var v=1+Math.min(Math.abs(h),Math.abs(f))
s.paddingLeft=a(p,32,16)/v,s.paddingTop=a(p,48,16)/v,s.paddingRight=a(p,0,16)/v,s.paddingBottom=a(p,16,16)/v,e._textDivProperties.set(o,s)},u=0;u<i.length;u++)s(u)}function o(e,t){t.sort((function(e,t){return e.x1-t.x1||e.index-t.index}))
var r=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}]
t.forEach((function(e){for(var t=0;t<r.length&&r[t].end<=e.y1;)t++
for(var n,a,i=r.length-1;i>=0&&r[i].start>=e.y2;)i--
var o,s,u=-1/0
for(o=t;o<=i;o++){var l=void 0;(l=(a=(n=r[o]).boundary).x2>e.x1?a.index>e.index?a.x1New:e.x1:void 0===a.x2New?(a.x2+e.x1)/2:a.x2New)>u&&(u=l)}for(e.x1New=u,o=t;o<=i;o++)void 0===(a=(n=r[o]).boundary).x2New?a.x2>e.x1?a.index>e.index&&(a.x2New=a.x2):a.x2New=u:a.x2New>u&&(a.x2New=Math.max(u,a.x2))
var c=[],h=null
for(o=t;o<=i;o++){var f=(a=(n=r[o]).boundary).x2>e.x2?a:e
h===f?c[c.length-1].end=n.end:(c.push({start:n.start,end:n.end,boundary:f}),h=f)}for(r[t].start<e.y1&&(c[0].start=e.y1,c.unshift({start:r[t].start,end:e.y1,boundary:r[t].boundary})),e.y2<r[i].end&&(c[c.length-1].end=e.y2,c.push({start:e.y2,end:r[i].end,boundary:r[i].boundary})),o=t;o<=i;o++)if(void 0===(a=(n=r[o]).boundary).x2New){var d=!1
for(s=t-1;!d&&s>=0&&r[s].start>=a.y1;s--)d=r[s].boundary===a
for(s=i+1;!d&&s<r.length&&r[s].end<=a.y2;s++)d=r[s].boundary===a
for(s=0;!d&&s<c.length;s++)d=c[s].boundary===a
d||(a.x2New=u)}Array.prototype.splice.apply(r,[t,i-t+1].concat(c))})),r.forEach((function(t){var r=t.boundary
void 0===r.x2New&&(r.x2New=Math.max(e,r.x2))}))}function s(e){var t,r=this,a=e.textContent,i=e.textContentStream,o=e.container,s=e.viewport,u=e.textDivs,l=e.textContentItemsStr,c=e.enhanceTextSelection
this._textContent=a,this._textContentStream=i,this._container=o,this._document=o.ownerDocument,this._viewport=s,this._textDivs=u||[],this._textContentItemsStr=l||[],this._enhanceTextSelection=!!c,this._fontInspectorEnabled=!(null===(t=globalThis.FontInspector)||void 0===t||!t.enabled),this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,n.createPromiseCapability)(),this._renderTimer=null,this._bounds=[],this._capability.promise.finally((function(){r._layoutTextCtx&&(r._layoutTextCtx.canvas.width=0,r._layoutTextCtx.canvas.height=0,r._layoutTextCtx=null)})).catch((function(){}))}return s.prototype={get promise(){return this._capability.promise},cancel:function(){this._canceled=!0,this._reader&&(this._reader.cancel(new n.AbortException("TextLayer task cancelled.")),this._reader=null),null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject(new Error("TextLayer task cancelled."))},_processItems:function(e,r){for(var n=0,a=e.length;n<a;n++)this._textContentItemsStr.push(e[n].str),t(this,e[n],r)},_layoutText:function(e){var t=this._textDivProperties.get(e)
if(!t.isWhitespace){var r=""
if(0!==t.canvasWidth){var n=e.style,a=n.fontSize,i=n.fontFamily
a===this._layoutTextLastFontSize&&i===this._layoutTextLastFontFamily||(this._layoutTextCtx.font="".concat(a," ").concat(i),this._layoutTextLastFontSize=a,this._layoutTextLastFontFamily=i)
var o=this._layoutTextCtx.measureText(e.textContent).width
o>0&&(t.scale=t.canvasWidth/o,r="scaleX(".concat(t.scale,")"))}0!==t.angle&&(r="rotate(".concat(t.angle,"deg) ").concat(r)),r.length>0&&(this._enhanceTextSelection&&(t.originalTransform=r),e.style.transform=r),this._textDivProperties.set(e,t),this._container.appendChild(e)}},_render:function(e){var t=this,a=(0,n.createPromiseCapability)(),i=Object.create(null),o=this._document.createElement("canvas")
if(o.mozOpaque=!0,this._layoutTextCtx=o.getContext("2d",{alpha:!1}),this._textContent){var s=this._textContent.items,u=this._textContent.styles
this._processItems(s,u),a.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.')
this._reader=this._textContentStream.getReader(),function e(){t._reader.read().then((function(r){var n=r.value
r.done?a.resolve():(Object.assign(i,n.styles),t._processItems(n.items,i),e())}),a.reject)}()}a.promise.then((function(){i=null,e?t._renderTimer=setTimeout((function(){r(t),t._renderTimer=null}),e):r(t)}),this._capability.reject)},expandTextDivs:function(e){if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(i(this),this._bounds=null)
for(var t=[],r=[],n=0,a=this._textDivs.length;n<a;n++){var o=this._textDivs[n],s=this._textDivProperties.get(o)
s.isWhitespace||(e?(t.length=0,r.length=0,s.originalTransform&&t.push(s.originalTransform),s.paddingTop>0?(r.push("".concat(s.paddingTop,"px")),t.push("translateY(".concat(-s.paddingTop,"px)"))):r.push(0),s.paddingRight>0?r.push("".concat(s.paddingRight/s.scale,"px")):r.push(0),s.paddingBottom>0?r.push("".concat(s.paddingBottom,"px")):r.push(0),s.paddingLeft>0?(r.push("".concat(s.paddingLeft/s.scale,"px")),t.push("translateX(".concat(-s.paddingLeft/s.scale,"px)"))):r.push(0),o.style.padding=r.join(" "),t.length&&(o.style.transform=t.join(" "))):(o.style.padding=null,o.style.transform=s.originalTransform))}}}},function(e){var t=new s({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection})
return t._render(e.timeout),t}}()
t.renderTextLayer=a},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0
var n=r(4),a=r(1),i=r(6)
function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var r
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=l(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function l(e,t){if(e){if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var p=function(){throw new Error("Not implemented: SVGGraphics")}
t.SVGGraphics=p
var v=function(e){if(Number.isInteger(e))return e.toString()
var t=e.toFixed(10),r=t.length-1
if("0"!==t[r])return t
do{r--}while("0"===t[r])
return t.substring(0,"."===t[r]?r:r+1)},g=function(e){if(0===e[4]&&0===e[5]){if(0===e[1]&&0===e[2])return 1===e[0]&&1===e[3]?"":"scale(".concat(v(e[0])," ").concat(v(e[3]),")")
if(e[0]===e[3]&&e[1]===-e[2]){var t=180*Math.acos(e[0])/Math.PI
return"rotate(".concat(v(t),")")}}else if(1===e[0]&&0===e[1]&&0===e[2]&&1===e[3])return"translate(".concat(v(e[4])," ").concat(v(e[5]),")")
return"matrix(".concat(v(e[0])," ").concat(v(e[1])," ").concat(v(e[2])," ").concat(v(e[3])," ").concat(v(e[4])," ")+"".concat(v(e[5]),")")},y={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},m=["butt","round","square"],b=["miter","round","bevel"],_=function(){for(var e=new Uint8Array([137,80,78,71,13,10,26,10]),t=new Int32Array(256),r=0;r<256;r++){for(var a=r,o=0;o<8;o++)a=1&a?3988292384^a>>1&2147483647:a>>1&2147483647
t[r]=a}function s(e,r,n,a){var i=a,o=r.length
n[i]=o>>24&255,n[i+1]=o>>16&255,n[i+2]=o>>8&255,n[i+3]=255&o,n[i+=4]=255&e.charCodeAt(0),n[i+1]=255&e.charCodeAt(1),n[i+2]=255&e.charCodeAt(2),n[i+3]=255&e.charCodeAt(3),i+=4,n.set(r,i)
var s=function(e,r,n){for(var a=-1,i=r;i<n;i++){var o=255&(a^e[i])
a=a>>>8^t[o]}return-1^a}(n,a+4,i+=r.length)
n[i]=s>>24&255,n[i+1]=s>>16&255,n[i+2]=s>>8&255,n[i+3]=255&s}function u(e){var t=e.length,r=65535,n=Math.ceil(t/r),a=new Uint8Array(2+t+5*n+4),i=0
a[i++]=120,a[i++]=156
for(var o=0;t>r;)a[i++]=0,a[i++]=255,a[i++]=255,a[i++]=0,a[i++]=0,a.set(e.subarray(o,o+r),i),i+=r,o+=r,t-=r
a[i++]=1,a[i++]=255&t,a[i++]=t>>8&255,a[i++]=255&~t,a[i++]=(65535&~t)>>8&255,a.set(e.subarray(o),i),i+=e.length-o
var s=function(e,t,r){for(var n=1,a=0,i=t;i<r;++i)a=(a+(n=(n+(255&e[i]))%65521))%65521
return a<<16|n}(e,0,e.length)
return a[i++]=s>>24&255,a[i++]=s>>16&255,a[i++]=s>>8&255,a[i++]=255&s,a}function l(t,r,a,o){var l,c,h,f=t.width,d=t.height,p=t.data
switch(r){case n.ImageKind.GRAYSCALE_1BPP:c=0,l=1,h=f+7>>3
break
case n.ImageKind.RGB_24BPP:c=2,l=8,h=3*f
break
case n.ImageKind.RGBA_32BPP:c=6,l=8,h=4*f
break
default:throw new Error("invalid format")}for(var v=new Uint8Array((1+h)*d),g=0,y=0,m=0;m<d;++m)v[g++]=0,v.set(p.subarray(y,y+h),g),y+=h,g+=h
if(r===n.ImageKind.GRAYSCALE_1BPP&&o){g=0
for(var b=0;b<d;b++){g++
for(var _=0;_<h;_++)v[g++]^=255}}var A=new Uint8Array([f>>24&255,f>>16&255,f>>8&255,255&f,d>>24&255,d>>16&255,d>>8&255,255&d,l,c,0,0,0]),S=function(e){if(!i.isNodeJS)return u(e)
try{var t
t=parseInt(process.versions.node)>=8?e:Buffer.from(e)
var r=require("zlib").deflateSync(t,{level:9})
return r instanceof Uint8Array?r:new Uint8Array(r)}catch(a){(0,n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+a)}return u(e)}(v),w=e.length+36+A.length+S.length,k=new Uint8Array(w),x=0
return k.set(e,x),s("IHDR",A,k,x+=e.length),s("IDATA",S,k,x+=12+A.length),x+=12+S.length,s("IEND",new Uint8Array(0),k,x),(0,n.createObjectURL)(k,"image/png",a)}return function(e,t,r){return l(e,void 0===e.kind?n.ImageKind.GRAYSCALE_1BPP:e.kind,t,r)}}(),A=function(){function e(){h(this,e),this.fontSizeScale=1,this.fontWeight=y.fontWeight,this.fontSize=0,this.textMatrix=n.IDENTITY_MATRIX,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.textRenderingMode=n.TextRenderingMode.FILL,this.textMatrixScale=1,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=y.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null
this.maskId=""}return d(e,[{key:"clone",value:function(){return Object.create(this)}},{key:"setCurrentPoint",value:function(e,t){this.x=e,this.y=t}}]),e}(),S=0,w=0,k=0
t.SVGGraphics=p=function(){function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
for(var o in h(this,e),this.svgFactory=new a.DOMSVGFactory,this.current=new A,this.transformMatrix=n.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=t,this.objs=r,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!i,this._operatorIdMapping=[],n.OPS)this._operatorIdMapping[n.OPS[o]]=o}return d(e,[{key:"save",value:function(){this.transformStack.push(this.transformMatrix)
var e=this.current
this.extraStack.push(e),this.current=e.clone()}},{key:"restore",value:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null}},{key:"group",value:function(e){this.save(),this.executeOpTree(e),this.restore()}},{key:"loadDependencies",value:function(e){for(var t=this,r=e.fnArray,a=e.argsArray,i=0,o=r.length;i<o;i++)if(r[i]===n.OPS.dependency){var s,l=u(a[i])
try{var c=function(){var e=s.value,r=e.startsWith("g_")?t.commonObjs:t.objs,n=new Promise((function(t){r.get(e,t)}))
t.current.dependencies.push(n)}
for(l.s();!(s=l.n()).done;)c()}catch(h){l.e(h)}finally{l.f()}}return Promise.all(this.current.dependencies)}},{key:"transform",value:function(e,t,r,a,i,o){var s=[e,t,r,a,i,o]
this.transformMatrix=n.Util.transform(this.transformMatrix,s),this.tgrp=null}},{key:"getSVG",value:function(e,t){var r=this
this.viewport=t
var a=this._initialize(t)
return this.loadDependencies(e).then((function(){return r.transformMatrix=n.IDENTITY_MATRIX,r.executeOpTree(r.convertOpList(e)),a}))}},{key:"convertOpList",value:function(e){for(var t=this._operatorIdMapping,r=e.argsArray,n=e.fnArray,a=[],i=0,o=n.length;i<o;i++){var s=n[i]
a.push({fnId:s,fn:t[s],args:r[i]})}return function(e){var t,r=[],n=[],a=u(e)
try{for(a.s();!(t=a.n()).done;){var i=t.value
"save"!==i.fn?"restore"===i.fn?r=n.pop():r.push(i):(r.push({fnId:92,fn:"group",items:[]}),n.push(r),r=r[r.length-1].items)}}catch(o){a.e(o)}finally{a.f()}return r}(a)}},{key:"executeOpTree",value:function(e){var t,r=u(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,i=a.fn,o=a.fnId,s=a.args
switch(0|o){case n.OPS.beginText:this.beginText()
break
case n.OPS.dependency:break
case n.OPS.setLeading:this.setLeading(s)
break
case n.OPS.setLeadingMoveText:this.setLeadingMoveText(s[0],s[1])
break
case n.OPS.setFont:this.setFont(s)
break
case n.OPS.showText:case n.OPS.showSpacedText:this.showText(s[0])
break
case n.OPS.endText:this.endText()
break
case n.OPS.moveText:this.moveText(s[0],s[1])
break
case n.OPS.setCharSpacing:this.setCharSpacing(s[0])
break
case n.OPS.setWordSpacing:this.setWordSpacing(s[0])
break
case n.OPS.setHScale:this.setHScale(s[0])
break
case n.OPS.setTextMatrix:this.setTextMatrix(s[0],s[1],s[2],s[3],s[4],s[5])
break
case n.OPS.setTextRise:this.setTextRise(s[0])
break
case n.OPS.setTextRenderingMode:this.setTextRenderingMode(s[0])
break
case n.OPS.setLineWidth:this.setLineWidth(s[0])
break
case n.OPS.setLineJoin:this.setLineJoin(s[0])
break
case n.OPS.setLineCap:this.setLineCap(s[0])
break
case n.OPS.setMiterLimit:this.setMiterLimit(s[0])
break
case n.OPS.setFillRGBColor:this.setFillRGBColor(s[0],s[1],s[2])
break
case n.OPS.setStrokeRGBColor:this.setStrokeRGBColor(s[0],s[1],s[2])
break
case n.OPS.setStrokeColorN:this.setStrokeColorN(s)
break
case n.OPS.setFillColorN:this.setFillColorN(s)
break
case n.OPS.shadingFill:this.shadingFill(s[0])
break
case n.OPS.setDash:this.setDash(s[0],s[1])
break
case n.OPS.setRenderingIntent:this.setRenderingIntent(s[0])
break
case n.OPS.setFlatness:this.setFlatness(s[0])
break
case n.OPS.setGState:this.setGState(s[0])
break
case n.OPS.fill:this.fill()
break
case n.OPS.eoFill:this.eoFill()
break
case n.OPS.stroke:this.stroke()
break
case n.OPS.fillStroke:this.fillStroke()
break
case n.OPS.eoFillStroke:this.eoFillStroke()
break
case n.OPS.clip:this.clip("nonzero")
break
case n.OPS.eoClip:this.clip("evenodd")
break
case n.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case n.OPS.paintImageXObject:this.paintImageXObject(s[0])
break
case n.OPS.paintInlineImageXObject:this.paintInlineImageXObject(s[0])
break
case n.OPS.paintImageMaskXObject:this.paintImageMaskXObject(s[0])
break
case n.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(s[0],s[1])
break
case n.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case n.OPS.closePath:this.closePath()
break
case n.OPS.closeStroke:this.closeStroke()
break
case n.OPS.closeFillStroke:this.closeFillStroke()
break
case n.OPS.closeEOFillStroke:this.closeEOFillStroke()
break
case n.OPS.nextLine:this.nextLine()
break
case n.OPS.transform:this.transform(s[0],s[1],s[2],s[3],s[4],s[5])
break
case n.OPS.constructPath:this.constructPath(s[0],s[1])
break
case n.OPS.endPath:this.endPath()
break
case 92:this.group(a.items)
break
default:(0,n.warn)("Unimplemented operator ".concat(i))}}}catch(l){r.e(l)}finally{r.f()}}},{key:"setWordSpacing",value:function(e){this.current.wordSpacing=e}},{key:"setCharSpacing",value:function(e){this.current.charSpacing=e}},{key:"nextLine",value:function(){this.moveText(0,this.current.leading)}},{key:"setTextMatrix",value:function(e,t,r,n,a,i){var o=this.current
o.textMatrix=o.lineMatrix=[e,t,r,n,a,i],o.textMatrixScale=Math.sqrt(e*e+t*t),o.x=o.lineX=0,o.y=o.lineY=0,o.xcoords=[],o.ycoords=[],o.tspan=this.svgFactory.createElement("svg:tspan"),o.tspan.setAttributeNS(null,"font-family",o.fontFamily),o.tspan.setAttributeNS(null,"font-size","".concat(v(o.fontSize),"px")),o.tspan.setAttributeNS(null,"y",v(-o.y)),o.txtElement=this.svgFactory.createElement("svg:text"),o.txtElement.appendChild(o.tspan)}},{key:"beginText",value:function(){var e=this.current
e.x=e.lineX=0,e.y=e.lineY=0,e.textMatrix=n.IDENTITY_MATRIX,e.lineMatrix=n.IDENTITY_MATRIX,e.textMatrixScale=1,e.tspan=this.svgFactory.createElement("svg:tspan"),e.txtElement=this.svgFactory.createElement("svg:text"),e.txtgrp=this.svgFactory.createElement("svg:g"),e.xcoords=[],e.ycoords=[]}},{key:"moveText",value:function(e,t){var r=this.current
r.x=r.lineX+=e,r.y=r.lineY+=t,r.xcoords=[],r.ycoords=[],r.tspan=this.svgFactory.createElement("svg:tspan"),r.tspan.setAttributeNS(null,"font-family",r.fontFamily),r.tspan.setAttributeNS(null,"font-size","".concat(v(r.fontSize),"px")),r.tspan.setAttributeNS(null,"y",v(-r.y))}},{key:"showText",value:function(e){var t=this.current,r=t.font,a=t.fontSize
if(0!==a){var i,o=t.fontSizeScale,s=t.charSpacing,l=t.wordSpacing,c=t.fontDirection,h=t.textHScale*c,f=r.vertical,d=f?1:-1,p=r.defaultVMetrics,m=a*t.fontMatrix[0],b=0,_=u(e)
try{for(_.s();!(i=_.n()).done;){var A=i.value
if(null!==A)if((0,n.isNum)(A))b+=d*A*a/1e3
else{var S=(A.isSpace?l:0)+s,w=A.fontChar,k=void 0,x=void 0,C=A.width
if(f){var P=void 0,R=A.vmetric||p
P=-(P=A.vmetric?R[1]:.5*C)*m
var T=R[2]*m
C=R?-R[0]:C,k=P/o,x=(b+T)/o}else k=b/o,x=0;(A.isInFont||r.missingFile)&&(t.xcoords.push(t.x+k),f&&t.ycoords.push(-t.y+x),t.tspan.textContent+=w)
b+=f?C*m-S*c:C*m+S*c}else b+=c*l}}catch(L){_.e(L)}finally{_.f()}t.tspan.setAttributeNS(null,"x",t.xcoords.map(v).join(" ")),f?t.tspan.setAttributeNS(null,"y",t.ycoords.map(v).join(" ")):t.tspan.setAttributeNS(null,"y",v(-t.y)),f?t.y-=b:t.x+=b*h,t.tspan.setAttributeNS(null,"font-family",t.fontFamily),t.tspan.setAttributeNS(null,"font-size","".concat(v(t.fontSize),"px")),t.fontStyle!==y.fontStyle&&t.tspan.setAttributeNS(null,"font-style",t.fontStyle),t.fontWeight!==y.fontWeight&&t.tspan.setAttributeNS(null,"font-weight",t.fontWeight)
var E=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
if(E===n.TextRenderingMode.FILL||E===n.TextRenderingMode.FILL_STROKE?(t.fillColor!==y.fillColor&&t.tspan.setAttributeNS(null,"fill",t.fillColor),t.fillAlpha<1&&t.tspan.setAttributeNS(null,"fill-opacity",t.fillAlpha)):t.textRenderingMode===n.TextRenderingMode.ADD_TO_PATH?t.tspan.setAttributeNS(null,"fill","transparent"):t.tspan.setAttributeNS(null,"fill","none"),E===n.TextRenderingMode.STROKE||E===n.TextRenderingMode.FILL_STROKE){var O=1/(t.textMatrixScale||1)
this._setStrokeAttributes(t.tspan,O)}var F=t.textMatrix
0!==t.textRise&&((F=F.slice())[5]+=t.textRise),t.txtElement.setAttributeNS(null,"transform","".concat(g(F)," scale(").concat(v(h),", -1)")),t.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.txtElement.appendChild(t.tspan),t.txtgrp.appendChild(t.txtElement),this._ensureTransformGroup().appendChild(t.txtElement)}}},{key:"setLeadingMoveText",value:function(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"addFontStyle",value:function(e){if(!e.data)throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.')
this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle))
var t=(0,n.createObjectURL)(e.data,e.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'.concat(e.loadedName,'";')+" src: url(".concat(t,"); }\n")}},{key:"setFont",value:function(e){var t=this.current,r=this.commonObjs.get(e[0]),a=e[1]
t.font=r,!this.embedFonts||r.missingFile||this.embeddedFonts[r.loadedName]||(this.addFontStyle(r),this.embeddedFonts[r.loadedName]=r),t.fontMatrix=r.fontMatrix||n.FONT_IDENTITY_MATRIX
var i="normal"
r.black?i="900":r.bold&&(i="bold")
var o=r.italic?"italic":"normal"
a<0?(a=-a,t.fontDirection=-1):t.fontDirection=1,t.fontSize=a,t.fontFamily=r.loadedName,t.fontWeight=i,t.fontStyle=o,t.tspan=this.svgFactory.createElement("svg:tspan"),t.tspan.setAttributeNS(null,"y",v(-t.y)),t.xcoords=[],t.ycoords=[]}},{key:"endText",value:function(){var e,t=this.current
t.textRenderingMode&n.TextRenderingMode.ADD_TO_PATH_FLAG&&null!==(e=t.txtElement)&&void 0!==e&&e.hasChildNodes()&&(t.element=t.txtElement,this.clip("nonzero"),this.endPath())}},{key:"setLineWidth",value:function(e){e>0&&(this.current.lineWidth=e)}},{key:"setLineCap",value:function(e){this.current.lineCap=m[e]}},{key:"setLineJoin",value:function(e){this.current.lineJoin=b[e]}},{key:"setMiterLimit",value:function(e){this.current.miterLimit=e}},{key:"setStrokeAlpha",value:function(e){this.current.strokeAlpha=e}},{key:"setStrokeRGBColor",value:function(e,t,r){this.current.strokeColor=n.Util.makeHexColor(e,t,r)}},{key:"setFillAlpha",value:function(e){this.current.fillAlpha=e}},{key:"setFillRGBColor",value:function(e,t,r){this.current.fillColor=n.Util.makeHexColor(e,t,r),this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[],this.current.ycoords=[]}},{key:"setStrokeColorN",value:function(e){this.current.strokeColor=this._makeColorN_Pattern(e)}},{key:"setFillColorN",value:function(e){this.current.fillColor=this._makeColorN_Pattern(e)}},{key:"shadingFill",value:function(e){var t=this.viewport.width,r=this.viewport.height,a=n.Util.inverseTransform(this.transformMatrix),i=n.Util.applyTransform([0,0],a),o=n.Util.applyTransform([0,r],a),s=n.Util.applyTransform([t,0],a),u=n.Util.applyTransform([t,r],a),l=Math.min(i[0],o[0],s[0],u[0]),c=Math.min(i[1],o[1],s[1],u[1]),h=Math.max(i[0],o[0],s[0],u[0]),f=Math.max(i[1],o[1],s[1],u[1]),d=this.svgFactory.createElement("svg:rect")
d.setAttributeNS(null,"x",l),d.setAttributeNS(null,"y",c),d.setAttributeNS(null,"width",h-l),d.setAttributeNS(null,"height",f-c),d.setAttributeNS(null,"fill",this._makeShadingPattern(e)),this.current.fillAlpha<1&&d.setAttributeNS(null,"fill-opacity",this.current.fillAlpha),this._ensureTransformGroup().appendChild(d)}},{key:"_makeColorN_Pattern",value:function(e){return"TilingPattern"===e[0]?this._makeTilingPattern(e):this._makeShadingPattern(e)}},{key:"_makeTilingPattern",value:function(e){var t=e[1],r=e[2],a=e[3]||n.IDENTITY_MATRIX,i=s(e[4],4),u=i[0],l=i[1],c=i[2],h=i[3],f=e[5],d=e[6],p=e[7],v="shading".concat(k++),g=s(n.Util.applyTransform([u,l],a),2),y=g[0],m=g[1],b=s(n.Util.applyTransform([c,h],a),2),_=b[0],A=b[1],S=s(n.Util.singularValueDecompose2dScale(a),2),w=f*S[0],x=d*S[1],C=this.svgFactory.createElement("svg:pattern")
C.setAttributeNS(null,"id",v),C.setAttributeNS(null,"patternUnits","userSpaceOnUse"),C.setAttributeNS(null,"width",w),C.setAttributeNS(null,"height",x),C.setAttributeNS(null,"x","".concat(y)),C.setAttributeNS(null,"y","".concat(m))
var P=this.svg,R=this.transformMatrix,T=this.current.fillColor,E=this.current.strokeColor,O=this.svgFactory.create(_-y,A-m)
if(this.svg=O,this.transformMatrix=a,2===p){var F=n.Util.makeHexColor.apply(n.Util,o(t))
this.current.fillColor=F,this.current.strokeColor=F}return this.executeOpTree(this.convertOpList(r)),this.svg=P,this.transformMatrix=R,this.current.fillColor=T,this.current.strokeColor=E,C.appendChild(O.childNodes[0]),this.defs.appendChild(C),"url(#".concat(v,")")}},{key:"_makeShadingPattern",value:function(e){switch(e[0]){case"RadialAxial":var t,r="shading".concat(k++),a=e[3]
switch(e[1]){case"axial":var i=e[4],o=e[5];(t=this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"x1",i[0]),t.setAttributeNS(null,"y1",i[1]),t.setAttributeNS(null,"x2",o[0]),t.setAttributeNS(null,"y2",o[1])
break
case"radial":var s=e[4],l=e[5],c=e[6],h=e[7];(t=this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"cx",l[0]),t.setAttributeNS(null,"cy",l[1]),t.setAttributeNS(null,"r",h),t.setAttributeNS(null,"fx",s[0]),t.setAttributeNS(null,"fy",s[1]),t.setAttributeNS(null,"fr",c)
break
default:throw new Error("Unknown RadialAxial type: ".concat(e[1]))}var f,d=u(a)
try{for(d.s();!(f=d.n()).done;){var p=f.value,v=this.svgFactory.createElement("svg:stop")
v.setAttributeNS(null,"offset",p[0]),v.setAttributeNS(null,"stop-color",p[1]),t.appendChild(v)}}catch(g){d.e(g)}finally{d.f()}return this.defs.appendChild(t),"url(#".concat(r,")")
case"Mesh":return(0,n.warn)("Unimplemented pattern Mesh"),null
case"Dummy":return"hotpink"
default:throw new Error("Unknown IR type: ".concat(e[0]))}}},{key:"setDash",value:function(e,t){this.current.dashArray=e,this.current.dashPhase=t}},{key:"constructPath",value:function(e,t){var r,a=this.current,i=a.x,o=a.y,s=[],l=0,c=u(e)
try{for(c.s();!(r=c.n()).done;){switch(0|r.value){case n.OPS.rectangle:i=t[l++],o=t[l++]
var h=t[l++],f=t[l++],d=i+h,p=o+f
s.push("M",v(i),v(o),"L",v(d),v(o),"L",v(d),v(p),"L",v(i),v(p),"Z")
break
case n.OPS.moveTo:i=t[l++],o=t[l++],s.push("M",v(i),v(o))
break
case n.OPS.lineTo:i=t[l++],o=t[l++],s.push("L",v(i),v(o))
break
case n.OPS.curveTo:i=t[l+4],o=t[l+5],s.push("C",v(t[l]),v(t[l+1]),v(t[l+2]),v(t[l+3]),v(i),v(o)),l+=6
break
case n.OPS.curveTo2:s.push("C",v(i),v(o),v(t[l]),v(t[l+1]),v(t[l+2]),v(t[l+3])),i=t[l+2],o=t[l+3],l+=4
break
case n.OPS.curveTo3:i=t[l+2],o=t[l+3],s.push("C",v(t[l]),v(t[l+1]),v(i),v(o),v(i),v(o)),l+=4
break
case n.OPS.closePath:s.push("Z")}}}catch(g){c.e(g)}finally{c.f()}s=s.join(" "),a.path&&e.length>0&&e[0]!==n.OPS.rectangle&&e[0]!==n.OPS.moveTo?s=a.path.getAttributeNS(null,"d")+s:(a.path=this.svgFactory.createElement("svg:path"),this._ensureTransformGroup().appendChild(a.path)),a.path.setAttributeNS(null,"d",s),a.path.setAttributeNS(null,"fill","none"),a.element=a.path,a.setCurrentPoint(i,o)}},{key:"endPath",value:function(){var e=this.current
if(e.path=null,this.pendingClip)if(e.element){var t="clippath".concat(S++),r=this.svgFactory.createElement("svg:clipPath")
r.setAttributeNS(null,"id",t),r.setAttributeNS(null,"transform",g(this.transformMatrix))
var n=e.element.cloneNode(!0)
"evenodd"===this.pendingClip?n.setAttributeNS(null,"clip-rule","evenodd"):n.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,r.appendChild(n),this.defs.appendChild(r),e.activeClipUrl&&(e.clipGroup=null,this.extraStack.forEach((function(e){e.clipGroup=null})),r.setAttributeNS(null,"clip-path",e.activeClipUrl)),e.activeClipUrl="url(#".concat(t,")"),this.tgrp=null}else this.pendingClip=null}},{key:"clip",value:function(e){this.pendingClip=e}},{key:"closePath",value:function(){var e=this.current
if(e.path){var t="".concat(e.path.getAttributeNS(null,"d"),"Z")
e.path.setAttributeNS(null,"d",t)}}},{key:"setLeading",value:function(e){this.current.leading=-e}},{key:"setTextRise",value:function(e){this.current.textRise=e}},{key:"setTextRenderingMode",value:function(e){this.current.textRenderingMode=e}},{key:"setHScale",value:function(e){this.current.textHScale=e/100}},{key:"setRenderingIntent",value:function(e){}},{key:"setFlatness",value:function(e){}},{key:"setGState",value:function(e){var t,r=u(e)
try{for(r.s();!(t=r.n()).done;){var a=s(t.value,2),i=a[0],o=a[1]
switch(i){case"LW":this.setLineWidth(o)
break
case"LC":this.setLineCap(o)
break
case"LJ":this.setLineJoin(o)
break
case"ML":this.setMiterLimit(o)
break
case"D":this.setDash(o[0],o[1])
break
case"RI":this.setRenderingIntent(o)
break
case"FL":this.setFlatness(o)
break
case"Font":this.setFont(o)
break
case"CA":this.setStrokeAlpha(o)
break
case"ca":this.setFillAlpha(o)
break
default:(0,n.warn)("Unimplemented graphic state operator ".concat(i))}}}catch(l){r.e(l)}finally{r.f()}}},{key:"fill",value:function(){var e=this.current
e.element&&(e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha),this.endPath())}},{key:"stroke",value:function(){var e=this.current
e.element&&(this._setStrokeAttributes(e.element),e.element.setAttributeNS(null,"fill","none"),this.endPath())}},{key:"_setStrokeAttributes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.current,n=r.dashArray
1!==t&&n.length>0&&(n=n.map((function(e){return t*e}))),e.setAttributeNS(null,"stroke",r.strokeColor),e.setAttributeNS(null,"stroke-opacity",r.strokeAlpha),e.setAttributeNS(null,"stroke-miterlimit",v(r.miterLimit)),e.setAttributeNS(null,"stroke-linecap",r.lineCap),e.setAttributeNS(null,"stroke-linejoin",r.lineJoin),e.setAttributeNS(null,"stroke-width",v(t*r.lineWidth)+"px"),e.setAttributeNS(null,"stroke-dasharray",n.map(v).join(" ")),e.setAttributeNS(null,"stroke-dashoffset",v(t*r.dashPhase)+"px")}},{key:"eoFill",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()}},{key:"fillStroke",value:function(){this.stroke(),this.fill()}},{key:"eoFillStroke",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()}},{key:"closeStroke",value:function(){this.closePath(),this.stroke()}},{key:"closeFillStroke",value:function(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function(){this.closePath(),this.eoFillStroke()}},{key:"paintSolidColorImageMask",value:function(){var e=this.svgFactory.createElement("svg:rect")
e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",this.current.fillColor),this._ensureTransformGroup().appendChild(e)}},{key:"paintImageXObject",value:function(e){var t=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image with object ID ".concat(e," is not ready yet"))}},{key:"paintInlineImageXObject",value:function(e,t){var r=e.width,n=e.height,a=_(e,this.forceDataSchema,!!t),i=this.svgFactory.createElement("svg:rect")
i.setAttributeNS(null,"x","0"),i.setAttributeNS(null,"y","0"),i.setAttributeNS(null,"width",v(r)),i.setAttributeNS(null,"height",v(n)),this.current.element=i,this.clip("nonzero")
var o=this.svgFactory.createElement("svg:image")
o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",v(-n)),o.setAttributeNS(null,"width",v(r)+"px"),o.setAttributeNS(null,"height",v(n)+"px"),o.setAttributeNS(null,"transform","scale(".concat(v(1/r)," ").concat(v(-1/n),")")),t?t.appendChild(o):this._ensureTransformGroup().appendChild(o)}},{key:"paintImageMaskXObject",value:function(e){var t=this.current,r=e.width,n=e.height,a=t.fillColor
t.maskId="mask".concat(w++)
var i=this.svgFactory.createElement("svg:mask")
i.setAttributeNS(null,"id",t.maskId)
var o=this.svgFactory.createElement("svg:rect")
o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",v(r)),o.setAttributeNS(null,"height",v(n)),o.setAttributeNS(null,"fill",a),o.setAttributeNS(null,"mask","url(#".concat(t.maskId,")")),this.defs.appendChild(i),this._ensureTransformGroup().appendChild(o),this.paintInlineImageXObject(e,i)}},{key:"paintFormXObjectBegin",value:function(e,t){if(Array.isArray(e)&&6===e.length&&this.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t){var r=t[2]-t[0],n=t[3]-t[1],a=this.svgFactory.createElement("svg:rect")
a.setAttributeNS(null,"x",t[0]),a.setAttributeNS(null,"y",t[1]),a.setAttributeNS(null,"width",v(r)),a.setAttributeNS(null,"height",v(n)),this.current.element=a,this.clip("nonzero"),this.endPath()}}},{key:"paintFormXObjectEnd",value:function(){}},{key:"_initialize",value:function(e){var t=this.svgFactory.create(e.width,e.height),r=this.svgFactory.createElement("svg:defs")
t.appendChild(r),this.defs=r
var n=this.svgFactory.createElement("svg:g")
return n.setAttributeNS(null,"transform",g(e.transform)),t.appendChild(n),this.svg=n,t}},{key:"_ensureClipGroup",value:function(){if(!this.current.clipGroup){var e=this.svgFactory.createElement("svg:g")
e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(e),this.current.clipGroup=e}return this.current.clipGroup}},{key:"_ensureTransformGroup",value:function(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",g(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}}]),e}()},(e,t,r)=>{"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0
var a,i=(a=r(2))&&a.__esModule?a:{default:a},o=r(4),s=r(154)
function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var a=f(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return h(this,r)}}function h(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function p(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){d(i,n,a,o,s,"next",e)}function s(e){d(i,n,a,o,s,"throw",e)}o(void 0)}))}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var m=require("fs"),b=require("http"),_=require("https"),A=require("url"),S=/^file:\/\/\/[a-zA-Z]:\//
var w=function(){function e(t){var r,n
v(this,e),this.source=t,this.url=(r=t.url,"file:"===(n=A.parse(r)).protocol||n.host?n:/^[a-z]:[/\\]/i.test(r)?A.parse("file:///".concat(r)):(n.host||(n.protocol="file:"),n)),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol,this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return y(e,[{key:"getFullReader",value:function(){return(0,o.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once."),this._fullRequestReader=this.isFsUrl?new T(this):new P(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=this.isFsUrl?new E(this,e,t):new R(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}}]),e}()
t.PDFNodeStream=w
var k=function(){function e(t){v(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null
var r=t.source
this._contentLength=r.length,this._loaded=0,this._filename=null,this._disableRange=r.disableRange||!1,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!r.disableStream,this._isRangeSupported=!r.disableRange,this._readableStream=null,this._readCapability=(0,o.createPromiseCapability)(),this._headersCapability=(0,o.createPromiseCapability)()}var t
return y(e,[{key:"read",value:(t=p(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,o.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new o.AbortException("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),x=function(){function e(t){v(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,o.createPromiseCapability)()
var r=t.source
this._isStreamingSupported=!r.disableStream}var t
return y(e,[{key:"read",value:(t=p(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,o.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}()
function C(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}var P=function(e){u(r,e)
var t=c(r)
function r(e){var n
v(this,r)
var a=function(t){if(404===t.statusCode){var r=new o.MissingPDFException('Missing PDF "'.concat(n._url,'".'))
return n._storedError=r,void n._headersCapability.reject(r)}n._headersCapability.resolve(),n._setReadableStream(t)
var a=function(e){return n._readableStream.headers[e.toLowerCase()]},i=(0,s.validateRangeRequestCapabilities)({getResponseHeader:a,isHttp:e.isHttp,rangeChunkSize:n._rangeChunkSize,disableRange:n._disableRange}),u=i.allowRangeRequests,l=i.suggestedLength
n._isRangeSupported=u,n._contentLength=l||n._contentLength,n._filename=(0,s.extractFilenameFromHeader)(a)}
return(n=t.call(this,e))._request=null,"http:"===n._url.protocol?n._request=b.request(C(n._url,e.httpHeaders),a):n._request=_.request(C(n._url,e.httpHeaders),a),n._request.on("error",(function(e){n._storedError=e,n._headersCapability.reject(e)})),n._request.end(),n}return r}(k),R=function(e){u(r,e)
var t=c(r)
function r(e,n,a){var i
for(var s in v(this,r),(i=t.call(this,e))._httpHeaders={},e.httpHeaders){var u=e.httpHeaders[s]
void 0!==u&&(i._httpHeaders[s]=u)}i._httpHeaders.Range="bytes=".concat(n,"-").concat(a-1)
var l=function(e){if(404!==e.statusCode)i._setReadableStream(e)
else{var t=new o.MissingPDFException('Missing PDF "'.concat(i._url,'".'))
i._storedError=t}}
return i._request=null,"http:"===i._url.protocol?i._request=b.request(C(i._url,i._httpHeaders),l):i._request=_.request(C(i._url,i._httpHeaders),l),i._request.on("error",(function(e){i._storedError=e})),i._request.end(),i}return r}(x),T=function(e){u(r,e)
var t=c(r)
function r(e){var n
v(this,r),n=t.call(this,e)
var a=decodeURIComponent(n._url.path)
return S.test(n._url.href)&&(a=a.replace(/^\//,"")),m.lstat(a,(function(e,t){if(e)return"ENOENT"===e.code&&(e=new o.MissingPDFException('Missing PDF "'.concat(a,'".'))),n._storedError=e,void n._headersCapability.reject(e)
n._contentLength=t.size,n._setReadableStream(m.createReadStream(a)),n._headersCapability.resolve()})),n}return r}(k),E=function(e){u(r,e)
var t=c(r)
function r(e,n,a){var i
v(this,r),i=t.call(this,e)
var o=decodeURIComponent(i._url.path)
return S.test(i._url.href)&&(o=o.replace(/^\//,"")),i._setReadableStream(m.createReadStream(o,{start:n,end:a-1})),i}return r}(x)},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createResponseStatusError=function(e,t){if(404===e||0===e&&t.startsWith("file:"))return new n.MissingPDFException('Missing PDF "'+t+'".')
return new n.UnexpectedResponseException("Unexpected server response ("+e+') while retrieving PDF "'+t+'".',e)},t.extractFilenameFromHeader=function(e){var t=e("Content-Disposition")
if(t){var r=(0,a.getFilenameFromContentDispositionHeader)(t)
if(r.includes("%"))try{r=decodeURIComponent(r)}catch(n){}if(/\.pdf$/i.test(r))return r}return null},t.validateRangeRequestCapabilities=function(e){var t=e.getResponseHeader,r=e.isHttp,a=e.rangeChunkSize,i=e.disableRange;(0,n.assert)(a>0,"Range chunk size must be larger than zero")
var o={allowRangeRequests:!1,suggestedLength:void 0},s=parseInt(t("Content-Length"),10)
if(!Number.isInteger(s))return o
if(o.suggestedLength=s,s<=2*a)return o
if(i||!r)return o
if("bytes"!==t("Accept-Ranges"))return o
if("identity"!==(t("Content-Encoding")||"identity"))return o
return o.allowRangeRequests=!0,o},t.validateResponseStatus=function(e){return 200===e||206===e}
var n=r(4),a=r(155)},(e,t)=>{"use strict"
function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(t,"__esModule",{value:!0}),t.getFilenameFromContentDispositionHeader=function(e){var t=!0,n=o("filename\\*","i").exec(e)
if(n){var a=l(n=n[1])
return u(a=h(a=c(a=unescape(a))))}if(n=function(e){var t,n=[],a=o("filename\\*((?!0\\d)\\d+)(\\*?)","ig")
for(;null!==(t=a.exec(e));){var i=r(t,4),s=i[1],u=i[2],h=i[3]
if((s=parseInt(s,10))in n){if(0===s)break}else n[s]=[u,h]}for(var f=[],d=0;d<n.length&&d in n;++d){var p=r(n[d],2),v=p[0],g=p[1]
g=l(g),v&&(g=unescape(g),0===d&&(g=c(g))),f.push(g)}return f.join("")}(e)){return u(h(n))}if(n=o("filename","i").exec(e)){var i=l(n=n[1])
return u(i=h(i))}function o(e,t){return new RegExp("(?:^|;)\\s*"+e+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)}function s(e,r){if(e){if(!/^[\x00-\xFF]+$/.test(r))return r
try{var n=new TextDecoder(e,{fatal:!0}),a=Array.from(r,(function(e){return 255&e.charCodeAt(0)}))
r=n.decode(new Uint8Array(a)),t=!1}catch(i){if(/^utf-?8$/i.test(e))try{r=decodeURIComponent(escape(r)),t=!1}catch(o){}}}return r}function u(e){return t&&/[\x80-\xff]/.test(e)&&(e=s("utf-8",e),t&&(e=s("iso-8859-1",e))),e}function l(e){if(e.startsWith('"')){for(var t=e.slice(1).split('\\"'),r=0;r<t.length;++r){var n=t[r].indexOf('"');-1!==n&&(t[r]=t[r].slice(0,n),t.length=r+1),t[r]=t[r].replace(/\\(.)/g,"$1")}e=t.join('"')}return e}function c(e){var t=e.indexOf("'")
return-1===t?e:s(e.slice(0,t),e.slice(t+1).replace(/^[^']*'/,""))}function h(e){return!e.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(e)?e:e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,(function(e,t,r,n){if("q"===r||"Q"===r)return s(t,n=(n=n.replace(/_/g," ")).replace(/=([0-9a-fA-F]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))
try{n=atob(n)}catch(a){}return s(t,n)}))}return""}},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNetworkStream=void 0
var n,a=(n=r(2))&&n.__esModule?n:{default:n},i=r(4),o=r(154)
function s(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function u(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){s(i,n,a,o,u,"next",e)}function u(e){s(i,n,a,o,u,"throw",e)}o(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}var f=function(){function e(t,r){l(this,e),this.url=t,r=r||{},this.isHttp=/^https?:/i.test(t),this.httpHeaders=this.isHttp&&r.httpHeaders||{},this.withCredentials=r.withCredentials||!1,this.getXhr=r.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null)}return h(e,[{key:"requestRange",value:function(e,t,r){var n={begin:e,end:t}
for(var a in r)n[a]=r[a]
return this.request(n)}},{key:"requestFull",value:function(e){return this.request(e)}},{key:"request",value:function(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t}
for(var a in t.open("GET",this.url),t.withCredentials=this.withCredentials,this.httpHeaders){var i=this.httpHeaders[a]
void 0!==i&&t.setRequestHeader(a,i)}return this.isHttp&&"begin"in e&&"end"in e?(t.setRequestHeader("Range","bytes=".concat(e.begin,"-").concat(e.end-1)),n.expectedStatus=206):n.expectedStatus=200,t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r}},{key:"onProgress",value:function(e,t){var r=this.pendingRequests[e]
r&&r.onProgress&&r.onProgress(t)}},{key:"onStateChange",value:function(e,t){var r=this.pendingRequests[e]
if(r){var n=r.xhr
if(n.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===n.readyState&&e in this.pendingRequests)if(delete this.pendingRequests[e],0===n.status&&this.isHttp)r.onError&&r.onError(n.status)
else{var a=n.status||200
if(200===a&&206===r.expectedStatus||a===r.expectedStatus){var o=function(e){var t=e.response
return"string"!=typeof t?t:(0,i.stringToBytes)(t).buffer}(n)
if(206===a){var s=n.getResponseHeader("Content-Range"),u=/bytes (\d+)-(\d+)\/(\d+)/.exec(s)
r.onDone({begin:parseInt(u[1],10),chunk:o})}else o?r.onDone({begin:0,chunk:o}):r.onError&&r.onError(n.status)}else r.onError&&r.onError(n.status)}}}},{key:"getRequestXhr",value:function(e){return this.pendingRequests[e].xhr}},{key:"isPendingRequest",value:function(e){return e in this.pendingRequests}},{key:"abortRequest",value:function(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}}]),e}(),d=function(){function e(t){l(this,e),this._source=t,this._manager=new f(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}return h(e,[{key:"_onRangeRequestReaderClosed",value:function(e){var t=this._rangeRequestReaders.indexOf(e)
t>=0&&this._rangeRequestReaders.splice(t,1)}},{key:"getFullReader",value:function(){return(0,i.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once."),this._fullRequestReader=new p(this._manager,this._source),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){var r=new v(this._manager,e,t)
return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}}]),e}()
t.PDFNetworkStream=d
var p=function(){function e(t,r){l(this,e),this._manager=t
var n={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=r.url,this._fullRequestId=t.requestFull(n),this._headersReceivedCapability=(0,i.createPromiseCapability)(),this._disableRange=r.disableRange||!1,this._contentLength=r.length,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null}var t
return h(e,[{key:"_onHeadersReceived",value:function(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=function(e){return t.getResponseHeader(e)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:r,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),a=n.allowRangeRequests,i=n.suggestedLength
a&&(this._isRangeSupported=!0),this._contentLength=i||this._contentLength,this._filename=(0,o.extractFilenameFromHeader)(r),this._isRangeSupported&&this._manager.abortRequest(e),this._headersReceivedCapability.resolve()}},{key:"_onDone",value:function(e){e&&(this._requests.length>0?this._requests.shift().resolve({value:e.chunk,done:!1}):this._cachedChunks.push(e.chunk))
this._done=!0,this._cachedChunks.length>0||(this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[])}},{key:"_onError",value:function(e){var t=this._url,r=(0,o.createResponseStatusError)(e,t)
this._storedError=r,this._headersReceivedCapability.reject(r),this._requests.forEach((function(e){e.reject(r)})),this._requests=[],this._cachedChunks=[]}},{key:"_onProgress",value:function(e){this.onProgress&&this.onProgress({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})}},{key:"read",value:(t=u(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._storedError){e.next=2
break}throw this._storedError
case 2:if(!(this._cachedChunks.length>0)){e.next=5
break}return t=this._cachedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 5:if(!this._done){e.next=7
break}return e.abrupt("return",{value:void 0,done:!0})
case 7:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._headersReceivedCapability.reject(e),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"contentLength",get:function(){return this._contentLength}},{key:"headersReady",get:function(){return this._headersReceivedCapability.promise}}]),e}(),v=function(){function e(t,r,n){l(this,e),this._manager=t
var a={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)}
this._requestId=t.requestRange(r,n,a),this._requests=[],this._queuedChunk=null,this._done=!1,this.onProgress=null,this.onClosed=null}var t
return h(e,[{key:"_close",value:function(){this.onClosed&&this.onClosed(this)}},{key:"_onDone",value:function(e){var t=e.chunk
this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t
this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._close()}},{key:"_onProgress",value:function(e){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:e.loaded})}},{key:"read",value:(t=u(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this._queuedChunk){e.next=4
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 4:if(!this._done){e.next=6
break}return e.abrupt("return",{value:void 0,done:!0})
case 6:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFetchStream=void 0
var n,a=(n=r(2))&&n.__esModule?n:{default:n},i=r(4),o=r(154)
function s(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,a)}function u(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){s(i,n,a,o,u,"next",e)}function u(e){s(i,n,a,o,u,"throw",e)}o(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function f(e,t,r){return{method:"GET",headers:e,signal:null==r?void 0:r.signal,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}function d(e){var t=new Headers
for(var r in e){var n=e[r]
void 0!==n&&t.append(r,n)}return t}var p=function(){function e(t){l(this,e),this.source=t,this.isHttp=/^https?:/i.test(t.url),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return h(e,[{key:"getFullReader",value:function(){return(0,i.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once."),this._fullRequestReader=new v(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new g(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}}]),e}()
t.PDFFetchStream=p
var v=function(){function e(t){var r=this
l(this,e),this._stream=t,this._reader=null,this._loaded=0,this._filename=null
var n=t.source
this._withCredentials=n.withCredentials||!1,this._contentLength=n.length,this._headersCapability=(0,i.createPromiseCapability)(),this._disableRange=n.disableRange||!1,this._rangeChunkSize=n.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._isStreamingSupported=!n.disableStream,this._isRangeSupported=!n.disableRange,this._headers=d(this._stream.httpHeaders)
var a=n.url
fetch(a,f(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,a)
r._reader=e.body.getReader(),r._headersCapability.resolve()
var t=function(t){return e.headers.get(t)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:t,isHttp:r._stream.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),s=n.allowRangeRequests,u=n.suggestedLength
r._isRangeSupported=s,r._contentLength=u||r._contentLength,r._filename=(0,o.extractFilenameFromHeader)(t),!r._isStreamingSupported&&r._isRangeSupported&&r.cancel(new i.AbortException("Streaming is disabled."))})).catch(this._headersCapability.reject),this.onProgress=null}var t
return h(e,[{key:"read",value:(t=u(a.default.mark((function e(){var t,r,n,i
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._headersCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),i=new Uint8Array(r).buffer,e.abrupt("return",{value:i,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),g=function(){function e(t,r,n){var a=this
l(this,e),this._stream=t,this._reader=null,this._loaded=0
var s=t.source
this._withCredentials=s.withCredentials||!1,this._readCapability=(0,i.createPromiseCapability)(),this._isStreamingSupported=!s.disableStream,"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._headers=d(this._stream.httpHeaders),this._headers.append("Range","bytes=".concat(r,"-").concat(n-1))
var u=s.url
fetch(u,f(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,u)
a._readCapability.resolve(),a._reader=e.body.getReader()})).catch((function(e){if("AbortError"!==(null==e?void 0:e.name))throw e})),this.onProgress=null}var t
return h(e,[{key:"read",value:(t=u(a.default.mark((function e(){var t,r,n,i
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded}),i=new Uint8Array(r).buffer,e.abrupt("return",{value:i,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}()}],__webpack_module_cache__={}
function __w_pdfjs_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports
var t=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}}
return __webpack_modules__[e].call(t.exports,t,t.exports,__w_pdfjs_require__),t.loaded=!0,t.exports}return __w_pdfjs_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__w_pdfjs_require__(0)})()}))
