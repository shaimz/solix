(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/frontend"],{

/***/ "./resources/js/frontend.js":
/*!**********************************!*\
  !*** ./resources/js/frontend.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var container = document.querySelector('.tabs');
var primary = container.querySelector('.-primary');
var primaryItems = container.querySelectorAll('.-primary > li:not(.-more)');
container.classList.add('--jsfied');

// insert "more" button and duplicate the list

primary.insertAdjacentHTML('beforeend', "\n  <li class=\"-more\">\n    <button type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      More <span>&darr;</span>\n    </button>\n    <ul class=\"-secondary\">\n      ".concat(primary.innerHTML, "\n    </ul>\n  </li>\n"));
var secondary = container.querySelector('.-secondary');
var secondaryItems = secondary.querySelectorAll('li');
var allItems = container.querySelectorAll('li');
var moreLi = primary.querySelector('.-more');
var moreBtn = moreLi.querySelector('button');
moreBtn.addEventListener('click', function (e) {
  e.preventDefault();
  container.classList.toggle('--show-secondary');
  moreBtn.setAttribute('aria-expanded', container.classList.contains('--show-secondary'));
});

// adapt tabs

var doAdapt = function doAdapt() {
  // reveal all items for the calculation
  allItems.forEach(function (item) {
    item.classList.remove('--hidden');
  });

  // hide items that won't fit in the Primary
  var stopWidth = moreBtn.offsetWidth;
  var hiddenItems = [];
  var primaryWidth = primary.offsetWidth;
  primaryItems.forEach(function (item, i) {
    if (primaryWidth >= stopWidth + item.offsetWidth) {
      stopWidth += item.offsetWidth;
    } else {
      item.classList.add('--hidden');
      hiddenItems.push(i);
    }
  });

  // toggle the visibility of More button and items in Secondary
  if (!hiddenItems.length) {
    moreLi.classList.add('--hidden');
    container.classList.remove('--show-secondary');
    moreBtn.setAttribute('aria-expanded', false);
  } else {
    secondaryItems.forEach(function (item, i) {
      if (!hiddenItems.includes(i)) {
        item.classList.add('--hidden');
      }
    });
  }
};
doAdapt(); // adapt immediately on load
window.addEventListener('resize', doAdapt); // adapt on window resize

// hide Secondary on the outside click

document.addEventListener('click', function (e) {
  var el = e.target;
  while (el) {
    if (el === secondary || el === moreBtn) {
      return;
    }
    el = el.parentNode;
  }
  container.classList.remove('--show-secondary');
  moreBtn.setAttribute('aria-expanded', false);
});

/***/ }),

/***/ 2:
/*!****************************************!*\
  !*** multi ./resources/js/frontend.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\solix\resources\js\frontend.js */"./resources/js/frontend.js");


/***/ })

},[[2,"/js/manifest"]]]);