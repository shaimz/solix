(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-5"],{"./resources/js/components/public/blog/News.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/public/blog/News.vue + 6 modules ***!
  \******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VApp/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/width.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/blog/News.vue?vue&type=template&id=f779c336&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "v-app",\n    { staticClass: "padding-125", attrs: { id: "newsPage" } },\n    [\n      _c(\n        "div",\n        { staticClass: "row col-12 top-header justify-content-center" },\n        [\n          _c(\n            "div",\n            {\n              staticClass: "col-xl-7 col-lg-11 col-11 row flex-column",\n              attrs: { id: "header" }\n            },\n            [\n              _c("breadcrumbs", { attrs: { color: "dark" } }),\n              _vm._v(" "),\n              _c("div", { staticClass: "header-text text-dark" }, [\n                _c("h1", [_vm._v(_vm._s(_vm.$t("news.title")))])\n              ])\n            ],\n            1\n          )\n        ]\n      ),\n      _vm._v(" "),\n      _c(\n        "div",\n        { attrs: { id: "news" } },\n        [\n          _c("AllNews", {\n            key: _vm.show,\n            attrs: { show: _vm.show, lang: _vm.language }\n          })\n        ],\n        1\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/blog/News.vue?vue&type=template&id=f779c336&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/width.js\nvar width = __webpack_require__("./resources/js/width.js");\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__("./resources/js/event/eventbus.js");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/blog/News.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nconst Breadcrumbs = () => __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));\n\nconst AllNews = () => Promise.all(/*! import() */[__webpack_require__.e("vendors~frontend-chunk-15"), __webpack_require__.e("frontend-chunk-15")]).then(__webpack_require__.bind(null, /*! ../includes/News/News */ "./resources/js/components/public/includes/News/News.vue"));\n\nconst Map = () => Promise.all(/*! import() */[__webpack_require__.e("vendors~frontend-chunk-13"), __webpack_require__.e("frontend-chunk-13")]).then(__webpack_require__.bind(null, /*! ../includes/Map/Map */ "./resources/js/components/public/includes/Map/Map.vue"));\n\nconst Discount = () => __webpack_require__.e(/*! import() */ "frontend-chunk-24").then(__webpack_require__.bind(null, /*! ../includes/discount/Discount */ "./resources/js/components/public/includes/discount/Discount.vue"));\n\n\n/* harmony default export */ var Newsvue_type_script_lang_js_ = ({\n  name: \'News\',\n  components: {\n    Discount,\n    Map,\n    Breadcrumbs,\n    AllNews\n  },\n\n  data() {\n    return {\n      language: this.$route.params.locale === \'en\' ? 1 : this.$route.params.locale === \'ru\' ? 3 : 2,\n      open: false,\n      show: 3\n    };\n  },\n\n  computed: {\n    items() {\n      return this.$store.getters.getNews;\n    },\n\n    medium() {\n      return width["default"].data.medium;\n    }\n\n  },\n\n  mounted() {\n    eventbus["bus"].$emit(\'theme\', \'light\');\n    eventbus["bus"].$emit(\'position\', \'relative\');\n  },\n\n  methods: {\n    modal(val) {\n      this.open = val;\n    }\n\n  },\n  watch: {\n    medium: {\n      handler(n, o) {\n        if (n) {\n          this.show = 2;\n        }\n      },\n\n      immediate: true\n    },\n    large: {\n      handler(n, o) {\n        if (n) {\n          this.show = 3;\n        }\n      },\n\n      immediate: true\n    }\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/public/blog/News.vue?vue&type=script&lang=js&\n /* harmony default export */ var blog_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/blog/News.vue?vue&type=style&index=0&id=f779c336&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/blog/News.vue?vue&type=style&index=0&id=f779c336&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/index.js + 2 modules\nvar VApp = __webpack_require__("./node_modules/vuetify/lib/components/VApp/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/blog/News.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  blog_Newsvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "f779c336",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\ninstallComponents_default()(component, {VApp: VApp["VApp"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/blog/News.vue"\n/* harmony default export */ var News = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/blog/News.vue_+_6_modules?')}}]);