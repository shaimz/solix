(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-48"],{"./resources/js/components/public/services/Services.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/public/services/Services.vue + 6 modules ***!
  \**************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VApp/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/services/Services.vue?vue&type=template&id=610f7bb4&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "v-app",\n    { attrs: { id: "services" } },\n    [\n      _c(\n        "div",\n        {\n          staticClass:\n            "row col-12 top-header justify-content-center padding-125"\n        },\n        [\n          _c(\n            "div",\n            {\n              staticClass: "col-lg-11 col-xl-7 col-11 row flex-column",\n              attrs: { id: "header" }\n            },\n            [\n              _c("crumbs", { attrs: { color: "light" } }),\n              _vm._v(" "),\n              _c("div", { staticClass: "header-text text-white" }, [\n                _c("h1", [_vm._v(_vm._s(_vm.$t("services.title")))]),\n                _vm._v(\n                  "\\n                " + _vm._s(_vm.$t("")) + "\\n            "\n                )\n              ])\n            ],\n            1\n          )\n        ]\n      ),\n      _vm._v(" "),\n      _c("all-services", { attrs: { show: "12" } }),\n      _vm._v(" "),\n      _c("contacts-new")\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/services/Services.vue?vue&type=template&id=610f7bb4&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__("./resources/js/event/eventbus.js");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/services/Services.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nconst AllServices = () => __webpack_require__.e(/*! import() */ "frontend-chunk-19").then(__webpack_require__.bind(null, /*! ../includes/Services/Services */ "./resources/js/components/public/includes/Services/Services.vue"));\n\n\n\nconst Crumbs = () => __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));\n\nconst ContactsNew = () => Promise.all(/*! import() */[__webpack_require__.e("frontend-chunk-10~frontend-chunk-11~frontend-chunk-14"), __webpack_require__.e("frontend-chunk-11")]).then(__webpack_require__.bind(null, /*! ../includes/Contacts/ContactsNew */ "./resources/js/components/public/includes/Contacts/ContactsNew.vue"));\n\n/* harmony default export */ var Servicesvue_type_script_lang_js_ = ({\n  name: \'Services\',\n  components: {\n    ContactsNew,\n    Crumbs,\n    AllServices\n  },\n\n  data() {\n    return {};\n  },\n\n  mounted() {\n    eventbus["bus"].$emit(\'position\', \'absolute\');\n    eventbus["bus"].$emit(\'theme\', \'dark\');\n  }\n\n});\n// CONCATENATED MODULE: ./resources/js/components/public/services/Services.vue?vue&type=script&lang=js&\n /* harmony default export */ var services_Servicesvue_type_script_lang_js_ = (Servicesvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/services/Services.vue?vue&type=style&index=0&id=610f7bb4&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/services/Services.vue?vue&type=style&index=0&id=610f7bb4&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js\nvar installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");\nvar installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);\n\n// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/index.js + 2 modules\nvar VApp = __webpack_require__("./node_modules/vuetify/lib/components/VApp/index.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/services/Services.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  services_Servicesvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "610f7bb4",\n  null\n  \n)\n\n/* vuetify-loader */\n\n\ninstallComponents_default()(component, {VApp: VApp["VApp"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/services/Services.vue"\n/* harmony default export */ var Services = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/services/Services.vue_+_6_modules?')}}]);