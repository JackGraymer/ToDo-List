/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/OpenSans-VariableFont_wdth,wght.ttf */ "./src/font/OpenSans-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/OpenSans-Italic-VariableFont_wdth,wght.ttf */ "./src/font/OpenSans-Italic-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: OpenSans;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n}\n\n\n*{/*Global scope*/\n    box-sizing: border-box;\n    font-family: OpenSans, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 1em;\n}\nhtml, body{\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n}\n\nbody{\n    display: grid;\n    grid-template-rows: 100px 1fr 100px;\n    grid-template-columns: 300px 1fr;\n    grid-template-areas: \n    'header header'\n    'nav main'\n    'footer footer'\n    ;\n    background-color: rgb(201, 201, 201);\n    color: rgb(51, 51, 51);\n}\n\n.dark-mode{\n    background-color: rgb(51, 51, 51);\n    color: rgb(201, 201, 201);\n}\n\n#mode{\n    margin: 0;\n    padding: 0;\n    border: none;\n    height: 32px;\n    width: 32px;\n    background-color: transparent;\n    border-radius: 2em;\n    cursor: pointer;\n\n}\n\n#mode:hover{\n    background-color: rgba(0, 0, 0, 0.5);\n\n}\n\n#dark-icon{\n    width: 32px;\n    margin: 0;\n    padding: 0;\n}\n\nheader{\n    grid-area: header;\n    position: sticky;\n    width: 100%;\n    display: flex;\n    padding: 0.1em 0.5em;\n    background-color: rgba(0, 0, 0, 0.1);\n    align-items: center;\n    justify-content: space-between;\n    font-size: 45pt;\n}\n\nnav{\n    overflow: auto;\n    grid-area: nav;\n    padding: 0.5em;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: 20pt;\n    display: flex;\n    align-items:center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 0.5em;\n\n}\nnav>div{\n    padding: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 0.5em;\n}\n\n.projects{\n    min-height: 50%;\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n}\n\n#projects{\n    height: 100%;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: visible;\n}\n.navbutton{\n    width: 100%;\n    text-align:justify;\n    background-color: rgba(78, 78, 78, 0.3);\n    border: none;\n    font-size: 16pt;\n    padding: 0.3em;\n    color: inherit;\n    border-radius: 0.3em;\n    transition: 200ms ;\n}\nbutton:hover{\n    cursor: pointer;\n    background-color: rgba(100, 100, 100, 0.7);\n}\n\nbutton:active{\nbackground-color: rgb(233, 70, 97);\n}\n\ninput.navbutton:focus{\n    outline: none;\n    outline: 2px solid  rgb(233, 70, 97);\n    transition: 0ms;\n}\n\n#add{\n    display: flex;\n    background-color: rgb(233, 70, 97);\n    justify-content: center;\n    font-size: larger;\n    padding: 0;\n}\n\n#main{\n    height: 100%;\n    padding: 0;\n    display: flex;\n    grid-template-rows: auto;\n    justify-content: center;\n    grid-area: main;\n    overflow: auto;\n}\n\n#content{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 20fr;\n    height: 100%;\n    width: 80%;\n    background-color: rgb(255, 255, 255, 0.1);\n}\n\n#content>div{\n    padding-bottom: 1em;\n}\n\n#content>div>h3{\n    padding: 0;\n}\n\n#todoTitle{\n    padding: 0 0 0 1em;\n    margin: 0;\n}\n\n#todoTitle>h3{\n    padding: 0;\n    margin: 0;\n}\n\n#todo{\n    height: 100%;\n    width: 100%;\n    padding-bottom: 1em;\n    overflow: auto;\n}\n\n.list{\n    position: relative;\n    background-color: rgb(101, 101, 101, 0.2);\n    border-radius: 0.5em;\n    padding: 0;\n    display: flex;\n    align-items: center;\n}\n\n#todoInput{\n    margin-bottom: 1em;\n}\n\n.checkbox{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 1rem;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: none;\n    border: solid 2px rgb(233, 70, 97);\n    border-radius: 0.3rem;\n    background-color: inherit;\n    font-size: 2rem;\n    overflow: hidden;\n    color: inherit;\n}\n\n.todoDelBtn{\n    background-color: transparent;\n    border-radius: 0.2em;\n    height: 1.5em;\n    width: 1.5em;\n    padding: 0;\n    font-size: larger;\n    position: absolute;\n    right:1%;\n    border: none;\n}\n\n.checked{\n    text-decoration: line-through rgb(233, 70, 97) 0.1em;\n}\n\n.title{\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0.5em;\n}\n\np.title{\n    max-width: 80%;\n    outline: none;\n    background-color: inherit;\n    border: none;\n    text-align: center;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0;\n    margin: 0;\n}\n\n.projectdel{\n    padding: 0;\n    width: 3em;\n    height: 3em;\n    background-color: transparent;\n    position: absolute;\n    right: 0;\n    border: none;\n    border-radius: 50%;\n\n}\n#projectDelIco{\n    padding: 0;\n    width: 100%;\n}\n\nfooter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-area: footer;\n    background-color: rgba(0, 0, 0, 0.1);\n}\nfooter>a{\n    padding: 1em;\n}\nfooter>a>img{\n    padding: 0;\n    width: 2em;\n    transition: 300ms;\n}\nfooter>a>img:hover{\n    transform: rotate(360deg) scale(1.3);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: OpenSans;\n    src: url(./font/OpenSans-VariableFont_wdth\\,wght.ttf),\n        url(./font/OpenSans-Italic-VariableFont_wdth\\,wght.ttf)\n}\n\n\n*{/*Global scope*/\n    box-sizing: border-box;\n    font-family: OpenSans, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 1em;\n}\nhtml, body{\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n}\n\nbody{\n    display: grid;\n    grid-template-rows: 100px 1fr 100px;\n    grid-template-columns: 300px 1fr;\n    grid-template-areas: \n    'header header'\n    'nav main'\n    'footer footer'\n    ;\n    background-color: rgb(201, 201, 201);\n    color: rgb(51, 51, 51);\n}\n\n.dark-mode{\n    background-color: rgb(51, 51, 51);\n    color: rgb(201, 201, 201);\n}\n\n#mode{\n    margin: 0;\n    padding: 0;\n    border: none;\n    height: 32px;\n    width: 32px;\n    background-color: transparent;\n    border-radius: 2em;\n    cursor: pointer;\n\n}\n\n#mode:hover{\n    background-color: rgba(0, 0, 0, 0.5);\n\n}\n\n#dark-icon{\n    width: 32px;\n    margin: 0;\n    padding: 0;\n}\n\nheader{\n    grid-area: header;\n    position: sticky;\n    width: 100%;\n    display: flex;\n    padding: 0.1em 0.5em;\n    background-color: rgba(0, 0, 0, 0.1);\n    align-items: center;\n    justify-content: space-between;\n    font-size: 45pt;\n}\n\nnav{\n    overflow: auto;\n    grid-area: nav;\n    padding: 0.5em;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: 20pt;\n    display: flex;\n    align-items:center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 0.5em;\n\n}\nnav>div{\n    padding: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 0.5em;\n}\n\n.projects{\n    min-height: 50%;\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n}\n\n#projects{\n    height: 100%;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: visible;\n}\n.navbutton{\n    width: 100%;\n    text-align:justify;\n    background-color: rgba(78, 78, 78, 0.3);\n    border: none;\n    font-size: 16pt;\n    padding: 0.3em;\n    color: inherit;\n    border-radius: 0.3em;\n    transition: 200ms ;\n}\nbutton:hover{\n    cursor: pointer;\n    background-color: rgba(100, 100, 100, 0.7);\n}\n\nbutton:active{\nbackground-color: rgb(233, 70, 97);\n}\n\ninput.navbutton:focus{\n    outline: none;\n    outline: 2px solid  rgb(233, 70, 97);\n    transition: 0ms;\n}\n\n#add{\n    display: flex;\n    background-color: rgb(233, 70, 97);\n    justify-content: center;\n    font-size: larger;\n    padding: 0;\n}\n\n#main{\n    height: 100%;\n    padding: 0;\n    display: flex;\n    grid-template-rows: auto;\n    justify-content: center;\n    grid-area: main;\n    overflow: auto;\n}\n\n#content{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 20fr;\n    height: 100%;\n    width: 80%;\n    background-color: rgb(255, 255, 255, 0.1);\n}\n\n#content>div{\n    padding-bottom: 1em;\n}\n\n#content>div>h3{\n    padding: 0;\n}\n\n#todoTitle{\n    padding: 0 0 0 1em;\n    margin: 0;\n}\n\n#todoTitle>h3{\n    padding: 0;\n    margin: 0;\n}\n\n#todo{\n    height: 100%;\n    width: 100%;\n    padding-bottom: 1em;\n    overflow: auto;\n}\n\n.list{\n    position: relative;\n    background-color: rgb(101, 101, 101, 0.2);\n    border-radius: 0.5em;\n    padding: 0;\n    display: flex;\n    align-items: center;\n}\n\n#todoInput{\n    margin-bottom: 1em;\n}\n\n.checkbox{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 1rem;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: none;\n    border: solid 2px rgb(233, 70, 97);\n    border-radius: 0.3rem;\n    background-color: inherit;\n    font-size: 2rem;\n    overflow: hidden;\n    color: inherit;\n}\n\n.todoDelBtn{\n    background-color: transparent;\n    border-radius: 0.2em;\n    height: 1.5em;\n    width: 1.5em;\n    padding: 0;\n    font-size: larger;\n    position: absolute;\n    right:1%;\n    border: none;\n}\n\n.checked{\n    text-decoration: line-through rgb(233, 70, 97) 0.1em;\n}\n\n.title{\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0.5em;\n}\n\np.title{\n    max-width: 80%;\n    outline: none;\n    background-color: inherit;\n    border: none;\n    text-align: center;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0;\n    margin: 0;\n}\n\n.projectdel{\n    padding: 0;\n    width: 3em;\n    height: 3em;\n    background-color: transparent;\n    position: absolute;\n    right: 0;\n    border: none;\n    border-radius: 50%;\n\n}\n#projectDelIco{\n    padding: 0;\n    width: 100%;\n}\n\nfooter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-area: footer;\n    background-color: rgba(0, 0, 0, 0.1);\n}\nfooter>a{\n    padding: 1em;\n}\nfooter>a>img{\n    padding: 0;\n    width: 2em;\n    transition: 300ms;\n}\nfooter>a>img:hover{\n    transform: rotate(360deg) scale(1.3);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_dark_btn_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/dark-btn.png */ "./src/img/dark-btn.png");
/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/github.png */ "./src/img/github.png");
/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/favicon.png */ "./src/img/favicon.png");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo */ "./src/todo.js");







