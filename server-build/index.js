/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/PageLayout */ \"./src/layouts/PageLayout/index.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home/index.js\");\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/AppContext */ \"./src/contexts/AppContext.js\");\n\n\n/**\n * Root Entry of the Application , Wrap the  child components with App level providers here\n * If Any routing is applicable have the routes file added here than Components directly\n */\n// Components\n\n // Providers\n\n\n\nfunction App() {\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"AppProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"spacex-app\",\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"SpaceX Launch Programs\",\n        devName: \"Siddhant Wadhera\",\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_pages_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {})\n      })\n    })\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/Button/styles.scss\");\n\n\n/**\n * Generic Button Component\n */\n\n // Styles\n\n\n\nfunction Button({\n  additionalClasses,\n  children,\n  disabled,\n  handleClick,\n  isSelected,\n  ...props\n}) {\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    type: \"button\",\n    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()('spacex-button-component', additionalClasses, {\n      disabled,\n      selected: isSelected\n    }),\n    disabled: disabled,\n    onClick: handleClick,\n    \"data-testid\": \"button\",\n    ...props,\n    children: children\n  });\n}\n\nButton.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"node\"].isRequired,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"],\n  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"].isRequired,\n  additionalClasses: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"]\n};\nButton.defaultProps = {\n  disabled: false,\n  additionalClasses: '',\n  isSelected: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/Button/index.js?");

/***/ }),

/***/ "./src/components/Button/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Button/styles.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  color: #000000;\\n  font-size: 100%; }\\n\\nbody {\\n  margin: 0;\\n  font-weight: 300;\\n  font-size: 0.875rem;\\n  color: #000000;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nh1,\\n.h1 {\\n  margin: 0;\\n  font-size: 2.125rem;\\n  font-weight: 600; }\\n\\nh2,\\n.h2 {\\n  margin: 0;\\n  font-weight: 600;\\n  font-size: 1.5rem; }\\n\\nh3,\\n.h3 {\\n  margin: 0;\\n  font-weight: 700;\\n  font-size: 0.875rem; }\\n  @media only screen and (min-width: 992px) {\\n    h3,\\n    .h3 {\\n      font-size: 1rem; } }\\n\\n.body-xlarge {\\n  font-weight: 300;\\n  font-size: 1.5rem;\\n  line-height: 1.875rem; }\\n\\n.body-large {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  line-height: 1.625rem; }\\n\\n.body-medium {\\n  font-weight: 300;\\n  font-size: 1rem;\\n  line-height: 1.375rem; }\\n\\n.body-small {\\n  font-size: 0.75rem;\\n  line-height: 1.125rem; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\n.w-100 {\\n  width: 100%; }\\n\\n.height-100 {\\n  height: 100vh; }\\n\\n.d-flex {\\n  display: flex; }\\n\\n.flex-wrap {\\n  flex-wrap: wrap; }\\n\\n.flex-column {\\n  flex-direction: column; }\\n\\n.flex-row {\\n  flex-direction: row; }\\n\\n.align-items-center {\\n  align-items: center; }\\n\\n.justify-content-center {\\n  justify-content: center; }\\n\\n.justify-content-between {\\n  justify-content: space-between; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n@media only screen and (min-width: 767px) {\\n  .w-md-20 {\\n    width: 20%; }\\n  .w-md-80 {\\n    width: 80%; }\\n  .flex-sm-row {\\n    flex-direction: row; } }\\n\\nbody {\\n  background-color: #c7c5c1; }\\n\\nstrong {\\n  font-weight: 700; }\\n\\n.spacex-button-component {\\n  border-radius: 4px;\\n  border: none;\\n  padding: 8px;\\n  cursor: pointer;\\n  background-color: #8aa874;\\n  outline: none;\\n  height: 35px;\\n  width: 100px;\\n  margin: 8px 16px;\\n  font-size: 1rem; }\\n  @media only screen and (min-width: 576px) and (max-width: 1200px) {\\n    .spacex-button-component {\\n      height: 40px;\\n      width: 56px;\\n      font-size: 0.875rem;\\n      margin: 5px; } }\\n  .spacex-button-component.selected {\\n    background-color: #3f692f; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Button/styles.scss?");

/***/ }),

