"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-decode-string@1.1.0";
exports.ids = ["vendor-chunks/micromark-util-decode-string@1.1.0"];
exports.modules = {

/***/ "./node_modules/.pnpm/micromark-util-decode-string@1.1.0/node_modules/micromark-util-decode-string/dev/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-util-decode-string@1.1.0/node_modules/micromark-util-decode-string/dev/index.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeString: () => (/* binding */ decodeString)\n/* harmony export */ });\n/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decode-named-character-reference */ \"./node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js\");\n/* harmony import */ var micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-decode-numeric-character-reference */ \"./node_modules/.pnpm/micromark-util-decode-numeric-character-reference@1.1.0/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"./node_modules/.pnpm/micromark-util-symbol@1.1.0/node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"./node_modules/.pnpm/micromark-util-symbol@1.1.0/node_modules/micromark-util-symbol/constants.js\");\n\n\n\n\n\nconst characterEscapeOrReference =\n  /\\\\([!-/:-@[-`{-~])|&(#(?:\\d{1,7}|x[\\da-f]{1,6})|[\\da-z]{1,31});/gi\n\n/**\n * Decode markdown strings (which occur in places such as fenced code info\n * strings, destinations, labels, and titles).\n *\n * The “string” content type allows character escapes and -references.\n * This decodes those.\n *\n * @param {string} value\n *   Value to decode.\n * @returns {string}\n *   Decoded value.\n */\nfunction decodeString(value) {\n  return value.replace(characterEscapeOrReference, decode)\n}\n\n/**\n * @param {string} $0\n * @param {string} $1\n * @param {string} $2\n * @returns {string}\n */\nfunction decode($0, $1, $2) {\n  if ($1) {\n    // Escape.\n    return $1\n  }\n\n  // Reference.\n  const head = $2.charCodeAt(0)\n\n  if (head === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.numberSign) {\n    const head = $2.charCodeAt(1)\n    const hex = head === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.lowercaseX || head === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.uppercaseX\n    return (0,micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__.decodeNumericCharacterReference)(\n      $2.slice(hex ? 2 : 1),\n      hex ? micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseHexadecimal : micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseDecimal\n    )\n  }\n\n  return (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__.decodeNamedCharacterReference)($2) || $0\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZ0AxLjEuMC9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZy9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEU7QUFDbUI7QUFDN0M7QUFDUTs7QUFFNUQ7QUFDQSxpQkFBaUIsY0FBYyxJQUFJLFVBQVUsSUFBSSxVQUFVLEtBQUssRUFBRTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLGlFQUFLO0FBQ3BCO0FBQ0EseUJBQXlCLGlFQUFLLHdCQUF3QixpRUFBSztBQUMzRCxXQUFXLGtIQUErQjtBQUMxQztBQUNBLFlBQVkseUVBQVMsMEJBQTBCLHlFQUFTO0FBQ3hEO0FBQ0E7O0FBRUEsU0FBUywrRkFBNkI7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZ0AxLjEuMC9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZy9kZXYvaW5kZXguanM/NzE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlY29kZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlfSBmcm9tICdkZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZSdcbmltcG9ydCB7ZGVjb2RlTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZSdcbmltcG9ydCB7Y29kZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC9jb2Rlcy5qcydcbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvY29uc3RhbnRzLmpzJ1xuXG5jb25zdCBjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSA9XG4gIC9cXFxcKFshLS86LUBbLWB7LX5dKXwmKCMoPzpcXGR7MSw3fXx4W1xcZGEtZl17MSw2fSl8W1xcZGEtel17MSwzMX0pOy9naVxuXG4vKipcbiAqIERlY29kZSBtYXJrZG93biBzdHJpbmdzICh3aGljaCBvY2N1ciBpbiBwbGFjZXMgc3VjaCBhcyBmZW5jZWQgY29kZSBpbmZvXG4gKiBzdHJpbmdzLCBkZXN0aW5hdGlvbnMsIGxhYmVscywgYW5kIHRpdGxlcykuXG4gKlxuICogVGhlIOKAnHN0cmluZ+KAnSBjb250ZW50IHR5cGUgYWxsb3dzIGNoYXJhY3RlciBlc2NhcGVzIGFuZCAtcmVmZXJlbmNlcy5cbiAqIFRoaXMgZGVjb2RlcyB0aG9zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gZGVjb2RlLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgRGVjb2RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZShjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSwgZGVjb2RlKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMFxuICogQHBhcmFtIHtzdHJpbmd9ICQxXG4gKiBAcGFyYW0ge3N0cmluZ30gJDJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRlY29kZSgkMCwgJDEsICQyKSB7XG4gIGlmICgkMSkge1xuICAgIC8vIEVzY2FwZS5cbiAgICByZXR1cm4gJDFcbiAgfVxuXG4gIC8vIFJlZmVyZW5jZS5cbiAgY29uc3QgaGVhZCA9ICQyLmNoYXJDb2RlQXQoMClcblxuICBpZiAoaGVhZCA9PT0gY29kZXMubnVtYmVyU2lnbikge1xuICAgIGNvbnN0IGhlYWQgPSAkMi5jaGFyQ29kZUF0KDEpXG4gICAgY29uc3QgaGV4ID0gaGVhZCA9PT0gY29kZXMubG93ZXJjYXNlWCB8fCBoZWFkID09PSBjb2Rlcy51cHBlcmNhc2VYXG4gICAgcmV0dXJuIGRlY29kZU51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2UoXG4gICAgICAkMi5zbGljZShoZXggPyAyIDogMSksXG4gICAgICBoZXggPyBjb25zdGFudHMubnVtZXJpY0Jhc2VIZXhhZGVjaW1hbCA6IGNvbnN0YW50cy5udW1lcmljQmFzZURlY2ltYWxcbiAgICApXG4gIH1cblxuICByZXR1cm4gZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UoJDIpIHx8ICQwXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/micromark-util-decode-string@1.1.0/node_modules/micromark-util-decode-string/dev/index.js\n");

/***/ })

};
;