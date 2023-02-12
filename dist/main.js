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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;0,6..96,800;0,6..96,900;1,6..96,400;1,6..96,500;1,6..96,600;1,6..96,700;1,6..96,800;1,6..96,900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Fugaz+One&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Varela+Round&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    width: 100%;\\n    height: 100%;\\n    margin: 0;\\n    padding: 0;\\n}\\nhtml {\\n    width: 100%;\\n    height: 100%;\\n    max-width: 100%;\\n    margin: 0;\\n    padding: 0;\\n    font-size: 12px;\\n    overflow: hidden;\\n}\\nbody {\\n    width: 100%;\\n    height: 100%;\\n    max-width: 100%;\\n    margin: 0;\\n    padding: 0;\\n    overflow: auto;\\n    background-color: #f4f1de;\\n}\\n.header {\\n    width: 100%;\\n    height: 20%;\\n    background-color: #81b29a;\\n    display: flex;\\n    \\n}\\n.header-logo {\\n    width: 50%;\\n    height: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 3rem;\\n    font-family: 'Bodoni Moda', sans-serif;\\n    font-style: italic;\\n    font-weight: 700;\\n}\\n.nav-bar {\\n    height: 100%;\\n    width: 50%;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n}\\n.nav-element {\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n   font-size: 1.5rem;\\n   color: black;\\n   height: 10%;\\n   font-family: 'Valera Round', sans-serif;\\n   font-weight: 700;\\n}\\n.nav-element:hover {\\n    color: #f4f1de; \\n}\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    overflow: hidden;\\n}\\n.content-container {\\n    height: 80%;\\n    overflow: scroll;\\n}\\n/* create all of the homepage content stylings */\\n.main-content {\\n    height: 100%;\\n    width: 100%;\\n    overflow: scroll;\\n    scroll-snap-type: mandatory;\\n}\\n.location {\\n    height: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n}\\n.map {\\n    height: 80%;\\n    width: 40%;\\n}\\n.location-text {\\n    font-size: 1.2rem;\\n    width: 40%;\\n    height: 80%;\\n    font-family: 'Montserrat', sans-serif;\\n    font-weight: 300;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n}\\n/*create about page stylings */\\n.about-div {\\n    height: 100%;\\n    width: 100%;\\n    overflow: scroll;\\n    display: flex; \\n    align-items: center;\\n    flex-direction: column;\\n   \\n   \\n}\\n.about-header {\\n    flex-shrink: 0;\\n    height: 20%;\\n    width: 80%;\\n    font-size: 3rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border-bottom: 1px solid gray;\\n    font-family: 'europa', sans-serif;\\n    font-weight: 700;\\n   \\n    \\n}\\n.about-text {\\n    flex-shrink: 0;\\n    font-size: 1.8rem;\\n    height: 80%;\\n    width: 80%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border-bottom: 1px solid gray;\\n    font-family: 'Montserrat', sans-serif;\\n}\\n.about-images {\\n    flex-shrink: 0;\\n    height: 50%;\\n    border-bottom: 1px solid gray;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 2%; \\n}\\n.about-img {\\n    width: 20%;\\n    height: 80%;\\n   \\n}\\n/* menu page stylings*/\\n.menu-div {\\n   height: auto;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n   padding-top: 5%;\\n   padding-bottom: 5%;\\n}\\n\\n\\n.menu-item {\\n    display: flex;\\n    flex-direction: row;\\n    width: 40%;\\n    height: 35vh;\\n    margin-top: 1%;\\n    margin-bottom: 1%;\\n    \\n}\\n\\n.menu-img {\\n    width: 50%;\\n    height: 100%;\\n}\\n.menu-one-text {\\n    width: 50%;\\n    height: 100%;\\n    \\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    \\n}\\n.menu-header {\\n    font-family: 'EB Garamond', sans-serif;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    width: 80%;\\n    height: 20%;\\n    margin-left: 5%;\\n}\\n.menu-one-times {\\n    font-style: italic;\\n    font-size: 2rem;\\n    width: 80%;\\n    height: 20%;\\n    margin-left: 5%;\\n    margin-top: 2%;\\n}\\n.menu-one-desc {\\n    width: 80%;\\n    height: 10%;\\n    margin-left: 5%;\\n    font-style: italic;\\n}\\n.menu-one-btn {\\n    height: 15%;\\n    border: 2px solid black;\\n    width: 40%;\\n    font-family: Arial, Helvetica, sans-serif;\\n    font-weight: 400;\\n    font-size: 1rem;\\n    margin-left: 5%;\\n    background-color: #f4f1de;\\n}\\n.menu-one-btn:hover {\\n    background-color: black;\\n    color: white;\\n}\\n.menu-two-btn:hover {\\n    background-color: black;\\n    color: white;\\n}\\n.menu-three-btn:hover {\\n    background-color: black;\\n    color: white;\\n}\\n.menu-four-btn:hover {\\n    background-color: black;\\n    color: white;\\n}\\n.menu-two-text, .menu-three-text, .menu-four-text, .menu-six-text {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 50%;\\n    height: 100%;\\n}\\n.menu-two-header, .menu-three-header, .menu-four-header, .menu-six-header {\\n    font-family: 'EB Garamond', sans-serif;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    width: 40%;\\n    height: 20%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    \\n}\\n .menu-two-btn, .menu-three-btn, .menu-four-btn, .menu-six-btn {\\n    height: 15%;\\n    border: 2px solid black;\\n    width: 40%;\\n    font-family: Arial, Helvetica, sans-serif;\\n    font-weight: 400;\\n    font-size: 1rem;\\n    background-color: #f4f1de;\\n}\\n.menu-five-btn-1, .menu-five-btn-2 {\\n    font-style: italic;\\n    text-decoration: underline;\\n    height: 10%;\\n    width: 40%;\\n    font-size: 1rem;\\n    margin-left: 5%;\\n}\\n.menu-five-text {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    width: 50%;\\n    height: 100%;\\n   \\n}\\n.menu-five-header {\\n    font-family: 'EB Garamond', sans-serif;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    width: 40%;\\n    height: 20%;\\n    display: flex;\\n    align-items: flex-start; \\n    justify-content: flex-start;\\n    margin-left: 5%;\\n}\\n/* contact page div */\\n.contact-div {\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n} \\n.contact-header {\\n    height: 20%;\\n    width: 80%;\\n    border-bottom: 1px solid gray;\\n    font-family: 'europa', sans-serif; \\n    font-weight: 700;\\n    font-size: 3rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n.contact-text {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    width: 80%;\\n    height: auto; \\n    border-bottom: 1px solid gray;\\n    padding-top: 5%;\\n    padding-bottom: 5%;\\n}\\n.contact-text h1 {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 2rem;\\n    font-family: 'europa', sans-serif;\\n    font-weight: 400;\\n}\\n.contact-text p {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 1.5rem;\\n    font-family: 'Montserrat', sans-serif;\\n}\\n.contact-text span {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 1.5rem;\\n    font-family: 'Montserrat', sans-serif;\\n    text-decoration: underline;\\n}\\n.contact-text b {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 1.5rem;\\n    font-family: 'Montserrat', sans-serif;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPage\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _images_finedining1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/finedining1.jpeg */ \"./src/images/finedining1.jpeg\");\n/* harmony import */ var _images_finedining2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/finedining2.jpeg */ \"./src/images/finedining2.jpeg\");\n/* harmony import */ var _images_finedinging3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/finedinging3.jpeg */ \"./src/images/finedinging3.jpeg\");\n/* harmony import */ var _images_finedining4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/finedining4.jpeg */ \"./src/images/finedining4.jpeg\");\n \n \n \n \n\n\nfunction aboutPage() {\n\n  \nconst container = document.querySelector('#content'); \nconst contentContainer = document.querySelector('.content-container'); \n//create about div\nconst aboutDiv = document.createElement('div'); \naboutDiv.classList.add('about-div'); \ncontentContainer.appendChild(aboutDiv); \n\n//create about header\nconst aboutHeader = document.createElement('div'); \naboutHeader.classList.add('about-header'); \naboutDiv.appendChild(aboutHeader); \naboutHeader.textContent = 'ABOUT US'; \n\n//create about content\nconst aboutText = document.createElement('div'); \naboutText.classList.add('about-text'); \naboutDiv.appendChild(aboutText);\naboutText.innerHTML = 'In November of 2021, Restaurant reopened with new owners for the first time since 1984. After closing for 18 months during the pandemic, Restaurant came back with an updated name—trading “Bar and Grill” for “Restaurant”— a redesigned interior by its original architect Jimmy Babette, and a new menu with longtime former pastry chef Bob Johnson in the role of executive chef.<br><br> Historically decorated with an unprecedented six three-star New York Times reviews, Restaurant\\'s new owners—former Managing Partner Tony Honephorner and environmentalist Balls Sack—sought to honor this legacy while ushering Restaurant into a greener, more mindful era. Filling the restaurant with books, music, and art to complement its world-class dining, Billy\\'s stated goal is to make Restaurant “the most meaningful restaurant in New York.” Arts and dining programming, from evening jazz to exclusive wine dinners, make Restaurant a vibrant, ever-evolving destination like the city it calls home.<br><br> Over the years a host of iconic chefs have cut their teeth in Restaurant kitchen. With Restaurant\\'s four decades of culinary history behind him, Bobby has captured the spirit of Restaurant\\'s approachable yet unforgettable cuisine while introducing his own vision for the menu. The goal to provide unpretentious service in an environment that inspires you and your conversation remains the same today as in 1984.'; \n\n//create about images\nconst aboutImages = document.createElement('div'); \naboutImages.classList.add('about-images'); \naboutDiv.appendChild(aboutImages); \n\nconst aboutImgOne = new Image(); \naboutImgOne.src = _images_finedining1_jpeg__WEBPACK_IMPORTED_MODULE_0__; \naboutImgOne.classList.add('about-img'); \nconst aboutImgTwo = new Image(); \naboutImgTwo.src = _images_finedining2_jpeg__WEBPACK_IMPORTED_MODULE_1__; \naboutImgTwo.classList.add('about-img'); \nconst aboutImgThree = new Image(); \naboutImgThree.src = _images_finedinging3_jpeg__WEBPACK_IMPORTED_MODULE_2__; \naboutImgThree.classList.add('about-img'); \nconst aboutImgFour = new Image(); \naboutImgFour.src = _images_finedining4_jpeg__WEBPACK_IMPORTED_MODULE_3__; \naboutImgFour.classList.add('about-img'); \n\naboutImages.append(aboutImgOne, aboutImgTwo, aboutImgThree, aboutImgFour); \n\n\n\n\n\n\n}; \n\n\n \n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n\n    const container = document.querySelector('#content'); \n    const contentContainer = document.querySelector('.content-container'); \n\n    const contactDiv = document.createElement('div'); \n    contactDiv.classList.add('contact-div'); \n    contentContainer.appendChild(contactDiv); \n\n    const contactHeader = document.createElement('div'); \n    contactHeader.classList.add('contact-header'); \n    contactDiv.appendChild(contactHeader); \n    contactHeader.textContent = 'CONTACT';\n\n    const contactText = document.createElement('div'); \n    contactText.classList.add('contact-text'); \n    contactText.innerHTML = '<h1>PRESS INQUIRIES</h1><br><br><p><b>Dick Cheese</b></p><br><span>Dick@Restaurant.Restaurant</span><br><br><br><h1>RESTAURANT CHOCOLATES</h1><br><br><p>PLEASE CONTACT</p><br><span>Chocolates@Restaurant.Restaurant</span> '\n    contactDiv.appendChild(contactText); \n\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _images_Carne_Mare_Read_McKendree_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Carne-Mare-Read-McKendree.jpeg */ \"./src/images/Carne-Mare-Read-McKendree.jpeg\");\n\n\n\n// create homepage\nfunction homePage() {\n   \n    \n    const container = document.querySelector('#content'); \n    const contentContainer = document.querySelector('.content-container'); \n    const mainImageDiv = document.createElement('div'); \n    mainImageDiv.classList.add('main-content'); \n    contentContainer.appendChild(mainImageDiv); \n\n    const mainImg = new Image(); \n    mainImg.src = _images_Carne_Mare_Read_McKendree_jpeg__WEBPACK_IMPORTED_MODULE_0__; \n    mainImg.classList.add('main-image'); \n    mainImageDiv.appendChild(mainImg); \n\n    //location content\n\n    const locationDiv = document.createElement('div'); \n    locationDiv.classList.add('location'); \n    mainImageDiv.appendChild(locationDiv); \n\n    //location text \n    const locationText = document.createElement('div'); \n    locationText.classList.add('location-text'); \n    locationText.innerHTML = `<h1><u>Hours &amp; Location</u></h1><br><br><span><b>Tuesday-Sunday</b></span><br><br><span><b>Dinner:</b> 5pm to 10pm</span><br><br><span><b>Breakfast: </b> 7:30am to 10:30am</span><br><br><span><b>Lunch:</b> 12pm to 2:30PM (Thursday & Friday only)</span><br><br><span><b>Weekend Brunch:</b> 10am to 2:30pm</span>`; \n    locationDiv.appendChild(locationText); \n\n    function initMap() {\n        const mapDiv= document.createElement('div'); \n        mapDiv.classList.add('map'); \n        locationDiv.appendChild(mapDiv)\n      \n        mapDiv.innerHTML = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388616.6560445083!2d-74.19946370213873!3d40.451640191993164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1675910989646!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`; \n        \n\n\n    \n    }\n    initMap(); \n    \n\n    \n\n}\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n\n \n\n\n\n(0,_navbar_js__WEBPACK_IMPORTED_MODULE_2__.createNav)(); \n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.homePage)(); \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _images_menuimg1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menuimg1.jpeg */ \"./src/images/menuimg1.jpeg\");\n/* harmony import */ var _images_menuimg2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menuimg2.jpeg */ \"./src/images/menuimg2.jpeg\");\n/* harmony import */ var _images_menuimg3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menuimg3.jpeg */ \"./src/images/menuimg3.jpeg\");\n/* harmony import */ var _images_menuimg4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menuimg4.jpeg */ \"./src/images/menuimg4.jpeg\");\n/* harmony import */ var _images_menuimg5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menuimg5.png */ \"./src/images/menuimg5.png\");\n/* harmony import */ var _images_menuimg6_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menuimg6.jpeg */ \"./src/images/menuimg6.jpeg\");\n \n \n \n \n \n \n\n\nfunction menuPage() {\n \n    const container = document.querySelector('#content'); \n    const contentContainer = document.querySelector('.content-container'); \n    //create menu div and item container\n    const menuDiv = document.createElement('div'); \n    menuDiv.classList.add('menu-div'); \n    contentContainer.appendChild(menuDiv); \n\n    // create six divs for each menu \n    const menuItemOne = document.createElement('div'); \n    const menuItemTwo = document.createElement('div'); \n    const menuItemThree = document.createElement('div'); \n    const menuItemFour = document.createElement('div'); \n    const menuItemFive = document.createElement('div'); \n    const menuItemSix = document.createElement('div'); \n\n    menuItemOne.classList.add('menu-item'); \n    menuItemTwo.classList.add('menu-item'); \n    menuItemThree.classList.add('menu-item'); \n    menuItemFour.classList.add('menu-item'); \n    menuItemFive.classList.add('menu-item'); \n    menuItemSix.classList.add('menu-item'); \n\n    menuDiv.append(menuItemOne, menuItemTwo, menuItemThree, menuItemFour, menuItemFive, menuItemSix);  \n\n    // two divs for each menu item, one for image , one for description\n    const menuOneImg = new Image(); \n    menuOneImg.src = _images_menuimg1_jpeg__WEBPACK_IMPORTED_MODULE_0__; \n    menuOneImg.classList.add('menu-img'); \n\n    const menuTwoImg = new Image(); \n    menuTwoImg.src = _images_menuimg2_jpeg__WEBPACK_IMPORTED_MODULE_1__; \n    menuTwoImg.classList.add('menu-img'); \n\n    const menuThreeImg = new Image(); \n    menuThreeImg.src = _images_menuimg3_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n    menuThreeImg.classList.add('menu-img'); \n\n    const menuFourImg = new Image(); \n    menuFourImg.src = _images_menuimg4_jpeg__WEBPACK_IMPORTED_MODULE_3__; \n    menuFourImg.classList.add('menu-img'); \n\n    const menuFiveImg = new Image(); \n    menuFiveImg.src = _images_menuimg5_png__WEBPACK_IMPORTED_MODULE_4__; \n    menuFiveImg.classList.add('menu-img'); \n\n    const menuSixImg = new Image(); \n    menuSixImg.src = _images_menuimg6_jpeg__WEBPACK_IMPORTED_MODULE_5__; \n    menuSixImg.classList.add('menu-img'); \n\n    const menuOneText = document.createElement('div'); \n    menuOneText.classList.add('menu-one-text'); \n\n    const menuTwoText = document.createElement('div'); \n    menuTwoText.classList.add('menu-two-text'); \n\n    const menuThreeText = document.createElement('div'); \n    menuThreeText.classList.add('menu-three-text'); \n\n    const menuFourText = document.createElement('div'); \n    menuFourText.classList.add('menu-four-text'); \n\n    const menuFiveText = document.createElement('div'); \n    menuFiveText.classList.add('menu-five-text'); \n\n    const menuSixText = document.createElement('div'); \n    menuSixText.classList.add('menu-six-text'); \n\n    // append all images and text divs to corresponding item divs\n    menuItemOne.append(menuOneImg, menuOneText); \n    menuItemTwo.append(menuTwoText, menuTwoImg); \n    menuItemThree.append(menuThreeImg, menuThreeText); \n    menuItemFour.append(menuFourText, menuFourImg); \n    menuItemFive.append(menuFiveImg, menuFiveText); \n    menuItemSix.append(menuSixText, menuSixImg); \n\n    // add text and buttons to all text divs\n    //div one\n    const menuOneHeader = document.createElement('div');\n    menuOneText.appendChild(menuOneHeader); \n    menuOneHeader.classList.add('menu-header');\n    menuOneHeader.innerHTML = 'VALENTINE\\'S DAY<br>DINNER';\n    const menuOneTimes = document.createElement('div'); \n    menuOneTimes.classList.add('menu-one-times'); \n    menuOneText.appendChild(menuOneTimes); \n    menuOneTimes.textContent = '5-10pm'\n    const menuOneDescription = document.createElement('div'); \n    menuOneDescription.classList.add('menu-one-desc');\n    menuOneText.appendChild(menuOneDescription); \n    menuOneDescription.textContent = 'Four-course menu, $195'; \n    const menuoneBtn = document.createElement('button'); \n    menuoneBtn.classList.add('menu-one-btn'); \n    menuoneBtn.textContent = 'VIEW MENU'\n    menuOneText.appendChild(menuoneBtn);\n  \n    //div two\n    const menuTwoHeader = document.createElement('div'); \n    menuTwoHeader.classList.add('menu-two-header'); \n    menuTwoHeader.textContent = 'LUNCH'\n    menuTwoText.appendChild(menuTwoHeader); \n    const menuTwoButton = document.createElement('button'); \n    menuTwoButton.classList.add('menu-two-btn'); \n    menuTwoButton.textContent = 'VIEW MENU'; \n    menuTwoText.appendChild(menuTwoButton); \n    \n    // div three\n    const menuThreeHeader = document.createElement('div'); \n    menuThreeHeader.classList.add('menu-three-header'); \n    menuThreeHeader.textContent = 'DINNER'\n    menuThreeText.appendChild(menuThreeHeader); \n    const menuThreeButton = document.createElement('button'); \n    menuThreeButton.classList.add('menu-three-btn'); \n    menuThreeButton.textContent = 'VIEW MENU'; \n    menuThreeText.appendChild(menuThreeButton); \n    //div four \n    const menuFourHeader = document.createElement('div'); \n    menuFourHeader.classList.add('menu-four-header'); \n    menuFourHeader.textContent = 'DESSERT'\n    menuFourText.appendChild(menuFourHeader); \n    const menuFourButton = document.createElement('button'); \n    menuFourButton.classList.add('menu-four-btn'); \n    menuFourButton.textContent = 'VIEW MENU'; \n    menuFourText.appendChild(menuFourButton);\n    // dive five\n    const menuFiveHeader = document.createElement('div'); \n    menuFiveHeader.classList.add('menu-five-header'); \n    menuFiveHeader.textContent = 'BAR'\n    menuFiveText.appendChild(menuFiveHeader); \n    const menuFiveBtnOne = document.createElement('a'); \n    const menuFiveBtnTwo = document.createElement('a'); \n    menuFiveBtnOne.classList.add('menu-five-btn-1');  \n    menuFiveBtnTwo.classList.add('menu-five-btn-1'); \n    menuFiveBtnOne.textContent = 'Menu'\n    menuFiveBtnTwo.textContent = 'Cocktails'\n    menuFiveText.append(menuFiveBtnOne, menuFiveBtnTwo); \n    //div six\n    const menuSixHeader = document.createElement('div'); \n    menuSixHeader.classList.add('menu-six-header'); \n    menuSixHeader.textContent = 'WINE LIST'\n    menuSixText.appendChild(menuSixHeader); \n    const menuSixButton = document.createElement('button'); \n    menuSixButton.classList.add('menu-six-btn'); \n    menuSixButton.textContent = 'VIEW LIST'; \n    menuSixText.appendChild(menuSixButton);\n}\n\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n \n \n\n \nfunction createNav() {\n    const container = document.querySelector('#content'); \n\n    //create navbar and navbar elements\n    const header = document.createElement('div'); \n    header.classList.add('header'); \n    container.prepend(header); \n\n    const navBar = document.createElement('nav'); \n    navBar.classList.add('nav-bar'); \n    const logo = document.createElement('div'); \n    logo.classList.add('header-logo'); \n\n    header.appendChild(logo); \n    header.appendChild(navBar); \n\n    logo.textContent = 'RESTAURANT.';\n\n    const navZero = document.createElement('a'); \n    const navOne = document.createElement('a'); \n    const navTwo = document.createElement('a'); \n    const navThree = document.createElement('a'); \n    \n    navZero.classList.add('nav-element'); \n    navOne.classList.add('nav-element'); \n    navTwo.classList.add('nav-element'); \n    navThree.classList.add('nav-element'); \n\n    navZero.setAttribute('id', 'home-btn'); \n    navOne.setAttribute('id', 'about-btn'); \n    navTwo.setAttribute('id', 'menu-btn'); \n    navThree.setAttribute('id', 'contact-btn'); \n\n    navZero.textContent = 'HOME'; \n    navOne.textContent = 'ABOUT'; \n    navTwo.textContent = 'MENU'; \n    navThree.textContent = 'CONTACT'; \n\n    navBar.append(navZero,navOne, navTwo, navThree); \n\n\n    const contentContainer = document.querySelector('.content-container')\nconst homeBtn = document.getElementById('home-btn'); \nconst aboutBtn = document.getElementById('about-btn'); \nconst menuBtn = document.getElementById('menu-btn'); \nconst contactBtn = document.getElementById('contact-btn'); \nlet currentPage = 'home'; \nhomeBtn.addEventListener('click', function() {\nconsole.log(currentPage); \n\nif(currentPage === 'home') {\n    return; \n} else {\n    currentPage = 'home';\n    contentContainer.innerHTML = ''; \n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.homePage)(); \n}\n\nconsole.log(currentPage); \n})\n\naboutBtn.addEventListener('click', function() {\n    console.log(currentPage);\n    if(currentPage === 'about') {\n        return; \n    } else  {\n           currentPage = 'about'; \n           contentContainer.innerHTML = '';  \n           (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.aboutPage)();\n        }\n    \n\n\n   console.log(currentPage); \n }); \n\nmenuBtn.addEventListener('click', function() {\nconsole.log(currentPage); \nif (currentPage === 'menu') {\n    return; \n} else {\n    currentPage = 'menu'; \n    contentContainer.innerHTML = '';  \n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)(); \n}\n}); \n\ncontactBtn.addEventListener('click', function() {\n    if(currentPage === 'contact') {\n        return\n    } else {\n        currentPage = 'contact';\n        contentContainer.innerHTML = ''; \n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactPage)(); \n    }\n}); \n    \n}; \n\n\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/images/Carne-Mare-Read-McKendree.jpeg":
/*!***************************************************!*\
  !*** ./src/images/Carne-Mare-Read-McKendree.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57ba7a2bbb9ec7fe7a50.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Carne-Mare-Read-McKendree.jpeg?");

/***/ }),

