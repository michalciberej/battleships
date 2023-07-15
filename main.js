/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --main-whiteColor: #d4d4d8;\n  --main-blackColor: #18181b;\n  --main-waterColor: #0891b2;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 20px;\n}\n\nh1 {\n  font-size: 4rem;\n  margin-bottom: 8rem;\n}\n\nbody {\n  background-color: var(--main-whiteColor);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#gameboardsContainer {\n  display: flex;\n}\n\n.gameboards {\n  width: 20rem;\n  height: 20rem;\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid black;\n}\n\n#one {\n  display: flex;\n}\n\n#gameboardOne {\n  background: lightblue;\n}\n\n#gameboardOne {\n  position: relative;\n  transition: all 1s ease;\n}\n\n#gameboardTwo {\n  position: absolute;\n  transition: all 1s ease;\n  transform: scale(0);\n}\n\n#gameboardTwo > .boards {\n  background-color: #a3a3a3;\n}\n\n.boards {\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid black;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 4;\n}\n\n#gameboardTwo > .boards:hover {\n  background-color: #78716c;\n}\n\n#shipsContainer {\n  height: 20rem;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.ships {\n  background-color: #57534e;\n  height: 2rem;\n  border-radius: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  z-index: 0;\n  gap: 0.5rem;\n}\n\n.tower {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 4px solid #747474;\n  box-sizing: border-box;\n  background-color: #292524;\n  border-radius: 0.8rem;\n  position: relative;\n  z-index: 0;\n}\n\n#gameboardTwo > .water {\n  background-color: var(--main-waterColor);\n}\n\n#gameboardTwo > .ship {\n  position: relative;\n  z-index: 1;\n  background-color: brown;\n}\n\n#gameboardOne > .water {\n  background-color: var(--main-waterColor);\n}\n\n#gameboardOne > .ship {\n  position: relative;\n  z-index: 1;\n  background-color: brown;\n}\n\n#carrier {\n  width: 10rem;\n  position: relative;\n}\n\n#battleship {\n  width: 8rem;\n}\n\n#destroyerOne,\n#destroyerTwo {\n  width: 6rem;\n}\n\n#submarineOne,\n#submarineTwo {\n  width: 4rem;\n}\n\n#buttons {\n  margin-top: 5rem;\n  display: flex;\n  gap: 4rem;\n}\n\nbutton {\n  font-size: 1rem;\n  padding: 0.5em 1.5em;\n}\n\n.modal {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 15rem;\n  height: 10rem;\n  background-color: white;\n  z-index: 15555;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2rem;\n}\n\n.overlay {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.modal > h2 {\n  font-size: 1.8rem;\n}\n\n.modal > button {\n  font-size: 1rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoardsOne: () => (/* binding */ createBoardsOne),\n/* harmony export */   createBoardsTwo: () => (/* binding */ createBoardsTwo),\n/* harmony export */   createGameboardTwoDom: () => (/* binding */ createGameboardTwoDom),\n/* harmony export */   generateModal: () => (/* binding */ generateModal),\n/* harmony export */   moveStuff: () => (/* binding */ moveStuff)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction createGameboardTwoDom() {\n  const gameboardTwoDOM = document.createElement(\"div\");\n  gameboardTwoDOM.setAttribute(\"id\", \"gameboardTwo\");\n  gameboardTwoDOM.classList.add(\"gameboards\");\n\n  const gamebordsContainer = document.querySelector(\"#gameboardsContainer\");\n  gamebordsContainer.appendChild(gameboardTwoDOM);\n}\n\nfunction removeShipContainer() {\n  document.querySelector(\"#shipsContainer\").remove();\n}\n\nfunction createBoardsOne() {\n  const gameboardOneDOM = document.querySelector(\"#gameboardOne\");\n\n  const size = 10;\n\n  for (let i = 1; i <= size; i++) {\n    for (let j = 1; j <= size; j++) {\n      const board = document.createElement(\"div\");\n      board.classList.add(\"boards\");\n      board.setAttribute(\"data-row\", i);\n      board.setAttribute(\"data-column\", j);\n      gameboardOneDOM.appendChild(board);\n    }\n  }\n}\n\nfunction createBoardsTwo() {\n  const gameboardTwoDOM = document.querySelector(\"#gameboardTwo\");\n\n  const size = 10;\n\n  for (let i = 1; i <= size; i++) {\n    for (let j = 1; j <= size; j++) {\n      const board = document.createElement(\"div\");\n      board.classList.add(\"boards\");\n      board.setAttribute(\"data-row\", i);\n      board.setAttribute(\"data-column\", j);\n      board.addEventListener(\n        \"click\",\n        (e) => {\n          _index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo.recieveAttack(\n            e.target.dataset.row,\n            e.target.dataset.column,\n            e.target\n          );\n          e.target.classList.add(\"water\");\n        },\n\n        { once: true }\n      );\n      gameboardTwoDOM.appendChild(board);\n    }\n  }\n}\n\nfunction moveStuff() {\n  const gameboardOneDOM = document.querySelector(\"#gameboardOne\");\n  const gameboardTwoDOM = document.querySelector(\"#gameboardTwo\");\n\n  createBoardsTwo();\n\n  removeShipContainer();\n\n  gameboardOneDOM.style.transform = \"scale(0.8) translate(-2rem)\";\n\n  gameboardTwoDOM.style.transform = \"scale(1)\";\n  gameboardTwoDOM.style.position = \"relative\";\n}\n\nfunction generateModal(winner) {\n  const modal = document.createElement(\"div\");\n  const overlay = document.createElement(\"div\");\n\n  modal.classList.add(\"modal\");\n\n  const button = document.createElement(\"button\");\n  button.textContent = \"Play Again\";\n  button.classList.add(\"resetBtn\");\n  button.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    location.reload();\n  });\n\n  const hTwo = document.createElement(\"h2\");\n  hTwo.textContent = `${winner}`;\n  overlay.classList.add(\"overlay\");\n\n  modal.appendChild(hTwo);\n  modal.appendChild(button);\n\n  document.querySelector(\"body\").appendChild(modal);\n  document.querySelector(\"body\").appendChild(overlay);\n}\n\n\n//# sourceURL=webpack://battleships/./src/dom.js?");

