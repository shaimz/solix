(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{169:function(t,a,e){"use strict";e.r(a);var r=e(202),s=e(7),i=e(1),n={name:"Products",components:{ProductSidebar:()=>e.e(43).then(e.bind(null,170)),Breadcrumbs:()=>e.e(5).then(e.bind(null,128))},props:["categoryUrl"],data(){return{language:"en"===this.$route.params.locale?1:"ru"===this.$route.params.locale?3:2,breadcrumb:[{label:"Products",name:"Products"}],name:this.$t("products.title"),url:"",parentCat:""}},created(){this.$store.dispatch("categoryByUrl",{lang_id:this.language,url:this.categoryUrl}).then(()=>{this.category.data?this.category.parent_id?(this.$store.dispatch("category",{lang_id:this.language,parent_id:this.category.parent_id}).then(()=>{this.parent.data&&(this.url=this.parent.url,this.parentCat="",this.category.parent_id)&&(this.parentCat=this.parent.data.name)}),this.name=this.category.data.name):(this.parentCat="",this.name=""):this.name=this.$t("products.title")})},mounted(){s.a.$emit("theme","light"),s.a.$emit("position","relative")},methods:{getParent(t){return this.$store.dispatch("category",{lang_id:this.language,parent_id:t}).then(()=>this.parent.data?this.parent.url:""),""}},computed:{parent(){return this.$store.getters.getCategory},category(){return this.$store.getters.getCategoryByUrl},largeCompare:()=>i.a.data.largeCompare},watch:{categoryUrl(){this.$store.dispatch("categoryByUrl",{lang_id:this.language,url:this.categoryUrl}).then(()=>{this.category.data?this.category.parent_id?(this.$store.dispatch("category",{lang_id:this.language,parent_id:this.category.parent_id}).then(()=>{this.parent.data&&(this.parentCat="",this.category.parent_id&&(this.parentCat=this.parent.data.name),this.url=this.parent.url)}),this.name=this.category.data.name):this.parentCat="":this.name=this.$t("products.title")})}}},o=e(11);o=Object(o.a)(n,(function(){var t=this,a=t._self._c;return a(r.a,{staticClass:"col-xl-7 col-lg-11 col-11 m-auto",attrs:{id:"products"}},[a("Breadcrumbs",{attrs:{color:"dark"}}),t._v(" "),t.largeCompare&&t.categoryUrl?a("div",{staticClass:"allProducts pl-lg-3 pl-0"},[a("router-link",{staticClass:"d-flex justify-content-lg-start justify-content-center align-items-center text-dark font-weight-bold",attrs:{to:{name:t.category.parent_id?"productsCategory":"products",params:{locale:t.$route.params.locale,category:t.url}}}},[a("i",{staticClass:"arrow left mr-2"}),a("span",[t._v(t._s(t.parentCat?t.parent.data.name:t.$t("products.all")))])])],1):t._e(),t._v(" "),a("h2",{staticClass:"title"},[t._v(t._s(t.name||t.$t("products.title")))]),t._v(" "),a("div",{staticClass:"d-flex mx-auto py-0 position-unset sidebar"},[a("product-sidebar",{attrs:{page:t.categoryUrl,lang:t.language}})],1)],1)}),[],!1,null,"89b10fce",null);a.default=o.exports}}]);