/***/ "./src/components/FilterList/index.js":
/*!********************************************!*\
  !*** ./src/components/FilterList/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ \"./src/components/Button/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/FilterList/styles.scss\");\n\n\n // Components\n\n // Styles\n\n\n\nconst FilterList = ({\n  filterTitle,\n  filterList,\n  filterKey,\n  updateFilterList,\n  selectedFiltersList\n}) => {\n  const handleFilterClick = e => {\n    const {\n      value\n    } = e.target.dataset;\n    updateFilterList({\n      filterKey,\n      value\n    });\n  };\n\n  const getFilters = () => {\n    if (filterList.length) {\n      const filters = filterList.map(filter => {\n        const {\n          text,\n          value\n        } = filter;\n        const isSelected = selectedFiltersList.indexOf(value.toString()) > -1;\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          handleClick: handleFilterClick,\n          \"data-value\": value,\n          isSelected: isSelected,\n          \"aria-label\": text,\n          \"data-testid\": \"filter-button\",\n          children: text\n        }, `${filterKey}-${value}`);\n      });\n      return filters;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", {\n    className: \"spacex-filter-list\",\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"spacex-filter-list--title\",\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n        children: filterTitle\n      })\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"d-flex flex-wrap justify-content-between spacex-filter-list--items\",\n      \"data-testid\": \"filter-list-container\",\n      children: getFilters()\n    })]\n  });\n};\n\nFilterList.propTypes = {\n  filterTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  filterList: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"shape\"])({\n    text: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n    value: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"oneOfType\"])([prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"], prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"]]),\n    isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"]\n  })).isRequired,\n  updateFilterList: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"].isRequired,\n  filterKey: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  selectedFiltersList: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"])\n};\nFilterList.defaultProps = {\n  selectedFiltersList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterList);\n\n//# sourceURL=webpack:///./src/components/FilterList/index.js?");

/***/ }),

/***/ "./src/components/FilterList/styles.scss":
/*!***********************************************!*\
  !*** ./src/components/FilterList/styles.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  color: #000000;\\n  font-size: 100%; }\\n\\nbody {\\n  margin: 0;\\n  font-weight: 300;\\n  font-size: 0.875rem;\\n  color: #000000;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nh1,\\n.h1 {\\n  margin: 0;\\n  font-size: 2.125rem;\\n  font-weight: 600; }\\n\\nh2,\\n.h2 {\\n  margin: 0;\\n  font-weight: 600;\\n  font-size: 1.5rem; }\\n\\nh3,\\n.h3 {\\n  margin: 0;\\n  font-weight: 700;\\n  font-size: 0.875rem; }\\n  @media only screen and (min-width: 992px) {\\n    h3,\\n    .h3 {\\n      font-size: 1rem; } }\\n\\n.body-xlarge {\\n  font-weight: 300;\\n  font-size: 1.5rem;\\n  line-height: 1.875rem; }\\n\\n.body-large {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  line-height: 1.625rem; }\\n\\n.body-medium {\\n  font-weight: 300;\\n  font-size: 1rem;\\n  line-height: 1.375rem; }\\n\\n.body-small {\\n  font-size: 0.75rem;\\n  line-height: 1.125rem; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\n.w-100 {\\n  width: 100%; }\\n\\n.height-100 {\\n  height: 100vh; }\\n\\n.d-flex {\\n  display: flex; }\\n\\n.flex-wrap {\\n  flex-wrap: wrap; }\\n\\n.flex-column {\\n  flex-direction: column; }\\n\\n.flex-row {\\n  flex-direction: row; }\\n\\n.align-items-center {\\n  align-items: center; }\\n\\n.justify-content-center {\\n  justify-content: center; }\\n\\n.justify-content-between {\\n  justify-content: space-between; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n@media only screen and (min-width: 767px) {\\n  .w-md-20 {\\n    width: 20%; }\\n  .w-md-80 {\\n    width: 80%; }\\n  .flex-sm-row {\\n    flex-direction: row; } }\\n\\nbody {\\n  background-color: #c7c5c1; }\\n\\nstrong {\\n  font-weight: 700; }\\n\\n@media only screen and (min-width: 1200px) {\\n  .spacex-filter-list {\\n    padding: 16px 16px 16px 16px; } }\\n\\n.spacex-filter-list--title {\\n  padding: 0 0 4px 0;\\n  border-bottom: 1px solid #000000;\\n  margin: 8px 0 0 0;\\n  text-align: center; }\\n  @media only screen and (min-width: 1200px) {\\n    .spacex-filter-list--title {\\n      margin: 8px 32px 0 32px; } }\\n\\n.spacex-filter-list--items {\\n  margin: 16px 0 16px 0; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/FilterList/styles.scss?");

/***/ }),

/***/ "./src/components/Loader/index.js":
/*!****************************************!*\
  !*** ./src/components/Loader/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/Loader/styles.scss\");\n\n\n/**\n * Generic Loader Component\n */\n// styles\n\n\nconst Loader = () => {\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"spacex-loader spacex-loader--wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"spacex-loader--container\"\n    })\n  });\n};\n\nLoader.propTypes = {};\nLoader.defaultProps = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\n\n//# sourceURL=webpack:///./src/components/Loader/index.js?");

/***/ }),

