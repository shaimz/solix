(window.webpackJsonp=window.webpackJsonp||[]).push([[38,49],{130:function(t,a,e){"use strict";e.r(a);var s=e(1),l={name:"modules",props:["page"],data(){return{tab:"",active:this.$t(this.page+".modules.tabs")[0].title,text:"",subTab:0,tabIndex:0}},mounted(){this.initialisePicker()},computed:{small:()=>s.a.data.small,xsmall:()=>s.a.data.xsmall,medium:()=>s.a.data.medium,large:()=>s.a.data.large},methods:{screenSizeClass(t){s.a.data.small?t.removeClass("mh-xs mh-md mh-lg").addClass("mh-sm"):s.a.data.xsmall?t.removeClass("mh-sm mh-md mh-lg").addClass("mh-xs"):s.a.data.medium?t.removeClass("mh-sm mh-xs mh-lg").addClass("mh-md"):t.removeClass("mh-sm mh-xs mh-md").addClass("mh-lg")},setImage(t){let a=$("#modules");"one"===t?a.removeClass("bilateral"):"two"===t&&a.addClass("bilateral"),this.screenSizeClass(a)},fetchList(t){let a=[];for(var e in t)t[e].title&&a.push({id:e,value:t[e].title});return a},getTab(t){var a,e=this.$t(this.page+".modules.tabs");for(a in e)if(e[a].title===t.value)return e[a].title},initialisePicker(){this.changeBackground(),setTimeout(()=>{if(document.querySelector("#trigger3")){let t=this,a=this;new MobileSelect({trigger:"#trigger3",title:"",wheels:[{data:this.fetchList(this.$t(this.page+".modules.tabs"))}],cancelBtnText:this.$t("cancel"),ensureBtnText:this.$t("select"),jsonType:!0,position:[0],transitionEnd:function(t,a){},onShow:t=>{},callback:function(e,s){s=s[0],a.active=t.getTab(s),a.text=s.value,a.tabIndex=e[0]}})}},1500)},setTab(t){this.text=t.title},changeBackground(t,a){if("b2c"===this.page||"b2b"===this.page){let a=$("#modules");this.screenSizeClass(a),t?a.removeClass("bilateral").addClass("thin"):(a.removeClass("thin"),this.subTab?this.subTab&&a.addClass("bilateral"):a.removeClass("bilateral"))}}},watch:{xsmall(t,a){this.changeBackground(this.tab,a),t!==a&&t&&this.initialisePicker()},small(t,a){this.changeBackground(this.tab,!1)},medium(t,a){this.changeBackground(this.tab,!1)},large(){this.changeBackground(this.tab,!1)},tab(t,a){this.changeBackground(t,a)},tabIndex(t,a){this.changeBackground(t,a)}}},i=e(10),n=e(11),o=e.n(n),r=e(414),u=e(419);n=e(416),e=e(408),l=Object(i.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.subTab,attrs:{id:"modules"}},[e("div",{staticClass:"modules-inner"},[e("div",{staticClass:"col-lg-5 col col-11 ml-auto"},[e("div",{staticClass:"sidebar-modules"},[e("h2",{staticClass:"text-white"},[t._v(t._s(t.$t(t.page+".modules.title")))]),t._v(" "),e("v-tabs",{attrs:{"slider-size":"1"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[[t.xsmall?e("div",{staticClass:"nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column",attrs:{id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"}},[e("ul",[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"trigger3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.text||t.$t(t.page+".modules.tabs")[0].title))])])])]):t._l(t.$t(t.page+".modules.tabs"),(function(a,s){return e("v-tab",{key:"tab-"+s},[e("h5",{staticClass:"no-after"},[t._v(t._s(a.title))])])}))],t._v(" "),t.xsmall?t._e():["b2c"===t.page||"b2b"===t.page?e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.$t(t.page+".modules.tabs"),(function(a,s){return e("v-tab-item",{key:"tab-item-"+s},[e("div",[e("ul",{staticClass:"d-flex modules-features"},t._l(a.features,(function(a,s){return e("li",{key:"feature-"+s},[e("p",{staticClass:"roboto"},[t._v(t._s(a.value))]),t._v(" "),e("p",[t._v(t._s(a.name))])])})),0)]),t._v(" "),t.tab?t._e():e("v-tabs",{staticClass:"sides-modules",model:{value:t.subTab,callback:function(a){t.subTab=a},expression:"subTab"}},t._l(t.$t(t.page+".modules.subtabs"),(function(a,s){return e("v-tab",{key:a.id,on:{click:function(e){return t.setImage(a.id)}}},[e("h5",[t._v(t._s(a.title))])])})),1),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(a.text))])],1)})),1):e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.$t(t.page+".modules.tabs"),(function(a,s){return e("v-tab-item",{key:"tab-item-"+s},[e("p",{staticClass:"card-text"},[t._v(t._s(a.text))]),t._v(" "),e("div",[e("ul",{staticClass:"d-flex modules-features"},t._l(a.features,(function(a,s){return e("li",{key:"feature-"+s},[e("p",{staticClass:"roboto"},[t._v(t._s(a.value))]),t._v(" "),e("p",[t._v(t._s(a.name))])])})),0)])])})),1)]],2),t._v(" "),t.xsmall?e("div",{staticClass:"tab-content col-lg-10 col-12 pr-0",attrs:{id:"v-pills-tabContent"}},t._l(t.$t(t.page+".modules.tabs"),(function(a,s){return e("div",{key:"tab-"+s,class:["tab-pane","fade",a.title===t.active?"show active":""],attrs:{id:a.title,role:"tabpanel","aria-labelledby":"v-pills-home-tab"}},[t.xsmall?e("div",[e("ul",{staticClass:"d-flex flex-column modules-features"},t._l(a.features,(function(a,s){return e("li",{key:"feature-"+s},[e("p",{staticClass:"roboto"},[t._v(t._s(a.value))]),t._v(" "),e("p",[t._v(t._s(a.name))])])})),0)]):t._e(),t._v(" "),t.tabIndex||"b2c"!==t.page&&"b2b"!==t.page?t._e():e("v-tabs",{staticClass:"sides-modules",model:{value:t.subTab,callback:function(a){t.subTab=a},expression:"subTab"}},t._l(t.$t(t.page+".modules.subtabs"),(function(a,s){return e("v-tab",{key:a.id,on:{click:function(e){return t.setImage(a.id)}}},[e("h5",[t._v(t._s(a.title))])])})),1),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(a.text))]),t._v(" "),t.small?e("div",[e("ul",{staticClass:"d-flex modules-features"},t._l(a.features,(function(a,s){return e("li",{key:"feature-"+s},[e("p",{staticClass:"roboto"},[t._v(t._s(a.value))]),t._v(" "),e("p",[t._v(t._s(a.name))])])})),0)]):t._e()],1)})),0):t._e()],1)])])])}),[],!1,null,"03e55c3f",null);a.default=l.exports,o()(l,{VTab:r.a,VTabItem:u.a,VTabs:n.a,VTabsItems:e.a})}}]);