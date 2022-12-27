(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6"],{"./resources/js/components/backend/data/Confirm.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/backend/data/Confirm.vue + 6 modules ***!
  \**********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VToolbar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/Confirm.vue?vue&type=template&id=161a62be&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "v-dialog",\n    {\n      style: { zIndex: _vm.options.zIndex },\n      attrs: { id: "delete-action", "max-width": _vm.options.width },\n      on: {\n        keydown: function($event) {\n          if (\n            !$event.type.indexOf("key") &&\n            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])\n          ) {\n            return null\n          }\n          return _vm.cancel($event)\n        }\n      },\n      model: {\n        value: _vm.dialog,\n        callback: function($$v) {\n          _vm.dialog = $$v\n        },\n        expression: "dialog"\n      }\n    },\n    [\n      _c(\n        "v-card",\n        [\n          _c(\n            "v-toolbar",\n            { attrs: { dark: "", color: "#79C25A", dense: "", flat: "" } },\n            [\n              _c("v-toolbar-title", { staticClass: "white--text" }, [\n                _vm._v(_vm._s(_vm.title))\n              ])\n            ],\n            1\n          ),\n          _vm._v(" "),\n          _c(\n            "v-card-text",\n            {\n              directives: [\n                {\n                  name: "show",\n                  rawName: "v-show",\n                  value: !!_vm.message,\n                  expression: "!!message"\n                }\n              ],\n              staticClass: "pa-4"\n            },\n            [_vm._v(_vm._s(_vm.message))]\n          ),\n          _vm._v(" "),\n          _c(\n            "v-card-actions",\n            { staticClass: "pt-0" },\n            [\n              _c("v-spacer"),\n              _vm._v(" "),\n              _c(\n                "v-btn",\n                {\n                  staticClass: "accept",\n                  attrs: { color: "darken-1", text: "" },\n                  nativeOn: {\n                    click: function($event) {\n                      return _vm.agree($event)\n                    }\n                  }\n                },\n                [_vm._v("Yes")]\n              ),\n              _vm._v(" "),\n              _c(\n                "v-btn",\n                {\n                  staticClass: "cancel",\n                  attrs: { color: "grey", text: "" },\n                  nativeOn: {\n                    click: function($event) {\n                      return _vm.cancel($event)\n                    }\n                  }\n                },\n                [_vm._v("Cancel")]\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/backend/data/Confirm.vue?vue&type=template&id=161a62be&scoped=true&\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/Confirm.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/**\n * Vuetify Confirm Dialog component\n *\n * Insert component where you want to use it:\n * <confirm ref="confirm"></confirm>\n *\n * Call it:\n * this.$refs.confirm.open(\'Delete\', \'Are you sure?\', { color: \'red\' }).then((confirm) => {})\n * Or use await:\n * if (await this.$refs.confirm.open(\'Delete\', \'Are you sure?\', { color: \'red\' })) {\n *   // yes\n * }\n * else {\n *   // cancel\n * }\n *\n * Alternatively you can place it in main App component and access it globally via this.$root.$confirm\n * <template>\n *   <v-app>\n *     ...\n *     <confirm ref="confirm"></confirm>\n *   </v-app>\n * </template>\n *\n * mounted() {\n *   this.$root.$confirm = this.$refs.confirm.open\n * }\n */\n/* harmony default export */ var Confirmvue_type_script_lang_js_ = ({\n  data: () => ({\n    dialog: false,\n    resolve: null,\n    reject: null,\n    message: null,\n    title: null,\n    options: {\n      color: \'#79C25A\',\n      width: 290,\n      zIndex: 200\n    }\n  }),\n  methods: {\n    open(title, message, options) {\n      this.dialog = true;\n      this.title = title;\n      this.message = message;\n      this.options = Object.assign(this.options, options);\n      return new Promise((resolve, reject) => {\n        this.resolve = resolve;\n        this.reject = reject;\n      });\n    },\n\n    agree() {\n      this.resolve(true);\n      this.dialog = false;\n    },\n\n    cancel() {\n      this.resolve(false);\n      this.dialog = false;\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/backend/data/Confirm.vue?vue&type=script&lang=js&\n /* harmony default export */ var data_Confirmvue_type_script_lang_js_ = (Confirmvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/Confirm.vue?vue&type=style&index=0&id=161a62be&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/backend/data/Confirm.vue?vue&type=style&index=0&id=161a62be&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js\nvar VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules\nvar VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js\nvar VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 9 modules\nvar VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js\nvar VToolbar = __webpack_require__("./node_modules/vuetify/lib/components/VToolbar/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/backend/data/Confirm.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  data_Confirmvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "161a62be",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n\ninstallComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VDialog: VDialog["VDialog"],VSpacer: VGrid["VSpacer"],VToolbar: VToolbar["VToolbar"],VToolbarTitle: VToolbar["VToolbarTitle"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/backend/data/Confirm.vue"\n/* harmony default export */ var Confirm = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/backend/data/Confirm.vue_+_6_modules?')},"./resources/js/components/backend/data/modalRequest.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/data/modalRequest.vue + 4 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/components/backend/data/Confirm.vue (<- Module is referenced from these modules with unsupported syntax: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/dataTables.vue?vue&type=script&lang=js& (referenced with import()), ./resources/js/components/backend lazy ^\.\/.*\.vue$ namespace object (referenced with context element)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/modalRequest.vue?vue&type=template&id=ff77fe1e&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "v-row",\n    { attrs: { justify: "center" } },\n    [\n      _c(\n        "v-dialog",\n        {\n          attrs: { "max-width": "600px", id: "requests" },\n          model: {\n            value: _vm.dialog,\n            callback: function($$v) {\n              _vm.dialog = $$v\n            },\n            expression: "dialog"\n          }\n        },\n        [\n          _c(\n            "v-card",\n            {\n              directives: [\n                {\n                  name: "click-out",\n                  rawName: "v-click-out",\n                  value: _vm.onModal,\n                  expression: "onModal"\n                }\n              ]\n            },\n            [\n              _c("v-card-title", [\n                _c("h3", { staticClass: "headline" }, [\n                  _vm._v("Request details")\n                ])\n              ]),\n              _vm._v(" "),\n              _c(\n                "v-card-text",\n                [\n                  _c(\n                    "v-container",\n                    [\n                      _c(\n                        "v-row",\n                        [\n                          _c(\n                            "v-col",\n                            { attrs: { cols: "12", sm: "6", md: "4" } },\n                            [\n                              _c("p", { staticClass: "header-item" }, [\n                                _vm._v("Time")\n                              ]),\n                              _vm._v(" "),\n                              _c("p", { staticClass: "column-item" }, [\n                                _vm._v(\n                                  _vm._s(\n                                    _vm.$attrs.created_at\n                                      ? _vm.getDate(_vm.$attrs.updated_at)\n                                      : ""\n                                  )\n                                )\n                              ])\n                            ]\n                          )\n                        ],\n                        1\n                      ),\n                      _vm._v(" "),\n                      _c(\n                        "v-row",\n                        [\n                          _c("v-col", { attrs: { cols: "4" } }, [\n                            _c("p", { class: "header-item" }, [\n                              _vm._v(\n                                _vm._s(_vm.type === "call" ? "Page" : _vm.type)\n                              )\n                            ]),\n                            _vm._v(" "),\n                            _c("p", { staticClass: "column-item" }, [\n                              _vm._v(\n                                _vm._s(\n                                  _vm.type === "call"\n                                    ? _vm.$attrs.page\n                                    : _vm.type === "service"\n                                    ? _vm.$attrs.service\n                                    : _vm.$attrs.name\n                                )\n                              )\n                            ])\n                          ]),\n                          _vm._v(" "),\n                          _c("v-col", { attrs: { cols: "4" } }, [\n                            _c("p", { class: "header-item" }, [\n                              _vm._v("Phone number")\n                            ]),\n                            _vm._v(" "),\n                            _c("p", { staticClass: "column-item" }, [\n                              _vm._v(_vm._s(_vm.$attrs.phone))\n                            ])\n                          ]),\n                          _vm._v(" "),\n                          _c("v-col", { attrs: { cols: "4" } }, [\n                            _c("p", { class: "header-item" }, [\n                              _vm._v("Email")\n                            ]),\n                            _vm._v(" "),\n                            _c("p", { staticClass: "column-item" }, [\n                              _vm._v(_vm._s(_vm.$attrs.email))\n                            ])\n                          ])\n                        ],\n                        1\n                      ),\n                      _vm._v(" "),\n                      _c(\n                        "v-row",\n                        [\n                          _c("v-col", { attrs: { cols: "12", sm: "12" } }, [\n                            _c("p", { class: "header-item" }, [\n                              _vm._v("Comment")\n                            ]),\n                            _vm._v(" "),\n                            _c("p", { staticClass: "column-item" }, [\n                              _vm._v(_vm._s(_vm.$attrs.comment))\n                            ])\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              ),\n              _vm._v(" "),\n              _c(\n                "v-card-actions",\n                [\n                  _c("v-spacer"),\n                  _vm._v(" "),\n                  _c(\n                    "v-btn",\n                    {\n                      attrs: { color: "darken-1", text: "", id: "cancel" },\n                      on: { click: _vm.onModal }\n                    },\n                    [_vm._v("\\n                    Cancel\\n                ")]\n                  ),\n                  _vm._v(" "),\n                  _c(\n                    "v-btn",\n                    {\n                      staticClass: "btn-outline-danger",\n                      attrs: { color: "darken-1", text: "", id: "delete" },\n                      on: {\n                        click: function($event) {\n                          return _vm.deleteItem(_vm.id)\n                        }\n                      }\n                    },\n                    [_vm._v("\\n                    Delete\\n                ")]\n                  ),\n                  _vm._v(" "),\n                  _c(\n                    "v-btn",\n                    {\n                      attrs: { color: "darken-1", text: "", id: "archive" },\n                      on: {\n                        click: function($event) {\n                          return _vm.moveToArchive(_vm.id)\n                        }\n                      }\n                    },\n                    [\n                      _vm._v(\n                        "\\n                    To archive\\n                "\n                      )\n                    ]\n                  )\n                ],\n                1\n              ),\n              _vm._v(" "),\n              _c("Confirm", { ref: "confirm" })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/backend/data/modalRequest.vue?vue&type=template&id=ff77fe1e&\n\n// EXTERNAL MODULE: ./resources/js/components/backend/data/Confirm.vue + 6 modules\nvar Confirm = __webpack_require__("./resources/js/components/backend/data/Confirm.vue");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/modalRequest.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nconst Email = () => __webpack_require__.e(/*! import() */ "chunk-21").then(__webpack_require__.bind(null, /*! ../requests/email/Email */ "./resources/js/components/backend/requests/email/Email.vue"));\n\n/* harmony default export */ var modalRequestvue_type_script_lang_js_ = ({\n  props: {\n    open: Boolean,\n    type: String,\n    id: Number,\n    headings: String,\n    route: String\n  },\n  components: {\n    Confirm: Confirm["default"],\n    Email\n  },\n  data: () => {\n    return {\n      dialog: false,\n      updated: false,\n      email: null,\n      deleteModal: false\n    };\n  },\n\n  created() {},\n\n  mounted() {\n    console.log(this.type);\n    this.dialog = this.open;\n\n    switch (this.type) {\n      case \'product\':\n        this.$store.dispatch(\'productRequest\', this.id);\n        break;\n\n      case \'service\':\n        this.$store.dispatch(\'serviceRequest\', this.id);\n        break;\n\n      case \'call\':\n        this.$store.dispatch(\'callRequest\', this.id);\n        break;\n    }\n  },\n\n  methods: {\n    onModal() {\n      if (!this.deleteModal) {\n        this.$emit(\'offvalue\', false);\n        this.$parent.$data.id = null;\n      }\n    },\n\n    getDate(str) {\n      let date = \'\' + str.replace(/[-?]/g, \'/\').replace(\'T\', \' \');\n      let result = date.split(\':\');\n      let time = [];\n      result.pop();\n      result[0].split(\'/\').forEach(e => {\n        time.push(e.split(\' \')[0]);\n      });\n      let temp = time[0];\n      time[0] = time[2];\n      time[2] = temp;\n      return time.join(\'/\');\n    },\n\n    deleteItem(id) {\n      this.deleteModal = true;\n      this.$refs.confirm.open(\'Delete\', \'Are you sure?\', {\n        color: \'red\'\n      }).then(confirm => {\n        if (confirm) {\n          axios.post(\'/admin/request-delete\', {\n            id: id,\n            type: this.type\n          }).then(response => {\n            this.$store.dispatch(this.type + \'Request\');\n            this.dialog = false;\n            this.updated = true;\n            this.deleteModal = false;\n\n            switch (this.type) {\n              case \'product\':\n                this.$store.dispatch(\'productRequests\');\n                break;\n\n              case \'service\':\n                this.$store.dispatch(\'serviceRequests\');\n                break;\n\n              case \'call\':\n                this.$store.dispatch(\'callRequests\');\n                break;\n            }\n          });\n        }\n      });\n    },\n\n    moveToArchive(id) {\n      switch (this.type) {\n        case \'product\':\n          axios.post(\'/admin/request-products\', {\n            id: id\n          }).then(response => {\n            this.$store.dispatch(\'productRequests\');\n            this.dialog = false;\n            this.updated = true;\n          });\n          break;\n\n        case \'service\':\n          axios.post(\'/admin/request-services\', {\n            id: id\n          }).then(response => {\n            this.$store.dispatch(\'serviceRequests\');\n            this.dialog = false;\n            this.updated = true;\n          });\n          break;\n\n        case \'call\':\n          axios.post(\'/admin/request-calls\', {\n            id: id\n          }).then(response => {\n            this.$store.dispatch(\'callRequests\');\n            this.dialog = false;\n            this.updated = true;\n          });\n          break;\n      }\n    },\n\n    emailRender() {\n      this.email = this.$attrs.email;\n      this.$parent.$data.open = false;\n      this.$parent.$data.isEmail = true;\n      this.$parent.$data.email = this.email;\n    }\n\n  },\n  computed: {},\n  watch: {\n    open(val, old) {\n      val ? this.dialog = true : this.dialog = false;\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/backend/data/modalRequest.vue?vue&type=script&lang=js&\n /* harmony default export */ var data_modalRequestvue_type_script_lang_js_ = (modalRequestvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js\nvar VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules\nvar VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 9 modules\nvar VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js\nvar VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/backend/data/modalRequest.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  data_modalRequestvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n\n\n\ninstallComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VContainer: VGrid["VContainer"],VDialog: VDialog["VDialog"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/backend/data/modalRequest.vue"\n/* harmony default export */ var modalRequest = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/backend/data/modalRequest.vue_+_4_modules?')}}]);