"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dequal@2.0.3";
exports.ids = ["vendor-chunks/dequal@2.0.3"];
exports.modules = {

/***/ "./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dequal: () => (/* binding */ dequal)\n/* harmony export */ });\nvar has = Object.prototype.hasOwnProperty;\n\nfunction find(iter, tar, key) {\n\tfor (key of iter.keys()) {\n\t\tif (dequal(key, tar)) return key;\n\t}\n}\n\nfunction dequal(foo, bar) {\n\tvar ctor, len, tmp;\n\tif (foo === bar) return true;\n\n\tif (foo && bar && (ctor=foo.constructor) === bar.constructor) {\n\t\tif (ctor === Date) return foo.getTime() === bar.getTime();\n\t\tif (ctor === RegExp) return foo.toString() === bar.toString();\n\n\t\tif (ctor === Array) {\n\t\t\tif ((len=foo.length) === bar.length) {\n\t\t\t\twhile (len-- && dequal(foo[len], bar[len]));\n\t\t\t}\n\t\t\treturn len === -1;\n\t\t}\n\n\t\tif (ctor === Set) {\n\t\t\tif (foo.size !== bar.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tfor (len of foo) {\n\t\t\t\ttmp = len;\n\t\t\t\tif (tmp && typeof tmp === 'object') {\n\t\t\t\t\ttmp = find(bar, tmp);\n\t\t\t\t\tif (!tmp) return false;\n\t\t\t\t}\n\t\t\t\tif (!bar.has(tmp)) return false;\n\t\t\t}\n\t\t\treturn true;\n\t\t}\n\n\t\tif (ctor === Map) {\n\t\t\tif (foo.size !== bar.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tfor (len of foo) {\n\t\t\t\ttmp = len[0];\n\t\t\t\tif (tmp && typeof tmp === 'object') {\n\t\t\t\t\ttmp = find(bar, tmp);\n\t\t\t\t\tif (!tmp) return false;\n\t\t\t\t}\n\t\t\t\tif (!dequal(len[1], bar.get(tmp))) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn true;\n\t\t}\n\n\t\tif (ctor === ArrayBuffer) {\n\t\t\tfoo = new Uint8Array(foo);\n\t\t\tbar = new Uint8Array(bar);\n\t\t} else if (ctor === DataView) {\n\t\t\tif ((len=foo.byteLength) === bar.byteLength) {\n\t\t\t\twhile (len-- && foo.getInt8(len) === bar.getInt8(len));\n\t\t\t}\n\t\t\treturn len === -1;\n\t\t}\n\n\t\tif (ArrayBuffer.isView(foo)) {\n\t\t\tif ((len=foo.byteLength) === bar.byteLength) {\n\t\t\t\twhile (len-- && foo[len] === bar[len]);\n\t\t\t}\n\t\t\treturn len === -1;\n\t\t}\n\n\t\tif (!ctor || typeof foo === 'object') {\n\t\t\tlen = 0;\n\t\t\tfor (ctor in foo) {\n\t\t\t\tif (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;\n\t\t\t\tif (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;\n\t\t\t}\n\t\t\treturn Object.keys(bar).length === len;\n\t\t}\n\t}\n\n\treturn foo !== foo && bar !== bar;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZGVxdWFsQDIuMC4zL25vZGVfbW9kdWxlcy9kZXF1YWwvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vZGVxdWFsQDIuMC4zL25vZGVfbW9kdWxlcy9kZXF1YWwvZGlzdC9pbmRleC5tanM/ODRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZmluZChpdGVyLCB0YXIsIGtleSkge1xuXHRmb3IgKGtleSBvZiBpdGVyLmtleXMoKSkge1xuXHRcdGlmIChkZXF1YWwoa2V5LCB0YXIpKSByZXR1cm4ga2V5O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXF1YWwoZm9vLCBiYXIpIHtcblx0dmFyIGN0b3IsIGxlbiwgdG1wO1xuXHRpZiAoZm9vID09PSBiYXIpIHJldHVybiB0cnVlO1xuXG5cdGlmIChmb28gJiYgYmFyICYmIChjdG9yPWZvby5jb25zdHJ1Y3RvcikgPT09IGJhci5jb25zdHJ1Y3Rvcikge1xuXHRcdGlmIChjdG9yID09PSBEYXRlKSByZXR1cm4gZm9vLmdldFRpbWUoKSA9PT0gYmFyLmdldFRpbWUoKTtcblx0XHRpZiAoY3RvciA9PT0gUmVnRXhwKSByZXR1cm4gZm9vLnRvU3RyaW5nKCkgPT09IGJhci50b1N0cmluZygpO1xuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28ubGVuZ3RoKSA9PT0gYmFyLmxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZGVxdWFsKGZvb1tsZW5dLCBiYXJbbGVuXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IFNldCkge1xuXHRcdFx0aWYgKGZvby5zaXplICE9PSBiYXIuc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxlbiBvZiBmb28pIHtcblx0XHRcdFx0dG1wID0gbGVuO1xuXHRcdFx0XHRpZiAodG1wICYmIHR5cGVvZiB0bXAgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dG1wID0gZmluZChiYXIsIHRtcCk7XG5cdFx0XHRcdFx0aWYgKCF0bXApIHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWJhci5oYXModG1wKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IE1hcCkge1xuXHRcdFx0aWYgKGZvby5zaXplICE9PSBiYXIuc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxlbiBvZiBmb28pIHtcblx0XHRcdFx0dG1wID0gbGVuWzBdO1xuXHRcdFx0XHRpZiAodG1wICYmIHR5cGVvZiB0bXAgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dG1wID0gZmluZChiYXIsIHRtcCk7XG5cdFx0XHRcdFx0aWYgKCF0bXApIHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRlcXVhbChsZW5bMV0sIGJhci5nZXQodG1wKSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSBBcnJheUJ1ZmZlcikge1xuXHRcdFx0Zm9vID0gbmV3IFVpbnQ4QXJyYXkoZm9vKTtcblx0XHRcdGJhciA9IG5ldyBVaW50OEFycmF5KGJhcik7XG5cdFx0fSBlbHNlIGlmIChjdG9yID09PSBEYXRhVmlldykge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vLmdldEludDgobGVuKSA9PT0gYmFyLmdldEludDgobGVuKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZvbykpIHtcblx0XHRcdGlmICgobGVuPWZvby5ieXRlTGVuZ3RoKSA9PT0gYmFyLmJ5dGVMZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGZvb1tsZW5dID09PSBiYXJbbGVuXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoIWN0b3IgfHwgdHlwZW9mIGZvbyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGxlbiA9IDA7XG5cdFx0XHRmb3IgKGN0b3IgaW4gZm9vKSB7XG5cdFx0XHRcdGlmIChoYXMuY2FsbChmb28sIGN0b3IpICYmICsrbGVuICYmICFoYXMuY2FsbChiYXIsIGN0b3IpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlmICghKGN0b3IgaW4gYmFyKSB8fCAhZGVxdWFsKGZvb1tjdG9yXSwgYmFyW2N0b3JdKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGJhcikubGVuZ3RoID09PSBsZW47XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZvbyAhPT0gZm9vICYmIGJhciAhPT0gYmFyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs\n");

/***/ })

};
;