(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../event/eventbus */ "./resources/js/event/eventbus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var InfiniteLoading = function InfiniteLoading() {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.t.bind(null, /*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js", 7));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'productSidebar',
  props: ['lang', 'page'],
  components: {
    InfiniteLoading: InfiniteLoading
  },
  data: function data() {
    return {
      active: '',
      sortBy: '',
      sortMode: 'descending',
      products: [],
      dropdown: false,
      text: '',
      itemsToShow: 2,
      show: 2,
      pageOffset: 0,
      infiniteId: +new Date(),
      total: 0,
      arrow: true,
      categories: [{
        data: {
          name: 'All'
        }
      }]
    };
  },
  mounted: function mounted() {
    $('body').find('a').removeClass('v-tab--active');
    this.sortBy = this.$t('sort.items')[0].name;
    this.initialisePicker();
    this.arrow ? $(".sidebar-submenu").slideDown() : $(".sidebar-submenu").slideUp();
  },
  methods: {
    infiniteHandler: function infiniteHandler($state) {
      var _this2 = this;

      if (this.xsmall || this.xlarge) {
        setTimeout(function () {
          _this2.$store.dispatch('products', {
            lang_id: _this2.lang ? _this2.lang : 0,
            category_id: _this2.categoryId,
            length: _this2.show ? _this2.show : 0,
            offset: _this2.itemsToShow ? _this2.itemsToShow : 0
          }).then(function () {
            var products = _this2.data;

            if (products.length) {
              _this2.itemsToShow += _this2.show;
              _this2.pageOffset += 1;
              products.forEach(function (item) {
                _this2.products.push(item);
              });
              $state.loaded();
            } else {
              $state.complete();
            }
          });
        }, 800);
      }
    },
    getProducts: function getProducts() {
      var _this3 = this;

      this.$store.dispatch('categoryByUrl', {
        lang_id: this.lang,
        url: this.page
      }).then(function () {
        var categoryId = _this3.categoryId;

        if (categoryId) {
          _this3.$store.dispatch('products', {
            lang_id: _this3.lang,
            category_id: categoryId
          }).then(function () {
            _this3.products = _this3.$store.getters.getProducts;
          });

          axios.get('/get-total', {
            params: {
              lang: _this3.lang,
              type: 'products',
              categoryId: _this3.categoryId
            }
          }).then(function (response) {
            _this3.total = response.data;
          });
        }
      });
    },
    slideUp: function slideUp(url) {
      if (this.$route.path.includes(url)) {
        this.arrow = this.arrow ? this.arrow = false : this.arrow = true;
        this.arrow ? $(".sidebar-submenu").slideDown() : $(".sidebar-submenu").slideUp();
      }
    },
    childrenActive: function childrenActive(data) {
      var _this4 = this;

      return data.findIndex(function (item) {
        return item.url === _this4.page;
      }) >= 0;
    },
    childActive: function childActive(category) {
      var _this5 = this;

      if (category.children) {
        return category.children.filter(function (item) {
          return item.parent_id === category.id && _this5.page === item.url;
        });
      }
    },
    sortList: function sortList(data) {
      var items = [];
      data.forEach(function (e, i) {
        items.push(e.label);
      });
      return items;
    },
    sort: function sort() {
      this.products = this.products.sort(this.compare);
    },
    compare: function compare(a, b) {
      var sort = this.sortBy;

      if (this.sortMode === 'ascending') {
        if (sort === 'name') {
          if (a.translates.name < b.translates.name) return -1;
          if (a.translates.name > b.translates.name) return 1;
          return 0;
        }

        if (sort === 'date') {
          if (Date.parse(a.created_at) < Date.parse(b.created_at)) return -1;
          if (Date.parse(a.created_at) > Date.parse(b.created_at)) return 1;
          return 0;
        } else if (sort === 'price') {
          if (parseFloat(a[sort]) < parseFloat(b[sort])) return -1;
          if (parseFloat(a[sort]) > parseFloat(b[sort])) return 1;
          return 0;
        } else {
          if (a[sort] < b[sort]) return -1;
          if (a[sort] > b[sort]) return 1;
          return 0;
        }
      }

      if (sort === 'name') {
        if (a.translates.name > b.translates.name) return -1;
        if (a.translates.name < b.translates.name) return 1;
        return 0;
      } else {
        if (sort === 'date') {
          if (Date.parse(a.created_at) > Date.parse(b.created_at)) return -1;
          if (Date.parse(a.created_at) < Date.parse(b.created_at)) return 1;
          return 0;
        } else if (sort === 'price') {
          if (parseFloat(a[sort]) > parseFloat(b[sort])) return -1;
          if (parseFloat(a[sort]) < parseFloat(b[sort])) return 1;
          return 0;
        } else {
          if (a[sort] > b[sort]) return -1;
          if (a[sort] < b[sort]) return 1;
          return 0;
        }
      }
    },
    activateDropdown: function activateDropdown() {
      if (this.xsmall) {
        this.initialisePicker();
      } else {
        this.dropdown = !this.dropdown;
      }
    },
    fetchList: function fetchList(list) {
      var array = [];

      for (var i in list) {
        if (list[i].name) array.push({
          id: i,
          value: list[i].label
        });
      }

      return array;
    },
    getTab: function getTab(item) {
      var list = this.items;

      for (var i in list) {
        if (list[i].label === item.value) {
          return list[i].name;
        }
      }
    },
    getLabel: function getLabel(item) {
      var list = this.items;

      for (var i in list) {
        if (list[i].label === item) {
          return list[i].label;
        }
      }
    },
    initialisePicker: function initialisePicker() {
      var _this6 = this;

      setTimeout(function () {
        var trigger = document.querySelector('#trigger10');

        if (trigger) {
          var _this = _this6;
          var vm = _this6;
          var mobileSelect1 = new MobileSelect({
            trigger: "#trigger10",
            title: "",
            wheels: [{
              data: _this6.fetchList(_this6.items)
            }],
            cancelBtnText: _this6.$t('cancel'),
            ensureBtnText: _this6.$t('select'),
            jsonType: true,
            position: [0],
            transitionEnd: function transitionEnd(indexArr, data) {},
            onShow: function onShow(e) {},
            callback: function callback(indexArr, data) {
              var s = data[0];
              vm.sortBy = _this.getTab(s);
              vm.sortBy === _this.getTab(s) ? vm.sortMode === 'ascending' ? vm.sortMode = 'descending' : vm.sortMode = 'ascending' : vm.sortMode = 'descending';
              vm.active = _this.getTab(s);
              vm.text = s.value;
            }
          });
        }
      }, 800);
    },
    isActiveCategory: function isActiveCategory() {
      var active = this.sortBy;
      var items = this.items;

      for (var i = 0; i < items.length; i++) {
        if (items[i].name === active) {
          return items[i].label;
        }
      }

      return items[0].label;
    },
    selectSort: function selectSort(event) {
      if (this.sortBy !== $(event.target).attr('data-id')) {
        this.sortBy = $(event.target).attr('data-id');
        this.sortMode = this.sortMode === 'descending' ? 'ascending' : 'descending';
      } else {
        this.sortMode = this.sortMode === 'ascending' ? 'descending' : 'ascending';
      }

      this.dropdown = false;
    }
  },
  computed: {
    items: function items() {
      return this.$t('sort.items');
    },
    categoryId: function categoryId() {
      return this.$store.getters.getCategoryByUrl.id;
    },
    windowWidth: function windowWidth() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.windowCompare;
    },
    largeCompare: function largeCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.largeCompare;
    },
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.medium;
    },
    mediumCompare: function mediumCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.mediumCompare;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xsmall;
    },
    xlarge: function xlarge() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xlarge;
    },
    large: function large() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.large;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    },
    data: function data() {
      return this.$store.getters.getProducts;
    }
  },
  created: function created() {
    var _this7 = this;

    var language = this.$router.currentRoute.params.locale === 'en' ? 1 : this.$router.currentRoute.params.locale === 'ru' ? 3 : 2;
    this.$store.dispatch('categories', {
      lang_id: language
    }).then(function () {
      _this7.$store.getters.getCategories.forEach(function (item, i) {
        if (!item.parent_id) _this7.categories.push(item);
      });
    });
    this.getProducts();
  },
  watch: {
    $route: function $route(to, from) {
      this.products = [];
      this.getProducts();
      this.initialisePicker();

      if (to.path !== from.path) {
        this.arrow = false;

        if (to.path.includes('products') && !this.mediumCompare) {
          setTimeout(function () {
            if (window.pageYOffset !== 0) {
              _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('position', 'fixed');
              _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('color', 'light');
              _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('sticky', true);
            } else {
              _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('position', 'relative');
              _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('color', 'light');
              _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('sticky', false);
            }
          }, 100);
        } else {
          _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('position', 'relative');
          _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('color', 'light');
          _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('sticky', false);
        }
      }
    },
    sortBy: function sortBy(newVal, oldVal) {
      if (oldVal !== newVal) this.sort();
    },
    sortMode: function sortMode(newVal, oldVal) {
      if (oldVal !== newVal) this.sort();
    },
    xsmall: function xsmall(n, o) {
      if (n !== o) {
        if (n) {
          this.initialisePicker();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-tabs--vertical > .v-tabs-bar .v-tabs-slider[data-v-58c3107c] {\n    height: 100% !important;\n}\n.theme--light.v-card[data-v-58c3107c], .theme--light.v-sheet[data-v-58c3107c] {\n    background: transparent !important;\n}\n.sidebar-width[data-v-58c3107c] {\n    width: 100%;\n}\n.card-product-brand-logo img[data-v-58c3107c] {\n    max-width: 65px;\n    max-height: 65px;\n    height: 65px;\n    width: 100%;\n    object-fit: contain;\n}\n.btn-product[data-v-58c3107c] {\n    margin: 20px 20px 20px 30px !important;\n}\n.product-brand[data-v-58c3107c] {\n    display: flex;\n    align-items: center;\n    color: rgba(31, 31, 31, .4);\n    font-size: 14px;\n    font-weight: 500;\n}\n.product-brand p[data-v-58c3107c] {\n    color: rgba(31, 31, 31, .4);\n    font-size: 14px;\n}\n.product-brand img[data-v-58c3107c] {\n    max-width: 16px;\n    margin-right: 8px;\n    height: max-content;\n}\n.product-title[data-v-58c3107c] {\n    font-size: 16px;\n    min-height: 52px;\n}\n.dropdown-categories[data-v-58c3107c] {\n    margin-top: -6px;\n    margin-bottom: 30px;\n}\n.category-dropdown[data-v-58c3107c] {\n    z-index: 1;\n    max-height: 300px;\n    overflow: auto;\n    width: 100%;\n    padding-left: 0 !important;\n    max-width: 270px;\n    animation-name: opacity\n}\n.category-dropdown ul[data-v-58c3107c] {\n    list-style: none;\n    padding-left: 0 !important;\n}\n.category-dropdown ul li[data-v-58c3107c] {\n    cursor: pointer;\n    padding: 15px 0 15px 50px;\n}\n.category-dropdown ul li[data-v-58c3107c]:hover {\n    background: rgba(121, 194, 90, .07);\n}\n.category-dropdown .parent[data-v-58c3107c] {\n    padding: 15px 0 15px 30px;\n    cursor: pointer;\n    margin: 0 !important;\n}\n.category-dropdown .parent[data-v-58c3107c]:hover {\n    background: rgba(121, 194, 90, .07);\n}\n.v-select-dropdown[data-v-58c3107c] {\n    background: #F3F5F6;\n    border-radius: 6px;\n    max-width: 270px;\n    padding: 13px 20px 13px 20px;\n    text-align: left;\n    color: #555555;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n.v-select-dropdown .arrow[data-v-58c3107c] {\n    margin-left: 15px;\n}\n.v-select-dropdown.collapse[data-v-58c3107c] {\n    background: white;\n    border: 1px solid white;\n    transition: all .2s ease-in-out;\n}\n.v-select-dropdown.collapsed[data-v-58c3107c] {\n    transition: all .2s ease-in-out;\n    border: 1px solid #79C25A;\n}\n.fade-enter-active[data-v-58c3107c], .fade-leave-active[data-v-58c3107c] {\n    transition: all .3s ease-out;\n}\n.fade-enter[data-v-58c3107c], .fade-leave-to[data-v-58c3107c]  {\n    opacity: 0;\n}\n\n/** {\n    transition: all 1s ease-out\n}*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_58c3107c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_58c3107c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_58c3107c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_58c3107c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_58c3107c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=template&id=58c3107c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Sidebar.vue?vue&type=template&id=58c3107c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-app", [
    _c("div", { staticClass: "sidebar-width d-flex" }, [
      _vm.windowWidth
        ? _c(
            "ul",
            { staticClass: "nav nav-pills" },
            [
              _c("h4", { staticClass: "catalog" }, [
                _vm._v(_vm._s(_vm.$t("catalog")))
              ]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category, i) {
                return category.url &&
                  !category.parent_id &&
                  category.data.name !== "All"
                  ? _c(
                      "li",
                      {
                        key: "category-" + i,
                        class: [
                          category.url && category.url === _vm.page
                            ? "active"
                            : "",
                          _vm.childrenActive(category.children)
                            ? "semi-active"
                            : ""
                        ]
                      },
                      [
                        _c(
                          "router-link",
                          {
                            key: i,
                            attrs: {
                              to: {
                                name: "productsCategory",
                                params: {
                                  category: category.url,
                                  locale: _vm.$route.params.locale,
                                  savedPosition: true
                                }
                              },
                              "data-toggle": "pill"
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm.slideUp(category.url)
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "catalog-icon" }, [
                              _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: category.image,
                                    expression: "category.image"
                                  }
                                ],
                                staticClass: "sidebar-category-img",
                                attrs: { alt: "" }
                              })
                            ]),
                            _vm._v(
                              "\n\n                    " +
                                _vm._s(category.data.name) +
                                "\n                    "
                            ),
                            _c("i", {
                              class: [
                                "arrow",
                                (category.url === _vm.page && _vm.arrow) ||
                                (_vm.childrenActive(category.children) &&
                                  _vm.arrow)
                                  ? "up"
                                  : "right"
                              ]
                            })
                          ]
                        ),
                        _vm._v(" "),
                        category.url === _vm.page ||
                        _vm.childrenActive(category.children)
                          ? _c("div", { staticClass: "sidebar-submenu" }, [
                              _c(
                                "ul",
                                _vm._l(category.children, function(children) {
                                  return children.url
                                    ? _c(
                                        "li",
                                        {
                                          class:
                                            children.url &&
                                            children.url === _vm.page
                                              ? "active"
                                              : ""
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "productsCategory",
                                                  params: {
                                                    category: children.url,
                                                    locale:
                                                      _vm.$route.params.locale,
                                                    savedPosition: true
                                                  }
                                                },
                                                "data-toggle": "pill"
                                              },
                                              on: {
                                                click: function($event) {
                                                  this.page === children.url
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(children.data.name) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                }),
                                0
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  : _c(
                      "li",
                      { class: _vm.page === undefined ? "active" : "" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "products",
                                params: {
                                  locale: _vm.$route.params.locale,
                                  savedPosition: true
                                }
                              },
                              "data-toggle": "pill"
                            }
                          },
                          [
                            _c("span", { staticClass: "catalog-icon" }, [
                              _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value:
                                      "/assets/components/products/all.png",
                                    expression:
                                      "'/assets/components/products/all.png'"
                                  }
                                ],
                                staticClass: "sidebar-category-img",
                                attrs: { alt: "" }
                              })
                            ]),
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.$t("products.categories.all")) +
                                "\n                "
                            )
                          ]
                        )
                      ],
                      1
                    )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tab-content" },
        [
          _vm.page
            ? _c(
                "div",
                {
                  staticClass: "dropdown-categories",
                  class: [
                    !_vm.xsmall && _vm.products.length <= 0
                      ? "position-absolute mb-0"
                      : ""
                  ]
                },
                [
                  !_vm.xsmall && _vm.products.length <= 0
                    ? _c(
                        "button",
                        {
                          staticClass: "v-select-dropdown",
                          class: [
                            _vm.dropdown ? "collapse" : "collapsed",
                            _vm.products.length <= 0 ? "opacity-0" : ""
                          ],
                          attrs: { type: "submit", disabled: "" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.activateDropdown($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.isActiveCategory()) +
                              "\n                    "
                          ),
                          _vm.dropdown
                            ? _c("i", { staticClass: "arrow up" })
                            : _c("i", { staticClass: "arrow down" })
                        ]
                      )
                    : !_vm.xsmall && _vm.products.length > 0
                    ? _c(
                        "button",
                        {
                          staticClass: "v-select-dropdown",
                          class: [_vm.dropdown ? "collapse" : "collapsed"],
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.activateDropdown($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.isActiveCategory()) +
                              "\n                    "
                          ),
                          _vm.dropdown
                            ? _c("i", { staticClass: "arrow up" })
                            : _c("i", { staticClass: "arrow down" })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.xsmall && _vm.products.length > 0
                    ? _c("ul", [
                        _c(
                          "li",
                          { staticClass: "nav-item dropdown picker-mobile" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link dropdown-toggle",
                                attrs: {
                                  id: "trigger10",
                                  "data-toggle": "dropdown",
                                  href: "#",
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-expanded": "false"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.text ? _vm.text : _vm.items[0].label
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.dropdown
                    ? _c(
                        "ul",
                        {
                          staticClass:
                            "position-absolute bg-white category-dropdown list-unstyled"
                        },
                        _vm._l(_vm.items, function(item) {
                          return _c("li", [
                            _c(
                              "p",
                              {
                                staticClass: "parent",
                                attrs: { "data-id": item.name },
                                on: {
                                  click: function($event) {
                                    return _vm.selectSort($event)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(item.label) +
                                    "\n                        "
                                )
                              ]
                            )
                          ])
                        }),
                        0
                      )
                    : _vm._e()
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("transition", { attrs: { name: "fade" } }, [
            _vm.page === undefined
              ? _c(
                  "div",
                  {
                    class: [
                      "tab-pane fade out",
                      _vm.page === undefined ? "active show" : ""
                    ],
                    attrs: { id: "home" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "d-grid product-categories" },
                      _vm._l(_vm.categories, function(category) {
                        return category.url && !category.parent_id
                          ? _c(
                              "router-link",
                              {
                                key: category.data.id,
                                staticClass:
                                  "card d-flex flex-column align-items-start",
                                attrs: {
                                  to: {
                                    name: "productsCategory",
                                    params: {
                                      category: category.url,
                                      locale: _vm.$route.params.locale,
                                      savedPosition: !_vm.mediumCompare
                                    }
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "card-img-container" },
                                  [
                                    _c("img", {
                                      staticClass: "card-img-top",
                                      attrs: { src: category.image, alt: "" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "card-title",
                                    class: [
                                      category.data.name.length > 17
                                        ? "card-product-mobile"
                                        : ""
                                    ]
                                  },
                                  [
                                    _c("h4", [
                                      _vm._v(_vm._s(category.data.name))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        "/assets/components/products/arrow-long.png"
                                    }
                                  })
                                ])
                              ]
                            )
                          : _vm._e()
                      }),
                      1
                    )
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return category.url && category.url === _vm.page
              ? _c(
                  "div",
                  {
                    class: [
                      "tab-pane fade out",
                      _vm.page === category.url ? "active show" : ""
                    ],
                    attrs: { id: category.url }
                  },
                  [
                    _c("transition", { attrs: { name: "fade" } }, [
                      _vm.xlarge && category.children.length > 0
                        ? _c(
                            "div",
                            {
                              key: "subcats",
                              staticClass: "d-grid product-categories"
                            },
                            _vm._l(category.children, function(child) {
                              return child.url
                                ? _c(
                                    "router-link",
                                    {
                                      key: child.data.id,
                                      staticClass:
                                        "card d-flex flex-column align-items-start",
                                      attrs: {
                                        to: {
                                          name: "productsCategory",
                                          params: {
                                            category: child.url,
                                            locale: _vm.$route.params.locale,
                                            savedPosition: !_vm.mediumCompare
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "card-img-container" },
                                        [
                                          _c("img", {
                                            staticClass: "card-img-top",
                                            attrs: { src: child.image, alt: "" }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "card-title" }, [
                                        _c("h4", [
                                          _vm._v(_vm._s(child.data.name))
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              "/assets/components/products/arrow-long.png"
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                : _vm._e()
                            }),
                            1
                          )
                        : _c(
                            "div",
                            {
                              key: "catprods",
                              staticClass: "d-grid product-categories brands"
                            },
                            _vm._l(_vm.products, function(product, index) {
                              return product.translates
                                ? _c(
                                    "router-link",
                                    {
                                      key: index,
                                      staticClass: "card d-flex flex-column",
                                      class: ["card p-0"],
                                      attrs: {
                                        to: {
                                          name: "product",
                                          params: {
                                            id: product.id,
                                            locale: _vm.$route.params.locale
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "card-img-top",
                                        attrs: {
                                          src: product.image
                                            ? product.image
                                            : "",
                                          alt: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-body border-bottom"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-between"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "card-body-title"
                                                },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-dark product-title"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          product.translates
                                                            .name
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "product-brand align-items-center"
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            "/assets/icons/star-grey.png"
                                                        }
                                                      }),
                                                      _vm._v(
                                                        _vm._s(product.brand) +
                                                          "\n                                        "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              !_vm.largeCompare
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "card-product-brand-logo d-flex"
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            product.brand_logo,
                                                          alt: product.brand
                                                        }
                                                      })
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card-price",
                                              class: [
                                                _vm.largeCompare
                                                  ? "card-price-mobile"
                                                  : ""
                                              ]
                                            },
                                            [
                                              _c(
                                                "h4",
                                                {
                                                  staticClass:
                                                    "roboto text-dark"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(product.price) +
                                                      " EUR"
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.largeCompare
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "card-product-brand-logo d-flex"
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            product.brand_logo,
                                                          alt: product.brand
                                                        }
                                                      })
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn-product more align-items-center d-flex",
                                          attrs: {
                                            to: {
                                              name: "product",
                                              params: {
                                                id: product.id,
                                                locale: _vm.$route.params.locale
                                              }
                                            }
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(_vm.$t("goto")))
                                          ]),
                                          _c("i", {
                                            staticClass: "arrow right ml-4"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            }),
                            1
                          )
                    ])
                  ],
                  1
                )
              : _vm.childActive(category)
              ? _vm._l(_vm.childActive(category), function(child) {
                  return _c(
                    "div",
                    [
                      _c("transition", { attrs: { name: "fade" } }, [
                        _c("div", { staticClass: "test-products" }, [
                          _c(
                            "div",
                            { staticClass: "d-grid product-categories brands" },
                            _vm._l(_vm.products, function(product, index) {
                              return product.translates
                                ? _c(
                                    "router-link",
                                    {
                                      key: index,
                                      staticClass: "card d-flex flex-column",
                                      class: ["card p-0"],
                                      attrs: {
                                        to: {
                                          name: "product",
                                          params: {
                                            id: product.id,
                                            locale: _vm.$route.params.locale
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value:
                                              "" +
                                              (product.image
                                                ? product.image
                                                : ""),
                                            expression:
                                              "''+(product.image ? product.image : '')"
                                          }
                                        ],
                                        staticClass: "card-img-top",
                                        attrs: { alt: "" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-body border-bottom"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-between"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "card-body-title"
                                                },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-dark product-title"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          product.translates
                                                            .name
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "product-brand align-items-center"
                                                    },
                                                    [
                                                      _c("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value:
                                                              "/assets/icons/star-grey.png",
                                                            expression:
                                                              "'/assets/icons/star-grey.png'"
                                                          }
                                                        ]
                                                      }),
                                                      _vm._v(
                                                        _vm._s(product.brand) +
                                                          "\n                                            "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              !_vm.largeCompare
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "card-product-brand-logo d-flex"
                                                    },
                                                    [
                                                      _c("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value:
                                                              product.brand_logo,
                                                            expression:
                                                              "product.brand_logo"
                                                          }
                                                        ],
                                                        attrs: {
                                                          alt: product.brand
                                                        }
                                                      })
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card-price",
                                              class: [
                                                _vm.largeCompare
                                                  ? "card-price-mobile"
                                                  : ""
                                              ]
                                            },
                                            [
                                              _c(
                                                "h4",
                                                {
                                                  staticClass:
                                                    "roboto text-dark"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(product.price) +
                                                      " EUR"
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.largeCompare
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "card-product-brand-logo d-flex"
                                                    },
                                                    [
                                                      _c("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value:
                                                              product.brand_logo,
                                                            expression:
                                                              "product.brand_logo"
                                                          }
                                                        ],
                                                        attrs: {
                                                          alt: product.brand
                                                        }
                                                      })
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn-product more align-items-center d-flex",
                                          attrs: {
                                            to: {
                                              name: "product",
                                              params: {
                                                id: product.id,
                                                locale: _vm.$route.params.locale
                                              }
                                            }
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(_vm.$t("goto")))
                                          ]),
                                          _c("i", {
                                            staticClass: "arrow right ml-4"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            }),
                            1
                          )
                        ])
                      ])
                    ],
                    1
                  )
                })
              : _vm._e()
          }),
          _vm._v(" "),
          _vm.products.length < _vm.total &&
          (_vm.xsmall || _vm.small || _vm.large) &&
          _vm.$route.path.includes("products")
            ? _c(
                "infinite-loading",
                {
                  staticClass: "col-7",
                  attrs: { identifier: _vm.infiniteId },
                  on: { infinite: _vm.infiniteHandler }
                },
                [
                  _c("div", { attrs: { slot: "spinner" }, slot: "spinner" }, [
                    _c("div", { staticClass: "m-auto loading-more" }, [
                      _c("img", { attrs: { src: "/assets/icons/more.png" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { attrs: { slot: "no-more" }, slot: "no-more" }),
                  _vm._v(" "),
                  _c("div", {
                    attrs: { slot: "no-results" },
                    slot: "no-results"
                  })
                ]
              )
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/products/Sidebar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/products/Sidebar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_58c3107c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=58c3107c&scoped=true& */ "./resources/js/components/public/products/Sidebar.vue?vue&type=template&id=58c3107c&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/public/products/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_58c3107c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css& */ "./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_58c3107c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_58c3107c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "58c3107c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/products/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/products/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/products/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_58c3107c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=style&index=0&id=58c3107c&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/products/Sidebar.vue?vue&type=template&id=58c3107c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/public/products/Sidebar.vue?vue&type=template&id=58c3107c&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_58c3107c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=58c3107c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Sidebar.vue?vue&type=template&id=58c3107c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_58c3107c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_58c3107c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);