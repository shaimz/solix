(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-1"],{"./resources/js/components/public/b2b/b2b.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/public/b2b/b2b.vue + 6 modules ***!
  \****************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VApp/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTabs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/width.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/b2b/b2b.vue?vue&type=template&id=486aa6fa&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "v-app",\n    { attrs: { id: "firstPage" } },\n    [\n      _c("div", { staticClass: "row col-md-12 top-header p-0" }, [\n        _c(\n          "div",\n          {\n            staticClass: "col-md-11 col-lg-11 col-xl-7 justify-content-center",\n            attrs: { id: "header" }\n          },\n          [\n            _c(\n              "div",\n              { staticClass: "header-text text-white" },\n              [\n                _c("h1", {\n                  domProps: { innerHTML: _vm._s(_vm.$t("home.header.heading")) }\n                }),\n                _vm._v(" "),\n                _c("p", {\n                  domProps: {\n                    innerHTML: _vm._s(_vm.$t("home.header.subheading"))\n                  }\n                }),\n                _vm._v(" "),\n                _c(\n                  "v-btn",\n                  {\n                    staticClass: "btn-primary",\n                    nativeOn: {\n                      click: function($event) {\n                        return _vm.toggleModal(true)\n                      }\n                    }\n                  },\n                  [_vm._v(_vm._s(_vm.$t("home.header.button")))]\n                )\n              ],\n              1\n            )\n          ]\n        ),\n        _vm._v(" "),\n        _c(\n          "div",\n          { staticClass: "col-md-12 py-0", attrs: { id: "header-bottom" } },\n          [\n            _c(\n              "div",\n              {\n                staticClass: "header-columns col-lg-11 col-xl-7 col-md-11 p-0"\n              },\n              [\n                _c(\n                  "div",\n                  { staticClass: "row justify-content-between" },\n                  _vm._l(_vm.$t("home.header.cards"), function(card) {\n                    return _c(\n                      "div",\n                      {\n                        staticClass:\n                          "col-md-3 col-lg-4 col-xl-4 header-card py-5"\n                      },\n                      [\n                        _c("div", { staticClass: "content-card text-white" }, [\n                          _c("img", { attrs: { src: card.img } }),\n                          _vm._v(" "),\n                          _c("div", { staticClass: "body mt-4" }, [\n                            _c("h5", { staticClass: "card-title" }, [\n                              _vm._v(_vm._s(card.title))\n                            ]),\n                            _vm._v(" "),\n                            _c("p", { staticClass: "card-text" }, [\n                              _vm._v(_vm._s(card.text))\n                            ])\n                          ])\n                        ])\n                      ]\n                    )\n                  }),\n                  0\n                )\n              ]\n            )\n          ]\n        )\n      ]),\n      _vm._v(" "),\n      _c("features", { attrs: { page: "b2b" } }),\n      _vm._v(" "),\n      _c("complect", { attrs: { page: "b2b" } }),\n      _vm._v(" "),\n      _c(\n        "div",\n        {\n          staticClass: "justify-content-center px-0 row p-xs-125",\n          attrs: { id: "variants" }\n        },\n        [\n          _c("div", { staticClass: "col-xl-7 col-11 m-auto" }, [\n            _c(\n              "div",\n              { staticClass: "sidebar-info padding-xs-top-125" },\n              [\n                _c("h2", [_vm._v(_vm._s(_vm.$t("b2b.variants.title")))]),\n                _vm._v(" "),\n                _vm.xsmall\n                  ? _c(\n                      "div",\n                      {\n                        staticClass:\n                          "nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column",\n                        attrs: {\n                          id: "v-pills-tab",\n                          role: "tablist",\n                          "aria-orientation": "vertical"\n                        }\n                      },\n                      [\n                        !_vm.xsmall\n                          ? _c("ul", { staticClass: "dropdown-tabs" }, [\n                              _c("li", { staticClass: "nav-item dropdown" }, [\n                                _c(\n                                  "a",\n                                  {\n                                    staticClass: "nav-link dropdown-toggle",\n                                    attrs: {\n                                      "data-toggle": "dropdown",\n                                      href: "#",\n                                      role: "button",\n                                      "aria-haspopup": "true",\n                                      "aria-expanded": "false"\n                                    }\n                                  },\n                                  [\n                                    _vm._v(\n                                      _vm._s(\n                                        _vm.text\n                                          ? _vm.text\n                                          : _vm.$t("b2b.variants.list")[0]\n                                              .listItem\n                                      )\n                                    )\n                                  ]\n                                ),\n                                _vm._v(" "),\n                                _c(\n                                  "div",\n                                  { staticClass: "dropdown-menu" },\n                                  _vm._l(_vm.$t("b2b.variants.list"), function(\n                                    item,\n                                    index\n                                  ) {\n                                    return _c(\n                                      "a",\n                                      {\n                                        key: "variant-" + index,\n                                        staticClass: "dropdown-item",\n                                        on: {\n                                          click: function($event) {\n                                            $event.preventDefault()\n                                            return _vm.addItem(item, index)\n                                          }\n                                        }\n                                      },\n                                      [_vm._v(_vm._s(item.listItem))]\n                                    )\n                                  }),\n                                  0\n                                )\n                              ])\n                            ])\n                          : _vm.xsmall\n                          ? _c("ul", [\n                              _c("li", { staticClass: "nav-item dropdown" }, [\n                                _c(\n                                  "a",\n                                  {\n                                    staticClass: "nav-link dropdown-toggle",\n                                    attrs: {\n                                      id: "trigger5",\n                                      "data-toggle": "dropdown",\n                                      href: "#",\n                                      role: "button",\n                                      "aria-haspopup": "true",\n                                      "aria-expanded": "false"\n                                    }\n                                  },\n                                  [\n                                    _vm._v(\n                                      _vm._s(\n                                        _vm.listItem\n                                          ? _vm.listItem\n                                          : _vm.$t("b2b.variants.list")[0]\n                                              .listItem\n                                      )\n                                    )\n                                  ]\n                                )\n                              ])\n                            ])\n                          : _vm._e()\n                      ]\n                    )\n                  : _c(\n                      "v-tabs",\n                      {\n                        model: {\n                          value: _vm.tab,\n                          callback: function($$v) {\n                            _vm.tab = $$v\n                          },\n                          expression: "tab"\n                        }\n                      },\n                      _vm._l(_vm.$t("b2b.variants.list"), function(\n                        item,\n                        index\n                      ) {\n                        return _c("v-tab", { key: "tab-" + index }, [\n                          _c("h5", [_vm._v(_vm._s(item.listItem))])\n                        ])\n                      }),\n                      1\n                    ),\n                _vm._v(" "),\n                _vm.xsmall\n                  ? _c(\n                      "div",\n                      {\n                        staticClass: "tab-content col-lg-10 col-12 pr-0",\n                        attrs: { id: "v-pills-tabContent" }\n                      },\n                      _vm._l(_vm.$t("b2b.variants.list"), function(\n                        item,\n                        index\n                      ) {\n                        return _c(\n                          "div",\n                          {\n                            class: [\n                              "tab-pane",\n                              "fade",\n                              item.listItem === _vm.active ? "show active" : ""\n                            ],\n                            attrs: {\n                              id: item.listItem,\n                              role: "tabpanel",\n                              "aria-labelledby": "v-pills-home-tab"\n                            }\n                          },\n                          [\n                            _c(\n                              "v-card",\n                              { attrs: { flat: "" } },\n                              [\n                                _c("v-card-text", [\n                                  _c("p", {\n                                    domProps: { innerHTML: _vm._s(item.text) }\n                                  }),\n                                  _vm._v(" "),\n                                  _c("div", [\n                                    _c(\n                                      "ul",\n                                      {\n                                        staticClass:\n                                          "justify-content-lg-start justify-content-center"\n                                      },\n                                      _vm._l(item.card, function(feature, i) {\n                                        return _c(\n                                          "li",\n                                          { key: "feature-" + i },\n                                          [\n                                            _c("p", {\n                                              staticClass: "roboto",\n                                              domProps: {\n                                                innerHTML: _vm._s(feature.value)\n                                              }\n                                            }),\n                                            _vm._v(" "),\n                                            _c("p", [\n                                              _vm._v(_vm._s(feature.name))\n                                            ])\n                                          ]\n                                        )\n                                      }),\n                                      0\n                                    )\n                                  ])\n                                ])\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      }),\n                      0\n                    )\n                  : !_vm.xsmall\n                  ? _c(\n                      "v-tabs-items",\n                      {\n                        model: {\n                          value: _vm.tab,\n                          callback: function($$v) {\n                            _vm.tab = $$v\n                          },\n                          expression: "tab"\n                        }\n                      },\n                      _vm._l(_vm.$t("b2b.variants.list"), function(\n                        item,\n                        index\n                      ) {\n                        return _c(\n                          "v-tab-item",\n                          { key: "variant-" + index },\n                          [\n                            _c(\n                              "v-card",\n                              { attrs: { flat: "" } },\n                              [\n                                _c("v-card-text", [\n                                  _c("p", {\n                                    domProps: { innerHTML: _vm._s(item.text) }\n                                  }),\n                                  _vm._v(" "),\n                                  _c("div", [\n                                    _c(\n                                      "ul",\n                                      {\n                                        staticClass:\n                                          "justify-content-lg-start justify-content-center"\n                                      },\n                                      _vm._l(item.card, function(feature, i) {\n                                        return _c(\n                                          "li",\n                                          { key: "feature-" + i },\n                                          [\n                                            _c("p", {\n                                              staticClass: "roboto",\n                                              domProps: {\n                                                innerHTML: _vm._s(feature.value)\n                                              }\n                                            }),\n                                            _vm._v(" "),\n                                            _c("p", {\n                                              domProps: {\n                                                innerHTML: _vm._s(feature.name)\n                                              }\n                                            })\n                                          ]\n                                        )\n                                      }),\n                                      0\n                                    )\n                                  ])\n                                ])\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      }),\n                      1\n                    )\n                  : _vm._e()\n              ],\n              1\n            )\n          ]),\n          _vm._v(" "),\n          _c("div", { staticClass: "col-md-12 background-variant" })\n        ]\n      ),\n      _vm._v(" "),\n      _c("connections", { attrs: { page: "b2b" } }),\n      _vm._v(" "),\n      _c("steps", { attrs: { page: "b2b" } }),\n      _vm._v(" "),\n      _c("modules", { attrs: { page: "b2b" } }),\n      _vm._v(" "),\n      _c(\n        "div",\n        { staticClass: "justify-content-center px-0", attrs: { id: "energy" } },\n        [_c("Energy", { attrs: { page: "b2b" } })],\n        1\n      ),\n      _vm._v(" "),\n      _c(\n        "div",\n        {\n          staticClass: "justify-content-center px-0 padding-125",\n          attrs: { id: "questions" }\n        },\n        [\n          _c("Questions", {\n            attrs: { dialog: _vm.open },\n            on: { modalOpen: _vm.modal }\n          })\n        ],\n        1\n      ),\n      _vm._v(" "),\n      _c(\n        "div",\n        {\n          staticClass: "padding-125 justify-content-center px-0",\n          attrs: { id: "discount" }\n        },\n        [_c("Discount")],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/b2b/b2b.vue?vue&type=template&id=486aa6fa&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__("./resources/js/event/eventbus.js");\n\n// EXTERNAL MODULE: ./resources/js/width.js\nvar width = __webpack_require__("./resources/js/width.js");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/b2b/b2b.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nconst Energy = () => __webpack_require__.e(/*! import() */ "frontend-chunk-26").then(__webpack_require__.bind(null, /*! ../includes/energy */ "./resources/js/components/public/includes/energy.vue"));\n\nconst ModalForm = () => Promise.all(/*! import() */[__webpack_require__.e("frontend-chunk-10~frontend-chunk-11~frontend-chunk-14"), __webpack_require__.e("frontend-chunk-14")]).then(__webpack_require__.bind(null, /*! ../includes/ModalForm */ "./resources/js/components/public/includes/ModalForm.vue"));\n\nconst Projects = () => __webpack_require__.e(/*! import() */ "frontend-chunk-17").then(__webpack_require__.bind(null, /*! ../includes/Projects/Projects */ "./resources/js/components/public/includes/Projects/Projects.vue"));\n\nconst Questions = () => __webpack_require__.e(/*! import() */ "frontend-chunk-18").then(__webpack_require__.bind(null, /*! ../includes/Questions/Questions */ "./resources/js/components/public/includes/Questions/Questions.vue"));\n\nconst Partners = () => __webpack_require__.e(/*! import() */ "frontend-chunk-16").then(__webpack_require__.bind(null, /*! ../includes/Partners/Partners */ "./resources/js/components/public/includes/Partners/Partners.vue"));\n\nconst Discount = () => __webpack_require__.e(/*! import() */ "frontend-chunk-24").then(__webpack_require__.bind(null, /*! ../includes/discount/Discount */ "./resources/js/components/public/includes/discount/Discount.vue"));\n\nconst complect = () => __webpack_require__.e(/*! import() */ "frontend-chunk-22").then(__webpack_require__.bind(null, /*! ../includes/complect */ "./resources/js/components/public/includes/complect.vue"));\n\nconst Connections = () => __webpack_require__.e(/*! import() */ "frontend-chunk-23").then(__webpack_require__.bind(null, /*! ../includes/connections */ "./resources/js/components/public/includes/connections.vue"));\n\nconst Modules = () => __webpack_require__.e(/*! import() */ "frontend-chunk-30").then(__webpack_require__.bind(null, /*! ../includes/modules */ "./resources/js/components/public/includes/modules.vue"));\n\nconst Map = () => Promise.all(/*! import() */[__webpack_require__.e("vendors~frontend-chunk-13"), __webpack_require__.e("frontend-chunk-13")]).then(__webpack_require__.bind(null, /*! ../includes/Map/Map */ "./resources/js/components/public/includes/Map/Map.vue"));\n\nconst Steps = () => __webpack_require__.e(/*! import() */ "frontend-chunk-33").then(__webpack_require__.bind(null, /*! ../includes/steps */ "./resources/js/components/public/includes/steps.vue"));\n\nconst Features = () => __webpack_require__.e(/*! import() */ "frontend-chunk-27").then(__webpack_require__.bind(null, /*! ../includes/features */ "./resources/js/components/public/includes/features.vue"));\n\n\n\n/* harmony default export */ var b2bvue_type_script_lang_js_ = ({\n  name: \'Home\',\n  props: {},\n  components: {\n    Features,\n    Steps,\n    Map,\n    Modules,\n    Connections,\n    complect,\n    Discount,\n    Partners,\n    Questions,\n    Projects,\n    ModalForm,\n    Energy\n  },\n\n  data() {\n    return {\n      open: false,\n      language: this.$route.params.locale === \'en\' ? 1 : this.$route.params.locale === \'ru\' ? 3 : 2,\n      count: 0,\n      show: 4,\n      tab: \'\',\n      items: [],\n      tabMap: \'\',\n      location: \'\',\n      active: this.$t(\'b2b.variants.list\')[0].listItem,\n      text: \'\',\n      listItem: \'\'\n    };\n  },\n\n  mounted() {\n    eventbus["bus"].$emit(\'theme\', \'dark\');\n    eventbus["bus"].$emit(\'position\', \'absolute\');\n    this.language = this.$store.getters.getPublicLanguage.code === \'en\' ? 1 : this.$store.getters.getPublicLanguage.code === \'ru\' ? 3 : 2;\n    this.$store.dispatch(\'projects\', this.language).then(() => {\n      this.count = this.$store.getters.getProjects.length;\n    });\n    this.initialisePicker();\n  },\n\n  methods: {\n    fetchList(list) {\n      let array = [];\n\n      for (let i in list) {\n        if (list[i].listItem) array.push({\n          id: i,\n          value: list[i].listItem\n        });\n      }\n\n      return array;\n    },\n\n    getTab(item) {\n      let list = this.$t(\'b2b.variants.list\');\n\n      for (let i in list) {\n        if (list[i].listItem === item.value) {\n          return list[i].listItem;\n        }\n      }\n    },\n\n    addItem(item, index = 0) {\n      this.text = item.listItem;\n      this.$nextTick(() => {\n        this.active = this.text;\n      });\n    },\n\n    initialisePicker() {\n      setTimeout(() => {\n        let trigger = document.querySelector(\'#trigger5\');\n\n        if (trigger) {\n          let _this = this;\n\n          let vm = this;\n          var mobileSelect1 = new MobileSelect({\n            trigger: "#trigger5",\n            title: "",\n            wheels: [{\n              data: this.fetchList(this.$t(\'b2b.variants.list\'))\n            }],\n            cancelBtnText: this.$t(\'cancel\'),\n            ensureBtnText: this.$t(\'select\'),\n            jsonType: true,\n            position: [0],\n            transitionEnd: function (indexArr, data) {},\n            onShow: e => {},\n            callback: function (indexArr, data) {\n              let s = data[0];\n              vm.active = _this.getTab(s);\n              vm.text = s.value;\n            }\n          });\n        }\n      }, 1500);\n    },\n\n    modal(val) {\n      this.open = val;\n    },\n\n    toggleModal(val) {\n      eventbus["bus"].$emit(\'openModal\', {\n        value: val,\n        type: \'call\'\n      });\n    }\n\n  },\n  computed: {\n    width() {\n      return width["default"].data.width;\n    },\n\n    windowWidth() {\n      return width["default"].data.compare;\n    },\n\n    windowCompare() {\n      return width["default"].data.compare;\n    },\n\n    small() {\n      return width["default"].data.mediumCompare;\n    },\n\n    medium() {\n      return width["default"].data.medium;\n    },\n\n    large() {\n      return width["default"].data.large;\n    },\n\n    compare() {\n      return width["default"].data.windowCompare;\n    },\n\n    xsmall() {\n      return width["default"].data.xsmall;\n    }\n\n  },\n  watch: {\n    language() {\n      this.language = this.$store.getters.getPublicLanguage === \'en\' ? 1 : this.$store.getters.getPublicLanguage === \'ru\' ? 3 : 2;\n    },\n\n    xsmall(n, o) {\n      if (n !== o) {\n        if (n) {\n          this.initialisePicker();\n        }\n      }\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/public/b2b/b2b.vue?vue&type=script&lang=js&\n /* harmony default export */ var b2b_b2bvue_type_script_lang_js_ = (b2bvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/b2b/b2b.vue?vue&type=style&index=0&id=486aa6fa&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/b2b/b2b.vue?vue&type=style&index=0&id=486aa6fa&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/index.js + 2 modules\nvar VApp = __webpack_require__("./node_modules/vuetify/lib/components/VApp/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js\nvar VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules\nvar VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/index.js + 7 modules\nvar VTabs = __webpack_require__("./node_modules/vuetify/lib/components/VTabs/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/b2b/b2b.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  b2b_b2bvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "486aa6fa",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n\ninstallComponents_default()(component, {VApp: VApp["VApp"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardText: VCard["VCardText"],VTab: VTabs["VTab"],VTabItem: VTabs["VTabItem"],VTabs: VTabs["VTabs"],VTabsItems: VTabs["VTabsItems"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/b2b/b2b.vue"\n/* harmony default export */ var b2b = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/b2b/b2b.vue_+_6_modules?')}}]);