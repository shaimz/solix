(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-12"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/News.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/news/News.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
var Navbar = function Navbar() {
  return __webpack_require__.e(/*! import() */ "chunk-7").then(__webpack_require__.bind(null, /*! ../includes/Navbar */ "./resources/js/components/backend/includes/Navbar.vue"));
};

var dataTables = function dataTables() {
  return __webpack_require__.e(/*! import() */ "chunk-5").then(__webpack_require__.bind(null, /*! ../data/dataTables */ "./resources/js/components/backend/data/dataTables.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'News',
  components: {
    Navbar: Navbar,
    dataTables: dataTables
  },
  props: {
    title: String
  },
  data: function data() {
    return {
      headers: [{
        text: 'Name',
        sortable: false,
        value: 'name'
      }, {
        text: 'Visibility',
        sortable: false,
        value: 'status'
      }, {
        text: 'Created',
        sortable: false,
        value: 'date'
      }, {
        text: '',
        sortable: false,
        value: 'controls'
      }],
      open: false,
      lang: 0
    };
  },
  mounted: function mounted() {
    this.lang = Vue.prototype.$lang;
    this.$store.dispatch('news');
  },
  created: function created() {},
  computed: {},
  methods: {
    langChange: function langChange() {
      this.lang = 3;
    },
    showNews: function showNews() {
      var _this = this;

      var news = this.$store.getters.getNews;
      var data = [];

      if (news) {
        if (Array.isArray(news)) {
          news.forEach(function (item) {
            if (item.news) {
              data.push({
                value: true,
                name: item.news.name,
                status: item.available,
                date: _this.getDate(item.created_at),
                id: item.id
              });
            }
          });
        } else {
          data.push({
            value: false,
            name: news.news.name,
            status: news.available,
            date: this.getDate(news.created_at),
            id: news.id
          });
        }

        return data;
      }
    },
    getDate: function getDate(str) {
      var date = '' + str.replace(/[-?]/g, '/').replace('T', ' ');
      var result = date.split(':');
      var time = [];
      result.pop();
      result[0].split('/').forEach(function (e) {
        time.push(e.split(' ')[0]);
      });
      var temp = time[0];
      time[0] = time[2];
      time[2] = temp;
      return time.join('/');
    },
    dispatchItems: function dispatchItems() {
      this.$store.dispatch('news');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/News.vue?vue&type=template&id=18bf1639&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/news/News.vue?vue&type=template&id=18bf1639& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "single-page" } },
    [
      _c("Navbar", { attrs: { heading: this.title } }),
      _vm._v(" "),
      _c("dataTables", {
        attrs: {
          lang: _vm.lang,
          add: "News",
          "page-type": "news",
          heading: this.title,
          headings: _vm.headers,
          items: _vm.showNews()
        },
        on: { statusUpdated: _vm.dispatchItems }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/news/News.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/backend/news/News.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _News_vue_vue_type_template_id_18bf1639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.vue?vue&type=template&id=18bf1639& */ "./resources/js/components/backend/news/News.vue?vue&type=template&id=18bf1639&");
/* harmony import */ var _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/news/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _News_vue_vue_type_template_id_18bf1639___WEBPACK_IMPORTED_MODULE_0__["render"],
  _News_vue_vue_type_template_id_18bf1639___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/news/News.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/news/News.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/backend/news/News.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/news/News.vue?vue&type=template&id=18bf1639&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/backend/news/News.vue?vue&type=template&id=18bf1639& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_18bf1639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=template&id=18bf1639& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/News.vue?vue&type=template&id=18bf1639&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_18bf1639___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_18bf1639___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);