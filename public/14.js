(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/connections.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/eventbus */ "./resources/js/event/eventbus.js");
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'connections',
  props: ['page'],
  data: function data() {
    return {
      tab: '',
      active: this.$t(this.page + '.connections.tabs')[0].title,
      text: '',
      title: '',
      icons: ['/assets/icons/pen-factory.png', '/assets/icons/123.png', '/assets/icons/paper-factory.png', '/assets/icons/tools-factory.png', '/assets/icons/panel-factory.png'],
      nextIcon: {
        src: '/assets/icons/arrow-down-2.png',
        style: {
          'transform': 'rotate(270deg)'
        }
      },
      downIcon: {
        src: '/assets/icons/arrow-down-2.png'
      },
      plusIcon: {
        src: '/assets/icons/plus-sign.png'
      }
    };
  },
  computed: {
    width: function width() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.width;
    },
    windowWidth: function windowWidth() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.compare;
    },
    windowCompare: function windowCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.compare;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.mediumCompare;
    },
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.medium;
    },
    large: function large() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.large;
    },
    compare: function compare() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.windowCompare;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.xsmall;
    }
  },
  methods: {
    cardGroups: function cardGroups(cards) {
      var c = _toConsumableArray(cards);

      c.forEach(function (e, i) {
        if (e.icon === 'plus') c.splice(i + 1, 0, {
          type: 'image',
          src: '/assets/icons/plus-sign.png'
        });
      });
      return c;
    },
    cards: function cards(main, _cards) {
      var index = main.icon.index.split(',');

      var c = _toConsumableArray(_cards);

      index.forEach(function (e, i) {
        var indicator = parseInt(e) + 1 + i;
        c.splice(indicator, 0, {
          type: 'image',
          src: main.hasOwnProperty('icon') ? main.icon.type : ''
        });
      });
      return c;
    },
    getIcon: function getIcon(card, index) {
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      if (style) {
        if (card.icon === 'next') {
          if (!this.xsmall) {
            return this.nextIcon.style;
          }
        }
      } else {
        switch (card.icon) {
          case 'next':
            if (this.xsmall) return this.downIcon.src;else return this.downIcon.src;

          case 'plus':
            return this.plusIcon.src;
        }
      }
    },
    getStyleIcon: function getStyleIcon(card) {
      return this.getIcon(card, true);
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
      var list = this.$t(this.page + '.connections.tabs');

      for (var i in list) {
        if (list[i].title === item.value) {
          return list[i].title;
        }
      }
    },
    setTab: function setTab(tab) {
      this.text = tab.title;
    },
    toggleModal: function toggleModal(val) {
      _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('openModal', {
        value: val,
        type: 'call'
      });
    },
    initialisePicker: function initialisePicker() {
      var _this2 = this;

      setTimeout(function () {
        var trigger = document.querySelector('#trigger8');

        if (trigger) {
          var _this = _this2;
          var vm = _this2;
          var mobileSelect1 = new MobileSelect({
            trigger: "#trigger8",
            title: "",
            wheels: [{
              data: _this2.fetchList(_this2.$t(_this2.page + '.connections.tabs'))
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
            }
          });
        }
      }, 700);
    }
  },
  mounted: function mounted() {
    this.initialisePicker();
  },
  watch: {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app #connections[data-v-3cf2437c] {\n  background-color: #F3F5F6;\n}\n#app #connections div.col-xl-7.col-11.m-xl-0[data-v-3cf2437c] {\n  padding: 0 !important;\n  max-width: 1160px !important;\n}\n.connections-flex.firstTab .content-card.icon-card-item[data-v-3cf2437c] {\n  background-color: white !important;\n  border-radius: 0 !important;\n}\n.connections-flex.firstTab .content-card[data-v-3cf2437c]:not(.icon-card-item):nth-child(1) {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.connections-flex.firstTab .content-card[data-v-3cf2437c]:not(.icon-card-item):nth-child(3) {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.content-card img[data-v-3cf2437c] {\n  margin-top: 20px !important;\n  padding: 0 !important;\n}\n.icon-card-item[data-v-3cf2437c] {\n  background-color: unset !important;\n}\n.custom-cards .connections-flex .content-card[data-v-3cf2437c] {\n  width: 180px !important;\n  background-color: unset !important;\n  padding: 10px 0 !important;\n}\n.connections-flex[data-v-3cf2437c] {\n  max-width: 1160px;\n  display: flex;\n  flex-flow: row wrap;\n  align-content: space-between;\n  justify-content: center;\n  margin-top: 60px !important;\n}\n.connections-flex .content-card[data-v-3cf2437c] {\n  border-radius: 10px;\n  text-align: center;\n  background-color: white !important;\n  padding: 10px 0 40px 0 !important;\n  display: flex;\n  align-items: center;\n}\n.connections-flex .content-card.icon-card-item[data-v-3cf2437c] {\n  background-color: unset !important;\n  width: 30px !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  justify-content: center;\n}\n.connections-flex .content-card.icon-card-item[data-v-3cf2437c]:nth-child(4) {\n  margin-right: 20px !important;\n}\n.connections-flex .content-card.icon-card-item[data-v-3cf2437c]:nth-child(6) {\n  margin-left: 20px !important;\n  margin-right: 20px !important;\n}\n.connections-flex .content-card.icon-card-item img[data-v-3cf2437c] {\n  padding: 0 !important;\n  width: 18px;\n  height: 18px;\n  margin-bottom: 90px;\n}\n.connections-flex .content-card[data-v-3cf2437c]:nth-last-child(1) {\n  background-color: white !important;\n}\n.connections-flex .content-card.header[data-v-3cf2437c] {\n  display: block;\n  width: 220px !important;\n  background-color: white !important;\n}\n.connections-flex .content-card.group[data-v-3cf2437c] {\n  width: auto !important;\n  padding: 0 !important;\n}\n.connections-flex .content-card .body h5[data-v-3cf2437c]:before {\n  display: none;\n}\n.connections-flex .content-card .body h5[data-v-3cf2437c], .connections-flex .content-card .body p[data-v-3cf2437c] {\n  padding: 0 15px !important;\n}\n.connections-flex .group-parent[data-v-3cf2437c] {\n  background-color: white !important;\n  padding: 10px 0 !important;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  border-radius: 10px;\n}\n.connections-flex .group-parent .group-flex[data-v-3cf2437c] {\n  display: flex;\n  height: 237px;\n}\n.connections-flex .group-parent .group-flex div[data-v-3cf2437c] {\n  width: 210px !important;\n}\n.connections-flex .group-parent .group-flex div.plus-card[data-v-3cf2437c] {\n  width: 10px !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  justify-content: center;\n  margin-top: 30px !important;\n}\n.group-parent > p[data-v-3cf2437c] {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n}\n.content-card.header > p[data-v-3cf2437c] {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n}\n#connections .connections-flex .group-flex .card-text[data-v-3cf2437c] {\n  padding: 0 10px !important;\n}\n.content-card[data-v-3cf2437c] {\n  text-transform: uppercase;\n}\n.content-card .body p.card-text[data-v-3cf2437c] {\n  padding: 0 !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n}\n.content-card .card-title[data-v-3cf2437c] {\n  text-transform: capitalize !important;\n}\n.connections-text[data-v-3cf2437c] {\n  max-width: 760px;\n  margin: auto !important;\n  text-align: center;\n}\n#connections .v-tabs .v-tabs-bar[data-v-3cf2437c] {\n  background-color: transparent !important;\n}\n#connections .theme--light.v-tabs-items[data-v-3cf2437c] {\n  background-color: transparent !important;\n}\n.v-tab[data-v-3cf2437c] {\n  padding: 0 30px 0 0;\n  border-bottom: 1px solid #DEDEDE;\n  font-weight: 600;\n  width: 100%;\n}\n.v-tab.v-tab--active[data-v-3cf2437c] {\n  color: #1f1f1f;\n}\n.connections-grid[data-v-3cf2437c] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(240px, 360px));\n  grid-column-gap: 40px;\n  grid-row-gap: 40px;\n}\n.content-card[data-v-3cf2437c] {\n  background-color: white;\n}\n.content-card .card-title[data-v-3cf2437c] {\n  padding: 0px 40px 0 40px;\n  font-weight: 600;\n}\n.content-card img[data-v-3cf2437c] {\n  padding: 30px 40px 10px 40px;\n}\n.content-card .card-text[data-v-3cf2437c] {\n  padding: 0 40px 40px 40px;\n}\n.content-card .body h5[data-v-3cf2437c] {\n  position: relative;\n}\n.content-card .body h5[data-v-3cf2437c]:before {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  background-color: #FFE454;\n  left: 0;\n}\n.v-tabs[data-v-3cf2437c] {\n  margin-bottom: 30px;\n}\n.v-tabs-items[data-v-3cf2437c] {\n  margin-bottom: 45px;\n  margin-top: 20px;\n}\n.firstTab .content-card .body p.card-text[data-v-3cf2437c] {\n  padding: 0 20px !important;\n}\n@media (min-width: 429px) and (max-width: 564px) {\n.connections-flex.firstTab .content-card[data-v-3cf2437c] {\n    width: 45%;\n}\n}\n@media (min-width: 1061px) {\n#connections .content-card.header .body p.card-text[data-v-3cf2437c] {\n    width: 90%;\n    margin: 0 auto;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_style_index_0_id_3cf2437c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_style_index_0_id_3cf2437c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_style_index_0_id_3cf2437c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_style_index_0_id_3cf2437c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_style_index_0_id_3cf2437c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=template&id=3cf2437c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/connections.vue?vue&type=template&id=3cf2437c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "connections" } }, [
    _c("div", { staticClass: "col-12 col-lg-12 py-0" }, [
      _c("div", { staticClass: "row padding-125 flex-column" }, [
        _c(
          "div",
          { staticClass: "col-xl-5 col-11 py-0 left-connection super-margin" },
          [
            _c(
              "div",
              { staticClass: "connections-text w-75 ml-auto" },
              [
                _c("h2", [_vm._v(_vm._s(_vm.$t("b2c.connections.title")))]),
                _vm._v(" "),
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
                                  id: "trigger8",
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
                                    _vm.title
                                      ? _vm.title
                                      : _vm.$t("b2c.connections.tabs")[0].title
                                  )
                                )
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.xsmall
                  ? _c(
                      "v-tabs",
                      {
                        model: {
                          value: _vm.tab,
                          callback: function($$v) {
                            _vm.tab = $$v
                          },
                          expression: "tab"
                        }
                      },
                      _vm._l(_vm.$t("b2c.connections.tabs"), function(
                        tab,
                        index
                      ) {
                        return _c("v-tab", { key: "tab-" + index }, [
                          _c("h5", [_vm._v(_vm._s(tab.title))])
                        ])
                      }),
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.xsmall
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
                      _vm._l(_vm.$t(_vm.page + ".connections.tabs"), function(
                        item,
                        i
                      ) {
                        return _c("v-tab-item", { key: "tab-" + i }, [
                          _c("p", [_vm._v(_vm._s(item.text))])
                        ])
                      }),
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.xsmall
                  ? _c(
                      "div",
                      {
                        staticClass: "tab-content col-lg-10 col-12 pr-0",
                        attrs: { id: "v-pills-tabContent" }
                      },
                      _vm._l(_vm.$t(_vm.page + ".connections.tabs"), function(
                        item,
                        i
                      ) {
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
                          [_c("p", [_vm._v(_vm._s(item.text))])]
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn-primary",
                    on: {
                      click: function($event) {
                        return _vm.toggleModal(true)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("order")))]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-7 col-11 m-xl-0 m-auto py-0" },
          [
            !_vm.xsmall
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
                  _vm._l(_vm.$t(_vm.page + ".connections.tabs"), function(
                    item,
                    i
                  ) {
                    return _c(
                      "v-tab-item",
                      {
                        key: "tab-item-" + i,
                        class: [i ? "custom-cards" : ""]
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "connections-flex",
                            class: [
                              item.tabNumber === 1 ? "firstTab" : "secondTab"
                            ]
                          },
                          _vm._l(_vm.cards(item, item.cards), function(
                            card,
                            num
                          ) {
                            return _c(
                              "div",
                              {
                                staticClass: "content-card",
                                class: [
                                  card.group && card.header
                                    ? "group"
                                    : card.header && !card.group
                                    ? "header"
                                    : "",
                                  card.hasOwnProperty("type")
                                    ? "icon-card-item"
                                    : ""
                                ]
                              },
                              [
                                card.header && !card.group
                                  ? _c("p", {
                                      domProps: {
                                        innerHTML: _vm._s(card.header)
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                !card.group && !card.hasOwnProperty("type")
                                  ? _c("div", [
                                      _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value: card.img,
                                            expression: "card.img"
                                          }
                                        ]
                                      }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "body mt-4" }, [
                                        _c(
                                          "h5",
                                          { staticClass: "card-title" },
                                          [_vm._v(_vm._s(card.title))]
                                        ),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "card-text" }, [
                                          _vm._v(_vm._s(card.text))
                                        ])
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                card.header &&
                                card.group &&
                                !card.hasOwnProperty("type")
                                  ? _c("div", { staticClass: "group-parent" }, [
                                      _c("p", {
                                        domProps: {
                                          innerHTML: _vm._s(card.header)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "group-flex" },
                                        _vm._l(
                                          _vm.cardGroups(card.group),
                                          function(cg) {
                                            return _c(
                                              "div",
                                              {
                                                class: [
                                                  cg.hasOwnProperty("type")
                                                    ? "plus-card"
                                                    : ""
                                                ]
                                              },
                                              [
                                                !cg.hasOwnProperty("type")
                                                  ? _c("img", {
                                                      directives: [
                                                        {
                                                          name: "lazy",
                                                          rawName: "v-lazy",
                                                          value: cg.img,
                                                          expression: "cg.img"
                                                        }
                                                      ]
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                !cg.hasOwnProperty("type")
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass: "body mt-4"
                                                      },
                                                      [
                                                        _c(
                                                          "h5",
                                                          {
                                                            staticClass:
                                                              "card-title"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(cg.title)
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "card-text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(cg.text)
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                cg.hasOwnProperty("type")
                                                  ? _c("img", {
                                                      staticClass: "plus-icon",
                                                      attrs: { src: cg.src }
                                                    })
                                                  : _vm._e()
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                card.hasOwnProperty("type") &&
                                card.src === "next"
                                  ? _c("img", {
                                      style: _vm.nextIcon.style,
                                      attrs: { src: _vm.nextIcon.src }
                                    })
                                  : _vm._e()
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  }),
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.xsmall
              ? _c(
                  "div",
                  {
                    staticClass: "tab-content col-lg-10 col-12 pr-0",
                    attrs: { id: "v-pills-tabContent" }
                  },
                  _vm._l(_vm.$t("b2c.connections.tabs"), function(item, index) {
                    return _c(
                      "div",
                      {
                        class: [
                          "tab-pane",
                          "fade",
                          item.title === _vm.active ? "show active" : "",
                          [index ? "custom-cards" : ""]
                        ],
                        attrs: {
                          id: item.title,
                          role: "tabpanel",
                          "aria-labelledby": "v-pills-home-tab"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "connections-grid",
                            class: [
                              item.tabNumber === 1 ? "firstTab" : "secondTab"
                            ]
                          },
                          _vm._l(_vm.cards(item, item.cards), function(card) {
                            return _c(
                              "div",
                              {
                                staticClass: "content-card",
                                class: [
                                  card.group && card.header
                                    ? "group"
                                    : card.header && !card.group
                                    ? "header"
                                    : "",
                                  card.hasOwnProperty("type")
                                    ? "icon-card-item"
                                    : ""
                                ]
                              },
                              [
                                card.header && !card.group
                                  ? _c("p", {
                                      domProps: {
                                        innerHTML: _vm._s(card.header)
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                !card.group && !card.hasOwnProperty("type")
                                  ? _c("div", [
                                      _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value: card.img,
                                            expression: "card.img"
                                          }
                                        ]
                                      }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "body mt-4" }, [
                                        _c(
                                          "h5",
                                          { staticClass: "card-title" },
                                          [_vm._v(_vm._s(card.title))]
                                        ),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "card-text" }, [
                                          _vm._v(_vm._s(card.text))
                                        ])
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                card.header &&
                                card.group &&
                                !card.hasOwnProperty("type")
                                  ? _c("div", { staticClass: "group-parent" }, [
                                      _c("p", {
                                        domProps: {
                                          innerHTML: _vm._s(card.header)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "group-flex" },
                                        _vm._l(
                                          _vm.cardGroups(card.group),
                                          function(cg) {
                                            return _c("div", [
                                              !cg.hasOwnProperty("type")
                                                ? _c("img", {
                                                    directives: [
                                                      {
                                                        name: "lazy",
                                                        rawName: "v-lazy",
                                                        value: cg.img,
                                                        expression: "cg.img"
                                                      }
                                                    ]
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              !cg.hasOwnProperty("type")
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "body mt-4"
                                                    },
                                                    [
                                                      _c(
                                                        "h5",
                                                        {
                                                          staticClass:
                                                            "card-title"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(cg.title)
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "card-text"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(cg.text)
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              cg.hasOwnProperty("type")
                                                ? _c("img", {
                                                    staticClass: "plus-icon",
                                                    attrs: { src: cg.src }
                                                  })
                                                : _vm._e()
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                card.hasOwnProperty("type") &&
                                card.src === "next"
                                  ? _c("img", {
                                      style: _vm.nextIcon.style,
                                      attrs: { src: _vm.nextIcon.src }
                                    })
                                  : _vm._e()
                              ]
                            )
                          }),
                          0
                        )
                      ]
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

/***/ "./resources/js/components/public/includes/connections.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/public/includes/connections.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connections_vue_vue_type_template_id_3cf2437c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connections.vue?vue&type=template&id=3cf2437c&scoped=true& */ "./resources/js/components/public/includes/connections.vue?vue&type=template&id=3cf2437c&scoped=true&");
/* harmony import */ var _connections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connections.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/connections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _connections_vue_vue_type_style_index_0_id_3cf2437c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss& */ "./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _connections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _connections_vue_vue_type_template_id_3cf2437c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _connections_vue_vue_type_template_id_3cf2437c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cf2437c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/connections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/connections.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/public/includes/connections.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./connections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_style_index_0_id_3cf2437c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=style&index=0&id=3cf2437c&scoped=true&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/connections.vue?vue&type=template&id=3cf2437c&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/connections.vue?vue&type=template&id=3cf2437c&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_template_id_3cf2437c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./connections.vue?vue&type=template&id=3cf2437c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/connections.vue?vue&type=template&id=3cf2437c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_template_id_3cf2437c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_connections_vue_vue_type_template_id_3cf2437c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);