(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-11"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/AddNews.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/news/AddNews.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/eventbus */ "./resources/js/event/eventbus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'News',
  components: {
    Navbar: Navbar
  },
  props: ['lang', 'id'],
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      updatePage: false,
      form: [],
      image: '',
      lang_id: 2,
      updated: false
    };
  },
  created: function created() {
    this.lang_id = Vue.ls.get('language', 1);

    var _this = this;

    Vue.ls.on('language', function (val) {
      _this.lang_id = val;
    });

    for (var i = 1; i < 4; i++) {
      Vue.set(this.form, i, {
        valid: false,
        available: 1,
        header: '',
        description: '',
        name: '',
        nameRules: [function (v) {
          return !!v || 'Name is required';
        }],
        image: '',
        file: null,
        activeItem: i,
        errors: '',
        success: ''
      });
    }
  },
  methods: {
    imageChosen: function imageChosen(event) {
      this.form[this.lang_id].image = event.target.files[0].name;
      this.form[this.lang_id].file = event.target.files[0];
    },
    setActive: function setActive(event, menuItem) {
      var _this2 = this;

      var thisForm = _objectSpread({}, this.form);

      var language = this.lang_id;
      this.lang_id = menuItem;
      Vue.ls.set('language', parseInt(menuItem));

      if (Array.from(this.$store.state.dataForm).find(function (item) {
        return item.activeItem === menuItem;
      })) {
        /* if(!this.updatePage){
             if(language !== menuItem){
                 this.$store.dispatch('dataForm',thisForm);
             }
         }*/
        this.form = this.$store.state.dataForm;
      } else {
        if (!this.updatePage) {
          this.form.image = '';
          this.form.file = null;
        }

        this.form.name = '';
        this.form.description = '';
      }

      if (this.updatePage) {
        if (language !== menuItem) {
          this.$store.dispatch('singleNews', {
            id: this.$route.params.id
          }).then(function () {
            var data = [];

            if (_this2.news[menuItem]['id']) {
              data = _this2.news[menuItem];
            } else {
              data = Object.keys(_this2.news).map(function (item, i) {
                if (_this2.news[item]['lang_id']) return _this2.news[item];
              });
              data = data.find(function (item) {
                return item['id'] !== null;
              });
              data['name'] = '';
              data['description'] = '';
            }

            for (var elem in _this2.form[menuItem]) {
              if (data[elem]) {
                if (Array.isArray(_this2.form[menuItem][elem])) {
                  for (var e in _this2.form[menuItem][elem]) {
                    if (data[elem][e]) {
                      for (var i in _this2.form[menuItem][elem][e]) {
                        _this2.form[menuItem][elem][e][i] = data[elem][e][i];
                      }
                    }
                  }
                } else {
                  _this2.form[menuItem][elem] = data[elem];
                  _this2.form[menuItem]['available'] = parseInt(data['available']);
                  if (data['image']) _this2.form[menuItem]['image'] = data['image'].split('/').pop();
                }
              }
            }
          });
        }
      }

      for (var i = 1; i <= 3; i++) {
        thisForm[i].image = this.form[2].image ? this.form[2].image : this.form[1].image ? this.form[1].image : this.form[3].image;
        thisForm[i].available = this.form[i].available;
      }

      this.$store.dispatch('dataForm', thisForm);
    },
    isActive: function isActive(menuItem) {
      if (this.getRoute(this.$route.path)) {
        this.updatePage = true;
      }

      return parseInt(menuItem) === parseInt(this.lang_id);
    },
    discard: function discard() {
      this.$refs.form.reset();
      this.form[this.lang_id].image = '';
      this.form[this.lang_id].imageFile = null;

      if (this.updatePage) {
        this.$store.dispatch('page', this.$route.params.pagination);
      }

      this.$router.go(-1);
    },
    send: function send() {
      var _this3 = this;

      var form = new FormData();
      var process = false;
      this.form.forEach(function (f, i) {
        if (f.name) {
          form.append('file', f.file);
          form.append('data[]', JSON.stringify(f));
        }

        process = true;

        if (!f.name && i === _this3.lang_id) {
          _this3.form[i].errors = 'Some fields needs to be completed';
          process = false;
        }
      });

      if (process) {
        axios.post('/admin/news/add', form).then(function (res) {
          res.status === 200 && !res.data.error;
          {
            _this3.$router.go(-1);
          }
        });
      }
    },
    update: function update() {
      var _this4 = this;

      this.form.forEach(function (f, i) {
        if (f.name) {
          var form = new FormData();
          form.append('file', f.file);
          form.append('data', JSON.stringify(f));
          axios.post("/admin/news/".concat(_this4.$route.params.id), form).then(function (res) {
            if (_this4.form[i + 1] === undefined || !_this4.form[i + 1].name) {
              _this4.form[i].success = 'Updated successfully';
              setTimeout(function () {
                _this4.form[i].success = '';
              }, 3000);
            }
          });
        } else if (!f.name && i === _this4.lang_id) {
          _this4.form[i].errors = 'Some fields needs to be completed';
        }
      });
    },
    getRoute: function getRoute(route) {
      var length = route.split("/").length;
      var array = route.split('/');
      return array[length - 1] === 'edit';
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.lang_id = 2;
    this.$store.state.dataForm = [];

    if (this.updatePage) {
      this.$store.dispatch('singleNews', {
        id: this.$route.params.id
      }).then(function () {
        for (var i = 1; i <= 3; i++) {
          var data = [];
          var language = i;

          if (_this5.news[language]['id']) {
            data = _this5.news[language];
          } else {
            data = Object.keys(_this5.news).map(function (item, i) {
              if (_this5.news[item]['lang_id']) return _this5.news[item];
            });
            data = data.filter(function (item) {
              return item != null;
            });
            data = data.find(function (item) {
              return item['id'] !== null;
            });
            _this5.form[i]['description'] = '';
            _this5.form[i]['name'] = '';
          }

          _this5.image = data['image'];
          if (!_this5.news[i]['name']) continue;

          for (var elem in _this5.form[language]) {
            if (data[elem]) {
              if (Array.isArray(_this5.form[language][elem])) {
                for (var e in _this5.form[language][elem]) {
                  if (data[elem][e]) {
                    for (var _i in _this5.form[language][elem][e]) {
                      _this5.form[language][elem][e][_i] = data[elem][e][_i];
                    }
                  }
                }
              } else {
                _this5.form[language][elem] = data[elem];
                _this5.form[language]['available'] = parseInt(data['available']);
                if (data['image']) _this5.form[language]['image'] = data['image'].split('/').pop();
              }
            }
          }
        }
      });
    }
  },
  watch: {
    lang_id: function lang_id(val) {
      Vue.ls.set('language', val);
    }
  },
  computed: {
    news: function news() {
      return this.$store.getters.getSingleNews;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/AddNews.vue?vue&type=template&id=c925fac4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/news/AddNews.vue?vue&type=template&id=c925fac4& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "add-item-page" } },
    [
      _c("Navbar", {
        attrs: {
          tabs: [{ News: "Blog", "Add News": "Add Article" }],
          heading: "Blog",
          "email-page": true
        }
      }),
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "form",
          staticClass: "add-news",
          attrs: { method: "POST", enctype: "multipart/form-data" },
          model: {
            value: _vm.form.valid,
            callback: function($$v) {
              _vm.$set(_vm.form, "valid", $$v)
            },
            expression: "form.valid"
          }
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.csrf }
          }),
          _vm._v(" "),
          _c("div", [
            _c("h4", { staticClass: "form-title" }, [
              _vm._v(_vm._s(_vm.updatePage ? "Edit Article" : "Add Article"))
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "list-group-inline" }, [
              _c("li", { staticClass: "nav-item", attrs: { "data-id": "3" } }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    class: { active: _vm.isActive(3) },
                    attrs: { href: "#rus" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.setActive($event, 3)
                      }
                    }
                  },
                  [_vm._v("RUS")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item", attrs: { "data-id": "1" } }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    class: { active: _vm.isActive(1) },
                    attrs: { href: "#eng" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.setActive($event, 1)
                      }
                    }
                  },
                  [_vm._v("ENG")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item", attrs: { "data-id": "2" } }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    class: { active: _vm.isActive(2) },
                    attrs: { href: "#ro" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.setActive($event, 2)
                      }
                    }
                  },
                  [_vm._v("RO")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-content py-3", attrs: { id: "addNewsTabs" } },
            [
              _c(
                "div",
                {
                  staticClass: "tab-pane fade",
                  class: { "active show": _vm.isActive(1) },
                  attrs: { id: "eng" }
                },
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h5", { staticClass: "row-title" }, [
                            _vm._v("Visibility")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "", mandatory: "" },
                                  model: {
                                    value: _vm.form[1].available,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[1], "available", $$v)
                                    },
                                    expression: "form[1].available"
                                  }
                                },
                                [
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 1,
                                      label: "Show"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 0,
                                      label: "Hide"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("h5", { staticClass: "row-title" }, [
                            _vm._v("Article")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: "Name",
                                  required: "",
                                  rules: _vm.form[1].nameRules
                                },
                                model: {
                                  value: _vm.form[1].name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[1], "name", $$v)
                                  },
                                  expression: "form[1].name"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "img-upload" }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.image ? _vm.image : "Add image"
                                    ) +
                                    "\n                                "
                                ),
                                _c("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: "/assets/icons/img.jpg",
                                      expression: "'/assets/icons/img.jpg'"
                                    }
                                  ],
                                  staticClass: "file-input-icon ml-2"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              attrs: { type: "file", id: "img-upload" },
                              on: { change: _vm.imageChosen }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  placeholder: "News description",
                                  required: "",
                                  name: "text"
                                },
                                model: {
                                  value: _vm.form[1].description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[1], "description", $$v)
                                  },
                                  expression: "form[1].description"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-content-end" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "discard-form",
                              attrs: { width: "auto" },
                              on: { click: _vm.discard }
                            },
                            [
                              _vm._v(
                                "\n                            Discard\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.updatePage
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "submit-form",
                                  attrs: { width: "auto", right: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm.update($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            UPDATE\n                        "
                                  )
                                ]
                              )
                            : _c(
                                "v-btn",
                                {
                                  staticClass: "submit-form",
                                  attrs: { width: "auto", right: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm.send($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            SEND\n                        "
                                  )
                                ]
                              )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden" },
                        domProps: { value: 1 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane fade",
                  class: { "active show": _vm.isActive(2) },
                  attrs: { id: "ro" }
                },
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h5", { staticClass: "row-title" }, [
                            _vm._v("Visibility")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "", mandatory: "" },
                                  model: {
                                    value: _vm.form[2].available,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[2], "available", $$v)
                                    },
                                    expression: "form[2].available"
                                  }
                                },
                                [
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 1,
                                      label: "Show"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 0,
                                      label: "Hide"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("h5", { staticClass: "row-title" }, [
                            _vm._v("Article")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Name" },
                                model: {
                                  value: _vm.form[2].name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[2], "name", $$v)
                                  },
                                  expression: "form[2].name"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "img-upload" }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.image ? _vm.image : "Add image"
                                    ) +
                                    "\n                                "
                                ),
                                _c("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: "/assets/icons/img.jpg",
                                      expression: "'/assets/icons/img.jpg'"
                                    }
                                  ],
                                  staticClass: "file-input-icon ml-2"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              attrs: { type: "file", id: "img-upload" },
                              on: { change: _vm.imageChosen }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  placeholder: "News description",
                                  required: "",
                                  name: "text"
                                },
                                model: {
                                  value: _vm.form[2].description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[2], "description", $$v)
                                  },
                                  expression: "form[2].description"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-content-end" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "discard-form",
                              attrs: { width: "auto" },
                              on: { click: _vm.discard }
                            },
                            [
                              _vm._v(
                                "\n                            Discard\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.updatePage
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "submit-form",
                                  attrs: { width: "auto", right: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm.update($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            UPDATE\n                        "
                                  )
                                ]
                              )
                            : _c(
                                "v-btn",
                                {
                                  staticClass: "submit-form",
                                  attrs: { width: "auto", right: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm.send($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            SEND\n                        "
                                  )
                                ]
                              )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden" },
                        domProps: { value: 2 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane fade",
                  class: { "active show": _vm.isActive(3) },
                  attrs: { id: "rus" }
                },
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h5", { staticClass: "row-title" }, [
                            _vm._v("Visibility")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "", mandatory: "" },
                                  model: {
                                    value: _vm.form[3].available,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[3], "available", $$v)
                                    },
                                    expression: "form[3].available"
                                  }
                                },
                                [
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 1,
                                      label: "Show"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 0,
                                      label: "Hide"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("h5", { staticClass: "row-title" }, [
                            _vm._v("Article")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Name" },
                                model: {
                                  value: _vm.form[3].name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[3], "name", $$v)
                                  },
                                  expression: "form[3].name"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "img-upload" }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.image ? _vm.image : "Add image"
                                    ) +
                                    "\n                                "
                                ),
                                _c("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: "/assets/icons/img.jpg",
                                      expression: "'/assets/icons/img.jpg'"
                                    }
                                  ],
                                  staticClass: "file-input-icon ml-2"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              attrs: { type: "file", id: "img-upload" },
                              on: { change: _vm.imageChosen }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  placeholder: "News description",
                                  required: "",
                                  name: "text"
                                },
                                model: {
                                  value: _vm.form[3].description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[3], "description", $$v)
                                  },
                                  expression: "form[3].description"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-content-end" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "discard-form",
                              attrs: { width: "auto" },
                              on: { click: _vm.discard }
                            },
                            [
                              _vm._v(
                                "\n                            Discard\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.updatePage
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "submit-form",
                                  attrs: { width: "auto", right: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm.update($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            UPDATE\n                        "
                                  )
                                ]
                              )
                            : _c(
                                "v-btn",
                                {
                                  staticClass: "submit-form",
                                  attrs: { width: "auto", right: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm.send($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            SEND\n                        "
                                  )
                                ]
                              )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden" },
                        domProps: { value: 3 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-center text-danger mt-3" }, [
                _vm._v(
                  _vm._s(
                    _vm.form[_vm.lang_id].errors
                      ? _vm.form[_vm.lang_id].errors
                      : ""
                  )
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-center text-success mt-3" }, [
                _vm._v(
                  _vm._s(
                    _vm.form[_vm.lang_id].success
                      ? _vm.form[_vm.lang_id].success
                      : ""
                  )
                )
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/news/AddNews.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/backend/news/AddNews.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddNews_vue_vue_type_template_id_c925fac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNews.vue?vue&type=template&id=c925fac4& */ "./resources/js/components/backend/news/AddNews.vue?vue&type=template&id=c925fac4&");
/* harmony import */ var _AddNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNews.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/news/AddNews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNews_vue_vue_type_template_id_c925fac4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddNews_vue_vue_type_template_id_c925fac4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/news/AddNews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/news/AddNews.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/backend/news/AddNews.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/AddNews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/news/AddNews.vue?vue&type=template&id=c925fac4&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/backend/news/AddNews.vue?vue&type=template&id=c925fac4& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNews_vue_vue_type_template_id_c925fac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNews.vue?vue&type=template&id=c925fac4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/news/AddNews.vue?vue&type=template&id=c925fac4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNews_vue_vue_type_template_id_c925fac4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNews_vue_vue_type_template_id_c925fac4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);