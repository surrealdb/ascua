(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,i){if(i.get||i.set)throw new TypeError("ES3 does not support getters and setters.")
t!=Array.prototype&&t!=Object.prototype&&(t[e]=i.value)},i="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this
function n(){n=function(){},i.Symbol||(i.Symbol=s)}var o=0
function s(t){return"jscomp_symbol_"+(t||"")+o++}function r(){n()
var t=i.Symbol.iterator
t||(t=i.Symbol.iterator=i.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&e(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return a(this)}}),r=function(){}}function a(t){var e=0
return function(t){return r(),(t={next:t})[i.Symbol.iterator]=function(){return this},t}(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})}function h(t){r(),n(),r()
var e=t[Symbol.iterator]
return e?e.call(t):a(t)}function c(t){if(!(t instanceof Array)){t=h(t)
for(var e,i=[];!(e=t.next()).done;)i.push(e.value)
t=i}return t}var u=window.Element.prototype,l=u.matches||u.matchesSelector||u.webkitMatchesSelector||u.mozMatchesSelector||u.msMatchesSelector||u.oMatchesSelector
function d(t,e){if(t&&1==t.nodeType&&e){if("string"==typeof e||1==e.nodeType)return t==e||f(t,e)
if("length"in e)for(var i,n=0;i=e[n];n++)if(t==i||f(t,i))return!0}return!1}function f(t,e){if("string"!=typeof e)return!1
if(l)return l.call(t,e)
e=t.parentNode.querySelectorAll(e)
for(var i,n=0;i=e[n];n++)if(i==t)return!0
return!1}function v(t,e,i){function n(t){var n
if(s.composed&&"function"==typeof t.composedPath)for(var o,r=t.composedPath(),a=0;o=r[a];a++)1==o.nodeType&&d(o,e)&&(n=o)
else t:{if((n=t.target)&&1==n.nodeType&&e)for(n=[n].concat(function(t){for(var e=[];t&&t.parentNode&&1==t.parentNode.nodeType;)t=t.parentNode,e.push(t)
return e}(n)),r=0;a=n[r];r++)if(d(a,e)){n=a
break t}n=void 0}n&&i.call(n,t,n)}var o=document,s=void 0===(s={composed:!0,S:!0})?{}:s
return o.addEventListener(t,n,s.S),{j:function(){o.removeEventListener(t,n,s.S)}}}var b=/:(80|443)$/,p=document.createElement("a"),m={}
function g(t){if(t=t&&"."!=t?t:location.href,m[t])return m[t]
if(p.href=t,"."==t.charAt(0)||"/"==t.charAt(0))return g(p.href)
var e="0"==(e="80"==p.port||"443"==p.port?"":p.port)?"":e,i=p.host.replace(b,"")
return m[t]={hash:p.hash,host:i,hostname:p.hostname,href:p.href,origin:p.origin?p.origin:p.protocol+"//"+i,pathname:"/"==p.pathname.charAt(0)?p.pathname:"/"+p.pathname,port:e,protocol:p.protocol,search:p.search}}var w=[]
function y(t,e){var i=this
this.context=t,this.P=e,this.f=(this.c=/Task$/.test(e))?t.get(e):t[e],this.b=[],this.a=[],this.g=function(t){for(var e=[],n=0;n<arguments.length;++n)e[n-0]=arguments[n]
return i.a[i.a.length-1].apply(null,[].concat(c(e)))},this.c?t.set(e,this.g):t[e]=this.g}function k(t,e,i){(t=E(t,e)).b.push(i),O(t)}function T(t,e,i){-1<(i=(t=E(t,e)).b.indexOf(i))&&(t.b.splice(i,1),0<t.b.length?O(t):t.j())}function O(t){t.a=[]
for(var e,i=0;e=t.b[i];i++){var n=t.a[i-1]||t.f.bind(t.context)
t.a.push(e(n))}}function E(t,e){var i=w.filter(function(i){return i.context==t&&i.P==e})[0]
return i||(i=new y(t,e),w.push(i)),i}function I(t,e,i,n,o,s){if("function"==typeof n){var r=i.get("buildHitTask")
return{buildHitTask:function(i){i.set(t,null,!0),i.set(e,null,!0),n(i,o,s),r(i)}}}return F({},t,e)}function S(t,e){var i=function(t){var e={}
if(!t||1!=t.nodeType)return e
if(!(t=t.attributes).length)return{}
for(var i,n=0;i=t[n];n++)e[i.name]=i.value
return e}(t),n={}
return Object.keys(i).forEach(function(t){if(!t.indexOf(e)&&t!=e+"on"){var o=i[t]
"true"==o&&(o=!0),"false"==o&&(o=!1),t=function(t){return t.replace(/[\-\_]+(\w?)/g,function(t,e){return e.toUpperCase()})}(t.slice(e.length)),n[t]=o}}),n}function x(t,e){var i
return function(n){for(var o=[],s=0;s<arguments.length;++s)o[s-0]=arguments[s]
clearTimeout(i),i=setTimeout(function(){return t.apply(null,[].concat(c(o)))},e)}}function j(t){function e(){i||(i=!0,t())}var i=!1
return setTimeout(e,2e3),e}y.prototype.j=function(){var t=w.indexOf(this);-1<t&&(w.splice(t,1),this.c?this.context.set(this.P,this.f):this.context[this.P]=this.f)}
var L={}
var F=Object.assign||function(t,e){for(var i=[],n=1;n<arguments.length;++n)i[n-1]=arguments[n]
n=0
for(var o=i.length;n<o;n++){var s,r=Object(i[n])
for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t}
function A(t){return"object"==typeof t&&null!==t}var M=function t(e){return e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,t)}
function P(t,e){var i=window.GoogleAnalyticsObject||"ga"
window[i]=window[i]||function(t){for(var e=[],n=0;n<arguments.length;++n)e[n-0]=arguments[n];(window[i].q=window[i].q||[]).push(e)},window.gaDevIds=window.gaDevIds||[],0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo"),window[i]("provide",t,e),window.gaplugins=window.gaplugins||{},window.gaplugins[t.charAt(0).toUpperCase()+t.slice(1)]=e}var C={T:1,U:2,V:3,X:4,Y:5,Z:6,$:7,aa:8,ba:9,W:10},D=Object.keys(C).length
function N(t,e){t.set("&_av","2.4.1")
var i=t.get("&_au")
if((i=parseInt(i||"0",16).toString(2)).length<D)for(var n=D-i.length;n;)i="0"+i,n--
e=D-e,i=i.substr(0,e)+1+i.substr(e+1),t.set("&_au",parseInt(i||"0",2).toString(16))}function H(t,e){N(t,C.T),this.a=F({},e),this.g=t,this.b=this.a.stripQuery&&this.a.queryDimensionIndex?"dimension"+this.a.queryDimensionIndex:null,this.f=this.f.bind(this),this.c=this.c.bind(this),k(t,"get",this.f),k(t,"buildHitTask",this.c)}function B(t,e){var i=g(e.page||e.location),n=i.pathname
if(t.a.indexFilename){var o=n.split("/")
t.a.indexFilename==o[o.length-1]&&(o[o.length-1]="",n=o.join("/"))}return"remove"==t.a.trailingSlash?n=n.replace(/\/+$/,""):"add"==t.a.trailingSlash&&(/\.\w+$/.test(n)||"/"==n.substr(-1)||(n+="/")),n={page:n+(t.a.stripQuery?q(t,i.search):i.search)},e.location&&(n.location=e.location),t.b&&(n[t.b]=i.search.slice(1)||"(not set)"),"function"==typeof t.a.urlFieldsFilter?(i={page:(e=t.a.urlFieldsFilter(n,g)).page,location:e.location},t.b&&(i[t.b]=e[t.b]),i):n}function q(t,e){if(Array.isArray(t.a.queryParamsWhitelist)){var i=[]
return e.slice(1).split("&").forEach(function(e){var n=h(e.split("="))
e=n.next().value,n=n.next().value,-1<t.a.queryParamsWhitelist.indexOf(e)&&n&&i.push([e,n])}),i.length?"?"+i.map(function(t){return t.join("=")}).join("&"):""}return""}function U(t,e){var i=this
if(N(t,C.U),window.addEventListener){this.a=F({events:["click"],fieldsObj:{},attributePrefix:"ga-"},e),this.f=t,this.c=this.c.bind(this)
var n="["+this.a.attributePrefix+"on]"
this.b={},this.a.events.forEach(function(t){i.b[t]=v(t,n,i.c)})}}function V(t,e){var i=this
N(t,C.V),window.IntersectionObserver&&window.MutationObserver&&(this.a=F({rootMargin:"0px",fieldsObj:{},attributePrefix:"ga-"},e),this.c=t,this.M=this.M.bind(this),this.O=this.O.bind(this),this.K=this.K.bind(this),this.L=this.L.bind(this),this.b=null,this.items=[],this.i={},this.h={},function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):t()}(function(){i.a.elements&&i.observeElements(i.a.elements)}))}function K(t,e){var i=[],n={},o={}
return e.length&&e.forEach(function(e){e=_(e),i.push(e),o[e.id]=t.i[e.id]||null,n[e.threshold]=t.h[e.threshold]||null}),{items:i,i:o,h:n}}function R(t,e,i){1==e.nodeType&&e.id in t.i&&i(e.id)
for(var n,o=0;n=e.childNodes[o];o++)R(t,n,i)}function _(t){return"string"==typeof t&&(t={id:t}),F({threshold:0,trackFirstImpressionOnly:!0},t)}function Z(){this.a={}}H.prototype.f=function(t){var e=this
return function(i){if("page"==i||i==e.b){var n={location:t("location"),page:t("page")}
return B(e,n)[i]}return t(i)}},H.prototype.c=function(t){var e=this
return function(i){var n=B(e,{location:i.get("location"),page:i.get("page")})
i.set(n,null,!0),t(i)}},H.prototype.remove=function(){T(this.g,"get",this.f),T(this.g,"buildHitTask",this.c)},P("cleanUrlTracker",H),U.prototype.c=function(t,e){var i=this.a.attributePrefix
if(!(0>e.getAttribute(i+"on").split(/\s*,\s*/).indexOf(t.type))){i=S(e,i)
var n=F({},this.a.fieldsObj,i)
this.f.send(i.hitType||"event",I({transport:"beacon"},n,this.f,this.a.hitFilter,e,t))}},U.prototype.remove=function(){var t=this
Object.keys(this.b).forEach(function(e){t.b[e].j()})},P("eventTracker",U),(t=V.prototype).observeElements=function(t){var e=this
t=K(this,t),this.items=this.items.concat(t.items),this.i=F({},t.i,this.i),this.h=F({},t.h,this.h),t.items.forEach(function(t){var i=e.h[t.threshold]=e.h[t.threshold]||new IntersectionObserver(e.O,{rootMargin:e.a.rootMargin,threshold:[+t.threshold]});(t=e.i[t.id]||(e.i[t.id]=document.getElementById(t.id)))&&i.observe(t)}),this.b||(this.b=new MutationObserver(this.M),this.b.observe(document.body,{childList:!0,subtree:!0})),requestAnimationFrame(function(){})},t.unobserveElements=function(t){var e=[],i=[]
if(this.items.forEach(function(n){t.some(function(t){return(t=_(t)).id===n.id&&t.threshold===n.threshold&&t.trackFirstImpressionOnly===n.trackFirstImpressionOnly})?i.push(n):e.push(n)}),e.length){var n=K(this,e),o=K(this,i)
this.items=n.items,this.i=n.i,this.h=n.h,i.forEach(function(t){if(!n.i[t.id]){var e=o.h[t.threshold],i=o.i[t.id]
i&&e.unobserve(i),n.h[t.threshold]||o.h[t.threshold].disconnect()}})}else this.unobserveAllElements()},t.unobserveAllElements=function(){var t=this
Object.keys(this.h).forEach(function(e){t.h[e].disconnect()}),this.b.disconnect(),this.b=null,this.items=[],this.i={},this.h={}},t.M=function(t){for(var e,i=0;e=t[i];i++){for(var n,o=0;n=e.removedNodes[o];o++)R(this,n,this.L)
for(o=0;n=e.addedNodes[o];o++)R(this,n,this.K)}},t.O=function(t){for(var e,i=[],n=0;e=t[n];n++)for(var o,s=0;o=this.items[s];s++){var r
if((r=e.target.id===o.id)&&((r=o.threshold)?r=e.intersectionRatio>=r:r=0<(r=e.intersectionRect).top||0<r.bottom||0<r.left||0<r.right),r){var a=o.id
r=document.getElementById(a)
a={transport:"beacon",eventCategory:"Viewport",eventAction:"impression",eventLabel:a,nonInteraction:!0}
var h=F({},this.a.fieldsObj,S(r,this.a.attributePrefix))
this.c.send("event",I(a,h,this.c,this.a.hitFilter,r)),o.trackFirstImpressionOnly&&i.push(o)}}i.length&&this.unobserveElements(i)},t.K=function(t){var e=this,i=this.i[t]=document.getElementById(t)
this.items.forEach(function(n){t==n.id&&e.h[n.threshold].observe(i)})},t.L=function(t){var e=this,i=this.i[t]
this.items.forEach(function(n){t==n.id&&e.h[n.threshold].unobserve(i)}),this.i[t]=null},t.remove=function(){this.unobserveAllElements()},P("impressionTracker",V),Z.prototype.ca=function(t,e){for(var i=[],n=1;n<arguments.length;++n)i[n-1]=arguments[n];(this.a[t]=this.a[t]||[]).forEach(function(t){return t.apply(null,[].concat(c(i)))})}
var G,J={},$=!1
function W(t,e){e=void 0===e?{}:e,this.a={},this.b=t,this.w=e,this.l=null}function Q(t,e,i){return t=["autotrack",t,e].join(":"),J[t]||(J[t]=new W(t,i),$||(window.addEventListener("storage",z),$=!0)),J[t]}function Y(){if(null!=G)return G
try{window.localStorage.setItem("autotrack","autotrack"),window.localStorage.removeItem("autotrack"),G=!0}catch(t){G=!1}return G}function X(t){if(t.l={},Y())try{window.localStorage.removeItem(t.b)}catch(e){}}function z(t){var e=J[t.key]
if(e){var i=F({},e.w,tt(t.oldValue))
t=F({},e.w,tt(t.newValue)),e.l=t,e.ca("externalSet",t,i)}}function tt(t){var e={}
if(t)try{e=JSON.parse(t)}catch(i){}return e}(function(t,e){function i(){}for(var n in i.prototype=e.prototype,t.ha=e.prototype,t.prototype=new i,t.prototype.constructor=t,e)if(Object.defineProperties){var o=Object.getOwnPropertyDescriptor(e,n)
o&&Object.defineProperty(t,n,o)}else t[n]=e[n]})(W,Z),W.prototype.get=function(){if(this.l)return this.l
if(Y())try{this.l=tt(window.localStorage.getItem(this.b))}catch(t){}return this.l=F({},this.w,this.l)},W.prototype.set=function(t){if(this.l=F({},this.w,this.l,t),Y())try{var e=JSON.stringify(this.l)
window.localStorage.setItem(this.b,e)}catch(i){}},W.prototype.j=function(){delete J[this.b],Object.keys(J).length||(window.removeEventListener("storage",z),$=!1)}
var et={}
function it(t,e,i){this.f=t,this.timeout=e||st,this.timeZone=i,this.b=this.b.bind(this),k(t,"sendHitTask",this.b)
try{this.c=new Intl.DateTimeFormat("en-US",{timeZone:this.timeZone})}catch(n){}this.a=Q(t.get("trackingId"),"session",{hitTime:0,isExpired:!1}),this.a.get().id||this.a.set({id:M()})}function nt(t,e,i){var n=t.get("trackingId")
return et[n]?et[n]:et[n]=new it(t,e,i)}function ot(t){return t.a.get().id}it.prototype.isExpired=function(t){if((t=void 0===t?ot(this):t)!=ot(this))return!0
if((t=this.a.get()).isExpired)return!0
var e=t.hitTime
return!!(e&&(t=new Date,e=new Date(e),t-e>6e4*this.timeout||this.c&&this.c.format(t)!=this.c.format(e)))},it.prototype.b=function(t){var e=this
return function(i){t(i)
var n=i.get("sessionControl")
i="start"==n||e.isExpired()
n="end"==n
var o=e.a.get()
o.hitTime=+new Date,i&&(o.isExpired=!1,o.id=M()),n&&(o.isExpired=!0),e.a.set(o)}},it.prototype.j=function(){T(this.f,"sendHitTask",this.b),this.a.j(),delete et[this.f.get("trackingId")]}
var st=30
function rt(t,e){N(t,C.W),window.addEventListener&&(this.b=F({increaseThreshold:20,sessionTimeout:st,fieldsObj:{}},e),this.f=t,this.c=ht(this),this.g=x(this.g.bind(this),500),this.o=this.o.bind(this),this.a=Q(t.get("trackingId"),"plugins/max-scroll-tracker"),this.m=nt(t,this.b.sessionTimeout,this.b.timeZone),k(t,"set",this.o),at(this))}function at(t){100>(t.a.get()[t.c]||0)&&window.addEventListener("scroll",t.g)}function ht(t){return(t=g(t.f.get("page")||t.f.get("location"))).pathname+t.search}rt.prototype.g=function(){var t=document.documentElement,e=document.body
t=Math.min(100,Math.max(0,Math.round(window.pageYOffset/(Math.max(t.offsetHeight,t.scrollHeight,e.offsetHeight,e.scrollHeight)-window.innerHeight)*100)))
if((e=ot(this.m))!=this.a.get().sessionId&&(X(this.a),this.a.set({sessionId:e})),this.m.isExpired(this.a.get().sessionId))X(this.a)
else if(t>(e=this.a.get()[this.c]||0)&&(100!=t&&100!=e||window.removeEventListener("scroll",this.g),e=t-e,100==t||e>=this.b.increaseThreshold)){var i={}
this.a.set((i[this.c]=t,i.sessionId=ot(this.m),i)),t={transport:"beacon",eventCategory:"Max Scroll",eventAction:"increase",eventValue:e,eventLabel:String(t),nonInteraction:!0},this.b.maxScrollMetricIndex&&(t["metric"+this.b.maxScrollMetricIndex]=e),this.f.send("event",I(t,this.b.fieldsObj,this.f,this.b.hitFilter))}},rt.prototype.o=function(t){var e=this
return function(i,n){t(i,n)
var o={};(A(i)?i:(o[i]=n,o)).page&&(i=e.c,e.c=ht(e),e.c!=i&&at(e))}},rt.prototype.remove=function(){this.m.j(),window.removeEventListener("scroll",this.g),T(this.f,"set",this.o)},P("maxScrollTracker",rt)
var ct={}
function ut(t,e){N(t,C.X),window.matchMedia&&(this.a=F({changeTemplate:this.changeTemplate,changeTimeout:1e3,fieldsObj:{}},e),A(this.a.definitions)&&(e=this.a.definitions,this.a.definitions=Array.isArray(e)?e:[e],this.b=t,this.c=[],function(t){t.a.definitions.forEach(function(e){if(e.name&&e.dimensionIndex){var i=lt(e)
t.b.set("dimension"+e.dimensionIndex,i),function(t,e){e.items.forEach(function(i){i=dt(i.media)
var n=x(function(){var i=lt(e),n=t.b.get("dimension"+e.dimensionIndex)
i!==n&&(t.b.set("dimension"+e.dimensionIndex,i),i={transport:"beacon",eventCategory:e.name,eventAction:"change",eventLabel:t.a.changeTemplate(n,i),nonInteraction:!0},t.b.send("event",I(i,t.a.fieldsObj,t.b,t.a.hitFilter)))},t.a.changeTimeout)
i.addListener(n),t.c.push({fa:i,da:n})})}(t,e)}})}(this)))}function lt(t){var e
return t.items.forEach(function(t){dt(t.media).matches&&(e=t)}),e?e.name:"(not set)"}function dt(t){return ct[t]||(ct[t]=window.matchMedia(t))}function ft(t,e){N(t,C.Y),window.addEventListener&&(this.a=F({formSelector:"form",shouldTrackOutboundForm:this.shouldTrackOutboundForm,fieldsObj:{},attributePrefix:"ga-"},e),this.b=t,this.c=v("submit",this.a.formSelector,this.f.bind(this)))}function vt(t,e){var i=this
N(t,C.Z),window.addEventListener&&(this.a=F({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},e),this.c=t,this.f=this.f.bind(this),this.b={},this.a.events.forEach(function(t){i.b[t]=v(t,i.a.linkSelector,i.f)}))}ut.prototype.remove=function(){for(var t,e=0;t=this.c[e];e++)t.fa.removeListener(t.da)},ut.prototype.changeTemplate=function(t,e){return t+" => "+e},P("mediaQueryTracker",ut),ft.prototype.f=function(t,e){var i={transport:"beacon",eventCategory:"Outbound Form",eventAction:"submit",eventLabel:g(e.action).href}
if(this.a.shouldTrackOutboundForm(e,g)){navigator.sendBeacon||(t.preventDefault(),i.hitCallback=j(function(){e.submit()}))
var n=F({},this.a.fieldsObj,S(e,this.a.attributePrefix))
this.b.send("event",I(i,n,this.b,this.a.hitFilter,e,t))}},ft.prototype.shouldTrackOutboundForm=function(t,e){return(t=e(t.action)).hostname!=location.hostname&&"http"==t.protocol.slice(0,4)},ft.prototype.remove=function(){this.c.j()},P("outboundFormTracker",ft),vt.prototype.f=function(t,e){var i=this
if(this.a.shouldTrackOutboundLink(e,g)){var n=e.getAttribute("href")||e.getAttribute("xlink:href"),o=g(n),s=I(o={transport:"beacon",eventCategory:"Outbound Link",eventAction:t.type,eventLabel:o.href},F({},this.a.fieldsObj,S(e,this.a.attributePrefix)),this.c,this.a.hitFilter,e,t)
if(navigator.sendBeacon||"click"!=t.type||"_blank"==e.target||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||1<t.which)this.c.send("event",s)
else{var r=function(){if(window.removeEventListener("click",r),!t.defaultPrevented){t.preventDefault()
var e=s.hitCallback
s.hitCallback=j(function(){"function"==typeof e&&e(),location.href=n})}i.c.send("event",s)}
window.addEventListener("click",r)}}},vt.prototype.shouldTrackOutboundLink=function(t,e){return(e=e(t=t.getAttribute("href")||t.getAttribute("xlink:href"))).hostname!=location.hostname&&"http"==e.protocol.slice(0,4)},vt.prototype.remove=function(){var t=this
Object.keys(this.b).forEach(function(e){t.b[e].j()})},P("outboundLinkTracker",vt)
var bt=M()
function pt(t,e){var i=this
N(t,C.$),document.visibilityState&&(this.a=F({sessionTimeout:st,visibleThreshold:5e3,sendInitialPageview:!1,fieldsObj:{}},e),this.b=t,this.g=document.visibilityState,this.m=null,this.o=!1,this.v=this.v.bind(this),this.s=this.s.bind(this),this.G=this.G.bind(this),this.N=this.N.bind(this),this.c=Q(t.get("trackingId"),"plugins/page-visibility-tracker"),function(t,e){(t.a.externalSet=t.a.externalSet||[]).push(e)}(this.c,this.N),this.f=nt(t,this.a.sessionTimeout,this.a.timeZone),k(t,"set",this.v),window.addEventListener("unload",this.G),document.addEventListener("visibilitychange",this.s),function(t,e){function i(){clearTimeout(o.timeout),o.send&&T(t,"send",o.send),delete L[n],o.R.forEach(function(t){return t()})}var n=t.get("trackingId"),o=L[n]=L[n]||{}
clearTimeout(o.timeout),o.timeout=setTimeout(i,0),o.R=o.R||[],o.R.push(e),o.send||(o.send=function(t){return function(e){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o]
i(),t.apply(null,[].concat(c(n)))}},k(t,"send",o.send))}(this.b,function(){if("visible"==document.visibilityState)i.a.sendInitialPageview&&(gt(i,{ea:!0}),i.o=!0),i.c.set({time:+new Date,state:"visible",pageId:bt,sessionId:ot(i.f)})
else if(i.a.sendInitialPageview&&i.a.pageLoadsMetricIndex){var t=((t={}).transport="beacon",t.eventCategory="Page Visibility",t.eventAction="page load",t.eventLabel="(not set)",t["metric"+i.a.pageLoadsMetricIndex]=1,t.nonInteraction=!0,t)
i.b.send("event",I(t,i.a.fieldsObj,i.b,i.a.hitFilter))}}))}function mt(t,e,i){var n=((n={hitTime:i=(i||{}).hitTime})||{}).hitTime;(e=e.time?(n||+new Date)-e.time:0)&&e>=t.a.visibleThreshold&&(n={transport:"beacon",nonInteraction:!0,eventCategory:"Page Visibility",eventAction:"track",eventValue:e=Math.round(e/1e3),eventLabel:"(not set)"},i&&(n.queueTime=+new Date-i),t.a.visibleMetricIndex&&(n["metric"+t.a.visibleMetricIndex]=e),t.b.send("event",I(n,t.a.fieldsObj,t.b,t.a.hitFilter)))}function gt(t,e){e=(i=e||{}).hitTime
var i=i.ea,n={transport:"beacon"}
e&&(n.queueTime=+new Date-e),i&&t.a.pageLoadsMetricIndex&&(n["metric"+t.a.pageLoadsMetricIndex]=1),t.b.send("pageview",I(n,t.a.fieldsObj,t.b,t.a.hitFilter))}function wt(t,e){N(t,C.aa),window.addEventListener&&(this.a=F({fieldsObj:{},hitFilter:null},e),this.b=t,this.u=this.u.bind(this),this.J=this.J.bind(this),this.D=this.D.bind(this),this.A=this.A.bind(this),this.B=this.B.bind(this),this.F=this.F.bind(this),"complete"!=document.readyState?window.addEventListener("load",this.u):this.u())}function yt(t,e){N(t,C.ba),history.pushState&&window.addEventListener&&(this.a=F({shouldTrackUrlChange:this.shouldTrackUrlChange,trackReplaceState:!1,fieldsObj:{},hitFilter:null},e),this.b=t,this.c=location.pathname+location.search,this.H=this.H.bind(this),this.I=this.I.bind(this),this.C=this.C.bind(this),k(history,"pushState",this.H),k(history,"replaceState",this.I),window.addEventListener("popstate",this.C))}function kt(t,e){setTimeout(function(){var i=t.c,n=location.pathname+location.search
i!=n&&t.a.shouldTrackUrlChange.call(t,n,i)&&(t.c=n,t.b.set({page:n,title:document.title}),(e||t.a.trackReplaceState)&&t.b.send("pageview",I({transport:"beacon"},t.a.fieldsObj,t.b,t.a.hitFilter)))},0)}(t=pt.prototype).s=function(){var t=this
if("visible"==document.visibilityState||"hidden"==document.visibilityState){var e=function(t){var e=t.c.get()
return"visible"==t.g&&"hidden"==e.state&&e.pageId!=bt&&(e.state="visible",e.pageId=bt,t.c.set(e)),e}(this),i={time:+new Date,state:document.visibilityState,pageId:bt,sessionId:ot(this.f)}
"visible"==document.visibilityState&&this.a.sendInitialPageview&&!this.o&&(gt(this),this.o=!0),"hidden"==document.visibilityState&&this.m&&clearTimeout(this.m),this.f.isExpired(e.sessionId)?(X(this.c),"hidden"==this.g&&"visible"==document.visibilityState&&(clearTimeout(this.m),this.m=setTimeout(function(){t.c.set(i),gt(t,{hitTime:i.time})},this.a.visibleThreshold))):(e.pageId==bt&&"visible"==e.state&&mt(this,e),this.c.set(i)),this.g=document.visibilityState}},t.v=function(t){var e=this
return function(i,n){var o={};(o=A(i)?i:(o[i]=n,o)).page&&o.page!==e.b.get("page")&&"visible"==e.g&&e.s(),t(i,n)}},t.N=function(t,e){t.time!=e.time&&(e.pageId!=bt||"visible"!=e.state||this.f.isExpired(e.sessionId)||mt(this,e,{hitTime:t.time}))},t.G=function(){"hidden"!=this.g&&this.s()},t.remove=function(){this.c.j(),this.f.j(),T(this.b,"set",this.v),window.removeEventListener("unload",this.G),document.removeEventListener("visibilitychange",this.s)},P("pageVisibilityTracker",pt),(t=wt.prototype).u=function(){if(window.FB)try{window.FB.Event.subscribe("edge.create",this.B),window.FB.Event.subscribe("edge.remove",this.F)}catch(t){}window.twttr&&this.J()},t.J=function(){var t=this
try{window.twttr.ready(function(){window.twttr.events.bind("tweet",t.D),window.twttr.events.bind("follow",t.A)})}catch(e){}},t.D=function(t){if("tweet"==t.region){var e={transport:"beacon",socialNetwork:"Twitter",socialAction:"tweet",socialTarget:t.data.url||t.target.getAttribute("data-url")||location.href}
this.b.send("social",I(e,this.a.fieldsObj,this.b,this.a.hitFilter,t.target,t))}},t.A=function(t){if("follow"==t.region){var e={transport:"beacon",socialNetwork:"Twitter",socialAction:"follow",socialTarget:t.data.screen_name||t.target.getAttribute("data-screen-name")}
this.b.send("social",I(e,this.a.fieldsObj,this.b,this.a.hitFilter,t.target,t))}},t.B=function(t){this.b.send("social",I({transport:"beacon",socialNetwork:"Facebook",socialAction:"like",socialTarget:t},this.a.fieldsObj,this.b,this.a.hitFilter))},t.F=function(t){this.b.send("social",I({transport:"beacon",socialNetwork:"Facebook",socialAction:"unlike",socialTarget:t},this.a.fieldsObj,this.b,this.a.hitFilter))},t.remove=function(){window.removeEventListener("load",this.u)
try{window.FB.Event.unsubscribe("edge.create",this.B),window.FB.Event.unsubscribe("edge.remove",this.F)}catch(t){}(function(t){try{window.twttr.ready(function(){window.twttr.events.unbind("tweet",t.D),window.twttr.events.unbind("follow",t.A)})}catch(e){}})(this)},P("socialWidgetTracker",wt),(t=yt.prototype).H=function(t){var e=this
return function(i){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o]
t.apply(null,[].concat(c(n))),kt(e,!0)}},t.I=function(t){var e=this
return function(i){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o]
t.apply(null,[].concat(c(n))),kt(e,!1)}},t.C=function(){kt(this,!0)},t.shouldTrackUrlChange=function(t,e){return!(!t||!e)},t.remove=function(){T(history,"pushState",this.H),T(history,"replaceState",this.I),window.removeEventListener("popstate",this.C)},P("urlChangeTracker",yt)})()