/***/ "./src/components/Loader/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Loader/styles.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  color: #000000;\\n  font-size: 100%; }\\n\\nbody {\\n  margin: 0;\\n  font-weight: 300;\\n  font-size: 0.875rem;\\n  color: #000000;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nh1,\\n.h1 {\\n  margin: 0;\\n  font-size: 2.125rem;\\n  font-weight: 600; }\\n\\nh2,\\n.h2 {\\n  margin: 0;\\n  font-weight: 600;\\n  font-size: 1.5rem; }\\n\\nh3,\\n.h3 {\\n  margin: 0;\\n  font-weight: 700;\\n  font-size: 0.875rem; }\\n  @media only screen and (min-width: 992px) {\\n    h3,\\n    .h3 {\\n      font-size: 1rem; } }\\n\\n.body-xlarge {\\n  font-weight: 300;\\n  font-size: 1.5rem;\\n  line-height: 1.875rem; }\\n\\n.body-large {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  line-height: 1.625rem; }\\n\\n.body-medium {\\n  font-weight: 300;\\n  font-size: 1rem;\\n  line-height: 1.375rem; }\\n\\n.body-small {\\n  font-size: 0.75rem;\\n  line-height: 1.125rem; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\n.w-100 {\\n  width: 100%; }\\n\\n.height-100 {\\n  height: 100vh; }\\n\\n.d-flex {\\n  display: flex; }\\n\\n.flex-wrap {\\n  flex-wrap: wrap; }\\n\\n.flex-column {\\n  flex-direction: column; }\\n\\n.flex-row {\\n  flex-direction: row; }\\n\\n.align-items-center {\\n  align-items: center; }\\n\\n.justify-content-center {\\n  justify-content: center; }\\n\\n.justify-content-between {\\n  justify-content: space-between; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n@media only screen and (min-width: 767px) {\\n  .w-md-20 {\\n    width: 20%; }\\n  .w-md-80 {\\n    width: 80%; }\\n  .flex-sm-row {\\n    flex-direction: row; } }\\n\\nbody {\\n  background-color: #c7c5c1; }\\n\\nstrong {\\n  font-weight: 700; }\\n\\n.spacex-loader--wrapper {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  text-align: center;\\n  z-index: 100;\\n  overflow: hidden;\\n  background: rgba(255, 255, 255, 0.5); }\\n\\n.spacex-loader--container {\\n  background-color: transparent;\\n  border: 8px solid #8aa874;\\n  border-top: 8px solid #3f692f;\\n  border-radius: 50%;\\n  width: 70px;\\n  height: 70px;\\n  vertical-align: middle;\\n  animation: spin 2s infinite linear;\\n  position: fixed;\\n  top: 50%;\\n  left: 45%;\\n  transform: translate(-50%, -50%); }\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n@keyframes ellipsis1 {\\n  0% {\\n    transform: scale(0); }\\n  100% {\\n    transform: scale(1); } }\\n\\n@keyframes ellipsis2 {\\n  0% {\\n    transform: translate(0, 0); }\\n  100% {\\n    transform: translate(24px, 0); } }\\n\\n@keyframes ellipsis3 {\\n  0% {\\n    transform: scale(1); }\\n  100% {\\n    transform: scale(0); } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Loader/styles.scss?");

/***/ }),

/***/ "./src/components/ShuttleCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/ShuttleCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/ShuttleCard/styles.scss\");\n\n\n // Styles\n\n\n\nfunction ShuttleCard({\n  shuttleData\n}) {\n  const {\n    missionIds,\n    missionName,\n    launchLanding,\n    launchSuccess,\n    launchYear,\n    missionPatchImage\n  } = shuttleData;\n\n  const renderMissionIds = () => {\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", {\n      className: \"spacex-shuttle-card__mission-id\",\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"strong\", {\n        children: \"Mission Ids:\"\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"ul\", {\n        children: missionIds && missionIds.length > 0 && missionIds.map(id => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"li\", {\n          children: id\n        }, id))\n      })]\n    });\n  };\n\n  const getOtherDetails = ({\n    label,\n    value\n  }) => {\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", {\n      className: \"spacex-shuttle-card__details\",\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"strong\", {\n        children: label\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"span\", {\n        children: value\n      })]\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", {\n    className: \"spacex-shuttle-card\",\n    \"data-testid\": \"shuttle-card\",\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"spacex-shuttle-card__image d-flex justify-content-center\",\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n        src: missionPatchImage,\n        alt: missionName\n      })\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n      className: \"spacex-shuttle-card__name\",\n      children: missionName\n    }), renderMissionIds(), getOtherDetails({\n      label: 'Launch Year:',\n      value: launchYear\n    }), getOtherDetails({\n      label: 'Successful Launch:',\n      value: launchSuccess\n    }), getOtherDetails({\n      label: 'Successful Landing:',\n      value: launchLanding\n    })]\n  }, `${missionName}-${launchYear}`);\n}\n\nShuttleCard.propTypes = {\n  shuttleData: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"shape\"])({\n    missionIds: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]),\n    missionName: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n    launch_landing: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n    launch_success: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n    launchYear: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n    missionPatchImage: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]\n  }).isRequired\n};\nShuttleCard.defaultProps = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShuttleCard);\n\n//# sourceURL=webpack:///./src/components/ShuttleCard/index.js?");

/***/ }),