function setFavIcon(){
    let icon = document.querySelector('#favicon')
    icon.href = _img_favicon_png__WEBPACK_IMPORTED_MODULE_4__
}
setFavIcon()

function header() {//Sets Icon from dark theme
    let darkicon = document.querySelector('#dark-icon')
    darkicon.src = _img_dark_btn_png__WEBPACK_IMPORTED_MODULE_0__

    let darkbtn = document.querySelector('#mode')
    darkbtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
    })
}
header()

function createButtonList(){
    let projectButtons = document.querySelectorAll('.projects>button')
    projectButtons.forEach(element => {
        element.addEventListener('click', () => {
        populateContent()
        })   
    });
}
createButtonList()

document.querySelector('#add').addEventListener('click', () => {
    //Adds new project to the list
    let title = document.querySelector('#newProjectName')
    if (title.value !== ''){
        (0,_project__WEBPACK_IMPORTED_MODULE_3__.createProject)();
        (0,_project__WEBPACK_IMPORTED_MODULE_3__.updateProjects)();     
        createButtonList() 

    }
})

document.querySelector('#newProjectName').addEventListener('keydown', () => {
    if(event.key === 'Enter'){
        let title = document.querySelector('#newProjectName')
        if (title.value !== ''){
            (0,_project__WEBPACK_IMPORTED_MODULE_3__.createProject)();
            (0,_project__WEBPACK_IMPORTED_MODULE_3__.updateProjects)();     
            createButtonList() 
        }   
    }
})
function populateContent(){//Sets content of the project on the main container
    let currentProject = (0,_project__WEBPACK_IMPORTED_MODULE_3__.chooseProject)()
    let title = document.querySelector('#title')
    title.textContent = currentProject.title
    document.querySelector('#detailsInput').value = currentProject.details 
    contentEventsManager();

    updateTodos()
}

