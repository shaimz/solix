(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./resources/js/backend.js":
/*!*********************************!*\
  !*** ./resources/js/backend.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  jQuery(function ($) {
    setTimeout(function () {
      $('body').on('click', ".sidebar-dropdown > .list-item", function () {
        if ($(this).parent().hasClass("active")) {
          $(".sidebar-submenu").slideUp(200);
          $(".sidebar-dropdown").removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this).next(".sidebar-submenu").slideDown(200);
          $(this).parent().addClass("active");
        }
      });
    }, 500);
    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  });
  var dropdown = $('.sidebar-submenu').find('.router-link-exact-active').closest('.sidebar-dropdown');
  $('.sidebar-submenu').find('.router-link-exact-active').closest('.sidebar-submenu').slideDown(200);
  dropdown.addClass('active');
});

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/backend.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\solix\resources\js\backend.js */"./resources/js/backend.js");


/***/ })

},[[1,"/js/manifest"]]]);