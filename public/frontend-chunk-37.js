(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-37"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Privacy.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'privacy',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('position', 'relative');
    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('theme', 'light');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh2[data-v-8f13582c]{\n    font-size: 24px !important;\n    line-height: 65px;\n}\nh3[data-v-8f13582c]{\n    font-size: 18px !important;\n    line-height: 65px;\n}\nh1[data-v-8f13582c]{\n    font-size: 30px !important;\n    line-height: 65px;\n}\np[data-v-8f13582c]{\n    font-size: 14px !important;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_style_index_0_id_8f13582c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_style_index_0_id_8f13582c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_style_index_0_id_8f13582c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_style_index_0_id_8f13582c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_style_index_0_id_8f13582c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=template&id=8f13582c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Privacy.vue?vue&type=template&id=8f13582c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container pl-10" }, [
      _c("h1", { staticClass: "c11", attrs: { id: "h.d8l6niouvxfc" } }, [
        _c("span", { staticClass: "c5 c4" }, [_vm._v("Solix Privacy Policy")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. "
          )
        ])
      ]),
      _vm._v(" "),
      _c("h1", { staticClass: "c3", attrs: { id: "h.9ue6v1d7kqw" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Interpretation and Definitions")
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.sh6pycdyde0l" } }, [
        _c("span", { staticClass: "c5 c4" }, [_vm._v("Interpretation")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The words of which the initial letter is capitalized have meanings defined under the following conditions."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The following definitions shall have the same meaning regardless of whether they appear in singular or plural."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.vqbg4sfh8hfw" } }, [
        _c("span", { staticClass: "c4 c5" }, [_vm._v("Definitions")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v("For the purposes of this Privacy Policy:")
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "c2 lst-kix_z0uh8usi7395-0 start" }, [
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("You")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Company")]),
          _c("span", [
            _vm._v(
              ' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Solix, ('
            )
          ]),
          _c("span", { staticClass: "c4" }, [_vm._v("paste address here")]),
          _c("span", { staticClass: "c0" }, [_vm._v(").")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Affiliate")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              ' means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.'
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Account")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " means a unique account created for You to access our Service or parts of our Service."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Website")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(" refers to Solix, accessible from solix.com")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Service")]),
          _c("span", { staticClass: "c0" }, [_vm._v(" refers to the Website.")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Country")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(" refers to: Republic of Moldova")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Service Provider")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("Third-party Social Media Service")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " refers to any website or any social network website through which a User can log in or create an account to use the Service."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Personal Data")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " is any information that relates to an identified or identifiable individual."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Cookies")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Device")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " means any device that can access the Service such as a computer, a cellphone, or a digital tablet."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("Usage Data")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c9" }, [
        _c("span", { staticClass: "c4 c6" }, [
          _vm._v("Collecting and Using Your Personal Data")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c9" }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Types of Data Collected")
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "c12", attrs: { id: "h.wworu6wvplzw" } }, [
        _c("span", { staticClass: "c5 c4" }, [_vm._v("Personal Data")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "c2 lst-kix_aupxpop7jwda-0 start" }, [
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [_vm._v("Email address")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [
            _vm._v("First name and last name")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [_vm._v("Phone number")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [
            _vm._v("Address, State, Province, ZIP/Postal code, City")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [_vm._v("Usage Data")])
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "c3", attrs: { id: "h.1s415qqgwt4y" } }, [
        _c("span", { staticClass: "c5 c4" }, [_vm._v("Usage Data")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Usage Data is collected automatically when using the Service."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "c3", attrs: { id: "h.ccyj7umrp47p" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Tracking Technologies and Cookies")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", [
          _vm._v(
            'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. Learn more about cookies here: '
          )
        ]),
        _c("span", [
          _c(
            "a",
            {
              staticClass: "c13",
              attrs: {
                href:
                  "https://www.google.com/url?q=https://www.freeprivacypolicy.com/blog/cookies/&sa=D&source=editors&ust=1618324327203000&usg=AOvVaw3bFykgXbQZ-f3iReFnGfQf"
              }
            },
            [_vm._v("Cookies: What Do They Do?")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "We use both session and persistent Cookies for the purposes set out below:"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "c2 lst-kix_50m34c9x8hvi-0 start" }, [
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("Necessary / Essential Cookies"),
            _c("br")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v("Type: Session Cookies"),
            _c("br"),
            _vm._v("Administered by: Us"),
            _c("br"),
            _vm._v(
              "Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("Cookies Policy / Notice Acceptance Cookies"),
            _c("br")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v("Type: Persistent Cookies"),
            _c("br"),
            _vm._v("Administered by: Us"),
            _c("br"),
            _vm._v(
              "Purpose: These Cookies identify if users have accepted the use of cookies on the Website."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("Functionality Cookies"),
            _c("br")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v("Type: Persistent Cookies"),
            _c("br"),
            _vm._v("Administered by: Us"),
            _c("br"),
            _vm._v(
              "Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.czxxu9g6rqal" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Use of Your Personal Data")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The Company may use Personal Data for the following purposes:"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "c2 lst-kix_8uhgxxhcu1q-0 start" }, [
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("To provide and maintain our Service")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(", including to monitor the usage of our Service.")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("To manage Your Account:")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("For the performance of a contract:")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("To contact You:")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("To provide You")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("To manage Your requests:")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(" To attend and manage Your requests to Us.")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "We may share your personal information in the following situations:"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "c2 lst-kix_uacuk91qs4nj-0 start" }, [
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("With Service Providers:")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("For Business transfers:")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("With Affiliates:")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [
            _vm._v("With Business Partners:")
          ]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " We may share Your information with Our business partners to offer You certain products, services, or promotions."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c4" }, [_vm._v("With other users:")]),
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              " when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures, and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.1bz15ezg2a2c" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Retention of Your Personal Data")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer periods."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.1eggrh6hl2qx" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Transfer of Your Personal Data")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.lx3magy94q0j" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Disclosure of Your Personal Data")
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "c3", attrs: { id: "h.jud0hx1jh33z" } }, [
        _c("span", { staticClass: "c5 c4" }, [_vm._v("Business Transactions")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "c3", attrs: { id: "h.ko6448705vn" } }, [
        _c("span", { staticClass: "c5 c4" }, [_vm._v("Law enforcement")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "c3", attrs: { id: "h.jrxn687jgzuj" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Other legal requirements")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "c2 lst-kix_gzc0fzfxpi99-0 start" }, [
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [
            _vm._v("Comply with a legal obligation")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [
            _vm._v("Protect and defend the rights or property of the Company")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              "Prevent or investigate possible wrongdoing in connection with the Service"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [
            _vm._v(
              "Protect the personal safety of Users of the Service or the public"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "c1 li-bullet-0" }, [
          _c("span", { staticClass: "c0" }, [
            _vm._v("Protect against legal liability")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.tv5pa8ty2vdz" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Security of Your Personal Data")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", [_vm._v("Solix")]),
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            " will use reasonable technical, administrative, and physical measures to protect information contained in our system against misuse, loss or alteration. All information you provide to us is stored on our secure servers or secured servers licensed for use by us. Solix complies with the Payment Card Industry Data Security Standard (PCI-DSS)."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Where we have given you (or where you have chosen) a password that enables you to access certain parts of our Processing Services or to engage with our customer service team, you are responsible for keeping this password confidential and adequately complex. We ask you not to share a password with anyone and change your password every 90 days. If we receive instructions using your log-in information we will consider that you have authorized the instructions."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3 c8" }, [_c("span", { staticClass: "c0" })]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Unfortunately, the transmission of information via the Internet is not completely secure. Although we will do our best to protect your Personal data, we cannot guarantee the security of your data transmitted to our Website; any transmission is at your own risk."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h1", { staticClass: "c3", attrs: { id: "h.yqudp7qrxef" } }, [
        _c("span", { staticClass: "c5 c4" }, [_vm._v("Children's Privacy")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please Contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h1", { staticClass: "c3", attrs: { id: "h.vld6wtv2pwe1" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Links to Other Websites")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "We have no control over and assume no responsibility for the content, privacy policies, or practices of any third party sites or services."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h1", { staticClass: "c3", attrs: { id: "h.o7mzlfci3lew" } }, [
        _c("span", { staticClass: "c5 c4" }, [
          _vm._v("Changes to this Privacy Policy")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            'We will let You know via email and/or a prominent notice on Our Service, before the change becomes effective and update the "Last Updated" date at the top of this Privacy Policy.'
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c7", attrs: { id: "h.1r5njh7qqxd0" } }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "The conflict between this Privacy Policy and the Terms of Service or the Website Terms and conditions"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c14 c15" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "Where there is a conflict between this Privacy Policy and an explicit provision of the Terms of Service or the Website Terms related to our Processing Services, this Privacy Policy will prevail over those other Terms."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c3", attrs: { id: "h.r1i4nc2vvugb" } }, [
        _c("span", { staticClass: "c0" }, [_vm._v("Contact Us")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [
        _c("span", { staticClass: "c0" }, [
          _vm._v(
            "If you have any questions about this Privacy Policy, You can contact us by email: info@solix.md"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c8 c14" }, [_c("span", { staticClass: "c0" })]),
      _vm._v(" "),
      _c("p", { staticClass: "c8 c16" }, [_c("span", { staticClass: "c0" })])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/information/Privacy.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/public/information/Privacy.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Privacy_vue_vue_type_template_id_8f13582c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Privacy.vue?vue&type=template&id=8f13582c&scoped=true& */ "./resources/js/components/public/information/Privacy.vue?vue&type=template&id=8f13582c&scoped=true&");
/* harmony import */ var _Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Privacy.vue?vue&type=script&lang=js& */ "./resources/js/components/public/information/Privacy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Privacy_vue_vue_type_style_index_0_id_8f13582c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css& */ "./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Privacy_vue_vue_type_template_id_8f13582c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Privacy_vue_vue_type_template_id_8f13582c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8f13582c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/information/Privacy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/information/Privacy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/public/information/Privacy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Privacy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_style_index_0_id_8f13582c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=style&index=0&id=8f13582c&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/information/Privacy.vue?vue&type=template&id=8f13582c&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/public/information/Privacy.vue?vue&type=template&id=8f13582c&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_template_id_8f13582c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Privacy.vue?vue&type=template&id=8f13582c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Privacy.vue?vue&type=template&id=8f13582c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_template_id_8f13582c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_template_id_8f13582c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);