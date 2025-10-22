function t(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new a(i,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",v=m.reactiveElementPolyfillSupport,_=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);o?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=n;const a=o.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??$)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[_("elementProperties")]=new Map,A[_("finalized")]=new Map,v?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=w.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,O=`<${C}>`,j=document,T=()=>j.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,U="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,z=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,V=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,F=j.createTreeWalker(j,129);function K(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,n=[];let o,a=2===e?"<svg>":3===e?"<math>":"",r=M;for(let e=0;e<i;e++){const i=t[e];let s,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===M?"!--"===c[1]?r=H:void 0!==c[1]?r=D:void 0!==c[2]?(V.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=z):void 0!==c[3]&&(r=z):r===z?">"===c[0]?(r=o??M,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,s=c[1],r=void 0===c[3]?z:'"'===c[3]?R:I):r===R||r===I?r=z:r===H||r===D?r=M:(r=z,o=void 0);const h=r===z&&t[e+1].startsWith("/>")?" ":"";a+=r===M?i+O:l>=0?(n.push(s),i.slice(0,l)+k+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[K(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class X{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,a=0;const r=t.length-1,s=this.parts,[c,l]=J(t,e);if(this.el=X.createElement(c,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=F.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(k)){const e=l[a++],i=n.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Q}),n.removeAttribute(t)}else t.startsWith(S)&&(s.push({type:6,index:o}),n.removeAttribute(t));if(V.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),F.nextNode(),s.push({type:2,index:++o});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===C)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)s.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,n){if(e===L)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=N(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,n)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??j).importNode(e,!0);F.currentNode=n;let o=F.nextNode(),a=0,r=0,s=i[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new G(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new nt(o,this,t)),this._$AV.push(e),s=i[++r]}a!==s?.index&&(o=F.nextNode(),a++)}return F.currentNode=j,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Z(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new G(this.O(T()),this.O(T()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,n){const o=this.strings;let a=!1;if(void 0===o)t=Y(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==L,a&&(this._$AH=t);else{const n=t;let r,s;for(t=o[0],r=0;r<o.length-1;r++)s=Y(this,n[i+r],e,r),s===L&&(s=this._$AH[r]),a||=!N(s)||s!==this._$AH[r],s===W?t=W:t!==W&&(t+=(s??"")+o[r+1]),this._$AH[r]=s}a&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Q{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??W)===L)return;const i=this._$AH,n=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(X,G),(w.litHtmlVersions??=[]).push("3.3.1");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rt=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new G(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};rt._$litElement$=!0,rt.finalized=!0,at.litElementHydrateSupport?.({LitElement:rt});const st=at.litElementPolyfillSupport;st?.({LitElement:rt}),(at.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,lt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},dt=(t=lt,e,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var pt,ut;function mt(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var gt=["closed","locked","off"],ft=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},vt={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function _t(t,e){if(t in vt)return vt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var bt=function(t){ft(window,"haptic",t)},$t=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var n,o=mt(e),a="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(a,n,{entity_id:e})}(t,e,gt.includes(t.states[e].state))},yt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(bt("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&ft(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),ft(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&($t(e,i.entity),bt("success"));break;case"call-service":if(!n.service)return void bt("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),bt("success");break;case"fire-dom-event":ft(t,"ll-custom",n)}};function At(t){return void 0!==t&&"none"!==t.action}function wt(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,i)=>(Object.keys(i).forEach((n=>{const o=t[n],a=i[n];Array.isArray(o)&&Array.isArray(a)?t[n]=o.concat(...a):e(o)&&e(a)?t[n]=wt(o,a):t[n]=a})),t)),{})}function xt(t,e,i){if(e.has("config")||i)return!0;for(const i of t._configArray)if(i.entity){const n=e.get("hass");if(n){if(n.states[i.entity]!==t.hass.states[i.entity])return!0;if(isNaN(i.target)&&n.states[i.target]!==t.hass.states[i.target])return!0;if(isNaN(i.min)&&n.states[i.min]!==t.hass.states[i.min])return!0;if(isNaN(i.max)&&n.states[i.max]!==t.hass.states[i.max])return!0;if(i.severity){for(const e of i.severity){if(isNaN(e.from)&&n.states[e.from]!==t.hass.states[e.from])return!0;if(isNaN(e.to)&&n.states[e.to]!==t.hass.states[e.to])return!0}continue}continue}return!0}return!1}function Et(t,e,i){const n=t[e],o=t.slice();return o.splice(e,1),o.splice(i,0,n),o}function kt(t,e){return void 0===e?NaN:"number"==typeof e?e:void 0!==t&&t.states[e]?Number(t.states[e].state):NaN}let St=class extends rt{constructor(){super(...arguments),this._configArray=[],this._entityOptionsArray=[]}shouldUpdate(t){return xt(this,t,!0)}setConfig(t){this._config=Object.assign({},t),t.entity||t.entities||(this._config.entity="none"),this._config.entity&&(this._configArray.push({entity:t.entity}),this._config.entities=[{entity:t.entity}],delete this._config.entity),this._configArray=function(t){const e=[];if(t.entities){for(const i of t.entities)if("string"==typeof i){const t=wt({},{entity:i});e.push(t)}else if("object"==typeof i){const t=wt({},i);e.push(t)}}else e.push(t);return e}(this._config),this._config.animation&&0===Object.entries(this._config.animation).length&&(delete this._config.animation,ft(this,"config-changed",{config:this._config})),this._config.positions&&0===Object.entries(this._config.positions).length&&(delete this._config.positions,ft(this,"config-changed",{config:this._config}));for(const t of this._configArray)t.animation&&0===Object.entries(t.animation).length&&delete t.animation,t.positions&&0===Object.entries(t.positions).length&&delete t.positions;this._config.entities=this._configArray,ft(this,"config-changed",{config:this._config});const e={icon:"format-list-numbered",name:"Bar",secondary:"Bar settings.",show:!1},i={icon:"numeric",name:"Value",secondary:"Value settings.",show:!1},n={icon:"card-bulleted",name:"Card",secondary:"Card settings.",show:!1},o={icon:"arrow-expand-horizontal",name:"Positions",secondary:"Set positions of card elements.",show:!1},a={icon:"exclamation-thick",name:"Severity",secondary:"Define bar colors based on value.",show:!1},r={icon:"animation",name:"Animation",secondary:"Define animation settings.",show:!1},s={show:!1,options:{positions:Object.assign({},o),bar:Object.assign({},e),value:Object.assign({},i),severity:Object.assign({},a),actions:Object.assign({},{icon:"gesture-tap",name:"Actions",secondary:"Coming soon... Use code editor for Actions.",show:!1}),animation:Object.assign({},r)}};for(let t=0;t<this._configArray.length;t++)this._entityOptionsArray.push(Object.assign({},s));this._options||(this._options={entities:{icon:"tune",name:"Entities",secondary:"Manage card entities.",show:!0,options:{entities:this._entityOptionsArray}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the global name, icon, etc.",show:!1,options:{positions:o,bar:e,value:i,card:n,severity:a,animation:r}}})}render(){return B`${this._createEntitiesElement()} ${this._createAppearanceElement()}`}_createActionsElement(t){const e=this._options.entities.options.entities[t].options.actions;return B`
      <div class="sub-category" style="opacity: 0.5;">
        <div>
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
      </div>
    `}_createEntitiesValues(){if(!this.hass||!this._config)return[B``];const t=this._options.entities,e=[];for(let i=0;i<this._configArray.length;i++){const n=this._configArray[i];e.push(B`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div style="display: flex; align-items: center; flex-direction: column;">
            <div
              style="font-size: 10px; margin-bottom: -8px; opacity: 0.5;"
              @click=${this._toggleThing}
              .options=${t.options.entities[i]}
              .optionsTarget=${t.options.entities}
              .index=${i}
            >
              options
            </div>
            <ha-icon
              icon="mdi:chevron-${t.options.entities[i].show?"up":"down"}"
              @click=${this._toggleThing}
              .options=${t.options.entities[i]}
              .optionsTarget=${t.options.entities}
              .index=${i}
            ></ha-icon>
          </div>
          <div class="value" style="flex-grow: 1;">
            <paper-input
              label="Entity"
              @value-changed=${this._valueChanged}
              .configAttribute=${"entity"}
              .configObject=${this._configArray[i]}
              .value=${n.entity}
            >
            </paper-input>
          </div>
          ${0!==i?B`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-up"
                  @click=${this._moveEntity}
                  .configDirection=${"up"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${i}
                ></ha-icon>
              `:B`<ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
          ${i!==this._configArray.length-1?B`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-down"
                  @click=${this._moveEntity}
                  .configDirection=${"down"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${i}
                ></ha-icon>
              `:B`<ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
          <ha-icon
            class="ha-icon-large"
            icon="mdi:close"
            @click=${this._removeEntity}
            .configAttribute=${"entity"}
            .configArray=${"entities"}
            .configIndex=${i}
          ></ha-icon>
        </div>
        ${t.options.entities[i].show?B`
              <div class="options">
                ${this._createBarElement(i)} ${this._createValueElement(i)}
                ${this._createPositionsElement(i)} ${this._createSeverityElement(i)}
                ${this._createAnimationElement(i)} ${this._createActionsElement(i)}
              </div>
            `:""}
      `)}return e}_createEntitiesElement(){if(!this.hass||!this._config)return B``;const t=this._options.entities;return B`
      <div class="card-config">
        <div class="option" @click=${this._toggleThing} .options=${t} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?B`
              <div class="card-background" style="max-height: 400px; overflow: auto;">
                ${this._createEntitiesValues()}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab
                    mini
                    icon="mdi:plus"
                    @click=${this._addEntity}
                    .configArray=${this._configArray}
                    .configAddValue=${"entity"}
                    .sourceArray=${this._config.entities}
                  ></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createAppearanceElement(){if(!this.hass)return B``;const t=this._options.appearance;return B`
        <div class="option" @click=${this._toggleThing} .options=${t} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon
              .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"}
              style="margin-left: auto;"
            ></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?B`
                <div class="card-background">
                  ${this._createCardElement()} ${this._createBarElement(null)} ${this._createValueElement(null)}
                  ${this._createPositionsElement(null)} ${this._createSeverityElement(null)}
                  ${this._createAnimationElement(null)}
                </div>
              `:""}
      </div>`}_createBarElement(t){let e,i;return null!==t?(e=this._options.entities.options.entities[t].options.bar,i=this._configArray[t]):(e=this._options.appearance.options.bar,i=this._config),B`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?B`
              <div class="value">
                <div>
                  <paper-dropdown-menu
                    label="Direction"
                    @selected-item-changed=${this._valueChanged}
                    .configObject=${i}
                    .configAttribute=${"direction"}
                    .ignoreNull=${!0}
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      attr-for-selected="item-name"
                      selected="${i.direction?i.direction:null}"
                    >
                      <paper-item item-name="right">right</paper-item>
                      <paper-item item-name="up">up</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                  ${i.direction?B`
                        <ha-icon
                          class="ha-icon-large"
                          icon="mdi:close"
                          @click=${this._valueChanged}
                          .value=${""}
                          .configAttribute=${"direction"}
                          .configObject=${i}
                        ></ha-icon>
                      `:""}
                </div>
                ${null!==t?B`
                      <paper-input
                        label="Name"
                        .value="${i.name?i.name:""}"
                        editable
                        .configAttribute=${"name"}
                        .configObject=${i}
                        @value-changed=${this._valueChanged}
                      ></paper-input>
                    `:""}
                <paper-input
                  label="Icon"
                  .value="${i.icon?i.icon:""}"
                  editable
                  .configAttribute=${"icon"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Height"
                  .value="${i.height?i.height:""}"
                  editable
                  .configAttribute=${"height"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Width"
                  .value="${i.width?i.width:""}"
                  editable
                  .configAttribute=${"width"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Color"
                  .value="${i.color?i.color:""}"
                  editable
                  .configAttribute=${"color"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_createAnimationElement(t){let e,i;return null!==t?(e=this._options.entities.options.entities[t].options.animation,i=this._configArray[t]):(e=this._options.appearance.options.animation,i=this._config),i.animation=Object.assign({},i.animation),B`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?i.animation?B`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configAttribute=${"state"}
                      .configObject=${i.animation}
                      .index=${t}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox
                        slot="dropdown-content"
                        attr-for-selected="item-name"
                        selected="${i.animation.state?i.animation.state:null}"
                      >
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                    ${i.animation.state?B`
                          <ha-icon
                            class="ha-icon-large"
                            icon="mdi:close"
                            @click=${this._valueChanged}
                            .value=${""}
                            .configAttribute=${"state"}
                            .configObject=${i.animation}
                            .index=${t}
                          ></ha-icon>
                        `:""}
                  </div>
                  <paper-input
                    label="Speed"
                    .value="${i.animation.speed?i.animation.speed:""}"
                    editable
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i.animation}
                    .index=${t}
                  ></paper-input>
                </div>
              `:B`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configObject=${i}
                      .configAttribute=${"state"}
                      .configAdd=${"animation"}
                      .index=${t}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox slot="dropdown-content" attr-for-selected="item-name">
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                  </div>
                  <paper-input
                    label="Speed"
                    editable
                    .value=${""}
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i}
                    .configAdd=${"animation"}
                    .index=${t}
                  ></paper-input>
                </div>
              `:""}
      </div>
    `}_createSeverityElement(t){let e,i;null!==t?(e=this._options.entities.options.entities[t].options.severity,i=this._configArray[t]):(e=this._options.appearance.options.severity,i=this._config);const n=i.severity?i.severity.length:0;return B`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?B`
              <div class="card-background" style="overflow: auto; max-height: 420px;">
                ${n>0?B`${this._createSeverityValues(t)}`:""}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab mini icon="mdi:plus" @click=${this._addSeverity} .index=${t}></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createSeverityValues(t){let e;e=null===t?this._config:this._configArray[t];const i=[];for(const n of e.severity){const o=e.severity.indexOf(n);i.push(B`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div class="value">
            <div style="display:flex;">
              <paper-input
                label="From"
                type="number"
                .value="${n.from||0===n.from?n.from:""}"
                editable
                .severityAttribute=${"from"}
                .index=${t}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="To"
                type="number"
                .value="${n.to?n.to:""}"
                editable
                .severityAttribute=${"to"}
                .index=${t}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            <div style="display:flex;">
              <paper-input
                label="Color"
                .value="${n.color?n.color:""}"
                editable
                .severityAttribute=${"color"}
                .index=${t}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="Icon"
                .value="${n.icon?n.icon:""}"
                editable
                .severityAttribute=${"icon"}
                .index=${t}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            ${n.hide?B`
                  <ha-switch
                    checked
                    .severityAttribute=${"hide"}
                    .index=${t}
                    .severityIndex=${o}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `:B`
                  <ha-switch
                    unchecked
                    .severityAttribute=${"hide"}
                    .index=${t}
                    .severityIndex=${o}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `}
          </div>
          <div style="display: flex;">
            ${0!==o?B`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-up"
                    @click=${this._moveSeverity}
                    .configDirection=${"up"}
                    .index=${t}
                    .severityIndex=${o}
                  ></ha-icon>
                `:B`<ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
            ${o!==e.severity.length-1?B`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-down"
                    @click=${this._moveSeverity}
                    .configDirection=${"down"}
                    .index=${t}
                    .severityIndex=${o}
                  ></ha-icon>
                `:B`<ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._removeSeverity}
              .index=${t}
              .severityIndex=${o}
            ></ha-icon>
          </div>
        </div>
      `)}return i}_createCardElement(){if(!this.hass)return B``;const t=this._config,e=this._options.appearance.options.card;return B`
      <div class="category" id="card">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?B`
              <div class="value-container">
                <paper-input
                  editable
                  label="Header Title"
                  .value="${t.title?t.title:""}"
                  .configObject=${t}
                  .configAttribute=${"title"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Columns"
                  .value=${t.columns?t.columns:""}
                  .configObject=${t}
                  .configAttribute=${"columns"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div>
                  ${t.entity_row?B`
                        <ha-switch
                          checked
                          .configAttribute=${"entity_row"}
                          .configObject=${t}
                          .value=${!t.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `:B`
                        <ha-switch
                          unchecked
                          .configAttribute=${"entity_row"}
                          .configObject=${t}
                          .value=${!t.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `}
                </div>
              </div>
            `:""}
      </div>
    `}_createPositionsValues(t){let e;e=null===t?this._config:this._configArray[t],e.positions=Object.assign({},e.positions);const i=[],n=Object.keys({icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"});for(const t of n)e.positions[t]?i.push(B`
          <div class="value">
            <paper-dropdown-menu
              label="${t}"
              @value-changed=${this._valueChanged}
              .configAttribute=${t}
              .configObject=${e.positions}
              .ignoreNull=${!0}
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                .selected=${e.positions[t]}
              >
                <paper-item item-name="inside">inside</paper-item>
                <paper-item item-name="outside">outside</paper-item>
                <paper-item item-name="off">off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._valueChanged}
              .value=${""}
              .configAttribute=${t}
              .configObject=${e.positions}
            ></ha-icon>
          </div>
        `):i.push(B`
          <div class="value">
            <paper-dropdown-menu
              label="${t}"
              @value-changed=${this._valueChanged}
              .configAttribute=${t}
              .configObject=${e.positions}
            >
              <paper-listbox slot="dropdown-content" .selected=${null}>
                <paper-item>inside</paper-item>
                <paper-item>outside</paper-item>
                <paper-item>off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        `);return i}_createPositionsElement(t){if(!this.hass)return B``;let e;return e=null===t?this._options.appearance.options.positions:this._options.entities.options.entities[t].options.positions,B`
      <div class="category">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?B`${this._createPositionsValues(t)}`:""}
      </div>
    `}_createValueElement(t){if(!this.hass)return B``;let e,i;return null!==t?(e=this._options.entities.options.entities[t].options.value,i=this._configArray[t]):(e=this._options.appearance.options.value,i=this._config),B`
      <div class="category" id="value">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?B`
              <div class="value">
                ${i.limit_value?B`
                      <ha-switch
                        checked
                        .configAttribute=${"limit_value"}
                        .configObject=${i}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `:B`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"limit_value"}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `}
                ${i.complementary?B`
                      <ha-switch
                        checked
                        .configAttribute=${"complementary"}
                        .configObject=${i}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `:B`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"complementary"}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `}
                <paper-input
                  class="value-number"
                  label="Decimal"
                  type="number"
                  .value="${i.decimal?i.decimal:""}"
                  editable
                  .configAttribute=${"decimal"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Min"
                  .value="${i.min?i.min:""}"
                  editable
                  .configAttribute=${"min"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Max"
                  .value="${i.max?i.max:""}"
                  editable
                  .configAttribute=${"max"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Target"
                  .value="${i.target?i.target:""}"
                  editable
                  .configAttribute=${"target"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Unit of Measurement"
                  .value="${i.unit_of_measurement?i.unit_of_measurement:""}"
                  editable
                  .configAttribute=${"unit_of_measurement"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Attribute"
                  .value="${i.attribute?i.attribute:""}"
                  editable
                  .configAttribute=${"attribute"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_toggleThing(t){const e=t.target.options,i=!e.show;if(t.target.optionsTarget)if(Array.isArray(t.target.optionsTarget))for(const e of t.target.optionsTarget)e.show=!1;else for(const[e]of Object.entries(t.target.optionsTarget))t.target.optionsTarget[e].show=!1;e.show=i,this._toggle=!this._toggle}_addEntity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=e.configAddObject?e.configAddObject:{[e.configAddValue]:""};const n=e.configArray.slice();n.push(i),this._config.entities=n,ft(this,"config-changed",{config:this._config})}_moveEntity(t){if(!this._config||!this.hass)return;const e=t.target;let i=e.configArray.slice();"up"==e.configDirection?i=Et(i,e.index,e.index-1):"down"==e.configDirection&&(i=Et(i,e.index,e.index+1)),this._config.entities=i,ft(this,"config-changed",{config:this._config})}_removeEntity(t){if(!this._config||!this.hass)return;const e=t.target,i=[];for(let t=0;t<this._configArray.length;t++)e.configIndex!==t&&i.push(this._configArray[t]);const n={[e.configArray]:i};this._config=Object.assign(this._config,n),ft(this,"config-changed",{config:this._config})}_addSeverity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=null===e.index?this._config.severity:this._config.entities[e.index].severity,i||(i=[]);const n=i.slice();n.push({from:"",to:"",color:""}),null===e.index?this._config.severity=n:this._configArray[e.index].severity=n,this._config.entities=this._configArray,ft(this,"config-changed",{config:this._config})}_moveSeverity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=null===e.index?this._config.severity:this._config.entities[e.index].severity;let n=i.slice();"up"==e.configDirection?n=Et(n,e.severityIndex,e.severityIndex-1):"down"==e.configDirection&&(n=Et(n,e.severityIndex,e.severityIndex+1)),null===e.index?this._config.severity=n:this._configArray[e.index].severity=n,this._config.entities=this._configArray,ft(this,"config-changed",{config:this._config})}_removeSeverity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=null===e.index?this._config.severity:this._configArray[e.index].severity;const n=i.slice(),o=[];for(let t=0;t<n.length;t++)e.severityIndex!==t&&o.push(n[t]);null===e.index?0===o.length?delete this._config.severity:this._config.severity=o:0===o.length?delete this._configArray[e.index].severity:this._configArray[e.index].severity=o,this._config.entities=this._configArray,ft(this,"config-changed",{config:this._config})}_updateSeverity(t){const e=t.target;let i;i=null===e.index?this._config.severity:this._configArray[e.index].severity;const n=[];for(const t in i)if(e.severityIndex==t){const o=Object.assign({},i[t]),a={[e.severityAttribute]:e.value},r=Object.assign(o,a);""==e.value&&delete r[e.severityAttribute],n.push(r)}else n.push(i[t]);null===e.index?this._config.severity=n:this._configArray[e.index].severity=n,this._config.entities=this._configArray,ft(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(e.configObject[e.configAttribute]!=e.value){if(e.configAdd&&""!==e.value&&(e.configObject=Object.assign(e.configObject,{[e.configAdd]:{[e.configAttribute]:e.value}})),e.configAttribute&&e.configObject&&!e.configAdd)if(""==e.value||!1===e.value){if(1==e.ignoreNull)return;delete e.configObject[e.configAttribute]}else e.configObject[e.configAttribute]=e.value;this._config.entities=this._configArray,ft(this,"config-changed",{config:this._config})}}static get styles(){return r`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .options {
        background: var(--primary-background-color);
        border-radius: var(--ha-card-border-radius);
        cursor: pointer;
        padding: 8px;
      }
      .sub-category {
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
        margin-top: 14px;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .value {
        padding: 0px 8px;
      }
      .value-container {
        padding: 0px 8px;
        transition: all 0.5s ease-in-out;
      }
      .value-container:target {
        height: 50px;
      }
      .value-number {
        width: 100px;
      }
      ha-fab {
        margin: 8px;
      }
      ha-switch {
        padding: 16px 0;
      }
      .card-background {
        background: var(--paper-card-background-color);
        border-radius: var(--ha-card-border-radius);
        padding: 8px;
      }
      .category {
        background: #0000;
      }
      .ha-icon-large {
        cursor: pointer;
        margin: 0px 4px;
      }
    `}};t([ht()],St.prototype,"hass",void 0),t([ht()],St.prototype,"_config",void 0),t([ht()],St.prototype,"_toggle",void 0),St=t([ct("bar-card-editor")],St),window.customCards=window.customCards||[],window.customCards.push({type:"bar-card",name:"Bar Card Unofficial",preview:!1,description:"A customizable bar card."});class Ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Ot="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class jt extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ot?"100px":"50px",height:Ot?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1}));const i=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime),this.cooldownStart=!0,window.setTimeout((()=>this.cooldownStart=!1),100)},n=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?ft(t,"action",{action:"hold"}):e.hasDoubleTap?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout((()=>{ft(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),ft(t,"action",{action:"double_tap"})):ft(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout((()=>this.cooldownEnd=!1),100))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("keyup",(t=>{if(13===t.keyCode)return n(t)}));/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-bar",jt);const Tt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-bar"))return t.querySelector("action-handler-bar");const e=document.createElement("action-handler-bar");return t.appendChild(e),e})();i&&i.bind(t,e)};const Nt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ct{constructor(t){super(t),this.options={}}render(t={}){this.options=t}update(t,[e]){Tt(t.element,e||{}),this.render(e)}});var Pt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_available:"Entity not available"},Ut={card_name:"Bar Card Unofficial",card_description:"Card settings.",entities:"Entities",entities_description:"Manage card entities.",appearance:"Appearance",appearance_description:"Customize the global name, icon, etc.",bar:"Bar",bar_description:"Bar settings.",value:"Value",value_description:"Value settings.",card:"Card",positions:"Positions",positions_description:"Set positions of card elements.",actions:"Actions",actions_description:"Coming soon... Use code editor for Actions.",severity:"Severity",severity_description:"Define bar colors based on value.",animation:"Animation",animation_description:"Define animation settings.",entity:"Entity",direction:"Direction",name:"Name",icon:"Icon",height:"Height",width:"Width",color:"Color",state:"State",speed:"Speed",from:"From",to:"To",header_title:"Header Title",columns:"Columns",decimal:"Decimal",min:"Min",max:"Max",target:"Target",unit_of_measurement:"Unit of Measurement",attribute:"Attribute",limit_value:"Limit Value",complementary:"Complementary",entity_row:"Entity Row",stack_horizontal:"Stack Horizontal",options:"options",direction_right:"right",direction_up:"up",position_inside:"inside",position_outside:"outside",position_off:"off",state_auto:"auto",state_on:"on",state_off:"off",animation_increase:"increase",animation_decrease:"decrease"},Mt={common:Pt,editor:Ut},Ht={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel",entity_not_available:"Enhet ikke tilgjengelig"},Dt={card_name:"Bar Card Uoffisiell",card_description:"Kort-innstillinger.",entities:"Enheter",entities_description:"Administrer kort-enheter.",appearance:"Utseende",appearance_description:"Tilpass det globale navnet, ikonet, osv.",bar:"Stolpe",bar_description:"Stolpe-innstillinger.",value:"Verdi",value_description:"Verdi-innstillinger.",card:"Kort",positions:"Posisjoner",positions_description:"Angi posisjoner for kortelementer.",actions:"Handlinger",actions_description:"Kommer snart... Bruk kodeeditor for Handlinger.",severity:"Alvorlighet",severity_description:"Definer stolpefarger basert på verdi.",animation:"Animasjon",animation_description:"Definer animasjonsinnstillinger.",entity:"Enhet",direction:"Retning",name:"Navn",icon:"Ikon",height:"Høyde",width:"Bredde",color:"Farge",state:"Tilstand",speed:"Hastighet",from:"Fra",to:"Til",header_title:"Overskrift",columns:"Kolonner",decimal:"Desimaler",min:"Min",max:"Maks",target:"Mål",unit_of_measurement:"Måleenhet",attribute:"Attributt",limit_value:"Begrens verdi",complementary:"Komplementær",entity_row:"Enhet-rad",stack_horizontal:"Stable horisontalt",options:"alternativer",direction_right:"høyre",direction_up:"opp",position_inside:"inne",position_outside:"ute",position_off:"av",state_auto:"auto",state_on:"på",state_off:"av",animation_increase:"øke",animation_decrease:"redusere"},zt={common:Ht,editor:Dt},It={version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Afficher l'avertissement",entity_not_available:"Entité indisponible"},Rt={card_name:"Bar Card Non-officiel",card_description:"Paramètres de la carte.",entities:"Entités",entities_description:"Gérer les entités de la carte.",appearance:"Apparence",appearance_description:"Personnaliser le nom global, l'icône, etc.",bar:"Barre",bar_description:"Paramètres de la barre.",value:"Valeur",value_description:"Paramètres de valeur.",card:"Carte",positions:"Positions",positions_description:"Définir les positions des éléments de la carte.",actions:"Actions",actions_description:"Bientôt disponible... Utilisez l'éditeur de code pour les Actions.",severity:"Sévérité",severity_description:"Définir les couleurs de barre selon la valeur.",animation:"Animation",animation_description:"Définir les paramètres d'animation.",entity:"Entité",direction:"Direction",name:"Nom",icon:"Icône",height:"Hauteur",width:"Largeur",color:"Couleur",state:"État",speed:"Vitesse",from:"De",to:"À",header_title:"Titre de l'en-tête",columns:"Colonnes",decimal:"Décimales",min:"Min",max:"Max",target:"Cible",unit_of_measurement:"Unité de mesure",attribute:"Attribut",limit_value:"Limiter la valeur",complementary:"Complémentaire",entity_row:"Ligne d'entité",stack_horizontal:"Empiler horizontalement",options:"options",direction_right:"droite",direction_up:"haut",position_inside:"intérieur",position_outside:"extérieur",position_off:"désactivé",state_auto:"auto",state_on:"activé",state_off:"désactivé",animation_increase:"augmentation",animation_decrease:"diminution"},Vt={common:It,editor:Rt};const Bt={en:Object.freeze({__proto__:null,common:Pt,default:Mt,editor:Ut}),nb:Object.freeze({__proto__:null,common:Ht,default:zt,editor:Dt}),fr:Object.freeze({__proto__:null,common:It,default:Vt,editor:Rt})};function Lt(t,e,i="",n=""){let o="en";(null==t?void 0:t.locale.language)&&(o=null==t?void 0:t.locale.language);const a=e.split(".")[0],r=e.split(".")[1];let s;try{s=Bt[o][a][r],void 0===s&&(s=Bt.en[a][r])}catch(t){s=Bt.en[a][r]}return""!==i&&""!==n&&(s=s.replace(i,n)),s}const Wt=B`
  <style>
    .warning {
      display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;
    }
    #states {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    #states > * {
      margin-bottom: 8px;
    }
    #states > :last-child {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    #states > :first-child {
      margin-top: 0px;
    }
    ha-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    bar-card-row {
      display: flex;
      flex-grow: 1;
    }
    bar-card-row > div {
      flex-basis: 100%;
    }
    bar-card-row:empty {
      display: none;
    }
    bar-card-card {
      display: flex;
      flex-basis: 100%;
      flex-direction: row;
      margin-right: 8px;
    }
    bar-card-card:last-child {
      margin-right: 0px;
    }
    bar-card-background {
      cursor: pointer;
      flex-grow: 1;
      position: relative;
    }
    bar-card-iconbar {
      color: var(--icon-color, var(--paper-item-icon-color));
      align-items: center;
      align-self: center;
      display: flex;
      height: 40px;
      justify-content: center;
      position: relative;
      width: 40px;
    }
    bar-card-currentbar,
    bar-card-backgroundbar,
    bar-card-contentbar,
    bar-card-targetbar,
    bar-card-animationbar {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: var(--bar-card-border-radius, var(--ha-card-border-radius));
    }
    bar-card-contentbar {
      align-items: center;
      color: var(--primary-text-color);
      display: flex;
      justify-content: flex-start;
    }
    .contentbar-direction-right {
      flex-direction: row;
    }
    .contentbar-direction-up {
      flex-direction: column;
    }
    bar-card-backgroundbar {
      background: var(--bar-color);
      filter: brightness(0.5);
      opacity: 0.25;
    }
    bar-card-currentbar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--bar-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
    }
    bar-card-targetbar {
      background: linear-gradient(
        to var(--bar-direction),
        #0000 var(--bar-percent),
        var(--bar-color) var(--bar-percent),
        var(--bar-color) var(--bar-target-percent),
        #0000 var(--bar-target-percent)
      );
      display: var(--target-display);
      filter: brightness(0.66);
      opacity: 0.33;
    }
    bar-card-markerbar {
      background: var(--bar-color);
      filter: brightness(0.75);
      opacity: 50%;
      position: absolute;
    }
    bar-card-animationbar {
      background-repeat: no-repeat;
      filter: brightness(0.75);
      opacity: 0%;
    }
    .animationbar-horizontal {
      background: linear-gradient(to var(--animation-direction), var(--bar-color) 0%, var(--bar-color) 1%, #0000 1%);
    }
    .animationbar-vertical {
      background: linear-gradient(to var(--animation-direction), #0000 0%, #0000 1%, var(--bar-color) 1%);
    }
    @keyframes animation-increase {
      0% {
        opacity: 50%;
        background-size: var(--bar-percent) 100%;
      }
      100% {
        opacity: 0%;
        background-size: 10000% 100%;
      }
    }
    @keyframes animation-decrease {
      0% {
        opacity: 0%;
        background-size: 10000%;
      }
      100% {
        opacity: 50%;
        background-size: var(--bar-percent);
      }
    }
    @keyframes animation-increase-vertical {
      0% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
      100% {
        background-size: 100% 0%;
        opacity: 0%;
      }
    }
    @keyframes animation-decrease-vertical {
      0% {
        background-size: 100% 100%;
        opacity: 0%;
      }
      100% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
    }
    bar-card-indicator {
      align-self: center;
      color: var(--primary-text-color);
      height: 16px;
      width: 16px;
      position: relative;
      text-align: center;
      z-index: 1;
    }
    .indicator-direction-right {
      margin-right: -16px;
      left: -6px;
    }
    .indicator-direction-up {
      margin: 4px;
    }
    bar-card-name {
      align-items: center;
      align-self: center;
      justify-content: center;
      margin: 4px;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
    }
    .name-outside {
      margin-left: 16px;
    }
    bar-card-value,
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      align-self: center;
      position: relative;
    }
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      font-size: 10px;
      margin: 2px;
      opacity: 0.5;
    }
    .min-direction-up {
      margin-top: auto;
    }
    .min-direction-right {
      margin-left: auto;
    }
    bar-card-divider {
      margin-left: 0px;
      margin-right: 0px;
    }
    bar-card-value {
      white-space: nowrap;
      margin: 4px;
    }
    .value-direction-right {
      margin-left: auto;
    }
    .value-direction-up {
      margin-top: auto;
    }
  </style>
`;let qt=class extends rt{constructor(){super(...arguments),this._configArray=[],this._stateArray=[],this._animationState=[],this._rowAmount=1}static async getConfigElement(){return document.createElement("bar-card-editor")}static getStubConfig(){return{}}shouldUpdate(t){return xt(this,t,!1)}setConfig(t){if(!t)throw new Error(Lt(this.hass,"common.invalid_configuration"));this._config=wt({animation:{state:"off",speed:5},color:"var(--bar-card-color, var(--primary-color))",columns:1,direction:"right",max:100,min:0,positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"}},t),"horizontal"==this._config.stack&&(this._config.columns=this._config.entities.length),this._configArray=function(t){const e=[];if(t.entities){for(const i of t.entities)if("string"==typeof i){const n=wt({},t);delete n.entities;const o=wt(n,{entity:i});e.push(o)}else if("object"==typeof i){const n=wt({},t);delete n.entities;const o=wt(n,i);e.push(o)}}else e.push(t);return e}(this._config),this._rowAmount=this._configArray.length/this._config.columns}render(){return this._config&&this.hass?B`
      <ha-card
        .header=${this._config.title?this._config.title:null}
        style="${this._config.entity_row?"background: #0000; box-shadow: none;":""}"
      >
        <div
          id="states"
          class="card-content"
          style="${this._config.entity_row?"padding: 0px;":""} ${"up"==this._config.direction?"":"flex-grow: 0;"}"
        >
          ${this._createBarArray()}
        </div>
      </ha-card>
      ${Wt}
    `:B``}_createBarArray(){var t;const e=[];for(let t=0;t<this._configArray.length;t++)(e.length+1)*this._config.columns==t&&e.push(this._config.columns),this._configArray.length==t+1&&e.push(this._configArray.length-e.length*this._config.columns);const i=[];for(let n=0;n<e.length;n++){const o=[];for(let i=0;i<e[n];i++){const e=n*this._config.columns+i,a=this._configArray[e],r=this.hass.states[a.entity];if(!r){o.push(B`
            <div class="warning" style="margin-bottom: 8px;">
              ${Lt(this.hass,"common.entity_not_available")}: ${a.entity}
            </div>
          `);continue}let s;if(s=a.attribute?r.attributes[a.attribute]:r.state,a.severity&&this._computeSeverityVisibility(s,e))continue;const c=kt(this.hass,a.max),l=kt(this.hass,a.min);a.limit_value&&(s=Math.min(s,c),s=Math.max(s,l)),isNaN(Number(s))||(0==a.decimal?s=Number(s).toFixed(0):a.decimal&&(s=Number(s).toFixed(a.decimal)));let d=40;a.height&&(d=a.height);let h,p,u,m,g,f,v,_,b,$,y,A="stretch",w="0px 0px 0px 13px",x="right",E="row",k="left",S="height: 100%; width: 2px;";switch(a.direction){case"right":x="right",k="left";break;case"up":w="0px",x="top",E="column-reverse",k="bottom",S="height: 2px; width: 100%;"}switch(u=this._computeSeverityIcon(s,e)?this._computeSeverityIcon(s,e):a.icon?a.icon:r.attributes.icon?r.attributes.icon:_t(mt(a.entity),s),a.positions.icon){case"outside":h=B`
              <bar-card-iconbar>
                <ha-icon icon="${u}"></ha-icon>
              </bar-card-iconbar>
            `;break;case"inside":p=B`
              <bar-card-iconbar>
                <ha-icon icon="${u}"></ha-icon>
              </bar-card-iconbar>
            `,w="0px";break;case"off":w="0px"}if(a.name)if(null===(t=this.hass)||void 0===t?void 0:t.states[a.name]){const t=this.hass.states[a.name];m=t.state,"measurement"===t.attributes.state_class&&(m+=" "+t.attributes.unit_of_measurement)}else m=a.name;else m=r.attributes.friendly_name;switch(a.positions.name){case"outside":g=B`
              <bar-card-name
                class="${a.entity_row?"name-outside":""}"
                style="${"up"==a.direction?"":a.width?`width: calc(100% - ${a.width});`:""}"
                >${m}</bar-card-name
              >
            `,w="0px";break;case"inside":f=B`<bar-card-name>${m}</bar-card-name>`}switch(v=isNaN(Number(s))?"":a.unit_of_measurement?a.unit_of_measurement:r.attributes.unit_of_measurement,a.positions.minmax){case"outside":_=B`
              <bar-card-min>${l}${v}</bar-card-min>
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max>${c}${v}</bar-card-max>
            `;break;case"inside":b=B`
              <bar-card-min class="${"up"==a.direction?"min-direction-up":"min-direction-right"}"
                >${l}${v}</bar-card-min
              >
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max> ${c}${v}</bar-card-max>
            `}switch(a.positions.value){case"outside":$=B`
              <bar-card-value class="${"up"==a.direction?"value-direction-up":"value-direction-right"}"
                >${a.complementary?c-s:s} ${v}</bar-card-value
              >
            `;break;case"inside":y=B`
              <bar-card-value
                class="${"inside"==a.positions.minmax?"":"up"==a.direction?"value-direction-up":"value-direction-right"}"
                >${a.complementary?c-s:s} ${v}</bar-card-value
              >
            `;break;case"off":w="0px"}let C="";s>this._stateArray[e]?(C="▲","up"==a.direction?this._animationState[e]="animation-increase-vertical":this._animationState[e]="animation-increase"):s<this._stateArray[e]?(C="▼","up"==a.direction?this._animationState[e]="animation-decrease-vertical":this._animationState[e]="animation-decrease"):this._animationState[e]=this._animationState[e],isNaN(Number(s))&&(C="");const O=this._computeBarColor(s,e);let j,T;switch(a.positions.indicator){case"outside":j=B`
              <bar-card-indicator
                class="${"up"==a.direction?"":"indicator-direction-right"}"
                style="--bar-color: ${O};"
                >${C}</bar-card-indicator
              >
            `;break;case"inside":T=B`
              <bar-card-indicator style="--bar-color: ${O};">${C}</bar-card-indicator>
            `}const N=this._computePercent(s,e,l,c),P=kt(this.hass,a.target);if(void 0!==a.target&&isNaN(P)){o.push(B`
            <div class="warning" style="margin-bottom: 8px;">
              ${Lt(this.hass,"common.entity_not_available")}: ${a.target}
            </div>
          `);continue}const U=this._computePercent(P.toString(),e,l,c);let M=N,H=this._computePercent(P.toString(),e,l,c);H<M&&(M=H,H=N);let D="";a.width&&(A="center",D=`width: ${a.width}`);const z=this._animationState[e];let I="right",R=100*N,V="animationbar-horizontal";"animation-increase-vertical"!=z&&"animation-decrease-vertical"!=z||(I="bottom",V="animationbar-vertical",R=100*(100-N)),o.push(B`
          <bar-card-card
            style="flex-direction: ${E}; align-items: ${A};"
            @action=${this._handleAction}
            .config=${a}
            .actionHandler=${Nt({hasHold:At(a.hold_action),hasDoubleClick:At(a.double_tap_action)})}
          >
            ${h} ${j} ${g}
            <bar-card-background
              style="margin: ${w}; height: ${d}${"number"==typeof d?"px":""}; ${D}"
            >
              <bar-card-backgroundbar style="--bar-color: ${O};"></bar-card-backgroundbar>
              ${"on"==a.animation.state?B`
                    <bar-card-animationbar
                      style="animation: ${z} ${a.animation.speed}s infinite ease-out; --bar-percent: ${R}%; --bar-color: ${O}; --animation-direction: ${I};"
                      class="${V}"
                    ></bar-card-animationbar>
                  `:""}
              <bar-card-currentbar
                style="--bar-color: ${O}; --bar-percent: ${N}%; --bar-direction: ${x}"
              ></bar-card-currentbar>
              ${a.target?B`
                    <bar-card-targetbar
                      style="--bar-color: ${O}; --bar-percent: ${M}%; --bar-target-percent: ${H}%; --bar-direction: ${x};"
                    ></bar-card-targetbar>
                    <bar-card-markerbar
                      style="--bar-color: ${O}; --bar-target-percent: ${U}%; ${k}: calc(${U}% - 1px); ${S}}"
                    ></bar-card-markerbar>
                  `:""}
              <bar-card-contentbar
                class="${"up"==a.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${p} ${T} ${f} ${b} ${y}
              </bar-card-contentbar>
            </bar-card-background>
            ${_} ${$}
          </bar-card-card>
        `),s!==this._stateArray[e]&&(this._stateArray[e]=s)}i.push(o)}let n="column";(this._config.columns||this._config.stack)&&(n="row");const o=[];for(const t of i)o.push(B`<bar-card-row style="flex-direction: ${n};">${t}</bar-card-row>`);return o}_computeBarColor(t,e){const i=this._configArray[e];let n;return n=i.severity?this._computeSeverityColor(t,e):"unavailable"==t?`var(--bar-card-disabled-color, ${i.color})`:i.color,n}_computeSeverityColor(t,e){const i=this._configArray[e],n=Number(t),o=i.severity;let a;return isNaN(n)?o.forEach((e=>{t==e.text&&(a=e.color)})):o.forEach((t=>{const e=kt(this.hass,t.from),i=kt(this.hass,t.to);n>=e&&n<=i&&(a=t.color)})),null==a&&(a=i.color),a}_computeSeverityVisibility(t,e){const i=this._configArray[e],n=Number(t),o=i.severity;let a=!1;return isNaN(n)?o.forEach((e=>{t==e.text&&(a=e.hide)})):o.forEach((t=>{const e=kt(this.hass,t.from),i=kt(this.hass,t.to);n>=e&&n<=i&&(a=t.hide)})),a}_computeSeverityIcon(t,e){const i=this._configArray[e],n=Number(t),o=i.severity;let a=!1;return!!o&&(isNaN(n)?o.forEach((e=>{t==e.text&&(a=e.icon)})):o.forEach((t=>{const e=kt(this.hass,t.from),i=kt(this.hass,t.to);n>=e&&n<=i&&(a=t.icon)})),a)}_computePercent(t,e,i,n){const o=this._configArray[e],a=Number(t);if("unavailable"==t)return 0;if(isNaN(a))return 100;switch(o.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(a-i)/(n-i);default:return 100*(a-i)/(n-i)}}_handleAction(t){this.hass&&t.target.config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),yt(t,e,i,o)}(this,this.hass,t.target.config,t.detail.action)}getCardSize(){if(this._config.height){const t=this._config.height.toString();return Math.trunc(Number(t.replace("px",""))/50*this._rowAmount)+1}return this._rowAmount+1}};t([ht()],qt.prototype,"hass",void 0),t([ht()],qt.prototype,"_config",void 0),t([ht()],qt.prototype,"_configArray",void 0),qt=t([ct("bar-card")],qt);export{qt as BarCard};
