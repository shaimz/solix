(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{168:function(t,a,e){"use strict";e.r(a);var s=e(202),i=e(7),r=e(1),l={name:"Product",components:{moreItems:()=>e.e(16).then(e.bind(null,161)),breadcrumbs:()=>e.e(5).then(e.bind(null,128)),Advantages:()=>e.e(42).then(e.bind(null,197))},data(){return{language:"en"===this.$route.params.locale?1:"ru"===this.$route.params.locale?3:2,id:this.$route.params.id,item:[],render:!1,featureShow:!0,features:6}},mounted(){i.a.$emit("position","relative"),i.a.$emit("theme","light"),this.$store.dispatch("product",{lang:this.language,id:this.id}).then(()=>{this.item=this.$store.getters.getProduct,this.render=!0}),this.xsmall||(this.featureShow=!1)},computed:{medium:()=>r.a.data.medium,windowWidth:()=>r.a.data.largeCompare,mediumCompare:()=>r.a.data.mediumCompare,xsmall:()=>r.a.data.xsmall},methods:{showFeatures(){this.features=this.item.features.length,this.featureShow=!1},toggleModal(t){i.a.$emit("openModal",{value:t,type:"product",id:this.$route.params.id})},showDescription(t){$(t.currentTarget).prev().css("max-height","100%"),$(t.currentTarget).hide()}},watch:{$route(t){this.id=t.params.id,this.$store.dispatch("product",{lang:this.language,id:this.id}).then(()=>{this.item=this.$store.getters.getProduct,this.render=!0}),t.params.id&&(i.a.$emit("position","relative"),i.a.$emit("theme","light"))}}},o=e(11);o=Object(o.a)(l,(function(){var t=this,a=t._self._c;return a(s.a,[t.render?a("div",{staticClass:"col-xl-7 col-11 m-auto",attrs:{id:"product"}},[a("breadcrumbs",{attrs:{color:"dark"}}),t._v(" "),a("div",{staticClass:"allProducts pl-lg-3 pl-0"},[a("router-link",{staticClass:"d-flex justify-content-lg-start justify-content-center align-items-center text-dark font-weight-bold",attrs:{to:{name:"productsCategory",params:{locale:t.$route.params.locale,category:t.item.category.url}}}},[a("i",{staticClass:"arrow left mr-2"}),a("span",[t._v(t._s(t.item.category.data.name||t.$t("products.all")))])])],1),t._v(" "),t.medium?a("h2",{staticClass:"text-dark"},[t._v(t._s(t.item.translates.name))]):t._e(),t._v(" "),a("div",{staticClass:"d-lg-flex d-xs-block mx-auto py-0 position-unset text-lg-start"},[a("div",{staticClass:"col-lg-4 col-12 text-lg-start text-xs-center"},[t.windowWidth&&!t.medium?a("h2",{staticClass:"text-dark"},[t._v(t._s(t.item.translates.name))]):t._e(),t._v(" "),t.windowWidth?a("div",{staticClass:"available"},[a("p",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.available?"/assets/icons/avail.png":"/assets/icons/not-avail.png",expression:"item.available ? '/assets/icons/avail.png' : '/assets/icons/not-avail.png'"}],staticClass:"mr-2"}),t._v(t._s(t.item.available?t.$t("products.available"):t.$t("products.notAvailable")))])]):t._e(),t._v(" "),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.image||"/private/images/products/no-image.png",expression:"item.image ? item.image : '/private/images/products/no-image.png'"}]})]),t._v(" "),a("div",{staticClass:"col-lg-8 col-12"},[t.windowWidth?t._e():a("h2",{staticClass:"text-dark"},[t._v(t._s(t.item.translates.name))]),t._v(" "),t.windowWidth?t._e():a("div",{staticClass:"available"},[a("p",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.available?"/assets/icons/avail.png":"/assets/icons/not-avail.png",expression:"item.available ? '/assets/icons/avail.png' : '/assets/icons/not-avail.png'"}],staticClass:"mr-2"}),t._v(t._s(t.item.available?t.$t("products.available"):t.$t("products.notAvailable")))])]),t._v(" "),a("div",{staticClass:"orderProduct d-flex col-lg-8 col-12 p-0"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.brand_logo,expression:"item.brand_logo"}],staticClass:"image",attrs:{alt:""}}),t._v(" "),a("div",{staticClass:"price ml-lg-0 ml-5"},[a("p",[t._v(t._s(t.$t("products.price")))]),t._v(" "),a("h3",{staticClass:"roboto text-dark"},[t._v("\n                            "+t._s(t.item.price)+" EUR\n                        ")])]),t._v(" "),a("button",{staticClass:"btn-primary ml-lg-0 ml-auto",on:{click:function(a){return t.toggleModal(!0)}}},[t._v(t._s(t.$t("products.order")))])]),t._v(" "),a("Advantages",{attrs:{items:t.item.advantage}}),t._v(" "),a("div",{staticClass:"features"},[a("p",{staticClass:"text-dark mb-3 font-weight-bold"},[t._v(t._s(t.$t("products.features")))]),t._v(" "),t.xsmall?a("div",{staticClass:"productFeatures d-grid"},t._l(t.item.features,(function(e,s){return s<t.features?a("div",{key:e.id,staticClass:"feature d-flex"},[a("div",{staticClass:"feature-info"},[a("p",{staticClass:"color-5"},[t._v(t._s(e.feature_name))]),t._v(" "),a("p",{staticClass:"text-dark"},[t._v(t._s(e.feature_value))])])]):t._e()})),0):t.xsmall?t._e():a("div",{staticClass:"productFeatures d-grid"},t._l(t.item.features,(function(e,s){return a("div",{key:"feature-m-"+e.id,staticClass:"feature d-flex"},[a("div",{staticClass:"feature-info"},[a("p",{staticClass:"color-5",domProps:{innerHTML:t._s(e.feature_name)}}),t._v(" "),a("p",{staticClass:"text-dark",domProps:{innerHTML:t._s(e.feature_value)}})])])})),0),t._v(" "),6<t.item.features.length&&t.xsmall&&t.featureShow?a("div",{on:{click:t.showFeatures}},[a("p",{staticClass:"text-left mt-4 more-features-product"},[t._v(t._s(t.$t("allFeatures"))),a("i",{staticClass:"arrow down ml-3",staticStyle:{"margin-bottom":"3px"}})])]):t._e()]),t._v(" "),a("div",{staticClass:"productDescription"},[a("p",{staticClass:"description-title mb-3 text-dark font-weight-bold"},[t._v(t._s(t.$t("products.description")))]),t._v(" "),a("p",{staticClass:"description-text"},[t._v(t._s(t.item.translates.description))]),t._v(" "),t.xsmall?a("div",{on:{click:function(a){return t.showDescription(a)}}},[a("p",{staticClass:"text-left mt-4 more-features-product"},[t._v(t._s(t.$t("allFeatures"))),a("i",{staticClass:"arrow down ml-3",staticStyle:{"margin-bottom":"3px"}})])]):t._e(),t._v(" "),t.item.document?a("div",{staticClass:"product-doc"},[a("a",{staticClass:"btn-primary",attrs:{href:""+t.item.document}},[t._v(t._s(t.$t("downloadDoc")))])]):t._e()])],1)])],1):t._e(),t._v(" "),a("more-items",{attrs:{type:"products",show:3}})],1)}),[],!1,null,"07e794a4",null);a.default=o.exports}}]);