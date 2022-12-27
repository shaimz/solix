(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15"],{"./resources/js/components/backend/products/Products.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/products/Products.vue + 4 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/event/eventbus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"all-product-page\", attrs: { id: \"single-page\" } },\n    [\n      _c(\"Navbar\", { attrs: { heading: this.title } }),\n      _vm._v(\" \"),\n      _c(\"dataTables\", {\n        attrs: {\n          lang: _vm.lang,\n          numberPage: _vm.page,\n          add: \"Product\",\n          \"page-type\": \"products\",\n          heading: this.title,\n          categories: _vm.categories,\n          headings: _vm.headers,\n          items: _vm.items\n        },\n        on: { page: _vm.setPage, statusUpdated: _vm.dispatchItems }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e&\n\n// EXTERNAL MODULE: ./resources/js/event/eventbus.js\nvar eventbus = __webpack_require__(\"./resources/js/event/eventbus.js\");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n\n\nconst Navbar = () => __webpack_require__.e(/*! import() */ \"chunk-7\").then(__webpack_require__.bind(null, /*! ../includes/Navbar */ \"./resources/js/components/backend/includes/Navbar.vue\"));\n\nconst dataTables = () => __webpack_require__.e(/*! import() */ \"chunk-5\").then(__webpack_require__.bind(null, /*! ../data/dataTables */ \"./resources/js/components/backend/data/dataTables.vue\"));\n\n/* harmony default export */ var Productsvue_type_script_lang_js_ = ({\n  name: 'productsPage',\n  props: {\n    title: String\n  },\n  components: {\n    Navbar,\n    dataTables\n  },\n\n  data() {\n    return {\n      headers: [{\n        text: 'Type',\n        sortable: false,\n        align: 'left',\n        value: 'type'\n      }, {\n        text: 'Product',\n        sortable: false,\n        value: 'name'\n      }, {\n        text: 'Available',\n        sortable: false,\n        value: 'available'\n      }, {\n        text: 'Set number',\n        sortable: false,\n        value: 'sku'\n      }, {\n        text: 'Price',\n        sortable: false,\n        value: 'price'\n      }, {\n        text: '',\n        sortable: false,\n        value: 'controls'\n      }],\n      open: false,\n      lang: 0,\n      items: [],\n      page: 0,\n      categories: []\n    };\n  },\n\n  mounted() {\n    this.lang = Vue.prototype.$lang;\n  },\n\n  created() {\n    eventbus[\"bus\"].$on('discard', val => {\n      this.setPage(val);\n    });\n    this.$store.dispatch('categories', {\n      lang_id: 2\n    }).then(() => {\n      this.categories = this.$store.getters.getCategories;\n      this.categories.unshift({\n        id: 0,\n        data: {\n          name: 'All products'\n        }\n      });\n    });\n    this.dispatchItems();\n  },\n\n  computed: {},\n  methods: {\n    setPage(val) {\n      this.page = val;\n    },\n\n    dispatchItems() {\n      this.$store.dispatch('products', {\n        length: 0,\n        offset: 0\n      }).then(() => {\n        this.showProducts();\n      });\n    },\n\n    langChange() {\n      this.lang = 3;\n    },\n\n    showProducts() {\n      let products = this.$store.getters.getProducts;\n      let data = [];\n\n      if (products) {\n        if (Array.isArray(products)) {\n          products.forEach(item => {\n            if (item.name) {\n              data.push({\n                value: true,\n                type: item.type,\n                name: item.name,\n                available: item.available,\n                sku: item.sku,\n                price: item.price + ' EUR',\n                id: item.id\n              });\n            }\n          });\n        } else {\n          data.push({\n            value: false,\n            type: products.type,\n            name: products.name,\n            available: products.available,\n            sku: products.sku,\n            price: products.price,\n            id: products.id\n          });\n        }\n\n        this.items = data;\n      }\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js&\n /* harmony default export */ var products_Productsvue_type_script_lang_js_ = (Productsvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(\"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n// CONCATENATED MODULE: ./resources/js/components/backend/products/Products.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer[\"default\"])(\n  products_Productsvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/backend/products/Products.vue\"\n/* harmony default export */ var Products = __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/backend/products/Products.vue_+_4_modules?")}}]);