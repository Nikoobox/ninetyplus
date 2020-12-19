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
  // console.log('Hi from game!');
  var leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.innerHTML = "<div></div>";
  leagueInfoDiv.classList.remove('left');
  var allGamesContentDiv = document.getElementById("all-games");
  allGamesContentDiv.innerHTML = "<div id='one-game'></div>";
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./game?fixtureId=".concat(fixtureId)).then(function (res) {
    // console.log(res.data.response);
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





var renderGames = function renderGames(round) {
  // console.log(round)
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
    leagueInfoDiv.innerHTML = "\n        <div class='league-box'>\n            <div class='country-box'>\n                <div class='name'>".concat(res.data.response[0].league.country, "</div>\n                <div class='flag'>\n                    <img src=\"").concat(res.data.response[0].league.flag, "\"/>\n                </div>\n            </div>\n            <div class='logo-box'>\n            <img src=\"").concat(res.data.response[0].league.logo, "\"/>\n            </div>\n            <div class='league-name'>\n            ").concat(res.data.response[0].league.name, "\n            </div>\n            <div class='season-box'>\n                ").concat(res.data.response[0].league.season, "-").concat(nextSeason, "\n            </div>\n          \n            <div class='epl-link'>\n                <a href='https://www.premierleague.com/' rel='noopener noreferrer' target=\"_blank\">Visit EPL</a>   \n            </div>\n        </div>\n        ");
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
      var gameId = fix.fixture.id; // console.log(`gameStatus is: ${gameStatus} ${team1} vs ${team2}`)
      // to check if at leat one game is live to enable updates

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
    });
    var buttonLiveUpdates = document.createElement("div");
    buttonLiveUpdates.classList.add('live-updates-box');
    allGamesBoxDiv.appendChild(buttonLiveUpdates); // console.log('from games:');
    // console.log(localStorage.getItem('localStInterval'));

    if (localStorage.getItem('localStCounter') !== null) {
      var newCounter = localStorage.getItem('localStCounter');
      newCounter++;
      localStorage.setItem('localStCounter', newCounter); // console.log(`newCounter is --> ${newCounter}`)

      if (newCounter === 3) {
        clearInterval(localStorage.getItem('localStInterval'));
        localStorage.clear(); // console.log('Local Storage was cleared')
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


var gamesRefresh = function gamesRefresh(btnLiveUpdates, btnNoLiveUpdates, round) {
  var interval;
  btnLiveUpdates.addEventListener('click', function () {
    Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(round);
    interval = setInterval(function () {
      return Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(round);
    }, 10000);
    localStorage.setItem('localStInterval', interval);
    var counter = 0;
    localStorage.setItem('localStCounter', counter); // console.log(`interval is ${interval}`)
    // console.log(`Local storage interval value is ${localStorage.getItem('localStInterval')}`)
  });
  btnNoLiveUpdates.addEventListener('click', function () {
    clearInterval(localStorage.getItem('localStInterval'));
    localStorage.removeItem('localStInterval'); // console.log(`after clearing, Local storage interval is ${localStorage.getItem('localStInterval')}`);

    btnLiveUpdates.disabled = false;
    btnNoLiveUpdates.setAttribute('disabled', true);
  });

  if (localStorage.getItem('localStInterval') !== null) {
    // console.log('if')
    // console.log(localStorage.getItem('localStInterval'))
    btnLiveUpdates.setAttribute('disabled', true);
    btnNoLiveUpdates.disabled = false;
  } else {
    // console.log('else')
    // console.log(localStorage.getItem('localStInterval'))
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
    votingBoxDiv.innerHTML = "\n            <div class='voting-row'>\n                <div class='votes1 vote'>".concat(vote1, "</div>\n                <div class='votes2 vote'>").concat(vote2, "</div>\n            </div>\n        ");
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
      }); // DATA IS NEW. CALL ADD

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpZWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jdXJyZW50Um91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lc1JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZXN0YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2V0Rml4dHVyZVBsYXllcnNTdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlclBsYXllck1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlclBsYXllclN0YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyVm90aW5nTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyVm90aW5nU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdGFuZGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2U0YWEiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnRSb3VuZCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImN1cnJlbnRSIiwiZGF0YSIsInJlc3BvbnNlIiwicmVuZGVyR2FtZXMiLCJyZW5kZXJTdGFuZGluZ3MiLCJuYXZiYXJMb2dvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyR2FtZUJ5SWQiLCJmaXh0dXJlSWQiLCJzY29yZTEiLCJzY29yZTIiLCJsZWFndWVJbmZvRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhbGxHYW1lc0NvbnRlbnREaXYiLCJjbGVhckludGVydmFsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyIiwib25lR2FtZUNvbnRlbnREaXYiLCJmaWVsZERpdiIsImNyZWF0ZUVsZW1lbnQiLCJzcXVhZHNEaXYiLCJhZGQiLCJhcHBlbmQiLCJmaWVsZCIsImdrMURpdiIsImRlZjFEaXYiLCJtaWQxRGl2IiwiZndkMURpdiIsImdrMkRpdiIsImRlZjJEaXYiLCJtaWQyRGl2IiwiZndkMkRpdiIsInRlYW0xRGl2IiwidGVhbSIsIm5hbWUiLCJsb2dvIiwidGVhbTJEaXYiLCJmb3JFYWNoIiwiY29tbWFuZCIsImNpZHgiLCJzdGFydFhJIiwicGxyIiwicGlkeCIsInBsYXllckRpdiIsInBsYXllciIsIm51bWJlciIsInBvcyIsImRpdiIsInNldEF0dHJpYnV0ZSIsImlkIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJHYW1lU3RhdCIsImdldEZpeHR1cmVQbGF5ZXJzU3RhdCIsIkZpeHR1cmVQbGF5ZXJzU3RhdCIsInJlbmRlclBsYXllck1vZGFsIiwicm91bmQiLCJhbGxHYW1lc0RpdiIsImFsbEdhbWVzQm94RGl2IiwiZml4dHVyZXNBcnIiLCJzZWN0aW9uTmFtZURpdiIsImxpdmVHYW1lc1N0YXR1cyIsIm5leHRTZWFzb24iLCJsZWFndWUiLCJzZWFzb24iLCJjb3VudHJ5IiwiZmxhZyIsImN1cnJlbnRSb3VuZFN0cmluZyIsInNwbGl0IiwicG9wIiwicHJldlJvdW5kIiwicGFyc2VJbnQiLCJuZXh0Um91bmQiLCJwUm91bmQiLCJuUm91bmQiLCJwcmV2aW91c1JvdW5kIiwiZm9sbG93aW5nUm91bmQiLCJnYW1lTGl2ZVN0YXR1cyIsImdhbWVOb3RMaXZlU3RhdHVzIiwiZml4IiwiaWR4IiwidGVhbTEiLCJ0ZWFtcyIsImhvbWUiLCJsb2dvMSIsInRlYW0yIiwiYXdheSIsImxvZ28yIiwiZ29hbHMiLCJnYW1lU3RhdHVzIiwiZml4dHVyZSIsInN0YXR1cyIsInNob3J0IiwiZ2FtZUlkIiwiaW5jbHVkZXMiLCJmaXh0dXJlUm93RGl2IiwiZ2FtZVN0YXR1c1Jvd0RpdiIsInNjb3JlQm94RGl2IiwidGVtcCIsInZvdGVCdG5EaXNwbGF5IiwibG9uZyIsInJlbmRlclZvdGluZ01vZGFsIiwiYnV0dG9uTGl2ZVVwZGF0ZXMiLCJuZXdDb3VudGVyIiwic2V0SXRlbSIsImJ0bkxpdmVVcGRhdGVzIiwiYnRuTm9MaXZlVXBkYXRlcyIsImdhbWVzUmVmcmVzaCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb3VudGVyIiwicmVtb3ZlSXRlbSIsImRpc2FibGVkIiwic3RhbmRpbmdzRGl2IiwiZ2FtZVN0YXREaXYiLCJ0ZWFtc1N0YXQiLCJwb3NzZXNzaW9uIiwic2hvdHNPbiIsInNob3RzT2ZmIiwiZm91bHMiLCJ5YyIsInRlYW1TdGF0IiwiaWR4MSIsInN0YXRpc3RpY3MiLCJzdGF0IiwidHlwZSIsInB1c2giLCJyZW5kZXJTdGF0cyIsInN0YXQxIiwidG90YWwiLCJpZE5hbWUiLCJlbGVtIiwic3R5bGUiLCJ3aWR0aCIsInJhdGlvIiwidmFsdWUiLCJtb2RhbERpdiIsIm1vZGFsIiwicGxheWVyc1RvQ2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNwbGF5IiwicGxheWVySWQiLCJnZXRBdHRyaWJ1dGUiLCJ0ZWFtSWQiLCJwbGF5ZXJJZG0iLCJ0ZWFtSWRtIiwicmVuZGVyUGxheWVyU3RhdCIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsImZpeHR1cmVJZG0iLCJGaXh0dXJlUGxheWVyc1N0YXRtIiwidGVhbUluZm8iLCJwbGF5ZXJJbmZvIiwicGxheWVyU3RhdCIsInNxdWFkIiwicGxheWVycyIsIm1vZGFsQm94IiwicmlnaHRCb3hEYXRhIiwiZ2FtZXMiLCJwb3NpdGlvbiIsInNhdmVzIiwiY29uY2VkZWQiLCJkdWVscyIsIndvbiIsInBhc3NlcyIsImFjY3VyYWN5Iiwic2hvdHMiLCJwaG90byIsInJhdGluZyIsIm1pbnV0ZXMiLCJ0MXJlZiIsInQycmVmIiwibW9kYWxWIiwic3BhblYiLCJ2b3RpbmdCdG5zIiwiYnRuIiwibmFtZTEiLCJuYW1lMiIsImdJZCIsInJlbmRlclZvdGluZ1N0YXQiLCJtb2RhbFZCb3giLCJ2b3RlRGF0YTEiLCJ2b3RlRGF0YTIiLCJlIiwiZ2V0RGF0YSIsImFkZERhdGEiLCJ2b3RlMSIsInZvdGUyIiwiZGIiLCJjb2xsZWN0aW9uIiwicmVuZGVyVm90ZXMiLCJ2b3RpbmdCb3hEaXYiLCJ1cGRhdGVEYXRhIiwia2V5SWQiLCJkb2MiLCJ1cGRhdGUiLCJ2YWwiLCJudW0iLCJ1cGRhdGVkIiwiZG9jcyIsIk9iamVjdCIsImtleXMiLCJ2b3RlcyIsInZvdGUiLCJuZXdWb3RlMSIsIm5ld0RhdGEiLCJuZXdWb3RlMiIsInN0YW5kaW5nQm94RGl2IiwidGVhbXNBcnIiLCJzdGFuZGluZ3MiLCJ0ZWFtRGl2IiwidGVhbVJhbmtCb3hEaXYiLCJ0ZWFtTmFtZURpdiIsInRlYW1Qb2ludHNEaXYiLCJ0ZWFtUmFua0RpdiIsInBvaW50cyIsInJhbmsiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7QUNBakMsaUJBQWlCLG1CQUFPLENBQUMsc0RBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEMsYUFBYSxt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QVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLGdFQUFnQjtBQUNuQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsR0FBRyxTQUFTO0FBQzVDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNwWEE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMvTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUM5QztBQUVBO0FBQ0FDLHVFQUFZLEdBSmtDLENBTTlDO0FBQ0E7QUFHQTtBQUNBO0FBQ0gsQ0FaRCxFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFFdkJDLDhDQUFLLENBQUNDLEdBQU4saUJBQTBCQyxJQUExQixDQUErQixVQUFDQyxHQUFELEVBQVM7QUFDcEMsUUFBTUMsUUFBUSxHQUFHRCxHQUFHLENBQUNFLElBQUosQ0FBU0MsUUFBVCxDQUFrQixDQUFsQixDQUFqQixDQURvQyxDQUVwQzs7QUFFQUMsMERBQVcsQ0FBQ0gsUUFBRCxDQUFYO0FBQ0FJLDhEQUFlLEdBTHFCLENBTXBDOztBQUNBLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0FGLGNBQVUsQ0FBQ1gsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUM7QUFBQSxhQUFNUyxzREFBVyxDQUFDSCxRQUFELENBQWpCO0FBQUEsS0FBckM7QUFFSCxHQVZELEVBVUdRLEtBVkgsQ0FVUyxVQUFBQyxHQUFHLEVBQUk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDSCxHQVpEO0FBYUgsQ0FmRDs7QUFpQmVkLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWlCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUErQjtBQUNsRDtBQUVBLE1BQU1DLGFBQWEsR0FBR1YsUUFBUSxDQUFDVyxjQUFULENBQXdCLGFBQXhCLENBQXRCO0FBQ0FELGVBQWEsQ0FBQ0UsU0FBZCxHQUEwQixhQUExQjtBQUNBRixlQUFhLENBQUNHLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLE1BQS9CO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUdmLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixXQUF4QixDQUEzQjtBQUNBSSxvQkFBa0IsQ0FBQ0gsU0FBbkIsR0FBK0IsMkJBQS9CO0FBRUF0Qiw4Q0FBSyxDQUFDQyxHQUFOLDRCQUE4QmdCLFNBQTlCLEdBQTJDZixJQUEzQyxDQUFnRCxVQUFDQyxHQUFELEVBQVM7QUFDckQ7QUFFQTtBQUNBdUIsaUJBQWEsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFELENBQWI7QUFDQUQsZ0JBQVksQ0FBQ0UsS0FBYjtBQUVBLFFBQU1DLGlCQUFpQixHQUFHcEIsUUFBUSxDQUFDVyxjQUFULENBQXdCLFVBQXhCLENBQTFCO0FBQ0EsUUFBTVUsUUFBUSxHQUFHckIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBLFFBQU1DLFNBQVMsR0FBR3ZCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFFQUQsWUFBUSxDQUFDUixTQUFULENBQW1CVyxHQUFuQixDQUF1QixXQUF2QjtBQUNBRCxhQUFTLENBQUNWLFNBQVYsQ0FBb0JXLEdBQXBCLENBQXdCLFdBQXhCO0FBRUFELGFBQVMsQ0FBQ1gsU0FBVjtBQUtBUSxxQkFBaUIsQ0FBQ0ssTUFBbEIsQ0FBeUJGLFNBQXpCO0FBRUFGLFlBQVEsQ0FBQ1QsU0FBVCx5RkFHOEJjLHlEQUg5QjtBQWVBTixxQkFBaUIsQ0FBQ0ssTUFBbEIsQ0FBeUJKLFFBQXpCO0FBRUEsUUFBTU0sTUFBTSxHQUFHM0IsUUFBUSxDQUFDVyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxRQUFNaUIsT0FBTyxHQUFHNUIsUUFBUSxDQUFDVyxjQUFULENBQXdCLE9BQXhCLENBQWhCO0FBQ0EsUUFBTWtCLE9BQU8sR0FBRzdCLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixPQUF4QixDQUFoQjtBQUNBLFFBQU1tQixPQUFPLEdBQUc5QixRQUFRLENBQUNXLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBaEI7QUFDQSxRQUFNb0IsTUFBTSxHQUFHL0IsUUFBUSxDQUFDVyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxRQUFNcUIsT0FBTyxHQUFHaEMsUUFBUSxDQUFDVyxjQUFULENBQXdCLE9BQXhCLENBQWhCO0FBQ0EsUUFBTXNCLE9BQU8sR0FBR2pDLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixPQUF4QixDQUFoQjtBQUNBLFFBQU11QixPQUFPLEdBQUdsQyxRQUFRLENBQUNXLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBaEIsQ0E3Q3FELENBK0NyRDs7QUFDQSxRQUFNd0IsUUFBUSxHQUFHbkMsUUFBUSxDQUFDVyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0l3QixZQUFRLENBQUN2QixTQUFULHNIQUVvQ25CLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCd0MsSUFBckIsQ0FBMEJDLElBRjlELDZHQUk0QjVDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCd0MsSUFBckIsQ0FBMEJFLElBSnREO0FBUUosUUFBTUMsUUFBUSxHQUFHdkMsUUFBUSxDQUFDVyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0k0QixZQUFRLENBQUMzQixTQUFULHNIQUVvQ25CLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCd0MsSUFBckIsQ0FBMEJDLElBRjlELGdIQUlnQzVDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCd0MsSUFBckIsQ0FBMEJFLElBSjFELCtFQTFEaUQsQ0FrRXJEOztBQUNBN0MsT0FBRyxDQUFDRSxJQUFKLENBQVNDLFFBQVQsQ0FBa0I0QyxPQUFsQixDQUEwQixVQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDekNELGFBQU8sQ0FBQ0UsT0FBUixDQUFnQkgsT0FBaEIsQ0FBd0IsVUFBQ0ksR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDbkMsWUFBSUgsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDWixjQUFNSSxTQUFTLEdBQUc5QyxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0F3QixtQkFBUyxDQUFDakMsU0FBVixDQUFvQlcsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDQXNCLG1CQUFTLENBQUNsQyxTQUFWLDJEQUMwQmdDLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxNQURyQywrREFFd0JKLEdBQUcsQ0FBQ0csTUFBSixDQUFXVixJQUZuQyxrRUFHMEJPLEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxHQUhyQzs7QUFLQSxjQUFHTCxHQUFHLENBQUNHLE1BQUosQ0FBV0UsR0FBWCxLQUFtQixHQUF0QixFQUEwQjtBQUN0QixnQkFBTUMsR0FBRyxHQUFHbEQsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0E0QixlQUFHLENBQUNyQyxTQUFKLENBQWNXLEdBQWQsQ0FBa0IsS0FBbEIsRUFBeUIsV0FBekI7QUFDQTBCLGVBQUcsQ0FBQ0MsWUFBSixDQUFpQixVQUFqQixFQUE2QlAsR0FBRyxDQUFDRyxNQUFKLENBQVdLLEVBQXhDO0FBQ0FGLGVBQUcsQ0FBQ0MsWUFBSixDQUFpQixRQUFqQixFQUEyQlYsT0FBTyxDQUFDTCxJQUFSLENBQWFnQixFQUF4QztBQUNBRixlQUFHLENBQUNHLFNBQUosR0FBZVQsR0FBRyxDQUFDRyxNQUFKLENBQVdDLE1BQTFCO0FBQ0FyQixrQkFBTSxDQUFDRixNQUFQLENBQWN5QixHQUFkO0FBQ0gsV0FQRCxNQU9PLElBQUlOLEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxHQUFYLEtBQW1CLEdBQXZCLEVBQTJCO0FBQzlCLGdCQUFNQyxJQUFHLEdBQUdsRCxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQVo7O0FBQ0E0QixnQkFBRyxDQUFDckMsU0FBSixDQUFjVyxHQUFkLENBQWtCLEtBQWxCLEVBQXlCLFdBQXpCOztBQUNBMEIsZ0JBQUcsQ0FBQ0MsWUFBSixDQUFpQixVQUFqQixFQUE2QlAsR0FBRyxDQUFDRyxNQUFKLENBQVdLLEVBQXhDOztBQUNBRixnQkFBRyxDQUFDQyxZQUFKLENBQWlCLFFBQWpCLEVBQTJCVixPQUFPLENBQUNMLElBQVIsQ0FBYWdCLEVBQXhDOztBQUNBRixnQkFBRyxDQUFDRyxTQUFKLEdBQWdCVCxHQUFHLENBQUNHLE1BQUosQ0FBV0MsTUFBM0I7QUFDQXBCLG1CQUFPLENBQUNILE1BQVIsQ0FBZXlCLElBQWY7QUFDSCxXQVBNLE1BT0EsSUFBSU4sR0FBRyxDQUFDRyxNQUFKLENBQVdFLEdBQVgsS0FBbUIsR0FBdkIsRUFBNEI7QUFDL0IsZ0JBQU1DLEtBQUcsR0FBR2xELFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQTRCLGlCQUFHLENBQUNyQyxTQUFKLENBQWNXLEdBQWQsQ0FBa0IsS0FBbEIsRUFBeUIsV0FBekI7O0FBQ0EwQixpQkFBRyxDQUFDQyxZQUFKLENBQWlCLFVBQWpCLEVBQTZCUCxHQUFHLENBQUNHLE1BQUosQ0FBV0ssRUFBeEM7O0FBQ0FGLGlCQUFHLENBQUNDLFlBQUosQ0FBaUIsUUFBakIsRUFBMkJWLE9BQU8sQ0FBQ0wsSUFBUixDQUFhZ0IsRUFBeEM7O0FBQ0FGLGlCQUFHLENBQUNHLFNBQUosR0FBZ0JULEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxNQUEzQjtBQUNBbkIsbUJBQU8sQ0FBQ0osTUFBUixDQUFleUIsS0FBZjtBQUNILFdBUE0sTUFPQSxJQUFJTixHQUFHLENBQUNHLE1BQUosQ0FBV0UsR0FBWCxLQUFtQixHQUF2QixFQUE0QjtBQUMvQixnQkFBTUMsS0FBRyxHQUFHbEQsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFaOztBQUNBNEIsaUJBQUcsQ0FBQ3JDLFNBQUosQ0FBY1csR0FBZCxDQUFrQixLQUFsQixFQUF5QixXQUF6Qjs7QUFDQTBCLGlCQUFHLENBQUNDLFlBQUosQ0FBaUIsVUFBakIsRUFBNkJQLEdBQUcsQ0FBQ0csTUFBSixDQUFXSyxFQUF4Qzs7QUFDQUYsaUJBQUcsQ0FBQ0MsWUFBSixDQUFpQixRQUFqQixFQUEyQlYsT0FBTyxDQUFDTCxJQUFSLENBQWFnQixFQUF4Qzs7QUFDQUYsaUJBQUcsQ0FBQ0csU0FBSixHQUFnQlQsR0FBRyxDQUFDRyxNQUFKLENBQVdDLE1BQTNCO0FBQ0FsQixtQkFBTyxDQUFDTCxNQUFSLENBQWV5QixLQUFmO0FBQ0g7O0FBQ0RmLGtCQUFRLENBQUNtQixXQUFULENBQXFCUixTQUFyQjtBQUNILFNBdENELE1Bc0NPO0FBQ0gsY0FBTUEsVUFBUyxHQUFHOUMsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFsQjs7QUFDQXdCLG9CQUFTLENBQUNqQyxTQUFWLENBQW9CVyxHQUFwQixDQUF3QixRQUF4Qjs7QUFDQXNCLG9CQUFTLENBQUNsQyxTQUFWLDJEQUMwQmdDLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxNQURyQywrREFFd0JKLEdBQUcsQ0FBQ0csTUFBSixDQUFXVixJQUZuQyxrRUFHMEJPLEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxHQUhyQzs7QUFLQSxjQUFJTCxHQUFHLENBQUNHLE1BQUosQ0FBV0UsR0FBWCxLQUFtQixHQUF2QixFQUE0QjtBQUN4QixnQkFBTUMsS0FBRyxHQUFHbEQsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFaOztBQUNBNEIsaUJBQUcsQ0FBQ3JDLFNBQUosQ0FBY1csR0FBZCxDQUFrQixLQUFsQixFQUF3QixXQUF4Qjs7QUFDQTBCLGlCQUFHLENBQUNDLFlBQUosQ0FBaUIsVUFBakIsRUFBNkJQLEdBQUcsQ0FBQ0csTUFBSixDQUFXSyxFQUF4Qzs7QUFDQUYsaUJBQUcsQ0FBQ0MsWUFBSixDQUFpQixRQUFqQixFQUEyQlYsT0FBTyxDQUFDTCxJQUFSLENBQWFnQixFQUF4Qzs7QUFDQUYsaUJBQUcsQ0FBQ0csU0FBSixHQUFnQlQsR0FBRyxDQUFDRyxNQUFKLENBQVdDLE1BQTNCO0FBQ0FqQixrQkFBTSxDQUFDTixNQUFQLENBQWN5QixLQUFkO0FBQ0gsV0FQRCxNQU9PLElBQUlOLEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxHQUFYLEtBQW1CLEdBQXZCLEVBQTRCO0FBQy9CLGdCQUFNQyxLQUFHLEdBQUdsRCxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQVo7O0FBQ0E0QixpQkFBRyxDQUFDckMsU0FBSixDQUFjVyxHQUFkLENBQWtCLEtBQWxCLEVBQXlCLFdBQXpCOztBQUNBMEIsaUJBQUcsQ0FBQ0MsWUFBSixDQUFpQixVQUFqQixFQUE2QlAsR0FBRyxDQUFDRyxNQUFKLENBQVdLLEVBQXhDOztBQUNBRixpQkFBRyxDQUFDQyxZQUFKLENBQWlCLFFBQWpCLEVBQTJCVixPQUFPLENBQUNMLElBQVIsQ0FBYWdCLEVBQXhDOztBQUNBRixpQkFBRyxDQUFDRyxTQUFKLEdBQWdCVCxHQUFHLENBQUNHLE1BQUosQ0FBV0MsTUFBM0I7QUFDQWhCLG1CQUFPLENBQUNQLE1BQVIsQ0FBZXlCLEtBQWY7QUFDSCxXQVBNLE1BT0EsSUFBSU4sR0FBRyxDQUFDRyxNQUFKLENBQVdFLEdBQVgsS0FBbUIsR0FBdkIsRUFBNEI7QUFDL0IsZ0JBQU1DLEtBQUcsR0FBR2xELFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQTRCLGlCQUFHLENBQUNyQyxTQUFKLENBQWNXLEdBQWQsQ0FBa0IsS0FBbEIsRUFBeUIsV0FBekI7O0FBQ0EwQixpQkFBRyxDQUFDQyxZQUFKLENBQWlCLFVBQWpCLEVBQTZCUCxHQUFHLENBQUNHLE1BQUosQ0FBV0ssRUFBeEM7O0FBQ0FGLGlCQUFHLENBQUNDLFlBQUosQ0FBaUIsUUFBakIsRUFBMkJWLE9BQU8sQ0FBQ0wsSUFBUixDQUFhZ0IsRUFBeEM7O0FBQ0FGLGlCQUFHLENBQUNHLFNBQUosR0FBZ0JULEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxNQUEzQjtBQUNBZixtQkFBTyxDQUFDUixNQUFSLENBQWV5QixLQUFmO0FBQ0gsV0FQTSxNQU9BLElBQUlOLEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxHQUFYLEtBQW1CLEdBQXZCLEVBQTRCO0FBQy9CLGdCQUFNQyxLQUFHLEdBQUdsRCxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQVo7O0FBQ0E0QixpQkFBRyxDQUFDckMsU0FBSixDQUFjVyxHQUFkLENBQWtCLEtBQWxCLEVBQXlCLFdBQXpCOztBQUNBMEIsaUJBQUcsQ0FBQ0MsWUFBSixDQUFpQixVQUFqQixFQUE2QlAsR0FBRyxDQUFDRyxNQUFKLENBQVdLLEVBQXhDOztBQUNBRixpQkFBRyxDQUFDQyxZQUFKLENBQWlCLFFBQWpCLEVBQTJCVixPQUFPLENBQUNMLElBQVIsQ0FBYWdCLEVBQXhDOztBQUNBRixpQkFBRyxDQUFDRyxTQUFKLEdBQWdCVCxHQUFHLENBQUNHLE1BQUosQ0FBV0MsTUFBM0I7QUFDQWQsbUJBQU8sQ0FBQ1QsTUFBUixDQUFleUIsS0FBZjtBQUNIOztBQUNEWCxrQkFBUSxDQUFDZSxXQUFULENBQXFCUixVQUFyQixFQUFnQ3ZDLFNBQWhDO0FBQ0g7QUFDSixPQTlFRDtBQStFSCxLQWhGRDtBQWtGQWdELDZEQUFjLENBQUNoRCxTQUFELEVBQVlDLE1BQVosRUFBb0JDLE1BQXBCLENBQWQ7QUFFQStDLDBFQUFxQixDQUFDakQsU0FBRCxDQUFyQixDQUFpQ2YsSUFBakMsQ0FBc0MsVUFBQ2lFLGtCQUFELEVBQXdCO0FBQzFEO0FBQ0FDLHdFQUFpQixDQUFDbkMsU0FBRCxFQUFZa0Msa0JBQVosRUFBZ0NsRCxTQUFoQyxDQUFqQjtBQUNILEtBSEQ7QUFNSCxHQTdKRCxFQTZKR0wsS0E3SkgsQ0E2SlMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsR0EvSkQ7QUFnS0gsQ0ExS0Q7O0FBNEtlRyw2RUFBZixFOzs7Ozs7Ozs7Ozs7QUNsTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzhELEtBQUQsRUFBVztBQUMzQjtBQUNBLE1BQU1DLFdBQVcsR0FBRzVELFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixXQUF4QixDQUFwQjtBQUNBLE1BQU1rRCxjQUFjLEdBQUc3RCxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0FzQyxhQUFXLENBQUNoRCxTQUFaLEdBQXdCLGFBQXhCO0FBQ0EsTUFBTUYsYUFBYSxHQUFHVixRQUFRLENBQUNXLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBdEI7QUFDQUQsZUFBYSxDQUFDRyxTQUFkLENBQXdCVyxHQUF4QixDQUE0QixNQUE1QjtBQUVBbEMsOENBQUssQ0FBQ0MsR0FBTix5QkFBMkJvRSxLQUEzQixHQUFvQ25FLElBQXBDLENBQXlDLFVBQUNDLEdBQUQsRUFBUztBQUM5QztBQUNBLFFBQU1xRSxXQUFXLEdBQUdyRSxHQUFHLENBQUNFLElBQUosQ0FBU0MsUUFBN0I7QUFDQSxRQUFNbUUsY0FBYyxHQUFHL0QsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUF2QjtBQUNBeUMsa0JBQWMsQ0FBQ2xELFNBQWYsQ0FBeUJXLEdBQXpCLENBQTZCLGNBQTdCO0FBRUEsUUFBSXdDLGVBQWUsR0FBRyxLQUF0QjtBQUVBLFFBQU1DLFVBQVUsR0FBR3hFLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCc0UsTUFBckIsQ0FBNEJDLE1BQTVCLEdBQXFDLENBQXhEO0FBRUF6RCxpQkFBYSxDQUFDRSxTQUFkLDBIQUc0Qm5CLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCc0UsTUFBckIsQ0FBNEJFLE9BSHhELHdGQUt3QjNFLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCc0UsTUFBckIsQ0FBNEJHLElBTHBELDBIQVNnQjVFLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCc0UsTUFBckIsQ0FBNEI1QixJQVQ1QywwRkFZTTdDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCc0UsTUFBckIsQ0FBNEI3QixJQVpsQyx5RkFlVTVDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCc0UsTUFBckIsQ0FBNEJDLE1BZnRDLGNBZWdERixVQWZoRDtBQXdCQSxRQUFJSyxrQkFBa0IsR0FBRzdFLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCc0UsTUFBckIsQ0FBNEJQLEtBQXJEO0FBQ0EsUUFBSXRFLFlBQVksYUFBTWlGLGtCQUFrQixDQUFDQyxLQUFuQixDQUF5QixHQUF6QixFQUE4QkMsR0FBOUIsRUFBTixNQUFoQjtBQUNBLFFBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDckYsWUFBRCxDQUFSLEdBQXlCLENBQXpDO0FBQ0EsUUFBSXNGLFNBQVMsR0FBR0QsUUFBUSxDQUFDckYsWUFBRCxDQUFSLEdBQXlCLENBQXpDO0FBRUEwRSxrQkFBYyxDQUFDbkQsU0FBZixtRkFFeUI2RCxTQUZ6QiwyR0FLNEJwRixZQUw1QixxR0FRc0JzRixTQVJ0QjtBQVdBZixlQUFXLENBQUNuQyxNQUFaLENBQW1Cc0MsY0FBbkI7QUFFQSxRQUFNYSxNQUFNLDhCQUF1QkgsU0FBdkIsQ0FBWjtBQUNBLFFBQU1JLE1BQU0sOEJBQXVCRixTQUF2QixDQUFaO0FBQ0EsUUFBTUcsYUFBYSxHQUFHOUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXRCO0FBQ0EsUUFBTThFLGNBQWMsR0FBRy9FLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUF2QjtBQUVBNkUsaUJBQWEsQ0FBQzFGLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsYUFBTVMsV0FBVyxDQUFDK0UsTUFBRCxDQUFqQjtBQUFBLEtBQXhDO0FBQ0FHLGtCQUFjLENBQUMzRixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QztBQUFBLGFBQU1TLFdBQVcsQ0FBQ2dGLE1BQUQsQ0FBakI7QUFBQSxLQUF6QztBQUVBaEIsa0JBQWMsQ0FBQ2hELFNBQWYsQ0FBeUJXLEdBQXpCLENBQTZCLGVBQTdCO0FBQ0FvQyxlQUFXLENBQUNuQyxNQUFaLENBQW1Cb0MsY0FBbkI7QUFDQSxRQUFNbUIsY0FBYyxHQUFHLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLEVBQXFCLEdBQXJCLEVBQXlCLElBQXpCLENBQXZCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUExQjtBQUVBbkIsZUFBVyxDQUFDdEIsT0FBWixDQUFvQixVQUFDMEMsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDOUIsVUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUMsSUFBVixDQUFlakQsSUFBN0I7QUFDQSxVQUFNa0QsS0FBSyxHQUFHTCxHQUFHLENBQUNHLEtBQUosQ0FBVUMsSUFBVixDQUFlaEQsSUFBN0I7QUFDQSxVQUFNa0QsS0FBSyxHQUFHTixHQUFHLENBQUNHLEtBQUosQ0FBVUksSUFBVixDQUFlcEQsSUFBN0I7QUFDQSxVQUFNcUQsS0FBSyxHQUFHUixHQUFHLENBQUNHLEtBQUosQ0FBVUksSUFBVixDQUFlbkQsSUFBN0I7QUFDQSxVQUFNOUIsTUFBTSxHQUFHMEUsR0FBRyxDQUFDUyxLQUFKLENBQVVMLElBQXpCO0FBQ0EsVUFBTTdFLE1BQU0sR0FBR3lFLEdBQUcsQ0FBQ1MsS0FBSixDQUFVRixJQUF6QjtBQUNBLFVBQU1HLFVBQVUsR0FBR1YsR0FBRyxDQUFDVyxPQUFKLENBQVlDLE1BQVosQ0FBbUJDLEtBQXRDO0FBQ0EsVUFBTUMsTUFBTSxHQUFHZCxHQUFHLENBQUNXLE9BQUosQ0FBWXpDLEVBQTNCLENBUjhCLENBUzlCO0FBRUE7O0FBQ0EsVUFBSTRCLGNBQWMsQ0FBQ2lCLFFBQWYsQ0FBd0JMLFVBQXhCLENBQUosRUFBeUM1QixlQUFlLEdBQUcsSUFBbEI7QUFFekMsVUFBTWtDLGFBQWEsR0FBR2xHLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7QUFDQSxVQUFNNkUsZ0JBQWdCLEdBQUduRyxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0EsVUFBTThFLFdBQVcsR0FBR3BHLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFFQTRFLG1CQUFhLENBQUNyRixTQUFkLENBQXdCVyxHQUF4QixDQUE0QixhQUE1QjtBQUNBMkUsc0JBQWdCLENBQUN0RixTQUFqQixDQUEyQlcsR0FBM0IsQ0FBK0IsaUJBQS9CO0FBQ0E0RSxpQkFBVyxDQUFDdkYsU0FBWixDQUFzQlcsR0FBdEIsQ0FBMEIsV0FBMUI7QUFFQTBFLG1CQUFhLENBQUMvQyxZQUFkLENBQTJCLFFBQTNCLEVBQXFDNkMsTUFBckMsRUF0QjhCLENBd0I5Qjs7QUFDQSxVQUFNSyxJQUFJLEdBQUlyQixjQUFjLENBQUNpQixRQUFmLENBQXdCTCxVQUF4QixLQUF3Q0EsVUFBVSxLQUFLLElBQXhELHVGQUVZcEYsTUFGWix3REFHWUMsTUFIWixnREFLViwwQkFMSCxDQXpCOEIsQ0FnQzlCOztBQUNBLFVBQU02RixjQUFjLEdBQUlWLFVBQVUsS0FBSyxJQUFoQiw4SUFJRFIsS0FKQyxnREFLREksS0FMQyxnREFNREQsS0FOQyxnREFPREcsS0FQQywyQ0FRTk0sTUFSTSxrRkFXYixFQVhWO0FBYUFFLG1CQUFhLENBQUN0RixTQUFkLDREQUNtQ3NFLEdBQUcsQ0FBQ1csT0FBSixDQUFZQyxNQUFaLENBQW1CUyxJQUR0RCwrRkFHd0JuQixLQUh4QixvRUFJa0NHLEtBSmxDLHlEQU1FYyxJQU5GLG1HQVFrQ1gsS0FSbEMsNkRBU3dCRixLQVR4QixxREFXRWMsY0FYRjs7QUFjQSxVQUFJVixVQUFVLEtBQUssSUFBbkIsRUFBeUI7QUFDckJNLHFCQUFhLENBQUM5RyxnQkFBZCxDQUErQixPQUEvQixFQUF3QztBQUFBLGlCQUFNa0IscURBQWMsQ0FBQzBGLE1BQUQsRUFBU3hGLE1BQVQsRUFBaUJDLE1BQWpCLENBQXBCO0FBQUEsU0FBeEM7QUFDSDs7QUFFRG9ELG9CQUFjLENBQUNQLFdBQWYsQ0FBMkI0QyxhQUEzQjtBQUNBTSx3RUFBaUIsQ0FBQzNDLGNBQUQsRUFBaUJ1QixLQUFqQixFQUF3QkksS0FBeEIsQ0FBakI7QUFDSCxLQWxFRDtBQW9FQSxRQUFNaUIsaUJBQWlCLEdBQUd6RyxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQTFCO0FBQ0FtRixxQkFBaUIsQ0FBQzVGLFNBQWxCLENBQTRCVyxHQUE1QixDQUFnQyxrQkFBaEM7QUFDQXFDLGtCQUFjLENBQUNQLFdBQWYsQ0FBMkJtRCxpQkFBM0IsRUF2SThDLENBeUk5QztBQUNBOztBQUVBLFFBQUl4RixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLE1BQTJDLElBQS9DLEVBQW9EO0FBQ2hELFVBQUl3RixVQUFVLEdBQUd6RixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQWpCO0FBQ0F3RixnQkFBVTtBQUNWekYsa0JBQVksQ0FBQzBGLE9BQWIsQ0FBcUIsZ0JBQXJCLEVBQXVDRCxVQUF2QyxFQUhnRCxDQUloRDs7QUFDQSxVQUFJQSxVQUFVLEtBQUssQ0FBbkIsRUFBcUI7QUFDakIxRixxQkFBYSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQUQsQ0FBYjtBQUNBRCxvQkFBWSxDQUFDRSxLQUFiLEdBRmlCLENBR2pCO0FBQ0g7QUFDSixLQXRKNkMsQ0F3SjlDOzs7QUFFSXNGLHFCQUFpQixDQUFDN0YsU0FBbEI7QUFJQSxRQUFNZ0csY0FBYyxHQUFHNUcsUUFBUSxDQUFDVyxjQUFULENBQXdCLGNBQXhCLENBQXZCO0FBQ0EsUUFBTWtHLGdCQUFnQixHQUFHN0csUUFBUSxDQUFDVyxjQUFULENBQXdCLGlCQUF4QixDQUF6QjtBQUVBbUcsaUVBQVksQ0FBQ0YsY0FBRCxFQUFpQkMsZ0JBQWpCLEVBQW1DbEQsS0FBbkMsQ0FBWixDQWpLMEMsQ0FrSzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJSCxHQTlLRCxFQThLR3pELEtBOUtILENBOEtTLFVBQUFDLEdBQUcsRUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEdBaExEO0FBaUxILENBekxEOztBQTJMZU4sMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDaE1BO0FBQUE7QUFBQTs7QUFFQSxJQUFNaUgsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0YsY0FBRCxFQUFpQkMsZ0JBQWpCLEVBQW1DbEQsS0FBbkMsRUFBNkM7QUFFOUQsTUFBSW9ELFFBQUo7QUFFQUgsZ0JBQWMsQ0FBQ3hILGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07QUFDM0NTLDBEQUFXLENBQUM4RCxLQUFELENBQVg7QUFDQW9ELFlBQVEsR0FBR0MsV0FBVyxDQUFDO0FBQUEsYUFBTW5ILHNEQUFXLENBQUM4RCxLQUFELENBQWpCO0FBQUEsS0FBRCxFQUEyQixLQUEzQixDQUF0QjtBQUNBMUMsZ0JBQVksQ0FBQzBGLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDSSxRQUF4QztBQUNBLFFBQUlFLE9BQU8sR0FBRyxDQUFkO0FBQ0FoRyxnQkFBWSxDQUFDMEYsT0FBYixDQUFxQixnQkFBckIsRUFBdUNNLE9BQXZDLEVBTDJDLENBTzNDO0FBQ0E7QUFDSCxHQVREO0FBV0FKLGtCQUFnQixDQUFDekgsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDN0M0QixpQkFBYSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQUQsQ0FBYjtBQUNBRCxnQkFBWSxDQUFDaUcsVUFBYixDQUF3QixpQkFBeEIsRUFGNkMsQ0FJN0M7O0FBRUFOLGtCQUFjLENBQUNPLFFBQWYsR0FBMEIsS0FBMUI7QUFDQU4sb0JBQWdCLENBQUMxRCxZQUFqQixDQUE4QixVQUE5QixFQUEwQyxJQUExQztBQUNILEdBUkQ7O0FBV0EsTUFBSWxDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsTUFBNEMsSUFBaEQsRUFBcUQ7QUFDakQ7QUFDQTtBQUNBMEYsa0JBQWMsQ0FBQ3pELFlBQWYsQ0FBNEIsVUFBNUIsRUFBd0MsSUFBeEM7QUFDQTBELG9CQUFnQixDQUFDTSxRQUFqQixHQUE0QixLQUE1QjtBQUNILEdBTEQsTUFLSztBQUNEO0FBQ0E7QUFDQVAsa0JBQWMsQ0FBQ08sUUFBZixHQUEwQixLQUExQjtBQUNBTixvQkFBZ0IsQ0FBQzFELFlBQWpCLENBQThCLFVBQTlCLEVBQTBDLElBQTFDO0FBQ0g7QUFFSixDQXRDRDs7QUF3Q2UyRCwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTXZELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2hELFNBQUQsRUFBWUMsTUFBWixFQUFvQkMsTUFBcEIsRUFBK0I7QUFDbEQ7QUFDQSxNQUFNVyxpQkFBaUIsR0FBR3BCLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixVQUF4QixDQUExQjtBQUNBLE1BQU15RyxZQUFZLEdBQUdwSCxRQUFRLENBQUNXLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBckIsQ0FIa0QsQ0FJbEQ7QUFDQTs7QUFDQXJCLDhDQUFLLENBQUNDLEdBQU4sZ0NBQWtDZ0IsU0FBbEMsR0FBK0NmLElBQS9DLENBQW9ELFVBQUNDLEdBQUQsRUFBUztBQUN6RDtBQUNBLFFBQU00SCxXQUFXLEdBQUdySCxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQXBCO0FBQ0ErRixlQUFXLENBQUN4RyxTQUFaLENBQXNCVyxHQUF0QixDQUEwQixlQUExQjtBQUNBNEYsZ0JBQVksQ0FBQzNGLE1BQWIsQ0FBb0I0RixXQUFwQjtBQUNBakcscUJBQWlCLENBQUNLLE1BQWxCLENBQXlCNEYsV0FBekI7QUFDQSxRQUFNQyxTQUFTLEdBQUc3SCxHQUFHLENBQUNFLElBQUosQ0FBU0MsUUFBM0I7QUFDQSxRQUFNMkgsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFDQSxRQUFNQyxFQUFFLEdBQUcsRUFBWDtBQUVBTCxhQUFTLENBQUM5RSxPQUFWLENBQWtCLFVBQUNvRixRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFDbENELGNBQVEsQ0FBQ0UsVUFBVCxDQUFvQnRGLE9BQXBCLENBQTRCLFVBQUF1RixJQUFJLEVBQUk7QUFDaEMsWUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsaUJBQWxCLEVBQXFDO0FBQ2pDVCxvQkFBVSxDQUFDVSxJQUFYLENBQWdCRixJQUFoQjtBQUNIOztBQUNELFlBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLGVBQWxCLEVBQWtDO0FBQzlCUixpQkFBTyxDQUFDUyxJQUFSLENBQWFGLElBQWI7QUFDSDs7QUFDRCxZQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBYyxnQkFBbEIsRUFBb0M7QUFDaENQLGtCQUFRLENBQUNRLElBQVQsQ0FBY0YsSUFBZDtBQUNIOztBQUNELFlBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3ZCTixlQUFLLENBQUNPLElBQU4sQ0FBV0YsSUFBWDtBQUNIOztBQUNELFlBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLGNBQWxCLEVBQWtDO0FBQzlCTCxZQUFFLENBQUNNLElBQUgsQ0FBUUYsSUFBUjtBQUNIO0FBQ0osT0FoQkQ7QUFpQkgsS0FsQkQsRUFieUQsQ0FnQ3pEOztBQUNBVixlQUFXLENBQUN6RyxTQUFaLDhSQU80Qm5CLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCd0MsSUFBckIsQ0FBMEJFLElBUHRELG9HQVN3QzdDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCd0MsSUFBckIsQ0FBMEJDLElBVGxFLHFFQVUwQzdCLE1BVjFDLG9MQWM0QmYsR0FBRyxDQUFDRSxJQUFKLENBQVNDLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUJ3QyxJQUFyQixDQUEwQkUsSUFkdEQsb0dBZ0J3QzdDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLEVBQXFCd0MsSUFBckIsQ0FBMEJDLElBaEJsRSxxRUFpQjBDNUIsTUFqQjFDOztBQTJDQSxRQUFNeUgsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLE1BQWYsRUFBMEI7QUFDMUMsVUFBSUMsSUFBSSxHQUFHdEksUUFBUSxDQUFDVyxjQUFULENBQXdCMEgsTUFBeEIsQ0FBWDs7QUFDQSxVQUFJQSxNQUFNLEtBQUssTUFBZixFQUFzQjtBQUNsQkMsWUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsR0FBbUJMLEtBQW5CO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsWUFBSU0sS0FBSyxHQUFJTixLQUFLLEdBQUdDLEtBQVQsR0FBa0IsR0FBOUI7QUFDQUUsWUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsR0FBbUJDLEtBQUssR0FBRyxHQUEzQjtBQUNIO0FBQ0osS0FSRDs7QUFTQVAsZUFBVyxDQUFDWCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNtQixLQUFmLEVBQXNCLENBQXRCLEVBQXlCLE1BQXpCLENBQVg7QUFDQVIsZUFBVyxDQUFDVixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdrQixLQUFaLEVBQW1CbEIsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXa0IsS0FBWCxHQUFtQmxCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2tCLEtBQWpELEVBQXdELFNBQXhELENBQVg7QUFDQVIsZUFBVyxDQUFDVCxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlpQixLQUFiLEVBQW9CakIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZaUIsS0FBWixHQUFvQmpCLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWWlCLEtBQXBELEVBQTJELFVBQTNELENBQVg7QUFDQVIsZUFBVyxDQUFDUixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQixLQUFWLEVBQWlCaEIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTZ0IsS0FBVCxHQUFpQmhCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2dCLEtBQTNDLEVBQWtELE9BQWxELENBQVg7QUFDQVIsZUFBVyxDQUFDUCxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU1lLEtBQVAsRUFBY2YsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNZSxLQUFOLEdBQWNmLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTWUsS0FBbEMsRUFBeUMsSUFBekMsQ0FBWDtBQUVILEdBM0ZELEVBMkZHeEksS0EzRkgsQ0EyRlMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsR0E3RkQ7QUE4RkgsQ0FwR0Q7O0FBc0dlb0QsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ2pELFNBQUQsRUFBZTtBQUN6QyxTQUFPakIsNENBQUssQ0FBQ0MsR0FBTiw0Q0FBOENnQixTQUE5QyxHQUEyRGYsSUFBM0QsQ0FBZ0UsVUFBQ0MsR0FBRCxFQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLFdBQU9BLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFoQjtBQUVILEdBTk0sRUFNSk0sS0FOSSxDQU1FLFVBQUFDLEdBQUcsRUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEdBUk0sQ0FBUDtBQVNILENBVkQ7O0FBWWVxRCxvRkFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDbkMsU0FBRCxFQUFZa0Msa0JBQVosRUFBZ0NsRCxTQUFoQyxFQUE4QztBQUNwRSxNQUFNb0ksUUFBUSxHQUFHM0ksUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBcUgsVUFBUSxDQUFDL0gsU0FBVDtBQWFBVyxXQUFTLENBQUMrQixXQUFWLENBQXNCcUYsUUFBdEI7QUFFQSxNQUFNQyxLQUFLLEdBQUc1SSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDtBQUNBLE1BQU00SSxjQUFjLEdBQUc3SSxRQUFRLENBQUM4SSxnQkFBVCxDQUEwQixZQUExQixDQUF2QjtBQUNBLE1BQU1DLElBQUksR0FBRy9JLFFBQVEsQ0FBQ2dKLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQWI7QUFFQUgsZ0JBQWMsQ0FBQ3JHLE9BQWYsQ0FBdUIsVUFBQ08sTUFBRCxFQUFZO0FBQy9CQSxVQUFNLENBQUMzRCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ25Dd0osV0FBSyxDQUFDTCxLQUFOLENBQVlVLE9BQVosR0FBc0IsT0FBdEI7QUFDQSxVQUFNQyxRQUFRLEdBQUduRyxNQUFNLENBQUNvRyxZQUFQLENBQW9CLFVBQXBCLENBQWpCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHckcsTUFBTSxDQUFDb0csWUFBUCxDQUFvQixRQUFwQixDQUFmO0FBRUEsVUFBTUUsU0FBUyxHQUFHM0UsUUFBUSxDQUFDd0UsUUFBRCxDQUExQjtBQUNBLFVBQU1JLE9BQU8sR0FBRzVFLFFBQVEsQ0FBQzBFLE1BQUQsQ0FBeEI7QUFDQUcsdUVBQWdCLENBQUNGLFNBQUQsRUFBWUMsT0FBWixFQUFxQi9JLFNBQXJCLEVBQWdDa0Qsa0JBQWhDLENBQWhCO0FBQ0gsS0FSRDtBQVVILEdBWEQ7O0FBYUFzRixNQUFJLENBQUNTLE9BQUwsR0FBZSxZQUFNO0FBQ2pCWixTQUFLLENBQUNMLEtBQU4sQ0FBWVUsT0FBWixHQUFzQixNQUF0QjtBQUNILEdBRkQ7O0FBSUE5SixRQUFNLENBQUNxSyxPQUFQLEdBQWlCLFVBQUNDLEtBQUQsRUFBVztBQUN4QixRQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0JkLEtBQXBCLEVBQTJCO0FBQ3ZCQSxXQUFLLENBQUNMLEtBQU4sQ0FBWVUsT0FBWixHQUFzQixNQUF0QjtBQUNIO0FBQ0osR0FKRDtBQUtILENBM0NEOztBQTZDZXZGLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQSxJQUFNNkYsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDRixTQUFELEVBQVlDLE9BQVosRUFBcUJLLFVBQXJCLEVBQWlDQyxtQkFBakMsRUFBeUQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsVUFBVSxHQUFDLEVBQWY7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFFQUgscUJBQW1CLENBQUNwSCxPQUFwQixDQUE0QixVQUFDd0gsS0FBRCxFQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFFBQUlBLEtBQUssQ0FBQzVILElBQU4sQ0FBV2dCLEVBQVgsS0FBa0JrRyxPQUF0QixFQUErQjtBQUMzQk8sY0FBUSxHQUFHRyxLQUFYO0FBQ0FBLFdBQUssQ0FBQ0MsT0FBTixDQUFjekgsT0FBZCxDQUFzQixVQUFDTyxNQUFELEVBQVNvQyxHQUFULEVBQWU7QUFDakMsWUFBSXBDLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjSyxFQUFkLEtBQXFCaUcsU0FBekIsRUFBbUM7QUFDL0JTLG9CQUFVLEdBQUcvRyxNQUFNLENBQUNBLE1BQXBCO0FBQ0FnSCxvQkFBVSxHQUFHaEgsTUFBTSxDQUFDK0UsVUFBUCxDQUFrQixDQUFsQixDQUFiO0FBQ0g7QUFDSixPQUxEO0FBTUg7O0FBQUE7QUFDSixHQWJELEVBWDhFLENBMEI5RTtBQUNBO0FBQ0E7O0FBRUEsTUFBTW9DLFFBQVEsR0FBR2xLLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixXQUF4QixDQUFqQixDQTlCOEUsQ0ErQjlFOztBQUVBLE1BQU13SixZQUFZLEdBQUlKLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQkMsUUFBakIsS0FBOEIsR0FBL0IsdUhBR1FOLFVBQVUsQ0FBQ3BFLEtBQVgsQ0FBaUIyRSxLQUFqQixHQUF5QlAsVUFBVSxDQUFDcEUsS0FBWCxDQUFpQjJFLEtBQTFDLEdBQWtELENBSDFELG1LQU9RUCxVQUFVLENBQUNwRSxLQUFYLENBQWlCNEUsUUFBakIsR0FBNEJSLFVBQVUsQ0FBQ3BFLEtBQVgsQ0FBaUI0RSxRQUE3QyxHQUF3RCxDQVBoRSxzS0FhUVIsVUFBVSxDQUFDUyxLQUFYLENBQWlCQyxHQUFqQixHQUF1QlYsVUFBVSxDQUFDUyxLQUFYLENBQWlCQyxHQUF4QyxHQUE4QyxDQWJ0RCxnQkFhNkRWLFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQnBDLEtBQWpCLEdBQXlCMkIsVUFBVSxDQUFDUyxLQUFYLENBQWlCcEMsS0FBMUMsR0FBa0QsQ0FiL0csb0tBaUJRMkIsVUFBVSxDQUFDVyxNQUFYLENBQWtCdEMsS0FBbEIsR0FBMEIyQixVQUFVLENBQUNXLE1BQVgsQ0FBa0J0QyxLQUE1QyxHQUFvRCxDQWpCNUQsZUFpQmtFMkIsVUFBVSxDQUFDVyxNQUFYLENBQWtCQyxRQUFsQixHQUE2QlosVUFBVSxDQUFDVyxNQUFYLENBQWtCQyxRQUEvQyxHQUEwRCxDQWpCNUgseUpBcUJRWixVQUFVLENBQUNhLEtBQVgsQ0FBaUJ4QyxLQUFqQixHQUF5QjJCLFVBQVUsQ0FBQ2EsS0FBWCxDQUFpQnhDLEtBQTFDLEdBQWtELENBckIxRCx3SkF5QlEyQixVQUFVLENBQUNwRSxLQUFYLENBQWlCeUMsS0FBakIsR0FBeUIyQixVQUFVLENBQUNwRSxLQUFYLENBQWlCeUMsS0FBMUMsR0FBa0QsQ0F6QjFELHNDQUFyQjtBQThCQThCLFVBQVEsQ0FBQ3RKLFNBQVQsaUhBRzRCa0osVUFBVSxDQUFDZSxLQUh2QyxnRkFLbUNmLFVBQVUsQ0FBQ3pILElBTDlDLHVIQU82QzBILFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQnBILE1BUDlELHNQQWFxQytHLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQkMsUUFidEQseUxBaUJxQ04sVUFBVSxDQUFDSyxLQUFYLENBQWlCVSxNQUFqQixHQUEwQmYsVUFBVSxDQUFDSyxLQUFYLENBQWlCVSxNQUEzQyxHQUFvRCxDQWpCekYsMkxBcUJxQ2YsVUFBVSxDQUFDSyxLQUFYLENBQWlCVyxPQUFqQixHQUEyQmhCLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQlcsT0FBNUMsR0FBc0QsQ0FyQjNGLCtEQXdCY1osWUF4QmQ7QUE4QkgsQ0E3RkQ7O0FBK0ZlWiwrRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBOztBQUVBLElBQU0vQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUMzQyxjQUFELEVBQWlCbUgsS0FBakIsRUFBd0JDLEtBQXhCLEVBQWtDO0FBQ3hELE1BQU10QyxRQUFRLEdBQUczSSxRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0FxSCxVQUFRLENBQUMvSCxTQUFUO0FBVUFpRCxnQkFBYyxDQUFDUCxXQUFmLENBQTJCcUYsUUFBM0I7QUFFQSxNQUFNdUMsTUFBTSxHQUFHbEwsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFmO0FBQ0EsTUFBTWtMLEtBQUssR0FBR25MLFFBQVEsQ0FBQ2dKLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLENBQWQ7QUFDQSxNQUFNb0MsVUFBVSxHQUFHcEwsUUFBUSxDQUFDOEksZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBbkI7QUFFQXNDLFlBQVUsQ0FBQzVJLE9BQVgsQ0FBbUIsVUFBQzZJLEdBQUQsRUFBUztBQUN4QkEsT0FBRyxDQUFDak0sZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNoQzhMLFlBQU0sQ0FBQzNDLEtBQVAsQ0FBYVUsT0FBYixHQUF1QixPQUF2QixDQURnQyxDQUdoQzs7QUFDQSxVQUFNcUMsS0FBSyxHQUFHRCxHQUFHLENBQUNsQyxZQUFKLENBQWlCLFlBQWpCLENBQWQ7QUFDQSxVQUFNb0MsS0FBSyxHQUFHRixHQUFHLENBQUNsQyxZQUFKLENBQWlCLFlBQWpCLENBQWQ7QUFDQSxVQUFNNUQsS0FBSyxHQUFHOEYsR0FBRyxDQUFDbEMsWUFBSixDQUFpQixZQUFqQixDQUFkO0FBQ0EsVUFBTXpELEtBQUssR0FBRzJGLEdBQUcsQ0FBQ2xDLFlBQUosQ0FBaUIsWUFBakIsQ0FBZDtBQUNBLFVBQU1xQyxHQUFHLEdBQUdILEdBQUcsQ0FBQ2xDLFlBQUosQ0FBaUIsUUFBakIsQ0FBWjs7QUFFQSxVQUFJNkIsS0FBSyxLQUFLSyxHQUFHLENBQUNsQyxZQUFKLENBQWlCLFlBQWpCLENBQWQsRUFBNkM7QUFDekNzQyx5RUFBZ0IsQ0FBQ0gsS0FBRCxFQUFRQyxLQUFSLEVBQWVoRyxLQUFmLEVBQXNCRyxLQUF0QixFQUE2QjhGLEdBQTdCLENBQWhCO0FBRUg7QUFDSixLQWREO0FBZUgsR0FoQkQ7O0FBa0JBTCxPQUFLLENBQUMzQixPQUFOLEdBQWdCLFlBQU07QUFDbEIwQixVQUFNLENBQUMzQyxLQUFQLENBQWFVLE9BQWIsR0FBdUIsTUFBdkI7QUFDSCxHQUZEOztBQUlBOUosUUFBTSxDQUFDcUssT0FBUCxHQUFpQixVQUFDQyxLQUFELEVBQVc7QUFDeEIsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCd0IsTUFBcEIsRUFBNEI7QUFDeEJBLFlBQU0sQ0FBQzNDLEtBQVAsQ0FBYVUsT0FBYixHQUF1QixNQUF2QjtBQUNIO0FBQ0osR0FKRDtBQUtILENBN0NEOztBQStDZXpDLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQSxJQUFNaUYsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDSCxLQUFELEVBQVFDLEtBQVIsRUFBZWhHLEtBQWYsRUFBc0JHLEtBQXRCLEVBQTZCTSxNQUE3QixFQUF3QztBQUU3RCxNQUFNMEYsU0FBUyxHQUFHMUwsUUFBUSxDQUFDVyxjQUFULENBQXdCLGFBQXhCLENBQWxCO0FBQ0ErSyxXQUFTLENBQUM5SyxTQUFWLHNJQUdpRDBLLEtBSGpELDBMQU9pREMsS0FQakQ7QUFlQSxNQUFNSSxTQUFTLEdBQUczTCxRQUFRLENBQUNXLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBbEI7QUFDQSxNQUFNaUwsU0FBUyxHQUFHNUwsUUFBUSxDQUFDVyxjQUFULENBQXdCLFVBQXhCLENBQWxCO0FBRUFnTCxXQUFTLENBQUN2TSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDeU0sQ0FBRCxFQUFLO0FBQ3JDQyxXQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBT3BILFFBQVEsQ0FBQ3NCLE1BQUQsQ0FBZixDQUFQO0FBQ0gsR0FGRDtBQUlBNEYsV0FBUyxDQUFDeE0sZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ3lNLENBQUQsRUFBTztBQUN2Q0MsV0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU9wSCxRQUFRLENBQUNzQixNQUFELENBQWYsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTStGLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNwTSxJQUFELEVBQU9xTSxLQUFQLEVBQWNDLEtBQWQsRUFBd0I7QUFDcEM7QUFDQTtBQUNBQyxNQUFFLENBQUNDLFVBQUgsQ0FBYyxjQUFkLEVBQThCM0ssR0FBOUIsQ0FBa0M3QixJQUFsQztBQUNBeU0sZUFBVyxDQUFDSixLQUFELEVBQVFDLEtBQVIsQ0FBWDtBQUNILEdBTEQ7O0FBT0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0osS0FBRCxFQUFRQyxLQUFSLEVBQWdCO0FBQ2hDO0FBQ0EsUUFBTUksWUFBWSxHQUFHck0sUUFBUSxDQUFDVyxjQUFULENBQXdCLFlBQXhCLENBQXJCO0FBQ0EwTCxnQkFBWSxDQUFDekwsU0FBYiw4RkFHbUNvTCxLQUhuQyw4REFJbUNDLEtBSm5DO0FBT0gsR0FWRDs7QUFZQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDM00sSUFBRCxFQUFPNE0sS0FBUCxFQUFjUCxLQUFkLEVBQXFCQyxLQUFyQixFQUErQjtBQUM5QztBQUNBO0FBQ0FDLE1BQUUsQ0FBQ0MsVUFBSCxDQUFjLGNBQWQsRUFBOEJLLEdBQTlCLENBQWtDRCxLQUFsQyxFQUF5Q0UsTUFBekMsQ0FBZ0Q5TSxJQUFoRDtBQUNBeU0sZUFBVyxDQUFDSixLQUFELEVBQVFDLEtBQVIsQ0FBWDtBQUNILEdBTEQ7O0FBT0EsTUFBTUgsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ1ksR0FBRCxFQUFNQyxHQUFOLEVBQVczRyxNQUFYLEVBQXNCO0FBQ2xDa0csTUFBRSxDQUFDQyxVQUFILENBQWMsY0FBZCxFQUE4QjVNLEdBQTlCLEdBQW9DQyxJQUFwQyxDQUF5QyxVQUFDQyxHQUFELEVBQU87QUFDNUMsVUFBSW1OLE9BQU8sR0FBRyxLQUFkO0FBQ0FuTixTQUFHLENBQUNvTixJQUFKLENBQVNySyxPQUFULENBQWlCLFVBQUFnSyxHQUFHLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsWUFBRzlILFFBQVEsQ0FBQ29JLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxHQUFHLENBQUM3TSxJQUFKLEVBQVosRUFBd0IsQ0FBeEIsQ0FBRCxDQUFSLEtBQXlDcUcsTUFBNUMsRUFBbUQ7QUFDL0MsY0FBSXVHLEtBQUssR0FBR0MsR0FBRyxDQUFDcEosRUFBaEI7QUFDQSxjQUFJNEosS0FBSyxHQUFJUixHQUFHLENBQUM3TSxJQUFKLEdBQVdxRyxNQUFYLENBQWI7QUFDQSxjQUFJZ0csS0FBSyxHQUFDLENBQVY7QUFDQSxjQUFJQyxLQUFLLEdBQUMsQ0FBVjs7QUFDQSxlQUFJLElBQUlnQixJQUFSLElBQWdCRCxLQUFoQixFQUFzQjtBQUNsQixnQkFBSUMsSUFBSSxLQUFLLE9BQWIsRUFBcUI7QUFDakJqQixtQkFBSyxHQUFHZ0IsS0FBSyxDQUFDQyxJQUFELENBQWI7QUFDSCxhQUZELE1BRUs7QUFDRGhCLG1CQUFLLEdBQUdlLEtBQUssQ0FBQ0MsSUFBRCxDQUFiO0FBQ0g7QUFDSjs7QUFDRCxjQUFJTixHQUFHLEtBQUssQ0FBWixFQUFjO0FBQ1YsZ0JBQUlPLFFBQVEsR0FBR2xCLEtBQUssR0FBR1UsR0FBdkI7O0FBQ0EsZ0JBQUlTLE9BQU8sdUJBQU1uSCxNQUFOLEVBQWU7QUFBRVosbUJBQUssRUFBRThILFFBQVQ7QUFBbUIxSCxtQkFBSyxFQUFFeUc7QUFBMUIsYUFBZixDQUFYOztBQUNBSyxzQkFBVSxDQUFDYSxPQUFELEVBQVVaLEtBQVYsRUFBaUJXLFFBQWpCLEVBQTJCakIsS0FBM0IsQ0FBVjtBQUNBVyxtQkFBTyxHQUFDLElBQVI7QUFDSCxXQUxELE1BS0s7QUFDRCxnQkFBSVEsUUFBUSxHQUFHbkIsS0FBSyxHQUFHUyxHQUF2Qjs7QUFDQSxnQkFBSVMsU0FBTyx1QkFBTW5ILE1BQU4sRUFBZTtBQUFFWixtQkFBSyxFQUFFNEcsS0FBVDtBQUFnQnhHLG1CQUFLLEVBQUU0SDtBQUF2QixhQUFmLENBQVg7O0FBQ0FkLHNCQUFVLENBQUNhLFNBQUQsRUFBVVosS0FBVixFQUFpQlAsS0FBakIsRUFBd0JvQixRQUF4QixDQUFWO0FBQ0FSLG1CQUFPLEdBQUcsSUFBVjtBQUNIO0FBQ0o7QUFDSixPQTVCRCxFQUY0QyxDQStCNUM7O0FBQ0EsVUFBSUEsT0FBTyxJQUFJLEtBQWYsRUFBcUI7QUFDakIsWUFBSVosS0FBSyxHQUFHLENBQVo7QUFDQSxZQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxZQUFJVSxHQUFHLEtBQUssQ0FBWixFQUFlO0FBQ1gsY0FBSU8sUUFBUSxHQUFHbEIsS0FBSyxHQUFHVSxHQUF2Qjs7QUFDQSxjQUFJUyxPQUFPLHVCQUFNbkgsTUFBTixFQUFlO0FBQUVaLGlCQUFLLEVBQUU4SCxRQUFUO0FBQW1CMUgsaUJBQUssRUFBRXlHO0FBQTFCLFdBQWYsQ0FBWDs7QUFDQUYsaUJBQU8sQ0FBQ29CLE9BQUQsRUFBVUQsUUFBVixFQUFvQmpCLEtBQXBCLENBQVA7QUFDSCxTQUpELE1BSU87QUFDSCxjQUFJbUIsUUFBUSxHQUFHbkIsS0FBSyxHQUFHUyxHQUF2Qjs7QUFDQSxjQUFJUyxTQUFPLHVCQUFNbkgsTUFBTixFQUFlO0FBQUVaLGlCQUFLLEVBQUU0RyxLQUFUO0FBQWdCeEcsaUJBQUssRUFBRTRIO0FBQXZCLFdBQWYsQ0FBWDs7QUFDQXJCLGlCQUFPLENBQUNvQixTQUFELEVBQVVuQixLQUFWLEVBQWlCb0IsUUFBakIsQ0FBUDtBQUNIO0FBQ0o7QUFDSixLQTdDRCxFQTZDR2xOLEtBN0NILENBNkNTLFVBQUNDLEdBQUQsRUFBTztBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEtBL0NEO0FBZ0RILEdBakREO0FBbURILENBMUdEOztBQTRHZXNMLCtFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdHQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNM0wsZUFBZSxHQUFFLFNBQWpCQSxlQUFpQixHQUFNO0FBQ3pCLE1BQU1zSCxZQUFZLEdBQUdwSCxRQUFRLENBQUNXLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBckI7QUFDQSxNQUFNME0sY0FBYyxHQUFHck4sUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUF2QjtBQUNBK0wsZ0JBQWMsQ0FBQ3hNLFNBQWYsQ0FBeUJXLEdBQXpCLENBQTZCLG1CQUE3QjtBQUNBNEYsY0FBWSxDQUFDM0YsTUFBYixDQUFvQjRMLGNBQXBCO0FBRUEvTiw4Q0FBSyxDQUFDQyxHQUFOLENBQVUsYUFBVixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQ0MsR0FBRCxFQUFTO0FBRW5DLFFBQU02TixRQUFRLEdBQUc3TixHQUFHLENBQUNFLElBQUosQ0FBU0MsUUFBVCxDQUFrQixDQUFsQixFQUFxQnNFLE1BQXJCLENBQTRCcUosU0FBNUIsQ0FBc0MsQ0FBdEMsQ0FBakI7QUFDQUQsWUFBUSxDQUFDOUssT0FBVCxDQUFpQixVQUFDSixJQUFELEVBQU8rQyxHQUFQLEVBQWU7QUFFNUIsVUFBTXFJLE9BQU8sR0FBR3hOLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxVQUFNbU0sY0FBYyxHQUFHek4sUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUF2QjtBQUNBLFVBQU1vTSxXQUFXLEdBQUcxTixRQUFRLENBQUNzQixhQUFULENBQXVCLEtBQXZCLENBQXBCO0FBQ0EsVUFBTXFNLGFBQWEsR0FBRzNOLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7QUFDQSxVQUFNc00sV0FBVyxHQUFHNU4sUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtBQUVBb00saUJBQVcsQ0FBQ3JLLFNBQVosR0FBd0JqQixJQUFJLENBQUNBLElBQUwsQ0FBVUMsSUFBbEM7QUFDQXNMLG1CQUFhLENBQUN0SyxTQUFkLEdBQTBCakIsSUFBSSxDQUFDeUwsTUFBL0I7QUFDQUQsaUJBQVcsQ0FBQ3ZLLFNBQVosR0FBd0JqQixJQUFJLENBQUMwTCxJQUE3QjtBQUVBTixhQUFPLENBQUMzTSxTQUFSLENBQWtCVyxHQUFsQixDQUFzQixtQkFBdEI7QUFDQWlNLG9CQUFjLENBQUM1TSxTQUFmLENBQXlCVyxHQUF6QixDQUE2QixlQUE3QjtBQUNBb00saUJBQVcsQ0FBQy9NLFNBQVosQ0FBc0JXLEdBQXRCLENBQTBCLFdBQTFCO0FBQ0FtTSxtQkFBYSxDQUFDOU0sU0FBZCxDQUF3QlcsR0FBeEIsQ0FBNEIsYUFBNUI7QUFFQWlNLG9CQUFjLENBQUNoTSxNQUFmLENBQXNCbU0sV0FBdEIsRUFBbUNGLFdBQW5DO0FBQ0FGLGFBQU8sQ0FBQy9MLE1BQVIsQ0FBZWdNLGNBQWYsRUFBK0JFLGFBQS9CO0FBQ0FOLG9CQUFjLENBQUM1TCxNQUFmLENBQXNCK0wsT0FBdEI7QUFFSCxLQXJCRDtBQXNCSCxHQXpCRCxFQXlCR3ROLEtBekJILENBeUJTLFVBQUFDLEdBQUcsRUFBRTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEdBM0JEO0FBNEJILENBbENEOztBQW9DZUwsOEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZmllbGQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xuXG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xuXG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xuXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xuXG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCA/IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIDogJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpOyAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7IC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG5cblxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuXG5cbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcblxuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gSGFuZGxlIHRpbWVvdXRcblxuXG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuXG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG5cblxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgPyBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH0gLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcblxuXG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXG5cbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9IC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcblxuXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9IC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH0gLy8gU2VuZCB0aGUgcmVxdWVzdFxuXG5cbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG5cbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpOyAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTsgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG5cbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufSAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcblxuXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7IC8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuXG5heGlvcy5BeGlvcyA9IEF4aW9zOyAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5cbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59OyAvLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cblxuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTsgLy8gRXhwb3NlIGFsbC9zcHJlYWRcblxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zOyAvLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cblxuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5cblxuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xuXG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcblxudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cblxuXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5cblxuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpOyAvLyBTZXQgY29uZmlnLm1ldGhvZFxuXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfSAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG5cblxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTsgLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG5cblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBBeGlvczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcblxudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xuXG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7IC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG5cbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTsgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShjb25maWcuZGF0YSwgY29uZmlnLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0KTsgLy8gRmxhdHRlbiBoZWFkZXJzXG5cbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LCBjb25maWcuaGVhZGVycyk7XG4gIHV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICB9KTtcbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcblxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7IC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShyZWFzb24ucmVzcG9uc2UuZGF0YSwgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuXG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBlcnJvcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5JywgJ3BhcmFtcyddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJywgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJywgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ2RlY29tcHJlc3MnLCAnbWF4Q29udGVudExlbmd0aCcsICdtYXhCb2R5TGVuZ3RoJywgJ21heFJlZGlyZWN0cycsICd0cmFuc3BvcnQnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ107XG4gIHZhciBkaXJlY3RNZXJnZUtleXMgPSBbJ3ZhbGlkYXRlU3RhdHVzJ107XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChkaXJlY3RNZXJnZUtleXMsIGZ1bmN0aW9uIG1lcmdlKHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXMuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKS5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpLmNvbmNhdChkaXJlY3RNZXJnZUtleXMpO1xuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnMSkuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKS5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgfSk7XG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcbiAgcmV0dXJuIGNvbmZpZztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG5cbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UuY29uZmlnLCBudWxsLCByZXNwb25zZS5yZXF1ZXN0LCByZXNwb25zZSkpO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG5cbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuXG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8IHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHwgdXRpbHMuaXNGaWxlKGRhdGEpIHx8IHV0aWxzLmlzQmxvYihkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvKiBJZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0czsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5yZXBsYWNlKC8lM0EvZ2ksICc6JykucmVwbGFjZSgvJTI0L2csICckJykucmVwbGFjZSgvJTJDL2dpLCAnLCcpLnJlcGxhY2UoLyUyMC9nLCAnKycpLnJlcGxhY2UoLyU1Qi9naSwgJ1snKS5yZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTCA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKSA6IGJhc2VVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgPyAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIHtcbiAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICB2YXIgY29va2llID0gW107XG4gICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgIHJldHVybiBtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH07XG59KCkgOiAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5mdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiB7XG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgPyAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3Rcbi8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdmFyIG9yaWdpblVSTDtcbiAgLyoqXG4gICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICogQHJldHVybnMge09iamVjdH1cbiAgKi9cblxuICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgfVxuXG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7IC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcblxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgIHBhdGhuYW1lOiB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDogJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICB9O1xuICB9XG5cbiAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8qKlxuICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgdmFyIHBhcnNlZCA9IHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgcmV0dXJuIHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdDtcbiAgfTtcbn0oKSA6IC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5mdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpOyAvLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuXG5cbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFsnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLCAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJywgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCddO1xuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBhcnNlZDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcikgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgRm9ybURhdGE7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB2YWwgJiYgdmFsLmJ1ZmZlciAmJiB2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5cblxuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5cblxuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufVxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuXG5cbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZSgpXG4vKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi9cbntcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuXG5cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5cblxuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9OyAvLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICB9XG59KSgpO1xuXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH0gLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblxuXG4gIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICB9IC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblxuXG4gIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRyYWluaW5nID0gZmFsc2U7XG5cbiAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgfVxuXG4gIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICBkcmFpblF1ZXVlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgaWYgKGRyYWluaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblxuICB3aGlsZSAobGVuKSB7XG4gICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgcXVldWUgPSBbXTtcblxuICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cblxuICBjdXJyZW50UXVldWUgPSBudWxsO1xuICBkcmFpbmluZyA9IGZhbHNlO1xuICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICB9XG5cbiAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcblxuICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gIH1cbn07IC8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcblxuXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgdGhpcy5mdW4gPSBmdW47XG4gIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cblxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5cbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gW107XG59O1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcvJztcbn07XG5cbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gMDtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGN1cnJlbnRSb3VuZCBmcm9tIFwiLi9zY3JpcHRzL2N1cnJlbnRSb3VuZFwiO1xuaW1wb3J0IHJlbmRlclN0YW5kaW5ncyBmcm9tIFwiLi9zY3JpcHRzL3N0YW5kaW5nc1wiO1xuXG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIGxldCByb3VuZCA9ICdSZWd1bGFyIFNlYXNvbiAtIDEyJyA7XG5cbiAgICAvLyBHRVQgQ1VSUkVOVCBST1VORCBBTkQgUkVOREVSIEdBTUVTIEFORCBTVEFORElOR1NcbiAgICBjdXJyZW50Um91bmQoKTtcbiAgICBcbiAgICAvLyByZW5kZXJHYW1lcyhyb3VuZCk7XG4gICAgLy8gcmVuZGVyR2FtZVN0YXQoKTtcbiAgICBcblxuICAgIC8vIGNvbnN0IG5hdmJhckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1sb2dvXCIpO1xuICAgIC8vIG5hdmJhckxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJHYW1lcyhyb3VuZCkpO1xufSk7XG5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByZW5kZXJHYW1lcyBmcm9tIFwiLi9nYW1lc1wiO1xuaW1wb3J0IHJlbmRlclN0YW5kaW5ncyBmcm9tIFwiLi9zdGFuZGluZ3NcIjtcblxuY29uc3QgY3VycmVudFJvdW5kID0gKCkgPT4ge1xuICAgIFxuICAgIGF4aW9zLmdldChgY3VycmVudHJvdW5kYCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSID0gcmVzLmRhdGEucmVzcG9uc2VbMF07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlWzBdKTtcblxuICAgICAgICByZW5kZXJHYW1lcyhjdXJyZW50Uik7XG4gICAgICAgIHJlbmRlclN0YW5kaW5ncygpO1xuICAgICAgICAvLyBcbiAgICAgICAgY29uc3QgbmF2YmFyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyLWxvZ29cIik7XG4gICAgICAgIG5hdmJhckxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJHYW1lcyhjdXJyZW50UikpO1xuXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFJvdW5kOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBmaWVsZCBmcm9tICcuLi8uLi9hc3NldHMvZmllbGQucG5nJztcbmltcG9ydCByZW5kZXJHYW1lU3RhdCBmcm9tICcuL2dhbWVzdGF0JztcbmltcG9ydCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgZnJvbSBcIi4vZ2V0Rml4dHVyZVBsYXllcnNTdGF0XCI7XG5pbXBvcnQgcmVuZGVyUGxheWVyTW9kYWwgZnJvbSAnLi9yZW5kZXJQbGF5ZXJNb2RhbCc7XG5cbmNvbnN0IHJlbmRlckdhbWVCeUlkID0gKGZpeHR1cmVJZCwgc2NvcmUxLCBzY29yZTIpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnSGkgZnJvbSBnYW1lIScpO1xuXG4gICAgY29uc3QgbGVhZ3VlSW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZ3VlLWluZm9cIik7XG4gICAgbGVhZ3VlSW5mb0Rpdi5pbm5lckhUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG4gICAgbGVhZ3VlSW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0Jyk7XG5cbiAgICBjb25zdCBhbGxHYW1lc0NvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nYW1lc1wiKTtcbiAgICBhbGxHYW1lc0NvbnRlbnREaXYuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPSdvbmUtZ2FtZSc+PC9kaXY+XCI7XG5cbiAgICBheGlvcy5nZXQoYC4vZ2FtZT9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcblxuICAgICAgICAvL2NsZWFyIGxpdmUgdXBkYXRlcyBpbnRlcnZhbCBhbmQgbG9jYWwgc3RvcmFnZVxuICAgICAgICBjbGVhckludGVydmFsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3F1YWRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdmaWVsZC1ib3gnKTtcbiAgICAgICAgc3F1YWRzRGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFkLWJveCcpO1xuICAgICAgICBcbiAgICAgICAgc3F1YWRzRGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGlkPSd0ZWFtLTEtYm94Jz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3RlYW0tMi1ib3gnPjwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKHNxdWFkc0Rpdik7XG4gICAgICAgIFxuICAgICAgICBmaWVsZERpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaW1nXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCIke2ZpZWxkfVwiLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2RlZi0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMScgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZndkLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2Z3ZC0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtaWQtMicgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nZGVmLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2drLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKGZpZWxkRGl2KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdrMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2stMVwiKTtcbiAgICAgICAgY29uc3QgZGVmMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmLTFcIik7XG4gICAgICAgIGNvbnN0IG1pZDFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC0xXCIpO1xuICAgICAgICBjb25zdCBmd2QxRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmd2QtMVwiKTtcbiAgICAgICAgY29uc3QgZ2syRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnay0yXCIpO1xuICAgICAgICBjb25zdCBkZWYyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWYtMlwiKTtcbiAgICAgICAgY29uc3QgbWlkMkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkLTJcIik7XG4gICAgICAgIGNvbnN0IGZ3ZDJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ3ZC0yXCIpO1xuXG4gICAgICAgIC8vYWRkaW5nIHBsYXllcnMgaW5zaWRlIHNxdWFkcyBzZWN0aW9uXG4gICAgICAgIGNvbnN0IHRlYW0xRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtLTEtYm94XCIpO1xuICAgICAgICAgICAgdGVhbTFEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbS0xLWhlYWRlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5uYW1lfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdsb2dvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgY29uc3QgdGVhbTJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW0tMi1ib3hcIik7XG4gICAgICAgICAgICB0ZWFtMkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLTItaGVhZGVyLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICAvL3BsYWNlIHBsYXllcnMgb24gYSBmaWVsZCBhY2NvcmRpbmcgdG8gdGhlaXIgYWN0dWFsIHBvc2l0aW9uIGFuZCB0ZWFtIGZvcm1hdGlvblxuICAgICAgICByZXMuZGF0YS5yZXNwb25zZS5mb3JFYWNoKChjb21tYW5kLCBjaWR4KSA9PiB7XG4gICAgICAgICAgICBjb21tYW5kLnN0YXJ0WEkuZm9yRWFjaCgocGxyLCBwaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNpZHggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKCd0ZWFtLTEnKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbnVtYmVyJz4ke3Bsci5wbGF5ZXIubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtwbHIucGxheWVyLm5hbWV9PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncG9zJz4gICgke3Bsci5wbGF5ZXIucG9zfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICBpZihwbHIucGxheWVyLnBvcyA9PT0gJ0cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dD0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBnazFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdEJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDEnLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdNJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwxJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWQxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZndkMURpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZWFtMURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZCgndGVhbS0yJylcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J251bWJlcic+JHtwbHIucGxheWVyLm51bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cGxyLnBsYXllci5uYW1lfTwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvcyc+ICAoJHtwbHIucGxheWVyLnBvc30pPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMicsJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBnazJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdEJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwyJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWYyRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMicsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDInLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ3ZDJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhbTJEaXYuYXBwZW5kQ2hpbGQocGxheWVyRGl2LCBmaXh0dXJlSWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZW5kZXJHYW1lU3RhdChmaXh0dXJlSWQsIHNjb3JlMSwgc2NvcmUyKTtcbiAgICAgICAgXG4gICAgICAgIGdldEZpeHR1cmVQbGF5ZXJzU3RhdChmaXh0dXJlSWQpLnRoZW4oKEZpeHR1cmVQbGF5ZXJzU3RhdCkgPT4ge1xuICAgICAgICAgICAgLy9tb2RhbCBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICByZW5kZXJQbGF5ZXJNb2RhbChzcXVhZHNEaXYsIEZpeHR1cmVQbGF5ZXJzU3RhdCwgZml4dHVyZUlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZUJ5SWQ7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcmVuZGVyR2FtZUJ5SWQgZnJvbSAnLi9nYW1lJztcbmltcG9ydCByZW5kZXJWb3RpbmdNb2RhbCBmcm9tICcuL3JlbmRlclZvdGluZ01vZGFsJztcbmltcG9ydCBnYW1lc1JlZnJlc2ggZnJvbSAnLi9nYW1lc1JlZnJlc2gnO1xuXG5jb25zdCByZW5kZXJHYW1lcyA9IChyb3VuZCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHJvdW5kKVxuICAgIGNvbnN0IGFsbEdhbWVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2FtZXNcIilcbiAgICBjb25zdCBhbGxHYW1lc0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWxsR2FtZXNEaXYuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuICAgIGNvbnN0IGxlYWd1ZUluZm9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWd1ZS1pbmZvXCIpO1xuICAgIGxlYWd1ZUluZm9EaXYuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gICAgYXhpb3MuZ2V0KGAuL2dhbWVzP3JvdW5kPSR7cm91bmR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgY29uc3QgZml4dHVyZXNBcnIgPSByZXMuZGF0YS5yZXNwb25zZTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWN0aW9uTmFtZURpdi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1uYW1lXCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGxpdmVHYW1lc1N0YXR1cyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5leHRTZWFzb24gPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc2Vhc29uICsgMTtcblxuICAgICAgICBsZWFndWVJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0nbGVhZ3VlLWJveCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3VudHJ5LWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuY291bnRyeX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGFnJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5mbGFnfVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nby1ib3gnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5sb2dvfVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbGVhZ3VlLW5hbWUnPlxuICAgICAgICAgICAgJHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUubmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2Vhc29uLWJveCc+XG4gICAgICAgICAgICAgICAgJHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc2Vhc29ufS0ke25leHRTZWFzb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2VwbC1saW5rJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5wcmVtaWVybGVhZ3VlLmNvbS8nIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgdGFyZ2V0PVwiX2JsYW5rXCI+VmlzaXQgRVBMPC9hPiAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGxldCBjdXJyZW50Um91bmRTdHJpbmcgPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUucm91bmQ7XG4gICAgICAgIGxldCBjdXJyZW50Um91bmQgPSBgJHtjdXJyZW50Um91bmRTdHJpbmcuc3BsaXQoJyAnKS5wb3AoKX0gYDtcbiAgICAgICAgbGV0IHByZXZSb3VuZCA9IHBhcnNlSW50KGN1cnJlbnRSb3VuZCkgLSAxO1xuICAgICAgICBsZXQgbmV4dFJvdW5kID0gcGFyc2VJbnQoY3VycmVudFJvdW5kKSArIDE7XG5cbiAgICAgICAgc2VjdGlvbk5hbWVEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncm91bmRQcmV2Jz5cbiAgICAgICAgICAgICAgICA8PCBHTyBUTyBST1VORCAke3ByZXZSb3VuZH0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JvdW5kQ3Vycic+XG4gICAgICAgICAgICAgICAgQUxMIEdBTUVTIC0gUk9VTkQgJHtjdXJyZW50Um91bmR9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3VuZE5leHQnPlxuICAgICAgICAgICAgICAgIEdPIFRPIFJPVU5EICR7bmV4dFJvdW5kfSA+PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgIGFsbEdhbWVzRGl2LmFwcGVuZChzZWN0aW9uTmFtZURpdik7XG5cbiAgICAgICAgY29uc3QgcFJvdW5kID0gYFJlZ3VsYXIgU2Vhc29uIC0gJHtwcmV2Um91bmR9YDtcbiAgICAgICAgY29uc3QgblJvdW5kID0gYFJlZ3VsYXIgU2Vhc29uIC0gJHtuZXh0Um91bmR9YDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmRQcmV2XCIpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmROZXh0XCIpO1xuICAgICAgICBcbiAgICAgICAgcHJldmlvdXNSb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVzKHBSb3VuZCkpO1xuICAgICAgICBmb2xsb3dpbmdSb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVzKG5Sb3VuZCkpOyAgICBcbiAgICAgICBcbiAgICAgICAgYWxsR2FtZXNCb3hEaXYuY2xhc3NMaXN0LmFkZChcImFsbC1nYW1lcy1ib3hcIik7XG4gICAgICAgIGFsbEdhbWVzRGl2LmFwcGVuZChhbGxHYW1lc0JveERpdik7XG4gICAgICAgIGNvbnN0IGdhbWVMaXZlU3RhdHVzID0gWycxSCcsJ0hUJywnMkgnLCdFVCcsJ1AnLCdCVCddO1xuICAgICAgICBjb25zdCBnYW1lTm90TGl2ZVN0YXR1cyA9IFsnTlMnLCAnRlQnXTtcbiAgICAgICAgXG4gICAgICAgIGZpeHR1cmVzQXJyLmZvckVhY2goKGZpeCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtMSA9IGZpeC50ZWFtcy5ob21lLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsb2dvMSA9IGZpeC50ZWFtcy5ob21lLmxvZ287XG4gICAgICAgICAgICBjb25zdCB0ZWFtMiA9IGZpeC50ZWFtcy5hd2F5Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsb2dvMiA9IGZpeC50ZWFtcy5hd2F5LmxvZ287XG4gICAgICAgICAgICBjb25zdCBzY29yZTEgPSBmaXguZ29hbHMuaG9tZTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlMiA9IGZpeC5nb2Fscy5hd2F5O1xuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGZpeC5maXh0dXJlLnN0YXR1cy5zaG9ydDtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVJZCA9IGZpeC5maXh0dXJlLmlkO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdhbWVTdGF0dXMgaXM6ICR7Z2FtZVN0YXR1c30gJHt0ZWFtMX0gdnMgJHt0ZWFtMn1gKVxuXG4gICAgICAgICAgICAvLyB0byBjaGVjayBpZiBhdCBsZWF0IG9uZSBnYW1lIGlzIGxpdmUgdG8gZW5hYmxlIHVwZGF0ZXNcbiAgICAgICAgICAgIGlmIChnYW1lTGl2ZVN0YXR1cy5pbmNsdWRlcyhnYW1lU3RhdHVzKSkgbGl2ZUdhbWVzU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpeHR1cmVSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVTdGF0dXNSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGZpeHR1cmVSb3dEaXYuY2xhc3NMaXN0LmFkZCgnZml4dHVyZS1ib3gnKTtcbiAgICAgICAgICAgIGdhbWVTdGF0dXNSb3dEaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGF0dXMtcm93Jyk7XG4gICAgICAgICAgICBzY29yZUJveERpdi5jbGFzc0xpc3QuYWRkKCdzY29yZS1ib3gnKTtcblxuICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5zZXRBdHRyaWJ1dGUoJ2dhbWVJZCcsIGdhbWVJZCApO1xuXG4gICAgICAgICAgICAvLyBpZiBnYW1lIGlzIGxpdmUgdGhlbiBzaG93ICdzY29yZScsIG90aGVyd2lzZSBzaG93ICd2cydcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSAoZ2FtZUxpdmVTdGF0dXMuaW5jbHVkZXMoZ2FtZVN0YXR1cykgfHwgKGdhbWVTdGF0dXMgPT09ICdGVCcpKSA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlLWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUnPiR7c2NvcmUxfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlJz4ke3Njb3JlMn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDogJzxkaXYgY2xhc3M9XCJ2c1wiPnZzPC9kaXY+JztcblxuICAgICAgICAgICAgLy8gaWYgZ2FtZSBpcyBub3Qgc3RhcnRlZCwgZGlzcGxheSBWT1RFIGJ1dHRvbiBcbiAgICAgICAgICAgIGNvbnN0IHZvdGVCdG5EaXNwbGF5ID0gKGdhbWVTdGF0dXMgPT09ICdOUycpPyBcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSd2b3RpbmctYnRuLWJveCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3ZvdGluZy1idG4nIFxuICAgICAgICAgICAgICAgICAgICB0ZWFtMS1uYW1lPScke3RlYW0xfSdcbiAgICAgICAgICAgICAgICAgICAgdGVhbTItbmFtZT0nJHt0ZWFtMn0nXG4gICAgICAgICAgICAgICAgICAgIHRlYW0xLWxvZ289JyR7bG9nbzF9J1xuICAgICAgICAgICAgICAgICAgICB0ZWFtMi1sb2dvPScke2xvZ28yfSdcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUlkPSR7Z2FtZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgVk9URVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YCA6ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaXh0dXJlUm93RGl2LmlubmVySFRNTCA9ICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lLXN0YXR1cy1zZWN0aW9uJz4ke2ZpeC5maXh0dXJlLnN0YXR1cy5sb25nfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbTEtYm94JyA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke3RlYW0xfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PGltZyBzcmM9XCIke2xvZ28xfVwiLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHt0ZW1wfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbTItYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjxpbWcgc3JjPVwiJHtsb2dvMn1cIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke3RlYW0yfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3ZvdGVCdG5EaXNwbGF5fVxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGdhbWVTdGF0dXMgIT09ICdOUycpIHtcbiAgICAgICAgICAgICAgICBmaXh0dXJlUm93RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZUJ5SWQoZ2FtZUlkLCBzY29yZTEsIHNjb3JlMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChmaXh0dXJlUm93RGl2KTtcbiAgICAgICAgICAgIHJlbmRlclZvdGluZ01vZGFsKGFsbEdhbWVzQm94RGl2LCB0ZWFtMSwgdGVhbTIpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpdmVVcGRhdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuY2xhc3NMaXN0LmFkZCgnbGl2ZS11cGRhdGVzLWJveCcpO1xuICAgICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChidXR0b25MaXZlVXBkYXRlcyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zyb20gZ2FtZXM6Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKSk7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0Q291bnRlcicpICE9PSBudWxsKXtcbiAgICAgICAgICAgIGxldCBuZXdDb3VudGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJyk7XG4gICAgICAgICAgICBuZXdDb3VudGVyICsrO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJywgbmV3Q291bnRlcik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3Q291bnRlciBpcyAtLT4gJHtuZXdDb3VudGVyfWApXG4gICAgICAgICAgICBpZiAobmV3Q291bnRlciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdMb2NhbCBTdG9yYWdlIHdhcyBjbGVhcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChsaXZlR2FtZXNTdGF0dXMpe1xuICAgIFxuICAgICAgICAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nbGl2ZS11cGRhdGVzJz5BQ1RJVkFURSBMSVZFIFVQREFURVM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9J25vLWxpdmUtdXBkYXRlcyc+U1RPUCBMSVZFIFVQREFURVM8L2J1dHRvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBjb25zdCBidG5MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS11cGRhdGVzXCIpO1xuICAgICAgICAgICAgY29uc3QgYnRuTm9MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm8tbGl2ZS11cGRhdGVzXCIpO1xuXG4gICAgICAgICAgICBnYW1lc1JlZnJlc2goYnRuTGl2ZVVwZGF0ZXMsIGJ0bk5vTGl2ZVVwZGF0ZXMsIHJvdW5kKVxuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICAgIGJ1dHRvbkxpdmVVcGRhdGVzLmlubmVySFRNTCA9IGBcbiAgICAgICAgLy8gICAgIDxidXR0b24gY2xhc3M9J25vLWxpdmUtdXBkYXRlcycgZGlzYWJsZWQ+XG4gICAgICAgIC8vICAgICAgICAgTm8gbGl2ZSBnYW1lcyByaWdodCBub3dcbiAgICAgICAgLy8gICAgIDwvYnV0dG9uPmA7XG4gICAgICAgIC8vICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChidXR0b25MaXZlVXBkYXRlcyk7XG5cbiAgICAgICAgLy8gICAgIGNsZWFySW50ZXJ2YWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgXG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lczsiLCJpbXBvcnQgcmVuZGVyR2FtZXMgZnJvbSAnLi9nYW1lcyc7XG5cbmNvbnN0IGdhbWVzUmVmcmVzaCA9IChidG5MaXZlVXBkYXRlcywgYnRuTm9MaXZlVXBkYXRlcywgcm91bmQpID0+IHtcblxuICAgIGxldCBpbnRlcnZhbDtcbiAgICBcbiAgICBidG5MaXZlVXBkYXRlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVuZGVyR2FtZXMocm91bmQpXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gcmVuZGVyR2FtZXMocm91bmQpLCAxMDAwMCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnLCBpbnRlcnZhbCk7XG4gICAgICAgIGxldCBjb3VudGVyID0gMFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxTdENvdW50ZXInLCBjb3VudGVyKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgaW50ZXJ2YWwgaXMgJHtpbnRlcnZhbH1gKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgTG9jYWwgc3RvcmFnZSBpbnRlcnZhbCB2YWx1ZSBpcyAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKX1gKVxuICAgIH0pO1xuICAgIFxuICAgIGJ0bk5vTGl2ZVVwZGF0ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBhZnRlciBjbGVhcmluZywgTG9jYWwgc3RvcmFnZSBpbnRlcnZhbCBpcyAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKX1gKTtcblxuICAgICAgICBidG5MaXZlVXBkYXRlcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBidG5Ob0xpdmVVcGRhdGVzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9KTtcblxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKSAhPT0gbnVsbCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpZicpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0SW50ZXJ2YWwnKSlcbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBidG5Ob0xpdmVVcGRhdGVzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbHNlJylcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpKVxuICAgICAgICBidG5MaXZlVXBkYXRlcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBidG5Ob0xpdmVVcGRhdGVzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG4gICAgICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lc1JlZnJlc2g7XG5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVuZGVyR2FtZVN0YXQgPSAoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdISSBGUk9NIEdBTUUgU1RBVCcpO1xuICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICBjb25zdCBzdGFuZGluZ3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YW5kaW5nc1wiKVxuICAgIC8vIGNvbnN0IHRlc3RCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHRlc3RCb3hEaXYuY2xhc3NMaXN0LmFkZChcInRlc3QtYm94XCIpO1xuICAgIGF4aW9zLmdldChgL2dhbWVzdGF0Lz9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZVN0YXREaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGF0LWJveCcpO1xuICAgICAgICBzdGFuZGluZ3NEaXYuYXBwZW5kKGdhbWVTdGF0RGl2KTtcbiAgICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKGdhbWVTdGF0RGl2KTtcbiAgICAgICAgY29uc3QgdGVhbXNTdGF0ID0gcmVzLmRhdGEucmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHBvc3Nlc3Npb24gPSBbXTtcbiAgICAgICAgY29uc3Qgc2hvdHNPbiA9IFtdO1xuICAgICAgICBjb25zdCBzaG90c09mZiA9IFtdO1xuICAgICAgICBjb25zdCBmb3VscyA9IFtdO1xuICAgICAgICBjb25zdCB5YyA9IFtdO1xuXG4gICAgICAgIHRlYW1zU3RhdC5mb3JFYWNoKCh0ZWFtU3RhdCwgaWR4MSkgPT4ge1xuICAgICAgICAgICAgdGVhbVN0YXQuc3RhdGlzdGljcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiQmFsbCBQb3NzZXNzaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2Vzc2lvbi5wdXNoKHN0YXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIlNob3RzIG9uIEdvYWxcIil7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT24ucHVzaChzdGF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQudHlwZSA9PT0gXCJTaG90cyBvZmYgR29hbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT2ZmLnB1c2goc3RhdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiRm91bHNcIikge1xuICAgICAgICAgICAgICAgICAgICBmb3Vscy5wdXNoKHN0YXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiWWVsbG93IENhcmRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWMucHVzaChzdGF0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvc3Nlc3Npb24pXG4gICAgICAgIGdhbWVTdGF0RGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lLXN0YXQtdGl0bGUnPkdBTUUgU1RBVElTVElDUzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlQm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Ib21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVswXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1OYW1lXCI+JHtyZXMuZGF0YS5yZXNwb25zZVswXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtU2NvcmUxJz4ke3Njb3JlMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Mb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTmFtZVwiPiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbVNjb3JlMic+JHtzY29yZTJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvc3NQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zc1wiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEJhbGwgUG9zc2Vzc2lvbiA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hvdHNPblByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09uXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb24gR29hbHMgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb2ZmIEdvYWxzIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEZvdWxzIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInljUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInljXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBZZWxsb3cgQ2FyZHMgPC9kaXY+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcblxuICAgICAgICBjb25zdCByZW5kZXJTdGF0cyA9IChzdGF0MSwgdG90YWwsIGlkTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE5hbWUpO1xuICAgICAgICAgICAgaWYgKGlkTmFtZSA9PT0gJ3Bvc3MnKXtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gc3RhdDE7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAoc3RhdDEgLyB0b3RhbCApICoxMDA7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHJhdGlvICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyU3RhdHMocG9zc2Vzc2lvblswXS52YWx1ZSwgMCwgXCJwb3NzXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09uWzBdLnZhbHVlLCBzaG90c09uWzBdLnZhbHVlICsgc2hvdHNPblsxXS52YWx1ZSwgXCJzaG90c09uXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09mZlswXS52YWx1ZSwgc2hvdHNPZmZbMF0udmFsdWUgKyBzaG90c09mZlsxXS52YWx1ZSwgXCJzaG90c09mZlwiKTtcbiAgICAgICAgcmVuZGVyU3RhdHMoZm91bHNbMF0udmFsdWUsIGZvdWxzWzBdLnZhbHVlICsgZm91bHNbMV0udmFsdWUsIFwiZm91bHNcIik7XG4gICAgICAgIHJlbmRlclN0YXRzKHljWzBdLnZhbHVlLCB5Y1swXS52YWx1ZSArIHljWzFdLnZhbHVlLCBcInljXCIpO1xuICAgICAgXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZVN0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgLi9maXh0dXJlX3BsYXllcnNfc3RhdD9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIaSBmcm9tIGZpeHR1cmUgcGxheWVycyBzdGF0IScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCcpO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2U7XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQ7IiwiaW1wb3J0IHJlbmRlclBsYXllclN0YXQgZnJvbSAnLi9yZW5kZXJQbGF5ZXJTdGF0JztcblxuY29uc3QgcmVuZGVyUGxheWVyTW9kYWwgPSAoc3F1YWRzRGl2LCBGaXh0dXJlUGxheWVyc1N0YXQsIGZpeHR1cmVJZCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBpZD1cIm15TW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nbW9kYWwtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgdGV4dCBnb2VzIGhlcmUgLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIHNxdWFkc0Rpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlNb2RhbFwiKTtcbiAgICBjb25zdCBwbGF5ZXJzVG9DbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGwtc2VsZWN0XCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG5cbiAgICBwbGF5ZXJzVG9DbGljay5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcklkID0gcGxheWVyLmdldEF0dHJpYnV0ZSgncGxheWVySWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1JZCA9IHBsYXllci5nZXRBdHRyaWJ1dGUoJ3RlYW1JZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJZG0gPSBwYXJzZUludChwbGF5ZXJJZCk7XG4gICAgICAgICAgICBjb25zdCB0ZWFtSWRtID0gcGFyc2VJbnQodGVhbUlkKTtcbiAgICAgICAgICAgIHJlbmRlclBsYXllclN0YXQocGxheWVySWRtLCB0ZWFtSWRtLCBmaXh0dXJlSWQsIEZpeHR1cmVQbGF5ZXJzU3RhdCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSlcblxuICAgIHNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyTW9kYWw7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHJlbmRlckdhbWVCeUlkIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IHJlbmRlclBsYXllclN0YXQgPSAocGxheWVySWRtLCB0ZWFtSWRtLCBmaXh0dXJlSWRtLCBGaXh0dXJlUGxheWVyc1N0YXRtKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hpIGZyb20gIFJFTkRFUiBQTEFZRVIgU1RBVCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcklkbSk7XG4gICAgLy8gY29uc29sZS5sb2codGVhbUlkbSk7XG4gICAgLy8gY29uc29sZS5sb2coZml4dHVyZUlkbSk7XG4gICAgLy8gY29uc29sZS5sb2coRml4dHVyZVBsYXllcnNTdGF0bSk7XG5cbiAgICBsZXQgdGVhbUluZm8gPSB7fTtcbiAgICBsZXQgcGxheWVySW5mbz17fTtcbiAgICBsZXQgcGxheWVyU3RhdCA9IHt9O1xuXG4gICAgRml4dHVyZVBsYXllcnNTdGF0bS5mb3JFYWNoKChzcXVhZCk9PntcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3F1YWQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZWFtSWRtKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3F1YWQudGVhbS5pZClcbiAgICAgICAgaWYgKHNxdWFkLnRlYW0uaWQgPT09IHRlYW1JZG0pIHtcbiAgICAgICAgICAgIHRlYW1JbmZvID0gc3F1YWQ7XG4gICAgICAgICAgICBzcXVhZC5wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaWR4KT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVyLmlkID09PSBwbGF5ZXJJZG0pe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvID0gcGxheWVyLnBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3RhdCA9IHBsYXllci5zdGF0aXN0aWNzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIC8vIGNvbnNvbGUubG9nKHRlYW1JbmZvKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJJbmZvKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJTdGF0KTtcblxuICAgIGNvbnN0IG1vZGFsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1ib3hcIik7XG4gICAgLy9jaGVjayBpZiBnb2Fsa2VlcGVyIHJlZG5lciBvbmUgdGhpbmcgLCBmb3IgZmllbGQgcGxheWVyLSBhbm90aGVyXG5cbiAgICBjb25zdCByaWdodEJveERhdGEgPSAocGxheWVyU3RhdC5nYW1lcy5wb3NpdGlvbiA9PT0gJ0cnKSA/XG4gICAgICAgIGA8ZGl2IGNsYXNzPSdzYXZlcy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TYXZlczogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLnNhdmVzID8gcGxheWVyU3RhdC5nb2Fscy5zYXZlcyA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb25jZWRlZC1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5Hb2FscyBjb25jZWRlZDogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLmNvbmNlZGVkID8gcGxheWVyU3RhdC5nb2Fscy5jb25jZWRlZCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgIFxuICAgIDogXG4gICAgICAgIGA8ZGl2IGNsYXNzPSdkdWVscy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5EdWVscyBXb24vVG90YWw6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5kdWVscy53b24gPyBwbGF5ZXJTdGF0LmR1ZWxzLndvbiA6IDB9IC8gJHtwbGF5ZXJTdGF0LmR1ZWxzLnRvdGFsID8gcGxheWVyU3RhdC5kdWVscy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXNzZXMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UGFzc2VzKEFjY3VyYWN5JSk6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5wYXNzZXMudG90YWwgPyBwbGF5ZXJTdGF0LnBhc3Nlcy50b3RhbCA6IDB9ICgke3BsYXllclN0YXQucGFzc2VzLmFjY3VyYWN5ID8gcGxheWVyU3RhdC5wYXNzZXMuYWNjdXJhY3kgOiAwfSUpPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaG90cy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TaG90czogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LnNob3RzLnRvdGFsID8gcGxheWVyU3RhdC5zaG90cy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz0nZ29hbHMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+R29hbHM6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nb2Fscy50b3RhbCA/IHBsYXllclN0YXQuZ29hbHMudG90YWwgOiAwfSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgXG4gICAgO1xuXG4gICAgbW9kYWxCb3guaW5uZXJIVE1MID1cbiAgICAgICAgYCAgIDxkaXYgY2xhc3M9J2xlZnQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbC1pbWctYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXllckluZm8ucGhvdG99XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsLW5hbWUnPiR7cGxheWVySW5mby5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLW51bWJlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+TnVtYmVyOiAke3BsYXllclN0YXQuZ2FtZXMubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLWJveCByb3cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UG9zaXRpb246IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdhbWVzLnBvc2l0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JhdGluZy1ib3ggcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlJhdGluZzogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZ2FtZXMucmF0aW5nID8gcGxheWVyU3RhdC5nYW1lcy5yYXRpbmcgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21pbnV0ZXMtYm94IHJvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5NaW51dGVzOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nYW1lcy5taW51dGVzID8gcGxheWVyU3RhdC5nYW1lcy5taW51dGVzIDogMH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICR7cmlnaHRCb3hEYXRhfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICBcbiAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyU3RhdDsiLCJpbXBvcnQgcmVuZGVyVm90aW5nU3RhdCBmcm9tICcuL3JlbmRlclZvdGluZ1N0YXQnO1xuXG5jb25zdCByZW5kZXJWb3RpbmdNb2RhbCA9IChhbGxHYW1lc0JveERpdiwgdDFyZWYsIHQycmVmKSA9PiB7XG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbERpdi5pbm5lckhUTUwgPVxuICAgICAgICBgXG4gICAgICAgIDxkaXYgaWQ9XCJteVZvdGluZ01vZGFsXCIgY2xhc3M9XCJtb2RhbC12XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS12XCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtb2RhbC12LWJveCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICBjb25zdCBtb2RhbFYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Vm90aW5nTW9kYWxcIik7XG4gICAgY29uc3Qgc3BhblYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtdlwiKVswXTtcbiAgICBjb25zdCB2b3RpbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52b3RpbmctYnRuXCIpO1xuICAgIFxuICAgIHZvdGluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsVi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0hJIEZST00gVk9USU5HIE1PREFMJylcbiAgICAgICAgICAgIGNvbnN0IG5hbWUxID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgbmFtZTIgPSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMi1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBsb2dvMSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ3RlYW0xLWxvZ28nKTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28yID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTItbG9nbycpO1xuICAgICAgICAgICAgY29uc3QgZ0lkID0gYnRuLmdldEF0dHJpYnV0ZSgnZ2FtZUlkJyk7XG5cbiAgICAgICAgICAgIGlmICh0MXJlZiA9PT0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbmFtZScpKXtcbiAgICAgICAgICAgICAgICByZW5kZXJWb3RpbmdTdGF0KG5hbWUxLCBuYW1lMiwgbG9nbzEsIGxvZ28yLCBnSWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICBzcGFuVi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBtb2RhbFYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWxWKSB7XG4gICAgICAgICAgICBtb2RhbFYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJWb3RpbmdNb2RhbDsiLCJcbmNvbnN0IHJlbmRlclZvdGluZ1N0YXQgPSAobmFtZTEsIG5hbWUyLCBsb2dvMSwgbG9nbzIsIGdhbWVJZCkgPT4ge1xuXG4gICAgY29uc3QgbW9kYWxWQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC12LWJveFwiKTtcbiAgICBtb2RhbFZCb3guaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtcy1yb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnRuLWJveCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ndm90ZU51bTEnIG5hbWU9J25hbWUxJz4ke25hbWUxfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZXNzYWdlJz4gV2hvIHdpbGwgd2luPyA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2J0bi1ib3gnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J3ZvdGVOdW0yJyBuYW1lPSduYW1lMic+JHtuYW1lMn08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0ndm90aW5nLWJveCc+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IHZvdGVEYXRhMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm90ZU51bTFcIik7XG4gICAgY29uc3Qgdm90ZURhdGEyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlTnVtMlwiKTtcblxuICAgIHZvdGVEYXRhMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBnZXREYXRhKDEsIDEsIHBhcnNlSW50KGdhbWVJZCkpXG4gICAgfSlcblxuICAgIHZvdGVEYXRhMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGdldERhdGEoMSwgMiwgcGFyc2VJbnQoZ2FtZUlkKSlcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGFkZERhdGEgPSAoZGF0YSwgdm90ZTEsIHZvdGUyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdobyBmcm9tIGFkZERhdGEgZnVuY3Rpb24nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3dpbm5lci12b3RlcycpLmFkZChkYXRhKTtcbiAgICAgICAgcmVuZGVyVm90ZXModm90ZTEsIHZvdGUyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJWb3RlcyA9ICh2b3RlMSwgdm90ZTIpPT57XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZvdGUxLCB2b3RlMilcbiAgICAgICAgY29uc3Qgdm90aW5nQm94RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RpbmctYm94XCIpO1xuICAgICAgICB2b3RpbmdCb3hEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZvdGluZy1yb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZvdGVzMSB2b3RlJz4ke3ZvdGUxfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZvdGVzMiB2b3RlJz4ke3ZvdGUyfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IChkYXRhLCBrZXlJZCwgdm90ZTEsIHZvdGUyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdobyBmcm9tIHVwZGF0ZURhdGEgZnVuY3Rpb24nKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGIuY29sbGVjdGlvbignd2lubmVyLXZvdGVzJykuZG9jKGtleUlkKS51cGRhdGUoZGF0YSk7XG4gICAgICAgIHJlbmRlclZvdGVzKHZvdGUxLCB2b3RlMik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0YSA9ICh2YWwsIG51bSwgZ2FtZUlkKSA9PiB7XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3dpbm5lci12b3RlcycpLmdldCgpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXMuZG9jcy5mb3JFYWNoKGRvYz0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5kYXRhKCksIGRvYy5pZClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtnYW1lSWR9YCk7XG4gICAgICAgICAgICAgICAgLy8gREFUQSBJUyBFWElTVElORyBJTiBEQVRBQkFTRS4gQ0FMTCBVUERBVEVcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChPYmplY3Qua2V5cyhkb2MuZGF0YSgpKVswXSkgPT09IGdhbWVJZCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlJZCA9IGRvYy5pZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGVzID0gKGRvYy5kYXRhKClbZ2FtZUlkXSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGUxPTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2b3RlMj0wO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHZvdGUgaW4gdm90ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGUgPT09ICd0ZWFtMScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUxID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUyID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdWb3RlMSA9IHZvdGUxICsgdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IFtnYW1lSWRdOiB7IHRlYW0xOiBuZXdWb3RlMSwgdGVhbTI6IHZvdGUyfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkPXRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgW2dhbWVJZF06IHsgdGVhbTE6IHZvdGUxLCB0ZWFtMjogbmV3Vm90ZTIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCB2b3RlMSwgbmV3Vm90ZTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gREFUQSBJUyBORVcuIENBTEwgQUREXG4gICAgICAgICAgICBpZiAodXBkYXRlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgbGV0IHZvdGUxID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdm90ZTIgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUxID0gdm90ZTEgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogbmV3Vm90ZTEsIHRlYW0yOiB2b3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogdm90ZTEsIHRlYW0yOiBuZXdWb3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCB2b3RlMSwgbmV3Vm90ZTIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclZvdGluZ1N0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCByZW5kZXJTdGFuZGluZ3M9ICgpID0+IHtcbiAgICBjb25zdCBzdGFuZGluZ3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YW5kaW5nc1wiKVxuICAgIGNvbnN0IHN0YW5kaW5nQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFuZGluZ0JveERpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1zdGFuZGluZy1ib3hcIik7XG4gICAgc3RhbmRpbmdzRGl2LmFwcGVuZChzdGFuZGluZ0JveERpdik7XG4gICAgXG4gICAgYXhpb3MuZ2V0KCcuL3N0YW5kaW5ncycpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGVhbXNBcnIgPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc3RhbmRpbmdzWzBdO1xuICAgICAgICB0ZWFtc0Fyci5mb3JFYWNoKCh0ZWFtLCBpZHgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGVhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0ZWFtUmFua0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0ZWFtTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0ZWFtUG9pbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1SYW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGVhbU5hbWVEaXYuaW5uZXJUZXh0ID0gdGVhbS50ZWFtLm5hbWU7XG4gICAgICAgICAgICB0ZWFtUG9pbnRzRGl2LmlubmVyVGV4dCA9IHRlYW0ucG9pbnRzO1xuICAgICAgICAgICAgdGVhbVJhbmtEaXYuaW5uZXJUZXh0ID0gdGVhbS5yYW5rO1xuXG4gICAgICAgICAgICB0ZWFtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXN0YW5kaW5nLXJvd1wiKTtcbiAgICAgICAgICAgIHRlYW1SYW5rQm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXJhbmstYm94XCIpO1xuICAgICAgICAgICAgdGVhbVJhbmtEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcmFua1wiKTtcbiAgICAgICAgICAgIHRlYW1Qb2ludHNEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcG9pbnRzXCIpO1xuXG4gICAgICAgICAgICB0ZWFtUmFua0JveERpdi5hcHBlbmQodGVhbVJhbmtEaXYsIHRlYW1OYW1lRGl2KVxuICAgICAgICAgICAgdGVhbURpdi5hcHBlbmQodGVhbVJhbmtCb3hEaXYsIHRlYW1Qb2ludHNEaXYpO1xuICAgICAgICAgICAgc3RhbmRpbmdCb3hEaXYuYXBwZW5kKHRlYW1EaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTdGFuZGluZ3M7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==