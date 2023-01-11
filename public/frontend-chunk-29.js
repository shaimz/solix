(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-29"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/header.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/locales */ "./resources/js/constants/locales.js");
/* harmony import */ var _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../event/eventbus.js */ "./resources/js/event/eventbus.js");
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



var Footer = function Footer() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-28").then(__webpack_require__.bind(null, /*! ./footer */ "./resources/js/components/public/includes/footer.vue"));
};



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Footer: Footer
  },
  props: {
    lang: Number,
    color: String,
    position: String,
    sticky: Boolean
  },
  data: function data() {
    return {
      language: this.currentLang,
      dropLanguage: '',
      path: '/',
      locales: _constants_locales__WEBPACK_IMPORTED_MODULE_1__["SUPPORTED_LOCALES"],
      page: '',
      navbar: false,
      isSticky: false,
      stickyClass: 'is_sticky',
      scrollPosition: 0,
      exactColor: '',
      exactPosition: ''
    };
  },
  computed: {
    theme: function theme() {
      return this.color;
    },
    pos: function pos() {
      return this.position;
    },
    currentLang: function currentLang() {
      return this.$route.params.locale === 'en' ? 1 : this.$route.params.locale === 'ru' ? 3 : 2;
    },
    windowWidth: function windowWidth() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.innerWidth;
    },
    windowCompare: function windowCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.compare;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.small;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.xsmall;
    },
    large: function large() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.large;
    },
    largeCompare: function largeCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.largeCompare;
    },
    mediumCompare: function mediumCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.mediumCompare;
    },
    smallCompare: function smallCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.smallCompare;
    },
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.medium;
    },
    locale: function locale() {
      return this.$store.getters.getPublicLanguage;
    },
    compare: function compare() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.windowCompare;
    }
  },
  created: function created() {
    $('html').css("overflow", 'hidden');
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    hideBrand: function hideBrand() {
      var elem = $("#navbar-open #footer");

      if (elem.scrollTop()) {
        $('.navbar-brand').hide();
      } else {
        $('.navbar-brand').show();
      }
    },
    hideForm: function hideForm() {
      var elem = $("#navbar-open #footer");

      if (elem.scrollTop()) {
        $('.form-navbar').hide();
      } else {
        $('.form-navbar').show();
      }
    },
    openModal: function openModal() {
      this.open = true;
    },
    linkCreator: function () {
      var _linkCreator = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(locale) {
        var route, result, str;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = this.$router.currentRoute;
                result = '/' + locale + '/';

                if (!(route === 'Home')) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", result);

              case 6:
                str = route.toLowerCase();
                result += str;
                return _context.abrupt("return", result);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function linkCreator(_x) {
        return _linkCreator.apply(this, arguments);
      }

      return linkCreator;
    }(),
    toggleModal: function toggleModal(val) {
      _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('openModal', {
        value: val,
        type: 'call'
      });
    },
    isActive: function isActive(id) {
      var language = this.currentLang;

      if (language === id) {
        if (id === 1) {
          this.dropLanguage = 'EN';
        } else if (id === 2) {
          this.dropLanguage = 'RO';
        } else {
          this.dropLanguage = 'RU';
        }
      }

      return this.language === id;
    },
    setActive: function setActive(id) {
      if (id === 1) {
        this.setLocale('en');
      } else if (id === 2) {
        this.setLocale('ro');
      } else {
        this.setLocale('ru');
      }

      this.language = id;
      this.dropLanguage = id === 3 ? 'RU' : id === 2 ? 'RO' : 'EN';
      setTimeout(function () {
        $(document).find('html').css('overflow', 'initial');
      }, 200);
    },
    setLocale: function setLocale(id) {
      this.$root.$i18n.locale = id;
      this.$store.dispatch('setPublicLanguage', this.locales.find(function (item) {
        return item.code === id;
      }));
    },
    closeNavbar: function closeNavbar() {
      this.navbar = false;
      $('body').find('.navbar-collapse').removeClass('show');
    },
    openNavbar: function openNavbar() {
      this.navbar = !this.navbar;

      if (this.navbar === true) {
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'light');
        $('body').find('.navbar-collapse').removeClass('show');
        $(document).find('html').css('overflow', 'hidden');
      } else {
        setTimeout(function () {
          $(document).find('html').css('overflow', 'initial');
        }, 200);
      }
    },
    handleScroll: function handleScroll(event) {
      this.scrollPosition = window.scrollY;
      this.isSticky = this.scrollPosition >= 100;
    },
    calcWidth: function calcWidth() {
      var navwidth = 0;
      var morewidth = $('#main .more').outerWidth(true);
      $('#main > li:not(.more)').each(function () {
        navwidth += $(this).outerWidth(true);
      });
      var availablespace = $('nav').outerWidth(true) - 600 - morewidth;

      if (navwidth > availablespace) {
        var lastItem = $('#main > li:not(.more)').last();
        lastItem.attr('data-width', lastItem.outerWidth(true));
        lastItem.prependTo($('#main .more ul'));
        this.calcWidth();
      } else {
        var firstMoreElement = $('#main li.more li').first();

        if (navwidth + firstMoreElement.data('width') < availablespace) {
          firstMoreElement.insertBefore($('#main .more'));
        }
      }

      $('.more').ontouchstart = function () {
        $('.more ul').toggle('slide');
      };

      if ($('.more li').length > 0) {
        $('.more').css('display', 'inline-block');
      } else {
        $('.more').css('display', 'none');
      }
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this = this;

    this.open = false;
    this.isLoading = true;
    _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('openModal', {
      value: false
    }).then(function () {
      to.params.locale = _this.locale.code;
      next();
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    setTimeout(function () {
      _this2.exactPosition = _this2.pos;
      _this2.exactColor = _this2.theme;

      if (_this2.navbar) {
        _this2.exactColor = _this2.theme === 'dark' ? 'light' : 'dark';
      }
    }, 100);
    setTimeout(function () {
      if (_this2.isSticky && _this2.compare) {
        _this2.calcWidth();
      }
    }, 50);

    if (this.$router.currentRoute.path.includes('products') && this.compare && !this.$router.currentRoute.params.id) {
      this.isSticky = this.sticky;
    } else {
      this.isSticky = false;
    }

    if (this.isSticky) {
      if (this.exactPosition === 'relative') {
        $('body').css('padding-top', '70px');
      }
    } else {
      $('body').css('padding-top', '0');
    }

    setTimeout(function () {
      $(document).find('html').css('overflow', 'initial');
    }, 300);
  },
  watch: {
    open: function open(val) {
      this.open = val;
    },
    lang: function lang(newVal, oldVal) {
      if (oldVal !== newVal) this.$emit('langUpdate', newVal);
    },
    language: function language(newVal, oldVal) {
      if (oldVal !== newVal) this.$emit('languageUpdated', newVal);
    },
    color: function color(newVal, oldVal) {},
    smallCompare: function smallCompare(n, o) {
      var _this3 = this;

      if (n !== o) {
        if (this.mediumCompare && !n) {
          if (document.querySelector('#navbar-open #footer')) {
            setTimeout(function () {
              document.querySelector('#navbar-open #footer').addEventListener('scroll', _this3.hideForm);
            }, 200);
          }
        } else if (n) {
          if (document.querySelector('#navbar-open #footer')) {
            setTimeout(function () {
              document.querySelector('#navbar-open #footer').addEventListener('scroll', _this3.hideBrand);
            }, 200);
          }
        }
      }
    },
    position: function position(newVal, oldVal) {},
    compare: function compare(n, o) {},
    windowWidth: function windowWidth(n, o) {
      if (n > 1024) {
        if (this.isSticky) {
          this.calcWidth();
        }
      }
    },
    sticky: function sticky(newVal, oldVal) {
      this.isSticky = newVal;
    },
    isSticky: function isSticky(newVal, oldVal) {
      var _this4 = this;

      if (newVal) {
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('position', 'fixed');
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'light');

        if (this.compare) {
          setTimeout(function () {
            _this4.calcWidth();
          }, 50);
        }

        if (this.exactPosition === 'relative') {
          $('body').css('padding-top', '70px');
        } else {
          $('body').css('padding-top', '0');
        }
      } else {
        if (!this.$route.path.includes('products')) {
          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', this.exactColor);

          if (this.$route.path.includes('contacts')) {
            _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'light');
          }

          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('position', this.exactPosition);
        } else {
          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('position', 'relative');
          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'light');
        }

        $('body').css('padding-top', '0');
      }
    },
    navbar: function navbar(newVal, oldVal) {
      var _this5 = this;

      if (newVal) {
        if (this.isSticky) {
          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'light');
        }

        if (this.mediumCompare && !this.smallCompare) {
          if (document.querySelector('#navbar-open #footer')) {
            setTimeout(function () {
              document.querySelector('#navbar-open #footer').addEventListener('scroll', _this5.hideForm);
            }, 200);
          }
        } else if (this.smallCompare) {
          if (document.querySelector('#navbar-open #footer')) {
            setTimeout(function () {
              document.querySelector('#navbar-open #footer').addEventListener('scroll', _this5.hideBrand);
            }, 200);
          }
        }
      } else {
        setTimeout(function () {
          document.querySelector('#navbar-open #footer').removeEventListener('scroll', _this5.hideBrand);
          document.querySelector('#navbar-open #footer').removeEventListener('scroll', _this5.hideForm);
        }, 200);

        if (this.isSticky) {
          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'light');
        } else {
          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', this.exactColor);
        }
      }
    },
    largeCompare: function largeCompare(newVal, oldVal) {
      if (!newVal) {
        this.navbar = false;
        setTimeout(function () {
          $(document).find('html').css('overflow', 'initial');
        }, 200);
      }
    },
    $route: function $route(to) {
      if (!to.path.includes('products')) {
        this.isSticky = false;
      } else {}

      this.page = to.name;
      this.path = this.page ? to.path.substring(this.locale.base.length) : to.path;
      this.navbar = false;

      if (this.isSticky) {
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('position', this.exactPosition);
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', this.exactColor);
      } else {
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', this.exactColor);

        if (to.path.includes('contacts')) {
          _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'light');
        }

        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('position', this.exactPosition);
      }

      $('body').find('.navbar-collapse').removeClass('show');
      $(document).find('html').css('overflow', 'initial');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/header.vue?vue&type=template&id=4f5a5994&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/header.vue?vue&type=template&id=4f5a5994& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-100 position-relative", attrs: { id: "nav-top" } },
    [
      _c("header", {}, [
        _c(
          "div",
          {
            staticClass:
              "container-fluid px-4 d-xlarge-flex justify-content-between"
          },
          [
            _c(
              "div",
              { staticClass: "d-flex header-pages" },
              _vm._l(_vm.$t("header"), function(item, index) {
                return _c(
                  "router-link",
                  {
                    key: index,
                    staticClass: "list-group-item border-0",
                    attrs: {
                      to: {
                        name: item.link,
                        params: { locale: _vm.$route.params.locale }
                      }
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
              }),
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex header-langs" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item border-0",
                    class: { active: _vm.isActive(2) },
                    attrs: { to: { name: this.$route.name } },
                    nativeOn: {
                      click: function($event) {
                        return _vm.setActive(2)
                      }
                    }
                  },
                  [_vm._v("RO\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item border-0",
                    class: { active: _vm.isActive(3) },
                    attrs: {
                      to: { name: this.$route.name, params: { locale: "ru" } }
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.setActive(3)
                      }
                    }
                  },
                  [_vm._v("RUS\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item border-0",
                    class: { active: _vm.isActive(1) },
                    attrs: {
                      to: { name: this.$route.name, params: { locale: "en" } }
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.setActive(1)
                      }
                    }
                  },
                  [_vm._v("ENG\n                ")]
                )
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.theme === "dark"
        ? _c(
            "nav",
            {
              staticClass: "navbar navbar-dark navbar-expand-xl",
              class: [
                "position-" + _vm.pos,
                _vm.navbar ? "position-fixed" : "",
                _vm.isSticky ? "sticky-navbar" : ""
              ]
            },
            [
              _c(
                "div",
                { staticClass: "container-fluid px-5 py-0" },
                [
                  _vm.small || _vm.medium || _vm.large
                    ? _c(
                        "router-link",
                        {
                          staticClass: "navbar-brand mr-5",
                          attrs: {
                            to: {
                              name: "Home",
                              params: { locale: _vm.$route.params.locale }
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: "/assets/components/header/logo.png" }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.xsmall && _vm.large
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "collapse navbar-collapse slide d-xlarge-flex",
                          class: { show: _vm.navbar },
                          attrs: { id: "navbar-open" }
                        },
                        [
                          _c(
                            "ul",
                            {
                              staticClass: "navbar-nav m-auto mb-2 mb-xlarge-0"
                            },
                            _vm._l(_vm.$t("nav.pages"), function(page) {
                              return _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        "aria-current": "page",
                                        to: {
                                          name: page.link,
                                          params: {
                                            locale: _vm.$route.params.locale
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(page.text) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _vm.isSticky && !_vm.small
                            ? _c(
                                "div",
                                { staticClass: "d-flex header-langs" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "list-group-item border-0",
                                      class: { active: _vm.isActive(2) },
                                      attrs: { to: { name: this.$route.name } },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.setActive(2)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        RO\n                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "list-group-item border-0",
                                      class: { active: _vm.isActive(3) },
                                      attrs: {
                                        to: {
                                          name: this.$route.name,
                                          params: { locale: "ru" }
                                        }
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.setActive(3)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        RUS\n                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "list-group-item border-0",
                                      class: { active: _vm.isActive(1) },
                                      attrs: {
                                        to: {
                                          name: this.$route.name,
                                          params: { locale: "en" }
                                        }
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.setActive(1)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        ENG\n                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.xsmall
                            ? _c(
                                "form",
                                {
                                  staticClass:
                                    "d-flex col-lg-3 col-xl-3 col-md-3 justify-content-around align-items-center form-navbar"
                                },
                                [
                                  _c("div", { staticClass: "text-right" }, [
                                    _c(
                                      "p",
                                      { staticClass: "nav-call text-white" },
                                      [_vm._v("+373 78 972 603")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "nav-order-call" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "text-white text-underline",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.toggleModal(
                                                true,
                                                "call"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.$t("nav.call")))]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-light rounded-circle border-opacity-3 button-50",
                                      attrs: { type: "submit" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.toggleModal(true, "call")
                                        }
                                      }
                                    },
                                    [
                                      _c("i", [
                                        _c("img", {
                                          attrs: {
                                            src: "/assets/icons/phone.svg"
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "close-navbar",
                            on: { click: _vm.closeNavbar }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.medium || _vm.small
                    ? _c(
                        "form",
                        {
                          staticClass:
                            "d-flex ml-auto mobile-contact mr-4 pr-4 col-xl-4 col-lg-4 col-6 justify-content-around align-items-center form-navbar",
                          class: [_vm.navbar ? "navbar-open-form" : ""]
                        },
                        [
                          _c("div", { staticClass: "text-right" }, [
                            _c("p", { staticClass: "nav-call text-white" }, [
                              _vm._v("+373 78 972 603")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "nav-order-call" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-white text-underline",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.toggleModal(true, "call")
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("nav.call")))]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-dark rounded-circle border-opacity-3 button-50 d-flex justify-content-center align-items-center",
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.toggleModal(true, "call")
                                }
                              }
                            },
                            [
                              _c("i", [
                                _c("img", {
                                  attrs: { src: "/assets/icons/phone.svg" }
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    : _vm.xsmall
                    ? _c(
                        "form",
                        {
                          staticClass:
                            "d-flex mobile-contact m-0 p-0 col-md-2 col-1 align-items-center form-navbar"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn rounded-circle border-opacity-3 m-0 button-50 d-flex justify-content-center align-items-center",
                              class: [
                                _vm.navbar
                                  ? "btn-outline-dark border-dark mobile-contacts"
                                  : "btn-outline-light border-light"
                              ],
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.toggleModal(true, "call")
                                }
                              }
                            },
                            [
                              _c("i", [
                                _vm.navbar
                                  ? _c("img", {
                                      attrs: {
                                        src: "/assets/icons/phone-white.png"
                                      }
                                    })
                                  : _c("img", {
                                      attrs: { src: "/assets/icons/phone.svg" }
                                    })
                              ])
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.xsmall
                    ? _c(
                        "router-link",
                        {
                          staticClass: "navbar-brand m-auto",
                          attrs: {
                            to: {
                              name: "Home",
                              params: { locale: _vm.$route.params.locale }
                            }
                          }
                        },
                        [
                          !_vm.xsmall
                            ? _c("img", {
                                attrs: {
                                  src:
                                    "/assets/components/header/logo-vector.png"
                                }
                              })
                            : _c("img", {
                                attrs: {
                                  src:
                                    "/assets/components/header/logo-white.svg"
                                }
                              })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "navbar-toggler collapsed",
                      class: [_vm.navbar ? "toggler-mobile" : ""],
                      attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbar-open",
                        "aria-controls": "navbar-open",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                      },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.openNavbar($event)
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "navbar-toggler-icon" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "navbar-mobile-toggler-icon" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "navbar-mobile-toggler-icon" })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.xsmall || _vm.small || _vm.medium
                    ? _c(
                        "div",
                        {
                          staticClass: "navbar-collapse collapse",
                          class: { show: _vm.navbar },
                          attrs: { id: "navbar-open" }
                        },
                        [_c("Footer")],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ]
          )
        : _c(
            "nav",
            {
              key: _vm.navbar,
              staticClass: "navbar navbar-expand-xl navbar-light",
              class: [
                "position-" + _vm.pos,
                _vm.navbar ? "position-fixed" : "",
                _vm.isSticky ? "sticky-navbar" : "",
                _vm.$router.currentRoute.path.includes("products") &&
                _vm.isSticky
                  ? "loading"
                  : ""
              ]
            },
            [
              _c(
                "div",
                { staticClass: "container-fluid px-5 py-0" },
                [
                  _vm.small || _vm.medium || _vm.large
                    ? _c(
                        "router-link",
                        {
                          staticClass: "navbar-brand mr-5",
                          attrs: {
                            to: {
                              name: "Home",
                              params: { locale: _vm.$route.params.locale }
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "header-logo",
                            attrs: {
                              src:
                                "/assets/components/header/solix_logo_small2.svg"
                            }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.xsmall && _vm.large
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "collapse navbar-collapse slide d-xlarge-flex",
                          class: { show: _vm.navbar },
                          attrs: { id: "navbar-open" }
                        },
                        [
                          _c(
                            "ul",
                            {
                              key: _vm.isSticky,
                              staticClass: "navbar-nav m-auto mb-2 mb-xlarge-0",
                              attrs: { id: [_vm.isSticky ? "main" : ""] }
                            },
                            [
                              _vm._l(_vm.$t("nav.pages"), function(page) {
                                return _c(
                                  "li",
                                  { staticClass: "nav-item" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "nav-link",
                                        class:
                                          _vm.$route.name === page.link
                                            ? "active"
                                            : "",
                                        attrs: {
                                          "aria-current": "page",
                                          to: {
                                            name: page.link,
                                            params: {
                                              locale: _vm.$route.params.locale
                                            }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(page.text) +
                                            "\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _vm.isSticky
                                ? _c(
                                    "li",
                                    {
                                      staticClass: "more hidden",
                                      attrs: { "data-width": "80" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                            }
                                          }
                                        },
                                        [
                                          _c("span", {
                                            staticClass: "meat-circle"
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass: "meat-circle"
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass: "meat-circle"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("ul")
                                    ]
                                  )
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.isSticky && !_vm.small
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex header-langs dropdown show"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-toggle",
                                      attrs: {
                                        id: "dropdownLanguage",
                                        "data-toggle": "dropdown",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.dropLanguage))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "dropdown-menu",
                                      attrs: {
                                        "aria-labelledby": "dropdownLanguage"
                                      }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "list-group-item border-0 dropdown-item",
                                          class: { active: _vm.isActive(2) },
                                          attrs: {
                                            to: { name: this.$route.name }
                                          },
                                          nativeOn: {
                                            click: function($event) {
                                              return _vm.setActive(2)
                                            }
                                          }
                                        },
                                        [_vm._v("RO\n                        ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "list-group-item border-0 dropdown-item",
                                          class: { active: _vm.isActive(3) },
                                          attrs: {
                                            to: {
                                              name: this.$route.name,
                                              params: { locale: "ru" }
                                            }
                                          },
                                          nativeOn: {
                                            click: function($event) {
                                              return _vm.setActive(3)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                            RUS\n                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "list-group-item border-0 dropdown-item",
                                          class: { active: _vm.isActive(1) },
                                          attrs: {
                                            to: {
                                              name: this.$route.name,
                                              params: { locale: "en" }
                                            }
                                          },
                                          nativeOn: {
                                            click: function($event) {
                                              return _vm.setActive(1)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                            ENG\n                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.xsmall
                            ? _c(
                                "form",
                                {
                                  staticClass:
                                    "d-flex col-lg-3 col-xl-3 col-md-3 justify-content-around align-items-center form-navbar"
                                },
                                [
                                  _c("div", { staticClass: "text-right" }, [
                                    _c(
                                      "p",
                                      { staticClass: "nav-call text-dark" },
                                      [_vm._v("+373 78 972 603")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "nav-order-call" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "text-dark text-underline",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.toggleModal(
                                                true,
                                                "call"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.$t("nav.call")))]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-dark rounded-circle border-dark border-opacity-3 button-50",
                                      attrs: { type: "submit" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.toggleModal(true, "call")
                                        }
                                      }
                                    },
                                    [
                                      _c("i", [
                                        _c("img", {
                                          attrs: {
                                            src: "/assets/icons/phone.svg"
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "close-navbar",
                            on: { click: _vm.closeNavbar }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.medium || _vm.small
                    ? _c(
                        "form",
                        {
                          staticClass:
                            "d-flex ml-auto mobile-contact mr-4 pr-4 col-xl-4 col-lg-4 col-6 justify-content-around align-items-center form-navbar",
                          class: [_vm.navbar ? "navbar-open-form" : ""]
                        },
                        [
                          _c("div", { staticClass: "text-right" }, [
                            _c("p", { staticClass: "nav-call text-dark" }, [
                              _vm._v("+373 78 972 603")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "nav-order-call" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-dark text-underline",
                                  attrs: { href: "#" }
                                },
                                [_vm._v(_vm._s(_vm.$t("nav.call")))]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-dark rounded-circle border-dark border-opacity-3 button-50 d-flex justify-content-center align-items-center",
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.toggleModal(true, "call")
                                }
                              }
                            },
                            [
                              _c("i", [
                                _c("img", {
                                  attrs: { src: "/assets/icons/phone.svg" }
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    : _vm.xsmall
                    ? _c(
                        "form",
                        {
                          staticClass:
                            "d-flex mobile-contact m-0 p-0 col-md-2 col-1 align-items-center form-navbar"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-dark rounded-circle border-dark border-opacity-3 m-0 button-50 d-flex justify-content-center align-items-center",
                              class: [
                                _vm.navbar
                                  ? "btn-outline-dark border-dark mobile-contacts"
                                  : "btn-outline-dark border-dark"
                              ],
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.toggleModal(true, "call")
                                }
                              }
                            },
                            [
                              _vm.navbar
                                ? _c("img", {
                                    attrs: { src: "/assets/icons/phone.svg" }
                                  })
                                : _c("i", [
                                    _c("img", {
                                      attrs: { src: "/assets/icons/phone.svg" }
                                    })
                                  ])
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.xsmall
                    ? _c(
                        "router-link",
                        {
                          staticClass: "navbar-brand m-auto",
                          attrs: {
                            to: {
                              name: "Home",
                              params: { locale: _vm.$route.params.locale }
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "/assets/components/header/logo-vector-yellow.png"
                            }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "navbar-toggler bg-dark collapsed",
                      class: [_vm.navbar ? "toggler-mobile" : ""],
                      attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbar-open",
                        "aria-controls": "navbar-open",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                      },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.openNavbar($event)
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "navbar-toggler-icon" }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "navbar-mobile-toggler-icon bg-white"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "navbar-mobile-toggler-icon bg-white"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.xsmall || _vm.small || _vm.medium
                    ? _c(
                        "div",
                        {
                          staticClass: "navbar-collapse collapse",
                          class: { show: _vm.navbar },
                          attrs: { id: "navbar-open" }
                        },
                        [_c("Footer")],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ]
          )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/header.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/public/includes/header.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_4f5a5994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=4f5a5994& */ "./resources/js/components/public/includes/header.vue?vue&type=template&id=4f5a5994&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_4f5a5994___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_4f5a5994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/public/includes/header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/header.vue?vue&type=template&id=4f5a5994&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/public/includes/header.vue?vue&type=template&id=4f5a5994& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_4f5a5994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=4f5a5994& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/header.vue?vue&type=template&id=4f5a5994&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_4f5a5994___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_4f5a5994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);