/***/ "./src/components/ShuttleCard/styles.scss":
/*!************************************************!*\
  !*** ./src/components/ShuttleCard/styles.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  color: #000000;\\n  font-size: 100%; }\\n\\nbody {\\n  margin: 0;\\n  font-weight: 300;\\n  font-size: 0.875rem;\\n  color: #000000;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nh1,\\n.h1 {\\n  margin: 0;\\n  font-size: 2.125rem;\\n  font-weight: 600; }\\n\\nh2,\\n.h2 {\\n  margin: 0;\\n  font-weight: 600;\\n  font-size: 1.5rem; }\\n\\nh3,\\n.h3 {\\n  margin: 0;\\n  font-weight: 700;\\n  font-size: 0.875rem; }\\n  @media only screen and (min-width: 992px) {\\n    h3,\\n    .h3 {\\n      font-size: 1rem; } }\\n\\n.body-xlarge {\\n  font-weight: 300;\\n  font-size: 1.5rem;\\n  line-height: 1.875rem; }\\n\\n.body-large {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  line-height: 1.625rem; }\\n\\n.body-medium {\\n  font-weight: 300;\\n  font-size: 1rem;\\n  line-height: 1.375rem; }\\n\\n.body-small {\\n  font-size: 0.75rem;\\n  line-height: 1.125rem; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\n.w-100 {\\n  width: 100%; }\\n\\n.height-100 {\\n  height: 100vh; }\\n\\n.d-flex {\\n  display: flex; }\\n\\n.flex-wrap {\\n  flex-wrap: wrap; }\\n\\n.flex-column {\\n  flex-direction: column; }\\n\\n.flex-row {\\n  flex-direction: row; }\\n\\n.align-items-center {\\n  align-items: center; }\\n\\n.justify-content-center {\\n  justify-content: center; }\\n\\n.justify-content-between {\\n  justify-content: space-between; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n@media only screen and (min-width: 767px) {\\n  .w-md-20 {\\n    width: 20%; }\\n  .w-md-80 {\\n    width: 80%; }\\n  .flex-sm-row {\\n    flex-direction: row; } }\\n\\nbody {\\n  background-color: #c7c5c1; }\\n\\nstrong {\\n  font-weight: 700; }\\n\\n.spacex-shuttle-card {\\n  background-color: #ffffff;\\n  padding: 16px 16px 16px 16px;\\n  width: 100%;\\n  margin: 8px 0 0 0;\\n  border-radius: 4px; }\\n  @media only screen and (min-width: 767px) {\\n    .spacex-shuttle-card {\\n      margin: 0 8px 8px 0;\\n      width: 48%; } }\\n  @media only screen and (min-width: 1200px) {\\n    .spacex-shuttle-card {\\n      margin: 0 8px 8px 0;\\n      width: auto; } }\\n  .spacex-shuttle-card__image {\\n    background-color: #c7c5c1; }\\n    @media only screen and (min-width: 1200px) {\\n      .spacex-shuttle-card__image {\\n        width: 256px;\\n        height: 256px; } }\\n  .spacex-shuttle-card__name {\\n    color: #3f692f;\\n    margin: 16px 0 16px 0; }\\n  .spacex-shuttle-card__details {\\n    margin: 8px 0 16px 0; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/ShuttleCard/styles.scss?");

/***/ }),

/***/ "./src/config/launchYearFilterConfig.js":
/*!**********************************************!*\
  !*** ./src/config/launchYearFilterConfig.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  text: '2006',\n  value: 2006,\n  isSelected: false\n}, {\n  text: '2007',\n  value: 2007,\n  isSelected: false\n}, {\n  text: '2008',\n  value: 2008,\n  isSelected: false\n}, {\n  text: '2009',\n  value: 2009,\n  isSelected: false\n}, {\n  text: '2010',\n  value: 2010,\n  isSelected: false\n}, {\n  text: '2011',\n  value: 2011,\n  isSelected: false\n}, {\n  text: '2012',\n  value: 2012,\n  isSelected: false\n}, {\n  text: '2013',\n  value: 2013,\n  isSelected: false\n}, {\n  text: '2014',\n  value: 2014,\n  isSelected: false\n}, {\n  text: '2015',\n  value: 2015,\n  isSelected: false\n}, {\n  text: '2016',\n  value: 2016,\n  isSelected: false\n}, {\n  text: '2017',\n  value: 2017,\n  isSelected: false\n}, {\n  text: '2018',\n  value: 2018,\n  isSelected: false\n}, {\n  text: '2019',\n  value: 2019,\n  isSelected: false\n}, {\n  text: '2020',\n  value: 2020,\n  isSelected: false\n}]);\n\n//# sourceURL=webpack:///./src/config/launchYearFilterConfig.js?");

/***/ }),

/***/ "./src/config/successFilterConfig.js":
/*!*******************************************!*\
  !*** ./src/config/successFilterConfig.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  text: 'True',\n  value: true,\n  isSelected: false\n}, {\n  text: 'False',\n  value: false,\n  isSelected: false\n}]);\n\n//# sourceURL=webpack:///./src/config/successFilterConfig.js?");

/***/ }),

