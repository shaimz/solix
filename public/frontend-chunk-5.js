(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{146:function(e,t,a){"use strict";a.r(t);var s=a(202),l=a(1),n=a(7),i={name:"News",components:{Discount:()=>a.e(6).then(a.bind(null,159)),Map:()=>a.e(9).then(a.bind(null,138)),Breadcrumbs:()=>a.e(5).then(a.bind(null,128)),AllNews:()=>Promise.all([a.e(44),a.e(34)]).then(a.bind(null,153))},data(){return{language:"en"===this.$route.params.locale?1:"ru"===this.$route.params.locale?3:2,open:!1,show:3}},computed:{items(){return this.$store.getters.getNews},medium:()=>l.a.data.medium},mounted(){n.a.$emit("theme","light"),n.a.$emit("position","relative")},methods:{modal(e){this.open=e}},watch:{medium:{handler(e,t){e&&(this.show=2)},immediate:!0},large:{handler(e,t){e&&(this.show=3)},immediate:!0}}},o=a(11);o=Object(o.a)(i,(function(){var e=this,t=e._self._c;return t(s.a,{staticClass:"padding-125",attrs:{id:"newsPage"}},[t("div",{staticClass:"row col-12 top-header justify-content-center"},[t("div",{staticClass:"col-xl-7 col-lg-11 col-11 row flex-column",attrs:{id:"header"}},[t("breadcrumbs",{attrs:{color:"dark"}}),e._v(" "),t("div",{staticClass:"header-text text-dark"},[t("h1",[e._v(e._s(e.$t("news.title")))])])],1)]),e._v(" "),t("div",{attrs:{id:"news"}},[t("AllNews",{key:e.show,attrs:{show:e.show,lang:e.language}})],1)])}),[],!1,null,"5287dbe0",null);t.default=o.exports}}]);