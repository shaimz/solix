(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(t,a,e){"use strict";function l(){var t=this,a=t._self._c;return a("header",{staticClass:"navbar navbar-light"},[a("div",{staticClass:"container-fluid pt-2 pl-4"},[a("div",{staticClass:"d-flex flex-column"},[a("a",{staticClass:"navbar-brand"},[a("h2",[t._v(t._s(this.title?this.capitalize(this.title):"Dashboard"))])]),t._v(" "),t.emailPage&&t.nav?a("ul",{staticClass:"nav nav-pills mb-3",attrs:{id:"pills-tab",role:"tablist"}},t._l(t.nav,(function(e,l){return a("li",{key:e.value,class:["nav-item ",0===l?"d-flex align-items-center":""],attrs:{role:"presentation"}},[a("router-link",{attrs:{to:{name:0===l?e.id.replace(" ",""):""}}},[a("button",{class:"nav-link active",attrs:{id:"pills-home-tab","data-bs-target":"#pills-"+e.id,type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[t._v(t._s(e.name)+"\n                        ")])]),t._v(" "),0===l?a("svg",{staticClass:"svg-arrow",attrs:{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 8.825L3.7085 5L0 1.175L1.1417 0L6 5L1.1417 10L0 8.825Z",fill:"white"}})]):t._e()],1)})),0):!t.emailPage&&t.nav?a("ul",{staticClass:"nav nav-pills mb-3",attrs:{id:"pills-tab",role:"tablist"}},t._l(t.nav,(function(e,l){return a("li",{key:e.id,staticClass:"nav-item",attrs:{role:"presentation"}},[a("button",{class:["nav-link ",0===l?"active":""],attrs:{id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-"+e.id,type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[t._v(t._s(e.name)+"\n                    ")])])})),0):t._e()]),t._v(" "),a("form",{staticClass:"d-flex input-group w-auto align-self-center"},[a("a",{staticClass:"nav-item text-white text-decoration-none text-uppercase logout",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("Logout")])])])])}e.r(a),l._withStripped=!0;var s={name:"Navbar",props:{heading:String,pageType:String,tabs:Array,emailPage:Boolean},data:()=>({title:"",type:"",nav:[],email:!1}),mounted(){this.title=this.heading,this.type=this.pageType,this.nav=this.toCarmel(this.tabs),this.email=this.emailPage},methods:{capitalize:t=>t.charAt(0).toUpperCase()+t.toLowerCase().slice(1),toCarmel:t=>{if(t){var a=[];for(let s=0;s<t.length;s++){var e=Object.keys(t[s]),l=Object.values(t[s]);for(let t=0;t<e.length;t++)a.push({id:e[t].replace(" ",""),name:l[t],value:e[t].toLowerCase().replace(" ","-")})}return a}},logout(){axios.post("/logout").then(t=>{this.$router.go(this.$router.currentRoute)})}}};e=e(11),e=Object(e.a)(s,l,[],!1,null,null,null);a.default=e.exports}}]);