(window.webpackJsonp=window.webpackJsonp||[]).push([["frontend-chunk-8"],{"./resources/js/components/public/contacts/Contacts.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/public/contacts/Contacts.vue + 6 modules ***!
  \**************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/contacts/Contacts.vue?vue&type=template&id=4d726158&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.render\n    ? _c("div", { attrs: { id: "contacts" } }, [\n        _c(\n          "div",\n          { staticClass: "col-lg-11 col-xl-7 col-12 mx-auto my-3" },\n          [\n            _c("crumbs", { attrs: { color: "dark" } }),\n            _vm._v(" "),\n            _c("Contact")\n          ],\n          1\n        )\n      ])\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/public/contacts/Contacts.vue?vue&type=template&id=4d726158&scoped=true&\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__("./resources/js/event/eventbus.js");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/contacts/Contacts.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\nconst Crumbs = () => __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));\n\n\n\nconst Contact = () => Promise.all(/*! import() */[__webpack_require__.e("frontend-chunk-10~frontend-chunk-11~frontend-chunk-14"), __webpack_require__.e("frontend-chunk-10")]).then(__webpack_require__.bind(null, /*! ../includes/Contacts/Contacts */ "./resources/js/components/public/includes/Contacts/Contacts.vue"));\n\n/* harmony default export */ var Contactsvue_type_script_lang_js_ = ({\n  name: \'Contacts\',\n  components: {\n    Contact,\n    Crumbs\n  },\n\n  data() {\n    return {\n      render: true,\n      form: []\n    };\n  },\n\n  created() {\n    eventbus["bus"].$emit(\'theme\', \'light\');\n    eventbus["bus"].$emit(\'position\', \'relative\');\n  },\n\n  mounted() {},\n\n  methods: {}\n});\n// CONCATENATED MODULE: ./resources/js/components/public/contacts/Contacts.vue?vue&type=script&lang=js&\n /* harmony default export */ var contacts_Contactsvue_type_script_lang_js_ = (Contactsvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/contacts/Contacts.vue?vue&type=style&index=0&id=4d726158&scoped=true&lang=css&\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./resources/js/components/public/contacts/Contacts.vue?vue&type=style&index=0&id=4d726158&scoped=true&lang=css&\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n// CONCATENATED MODULE: ./resources/js/components/public/contacts/Contacts.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["default"])(\n  contacts_Contactsvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "4d726158",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "resources/js/components/public/contacts/Contacts.vue"\n/* harmony default export */ var Contacts = __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/public/contacts/Contacts.vue_+_6_modules?')}}]);