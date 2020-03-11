define("~fastboot/app-factory",["ascua/app","ascua/config/environment"],(function(e,t){return e=e.default,t=t.default,{default:function(){return e.create(t.APP)}}})),define("ascua/initializers/ajax",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.get,r=function(e){var r=t(this,"fastboot.request.protocol")
if(/^\/\//.test(e.url))e.url=r+e.url
else if(!/^https?:\/\//.test(e.url))try{e.url=r+"//"+t(this,"fastboot.request.host")+e.url}catch(o){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+o.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)},o={name:"ajax-service",initialize:function(e){e.register("ajax:node",r,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}
e.default=o})),define("ascua/initializers/error-handler",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"error-handler",initialize:function(){Ember.onerror||(Ember.onerror=function(e){var t="There was an error running your app in fastboot. More info about the error: \n ".concat(e.stack||e)
console.error(t)})}}
e.default=t})),define("ascua/instance-initializers/content-security-policy",["exports","@ascua/config"],(function(e,t){"use strict"
function r(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n="'self'",i={report:!0,policy:{"default-src":["'none'"],"img-src":[n],"style-src":[n],"script-src":[n],"connect-src":[n],"block-all-mixed-content":null}},a={name:"content-security-policy",initialize:function(e){if(void 0!==t.default.CSP){var n=e.lookup("service:fastboot"),a=Object.assign({},i,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.default.CSP))
"production"!==t.default.environment&&(a.report=!0)
var s=Object.keys(a.policy).map((function(e){switch(!0){case"string"==typeof a.policy[e]:return e+" "+a.policy[e]
case!0===Array.isArray(a.policy[e]):return e+" "+(t=a.policy[e],t.filter((function(e,t,r){return r.indexOf(e)===t}))).join(" ")
default:return e}var t})).join("; ")
switch(a.report){case!0:return n.response.headers.set("Content-Security-Policy-Report-Only",s)
case!1:return n.response.headers.set("Content-Security-Policy",s)}}}}
e.default=a})),define("ascua/instance-initializers/setup-fetch",["exports","fetch"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"fetch",initialize:function(e){var r=e.lookup("service:fastboot");(0,t.setupFastboot)(r.get("request"))}}
e.default=r}))
