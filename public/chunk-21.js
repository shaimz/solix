(window.webpackJsonp=window.webpackJsonp||[]).push([[18,89],{135:function(t,e,i){"use strict";i.r(e);var r=i(258),s=i(244),a=i(250),n=i(265),o=i(413),l=i(246),c=i(256),d={name:"email",props:{title:String,id:Number,type:String},components:{Navbar:()=>i.e(3).then(i.bind(null,181))},data:()=>({valid:!1,header:"",email:"",typeItem:"",headerRules:[t=>3<=t.length],text:"",csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}),methods:{discard(){this.header="",this.text=""},send(){let t="";t=("call"===this.typeItem?this.call:"product"===this.typeItem?this.product:this.service).email,axios.post("/admin/requests/mail",{header:this.header,text:this.text,email:t}).then(t=>{$(`<p class="success-sending text-success mt-2">${t.data}</p>`).insertBefore(".row.justify-content-end"),setTimeout(()=>{$(".success-sending").remove()},2500),this.header="",this.text=""})}},created(){switch(Vue.set(this,"typeItem",this.$router.currentRoute.path.split("/")[this.$router.currentRoute.path.split("/").length-2]),this.typeItem){case"product":this.$store.dispatch("productRequest",this.$router.currentRoute.params.id);break;case"service":this.$store.dispatch("serviceRequest",this.$router.currentRoute.params.id);break;case"call":this.$store.dispatch("callRequest",this.$router.currentRoute.params.id)}},computed:{service(){return this.$store.getters.getServiceRequestById},product(){return this.$store.getters.getProductRequestById},call(){return this.$store.getters.getCallRequestById},tabs(){var t={};return t[this.title]=this.title,t["Send Email"]="Send Email",t}},mounted(){},watch:{typeItem(t,e){}}},u=i(11);u=Object(u.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar",{attrs:{heading:"Email",tabs:[t.tabs],"email-page":!0}}),t._v(" "),e(n.a,{staticClass:"notification-form",attrs:{method:"POST"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.csrf}}),t._v(" "),e("h4",{staticClass:"form-title"},[t._v("Send email")]),t._v(" "),e(a.a,{staticClass:"email-notification"},[e("h5",{staticClass:"email-title"},[t._v("Article")]),t._v(" "),e(o.a,[e(s.a,{attrs:{cols:"12"}},[e(l.a,{staticClass:"border-0",attrs:{rules:t.headerRules,counter:10,placeholder:"Heading",required:"",name:"header"},model:{value:t.header,callback:function(e){t.header=e},expression:"header"}})],1)],1),t._v(" "),e(o.a,[e(s.a,{attrs:{cols:"12"}},[e(c.a,{attrs:{placeholder:"Body",required:"",name:"text"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1),t._v(" "),e(o.a,{staticClass:"d-flex justify-content-end"},[e(r.a,{staticClass:"discard-form",attrs:{width:"auto"},on:{click:t.discard}},[t._v("\n                    Discard\n                ")]),t._v(" "),e(r.a,{staticClass:"submit-form",attrs:{width:"auto",right:""},nativeOn:{click:function(e){return t.send.apply(null,arguments)}}},[t._v("\n                    SEND\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},206:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return c}));var r=i(2);const s=/;(?![^(]*\))/g,a=/:(.*)/;function n(t){var e={};for(const i of t.split(s)){let[t,s]=i.split(a);(t=t.trim())&&("string"==typeof s&&(s=s.trim()),e[Object(r.c)(t)]=s)}return e}function o(){var t,e,i={};let s,a=arguments.length;for(;a--;)for(s of Object.keys(arguments[a]))switch(s){case"class":case"directives":arguments[a][s]&&(i[s]=l(i[s],arguments[a][s]));break;case"style":arguments[a][s]&&(i[s]=(t=i[s],e=arguments[a][s],t?e?(t=Object(r.E)("string"==typeof t?n(t):t)).concat("string"==typeof e?n(e):e):t:e));break;case"staticClass":arguments[a][s]&&(void 0===i[s]&&(i[s]=""),i[s]&&(i[s]+=" "),i[s]+=arguments[a][s].trim());break;case"on":case"nativeOn":arguments[a][s]&&(i[s]=c(i[s],arguments[a][s]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":arguments[a][s]&&(i[s]||(i[s]={}),i[s]={...arguments[a][s],...i[s]});break;default:i[s]||(i[s]=arguments[a][s])}return i}function l(t,e){return e?t?Object(r.E)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];var e={};for(let r=2;r--;){var i=t[r];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},207:function(t,e,i){"use strict";var r,s,a=i(210),n=i(27),o=i(219),l=i(26),c=i(2),d=i(0);i=i(25);(s=r=r||{}).xSmall="12px",s.small="16px",s.default="24px",s.medium="28px",s.large="36px",s.xLarge="40px";const u=Object(i.a)(a.a,n.a,o.a,l.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:()=>!1,hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c.A)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge};var e=Object(c.x)(t).find(e=>t[e]);return e&&r[e]||Object(c.h)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){var t=this.getSize();t={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(t),t},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){var i=[],r=this.getDefaultData();let s="material-icons";var a,n,o=(n=t.indexOf("-"))<=-1;return(n=(o?i.push(t):(s=t.slice(0,n),a=s,["fas","far","fal","fab","fad","fak"].some(t=>a.includes(t))&&(s="")),r.class[s]=!0,r.class[t]=!o,this.getSize()))&&(r.style={fontSize:n}),this.applyColors(r),e(this.hasClickListener?"button":this.tag,r,i)},renderSvgIcon(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(i.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){var i={class:{"v-icon__component":!0}},r=((r=this.getSize())&&(i.style={fontSize:r,height:r,width:r}),this.applyColors(i),t.component);return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,i)])}},render(t){var e,i=this.getIcon();return"string"==typeof i?/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e=i)&&/[\dz]$/i.test(e)&&4<e.length?this.renderSvgIcon(i,t):this.renderFontIcon(i,t):this.renderSvgIconComponent(i,t)}});e.a=d.default.extend({name:"v-icon",$_wrapperFor:u,functional:!0,render(t,{data:e,children:i}){let r="";return e.domProps&&(r=e.domProps.textContent||e.domProps.innerHTML||r,delete e.domProps.textContent,delete e.domProps.innerHTML),t(u,e,r?[r]:i)}})},211:function(t,e,i){"use strict";i=i(0),r="value",s="change";var r,s;i=i.default.extend({name:"proxyable",model:{prop:r,event:s},props:{[r]:{required:!1}},data(){return{internalLazyValue:this[r]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(s,t))}}},watch:{[r](t){this.internalLazyValue=t}}});e.a=i},213:function(t,e,i){"use strict";i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return d})),i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return h}));var r=i(206);function s(t=[],...e){return Array().concat(t,...e)}function a(t,e="top center 0",i){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render(e,i){var a="transition"+(i.props.group?"-group":""),n={props:{name:t,mode:i.props.mode},on:{beforeEnter(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(n.on.leave=s(n.on.leave,t=>{var{offsetTop:e,offsetLeft:i,offsetWidth:r,offsetHeight:s}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=i+"px",t.style.width=r+"px",t.style.height=s+"px"}),n.on.afterLeave=s(n.on.afterLeave,t=>{var e,i,r,s,a;t&&t._transitionInitialStyles&&(({position:e,top:i,left:r,width:s,height:a}=t._transitionInitialStyles),delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=i||"",t.style.left=r||"",t.style.width=s||"",t.style.height=a||"")})),i.props.hideOnLeave&&(n.on.leave=s(n.on.leave,t=>{t.style.setProperty("display","none","important")})),e(a,Object(r.a)(i.data,n),i.children)}}}function n(t,e,i="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:i}},render:(i,s)=>i("transition",Object(r.a)(s.data,{props:{name:t},on:e}),s.children)}}function o(t="",e=!1){const i=e?"width":"height",r="offset"+Object(l.D)(i);return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},enter(e){var s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const a=e[r]+"px";e.style[i]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[i]=a})},afterEnter:a,enterCancelled:a,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=t[r]+"px",t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){var e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}}var l=i(2);a("carousel-transition"),a("carousel-reverse-transition"),a("tab-transition"),a("tab-reverse-transition"),a("menu-transition"),a("fab-transition","center center","out-in"),a("dialog-transition"),a("dialog-bottom-transition"),a("dialog-top-transition");const c=a("fade-transition");a("scale-transition"),a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition");const d=a("slide-x-transition");a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition");const u=n("expand-transition",o()),h=n("expand-x-transition",o("",!0))},214:function(t,e,i){"use strict";var r=i(0),s=i(213),a=i(28),n=i(27),o=i(218),l=i(211),c=i(26),d=i(2),u=(i=i(25),Object(i.a)(n.a,Object(o.b)(["absolute","fixed","top","bottom"]),l.a,c.a).extend({name:"v-progress-linear",directives:{intersect:a.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d.h)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d.h)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.isReversed?"right":"left"]:Object(d.h)(this.normalizedValue,"%"),width:Object(d.h)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?s.c:s.d},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d.h)(this.normalizedBuffer,"%")),t}},methods:{genContent(){var t=Object(d.r)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){var e;this.reactive&&(e=this.$el.getBoundingClientRect().width,this.internalValue=t.offsetX/e*100)},onObserve(t,e,i){this.isVisible=i},normalize:t=>t<0?0:100<t?100:parseFloat(t)},render(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d.h)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}));e.a=r.default.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(u,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},215:function(t,e,i){"use strict";i=i(207),e.a=i.a},224:function(t,e,i){"use strict";e.a={inserted:function(t,e,i){var r=e.value,s=e.options||{passive:!0};window.addEventListener("resize",r,s),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:r,options:s},e.modifiers&&e.modifiers.quiet||r()},unbind:function(t,e,i){var r,s;null!=(r=t._onResize)&&r[i.context._uid]&&(({callback:r,options:s}=t._onResize[i.context._uid]),window.removeEventListener("resize",r,s),delete t._onResize[i.context._uid])}}},244:function(t,e,i){"use strict";i(220);var r=i(0),s=i(206),a=i(2);const n=["sm","md","lg","xl"];i=n.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{});var o=n.reduce((t,e)=>(t["offset"+Object(a.D)(e)]={type:[String,Number],default:null},t),{}),l=n.reduce((t,e)=>(t["order"+Object(a.D)(e)]={type:[String,Number],default:null},t),{});const c={col:Object.keys(i),offset:Object.keys(o),order:Object.keys(l)},d=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:r}){let a="";for(const t in e)a+=String(e[t]);let n=d.get(a);if(!n){let t;for(t in n=[],c)c[t].forEach(i=>{var r=e[i];(i=function(t,e,i){let r=t;if(null!=i&&!1!==i)return e&&(r+="-"+(e=e.replace(t,""))),("col"!==t||""!==i&&!0!==i)&&(r+="-"+i),r.toLowerCase()}(t,i,r))&&n.push(i)});var o=n.some(t=>t.startsWith("col-"));n.push({col:!o||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),d.set(a,n)}return t(e.tag,Object(s.a)(i,{class:n}),r)}})},250:function(t,e,i){"use strict";i(231),i(220);var r=i(240),s=i(206);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:r}){let a;const n=i.attrs;return n&&(i.attrs={},a=Object.keys(n).filter(t=>{var e;return"slot"!==t&&(e=n[t],t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"==typeof e)})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(s.a)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),r)}})},256:function(t,e,i){"use strict";var r=i(246);i=i(25),i=Object(i.a)(r.a);e.a=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...r.a.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null!=(e=this.$refs.input)&&e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){var t,e,i=this.$refs.input;i&&(i.style.height="0",t=i.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight),i.style.height=Math.max(e,t)+"px")},genInput(){var t=r.a.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){r.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},265:function(t,e,i){"use strict";var r=i(25),s=i(210);i=i(228);e.a=Object(r.a)(s.a,Object(i.b)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){t=Object.values(t).includes(!0),this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",r=>{!r||this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);var i;e&&((i=this.watchers.find(t=>t._uid===e._uid))&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid))}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})}}]);