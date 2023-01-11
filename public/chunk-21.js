(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-21"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/email/Email.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/requests/email/Email.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
var Navbar = function Navbar() {
  return __webpack_require__.e(/*! import() */ "chunk-7").then(__webpack_require__.bind(null, /*! ../../includes/Navbar */ "./resources/js/components/backend/includes/Navbar.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'email',
  props: {
    title: String,
    id: Number,
    type: String
  },
  components: {
    Navbar: Navbar
  },
  data: function data() {
    return {
      valid: false,
      header: '',
      email: '',
      typeItem: '',
      headerRules: [function (v) {
        return v.length >= 3;
      }],
      text: '',
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    };
  },
  methods: {
    discard: function discard() {
      this.header = '';
      this.text = '';
    },
    send: function send() {
      var _this = this;

      var email = '';

      if (this.typeItem === 'call') {
        email = this.call.email;
      } else if (this.typeItem === 'product') {
        email = this.product.email;
      } else {
        email = this.service.email;
      }

      axios.post('/admin/requests/mail', {
        header: this.header,
        text: this.text,
        email: email
      }).then(function (response) {
        $("<p class=\"success-sending text-success mt-2\">".concat(response.data, "</p>")).insertBefore('.row.justify-content-end');
        setTimeout(function () {
          $('.success-sending').remove();
        }, 2500);
        _this.header = '';
        _this.text = '';
      });
    }
  },
  created: function created() {
    Vue.set(this, 'typeItem', this.$router.currentRoute.path.split('/')[this.$router.currentRoute.path.split('/').length - 2]);

    switch (this.typeItem) {
      case 'product':
        this.$store.dispatch('productRequest', this.$router.currentRoute.params.id);
        break;

      case 'service':
        this.$store.dispatch('serviceRequest', this.$router.currentRoute.params.id);
        break;

      case 'call':
        this.$store.dispatch('callRequest', this.$router.currentRoute.params.id);
        break;
    }
  },
  computed: {
    service: function service() {
      return this.$store.getters.getServiceRequestById;
    },
    product: function product() {
      return this.$store.getters.getProductRequestById;
    },
    call: function call() {
      return this.$store.getters.getCallRequestById;
    },
    tabs: function tabs() {
      var obj = {};
      obj[this.title] = this.title;
      obj['Send Email'] = 'Send Email';
      return obj;
    }
  },
  mounted: function mounted() {},
  watch: {
    typeItem: function typeItem(n, o) {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/email/Email.vue?vue&type=template&id=e57e3938&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/requests/email/Email.vue?vue&type=template&id=e57e3938& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("Navbar", {
        attrs: { heading: "Email", tabs: [_vm.tabs], "email-page": true }
      }),
      _vm._v(" "),
      _c(
        "v-form",
        {
          staticClass: "notification-form",
          attrs: { method: "POST" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.csrf }
          }),
          _vm._v(" "),
          _c("h4", { staticClass: "form-title" }, [_vm._v("Send email")]),
          _vm._v(" "),
          _c(
            "v-container",
            { staticClass: "email-notification" },
            [
              _c("h5", { staticClass: "email-title" }, [_vm._v("Article")]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-text-field", {
                        staticClass: "border-0",
                        attrs: {
                          rules: _vm.headerRules,
                          counter: 10,
                          placeholder: "Heading",
                          required: "",
                          name: "header"
                        },
                        model: {
                          value: _vm.header,
                          callback: function($$v) {
                            _vm.header = $$v
                          },
                          expression: "header"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-textarea", {
                        attrs: {
                          placeholder: "Body",
                          required: "",
                          name: "text"
                        },
                        model: {
                          value: _vm.text,
                          callback: function($$v) {
                            _vm.text = $$v
                          },
                          expression: "text"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "d-flex justify-content-end" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "discard-form",
                      attrs: { width: "auto" },
                      on: { click: _vm.discard }
                    },
                    [_vm._v("\n                    Discard\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "submit-form",
                      attrs: { width: "auto", right: "" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.send($event)
                        }
                      }
                    },
                    [_vm._v("\n                    SEND\n                ")]
                  )
                ],
                1
              )
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

/***/ "./resources/js/components/backend/requests/email/Email.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/backend/requests/email/Email.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Email_vue_vue_type_template_id_e57e3938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=e57e3938& */ "./resources/js/components/backend/requests/email/Email.vue?vue&type=template&id=e57e3938&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/requests/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_e57e3938___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Email_vue_vue_type_template_id_e57e3938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/requests/email/Email.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/requests/email/Email.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/backend/requests/email/Email.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/requests/email/Email.vue?vue&type=template&id=e57e3938&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/backend/requests/email/Email.vue?vue&type=template&id=e57e3938& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_e57e3938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=template&id=e57e3938& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/email/Email.vue?vue&type=template&id=e57e3938&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_e57e3938___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_e57e3938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);