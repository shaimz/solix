(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-14"],{"./resources/js/components/public/includes/ModalForm.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/public/includes/ModalForm.vue + 6 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextarea/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/codes/codes.json (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ModalForm.vue?vue&type=template&id=6fa66cd8&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "v-row",\n    { attrs: { justify: "center" } },\n    [\n      _c(\n        "v-dialog",\n        {\n          attrs: { "max-width": "600px", id: "requests" },\n          model: {\n            value: _vm.dialog,\n            callback: function($$v) {\n              _vm.dialog = $$v\n            },\n            expression: "dialog"\n          }\n        },\n        [\n          _c("span", {\n            staticClass: "close-form",\n            on: { click: _vm.closeForm }\n          }),\n          _vm._v(" "),\n          _c(\n            "v-card",\n            { class: [_vm.message ? "active-dialog" : ""] },\n            [\n              !_vm.message\n                ? _c("v-card-title", [\n                    _c("h2", { staticClass: "card-title" }, [\n                      _vm._v(_vm._s(_vm.title))\n                    ])\n                  ])\n                : _vm._e(),\n              _vm._v(" "),\n              !_vm.message\n                ? _c(\n                    "v-card-text",\n                    [\n                      _c(\n                        "v-container",\n                        [\n                          _c(\n                            "v-row",\n                            { staticClass: "mb-3" },\n                            [\n                              _c(\n                                "v-col",\n                                { staticClass: "pr-2", attrs: { cols: "6" } },\n                                [\n                                  _c("v-text-field", {\n                                    class: [\n                                      _vm.emailError ? "error-field" : ""\n                                    ],\n                                    attrs: {\n                                      placeholder: _vm.$t(\n                                        "modalForm.placeholders.email"\n                                      )\n                                    },\n                                    model: {\n                                      value: _vm.form.email,\n                                      callback: function($$v) {\n                                        _vm.$set(_vm.form, "email", $$v)\n                                      },\n                                      expression: "form.email"\n                                    }\n                                  }),\n                                  _vm._v(" "),\n                                  _vm.emailError\n                                    ? _c(\n                                        "span",\n                                        { staticClass: "text-danger" },\n                                        [_vm._v(_vm._s(_vm.emailError))]\n                                      )\n                                    : _vm._e()\n                                ],\n                                1\n                              ),\n                              _vm._v(" "),\n                              _c(\n                                "v-col",\n                                {\n                                  directives: [\n                                    {\n                                      name: "click-out",\n                                      rawName: "v-click-out",\n                                      value: _vm.hide,\n                                      expression: "hide"\n                                    }\n                                  ],\n                                  staticClass: "pl-2",\n                                  attrs: { cols: "6" }\n                                },\n                                [\n                                  _c("span"),\n                                  _vm._v(" "),\n                                  _c("v-text-field", {\n                                    class: [\n                                      _vm.phoneError ? "error-field" : ""\n                                    ],\n                                    attrs: { type: "number", rules: _vm.rules },\n                                    on: {\n                                      focus: function($event) {\n                                        return _vm.onFocus($event)\n                                      },\n                                      click: function($event) {\n                                        _vm.show = false\n                                      },\n                                      keydown: function($event) {\n                                        return _vm.limitNumber($event)\n                                      }\n                                    },\n                                    scopedSlots: _vm._u(\n                                      [\n                                        {\n                                          key: "prepend-inner",\n                                          fn: function() {\n                                            return [\n                                              _c(\n                                                "span",\n                                                {\n                                                  on: {\n                                                    click: function($event) {\n                                                      _vm.show = !_vm.show\n                                                    }\n                                                  }\n                                                },\n                                                [\n                                                  _c("img", {\n                                                    attrs: {\n                                                      width: "24",\n                                                      height: "24",\n                                                      src:\n                                                        "/assets/24/" +\n                                                        _vm.flag +\n                                                        ".png"\n                                                    }\n                                                  }),\n                                                  _c("span", {\n                                                    staticClass: "arrow down"\n                                                  }),\n                                                  _vm._v(" "),\n                                                  _c("span", [\n                                                    _vm._v(_vm._s(_vm.code))\n                                                  ])\n                                                ]\n                                              )\n                                            ]\n                                          },\n                                          proxy: true\n                                        }\n                                      ],\n                                      null,\n                                      false,\n                                      1255128646\n                                    ),\n                                    model: {\n                                      value: _vm.form.phone,\n                                      callback: function($$v) {\n                                        _vm.$set(_vm.form, "phone", $$v)\n                                      },\n                                      expression: "form.phone"\n                                    }\n                                  }),\n                                  _vm._v(" "),\n                                  _c(\n                                    "ul",\n                                    {\n                                      staticClass: "countries list-unstyled",\n                                      class: [_vm.show ? "d-block" : "d-none"]\n                                    },\n                                    _vm._l(_vm.countries, function(c) {\n                                      return _c(\n                                        "li",\n                                        {\n                                          on: {\n                                            click: function($event) {\n                                              return _vm.setCountry(c)\n                                            }\n                                          }\n                                        },\n                                        [\n                                          _c("img", {\n                                            attrs: {\n                                              src:\n                                                "/assets/24/" +\n                                                c.name.replaceAll(" ", "-") +\n                                                ".png"\n                                            }\n                                          }),\n                                          _vm._v(_vm._s(c.name) + " "),\n                                          _c("span", [_vm._v(_vm._s(c.code))])\n                                        ]\n                                      )\n                                    }),\n                                    0\n                                  ),\n                                  _vm._v(" "),\n                                  _vm.phoneError\n                                    ? _c(\n                                        "span",\n                                        { staticClass: "text-danger" },\n                                        [_vm._v(_vm._s(_vm.phoneError))]\n                                      )\n                                    : _vm._e()\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          ),\n                          _vm._v(" "),\n                          _c(\n                            "v-row",\n                            [\n                              _c(\n                                "v-col",\n                                { attrs: { cols: "12", sm: "12" } },\n                                [\n                                  _c("v-textarea", {\n                                    attrs: {\n                                      placeholder: _vm.$t(\n                                        "modalForm.placeholders.comment"\n                                      ),\n                                      maxlength: "500"\n                                    },\n                                    on: { input: _vm.liveCount },\n                                    model: {\n                                      value: _vm.form.comment,\n                                      callback: function($$v) {\n                                        _vm.$set(_vm.form, "comment", $$v)\n                                      },\n                                      expression: "form.comment"\n                                    }\n                                  }),\n                                  _vm._v(" "),\n                                  _c(\n                                    "span",\n                                    { class: { danger: _vm.generateErr } },\n                                    [\n                                      _vm._v(\n                                        _vm._s(\n                                          _vm.form.comment\n                                            ? _vm.form.comment.length\n                                            : 0\n                                        ) +\n                                          " / " +\n                                          _vm._s(\n                                            _vm.totalRemainCount\n                                              ? _vm.totalRemainCount\n                                              : _vm.limit\n                                          )\n                                      )\n                                    ]\n                                  )\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e(),\n              _vm._v(" "),\n              !_vm.message\n                ? _c("v-card-actions", [\n                    _c(\n                      "a",\n                      {\n                        staticClass: "card-link btn btn-warning btn-primary",\n                        attrs: { id: "order" },\n                        on: { click: _vm.send }\n                      },\n                      [\n                        _vm._v(\n                          "\\n                    " +\n                            _vm._s(_vm.$t("modalForm.buttons.value")) +\n                            "\\n                "\n                        )\n                      ]\n                    ),\n                    _vm._v(" "),\n                    _c("p", {\n                      domProps: {\n                        innerHTML: _vm._s(_vm.$t("modalForm.card.terms"))\n                      }\n                    })\n                  ])\n                : _vm._e(),\n              _vm._v(" "),\n              _vm.message\n                ? _c("div", { staticClass: "message-form" }, [\n                    _c("img", {\n                      attrs: {\n                        src: "/assets/components/header/logo-vector-yellow.png"\n                      }\n                    }),\n                    _vm._v(" "),\n                    _c("h3", [_vm._v(_vm._s(_vm.$t("thanks")))]),\n                    _vm._v(" "),\n                    _c("p", {\n                      staticClass:\n                        "d-flex justify-content-center align-items-center mt-4 mb-9",\n                      domProps: { innerHTML: _vm._s(_vm.message) }\n                    }),\n                    _vm._v(" "),\n                    _c(\n                      "button",\n                      {\n                        staticClass: "btn-primary",\n                        on: { click: _vm.closeForm }\n                      },\n                      [_vm._v(_vm._s(_vm.$t("next")))]\n                    )\n                  ])\n                : _vm._e()\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/ModalForm.vue?vue&type=template&id=6fa66cd8&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__("./resources/js/event/eventbus.js");\n\n// EXTERNAL MODULE: ./resources/js/codes/codes.json\nvar codes = __webpack_require__("./resources/js/codes/codes.json");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ModalForm.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ var ModalFormvue_type_script_lang_js_ = ({\n  props: {\n    open: Boolean\n  },\n\n  data() {\n    return {\n      form: {\n        type: \'\',\n        phone: \'\'\n      },\n      dialog: false,\n      rules: [v => v.length <= 15 || \'Max 15 characters\'],\n      message: \'\',\n      emailError: \'\',\n      phoneError: \'\',\n      type: \'\',\n      title: \'\',\n      language: this.$route.params.locale === \'en\' ? 1 : this.$route.params.locale === \'ru\' ? 3 : 2,\n      flag: \'Moldova\',\n      countries: codes,\n      code: \'+373\',\n      show: false,\n      generateErr: false,\n      totalRemainCount: 0,\n      limit: 500\n    };\n  },\n\n  created() {\n    eventbus["bus"].$on(\'openModal\', value => {\n      if (value.id) {\n        this.dialog = true;\n        this.getType(value.id ? value.id : 0, value.type);\n      } else {\n        this.dialog = true;\n        this.getType(0, value.type);\n      }\n    });\n  },\n\n  destroyed() {},\n\n  methods: {\n    limitNumber(event) {\n      if (this.form.phone.toString().length > 14) {\n        event.preventDefault();\n      }\n    },\n\n    liveCount(e) {\n      this.totalRemainCount = this.limit - this.form.comment.length;\n      this.generateErr = this.totalRemainCount < 0;\n    },\n\n    hide() {\n      this.show ? this.show = false : \'\';\n    },\n\n    setCountry(country) {\n      this.code = country.code;\n      this.flag = country.name.replace(\' \', \'-\');\n      this.show = false;\n    },\n\n    onFocus(event) {\n      $(event.currentTarget).attr(\'placeholder\', \'\');\n    },\n\n    input(event) {\n      Vue.set(this.form, \'phone\', this.code + \' \' + $(event.currentTarget).val());\n    },\n\n    send() {\n      if (this.validEmail(this.form.email) && this.validPhone(this.form.phone)) {\n        let form = this.form;\n        axios.post(\'/request\', form).then(res => {\n          if (!res.data.error) {\n            this.message = this.$t(\'requestText\');\n            this.message = this.message.replace(\'[variable]\', this.form.product ? this.form.product : this.$t(\'call\'));\n            this.form = {\n              type: \'\'\n            };\n          }\n\n          this.form.errors = res.data.error;\n        });\n      } else {\n        this.emailError = !this.validEmail(this.form.email) ? this.$t(\'emailError\') : \'\';\n        this.phoneError = !this.validPhone(this.form.phone) ? this.$t(\'phoneError\') : \'\';\n      }\n    },\n\n    closeForm() {\n      this.dialog = false;\n      this.message = \'\';\n      this.form.comment = \'\';\n      this.form.phone = \'\';\n      this.form.email = \'\';\n      this.emailError = \'\';\n      this.phoneError = \'\';\n    },\n\n    validEmail(email) {\n      var re = /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n      return re.test(email);\n    },\n\n    validPhone(phone) {\n      return phone.length >= 5 && phone.length <= 15;\n    },\n\n    getType(id = 0, type = \'\') {\n      switch (type) {\n        case \'service\':\n          this.$store.dispatch(\'service\', {\n            lang_id: this.language,\n            id: id\n          }).then(() => {\n            let service = this.$store.getters.getService;\n            this.title = this.$t(\'modalForm.card.title\') + ` ${this.$t(\'modalForm.card.service\')}`;\n            this.form.type = \'service\';\n            this.form.service = service.data.name;\n            this.form.person = service.category_id;\n          });\n          break;\n\n        case \'product\':\n          this.$store.dispatch(\'product\', {\n            lang: this.language,\n            id: id\n          }).then(() => {\n            let product = this.$store.getters.getProduct;\n            this.title = this.$t(\'modalForm.card.title\') + ` ${product.translates.name}`;\n            this.form.type = \'product\';\n            this.form.price = product.price;\n            this.form.product = product.translates.name;\n            this.form.category = product.category.data.name;\n          });\n          break;\n      }\n\n      switch (type) {\n        case \'career\':\n        case \'call\':\n          this.form.type = type;\n          this.form.page = this.$route.name;\n          this.title = this.$t(\'modalForm.card.title\') + ` ${this.$t(\'modalForm.card.call\')}`;\n\n          if (id) {\n            this.$store.dispatch(\'singleCareer\', {\n              lang_id: this.language,\n              id: id\n            }).then(() => {\n              let career = this.$store.getters.getSingleCareer;\n              this.form.type = \'career\';\n              this.form.page = career ? career.translates.name : this.$route.name;\n              this.title = this.$t(\'modalForm.card.title\') + ` ${this.$t(\'modalForm.card.call\')}`;\n            });\n          }\n\n          break;\n      }\n    }\n\n  },\n\n  mounted() {\n    this.dialog = false;\n  },\n\n  watch: {\n    open(val, old) {\n      if (old !== val) this.dialog = val;\n      this.getType();\n    },\n\n    dialog(val, old) {},\n\n    $route(to) {}\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/public/includes/ModalForm.vue?vue&type=script&lang=js&\n /* harmony default export */ var includes_ModalFormvue_type_script_lang_js_ = (ModalFormvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ModalForm.vue?vue&type=style&index=0&id=6fa66cd8&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/ModalForm.vue?vue&type=style&index=0&id=6fa66cd8&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules\nvar VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 9 modules\nvar VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js\nvar VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js\nvar VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/index.js + 2 modules\nvar VTextarea = __webpack_require__("./node_modules/vuetify/lib/components/VTextarea/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/ModalForm.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  includes_ModalFormvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "6fa66cd8",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n\n\n\ninstallComponents_default()(component, {VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VContainer: VGrid["VContainer"],VDialog: VDialog["VDialog"],VRow: VGrid["VRow"],VTextField: VTextField["VTextField"],VTextarea: VTextarea["VTextarea"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/includes/ModalForm.vue"\n/* harmony default export */ var ModalForm = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/includes/ModalForm.vue_+_6_modules?')}}]);