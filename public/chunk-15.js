(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-15"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/eventbus */ "./resources/js/event/eventbus.js");
//
//
//
//
//
//
//


var Navbar = function Navbar() {
  return __webpack_require__.e(/*! import() */ "chunk-7").then(__webpack_require__.bind(null, /*! ../includes/Navbar */ "./resources/js/components/backend/includes/Navbar.vue"));
};

var dataTables = function dataTables() {
  return __webpack_require__.e(/*! import() */ "chunk-5").then(__webpack_require__.bind(null, /*! ../data/dataTables */ "./resources/js/components/backend/data/dataTables.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'productsPage',
  props: {
    title: String
  },
  components: {
    Navbar: Navbar,
    dataTables: dataTables
  },
  data: function data() {
    return {
      headers: [{
        text: 'Type',
        sortable: false,
        align: 'left',
        value: 'type'
      }, {
        text: 'Product',
        sortable: false,
        value: 'name'
      }, {
        text: 'Available',
        sortable: false,
        value: 'available'
      }, {
        text: 'Set number',
        sortable: false,
        value: 'sku'
      }, {
        text: 'Price',
        sortable: false,
        value: 'price'
      }, {
        text: '',
        sortable: false,
        value: 'controls'
      }],
      open: false,
      lang: 0,
      items: [],
      page: 0,
      categories: []
    };
  },
  mounted: function mounted() {
    this.lang = Vue.prototype.$lang;
  },
  created: function created() {
    var _this = this;

    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$on('discard', function (val) {
      _this.setPage(val);
    });
    this.$store.dispatch('categories', {
      lang_id: 2
    }).then(function () {
      _this.categories = _this.$store.getters.getCategories;

      _this.categories.unshift({
        id: 0,
        data: {
          name: 'All products'
        }
      });
    });
    this.dispatchItems();
  },
  computed: {},
  methods: {
    setPage: function setPage(val) {
      this.page = val;
    },
    dispatchItems: function dispatchItems() {
      var _this2 = this;

      this.$store.dispatch('products', {
        length: 0,
        offset: 0
      }).then(function () {
        _this2.showProducts();
      });
    },
    langChange: function langChange() {
      this.lang = 3;
    },
    showProducts: function showProducts() {
      var products = this.$store.getters.getProducts;
      var data = [];

      if (products) {
        if (Array.isArray(products)) {
          products.forEach(function (item) {
            if (item.name) {
              data.push({
                value: true,
                type: item.type,
                name: item.name,
                available: item.available,
                sku: item.sku,
                price: item.price + ' EUR',
                id: item.id
              });
            }
          });
        } else {
          data.push({
            value: false,
            type: products.type,
            name: products.name,
            available: products.available,
            sku: products.sku,
            price: products.price,
            id: products.id
          });
        }

        this.items = data;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "all-product-page", attrs: { id: "single-page" } },
    [
      _c("Navbar", { attrs: { heading: this.title } }),
      _vm._v(" "),
      _c("dataTables", {
        attrs: {
          lang: _vm.lang,
          numberPage: _vm.page,
          add: "Product",
          "page-type": "products",
          heading: this.title,
          categories: _vm.categories,
          headings: _vm.headers,
          items: _vm.items
        },
        on: { page: _vm.setPage, statusUpdated: _vm.dispatchItems }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/products/Products.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/backend/products/Products.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_6d2f0d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=6d2f0d4e& */ "./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_6d2f0d4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_6d2f0d4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/products/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6d2f0d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=6d2f0d4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/Products.vue?vue&type=template&id=6d2f0d4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6d2f0d4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6d2f0d4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);