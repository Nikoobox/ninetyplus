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



window.addEventListener("DOMContentLoaded", function () {
  // let round = 'Regular Season - 12' ;
  // GET CURRENT ROUND AND RENDER GAMES AND STANDINGS
  Object(_scripts_currentRound__WEBPACK_IMPORTED_MODULE_1__["default"])(); // renderGames(round);
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






var renderGameById = function renderGameById(fixtureId, score1, score2) {
  var leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.innerHTML = "<div></div>";
  leagueInfoDiv.classList.remove('left');
  var allGamesContentDiv = document.getElementById("all-games");
  allGamesContentDiv.innerHTML = "<div id='one-game'></div>";
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./game?fixtureId=".concat(fixtureId)).then(function (res) {
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
    });
    Object(_gamestat__WEBPACK_IMPORTED_MODULE_2__["default"])(fixtureId, score1, score2);
    Object(_getFixturePlayersStat__WEBPACK_IMPORTED_MODULE_3__["default"])(fixtureId).then(function (FixturePlayersStat) {
      //modal functionality
      Object(_renderPlayerModal__WEBPACK_IMPORTED_MODULE_4__["default"])(squadsDiv, FixturePlayersStat, fixtureId);
    });
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
    // console.log(res.data.response);
    var fixturesArr = res.data.response;
    var sectionNameDiv = document.createElement("div");
    sectionNameDiv.classList.add("section-name");
    var liveGamesStatus = false;
    var nextSeason = res.data.response[0].league.season + 1;
    leagueInfoDiv.innerHTML = "\n        <div class='league-box'>\n            <div class='country-box'>\n                <div class='name'>".concat(res.data.response[0].league.country, "</div>\n                <div class='flag'>\n                    <img src=\"").concat(res.data.response[0].league.flag, "\"/>\n                </div>\n            </div>\n            <div class='logo-box'>\n            <img src=\"").concat(_dist_images_blacklogo_png__WEBPACK_IMPORTED_MODULE_4__["default"], "\"/>\n            </div>\n            <div class='league-name'>\n            ").concat(res.data.response[0].league.name, "\n            </div>\n            <div class='season-box'>\n                ").concat(res.data.response[0].league.season, "-").concat(nextSeason, "\n            </div>\n          \n            <div class='epl-link'>\n                <a href='https://www.premierleague.com/' rel='noopener noreferrer' target=\"_blank\">Visit EPL</a>   \n            </div>\n        </div>\n        ");
    var currentRoundString = res.data.response[0].league.round;
    var currentRound = "".concat(currentRoundString.split(' ').pop(), " ");
    var prevRound = parseInt(currentRound) - 1;
    var nextRound = parseInt(currentRound) + 1;
    sectionNameDiv.innerHTML = "\n            <div class='roundPrev'>\n                << GO TO ROUND ".concat(prevRound, " \n            </div>\n            <div class='roundCurr'>\n                ALL GAMES - ROUND ").concat(currentRound, " \n            </div>\n            <div class='roundNext'>\n                GO TO ROUND ").concat(nextRound, " >>\n            </div>\n            ");
    allGamesDiv.append(sectionNameDiv);
    var pRound = "Regular Season - ".concat(prevRound);
    var nRound = "Regular Season - ".concat(nextRound);
    var previousRound = document.querySelector(".roundPrev");
    var followingRound = document.querySelector(".roundNext");
    previousRound.addEventListener('click', function () {
      return renderGames(pRound);
    });
    followingRound.addEventListener('click', function () {
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


var renderGameStat = function renderGameStat(fixtureId, score1, score2) {
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
    }); // console.log(possession)

    gameStatDiv.innerHTML = "\n            <div class='game-stat-title'>GAME STATISTICS</div>\n            <div class='stat-box'>\n                <div class='scoreBox'>\n                    <div class=\"teamHome\">\n                        <div class=\"teamLogo\">\n                        <img src=\"".concat(res.data.response[0].team.logo, "\"/>\n                        </div> \n                        <div class=\"teamName\">").concat(res.data.response[0].team.name, "</div>\n                        <div class='teamScore1'>").concat(score1, "</div>\n                    </div>\n                    <div class=\"teamHome\">\n                        <div class=\"teamLogo\">\n                        <img src=\"").concat(res.data.response[1].team.logo, "\"/>\n                        </div> \n                        <div class=\"teamName\">").concat(res.data.response[1].team.name, "</div>\n                        <div class='teamScore2'>").concat(score2, "</div>\n                    </div>  \n                </div>\n                <div id=\"possProgress\">\n                    <div id=\"poss\"></div> \n                </div>\n                <div class=\"stat-name\"> Ball Possession </div>\n                <div id=\"shotsOnProgress\">\n                    <div id=\"shotsOn\"></div> \n                </div>\n                <div class=\"stat-name\"> Shots on Goals </div>\n                 <div id=\"shotsOffProgress\">\n                    <div id=\"shotsOff\"></div>\n                </div>\n                <div class=\"stat-name\"> Shots off Goals </div> \n                <div id=\"foulsProgress\">\n                    <div id=\"fouls\"></div>\n                </div>\n                <div class=\"stat-name\"> Fouls </div>  \n                <div id=\"ycProgress\">\n                    <div id=\"yc\"></div>\n                </div>\n                <div class=\"stat-name\"> Yellow Cards </div>  \n            </div>\n            ");

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import renderGameById from './game';

var renderPlayerStat = function renderPlayerStat(playerIdm, teamIdm, fixtureIdm, FixturePlayersStatm) {
  // console.log('hi from  RENDER PLAYER STAT');
  // console.log(playerIdm);
  // console.log(teamIdm);
  // console.log(fixtureIdm);
  // console.log(FixturePlayersStatm);
  var teamInfo = {};
  var playerInfo = {};
  var playerStat = {};
  FixturePlayersStatm.forEach(function (squad) {
    // console.log(squad);
    // console.log(teamIdm);
    // console.log(squad.team.id)
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
  }); // console.log(teamInfo);
  // console.log(playerInfo);
  // console.log(playerStat);

  var modalBox = document.getElementById("modal-box"); //check if goalkeeper redner one thing , for field player- another

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
    modalV.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modalV) {
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
    Object(_drawPie__WEBPACK_IMPORTED_MODULE_0__["default"])(vote1, vote2); // votingBoxDiv.appendChild(drawPie(vote1, vote2))
  };

  var updateData = function updateData(data, keyId, vote1, vote2) {
    // console.log('ho from updateData function')
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
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('./standings').then(function (res) {
    var teamsArr = res.data.response[0].league.standings[0];
    teamsArr.forEach(function (team, idx) {
      var teamDiv = document.createElement("div");
      var teamRankBoxDiv = document.createElement("div");
      var teamNameDiv = document.createElement("div");
      var teamPointsDiv = document.createElement("div");
      var teamRankDiv = document.createElement("div");
      teamNameDiv.innerText = team.team.name;
      teamPointsDiv.innerText = team.points;
      teamRankDiv.innerText = team.rank;
      teamDiv.classList.add("team-standing-row");
      teamRankBoxDiv.classList.add("team-rank-box");
      teamRankDiv.classList.add("team-rank");
      teamPointsDiv.classList.add("team-points");
      teamRankBoxDiv.append(teamRankDiv, teamNameDiv);
      teamDiv.append(teamRankBoxDiv, teamPointsDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpZWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9kaXN0L2ltYWdlcy9ibGFja2xvZ28ucG5nIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnJlbnRSb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kcmF3UGllLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZXNSZWZyZXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVzdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dldEZpeHR1cmVQbGF5ZXJzU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJQbGF5ZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJQbGF5ZXJTdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlclZvdGluZ01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlclZvdGluZ1N0YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhbmRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9lNGFhIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Um91bmQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjdXJyZW50UiIsImRhdGEiLCJyZXNwb25zZSIsInJlbmRlckdhbWVzIiwicmVuZGVyU3RhbmRpbmdzIiwibmF2YmFyTG9nbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRyYXdQaWUiLCJ2b3RlMSIsInZvdGUyIiwiZGltcyIsImhlaWdodCIsIndpZHRoIiwicmFkaXVzIiwiY2VudCIsIngiLCJ5Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiZ3JhcGgiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiYXJjUGF0aCIsImFyYyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsInVwZGF0ZSIsImRvbWFpbiIsInBhdGhzIiwic2VsZWN0QWxsIiwiZXhpdCIsInJlbW92ZSIsImVudGVyIiwibmFtZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsImFyY1R3ZWVuRW50ZXIiLCJpIiwiaW50ZXJwb2xhdGUiLCJlbmRBbmdsZSIsInN0YXJ0QW5nbGUiLCJ0IiwicmVuZGVyR2FtZUJ5SWQiLCJmaXh0dXJlSWQiLCJzY29yZTEiLCJzY29yZTIiLCJsZWFndWVJbmZvRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhbGxHYW1lc0NvbnRlbnREaXYiLCJjbGVhckludGVydmFsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyIiwib25lR2FtZUNvbnRlbnREaXYiLCJmaWVsZERpdiIsImNyZWF0ZUVsZW1lbnQiLCJzcXVhZHNEaXYiLCJhZGQiLCJmaWVsZCIsImdrMURpdiIsImRlZjFEaXYiLCJtaWQxRGl2IiwiZndkMURpdiIsImdrMkRpdiIsImRlZjJEaXYiLCJtaWQyRGl2IiwiZndkMkRpdiIsInRlYW0xRGl2IiwidGVhbSIsImxvZ28iLCJ0ZWFtMkRpdiIsImZvckVhY2giLCJjb21tYW5kIiwiY2lkeCIsInN0YXJ0WEkiLCJwbHIiLCJwaWR4IiwicGxheWVyRGl2IiwicGxheWVyIiwibnVtYmVyIiwicG9zIiwiZGl2Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInJlbmRlckdhbWVTdGF0IiwiZ2V0Rml4dHVyZVBsYXllcnNTdGF0IiwiRml4dHVyZVBsYXllcnNTdGF0IiwicmVuZGVyUGxheWVyTW9kYWwiLCJyb3VuZCIsImFsbEdhbWVzRGl2IiwiYWxsR2FtZXNCb3hEaXYiLCJmaXh0dXJlc0FyciIsInNlY3Rpb25OYW1lRGl2IiwibGl2ZUdhbWVzU3RhdHVzIiwibmV4dFNlYXNvbiIsImxlYWd1ZSIsInNlYXNvbiIsImNvdW50cnkiLCJmbGFnIiwiZXBsTG9nbyIsImN1cnJlbnRSb3VuZFN0cmluZyIsInNwbGl0IiwicG9wIiwicHJldlJvdW5kIiwicGFyc2VJbnQiLCJuZXh0Um91bmQiLCJwUm91bmQiLCJuUm91bmQiLCJwcmV2aW91c1JvdW5kIiwiZm9sbG93aW5nUm91bmQiLCJnYW1lTGl2ZVN0YXR1cyIsImdhbWVOb3RMaXZlU3RhdHVzIiwiZml4IiwiaWR4IiwidGVhbTEiLCJ0ZWFtcyIsImhvbWUiLCJsb2dvMSIsInRlYW0yIiwiYXdheSIsImxvZ28yIiwiZ29hbHMiLCJnYW1lU3RhdHVzIiwiZml4dHVyZSIsInN0YXR1cyIsInNob3J0IiwiZ2FtZUlkIiwiaW5jbHVkZXMiLCJmaXh0dXJlUm93RGl2IiwiZ2FtZVN0YXR1c1Jvd0RpdiIsInNjb3JlQm94RGl2IiwidGVtcCIsInZvdGVCdG5EaXNwbGF5IiwibG9uZyIsInJlbmRlclZvdGluZ01vZGFsIiwiYnV0dG9uTGl2ZVVwZGF0ZXMiLCJuZXdDb3VudGVyIiwic2V0SXRlbSIsImJ0bkxpdmVVcGRhdGVzIiwiYnRuTm9MaXZlVXBkYXRlcyIsImdhbWVzUmVmcmVzaCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb3VudGVyIiwicmVtb3ZlSXRlbSIsImRpc2FibGVkIiwic3RhbmRpbmdzRGl2IiwiZ2FtZVN0YXREaXYiLCJ0ZWFtc1N0YXQiLCJwb3NzZXNzaW9uIiwic2hvdHNPbiIsInNob3RzT2ZmIiwiZm91bHMiLCJ5YyIsInRlYW1TdGF0IiwiaWR4MSIsInN0YXRpc3RpY3MiLCJzdGF0IiwidHlwZSIsInB1c2giLCJyZW5kZXJTdGF0cyIsInN0YXQxIiwidG90YWwiLCJpZE5hbWUiLCJlbGVtIiwic3R5bGUiLCJyYXRpbyIsIm1vZGFsRGl2IiwibW9kYWwiLCJwbGF5ZXJzVG9DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRpc3BsYXkiLCJwbGF5ZXJJZCIsImdldEF0dHJpYnV0ZSIsInRlYW1JZCIsInBsYXllcklkbSIsInRlYW1JZG0iLCJyZW5kZXJQbGF5ZXJTdGF0Iiwib25jbGljayIsImV2ZW50IiwidGFyZ2V0IiwiZml4dHVyZUlkbSIsIkZpeHR1cmVQbGF5ZXJzU3RhdG0iLCJ0ZWFtSW5mbyIsInBsYXllckluZm8iLCJwbGF5ZXJTdGF0Iiwic3F1YWQiLCJwbGF5ZXJzIiwibW9kYWxCb3giLCJyaWdodEJveERhdGEiLCJnYW1lcyIsInBvc2l0aW9uIiwic2F2ZXMiLCJjb25jZWRlZCIsImR1ZWxzIiwid29uIiwicGFzc2VzIiwiYWNjdXJhY3kiLCJzaG90cyIsInBob3RvIiwicmF0aW5nIiwibWludXRlcyIsInQxcmVmIiwidDJyZWYiLCJtb2RhbFYiLCJzcGFuViIsInZvdGluZ0J0bnMiLCJidG4iLCJuYW1lMSIsIm5hbWUyIiwiZ0lkIiwicmVuZGVyVm90aW5nU3RhdCIsIm1vZGFsVkJveCIsInZvdGVEYXRhMSIsInZvdGVEYXRhMiIsImUiLCJnZXREYXRhIiwiYWRkRGF0YSIsImRiIiwiY29sbGVjdGlvbiIsInJlbmRlclZvdGVzIiwidm90aW5nQm94RGl2IiwidG9GaXhlZCIsInVwZGF0ZURhdGEiLCJrZXlJZCIsImRvYyIsInZhbCIsIm51bSIsInVwZGF0ZWQiLCJkb2NzIiwiT2JqZWN0Iiwia2V5cyIsInZvdGVzIiwidm90ZSIsIm5ld1ZvdGUxIiwibmV3RGF0YSIsIm5ld1ZvdGUyIiwic3RhbmRpbmdCb3hEaXYiLCJ0ZWFtc0FyciIsInN0YW5kaW5ncyIsInRlYW1EaXYiLCJ0ZWFtUmFua0JveERpdiIsInRlYW1OYW1lRGl2IiwidGVhbVBvaW50c0RpdiIsInRlYW1SYW5rRGl2IiwicG9pbnRzIiwicmFuayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsR0FBRyxTQUFTO0FBQzVDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNwWEE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFC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Q0FOLG9CQUFjLENBQUN2TyxNQUFmLENBQXNCME8sT0FBdEI7QUFFSCxLQXJCRDtBQXNCSCxHQXpCRCxFQXlCRzNQLEtBekJILENBeUJTLFVBQUFDLEdBQUcsRUFBRTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEdBM0JEO0FBNEJILENBbENEOztBQW9DZUwsOEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZmllbGQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYmxhY2tsb2dvLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcblxudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcblxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcblxudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG5cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTsgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcblxuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0OyAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG5cbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcblxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuXG5cbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcblxuXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG5cblxuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSB0aW1lb3V0XG5cblxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcblxuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuXG5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID8gY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9IC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG5cblxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcblxuXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfSAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cblxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfSAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9IC8vIFNlbmQgdGhlIHJlcXVlc3RcblxuXG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTsgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcblxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7IC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG4gIHJldHVybiBpbnN0YW5jZTtcbn0gLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5cblxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpOyAvLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcblxuYXhpb3MuQXhpb3MgPSBBeGlvczsgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTsgLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5cblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7IC8vIEV4cG9zZSBhbGwvc3ByZWFkXG5cbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBheGlvczsgLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvczsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuXG5cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG5cbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5cblxuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuXG5cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTsgLy8gU2V0IGNvbmZpZy5tZXRob2RcblxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH0gLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuXG5cbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07IC8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xuXG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG5cbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcblxudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cblxuXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuXG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307IC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcblxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoY29uZmlnLmRhdGEsIGNvbmZpZy5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVxdWVzdCk7IC8vIEZsYXR0ZW4gaGVhZGVyc1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LCBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSwgY29uZmlnLmhlYWRlcnMpO1xuICB1dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLCBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgfSk7XG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7IC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShyZXNwb25zZS5kYXRhLCByZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEocmVhc29uLnJlc3BvbnNlLmRhdGEsIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcblxuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZXJyb3I7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gWydiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsICd0aW1lb3V0JywgJ3RpbWVvdXRNZXNzYWdlJywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnLCAncmVzcG9uc2VFbmNvZGluZyddO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cykuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKS5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZzEpLmNvbmNhdChPYmplY3Qua2V5cyhjb25maWcyKSkuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG4gIHJldHVybiBjb25maWc7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuXG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLmNvbmZpZywgbnVsbCwgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuXG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fCB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8IHV0aWxzLmlzRmlsZShkYXRhKSB8fCB1dGlscy5pc0Jsb2IoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogSWdub3JlICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkucmVwbGFjZSgvJTNBL2dpLCAnOicpLnJlcGxhY2UoLyUyNC9nLCAnJCcpLnJlcGxhY2UoLyUyQy9naSwgJywnKS5yZXBsYWNlKC8lMjAvZywgJysnKS5yZXBsYWNlKC8lNUIvZ2ksICdbJykucmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkwgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJykgOiBiYXNlVVJMO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG5mdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiB7XG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgfSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgfVxuICB9O1xufSgpIDogLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4ge1xuICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgfTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHZhciBvcmlnaW5VUkw7XG4gIC8qKlxuICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICovXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgIGlmIChtc2llKSB7XG4gICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgIH1cblxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpOyAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG5cbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICBwYXRobmFtZTogdXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgfTtcbiAgfVxuXG4gIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAvKipcbiAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgIHZhciBwYXJzZWQgPSB1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgIHJldHVybiBwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJiBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3Q7XG4gIH07XG59KCkgOiAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTsgLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcblxuXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJywgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLCAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXTtcbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykge1xuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYXJzZWQ7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgdmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfSAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcblxuXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5cblxuZnVuY3Rpb24gbWVyZ2UoKVxuLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovXG57XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cblxuXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuXG5cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTsgLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gIH1cblxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgfVxufSkoKTtcblxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICB9IC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cblxuICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfSAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cblxuICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgfVxuICB9XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkcmFpbmluZyA9IGZhbHNlO1xuXG4gIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gIH1cblxuICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgZHJhaW5RdWV1ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gIGlmIChkcmFpbmluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbikge1xuICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG5cbiAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICB9XG5cbiAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG5cbiAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICB9XG59OyAvLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5cblxuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gIHRoaXMuZnVuID0gZnVuO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xuXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIFtdO1xufTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnLyc7XG59O1xuXG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDA7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjdXJyZW50Um91bmQgZnJvbSBcIi4vc2NyaXB0cy9jdXJyZW50Um91bmRcIjtcbmltcG9ydCByZW5kZXJTdGFuZGluZ3MgZnJvbSBcIi4vc2NyaXB0cy9zdGFuZGluZ3NcIjtcblxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBsZXQgcm91bmQgPSAnUmVndWxhciBTZWFzb24gLSAxMicgO1xuXG4gICAgLy8gR0VUIENVUlJFTlQgUk9VTkQgQU5EIFJFTkRFUiBHQU1FUyBBTkQgU1RBTkRJTkdTXG4gICAgY3VycmVudFJvdW5kKCk7XG4gICAgXG4gICAgLy8gcmVuZGVyR2FtZXMocm91bmQpO1xuICAgIC8vIHJlbmRlckdhbWVTdGF0KCk7XG4gICAgXG5cbiAgICAvLyBjb25zdCBuYXZiYXJMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXItbG9nb1wiKTtcbiAgICAvLyBuYXZiYXJMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMocm91bmQpKTtcbn0pO1xuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcmVuZGVyR2FtZXMgZnJvbSBcIi4vZ2FtZXNcIjtcbmltcG9ydCByZW5kZXJTdGFuZGluZ3MgZnJvbSBcIi4vc3RhbmRpbmdzXCI7XG5cbmNvbnN0IGN1cnJlbnRSb3VuZCA9ICgpID0+IHtcbiAgICBcbiAgICBheGlvcy5nZXQoYGN1cnJlbnRyb3VuZGApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UiA9IHJlcy5kYXRhLnJlc3BvbnNlWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXNwb25zZVswXSk7XG5cbiAgICAgICAgcmVuZGVyR2FtZXMoY3VycmVudFIpO1xuICAgICAgICByZW5kZXJTdGFuZGluZ3MoKTtcbiAgICAgICAgLy8gXG4gICAgICAgIGNvbnN0IG5hdmJhckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1sb2dvXCIpO1xuICAgICAgICBuYXZiYXJMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMoY3VycmVudFIpKTtcblxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRSb3VuZDsiLCJjb25zdCBkcmF3UGllID0gKHZvdGUxLCB2b3RlMikgPT4ge1xuXG4gICAgY29uc3QgZGltcyA9IHtoZWlnaHQ6MzAwLCB3aWR0aDozMDAsIHJhZGl1czoxNTB9O1xuICAgIGNvbnN0IGNlbnQgPSB7eDogKGRpbXMud2lkdGggLyAyICsgNSksIHk6IChkaW1zLmhlaWdodCAgLzIgKyA1KX07XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNwaWUtYm94JylcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgZGltcy53aWR0aCArIDUwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZGltcy5oZWlnaHQgKyA1MClcblxuICAgIGNvbnN0IGdyYXBoID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWApXG5cbiAgICBjb25zdCBwaWUgPSBkMy5waWUoKVxuICAgICAgICAuc29ydChudWxsKVxuICAgICAgICAudmFsdWUoZCA9PiBkLnZhbHVlKTtcblxuICAgIGNvbnN0IGFyY1BhdGggPSBkMy5hcmMoKVxuICAgICAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cy8xLjUpXG4gICAgXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoWycjZjViN2NkJywgJyMwRDBEMEUnXSlcblxuICAgIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29sb3IuZG9tYWluKFsndGVhbTEnLCAndGVhbTInXSlcbiAgICAgICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAgICAgLmRhdGEocGllKGRhdGEpKTtcblxuICAgICAgICBwYXRocy5leGl0KCkucmVtb3ZlKCk7XG4gICAgICAgIHBhdGhzLmF0dHIoJ2QnLCBhcmNQYXRoKTtcblxuICAgICAgICBwYXRocy5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJjJylcbiAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJyNmZmYnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZD0+Y29sb3IoZC5kYXRhLmRhdGEubmFtZSkpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxNTAwKSBcbiAgICAgICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGFyY1R3ZWVuRW50ZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gcGllKFtcbiAgICAgICAgeyBuYW1lOiAndGVhbTInLCB2YWx1ZTogdm90ZTIgfSxcbiAgICAgICAgeyBuYW1lOiAndGVhbTEnLCB2YWx1ZTogdm90ZTEgfVxuICAgIF0pXG5cbiAgICBcbiAgICBjb25zdCBhcmNUd2VlbkVudGVyID0gKGQpID0+IHtcbiAgICAgICAgbGV0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLmVuZEFuZ2xlLCBkLnN0YXJ0QW5nbGUpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odCl7XG4gICAgICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVwZGF0ZShkYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd1BpZTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZmllbGQgZnJvbSAnLi4vLi4vYXNzZXRzL2ZpZWxkLnBuZyc7XG5pbXBvcnQgcmVuZGVyR2FtZVN0YXQgZnJvbSAnLi9nYW1lc3RhdCc7XG5pbXBvcnQgZ2V0Rml4dHVyZVBsYXllcnNTdGF0IGZyb20gXCIuL2dldEZpeHR1cmVQbGF5ZXJzU3RhdFwiO1xuaW1wb3J0IHJlbmRlclBsYXllck1vZGFsIGZyb20gJy4vcmVuZGVyUGxheWVyTW9kYWwnO1xuXG5jb25zdCByZW5kZXJHYW1lQnlJZCA9IChmaXh0dXJlSWQsIHNjb3JlMSwgc2NvcmUyKSA9PiB7XG5cbiAgICBjb25zdCBsZWFndWVJbmZvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWFndWUtaW5mb1wiKTtcbiAgICBsZWFndWVJbmZvRGl2LmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcbiAgICBsZWFndWVJbmZvRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQnKTtcblxuICAgIGNvbnN0IGFsbEdhbWVzQ29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdhbWVzXCIpO1xuICAgIGFsbEdhbWVzQ29udGVudERpdi5pbm5lckhUTUwgPSBcIjxkaXYgaWQ9J29uZS1nYW1lJz48L2Rpdj5cIjtcblxuICAgIGF4aW9zLmdldChgLi9nYW1lP2ZpeHR1cmVJZD0ke2ZpeHR1cmVJZH1gKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAvL2NsZWFyIGxpdmUgdXBkYXRlcyBpbnRlcnZhbCBhbmQgbG9jYWwgc3RvcmFnZVxuICAgICAgICBjbGVhckludGVydmFsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3F1YWRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdmaWVsZC1ib3gnKTtcbiAgICAgICAgc3F1YWRzRGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFkLWJveCcpO1xuICAgICAgICBcbiAgICAgICAgc3F1YWRzRGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGlkPSd0ZWFtLTEtYm94Jz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3RlYW0tMi1ib3gnPjwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKHNxdWFkc0Rpdik7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaW1nXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCIke2ZpZWxkfVwiLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2RlZi0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMScgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZndkLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2Z3ZC0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMicgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZGVmLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKGZpZWxkRGl2KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdrMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2stMVwiKTtcbiAgICAgICAgY29uc3QgZGVmMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmLTFcIik7XG4gICAgICAgIGNvbnN0IG1pZDFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC0xXCIpO1xuICAgICAgICBjb25zdCBmd2QxRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmd2QtMVwiKTtcbiAgICAgICAgY29uc3QgZ2syRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnay0yXCIpO1xuICAgICAgICBjb25zdCBkZWYyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWYtMlwiKTtcbiAgICAgICAgY29uc3QgbWlkMkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkLTJcIik7XG4gICAgICAgIGNvbnN0IGZ3ZDJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ3ZC0yXCIpO1xuXG4gICAgICAgIC8vYWRkaW5nIHBsYXllcnMgaW5zaWRlIHNxdWFkcyBzZWN0aW9uXG4gICAgICAgIGNvbnN0IHRlYW0xRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtLTEtYm94XCIpO1xuICAgICAgICAgICAgdGVhbTFEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbS0xLWhlYWRlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5uYW1lfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdsb2dvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgY29uc3QgdGVhbTJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW0tMi1ib3hcIik7XG4gICAgICAgICAgICB0ZWFtMkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLTItaGVhZGVyLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICAvL3BsYWNlIHBsYXllcnMgb24gYSBmaWVsZCBhY2NvcmRpbmcgdG8gdGhlaXIgYWN0dWFsIHBvc2l0aW9uIGFuZCB0ZWFtIGZvcm1hdGlvblxuICAgICAgICByZXMuZGF0YS5yZXNwb25zZS5mb3JFYWNoKChjb21tYW5kLCBjaWR4KSA9PiB7XG4gICAgICAgICAgICBjb21tYW5kLnN0YXJ0WEkuZm9yRWFjaCgocGxyLCBwaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNpZHggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKCd0ZWFtLTEnKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbnVtYmVyJz4ke3Bsci5wbGF5ZXIubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtwbHIucGxheWVyLm5hbWV9PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncG9zJz4gICgke3Bsci5wbGF5ZXIucG9zfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICBpZihwbHIucGxheWVyLnBvcyA9PT0gJ0cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dD0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBnazFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdEJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDEnLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdNJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwxJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWQxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZndkMURpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZWFtMURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZCgndGVhbS0yJylcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J251bWJlcic+JHtwbHIucGxheWVyLm51bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cGxyLnBsYXllci5uYW1lfTwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvcyc+ICAoJHtwbHIucGxheWVyLnBvc30pPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMicsJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBnazJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdEJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwyJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWYyRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMicsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDInLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ3ZDJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhbTJEaXYuYXBwZW5kQ2hpbGQocGxheWVyRGl2LCBmaXh0dXJlSWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZW5kZXJHYW1lU3RhdChmaXh0dXJlSWQsIHNjb3JlMSwgc2NvcmUyKTtcbiAgICAgICAgXG4gICAgICAgIGdldEZpeHR1cmVQbGF5ZXJzU3RhdChmaXh0dXJlSWQpLnRoZW4oKEZpeHR1cmVQbGF5ZXJzU3RhdCkgPT4ge1xuICAgICAgICAgICAgLy9tb2RhbCBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICByZW5kZXJQbGF5ZXJNb2RhbChzcXVhZHNEaXYsIEZpeHR1cmVQbGF5ZXJzU3RhdCwgZml4dHVyZUlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZUJ5SWQ7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcmVuZGVyR2FtZUJ5SWQgZnJvbSAnLi9nYW1lJztcbmltcG9ydCByZW5kZXJWb3RpbmdNb2RhbCBmcm9tICcuL3JlbmRlclZvdGluZ01vZGFsJztcbmltcG9ydCBnYW1lc1JlZnJlc2ggZnJvbSAnLi9nYW1lc1JlZnJlc2gnO1xuaW1wb3J0IGVwbExvZ28gZnJvbSAnLi4vLi4vZGlzdC9pbWFnZXMvYmxhY2tsb2dvLnBuZyc7XG5cbmNvbnN0IHJlbmRlckdhbWVzID0gKHJvdW5kKSA9PiB7XG4gICAgY29uc3QgYWxsR2FtZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nYW1lc1wiKVxuICAgIGNvbnN0IGFsbEdhbWVzQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxHYW1lc0Rpdi5pbm5lckhUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG4gICAgY29uc3QgbGVhZ3VlSW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZ3VlLWluZm9cIik7XG4gICAgbGVhZ3VlSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgICBheGlvcy5nZXQoYC4vZ2FtZXM/cm91bmQ9JHtyb3VuZH1gKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEucmVzcG9uc2UpO1xuICAgICAgICBjb25zdCBmaXh0dXJlc0FyciA9IHJlcy5kYXRhLnJlc3BvbnNlO1xuICAgICAgICBjb25zdCBzZWN0aW9uTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlY3Rpb25OYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLW5hbWVcIik7XG4gICAgICAgIFxuICAgICAgICBsZXQgbGl2ZUdhbWVzU3RhdHVzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbmV4dFNlYXNvbiA9IHJlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5zZWFzb24gKyAxO1xuICAgICAgICBsZWFndWVJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0nbGVhZ3VlLWJveCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3VudHJ5LWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuY291bnRyeX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGFnJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5mbGFnfVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nby1ib3gnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VwbExvZ299XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdsZWFndWUtbmFtZSc+XG4gICAgICAgICAgICAke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzZWFzb24tYm94Jz5cbiAgICAgICAgICAgICAgICAke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5zZWFzb259LSR7bmV4dFNlYXNvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZXBsLWxpbmsnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnByZW1pZXJsZWFndWUuY29tLycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyB0YXJnZXQ9XCJfYmxhbmtcIj5WaXNpdCBFUEw8L2E+ICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRSb3VuZFN0cmluZyA9IHJlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5yb3VuZDtcbiAgICAgICAgbGV0IGN1cnJlbnRSb3VuZCA9IGAke2N1cnJlbnRSb3VuZFN0cmluZy5zcGxpdCgnICcpLnBvcCgpfSBgO1xuICAgICAgICBsZXQgcHJldlJvdW5kID0gcGFyc2VJbnQoY3VycmVudFJvdW5kKSAtIDE7XG4gICAgICAgIGxldCBuZXh0Um91bmQgPSBwYXJzZUludChjdXJyZW50Um91bmQpICsgMTtcblxuICAgICAgICBzZWN0aW9uTmFtZURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3VuZFByZXYnPlxuICAgICAgICAgICAgICAgIDw8IEdPIFRPIFJPVU5EICR7cHJldlJvdW5kfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncm91bmRDdXJyJz5cbiAgICAgICAgICAgICAgICBBTEwgR0FNRVMgLSBST1VORCAke2N1cnJlbnRSb3VuZH0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JvdW5kTmV4dCc+XG4gICAgICAgICAgICAgICAgR08gVE8gUk9VTkQgJHtuZXh0Um91bmR9ID4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgYWxsR2FtZXNEaXYuYXBwZW5kKHNlY3Rpb25OYW1lRGl2KTtcblxuICAgICAgICBjb25zdCBwUm91bmQgPSBgUmVndWxhciBTZWFzb24gLSAke3ByZXZSb3VuZH1gO1xuICAgICAgICBjb25zdCBuUm91bmQgPSBgUmVndWxhciBTZWFzb24gLSAke25leHRSb3VuZH1gO1xuICAgICAgICBjb25zdCBwcmV2aW91c1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3VuZFByZXZcIik7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3VuZE5leHRcIik7XG4gICAgICAgIFxuICAgICAgICBwcmV2aW91c1JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMocFJvdW5kKSk7XG4gICAgICAgIGZvbGxvd2luZ1JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMoblJvdW5kKSk7ICAgIFxuICAgICAgIFxuICAgICAgICBhbGxHYW1lc0JveERpdi5jbGFzc0xpc3QuYWRkKFwiYWxsLWdhbWVzLWJveFwiKTtcbiAgICAgICAgYWxsR2FtZXNEaXYuYXBwZW5kKGFsbEdhbWVzQm94RGl2KTtcbiAgICAgICAgY29uc3QgZ2FtZUxpdmVTdGF0dXMgPSBbJzFIJywnSFQnLCcySCcsJ0VUJywnUCcsJ0JUJ107XG4gICAgICAgIGNvbnN0IGdhbWVOb3RMaXZlU3RhdHVzID0gWydOUycsICdGVCddO1xuICAgICAgICBcbiAgICAgICAgZml4dHVyZXNBcnIuZm9yRWFjaCgoZml4LCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlYW0xID0gZml4LnRlYW1zLmhvbWUubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28xID0gZml4LnRlYW1zLmhvbWUubG9nbztcbiAgICAgICAgICAgIGNvbnN0IHRlYW0yID0gZml4LnRlYW1zLmF3YXkubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28yID0gZml4LnRlYW1zLmF3YXkubG9nbztcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlMSA9IGZpeC5nb2Fscy5ob21lO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUyID0gZml4LmdvYWxzLmF3YXk7XG4gICAgICAgICAgICBjb25zdCBnYW1lU3RhdHVzID0gZml4LmZpeHR1cmUuc3RhdHVzLnNob3J0O1xuICAgICAgICAgICAgY29uc3QgZ2FtZUlkID0gZml4LmZpeHR1cmUuaWQ7XG5cbiAgICAgICAgICAgIC8vIHRvIGNoZWNrIGlmIGF0IGxlYXQgb25lIGdhbWUgaXMgbGl2ZSB0byBlbmFibGUgdXBkYXRlc1xuICAgICAgICAgICAgaWYgKGdhbWVMaXZlU3RhdHVzLmluY2x1ZGVzKGdhbWVTdGF0dXMpKSBsaXZlR2FtZXNTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZml4dHVyZVJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXR1c1Jvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdmaXh0dXJlLWJveCcpO1xuICAgICAgICAgICAgZ2FtZVN0YXR1c1Jvd0Rpdi5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXR1cy1yb3cnKTtcbiAgICAgICAgICAgIHNjb3JlQm94RGl2LmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWJveCcpO1xuXG4gICAgICAgICAgICBmaXh0dXJlUm93RGl2LnNldEF0dHJpYnV0ZSgnZ2FtZUlkJywgZ2FtZUlkICk7XG5cbiAgICAgICAgICAgIC8vIGlmIGdhbWUgaXMgbGl2ZSB0aGVuIHNob3cgJ3Njb3JlJywgb3RoZXJ3aXNlIHNob3cgJ3ZzJ1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IChnYW1lTGl2ZVN0YXR1cy5pbmNsdWRlcyhnYW1lU3RhdHVzKSB8fCAoZ2FtZVN0YXR1cyA9PT0gJ0ZUJykpID8gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzY29yZSc+JHtzY29yZTF9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUnPiR7c2NvcmUyfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgOiAnPGRpdiBjbGFzcz1cInZzXCI+dnM8L2Rpdj4nO1xuXG4gICAgICAgICAgICAvLyBpZiBnYW1lIGlzIG5vdCBzdGFydGVkLCBkaXNwbGF5IFZPVEUgYnV0dG9uIFxuICAgICAgICAgICAgY29uc3Qgdm90ZUJ0bkRpc3BsYXkgPSAoZ2FtZVN0YXR1cyA9PT0gJ05TJyk/IFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9J3ZvdGluZy1idG4tYm94Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ndm90aW5nLWJ0bicgXG4gICAgICAgICAgICAgICAgICAgIHRlYW0xLW5hbWU9JyR7dGVhbTF9J1xuICAgICAgICAgICAgICAgICAgICB0ZWFtMi1uYW1lPScke3RlYW0yfSdcbiAgICAgICAgICAgICAgICAgICAgdGVhbTEtbG9nbz0nJHtsb2dvMX0nXG4gICAgICAgICAgICAgICAgICAgIHRlYW0yLWxvZ289JyR7bG9nbzJ9J1xuICAgICAgICAgICAgICAgICAgICBnYW1lSWQ9JHtnYW1lSWR9PlxuICAgICAgICAgICAgICAgICAgICBWT1RFXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gIDogJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZpeHR1cmVSb3dEaXYuaW5uZXJIVE1MID0gIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dhbWUtc3RhdHVzLXNlY3Rpb24nPiR7Zml4LmZpeHR1cmUuc3RhdHVzLmxvbmd9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtMS1ib3gnID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGVhbTF9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48aW1nIHNyYz1cIiR7bG9nbzF9XCIvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RlbXB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtMi1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PGltZyBzcmM9XCIke2xvZ28yfVwiLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGVhbTJ9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICR7dm90ZUJ0bkRpc3BsYXl9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZ2FtZVN0YXR1cyAhPT0gJ05TJykge1xuICAgICAgICAgICAgICAgIGZpeHR1cmVSb3dEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJHYW1lQnlJZChnYW1lSWQsIHNjb3JlMSwgc2NvcmUyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFsbEdhbWVzQm94RGl2LmFwcGVuZENoaWxkKGZpeHR1cmVSb3dEaXYpO1xuICAgICAgICAgICAgcmVuZGVyVm90aW5nTW9kYWwoYWxsR2FtZXNCb3hEaXYsIHRlYW0xLCB0ZWFtMik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy9saXZlIHVwZGF0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpdmVVcGRhdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuY2xhc3NMaXN0LmFkZCgnbGl2ZS11cGRhdGVzLWJveCcpO1xuICAgICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChidXR0b25MaXZlVXBkYXRlcyk7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0Q291bnRlcicpICE9PSBudWxsKXtcbiAgICAgICAgICAgIGxldCBuZXdDb3VudGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJyk7XG4gICAgICAgICAgICBuZXdDb3VudGVyICsrO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJywgbmV3Q291bnRlcik7XG4gICAgICAgICAgICBpZiAobmV3Q291bnRlciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKGxpdmVHYW1lc1N0YXR1cyl7XG4gICAgICAgICAgICBidXR0b25MaXZlVXBkYXRlcy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPSdsaXZlLXVwZGF0ZXMnPkFDVElWQVRFIExJVkUgVVBEQVRFUzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nbm8tbGl2ZS11cGRhdGVzJz5TVE9QIExJVkUgVVBEQVRFUzwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnN0IGJ0bkxpdmVVcGRhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZlLXVwZGF0ZXNcIik7XG4gICAgICAgICAgICBjb25zdCBidG5Ob0xpdmVVcGRhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1saXZlLXVwZGF0ZXNcIik7XG5cbiAgICAgICAgICAgIGdhbWVzUmVmcmVzaChidG5MaXZlVXBkYXRlcywgYnRuTm9MaXZlVXBkYXRlcywgcm91bmQpXG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuaW5uZXJIVE1MID0gYFxuICAgICAgICAvLyAgICAgPGJ1dHRvbiBjbGFzcz0nbm8tbGl2ZS11cGRhdGVzJyBkaXNhYmxlZD5cbiAgICAgICAgLy8gICAgICAgICBObyBsaXZlIGdhbWVzIHJpZ2h0IG5vd1xuICAgICAgICAvLyAgICAgPC9idXR0b24+YDtcbiAgICAgICAgLy8gICAgIGFsbEdhbWVzQm94RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkxpdmVVcGRhdGVzKTtcblxuICAgICAgICAvLyAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICAvLyB9XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lczsiLCJpbXBvcnQgcmVuZGVyR2FtZXMgZnJvbSAnLi9nYW1lcyc7XG5cbi8vZ2FtZXNSZWZyZXNoLmpzXG5jb25zdCBnYW1lc1JlZnJlc2ggPSAoYnRuTGl2ZVVwZGF0ZXMsIGJ0bk5vTGl2ZVVwZGF0ZXMsIHJvdW5kKSA9PiB7XG5cbiAgICBsZXQgaW50ZXJ2YWw7XG4gICAgXG4gICAgYnRuTGl2ZVVwZGF0ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckdhbWVzKHJvdW5kKVxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHJlbmRlckdhbWVzKHJvdW5kKSwgMTAwMDApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxTdEludGVydmFsJywgaW50ZXJ2YWwpO1xuICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJywgY291bnRlcik7XG4gICAgfSk7XG4gICAgXG4gICAgYnRuTm9MaXZlVXBkYXRlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9jYWxTdEludGVydmFsJyk7XG5cbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnRuTm9MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSk7XG5cblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykgIT09IG51bGwpe1xuICAgICAgICBidG5MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIGJ0bk5vTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnRuTm9MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lc1JlZnJlc2g7XG5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVuZGVyR2FtZVN0YXQgPSAoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdISSBGUk9NIEdBTUUgU1RBVCcpO1xuICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICBjb25zdCBzdGFuZGluZ3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YW5kaW5nc1wiKVxuICAgIC8vIGNvbnN0IHRlc3RCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRlc3RCb3hEaXYuY2xhc3NMaXN0LmFkZChcInRlc3QtYm94XCIpO1xuICAgIGF4aW9zLmdldChgL2dhbWVzdGF0Lz9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZVN0YXREaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGF0LWJveCcpO1xuICAgICAgICBzdGFuZGluZ3NEaXYuYXBwZW5kKGdhbWVTdGF0RGl2KTtcbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKGdhbWVTdGF0RGl2KTtcbiAgICAgICAgY29uc3QgdGVhbXNTdGF0ID0gcmVzLmRhdGEucmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHBvc3Nlc3Npb24gPSBbXTtcbiAgICAgICAgY29uc3Qgc2hvdHNPbiA9IFtdO1xuICAgICAgICBjb25zdCBzaG90c09mZiA9IFtdO1xuICAgICAgICBjb25zdCBmb3VscyA9IFtdO1xuICAgICAgICBjb25zdCB5YyA9IFtdO1xuXG4gICAgICAgIHRlYW1zU3RhdC5mb3JFYWNoKCh0ZWFtU3RhdCwgaWR4MSkgPT4ge1xuICAgICAgICAgICAgdGVhbVN0YXQuc3RhdGlzdGljcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiQmFsbCBQb3NzZXNzaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2Vzc2lvbi5wdXNoKHN0YXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIlNob3RzIG9uIEdvYWxcIil7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT24ucHVzaChzdGF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQudHlwZSA9PT0gXCJTaG90cyBvZmYgR29hbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT2ZmLnB1c2goc3RhdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiRm91bHNcIikge1xuICAgICAgICAgICAgICAgICAgICBmb3Vscy5wdXNoKHN0YXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiWWVsbG93IENhcmRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWMucHVzaChzdGF0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvc3Nlc3Npb24pXG4gICAgICAgIGdhbWVTdGF0RGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lLXN0YXQtdGl0bGUnPkdBTUUgU1RBVElTVElDUzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlQm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Ib21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVswXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1OYW1lXCI+JHtyZXMuZGF0YS5yZXNwb25zZVswXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtU2NvcmUxJz4ke3Njb3JlMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Mb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTmFtZVwiPiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbVNjb3JlMic+JHtzY29yZTJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvc3NQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zc1wiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEJhbGwgUG9zc2Vzc2lvbiA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hvdHNPblByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09uXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb24gR29hbHMgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb2ZmIEdvYWxzIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEZvdWxzIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInljUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInljXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBZZWxsb3cgQ2FyZHMgPC9kaXY+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcblxuICAgICAgICBjb25zdCByZW5kZXJTdGF0cyA9IChzdGF0MSwgdG90YWwsIGlkTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE5hbWUpO1xuICAgICAgICAgICAgaWYgKGlkTmFtZSA9PT0gJ3Bvc3MnKXtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gc3RhdDE7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAoc3RhdDEgLyB0b3RhbCApICoxMDA7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHJhdGlvICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyU3RhdHMocG9zc2Vzc2lvblswXS52YWx1ZSwgMCwgXCJwb3NzXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09uWzBdLnZhbHVlLCBzaG90c09uWzBdLnZhbHVlICsgc2hvdHNPblsxXS52YWx1ZSwgXCJzaG90c09uXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09mZlswXS52YWx1ZSwgc2hvdHNPZmZbMF0udmFsdWUgKyBzaG90c09mZlsxXS52YWx1ZSwgXCJzaG90c09mZlwiKTtcbiAgICAgICAgcmVuZGVyU3RhdHMoZm91bHNbMF0udmFsdWUsIGZvdWxzWzBdLnZhbHVlICsgZm91bHNbMV0udmFsdWUsIFwiZm91bHNcIik7XG4gICAgICAgIHJlbmRlclN0YXRzKHljWzBdLnZhbHVlLCB5Y1swXS52YWx1ZSArIHljWzFdLnZhbHVlLCBcInljXCIpO1xuICAgICAgXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZVN0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgLi9maXh0dXJlX3BsYXllcnNfc3RhdD9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIaSBmcm9tIGZpeHR1cmUgcGxheWVycyBzdGF0IScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCcpO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2U7XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQ7IiwiaW1wb3J0IHJlbmRlclBsYXllclN0YXQgZnJvbSAnLi9yZW5kZXJQbGF5ZXJTdGF0JztcblxuY29uc3QgcmVuZGVyUGxheWVyTW9kYWwgPSAoc3F1YWRzRGl2LCBGaXh0dXJlUGxheWVyc1N0YXQsIGZpeHR1cmVJZCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBpZD1cIm15TW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nbW9kYWwtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgdGV4dCBnb2VzIGhlcmUgLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIHNxdWFkc0Rpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlNb2RhbFwiKTtcbiAgICBjb25zdCBwbGF5ZXJzVG9DbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGwtc2VsZWN0XCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG5cbiAgICBwbGF5ZXJzVG9DbGljay5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcklkID0gcGxheWVyLmdldEF0dHJpYnV0ZSgncGxheWVySWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1JZCA9IHBsYXllci5nZXRBdHRyaWJ1dGUoJ3RlYW1JZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJZG0gPSBwYXJzZUludChwbGF5ZXJJZCk7XG4gICAgICAgICAgICBjb25zdCB0ZWFtSWRtID0gcGFyc2VJbnQodGVhbUlkKTtcbiAgICAgICAgICAgIHJlbmRlclBsYXllclN0YXQocGxheWVySWRtLCB0ZWFtSWRtLCBmaXh0dXJlSWQsIEZpeHR1cmVQbGF5ZXJzU3RhdCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSlcblxuICAgIHNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyTW9kYWw7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHJlbmRlckdhbWVCeUlkIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IHJlbmRlclBsYXllclN0YXQgPSAocGxheWVySWRtLCB0ZWFtSWRtLCBmaXh0dXJlSWRtLCBGaXh0dXJlUGxheWVyc1N0YXRtKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hpIGZyb20gIFJFTkRFUiBQTEFZRVIgU1RBVCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcklkbSk7XG4gICAgLy8gY29uc29sZS5sb2codGVhbUlkbSk7XG4gICAgLy8gY29uc29sZS5sb2coZml4dHVyZUlkbSk7XG4gICAgLy8gY29uc29sZS5sb2coRml4dHVyZVBsYXllcnNTdGF0bSk7XG5cbiAgICBsZXQgdGVhbUluZm8gPSB7fTtcbiAgICBsZXQgcGxheWVySW5mbz17fTtcbiAgICBsZXQgcGxheWVyU3RhdCA9IHt9O1xuXG4gICAgRml4dHVyZVBsYXllcnNTdGF0bS5mb3JFYWNoKChzcXVhZCk9PntcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3F1YWQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZWFtSWRtKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3F1YWQudGVhbS5pZClcbiAgICAgICAgaWYgKHNxdWFkLnRlYW0uaWQgPT09IHRlYW1JZG0pIHtcbiAgICAgICAgICAgIHRlYW1JbmZvID0gc3F1YWQ7XG4gICAgICAgICAgICBzcXVhZC5wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaWR4KT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVyLmlkID09PSBwbGF5ZXJJZG0pe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvID0gcGxheWVyLnBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3RhdCA9IHBsYXllci5zdGF0aXN0aWNzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIC8vIGNvbnNvbGUubG9nKHRlYW1JbmZvKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJJbmZvKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJTdGF0KTtcblxuICAgIGNvbnN0IG1vZGFsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1ib3hcIik7XG4gICAgLy9jaGVjayBpZiBnb2Fsa2VlcGVyIHJlZG5lciBvbmUgdGhpbmcgLCBmb3IgZmllbGQgcGxheWVyLSBhbm90aGVyXG5cbiAgICBjb25zdCByaWdodEJveERhdGEgPSAocGxheWVyU3RhdC5nYW1lcy5wb3NpdGlvbiA9PT0gJ0cnKSA/XG4gICAgICAgIGA8ZGl2IGNsYXNzPSdzYXZlcy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TYXZlczogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLnNhdmVzID8gcGxheWVyU3RhdC5nb2Fscy5zYXZlcyA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb25jZWRlZC1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5Hb2FscyBjb25jZWRlZDogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLmNvbmNlZGVkID8gcGxheWVyU3RhdC5nb2Fscy5jb25jZWRlZCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgIFxuICAgIDogXG4gICAgICAgIGA8ZGl2IGNsYXNzPSdkdWVscy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5EdWVscyBXb24vVG90YWw6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5kdWVscy53b24gPyBwbGF5ZXJTdGF0LmR1ZWxzLndvbiA6IDB9IC8gJHtwbGF5ZXJTdGF0LmR1ZWxzLnRvdGFsID8gcGxheWVyU3RhdC5kdWVscy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXNzZXMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UGFzc2VzKEFjY3VyYWN5JSk6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5wYXNzZXMudG90YWwgPyBwbGF5ZXJTdGF0LnBhc3Nlcy50b3RhbCA6IDB9ICgke3BsYXllclN0YXQucGFzc2VzLmFjY3VyYWN5ID8gcGxheWVyU3RhdC5wYXNzZXMuYWNjdXJhY3kgOiAwfSUpPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaG90cy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TaG90czogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LnNob3RzLnRvdGFsID8gcGxheWVyU3RhdC5zaG90cy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz0nZ29hbHMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+R29hbHM6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nb2Fscy50b3RhbCA/IHBsYXllclN0YXQuZ29hbHMudG90YWwgOiAwfSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgXG4gICAgO1xuXG4gICAgbW9kYWxCb3guaW5uZXJIVE1MID1cbiAgICAgICAgYCAgIDxkaXYgY2xhc3M9J2xlZnQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbC1pbWctYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXllckluZm8ucGhvdG99XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsLW5hbWUnPiR7cGxheWVySW5mby5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLW51bWJlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+TnVtYmVyOiAke3BsYXllclN0YXQuZ2FtZXMubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLWJveCByb3cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UG9zaXRpb246IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdhbWVzLnBvc2l0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JhdGluZy1ib3ggcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlJhdGluZzogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZ2FtZXMucmF0aW5nID8gcGxheWVyU3RhdC5nYW1lcy5yYXRpbmcgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21pbnV0ZXMtYm94IHJvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5NaW51dGVzOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nYW1lcy5taW51dGVzID8gcGxheWVyU3RhdC5nYW1lcy5taW51dGVzIDogMH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICR7cmlnaHRCb3hEYXRhfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICBcbiAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyU3RhdDsiLCJpbXBvcnQgcmVuZGVyVm90aW5nU3RhdCBmcm9tICcuL3JlbmRlclZvdGluZ1N0YXQnO1xuXG5jb25zdCByZW5kZXJWb3RpbmdNb2RhbCA9IChhbGxHYW1lc0JveERpdiwgdDFyZWYsIHQycmVmKSA9PiB7XG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbERpdi5pbm5lckhUTUwgPVxuICAgICAgICBgXG4gICAgICAgIDxkaXYgaWQ9XCJteVZvdGluZ01vZGFsXCIgY2xhc3M9XCJtb2RhbC12XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS12XCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtb2RhbC12LWJveCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICBjb25zdCBtb2RhbFYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Vm90aW5nTW9kYWxcIik7XG4gICAgY29uc3Qgc3BhblYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtdlwiKVswXTtcbiAgICBjb25zdCB2b3RpbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52b3RpbmctYnRuXCIpO1xuICAgIFxuICAgIHZvdGluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsVi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0hJIEZST00gVk9USU5HIE1PREFMJylcbiAgICAgICAgICAgIGNvbnN0IG5hbWUxID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgbmFtZTIgPSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMi1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBsb2dvMSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ3RlYW0xLWxvZ28nKTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28yID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTItbG9nbycpO1xuICAgICAgICAgICAgY29uc3QgZ0lkID0gYnRuLmdldEF0dHJpYnV0ZSgnZ2FtZUlkJyk7XG5cbiAgICAgICAgICAgIGlmICh0MXJlZiA9PT0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbmFtZScpKXtcbiAgICAgICAgICAgICAgICByZW5kZXJWb3RpbmdTdGF0KG5hbWUxLCBuYW1lMiwgbG9nbzEsIGxvZ28yLCBnSWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICBzcGFuVi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBtb2RhbFYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWxWKSB7XG4gICAgICAgICAgICBtb2RhbFYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJWb3RpbmdNb2RhbDsiLCJpbXBvcnQgZHJhd1BpZSBmcm9tICcuL2RyYXdQaWUnO1xuXG5jb25zdCByZW5kZXJWb3RpbmdTdGF0ID0gKG5hbWUxLCBuYW1lMiwgbG9nbzEsIGxvZ28yLCBnYW1lSWQpID0+IHtcblxuICAgIGNvbnN0IG1vZGFsVkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdi1ib3hcIik7XG4gICAgbW9kYWxWQm94LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0ndGVhbXMtcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2J0bi1ib3gnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J3ZvdGVOdW0xJyBuYW1lPSduYW1lMSc+JHtuYW1lMX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVzc2FnZSc+IFdobyB3aWxsIHdpbj8gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdidG4tYm94Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSd2b3RlTnVtMicgbmFtZT0nbmFtZTInPiR7bmFtZTJ9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J3ZvdGluZy1ib3gnPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdCB2b3RlRGF0YTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGVOdW0xXCIpO1xuICAgIGNvbnN0IHZvdGVEYXRhMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm90ZU51bTJcIik7XG5cbiAgICB2b3RlRGF0YTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgZ2V0RGF0YSgxLCAxLCBwYXJzZUludChnYW1lSWQpKVxuICAgIH0pXG5cbiAgICB2b3RlRGF0YTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBnZXREYXRhKDEsIDIsIHBhcnNlSW50KGdhbWVJZCkpXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBhZGREYXRhID0gKGRhdGEsIHZvdGUxLCB2b3RlMikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaG8gZnJvbSBhZGREYXRhIGZ1bmN0aW9uJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBkYi5jb2xsZWN0aW9uKCd3aW5uZXItdm90ZXMnKS5hZGQoZGF0YSk7XG4gICAgICAgIHJlbmRlclZvdGVzKHZvdGUxLCB2b3RlMik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVm90ZXMgPSAodm90ZTEsIHZvdGUyKT0+e1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2b3RlMSwgdm90ZTIpXG4gICAgICAgIGNvbnN0IHZvdGluZ0JveERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm90aW5nLWJveFwiKTtcblxuICAgICAgICB2b3RpbmdCb3hEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZvdGluZy1yb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZvdGVzMSB2b3RlJz4keyh2b3RlMSAvICh2b3RlMSArIHZvdGUyKSAqIDEwMCkudG9GaXhlZCgxKX0lPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndm90ZXMyIHZvdGUnPiR7KHZvdGUyIC8gKHZvdGUxICsgdm90ZTIpICogMTAwKS50b0ZpeGVkKDEpfSU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0ncGllLWJveCc+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIGA7XG4gICAgICAgIGRyYXdQaWUodm90ZTEsIHZvdGUyKVxuICAgICAgICAvLyB2b3RpbmdCb3hEaXYuYXBwZW5kQ2hpbGQoZHJhd1BpZSh2b3RlMSwgdm90ZTIpKVxuICAgIH1cbiAgIFxuXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IChkYXRhLCBrZXlJZCwgdm90ZTEsIHZvdGUyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdobyBmcm9tIHVwZGF0ZURhdGEgZnVuY3Rpb24nKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGIuY29sbGVjdGlvbignd2lubmVyLXZvdGVzJykuZG9jKGtleUlkKS51cGRhdGUoZGF0YSk7XG4gICAgICAgIHJlbmRlclZvdGVzKHZvdGUxLCB2b3RlMik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0YSA9ICh2YWwsIG51bSwgZ2FtZUlkKSA9PiB7XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3dpbm5lci12b3RlcycpLmdldCgpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXMuZG9jcy5mb3JFYWNoKGRvYz0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5kYXRhKCksIGRvYy5pZClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtnYW1lSWR9YCk7XG4gICAgICAgICAgICAgICAgLy8gREFUQSBJUyBFWElTVElORyBJTiBEQVRBQkFTRS4gQ0FMTCBVUERBVEVcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChPYmplY3Qua2V5cyhkb2MuZGF0YSgpKVswXSkgPT09IGdhbWVJZCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlJZCA9IGRvYy5pZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGVzID0gKGRvYy5kYXRhKClbZ2FtZUlkXSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGUxPTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2b3RlMj0wO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHZvdGUgaW4gdm90ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGUgPT09ICd0ZWFtMScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUxID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUyID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdWb3RlMSA9IHZvdGUxICsgdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IFtnYW1lSWRdOiB7IHRlYW0xOiBuZXdWb3RlMSwgdGVhbTI6IHZvdGUyfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkPXRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgW2dhbWVJZF06IHsgdGVhbTE6IHZvdGUxLCB0ZWFtMjogbmV3Vm90ZTIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCB2b3RlMSwgbmV3Vm90ZTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gREFUQSBJUyBORVcuIENBTEwgQUREIEZVTkNUSU9OXG4gICAgICAgICAgICBpZiAodXBkYXRlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgbGV0IHZvdGUxID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdm90ZTIgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUxID0gdm90ZTEgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogbmV3Vm90ZTEsIHRlYW0yOiB2b3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogdm90ZTEsIHRlYW0yOiBuZXdWb3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCB2b3RlMSwgbmV3Vm90ZTIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclZvdGluZ1N0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCByZW5kZXJTdGFuZGluZ3M9ICgpID0+IHtcbiAgICBjb25zdCBzdGFuZGluZ3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YW5kaW5nc1wiKVxuICAgIGNvbnN0IHN0YW5kaW5nQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFuZGluZ0JveERpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1zdGFuZGluZy1ib3hcIik7XG4gICAgc3RhbmRpbmdzRGl2LmFwcGVuZChzdGFuZGluZ0JveERpdik7XG4gICAgXG4gICAgYXhpb3MuZ2V0KCcuL3N0YW5kaW5ncycpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGVhbXNBcnIgPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc3RhbmRpbmdzWzBdO1xuICAgICAgICB0ZWFtc0Fyci5mb3JFYWNoKCh0ZWFtLCBpZHgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGVhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0ZWFtUmFua0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0ZWFtTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0ZWFtUG9pbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1SYW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGVhbU5hbWVEaXYuaW5uZXJUZXh0ID0gdGVhbS50ZWFtLm5hbWU7XG4gICAgICAgICAgICB0ZWFtUG9pbnRzRGl2LmlubmVyVGV4dCA9IHRlYW0ucG9pbnRzO1xuICAgICAgICAgICAgdGVhbVJhbmtEaXYuaW5uZXJUZXh0ID0gdGVhbS5yYW5rO1xuXG4gICAgICAgICAgICB0ZWFtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXN0YW5kaW5nLXJvd1wiKTtcbiAgICAgICAgICAgIHRlYW1SYW5rQm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXJhbmstYm94XCIpO1xuICAgICAgICAgICAgdGVhbVJhbmtEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcmFua1wiKTtcbiAgICAgICAgICAgIHRlYW1Qb2ludHNEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcG9pbnRzXCIpO1xuXG4gICAgICAgICAgICB0ZWFtUmFua0JveERpdi5hcHBlbmQodGVhbVJhbmtEaXYsIHRlYW1OYW1lRGl2KVxuICAgICAgICAgICAgdGVhbURpdi5hcHBlbmQodGVhbVJhbmtCb3hEaXYsIHRlYW1Qb2ludHNEaXYpO1xuICAgICAgICAgICAgc3RhbmRpbmdCb3hEaXYuYXBwZW5kKHRlYW1EaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTdGFuZGluZ3M7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==