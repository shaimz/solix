(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{180:function(s,L,t){"use strict";t.r(L);var a={name:"Sidebar",data:()=>({isEmail:!1}),mounted(){this.$store.dispatch("countRequests")},computed:{count(){return this.$store.getters.getRequestCount}},methods:{forceUpdate:s=>{}}};t=t(11),t=Object(t.a)(a,(function(){var s=this,L=s._self._c;return L("nav",{staticClass:"sidebar-wrapper",attrs:{id:"sidebar"}},[L("div",{staticClass:"sidebar-content"},[L("div",{staticClass:"sidebar-brand"},[L("router-link",{attrs:{to:{name:"dashboard"}}},[L("svg",{attrs:{width:"134",height:"52",viewBox:"0 0 134 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[L("path",{attrs:{d:"M134 34.3333H133.979L134 34.3754V34.3333Z",fill:"#1F1F1F"}}),s._v(" "),L("path",{attrs:{d:"M116.615 34.3051V18.1722H113.732V34.3051H116.615Z",fill:"#1F1F1F"}}),s._v(" "),L("path",{attrs:{d:"M103.042 31.4006C102.03 31.267 101.221 30.4583 101.087 29.4456V18.1722H98.2039V29.1643C98.2039 29.973 98.3867 30.7325 98.7313 31.4288C99.2166 32.4415 100.046 33.2713 101.059 33.7777C101.755 34.1223 102.515 34.3051 103.317 34.3051H111.503V31.4288L103.042 31.4006Z",fill:"#1F1F1F"}}),s._v(" "),L("path",{attrs:{d:"M77.8303 21.0697H67.9213C67.4079 21.0697 66.9437 21.2807 66.5991 21.6253C66.2616 21.9628 66.0506 22.434 66.0506 22.9474C66.0506 23.4608 66.2545 23.932 66.5921 24.2695H66.5991C66.9437 24.6071 67.4079 24.8251 67.9213 24.8251H68.4769H71.4728H73.6107C74.9188 24.8251 76.1143 25.3596 76.9793 26.2246H76.9864C77.8514 27.0896 78.3859 28.2149 78.3859 29.53C78.3859 30.838 77.8514 32.0336 76.9864 32.8986L76.9793 32.9056C76.1143 33.7706 74.9188 34.3051 73.6107 34.3051H63.6243V31.4077H73.6107C74.1311 31.4077 74.5953 31.1967 74.9328 30.8591H74.9399C75.2774 30.5216 75.4884 30.0504 75.4884 29.53C75.4884 29.0166 75.2774 28.6157 74.9328 28.2711C74.5953 27.9335 74.1311 27.7226 73.6107 27.7226H71.4728H68.4769H67.9213C66.6062 27.7226 65.4177 27.1881 64.5526 26.3231V26.316C63.6876 25.451 63.1461 24.2555 63.1461 22.9474C63.1461 21.6323 63.6876 20.4368 64.5526 19.5717C65.4177 18.7067 66.6062 18.1722 67.9213 18.1722H77.8303V21.0697Z",fill:"#1F1F1F"}}),s._v(" "),L("path",{attrs:{d:"M133.726 18.1722H130.456L126.032 23.9179L121.609 18.1722H118.359V18.6856L124.211 26.2738L118.359 33.8761V34.3333H121.651L126.053 28.6298L130.456 34.3333H133.726V33.848L127.875 26.2738L133.726 18.6856V18.1722Z",fill:"#1F1F1F"}}),s._v(" "),L("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M83.5338 17.2018L88.0206 21.6816L92.5004 17.2018H83.5338Z",fill:"#FFE454"}}),s._v(" "),L("path",{attrs:{d:"M91.1219 21.9771C92.4651 22.9124 93.3372 24.4736 93.3372 26.2388C93.3372 29.1011 91.0446 31.4289 88.1893 31.4289C86.9867 31.4289 89.0473 31.4289 87.8447 31.4289C84.9894 31.4289 82.6968 29.1011 82.6968 26.2388C82.6968 24.4736 83.5689 22.9124 84.9121 21.9771L82.8445 19.9095C80.9808 21.3863 79.7783 23.679 79.7783 26.2388C79.7783 30.6905 83.393 34.3053 87.8447 34.3053C89.0473 34.3053 86.9867 34.3053 88.1893 34.3053C92.641 34.3053 96.2557 30.6905 96.2557 26.2388C96.2557 23.679 95.0532 21.3863 93.1895 19.9095L91.1219 21.9771Z",fill:"#1F1F1F"}}),s._v(" "),L("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.323 3.09436L23.2077 4.18442L25.0925 5.27448V7.4546V9.62769L23.2077 10.7177L21.323 11.8078L19.4382 10.7177L17.5535 9.62769V7.4546V5.27448L19.4382 4.18442L21.323 3.09436ZM12.3282 12.3282L14.1637 11.8359L16.0063 11.3437L17.3495 12.6939L18.6928 14.0372L18.2005 15.8797L17.7082 17.7152L15.8727 18.2075L14.0372 18.6998L12.6869 17.3566L11.3437 16.0063L11.8359 14.1708L12.3282 12.3282ZM33.8622 33.8622L35.6977 33.3699L37.5332 32.8776L38.8835 34.2208L40.2267 35.5711L39.7344 37.4066L39.2422 39.2492L37.4066 39.7415L35.5641 40.2338L34.2208 38.8835L32.8706 37.5403L33.3699 35.6977L33.8622 33.8622ZM39.2422 12.3282L39.7344 14.1708L40.2267 16.0063L38.8835 17.3566L37.5332 18.6998L35.6977 18.2075L33.8622 17.7152L33.3699 15.8797L32.8706 14.0372L34.2208 12.6939L35.5641 11.3437L37.4066 11.8359L39.2422 12.3282ZM30.2474 3.09436L32.1321 4.18442L34.0169 5.27448V7.4546V9.62769L32.1321 10.7177L30.2474 11.8078L28.3627 10.7177L26.4779 9.62769V7.4546V5.27448L28.3627 4.18442L30.2474 3.09436ZM25.7817 0L26.7029 0.534481L27.6242 1.06193V2.12386V3.18579L26.7029 3.71324L25.7817 4.24068L24.8674 3.71324L23.9462 3.18579V2.12386V1.06193L24.8674 0.534481L25.7817 0ZM25.7817 10.7107L27.4343 11.6672L29.08 12.6166V14.5224V16.4212L27.4343 17.3777L25.7817 18.3271L24.136 17.3777L22.4904 16.4212V14.5224V12.6166L24.136 11.6672L25.7817 10.7107ZM21.323 48.483L23.2077 47.393L25.0925 46.3029V44.1228V41.9497L23.2077 40.8597L21.323 39.7696L19.4382 40.8597L17.5535 41.9497V44.1228V46.3029L19.4382 47.393L21.323 48.483ZM30.2474 48.483L32.1321 47.393L34.0169 46.3029V44.1228V41.9497L32.1321 40.8597L30.2474 39.7696L28.3627 40.8597L26.4779 41.9497V44.1228V46.3029L28.3627 47.393L30.2474 48.483ZM25.7817 51.5774L26.7029 51.0429L27.6242 50.5155V49.4535V48.3916L26.7029 47.8642L25.7817 47.3367L24.8674 47.8642L23.9462 48.3916V49.4535V50.5155L24.8674 51.0429L25.7817 51.5774ZM25.7817 40.8667L27.4343 39.9103L29.08 38.9608V37.055V35.1562L27.4343 34.1997L25.7817 33.2503L24.136 34.1997L22.4904 35.1562V37.055V38.9608L24.136 39.9103L25.7817 40.8667ZM3.09436 30.2474L4.18442 28.3627L5.26745 26.4779H7.44757H9.62769L10.7107 28.3627L11.8008 30.2474L10.7107 32.1392L9.62769 34.0239H7.44757H5.26745L4.18442 32.1392L3.09436 30.2474ZM3.09436 21.33L4.18442 19.4382L5.26745 17.5535H7.44757H9.62769L10.7107 19.4382L11.8008 21.33L10.7107 23.2148L9.62769 25.0995H7.44757H5.26745L4.18442 23.2148L3.09436 21.33ZM0 25.7887L0.527448 24.8674L1.06193 23.9532H2.11683H3.17876L3.7062 24.8674L4.24068 25.7887L3.7062 26.71L3.17876 27.6242H2.11683H1.06193L0.527448 26.71L0 25.7887ZM10.7107 25.7887L11.6601 24.1431L12.6166 22.4904H14.5154H16.4212L17.3706 24.1431L18.32 25.7887L17.3706 27.4343L16.4212 29.087H14.5154H12.6166L11.6601 27.4343L10.7107 25.7887ZM48.476 30.2474L47.386 28.3627L46.2959 26.4779H44.1228H41.9427L40.8526 28.3627L39.7696 30.2474L40.8526 32.1392L41.9427 34.0239H44.1228H46.2959L47.386 32.1392L48.476 30.2474ZM48.476 21.33L47.386 19.4382L46.2959 17.5535H44.1228H41.9427L40.8526 19.4382L39.7696 21.33L40.8526 23.2148L41.9427 25.0995H44.1228H46.2959L47.386 23.2148L48.476 21.33ZM51.5704 25.7887L51.0429 24.8674L50.5084 23.9532H49.4536H48.3916L47.8571 24.8674L47.3297 25.7887L47.8571 26.71L48.3916 27.6242H49.4536H50.5084L51.0429 26.71L51.5704 25.7887ZM40.8597 25.7887L39.9103 24.1431L38.9538 22.4904H37.055H35.1492L34.1997 24.1431L33.2503 25.7887L34.1997 27.4343L35.1492 29.087H37.055H38.9538L39.9103 27.4343L40.8597 25.7887ZM17.7082 33.8622L18.2005 35.6977L18.6928 37.5403L17.3495 38.8835L16.0063 40.2338L14.1637 39.7415L12.3282 39.2492L11.8359 37.4066L11.3437 35.5711L12.6869 34.2208L14.0372 32.8776L15.8727 33.3699L17.7082 33.8622Z",fill:"#FFE454"}})])])],1),s._v(" "),L("div",{staticClass:"sidebar-background"}),s._v(" "),L("div",{staticClass:"sidebar-menu"},[L("ul",[L("li",{staticClass:"sidebar-dropdown"},[L("span",{staticClass:"list-item"},[L("span",[s._v("Requests")]),s._v(" "),L("span",{staticClass:"badge badge-pill"},[s._v(s._s(s.count.products+s.count.calls+s.count.services))])]),s._v(" "),L("div",{staticClass:"sidebar-submenu"},[L("ul",[L("li",[L("router-link",{attrs:{to:{name:"productRequests"}},on:{click:s.forceUpdate}},[L("span",[L("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/assets/icons/shopping-basket.png",expression:"'/assets/icons/shopping-basket.png'"}],attrs:{alt:""}})]),s._v("\n                                    Product requests"),s.count.products?L("span",{staticClass:"badge badge-pill"},[s._v(s._s(s.count.products))]):s._e()])],1),s._v(" "),L("li",[L("router-link",{attrs:{to:{name:"serviceRequests"}}},[L("span",[L("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/assets/icons/settings.png",expression:"'/assets/icons/settings.png'"}],attrs:{alt:""}})]),s._v("\n                                    Service requests"),s.count.services?L("span",{staticClass:"badge badge-pill"},[s._v(s._s(s.count.services))]):s._e()])],1),s._v(" "),L("li",[L("router-link",{attrs:{to:{name:"callRequests"}},on:{click:s.forceUpdate}},[L("span",[L("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/assets/icons/chat.png",expression:"'/assets/icons/chat.png'"}],attrs:{alt:""}})]),s._v("\n                                    Call requests"),s.count.calls?L("span",{staticClass:"badge badge-pill"},[s._v(s._s(s.count.calls))]):s._e()])],1)])])]),s._v(" "),L("li",[L("router-link",{staticClass:"list-item",attrs:{to:{name:"Products"}}},[s._v("Products")])],1),s._v(" "),L("li",[L("router-link",{staticClass:"list-item",attrs:{to:{name:"Projects"}}},[s._v("Projects")])],1),s._v(" "),L("li",[L("router-link",{staticClass:"list-item",attrs:{to:{name:"News"}}},[s._v("News")])],1),s._v(" "),L("li",[L("router-link",{staticClass:"list-item",attrs:{to:{name:"Careers"}}},[s._v("Careers")])],1)])])])])}),[],!1,null,null,null);L.default=t.exports}}]);