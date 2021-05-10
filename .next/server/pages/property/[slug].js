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
exports.id = "pages/property/[slug]";
exports.ids = ["pages/property/[slug]"];
exports.modules = {

/***/ "./pages/property/[slug].js":
/*!**********************************!*\
  !*** ./pages/property/[slug].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ \"./utils.js\");\n\nvar _jsxFileName = \"/Users/oliwialubiarz/AirBnB-front/pages/property/[slug].js\";\n\n\n\nconst Property = ({\n  title,\n  location,\n  propertyType,\n  mainImage,\n  images,\n  pricePerNight,\n  beds,\n  bedrooms,\n  description,\n  host,\n  reviews\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [propertyType, \" hosted by \", host === null || host === void 0 ? void 0 : host.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: [bedrooms, \" bedroom\", (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isMultiple)(bedrooms), \" * \", beds, \" bed\", (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isMultiple)(beds)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst getServerSideProps = async pageContext => {\n  const pageSlug = pageContext.query.slug;\n  const query = `*[ _type == \"property\" && slug.current == $pageSlug][0]{\n        title,\n        location,\n        propertyType,\n        mainImage,\n        images,\n        pricePerNight,\n        beds,\n        bedrooms,\n        description,\n        host->{\n            _id,\n            name,\n            slug,\n            image\n        },\n        reviews[]{\n            ...,\n            guest->{\n                _id,\n                name,\n                slug,\n                image\n            }\n        }\n    }`;\n  const property = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query, {\n    pageSlug\n  });\n\n  if (!property) {\n    return {\n      props: null,\n      notFound: true\n    };\n  } else {\n    return {\n      props: {\n        title: property.title,\n        location: property.location,\n        propertyType: property.propertyType,\n        mainImage: property.mainImage,\n        images: property.images,\n        pricePerNight: property.pricePerNight,\n        beds: property.beds,\n        bedrooms: property.bedrooms,\n        description: property.description,\n        host: property.host,\n        reviews: property.reviews\n      }\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Property);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmJuLWZyb250Ly4vcGFnZXMvcHJvcGVydHkvW3NsdWddLmpzP2ViMmYiXSwibmFtZXMiOlsiUHJvcGVydHkiLCJ0aXRsZSIsImxvY2F0aW9uIiwicHJvcGVydHlUeXBlIiwibWFpbkltYWdlIiwiaW1hZ2VzIiwicHJpY2VQZXJOaWdodCIsImJlZHMiLCJiZWRyb29tcyIsImRlc2NyaXB0aW9uIiwiaG9zdCIsInJldmlld3MiLCJuYW1lIiwiaXNNdWx0aXBsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhZ2VDb250ZXh0IiwicGFnZVNsdWciLCJxdWVyeSIsInNsdWciLCJwcm9wZXJ0eSIsInNhbml0eUNsaWVudCIsInByb3BzIiwibm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQ2RDLE9BRGM7QUFFZEMsVUFGYztBQUdkQyxjQUhjO0FBSWRDLFdBSmM7QUFLZEMsUUFMYztBQU1kQyxlQU5jO0FBT2RDLE1BUGM7QUFRZEMsVUFSYztBQVNkQyxhQVRjO0FBVWRDLE1BVmM7QUFXZEM7QUFYYyxDQUFELEtBWVg7QUFFRixzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS1Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxpQkFBS0UsWUFBTCxpQkFBOEJPLElBQTlCLGFBQThCQSxJQUE5Qix1QkFBOEJBLElBQUksQ0FBRUUsSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQSxpQkFBS0osUUFBTCxjQUF1Qkssa0RBQVUsQ0FBQ0wsUUFBRCxDQUFqQyxTQUFnREQsSUFBaEQsVUFBMERNLGtEQUFVLENBQUNOLElBQUQsQ0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFTSCxDQXZCRDs7QUF5Qk8sTUFBTU8sa0JBQWtCLEdBQUcsTUFBT0MsV0FBUCxJQUF1QjtBQUNyRCxRQUFNQyxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsS0FBWixDQUFrQkMsSUFBbkM7QUFFQSxRQUFNRCxLQUFLLEdBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUF6Qkk7QUEyQkEsUUFBTUUsUUFBUSxHQUFHLE1BQU1DLHVEQUFBLENBQW1CSCxLQUFuQixFQUEwQjtBQUFFRDtBQUFGLEdBQTFCLENBQXZCOztBQUVBLE1BQUksQ0FBQ0csUUFBTCxFQUFlO0FBQ1gsV0FBTztBQUNIRSxXQUFLLEVBQUUsSUFESjtBQUVIQyxjQUFRLEVBQUU7QUFGUCxLQUFQO0FBSUgsR0FMRCxNQUtPO0FBQ0gsV0FBTztBQUNIRCxXQUFLLEVBQUU7QUFDSHBCLGFBQUssRUFBRWtCLFFBQVEsQ0FBQ2xCLEtBRGI7QUFFSEMsZ0JBQVEsRUFBRWlCLFFBQVEsQ0FBQ2pCLFFBRmhCO0FBR0hDLG9CQUFZLEVBQUVnQixRQUFRLENBQUNoQixZQUhwQjtBQUlIQyxpQkFBUyxFQUFFZSxRQUFRLENBQUNmLFNBSmpCO0FBS0hDLGNBQU0sRUFBRWMsUUFBUSxDQUFDZCxNQUxkO0FBTUhDLHFCQUFhLEVBQUVhLFFBQVEsQ0FBQ2IsYUFOckI7QUFPSEMsWUFBSSxFQUFFWSxRQUFRLENBQUNaLElBUFo7QUFRSEMsZ0JBQVEsRUFBRVcsUUFBUSxDQUFDWCxRQVJoQjtBQVNIQyxtQkFBVyxFQUFFVSxRQUFRLENBQUNWLFdBVG5CO0FBVUhDLFlBQUksRUFBRVMsUUFBUSxDQUFDVCxJQVZaO0FBV0hDLGVBQU8sRUFBRVEsUUFBUSxDQUFDUjtBQVhmO0FBREosS0FBUDtBQWdCSDtBQUNKLENBdkRNO0FBMkRQLCtEQUFlWCxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvcGVydHkvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSAnLi4vLi4vc2FuaXR5J1xuaW1wb3J0IHsgaXNNdWx0aXBsZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBQcm9wZXJ0eSA9ICh7XG4gICAgdGl0bGUsXG4gICAgbG9jYXRpb24sXG4gICAgcHJvcGVydHlUeXBlLFxuICAgIG1haW5JbWFnZSxcbiAgICBpbWFnZXMsXG4gICAgcHJpY2VQZXJOaWdodCxcbiAgICBiZWRzLFxuICAgIGJlZHJvb21zLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGhvc3QsXG4gICAgcmV2aWV3c1xufSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoMj57cHJvcGVydHlUeXBlfSBob3N0ZWQgYnkge2hvc3Q/Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxoND57YmVkcm9vbXN9IGJlZHJvb217aXNNdWx0aXBsZShiZWRyb29tcyl9ICoge2JlZHN9IGJlZHtpc011bHRpcGxlKGJlZHMpfTwvaDQ+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoND48L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAocGFnZUNvbnRleHQpID0+IHtcbiAgICBjb25zdCBwYWdlU2x1ZyA9IHBhZ2VDb250ZXh0LnF1ZXJ5LnNsdWdcblxuICAgIGNvbnN0IHF1ZXJ5ID0gYCpbIF90eXBlID09IFwicHJvcGVydHlcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHBhZ2VTbHVnXVswXXtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBwcm9wZXJ0eVR5cGUsXG4gICAgICAgIG1haW5JbWFnZSxcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICBwcmljZVBlck5pZ2h0LFxuICAgICAgICBiZWRzLFxuICAgICAgICBiZWRyb29tcyxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGhvc3QtPntcbiAgICAgICAgICAgIF9pZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgfSxcbiAgICAgICAgcmV2aWV3c1tde1xuICAgICAgICAgICAgLi4uLFxuICAgICAgICAgICAgZ3Vlc3QtPntcbiAgICAgICAgICAgICAgICBfaWQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBzbHVnLFxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9YFxuXG4gICAgY29uc3QgcHJvcGVydHkgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHsgcGFnZVNsdWcgfSlcblxuICAgIGlmICghcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiBudWxsLFxuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogcHJvcGVydHkudGl0bGUsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHByb3BlcnR5LmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZTogcHJvcGVydHkucHJvcGVydHlUeXBlLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZTogcHJvcGVydHkubWFpbkltYWdlLFxuICAgICAgICAgICAgICAgIGltYWdlczogcHJvcGVydHkuaW1hZ2VzLFxuICAgICAgICAgICAgICAgIHByaWNlUGVyTmlnaHQ6IHByb3BlcnR5LnByaWNlUGVyTmlnaHQsXG4gICAgICAgICAgICAgICAgYmVkczogcHJvcGVydHkuYmVkcyxcbiAgICAgICAgICAgICAgICBiZWRyb29tczogcHJvcGVydHkuYmVkcm9vbXMsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BlcnR5LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHByb3BlcnR5Lmhvc3QsXG4gICAgICAgICAgICAgICAgcmV2aWV3czogcHJvcGVydHkucmV2aWV3c1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/property/[slug].js\n");

/***/ }),

