(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-10"],{"./resources/js/components/public/includes/Contacts/Contacts.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/public/includes/Contacts/Contacts.vue + 6 modules ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextarea/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/codes/codes.json (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Contacts/Contacts.vue?vue&type=template&id=af2d3714&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "div",\n    {\n      staticClass:\n        "row justify-content-lg-between justify-content-center justify-content-xl-start"\n    },\n    [\n      _c("div", { staticClass: "contacts-info col-xl-4 col-12" }, [\n        _c(\n          "div",\n          { staticClass: "contacts-sidebar text-lg-left text-xs-center" },\n          [\n            _c("h1", [_vm._v(_vm._s(_vm.$t("contacts.title")))]),\n            _vm._v(" "),\n            _c("p", [_vm._v(_vm._s(_vm.$t("contacts.text")))]),\n            _vm._v(" "),\n            _c(\n              "ul",\n              { staticClass: "list-group" },\n              _vm._l(_vm.$t("contacts.list"), function(item) {\n                return _c("li", { key: item.value, staticClass: "d-flex" }, [\n                  _c("i", { staticClass: "contact-icon" }, [\n                    _c("img", {\n                      directives: [\n                        {\n                          name: "lazy",\n                          rawName: "v-lazy",\n                          value: item.icon,\n                          expression: "item.icon"\n                        }\n                      ]\n                    })\n                  ]),\n                  _vm._v(" "),\n                  _c("div", { staticClass: "body" }, [\n                    _c("p", [_vm._v(_vm._s(item.title))]),\n                    _vm._v(" "),\n                    _c("p", [_vm._v(_vm._s(item.value))])\n                  ])\n                ])\n              }),\n              0\n            )\n          ]\n        )\n      ]),\n      _vm._v(" "),\n      _c(\n        "div",\n        {\n          staticClass: "col-xl-7 col-12 contacts-form",\n          class: [_vm.message ? "justify-content-center" : ""]\n        },\n        [\n          _c(\n            "v-row",\n            { attrs: { justify: "center" } },\n            [\n              _c(\n                "v-card",\n                { attrs: { width: "100%" } },\n                [\n                  !_vm.message\n                    ? _c("v-card-title", [\n                        _c("h2", { staticClass: "card-title" }, [\n                          _vm._v(_vm._s(_vm.$t("contacts.card.title")))\n                        ])\n                      ])\n                    : _vm._e(),\n                  _vm._v(" "),\n                  !_vm.message\n                    ? _c(\n                        "v-card-text",\n                        [\n                          _c(\n                            "v-container",\n                            { staticClass: "py-0" },\n                            [\n                              _c(\n                                "v-row",\n                                [\n                                  _c(\n                                    "v-col",\n                                    {\n                                      staticClass: "email",\n                                      attrs: { cols: "6" }\n                                    },\n                                    [\n                                      _c(\n                                        "div",\n                                        { staticClass: "position-relative" },\n                                        [\n                                          _c("v-text-field", {\n                                            class: [\n                                              _vm.emailError\n                                                ? "error-field"\n                                                : ""\n                                            ],\n                                            attrs: {\n                                              placeholder: _vm.$t(\n                                                "modalForm.placeholders.email"\n                                              )\n                                            },\n                                            model: {\n                                              value: _vm.form.email,\n                                              callback: function($$v) {\n                                                _vm.$set(_vm.form, "email", $$v)\n                                              },\n                                              expression: "form.email"\n                                            }\n                                          }),\n                                          _vm._v(" "),\n                                          _vm.emailError\n                                            ? _c(\n                                                "span",\n                                                { staticClass: "text-danger" },\n                                                [_vm._v(_vm._s(_vm.emailError))]\n                                              )\n                                            : _vm._e()\n                                        ],\n                                        1\n                                      )\n                                    ]\n                                  ),\n                                  _vm._v(" "),\n                                  _c(\n                                    "v-col",\n                                    {\n                                      directives: [\n                                        {\n                                          name: "click-out",\n                                          rawName: "v-click-out",\n                                          value: _vm.hide,\n                                          expression: "hide"\n                                        }\n                                      ],\n                                      staticClass: "pl-2 phone",\n                                      attrs: { cols: "6" }\n                                    },\n                                    [\n                                      _c(\n                                        "div",\n                                        { staticClass: "position-relative" },\n                                        [\n                                          _c("v-text-field", {\n                                            class: [\n                                              _vm.phoneError\n                                                ? "error-field"\n                                                : ""\n                                            ],\n                                            attrs: {\n                                              type: "number",\n                                              maxlength: "15",\n                                              rules: [_vm.rules.counter]\n                                            },\n                                            on: {\n                                              focus: function($event) {\n                                                return _vm.onFocus($event)\n                                              },\n                                              click: function($event) {\n                                                _vm.show = false\n                                              }\n                                            },\n                                            scopedSlots: _vm._u(\n                                              [\n                                                {\n                                                  key: "prepend-inner",\n                                                  fn: function() {\n                                                    return [\n                                                      _c(\n                                                        "span",\n                                                        {\n                                                          on: {\n                                                            click: function(\n                                                              $event\n                                                            ) {\n                                                              _vm.show = !_vm.show\n                                                            }\n                                                          }\n                                                        },\n                                                        [\n                                                          _c("img", {\n                                                            attrs: {\n                                                              width: "24",\n                                                              height: "24",\n                                                              src:\n                                                                "/assets/24/" +\n                                                                _vm.flag +\n                                                                ".png"\n                                                            }\n                                                          }),\n                                                          _c("span", {\n                                                            staticClass:\n                                                              "arrow down"\n                                                          }),\n                                                          _vm._v(" "),\n                                                          _c("span", [\n                                                            _vm._v(\n                                                              _vm._s(_vm.code)\n                                                            )\n                                                          ])\n                                                        ]\n                                                      )\n                                                    ]\n                                                  },\n                                                  proxy: true\n                                                }\n                                              ],\n                                              null,\n                                              false,\n                                              1255128646\n                                            ),\n                                            model: {\n                                              value: _vm.form.phone,\n                                              callback: function($$v) {\n                                                _vm.$set(_vm.form, "phone", $$v)\n                                              },\n                                              expression: "form.phone"\n                                            }\n                                          }),\n                                          _vm._v(" "),\n                                          _c(\n                                            "ul",\n                                            {\n                                              staticClass:\n                                                "countries list-unstyled",\n                                              class: [\n                                                _vm.show ? "d-block" : "d-none"\n                                              ]\n                                            },\n                                            _vm._l(_vm.countries, function(c) {\n                                              return _c(\n                                                "li",\n                                                {\n                                                  on: {\n                                                    click: function($event) {\n                                                      return _vm.setCountry(c)\n                                                    }\n                                                  }\n                                                },\n                                                [\n                                                  _c("img", {\n                                                    attrs: {\n                                                      src:\n                                                        "/assets/24/" +\n                                                        c.name.replaceAll(\n                                                          " ",\n                                                          "-"\n                                                        ) +\n                                                        ".png"\n                                                    }\n                                                  }),\n                                                  _vm._v(_vm._s(c.name) + " "),\n                                                  _c("span", [\n                                                    _vm._v(_vm._s(c.code))\n                                                  ])\n                                                ]\n                                              )\n                                            }),\n                                            0\n                                          ),\n                                          _vm._v(" "),\n                                          _vm.phoneError\n                                            ? _c(\n                                                "span",\n                                                { staticClass: "text-danger" },\n                                                [_vm._v(_vm._s(_vm.phoneError))]\n                                              )\n                                            : _vm._e()\n                                        ],\n                                        1\n                                      )\n                                    ]\n                                  )\n                                ],\n                                1\n                              ),\n                              _vm._v(" "),\n                              _c(\n                                "v-row",\n                                [\n                                  _c(\n                                    "v-col",\n                                    { attrs: { cols: "12", sm: "12" } },\n                                    [\n                                      _c("v-textarea", {\n                                        attrs: {\n                                          placeholder: _vm.$t(\n                                            "modalForm.placeholders.comment"\n                                          ),\n                                          maxlength: "500"\n                                        },\n                                        on: { input: _vm.liveCount },\n                                        model: {\n                                          value: _vm.form.message,\n                                          callback: function($$v) {\n                                            _vm.$set(_vm.form, "message", $$v)\n                                          },\n                                          expression: "form.message"\n                                        }\n                                      }),\n                                      _vm._v(" "),\n                                      _c(\n                                        "span",\n                                        { class: { danger: _vm.generateErr } },\n                                        [\n                                          _vm._v(\n                                            _vm._s(\n                                              _vm.form.message\n                                                ? _vm.form.message.length\n                                                : 0\n                                            ) +\n                                              " / " +\n                                              _vm._s(\n                                                _vm.totalRemainCount\n                                                  ? _vm.totalRemainCount\n                                                  : _vm.limit\n                                              )\n                                          )\n                                        ]\n                                      )\n                                    ],\n                                    1\n                                  )\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    : _vm._e(),\n                  _vm._v(" "),\n                  !_vm.message\n                    ? _c("v-card-actions", [\n                        _c(\n                          "a",\n                          {\n                            staticClass:\n                              "card-link btn btn-warning btn-primary",\n                            attrs: { id: "order" },\n                            on: { click: _vm.send }\n                          },\n                          [\n                            _vm._v(\n                              "\\n                        " +\n                                _vm._s(_vm.$t("modalForm.buttons.order")) +\n                                "\\n                    "\n                            )\n                          ]\n                        ),\n                        _vm._v(" "),\n                        _c("p", {\n                          domProps: {\n                            innerHTML: _vm._s(_vm.$t("modalForm.card.terms"))\n                          }\n                        })\n                      ])\n                    : _vm._e(),\n                  _vm._v(" "),\n                  _vm.message\n                    ? _c("div", { staticClass: "message-form text-center" }, [\n                        _c("img", {\n                          attrs: {\n                            src:\n                              "/assets/components/header/logo-vector-yellow.png"\n                          }\n                        }),\n                        _vm._v(" "),\n                        _c("h3", [_vm._v(_vm._s(_vm.$t("thanks")))]),\n                        _vm._v(" "),\n                        _c("p", {\n                          staticClass:\n                            "d-flex justify-content-center align-items-center mt-4 mb-9",\n                          domProps: { innerHTML: _vm._s(_vm.message) }\n                        }),\n                        _vm._v(" "),\n                        _c(\n                          "button",\n                          {\n                            staticClass: "btn-primary",\n                            on: { click: _vm.closeForm }\n                          },\n                          [_vm._v(_vm._s(_vm.$t("next")))]\n                        )\n                      ])\n                    : _vm._e()\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Contacts/Contacts.vue?vue&type=template&id=af2d3714&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/codes/codes.json\nvar codes = __webpack_require__("./resources/js/codes/codes.json");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Contacts/Contacts.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nconst Crumbs = () => __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));\n\n/* harmony default export */ var Contactsvue_type_script_lang_js_ = ({\n  name: \'Contact\',\n  components: {\n    Crumbs\n  },\n\n  data() {\n    return {\n      form: {\n        type: \'\',\n        phone: \'\'\n      },\n      dialog: false,\n      rules: {\n        counter: value => value.length <= 20 || \'Max 20 characters\'\n      },\n      message: \'\',\n      emailError: \'\',\n      phoneError: \'\',\n      type: \'\',\n      title: \'\',\n      language: this.$route.params.locale === \'en\' ? 1 : this.$route.params.locale === \'ru\' ? 3 : 2,\n      flag: \'Moldova\',\n      countries: codes,\n      code: \'+373\',\n      show: false,\n      generateErr: false,\n      totalRemainCount: 0,\n      limit: 500\n    };\n  },\n\n  mounted() {},\n\n  methods: {\n    liveCount(e) {\n      this.totalRemainCount = this.limit - this.form.comment.length;\n      this.generateErr = this.totalRemainCount < 0;\n    },\n\n    hide() {\n      this.show ? this.show = false : \'\';\n    },\n\n    setCountry(country) {\n      this.code = country.code;\n      this.flag = country.name.replace(\' \', \'-\');\n      this.show = false;\n    },\n\n    onFocus(event) {\n      $(event.currentTarget).attr(\'placeholder\', \'\');\n    },\n\n    input(event) {\n      Vue.set(this.form, \'phone\', this.code + \' \' + $(event.currentTarget).val());\n    },\n\n    send(event) {\n      if (this.validEmail(this.form.email) && this.validPhone(this.form.phone)) {\n        event.currentTarget.classList.add(\'disabled\');\n        this.form[\'phone\'] = this.form[\'phone\'];\n        this.form.type = \'call\';\n        this.form.page = this.$route.name;\n        let form = this.form;\n        axios.post(\'/admin/request\', form).then(res => {\n          if (!res.data.error) {\n            this.message = this.$t(\'requestText\');\n            this.message = this.message.replace(\'[variable]\', this.$t(\'call\'));\n            this.form = {\n              type: \'\'\n            };\n          }\n\n          this.form.errors = res.data.error;\n          event.currentTarget.classList.remove(\'disabled\');\n        });\n      } else {\n        this.phoneError = !this.validPhone(this.form.phone) ? this.$t(\'phoneError\') : \'\';\n        this.emailError = !this.validEmail(this.form.email) ? this.$t(\'emailError\') : \'\';\n        event.currentTarget.classList.remove(\'disabled\');\n      }\n    },\n\n    closeForm() {\n      this.dialog = false;\n      this.form.comment = \'\';\n      this.form.phone = \'\';\n      this.form.email = \'\';\n      this.message = \'\';\n      this.emailError = \'\';\n      this.phoneError = \'\';\n    },\n\n    validEmail(email) {\n      var re = /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n      return re.test(email);\n    },\n\n    validPhone(phone) {\n      return phone.length >= 5 && phone.length <= 15;\n    },\n\n    getType(id = 0, type = \'\') {\n      if (id) {\n        switch (type) {\n          case \'service\':\n            this.$store.dispatch(\'service\', {\n              lang_id: 3,\n              id: id\n            }).then(() => {\n              let service = this.$store.getters.getService;\n              this.title = this.$t(\'modalForm.card.title\') + ` ${service.data.name.toLowerCase()}`;\n              this.form.type = \'service\';\n              this.form.service = service.data.name;\n              this.form.person = service.data.type;\n            });\n            break;\n\n          case \'product\':\n            this.$store.dispatch(\'product\', {\n              lang: 3,\n              id: id\n            }).then(() => {\n              let product = this.$store.getters.getProduct;\n              this.title = this.$t(\'modalForm.card.title\') + ` ${product.translates.name}`;\n              this.form.type = \'product\';\n              this.form.price = product.price;\n              this.form.product = product.translates.name;\n              this.form.category = product.category.data.name;\n            });\n            break;\n        }\n      } else {\n        switch (type) {\n          case \'call\':\n            this.form.type = \'call\';\n            this.form.page = this.$route.name;\n            this.title = this.$t(\'modalForm.card.title\') + ` ${this.$t(\'modalForm.card.call\')}`;\n            break;\n        }\n      }\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Contacts/Contacts.vue?vue&type=script&lang=js&\n /* harmony default export */ var Contacts_Contactsvue_type_script_lang_js_ = (Contactsvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Contacts/Contacts.vue?vue&type=style&index=0&id=af2d3714&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Contacts/Contacts.vue?vue&type=style&index=0&id=af2d3714&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules\nvar VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 9 modules\nvar VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js\nvar VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/index.js + 2 modules\nvar VTextarea = __webpack_require__("./node_modules/vuetify/lib/components/VTextarea/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Contacts/Contacts.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  Contacts_Contactsvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "af2d3714",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n\n\ninstallComponents_default()(component, {VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VContainer: VGrid["VContainer"],VRow: VGrid["VRow"],VTextField: VTextField["VTextField"],VTextarea: VTextarea["VTextarea"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/includes/Contacts/Contacts.vue"\n/* harmony default export */ var Contacts = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/includes/Contacts/Contacts.vue_+_6_modules?')}}]);