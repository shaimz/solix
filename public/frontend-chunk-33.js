(window.webpackJsonp=window.webpackJsonp||[]).push([[40,93],{131:function(t,s,e){"use strict";e.r(s);var a=e(1),i=(e(6),{name:"steps",props:["page"],data(){return{tab:"",active:this.$t(this.page+".steps.tabs")[0].title,text:"",optionsLottie:{autoplay:!0,speed:1,maxWidth:"600px",loop:!0}}},computed:{small:()=>a.a.data.mediumCompare,xsmall:()=>a.a.data.xsmall},mounted(){this.initialisePicker()},methods:{fetchList(t){let s=[];for(var e in t)t[e].title&&s.push({id:e,value:t[e].title});return s},getTab(t){var s,e=this.$t(this.page+".steps.tabs");for(s in e)if(e[s].title===t.value)return e[s].title},initialisePicker(){setTimeout(()=>{if(document.querySelector("#trigger4")){let t=this,s=this;new MobileSelect({trigger:"#trigger4",title:"",wheels:[{data:this.fetchList(this.$t(this.page+".steps.tabs"))}],cancelBtnText:this.$t("cancel"),ensureBtnText:this.$t("select"),jsonType:!0,position:[0],transitionEnd:function(t,s){},onShow:t=>{},callback:function(e,a){a=a[0],s.active=t.getTab(a),s.text=a.value}})}},800)},setTab(t){this.text=t.title}},watch:{xsmall(t,s){t!==s&&t&&this.initialisePicker()}}}),l=e(10),n=e(11),o=e.n(n),p=e(414),c=e(419);n=e(416),e=e(408),i=Object(l.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row padding-125",attrs:{id:"steps"}},[e("div",{staticClass:"col-xl-7 col-11 m-auto"},[e("h2",[t._v(t._s(t.$t(t.page+".steps.title")))]),t._v(" "),e("v-tabs",{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[[t.xsmall?e("div",{staticClass:"nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column",attrs:{id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"}},[e("ul",[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"trigger4","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.active||t.$t(t.page+".steps.tabs")[0].title))])])])]):t._e()],t._v(" "),t._l(t.$t(t.page+".steps.tabs"),(function(s,a){return t.xsmall?t._e():e("v-tab",{key:"tab-"+a},[e("h5",[t._v(t._s(s.title))])])}))],2),t._v(" "),t.xsmall?e("div",{staticClass:"tab-content col-lg-10 col-12 pr-0",attrs:{id:"v-pills-tabContent"}},t._l(t.$t(t.page+".steps.tabs"),(function(s,a){return e("div",{key:"tab-"+a,class:["tab-pane","fade",s.title===t.active?"show active":""],attrs:{id:s.title,role:"tabpanel","aria-labelledby":"v-pills-home-tab"}},[e("p",{staticClass:"steps-description"},[t._v(t._s(s.text))]),t._v(" "),e("div",{staticClass:"steps-grid"},t._l(s.list,(function(s,a){return e("div",{key:"step-"+a,staticClass:"step"},[e("div",{staticClass:"step-title d-flex"},[e("span",{staticClass:"roboto"},[t._v(t._s(a+1))]),t._v(" "),e("span",[t._v(t._s(s.title))])]),t._v(" "),e("div",{staticClass:"step-text"},[e("p",[t._v(t._s(s.text))])])])})),0)])})),0):e("v-tabs-items",{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},t._l(t.$t(t.page+".steps.tabs"),(function(s,a){return e("v-tab-item",{key:"tab-item-"+a},[e("p",{staticClass:"steps-description"},[t._v(t._s(s.text))]),t._v(" "),e("div",{staticClass:"steps-grid"},t._l(s.list,(function(s,a){return e("div",{key:"step-"+a,staticClass:"step"},[e("div",{staticClass:"step-title d-flex"},[e("span",{staticClass:"roboto"},[t._v(t._s(a+1))]),t._v(" "),e("span",[t._v(t._s(s.title))])]),t._v(" "),e("div",{staticClass:"step-text"},[e("p",[t._v(t._s(s.text))])])])})),0)])})),1),t._v(" "),e("div",{staticClass:"schema"},[e("lottie-player",{attrs:{src:t.$t("b2b.steps.scheme.animation"),options:t.optionsLottie}})],1)],1)])}),[],!1,null,"5cdeb42c",null);s.default=i.exports,o()(i,{VTab:p.a,VTabItem:c.a,VTabs:n.a,VTabsItems:e.a})}}]);