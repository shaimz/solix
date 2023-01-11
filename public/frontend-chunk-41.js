(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-41"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Advantages.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Advantages.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Advantages',
  props: ['items'],
  data: function data() {
    return {
      defaultItems: [{
        id: 0,
        name: 'Warranty',
        value: '5 years warranty',
        icon: '/assets/icons/advantages/warranty.png'
      }, {
        id: 1,
        name: 'Life of work',
        value: 'Up to 20 years optional',
        icon: '/assets/icons/advantages/life_of_work.png'
      }, {
        id: 2,
        name: 'Delivery',
        value: '350 MDL or pickup',
        icon: '/assets/icons/advantages/delivery.png'
      }, {
        id: 3,
        name: 'Online consultation',
        value: 'Any time of the day 24/7',
        icon: '/assets/icons/advantages/consultation.png'
      }]
    };
  },
  computed: {
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.medium;
    },
    windowWidth: function windowWidth() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.largeCompare;
    },
    mediumCompare: function mediumCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.mediumCompare;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xsmall;
    }
  },
  methods: {
    getAdvantages: function getAdvantages() {
      return this.defaultItems;
    },
    getIcon: function getIcon(advantage) {
      return advantage.advantages && advantage.advantages.icon ? advantage.advantages.icon : advantage.icon;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Advantages.vue?vue&type=template&id=393dceb8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Advantages.vue?vue&type=template&id=393dceb8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.xsmall
      ? _c("p", { staticClass: "advantage-title" }, [
          _vm._v(_vm._s(_vm.$t("products.advantages")))
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "companyFeatures d-grid" },
      _vm._l(_vm.getAdvantages(), function(advantage) {
        return _c(
          "div",
          { key: advantage.id, staticClass: "advantage d-flex" },
          [
            _c("img", {
              attrs: { src: _vm.getIcon(advantage), alt: advantage.name }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "advantage-info" }, [
              _c("p", { staticClass: "font-weight-bold text-dark" }, [
                _vm._v(_vm._s(advantage.name))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-dark" }, [
                _vm._v(_vm._s(advantage.value))
              ])
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/products/Advantages.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/public/products/Advantages.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Advantages_vue_vue_type_template_id_393dceb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advantages.vue?vue&type=template&id=393dceb8& */ "./resources/js/components/public/products/Advantages.vue?vue&type=template&id=393dceb8&");
/* harmony import */ var _Advantages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advantages.vue?vue&type=script&lang=js& */ "./resources/js/components/public/products/Advantages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Advantages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Advantages_vue_vue_type_template_id_393dceb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Advantages_vue_vue_type_template_id_393dceb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/products/Advantages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/products/Advantages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/public/products/Advantages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Advantages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Advantages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/products/Advantages.vue?vue&type=template&id=393dceb8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/public/products/Advantages.vue?vue&type=template&id=393dceb8& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_template_id_393dceb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Advantages.vue?vue&type=template&id=393dceb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Advantages.vue?vue&type=template&id=393dceb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_template_id_393dceb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advantages_vue_vue_type_template_id_393dceb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);