/***/ "./src/config/urlConfig.js":
/*!*********************************!*\
  !*** ./src/config/urlConfig.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * This gets used for getting urls based on different env variables.\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  baseUrl: {\n    default: 'https://api.spacexdata.com/v3/launches',\n    dev: 'https://api.spacexdata.com/v3/launches'\n  }\n});\n\n//# sourceURL=webpack:///./src/config/urlConfig.js?");

/***/ }),

/***/ "./src/constants/networkConstants.js":
/*!*******************************************!*\
  !*** ./src/constants/networkConstants.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  UNAUTHORIZED_MESSAGE: 'You are unauthenticated, Kindly log in',\n  BAD_REQUEST_MESSAGE: 'Bad Request. Kindly check your Request Params/Payload',\n  FORBIDDEN_MESSAGE: 'You do not have acess to this content.',\n  NOT_FOUND_MESSAGE: 'Can not find the requested resource.',\n  REQUEST_TIMED_OUT: 'Request is timed Out',\n  SERVER_ERROR: 'Internal Server Occured',\n  BAD_GATEWAY: 'Bad Gateway',\n  GATEWAY_TIMEOUT: 'GateWay TimedOut',\n  GENERIC_ERROR: 'Something Unexpected Happened. Please try Again.'\n});\n\n//# sourceURL=webpack:///./src/constants/networkConstants.js?");

/***/ }),

/***/ "./src/contexts/AppContext.js":
/*!************************************!*\
  !*** ./src/contexts/AppContext.js ***!
  \************************************/
/*! exports provided: AppContext, AppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppContext\", function() { return AppContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppProvider\", function() { return AppProvider; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nconst AppProvider = ({\n  children\n}) => {\n  const [loaderVisible, setLoaderVisible] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(AppContext.Provider, {\n    value: [loaderVisible, setLoaderVisible],\n    children: children\n  });\n};\n\nAppProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"node\"].isRequired\n};\n\n\n//# sourceURL=webpack:///./src/contexts/AppContext.js?");

/***/ }),

/***/ "./src/layouts/PageLayout/index.js":
/*!*****************************************!*\
  !*** ./src/layouts/PageLayout/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/layouts/PageLayout/styles.scss\");\n\n\n\n/**\n * Page Layout Component which renders the entire page  with header,footer and the main Content\n */\n\n // Styles\n\n\n\nconst PageLayout = ({\n  additonalClasses,\n  title,\n  devName,\n  children,\n  ...rest\n}) => {\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", {\n    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('spacex-page-layout', additonalClasses),\n    ...rest,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"header\", {\n      className: \"spacex-page-layout__header d-flex align-items-center w-100\",\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h1\", {\n        className: \"spacex-page-layout__header--title\",\n        children: title\n      })\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"main\", {\n      className: \"spacex-page-layout__content\",\n      children: children\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"footer\", {\n      className: \"spacex-page-layout__footer w-100 d-flex justify-content-center align-items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"strong\", {\n        children: \"Developed by:\"\n      }), \" \", devName]\n    })]\n  });\n};\n\nPageLayout.propTypes = {\n  additonalClasses: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"node\"],\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"].isRequired,\n  devName: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"].isRequired\n};\nPageLayout.defaultProps = {\n  additonalClasses: '',\n  children: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);\n\n//# sourceURL=webpack:///./src/layouts/PageLayout/index.js?");

/***/ }),

