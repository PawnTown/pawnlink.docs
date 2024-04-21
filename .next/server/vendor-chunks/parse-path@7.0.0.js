"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-path@7.0.0";
exports.ids = ["vendor-chunks/parse-path@7.0.0"];
exports.modules = {

/***/ "./node_modules/.pnpm/parse-path@7.0.0/node_modules/parse-path/lib/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/parse-path@7.0.0/node_modules/parse-path/lib/index.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar protocols = __webpack_require__(/*! protocols */ \"./node_modules/.pnpm/protocols@2.0.1/node_modules/protocols/lib/index.js\");\n\n/**\n * parsePath\n * Parses the input url.\n *\n * @name parsePath\n * @function\n * @param {String} url The input url.\n * @return {Object} An object containing the following fields:\n *\n *    - `protocols` (Array): An array with the url protocols (usually it has one element).\n *    - `protocol` (String): The first protocol or `\"file\"`.\n *    - `port` (String): The domain port (default: `\"\"`).\n *    - `resource` (String): The url domain/hostname.\n *    - `host` (String): The url domain (including subdomain and port).\n *    - `user` (String): The authentication user (default: `\"\"`).\n *    - `password` (String): The authentication password (default: `\"\"`).\n *    - `pathname` (String): The url pathname.\n *    - `hash` (String): The url hash.\n *    - `search` (String): The url querystring value (excluding `?`).\n *    - `href` (String): The normalized input url.\n *    - `query` (Object): The url querystring, parsed as object.\n *    - `parse_failed` (Boolean): Whether the parsing failed or not.\n */\nfunction parsePath(url) {\n\n    var output = {\n        protocols: [],\n        protocol: null,\n        port: null,\n        resource: \"\",\n        host: \"\",\n        user: \"\",\n        password: \"\",\n        pathname: \"\",\n        hash: \"\",\n        search: \"\",\n        href: url,\n        query: {},\n        parse_failed: false\n    };\n\n    try {\n        var parsed = new URL(url);\n        output.protocols = protocols(parsed);\n        output.protocol = output.protocols[0];\n        output.port = parsed.port;\n        output.resource = parsed.hostname;\n        output.host = parsed.host;\n        output.user = parsed.username || \"\";\n        output.password = parsed.password || \"\";\n        output.pathname = parsed.pathname;\n        output.hash = parsed.hash.slice(1);\n        output.search = parsed.search.slice(1);\n        output.href = parsed.href;\n        output.query = Object.fromEntries(parsed.searchParams);\n    } catch (e) {\n        // TODO Maybe check if it is a valid local file path\n        //      In any case, these will be parsed by higher\n        //      level parsers such as parse-url, git-url-parse, git-up\n        output.protocols = [\"file\"];\n        output.protocol = output.protocols[0];\n        output.port = \"\";\n        output.resource = \"\";\n        output.user = \"\";\n        output.pathname = \"\";\n        output.hash = \"\";\n        output.search = \"\";\n        output.href = url;\n        output.query = {};\n        output.parse_failed = true;\n    }\n\n    return output;\n}\n\nmodule.exports = parsePath;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vcGFyc2UtcGF0aEA3LjAuMC9ub2RlX21vZHVsZXMvcGFyc2UtcGF0aC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsZ0JBQWdCLG1CQUFPLENBQUMsMkZBQVc7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wYXJzZS1wYXRoQDcuMC4wL25vZGVfbW9kdWxlcy9wYXJzZS1wYXRoL2xpYi9pbmRleC5qcz84MmNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvdG9jb2xzID0gcmVxdWlyZShcInByb3RvY29sc1wiKTtcblxuLyoqXG4gKiBwYXJzZVBhdGhcbiAqIFBhcnNlcyB0aGUgaW5wdXQgdXJsLlxuICpcbiAqIEBuYW1lIHBhcnNlUGF0aFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBpbnB1dCB1cmwuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICpcbiAqICAgIC0gYHByb3RvY29sc2AgKEFycmF5KTogQW4gYXJyYXkgd2l0aCB0aGUgdXJsIHByb3RvY29scyAodXN1YWxseSBpdCBoYXMgb25lIGVsZW1lbnQpLlxuICogICAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZmlyc3QgcHJvdG9jb2wgb3IgYFwiZmlsZVwiYC5cbiAqICAgIC0gYHBvcnRgIChTdHJpbmcpOiBUaGUgZG9tYWluIHBvcnQgKGRlZmF1bHQ6IGBcIlwiYCkuXG4gKiAgICAtIGByZXNvdXJjZWAgKFN0cmluZyk6IFRoZSB1cmwgZG9tYWluL2hvc3RuYW1lLlxuICogICAgLSBgaG9zdGAgKFN0cmluZyk6IFRoZSB1cmwgZG9tYWluIChpbmNsdWRpbmcgc3ViZG9tYWluIGFuZCBwb3J0KS5cbiAqICAgIC0gYHVzZXJgIChTdHJpbmcpOiBUaGUgYXV0aGVudGljYXRpb24gdXNlciAoZGVmYXVsdDogYFwiXCJgKS5cbiAqICAgIC0gYHBhc3N3b3JkYCAoU3RyaW5nKTogVGhlIGF1dGhlbnRpY2F0aW9uIHBhc3N3b3JkIChkZWZhdWx0OiBgXCJcImApLlxuICogICAgLSBgcGF0aG5hbWVgIChTdHJpbmcpOiBUaGUgdXJsIHBhdGhuYW1lLlxuICogICAgLSBgaGFzaGAgKFN0cmluZyk6IFRoZSB1cmwgaGFzaC5cbiAqICAgIC0gYHNlYXJjaGAgKFN0cmluZyk6IFRoZSB1cmwgcXVlcnlzdHJpbmcgdmFsdWUgKGV4Y2x1ZGluZyBgP2ApLlxuICogICAgLSBgaHJlZmAgKFN0cmluZyk6IFRoZSBub3JtYWxpemVkIGlucHV0IHVybC5cbiAqICAgIC0gYHF1ZXJ5YCAoT2JqZWN0KTogVGhlIHVybCBxdWVyeXN0cmluZywgcGFyc2VkIGFzIG9iamVjdC5cbiAqICAgIC0gYHBhcnNlX2ZhaWxlZGAgKEJvb2xlYW4pOiBXaGV0aGVyIHRoZSBwYXJzaW5nIGZhaWxlZCBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUGF0aCh1cmwpIHtcblxuICAgIHZhciBvdXRwdXQgPSB7XG4gICAgICAgIHByb3RvY29sczogW10sXG4gICAgICAgIHByb3RvY29sOiBudWxsLFxuICAgICAgICBwb3J0OiBudWxsLFxuICAgICAgICByZXNvdXJjZTogXCJcIixcbiAgICAgICAgaG9zdDogXCJcIixcbiAgICAgICAgdXNlcjogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgICBoYXNoOiBcIlwiLFxuICAgICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgcXVlcnk6IHt9LFxuICAgICAgICBwYXJzZV9mYWlsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbHMgPSBwcm90b2NvbHMocGFyc2VkKTtcbiAgICAgICAgb3V0cHV0LnByb3RvY29sID0gb3V0cHV0LnByb3RvY29sc1swXTtcbiAgICAgICAgb3V0cHV0LnBvcnQgPSBwYXJzZWQucG9ydDtcbiAgICAgICAgb3V0cHV0LnJlc291cmNlID0gcGFyc2VkLmhvc3RuYW1lO1xuICAgICAgICBvdXRwdXQuaG9zdCA9IHBhcnNlZC5ob3N0O1xuICAgICAgICBvdXRwdXQudXNlciA9IHBhcnNlZC51c2VybmFtZSB8fCBcIlwiO1xuICAgICAgICBvdXRwdXQucGFzc3dvcmQgPSBwYXJzZWQucGFzc3dvcmQgfHwgXCJcIjtcbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICBvdXRwdXQuaGFzaCA9IHBhcnNlZC5oYXNoLnNsaWNlKDEpO1xuICAgICAgICBvdXRwdXQuc2VhcmNoID0gcGFyc2VkLnNlYXJjaC5zbGljZSgxKTtcbiAgICAgICAgb3V0cHV0LmhyZWYgPSBwYXJzZWQuaHJlZjtcbiAgICAgICAgb3V0cHV0LnF1ZXJ5ID0gT2JqZWN0LmZyb21FbnRyaWVzKHBhcnNlZC5zZWFyY2hQYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gVE9ETyBNYXliZSBjaGVjayBpZiBpdCBpcyBhIHZhbGlkIGxvY2FsIGZpbGUgcGF0aFxuICAgICAgICAvLyAgICAgIEluIGFueSBjYXNlLCB0aGVzZSB3aWxsIGJlIHBhcnNlZCBieSBoaWdoZXJcbiAgICAgICAgLy8gICAgICBsZXZlbCBwYXJzZXJzIHN1Y2ggYXMgcGFyc2UtdXJsLCBnaXQtdXJsLXBhcnNlLCBnaXQtdXBcbiAgICAgICAgb3V0cHV0LnByb3RvY29scyA9IFtcImZpbGVcIl07XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IG91dHB1dC5wcm90b2NvbHNbMF07XG4gICAgICAgIG91dHB1dC5wb3J0ID0gXCJcIjtcbiAgICAgICAgb3V0cHV0LnJlc291cmNlID0gXCJcIjtcbiAgICAgICAgb3V0cHV0LnVzZXIgPSBcIlwiO1xuICAgICAgICBvdXRwdXQucGF0aG5hbWUgPSBcIlwiO1xuICAgICAgICBvdXRwdXQuaGFzaCA9IFwiXCI7XG4gICAgICAgIG91dHB1dC5zZWFyY2ggPSBcIlwiO1xuICAgICAgICBvdXRwdXQuaHJlZiA9IHVybDtcbiAgICAgICAgb3V0cHV0LnF1ZXJ5ID0ge307XG4gICAgICAgIG91dHB1dC5wYXJzZV9mYWlsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VQYXRoOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/parse-path@7.0.0/node_modules/parse-path/lib/index.js\n");

/***/ })

};
;