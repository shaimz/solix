(window.webpackJsonp=window.webpackJsonp||[]).push([[19,88],{127:function(t,e,i){"use strict";function s(){var t=this,e=t._self._c;return e(r.a,{style:{zIndex:t.options.zIndex},attrs:{id:"delete-action","max-width":t.options.width},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.a,[e(c.a,{attrs:{dark:"",color:"#79C25A",dense:"",flat:""}},[e(d.a,{staticClass:"white--text"},[t._v(t._s(t.title))])],1),t._v(" "),e(o.b,{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}],staticClass:"pa-4"},[t._v(t._s(t.message))]),t._v(" "),e(o.a,{staticClass:"pt-0"},[e(l.a),t._v(" "),e(a.a,{staticClass:"accept",attrs:{color:"darken-1",text:""},nativeOn:{click:function(e){return t.agree.apply(null,arguments)}}},[t._v("Yes")]),t._v(" "),e(a.a,{staticClass:"cancel",attrs:{color:"grey",text:""},nativeOn:{click:function(e){return t.cancel.apply(null,arguments)}}},[t._v("Cancel")])],1)],1)],1)}i.r(e);var a=i(258),n=i(209),o=i(204),r=i(257),l=i(414),c=i(401),d=i(241);s._withStripped=!0;var h={data:()=>({dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"#79C25A",width:290,zIndex:200}}),methods:{open(t,e,i){return this.dialog=!0,this.title=t,this.message=e,this.options=Object.assign(this.options,i),new Promise((t,e)=>{this.resolve=t,this.reject=e})},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}};i=i(11),i=Object(i.a)(h,s,[],!1,null,"b9bee446",null);e.default=i.exports},185:function(t,e,i){"use strict";function s(){var t=this,e=t._self._c;return e(d.a,{attrs:{justify:"center"}},[e(c.a,{attrs:{"max-width":"600px",id:"requests"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.a,{directives:[{name:"click-out",rawName:"v-click-out",value:t.onModal,expression:"onModal"}]},[e(o.c,[e("h3",{staticClass:"headline"},[t._v("Request details")])]),t._v(" "),e(o.b,[e(l.a,[e(d.a,[e(r.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e("p",{staticClass:"header-item"},[t._v("Time")]),t._v(" "),e("p",{staticClass:"column-item"},[t._v(t._s(t.$attrs.created_at?t.getDate(t.$attrs.updated_at):""))])])],1),t._v(" "),e(d.a,[e(r.a,{attrs:{cols:"4"}},[e("p",{class:"header-item"},[t._v(t._s("call"===t.type?"Page":t.type))]),t._v(" "),e("p",{staticClass:"column-item"},[t._v(t._s("call"===t.type?t.$attrs.page:"service"===t.type?t.$attrs.service:t.$attrs.name))])]),t._v(" "),e(r.a,{attrs:{cols:"4"}},[e("p",{class:"header-item"},[t._v("Phone number")]),t._v(" "),e("p",{staticClass:"column-item"},[t._v(t._s(t.$attrs.phone))])]),t._v(" "),e(r.a,{attrs:{cols:"4"}},[e("p",{class:"header-item"},[t._v("Email")]),t._v(" "),e("p",{staticClass:"column-item"},[t._v(t._s(t.$attrs.email))])])],1),t._v(" "),e(d.a,[e(r.a,{attrs:{cols:"12",sm:"12"}},[e("p",{class:"header-item"},[t._v("Comment")]),t._v(" "),e("p",{staticClass:"column-item"},[t._v(t._s(t.$attrs.comment))])])],1)],1)],1),t._v(" "),e(o.a,[e(h.a),t._v(" "),e(a.a,{attrs:{color:"darken-1",text:"",id:"cancel"},on:{click:t.onModal}},[t._v("\n                    Cancel\n                ")]),t._v(" "),e(a.a,{staticClass:"btn-outline-danger",attrs:{color:"darken-1",text:"",id:"delete"},on:{click:function(e){return t.deleteItem(t.id)}}},[t._v("\n                    Delete\n                ")]),t._v(" "),e(a.a,{attrs:{color:"darken-1",text:"",id:"archive"},on:{click:function(e){return t.moveToArchive(t.id)}}},[t._v("\n                    To archive\n                ")])],1),t._v(" "),e("Confirm",{ref:"confirm"})],1)],1)],1)}i.r(e);var a=i(258),n=i(209),o=i(204),r=i(244),l=i(250),c=i(257),d=i(413),h=i(414),u=(s._withStripped=!0,i(127)),v=(u={props:{open:Boolean,type:String,id:Number,headings:String,route:String},components:{Confirm:u.default,Email:()=>Promise.all([i.e(0),i.e(89)]).then(i.bind(null,135))},data:()=>({dialog:!1,updated:!1,email:null,deleteModal:!1}),created(){},mounted(){switch(console.log(this.type),this.dialog=this.open,this.type){case"product":this.$store.dispatch("productRequest",this.id);break;case"service":this.$store.dispatch("serviceRequest",this.id);break;case"call":this.$store.dispatch("callRequest",this.id)}},methods:{onModal(){this.deleteModal||(this.$emit("offvalue",!1),this.$parent.$data.id=null)},getDate(t){t=(""+t.replace(/[-?]/g,"/").replace("T"," ")).split(":");let e=[];return t.pop(),t[0].split("/").forEach(t=>{e.push(t.split(" ")[0])}),t=e[0],e[0]=e[2],e[2]=t,e.join("/")},deleteItem(t){this.deleteModal=!0,this.$refs.confirm.open("Delete","Are you sure?",{color:"red"}).then(e=>{e&&axios.post("/admin/request-delete",{id:t,type:this.type}).then(t=>{switch(this.$store.dispatch(this.type+"Request"),this.dialog=!1,this.updated=!0,this.deleteModal=!1,this.type){case"product":this.$store.dispatch("productRequests");break;case"service":this.$store.dispatch("serviceRequests");break;case"call":this.$store.dispatch("callRequests")}})})},moveToArchive(t){switch(this.type){case"product":axios.post("/admin/request-products",{id:t}).then(t=>{this.$store.dispatch("productRequests"),this.dialog=!1,this.updated=!0});break;case"service":axios.post("/admin/request-services",{id:t}).then(t=>{this.$store.dispatch("serviceRequests"),this.dialog=!1,this.updated=!0});break;case"call":axios.post("/admin/request-calls",{id:t}).then(t=>{this.$store.dispatch("callRequests"),this.dialog=!1,this.updated=!0})}},emailRender(){this.email=this.$attrs.email,this.$parent.$data.open=!1,this.$parent.$data.isEmail=!0,this.$parent.$data.email=this.email}},computed:{},watch:{open(t,e){this.dialog=!!t}}},i(11));v=Object(v.a)(u,s,[],!1,null,null,null);e.default=v.exports},204:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),e=i(209),i=i(2);const s=Object(i.i)("v-card__actions");Object(i.i)("v-card__subtitle");const a=Object(i.i)("v-card__text"),n=Object(i.i)("v-card__title");e.a},209:function(t,e,i){"use strict";var s=i(221),a=i(214),n=i(212);i=i(25);e.a=Object(i.a)(a.a,n.a,s.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.a.options.computed.classes.call(this)}},styles(){var t={...s.a.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){var t=a.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){var{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},244:function(t,e,i){"use strict";i(220);var s=i(0),a=i(206),n=i(2);const o=["sm","md","lg","xl"];i=o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{});var r=o.reduce((t,e)=>(t["offset"+Object(n.D)(e)]={type:[String,Number],default:null},t),{}),l=o.reduce((t,e)=>(t["order"+Object(n.D)(e)]={type:[String,Number],default:null},t),{});const c={col:Object.keys(i),offset:Object.keys(r),order:Object.keys(l)},d=new Map;e.a=s.default.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s}){let n="";for(const t in e)n+=String(e[t]);let o=d.get(n);if(!o){let t;for(t in o=[],c)c[t].forEach(i=>{var s=e[i];(i=function(t,e,i){let s=t;if(null!=i&&!1!==i)return e&&(s+="-"+(e=e.replace(t,""))),("col"!==t||""!==i&&!0!==i)&&(s+="-"+i),s.toLowerCase()}(t,i,s))&&o.push(i)});var r=o.some(t=>t.startsWith("col-"));o.push({col:!r||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),d.set(n,o)}return t(e.tag,Object(a.a)(i,{class:o}),s)}})},250:function(t,e,i){"use strict";i(231),i(220);var s=i(240),a=i(206);e.a=Object(s.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let n;const o=i.attrs;return o&&(i.attrs={},n=Object.keys(o).filter(t=>{var e;return"slot"!==t&&(e=o[t],t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"==typeof e)})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(a.a)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),s)}})},257:function(t,e,i){"use strict";var s=i(262),a=i(234),n=i(232),o=i(237),r=i(27),l=i(26),c=i(223),d=i(25),h=Object(d.a)(r.a,l.a,c.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),u=i(2),v=i(0).default.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:()=>({animationFrame:0,overlay:null}),watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){var t=new h({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}}),e=(t.$mount(),this.absolute?this.$el.parentNode:document.querySelector("[data-app]"));e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(u.t)(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(u.a)(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[u.w.up,u.w.pageup],i=[u.w.down,u.w.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){var e;return!(!t||t.nodeType!==Node.ELEMENT_NODE)&&(e=window.getComputedStyle(t),(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth)},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;var i=e.shiftKey||e.deltaX?"x":"y",s="y"!=i&&e.deltaX||e.deltaY;let a,n;return n="y"==i?(a=0===t.scrollTop,t.scrollTop+t.clientHeight===t.scrollHeight):(a=0===t.scrollLeft,t.scrollLeft+t.clientWidth===t.scrollWidth),!a&&s<0||!n&&0<s||!(!a&&!n)&&this.shouldScroll(t.parentNode,e)},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){var e,i,s=Object(u.g)(t);if("keydown"===t.type&&s[0]===document.body)return e=this.$refs.dialog,i=window.getSelection().anchorNode,!(e&&this.hasScrollbar(e)&&this.isInside(i,e)&&this.shouldScroll(e,t));for(let e=0;e<s.length;e++){var a=s[e];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return!this.shouldScroll(a,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),p=(r=i(238),l=i(239),c=i(235),i(3));i=Object(d.a)(n.a,o.a,v,r.a,l.a,a.a);e.a=i.extend({name:"v-dialog",directives:{ClickOutside:c.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:()=>({activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}),computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null!=(t=this.previousActiveElement)&&t.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p.e)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){return t=t.target,!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.options.methods.hideScroll.call(this)},show(){this.fullscreen||this.hideOverlay||this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t;null!=(t=this.$refs.dialog)&&t.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null!=(t=this.$refs.dialog)&&t.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===u.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(t&&this.retainFocus){const e=t.target;e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))&&(t=[...this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].find(t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')))&&t.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(u.h)(this.maxWidth),width:Object(u.h)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})}}]);