/***/ "./src/images/finedinging3.jpeg":
/*!**************************************!*\
  !*** ./src/images/finedinging3.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aca93210cf34870f7b8d.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/finedinging3.jpeg?");

/***/ }),

/***/ "./src/images/finedining1.jpeg":
/*!*************************************!*\
  !*** ./src/images/finedining1.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7479c130bc37d575a7e4.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/finedining1.jpeg?");

/***/ }),

/***/ "./src/images/finedining2.jpeg":
/*!*************************************!*\
  !*** ./src/images/finedining2.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8489bfc6d61a5bf1b93.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/finedining2.jpeg?");

/***/ }),

/***/ "./src/images/finedining4.jpeg":
/*!*************************************!*\
  !*** ./src/images/finedining4.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06a721e21a9b24947a26.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/finedining4.jpeg?");

/***/ }),

/***/ "./src/images/menuimg1.jpeg":
/*!**********************************!*\
  !*** ./src/images/menuimg1.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ded37cdfd817e3d69dcf.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menuimg1.jpeg?");

/***/ }),

/***/ "./src/images/menuimg2.jpeg":
/*!**********************************!*\
  !*** ./src/images/menuimg2.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4810d948f1dff3b497d3.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menuimg2.jpeg?");

/***/ }),

/***/ "./src/images/menuimg3.jpeg":
/*!**********************************!*\
  !*** ./src/images/menuimg3.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d9bf675ad7162000dbd.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menuimg3.jpeg?");

/***/ }),

/***/ "./src/images/menuimg4.jpeg":
/*!**********************************!*\
  !*** ./src/images/menuimg4.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d690a367ba377056ef62.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menuimg4.jpeg?");

/***/ }),

/***/ "./src/images/menuimg5.png":
/*!*********************************!*\
  !*** ./src/images/menuimg5.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd0efea5f16585688e1c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menuimg5.png?");

/***/ }),

/***/ "./src/images/menuimg6.jpeg":
/*!**********************************!*\
  !*** ./src/images/menuimg6.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abf678874cd88c07efdd.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menuimg6.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;