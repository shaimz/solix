(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-4"],{"./resources/js/components/public/blog/Article.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/public/blog/Article.vue + 4 modules ***!
  \*********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VApp/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuex/dist/vuex.esm.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.dataFetched\n    ? _c("v-app", { attrs: { id: "singleProject" } }, [\n        _c(\n          "div",\n          { staticClass: "row col-12 top-header py-0 justify-content-center" },\n          [\n            _c(\n              "div",\n              {\n                staticClass: "col-xl-7 col-xs-12 row flex-column padding-125",\n                attrs: { id: "header" }\n              },\n              [\n                _c("breadcrumbs", {\n                  attrs: { color: "light", items: _vm.breadcrumb }\n                }),\n                _vm._v(" "),\n                _c("div", { staticClass: "header-text text-white" }, [\n                  _vm.item.translates\n                    ? _c("h1", [_vm._v(_vm._s(_vm.item.translates.name))])\n                    : _vm._e()\n                ])\n              ],\n              1\n            )\n          ]\n        ),\n        _vm._v(" "),\n        _c(\n          "div",\n          {\n            staticClass:\n              "col-xl-7 col-xs-12 m-auto d-flex single-description padding-125"\n          },\n          [\n            _c(\n              "div",\n              { staticClass: "socials d-flex flex-column mr-8" },\n              [\n                _c(\n                  "ShareNetwork",\n                  {\n                    attrs: {\n                      network: "facebook",\n                      url: _vm.currentUrl(_vm.$route.fullPath),\n                      title: _vm.item.translates.name,\n                      description: _vm.item.translates.description\n                    }\n                  },\n                  [\n                    _c("img", {\n                      attrs: { src: _vm.images.facebook },\n                      on: {\n                        mouseover: function($event) {\n                          _vm.images.facebook = _vm.images.facebookOver\n                        },\n                        mouseleave: function($event) {\n                          _vm.images.facebook = _vm.images.facebook_default\n                        }\n                      }\n                    })\n                  ]\n                ),\n                _vm._v(" "),\n                _c("ShareByEmail", {\n                  attrs: {\n                    item: _vm.item.translates,\n                    path: _vm.currentUrl(_vm.$route.fullPath)\n                  }\n                }),\n                _vm._v(" "),\n                _c(\n                  "a",\n                  {\n                    ref: "path",\n                    attrs: { href: "#" },\n                    on: {\n                      click: function($event) {\n                        $event.preventDefault()\n                        _vm.copy(_vm.item, _vm.currentUrl(_vm.$route.fullPath))\n                      }\n                    }\n                  },\n                  [\n                    _c("img", {\n                      attrs: { src: _vm.images.link },\n                      on: {\n                        mouseover: function($event) {\n                          _vm.images.link = _vm.images.linkOver\n                        },\n                        mouseleave: function($event) {\n                          _vm.images.link = _vm.images.link_default\n                        }\n                      }\n                    })\n                  ]\n                )\n              ],\n              1\n            ),\n            _vm._v(" "),\n            _c("div", { staticClass: "description col-md-10" }, [\n              _c("p", {\n                domProps: { innerHTML: _vm._s(_vm.item.translates.description) }\n              })\n            ])\n          ]\n        ),\n        _vm._v(" "),\n        _c(\n          "div",\n          { attrs: { id: "more-items" } },\n          [\n            _c("more-items", {\n              attrs: { show: "2", type: "news", lang: _vm.language }\n            })\n          ],\n          1\n        ),\n        _vm._v(" "),\n        _c(\n          "div",\n          {\n            staticClass: "justify-content-center px-0 padding-125",\n            attrs: { id: "discount" }\n          },\n          [_c("Discount", _vm._g({}, _vm.$listeners))],\n          1\n        )\n      ])\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/blog/Article.vue?vue&type=template&id=6cd3c7d4&scoped=true&\n\n// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js\nvar vuex_esm = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__("./resources/js/event/eventbus.js");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nconst ShareByEmail = () => __webpack_require__.e(/*! import() */ "frontend-chunk-20").then(__webpack_require__.bind(null, /*! ../includes/ShareEmail */ "./resources/js/components/public/includes/ShareEmail.vue"));\n\nconst Breadcrumbs = () => __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));\n\n\n\n\nconst MoreItems = () => __webpack_require__.e(/*! import() */ "frontend-chunk-31").then(__webpack_require__.bind(null, /*! ../includes/moreItems */ "./resources/js/components/public/includes/moreItems.vue"));\n\n\n\nconst Discount = () => __webpack_require__.e(/*! import() */ "frontend-chunk-24").then(__webpack_require__.bind(null, /*! ../includes/discount/Discount */ "./resources/js/components/public/includes/discount/Discount.vue"));\n\n/* harmony default export */ var Articlevue_type_script_lang_js_ = ({\n  name: \'Article\',\n  components: {\n    ShareByEmail,\n    Discount,\n    MoreItems,\n    Breadcrumbs\n  },\n\n  data() {\n    return {\n      language: this.$store.getters.getPublicLanguage.code === \'en\' ? 1 : this.$store.getters.getPublicLanguage.code === \'ru\' ? 3 : 2,\n      dataFetched: false,\n      open: false,\n      images: {\n        facebook_default: "/assets/components/projects/project/fb.jpg",\n        facebook: "/assets/components/projects/project/fb.jpg",\n        facebookOver: "/assets/icons/facebook.svg",\n        link_default: "/assets/components/projects/project/link.jpg",\n        link: "/assets/components/projects/project/link.jpg",\n        linkOver: "/assets/icons/link.svg",\n        email_default: "/assets/components/projects/project/link.jpg",\n        email: "/assets/components/projects/project/link.jpg",\n        emailOver: "/assets/icons/link.svg"\n      }\n    };\n  },\n\n  mounted() {\n    eventbus["bus"].$emit(\'theme\', \'dark\');\n    eventbus["bus"].$emit(\'position\', \'absolute\');\n    this.$store.dispatch(\'singleNews\', {\n      id: this.$route.params.id,\n      lang: this.language\n    }).then(() => {\n      this.dataFetched = true;\n    });\n  },\n\n  computed: { ...Object(vuex_esm["mapGetters"])({\n      item: \'getSingleNews\'\n    }),\n\n    breadcrumb() {\n      return [{\n        name: \'news\',\n        label: this.$t(\'news.title\')\n      }, {\n        name: \'Article\',\n        news_id: this.$route.params.id\n      }];\n    }\n\n  },\n  methods: {\n    currentUrl(route) {\n      return location.scheme + \'//\' + location.hostname + route;\n    },\n\n    copy(data, path) {\n      document.addEventListener(\'copy\', function (e) {\n        e.clipboardData.setData(\'text/plain\', path);\n        e.preventDefault();\n      }, true);\n      document.execCommand(\'copy\');\n    }\n\n  },\n  watch: {\n    language() {\n      this.language = this.$store.getters.getPublicLanguage.code === \'en\' ? 1 : this.$store.getters.getPublicLanguage.code === \'ru\' ? 3 : 2;\n    },\n\n    open(newVal, oldVal) {\n      if (oldVal !== newVal) this.$emit(\'openModal\', {\n        value: newVal\n      });\n    },\n\n    dataFetched(n, o) {\n      if (n) {\n        $(\'head\').append(\'<meta property="og:url"                content="\' + location.protocol + \'//\' + location.hostname + this.$route.fullPath + \'" />\\n\' + \'<meta property="og:type"               content="article" />\\n\' + \'<meta property="og:title"              content="\' + this.item.translates.name + \'" />\\n\' + \'<meta property="og:description"        content="\' + this.item.translates.description + \'" />\\n\' + \'<meta property="og:image"              content="\' + this.item.image + \'" />\');\n      }\n    },\n\n    $route(to) {\n      this.dataFetched = true;\n\n      if (to.path.includes(\'news\')) {\n        eventbus["bus"].$emit(\'theme\', \'dark\');\n      }\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/public/blog/Article.vue?vue&type=script&lang=js&\n /* harmony default export */ var blog_Articlevue_type_script_lang_js_ = (Articlevue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/index.js + 2 modules\nvar VApp = __webpack_require__("./node_modules/vuetify/lib/components/VApp/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/blog/Article.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  blog_Articlevue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "6cd3c7d4",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\ninstallComponents_default()(component, {VApp: VApp["VApp"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/blog/Article.vue"\n/* harmony default export */ var Article = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/blog/Article.vue_+_4_modules?')}}]);