"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-stringify-position@3.0.3";
exports.ids = ["vendor-chunks/unist-util-stringify-position@3.0.3"];
exports.modules = {

/***/ "./node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/index.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stringifyPosition: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.stringifyPosition)\n/* harmony export */ });\n/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ \"./node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/lib/index.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb25AMy4wLjMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uQDMuMC4zL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbi9pbmRleC5qcz8zM2RmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7c3RyaW5naWZ5UG9zaXRpb259IGZyb20gJy4vbGliL2luZGV4LmpzJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/index.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/lib/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/lib/index.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stringifyPosition: () => (/* binding */ stringifyPosition)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n/**\n * @typedef NodeLike\n * @property {string} type\n * @property {PositionLike | null | undefined} [position]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n */\n\n/**\n * Serialize the positional info of a point, position (start and end points),\n * or node.\n *\n * @param {Node | NodeLike | Position | PositionLike | Point | PointLike | null | undefined} [value]\n *   Node, position, or point.\n * @returns {string}\n *   Pretty printed positional info of a node (`string`).\n *\n *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)\n *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for\n *   column, `s` for `start`, and `e` for end.\n *   An empty string (`''`) is returned if the given value is neither `node`,\n *   `position`, nor `point`.\n */\nfunction stringifyPosition(value) {\n  // Nothing.\n  if (!value || typeof value !== 'object') {\n    return ''\n  }\n\n  // Node.\n  if ('position' in value || 'type' in value) {\n    return position(value.position)\n  }\n\n  // Position.\n  if ('start' in value || 'end' in value) {\n    return position(value)\n  }\n\n  // Point.\n  if ('line' in value || 'column' in value) {\n    return point(value)\n  }\n\n  // ?\n  return ''\n}\n\n/**\n * @param {Point | PointLike | null | undefined} point\n * @returns {string}\n */\nfunction point(point) {\n  return index(point && point.line) + ':' + index(point && point.column)\n}\n\n/**\n * @param {Position | PositionLike | null | undefined} pos\n * @returns {string}\n */\nfunction position(pos) {\n  return point(pos && pos.start) + '-' + point(pos && pos.end)\n}\n\n/**\n * @param {number | null | undefined} value\n * @returns {number}\n */\nfunction index(value) {\n  return value && typeof value === 'number' ? value : 1\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb25AMy4wLjMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDBCQUEwQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QyxjQUFjLDhCQUE4QjtBQUM1QztBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtGQUFrRjtBQUM3RjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNDQUFzQztBQUNqRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDRDQUE0QztBQUN2RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb25AMy4wLjMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2xpYi9pbmRleC5qcz9lYjcxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBQb2ludFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb3NpdGlvbn0gUG9zaXRpb25cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIE5vZGVMaWtlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICogQHByb3BlcnR5IHtQb3NpdGlvbkxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbcG9zaXRpb25dXG4gKlxuICogQHR5cGVkZWYgUG9zaXRpb25MaWtlXG4gKiBAcHJvcGVydHkge1BvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtzdGFydF1cbiAqIEBwcm9wZXJ0eSB7UG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2VuZF1cbiAqXG4gKiBAdHlwZWRlZiBQb2ludExpa2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2xpbmVdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtjb2x1bW5dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtvZmZzZXRdXG4gKi9cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIHBvc2l0aW9uYWwgaW5mbyBvZiBhIHBvaW50LCBwb3NpdGlvbiAoc3RhcnQgYW5kIGVuZCBwb2ludHMpLFxuICogb3Igbm9kZS5cbiAqXG4gKiBAcGFyYW0ge05vZGUgfCBOb2RlTGlrZSB8IFBvc2l0aW9uIHwgUG9zaXRpb25MaWtlIHwgUG9pbnQgfCBQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbdmFsdWVdXG4gKiAgIE5vZGUsIHBvc2l0aW9uLCBvciBwb2ludC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFByZXR0eSBwcmludGVkIHBvc2l0aW9uYWwgaW5mbyBvZiBhIG5vZGUgKGBzdHJpbmdgKS5cbiAqXG4gKiAgIEluIHRoZSBmb3JtYXQgb2YgYSByYW5nZSBgbHM6Y3MtbGU6Y2VgICh3aGVuIGdpdmVuIGBub2RlYCBvciBgcG9zaXRpb25gKVxuICogICBvciBhIHBvaW50IGBsOmNgICh3aGVuIGdpdmVuIGBwb2ludGApLCB3aGVyZSBgbGAgc3RhbmRzIGZvciBsaW5lLCBgY2AgZm9yXG4gKiAgIGNvbHVtbiwgYHNgIGZvciBgc3RhcnRgLCBhbmQgYGVgIGZvciBlbmQuXG4gKiAgIEFuIGVtcHR5IHN0cmluZyAoYCcnYCkgaXMgcmV0dXJuZWQgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIG5laXRoZXIgYG5vZGVgLFxuICogICBgcG9zaXRpb25gLCBub3IgYHBvaW50YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeVBvc2l0aW9uKHZhbHVlKSB7XG4gIC8vIE5vdGhpbmcuXG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gTm9kZS5cbiAgaWYgKCdwb3NpdGlvbicgaW4gdmFsdWUgfHwgJ3R5cGUnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlLnBvc2l0aW9uKVxuICB9XG5cbiAgLy8gUG9zaXRpb24uXG4gIGlmICgnc3RhcnQnIGluIHZhbHVlIHx8ICdlbmQnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlKVxuICB9XG5cbiAgLy8gUG9pbnQuXG4gIGlmICgnbGluZScgaW4gdmFsdWUgfHwgJ2NvbHVtbicgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gcG9pbnQodmFsdWUpXG4gIH1cblxuICAvLyA/XG4gIHJldHVybiAnJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UG9pbnQgfCBQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBwb2ludFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcG9pbnQocG9pbnQpIHtcbiAgcmV0dXJuIGluZGV4KHBvaW50ICYmIHBvaW50LmxpbmUpICsgJzonICsgaW5kZXgocG9pbnQgJiYgcG9pbnQuY29sdW1uKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UG9zaXRpb24gfCBQb3NpdGlvbkxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBwb3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHBvc2l0aW9uKHBvcykge1xuICByZXR1cm4gcG9pbnQocG9zICYmIHBvcy5zdGFydCkgKyAnLScgKyBwb2ludChwb3MgJiYgcG9zLmVuZClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBpbmRleCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogMVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/lib/index.js\n");

/***/ })

};
;