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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/field.png":
/*!**************************!*\
  !*** ./assets/field.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/field.png");

/***/ }),

/***/ "./dist/images/blacklogo.png":
/*!***********************************!*\
  !*** ./dist/images/blacklogo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/blacklogo.png");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = ['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress', 'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }

    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, mergeDeepProperties);
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */


function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */


function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_currentRound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/currentRound */ "./src/scripts/currentRound.js");
/* harmony import */ var _scripts_standings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/standings */ "./src/scripts/standings.js");
/* harmony import */ var _scripts_openInstructionsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/openInstructionsModal */ "./src/scripts/openInstructionsModal.js");




window.addEventListener("DOMContentLoaded", function () {
  // let round = 'Regular Season - 12' ;
  // GET CURRENT ROUND AND RENDER GAMES AND STANDINGS
  Object(_scripts_currentRound__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_scripts_openInstructionsModal__WEBPACK_IMPORTED_MODULE_3__["default"])(); // renderGames(round);
  // renderGameStat();
  // const navbarLogo = document.querySelector("#navbar-logo");
  // navbarLogo.addEventListener('click', () => renderGames(round));
});

/***/ }),

/***/ "./src/scripts/currentRound.js":
/*!*************************************!*\
  !*** ./src/scripts/currentRound.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games */ "./src/scripts/games.js");
/* harmony import */ var _standings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standings */ "./src/scripts/standings.js");




var currentRound = function currentRound() {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("currentround").then(function (res) {
    var currentR = res.data.response[0]; // console.log(res.data.response[0]);

    Object(_games__WEBPACK_IMPORTED_MODULE_1__["default"])(currentR);
    Object(_standings__WEBPACK_IMPORTED_MODULE_2__["default"])(); // 

    var navbarLogo = document.querySelector("#navbar-logo");
    navbarLogo.addEventListener('click', function () {
      return Object(_games__WEBPACK_IMPORTED_MODULE_1__["default"])(currentR);
    });
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (currentRound);

/***/ }),

/***/ "./src/scripts/drawPie.js":
/*!********************************!*\
  !*** ./src/scripts/drawPie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var drawPie = function drawPie(vote1, vote2) {
  var dims = {
    height: 300,
    width: 300,
    radius: 150
  };
  var cent = {
    x: dims.width / 2 + 5,
    y: dims.height / 2 + 5
  };
  var svg = d3.select('#pie-box').append('svg').attr('width', dims.width + 50).attr('height', dims.height + 50);
  var graph = svg.append('g').attr('transform', "translate(".concat(cent.x, ", ").concat(cent.y, ")"));
  var pie = d3.pie().sort(null).value(function (d) {
    return d.value;
  });
  var arcPath = d3.arc().outerRadius(dims.radius).innerRadius(dims.radius / 1.5);
  var color = d3.scaleOrdinal(['#f5b7cd', '#0D0D0E']);

  var update = function update(data) {
    color.domain(['team1', 'team2']);
    var paths = graph.selectAll('path').data(pie(data));
    paths.exit().remove();
    paths.attr('d', arcPath);
    paths.enter().append('path').attr('class', 'arc').attr('stroke', '#fff').attr('stroke-width', 2).attr('fill', function (d) {
      return color(d.data.data.name);
    }).transition().duration(1500).attrTween('d', arcTweenEnter);
  };

  var data = pie([{
    name: 'team2',
    value: vote2
  }, {
    name: 'team1',
    value: vote1
  }]);

  var arcTweenEnter = function arcTweenEnter(d) {
    var i = d3.interpolate(d.endAngle, d.startAngle);
    return function (t) {
      d.startAngle = i(t);
      return arcPath(d);
    };
  };

  update(data);
};

/* harmony default export */ __webpack_exports__["default"] = (drawPie);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_field_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/field.png */ "./assets/field.png");
/* harmony import */ var _gamestat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamestat */ "./src/scripts/gamestat.js");
/* harmony import */ var _getFixturePlayersStat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getFixturePlayersStat */ "./src/scripts/getFixturePlayersStat.js");
/* harmony import */ var _renderPlayerModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderPlayerModal */ "./src/scripts/renderPlayerModal.js");
/* harmony import */ var _openInstructionsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openInstructionsModal */ "./src/scripts/openInstructionsModal.js");







var renderGameById = function renderGameById(fixtureId, score1, score2) {
  var leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.innerHTML = "<div></div>";
  leagueInfoDiv.classList.remove('left');
  var allGamesContentDiv = document.getElementById("all-games");
  allGamesContentDiv.innerHTML = "<div id='one-game'></div>";
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./game?fixtureId=".concat(fixtureId)).then(function (res) {
    // console.log(res.data)
    //clear live updates interval and local storage
    clearInterval(localStorage.getItem('localStInterval'));
    localStorage.clear();
    var oneGameContentDiv = document.getElementById("one-game");
    var fieldDiv = document.createElement('div');
    var squadsDiv = document.createElement('div');
    fieldDiv.classList.add('field-box');
    squadsDiv.classList.add('squad-box');
    squadsDiv.innerHTML = "\n            <div id='team-1-box'></div>\n            <div id='team-2-box'></div>\n            ";
    oneGameContentDiv.append(squadsDiv);
    fieldDiv.innerHTML = "\n        <div class=\"field-img\">\n            <img class=\"image\" src=\"".concat(_assets_field_png__WEBPACK_IMPORTED_MODULE_1__["default"], "\"/>\n            <div id='gk-1' class='rows'></div>\n            <div id='def-1' class='rows'></div>\n            <div id='mid-1' class='rows'></div>\n            <div id='fwd-1' class='rows'></div>\n            <div id='fwd-2' class='rows'></div>\n            <div id='mid-2' class='rows'></div>\n            <div id='def-2' class='rows'></div>\n            <div id='gk-2' class='rows'></div>\n        </div>\n        ");
    oneGameContentDiv.append(fieldDiv);
    var gk1Div = document.getElementById("gk-1");
    var def1Div = document.getElementById("def-1");
    var mid1Div = document.getElementById("mid-1");
    var fwd1Div = document.getElementById("fwd-1");
    var gk2Div = document.getElementById("gk-2");
    var def2Div = document.getElementById("def-2");
    var mid2Div = document.getElementById("mid-2");
    var fwd2Div = document.getElementById("fwd-2"); //adding players inside squads section

    var team1Div = document.getElementById("team-1-box");
    team1Div.innerHTML = "\n                        <div class='team-1-header-box'>\n                            <div class='name'>".concat(res.data.response[0].team.name, " </div>\n                            <div class='logo'>\n                            <img src=\"").concat(res.data.response[0].team.logo, "\"/>\n                            </div> \n                        </div>");
    var team2Div = document.getElementById("team-2-box");
    team2Div.innerHTML = "\n                        <div class='team-2-header-box'>\n                            <div class='name'>".concat(res.data.response[1].team.name, "</div>\n                            <div class='logo'>\n                                <img src=\"").concat(res.data.response[1].team.logo, "\"/>\n                            </div> \n                        </div>"); //place players on a field according to their actual position and team formation

    res.data.response.forEach(function (command, cidx) {
      // console.log(command)
      command.startXI.forEach(function (plr, pidx) {
        if (cidx === 0) {
          var playerDiv = document.createElement('div');
          playerDiv.classList.add('team-1');
          playerDiv.innerHTML = "\n                        <div class='number'>".concat(plr.player.number, "</div>\n                        <div class='name'>").concat(plr.player.name, "</div> \n                        <div class='pos'>  (").concat(plr.player.pos, ")</div>\n                    ");

          if (plr.player.pos === 'G') {
            var div = document.createElement('div');
            div.classList.add('pl1', 'pl-select');
            div.setAttribute('playerId', plr.player.id);
            div.setAttribute('teamId', command.team.id);
            div.innerText = plr.player.number;
            gk1Div.append(div);
          } else if (plr.player.pos === 'D') {
            var _div = document.createElement('div');

            _div.classList.add('pl1', 'pl-select');

            _div.setAttribute('playerId', plr.player.id);

            _div.setAttribute('teamId', command.team.id);

            _div.innerText = plr.player.number;
            def1Div.append(_div);
          } else if (plr.player.pos === 'M') {
            var _div2 = document.createElement('div');

            _div2.classList.add('pl1', 'pl-select');

            _div2.setAttribute('playerId', plr.player.id);

            _div2.setAttribute('teamId', command.team.id);

            _div2.innerText = plr.player.number;
            mid1Div.append(_div2);
          } else if (plr.player.pos === 'F') {
            var _div3 = document.createElement('div');

            _div3.classList.add('pl1', 'pl-select');

            _div3.setAttribute('playerId', plr.player.id);

            _div3.setAttribute('teamId', command.team.id);

            _div3.innerText = plr.player.number;
            fwd1Div.append(_div3);
          }

          team1Div.appendChild(playerDiv);
        } else {
          var _playerDiv = document.createElement('div');

          _playerDiv.classList.add('team-2');

          _playerDiv.innerHTML = "\n                        <div class='number'>".concat(plr.player.number, "</div>\n                        <div class='name'>").concat(plr.player.name, "</div> \n                        <div class='pos'>  (").concat(plr.player.pos, ")</div>\n                    ");

          if (plr.player.pos === 'G') {
            var _div4 = document.createElement('div');

            _div4.classList.add('pl2', 'pl-select');

            _div4.setAttribute('playerId', plr.player.id);

            _div4.setAttribute('teamId', command.team.id);

            _div4.innerText = plr.player.number;
            gk2Div.append(_div4);
          } else if (plr.player.pos === 'D') {
            var _div5 = document.createElement('div');

            _div5.classList.add('pl2', 'pl-select');

            _div5.setAttribute('playerId', plr.player.id);

            _div5.setAttribute('teamId', command.team.id);

            _div5.innerText = plr.player.number;
            def2Div.append(_div5);
          } else if (plr.player.pos === 'M') {
            var _div6 = document.createElement('div');

            _div6.classList.add('pl2', 'pl-select');

            _div6.setAttribute('playerId', plr.player.id);

            _div6.setAttribute('teamId', command.team.id);

            _div6.innerText = plr.player.number;
            mid2Div.append(_div6);
          } else if (plr.player.pos === 'F') {
            var _div7 = document.createElement('div');

            _div7.classList.add('pl2', 'pl-select');

            _div7.setAttribute('playerId', plr.player.id);

            _div7.setAttribute('teamId', command.team.id);

            _div7.innerText = plr.player.number;
            fwd2Div.append(_div7);
          }

          team2Div.appendChild(_playerDiv, fixtureId);
        }
      });
    }); // renderGameStat(fixtureId, score1, score2);

    Object(_getFixturePlayersStat__WEBPACK_IMPORTED_MODULE_3__["default"])(fixtureId).then(function (FixturePlayersStat) {
      // console.log(FixturePlayersStat)
      Object(_gamestat__WEBPACK_IMPORTED_MODULE_2__["default"])(fixtureId, score1, score2, FixturePlayersStat); //modal functionality

      Object(_renderPlayerModal__WEBPACK_IMPORTED_MODULE_4__["default"])(squadsDiv, FixturePlayersStat, fixtureId);
    });
    Object(_openInstructionsModal__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (renderGameById);

/***/ }),

/***/ "./src/scripts/games.js":
/*!******************************!*\
  !*** ./src/scripts/games.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _renderVotingModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderVotingModal */ "./src/scripts/renderVotingModal.js");
/* harmony import */ var _gamesRefresh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamesRefresh */ "./src/scripts/gamesRefresh.js");
/* harmony import */ var _dist_images_blacklogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dist/images/blacklogo.png */ "./dist/images/blacklogo.png");






