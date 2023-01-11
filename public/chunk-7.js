(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/includes/Navbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/includes/Navbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Navbar',
  props: {
    heading: String,
    pageType: String,
    tabs: Array,
    emailPage: Boolean
  },
  data: function data() {
    return {
      title: '',
      type: '',
      nav: [],
      email: false
    };
  },
  mounted: function mounted() {
    this.title = this.heading;
    this.type = this.pageType;
    this.nav = this.toCarmel(this.tabs);
    this.email = this.emailPage;
  },
  methods: {
    capitalize: function capitalize(text) {
      return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
    },
    toCarmel: function toCarmel(tabs) {
      if (tabs) {
        var arr = [];

        for (var i = 0; i < tabs.length; i++) {
          var keys = Object.keys(tabs[i]),
              values = Object.values(tabs[i]);

          for (var j = 0; j < keys.length; j++) {
            arr.push({
              id: keys[j].replace(' ', ''),
              name: values[j],
              value: keys[j].toLowerCase().replace(' ', '-')
            });
          }
        }

        return arr;
      }
    },
    logout: function logout() {
      var _this = this;

      axios.post('/logout').then(function (response) {
        _this.$router.go(_this.$router.currentRoute);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/includes/Navbar.vue?vue&type=template&id=6e8f7b7e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/includes/Navbar.vue?vue&type=template&id=6e8f7b7e& ***!
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
  return _c("header", { staticClass: "navbar navbar-light" }, [
    _c("div", { staticClass: "container-fluid pt-2 pl-4" }, [
      _c("div", { staticClass: "d-flex flex-column" }, [
        _c("a", { staticClass: "navbar-brand" }, [
          _c("h2", [
            _vm._v(
              _vm._s(this.title ? this.capitalize(this.title) : "Dashboard")
            )
          ])
        ]),
        _vm._v(" "),
        _vm.emailPage && _vm.nav
          ? _c(
              "ul",
              {
                staticClass: "nav nav-pills mb-3",
                attrs: { id: "pills-tab", role: "tablist" }
              },
              _vm._l(_vm.nav, function(item, index) {
                return _c(
                  "li",
                  {
                    key: item.value,
                    class: [
                      "nav-item ",
                      index === 0 ? "d-flex align-items-center" : ""
                    ],
                    attrs: { role: "presentation" }
                  },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: index === 0 ? item.id.replace(" ", "") : ""
                          }
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            class: "nav-link active",
                            attrs: {
                              id: "pills-home-tab",
                              "data-bs-target": "#pills-" + item.id,
                              type: "button",
                              role: "tab",
                              "aria-controls": "pills-home",
                              "aria-selected": "true"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(item.name) + "\n                        "
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    index === 0
                      ? _c(
                          "svg",
                          {
                            staticClass: "svg-arrow",
                            attrs: {
                              width: "6",
                              height: "10",
                              viewBox: "0 0 6 10",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M0 8.825L3.7085 5L0 1.175L1.1417 0L6 5L1.1417 10L0 8.825Z",
                                fill: "white"
                              }
                            })
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              }),
              0
            )
          : !_vm.emailPage && _vm.nav
          ? _c(
              "ul",
              {
                staticClass: "nav nav-pills mb-3",
                attrs: { id: "pills-tab", role: "tablist" }
              },
              _vm._l(_vm.nav, function(item, index) {
                return _c(
                  "li",
                  {
                    key: item.id,
                    staticClass: "nav-item",
                    attrs: { role: "presentation" }
                  },
                  [
                    _c(
                      "button",
                      {
                        class: ["nav-link ", index === 0 ? "active" : ""],
                        attrs: {
                          id: "pills-home-tab",
                          "data-bs-toggle": "pill",
                          "data-bs-target": "#pills-" + item.id,
                          type: "button",
                          role: "tab",
                          "aria-controls": "pills-home",
                          "aria-selected": "true"
                        }
                      },
                      [_vm._v(_vm._s(item.name) + "\n                    ")]
                    )
                  ]
                )
              }),
              0
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "d-flex input-group w-auto align-self-center" },
        [
          _c(
            "a",
            {
              staticClass:
                "nav-item text-white text-decoration-none text-uppercase logout",
              attrs: { href: "" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.logout($event)
                }
              }
            },
            [_vm._v("Logout")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/includes/Navbar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/backend/includes/Navbar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6e8f7b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6e8f7b7e& */ "./resources/js/components/backend/includes/Navbar.vue?vue&type=template&id=6e8f7b7e&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/includes/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6e8f7b7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6e8f7b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/includes/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/includes/Navbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/backend/includes/Navbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/includes/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/includes/Navbar.vue?vue&type=template&id=6e8f7b7e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/backend/includes/Navbar.vue?vue&type=template&id=6e8f7b7e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6e8f7b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6e8f7b7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/includes/Navbar.vue?vue&type=template&id=6e8f7b7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6e8f7b7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6e8f7b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);