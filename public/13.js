(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/complect.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");
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
  name: 'complect',
  props: ['page'],
  mounted: function mounted() {},
  computed: {
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    }
  },
  methods: {
    renderRow: function renderRow(data) {
      var items = [];
      var offset = 0;
      var end = 6;

      if (data.length >= 1) {
        while (data.slice(offset, end).length >= 1) {
          items.push(data.slice(offset, end));
          offset += 6;
          end++;
        }
      }

      return items.concat(items);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#complect[data-v-bc97ecbc] {\n  background-color: #F3F5F6;\n}\n#complect .card[data-v-bc97ecbc] {\n  padding: 23px 0px 23px 0 !important;\n}\n#carousel-partners .d-grid[data-v-bc97ecbc] {\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n}\n.card[data-v-bc97ecbc] {\n  background-color: white;\n  border: unset !important;\n  border-radius: 10px;\n  transition: all 0.1s ease-in-out;\n  color: #1f1f1f;\n  text-align: left;\n}\n.card[data-v-bc97ecbc]:active, .card[data-v-bc97ecbc]:focus {\n  outline: unset;\n}\n.card[data-v-bc97ecbc]:hover {\n  color: #ffffff;\n  background-color: #79C25A;\n}\n.card-body[data-v-bc97ecbc] {\n  padding: 0;\n}\n.card-body h5[data-v-bc97ecbc] {\n  max-width: 330px;\n  font-weight: 600;\n  position: relative;\n  margin-top: 40px;\n  padding: 0 0 0 30px;\n}\n.card-body p[data-v-bc97ecbc] {\n  font-weight: 400;\n  max-width: 230px;\n  padding: 10px 0 40px 30px;\n  font-size: 14px;\n}\n.card-body h5[data-v-bc97ecbc]:after {\n  content: \"\";\n  bottom: 0;\n  width: 2px;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  background-color: #FFE454;\n  position: absolute;\n}\n.carousel-control-next[data-v-bc97ecbc] {\n  right: 0;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin: auto 0 auto auto;\n  top: 0;\n  bottom: 0;\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n.carousel-control-prev[data-v-bc97ecbc] {\n  right: 0;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.4) !important;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  top: 0;\n  bottom: 0;\n  margin: auto 80px auto auto;\n  opacity: 1;\n  transition: all 0.1s ease-in-out;\n}\n.carousel-control-prev[data-v-bc97ecbc]:hover, .carousel-control-next[data-v-bc97ecbc]:hover {\n  background-color: white;\n}\n.carousel-control-prev:hover .carousel-control-prev-icon[data-v-bc97ecbc], .carousel-control-next:hover .carousel-control-next-icon[data-v-bc97ecbc] {\n  filter: invert(81%) sepia(13%) saturate(1715%) hue-rotate(52deg) brightness(87%) contrast(81%);\n}\n.carousel-control-prev-icon[data-v-bc97ecbc], .carousel-control-next-icon[data-v-bc97ecbc] {\n  width: 10px !important;\n  height: 10px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_style_index_0_id_bc97ecbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_style_index_0_id_bc97ecbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_style_index_0_id_bc97ecbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_style_index_0_id_bc97ecbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_style_index_0_id_bc97ecbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=template&id=bc97ecbc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/complect.vue?vue&type=template&id=bc97ecbc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "padding-125", attrs: { id: "complect" } }, [
    _c("div", { staticClass: "m-auto col-xl-7 col-md-11 col-11" }, [
      _c(
        "div",
        { staticClass: "d-flex mx-auto py-0 px-0 position-relative container" },
        [
          _c("h2", { staticClass: "col-md-7 px-0 mb-4" }, [
            _vm._v(_vm._s(_vm.$t(_vm.page + ".partners.title")))
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "carousel-partners" } }, [
        _c(
          "div",
          { class: ["d-grid grid-column-gap-4 grid-row-gap-4"] },
          _vm._l(_vm.$t(_vm.page + ".partners.cards"), function(card, index) {
            return _c(
              "div",
              { staticClass: "card d-flex justify-content-center" },
              [
                _c("div", { staticClass: "card-body" }, [
                  _c("h5", { staticClass: "my-auto" }, [
                    _vm._v(_vm._s(card.title))
                  ])
                ])
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/complect.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/public/includes/complect.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _complect_vue_vue_type_template_id_bc97ecbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complect.vue?vue&type=template&id=bc97ecbc&scoped=true& */ "./resources/js/components/public/includes/complect.vue?vue&type=template&id=bc97ecbc&scoped=true&");
/* harmony import */ var _complect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complect.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/complect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _complect_vue_vue_type_style_index_0_id_bc97ecbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss& */ "./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _complect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _complect_vue_vue_type_template_id_bc97ecbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _complect_vue_vue_type_template_id_bc97ecbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bc97ecbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/complect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/complect.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/public/includes/complect.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./complect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_style_index_0_id_bc97ecbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=style&index=0&id=bc97ecbc&scoped=true&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/complect.vue?vue&type=template&id=bc97ecbc&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/complect.vue?vue&type=template&id=bc97ecbc&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_template_id_bc97ecbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./complect.vue?vue&type=template&id=bc97ecbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/complect.vue?vue&type=template&id=bc97ecbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_template_id_bc97ecbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_complect_vue_vue_type_template_id_bc97ecbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);