(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-3"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/b2g/b2g.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
var ModalForm = function ModalForm() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../includes/ModalForm */ "./resources/js/components/public/includes/ModalForm.vue"));
};

var Projects = function Projects() {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../includes/Projects/Projects */ "./resources/js/components/public/includes/Projects/Projects.vue"));
};

var Questions = function Questions() {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../includes/Questions/Questions */ "./resources/js/components/public/includes/Questions/Questions.vue"));
};

var Partners = function Partners() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../includes/Partners/Partners */ "./resources/js/components/public/includes/Partners/Partners.vue"));
};

var Discount = function Discount() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../includes/discount/Discount */ "./resources/js/components/public/includes/discount/Discount.vue"));
};

var complect = function complect() {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../includes/complect */ "./resources/js/components/public/includes/complect.vue"));
};

var Modules = function Modules() {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ../includes/modules */ "./resources/js/components/public/includes/modules.vue"));
};

var Steps = function Steps() {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ../includes/steps */ "./resources/js/components/public/includes/steps.vue"));
};

var Features = function Features() {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../includes/features */ "./resources/js/components/public/includes/features.vue"));
};

var Economy = function Economy() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-25").then(__webpack_require__.bind(null, /*! ../includes/economy */ "./resources/js/components/public/includes/economy.vue"));
};

var Tarif = function Tarif() {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ../includes/tarif */ "./resources/js/components/public/includes/tarif.vue"));
};

