/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/title@3.5.3";
exports.ids = ["vendor-chunks/title@3.5.3"];
exports.modules = {

/***/ "./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/index.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Utilities\nconst lowerCase = __webpack_require__(/*! ./lower-case */ \"./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js\")\nconst specials = __webpack_require__(/*! ./specials */ \"./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js\")\n\nconst word = \"[^\\\\s'’\\\\(\\\\)!?;:\\\"-]\"\nconst regex = new RegExp(`(?:(?:(\\\\s?(?:^|[.\\\\(\\\\)!?;:\"-])\\\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`, \"g\")\n\nconst convertToRegExp = specials => specials.map(s => [new RegExp(`\\\\b${s}\\\\b`, 'gi'), s])\n\nfunction parseMatch(match) {\n  const firstCharacter = match[0]\n\n  // test first character\n  if (/\\s/.test(firstCharacter)) {\n    // if whitespace - trim and return\n    return match.slice(1)\n  }\n  if (/[\\(\\)]/.test(firstCharacter)) {\n    // if parens - this shouldn't be replaced\n    return null\n  }\n\n  return match\n}\n\nmodule.exports = (str, options = {}) => {\n  str = str.toLowerCase().replace(regex, (m, lead = '', forced, lower, rest, offset, string) => {\n    const isLastWord = m.length + offset >= string.length;\n\n    const parsedMatch = parseMatch(m)\n    if (!parsedMatch) {\n      return m\n    }\n    if (!forced) {\n      const fullLower = lower + rest\n\n      if (lowerCase.has(fullLower) && !isLastWord) {\n        return parsedMatch\n      }\n    }\n\n    return lead + (lower || forced).toUpperCase() + rest\n  })\n\n  const customSpecials = options.special || []\n  const replace = [...specials, ...customSpecials]\n  const replaceRegExp = convertToRegExp(replace)\n\n  replaceRegExp.forEach(([pattern, s]) => {\n    str = str.replace(pattern, s)\n  })\n\n  return str\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJGQUFjO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLHVGQUFZOztBQUVyQyw4QkFBOEI7QUFDOUIscURBQXFELGFBQWEsS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLFFBQVEsS0FBSzs7QUFFekcsd0VBQXdFLEVBQUU7O0FBRTFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS90aXRsZUAzLjUuMy9ub2RlX21vZHVsZXMvdGl0bGUvbGliL2luZGV4LmpzP2QxOTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXRpbGl0aWVzXG5jb25zdCBsb3dlckNhc2UgPSByZXF1aXJlKCcuL2xvd2VyLWNhc2UnKVxuY29uc3Qgc3BlY2lhbHMgPSByZXF1aXJlKCcuL3NwZWNpYWxzJylcblxuY29uc3Qgd29yZCA9IFwiW15cXFxccyfigJlcXFxcKFxcXFwpIT87OlxcXCItXVwiXG5jb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCg/Oig/OihcXFxccz8oPzpefFsuXFxcXChcXFxcKSE/OzpcIi1dKVxcXFxzKikoJHt3b3JkfSkpfCgke3dvcmR9KSkoJHt3b3JkfSpb4oCZJ10qJHt3b3JkfSopYCwgXCJnXCIpXG5cbmNvbnN0IGNvbnZlcnRUb1JlZ0V4cCA9IHNwZWNpYWxzID0+IHNwZWNpYWxzLm1hcChzID0+IFtuZXcgUmVnRXhwKGBcXFxcYiR7c31cXFxcYmAsICdnaScpLCBzXSlcblxuZnVuY3Rpb24gcGFyc2VNYXRjaChtYXRjaCkge1xuICBjb25zdCBmaXJzdENoYXJhY3RlciA9IG1hdGNoWzBdXG5cbiAgLy8gdGVzdCBmaXJzdCBjaGFyYWN0ZXJcbiAgaWYgKC9cXHMvLnRlc3QoZmlyc3RDaGFyYWN0ZXIpKSB7XG4gICAgLy8gaWYgd2hpdGVzcGFjZSAtIHRyaW0gYW5kIHJldHVyblxuICAgIHJldHVybiBtYXRjaC5zbGljZSgxKVxuICB9XG4gIGlmICgvW1xcKFxcKV0vLnRlc3QoZmlyc3RDaGFyYWN0ZXIpKSB7XG4gICAgLy8gaWYgcGFyZW5zIC0gdGhpcyBzaG91bGRuJ3QgYmUgcmVwbGFjZWRcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIG1hdGNoXG59XG5cbm1vZHVsZS5leHBvcnRzID0gKHN0ciwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UocmVnZXgsIChtLCBsZWFkID0gJycsIGZvcmNlZCwgbG93ZXIsIHJlc3QsIG9mZnNldCwgc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaXNMYXN0V29yZCA9IG0ubGVuZ3RoICsgb2Zmc2V0ID49IHN0cmluZy5sZW5ndGg7XG5cbiAgICBjb25zdCBwYXJzZWRNYXRjaCA9IHBhcnNlTWF0Y2gobSlcbiAgICBpZiAoIXBhcnNlZE1hdGNoKSB7XG4gICAgICByZXR1cm4gbVxuICAgIH1cbiAgICBpZiAoIWZvcmNlZCkge1xuICAgICAgY29uc3QgZnVsbExvd2VyID0gbG93ZXIgKyByZXN0XG5cbiAgICAgIGlmIChsb3dlckNhc2UuaGFzKGZ1bGxMb3dlcikgJiYgIWlzTGFzdFdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZE1hdGNoXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWQgKyAobG93ZXIgfHwgZm9yY2VkKS50b1VwcGVyQ2FzZSgpICsgcmVzdFxuICB9KVxuXG4gIGNvbnN0IGN1c3RvbVNwZWNpYWxzID0gb3B0aW9ucy5zcGVjaWFsIHx8IFtdXG4gIGNvbnN0IHJlcGxhY2UgPSBbLi4uc3BlY2lhbHMsIC4uLmN1c3RvbVNwZWNpYWxzXVxuICBjb25zdCByZXBsYWNlUmVnRXhwID0gY29udmVydFRvUmVnRXhwKHJlcGxhY2UpXG5cbiAgcmVwbGFjZVJlZ0V4cC5mb3JFYWNoKChbcGF0dGVybiwgc10pID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShwYXR0ZXJuLCBzKVxuICB9KVxuXG4gIHJldHVybiBzdHJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/index.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("const conjunctions = [\n  'for',\n  'and',\n  'nor',\n  'but',\n  'or',\n  'yet',\n  'so'\n]\n\nconst articles = [\n  'a',\n  'an',\n  'the'\n]\n\nconst prepositions = [\n  'aboard',\n  'about',\n  'above',\n  'across',\n  'after',\n  'against',\n  'along',\n  'amid',\n  'among',\n  'anti',\n  'around',\n  'as',\n  'at',\n  'before',\n  'behind',\n  'below',\n  'beneath',\n  'beside',\n  'besides',\n  'between',\n  'beyond',\n  'but',\n  'by',\n  'concerning',\n  'considering',\n  'despite',\n  'down',\n  'during',\n  'except',\n  'excepting',\n  'excluding',\n  'following',\n  'for',\n  'from',\n  'in',\n  'inside',\n  'into',\n  'like',\n  'minus',\n  'near',\n  'of',\n  'off',\n  'on',\n  'onto',\n  'opposite',\n  'over',\n  'past',\n  'per',\n  'plus',\n  'regarding',\n  'round',\n  'save',\n  'since',\n  'than',\n  'through',\n  'to',\n  'toward',\n  'towards',\n  'under',\n  'underneath',\n  'unlike',\n  'until',\n  'up',\n  'upon',\n  'versus',\n  'via',\n  'with',\n  'within',\n  'without'\n]\n\nmodule.exports = new Set([\n  ...conjunctions,\n  ...articles,\n  ...prepositions\n])\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9sb3dlci1jYXNlLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS90aXRsZUAzLjUuMy9ub2RlX21vZHVsZXMvdGl0bGUvbGliL2xvd2VyLWNhc2UuanM/M2M3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25qdW5jdGlvbnMgPSBbXG4gICdmb3InLFxuICAnYW5kJyxcbiAgJ25vcicsXG4gICdidXQnLFxuICAnb3InLFxuICAneWV0JyxcbiAgJ3NvJ1xuXVxuXG5jb25zdCBhcnRpY2xlcyA9IFtcbiAgJ2EnLFxuICAnYW4nLFxuICAndGhlJ1xuXVxuXG5jb25zdCBwcmVwb3NpdGlvbnMgPSBbXG4gICdhYm9hcmQnLFxuICAnYWJvdXQnLFxuICAnYWJvdmUnLFxuICAnYWNyb3NzJyxcbiAgJ2FmdGVyJyxcbiAgJ2FnYWluc3QnLFxuICAnYWxvbmcnLFxuICAnYW1pZCcsXG4gICdhbW9uZycsXG4gICdhbnRpJyxcbiAgJ2Fyb3VuZCcsXG4gICdhcycsXG4gICdhdCcsXG4gICdiZWZvcmUnLFxuICAnYmVoaW5kJyxcbiAgJ2JlbG93JyxcbiAgJ2JlbmVhdGgnLFxuICAnYmVzaWRlJyxcbiAgJ2Jlc2lkZXMnLFxuICAnYmV0d2VlbicsXG4gICdiZXlvbmQnLFxuICAnYnV0JyxcbiAgJ2J5JyxcbiAgJ2NvbmNlcm5pbmcnLFxuICAnY29uc2lkZXJpbmcnLFxuICAnZGVzcGl0ZScsXG4gICdkb3duJyxcbiAgJ2R1cmluZycsXG4gICdleGNlcHQnLFxuICAnZXhjZXB0aW5nJyxcbiAgJ2V4Y2x1ZGluZycsXG4gICdmb2xsb3dpbmcnLFxuICAnZm9yJyxcbiAgJ2Zyb20nLFxuICAnaW4nLFxuICAnaW5zaWRlJyxcbiAgJ2ludG8nLFxuICAnbGlrZScsXG4gICdtaW51cycsXG4gICduZWFyJyxcbiAgJ29mJyxcbiAgJ29mZicsXG4gICdvbicsXG4gICdvbnRvJyxcbiAgJ29wcG9zaXRlJyxcbiAgJ292ZXInLFxuICAncGFzdCcsXG4gICdwZXInLFxuICAncGx1cycsXG4gICdyZWdhcmRpbmcnLFxuICAncm91bmQnLFxuICAnc2F2ZScsXG4gICdzaW5jZScsXG4gICd0aGFuJyxcbiAgJ3Rocm91Z2gnLFxuICAndG8nLFxuICAndG93YXJkJyxcbiAgJ3Rvd2FyZHMnLFxuICAndW5kZXInLFxuICAndW5kZXJuZWF0aCcsXG4gICd1bmxpa2UnLFxuICAndW50aWwnLFxuICAndXAnLFxuICAndXBvbicsXG4gICd2ZXJzdXMnLFxuICAndmlhJyxcbiAgJ3dpdGgnLFxuICAnd2l0aGluJyxcbiAgJ3dpdGhvdXQnXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNldChbXG4gIC4uLmNvbmp1bmN0aW9ucyxcbiAgLi4uYXJ0aWNsZXMsXG4gIC4uLnByZXBvc2l0aW9uc1xuXSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("const intended = [\n  'ZEIT',\n  'ZEIT Inc.',\n  'Vercel',\n  'Vercel Inc.',\n  'CLI',\n  'API',\n  'HTTP',\n  'HTTPS',\n  'JSX',\n  'DNS',\n  'URL',\n  'now.sh',\n  'now.json',\n  'vercel.app',\n  'vercel.json',\n  'CI',\n  'CD',\n  'CDN',\n  'package.json',\n  'package.lock',\n  'yarn.lock',\n  'GitHub',\n  'GitLab',\n  'CSS',\n  'Sass',\n  'JS',\n  'JavaScript',\n  'TypeScript',\n  'HTML',\n  'WordPress',\n  'Next.js',\n  'Node.js',\n  'Webpack',\n  'Docker',\n  'Bash',\n  'Kubernetes',\n  'SWR',\n  'TinaCMS',\n  'UI',\n  'UX',\n  'TS',\n  'TSX',\n  'iPhone',\n  'iPad',\n  'watchOS',\n  'iOS',\n  'iPadOS',\n  'macOS',\n  'PHP',\n  'composer.json',\n  'composer.lock',\n  'CMS',\n  'SQL',\n  'C',\n  'C#',\n  'GraphQL',\n  'GraphiQL',\n  'JWT',\n  'JWTs'\n]\n\nmodule.exports = intended\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9zcGVjaWFscy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS90aXRsZUAzLjUuMy9ub2RlX21vZHVsZXMvdGl0bGUvbGliL3NwZWNpYWxzLmpzPzE2MWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW50ZW5kZWQgPSBbXG4gICdaRUlUJyxcbiAgJ1pFSVQgSW5jLicsXG4gICdWZXJjZWwnLFxuICAnVmVyY2VsIEluYy4nLFxuICAnQ0xJJyxcbiAgJ0FQSScsXG4gICdIVFRQJyxcbiAgJ0hUVFBTJyxcbiAgJ0pTWCcsXG4gICdETlMnLFxuICAnVVJMJyxcbiAgJ25vdy5zaCcsXG4gICdub3cuanNvbicsXG4gICd2ZXJjZWwuYXBwJyxcbiAgJ3ZlcmNlbC5qc29uJyxcbiAgJ0NJJyxcbiAgJ0NEJyxcbiAgJ0NETicsXG4gICdwYWNrYWdlLmpzb24nLFxuICAncGFja2FnZS5sb2NrJyxcbiAgJ3lhcm4ubG9jaycsXG4gICdHaXRIdWInLFxuICAnR2l0TGFiJyxcbiAgJ0NTUycsXG4gICdTYXNzJyxcbiAgJ0pTJyxcbiAgJ0phdmFTY3JpcHQnLFxuICAnVHlwZVNjcmlwdCcsXG4gICdIVE1MJyxcbiAgJ1dvcmRQcmVzcycsXG4gICdOZXh0LmpzJyxcbiAgJ05vZGUuanMnLFxuICAnV2VicGFjaycsXG4gICdEb2NrZXInLFxuICAnQmFzaCcsXG4gICdLdWJlcm5ldGVzJyxcbiAgJ1NXUicsXG4gICdUaW5hQ01TJyxcbiAgJ1VJJyxcbiAgJ1VYJyxcbiAgJ1RTJyxcbiAgJ1RTWCcsXG4gICdpUGhvbmUnLFxuICAnaVBhZCcsXG4gICd3YXRjaE9TJyxcbiAgJ2lPUycsXG4gICdpUGFkT1MnLFxuICAnbWFjT1MnLFxuICAnUEhQJyxcbiAgJ2NvbXBvc2VyLmpzb24nLFxuICAnY29tcG9zZXIubG9jaycsXG4gICdDTVMnLFxuICAnU1FMJyxcbiAgJ0MnLFxuICAnQyMnLFxuICAnR3JhcGhRTCcsXG4gICdHcmFwaGlRTCcsXG4gICdKV1QnLFxuICAnSldUcydcbl1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlbmRlZFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js\n");

/***/ })

};
;