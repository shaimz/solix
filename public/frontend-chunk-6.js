(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{144:function(e,t,a){"use strict";a.r(t);var s=a(6),o=a(12),i={name:"singleCareer",data(){return{language:"en"===this.$route.params.locale?1:"ru"===this.$route.params.locale?3:2,dataFetched:!1,images:{facebook_default:"/assets/components/projects/project/fb.jpg",facebook:"/assets/components/projects/project/fb.jpg",facebookOver:"/assets/icons/facebook.svg",link_default:"/assets/components/projects/project/link.jpg",link:"/assets/components/projects/project/link.jpg",linkOver:"/assets/icons/link.svg",email_default:"/assets/components/projects/project/link.jpg",email:"/assets/components/projects/project/link.jpg",emailOver:"/assets/icons/link.svg"}}},components:{ShareByEmail:()=>Promise.all([a.e(0),a.e(25),a.e(29)]).then(a.bind(null,127)),ContactsNew:()=>Promise.all([a.e(0),a.e(1),a.e(18),a.e(14)]).then(a.bind(null,149)),Crumbs:()=>a.e(4).then(a.bind(null,125))},mounted(){s.a.$emit("theme","light"),s.a.$emit("position","relative"),this.$store.dispatch("singleCareer",{id:this.$route.params.id,lang_id:this.language}).then(()=>{this.dataFetched=!0})},methods:{toggleModal(e,t){s.a.$emit("openModal",{value:e,type:"career",id:t})},copy(e,t){document.addEventListener("copy",(function(e){e.clipboardData.setData("text/plain",t),e.preventDefault()}),!0),document.execCommand("copy")}},computed:{...Object(o.b)({item:"getSingleCareer"}),breadcrumb(){return[{name:"career",label:this.$t("career.title")},{name:"Career",career_id:this.$route.params.id}]}}},r=a(10),n=a(11);o=a.n(n),n=a(198),i=Object(r.a)(i,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return e.dataFetched?t("v-app",{attrs:{id:"singleCareer"}},[t("div",{staticClass:"row col-12 top-header py-0 justify-content-center"},[t("div",{staticClass:"col-xl-7 col-lg-11 col-11 row flex-column",attrs:{id:"header"}},[t("Crumbs",{attrs:{color:"dark",items:e.breadcrumb}})],1)]),e._v(" "),t("div",{staticClass:"col-xl-7 col-lg-11 col-11 mx-auto d-flex single-description padding-bottom-125"},[t("div",{staticClass:"socials d-flex flex-column mr-8"},[t("ShareNetwork",{attrs:{network:"facebook",url:"https://solixmd.mr-x.su"+e.$route.fullPath,title:e.item.translates.name,description:e.item.translates.description}},[t("img",{attrs:{src:e.images.facebook},on:{mouseover:function(t){e.images.facebook=e.images.facebookOver},mouseleave:function(t){e.images.facebook=e.images.facebook_default}}})]),e._v(" "),t("ShareByEmail",{attrs:{item:e.item.translates,path:"https://solixmd.mr-x.su"+e.$route.fullPath}}),e._v(" "),t("a",{ref:"path",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.copy(e.item,"https://solixmd.mr-x.su"+e.$route.fullPath)}}},[t("img",{attrs:{src:e.images.link},on:{mouseover:function(t){e.images.link=e.images.linkOver},mouseleave:function(t){e.images.link=e.images.link_default}}})])],1),e._v(" "),t("div",{staticClass:"description col-md-12 py-0"},[t("div",{staticClass:"career-introduction"},[t("h1",[e._v(e._s(e.item.translates.name))]),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.item.translates.description)}})]),e._v(" "),t("div",{staticClass:"career-body"},[t("p",{staticClass:"footer-text"},[e._v(e._s(e.$t("career.footer.text")))]),e._v(" "),t("button",{staticClass:"btn-primary",on:{click:function(t){return e.toggleModal(!0,e.item.id)}}},[e._v("\n                    "+e._s(e.$t("career.footer.button"))+"\n                ")])])])]),e._v(" "),t("ContactsNew")],1):e._e()}),[],!1,null,"d9da0a74",null);t.default=i.exports,o()(i,{VApp:n.a})}}]);