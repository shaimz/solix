(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-4"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _event_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../event/eventbus.js */ "./resources/js/event/eventbus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ShareByEmail = function ShareByEmail() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-20").then(__webpack_require__.bind(null, /*! ../includes/ShareEmail */ "./resources/js/components/public/includes/ShareEmail.vue"));
};

var Breadcrumbs = function Breadcrumbs() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));
};




var MoreItems = function MoreItems() {
  return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e("frontend-chunk-31")]).then(__webpack_require__.bind(null, /*! ../includes/moreItems */ "./resources/js/components/public/includes/moreItems.vue"));
};



var Discount = function Discount() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-24").then(__webpack_require__.bind(null, /*! ../includes/discount/Discount */ "./resources/js/components/public/includes/discount/Discount.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Article',
  components: {
    ShareByEmail: ShareByEmail,
    Discount: Discount,
    MoreItems: MoreItems,
    Breadcrumbs: Breadcrumbs
  },
  data: function data() {
    return {
      language: this.$store.getters.getPublicLanguage.code === 'en' ? 1 : this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2,
      dataFetched: false,
      open: false,
      images: {
        facebook_default: "/assets/components/projects/project/fb.jpg",
        facebook: "/assets/components/projects/project/fb.jpg",
        facebookOver: "/assets/icons/facebook.svg",
        link_default: "/assets/components/projects/project/link.jpg",
        link: "/assets/components/projects/project/link.jpg",
        linkOver: "/assets/icons/link.svg",
        email_default: "/assets/components/projects/project/link.jpg",
        email: "/assets/components/projects/project/link.jpg",
        emailOver: "/assets/icons/link.svg"
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    _event_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('theme', 'dark');
    _event_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('position', 'absolute');
    this.$store.dispatch('singleNews', {
      id: this.$route.params.id,
      lang: this.language
    }).then(function () {
      _this.dataFetched = true;
    });
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    item: 'getSingleNews'
  })), {}, {
    breadcrumb: function breadcrumb() {
      return [{
        name: 'news',
        label: this.$t('news.title')
      }, {
        name: 'Article',
        news_id: this.$route.params.id
      }];
    }
  }),
  methods: {
    currentUrl: function currentUrl(route) {
      return location.scheme + '//' + location.hostname + route;
    },
    copy: function copy(data, path) {
      document.addEventListener('copy', function (e) {
        e.clipboardData.setData('text/plain', path);
        e.preventDefault();
      }, true);
      document.execCommand('copy');
    }
  },
  watch: {
    language: function language() {
      this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2;
    },
    open: function open(newVal, oldVal) {
      if (oldVal !== newVal) this.$emit('openModal', {
        value: newVal
      });
    },
    dataFetched: function dataFetched(n, o) {
      if (n) {
        $('head').append('<meta property="og:url"                content="' + location.protocol + '//' + location.hostname + this.$route.fullPath + '" />\n' + '<meta property="og:type"               content="article" />\n' + '<meta property="og:title"              content="' + this.item.translates.name + '" />\n' + '<meta property="og:description"        content="' + this.item.translates.description + '" />\n' + '<meta property="og:image"              content="' + this.item.image + '" />');
      }
    },
    $route: function $route(to) {
      this.dataFetched = true;

      if (to.path.includes('news')) {
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('theme', 'dark');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.dataFetched
    ? _c("v-app", { attrs: { id: "singleProject" } }, [
        _c(
          "div",
          { staticClass: "row col-12 top-header py-0 justify-content-center" },
          [
            _c(
              "div",
              {
                staticClass: "col-xl-7 col-xs-12 row flex-column padding-125",
                attrs: { id: "header" }
              },
              [
                _c("breadcrumbs", {
                  attrs: { color: "light", items: _vm.breadcrumb }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "header-text text-white" }, [
                  _vm.item.translates
                    ? _c("h1", [_vm._v(_vm._s(_vm.item.translates.name))])
                    : _vm._e()
                ])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-xl-7 col-xs-12 m-auto d-flex single-description padding-125"
          },
          [
            _c(
              "div",
              { staticClass: "socials d-flex flex-column mr-8" },
              [
                _c(
                  "ShareNetwork",
                  {
                    attrs: {
                      network: "facebook",
                      url: _vm.currentUrl(_vm.$route.fullPath),
                      title: _vm.item.translates.name,
                      description: _vm.item.translates.description
                    }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.images.facebook },
                      on: {
                        mouseover: function($event) {
                          _vm.images.facebook = _vm.images.facebookOver
                        },
                        mouseleave: function($event) {
                          _vm.images.facebook = _vm.images.facebook_default
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("ShareByEmail", {
                  attrs: {
                    item: _vm.item.translates,
                    path: _vm.currentUrl(_vm.$route.fullPath)
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    ref: "path",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.copy(_vm.item, _vm.currentUrl(_vm.$route.fullPath))
                      }
                    }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.images.link },
                      on: {
                        mouseover: function($event) {
                          _vm.images.link = _vm.images.linkOver
                        },
                        mouseleave: function($event) {
                          _vm.images.link = _vm.images.link_default
                        }
                      }
                    })
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "description col-md-10" }, [
              _c("p", {
                domProps: { innerHTML: _vm._s(_vm.item.translates.description) }
              })
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { id: "more-items" } },
          [
            _c("more-items", {
              attrs: { show: "2", type: "news", lang: _vm.language }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "justify-content-center px-0 padding-125",
            attrs: { id: "discount" }
          },
          [_c("Discount", _vm._g({}, _vm.$listeners))],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/blog/Article.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/public/blog/Article.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article_vue_vue_type_template_id_6cd3c7d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.vue?vue&type=template&id=6cd3c7d4&scoped=true& */ "./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true&");
/* harmony import */ var _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.vue?vue&type=script&lang=js& */ "./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Article_vue_vue_type_template_id_6cd3c7d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Article_vue_vue_type_template_id_6cd3c7d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6cd3c7d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/blog/Article.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_6cd3c7d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=template&id=6cd3c7d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_6cd3c7d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_6cd3c7d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);