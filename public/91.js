(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{128:function(e,t,s){"use strict";s.r(t);var a=s(212),r=s(25),i=Object(r.a)(a.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(e){var{tag:t,data:s}=this.generateRouteLink();return e("li",[e(t,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),c=(a=s(2),Object(a.i)("v-breadcrumbs__divider","li")),l=(a=s(26),Object(r.a)(a.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(c,this.$slots.divider||this.divider)},genItems(){var e=[],t=!!this.$scopedSlots.item,s=[];for(let r=0;r<this.items.length;r++){var a=this.items[r];s.push(a.text),e.push(t?this.$scopedSlots.item({item:a}):this.$createElement(i,{key:s.join("."),props:a},[a.text])),r<this.items.length-1&&e.push(this.genDivider())}return e}},render(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})),n=s(1);r={name:"Crumbs",props:["color","items"],data(){return{stack:[],home:"",language:"en"===this.$route.params.locale?1:"ru"===this.$route.params.locale?3:2}},mounted(){this.buildStack()},methods:{buildStack(){this.stack=[{class:"crumbs__item--parent",label:1===this.language?"Home":2===this.language?"Acasă":"Главная",name:"Home"}],this.addPage(this.$router.currentRoute)},addPage(e,t){if(this.items)this.items.forEach((s,a)=>{s.project_id?this.$store.dispatch("singleProject",{id:s.project_id,lang:this.language}).then(()=>{var s=this.$store.getters.getSingleProject;this.stack.push({name:s.projects.name,label:e.label||s.projects.name.replace("."," "),class:"crumbs__item--"+(void 0===t?"current":"parent")})}):s.service_id||s.news_id||s.career_id?this.stack[this.stack.length-1].class="crumbs__item--current":(this.items.length-1===a&&(t="undefined"),this.stack.push({name:s.name,label:s.label||s.name.replace("."," "),class:"crumbs__item--parent"}))});else{let a="";if(this.$route.params.category&&e.meta.breadcrumb.parent&&(t=!0,!this.$route.params.id&&this.$route.params.category&&(t=void 0),this.stack.findIndex(e=>e.name===this.$store.state.categoryByUrl)<0)&&this.$store.dispatch("categoryByUrl",{lang_id:this.language,url:this.$route.params.category}).then(()=>{var s;a=this.$store.getters.getCategoryByUrl.data.name,this.stack.findIndex(e=>e.label===a)<0&&(this.stack.push({name:"productsCategory",label:(null==(s=e.meta)||null==(s=s.breadcrumb)?void 0:s.label)||a.replace("."," "),class:"crumbs__item--"+(void 0===t?"current":"parent")}),this.$route.params.id)&&this.$route.params.category&&(this.stack[this.stack.length-1].class="crumbs__item--current")}),e.meta.breadcrumb.parent){const t=this.getRoute(e.meta.breadcrumb.parent);this.stack.findIndex(e=>e.name===t.name)&&this.addPage(t,!0)}else if(!this.$route.params.id&&this.$route.params.category&&(t=!0),this.stack.findIndex(t=>t.name===e.name)<0){let a="";switch(this.$route.name){case"productsCategory":case"products":case"product":a="products";break;case"services":case"service":a="services";break;case"projects":case"project":a="projects";break;case"about":a="about";break;case"news":a="news";break;case"contacts":a="contacts"}var s=this.$t(a+".title");this.stack.push({name:e.name,label:s,class:"crumbs__item--"+(void 0===t?"current":"parent")})}}this.items&&0<=this.items.findIndex(e=>e.career_id)&&(t=void 0,s=this.items.find(e=>e.career_id),this.$store.dispatch("singleCareer",{id:s.career_id,lang_id:this.language}).then(()=>{var s=this.$store.getters.getSingleCareer;this.stack.push({name:s.translates.name,label:e.label||s.translates.name.replace("."," "),class:"crumbs__item--"+(void 0===t?"current":"parent")})}))},getRoute(e){return this.$router.options.routes.find(t=>t.name===e.capitalize).children.find(t=>t.name===e)?this.$router.options.routes.find(t=>t.name===e.capitalize).children.find(t=>t.name===e):this.$router.options.routes.find(t=>t.name===e.capitalize)}},computed:{small:()=>n.a.data.small},created(){},watch:{$route(e){this.buildStack()},language(){this.buildStack()}}},a=s(11),s=Object(a.a)(r,(function(){var e=this,t=e._self._c;return 0<e.stack.length?t(l,{class:e.color,attrs:{items:e.stack},scopedSlots:e._u([{key:"item",fn:function({item:s}){return["crumbs__item--current"===s.class?t(i,{class:["active",e.color],attrs:{disabled:""}},[t("router-link",{class:["crumbs__link",e.color],attrs:{to:{name:s.name,params:{locale:e.$route.params.locale}}}},[e._v("\n                "+e._s(s.label)+"\n            ")])],1):t(i,{class:[e.color]},[t("router-link",{class:["crumbs__link",e.color],attrs:{to:{name:s.name,params:{locale:e.$route.params.locale}}}},[e._v("\n                "+e._s(s.label)+"\n            ")])],1)]}}],null,!1,380517005)}):e._e()}),[],!1,null,null,null);t.default=s.exports}}]);