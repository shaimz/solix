(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-42"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event/eventbus.js */ "./resources/js/event/eventbus.js");
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var breadcrumbs = function breadcrumbs() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));
};

var moreItems = function moreItems() {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../includes/moreItems */ "./resources/js/components/public/includes/moreItems.vue"));
};

var Advantages = function Advantages() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-41").then(__webpack_require__.bind(null, /*! ./Advantages */ "./resources/js/components/public/products/Advantages.vue"));
};



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Product',
  components: {
    moreItems: moreItems,
    breadcrumbs: breadcrumbs,
    Advantages: Advantages
  },
  data: function data() {
    return {
      language: this.$route.params.locale === 'en' ? 1 : this.$route.params.locale === 'ru' ? 3 : 2,
      id: this.$route.params.id,
      item: [],
      render: false,
      featureShow: true,
      features: 6
    };
  },
  mounted: function mounted() {
    var _this = this;

    _event_eventbus_js__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('position', 'relative');
    _event_eventbus_js__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('theme', 'light');
    this.$store.dispatch('product', {
      lang: this.language,
      id: this.id
    }).then(function () {
      _this.item = _this.$store.getters.getProduct;
      _this.render = true;
    });

    if (!this.xsmall) {
      this.featureShow = false; // this.features = 0;
    }
  },
  computed: {
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.medium;
    },
    windowWidth: function windowWidth() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.largeCompare;
    },
    mediumCompare: function mediumCompare() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.mediumCompare;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.xsmall;
    }
  },
  methods: {
    showFeatures: function showFeatures() {
      this.features = this.item.features.length;
      this.featureShow = false;
    },
    toggleModal: function toggleModal(val) {
      _event_eventbus_js__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('openModal', {
        value: val,
        type: 'product',
        id: this.$route.params.id
      });
    },
    showDescription: function showDescription(e) {
      $(e.currentTarget).prev().css('max-height', '100%');
      $(e.currentTarget).hide();
    }
  },
  watch: {
    $route: function $route(to) {
      var _this2 = this;

      this.id = to.params.id;
      this.$store.dispatch('product', {
        lang: this.language,
        id: this.id
      }).then(function () {
        _this2.item = _this2.$store.getters.getProduct;
        _this2.render = true;
      });

      if (to.params.id) {
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('position', 'relative');
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('theme', 'light');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.description-title[data-v-1855d08f]{\n    font-size: 16px;\n}\n.product-doc[data-v-1855d08f] {\n    margin-top: 20px\n}\n", ""]);

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_1855d08f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_1855d08f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_1855d08f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_1855d08f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_1855d08f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true& ***!
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
    [
      _vm.render
        ? _c(
            "div",
            { staticClass: "col-xl-7 col-11 m-auto", attrs: { id: "product" } },
            [
              _c("breadcrumbs", { attrs: { color: "dark" } }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "allProducts pl-lg-3 pl-0" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "d-flex justify-content-lg-start justify-content-center align-items-center text-dark font-weight-bold",
                      attrs: {
                        to: {
                          name: "productsCategory",
                          params: {
                            locale: _vm.$route.params.locale,
                            category: _vm.item.category.url
                          }
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "arrow left mr-2" }),
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.item.category.data.name
                              ? _vm.item.category.data.name
                              : _vm.$t("products.all")
                          )
                        )
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.medium
                ? _c("h2", { staticClass: "text-dark" }, [
                    _vm._v(_vm._s(_vm.item.translates.name))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-lg-flex d-xs-block mx-auto py-0 position-unset text-lg-start"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-lg-4 col-12 text-lg-start text-xs-center"
                    },
                    [
                      _vm.windowWidth && !_vm.medium
                        ? _c("h2", { staticClass: "text-dark" }, [
                            _vm._v(_vm._s(_vm.item.translates.name))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.windowWidth
                        ? _c("div", { staticClass: "available" }, [
                            _c("p", [
                              _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: _vm.item.available
                                      ? "/assets/icons/avail.png"
                                      : "/assets/icons/not-avail.png",
                                    expression:
                                      "item.available ? '/assets/icons/avail.png' : '/assets/icons/not-avail.png'"
                                  }
                                ],
                                staticClass: "mr-2"
                              }),
                              _vm._v(
                                _vm._s(
                                  _vm.item.available
                                    ? _vm.$t("products.available")
                                    : _vm.$t("products.notAvailable")
                                )
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: _vm.item.image
                              ? _vm.item.image
                              : "/private/images/products/no-image.png",
                            expression:
                              "item.image ? item.image : '/private/images/products/no-image.png'"
                          }
                        ]
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-8 col-12" },
                    [
                      !_vm.windowWidth
                        ? _c("h2", { staticClass: "text-dark" }, [
                            _vm._v(_vm._s(_vm.item.translates.name))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.windowWidth
                        ? _c("div", { staticClass: "available" }, [
                            _c("p", [
                              _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: _vm.item.available
                                      ? "/assets/icons/avail.png"
                                      : "/assets/icons/not-avail.png",
                                    expression:
                                      "item.available ? '/assets/icons/avail.png' : '/assets/icons/not-avail.png'"
                                  }
                                ],
                                staticClass: "mr-2"
                              }),
                              _vm._v(
                                _vm._s(
                                  _vm.item.available
                                    ? _vm.$t("products.available")
                                    : _vm.$t("products.notAvailable")
                                )
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "orderProduct d-flex col-lg-8 col-12 p-0"
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.item.brand_logo,
                                expression: "item.brand_logo"
                              }
                            ],
                            staticClass: "image",
                            attrs: { alt: "" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "price ml-lg-0 ml-5" }, [
                            _c("p", [_vm._v(_vm._s(_vm.$t("products.price")))]),
                            _vm._v(" "),
                            _c("h3", { staticClass: "roboto text-dark" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.item.price) +
                                  " EUR\n                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn-primary ml-lg-0 ml-auto",
                              on: {
                                click: function($event) {
                                  return _vm.toggleModal(true)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("products.order")))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("Advantages", {
                        attrs: { items: _vm.item.advantage }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "features" }, [
                        _c(
                          "p",
                          { staticClass: "text-dark mb-3 font-weight-bold" },
                          [_vm._v(_vm._s(_vm.$t("products.features")))]
                        ),
                        _vm._v(" "),
                        _vm.xsmall
                          ? _c(
                              "div",
                              { staticClass: "productFeatures d-grid" },
                              _vm._l(_vm.item.features, function(feature, key) {
                                return key < _vm.features
                                  ? _c(
                                      "div",
                                      {
                                        key: feature.id,
                                        staticClass: "feature d-flex"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "feature-info" },
                                          [
                                            _c(
                                              "p",
                                              { staticClass: "color-5" },
                                              [
                                                _vm._v(
                                                  _vm._s(feature.feature_name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              { staticClass: "text-dark" },
                                              [
                                                _vm._v(
                                                  _vm._s(feature.feature_value)
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              }),
                              0
                            )
                          : !_vm.xsmall
                          ? _c(
                              "div",
                              { staticClass: "productFeatures d-grid" },
                              _vm._l(_vm.item.features, function(f, key) {
                                return _c(
                                  "div",
                                  {
                                    key: "feature-m-" + f.id,
                                    staticClass: "feature d-flex"
                                  },
                                  [
                                    _c("div", { staticClass: "feature-info" }, [
                                      _c("p", {
                                        staticClass: "color-5",
                                        domProps: {
                                          innerHTML: _vm._s(f.feature_name)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("p", {
                                        staticClass: "text-dark",
                                        domProps: {
                                          innerHTML: _vm._s(f.feature_value)
                                        }
                                      })
                                    ])
                                  ]
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.item.features.length > 6 &&
                        _vm.xsmall &&
                        _vm.featureShow
                          ? _c("div", { on: { click: _vm.showFeatures } }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-left mt-4 more-features-product"
                                },
                                [
                                  _vm._v(_vm._s(_vm.$t("allFeatures"))),
                                  _c("i", {
                                    staticClass: "arrow down ml-3",
                                    staticStyle: { "margin-bottom": "3px" }
                                  })
                                ]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "productDescription" }, [
                        _c(
                          "p",
                          {
                            staticClass:
                              "description-title mb-3 text-dark font-weight-bold"
                          },
                          [_vm._v(_vm._s(_vm.$t("products.description")))]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "description-text" }, [
                          _vm._v(_vm._s(_vm.item.translates.description))
                        ]),
                        _vm._v(" "),
                        _vm.xsmall
                          ? _c(
                              "div",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.showDescription($event)
                                  }
                                }
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-left mt-4 more-features-product"
                                  },
                                  [
                                    _vm._v(_vm._s(_vm.$t("allFeatures"))),
                                    _c("i", {
                                      staticClass: "arrow down ml-3",
                                      staticStyle: { "margin-bottom": "3px" }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.item.document
                          ? _c("div", { staticClass: "product-doc" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn-primary",
                                  attrs: { href: "" + _vm.item.document }
                                },
                                [_vm._v(_vm._s(_vm.$t("downloadDoc")))]
                              )
                            ])
                          : _vm._e()
                      ])
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("more-items", { attrs: { type: "products", show: 3 } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/products/Product.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/products/Product.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_1855d08f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=1855d08f&scoped=true& */ "./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/public/products/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_id_1855d08f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css& */ "./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_1855d08f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_1855d08f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1855d08f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/products/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/products/Product.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/products/Product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_1855d08f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=style&index=0&id=1855d08f&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1855d08f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=1855d08f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/products/Product.vue?vue&type=template&id=1855d08f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1855d08f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1855d08f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);