(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-16"],{"./resources/js/components/public/includes/Partners/Partners.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/public/includes/Partners/Partners.vue + 6 modules ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/width.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "div",\n    { staticClass: "m-auto col-lg-11 col-xl-7 col-md-11 col-11 text-white" },\n    [\n      _c(\n        "div",\n        {\n          staticClass:\n            "d-lg-flex d-xs-block mx-auto py-0 px-0 position-relative"\n        },\n        [\n          _c(\n            "h2",\n            {\n              staticClass:\n                "col-xl-8 col-md-10 text-xs-center text-lg-left px-0 mb-6"\n            },\n            [_vm._v(_vm._s(_vm.$t("home.partners.title")))]\n          ),\n          _vm._v(" "),\n          _c("div", { staticClass: "col-xl-4 col-md-2 next-prev-icons" }, [\n            _c(\n              "a",\n              {\n                staticClass: "carousel-control-prev",\n                attrs: {\n                  href: "#carousel-partners",\n                  role: "button",\n                  "data-slide": "prev"\n                },\n                on: { click: function($event) {} }\n              },\n              [\n                _c("span", {\n                  staticClass: "carousel-control-prev-icon",\n                  attrs: { "aria-hidden": "true" }\n                }),\n                _vm._v(" "),\n                _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])\n              ]\n            ),\n            _vm._v(" "),\n            _vm._m(0)\n          ])\n        ]\n      ),\n      _vm._v(" "),\n      !_vm.xsmall && _vm.render\n        ? _c(\n            "div",\n            {\n              staticClass: "carousel carousel-fade",\n              attrs: { id: "carousel-partners", "data-interval": "false" }\n            },\n            [\n              _c(\n                "div",\n                { staticClass: "carousel-inner" },\n                _vm._l(_vm.renderRow(_vm.$t("home.partners.cards")), function(\n                  row,\n                  index\n                ) {\n                  return _c(\n                    "div",\n                    {\n                      class: [\n                        "d-grid grid-columns-3 grid-column-gap-4 grid-row-gap-4 carousel-item",\n                        !index ? "active" : ""\n                      ]\n                    },\n                    _vm._l(row, function(card, i) {\n                      return _c("div", { staticClass: "card" }, [\n                        _c("img", {\n                          staticClass: "card-img-top w-50",\n                          attrs: { src: card.image }\n                        }),\n                        _vm._v(" "),\n                        _c("div", { staticClass: "card-body text-center" }, [\n                          _c("h5", [_vm._v(_vm._s(card.title))])\n                        ])\n                      ])\n                    }),\n                    0\n                  )\n                }),\n                0\n              )\n            ]\n          )\n        : _c(\n            "div",\n            {\n              staticClass: "mobile-carousel",\n              attrs: { "data-ride": "carousel" }\n            },\n            _vm._l(_vm.$t("home.partners.cards"), function(card, index) {\n              return _c("div", { staticClass: "card" }, [\n                _c("img", {\n                  staticClass: "card-img-top w-50",\n                  attrs: { src: card.image }\n                }),\n                _vm._v(" "),\n                _c("div", { staticClass: "card-body text-center" }, [\n                  _c("h5", [_vm._v(_vm._s(card.title))])\n                ])\n              ])\n            }),\n            0\n          )\n    ]\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      "a",\n      {\n        staticClass: "carousel-control-next",\n        attrs: {\n          href: "#carousel-partners",\n          role: "button",\n          "data-slide": "next"\n        }\n      },\n      [\n        _c("span", {\n          staticClass: "carousel-control-next-icon",\n          attrs: { "aria-hidden": "true" }\n        }),\n        _vm._v(" "),\n        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Partners/Partners.vue?vue&type=template&id=84f37114&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/width.js\nvar width = __webpack_require__("./resources/js/width.js");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ var Partnersvue_type_script_lang_js_ = ({\n  name: \'Partners\',\n\n  data() {\n    return {\n      render: true\n    };\n  },\n\n  created() {\n    this.$store.dispatch(\'projects\', {\n      lang: this.lang_id,\n      limit: 20,\n      offset: 0\n    });\n  },\n\n  computed: {\n    lang_id() {\n      return this.$router.currentRoute.path.includes(\'en\') ? 1 : this.$router.currentRoute.path.includes(\'ru\') ? 3 : 2;\n    },\n\n    projects() {\n      return this.$store.state.projects;\n    },\n\n    xsmall() {\n      return width["default"].data.xsmall;\n    },\n\n    small() {\n      return width["default"].data.small;\n    }\n\n  },\n\n  mounted() {\n    if (!this.xsmall) {\n      this.render = true;\n    }\n  },\n\n  methods: {\n    renderRow(data) {\n      let items = [];\n      let chunk_size = this.small && !this.xsmall ? 4 : 6;\n      let pre_items = [];\n\n      for (var i in data) {\n        let j = parseInt(i) + 1;\n        pre_items.push(data[i]);\n\n        if (j % chunk_size === 0) {\n          items.push(pre_items);\n          pre_items = [];\n        }\n      }\n\n      if (!items.length && pre_items.length) {\n        items.push(pre_items);\n      }\n\n      return items;\n    }\n\n  },\n  watch: {\n    xsmall(newVal, oldVal) {\n      if (!newVal) {\n        setTimeout(() => {\n          this.render = true;\n        }, 500);\n      } else {\n        this.render = false;\n      }\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Partners/Partners.vue?vue&type=script&lang=js&\n /* harmony default export */ var Partners_Partnersvue_type_script_lang_js_ = (Partnersvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Partners/Partners.vue?vue&type=style&index=0&id=84f37114&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/includes/Partners/Partners.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  Partners_Partnersvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "84f37114",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/includes/Partners/Partners.vue"\n/* harmony default export */ var Partners = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/includes/Partners/Partners.vue_+_6_modules?')}}]);