var renderGames = function renderGames(round) {
  var allGamesDiv = document.getElementById("all-games");
  var allGamesBoxDiv = document.createElement("div");
  allGamesDiv.innerHTML = "<div></div>";
  var leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.classList.add('left');
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./games?round=".concat(round)).then(function (res) {
    var fixturesArr = res.data.response;
    var sectionNameDiv = document.createElement("div");
    sectionNameDiv.classList.add("section-name");
    var liveGamesStatus = false;
    var nextSeason = res.data.response[0].league.season + 1;
    leagueInfoDiv.innerHTML = "\n        <div class='league-box'>\n            <div class='country-box'>\n                <div class='name'>".concat(res.data.response[0].league.country, "</div>\n                <div class='flag'>\n                    <img src=\"").concat(res.data.response[0].league.flag, "\"/>\n                </div>\n            </div>\n            <div class='logo-box'>\n            <img src=\"").concat(_dist_images_blacklogo_png__WEBPACK_IMPORTED_MODULE_4__["default"], "\"/>\n            </div>\n            <div class='league-name'>\n            ").concat(res.data.response[0].league.name, "\n            </div>\n            <div class='season-box'>\n                ").concat(res.data.response[0].league.season, "-").concat(nextSeason, "\n            </div>\n          \n            <div class='epl-link'>\n                <a href='https://www.premierleague.com/' rel='noopener noreferrer' target=\"_blank\">Visit EPL</a>   \n            </div>\n\n            <div class='by-ns'>\n                <div class='at-year'>\n                    <i class=\"far fa-copyright\"></i>").concat(new Date().getFullYear(), "\n                </div>\n                <div class='name'>\n                    <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target=\"_blank\">by Nikolay Shatalov</a>\n                </div>\n            </div>\n        </div>\n        ");
    var currentRoundString = res.data.response[0].league.round;
    var currentRound = "".concat(currentRoundString.split(' ').pop(), " ");
    var prevRound = parseInt(currentRound) - 1;
    var nextRound = parseInt(currentRound) + 1;
    sectionNameDiv.innerHTML = "\n            <div class='roundPrev'>\n                <i class=\"fas fa-chevron-left\"></i> GO TO ROUND ".concat(prevRound, "\n            </div>\n            <div class='roundCurr'>\n                 ALL GAMES - ROUND ").concat(currentRound, " \n            </div>\n            <div class='roundNext'>\n                GO TO ROUND ").concat(nextRound, " <i class=\"fas fa-chevron-right\"></i>\n            </div>\n            ");
    allGamesDiv.append(sectionNameDiv);
    var pRound = "Regular Season - ".concat(prevRound);
    var nRound = "Regular Season - ".concat(nextRound);
    var previousRound = document.querySelector(".roundPrev");
    var followingRound = document.querySelector(".roundNext");
    prevRound !== 0 ? previousRound.addEventListener('click', function () {
      return renderGames(pRound);
    }) : ""; // previousRound.addEventListener('click', () => renderGames(pRound));

    nextRound === 38 ? '' : followingRound.addEventListener('click', function () {
      return renderGames(nRound);
    });
    allGamesBoxDiv.classList.add("all-games-box");
    allGamesDiv.append(allGamesBoxDiv);
    var gameLiveStatus = ['1H', 'HT', '2H', 'ET', 'P', 'BT'];
    var gameNotLiveStatus = ['NS', 'FT'];
    fixturesArr.forEach(function (fix, idx) {
      var team1 = fix.teams.home.name;
      var logo1 = fix.teams.home.logo;
      var team2 = fix.teams.away.name;
      var logo2 = fix.teams.away.logo;
      var score1 = fix.goals.home;
      var score2 = fix.goals.away;
      var gameStatus = fix.fixture.status.short;
      var gameId = fix.fixture.id; // to check if at leat one game is live to enable updates

      if (gameLiveStatus.includes(gameStatus)) liveGamesStatus = true;
      var fixtureRowDiv = document.createElement('div');
      var gameStatusRowDiv = document.createElement('div');
      var scoreBoxDiv = document.createElement('div');
      fixtureRowDiv.classList.add('fixture-box');
      gameStatusRowDiv.classList.add('game-status-row');
      scoreBoxDiv.classList.add('score-box');
      fixtureRowDiv.setAttribute('gameId', gameId); // if game is live then show 'score', otherwise show 'vs'

      var temp = gameLiveStatus.includes(gameStatus) || gameStatus === 'FT' ? "\n            <div class='score-box'>\n                <div class='score'>".concat(score1, "</div>\n                <div class='score'>").concat(score2, "</div>\n            </div>\n            ") : '<div class="vs">vs</div>'; // if game is not started, display VOTE button 

      var voteBtnDisplay = gameStatus === 'NS' ? "<div class='voting-btn-box'>\n                <button \n                    class='voting-btn' \n                    team1-name='".concat(team1, "'\n                    team2-name='").concat(team2, "'\n                    team1-logo='").concat(logo1, "'\n                    team2-logo='").concat(logo2, "'\n                    gameId=").concat(gameId, ">\n                    VOTE\n                </button>\n            </div>") : '';
      fixtureRowDiv.innerHTML = "\n            <div class='game-status-section'>".concat(fix.fixture.status.long, "</div>\n            <div class='team1-box' >\n                <div class=\"name\">").concat(team1, "</div>\n                <div class=\"logo\"><img src=\"").concat(logo1, "\"/></div>\n            </div>\n            ").concat(temp, "\n            <div class='team2-box'>\n                <div class=\"logo\"><img src=\"").concat(logo2, "\"/></div>\n                <div class=\"name\">").concat(team2, "</div>\n            </div>\n            ").concat(voteBtnDisplay, "\n            ");

      if (gameStatus !== 'NS') {
        fixtureRowDiv.addEventListener('click', function () {
          return Object(_game__WEBPACK_IMPORTED_MODULE_1__["default"])(gameId, score1, score2);
        });
      }

      allGamesBoxDiv.appendChild(fixtureRowDiv);
      Object(_renderVotingModal__WEBPACK_IMPORTED_MODULE_2__["default"])(allGamesBoxDiv, team1, team2);
    }); //live update functionality

    var buttonLiveUpdates = document.createElement("div");
    buttonLiveUpdates.classList.add('live-updates-box');
    allGamesBoxDiv.appendChild(buttonLiveUpdates);

    if (localStorage.getItem('localStCounter') !== null) {
      var newCounter = localStorage.getItem('localStCounter');
      newCounter++;
      localStorage.setItem('localStCounter', newCounter);

      if (newCounter === 3) {
        clearInterval(localStorage.getItem('localStInterval'));
        localStorage.clear();
      }
    } // if (liveGamesStatus){


    buttonLiveUpdates.innerHTML = "\n            <button id='live-updates'>ACTIVATE LIVE UPDATES</button>\n            <button id='no-live-updates'>STOP LIVE UPDATES</button>\n            ";
    var btnLiveUpdates = document.getElementById("live-updates");
    var btnNoLiveUpdates = document.getElementById("no-live-updates");
    Object(_gamesRefresh__WEBPACK_IMPORTED_MODULE_3__["default"])(btnLiveUpdates, btnNoLiveUpdates, round); // }else{
    //     buttonLiveUpdates.innerHTML = `
    //     <button class='no-live-updates' disabled>
    //         No live games right now
    //     </button>`;
    //     allGamesBoxDiv.appendChild(buttonLiveUpdates);
    //     clearInterval(localStorage.getItem('localStInterval'));
    // }
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (renderGames);

/***/ }),

/***/ "./src/scripts/gamesRefresh.js":
/*!*************************************!*\
  !*** ./src/scripts/gamesRefresh.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games */ "./src/scripts/games.js");
 //gamesRefresh.js

var gamesRefresh = function gamesRefresh(btnLiveUpdates, btnNoLiveUpdates, round) {
  var interval;
  btnLiveUpdates.addEventListener('click', function () {
    Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(round);
    interval = setInterval(function () {
      return Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(round);
    }, 10000);
    localStorage.setItem('localStInterval', interval);
    var counter = 0;
    localStorage.setItem('localStCounter', counter);
  });
  btnNoLiveUpdates.addEventListener('click', function () {
    clearInterval(localStorage.getItem('localStInterval'));
    localStorage.removeItem('localStInterval');
    btnLiveUpdates.disabled = false;
    btnNoLiveUpdates.setAttribute('disabled', true);
  });

  if (localStorage.getItem('localStInterval') !== null) {
    btnLiveUpdates.setAttribute('disabled', true);
    btnNoLiveUpdates.disabled = false;
  } else {
    btnLiveUpdates.disabled = false;
    btnNoLiveUpdates.setAttribute('disabled', true);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (gamesRefresh);

/***/ }),

/***/ "./src/scripts/gamestat.js":
/*!*********************************!*\
  !*** ./src/scripts/gamestat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var renderGameStat = function renderGameStat(fixtureId, score1, score2, FixturePlayersStat) {
  // console.log('HI FROM GAME STAT');
  var oneGameContentDiv = document.getElementById("one-game");
  var standingsDiv = document.getElementById("standings"); // const testBoxDiv = document.createElement("div");
  // testBoxDiv.classList.add("test-box");

  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/gamestat/?fixtureId=".concat(fixtureId)).then(function (res) {
    // console.log(res.data.response);
    var gameStatDiv = document.createElement('div');
    gameStatDiv.classList.add('game-stat-box');
    standingsDiv.append(gameStatDiv);
    oneGameContentDiv.append(gameStatDiv);
    var teamsStat = res.data.response;
    var possession = [];
    var shotsOn = [];
    var shotsOff = [];
    var fouls = [];
    var yc = [];
    teamsStat.forEach(function (teamStat, idx1) {
      // console.log(teamStat)
      teamStat.statistics.forEach(function (stat) {
        if (stat.type === "Ball Possession") {
          possession.push(stat);
        }

        if (stat.type === "Shots on Goal") {
          shotsOn.push(stat);
        }

        if (stat.type === "Shots off Goal") {
          shotsOff.push(stat);
        }

        if (stat.type === "Fouls") {
          fouls.push(stat);
        }

        if (stat.type === "Yellow Cards") {
          yc.push(stat);
        }
      });
    });
    gameStatDiv.innerHTML = "\n            <div class='game-stat-title'>GAME STATISTICS</div>\n            <div class='stat-box'>\n                <div class='scoreBox'>\n                    <div class=\"teamHome\">\n                        <div class=\"teamLogo\">\n                        <img src=\"".concat(res.data.response[0].team.logo, "\"/>\n                        </div> \n                        <div class=\"teamName\">").concat(res.data.response[0].team.name, "</div>\n                        <div class='teamScore1'>").concat(score1, "</div>\n                    </div>\n                    <div class=\"teamHome\">\n                        <div class=\"teamLogo\">\n                        <img src=\"").concat(res.data.response[1].team.logo, "\"/>\n                        </div> \n                        <div class=\"teamName\">").concat(res.data.response[1].team.name, "</div>\n                        <div class='teamScore2'>").concat(score2, "</div>\n                    </div>  \n                </div>\n                <div class='who-scored-box'>\n                    <div class='who-scored-team1'>\n                    \n                    </div>\n                    <div class='who-scored-team2'>\n                    \n                    </div>\n                </div>\n                <div id=\"possProgress\">\n                    <div id=\"poss\"></div> \n                </div>\n                <div class=\"stat-name\"> Ball Possession </div>\n                <div id=\"shotsOnProgress\">\n                    <div id=\"shotsOn\"></div> \n                </div>\n                <div class=\"stat-name\"> Shots on Goals </div>\n                 <div id=\"shotsOffProgress\">\n                    <div id=\"shotsOff\"></div>\n                </div>\n                <div class=\"stat-name\"> Shots off Goals </div> \n                <div id=\"foulsProgress\">\n                    <div id=\"fouls\"></div>\n                </div>\n                <div class=\"stat-name\"> Fouls </div>  \n                <div id=\"ycProgress\">\n                    <div id=\"yc\"></div>\n                </div>\n                <div class=\"stat-name\"> Yellow Cards </div>  \n            </div>\n            ");
    var team1PlayersStat = Object.values(FixturePlayersStat[0].players);
    var team2PlayersStat = Object.values(FixturePlayersStat[1].players);
    var team1ScoredPlDiv = document.querySelector(".who-scored-team1");
    var team2ScoredPlDiv = document.querySelector(".who-scored-team2");
    team1PlayersStat.forEach(function (player) {
      // console.log(player)
      if (player.statistics[0].goals.total !== null) {
        for (var i = 0; i < player.statistics[0].goals.total; i++) {
          var sc1Div = document.createElement('div');
          sc1Div.classList.add('goal-scorer');
          sc1Div.innerHTML = "\n                        ".concat(player.player.name, "\n                    ");
          team1ScoredPlDiv.appendChild(sc1Div);
        }
      }
    });
    team2PlayersStat.forEach(function (player) {
      if (player.statistics[0].goals.total !== null) {
        // console.log(player.player.name, player.statistics[0].goals.total)
        // player.statistics[0].goals.total
        for (var i = 0; i < player.statistics[0].goals.total; i++) {
          var sc2Div = document.createElement('div');
          sc2Div.classList.add('goal-scorer');
          sc2Div.innerHTML = "\n                        ".concat(player.player.name, "\n                    ");
          team2ScoredPlDiv.appendChild(sc2Div);
        }
      }
    });

    var renderStats = function renderStats(stat1, total, idName) {
      var elem = document.getElementById(idName);

      if (idName === 'poss') {
        elem.style.width = stat1;
      } else {
        var ratio = stat1 / total * 100;
        elem.style.width = ratio + "%";
      }
    };

    renderStats(possession[0].value, 0, "poss");
    renderStats(shotsOn[0].value, shotsOn[0].value + shotsOn[1].value, "shotsOn");
    renderStats(shotsOff[0].value, shotsOff[0].value + shotsOff[1].value, "shotsOff");
    renderStats(fouls[0].value, fouls[0].value + fouls[1].value, "fouls");
    renderStats(yc[0].value, yc[0].value + yc[1].value, "yc");
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (renderGameStat);

/***/ }),

/***/ "./src/scripts/getFixturePlayersStat.js":
/*!**********************************************!*\
  !*** ./src/scripts/getFixturePlayersStat.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var getFixturePlayersStat = function getFixturePlayersStat(fixtureId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./fixture_players_stat?fixtureId=".concat(fixtureId)).then(function (res) {
    // console.log('Hi from fixture players stat!')
    // console.log(res.data.response);
    // console.log('end');
    return res.data.response;
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getFixturePlayersStat);

/***/ }),

