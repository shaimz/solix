(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-25"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/economy.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/economy.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/eventbus */ "./resources/js/event/eventbus.js");
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
  name: 'economy',
  props: ['page'],
  data: function data() {
    return {
      scrolled: true
    };
  },
  mounted: function mounted() {
    this.initiateCount();
    $('[data-toggle="tooltip"]').tooltip();
  },
  methods: {
    toggleModal: function toggleModal(val) {
      _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('openModal', {
        value: val,
        type: 'call'
      });
    },
    initiateCount: function initiateCount() {
      var _this = this;

      $(window).scroll(function () {
        var scrTop = $(window).scrollTop();

        if (_this.scrolled && $('.economy-item .number').offset() !== undefined) {
          if (scrTop > $('.economy-item .number').offset().top - $(window).height()) {
            _this.animate();

            _this.scrolled = false;
          }
        }
      });
    },
    animate: function animate() {
      var numbers = $('.economy-item');
      numbers.each(function (i, e) {
        var number = 0;
        var num = $(e).find('.number').text().replace(/(,)/g, '.');

        var _char = num.replace(/\d+/g, '');

        var reset = setInterval(function () {
          number = parseFloat(number) + (num.includes('.') ? 0.1 : 1);

          if (number.toFixed(2) <= parseFloat(num)) {
            $(e).find('.number').text("".concat(parseFloat(number.toFixed(4)).toString().replace('.', ',')).concat(_char === '.' ? '' : _char));
          } else {
            clearInterval(reset);
          }
        }, 60);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/economy.vue?vue&type=template&id=7c72a136&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/economy.vue?vue&type=template&id=7c72a136& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-white padding-125", attrs: { id: "economy" } },
    [
      _c("div", { staticClass: "row justify-content-center px-0" }, [
        _c(
          "div",
          {
            staticClass:
              "row-economy col-lg-11 col-xl-7 col-11 justify-content-center pl-0"
          },
          [
            _c("div", { staticClass: "economy-body" }, [
              _c("h2", {
                domProps: {
                  innerHTML: _vm._s(_vm.$t(_vm.page + ".economy.title"))
                }
              }),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.$t(_vm.page + ".economy.text")))]),
              _vm._v(" "),
              _vm.page !== "b2g"
                ? _c(
                    "button",
                    {
                      staticClass: "btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.toggleModal(true)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("order")))]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "economy-data d-flex" },
              [
                _c(
                  "p",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.page !== "b2g",
                        expression: "page !== 'b2g'"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(_vm.$t("home.economy.formula")))]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.page !== "b2g",
                        expression: "page !== 'b2g'"
                      }
                    ]
                  },
                  [_vm._v("1,3 m kwh×1.812 mdl/kwh = 2 355 600 mdl")]
                ),
                _vm._v(" "),
                _vm._l(_vm.$t(_vm.page + ".economy.data"), function(item) {
                  return _c(
                    "div",
                    { staticClass: "economy-item col-lg-3 col-md-12" },
                    [
                      _c("h1", { staticClass: "number" }, [
                        _vm._v(_vm._s(item.value))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "economy-bottom" }, [
                        _c("span", [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: "/assets/icons/light-yellow.png",
                                expression: "'/assets/icons/light-yellow.png'"
                              }
                            ]
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "d-inline-block ml-2 mt-2" }, [
                          _vm._v(_vm._s(item.name)),
                          item.tooltip
                            ? _c(
                                "span",
                                {
                                  staticClass: "tooltip",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    title: item.tooltip.text
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: { src: "/assets/icons/tooltip.png" }
                                  })
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/economy.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/includes/economy.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _economy_vue_vue_type_template_id_7c72a136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./economy.vue?vue&type=template&id=7c72a136& */ "./resources/js/components/public/includes/economy.vue?vue&type=template&id=7c72a136&");
/* harmony import */ var _economy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./economy.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/economy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _economy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _economy_vue_vue_type_template_id_7c72a136___WEBPACK_IMPORTED_MODULE_0__["render"],
  _economy_vue_vue_type_template_id_7c72a136___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/economy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/economy.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/includes/economy.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_economy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./economy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/economy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_economy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/economy.vue?vue&type=template&id=7c72a136&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/public/includes/economy.vue?vue&type=template&id=7c72a136& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_economy_vue_vue_type_template_id_7c72a136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./economy.vue?vue&type=template&id=7c72a136& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/economy.vue?vue&type=template&id=7c72a136&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_economy_vue_vue_type_template_id_7c72a136___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_economy_vue_vue_type_template_id_7c72a136___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);