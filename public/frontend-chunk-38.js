(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-38"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Terms.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'terms',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('position', 'relative');
    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('theme', 'light');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh2[data-v-28604ce9]{\n    font-size: 24px !important;\n    line-height: 65px;\n}\nh3[data-v-28604ce9]{\n    font-size: 18px !important;\n    line-height: 65px;\n}\nh1[data-v-28604ce9]{\n    font-size: 30px !important;\n    line-height: 65px;\n}\np[data-v-28604ce9]{\n    font-size: 14px !important;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28604ce9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28604ce9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28604ce9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28604ce9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28604ce9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=template&id=28604ce9&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/information/Terms.vue?vue&type=template&id=28604ce9&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "container" }, [
      _c("h1", { staticClass: "c4" }, [
        _c("span", { staticClass: "c5 c6" }, [
          _vm._v("TERMS  AND CONDITIONS OF SERVICE AGREEMENT")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [_vm._v("LAST REVISION: [04/09/21]")])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            'This Terms of Service Agreement (the "Agreement") governs your use of this website, solix.com  (the "Website"), Solix ("Solix") offer of products for purchase on this Website, or your purchase of products available on this Website. This Agreement includes, and incorporates by this reference, the policies and guidelines referenced below. Solix reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website. Solix will alert you that changes or revisions have been made by indicating on the top of this Agreement the date it was last revised. The changed or revised Agreement will be effective immediately after it is posted on this Website. Your use of the Website following the posting of any such changes or of a revised Agreement will constitute your acceptance of any such changes or revisions. Solix encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing the use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with Solix for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website. If you would like to print this Agreement, please click the print button on your browser toolbar.'
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [_vm._v("I. PRODUCTS")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            'Terms of Offer. This Website offers for sale certain products (the "Products"). By placing an order for Products through this Website, you agree to the terms set forth in this Agreement.'
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c5 font-weight-bold" }, [
          _vm._v("Customer Solicitation:")
        ]),
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            " Unless you notify our third party call center reps or direct Solix sales reps, while they are calling you, of your desire to opt-out from further direct company communications and solicitations, you are agreeing to continue to receive further emails and call solicitations Solix and it is designated in house or third party call team(s).  "
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c5 font-weight-bold" }, [
          _vm._v("Opt-Out Procedure:")
        ]),
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            " We provide 3 easy ways to opt out of future solicitations. 1. You may use the opt-out link found in any email solicitation that you may receive. 2. You may also choose to opt-out, via sending your email address to: info@solix.md."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "3. You may send a written removal request to _______ (address)"
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Proprietary Rights. Solix has proprietary rights and trade secrets in the Products. You may not copy, reproduce, resell or redistribute any Product manufactured and/or distributed by Solix. Solixalso has rights to all trademarks and trade dress and specific layouts of this webpage, including calls to action, text placement, images, and other information."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Sales Tax. If you purchase any Products, you will be responsible for paying any applicable sales tax."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [_vm._v("II. WEBSITE")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Content; Intellectual Property; Third-Party Links. In addition to making Products available, this Website also offers information and marketing materials. This Website also offers information, both directly and through indirect links to third-party websites, about nutritional and dietary supplements. Solix does not always create the information offered on this Website; instead, the information is often gathered from other sources. To the extent that Solix does create the content on this Website, such content is protected by intellectual property laws of the US, foreign nations, and international bodies. Unauthorized use of the material may violate copyright, trademark, and/or other laws. You acknowledge that your use of the content on this Website is for personal, noncommercial use. Any links to third-party websites are provided solely as a convenience to you. Solix does not endorse the contents on any such third-party websites. Solix is not responsible for the content of or any damage that may result from your access to or reliance on these third-party websites. If you link to third-party websites, you do so at your own risk. "
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            'Use of Website; Solix is not responsible for any damages resulting from the use of this website by anyone. You will not use the Website for illegal purposes. You will (1) abide by all applicable local, state, national, and international laws and regulations in your use of the Website (including laws regarding intellectual property), (2) not interfere with or disrupt the use and enjoyment of the Website by other users, (3) not resell material on the Website, (4) not engage, directly or indirectly, in transmission of "spam", chain letters, junk mail or any other type of unsolicited communication, and (5) not defame, harass, abuse, or disrupt other users of the Website'
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "License. By using this Website, you are granted a limited, non-exclusive, non-transferable right to use the content and materials on the Website in connection with your normal, noncommercial, use of the Website. You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without express written authorization from Solix or the applicable third party (if third-party content is at issue)."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Posting. By posting, storing, or transmitting any content on the Website, you hereby grant Solix a perpetual, worldwide, non-exclusive, royalty-free, assignable, right and license to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit and assign such content in any form, in all media now known or hereinafter created, anywhere in the world. [Solix] does not have the ability to control the nature of the user-generated content offered through the Website. You are solely responsible for your interactions with other users of the Website and any content you post. [Solix] is not liable for any damage or harm resulting from any posts by or interactions between users. [Solix] reserves the right, but has no obligation, to monitor interactions between and among users of the Website and to remove any content [Solix] deems objectionable."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [
          _vm._v("III. DISCLAIMER OF WARRANTIES")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            'YOUR USE OF THIS WEBSITE AND/OR PRODUCTS ARE AT YOUR SOLE RISK. THE WEBSITE AND PRODUCTS ARE OFFERED ON AN "AS IS" AND "AS AVAILABLE" BASIS. [Solix] EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT WITH RESPECT TO THE PRODUCTS OR WEBSITE CONTENT, OR ANY RELIANCE UPON OR USE OF THE WEBSITE CONTENT OR PRODUCTS. ("PRODUCTS" INCLUDE TRIAL PRODUCTS.)'
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, [Solix] MAKES NO WARRANTY:"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "THAT THE INFORMATION PROVIDED ON THIS WEBSITE IS ACCURATE, RELIABLE, COMPLETE, OR TIMELY."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "THAT THE LINKS TO THIRD-PARTY WEBSITES ARE TO INFORMATION THAT IS ACCURATE, RELIABLE, COMPLETE, OR TIMELY."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THIS WEBSITE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. "
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE PRODUCTS OR THAT DEFECTS IN PRODUCTS WILL BE CORRECTED. "
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "REGARDING ANY PRODUCTS PURCHASED OR OBTAINED THROUGH THE WEBSITE."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [
          _vm._v("IV. LIMITATION OF LIABILITY")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "[Solix] ENTIRE LIABILITY, AND YOUR EXCLUSIVE REMEDY, IN LAW, IN EQUITY, OR OTHERWISE, WITH RESPECT TO THE WEBSITE CONTENT AND PRODUCTS AND/OR FOR ANY BREACH OF THIS AGREEMENT IS SOLELY LIMITED TO THE AMOUNT YOU PAID, LESS SHIPPING AND HANDLING, FOR PRODUCTS PURCHASED VIA THE WEBSITE."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "[Solix] WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES IN CONNECTION WITH THIS AGREEMENT OR THE PRODUCTS IN ANY MANNER, INCLUDING LIABILITIES RESULTING FROM (1) THE USE OR THE INABILITY TO USE THE WEBSITE CONTENT OR PRODUCTS; (2) THE COST OF PROCURING SUBSTITUTE PRODUCTS OR CONTENT; (3) ANY PRODUCTS PURCHASED OR OBTAINED OR TRANSACTIONS ENTERED INTO THROUGH THE WEBSITE; OR (4) ANY LOST PROFITS YOU ALLEGE."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("h2", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [_vm._v("V. INDEMNIFICATION")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "You will release, indemnify, defend and hold harmless [Solix], and any of its contractors, agents, employees, officers, directors, shareholders, affiliates and assigns from all liabilities, claims, damages, costs, and expenses, including reasonable attorneys' fees and expenses, of third parties relating to or arising out of (1) this Agreement or the breach of your warranties, representations and obligations under this Agreement; (2) the Website content or your use of the Website content; (3) the Products or your use of the Products (including Trial Products); (4) any intellectual property or another proprietary right of any person or entity; (5) your violation of any provision of this Agreement; or (6) any information or data you supplied to [Solix]. When [Solix] is threatened with suit or sued by a third party, [Solix] may seek written assurances from you concerning your promise to indemnify [Solix]; your failure to provide such assurances may be considered by [Solix] to be a material breach of this Agreement. [Solix] will have the right to participate in any defense by you of a third-party claim related to your use of any of the Website content or Products, with counsel of [Solix] choice at its expense. [Solix] will reasonably cooperate in any defense by you of a third-party claim at your request and expense. You will have sole responsibility to defend [Solix] against any claim, but you must receive [Solix] prior written consent regarding any related settlement. The terms of this provision will survive any termination or cancellation of this Agreement or your use of the Website or Products."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [_vm._v("VI. PRIVACY")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "[Solix] believes strongly in protecting user privacy and providing you with notice of the use of data. Please refer to [Solix] privacy policy, incorporated by reference herein, that is posted on the Website."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [_vm._v("VI. AGREEMENT TO BE BOUND")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "By using this Website or ordering Products, you acknowledge that you have read and agree to be bound by this Agreement and all terms and conditions on this Website. "
          )
        ])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "c0" }, [
        _c("span", { staticClass: "c1" }, [_vm._v("VIII. GENERAL")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Force Majeure. [Solix] will not be deemed in default hereunder or held responsible for any cessation, interruption, or delay in the performance of its obligations hereunder due to earthquake, flood, fire, storm, natural disaster, war, terrorism, armed conflict, labor strike, lockout, or boycott."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Cessation of Operation. [Solix] may at any time, in its sole discretion and without advance notice to you, cease operation of the Website and distribution of the Products."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Entire Agreement. This Agreement comprises the entire agreement between you and [Solix] and supersedes any prior agreements pertaining to the subject matter contained herein."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Effect of Waiver. The failure of [Solix] to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision. If any provision of this Agreement is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties intentions as reflected in the provision, and the other provisions of this Agreement remain in full force and effect."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Governing Law; Jurisdiction. This Website originates from the Republic of Moldova. This Agreement will be governed by the laws of the Republic of Moldova without regard to its conflict of law principles to the contrary. Neither you nor [Solix] will commence or prosecute any suit, proceeding, or claim to enforce the provisions of this Agreement, to recover damages for breach of or default of this Agreement, or otherwise arising under or by reason of this Agreement, other than in courts located in the Republic of Moldova. By using this Website or ordering Products, you consent to the jurisdiction and venue of such courts in connection with any action, suit, proceeding, or claim arising under or by reason of this Agreement. You hereby waive any right to trial by jury arising out of this Agreement and any related documents."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Statute of Limitation. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Website or Products or this Agreement must be filed within one (1) year after such claim or cause of action arose or be forever barred."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Waiver of Class Action Rights. BY ENTERING INTO THIS AGREEMENT, YOU HEREBY IRREVOCABLY WAIVE ANY RIGHT YOU MAY HAVE TO JOIN CLAIMS WITH THOSE OF OTHER IN THE FORM OF A CLASS ACTION OR SIMILAR PROCEDURAL DEVICE. ANY CLAIMS ARISING OUT OF, RELATING TO, OR CONNECTION WITH THIS AGREEMENT MUST BE ASSERTED INDIVIDUALLY."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Termination. [Solix] reserves the right to terminate your access to the Website if it reasonably believes, in its sole discretion, that you have breached any of the terms and conditions of this Agreement. Following termination, you will not be permitted to use the Website, and [Solix] may, in its sole discretion and without advance notice to you, cancel any outstanding orders for Products. If your access to the Website is terminated, [Solix] reserves the right to exercise whatever means it deems necessary to prevent unauthorized access to the Website. This Agreement will survive indefinitely unless and until [Solix] chooses, in its sole discretion and without advance to you, to terminate it."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Domestic Use. [Solix] makes no representation that the Website or Products are appropriate or available for use in locations outside India. Users who access the Website from outside India do so at their own risk and initiative and must bear all responsibility for compliance with any applicable local laws."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c2" }, [
          _vm._v(
            "Assignment. You may not assign your rights and obligations under this Agreement to anyone. [Solix] may assign its rights and obligations under this Agreement in its sole discretion and without advance notice to you."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c0" }, [
        _c("span", { staticClass: "c8" }, [
          _vm._v(
            "BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE  TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT."
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [_c("span", { staticClass: "c2" })]),
      _vm._v(" "),
      _c("p", { staticClass: "c3" }, [_c("span", { staticClass: "c2" })])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/information/Terms.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/public/information/Terms.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Terms_vue_vue_type_template_id_28604ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Terms.vue?vue&type=template&id=28604ce9&scoped=true& */ "./resources/js/components/public/information/Terms.vue?vue&type=template&id=28604ce9&scoped=true&");
/* harmony import */ var _Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Terms.vue?vue&type=script&lang=js& */ "./resources/js/components/public/information/Terms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Terms_vue_vue_type_style_index_0_id_28604ce9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css& */ "./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Terms_vue_vue_type_template_id_28604ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Terms_vue_vue_type_template_id_28604ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28604ce9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/information/Terms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/information/Terms.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/public/information/Terms.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Terms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28604ce9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=style&index=0&id=28604ce9&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/information/Terms.vue?vue&type=template&id=28604ce9&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/public/information/Terms.vue?vue&type=template&id=28604ce9&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_template_id_28604ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Terms.vue?vue&type=template&id=28604ce9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/information/Terms.vue?vue&type=template&id=28604ce9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_template_id_28604ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_template_id_28604ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);