/***/ "./src/layouts/PageLayout/styles.scss":
/*!********************************************!*\
  !*** ./src/layouts/PageLayout/styles.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  color: #000000;\\n  font-size: 100%; }\\n\\nbody {\\n  margin: 0;\\n  font-weight: 300;\\n  font-size: 0.875rem;\\n  color: #000000;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nh1,\\n.h1 {\\n  margin: 0;\\n  font-size: 2.125rem;\\n  font-weight: 600; }\\n\\nh2,\\n.h2 {\\n  margin: 0;\\n  font-weight: 600;\\n  font-size: 1.5rem; }\\n\\nh3,\\n.h3 {\\n  margin: 0;\\n  font-weight: 700;\\n  font-size: 0.875rem; }\\n  @media only screen and (min-width: 992px) {\\n    h3,\\n    .h3 {\\n      font-size: 1rem; } }\\n\\n.body-xlarge {\\n  font-weight: 300;\\n  font-size: 1.5rem;\\n  line-height: 1.875rem; }\\n\\n.body-large {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  line-height: 1.625rem; }\\n\\n.body-medium {\\n  font-weight: 300;\\n  font-size: 1rem;\\n  line-height: 1.375rem; }\\n\\n.body-small {\\n  font-size: 0.75rem;\\n  line-height: 1.125rem; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\n.w-100 {\\n  width: 100%; }\\n\\n.height-100 {\\n  height: 100vh; }\\n\\n.d-flex {\\n  display: flex; }\\n\\n.flex-wrap {\\n  flex-wrap: wrap; }\\n\\n.flex-column {\\n  flex-direction: column; }\\n\\n.flex-row {\\n  flex-direction: row; }\\n\\n.align-items-center {\\n  align-items: center; }\\n\\n.justify-content-center {\\n  justify-content: center; }\\n\\n.justify-content-between {\\n  justify-content: space-between; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n@media only screen and (min-width: 767px) {\\n  .w-md-20 {\\n    width: 20%; }\\n  .w-md-80 {\\n    width: 80%; }\\n  .flex-sm-row {\\n    flex-direction: row; } }\\n\\nbody {\\n  background-color: #c7c5c1; }\\n\\nstrong {\\n  font-weight: 700; }\\n\\n.spacex-page-layout {\\n  box-sizing: border-box;\\n  padding: 16px 16px 16px 16px; }\\n  .spacex-page-layout__header {\\n    position: fixed;\\n    top: 0;\\n    background-color: #c7c5c1;\\n    z-index: 1;\\n    height: 80px; }\\n    @media only screen and (min-width: 767px) {\\n      .spacex-page-layout__header {\\n        height: 56px; } }\\n    .spacex-page-layout__header--tile {\\n      margin: 8px 0 8px 0; }\\n  .spacex-page-layout__footer {\\n    position: fixed;\\n    bottom: 0;\\n    height: 32px;\\n    background-color: #c7c5c1; }\\n  .spacex-page-layout__content {\\n    margin: 56px 0 0 0; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/layouts/PageLayout/styles.scss?");

/***/ }),

