(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/polyfill"), require("url"));
	else if(typeof define === 'function' && define.amd)
		define(["@babel/polyfill", "url"], factory);
	else if(typeof exports === 'object')
		exports["RFetch"] = factory(require("@babel/polyfill"), require("url"));
	else
		root["RFetch"] = factory(root["@babel/polyfill"], root["url"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__babel_polyfill__, __WEBPACK_EXTERNAL_MODULE_url__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}



var fetch = global.fetch;
var fetchErrorHandler = null;

var Component =
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(options) {
        var _options$withCredenti,
          withCredentials,
          _options$url,
          url,
          _options$method,
          method,
          body,
          data,
          others,
          urlEntity,
          result;

        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  (_options$withCredenti = options.withCredentials),
                    (withCredentials =
                      _options$withCredenti === void 0
                        ? true
                        : _options$withCredenti),
                    (_options$url = options.url),
                    (url = _options$url === void 0 ? "" : _options$url),
                    (_options$method = options.method),
                    (method =
                      _options$method === void 0 ? "GET" : _options$method),
                    (body = options.body),
                    (data = options.data),
                    (others = _objectWithoutProperties(options, [
                      "withCredentials",
                      "url",
                      "method",
                      "body",
                      "data"
                    ]));
                  urlEntity = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(url);

                  if (typeof data == "string" || _typeof(data) == "object") {
                    if (method.toUpperCase() == "GET") {
                      if (data instanceof global.URLSearchParams) {
                        data = data.toString();
                      }

                      if (typeof data != "string") {
                        data = Object.keys(data)
                          .map(function(key) {
                            var value = data[key];

                            if (_typeof(value) == "object") {
                              value = JSON.stringify(value);
                            }

                            return [
                              global.encodeURIComponent(key),
                              "=",
                              global.encodeURIComponent(value)
                            ].join("");
                          })
                          .join("&");
                      }

                      url = url__WEBPACK_IMPORTED_MODULE_1___default.a.format({
                        protocol: urlEntity.protocol,
                        host: urlEntity.host,
                        auth: urlEntity.auth,
                        pathname: urlEntity.pathname,
                        search: data ? "?" + data : null
                      });
                      body = null;
                      data = null;
                    } else {
                      if (data instanceof global.FormData) {
                        body = data;
                        data = null;
                      } else {
                        if (data instanceof global.URLSearchParams) {
                          data = data.toString();
                        }

                        if (typeof data != "string") {
                          data = Object.keys(data)
                            .map(function(key) {
                              var value = data[key];

                              if (_typeof(value) == "object") {
                                value = JSON.stringify(value);
                              }

                              return [
                                global.encodeURIComponent(key),
                                "=",
                                global.encodeURIComponent(value)
                              ].join("");
                            })
                            .join("&");
                        }

                        body = data;
                        data = null;
                      }
                    }
                  }

                  _context.prev = 3;
                  _context.next = 6;
                  return fetch(
                    url,
                    _objectSpread(
                      {
                        method: method
                      },
                      typeof body == "string" ||
                        body instanceof global.URLSearchParams ||
                        body instanceof global.FormData ||
                        body instanceof global.Blob ||
                        body instanceof global.File
                        ? {
                            body: body
                          }
                        : _typeof(body) == "object"
                        ? {
                            body: JSON.stringify(body)
                          }
                        : {},
                      others,
                      withCredentials
                        ? {
                            credentials: "include"
                          }
                        : {}
                    )
                  );

                case 6:
                  result = _context.sent;
                  return _context.abrupt("return", result);

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](3);

                  if (!fetchErrorHandler) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 15;
                  return fetchErrorHandler(_context.t0);

                case 15:
                  _context.next = 18;
                  break;

                case 17:
                  throw _context.t0;

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          },
          _callee,
          this,
          [[3, 10]]
        );
      })
    );

    return function Component(_x) {
      return _ref.apply(this, arguments);
    };
  })();

Component.fetchError = function(handler) {
  fetchErrorHandler = handler;
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_polyfill__;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_url__;

/***/ })

/******/ })["default"];
});