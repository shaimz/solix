(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{193:function(e,t,a){"use strict";a.r(t);var s={name:"serviceRequests",components:{ModalRequest:()=>Promise.all([a.e(2),a.e(1),a.e(4),a.e(19)]).then(a.bind(null,185)),Navbar:()=>a.e(3).then(a.bind(null,181)),dataTables:()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(4),a.e(7)]).then(a.bind(null,137)),EmailService:()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(18)]).then(a.bind(null,135))},props:{isMail:Boolean},mounted(){this.$store.dispatch("serviceRequests")},data:()=>({headers:[{text:"Type",sortable:!1,align:"left",value:"name"},{text:"Service",sortable:!1,value:"services"},{text:"Phone Number",sortable:!1,value:"phone"},{text:"Email",sortable:!1,value:"email"},{text:"Comment",sortable:!1,value:"comment"},{text:"Time",sortable:!1,value:"time"},{text:"",sortable:!1,value:"controls"}],open:!1,id:null,email:null}),computed:{data(){return this.$store.getters.getServiceRequestById}},methods:{showModal(){this.open=!0},toggleModal(e){this.open=e},getDate(e){e=(""+e.replace(/[-?]/g,"/").replace("T"," ")).split(":");let t=[];return e.pop(),e[0].split("/").forEach(e=>{t.push(e.split(" ")[0])}),e=t[0],t[0]=t[2],t[2]=e,t.join("/")},showServiceRequests(e=1){var t=this.$store.getters.getServiceRequests;let a=[];if(t)return Array.isArray(t)?t.forEach(t=>{t.status===e&&a.push({value:!0,name:t.type,services:t.service,phone:t.phone,email:t.email,comment:t.comment,time:this.getDate(t.created_at),id:t.id})}):a.push({value:!1,name:t.type,services:t.service,phone:t.phone,email:t.email,comment:t.comment,time:this.getDate(t.created_at)}),a}},created(){},ready:()=>{}},l=a(11);l=Object(l.a)(s,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"request-page",title:""}},[t("Navbar",{attrs:{heading:this.$attrs.head,tabs:this.$attrs.nav}}),e._v(" "),t("div",{staticClass:"tab-content",attrs:{id:"pills-tabContent"}},[t("div",{staticClass:"tab-pane fade show active",attrs:{id:"pills-active-requests",role:"tabpanel","aria-labelledby":"pills-requests-tab"}},[t("dataTables",{attrs:{seenPage:"service","page-type":"default",heading:Object.values(this.$attrs.nav[0])[0],headings:e.headers,items:e.showServiceRequests(1)},on:{value:e.showModal}})],1),e._v(" "),t("div",{staticClass:"tab-pane fade",attrs:{id:"pills-archive",role:"tabpanel","aria-labelledby":"pills-archive-tab"}},[t("dataTables",{attrs:{"page-type":"archive",heading:Object.values(this.$attrs.nav[0])[1],headings:e.headers,items:e.showServiceRequests(0)}})],1)]),e._v(" "),e.open?t("modal-request",e._b({attrs:{route:"emailService",headings:this.$attrs.head,type:"service",id:e.id,open:e.open},on:{offvalue:e.toggleModal}},"modal-request",e.data,!1)):e._e()],1)}),[],!1,null,null,null);t.default=l.exports}}]);