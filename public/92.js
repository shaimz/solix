(window.webpackJsonp=window.webpackJsonp||[]).push([[92,39],{134:function(t,s,e){"use strict";function a(){var t=this,s=t._self._c;return s("div",{staticClass:"row padding-125",attrs:{id:"steps"}},[s("div",{staticClass:"col-xl-7 col-11 m-auto"},[s("h2",[t._v(t._s(t.$t(t.page+".steps.title")))]),t._v(" "),s(n.a,{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[[t.xsmall?s("div",{staticClass:"nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column",attrs:{id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"}},[s("ul",[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"trigger4","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.active||t.$t(t.page+".steps.tabs")[0].title))])])])]):t._e()],t._v(" "),t._l(t.$t(t.page+".steps.tabs"),(function(e,a){return t.xsmall?t._e():s(i.a,{key:"tab-"+a},[s("h5",[t._v(t._s(e.title))])])}))],2),t._v(" "),t.xsmall?s("div",{staticClass:"tab-content col-lg-10 col-12 pr-0",attrs:{id:"v-pills-tabContent"}},t._l(t.$t(t.page+".steps.tabs"),(function(e,a){return s("div",{key:"tab-"+a,class:["tab-pane","fade",e.title===t.active?"show active":""],attrs:{id:e.title,role:"tabpanel","aria-labelledby":"v-pills-home-tab"}},[s("p",{staticClass:"steps-description"},[t._v(t._s(e.text))]),t._v(" "),s("div",{staticClass:"steps-grid"},t._l(e.list,(function(e,a){return s("div",{key:"step-"+a,staticClass:"step"},[s("div",{staticClass:"step-title d-flex"},[s("span",{staticClass:"roboto"},[t._v(t._s(a+1))]),t._v(" "),s("span",[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"step-text"},[s("p",[t._v(t._s(e.text))])])])})),0)])})),0):s(o.a,{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},t._l(t.$t(t.page+".steps.tabs"),(function(e,a){return s(l.a,{key:"tab-item-"+a},[s("p",{staticClass:"steps-description"},[t._v(t._s(e.text))]),t._v(" "),s("div",{staticClass:"steps-grid"},t._l(e.list,(function(e,a){return s("div",{key:"step-"+a,staticClass:"step"},[s("div",{staticClass:"step-title d-flex"},[s("span",{staticClass:"roboto"},[t._v(t._s(a+1))]),t._v(" "),s("span",[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"step-text"},[s("p",[t._v(t._s(e.text))])])])})),0)])})),1),t._v(" "),s("div",{staticClass:"schema"},[s("lottie-player",{attrs:{src:t.$t("b2b.steps.scheme.animation"),options:t.optionsLottie}})],1)],1)])}e.r(s);var i=e(415),l=e(422),n=e(417),o=e(408),p=(a._withStripped=!0,e(1)),c=(e(7),{name:"steps",props:["page"],data(){return{tab:"",active:this.$t(this.page+".steps.tabs")[0].title,text:"",optionsLottie:{autoplay:!0,speed:1,maxWidth:"600px",loop:!0}}},computed:{small:()=>p.a.data.mediumCompare,xsmall:()=>p.a.data.xsmall},mounted(){this.initialisePicker()},methods:{fetchList(t){var s,e=[];for(s in t)t[s].title&&e.push({id:s,value:t[s].title});return e},getTab(t){var s,e=this.$t(this.page+".steps.tabs");for(s in e)if(e[s].title===t.value)return e[s].title},initialisePicker(){setTimeout(()=>{if(document.querySelector("#trigger4")){let t=this,s=this;new MobileSelect({trigger:"#trigger4",title:"",wheels:[{data:this.fetchList(this.$t(this.page+".steps.tabs"))}],cancelBtnText:this.$t("cancel"),ensureBtnText:this.$t("select"),jsonType:!0,position:[0],transitionEnd:function(t,s){},onShow:t=>{},callback:function(e,a){a=a[0],s.active=t.getTab(a),s.text=a.value}})}},800)},setTab(t){this.text=t.title}},watch:{xsmall(t,s){t!==s&&t&&this.initialisePicker()}}});e=e(11),e=Object(e.a)(c,a,[],!1,null,"5cdeb42c",null);s.default=e.exports}}]);