function clearTodos(){
    document.querySelectorAll('.list').forEach(ul => {
        if(ul.classList == 'list'){
            ul.remove()
        }
    });
    console.log('cleatTodos()', _project__WEBPACK_IMPORTED_MODULE_3__.actualProject)
}

function createTodoList(){
    _project__WEBPACK_IMPORTED_MODULE_3__.actualProject.todo.forEach(element => {
        //Creating new elements and giving their properties
        let todoList = document.querySelector('#todo')
        let ul = document.createElement('ul')
        ul.classList='list'
        let button = document.createElement('button')
        button.classList= 'checkbox'
        let input = document.createElement('input')
        input.classList = 'navbutton listInput'
        input.value = element.title
        let todoDelBtn = document.createElement('button')
        todoDelBtn.classList = 'todoDelBtn'
        todoDelBtn.textContent = '❌'
        //Append items
        todoList.insertBefore(ul, document.querySelector('#todoInput'))
        ul.appendChild(button)
        ul.appendChild(input)
        ul.appendChild(todoDelBtn)
        console.log(element.state)
        if(element.state === true){
            button.textContent = '✓'
            input.classList.toggle('checked')
        }
    });
}

function createTodoInputListener(){
    document.querySelectorAll('.listInput').forEach(element => {
        element.addEventListener('focusout', todoInputUpdate)
    });

}

function todoInputUpdate(){
    let list = ( document.querySelectorAll('.listInput'))
    let todoList = Array.from(list)
    let i = todoList.indexOf(event.target)
    console.log(_project__WEBPACK_IMPORTED_MODULE_3__.actualProject.todo[i], i, event.target.value)
    _project__WEBPACK_IMPORTED_MODULE_3__.actualProject.todo[i].title = event.target.value
} 