/***/ "./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlFor\": function() { return /* binding */ urlFor; },\n/* harmony export */   \"sanityClient\": function() { return /* binding */ sanityClient; }\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  /**\n   * Find your project ID and dataset in `sanity.json` in your studio project.\n   * These are considered “public”, but you can use environment variables\n   * if you want differ between local dev and production.\n   *\n   * https://nextjs.org/docs/basic-features/environment-variables\n   **/\n  dataset: \"production\" || 0,\n  projectId: \"2n2qjjot\",\n  useCdn: false\n  /**\n   * Set useCdn to `false` if your application require the freshest possible\n   * data always (potentially slightly slower and a bit more expensive).\n   * Authenticated request (like preview) will always bypass the CDN\n   **/\n\n};\n/**\n * Set up a helper function for generating Image URLs with only the asset reference data in your documents.\n * Read more: https://www.sanity.io/docs/image-url\n **/\n\nconst urlFor = source => (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createImageUrlBuilder)(config).image(source); // Set up the client for fetching data in the getProps page functions\n\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmJuLWZyb250Ly4vc2FuaXR5LmpzPzE5NGQiXSwibmFtZXMiOlsiY29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJwcm9qZWN0SWQiLCJ1c2VDZG4iLCJ1cmxGb3IiLCJzb3VyY2UiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJpbWFnZSIsInNhbml0eUNsaWVudCIsImNyZWF0ZUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHO0FBQ2I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsU0FBTyxFQUFFQyxZQUFBLElBQTBDLENBUnRDO0FBU2JDLFdBQVMsRUFBRUQsVUFURTtBQVViRSxRQUFNO0FBQ047QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFmZSxDQUFmO0FBaUJBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLE1BQU0sR0FBSUMsTUFBRCxJQUFZQyxrRUFBcUIsQ0FBQ1AsTUFBRCxDQUFyQixDQUE4QlEsS0FBOUIsQ0FBb0NGLE1BQXBDLENBQTNCLEMsQ0FFUDs7QUFDTyxNQUFNRyxZQUFZLEdBQUdDLHlEQUFZLENBQUNWLE1BQUQsQ0FBakMiLCJmaWxlIjoiLi9zYW5pdHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUltYWdlVXJsQnVpbGRlciB9IGZyb20gXCJuZXh0LXNhbml0eVwiXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLyoqXG4gICAqIEZpbmQgeW91ciBwcm9qZWN0IElEIGFuZCBkYXRhc2V0IGluIGBzYW5pdHkuanNvbmAgaW4geW91ciBzdHVkaW8gcHJvamVjdC5cbiAgICogVGhlc2UgYXJlIGNvbnNpZGVyZWQg4oCccHVibGlj4oCdLCBidXQgeW91IGNhbiB1c2UgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAqIGlmIHlvdSB3YW50IGRpZmZlciBiZXR3ZWVuIGxvY2FsIGRldiBhbmQgcHJvZHVjdGlvbi5cbiAgICpcbiAgICogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZW52aXJvbm1lbnQtdmFyaWFibGVzXG4gICAqKi9cbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQgfHwgXCJwcm9kdWN0aW9uXCIsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXG4gIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAvKipcbiAgICogU2V0IHVzZUNkbiB0byBgZmFsc2VgIGlmIHlvdXIgYXBwbGljYXRpb24gcmVxdWlyZSB0aGUgZnJlc2hlc3QgcG9zc2libGVcbiAgICogZGF0YSBhbHdheXMgKHBvdGVudGlhbGx5IHNsaWdodGx5IHNsb3dlciBhbmQgYSBiaXQgbW9yZSBleHBlbnNpdmUpLlxuICAgKiBBdXRoZW50aWNhdGVkIHJlcXVlc3QgKGxpa2UgcHJldmlldykgd2lsbCBhbHdheXMgYnlwYXNzIHRoZSBDRE5cbiAgICoqL1xufVxuLyoqXG4gKiBTZXQgdXAgYSBoZWxwZXIgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgSW1hZ2UgVVJMcyB3aXRoIG9ubHkgdGhlIGFzc2V0IHJlZmVyZW5jZSBkYXRhIGluIHlvdXIgZG9jdW1lbnRzLlxuICogUmVhZCBtb3JlOiBodHRwczovL3d3dy5zYW5pdHkuaW8vZG9jcy9pbWFnZS11cmxcbiAqKi9cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpXG5cbi8vIFNldCB1cCB0aGUgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhIGluIHRoZSBnZXRQcm9wcyBwYWdlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sanity.js\n");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMultiple\": function() { return /* binding */ isMultiple; }\n/* harmony export */ });\nconst isMultiple = value => value === 0 || value > 1 ? 's' : '';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmJuLWZyb250Ly4vdXRpbHMuanM/MWIyMyJdLCJuYW1lcyI6WyJpc011bHRpcGxlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUlDLEtBQUQsSUFBYUEsS0FBSyxLQUFLLENBQVYsSUFBZUEsS0FBSyxHQUFHLENBQXhCLEdBQThCLEdBQTlCLEdBQW9DLEVBQW5FIiwiZmlsZSI6Ii4vdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNNdWx0aXBsZSA9ICh2YWx1ZSkgPT4gKCh2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA+IDEgKSA/ICdzJyA6ICcnKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/property/[slug].js"));
module.exports = __webpack_exports__;

})();