/***/ }),

/***/ "./src/drag-and-drop.js":
/*!******************************!*\
  !*** ./src/drag-and-drop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dragAndDrop)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _gameboards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboards */ \"./src/gameboards.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\nfunction dragAndDrop() {\n  const carrierDom = document.querySelector(\"#carrier\");\n  const battleshipDom = document.querySelector(\"#battleship\");\n  const destroyerOneDom = document.querySelector(\"#destroyerOne\");\n  const destroyerTwoDom = document.querySelector(\"#destroyerTwo\");\n  const submarineOneDom = document.querySelector(\"#submarineOne\");\n  const submarineTwoDom = document.querySelector(\"#submarineTwo\");\n\n  carrierDom.addEventListener(\"dragstart\", (e) => drag(e));\n  battleshipDom.addEventListener(\"dragstart\", (e) => drag(e));\n  destroyerOneDom.addEventListener(\"dragstart\", (e) => drag(e));\n  destroyerTwoDom.addEventListener(\"dragstart\", (e) => drag(e));\n  submarineOneDom.addEventListener(\"dragstart\", (e) => drag(e));\n  submarineTwoDom.addEventListener(\"dragstart\", (e) => drag(e));\n\n  carrierDom.addEventListener(\"contextmenu\", (e) => rotate(e));\n  battleshipDom.addEventListener(\"contextmenu\", (e) => rotate(e));\n  destroyerOneDom.addEventListener(\"contextmenu\", (e) => rotate(e));\n  destroyerTwoDom.addEventListener(\"contextmenu\", (e) => rotate(e));\n  submarineOneDom.addEventListener(\"contextmenu\", (e) => rotate(e));\n  submarineTwoDom.addEventListener(\"contextmenu\", (e) => rotate(e));\n\n  const towers = document.querySelectorAll(\".tower\");\n  for (const tower of towers) {\n    tower.addEventListener(\"contextmenu\", (e) => towerRotate(e));\n  }\n\n  const boards = document.querySelectorAll(\".boards\");\n  for (let board of boards) {\n    board.addEventListener(\"dragover\", (e) => allowDrop(e));\n    board.addEventListener(\"drop\", (e) => {\n      drop(e);\n    });\n  }\n}\n\nfunction rotate(e) {\n  e.preventDefault();\n  if (e.originalTarget.dataset.size == 5) {\n    if (e.originalTarget.dataset.dir === \"row\") {\n      e.originalTarget.style.flexDirection = \"column\";\n      e.originalTarget.dataset.dir = \"column\";\n      e.originalTarget.style.width = \"2rem\";\n      e.originalTarget.style.height = \"10rem\";\n    } else if (e.originalTarget.dataset.dir === \"column\") {\n      e.originalTarget.style.flexDirection = \"row\";\n      e.originalTarget.dataset.dir = \"row\";\n      e.originalTarget.style.width = \"10rem\";\n      e.originalTarget.style.height = \"2rem\";\n    }\n  }\n  if (e.originalTarget.dataset.size == 4) {\n    if (e.originalTarget.dataset.dir === \"row\") {\n      e.originalTarget.style.flexDirection = \"column\";\n      e.originalTarget.dataset.dir = \"column\";\n      e.originalTarget.style.width = \"2rem\";\n      e.originalTarget.style.height = \"8rem\";\n    } else if (e.originalTarget.dataset.dir === \"column\") {\n      e.originalTarget.style.flexDirection = \"row\";\n      e.originalTarget.dataset.dir = \"row\";\n      e.originalTarget.style.width = \"8rem\";\n      e.originalTarget.style.height = \"2rem\";\n    }\n  }\n  if (e.originalTarget.dataset.size == 3) {\n    if (e.originalTarget.dataset.dir === \"row\") {\n      e.originalTarget.style.flexDirection = \"column\";\n      e.originalTarget.dataset.dir = \"column\";\n      e.originalTarget.style.width = \"2rem\";\n      e.originalTarget.style.height = \"6rem\";\n    } else if (e.originalTarget.dataset.dir === \"column\") {\n      e.originalTarget.style.flexDirection = \"row\";\n      e.originalTarget.dataset.dir = \"row\";\n      e.originalTarget.style.width = \"6rem\";\n      e.originalTarget.style.height = \"2rem\";\n    }\n  }\n  if (e.originalTarget.dataset.size == 2) {\n    if (e.originalTarget.dataset.dir === \"row\") {\n      e.originalTarget.dataset.dir = \"column\";\n      e.originalTarget.style.width = \"2rem\";\n      e.originalTarget.style.height = \"4rem\";\n    } else if (e.originalTarget.dataset.dir === \"column\") {\n      e.originalTarget.dataset.dir = \"row\";\n      e.originalTarget.style.width = \"4rem\";\n      e.originalTarget.style.height = \"2rem\";\n    }\n  }\n}\nfunction towerRotate(e) {\n  e.preventDefault();\n  const target = e.srcElement.parentElement;\n  if (target.dataset.size == 5) {\n    if (target.dataset.dir === \"row\") {\n      target.style.flexDirection = \"column\";\n      target.dataset.dir = \"column\";\n      target.style.width = \"2rem\";\n      target.style.height = \"10rem\";\n    } else if (target.dataset.dir === \"column\") {\n      target.style.flexDirection = \"row\";\n      target.dataset.dir = \"row\";\n      target.style.width = \"10rem\";\n      target.style.height = \"2rem\";\n    }\n  }\n  if (target.dataset.size == 4) {\n    if (target.dataset.dir === \"row\") {\n      target.style.flexDirection = \"column\";\n      target.dataset.dir = \"column\";\n      target.style.width = \"2rem\";\n      target.style.height = \"8rem\";\n    } else if (target.dataset.dir === \"column\") {\n      target.style.flexDirection = \"row\";\n      target.dataset.dir = \"row\";\n      target.style.width = \"8rem\";\n      target.style.height = \"2rem\";\n    }\n  }\n  if (target.dataset.size == 3) {\n    if (target.dataset.dir === \"row\") {\n      target.style.flexDirection = \"column\";\n      target.dataset.dir = \"column\";\n      target.style.width = \"2rem\";\n      target.style.height = \"6rem\";\n    } else if (target.dataset.dir === \"column\") {\n      target.style.flexDirection = \"row\";\n      target.dataset.dir = \"row\";\n      target.style.width = \"6rem\";\n      target.style.height = \"2rem\";\n    }\n  }\n  if (target.dataset.size == 2) {\n    if (target.dataset.dir === \"row\") {\n      target.dataset.dir = \"column\";\n      target.style.width = \"2rem\";\n      target.style.height = \"4rem\";\n    } else if (target.dataset.dir === \"column\") {\n      target.dataset.dir = \"row\";\n      target.style.width = \"4rem\";\n      target.style.height = \"2rem\";\n    }\n  }\n}\nfunction drag(e) {\n  e.dataTransfer.setData(\"ship\", e.originalTarget.id);\n}\nfunction allowDrop(e) {\n  e.preventDefault();\n}\nfunction drop(e) {\n  e.preventDefault();\n  var shipId = e.dataTransfer.getData(\"ship\");\n  const ship = document.querySelector(`#${shipId}`);\n  if (\n    (0,_gameboards__WEBPACK_IMPORTED_MODULE_1__.isPlacementPossible)(\n      e.originalTarget.dataset.row,\n      e.originalTarget.dataset.column,\n      ship.dataset.size,\n      ship.dataset.dir\n    ) &&\n    !e.target.hasChildNodes()\n  ) {\n    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.addShip(\n      e.originalTarget.dataset.row,\n      e.originalTarget.dataset.column,\n      new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n        document.querySelector(`#${shipId}`).dataset.size,\n        document.querySelector(`#${shipId}`).dataset.dir\n      )\n    );\n    e.target.appendChild(document.querySelector(`#${shipId}`));\n    let oldElement = document.getElementById(`${shipId}`);\n    let newElement = oldElement.cloneNode(true);\n    oldElement.parentNode.replaceChild(newElement, oldElement);\n    document.getElementById(`${shipId}`).removeAttribute(\"draggable\");\n  } else return;\n\n  if (_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.ships.length === 6) (0,_dom__WEBPACK_IMPORTED_MODULE_3__.moveStuff)();\n}\n\n\n//# sourceURL=webpack://battleships/./src/drag-and-drop.js?");

