"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tanstack+react-virtual@3.4.0_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@tanstack+react-virtual@3.4.0_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "./node_modules/.pnpm/@tanstack+react-virtual@3.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-virtual@3.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useVirtualizer: () => (/* binding */ useVirtualizer),\n/* harmony export */   useWindowVirtualizer: () => (/* binding */ useWindowVirtualizer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/virtual-core */ \"./node_modules/.pnpm/@tanstack+virtual-core@3.4.0/node_modules/@tanstack/virtual-core/dist/esm/index.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__) if([\"default\",\"useVirtualizer\",\"useWindowVirtualizer\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\nconst useIsomorphicLayoutEffect = typeof document !== \"undefined\" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\nfunction useVirtualizerBase(options) {\n  const rerender = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(() => ({}), {})[1];\n  const resolvedOptions = {\n    ...options,\n    onChange: (instance2, sync) => {\n      var _a;\n      if (sync) {\n        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(rerender);\n      } else {\n        rerender();\n      }\n      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);\n    }\n  };\n  const [instance] = react__WEBPACK_IMPORTED_MODULE_0__.useState(\n    () => new _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.Virtualizer(resolvedOptions)\n  );\n  instance.setOptions(resolvedOptions);\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    return instance._didMount();\n  }, []);\n  useIsomorphicLayoutEffect(() => {\n    return instance._willUpdate();\n  });\n  return instance;\n}\nfunction useVirtualizer(options) {\n  return useVirtualizerBase({\n    observeElementRect: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeElementRect,\n    observeElementOffset: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeElementOffset,\n    scrollToFn: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.elementScroll,\n    ...options\n  });\n}\nfunction useWindowVirtualizer(options) {\n  return useVirtualizerBase({\n    getScrollElement: () => typeof document !== \"undefined\" ? window : null,\n    observeElementRect: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeWindowRect,\n    observeElementOffset: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeWindowOffset,\n    scrollToFn: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.windowScroll,\n    initialOffset: () => typeof document !== \"undefined\" ? window.scrollY : 0,\n    ...options\n  });\n}\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXZpcnR1YWxAMy40LjBfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9yZWFjdC12aXJ0dWFsL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ087QUFDOEg7QUFDN0g7QUFDdkMsb0VBQW9FLGtEQUFxQixHQUFHLDRDQUFlO0FBQzNHO0FBQ0EsbUJBQW1CLDZDQUFnQixVQUFVLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVM7QUFDakIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQWM7QUFDbkMsY0FBYywrREFBVztBQUN6QjtBQUNBO0FBQ0EsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixnQkFBZ0IsaUVBQWE7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUVBQWlCO0FBQ3pDLDBCQUEwQix1RUFBbUI7QUFDN0MsZ0JBQWdCLGdFQUFZO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0YW5zdGFjaytyZWFjdC12aXJ0dWFsQDMuNC4wX3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtdmlydHVhbC9kaXN0L2VzbS9pbmRleC5qcz83NTk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmx1c2hTeW5jIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgb2JzZXJ2ZUVsZW1lbnRSZWN0LCBvYnNlcnZlRWxlbWVudE9mZnNldCwgZWxlbWVudFNjcm9sbCwgb2JzZXJ2ZVdpbmRvd1JlY3QsIG9ic2VydmVXaW5kb3dPZmZzZXQsIHdpbmRvd1Njcm9sbCwgVmlydHVhbGl6ZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3ZpcnR1YWwtY29yZVwiO1xuZXhwb3J0ICogZnJvbSBcIkB0YW5zdGFjay92aXJ0dWFsLWNvcmVcIjtcbmNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG5mdW5jdGlvbiB1c2VWaXJ0dWFsaXplckJhc2Uob3B0aW9ucykge1xuICBjb25zdCByZXJlbmRlciA9IFJlYWN0LnVzZVJlZHVjZXIoKCkgPT4gKHt9KSwge30pWzFdO1xuICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBvbkNoYW5nZTogKGluc3RhbmNlMiwgc3luYykgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgZmx1c2hTeW5jKHJlcmVuZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcmVuZGVyKCk7XG4gICAgICB9XG4gICAgICAoX2EgPSBvcHRpb25zLm9uQ2hhbmdlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCBpbnN0YW5jZTIsIHN5bmMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgW2luc3RhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgICgpID0+IG5ldyBWaXJ0dWFsaXplcihyZXNvbHZlZE9wdGlvbnMpXG4gICk7XG4gIGluc3RhbmNlLnNldE9wdGlvbnMocmVzb2x2ZWRPcHRpb25zKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gaW5zdGFuY2UuX2RpZE1vdW50KCk7XG4gIH0sIFtdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGluc3RhbmNlLl93aWxsVXBkYXRlKCk7XG4gIH0pO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5mdW5jdGlvbiB1c2VWaXJ0dWFsaXplcihvcHRpb25zKSB7XG4gIHJldHVybiB1c2VWaXJ0dWFsaXplckJhc2Uoe1xuICAgIG9ic2VydmVFbGVtZW50UmVjdCxcbiAgICBvYnNlcnZlRWxlbWVudE9mZnNldCxcbiAgICBzY3JvbGxUb0ZuOiBlbGVtZW50U2Nyb2xsLFxuICAgIC4uLm9wdGlvbnNcbiAgfSk7XG59XG5mdW5jdGlvbiB1c2VXaW5kb3dWaXJ0dWFsaXplcihvcHRpb25zKSB7XG4gIHJldHVybiB1c2VWaXJ0dWFsaXplckJhc2Uoe1xuICAgIGdldFNjcm9sbEVsZW1lbnQ6ICgpID0+IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IG51bGwsXG4gICAgb2JzZXJ2ZUVsZW1lbnRSZWN0OiBvYnNlcnZlV2luZG93UmVjdCxcbiAgICBvYnNlcnZlRWxlbWVudE9mZnNldDogb2JzZXJ2ZVdpbmRvd09mZnNldCxcbiAgICBzY3JvbGxUb0ZuOiB3aW5kb3dTY3JvbGwsXG4gICAgaW5pdGlhbE9mZnNldDogKCkgPT4gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnNjcm9sbFkgOiAwLFxuICAgIC4uLm9wdGlvbnNcbiAgfSk7XG59XG5leHBvcnQge1xuICB1c2VWaXJ0dWFsaXplcixcbiAgdXNlV2luZG93VmlydHVhbGl6ZXJcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/@tanstack+react-virtual@3.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js\n");

/***/ })

};
;