(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-5"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/dataTables.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/eventbus */ "./resources/js/event/eventbus.js");
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


var Confirm = function Confirm() {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./Confirm */ "./resources/js/components/backend/data/Confirm.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Confirm: Confirm
  },
  props: {
    headings: Array,
    pageType: String,
    items: Array,
    add: String,
    lang: Number,
    numberPage: Number,
    seenPage: String,
    categories: Array
  },
  data: function data() {
    return {
      sortBy: 'name',
      sortDesc: true,
      itemsPerPage: 5,
      selected: [],
      search: '',
      isMobile: false,
      page: 'default',
      statusUpdated: false,
      options: {},
      category_id: 0,
      category_name: 'All products',
      data: []
    };
  },
  mounted: function mounted() {
    this.options.page = this.number;
    var footer = $('.v-data-footer .v-select__slot .v-input__append-inner svg');
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    footer.find('path').remove();
    footer.append($(svg).attr('d', "M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"));
  },
  computed: {
    addButton: function addButton() {
      switch (this.pageType) {
        case 'products':
          return 'Add Product';

        case 'projects':
          return 'Add Project';

        case 'news':
          return 'Add Article';

        case 'careers':
          return 'Add Job';
      }
    },
    number: function number() {
      return this.$store.getters.getPage;
    }
  },
  created: function created() {
    /*            setTimeout(()=>{
                    $('table th').each((i,e)=>{
                        $(e).css('width',100/this.headings.length+'%');
                    })
                },1000)*/
  },
  methods: {
    selectCategory: function selectCategory(id, name) {
      var _this = this;

      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var parent_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.category_id = id;
      var categories = [];

      if (!parent_id && children) {
        children.forEach(function (e, i) {
          categories.push(e.id);
        });
      }

      this.$store.dispatch('products', {
        lang_id: 2,
        category_id: categories.length ? categories : id
      }).then(function () {
        var products = _this.$store.getters.getProducts;
        var data = [];
        /*     if(!products && parent_id){
                 this.$store.dispatch('products',{lang_id:2,category_id:parent_id}).then(()=>{
                     products = this.$store.getters.getProducts;
                 })
             }*/

        if (products) {
          if (Array.isArray(products)) {
            if (id === 0) {
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
              products.forEach(function (item) {
                if (item.translates) {
                  data.push({
                    value: true,
                    type: item.category.data.name,
                    name: item.translates.name,
                    available: item.available,
                    sku: item.sku,
                    price: item.price + ' EUR',
                    id: item.id
                  });
                }
              });
            }
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

          _this.data = data;
        }
      });
      this.category_name = name;
      this.$refs.select.blur();
    },
    compare: function compare(a, b, index, isDesc) {
      var sort = index[0];

      if (!isDesc) {
        if (sort === 'name') {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }

        if (sort === 'date') {
          if (Date.parse(a.created_at) < Date.parse(b.created_at)) return -1;
          if (Date.parse(a.created_at) > Date.parse(b.created_at)) return 1;
          return 0;
        } else if (sort === 'price') {
          if (parseFloat(a.price) < parseFloat(b.price)) return -1;
          if (parseFloat(a.price) > parseFloat(b.price)) return 1;
          return 0;
        } else {
          if (a[sort] < b[sort]) return -1;
          if (a[sort] > b[sort]) return 1;
          return 0;
        }
      }

      if (sort === 'name') {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      } else {
        if (sort === 'date') {
          if (Date.parse(a.created_at) > Date.parse(b.created_at)) return -1;
          if (Date.parse(a.created_at) < Date.parse(b.created_at)) return 1;
          return 0;
        } else if (sort === 'price') {
          if (parseFloat(a.price) > parseFloat(b.price)) return -1;
          if (parseFloat(a.price) < parseFloat(b.price)) return 1;
          return 0;
        } else {
          if (a[sort] > b[sort]) return -1;
          if (a[sort] < b[sort]) return 1;
          return 0;
        }
      }
    },
    customSort: function customSort(items, index, isDesc) {
      var _this2 = this;

      items.sort(function (a, b) {
        return _this2.compare(a, b, index, isDesc[0]);
      });
      return items;
    },
    showModal: function showModal(id) {
      var _this3 = this;

      this.$parent.$data.open = true;
      this.$parent.$data.id = id;
      this.$emit('value', true);
      axios.post('/admin/change', {
        type: this.seenPage,
        id: id
      }).then(function (r) {
        if (!r.data.info) {
          _this3.$store.dispatch('countRequests');
        }
      });
    },
    onResize: function onResize() {
      if (window.innerWidth < 769) this.isMobile = true;else this.isMobile = false;
    },
    toggleAll: function toggleAll() {
      if (this.selected.length) this.selected = [];else this.selected = this.data.slice();
    },
    changeSort: function changeSort(column) {
      if (this.sortBy === column) {
        this.sortDesc ? this.sortDesc = false : this.sortDesc = true;
      } else {
        this.sortBy = column;
        this.sortDesc = false;
      }
    },
    itemsSort: function itemsSort(items) {
      var elements = _toConsumableArray(items);

      elements.pop();
      return elements;
    },
    toggleSearch: function toggleSearch() {
      $(event.currentTarget).prev().slideToggle('300');
    },
    toggleStatus: function toggleStatus(val, id) {
      var _this4 = this;

      axios.post('/admin/' + this.pageType + '/status', {
        id: id,
        status: val
      }).then(function (response) {
        _this4.statusUpdated = !_this4.statusUpdated;

        _this4.$emit('page', _this4.options.page);
      });
    },
    duplicateItem: function duplicateItem(id) {
      var _this5 = this;

      this.$refs.confirm.open('Duplicate', 'Are you sure?', {
        color: 'red'
      }).then(function (confirm) {
        if (confirm) {
          axios.post('/admin/duplicate', {
            id: id
          }).then(function (response) {
            if (response.status === 200) {
              $('.category-name').each(function (i, e) {
                if (parseFloat($(e).attr('data-id')) === _this5.category_id) $(e).click();
              });
            }
          });
        }
      });
    },
    deleteItem: function deleteItem(id) {
      var _this6 = this;

      this.$refs.confirm.open('Delete', 'Are you sure?', {
        color: 'red'
      }).then(function (confirm) {
        if (confirm) {
          axios.get('/admin/' + _this6.pageType + '/' + id + '/delete').then(function (response) {
            if (response.status === 200) {
              _this6.$store.dispatch(_this6.pageType);

              $('.category-name').each(function (i, e) {
                if (parseFloat($(e).attr('data-id')) === _this6.category_id) $(e).click();
              });
            }
          });
        }
      });
    }
  },
  watch: {
    statusUpdated: function statusUpdated(oldVal, newVal) {
      if (oldVal !== newVal) this.$emit('statusUpdated', newVal);
    },
    numberPage: function numberPage(n, o) {
      if (n !== o) {
        this.options.page = n;
      }
    },
    items: {
      immediate: true,
      handler: function handler(n, o) {
        if (n !== o) this.data = this.items;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-input.v-input--hide-details[data-v-c5aeb884] {\n    display: none;\n    max-width: 250px;\n}\ni.mdi-magnify[data-v-c5aeb884] {\n    cursor: pointer;\n    margin: 0;\n}\n.opacity-3[data-v-c5aeb884] {\n    opacity: 0.4;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_style_index_0_id_c5aeb884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_style_index_0_id_c5aeb884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_style_index_0_id_c5aeb884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_style_index_0_id_c5aeb884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_style_index_0_id_c5aeb884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=template&id=c5aeb884&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/data/dataTables.vue?vue&type=template&id=c5aeb884&scoped=true& ***!
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
  return _c(
    "v-app",
    { key: _vm.statusUpdated, attrs: { id: "inspire" } },
    [
      _c(
        "v-toolbar",
        { attrs: { fixed: "" } },
        [
          _c("v-toolbar-title", { staticClass: "dark--text" }, [
            _c("h3", [_vm._v(_vm._s(_vm.$attrs.heading))])
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.pageType === "projects"
            ? _c(
                "v-col",
                { staticClass: "sortable-input", attrs: { cols: "2" } },
                [
                  _c("v-select", {
                    attrs: { items: _vm.itemsSort(_vm.headings) },
                    on: {
                      input: function($event) {
                        return _vm.changeSort(_vm.sortBy)
                      }
                    },
                    model: {
                      value: _vm.sortBy,
                      callback: function($$v) {
                        _vm.sortBy = $$v
                      },
                      expression: "sortBy"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.pageType === "products"
            ? _c(
                "v-col",
                { staticClass: "sortable-input", attrs: { cols: "2" } },
                [
                  _c("v-select", {
                    ref: "select",
                    staticClass: "category-sort",
                    attrs: {
                      eager: true,
                      "item-text": "data.name",
                      name: "category",
                      items: _vm.categories
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "item",
                          fn: function(ref) {
                            var active = ref.active
                            var item = ref.item
                            var attrs = ref.attrs
                            var on = ref.on
                            return [
                              _c(
                                "v-list-item",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticClass: "d-block",
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var active = ref.active
                                              return [
                                                _c(
                                                  "v-list-item-content",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        $event.stopPropagation()
                                                        return _vm.selectCategory(
                                                          item.id,
                                                          item.data.name,
                                                          item.children,
                                                          item.parent_id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-list-item-title",
                                                      [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            attrs: {
                                                              "no-gutters": "",
                                                              align: "center"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "category-name",
                                                                attrs: {
                                                                  "data-id":
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    item.data
                                                                      .name
                                                                  )
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
                                                item.children
                                                  ? _c(
                                                      "ul",
                                                      _vm._l(
                                                        item.children,
                                                        function(c) {
                                                          return _c(
                                                            "li",
                                                            {
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  $event.stopPropagation()
                                                                  return _vm.selectCategory(
                                                                    c.id,
                                                                    c.data.name,
                                                                    [],
                                                                    item.parent_id
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "category-name",
                                                                  attrs: {
                                                                    "data-id":
                                                                      c.id
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      c.data
                                                                        .name
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  : _vm._e()
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    "v-list-item",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      369459883
                    ),
                    model: {
                      value: _vm.category_name,
                      callback: function($$v) {
                        _vm.category_name = $$v
                      },
                      expression: "category_name"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.pageType === "products" ||
          _vm.pageType === "projects" ||
          _vm.pageType === "news" ||
          _vm.pageType === "careers"
            ? _c(
                "v-btn",
                { staticClass: "btn add-item" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "Add" + _vm.add } } },
                    [_vm._v(_vm._s(_vm.addButton))]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "search-input mx-4",
            attrs: { label: "Search", "single-line": "", "hide-details": "" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          }),
          _vm._v(" "),
          _c("i", {
            staticClass: "mdi mdi-magnify px-2 h3",
            on: {
              click: function($event) {
                return _vm.toggleSearch()
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        {
          directives: [
            {
              name: "resize",
              rawName: "v-resize",
              value: _vm.onResize,
              expression: "onResize"
            }
          ],
          staticStyle: { "padding-top": "56px" },
          attrs: { column: "" }
        },
        [
          _c(
            "v-data-table",
            {
              class: { mobile: _vm.isMobile },
              attrs: {
                "items-per-page": _vm.itemsPerPage,
                headers: _vm.headings,
                items: _vm.data,
                search: _vm.search,
                options: _vm.options,
                "hide-default-headers": _vm.isMobile,
                "sort-by": _vm.sortBy,
                "sort-desc": _vm.sortDesc,
                page: _vm.number,
                "custom-sort": _vm.customSort
              },
              on: {
                "update:options": function($event) {
                  _vm.options = $event
                },
                "update:sortBy": function($event) {
                  _vm.sortBy = $event
                },
                "update:sort-by": function($event) {
                  _vm.sortBy = $event
                },
                "update:sortDesc": function($event) {
                  _vm.sortDesc = $event
                },
                "update:sort-desc": function($event) {
                  _vm.sortDesc = $event
                }
              },
              scopedSlots: _vm._u(
                [
                  _vm.pageType === "default"
                    ? {
                        key: "item.controls",
                        fn: function(props) {
                          return [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-warning btn-small",
                                attrs: { "data-target": "#requests" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.showModal(props.item.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    Actions\n                "
                                )
                              ]
                            )
                          ]
                        }
                      }
                    : _vm.pageType !== "archive"
                    ? {
                        key: "item.controls",
                        fn: function(props) {
                          return [
                            _c(
                              "div",
                              {
                                staticClass: "d-flex pr-6 justify-content-end"
                              },
                              [
                                _vm.pageType === "products"
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "duplicate-item",
                                        attrs: { href: "" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            $event.stopPropagation()
                                            return _vm.duplicateItem(
                                              props.item.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: "/assets/icons/copy.png"
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "edit-item",
                                    attrs: {
                                      to: {
                                        name: "Edit" + _vm.add,
                                        params: {
                                          lang: _vm.lang,
                                          id: props.item.id,
                                          updatePage: true,
                                          pagination: _vm.options.page
                                        }
                                      }
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: { src: "/assets/icons/pen.jpg" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "delete-item",
                                    attrs: { href: "" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        $event.stopPropagation()
                                        return _vm.deleteItem(props.item.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: "/assets/icons/trashcan.jpg"
                                      }
                                    })
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("Confirm", { ref: "confirm" })
                          ]
                        }
                      }
                    : null,
                  {
                    key: "item.status",
                    fn: function(props) {
                      return [
                        props.item.status === "1" || props.item.status === 1
                          ? _c("i", {
                              staticClass: "mdi mdi-eye h5",
                              on: {
                                click: function($event) {
                                  return _vm.toggleStatus(0, props.item.id)
                                }
                              }
                            })
                          : _c("i", {
                              staticClass: "mdi mdi-eye opacity-3 h5",
                              on: {
                                click: function($event) {
                                  return _vm.toggleStatus(1, props.item.id)
                                }
                              }
                            })
                      ]
                    }
                  },
                  {
                    key: "item.available",
                    fn: function(props) {
                      return [
                        props.item.available === "1" ||
                        props.item.available === 1
                          ? _c("i", {
                              staticClass: "mdi mdi-check text-success h5",
                              on: {
                                click: function($event) {
                                  return _vm.toggleStatus(0, props.item.id)
                                }
                              }
                            })
                          : _c("i", {
                              staticClass:
                                "mdi mdi-close text-danger opacity-3 h5",
                              on: {
                                click: function($event) {
                                  return _vm.toggleStatus(1, props.item.id)
                                }
                              }
                            })
                      ]
                    }
                  }
                ],
                null,
                true
              )
            },
            [
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _c(
                "v-alert",
                {
                  attrs: { slot: "no-results", value: true, color: "gray" },
                  slot: "no-results"
                },
                [
                  _vm._v(
                    '\n                Your search for "' +
                      _vm._s(_vm.search) +
                      '" found no results.\n            '
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/data/dataTables.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/backend/data/dataTables.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataTables_vue_vue_type_template_id_c5aeb884_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTables.vue?vue&type=template&id=c5aeb884&scoped=true& */ "./resources/js/components/backend/data/dataTables.vue?vue&type=template&id=c5aeb884&scoped=true&");
/* harmony import */ var _dataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataTables.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/data/dataTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dataTables_vue_vue_type_style_index_0_id_c5aeb884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css& */ "./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dataTables_vue_vue_type_template_id_c5aeb884_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dataTables_vue_vue_type_template_id_c5aeb884_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c5aeb884",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/data/dataTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/data/dataTables.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/backend/data/dataTables.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_style_index_0_id_c5aeb884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=style&index=0&id=c5aeb884&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/backend/data/dataTables.vue?vue&type=template&id=c5aeb884&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/backend/data/dataTables.vue?vue&type=template&id=c5aeb884&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_template_id_c5aeb884_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTables.vue?vue&type=template&id=c5aeb884&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/data/dataTables.vue?vue&type=template&id=c5aeb884&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_template_id_c5aeb884_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTables_vue_vue_type_template_id_c5aeb884_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);