(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(t,s,a){"use strict";a.r(s);var e=a(1),r={name:"Partners",data:()=>({render:!0}),created(){this.$store.dispatch("projects",{lang:this.lang_id,limit:20,offset:0})},computed:{lang_id(){return this.$router.currentRoute.path.includes("en")?1:this.$router.currentRoute.path.includes("ru")?3:2},projects(){return this.$store.state.projects},xsmall:()=>e.a.data.xsmall,small:()=>e.a.data.small},mounted(){this.xsmall||(this.render=!0)},methods:{renderRow(t){let s=[];var a,e=this.small&&!this.xsmall?4:6;let r=[];for(a in t){var l=parseInt(a)+1;r.push(t[a]),l%e==0&&(s.push(r),r=[])}return!s.length&&r.length&&s.push(r),s}},watch:{xsmall(t,s){t?this.render=!1:setTimeout(()=>{this.render=!0},500)}}};a=a(10),r=Object(a.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-auto col-lg-11 col-xl-7 col-md-11 col-11 text-white"},[a("div",{staticClass:"d-lg-flex d-xs-block mx-auto py-0 px-0 position-relative"},[a("h2",{staticClass:"col-xl-8 col-md-10 text-xs-center text-lg-left px-0 mb-6"},[t._v(t._s(t.$t("home.partners.title")))]),t._v(" "),a("div",{staticClass:"col-xl-4 col-md-2 next-prev-icons"},[a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel-partners",role:"button","data-slide":"prev"},on:{click:function(t){}}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._v(" "),t._m(0)])]),t._v(" "),!t.xsmall&&t.render?a("div",{staticClass:"carousel carousel-fade",attrs:{id:"carousel-partners","data-interval":"false"}},[a("div",{staticClass:"carousel-inner"},t._l(t.renderRow(t.$t("home.partners.cards")),(function(s,e){return a("div",{class:["d-grid grid-columns-3 grid-column-gap-4 grid-row-gap-4 carousel-item",e?"":"active"]},t._l(s,(function(s,e){return a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top w-50",attrs:{src:s.image}}),t._v(" "),a("div",{staticClass:"card-body text-center"},[a("h5",[t._v(t._s(s.title))])])])})),0)})),0)]):a("div",{staticClass:"mobile-carousel",attrs:{"data-ride":"carousel"}},t._l(t.$t("home.partners.cards"),(function(s,e){return a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top w-50",attrs:{src:s.image}}),t._v(" "),a("div",{staticClass:"card-body text-center"},[a("h5",[t._v(t._s(s.title))])])])})),0)])}),[function(){var t=this,s=t.$createElement;return(s=t._self._c||s)("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel-partners",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Next")])])}],!1,null,"f2cc41fc",null);s.default=r.exports}}]);