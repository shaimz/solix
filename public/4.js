(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../width */ "./resources/js/width.js");
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../event/eventbus */ "./resources/js/event/eventbus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'allProjects',
  props: ['lang', 'show'],
  components: {
    InfiniteLoading: InfiniteLoading
  },
  data: function data() {
    return {
      language: this.$route.params.locale === 'en' ? 1 : this.$route.params.locale === 'ru' ? 3 : 2,
      projects: [],
      active: 'all',
      itemsToShow: 4,
      total: 0,
      toShow: this.show,
      render: false,
      loading: false,
      text: '',
      tabs: [],
      page: 1,
      infiniteId: +new Date(),
      visible: true,
      permission: false,
      type: 0
    };
  },
  computed: {
    data: function data() {
      return this.$store.getters.getProjects;
    },
    large: function large() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.large;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.small;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xsmall;
    },
    infinite: function infinite() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.largeCompare;
    },
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.medium;
    },
    mediumCompare: function mediumCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.mediumCompare;
    },
    xlarge: function xlarge() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.xlarge;
    },
    windowWidth: function windowWidth() {
      return _width__WEBPACK_IMPORTED_MODULE_0__["default"].data.innerWidth;
    },
    typeId: function typeId() {
      return this.$store.getters.getType;
    }
  },
  methods: {
    infiniteHandler: function infiniteHandler($state) {
      var _this2 = this;

      if (this.xlarge) {
        setTimeout(function () {
          $('.infinite-loading-container').show();

          _this2.$store.dispatch('projects', {
            lang: _this2.language ? _this2.language : 0,
            limit: _this2.show ? _this2.show : 0,
            offset: _this2.itemsToShow,
            type: _this2.type
          }).then(function () {
            var projects = _this2.data;

            if (projects.length) {
              _this2.itemsToShow += _this2.show;
              _this2.page += 1;
              projects.forEach(function (item) {
                _this2.projects.push(item);
              });
              _this2.permission = true;
              $state.loaded();
            } else {
              $state.complete();
              $('.infinite-loading-container').hide();
            }
          });
        }, 1500);
      }
    },
    addItem: function addItem(item) {
      var _this3 = this;

      this.text = item.text;
      this.$nextTick(function () {
        _this3.active = item.tab;
      });
    },
    addItemsToShow: function addItemsToShow() {
      var _this4 = this;

      this.itemsToShow += this.show;
      this.$store.dispatch('projects', {
        lang: this.language ? this.language : 0,
        limit: this.show ? this.show : 0,
        offset: this.itemsToShow - this.show ? this.itemsToShow - this.show : 0
      }).then(function () {
        var projects = _this4.data;

        if (projects.length) {
          projects.forEach(function (item) {
            _this4.projects.push(item);
          });
          _this4.visible = projects.length >= _this4.show;
        } else {
          _this4.visible = false;
        }
      });
    },
    projectSort: function projectSort(items, type) {
      var data = [];
      var person = ['Частные лица', 'Persoane fizice', 'Individuals'];
      var business = ['Для бизнеса', 'For business', 'Pentru afaceri'];
      var juridic = ['Госучереждения', 'Instituții de stat', 'State institutions'];

      switch (type) {
        case 'all':
          return items;

        case 'person':
          data = items.map(function (item) {
            return person.includes(item.projects.type) ? item : '';
          });
          break;

        case 'business':
          data = items.map(function (item) {
            return business.includes(item.projects.type) ? item : '';
          });
          break;

        case 'juridic':
          data = items.map(function (item) {
            return juridic.includes(item.projects.type) ? item : '';
          });
          break;

        default:
          data = [];
          break;
      }

      return data.filter(function (item) {
        return item;
      });
    },
    itemSort: function itemSort(items, type) {
      var data = [];
      var result = [];

      switch (type) {
        case 'all':
          return items.filter(function (e) {
            return e.projects;
          });

        case 'person':
          data = items.map(function (item) {
            return item.type_id === 2 ? item : '';
          }).filter(function (e) {
            return e.projects;
          });
          break;

        case 'business':
          data = items.map(function (item) {
            return item.type_id === 3 ? item : '';
          }).filter(function (e) {
            return e.projects;
          });
          break;

        case 'juridic':
          data = items.map(function (item) {
            return item.type_id === 1 ? item : '';
          }).filter(function (e) {
            return e.projects;
          });
          break;

        default:
          data = [];
          break;
      }

      result = data.filter(function (item) {
        return item;
      });

      if (result.length) {
        return result;
      } else {
        this.total = 0;
      }

      return result;
    },
    setActive: function setActive(tab) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.page = 1;
      this.type = id;
      this.list = [];
      this.infiniteId += 1;
      this.itemsToShow = this.show;
      this.fetchData(id);
      this.$store.dispatch('type', id);

      if (tab !== this.active) {
        this.active = tab;
        this.itemsToShow = this.show;
        this.visible = true;
        this.render = false;
        _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('render', false);
        _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('tabchange', true);
        this.getTotalByType(id);
      }
    },
    isOdd: function isOdd(index) {
      return index % 2 === 0;
    },
    renderRow: function renderRow(data) {
      var items = [];
      var offset = 0;
      var end = 2;

      if (data.length > 1) {
        while (data.slice(offset, end).length >= 1) {
          items.push(data.slice(offset, end));
          offset += 2;
          end += 2;
        }
      } else {
        while (data.slice(offset, end).length >= 1) {
          items.push(data.slice(offset, end));
          offset += 1;
          end += 2;
        }
      }

      return items;
    },
    fetchData: function fetchData() {
      var _this5 = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.$store.dispatch('projects', {
        lang: this.language,
        limit: this.show,
        offset: this.itemsToShow - this.show,
        type: type
      }).then(function () {
        _this5.projects = _this5.data;
        _this5.itemsToShow = _this5.show;
        _this5.permission = true;
        _this5.visible = _this5.projects.length;
      });
    },
    getCount: function getCount() {
      var _this6 = this;

      axios.get('/get-total', {
        params: {
          lang: this.language,
          type: 'projects'
        }
      }).then(function (response) {
        _this6.total = response.data;
      });
    },
    getTotalByType: function getTotalByType(id) {
      var _this7 = this;

      axios.get('/get-bytype', {
        params: {
          lang: this.language,
          type: 'projects',
          typeId: id
        }
      }).then(function (response) {
        _this7.total = response.data;
      });
    },
    fetchList: function fetchList(list) {
      var array = [];

      for (var i in list) {
        if (list[i].text) array.push({
          id: list[i].id,
          value: list[i].text
        });
      }

      return array;
    },
    getTab: function getTab(item) {
      var list = this.$t('home.projects.filter');

      for (var i in list) {
        if (list[i].text === item.value) {
          return list[i].tab;
        }
      }
    },
    initialisePicker: function initialisePicker() {
      var _this8 = this;

      setTimeout(function () {
        var trigger = document.querySelector('#trigger1');

        if (trigger) {
          var _this = _this8;
          var vm = _this8;
          var mobileSelect1 = new MobileSelect({
            trigger: "#trigger1",
            title: "",
            wheels: [{
              data: _this8.fetchList(_this8.$t('home.projects.filter'))
            }],
            cancelBtnText: _this8.$t('cancel'),
            ensureBtnText: _this8.$t('select'),
            jsonType: true,
            position: [0],
            transitionEnd: function transitionEnd(indexArr, data) {},
            onShow: function onShow(e) {},
            callback: function callback(indexArr, data) {
              var s = data[0];
              vm.active = _this.getTab(s);
              vm.text = s.value;
              vm.$store.dispatch('type', s.id);
            }
          });
        }
      }, 800);
    }
  },
  created: function created() {
    var _this9 = this;

    this.$store.dispatch('projects', {
      lang: this.language,
      limit: this.show,
      offset: 0
    }).then(function () {
      _this9.projects = _this9.data;
      _this9.total = _this9.projects.length;
      _this9.itemsToShow = _this9.show;
    });
  },
  mounted: function mounted() {
    var _this10 = this;

    this.type = this.typeId;
    this.$t('home.projects.filter').forEach(function (i, e) {
      if (_this10.type === i.id) {
        _this10.active = i.tab;
        _this10.text = i.text;
      }
    });
    this.render = true;
    setTimeout(function () {
      _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('render', true);
    }, 200);
    this.initialisePicker();
    this.getCount();
    this.permission = true;
  },
  watch: {
    language: function language(newVal, oldVal) {
      if (oldVal !== newVal) this.language = newVal;
    },
    itemsToShow: function itemsToShow(n, o) {
      if (n !== o) {
        if (n > 4 && this.xsmall) this.visible = false;
      }
    },
    mediumCompare: function mediumCompare(newVal, oldVal) {
      if (oldVal !== newVal) {}
    },
    small: function small(newVal, oldVal) {
      if (oldVal !== newVal) {
        if (newVal) {
          this.render = true;
          setTimeout(function () {
            _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('render', true);
          }, 500);
        } else {
          this.render = false;
          _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('render', false);
        }
      }
    },
    projects: function projects(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.total = newVal.length;
      }
    },
    active: function active(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.render = true;
        setTimeout(function () {
          _event_eventbus__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('render', true);
        }, 1000);
      }
    },
    toShow: function toShow(newVal, oldVal) {
      if (newVal !== oldVal) this.itemsToShow = newVal;
    },
    xsmall: function xsmall(newVal, oldVal) {
      var _this11 = this;

      if (newVal !== oldVal) {
        if (newVal) {
          setTimeout(function () {
            _this11.permission = true;
          }, 300);
          this.initialisePicker();
        } else {
          this.permission = false;
        }
      }
    },
    medium: function medium(n, o) {
      if (n) {}
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.border-left-section[data-v-5187b056]:before {\n    content: '';\n    position: absolute;\n    width: 2px;\n    height: 99.5%;\n    background-color: #DEDEDE;\n    transform: translateY(5px);\n    z-index: 1;\n}\n.nav-pills[data-v-5187b056] {\n    padding: 0 !important;\n}\n.nav-pills button.nav-link[data-v-5187b056] {\n    font-size: 20px;\n}\n.project-more span[data-v-5187b056] {\n    transition: transform .2s ease-in-out;\n}\n.project-more:hover span[data-v-5187b056] {\n    transform: translateX(-7px);\n}\n.card-project-features > div[data-v-5187b056]:nth-child(1) {\n    font-weight: 700;\n}\n.project-power[data-v-5187b056] {\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_5187b056_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_5187b056_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_5187b056_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_5187b056_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_5187b056_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=template&id=5187b056&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=template&id=5187b056&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-center col-lg-11 col-xl-7 col-md-11 mx-auto py-0 position-unset pl-0"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "col-md-12 p-0 d-xs-block d-xlarge-flex border-left-section position-unset"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "nav nav-pills me-3 col-xl-2 col-11 px-0 flex-lg-column flex-row flex-xlarge-column",
                  attrs: {
                    id: "v-pills-tab",
                    role: "tablist",
                    "aria-orientation": "vertical"
                  }
                },
                [
                  _vm._l(_vm.$t("home.projects.filter"), function(item) {
                    return (_vm.small && !_vm.xsmall) || _vm.medium || _vm.large
                      ? _c(
                          "button",
                          {
                            class: [
                              "nav-link",
                              _vm.active === item.tab ? "active" : ""
                            ],
                            attrs: {
                              id: "v-pills-home-" + item.tab,
                              "data-bs-toggle": "pill",
                              "data-bs-target": "#" + item.tab,
                              type: "button",
                              role: "tab",
                              "aria-controls": "v-pills-home",
                              "aria-selected": "true"
                            },
                            on: {
                              click: function($event) {
                                return _vm.setActive(item.tab, item.id)
                              }
                            },
                            model: {
                              value: _vm.active,
                              callback: function($$v) {
                                _vm.active = $$v
                              },
                              expression: "active"
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(item.text) +
                                "\n                "
                            )
                          ]
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _vm.xsmall
                    ? _c("ul", [
                        _c("li", { staticClass: "nav-item dropdown" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link dropdown-toggle",
                              attrs: {
                                id: "trigger1",
                                href: "#",
                                role: "button",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.text
                                    ? _vm.text
                                    : _vm.$t("home.projects.filter")[0].text
                                )
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  key: _vm.active,
                  staticClass: "tab-content col-xl-10 col-12 pr-0",
                  attrs: { id: "v-pills-tabContent" }
                },
                [
                  _vm._l(_vm.$t("home.projects.filter"), function(item) {
                    return _vm.xsmall ||
                      (!_vm.small && !_vm.xsmall) ||
                      (_vm.small && _vm.$route.path.includes("projects"))
                      ? _c(
                          "div",
                          {
                            class: [
                              "tab-pane",
                              "fade",
                              item.tab === _vm.active ? "show active" : ""
                            ],
                            attrs: {
                              id: item.tab,
                              role: "tabpanel",
                              "aria-labelledby": "v-pills-home-tab"
                            }
                          },
                          _vm._l(_vm.itemsToShow / 2, function(index) {
                            return index <= _vm.itemsToShow && _vm.permission
                              ? _c(
                                  "div",
                                  {
                                    key: index,
                                    staticClass:
                                      "d-flex justify-content-lg-between justify-content-center flex-wrap row mb-10"
                                  },
                                  _vm._l(
                                    _vm.renderRow(
                                      _vm.itemSort(_vm.projects, _vm.active)
                                    )[index - 1],
                                    function(card, i) {
                                      return card.projects.name
                                        ? _c(
                                            "router-link",
                                            {
                                              key: "card-num-" + i,
                                              class: [
                                                "card",
                                                _vm.isOdd(index) && _vm.isOdd(i)
                                                  ? "col-lg-5 col-11 ml-lg-9"
                                                  : !_vm.isOdd(index) &&
                                                    !_vm.isOdd(i)
                                                  ? "col-lg-5 col-11"
                                                  : _vm.isOdd(index) &&
                                                    !_vm.isOdd(i)
                                                  ? "col-lg-6 col-11"
                                                  : !_vm.isOdd(index) &&
                                                    _vm.isOdd(i)
                                                  ? "col-lg-6 col-11 ml-lg-9"
                                                  : "col-lg-5 col-11"
                                              ],
                                              attrs: {
                                                to: {
                                                  name: "project",
                                                  params: {
                                                    locale:
                                                      _vm.$route.params.locale,
                                                    id: card.id
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
                                                    value: "/" + card.image,
                                                    expression: "'/'+card.image"
                                                  }
                                                ],
                                                staticClass: "card-img-top",
                                                attrs: { alt: "" }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "card-body" },
                                                [
                                                  _c(
                                                    "h4",
                                                    {
                                                      staticClass:
                                                        "before-border"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          card.projects.name
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "project-description"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          card.projects
                                                            .description
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "card-project-features d-flex"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        { staticClass: "mr-5" },
                                                        [
                                                          _c(
                                                            "i",
                                                            {
                                                              staticClass:
                                                                "margin-icon"
                                                            },
                                                            [
                                                              _c("img", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "lazy",
                                                                    rawName:
                                                                      "v-lazy",
                                                                    value:
                                                                      "/assets/icons/location-grey.png",
                                                                    expression:
                                                                      "'/assets/icons/location-grey.png'"
                                                                  }
                                                                ]
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            _vm._s(
                                                              card.projects
                                                                .location
                                                            ) +
                                                              "\n                                    "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "font-number project-power"
                                                        },
                                                        [
                                                          _c(
                                                            "i",
                                                            {
                                                              staticClass:
                                                                "margin-icon"
                                                            },
                                                            [
                                                              _c("img", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "lazy",
                                                                    rawName:
                                                                      "v-lazy",
                                                                    value:
                                                                      "/assets/icons/light-grey.png",
                                                                    expression:
                                                                      "'/assets/icons/light-grey.png'"
                                                                  }
                                                                ]
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            _vm._s(card.power) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.$t("power")
                                                              ) +
                                                              "\n                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "btn-secondary project-more d-flex justify-content-evenly",
                                                  attrs: {
                                                    to: "projects/" + card.id
                                                  }
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(_vm.$t("more"))
                                                    )
                                                  ]),
                                                  _c("i", {
                                                    staticClass:
                                                      "arrow right ml-2"
                                                  })
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          }),
                          0
                        )
                      : !_vm.$route.path.includes("projects") &&
                        _vm.small &&
                        !_vm.xsmall
                      ? _c(
                          "div",
                          {
                            class: [
                              "tab-pane",
                              "fade",
                              item.tab === _vm.active ? "show active" : ""
                            ],
                            attrs: {
                              id: item.tab,
                              role: "tabpanel",
                              "aria-labelledby": "v-pills-home-tab"
                            }
                          },
                          [
                            _vm.render
                              ? _c(
                                  "div",
                                  { staticClass: "project-slick" },
                                  _vm._l(
                                    _vm.projectSort(_vm.projects, _vm.active),
                                    function(card, index) {
                                      return _c(
                                        "router-link",
                                        {
                                          key: "card-" + index,
                                          class: ["card", "col-lg-5 col-11"],
                                          attrs: {
                                            to: {
                                              name: "project",
                                              params: {
                                                locale:
                                                  _vm.$route.params.locale,
                                                id: card.id
                                              }
                                            }
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "card-img-top",
                                            attrs: {
                                              src: "/" + card.image,
                                              alt: ""
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "card-body" },
                                            [
                                              _c(
                                                "h4",
                                                {
                                                  staticClass: "before-border"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(card.projects.name)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "project-description"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      card.projects.description
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "card-project-features d-flex"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-5" },
                                                    [
                                                      _c(
                                                        "i",
                                                        {
                                                          staticClass:
                                                            "margin-icon"
                                                        },
                                                        [
                                                          _c("img", {
                                                            directives: [
                                                              {
                                                                name: "lazy",
                                                                rawName:
                                                                  "v-lazy",
                                                                value:
                                                                  "/assets/icons/location-grey.png",
                                                                expression:
                                                                  "'/assets/icons/location-grey.png'"
                                                              }
                                                            ]
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        _vm._s(
                                                          card.projects.location
                                                        ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "font-number project-power"
                                                    },
                                                    [
                                                      _c(
                                                        "i",
                                                        {
                                                          staticClass:
                                                            "margin-icon"
                                                        },
                                                        [
                                                          _c("img", {
                                                            directives: [
                                                              {
                                                                name: "lazy",
                                                                rawName:
                                                                  "v-lazy",
                                                                value:
                                                                  "/assets/icons/light-grey.png",
                                                                expression:
                                                                  "'/assets/icons/light-grey.png'"
                                                              }
                                                            ]
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        _vm._s(card.power) +
                                                          " " +
                                                          _vm._s(
                                                            _vm.$t("power")
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "btn-secondary project-more d-flex justify-content-evenly",
                                              attrs: {
                                                to: "projects/" + card.id
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(_vm._s(_vm.$t("more")))
                                              ]),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass: "arrow right ml-2"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ]
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-md-12 ml-xlarge-8 justify-content-center d-flex"
                    },
                    [
                      _vm.visible &&
                      (_vm.large || _vm.infinite || _vm.xsmall) &&
                      _vm.itemsToShow <= _vm.total &&
                      !_vm.$route.path.includes("projects") &&
                      !_vm.small
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "btn-primary text-center d-flex m-auto",
                              on: { click: _vm.addItemsToShow }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("load")) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.small &&
                      !_vm.xsmall &&
                      _vm.visible &&
                      !_vm.$route.path.includes("projects")
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-primary text-center",
                              attrs: {
                                to: {
                                  name: "projects",
                                  params: { locale: _vm.$route.params.locale }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("load")) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                2
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.renderRow(_vm.itemSort(_vm.projects, _vm.active)).length &&
      (_vm.xsmall || _vm.small || _vm.large) &&
      _vm.$route.path.includes("projects")
        ? _c(
            "infinite-loading",
            {
              key: _vm.active,
              staticClass: "col-7",
              attrs: { identifier: _vm.infiniteId },
              on: { infinite: _vm.infiniteHandler }
            },
            [
              _c("div", { attrs: { slot: "spinner" }, slot: "spinner" }, [
                _c("div", { staticClass: "m-auto loading-more" }, [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: "/assets/icons/more.png",
                        expression: "'/assets/icons/more.png'"
                      }
                    ]
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "no-more" }, slot: "no-more" }),
              _vm._v(" "),
              _c("div", { attrs: { slot: "no-results" }, slot: "no-results" })
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/Projects/Projects.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/public/includes/Projects/Projects.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_5187b056_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=5187b056&scoped=true& */ "./resources/js/components/public/includes/Projects/Projects.vue?vue&type=template&id=5187b056&scoped=true&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/Projects/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Projects_vue_vue_type_style_index_0_id_5187b056_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css& */ "./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_5187b056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_5187b056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5187b056",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/Projects/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/Projects/Projects.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Projects/Projects.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_5187b056_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=style&index=0&id=5187b056&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/Projects/Projects.vue?vue&type=template&id=5187b056&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Projects/Projects.vue?vue&type=template&id=5187b056&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_5187b056_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=5187b056&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Projects/Projects.vue?vue&type=template&id=5187b056&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_5187b056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_5187b056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);