var Energy = function Energy() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-26").then(__webpack_require__.bind(null, /*! ../includes/energy */ "./resources/js/components/public/includes/energy.vue"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  props: {},
  components: {
    Economy: Economy,
    Features: Features,
    Steps: Steps,
    Modules: Modules,
    complect: complect,
    Discount: Discount,
    Partners: Partners,
    Questions: Questions,
    Projects: Projects,
    ModalForm: ModalForm,
    Tarif: Tarif,
    Energy: Energy
  },
  data: function data() {
    return {
      open: false,
      language: 0,
      count: 0,
      show: 4,
      tab: '',
      items: [],
      tabMap: '',
      location: '',
      windowWidth: window.innerWidth < 3000
    };
  },
  mounted: function mounted() {
    var _this = this;

    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('position', 'absolute');
    _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('theme', 'dark');
    this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2;
    this.$store.dispatch('projects', this.language).then(function () {
      _this.count = _this.$store.getters.getProjects.length;
    });
  },
  methods: {
    modal: function modal(val) {
      this.open = val;
    },
    toggleModal: function toggleModal(val) {
      _event_eventbus__WEBPACK_IMPORTED_MODULE_0__["bus"].$emit('openModal', {
        value: val,
        type: 'call'
      });
    }
  },
  computed: {},
  watch: {
    language: function language() {
      this.language = this.$store.getters.getPublicLanguage === 'en' ? 1 : this.$store.getters.getPublicLanguage === 'ru' ? 3 : 2;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#firstPage .top-header[data-v-2e074784] {\n    /*background: url('/assets/components/b2g/gos-background-large-min.jpg');*/\n    background: linear-gradient(0deg, rgba(15, 39, 66, 0.6), rgba(15, 39, 66, 0.6)), url('/assets/components/b2g/gos_uchr-large.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.background-variant[data-v-2e074784] {\n    background: url('/assets/components/b2b/photovoltaics-solar-power-station-energy-from-natural-1.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n#questions[data-v-2e074784] {\n    background: url('/assets/components/home/questions/mask-light.png');\n    background-repeat: no-repeat;\n    background-position: top 30px left 70px, center;\n}\n#rights[data-v-2e074784] {\n    background: linear-gradient(0deg, rgba(15, 39, 66, .6), rgba(15, 39, 66, .6)), url('/assets/components/b2g/photovoltaics-solar-power-station-energy-from-natural-2.jpg');\n    background-repeat: no-repeat;\n    background-size: auto,cover;\n}\n.home-projects-header[data-v-2e074784] {\n    margin-bottom: 35px;\n}\n.all-projects[data-v-2e074784] {\n    margin-right: 63px;\n}\n.button-all[data-v-2e074784] {\n    cursor: pointer;\n}\n#firstPage .top-header[data-v-2e074784] {\n}\n#variants[data-v-2e074784] {\n    display: grid;\n    grid-template-rows: repeat(2, minmax(300px, 500px));\n    grid-template-columns: 1fr;\n}\n#variants .sidebar-info[data-v-2e074784] {\n    max-width: 860px;\n}\n#tarif[data-v-2e074784]{\n    background: #F3F5F6;\n}\n#variants .sidebar-info ul[data-v-2e074784] {\n    display: flex;\n}\n#variants .sidebar-info ul li[data-v-2e074784] {\n    list-style: none;\n    margin-right: 80px;\n    margin-top: 50px;\n}\n#variants .sidebar-info ul li .roboto[data-v-2e074784] {\n    font-size: 64px;\n    color: #1f1f1f;\n    line-height: 56px !important;\n}\n#variants .sidebar-info ul li p[data-v-2e074784]:not(.roboto) {\n    position: relative;\n    padding-left: 20px;\n    margin-top: 15px;\n}\n#variants .sidebar-info ul li p[data-v-2e074784]:not(.roboto):before {\n    content: '';\n    width: 2px;\n    height: 100%;\n    position: absolute;\n    background-color: #FFE454;\n    left: 0;\n}\n.v-card__text[data-v-2e074784] {\n    padding-left: 0;\n}\n.v-tab.v-tab--active[data-v-2e074784] {\n    color: #969696 !important;\n    padding-left: 0;\n    padding-right: 3rem;\n    border-bottom: 1px solid transparent;\n}\n.v-tab.v-tab--active[data-v-2e074784] {\n    color: #1f1f1f !important;\n}\n.map-body[data-v-2e074784] {\n    max-width: 460px;\n}\n#rights .right-text[data-v-2e074784] {\n    max-width: 460px;\n    margin: 30px 0 45px 0 !important;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_style_index_0_id_2e074784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_style_index_0_id_2e074784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_style_index_0_id_2e074784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_style_index_0_id_2e074784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_style_index_0_id_2e074784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=template&id=2e074784&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/b2g/b2g.vue?vue&type=template&id=2e074784&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "firstPage" } },
    [
      _c("div", { staticClass: "row col-lg-12 col-12 top-header p-0" }, [
        _c(
          "div",
          {
            staticClass: "col-xl-7 col-11 justify-content-center",
            attrs: { id: "header" }
          },
          [
            _c("div", { staticClass: "header-text text-white" }, [
              _c("h1", {
                domProps: { innerHTML: _vm._s(_vm.$t("b2g.header.title")) }
              }),
              _vm._v(" "),
              _c("p", {
                domProps: { innerHTML: _vm._s(_vm.$t("b2g.header.text")) }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-primary",
                  on: {
                    click: function($event) {
                      return _vm.toggleModal(true)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("b2g.header.button")))]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-12 py-0", attrs: { id: "header-bottom" } },
          [
            _c("div", { staticClass: "header-columns col-xl-7 col-11 p-0" }, [
              _c(
                "div",
                { staticClass: "row justify-content-between" },
                _vm._l(_vm.$t("home.header.cards"), function(card) {
                  return _c(
                    "div",
                    { staticClass: "col-md-4 col-xl-4 header-card py-5" },
                    [
                      _c("div", { staticClass: "content-card text-white" }, [
                        _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: card.img,
                              expression: "card.img"
                            }
                          ]
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "body mt-4" }, [
                          _c("h5", { staticClass: "card-title" }, [
                            _vm._v(_vm._s(card.title))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(_vm._s(card.text))
                          ])
                        ])
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("features", { attrs: { page: "b2g" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "padding-125 text-white", attrs: { id: "rights" } },
        [
          _c("div", { staticClass: "col-xl-7 col-11 m-auto" }, [
            _c("h2", [_vm._v(_vm._s(_vm.$t("b2g.rights.title")))]),
            _vm._v(" "),
            _c("p", { staticClass: "right-text" }, [
              _vm._v(_vm._s(_vm.$t("b2g.rights.text")))
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn-primary",
                attrs: {
                  href:
                    "/assets/pdf/Regulament privind confirmarea statutului de producător eligibil, aprobat prin Hotărârea nr. 251 din 05.07.2019.pdf",
                  target: "_blank"
                }
              },
              [_vm._v(_vm._s(_vm.$t("b2g.rights.button")))]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "justify-content-center px-0", attrs: { id: "energy" } },
        [
          _c("Energy", {
            attrs: { page: "b2g", dialog: _vm.open },
            on: { modalOpen: _vm.modal }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "justify-content-center px-0 padding-125",
          attrs: { id: "tarif" }
        },
        [
          _c("Tarif", {
            attrs: { dialog: _vm.open },
            on: { modalOpen: _vm.modal }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("steps", { attrs: { page: "b2g" } }),
      _vm._v(" "),
      _c("economy", { attrs: { page: "b2g" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "justify-content-center px-0 padding-125",
          attrs: { id: "questions" }
        },
        [
          _c("Questions", {
            attrs: { dialog: _vm.open },
            on: { modalOpen: _vm.modal }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "padding-125 justify-content-center px-0",
          attrs: { id: "discount" }
        },
        [_c("Discount")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/b2g/b2g.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/public/b2g/b2g.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b2g_vue_vue_type_template_id_2e074784_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b2g.vue?vue&type=template&id=2e074784&scoped=true& */ "./resources/js/components/public/b2g/b2g.vue?vue&type=template&id=2e074784&scoped=true&");
/* harmony import */ var _b2g_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b2g.vue?vue&type=script&lang=js& */ "./resources/js/components/public/b2g/b2g.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _b2g_vue_vue_type_style_index_0_id_2e074784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css& */ "./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _b2g_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _b2g_vue_vue_type_template_id_2e074784_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _b2g_vue_vue_type_template_id_2e074784_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e074784",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/b2g/b2g.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/b2g/b2g.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/public/b2g/b2g.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./b2g.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_style_index_0_id_2e074784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=style&index=0&id=2e074784&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/b2g/b2g.vue?vue&type=template&id=2e074784&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/public/b2g/b2g.vue?vue&type=template&id=2e074784&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_template_id_2e074784_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./b2g.vue?vue&type=template&id=2e074784&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/b2g/b2g.vue?vue&type=template&id=2e074784&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_template_id_2e074784_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_b2g_vue_vue_type_template_id_2e074784_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);