/***/ "./src/scripts/openInstructionsModal.js":
/*!**********************************************!*\
  !*** ./src/scripts/openInstructionsModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var openInstructionsModal = function openInstructionsModal() {
  var navDiv = document.querySelector('.div-for-modal');
  var instrBtn = document.getElementById('instructions-link'); // console.log(instrBtn, navDiv);

  var modalDiv = document.createElement('div');
  modalDiv.innerHTML = "\n    <div id=\"myModalInst\" class=\"modalInst\">\n        <div class=\"modal-content\">\n            <span class=\"closeInt\">&times;</span>\n            \n            <div id='modal-box-inst'>\n                <div class='about-title'>ABOUT</div>\n                <div class='about'>\n                    90Plus is a soccer score app for the English Premier League. This app brings you the fixtures with live updates, game stats, game winner voting options and more.\n                </div>\n\n                <div class='inst-title'>INSTRUCTIONS</div>\n                <div class='inst'>\n                    <ul>\n                        <li>CURRENT matchday games are displayed on the main page (ex. ALL GAMES - ROUND 17).\n                        </li>  \n                        <li>OLDER game info could be accessed from the top navigation bar when clicking on pink button (ex. <span><i class=\"fas fa-chevron-left\"></i> GO TO ROUND 16</span>)</li>\n                        <li>Similarly, FUTURE game info could be accessed from the top navigation bar (ex. <span>GO TO ROUND 18 <i class=\"fas fa-chevron-right\"></i></span>).</li>\n                        <li>The user can click on LIVE or FINISHED fixtures to see detailed statistics. A player\u2019s stats are available when hovering over any player on the pitch. Try it!</li>\n                        <li>The user can vote for the game WINNER by clicking on the VOTE button. This feature is available only for future games.</li>    \n                        <li>Live updates can be manually turned on by selecting <span>ACTIVATE LIVE UPDATES</span>. When selected, the page will refresh 3 times every 10 seconds for demonstration purposes. Live updates can be turned off by selecting <span>STOP LIVE UPDATES</span>.</li>      \n                    <ul>   \n                </div>\n\n                \n                <div class='built-by'>\n                    Built by <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target=\"_blank\">Nikolay Shatalov</a>\n                </div>\n\n            </div>\n        \n        </div>\n    </div>\n    ";
  navDiv.appendChild(modalDiv);
  var modal = document.querySelector("#myModalInst");
  var span = document.getElementsByClassName("closeInt")[0];
  instrBtn.addEventListener('click', function () {
    modal.style.display = "block";
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (openInstructionsModal);

/***/ }),

/***/ "./src/scripts/renderPlayerModal.js":
/*!******************************************!*\
  !*** ./src/scripts/renderPlayerModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderPlayerStat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPlayerStat */ "./src/scripts/renderPlayerStat.js");


var renderPlayerModal = function renderPlayerModal(squadsDiv, FixturePlayersStat, fixtureId) {
  var modalDiv = document.createElement('div');
  modalDiv.innerHTML = "\n            <div id=\"myModal\" class=\"modal\">\n                <div class=\"modal-content\">\n                    <span class=\"close\">&times;</span>\n\n                    <div id='modal-box'>\n                        Some text goes here ...\n                    </div>\n\n                </div>\n            </div>\n        ";
  squadsDiv.appendChild(modalDiv);
  var modal = document.querySelector("#myModal");
  var playersToClick = document.querySelectorAll(".pl-select");
  var span = document.getElementsByClassName("close")[0];
  playersToClick.forEach(function (player) {
    player.addEventListener('click', function () {
      modal.style.display = "block";
      var playerId = player.getAttribute('playerId');
      var teamId = player.getAttribute('teamId');
      var playerIdm = parseInt(playerId);
      var teamIdm = parseInt(teamId);
      Object(_renderPlayerStat__WEBPACK_IMPORTED_MODULE_0__["default"])(playerIdm, teamIdm, fixtureId, FixturePlayersStat);
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (renderPlayerModal);

/***/ }),

/***/ "./src/scripts/renderPlayerStat.js":
/*!*****************************************!*\
  !*** ./src/scripts/renderPlayerStat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var renderPlayerStat = function renderPlayerStat(playerIdm, teamIdm, fixtureIdm, FixturePlayersStatm) {
  var teamInfo = {};
  var playerInfo = {};
  var playerStat = {};
  FixturePlayersStatm.forEach(function (squad) {
    if (squad.team.id === teamIdm) {
      teamInfo = squad;
      squad.players.forEach(function (player, idx) {
        if (player.player.id === playerIdm) {
          playerInfo = player.player;
          playerStat = player.statistics[0];
        }
      });
    }

    ;
  });
  var modalBox = document.getElementById("modal-box");
  var rightBoxData = playerStat.games.position === 'G' ? "<div class='saves-box row'>\n            <div class='title'>Saves: </div>\n            <div class='value'>".concat(playerStat.goals.saves ? playerStat.goals.saves : 0, "</div>\n        </div>\n        <div class='conceded-box row'>\n            <div class='title'>Goals conceded: </div>\n            <div class='value'>").concat(playerStat.goals.conceded ? playerStat.goals.conceded : 0, "</div>\n        </div>\n        ") : "<div class='duels-box row'>\n            <div class='title'>Duels Won/Total: </div>\n            <div class='value'>".concat(playerStat.duels.won ? playerStat.duels.won : 0, " / ").concat(playerStat.duels.total ? playerStat.duels.total : 0, "</div>\n        </div>\n        <div class='passes-box row'>\n            <div class='title'>Passes(Accuracy%): </div>\n            <div class='value'>").concat(playerStat.passes.total ? playerStat.passes.total : 0, " (").concat(playerStat.passes.accuracy ? playerStat.passes.accuracy : 0, "%)</div>\n        </div>\n        <div class='shots-box row'>\n            <div class='title'>Shots: </div>\n            <div class='value'>").concat(playerStat.shots.total ? playerStat.shots.total : 0, "</div>\n        </div>\n         <div class='goals-box row'>\n            <div class='title'>Goals: </div>\n            <div class='value'>").concat(playerStat.goals.total ? playerStat.goals.total : 0, " </div>\n        </div>\n        ");
  modalBox.innerHTML = "   <div class='left-box'>\n                <div class='pl-img-box'>\n                    <img src=\"".concat(playerInfo.photo, "\"/>\n                </div>\n                <div class='pl-name'>").concat(playerInfo.name, "</div>\n                <div class='position-number-box'>\n                    <div class='value'>Number: ").concat(playerStat.games.number, "</div>\n                </div>\n            </div>\n            <div class='right-box'>\n                <div class='position-box row'>\n                    <div class='title'>Position: </div>\n                    <div class='value'>").concat(playerStat.games.position, "</div>\n                </div>\n                <div class='rating-box row'>\n                    <div class='title'>Rating: </div>\n                    <div class='value'>").concat(playerStat.games.rating ? playerStat.games.rating : 0, "</div>\n                </div>\n                <div class='minutes-box row'>\n                    <div class='title'>Minutes: </div>\n                    <div class='value'>").concat(playerStat.games.minutes ? playerStat.games.minutes : 0, "</div>\n                </div>\n\n                ").concat(rightBoxData, "\n                \n            </div>\n        ");
};

/* harmony default export */ __webpack_exports__["default"] = (renderPlayerStat);

/***/ }),

/***/ "./src/scripts/renderVotingModal.js":
/*!******************************************!*\
  !*** ./src/scripts/renderVotingModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderVotingStat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderVotingStat */ "./src/scripts/renderVotingStat.js");


var renderVotingModal = function renderVotingModal(allGamesBoxDiv, t1ref, t2ref) {
  var modalDiv = document.createElement('div');
  modalDiv.innerHTML = "\n        <div id=\"myVotingModal\" class=\"modal-v\">\n            <div class=\"modal-v-content\">\n                <span class=\"close-v\">&times;</span>\n                <div id='modal-v-box'>\n                </div>\n            </div>\n        </div>\n        ";
  allGamesBoxDiv.appendChild(modalDiv);
  var modalV = document.querySelector("#myVotingModal");
  var spanV = document.getElementsByClassName("close-v")[0];
  var votingBtns = document.querySelectorAll(".voting-btn");
  votingBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // user anonymous auth login
      auth.signInAnonymously();
      modalV.style.display = "block"; // console.log('HI FROM VOTING MODAL')

      var name1 = btn.getAttribute('team1-name');
      var name2 = btn.getAttribute('team2-name');
      var logo1 = btn.getAttribute('team1-logo');
      var logo2 = btn.getAttribute('team2-logo');
      var gId = btn.getAttribute('gameId');

      if (t1ref === btn.getAttribute('team1-name')) {
        Object(_renderVotingStat__WEBPACK_IMPORTED_MODULE_0__["default"])(name1, name2, logo1, logo2, gId);
      }
    });
  });

  spanV.onclick = function () {
    // user anonymous auth login
    auth.signOut();
    modalV.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modalV) {
      // user anonymous auth login
      auth.signOut();
      modalV.style.display = "none";
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (renderVotingModal);

/***/ }),

