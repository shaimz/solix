(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-42"],{"./resources/js/components/public/products/Product.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/public/products/Product.vue + 6 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VApp/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/width.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "v-app",\n    [\n      _vm.render\n        ? _c(\n            "div",\n            { staticClass: "col-xl-7 col-11 m-auto", attrs: { id: "product" } },\n            [\n              _c("breadcrumbs", { attrs: { color: "dark" } }),\n              _vm._v(" "),\n              _c(\n                "div",\n                { staticClass: "allProducts pl-lg-3 pl-0" },\n                [\n                  _c(\n                    "router-link",\n                    {\n                      staticClass:\n                        "d-flex justify-content-lg-start justify-content-center align-items-center text-dark font-weight-bold",\n                      attrs: {\n                        to: {\n                          name: "productsCategory",\n                          params: {\n                            locale: _vm.$route.params.locale,\n                            category: _vm.item.category.url\n                          }\n                        }\n                      }\n                    },\n                    [\n                      _c("i", { staticClass: "arrow left mr-2" }),\n                      _c("span", [\n                        _vm._v(\n                          _vm._s(\n                            _vm.item.category.data.name\n                              ? _vm.item.category.data.name\n                              : _vm.$t("products.all")\n                          )\n                        )\n                      ])\n                    ]\n                  )\n                ],\n                1\n              ),\n              _vm._v(" "),\n              _vm.medium\n                ? _c("h2", { staticClass: "text-dark" }, [\n                    _vm._v(_vm._s(_vm.item.translates.name))\n                  ])\n                : _vm._e(),\n              _vm._v(" "),\n              _c(\n                "div",\n                {\n                  staticClass:\n                    "d-lg-flex d-xs-block mx-auto py-0 position-unset text-lg-start"\n                },\n                [\n                  _c(\n                    "div",\n                    {\n                      staticClass:\n                        "col-lg-4 col-12 text-lg-start text-xs-center"\n                    },\n                    [\n                      _vm.windowWidth && !_vm.medium\n                        ? _c("h2", { staticClass: "text-dark" }, [\n                            _vm._v(_vm._s(_vm.item.translates.name))\n                          ])\n                        : _vm._e(),\n                      _vm._v(" "),\n                      _vm.windowWidth\n                        ? _c("div", { staticClass: "available" }, [\n                            _c("p", [\n                              _c("img", {\n                                directives: [\n                                  {\n                                    name: "lazy",\n                                    rawName: "v-lazy",\n                                    value: _vm.item.available\n                                      ? "/assets/icons/avail.png"\n                                      : "/assets/icons/not-avail.png",\n                                    expression:\n                                      "item.available ? \'/assets/icons/avail.png\' : \'/assets/icons/not-avail.png\'"\n                                  }\n                                ],\n                                staticClass: "mr-2"\n                              }),\n                              _vm._v(\n                                _vm._s(\n                                  _vm.item.available\n                                    ? _vm.$t("products.available")\n                                    : _vm.$t("products.notAvailable")\n                                )\n                              )\n                            ])\n                          ])\n                        : _vm._e(),\n                      _vm._v(" "),\n                      _c("img", {\n                        directives: [\n                          {\n                            name: "lazy",\n                            rawName: "v-lazy",\n                            value: _vm.item.image\n                              ? _vm.item.image\n                              : "/private/images/products/no-image.png",\n                            expression:\n                              "item.image ? item.image : \'/private/images/products/no-image.png\'"\n                          }\n                        ]\n                      })\n                    ]\n                  ),\n                  _vm._v(" "),\n                  _c(\n                    "div",\n                    { staticClass: "col-lg-8 col-12" },\n                    [\n                      !_vm.windowWidth\n                        ? _c("h2", { staticClass: "text-dark" }, [\n                            _vm._v(_vm._s(_vm.item.translates.name))\n                          ])\n                        : _vm._e(),\n                      _vm._v(" "),\n                      !_vm.windowWidth\n                        ? _c("div", { staticClass: "available" }, [\n                            _c("p", [\n                              _c("img", {\n                                directives: [\n                                  {\n                                    name: "lazy",\n                                    rawName: "v-lazy",\n                                    value: _vm.item.available\n                                      ? "/assets/icons/avail.png"\n                                      : "/assets/icons/not-avail.png",\n                                    expression:\n                                      "item.available ? \'/assets/icons/avail.png\' : \'/assets/icons/not-avail.png\'"\n                                  }\n                                ],\n                                staticClass: "mr-2"\n                              }),\n                              _vm._v(\n                                _vm._s(\n                                  _vm.item.available\n                                    ? _vm.$t("products.available")\n                                    : _vm.$t("products.notAvailable")\n                                )\n                              )\n                            ])\n                          ])\n                        : _vm._e(),\n                      _vm._v(" "),\n                      _c(\n                        "div",\n                        {\n                          staticClass: "orderProduct d-flex col-lg-8 col-12 p-0"\n                        },\n                        [\n                          _c("img", {\n                            directives: [\n                              {\n                                name: "lazy",\n                                rawName: "v-lazy",\n                                value: _vm.item.brand_logo,\n                                expression: "item.brand_logo"\n                              }\n                            ],\n                            staticClass: "image",\n                            attrs: { alt: "" }\n                          }),\n                          _vm._v(" "),\n                          _c("div", { staticClass: "price ml-lg-0 ml-5" }, [\n                            _c("p", [_vm._v(_vm._s(_vm.$t("products.price")))]),\n                            _vm._v(" "),\n                            _c("h3", { staticClass: "roboto text-dark" }, [\n                              _vm._v(\n                                "\\n                            " +\n                                  _vm._s(_vm.item.price) +\n                                  " EUR\\n                        "\n                              )\n                            ])\n                          ]),\n                          _vm._v(" "),\n                          _c(\n                            "button",\n                            {\n                              staticClass: "btn-primary ml-lg-0 ml-auto",\n                              on: {\n                                click: function($event) {\n                                  return _vm.toggleModal(true)\n                                }\n                              }\n                            },\n                            [_vm._v(_vm._s(_vm.$t("products.order")))]\n                          )\n                        ]\n                      ),\n                      _vm._v(" "),\n                      _c("Advantages", {\n                        attrs: { items: _vm.item.advantage }\n                      }),\n                      _vm._v(" "),\n                      _c("div", { staticClass: "features" }, [\n                        _c(\n                          "p",\n                          { staticClass: "text-dark mb-3 font-weight-bold" },\n                          [_vm._v(_vm._s(_vm.$t("products.features")))]\n                        ),\n                        _vm._v(" "),\n                        _vm.xsmall\n                          ? _c(\n                              "div",\n                              { staticClass: "productFeatures d-grid" },\n                              _vm._l(_vm.item.features, function(feature, key) {\n                                return key < _vm.features\n                                  ? _c(\n                                      "div",\n                                      {\n                                        key: feature.id,\n                                        staticClass: "feature d-flex"\n                                      },\n                                      [\n                                        _c(\n                                          "div",\n                                          { staticClass: "feature-info" },\n                                          [\n                                            _c(\n                                              "p",\n                                              { staticClass: "color-5" },\n                                              [\n                                                _vm._v(\n                                                  _vm._s(feature.feature_name)\n                                                )\n                                              ]\n                                            ),\n                                            _vm._v(" "),\n                                            _c(\n                                              "p",\n                                              { staticClass: "text-dark" },\n                                              [\n                                                _vm._v(\n                                                  _vm._s(feature.feature_value)\n                                                )\n                                              ]\n                                            )\n                                          ]\n                                        )\n                                      ]\n                                    )\n                                  : _vm._e()\n                              }),\n                              0\n                            )\n                          : !_vm.xsmall\n                          ? _c(\n                              "div",\n                              { staticClass: "productFeatures d-grid" },\n                              _vm._l(_vm.item.features, function(f, key) {\n                                return _c(\n                                  "div",\n                                  {\n                                    key: "feature-m-" + f.id,\n                                    staticClass: "feature d-flex"\n                                  },\n                                  [\n                                    _c("div", { staticClass: "feature-info" }, [\n                                      _c("p", {\n                                        staticClass: "color-5",\n                                        domProps: {\n                                          innerHTML: _vm._s(f.feature_name)\n                                        }\n                                      }),\n                                      _vm._v(" "),\n                                      _c("p", {\n                                        staticClass: "text-dark",\n                                        domProps: {\n                                          innerHTML: _vm._s(f.feature_value)\n                                        }\n                                      })\n                                    ])\n                                  ]\n                                )\n                              }),\n                              0\n                            )\n                          : _vm._e(),\n                        _vm._v(" "),\n                        _vm.item.features.length > 6 &&\n                        _vm.xsmall &&\n                        _vm.featureShow\n                          ? _c("div", { on: { click: _vm.showFeatures } }, [\n                              _c(\n                                "p",\n                                {\n                                  staticClass:\n                                    "text-left mt-4 more-features-product"\n                                },\n                                [\n                                  _vm._v(_vm._s(_vm.$t("allFeatures"))),\n                                  _c("i", {\n                                    staticClass: "arrow down ml-3",\n                                    staticStyle: { "margin-bottom": "3px" }\n                                  })\n                                ]\n                              )\n                            ])\n                          : _vm._e()\n                      ]),\n                      _vm._v(" "),\n                      _c("div", { staticClass: "productDescription" }, [\n                        _c(\n                          "p",\n                          {\n                            staticClass:\n                              "description-title mb-3 text-dark font-weight-bold"\n                          },\n                          [_vm._v(_vm._s(_vm.$t("products.description")))]\n                        ),\n                        _vm._v(" "),\n                        _c("p", { staticClass: "description-text" }, [\n                          _vm._v(_vm._s(_vm.item.translates.description))\n                        ]),\n                        _vm._v(" "),\n                        _vm.xsmall\n                          ? _c(\n                              "div",\n                              {\n                                on: {\n                                  click: function($event) {\n                                    return _vm.showDescription($event)\n                                  }\n                                }\n                              },\n                              [\n                                _c(\n                                  "p",\n                                  {\n                                    staticClass:\n                                      "text-left mt-4 more-features-product"\n                                  },\n                                  [\n                                    _vm._v(_vm._s(_vm.$t("allFeatures"))),\n                                    _c("i", {\n                                      staticClass: "arrow down ml-3",\n                                      staticStyle: { "margin-bottom": "3px" }\n                                    })\n                                  ]\n                                )\n                              ]\n                            )\n                          : _vm._e(),\n                        _vm._v(" "),\n                        _vm.item.document\n                          ? _c("div", { staticClass: "product-doc" }, [\n                              _c(\n                                "a",\n                                {\n                                  staticClass: "btn-primary",\n                                  attrs: { href: "" + _vm.item.document }\n                                },\n                                [_vm._v(_vm._s(_vm.$t("downloadDoc")))]\n                              )\n                            ])\n                          : _vm._e()\n                      ])\n                    ],\n                    1\n                  )\n                ]\n              )\n            ],\n            1\n          )\n        : _vm._e(),\n      _vm._v(" "),\n      _c("more-items", { attrs: { type: "products", show: 3 } })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__("./resources/js/event/eventbus.js");\n\n// EXTERNAL MODULE: ./resources/js/width.js\nvar width = __webpack_require__("./resources/js/width.js");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Product.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nconst breadcrumbs = () => __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));\n\nconst moreItems = () => __webpack_require__.e(/*! import() */ "frontend-chunk-31").then(__webpack_require__.bind(null, /*! ../includes/moreItems */ "./resources/js/components/public/includes/moreItems.vue"));\n\nconst Advantages = () => __webpack_require__.e(/*! import() */ "frontend-chunk-41").then(__webpack_require__.bind(null, /*! ./Advantages */ "./resources/js/components/public/products/Advantages.vue"));\n\n\n\n/* harmony default export */ var Productvue_type_script_lang_js_ = ({\n  name: \'Product\',\n  components: {\n    moreItems,\n    breadcrumbs,\n    Advantages\n  },\n\n  data() {\n    return {\n      language: this.$route.params.locale === \'en\' ? 1 : this.$route.params.locale === \'ru\' ? 3 : 2,\n      id: this.$route.params.id,\n      item: [],\n      render: false,\n      featureShow: true,\n      features: 6\n    };\n  },\n\n  mounted() {\n    eventbus["bus"].$emit(\'position\', \'relative\');\n    eventbus["bus"].$emit(\'theme\', \'light\');\n    this.$store.dispatch(\'product\', {\n      lang: this.language,\n      id: this.id\n    }).then(() => {\n      this.item = this.$store.getters.getProduct;\n      this.render = true;\n    });\n\n    if (!this.xsmall) {\n      this.featureShow = false; // this.features = 0;\n    }\n  },\n\n  computed: {\n    medium() {\n      return width["default"].data.medium;\n    },\n\n    windowWidth() {\n      return width["default"].data.largeCompare;\n    },\n\n    mediumCompare() {\n      return width["default"].data.mediumCompare;\n    },\n\n    xsmall() {\n      return width["default"].data.xsmall;\n    }\n\n  },\n  methods: {\n    showFeatures() {\n      this.features = this.item.features.length;\n      this.featureShow = false;\n    },\n\n    toggleModal(val) {\n      eventbus["bus"].$emit(\'openModal\', {\n        value: val,\n        type: \'product\',\n        id: this.$route.params.id\n      });\n    },\n\n    showDescription(e) {\n      $(e.currentTarget).prev().css(\'max-height\', \'100%\');\n      $(e.currentTarget).hide();\n    }\n\n  },\n  watch: {\n    $route(to) {\n      this.id = to.params.id;\n      this.$store.dispatch(\'product\', {\n        lang: this.language,\n        id: this.id\n      }).then(() => {\n        this.item = this.$store.getters.getProduct;\n        this.render = true;\n      });\n\n      if (to.params.id) {\n        eventbus["bus"].$emit(\'position\', \'relative\');\n        eventbus["bus"].$emit(\'theme\', \'light\');\n      }\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/public/products/Product.vue?vue&type=script&lang=js&\n /* harmony default export */ var products_Productvue_type_script_lang_js_ = (Productvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/index.js + 2 modules\nvar VApp = __webpack_require__("./node_modules/vuetify/lib/components/VApp/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/products/Product.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  products_Productvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "1855d08f",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\ninstallComponents_default()(component, {VApp: VApp["VApp"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/products/Product.vue"\n/* harmony default export */ var Product = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/products/Product.vue_+_6_modules?')}}]);