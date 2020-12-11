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
/* harmony import */ var _scripts_games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/games */ "./src/scripts/games.js");
/* harmony import */ var _scripts_gamestat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/gamestat */ "./src/scripts/gamestat.js");
/* harmony import */ var _scripts_standings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/standings */ "./src/scripts/standings.js");




 // request to update standings table
// window.addEventListener("DOMContentLoaded", () => {
//     renderStandings();
// });
// renderGames('Regular Season - 11');

window.addEventListener("DOMContentLoaded", function () {
  var round = 'Regular Season - 11';
  Object(_scripts_games__WEBPACK_IMPORTED_MODULE_1__["default"])(round); // renderGameStat();

  Object(_scripts_standings__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var navbarLogo = document.querySelector("#navbar-logo");
  navbarLogo.addEventListener('click', function () {
    return Object(_scripts_games__WEBPACK_IMPORTED_MODULE_1__["default"])(round);
  });
});

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
  console.log('Hi from game!');
  var leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.innerHTML = "<div></div>";
  leagueInfoDiv.classList.remove('left');
  var allGamesContentDiv = document.getElementById("all-games");
  allGamesContentDiv.innerHTML = "<div id='one-game'></div>";
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./game?fixtureId=".concat(fixtureId)).then(function (res) {
    console.log(res.data.response);
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
            div.setAttribute('teamId', command.team.id); // div.setAttribute('fixtureId', fixtureId);

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



var renderGames = function renderGames(round) {
  console.log(round);
  var allGamesDiv = document.getElementById("all-games");
  var allGamesBoxDiv = document.createElement("div");
  allGamesDiv.innerHTML = "<div></div>";
  var leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.classList.add('left');
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./games?round=".concat(round)).then(function (res) {
    console.log(res.data.response);
    var fixturesArr = res.data.response;
    var sectionNameDiv = document.createElement("div");
    sectionNameDiv.classList.add("section-name");
    var nextSeason = res.data.response[0].league.season + 1;
    leagueInfoDiv.innerHTML = "\n        <div class='league-box'>\n          \n            <div class='country-box'>\n                <div class='name'>".concat(res.data.response[0].league.country, "</div>\n                <div class='flag'>\n                    <img src=\"").concat(res.data.response[0].league.flag, "\"/>\n                </div>\n            </div>\n            <div class='league-name'>\n                ").concat(res.data.response[0].league.name, "\n            </div>\n            <div class='logo-box'>\n                <img src=\"").concat(res.data.response[0].league.logo, "\"/>\n            </div>\n            <div class='season-box'>\n                Season ").concat(res.data.response[0].league.season, "-").concat(nextSeason, "\n            </div>\n          \n            <div class='epl-link'>\n                <a href='https://www.premierleague.com/'>Visit EPL</a>   \n            </div>\n        </div>\n        ");
    var currentRoundString = res.data.response[0].league.round;
    var currentRound = "".concat(currentRoundString.split(' ').pop(), " ");
    var prevRound = parseInt(currentRound) - 1;
    var nextRound = parseInt(currentRound) + 1;
    sectionNameDiv.innerHTML = "\n            <div class='roundPrev'>\n                <<   Round ".concat(prevRound, " \n            </div>\n            <div class='roundCurr'>\n                All Games - Round ").concat(currentRound, " \n            </div>\n            <div class='roundNext'>\n                Round ").concat(nextRound, "   >>\n            </div>\n            ");
    allGamesDiv.append(sectionNameDiv);
    var pRound = "Regular Season - ".concat(prevRound);
    var nRound = "Regular Season - ".concat(nextRound);
    var previousRound = document.querySelector(".roundPrev");
    var followingRound = document.querySelector(".roundNext"); // previousRound.setAttribute('roundName', pRound);

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
      var gameStatus = fix.fixture.status.short; // console.log(`${gameStatus} ${team1} ${team2} ${}`)

      var gameId = fix.fixture.id;
      var fixtureRowDiv = document.createElement('div');
      fixtureRowDiv.classList.add('fixture-box');
      fixtureRowDiv.setAttribute('gameId', gameId);
      var scoreBoxDiv = document.createElement('div');
      scoreBoxDiv.classList.add('score-box'); // console.log((gameLiveStatus.includes(gameStatus) || gameStatus === 'FT'))
      // if game is live then show 'score', otherwise show 'vs'

      var temp = gameLiveStatus.includes(gameStatus) || gameStatus === 'FT' ? "\n            <div class=\"score-box\">\n            <div class='score'>".concat(score1, "</div>\n            <div class='score'>").concat(score2, "</div>\n            </div>\n            ") : '<div class="vs">vs</div>';
      fixtureRowDiv.innerHTML = gameNotLiveStatus.includes(gameStatus) ? "\n            <div class='team1-box' >\n            <div class=\"name\">".concat(team1, "</div>\n            <div class=\"logo\"><img src=\"").concat(logo1, "\"/></div>\n            </div>\n            ").concat(temp, "\n            <div class='team2-box'>\n            <div class=\"logo\"><img src=\"").concat(logo2, "\"/></div>\n            <div class=\"name\">").concat(team2, "</div>\n            </div>") : "";

      if (gameStatus !== 'NS') {
        fixtureRowDiv.addEventListener('click', function () {
          return Object(_game__WEBPACK_IMPORTED_MODULE_1__["default"])(gameId, score1, score2);
        });
      }

      allGamesBoxDiv.appendChild(fixtureRowDiv);
    });
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (renderGames);

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
    console.log(res.data.response);
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

    gameStatDiv.innerHTML = "\n            <div class='game-stat-title'>Game Statistics</div>\n            <div class='stat-box'>\n                <div class='scoreBox'>\n                    <div class=\"teamHome\">\n                        <div class=\"teamLogo\">\n                        <img src=\"".concat(res.data.response[0].team.logo, "\"/>\n                        </div> \n                        <div class=\"teamName\">").concat(res.data.response[0].team.name, "</div>\n                        <div class='teamScore1'>").concat(score1, "</div>\n                    </div>\n                    <div class=\"teamHome\">\n                        <div class=\"teamLogo\">\n                        <img src=\"").concat(res.data.response[1].team.logo, "\"/>\n                        </div> \n                        <div class=\"teamName\">").concat(res.data.response[1].team.name, "</div>\n                        <div class='teamScore2'>").concat(score2, "</div>\n                    </div>  \n                </div>\n                <div id=\"possProgress\">\n                    <div id=\"poss\"></div> \n                </div>\n                <div class=\"stat-name\"> Ball Possession </div>\n                <div id=\"shotsOnProgress\">\n                    <div id=\"shotsOn\"></div> \n                </div>\n                <div class=\"stat-name\"> Shots on Goals </div>\n                 <div id=\"shotsOffProgress\">\n                    <div id=\"shotsOff\"></div>\n                </div>\n                <div class=\"stat-name\"> Shots off Goals </div> \n                <div id=\"foulsProgress\">\n                    <div id=\"fouls\"></div>\n                </div>\n                <div class=\"stat-name\"> Fouls </div>  \n                <div id=\"ycProgress\">\n                    <div id=\"yc\"></div>\n                </div>\n                <div class=\"stat-name\"> Yellow Cards </div>  \n            </div>\n            ");

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
  console.log('hi from  RENDER PLAYER STAT');
  console.log(playerIdm);
  console.log(teamIdm);
  console.log(fixtureIdm);
  console.log(FixturePlayersStatm);
  var teamInfo = {};
  var playerInfo = {};
  var playerStat = {};
  FixturePlayersStatm.forEach(function (squad) {
    console.log(squad);
    console.log(teamIdm);
    console.log(squad.team.id);

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
  console.log(teamInfo);
  console.log(playerInfo);
  console.log(playerStat);
  var modalBox = document.getElementById("modal-box"); //check if goalkeeper redner one thing , for field player- another

  var rightBoxData = playerStat.games.position === 'G' ? "<div class='saves-box row'>\n            <div class='title'>Saves: </div>\n            <div class='value'>".concat(playerStat.goals.saves ? playerStat.goals.saves : 0, "</div>\n        </div>\n        <div class='conceded-box row'>\n            <div class='title'>Goals conceded: </div>\n            <div class='value'>").concat(playerStat.goals.conceded ? playerStat.goals.conceded : 0, "</div>\n        </div>\n        ") : "<div class='duels-box row'>\n            <div class='title'>Duels Won/Total: </div>\n            <div class='value'>".concat(playerStat.duels.won ? playerStat.duels.won : 0, " / ").concat(playerStat.duels.total ? playerStat.duels.total : 0, "</div>\n        </div>\n        <div class='passes-box row'>\n            <div class='title'>Passes(Accuracy%): </div>\n            <div class='value'>").concat(playerStat.passes.total ? playerStat.passes.total : 0, " (").concat(playerStat.passes.accuracy ? playerStat.passes.accuracy : 0, "%)</div>\n        </div>\n        <div class='shots-box row'>\n            <div class='title'>Shots: </div>\n            <div class='value'>").concat(playerStat.shots.total ? playerStat.shots.total : 0, "</div>\n        </div>\n         <div class='goals-box row'>\n            <div class='title'>Goals: </div>\n            <div class='value'>").concat(playerStat.goals.total ? playerStat.goals.total : 0, " </div>\n        </div>\n        ");
  modalBox.innerHTML = "   <div class='left-box'>\n                <div class='pl-img-box'>\n                    <img src=\"".concat(playerInfo.photo, "\"/>\n                </div>\n                <div class='pl-name'>").concat(playerInfo.name, "</div>\n                <div class='position-number-box'>\n                    <div class='value'>Number: ").concat(playerStat.games.number, "</div>\n                </div>\n            </div>\n            <div class='right-box'>\n                <div class='position-box row'>\n                    <div class='title'>Position: </div>\n                    <div class='value'>").concat(playerStat.games.position, "</div>\n                </div>\n                <div class='rating-box row'>\n                    <div class='title'>Rating: </div>\n                    <div class='value'>").concat(playerStat.games.rating ? playerStat.games.rating : 0, "</div>\n                </div>\n                <div class='minutes-box row'>\n                    <div class='title'>Minutes: </div>\n                    <div class='value'>").concat(playerStat.games.minutes ? playerStat.games.minutes : 0, "</div>\n                </div>\n\n                ").concat(rightBoxData, "\n                \n            </div>\n        ");
};

/* harmony default export */ __webpack_exports__["default"] = (renderPlayerStat);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpZWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVzdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dldEZpeHR1cmVQbGF5ZXJzU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJQbGF5ZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJQbGF5ZXJTdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N0YW5kaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdW5kIiwicmVuZGVyR2FtZXMiLCJyZW5kZXJTdGFuZGluZ3MiLCJuYXZiYXJMb2dvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyR2FtZUJ5SWQiLCJmaXh0dXJlSWQiLCJzY29yZTEiLCJzY29yZTIiLCJjb25zb2xlIiwibG9nIiwibGVhZ3VlSW5mb0RpdiIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWxsR2FtZXNDb250ZW50RGl2IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlc3BvbnNlIiwib25lR2FtZUNvbnRlbnREaXYiLCJmaWVsZERpdiIsImNyZWF0ZUVsZW1lbnQiLCJzcXVhZHNEaXYiLCJhZGQiLCJhcHBlbmQiLCJmaWVsZCIsImdrMURpdiIsImRlZjFEaXYiLCJtaWQxRGl2IiwiZndkMURpdiIsImdrMkRpdiIsImRlZjJEaXYiLCJtaWQyRGl2IiwiZndkMkRpdiIsInRlYW0xRGl2IiwidGVhbSIsIm5hbWUiLCJsb2dvIiwidGVhbTJEaXYiLCJmb3JFYWNoIiwiY29tbWFuZCIsImNpZHgiLCJzdGFydFhJIiwicGxyIiwicGlkeCIsInBsYXllckRpdiIsInBsYXllciIsIm51bWJlciIsInBvcyIsImRpdiIsInNldEF0dHJpYnV0ZSIsImlkIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJHYW1lU3RhdCIsImdldEZpeHR1cmVQbGF5ZXJzU3RhdCIsIkZpeHR1cmVQbGF5ZXJzU3RhdCIsInJlbmRlclBsYXllck1vZGFsIiwiY2F0Y2giLCJlcnIiLCJhbGxHYW1lc0RpdiIsImFsbEdhbWVzQm94RGl2IiwiZml4dHVyZXNBcnIiLCJzZWN0aW9uTmFtZURpdiIsIm5leHRTZWFzb24iLCJsZWFndWUiLCJzZWFzb24iLCJjb3VudHJ5IiwiZmxhZyIsImN1cnJlbnRSb3VuZFN0cmluZyIsImN1cnJlbnRSb3VuZCIsInNwbGl0IiwicG9wIiwicHJldlJvdW5kIiwicGFyc2VJbnQiLCJuZXh0Um91bmQiLCJwUm91bmQiLCJuUm91bmQiLCJwcmV2aW91c1JvdW5kIiwiZm9sbG93aW5nUm91bmQiLCJnYW1lTGl2ZVN0YXR1cyIsImdhbWVOb3RMaXZlU3RhdHVzIiwiZml4IiwiaWR4IiwidGVhbTEiLCJ0ZWFtcyIsImhvbWUiLCJsb2dvMSIsInRlYW0yIiwiYXdheSIsImxvZ28yIiwiZ29hbHMiLCJnYW1lU3RhdHVzIiwiZml4dHVyZSIsInN0YXR1cyIsInNob3J0IiwiZ2FtZUlkIiwiZml4dHVyZVJvd0RpdiIsInNjb3JlQm94RGl2IiwidGVtcCIsImluY2x1ZGVzIiwic3RhbmRpbmdzRGl2IiwiZ2FtZVN0YXREaXYiLCJ0ZWFtc1N0YXQiLCJwb3NzZXNzaW9uIiwic2hvdHNPbiIsInNob3RzT2ZmIiwiZm91bHMiLCJ5YyIsInRlYW1TdGF0IiwiaWR4MSIsInN0YXRpc3RpY3MiLCJzdGF0IiwidHlwZSIsInB1c2giLCJyZW5kZXJTdGF0cyIsInN0YXQxIiwidG90YWwiLCJpZE5hbWUiLCJlbGVtIiwic3R5bGUiLCJ3aWR0aCIsInJhdGlvIiwidmFsdWUiLCJtb2RhbERpdiIsIm1vZGFsIiwicGxheWVyc1RvQ2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNwbGF5IiwicGxheWVySWQiLCJnZXRBdHRyaWJ1dGUiLCJ0ZWFtSWQiLCJwbGF5ZXJJZG0iLCJ0ZWFtSWRtIiwicmVuZGVyUGxheWVyU3RhdCIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsImZpeHR1cmVJZG0iLCJGaXh0dXJlUGxheWVyc1N0YXRtIiwidGVhbUluZm8iLCJwbGF5ZXJJbmZvIiwicGxheWVyU3RhdCIsInNxdWFkIiwicGxheWVycyIsIm1vZGFsQm94IiwicmlnaHRCb3hEYXRhIiwiZ2FtZXMiLCJwb3NpdGlvbiIsInNhdmVzIiwiY29uY2VkZWQiLCJkdWVscyIsIndvbiIsInBhc3NlcyIsImFjY3VyYWN5Iiwic2hvdHMiLCJwaG90byIsInJhdGluZyIsIm1pbnV0ZXMiLCJzdGFuZGluZ0JveERpdiIsInRlYW1zQXJyIiwic3RhbmRpbmdzIiwidGVhbURpdiIsInRlYW1SYW5rQm94RGl2IiwidGVhbU5hbWVEaXYiLCJ0ZWFtUG9pbnRzRGl2IiwidGVhbVJhbmtEaXYiLCJwb2ludHMiLCJyYW5rIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7O0FDQWpDLGlCQUFpQixt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Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0MsR0FBUixDQUFZcUQsR0FBWjtBQUNILEdBMUJEO0FBMkJILENBakNEOztBQW1DZTlELDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2ZpZWxkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcblxudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcblxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcblxudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG5cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTsgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcblxuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0OyAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG5cbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcblxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuXG5cbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcblxuXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG5cblxuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSB0aW1lb3V0XG5cblxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcblxuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuXG5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID8gY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9IC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG5cblxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcblxuXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfSAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cblxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfSAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9IC8vIFNlbmQgdGhlIHJlcXVlc3RcblxuXG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTsgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcblxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7IC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG4gIHJldHVybiBpbnN0YW5jZTtcbn0gLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5cblxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpOyAvLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcblxuYXhpb3MuQXhpb3MgPSBBeGlvczsgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTsgLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5cblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7IC8vIEV4cG9zZSBhbGwvc3ByZWFkXG5cbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBheGlvczsgLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvczsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuXG5cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG5cbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5cblxuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuXG5cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTsgLy8gU2V0IGNvbmZpZy5tZXRob2RcblxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH0gLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuXG5cbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07IC8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xuXG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG5cbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcblxudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cblxuXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuXG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307IC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcblxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoY29uZmlnLmRhdGEsIGNvbmZpZy5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVxdWVzdCk7IC8vIEZsYXR0ZW4gaGVhZGVyc1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LCBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSwgY29uZmlnLmhlYWRlcnMpO1xuICB1dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLCBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgfSk7XG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7IC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShyZXNwb25zZS5kYXRhLCByZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEocmVhc29uLnJlc3BvbnNlLmRhdGEsIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcblxuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZXJyb3I7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gWydiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsICd0aW1lb3V0JywgJ3RpbWVvdXRNZXNzYWdlJywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnLCAncmVzcG9uc2VFbmNvZGluZyddO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cykuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKS5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZzEpLmNvbmNhdChPYmplY3Qua2V5cyhjb25maWcyKSkuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG4gIHJldHVybiBjb25maWc7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuXG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLmNvbmZpZywgbnVsbCwgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuXG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fCB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8IHV0aWxzLmlzRmlsZShkYXRhKSB8fCB1dGlscy5pc0Jsb2IoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogSWdub3JlICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkucmVwbGFjZSgvJTNBL2dpLCAnOicpLnJlcGxhY2UoLyUyNC9nLCAnJCcpLnJlcGxhY2UoLyUyQy9naSwgJywnKS5yZXBsYWNlKC8lMjAvZywgJysnKS5yZXBsYWNlKC8lNUIvZ2ksICdbJykucmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkwgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJykgOiBiYXNlVVJMO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG5mdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiB7XG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgfSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgfVxuICB9O1xufSgpIDogLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4ge1xuICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgfTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHZhciBvcmlnaW5VUkw7XG4gIC8qKlxuICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICovXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgIGlmIChtc2llKSB7XG4gICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgIH1cblxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpOyAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG5cbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICBwYXRobmFtZTogdXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgfTtcbiAgfVxuXG4gIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAvKipcbiAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgIHZhciBwYXJzZWQgPSB1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgIHJldHVybiBwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJiBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3Q7XG4gIH07XG59KCkgOiAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTsgLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcblxuXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJywgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLCAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXTtcbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykge1xuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYXJzZWQ7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgdmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfSAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcblxuXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5cblxuZnVuY3Rpb24gbWVyZ2UoKVxuLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovXG57XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cblxuXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuXG5cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTsgLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gIH1cblxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgfVxufSkoKTtcblxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICB9IC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cblxuICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfSAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cblxuICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgfVxuICB9XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkcmFpbmluZyA9IGZhbHNlO1xuXG4gIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gIH1cblxuICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgZHJhaW5RdWV1ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gIGlmIChkcmFpbmluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbikge1xuICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG5cbiAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICB9XG5cbiAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG5cbiAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICB9XG59OyAvLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5cblxuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gIHRoaXMuZnVuID0gZnVuO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xuXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIFtdO1xufTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnLyc7XG59O1xuXG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDA7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuXG5pbXBvcnQgcmVuZGVyR2FtZXMgZnJvbSBcIi4vc2NyaXB0cy9nYW1lc1wiO1xuaW1wb3J0IHJlbmRlckdhbWVTdGF0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZXN0YXRcIjtcbmltcG9ydCByZW5kZXJTdGFuZGluZ3MgZnJvbSBcIi4vc2NyaXB0cy9zdGFuZGluZ3NcIjtcbmltcG9ydCByZW5kZXJQbGF5ZXJTdGF0IGZyb20gXCIuL3NjcmlwdHMvc3RhbmRpbmdzXCI7XG5cblxuLy8gcmVxdWVzdCB0byB1cGRhdGUgc3RhbmRpbmdzIHRhYmxlXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIHJlbmRlclN0YW5kaW5ncygpO1xuLy8gfSk7XG5cbi8vIHJlbmRlckdhbWVzKCdSZWd1bGFyIFNlYXNvbiAtIDExJyk7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGxldCByb3VuZCA9ICdSZWd1bGFyIFNlYXNvbiAtIDExJyA7XG4gICAgcmVuZGVyR2FtZXMocm91bmQpO1xuICAgIC8vIHJlbmRlckdhbWVTdGF0KCk7XG4gICAgcmVuZGVyU3RhbmRpbmdzKCk7XG5cbiAgICBjb25zdCBuYXZiYXJMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXItbG9nb1wiKTtcbiAgICBuYXZiYXJMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMocm91bmQpKTtcbn0pO1xuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZmllbGQgZnJvbSAnLi4vLi4vYXNzZXRzL2ZpZWxkLnBuZyc7XG5pbXBvcnQgcmVuZGVyR2FtZVN0YXQgZnJvbSAnLi9nYW1lc3RhdCc7XG5pbXBvcnQgZ2V0Rml4dHVyZVBsYXllcnNTdGF0IGZyb20gXCIuL2dldEZpeHR1cmVQbGF5ZXJzU3RhdFwiO1xuaW1wb3J0IHJlbmRlclBsYXllck1vZGFsIGZyb20gJy4vcmVuZGVyUGxheWVyTW9kYWwnO1xuXG5jb25zdCByZW5kZXJHYW1lQnlJZCA9IChmaXh0dXJlSWQsIHNjb3JlMSwgc2NvcmUyKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0hpIGZyb20gZ2FtZSEnKTtcblxuICAgIGNvbnN0IGxlYWd1ZUluZm9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWd1ZS1pbmZvXCIpO1xuICAgIGxlYWd1ZUluZm9EaXYuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuICAgIGxlYWd1ZUluZm9EaXYuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdCcpO1xuXG4gICAgY29uc3QgYWxsR2FtZXNDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2FtZXNcIik7XG4gICAgYWxsR2FtZXNDb250ZW50RGl2LmlubmVySFRNTCA9IFwiPGRpdiBpZD0nb25lLWdhbWUnPjwvZGl2PlwiO1xuXG4gICAgYXhpb3MuZ2V0KGAuL2dhbWU/Zml4dHVyZUlkPSR7Zml4dHVyZUlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXNwb25zZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3F1YWRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdmaWVsZC1ib3gnKTtcbiAgICAgICAgc3F1YWRzRGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFkLWJveCcpO1xuICAgICAgICBcbiAgICAgICAgc3F1YWRzRGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGlkPSd0ZWFtLTEtYm94Jz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3RlYW0tMi1ib3gnPjwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKHNxdWFkc0Rpdik7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaW1nXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCIke2ZpZWxkfVwiLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2RlZi0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMScgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZndkLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2Z3ZC0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMicgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZGVmLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKGZpZWxkRGl2KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdrMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2stMVwiKTtcbiAgICAgICAgY29uc3QgZGVmMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmLTFcIik7XG4gICAgICAgIGNvbnN0IG1pZDFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC0xXCIpO1xuICAgICAgICBjb25zdCBmd2QxRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmd2QtMVwiKTtcbiAgICAgICAgY29uc3QgZ2syRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnay0yXCIpO1xuICAgICAgICBjb25zdCBkZWYyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWYtMlwiKTtcbiAgICAgICAgY29uc3QgbWlkMkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkLTJcIik7XG4gICAgICAgIGNvbnN0IGZ3ZDJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ3ZC0yXCIpO1xuXG4gICAgICAgIC8vYWRkaW5nIHBsYXllcnMgaW5zaWRlIHNxdWFkcyBzZWN0aW9uXG4gICAgICAgIGNvbnN0IHRlYW0xRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtLTEtYm94XCIpO1xuICAgICAgICAgICAgdGVhbTFEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbS0xLWhlYWRlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5uYW1lfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdsb2dvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgY29uc3QgdGVhbTJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW0tMi1ib3hcIik7XG4gICAgICAgICAgICB0ZWFtMkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLTItaGVhZGVyLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICAvL3BsYWNlIHBsYXllcnMgb24gYSBmaWVsZCBhY2NvcmRpbmcgdG8gdGhlaXIgYWN0dWFsIHBvc2l0aW9uIGFuZCB0ZWFtIGZvcm1hdGlvblxuICAgICAgICByZXMuZGF0YS5yZXNwb25zZS5mb3JFYWNoKChjb21tYW5kLCBjaWR4KSA9PiB7XG4gICAgICAgICAgICBjb21tYW5kLnN0YXJ0WEkuZm9yRWFjaCgocGxyLCBwaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNpZHggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKCd0ZWFtLTEnKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbnVtYmVyJz4ke3Bsci5wbGF5ZXIubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtwbHIucGxheWVyLm5hbWV9PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncG9zJz4gICgke3Bsci5wbGF5ZXIucG9zfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICBpZihwbHIucGxheWVyLnBvcyA9PT0gJ0cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGl2LnNldEF0dHJpYnV0ZSgnZml4dHVyZUlkJywgZml4dHVyZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQ9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2sxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwxJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWYxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkMURpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDEnLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ3ZDFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhbTFEaXYuYXBwZW5kQ2hpbGQocGxheWVyRGl2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoJ3RlYW0tMicpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdudW1iZXInPiR7cGxyLnBsYXllci5udW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz4ke3Bsci5wbGF5ZXIubmFtZX08L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwb3MnPiAgKCR7cGxyLnBsYXllci5wb3N9KTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0cnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDInLCdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2syRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMicsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDInLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZDJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdGJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwyJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmd2QyRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlYW0yRGl2LmFwcGVuZENoaWxkKHBsYXllckRpdiwgZml4dHVyZUlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVuZGVyR2FtZVN0YXQoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMik7XG4gICAgICAgIFxuICAgICAgICBnZXRGaXh0dXJlUGxheWVyc1N0YXQoZml4dHVyZUlkKS50aGVuKChGaXh0dXJlUGxheWVyc1N0YXQpID0+IHtcbiAgICAgICAgICAgIC8vbW9kYWwgZnVuY3Rpb25hbGl0eVxuICAgICAgICAgICAgcmVuZGVyUGxheWVyTW9kYWwoc3F1YWRzRGl2LCBGaXh0dXJlUGxheWVyc1N0YXQsIGZpeHR1cmVJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVCeUlkO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHJlbmRlckdhbWVCeUlkIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IHJlbmRlckdhbWVzID0gKHJvdW5kKSA9PiB7XG4gICAgY29uc29sZS5sb2cocm91bmQpXG4gICAgY29uc3QgYWxsR2FtZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nYW1lc1wiKVxuICAgIGNvbnN0IGFsbEdhbWVzQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxHYW1lc0Rpdi5pbm5lckhUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG4gICAgY29uc3QgbGVhZ3VlSW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZ3VlLWluZm9cIik7XG4gICAgbGVhZ3VlSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgICBheGlvcy5nZXQoYC4vZ2FtZXM/cm91bmQ9JHtyb3VuZH1gKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucmVzcG9uc2UpO1xuICAgICAgICBjb25zdCBmaXh0dXJlc0FyciA9IHJlcy5kYXRhLnJlc3BvbnNlO1xuICAgICAgICBjb25zdCBzZWN0aW9uTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlY3Rpb25OYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLW5hbWVcIik7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IG5leHRTZWFzb24gPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc2Vhc29uICsgMTtcblxuICAgICAgICBsZWFndWVJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0nbGVhZ3VlLWJveCc+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3VudHJ5LWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuY291bnRyeX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGFnJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5mbGFnfVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbGVhZ3VlLW5hbWUnPlxuICAgICAgICAgICAgICAgICR7cmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2xvZ28tYm94Jz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLmxvZ299XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzZWFzb24tYm94Jz5cbiAgICAgICAgICAgICAgICBTZWFzb24gJHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc2Vhc29ufS0ke25leHRTZWFzb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2VwbC1saW5rJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5wcmVtaWVybGVhZ3VlLmNvbS8nPlZpc2l0IEVQTDwvYT4gICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBsZXQgY3VycmVudFJvdW5kU3RyaW5nID0gcmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLnJvdW5kO1xuICAgICAgICBsZXQgY3VycmVudFJvdW5kID0gYCR7Y3VycmVudFJvdW5kU3RyaW5nLnNwbGl0KCcgJykucG9wKCl9IGA7XG4gICAgICAgIGxldCBwcmV2Um91bmQgPSBwYXJzZUludChjdXJyZW50Um91bmQpIC0gMTtcbiAgICAgICAgbGV0IG5leHRSb3VuZCA9IHBhcnNlSW50KGN1cnJlbnRSb3VuZCkgKyAxO1xuXG4gICAgICAgIHNlY3Rpb25OYW1lRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JvdW5kUHJldic+XG4gICAgICAgICAgICAgICAgPDwgICBSb3VuZCAke3ByZXZSb3VuZH0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JvdW5kQ3Vycic+XG4gICAgICAgICAgICAgICAgQWxsIEdhbWVzIC0gUm91bmQgJHtjdXJyZW50Um91bmR9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3VuZE5leHQnPlxuICAgICAgICAgICAgICAgIFJvdW5kICR7bmV4dFJvdW5kfSAgID4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgXG4gICAgICAgIGFsbEdhbWVzRGl2LmFwcGVuZChzZWN0aW9uTmFtZURpdik7XG5cbiAgICAgICAgY29uc3QgcFJvdW5kID0gYFJlZ3VsYXIgU2Vhc29uIC0gJHtwcmV2Um91bmR9YDtcbiAgICAgICAgY29uc3QgblJvdW5kID0gYFJlZ3VsYXIgU2Vhc29uIC0gJHtuZXh0Um91bmR9YDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmRQcmV2XCIpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmROZXh0XCIpO1xuICAgICAgICAvLyBwcmV2aW91c1JvdW5kLnNldEF0dHJpYnV0ZSgncm91bmROYW1lJywgcFJvdW5kKTtcbiAgICAgICAgcHJldmlvdXNSb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVzKHBSb3VuZCkpO1xuICAgICAgICBmb2xsb3dpbmdSb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVzKG5Sb3VuZCkpOyAgICBcbiAgICAgICBcbiAgICAgICAgYWxsR2FtZXNCb3hEaXYuY2xhc3NMaXN0LmFkZChcImFsbC1nYW1lcy1ib3hcIik7XG4gICAgICAgIGFsbEdhbWVzRGl2LmFwcGVuZChhbGxHYW1lc0JveERpdik7XG4gICAgICAgIGNvbnN0IGdhbWVMaXZlU3RhdHVzID0gWycxSCcsJ0hUJywnMkgnLCdFVCcsJ1AnLCdCVCddO1xuICAgICAgICBjb25zdCBnYW1lTm90TGl2ZVN0YXR1cyA9IFsnTlMnLCAnRlQnXTtcbiAgICAgICAgXG4gICAgICAgIGZpeHR1cmVzQXJyLmZvckVhY2goKGZpeCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtMSA9IGZpeC50ZWFtcy5ob21lLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsb2dvMSA9IGZpeC50ZWFtcy5ob21lLmxvZ287XG4gICAgICAgICAgICBjb25zdCB0ZWFtMiA9IGZpeC50ZWFtcy5hd2F5Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsb2dvMiA9IGZpeC50ZWFtcy5hd2F5LmxvZ287XG4gICAgICAgICAgICBjb25zdCBzY29yZTEgPSBmaXguZ29hbHMuaG9tZTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlMiA9IGZpeC5nb2Fscy5hd2F5O1xuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGZpeC5maXh0dXJlLnN0YXR1cy5zaG9ydDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2dhbWVTdGF0dXN9ICR7dGVhbTF9ICR7dGVhbTJ9ICR7fWApXG4gICAgICAgICAgICBjb25zdCBnYW1lSWQgPSBmaXguZml4dHVyZS5pZDtcbiAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZml4dHVyZVJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdmaXh0dXJlLWJveCcpO1xuICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5zZXRBdHRyaWJ1dGUoJ2dhbWVJZCcsIGdhbWVJZCApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzY29yZUJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2NvcmVCb3hEaXYuY2xhc3NMaXN0LmFkZCgnc2NvcmUtYm94Jyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygoZ2FtZUxpdmVTdGF0dXMuaW5jbHVkZXMoZ2FtZVN0YXR1cykgfHwgZ2FtZVN0YXR1cyA9PT0gJ0ZUJykpXG4gICAgICAgICAgICAvLyBpZiBnYW1lIGlzIGxpdmUgdGhlbiBzaG93ICdzY29yZScsIG90aGVyd2lzZSBzaG93ICd2cydcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSAoZ2FtZUxpdmVTdGF0dXMuaW5jbHVkZXMoZ2FtZVN0YXR1cykgfHwgKGdhbWVTdGF0dXMgPT09ICdGVCcpKSA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZS1ib3hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlJz4ke3Njb3JlMX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlJz4ke3Njb3JlMn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDogJzxkaXYgY2xhc3M9XCJ2c1wiPnZzPC9kaXY+JztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5pbm5lckhUTUwgPSBnYW1lTm90TGl2ZVN0YXR1cy5pbmNsdWRlcyhnYW1lU3RhdHVzKSA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0xLWJveCcgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke3RlYW0xfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48aW1nIHNyYz1cIiR7bG9nbzF9XCIvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RlbXB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtMi1ib3gnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48aW1nIHNyYz1cIiR7bG9nbzJ9XCIvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke3RlYW0yfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDogXCJcIjtcbiAgICAgICAgICAgIGlmIChnYW1lU3RhdHVzICE9PSAnTlMnKSB7XG4gICAgICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVCeUlkKGdhbWVJZCwgc2NvcmUxLCBzY29yZTIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYWxsR2FtZXNCb3hEaXYuYXBwZW5kQ2hpbGQoZml4dHVyZVJvd0Rpdik7XG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVzOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVuZGVyR2FtZVN0YXQgPSAoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdISSBGUk9NIEdBTUUgU1RBVCcpO1xuICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICBjb25zdCBzdGFuZGluZ3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YW5kaW5nc1wiKVxuICAgIC8vIGNvbnN0IHRlc3RCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRlc3RCb3hEaXYuY2xhc3NMaXN0LmFkZChcInRlc3QtYm94XCIpO1xuICAgIGF4aW9zLmdldChgL2dhbWVzdGF0Lz9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZVN0YXREaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGF0LWJveCcpO1xuICAgICAgICBzdGFuZGluZ3NEaXYuYXBwZW5kKGdhbWVTdGF0RGl2KTtcbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKGdhbWVTdGF0RGl2KTtcbiAgICAgICAgY29uc3QgdGVhbXNTdGF0ID0gcmVzLmRhdGEucmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHBvc3Nlc3Npb24gPSBbXTtcbiAgICAgICAgY29uc3Qgc2hvdHNPbiA9IFtdO1xuICAgICAgICBjb25zdCBzaG90c09mZiA9IFtdO1xuICAgICAgICBjb25zdCBmb3VscyA9IFtdO1xuICAgICAgICBjb25zdCB5YyA9IFtdO1xuXG4gICAgICAgIHRlYW1zU3RhdC5mb3JFYWNoKCh0ZWFtU3RhdCwgaWR4MSkgPT4ge1xuICAgICAgICAgICAgdGVhbVN0YXQuc3RhdGlzdGljcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiQmFsbCBQb3NzZXNzaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2Vzc2lvbi5wdXNoKHN0YXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIlNob3RzIG9uIEdvYWxcIil7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT24ucHVzaChzdGF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQudHlwZSA9PT0gXCJTaG90cyBvZmYgR29hbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT2ZmLnB1c2goc3RhdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiRm91bHNcIikge1xuICAgICAgICAgICAgICAgICAgICBmb3Vscy5wdXNoKHN0YXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiWWVsbG93IENhcmRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWMucHVzaChzdGF0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvc3Nlc3Npb24pXG4gICAgICAgIGdhbWVTdGF0RGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lLXN0YXQtdGl0bGUnPkdhbWUgU3RhdGlzdGljczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlQm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Ib21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVswXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1OYW1lXCI+JHtyZXMuZGF0YS5yZXNwb25zZVswXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtU2NvcmUxJz4ke3Njb3JlMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Mb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTmFtZVwiPiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbVNjb3JlMic+JHtzY29yZTJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvc3NQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zc1wiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEJhbGwgUG9zc2Vzc2lvbiA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hvdHNPblByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09uXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb24gR29hbHMgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb2ZmIEdvYWxzIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEZvdWxzIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInljUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInljXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBZZWxsb3cgQ2FyZHMgPC9kaXY+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcblxuICAgICAgICBjb25zdCByZW5kZXJTdGF0cyA9IChzdGF0MSwgdG90YWwsIGlkTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE5hbWUpO1xuICAgICAgICAgICAgaWYgKGlkTmFtZSA9PT0gJ3Bvc3MnKXtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gc3RhdDE7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAoc3RhdDEgLyB0b3RhbCApICoxMDA7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHJhdGlvICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyU3RhdHMocG9zc2Vzc2lvblswXS52YWx1ZSwgMCwgXCJwb3NzXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09uWzBdLnZhbHVlLCBzaG90c09uWzBdLnZhbHVlICsgc2hvdHNPblsxXS52YWx1ZSwgXCJzaG90c09uXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09mZlswXS52YWx1ZSwgc2hvdHNPZmZbMF0udmFsdWUgKyBzaG90c09mZlsxXS52YWx1ZSwgXCJzaG90c09mZlwiKTtcbiAgICAgICAgcmVuZGVyU3RhdHMoZm91bHNbMF0udmFsdWUsIGZvdWxzWzBdLnZhbHVlICsgZm91bHNbMV0udmFsdWUsIFwiZm91bHNcIik7XG4gICAgICAgIHJlbmRlclN0YXRzKHljWzBdLnZhbHVlLCB5Y1swXS52YWx1ZSArIHljWzFdLnZhbHVlLCBcInljXCIpO1xuICAgICAgXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZVN0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgLi9maXh0dXJlX3BsYXllcnNfc3RhdD9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIaSBmcm9tIGZpeHR1cmUgcGxheWVycyBzdGF0IScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCcpO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2U7XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQ7IiwiaW1wb3J0IHJlbmRlclBsYXllclN0YXQgZnJvbSAnLi9yZW5kZXJQbGF5ZXJTdGF0JztcblxuY29uc3QgcmVuZGVyUGxheWVyTW9kYWwgPSAoc3F1YWRzRGl2LCBGaXh0dXJlUGxheWVyc1N0YXQsIGZpeHR1cmVJZCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBpZD1cIm15TW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nbW9kYWwtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgdGV4dCBnb2VzIGhlcmUgLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIHNxdWFkc0Rpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlNb2RhbFwiKTtcbiAgICBjb25zdCBwbGF5ZXJzVG9DbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGwtc2VsZWN0XCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG5cbiAgICBwbGF5ZXJzVG9DbGljay5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcklkID0gcGxheWVyLmdldEF0dHJpYnV0ZSgncGxheWVySWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1JZCA9IHBsYXllci5nZXRBdHRyaWJ1dGUoJ3RlYW1JZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJZG0gPSBwYXJzZUludChwbGF5ZXJJZCk7XG4gICAgICAgICAgICBjb25zdCB0ZWFtSWRtID0gcGFyc2VJbnQodGVhbUlkKTtcbiAgICAgICAgICAgIHJlbmRlclBsYXllclN0YXQocGxheWVySWRtLCB0ZWFtSWRtLCBmaXh0dXJlSWQsIEZpeHR1cmVQbGF5ZXJzU3RhdCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSlcblxuICAgIHNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyTW9kYWw7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHJlbmRlckdhbWVCeUlkIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IHJlbmRlclBsYXllclN0YXQgPSAocGxheWVySWRtLCB0ZWFtSWRtLCBmaXh0dXJlSWRtLCBGaXh0dXJlUGxheWVyc1N0YXRtKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hpIGZyb20gIFJFTkRFUiBQTEFZRVIgU1RBVCcpO1xuICAgIGNvbnNvbGUubG9nKHBsYXllcklkbSk7XG4gICAgY29uc29sZS5sb2codGVhbUlkbSk7XG4gICAgY29uc29sZS5sb2coZml4dHVyZUlkbSk7XG4gICAgY29uc29sZS5sb2coRml4dHVyZVBsYXllcnNTdGF0bSk7XG5cbiAgICBsZXQgdGVhbUluZm8gPSB7fTtcbiAgICBsZXQgcGxheWVySW5mbz17fTtcbiAgICBsZXQgcGxheWVyU3RhdCA9IHt9O1xuXG4gICAgRml4dHVyZVBsYXllcnNTdGF0bS5mb3JFYWNoKChzcXVhZCk9PntcbiAgICAgICAgY29uc29sZS5sb2coc3F1YWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZWFtSWRtKTtcbiAgICAgICAgY29uc29sZS5sb2coc3F1YWQudGVhbS5pZClcbiAgICAgICAgaWYgKHNxdWFkLnRlYW0uaWQgPT09IHRlYW1JZG0pIHtcbiAgICAgICAgICAgIHRlYW1JbmZvID0gc3F1YWQ7XG4gICAgICAgICAgICBzcXVhZC5wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaWR4KT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVyLmlkID09PSBwbGF5ZXJJZG0pe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvID0gcGxheWVyLnBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3RhdCA9IHBsYXllci5zdGF0aXN0aWNzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHRlYW1JbmZvKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJJbmZvKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJTdGF0KTtcblxuICAgIGNvbnN0IG1vZGFsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1ib3hcIik7XG4gICAgLy9jaGVjayBpZiBnb2Fsa2VlcGVyIHJlZG5lciBvbmUgdGhpbmcgLCBmb3IgZmllbGQgcGxheWVyLSBhbm90aGVyXG5cbiAgICBjb25zdCByaWdodEJveERhdGEgPSAocGxheWVyU3RhdC5nYW1lcy5wb3NpdGlvbiA9PT0gJ0cnKSA/XG4gICAgICAgIGA8ZGl2IGNsYXNzPSdzYXZlcy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TYXZlczogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLnNhdmVzID8gcGxheWVyU3RhdC5nb2Fscy5zYXZlcyA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb25jZWRlZC1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5Hb2FscyBjb25jZWRlZDogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLmNvbmNlZGVkID8gcGxheWVyU3RhdC5nb2Fscy5jb25jZWRlZCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgIFxuICAgIDogXG4gICAgICAgIGA8ZGl2IGNsYXNzPSdkdWVscy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5EdWVscyBXb24vVG90YWw6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5kdWVscy53b24gPyBwbGF5ZXJTdGF0LmR1ZWxzLndvbiA6IDB9IC8gJHtwbGF5ZXJTdGF0LmR1ZWxzLnRvdGFsID8gcGxheWVyU3RhdC5kdWVscy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXNzZXMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UGFzc2VzKEFjY3VyYWN5JSk6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5wYXNzZXMudG90YWwgPyBwbGF5ZXJTdGF0LnBhc3Nlcy50b3RhbCA6IDB9ICgke3BsYXllclN0YXQucGFzc2VzLmFjY3VyYWN5ID8gcGxheWVyU3RhdC5wYXNzZXMuYWNjdXJhY3kgOiAwfSUpPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaG90cy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TaG90czogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LnNob3RzLnRvdGFsID8gcGxheWVyU3RhdC5zaG90cy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz0nZ29hbHMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+R29hbHM6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nb2Fscy50b3RhbCA/IHBsYXllclN0YXQuZ29hbHMudG90YWwgOiAwfSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgXG4gICAgO1xuXG4gICAgbW9kYWxCb3guaW5uZXJIVE1MID1cbiAgICAgICAgYCAgIDxkaXYgY2xhc3M9J2xlZnQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbC1pbWctYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXllckluZm8ucGhvdG99XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsLW5hbWUnPiR7cGxheWVySW5mby5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLW51bWJlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+TnVtYmVyOiAke3BsYXllclN0YXQuZ2FtZXMubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLWJveCByb3cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UG9zaXRpb246IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdhbWVzLnBvc2l0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JhdGluZy1ib3ggcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlJhdGluZzogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZ2FtZXMucmF0aW5nID8gcGxheWVyU3RhdC5nYW1lcy5yYXRpbmcgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21pbnV0ZXMtYm94IHJvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5NaW51dGVzOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nYW1lcy5taW51dGVzID8gcGxheWVyU3RhdC5nYW1lcy5taW51dGVzIDogMH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICR7cmlnaHRCb3hEYXRhfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICBcbiAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyU3RhdDsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHJlbmRlclN0YW5kaW5ncz0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YW5kaW5nc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhbmRpbmdzXCIpXG4gICAgY29uc3Qgc3RhbmRpbmdCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YW5kaW5nQm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXN0YW5kaW5nLWJveFwiKTtcbiAgICBzdGFuZGluZ3NEaXYuYXBwZW5kKHN0YW5kaW5nQm94RGl2KTtcbiAgICBcbiAgICBheGlvcy5nZXQoJy4vc3RhbmRpbmdzJykudGhlbigocmVzKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0ZWFtc0FyciA9IHJlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5zdGFuZGluZ3NbMF07XG4gICAgICAgIHRlYW1zQXJyLmZvckVhY2goKHRlYW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0ZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1SYW5rQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1Qb2ludHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgdGVhbVJhbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZWFtTmFtZURpdi5pbm5lclRleHQgPSB0ZWFtLnRlYW0ubmFtZTtcbiAgICAgICAgICAgIHRlYW1Qb2ludHNEaXYuaW5uZXJUZXh0ID0gdGVhbS5wb2ludHM7XG4gICAgICAgICAgICB0ZWFtUmFua0Rpdi5pbm5lclRleHQgPSB0ZWFtLnJhbms7XG5cbiAgICAgICAgICAgIHRlYW1EaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tc3RhbmRpbmctcm93XCIpO1xuICAgICAgICAgICAgdGVhbVJhbmtCb3hEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcmFuay1ib3hcIik7XG4gICAgICAgICAgICB0ZWFtUmFua0Rpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1yYW5rXCIpO1xuXG4gICAgICAgICAgICB0ZWFtUmFua0JveERpdi5hcHBlbmQodGVhbVJhbmtEaXYsIHRlYW1OYW1lRGl2KVxuICAgICAgICAgICAgdGVhbURpdi5hcHBlbmQodGVhbVJhbmtCb3hEaXYsIHRlYW1Qb2ludHNEaXYpO1xuICAgICAgICAgICAgc3RhbmRpbmdCb3hEaXYuYXBwZW5kKHRlYW1EaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTdGFuZGluZ3M7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==