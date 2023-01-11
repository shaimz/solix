(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-14"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/AddProduct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      logo: '',
      document: '',
      lang_id: 1,
      active: 2,
      dropdown: false,
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

    for (var i = 1; i < 4; i++) {
      Vue.set(this.form, i, {
        valid: false,
        available: 1,
        header: '',
        description: '',
        category: '',
        name: '',
        nameRules: [function (v) {
          return !!v || 'Name is required';
        }],
        sku: '',
        price: '',
        brand: '',
        features: [{
          id: null,
          feature_name: '',
          feature_value: ''
        }, {
          id: null,
          feature_name: '',
          feature_value: ''
        }],
        advantages: [{
          id: null,
          name: '',
          value: '',
          iconFile: null,
          icon: ''
        }, {
          id: null,
          name: '',
          value: '',
          iconFile: null,
          icon: ''
        }, {
          id: null,
          name: '',
          value: '',
          iconFile: null,
          icon: ''
        }, {
          id: null,
          name: '',
          value: '',
          iconFile: null,
          icon: ''
        }],
        image: '',
        imageFile: null,
        document: '',
        documentFile: null,
        logo: '',
        logoFile: null,
        activeItem: i,
        errors: '',
        success: ''
      });
    }

    this.lang_id = 2;
    this.$store.commit('getDataForm', []);
    this.$store.dispatch('categories', {
      lang_id: this.lang_id
    });

    if (this.$router.currentRoute.path.includes('/edit')) {
      this.$store.dispatch('singleProduct', {
        id: this.$route.params.id,
        lang: this.lang_id
      }).then(function () {
        for (var _i = 1; _i <= 3; _i++) {
          var data = [];
          var language = _i;

          if (_this2.product[language]['id']) {
            data = _this2.product[language];
          } else {
            data = Object.keys(_this2.product).map(function (item, i) {
              if (_this2.product[item]['lang_id']) return _this2.product[item];
            });
            data = data.filter(function (item) {
              return item != null;
            });
            data = data.find(function (item) {
              return item['id'] !== null;
            });
            _this2.form[_i]['name'] = '';
            _this2.form[_i]['description'] = '';

            _this2.form[_i].advantages.forEach(function (e) {
              e.name = '';
              e.value = '';
              e.iconFile = null;
              e.icon = '';
            });

            _this2.form[_i].features.forEach(function (e) {
              e.feature_name = '';
              e.feature_value = '';
            });

            _this2.form[_i]['price'] = data['price'];
            _this2.form[_i]['sku'] = data['sku'];
            _this2.form[_i]['image'] = data['image'];
            _this2.form[_i]['document'] = data['document'];
            _this2.form[_i]['brand'] = data['brand'];
            _this2.form[_i]['category'] = data['category'];
            _this2.form[_i]['category_id'] = data['category_id'];
          }

          _this2.image = data['image'].split('/').pop();
          _this2.document = data['document'].split('/').pop();
          _this2.logo = data['brand_logo'].split('/').pop();
          /*      if (data.advantages.length < 4) {
                    while (this.form[i].advantages.length < 4) {
                        this.form[i].advantages.push({
                            name: '',
                            value: '',
                            iconFile: null,
                            icon: ''
                        })
                    }
                }*/

          if (!_this2.product[_i]['name']) continue;

          for (var elem in _this2.form[language]) {
            if (data[elem]) {
              if (Array.isArray(_this2.form[language][elem])) {
                for (var e in data[elem]) {
                  if (data['features'].length > _this2.form[language]['features'].length) {
                    if (data['features'] === data[elem]) {
                      _this2.form[language]['features'].push({
                        feature_name: '',
                        feature_value: '',
                        id: ''
                      });
                    }
                  }

                  if (data[elem][e]) {
                    for (var _i2 in _this2.form[language][elem][e]) {
                      _this2.form[language][elem][e][_i2] = data[elem][e][_i2];

                      if (_this2.form[language][elem][e]['icon']) {
                        _this2.form[language][elem][e][_i2] = data[elem][e][_i2].split('/').pop();
                      }
                    }
                  }
                }
              } else {
                _this2.form[language][elem] = data[elem];
                _this2.form[language]['available'] = parseInt(data['available']);
                if (data['brand_logo']) _this2.form[language]['logo'] = data['brand_logo'].split('/').pop();
                if (data['image']) _this2.form[language]['image'] = data['image'].split('/').pop();
                if (data['document']) _this2.form[language]['document'] = data['document'].split('/').pop();
              }
            }
          }
        }
      });
    }
  },
  methods: {
    pushFeature: function pushFeature() {
      this.form[this.lang_id].features.push({
        feature_name: '',
        feature_value: ''
      });
    },
    deleteFeature: function deleteFeature(id) {
      this.form[this.lang_id].features.splice(id, 1);
    },
    iconChosen: function iconChosen(event, index) {
      this.form[this.lang_id].advantages[index].icon = event.target.files[0].name;
      this.form[this.lang_id].advantages[index].iconFile = event.target.files[0];
    },
    documentChosen: function documentChosen(event) {
      this.form[this.lang_id].document = event.target.files[0].name;
      this.form[this.lang_id].documentFile = event.target.files[0];
      this.document = event.target.files[0].name;
    },
    imageChosen: function imageChosen(event) {
      this.form[this.lang_id].image = event.target.files[0].name;
      this.form[this.lang_id].imageFile = event.target.files[0];
    },
    logoChosen: function logoChosen(event) {
      this.form[this.lang_id].logo = event.target.files[0].name;
      this.form[this.lang_id].logoFile = event.target.files[0];
    },
    changeLang: function changeLang(event) {},
    setActive: function setActive(event, menuItem) {
      /*let thisForm = {...this.form};
      let language = this.lang_id;*/
      this.active = menuItem;
      this.lang_id = menuItem;
      Vue.ls.set('language', parseInt(menuItem));
      /*if (Array.from(this.$store.state.dataForm).find(item => item.activeItem === menuItem)) {
           console.log('Getting dataForm');
          console.log(this.form);
          this.form = this.$store.state.dataForm;
          console.log(this.form);
      }
       if (this.updatePage) {
          if (language !== menuItem) {
              this.$store.dispatch('singleProduct', {id: this.$route.params.id, lang: menuItem}).then(() => {
                  let data;
                  if (this.product[menuItem]['id']) {
                      data = this.product[menuItem];
                  } else {
                      data = [];
                  }
                   if(data.length){
                      if (data.advantages.length < 4) {
                          while (data.advantages.length < 4) {
                              data.advantages.push({
                                  name: '',
                                  value: '',
                                  iconFile: null,
                                  icon: ''
                              })
                          }
                      }
                  }
                   for (let elem in this.form[menuItem]) {
                      if (data[elem]) {
                          if (Array.isArray(this.form[menuItem][elem])) {
                              for (let e in data[elem]) {
                                  if (data[elem][e]) {
                                      if (data['features'].length > this.form[menuItem]['features'].length) {
                                          if (data['features'] === data[elem]) {
                                              this.form[menuItem]['features'].push({
                                                  feature_name: '',
                                                  feature_value: '',
                                                  id: ''
                                              });
                                          }
                                      }
                                       for (let i in data[elem][e]) {
                                          this.form[menuItem][elem][e][i] = data[elem][e][i]
                                          if (this.form[menuItem][elem][e]['icon'] && data[elem][e]['icon']) {
                                              this.form[menuItem][elem][e]['icon'] = data[elem][e]['icon'].split('/').pop()
                                          }
                                      }
                                  }
                              }
                          } else {
                              this.form[menuItem][elem] = data[elem];
                              this.form[menuItem]['available'] = parseInt(data['available']);
                              if (data['brand_logo']) this.form[menuItem]['logo'] = data['brand_logo'].split('/').pop();
                              if (data['image']) this.form[menuItem]['image'] = data['image'].split('/').pop();
                              if (data['document']) this.form[menuItem]['document'] = data['document'].split('/').pop();
                          }
                      }
                  }
              })
          }
      }
       for(let i = 1;i <= 3;i++){
          thisForm[i].sku = this.form[2].sku ? this.form[2].sku : (this.form[1].sku ? this.form[1].sku : this.form[3].sku);
          thisForm[i].category = this.form[2].category ? this.form[2].category : (this.form[1].category ? this.form[1].category : this.form[3].category);
          thisForm[i].price = this.form[2].price ? this.form[2].price : (this.form[1].price ? this.form[1].price : this.form[3].price);
          thisForm[i].brand = this.form[2].brand ? this.form[2].brand : (this.form[1].brand ? this.form[1].brand : this.form[3].brand);
          thisForm[i].logo = this.form[2].logo ? this.form[2].logo : (this.form[1].logo ? this.form[1].logo : this.form[3].logo);
          thisForm[i].image = this.form[2].image ? this.form[2].image : (this.form[1].image ? this.form[1].image : this.form[3].image);
          thisForm[i].document = this.form[2].document ? this.form[2].document : (this.form[1].document ? this.form[1].document : this.form[3].document);
          thisForm[i].available = this.form[i].available;
      }
       this.$store.dispatch('dataForm', thisForm)*/
    },
    isActive: function isActive(menuItem) {
      if (this.getRoute(this.$route.path)) {
        this.updatePage = true;
      }

      return parseInt(menuItem) === parseInt(this.lang_id);
    },
    discard: function discard() {
      this.$refs.form.reset();
      this.form[this.lang_id].logo = '';
      this.form[this.lang_id].logoFile = null;
      this.form[this.lang_id].image = '';
      this.form[this.lang_id].imageFile = null;
      this.form[this.lang_id].document = '';
      this.form[this.lang_id].documentFile = null;
      this.form[this.lang_id].advantages.forEach(function (e) {
        e.name = '';
        e.value = '';
      });

      if (this.updatePage) {
        this.$store.dispatch('page', this.$route.params.pagination);
      }

      this.$router.go(-1);
    },
    send: function send() {
      var _this3 = this;

      this.loading = true;
      /*let trans_fields = [
              'advantages',
              'description',
              'features',
              'name'
          ],
           non_trans_fields = [
              'available',
              'brand',
              'category',
              'document',
              'documentFile',
              'image',
              'imageFile',
              'logo',
              'logoFile'
          ];*/

      this.form.forEach(function (f, i) {
        if (f.name) {
          var form = new FormData();
          form.append('logo', f.logoFile);
          form.append('file', f.imageFile);
          form.append('document', f.documentFile);
          f.advantages.forEach(function (e, i) {
            e.iconFile ? form.append('icon-' + i, e.iconFile) : '';
          });
          form.append('data', JSON.stringify(f));
          axios.post('/admin/products/add', form).then(function (res) {
            if (res.status === 200 && !res.data.error) {
              if (_this3.form[i + 1] === undefined || !_this3.form[i + 1].name) {
                _this3.loading = false;

                _this3.$router.go(-1);
              }
            }

            f.errors = res.data.error;
          });
        } else if (!f.name && i === _this3.lang_id) {
          _this3.loading = false;
          _this3.form[i].errors = 'Some fields need to be completed';
        }
      });
    },
    update: function update() {
      var _this4 = this;

      this.loading = true;
      this.form.forEach(function (f, i) {
        if (f.name) {
          var form = new FormData();
          form.append('logo', f.logoFile);
          form.append('file', f.imageFile);
          form.append('document', f.documentFile);
          f.advantages.forEach(function (e, i) {
            e.iconFile ? form.append('iconfile-' + i, e.iconFile) : '';
          });
          form.append('data', JSON.stringify(f));
          axios.post("/admin/products/".concat(_this4.$route.params.id), form).then(function (res) {
            if (_this4.form[i + 1] === undefined || !_this4.form[i + 1].name) {
              _this4.loading = false;
              _this4.form[i].success = 'Updated successfully';
              setTimeout(function () {
                _this4.form[i].success = '';
              }, 1500);
            }
          });
        } else {
          _this4.loading = false;
        }
      });
    },
    groupCategories: function groupCategories(data) {
      var categories = data;
      var items = [];
      categories.forEach(function (item, index) {
        if (!item.parent_id) {
          items.push({
            name: item.data.name,
            id: item.id,
            parent_id: item.parent_id,
            child: []
          });
        } else {
          items.map(function (elem) {
            return elem.id === item.parent_id ? elem.child.push({
              name: item.data.name,
              id: item.id,
              parent_id: item.parent_id
            }) : '';
          });
        }
      });
      return items;
    },
    activateDropdown: function activateDropdown() {
      this.dropdown = !this.dropdown;
    },
    isActiveCategory: function isActiveCategory() {
      var id = this.form[this.active].category ? parseInt(this.form[this.active].category) : 0;
      var categories = this.groupCategories(this.categories);

      if (this.form[this.active].category) {
        for (var i = 0; i < categories.length; i++) {
          if (categories[i].id === id) {
            return categories[i].name;
          } else {
            for (var j = 0; j < categories[i].child.length; j++) {
              if (categories[i].child[j].id === id) {
                return categories[i].child[j].name;
              }
            }
          }
        }
      }

      return 'Select a category';
    },
    selectCategory: function selectCategory(event) {
      /*let category_id = event.target.getAttribute('data-id');
      if (this.form[this.active].category !== category_id) {
          this.form[this.active].category = $(event.target).attr('data-id');
      }*/
      this.updateValues('category', event.target.getAttribute('data-id'));
      this.dropdown = false;
    },
    getRoute: function getRoute(route) {
      var length = route.split("/").length;
      var array = route.split('/');
      return array[length - 1] === 'edit';
    },
    dropdownFalse: function dropdownFalse() {
      this.dropdown = false;
    },
    updateValues: function updateValues(key, value) {
      for (var lang_id = 1; lang_id <= 3; lang_id++) {
        this.form[lang_id][key] = value;
      }
    }
  },
  mounted: function mounted() {},
  watch: {
    lang_id: function lang_id(val) {
      Vue.ls.set('language', val);
    },
    dropdown: function dropdown(n, o) {
      var _this5 = this;

      if (n) {
        setTimeout(function () {
          document.addEventListener('click', _this5.dropdownFalse);
        }, 300);
      } else {
        document.removeEventListener('click', this.dropdownFalse);
      }
    }
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.getCategories;
    },
    product: function product() {
      return this.$store.getters.getSingleProduct;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropdown-categories[data-v-2fcd84c3] {\n    margin-top: -6px;\n}\n.category-dropdown[data-v-2fcd84c3] {\n    z-index: 1;\n    max-height: 300px;\n    overflow: scroll;\n    width: 100%;\n    padding-left: 0 !important;\n}\n.category-dropdown ul[data-v-2fcd84c3] {\n    list-style: none;\n    padding-left: 0 !important;\n}\n.category-dropdown ul li[data-v-2fcd84c3] {\n    cursor: pointer;\n    padding: 15px 0px 15px 50px;\n}\n.category-dropdown ul li[data-v-2fcd84c3]:hover {\n    background: rgba(121, 194, 90, .07);\n}\n.category-dropdown .parent[data-v-2fcd84c3] {\n    padding: 15px 0 15px 30px;\n    cursor: pointer;\n    margin: 0 !important;\n}\n.category-dropdown .parent[data-v-2fcd84c3]:hover {\n    background: rgba(121, 194, 90, .07);\n}\n.v-select-dropdown[data-v-2fcd84c3] {\n    background: #F3F5F6;\n    border-radius: 6px;\n    width: 100%;\n    padding: 13px 20px 13px 20px;\n    text-align: left;\n    color: #555555;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.document[data-v-2fcd84c3] {\n    margin-top: 40px;\n    margin-bottom: 40px;\n}\n.features-block[data-v-2fcd84c3] {\n    position: relative\n}\n.features-block .feature-delete[data-v-2fcd84c3] {\n    position: absolute;\n    display: block;\n    cursor: pointer;\n    top: 15px;\n    right: -24px;\n    width: 15px;\n    height: 15px\n}\n\n", ""]);

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2fcd84c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2fcd84c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2fcd84c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2fcd84c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2fcd84c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/products/AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true& ***!
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
          tabs: [{ Products: "Products", "Add Product": "Add Product" }],
          heading: "Products",
          "email-page": true
        }
      }),
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "form",
          staticClass: "add-product",
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
              _vm._v(_vm._s(_vm.updatePage ? "Edit Product" : "Add Product"))
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
              attrs: { id: "addProductTabs" }
            },
            [
              _c(
                "div",
                {
                  class: ["tab-pane fade", { "active show": _vm.isActive(1) }],
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
                            _vm._v("Stock")
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
                                      label: "In stock"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.updateValues("available", 1)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 0,
                                      label: "Out of stock"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.updateValues("available", 0)
                                      }
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
                                  placeholder: "Product name",
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
                          _c(
                            "v-col",
                            { staticClass: "pr-2", attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Set number" },
                                on: {
                                  keyup: function($event) {
                                    return _vm.updateValues(
                                      "sku",
                                      $event.target.value
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form[1].sku,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[1], "sku", $$v)
                                  },
                                  expression: "form[1].sku"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "6" } },
                            [
                              _c(
                                "div",
                                { staticClass: "dropdown-categories" },
                                [
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
                                            "position-absolute bg-white category-dropdown list-unstyled"
                                        },
                                        _vm._l(
                                          _vm.groupCategories(_vm.categories),
                                          function(category) {
                                            return _c("li", [
                                              _c(
                                                "p",
                                                {
                                                  staticClass: "parent",
                                                  attrs: {
                                                    "data-id": category.id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.selectCategory(
                                                        $event
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(category.name)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              category.child
                                                ? _c(
                                                    "ul",
                                                    _vm._l(
                                                      category.child,
                                                      function(subcategory) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            attrs: {
                                                              "data-id":
                                                                subcategory.id
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.selectCategory(
                                                                  $event
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                - " +
                                                                _vm._s(
                                                                  subcategory.name
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e()
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
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
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-text-field",
                                {
                                  attrs: { placeholder: "Price" },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.updateValues(
                                        "price",
                                        $event.target.value
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.form[1].price,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[1], "price", $$v)
                                    },
                                    expression: "form[1].price"
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
                                        "\n                                    EUR\n                                "
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
                            { staticClass: "pr-2", attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Brand" },
                                on: {
                                  keyup: function($event) {
                                    return _vm.updateValues(
                                      "brand",
                                      $event.target.value
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form[1].brand,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[1], "brand", $$v)
                                  },
                                  expression: "form[1].brand"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "6" } },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "add-to-item",
                                  attrs: { for: "logo-upload" }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.logo ? _vm.logo : "Image") +
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
                                attrs: { type: "file", id: "logo-upload" },
                                on: { change: _vm.logoChosen }
                              })
                            ]
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  placeholder: "Body",
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
                        "div",
                        { staticClass: "document" },
                        [
                          _c("v-row", [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "document-upload" }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.document
                                        ? _vm.document
                                        : "Add document"
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
                              staticStyle: { display: "none" },
                              attrs: { id: "document-upload", type: "file" },
                              on: {
                                change: function($event) {
                                  return _vm.documentChosen($event)
                                }
                              }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Features")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[1].features, function(f, index) {
                        return _c(
                          "v-row",
                          {
                            key: "feature-" + index,
                            staticClass: "features-block"
                          },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "6 pr-2" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Name" },
                                  model: {
                                    value: f.feature_name,
                                    callback: function($$v) {
                                      _vm.$set(f, "feature_name", $$v)
                                    },
                                    expression: "f.feature_name"
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
                                  attrs: { placeholder: "Feature" },
                                  model: {
                                    value: f.feature_value,
                                    callback: function($$v) {
                                      _vm.$set(f, "feature_value", $$v)
                                    },
                                    expression: "f.feature_value"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "feature-delete",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteFeature(index)
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: "/assets/icons/delete.png",
                                    title: "Delete feature"
                                  }
                                })
                              ]
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
                          _vm._v("Benefits")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[1].advantages, function(f, index) {
                        return _c(
                          "v-col",
                          { key: "advantages-" + index, attrs: { cols: "12" } },
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6 pr-2" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { placeholder: "Name" },
                                      model: {
                                        value: f.name,
                                        callback: function($$v) {
                                          _vm.$set(f, "name", $$v)
                                        },
                                        expression: "f.name"
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
                                      attrs: { placeholder: "Benefits" },
                                      model: {
                                        value: f.value,
                                        callback: function($$v) {
                                          _vm.$set(f, "value", $$v)
                                        },
                                        expression: "f.value"
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
                              "label",
                              {
                                staticClass: "add-to-item w-100",
                                attrs: { for: "file-upload-" + index }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(f.icon ? f.icon : "Add icon") +
                                    "\n                            "
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
                                  staticClass: "ml-2 file-input-icon"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: {
                                id: "file-upload-" + index,
                                type: "file"
                              },
                              on: {
                                change: function($event) {
                                  return _vm.iconChosen($event, index)
                                }
                              }
                            })
                          ],
                          1
                        )
                      }),
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
                            _vm._v("Stock")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "" },
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
                                      label: "In stock"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.updateValues("available", 1)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 0,
                                      label: "Out of stock"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.updateValues("available", 0)
                                      }
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
                                  placeholder: "Product name",
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
                          _c(
                            "v-col",
                            { staticClass: "pr-2", attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Set number" },
                                on: {
                                  keyup: function($event) {
                                    return _vm.updateValues(
                                      "sku",
                                      $event.target.value
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form[3].sku,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[3], "sku", $$v)
                                  },
                                  expression: "form[3].sku"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "6" } },
                            [
                              _c(
                                "div",
                                { staticClass: "dropdown-categories" },
                                [
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
                                            "position-absolute bg-white category-dropdown list-unstyled"
                                        },
                                        _vm._l(
                                          _vm.groupCategories(_vm.categories),
                                          function(category) {
                                            return _c("li", [
                                              _c(
                                                "p",
                                                {
                                                  staticClass: "parent",
                                                  attrs: {
                                                    "data-id": category.id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.selectCategory(
                                                        $event
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(category.name)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              category.child
                                                ? _c(
                                                    "ul",
                                                    _vm._l(
                                                      category.child,
                                                      function(subcategory) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            attrs: {
                                                              "data-id":
                                                                subcategory.id
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.selectCategory(
                                                                  $event
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                - " +
                                                                _vm._s(
                                                                  subcategory.name
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e()
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
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
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-text-field",
                                {
                                  attrs: { placeholder: "Price" },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.updateValues(
                                        "price",
                                        $event.target.value
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.form[3].price,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[3], "price", $$v)
                                    },
                                    expression: "form[3].price"
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
                                        "\n                                    EUR\n                                "
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
                            { staticClass: "pr-2", attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Brand" },
                                on: {
                                  keyup: function($event) {
                                    return _vm.updateValues(
                                      "brand",
                                      $event.target.value
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form[3].brand,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[3], "brand", $$v)
                                  },
                                  expression: "form[3].brand"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "6" } },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "add-to-item",
                                  attrs: { for: "logo-upload" }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.logo ? _vm.logo : "Image") +
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
                                attrs: { type: "file", id: "logo-upload" },
                                on: { change: _vm.logoChosen }
                              })
                            ]
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  placeholder: "Body",
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
                        "div",
                        { staticClass: "document" },
                        [
                          _c("v-row", [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "document-upload" }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.document
                                        ? _vm.document
                                        : "Add document"
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
                              staticStyle: { display: "none" },
                              attrs: { id: "document-upload", type: "file" },
                              on: {
                                change: function($event) {
                                  return _vm.documentChosen($event)
                                }
                              }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Features")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[3].features, function(f, index) {
                        return _c(
                          "v-row",
                          {
                            key: "feature-" + index,
                            staticClass: "features-block"
                          },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "6 pr-2" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Name" },
                                  model: {
                                    value: f.feature_name,
                                    callback: function($$v) {
                                      _vm.$set(f, "feature_name", $$v)
                                    },
                                    expression: "f.feature_name"
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
                                    value: f.feature_value,
                                    callback: function($$v) {
                                      _vm.$set(f, "feature_value", $$v)
                                    },
                                    expression: "f.feature_value"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "feature-delete",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteFeature(index)
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: "/assets/icons/delete.png",
                                    title: "Delete feature"
                                  }
                                })
                              ]
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
                          _vm._v("Benefits")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[3].advantages, function(f, index) {
                        return _c(
                          "v-col",
                          { key: "advantages-" + index, attrs: { cols: "12" } },
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6 pr-2" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { placeholder: "Name" },
                                      model: {
                                        value: f.name,
                                        callback: function($$v) {
                                          _vm.$set(f, "name", $$v)
                                        },
                                        expression: "f.name"
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
                                      attrs: { placeholder: "Benefits" },
                                      model: {
                                        value: f.value,
                                        callback: function($$v) {
                                          _vm.$set(f, "value", $$v)
                                        },
                                        expression: "f.value"
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
                              "label",
                              {
                                staticClass: "add-to-item w-100",
                                attrs: { for: "file-upload-" + index }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(f.icon ? f.icon : "Add icon") +
                                    "\n                            "
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
                                  staticClass: "ml-2 file-input-icon"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: {
                                id: "file-upload-" + index,
                                type: "file"
                              },
                              on: {
                                change: function($event) {
                                  return _vm.iconChosen($event, index)
                                }
                              }
                            })
                          ],
                          1
                        )
                      }),
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
                            _vm._v("Stock")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "" },
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
                                      label: "In stock"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.updateValues("available", 1)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    attrs: {
                                      color: "success",
                                      value: 0,
                                      label: "Out of stock"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.updateValues("available", 0)
                                      }
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
                                  placeholder: "Product name",
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
                          _c(
                            "v-col",
                            { staticClass: "pr-2", attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Set number" },
                                on: {
                                  keyup: function($event) {
                                    return _vm.updateValues(
                                      "sku",
                                      $event.target.value
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form[2].sku,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[2], "sku", $$v)
                                  },
                                  expression: "form[2].sku"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "6" } },
                            [
                              _c(
                                "div",
                                { staticClass: "dropdown-categories" },
                                [
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
                                            "position-absolute bg-white category-dropdown list-unstyled"
                                        },
                                        _vm._l(
                                          _vm.groupCategories(_vm.categories),
                                          function(category) {
                                            return _c("li", [
                                              _c(
                                                "p",
                                                {
                                                  staticClass: "parent",
                                                  attrs: {
                                                    "data-id": category.id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.selectCategory(
                                                        $event
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(category.name)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              category.child
                                                ? _c(
                                                    "ul",
                                                    _vm._l(
                                                      category.child,
                                                      function(subcategory) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            attrs: {
                                                              "data-id":
                                                                subcategory.id
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.selectCategory(
                                                                  $event
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                - " +
                                                                _vm._s(
                                                                  subcategory.name
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e()
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
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
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-text-field",
                                {
                                  attrs: { placeholder: "Price" },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.updateValues(
                                        "price",
                                        $event.target.value
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.form[2].price,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form[2], "price", $$v)
                                    },
                                    expression: "form[2].price"
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
                                        "\n                                    EUR\n                                "
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
                            { staticClass: "pr-2", attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { placeholder: "Brand" },
                                on: {
                                  keyup: function($event) {
                                    return _vm.updateValues(
                                      "brand",
                                      $event.target.value
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form[2].brand,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form[2], "brand", $$v)
                                  },
                                  expression: "form[2].brand"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "m-auto", attrs: { cols: "6" } },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "add-to-item",
                                  attrs: { for: "logo-upload" }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.logo ? _vm.logo : "Image") +
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
                                attrs: { type: "file", id: "logo-upload" },
                                on: { change: _vm.logoChosen }
                              })
                            ]
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  placeholder: "Body",
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
                        "div",
                        { staticClass: "document" },
                        [
                          _c("v-row", [
                            _c(
                              "label",
                              {
                                staticClass: "add-to-item",
                                attrs: { for: "document-upload" }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.document
                                        ? _vm.document
                                        : "Add document"
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
                              staticStyle: { display: "none" },
                              attrs: { id: "document-upload", type: "file" },
                              on: {
                                change: function($event) {
                                  return _vm.documentChosen($event)
                                }
                              }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-row", { staticClass: "mt-5" }, [
                        _c("h4", { staticClass: "row-title" }, [
                          _vm._v("Features")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[2].features, function(f, index) {
                        return _c(
                          "v-row",
                          {
                            key: "feature-" + index,
                            staticClass: "features-block"
                          },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "6 pr-2" } },
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Name" },
                                  model: {
                                    value: f.feature_name,
                                    callback: function($$v) {
                                      _vm.$set(f, "feature_name", $$v)
                                    },
                                    expression: "f.feature_name"
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
                                  attrs: { placeholder: "Feature" },
                                  model: {
                                    value: f.feature_value,
                                    callback: function($$v) {
                                      _vm.$set(f, "feature_value", $$v)
                                    },
                                    expression: "f.feature_value"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "feature-delete",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteFeature(index)
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: "/assets/icons/delete.png",
                                    title: "Delete feature"
                                  }
                                })
                              ]
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
                          _vm._v("Advantages")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.form[2].advantages, function(f, index) {
                        return _c(
                          "v-col",
                          { key: "advantages-" + index, attrs: { cols: "12" } },
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6 pr-2" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { placeholder: "Name" },
                                      model: {
                                        value: f.name,
                                        callback: function($$v) {
                                          _vm.$set(f, "name", $$v)
                                        },
                                        expression: "f.name"
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
                                      attrs: { placeholder: "Advantage" },
                                      model: {
                                        value: f.value,
                                        callback: function($$v) {
                                          _vm.$set(f, "value", $$v)
                                        },
                                        expression: "f.value"
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
                              "label",
                              {
                                staticClass: "add-to-item w-100",
                                attrs: { for: "file-upload-" + index }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(f.icon ? f.icon : "Add icon") +
                                    "\n                            "
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
                                  staticClass: "ml-2 file-input-icon"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: {
                                id: "file-upload-" + index,
                                type: "file"
                              },
                              on: {
                                change: function($event) {
                                  return _vm.iconChosen($event, index)
                                }
                              }
                            })
                          ],
                          1
                        )
                      }),
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

/***/ "./resources/js/components/backend/products/AddProduct.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/backend/products/AddProduct.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProduct_vue_vue_type_template_id_2fcd84c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true& */ "./resources/js/components/backend/products/AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true&");
/* harmony import */ var _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/products/AddProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddProduct_vue_vue_type_style_index_0_id_2fcd84c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css& */ "./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProduct_vue_vue_type_template_id_2fcd84c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProduct_vue_vue_type_template_id_2fcd84c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fcd84c3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/products/AddProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/products/AddProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/backend/products/AddProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2fcd84c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=style&index=0&id=2fcd84c3&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/backend/products/AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/backend/products/AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_2fcd84c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/products/AddProduct.vue?vue&type=template&id=2fcd84c3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_2fcd84c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_2fcd84c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);