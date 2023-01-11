(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-40"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/organization/Organization.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Organization',
  data: function data() {
    return {};
  },
  created: function created() {},
  mounted: function mounted() {
    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('position', 'relative');
    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('theme', 'light');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-9f495f58]{\n    text-decoration: underline !important;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_9f495f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_9f495f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_9f495f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_9f495f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_9f495f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=template&id=9f495f58&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/organization/Organization.vue?vue&type=template&id=9f495f58&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    return _c(
      "div",
      { staticClass: "wrapper container-wrap px-10 padding-top-75" },
      [
        _c("div", { staticClass: "content-head" }, [
          _c("h1", { staticClass: "title" }, [_vm._v("Законодательная база")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content text-left" }, [
          _c("h3", [_vm._v("Оптовый энергорынок")]),
          _vm._v(" "),
          _c("ol", [
            _c("li", { attrs: { id: "bx_3218110189_483" } }, [
              _c("div", [
                _vm._v(
                  "Федеральный закон «Об электроэнергетике» от 26.03.2003 N 35-ФЗ Основной закон, определяющий ключевые понятия и основы организации электроэнергетики в России."
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_3218110189_736" } }, [
              _c("div", [
                _c(
                  "a",
                  {
                    attrs: {
                      href:
                        "/loaded/files/8aa0cdabf786230037ba094596733c97(1).docx"
                    }
                  },
                  [
                    _vm._v(
                      'Постановление Правительства РФ от 27 декабря 2010 г. № 1172 "Об утверждении правил оптового рынка электрической энергии и мощности и о внесении изменений в некоторые акты Правительства Российской Федерации по вопросам организации функционирования оптового рынка электрической энергии и мощности'
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Устанавливает правовые основы функционирования оптового рынка электрической энергии и мощности."
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_3218110189_487" } }, [
              _c("div", [
                _c(
                  "a",
                  {
                    attrs: {
                      href:
                        "/loaded/files/853c7804691da79ea806c117a277c136.docx"
                    }
                  },
                  [
                    _vm._v(
                      "Постановление Правительства РФ от 28 мая 2013 г. N 449 «О механизме стимулирования использования возобновляемых источников энергии на оптовом рынке электрической энергии и мощности»"
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Утверждает правила определения цены на мощность генерирующих объектов, функционирующих на основе возобновляемых источников энергии."
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_3218110189_484" } }, [
              _c("div", [
                _c(
                  "a",
                  {
                    attrs: {
                      href:
                        "/loaded/files/6d2db14c1df6cf64e007c7a82c164afd.docx"
                    }
                  },
                  [
                    _vm._v(
                      "Распоряжение Правительства РФ от 08.01.2009 N 1-р «Об основных направлениях государственной политики в сфере повышения энергетической эффективности электроэнергетики на основе использования возобновляемых источников энергии на период до 2024 года»"
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Утверждает основные направления государственной политики в сфере повышения энергетической эффективности электроэнергетики, содержащие целевые показатели объема производства и потребления электрической энергии с использованием возобновляемых источников энергии или торфа в совокупном балансе производства и потребления электрической энергии."
                ),
                _c("br"),
                _vm._v(
                  "\n                    Так, в соответствии с распоряжением до 2024 года в России планируется увеличение установленной мощности ВИЭ-электростанций до 5,5 ГВт: 3,3 ГВт ветрогенерации, 1,76 ГВт солнечной, 425,4 МВт малых ГЭС (до 25 МВт)."
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_3218110189_485" } }, [
              _c("div", [
                _c(
                  "a",
                  {
                    attrs: {
                      href:
                        "/loaded/files/Постановление Правительства РФ от 03_06_2008 N 426.docx"
                    }
                  },
                  [
                    _vm._v(
                      "Постановление Правительства РФ от 03.06.2008 N 426 «О квалификации генерирующего объекта, функционирующего на основе использования возобновляемых источников энергии»."
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Устанавливает правила, критерии и порядок квалификации генерирующего объекта, функционирующего на основе использования возобновляемых источников энергии или торфа, как соответствующего целевым показателям, установленным в соответствии с основными направлениями государственной политики в сфере повышения энергетической эффективности электроэнергетики. К функционирующим на основе использования возобновляемых источников энергии или торфа генерирующим объектам относятся объекты, осуществляющие комбинированную выработку электрической и тепловой энергии, в случае, если указанные объекты используют возобновляемые источники энергии или торф для выработки электрической и тепловой энергии."
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_3218110189_486" } }, [
              _c("div", [
                _c(
                  "a",
                  {
                    attrs: {
                      href:
                        "/loaded/files/Постановление Правительства РФ от 20_10_2010 N 850.docx"
                    }
                  },
                  [
                    _vm._v(
                      "Постановление Правительства РФ от 20.10.2010 N 850 «Об утверждении критериев для предоставления из федерального бюджета субсидий в порядке компенсации стоимости технологического присоединения генерирующих объектов с установленной генерирующей мощностью не более 25 МВт, признанных квалифицированными объектами, функционирующими на основе использования возобновляемых источников энергии, лицам, которым такие объекты принадлежат на праве собственности или на ином законном основании»."
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", [
                _vm._v(
                  "Утверждает критерии для предоставления из федерального бюджета субсидий в порядке компенсации стоимости технологического присоединения генерирующих объектов с установленной генерирующей мощностью не более 25 МВт, признанных квалифицированными генерирующими объектами, функционирующими на основе использования возобновляемых источников энергии или торфа, лицам, которым такие объекты принадлежат на праве собственности либо ином законном основании."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("h3", [_vm._v("Розничный энергорынок")]),
          _vm._v(" "),
          _c("ol", [
            _c("li", { attrs: { id: "bx_651765591_699" } }, [
              _vm._v(
                "Федеральный закон «Об электроэнергетике» от 26.03.2003 N 35-ФЗ Основной закон, определяющий ключевые понятия и основы организации электроэнергетики в России."
              )
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_651765591_735" } }, [
              _c(
                "a",
                {
                  attrs: {
                    href: "/loaded/files/4af2f71cd7578f5eed53a214f7251203.docx"
                  }
                },
                [
                  _vm._v(
                    'Постановление Правительства РФ от 4 мая 2012 года № 442 "О функционировании розничных рынков электрической энергии, полном и (или) частичном ограничении режима потребления электрической энергии"'
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Устанавливает правовые основы функционирования розничных рынков электрической энергии."
                ),
                _c("br"),
                _vm._v("\n                     ")
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_651765591_488" } }, [
              _c(
                "a",
                {
                  attrs: {
                    href:
                      "/loaded/files/Постановление Правительства РФ от 23 января 2015 года N 47(1).docx"
                  }
                },
                [
                  _vm._v(
                    "Постановление Правительства РФс от 23 января 2015 года N 47 «О внесении изменений в некоторые акты Правительства Российской Федерации по вопросам стимулирования использования возобновляемых источников энергии на розничных рынках электрической энергии»"
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Фиксирует меры поддержки строительства объектов возобновляемой энергетики для работы на розничном энергорынке."
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_651765591_489" } }, [
              _c(
                "a",
                {
                  attrs: {
                    href:
                      "/loaded/files/Постановление Правительства РФ от 17 октября 2009 г_ N 823(1).docx"
                  }
                },
                [
                  _vm._v(
                    "Постановление Правительства РФ от 17 октября 2009 г. N 823 «О схемах и программах перспективного развития электроэнергетики»"
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Фиксирует принципы и порядок включения объектов возобновляемой энергетики в схемы перспективного развития электроэнергетики."
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { attrs: { id: "bx_651765591_490" } }, [
              _c(
                "a",
                {
                  attrs: {
                    href:
                      "/loaded/files/Приказ ФАС России от 30_09_2015 N 900_15.docx"
                  }
                },
                [
                  _vm._v(
                    "Приказ ФАС России от 30.09.2015 N 900/15 «Об утверждении Методических указаний по установлению цен (тарифов) и (или) предельных (минимальных и (или) максимальных) уровней цен (тарифов) на электрическую энергию (мощность), произведенную на функционирующих на основе использования возобновляемых источников энергии квалифицированных генерирующих объектах и приобретаемую в целях компенсации потерь в электрических сетях»"
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Утверждает порядок расчёта цен (тарифов) на электрическую энергию (мощность), произведенную на функционирующих на основе использования возобновляемых источников энергии или торфа квалифицированных генерирующих объектах и приобретаемую в целях компенсации потерь в электрических сетях."
                )
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/organization/Organization.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/public/organization/Organization.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Organization_vue_vue_type_template_id_9f495f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Organization.vue?vue&type=template&id=9f495f58&scoped=true& */ "./resources/js/components/public/organization/Organization.vue?vue&type=template&id=9f495f58&scoped=true&");
/* harmony import */ var _Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Organization.vue?vue&type=script&lang=js& */ "./resources/js/components/public/organization/Organization.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Organization_vue_vue_type_style_index_0_id_9f495f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css& */ "./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Organization_vue_vue_type_template_id_9f495f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Organization_vue_vue_type_template_id_9f495f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9f495f58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/organization/Organization.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/organization/Organization.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/public/organization/Organization.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Organization.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_9f495f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=style&index=0&id=9f495f58&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/organization/Organization.vue?vue&type=template&id=9f495f58&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/public/organization/Organization.vue?vue&type=template&id=9f495f58&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_template_id_9f495f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Organization.vue?vue&type=template&id=9f495f58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/organization/Organization.vue?vue&type=template&id=9f495f58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_template_id_9f495f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_template_id_9f495f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);