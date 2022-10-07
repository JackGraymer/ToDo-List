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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: OpenSans;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n}\n\n\n*{/*Global scope*/\n    box-sizing: border-box;\n    font-family: OpenSans, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 1em;\n}\nhtml, body{\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody{\n    display: grid;\n    grid-template-rows: 100px 1fr 100px;\n    grid-template-columns: 300px 1fr;\n    grid-template-areas: \n    'header header'\n    'nav main'\n    'footer footer'\n    ;\n    background-color: rgb(201, 201, 201);\n    color: rgb(51, 51, 51);\n    height: 100vh;\n}\n\n.dark-mode{\n    background-color: rgb(51, 51, 51);\n    color: rgb(201, 201, 201);\n}\n\n#mode{\n    margin: 0;\n    padding: 0;\n    border: none;\n    height: 32px;\n    width: 32px;\n    background-color: transparent;\n    border-radius: 2em;\n    cursor: pointer;\n\n}\n\n#mode:hover{\n    background-color: rgba(0, 0, 0, 0.5);\n\n}\n\n#dark-icon{\n    width: 32px;\n    margin: 0;\n    padding: 0;\n}\n\nheader{\n    grid-area: header;\n    position: sticky;\n    width: 100%;\n    display: flex;\n    padding: 0.1em 0.5em;\n    background-color: rgba(0, 0, 0, 0.1);\n    align-items: center;\n    justify-content: space-between;\n    font-size: 45pt;\n}\n\nnav{\n    grid-area: nav;\n    padding: 0.5em;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: 20pt;\n    display: flex;\n    align-items:center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 0.5em;\n    \n}\nnav>div{\n    padding: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 0.5em;\n}\n\n.projects{\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n}\n.navbutton{\n    width: 100%;\n    text-align:justify;\n    background-color: rgba(78, 78, 78, 0.3);\n    border: none;\n    font-size: 16pt;\n    padding: 0.3em;\n    color: inherit;\n    border-radius: 0.3em;\n    transition: 200ms ;\n}\nbutton:hover{\n    cursor: pointer;\n    transform:scale(105%);\n    background-color: rgba(100, 100, 100, 0.5);\n}\n\ninput.navbutton:focus{\n    outline: none;\n    outline: 2px solid  rgb(233, 70, 97);\n    transition: 0ms;\n}\n\n#add{\n    display: flex;\n    background-color: rgb(233, 70, 97);\n    justify-content: center;\n    font-size: larger;\n    padding: 0;\n}\n\n#main{\n    padding: 0;\n    display: grid;\n    grid-template-rows: auto;\n    justify-content: center;\n    grid-area: main;\n}\n\n#content{\n    width: 800px;\n    background-color: rgb(255, 255, 255, 0.1);\n}\n\n#content>div{\n    padding-bottom: 0;\n}\n\n#content>div>h3{\n    padding: 0;\n}\n\n.list{\n    background-color: rgb(101, 101, 101, 0.2);\n    border-radius: 0.5em;\n    padding: 0;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 0.5em;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: none;\n    border: solid 2px rgb(233, 70, 97);\n    border-radius: 0.1em;\n    background-color: inherit;\n    font-size: 2em;\n    overflow: wrap;\n    color: inherit;\n}\n\n.title{\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0.5em;\n}\np.title{\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0;\n    margin: 0;\n}\n\n.projectdel{\n    padding: 0;\n    width: 3em;\n    height: 3em;\n    background-color: transparent;\n    position: absolute;\n    right: 0;\n    border: none;\n    border-radius: 50%;\n}\n#projectDelIco{\n    padding: 0;\n    width: 100%;\n}\n\nfooter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-area: footer;\n    background-color: rgba(0, 0, 0, 0.1);\n}\nfooter>a{\n    padding: 1em;\n}\nfooter>a>img{\n    padding: 0;\n    width: 2em;\n    transition: 300ms;\n}\nfooter>a>img:hover{\n    transform: rotate(360deg) scale(1.3);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB;;AAEJ;;;AAGA,EAAE,eAAe;IACb,sBAAsB;IACtB,gIAAgI;IAChI,YAAY;AAChB;AACA;IACI,SAAS;IACT,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,gCAAgC;IAChC;;;;IAIA;IACA,oCAAoC;IACpC,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,iCAAiC;IACjC,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,eAAe;;AAEnB;;AAEA;IACI,oCAAoC;;AAExC;;AAEA;IACI,WAAW;IACX,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,oBAAoB;IACpB,oCAAoC;IACpC,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,YAAY;IACZ,oCAAoC;IACpC,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,8BAA8B;IAC9B,UAAU;;AAEd;AACA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,uCAAuC;IACvC,YAAY;IACZ,eAAe;IACf,cAAc;IACd,cAAc;IACd,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,qBAAqB;IACrB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,aAAa;IACb,wBAAwB;IACxB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,yCAAyC;IACzC,oBAAoB;IACpB,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,UAAU;IACV,aAAa;IACb,cAAc;IACd,YAAY;IACZ,kCAAkC;IAClC,oBAAoB;IACpB,yBAAyB;IACzB,cAAc;IACd,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,SAAS;AACb;;AAEA;IACI,UAAU;IACV,UAAU;IACV,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,oCAAoC;AACxC;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,oCAAoC;AACxC","sourcesContent":["@font-face {\n    font-family: OpenSans;\n    src: url(./font/OpenSans-VariableFont_wdth\\,wght.ttf),\n        url(./font/OpenSans-Italic-VariableFont_wdth\\,wght.ttf)\n}\n\n\n*{/*Global scope*/\n    box-sizing: border-box;\n    font-family: OpenSans, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 1em;\n}\nhtml, body{\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody{\n    display: grid;\n    grid-template-rows: 100px 1fr 100px;\n    grid-template-columns: 300px 1fr;\n    grid-template-areas: \n    'header header'\n    'nav main'\n    'footer footer'\n    ;\n    background-color: rgb(201, 201, 201);\n    color: rgb(51, 51, 51);\n    height: 100vh;\n}\n\n.dark-mode{\n    background-color: rgb(51, 51, 51);\n    color: rgb(201, 201, 201);\n}\n\n#mode{\n    margin: 0;\n    padding: 0;\n    border: none;\n    height: 32px;\n    width: 32px;\n    background-color: transparent;\n    border-radius: 2em;\n    cursor: pointer;\n\n}\n\n#mode:hover{\n    background-color: rgba(0, 0, 0, 0.5);\n\n}\n\n#dark-icon{\n    width: 32px;\n    margin: 0;\n    padding: 0;\n}\n\nheader{\n    grid-area: header;\n    position: sticky;\n    width: 100%;\n    display: flex;\n    padding: 0.1em 0.5em;\n    background-color: rgba(0, 0, 0, 0.1);\n    align-items: center;\n    justify-content: space-between;\n    font-size: 45pt;\n}\n\nnav{\n    grid-area: nav;\n    padding: 0.5em;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: 20pt;\n    display: flex;\n    align-items:center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 0.5em;\n    \n}\nnav>div{\n    padding: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 0.5em;\n}\n\n.projects{\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n}\n.navbutton{\n    width: 100%;\n    text-align:justify;\n    background-color: rgba(78, 78, 78, 0.3);\n    border: none;\n    font-size: 16pt;\n    padding: 0.3em;\n    color: inherit;\n    border-radius: 0.3em;\n    transition: 200ms ;\n}\nbutton:hover{\n    cursor: pointer;\n    transform:scale(105%);\n    background-color: rgba(100, 100, 100, 0.5);\n}\n\ninput.navbutton:focus{\n    outline: none;\n    outline: 2px solid  rgb(233, 70, 97);\n    transition: 0ms;\n}\n\n#add{\n    display: flex;\n    background-color: rgb(233, 70, 97);\n    justify-content: center;\n    font-size: larger;\n    padding: 0;\n}\n\n#main{\n    padding: 0;\n    display: grid;\n    grid-template-rows: auto;\n    justify-content: center;\n    grid-area: main;\n}\n\n#content{\n    width: 800px;\n    background-color: rgb(255, 255, 255, 0.1);\n}\n\n#content>div{\n    padding-bottom: 0;\n}\n\n#content>div>h3{\n    padding: 0;\n}\n\n.list{\n    background-color: rgb(101, 101, 101, 0.2);\n    border-radius: 0.5em;\n    padding: 0;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 0.5em;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: none;\n    border: solid 2px rgb(233, 70, 97);\n    border-radius: 0.1em;\n    background-color: inherit;\n    font-size: 2em;\n    overflow: wrap;\n    color: inherit;\n}\n\n.title{\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0.5em;\n}\np.title{\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    font-size: 20pt;\n    padding: 0;\n    margin: 0;\n}\n\n.projectdel{\n    padding: 0;\n    width: 3em;\n    height: 3em;\n    background-color: transparent;\n    position: absolute;\n    right: 0;\n    border: none;\n    border-radius: 50%;\n}\n#projectDelIco{\n    padding: 0;\n    width: 100%;\n}\n\nfooter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-area: footer;\n    background-color: rgba(0, 0, 0, 0.1);\n}\nfooter>a{\n    padding: 1em;\n}\nfooter>a>img{\n    padding: 0;\n    width: 2em;\n    transition: 300ms;\n}\nfooter>a>img:hover{\n    transform: rotate(360deg) scale(1.3);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _img_dark_btn_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/dark-btn.png */ "./src/img/dark-btn.png");
/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/github.png */ "./src/img/github.png");
/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/favicon.png */ "./src/img/favicon.png");






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
    console.log()
    contentEventsManager()
}

