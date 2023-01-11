(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-32"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/newsModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/newsModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
  props: {
    open: Boolean
  },
  data: function data() {
    return {
      dialog: false,
      form: {
        email: '',
        errors: ''
      },
      message: '',
      emailError: ''
    };
  },
  mounted: function mounted() {
    this.dialog = this.$props.open;
  },
  watch: {
    dialog: function dialog(val) {
      val ? this.$parent.open = true : this.$parent.open = false;
    }
  },
  methods: {
    validEmail: function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    closeModal: function closeModal() {
      this.dialog = false;
      this.emailError = '';
      this.$emit('hideNews');
    },
    send: function send() {
      var _this = this;

      if (this.validEmail(this.form.email)) {
        var form = this.form;
        axios.post('/subscribe', form).then(function (res) {
          if (!res.data.error) {
            _this.message = _this.$t('requestText');
            _this.form = {
              email: ''
            };
          }

          _this.form.errors = res.data.error;
        });
      } else {
        this.emailError = !this.validEmail(this.form.email) ? this.$t('emailError') : '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/newsModal.vue?vue&type=template&id=678ebf01&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/newsModal.vue?vue&type=template&id=678ebf01& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600px", id: "requests" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c("i", { staticClass: "close-form", on: { click: _vm.closeModal } }),
          _vm._v(" "),
          _c(
            "v-card",
            {
              directives: [
                {
                  name: "click-out",
                  rawName: "v-click-out",
                  value: _vm.closeModal,
                  expression: "closeModal"
                }
              ],
              staticClass: "news"
            },
            [
              _c("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: "/assets/components/modal/newsform.jpg",
                    expression: "'/assets/components/modal/newsform.jpg'"
                  }
                ],
                staticClass: "card-img-top"
              }),
              _vm._v(" "),
              !_vm.message
                ? _c(
                    "v-card-text",
                    [
                      _c("v-card-title", [
                        _c("h2", { staticClass: "card-title" }, [
                          _vm._v(_vm._s(_vm.$t("newsModal.card.title")))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            { staticClass: "form-actions" },
                            [
                              _c("v-text-field", {
                                class: [_vm.emailError ? "error-field" : ""],
                                attrs: {
                                  placeholder: _vm.$t(
                                    "modalForm.placeholders.email"
                                  )
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
                                }
                              }),
                              _vm._v(" "),
                              _vm.emailError
                                ? _c("span", { staticClass: "text-danger" }, [
                                    _vm._v(_vm._s(_vm.emailError))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "card-link btn btn-warning",
                                  attrs: { href: "#", id: "order" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.send($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.$t("subscribe")) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-actions", [
                        _c("p", {
                          domProps: {
                            innerHTML: _vm._s(_vm.$t("newsModal.card.terms"))
                          }
                        })
                      ])
                    ],
                    1
                  )
                : _c("div", { staticClass: "message-form" }, [
                    _c("h3", { staticClass: "news-thanks" }, [
                      _vm._v(_vm._s(_vm.$t("newsThanks")))
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn-primary",
                        on: { click: _vm.closeModal }
                      },
                      [_vm._v(_vm._s(_vm.$t("next")))]
                    )
                  ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/newsModal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/public/includes/newsModal.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newsModal_vue_vue_type_template_id_678ebf01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsModal.vue?vue&type=template&id=678ebf01& */ "./resources/js/components/public/includes/newsModal.vue?vue&type=template&id=678ebf01&");
/* harmony import */ var _newsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsModal.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/newsModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newsModal_vue_vue_type_template_id_678ebf01___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newsModal_vue_vue_type_template_id_678ebf01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/newsModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/newsModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/public/includes/newsModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/newsModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/newsModal.vue?vue&type=template&id=678ebf01&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/public/includes/newsModal.vue?vue&type=template&id=678ebf01& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsModal_vue_vue_type_template_id_678ebf01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsModal.vue?vue&type=template&id=678ebf01& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/newsModal.vue?vue&type=template&id=678ebf01&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsModal_vue_vue_type_template_id_678ebf01___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsModal_vue_vue_type_template_id_678ebf01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);