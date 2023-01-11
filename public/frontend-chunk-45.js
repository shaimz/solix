(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-chunk-45"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ShareByEmail",
  props: ['item', 'path'],
  data: function data() {
    return {
      show: false,
      email: '',
      error: '',
      images: {
        email_default: '/assets/components/projects/project/message.jpg',
        email: '/assets/components/projects/project/message.jpg',
        emailOver: '/assets/icons/email.svg'
      }
    };
  },
  mounted: function mounted() {
    $('#emailDialog').appendTo('body');
  },
  methods: {
    hide: function hide() {
      this.show = false;
    },
    submit: function submit() {
      var _this = this;

      var data = this.item;
      var regex = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');

      if (regex.test(this.email)) {
        axios.post('/admin/requests/mail', {
          email: this.email,
          header: data.name,
          text: this.path
        }).then(function (r) {
          if (r) {
            _this.email = '';
            _this.error = '';
            _this.show = false;
          }
        });
      } else {
        this.error = 'Email incorrect';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/projects/Project.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _includes_ShareEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../includes/ShareEmail */ "./resources/js/components/public/includes/ShareEmail.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../event/eventbus.js */ "./resources/js/event/eventbus.js");
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../width */ "./resources/js/width.js");
/* harmony import */ var vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-cool-lightbox */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cool-lightbox/dist/vue-cool-lightbox.min.css */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
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


var Breadcrumbs = function Breadcrumbs() {
  return __webpack_require__.e(/*! import() */ "frontend-chunk-21").then(__webpack_require__.bind(null, /*! ../includes/breadcrumbs */ "./resources/js/components/public/includes/breadcrumbs.vue"));
};




var MoreItems = function MoreItems() {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../includes/moreItems */ "./resources/js/components/public/includes/moreItems.vue"));
};

var Discount = function Discount() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../includes/discount/Discount */ "./resources/js/components/public/includes/discount/Discount.vue"));
};





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Project',
  components: {
    ShareByEmail: _includes_ShareEmail__WEBPACK_IMPORTED_MODULE_0__["default"],
    Discount: Discount,
    MoreItems: MoreItems,
    Breadcrumbs: Breadcrumbs,
    CoolLightBox: vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      language: this.$store.getters.getPublicLanguage.code === 'en' ? 1 : this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2,
      dataFetched: false,
      open: false,
      showModal: false,
      largeImage: '',
      index: null,
      model: 0,
      copiedMessage: '',
      images: {
        facebook_default: "/assets/components/projects/project/fb.jpg",
        facebook: "/assets/components/projects/project/fb.jpg",
        facebookOver: "/assets/icons/facebook.svg",
        link_default: "/assets/components/projects/project/link.jpg",
        link: "/assets/components/projects/project/link.jpg",
        linkOver: "/assets/icons/link.svg",
        email_default: "/assets/components/projects/project/link.jpg",
        email: "/assets/components/projects/project/link.jpg",
        emailOver: "/assets/icons/link.svg"
      }
    };
  },
  created: function created() {
    var _this = this;

    this.$store.dispatch('singleProject', {
      id: this.$route.params.id,
      lang: this.language
    }).then(function () {
      _this.dataFetched = true;
    });
  },
  mounted: function mounted() {
    _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('position', 'absolute');
    _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'dark');
    this.copiedMessage = this.$i18n.messages[this.$i18n.locale].linkCopied;
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    item: 'getSingleProject'
  })), {}, {
    xsmall: function xsmall() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.xsmall;
    },
    small: function small() {
      return _width__WEBPACK_IMPORTED_MODULE_3__["default"].data.small;
    },
    breadcrumb: function breadcrumb() {
      return [{
        name: 'projects',
        label: this.$t('projects.project')
      }, {
        name: 'Project',
        project_id: this.$route.params.id
      }];
    }
  }),
  methods: {
    currentUrl: function currentUrl() {
      return location.protocol + '//' + location.hostname + this.$route.fullPath;
    },
    processImageUrl: function processImageUrl(imgIndex, url) {
      var lastPos = this.item.gallery.length - 1;
      return imgIndex === 0 || imgIndex === lastPos ? url : url.replace('thumbnail/', 'thumbnail/280/');
    },
    getImages: function getImages(gallery) {
      var res = [];

      if (gallery) {
        for (var i in gallery) {
          res.push('/private/images/projects/' + this.item.id + '/gallery/' + gallery[i].file);
        }
      }

      return res;
    },
    youtube_parser: function youtube_parser(url) {
      var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
      var match = url.match(regExp);
      return match && match[1].length == 11 ? match[1] : false;
    },
    thumbnailOpen: function thumbnailOpen(image, id) {
      this.showModal = true;
      this.largeImage = '/private/images/projects/' + id + '/gallery/' + image.file;
    },
    hideModal: function hideModal() {
      this.largeImage = '';
      this.showModal = false;
    },
    copy: function copy(data, path) {
      var aux = document.createElement("input");
      aux.setAttribute("value", path);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
      alert(this.copiedMessage);
    }
  },
  watch: {
    language: function language() {
      this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2;
    },
    xsmall: function xsmall(n, o) {},
    dataFetched: function dataFetched(n, o) {},
    open: function open(newVal, oldVal) {
      if (oldVal !== newVal) this.$emit('openModal', {
        value: newVal
      });
    },
    $route: function $route(to) {
      this.dataFetched = true;

      if (to.path.includes('projects')) {
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('position', 'absolute');
        _event_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('theme', 'dark');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#emailDialog[data-v-7e027346] {\n  position: fixed;\n  z-index: 101;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 600px;\n  width: auto;\n  height: 150px;\n  background-color: white;\n}\n#emailDialog.show[data-v-7e027346] {\n  display: block;\n}\n#emailDialog.hide[data-v-7e027346] {\n  display: none;\n}\n#emailDialog .overlay[data-v-7e027346] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(40, 40, 40, 0.68);\n}\n#emailDialog .card[data-v-7e027346] {\n  position: fixed;\n  z-index: 101;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 600px;\n  width: max-content;\n  height: fit-content;\n  background-color: white;\n  padding: 20px 100px;\n}\n#emailDialog .card .col[data-v-7e027346] {\n  max-width: 250px !important;\n}\n#emailDialog .card .v-input[data-v-7e027346] {\n  max-width: 250px !important;\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  margin-right: 20px;\n}\n#emailDialog p[data-v-7e027346] {\n  z-index: 102;\n  color: #ff7676;\n  position: absolute;\n  bottom: 20px;\n}\n@media screen and (max-width: 600px) {\n#emailDialog .card[data-v-7e027346] {\n    display: block !important;\n    padding: 20px 40px;\n}\n#emailDialog .v-input[data-v-7e027346] {\n    margin: auto !important;\n}\n#emailDialog button[data-v-7e027346] {\n    margin: auto !important;\n    display: flex !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.large-image[data-v-04167fcf] {\n    position: fixed;\n    width: 100%;\n    height: 104vh;\n    top: -20px;\n    background-color: rgba(45, 49, 52, 0.51);\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999;\n}\n.project-gallery[data-v-04167fcf] {\n    margin: 30px 2px 40px\n}\n\n/** Gallery V2 **/\n.gallery-v2[data-v-04167fcf] {\n    overflow: hidden;\n    margin: 40px 0\n}\n.gallery-v2 img[data-v-04167fcf] {\n    cursor: pointer;\n    float: left;\n    display: block;\n    width: 49%;\n    margin: 0 2% 20px 0;\n}\n.gallery-v2 img[data-v-04167fcf]:first-child, .gallery-v2 img[data-v-04167fcf]:last-child {\n    width: 100%;\n    margin: 0 0 20px\n}\n.gallery-v2 img[data-v-04167fcf]:not(:first-child):not(:last-child):nth-child(odd) {\n    margin-right: 0\n}\n\n/** ./Gallery v2 **/\n.gallery[data-v-04167fcf] {\n    overflow: hidden;\n    margin: 40px 0\n}\n.gallery img[data-v-04167fcf] {\n    cursor: pointer;\n    float: left;\n    display: block;\n    width: 280px;\n    height: 235px;\n    margin: 0 15px 20px 0;\n}\n.gallery img[data-v-04167fcf]:first-child,\n.gallery img[data-v-04167fcf]:last-child {\n    width: 370px;\n    height: 235px\n}\n.gallery img[data-v-04167fcf]:nth-child(3n) {\n    margin-right: 0;\n}\n.gallery img[data-v-04167fcf]:nth-child(4) {\n    margin-left: 0;\n}\n.gallery img[data-v-04167fcf]:first-child {\n    margin-left: 0;\n}\n#ytplayer[data-v-04167fcf] {\n    width: 100%;\n    height: 100%;\n}\n@media (min-width: 967px) and (max-width: 999px){\n.gallery img[data-v-04167fcf] {\n        width: 270px;\n}\n.gallery img[data-v-04167fcf]:first-child,\n    .gallery img[data-v-04167fcf]:last-child {\n        width: 357px;\n        height: 235px\n}\n}\n@media (min-width: 768px) and (max-width: 966px){\n#singleProject .description[data-v-04167fcf] {\n        max-width: 678px\n}\n.gallery img[data-v-04167fcf] {\n        width: 190px;\n        height: 172px;\n        margin: 0 1% 20px 0\n}\n.gallery img[data-v-04167fcf]:first-child,\n    .gallery img[data-v-04167fcf]:last-child {\n        width: 260px;\n        height: 172px\n}\n}\n@media (min-width: 480px) and (max-width: 767px){\n.gallery img[data-v-04167fcf] {\n        width: 48%;\n        margin: 0 15px 20px 0\n}\n.gallery img[data-v-04167fcf]:first-child,\n    .gallery img[data-v-04167fcf]:last-child {\n        width: 48%;\n}\n.gallery img[data-v-04167fcf]:nth-child(3n) {\n        margin-right: 15px;\n}\n.gallery img[data-v-04167fcf][data-v-04167fcf]:nth-child(2n) {\n        margin-right: 0;\n}\n}\n@media (min-width: 429px) and (max-width: 479px){\n.gallery img[data-v-04167fcf] {\n        width: 49%;\n        margin: 0 2% 15px 0;\n        height: auto;\n}\n.gallery img[data-v-04167fcf]:first-child,\n    .gallery img[data-v-04167fcf]:last-child {\n        width: 100%\n}\n.gallery img[data-v-04167fcf]:not(:first-child):not(:last-child):nth-child(odd) {\n        margin-right: 0\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_04167fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_04167fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_04167fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_04167fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_04167fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& ***!
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
  return _c("span", [
    _c(
      "a",
      {
        attrs: { href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.show = true
          }
        }
      },
      [
        _c("img", {
          attrs: { src: _vm.images.email },
          on: {
            mouseover: function($event) {
              _vm.images.email = _vm.images.emailOver
            },
            mouseleave: function($event) {
              _vm.images.email = _vm.images.email_default
            }
          }
        })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { class: [_vm.show ? "show" : "hide"], attrs: { id: "emailDialog" } },
      [
        _c("transition-group", { attrs: { type: "fade" } }, [
          _c("div", {
            key: "overlay",
            staticClass: "overlay",
            on: { click: _vm.hide }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              key: "card",
              staticClass:
                "card d-flex justify-content-center align-items-center flex-row"
            },
            [
              _c(
                "v-col",
                { staticClass: "position-relative" },
                [
                  _c("v-text-field", {
                    class: [_vm.error ? "error-field" : ""],
                    attrs: {
                      placeholder: _vm.$t("modalForm.placeholders.email")
                    },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  }),
                  _vm._v(" "),
                  _vm.error
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.error))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-primary",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("modalForm.buttons.order")))]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=template&id=04167fcf&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/projects/Project.vue?vue&type=template&id=04167fcf&scoped=true& ***!
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
  return _c("v-app", { attrs: { id: "singleProject" } }, [
    _vm.showModal
      ? _c(
          "div",
          { staticClass: "large-image", on: { click: _vm.hideModal } },
          [_c("img", { attrs: { src: _vm.largeImage } })]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.dataFetched
      ? _c(
          "div",
          {
            staticClass: "row col-12 top-header py-0 justify-content-center",
            style: { background: "url('/" + _vm.item.image + "')" }
          },
          [
            _c("div", { staticClass: "bg-projects-blur" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-xs-11 col-xl-7 row flex-column padding-top-125",
                attrs: { id: "header" }
              },
              [
                _c("breadcrumbs", { attrs: { items: _vm.breadcrumb } }),
                _vm._v(" "),
                _c("div", { staticClass: "header-text text-white" }, [
                  _vm.item.projects
                    ? _c("h1", [_vm._v(_vm._s(_vm.item.projects.name))])
                    : _vm._e()
                ])
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-xl-7 col-11 m-auto d-flex single-description padding-125"
      },
      [
        _vm.item.projects
          ? _c(
              "div",
              { staticClass: "socials d-lg-flex d-none flex-column mr-8" },
              [
                _c(
                  "ShareNetwork",
                  {
                    attrs: {
                      network: "facebook",
                      url: _vm.currentUrl(),
                      title: _vm.item.projects.name,
                      description: _vm.item.projects.description
                    }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.images.facebook },
                      on: {
                        mouseover: function($event) {
                          _vm.images.facebook = _vm.images.facebookOver
                        },
                        mouseleave: function($event) {
                          _vm.images.facebook = _vm.images.facebook_default
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("ShareByEmail", {
                  attrs: { item: _vm.item.projects, path: _vm.currentUrl() }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    ref: "path",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.copy(_vm.item, _vm.currentUrl())
                      }
                    }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.images.link },
                      on: {
                        mouseover: function($event) {
                          _vm.images.link = _vm.images.linkOver
                        },
                        mouseleave: function($event) {
                          _vm.images.link = _vm.images.link_default
                        }
                      }
                    })
                  ]
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.item.projects
          ? _c(
              "div",
              { staticClass: "description" },
              [
                _c(
                  "div",
                  { staticClass: "features mb-4" },
                  _vm._l(_vm.item.features, function(feature) {
                    return _c("p", { key: feature.id }, [
                      _c("strong", [_vm._v(_vm._s(feature.name))]),
                      _vm._v(
                        " -\n                    " +
                          _vm._s(feature.value) +
                          "\n                "
                      )
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c("p", {
                  domProps: { innerHTML: _vm._s(_vm.item.projects.description) }
                }),
                _vm._v(" "),
                _c("CoolLightBox", {
                  attrs: {
                    items: _vm.getImages(_vm.item.gallery),
                    index: _vm.index
                  },
                  on: {
                    close: function($event) {
                      _vm.index = null
                    }
                  }
                }),
                _vm._v(" "),
                _vm.xsmall
                  ? _c(
                      "div",
                      { staticClass: "project-gallery" },
                      [
                        [
                          _c(
                            "div",
                            { staticClass: "gallery-v2" },
                            _vm._l(_vm.item.gallery, function(
                              image,
                              imageIndex
                            ) {
                              return _c("img", {
                                key: imageIndex,
                                attrs: {
                                  src: _vm.processImageUrl(
                                    imageIndex,
                                    image.thumbnail
                                  )
                                },
                                on: {
                                  click: function($event) {
                                    _vm.index = imageIndex
                                  }
                                }
                              })
                            }),
                            0
                          )
                        ]
                      ],
                      2
                    )
                  : _c(
                      "div",
                      { staticClass: "gallery" },
                      _vm._l(_vm.item.gallery, function(image, imageIndex) {
                        return _c("img", {
                          key: imageIndex,
                          attrs: {
                            src: _vm.processImageUrl(
                              imageIndex,
                              image.thumbnail
                            )
                          },
                          on: {
                            click: function($event) {
                              _vm.index = imageIndex
                            }
                          }
                        })
                      }),
                      0
                    ),
                _vm._v(" "),
                _vm.item.link
                  ? _c(
                      "div",
                      { staticClass: "video-gallery" },
                      [
                        _c("video-embed", {
                          attrs: {
                            params: { modestbranding: 1, showinfo: 0 },
                            src: _vm.item.link
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "more-items" } },
      [
        _c("more-items", {
          attrs: { show: "2", type: "projects", lang: _vm.language }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "justify-content-center px-0 padding-125",
        attrs: { id: "discount" }
      },
      [_c("Discount", _vm._g({}, _vm.$listeners))],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& */ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&");
/* harmony import */ var _ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareEmail.vue?vue&type=script&lang=js& */ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& */ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e027346",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/includes/ShareEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_style_index_0_id_7e027346_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=style&index=0&id=7e027346&scoped=true&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareEmail.vue?vue&type=template&id=7e027346&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/includes/ShareEmail.vue?vue&type=template&id=7e027346&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareEmail_vue_vue_type_template_id_7e027346_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/projects/Project.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/projects/Project.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_04167fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=04167fcf&scoped=true& */ "./resources/js/components/public/projects/Project.vue?vue&type=template&id=04167fcf&scoped=true&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./resources/js/components/public/projects/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Project_vue_vue_type_style_index_0_id_04167fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css& */ "./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Project_vue_vue_type_template_id_04167fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Project_vue_vue_type_template_id_04167fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "04167fcf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/projects/Project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/projects/Project.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/projects/Project.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_04167fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=style&index=0&id=04167fcf&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./resources/js/components/public/projects/Project.vue?vue&type=template&id=04167fcf&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/public/projects/Project.vue?vue&type=template&id=04167fcf&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_04167fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=04167fcf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/projects/Project.vue?vue&type=template&id=04167fcf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_04167fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_04167fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);