(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{191:function(e,t,s){"use strict";s.r(t);var a=s(12),n=s(6),o={name:"Article",components:{ShareByEmail:()=>Promise.all([s.e(0),s.e(25),s.e(29)]).then(s.bind(null,127)),Discount:()=>s.e(6).then(s.bind(null,156)),MoreItems:()=>s.e(16).then(s.bind(null,158)),Breadcrumbs:()=>s.e(4).then(s.bind(null,125))},data(){return{language:"en"===this.$store.getters.getPublicLanguage.code?1:"ru"===this.$store.getters.getPublicLanguage.code?3:2,dataFetched:!1,open:!1,images:{facebook_default:"/assets/components/projects/project/fb.jpg",facebook:"/assets/components/projects/project/fb.jpg",facebookOver:"/assets/icons/facebook.svg",link_default:"/assets/components/projects/project/link.jpg",link:"/assets/components/projects/project/link.jpg",linkOver:"/assets/icons/link.svg",email_default:"/assets/components/projects/project/link.jpg",email:"/assets/components/projects/project/link.jpg",emailOver:"/assets/icons/link.svg"}}},mounted(){n.a.$emit("theme","dark"),n.a.$emit("position","absolute"),this.$store.dispatch("singleNews",{id:this.$route.params.id,lang:this.language}).then(()=>{this.dataFetched=!0})},computed:{...Object(a.b)({item:"getSingleNews"}),breadcrumb(){return[{name:"news",label:this.$t("news.title")},{name:"Article",news_id:this.$route.params.id}]}},methods:{currentUrl:e=>location.scheme+"//"+location.hostname+e,copy(e,t){document.addEventListener("copy",(function(e){e.clipboardData.setData("text/plain",t),e.preventDefault()}),!0),document.execCommand("copy")}},watch:{language(){this.language="en"===this.$store.getters.getPublicLanguage.code?1:"ru"===this.$store.getters.getPublicLanguage.code?3:2},open(e,t){t!==e&&this.$emit("openModal",{value:e})},dataFetched(e,t){e&&$("head").append('<meta property="og:url"                content="'+location.protocol+"//"+location.hostname+this.$route.fullPath+'" />\n<meta property="og:type"               content="article" />\n<meta property="og:title"              content="'+this.item.translates.name+'" />\n<meta property="og:description"        content="'+this.item.translates.description+'" />\n<meta property="og:image"              content="'+this.item.image+'" />')},$route(e){this.dataFetched=!0,e.path.includes("news")&&n.a.$emit("theme","dark")}}},i=s(10),r=s(11);a=s.n(r),r=s(198),o=Object(i.a)(o,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return e.dataFetched?t("v-app",{attrs:{id:"singleProject"}},[t("div",{staticClass:"row col-12 top-header py-0 justify-content-center"},[t("div",{staticClass:"col-xl-7 col-xs-12 row flex-column padding-125",attrs:{id:"header"}},[t("breadcrumbs",{attrs:{color:"light",items:e.breadcrumb}}),e._v(" "),t("div",{staticClass:"header-text text-white"},[e.item.translates?t("h1",[e._v(e._s(e.item.translates.name))]):e._e()])],1)]),e._v(" "),t("div",{staticClass:"col-xl-7 col-xs-12 m-auto d-flex single-description padding-125"},[t("div",{staticClass:"socials d-flex flex-column mr-8"},[t("ShareNetwork",{attrs:{network:"facebook",url:e.currentUrl(e.$route.fullPath),title:e.item.translates.name,description:e.item.translates.description}},[t("img",{attrs:{src:e.images.facebook},on:{mouseover:function(t){e.images.facebook=e.images.facebookOver},mouseleave:function(t){e.images.facebook=e.images.facebook_default}}})]),e._v(" "),t("ShareByEmail",{attrs:{item:e.item.translates,path:e.currentUrl(e.$route.fullPath)}}),e._v(" "),t("a",{ref:"path",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.copy(e.item,e.currentUrl(e.$route.fullPath))}}},[t("img",{attrs:{src:e.images.link},on:{mouseover:function(t){e.images.link=e.images.linkOver},mouseleave:function(t){e.images.link=e.images.link_default}}})])],1),e._v(" "),t("div",{staticClass:"description col-md-10"},[t("p",{domProps:{innerHTML:e._s(e.item.translates.description)}})])]),e._v(" "),t("div",{attrs:{id:"more-items"}},[t("more-items",{attrs:{show:"2",type:"news",lang:e.language}})],1),e._v(" "),t("div",{staticClass:"justify-content-center px-0 padding-125",attrs:{id:"discount"}},[t("Discount",e._g({},e.$listeners))],1)]):e._e()}),[],!1,null,"7c84642c",null);t.default=o.exports,a()(o,{VApp:r.a})}}]);