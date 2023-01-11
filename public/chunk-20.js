(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-20"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
var Navbar = function Navbar() {
  return __webpack_require__.e(/*! import() */ "chunk-7").then(__webpack_require__.bind(null, /*! ./../includes/Navbar */ "./resources/js/components/backend/includes/Navbar.vue"));
};

var dataTables = function dataTables() {
  return __webpack_require__.e(/*! import() */ "chunk-5").then(__webpack_require__.bind(null, /*! ./../data/dataTables */ "./resources/js/components/backend/data/dataTables.vue"));
};

var ModalRequest = function ModalRequest() {
  return __webpack_require__.e(/*! import() */ "chunk-6").then(__webpack_require__.bind(null, /*! ../data/modalRequest */ "./resources/js/components/backend/data/modalRequest.vue"));
};

var EmailService = function EmailService() {
  return __webpack_require__.e(/*! import() */ "chunk-21").then(__webpack_require__.bind(null, /*! ./email/Email */ "./resources/js/components/backend/requests/email/Email.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'serviceRequests',
  components: {
    ModalRequest: ModalRequest,
    Navbar: Navbar,
    dataTables: dataTables,
    EmailService: EmailService
  },
  props: {
    isMail: Boolean
  },
  mounted: function mounted() {
    this.$store.dispatch('serviceRequests');
  },
  data: function data() {
    return {
      headers: [{
        text: 'Type',
        sortable: false,
        align: 'left',
        value: 'name'
      }, {
        text: 'Service',
        sortable: false,
        value: 'services'
      }, {
        text: 'Phone Number',
        sortable: false,
        value: 'phone'
      }, {
        text: 'Email',
        sortable: false,
        value: 'email'
      }, {
        text: 'Comment',
        sortable: false,
        value: 'comment'
      }, {
        text: 'Time',
        sortable: false,
        value: 'time'
      }, {
        text: '',
        sortable: false,
        value: 'controls'
      }],
      open: false,
      id: null,
      email: null
    };
  },
  computed: {
    data: function data() {
      return this.$store.getters.getServiceRequestById;
    }
  },
  methods: {
    showModal: function showModal() {
      this.open = true;
    },
    toggleModal: function toggleModal(val) {
      this.open = val;
    },
    getDate: function getDate(str) {
      var date = '' + str.replace(/[-?]/g, '/').replace('T', ' ');
      var result = date.split(':');
      var time = [];
      result.pop();
      result[0].split('/').forEach(function (e) {
        time.push(e.split(' ')[0]);
      });
      var temp = time[0];
      time[0] = time[2];
      time[2] = temp;
      return time.join('/');
    },
    showServiceRequests: function showServiceRequests() {
      var _this = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var requests = this.$store.getters.getServiceRequests;
      var data = [];

      if (requests) {
        if (Array.isArray(requests)) {
          requests.forEach(function (item) {
            if (item.status === status) {
              data.push({
                value: true,
                name: item.type,
                services: item.service,
                phone: item.phone,
                email: item.email,
                comment: item.comment,
                time: _this.getDate(item.created_at),
                id: item.id
              });
            }
          });
        } else {
          data.push({
            value: false,
            name: requests.type,
            services: requests.service,
            phone: requests.phone,
            email: requests.email,
            comment: requests.comment,
            time: this.getDate(requests.created_at)
          });
        }

        return data;
      }
    }
  },
  created: function created() {},
  ready: function ready() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=template&id=58f90814&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=template&id=58f90814& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "request-page", title: "" } },
    [
      _c("Navbar", {
        attrs: { heading: this.$attrs.head, tabs: this.$attrs.nav }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tab-content", attrs: { id: "pills-tabContent" } },
        [
          _c(
            "div",
            {
              staticClass: "tab-pane fade show active",
              attrs: {
                id: "pills-active-requests",
                role: "tabpanel",
                "aria-labelledby": "pills-requests-tab"
              }
            },
            [
              _c("dataTables", {
                attrs: {
                  seenPage: "service",
                  "page-type": "default",
                  heading: Object.values(this.$attrs.nav[0])[0],
                  headings: _vm.headers,
                  items: _vm.showServiceRequests(1)
                },
                on: { value: _vm.showModal }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane fade",
              attrs: {
                id: "pills-archive",
                role: "tabpanel",
                "aria-labelledby": "pills-archive-tab"
              }
            },
            [
              _c("dataTables", {
                attrs: {
                  "page-type": "archive",
                  heading: Object.values(this.$attrs.nav[0])[1],
                  headings: _vm.headers,
                  items: _vm.showServiceRequests(0)
                }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.open
        ? _c(
            "modal-request",
            _vm._b(
              {
                attrs: {
                  route: "emailService",
                  headings: this.$attrs.head,
                  type: "service",
                  id: _vm.id,
                  open: _vm.open
                },
                on: { offvalue: _vm.toggleModal }
              },
              "modal-request",
              _vm.data,
              false
            )
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/requests/ServiceRequests.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/backend/requests/ServiceRequests.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceRequests_vue_vue_type_template_id_58f90814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceRequests.vue?vue&type=template&id=58f90814& */ "./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=template&id=58f90814&");
/* harmony import */ var _ServiceRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceRequests.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServiceRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceRequests_vue_vue_type_template_id_58f90814___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ServiceRequests_vue_vue_type_template_id_58f90814___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/requests/ServiceRequests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceRequests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=template&id=58f90814&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=template&id=58f90814& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequests_vue_vue_type_template_id_58f90814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceRequests.vue?vue&type=template&id=58f90814& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/requests/ServiceRequests.vue?vue&type=template&id=58f90814&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequests_vue_vue_type_template_id_58f90814___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequests_vue_vue_type_template_id_58f90814___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);