/***/ "./src/scripts/renderVotingStat.js":
/*!*****************************************!*\
  !*** ./src/scripts/renderVotingStat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawPie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawPie */ "./src/scripts/drawPie.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var renderVotingStat = function renderVotingStat(name1, name2, logo1, logo2, gameId) {
  var modalVBox = document.getElementById("modal-v-box");
  modalVBox.innerHTML = "\n        <div class='teams-row'>\n            <div class='btn-box'>\n                <button id='voteNum1' name='name1'>".concat(name1, "</button>\n            </div>\n            <div class='message'> Who will win? </div>\n            <div class='btn-box'>\n                <button id='voteNum2' name='name2'>").concat(name2, "</button>\n            </div>\n        </div>\n        <div id='voting-box'>\n            \n        </div>\n    ");
  var voteData1 = document.getElementById("voteNum1");
  var voteData2 = document.getElementById("voteNum2");
  voteData1.addEventListener('click', function (e) {
    getData(1, 1, parseInt(gameId));
  });
  voteData2.addEventListener('click', function (e) {
    getData(1, 2, parseInt(gameId));
  });

  var addData = function addData(data, vote1, vote2) {
    // console.log('ho from addData function');
    // console.log(data);
    db.collection('winner-votes').add(data);
    renderVotes(vote1, vote2);
  };

  var renderVotes = function renderVotes(vote1, vote2) {
    // console.log(vote1, vote2)
    var votingBoxDiv = document.getElementById("voting-box");
    votingBoxDiv.innerHTML = "\n            <div class='voting-row'>\n                <div class='votes1 vote'>".concat((vote1 / (vote1 + vote2) * 100).toFixed(1), "%</div>\n                <div class='votes2 vote'>").concat((vote2 / (vote1 + vote2) * 100).toFixed(1), "%</div>\n            </div>\n            <div id='pie-box'>\n                \n            </div> \n        ");
    Object(_drawPie__WEBPACK_IMPORTED_MODULE_0__["default"])(vote1, vote2);
  };

  var updateData = function updateData(data, keyId, vote1, vote2) {
    // console.log(data);
    db.collection('winner-votes').doc(keyId).update(data);
    renderVotes(vote1, vote2);
  };

  var getData = function getData(val, num, gameId) {
    db.collection('winner-votes').get().then(function (res) {
      var updated = false;
      res.docs.forEach(function (doc) {
        // console.log(doc.data(), doc.id)
        // console.log(`${gameId}`);
        // DATA IS EXISTING IN DATABASE. CALL UPDATE
        if (parseInt(Object.keys(doc.data())[0]) === gameId) {
          var keyId = doc.id;
          var votes = doc.data()[gameId];
          var vote1 = 0;
          var vote2 = 0;

          for (var vote in votes) {
            if (vote === 'team1') {
              vote1 = votes[vote];
            } else {
              vote2 = votes[vote];
            }
          }

          if (num === 1) {
            var newVote1 = vote1 + val;

            var newData = _defineProperty({}, gameId, {
              team1: newVote1,
              team2: vote2
            });

            updateData(newData, keyId, newVote1, vote2);
            updated = true;
          } else {
            var newVote2 = vote2 + val;

            var _newData2 = _defineProperty({}, gameId, {
              team1: vote1,
              team2: newVote2
            });

            updateData(_newData2, keyId, vote1, newVote2);
            updated = true;
          }
        }
      }); // DATA IS NEW. CALL ADD FUNCTION

      if (updated == false) {
        var vote1 = 0;
        var vote2 = 0;

        if (num === 1) {
          var newVote1 = vote1 + val;

          var newData = _defineProperty({}, gameId, {
            team1: newVote1,
            team2: vote2
          });

          addData(newData, newVote1, vote2);
        } else {
          var newVote2 = vote2 + val;

          var _newData5 = _defineProperty({}, gameId, {
            team1: vote1,
            team2: newVote2
          });

          addData(_newData5, vote1, newVote2);
        }
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (renderVotingStat);

/***/ }),

/***/ "./src/scripts/standings.js":
/*!**********************************!*\
  !*** ./src/scripts/standings.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var renderStandings = function renderStandings() {
  var standingsDiv = document.getElementById("standings");
  var standingBoxDiv = document.createElement("div");
  standingBoxDiv.classList.add("team-standing-box");
  standingsDiv.append(standingBoxDiv);
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./standings").then(function (res) {
    console.log(" - - - - - -", res);
    var teamsArr = res.data.response[0].league.standings[0];
    teamsArr.forEach(function (team, idx) {
      var teamDiv = document.createElement("div");
      var teamRankBoxDiv = document.createElement("div");
      var teamNameDiv = document.createElement("div");
      var teamPointsDiv = document.createElement("div");
      var teamGamesCountDiv = document.createElement("div");
      var teamRankDiv = document.createElement("div");
      var dataDiv = document.createElement("div");
      teamNameDiv.innerText = team.team.name;
      teamPointsDiv.innerText = team.points;
      teamGamesCountDiv.innerText = team.all.played;
      teamRankDiv.innerText = team.rank;
      teamDiv.classList.add("team-standing-row");
      teamRankBoxDiv.classList.add("team-rank-box");
      teamRankDiv.classList.add("team-rank");
      teamGamesCountDiv.classList.add("played-games");
      teamPointsDiv.classList.add("team-points");
      dataDiv.classList.add("data-div");
      teamRankBoxDiv.append(teamRankDiv, teamNameDiv);
      dataDiv.append(teamGamesCountDiv, teamPointsDiv);
      teamDiv.append(teamRankBoxDiv, dataDiv);
      standingBoxDiv.append(teamDiv);
    });
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (renderStandings);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpZWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9kaXN0L2ltYWdlcy9ibGFja2xvZ28ucG5nIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnJlbnRSb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kcmF3UGllLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZXNSZWZyZXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVzdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dldEZpeHR1cmVQbGF5ZXJzU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9vcGVuSW5zdHJ1Y3Rpb25zTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyUGxheWVyTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyUGxheWVyU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJWb3RpbmdNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJWb3RpbmdTdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N0YW5kaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZTRhYSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudFJvdW5kIiwib3Blbkluc3RydWN0aW9uc01vZGFsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY3VycmVudFIiLCJkYXRhIiwicmVzcG9uc2UiLCJyZW5kZXJHYW1lcyIsInJlbmRlclN0YW5kaW5ncyIsIm5hdmJhckxvZ28iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkcmF3UGllIiwidm90ZTEiLCJ2b3RlMiIsImRpbXMiLCJoZWlnaHQiLCJ3aWR0aCIsInJhZGl1cyIsImNlbnQiLCJ4IiwieSIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImdyYXBoIiwicGllIiwic29ydCIsInZhbHVlIiwiZCIsImFyY1BhdGgiLCJhcmMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJ1cGRhdGUiLCJkb21haW4iLCJwYXRocyIsInNlbGVjdEFsbCIsImV4aXQiLCJyZW1vdmUiLCJlbnRlciIsIm5hbWUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJhcmNUd2VlbkVudGVyIiwiaSIsImludGVycG9sYXRlIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInJlbmRlckdhbWVCeUlkIiwiZml4dHVyZUlkIiwic2NvcmUxIiwic2NvcmUyIiwibGVhZ3VlSW5mb0RpdiIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWxsR2FtZXNDb250ZW50RGl2IiwiY2xlYXJJbnRlcnZhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjbGVhciIsIm9uZUdhbWVDb250ZW50RGl2IiwiZmllbGREaXYiLCJjcmVhdGVFbGVtZW50Iiwic3F1YWRzRGl2IiwiYWRkIiwiZmllbGQiLCJnazFEaXYiLCJkZWYxRGl2IiwibWlkMURpdiIsImZ3ZDFEaXYiLCJnazJEaXYiLCJkZWYyRGl2IiwibWlkMkRpdiIsImZ3ZDJEaXYiLCJ0ZWFtMURpdiIsInRlYW0iLCJsb2dvIiwidGVhbTJEaXYiLCJmb3JFYWNoIiwiY29tbWFuZCIsImNpZHgiLCJzdGFydFhJIiwicGxyIiwicGlkeCIsInBsYXllckRpdiIsInBsYXllciIsIm51bWJlciIsInBvcyIsImRpdiIsInNldEF0dHJpYnV0ZSIsImlkIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJnZXRGaXh0dXJlUGxheWVyc1N0YXQiLCJGaXh0dXJlUGxheWVyc1N0YXQiLCJyZW5kZXJHYW1lU3RhdCIsInJlbmRlclBsYXllck1vZGFsIiwicm91bmQiLCJhbGxHYW1lc0RpdiIsImFsbEdhbWVzQm94RGl2IiwiZml4dHVyZXNBcnIiLCJzZWN0aW9uTmFtZURpdiIsImxpdmVHYW1lc1N0YXR1cyIsIm5leHRTZWFzb24iLCJsZWFndWUiLCJzZWFzb24iLCJjb3VudHJ5IiwiZmxhZyIsImVwbExvZ28iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJjdXJyZW50Um91bmRTdHJpbmciLCJzcGxpdCIsInBvcCIsInByZXZSb3VuZCIsInBhcnNlSW50IiwibmV4dFJvdW5kIiwicFJvdW5kIiwiblJvdW5kIiwicHJldmlvdXNSb3VuZCIsImZvbGxvd2luZ1JvdW5kIiwiZ2FtZUxpdmVTdGF0dXMiLCJnYW1lTm90TGl2ZVN0YXR1cyIsImZpeCIsImlkeCIsInRlYW0xIiwidGVhbXMiLCJob21lIiwibG9nbzEiLCJ0ZWFtMiIsImF3YXkiLCJsb2dvMiIsImdvYWxzIiwiZ2FtZVN0YXR1cyIsImZpeHR1cmUiLCJzdGF0dXMiLCJzaG9ydCIsImdhbWVJZCIsImluY2x1ZGVzIiwiZml4dHVyZVJvd0RpdiIsImdhbWVTdGF0dXNSb3dEaXYiLCJzY29yZUJveERpdiIsInRlbXAiLCJ2b3RlQnRuRGlzcGxheSIsImxvbmciLCJyZW5kZXJWb3RpbmdNb2RhbCIsImJ1dHRvbkxpdmVVcGRhdGVzIiwibmV3Q291bnRlciIsInNldEl0ZW0iLCJidG5MaXZlVXBkYXRlcyIsImJ0bk5vTGl2ZVVwZGF0ZXMiLCJnYW1lc1JlZnJlc2giLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY291bnRlciIsInJlbW92ZUl0ZW0iLCJkaXNhYmxlZCIsInN0YW5kaW5nc0RpdiIsImdhbWVTdGF0RGl2IiwidGVhbXNTdGF0IiwicG9zc2Vzc2lvbiIsInNob3RzT24iLCJzaG90c09mZiIsImZvdWxzIiwieWMiLCJ0ZWFtU3RhdCIsImlkeDEiLCJzdGF0aXN0aWNzIiwic3RhdCIsInR5cGUiLCJwdXNoIiwidGVhbTFQbGF5ZXJzU3RhdCIsIk9iamVjdCIsInZhbHVlcyIsInBsYXllcnMiLCJ0ZWFtMlBsYXllcnNTdGF0IiwidGVhbTFTY29yZWRQbERpdiIsInRlYW0yU2NvcmVkUGxEaXYiLCJ0b3RhbCIsInNjMURpdiIsInNjMkRpdiIsInJlbmRlclN0YXRzIiwic3RhdDEiLCJpZE5hbWUiLCJlbGVtIiwic3R5bGUiLCJyYXRpbyIsIm5hdkRpdiIsImluc3RyQnRuIiwibW9kYWxEaXYiLCJtb2RhbCIsInNwYW4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzcGxheSIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsInBsYXllcnNUb0NsaWNrIiwicXVlcnlTZWxlY3RvckFsbCIsInBsYXllcklkIiwiZ2V0QXR0cmlidXRlIiwidGVhbUlkIiwicGxheWVySWRtIiwidGVhbUlkbSIsInJlbmRlclBsYXllclN0YXQiLCJmaXh0dXJlSWRtIiwiRml4dHVyZVBsYXllcnNTdGF0bSIsInRlYW1JbmZvIiwicGxheWVySW5mbyIsInBsYXllclN0YXQiLCJzcXVhZCIsIm1vZGFsQm94IiwicmlnaHRCb3hEYXRhIiwiZ2FtZXMiLCJwb3NpdGlvbiIsInNhdmVzIiwiY29uY2VkZWQiLCJkdWVscyIsIndvbiIsInBhc3NlcyIsImFjY3VyYWN5Iiwic2hvdHMiLCJwaG90byIsInJhdGluZyIsIm1pbnV0ZXMiLCJ0MXJlZiIsInQycmVmIiwibW9kYWxWIiwic3BhblYiLCJ2b3RpbmdCdG5zIiwiYnRuIiwiYXV0aCIsInNpZ25JbkFub255bW91c2x5IiwibmFtZTEiLCJuYW1lMiIsImdJZCIsInJlbmRlclZvdGluZ1N0YXQiLCJzaWduT3V0IiwibW9kYWxWQm94Iiwidm90ZURhdGExIiwidm90ZURhdGEyIiwiZSIsImdldERhdGEiLCJhZGREYXRhIiwiZGIiLCJjb2xsZWN0aW9uIiwicmVuZGVyVm90ZXMiLCJ2b3RpbmdCb3hEaXYiLCJ0b0ZpeGVkIiwidXBkYXRlRGF0YSIsImtleUlkIiwiZG9jIiwidmFsIiwibnVtIiwidXBkYXRlZCIsImRvY3MiLCJrZXlzIiwidm90ZXMiLCJ2b3RlIiwibmV3Vm90ZTEiLCJuZXdEYXRhIiwibmV3Vm90ZTIiLCJzdGFuZGluZ0JveERpdiIsInRlYW1zQXJyIiwic3RhbmRpbmdzIiwidGVhbURpdiIsInRlYW1SYW5rQm94RGl2IiwidGVhbU5hbWVEaXYiLCJ0ZWFtUG9pbnRzRGl2IiwidGVhbUdhbWVzQ291bnREaXYiLCJ0ZWFtUmFua0RpdiIsImRhdGFEaXYiLCJwb2ludHMiLCJhbGwiLCJwbGF5ZWQiLCJyYW5rIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFlLHFGQUFzQixFOzs7Ozs7Ozs7OztBQ0FyQyxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQyxhQUFhLG1CQUFPLENBQUMsaUVBQWtCOztBQUV2QyxjQUFjLG1CQUFPLENBQUMseUVBQXNCOztBQUU1QyxlQUFlLG1CQUFPLENBQUMsMkVBQXVCOztBQUU5QyxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBdUI7O0FBRW5ELG1CQUFtQixtQkFBTyxDQUFDLG1GQUEyQjs7QUFFdEQsc0JBQXNCLG1C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UUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksUUFBUTtBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FB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LEdBQXRCLENBQTBCLFdBQTFCO0FBQ0E2TSx1QkFBaUIsQ0FBQ3ZOLFNBQWxCLENBQTRCVSxHQUE1QixDQUFnQyxjQUFoQztBQUNBNE0sbUJBQWEsQ0FBQ3ROLFNBQWQsQ0FBd0JVLEdBQXhCLENBQTRCLGFBQTVCO0FBQ0ErTSxhQUFPLENBQUN6TixTQUFSLENBQWtCVSxHQUFsQixDQUFzQixVQUF0QjtBQUVBME0sb0JBQWMsQ0FBQ3pQLE1BQWYsQ0FBc0I2UCxXQUF0QixFQUFtQ0gsV0FBbkM7QUFDQUksYUFBTyxDQUFDOVAsTUFBUixDQUFlNFAsaUJBQWYsRUFBa0NELGFBQWxDO0FBQ0FILGFBQU8sQ0FBQ3hQLE1BQVIsQ0FBZXlQLGNBQWYsRUFBK0JLLE9BQS9CO0FBQ0FULG9CQUFjLENBQUNyUCxNQUFmLENBQXNCd1AsT0FBdEI7QUFDRCxLQXpCRDtBQTBCRCxHQS9CSCxFQWdDR3pRLEtBaENILENBZ0NTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEdBbENIO0FBbUNELENBekNEOztBQTJDZUwsOEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZmllbGQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYmxhY2tsb2dvLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcblxudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcblxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcblxudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG5cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTsgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcblxuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0OyAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG5cbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcblxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuXG5cbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcblxuXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG5cblxuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSB0aW1lb3V0XG5cblxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcblxuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuXG5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID8gY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9IC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG5cblxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcblxuXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfSAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cblxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfSAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9IC8vIFNlbmQgdGhlIHJlcXVlc3RcblxuXG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTsgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcblxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7IC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG4gIHJldHVybiBpbnN0YW5jZTtcbn0gLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5cblxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpOyAvLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcblxuYXhpb3MuQXhpb3MgPSBBeGlvczsgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTsgLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5cblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7IC8vIEV4cG9zZSBhbGwvc3ByZWFkXG5cbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBheGlvczsgLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvczsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuXG5cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG5cbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5cblxuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuXG5cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTsgLy8gU2V0IGNvbmZpZy5tZXRob2RcblxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH0gLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuXG5cbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07IC8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xuXG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG5cbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcblxudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cblxuXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuXG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307IC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcblxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoY29uZmlnLmRhdGEsIGNvbmZpZy5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVxdWVzdCk7IC8vIEZsYXR0ZW4gaGVhZGVyc1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LCBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSwgY29uZmlnLmhlYWRlcnMpO1xuICB1dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLCBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgfSk7XG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7IC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShyZXNwb25zZS5kYXRhLCByZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEocmVhc29uLnJlc3BvbnNlLmRhdGEsIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcblxuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZXJyb3I7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gWydiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsICd0aW1lb3V0JywgJ3RpbWVvdXRNZXNzYWdlJywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnLCAncmVzcG9uc2VFbmNvZGluZyddO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cykuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKS5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZzEpLmNvbmNhdChPYmplY3Qua2V5cyhjb25maWcyKSkuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG4gIHJldHVybiBjb25maWc7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuXG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLmNvbmZpZywgbnVsbCwgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuXG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fCB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8IHV0aWxzLmlzRmlsZShkYXRhKSB8fCB1dGlscy5pc0Jsb2IoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogSWdub3JlICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkucmVwbGFjZSgvJTNBL2dpLCAnOicpLnJlcGxhY2UoLyUyNC9nLCAnJCcpLnJlcGxhY2UoLyUyQy9naSwgJywnKS5yZXBsYWNlKC8lMjAvZywgJysnKS5yZXBsYWNlKC8lNUIvZ2ksICdbJykucmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkwgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJykgOiBiYXNlVVJMO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG5mdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiB7XG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgfSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgfVxuICB9O1xufSgpIDogLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4ge1xuICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgfTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHZhciBvcmlnaW5VUkw7XG4gIC8qKlxuICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICovXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgIGlmIChtc2llKSB7XG4gICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgIH1cblxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpOyAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG5cbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICBwYXRobmFtZTogdXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgfTtcbiAgfVxuXG4gIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAvKipcbiAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgIHZhciBwYXJzZWQgPSB1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgIHJldHVybiBwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJiBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3Q7XG4gIH07XG59KCkgOiAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTsgLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcblxuXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJywgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLCAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXTtcbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykge1xuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYXJzZWQ7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgdmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfSAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcblxuXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5cblxuZnVuY3Rpb24gbWVyZ2UoKVxuLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovXG57XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cblxuXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuXG5cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTsgLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gIH1cblxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgfVxufSkoKTtcblxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICB9IC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cblxuICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfSAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cblxuICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgfVxuICB9XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkcmFpbmluZyA9IGZhbHNlO1xuXG4gIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gIH1cblxuICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgZHJhaW5RdWV1ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gIGlmIChkcmFpbmluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbikge1xuICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG5cbiAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICB9XG5cbiAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG5cbiAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICB9XG59OyAvLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5cblxuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gIHRoaXMuZnVuID0gZnVuO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xuXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIFtdO1xufTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnLyc7XG59O1xuXG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDA7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjdXJyZW50Um91bmQgZnJvbSBcIi4vc2NyaXB0cy9jdXJyZW50Um91bmRcIjtcbmltcG9ydCByZW5kZXJTdGFuZGluZ3MgZnJvbSBcIi4vc2NyaXB0cy9zdGFuZGluZ3NcIjtcbmltcG9ydCBvcGVuSW5zdHJ1Y3Rpb25zTW9kYWwgZnJvbSBcIi4vc2NyaXB0cy9vcGVuSW5zdHJ1Y3Rpb25zTW9kYWxcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gbGV0IHJvdW5kID0gJ1JlZ3VsYXIgU2Vhc29uIC0gMTInIDtcblxuICAgIC8vIEdFVCBDVVJSRU5UIFJPVU5EIEFORCBSRU5ERVIgR0FNRVMgQU5EIFNUQU5ESU5HU1xuICAgIGN1cnJlbnRSb3VuZCgpXG4gICAgICAgIG9wZW5JbnN0cnVjdGlvbnNNb2RhbCgpOyBcbiAgICBcbiAgICAvLyByZW5kZXJHYW1lcyhyb3VuZCk7XG4gICAgLy8gcmVuZGVyR2FtZVN0YXQoKTtcbiAgICBcblxuICAgIC8vIGNvbnN0IG5hdmJhckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1sb2dvXCIpO1xuICAgIC8vIG5hdmJhckxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJHYW1lcyhyb3VuZCkpO1xufSk7XG5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByZW5kZXJHYW1lcyBmcm9tIFwiLi9nYW1lc1wiO1xuaW1wb3J0IHJlbmRlclN0YW5kaW5ncyBmcm9tIFwiLi9zdGFuZGluZ3NcIjtcblxuY29uc3QgY3VycmVudFJvdW5kID0gKCkgPT4ge1xuICAgIFxuICAgIGF4aW9zLmdldChgY3VycmVudHJvdW5kYCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSID0gcmVzLmRhdGEucmVzcG9uc2VbMF07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlWzBdKTtcblxuICAgICAgICByZW5kZXJHYW1lcyhjdXJyZW50Uik7XG4gICAgICAgIHJlbmRlclN0YW5kaW5ncygpO1xuICAgICAgICAvLyBcbiAgICAgICAgY29uc3QgbmF2YmFyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyLWxvZ29cIik7XG4gICAgICAgIG5hdmJhckxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJHYW1lcyhjdXJyZW50UikpO1xuXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFJvdW5kOyIsImNvbnN0IGRyYXdQaWUgPSAodm90ZTEsIHZvdGUyKSA9PiB7XG5cbiAgICBjb25zdCBkaW1zID0ge2hlaWdodDozMDAsIHdpZHRoOjMwMCwgcmFkaXVzOjE1MH07XG4gICAgY29uc3QgY2VudCA9IHt4OiAoZGltcy53aWR0aCAvIDIgKyA1KSwgeTogKGRpbXMuaGVpZ2h0ICAvMiArIDUpfTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3BpZS1ib3gnKVxuICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCBkaW1zLndpZHRoICsgNTApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBkaW1zLmhlaWdodCArIDUwKVxuXG4gICAgY29uc3QgZ3JhcGggPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjZW50Lnh9LCAke2NlbnQueX0pYClcblxuICAgIGNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgICAgIC5zb3J0KG51bGwpXG4gICAgICAgIC52YWx1ZShkID0+IGQudmFsdWUpO1xuXG4gICAgY29uc3QgYXJjUGF0aCA9IGQzLmFyYygpXG4gICAgICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcbiAgICAgICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzLzEuNSlcbiAgICBcbiAgICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChbJyNmNWI3Y2QnLCAnIzBEMEQwRSddKVxuXG4gICAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcblxuICAgICAgICBjb2xvci5kb21haW4oWyd0ZWFtMScsICd0ZWFtMiddKVxuICAgICAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgICAgICAuZGF0YShwaWUoZGF0YSkpO1xuXG4gICAgICAgIHBhdGhzLmV4aXQoKS5yZW1vdmUoKTtcbiAgICAgICAgcGF0aHMuYXR0cignZCcsIGFyY1BhdGgpO1xuXG4gICAgICAgIHBhdGhzLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdhcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnI2ZmZicpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBkPT5jb2xvcihkLmRhdGEuZGF0YS5uYW1lKSlcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDE1MDApIFxuICAgICAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgYXJjVHdlZW5FbnRlcik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGEgPSBwaWUoW1xuICAgICAgICB7IG5hbWU6ICd0ZWFtMicsIHZhbHVlOiB2b3RlMiB9LFxuICAgICAgICB7IG5hbWU6ICd0ZWFtMScsIHZhbHVlOiB2b3RlMSB9XG4gICAgXSlcblxuICAgIFxuICAgIGNvbnN0IGFyY1R3ZWVuRW50ZXIgPSAoZCkgPT4ge1xuICAgICAgICBsZXQgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih0KXtcbiAgICAgICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG4gICAgICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXBkYXRlKGRhdGEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3UGllOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBmaWVsZCBmcm9tICcuLi8uLi9hc3NldHMvZmllbGQucG5nJztcbmltcG9ydCByZW5kZXJHYW1lU3RhdCBmcm9tICcuL2dhbWVzdGF0JztcbmltcG9ydCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgZnJvbSBcIi4vZ2V0Rml4dHVyZVBsYXllcnNTdGF0XCI7XG5pbXBvcnQgcmVuZGVyUGxheWVyTW9kYWwgZnJvbSAnLi9yZW5kZXJQbGF5ZXJNb2RhbCc7XG5pbXBvcnQgb3Blbkluc3RydWN0aW9uc01vZGFsIGZyb20gJy4vb3Blbkluc3RydWN0aW9uc01vZGFsJztcblxuY29uc3QgcmVuZGVyR2FtZUJ5SWQgPSAoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMikgPT4ge1xuXG4gICAgY29uc3QgbGVhZ3VlSW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZ3VlLWluZm9cIik7XG4gICAgbGVhZ3VlSW5mb0Rpdi5pbm5lckhUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG4gICAgbGVhZ3VlSW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0Jyk7XG5cbiAgICBjb25zdCBhbGxHYW1lc0NvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nYW1lc1wiKTtcbiAgICBhbGxHYW1lc0NvbnRlbnREaXYuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPSdvbmUtZ2FtZSc+PC9kaXY+XCI7XG5cbiAgICBheGlvcy5nZXQoYC4vZ2FtZT9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAvL2NsZWFyIGxpdmUgdXBkYXRlcyBpbnRlcnZhbCBhbmQgbG9jYWwgc3RvcmFnZVxuICAgICAgICBjbGVhckludGVydmFsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3F1YWRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdmaWVsZC1ib3gnKTtcbiAgICAgICAgc3F1YWRzRGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFkLWJveCcpO1xuICAgICAgICBcbiAgICAgICAgc3F1YWRzRGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGlkPSd0ZWFtLTEtYm94Jz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3RlYW0tMi1ib3gnPjwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKHNxdWFkc0Rpdik7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaW1nXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCIke2ZpZWxkfVwiLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2RlZi0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMScgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZndkLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2Z3ZC0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMicgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZGVmLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKGZpZWxkRGl2KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdrMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2stMVwiKTtcbiAgICAgICAgY29uc3QgZGVmMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmLTFcIik7XG4gICAgICAgIGNvbnN0IG1pZDFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC0xXCIpO1xuICAgICAgICBjb25zdCBmd2QxRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmd2QtMVwiKTtcbiAgICAgICAgY29uc3QgZ2syRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnay0yXCIpO1xuICAgICAgICBjb25zdCBkZWYyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWYtMlwiKTtcbiAgICAgICAgY29uc3QgbWlkMkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkLTJcIik7XG4gICAgICAgIGNvbnN0IGZ3ZDJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ3ZC0yXCIpO1xuXG4gICAgICAgIC8vYWRkaW5nIHBsYXllcnMgaW5zaWRlIHNxdWFkcyBzZWN0aW9uXG4gICAgICAgIGNvbnN0IHRlYW0xRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtLTEtYm94XCIpO1xuICAgICAgICAgICAgdGVhbTFEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbS0xLWhlYWRlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5uYW1lfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdsb2dvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgY29uc3QgdGVhbTJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW0tMi1ib3hcIik7XG4gICAgICAgICAgICB0ZWFtMkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLTItaGVhZGVyLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICAvL3BsYWNlIHBsYXllcnMgb24gYSBmaWVsZCBhY2NvcmRpbmcgdG8gdGhlaXIgYWN0dWFsIHBvc2l0aW9uIGFuZCB0ZWFtIGZvcm1hdGlvblxuICAgICAgICByZXMuZGF0YS5yZXNwb25zZS5mb3JFYWNoKChjb21tYW5kLCBjaWR4KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21tYW5kKVxuICAgICAgICAgICAgY29tbWFuZC5zdGFydFhJLmZvckVhY2goKHBsciwgcGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZCgndGVhbS0xJylcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J251bWJlcic+JHtwbHIucGxheWVyLm51bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cGxyLnBsYXllci5uYW1lfTwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvcyc+ICAoJHtwbHIucGxheWVyLnBvc30pPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgaWYocGxyLnBsYXllci5wb3MgPT09ICdHJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDEnLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQ9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2sxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwxJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWYxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkMURpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDEnLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ3ZDFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhbTFEaXYuYXBwZW5kQ2hpbGQocGxheWVyRGl2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoJ3RlYW0tMicpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdudW1iZXInPiR7cGxyLnBsYXllci5udW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz4ke3Bsci5wbGF5ZXIubmFtZX08L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwb3MnPiAgKCR7cGxyLnBsYXllci5wb3N9KTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0cnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDInLCdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2syRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMicsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDInLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZDJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdGJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwyJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmd2QyRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlYW0yRGl2LmFwcGVuZENoaWxkKHBsYXllckRpdiwgZml4dHVyZUlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gcmVuZGVyR2FtZVN0YXQoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMik7XG4gICAgICAgIFxuICAgICAgICBnZXRGaXh0dXJlUGxheWVyc1N0YXQoZml4dHVyZUlkKS50aGVuKChGaXh0dXJlUGxheWVyc1N0YXQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEZpeHR1cmVQbGF5ZXJzU3RhdClcbiAgICAgICAgICAgIHJlbmRlckdhbWVTdGF0KGZpeHR1cmVJZCwgc2NvcmUxLCBzY29yZTIsIEZpeHR1cmVQbGF5ZXJzU3RhdCk7XG4gICAgICAgICAgICAvL21vZGFsIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICAgIHJlbmRlclBsYXllck1vZGFsKHNxdWFkc0RpdiwgRml4dHVyZVBsYXllcnNTdGF0LCBmaXh0dXJlSWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG9wZW5JbnN0cnVjdGlvbnNNb2RhbCgpO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVCeUlkO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHJlbmRlckdhbWVCeUlkIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgcmVuZGVyVm90aW5nTW9kYWwgZnJvbSAnLi9yZW5kZXJWb3RpbmdNb2RhbCc7XG5pbXBvcnQgZ2FtZXNSZWZyZXNoIGZyb20gJy4vZ2FtZXNSZWZyZXNoJztcbmltcG9ydCBlcGxMb2dvIGZyb20gJy4uLy4uL2Rpc3QvaW1hZ2VzL2JsYWNrbG9nby5wbmcnO1xuXG5jb25zdCByZW5kZXJHYW1lcyA9IChyb3VuZCkgPT4ge1xuICAgIGNvbnN0IGFsbEdhbWVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2FtZXNcIilcbiAgICBjb25zdCBhbGxHYW1lc0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWxsR2FtZXNEaXYuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuICAgIGNvbnN0IGxlYWd1ZUluZm9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWd1ZS1pbmZvXCIpO1xuICAgIGxlYWd1ZUluZm9EaXYuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gICAgYXhpb3MuZ2V0KGAuL2dhbWVzP3JvdW5kPSR7cm91bmR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpeHR1cmVzQXJyID0gcmVzLmRhdGEucmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VjdGlvbk5hbWVEaXYuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tbmFtZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBsaXZlR2FtZXNTdGF0dXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBuZXh0U2Vhc29uID0gcmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLnNlYXNvbiArIDE7XG4gICAgICAgIGxlYWd1ZUluZm9EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSdsZWFndWUtYm94Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvdW50cnktYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz4ke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5jb3VudHJ5fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsYWcnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLmZsYWd9XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdsb2dvLWJveCc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZXBsTG9nb31cIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2xlYWd1ZS1uYW1lJz5cbiAgICAgICAgICAgICR7cmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NlYXNvbi1ib3gnPlxuICAgICAgICAgICAgICAgICR7cmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLnNlYXNvbn0tJHtuZXh0U2Vhc29ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdlcGwtbGluayc+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cucHJlbWllcmxlYWd1ZS5jb20vJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInIHRhcmdldD1cIl9ibGFua1wiPlZpc2l0IEVQTDwvYT4gICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdieS1ucyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYXQteWVhcic+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNvcHlyaWdodFwiPjwvaT4ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9uaWtvbGF5c2hhdGFsb3YuY29tLycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyB0YXJnZXQ9XCJfYmxhbmtcIj5ieSBOaWtvbGF5IFNoYXRhbG92PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBsZXQgY3VycmVudFJvdW5kU3RyaW5nID0gcmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLnJvdW5kO1xuICAgICAgICBsZXQgY3VycmVudFJvdW5kID0gYCR7Y3VycmVudFJvdW5kU3RyaW5nLnNwbGl0KCcgJykucG9wKCl9IGA7XG4gICAgICAgIGxldCBwcmV2Um91bmQgPSBwYXJzZUludChjdXJyZW50Um91bmQpIC0gMTtcbiAgICAgICAgbGV0IG5leHRSb3VuZCA9IHBhcnNlSW50KGN1cnJlbnRSb3VuZCkgKyAxO1xuICAgICAgICBzZWN0aW9uTmFtZURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3VuZFByZXYnPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gR08gVE8gUk9VTkQgJHsgcHJldlJvdW5kfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3VuZEN1cnInPlxuICAgICAgICAgICAgICAgICBBTEwgR0FNRVMgLSBST1VORCAke2N1cnJlbnRSb3VuZH0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JvdW5kTmV4dCc+XG4gICAgICAgICAgICAgICAgR08gVE8gUk9VTkQgJHtuZXh0Um91bmR9IDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgYWxsR2FtZXNEaXYuYXBwZW5kKHNlY3Rpb25OYW1lRGl2KTtcblxuICAgICAgICBjb25zdCBwUm91bmQgPSBgUmVndWxhciBTZWFzb24gLSAke3ByZXZSb3VuZH1gO1xuICAgICAgICBjb25zdCBuUm91bmQgPSBgUmVndWxhciBTZWFzb24gLSAke25leHRSb3VuZH1gO1xuICAgICAgICBjb25zdCBwcmV2aW91c1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3VuZFByZXZcIik7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3VuZE5leHRcIik7XG4gICAgICAgIFxuICAgICAgICBwcmV2Um91bmQgIT09IDAgPyBwcmV2aW91c1JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMocFJvdW5kKSkgOiBcIlwiO1xuICAgICAgICAvLyBwcmV2aW91c1JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMocFJvdW5kKSk7XG4gICAgICAgIG5leHRSb3VuZCA9PT0gMzggPyAnJyA6XG4gICAgICAgIGZvbGxvd2luZ1JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMoblJvdW5kKSk7ICAgIFxuICAgICAgIFxuICAgICAgICBhbGxHYW1lc0JveERpdi5jbGFzc0xpc3QuYWRkKFwiYWxsLWdhbWVzLWJveFwiKTtcbiAgICAgICAgYWxsR2FtZXNEaXYuYXBwZW5kKGFsbEdhbWVzQm94RGl2KTtcbiAgICAgICAgY29uc3QgZ2FtZUxpdmVTdGF0dXMgPSBbJzFIJywnSFQnLCcySCcsJ0VUJywnUCcsJ0JUJ107XG4gICAgICAgIGNvbnN0IGdhbWVOb3RMaXZlU3RhdHVzID0gWydOUycsICdGVCddO1xuICAgICAgICBcbiAgICAgICAgZml4dHVyZXNBcnIuZm9yRWFjaCgoZml4LCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlYW0xID0gZml4LnRlYW1zLmhvbWUubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28xID0gZml4LnRlYW1zLmhvbWUubG9nbztcbiAgICAgICAgICAgIGNvbnN0IHRlYW0yID0gZml4LnRlYW1zLmF3YXkubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28yID0gZml4LnRlYW1zLmF3YXkubG9nbztcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlMSA9IGZpeC5nb2Fscy5ob21lO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUyID0gZml4LmdvYWxzLmF3YXk7XG4gICAgICAgICAgICBjb25zdCBnYW1lU3RhdHVzID0gZml4LmZpeHR1cmUuc3RhdHVzLnNob3J0O1xuICAgICAgICAgICAgY29uc3QgZ2FtZUlkID0gZml4LmZpeHR1cmUuaWQ7XG5cbiAgICAgICAgICAgIC8vIHRvIGNoZWNrIGlmIGF0IGxlYXQgb25lIGdhbWUgaXMgbGl2ZSB0byBlbmFibGUgdXBkYXRlc1xuICAgICAgICAgICAgaWYgKGdhbWVMaXZlU3RhdHVzLmluY2x1ZGVzKGdhbWVTdGF0dXMpKSBsaXZlR2FtZXNTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZml4dHVyZVJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXR1c1Jvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdmaXh0dXJlLWJveCcpO1xuICAgICAgICAgICAgZ2FtZVN0YXR1c1Jvd0Rpdi5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXR1cy1yb3cnKTtcbiAgICAgICAgICAgIHNjb3JlQm94RGl2LmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWJveCcpO1xuXG4gICAgICAgICAgICBmaXh0dXJlUm93RGl2LnNldEF0dHJpYnV0ZSgnZ2FtZUlkJywgZ2FtZUlkICk7XG5cbiAgICAgICAgICAgIC8vIGlmIGdhbWUgaXMgbGl2ZSB0aGVuIHNob3cgJ3Njb3JlJywgb3RoZXJ3aXNlIHNob3cgJ3ZzJ1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IChnYW1lTGl2ZVN0YXR1cy5pbmNsdWRlcyhnYW1lU3RhdHVzKSB8fCAoZ2FtZVN0YXR1cyA9PT0gJ0ZUJykpID8gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzY29yZSc+JHtzY29yZTF9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUnPiR7c2NvcmUyfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgOiAnPGRpdiBjbGFzcz1cInZzXCI+dnM8L2Rpdj4nO1xuXG4gICAgICAgICAgICAvLyBpZiBnYW1lIGlzIG5vdCBzdGFydGVkLCBkaXNwbGF5IFZPVEUgYnV0dG9uIFxuICAgICAgICAgICAgY29uc3Qgdm90ZUJ0bkRpc3BsYXkgPSAoZ2FtZVN0YXR1cyA9PT0gJ05TJyk/IFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9J3ZvdGluZy1idG4tYm94Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ndm90aW5nLWJ0bicgXG4gICAgICAgICAgICAgICAgICAgIHRlYW0xLW5hbWU9JyR7dGVhbTF9J1xuICAgICAgICAgICAgICAgICAgICB0ZWFtMi1uYW1lPScke3RlYW0yfSdcbiAgICAgICAgICAgICAgICAgICAgdGVhbTEtbG9nbz0nJHtsb2dvMX0nXG4gICAgICAgICAgICAgICAgICAgIHRlYW0yLWxvZ289JyR7bG9nbzJ9J1xuICAgICAgICAgICAgICAgICAgICBnYW1lSWQ9JHtnYW1lSWR9PlxuICAgICAgICAgICAgICAgICAgICBWT1RFXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gIDogJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZpeHR1cmVSb3dEaXYuaW5uZXJIVE1MID0gIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dhbWUtc3RhdHVzLXNlY3Rpb24nPiR7Zml4LmZpeHR1cmUuc3RhdHVzLmxvbmd9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtMS1ib3gnID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGVhbTF9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48aW1nIHNyYz1cIiR7bG9nbzF9XCIvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RlbXB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtMi1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PGltZyBzcmM9XCIke2xvZ28yfVwiLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGVhbTJ9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICR7dm90ZUJ0bkRpc3BsYXl9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZ2FtZVN0YXR1cyAhPT0gJ05TJykge1xuICAgICAgICAgICAgICAgIGZpeHR1cmVSb3dEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJHYW1lQnlJZChnYW1lSWQsIHNjb3JlMSwgc2NvcmUyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFsbEdhbWVzQm94RGl2LmFwcGVuZENoaWxkKGZpeHR1cmVSb3dEaXYpO1xuICAgICAgICAgICAgcmVuZGVyVm90aW5nTW9kYWwoYWxsR2FtZXNCb3hEaXYsIHRlYW0xLCB0ZWFtMik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy9saXZlIHVwZGF0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpdmVVcGRhdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuY2xhc3NMaXN0LmFkZCgnbGl2ZS11cGRhdGVzLWJveCcpO1xuICAgICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChidXR0b25MaXZlVXBkYXRlcyk7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0Q291bnRlcicpICE9PSBudWxsKXtcbiAgICAgICAgICAgIGxldCBuZXdDb3VudGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJyk7XG4gICAgICAgICAgICBuZXdDb3VudGVyICsrO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJywgbmV3Q291bnRlcik7XG4gICAgICAgICAgICBpZiAobmV3Q291bnRlciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKGxpdmVHYW1lc1N0YXR1cyl7XG4gICAgICAgICAgICBidXR0b25MaXZlVXBkYXRlcy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPSdsaXZlLXVwZGF0ZXMnPkFDVElWQVRFIExJVkUgVVBEQVRFUzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nbm8tbGl2ZS11cGRhdGVzJz5TVE9QIExJVkUgVVBEQVRFUzwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnN0IGJ0bkxpdmVVcGRhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZlLXVwZGF0ZXNcIik7XG4gICAgICAgICAgICBjb25zdCBidG5Ob0xpdmVVcGRhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1saXZlLXVwZGF0ZXNcIik7XG5cbiAgICAgICAgICAgIGdhbWVzUmVmcmVzaChidG5MaXZlVXBkYXRlcywgYnRuTm9MaXZlVXBkYXRlcywgcm91bmQpXG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuaW5uZXJIVE1MID0gYFxuICAgICAgICAvLyAgICAgPGJ1dHRvbiBjbGFzcz0nbm8tbGl2ZS11cGRhdGVzJyBkaXNhYmxlZD5cbiAgICAgICAgLy8gICAgICAgICBObyBsaXZlIGdhbWVzIHJpZ2h0IG5vd1xuICAgICAgICAvLyAgICAgPC9idXR0b24+YDtcbiAgICAgICAgLy8gICAgIGFsbEdhbWVzQm94RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkxpdmVVcGRhdGVzKTtcblxuICAgICAgICAvLyAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICAvLyB9XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lczsiLCJpbXBvcnQgcmVuZGVyR2FtZXMgZnJvbSAnLi9nYW1lcyc7XG5cbi8vZ2FtZXNSZWZyZXNoLmpzXG5jb25zdCBnYW1lc1JlZnJlc2ggPSAoYnRuTGl2ZVVwZGF0ZXMsIGJ0bk5vTGl2ZVVwZGF0ZXMsIHJvdW5kKSA9PiB7XG5cbiAgICBsZXQgaW50ZXJ2YWw7XG4gICAgXG4gICAgYnRuTGl2ZVVwZGF0ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckdhbWVzKHJvdW5kKVxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHJlbmRlckdhbWVzKHJvdW5kKSwgMTAwMDApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxTdEludGVydmFsJywgaW50ZXJ2YWwpO1xuICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJywgY291bnRlcik7XG4gICAgfSk7XG4gICAgXG4gICAgYnRuTm9MaXZlVXBkYXRlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9jYWxTdEludGVydmFsJyk7XG5cbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnRuTm9MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSk7XG5cblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykgIT09IG51bGwpe1xuICAgICAgICBidG5MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIGJ0bk5vTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnRuTm9MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lc1JlZnJlc2g7XG5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVuZGVyR2FtZVN0YXQgPSAoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMiwgRml4dHVyZVBsYXllcnNTdGF0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ0hJIEZST00gR0FNRSBTVEFUJyk7XG4gICBcbiAgICBjb25zdCBvbmVHYW1lQ29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25lLWdhbWVcIik7XG4gICAgY29uc3Qgc3RhbmRpbmdzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFuZGluZ3NcIilcbiAgICAvLyBjb25zdCB0ZXN0Qm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB0ZXN0Qm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXN0LWJveFwiKTtcbiAgICBheGlvcy5nZXQoYC9nYW1lc3RhdC8/Zml4dHVyZUlkPSR7Zml4dHVyZUlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXNwb25zZSk7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVTdGF0RGl2LmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3RhdC1ib3gnKTtcbiAgICAgICAgc3RhbmRpbmdzRGl2LmFwcGVuZChnYW1lU3RhdERpdik7XG4gICAgICAgIG9uZUdhbWVDb250ZW50RGl2LmFwcGVuZChnYW1lU3RhdERpdik7XG4gICAgICAgIGNvbnN0IHRlYW1zU3RhdCA9IHJlcy5kYXRhLnJlc3BvbnNlO1xuICAgICAgICBjb25zdCBwb3NzZXNzaW9uID0gW107XG4gICAgICAgIGNvbnN0IHNob3RzT24gPSBbXTtcbiAgICAgICAgY29uc3Qgc2hvdHNPZmYgPSBbXTtcbiAgICAgICAgY29uc3QgZm91bHMgPSBbXTtcbiAgICAgICAgY29uc3QgeWMgPSBbXTtcblxuICAgICAgICB0ZWFtc1N0YXQuZm9yRWFjaCgodGVhbVN0YXQsIGlkeDEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlYW1TdGF0KVxuICAgICAgICAgICAgdGVhbVN0YXQuc3RhdGlzdGljcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiQmFsbCBQb3NzZXNzaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2Vzc2lvbi5wdXNoKHN0YXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIlNob3RzIG9uIEdvYWxcIil7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT24ucHVzaChzdGF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQudHlwZSA9PT0gXCJTaG90cyBvZmYgR29hbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT2ZmLnB1c2goc3RhdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiRm91bHNcIikge1xuICAgICAgICAgICAgICAgICAgICBmb3Vscy5wdXNoKHN0YXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiWWVsbG93IENhcmRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWMucHVzaChzdGF0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBnYW1lU3RhdERpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZS1zdGF0LXRpdGxlJz5HQU1FIFNUQVRJU1RJQ1M8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzY29yZUJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Mb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTmFtZVwiPiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbVNjb3JlMSc+JHtzY29yZTF9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbUhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzFdLnRlYW0ubG9nb31cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbU5hbWVcIj4ke3Jlcy5kYXRhLnJlc3BvbnNlWzFdLnRlYW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW1TY29yZTInPiR7c2NvcmUyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3doby1zY29yZWQtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2hvLXNjb3JlZC10ZWFtMSc+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2hvLXNjb3JlZC10ZWFtMic+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zc1Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3NzXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gQmFsbCBQb3NzZXNzaW9uIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09uUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNob3RzT25cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBTaG90cyBvbiBHb2FscyA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNob3RzT2ZmUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNob3RzT2ZmXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBTaG90cyBvZmYgR29hbHMgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3Vsc1Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3Vsc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gRm91bHMgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwieWNQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwieWNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IFllbGxvdyBDYXJkcyA8L2Rpdj4gIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgIFxuICAgICAgICBjb25zdCB0ZWFtMVBsYXllcnNTdGF0ID0gT2JqZWN0LnZhbHVlcyhGaXh0dXJlUGxheWVyc1N0YXRbMF0ucGxheWVycyk7XG4gICAgICAgIGNvbnN0IHRlYW0yUGxheWVyc1N0YXQgPSBPYmplY3QudmFsdWVzKEZpeHR1cmVQbGF5ZXJzU3RhdFsxXS5wbGF5ZXJzKTtcbiAgICAgICBcbiAgICAgICAgY29uc3QgdGVhbTFTY29yZWRQbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvLXNjb3JlZC10ZWFtMVwiKTtcbiAgICAgICAgY29uc3QgdGVhbTJTY29yZWRQbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvLXNjb3JlZC10ZWFtMlwiKTtcblxuICAgICAgICB0ZWFtMVBsYXllcnNTdGF0LmZvckVhY2gocGxheWVyPT57XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIpXG4gICAgICAgICAgICBpZiAocGxheWVyLnN0YXRpc3RpY3NbMF0uZ29hbHMudG90YWwgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnN0YXRpc3RpY3NbMF0uZ29hbHMudG90YWw7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBzYzFEaXYuY2xhc3NMaXN0LmFkZCgnZ29hbC1zY29yZXInKTtcbiAgICAgICAgICAgICAgICAgICAgc2MxRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cGxheWVyLnBsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIHRlYW0xU2NvcmVkUGxEaXYuYXBwZW5kQ2hpbGQoc2MxRGl2KVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRlYW0yUGxheWVyc1N0YXQuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGxheWVyLnN0YXRpc3RpY3NbMF0uZ29hbHMudG90YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIucGxheWVyLm5hbWUsIHBsYXllci5zdGF0aXN0aWNzWzBdLmdvYWxzLnRvdGFsKVxuICAgICAgICAgICAgICAgIC8vIHBsYXllci5zdGF0aXN0aWNzWzBdLmdvYWxzLnRvdGFsXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuc3RhdGlzdGljc1swXS5nb2Fscy50b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBzYzJEaXYuY2xhc3NMaXN0LmFkZCgnZ29hbC1zY29yZXInKTtcbiAgICAgICAgICAgICAgICAgICAgc2MyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cGxheWVyLnBsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIHRlYW0yU2NvcmVkUGxEaXYuYXBwZW5kQ2hpbGQoc2MyRGl2KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZW5kZXJTdGF0cyA9IChzdGF0MSwgdG90YWwsIGlkTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE5hbWUpO1xuICAgICAgICAgICAgaWYgKGlkTmFtZSA9PT0gJ3Bvc3MnKXtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gc3RhdDE7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAoc3RhdDEgLyB0b3RhbCApICoxMDA7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHJhdGlvICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyU3RhdHMocG9zc2Vzc2lvblswXS52YWx1ZSwgMCwgXCJwb3NzXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09uWzBdLnZhbHVlLCBzaG90c09uWzBdLnZhbHVlICsgc2hvdHNPblsxXS52YWx1ZSwgXCJzaG90c09uXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09mZlswXS52YWx1ZSwgc2hvdHNPZmZbMF0udmFsdWUgKyBzaG90c09mZlsxXS52YWx1ZSwgXCJzaG90c09mZlwiKTtcbiAgICAgICAgcmVuZGVyU3RhdHMoZm91bHNbMF0udmFsdWUsIGZvdWxzWzBdLnZhbHVlICsgZm91bHNbMV0udmFsdWUsIFwiZm91bHNcIik7XG4gICAgICAgIHJlbmRlclN0YXRzKHljWzBdLnZhbHVlLCB5Y1swXS52YWx1ZSArIHljWzFdLnZhbHVlLCBcInljXCIpO1xuICAgICAgXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZVN0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgLi9maXh0dXJlX3BsYXllcnNfc3RhdD9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIaSBmcm9tIGZpeHR1cmUgcGxheWVycyBzdGF0IScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCcpO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2U7XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQ7IiwiY29uc3Qgb3Blbkluc3RydWN0aW9uc01vZGFsID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXYtZm9yLW1vZGFsJyk7XG4gICAgY29uc3QgaW5zdHJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25zLWxpbmsnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhpbnN0ckJ0biwgbmF2RGl2KTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRGl2LmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxkaXYgaWQ9XCJteU1vZGFsSW5zdFwiIGNsYXNzPVwibW9kYWxJbnN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlSW50XCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBpZD0nbW9kYWwtYm94LWluc3QnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Fib3V0LXRpdGxlJz5BQk9VVDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Fib3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgOTBQbHVzIGlzIGEgc29jY2VyIHNjb3JlIGFwcCBmb3IgdGhlIEVuZ2xpc2ggUHJlbWllciBMZWFndWUuIFRoaXMgYXBwIGJyaW5ncyB5b3UgdGhlIGZpeHR1cmVzIHdpdGggbGl2ZSB1cGRhdGVzLCBnYW1lIHN0YXRzLCBnYW1lIHdpbm5lciB2b3Rpbmcgb3B0aW9ucyBhbmQgbW9yZS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2luc3QtdGl0bGUnPklOU1RSVUNUSU9OUzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2luc3QnPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q1VSUkVOVCBtYXRjaGRheSBnYW1lcyBhcmUgZGlzcGxheWVkIG9uIHRoZSBtYWluIHBhZ2UgKGV4LiBBTEwgR0FNRVMgLSBST1VORCAxNykuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+T0xERVIgZ2FtZSBpbmZvIGNvdWxkIGJlIGFjY2Vzc2VkIGZyb20gdGhlIHRvcCBuYXZpZ2F0aW9uIGJhciB3aGVuIGNsaWNraW5nIG9uIHBpbmsgYnV0dG9uIChleC4gPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBHTyBUTyBST1VORCAxNjwvc3Bhbj4pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TaW1pbGFybHksIEZVVFVSRSBnYW1lIGluZm8gY291bGQgYmUgYWNjZXNzZWQgZnJvbSB0aGUgdG9wIG5hdmlnYXRpb24gYmFyIChleC4gPHNwYW4+R08gVE8gUk9VTkQgMTggPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L3NwYW4+KS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSB1c2VyIGNhbiBjbGljayBvbiBMSVZFIG9yIEZJTklTSEVEIGZpeHR1cmVzIHRvIHNlZSBkZXRhaWxlZCBzdGF0aXN0aWNzLiBBIHBsYXllcuKAmXMgc3RhdHMgYXJlIGF2YWlsYWJsZSB3aGVuIGhvdmVyaW5nIG92ZXIgYW55IHBsYXllciBvbiB0aGUgcGl0Y2guIFRyeSBpdCE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSB1c2VyIGNhbiB2b3RlIGZvciB0aGUgZ2FtZSBXSU5ORVIgYnkgY2xpY2tpbmcgb24gdGhlIFZPVEUgYnV0dG9uLiBUaGlzIGZlYXR1cmUgaXMgYXZhaWxhYmxlIG9ubHkgZm9yIGZ1dHVyZSBnYW1lcy48L2xpPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5MaXZlIHVwZGF0ZXMgY2FuIGJlIG1hbnVhbGx5IHR1cm5lZCBvbiBieSBzZWxlY3RpbmcgPHNwYW4+QUNUSVZBVEUgTElWRSBVUERBVEVTPC9zcGFuPi4gV2hlbiBzZWxlY3RlZCwgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoIDMgdGltZXMgZXZlcnkgMTAgc2Vjb25kcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3Nlcy4gTGl2ZSB1cGRhdGVzIGNhbiBiZSB0dXJuZWQgb2ZmIGJ5IHNlbGVjdGluZyA8c3Bhbj5TVE9QIExJVkUgVVBEQVRFUzwvc3Bhbj4uPC9saT4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHVsPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnVpbHQtYnknPlxuICAgICAgICAgICAgICAgICAgICBCdWlsdCBieSA8YSBocmVmPSdodHRwczovL25pa29sYXlzaGF0YWxvdi5jb20vJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInIHRhcmdldD1cIl9ibGFua1wiPk5pa29sYXkgU2hhdGFsb3Y8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG4gICAgXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215TW9kYWxJbnN0XCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VJbnRcIilbMF07XG5cbiAgICBpbnN0ckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFxuXG4gICAgfSlcblxuICAgIHNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb3Blbkluc3RydWN0aW9uc01vZGFsOyIsImltcG9ydCByZW5kZXJQbGF5ZXJTdGF0IGZyb20gJy4vcmVuZGVyUGxheWVyU3RhdCc7XG5cbmNvbnN0IHJlbmRlclBsYXllck1vZGFsID0gKHNxdWFkc0RpdiwgRml4dHVyZVBsYXllcnNTdGF0LCBmaXh0dXJlSWQpID0+IHtcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRGl2LmlubmVySFRNTCA9XG4gICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJteU1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J21vZGFsLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb21lIHRleHQgZ29lcyBoZXJlIC4uLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICBzcXVhZHNEaXYuYXBwZW5kQ2hpbGQobW9kYWxEaXYpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215TW9kYWxcIik7XG4gICAgY29uc3QgcGxheWVyc1RvQ2xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsLXNlbGVjdFwiKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4gICAgcGxheWVyc1RvQ2xpY2suZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJZCA9IHBsYXllci5nZXRBdHRyaWJ1dGUoJ3BsYXllcklkJyk7XG4gICAgICAgICAgICBjb25zdCB0ZWFtSWQgPSBwbGF5ZXIuZ2V0QXR0cmlidXRlKCd0ZWFtSWQnKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVySWRtID0gcGFyc2VJbnQocGxheWVySWQpO1xuICAgICAgICAgICAgY29uc3QgdGVhbUlkbSA9IHBhcnNlSW50KHRlYW1JZCk7XG4gICAgICAgICAgICByZW5kZXJQbGF5ZXJTdGF0KHBsYXllcklkbSwgdGVhbUlkbSwgZml4dHVyZUlkLCBGaXh0dXJlUGxheWVyc1N0YXQpO1xuICAgICAgICB9KTtcblxuICAgIH0pXG5cbiAgICBzcGFuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBsYXllck1vZGFsOyIsIlxuY29uc3QgcmVuZGVyUGxheWVyU3RhdCA9IChwbGF5ZXJJZG0sIHRlYW1JZG0sIGZpeHR1cmVJZG0sIEZpeHR1cmVQbGF5ZXJzU3RhdG0pID0+IHtcblxuICAgIGxldCB0ZWFtSW5mbyA9IHt9O1xuICAgIGxldCBwbGF5ZXJJbmZvPXt9O1xuICAgIGxldCBwbGF5ZXJTdGF0ID0ge307XG5cbiAgICBGaXh0dXJlUGxheWVyc1N0YXRtLmZvckVhY2goKHNxdWFkKT0+e1xuXG4gICAgICAgIGlmIChzcXVhZC50ZWFtLmlkID09PSB0ZWFtSWRtKSB7XG4gICAgICAgICAgICB0ZWFtSW5mbyA9IHNxdWFkO1xuICAgICAgICAgICAgc3F1YWQucGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGlkeCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBsYXllci5pZCA9PT0gcGxheWVySWRtKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVySW5mbyA9IHBsYXllci5wbGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclN0YXQgPSBwbGF5ZXIuc3RhdGlzdGljc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH0pXG5cblxuICAgIGNvbnN0IG1vZGFsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1ib3hcIik7XG5cbiAgICBjb25zdCByaWdodEJveERhdGEgPSAocGxheWVyU3RhdC5nYW1lcy5wb3NpdGlvbiA9PT0gJ0cnKSA/XG4gICAgICAgIGA8ZGl2IGNsYXNzPSdzYXZlcy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TYXZlczogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLnNhdmVzID8gcGxheWVyU3RhdC5nb2Fscy5zYXZlcyA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb25jZWRlZC1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5Hb2FscyBjb25jZWRlZDogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLmNvbmNlZGVkID8gcGxheWVyU3RhdC5nb2Fscy5jb25jZWRlZCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgIFxuICAgIDogXG4gICAgICAgIGA8ZGl2IGNsYXNzPSdkdWVscy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5EdWVscyBXb24vVG90YWw6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5kdWVscy53b24gPyBwbGF5ZXJTdGF0LmR1ZWxzLndvbiA6IDB9IC8gJHtwbGF5ZXJTdGF0LmR1ZWxzLnRvdGFsID8gcGxheWVyU3RhdC5kdWVscy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXNzZXMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UGFzc2VzKEFjY3VyYWN5JSk6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5wYXNzZXMudG90YWwgPyBwbGF5ZXJTdGF0LnBhc3Nlcy50b3RhbCA6IDB9ICgke3BsYXllclN0YXQucGFzc2VzLmFjY3VyYWN5ID8gcGxheWVyU3RhdC5wYXNzZXMuYWNjdXJhY3kgOiAwfSUpPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaG90cy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TaG90czogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LnNob3RzLnRvdGFsID8gcGxheWVyU3RhdC5zaG90cy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz0nZ29hbHMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+R29hbHM6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nb2Fscy50b3RhbCA/IHBsYXllclN0YXQuZ29hbHMudG90YWwgOiAwfSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgXG4gICAgO1xuXG4gICAgbW9kYWxCb3guaW5uZXJIVE1MID1cbiAgICAgICAgYCAgIDxkaXYgY2xhc3M9J2xlZnQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbC1pbWctYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXllckluZm8ucGhvdG99XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsLW5hbWUnPiR7cGxheWVySW5mby5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLW51bWJlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+TnVtYmVyOiAke3BsYXllclN0YXQuZ2FtZXMubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLWJveCByb3cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UG9zaXRpb246IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdhbWVzLnBvc2l0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JhdGluZy1ib3ggcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlJhdGluZzogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZ2FtZXMucmF0aW5nID8gcGxheWVyU3RhdC5nYW1lcy5yYXRpbmcgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21pbnV0ZXMtYm94IHJvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5NaW51dGVzOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nYW1lcy5taW51dGVzID8gcGxheWVyU3RhdC5nYW1lcy5taW51dGVzIDogMH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICR7cmlnaHRCb3hEYXRhfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQbGF5ZXJTdGF0OyIsImltcG9ydCByZW5kZXJWb3RpbmdTdGF0IGZyb20gJy4vcmVuZGVyVm90aW5nU3RhdCc7XG5cbmNvbnN0IHJlbmRlclZvdGluZ01vZGFsID0gKGFsbEdhbWVzQm94RGl2LCB0MXJlZiwgdDJyZWYpID0+IHtcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRGl2LmlubmVySFRNTCA9XG4gICAgICAgIGBcbiAgICAgICAgPGRpdiBpZD1cIm15Vm90aW5nTW9kYWxcIiBjbGFzcz1cIm1vZGFsLXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC12LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLXZcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J21vZGFsLXYtYm94Jz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIGFsbEdhbWVzQm94RGl2LmFwcGVuZENoaWxkKG1vZGFsRGl2KTtcblxuICAgIGNvbnN0IG1vZGFsViA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlWb3RpbmdNb2RhbFwiKTtcbiAgICBjb25zdCBzcGFuViA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS12XCIpWzBdO1xuICAgIGNvbnN0IHZvdGluZ0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZvdGluZy1idG5cIik7XG4gICAgXG4gICAgdm90aW5nQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdXNlciBhbm9ueW1vdXMgYXV0aCBsb2dpblxuICAgICAgICAgICAgYXV0aC5zaWduSW5Bbm9ueW1vdXNseSgpO1xuICAgICAgICAgICAgbW9kYWxWLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSEkgRlJPTSBWT1RJTkcgTU9EQUwnKVxuICAgICAgICAgICAgY29uc3QgbmFtZTEgPSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMS1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lMiA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ3RlYW0yLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28xID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbG9nbycpO1xuICAgICAgICAgICAgY29uc3QgbG9nbzIgPSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMi1sb2dvJyk7XG4gICAgICAgICAgICBjb25zdCBnSWQgPSBidG4uZ2V0QXR0cmlidXRlKCdnYW1lSWQnKTtcblxuICAgICAgICAgICAgaWYgKHQxcmVmID09PSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMS1uYW1lJykpe1xuICAgICAgICAgICAgICAgIHJlbmRlclZvdGluZ1N0YXQobmFtZTEsIG5hbWUyLCBsb2dvMSwgbG9nbzIsIGdJZCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIHNwYW5WLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIHVzZXIgYW5vbnltb3VzIGF1dGggbG9naW5cbiAgICAgICAgYXV0aC5zaWduT3V0KCk7XG4gICAgICAgIG1vZGFsVi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbFYpIHtcbiAgICAgICAgICAgIC8vIHVzZXIgYW5vbnltb3VzIGF1dGggbG9naW5cbiAgICAgICAgICAgIGF1dGguc2lnbk91dCgpO1xuICAgICAgICAgICAgbW9kYWxWLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVm90aW5nTW9kYWw7IiwiaW1wb3J0IGRyYXdQaWUgZnJvbSAnLi9kcmF3UGllJztcblxuY29uc3QgcmVuZGVyVm90aW5nU3RhdCA9IChuYW1lMSwgbmFtZTIsIGxvZ28xLCBsb2dvMiwgZ2FtZUlkKSA9PiB7XG5cbiAgICBjb25zdCBtb2RhbFZCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXYtYm94XCIpO1xuICAgIG1vZGFsVkJveC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J3RlYW1zLXJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdidG4tYm94Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSd2b3RlTnVtMScgbmFtZT0nbmFtZTEnPiR7bmFtZTF9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lc3NhZ2UnPiBXaG8gd2lsbCB3aW4/IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnRuLWJveCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ndm90ZU51bTInIG5hbWU9J25hbWUyJz4ke25hbWUyfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPSd2b3RpbmctYm94Jz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3Qgdm90ZURhdGExID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlTnVtMVwiKTtcbiAgICBjb25zdCB2b3RlRGF0YTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGVOdW0yXCIpO1xuXG4gICAgdm90ZURhdGExLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGdldERhdGEoMSwgMSwgcGFyc2VJbnQoZ2FtZUlkKSlcbiAgICB9KVxuXG4gICAgdm90ZURhdGEyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZ2V0RGF0YSgxLCAyLCBwYXJzZUludChnYW1lSWQpKVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgYWRkRGF0YSA9IChkYXRhLCB2b3RlMSwgdm90ZTIpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hvIGZyb20gYWRkRGF0YSBmdW5jdGlvbicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGIuY29sbGVjdGlvbignd2lubmVyLXZvdGVzJykuYWRkKGRhdGEpO1xuICAgICAgICByZW5kZXJWb3Rlcyh2b3RlMSwgdm90ZTIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclZvdGVzID0gKHZvdGUxLCB2b3RlMik9PntcbiAgICAgICAgLy8gY29uc29sZS5sb2codm90ZTEsIHZvdGUyKVxuICAgICAgICBjb25zdCB2b3RpbmdCb3hEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGluZy1ib3hcIik7XG5cbiAgICAgICAgdm90aW5nQm94RGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2b3Rpbmctcm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2b3RlczEgdm90ZSc+JHsodm90ZTEgLyAodm90ZTEgKyB2b3RlMikgKiAxMDApLnRvRml4ZWQoMSl9JTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZvdGVzMiB2b3RlJz4keyh2b3RlMiAvICh2b3RlMSArIHZvdGUyKSAqIDEwMCkudG9GaXhlZCgxKX0lPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3BpZS1ib3gnPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICBgO1xuICAgICAgICBkcmF3UGllKHZvdGUxLCB2b3RlMilcbiAgICB9XG4gICBcblxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSAoZGF0YSwga2V5SWQsIHZvdGUxLCB2b3RlMikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGIuY29sbGVjdGlvbignd2lubmVyLXZvdGVzJykuZG9jKGtleUlkKS51cGRhdGUoZGF0YSk7XG4gICAgICAgIHJlbmRlclZvdGVzKHZvdGUxLCB2b3RlMik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0YSA9ICh2YWwsIG51bSwgZ2FtZUlkKSA9PiB7XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3dpbm5lci12b3RlcycpLmdldCgpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXMuZG9jcy5mb3JFYWNoKGRvYz0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5kYXRhKCksIGRvYy5pZClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtnYW1lSWR9YCk7XG4gICAgICAgICAgICAgICAgLy8gREFUQSBJUyBFWElTVElORyBJTiBEQVRBQkFTRS4gQ0FMTCBVUERBVEVcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChPYmplY3Qua2V5cyhkb2MuZGF0YSgpKVswXSkgPT09IGdhbWVJZCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlJZCA9IGRvYy5pZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGVzID0gKGRvYy5kYXRhKClbZ2FtZUlkXSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGUxPTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2b3RlMj0wO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHZvdGUgaW4gdm90ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGUgPT09ICd0ZWFtMScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUxID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUyID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdWb3RlMSA9IHZvdGUxICsgdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IFtnYW1lSWRdOiB7IHRlYW0xOiBuZXdWb3RlMSwgdGVhbTI6IHZvdGUyfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkPXRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgW2dhbWVJZF06IHsgdGVhbTE6IHZvdGUxLCB0ZWFtMjogbmV3Vm90ZTIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCB2b3RlMSwgbmV3Vm90ZTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gREFUQSBJUyBORVcuIENBTEwgQUREIEZVTkNUSU9OXG4gICAgICAgICAgICBpZiAodXBkYXRlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgbGV0IHZvdGUxID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdm90ZTIgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUxID0gdm90ZTEgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogbmV3Vm90ZTEsIHRlYW0yOiB2b3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogdm90ZTEsIHRlYW0yOiBuZXdWb3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCB2b3RlMSwgbmV3Vm90ZTIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclZvdGluZ1N0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCByZW5kZXJTdGFuZGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YW5kaW5nc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhbmRpbmdzXCIpO1xuICBjb25zdCBzdGFuZGluZ0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YW5kaW5nQm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXN0YW5kaW5nLWJveFwiKTtcbiAgc3RhbmRpbmdzRGl2LmFwcGVuZChzdGFuZGluZ0JveERpdik7XG5cbiAgYXhpb3NcbiAgICAuZ2V0KFwiLi9zdGFuZGluZ3NcIilcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIiAtIC0gLSAtIC0gLVwiLCByZXMpO1xuICAgICAgY29uc3QgdGVhbXNBcnIgPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc3RhbmRpbmdzWzBdO1xuICAgICAgdGVhbXNBcnIuZm9yRWFjaCgodGVhbSwgaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0ZWFtUmFua0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRlYW1OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGVhbVBvaW50c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRlYW1HYW1lc0NvdW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGVhbVJhbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkYXRhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICB0ZWFtTmFtZURpdi5pbm5lclRleHQgPSB0ZWFtLnRlYW0ubmFtZTtcbiAgICAgICAgdGVhbVBvaW50c0Rpdi5pbm5lclRleHQgPSB0ZWFtLnBvaW50cztcbiAgICAgICAgdGVhbUdhbWVzQ291bnREaXYuaW5uZXJUZXh0ID0gdGVhbS5hbGwucGxheWVkO1xuICAgICAgICB0ZWFtUmFua0Rpdi5pbm5lclRleHQgPSB0ZWFtLnJhbms7XG5cbiAgICAgICAgdGVhbURpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1zdGFuZGluZy1yb3dcIik7XG4gICAgICAgIHRlYW1SYW5rQm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXJhbmstYm94XCIpO1xuICAgICAgICB0ZWFtUmFua0Rpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1yYW5rXCIpO1xuICAgICAgICB0ZWFtR2FtZXNDb3VudERpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVkLWdhbWVzXCIpO1xuICAgICAgICB0ZWFtUG9pbnRzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXBvaW50c1wiKTtcbiAgICAgICAgZGF0YURpdi5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICAgICAgdGVhbVJhbmtCb3hEaXYuYXBwZW5kKHRlYW1SYW5rRGl2LCB0ZWFtTmFtZURpdik7XG4gICAgICAgIGRhdGFEaXYuYXBwZW5kKHRlYW1HYW1lc0NvdW50RGl2LCB0ZWFtUG9pbnRzRGl2KTtcbiAgICAgICAgdGVhbURpdi5hcHBlbmQodGVhbVJhbmtCb3hEaXYsIGRhdGFEaXYpO1xuICAgICAgICBzdGFuZGluZ0JveERpdi5hcHBlbmQodGVhbURpdik7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU3RhbmRpbmdzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==