/***/ "./src/network/index.js":
/*!******************************!*\
  !*** ./src/network/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NetworkUtils; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_networkConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/networkConstants */ \"./src/constants/networkConstants.js\");\n/* harmony import */ var _config_urlConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/urlConfig */ \"./src/config/urlConfig.js\");\n\n\n/**\n * This file will be used for all API calls.\n */\n\n\n\n\nconst {\n  baseUrl = {}\n} = _config_urlConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nclass NetworkUtils {\n  /**\n   * @method handleErrors This method will be invoked when the api calls throw an error and will construct the errorObj containing errorCode and error message based on the error Code recieved.\n   * @param {*} err Object: {response : {status = '', errors ; []}}\n   */\n  static handleErros(err) {\n    const {\n      response: {\n        status = ''\n      } = {}\n    } = err;\n    const {\n      UNAUTHORIZED_MESSAGE,\n      BAD_REQUEST_MESSAGE,\n      FORBIDDEN_MESSAGE,\n      NOT_FOUND_MESSAGE,\n      REQUEST_TIMED_OUT,\n      SERVER_ERROR,\n      BAD_GATEWAY,\n      GATEWAY_TIMEOUT,\n      GENERIC_ERROR\n    } = _constants_networkConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    const errorObject = {\n      status,\n      errorMessage: GENERIC_ERROR // default error Message\n\n    };\n\n    switch (status) {\n      case 400:\n        errorObject.errorMessage = BAD_REQUEST_MESSAGE;\n        break;\n\n      case 401:\n        errorObject.errorMessage = UNAUTHORIZED_MESSAGE;\n        break;\n\n      case 403:\n        errorObject.errorMessage = FORBIDDEN_MESSAGE;\n        break;\n\n      case 404:\n        errorObject.errorMessage = NOT_FOUND_MESSAGE;\n        break;\n\n      case 408:\n        errorObject.errorMessage = REQUEST_TIMED_OUT;\n        break;\n\n      case 500:\n        errorObject.errorMessage = SERVER_ERROR;\n        break;\n\n      case 502:\n        errorObject.errorMessage = BAD_GATEWAY;\n        break;\n\n      case 503:\n        errorObject.errorMessage = GATEWAY_TIMEOUT;\n        break;\n\n      default:\n        break;\n    }\n\n    return errorObject;\n  }\n  /**\n   * @method makeApiRequest This method is a wrapper on all network calls. If any kind\n   * of customization is required, that should be done here\n   * @param {*} requestObject\n   * requestObject will include below attributes\n   * requuestObject  = {\n   *    method,   // The type of request, GET, POST, PUT, DELETE etc\n   *    url,  //The url needs to be called\n   *    data, // The data needs to be passed to server\n   *    params, // For get request, if any parameter need to be passed along with URL\n   *    memoizeResponse, // If true, it will remember the response and next time it won't make\n   *    isExternal, //  boolean: If the network call is third-party call\n   *    skipHeader, // boolean: If the auth token needs to be skipped for any request\n   * }\n   */\n\n\n  static makeApiRequest(requestObject) {\n    const {\n      method,\n      url,\n      data = {},\n      params = undefined,\n      memoizeResponse = false,\n      isExternal = false\n    } = requestObject;\n    const {\n      serverBaseUrl\n    } = this.networkParams;\n    console.log(process);\n    /* eslint-disable consistent-return */\n\n    return new Promise((resolve, reject) => {\n      try {\n        const completeUrl = isExternal ? url : `${serverBaseUrl}/${url}`;\n\n        if (this.memoizedData[completeUrl]) {\n          return resolve(this.memoizedData[completeUrl]);\n        }\n\n        const headerObject = {\n          'content-type': 'application/json'\n        };\n        axios__WEBPACK_IMPORTED_MODULE_1___default()({\n          method,\n          url: completeUrl,\n          data,\n          params,\n          headers: headerObject,\n          paramsSerializer: queryParams => query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(queryParams, {\n            arrayFormat: 'repeat'\n          })\n        }).then(response => {\n          const {\n            data: responseData,\n            status\n          } = response;\n\n          if (memoizeResponse) {\n            this.memoizedData[completeUrl] = {\n              responseData,\n              status\n            };\n          }\n\n          return resolve({\n            responseData,\n            status\n          });\n        }).catch(err => {\n          const errorObject = this.handleErros(err);\n          return reject(errorObject);\n        });\n      } catch (e) {\n        return reject(e);\n      }\n    });\n  }\n\n}\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(NetworkUtils, \"env\", process.env.REACT_APP_BUILD_ENV || 'default');\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(NetworkUtils, \"networkParams\", {\n  serverBaseUrl: baseUrl[NetworkUtils.env]\n});\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(NetworkUtils, \"memoizedData\", {});\n\n//# sourceURL=webpack:///./src/network/index.js?");

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../network */ \"./src/network/index.js\");\n/* harmony import */ var _config_launchYearFilterConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/launchYearFilterConfig */ \"./src/config/launchYearFilterConfig.js\");\n/* harmony import */ var _config_successFilterConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/successFilterConfig */ \"./src/config/successFilterConfig.js\");\n/* harmony import */ var _components_FilterList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/FilterList */ \"./src/components/FilterList/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loader */ \"./src/components/Loader/index.js\");\n/* harmony import */ var _components_ShuttleCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ShuttleCard */ \"./src/components/ShuttleCard/index.js\");\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/AppContext */ \"./src/contexts/AppContext.js\");\n/* harmony import */ var _utils_shuttleListUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/shuttleListUtils */ \"./src/utils/shuttleListUtils.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ \"./src/pages/home/styles.scss\");\n\n\n\n/**\n * Landing Page of the SpaceX Search Application\n * Sets the App Level by making an Api Call\n */\n // Network\n\n // Configs\n\n\n // Components\n\n\n\n // Context\n\n // Utils\n\n // Styles\n\n\n\nconst Home = () => {\n  const [yearFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_config_launchYearFilterConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  const [launchSuccessFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_config_successFilterConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  const [landingSuccessFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_config_successFilterConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  const [shuttleLists, setShuttleLists] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const [selectedFilters, setSelectecFilters] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    launch_year: [],\n    launch_success: [],\n    landing_success: []\n  });\n  const [loaderVisible, setLoaderVisible] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_8__[\"AppContext\"]);\n\n  const updateFilterList = ({\n    filterKey,\n    value\n  }) => {\n    const selectedFilter = selectedFilters[filterKey];\n\n    if (selectedFilter.length) {\n      const selectedValueIndex = selectedFilter.indexOf(value); // remove the value from the filter list if already selcted\n\n      if (selectedValueIndex > -1) {\n        selectedFilter.splice(selectedValueIndex, 1);\n      } else {\n        selectedFilter.push(value);\n      }\n\n      setSelectecFilters(prevState => {\n        return { ...prevState,\n          [filterKey]: [...selectedFilter]\n        };\n      });\n    } else {\n      setSelectecFilters(prevState => {\n        return { ...prevState,\n          [filterKey]: [value]\n        };\n      });\n    }\n  };\n\n  const getShuttleLists = async () => {\n    try {\n      setLoaderVisible(true);\n      const result = await _network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].makeApiRequest({\n        url: '',\n        params: {\n          limit: 100,\n          ...selectedFilters\n        }\n      });\n      const {\n        responseData = []\n      } = result;\n\n      if (responseData.length) {\n        const tranformedData = Object(_utils_shuttleListUtils__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(responseData);\n        setShuttleLists(tranformedData);\n      } else {\n        setShuttleLists([]);\n      }\n\n      setLoaderVisible(false);\n    } catch (e) {\n      console.log(e);\n    } finally {\n      setLoaderVisible(false);\n    }\n  };\n\n  const getShuttleCards = () => {\n    if (shuttleLists.length) {\n      const shuttleCards = shuttleLists.map(data => {\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_ShuttleCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          shuttleData: data\n        });\n      });\n      return shuttleCards;\n    }\n\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n      children: \"No Cards available\"\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    getShuttleLists();\n  }, [selectedFilters]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", {\n    className: \"spacex-homepage d-flex w-100 flex-column flex-sm-row flex-wrap\",\n    children: [loaderVisible && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", {\n      className: \"spacex-homepage__filters\",\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n        children: \"Filters\"\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_FilterList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        filterTitle: \"Launch Year\",\n        filterKey: \"launch_year\",\n        filterList: yearFilter,\n        updateFilterList: updateFilterList,\n        selectedFiltersList: selectedFilters.launch_year\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_FilterList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        filterTitle: \"Successful Launch\",\n        filterKey: \"launch_success\",\n        filterList: launchSuccessFilter,\n        updateFilterList: updateFilterList,\n        selectedFiltersList: selectedFilters.launch_success\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_FilterList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        filterTitle: \"Successful Landing\",\n        filterKey: \"landing_success\",\n        filterList: landingSuccessFilter,\n        updateFilterList: updateFilterList,\n        selectedFiltersList: selectedFilters.landing_success\n      })]\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"spacex-homepage--cards d-flex flex-wrap\",\n      children: getShuttleCards()\n    })]\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/home/index.js?");

/***/ }),

