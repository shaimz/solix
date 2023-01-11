(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-17"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/Projects.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/projects/Projects.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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


var Navbar = function Navbar() {
  return __webpack_require__.e(/*! import() */ "chunk-7").then(__webpack_require__.bind(null, /*! ../includes/Navbar */ "./resources/js/components/backend/includes/Navbar.vue"));
};

var dataTables = function dataTables() {
  return __webpack_require__.e(/*! import() */ "chunk-5").then(__webpack_require__.bind(null, /*! ../data/dataTables */ "./resources/js/components/backend/data/dataTables.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'projectsPage',
  components: {
    Navbar: Navbar,
    dataTables: dataTables
  },
  props: {
    title: String
  },
  data: function data() {
    return {
      headers: [{
        text: 'Type',
        sortable: false,
        align: 'left',
        value: 'type'
      }, {
        text: 'Name',
        sortable: false,
        align: 'left',
        value: 'name'
      }, {
        text: 'Visibility',
        sortable: false,
        value: 'status'
      }, {
        text: 'Location',
        sortable: false,
        value: 'location'
      }, {
        text: 'Power MW',
        sortable: false,
        value: 'power'
      }, {
        text: '',
        sortable: false,
        value: 'controls'
      }],
      open: false,
      lang: 0,
      page: 1
    };
  },
  mounted: function mounted() {
    this.lang = Vue.prototype.$lang;
    this.$store.dispatch('projects');
  },
  created: function created() {},
  computed: {},
  methods: {
    setPage: function setPage(val) {
      this.page = val;
    },
    langChange: function langChange() {
      this.lang = 3;
    },
    showProjects: function showProjects() {
      var projects = this.$store.getters.getProjects;
      var data = [];

      if (projects) {
        if (Array.isArray(projects)) {
          projects.forEach(function (item) {
            if (item.projects) {
              data.push({
                value: true,
                type: item.projects.type,
                name: item.projects.name,
                status: item.status,
                location: item.projects.location,
                power: item.power + 'Wt',
                id: item.id
              });
            }
          });
        } else {
          data.push({
            value: false,
            type: projects.projects.type,
            name: projects.projects.name,
            status: projects.status,
            location: projects.projects.location,
            power: projects.power + 'Wt',
            id: projects.id
          });
        }

        return data;
      }
    },
    dispatchItems: function dispatchItems() {
      this.$store.dispatch('projects');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/Projects.vue?vue&type=template&id=55bdb219&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/projects/Projects.vue?vue&type=template&id=55bdb219& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "all-project-page", attrs: { id: "single-page" } },
    [
      _c("Navbar", { attrs: { heading: this.title } }),
      _vm._v(" "),
      _c("dataTables", {
        attrs: {
          lang: _vm.lang,
          numberPage: _vm.page,
          add: "Project",
          "page-type": "projects",
          heading: this.title,
          headings: _vm.headers,
          items: _vm.showProjects()
        },
        on: { page: _vm.setPage, statusUpdated: _vm.dispatchItems }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/projects/Projects.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/backend/projects/Projects.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_55bdb219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=55bdb219& */ "./resources/js/components/backend/projects/Projects.vue?vue&type=template&id=55bdb219&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/projects/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_55bdb219___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_55bdb219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/projects/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/projects/Projects.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/backend/projects/Projects.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/projects/Projects.vue?vue&type=template&id=55bdb219&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/backend/projects/Projects.vue?vue&type=template&id=55bdb219& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_55bdb219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=55bdb219& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/projects/Projects.vue?vue&type=template&id=55bdb219&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_55bdb219___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_55bdb219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);