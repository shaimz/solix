(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{172:function(t,a,s){"use strict";function e(){var t=this,a=t._self._c;return a(l.a,{attrs:{id:"projectsPage"}},[a("div",{staticClass:"row col-12 top-header justify-content-center padding-125"},[a("div",{staticClass:"col-xl-7 col-11 row flex-column",attrs:{id:"header"}},[t.xsmall?t._e():a("breadcrumbs"),t._v(" "),a("div",{staticClass:"header-text text-white"},[a("h1",[t._v(t._s(t.$t("projects.head.title")))])])],1)]),t._v(" "),a("div",{attrs:{id:"projects"}},[a("AllProjects",{attrs:{show:t.show,lang:t.language}})],1),t._v(" "),a("div",{staticClass:"col-sm-12 justify-content-center",attrs:{id:"map"}},[a("div",{staticClass:"map-info row col-lg-6 col-xl-5 col-xs-12"},[a("div",{staticClass:"col-xl-7 col-lg-11 col-md-11 ml-auto"},[a("div",{staticClass:"map-info-body padding-125"},[a("h2",{staticClass:"font-weight-7"},[t._v(t._s(t.$t("map.title")))]),t._v(" "),a("ul",{staticClass:"list-group list-unstyled mt-7"},t._l(t.$t("map.list"),(function(s,e){return a("li",{staticClass:"py-2 d-flex align-items-center"},[a("span",{class:"border-map-"+e+" mr-8"}),t._v(t._s(s))])})),0)])])]),t._v(" "),a("Map",{attrs:{items:t.items}})],1),t._v(" "),a("div",{staticClass:"justify-content-center px-0 padding-125",attrs:{id:"discount"}},[a("Discount",{attrs:{dialog:t.open},on:{modalOpen:t.modal}})],1)])}s.r(a);var l=s(202),i=(e._withStripped=!0,s(7)),o=s(1),n={name:"Projects",components:{Discount:()=>s.e(6).then(s.bind(null,159)),Map:()=>s.e(9).then(s.bind(null,138)),Breadcrumbs:()=>s.e(5).then(s.bind(null,128)),AllProjects:()=>s.e(11).then(s.bind(null,155))},data(){return{language:"en"===this.$route.params.locale?1:"ru"===this.$route.params.locale?3:2,open:!1,items:[],show:4}},computed:{xsmall:()=>o.a.data.xsmall,small:()=>o.a.data.small,smallCompare:()=>o.a.data.smallCompare,largeCompare:()=>o.a.data.largeCompare,mediumCompare:()=>o.a.data.mediumCompare},mounted(){i.a.$emit("theme","dark"),i.a.$emit("position","absolute")},created(){this.$store.dispatch("projects",{lang:this.language}).then(()=>{this.items=this.$store.getters.getProjects})},methods:{modal(t){this.open=t}},watch:{language(t,a){t!==a&&this.$store.dispatch("projects",{lang:this.language}).then(()=>{this.items=this.$store.getters.getProjects})}}},r=s(11);r=Object(r.a)(n,e,[],!1,null,"e65479d2",null);a.default=r.exports}}]);