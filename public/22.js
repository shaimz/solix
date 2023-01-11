(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShareByEmail",
  props: ['item', 'path'],
  data: function data() {
    return {
      show: false,
      email: '',
      error: '',
      images: {
        email_default: '/assets/components/projects/project/message.jpg',
        email: '/assets/components/projects/project/message.jpg',
        emailOver: '/assets/icons/email.svg'
      }
    };
  },
  mounted: function mounted() {
    $('#emailDialog').appendTo('body');
  },
  methods: {
    hide: function hide() {
      this.show = false;
    },
    submit: function submit() {
      var _this = this;

      var data = this.item;
      var regex = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');

      if (regex.test(this.email)) {
        axios.post('/admin/requests/mail', {
          email: this.email,
          header: data.name,
          text: this.path
        }).then(function (r) {
          if (r) {
            _this.email = '';
            _this.error = '';
            _this.show = false;
          }
        });
      } else {
        this.error = 'Email incorrect';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#emailDialog[data-v-7e027346] {\n  position: fixed;\n  z-index: 101;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 600px;\n  width: auto;\n  height: 150px;\n  background-color: white;\n}\n#emailDialog.show[data-v-7e027346] {\n  display: block;\n}\n#emailDialog.hide[data-v-7e027346] {\n  display: none;\n}\n#emailDialog .overlay[data-v-7e027346] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(40, 40, 40, 0.68);\n}\n#emailDialog .card[data-v-7e027346] {\n  position: fixed;\n  z-index: 101;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 600px;\n  width: max-content;\n  height: fit-content;\n  background-color: white;\n  padding: 20px 100px;\n}\n#emailDialog .card .col[data-v-7e027346] {\n  max-width: 250px !important;\n}\n#emailDialog .card .v-input[data-v-7e027346] {\n  max-width: 250px !important;\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  margin-right: 20px;\n}\n#emailDialog p[data-v-7e027346] {\n  z-index: 102;\n  color: #ff7676;\n  position: absolute;\n  bottom: 20px;\n}\n@media screen and (max-width: 600px) {\n#emailDialog .card[data-v-7e027346] {\n    display: block !important;\n    padding: 20px 40px;\n}\n#emailDialog .v-input[data-v-7e027346] {\n    margin: auto !important;\n}\n#emailDialog button[data-v-7e027346] {\n    margin: auto !important;\n    display: flex !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("span", [
    _c(
      "a",
      {
        attrs: { href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.show = true
          }
        }
      },
      [
        _c("img", {
          attrs: { src: _vm.images.email },
          on: {
            mouseover: function($event) {
              _vm.images.email = _vm.images.emailOver
            },
            mouseleave: function($event) {
              _vm.images.email = _vm.images.email_default
            }
          }
        })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { class: [_vm.show ? "show" : "hide"], attrs: { id: "emailDialog" } },
      [
        _c("transition-group", { attrs: { type: "fade" } }, [
          _c("div", {
            key: "overlay",
            staticClass: "overlay",
            on: { click: _vm.hide }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              key: "card",
              staticClass:
                "card d-flex justify-content-center align-items-center flex-row"
            },
            [
              _c(
                "v-col",
                { staticClass: "position-relative" },
                [
                  _c("v-text-field", {
                    class: [_vm.error ? "error-field" : ""],
                    attrs: {
                      placeholder: _vm.$t("modalForm.placeholders.email")
                    },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  }),
                  _vm._v(" "),
                  _vm.error
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.error))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-primary",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("modalForm.buttons.order")))]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& */ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&");
/* harmony import */ var _ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareEmail.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& */ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e027346",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/ShareEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);