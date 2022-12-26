(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3"],{"./resources/js/components/backend/careers/Careers.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/backend/careers/Careers.vue + 4 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/careers/Careers.vue?vue&type=template&id=5e306345&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"single-page\" } },\n    [\n      _c(\"Navbar\", { attrs: { heading: this.title } }),\n      _vm._v(\" \"),\n      _c(\"dataTables\", {\n        attrs: {\n          lang: _vm.lang,\n          add: \"Careers\",\n          \"page-type\": \"careers\",\n          heading: this.title,\n          headings: _vm.headers,\n          items: _vm.items\n        },\n        on: { statusUpdated: _vm.dispatchItems }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/backend/careers/Careers.vue?vue&type=template&id=5e306345&\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/careers/Careers.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\nconst Navbar = () => __webpack_require__.e(/*! import() */ \"chunk-7\").then(__webpack_require__.bind(null, /*! ../includes/Navbar */ \"./resources/js/components/backend/includes/Navbar.vue\"));\n\nconst dataTables = () => __webpack_require__.e(/*! import() */ \"chunk-5\").then(__webpack_require__.bind(null, /*! ../data/dataTables */ \"./resources/js/components/backend/data/dataTables.vue\"));\n\n/* harmony default export */ var Careersvue_type_script_lang_js_ = ({\n  name: 'Careers',\n  components: {\n    Navbar,\n    dataTables\n  },\n  props: {\n    title: String\n  },\n\n  data() {\n    return {\n      headers: [{\n        text: 'Name',\n        sortable: false,\n        value: 'name'\n      }, {\n        text: 'Visibility',\n        sortable: false,\n        value: 'status'\n      }, {\n        text: 'Location',\n        sortable: false,\n        value: 'location'\n      }, {\n        text: 'Description',\n        sortable: false,\n        value: 'description'\n      }, {\n        text: 'Created',\n        sortable: false,\n        value: 'date'\n      }, {\n        text: '',\n        sortable: false,\n        value: 'controls'\n      }],\n      open: false,\n      lang: 0,\n      render: false,\n      items: []\n    };\n  },\n\n  mounted() {\n    this.lang = Vue.prototype.$lang;\n  },\n\n  created() {\n    this.showCareers();\n  },\n\n  computed: {},\n  methods: {\n    langChange() {\n      this.lang = 3;\n    },\n\n    showCareers() {\n      let data = [];\n      this.$store.dispatch('careers', {\n        lang_id: [1, 2, 3]\n      }).then(() => {\n        let careers = this.$store.getters.getCareers;\n\n        if (Array.isArray(careers)) {\n          careers.forEach(item => {\n            if (item.backend_data[0]) {\n              data.push({\n                value: true,\n                name: item.backend_data[0].name,\n                location: item.backend_data[0].location,\n                status: item.status,\n                description: item.backend_data[0].description,\n                date: this.getDate(item.created_at),\n                id: item.id\n              });\n            }\n          });\n        } else {\n          data.push({\n            value: false,\n            name: careers.backend_data[0].name,\n            location: careers.backend_data[0].location,\n            status: careers.available,\n            date: this.getDate(careers.created_at),\n            description: careers.backend_data[0].description,\n            id: careers.id\n          });\n        }\n      });\n      this.render = true;\n      this.items = data;\n    },\n\n    getDate(str) {\n      let date = '' + str.replace(/[-?]/g, '/').replace('T', ' ');\n      let result = date.split(':');\n      let time = [];\n      result.pop();\n      result[0].split('/').forEach(e => {\n        time.push(e.split(' ')[0]);\n      });\n      let temp = time[0];\n      time[0] = time[2];\n      time[2] = temp;\n      return time.join('/');\n    },\n\n    dispatchItems() {\n      this.showCareers();\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/backend/careers/Careers.vue?vue&type=script&lang=js&\n /* harmony default export */ var careers_Careersvue_type_script_lang_js_ = (Careersvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(\"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n// CONCATENATED MODULE: ./resources/js/components/backend/careers/Careers.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer[\"default\"])(\n  careers_Careersvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/backend/careers/Careers.vue\"\n/* harmony default export */ var Careers = __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/backend/careers/Careers.vue_+_4_modules?")}}]);