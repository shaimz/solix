(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/moreItems.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'moreItems',
  props: ['type', 'show'],
  data: function data() {
    return {
      items: [],
      render: false,
      language: this.$route.params.locale === 'en' ? 1 : this.$route.params.locale === 'ru' ? 3 : 2
    };
  },
  mounted: function mounted() {
    var _this = this;

    switch (this.type) {
      case 'projects':
        this.$store.dispatch('projectsByLanguage', {
          lang: this.language,
          limit: this.show,
          id: this.$route.params.id
        }).then(function () {
          _this.items = _this.$store.getters.getProjectsByLanguage;
          _this.render = true;
        });
        break;

      case 'products':
        this.$store.dispatch('productsByLanguage', {
          lang: this.language,
          limit: this.show,
          id: this.$route.params.id
        }).then(function () {
          _this.items = _this.$store.getters.getProductsByLanguage;
          _this.render = true;
        });
        break;

      case 'news':
        this.$store.dispatch('newsByLanguage', {
          lang: this.language,
          length: this.show,
          id: this.$route.params.id
        }).then(function () {
          _this.items = _this.$store.getters.getNewsByLanguage;
          _this.render = true;
        });
        break;
    }
  },
  computed: {
    largeCompare: function largeCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.largeCompare;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    }
  },
  methods: {
    getDate: function getDate(date) {
      var data = new Date(Date.parse(date));
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var locale = this.$route.params.locale === 'en' ? 'en-EN' : this.$route.params.locale === 'ru' ? 'ru-RU' : 'ro-RO';
      return data.toLocaleDateString(locale, options);
    }
  },
  watch: {
    lang: function lang(newVal, oldVal) {
      if (newVal !== oldVal) this.$emit('languageChanged', newVal);
    },
    $route: function $route(to) {
      var _this2 = this;

      switch (this.type) {
        case 'projects':
          this.$store.dispatch('projectsByLanguage', {
            lang: this.language,
            limit: this.show,
            id: to.params.id
          }).then(function () {
            _this2.items = _this2.$store.getters.getProjectsByLanguage;
            _this2.render = true;
          });
          break;

        case 'products':
          this.$store.dispatch('productsByLanguage', {
            lang: this.language,
            limit: this.show,
            id: to.params.id
          }).then(function () {
            _this2.items = _this2.$store.getters.getProductsByLanguage;
            _this2.render = true;
          });
          break;

        case 'news':
          this.$store.dispatch('newsByLanguage', {
            lang: this.language,
            length: this.show,
            id: to.params.id
          }).then(function () {
            _this2.items = _this2.$store.getters.getNewsByLanguage;
            _this2.render = true;
          });
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-body[data-v-fcd0a75c] {\n    padding: 0 !important;\n}\n.card-body-title p[data-v-fcd0a75c] {\n    padding-bottom: 10px !important;\n}\n.border-left-title[data-v-fcd0a75c] {\n    padding: 0 0 0 37px;\n}\n.news .more .arrow[data-v-fcd0a75c] {\n    right: 20px !important;\n}\n.card-body-title p[data-v-fcd0a75c] {\n    padding: 30px 0 0px 37px;\n    color: #555555;\n}\n#moreItems .before-border[data-v-fcd0a75c] {\n    padding: 20px 30px;\n}\n#moreItems .project-description[data-v-fcd0a75c] {\n    padding: 0 30px;\n}\n#moreItems .card-project-features[data-v-fcd0a75c] {\n    padding: 0 30px\n}\n#more-products .product-brand[data-v-fcd0a75c] {\n    padding: 0;\n}\n#moreItems .more-container .card[data-v-fcd0a75c]:nth-child(1) {\n    margin-left: 0 !important;\n}\n#more-products .card-body[data-v-fcd0a75c] {\n    padding: 10px 30px 10px 30px !important;\n}\n#more-products .card-body-title p[data-v-fcd0a75c] {\n    padding: 0 !important;\n}\n#more-products .btn-product[data-v-fcd0a75c] {\n    margin: 20px 37px 20px 15px !important;\n    max-width: 119px !important;\n}\n.container-products[data-v-fcd0a75c] {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 360px));\n    grid-column-gap: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_style_index_0_id_fcd0a75c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_style_index_0_id_fcd0a75c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_style_index_0_id_fcd0a75c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_style_index_0_id_fcd0a75c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_style_index_0_id_fcd0a75c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.render
    ? _c(
        "div",
        { staticClass: "padding-125 my-5", attrs: { id: "moreItems" } },
        [
          _c("div", { staticClass: "col-xl-7 col-12 m-auto" }, [
            _vm.type === "projects"
              ? _c("h2", { staticClass: "mb-4 text-dark" }, [
                  _vm._v(_vm._s(_vm.$t("moreTitle")))
                ])
              : _vm.type === "products"
              ? _c("h2", { staticClass: "mb-4 text-dark" }, [
                  _vm._v(_vm._s(_vm.$t("products.moreTitle")))
                ])
              : _vm.type === "news"
              ? _c("h2", { staticClass: "mb-4 text-dark" }, [
                  _vm._v(_vm._s(_vm.$t("news.moreTitle")))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "justify-content-start flex-wrap row mb-6 more-container",
                class:
                  _vm.type === "products"
                    ? "d-grid container-" + _vm.type
                    : "d-flex"
              },
              [
                _vm._l(_vm.items, function(card, i) {
                  return _vm.type === "projects" && card.projects
                    ? _c(
                        "router-link",
                        {
                          key: i,
                          class: [
                            "card p-0",
                            i ? "col-xs-12 col-lg-6 ml-8" : "col-xs-12 col-lg-5"
                          ],
                          attrs: {
                            to: {
                              name: "project",
                              params: {
                                locale: _vm.$route.params.locale,
                                id: card.id
                              }
                            },
                            id: "more-projects"
                          }
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: "/" + card.image,
                                expression: "'/'+card.image"
                              }
                            ],
                            staticClass: "card-img-top",
                            attrs: { alt: "" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("h4", { staticClass: "before-border" }, [
                              _vm._v(_vm._s(card.projects.name))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "project-description" }, [
                              _vm._v(_vm._s(card.projects.description))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "card-project-features d-md-flex"
                              },
                              [
                                _c("div", { staticClass: "mr-5" }, [
                                  _c("i", { staticClass: "margin-icon" }, [
                                    _c("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value:
                                            "/assets/icons/location-grey.png",
                                          expression:
                                            "'/assets/icons/location-grey.png'"
                                        }
                                      ]
                                    })
                                  ]),
                                  _vm._v(
                                    _vm._s(card.projects.location) +
                                      "\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-number project-power" },
                                  [
                                    _c("i", { staticClass: "margin-icon" }, [
                                      _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value:
                                              "/assets/icons/light-grey.png",
                                            expression:
                                              "'/assets/icons/light-grey.png'"
                                          }
                                        ]
                                      })
                                    ]),
                                    _vm._v(
                                      _vm._s(card.power) +
                                        " " +
                                        _vm._s(_vm.$t("power")) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-secondary more align-self-start d-flex justify-content-evenly",
                              attrs: {
                                to: { name: "project", params: { id: card.id } }
                              }
                            },
                            [
                              _c("span", [_vm._v(_vm._s(_vm.$t("more")))]),
                              _c("i", { staticClass: "arrow right ml-2" })
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                }),
                _vm._v(" "),
                _vm._l(_vm.items, function(card, i) {
                  return _vm.type === "products" &&
                    card.translates &&
                    card.category_id &&
                    i < 3
                    ? _c(
                        "router-link",
                        {
                          key: i,
                          class: ["card p-0"],
                          attrs: {
                            to: {
                              name: "product",
                              params: {
                                locale: _vm.$route.params.locale,
                                id: card.id,
                                category: card.category.url
                              }
                            },
                            id: "more-products"
                          }
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: card.image
                                  ? card.image
                                  : "/private/images/products/no-image.png",
                                expression:
                                  "(card.image ? card.image : '/private/images/products/no-image.png')"
                              }
                            ],
                            staticClass: "card-img-top",
                            attrs: { alt: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "card-body border-bottom" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex justify-content-between align-items-center"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "card-body-title" },
                                    [
                                      _c("p", { staticClass: "text-dark" }, [
                                        _vm._v(_vm._s(card.translates.name))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "product-brand d-flex align-items-center"
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "mr-2",
                                            attrs: {
                                              alt: "star",
                                              src: "/assets/icons/star-grey.png"
                                            }
                                          }),
                                          _vm._v(
                                            _vm._s(card.brand) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  !_vm.largeCompare
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-product-brand-logo d-flex"
                                        },
                                        [
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "lazy",
                                                rawName: "v-lazy",
                                                value: card.brand_logo,
                                                expression: "card.brand_logo"
                                              }
                                            ],
                                            attrs: { alt: card.brand }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "card-price",
                                  class: [
                                    _vm.largeCompare ? "card-price-mobile" : ""
                                  ]
                                },
                                [
                                  _c("h4", { staticClass: "roboto" }, [
                                    _vm._v(_vm._s(card.price) + " EUR")
                                  ]),
                                  _vm._v(" "),
                                  _vm.largeCompare
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-product-brand-logo d-flex"
                                        },
                                        [
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "lazy",
                                                rawName: "v-lazy",
                                                value: card.brand_logo,
                                                expression: "card.brand_logo"
                                              }
                                            ],
                                            attrs: { alt: card.brand }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-product more align-self-start d-flex",
                              attrs: {
                                to: {
                                  name: "product",
                                  params: {
                                    id: card.id,
                                    category: card.category.url
                                  }
                                }
                              }
                            },
                            [
                              _c("span", [_vm._v(_vm._s(_vm.$t("goto")))]),
                              _c("i", { staticClass: "arrow right ml-2" })
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                }),
                _vm._v(" "),
                _vm._l(_vm.items, function(card, i) {
                  return _vm.type === "news" && card.translates && i < 2
                    ? _c(
                        "router-link",
                        {
                          key: i,
                          class: [
                            "card p-0 mb-4 news",
                            i ? "col-xs-12 col-lg-6 ml-8" : "col-xs-12 col-lg-5"
                          ],
                          attrs: {
                            to: {
                              name: "singleNews",
                              params: {
                                locale: _vm.$route.params.locale,
                                id: card.id
                              }
                            },
                            id: "more-news"
                          }
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: "/" + (card.image ? card.image : ""),
                                expression: "'/'+(card.image ? card.image : '')"
                              }
                            ],
                            staticClass: "card-img-top",
                            attrs: { alt: "" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "card-body-title" }, [
                              _c("p", [
                                _c("span", { staticClass: "mr-2" }, [
                                  _c("img", {
                                    directives: [
                                      {
                                        name: "lazy",
                                        rawName: "v-lazy",
                                        value: "/assets/icons/calendar.png",
                                        expression:
                                          "'/assets/icons/calendar.png'"
                                      }
                                    ]
                                  })
                                ]),
                                _vm._v(
                                  _vm._s(_vm.getDate(card.created_at)) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "border-left-title" }, [
                                _vm._v(_vm._s(card.translates.name))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-secondary more align-self-start d-flex",
                              attrs: {
                                to: {
                                  name: "singleNews",
                                  params: {
                                    id: card.id,
                                    locale: _vm.$route.params.locale
                                  }
                                }
                              }
                            },
                            [
                              _c("span", [_vm._v(_vm._s(_vm.$t("more")))]),
                              _c("i", { staticClass: "arrow right ml-2" })
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                })
              ],
              2
            )
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/moreItems.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/public/includes/moreItems.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moreItems_vue_vue_type_template_id_fcd0a75c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true& */ "./resources/js/components/public/includes/moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true&");
/* harmony import */ var _moreItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreItems.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/moreItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _moreItems_vue_vue_type_style_index_0_id_fcd0a75c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css& */ "./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _moreItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _moreItems_vue_vue_type_template_id_fcd0a75c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _moreItems_vue_vue_type_template_id_fcd0a75c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fcd0a75c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/moreItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/moreItems.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/public/includes/moreItems.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./moreItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_style_index_0_id_fcd0a75c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=style&index=0&id=fcd0a75c&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_template_id_fcd0a75c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/moreItems.vue?vue&type=template&id=fcd0a75c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_template_id_fcd0a75c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moreItems_vue_vue_type_template_id_fcd0a75c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);