/***/ "./src/pages/home/styles.scss":
/*!************************************!*\
  !*** ./src/pages/home/styles.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  color: #000000;\\n  font-size: 100%; }\\n\\nbody {\\n  margin: 0;\\n  font-weight: 300;\\n  font-size: 0.875rem;\\n  color: #000000;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nh1,\\n.h1 {\\n  margin: 0;\\n  font-size: 2.125rem;\\n  font-weight: 600; }\\n\\nh2,\\n.h2 {\\n  margin: 0;\\n  font-weight: 600;\\n  font-size: 1.5rem; }\\n\\nh3,\\n.h3 {\\n  margin: 0;\\n  font-weight: 700;\\n  font-size: 0.875rem; }\\n  @media only screen and (min-width: 992px) {\\n    h3,\\n    .h3 {\\n      font-size: 1rem; } }\\n\\n.body-xlarge {\\n  font-weight: 300;\\n  font-size: 1.5rem;\\n  line-height: 1.875rem; }\\n\\n.body-large {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  line-height: 1.625rem; }\\n\\n.body-medium {\\n  font-weight: 300;\\n  font-size: 1rem;\\n  line-height: 1.375rem; }\\n\\n.body-small {\\n  font-size: 0.75rem;\\n  line-height: 1.125rem; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\n.w-100 {\\n  width: 100%; }\\n\\n.height-100 {\\n  height: 100vh; }\\n\\n.d-flex {\\n  display: flex; }\\n\\n.flex-wrap {\\n  flex-wrap: wrap; }\\n\\n.flex-column {\\n  flex-direction: column; }\\n\\n.flex-row {\\n  flex-direction: row; }\\n\\n.align-items-center {\\n  align-items: center; }\\n\\n.justify-content-center {\\n  justify-content: center; }\\n\\n.justify-content-between {\\n  justify-content: space-between; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n@media only screen and (min-width: 767px) {\\n  .w-md-20 {\\n    width: 20%; }\\n  .w-md-80 {\\n    width: 80%; }\\n  .flex-sm-row {\\n    flex-direction: row; } }\\n\\nbody {\\n  background-color: #c7c5c1; }\\n\\nstrong {\\n  font-weight: 700; }\\n\\n.spacex-homepage__filters {\\n  height: fit-content;\\n  background-color: #ffffff;\\n  border-radius: 4px;\\n  padding: 8px 8px 8px 8px;\\n  flex: 1 1; }\\n\\n.spacex-homepage--cards {\\n  flex: 4 1; }\\n  @media only screen and (min-width: 767px) {\\n    .spacex-homepage--cards {\\n      margin-left: 16px; } }\\n  @media only screen and (min-width: 992px) {\\n    .spacex-homepage--cards {\\n      margin-left: 32px; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/pages/home/styles.scss?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nconsole.log('server --- ', process);\napp.get('/', (req, res) => {\n  const reactApp = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${reactApp}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/utils/shuttleListUtils.js":
/*!***************************************!*\
  !*** ./src/utils/shuttleListUtils.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst transformShuttleData = shuttleData => {\n  let transFormedData = [];\n\n  if (shuttleData.length) {\n    transFormedData = shuttleData.map(item => {\n      const {\n        mission_name: missionName,\n        launch_year: launchYear,\n        launch_success: launchSuccess,\n        launch_landing: launchLanding = false,\n        links: {\n          mission_patch_small: missionPatchImage\n        } = {},\n        mission_id: missionIds = []\n      } = item;\n      return {\n        missionIds,\n        missionName,\n        launchLanding: launchLanding.toString(),\n        launchSuccess: launchSuccess.toString(),\n        launchYear,\n        missionPatchImage\n      };\n    });\n  }\n\n  return transFormedData;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transformShuttleData);\n\n//# sourceURL=webpack:///./src/utils/shuttleListUtils.js?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clsx\");\n\n//# sourceURL=webpack:///external_%22clsx%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");\n\n//# sourceURL=webpack:///external_%22query-string%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");\n\n//# sourceURL=webpack:///external_%22react/jsx-runtime%22?");

/***/ })

/******/ });