(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Map/Map.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_yandex_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-yandex-maps */ "./node_modules/vue-yandex-maps/dist/vue-yandex-maps.esm.js");
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../width */ "./resources/js/width.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var moreItems = function moreItems() {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../moreItems */ "./resources/js/components/public/includes/moreItems.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Map',
  components: {
    yandexMap: vue_yandex_maps__WEBPACK_IMPORTED_MODULE_0__["yandexMap"],
    ymapMarker: vue_yandex_maps__WEBPACK_IMPORTED_MODULE_0__["ymapMarker"]
  },
  props: [],
  data: function data() {
    return {
      language: this.$route.params.locale === 'en' ? 1 : this.$route.params.locale === 'ru' ? 3 : 2,
      coords: [47.041783, 28.883513],
      settings: {
        apiKey: 'c9f663ad-b0ef-42ab-8700-235248261fc5',
        coordorder: 'latlong',
        version: '2.1'
      },
      items: [],
      proj: [],
      myMap: {},
      layout: "<div>{{ properties.balloonContentHeader }}</div><div>{{ properties.balloonContentBody }}</div><div>{{ properties.balloonContentFooter }}</div>"
    };
  },
  mounted: function mounted() {},
  created: function created() {
    var _this = this;

    this.$store.dispatch('projects', {
      lang: this.$router.currentRoute.params.locale === 'en' ? 1 : this.$router.currentRoute.params.locale === 'ru' ? 3 : 2
    }).then(function () {
      _this.proj = _this.$store.getters.getProjects;
    });
  },
  computed: {
    projects: function projects() {
      return this.$store.getters.getProjects;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.small;
    },
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.xsmall;
    },
    medium: function medium() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.medium;
    },
    large: function large() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.large;
    },
    xlarge: function xlarge() {
      return _width__WEBPACK_IMPORTED_MODULE_1__["default"].data.xlarge;
    }
  },
  methods: {
    getImage: function getImage(type, ongoing) {
      var path = '/assets/icons/map/';
      var result = {
        layout: 'default#imageWithContent',
        imageHref: '',
        imageSize: [30, 30],
        imageOffset: [0, 0]
      };

      if (ongoing) {
        result.imageHref += path + 'full-outline.png';
      } else {
        switch (type) {
          case 1:
            result.imageHref += path + 'semi-gray.png';
            break;

          case 2:
            result.imageHref += path + 'gray.png';
            break;

          case 3:
            result.imageHref += path + 'full.png';
            break;
        }
      }

      return result;
    },
    getCords: function getCords(coords) {
      return coords.split(',');
    },
    mapItem: function mapItem(card, index) {
      if (card.projects) {
        return "<div :class=\"card\">\n                            <img class=\"card-img-top\" src=\"/".concat(card.image, "\" alt=\"\" style=\"height: auto;max-height: 160px;width: 100%;object-fit: cover;object-position: center;\"/>\n                            <div class=\"card-body\">\n                                <h4 class=\"before-border\">").concat(card.projects.name, "</h4>\n                                <p class=\"project-description\" style=\"margin: 15px 0 !important;overflow: hidden;text-overflow: ellipsis;max-width: 100%;max-height: 50px;\">").concat(card.projects.description, "</p>\n                                <div class=\"card-project-features d-flex\">\n                                    <div class=\"mr-5\">\n                                        <i class=\"margin-icon\">\n                                            <img src=\"/assets/icons/location-grey.png\">\n                                        </i>\n                                        ").concat(card.projects.location, "\n                                    </div>\n                                    <div class=\"font-number project-power\"><i class=\"margin-icon\"><img\n                                        src=\"/assets/icons/light-grey.png\"></i>").concat(card.power, " ").concat(this.$t('power'), "\n                                    </div>\n                                </div>\n                            </div>\n                        </div>");
      }
    },
    increaseOpacity: function increaseOpacity() {
      var op = this.optionsB.opacity * 10;
      this.optionsB.opacity = Math.round(op > 9 ? 5 : op + 1) / 10;
    },
    updatePosition: function updatePosition(pos) {
      this.position = pos;
    },
    createdMap: function createdMap($map) {
      this.myMap = $map;
    },
    onBalloonOpen: function onBalloonOpen() {
      if (this.xsmall) {
        var self = this,
            elem = document.getElementsByClassName('ymaps-2-1-79-balloon');
        setTimeout(function () {
          if (elem.length && elem[0].getBoundingClientRect().left > 0) {
            var pixelCenter = self.myMap.getGlobalPixelCenter(),
                offsetLeft = elem[0].getBoundingClientRect().left;
            pixelCenter[0] += offsetLeft;
            var geoCenter = self.myMap.options.get('projection').fromGlobalPixels(pixelCenter, self.myMap.getZoom());
            self.myMap.setCenter(geoCenter, self.myMap.getZoom(), {
              duration: 100
            });
          }
        }, 600);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ymap-container[data-v-67ded4e0] {\n    height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_67ded4e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_67ded4e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_67ded4e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_67ded4e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_67ded4e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=template&id=67ded4e0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/Map/Map.vue?vue&type=template&id=67ded4e0&scoped=true& ***!
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
    "div",
    [
      _c(
        "yandex-map",
        {
          staticStyle: { height: "500px", "max-width": "100%", width: "100%" },
          attrs: {
            zoom: "7",
            coords: _vm.coords,
            controls: [],
            "scroll-zoom": false
          },
          on: { "map-was-initialized": _vm.createdMap }
        },
        _vm._l(_vm.proj, function(billboard, index) {
          return _vm.proj
            ? _c("ymap-marker", {
                key: index + 1,
                attrs: {
                  coords: _vm.getCords(billboard.coords),
                  "marker-id": index + 1,
                  "marker-type": "placemark",
                  icon: _vm.getImage(billboard.type_id, billboard.ongoing),
                  "balloon-template": _vm.mapItem(billboard, index)
                },
                on: { balloonopen: _vm.onBalloonOpen }
              })
            : _vm._e()
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/Map/Map.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/includes/Map/Map.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map_vue_vue_type_template_id_67ded4e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.vue?vue&type=template&id=67ded4e0&scoped=true& */ "./resources/js/components/public/includes/Map/Map.vue?vue&type=template&id=67ded4e0&scoped=true&");
/* harmony import */ var _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/Map/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Map_vue_vue_type_style_index_0_id_67ded4e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css& */ "./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Map_vue_vue_type_template_id_67ded4e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Map_vue_vue_type_template_id_67ded4e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67ded4e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/Map/Map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/Map/Map.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Map/Map.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_67ded4e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=style&index=0&id=67ded4e0&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/Map/Map.vue?vue&type=template&id=67ded4e0&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/Map/Map.vue?vue&type=template&id=67ded4e0&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_67ded4e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=template&id=67ded4e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/Map/Map.vue?vue&type=template&id=67ded4e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_67ded4e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_67ded4e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);