function checkBoxListener(){
    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(element => {
        element.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_5__.checkTodo)})

}

function todoDeleteListener(){
    document.querySelectorAll('.todoDelBtn').forEach(element => {
        element.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_5__.deleteTodo)
    });
}

function updateTodos(){
    clearTodos();
    createTodoList();
    createTodoInputListener()
    checkBoxListener()
    todoDeleteListener()
}

function contentEventsManager(){
    document.querySelector('#title').addEventListener('focusout', () => {
        (0,_project__WEBPACK_IMPORTED_MODULE_3__.updateTitle)();
        createButtonList();
    })
    document.querySelector('#detailsInput').addEventListener('focusout', _project__WEBPACK_IMPORTED_MODULE_3__.updateDetails);
    document.querySelector('#todoInput').addEventListener('keydown', () => {
        if(event.key ==='Enter' && document.querySelector('#todoInput').value !==''){
            (0,_project__WEBPACK_IMPORTED_MODULE_3__.createTodo)();
            updateTodos();
        }
    }) 
}




function footer(){ //sets the github icon link
    let github = document.querySelector('#github')
    github.src=_img_github_png__WEBPACK_IMPORTED_MODULE_1__
}
footer()

let deleteIcon = document.querySelector('#projectDelIco')

function deleteProjectIcon(){
    
    deleteIcon.src=_img_delete_png__WEBPACK_IMPORTED_MODULE_2__
}
deleteProjectIcon()

deleteIcon.addEventListener('click', () => {
    let chosenIndex = _project__WEBPACK_IMPORTED_MODULE_3__.projectsList.findIndex(x => x.title == title.textContent)
     if (chosenIndex !== -1){
        
        _project__WEBPACK_IMPORTED_MODULE_3__.projectsList.splice(chosenIndex, 1)
        console.log(_project__WEBPACK_IMPORTED_MODULE_3__.projectsList)
        ;(0,_project__WEBPACK_IMPORTED_MODULE_3__.updateProjects)()
        createButtonList()
        clearTodos()
        title.textContent = 'No Project Selected!'
        document.querySelector('#detailsInput').value = ''
    } 
    
})

//simulates click on the first project element
document.querySelector('.navbutton').click();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTodos);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actualProject": () => (/* binding */ actualProject),
/* harmony export */   "chooseProject": () => (/* binding */ chooseProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "updateDetails": () => (/* binding */ updateDetails),
/* harmony export */   "updateProjects": () => (/* binding */ updateProjects),
/* harmony export */   "updateTitle": () => (/* binding */ updateTitle)
/* harmony export */ });
let projectsList = [];

function project (title,details){
    this.title = title;
    this.details = '';
    this.todo = []
    projectsList.push(this)

}

let AllTodos = new project('Everything')
AllTodos.details = 'Some details here...'

let title = document.querySelector('#newProjectName')

function createProject(){

    new project(title.value)
    //document.querySelector('.projects').textContent = 'Projects'
    title.value = ''
    
console.log(projectsList)
}

function updateProjects(){
    document.querySelector('.projects').textContent = ''
    projectsList.forEach(project => {
        let button = document.createElement('button');
        button.classList.add('navbutton')
        button.textContent = project.title
        document.querySelector('.projects').appendChild(button)
        title.value = ''
    })
}


let actualProject = ''

function chooseProject(){
    let currentProject = projectsList.find(project => project.title === event.target.textContent)
    actualProject = currentProject;
    console.log('actual project is ' + actualProject.title)
    return currentProject
}

updateProjects()

function updateTitle(){
    actualProject.title = event.target.textContent
    updateProjects()
}

function updateDetails (){
    actualProject.details = event.target.value
}

function createTodo(){
    function todo(title, state){
        this.title = title
        this.state = state
        actualProject.todo.push(this)
    }
    new todo(event.target.value, false)
    event.target.value = ''
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTodo": () => (/* binding */ checkTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");




function checkTodo(event){
    let list = Array.from(document.querySelectorAll('.checkbox'))
    //let todoList = Array.from(list)
    let i = list.indexOf(event.target)
    if(_project__WEBPACK_IMPORTED_MODULE_1__.actualProject.todo[i].state === false){
        _project__WEBPACK_IMPORTED_MODULE_1__.actualProject.todo[i].state = true
    }else{_project__WEBPACK_IMPORTED_MODULE_1__.actualProject.todo[i].state = false}
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

function deleteTodo(){
    let delButtons = Array.from(document.querySelectorAll('.todoDelBtn'))
    let i= delButtons.indexOf(event.target)
    _project__WEBPACK_IMPORTED_MODULE_1__.actualProject.todo.splice(i, 1)
    ;(0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])()
}



/***/ }),

