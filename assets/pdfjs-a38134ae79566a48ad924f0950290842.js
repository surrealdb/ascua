/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2022 Mozilla Foundation
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
(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=t():e["pdfjs-dist/build/pdf"]=e.pdfjsLib=t()})(this,(function(){return(()=>{var __webpack_modules__=[,(e,t,r)=>{"use strict"
function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=p(e)
if(t){var a=p(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.VerbosityLevel=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.UNSUPPORTED_FEATURES=t.TextRenderingMode=t.StreamType=t.RenderingIntentFlag=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.PageActionEventType=t.OPS=t.MissingPDFException=t.IsLittleEndianCached=t.IsEvalSupportedCached=t.InvalidPDFException=t.ImageKind=t.IDENTITY_MATRIX=t.FormatError=t.FontType=t.FONT_IDENTITY_MATRIX=t.DocumentActionEventType=t.CMapCompressionType=t.BaseException=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMode=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.AnnotationActionEventType=t.AbortException=void 0,t.arrayByteLength=O,t.arraysToBytes=function(e){var t=e.length
if(1===t&&e[0]instanceof Uint8Array)return e[0]
for(var r=0,n=0;n<t;n++)r+=O(e[n])
for(var a=0,i=new Uint8Array(r),o=0;o<t;o++){var s=e[o]
s instanceof Uint8Array||(s="string"==typeof s?E(s):new Uint8Array(s))
var l=s.byteLength
i.set(s,a),a+=l}return i},t.assert=function(e,t){e||g(t)},t.bytesToString=function(e){"object"===o(e)&&null!==e&&void 0!==e.length||g("Invalid argument for bytesToString")
var t=e.length,r=8192
if(t<r)return String.fromCharCode.apply(null,e)
for(var n=[],a=0;a<t;a+=r){var i=Math.min(a+r,t),s=e.subarray(a,i)
n.push(String.fromCharCode.apply(null,s))}return n.join("")},t.createPromiseCapability=function(){var e=Object.create(null),t=!1
return Object.defineProperty(e,"settled",{get:function(){return t}}),e.promise=new Promise((function(r,n){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,n(e)}})),e},t.createValidAbsoluteUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(!e)return null
try{if(r&&"string"==typeof e){if(r.addDefaultProtocol&&e.startsWith("www.")){var n=e.match(/\./g)
n&&n.length>=2&&(e="http://".concat(e))}if(r.tryConvertEncoding)try{e=j(e)}catch(i){}}var a=t?new URL(e,t):new URL(e)
if(b(a))return a}catch(i){}return null},t.escapeString=function(e){return e.replace(/([()\\\n\r])/g,(function(e){return"\n"===e?"\\n":"\r"===e?"\\r":"\\".concat(e)}))},t.getModificationDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=[e.getUTCFullYear().toString(),(e.getUTCMonth()+1).toString().padStart(2,"0"),e.getUTCDate().toString().padStart(2,"0"),e.getUTCHours().toString().padStart(2,"0"),e.getUTCMinutes().toString().padStart(2,"0"),e.getUTCSeconds().toString().padStart(2,"0")]
return t.join("")},t.getVerbosityLevel=function(){return y},t.info=function(e){y>=v.INFOS&&console.log("Info: ".concat(e))},t.isArrayBuffer=function(e){return"object"===o(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function(e,t){if(e.length!==t.length)return!1
for(var r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1
return!0},t.isAscii=function(e){return/^[\x00-\x7F]*$/.test(e)},t.isSameOrigin=function(e,t){var r
try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(a){return!1}var n=new URL(t,r)
return r.origin===n.origin},t.objectFromMap=function(e){var t,r=Object.create(null),n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=a(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,i=function(){}
return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}(e)
try{for(n.s();!(t=n.n()).done;){var i=(l=t.value,u=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(l,u)||a(l,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],s=i[1]
r[o]=s}}catch(c){n.e(c)}finally{n.f()}var l,u
return r},t.objectSize=function(e){return Object.keys(e).length},t.setVerbosityLevel=function(e){Number.isInteger(e)&&(y=e)},t.shadow=_,t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=E,t.stringToPDFString=function(e){if(e[0]>="ï"){var t
if("þ"===e[0]&&"ÿ"===e[1]?t="utf-16be":"ÿ"===e[0]&&"þ"===e[1]?t="utf-16le":"ï"===e[0]&&"»"===e[1]&&"¿"===e[2]&&(t="utf-8"),t)try{var r=new TextDecoder(t,{fatal:!0}),n=E(e)
return r.decode(n)}catch(l){m('stringToPDFString: "'.concat(l,'".'))}}for(var a=[],i=0,o=e.length;i<o;i++){var s=D[e.charCodeAt(i)]
a.push(s?String.fromCharCode(s):e.charAt(i))}return a.join("")},t.stringToUTF16BEString=function(e){for(var t=["þÿ"],r=0,n=e.length;r<n;r++){var a=e.charCodeAt(r)
t.push(String.fromCharCode(a>>8&255),String.fromCharCode(255&a))}return t.join("")},t.stringToUTF8String=j,t.unreachable=g,t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=m,r(2)
t.IDENTITY_MATRIX=[1,0,0,1,0,0]
t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0]
t.RenderingIntentFlag={ANY:1,DISPLAY:2,PRINT:4,ANNOTATIONS_FORMS:16,ANNOTATIONS_STORAGE:32,ANNOTATIONS_DISABLE:64,OPLIST:256}
t.AnnotationMode={DISABLE:0,ENABLE:1,ENABLE_FORMS:2,ENABLE_STORAGE:3}
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
t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1STANDARD:"TYPE1STANDARD",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"}
var v={ERRORS:0,WARNINGS:1,INFOS:5}
t.VerbosityLevel=v
t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",signatures:"signatures",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontBuildPath:"errorFontBuildPath",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent",errorContentSubStream:"errorContentSubStream"}
t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
var y=v.WARNINGS
function m(e){y>=v.WARNINGS&&console.log("Warning: ".concat(e))}function g(e){throw new Error(e)}function b(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}function _(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}var A=function(){function e(t,r){this.constructor===e&&g("Cannot initialize BaseException."),this.message=t,this.name=r}return e.prototype=new Error,e.constructor=e,e}()
t.BaseException=A
var k=function(e){c(r,e)
var t=d(r)
function r(e,n){var a
return u(this,r),(a=t.call(this,e,"PasswordException")).code=n,a}return l(r)}(A)
t.PasswordException=k
var S=function(e){c(r,e)
var t=d(r)
function r(e,n){var a
return u(this,r),(a=t.call(this,e,"UnknownErrorException")).details=n,a}return l(r)}(A)
t.UnknownErrorException=S
var x=function(e){c(r,e)
var t=d(r)
function r(e){return u(this,r),t.call(this,e,"InvalidPDFException")}return l(r)}(A)
t.InvalidPDFException=x
var w=function(e){c(r,e)
var t=d(r)
function r(e){return u(this,r),t.call(this,e,"MissingPDFException")}return l(r)}(A)
t.MissingPDFException=w
var C=function(e){c(r,e)
var t=d(r)
function r(e,n){var a
return u(this,r),(a=t.call(this,e,"UnexpectedResponseException")).status=n,a}return l(r)}(A)
t.UnexpectedResponseException=C
var P=function(e){c(r,e)
var t=d(r)
function r(e){return u(this,r),t.call(this,e,"FormatError")}return l(r)}(A)
t.FormatError=P
var T=function(e){c(r,e)
var t=d(r)
function r(e){return u(this,r),t.call(this,e,"AbortException")}return l(r)}(A)
function E(e){"string"!=typeof e&&g("Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n)
return r}function O(e){return void 0!==e.length?e.length:void 0!==e.byteLength?e.byteLength:void g("Invalid argument for arrayByteLength")}t.AbortException=T
var F={get value(){return _(this,"value",((e=new Uint8Array(4))[0]=1,1===new Uint32Array(e.buffer,0,1)[0]))
var e}}
t.IsLittleEndianCached=F
var R={get value(){return _(this,"value",function(){try{return new Function(""),!0}catch(e){return!1}}())}}
t.IsEvalSupportedCached=R
var M=n(Array(256).keys()).map((function(e){return e.toString(16).padStart(2,"0")})),I=function(){function e(){u(this,e)}return l(e,null,[{key:"makeHexColor",value:function(e,t,r){return"#".concat(M[e]).concat(M[t]).concat(M[r])}},{key:"transform",value:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function(t,r){var n=e.applyTransform(t,r),a=e.applyTransform(t.slice(2,4),r),i=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(n[0],a[0],i[0],o[0]),Math.min(n[1],a[1],i[1],o[1]),Math.max(n[0],a[0],i[0],o[0]),Math.max(n[1],a[1],i[1],o[1])]}},{key:"inverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],a=e[2]*t[0]+e[3]*t[2],i=e[2]*t[1]+e[3]*t[3],o=(r+i)/2,s=Math.sqrt(Math.pow(r+i,2)-4*(r*i-a*n))/2,l=o+s||1,u=o-s||1
return[Math.sqrt(l),Math.sqrt(u)]}},{key:"normalizeRect",value:function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function(t,r){function n(e,t){return e-t}var a=[t[0],t[2],r[0],r[2]].sort(n),i=[t[1],t[3],r[1],r[3]].sort(n),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),a[0]===t[0]&&a[1]===r[0]||a[0]===r[0]&&a[1]===t[0]?(o[0]=a[1],o[2]=a[2],i[0]===t[1]&&i[1]===r[1]||i[0]===r[1]&&i[1]===t[1]?(o[1]=i[1],o[3]=i[2],o):null):null}},{key:"bezierBoundingBox",value:function(e,t,r,a,i,o,s,l){for(var u,c,h,d,f,p,v,y,m=[],g=[[],[]],b=0;b<2;++b)if(0===b?(c=6*e-12*r+6*i,u=-3*e+9*r-9*i+3*s,h=3*r-3*e):(c=6*t-12*a+6*o,u=-3*t+9*a-9*o+3*l,h=3*a-3*t),Math.abs(u)<1e-12){if(Math.abs(c)<1e-12)continue
0<(d=-h/c)&&d<1&&m.push(d)}else v=c*c-4*h*u,y=Math.sqrt(v),v<0||(0<(f=(-c+y)/(2*u))&&f<1&&m.push(f),0<(p=(-c-y)/(2*u))&&p<1&&m.push(p))
for(var _,A=m.length,k=A;A--;)_=1-(d=m[A]),g[0][A]=_*_*_*e+3*_*_*d*r+3*_*d*d*i+d*d*d*s,g[1][A]=_*_*_*t+3*_*_*d*a+3*_*d*d*o+d*d*d*l
return g[0][k]=e,g[1][k]=t,g[0][k+1]=s,g[1][k+1]=l,g[0].length=g[1].length=k+2,[Math.min.apply(Math,n(g[0])),Math.min.apply(Math,n(g[1])),Math.max.apply(Math,n(g[0])),Math.max.apply(Math,n(g[1]))]}}]),e}()
t.Util=I
var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
function j(e){return decodeURIComponent(escape(e))}},(e,t,r)=>{"use strict"
var n=r(3)
globalThis._pdfjsCompatibilityChecked||(globalThis._pdfjsCompatibilityChecked=!0,!globalThis.btoa&&n.isNodeJS&&(globalThis.btoa=function(e){return Buffer.from(e,"binary").toString("base64")}),!globalThis.atob&&n.isNodeJS&&(globalThis.atob=function(e){return Buffer.from(e,"base64").toString("binary")}),!globalThis.DOMMatrix&&n.isNodeJS&&(globalThis.DOMMatrix=r(4)),globalThis.Promise.allSettled||(globalThis.Promise=r(5)),!globalThis.ReadableStream&&n.isNodeJS&&(globalThis.ReadableStream=require("web-streams-polyfill/dist/ponyfill.js").ReadableStream),globalThis.structuredClone||r(129))},(e,t)=>{"use strict"
function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isNodeJS=void 0
var n=!("object"!==("undefined"==typeof process?"undefined":r(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type)
t.isNodeJS=n},(e,t,r)=>{"use strict"
var n,a,i
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}i=function(){function e(e){var t=new h,r=Array.from(e)
if(!r.every((function(e){return!Number.isNaN(e)})))throw TypeError('CSSMatrix: "'+e+'" must only have numbers.')
if(16===r.length){var n=r[0],a=r[1],i=r[2],o=r[3],s=r[4],l=r[5],u=r[6],c=r[7],d=r[8],f=r[9],p=r[10],v=r[11],y=r[12],m=r[13],g=r[14],b=r[15]
t.m11=n,t.a=n,t.m21=s,t.c=s,t.m31=d,t.m41=y,t.e=y,t.m12=a,t.b=a,t.m22=l,t.d=l,t.m32=f,t.m42=m,t.f=m,t.m13=i,t.m23=u,t.m33=p,t.m43=g,t.m14=o,t.m24=c,t.m34=v,t.m44=b}else{if(6!==r.length)throw new TypeError("CSSMatrix: expecting an Array of 6/16 values.")
var _=r[0],A=r[1],k=r[2],S=r[3],x=r[4],w=r[5]
t.m11=_,t.a=_,t.m12=A,t.b=A,t.m21=k,t.c=k,t.m22=S,t.d=S,t.m41=x,t.e=x,t.m42=w,t.f=w}return t}function t(t){var r=Object.keys(new h)
if("object"===o(t)&&r.every((function(e){return e in t})))return e([t.m11,t.m12,t.m13,t.m14,t.m21,t.m22,t.m23,t.m24,t.m31,t.m32,t.m33,t.m34,t.m41,t.m42,t.m43,t.m44])
throw TypeError('CSSMatrix: "'+t+'" is not a DOMMatrix / CSSMatrix / JSON compatible object.')}function r(t){if("string"!=typeof t)throw TypeError('CSSMatrix: "'+t+'" is not a string.')
var r=String(t).replace(/\s/g,""),n=new h,a='CSSMatrix: invalid transform string "'+t+'"'
return r.split(")").filter((function(e){return e})).forEach((function(t){var r=t.split("("),i=r[0],o=r[1]
if(!o)throw TypeError(a)
var s=o.split(",").map((function(e){return e.includes("rad")?parseFloat(e)*(180/Math.PI):parseFloat(e)})),l=s[0],u=s[1],c=s[2],h=s[3],d=[l,u,c],f=[l,u,c,h]
if("perspective"===i&&l&&[u,c].every((function(e){return void 0===e})))n.m34=-1/l
else if(i.includes("matrix")&&[6,16].includes(s.length)&&s.every((function(e){return!Number.isNaN(+e)}))){var p=s.map((function(e){return Math.abs(e)<1e-6?0:e}))
n=n.multiply(e(p))}else if("translate3d"===i&&d.every((function(e){return!Number.isNaN(+e)})))n=n.translate(l,u,c)
else if("translate"===i&&l&&void 0===c)n=n.translate(l,u||0,0)
else if("rotate3d"===i&&f.every((function(e){return!Number.isNaN(+e)}))&&h)n=n.rotateAxisAngle(l,u,c,h)
else if("rotate"===i&&l&&[u,c].every((function(e){return void 0===e})))n=n.rotate(0,0,l)
else if("scale3d"===i&&d.every((function(e){return!Number.isNaN(+e)}))&&d.some((function(e){return 1!==e})))n=n.scale(l,u,c)
else if("scale"!==i||Number.isNaN(l)||1===l||void 0!==c)if("skew"===i&&l&&void 0===c)n=n.skewX(l),n=u?n.skewY(u):n
else{if(!(/[XYZ]/.test(i)&&l&&[u,c].every((function(e){return void 0===e}))&&["translate","rotate","scale","skew"].some((function(e){return i.includes(e)}))))throw TypeError(a)
if(["skewX","skewY"].includes(i))n=n[i](l)
else{var v=i.replace(/[XYZ]/,""),y=i.replace(v,""),m=["X","Y","Z"].indexOf(y),g=[0===m?l:0,1===m?l:0,2===m?l:0]
n=n[v].apply(n,g)}}else{var b=Number.isNaN(+u)?l:u
n=n.scale(l,b,1)}})),n}function n(e,t,r){var n=new h
return n.m41=e,n.e=e,n.m42=t,n.f=t,n.m43=r,n}function a(e,t,r){var n=new h,a=Math.PI/180,i=e*a,o=t*a,s=r*a,l=Math.cos(i),u=-Math.sin(i),c=Math.cos(o),d=-Math.sin(o),f=Math.cos(s),p=-Math.sin(s),v=c*f,y=-c*p
n.m11=v,n.a=v,n.m12=y,n.b=y,n.m13=d
var m=u*d*f+l*p
n.m21=m,n.c=m
var g=l*f-u*d*p
return n.m22=g,n.d=g,n.m23=-u*c,n.m31=u*p-l*d*f,n.m32=u*f+l*d*p,n.m33=l*c,n}function i(e,t,r,n){var a=new h,i=n*(Math.PI/360),o=Math.sin(i),s=Math.cos(i),l=o*o,u=Math.sqrt(e*e+t*t+r*r),c=e,d=t,f=r
0===u?(c=0,d=0,f=1):(c/=u,d/=u,f/=u)
var p=c*c,v=d*d,y=f*f,m=1-2*(v+y)*l
a.m11=m,a.a=m
var g=2*(c*d*l+f*o*s)
a.m12=g,a.b=g,a.m13=2*(c*f*l-d*o*s)
var b=2*(d*c*l-f*o*s)
a.m21=b,a.c=b
var _=1-2*(y+p)*l
return a.m22=_,a.d=_,a.m23=2*(d*f*l+c*o*s),a.m31=2*(f*c*l+d*o*s),a.m32=2*(f*d*l-c*o*s),a.m33=1-2*(p+v)*l,a}function s(e,t,r){var n=new h
return n.m11=e,n.a=e,n.m22=t,n.d=t,n.m33=r,n}function l(e){var t=new h,r=e*Math.PI/180,n=Math.tan(r)
return t.m21=n,t.c=n,t}function u(e){var t=new h,r=e*Math.PI/180,n=Math.tan(r)
return t.m12=n,t.b=n,t}function c(t,r){return e([r.m11*t.m11+r.m12*t.m21+r.m13*t.m31+r.m14*t.m41,r.m11*t.m12+r.m12*t.m22+r.m13*t.m32+r.m14*t.m42,r.m11*t.m13+r.m12*t.m23+r.m13*t.m33+r.m14*t.m43,r.m11*t.m14+r.m12*t.m24+r.m13*t.m34+r.m14*t.m44,r.m21*t.m11+r.m22*t.m21+r.m23*t.m31+r.m24*t.m41,r.m21*t.m12+r.m22*t.m22+r.m23*t.m32+r.m24*t.m42,r.m21*t.m13+r.m22*t.m23+r.m23*t.m33+r.m24*t.m43,r.m21*t.m14+r.m22*t.m24+r.m23*t.m34+r.m24*t.m44,r.m31*t.m11+r.m32*t.m21+r.m33*t.m31+r.m34*t.m41,r.m31*t.m12+r.m32*t.m22+r.m33*t.m32+r.m34*t.m42,r.m31*t.m13+r.m32*t.m23+r.m33*t.m33+r.m34*t.m43,r.m31*t.m14+r.m32*t.m24+r.m33*t.m34+r.m34*t.m44,r.m41*t.m11+r.m42*t.m21+r.m43*t.m31+r.m44*t.m41,r.m41*t.m12+r.m42*t.m22+r.m43*t.m32+r.m44*t.m42,r.m41*t.m13+r.m42*t.m23+r.m43*t.m33+r.m44*t.m43,r.m41*t.m14+r.m42*t.m24+r.m43*t.m34+r.m44*t.m44])}var h=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t]
var r=this
if(r.a=1,r.b=0,r.c=0,r.d=1,r.e=0,r.f=0,r.m11=1,r.m12=0,r.m13=0,r.m14=0,r.m21=0,r.m22=1,r.m23=0,r.m24=0,r.m31=0,r.m32=0,r.m33=1,r.m34=0,r.m41=0,r.m42=0,r.m43=0,r.m44=1,e&&e.length){var n=[16,6].some((function(t){return t===e.length}))?e:e[0]
return r.setMatrixValue(n)}return r},d={isIdentity:{configurable:!0},is2D:{configurable:!0}}
return d.isIdentity.set=function(e){this.isIdentity=e},d.isIdentity.get=function(){var e=this
return 1===e.m11&&0===e.m12&&0===e.m13&&0===e.m14&&0===e.m21&&1===e.m22&&0===e.m23&&0===e.m24&&0===e.m31&&0===e.m32&&1===e.m33&&0===e.m34&&0===e.m41&&0===e.m42&&0===e.m43&&1===e.m44},d.is2D.get=function(){var e=this
return 0===e.m31&&0===e.m32&&1===e.m33&&0===e.m34&&0===e.m43&&1===e.m44},d.is2D.set=function(e){this.is2D=e},h.prototype.setMatrixValue=function(n){return[Array,Float64Array,Float32Array].some((function(e){return n instanceof e}))?e(n):"string"==typeof n&&n.length&&"none"!==n?r(n):"object"===o(n)?t(n):this},h.prototype.toArray=function(){var e=this,t=Math.pow(10,6)
return(e.is2D?[e.a,e.b,e.c,e.d,e.e,e.f]:[e.m11,e.m12,e.m13,e.m14,e.m21,e.m22,e.m23,e.m24,e.m31,e.m32,e.m33,e.m34,e.m41,e.m42,e.m43,e.m44]).map((function(e){return Math.abs(e)<1e-6?0:(e*t>>0)/t}))},h.prototype.toString=function(){var e=this.toArray()
return(this.is2D?"matrix":"matrix3d")+"("+e+")"},h.prototype.toJSON=function(){var e=this,t=e.is2D,r=e.isIdentity
return Object.assign({},e,{is2D:t,isIdentity:r})},h.prototype.multiply=function(e){return c(this,e)},h.prototype.translate=function(e,t,r){var a=t,i=r
return void 0===i&&(i=0),void 0===a&&(a=0),c(this,n(e,a,i))},h.prototype.scale=function(e,t,r){var n=t,a=r
return void 0===n&&(n=e),void 0===a&&(a=1),c(this,s(e,n,a))},h.prototype.rotate=function(e,t,r){var n=e,i=t,o=r
return void 0===i&&(i=0),void 0===o&&(o=n,n=0),c(this,a(n,i,o))},h.prototype.rotateAxisAngle=function(e,t,r,n){if([e,t,r,n].some((function(e){return Number.isNaN(e)})))throw new TypeError("CSSMatrix: expecting 4 values")
return c(this,i(e,t,r,n))},h.prototype.skewX=function(e){return c(this,l(e))},h.prototype.skewY=function(e){return c(this,u(e))},h.prototype.transformPoint=function(e){var t=n(e.x,e.y,e.z)
return t.m44=e.w||1,{x:(t=this.multiply(t)).m41,y:t.m42,z:t.m43,w:t.m44}},h.prototype.transform=function(e){var t=this,r=t.m11*e.x+t.m12*e.y+t.m13*e.z+t.m14*e.w,n=t.m21*e.x+t.m22*e.y+t.m23*e.z+t.m24*e.w,a=t.m31*e.x+t.m32*e.y+t.m33*e.z+t.m34*e.w,i=t.m41*e.x+t.m42*e.y+t.m43*e.z+t.m44*e.w
return{x:r/i,y:n/i,z:a/i,w:i}},Object.defineProperties(h.prototype,d),Object.assign(h,{Translate:n,Rotate:a,RotateAxisAngle:i,Scale:s,SkewX:l,SkewY:u,Multiply:c,fromArray:e,fromMatrix:t,fromString:r}),Object.assign(h,{Version:"0.0.24"}),h},"object"===o(t)?e.exports=i():void 0===(a="function"==typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=a)},(e,t,r)=>{r(6),r(91),r(97),r(99),r(123),r(124),r(125),r(126)
var n=r(128)
e.exports=n.Promise},(e,t,r)=>{"use strict"
var n=r(7),a=r(8),i=r(27),o=r(69),s=r(71),l=r(57),u=r(73),c=r(46),h=r(15),d=r(77),f=r(78),p=r(79),v=r(88),y=r(36),m=r(90),g=y("toStringTag"),b=a.Error,_=[].push,A=function(e,t){var r,n=arguments.length>2?arguments[2]:void 0,a=i(k,this)
s?r=s(new b,a?o(this):k):(r=a?this:u(k),c(r,g,"Error")),void 0!==t&&c(r,"message",v(t)),m&&c(r,"stack",d(r.stack,1)),f(r,n)
var l=[]
return p(e,_,{that:l}),c(r,"errors",l),r}
s?s(A,b):l(A,b,{name:!0})
var k=A.prototype=u(b.prototype,{constructor:h(1,A),message:h(1,""),name:h(1,"AggregateError")})
n({global:!0},{AggregateError:A})},(e,t,r)=>{var n=r(8),a=r(9).f,i=r(46),o=r(50),s=r(40),l=r(57),u=r(68)
e.exports=function(e,t){var r,c,h,d,f,p=e.target,v=e.global,y=e.stat
if(r=v?n:y?n[p]||s(p,{}):(n[p]||{}).prototype)for(c in t){if(d=t[c],h=e.noTargetGet?(f=a(r,c))&&f.value:r[c],!u(v?c:p+(y?".":"#")+c,e.forced)&&void 0!==h){if(typeof d==typeof h)continue
l(d,h)}(e.sham||h&&h.sham)&&i(d,"sham",!0),o(r,c,d,e)}}},e=>{var t=function(e){return e&&e.Math==Math&&e}
e.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof global&&global)||function(){return this}()||Function("return this")()},(e,t,r)=>{var n=r(10),a=r(12),i=r(14),o=r(15),s=r(16),l=r(21),u=r(41),c=r(44),h=Object.getOwnPropertyDescriptor
t.f=n?h:function(e,t){if(e=s(e),t=l(t),c)try{return h(e,t)}catch(r){}if(u(e,t))return o(!a(i.f,e,t),e[t])}},(e,t,r)=>{var n=r(11)
e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},(e,t,r)=>{var n=r(13),a=Function.prototype.call
e.exports=n?a.bind(a):function(){return a.apply(a,arguments)}},(e,t,r)=>{var n=r(11)
e.exports=!n((function(){var e=function(){}.bind()
return"function"!=typeof e||e.hasOwnProperty("prototype")}))},(e,t)=>{"use strict"
var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1)
t.f=a?function(e){var t=n(this,e)
return!!t&&t.enumerable}:r},e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},(e,t,r)=>{var n=r(17),a=r(20)
e.exports=function(e){return n(a(e))}},(e,t,r)=>{var n=r(8),a=r(18),i=r(11),o=r(19),s=n.Object,l=a("".split)
e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?l(e,""):s(e)}:s},(e,t,r)=>{var n=r(13),a=Function.prototype,i=a.bind,o=a.call,s=n&&i.bind(o,o)
e.exports=n?function(e){return e&&s(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},(e,t,r)=>{var n=r(18),a=n({}.toString),i=n("".slice)
e.exports=function(e){return i(a(e),8,-1)}},(e,t,r)=>{var n=r(8).TypeError
e.exports=function(e){if(null==e)throw n("Can't call method on "+e)
return e}},(e,t,r)=>{var n=r(22),a=r(25)
e.exports=function(e){var t=n(e,"string")
return a(t)?t:t+""}},(e,t,r)=>{var n=r(8),a=r(12),i=r(23),o=r(25),s=r(32),l=r(35),u=r(36),c=n.TypeError,h=u("toPrimitive")
e.exports=function(e,t){if(!i(e)||o(e))return e
var r,n=s(e,h)
if(n){if(void 0===t&&(t="default"),r=a(n,e,t),!i(r)||o(r))return r
throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},(e,t,r)=>{var n=r(24)
e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},e=>{e.exports=function(e){return"function"==typeof e}},(e,t,r)=>{var n=r(8),a=r(26),i=r(24),o=r(27),s=r(28),l=n.Object
e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=a("Symbol")
return i(t)&&o(t.prototype,l(e))}},(e,t,r)=>{var n=r(8),a=r(24),i=function(e){return a(e)?e:void 0}
e.exports=function(e,t){return arguments.length<2?i(n[e]):n[e]&&n[e][t]}},(e,t,r)=>{var n=r(18)
e.exports=n({}.isPrototypeOf)},(e,t,r)=>{var n=r(29)
e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},(e,t,r)=>{var n=r(30),a=r(11)
e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol()
return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},(e,t,r)=>{var n,a,i=r(8),o=r(31),s=i.process,l=i.Deno,u=s&&s.versions||l&&l.version,c=u&&u.v8
c&&(a=(n=c.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(a=+n[1]),e.exports=a},(e,t,r)=>{var n=r(26)
e.exports=n("navigator","userAgent")||""},(e,t,r)=>{var n=r(33)
e.exports=function(e,t){var r=e[t]
return null==r?void 0:n(r)}},(e,t,r)=>{var n=r(8),a=r(24),i=r(34),o=n.TypeError
e.exports=function(e){if(a(e))return e
throw o(i(e)+" is not a function")}},(e,t,r)=>{var n=r(8).String
e.exports=function(e){try{return n(e)}catch(t){return"Object"}}},(e,t,r)=>{var n=r(8),a=r(12),i=r(24),o=r(23),s=n.TypeError
e.exports=function(e,t){var r,n
if("string"===t&&i(r=e.toString)&&!o(n=a(r,e)))return n
if(i(r=e.valueOf)&&!o(n=a(r,e)))return n
if("string"!==t&&i(r=e.toString)&&!o(n=a(r,e)))return n
throw s("Can't convert object to primitive value")}},(e,t,r)=>{var n=r(8),a=r(37),i=r(41),o=r(43),s=r(29),l=r(28),u=a("wks"),c=n.Symbol,h=c&&c.for,d=l?c:c&&c.withoutSetter||o
e.exports=function(e){if(!i(u,e)||!s&&"string"!=typeof u[e]){var t="Symbol."+e
s&&i(c,e)?u[e]=c[e]:u[e]=l&&h?h(t):d(t)}return u[e]}},(e,t,r)=>{var n=r(38),a=r(39);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},e=>{e.exports=!1},(e,t,r)=>{var n=r(8),a=r(40),i="__core-js_shared__",o=n[i]||a(i,{})
e.exports=o},(e,t,r)=>{var n=r(8),a=Object.defineProperty
e.exports=function(e,t){try{a(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},(e,t,r)=>{var n=r(18),a=r(42),i=n({}.hasOwnProperty)
e.exports=Object.hasOwn||function(e,t){return i(a(e),t)}},(e,t,r)=>{var n=r(8),a=r(20),i=n.Object
e.exports=function(e){return i(a(e))}},(e,t,r)=>{var n=r(18),a=0,i=Math.random(),o=n(1..toString)
e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++a+i,36)}},(e,t,r)=>{var n=r(10),a=r(11),i=r(45)
e.exports=!n&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},(e,t,r)=>{var n=r(8),a=r(23),i=n.document,o=a(i)&&a(i.createElement)
e.exports=function(e){return o?i.createElement(e):{}}},(e,t,r)=>{var n=r(10),a=r(47),i=r(15)
e.exports=n?function(e,t,r){return a.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},(e,t,r)=>{var n=r(8),a=r(10),i=r(44),o=r(48),s=r(49),l=r(21),u=n.TypeError,c=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable"
t.f=a?o?function(e,t,r){if(s(e),t=l(t),s(r),"function"==typeof e&&"prototype"===t&&"value"in r&&p in r&&!r.writable){var n=h(e,t)
n&&n.writable&&(e[t]=r.value,r={configurable:f in r?r.configurable:n.configurable,enumerable:d in r?r.enumerable:n.enumerable,writable:!1})}return c(e,t,r)}:c:function(e,t,r){if(s(e),t=l(t),s(r),i)try{return c(e,t,r)}catch(n){}if("get"in r||"set"in r)throw u("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}},(e,t,r)=>{var n=r(10),a=r(11)
e.exports=n&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},(e,t,r)=>{var n=r(8),a=r(23),i=n.String,o=n.TypeError
e.exports=function(e){if(a(e))return e
throw o(i(e)+" is not an object")}},(e,t,r)=>{var n=r(8),a=r(24),i=r(41),o=r(46),s=r(40),l=r(51),u=r(52),c=r(56).CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,r,l){var u,h=!!l&&!!l.unsafe,p=!!l&&!!l.enumerable,v=!!l&&!!l.noTargetGet,y=l&&void 0!==l.name?l.name:t
a(r)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||c&&r.name!==y)&&o(r,"name",y),(u=d(r)).source||(u.source=f.join("string"==typeof y?y:""))),e!==n?(h?!v&&e[t]&&(p=!0):delete e[t],p?e[t]=r:o(e,t,r)):p?e[t]=r:s(t,r)})(Function.prototype,"toString",(function(){return a(this)&&h(this).source||l(this)}))},(e,t,r)=>{var n=r(18),a=r(24),i=r(39),o=n(Function.toString)
a(i.inspectSource)||(i.inspectSource=function(e){return o(e)}),e.exports=i.inspectSource},(e,t,r)=>{var n,a,i,o=r(53),s=r(8),l=r(18),u=r(23),c=r(46),h=r(41),d=r(39),f=r(54),p=r(55),v="Object already initialized",y=s.TypeError,m=s.WeakMap
if(o||d.state){var g=d.state||(d.state=new m),b=l(g.get),_=l(g.has),A=l(g.set)
n=function(e,t){if(_(g,e))throw new y(v)
return t.facade=e,A(g,e,t),t},a=function(e){return b(g,e)||{}},i=function(e){return _(g,e)}}else{var k=f("state")
p[k]=!0,n=function(e,t){if(h(e,k))throw new y(v)
return t.facade=e,c(e,k,t),t},a=function(e){return h(e,k)?e[k]:{}},i=function(e){return h(e,k)}}e.exports={set:n,get:a,has:i,enforce:function(e){return i(e)?a(e):n(e,{})},getterFor:function(e){return function(t){var r
if(!u(t)||(r=a(t)).type!==e)throw y("Incompatible receiver, "+e+" required")
return r}}}},(e,t,r)=>{var n=r(8),a=r(24),i=r(51),o=n.WeakMap
e.exports=a(o)&&/native code/.test(i(o))},(e,t,r)=>{var n=r(37),a=r(43),i=n("keys")
e.exports=function(e){return i[e]||(i[e]=a(e))}},e=>{e.exports={}},(e,t,r)=>{var n=r(10),a=r(41),i=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,s=a(i,"name"),l=s&&"something"===function(){}.name,u=s&&(!n||n&&o(i,"name").configurable)
e.exports={EXISTS:s,PROPER:l,CONFIGURABLE:u}},(e,t,r)=>{var n=r(41),a=r(58),i=r(9),o=r(47)
e.exports=function(e,t,r){for(var s=a(t),l=o.f,u=i.f,c=0;c<s.length;c++){var h=s[c]
n(e,h)||r&&n(r,h)||l(e,h,u(t,h))}}},(e,t,r)=>{var n=r(26),a=r(18),i=r(59),o=r(67),s=r(49),l=a([].concat)
e.exports=n("Reflect","ownKeys")||function(e){var t=i.f(s(e)),r=o.f
return r?l(t,r(e)):t}},(e,t,r)=>{var n=r(60),a=r(66).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},(e,t,r)=>{var n=r(18),a=r(41),i=r(16),o=r(61).indexOf,s=r(55),l=n([].push)
e.exports=function(e,t){var r,n=i(e),u=0,c=[]
for(r in n)!a(s,r)&&a(n,r)&&l(c,r)
for(;t.length>u;)a(n,r=t[u++])&&(~o(c,r)||l(c,r))
return c}},(e,t,r)=>{var n=r(16),a=r(62),i=r(64),o=function(e){return function(t,r,o){var s,l=n(t),u=i(l),c=a(o,u)
if(e&&r!=r){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===r)return e||c||0
return!e&&-1}}
e.exports={includes:o(!0),indexOf:o(!1)}},(e,t,r)=>{var n=r(63),a=Math.max,i=Math.min
e.exports=function(e,t){var r=n(e)
return r<0?a(r+t,0):i(r,t)}},e=>{var t=Math.ceil,r=Math.floor
e.exports=function(e){var n=+e
return n!=n||0===n?0:(n>0?r:t)(n)}},(e,t,r)=>{var n=r(65)
e.exports=function(e){return n(e.length)}},(e,t,r)=>{var n=r(63),a=Math.min
e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},(e,t)=>{t.f=Object.getOwnPropertySymbols},(e,t,r)=>{var n=r(11),a=r(24),i=/#|\.prototype\./,o=function(e,t){var r=l[s(e)]
return r==c||r!=u&&(a(t)?n(t):!!t)},s=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=o.data={},u=o.NATIVE="N",c=o.POLYFILL="P"
e.exports=o},(e,t,r)=>{var n=r(8),a=r(41),i=r(24),o=r(42),s=r(54),l=r(70),u=s("IE_PROTO"),c=n.Object,h=c.prototype
e.exports=l?c.getPrototypeOf:function(e){var t=o(e)
if(a(t,u))return t[u]
var r=t.constructor
return i(r)&&t instanceof r?r.prototype:t instanceof c?h:null}},(e,t,r)=>{var n=r(11)
e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},(e,t,r)=>{var n=r(18),a=r(49),i=r(72)
e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={}
try{(e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(o){}return function(r,n){return a(r),i(n),t?e(r,n):r.__proto__=n,r}}():void 0)},(e,t,r)=>{var n=r(8),a=r(24),i=n.String,o=n.TypeError
e.exports=function(e){if("object"==typeof e||a(e))return e
throw o("Can't set "+i(e)+" as a prototype")}},(e,t,r)=>{var n,a=r(49),i=r(74),o=r(66),s=r(55),l=r(76),u=r(45),c=r(54),h=c("IE_PROTO"),d=function(){},f=function(e){return"<script>"+e+"</"+"script>"},p=function(e){e.write(f("")),e.close()
var t=e.parentWindow.Object
return e=null,t},v=function(){try{n=new ActiveXObject("htmlfile")}catch(a){}var e,t
v="undefined"!=typeof document?document.domain&&n?p(n):((t=u("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F):p(n)
for(var r=o.length;r--;)delete v.prototype[o[r]]
return v()}
s[h]=!0,e.exports=Object.create||function(e,t){var r
return null!==e?(d.prototype=a(e),r=new d,d.prototype=null,r[h]=e):r=v(),void 0===t?r:i.f(r,t)}},(e,t,r)=>{var n=r(10),a=r(48),i=r(47),o=r(49),s=r(16),l=r(75)
t.f=n&&!a?Object.defineProperties:function(e,t){o(e)
for(var r,n=s(t),a=l(t),u=a.length,c=0;u>c;)i.f(e,r=a[c++],n[r])
return e}},(e,t,r)=>{var n=r(60),a=r(66)
e.exports=Object.keys||function(e){return n(e,a)}},(e,t,r)=>{var n=r(26)
e.exports=n("document","documentElement")},(e,t,r)=>{var n=r(18)("".replace),a=String(Error("zxcasd").stack),i=/\n\s*at [^:]*:[^\n]*/,o=i.test(a)
e.exports=function(e,t){if(o&&"string"==typeof e)for(;t--;)e=n(e,i,"")
return e}},(e,t,r)=>{var n=r(23),a=r(46)
e.exports=function(e,t){n(t)&&"cause"in t&&a(e,"cause",t.cause)}},(e,t,r)=>{var n=r(8),a=r(80),i=r(12),o=r(49),s=r(34),l=r(81),u=r(64),c=r(27),h=r(83),d=r(84),f=r(87),p=n.TypeError,v=function(e,t){this.stopped=e,this.result=t},y=v.prototype
e.exports=function(e,t,r){var n,m,g,b,_,A,k,S=r&&r.that,x=!(!r||!r.AS_ENTRIES),w=!(!r||!r.IS_ITERATOR),C=!(!r||!r.INTERRUPTED),P=a(t,S),T=function(e){return n&&f(n,"normal",e),new v(!0,e)},E=function(e){return x?(o(e),C?P(e[0],e[1],T):P(e[0],e[1])):C?P(e,T):P(e)}
if(w)n=e
else{if(!(m=d(e)))throw p(s(e)+" is not iterable")
if(l(m)){for(g=0,b=u(e);b>g;g++)if((_=E(e[g]))&&c(y,_))return _
return new v(!1)}n=h(e,m)}for(A=n.next;!(k=i(A,n)).done;){try{_=E(k.value)}catch(O){f(n,"throw",O)}if("object"==typeof _&&_&&c(y,_))return _}return new v(!1)}},(e,t,r)=>{var n=r(18),a=r(33),i=r(13),o=n(n.bind)
e.exports=function(e,t){return a(e),void 0===t?e:i?o(e,t):function(){return e.apply(t,arguments)}}},(e,t,r)=>{var n=r(36),a=r(82),i=n("iterator"),o=Array.prototype
e.exports=function(e){return void 0!==e&&(a.Array===e||o[i]===e)}},e=>{e.exports={}},(e,t,r)=>{var n=r(8),a=r(12),i=r(33),o=r(49),s=r(34),l=r(84),u=n.TypeError
e.exports=function(e,t){var r=arguments.length<2?l(e):t
if(i(r))return o(a(r,e))
throw u(s(e)+" is not iterable")}},(e,t,r)=>{var n=r(85),a=r(32),i=r(82),o=r(36)("iterator")
e.exports=function(e){if(null!=e)return a(e,o)||a(e,"@@iterator")||i[n(e)]}},(e,t,r)=>{var n=r(8),a=r(86),i=r(24),o=r(19),s=r(36)("toStringTag"),l=n.Object,u="Arguments"==o(function(){return arguments}())
e.exports=a?o:function(e){var t,r,n
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=l(e),s))?r:u?o(t):"Object"==(n=o(t))&&i(t.callee)?"Arguments":n}},(e,t,r)=>{var n={}
n[r(36)("toStringTag")]="z",e.exports="[object z]"===String(n)},(e,t,r)=>{var n=r(12),a=r(49),i=r(32)
e.exports=function(e,t,r){var o,s
a(e)
try{if(!(o=i(e,"return"))){if("throw"===t)throw r
return r}o=n(o,e)}catch(l){s=!0,o=l}if("throw"===t)throw r
if(s)throw o
return a(o),r}},(e,t,r)=>{var n=r(89)
e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},(e,t,r)=>{var n=r(8),a=r(85),i=n.String
e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string")
return i(e)}},(e,t,r)=>{var n=r(11),a=r(15)
e.exports=!n((function(){var e=Error("a")
return!("stack"in e)||(Object.defineProperty(e,"stack",a(1,7)),7!==e.stack)}))},(e,t,r)=>{"use strict"
var n=r(16),a=r(92),i=r(82),o=r(52),s=r(47).f,l=r(93),u=r(38),c=r(10),h="Array Iterator",d=o.set,f=o.getterFor(h)
e.exports=l(Array,"Array",(function(e,t){d(this,{type:h,target:n(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,r=e.kind,n=e.index++
return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values")
var p=i.Arguments=i.Array
if(a("keys"),a("values"),a("entries"),!u&&c&&"values"!==p.name)try{s(p,"name",{value:"values"})}catch(v){}},(e,t,r)=>{var n=r(36),a=r(73),i=r(47),o=n("unscopables"),s=Array.prototype
null==s[o]&&i.f(s,o,{configurable:!0,value:a(null)}),e.exports=function(e){s[o][e]=!0}},(e,t,r)=>{"use strict"
var n=r(7),a=r(12),i=r(38),o=r(56),s=r(24),l=r(94),u=r(69),c=r(71),h=r(96),d=r(46),f=r(50),p=r(36),v=r(82),y=r(95),m=o.PROPER,g=o.CONFIGURABLE,b=y.IteratorPrototype,_=y.BUGGY_SAFARI_ITERATORS,A=p("iterator"),k="keys",S="values",x="entries",w=function(){return this}
e.exports=function(e,t,r,o,p,y,C){l(r,t,o)
var P,T,E,O=function(e){if(e===p&&D)return D
if(!_&&e in M)return M[e]
switch(e){case k:case S:case x:return function(){return new r(this,e)}}return function(){return new r(this)}},F=t+" Iterator",R=!1,M=e.prototype,I=M[A]||M["@@iterator"]||p&&M[p],D=!_&&I||O(p),j="Array"==t&&M.entries||I
if(j&&(P=u(j.call(new e)))!==Object.prototype&&P.next&&(i||u(P)===b||(c?c(P,b):s(P[A])||f(P,A,w)),h(P,F,!0,!0),i&&(v[F]=w)),m&&p==S&&I&&I.name!==S&&(!i&&g?d(M,"name",S):(R=!0,D=function(){return a(I,this)})),p)if(T={values:O(S),keys:y?D:O(k),entries:O(x)},C)for(E in T)(_||R||!(E in M))&&f(M,E,T[E])
else n({target:t,proto:!0,forced:_||R},T)
return i&&!C||M[A]===D||f(M,A,D,{name:p}),v[t]=D,T}},(e,t,r)=>{"use strict"
var n=r(95).IteratorPrototype,a=r(73),i=r(15),o=r(96),s=r(82),l=function(){return this}
e.exports=function(e,t,r,u){var c=t+" Iterator"
return e.prototype=a(n,{next:i(+!u,r)}),o(e,c,!1,!0),s[c]=l,e}},(e,t,r)=>{"use strict"
var n,a,i,o=r(11),s=r(24),l=r(73),u=r(69),c=r(50),h=r(36),d=r(38),f=h("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(a=u(u(i)))!==Object.prototype&&(n=a):p=!0),null==n||o((function(){var e={}
return n[f].call(e)!==e}))?n={}:d&&(n=l(n)),s(n[f])||c(n,f,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},(e,t,r)=>{var n=r(47).f,a=r(41),i=r(36)("toStringTag")
e.exports=function(e,t,r){e&&!r&&(e=e.prototype),e&&!a(e,i)&&n(e,i,{configurable:!0,value:t})}},(e,t,r)=>{var n=r(86),a=r(50),i=r(98)
n||a(Object.prototype,"toString",i,{unsafe:!0})},(e,t,r)=>{"use strict"
var n=r(86),a=r(85)
e.exports=n?{}.toString:function(){return"[object "+a(this)+"]"}},(e,t,r)=>{"use strict"
var n,a,i,o,s=r(7),l=r(38),u=r(8),c=r(26),h=r(12),d=r(100),f=r(50),p=r(101),v=r(71),y=r(96),m=r(102),g=r(33),b=r(24),_=r(23),A=r(103),k=r(51),S=r(79),x=r(104),w=r(105),C=r(108).set,P=r(114),T=r(117),E=r(119),O=r(118),F=r(120),R=r(121),M=r(52),I=r(68),D=r(36),j=r(122),L=r(113),N=r(30),U=D("species"),B="Promise",W=M.getterFor(B),G=M.set,q=M.getterFor(B),z=d&&d.prototype,H=d,V=z,X=u.TypeError,Y=u.document,K=u.process,J=O.f,Q=J,$=!!(Y&&Y.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),ee="unhandledrejection",te=!1,re=I(B,(function(){var e=k(H),t=e!==String(H)
if(!t&&66===N)return!0
if(l&&!V.finally)return!0
if(N>=51&&/native code/.test(e))return!1
var r=new H((function(e){e(1)})),n=function(e){e((function(){}),(function(){}))}
return(r.constructor={})[U]=n,!(te=r.then((function(){}))instanceof n)||!t&&j&&!Z})),ne=re||!x((function(e){H.all(e).catch((function(){}))})),ae=function(e){var t
return!(!_(e)||!b(t=e.then))&&t},ie=function(e,t){var r,n,a,i=t.value,o=1==t.state,s=o?e.ok:e.fail,l=e.resolve,u=e.reject,c=e.domain
try{s?(o||(2===t.rejection&&ce(t),t.rejection=1),!0===s?r=i:(c&&c.enter(),r=s(i),c&&(c.exit(),a=!0)),r===e.promise?u(X("Promise-chain cycle")):(n=ae(r))?h(n,r,l,u):l(r)):u(i)}catch(d){c&&!a&&c.exit(),u(d)}},oe=function(e,t){e.notified||(e.notified=!0,P((function(){for(var r,n=e.reactions;r=n.get();)ie(r,e)
e.notified=!1,t&&!e.rejection&&le(e)})))},se=function(e,t,r){var n,a
$?((n=Y.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),u.dispatchEvent(n)):n={promise:t,reason:r},!Z&&(a=u["on"+e])?a(n):e===ee&&E("Unhandled promise rejection",r)},le=function(e){h(C,u,(function(){var t,r=e.facade,n=e.value
if(ue(e)&&(t=F((function(){L?K.emit("unhandledRejection",n,r):se(ee,r,n)})),e.rejection=L||ue(e)?2:1,t.error))throw t.value}))},ue=function(e){return 1!==e.rejection&&!e.parent},ce=function(e){h(C,u,(function(){var t=e.facade
L?K.emit("rejectionHandled",t):se("rejectionhandled",t,e.value)}))},he=function(e,t,r){return function(n){e(t,n,r)}},de=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,oe(e,!0))},fe=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r)
try{if(e.facade===t)throw X("Promise can't be resolved itself")
var n=ae(t)
n?P((function(){var r={done:!1}
try{h(n,t,he(fe,r,e),he(de,r,e))}catch(a){de(r,a,e)}})):(e.value=t,e.state=1,oe(e,!1))}catch(a){de({done:!1},a,e)}}}
if(re&&(V=(H=function(e){A(this,V),g(e),h(n,this)
var t=W(this)
try{e(he(fe,t),he(de,t))}catch(r){de(t,r)}}).prototype,(n=function(e){G(this,{type:B,done:!1,notified:!1,parent:!1,reactions:new R,rejection:!1,state:0,value:void 0})}).prototype=p(V,{then:function(e,t){var r=q(this),n=J(w(this,H))
return r.parent=!0,n.ok=!b(e)||e,n.fail=b(t)&&t,n.domain=L?K.domain:void 0,0==r.state?r.reactions.add(n):P((function(){ie(n,r)})),n.promise},catch:function(e){return this.then(void 0,e)}}),a=function(){var e=new n,t=W(e)
this.promise=e,this.resolve=he(fe,t),this.reject=he(de,t)},O.f=J=function(e){return e===H||e===i?new a(e):Q(e)},!l&&b(d)&&z!==Object.prototype)){o=z.then,te||(f(z,"then",(function(e,t){var r=this
return new H((function(e,t){h(o,r,e,t)})).then(e,t)}),{unsafe:!0}),f(z,"catch",V.catch,{unsafe:!0}))
try{delete z.constructor}catch(pe){}v&&v(z,V)}s({global:!0,wrap:!0,forced:re},{Promise:H}),y(H,B,!1,!0),m(B),i=c(B),s({target:B,stat:!0,forced:re},{reject:function(e){var t=J(this)
return h(t.reject,void 0,e),t.promise}}),s({target:B,stat:!0,forced:l||re},{resolve:function(e){return T(l&&this===i?H:this,e)}}),s({target:B,stat:!0,forced:ne},{all:function(e){var t=this,r=J(t),n=r.resolve,a=r.reject,i=F((function(){var r=g(t.resolve),i=[],o=0,s=1
S(e,(function(e){var l=o++,u=!1
s++,h(r,t,e).then((function(e){u||(u=!0,i[l]=e,--s||n(i))}),a)})),--s||n(i)}))
return i.error&&a(i.value),r.promise},race:function(e){var t=this,r=J(t),n=r.reject,a=F((function(){var a=g(t.resolve)
S(e,(function(e){h(a,t,e).then(r.resolve,n)}))}))
return a.error&&n(a.value),r.promise}})},(e,t,r)=>{var n=r(8)
e.exports=n.Promise},(e,t,r)=>{var n=r(50)
e.exports=function(e,t,r){for(var a in t)n(e,a,t[a],r)
return e}},(e,t,r)=>{"use strict"
var n=r(26),a=r(47),i=r(36),o=r(10),s=i("species")
e.exports=function(e){var t=n(e),r=a.f
o&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},(e,t,r)=>{var n=r(8),a=r(27),i=n.TypeError
e.exports=function(e,t){if(a(t,e))return e
throw i("Incorrect invocation")}},(e,t,r)=>{var n=r(36)("iterator"),a=!1
try{var i=0,o={next:function(){return{done:!!i++}},return:function(){a=!0}}
o[n]=function(){return this},Array.from(o,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!a)return!1
var r=!1
try{var i={}
i[n]=function(){return{next:function(){return{done:r=!0}}}},e(i)}catch(s){}return r}},(e,t,r)=>{var n=r(49),a=r(106),i=r(36)("species")
e.exports=function(e,t){var r,o=n(e).constructor
return void 0===o||null==(r=n(o)[i])?t:a(r)}},(e,t,r)=>{var n=r(8),a=r(107),i=r(34),o=n.TypeError
e.exports=function(e){if(a(e))return e
throw o(i(e)+" is not a constructor")}},(e,t,r)=>{var n=r(18),a=r(11),i=r(24),o=r(85),s=r(26),l=r(51),u=function(){},c=[],h=s("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=n(d.exec),p=!d.exec(u),v=function(e){if(!i(e))return!1
try{return h(u,c,e),!0}catch(t){return!1}},y=function(e){if(!i(e))return!1
switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,l(e))}catch(t){return!0}}
y.sham=!0,e.exports=!h||a((function(){var e
return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?y:v},(e,t,r)=>{var n,a,i,o,s=r(8),l=r(109),u=r(80),c=r(24),h=r(41),d=r(11),f=r(76),p=r(110),v=r(45),y=r(111),m=r(112),g=r(113),b=s.setImmediate,_=s.clearImmediate,A=s.process,k=s.Dispatch,S=s.Function,x=s.MessageChannel,w=s.String,C=0,P={},T="onreadystatechange"
try{n=s.location}catch(M){}var E=function(e){if(h(P,e)){var t=P[e]
delete P[e],t()}},O=function(e){return function(){E(e)}},F=function(e){E(e.data)},R=function(e){s.postMessage(w(e),n.protocol+"//"+n.host)}
b&&_||(b=function(e){y(arguments.length,1)
var t=c(e)?e:S(e),r=p(arguments,1)
return P[++C]=function(){l(t,void 0,r)},a(C),C},_=function(e){delete P[e]},g?a=function(e){A.nextTick(O(e))}:k&&k.now?a=function(e){k.now(O(e))}:x&&!m?(o=(i=new x).port2,i.port1.onmessage=F,a=u(o.postMessage,o)):s.addEventListener&&c(s.postMessage)&&!s.importScripts&&n&&"file:"!==n.protocol&&!d(R)?(a=R,s.addEventListener("message",F,!1)):a=T in v("script")?function(e){f.appendChild(v("script")).onreadystatechange=function(){f.removeChild(this),E(e)}}:function(e){setTimeout(O(e),0)}),e.exports={set:b,clear:_}},(e,t,r)=>{var n=r(13),a=Function.prototype,i=a.apply,o=a.call
e.exports="object"==typeof Reflect&&Reflect.apply||(n?o.bind(i):function(){return o.apply(i,arguments)})},(e,t,r)=>{var n=r(18)
e.exports=n([].slice)},(e,t,r)=>{var n=r(8).TypeError
e.exports=function(e,t){if(e<t)throw n("Not enough arguments")
return e}},(e,t,r)=>{var n=r(31)
e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},(e,t,r)=>{var n=r(19),a=r(8)
e.exports="process"==n(a.process)},(e,t,r)=>{var n,a,i,o,s,l,u,c,h=r(8),d=r(80),f=r(9).f,p=r(108).set,v=r(112),y=r(115),m=r(116),g=r(113),b=h.MutationObserver||h.WebKitMutationObserver,_=h.document,A=h.process,k=h.Promise,S=f(h,"queueMicrotask"),x=S&&S.value
x||(n=function(){var e,t
for(g&&(e=A.domain)&&e.exit();a;){t=a.fn,a=a.next
try{t()}catch(r){throw a?o():i=void 0,r}}i=void 0,e&&e.enter()},v||g||m||!b||!_?!y&&k&&k.resolve?((u=k.resolve(void 0)).constructor=k,c=d(u.then,u),o=function(){c(n)}):g?o=function(){A.nextTick(n)}:(p=d(p,h),o=function(){p(n)}):(s=!0,l=_.createTextNode(""),new b(n).observe(l,{characterData:!0}),o=function(){l.data=s=!s})),e.exports=x||function(e){var t={fn:e,next:void 0}
i&&(i.next=t),a||(a=t,o()),i=t}},(e,t,r)=>{var n=r(31),a=r(8)
e.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==a.Pebble},(e,t,r)=>{var n=r(31)
e.exports=/web0s(?!.*chrome)/i.test(n)},(e,t,r)=>{var n=r(49),a=r(23),i=r(118)
e.exports=function(e,t){if(n(e),a(t)&&t.constructor===e)return t
var r=i.f(e)
return(0,r.resolve)(t),r.promise}},(e,t,r)=>{"use strict"
var n=r(33),a=function(e){var t,r
this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor")
t=e,r=n})),this.resolve=n(t),this.reject=n(r)}
e.exports.f=function(e){return new a(e)}},(e,t,r)=>{var n=r(8)
e.exports=function(e,t){var r=n.console
r&&r.error&&(1==arguments.length?r.error(e):r.error(e,t))}},e=>{e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e=>{var t=function(){this.head=null,this.tail=null}
t.prototype={add:function(e){var t={item:e,next:null}
this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head
if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=t},e=>{e.exports="object"==typeof window},(e,t,r)=>{"use strict"
var n=r(7),a=r(12),i=r(33),o=r(118),s=r(120),l=r(79)
n({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=o.f(t),n=r.resolve,u=r.reject,c=s((function(){var r=i(t.resolve),o=[],s=0,u=1
l(e,(function(e){var i=s++,l=!1
u++,a(r,t,e).then((function(e){l||(l=!0,o[i]={status:"fulfilled",value:e},--u||n(o))}),(function(e){l||(l=!0,o[i]={status:"rejected",reason:e},--u||n(o))}))})),--u||n(o)}))
return c.error&&u(c.value),r.promise}})},(e,t,r)=>{"use strict"
var n=r(7),a=r(33),i=r(26),o=r(12),s=r(118),l=r(120),u=r(79),c="No one promise resolved"
n({target:"Promise",stat:!0},{any:function(e){var t=this,r=i("AggregateError"),n=s.f(t),h=n.resolve,d=n.reject,f=l((function(){var n=a(t.resolve),i=[],s=0,l=1,f=!1
u(e,(function(e){var a=s++,u=!1
l++,o(n,t,e).then((function(e){u||f||(f=!0,h(e))}),(function(e){u||f||(u=!0,i[a]=e,--l||d(new r(i,c)))}))})),--l||d(new r(i,c))}))
return f.error&&d(f.value),n.promise}})},(e,t,r)=>{"use strict"
var n=r(7),a=r(38),i=r(100),o=r(11),s=r(26),l=r(24),u=r(105),c=r(117),h=r(50)
if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&o((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=u(this,s("Promise")),r=l(e)
return this.then(r?function(r){return c(t,e()).then((function(){return r}))}:e,r?function(r){return c(t,e()).then((function(){throw r}))}:e)}}),!a&&l(i)){var d=s("Promise").prototype.finally
i.prototype.finally!==d&&h(i.prototype,"finally",d,{unsafe:!0})}},(e,t,r)=>{"use strict"
var n=r(127).charAt,a=r(89),i=r(52),o=r(93),s="String Iterator",l=i.set,u=i.getterFor(s)
o(String,"String",(function(e){l(this,{type:s,string:a(e),index:0})}),(function(){var e,t=u(this),r=t.string,a=t.index
return a>=r.length?{value:void 0,done:!0}:(e=n(r,a),t.index+=e.length,{value:e,done:!1})}))},(e,t,r)=>{var n=r(18),a=r(63),i=r(89),o=r(20),s=n("".charAt),l=n("".charCodeAt),u=n("".slice),c=function(e){return function(t,r){var n,c,h=i(o(t)),d=a(r),f=h.length
return d<0||d>=f?e?"":void 0:(n=l(h,d))<55296||n>56319||d+1===f||(c=l(h,d+1))<56320||c>57343?e?s(h,d):n:e?u(h,d,d+2):c-56320+(n-55296<<10)+65536}}
e.exports={codeAt:c(!1),charAt:c(!0)}},(e,t,r)=>{var n=r(8)
e.exports=n},(e,t,r)=>{r(91),r(97),r(130),r(141),r(142)
var n=r(128)
e.exports=n.structuredClone},(e,t,r)=>{"use strict"
r(131)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(140))},(e,t,r)=>{"use strict"
var n=r(7),a=r(8),i=r(18),o=r(68),s=r(50),l=r(132),u=r(79),c=r(103),h=r(24),d=r(23),f=r(11),p=r(104),v=r(96),y=r(139)
e.exports=function(e,t,r){var m=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),b=m?"set":"add",_=a[e],A=_&&_.prototype,k=_,S={},x=function(e){var t=i(A[e])
s(A,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!d(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return g&&!d(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!d(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})}
if(o(e,!h(_)||!(g||A.forEach&&!f((function(){(new _).entries().next()})))))k=r.getConstructor(t,e,m,b),l.enable()
else if(o(e,!0)){var w=new k,C=w[b](g?{}:-0,1)!=w,P=f((function(){w.has(1)})),T=p((function(e){new _(e)})),E=!g&&f((function(){for(var e=new _,t=5;t--;)e[b](t,t)
return!e.has(-0)}))
T||((k=t((function(e,t){c(e,A)
var r=y(new _,e,k)
return null!=t&&u(t,r[b],{that:r,AS_ENTRIES:m}),r}))).prototype=A,A.constructor=k),(P||E)&&(x("delete"),x("has"),m&&x("get")),(E||C)&&x(b),g&&A.clear&&delete A.clear}return S[e]=k,n({global:!0,forced:k!=_},S),v(k,e),g||r.setStrong(k,e,m),k}},(e,t,r)=>{var n=r(7),a=r(18),i=r(55),o=r(23),s=r(41),l=r(47).f,u=r(59),c=r(133),h=r(136),d=r(43),f=r(138),p=!1,v=d("meta"),y=0,m=function(e){l(e,v,{value:{objectID:"O"+y++,weakData:{}}})},g=e.exports={enable:function(){g.enable=function(){},p=!0
var e=u.f,t=a([].splice),r={}
r[v]=1,e(r).length&&(u.f=function(r){for(var n=e(r),a=0,i=n.length;a<i;a++)if(n[a]===v){t(n,a,1)
break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:c.f}))},fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e
if(!s(e,v)){if(!h(e))return"F"
if(!t)return"E"
m(e)}return e[v].objectID},getWeakData:function(e,t){if(!s(e,v)){if(!h(e))return!0
if(!t)return!1
m(e)}return e[v].weakData},onFreeze:function(e){return f&&p&&h(e)&&!s(e,v)&&m(e),e}}
i[v]=!0},(e,t,r)=>{var n=r(19),a=r(16),i=r(59).f,o=r(134),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[]
e.exports.f=function(e){return s&&"Window"==n(e)?function(e){try{return i(e)}catch(t){return o(s)}}(e):i(a(e))}},(e,t,r)=>{var n=r(8),a=r(62),i=r(64),o=r(135),s=n.Array,l=Math.max
e.exports=function(e,t,r){for(var n=i(e),u=a(t,n),c=a(void 0===r?n:r,n),h=s(l(c-u,0)),d=0;u<c;u++,d++)o(h,d,e[u])
return h.length=d,h}},(e,t,r)=>{"use strict"
var n=r(21),a=r(47),i=r(15)
e.exports=function(e,t,r){var o=n(t)
o in e?a.f(e,o,i(0,r)):e[o]=r}},(e,t,r)=>{var n=r(11),a=r(23),i=r(19),o=r(137),s=Object.isExtensible,l=n((function(){s(1)}))
e.exports=l||o?function(e){return!!a(e)&&((!o||"ArrayBuffer"!=i(e))&&(!s||s(e)))}:s},(e,t,r)=>{var n=r(11)
e.exports=n((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8)
Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},(e,t,r)=>{var n=r(11)
e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},(e,t,r)=>{var n=r(24),a=r(23),i=r(71)
e.exports=function(e,t,r){var o,s
return i&&n(o=t.constructor)&&o!==r&&a(s=o.prototype)&&s!==r.prototype&&i(e,s),e}},(e,t,r)=>{"use strict"
var n=r(47).f,a=r(73),i=r(101),o=r(80),s=r(103),l=r(79),u=r(93),c=r(102),h=r(10),d=r(132).fastKey,f=r(52),p=f.set,v=f.getterFor
e.exports={getConstructor:function(e,t,r,u){var c=e((function(e,n){s(e,f),p(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),h||(e.size=0),null!=n&&l(n,e[u],{that:e,AS_ENTRIES:r})})),f=c.prototype,y=v(t),m=function(e,t,r){var n,a,i=y(e),o=g(e,t)
return o?o.value=r:(i.last=o={index:a=d(t,!0),key:t,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=o),n&&(n.next=o),h?i.size++:e.size++,"F"!==a&&(i.index[a]=o)),e},g=function(e,t){var r,n=y(e),a=d(t)
if("F"!==a)return n.index[a]
for(r=n.first;r;r=r.next)if(r.key==t)return r}
return i(f,{clear:function(){for(var e=y(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next
e.first=e.last=void 0,h?e.size=0:this.size=0},delete:function(e){var t=this,r=y(t),n=g(t,e)
if(n){var a=n.next,i=n.previous
delete r.index[n.index],n.removed=!0,i&&(i.next=a),a&&(a.previous=i),r.first==n&&(r.first=a),r.last==n&&(r.last=i),h?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=y(this),n=o(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!g(this,e)}}),i(f,r?{get:function(e){var t=g(this,e)
return t&&t.value},set:function(e,t){return m(this,0===e?0:e,t)}}:{add:function(e){return m(this,e=0===e?0:e,e)}}),h&&n(f,"size",{get:function(){return y(this).size}}),c},setStrong:function(e,t,r){var n=t+" Iterator",a=v(t),i=v(n)
u(e,t,(function(e,t){p(this,{type:n,target:e,state:a(e),kind:t,last:void 0})}),(function(){for(var e=i(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous
return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),c(t)}}},(e,t,r)=>{"use strict"
r(131)("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(140))},(e,t,r)=>{var n,a=r(38),i=r(7),o=r(8),s=r(26),l=r(18),u=r(11),c=r(43),h=r(24),d=r(107),f=r(23),p=r(25),v=r(79),y=r(49),m=r(85),g=r(41),b=r(135),_=r(46),A=r(64),k=r(111),S=r(143),x=r(90),w=o.Object,C=o.Date,P=o.Error,T=o.EvalError,E=o.RangeError,O=o.ReferenceError,F=o.SyntaxError,R=o.TypeError,M=o.URIError,I=o.PerformanceMark,D=o.WebAssembly,j=D&&D.CompileError||P,L=D&&D.LinkError||P,N=D&&D.RuntimeError||P,U=s("DOMException"),B=s("Set"),W=s("Map"),G=W.prototype,q=l(G.has),z=l(G.get),H=l(G.set),V=l(B.prototype.add),X=s("Object","keys"),Y=l([].push),K=l((!0).valueOf),J=l(1..valueOf),Q=l("".valueOf),$=l(S),Z=l(C.prototype.getTime),ee=c("structuredClone"),te="DataCloneError",re="Transferring",ne=function(e){return!u((function(){var t=new o.Set([7]),r=e(t),n=e(w(7))
return r==t||!r.has(7)||"object"!=typeof n||7!=n}))&&e},ae=o.structuredClone,ie=a||(n=ae,!(!u((function(){var e=n(new o.AggregateError([1],ee,{cause:3}))
return"AggregateError"!=e.name||1!=e.errors[0]||e.message!=ee||3!=e.cause}))&&n)),oe=!ae&&ne((function(e){return new I(ee,{detail:e}).detail})),se=ne(ae)||oe,le=function(e){throw new U("Uncloneable type: "+e,te)},ue=function(e,t){throw new U((t||"Cloning")+" of "+e+" cannot be properly polyfilled in this engine",te)},ce=function(e,t){if(p(e)&&le("Symbol"),!f(e))return e
if(t){if(q(t,e))return z(t,e)}else t=new W
var r,n,a,i,l,u,c,v,y,k,S=m(e),I=!1
switch(S){case"Array":a=[],I=!0
break
case"Object":a={},I=!0
break
case"Map":a=new W,I=!0
break
case"Set":a=new B,I=!0
break
case"RegExp":a=new RegExp(e.source,"flags"in e?e.flags:$(e))
break
case"Error":switch(n=e.name){case"AggregateError":a=s("AggregateError")([])
break
case"EvalError":a=T()
break
case"RangeError":a=E()
break
case"ReferenceError":a=O()
break
case"SyntaxError":a=F()
break
case"TypeError":a=R()
break
case"URIError":a=M()
break
case"CompileError":a=j()
break
case"LinkError":a=L()
break
case"RuntimeError":a=N()
break
default:a=P()}I=!0
break
case"DOMException":a=new U(e.message,e.name),I=!0
break
case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":r=o[S],f(r)||ue(S),a=new r(ce(e.buffer,t),e.byteOffset,"DataView"===S?e.byteLength:e.length)
break
case"DOMQuad":try{a=new DOMQuad(ce(e.p1,t),ce(e.p2,t),ce(e.p3,t),ce(e.p4,t))}catch(D){se?a=se(e):ue(S)}break
case"FileList":if(r=o.DataTransfer,d(r)){for(i=new r,l=0,u=A(e);l<u;l++)i.items.add(ce(e[l],t))
a=i.files}else se?a=se(e):ue(S)
break
case"ImageData":try{a=new ImageData(ce(e.data,t),e.width,e.height,{colorSpace:e.colorSpace})}catch(D){se?a=se(e):ue(S)}break
default:if(se)a=se(e)
else switch(S){case"BigInt":a=w(e.valueOf())
break
case"Boolean":a=w(K(e))
break
case"Number":a=w(J(e))
break
case"String":a=w(Q(e))
break
case"Date":a=new C(Z(e))
break
case"ArrayBuffer":(r=o.DataView)||"function"==typeof e.slice||ue(S)
try{if("function"==typeof e.slice)a=e.slice(0)
else for(u=e.byteLength,a=new ArrayBuffer(u),y=new r(e),k=new r(a),l=0;l<u;l++)k.setUint8(l,y.getUint8(l))}catch(D){throw new U("ArrayBuffer is detached",te)}break
case"SharedArrayBuffer":a=e
break
case"Blob":try{a=e.slice(0,e.size,e.type)}catch(D){ue(S)}break
case"DOMPoint":case"DOMPointReadOnly":r=o[S]
try{a=r.fromPoint?r.fromPoint(e):new r(e.x,e.y,e.z,e.w)}catch(D){ue(S)}break
case"DOMRect":case"DOMRectReadOnly":r=o[S]
try{a=r.fromRect?r.fromRect(e):new r(e.x,e.y,e.width,e.height)}catch(D){ue(S)}break
case"DOMMatrix":case"DOMMatrixReadOnly":r=o[S]
try{a=r.fromMatrix?r.fromMatrix(e):new r(e)}catch(D){ue(S)}break
case"AudioData":case"VideoFrame":h(e.clone)||ue(S)
try{a=e.clone()}catch(D){le(S)}break
case"File":try{a=new File([e],e.name,e)}catch(D){ue(S)}break
case"CryptoKey":case"GPUCompilationMessage":case"GPUCompilationInfo":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":ue(S)
default:le(S)}}if(H(t,e,a),I)switch(S){case"Array":case"Object":for(c=X(e),l=0,u=A(c);l<u;l++)v=c[l],b(a,v,ce(e[v],t))
break
case"Map":e.forEach((function(e,r){H(a,ce(r,t),ce(e,t))}))
break
case"Set":e.forEach((function(e){V(a,ce(e,t))}))
break
case"Error":_(a,"message",ce(e.message,t)),g(e,"cause")&&_(a,"cause",ce(e.cause,t)),"AggregateError"==n&&(a.errors=ce(e.errors,t))
case"DOMException":x&&_(a,"stack",ce(e.stack,t))}return a},he=ae&&!u((function(){var e=new ArrayBuffer(8),t=ae(e,{transfer:[e]})
return 0!=e.byteLength||8!=t.byteLength})),de=function(e,t){if(!f(e))throw R("Transfer option cannot be converted to a sequence")
var r=[]
v(e,(function(e){Y(r,y(e))}))
var n,a,i,s,l,u,c=0,p=A(r)
if(he)for(s=ae(r,{transfer:r});c<p;)H(t,r[c],s[c++])
else for(;c<p;){if(n=r[c++],q(t,n))throw new U("Duplicate transferable",te)
switch(a=m(n)){case"ImageBitmap":i=o.OffscreenCanvas,d(i)||ue(a,re)
try{(u=new i(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),l=u.transferToImageBitmap()}catch(g){}break
case"AudioData":case"VideoFrame":h(n.clone)&&h(n.close)||ue(a,re)
try{l=n.clone(),n.close()}catch(g){}break
case"ArrayBuffer":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":ue(a,re)}if(void 0===l)throw new U("This object cannot be transferred: "+a,te)
H(t,n,l)}}
i({global:!0,enumerable:!0,sham:!he,forced:ie},{structuredClone:function(e){var t,r=k(arguments.length,1)>1?y(arguments[1]):void 0,n=r?r.transfer:void 0
return void 0!==n&&(t=new W,de(n,t)),ce(e,t)}})},(e,t,r)=>{"use strict"
var n=r(49)
e.exports=function(){var e=n(this),t=""
return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},(__unused_webpack_module,exports,__w_pdfjs_require__)=>{"use strict"
Object.defineProperty(exports,"__esModule",{value:!0}),exports.build=exports.RenderTask=exports.PDFWorker=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFDocumentLoadingTask=exports.PDFDataRangeTransport=exports.LoopbackPort=exports.DefaultStandardFontDataFactory=exports.DefaultCanvasFactory=exports.DefaultCMapReaderFactory=void 0,exports.getDocument=getDocument,exports.setPDFNetworkStreamFactory=setPDFNetworkStreamFactory,exports.version=void 0
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(145)),_util=__w_pdfjs_require__(1),_display_utils=__w_pdfjs_require__(147),_font_loader=__w_pdfjs_require__(149),_node_utils=__w_pdfjs_require__(150),_annotation_storage=__w_pdfjs_require__(151),_canvas=__w_pdfjs_require__(152),_worker_options=__w_pdfjs_require__(154),_is_node=__w_pdfjs_require__(3),_message_handler=__w_pdfjs_require__(155),_metadata=__w_pdfjs_require__(156),_optional_content_config=__w_pdfjs_require__(157),_transport_stream=__w_pdfjs_require__(158),_xfa_text=__w_pdfjs_require__(159)
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classPrivateMethodInitSpec(e,t){_checkPrivateRedeclaration(e,t),t.add(e)}function _classPrivateMethodGet(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return r}function _classPrivateFieldInitSpec(e,t,r){_checkPrivateRedeclaration(e,t),t.set(e,r)}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldSet(e,t,r){return _classApplyDescriptorSet(e,_classExtractFieldDescriptor(e,t,"set"),r),r}function _classApplyDescriptorSet(e,t,r){if(t.set)t.set.call(e,r)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=r}}function _classPrivateFieldGet(e,t){return _classApplyDescriptorGet(e,_classExtractFieldDescriptor(e,t,"get"))}function _classExtractFieldDescriptor(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}function _classApplyDescriptorGet(e,t){return t.get?t.get.call(e):t.value}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function asyncGeneratorStep(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){asyncGeneratorStep(i,n,a,o,s,"next",e)}function s(e){asyncGeneratorStep(i,n,a,o,s,"throw",e)}o(void 0)}))}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}var DEFAULT_RANGE_CHUNK_SIZE=65536,RENDERING_CANCELLED_TIMEOUT=100,DefaultCanvasFactory=_is_node.isNodeJS?_node_utils.NodeCanvasFactory:_display_utils.DOMCanvasFactory
exports.DefaultCanvasFactory=DefaultCanvasFactory
var DefaultCMapReaderFactory=_is_node.isNodeJS?_node_utils.NodeCMapReaderFactory:_display_utils.DOMCMapReaderFactory
exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory
var DefaultStandardFontDataFactory=_is_node.isNodeJS?_node_utils.NodeStandardFontDataFactory:_display_utils.DOMStandardFontDataFactory,createPDFNetworkStream
function setPDFNetworkStreamFactory(e){createPDFNetworkStream=e}function getDocument(e){var t,r=new PDFDocumentLoadingTask
if("string"==typeof e||e instanceof URL)t={url:e}
else if((0,_util.isArrayBuffer)(e))t={data:e}
else if(e instanceof PDFDataRangeTransport)t={range:e}
else{if("object"!==_typeof(e))throw new Error("Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object.")
if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url")
t=e}var n=Object.create(null),a=null,i=null
for(var o in t){var s=t[o]
switch(o){case"url":if("undefined"!=typeof window)try{n[o]=new URL(s,window.location).href
continue}catch(c){(0,_util.warn)('Cannot create valid URL: "'.concat(c,'".'))}else if("string"==typeof s||s instanceof URL){n[o]=s.toString()
continue}throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.")
case"range":a=s
continue
case"worker":i=s
continue
case"data":if(_is_node.isNodeJS&&"undefined"!=typeof Buffer&&s instanceof Buffer)n[o]=new Uint8Array(s)
else{if(s instanceof Uint8Array)break
if("string"==typeof s)n[o]=(0,_util.stringToBytes)(s)
else if("object"!==_typeof(s)||null===s||isNaN(s.length)){if(!(0,_util.isArrayBuffer)(s))throw new Error("Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property.")
n[o]=new Uint8Array(s)}else n[o]=new Uint8Array(s)}continue}n[o]=s}if(n.rangeChunkSize=n.rangeChunkSize||DEFAULT_RANGE_CHUNK_SIZE,n.CMapReaderFactory=n.CMapReaderFactory||DefaultCMapReaderFactory,n.StandardFontDataFactory=n.StandardFontDataFactory||DefaultStandardFontDataFactory,n.ignoreErrors=!0!==n.stopAtErrors,n.fontExtraProperties=!0===n.fontExtraProperties,n.pdfBug=!0===n.pdfBug,n.enableXfa=!0===n.enableXfa,("string"!=typeof n.docBaseUrl||(0,_display_utils.isDataScheme)(n.docBaseUrl))&&(n.docBaseUrl=null),Number.isInteger(n.maxImageSize)||(n.maxImageSize=-1),"boolean"!=typeof n.useWorkerFetch&&(n.useWorkerFetch=n.CMapReaderFactory===_display_utils.DOMCMapReaderFactory&&n.StandardFontDataFactory===_display_utils.DOMStandardFontDataFactory),"boolean"!=typeof n.isEvalSupported&&(n.isEvalSupported=!0),"boolean"!=typeof n.disableFontFace&&(n.disableFontFace=_is_node.isNodeJS),"boolean"!=typeof n.useSystemFonts&&(n.useSystemFonts=!_is_node.isNodeJS&&!n.disableFontFace),void 0===n.ownerDocument&&(n.ownerDocument=globalThis.document),"boolean"!=typeof n.disableRange&&(n.disableRange=!1),"boolean"!=typeof n.disableStream&&(n.disableStream=!1),"boolean"!=typeof n.disableAutoFetch&&(n.disableAutoFetch=!1),(0,_util.setVerbosityLevel)(n.verbosity),!i){var l={verbosity:n.verbosity,port:_worker_options.GlobalWorkerOptions.workerPort}
i=l.port?PDFWorker.fromPort(l):new PDFWorker(l),r._worker=i}var u=r.docId
return i.promise.then((function(){if(r.destroyed)throw new Error("Loading aborted")
var e=_fetchDocument(i,n,a,u),t=new Promise((function(e){var t
a?t=new _transport_stream.PDFDataTransportStream({length:n.length,initialData:n.initialData,progressiveDone:n.progressiveDone,contentDispositionFilename:n.contentDispositionFilename,disableRange:n.disableRange,disableStream:n.disableStream},a):n.data||(t=createPDFNetworkStream({url:n.url,length:n.length,httpHeaders:n.httpHeaders,withCredentials:n.withCredentials,rangeChunkSize:n.rangeChunkSize,disableRange:n.disableRange,disableStream:n.disableStream})),e(t)}))
return Promise.all([e,t]).then((function(e){var t=_slicedToArray(e,2),a=t[0],o=t[1]
if(r.destroyed)throw new Error("Loading aborted")
var s=new _message_handler.MessageHandler(u,a,i.port),l=new WorkerTransport(s,r,o,n)
r._transport=l,s.send("Ready",null)}))})).catch(r._capability.reject),r}function _fetchDocument(e,t,r,n){return _fetchDocument2.apply(this,arguments)}function _fetchDocument2(){return(_fetchDocument2=_asyncToGenerator(_regenerator.default.mark((function e(t,r,n,a){var i
return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.destroyed){e.next=2
break}throw new Error("Worker was destroyed")
case 2:return n&&(r.length=n.length,r.initialData=n.initialData,r.progressiveDone=n.progressiveDone,r.contentDispositionFilename=n.contentDispositionFilename),e.next=5,t.messageHandler.sendWithPromise("GetDocRequest",{docId:a,apiVersion:"2.13.216",source:{data:r.data,url:r.url,password:r.password,disableAutoFetch:r.disableAutoFetch,rangeChunkSize:r.rangeChunkSize,length:r.length},maxImageSize:r.maxImageSize,disableFontFace:r.disableFontFace,docBaseUrl:r.docBaseUrl,ignoreErrors:r.ignoreErrors,isEvalSupported:r.isEvalSupported,fontExtraProperties:r.fontExtraProperties,enableXfa:r.enableXfa,useSystemFonts:r.useSystemFonts,cMapUrl:r.useWorkerFetch?r.cMapUrl:null,standardFontDataUrl:r.useWorkerFetch?r.standardFontDataUrl:null})
case 5:if(i=e.sent,!t.destroyed){e.next=8
break}throw new Error("Worker was destroyed")
case 8:return e.abrupt("return",i)
case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory
var PDFDocumentLoadingTask=function(){function e(){_classCallCheck(this,e),this._capability=(0,_util.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d".concat(e.idCounters.doc++),this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}var t
return _createClass(e,[{key:"promise",get:function(){return this._capability.promise}},{key:"destroy",value:(t=_asyncToGenerator(_regenerator.default.mark((function e(){var t
return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.destroyed=!0,e.next=3,null===(t=this._transport)||void 0===t?void 0:t.destroy()
case 3:this._transport=null,this._worker&&(this._worker.destroy(),this._worker=null)
case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}],[{key:"idCounters",get:function(){return(0,_util.shadow)(this,"idCounters",{doc:0})}}]),e}()
exports.PDFDocumentLoadingTask=PDFDocumentLoadingTask
var PDFDataRangeTransport=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
_classCallCheck(this,e),this.length=t,this.initialData=r,this.progressiveDone=n,this.contentDispositionFilename=a,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._progressiveDoneListeners=[],this._readyCapability=(0,_util.createPromiseCapability)()}return _createClass(e,[{key:"addRangeListener",value:function(e){this._rangeListeners.push(e)}},{key:"addProgressListener",value:function(e){this._progressListeners.push(e)}},{key:"addProgressiveReadListener",value:function(e){this._progressiveReadListeners.push(e)}},{key:"addProgressiveDoneListener",value:function(e){this._progressiveDoneListeners.push(e)}},{key:"onDataRange",value:function(e,t){var r,n=_createForOfIteratorHelper(this._rangeListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e,t)}}catch(a){n.e(a)}finally{n.f()}}},{key:"onDataProgress",value:function(e,t){var r=this
this._readyCapability.promise.then((function(){var n,a=_createForOfIteratorHelper(r._progressListeners)
try{for(a.s();!(n=a.n()).done;){(0,n.value)(e,t)}}catch(i){a.e(i)}finally{a.f()}}))}},{key:"onDataProgressiveRead",value:function(e){var t=this
this._readyCapability.promise.then((function(){var r,n=_createForOfIteratorHelper(t._progressiveReadListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e)}}catch(a){n.e(a)}finally{n.f()}}))}},{key:"onDataProgressiveDone",value:function(){var e=this
this._readyCapability.promise.then((function(){var t,r=_createForOfIteratorHelper(e._progressiveDoneListeners)
try{for(r.s();!(t=r.n()).done;){(0,t.value)()}}catch(n){r.e(n)}finally{r.f()}}))}},{key:"transportReady",value:function(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function(e,t){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function(){}}]),e}()
exports.PDFDataRangeTransport=PDFDataRangeTransport
var PDFDocumentProxy=function(){function e(t,r){var n,a=this
_classCallCheck(this,e),this._pdfInfo=t,this._transport=r,Object.defineProperty(this,"fingerprint",{get:function(){return(0,_display_utils.deprecated)("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead."),this.fingerprints[0]}}),Object.defineProperty(this,"getStats",{value:(n=_asyncToGenerator(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,_display_utils.deprecated)("`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead."),e.abrupt("return",a.stats||{streamTypes:{},fontTypes:{}})
case 2:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})})}return _createClass(e,[{key:"annotationStorage",get:function(){return this._transport.annotationStorage}},{key:"numPages",get:function(){return this._pdfInfo.numPages}},{key:"fingerprints",get:function(){return this._pdfInfo.fingerprints}},{key:"stats",get:function(){return this._transport.stats}},{key:"isPureXfa",get:function(){return!!this._transport._htmlForXfa}},{key:"allXfaHtml",get:function(){return this._transport._htmlForXfa}},{key:"getPage",value:function(e){return this._transport.getPage(e)}},{key:"getPageIndex",value:function(e){return this._transport.getPageIndex(e)}},{key:"getDestinations",value:function(){return this._transport.getDestinations()}},{key:"getDestination",value:function(e){return this._transport.getDestination(e)}},{key:"getPageLabels",value:function(){return this._transport.getPageLabels()}},{key:"getPageLayout",value:function(){return this._transport.getPageLayout()}},{key:"getPageMode",value:function(){return this._transport.getPageMode()}},{key:"getViewerPreferences",value:function(){return this._transport.getViewerPreferences()}},{key:"getOpenAction",value:function(){return this._transport.getOpenAction()}},{key:"getAttachments",value:function(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function(){return this._transport.getJavaScript()}},{key:"getJSActions",value:function(){return this._transport.getDocJSActions()}},{key:"getOutline",value:function(){return this._transport.getOutline()}},{key:"getOptionalContentConfig",value:function(){return this._transport.getOptionalContentConfig()}},{key:"getPermissions",value:function(){return this._transport.getPermissions()}},{key:"getMetadata",value:function(){return this._transport.getMetadata()}},{key:"getMarkInfo",value:function(){return this._transport.getMarkInfo()}},{key:"getData",value:function(){return this._transport.getData()}},{key:"getDownloadInfo",value:function(){return this._transport.downloadInfoCapability.promise}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this._transport.startCleanup(e||this.isPureXfa)}},{key:"destroy",value:function(){return this.loadingTask.destroy()}},{key:"loadingParams",get:function(){return this._transport.loadingParams}},{key:"loadingTask",get:function(){return this._transport.loadingTask}},{key:"saveDocument",value:function(){return this._transport.annotationStorage.size<=0&&(0,_display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."),this._transport.saveDocument()}},{key:"getFieldObjects",value:function(){return this._transport.getFieldObjects()}},{key:"hasJSActions",value:function(){return this._transport.hasJSActions()}},{key:"getCalculationOrderIds",value:function(){return this._transport.getCalculationOrderIds()}}]),e}()
exports.PDFDocumentProxy=PDFDocumentProxy
var PDFPageProxy=function(){function e(t,r,n,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
_classCallCheck(this,e),this._pageIndex=t,this._pageInfo=r,this._ownerDocument=a,this._transport=n,this._stats=i?new _display_utils.StatTimer:null,this._pdfBug=i,this.commonObjs=n.commonObjs,this.objs=new PDFObjects,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this._intentStates=new Map,this._annotationPromises=new Map,this.destroyed=!1}var t
return _createClass(e,[{key:"pageNumber",get:function(){return this._pageIndex+1}},{key:"rotate",get:function(){return this._pageInfo.rotate}},{key:"ref",get:function(){return this._pageInfo.ref}},{key:"userUnit",get:function(){return this._pageInfo.userUnit}},{key:"view",get:function(){return this._pageInfo.view}},{key:"getViewport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scale,r=e.rotation,n=void 0===r?this.rotate:r,a=e.offsetX,i=void 0===a?0:a,o=e.offsetY,s=void 0===o?0:o,l=e.dontFlip,u=void 0!==l&&l
return new _display_utils.PageViewport({viewBox:this.view,scale:t,rotation:n,offsetX:i,offsetY:s,dontFlip:u})}},{key:"getAnnotations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intent,r=void 0===t?"display":t,n=this._transport.getRenderingIntent(r),a=this._annotationPromises.get(n.cacheKey)
return a||(a=this._transport.getAnnotations(this._pageIndex,n.renderingIntent),this._annotationPromises.set(n.cacheKey,a),a=a.then((function(e){var t,r=_createForOfIteratorHelper(e)
try{var n=function(){var e=t.value
void 0!==e.titleObj&&Object.defineProperty(e,"title",{get:function(){return(0,_display_utils.deprecated)("`title`-property on annotation, please use `titleObj` instead."),e.titleObj.str}}),void 0!==e.contentsObj&&Object.defineProperty(e,"contents",{get:function(){return(0,_display_utils.deprecated)("`contents`-property on annotation, please use `contentsObj` instead."),e.contentsObj.str}})}
for(r.s();!(t=r.n()).done;)n()}catch(a){r.e(a)}finally{r.f()}return e}))),a}},{key:"getJSActions",value:function(){return this._jsActionsPromise||(this._jsActionsPromise=this._transport.getPageJSActions(this._pageIndex))}},{key:"getXfa",value:(t=_asyncToGenerator(_regenerator.default.mark((function e(){var t
return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(null===(t=this._transport._htmlForXfa)||void 0===t?void 0:t.children[this._pageIndex])||null)
case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(e){var t,r,n,a=this,i=e.canvasContext,o=e.viewport,s=e.intent,l=void 0===s?"display":s,u=e.annotationMode,c=void 0===u?_util.AnnotationMode.ENABLE:u,h=e.transform,d=void 0===h?null:h,f=e.imageLayer,p=void 0===f?null:f,v=e.canvasFactory,y=void 0===v?null:v,m=e.background,g=void 0===m?null:m,b=e.optionalContentConfigPromise,_=void 0===b?null:b,A=e.annotationCanvasMap,k=void 0===A?null:A
void 0!==(null===(t=arguments[0])||void 0===t?void 0:t.renderInteractiveForms)&&((0,_display_utils.deprecated)("render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead."),!0===arguments[0].renderInteractiveForms&&c===_util.AnnotationMode.ENABLE&&(c=_util.AnnotationMode.ENABLE_FORMS)),void 0!==(null===(r=arguments[0])||void 0===r?void 0:r.includeAnnotationStorage)&&((0,_display_utils.deprecated)("render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead."),!0===arguments[0].includeAnnotationStorage&&c===_util.AnnotationMode.ENABLE&&(c=_util.AnnotationMode.ENABLE_STORAGE)),this._stats&&this._stats.time("Overall")
var S=this._transport.getRenderingIntent(l,c)
this.pendingCleanup=!1,_||(_=this._transport.getOptionalContentConfig())
var x=this._intentStates.get(S.cacheKey)
x||(x=Object.create(null),this._intentStates.set(S.cacheKey,x)),x.streamReaderCancelTimeout&&(clearTimeout(x.streamReaderCancelTimeout),x.streamReaderCancelTimeout=null)
var w=y||new DefaultCanvasFactory({ownerDocument:this._ownerDocument}),C=!!(S.renderingIntent&_util.RenderingIntentFlag.PRINT)
x.displayReadyCapability||(x.displayReadyCapability=(0,_util.createPromiseCapability)(),x.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList(S))
var P=function(e){x.renderTasks.delete(T),(a.cleanupAfterRender||C)&&(a.pendingCleanup=!0),a._tryCleanup(),e?(T.capability.reject(e),a._abortOperatorList({intentState:x,reason:e instanceof Error?e:new Error(e)})):T.capability.resolve(),a._stats&&(a._stats.timeEnd("Rendering"),a._stats.timeEnd("Overall"))},T=new InternalRenderTask({callback:P,params:{canvasContext:i,viewport:o,transform:d,imageLayer:p,background:g},objs:this.objs,commonObjs:this.commonObjs,annotationCanvasMap:k,operatorList:x.operatorList,pageIndex:this._pageIndex,canvasFactory:w,useRequestAnimationFrame:!C,pdfBug:this._pdfBug});((n=x).renderTasks||(n.renderTasks=new Set)).add(T)
var E=T.task
return Promise.all([x.displayReadyCapability.promise,_]).then((function(e){var t=_slicedToArray(e,2),r=t[0],n=t[1]
a.pendingCleanup?P():(a._stats&&a._stats.time("Rendering"),T.initializeGraphics({transparency:r,optionalContentConfig:n}),T.operatorListChanged())})).catch(P),E}},{key:"getOperatorList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intent,r=void 0===t?"display":t,n=e.annotationMode,a=void 0===n?_util.AnnotationMode.ENABLE:n
function i(){u.operatorList.lastChunk&&(u.opListReadCapability.resolve(u.operatorList),u.renderTasks.delete(o))}var o,s,l=this._transport.getRenderingIntent(r,a,!0),u=this._intentStates.get(l.cacheKey);(u||(u=Object.create(null),this._intentStates.set(l.cacheKey,u)),u.opListReadCapability)||((o=Object.create(null)).operatorListChanged=i,u.opListReadCapability=(0,_util.createPromiseCapability)(),((s=u).renderTasks||(s.renderTasks=new Set)).add(o),u.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList(l))
return u.opListReadCapability.promise}},{key:"streamTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disableCombineTextItems,r=void 0!==t&&t,n=e.includeMarkedContent,a=void 0!==n&&n,i=100
return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,combineTextItems:!0!==r,includeMarkedContent:!0===a},{highWaterMark:i,size:function(e){return e.items.length}})}},{key:"getTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(this._transport._htmlForXfa)return this.getXfa().then((function(e){return _xfa_text.XfaText.textContent(e)}))
var t=this.streamTextContent(e)
return new Promise((function(e,r){var n=t.getReader(),a={items:[],styles:Object.create(null)};(function t(){n.read().then((function(r){var n,i=r.value
r.done?e(a):(Object.assign(a.styles,i.styles),(n=a.items).push.apply(n,_toConsumableArray(i.items)),t())}),r)})()}))}},{key:"getStructTree",value:function(){return this._structTreePromise||(this._structTreePromise=this._transport.getStructTree(this._pageIndex))}},{key:"_destroy",value:function(){this.destroyed=!0
var e,t=[],r=_createForOfIteratorHelper(this._intentStates.values())
try{for(r.s();!(e=r.n()).done;){var n=e.value
if(this._abortOperatorList({intentState:n,reason:new Error("Page was destroyed."),force:!0}),!n.opListReadCapability){var a,i=_createForOfIteratorHelper(n.renderTasks)
try{for(i.s();!(a=i.n()).done;){var o=a.value
t.push(o.completed),o.cancel()}}catch(s){i.e(s)}finally{i.f()}}}}catch(s){r.e(s)}finally{r.f()}return this.objs.clear(),this._annotationPromises.clear(),this._jsActionsPromise=null,this._structTreePromise=null,this.pendingCleanup=!1,Promise.all(t)}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this.pendingCleanup=!0,this._tryCleanup(e)}},{key:"_tryCleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.pendingCleanup)return!1
var t,r=_createForOfIteratorHelper(this._intentStates.values())
try{for(r.s();!(t=r.n()).done;){var n=t.value,a=n.renderTasks,i=n.operatorList
if(a.size>0||!i.lastChunk)return!1}}catch(o){r.e(o)}finally{r.f()}return this._intentStates.clear(),this.objs.clear(),this._annotationPromises.clear(),this._jsActionsPromise=null,this._structTreePromise=null,e&&this._stats&&(this._stats=new _display_utils.StatTimer),this.pendingCleanup=!1,!0}},{key:"_startRenderPage",value:function(e,t){var r=this._intentStates.get(t)
r&&(this._stats&&this._stats.timeEnd("Page Request"),r.displayReadyCapability&&r.displayReadyCapability.resolve(e))}},{key:"_renderPageChunk",value:function(e,t){for(var r=0,n=e.length;r<n;r++)t.operatorList.fnArray.push(e.fnArray[r]),t.operatorList.argsArray.push(e.argsArray[r])
t.operatorList.lastChunk=e.lastChunk
var a,i=_createForOfIteratorHelper(t.renderTasks)
try{for(i.s();!(a=i.n()).done;){a.value.operatorListChanged()}}catch(o){i.e(o)}finally{i.f()}e.lastChunk&&this._tryCleanup()}},{key:"_pumpOperatorList",value:function(e){var t=this,r=e.renderingIntent,n=e.cacheKey,a=this._transport.messageHandler.sendWithStream("GetOperatorList",{pageIndex:this._pageIndex,intent:r,cacheKey:n,annotationStorage:r&_util.RenderingIntentFlag.ANNOTATIONS_STORAGE?this._transport.annotationStorage.serializable:null}).getReader(),i=this._intentStates.get(n)
i.streamReader=a;(function e(){a.read().then((function(r){var n=r.value
r.done?i.streamReader=null:t._transport.destroyed||(t._renderPageChunk(n,i),e())}),(function(e){if(i.streamReader=null,!t._transport.destroyed){if(i.operatorList){i.operatorList.lastChunk=!0
var r,n=_createForOfIteratorHelper(i.renderTasks)
try{for(n.s();!(r=n.n()).done;){r.value.operatorListChanged()}}catch(a){n.e(a)}finally{n.f()}t._tryCleanup()}if(i.displayReadyCapability)i.displayReadyCapability.reject(e)
else{if(!i.opListReadCapability)throw e
i.opListReadCapability.reject(e)}}}))})()}},{key:"_abortOperatorList",value:function(e){var t=this,r=e.intentState,n=e.reason,a=e.force,i=void 0!==a&&a
if(r.streamReader){if(!i){if(r.renderTasks.size>0)return
if(n instanceof _display_utils.RenderingCancelledException)return void(r.streamReaderCancelTimeout=setTimeout((function(){t._abortOperatorList({intentState:r,reason:n,force:!0}),r.streamReaderCancelTimeout=null}),RENDERING_CANCELLED_TIMEOUT))}if(r.streamReader.cancel(new _util.AbortException(n.message)).catch((function(){})),r.streamReader=null,!this._transport.destroyed){var o,s=_createForOfIteratorHelper(this._intentStates)
try{for(s.s();!(o=s.n()).done;){var l=_slicedToArray(o.value,2),u=l[0]
if(l[1]===r){this._intentStates.delete(u)
break}}}catch(c){s.e(c)}finally{s.f()}this.cleanup()}}}},{key:"stats",get:function(){return this._stats}}]),e}()
exports.PDFPageProxy=PDFPageProxy
var LoopbackPort=function(){function e(){_classCallCheck(this,e),this._listeners=[],this._deferred=Promise.resolve()}return _createClass(e,[{key:"postMessage",value:function(e,t){var r=this,n={data:t?structuredClone(e,t):structuredClone(e)}
this._deferred.then((function(){var e,t=_createForOfIteratorHelper(r._listeners)
try{for(t.s();!(e=t.n()).done;){e.value.call(r,n)}}catch(a){t.e(a)}finally{t.f()}}))}},{key:"addEventListener",value:function(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function(e,t){var r=this._listeners.indexOf(t)
this._listeners.splice(r,1)}},{key:"terminate",value:function(){this._listeners.length=0}}]),e}()
exports.LoopbackPort=LoopbackPort
var PDFWorkerUtil={isWorkerDisabled:!1,fallbackWorkerSrc:null,fakeWorkerId:0}
if(_is_node.isNodeJS&&"function"==typeof require)PDFWorkerUtil.isWorkerDisabled=!0,PDFWorkerUtil.fallbackWorkerSrc="./pdf.worker.js"
else if("object"===("undefined"==typeof document?"undefined":_typeof(document))){var _document,_document$currentScri,pdfjsFilePath=null===(_document=document)||void 0===_document||null===(_document$currentScri=_document.currentScript)||void 0===_document$currentScri?void 0:_document$currentScri.src
pdfjsFilePath&&(PDFWorkerUtil.fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}PDFWorkerUtil.createCDNWrapper=function(e){var t='importScripts("'.concat(e,'");')
return URL.createObjectURL(new Blob([t]))}
var PDFWorker=function(){function PDFWorker(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=void 0===t?null:t,n=e.port,a=void 0===n?null:n,i=e.verbosity,o=void 0===i?(0,_util.getVerbosityLevel)():i
if(_classCallCheck(this,PDFWorker),a&&PDFWorker._workerPorts.has(a))throw new Error("Cannot use more than one PDFWorker per port.")
if(this.name=r,this.destroyed=!1,this.verbosity=o,this._readyCapability=(0,_util.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,a)return PDFWorker._workerPorts.set(a,this),void this._initializeFromPort(a)
this._initialize()}return _createClass(PDFWorker,[{key:"promise",get:function(){return this._readyCapability.promise}},{key:"port",get:function(){return this._port}},{key:"messageHandler",get:function(){return this._messageHandler}},{key:"_initializeFromPort",value:function(e){this._port=e,this._messageHandler=new _message_handler.MessageHandler("main","worker",e),this._messageHandler.on("ready",(function(){})),this._readyCapability.resolve()}},{key:"_initialize",value:function(){var e=this
if("undefined"!=typeof Worker&&!PDFWorkerUtil.isWorkerDisabled&&!PDFWorker._mainThreadWorkerMessageHandler){var t=PDFWorker.workerSrc
try{(0,_util.isSameOrigin)(window.location.href,t)||(t=PDFWorkerUtil.createCDNWrapper(new URL(t,window.location).href))
var r=new Worker(t),n=new _message_handler.MessageHandler("main","worker",r),a=function(){r.removeEventListener("error",i),n.destroy(),r.terminate(),e.destroyed?e._readyCapability.reject(new Error("Worker was destroyed")):e._setupFakeWorker()},i=function(){e._webWorker||a()}
r.addEventListener("error",i),n.on("test",(function(t){r.removeEventListener("error",i),e.destroyed?a():t?(e._messageHandler=n,e._port=r,e._webWorker=r,e._readyCapability.resolve(),n.send("configure",{verbosity:e.verbosity})):(e._setupFakeWorker(),n.destroy(),r.terminate())})),n.on("ready",(function(t){if(r.removeEventListener("error",i),e.destroyed)a()
else try{o()}catch(n){e._setupFakeWorker()}}))
var o=function(){var e=new Uint8Array([255])
try{n.send("test",e,[e.buffer])}catch(t){(0,_util.warn)("Cannot use postMessage transfers."),e[0]=0,n.send("test",e)}}
return void o()}catch(s){(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function(){var e=this
PDFWorkerUtil.isWorkerDisabled||((0,_util.warn)("Setting up fake worker."),PDFWorkerUtil.isWorkerDisabled=!0),PDFWorker._setupFakeWorkerGlobal.then((function(t){if(e.destroyed)e._readyCapability.reject(new Error("Worker was destroyed"))
else{var r=new LoopbackPort
e._port=r
var n="fake".concat(PDFWorkerUtil.fakeWorkerId++),a=new _message_handler.MessageHandler(n+"_worker",n,r)
t.setup(a,r)
var i=new _message_handler.MessageHandler(n,n+"_worker",r)
e._messageHandler=i,e._readyCapability.resolve(),i.send("configure",{verbosity:e.verbosity})}})).catch((function(t){e._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(t.message,'".')))}))}},{key:"destroy",value:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),PDFWorker._workerPorts.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}}],[{key:"_workerPorts",get:function(){return(0,_util.shadow)(this,"_workerPorts",new WeakMap)}},{key:"fromPort",value:function(e){if(null==e||!e.port)throw new Error("PDFWorker.fromPort - invalid method signature.")
return this._workerPorts.has(e.port)?this._workerPorts.get(e.port):new PDFWorker(e)}},{key:"workerSrc",get:function(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc
if(null!==PDFWorkerUtil.fallbackWorkerSrc)return _is_node.isNodeJS||(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),PDFWorkerUtil.fallbackWorkerSrc
throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}},{key:"_mainThreadWorkerMessageHandler",get:function(){try{var e
return(null===(e=globalThis.pdfjsWorker)||void 0===e?void 0:e.WorkerMessageHandler)||null}catch(t){return null}}},{key:"_setupFakeWorkerGlobal",get:function get(){var _this11=this,loader=function(){var _ref15=_asyncToGenerator(_regenerator.default.mark((function _callee4(){var mainWorkerMessageHandler,worker
return _regenerator.default.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:if(mainWorkerMessageHandler=_this11._mainThreadWorkerMessageHandler,!mainWorkerMessageHandler){_context4.next=3
break}return _context4.abrupt("return",mainWorkerMessageHandler)
case 3:if(!_is_node.isNodeJS||"function"!=typeof require){_context4.next=6
break}return worker=eval("require")(_this11.workerSrc),_context4.abrupt("return",worker.WorkerMessageHandler)
case 6:return _context4.next=8,(0,_display_utils.loadScript)(_this11.workerSrc)
case 8:return _context4.abrupt("return",window.pdfjsWorker.WorkerMessageHandler)
case 9:case"end":return _context4.stop()}}),_callee4)})))
return function(){return _ref15.apply(this,arguments)}}()
return(0,_util.shadow)(this,"_setupFakeWorkerGlobal",loader())}}]),PDFWorker}()
exports.PDFWorker=PDFWorker,PDFWorker.getWorkerSrc=function(){return(0,_display_utils.deprecated)("`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead."),this.workerSrc}
var _docStats=new WeakMap,_pageCache=new WeakMap,_pagePromises=new WeakMap,_metadataPromise=new WeakMap,WorkerTransport=function(){function e(t,r,n,a){_classCallCheck(this,e),_classPrivateFieldInitSpec(this,_docStats,{writable:!0,value:null}),_classPrivateFieldInitSpec(this,_pageCache,{writable:!0,value:new Map}),_classPrivateFieldInitSpec(this,_pagePromises,{writable:!0,value:new Map}),_classPrivateFieldInitSpec(this,_metadataPromise,{writable:!0,value:null}),this.messageHandler=t,this.loadingTask=r,this.commonObjs=new PDFObjects,this.fontLoader=new _font_loader.FontLoader({docId:r.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this),ownerDocument:a.ownerDocument,styleElement:a.styleElement}),this._params=a,a.useWorkerFetch||(this.CMapReaderFactory=new a.CMapReaderFactory({baseUrl:a.cMapUrl,isCompressed:a.cMapPacked}),this.StandardFontDataFactory=new a.StandardFontDataFactory({baseUrl:a.standardFontDataUrl})),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=n,this._fullReader=null,this._lastProgress=null,this.downloadInfoCapability=(0,_util.createPromiseCapability)(),this.setupMessageHandler()}var t
return _createClass(e,[{key:"annotationStorage",get:function(){return(0,_util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage)}},{key:"stats",get:function(){return _classPrivateFieldGet(this,_docStats)}},{key:"getRenderingIntent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_util.AnnotationMode.ENABLE,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=_util.RenderingIntentFlag.DISPLAY,a=""
switch(e){case"any":n=_util.RenderingIntentFlag.ANY
break
case"display":break
case"print":n=_util.RenderingIntentFlag.PRINT
break
default:(0,_util.warn)("getRenderingIntent - invalid intent: ".concat(e))}switch(t){case _util.AnnotationMode.DISABLE:n+=_util.RenderingIntentFlag.ANNOTATIONS_DISABLE
break
case _util.AnnotationMode.ENABLE:break
case _util.AnnotationMode.ENABLE_FORMS:n+=_util.RenderingIntentFlag.ANNOTATIONS_FORMS
break
case _util.AnnotationMode.ENABLE_STORAGE:n+=_util.RenderingIntentFlag.ANNOTATIONS_STORAGE,a=this.annotationStorage.lastModified
break
default:(0,_util.warn)("getRenderingIntent - invalid annotationMode: ".concat(t))}return r&&(n+=_util.RenderingIntentFlag.OPLIST),{renderingIntent:n,cacheKey:"".concat(n,"_").concat(a)}}},{key:"destroy",value:function(){var e=this
if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=(0,_util.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var t,r=[],n=_createForOfIteratorHelper(_classPrivateFieldGet(this,_pageCache).values())
try{for(n.s();!(t=n.n()).done;){var a=t.value
r.push(a._destroy())}}catch(o){n.e(o)}finally{n.f()}_classPrivateFieldGet(this,_pageCache).clear(),_classPrivateFieldGet(this,_pagePromises).clear(),this.hasOwnProperty("annotationStorage")&&this.annotationStorage.resetModified()
var i=this.messageHandler.sendWithPromise("Terminate",null)
return r.push(i),Promise.all(r).then((function(){e.commonObjs.clear(),e.fontLoader.clear(),_classPrivateFieldSet(e,_metadataPromise,null),e._getFieldObjectsPromise=null,e._hasJSActionsPromise=null,e._networkStream&&e._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()}),this.destroyCapability.reject),this.destroyCapability.promise}},{key:"setupMessageHandler",value:function(){var e=this,t=this.messageHandler,r=this.loadingTask
t.on("GetReader",(function(t,r){(0,_util.assert)(e._networkStream,"GetReader - no `IPDFStream` instance available."),e._fullReader=e._networkStream.getFullReader(),e._fullReader.onProgress=function(t){e._lastProgress={loaded:t.loaded,total:t.total}},r.onPull=function(){e._fullReader.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){e._fullReader.cancel(t),r.ready.catch((function(t){if(!e.destroyed)throw t}))}})),t.on("ReaderHeadersReady",(function(t){var n=(0,_util.createPromiseCapability)(),a=e._fullReader
return a.headersReady.then((function(){if(!a.isStreamingSupported||!a.isRangeSupported){var t
if(e._lastProgress)null===(t=r.onProgress)||void 0===t||t.call(r,e._lastProgress)
a.onProgress=function(e){var t
null===(t=r.onProgress)||void 0===t||t.call(r,{loaded:e.loaded,total:e.total})}}n.resolve({isStreamingSupported:a.isStreamingSupported,isRangeSupported:a.isRangeSupported,contentLength:a.contentLength})}),n.reject),n.promise})),t.on("GetRangeReader",(function(t,r){(0,_util.assert)(e._networkStream,"GetRangeReader - no `IPDFStream` instance available.")
var n=e._networkStream.getRangeReader(t.begin,t.end)
n?(r.onPull=function(){n.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetRangeReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){n.cancel(t),r.ready.catch((function(t){if(!e.destroyed)throw t}))}):r.close()})),t.on("GetDoc",(function(t){var n=t.pdfInfo
e._numPages=n.numPages,e._htmlForXfa=n.htmlForXfa,delete n.htmlForXfa,r._capability.resolve(new PDFDocumentProxy(n,e))})),t.on("DocException",(function(e){var t
switch(e.name){case"PasswordException":t=new _util.PasswordException(e.message,e.code)
break
case"InvalidPDFException":t=new _util.InvalidPDFException(e.message)
break
case"MissingPDFException":t=new _util.MissingPDFException(e.message)
break
case"UnexpectedResponseException":t=new _util.UnexpectedResponseException(e.message,e.status)
break
case"UnknownErrorException":t=new _util.UnknownErrorException(e.message,e.details)
break
default:(0,_util.unreachable)("DocException - expected a valid Error.")}r._capability.reject(t)})),t.on("PasswordRequest",(function(t){if(e._passwordCapability=(0,_util.createPromiseCapability)(),r.onPassword){try{r.onPassword((function(t){t instanceof Error?e._passwordCapability.reject(t):e._passwordCapability.resolve({password:t})}),t.code)}catch(n){e._passwordCapability.reject(n)}}else e._passwordCapability.reject(new _util.PasswordException(t.message,t.code))
return e._passwordCapability.promise})),t.on("DataLoaded",(function(t){var n
null===(n=r.onProgress)||void 0===n||n.call(r,{loaded:t.length,total:t.length}),e.downloadInfoCapability.resolve(t)})),t.on("StartRenderPage",(function(t){e.destroyed||_classPrivateFieldGet(e,_pageCache).get(t.pageIndex)._startRenderPage(t.transparency,t.cacheKey)})),t.on("commonobj",(function(r){var n,a=_slicedToArray(r,3),i=a[0],o=a[1],s=a[2]
if(!e.destroyed&&!e.commonObjs.has(i))switch(o){case"Font":var l=e._params
if("error"in s){var u=s.error;(0,_util.warn)("Error during font loading: ".concat(u)),e.commonObjs.resolve(i,u)
break}var c=null
l.pdfBug&&null!==(n=globalThis.FontInspector)&&void 0!==n&&n.enabled&&(c={registerFont:function(e,t){globalThis.FontInspector.fontAdded(e,t)}})
var h=new _font_loader.FontFaceObject(s,{isEvalSupported:l.isEvalSupported,disableFontFace:l.disableFontFace,ignoreErrors:l.ignoreErrors,onUnsupportedFeature:e._onUnsupportedFeature.bind(e),fontRegistry:c})
e.fontLoader.bind(h).catch((function(e){return t.sendWithPromise("FontFallback",{id:i})})).finally((function(){!l.fontExtraProperties&&h.data&&(h.data=null),e.commonObjs.resolve(i,h)}))
break
case"FontPath":case"Image":e.commonObjs.resolve(i,s)
break
default:throw new Error("Got unknown common object type ".concat(o))}})),t.on("obj",(function(t){var r,n=_slicedToArray(t,4),a=n[0],i=n[1],o=n[2],s=n[3]
if(!e.destroyed){var l=_classPrivateFieldGet(e,_pageCache).get(i)
if(!l.objs.has(a))switch(o){case"Image":l.objs.resolve(a,s);(null==s||null===(r=s.data)||void 0===r?void 0:r.length)>8e6&&(l.cleanupAfterRender=!0)
break
case"Pattern":l.objs.resolve(a,s)
break
default:throw new Error("Got unknown object type ".concat(o))}}})),t.on("DocProgress",(function(t){var n
e.destroyed||null===(n=r.onProgress)||void 0===n||n.call(r,{loaded:t.loaded,total:t.total})})),t.on("DocStats",(function(t){e.destroyed||_classPrivateFieldSet(e,_docStats,Object.freeze({streamTypes:Object.freeze(t.streamTypes),fontTypes:Object.freeze(t.fontTypes)}))})),t.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this)),t.on("FetchBuiltInCMap",(function(t){return e.destroyed?Promise.reject(new Error("Worker was destroyed.")):e.CMapReaderFactory?e.CMapReaderFactory.fetch(t):Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))})),t.on("FetchStandardFontData",(function(t){return e.destroyed?Promise.reject(new Error("Worker was destroyed.")):e.StandardFontDataFactory?e.StandardFontDataFactory.fetch(t):Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."))}))}},{key:"_onUnsupportedFeature",value:function(e){var t,r,n=e.featureId
this.destroyed||null===(t=(r=this.loadingTask).onUnsupportedFeature)||void 0===t||t.call(r,n)}},{key:"getData",value:function(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function(e){var t=this
if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request."))
var r=e-1,n=_classPrivateFieldGet(this,_pagePromises).get(r)
if(n)return n
var a=this.messageHandler.sendWithPromise("GetPage",{pageIndex:r}).then((function(e){if(t.destroyed)throw new Error("Transport destroyed")
var n=new PDFPageProxy(r,e,t,t._params.ownerDocument,t._params.pdfBug)
return _classPrivateFieldGet(t,_pageCache).set(r,n),n}))
return _classPrivateFieldGet(this,_pagePromises).set(r,a),a}},{key:"getPageIndex",value:function(e){return"object"!==_typeof(e)||null===e||!Number.isInteger(e.num)||e.num<0||!Number.isInteger(e.gen)||e.gen<0?Promise.reject(new Error("Invalid pageIndex request.")):this.messageHandler.sendWithPromise("GetPageIndex",{num:e.num,gen:e.gen})}},{key:"getAnnotations",value:function(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}},{key:"saveDocument",value:function(){var e,t,r=this
return this.messageHandler.sendWithPromise("SaveDocument",{isPureXfa:!!this._htmlForXfa,numPages:this._numPages,annotationStorage:this.annotationStorage.serializable,filename:null!==(e=null===(t=this._fullReader)||void 0===t?void 0:t.filename)&&void 0!==e?e:null}).finally((function(){r.annotationStorage.resetModified()}))}},{key:"getFieldObjects",value:function(){return this._getFieldObjectsPromise||(this._getFieldObjectsPromise=this.messageHandler.sendWithPromise("GetFieldObjects",null))}},{key:"hasJSActions",value:function(){return this._hasJSActionsPromise||(this._hasJSActionsPromise=this.messageHandler.sendWithPromise("HasJSActions",null))}},{key:"getCalculationOrderIds",value:function(){return this.messageHandler.sendWithPromise("GetCalculationOrderIds",null)}},{key:"getDestinations",value:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function(e){return"string"!=typeof e?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}},{key:"getPageLabels",value:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageLayout",value:function(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}},{key:"getPageMode",value:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getViewerPreferences",value:function(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}},{key:"getOpenAction",value:function(){return this.messageHandler.sendWithPromise("GetOpenAction",null)}},{key:"getAttachments",value:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getDocJSActions",value:function(){return this.messageHandler.sendWithPromise("GetDocJSActions",null)}},{key:"getPageJSActions",value:function(e){return this.messageHandler.sendWithPromise("GetPageJSActions",{pageIndex:e})}},{key:"getStructTree",value:function(e){return this.messageHandler.sendWithPromise("GetStructTree",{pageIndex:e})}},{key:"getOutline",value:function(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getOptionalContentConfig",value:function(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then((function(e){return new _optional_content_config.OptionalContentConfig(e)}))}},{key:"getPermissions",value:function(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function(){var e=this
return _classPrivateFieldGet(this,_metadataPromise)||_classPrivateFieldSet(this,_metadataPromise,this.messageHandler.sendWithPromise("GetMetadata",null).then((function(t){var r,n,a,i
return{info:t[0],metadata:t[1]?new _metadata.Metadata(t[1]):null,contentDispositionFilename:null!==(r=null===(n=e._fullReader)||void 0===n?void 0:n.filename)&&void 0!==r?r:null,contentLength:null!==(a=null===(i=e._fullReader)||void 0===i?void 0:i.contentLength)&&void 0!==a?a:null}})))}},{key:"getMarkInfo",value:function(){return this.messageHandler.sendWithPromise("GetMarkInfo",null)}},{key:"startCleanup",value:(t=_asyncToGenerator(_regenerator.default.mark((function e(){var t,r,n,a,i=arguments
return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]&&i[0],e.next=3,this.messageHandler.sendWithPromise("Cleanup",null)
case 3:if(!this.destroyed){e.next=5
break}return e.abrupt("return")
case 5:r=_createForOfIteratorHelper(_classPrivateFieldGet(this,_pageCache).values()),e.prev=6,r.s()
case 8:if((n=r.n()).done){e.next=15
break}if((a=n.value).cleanup()){e.next=13
break}throw new Error("startCleanup: Page ".concat(a.pageNumber," is currently rendering."))
case 13:e.next=8
break
case 15:e.next=20
break
case 17:e.prev=17,e.t0=e.catch(6),r.e(e.t0)
case 20:return e.prev=20,r.f(),e.finish(20)
case 23:this.commonObjs.clear(),t||this.fontLoader.clear(),_classPrivateFieldSet(this,_metadataPromise,null),this._getFieldObjectsPromise=null,this._hasJSActionsPromise=null
case 28:case"end":return e.stop()}}),e,this,[[6,17,20,23]])}))),function(){return t.apply(this,arguments)})},{key:"loadingParams",get:function(){var e=this._params
return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:e.disableAutoFetch,enableXfa:e.enableXfa})}}]),e}(),_objs=new WeakMap,_ensureObj=new WeakSet,PDFObjects=function(){function e(){_classCallCheck(this,e),_classPrivateMethodInitSpec(this,_ensureObj),_classPrivateFieldInitSpec(this,_objs,{writable:!0,value:Object.create(null)})}return _createClass(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(t){var r=_classPrivateMethodGet(this,_ensureObj,_ensureObj2).call(this,e)
return r.capability.promise.then((function(){return t(r.data)})),null}var n=_classPrivateFieldGet(this,_objs)[e]
if(null==n||!n.capability.settled)throw new Error("Requesting object that isn't resolved yet ".concat(e,"."))
return n.data}},{key:"has",value:function(e){var t=_classPrivateFieldGet(this,_objs)[e]
return(null==t?void 0:t.capability.settled)||!1}},{key:"resolve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=_classPrivateMethodGet(this,_ensureObj,_ensureObj2).call(this,e)
r.data=t,r.capability.resolve()}},{key:"clear",value:function(){_classPrivateFieldSet(this,_objs,Object.create(null))}}]),e}()
function _ensureObj2(e){var t=_classPrivateFieldGet(this,_objs)[e]
return t||(_classPrivateFieldGet(this,_objs)[e]={capability:(0,_util.createPromiseCapability)(),data:null})}var RenderTask=function(){function e(t){_classCallCheck(this,e),this._internalRenderTask=t,this.onContinue=null}return _createClass(e,[{key:"promise",get:function(){return this._internalRenderTask.capability.promise}},{key:"cancel",value:function(){this._internalRenderTask.cancel()}}]),e}()
exports.RenderTask=RenderTask
var InternalRenderTask=function(){function e(t){var r=t.callback,n=t.params,a=t.objs,i=t.commonObjs,o=t.annotationCanvasMap,s=t.operatorList,l=t.pageIndex,u=t.canvasFactory,c=t.useRequestAnimationFrame,h=void 0!==c&&c,d=t.pdfBug,f=void 0!==d&&d
_classCallCheck(this,e),this.callback=r,this.params=n,this.objs=a,this.commonObjs=i,this.annotationCanvasMap=o,this.operatorListIdx=null,this.operatorList=s,this._pageIndex=l,this.canvasFactory=u,this._pdfBug=f,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=!0===h&&"undefined"!=typeof window,this.cancelled=!1,this.capability=(0,_util.createPromiseCapability)(),this.task=new RenderTask(this),this._cancelBound=this.cancel.bind(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=n.canvasContext.canvas}var t
return _createClass(e,[{key:"completed",get:function(){return this.capability.promise.catch((function(){}))}},{key:"initializeGraphics",value:function(t){var r,n=t.transparency,a=void 0!==n&&n,i=t.optionalContentConfig
if(!this.cancelled){if(this._canvas){if(e.canvasInUse.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.")
e.canvasInUse.add(this._canvas)}this._pdfBug&&null!==(r=globalThis.StepperManager)&&void 0!==r&&r.enabled&&(this.stepper=globalThis.StepperManager.create(this._pageIndex),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var o=this.params,s=o.canvasContext,l=o.viewport,u=o.transform,c=o.imageLayer,h=o.background
this.gfx=new _canvas.CanvasGraphics(s,this.commonObjs,this.objs,this.canvasFactory,c,i,this.annotationCanvasMap),this.gfx.beginDrawing({transform:u,viewport:l,transparency:a,background:h}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
this.running=!1,this.cancelled=!0,this.gfx&&this.gfx.endDrawing(),this._canvas&&e.canvasInUse.delete(this._canvas),this.callback(t||new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex+1),"canvas"))}},{key:"operatorListChanged",value:function(){this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()):this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function(){var e=this
this._useRequestAnimationFrame?window.requestAnimationFrame((function(){e._nextBound().catch(e._cancelBound)})):Promise.resolve().then(this._nextBound).catch(this._cancelBound)}},{key:"_next",value:(t=_asyncToGenerator(_regenerator.default.mark((function t(){return _regenerator.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.cancelled){t.next=2
break}return t.abrupt("return")
case 2:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&e.canvasInUse.delete(this._canvas),this.callback()))
case 4:case"end":return t.stop()}}),t,this)}))),function(){return t.apply(this,arguments)})}],[{key:"canvasInUse",get:function(){return(0,_util.shadow)(this,"canvasInUse",new WeakSet)}}]),e}(),version="2.13.216"
exports.version=version
var build="399a0ec60"
exports.build=build},(e,t,r)=>{"use strict"
e.exports=r(146)},(e,t,r)=>{"use strict"
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var a=function(e){var t,r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag"
function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(R){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),o=new E(n||[])
return i._invoke=function(e,t,r){var n=d
return function(a,i){if(n===p)throw new Error("Generator is already running")
if(n===v){if("throw"===a)throw i
return F()}for(r.method=a,r.arg=i;;){var o=r.delegate
if(o){var s=C(o,r)
if(s){if(s===y)continue
return s}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if(n===d)throw n=v,r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
n=p
var l=h(e,t,r)
if("normal"===l.type){if(n=r.done?v:f,l.arg===y)continue
return{value:l.arg,done:r.done}}"throw"===l.type&&(n=v,r.method="throw",r.arg=l.arg)}}}(e,r,o),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(R){return{type:"throw",arg:R}}}e.wrap=c
var d="suspendedStart",f="suspendedYield",p="executing",v="completed",y={}
function m(){}function g(){}function b(){}var _={}
u(_,o,(function(){return this}))
var A=Object.getPrototypeOf,k=A&&A(A(O([])))
k&&k!==r&&a.call(k,o)&&(_=k)
var S=b.prototype=m.prototype=Object.create(_)
function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(i,o,s,l){var u=h(e[i],e,o)
if("throw"!==u.type){var c=u.arg,d=c.value
return d&&"object"===n(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,l)}),(function(e){r("throw",e,s,l)})):t.resolve(d).then((function(e){c.value=e,s(c)}),(function(e){return r("throw",e,s,l)}))}l(u.arg)}var i
this._invoke=function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return i=i?i.then(a,a):a()}}function C(e,r){var n=e.iterator[r.method]
if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method))return y
r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=h(n,e.iterator,r.arg)
if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y
var i=a.arg
return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function O(e){if(e){var r=e[o]
if(r)return r.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r
return r.value=t,r.done=!0,r}
return i.next=i}}return{next:F}}function F(){return{value:t,done:!0}}return g.prototype=b,u(S,"constructor",b),u(b,"constructor",g),g.displayName=u(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,l,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},x(w.prototype),u(w.prototype,s,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise)
var o=new w(c(t,r,n,a),i)
return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(S),u(S,l,"Generator"),u(S,o,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[]
for(var r in e)t.push(r)
return t.reverse(),function r(){for(;t.length;){var n=t.pop()
if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var r=this
function n(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion
if("root"===o.tryLoc)return n("end")
if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc")
if(l&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r]
if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n
break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null)
var o=i?i.completion:{}
return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===e){var n=r.completion
if("throw"===n.type){var a=n.arg
T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}("object"===n(e=r.nmd(e))?e.exports:{})
try{regeneratorRuntime=a}catch(i){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}},(e,t,r)=>{"use strict"
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.StatTimer=t.RenderingCancelledException=t.PixelsPerInch=t.PageViewport=t.PDFDateString=t.DOMStandardFontDataFactory=t.DOMSVGFactory=t.DOMCanvasFactory=t.DOMCMapReaderFactory=void 0,t.deprecated=function(e){console.log("Deprecated API usage: "+e)},t.getFilenameFromUrl=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length)
return e.substring(e.lastIndexOf("/",n)+1,n)},t.getPdfFilenameFromUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"document.pdf"
if("string"!=typeof e)return t
if(O(e))return(0,s.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'),t
var r=/^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,n=/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,a=r.exec(e),i=n.exec(a[1])||n.exec(a[2])||n.exec(a[3])
if(i&&(i=i[0]).includes("%"))try{i=n.exec(decodeURIComponent(i))[0]}catch(o){}return i||t},t.getXfaPageViewport=function(e,t){var r=t.scale,n=void 0===r?1:r,a=t.rotation,i=void 0===a?0:a,o=e.attributes.style,s=o.width,l=o.height,u=[0,0,parseInt(s),parseInt(l)]
return new T({viewBox:u,scale:n,rotation:i})},t.isDataScheme=O,t.isPdfFile=function(e){return"string"==typeof e&&/\.pdf$/i.test(e)},t.isValidFetchUrl=M,t.loadScript=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return new Promise((function(r,n){var a=document.createElement("script")
a.src=e,a.onload=function(e){t&&a.remove(),r(e)},a.onerror=function(){n(new Error("Cannot load script at: ".concat(a.src)))},(document.head||document.documentElement).appendChild(a)}))}
var a,i=(a=r(145))&&a.__esModule?a:{default:a},o=r(148),s=r(1)
function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function h(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){c(i,n,a,o,s,"next",e)}function s(e){c(i,n,a,o,s,"throw",e)}o(void 0)}))}}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var a=y(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return v(this,r)}}function v(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=g((function e(){b(this,e)}))
t.PixelsPerInch=A,_(A,"CSS",96),_(A,"PDF",72),_(A,"PDF_TO_CSS_UNITS",A.CSS/A.PDF)
var k=function(e){d(r,e)
var t=p(r)
function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.ownerDocument,i=void 0===a?globalThis.document:a
return b(this,r),(e=t.call(this))._document=i,e}return g(r,[{key:"_createCanvas",value:function(e,t){var r=this._document.createElement("canvas")
return r.width=e,r.height=t,r}}]),r}(o.BaseCanvasFactory)
function S(e){return x.apply(this,arguments)}function x(){return x=h(i.default.mark((function e(t){var r,n,a=arguments
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.length>1&&void 0!==a[1]&&a[1],!M(t,document.baseURI)){e.next=21
break}return e.next=4,fetch(t)
case 4:if((n=e.sent).ok){e.next=7
break}throw new Error(n.statusText)
case 7:if(!r){e.next=15
break}return e.t1=Uint8Array,e.next=11,n.arrayBuffer()
case 11:e.t2=e.sent,e.t0=new e.t1(e.t2),e.next=20
break
case 15:return e.t3=s.stringToBytes,e.next=18,n.text()
case 18:e.t4=e.sent,e.t0=(0,e.t3)(e.t4)
case 20:return e.abrupt("return",e.t0)
case 21:return e.abrupt("return",new Promise((function(e,n){var a=new XMLHttpRequest
a.open("GET",t,!0),r&&(a.responseType="arraybuffer"),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var t
if(200===a.status||0===a.status)if(r&&a.response?t=new Uint8Array(a.response):!r&&a.responseText&&(t=(0,s.stringToBytes)(a.responseText)),t)return void e(t)
n(new Error(a.statusText))}},a.send(null)})))
case 22:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}t.DOMCanvasFactory=k
var w=function(e){d(r,e)
var t=p(r)
function r(){return b(this,r),t.apply(this,arguments)}return g(r,[{key:"_fetchData",value:function(e,t){return S(e,this.isCompressed).then((function(e){return{cMapData:e,compressionType:t}}))}}]),r}(o.BaseCMapReaderFactory)
t.DOMCMapReaderFactory=w
var C=function(e){d(r,e)
var t=p(r)
function r(){return b(this,r),t.apply(this,arguments)}return g(r,[{key:"_fetchData",value:function(e){return S(e,!0)}}]),r}(o.BaseStandardFontDataFactory)
t.DOMStandardFontDataFactory=C
var P=function(e){d(r,e)
var t=p(r)
function r(){return b(this,r),t.apply(this,arguments)}return g(r,[{key:"_createSVG",value:function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}}]),r}(o.BaseSVGFactory)
t.DOMSVGFactory=P
var T=function(){function e(t){var r=t.viewBox,n=t.scale,a=t.rotation,i=t.offsetX,o=void 0===i?0:i,s=t.offsetY,l=void 0===s?0:s,u=t.dontFlip,c=void 0!==u&&u
b(this,e),this.viewBox=r,this.scale=n,this.rotation=a,this.offsetX=o,this.offsetY=l
var h,d,f,p,v,y,m,g,_=(r[2]+r[0])/2,A=(r[3]+r[1])/2
switch((a%=360)<0&&(a+=360),a){case 180:h=-1,d=0,f=0,p=1
break
case 90:h=0,d=1,f=1,p=0
break
case 270:h=0,d=-1,f=-1,p=0
break
case 0:h=1,d=0,f=0,p=-1
break
default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")}c&&(f=-f,p=-p),0===h?(v=Math.abs(A-r[1])*n+o,y=Math.abs(_-r[0])*n+l,m=Math.abs(r[3]-r[1])*n,g=Math.abs(r[2]-r[0])*n):(v=Math.abs(_-r[0])*n+o,y=Math.abs(A-r[1])*n+l,m=Math.abs(r[2]-r[0])*n,g=Math.abs(r[3]-r[1])*n),this.transform=[h*n,d*n,f*n,p*n,v-h*n*_-f*n*A,y-d*n*_-p*n*A],this.width=m,this.height=g}return g(e,[{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.scale,n=void 0===r?this.scale:r,a=t.rotation,i=void 0===a?this.rotation:a,o=t.offsetX,s=void 0===o?this.offsetX:o,l=t.offsetY,u=void 0===l?this.offsetY:l,c=t.dontFlip,h=void 0!==c&&c
return new e({viewBox:this.viewBox.slice(),scale:n,rotation:i,offsetX:s,offsetY:u,dontFlip:h})}},{key:"convertToViewportPoint",value:function(e,t){return s.Util.applyTransform([e,t],this.transform)}},{key:"convertToViewportRectangle",value:function(e){var t=s.Util.applyTransform([e[0],e[1]],this.transform),r=s.Util.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],r[0],r[1]]}},{key:"convertToPdfPoint",value:function(e,t){return s.Util.applyInverseTransform([e,t],this.transform)}}]),e}()
t.PageViewport=T
var E=function(e){d(r,e)
var t=p(r)
function r(e,n){var a
return b(this,r),(a=t.call(this,e,"RenderingCancelledException")).type=n,a}return g(r)}(s.BaseException)
function O(e){for(var t=e.length,r=0;r<t&&""===e[r].trim();)r++
return"data:"===e.substring(r,r+5).toLowerCase()}t.RenderingCancelledException=E
var F,R=function(){function e(){b(this,e),this.started=Object.create(null),this.times=[]}return g(e,[{key:"time",value:function(e){e in this.started&&(0,s.warn)("Timer is already running for ".concat(e)),this.started[e]=Date.now()}},{key:"timeEnd",value:function(e){e in this.started||(0,s.warn)("Timer has not been started for ".concat(e)),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e]}},{key:"toString",value:function(){var e,t=[],r=0,n=l(this.times)
try{for(n.s();!(e=n.n()).done;){var a=e.value.name
a.length>r&&(r=a.length)}}catch(c){n.e(c)}finally{n.f()}var i,o=l(this.times)
try{for(o.s();!(i=o.n()).done;){var s=i.value,u=s.end-s.start
t.push("".concat(s.name.padEnd(r)," ").concat(u,"ms\n"))}}catch(c){o.e(c)}finally{o.f()}return t.join("")}}]),e}()
function M(e,t){try{var r=(t?new URL(e,t):new URL(e)).protocol
return"http:"===r||"https:"===r}catch(n){return!1}}t.StatTimer=R
var I=function(){function e(){b(this,e)}return g(e,null,[{key:"toDateObject",value:function(e){if(!e||"string"!=typeof e)return null
F||(F=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"))
var t=F.exec(e)
if(!t)return null
var r=parseInt(t[1],10),n=parseInt(t[2],10)
n=n>=1&&n<=12?n-1:0
var a=parseInt(t[3],10)
a=a>=1&&a<=31?a:1
var i=parseInt(t[4],10)
i=i>=0&&i<=23?i:0
var o=parseInt(t[5],10)
o=o>=0&&o<=59?o:0
var s=parseInt(t[6],10)
s=s>=0&&s<=59?s:0
var l=t[7]||"Z",u=parseInt(t[8],10)
u=u>=0&&u<=23?u:0
var c=parseInt(t[9],10)||0
return c=c>=0&&c<=59?c:0,"-"===l?(i+=u,o+=c):"+"===l&&(i-=u,o-=c),new Date(Date.UTC(r,n,a,i,o,s))}}]),e}()
t.PDFDateString=I},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.BaseStandardFontDataFactory=t.BaseSVGFactory=t.BaseCanvasFactory=t.BaseCMapReaderFactory=void 0
var n,a=(n=r(145))&&n.__esModule?n:{default:n},i=r(1)
function o(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function s(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function s(e){o(i,n,a,s,l,"next",e)}function l(e){o(i,n,a,s,l,"throw",e)}s(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var h=function(){function e(){l(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize BaseCanvasFactory.")}return c(e,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size")
var r=this._createCanvas(e,t)
return{canvas:r,context:r.getContext("2d")}}},{key:"reset",value:function(e,t,r){if(!e.canvas)throw new Error("Canvas is not specified")
if(t<=0||r<=0)throw new Error("Invalid canvas size")
e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function(e){if(!e.canvas)throw new Error("Canvas is not specified")
e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}},{key:"_createCanvas",value:function(e,t){(0,i.unreachable)("Abstract method `_createCanvas` called.")}}]),e}()
t.BaseCanvasFactory=h
var d=function(){function e(t){var r=t.baseUrl,n=void 0===r?null:r,a=t.isCompressed,o=void 0!==a&&a
l(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize BaseCMapReaderFactory."),this.baseUrl=n,this.isCompressed=o}var t
return c(e,[{key:"fetch",value:(t=s(a.default.mark((function e(t){var r,n,o,s=this
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,this.baseUrl){e.next=3
break}throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.')
case 3:if(r){e.next=5
break}throw new Error("CMap name must be specified.")
case 5:return n=this.baseUrl+r+(this.isCompressed?".bcmap":""),o=this.isCompressed?i.CMapCompressionType.BINARY:i.CMapCompressionType.NONE,e.abrupt("return",this._fetchData(n,o).catch((function(e){throw new Error("Unable to load ".concat(s.isCompressed?"binary ":"","CMap at: ").concat(n))})))
case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_fetchData",value:function(e,t){(0,i.unreachable)("Abstract method `_fetchData` called.")}}]),e}()
t.BaseCMapReaderFactory=d
var f=function(){function e(t){var r=t.baseUrl,n=void 0===r?null:r
l(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize BaseStandardFontDataFactory."),this.baseUrl=n}var t
return c(e,[{key:"fetch",value:(t=s(a.default.mark((function e(t){var r,n
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.filename,this.baseUrl){e.next=3
break}throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.')
case 3:if(r){e.next=5
break}throw new Error("Font filename must be specified.")
case 5:return n="".concat(this.baseUrl).concat(r),e.abrupt("return",this._fetchData(n).catch((function(e){throw new Error("Unable to load font data at: ".concat(n))})))
case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_fetchData",value:function(e){(0,i.unreachable)("Abstract method `_fetchData` called.")}}]),e}()
t.BaseStandardFontDataFactory=f
var p=function(){function e(){l(this,e),this.constructor===e&&(0,i.unreachable)("Cannot initialize BaseSVGFactory.")}return c(e,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid SVG dimensions")
var r=this._createSVG("svg:svg")
return r.setAttribute("version","1.1"),r.setAttribute("width","".concat(e,"px")),r.setAttribute("height","".concat(t,"px")),r.setAttribute("preserveAspectRatio","none"),r.setAttribute("viewBox","0 0 ".concat(e," ").concat(t)),r}},{key:"createElement",value:function(e){if("string"!=typeof e)throw new Error("Invalid SVG element type")
return this._createSVG(e)}},{key:"_createSVG",value:function(e){(0,i.unreachable)("Abstract method `_createSVG` called.")}}]),e}()
t.BaseSVGFactory=p},(e,t,r)=>{"use strict"
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0
var a,i=(a=r(145))&&a.__esModule?a:{default:a},o=r(1)
function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var a=c(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function h(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return f(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var m,g=function(){function e(t){var r=t.docId,n=t.onUnsupportedFeature,a=t.ownerDocument,i=void 0===a?globalThis.document:a
t.styleElement
p(this,e),this.constructor===e&&(0,o.unreachable)("Cannot initialize BaseFontLoader."),this.docId=r,this._onUnsupportedFeature=n,this._document=i,this.nativeFontFaces=[],this.styleElement=null}var t,r
return y(e,[{key:"addNativeFontFace",value:function(e){this.nativeFontFaces.push(e),this._document.fonts.add(e)}},{key:"insertRule",value:function(e){var t=this.styleElement
t||((t=this.styleElement=this._document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId),this._document.documentElement.getElementsByTagName("head")[0].appendChild(t))
var r=t.sheet
r.insertRule(e,r.cssRules.length)}},{key:"clear",value:function(){var e,t=d(this.nativeFontFaces)
try{for(t.s();!(e=t.n()).done;){var r=e.value
this._document.fonts.delete(r)}}catch(n){t.e(n)}finally{t.f()}this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}},{key:"bind",value:(t=i.default.mark((function e(t){var r,n,a=this
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
function o(e){h(i,n,a,o,s,"next",e)}function s(e){h(i,n,a,o,s,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"_queueLoadingCallback",value:function(e){(0,o.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"isFontLoadingAPISupported",get:function(){var e,t=!(null===(e=this._document)||void 0===e||!e.fonts)
return(0,o.shadow)(this,"isFontLoadingAPISupported",t)}},{key:"isSyncFontLoadingSupported",get:function(){(0,o.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function(){(0,o.unreachable)("Abstract method `_loadTestFont`.")}},{key:"_prepareFontLoadEvent",value:function(e,t,r){(0,o.unreachable)("Abstract method `_prepareFontLoadEvent`.")}}]),e}()
t.FontLoader=m,t.FontLoader=m=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(r,e)
var t=l(r)
function r(e){var n
return p(this,r),(n=t.call(this,e)).loadingContext={requests:[],nextRequestId:0},n.loadTestFontId=0,n}return y(r,[{key:"isSyncFontLoadingSupported",get:function(){var e=!1
if("undefined"==typeof navigator)e=!0
else{var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);(null==t?void 0:t[1])>=14&&(e=!0)}return(0,o.shadow)(this,"isSyncFontLoadingSupported",e)}},{key:"_queueLoadingCallback",value:function(e){var t=this.loadingContext,r={id:"pdfjs-font-loading-".concat(t.nextRequestId++),done:!1,complete:function(){for((0,o.assert)(!r.done,"completeRequest() cannot be called twice."),r.done=!0;t.requests.length>0&&t.requests[0].done;){var e=t.requests.shift()
setTimeout(e.callback,0)}},callback:e}
return t.requests.push(r),r}},{key:"_loadTestFont",get:function(){return(0,o.shadow)(this,"_loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))}},{key:"_prepareFontLoadEvent",value:function(e,t,r){function n(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function a(e,t,r,n){return e.substring(0,t)+n+e.substring(t+r)}var i,s,l=this._document.createElement("canvas")
l.width=1,l.height=1
var u=l.getContext("2d"),c=0
var h="lt".concat(Date.now()).concat(this.loadTestFontId++),f=this._loadTestFont,p=1482184792,v=n(f=a(f,976,h.length,h),16)
for(i=0,s=h.length-3;i<s;i+=4)v=v-p+n(h,i)|0
i<h.length&&(v=v-p+n(h+"XXX",i)|0),f=a(f,16,4,(0,o.string32)(v))
var y="url(data:font/opentype;base64,".concat(btoa(f),");"),m='@font-face {font-family:"'.concat(h,'";src:').concat(y,"}")
this.insertRule(m)
var g,b=[],_=d(t)
try{for(_.s();!(g=_.n()).done;){var A=g.value
b.push(A.loadedName)}}catch(P){_.e(P)}finally{_.f()}b.push(h)
var k=this._document.createElement("div")
k.style.visibility="hidden",k.style.width=k.style.height="10px",k.style.position="absolute",k.style.top=k.style.left="0px"
for(var S=0,x=b;S<x.length;S++){var w=x[S],C=this._document.createElement("span")
C.textContent="Hi",C.style.fontFamily=w,k.appendChild(C)}this._document.body.appendChild(k),function e(t,r){if(++c>30)return(0,o.warn)("Load test font never loaded."),void r()
u.font="30px "+t,u.fillText(".",0,20),u.getImageData(0,0,1,1).data[3]>0?r():setTimeout(e.bind(null,t,r))}(h,(function(){k.remove(),r.complete()}))}}]),r}(g)
var b=function(){function e(t,r){var n=r.isEvalSupported,a=void 0===n||n,i=r.disableFontFace,o=void 0!==i&&i,s=r.ignoreErrors,l=void 0!==s&&s,u=r.onUnsupportedFeature,c=r.fontRegistry,h=void 0===c?null:c
for(var d in p(this,e),this.compiledGlyphs=Object.create(null),t)this[d]=t[d]
this.isEvalSupported=!1!==a,this.disableFontFace=!0===o,this.ignoreErrors=!0===l,this._onUnsupportedFeature=u,this.fontRegistry=h}return y(e,[{key:"createNativeFontFace",value:function(){if(!this.data||this.disableFontFace)return null
var e
if(this.cssFontInfo){var t={weight:this.cssFontInfo.fontWeight}
this.cssFontInfo.italicAngle&&(t.style="oblique ".concat(this.cssFontInfo.italicAngle,"deg")),e=new FontFace(this.cssFontInfo.fontFamily,this.data,t)}else e=new FontFace(this.loadedName,this.data,{})
return this.fontRegistry&&this.fontRegistry.registerFont(this),e}},{key:"createFontFaceRule",value:function(){if(!this.data||this.disableFontFace)return null
var e,t=(0,o.bytesToString)(this.data),r="url(data:".concat(this.mimetype,";base64,").concat(btoa(t),");")
if(this.cssFontInfo){var n="font-weight: ".concat(this.cssFontInfo.fontWeight,";")
this.cssFontInfo.italicAngle&&(n+="font-style: oblique ".concat(this.cssFontInfo.italicAngle,"deg;")),e='@font-face {font-family:"'.concat(this.cssFontInfo.fontFamily,'";').concat(n,"src:").concat(r,"}")}else e='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(r,"}")
return this.fontRegistry&&this.fontRegistry.registerFont(this,r),e}},{key:"getPathGenerator",value:function(e,t){if(void 0!==this.compiledGlyphs[t])return this.compiledGlyphs[t]
var r
try{r=e.get(this.loadedName+"_path_"+t)}catch(u){if(!this.ignoreErrors)throw u
return this._onUnsupportedFeature({featureId:o.UNSUPPORTED_FEATURES.errorFontGetPath}),(0,o.warn)('getPathGenerator - ignoring character: "'.concat(u,'".')),this.compiledGlyphs[t]=function(e,t){}}if(this.isEvalSupported&&o.IsEvalSupportedCached.value){var n,a=[],i=d(r)
try{for(i.s();!(n=i.n()).done;){var s=n.value,l=void 0!==s.args?s.args.join(","):""
a.push("c.",s.cmd,"(",l,");\n")}}catch(c){i.e(c)}finally{i.f()}return this.compiledGlyphs[t]=new Function("c","size",a.join(""))}return this.compiledGlyphs[t]=function(e,t){var n,a=d(r)
try{for(a.s();!(n=a.n()).done;){var i=n.value
"scale"===i.cmd&&(i.args=[t,-t]),e[i.cmd].apply(e,i.args)}}catch(c){a.e(c)}finally{a.f()}}}}]),e}()
t.FontFaceObject=b},(e,t,r)=>{"use strict"
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.NodeStandardFontDataFactory=t.NodeCanvasFactory=t.NodeCMapReaderFactory=void 0
var a=r(148),i=r(3),o=r(1)
function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var a=h(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var v=f((function e(){p(this,e),(0,o.unreachable)("Not implemented: NodeCanvasFactory")}))
t.NodeCanvasFactory=v
var y=f((function e(){p(this,e),(0,o.unreachable)("Not implemented: NodeCMapReaderFactory")}))
t.NodeCMapReaderFactory=y
var m=f((function e(){p(this,e),(0,o.unreachable)("Not implemented: NodeStandardFontDataFactory")}))
if(t.NodeStandardFontDataFactory=m,i.isNodeJS){var g=function(e){return new Promise((function(t,r){require("fs").readFile(e,(function(e,n){!e&&n?t(new Uint8Array(n)):r(new Error(e))}))}))}
t.NodeCanvasFactory=v=function(e){s(r,e)
var t=u(r)
function r(){return p(this,r),t.apply(this,arguments)}return f(r,[{key:"_createCanvas",value:function(e,t){return require("canvas").createCanvas(e,t)}}]),r}(a.BaseCanvasFactory),t.NodeCMapReaderFactory=y=function(e){s(r,e)
var t=u(r)
function r(){return p(this,r),t.apply(this,arguments)}return f(r,[{key:"_fetchData",value:function(e,t){return g(e).then((function(e){return{cMapData:e,compressionType:t}}))}}]),r}(a.BaseCMapReaderFactory),t.NodeStandardFontDataFactory=m=function(e){s(r,e)
var t=u(r)
function r(){return p(this,r),t.apply(this,arguments)}return f(r,[{key:"_fetchData",value:function(e){return g(e)}}]),r}(a.BaseStandardFontDataFactory)}},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationStorage=void 0
var n=r(1)
function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._storage=new Map,this._timeStamp=Date.now(),this._modified=!1,this.onSetModified=null,this.onResetModified=null}var t,r,i
return t=e,(r=[{key:"getValue",value:function(e,t){var r=this._storage.get(e)
return void 0===r?t:Object.assign(t,r)}},{key:"setValue",value:function(e,t){var r=this._storage.get(e),n=!1
if(void 0!==r)for(var i=0,o=Object.entries(t);i<o.length;i++){var s=a(o[i],2),l=s[0],u=s[1]
r[l]!==u&&(n=!0,r[l]=u)}else n=!0,this._storage.set(e,t)
n&&(this._timeStamp=Date.now(),this._setModified())}},{key:"getAll",value:function(){return this._storage.size>0?(0,n.objectFromMap)(this._storage):null}},{key:"size",get:function(){return this._storage.size}},{key:"_setModified",value:function(){this._modified||(this._modified=!0,"function"==typeof this.onSetModified&&this.onSetModified())}},{key:"resetModified",value:function(){this._modified&&(this._modified=!1,"function"==typeof this.onResetModified&&this.onResetModified())}},{key:"serializable",get:function(){return this._storage.size>0?this._storage:null}},{key:"lastModified",get:function(){return this._timeStamp.toString()}}])&&o(t.prototype,r),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()
t.AnnotationStorage=s},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0
var n=r(1),a=r(153),i=r(147)
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=d(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return f(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}var p=4096,v=16
function y(e){if(e._transformStack&&(e._transformStack=[]),!e.mozCurrentTransform){e._originalSave=e.save,e._originalRestore=e.restore,e._originalRotate=e.rotate,e._originalScale=e.scale,e._originalTranslate=e.translate,e._originalTransform=e.transform,e._originalSetTransform=e.setTransform,e._originalResetTransform=e.resetTransform,e._transformMatrix=e._transformMatrix||[1,0,0,1,0,0],e._transformStack=[]
try{var t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"lineWidth")
e._setLineWidth=t.set,e._getLineWidth=t.get,Object.defineProperty(e,"lineWidth",{set:function(e){this._setLineWidth(1.000001*e)},get:function(){return this._getLineWidth()}})}catch(r){}Object.defineProperty(e,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(e,"mozCurrentTransformInverse",{get:function(){var e=h(this._transformMatrix,6),t=e[0],r=e[1],n=e[2],a=e[3],i=e[4],o=e[5],s=t*a-r*n,l=r*n-t*a
return[a/s,r/l,n/l,t/s,(a*i-n*o)/l,(r*i-t*o)/s]}}),e.save=function(){var e=this._transformMatrix
this._transformStack.push(e),this._transformMatrix=e.slice(0,6),this._originalSave()},e.restore=function(){0===this._transformStack.length&&(0,n.warn)("Tried to restore a ctx when the stack was already empty.")
var e=this._transformStack.pop()
e&&(this._transformMatrix=e,this._originalRestore())},e.translate=function(e,t){var r=this._transformMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5],this._originalTranslate(e,t)},e.scale=function(e,t){var r=this._transformMatrix
r[0]*=e,r[1]*=e,r[2]*=t,r[3]*=t,this._originalScale(e,t)},e.transform=function(t,r,n,a,i,o){var s=this._transformMatrix
this._transformMatrix=[s[0]*t+s[2]*r,s[1]*t+s[3]*r,s[0]*n+s[2]*a,s[1]*n+s[3]*a,s[0]*i+s[2]*o+s[4],s[1]*i+s[3]*o+s[5]],e._originalTransform(t,r,n,a,i,o)},e.setTransform=function(t,r,n,a,i,o){this._transformMatrix=[t,r,n,a,i,o],e._originalSetTransform(t,r,n,a,i,o)},e.resetTransform=function(){this._transformMatrix=[1,0,0,1,0,0],e._originalResetTransform()},e.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this._transformMatrix
this._transformMatrix=[n[0]*t+n[2]*r,n[1]*t+n[3]*r,n[0]*-r+n[2]*t,n[1]*-r+n[3]*t,n[4],n[5]],this._originalRotate(e)}}}var m=function(){function e(t){l(this,e),this.canvasFactory=t,this.cache=Object.create(null)}return c(e,[{key:"getCanvas",value:function(e,t,r,n){var a
return void 0!==this.cache[e]?(a=this.cache[e],this.canvasFactory.reset(a,t,r),a.context.setTransform(1,0,0,1,0,0)):(a=this.canvasFactory.create(t,r),this.cache[e]=a),n&&y(a.context),a}},{key:"clear",value:function(){for(var e in this.cache){var t=this.cache[e]
this.canvasFactory.destroy(t),delete this.cache[e]}}}]),e}()
var g=function(){function e(t,r){l(this,e),this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=n.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=n.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.transferMaps=null,this.startNewPathAndClipBox([0,0,t,r])}return c(e,[{key:"clone",value:function(){var e=Object.create(this)
return e.clipBox=this.clipBox.slice(),e}},{key:"setCurrentPoint",value:function(e,t){this.x=e,this.y=t}},{key:"updatePathMinMax",value:function(e,t,r){var a=h(n.Util.applyTransform([t,r],e),2)
t=a[0],r=a[1],this.minX=Math.min(this.minX,t),this.minY=Math.min(this.minY,r),this.maxX=Math.max(this.maxX,t),this.maxY=Math.max(this.maxY,r)}},{key:"updateCurvePathMinMax",value:function(e,t,r,a,i,o,s,l,u){var c=n.Util.bezierBoundingBox(t,r,a,i,o,s,l,u)
this.updatePathMinMax(e,c[0],c[1]),this.updatePathMinMax(e,c[2],c[3])}},{key:"getPathBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.PathType.FILL,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[this.minX,this.minY,this.maxX,this.maxY]
if(e===a.PathType.STROKE){t||(0,n.unreachable)("Stroke bounding box must include transform.")
var i=n.Util.singularValueDecompose2dScale(t),o=i[0]*this.lineWidth/2,s=i[1]*this.lineWidth/2
r[0]-=o,r[1]-=s,r[2]+=o,r[3]+=s}return r}},{key:"updateClipFromPath",value:function(){var e=n.Util.intersect(this.clipBox,this.getPathBoundingBox())
this.startNewPathAndClipBox(e||[0,0,0,0])}},{key:"startNewPathAndClipBox",value:function(e){this.clipBox=e,this.minX=1/0,this.minY=1/0,this.maxX=0,this.maxY=0}},{key:"getClippedPathBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.PathType.FILL,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return n.Util.intersect(this.clipBox,this.getPathBoundingBox(e,t))}}]),e}()
function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if("undefined"!=typeof ImageData&&t instanceof ImageData)e.putImageData(t,0,0)
else{var a,i,o,s,l,u,c,h,d,f=t.height,p=t.width,y=f%v,m=(f-y)/v,g=0===y?m:m+1,b=e.createImageData(p,v),_=0,A=t.data,k=b.data
if(r)switch(r.length){case 1:u=r[0],c=r[0],h=r[0],d=r[0]
break
case 4:u=r[0],c=r[1],h=r[2],d=r[3]}if(t.kind===n.ImageKind.GRAYSCALE_1BPP){var S=A.byteLength,x=new Uint32Array(k.buffer,0,k.byteLength>>2),w=x.length,C=p+7>>3,P=4294967295,T=n.IsLittleEndianCached.value?4278190080:255
if(d&&255===d[0]&&0===d[255]){var E=[T,P]
P=E[0],T=E[1]}for(i=0;i<g;i++){for(s=i<m?v:y,a=0,o=0;o<s;o++){for(var O=S-_,F=0,R=O>C?p:8*O-7,M=-8&R,I=0,D=0;F<M;F+=8)D=A[_++],x[a++]=128&D?P:T,x[a++]=64&D?P:T,x[a++]=32&D?P:T,x[a++]=16&D?P:T,x[a++]=8&D?P:T,x[a++]=4&D?P:T,x[a++]=2&D?P:T,x[a++]=1&D?P:T
for(;F<R;F++)0===I&&(D=A[_++],I=128),x[a++]=D&I?P:T,I>>=1}for(;a<w;)x[a++]=0
e.putImageData(b,0,i*v)}}else if(t.kind===n.ImageKind.RGBA_32BPP){var j=!!(u||c||h)
for(o=0,l=p*v*4,i=0;i<m;i++){if(k.set(A.subarray(_,_+l)),_+=l,j)for(var L=0;L<l;L+=4)u&&(k[L+0]=u[k[L+0]]),c&&(k[L+1]=c[k[L+1]]),h&&(k[L+2]=h[k[L+2]])
e.putImageData(b,0,o),o+=v}if(i<g){if(l=p*y*4,k.set(A.subarray(_,_+l)),j)for(var N=0;N<l;N+=4)u&&(k[N+0]=u[k[N+0]]),c&&(k[N+1]=c[k[N+1]]),h&&(k[N+2]=h[k[N+2]])
e.putImageData(b,0,o)}}else{if(t.kind!==n.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(t.kind))
var U=!!(u||c||h)
for(l=p*(s=v),i=0;i<g;i++){for(i>=m&&(l=p*(s=y)),a=0,o=l;o--;)k[a++]=A[_++],k[a++]=A[_++],k[a++]=A[_++],k[a++]=255
if(U)for(var B=0;B<a;B+=4)u&&(k[B+0]=u[k[B+0]]),c&&(k[B+1]=c[k[B+1]]),h&&(k[B+2]=h[k[B+2]])
e.putImageData(b,0,i*v)}}}}function _(e,t){for(var r=t.height,n=t.width,a=r%v,i=(r-a)/v,o=0===a?i:i+1,s=e.createImageData(n,v),l=0,u=t.data,c=s.data,h=0;h<o;h++){for(var d=h<i?v:a,f=3,p=0;p<d;p++)for(var y=void 0,m=0,g=0;g<n;g++)m||(y=u[l++],m=128),c[f]=y&m?0:255,f+=4,m>>=1
e.putImageData(s,0,h*v)}}function A(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,a=r.length;n<a;n++){var i=r[n]
void 0!==e[i]&&(t[i]=e[i])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function k(e){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function S(e,t,r,n){for(var a=e.length,i=3;i<a;i+=4){var o=e[i]
if(0===o)e[i-3]=t,e[i-2]=r,e[i-1]=n
else if(o<255){var s=255-o
e[i-3]=e[i-3]*o+t*s>>8,e[i-2]=e[i-2]*o+r*s>>8,e[i-1]=e[i-1]*o+n*s>>8}}}function x(e,t,r){for(var n=e.length,a=3;a<n;a+=4){var i=r?r[e[a]]:e[a]
t[a]=t[a]*i*.00392156862745098|0}}function w(e,t,r){for(var n=e.length,a=3;a<n;a+=4){var i=77*e[a-3]+152*e[a-2]+28*e[a-1]
t[a]=r?t[a]*r[i>>8]>>8:t[a]*i>>16}}function C(e,t,r,n){var a=n[0],i=n[1],o=n[2]-a,s=n[3]-i
0!==o&&0!==s&&(function(e,t,r,n,a,i,o,s,l,u,c){var h,d=!!i,f=d?i[0]:0,p=d?i[1]:0,v=d?i[2]:0
h="Luminosity"===a?w:x
for(var y=Math.min(n,Math.ceil(1048576/r)),m=0;m<n;m+=y){var g=Math.min(y,n-m),b=e.getImageData(s-u,m+(l-c),r,g),_=t.getImageData(s,m+l,r,g)
d&&S(b.data,f,p,v),h(b.data,_.data,o),t.putImageData(_,s,m+l)}}(t.context,r,o,s,t.subtype,t.backdrop,t.transferMap,a,i,t.offsetX,t.offsetY),e.save(),e.globalAlpha=1,e.globalCompositeOperation="source-over",e.setTransform(1,0,0,1,0,0),e.drawImage(r.canvas,0,0),e.restore())}function P(e,t){var r=n.Util.singularValueDecompose2dScale(e)
r[0]=Math.fround(r[0]),r[1]=Math.fround(r[1])
var a=Math.fround((globalThis.devicePixelRatio||1)*i.PixelsPerInch.PDF_TO_CSS_UNITS)
return void 0!==t?t:r[0]<=a||r[1]<=a}var T=["butt","round","square"],E=["miter","round","bevel"],O={},F={},R=function(){function e(t,r,n,a,i,o,s){l(this,e),this.ctx=t,this.current=new g(this.ctx.canvas.width,this.ctx.canvas.height),this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=r,this.objs=n,this.canvasFactory=a,this.imageLayer=i,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.suspendedCtx=null,this.contentVisible=!0,this.markedContentStack=[],this.optionalContentConfig=o,this.cachedCanvases=new m(this.canvasFactory),this.cachedPatterns=new Map,this.annotationCanvasMap=s,this.viewportScale=1,this.outputScaleX=1,this.outputScaleY=1
t&&y(t),this._cachedGetSinglePixelWidth=null}return c(e,[{key:"beginDrawing",value:function(e){var t=e.transform,r=e.viewport,n=e.transparency,a=void 0!==n&&n,i=e.background,o=void 0===i?null:i,s=this.ctx.canvas.width,l=this.ctx.canvas.height
if(this.ctx.save(),this.ctx.fillStyle=o||"rgb(255, 255, 255)",this.ctx.fillRect(0,0,s,l),this.ctx.restore(),a){var u=this.cachedCanvases.getCanvas("transparent",s,l,!0)
this.compositeCtx=this.ctx,this.transparentCanvas=u.canvas,this.ctx=u.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),k(this.ctx),t&&(this.ctx.transform.apply(this.ctx,t),this.outputScaleX=t[0],this.outputScaleY=t[0]),this.ctx.transform.apply(this.ctx,r.transform),this.viewportScale=r.scale,this.baseTransform=this.ctx.mozCurrentTransform.slice(),this._combinedScaleFactor=Math.hypot(this.baseTransform[0],this.baseTransform[2]),this.imageLayer&&this.imageLayer.beginLayout()}},{key:"executeOperatorList",value:function(e,t,r,a){var i=e.argsArray,o=e.fnArray,l=t||0,u=i.length
if(u===l)return l
for(var c,h=u-l>10&&"function"==typeof r,d=h?Date.now()+15:0,f=0,p=this.commonObjs,v=this.objs;;){if(void 0!==a&&l===a.nextBreakPoint)return a.breakIt(l,r),l
if((c=o[l])!==n.OPS.dependency)this[c].apply(this,i[l])
else{var y,m=s(i[l])
try{for(m.s();!(y=m.n()).done;){var g=y.value,b=g.startsWith("g_")?p:v
if(!b.has(g))return b.get(g,r),l}}catch(_){m.e(_)}finally{m.f()}}if(++l===u)return l
if(h&&++f>10){if(Date.now()>d)return r(),l
f=0}}}},{key:"endDrawing",value:function(){for(;this.stateStack.length||this.inSMaskMode;)this.restore()
this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),this.cachedPatterns.clear(),this.imageLayer&&this.imageLayer.endLayout()}},{key:"_scaleImage",value:function(e,t){for(var r,n,a=e.width,i=e.height,o=Math.max(Math.hypot(t[0],t[1]),1),s=Math.max(Math.hypot(t[2],t[3]),1),l=a,u=i,c="prescale1";o>2&&l>1||s>2&&u>1;){var h=l,d=u
o>2&&l>1&&(o/=l/(h=Math.ceil(l/2))),s>2&&u>1&&(s/=u/(d=Math.ceil(u/2))),(n=(r=this.cachedCanvases.getCanvas(c,h,d)).context).clearRect(0,0,h,d),n.drawImage(e,0,0,l,u,0,0,h,d),e=r.canvas,l=h,u=d,c="prescale1"===c?"prescale2":"prescale1"}return{img:e,paintWidth:l,paintHeight:u}}},{key:"_createMaskCanvas",value:function(e){var t=this.ctx,r=e.width,i=e.height,o=this.current.fillColor,s=this.current.patternFill,l=this.cachedCanvases.getCanvas("maskCanvas",r,i)
_(l.context,e)
var u=t.mozCurrentTransform,c=n.Util.transform(u,[1/r,0,0,-1/i,0,0])
c=n.Util.transform(c,[1,0,0,1,0,-i])
var h=n.Util.applyTransform([0,0],c),d=n.Util.applyTransform([r,i],c),f=n.Util.normalizeRect([h[0],h[1],d[0],d[1]]),p=Math.ceil(f[2]-f[0]),v=Math.ceil(f[3]-f[1]),y=this.cachedCanvases.getCanvas("fillCanvas",p,v,!0),m=y.context,g=Math.min(h[0],d[0]),b=Math.min(h[1],d[1])
m.translate(-g,-b),m.transform.apply(m,c)
var A=this._scaleImage(l.canvas,m.mozCurrentTransformInverse)
m.imageSmoothingEnabled=P(m.mozCurrentTransform,e.interpolate),m.drawImage(A.img,0,0,A.img.width,A.img.height,0,0,r,i),m.globalCompositeOperation="source-in"
var k=n.Util.transform(m.mozCurrentTransformInverse,[1,0,0,1,-g,-b])
return m.fillStyle=s?o.getPattern(t,this,k,a.PathType.FILL):o,m.fillRect(0,0,r,i),{canvas:y.canvas,offsetX:Math.round(g),offsetY:Math.round(b)}}},{key:"setLineWidth",value:function(e){this.current.lineWidth=e,this.ctx.lineWidth=e}},{key:"setLineCap",value:function(e){this.ctx.lineCap=T[e]}},{key:"setLineJoin",value:function(e){this.ctx.lineJoin=E[e]}},{key:"setMiterLimit",value:function(e){this.ctx.miterLimit=e}},{key:"setDash",value:function(e,t){var r=this.ctx
void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)}},{key:"setRenderingIntent",value:function(e){}},{key:"setFlatness",value:function(e){}},{key:"setGState",value:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],a=n[0],i=n[1]
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
case"SMask":this.current.activeSMask=i?this.tempSMask:null,this.tempSMask=null,this.checkSMaskState()
break
case"TR":this.current.transferMaps=i}}}},{key:"inSMaskMode",get:function(){return!!this.suspendedCtx}},{key:"checkSMaskState",value:function(){var e=this.inSMaskMode
this.current.activeSMask&&!e?this.beginSMaskMode():!this.current.activeSMask&&e&&this.endSMaskMode()}},{key:"beginSMaskMode",value:function(){if(this.inSMaskMode)throw new Error("beginSMaskMode called while already in smask mode")
var e=this.ctx.canvas.width,t=this.ctx.canvas.height,r="smaskGroupAt"+this.groupLevel,n=this.cachedCanvases.getCanvas(r,e,t,!0)
this.suspendedCtx=this.ctx,this.ctx=n.context
var a=this.ctx
a.setTransform.apply(a,this.suspendedCtx.mozCurrentTransform),A(this.suspendedCtx,a),function(e,t){if(e._removeMirroring)throw new Error("Context is already forwarding operations.")
e.__originalSave=e.save,e.__originalRestore=e.restore,e.__originalRotate=e.rotate,e.__originalScale=e.scale,e.__originalTranslate=e.translate,e.__originalTransform=e.transform,e.__originalSetTransform=e.setTransform,e.__originalResetTransform=e.resetTransform,e.__originalClip=e.clip,e.__originalMoveTo=e.moveTo,e.__originalLineTo=e.lineTo,e.__originalBezierCurveTo=e.bezierCurveTo,e.__originalRect=e.rect,e.__originalClosePath=e.closePath,e.__originalBeginPath=e.beginPath,e._removeMirroring=function(){e.save=e.__originalSave,e.restore=e.__originalRestore,e.rotate=e.__originalRotate,e.scale=e.__originalScale,e.translate=e.__originalTranslate,e.transform=e.__originalTransform,e.setTransform=e.__originalSetTransform,e.resetTransform=e.__originalResetTransform,e.clip=e.__originalClip,e.moveTo=e.__originalMoveTo,e.lineTo=e.__originalLineTo,e.bezierCurveTo=e.__originalBezierCurveTo,e.rect=e.__originalRect,e.closePath=e.__originalClosePath,e.beginPath=e.__originalBeginPath,delete e._removeMirroring},e.save=function(){t.save(),this.__originalSave()},e.restore=function(){t.restore(),this.__originalRestore()},e.translate=function(e,r){t.translate(e,r),this.__originalTranslate(e,r)},e.scale=function(e,r){t.scale(e,r),this.__originalScale(e,r)},e.transform=function(e,r,n,a,i,o){t.transform(e,r,n,a,i,o),this.__originalTransform(e,r,n,a,i,o)},e.setTransform=function(e,r,n,a,i,o){t.setTransform(e,r,n,a,i,o),this.__originalSetTransform(e,r,n,a,i,o)},e.resetTransform=function(){t.resetTransform(),this.__originalResetTransform()},e.rotate=function(e){t.rotate(e),this.__originalRotate(e)},e.clip=function(e){t.clip(e),this.__originalClip(e)},e.moveTo=function(e,r){t.moveTo(e,r),this.__originalMoveTo(e,r)},e.lineTo=function(e,r){t.lineTo(e,r),this.__originalLineTo(e,r)},e.bezierCurveTo=function(e,r,n,a,i,o){t.bezierCurveTo(e,r,n,a,i,o),this.__originalBezierCurveTo(e,r,n,a,i,o)},e.rect=function(e,r,n,a){t.rect(e,r,n,a),this.__originalRect(e,r,n,a)},e.closePath=function(){t.closePath(),this.__originalClosePath()}
e.beginPath=function(){t.beginPath(),this.__originalBeginPath()}}(a,this.suspendedCtx),this.setGState([["BM","source-over"],["ca",1],["CA",1]])}},{key:"endSMaskMode",value:function(){if(!this.inSMaskMode)throw new Error("endSMaskMode called while not in smask mode")
this.ctx._removeMirroring(),A(this.ctx,this.suspendedCtx),this.ctx=this.suspendedCtx,this.suspendedCtx=null}},{key:"compose",value:function(e){if(this.current.activeSMask){e?(e[0]=Math.floor(e[0]),e[1]=Math.floor(e[1]),e[2]=Math.ceil(e[2]),e[3]=Math.ceil(e[3])):e=[0,0,this.ctx.canvas.width,this.ctx.canvas.height]
var t=this.current.activeSMask
C(this.suspendedCtx,t,this.ctx,e),this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.restore()}}},{key:"save",value:function(){this.inSMaskMode?(A(this.ctx,this.suspendedCtx),this.suspendedCtx.save()):this.ctx.save()
var e=this.current
this.stateStack.push(e),this.current=e.clone()}},{key:"restore",value:function(){0===this.stateStack.length&&this.inSMaskMode&&this.endSMaskMode(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.inSMaskMode?(this.suspendedCtx.restore(),A(this.suspendedCtx,this.ctx)):this.ctx.restore(),this.checkSMaskState(),this.pendingClip=null,this._cachedGetSinglePixelWidth=null)}},{key:"transform",value:function(e,t,r,n,a,i){this.ctx.transform(e,t,r,n,a,i),this._cachedGetSinglePixelWidth=null}},{key:"constructPath",value:function(e,t){for(var r,a,i=this.ctx,o=this.current,s=o.x,l=o.y,u=0,c=0,h=e.length;u<h;u++)switch(0|e[u]){case n.OPS.rectangle:s=t[c++],l=t[c++]
var d=t[c++],f=t[c++],p=s+d,v=l+f
i.moveTo(s,l),0===d||0===f?i.lineTo(p,v):(i.lineTo(p,l),i.lineTo(p,v),i.lineTo(s,v)),o.updatePathMinMax(i.mozCurrentTransform,s,l),o.updatePathMinMax(i.mozCurrentTransform,p,v),i.closePath()
break
case n.OPS.moveTo:s=t[c++],l=t[c++],i.moveTo(s,l),o.updatePathMinMax(i.mozCurrentTransform,s,l)
break
case n.OPS.lineTo:s=t[c++],l=t[c++],i.lineTo(s,l),o.updatePathMinMax(i.mozCurrentTransform,s,l)
break
case n.OPS.curveTo:r=s,a=l,s=t[c+4],l=t[c+5],i.bezierCurveTo(t[c],t[c+1],t[c+2],t[c+3],s,l),o.updateCurvePathMinMax(i.mozCurrentTransform,r,a,t[c],t[c+1],t[c+2],t[c+3],s,l),c+=6
break
case n.OPS.curveTo2:r=s,a=l,i.bezierCurveTo(s,l,t[c],t[c+1],t[c+2],t[c+3]),o.updateCurvePathMinMax(i.mozCurrentTransform,r,a,s,l,t[c],t[c+1],t[c+2],t[c+3]),s=t[c+2],l=t[c+3],c+=4
break
case n.OPS.curveTo3:r=s,a=l,s=t[c+2],l=t[c+3],i.bezierCurveTo(t[c],t[c+1],s,l,s,l),o.updateCurvePathMinMax(i.mozCurrentTransform,r,a,t[c],t[c+1],s,l,s,l),c+=4
break
case n.OPS.closePath:i.closePath()}o.setCurrentPoint(s,l)}},{key:"closePath",value:function(){this.ctx.closePath()}},{key:"stroke",value:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.strokeColor
if(t.globalAlpha=this.current.strokeAlpha,this.contentVisible)if("object"===o(r)&&null!=r&&r.getPattern){var n=this.getSinglePixelWidth()
t.save(),t.strokeStyle=r.getPattern(t,this,t.mozCurrentTransformInverse,a.PathType.STROKE),t.lineWidth=Math.max(n,this.current.lineWidth),t.stroke(),t.restore()}else{var i=this.getSinglePixelWidth()
i<0&&-i>=this.current.lineWidth?(t.save(),t.resetTransform(),t.lineWidth=Math.floor(this._combinedScaleFactor),t.stroke(),t.restore()):(t.lineWidth=Math.max(i,this.current.lineWidth),t.stroke())}e&&this.consumePath(this.current.getClippedPathBoundingBox()),t.globalAlpha=this.current.fillAlpha}},{key:"closeStroke",value:function(){this.closePath(),this.stroke()}},{key:"fill",value:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.fillColor,n=!1
this.current.patternFill&&(t.save(),t.fillStyle=r.getPattern(t,this,t.mozCurrentTransformInverse,a.PathType.FILL),n=!0)
var i=this.current.getClippedPathBoundingBox()
this.contentVisible&&null!==i&&(this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill()),n&&t.restore(),e&&this.consumePath(i)}},{key:"eoFill",value:function(){this.pendingEOFill=!0,this.fill()}},{key:"fillStroke",value:function(){this.fill(!1),this.stroke(!1),this.consumePath()}},{key:"eoFillStroke",value:function(){this.pendingEOFill=!0,this.fillStroke()}},{key:"closeFillStroke",value:function(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()}},{key:"endPath",value:function(){this.consumePath()}},{key:"clip",value:function(){this.pendingClip=O}},{key:"eoClip",value:function(){this.pendingClip=F}},{key:"beginText",value:function(){this.current.textMatrix=n.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0}},{key:"endText",value:function(){var e=this.pendingTextPaths,t=this.ctx
if(void 0!==e){t.save(),t.beginPath()
for(var r=0;r<e.length;r++){var n=e[r]
t.setTransform.apply(t,n.transform),t.translate(n.x,n.y),n.addToPath(t,n.fontSize)}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths}else t.beginPath()}},{key:"setCharSpacing",value:function(e){this.current.charSpacing=e}},{key:"setWordSpacing",value:function(e){this.current.wordSpacing=e}},{key:"setHScale",value:function(e){this.current.textHScale=e/100}},{key:"setLeading",value:function(e){this.current.leading=-e}},{key:"setFont",value:function(e,t){var r=this.commonObjs.get(e),a=this.current
if(!r)throw new Error("Can't find font for ".concat(e))
if(a.fontMatrix=r.fontMatrix||n.FONT_IDENTITY_MATRIX,0!==a.fontMatrix[0]&&0!==a.fontMatrix[3]||(0,n.warn)("Invalid font matrix for font "+e),t<0?(t=-t,a.fontDirection=-1):a.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var i=r.loadedName||"sans-serif",o="normal"
r.black?o="900":r.bold&&(o="bold")
var s=r.italic?"italic":"normal",l='"'.concat(i,'", ').concat(r.fallbackName),u=t
t<16?u=16:t>100&&(u=100),this.current.fontSizeScale=t/u,this.ctx.font="".concat(s," ").concat(o," ").concat(u,"px ").concat(l)}}},{key:"setTextRenderingMode",value:function(e){this.current.textRenderingMode=e}},{key:"setTextRise",value:function(e){this.current.textRise=e}},{key:"moveText",value:function(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t}},{key:"setLeadingMoveText",value:function(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"setTextMatrix",value:function(e,t,r,n,a,i){this.current.textMatrix=[e,t,r,n,a,i],this.current.textMatrixScale=Math.hypot(e,t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0}},{key:"nextLine",value:function(){this.moveText(0,this.current.leading)}},{key:"paintChar",value:function(e,t,r,a,i){var o,s=this.ctx,l=this.current,u=l.font,c=l.textRenderingMode,h=l.fontSize/l.fontSizeScale,d=c&n.TextRenderingMode.FILL_STROKE_MASK,f=!!(c&n.TextRenderingMode.ADD_TO_PATH_FLAG),p=l.patternFill&&!u.missingFile;((u.disableFontFace||f||p)&&(o=u.getPathGenerator(this.commonObjs,e)),u.disableFontFace||p?(s.save(),s.translate(t,r),s.beginPath(),o(s,h),a&&s.setTransform.apply(s,a),d!==n.TextRenderingMode.FILL&&d!==n.TextRenderingMode.FILL_STROKE||s.fill(),d!==n.TextRenderingMode.STROKE&&d!==n.TextRenderingMode.FILL_STROKE||(i&&(s.resetTransform(),s.lineWidth=Math.floor(this._combinedScaleFactor)),s.stroke()),s.restore()):(d!==n.TextRenderingMode.FILL&&d!==n.TextRenderingMode.FILL_STROKE||s.fillText(e,t,r),d!==n.TextRenderingMode.STROKE&&d!==n.TextRenderingMode.FILL_STROKE||(i?(s.save(),s.moveTo(t,r),s.resetTransform(),s.lineWidth=Math.floor(this._combinedScaleFactor),s.strokeText(e,0,0),s.restore()):s.strokeText(e,t,r))),f)&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:s.mozCurrentTransform,x:t,y:r,fontSize:h,addToPath:o})}},{key:"isFontSubpixelAAEnabled",get:function(){var e=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10).context
e.scale(1.5,1),e.fillText("I",0,10)
for(var t=e.getImageData(0,0,10,10).data,r=!1,a=3;a<t.length;a+=4)if(t[a]>0&&t[a]<255){r=!0
break}return(0,n.shadow)(this,"isFontSubpixelAAEnabled",r)}},{key:"showText",value:function(e){var t=this.current,r=t.font
if(r.isType3Font)return this.showType3Text(e)
var i=t.fontSize
if(0!==i){var o,s=this.ctx,l=t.fontSizeScale,u=t.charSpacing,c=t.wordSpacing,h=t.fontDirection,d=t.textHScale*h,f=e.length,p=r.vertical,v=p?1:-1,y=r.defaultVMetrics,m=i*t.fontMatrix[0],g=t.textRenderingMode===n.TextRenderingMode.FILL&&!r.disableFontFace&&!t.patternFill
if(s.save(),s.transform.apply(s,t.textMatrix),s.translate(t.x,t.y+t.textRise),h>0?s.scale(d,-1):s.scale(d,1),t.patternFill){s.save()
var b=t.fillColor.getPattern(s,this,s.mozCurrentTransformInverse,a.PathType.FILL)
o=s.mozCurrentTransform,s.restore(),s.fillStyle=b}var _=t.lineWidth,A=!1,k=t.textMatrixScale
if(0===k||0===_){var S=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
S!==n.TextRenderingMode.STROKE&&S!==n.TextRenderingMode.FILL_STROKE||(this._cachedGetSinglePixelWidth=null,A=(_=this.getSinglePixelWidth())<0)}else _/=k
1!==l&&(s.scale(l,l),_/=l),s.lineWidth=_
var x,w=0
for(x=0;x<f;++x){var C=e[x]
if("number"!=typeof C){var P=!1,T=(C.isSpace?c:0)+u,E=C.fontChar,O=C.accent,F=void 0,R=void 0,M=C.width
if(p){var I=C.vmetric||y,D=-(C.vmetric?I[1]:.5*M)*m,j=I[2]*m
M=I?-I[0]:M,F=D/l,R=(w+j)/l}else F=w/l,R=0
if(r.remeasure&&M>0){var L=1e3*s.measureText(E).width/i*l
if(M<L&&this.isFontSubpixelAAEnabled){var N=M/L
P=!0,s.save(),s.scale(N,1),F/=N}else M!==L&&(F+=(M-L)/2e3*i/l)}if(this.contentVisible&&(C.isInFont||r.missingFile))if(g&&!O)s.fillText(E,F,R)
else if(this.paintChar(E,F,R,o,A),O){var U=F+i*O.offset.x/l,B=R-i*O.offset.y/l
this.paintChar(O.fontChar,U,B,o,A)}w+=p?M*m-T*h:M*m+T*h,P&&s.restore()}else w+=v*C*i/1e3}p?t.y-=w:t.x+=w*d,s.restore(),this.compose()}}},{key:"showType3Text",value:function(e){var t,r,a,i,o=this.ctx,s=this.current,l=s.font,u=s.fontSize,c=s.fontDirection,h=l.vertical?1:-1,d=s.charSpacing,f=s.wordSpacing,p=s.textHScale*c,v=s.fontMatrix||n.FONT_IDENTITY_MATRIX,y=e.length
if(!(s.textRenderingMode===n.TextRenderingMode.INVISIBLE)&&0!==u){for(this._cachedGetSinglePixelWidth=null,o.save(),o.transform.apply(o,s.textMatrix),o.translate(s.x,s.y),o.scale(p,c),t=0;t<y;++t)if("number"!=typeof(r=e[t])){var m=(r.isSpace?f:0)+d,g=l.charProcOperatorList[r.operatorListId]
if(g)this.contentVisible&&(this.processingType3=r,this.save(),o.scale(u,u),o.transform.apply(o,v),this.executeOperatorList(g),this.restore()),a=n.Util.applyTransform([r.width,0],v)[0]*u+m,o.translate(a,0),s.x+=a*p
else(0,n.warn)('Type3 character "'.concat(r.operatorListId,'" is not available.'))}else i=h*r*u/1e3,this.ctx.translate(i,0),s.x+=i*p
o.restore(),this.processingType3=null}}},{key:"setCharWidth",value:function(e,t){}},{key:"setCharWidthAndBounds",value:function(e,t,r,n,a,i){this.ctx.rect(r,n,a-r,i-n),this.clip(),this.endPath()}},{key:"getColorN_Pattern",value:function(t){var r,n=this
if("TilingPattern"===t[0]){var i=t[1],o=this.baseTransform||this.ctx.mozCurrentTransform.slice(),s={createCanvasGraphics:function(t){return new e(t,n.commonObjs,n.objs,n.canvasFactory)}}
r=new a.TilingPattern(t,i,this.ctx,s,o)}else r=this._getPattern(t[1],t[2])
return r}},{key:"setStrokeColorN",value:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)}},{key:"setFillColorN",value:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0}},{key:"setStrokeRGBColor",value:function(e,t,r){var a=n.Util.makeHexColor(e,t,r)
this.ctx.strokeStyle=a,this.current.strokeColor=a}},{key:"setFillRGBColor",value:function(e,t,r){var a=n.Util.makeHexColor(e,t,r)
this.ctx.fillStyle=a,this.current.fillColor=a,this.current.patternFill=!1}},{key:"_getPattern",value:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return this.cachedPatterns.has(e)?t=this.cachedPatterns.get(e):(t=(0,a.getShadingPattern)(this.objs.get(e)),this.cachedPatterns.set(e,t)),r&&(t.matrix=r),t}},{key:"shadingFill",value:function(e){if(this.contentVisible){var t=this.ctx
this.save()
var r=this._getPattern(e)
t.fillStyle=r.getPattern(t,this,t.mozCurrentTransformInverse,a.PathType.SHADING)
var i=t.mozCurrentTransformInverse
if(i){var o=t.canvas,s=o.width,l=o.height,u=n.Util.applyTransform([0,0],i),c=n.Util.applyTransform([0,l],i),h=n.Util.applyTransform([s,0],i),d=n.Util.applyTransform([s,l],i),f=Math.min(u[0],c[0],h[0],d[0]),p=Math.min(u[1],c[1],h[1],d[1]),v=Math.max(u[0],c[0],h[0],d[0]),y=Math.max(u[1],c[1],h[1],d[1])
this.ctx.fillRect(f,p,v-f,y-p)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.compose(this.current.getClippedPathBoundingBox()),this.restore()}}},{key:"beginInlineImage",value:function(){(0,n.unreachable)("Should not call beginInlineImage")}},{key:"beginImageData",value:function(){(0,n.unreachable)("Should not call beginImageData")}},{key:"paintFormXObjectBegin",value:function(e,t){if(this.contentVisible&&(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(e)&&6===e.length&&this.transform.apply(this,e),this.baseTransform=this.ctx.mozCurrentTransform,t)){var r=t[2]-t[0],n=t[3]-t[1]
this.ctx.rect(t[0],t[1],r,n),this.current.updatePathMinMax(this.ctx.mozCurrentTransform,t[0],t[1]),this.current.updatePathMinMax(this.ctx.mozCurrentTransform,t[2],t[3]),this.clip(),this.endPath()}}},{key:"paintFormXObjectEnd",value:function(){this.contentVisible&&(this.restore(),this.baseTransform=this.baseTransformStack.pop())}},{key:"beginGroup",value:function(e){if(this.contentVisible){this.save(),this.inSMaskMode&&(this.endSMaskMode(),this.current.activeSMask=null)
var t=this.ctx
e.isolated||(0,n.info)("TODO: Support non-isolated groups."),e.knockout&&(0,n.warn)("Knockout groups not supported.")
var r=t.mozCurrentTransform
if(e.matrix&&t.transform.apply(t,e.matrix),!e.bbox)throw new Error("Bounding box is required.")
var a=n.Util.getAxialAlignedBoundingBox(e.bbox,t.mozCurrentTransform),i=[0,0,t.canvas.width,t.canvas.height]
a=n.Util.intersect(a,i)||[0,0,0,0]
var o=Math.floor(a[0]),s=Math.floor(a[1]),l=Math.max(Math.ceil(a[2])-o,1),u=Math.max(Math.ceil(a[3])-s,1),c=1,h=1
l>p&&(c=l/p,l=p),u>p&&(h=u/p,u=p),this.current.startNewPathAndClipBox([0,0,l,u])
var d="groupAt"+this.groupLevel
e.smask&&(d+="_smask_"+this.smaskCounter++%2)
var f=this.cachedCanvases.getCanvas(d,l,u,!0),v=f.context
v.scale(1/c,1/h),v.translate(-o,-s),v.transform.apply(v,r),e.smask?this.smaskStack.push({canvas:f.canvas,context:v,offsetX:o,offsetY:s,scaleX:c,scaleY:h,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(o,s),t.scale(c,h),t.save()),A(t,v),this.ctx=v,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++}}},{key:"endGroup",value:function(e){if(this.contentVisible){this.groupLevel--
var t=this.ctx,r=this.groupStack.pop()
if(this.ctx=r,this.ctx.imageSmoothingEnabled=!1,e.smask)this.tempSMask=this.smaskStack.pop(),this.restore()
else{this.ctx.restore()
var a=this.ctx.mozCurrentTransform
this.restore(),this.ctx.save(),this.ctx.setTransform.apply(this.ctx,a)
var i=n.Util.getAxialAlignedBoundingBox([0,0,t.canvas.width,t.canvas.height],a)
this.ctx.drawImage(t.canvas,0,0),this.ctx.restore(),this.compose(i)}}}},{key:"beginAnnotations",value:function(){this.save(),this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)}},{key:"endAnnotations",value:function(){this.restore()}},{key:"beginAnnotation",value:function(e,t,r,a,i){if(this.save(),Array.isArray(t)&&4===t.length){var o=t[2]-t[0],s=t[3]-t[1]
if(i&&this.annotationCanvasMap){(r=r.slice())[4]-=t[0],r[5]-=t[1],(t=t.slice())[0]=t[1]=0,t[2]=o,t[3]=s
var l=h(n.Util.singularValueDecompose2dScale(this.ctx.mozCurrentTransform),2),u=l[0],c=l[1],d=this.viewportScale,f=Math.ceil(o*this.outputScaleX*d),p=Math.ceil(s*this.outputScaleY*d)
this.annotationCanvas=this.canvasFactory.create(f,p)
var v=this.annotationCanvas,m=v.canvas,b=v.context
m.style.width="calc(".concat(o,"px * var(--viewport-scale-factor))"),m.style.height="calc(".concat(s,"px * var(--viewport-scale-factor))"),this.annotationCanvasMap.set(e,m),this.annotationCanvas.savedCtx=this.ctx,this.ctx=b,this.ctx.setTransform(u,0,0,-c,0,s*c),y(this.ctx),k(this.ctx)}else k(this.ctx),this.ctx.rect(t[0],t[1],o,s),this.clip(),this.endPath()}this.current=new g(this.ctx.canvas.width,this.ctx.canvas.height),this.transform.apply(this,r),this.transform.apply(this,a)}},{key:"endAnnotation",value:function(){this.annotationCanvas&&(this.ctx=this.annotationCanvas.savedCtx,delete this.annotationCanvas.savedCtx,delete this.annotationCanvas),this.restore()}},{key:"paintImageMaskXObject",value:function(e){if(this.contentVisible){var t=this.ctx,r=e.width,n=e.height,a=this.processingType3
if(a&&void 0===a.compiled&&(a.compiled=r<=1e3&&n<=1e3?function(e){var t,r,n,a,i=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),o=e.width,s=e.height,l=o+1,u=new Uint8Array(l*(s+1)),c=o+7&-8,h=e.data,d=new Uint8Array(c*s),f=0
for(t=0,r=h.length;t<r;t++)for(var p=h[t],v=128;v>0;)d[f++]=p&v?0:255,v>>=1
var y=0
for(0!==d[f=0]&&(u[0]=1,++y),n=1;n<o;n++)d[f]!==d[f+1]&&(u[n]=d[f]?2:1,++y),f++
for(0!==d[f]&&(u[n]=2,++y),t=1;t<s;t++){a=t*l,d[(f=t*c)-c]!==d[f]&&(u[a]=d[f]?1:8,++y)
var m=(d[f]?4:0)+(d[f-c]?8:0)
for(n=1;n<o;n++)i[m=(m>>2)+(d[f+1]?4:0)+(d[f-c+1]?8:0)]&&(u[a+n]=i[m],++y),f++
if(d[f-c]!==d[f]&&(u[a+n]=d[f]?2:4,++y),y>1e3)return null}for(a=t*l,0!==d[f=c*(s-1)]&&(u[a]=8,++y),n=1;n<o;n++)d[f]!==d[f+1]&&(u[a+n]=d[f]?4:8,++y),f++
if(0!==d[f]&&(u[a+n]=4,++y),y>1e3)return null
var g=new Int32Array([0,l,-1,0,-l,0,0,0,1]),b=[]
for(t=0;y&&t<=s;t++){for(var _=t*l,A=_+o;_<A&&!u[_];)_++
if(_!==A){var k=[_%l,t],S=_,x=u[_]
do{var w=g[x]
do{_+=w}while(!u[_])
var C=u[_]
5!==C&&10!==C?(x=C,u[_]=0):(x=C&51*x>>4,u[_]&=x>>2|x<<2),k.push(_%l,_/l|0),u[_]||--y}while(S!==_)
b.push(k),--t}}return function(e){e.save(),e.scale(1/o,-1/s),e.translate(0,-s),e.beginPath()
for(var t=0,r=b.length;t<r;t++){var n=b[t]
e.moveTo(n[0],n[1])
for(var a=2,i=n.length;a<i;a+=2)e.lineTo(n[a],n[a+1])}e.fill(),e.beginPath(),e.restore()}}({data:e.data,width:r,height:n}):null),null!=a&&a.compiled)a.compiled(t)
else{var i=this._createMaskCanvas(e),o=i.canvas
t.save(),t.setTransform(1,0,0,1,0,0),t.drawImage(o,i.offsetX,i.offsetY),t.restore(),this.compose()}}}},{key:"paintImageMaskXObjectRepeat",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0
if(this.contentVisible){var s=this.ctx
s.save()
var l=s.mozCurrentTransform
s.transform(t,r,a,i,0,0)
var u=this._createMaskCanvas(e)
s.setTransform(1,0,0,1,0,0)
for(var c=0,d=o.length;c<d;c+=2){var f=n.Util.transform(l,[t,r,a,i,o[c],o[c+1]]),p=n.Util.applyTransform([0,0],f),v=h(p,2),y=v[0],m=v[1]
s.drawImage(u.canvas,y,m)}s.restore(),this.compose()}}},{key:"paintImageMaskXObjectGroup",value:function(e){if(this.contentVisible){for(var t=this.ctx,r=this.current.fillColor,n=this.current.patternFill,i=0,o=e.length;i<o;i++){var s=e[i],l=s.width,u=s.height,c=this.cachedCanvases.getCanvas("maskCanvas",l,u),h=c.context
h.save(),_(h,s),h.globalCompositeOperation="source-in",h.fillStyle=n?r.getPattern(h,this,t.mozCurrentTransformInverse,a.PathType.FILL):r,h.fillRect(0,0,l,u),h.restore(),t.save(),t.transform.apply(t,s.transform),t.scale(1,-1),t.drawImage(c.canvas,0,0,l,u,0,-1,1,1),t.restore()}this.compose()}}},{key:"paintImageXObject",value:function(e){if(this.contentVisible){var t=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image isn't ready yet")}}},{key:"paintImageXObjectRepeat",value:function(e,t,r,a){if(this.contentVisible){var i=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
if(i){for(var o=i.width,s=i.height,l=[],u=0,c=a.length;u<c;u+=2)l.push({transform:[t,0,0,r,a[u],a[u+1]],x:0,y:0,w:o,h:s})
this.paintInlineImageXObjectGroup(i,l)}else(0,n.warn)("Dependent image isn't ready yet")}}},{key:"paintInlineImageXObject",value:function(e){if(this.contentVisible){var t,r=e.width,n=e.height,a=this.ctx
if(this.save(),a.scale(1/r,-1/n),"function"==typeof HTMLElement&&e instanceof HTMLElement||!e.data)t=e
else{var i=this.cachedCanvases.getCanvas("inlineImage",r,n)
b(i.context,e,this.current.transferMaps),t=i.canvas}var o=this._scaleImage(t,a.mozCurrentTransformInverse)
if(a.imageSmoothingEnabled=P(a.mozCurrentTransform,e.interpolate),a.drawImage(o.img,0,0,o.paintWidth,o.paintHeight,0,-n,r,n),this.imageLayer){var s=this.getCanvasPosition(0,-n)
this.imageLayer.appendImage({imgData:e,left:s[0],top:s[1],width:r/a.mozCurrentTransformInverse[0],height:n/a.mozCurrentTransformInverse[3]})}this.compose(),this.restore()}}},{key:"paintInlineImageXObjectGroup",value:function(e,t){if(this.contentVisible){var r=this.ctx,n=e.width,a=e.height,i=this.cachedCanvases.getCanvas("inlineImage",n,a)
b(i.context,e,this.current.transferMaps)
for(var o=0,s=t.length;o<s;o++){var l=t[o]
if(r.save(),r.transform.apply(r,l.transform),r.scale(1,-1),r.drawImage(i.canvas,l.x,l.y,l.w,l.h,0,-1,1,1),this.imageLayer){var u=this.getCanvasPosition(l.x,l.y)
this.imageLayer.appendImage({imgData:e,left:u[0],top:u[1],width:n,height:a})}r.restore()}this.compose()}}},{key:"paintSolidColorImageMask",value:function(){this.contentVisible&&(this.ctx.fillRect(0,0,1,1),this.compose())}},{key:"markPoint",value:function(e){}},{key:"markPointProps",value:function(e,t){}},{key:"beginMarkedContent",value:function(e){this.markedContentStack.push({visible:!0})}},{key:"beginMarkedContentProps",value:function(e,t){"OC"===e?this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(t)}):this.markedContentStack.push({visible:!0}),this.contentVisible=this.isContentVisible()}},{key:"endMarkedContent",value:function(){this.markedContentStack.pop(),this.contentVisible=this.isContentVisible()}},{key:"beginCompat",value:function(){}},{key:"endCompat",value:function(){}},{key:"consumePath",value:function(e){this.pendingClip&&this.current.updateClipFromPath(),this.pendingClip||this.compose(e)
var t=this.ctx
this.pendingClip&&(this.pendingClip===F?t.clip("evenodd"):t.clip(),this.pendingClip=null),this.current.startNewPathAndClipBox(this.current.clipBox),t.beginPath()}},{key:"getSinglePixelWidth",value:function(){if(null===this._cachedGetSinglePixelWidth){var e=this.ctx.mozCurrentTransform,t=Math.abs(e[0]*e[3]-e[2]*e[1]),r=Math.pow(e[0],2)+Math.pow(e[2],2),n=Math.pow(e[1],2)+Math.pow(e[3],2),a=Math.sqrt(Math.max(r,n))/t
r!==n&&this._combinedScaleFactor*a>1?this._cachedGetSinglePixelWidth=-this._combinedScaleFactor*a:t>Number.EPSILON?this._cachedGetSinglePixelWidth=a:this._cachedGetSinglePixelWidth=1}return this._cachedGetSinglePixelWidth}},{key:"getCanvasPosition",value:function(e,t){var r=this.ctx.mozCurrentTransform
return[r[0]*e+r[2]*t+r[4],r[1]*e+r[3]*t+r[5]]}},{key:"isContentVisible",value:function(){for(var e=this.markedContentStack.length-1;e>=0;e--)if(!this.markedContentStack[e].visible)return!1
return!0}}]),e}()
for(var M in t.CanvasGraphics=R,n.OPS)void 0!==R.prototype[M]&&(R.prototype[n.OPS[M]]=R.prototype[M])},(e,t,r)=>{"use strict"
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TilingPattern=t.PathType=void 0,t.getShadingPattern=function(e){switch(e[0]){case"RadialAxial":return new g(e)
case"Mesh":return new A(e)
case"Dummy":return new k}throw new Error("Unknown IR type: ".concat(e[0]))}
var a=r(1)
function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var a=h(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var v={FILL:"Fill",STROKE:"Stroke",SHADING:"Shading"}
function y(e,t){if(t&&"undefined"!=typeof Path2D){var r=t[2]-t[0],n=t[3]-t[1],a=new Path2D
a.rect(t[0],t[1],r,n),e.clip(a)}}t.PathType=v
var m=function(){function e(){d(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize BaseShadingPattern.")}return p(e,[{key:"getPattern",value:function(){(0,a.unreachable)("Abstract method `getPattern` called.")}}]),e}(),g=function(e){s(r,e)
var t=u(r)
function r(e){var n
return d(this,r),(n=t.call(this))._type=e[1],n._bbox=e[2],n._colorStops=e[3],n._p0=e[4],n._p1=e[5],n._r0=e[6],n._r1=e[7],n.matrix=null,n}return p(r,[{key:"_createGradient",value:function(e){var t
"axial"===this._type?t=e.createLinearGradient(this._p0[0],this._p0[1],this._p1[0],this._p1[1]):"radial"===this._type&&(t=e.createRadialGradient(this._p0[0],this._p0[1],this._r0,this._p1[0],this._p1[1],this._r1))
var r,n=i(this._colorStops)
try{for(n.s();!(r=n.n()).done;){var a=r.value
t.addColorStop(a[0],a[1])}}catch(o){n.e(o)}finally{n.f()}return t}},{key:"getPattern",value:function(e,t,r,n){var i
if(n===v.STROKE||n===v.FILL){var o=t.current.getClippedPathBoundingBox(n,e.mozCurrentTransform)||[0,0,0,0],s=Math.ceil(o[2]-o[0])||1,l=Math.ceil(o[3]-o[1])||1,u=t.cachedCanvases.getCanvas("pattern",s,l,!0),c=u.context
c.clearRect(0,0,c.canvas.width,c.canvas.height),c.beginPath(),c.rect(0,0,c.canvas.width,c.canvas.height),c.translate(-o[0],-o[1]),r=a.Util.transform(r,[1,0,0,1,o[0],o[1]]),c.transform.apply(c,t.baseTransform),this.matrix&&c.transform.apply(c,this.matrix),y(c,this._bbox),c.fillStyle=this._createGradient(c),c.fill(),i=e.createPattern(u.canvas,"no-repeat")
var h=new DOMMatrix(r)
try{i.setTransform(h)}catch(d){(0,a.warn)('RadialAxialShadingPattern.getPattern: "'.concat(null==d?void 0:d.message,'".'))}}else y(e,this._bbox),i=this._createGradient(e)
return i}}]),r}(m)
function b(e,t,r,n,a,i,o,s){var l,u=t.coords,c=t.colors,h=e.data,d=4*e.width
u[r+1]>u[n+1]&&(l=r,r=n,n=l,l=i,i=o,o=l),u[n+1]>u[a+1]&&(l=n,n=a,a=l,l=o,o=s,s=l),u[r+1]>u[n+1]&&(l=r,r=n,n=l,l=i,i=o,o=l)
var f=(u[r]+t.offsetX)*t.scaleX,p=(u[r+1]+t.offsetY)*t.scaleY,v=(u[n]+t.offsetX)*t.scaleX,y=(u[n+1]+t.offsetY)*t.scaleY,m=(u[a]+t.offsetX)*t.scaleX,g=(u[a+1]+t.offsetY)*t.scaleY
if(!(p>=g))for(var b,_,A,k,S,x,w,C,P=c[i],T=c[i+1],E=c[i+2],O=c[o],F=c[o+1],R=c[o+2],M=c[s],I=c[s+1],D=c[s+2],j=Math.round(p),L=Math.round(g),N=j;N<=L;N++){if(N<y){var U=void 0
b=f-(f-v)*(U=N<p?0:(p-N)/(p-y)),_=P-(P-O)*U,A=T-(T-F)*U,k=E-(E-R)*U}else{var B=void 0
b=v-(v-m)*(B=N>g?1:y===g?0:(y-N)/(y-g)),_=O-(O-M)*B,A=F-(F-I)*B,k=R-(R-D)*B}var W=void 0
S=f-(f-m)*(W=N<p?0:N>g?1:(p-N)/(p-g)),x=P-(P-M)*W,w=T-(T-I)*W,C=E-(E-D)*W
for(var G=Math.round(Math.min(b,S)),q=Math.round(Math.max(b,S)),z=d*N+4*G,H=G;H<=q;H++)(W=(b-H)/(b-S))<0?W=0:W>1&&(W=1),h[z++]=_-(_-x)*W|0,h[z++]=A-(A-w)*W|0,h[z++]=k-(k-C)*W|0,h[z++]=255}}function _(e,t,r){var n,a,i=t.coords,o=t.colors
switch(t.type){case"lattice":var s=t.verticesPerRow,l=Math.floor(i.length/s)-1,u=s-1
for(n=0;n<l;n++)for(var c=n*s,h=0;h<u;h++,c++)b(e,r,i[c],i[c+1],i[c+s],o[c],o[c+1],o[c+s]),b(e,r,i[c+s+1],i[c+1],i[c+s],o[c+s+1],o[c+1],o[c+s])
break
case"triangles":for(n=0,a=i.length;n<a;n+=3)b(e,r,i[n],i[n+1],i[n+2],o[n],o[n+1],o[n+2])
break
default:throw new Error("illegal figure")}}var A=function(e){s(r,e)
var t=u(r)
function r(e){var n
return d(this,r),(n=t.call(this))._coords=e[2],n._colors=e[3],n._figures=e[4],n._bounds=e[5],n._bbox=e[7],n._background=e[8],n.matrix=null,n}return p(r,[{key:"_createMeshCanvas",value:function(e,t,r){var n=Math.floor(this._bounds[0]),a=Math.floor(this._bounds[1]),o=Math.ceil(this._bounds[2])-n,s=Math.ceil(this._bounds[3])-a,l=Math.min(Math.ceil(Math.abs(o*e[0]*1.1)),3e3),u=Math.min(Math.ceil(Math.abs(s*e[1]*1.1)),3e3),c=o/l,h=s/u,d={coords:this._coords,colors:this._colors,offsetX:-n,offsetY:-a,scaleX:1/c,scaleY:1/h},f=l+4,p=u+4,v=r.getCanvas("mesh",f,p,!1),y=v.context,m=y.createImageData(l,u)
if(t)for(var g=m.data,b=0,A=g.length;b<A;b+=4)g[b]=t[0],g[b+1]=t[1],g[b+2]=t[2],g[b+3]=255
var k,S=i(this._figures)
try{for(S.s();!(k=S.n()).done;){_(m,k.value,d)}}catch(x){S.e(x)}finally{S.f()}return y.putImageData(m,2,2),{canvas:v.canvas,offsetX:n-2*c,offsetY:a-2*h,scaleX:c,scaleY:h}}},{key:"getPattern",value:function(e,t,r,n){var i
if(y(e,this._bbox),n===v.SHADING)i=a.Util.singularValueDecompose2dScale(e.mozCurrentTransform)
else if(i=a.Util.singularValueDecompose2dScale(t.baseTransform),this.matrix){var o=a.Util.singularValueDecompose2dScale(this.matrix)
i=[i[0]*o[0],i[1]*o[1]]}var s=this._createMeshCanvas(i,n===v.SHADING?null:this._background,t.cachedCanvases)
return n!==v.SHADING&&(e.setTransform.apply(e,t.baseTransform),this.matrix&&e.transform.apply(e,this.matrix)),e.translate(s.offsetX,s.offsetY),e.scale(s.scaleX,s.scaleY),e.createPattern(s.canvas,"no-repeat")}}]),r}(m),k=function(e){s(r,e)
var t=u(r)
function r(){return d(this,r),t.apply(this,arguments)}return p(r,[{key:"getPattern",value:function(){return"hotpink"}}]),r}(m)
var S=1,x=2,w=function(){function e(t,r,n,a,i){d(this,e),this.operatorList=t[2],this.matrix=t[3]||[1,0,0,1,0,0],this.bbox=t[4],this.xstep=t[5],this.ystep=t[6],this.paintType=t[7],this.tilingType=t[8],this.color=r,this.ctx=n,this.canvasGraphicsFactory=a,this.baseTransform=i}return p(e,[{key:"createPatternCanvas",value:function(e){var t=this.operatorList,r=this.bbox,n=this.xstep,i=this.ystep,o=this.paintType,s=this.tilingType,l=this.color,u=this.canvasGraphicsFactory;(0,a.info)("TilingType: "+s)
var c=r[0],h=r[1],d=r[2],f=r[3],p=a.Util.singularValueDecompose2dScale(this.matrix),v=a.Util.singularValueDecompose2dScale(this.baseTransform),y=[p[0]*v[0],p[1]*v[1]],m=this.getSizeAndScale(n,this.ctx.canvas.width,y[0]),g=this.getSizeAndScale(i,this.ctx.canvas.height,y[1]),b=e.cachedCanvases.getCanvas("pattern",m.size,g.size,!0),_=b.context,A=u.createCanvasGraphics(_)
A.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(A,o,l)
var k=c,S=h,x=d,w=f
return c<0&&(k=0,x+=Math.abs(c)),h<0&&(S=0,w+=Math.abs(h)),_.translate(-m.scale*k,-g.scale*S),A.transform(m.scale,0,0,g.scale,0,0),_.save(),this.clipBbox(A,k,S,x,w),A.baseTransform=A.ctx.mozCurrentTransform.slice(),A.executeOperatorList(t),A.endDrawing(),{canvas:b.canvas,scaleX:m.scale,scaleY:g.scale,offsetX:k,offsetY:S}}},{key:"getSizeAndScale",value:function(t,r,n){t=Math.abs(t)
var a=Math.max(e.MAX_PATTERN_SIZE,r),i=Math.ceil(t*n)
return i>=a?i=a:n=i/t,{scale:n,size:i}}},{key:"clipBbox",value:function(e,t,r,n,a){var i=n-t,o=a-r
e.ctx.rect(t,r,i,o),e.clip(),e.endPath()}},{key:"setFillAndStrokeStyleToContext",value:function(e,t,r){var n=e.ctx,i=e.current
switch(t){case S:var o=this.ctx
n.fillStyle=o.fillStyle,n.strokeStyle=o.strokeStyle,i.fillColor=o.fillStyle,i.strokeColor=o.strokeStyle
break
case x:var s=a.Util.makeHexColor(r[0],r[1],r[2])
n.fillStyle=s,n.strokeStyle=s,i.fillColor=s,i.strokeColor=s
break
default:throw new a.FormatError("Unsupported paint type: ".concat(t))}}},{key:"getPattern",value:function(e,t,r,n){var i=r
n!==v.SHADING&&(i=a.Util.transform(i,t.baseTransform),this.matrix&&(i=a.Util.transform(i,this.matrix)))
var o=this.createPatternCanvas(t),s=new DOMMatrix(i)
s=(s=s.translate(o.offsetX,o.offsetY)).scale(1/o.scaleX,1/o.scaleY)
var l=e.createPattern(o.canvas,"repeat")
try{l.setTransform(s)}catch(u){(0,a.warn)('TilingPattern.getPattern: "'.concat(null==u?void 0:u.message,'".'))}return l}}],[{key:"MAX_PATTERN_SIZE",get:function(){return(0,a.shadow)(this,"MAX_PATTERN_SIZE",3e3)}}]),e}()
t.TilingPattern=w},(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalWorkerOptions=void 0
var r=Object.create(null)
t.GlobalWorkerOptions=r,r.workerPort=void 0===r.workerPort?null:r.workerPort,r.workerSrc=void 0===r.workerSrc?"":r.workerSrc},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0
var n,a=(n=r(145))&&n.__esModule?n:{default:n},i=r(1)
function o(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var u=1,c=2,h=1,d=2,f=3,p=4,v=5,y=6,m=7,g=8
function b(e){switch(e instanceof Error||"object"===l(e)&&null!==e||(0,i.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),e.name){case"AbortException":return new i.AbortException(e.message)
case"MissingPDFException":return new i.MissingPDFException(e.message)
case"PasswordException":return new i.PasswordException(e.message,e.code)
case"UnexpectedResponseException":return new i.UnexpectedResponseException(e.message,e.status)
case"UnknownErrorException":return new i.UnknownErrorException(e.message,e.details)
default:return new i.UnknownErrorException(e.message,e.toString())}}var _=function(){function e(t,r,n){var a=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.sourceName=t,this.targetName=r,this.comObj=n,this.callbackId=1,this.streamId=1,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===a.sourceName)if(t.stream)a._processStreamMessage(t)
else if(t.callback){var r=t.callbackId,i=a.callbackCapabilities[r]
if(!i)throw new Error("Cannot resolve callback ".concat(r))
if(delete a.callbackCapabilities[r],t.callback===u)i.resolve(t.data)
else{if(t.callback!==c)throw new Error("Unexpected callback case")
i.reject(b(t.reason))}}else{var o=a.actionHandler[t.action]
if(!o)throw new Error("Unknown action from worker: ".concat(t.action))
if(t.callbackId){var s=a.sourceName,l=t.sourceName
new Promise((function(e){e(o(t.data))})).then((function(e){n.postMessage({sourceName:s,targetName:l,callback:u,callbackId:t.callbackId,data:e})}),(function(e){n.postMessage({sourceName:s,targetName:l,callback:c,callbackId:t.callbackId,reason:b(e)})}))}else t.streamId?a._createStreamSink(t):o(t.data)}},n.addEventListener("message",this._onComObjOnMessage)}var t,r,n,l,_
return t=e,r=[{key:"on",value:function(e,t){var r=this.actionHandler
if(r[e])throw new Error('There is already an actionName called "'.concat(e,'"'))
r[e]=t}},{key:"send",value:function(e,t,r){this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},r)}},{key:"sendWithPromise",value:function(e,t,r){var n=this.callbackId++,a=(0,i.createPromiseCapability)()
this.callbackCapabilities[n]=a
try{this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:n,data:t},r)}catch(o){a.reject(o)}return a.promise}},{key:"sendWithStream",value:function(e,t,r,n){var a=this,o=this.streamId++,s=this.sourceName,l=this.targetName,u=this.comObj
return new ReadableStream({start:function(r){var c=(0,i.createPromiseCapability)()
return a.streamControllers[o]={controller:r,startCall:c,pullCall:null,cancelCall:null,isClosed:!1},u.postMessage({sourceName:s,targetName:l,action:e,streamId:o,data:t,desiredSize:r.desiredSize},n),c.promise},pull:function(e){var t=(0,i.createPromiseCapability)()
return a.streamControllers[o].pullCall=t,u.postMessage({sourceName:s,targetName:l,stream:y,streamId:o,desiredSize:e.desiredSize}),t.promise},cancel:function(e){(0,i.assert)(e instanceof Error,"cancel must have a valid reason")
var t=(0,i.createPromiseCapability)()
return a.streamControllers[o].cancelCall=t,a.streamControllers[o].isClosed=!0,u.postMessage({sourceName:s,targetName:l,stream:h,streamId:o,reason:b(e)}),t.promise}},r)}},{key:"_createStreamSink",value:function(e){var t=e.streamId,r=this.sourceName,n=e.sourceName,a=this.comObj,o=this,s=this.actionHandler[e.action],l={enqueue:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2?arguments[2]:void 0
if(!this.isCancelled){var l=this.desiredSize
this.desiredSize-=o,l>0&&this.desiredSize<=0&&(this.sinkCapability=(0,i.createPromiseCapability)(),this.ready=this.sinkCapability.promise),a.postMessage({sourceName:r,targetName:n,stream:p,streamId:t,chunk:e},s)}},close:function(){this.isCancelled||(this.isCancelled=!0,a.postMessage({sourceName:r,targetName:n,stream:f,streamId:t}),delete o.streamSinks[t])},error:function(e){(0,i.assert)(e instanceof Error,"error must have a valid reason"),this.isCancelled||(this.isCancelled=!0,a.postMessage({sourceName:r,targetName:n,stream:v,streamId:t,reason:b(e)}))},sinkCapability:(0,i.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:e.desiredSize,ready:null}
l.sinkCapability.resolve(),l.ready=l.sinkCapability.promise,this.streamSinks[t]=l,new Promise((function(t){t(s(e.data,l))})).then((function(){a.postMessage({sourceName:r,targetName:n,stream:g,streamId:t,success:!0})}),(function(e){a.postMessage({sourceName:r,targetName:n,stream:g,streamId:t,reason:b(e)})}))}},{key:"_processStreamMessage",value:function(e){var t=e.streamId,r=this.sourceName,n=e.sourceName,a=this.comObj,o=this.streamControllers[t],s=this.streamSinks[t]
switch(e.stream){case g:e.success?o.startCall.resolve():o.startCall.reject(b(e.reason))
break
case m:e.success?o.pullCall.resolve():o.pullCall.reject(b(e.reason))
break
case y:if(!s){a.postMessage({sourceName:r,targetName:n,stream:m,streamId:t,success:!0})
break}s.desiredSize<=0&&e.desiredSize>0&&s.sinkCapability.resolve(),s.desiredSize=e.desiredSize,new Promise((function(e){e(s.onPull&&s.onPull())})).then((function(){a.postMessage({sourceName:r,targetName:n,stream:m,streamId:t,success:!0})}),(function(e){a.postMessage({sourceName:r,targetName:n,stream:m,streamId:t,reason:b(e)})}))
break
case p:if((0,i.assert)(o,"enqueue should have stream controller"),o.isClosed)break
o.controller.enqueue(e.chunk)
break
case f:if((0,i.assert)(o,"close should have stream controller"),o.isClosed)break
o.isClosed=!0,o.controller.close(),this._deleteStreamController(o,t)
break
case v:(0,i.assert)(o,"error should have stream controller"),o.controller.error(b(e.reason)),this._deleteStreamController(o,t)
break
case d:e.success?o.cancelCall.resolve():o.cancelCall.reject(b(e.reason)),this._deleteStreamController(o,t)
break
case h:if(!s)break
new Promise((function(t){t(s.onCancel&&s.onCancel(b(e.reason)))})).then((function(){a.postMessage({sourceName:r,targetName:n,stream:d,streamId:t,success:!0})}),(function(e){a.postMessage({sourceName:r,targetName:n,stream:d,streamId:t,reason:b(e)})})),s.sinkCapability.reject(b(e.reason)),s.isCancelled=!0,delete this.streamSinks[t]
break
default:throw new Error("Unexpected stream case")}}},{key:"_deleteStreamController",value:(l=a.default.mark((function e(t,r){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([t.startCall&&t.startCall.promise,t.pullCall&&t.pullCall.promise,t.cancelCall&&t.cancelCall.promise])
case 2:delete this.streamControllers[r]
case 3:case"end":return e.stop()}}),e,this)})),_=function(){var e=this,t=arguments
return new Promise((function(r,n){var a=l.apply(e,t)
function i(e){o(a,r,n,i,s,"next",e)}function s(e){o(a,r,n,i,s,"throw",e)}i(void 0)}))},function(e,t){return _.apply(this,arguments)})},{key:"destroy",value:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}],r&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()
t.MessageHandler=_},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0
var n=r(1)
function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function o(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,l(e,t,"get"))}function s(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=r}}(e,l(e,t,"set"),r),r}function l(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}var u=new WeakMap,c=new WeakMap,h=function(){function e(t){var r=t.parsedData,n=t.rawData;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),i(this,u,{writable:!0,value:void 0}),i(this,c,{writable:!0,value:void 0}),s(this,u,r),s(this,c,n)}var t,r,l
return t=e,(r=[{key:"getRaw",value:function(){return o(this,c)}},{key:"get",value:function(e){var t
return null!==(t=o(this,u).get(e))&&void 0!==t?t:null}},{key:"getAll",value:function(){return(0,n.objectFromMap)(o(this,u))}},{key:"has",value:function(e){return o(this,u).has(e)}}])&&a(t.prototype,r),l&&a(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}()
t.Metadata=h},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OptionalContentConfig=void 0
var n=r(1)
function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=s((function e(t,r){l(this,e),this.visible=!0,this.name=t,this.intent=r})),c=function(){function e(t){if(l(this,e),this.name=null,this.creator=null,this._order=null,this._groups=new Map,null!==t){this.name=t.name,this.creator=t.creator,this._order=t.order
var r,n=a(t.groups)
try{for(n.s();!(r=n.n()).done;){var i=r.value
this._groups.set(i.id,new u(i.name,i.intent))}}catch(y){n.e(y)}finally{n.f()}if("OFF"===t.baseState){var o,s=a(this._groups)
try{for(s.s();!(o=s.n()).done;){o.value.visible=!1}}catch(y){s.e(y)}finally{s.f()}}var c,h=a(t.on)
try{for(h.s();!(c=h.n()).done;){var d=c.value
this._groups.get(d).visible=!0}}catch(y){h.e(y)}finally{h.f()}var f,p=a(t.off)
try{for(p.s();!(f=p.n()).done;){var v=f.value
this._groups.get(v).visible=!1}}catch(y){p.e(y)}finally{p.f()}}}return s(e,[{key:"_evaluateVisibilityExpression",value:function(e){var t=e.length
if(t<2)return!0
for(var r=e[0],a=1;a<t;a++){var i=e[a],o=void 0
if(Array.isArray(i))o=this._evaluateVisibilityExpression(i)
else{if(!this._groups.has(i))return(0,n.warn)("Optional content group not found: ".concat(i)),!0
o=this._groups.get(i).visible}switch(r){case"And":if(!o)return!1
break
case"Or":if(o)return!0
break
case"Not":return!o
default:return!0}}return"And"===r}},{key:"isVisible",value:function(e){if(0===this._groups.size)return!0
if(!e)return(0,n.warn)("Optional content group not defined."),!0
if("OCG"===e.type)return this._groups.has(e.id)?this._groups.get(e.id).visible:((0,n.warn)("Optional content group not found: ".concat(e.id)),!0)
if("OCMD"===e.type){if(e.expression)return this._evaluateVisibilityExpression(e.expression)
if(!e.policy||"AnyOn"===e.policy){var t,r=a(e.ids)
try{for(r.s();!(t=r.n()).done;){var i=t.value
if(!this._groups.has(i))return(0,n.warn)("Optional content group not found: ".concat(i)),!0
if(this._groups.get(i).visible)return!0}}catch(v){r.e(v)}finally{r.f()}return!1}if("AllOn"===e.policy){var o,s=a(e.ids)
try{for(s.s();!(o=s.n()).done;){var l=o.value
if(!this._groups.has(l))return(0,n.warn)("Optional content group not found: ".concat(l)),!0
if(!this._groups.get(l).visible)return!1}}catch(v){s.e(v)}finally{s.f()}return!0}if("AnyOff"===e.policy){var u,c=a(e.ids)
try{for(c.s();!(u=c.n()).done;){var h=u.value
if(!this._groups.has(h))return(0,n.warn)("Optional content group not found: ".concat(h)),!0
if(!this._groups.get(h).visible)return!0}}catch(v){c.e(v)}finally{c.f()}return!1}if("AllOff"===e.policy){var d,f=a(e.ids)
try{for(f.s();!(d=f.n()).done;){var p=d.value
if(!this._groups.has(p))return(0,n.warn)("Optional content group not found: ".concat(p)),!0
if(this._groups.get(p).visible)return!1}}catch(v){f.e(v)}finally{f.f()}return!0}return(0,n.warn)("Unknown optional content policy ".concat(e.policy,".")),!0}return(0,n.warn)("Unknown group type ".concat(e.type,".")),!0}},{key:"setVisibility",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._groups.has(e)?this._groups.get(e).visible=!!t:(0,n.warn)("Optional content group not found: ".concat(e))}},{key:"getOrder",value:function(){return this._groups.size?this._order?this._order.slice():Array.from(this._groups.keys()):null}},{key:"getGroups",value:function(){return this._groups.size>0?(0,n.objectFromMap)(this._groups):null}},{key:"getGroup",value:function(e){return this._groups.get(e)||null}}]),e}()
t.OptionalContentConfig=c},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0
var n,a=(n=r(145))&&n.__esModule?n:{default:n},i=r(1),o=r(147)
function s(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)}))}}function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var p=function(){function e(t,r){var n=this
h(this,e),(0,i.assert)(r,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'),this._queuedChunks=[],this._progressiveDone=t.progressiveDone||!1,this._contentDispositionFilename=t.contentDispositionFilename||null
var a=t.initialData
if((null==a?void 0:a.length)>0){var o=new Uint8Array(a).buffer
this._queuedChunks.push(o)}this._pdfDataRangeTransport=r,this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._contentLength=t.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener((function(e,t){n._onReceiveData({begin:e,chunk:t})})),this._pdfDataRangeTransport.addProgressListener((function(e,t){n._onProgress({loaded:e,total:t})})),this._pdfDataRangeTransport.addProgressiveReadListener((function(e){n._onReceiveData({chunk:e})})),this._pdfDataRangeTransport.addProgressiveDoneListener((function(){n._onProgressiveDone()})),this._pdfDataRangeTransport.transportReady()}return f(e,[{key:"_onReceiveData",value:function(e){var t=new Uint8Array(e.chunk).buffer
if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t)
else{var r=this._rangeReaders.some((function(r){return r._begin===e.begin&&(r._enqueue(t),!0)}));(0,i.assert)(r,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")}}},{key:"_progressiveDataLength",get:function(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}},{key:"_onProgress",value:function(e){if(void 0===e.total){var t=this._rangeReaders[0]
null!=t&&t.onProgress&&t.onProgress({loaded:e.loaded})}else{var r=this._fullRequestReader
null!=r&&r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}},{key:"_onProgressiveDone",value:function(){this._fullRequestReader&&this._fullRequestReader.progressiveDone(),this._progressiveDone=!0}},{key:"_removeRangeReader",value:function(e){var t=this._rangeReaders.indexOf(e)
t>=0&&this._rangeReaders.splice(t,1)}},{key:"getFullReader",value:function(){(0,i.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.")
var e=this._queuedChunks
return this._queuedChunks=null,new v(this,e,this._progressiveDone,this._contentDispositionFilename)}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new y(this,e,t)
return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e)
var t,r=u(this._rangeReaders.slice(0))
try{for(r.s();!(t=r.n()).done;){t.value.cancel(e)}}catch(n){r.e(n)}finally{r.f()}this._pdfDataRangeTransport.abort()}}]),e}()
t.PDFDataTransportStream=p
var v=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
h(this,e),this._stream=t,this._done=n||!1,this._filename=(0,o.isPdfFile)(a)?a:null,this._queuedChunks=r||[],this._loaded=0
var i,s=u(this._queuedChunks)
try{for(s.s();!(i=s.n()).done;){var l=i.value
this._loaded+=l.byteLength}}catch(c){s.e(c)}finally{s.f()}this._requests=[],this._headersReady=Promise.resolve(),t._fullRequestReader=this,this.onProgress=null}var t
return f(e,[{key:"_enqueue",value:function(e){if(!this._done){if(this._requests.length>0)this._requests.shift().resolve({value:e,done:!1})
else this._queuedChunks.push(e)
this._loaded+=e.byteLength}}},{key:"headersReady",get:function(){return this._headersReady}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._stream._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._stream._isStreamingSupported}},{key:"contentLength",get:function(){return this._stream._contentLength}},{key:"read",value:(t=l(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this._queuedChunks.length>0)){e.next=3
break}return t=this._queuedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 3:if(!this._done){e.next=5
break}return e.abrupt("return",{value:void 0,done:!0})
case 5:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0
var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0}},{key:"progressiveDone",value:function(){this._done||(this._done=!0)}}]),e}(),y=function(){function e(t,r,n){h(this,e),this._stream=t,this._begin=r,this._end=n,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}var t
return f(e,[{key:"_enqueue",value:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e
else{this._requests.shift().resolve({value:e,done:!1})
var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0}this._done=!0,this._stream._removeRangeReader(this)}}},{key:"isStreamingSupported",get:function(){return!1}},{key:"read",value:(t=l(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._queuedChunk){e.next=4
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 4:if(!this._done){e.next=6
break}return e.abrupt("return",{value:void 0,done:!0})
case 6:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0
var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0,this._stream._removeRangeReader(this)}}]),e}()},(e,t)=>{"use strict"
function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var a=0,i=function(){}
return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.XfaText=void 0
var i=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e)}var t,n,i
return t=e,i=[{key:"textContent",value:function(t){var n=[],a={items:n,styles:Object.create(null)}
return function t(a){var i
if(a){var o=null,s=a.name
if("#text"===s)o=a.value
else{if(!e.shouldBuildText(s))return
null!=a&&null!==(i=a.attributes)&&void 0!==i&&i.textContent?o=a.attributes.textContent:a.value&&(o=a.value)}if(null!==o&&n.push({str:o}),a.children){var l,u=r(a.children)
try{for(u.s();!(l=u.n()).done;)t(l.value)}catch(c){u.e(c)}finally{u.f()}}}}(t),a}},{key:"shouldBuildText",value:function(e){return!("textarea"===e||"input"===e||"option"===e||"select"===e)}}],(n=null)&&a(t.prototype,n),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()
t.XfaText=i},(e,t,r)=>{"use strict"
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0
var a=r(1),i=r(147),o=r(151),s=r(161),l=r(162)
function u(e,t,r){return function(e,t){if(e!==t)throw new TypeError("Private static access of wrong provenance")}(e,t),r}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=h(e,t)
if(n){var a=Object.getOwnPropertyDescriptor(n,t)
return a.get?a.get.call(arguments.length<3?e:r):a.value}},c.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var a=b(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function _(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=k(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return S(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t,r){return t&&w(e.prototype,t),r&&w(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var P=1e3,T=new WeakSet
function E(e){return{width:e[2]-e[0],height:e[3]-e[1]}}var O=function(){function e(){x(this,e)}return C(e,null,[{key:"create",value:function(e){switch(e.data.annotationType){case a.AnnotationType.LINK:return new R(e)
case a.AnnotationType.TEXT:return new M(e)
case a.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new D(e)
case"Btn":return e.data.radioButton?new L(e):e.data.checkBox?new j(e):new N(e)
case"Ch":return new U(e)}return new I(e)
case a.AnnotationType.POPUP:return new B(e)
case a.AnnotationType.FREETEXT:return new G(e)
case a.AnnotationType.LINE:return new q(e)
case a.AnnotationType.SQUARE:return new z(e)
case a.AnnotationType.CIRCLE:return new H(e)
case a.AnnotationType.POLYLINE:return new V(e)
case a.AnnotationType.CARET:return new Y(e)
case a.AnnotationType.INK:return new K(e)
case a.AnnotationType.POLYGON:return new X(e)
case a.AnnotationType.HIGHLIGHT:return new J(e)
case a.AnnotationType.UNDERLINE:return new Q(e)
case a.AnnotationType.SQUIGGLY:return new $(e)
case a.AnnotationType.STRIKEOUT:return new Z(e)
case a.AnnotationType.STAMP:return new ee(e)
case a.AnnotationType.FILEATTACHMENT:return new te(e)
default:return new F(e)}}}]),e}(),F=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.isRenderable,a=void 0!==n&&n,i=r.ignoreBorder,o=void 0!==i&&i,s=r.createQuadrilaterals,l=void 0!==s&&s
x(this,e),this.isRenderable=a,this.data=t.data,this.layer=t.layer,this.page=t.page,this.viewport=t.viewport,this.linkService=t.linkService,this.downloadManager=t.downloadManager,this.imageResourcesPath=t.imageResourcesPath,this.renderForms=t.renderForms,this.svgFactory=t.svgFactory,this.annotationStorage=t.annotationStorage,this.enableScripting=t.enableScripting,this.hasJSActions=t.hasJSActions,this._fieldObjects=t.fieldObjects,this._mouseState=t.mouseState,a&&(this.container=this._createContainer(o)),l&&(this.quadrilaterals=this._createQuadrilaterals(o))}return C(e,[{key:"_createContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.data,r=this.page,n=this.viewport,i=document.createElement("section"),o=E(t.rect),s=o.width,l=o.height
i.setAttribute("data-annotation-id",t.id)
var u=a.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]])
if(t.hasOwnCanvas){var c=n.transform.slice(),h=a.Util.singularValueDecompose2dScale(c),d=A(h,2),f=d[0],p=d[1]
s=Math.ceil(s*f),l=Math.ceil(l*p),u[0]*=f,u[1]*=p
for(var v=0;v<4;v++)c[v]=Math.sign(c[v])
i.style.transform="matrix(".concat(c.join(","),")")}else i.style.transform="matrix(".concat(n.transform.join(","),")")
if(i.style.transformOrigin="".concat(-u[0],"px ").concat(-u[1],"px"),!e&&t.borderStyle.width>0){i.style.borderWidth="".concat(t.borderStyle.width,"px"),t.borderStyle.style!==a.AnnotationBorderStyleType.UNDERLINE&&(s-=2*t.borderStyle.width,l-=2*t.borderStyle.width)
var y=t.borderStyle.horizontalCornerRadius,m=t.borderStyle.verticalCornerRadius
if(y>0||m>0){var g="".concat(y,"px / ").concat(m,"px")
i.style.borderRadius=g}switch(t.borderStyle.style){case a.AnnotationBorderStyleType.SOLID:i.style.borderStyle="solid"
break
case a.AnnotationBorderStyleType.DASHED:i.style.borderStyle="dashed"
break
case a.AnnotationBorderStyleType.BEVELED:(0,a.warn)("Unimplemented border style: beveled")
break
case a.AnnotationBorderStyleType.INSET:(0,a.warn)("Unimplemented border style: inset")
break
case a.AnnotationBorderStyleType.UNDERLINE:i.style.borderBottomStyle="solid"}var b=t.borderColor||t.color||null
b?i.style.borderColor=a.Util.makeHexColor(0|t.color[0],0|t.color[1],0|t.color[2]):i.style.borderWidth=0}return i.style.left="".concat(u[0],"px"),i.style.top="".concat(u[1],"px"),t.hasOwnCanvas?i.style.width=i.style.height="auto":(i.style.width="".concat(s,"px"),i.style.height="".concat(l,"px")),i}},{key:"_createQuadrilaterals",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.data.quadPoints)return null
var t,r=[],n=this.data.rect,a=_(this.data.quadPoints)
try{for(a.s();!(t=a.n()).done;){var i=t.value
this.data.rect=[i[2].x,i[2].y,i[1].x,i[1].y],r.push(this._createContainer(e))}}catch(o){a.e(o)}finally{a.f()}return this.data.rect=n,r}},{key:"_createPopup",value:function(e,t){var r=this.container
this.quadrilaterals&&(e=e||this.quadrilaterals,r=this.quadrilaterals[0]),e||((e=document.createElement("div")).style.height=r.style.height,e.style.width=r.style.width,r.appendChild(e))
var n=new W({container:r,trigger:e,color:t.color,titleObj:t.titleObj,modificationDate:t.modificationDate,contentsObj:t.contentsObj,richText:t.richText,hideWrapper:!0}).render()
n.style.left=r.style.width,r.appendChild(n)}},{key:"_renderQuadrilaterals",value:function(e){var t,r=_(this.quadrilaterals)
try{for(r.s();!(t=r.n()).done;){t.value.className=e}}catch(n){r.e(n)}finally{r.f()}return this.quadrilaterals}},{key:"render",value:function(){(0,a.unreachable)("Abstract method `AnnotationElement.render` called")}},{key:"_getElementsByName",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[]
if(this._fieldObjects){var n=this._fieldObjects[e]
if(n){var i,o=_(n)
try{for(o.s();!(i=o.n()).done;){var s=i.value,l=s.page,u=s.id,c=s.exportValues
if(-1!==l&&u!==t){var h="string"==typeof c?c:null,d=document.getElementById(u)
!d||T.has(d)?r.push({id:u,exportValue:h,domElement:d}):(0,a.warn)("_getElementsByName - element not allowed: ".concat(u))}}}catch(g){o.e(g)}finally{o.f()}}return r}var f,p=_(document.getElementsByName(e))
try{for(p.s();!(f=p.n()).done;){var v=f.value,y=v.id,m=v.exportValue
y!==t&&(T.has(v)&&r.push({id:y,exportValue:m,domElement:v}))}}catch(g){p.e(g)}finally{p.f()}return r}}],[{key:"platform",get:function(){var e="undefined"!=typeof navigator?navigator.platform:""
return(0,a.shadow)(this,"platform",{isWin:e.includes("Win"),isMac:e.includes("Mac")})}}]),e}(),R=function(e){p(r,e)
var t=y(r)
function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
x(this,r)
var a=!!(e.data.url||e.data.dest||e.data.action||e.data.isTooltipOnly||e.data.resetForm||e.data.actions&&(e.data.actions.Action||e.data.actions["Mouse Up"]||e.data.actions["Mouse Down"]))
return t.call(this,e,{isRenderable:a,ignoreBorder:!(null==n||!n.ignoreBorder),createQuadrilaterals:!0})}return C(r,[{key:"render",value:function(){var e,t=this.data,r=this.linkService,n=document.createElement("a")
if(t.url)r.addLinkAttributes||(0,a.warn)("LinkAnnotationElement.render - missing `addLinkAttributes`-method on the `linkService`-instance."),null===(e=r.addLinkAttributes)||void 0===e||e.call(r,n,t.url,t.newWindow)
else if(t.action)this._bindNamedAction(n,t.action)
else if(t.dest)this._bindLink(n,t.dest)
else{var i=!1
t.actions&&(t.actions.Action||t.actions["Mouse Up"]||t.actions["Mouse Down"])&&this.enableScripting&&this.hasJSActions&&(i=!0,this._bindJSAction(n,t)),t.resetForm?this._bindResetFormAction(n,t.resetForm):i||this._bindLink(n,"")}return this.quadrilaterals?this._renderQuadrilaterals("linkAnnotation").map((function(e,t){var r=0===t?n:n.cloneNode()
return e.appendChild(r),e})):(this.container.className="linkAnnotation",this.container.appendChild(n),this.container)}},{key:"_bindLink",value:function(e,t){var r=this
e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.goToDestination(t),!1},(t||""===t)&&(e.className="internalLink")}},{key:"_bindNamedAction",value:function(e,t){var r=this
e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}},{key:"_bindJSAction",value:function(e,t){var r=this
e.href=this.linkService.getAnchorUrl("")
for(var n=new Map([["Action","onclick"],["Mouse Up","onmouseup"],["Mouse Down","onmousedown"]]),a=function(){var a=o[i],s=n.get(a)
if(!s)return"continue"
e[s]=function(){var e
return null===(e=r.linkService.eventBus)||void 0===e||e.dispatch("dispatcheventinsandbox",{source:r,detail:{id:t.id,name:a}}),!1}},i=0,o=Object.keys(t.actions);i<o.length;i++)a()
e.onclick||(e.onclick=function(){return!1}),e.className="internalLink"}},{key:"_bindResetFormAction",value:function(e,t){var r=this,n=e.onclick
if(n||(e.href=this.linkService.getAnchorUrl("")),e.className="internalLink",!this._fieldObjects)return(0,a.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'),void(n||(e.onclick=function(){return!1}))
e.onclick=function(){n&&n()
var e=t.fields,a=t.refs,i=t.include,o=[]
if(0!==e.length||0!==a.length){var s,l=new Set(a),u=_(e)
try{for(u.s();!(s=u.n()).done;){var c,h=s.value,d=_(r._fieldObjects[h]||[])
try{for(d.s();!(c=d.n()).done;){var p=c.value.id
l.add(p)}}catch(j){d.e(j)}finally{d.f()}}}catch(j){u.e(j)}finally{u.f()}for(var v=0,y=Object.values(r._fieldObjects);v<y.length;v++){var m,g=_(y[v])
try{for(g.s();!(m=g.n()).done;){var b=m.value
l.has(b.id)===i&&o.push(b)}}catch(j){g.e(j)}finally{g.f()}}}else for(var A=0,k=Object.values(r._fieldObjects);A<k.length;A++){var S=k[A]
o.push.apply(o,f(S))}for(var x,w=r.annotationStorage,C=[],P=0,E=o;P<E.length;P++){var O=E[P],F=O.id
switch(C.push(F),O.type){case"text":var R=O.defaultValue||""
w.setValue(F,{value:R,valueAsString:R})
break
case"checkbox":case"radiobutton":var M=O.defaultValue===O.exportValues
w.setValue(F,{value:M})
break
case"combobox":case"listbox":var I=O.defaultValue||""
w.setValue(F,{value:I})
break
default:continue}var D=document.getElementById(F)
D&&T.has(D)&&D.dispatchEvent(new Event("resetform"))}r.enableScripting&&(null===(x=r.linkService.eventBus)||void 0===x||x.dispatch("dispatcheventinsandbox",{source:r,detail:{id:"app",ids:C,name:"ResetForm"}}))
return!1}}}]),r}(F),M=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o})}return C(r,[{key:"render",value:function(){this.container.className="textAnnotation"
var e=document.createElement("img")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(e,this.data),this.container.appendChild(e),this.container}}]),r}(F),I=function(e){p(r,e)
var t=y(r)
function r(){return x(this,r),t.apply(this,arguments)}return C(r,[{key:"render",value:function(){return this.data.alternativeText&&(this.container.title=this.data.alternativeText),this.container}},{key:"_getKeyModifier",value:function(e){var t=F.platform,r=t.isWin,n=t.isMac
return r&&e.ctrlKey||n&&e.metaKey}},{key:"_setEventListener",value:function(e,t,r,n){var a=this
t.includes("mouse")?e.addEventListener(t,(function(e){var t
null===(t=a.linkService.eventBus)||void 0===t||t.dispatch("dispatcheventinsandbox",{source:a,detail:{id:a.data.id,name:r,value:n(e),shift:e.shiftKey,modifier:a._getKeyModifier(e)}})})):e.addEventListener(t,(function(e){var t
null===(t=a.linkService.eventBus)||void 0===t||t.dispatch("dispatcheventinsandbox",{source:a,detail:{id:a.data.id,name:r,value:n(e)}})}))}},{key:"_setEventListeners",value:function(e,t,r){var n,a=_(t)
try{for(a.s();!(n=a.n()).done;){var i,o=A(n.value,2),s=o[0],l=o[1];("Action"===l||null!==(i=this.data.actions)&&void 0!==i&&i[l])&&this._setEventListener(e,s,l,r)}}catch(u){a.e(u)}finally{a.f()}}},{key:"_setBackgroundColor",value:function(e){var t=this.data.backgroundColor||null
e.style.backgroundColor=null===t?"transparent":a.Util.makeHexColor(t[0],t[1],t[2])}},{key:"_dispatchEventFromSandbox",value:function(e,t){for(var r=this,n=function(e,t,r){var n=r.detail[e]
r.target.style[t]=s.ColorConverters["".concat(n[0],"_HTML")](n.slice(1))},a={display:function(e){var t=e.detail.display%2==1
e.target.style.visibility=t?"hidden":"visible",r.annotationStorage.setValue(r.data.id,{hidden:t,print:0===e.detail.display||3===e.detail.display})},print:function(e){r.annotationStorage.setValue(r.data.id,{print:e.detail.print})},hidden:function(e){e.target.style.visibility=e.detail.hidden?"hidden":"visible",r.annotationStorage.setValue(r.data.id,{hidden:e.detail.hidden})},focus:function(e){setTimeout((function(){return e.target.focus({preventScroll:!1})}),0)},userName:function(e){e.target.title=e.detail.userName},readonly:function(e){e.detail.readonly?e.target.setAttribute("readonly",""):e.target.removeAttribute("readonly")},required:function(e){e.detail.required?e.target.setAttribute("required",""):e.target.removeAttribute("required")},bgColor:function(e){n("bgColor","backgroundColor",e)},fillColor:function(e){n("fillColor","backgroundColor",e)},fgColor:function(e){n("fgColor","color",e)},textColor:function(e){n("textColor","color",e)},borderColor:function(e){n("borderColor","borderColor",e)},strokeColor:function(e){n("strokeColor","borderColor",e)}},i=0,o=Object.keys(t.detail);i<o.length;i++){var l=o[i],u=e[l]||a[l]
u&&u(t)}}}]),r}(F),D=function(e){p(r,e)
var t=y(r)
function r(e){x(this,r)
var n=e.renderForms||!e.data.hasAppearance&&!!e.data.fieldValue
return t.call(this,e,{isRenderable:n})}return C(r,[{key:"setPropertyOnSiblings",value:function(e,t,r,n){var a,i=this.annotationStorage,o=_(this._getElementsByName(e.name,e.id))
try{for(o.s();!(a=o.n()).done;){var s=a.value
s.domElement&&(s.domElement[t]=r),i.setValue(s.id,d({},n,r))}}catch(l){o.e(l)}finally{o.f()}}},{key:"render",value:function(){var e=this,t=this.annotationStorage,r=this.data.id
this.container.className="textWidgetAnnotation"
var n=null
if(this.renderForms){var a=t.getValue(r,{value:this.data.fieldValue,valueAsString:this.data.fieldValue}),i=a.valueAsString||a.value||"",o={userValue:null,formattedValue:null}
this.data.multiLine?(n=document.createElement("textarea")).textContent=i:((n=document.createElement("input")).type="text",n.setAttribute("value",i)),T.add(n),n.disabled=this.data.readOnly,n.name=this.data.fieldName,n.tabIndex=P,o.userValue=i,n.setAttribute("id",r),n.addEventListener("input",(function(a){t.setValue(r,{value:a.target.value}),e.setPropertyOnSiblings(n,"value",a.target.value,"value")})),n.addEventListener("resetform",(function(t){var r=e.data.defaultFieldValue||""
n.value=o.userValue=r,delete o.formattedValue}))
var s=function(e){o.formattedValue&&(e.target.value=o.formattedValue),e.target.scrollLeft=0}
if(this.enableScripting&&this.hasJSActions){var l
n.addEventListener("focus",(function(e){o.userValue&&(e.target.value=o.userValue)})),n.addEventListener("updatefromsandbox",(function(n){var a={value:function(e){o.userValue=e.detail.value||"",t.setValue(r,{value:o.userValue.toString()}),o.formattedValue||(e.target.value=o.userValue)},valueAsString:function(e){o.formattedValue=e.detail.valueAsString||"",e.target!==document.activeElement&&(e.target.value=o.formattedValue),t.setValue(r,{formattedValue:o.formattedValue})},selRange:function(e){var t=A(e.detail.selRange,2),r=t[0],n=t[1]
r>=0&&n<e.target.value.length&&e.target.setSelectionRange(r,n)}}
e._dispatchEventFromSandbox(a,n)})),n.addEventListener("keydown",(function(t){var n,a=-1
"Escape"===t.key?a=0:"Enter"===t.key?a=2:"Tab"===t.key&&(a=3),-1!==a&&(o.userValue=t.target.value,null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:t.target.value,willCommit:!0,commitKey:a,selStart:t.target.selectionStart,selEnd:t.target.selectionEnd}}))}))
var u=s
s=null,n.addEventListener("blur",(function(t){var n;(o.userValue=t.target.value,e._mouseState.isDown)&&(null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:t.target.value,willCommit:!0,commitKey:1,selStart:t.target.selectionStart,selEnd:t.target.selectionEnd}}))
u(t)})),null!==(l=this.data.actions)&&void 0!==l&&l.Keystroke&&n.addEventListener("beforeinput",(function(t){var n
o.formattedValue=""
var a=t.data,i=t.target,s=i.value,l=i.selectionStart,u=i.selectionEnd
null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:s,change:a,willCommit:!1,selStart:l,selEnd:u}})})),this._setEventListeners(n,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],(function(e){return e.target.value}))}if(s&&n.addEventListener("blur",s),null!==this.data.maxLen&&(n.maxLength=this.data.maxLen),this.data.comb){var c=(this.data.rect[2]-this.data.rect[0])/this.data.maxLen
n.classList.add("comb"),n.style.letterSpacing="calc(".concat(c,"px - 1ch)")}}else(n=document.createElement("div")).textContent=this.data.fieldValue,n.style.verticalAlign="middle",n.style.display="table-cell"
return this._setTextStyle(n),this._setBackgroundColor(n),this.container.appendChild(n),this.container}},{key:"_setTextStyle",value:function(e){var t=this.data.defaultAppearanceData,r=t.fontSize,n=t.fontColor,i=e.style
r&&(i.fontSize="".concat(r,"px")),i.color=a.Util.makeHexColor(n[0],n[1],n[2]),null!==this.data.textAlignment&&(i.textAlign=["left","center","right"][this.data.textAlignment])}}]),r}(I),j=function(e){p(r,e)
var t=y(r)
function r(e){return x(this,r),t.call(this,e,{isRenderable:e.renderForms})}return C(r,[{key:"render",value:function(){var e=this,t=this.annotationStorage,r=this.data,n=r.id,a=t.getValue(n,{value:r.exportValue===r.fieldValue}).value
"string"==typeof a&&(a="Off"!==a,t.setValue(n,{value:a})),this.container.className="buttonWidgetAnnotation checkBox"
var i=document.createElement("input")
return T.add(i),i.disabled=r.readOnly,i.type="checkbox",i.name=r.fieldName,a&&i.setAttribute("checked",!0),i.setAttribute("id",n),i.setAttribute("exportValue",r.exportValue),i.tabIndex=P,i.addEventListener("change",(function(a){var i,o=a.target,s=o.name,l=o.checked,u=_(e._getElementsByName(s,n))
try{for(u.s();!(i=u.n()).done;){var c=i.value,h=l&&c.exportValue===r.exportValue
c.domElement&&(c.domElement.checked=h),t.setValue(c.id,{value:h})}}catch(d){u.e(d)}finally{u.f()}t.setValue(n,{value:l})})),i.addEventListener("resetform",(function(e){var t=r.defaultFieldValue||"Off"
e.target.checked=t===r.exportValue})),this.enableScripting&&this.hasJSActions&&(i.addEventListener("updatefromsandbox",(function(r){var a={value:function(e){e.target.checked="Off"!==e.detail.value,t.setValue(n,{value:e.target.checked})}}
e._dispatchEventFromSandbox(a,r)})),this._setEventListeners(i,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],(function(e){return e.target.checked}))),this._setBackgroundColor(i),this.container.appendChild(i),this.container}}]),r}(I),L=function(e){p(r,e)
var t=y(r)
function r(e){return x(this,r),t.call(this,e,{isRenderable:e.renderForms})}return C(r,[{key:"render",value:function(){var e=this
this.container.className="buttonWidgetAnnotation radioButton"
var t=this.annotationStorage,r=this.data,n=r.id,a=t.getValue(n,{value:r.fieldValue===r.buttonValue}).value
"string"==typeof a&&(a=a!==r.buttonValue,t.setValue(n,{value:a}))
var i=document.createElement("input")
if(T.add(i),i.disabled=r.readOnly,i.type="radio",i.name=r.fieldName,a&&i.setAttribute("checked",!0),i.setAttribute("id",n),i.tabIndex=P,i.addEventListener("change",(function(r){var a,i=r.target,o=i.name,s=i.checked,l=_(e._getElementsByName(o,n))
try{for(l.s();!(a=l.n()).done;){var u=a.value
t.setValue(u.id,{value:!1})}}catch(c){l.e(c)}finally{l.f()}t.setValue(n,{value:s})})),i.addEventListener("resetform",(function(e){var t=r.defaultFieldValue
e.target.checked=null!=t&&t===r.buttonValue})),this.enableScripting&&this.hasJSActions){var o=r.buttonValue
i.addEventListener("updatefromsandbox",(function(r){var a={value:function(r){var a,i=o===r.detail.value,s=_(e._getElementsByName(r.target.name))
try{for(s.s();!(a=s.n()).done;){var l=a.value,u=i&&l.id===n
l.domElement&&(l.domElement.checked=u),t.setValue(l.id,{value:u})}}catch(c){s.e(c)}finally{s.f()}}}
e._dispatchEventFromSandbox(a,r)})),this._setEventListeners(i,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],(function(e){return e.target.checked}))}return this._setBackgroundColor(i),this.container.appendChild(i),this.container}}]),r}(I),N=function(e){p(r,e)
var t=y(r)
function r(e){return x(this,r),t.call(this,e,{ignoreBorder:e.data.hasAppearance})}return C(r,[{key:"render",value:function(){var e=c(b(r.prototype),"render",this).call(this)
return e.className="buttonWidgetAnnotation pushButton",this.data.alternativeText&&(e.title=this.data.alternativeText),e}}]),r}(R),U=function(e){p(r,e)
var t=y(r)
function r(e){return x(this,r),t.call(this,e,{isRenderable:e.renderForms})}return C(r,[{key:"render",value:function(){var e=this
this.container.className="choiceWidgetAnnotation"
var t=this.annotationStorage,r=this.data.id
t.getValue(r,{value:this.data.fieldValue.length>0?this.data.fieldValue[0]:void 0})
var n=this.data.defaultAppearanceData.fontSize
n||(n=9)
var a="calc(".concat(n,"px * var(--zoom-factor))"),i=document.createElement("select")
T.add(i),i.disabled=this.data.readOnly,i.name=this.data.fieldName,i.setAttribute("id",r),i.tabIndex=P,i.style.fontSize="".concat(n,"px"),this.data.combo||(i.size=this.data.options.length,this.data.multiSelect&&(i.multiple=!0)),i.addEventListener("resetform",(function(t){var r,n=e.data.defaultFieldValue,a=_(i.options)
try{for(a.s();!(r=a.n()).done;){var o=r.value
o.selected=o.value===n}}catch(s){a.e(s)}finally{a.f()}}))
var o,s=_(this.data.options)
try{for(s.s();!(o=s.n()).done;){var l=o.value,u=document.createElement("option")
u.textContent=l.displayValue,u.value=l.exportValue,this.data.combo&&(u.style.fontSize=a),this.data.fieldValue.includes(l.exportValue)&&u.setAttribute("selected",!0),i.appendChild(u)}}catch(d){s.e(d)}finally{s.f()}var c=function(e,t){var r=t?"value":"textContent",n=e.target.options
return e.target.multiple?Array.prototype.filter.call(n,(function(e){return e.selected})).map((function(e){return e[r]})):-1===n.selectedIndex?null:n[n.selectedIndex][r]},h=function(e){var t=e.target.options
return Array.prototype.map.call(t,(function(e){return{displayValue:e.textContent,exportValue:e.value}}))}
return this.enableScripting&&this.hasJSActions?(i.addEventListener("updatefromsandbox",(function(n){var a={value:function(e){var n,a=e.detail.value,o=new Set(Array.isArray(a)?a:[a]),s=_(i.options)
try{for(s.s();!(n=s.n()).done;){var l=n.value
l.selected=o.has(l.value)}}catch(d){s.e(d)}finally{s.f()}t.setValue(r,{value:c(e,!0)})},multipleSelection:function(e){i.multiple=!0},remove:function(e){var n=i.options,a=e.detail.remove
if(n[a].selected=!1,i.remove(a),n.length>0){var o=Array.prototype.findIndex.call(n,(function(e){return e.selected}));-1===o&&(n[0].selected=!0)}t.setValue(r,{value:c(e,!0),items:h(e)})},clear:function(e){for(;0!==i.length;)i.remove(0)
t.setValue(r,{value:null,items:[]})},insert:function(e){var n=e.detail.insert,a=n.index,o=n.displayValue,s=n.exportValue,l=document.createElement("option")
l.textContent=o,l.value=s,i.insertBefore(l,i.children[a]),t.setValue(r,{value:c(e,!0),items:h(e)})},items:function(e){for(var n=e.detail.items;0!==i.length;)i.remove(0)
var a,o=_(n)
try{for(o.s();!(a=o.n()).done;){var s=a.value,l=s.displayValue,u=s.exportValue,f=document.createElement("option")
f.textContent=l,f.value=u,i.appendChild(f)}}catch(d){o.e(d)}finally{o.f()}i.options.length>0&&(i.options[0].selected=!0),t.setValue(r,{value:c(e,!0),items:h(e)})},indices:function(e){var n,a=new Set(e.detail.indices),i=_(e.target.options)
try{for(i.s();!(n=i.n()).done;){var o=n.value
o.selected=a.has(o.index)}}catch(d){i.e(d)}finally{i.f()}t.setValue(r,{value:c(e,!0)})},editable:function(e){e.target.disabled=!e.detail.editable}}
e._dispatchEventFromSandbox(a,n)})),i.addEventListener("input",(function(n){var a,i=c(n,!0),o=c(n,!1)
t.setValue(r,{value:i}),null===(a=e.linkService.eventBus)||void 0===a||a.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:o,changeEx:i,willCommit:!0,commitKey:1,keyDown:!1}})})),this._setEventListeners(i,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"],["input","Action"]],(function(e){return e.target.checked}))):i.addEventListener("input",(function(e){t.setValue(r,{value:c(e)})})),this._setBackgroundColor(i),this.container.appendChild(i),this.container}}]),r}(I),B=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o})}return C(r,[{key:"render",value:function(){if(this.container.className="popupAnnotation",["Line","Square","Circle","PolyLine","Polygon","Ink"].includes(this.data.parentType))return this.container
var e='[data-annotation-id="'.concat(this.data.parentId,'"]'),t=this.layer.querySelectorAll(e)
if(0===t.length)return this.container
var r=new W({container:this.container,trigger:Array.from(t),color:this.data.color,titleObj:this.data.titleObj,modificationDate:this.data.modificationDate,contentsObj:this.data.contentsObj,richText:this.data.richText}),n=this.page,i=a.Util.normalizeRect([this.data.parentRect[0],n.view[3]-this.data.parentRect[1]+n.view[1],this.data.parentRect[2],n.view[3]-this.data.parentRect[3]+n.view[1]]),o=i[0]+this.data.parentRect[2]-this.data.parentRect[0],s=i[1]
return this.container.style.transformOrigin="".concat(-o,"px ").concat(-s,"px"),this.container.style.left="".concat(o,"px"),this.container.style.top="".concat(s,"px"),this.container.appendChild(r.render()),this.container}}]),r}(F),W=function(){function e(t){x(this,e),this.container=t.container,this.trigger=t.trigger,this.color=t.color,this.titleObj=t.titleObj,this.modificationDate=t.modificationDate,this.contentsObj=t.contentsObj,this.richText=t.richText,this.hideWrapper=t.hideWrapper||!1,this.pinned=!1}return C(e,[{key:"render",value:function(){var e,t,r=document.createElement("div")
r.className="popupWrapper",this.hideElement=this.hideWrapper?r:this.container,this.hideElement.hidden=!0
var n=document.createElement("div")
n.className="popup"
var o=this.color
if(o){var s=.7*(255-o[0])+o[0],u=.7*(255-o[1])+o[1],c=.7*(255-o[2])+o[2]
n.style.backgroundColor=a.Util.makeHexColor(0|s,0|u,0|c)}var h=document.createElement("h1")
h.dir=this.titleObj.dir,h.textContent=this.titleObj.str,n.appendChild(h)
var d=i.PDFDateString.toDateObject(this.modificationDate)
if(d){var f=document.createElement("span")
f.className="popupDate",f.textContent="{{date}}, {{time}}",f.dataset.l10nId="annotation_date_string",f.dataset.l10nArgs=JSON.stringify({date:d.toLocaleDateString(),time:d.toLocaleTimeString()}),n.appendChild(f)}if(null===(e=this.richText)||void 0===e||!e.str||null!==(t=this.contentsObj)&&void 0!==t&&t.str&&this.contentsObj.str!==this.richText.str){var p=this._formatContents(this.contentsObj)
n.appendChild(p)}else l.XfaLayer.render({xfaHtml:this.richText.html,intent:"richText",div:n}),n.lastChild.className="richText popupContent"
Array.isArray(this.trigger)||(this.trigger=[this.trigger])
var v,y=_(this.trigger)
try{for(y.s();!(v=y.n()).done;){var m=v.value
m.addEventListener("click",this._toggle.bind(this)),m.addEventListener("mouseover",this._show.bind(this,!1)),m.addEventListener("mouseout",this._hide.bind(this,!1))}}catch(g){y.e(g)}finally{y.f()}return n.addEventListener("click",this._hide.bind(this,!0)),r.appendChild(n),r}},{key:"_formatContents",value:function(e){var t=e.str,r=e.dir,n=document.createElement("p")
n.className="popupContent",n.dir=r
for(var a=t.split(/(?:\r\n?|\n)/),i=0,o=a.length;i<o;++i){var s=a[i]
n.appendChild(document.createTextNode(s)),i<o-1&&n.appendChild(document.createElement("br"))}return n}},{key:"_toggle",value:function(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e&&(this.pinned=!0),this.hideElement.hidden&&(this.hideElement.hidden=!1,this.container.style.zIndex+=1)}},{key:"_hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
e&&(this.pinned=!1),this.hideElement.hidden||this.pinned||(this.hideElement.hidden=!0,this.container.style.zIndex-=1)}}]),e}(),G=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0})}return C(r,[{key:"render",value:function(){return this.container.className="freeTextAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}]),r}(F),q=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0})}return C(r,[{key:"render",value:function(){this.container.className="lineAnnotation"
var e=this.data,t=E(e.rect),r=t.width,n=t.height,a=this.svgFactory.create(r,n),i=this.svgFactory.createElement("svg:line")
return i.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),i.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),i.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),i.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),i.setAttribute("stroke-width",e.borderStyle.width||1),i.setAttribute("stroke","transparent"),i.setAttribute("fill","transparent"),a.appendChild(i),this.container.append(a),this._createPopup(i,e),this.container}}]),r}(F),z=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0})}return C(r,[{key:"render",value:function(){this.container.className="squareAnnotation"
var e=this.data,t=E(e.rect),r=t.width,n=t.height,a=this.svgFactory.create(r,n),i=e.borderStyle.width,o=this.svgFactory.createElement("svg:rect")
return o.setAttribute("x",i/2),o.setAttribute("y",i/2),o.setAttribute("width",r-i),o.setAttribute("height",n-i),o.setAttribute("stroke-width",i||1),o.setAttribute("stroke","transparent"),o.setAttribute("fill","transparent"),a.appendChild(o),this.container.append(a),this._createPopup(o,e),this.container}}]),r}(F),H=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0})}return C(r,[{key:"render",value:function(){this.container.className="circleAnnotation"
var e=this.data,t=E(e.rect),r=t.width,n=t.height,a=this.svgFactory.create(r,n),i=e.borderStyle.width,o=this.svgFactory.createElement("svg:ellipse")
return o.setAttribute("cx",r/2),o.setAttribute("cy",n/2),o.setAttribute("rx",r/2-i/2),o.setAttribute("ry",n/2-i/2),o.setAttribute("stroke-width",i||1),o.setAttribute("stroke","transparent"),o.setAttribute("fill","transparent"),a.appendChild(o),this.container.append(a),this._createPopup(o,e),this.container}}]),r}(F),V=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i,o
x(this,r)
var s=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return(o=t.call(this,e,{isRenderable:s,ignoreBorder:!0})).containerClassName="polylineAnnotation",o.svgElementName="svg:polyline",o}return C(r,[{key:"render",value:function(){this.container.className=this.containerClassName
var e,t=this.data,r=E(t.rect),n=r.width,a=r.height,i=this.svgFactory.create(n,a),o=[],s=_(t.vertices)
try{for(s.s();!(e=s.n()).done;){var l=e.value,u=l.x-t.rect[0],c=t.rect[3]-l.y
o.push(u+","+c)}}catch(d){s.e(d)}finally{s.f()}o=o.join(" ")
var h=this.svgFactory.createElement(this.svgElementName)
return h.setAttribute("points",o),h.setAttribute("stroke-width",t.borderStyle.width||1),h.setAttribute("stroke","transparent"),h.setAttribute("fill","transparent"),i.appendChild(h),this.container.append(i),this._createPopup(h,t),this.container}}]),r}(F),X=function(e){p(r,e)
var t=y(r)
function r(e){var n
return x(this,r),(n=t.call(this,e)).containerClassName="polygonAnnotation",n.svgElementName="svg:polygon",n}return C(r)}(V),Y=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0})}return C(r,[{key:"render",value:function(){return this.container.className="caretAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}]),r}(F),K=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i,o
x(this,r)
var s=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return(o=t.call(this,e,{isRenderable:s,ignoreBorder:!0})).containerClassName="inkAnnotation",o.svgElementName="svg:polyline",o}return C(r,[{key:"render",value:function(){this.container.className=this.containerClassName
var e,t=this.data,r=E(t.rect),n=r.width,a=r.height,i=this.svgFactory.create(n,a),o=_(t.inkLists)
try{for(o.s();!(e=o.n()).done;){var s,l=e.value,u=[],c=_(l)
try{for(c.s();!(s=c.n()).done;){var h=s.value,d=h.x-t.rect[0],f=t.rect[3]-h.y
u.push("".concat(d,",").concat(f))}}catch(v){c.e(v)}finally{c.f()}u=u.join(" ")
var p=this.svgFactory.createElement(this.svgElementName)
p.setAttribute("points",u),p.setAttribute("stroke-width",t.borderStyle.width||1),p.setAttribute("stroke","transparent"),p.setAttribute("fill","transparent"),this._createPopup(p,t),i.appendChild(p)}}catch(v){o.e(v)}finally{o.f()}return this.container.append(i),this.container}}]),r}(F),J=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0,createQuadrilaterals:!0})}return C(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("highlightAnnotation"):(this.container.className="highlightAnnotation",this.container)}}]),r}(F),Q=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0,createQuadrilaterals:!0})}return C(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("underlineAnnotation"):(this.container.className="underlineAnnotation",this.container)}}]),r}(F),$=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0,createQuadrilaterals:!0})}return C(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("squigglyAnnotation"):(this.container.className="squigglyAnnotation",this.container)}}]),r}(F),Z=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0,createQuadrilaterals:!0})}return C(r,[{key:"render",value:function(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("strikeoutAnnotation"):(this.container.className="strikeoutAnnotation",this.container)}}]),r}(F),ee=function(e){p(r,e)
var t=y(r)
function r(e){var n,a,i
x(this,r)
var o=!!(e.data.hasPopup||null!==(n=e.data.titleObj)&&void 0!==n&&n.str||null!==(a=e.data.contentsObj)&&void 0!==a&&a.str||null!==(i=e.data.richText)&&void 0!==i&&i.str)
return t.call(this,e,{isRenderable:o,ignoreBorder:!0})}return C(r,[{key:"render",value:function(){return this.container.className="stampAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}]),r}(F),te=function(e){p(r,e)
var t=y(r)
function r(e){var n,o
x(this,r)
var s=(o=t.call(this,e,{isRenderable:!0})).data.file,l=s.filename,u=s.content
return o.filename=(0,i.getFilenameFromUrl)(l),o.content=u,null===(n=o.linkService.eventBus)||void 0===n||n.dispatch("fileattachmentannotation",{source:g(o),id:(0,a.stringToPDFString)(l),filename:l,content:u}),o}return C(r,[{key:"render",value:function(){var e,t
this.container.className="fileAttachmentAnnotation"
var r=document.createElement("div")
return r.style.height=this.container.style.height,r.style.width=this.container.style.width,r.addEventListener("dblclick",this._download.bind(this)),!this.data.hasPopup&&(null!==(e=this.data.titleObj)&&void 0!==e&&e.str||null!==(t=this.data.contentsObj)&&void 0!==t&&t.str||this.data.richText)&&this._createPopup(r,this.data),this.container.appendChild(r),this.container}},{key:"_download",value:function(){var e
null===(e=this.downloadManager)||void 0===e||e.openOrDownloadData(this.container,this.content,this.filename)}}]),r}(F),re=function(){function e(){x(this,e)}return C(e,null,[{key:"render",value:function(t){var r,n=[],s=[],l=_(t.annotations)
try{for(l.s();!(r=l.n()).done;){var c=r.value
if(c){var h=E(c.rect),d=h.width,f=h.height
d<=0||f<=0||(c.annotationType!==a.AnnotationType.POPUP?n.push(c):s.push(c))}}}catch(x){l.e(x)}finally{l.f()}s.length&&n.push.apply(n,s)
for(var p=t.div,v=0,y=n;v<y.length;v++){var m=y[v],g=O.create({data:m,layer:p,page:t.page,viewport:t.viewport,linkService:t.linkService,downloadManager:t.downloadManager,imageResourcesPath:t.imageResourcesPath||"",renderForms:!1!==t.renderForms,svgFactory:new i.DOMSVGFactory,annotationStorage:t.annotationStorage||new o.AnnotationStorage,enableScripting:t.enableScripting,hasJSActions:t.hasJSActions,fieldObjects:t.fieldObjects,mouseState:t.mouseState||{isDown:!1}})
if(g.isRenderable){var b=g.render()
if(m.hidden&&(b.style.visibility="hidden"),Array.isArray(b)){var A,k=_(b)
try{for(k.s();!(A=k.n()).done;){var S=A.value
p.appendChild(S)}}catch(x){k.e(x)}finally{k.f()}}else g instanceof B?p.prepend(b):p.appendChild(b)}}u(this,e,ne).call(this,p,t.annotationCanvasMap)}},{key:"update",value:function(t){var r,n,i,o=t.page,s=t.viewport,l=t.annotations,c=t.annotationCanvasMap,h=t.div,d=s.transform,f="matrix(".concat(d.join(","),")"),p=_(l)
try{for(p.s();!(i=p.n()).done;){var v=i.value,y=h.querySelectorAll('[data-annotation-id="'.concat(v.id,'"]'))
if(y){var m,g=_(y)
try{for(g.s();!(m=g.n()).done;){var b=m.value
if(v.hasOwnCanvas){var A=a.Util.normalizeRect([v.rect[0],o.view[3]-v.rect[1]+o.view[1],v.rect[2],o.view[3]-v.rect[3]+o.view[1]])
if(!n){r=Math.abs(d[0]||d[1])
for(var k=d.slice(),S=0;S<4;S++)k[S]=Math.sign(k[S])
n="matrix(".concat(k.join(","),")")}var x=A[0]*r,w=A[1]*r
b.style.left="".concat(x,"px"),b.style.top="".concat(w,"px"),b.style.transformOrigin="".concat(-x,"px ").concat(-w,"px"),b.style.transform=n}else b.style.transform=f}}catch(C){g.e(C)}finally{g.f()}}}}catch(C){p.e(C)}finally{p.f()}u(this,e,ne).call(this,h,c),h.hidden=!1}}]),e}()
function ne(e,t){if(t){var r,n=_(t)
try{for(n.s();!(r=n.n()).done;){var a=A(r.value,2),i=a[0],o=a[1],s=e.querySelector('[data-annotation-id="'.concat(i,'"]'))
if(s){var l=s.firstChild
"CANVAS"===l.nodeName?s.replaceChild(o,l):s.insertBefore(o,l)}}}catch(u){n.e(u)}finally{n.f()}t.clear()}}t.AnnotationLayer=re},(e,t)=>{"use strict"
function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(e,t)||function(e,t){if(!e)return
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
return["G",.3*t[0]+.59*t[1]+.11*t[2]]}},{key:"RGB_HTML",value:function(e){var t=r(e,3),n=t[0],a=t[1],o=t[2],s=i(n),l=i(a),u=i(o)
return"#".concat(s).concat(l).concat(u)}},{key:"T_HTML",value:function(){return"#00000000"}},{key:"CMYK_RGB",value:function(e){var t=r(e,4),n=t[0],a=t[1],i=t[2],o=t[3]
return["RGB",1-Math.min(1,n+o),1-Math.min(1,i+o),1-Math.min(1,a+o)]}},{key:"CMYK_HTML",value:function(e){return this.RGB_HTML(this.CMYK_RGB(e))}},{key:"RGB_CMYK",value:function(e){var t=r(e,3),n=1-t[0],a=1-t[1],i=1-t[2]
return["CMYK",n,a,i,Math.min(n,a,i)]}}],(n=null)&&a(t.prototype,n),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()
t.ColorConverters=o},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.XfaLayer=void 0
var n=r(1),a=r(159)
function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=s(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function s(e,t){if(e){if("string"==typeof e)return l(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e)}var t,r,s
return t=e,s=[{key:"setupStorage",value:function(e,t,r,n,a){var i=n.getValue(t,{value:null})
switch(r.name){case"textarea":if(null!==i.value&&(e.textContent=i.value),"print"===a)break
e.addEventListener("input",(function(e){n.setValue(t,{value:e.target.value})}))
break
case"input":if("radio"===r.attributes.type||"checkbox"===r.attributes.type){if(i.value===r.attributes.xfaOn?e.setAttribute("checked",!0):i.value===r.attributes.xfaOff&&e.removeAttribute("checked"),"print"===a)break
e.addEventListener("change",(function(e){n.setValue(t,{value:e.target.checked?e.target.getAttribute("xfaOn"):e.target.getAttribute("xfaOff")})}))}else{if(null!==i.value&&e.setAttribute("value",i.value),"print"===a)break
e.addEventListener("input",(function(e){n.setValue(t,{value:e.target.value})}))}break
case"select":if(null!==i.value){var s,l=o(r.children)
try{for(l.s();!(s=l.n()).done;){var u=s.value
u.attributes.value===i.value&&(u.attributes.selected=!0)}}catch(c){l.e(c)}finally{l.f()}}e.addEventListener("input",(function(e){var r=e.target.options,a=-1===r.selectedIndex?"":r[r.selectedIndex].value
n.setValue(t,{value:a})}))}}},{key:"setAttributes",value:function(e){var t,r=e.html,a=e.element,o=e.storage,s=void 0===o?null:o,l=e.intent,u=e.linkService,c=a.attributes,h=r instanceof HTMLAnchorElement
"radio"===c.type&&(c.name="".concat(c.name,"-").concat(l))
for(var d=0,f=Object.entries(c);d<f.length;d++){var p=i(f[d],2),v=p[0],y=p[1]
if(null!=y&&"dataId"!==v)if("style"!==v)if("textContent"===v)r.textContent=y
else if("class"===v)y.length&&r.setAttribute(v,y.join(" "))
else{if(h&&("href"===v||"newWindow"===v))continue
r.setAttribute(v,y)}else Object.assign(r.style,y)}h&&(u.addLinkAttributes||(0,n.warn)("XfaLayer.setAttribute - missing `addLinkAttributes`-method on the `linkService`-instance."),null===(t=u.addLinkAttributes)||void 0===t||t.call(u,r,c.href,c.newWindow)),s&&c.dataId&&this.setupStorage(r,c.dataId,a,s)}},{key:"render",value:function(e){var t=e.annotationStorage,r=e.linkService,n=e.xfaHtml,s=e.intent||"display",l=document.createElement(n.name)
n.attributes&&this.setAttributes({html:l,element:n,intent:s,linkService:r})
var u=[[n,-1,l]],c=e.div
if(c.appendChild(l),e.viewport){var h="matrix(".concat(e.viewport.transform.join(","),")")
c.style.transform=h}"richText"!==s&&c.setAttribute("class","xfaLayer xfaFont")
for(var d=[];u.length>0;){var f,p=i(u[u.length-1],3),v=p[0],y=p[1],m=p[2]
if(y+1!==v.children.length){var g=v.children[++u[u.length-1][1]]
if(null!==g){var b=g.name
if("#text"!==b){var _=void 0
if(_=null!=g&&null!==(f=g.attributes)&&void 0!==f&&f.xmlns?document.createElementNS(g.attributes.xmlns,b):document.createElement(b),m.appendChild(_),g.attributes&&this.setAttributes({html:_,element:g,storage:t,intent:s,linkService:r}),g.children&&g.children.length>0)u.push([g,-1,_])
else if(g.value){var A=document.createTextNode(g.value)
a.XfaText.shouldBuildText(b)&&d.push(A),_.appendChild(A)}}else{var k=document.createTextNode(g.value)
d.push(k),m.appendChild(k)}}}else u.pop()}var S,x=o(c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
try{for(x.s();!(S=x.n()).done;)S.value.setAttribute("readOnly",!0)}catch(w){x.e(w)}finally{x.f()}return{textDivs:d}}},{key:"update",value:function(e){var t="matrix(".concat(e.viewport.transform.join(","),")")
e.div.style.transform=t,e.div.hidden=!1}}],(r=null)&&u(t.prototype,r),s&&u(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}()
t.XfaLayer=c},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.renderTextLayer=function(e){var t=new v({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection})
return t._render(e.timeout),t}
var n=r(1)
function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}var s=30,l=new Map,u=/^\s+$/g
function c(e,t,r,a){var i=document.createElement("span"),o=e._enhanceTextSelection?{angle:0,canvasWidth:0,hasText:""!==t.str,hasEOL:t.hasEOL,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1}:{angle:0,canvasWidth:0,hasText:""!==t.str,hasEOL:t.hasEOL}
e._textDivs.push(i)
var c=n.Util.transform(e._viewport.transform,t.transform),h=Math.atan2(c[1],c[0]),d=r[t.fontName]
d.vertical&&(h+=Math.PI/2)
var f,p,v=Math.hypot(c[2],c[3]),y=v*function(e,t){var r=l.get(e)
if(r)return r
t.save(),t.font="".concat(s,"px ").concat(e)
var n=t.measureText(""),a=n.fontBoundingBoxAscent,i=Math.abs(n.fontBoundingBoxDescent)
if(a){t.restore()
var o=a/(a+i)
return l.set(e,o),o}t.strokeStyle="red",t.clearRect(0,0,s,s),t.strokeText("g",0,0)
var u=t.getImageData(0,0,s,s).data
i=0
for(var c=u.length-1-3;c>=0;c-=4)if(u[c]>0){i=Math.ceil(c/4/s)
break}t.clearRect(0,0,s,s),t.strokeText("A",0,s),a=0
for(var h=0,d=(u=t.getImageData(0,0,s,s).data).length;h<d;h+=4)if(u[h]>0){a=s-Math.floor(h/4/s)
break}if(t.restore(),a){var f=a/(a+i)
return l.set(e,f),f}return l.set(e,.8),.8}(d.fontFamily,a)
0===h?(f=c[4],p=c[5]-y):(f=c[4]+y*Math.sin(h),p=c[5]-y*Math.cos(h)),i.style.left="".concat(f,"px"),i.style.top="".concat(p,"px"),i.style.fontSize="".concat(v,"px"),i.style.fontFamily=d.fontFamily,i.setAttribute("role","presentation"),i.textContent=t.str,i.dir=t.dir,e._fontInspectorEnabled&&(i.dataset.fontName=t.fontName),0!==h&&(o.angle=h*(180/Math.PI))
var m=!1
if(t.str.length>1||e._enhanceTextSelection&&u.test(t.str))m=!0
else if(" "!==t.str&&t.transform[0]!==t.transform[3]){var g=Math.abs(t.transform[0]),b=Math.abs(t.transform[3])
g!==b&&Math.max(g,b)/Math.min(g,b)>1.5&&(m=!0)}if(m&&(d.vertical?o.canvasWidth=t.height*e._viewport.scale:o.canvasWidth=t.width*e._viewport.scale),e._textDivProperties.set(i,o),e._textContentStream&&e._layoutText(i),e._enhanceTextSelection&&o.hasText){var _=1,A=0
0!==h&&(_=Math.cos(h),A=Math.sin(h))
var k,S,x=(d.vertical?t.height:t.width)*e._viewport.scale,w=v
0!==h?(k=[_,A,-A,_,f,p],S=n.Util.getAxialAlignedBoundingBox([0,0,x,w],k)):S=[f,p,f+x,p+w],e._bounds.push({left:S[0],top:S[1],right:S[2],bottom:S[3],div:i,size:[x,w],m:k})}}function h(e){if(!e._canceled){var t=e._textDivs,r=e._capability,n=t.length
if(n>1e5)return e._renderingDone=!0,void r.resolve()
if(!e._textContentStream)for(var a=0;a<n;a++)e._layoutText(t[a])
e._renderingDone=!0,r.resolve()}}function d(e,t,r){for(var n=0,a=0;a<r;a++){var i=e[t++]
i>0&&(n=n?Math.min(i,n):i)}return n}function f(e){for(var t=e._bounds,r=e._viewport,a=function(e,t,r){var n=r.map((function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}}))
p(e,n)
var a,o=new Array(r.length),s=i(n)
try{for(s.s();!(a=s.n()).done;){var l=a.value,u=l.index
o[u]={left:l.x1New,top:0,right:l.x2New,bottom:0}}}catch(v){s.e(v)}finally{s.f()}r.map((function(t,r){var a=o[r],i=n[r]
i.x1=t.top,i.y1=e-a.right,i.x2=t.bottom,i.y2=e-a.left,i.index=r,i.x1New=void 0,i.x2New=void 0})),p(t,n)
var c,h=i(n)
try{for(h.s();!(c=h.n()).done;){var d=c.value,f=d.index
o[f].top=d.x1New,o[f].bottom=d.x2New}}catch(v){h.e(v)}finally{h.f()}return o}(r.width,r.height,t),o=0;o<a.length;o++){var s=t[o].div,l=e._textDivProperties.get(s)
if(0!==l.angle){for(var u=a[o],c=t[o],h=c.m,f=h[0],v=h[1],y=[[0,0],[0,c.size[1]],[c.size[0],0],c.size],m=new Float64Array(64),g=0,b=y.length;g<b;g++){var _=n.Util.applyTransform(y[g],h)
m[g+0]=f&&(u.left-_[0])/f,m[g+4]=v&&(u.top-_[1])/v,m[g+8]=f&&(u.right-_[0])/f,m[g+12]=v&&(u.bottom-_[1])/v,m[g+16]=v&&(u.left-_[0])/-v,m[g+20]=f&&(u.top-_[1])/f,m[g+24]=v&&(u.right-_[0])/-v,m[g+28]=f&&(u.bottom-_[1])/f,m[g+32]=f&&(u.left-_[0])/-f,m[g+36]=v&&(u.top-_[1])/-v,m[g+40]=f&&(u.right-_[0])/-f,m[g+44]=v&&(u.bottom-_[1])/-v,m[g+48]=v&&(u.left-_[0])/v,m[g+52]=f&&(u.top-_[1])/-f,m[g+56]=v&&(u.right-_[0])/v,m[g+60]=f&&(u.bottom-_[1])/-f}var A=1+Math.min(Math.abs(f),Math.abs(v))
l.paddingLeft=d(m,32,16)/A,l.paddingTop=d(m,48,16)/A,l.paddingRight=d(m,0,16)/A,l.paddingBottom=d(m,16,16)/A,e._textDivProperties.set(s,l)}else l.paddingLeft=t[o].left-a[o].left,l.paddingTop=t[o].top-a[o].top,l.paddingRight=a[o].right-t[o].right,l.paddingBottom=a[o].bottom-t[o].bottom,e._textDivProperties.set(s,l)}}function p(e,t){t.sort((function(e,t){return e.x1-t.x1||e.index-t.index}))
var r,n=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}],a=i(t)
try{for(a.s();!(r=a.n()).done;){for(var o=r.value,s=0;s<n.length&&n[s].end<=o.y1;)s++
for(var l=n.length-1;l>=0&&n[l].start>=o.y2;)l--
var u=void 0,c=void 0,h=void 0,d=void 0,f=-1/0
for(h=s;h<=l;h++){c=(u=n[h]).boundary
var p=void 0;(p=c.x2>o.x1?c.index>o.index?c.x1New:o.x1:void 0===c.x2New?(c.x2+o.x1)/2:c.x2New)>f&&(f=p)}for(o.x1New=f,h=s;h<=l;h++)void 0===(c=(u=n[h]).boundary).x2New?c.x2>o.x1?c.index>o.index&&(c.x2New=c.x2):c.x2New=f:c.x2New>f&&(c.x2New=Math.max(f,c.x2))
var v=[],y=null
for(h=s;h<=l;h++){var m=(c=(u=n[h]).boundary).x2>o.x2?c:o
y===m?v[v.length-1].end=u.end:(v.push({start:u.start,end:u.end,boundary:m}),y=m)}for(n[s].start<o.y1&&(v[0].start=o.y1,v.unshift({start:n[s].start,end:o.y1,boundary:n[s].boundary})),o.y2<n[l].end&&(v[v.length-1].end=o.y2,v.push({start:o.y2,end:n[l].end,boundary:n[l].boundary})),h=s;h<=l;h++)if(void 0===(c=(u=n[h]).boundary).x2New){var g=!1
for(d=s-1;!g&&d>=0&&n[d].start>=c.y1;d--)g=n[d].boundary===c
for(d=l+1;!g&&d<n.length&&n[d].end<=c.y2;d++)g=n[d].boundary===c
for(d=0;!g&&d<v.length;d++)g=v[d].boundary===c
g||(c.x2New=f)}Array.prototype.splice.apply(n,[s,l-s+1].concat(v))}}catch(k){a.e(k)}finally{a.f()}for(var b=0,_=n;b<_.length;b++){var A=_[b].boundary
void 0===A.x2New&&(A.x2New=Math.max(e,A.x2))}}var v=function(){function e(t){var r,a=this,i=t.textContent,o=t.textContentStream,s=t.container,l=t.viewport,u=t.textDivs,c=t.textContentItemsStr,h=t.enhanceTextSelection;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._textContent=i,this._textContentStream=o,this._container=s,this._document=s.ownerDocument,this._viewport=l,this._textDivs=u||[],this._textContentItemsStr=c||[],this._enhanceTextSelection=!!h,this._fontInspectorEnabled=!(null===(r=globalThis.FontInspector)||void 0===r||!r.enabled),this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,n.createPromiseCapability)(),this._renderTimer=null,this._bounds=[],this._capability.promise.finally((function(){a._enhanceTextSelection||(a._textDivProperties=null),a._layoutTextCtx&&(a._layoutTextCtx.canvas.width=0,a._layoutTextCtx.canvas.height=0,a._layoutTextCtx=null)})).catch((function(){}))}var t,r,i
return t=e,r=[{key:"promise",get:function(){return this._capability.promise}},{key:"cancel",value:function(){this._canceled=!0,this._reader&&(this._reader.cancel(new n.AbortException("TextLayer task cancelled.")).catch((function(){})),this._reader=null),null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject(new Error("TextLayer task cancelled."))}},{key:"_processItems",value:function(e,t){for(var r=0,n=e.length;r<n;r++)if(void 0!==e[r].str)this._textContentItemsStr.push(e[r].str),c(this,e[r],t,this._layoutTextCtx)
else if("beginMarkedContentProps"===e[r].type||"beginMarkedContent"===e[r].type){var a=this._container
this._container=document.createElement("span"),this._container.classList.add("markedContent"),null!==e[r].id&&this._container.setAttribute("id","".concat(e[r].id)),a.appendChild(this._container)}else"endMarkedContent"===e[r].type&&(this._container=this._container.parentNode)}},{key:"_layoutText",value:function(e){var t=this._textDivProperties.get(e),r=""
if(0!==t.canvasWidth&&t.hasText){var n=e.style,a=n.fontSize,i=n.fontFamily
a===this._layoutTextLastFontSize&&i===this._layoutTextLastFontFamily||(this._layoutTextCtx.font="".concat(a," ").concat(i),this._layoutTextLastFontSize=a,this._layoutTextLastFontFamily=i)
var o=this._layoutTextCtx.measureText(e.textContent).width
if(o>0){var s=t.canvasWidth/o
this._enhanceTextSelection&&(t.scale=s),r="scaleX(".concat(s,")")}}if(0!==t.angle&&(r="rotate(".concat(t.angle,"deg) ").concat(r)),r.length>0&&(this._enhanceTextSelection&&(t.originalTransform=r),e.style.transform=r),t.hasText&&this._container.appendChild(e),t.hasEOL){var l=document.createElement("br")
l.setAttribute("role","presentation"),this._container.appendChild(l)}}},{key:"_render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=(0,n.createPromiseCapability)(),a=Object.create(null),i=this._document.createElement("canvas")
if(i.height=i.width=s,i.mozOpaque=!0,this._layoutTextCtx=i.getContext("2d",{alpha:!1}),this._textContent){var o=this._textContent.items,l=this._textContent.styles
this._processItems(o,l),r.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.')
var u=function t(){e._reader.read().then((function(n){var i=n.value
n.done?r.resolve():(Object.assign(a,i.styles),e._processItems(i.items,a),t())}),r.reject)}
this._reader=this._textContentStream.getReader(),u()}r.promise.then((function(){a=null,t?e._renderTimer=setTimeout((function(){h(e),e._renderTimer=null}),t):h(e)}),this._capability.reject)}},{key:"expandTextDivs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(f(this),this._bounds=null)
for(var t=[],r=[],n=0,a=this._textDivs.length;n<a;n++){var i=this._textDivs[n],o=this._textDivProperties.get(i)
o.hasText&&(e?(t.length=0,r.length=0,o.originalTransform&&t.push(o.originalTransform),o.paddingTop>0?(r.push("".concat(o.paddingTop,"px")),t.push("translateY(".concat(-o.paddingTop,"px)"))):r.push(0),o.paddingRight>0?r.push("".concat(o.paddingRight/o.scale,"px")):r.push(0),o.paddingBottom>0?r.push("".concat(o.paddingBottom,"px")):r.push(0),o.paddingLeft>0?(r.push("".concat(o.paddingLeft/o.scale,"px")),t.push("translateX(".concat(-o.paddingLeft/o.scale,"px)"))):r.push(0),i.style.padding=r.join(" "),t.length&&(i.style.transform=t.join(" "))):(i.style.padding=null,i.style.transform=o.originalTransform))}}}}],r&&a(t.prototype,r),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0
var n=r(1),a=r(147),i=r(3)
function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=u(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function u(e,t){if(e){if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=d((function e(){f(this,e),(0,n.unreachable)("Not implemented: SVGGraphics")}))
t.SVGGraphics=p
var v=function(e){if(Number.isInteger(e))return e.toString()
var t=e.toFixed(10),r=t.length-1
if("0"!==t[r])return t
do{r--}while("0"===t[r])
return t.substring(0,"."===t[r]?r:r+1)},y=function(e){if(0===e[4]&&0===e[5]){if(0===e[1]&&0===e[2])return 1===e[0]&&1===e[3]?"":"scale(".concat(v(e[0])," ").concat(v(e[3]),")")
if(e[0]===e[3]&&e[1]===-e[2]){var t=180*Math.acos(e[0])/Math.PI
return"rotate(".concat(v(t),")")}}else if(1===e[0]&&0===e[1]&&0===e[2]&&1===e[3])return"translate(".concat(v(e[4])," ").concat(v(e[5]),")")
return"matrix(".concat(v(e[0])," ").concat(v(e[1])," ").concat(v(e[2])," ").concat(v(e[3])," ").concat(v(e[4])," ")+"".concat(v(e[5]),")")},m={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},g=["butt","round","square"],b=["miter","round","bevel"],_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(URL.createObjectURL&&"undefined"!=typeof Blob&&!r)return URL.createObjectURL(new Blob([e],{type:t}))
for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a="data:".concat(t,";base64,"),i=0,o=e.length;i<o;i+=3){var s=255&e[i],l=255&e[i+1],u=255&e[i+2],c=s>>2,h=(3&s)<<4|l>>4,d=i+1<o?(15&l)<<2|u>>6:64,f=i+2<o?63&u:64
a+=n[c]+n[h]+n[d]+n[f]}return a},A=function(){for(var e=new Uint8Array([137,80,78,71,13,10,26,10]),t=new Int32Array(256),r=0;r<256;r++){for(var a=r,o=0;o<8;o++)a=1&a?3988292384^a>>1&2147483647:a>>1&2147483647
t[r]=a}function s(e,r,n,a){var i=a,o=r.length
n[i]=o>>24&255,n[i+1]=o>>16&255,n[i+2]=o>>8&255,n[i+3]=255&o,n[i+=4]=255&e.charCodeAt(0),n[i+1]=255&e.charCodeAt(1),n[i+2]=255&e.charCodeAt(2),n[i+3]=255&e.charCodeAt(3),i+=4,n.set(r,i)
var s=function(e,r,n){for(var a=-1,i=r;i<n;i++){var o=255&(a^e[i])
a=a>>>8^t[o]}return-1^a}(n,a+4,i+=r.length)
n[i]=s>>24&255,n[i+1]=s>>16&255,n[i+2]=s>>8&255,n[i+3]=255&s}function l(e){var t=e.length,r=65535,n=Math.ceil(t/r),a=new Uint8Array(2+t+5*n+4),i=0
a[i++]=120,a[i++]=156
for(var o=0;t>r;)a[i++]=0,a[i++]=255,a[i++]=255,a[i++]=0,a[i++]=0,a.set(e.subarray(o,o+r),i),i+=r,o+=r,t-=r
a[i++]=1,a[i++]=255&t,a[i++]=t>>8&255,a[i++]=255&~t,a[i++]=(65535&~t)>>8&255,a.set(e.subarray(o),i),i+=e.length-o
var s=function(e,t,r){for(var n=1,a=0,i=t;i<r;++i)a=(a+(n=(n+(255&e[i]))%65521))%65521
return a<<16|n}(e,0,e.length)
return a[i++]=s>>24&255,a[i++]=s>>16&255,a[i++]=s>>8&255,a[i++]=255&s,a}function u(t,r,a,o){var u,c,h,d=t.width,f=t.height,p=t.data
switch(r){case n.ImageKind.GRAYSCALE_1BPP:c=0,u=1,h=d+7>>3
break
case n.ImageKind.RGB_24BPP:c=2,u=8,h=3*d
break
case n.ImageKind.RGBA_32BPP:c=6,u=8,h=4*d
break
default:throw new Error("invalid format")}for(var v=new Uint8Array((1+h)*f),y=0,m=0,g=0;g<f;++g)v[y++]=0,v.set(p.subarray(m,m+h),y),m+=h,y+=h
if(r===n.ImageKind.GRAYSCALE_1BPP&&o){y=0
for(var b=0;b<f;b++){y++
for(var A=0;A<h;A++)v[y++]^=255}}var k=new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,f>>24&255,f>>16&255,f>>8&255,255&f,u,c,0,0,0]),S=function(e){if(!i.isNodeJS)return l(e)
try{var t
t=parseInt(process.versions.node)>=8?e:Buffer.from(e)
var r=require("zlib").deflateSync(t,{level:9})
return r instanceof Uint8Array?r:new Uint8Array(r)}catch(a){(0,n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+a)}return l(e)}(v),x=e.length+36+k.length+S.length,w=new Uint8Array(x),C=0
return w.set(e,C),s("IHDR",k,w,C+=e.length),s("IDATA",S,w,C+=12+k.length),C+=12+S.length,s("IEND",new Uint8Array(0),w,C),_(w,"image/png",a)}return function(e,t,r){return u(e,void 0===e.kind?n.ImageKind.GRAYSCALE_1BPP:e.kind,t,r)}}(),k=function(){function e(){f(this,e),this.fontSizeScale=1,this.fontWeight=m.fontWeight,this.fontSize=0,this.textMatrix=n.IDENTITY_MATRIX,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.textRenderingMode=n.TextRenderingMode.FILL,this.textMatrixScale=1,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=m.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null
this.maskId=""}return d(e,[{key:"clone",value:function(){return Object.create(this)}},{key:"setCurrentPoint",value:function(e,t){this.x=e,this.y=t}}]),e}(),S=0,x=0,w=0
t.SVGGraphics=p=function(){function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
for(var o in f(this,e),this.svgFactory=new a.DOMSVGFactory,this.current=new k,this.transformMatrix=n.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=t,this.objs=r,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!i,this._operatorIdMapping=[],n.OPS)this._operatorIdMapping[n.OPS[o]]=o}return d(e,[{key:"save",value:function(){this.transformStack.push(this.transformMatrix)
var e=this.current
this.extraStack.push(e),this.current=e.clone()}},{key:"restore",value:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null}},{key:"group",value:function(e){this.save(),this.executeOpTree(e),this.restore()}},{key:"loadDependencies",value:function(e){for(var t=this,r=e.fnArray,a=e.argsArray,i=0,o=r.length;i<o;i++)if(r[i]===n.OPS.dependency){var s,u=l(a[i])
try{var c=function(){var e=s.value,r=e.startsWith("g_")?t.commonObjs:t.objs,n=new Promise((function(t){r.get(e,t)}))
t.current.dependencies.push(n)}
for(u.s();!(s=u.n()).done;)c()}catch(h){u.e(h)}finally{u.f()}}return Promise.all(this.current.dependencies)}},{key:"transform",value:function(e,t,r,a,i,o){var s=[e,t,r,a,i,o]
this.transformMatrix=n.Util.transform(this.transformMatrix,s),this.tgrp=null}},{key:"getSVG",value:function(e,t){var r=this
this.viewport=t
var a=this._initialize(t)
return this.loadDependencies(e).then((function(){return r.transformMatrix=n.IDENTITY_MATRIX,r.executeOpTree(r.convertOpList(e)),a}))}},{key:"convertOpList",value:function(e){for(var t=this._operatorIdMapping,r=e.argsArray,n=e.fnArray,a=[],i=0,o=n.length;i<o;i++){var s=n[i]
a.push({fnId:s,fn:t[s],args:r[i]})}return function(e){var t,r=[],n=[],a=l(e)
try{for(a.s();!(t=a.n()).done;){var i=t.value
"save"!==i.fn?"restore"===i.fn?r=n.pop():r.push(i):(r.push({fnId:92,fn:"group",items:[]}),n.push(r),r=r[r.length-1].items)}}catch(o){a.e(o)}finally{a.f()}return r}(a)}},{key:"executeOpTree",value:function(e){var t,r=l(e)
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
default:(0,n.warn)("Unimplemented operator ".concat(i))}}}catch(u){r.e(u)}finally{r.f()}}},{key:"setWordSpacing",value:function(e){this.current.wordSpacing=e}},{key:"setCharSpacing",value:function(e){this.current.charSpacing=e}},{key:"nextLine",value:function(){this.moveText(0,this.current.leading)}},{key:"setTextMatrix",value:function(e,t,r,n,a,i){var o=this.current
o.textMatrix=o.lineMatrix=[e,t,r,n,a,i],o.textMatrixScale=Math.hypot(e,t),o.x=o.lineX=0,o.y=o.lineY=0,o.xcoords=[],o.ycoords=[],o.tspan=this.svgFactory.createElement("svg:tspan"),o.tspan.setAttributeNS(null,"font-family",o.fontFamily),o.tspan.setAttributeNS(null,"font-size","".concat(v(o.fontSize),"px")),o.tspan.setAttributeNS(null,"y",v(-o.y)),o.txtElement=this.svgFactory.createElement("svg:text"),o.txtElement.appendChild(o.tspan)}},{key:"beginText",value:function(){var e=this.current
e.x=e.lineX=0,e.y=e.lineY=0,e.textMatrix=n.IDENTITY_MATRIX,e.lineMatrix=n.IDENTITY_MATRIX,e.textMatrixScale=1,e.tspan=this.svgFactory.createElement("svg:tspan"),e.txtElement=this.svgFactory.createElement("svg:text"),e.txtgrp=this.svgFactory.createElement("svg:g"),e.xcoords=[],e.ycoords=[]}},{key:"moveText",value:function(e,t){var r=this.current
r.x=r.lineX+=e,r.y=r.lineY+=t,r.xcoords=[],r.ycoords=[],r.tspan=this.svgFactory.createElement("svg:tspan"),r.tspan.setAttributeNS(null,"font-family",r.fontFamily),r.tspan.setAttributeNS(null,"font-size","".concat(v(r.fontSize),"px")),r.tspan.setAttributeNS(null,"y",v(-r.y))}},{key:"showText",value:function(e){var t=this.current,r=t.font,a=t.fontSize
if(0!==a){var i,o=t.fontSizeScale,s=t.charSpacing,u=t.wordSpacing,c=t.fontDirection,h=t.textHScale*c,d=r.vertical,f=d?1:-1,p=r.defaultVMetrics,g=a*t.fontMatrix[0],b=0,_=l(e)
try{for(_.s();!(i=_.n()).done;){var A=i.value
if(null!==A)if("number"!=typeof A){var k=(A.isSpace?u:0)+s,S=A.fontChar,x=void 0,w=void 0,C=A.width
if(d){var P=void 0,T=A.vmetric||p
P=-(P=A.vmetric?T[1]:.5*C)*g
var E=T[2]*g
C=T?-T[0]:C,x=P/o,w=(b+E)/o}else x=b/o,w=0;(A.isInFont||r.missingFile)&&(t.xcoords.push(t.x+x),d&&t.ycoords.push(-t.y+w),t.tspan.textContent+=S)
b+=d?C*g-k*c:C*g+k*c}else b+=f*A*a/1e3
else b+=c*u}}catch(M){_.e(M)}finally{_.f()}t.tspan.setAttributeNS(null,"x",t.xcoords.map(v).join(" ")),d?t.tspan.setAttributeNS(null,"y",t.ycoords.map(v).join(" ")):t.tspan.setAttributeNS(null,"y",v(-t.y)),d?t.y-=b:t.x+=b*h,t.tspan.setAttributeNS(null,"font-family",t.fontFamily),t.tspan.setAttributeNS(null,"font-size","".concat(v(t.fontSize),"px")),t.fontStyle!==m.fontStyle&&t.tspan.setAttributeNS(null,"font-style",t.fontStyle),t.fontWeight!==m.fontWeight&&t.tspan.setAttributeNS(null,"font-weight",t.fontWeight)
var O=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
if(O===n.TextRenderingMode.FILL||O===n.TextRenderingMode.FILL_STROKE?(t.fillColor!==m.fillColor&&t.tspan.setAttributeNS(null,"fill",t.fillColor),t.fillAlpha<1&&t.tspan.setAttributeNS(null,"fill-opacity",t.fillAlpha)):t.textRenderingMode===n.TextRenderingMode.ADD_TO_PATH?t.tspan.setAttributeNS(null,"fill","transparent"):t.tspan.setAttributeNS(null,"fill","none"),O===n.TextRenderingMode.STROKE||O===n.TextRenderingMode.FILL_STROKE){var F=1/(t.textMatrixScale||1)
this._setStrokeAttributes(t.tspan,F)}var R=t.textMatrix
0!==t.textRise&&((R=R.slice())[5]+=t.textRise),t.txtElement.setAttributeNS(null,"transform","".concat(y(R)," scale(").concat(v(h),", -1)")),t.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.txtElement.appendChild(t.tspan),t.txtgrp.appendChild(t.txtElement),this._ensureTransformGroup().appendChild(t.txtElement)}}},{key:"setLeadingMoveText",value:function(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"addFontStyle",value:function(e){if(!e.data)throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.')
this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle))
var t=_(e.data,e.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'.concat(e.loadedName,'";')+" src: url(".concat(t,"); }\n")}},{key:"setFont",value:function(e){var t=this.current,r=this.commonObjs.get(e[0]),a=e[1]
t.font=r,!this.embedFonts||r.missingFile||this.embeddedFonts[r.loadedName]||(this.addFontStyle(r),this.embeddedFonts[r.loadedName]=r),t.fontMatrix=r.fontMatrix||n.FONT_IDENTITY_MATRIX
var i="normal"
r.black?i="900":r.bold&&(i="bold")
var o=r.italic?"italic":"normal"
a<0?(a=-a,t.fontDirection=-1):t.fontDirection=1,t.fontSize=a,t.fontFamily=r.loadedName,t.fontWeight=i,t.fontStyle=o,t.tspan=this.svgFactory.createElement("svg:tspan"),t.tspan.setAttributeNS(null,"y",v(-t.y)),t.xcoords=[],t.ycoords=[]}},{key:"endText",value:function(){var e,t=this.current
t.textRenderingMode&n.TextRenderingMode.ADD_TO_PATH_FLAG&&null!==(e=t.txtElement)&&void 0!==e&&e.hasChildNodes()&&(t.element=t.txtElement,this.clip("nonzero"),this.endPath())}},{key:"setLineWidth",value:function(e){e>0&&(this.current.lineWidth=e)}},{key:"setLineCap",value:function(e){this.current.lineCap=g[e]}},{key:"setLineJoin",value:function(e){this.current.lineJoin=b[e]}},{key:"setMiterLimit",value:function(e){this.current.miterLimit=e}},{key:"setStrokeAlpha",value:function(e){this.current.strokeAlpha=e}},{key:"setStrokeRGBColor",value:function(e,t,r){this.current.strokeColor=n.Util.makeHexColor(e,t,r)}},{key:"setFillAlpha",value:function(e){this.current.fillAlpha=e}},{key:"setFillRGBColor",value:function(e,t,r){this.current.fillColor=n.Util.makeHexColor(e,t,r),this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[],this.current.ycoords=[]}},{key:"setStrokeColorN",value:function(e){this.current.strokeColor=this._makeColorN_Pattern(e)}},{key:"setFillColorN",value:function(e){this.current.fillColor=this._makeColorN_Pattern(e)}},{key:"shadingFill",value:function(e){var t=this.viewport.width,r=this.viewport.height,a=n.Util.inverseTransform(this.transformMatrix),i=n.Util.applyTransform([0,0],a),o=n.Util.applyTransform([0,r],a),s=n.Util.applyTransform([t,0],a),l=n.Util.applyTransform([t,r],a),u=Math.min(i[0],o[0],s[0],l[0]),c=Math.min(i[1],o[1],s[1],l[1]),h=Math.max(i[0],o[0],s[0],l[0]),d=Math.max(i[1],o[1],s[1],l[1]),f=this.svgFactory.createElement("svg:rect")
f.setAttributeNS(null,"x",u),f.setAttributeNS(null,"y",c),f.setAttributeNS(null,"width",h-u),f.setAttributeNS(null,"height",d-c),f.setAttributeNS(null,"fill",this._makeShadingPattern(e)),this.current.fillAlpha<1&&f.setAttributeNS(null,"fill-opacity",this.current.fillAlpha),this._ensureTransformGroup().appendChild(f)}},{key:"_makeColorN_Pattern",value:function(e){return"TilingPattern"===e[0]?this._makeTilingPattern(e):this._makeShadingPattern(e)}},{key:"_makeTilingPattern",value:function(e){var t=e[1],r=e[2],a=e[3]||n.IDENTITY_MATRIX,i=s(e[4],4),l=i[0],u=i[1],c=i[2],h=i[3],d=e[5],f=e[6],p=e[7],v="shading".concat(w++),y=s(n.Util.normalizeRect([].concat(o(n.Util.applyTransform([l,u],a)),o(n.Util.applyTransform([c,h],a)))),4),m=y[0],g=y[1],b=y[2],_=y[3],A=s(n.Util.singularValueDecompose2dScale(a),2),k=d*A[0],S=f*A[1],x=this.svgFactory.createElement("svg:pattern")
x.setAttributeNS(null,"id",v),x.setAttributeNS(null,"patternUnits","userSpaceOnUse"),x.setAttributeNS(null,"width",k),x.setAttributeNS(null,"height",S),x.setAttributeNS(null,"x","".concat(m)),x.setAttributeNS(null,"y","".concat(g))
var C=this.svg,P=this.transformMatrix,T=this.current.fillColor,E=this.current.strokeColor,O=this.svgFactory.create(b-m,_-g)
if(this.svg=O,this.transformMatrix=a,2===p){var F=n.Util.makeHexColor.apply(n.Util,o(t))
this.current.fillColor=F,this.current.strokeColor=F}return this.executeOpTree(this.convertOpList(r)),this.svg=C,this.transformMatrix=P,this.current.fillColor=T,this.current.strokeColor=E,x.appendChild(O.childNodes[0]),this.defs.appendChild(x),"url(#".concat(v,")")}},{key:"_makeShadingPattern",value:function(e){switch("string"==typeof e&&(e=this.objs.get(e)),e[0]){case"RadialAxial":var t,r="shading".concat(w++),a=e[3]
switch(e[1]){case"axial":var i=e[4],o=e[5];(t=this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"x1",i[0]),t.setAttributeNS(null,"y1",i[1]),t.setAttributeNS(null,"x2",o[0]),t.setAttributeNS(null,"y2",o[1])
break
case"radial":var s=e[4],u=e[5],c=e[6],h=e[7];(t=this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"cx",u[0]),t.setAttributeNS(null,"cy",u[1]),t.setAttributeNS(null,"r",h),t.setAttributeNS(null,"fx",s[0]),t.setAttributeNS(null,"fy",s[1]),t.setAttributeNS(null,"fr",c)
break
default:throw new Error("Unknown RadialAxial type: ".concat(e[1]))}var d,f=l(a)
try{for(f.s();!(d=f.n()).done;){var p=d.value,v=this.svgFactory.createElement("svg:stop")
v.setAttributeNS(null,"offset",p[0]),v.setAttributeNS(null,"stop-color",p[1]),t.appendChild(v)}}catch(y){f.e(y)}finally{f.f()}return this.defs.appendChild(t),"url(#".concat(r,")")
case"Mesh":return(0,n.warn)("Unimplemented pattern Mesh"),null
case"Dummy":return"hotpink"
default:throw new Error("Unknown IR type: ".concat(e[0]))}}},{key:"setDash",value:function(e,t){this.current.dashArray=e,this.current.dashPhase=t}},{key:"constructPath",value:function(e,t){var r,a=this.current,i=a.x,o=a.y,s=[],u=0,c=l(e)
try{for(c.s();!(r=c.n()).done;){switch(0|r.value){case n.OPS.rectangle:i=t[u++],o=t[u++]
var h=t[u++],d=t[u++],f=i+h,p=o+d
s.push("M",v(i),v(o),"L",v(f),v(o),"L",v(f),v(p),"L",v(i),v(p),"Z")
break
case n.OPS.moveTo:i=t[u++],o=t[u++],s.push("M",v(i),v(o))
break
case n.OPS.lineTo:i=t[u++],o=t[u++],s.push("L",v(i),v(o))
break
case n.OPS.curveTo:i=t[u+4],o=t[u+5],s.push("C",v(t[u]),v(t[u+1]),v(t[u+2]),v(t[u+3]),v(i),v(o)),u+=6
break
case n.OPS.curveTo2:s.push("C",v(i),v(o),v(t[u]),v(t[u+1]),v(t[u+2]),v(t[u+3])),i=t[u+2],o=t[u+3],u+=4
break
case n.OPS.curveTo3:i=t[u+2],o=t[u+3],s.push("C",v(t[u]),v(t[u+1]),v(i),v(o),v(i),v(o)),u+=4
break
case n.OPS.closePath:s.push("Z")}}}catch(y){c.e(y)}finally{c.f()}s=s.join(" "),a.path&&e.length>0&&e[0]!==n.OPS.rectangle&&e[0]!==n.OPS.moveTo?s=a.path.getAttributeNS(null,"d")+s:(a.path=this.svgFactory.createElement("svg:path"),this._ensureTransformGroup().appendChild(a.path)),a.path.setAttributeNS(null,"d",s),a.path.setAttributeNS(null,"fill","none"),a.element=a.path,a.setCurrentPoint(i,o)}},{key:"endPath",value:function(){var e=this.current
if(e.path=null,this.pendingClip)if(e.element){var t="clippath".concat(S++),r=this.svgFactory.createElement("svg:clipPath")
r.setAttributeNS(null,"id",t),r.setAttributeNS(null,"transform",y(this.transformMatrix))
var n=e.element.cloneNode(!0)
if("evenodd"===this.pendingClip?n.setAttributeNS(null,"clip-rule","evenodd"):n.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,r.appendChild(n),this.defs.appendChild(r),e.activeClipUrl){e.clipGroup=null
var a,i=l(this.extraStack)
try{for(i.s();!(a=i.n()).done;){a.value.clipGroup=null}}catch(o){i.e(o)}finally{i.f()}r.setAttributeNS(null,"clip-path",e.activeClipUrl)}e.activeClipUrl="url(#".concat(t,")"),this.tgrp=null}else this.pendingClip=null}},{key:"clip",value:function(e){this.pendingClip=e}},{key:"closePath",value:function(){var e=this.current
if(e.path){var t="".concat(e.path.getAttributeNS(null,"d"),"Z")
e.path.setAttributeNS(null,"d",t)}}},{key:"setLeading",value:function(e){this.current.leading=-e}},{key:"setTextRise",value:function(e){this.current.textRise=e}},{key:"setTextRenderingMode",value:function(e){this.current.textRenderingMode=e}},{key:"setHScale",value:function(e){this.current.textHScale=e/100}},{key:"setRenderingIntent",value:function(e){}},{key:"setFlatness",value:function(e){}},{key:"setGState",value:function(e){var t,r=l(e)
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
default:(0,n.warn)("Unimplemented graphic state operator ".concat(i))}}}catch(u){r.e(u)}finally{r.f()}}},{key:"fill",value:function(){var e=this.current
e.element&&(e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha),this.endPath())}},{key:"stroke",value:function(){var e=this.current
e.element&&(this._setStrokeAttributes(e.element),e.element.setAttributeNS(null,"fill","none"),this.endPath())}},{key:"_setStrokeAttributes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.current,n=r.dashArray
1!==t&&n.length>0&&(n=n.map((function(e){return t*e}))),e.setAttributeNS(null,"stroke",r.strokeColor),e.setAttributeNS(null,"stroke-opacity",r.strokeAlpha),e.setAttributeNS(null,"stroke-miterlimit",v(r.miterLimit)),e.setAttributeNS(null,"stroke-linecap",r.lineCap),e.setAttributeNS(null,"stroke-linejoin",r.lineJoin),e.setAttributeNS(null,"stroke-width",v(t*r.lineWidth)+"px"),e.setAttributeNS(null,"stroke-dasharray",n.map(v).join(" ")),e.setAttributeNS(null,"stroke-dashoffset",v(t*r.dashPhase)+"px")}},{key:"eoFill",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()}},{key:"fillStroke",value:function(){this.stroke(),this.fill()}},{key:"eoFillStroke",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()}},{key:"closeStroke",value:function(){this.closePath(),this.stroke()}},{key:"closeFillStroke",value:function(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function(){this.closePath(),this.eoFillStroke()}},{key:"paintSolidColorImageMask",value:function(){var e=this.svgFactory.createElement("svg:rect")
e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",this.current.fillColor),this._ensureTransformGroup().appendChild(e)}},{key:"paintImageXObject",value:function(e){var t=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image with object ID ".concat(e," is not ready yet"))}},{key:"paintInlineImageXObject",value:function(e,t){var r=e.width,n=e.height,a=A(e,this.forceDataSchema,!!t),i=this.svgFactory.createElement("svg:rect")
i.setAttributeNS(null,"x","0"),i.setAttributeNS(null,"y","0"),i.setAttributeNS(null,"width",v(r)),i.setAttributeNS(null,"height",v(n)),this.current.element=i,this.clip("nonzero")
var o=this.svgFactory.createElement("svg:image")
o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",v(-n)),o.setAttributeNS(null,"width",v(r)+"px"),o.setAttributeNS(null,"height",v(n)+"px"),o.setAttributeNS(null,"transform","scale(".concat(v(1/r)," ").concat(v(-1/n),")")),t?t.appendChild(o):this._ensureTransformGroup().appendChild(o)}},{key:"paintImageMaskXObject",value:function(e){var t=this.current,r=e.width,n=e.height,a=t.fillColor
t.maskId="mask".concat(x++)
var i=this.svgFactory.createElement("svg:mask")
i.setAttributeNS(null,"id",t.maskId)
var o=this.svgFactory.createElement("svg:rect")
o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",v(r)),o.setAttributeNS(null,"height",v(n)),o.setAttributeNS(null,"fill",a),o.setAttributeNS(null,"mask","url(#".concat(t.maskId,")")),this.defs.appendChild(i),this._ensureTransformGroup().appendChild(o),this.paintInlineImageXObject(e,i)}},{key:"paintFormXObjectBegin",value:function(e,t){if(Array.isArray(e)&&6===e.length&&this.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t){var r=t[2]-t[0],n=t[3]-t[1],a=this.svgFactory.createElement("svg:rect")
a.setAttributeNS(null,"x",t[0]),a.setAttributeNS(null,"y",t[1]),a.setAttributeNS(null,"width",v(r)),a.setAttributeNS(null,"height",v(n)),this.current.element=a,this.clip("nonzero"),this.endPath()}}},{key:"paintFormXObjectEnd",value:function(){}},{key:"_initialize",value:function(e){var t=this.svgFactory.create(e.width,e.height),r=this.svgFactory.createElement("svg:defs")
t.appendChild(r),this.defs=r
var n=this.svgFactory.createElement("svg:g")
return n.setAttributeNS(null,"transform",y(e.transform)),t.appendChild(n),this.svg=n,t}},{key:"_ensureClipGroup",value:function(){if(!this.current.clipGroup){var e=this.svgFactory.createElement("svg:g")
e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(e),this.current.clipGroup=e}return this.current.clipGroup}},{key:"_ensureTransformGroup",value:function(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",y(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}}]),e}()},(e,t,r)=>{"use strict"
function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0
var a,i=(a=r(145))&&a.__esModule?a:{default:a},o=r(1),s=r(166)
function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var a=d(this).constructor
r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments)
return h(this,r)}}function h(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function p(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){f(i,n,a,o,s,"next",e)}function s(e){f(i,n,a,o,s,"throw",e)}o(void 0)}))}}function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return y(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var _=require("fs"),A=require("http"),k=require("https"),S=require("url"),x=/^file:\/\/\/[a-zA-Z]:\//
var w=function(){function e(t){var r,n
m(this,e),this.source=t,this.url=(r=t.url,"file:"===(n=S.parse(r)).protocol||n.host?n:/^[a-z]:[/\\]/i.test(r)?S.parse("file:///".concat(r)):(n.host||(n.protocol="file:"),n)),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol,this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return b(e,[{key:"_progressiveDataLength",get:function(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}},{key:"getFullReader",value:function(){return(0,o.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once."),this._fullRequestReader=this.isFsUrl?new F(this):new E(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=this.isFsUrl?new R(this,e,t):new O(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e)
var t,r=v(this._rangeRequestReaders.slice(0))
try{for(r.s();!(t=r.n()).done;){t.value.cancel(e)}}catch(n){r.e(n)}finally{r.f()}}}]),e}()
t.PDFNodeStream=w
var C=function(){function e(t){m(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null
var r=t.source
this._contentLength=r.length,this._loaded=0,this._filename=null,this._disableRange=r.disableRange||!1,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!r.disableStream,this._isRangeSupported=!r.disableRange,this._readableStream=null,this._readCapability=(0,o.createPromiseCapability)(),this._headersCapability=(0,o.createPromiseCapability)()}var t
return b(e,[{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"read",value:(t=p(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,o.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new o.AbortException("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}}]),e}(),P=function(){function e(t){m(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,o.createPromiseCapability)()
var r=t.source
this._isStreamingSupported=!r.disableStream}var t
return b(e,[{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"read",value:(t=p(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,o.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),this._storedError&&this._readableStream.destroy(this._storedError)}}]),e}()
function T(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}var E=function(e){l(r,e)
var t=c(r)
function r(e){var n
m(this,r)
var a=function(t){if(404===t.statusCode){var r=new o.MissingPDFException('Missing PDF "'.concat(n._url,'".'))
return n._storedError=r,void n._headersCapability.reject(r)}n._headersCapability.resolve(),n._setReadableStream(t)
var a=function(e){return n._readableStream.headers[e.toLowerCase()]},i=(0,s.validateRangeRequestCapabilities)({getResponseHeader:a,isHttp:e.isHttp,rangeChunkSize:n._rangeChunkSize,disableRange:n._disableRange}),l=i.allowRangeRequests,u=i.suggestedLength
n._isRangeSupported=l,n._contentLength=u||n._contentLength,n._filename=(0,s.extractFilenameFromHeader)(a)}
return(n=t.call(this,e))._request=null,"http:"===n._url.protocol?n._request=A.request(T(n._url,e.httpHeaders),a):n._request=k.request(T(n._url,e.httpHeaders),a),n._request.on("error",(function(e){n._storedError=e,n._headersCapability.reject(e)})),n._request.end(),n}return b(r)}(C),O=function(e){l(r,e)
var t=c(r)
function r(e,n,a){var i
for(var s in m(this,r),(i=t.call(this,e))._httpHeaders={},e.httpHeaders){var l=e.httpHeaders[s]
void 0!==l&&(i._httpHeaders[s]=l)}i._httpHeaders.Range="bytes=".concat(n,"-").concat(a-1)
var u=function(e){if(404!==e.statusCode)i._setReadableStream(e)
else{var t=new o.MissingPDFException('Missing PDF "'.concat(i._url,'".'))
i._storedError=t}}
return i._request=null,"http:"===i._url.protocol?i._request=A.request(T(i._url,i._httpHeaders),u):i._request=k.request(T(i._url,i._httpHeaders),u),i._request.on("error",(function(e){i._storedError=e})),i._request.end(),i}return b(r)}(P),F=function(e){l(r,e)
var t=c(r)
function r(e){var n
m(this,r),n=t.call(this,e)
var a=decodeURIComponent(n._url.path)
return x.test(n._url.href)&&(a=a.replace(/^\//,"")),_.lstat(a,(function(e,t){if(e)return"ENOENT"===e.code&&(e=new o.MissingPDFException('Missing PDF "'.concat(a,'".'))),n._storedError=e,void n._headersCapability.reject(e)
n._contentLength=t.size,n._setReadableStream(_.createReadStream(a)),n._headersCapability.resolve()})),n}return b(r)}(C),R=function(e){l(r,e)
var t=c(r)
function r(e,n,a){var i
m(this,r),i=t.call(this,e)
var o=decodeURIComponent(i._url.path)
return x.test(i._url.href)&&(o=o.replace(/^\//,"")),i._setReadableStream(_.createReadStream(o,{start:n,end:a-1})),i}return b(r)}(P)},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createResponseStatusError=function(e,t){if(404===e||0===e&&t.startsWith("file:"))return new n.MissingPDFException('Missing PDF "'+t+'".')
return new n.UnexpectedResponseException("Unexpected server response (".concat(e,') while retrieving PDF "').concat(t,'".'),e)},t.extractFilenameFromHeader=function(e){var t=e("Content-Disposition")
if(t){var r=(0,a.getFilenameFromContentDispositionHeader)(t)
if(r.includes("%"))try{r=decodeURIComponent(r)}catch(n){}if((0,i.isPdfFile)(r))return r}return null},t.validateRangeRequestCapabilities=function(e){var t=e.getResponseHeader,r=e.isHttp,a=e.rangeChunkSize,i=e.disableRange;(0,n.assert)(a>0,"Range chunk size must be larger than zero")
var o={allowRangeRequests:!1,suggestedLength:void 0},s=parseInt(t("Content-Length"),10)
if(!Number.isInteger(s))return o
if(o.suggestedLength=s,s<=2*a)return o
if(i||!r)return o
if("bytes"!==t("Accept-Ranges"))return o
if("identity"!==(t("Content-Encoding")||"identity"))return o
return o.allowRangeRequests=!0,o},t.validateResponseStatus=function(e){return 200===e||206===e}
var n=r(1),a=r(167),i=r(147)},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getFilenameFromContentDispositionHeader=function(e){var t=!0,r=s("filename\\*","i").exec(e)
if(r){var i=c(r=r[1])
return u(i=d(i=h(i=unescape(i))))}if(r=function(e){var t,r=[],n=s("filename\\*((?!0\\d)\\d+)(\\*?)","ig")
for(;null!==(t=n.exec(e));){var i=a(t,4),o=i[1],l=i[2],u=i[3]
if((o=parseInt(o,10))in r){if(0===o)break}else r[o]=[l,u]}for(var d=[],f=0;f<r.length&&f in r;++f){var p=a(r[f],2),v=p[0],y=p[1]
y=c(y),v&&(y=unescape(y),0===f&&(y=h(y))),d.push(y)}return d.join("")}(e)){return u(d(r))}if(r=s("filename","i").exec(e)){var o=c(r=r[1])
return u(o=d(o))}function s(e,t){return new RegExp("(?:^|;)\\s*"+e+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)}function l(e,r){if(e){if(!/^[\x00-\xFF]+$/.test(r))return r
try{var a=new TextDecoder(e,{fatal:!0}),i=(0,n.stringToBytes)(r)
r=a.decode(i),t=!1}catch(o){}}return r}function u(e){return t&&/[\x80-\xff]/.test(e)&&(e=l("utf-8",e),t&&(e=l("iso-8859-1",e))),e}function c(e){if(e.startsWith('"')){for(var t=e.slice(1).split('\\"'),r=0;r<t.length;++r){var n=t[r].indexOf('"');-1!==n&&(t[r]=t[r].slice(0,n),t.length=r+1),t[r]=t[r].replace(/\\(.)/g,"$1")}e=t.join('"')}return e}function h(e){var t=e.indexOf("'")
return-1===t?e:l(e.slice(0,t),e.slice(t+1).replace(/^[^']*'/,""))}function d(e){return!e.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(e)?e:e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,(function(e,t,r,n){if("q"===r||"Q"===r)return l(t,n=(n=n.replace(/_/g," ")).replace(/=([0-9a-fA-F]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))
try{n=atob(n)}catch(a){}return l(t,n)}))}return""}
var n=r(1)
function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,a,i=[],o=!0,s=!1
try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){s=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNetworkStream=void 0
var n,a=(n=r(145))&&n.__esModule?n:{default:n},i=r(1),o=r(166)
function s(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)}))}}function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var p=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
h(this,e),this.url=t,this.isHttp=/^https?:/i.test(t),this.httpHeaders=this.isHttp&&r.httpHeaders||Object.create(null),this.withCredentials=r.withCredentials||!1,this.getXhr=r.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null)}return f(e,[{key:"requestRange",value:function(e,t,r){var n={begin:e,end:t}
for(var a in r)n[a]=r[a]
return this.request(n)}},{key:"requestFull",value:function(e){return this.request(e)}},{key:"request",value:function(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t}
for(var a in t.open("GET",this.url),t.withCredentials=this.withCredentials,this.httpHeaders){var i=this.httpHeaders[a]
void 0!==i&&t.setRequestHeader(a,i)}return this.isHttp&&"begin"in e&&"end"in e?(t.setRequestHeader("Range","bytes=".concat(e.begin,"-").concat(e.end-1)),n.expectedStatus=206):n.expectedStatus=200,t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r}},{key:"onProgress",value:function(e,t){var r,n=this.pendingRequests[e]
n&&(null===(r=n.onProgress)||void 0===r||r.call(n,t))}},{key:"onStateChange",value:function(e,t){var r=this.pendingRequests[e]
if(r){var n=r.xhr
if(n.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===n.readyState&&e in this.pendingRequests)if(delete this.pendingRequests[e],0===n.status&&this.isHttp){var a
null===(a=r.onError)||void 0===a||a.call(r,n.status)}else{var o=n.status||200
if(200===o&&206===r.expectedStatus||o===r.expectedStatus){var s=function(e){var t=e.response
return"string"!=typeof t?t:(0,i.stringToBytes)(t).buffer}(n)
if(206===o){var l=n.getResponseHeader("Content-Range"),u=/bytes (\d+)-(\d+)\/(\d+)/.exec(l)
r.onDone({begin:parseInt(u[1],10),chunk:s})}else if(s)r.onDone({begin:0,chunk:s})
else{var c
null===(c=r.onError)||void 0===c||c.call(r,n.status)}}else{var h
null===(h=r.onError)||void 0===h||h.call(r,n.status)}}}}},{key:"getRequestXhr",value:function(e){return this.pendingRequests[e].xhr}},{key:"isPendingRequest",value:function(e){return e in this.pendingRequests}},{key:"abortRequest",value:function(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}}]),e}(),v=function(){function e(t){h(this,e),this._source=t,this._manager=new p(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}return f(e,[{key:"_onRangeRequestReaderClosed",value:function(e){var t=this._rangeRequestReaders.indexOf(e)
t>=0&&this._rangeRequestReaders.splice(t,1)}},{key:"getFullReader",value:function(){return(0,i.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once."),this._fullRequestReader=new y(this._manager,this._source),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){var r=new m(this._manager,e,t)
return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){var t
null===(t=this._fullRequestReader)||void 0===t||t.cancel(e)
var r,n=u(this._rangeRequestReaders.slice(0))
try{for(n.s();!(r=n.n()).done;){r.value.cancel(e)}}catch(a){n.e(a)}finally{n.f()}}}]),e}()
t.PDFNetworkStream=v
var y=function(){function e(t,r){h(this,e),this._manager=t
var n={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=r.url,this._fullRequestId=t.requestFull(n),this._headersReceivedCapability=(0,i.createPromiseCapability)(),this._disableRange=r.disableRange||!1,this._contentLength=r.length,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null}var t
return f(e,[{key:"_onHeadersReceived",value:function(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=function(e){return t.getResponseHeader(e)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:r,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),a=n.allowRangeRequests,i=n.suggestedLength
a&&(this._isRangeSupported=!0),this._contentLength=i||this._contentLength,this._filename=(0,o.extractFilenameFromHeader)(r),this._isRangeSupported&&this._manager.abortRequest(e),this._headersReceivedCapability.resolve()}},{key:"_onDone",value:function(e){e&&(this._requests.length>0?this._requests.shift().resolve({value:e.chunk,done:!1}):this._cachedChunks.push(e.chunk))
if(this._done=!0,!(this._cachedChunks.length>0)){var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0}}},{key:"_onError",value:function(e){this._storedError=(0,o.createResponseStatusError)(e,this._url),this._headersReceivedCapability.reject(this._storedError)
var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.reject(this._storedError)}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0,this._cachedChunks.length=0}},{key:"_onProgress",value:function(e){var t
null===(t=this.onProgress)||void 0===t||t.call(this,{loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"contentLength",get:function(){return this._contentLength}},{key:"headersReady",get:function(){return this._headersReceivedCapability.promise}},{key:"read",value:(t=l(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._storedError){e.next=2
break}throw this._storedError
case 2:if(!(this._cachedChunks.length>0)){e.next=5
break}return t=this._cachedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 5:if(!this._done){e.next=7
break}return e.abrupt("return",{value:void 0,done:!0})
case 7:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._headersReceivedCapability.reject(e)
var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0,this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}}]),e}(),m=function(){function e(t,r,n){h(this,e),this._manager=t
var a={onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=t.url,this._requestId=t.requestRange(r,n,a),this._requests=[],this._queuedChunk=null,this._done=!1,this._storedError=void 0,this.onProgress=null,this.onClosed=null}var t
return f(e,[{key:"_close",value:function(){var e
null===(e=this.onClosed)||void 0===e||e.call(this,this)}},{key:"_onDone",value:function(e){var t=e.chunk
this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t
this._done=!0
var r,n=u(this._requests)
try{for(n.s();!(r=n.n()).done;){r.value.resolve({value:void 0,done:!0})}}catch(a){n.e(a)}finally{n.f()}this._requests.length=0,this._close()}},{key:"_onError",value:function(e){this._storedError=(0,o.createResponseStatusError)(e,this._url)
var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.reject(this._storedError)}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0,this._queuedChunk=null}},{key:"_onProgress",value:function(e){var t
this.isStreamingSupported||(null===(t=this.onProgress)||void 0===t||t.call(this,{loaded:e.loaded}))}},{key:"isStreamingSupported",get:function(){return!1}},{key:"read",value:(t=l(a.default.mark((function e(){var t,r
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._storedError){e.next=2
break}throw this._storedError
case 2:if(null===this._queuedChunk){e.next=6
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 6:if(!this._done){e.next=8
break}return e.abrupt("return",{value:void 0,done:!0})
case 8:return r=(0,i.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 11:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0
var t,r=u(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(n){r.e(n)}finally{r.f()}this._requests.length=0,this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}}]),e}()},(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFetchStream=void 0
var n,a=(n=r(145))&&n.__esModule?n:{default:n},i=r(1),o=r(166)
function s(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments
return new Promise((function(n,a){var i=e.apply(t,r)
function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)}))}}function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t,r){return{method:"GET",headers:e,signal:null==r?void 0:r.signal,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}function v(e){var t=new Headers
for(var r in e){var n=e[r]
void 0!==n&&t.append(r,n)}return t}var y=function(){function e(t){h(this,e),this.source=t,this.isHttp=/^https?:/i.test(t.url),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return f(e,[{key:"_progressiveDataLength",get:function(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}},{key:"getFullReader",value:function(){return(0,i.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once."),this._fullRequestReader=new m(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new g(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e)
var t,r=u(this._rangeRequestReaders.slice(0))
try{for(r.s();!(t=r.n()).done;){t.value.cancel(e)}}catch(n){r.e(n)}finally{r.f()}}}]),e}()
t.PDFFetchStream=y
var m=function(){function e(t){var r=this
h(this,e),this._stream=t,this._reader=null,this._loaded=0,this._filename=null
var n=t.source
this._withCredentials=n.withCredentials||!1,this._contentLength=n.length,this._headersCapability=(0,i.createPromiseCapability)(),this._disableRange=n.disableRange||!1,this._rangeChunkSize=n.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._isStreamingSupported=!n.disableStream,this._isRangeSupported=!n.disableRange,this._headers=v(this._stream.httpHeaders)
var a=n.url
fetch(a,p(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,a)
r._reader=e.body.getReader(),r._headersCapability.resolve()
var t=function(t){return e.headers.get(t)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:t,isHttp:r._stream.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),s=n.allowRangeRequests,l=n.suggestedLength
r._isRangeSupported=s,r._contentLength=l||r._contentLength,r._filename=(0,o.extractFilenameFromHeader)(t),!r._isStreamingSupported&&r._isRangeSupported&&r.cancel(new i.AbortException("Streaming is disabled."))})).catch(this._headersCapability.reject),this.onProgress=null}var t
return f(e,[{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"read",value:(t=l(a.default.mark((function e(){var t,r,n,i
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._headersCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),i=new Uint8Array(r).buffer,e.abrupt("return",{value:i,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}}]),e}(),g=function(){function e(t,r,n){var a=this
h(this,e),this._stream=t,this._reader=null,this._loaded=0
var s=t.source
this._withCredentials=s.withCredentials||!1,this._readCapability=(0,i.createPromiseCapability)(),this._isStreamingSupported=!s.disableStream,"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._headers=v(this._stream.httpHeaders),this._headers.append("Range","bytes=".concat(r,"-").concat(n-1))
var l=s.url
fetch(l,p(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,l)
a._readCapability.resolve(),a._reader=e.body.getReader()})).catch(this._readCapability.reject),this.onProgress=null}var t
return f(e,[{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"read",value:(t=l(a.default.mark((function e(){var t,r,n,i
return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded}),i=new Uint8Array(r).buffer,e.abrupt("return",{value:i,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}}]),e}()}],__webpack_module_cache__={}
function __w_pdfjs_require__(e){var t=__webpack_module_cache__[e]
if(void 0!==t)return t.exports
var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}}
return __webpack_modules__[e](r,r.exports,__w_pdfjs_require__),r.loaded=!0,r.exports}__w_pdfjs_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)
var __webpack_exports__={}
return(()=>{"use strict"
var e=__webpack_exports__
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AnnotationLayer",{enumerable:!0,get:function(){return a.AnnotationLayer}}),Object.defineProperty(e,"AnnotationMode",{enumerable:!0,get:function(){return t.AnnotationMode}}),Object.defineProperty(e,"CMapCompressionType",{enumerable:!0,get:function(){return t.CMapCompressionType}}),Object.defineProperty(e,"GlobalWorkerOptions",{enumerable:!0,get:function(){return i.GlobalWorkerOptions}}),Object.defineProperty(e,"InvalidPDFException",{enumerable:!0,get:function(){return t.InvalidPDFException}}),Object.defineProperty(e,"LoopbackPort",{enumerable:!0,get:function(){return r.LoopbackPort}}),Object.defineProperty(e,"MissingPDFException",{enumerable:!0,get:function(){return t.MissingPDFException}}),Object.defineProperty(e,"OPS",{enumerable:!0,get:function(){return t.OPS}}),Object.defineProperty(e,"PDFDataRangeTransport",{enumerable:!0,get:function(){return r.PDFDataRangeTransport}}),Object.defineProperty(e,"PDFDateString",{enumerable:!0,get:function(){return n.PDFDateString}}),Object.defineProperty(e,"PDFWorker",{enumerable:!0,get:function(){return r.PDFWorker}}),Object.defineProperty(e,"PasswordResponses",{enumerable:!0,get:function(){return t.PasswordResponses}}),Object.defineProperty(e,"PermissionFlag",{enumerable:!0,get:function(){return t.PermissionFlag}}),Object.defineProperty(e,"PixelsPerInch",{enumerable:!0,get:function(){return n.PixelsPerInch}}),Object.defineProperty(e,"RenderingCancelledException",{enumerable:!0,get:function(){return n.RenderingCancelledException}}),Object.defineProperty(e,"SVGGraphics",{enumerable:!0,get:function(){return l.SVGGraphics}}),Object.defineProperty(e,"UNSUPPORTED_FEATURES",{enumerable:!0,get:function(){return t.UNSUPPORTED_FEATURES}}),Object.defineProperty(e,"UnexpectedResponseException",{enumerable:!0,get:function(){return t.UnexpectedResponseException}}),Object.defineProperty(e,"Util",{enumerable:!0,get:function(){return t.Util}}),Object.defineProperty(e,"VerbosityLevel",{enumerable:!0,get:function(){return t.VerbosityLevel}}),Object.defineProperty(e,"XfaLayer",{enumerable:!0,get:function(){return u.XfaLayer}}),Object.defineProperty(e,"build",{enumerable:!0,get:function(){return r.build}}),Object.defineProperty(e,"createPromiseCapability",{enumerable:!0,get:function(){return t.createPromiseCapability}}),Object.defineProperty(e,"createValidAbsoluteUrl",{enumerable:!0,get:function(){return t.createValidAbsoluteUrl}}),Object.defineProperty(e,"getDocument",{enumerable:!0,get:function(){return r.getDocument}}),Object.defineProperty(e,"getFilenameFromUrl",{enumerable:!0,get:function(){return n.getFilenameFromUrl}}),Object.defineProperty(e,"getPdfFilenameFromUrl",{enumerable:!0,get:function(){return n.getPdfFilenameFromUrl}}),Object.defineProperty(e,"getXfaPageViewport",{enumerable:!0,get:function(){return n.getXfaPageViewport}}),Object.defineProperty(e,"isPdfFile",{enumerable:!0,get:function(){return n.isPdfFile}})
Object.defineProperty(e,"loadScript",{enumerable:!0,get:function(){return n.loadScript}}),Object.defineProperty(e,"renderTextLayer",{enumerable:!0,get:function(){return s.renderTextLayer}}),Object.defineProperty(e,"shadow",{enumerable:!0,get:function(){return t.shadow}}),Object.defineProperty(e,"version",{enumerable:!0,get:function(){return r.version}})
var t=__w_pdfjs_require__(1),r=__w_pdfjs_require__(144),n=__w_pdfjs_require__(147),a=__w_pdfjs_require__(160),i=__w_pdfjs_require__(154),o=__w_pdfjs_require__(3),s=__w_pdfjs_require__(163),l=__w_pdfjs_require__(164),u=__w_pdfjs_require__(162)
if(o.isNodeJS){var c=__w_pdfjs_require__(165).PDFNodeStream;(0,r.setPDFNetworkStreamFactory)((function(e){return new c(e)}))}else{var h=__w_pdfjs_require__(168).PDFNetworkStream,d=__w_pdfjs_require__(169).PDFFetchStream;(0,r.setPDFNetworkStreamFactory)((function(e){return(0,n.isValidFetchUrl)(e.url)?new d(e):new h(e)}))}})(),__webpack_exports__})()}))
