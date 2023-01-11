(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/modules.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modules',
  props: ['page'],
  data: function data() {
    return {
      tab: '',
      active: this.$t(this.page + '.modules.tabs')[0].title,
      text: '',
      subTab: 0,
      tabIndex: 0
    };
  },
  mounted: function mounted() {
    this.initialisePicker();
  },
  computed: {
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xsmall;
    },
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.medium;
    },
    large: function large() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.large;
    }
  },
  methods: {
    screenSizeClass: function screenSizeClass(node) {
      if (_width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small) {
        node.removeClass('mh-xs mh-md mh-lg').addClass('mh-sm');
      } else if (_width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xsmall) {
        node.removeClass('mh-sm mh-md mh-lg').addClass('mh-xs');
      } else if (_width__WEBPACK_IMPORTED_MODULE_0__["default"].data.medium) {
        node.removeClass('mh-sm mh-xs mh-lg').addClass('mh-md');
      } else {
        node.removeClass('mh-sm mh-xs mh-md').addClass('mh-lg');
      }
    },
    setImage: function setImage(tab) {
      var modules_node = $('#modules');

      if (tab === 'one') {
        modules_node.removeClass('bilateral');
      } else if (tab === 'two') {
        modules_node.addClass('bilateral');
      }

      this.screenSizeClass(modules_node);
    },
    fetchList: function fetchList(list) {
      var array = [];

      for (var i in list) {
        if (list[i].title) array.push({
          id: i,
          value: list[i].title
        });
      }

      return array;
    },
    getTab: function getTab(item) {
      var list = this.$t(this.page + '.modules.tabs');

      for (var i in list) {
        if (list[i].title === item.value) {
          return list[i].title;
        }
      }
    },
    initialisePicker: function initialisePicker() {
      var _this2 = this;

      this.changeBackground();
      setTimeout(function () {
        var trigger = document.querySelector('#trigger3');

        if (trigger) {
          var _this = _this2;
          var vm = _this2;
          var mobileSelect1 = new MobileSelect({
            trigger: "#trigger3",
            title: "",
            wheels: [{
              data: _this2.fetchList(_this2.$t(_this2.page + '.modules.tabs'))
            }],
            cancelBtnText: _this2.$t('cancel'),
            ensureBtnText: _this2.$t('select'),
            jsonType: true,
            position: [0],
            transitionEnd: function transitionEnd(indexArr, data) {},
            onShow: function onShow(e) {},
            callback: function callback(indexArr, data) {
              var s = data[0];
              vm.active = _this.getTab(s);
              vm.text = s.value;
              vm.tabIndex = indexArr[0];
            }
          });
        }
      }, 1500);
    },
    setTab: function setTab(tab) {
      this.text = tab.title;
    },
    changeBackground: function changeBackground(n, o) {
      if (this.page === 'b2c' || this.page === 'b2b') {
        var modules_node = $('#modules');
        this.screenSizeClass(modules_node);

        if (n) {
          modules_node.removeClass('bilateral').addClass('thin');
        } else {
          modules_node.removeClass('thin');

          if (!this.subTab) {
            modules_node.removeClass('bilateral');
          } else if (this.subTab) {
            modules_node.addClass('bilateral');
          }
        }
      }
    }
  },
  watch: {
    xsmall: function xsmall(n, o) {
      this.changeBackground(this.tab, o);

      if (n !== o) {
        if (n) {
          this.initialisePicker();
        }
      }
    },
    small: function small(n, o) {
      this.changeBackground(this.tab, false);
    },
    medium: function medium(n, o) {
      this.changeBackground(this.tab, false);
    },
    large: function large() {
      this.changeBackground(this.tab, false);
    },
    tab: function tab(n, o) {
      this.changeBackground(n, o);
    },
    tabIndex: function tabIndex(n, o) {
      this.changeBackground(n, o);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#modules[data-v-b031f7a4] {\n  background: linear-gradient(to right, #79c25a, #79c25a);\n  background-size: unset !important;\n}\n#modules .modules-inner[data-v-b031f7a4] {\n  padding-top: 100px;\n  padding-bottom: 50px;\n  background-image: url(\"/assets/components/b2c/b2c_panel.png\");\n  background-repeat: no-repeat;\n  background-position: 0 100%;\n}\n#modules.mh-xs .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panel-mobile.png\");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  min-height: 986px;\n}\n#modules.mh-sm .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panel-tablet.png\");\n  background-position: bottom;\n  background-size: 100%;\n  min-height: 1084px;\n}\n#modules.mh-md .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panel-laptop.png\");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  min-height: 782px;\n}\n#modules.mh-lg .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panel.png\");\n  min-height: 782px;\n}\n#modules.bilateral.mh-xs .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_3_2sided-mobile.png\");\n}\n#modules.bilateral.mh-sm .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_3_2sided-tablet.png\");\n}\n#modules.bilateral.mh-md .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_3_2sided-laptop.png\");\n}\n#modules.bilateral.mh-lg .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_3_2sided.png\");\n}\n#modules.thin.mh-xs .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_2-second-mobile.png\");\n  min-height: 863px;\n}\n#modules.thin.mh-sm .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_2-second-tablet.png\");\n  min-height: 982px;\n}\n#modules.thin.mh-md .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_2-second-laptop.png\");\n  min-height: 702px;\n}\n#modules.thin.mh-lg .modules-inner[data-v-b031f7a4] {\n  background-image: url(\"/assets/components/b2c/b2c_panels_2-second.png\");\n}\n@media (min-width: 1025px) and (max-width: 1213px) {\n#modules.mh-lg:not(.thin):not(.bilateral) .modules-inner[data-v-b031f7a4] {\n    background-size: 730px;\n    background-position-x: -10%;\n}\n}\n@media (min-width: 1600px) {\n#modules.mh-lg .modules-inner[data-v-b031f7a4] {\n    background-position: 20% 100%;\n}\n#modules.mh-lg.thin .modules-inner[data-v-b031f7a4] {\n    background-position-x: 10%;\n}\n}\n@media (min-width: 1025px) and (max-width: 1060px) {\n#modules.mh-lg.bilateral .modules-inner[data-v-b031f7a4] {\n    background-size: 700px;\n    background-position-x: -18%;\n}\n}\n@media (min-width: 1061px) and (max-width: 1199px) {\n#modules.mh-lg.bilateral .modules-inner[data-v-b031f7a4] {\n    background-size: 700px;\n    background-position-x: -10%;\n}\n}\n@media (min-width: 1200px) and (max-width: 1301px) {\n#modules.mh-lg.bilateral .modules-inner[data-v-b031f7a4] {\n    background-size: 750px;\n    background-position-x: -10%;\n}\n}\n@media (min-width: 1025px) and (max-width: 1353px) {\n#modules.mh-lg.thin .modules-inner[data-v-b031f7a4] {\n    background-size: 725px;\n}\n}\n@media (min-width: 850px) and (max-width: 898px) {\n#modules.mh-md:not(.thin):not(.bilateral) .modules-inner[data-v-b031f7a4] {\n    background-size: 520px;\n}\n}\n@media (min-width: 769px) and (max-width: 849px) {\n#modules.mh-md:not(.thin):not(.bilateral) .modules-inner[data-v-b031f7a4] {\n    background-size: 425px;\n}\n}\n@media (min-width: 896px) and (max-width: 945px) {\n#modules.bilateral.mh-md .modules-inner[data-v-b031f7a4] {\n    background-size: 550px;\n}\n}\n@media (min-width: 815px) and (max-width: 895px) {\n#modules.bilateral.mh-md .modules-inner[data-v-b031f7a4] {\n    background-size: 450px;\n}\n}\n@media (min-width: 769px) and (max-width: 814px) {\n#modules.bilateral.mh-md .modules-inner[data-v-b031f7a4] {\n    background-size: 400px;\n}\n}\n@media (max-width: 362px) {\n#modules:not(.thin).mh-xs .modules-inner[data-v-b031f7a4] {\n    min-height: 1055px;\n}\n}\n@media (min-width: 823px) and (max-width: 910px) {\n#modules.mh-md .modules-inner[data-v-b031f7a4] {\n    background-size: 500px;\n}\n}\n@media (min-width: 769px) and (max-width: 822px) {\n#modules.mh-md .modules-inner[data-v-b031f7a4] {\n    background-size: 438px;\n}\n}\n.sidebar-modules[data-v-b031f7a4] {\n  max-width: 460px;\n}\n.sides-modules .v-tab[data-v-b031f7a4] {\n  width: 188px;\n  height: 50px;\n  padding: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center !important;\n  border: 1px solid rgba(255, 255, 255, 0.25) !important;\n  border-radius: 10px !important;\n  color: #fff !important;\n}\n.sides-modules .v-tab.v-tab--active[data-v-b031f7a4] {\n  border: 1px solid #fff !important;\n}\n.sides-modules .v-tab h5[data-v-b031f7a4] {\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  font-style: normal;\n}\n.sides-modules .v-tab[data-v-b031f7a4]:nth-last-child(1) {\n  margin-left: 20px !important;\n}\n.sides-modules .v-tab--active[data-v-b031f7a4]:after {\n  background-color: transparent !important;\n}\n.v-tab[data-v-b031f7a4] {\n  color: rgba(255, 255, 255, 0.6) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n  padding: 0 30px 0 0;\n  border-bottom: 1px solid #DEDEDE;\n  font-weight: 600;\n  width: 100%;\n}\n.v-tab.v-tab--active[data-v-b031f7a4] {\n  color: white !important;\n  border-color: #fff;\n}\n.v-item-group[data-v-b031f7a4] {\n  background-color: transparent;\n}\n.v-tabs-items[data-v-b031f7a4] {\n  color: white;\n}\n.roboto[data-v-b031f7a4] {\n  color: white;\n}\n.modules-features[data-v-b031f7a4] {\n  list-style: none;\n}\n.modules-features li p[data-v-b031f7a4] {\n  margin-right: 56px;\n  position: relative;\n  margin-bottom: 15px !important;\n}\n.modules-features li p[data-v-b031f7a4]:nth-child(2) {\n  padding-left: 20px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.modules-features li p[data-v-b031f7a4]:nth-child(2):before {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  background-color: white;\n}\n.card-text[data-v-b031f7a4] {\n  margin-bottom: 50px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_style_index_0_id_b031f7a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_style_index_0_id_b031f7a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_style_index_0_id_b031f7a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_style_index_0_id_b031f7a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_style_index_0_id_b031f7a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=template&id=b031f7a4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/modules.vue?vue&type=template&id=b031f7a4&scoped=true& ***!
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
  return _c("div", { class: _vm.subTab, attrs: { id: "modules" } }, [
    _c("div", { staticClass: "modules-inner" }, [
      _c("div", { staticClass: "col-lg-5 col col-11 ml-auto" }, [
        _c(
          "div",
          { staticClass: "sidebar-modules" },
          [
            _c("h2", { staticClass: "text-white" }, [
              _vm._v(_vm._s(_vm.$t(_vm.page + ".modules.title")))
            ]),
            _vm._v(" "),
            _c(
              "v-tabs",
              {
                attrs: { "slider-size": "1" },
                model: {
                  value: _vm.tab,
                  callback: function($$v) {
                    _vm.tab = $$v
                  },
                  expression: "tab"
                }
              },
              [
                [
                  _vm.xsmall
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column",
                          attrs: {
                            id: "v-pills-tab",
                            role: "tablist",
                            "aria-orientation": "vertical"
                          }
                        },
                        [
                          _c("ul", [
                            _c("li", { staticClass: "nav-item dropdown" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link dropdown-toggle",
                                  attrs: {
                                    id: "trigger3",
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
                                      _vm.text
                                        ? _vm.text
                                        : _vm.$t(_vm.page + ".modules.tabs")[0]
                                            .title
                                    )
                                  )
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    : _vm._l(_vm.$t(_vm.page + ".modules.tabs"), function(
                        tabItem,
                        index
                      ) {
                        return _c("v-tab", { key: "tab-" + index }, [
                          _c("h5", { staticClass: "no-after" }, [
                            _vm._v(_vm._s(tabItem.title))
                          ])
                        ])
                      })
                ],
                _vm._v(" "),
                !_vm.xsmall
                  ? [
                      _vm.page === "b2c" || _vm.page === "b2b"
                        ? _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.tab,
                                callback: function($$v) {
                                  _vm.tab = $$v
                                },
                                expression: "tab"
                              }
                            },
                            _vm._l(_vm.$t(_vm.page + ".modules.tabs"), function(
                              tabItem,
                              ind
                            ) {
                              return _c(
                                "v-tab-item",
                                { key: "tab-item-" + ind },
                                [
                                  _c("div", [
                                    _c(
                                      "ul",
                                      {
                                        staticClass: "d-flex modules-features"
                                      },
                                      _vm._l(tabItem.features, function(
                                        feature,
                                        i
                                      ) {
                                        return _c(
                                          "li",
                                          { key: "feature-" + i },
                                          [
                                            _c("p", { staticClass: "roboto" }, [
                                              _vm._v(_vm._s(feature.value))
                                            ]),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v(_vm._s(feature.name))
                                            ])
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ]),
                                  _vm._v(" "),
                                  !_vm.tab
                                    ? _c(
                                        "v-tabs",
                                        {
                                          staticClass: "sides-modules",
                                          model: {
                                            value: _vm.subTab,
                                            callback: function($$v) {
                                              _vm.subTab = $$v
                                            },
                                            expression: "subTab"
                                          }
                                        },
                                        _vm._l(
                                          _vm.$t(_vm.page + ".modules.subtabs"),
                                          function(sf, i) {
                                            return _c(
                                              "v-tab",
                                              {
                                                key: sf.id,
                                                on: {
                                                  click: function($event) {
                                                    return _vm.setImage(sf.id)
                                                  }
                                                }
                                              },
                                              [
                                                _c("h5", [
                                                  _vm._v(_vm._s(sf.title))
                                                ])
                                              ]
                                            )
                                          }
                                        ),
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(_vm._s(tabItem.text))
                                  ])
                                ],
                                1
                              )
                            }),
                            1
                          )
                        : _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.tab,
                                callback: function($$v) {
                                  _vm.tab = $$v
                                },
                                expression: "tab"
                              }
                            },
                            _vm._l(_vm.$t(_vm.page + ".modules.tabs"), function(
                              tab,
                              ind
                            ) {
                              return _c(
                                "v-tab-item",
                                { key: "tab-item-" + ind },
                                [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(_vm._s(tab.text))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c(
                                      "ul",
                                      {
                                        staticClass: "d-flex modules-features"
                                      },
                                      _vm._l(tab.features, function(
                                        feature,
                                        i
                                      ) {
                                        return _c(
                                          "li",
                                          { key: "feature-" + i },
                                          [
                                            _c("p", { staticClass: "roboto" }, [
                                              _vm._v(_vm._s(feature.value))
                                            ]),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v(_vm._s(feature.name))
                                            ])
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ])
                                ]
                              )
                            }),
                            1
                          )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _vm.xsmall
              ? _c(
                  "div",
                  {
                    staticClass: "tab-content col-lg-10 col-12 pr-0",
                    attrs: { id: "v-pills-tabContent" }
                  },
                  _vm._l(_vm.$t(_vm.page + ".modules.tabs"), function(item, i) {
                    return _c(
                      "div",
                      {
                        key: "tab-" + i,
                        class: [
                          "tab-pane",
                          "fade",
                          item.title === _vm.active ? "show active" : ""
                        ],
                        attrs: {
                          id: item.title,
                          role: "tabpanel",
                          "aria-labelledby": "v-pills-home-tab"
                        }
                      },
                      [
                        _vm.xsmall
                          ? _c("div", [
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "d-flex flex-column modules-features"
                                },
                                _vm._l(item.features, function(feature, i) {
                                  return _c("li", { key: "feature-" + i }, [
                                    _c("p", { staticClass: "roboto" }, [
                                      _vm._v(_vm._s(feature.value))
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [_vm._v(_vm._s(feature.name))])
                                  ])
                                }),
                                0
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.tabIndex &&
                        (_vm.page === "b2c" || _vm.page === "b2b")
                          ? _c(
                              "v-tabs",
                              {
                                staticClass: "sides-modules",
                                model: {
                                  value: _vm.subTab,
                                  callback: function($$v) {
                                    _vm.subTab = $$v
                                  },
                                  expression: "subTab"
                                }
                              },
                              _vm._l(
                                _vm.$t(_vm.page + ".modules.subtabs"),
                                function(sf, i) {
                                  return _c(
                                    "v-tab",
                                    {
                                      key: sf.id,
                                      on: {
                                        click: function($event) {
                                          return _vm.setImage(sf.id)
                                        }
                                      }
                                    },
                                    [_c("h5", [_vm._v(_vm._s(sf.title))])]
                                  )
                                }
                              ),
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("p", { staticClass: "card-text" }, [
                          _vm._v(_vm._s(item.text))
                        ]),
                        _vm._v(" "),
                        _vm.small
                          ? _c("div", [
                              _c(
                                "ul",
                                { staticClass: "d-flex modules-features" },
                                _vm._l(item.features, function(feature, i) {
                                  return _c("li", { key: "feature-" + i }, [
                                    _c("p", { staticClass: "roboto" }, [
                                      _vm._v(_vm._s(feature.value))
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [_vm._v(_vm._s(feature.name))])
                                  ])
                                }),
                                0
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  }),
                  0
                )
              : _vm._e()
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/modules.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/includes/modules.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_vue_vue_type_template_id_b031f7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.vue?vue&type=template&id=b031f7a4&scoped=true& */ "./resources/js/components/public/includes/modules.vue?vue&type=template&id=b031f7a4&scoped=true&");
/* harmony import */ var _modules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/modules.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _modules_vue_vue_type_style_index_0_id_b031f7a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss& */ "./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modules_vue_vue_type_template_id_b031f7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modules_vue_vue_type_template_id_b031f7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b031f7a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/modules.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/modules.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/includes/modules.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modules.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_style_index_0_id_b031f7a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=style&index=0&id=b031f7a4&scoped=true&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/modules.vue?vue&type=template&id=b031f7a4&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/modules.vue?vue&type=template&id=b031f7a4&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_template_id_b031f7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modules.vue?vue&type=template&id=b031f7a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/modules.vue?vue&type=template&id=b031f7a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_template_id_b031f7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modules_vue_vue_type_template_id_b031f7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);