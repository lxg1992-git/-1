/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-31 12:46:07
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./src/api/table.js":
/*!**************************!*\
  !*** ./src/api/table.js ***!
  \**************************/
/*! exports provided: getList, doEdit, doDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doEdit", function() { return doEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doDelete", function() { return doDelete; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");

function getList(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/table/getList",
    method: "post",
    data: data
  });
}
function doEdit(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/table/doEdit",
    method: "post",
    data: data
  });
}
function doDelete(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/table/doDelete",
    method: "post",
    data: data
  });
}

/***/ })

}]);