/***/ }),

/***/ "./src/gameboards.js":
/*!***************************!*\
  !*** ./src/gameboards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard),\n/* harmony export */   isPlacementPossible: () => (/* binding */ isPlacementPossible),\n/* harmony export */   score: () => (/* binding */ score)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gamelogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamelogic.js */ \"./src/gamelogic.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nclass Gameboard {\n  constructor(ships = [], shots = []) {\n    this.ships = ships;\n    this.shots = shots;\n  }\n\n  addShip(coordRow, coordColumn, ship) {\n    const temp = [];\n    const tempTwo = [];\n    if (ship.dir === \"row\") {\n      for (let i = 0; i < ship.size; i++) {\n        temp.push(parseInt(coordRow));\n        tempTwo.push(parseInt(coordColumn) + i);\n      }\n    }\n    if (ship.dir === \"column\") {\n      for (let i = 0; i < ship.size; i++) {\n        temp.push(parseInt(coordRow) + i);\n        tempTwo.push(parseInt(coordColumn));\n      }\n    }\n\n    if (isPlacementPossible(coordRow, coordColumn, ship, ship.dir)) {\n      const x = [temp, tempTwo, ship];\n      this.ships.push(x);\n    }\n  }\n\n  addShipRandom(coordRow, coordColumn, ship, dir) {\n    const temp = [];\n    const tempTwo = [];\n    if (dir === \"row\") {\n      for (let i = 0; i < ship.size; i++) {\n        temp.push(parseInt(coordRow));\n        tempTwo.push(parseInt(coordColumn) + i);\n      }\n    }\n    if (dir === \"column\") {\n      for (let i = 0; i < ship.size; i++) {\n        temp.push(parseInt(coordRow) + i);\n        tempTwo.push(parseInt(coordColumn));\n      }\n    }\n    const x = [temp, tempTwo, ship];\n    this.ships.push(x);\n  }\n\n  recieveAttack(coordRow, coordColumn, e) {\n    e.classList.add(\"water\");\n    this.ships.forEach((element) => {\n      for (let i = 0; i < element[0].length; i++) {\n        if (element[0][i] == coordRow && element[1][i] == coordColumn) {\n          e.classList.remove(\"water\");\n          e.classList.add(\"ship\");\n          element[2].hit();\n          element[2].sink();\n          (0,_gamelogic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n          break;\n        }\n      }\n    });\n    this.shots.push([coordRow, coordColumn]);\n    _index_js__WEBPACK_IMPORTED_MODULE_2__.gameboardOne.recieveRandomAttack();\n  }\n\n  recieveRandomAttack() {\n    let row = Math.floor(Math.random() * 10) + 1;\n    let column = Math.floor(Math.random() * 10) + 1;\n    while (this.isCellEmpty(row, column)) {\n      row = Math.floor(Math.random() * 10) + 1;\n      column = Math.floor(Math.random() * 10) + 1;\n    }\n    let cell = document.querySelector(\n      `#gameboardOne > .boards[data-row=\"${row}\"][data-column=\"${column}\"]`\n    );\n    cell.classList.add(\"water\");\n    this.ships.forEach((element) => {\n      for (let i = 0; i < element[0].length; i++) {\n        if (element[0][i] == row && element[1][i] == column) {\n          cell.classList.remove(\"water\");\n          cell.classList.add(\"ship\");\n          element[2].hit();\n          element[2].sink();\n          (0,_gamelogic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n          break;\n        }\n      }\n    });\n    this.shots.push([row, column]);\n  }\n\n  isCellEmpty(row, column) {\n    let empty = false;\n\n    _index_js__WEBPACK_IMPORTED_MODULE_2__.gameboardOne.shots.forEach((element) => {\n      if (element[0] == row && element[1] == column) {\n        return (empty = true);\n      }\n    });\n    return empty;\n  }\n\n  placeShipsRandomly() {\n    const ships = [];\n    const carrier = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n    const battleship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n    const destroyerOne = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const destroyerTwo = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const submarineOne = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n    const submarineTwo = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n    ships.push(\n      carrier,\n      battleship,\n      destroyerOne,\n      destroyerTwo,\n      submarineOne,\n      submarineTwo\n    );\n    let correctPlacement = 0;\n\n    while (correctPlacement <= 5) {\n      const row = Math.floor(Math.random() * 10) + 1;\n      const column = Math.floor(Math.random() * 10) + 1;\n      const dir = Math.floor(Math.random() * 2) === 1 ? \"row\" : \"column\";\n      if (isPlacementPossible(row, column, ships[correctPlacement].size, dir)) {\n        ships[correctPlacement].dir = dir;\n        this.addShipRandom(row, column, ships[correctPlacement], dir);\n        correctPlacement++;\n      }\n    }\n  }\n}\n\nfunction isPlacementPossible(row, column, size, dir) {\n  let result = true;\n  if (row <= 0 || row > 10 || column <= 0 || column > 10) result = false;\n\n  if (size == 5) {\n    if (column > 6 && dir == \"row\") result = false;\n    if (row > 6 && dir == \"column\") result = false;\n    _index_js__WEBPACK_IMPORTED_MODULE_2__.gameboardOne.ships.forEach((element) => {\n      for (let i = 0; i < element[0].length; i++) {\n        for (let j = 0; j < size; j++) {\n          if (\n            element[0][i] == row &&\n            element[1][i] == column + j &&\n            dir == \"row\"\n          )\n            return (result = false);\n          else if (\n            element[0][i] == row + j &&\n            element[1][i] == column &&\n            dir == \"column\"\n          )\n            return (result = false);\n        }\n      }\n    });\n  }\n\n  if (size == 4) {\n    if (column > 7 && dir == \"row\") result = false;\n    if (row > 7 && dir == \"column\") result = false;\n    _index_js__WEBPACK_IMPORTED_MODULE_2__.gameboardOne.ships.forEach((element) => {\n      for (let i = 0; i < element[0].length; i++) {\n        for (let j = -1; j <= 1; j++) {\n          if (\n            element[0][i] == row + size &&\n            element[1][i] == column &&\n            dir == \"column\"\n          )\n            result = false;\n          if (\n            element[0][i] == row &&\n            element[1][i] == parseInt(column) + parseInt(size) &&\n            dir == \"row\"\n          )\n            result = false;\n        }\n      }\n    });\n  }\n\n  if (size == 3) {\n    if (column > 8 && dir == \"row\") result = false;\n    if (row > 8 && dir == \"column\") result = false;\n  }\n\n  if (size == 2) {\n    if (column > 9 && dir == \"row\") result = false;\n    if (row > 9 && dir == \"column\") result = false;\n  }\n\n  _index_js__WEBPACK_IMPORTED_MODULE_2__.gameboardOne.ships.forEach((element) => {\n    for (let i = 0; i < element[0].length; i++) {\n      if (element[0][i] == row && element[1][i] == column) {\n        return (result = false);\n      }\n    }\n  });\n\n  return result;\n}\n\nfunction score(gameboard) {\n  let num = 0;\n  gameboard.ships.forEach((element) => {\n    if (element[2].isSunk === true) {\n      num++;\n    }\n  });\n  if (num === 6) return true;\n  else return false;\n}\n\n\n//# sourceURL=webpack://battleships/./src/gameboards.js?");

