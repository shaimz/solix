(window.webpackJsonp=window.webpackJsonp||[]).push([[37,48],{133:function(t,a,e){"use strict";e.r(a);var s=e(415),l=e(422),i=e(417),n=e(408),o=e(1),r={name:"modules",props:["page"],data(){return{tab:"",active:this.$t(this.page+".modules.tabs")[0].title,text:"",subTab:0,tabIndex:0}},mounted(){this.initialisePicker()},computed:{small:()=>o.a.data.small,xsmall:()=>o.a.data.xsmall,medium:()=>o.a.data.medium,large:()=>o.a.data.large},methods:{screenSizeClass(t){o.a.data.small?t.removeClass("mh-xs mh-md mh-lg").addClass("mh-sm"):o.a.data.xsmall?t.removeClass("mh-sm mh-md mh-lg").addClass("mh-xs"):o.a.data.medium?t.removeClass("mh-sm mh-xs mh-lg").addClass("mh-md"):t.removeClass("mh-sm mh-xs mh-md").addClass("mh-lg")},setImage(t){var a=$("#modules");"one"===t?a.removeClass("bilateral"):"two"===t&&a.addClass("bilateral"),this.screenSizeClass(a)},fetchList(t){var a,e=[];for(a in t)t[a].title&&e.push({id:a,value:t[a].title});return e},getTab(t){var a,e=this.$t(this.page+".modules.tabs");for(a in e)if(e[a].title===t.value)return e[a].title},initialisePicker(){this.changeBackground(),setTimeout(()=>{if(document.querySelector("#trigger3")){let t=this,a=this;new MobileSelect({trigger:"#trigger3",title:"",wheels:[{data:this.fetchList(this.$t(this.page+".modules.tabs"))}],cancelBtnText:this.$t("cancel"),ensureBtnText:this.$t("select"),jsonType:!0,position:[0],transitionEnd:function(t,a){},onShow:t=>{},callback:function(e,s){s=s[0],a.active=t.getTab(s),a.text=s.value,a.tabIndex=e[0]}})}},1500)},setTab(t){this.text=t.title},changeBackground(t,a){var e;"b2c"!==this.page&&"b2b"!==this.page||(e=$("#modules"),this.screenSizeClass(e),t?e.removeClass("bilateral").addClass("thin"):(e.removeClass("thin"),this.subTab?this.subTab&&e.addClass("bilateral"):e.removeClass("bilateral")))}},watch:{xsmall(t,a){this.changeBackground(this.tab,a),t!==a&&t&&this.initialisePicker()},small(t,a){this.changeBackground(this.tab,!1)},medium(t,a){this.changeBackground(this.tab,!1)},large(){this.changeBackground(this.tab,!1)},tab(t,a){this.changeBackground(t,a)},tabIndex(t,a){this.changeBackground(t,a)}}};e=e(11),e=Object(e.a)(r,(function(){var t=this,a=t._self._c;return a("div",{class:t.subTab,attrs:{id:"modules"}},[a("div",{staticClass:"modules-inner"},[a("div",{staticClass:"col-lg-5 col col-11 ml-auto"},[a("div",{staticClass:"sidebar-modules"},[a("h2",{staticClass:"text-white"},[t._v(t._s(t.$t(t.page+".modules.title")))]),t._v(" "),a(i.a,{attrs:{"slider-size":"1"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[[t.xsmall?a("div",{staticClass:"nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column",attrs:{id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"}},[a("ul",[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"trigger3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.text||t.$t(t.page+".modules.tabs")[0].title))])])])]):t._l(t.$t(t.page+".modules.tabs"),(function(e,l){return a(s.a,{key:"tab-"+l},[a("h5",{staticClass:"no-after"},[t._v(t._s(e.title))])])}))],t._v(" "),t.xsmall?t._e():["b2c"===t.page||"b2b"===t.page?a(n.a,{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.$t(t.page+".modules.tabs"),(function(e,n){return a(l.a,{key:"tab-item-"+n},[a("div",[a("ul",{staticClass:"d-flex modules-features"},t._l(e.features,(function(e,s){return a("li",{key:"feature-"+s},[a("p",{staticClass:"roboto"},[t._v(t._s(e.value))]),t._v(" "),a("p",[t._v(t._s(e.name))])])})),0)]),t._v(" "),t.tab?t._e():a(i.a,{staticClass:"sides-modules",model:{value:t.subTab,callback:function(a){t.subTab=a},expression:"subTab"}},t._l(t.$t(t.page+".modules.subtabs"),(function(e,l){return a(s.a,{key:e.id,on:{click:function(a){return t.setImage(e.id)}}},[a("h5",[t._v(t._s(e.title))])])})),1),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.text))])],1)})),1):a(n.a,{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.$t(t.page+".modules.tabs"),(function(e,s){return a(l.a,{key:"tab-item-"+s},[a("p",{staticClass:"card-text"},[t._v(t._s(e.text))]),t._v(" "),a("div",[a("ul",{staticClass:"d-flex modules-features"},t._l(e.features,(function(e,s){return a("li",{key:"feature-"+s},[a("p",{staticClass:"roboto"},[t._v(t._s(e.value))]),t._v(" "),a("p",[t._v(t._s(e.name))])])})),0)])])})),1)]],2),t._v(" "),t.xsmall?a("div",{staticClass:"tab-content col-lg-10 col-12 pr-0",attrs:{id:"v-pills-tabContent"}},t._l(t.$t(t.page+".modules.tabs"),(function(e,l){return a("div",{key:"tab-"+l,class:["tab-pane","fade",e.title===t.active?"show active":""],attrs:{id:e.title,role:"tabpanel","aria-labelledby":"v-pills-home-tab"}},[t.xsmall?a("div",[a("ul",{staticClass:"d-flex flex-column modules-features"},t._l(e.features,(function(e,s){return a("li",{key:"feature-"+s},[a("p",{staticClass:"roboto"},[t._v(t._s(e.value))]),t._v(" "),a("p",[t._v(t._s(e.name))])])})),0)]):t._e(),t._v(" "),t.tabIndex||"b2c"!==t.page&&"b2b"!==t.page?t._e():a(i.a,{staticClass:"sides-modules",model:{value:t.subTab,callback:function(a){t.subTab=a},expression:"subTab"}},t._l(t.$t(t.page+".modules.subtabs"),(function(e,l){return a(s.a,{key:e.id,on:{click:function(a){return t.setImage(e.id)}}},[a("h5",[t._v(t._s(e.title))])])})),1),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.text))]),t._v(" "),t.small?a("div",[a("ul",{staticClass:"d-flex modules-features"},t._l(e.features,(function(e,s){return a("li",{key:"feature-"+s},[a("p",{staticClass:"roboto"},[t._v(t._s(e.value))]),t._v(" "),a("p",[t._v(t._s(e.name))])])})),0)]):t._e()],1)})),0):t._e()],1)])])])}),[],!1,null,"03e55c3f",null);a.default=e.exports}}]);