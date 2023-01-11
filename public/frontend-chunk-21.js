(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-21"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/breadcrumbs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/breadcrumbs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var store = function store() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../store/store */ "./resources/js/store/store.js"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Crumbs',
  props: ['color', 'items'],
  data: function data() {
    return {
      stack: [],
      home: '',
      language: this.$route.params.locale === 'en' ? 1 : this.$route.params.locale === 'ru' ? 3 : 2
    };
  },
  mounted: function mounted() {
    this.buildStack();
  },
  methods: {
    buildStack: function buildStack() {
      this.stack = [{
        "class": "crumbs__item--parent",
        label: this.language === 1 ? 'Home' : this.language === 2 ? 'Acasă' : 'Главная',
        name: "Home"
      }];
      this.addPage(this.$router.currentRoute);
    },
    addPage: function addPage(route, first) {
      var _this = this;

      if (!this.items) {
        var categoryUrl = '';

        if (this.$route.params.category) {
          if (route.meta.breadcrumb.parent) {
            first = true;
            if (!this.$route.params.id && this.$route.params.category) first = undefined;

            if (this.stack.findIndex(function (item) {
              return item.name === _this.$store.state.categoryByUrl;
            }) < 0) {
              this.$store.dispatch('categoryByUrl', {
                lang_id: this.language,
                url: this.$route.params.category
              }).then(function () {
                categoryUrl = _this.$store.getters.getCategoryByUrl.data.name;

                if (_this.stack.findIndex(function (item) {
                  return item.label === categoryUrl;
                }) < 0) {
                  var _route$meta, _route$meta$breadcrumb;

                  _this.stack.push({
                    name: 'productsCategory',
                    label: ((_route$meta = route.meta) === null || _route$meta === void 0 ? void 0 : (_route$meta$breadcrumb = _route$meta.breadcrumb) === null || _route$meta$breadcrumb === void 0 ? void 0 : _route$meta$breadcrumb.label) || categoryUrl.replace('.', ' '),
                    "class": 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                  });

                  if (_this.$route.params.id && _this.$route.params.category) {
                    _this.stack[_this.stack.length - 1]["class"] = 'crumbs__item--current';
                  }
                }
              });
            }
          }
        }

        if (route.meta.breadcrumb.parent) {
          var parent = this.getRoute(route.meta.breadcrumb.parent);

          if (this.stack.findIndex(function (item) {
            return item.name === parent.name;
          })) {
            this.addPage(parent, true);
          }
        } else {
          if (!this.$route.params.id && this.$route.params.category) first = true;

          if (this.stack.findIndex(function (item) {
            return item.name === route.name;
          }) < 0) {
            var routeName = '';

            switch (this.$route.name) {
              case 'productsCategory':
                routeName = 'products';
                break;

              case 'products':
                routeName = 'products';
                break;

              case 'product':
                routeName = 'products';
                break;

              case 'services':
                routeName = 'services';
                break;

              case 'service':
                routeName = 'services';
                break;

              case 'projects':
                routeName = 'projects';
                break;

              case 'project':
                routeName = 'projects';
                break;

              case 'about':
                routeName = 'about';
                break;

              case 'news':
                routeName = 'news';
                break;

              case 'contacts':
                routeName = 'contacts';
                break;
            }

            var label = this.$t(routeName + '.title');
            this.stack.push({
              name: route.name,
              label: label,
              "class": 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
            });
          }
        }
      } else {
        this.items.forEach(function (item, index) {
          if (item.project_id) {
            _this.$store.dispatch('singleProject', {
              id: item.project_id,
              lang: _this.language
            }).then(function () {
              var project = _this.$store.getters.getSingleProject;

              _this.stack.push({
                name: project.projects.name,
                label: route.label || project.projects.name.replace('.', ' '),
                "class": 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
              });
            });
          } else {
            if (!item.service_id && !item.news_id && !item.career_id) {
              if (_this.items.length - 1 === index) first = 'undefined';

              _this.stack.push({
                name: item.name,
                label: item.label || item.name.replace('.', ' '),
                "class": 'crumbs__item--parent'
              });
            } else {
              _this.stack[_this.stack.length - 1]["class"] = 'crumbs__item--current';
            }
          }
        });
      }

      if (this.items) {
        /*    if (this.items.findIndex(index => index.news_id) >= 0) {
                first = undefined;
                let data = this.items.find(index => index.news_id)
                this.$store.dispatch('singleNews', {id: data.news_id, lang: this.language})
                    .then(() => {
                        let news = this.$store.getters.getSingleNews;
                        this.stack.pop();
                        this.stack.push({
                            name: news.translates.name,
                            label: route.label || news.translates.name.replace('.', ' '),
                            class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                        })
                    })
            }*/
        if (this.items.findIndex(function (index) {
          return index.career_id;
        }) >= 0) {
          first = undefined;
          var data = this.items.find(function (index) {
            return index.career_id;
          });
          this.$store.dispatch('singleCareer', {
            id: data.career_id,
            lang_id: this.language
          }).then(function () {
            var career = _this.$store.getters.getSingleCareer; //this.stack.pop();

            _this.stack.push({
              name: career.translates.name,
              label: route.label || career.translates.name.replace('.', ' '),
              "class": 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
            });
          });
        }
        /*  if (this.items.findIndex(index => index.service_id) >= 0) {
              first = undefined;
              let data = this.items.find(index => index.service_id)
              this.$store.dispatch('service', {id: data.service_id, lang_id: this.language})
                  .then(() => {
                      let service = this.$store.getters.getService;
                      this.stack.pop();
                      this.stack.push({
                          name: service.data.name,
                          label: route.label || service.data.name.replace('.', ' '),
                          class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                      })
                  })
          }*/

      }
    },
    getRoute: function getRoute(name) {
      if (this.$router.options.routes.find(function (route) {
        return route.name === name.capitalize;
      }).children.find(function (item) {
        return item.name === name;
      })) {
        return this.$router.options.routes.find(function (route) {
          return route.name === name.capitalize;
        }).children.find(function (item) {
          return item.name === name;
        });
      }

      return this.$router.options.routes.find(function (route) {
        return route.name === name.capitalize;
      });
    }
  },
  computed: {
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    }
  },
  created: function created() {},
  watch: {
    $route: function $route(to) {
      this.buildStack();
    },
    language: function language() {
      this.buildStack();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/breadcrumbs.vue?vue&type=template&id=64e98177&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/breadcrumbs.vue?vue&type=template&id=64e98177& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _vm.stack.length > 0
    ? _c("v-breadcrumbs", {
        class: _vm.color,
        attrs: { items: _vm.stack },
        scopedSlots: _vm._u(
          [
            {
              key: "item",
              fn: function(ref) {
                var item = ref.item
                return [
                  item.class === "crumbs__item--current"
                    ? _c(
                        "v-breadcrumbs-item",
                        {
                          class: ["active", _vm.color],
                          attrs: { disabled: "" }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              class: ["crumbs__link", _vm.color],
                              attrs: {
                                to: {
                                  name: item.name,
                                  params: { locale: _vm.$route.params.locale }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item.label) +
                                  "\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _c(
                        "v-breadcrumbs-item",
                        { class: [_vm.color] },
                        [
                          _c(
                            "router-link",
                            {
                              class: ["crumbs__link", _vm.color],
                              attrs: {
                                to: {
                                  name: item.name,
                                  params: { locale: _vm.$route.params.locale }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item.label) +
                                  "\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                ]
              }
            }
          ],
          null,
          false,
          380517005
        )
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/breadcrumbs.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/public/includes/breadcrumbs.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumbs_vue_vue_type_template_id_64e98177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs.vue?vue&type=template&id=64e98177& */ "./resources/js/components/public/includes/breadcrumbs.vue?vue&type=template&id=64e98177&");
/* harmony import */ var _breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/breadcrumbs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _breadcrumbs_vue_vue_type_template_id_64e98177___WEBPACK_IMPORTED_MODULE_0__["render"],
  _breadcrumbs_vue_vue_type_template_id_64e98177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/breadcrumbs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/breadcrumbs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/public/includes/breadcrumbs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./breadcrumbs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/breadcrumbs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/breadcrumbs.vue?vue&type=template&id=64e98177&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/breadcrumbs.vue?vue&type=template&id=64e98177& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_template_id_64e98177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./breadcrumbs.vue?vue&type=template&id=64e98177& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/breadcrumbs.vue?vue&type=template&id=64e98177&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_template_id_64e98177___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_template_id_64e98177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);