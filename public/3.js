(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../width */ "./resources/js/width.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Partners',
  data: function data() {
    return {
      render: true
    };
  },
  created: function created() {
    this.$store.dispatch('projects', {
      lang: this.lang_id,
      limit: 20,
      offset: 0
    });
  },
  computed: {
    lang_id: function lang_id() {
      return this.$router.currentRoute.path.includes('en') ? 1 : this.$router.currentRoute.path.includes('ru') ? 3 : 2;
    },
    projects: function projects() {
      return this.$store.state.projects;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xsmall;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    }
  },
  mounted: function mounted() {
    if (!this.xsmall) {
      this.render = true;
    }
  },
  methods: {
    renderRow: function renderRow(data) {
      var items = [];
      var chunk_size = this.small && !this.xsmall ? 4 : 6;
      var pre_items = [];

      for (var i in data) {
        var j = parseInt(i) + 1;
        pre_items.push(data[i]);

        if (j % chunk_size === 0) {
          items.push(pre_items);
          pre_items = [];
        }
      }

      if (!items.length && pre_items.length) {
        items.push(pre_items);
      }

      return items;
    }
  },
  watch: {
    xsmall: function xsmall(newVal, oldVal) {
      var _this = this;

      if (!newVal) {
        setTimeout(function () {
          _this.render = true;
        }, 500);
      } else {
        this.render = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.d-md-flex.position-relative[data-v-84f37114] {\n    justify-content: space-between;\n}\n#partners .card[data-v-84f37114] {\n    justify-content: center\n}\n.card[data-v-84f37114] {\n    background-color: rgba(255, 255, 255, .08);\n    border: unset !important;\n    border-radius: 10px;\n    padding: 30px 50px 20px 50px;\n    transition: all .1s ease-in-out;\n}\n.card[data-v-84f37114]:active, .card[data-v-84f37114]:focus {\n    outline: unset;\n}\n.card[data-v-84f37114]:hover {\n    color: #1f1f1f;\n    background-color: white;\n}\n.card:hover h5[data-v-84f37114]:after {\n    background-color: #79C25A;\n}\n.card:hover .card-img-top[data-v-84f37114] {\n    filter: brightness(1) invert(1);\n}\n.card-body h5[data-v-84f37114] {\n    font-weight: 600;\n    position: relative;\n    padding: 0 0 15px 0;\n}\n.card-body p[data-v-84f37114] {\n    font-weight: 400;\n    padding: 4px 0 0 0;\n    max-width: 195px;\n    margin: auto;\n}\n.card-body h5[data-v-84f37114]:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 50px;\n    height: 2px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    background-color: rgba(255, 255, 255, .2);\n}\n.card-img-top[data-v-84f37114] {\n    max-width: 84px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.carousel-control-next[data-v-84f37114] {\n    right: 0;\n    position: absolute;\n    border: 1px solid rgba(255, 255, 255, .4);\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    margin: auto 0 auto auto;\n    top: 0;\n    bottom: 0;\n    opacity: 1;\n    transition: all .2s ease-in-out;\n}\n.carousel-control-prev[data-v-84f37114] {\n    right: 0;\n    position: absolute;\n    border: 1px solid rgba(255, 255, 255, .4) !important;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    margin: auto 80px auto auto;\n    opacity: 1;\n    transition: all .1s ease-in-out;\n}\n.carousel-control-prev[data-v-84f37114]:hover, .carousel-control-next[data-v-84f37114]:hover {\n    background-color: white;\n}\n.carousel-control-prev:hover .carousel-control-prev-icon[data-v-84f37114], .carousel-control-next:hover .carousel-control-next-icon[data-v-84f37114] {\n    filter: invert(81%) sepia(13%) saturate(1715%) hue-rotate(52deg) brightness(87%) contrast(81%);\n}\n.carousel-control-prev-icon[data-v-84f37114], .carousel-control-next-icon[data-v-84f37114] {\n    width: 10px !important;\n    height: 10px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_style_index_0_id_84f37114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_style_index_0_id_84f37114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_style_index_0_id_84f37114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_style_index_0_id_84f37114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_style_index_0_id_84f37114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "m-auto col-lg-11 col-xl-7 col-md-11 col-11 text-white" },
    [
      _c(
        "div",
        {
          staticClass:
            "d-lg-flex d-xs-block mx-auto py-0 px-0 position-relative"
        },
        [
          _c(
            "h2",
            {
              staticClass:
                "col-xl-8 col-md-10 text-xs-center text-lg-left px-0 mb-6"
            },
            [_vm._v(_vm._s(_vm.$t("home.partners.title")))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-4 col-md-2 next-prev-icons" }, [
            _c(
              "a",
              {
                staticClass: "carousel-control-prev",
                attrs: {
                  href: "#carousel-partners",
                  role: "button",
                  "data-slide": "prev"
                },
                on: { click: function($event) {} }
              },
              [
                _c("span", {
                  staticClass: "carousel-control-prev-icon",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
              ]
            ),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]
      ),
      _vm._v(" "),
      !_vm.xsmall && _vm.render
        ? _c(
            "div",
            {
              staticClass: "carousel carousel-fade",
              attrs: { id: "carousel-partners", "data-interval": "false" }
            },
            [
              _c(
                "div",
                { staticClass: "carousel-inner" },
                _vm._l(_vm.renderRow(_vm.$t("home.partners.cards")), function(
                  row,
                  index
                ) {
                  return _c(
                    "div",
                    {
                      class: [
                        "d-grid grid-columns-3 grid-column-gap-4 grid-row-gap-4 carousel-item",
                        !index ? "active" : ""
                      ]
                    },
                    _vm._l(row, function(card, i) {
                      return _c("div", { staticClass: "card" }, [
                        _c("img", {
                          staticClass: "card-img-top w-50",
                          attrs: { src: card.image }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body text-center" }, [
                          _c("h5", [_vm._v(_vm._s(card.title))])
                        ])
                      ])
                    }),
                    0
                  )
                }),
                0
              )
            ]
          )
        : _c(
            "div",
            {
              staticClass: "mobile-carousel",
              attrs: { "data-ride": "carousel" }
            },
            _vm._l(_vm.$t("home.partners.cards"), function(card, index) {
              return _c("div", { staticClass: "card" }, [
                _c("img", {
                  staticClass: "card-img-top w-50",
                  attrs: { src: card.image }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body text-center" }, [
                  _c("h5", [_vm._v(_vm._s(card.title))])
                ])
              ])
            }),
            0
          )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-next",
        attrs: {
          href: "#carousel-partners",
          role: "button",
          "data-slide": "next"
        }
      },
      [
        _c("span", {
          staticClass: "carousel-control-next-icon",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/Partners/Partners.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/public/includes/Partners/Partners.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Partners_vue_vue_type_template_id_84f37114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partners.vue?vue&type=template&id=84f37114&scoped=true& */ "./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true&");
/* harmony import */ var _Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partners.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Partners_vue_vue_type_style_index_0_id_84f37114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css& */ "./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Partners_vue_vue_type_template_id_84f37114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Partners_vue_vue_type_template_id_84f37114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "84f37114",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/Partners/Partners.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_style_index_0_id_84f37114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_84f37114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=template&id=84f37114&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_84f37114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_84f37114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);