/***/ "./src/font/OpenSans-Italic-VariableFont_wdth,wght.ttf":
/*!*************************************************************!*\
  !*** ./src/font/OpenSans-Italic-VariableFont_wdth,wght.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/OpenSans-Italic-VariableFont_wdth,wght.ttf";

/***/ }),

/***/ "./src/font/OpenSans-VariableFont_wdth,wght.ttf":
/*!******************************************************!*\
  !*** ./src/font/OpenSans-VariableFont_wdth,wght.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/OpenSans-VariableFont_wdth,wght.ttf";

/***/ }),

/***/ "./src/img/dark-btn.png":
/*!******************************!*\
  !*** ./src/img/dark-btn.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/dark-btn.png";

/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/delete.png";

/***/ }),

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/favicon.png";

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/github.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");





//header()

//footer()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0IsR0FBRyxxQkFBcUIsMkNBQTJDLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLE9BQU8sZUFBZSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxV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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNnQjtBQUNJOzs7QUFHeEM7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub0RvIExpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvIExpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9Ub0RvIExpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub0RvIExpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvIExpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1RvRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvT3BlblNhbnMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIilcXG59XFxuXFxuXFxuKnsvKkdsb2JhbCBzY29wZSovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucywgJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcbmh0bWwsIGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICduYXYgbWFpbidcXG4gICAgJ2Zvb3RlciBmb290ZXInXFxuICAgIDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcbn1cXG5cXG4uZGFyay1tb2Rle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxuICAgIGNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XFxufVxcblxcbiNtb2Rle1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jbW9kZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcblxcbn1cXG5cXG4jZGFyay1pY29ue1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDQ1cHQ7XFxufVxcblxcbm5hdntcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDAuNWVtO1xcblxcbn1cXG5uYXY+ZGl2e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIG1pbi1oZWlnaHQ6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3Rze1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XFxufVxcbi5uYXZidXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzgsIDc4LCA3OCwgMC4zKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHQ7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIDtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC43KTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZXtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA3MCwgOTcpO1xcbn1cXG5cXG5pbnB1dC5uYXZidXR0b246Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAgcmdiKDIzMywgNzAsIDk3KTtcXG4gICAgdHJhbnNpdGlvbjogMG1zO1xcbn1cXG5cXG4jYWRke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA3MCwgOTcpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNtYWlue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDIwZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbiNjb250ZW50PmRpdntcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG59XFxuXFxuI2NvbnRlbnQ+ZGl2Pmgze1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jdG9kb1RpdGxle1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3RvZG9UaXRsZT5oM3tcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jdG9kb3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDEwMSwgMTAxLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvZG9JbnB1dHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDIzMywgNzAsIDk3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4udG9kb0RlbEJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjElO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jaGVja2Vke1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCByZ2IoMjMzLCA3MCwgOTcpIDAuMWVtO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbnAudGl0bGV7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0ZGVse1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogM2VtO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbn1cXG4jcHJvamVjdERlbEljb3tcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbmZvb3Rlcj5he1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcbmZvb3Rlcj5hPmltZ3tcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcbmZvb3Rlcj5hPmltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjMpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCOztBQUVKOzs7QUFHQSxFQUFFLGVBQWU7SUFDYixzQkFBc0I7SUFDdEIsZ0lBQWdJO0lBQ2hJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQzs7OztJQUlBO0lBQ0Esb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FB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SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XFxuICAgIHNyYzogdXJsKC4vZm9udC9PcGVuU2Fucy1WYXJpYWJsZUZvbnRfd2R0aFxcXFwsd2dodC50dGYpLFxcbiAgICAgICAgdXJsKC4vZm9udC9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGhcXFxcLHdnaHQudHRmKVxcbn1cXG5cXG5cXG4qey8qR2xvYmFsIHNjb3BlKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLCAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuaHRtbCwgYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ25hdiBtYWluJ1xcbiAgICAnZm9vdGVyIGZvb3RlcidcXG4gICAgO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XFxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxufVxcblxcbi5kYXJrLW1vZGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcXG4gICAgY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcXG59XFxuXFxuI21vZGV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbiNtb2RlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFxufVxcblxcbiNkYXJrLWljb257XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogNDVwdDtcXG59XFxuXFxubmF2e1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMC41ZW07XFxuXFxufVxcbm5hdj5kaXZ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0c3tcXG4gICAgbWluLWhlaWdodDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHN7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcXG59XFxuLm5hdmJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246anVzdGlmeTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OCwgNzgsIDc4LCAwLjMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZwdDtcXG4gICAgcGFkZGluZzogMC4zZW07XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjcpO1xcbn1cXG5cXG5idXR0b246YWN0aXZle1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDcwLCA5Nyk7XFxufVxcblxcbmlucHV0Lm5hdmJ1dHRvbjpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICByZ2IoMjMzLCA3MCwgOTcpO1xcbiAgICB0cmFuc2l0aW9uOiAwbXM7XFxufVxcblxcbiNhZGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDcwLCA5Nyk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI21haW57XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMjBmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuI2NvbnRlbnQ+ZGl2e1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jY29udGVudD5kaXY+aDN7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiN0b2RvVGl0bGV7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jdG9kb1RpdGxlPmgze1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiN0b2Rve1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxpc3R7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTAxLCAxMDEsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG9kb0lucHV0e1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5jaGVja2JveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjMzLCA3MCwgOTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi50b2RvRGVsQnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6MSU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNoZWNrZWR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIHJnYigyMzMsIDcwLCA5NykgMC4xZW07XFxufVxcblxcbi50aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxucC50aXRsZXtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3RkZWx7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAzZW07XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcbiNwcm9qZWN0RGVsSWNve1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuZm9vdGVyPmF7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuZm9vdGVyPmE+aW1ne1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuZm9vdGVyPmE+aW1nOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZGFya2ltZyBmcm9tICcuL2ltZy9kYXJrLWJ0bi5wbmcnXG5pbXBvcnQgZ2l0aHViaWNvbiBmcm9tICcuL2ltZy9naXRodWIucG5nJ1xuaW1wb3J0IGRlbGV0ZWljb24gZnJvbSBcIi4vaW1nL2RlbGV0ZS5wbmdcIlxuaW1wb3J0IHtwcm9qZWN0c0xpc3QsIGNyZWF0ZVByb2plY3QsIHVwZGF0ZVByb2plY3RzLCBjaG9vc2VQcm9qZWN0LCBhY3R1YWxQcm9qZWN0LCB1cGRhdGVUaXRsZSwgdXBkYXRlRGV0YWlscywgY3JlYXRlVG9kb30gZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IGZhdmljb24gZnJvbSAnLi9pbWcvZmF2aWNvbi5wbmcnXG5pbXBvcnQge2NoZWNrVG9kbywgZGVsZXRlVG9kb30gZnJvbSAnLi90b2RvJ1xuXG5mdW5jdGlvbiBzZXRGYXZJY29uKCl7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2aWNvbicpXG4gICAgaWNvbi5ocmVmID0gZmF2aWNvblxufVxuc2V0RmF2SWNvbigpXG5cbmZ1bmN0aW9uIGhlYWRlcigpIHsvL1NldHMgSWNvbiBmcm9tIGRhcmsgdGhlbWVcbiAgICBsZXQgZGFya2ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFyay1pY29uJylcbiAgICBkYXJraWNvbi5zcmMgPSBkYXJraW1nXG5cbiAgICBsZXQgZGFya2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RlJylcbiAgICBkYXJrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstbW9kZScpXG4gICAgfSlcbn1cbmhlYWRlcigpXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkxpc3QoKXtcbiAgICBsZXQgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHM+YnV0dG9uJylcbiAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoKVxuICAgICAgICB9KSAgIFxuICAgIH0pO1xufVxuY3JlYXRlQnV0dG9uTGlzdCgpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvL0FkZHMgbmV3IHByb2plY3QgdG8gdGhlIGxpc3RcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKVxuICAgIGlmICh0aXRsZS52YWx1ZSAhPT0gJycpe1xuICAgICAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RzKCk7ICAgICBcbiAgICAgICAgY3JlYXRlQnV0dG9uTGlzdCgpIFxuXG4gICAgfVxufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3ROYW1lJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcbiAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKVxuICAgICAgICBpZiAodGl0bGUudmFsdWUgIT09ICcnKXtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RzKCk7ICAgICBcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkxpc3QoKSBcbiAgICAgICAgfSAgIFxuICAgIH1cbn0pXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRlbnQoKXsvL1NldHMgY29udGVudCBvZiB0aGUgcHJvamVjdCBvbiB0aGUgbWFpbiBjb250YWluZXJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBjaG9vc2VQcm9qZWN0KClcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlsc0lucHV0JykudmFsdWUgPSBjdXJyZW50UHJvamVjdC5kZXRhaWxzIFxuICAgIGNvbnRlbnRFdmVudHNNYW5hZ2VyKCk7XG5cbiAgICB1cGRhdGVUb2RvcygpXG59XG5cbmZ1bmN0aW9uIGNsZWFyVG9kb3MoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpLmZvckVhY2godWwgPT4ge1xuICAgICAgICBpZih1bC5jbGFzc0xpc3QgPT0gJ2xpc3QnKXtcbiAgICAgICAgICAgIHVsLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnY2xlYXRUb2RvcygpJywgYWN0dWFsUHJvamVjdClcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3QoKXtcbiAgICBhY3R1YWxQcm9qZWN0LnRvZG8uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy9DcmVhdGluZyBuZXcgZWxlbWVudHMgYW5kIGdpdmluZyB0aGVpciBwcm9wZXJ0aWVzXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJylcbiAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICB1bC5jbGFzc0xpc3Q9J2xpc3QnXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0PSAnY2hlY2tib3gnXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0ID0gJ25hdmJ1dHRvbiBsaXN0SW5wdXQnXG4gICAgICAgIGlucHV0LnZhbHVlID0gZWxlbWVudC50aXRsZVxuICAgICAgICBsZXQgdG9kb0RlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHRvZG9EZWxCdG4uY2xhc3NMaXN0ID0gJ3RvZG9EZWxCdG4nXG4gICAgICAgIHRvZG9EZWxCdG4udGV4dENvbnRlbnQgPSAn4p2MJ1xuICAgICAgICAvL0FwcGVuZCBpdGVtc1xuICAgICAgICB0b2RvTGlzdC5pbnNlcnRCZWZvcmUodWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvSW5wdXQnKSlcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICB1bC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQodG9kb0RlbEJ0bilcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5zdGF0ZSlcbiAgICAgICAgaWYoZWxlbWVudC5zdGF0ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAn4pyTJ1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0lucHV0TGlzdGVuZXIoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdElucHV0JykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRvZG9JbnB1dFVwZGF0ZSlcbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiB0b2RvSW5wdXRVcGRhdGUoKXtcbiAgICBsZXQgbGlzdCA9ICggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RJbnB1dCcpKVxuICAgIGxldCB0b2RvTGlzdCA9IEFycmF5LmZyb20obGlzdClcbiAgICBsZXQgaSA9IHRvZG9MaXN0LmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuICAgIGNvbnNvbGUubG9nKGFjdHVhbFByb2plY3QudG9kb1tpXSwgaSwgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIGFjdHVhbFByb2plY3QudG9kb1tpXS50aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxufSBcblxuZnVuY3Rpb24gY2hlY2tCb3hMaXN0ZW5lcigpe1xuICAgIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tUb2RvKX0pXG5cbn1cblxuZnVuY3Rpb24gdG9kb0RlbGV0ZUxpc3RlbmVyKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EZWxCdG4nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbylcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kb3MoKXtcbiAgICBjbGVhclRvZG9zKCk7XG4gICAgY3JlYXRlVG9kb0xpc3QoKTtcbiAgICBjcmVhdGVUb2RvSW5wdXRMaXN0ZW5lcigpXG4gICAgY2hlY2tCb3hMaXN0ZW5lcigpXG4gICAgdG9kb0RlbGV0ZUxpc3RlbmVyKClcbn1cblxuZnVuY3Rpb24gY29udGVudEV2ZW50c01hbmFnZXIoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgICAgdXBkYXRlVGl0bGUoKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uTGlzdCgpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHNJbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdXBkYXRlRGV0YWlscyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9JbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmKGV2ZW50LmtleSA9PT0nRW50ZXInICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvSW5wdXQnKS52YWx1ZSAhPT0nJyl7XG4gICAgICAgICAgICBjcmVhdGVUb2RvKCk7XG4gICAgICAgICAgICB1cGRhdGVUb2RvcygpO1xuICAgICAgICB9XG4gICAgfSkgXG59XG5cblxuXG5cbmZ1bmN0aW9uIGZvb3RlcigpeyAvL3NldHMgdGhlIGdpdGh1YiBpY29uIGxpbmtcbiAgICBsZXQgZ2l0aHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdGh1YicpXG4gICAgZ2l0aHViLnNyYz1naXRodWJpY29uXG59XG5mb290ZXIoKVxuXG5sZXQgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RGVsSWNvJylcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEljb24oKXtcbiAgICBcbiAgICBkZWxldGVJY29uLnNyYz1kZWxldGVpY29uXG59XG5kZWxldGVQcm9qZWN0SWNvbigpXG5cbmRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGNob3NlbkluZGV4ID0gcHJvamVjdHNMaXN0LmZpbmRJbmRleCh4ID0+IHgudGl0bGUgPT0gdGl0bGUudGV4dENvbnRlbnQpXG4gICAgIGlmIChjaG9zZW5JbmRleCAhPT0gLTEpe1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShjaG9zZW5JbmRleCwgMSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNMaXN0KVxuICAgICAgICB1cGRhdGVQcm9qZWN0cygpXG4gICAgICAgIGNyZWF0ZUJ1dHRvbkxpc3QoKVxuICAgICAgICBjbGVhclRvZG9zKClcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTm8gUHJvamVjdCBTZWxlY3RlZCEnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzSW5wdXQnKS52YWx1ZSA9ICcnXG4gICAgfSBcbiAgICBcbn0pXG5cbi8vc2ltdWxhdGVzIGNsaWNrIG9uIHRoZSBmaXJzdCBwcm9qZWN0IGVsZW1lbnRcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZidXR0b24nKS5jbGljaygpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVUb2RvcyIsImxldCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gcHJvamVjdCAodGl0bGUsZGV0YWlscyl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGV0YWlscyA9ICcnO1xuICAgIHRoaXMudG9kbyA9IFtdXG4gICAgcHJvamVjdHNMaXN0LnB1c2godGhpcylcblxufVxuXG5sZXQgQWxsVG9kb3MgPSBuZXcgcHJvamVjdCgnRXZlcnl0aGluZycpXG5BbGxUb2Rvcy5kZXRhaWxzID0gJ1NvbWUgZGV0YWlscyBoZXJlLi4uJ1xuXG5sZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCl7XG5cbiAgICBuZXcgcHJvamVjdCh0aXRsZS52YWx1ZSlcbiAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuICAgIHRpdGxlLnZhbHVlID0gJydcbiAgICBcbmNvbnNvbGUubG9nKHByb2plY3RzTGlzdClcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS50ZXh0Q29udGVudCA9ICcnXG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmJ1dHRvbicpXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGVcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnXG4gICAgfSlcbn1cblxuXG5sZXQgYWN0dWFsUHJvamVjdCA9ICcnXG5cbmZ1bmN0aW9uIGNob29zZVByb2plY3QoKXtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c0xpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudClcbiAgICBhY3R1YWxQcm9qZWN0ID0gY3VycmVudFByb2plY3Q7XG4gICAgY29uc29sZS5sb2coJ2FjdHVhbCBwcm9qZWN0IGlzICcgKyBhY3R1YWxQcm9qZWN0LnRpdGxlKVxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdFxufVxuXG51cGRhdGVQcm9qZWN0cygpXG5cbmZ1bmN0aW9uIHVwZGF0ZVRpdGxlKCl7XG4gICAgYWN0dWFsUHJvamVjdC50aXRsZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudFxuICAgIHVwZGF0ZVByb2plY3RzKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGV0YWlscyAoKXtcbiAgICBhY3R1YWxQcm9qZWN0LmRldGFpbHMgPSBldmVudC50YXJnZXQudmFsdWVcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbygpe1xuICAgIGZ1bmN0aW9uIHRvZG8odGl0bGUsIHN0YXRlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZVxuICAgICAgICBhY3R1YWxQcm9qZWN0LnRvZG8ucHVzaCh0aGlzKVxuICAgIH1cbiAgICBuZXcgdG9kbyhldmVudC50YXJnZXQudmFsdWUsIGZhbHNlKVxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXG59XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHNMaXN0LFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgdXBkYXRlUHJvamVjdHMsXG4gICAgY2hvb3NlUHJvamVjdCxcbiAgICBhY3R1YWxQcm9qZWN0LFxuICAgIHVwZGF0ZVRpdGxlLFxuICAgIHVwZGF0ZURldGFpbHMsXG4gICAgY3JlYXRlVG9kbyxcbn0iLCJpbXBvcnQgdXBkYXRlVG9kb3MgZnJvbSBcIi4vRE9NXCJcbmltcG9ydCB7IGFjdHVhbFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCJcblxuXG5mdW5jdGlvbiBjaGVja1RvZG8oZXZlbnQpe1xuICAgIGxldCBsaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKSlcbiAgICAvL2xldCB0b2RvTGlzdCA9IEFycmF5LmZyb20obGlzdClcbiAgICBsZXQgaSA9IGxpc3QuaW5kZXhPZihldmVudC50YXJnZXQpXG4gICAgaWYoYWN0dWFsUHJvamVjdC50b2RvW2ldLnN0YXRlID09PSBmYWxzZSl7XG4gICAgICAgIGFjdHVhbFByb2plY3QudG9kb1tpXS5zdGF0ZSA9IHRydWVcbiAgICB9ZWxzZXthY3R1YWxQcm9qZWN0LnRvZG9baV0uc3RhdGUgPSBmYWxzZX1cbiAgICB1cGRhdGVUb2RvcygpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oKXtcbiAgICBsZXQgZGVsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EZWxCdG4nKSlcbiAgICBsZXQgaT0gZGVsQnV0dG9ucy5pbmRleE9mKGV2ZW50LnRhcmdldClcbiAgICBhY3R1YWxQcm9qZWN0LnRvZG8uc3BsaWNlKGksIDEpXG4gICAgdXBkYXRlVG9kb3MoKVxufVxuXG5leHBvcnQge2NoZWNrVG9kbywgZGVsZXRlVG9kb30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7aGVhZGVyLCBmb290ZXJ9IGZyb20gJy4vRE9NJ1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSAnLi9wcm9qZWN0J1xuXG5cbi8vaGVhZGVyKClcblxuLy9mb290ZXIoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9