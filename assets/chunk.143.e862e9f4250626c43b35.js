var __ember_auto_import__;(()=>{var e={635:(e,t,i)=>{"use strict"
function r(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t,i,r){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(r):void 0})}function o(e,t,i,r,n){var o={}
return Object.keys(r).forEach((function(e){o[e]=r[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,r){return r(e,t,i)||i}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}i.d(t,{_:()=>o,a:()=>n,b:()=>r})},168:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>d})
var r=i(635),n=i(574)
const o=require("@ember/component/helper")
var l=i.n(o)
const s=require("@ember/object/internals")
var a,u,p
let d=(a=(0,n.inject)("page-title"),u=class extends(l()){get tokenId(){return(0,s.guidFor)(this)}constructor(){super(...arguments),(0,r.a)(this,"tokens",p,this),this.tokens.push({id:this.tokenId})}compute(e,t){let i={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(i),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},p=(0,r._)(u.prototype,"tokens",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)},682:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>v})
var r=i(635)
const n=require("@ember/application"),o=require("@ember/runloop")
var l=i(574),s=i.n(l)
const a=require("@ember/utils"),u=require("@ember/debug")
var p,d,c,h,f
let b="undefined"!=typeof FastBoot
const m="routeDidChange"
let v=(p=(0,l.inject)("router"),d=(0,l.inject)("-document"),c=class extends(s()){constructor(){super(...arguments),(0,r.a)(this,"router",h,this),(0,r.a)(this,"document",f,this),(0,r.b)(this,"tokens",[]),(0,r.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,r.b)(this,"scheduleTitleUpdate",(()=>{(0,o.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement()
let e=(0,n.getOwner)(this).resolveRegistration("config:environment")
e.pageTitle&&["separator","prepend","replace"].forEach((t=>{(0,a.isEmpty)(e.pageTitle[t])||(this._defaultConfig[t]=e.pageTitle[t])})),this.router.on(m,this.scheduleTitleUpdate)}applyTokenDefaults(e){let t=this._defaultConfig.separator,i=this._defaultConfig.prepend,r=this._defaultConfig.replace
null==e.separator&&(e.separator=t),null==e.prepend&&null!=i&&(e.prepend=i),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){let t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){let t=this._findTokenById(e.id)
if(t){let i=this.tokens.indexOf(t),r=[...this.tokens],n=t.previous
return e.previous=n,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(i,1,e),void(this.tokens=r)}let i=this.tokens.slice(-1)[0]
i&&(e.previous=i,i.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){let t=this._findTokenById(e),{next:i,previous:r}=t
i&&(i.previous=r),r&&(r.next=i),t.previous=t.next=null
let n=[...this.tokens]
n.splice(n.indexOf(t),1),this.tokens=n}get visibleTokens(){let e=this.tokens,t=e?e.length:0,i=[]
for(;t--;){let r=e[t]
if(r.replace){i.unshift(r)
break}i.unshift(r)}return i}get sortedTokens(){let e=this.visibleTokens,t=!0,i=[],r=[i],n=[]
return e.forEach((e=>{if(e.front)n.unshift(e)
else if(e.prepend){t&&(t=!1,i=[],r.push(i))
let n=i[0]
n&&((e={...e}).separator=n.separator),i.unshift(e)}else t||(t=!0,i=[],r.push(i)),i.push(e)})),n.concat(r.reduce(((e,t)=>e.concat(t)),[]))}toString(){let e=this.sortedTokens,t=[]
for(let i=0,r=e.length;i<r;i++){let n=e[i]
n.title&&(t.push(n.title),i+1<r&&t.push(n.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(m,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
b?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){b||(0,u.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!b)return
const t=this.document.head,i=t.childNodes
for(let o=0;o<i.length;o++){let e=i[o]
"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}let r=this.document.createElement("title"),n=this.document.createTextNode(e)
r.appendChild(n),t.appendChild(r)}titleDidUpdate(){}},h=(0,r._)(c.prototype,"router",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=(0,r._)(c.prototype,"document",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)},574:e=>{"use strict"
e.exports=require("@ember/service")},597:(e,t,i)=>{var r,n
e.exports=(r=_eai_d,n=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?n("_eai_dyn_"+e):n("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return n("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},r("ember-page-title/helpers/page-title",["@ember/service"],(function(){return i(168)})),void r("ember-page-title/services/page-title",["@ember/service"],(function(){return i(682)})))},651:function(e,t){window._eai_r=require,window._eai_d=define}},t={}
function i(r){var n=t[r]
if(void 0!==n)return n.exports
var o=t[r]={exports:{}}
return e[r].call(o.exports,o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(651)
var r=i(597)
__ember_auto_import__=r})()