function contentEventsManager(){
    console.log('this')
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
        title.textContent = 'No Project Selected!'
    } 
    
})
    

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chooseProject": () => (/* binding */ chooseProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "updateProjects": () => (/* binding */ updateProjects)
/* harmony export */ });
let projectsList = [];

function project (title,details){
    this.title = title;
    this.details = '';
    this.todo = []
    projectsList.push(this)

}
let jimmi = new project('Jimmy')
jimmi.details = 'Jimmy is 13 and likes fortnite'

let sicarios = new project('satanology')

let title = document.querySelector('#newProjectName')

function createProject(){

    new project(title.value)
    //document.querySelector('.projects').textContent = 'Projects'
    title.value = ''
    
console.log(projectsList)
}

function updateProjects(){
    document.querySelector('.projects').textContent = 'Projects'
    projectsList.forEach(project => {
        let button = document.createElement('button');
        button.classList.add('navbutton')
        button.textContent = project.title
        document.querySelector('.projects').appendChild(button)
        title.value = ''
    })
}

function chooseProject(){
    let currentProject = projectsList.find(project => project.title === event.target.textContent)
    console.log(currentProject)
    return currentProject
}

updateProjects()



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ2dCO0FBQ0k7OztBQUd4Qzs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL1RvRG8gTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RvRG8gTGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Ub0RvIExpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ub0RvIExpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vVG9EbyBMaXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9Ub0RvIExpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9PcGVuU2Fucy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKVxcbn1cXG5cXG5cXG4qey8qR2xvYmFsIHNjb3BlKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLCAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuaHRtbCwgYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDEwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbmF2IG1haW4nXFxuICAgICdmb290ZXIgZm9vdGVyJ1xcbiAgICA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmRhcmstbW9kZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcbiAgICBjb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbn1cXG5cXG4jbW9kZXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI21vZGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG5cXG59XFxuXFxuI2RhcmstaWNvbntcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiA0NXB0O1xcbn1cXG5cXG5uYXZ7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMC41ZW07XFxuICAgIFxcbn1cXG5uYXY+ZGl2e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbi5uYXZidXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzgsIDc4LCA3OCwgMC4zKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHQ7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIDtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxMDUlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpO1xcbn1cXG5cXG5pbnB1dC5uYXZidXR0b246Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAgcmdiKDIzMywgNzAsIDk3KTtcXG4gICAgdHJhbnNpdGlvbjogMG1zO1xcbn1cXG5cXG4jYWRke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA3MCwgOTcpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNtYWlue1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxufVxcblxcbiNjb250ZW50e1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG5cXG4jY29udGVudD5kaXZ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG4jY29udGVudD5kaXY+aDN7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5saXN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMDEsIDEwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAwLjVlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDIzMywgNzAsIDk3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4xZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvdmVyZmxvdzogd3JhcDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi50aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG59XFxucC50aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0ZGVse1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogM2VtO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jcHJvamVjdERlbEljb3tcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbmZvb3Rlcj5he1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcbmZvb3Rlcj5hPmltZ3tcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcbmZvb3Rlcj5hPmltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjMpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCOztBQUVKOzs7QUFHQSxFQUFFLGVBQWU7SUFDYixzQkFBc0I7SUFDdEIsZ0lBQWdJO0lBQ2hJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDOzs7O0lBSUE7SUFDQSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsVUFBVTs7QUFFZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xcbiAgICBzcmM6IHVybCguL2ZvbnQvT3BlblNhbnMtVmFyaWFibGVGb250X3dkdGhcXFxcLHdnaHQudHRmKSxcXG4gICAgICAgIHVybCguL2ZvbnQvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoXFxcXCx3Z2h0LnR0ZilcXG59XFxuXFxuXFxuKnsvKkdsb2JhbCBzY29wZSovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucywgJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcbmh0bWwsIGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ25hdiBtYWluJ1xcbiAgICAnZm9vdGVyIGZvb3RlcidcXG4gICAgO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XFxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5kYXJrLW1vZGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcXG4gICAgY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcXG59XFxuXFxuI21vZGV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbiNtb2RlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFxufVxcblxcbiNkYXJrLWljb257XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogNDVwdDtcXG59XFxuXFxubmF2e1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDAuNWVtO1xcbiAgICBcXG59XFxubmF2PmRpdntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubmF2YnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc4LCA3OCwgNzgsIDAuMyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB0O1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyA7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06c2NhbGUoMTA1JSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcXG59XFxuXFxuaW5wdXQubmF2YnV0dG9uOmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgIHJnYigyMzMsIDcwLCA5Nyk7XFxuICAgIHRyYW5zaXRpb246IDBtcztcXG59XFxuXFxuI2FkZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgNzAsIDk3KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbWFpbntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuI2NvbnRlbnQ+ZGl2e1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuI2NvbnRlbnQ+ZGl2Pmgze1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubGlzdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTAxLCAxMDEsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMC41ZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYigyMzMsIDcwLCA5Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IHdyYXA7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcbnAudGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdGRlbHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDNlbTtcXG4gICAgaGVpZ2h0OiAzZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuI3Byb2plY3REZWxJY297XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5mb290ZXI+YXtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5mb290ZXI+YT5pbWd7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5mb290ZXI+YT5pbWc6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4zKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkYXJraW1nIGZyb20gJy4vaW1nL2RhcmstYnRuLnBuZydcbmltcG9ydCBnaXRodWJpY29uIGZyb20gJy4vaW1nL2dpdGh1Yi5wbmcnXG5pbXBvcnQgZGVsZXRlaWNvbiBmcm9tIFwiLi9pbWcvZGVsZXRlLnBuZ1wiXG5pbXBvcnQge3Byb2plY3RzTGlzdCwgY3JlYXRlUHJvamVjdCwgdXBkYXRlUHJvamVjdHMsIGNob29zZVByb2plY3R9IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCBmYXZpY29uIGZyb20gJy4vaW1nL2Zhdmljb24ucG5nJ1xuXG5mdW5jdGlvbiBzZXRGYXZJY29uKCl7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2aWNvbicpXG4gICAgaWNvbi5ocmVmID0gZmF2aWNvblxufVxuc2V0RmF2SWNvbigpXG5cbmZ1bmN0aW9uIGhlYWRlcigpIHsvL1NldHMgSWNvbiBmcm9tIGRhcmsgdGhlbWVcbiAgICBsZXQgZGFya2ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFyay1pY29uJylcbiAgICBkYXJraWNvbi5zcmMgPSBkYXJraW1nXG5cbiAgICBsZXQgZGFya2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RlJylcbiAgICBkYXJrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstbW9kZScpXG4gICAgfSlcbn1cbmhlYWRlcigpXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkxpc3QoKXtcbiAgICBsZXQgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHM+YnV0dG9uJylcbiAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoKVxuICAgICAgICB9KSAgIFxuICAgIH0pO1xufVxuY3JlYXRlQnV0dG9uTGlzdCgpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvL0FkZHMgbmV3IHByb2plY3QgdG8gdGhlIGxpc3RcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKVxuICAgIGlmICh0aXRsZS52YWx1ZSAhPT0gJycpe1xuICAgICAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RzKCk7ICAgICBcbiAgICAgICAgY3JlYXRlQnV0dG9uTGlzdCgpIFxuXG4gICAgfVxufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3ROYW1lJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcbiAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKVxuICAgICAgICBpZiAodGl0bGUudmFsdWUgIT09ICcnKXtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RzKCk7ICAgICBcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkxpc3QoKSBcbiAgICAgICAgfSAgIFxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIHBvcHVsYXRlQ29udGVudCgpey8vU2V0cyBjb250ZW50IG9mIHRoZSBwcm9qZWN0IG9uIHRoZSBtYWluIGNvbnRhaW5lclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGNob29zZVByb2plY3QoKVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzSW5wdXQnKS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LmRldGFpbHMgXG4gICAgY29uc29sZS5sb2coKVxuICAgIGNvbnRlbnRFdmVudHNNYW5hZ2VyKClcbn1cblxuZnVuY3Rpb24gY29udGVudEV2ZW50c01hbmFnZXIoKXtcbiAgICBjb25zb2xlLmxvZygndGhpcycpXG59XG5cbmZ1bmN0aW9uIGZvb3RlcigpeyAvL3NldHMgdGhlIGdpdGh1YiBpY29uIGxpbmtcbiAgICBsZXQgZ2l0aHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdGh1YicpXG4gICAgZ2l0aHViLnNyYz1naXRodWJpY29uXG59XG5mb290ZXIoKVxuXG5sZXQgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RGVsSWNvJylcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEljb24oKXtcbiAgICBcbiAgICBkZWxldGVJY29uLnNyYz1kZWxldGVpY29uXG59XG5kZWxldGVQcm9qZWN0SWNvbigpXG5cbmRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGNob3NlbkluZGV4ID0gcHJvamVjdHNMaXN0LmZpbmRJbmRleCh4ID0+IHgudGl0bGUgPT0gdGl0bGUudGV4dENvbnRlbnQpXG4gICAgIGlmIChjaG9zZW5JbmRleCAhPT0gLTEpe1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShjaG9zZW5JbmRleCwgMSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNMaXN0KVxuICAgICAgICB1cGRhdGVQcm9qZWN0cygpXG4gICAgICAgIGNyZWF0ZUJ1dHRvbkxpc3QoKVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdObyBQcm9qZWN0IFNlbGVjdGVkISdcbiAgICB9IFxuICAgIFxufSlcbiAgICAiLCJsZXQgcHJvamVjdHNMaXN0ID0gW107XG5cbmZ1bmN0aW9uIHByb2plY3QgKHRpdGxlLGRldGFpbHMpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLnRvZG8gPSBbXVxuICAgIHByb2plY3RzTGlzdC5wdXNoKHRoaXMpXG5cbn1cbmxldCBqaW1taSA9IG5ldyBwcm9qZWN0KCdKaW1teScpXG5qaW1taS5kZXRhaWxzID0gJ0ppbW15IGlzIDEzIGFuZCBsaWtlcyBmb3J0bml0ZSdcblxubGV0IHNpY2FyaW9zID0gbmV3IHByb2plY3QoJ3NhdGFub2xvZ3knKVxuXG5sZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCl7XG5cbiAgICBuZXcgcHJvamVjdCh0aXRsZS52YWx1ZSlcbiAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuICAgIHRpdGxlLnZhbHVlID0gJydcbiAgICBcbmNvbnNvbGUubG9nKHByb2plY3RzTGlzdClcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YnV0dG9uJylcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJydcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaG9vc2VQcm9qZWN0KCl7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSBldmVudC50YXJnZXQudGV4dENvbnRlbnQpXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0XG59XG5cbnVwZGF0ZVByb2plY3RzKClcblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0c0xpc3QsXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0cyxcbiAgICBjaG9vc2VQcm9qZWN0LFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtoZWFkZXIsIGZvb3Rlcn0gZnJvbSAnLi9ET00nXG5pbXBvcnQgeyBwcm9qZWN0c0xpc3QgfSBmcm9tICcuL3Byb2plY3QnXG5cblxuLy9oZWFkZXIoKVxuXG4vL2Zvb3RlcigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=