(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{184:function(e,t,a){"use strict";function s(){var e=this,t=e._self._c;return t("div",{attrs:{id:"single-page"}},[t("Navbar",{attrs:{heading:this.title}}),e._v(" "),t("dataTables",{attrs:{lang:e.lang,add:"Careers","page-type":"careers",heading:this.title,headings:e.headers,items:e.items},on:{statusUpdated:e.dispatchItems}})],1)}a.r(t),s._withStripped=!0;var i={name:"Careers",components:{Navbar:()=>a.e(3).then(a.bind(null,181)),dataTables:()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(4),a.e(7)]).then(a.bind(null,137))},props:{title:String},data:()=>({headers:[{text:"Name",sortable:!1,value:"name"},{text:"Visibility",sortable:!1,value:"status"},{text:"Location",sortable:!1,value:"location"},{text:"Description",sortable:!1,value:"description"},{text:"Created",sortable:!1,value:"date"},{text:"",sortable:!1,value:"controls"}],open:!1,lang:0,render:!1,items:[]}),mounted(){this.lang=Vue.prototype.$lang},created(){this.showCareers()},computed:{},methods:{langChange(){this.lang=3},showCareers(){let e=[];this.$store.dispatch("careers",{lang_id:[1,2,3]}).then(()=>{var t=this.$store.getters.getCareers;Array.isArray(t)?t.forEach(t=>{t.backend_data[0]&&e.push({value:!0,name:t.backend_data[0].name,location:t.backend_data[0].location,status:t.status,description:t.backend_data[0].description,date:this.getDate(t.created_at),id:t.id})}):e.push({value:!1,name:t.backend_data[0].name,location:t.backend_data[0].location,status:t.available,date:this.getDate(t.created_at),description:t.backend_data[0].description,id:t.id})}),this.render=!0,this.items=e},getDate(e){e=(""+e.replace(/[-?]/g,"/").replace("T"," ")).split(":");let t=[];return e.pop(),e[0].split("/").forEach(e=>{t.push(e.split(" ")[0])}),e=t[0],t[0]=t[2],t[2]=e,t.join("/")},dispatchItems(){this.showCareers()}}},r=a(11);r=Object(r.a)(i,s,[],!1,null,null,null);t.default=r.exports}}]);