/***/ }),

/***/ "./src/gamelogic.js":
/*!**************************!*\
  !*** ./src/gamelogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isGameOver)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _gameboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboards */ \"./src/gameboards.js\");\n\n\n\n\nfunction isGameOver() {\n  if ((0,_gameboards__WEBPACK_IMPORTED_MODULE_2__.score)(___WEBPACK_IMPORTED_MODULE_0__.gameboardTwo)) (0,_dom__WEBPACK_IMPORTED_MODULE_1__.generateModal)(\"You win\");\n  if ((0,_gameboards__WEBPACK_IMPORTED_MODULE_2__.score)(___WEBPACK_IMPORTED_MODULE_0__.gameboardOne)) (0,_dom__WEBPACK_IMPORTED_MODULE_1__.generateModal)(\"Enemy wins\");\n}\n\n\n//# sourceURL=webpack://battleships/./src/gamelogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   gameboardOne: () => (/* binding */ gameboardOne),\n/* harmony export */   gameboardTwo: () => (/* binding */ gameboardTwo),\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboards.js */ \"./src/gameboards.js\");\n/* harmony import */ var _drag_and_drop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-and-drop.js */ \"./src/drag-and-drop.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _gamelogic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamelogic.js */ \"./src/gamelogic.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./players */ \"./src/players.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst gameboardOne = new _gameboards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst gameboardTwo = new _gameboards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nconst player = new _players__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nconst computer = new _players__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.createGameboardTwoDom)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.createBoardsOne)();\n(0,_drag_and_drop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\ngameboardTwo.placeShipsRandomly();\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(hasPriority) {\n    this.hasPriority = hasPriority;\n  }\n}\n\n\n//# sourceURL=webpack://battleships/./src/players.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(size, dir = \"row\", hits = 0, isSunk = false) {\n    this.size = size;\n    this.dir = dir;\n    this.hits = hits;\n    this.isSunk = isSunk;\n  }\n\n  hit() {\n    this.hits = this.hits + 1;\n  }\n\n  sink() {\n    if (this.hits == this.size) this.isSunk = true;\n  }\n}\n\n\n//# sourceURL=webpack://battleships/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;