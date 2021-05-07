/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n\n\n\n\nconst Home = ({\n  properties\n}) => {\n  console.log(properties);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n\nconst getServerSideProps = async () => {\n  const query = '*[ _type == \"property\"]';\n  const properties = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n\n  if (!properties.length) {\n    return {\n      props: {\n        properties: []\n      }\n    };\n  } else {\n    return {\n      props: {\n        properties\n      }\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmJuLWZyb250Ly4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcGVydGllcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsInNhbml0eUNsaWVudCIsImxlbmd0aCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBb0I7QUFDOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBQ0Qsc0JBQ0UsNklBREY7QUFJRCxDQU5EOztBQVFPLE1BQU1HLGtCQUFrQixHQUFHLFlBQVk7QUFDNUMsUUFBTUMsS0FBSyxHQUFHLHlCQUFkO0FBQ0EsUUFBTUosVUFBVSxHQUFHLE1BQU1LLHVEQUFBLENBQW1CRCxLQUFuQixDQUF6Qjs7QUFFQSxNQUFJLENBQUNKLFVBQVUsQ0FBQ00sTUFBaEIsRUFBd0I7QUFDdEIsV0FBTztBQUNMQyxXQUFLLEVBQUU7QUFDTFAsa0JBQVUsRUFBRTtBQURQO0FBREYsS0FBUDtBQUtELEdBTkQsTUFNTztBQUNMLFdBQU87QUFDTE8sV0FBSyxFQUFFO0FBQ0xQO0FBREs7QUFERixLQUFQO0FBS0Q7QUFDRixDQWpCTTtBQW1CUCwrREFBZUQsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSAnLi4vc2FuaXR5J1xuIFxuY29uc3QgSG9tZSA9ICh7IHByb3BlcnRpZXMgfSkgPT4ge1xuICAgY29uc29sZS5sb2cocHJvcGVydGllcylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gJypbIF90eXBlID09IFwicHJvcGVydHlcIl0nXG4gIGNvbnN0IHByb3BlcnRpZXMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpXG5cbiAgaWYgKCFwcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9wZXJ0aWVzOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgfSxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlFor\": function() { return /* binding */ urlFor; },\n/* harmony export */   \"sanityClient\": function() { return /* binding */ sanityClient; }\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  /**\n   * Find your project ID and dataset in `sanity.json` in your studio project.\n   * These are considered “public”, but you can use environment variables\n   * if you want differ between local dev and production.\n   *\n   * https://nextjs.org/docs/basic-features/environment-variables\n   **/\n  dataset: \"production\" || 0,\n  projectId: \"2n2qjjot\",\n  useCdn: false\n  /**\n   * Set useCdn to `false` if your application require the freshest possible\n   * data always (potentially slightly slower and a bit more expensive).\n   * Authenticated request (like preview) will always bypass the CDN\n   **/\n\n};\n/**\n * Set up a helper function for generating Image URLs with only the asset reference data in your documents.\n * Read more: https://www.sanity.io/docs/image-url\n **/\n\nconst urlFor = source => (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createImageUrlBuilder)(config).image(source); // Set up the client for fetching data in the getProps page functions\n\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmJuLWZyb250Ly4vc2FuaXR5LmpzPzE5NGQiXSwibmFtZXMiOlsiY29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJwcm9qZWN0SWQiLCJ1c2VDZG4iLCJ1cmxGb3IiLCJzb3VyY2UiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJpbWFnZSIsInNhbml0eUNsaWVudCIsImNyZWF0ZUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHO0FBQ2I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsU0FBTyxFQUFFQyxZQUFBLElBQTBDLENBUnRDO0FBU2JDLFdBQVMsRUFBRUQsVUFURTtBQVViRSxRQUFNO0FBQ047QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFmZSxDQUFmO0FBaUJBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLE1BQU0sR0FBSUMsTUFBRCxJQUFZQyxrRUFBcUIsQ0FBQ1AsTUFBRCxDQUFyQixDQUE4QlEsS0FBOUIsQ0FBb0NGLE1BQXBDLENBQTNCLEMsQ0FFUDs7QUFDTyxNQUFNRyxZQUFZLEdBQUdDLHlEQUFZLENBQUNWLE1BQUQsQ0FBakMiLCJmaWxlIjoiLi9zYW5pdHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUltYWdlVXJsQnVpbGRlciB9IGZyb20gXCJuZXh0LXNhbml0eVwiXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLyoqXG4gICAqIEZpbmQgeW91ciBwcm9qZWN0IElEIGFuZCBkYXRhc2V0IGluIGBzYW5pdHkuanNvbmAgaW4geW91ciBzdHVkaW8gcHJvamVjdC5cbiAgICogVGhlc2UgYXJlIGNvbnNpZGVyZWQg4oCccHVibGlj4oCdLCBidXQgeW91IGNhbiB1c2UgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAqIGlmIHlvdSB3YW50IGRpZmZlciBiZXR3ZWVuIGxvY2FsIGRldiBhbmQgcHJvZHVjdGlvbi5cbiAgICpcbiAgICogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZW52aXJvbm1lbnQtdmFyaWFibGVzXG4gICAqKi9cbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQgfHwgXCJwcm9kdWN0aW9uXCIsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXG4gIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAvKipcbiAgICogU2V0IHVzZUNkbiB0byBgZmFsc2VgIGlmIHlvdXIgYXBwbGljYXRpb24gcmVxdWlyZSB0aGUgZnJlc2hlc3QgcG9zc2libGVcbiAgICogZGF0YSBhbHdheXMgKHBvdGVudGlhbGx5IHNsaWdodGx5IHNsb3dlciBhbmQgYSBiaXQgbW9yZSBleHBlbnNpdmUpLlxuICAgKiBBdXRoZW50aWNhdGVkIHJlcXVlc3QgKGxpa2UgcHJldmlldykgd2lsbCBhbHdheXMgYnlwYXNzIHRoZSBDRE5cbiAgICoqL1xufVxuLyoqXG4gKiBTZXQgdXAgYSBoZWxwZXIgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgSW1hZ2UgVVJMcyB3aXRoIG9ubHkgdGhlIGFzc2V0IHJlZmVyZW5jZSBkYXRhIGluIHlvdXIgZG9jdW1lbnRzLlxuICogUmVhZCBtb3JlOiBodHRwczovL3d3dy5zYW5pdHkuaW8vZG9jcy9pbWFnZS11cmxcbiAqKi9cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpXG5cbi8vIFNldCB1cCB0aGUgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhIGluIHRoZSBnZXRQcm9wcyBwYWdlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sanity.js\n");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-sanity");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();