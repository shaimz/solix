(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-28"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");
/* harmony import */ var _constants_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/locales */ "./resources/js/constants/locales.js");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id', 'lang'],
  data: function data() {
    return {
      services: [],
      dropdown: false,
      footerItem: 'mobile',
      locales: _constants_locales__WEBPACK_IMPORTED_MODULE_1__["SUPPORTED_LOCALES"],
      language: this.currentLang
    };
  },
  computed: {
    currentLang: function currentLang() {
      return this.$route.params.locale === 'en' ? 1 : this.$route.params.locale === 'ru' ? 3 : 2;
    },
    windowWidth: function windowWidth() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.innerWidth;
    },
    windowCompare: function windowCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.compare;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xsmall;
    },
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.medium;
    },
    large: function large() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.large;
    },
    compare: function compare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.windowCompare;
    },
    largeCompare: function largeCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.largeCompare;
    }
  },
  watch: {
    windowWidth: function windowWidth(newWidth, oldWidth) {
      this.dropdown = newWidth < 1025;
    }
  },
  mounted: function mounted() {
    this.dropdown = this.windowWidth < 1025;
  },
  created: function created() {},
  methods: {
    isActiveLanguage: function isActiveLanguage(id) {
      var language = this.currentLang;

      if (language === id) {
        if (id === 1) {
          return true;
        } else if (id === 2) {
          return true;
        } else {
          return true;
        }
      }

      return this.language === id;
    },
    setLocale: function setLocale(id) {
      this.$root.$i18n.locale = id;
      this.$store.dispatch('setPublicLanguage', this.locales.find(function (item) {
        return item.code === id;
      }));
    },
    setActive: function setActive(id) {
      if (id === 1) {
        this.setLocale('en');
      } else if (id === 2) {
        this.setLocale('ro');
      } else {
        this.setLocale('ru');
      }

      this.language = id;
    },
    setServices: function setServices() {
      var _this = this;

      var items = [];
      this.$store.dispatch('services', {
        lang_id: this.language,
        limit: 3,
        offset: 0
      }).then(function () {
        if (items = _this.$store.getters.getServices) {
          items.map(function (item) {
            if (item.items.length > 3) {
              items = item.items;
              return true;
            } else {
              item.items.map(function (service) {
                return items.push(service);
              });
              if (items.length > 3) return true;
            }
          });
          _this.services = items;
        }
      });
    },
    onResize: function onResize() {},
    openList: function openList(event) {
      var item = $(event.target).attr('data-id');

      if (this.footerItem === item) {
        this.footerItem = '';
        return false;
      }

      this.footerItem = item;
    },
    isActive: function isActive(item) {
      return this.footerItem !== item;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/footer.vue?vue&type=template&id=91bf2178&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/footer.vue?vue&type=template&id=91bf2178&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "section",
      {
        staticClass: "footer pl-0 pt-5 pb-3 position-relative w-100",
        attrs: { id: "footer" }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "container container-fluid-sm col-xl-7 col-lg-11 col-11 pt-5 px-0"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "row d-xs-block d-xlarge-flex justify-content-between"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-xl-3 col-12 text-xs-center text-xlarge-left footer-one footer-col"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "footer-logo" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "Home",
                                params: { locale: _vm.$route.params.locale }
                              }
                            }
                          },
                          [
                            _c("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value:
                                    "/assets/components/header/solix_logo_small2.svg",
                                  expression:
                                    "'/assets/components/header/solix_logo_small2.svg'"
                                }
                              ],
                              attrs: { alt: "Solix Solar Panels" }
                            })
                          ]
                        )
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
                      "col-xl-2 col-12 text-center text-xlarge-left footer-two footer-col"
                  },
                  [
                    _c(
                      "ul",
                      { class: ["list-unstyled p-0", "d-block"] },
                      _vm._l(_vm.$t("footer.pages"), function(page) {
                        return _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: page.link,
                                    params: { locale: _vm.$route.params.locale }
                                  }
                                }
                              },
                              [_vm._v(_vm._s(page.text))]
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-xl-2 col-12 text-center text-xlarge-left footer-four footer-col"
                  },
                  [
                    _c(
                      "ul",
                      { class: ["list-unstyled p-0", "d-block"] },
                      _vm._l(_vm.$t("footer.solix"), function(page) {
                        return _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: page.link,
                                    params: { locale: _vm.$route.params.locale }
                                  }
                                }
                              },
                              [_vm._v(_vm._s(page.text))]
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "col-xl-2 col-12 text-center text-xlarge-left footer-three footer-col"
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-xl-3 col-12 text-center text-xlarge-left footer-five footer-col",
                    class: _vm.compare ? "border-top" : ""
                  },
                  [
                    !_vm.largeCompare
                      ? _c("h5", [
                          _vm._v(_vm._s(_vm.$t("footer.contact.title")))
                        ])
                      : _c(
                          "h5",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "contacts",
                                    params: {
                                      locale:
                                        _vm.$router.currentRoute.params.locale
                                    }
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("footer.contact.title")))]
                            )
                          ],
                          1
                        ),
                    _vm._v(" "),
                    _c("ul", { staticClass: "list-unstyled p-0" }, [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: { href: "" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [
                            _c("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value: "/assets/icons/phone.svg",
                                  expression: "'/assets/icons/phone.svg'"
                                }
                              ]
                            }),
                            _vm._v("+373 79 876 545")
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "mailto:info@solix.md" } }, [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: "/assets/icons/mailbox.png",
                                expression: "'/assets/icons/mailbox.png'"
                              }
                            ]
                          }),
                          _vm._v("info@solix.md")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: { href: "" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [
                            _c("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value: "/assets/icons/location.png",
                                  expression: "'/assets/icons/location.png'"
                                }
                              ]
                            }),
                            _vm._v(_vm._s(_vm.$t("footer.contact.address")))
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "social-icons" }, [
                      _c(
                        "a",
                        {
                          staticClass: "social-icon",
                          attrs: {
                            target: "_blank",
                            href: "https://www.facebook.com/Solix.md"
                          }
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: "/assets/icons/facebook.png",
                                expression: "'/assets/icons/facebook.png'"
                              }
                            ]
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "social-icon",
                          attrs: {
                            target: "_blank",
                            href: "https://www.instagram.com/solix.md/"
                          }
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: "/assets/icons/instagram.png",
                                expression: "'/assets/icons/instagram.png'"
                              }
                            ]
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "social-icon",
                          attrs: {
                            target: "_blank",
                            href:
                              "https://www.youtube.com/channel/UC3RN2vRU9Uob1bMprQchTgg"
                          }
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: "/assets/icons/youtube.png",
                                expression: "'/assets/icons/youtube.png'"
                              }
                            ]
                          })
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "container col-11 col-xl-7 col-lg-11 border-top footer-info"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "row d-xs-block d-xlarge-flex justify-content-center "
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 col-xl-4 mx-auto mt-2 mt-lg-0 text-center text-xlarge-center"
                  },
                  [
                    _c(
                      "a",
                      { attrs: { target: "_blank", href: "http://gbmf.tech" } },
                      [
                        _c("span", [_vm._v("Created by")]),
                        _vm._v(" "),
                        _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: "/assets/components/footer/gbmf.svg",
                              expression: "'/assets/components/footer/gbmf.svg'"
                            }
                          ],
                          staticClass: "create-by-logo"
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 col-xl-4 mx-auto mt-2 mt-lg-0 text-center text-xlarge-right"
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "footer-link",
                        attrs: {
                          to: {
                            name: "privacy",
                            params: { locale: _vm.$route.params.locale }
                          },
                          target: "_blank"
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("footer.policy")))]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm.largeCompare
          ? _c(
              "div",
              { staticClass: "d-flex header-langs" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item border-0",
                    class: { active: _vm.isActiveLanguage(2) },
                    attrs: { to: { name: this.$route.name } },
                    nativeOn: {
                      click: function($event) {
                        return _vm.setActive(2)
                      }
                    }
                  },
                  [_vm._v("RO\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item border-0",
                    class: { active: _vm.isActiveLanguage(3) },
                    attrs: {
                      to: { name: this.$route.name, params: { locale: "ru" } }
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.setActive(3)
                      }
                    }
                  },
                  [_vm._v("RUS\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item border-0",
                    class: { active: _vm.isActiveLanguage(1) },
                    attrs: {
                      to: { name: this.$route.name, params: { locale: "en" } }
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.setActive(1)
                      }
                    }
                  },
                  [_vm._v("ENG\n            ")]
                )
              ],
              1
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-12 col-xl-4 mx-auto mt-2 mt-lg-0 text-xlarge-left text-center"
      },
      [_c("p", [_vm._v("© 2021 Solix | All Rights Reserved")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/footer.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/public/includes/footer.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_91bf2178_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=91bf2178&scoped=true& */ "./resources/js/components/public/includes/footer.vue?vue&type=template&id=91bf2178&scoped=true&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_91bf2178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_91bf2178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91bf2178",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/public/includes/footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/footer.vue?vue&type=template&id=91bf2178&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/footer.vue?vue&type=template&id=91bf2178&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_91bf2178_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=91bf2178&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/footer.vue?vue&type=template&id=91bf2178&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_91bf2178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_91bf2178_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);