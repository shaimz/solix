(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-16"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/projects/AddProject.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/eventbus */ "./resources/js/event/eventbus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AddProject',
  components: {
    Navbar: Navbar
  },
  props: ['lang', 'id'],
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      updatePage: false,
      form: [],
      link: '',
      image: '',
      dropdown: false,
      lang_id: 2,
      updated: false,
      loading: false
    };
  },
  created: function created() {
    var _this2 = this;

    this.lang_id = Vue.ls.get('language', 1);

    var _this = this;

    Vue.ls.on('language', function (val) {
      _this.lang_id = val;
    });
    this.$store.dispatch('types', {
      lang_id: 2
    });

    for (var i = 1; i < 4; i++) {
      Vue.set(this.form, i, {
        valid: false,
        status: 1,
        header: '',
        description: '',
        features: [{
          name: '',
          value: '',
          id: null
        }, {
          name: '',
          value: '',
          id: null
        }],
        location: '',
        power: '',
        name: '',
        nameRules: [function (v) {
          return !!v || 'Name is required';
        }],
        type: '',
        type_id: 1,
        image: '',
        imageFile: null,
        link: '',
        activeItem: i,
        gallery: [],
        errors: '',
        success: ''
      });
    }

    this.lang_id = 2;
    this.$store.commit('getDataForm', []);

    if (this.$router.currentRoute.path.includes('/edit')) {
      this.$store.dispatch('singleProject', {
        id: this.$route.params.id
      }).then(function (res) {
        var projects = _this2.$store.getters.getSingleProject;

        for (var _i = 1; _i <= 3; _i++) {
          var data = [];
          var language = _i;

          if (projects[language]['id']) {
            data = projects[language];
          } else {
            data = Object.keys(projects).map(function (item, i) {
              if (projects[item]['lang_id']) return projects[item];
            });
            data = data.filter(function (item) {
              return item != null;
            });
            data = data.find(function (item) {
              return item['id'] !== null;
            });
            _this2.form[_i]['description'] = '';
            _this2.form[_i]['name'] = '';
            _this2.form[_i]['location'] = '';

            _this2.form[_i].features.forEach(function (e) {
              e.name = '';
              e.value = '';
            });

            _this2.form[_i]['power'] = data['power'];
            _this2.form[_i]['status'] = data['status'];
            _this2.form[_i]['type_id'] = data['type_id'];
            _this2.form[_i]['link'] = data['link'];
            _this2.link = data['link'];
            _this2.form[_i]['gallery'] = data['gallery'] ? data['gallery'] : [];
          }

          _this2.image = data['image'];
          if (!projects[_i]['name']) continue;

          for (var elem in _this2.form[language]) {
            if (data[elem]) {
              if (Array.isArray(_this2.form[language][elem])) {
                if (elem === 'gallery') {
                  _this2.form[language][elem] = data[elem];
                } else {
                  for (var e in data[elem]) {
                    _this2.form[language][elem][e] = data[elem][e];
                  }
                }
              } else {
                _this2.form[language][elem] = data[elem];
                _this2.link = data['link'];
                if (data['image']) _this2.form[language]['image'] = data['image'].split('/').pop();
                _this2.form[language]['status'] = parseInt(data['status']);
              }
            }
          }
        }
      });
    }
  },
  methods: {
    activateDropdown: function activateDropdown() {
      this.dropdown = !this.dropdown;
    },
    pushFeature: function pushFeature() {
      this.form[this.lang_id].features.push({
        name: '',
        value: ''
      });
    },
    deleteGalleryItem: function deleteGalleryItem(item) {
      var _this3 = this;

      this.form.forEach(function (e, i) {
        _this3.form[i].gallery = _this3.form[i].gallery.filter(function (el) {
          return el.name !== item.name;
        });
      });
    },
    isActiveCategory: function isActiveCategory() {
      var id = parseInt(this.form[this.lang_id].type_id);
      var types = this.types;

      if (this.form[this.lang_id].type) {
        for (var i = 0; i < types.length; i++) {
          if (types[i].type_id === id) {
            return types[i].name;
          }
        }
      }

      return 'Select a type';
    },
    selectType: function selectType(event) {
      if (this.form[this.lang_id].type_id !== $(event.target).attr('data-id')) {
        this.form[this.lang_id].type_id = $(event.target).attr('data-id');
        this.form[this.lang_id].type = $(event.target).text().trim();
      }

      this.dropdown = false;
    },
    galleryChosen: function galleryChosen(event) {
      for (var i in event.target.files) {
        if (_typeof(event.target.files[i]) === 'object') {
          this.form[2].gallery.push({
            'name': event.target.files[i].name,
            'file': event.target.files[i]
          });
        }
      }
      /*for (let i in event.target.files){
          if (typeof event.target.files[i] === 'object'){
              for (let j=1; j<4; j++){
                  this.form[j].gallery.push({
                       'name': event.target.files[i].name,
                       'file': event.target.files[i]
                  });
              }
          }
      }*/

    },
    imageChosen: function imageChosen(event) {
      this.form[this.lang_id].image = event.target.files[0].name;
      this.form[this.lang_id].imageFile = event.target.files[0];
    },
    setActive: function setActive(event, menuItem) {
      var _this4 = this;

      var thisForm = _objectSpread({}, this.form);

      var language = this.lang_id;
      this.lang_id = menuItem;
      this.$store.dispatch('types', {
        lang_id: this.lang_id
      });
      Vue.ls.set('language', parseInt(menuItem));

      if (Array.from(this.$store.state.dataForm).find(function (item) {
        return item.activeItem === menuItem;
      })) {
        /*    if(!this.updatePage){
                if(language !== menuItem) {
                    this.$store.dispatch('dataForm', thisForm);
                }
            }*/
        this.form = this.$store.state.dataForm;
      } else {
        if (!this.updatePage) {
          this.form.type = '';
          this.form.image = '';
          this.form.imageFile = null;
        }

        this.form.type = '';
        this.form.location = '';
        this.form.name = '';
        this.form.description = '';
        this.form.features = [{
          name: '',
          value: ''
        }, {
          name: '',
          value: ''
        }];
      }

      if (this.updatePage) {
        if (language !== menuItem) {
          this.$store.dispatch('singleProject', {
            id: this.$route.params.id
          }).then(function () {
            if (_this4.updatePage) {
              if (_this4.projects[menuItem]) {
                var data = _this4.projects[menuItem];

                for (var elem in _this4.form[menuItem]) {
                  if (data[elem]) {
                    if (Array.isArray(_this4.form[menuItem][elem])) {
                      for (var e in _this4.form[menuItem][elem]) {
                        if (data[elem][e]) {
                          for (var i in _this4.form[menuItem][elem][e]) {
                            _this4.form[menuItem][elem][e][i] = data[elem][e][i];
                          }
                        }
                      }
                    } else {
                      _this4.form[menuItem][elem] = data[elem];
                      _this4.form[menuItem]['status'] = parseInt(data['status']);
                    }
                  }
                }
              }
            }
          });
        }
      }

      for (var i = 1; i <= 3; i++) {
        thisForm[i].power = this.form[2].power ? this.form[2].power : this.form[1].power ? this.form[1].power : this.form[3].power;
        thisForm[i].image = this.form[2].image ? this.form[2].image : this.form[1].image ? this.form[1].image : this.form[3].image;
        thisForm[i].gallery = this.form[2].gallery ? this.form[2].gallery : this.form[1].gallery ? this.form[1].gallery : this.form[3].gallery;
        thisForm[i].type = this.form[2].type ? this.form[2].type : this.form[1].type ? this.form[1].type : this.form[3].type;
        thisForm[i].type_id = this.form[2].type_id ? this.form[2].type_id : this.form[1].type_id ? this.form[1].type_id : this.form[3].type_id;
        thisForm[i].status = this.form[i].status;
        thisForm[i].link = this.form[2].link ? this.form[2].link : this.form[1].link ? this.form[1].link : this.form[3].link;
        this.link = this.form[2].link ? this.form[2].link : this.form[1].link ? this.form[1].link : this.form[3].link;
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
      this.form[this.lang_id].gallery = {
        name: '',
        file: ''
      };

      if (this.updatePage) {
        this.$store.dispatch('page', this.$route.params.pagination);
      }

      this.$router.go(-1);
    },
    send: function send() {
      var _this5 = this;

      var form = new FormData();
      this.loading = true;
      this.form.forEach(function (f, i) {
        if (f.name) {
          form.append('image', f.imageFile);

          _this5.form[2].gallery.forEach(function (e, i) {
            form.append('gallery_images[]', e.file);
          });

          form.append('data[]', JSON.stringify(f));
        } else if (!f.name && i === _this5.lang_id) {
          _this5.loading = false;
          _this5.form[i].errors = 'Some fields needs to be completed';
        }
      });

      if (this.loading) {
        axios.post('/admin/projects/add', form).then(function (res) {
          if (res.status === 200 && !res.data.error) _this5.loading = false;

          _this5.$router.go(-1);
        });
      }
    },
    update: function update() {
      var _this6 = this;

      this.loading = true;
      this.form.forEach(function (f, i) {
        if (f.name) {
          var form = new FormData();
          form.append('image', f.imageFile);
          form.append('data', JSON.stringify(f));

          if (i === 2) {
            _this6.form[2].gallery.forEach(function (e, i) {
              form.append('gallery_images[]', e.file);
            });
          }

          axios.post("/admin/projects/".concat(_this6.$route.params.id), form).then(function (res) {
            if (_this6.form[i + 1] === undefined || !_this6.form[i + 1].name) {
              _this6.loading = false;
              _this6.form[i].success = 'Updated successfully';
              form["delete"]('gallery_images[]');

              _this6.form[i].gallery.forEach(function (e, index) {
                _this6.form[i].gallery[index].file = '';
              });

              setTimeout(function () {
                _this6.form[i].success = '';
              }, 3000);
            }
          });
        } else {
          _this6.loading = false;
          _this6.form[i].errors = 'Some fields needs to be completed';
        }
      });
    },
    getRoute: function getRoute(route) {
      var length = route.split("/").length;
      var array = route.split('/');
      return array[length - 1] === 'edit';
    }
  },
  mounted: function mounted() {},
  watch: {
    lang_id: function lang_id(val) {
      Vue.ls.set('language', val);
    },
    link: function link(n, o) {
      if (n !== o) {
        for (var i = 1; i <= 3; i++) {
          this.form[i].link = n;
        }
      }
    }
  },
  computed: {
    projects: function projects() {
      return this.$store.getters.getSingleProject;
    },
    types: function types() {
      return this.$store.getters.getTypes;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropdown-types[data-v-38546fd2] {\n    margin-top: -6px;\n}\n.type-dropdown[data-v-38546fd2] {\n    z-index: 1;\n    max-height: 300px;\n    overflow: scroll;\n    width: 100%;\n    padding-left: 0 !important;\n}\n.type-dropdown ul[data-v-38546fd2] {\n    list-style: none;\n    padding-left: 0 !important;\n}\n.type-dropdown li[data-v-38546fd2] {\n    cursor: pointer;\n    padding: 15px 0px 15px 50px;\n}\n.type-dropdown li p[data-v-38546fd2] {\n    margin-bottom: 0 !important;\n}\n.type-dropdown li[data-v-38546fd2]:hover {\n    background: rgba(121, 194, 90, .07);\n}\n.v-select-dropdown[data-v-38546fd2] {\n    background: #F3F5F6;\n    border-radius: 6px;\n    width: 100%;\n    padding: 13px 20px 13px 20px;\n    text-align: left;\n    color: #555555;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_38546fd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_38546fd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_38546fd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_38546fd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_38546fd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=template&id=38546fd2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/projects/AddProject.vue?vue&type=template&id=38546fd2&scoped=true& ***!
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
  return _c(
    "div",
    { attrs: { id: "add-item-page" } },
    [
      _c("Navbar", {
        attrs: {
          tabs: [{ Projects: "Projects", "Add Project": "Add Project" }],
          heading: "Projects",
          "email-page": true
        }
      }),
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "form",
          staticClass: "add-project",
          class: [_vm.loading ? "loading-form" : ""],
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
          _vm.loading ? _c("div", { staticClass: "lds-dual-ring" }) : _vm._e(),
          _vm._v(" "),
          _c("div", [
            _c("h4", { staticClass: "form-title" }, [
              _vm._v(_vm._s(_vm.updatePage ? "Edit Project" : "Add Project"))
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
            {
              staticClass: "tab-content py-3",
              attrs: { id: "addProjectTabs" }
            },
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
                                    value: _vm.form[1].status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[1], "status", $$v)
                                    },
                                    expression: "form[1].status"
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
                            _vm._v("Description")
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
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Additional Information")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6 pr-2" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Location" },
                                model: {
                                  value: _vm.form[1].location,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[1], "location", $$v)
                                  },
                                  expression: "form[1].location"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c(
                                "v-text-field",
                                {
                                  attrs: { placeholder: "Power" },
                                  model: {
                                    value: _vm.form[1].power,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[1], "power", $$v)
                                    },
                                    expression: "form[1].power"
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: "m-auto",
                                      attrs: { slot: "append" },
                                      slot: "append"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Wt\n                                "
                                      )
                                    ]
                                  )
                                ]
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
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "12" } },
                            [
                              _c("div", { staticClass: "dropdown-types" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "v-select-dropdown",
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
                                      "\n                                    " +
                                        _vm._s(_vm.isActiveCategory()) +
                                        "\n                                    "
                                    ),
                                    _vm.dropdown
                                      ? _c("i", { staticClass: "arrow up" })
                                      : _c("i", { staticClass: "arrow down" })
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.dropdown
                                  ? _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "position-absolute bg-white type-dropdown list-unstyled"
                                      },
                                      _vm._l(_vm.types, function(t) {
                                        return _c("li", [
                                          _c(
                                            "p",
                                            {
                                              staticClass: "parent",
                                              attrs: { "data-id": t.type_id },
                                              on: {
                                                click: function($event) {
                                                  return _vm.selectType($event)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(t.name)
                                              )
                                            ]
                                          )
                                        ])
                                      }),
                                      0
                                    )
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Numerical value")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[1].features, function(feature, index) {
                        return _c(
                          "v-row",
                          { key: index },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "6 pr-2" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Value" },
                                  model: {
                                    value: feature.name,
                                    callback: function($$v) {
                                      _vm.$set(feature, "name", $$v)
                                    },
                                    expression: "feature.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Number" },
                                  model: {
                                    value: feature.value,
                                    callback: function($$v) {
                                      _vm.$set(feature, "value", $$v)
                                    },
                                    expression: "feature.value"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "add-to-item",
                              on: { click: _vm.pushFeature }
                            },
                            [
                              _vm._v(
                                "\n                            Add specification\n                            "
                              ),
                              _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: "/assets/icons/add.jpg",
                                    expression: "'/assets/icons/add.jpg'"
                                  }
                                ],
                                staticClass: "ml-2 fil-input-icon"
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Article")
                        ])
                      ]),
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
                                  placeholder: "Project description",
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
                        "div",
                        { staticClass: "youtube" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: "Youtube link",
                                  required: "",
                                  name: "text"
                                },
                                model: {
                                  value: _vm.link,
                                  callback: function($$v) {
                                    _vm.link = $$v
                                  },
                                  expression: "link"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "gallery-heading" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Gallery")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "gallery" },
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "gallery-upload" }
                              },
                              [
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
                              attrs: {
                                type: "file",
                                id: "gallery-upload",
                                multiple: ""
                              },
                              on: { change: _vm.galleryChosen }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "gallery-items mb-4" },
                              _vm._l(_vm.form[1].gallery, function(item) {
                                return _c("div", { staticClass: "d-flex" }, [
                                  _vm._v(_vm._s(item.name)),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "gallery-delete ml-auto",
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteGalleryItem(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "/assets/icons/delete.png"
                                        }
                                      })
                                    ]
                                  )
                                ])
                              }),
                              0
                            )
                          ])
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
                    2
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
                                    value: _vm.form[2].status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[2], "status", $$v)
                                    },
                                    expression: "form[2].status"
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
                            _vm._v("Description")
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
                                  rules: _vm.form[2].nameRules
                                },
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
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Additional Information")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6 pr-2" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Location" },
                                model: {
                                  value: _vm.form[2].location,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[2], "location", $$v)
                                  },
                                  expression: "form[2].location"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c(
                                "v-text-field",
                                {
                                  attrs: { placeholder: "Power" },
                                  model: {
                                    value: _vm.form[2].power,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[2], "power", $$v)
                                    },
                                    expression: "form[2].power"
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: "m-auto",
                                      attrs: { slot: "append" },
                                      slot: "append"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Wt\n                                "
                                      )
                                    ]
                                  )
                                ]
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
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "12" } },
                            [
                              _c("div", { staticClass: "dropdown-types" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "v-select-dropdown",
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
                                      "\n                                    " +
                                        _vm._s(_vm.isActiveCategory()) +
                                        "\n                                    "
                                    ),
                                    _vm.dropdown
                                      ? _c("i", { staticClass: "arrow up" })
                                      : _c("i", { staticClass: "arrow down" })
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.dropdown
                                  ? _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "position-absolute bg-white type-dropdown list-unstyled"
                                      },
                                      _vm._l(_vm.types, function(t) {
                                        return _c("li", [
                                          _c(
                                            "p",
                                            {
                                              staticClass: "parent",
                                              attrs: { "data-id": t.type_id },
                                              on: {
                                                click: function($event) {
                                                  return _vm.selectType($event)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(t.name)
                                              )
                                            ]
                                          )
                                        ])
                                      }),
                                      0
                                    )
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Numerical value")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[2].features, function(feature, index) {
                        return _c(
                          "v-row",
                          { key: index },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "6 pr-2" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Name" },
                                  model: {
                                    value: feature.name,
                                    callback: function($$v) {
                                      _vm.$set(feature, "name", $$v)
                                    },
                                    expression: "feature.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Specification" },
                                  model: {
                                    value: feature.value,
                                    callback: function($$v) {
                                      _vm.$set(feature, "value", $$v)
                                    },
                                    expression: "feature.value"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "add-to-item",
                              on: { click: _vm.pushFeature }
                            },
                            [
                              _vm._v(
                                "\n                            Add specification\n                            "
                              ),
                              _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: "/assets/icons/add.jpg",
                                    expression: "'/assets/icons/add.jpg'"
                                  }
                                ],
                                staticClass: "ml-2 fil-input-icon"
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Article")
                        ])
                      ]),
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
                                  placeholder: "Project description",
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
                        "div",
                        { staticClass: "youtube" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: "Youtube link",
                                  required: "",
                                  name: "text"
                                },
                                model: {
                                  value: _vm.link,
                                  callback: function($$v) {
                                    _vm.link = $$v
                                  },
                                  expression: "link"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "gallery-heading" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Gallery")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "gallery" },
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "gallery-upload" }
                              },
                              [
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
                              attrs: { type: "file", id: "gallery-upload" },
                              on: { change: _vm.galleryChosen }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "gallery-items mb-4" },
                              _vm._l(_vm.form[2].gallery, function(item) {
                                return _c("div", { staticClass: "d-flex" }, [
                                  _vm._v(_vm._s(item.name)),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "gallery-delete ml-auto",
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteGalleryItem(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "/assets/icons/delete.png"
                                        }
                                      })
                                    ]
                                  )
                                ])
                              }),
                              0
                            )
                          ])
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
                    2
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
                                    value: _vm.form[3].status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[3], "status", $$v)
                                    },
                                    expression: "form[3].status"
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
                            _vm._v("Description")
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
                                  rules: _vm.form[3].nameRules
                                },
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
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Additional Information")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6 pr-2" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Location" },
                                model: {
                                  value: _vm.form[3].location,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[3], "location", $$v)
                                  },
                                  expression: "form[3].location"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c(
                                "v-text-field",
                                {
                                  attrs: { placeholder: "Power" },
                                  model: {
                                    value: _vm.form[3].power,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[3], "power", $$v)
                                    },
                                    expression: "form[3].power"
                                  }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: "m-auto",
                                      attrs: { slot: "append" },
                                      slot: "append"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Wt\n                                "
                                      )
                                    ]
                                  )
                                ]
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
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "12" } },
                            [
                              _c("div", { staticClass: "dropdown-types" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "v-select-dropdown",
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
                                      "\n                                    " +
                                        _vm._s(_vm.isActiveCategory()) +
                                        "\n                                    "
                                    ),
                                    _vm.dropdown
                                      ? _c("i", { staticClass: "arrow up" })
                                      : _c("i", { staticClass: "arrow down" })
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.dropdown
                                  ? _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "position-absolute bg-white type-dropdown list-unstyled"
                                      },
                                      _vm._l(_vm.types, function(t) {
                                        return _c("li", [
                                          _c(
                                            "p",
                                            {
                                              staticClass: "parent",
                                              attrs: { "data-id": t.type_id },
                                              on: {
                                                click: function($event) {
                                                  return _vm.selectType($event)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(t.name)
                                              )
                                            ]
                                          )
                                        ])
                                      }),
                                      0
                                    )
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Numerical value")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[3].features, function(feature, index) {
                        return _c(
                          "v-row",
                          { key: index },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "6 pr-2" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Name" },
                                  model: {
                                    value: feature.name,
                                    callback: function($$v) {
                                      _vm.$set(feature, "name", $$v)
                                    },
                                    expression: "feature.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Specification" },
                                  model: {
                                    value: feature.value,
                                    callback: function($$v) {
                                      _vm.$set(feature, "value", $$v)
                                    },
                                    expression: "feature.value"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "add-to-item",
                              on: { click: _vm.pushFeature }
                            },
                            [
                              _vm._v(
                                "\n                            Add specification\n                            "
                              ),
                              _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: "/assets/icons/add.jpg",
                                    expression: "'/assets/icons/add.jpg'"
                                  }
                                ],
                                staticClass: "ml-2 fil-input-icon"
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Article")
                        ])
                      ]),
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
                                  placeholder: "Project description",
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
                        "div",
                        { staticClass: "youtube" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: "Youtube link",
                                  required: "",
                                  name: "text"
                                },
                                model: {
                                  value: _vm.link,
                                  callback: function($$v) {
                                    _vm.link = $$v
                                  },
                                  expression: "link"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "gallery-heading" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Gallery")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "gallery" },
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "gallery-upload" }
                              },
                              [
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
                              attrs: { type: "file", id: "gallery-upload" },
                              on: { change: _vm.galleryChosen }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "gallery-items mb-4" },
                              _vm._l(_vm.form[3].gallery, function(item) {
                                return _c("div", { staticClass: "d-flex" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(item.name) +
                                      "\n                                    "
                                  ),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "gallery-delete ml-auto",
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteGalleryItem(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "/assets/icons/delete.png"
                                        }
                                      })
                                    ]
                                  )
                                ])
                              }),
                              0
                            )
                          ])
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
                    2
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

/***/ "./resources/js/components/backend/projects/AddProject.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/backend/projects/AddProject.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProject_vue_vue_type_template_id_38546fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProject.vue?vue&type=template&id=38546fd2&scoped=true& */ "./resources/js/components/backend/projects/AddProject.vue?vue&type=template&id=38546fd2&scoped=true&");
/* harmony import */ var _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProject.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/projects/AddProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddProject_vue_vue_type_style_index_0_id_38546fd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css& */ "./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProject_vue_vue_type_template_id_38546fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProject_vue_vue_type_template_id_38546fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38546fd2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/projects/AddProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/projects/AddProject.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/backend/projects/AddProject.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_38546fd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=style&index=0&id=38546fd2&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/backend/projects/AddProject.vue?vue&type=template&id=38546fd2&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/backend/projects/AddProject.vue?vue&type=template&id=38546fd2&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_38546fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=template&id=38546fd2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/AddProject.vue?vue&type=template&id=38546fd2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_38546fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_38546fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);