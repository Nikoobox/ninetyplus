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
    var responseType = config.responseType;
    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }
    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }
    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
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
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
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
        reject(cancel);
        // Clean up request
        request = null;
      });
    }
    if (!requestData) {
      requestData = null;
    }

    // Send the request
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
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);
  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");
module.exports = axios;

// Allow use of default import syntax in TypeScript
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
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");
var validators = validator.validators;
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
  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }
  var transitional = config.transitional;
  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
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
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
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
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(config, config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
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
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
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
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
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
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
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
    if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
    if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
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
module.exports = utils.isStandardBrowserEnv() ?
// Standard browser envs support document.cookie
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
}() :
// Non standard browser env (web workers, react-native) lack needed support.
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

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return typeof payload === 'object' && payload.isAxiosError === true;
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
module.exports = utils.isStandardBrowserEnv() ?
// Standard browser envs have full support of the APIs needed to test
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
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
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
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
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


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
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

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/axios/package.json");
var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);
  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }
    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}
module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
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
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
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
  }

  // Force an array if not already something iterable
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
function merge(/* obj1, obj2, obj3, ... */
) {
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

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, browser, jsdelivr, unpkg, typings, dependencies, bundlesize, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
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
  }
  // if setTimeout wasn't available but was latter defined
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
  }
  // if clearTimeout wasn't available but was latter defined
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
};

// v8 likes predictible objects
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
/* harmony import */ var _scripts_openInstructionsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/openInstructionsModal */ "./src/scripts/openInstructionsModal.js");



window.addEventListener("DOMContentLoaded", () => {
  // let round = 'Regular Season - 12' ;

  // GET CURRENT ROUND AND RENDER GAMES AND STANDINGS
  Object(_scripts_currentRound__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_scripts_openInstructionsModal__WEBPACK_IMPORTED_MODULE_2__["default"])();
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



const currentRound = () => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`currentround`).then(res => {
    const currentR = res.data.response[0];
    Object(_games__WEBPACK_IMPORTED_MODULE_1__["default"])(currentR);
    Object(_standings__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const navbarLogo = document.querySelector("#navbar-logo");
    navbarLogo.addEventListener("click", () => Object(_games__WEBPACK_IMPORTED_MODULE_1__["default"])(currentR));
  }).catch(err => {
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
const drawPie = (vote1, vote2) => {
  const dims = {
    height: 300,
    width: 300,
    radius: 150
  };
  const cent = {
    x: dims.width / 2 + 5,
    y: dims.height / 2 + 5
  };
  const svg = d3.select('#pie-box').append('svg').attr('width', dims.width + 50).attr('height', dims.height + 50);
  const graph = svg.append('g').attr('transform', `translate(${cent.x}, ${cent.y})`);
  const pie = d3.pie().sort(null).value(d => d.value);
  const arcPath = d3.arc().outerRadius(dims.radius).innerRadius(dims.radius / 1.5);
  const color = d3.scaleOrdinal(['#f5b7cd', '#0D0D0E']);
  const update = data => {
    color.domain(['team1', 'team2']);
    const paths = graph.selectAll('path').data(pie(data));
    paths.exit().remove();
    paths.attr('d', arcPath);
    paths.enter().append('path').attr('class', 'arc').attr('stroke', '#fff').attr('stroke-width', 2).attr('fill', d => color(d.data.data.name)).transition().duration(1500).attrTween('d', arcTweenEnter);
  };
  const data = pie([{
    name: 'team2',
    value: vote2
  }, {
    name: 'team1',
    value: vote1
  }]);
  const arcTweenEnter = d => {
    let i = d3.interpolate(d.endAngle, d.startAngle);
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






const renderGameById = (fixtureId, score1, score2) => {
  const leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.innerHTML = "<div></div>";
  leagueInfoDiv.classList.remove("left");
  const allGamesContentDiv = document.getElementById("all-games");
  allGamesContentDiv.innerHTML = "<div id='one-game'></div>";
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`./game?fixtureId=${fixtureId}`).then(res => {
    //clear live updates interval and local storage
    clearInterval(localStorage.getItem("localStInterval"));
    localStorage.clear();
    const oneGameContentDiv = document.getElementById("one-game");
    const fieldDiv = document.createElement("div");
    const squadsDiv = document.createElement("div");
    fieldDiv.classList.add("field-box");
    squadsDiv.classList.add("squad-box");
    squadsDiv.innerHTML = `
            <div id='team-1-box'></div>
            <div id='team-2-box'></div>
            `;
    oneGameContentDiv.append(squadsDiv);
    fieldDiv.innerHTML = `
        <div class="field-img">
            <img class="image" src="${_assets_field_png__WEBPACK_IMPORTED_MODULE_1__["default"]}"/>
            <div id='gk-1' class='rows'></div>
            <div id='def-1' class='rows'></div>
            <div id='mid-1' class='rows'></div>
            <div id='fwd-1' class='rows'></div>
            <div id='fwd-2' class='rows'></div>
            <div id='mid-2' class='rows'></div>
            <div id='def-2' class='rows'></div>
            <div id='gk-2' class='rows'></div>
        </div>
        `;
    oneGameContentDiv.append(fieldDiv);
    const gk1Div = document.getElementById("gk-1");
    const def1Div = document.getElementById("def-1");
    const mid1Div = document.getElementById("mid-1");
    const fwd1Div = document.getElementById("fwd-1");
    const gk2Div = document.getElementById("gk-2");
    const def2Div = document.getElementById("def-2");
    const mid2Div = document.getElementById("mid-2");
    const fwd2Div = document.getElementById("fwd-2");

    //adding players inside squads section
    const team1Div = document.getElementById("team-1-box");
    team1Div.innerHTML = `
                        <div class='team-1-header-box'>
                            <div class='name'>${res.data.response[0].team.name} </div>
                            <div class='logo'>
                            <img src="${res.data.response[0].team.logo}"/>
                            </div> 
                        </div>`;
    const team2Div = document.getElementById("team-2-box");
    team2Div.innerHTML = `
                        <div class='team-2-header-box'>
                            <div class='name'>${res.data.response[1].team.name}</div>
                            <div class='logo'>
                                <img src="${res.data.response[1].team.logo}"/>
                            </div> 
                        </div>`;

    //place players on a field according to their actual position and team formation
    res.data.response.forEach((command, cidx) => {
      // console.log(command)
      command.startXI.forEach((plr, pidx) => {
        if (cidx === 0) {
          const playerDiv = document.createElement("div");
          playerDiv.classList.add("team-1");
          playerDiv.innerHTML = `
                        <div class='number'>${plr.player.number}</div>
                        <div class='name'>${plr.player.name}</div> 
                        <div class='pos'>  (${plr.player.pos})</div>
                    `;
          if (plr.player.pos === "G") {
            const div = document.createElement("div");
            div.classList.add("pl1", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            gk1Div.append(div);
          } else if (plr.player.pos === "D") {
            const div = document.createElement("div");
            div.classList.add("pl1", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            def1Div.append(div);
          } else if (plr.player.pos === "M") {
            const div = document.createElement("div");
            div.classList.add("pl1", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            mid1Div.append(div);
          } else if (plr.player.pos === "F") {
            const div = document.createElement("div");
            div.classList.add("pl1", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            fwd1Div.append(div);
          }
          team1Div.appendChild(playerDiv);
        } else {
          const playerDiv = document.createElement("div");
          playerDiv.classList.add("team-2");
          playerDiv.innerHTML = `
                        <div class='number'>${plr.player.number}</div>
                        <div class='name'>${plr.player.name}</div> 
                        <div class='pos'>  (${plr.player.pos})</div>
                    `;
          if (plr.player.pos === "G") {
            const div = document.createElement("div");
            div.classList.add("pl2", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            gk2Div.append(div);
          } else if (plr.player.pos === "D") {
            const div = document.createElement("div");
            div.classList.add("pl2", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            def2Div.append(div);
          } else if (plr.player.pos === "M") {
            const div = document.createElement("div");
            div.classList.add("pl2", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            mid2Div.append(div);
          } else if (plr.player.pos === "F") {
            const div = document.createElement("div");
            div.classList.add("pl2", "pl-select");
            div.setAttribute("playerId", plr.player.id);
            div.setAttribute("teamId", command.team.id);
            div.innerText = plr.player.number;
            fwd2Div.append(div);
          }
          team2Div.appendChild(playerDiv, fixtureId);
        }
      });
    });
    Object(_getFixturePlayersStat__WEBPACK_IMPORTED_MODULE_3__["default"])(fixtureId).then(FixturePlayersStat => {
      Object(_gamestat__WEBPACK_IMPORTED_MODULE_2__["default"])(fixtureId, score1, score2, FixturePlayersStat);
      Object(_renderPlayerModal__WEBPACK_IMPORTED_MODULE_4__["default"])(squadsDiv, FixturePlayersStat, fixtureId);
    });
    Object(_openInstructionsModal__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }).catch(err => {
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





const renderGames = round => {
  const allGamesDiv = document.getElementById("all-games");
  const allGamesBoxDiv = document.createElement("div");
  allGamesDiv.innerHTML = "<div></div>";
  const leagueInfoDiv = document.getElementById("league-info");
  leagueInfoDiv.classList.add("left");
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`./games?round=${round}`).then(res => {
    const fixturesArr = res.data.response;
    const sectionNameDiv = document.createElement("div");
    sectionNameDiv.classList.add("section-name");
    let liveGamesStatus = false;
    const nextSeason = res.data.response[0].league.season + 1;
    leagueInfoDiv.innerHTML = `
        <div class='league-box'>
            <div class='country-box'>
                <div class='name'>${res.data.response[0].league.country}</div>
                <div class='flag'>
                    <img src="${res.data.response[0].league.flag}"/>
                </div>
            </div>
            <div class='logo-box'>
            <img src="${_dist_images_blacklogo_png__WEBPACK_IMPORTED_MODULE_4__["default"]}"/>
            </div>
            <div class='league-name'>
            ${res.data.response[0].league.name}
            </div>
            <div class='season-box'>
                ${res.data.response[0].league.season}-${nextSeason}
            </div>
          
            <div class='epl-link'>
                <a href='https://www.premierleague.com/' rel='noopener noreferrer' target="_blank">Visit EPL</a>   
            </div>

            <div class='by-ns'>
                <div class='at-year'>
                    <i class="far fa-copyright"></i>${new Date().getFullYear()}
                </div>
                <div class='name'>
                    <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target="_blank">by Nikolay Shatalov</a>
                </div>
            </div>
        </div>
        `;
    let currentRoundString = res.data.response[0].league.round;
    console.log("currentRoundString", currentRoundString);
    let currentRound = `${currentRoundString.split(" ").pop()} `;
    let prevRound = parseInt(currentRound) - 1;
    let nextRound = parseInt(currentRound) + 1;
    sectionNameDiv.innerHTML = `
            <div class='roundPrev'>
                <i class="fas fa-chevron-left"></i> GO TO ROUND ${prevRound}
            </div>
            <div class='roundCurr'>
                 ALL GAMES - ROUND ${currentRound} 
            </div>
            <div class='roundNext'>
                GO TO ROUND ${nextRound} <i class="fas fa-chevron-right"></i>
            </div>
            `;
    allGamesDiv.append(sectionNameDiv);
    const pRound = `Regular Season - ${prevRound}`;
    const nRound = `Regular Season - ${nextRound}`;
    const previousRound = document.querySelector(".roundPrev");
    const followingRound = document.querySelector(".roundNext");
    prevRound !== 0 ? previousRound.addEventListener("click", () => renderGames(pRound)) : "";
    nextRound === 38 ? "" : followingRound.addEventListener("click", () => renderGames(nRound));
    allGamesBoxDiv.classList.add("all-games-box");
    allGamesDiv.append(allGamesBoxDiv);
    const gameLiveStatus = ["1H", "HT", "2H", "ET", "P", "BT"];
    const gameNotLiveStatus = ["NS", "FT"];
    fixturesArr.forEach((fix, idx) => {
      const team1 = fix.teams.home.name;
      const logo1 = fix.teams.home.logo;
      const team2 = fix.teams.away.name;
      const logo2 = fix.teams.away.logo;
      const score1 = fix.goals.home;
      const score2 = fix.goals.away;
      const gameStatus = fix.fixture.status.short;
      const gameId = fix.fixture.id;

      // to check if at leat one game is live to enable updates
      if (gameLiveStatus.includes(gameStatus)) liveGamesStatus = true;
      const fixtureRowDiv = document.createElement("div");
      const gameStatusRowDiv = document.createElement("div");
      const scoreBoxDiv = document.createElement("div");
      fixtureRowDiv.classList.add("fixture-box");
      gameStatusRowDiv.classList.add("game-status-row");
      scoreBoxDiv.classList.add("score-box");
      fixtureRowDiv.setAttribute("gameId", gameId);

      // if game is live then show 'score', otherwise show 'vs'
      const temp = gameLiveStatus.includes(gameStatus) || gameStatus === "FT" ? `
            <div class='score-box'>
                <div class='score'>${score1}</div>
                <div class='score'>${score2}</div>
            </div>
            ` : '<div class="vs">vs</div>';

      // if game is not started, display VOTE button
      const voteBtnDisplay = gameStatus === "NS" ? `<div class='voting-btn-box'>
                <button 
                    class='voting-btn' 
                    team1-name='${team1}'
                    team2-name='${team2}'
                    team1-logo='${logo1}'
                    team2-logo='${logo2}'
                    gameId=${gameId}>
                    VOTE
                </button>
            </div>` : "";
      fixtureRowDiv.innerHTML = `
            <div class='game-status-section'>${fix.fixture.status.long}</div>
            <div class='team1-box' >
                <div class="name">${team1}</div>
                <div class="logo"><img src="${logo1}"/></div>
            </div>
            ${temp}
            <div class='team2-box'>
                <div class="logo"><img src="${logo2}"/></div>
                <div class="name">${team2}</div>
            </div>
            ${voteBtnDisplay}
            `;
      if (gameStatus !== "NS") {
        fixtureRowDiv.addEventListener("click", () => Object(_game__WEBPACK_IMPORTED_MODULE_1__["default"])(gameId, score1, score2));
      }
      allGamesBoxDiv.appendChild(fixtureRowDiv);
      Object(_renderVotingModal__WEBPACK_IMPORTED_MODULE_2__["default"])(allGamesBoxDiv, team1, team2);
    });

    //live update functionality
    const buttonLiveUpdates = document.createElement("div");
    buttonLiveUpdates.classList.add("live-updates-box");
    allGamesBoxDiv.appendChild(buttonLiveUpdates);
    if (localStorage.getItem("localStCounter") !== null) {
      let newCounter = localStorage.getItem("localStCounter");
      newCounter++;
      localStorage.setItem("localStCounter", newCounter);
      if (newCounter === 3) {
        clearInterval(localStorage.getItem("localStInterval"));
        localStorage.clear();
      }
    }
    buttonLiveUpdates.innerHTML = `
            <button id='live-updates'>ACTIVATE LIVE UPDATES</button>
            <button id='no-live-updates'>STOP LIVE UPDATES</button>
            `;
    const btnLiveUpdates = document.getElementById("live-updates");
    const btnNoLiveUpdates = document.getElementById("no-live-updates");
    Object(_gamesRefresh__WEBPACK_IMPORTED_MODULE_3__["default"])(btnLiveUpdates, btnNoLiveUpdates, round);
  }).catch(err => {
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
const gamesRefresh = (btnLiveUpdates, btnNoLiveUpdates, round) => {
  let interval;
  btnLiveUpdates.addEventListener('click', () => {
    Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(round);
    interval = setInterval(() => Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(round), 10000);
    localStorage.setItem('localStInterval', interval);
    let counter = 0;
    localStorage.setItem('localStCounter', counter);
  });
  btnNoLiveUpdates.addEventListener('click', () => {
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

const renderGameStat = (fixtureId, score1, score2, FixturePlayersStat) => {
  // console.log('HI FROM GAME STAT');

  const oneGameContentDiv = document.getElementById("one-game");
  const standingsDiv = document.getElementById("standings");
  // const testBoxDiv = document.createElement("div");
  // testBoxDiv.classList.add("test-box");
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/gamestat/?fixtureId=${fixtureId}`).then(res => {
    // console.log(res.data.response);
    const gameStatDiv = document.createElement('div');
    gameStatDiv.classList.add('game-stat-box');
    standingsDiv.append(gameStatDiv);
    oneGameContentDiv.append(gameStatDiv);
    const teamsStat = res.data.response;
    const possession = [];
    const shotsOn = [];
    const shotsOff = [];
    const fouls = [];
    const yc = [];
    teamsStat.forEach((teamStat, idx1) => {
      // console.log(teamStat)
      teamStat.statistics.forEach(stat => {
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
    gameStatDiv.innerHTML = `
            <div class='game-stat-title'>GAME STATISTICS</div>
            <div class='stat-box'>
                <div class='scoreBox'>
                    <div class="teamHome">
                        <div class="teamLogo">
                        <img src="${res.data.response[0].team.logo}"/>
                        </div> 
                        <div class="teamName">${res.data.response[0].team.name}</div>
                        <div class='teamScore1'>${score1}</div>
                    </div>
                    <div class="teamHome">
                        <div class="teamLogo">
                        <img src="${res.data.response[1].team.logo}"/>
                        </div> 
                        <div class="teamName">${res.data.response[1].team.name}</div>
                        <div class='teamScore2'>${score2}</div>
                    </div>  
                </div>
                <div class='who-scored-box'>
                    <div class='who-scored-team1'>
                    
                    </div>
                    <div class='who-scored-team2'>
                    
                    </div>
                </div>
                <div id="possProgress">
                    <div id="poss"></div> 
                </div>
                <div class="stat-name"> Ball Possession </div>
                <div id="shotsOnProgress">
                    <div id="shotsOn"></div> 
                </div>
                <div class="stat-name"> Shots on Goals </div>
                 <div id="shotsOffProgress">
                    <div id="shotsOff"></div>
                </div>
                <div class="stat-name"> Shots off Goals </div> 
                <div id="foulsProgress">
                    <div id="fouls"></div>
                </div>
                <div class="stat-name"> Fouls </div>  
                <div id="ycProgress">
                    <div id="yc"></div>
                </div>
                <div class="stat-name"> Yellow Cards </div>  
            </div>
            `;
    const team1PlayersStat = Object.values(FixturePlayersStat[0].players);
    const team2PlayersStat = Object.values(FixturePlayersStat[1].players);
    const team1ScoredPlDiv = document.querySelector(".who-scored-team1");
    const team2ScoredPlDiv = document.querySelector(".who-scored-team2");
    team1PlayersStat.forEach(player => {
      // console.log(player)
      if (player.statistics[0].goals.total !== null) {
        for (let i = 0; i < player.statistics[0].goals.total; i++) {
          const sc1Div = document.createElement('div');
          sc1Div.classList.add('goal-scorer');
          sc1Div.innerHTML = `
                        ${player.player.name}
                    `;
          team1ScoredPlDiv.appendChild(sc1Div);
        }
      }
    });
    team2PlayersStat.forEach(player => {
      if (player.statistics[0].goals.total !== null) {
        // console.log(player.player.name, player.statistics[0].goals.total)
        // player.statistics[0].goals.total
        for (let i = 0; i < player.statistics[0].goals.total; i++) {
          const sc2Div = document.createElement('div');
          sc2Div.classList.add('goal-scorer');
          sc2Div.innerHTML = `
                        ${player.player.name}
                    `;
          team2ScoredPlDiv.appendChild(sc2Div);
        }
      }
    });
    const renderStats = (stat1, total, idName) => {
      let elem = document.getElementById(idName);
      if (idName === 'poss') {
        elem.style.width = stat1;
      } else {
        let ratio = stat1 / total * 100;
        elem.style.width = ratio + "%";
      }
    };
    renderStats(possession[0].value, 0, "poss");
    renderStats(shotsOn[0].value, shotsOn[0].value + shotsOn[1].value, "shotsOn");
    renderStats(shotsOff[0].value, shotsOff[0].value + shotsOff[1].value, "shotsOff");
    renderStats(fouls[0].value, fouls[0].value + fouls[1].value, "fouls");
    renderStats(yc[0].value, yc[0].value + yc[1].value, "yc");
  }).catch(err => {
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

const getFixturePlayersStat = fixtureId => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`./fixture_players_stat?fixtureId=${fixtureId}`).then(res => {
    // console.log('Hi from fixture players stat!')
    // console.log(res.data.response);
    // console.log('end');
    return res.data.response;
  }).catch(err => {
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
const openInstructionsModal = () => {
  const navDiv = document.querySelector('.div-for-modal');
  const instrBtn = document.getElementById('instructions-link');
  // console.log(instrBtn, navDiv);

  const modalDiv = document.createElement('div');
  modalDiv.innerHTML = `
    <div id="myModalInst" class="modalInst">
        <div class="modal-content">
            <span class="closeInt">&times;</span>
            
            <div id='modal-box-inst'>
                <div class='about-title'>ABOUT</div>
                <div class='about'>
                    90Plus is a soccer score app for the English Premier League. This app brings you the fixtures with live updates, game stats, game winner voting options and more.
                </div>

                <div class='inst-title'>INSTRUCTIONS</div>
                <div class='inst'>
                    <ul>
                        <li>CURRENT matchday games are displayed on the main page (ex. ALL GAMES - ROUND 17).
                        </li>  
                        <li>OLDER game info could be accessed from the top navigation bar when clicking on pink button (ex. <span><i class="fas fa-chevron-left"></i> GO TO ROUND 16</span>)</li>
                        <li>Similarly, FUTURE game info could be accessed from the top navigation bar (ex. <span>GO TO ROUND 18 <i class="fas fa-chevron-right"></i></span>).</li>
                        <li>The user can click on LIVE or FINISHED fixtures to see detailed statistics. A player’s stats are available when hovering over any player on the pitch. Try it!</li>
                        <li>The user can vote for the game WINNER by clicking on the VOTE button. This feature is available only for future games.</li>    
                        <li>Live updates can be manually turned on by selecting <span>ACTIVATE LIVE UPDATES</span>. When selected, the page will refresh 3 times every 10 seconds for demonstration purposes. Live updates can be turned off by selecting <span>STOP LIVE UPDATES</span>.</li>      
                    <ul>   
                </div>

                
                <div class='built-by'>
                    Built by <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target="_blank">Nikolay Shatalov</a>
                </div>

            </div>
        
        </div>
    </div>
    `;
  navDiv.appendChild(modalDiv);
  const modal = document.querySelector("#myModalInst");
  const span = document.getElementsByClassName("closeInt")[0];
  instrBtn.addEventListener('click', () => {
    modal.style.display = "block";
  });
  span.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
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

const renderPlayerModal = (squadsDiv, FixturePlayersStat, fixtureId) => {
  const modalDiv = document.createElement('div');
  modalDiv.innerHTML = `
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>

                    <div id='modal-box'>
                        Some text goes here ...
                    </div>

                </div>
            </div>
        `;
  squadsDiv.appendChild(modalDiv);
  const modal = document.querySelector("#myModal");
  const playersToClick = document.querySelectorAll(".pl-select");
  const span = document.getElementsByClassName("close")[0];
  playersToClick.forEach(player => {
    player.addEventListener('click', () => {
      modal.style.display = "block";
      const playerId = player.getAttribute('playerId');
      const teamId = player.getAttribute('teamId');
      const playerIdm = parseInt(playerId);
      const teamIdm = parseInt(teamId);
      Object(_renderPlayerStat__WEBPACK_IMPORTED_MODULE_0__["default"])(playerIdm, teamIdm, fixtureId, FixturePlayersStat);
    });
  });
  span.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
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
const renderPlayerStat = (playerIdm, teamIdm, fixtureIdm, FixturePlayersStatm) => {
  let teamInfo = {};
  let playerInfo = {};
  let playerStat = {};
  FixturePlayersStatm.forEach(squad => {
    if (squad.team.id === teamIdm) {
      teamInfo = squad;
      squad.players.forEach((player, idx) => {
        if (player.player.id === playerIdm) {
          playerInfo = player.player;
          playerStat = player.statistics[0];
        }
      });
    }
    ;
  });
  const modalBox = document.getElementById("modal-box");
  const rightBoxData = playerStat.games.position === 'G' ? `<div class='saves-box row'>
            <div class='title'>Saves: </div>
            <div class='value'>${playerStat.goals.saves ? playerStat.goals.saves : 0}</div>
        </div>
        <div class='conceded-box row'>
            <div class='title'>Goals conceded: </div>
            <div class='value'>${playerStat.goals.conceded ? playerStat.goals.conceded : 0}</div>
        </div>
        ` : `<div class='duels-box row'>
            <div class='title'>Duels Won/Total: </div>
            <div class='value'>${playerStat.duels.won ? playerStat.duels.won : 0} / ${playerStat.duels.total ? playerStat.duels.total : 0}</div>
        </div>
        <div class='passes-box row'>
            <div class='title'>Passes(Accuracy%): </div>
            <div class='value'>${playerStat.passes.total ? playerStat.passes.total : 0} (${playerStat.passes.accuracy ? playerStat.passes.accuracy : 0}%)</div>
        </div>
        <div class='shots-box row'>
            <div class='title'>Shots: </div>
            <div class='value'>${playerStat.shots.total ? playerStat.shots.total : 0}</div>
        </div>
         <div class='goals-box row'>
            <div class='title'>Goals: </div>
            <div class='value'>${playerStat.goals.total ? playerStat.goals.total : 0} </div>
        </div>
        `;
  modalBox.innerHTML = `   <div class='left-box'>
                <div class='pl-img-box'>
                    <img src="${playerInfo.photo}"/>
                </div>
                <div class='pl-name'>${playerInfo.name}</div>
                <div class='position-number-box'>
                    <div class='value'>Number: ${playerStat.games.number}</div>
                </div>
            </div>
            <div class='right-box'>
                <div class='position-box row'>
                    <div class='title'>Position: </div>
                    <div class='value'>${playerStat.games.position}</div>
                </div>
                <div class='rating-box row'>
                    <div class='title'>Rating: </div>
                    <div class='value'>${playerStat.games.rating ? playerStat.games.rating : 0}</div>
                </div>
                <div class='minutes-box row'>
                    <div class='title'>Minutes: </div>
                    <div class='value'>${playerStat.games.minutes ? playerStat.games.minutes : 0}</div>
                </div>

                ${rightBoxData}
                
            </div>
        `;
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

const renderVotingModal = (allGamesBoxDiv, t1ref, t2ref) => {
  const modalDiv = document.createElement('div');
  modalDiv.innerHTML = `
        <div id="myVotingModal" class="modal-v">
            <div class="modal-v-content">
                <span class="close-v">&times;</span>
                <div id='modal-v-box'>
                </div>
            </div>
        </div>
        `;
  allGamesBoxDiv.appendChild(modalDiv);
  const modalV = document.querySelector("#myVotingModal");
  const spanV = document.getElementsByClassName("close-v")[0];
  const votingBtns = document.querySelectorAll(".voting-btn");
  votingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // user anonymous auth login
      auth.signInAnonymously();
      modalV.style.display = "block";

      // console.log('HI FROM VOTING MODAL')
      const name1 = btn.getAttribute('team1-name');
      const name2 = btn.getAttribute('team2-name');
      const logo1 = btn.getAttribute('team1-logo');
      const logo2 = btn.getAttribute('team2-logo');
      const gId = btn.getAttribute('gameId');
      if (t1ref === btn.getAttribute('team1-name')) {
        Object(_renderVotingStat__WEBPACK_IMPORTED_MODULE_0__["default"])(name1, name2, logo1, logo2, gId);
      }
    });
  });
  spanV.onclick = () => {
    // user anonymous auth login
    auth.signOut();
    modalV.style.display = "none";
  };
  window.onclick = event => {
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

const renderVotingStat = (name1, name2, logo1, logo2, gameId) => {
  const modalVBox = document.getElementById("modal-v-box");
  modalVBox.innerHTML = `
        <div class='teams-row'>
            <div class='btn-box'>
                <button id='voteNum1' name='name1'>${name1}</button>
            </div>
            <div class='message'> Who will win? </div>
            <div class='btn-box'>
                <button id='voteNum2' name='name2'>${name2}</button>
            </div>
        </div>
        <div id='voting-box'>
            
        </div>
    `;
  const voteData1 = document.getElementById("voteNum1");
  const voteData2 = document.getElementById("voteNum2");
  voteData1.addEventListener('click', e => {
    getData(1, 1, parseInt(gameId));
  });
  voteData2.addEventListener('click', e => {
    getData(1, 2, parseInt(gameId));
  });
  const addData = (data, vote1, vote2) => {
    // console.log('ho from addData function');
    // console.log(data);
    db.collection('winner-votes').add(data);
    renderVotes(vote1, vote2);
  };
  const renderVotes = (vote1, vote2) => {
    // console.log(vote1, vote2)
    const votingBoxDiv = document.getElementById("voting-box");
    votingBoxDiv.innerHTML = `
            <div class='voting-row'>
                <div class='votes1 vote'>${(vote1 / (vote1 + vote2) * 100).toFixed(1)}%</div>
                <div class='votes2 vote'>${(vote2 / (vote1 + vote2) * 100).toFixed(1)}%</div>
            </div>
            <div id='pie-box'>
                
            </div> 
        `;
    Object(_drawPie__WEBPACK_IMPORTED_MODULE_0__["default"])(vote1, vote2);
  };
  const updateData = (data, keyId, vote1, vote2) => {
    // console.log(data);
    db.collection('winner-votes').doc(keyId).update(data);
    renderVotes(vote1, vote2);
  };
  const getData = (val, num, gameId) => {
    db.collection('winner-votes').get().then(res => {
      let updated = false;
      res.docs.forEach(doc => {
        // console.log(doc.data(), doc.id)
        // console.log(`${gameId}`);
        // DATA IS EXISTING IN DATABASE. CALL UPDATE
        if (parseInt(Object.keys(doc.data())[0]) === gameId) {
          let keyId = doc.id;
          let votes = doc.data()[gameId];
          let vote1 = 0;
          let vote2 = 0;
          for (let vote in votes) {
            if (vote === 'team1') {
              vote1 = votes[vote];
            } else {
              vote2 = votes[vote];
            }
          }
          if (num === 1) {
            let newVote1 = vote1 + val;
            let newData = {
              [gameId]: {
                team1: newVote1,
                team2: vote2
              }
            };
            updateData(newData, keyId, newVote1, vote2);
            updated = true;
          } else {
            let newVote2 = vote2 + val;
            let newData = {
              [gameId]: {
                team1: vote1,
                team2: newVote2
              }
            };
            updateData(newData, keyId, vote1, newVote2);
            updated = true;
          }
        }
      });
      // DATA IS NEW. CALL ADD FUNCTION
      if (updated == false) {
        let vote1 = 0;
        let vote2 = 0;
        if (num === 1) {
          let newVote1 = vote1 + val;
          let newData = {
            [gameId]: {
              team1: newVote1,
              team2: vote2
            }
          };
          addData(newData, newVote1, vote2);
        } else {
          let newVote2 = vote2 + val;
          let newData = {
            [gameId]: {
              team1: vote1,
              team2: newVote2
            }
          };
          addData(newData, vote1, newVote2);
        }
      }
    }).catch(err => {
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

const renderStandings = () => {
  const standingsDiv = document.getElementById("standings");
  const standingBoxDiv = document.createElement("div");
  standingBoxDiv.classList.add("team-standing-box");
  standingsDiv.append(standingBoxDiv);
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("./standings").then(res => {
    console.log(" renderStandings res", res);
    if (res.data.response.length !== 0) {
      const teamsArr = res.data.response[0].league.standings[0];
      teamsArr.forEach((team, idx) => {
        const teamDiv = document.createElement("div");
        const teamRankBoxDiv = document.createElement("div");
        const teamNameDiv = document.createElement("div");
        const teamPointsDiv = document.createElement("div");
        const teamGamesCountDiv = document.createElement("div");
        const teamRankDiv = document.createElement("div");
        const dataDiv = document.createElement("div");
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
    } else {
      const emptyResponseDiv = document.createElement("div");
      emptyResponseDiv.innerText = "Standings data is not available at this time...";
      emptyResponseDiv.classList.add("empty-response");
      standingBoxDiv.append(emptyResponseDiv);
    }
  }).catch(err => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpZWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9kaXN0L2ltYWdlcy9ibGFja2xvZ28ucG5nIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jdXJyZW50Um91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZHJhd1BpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVzUmVmcmVzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lc3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nZXRGaXh0dXJlUGxheWVyc1N0YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvb3Blbkluc3RydWN0aW9uc01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlclBsYXllck1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlclBsYXllclN0YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyVm90aW5nTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyVm90aW5nU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdGFuZGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2U0YWEiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnRSb3VuZCIsIm9wZW5JbnN0cnVjdGlvbnNNb2RhbCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImN1cnJlbnRSIiwiZGF0YSIsInJlc3BvbnNlIiwicmVuZGVyR2FtZXMiLCJyZW5kZXJTdGFuZGluZ3MiLCJuYXZiYXJMb2dvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZHJhd1BpZSIsInZvdGUxIiwidm90ZTIiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJjZW50IiwieCIsInkiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJncmFwaCIsInBpZSIsInNvcnQiLCJ2YWx1ZSIsImQiLCJhcmNQYXRoIiwiYXJjIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsImNvbG9yIiwic2NhbGVPcmRpbmFsIiwidXBkYXRlIiwiZG9tYWluIiwicGF0aHMiLCJzZWxlY3RBbGwiLCJleGl0IiwicmVtb3ZlIiwiZW50ZXIiLCJuYW1lIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwiYXJjVHdlZW5FbnRlciIsImkiLCJpbnRlcnBvbGF0ZSIsImVuZEFuZ2xlIiwic3RhcnRBbmdsZSIsInQiLCJyZW5kZXJHYW1lQnlJZCIsImZpeHR1cmVJZCIsInNjb3JlMSIsInNjb3JlMiIsImxlYWd1ZUluZm9EaXYiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFsbEdhbWVzQ29udGVudERpdiIsImNsZWFySW50ZXJ2YWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xlYXIiLCJvbmVHYW1lQ29udGVudERpdiIsImZpZWxkRGl2IiwiY3JlYXRlRWxlbWVudCIsInNxdWFkc0RpdiIsImFkZCIsImZpZWxkIiwiZ2sxRGl2IiwiZGVmMURpdiIsIm1pZDFEaXYiLCJmd2QxRGl2IiwiZ2syRGl2IiwiZGVmMkRpdiIsIm1pZDJEaXYiLCJmd2QyRGl2IiwidGVhbTFEaXYiLCJ0ZWFtIiwibG9nbyIsInRlYW0yRGl2IiwiZm9yRWFjaCIsImNvbW1hbmQiLCJjaWR4Iiwic3RhcnRYSSIsInBsciIsInBpZHgiLCJwbGF5ZXJEaXYiLCJwbGF5ZXIiLCJudW1iZXIiLCJwb3MiLCJkaXYiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiZ2V0Rml4dHVyZVBsYXllcnNTdGF0IiwiRml4dHVyZVBsYXllcnNTdGF0IiwicmVuZGVyR2FtZVN0YXQiLCJyZW5kZXJQbGF5ZXJNb2RhbCIsInJvdW5kIiwiYWxsR2FtZXNEaXYiLCJhbGxHYW1lc0JveERpdiIsImZpeHR1cmVzQXJyIiwic2VjdGlvbk5hbWVEaXYiLCJsaXZlR2FtZXNTdGF0dXMiLCJuZXh0U2Vhc29uIiwibGVhZ3VlIiwic2Vhc29uIiwiY291bnRyeSIsImZsYWciLCJlcGxMb2dvIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiY3VycmVudFJvdW5kU3RyaW5nIiwic3BsaXQiLCJwb3AiLCJwcmV2Um91bmQiLCJwYXJzZUludCIsIm5leHRSb3VuZCIsInBSb3VuZCIsIm5Sb3VuZCIsInByZXZpb3VzUm91bmQiLCJmb2xsb3dpbmdSb3VuZCIsImdhbWVMaXZlU3RhdHVzIiwiZ2FtZU5vdExpdmVTdGF0dXMiLCJmaXgiLCJpZHgiLCJ0ZWFtMSIsInRlYW1zIiwiaG9tZSIsImxvZ28xIiwidGVhbTIiLCJhd2F5IiwibG9nbzIiLCJnb2FscyIsImdhbWVTdGF0dXMiLCJmaXh0dXJlIiwic3RhdHVzIiwic2hvcnQiLCJnYW1lSWQiLCJpbmNsdWRlcyIsImZpeHR1cmVSb3dEaXYiLCJnYW1lU3RhdHVzUm93RGl2Iiwic2NvcmVCb3hEaXYiLCJ0ZW1wIiwidm90ZUJ0bkRpc3BsYXkiLCJsb25nIiwicmVuZGVyVm90aW5nTW9kYWwiLCJidXR0b25MaXZlVXBkYXRlcyIsIm5ld0NvdW50ZXIiLCJzZXRJdGVtIiwiYnRuTGl2ZVVwZGF0ZXMiLCJidG5Ob0xpdmVVcGRhdGVzIiwiZ2FtZXNSZWZyZXNoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvdW50ZXIiLCJyZW1vdmVJdGVtIiwiZGlzYWJsZWQiLCJzdGFuZGluZ3NEaXYiLCJnYW1lU3RhdERpdiIsInRlYW1zU3RhdCIsInBvc3Nlc3Npb24iLCJzaG90c09uIiwic2hvdHNPZmYiLCJmb3VscyIsInljIiwidGVhbVN0YXQiLCJpZHgxIiwic3RhdGlzdGljcyIsInN0YXQiLCJ0eXBlIiwicHVzaCIsInRlYW0xUGxheWVyc1N0YXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwbGF5ZXJzIiwidGVhbTJQbGF5ZXJzU3RhdCIsInRlYW0xU2NvcmVkUGxEaXYiLCJ0ZWFtMlNjb3JlZFBsRGl2IiwidG90YWwiLCJzYzFEaXYiLCJzYzJEaXYiLCJyZW5kZXJTdGF0cyIsInN0YXQxIiwiaWROYW1lIiwiZWxlbSIsInN0eWxlIiwicmF0aW8iLCJuYXZEaXYiLCJpbnN0ckJ0biIsIm1vZGFsRGl2IiwibW9kYWwiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRpc3BsYXkiLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGF5ZXJzVG9DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJJZCIsImdldEF0dHJpYnV0ZSIsInRlYW1JZCIsInBsYXllcklkbSIsInRlYW1JZG0iLCJyZW5kZXJQbGF5ZXJTdGF0IiwiZml4dHVyZUlkbSIsIkZpeHR1cmVQbGF5ZXJzU3RhdG0iLCJ0ZWFtSW5mbyIsInBsYXllckluZm8iLCJwbGF5ZXJTdGF0Iiwic3F1YWQiLCJtb2RhbEJveCIsInJpZ2h0Qm94RGF0YSIsImdhbWVzIiwicG9zaXRpb24iLCJzYXZlcyIsImNvbmNlZGVkIiwiZHVlbHMiLCJ3b24iLCJwYXNzZXMiLCJhY2N1cmFjeSIsInNob3RzIiwicGhvdG8iLCJyYXRpbmciLCJtaW51dGVzIiwidDFyZWYiLCJ0MnJlZiIsIm1vZGFsViIsInNwYW5WIiwidm90aW5nQnRucyIsImJ0biIsImF1dGgiLCJzaWduSW5Bbm9ueW1vdXNseSIsIm5hbWUxIiwibmFtZTIiLCJnSWQiLCJyZW5kZXJWb3RpbmdTdGF0Iiwic2lnbk91dCIsIm1vZGFsVkJveCIsInZvdGVEYXRhMSIsInZvdGVEYXRhMiIsImUiLCJnZXREYXRhIiwiYWRkRGF0YSIsImRiIiwiY29sbGVjdGlvbiIsInJlbmRlclZvdGVzIiwidm90aW5nQm94RGl2IiwidG9GaXhlZCIsInVwZGF0ZURhdGEiLCJrZXlJZCIsImRvYyIsInZhbCIsIm51bSIsInVwZGF0ZWQiLCJkb2NzIiwia2V5cyIsInZvdGVzIiwidm90ZSIsIm5ld1ZvdGUxIiwibmV3RGF0YSIsIm5ld1ZvdGUyIiwic3RhbmRpbmdCb3hEaXYiLCJsZW5ndGgiLCJ0ZWFtc0FyciIsInN0YW5kaW5ncyIsInRlYW1EaXYiLCJ0ZWFtUmFua0JveERpdiIsInRlYW1OYW1lRGl2IiwidGVhbVBvaW50c0RpdiIsInRlYW1HYW1lc0NvdW50RGl2IiwidGVhbVJhbmtEaXYiLCJkYXRhRGl2IiwicG9pbnRzIiwiYWxsIiwicGxheWVkIiwicmFuayIsImVtcHR5UmVzcG9uc2VEaXYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQWUscUZBQXNCLEU7Ozs7Ozs7Ozs7O0FDQXJDLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFhLEU7Ozs7Ozs7Ozs7OztBQ0F6Qjs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7QUFDaEMsYUFBYSxtQkFBTyxDQUFD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Q0FBQ3lQLE9BQU8sQ0FBQztNQUNoQyxDQUFDLENBQUM7SUFDSixDQUFDLE1BQU07TUFDTCxNQUFNVyxnQkFBZ0IsR0FBR3ZSLFFBQVEsQ0FBQ2dFLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDdER1TixnQkFBZ0IsQ0FBQzFMLFNBQVMsR0FDeEIsaURBQWlEO01BQ25EMEwsZ0JBQWdCLENBQUMvTixTQUFTLENBQUNVLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNoRHNNLGNBQWMsQ0FBQ3JQLE1BQU0sQ0FBQ29RLGdCQUFnQixDQUFDO0lBQ3pDO0VBQ0YsQ0FBQyxDQUFDLENBQ0RyUixLQUFLLENBQUVDLEdBQUcsSUFBSztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0VBQ2xCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFY0wsOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDckQ5QjtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2ZpZWxkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2JsYWNrbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG4gICAgdmFyIHJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCBjb25maWcudHJhbnNpdGlvbmFsICYmIGNvbmZpZy50cmFuc2l0aW9uYWwuY2xhcmlmeVRpbWVvdXRFcnJvciA/ICdFVElNRURPVVQnIDogJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/IGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xudmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdmFsaWRhdG9yJyk7XG52YXIgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuICB2YXIgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbDtcbiAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuLCAnMS4wLjAnKSxcbiAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4sICcxLjAuMCcpLFxuICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuLCAnMS4wLjAnKVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgdmFyIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHZhciBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG4gICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG4gIHZhciByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG4gIHZhciBwcm9taXNlO1xuICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICBjaGFpbiA9IGNoYWluLmNvbmNhdChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICB2YXIgbmV3Q29uZmlnID0gY29uZmlnO1xuICB3aGlsZSAocmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoKSB7XG4gICAgdmFyIG9uRnVsZmlsbGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB2YXIgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCk7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG9uUmVqZWN0ZWQoZXJyb3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdChuZXdDb25maWcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbiAgd2hpbGUgKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkLCBvcHRpb25zKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxuICAgIHN5bmNocm9ub3VzOiBvcHRpb25zID8gb3B0aW9ucy5zeW5jaHJvbm91cyA6IGZhbHNlLFxuICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChjb25maWcsIGNvbmZpZy5kYXRhLCBjb25maWcuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QpO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSwgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sIGNvbmZpZy5oZWFkZXJzKTtcbiAgdXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSwgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gIH0pO1xuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKGNvbmZpZywgcmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKGNvbmZpZywgcmVhc29uLnJlc3BvbnNlLmRhdGEsIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gWydiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsICd0aW1lb3V0JywgJ3RpbWVvdXRNZXNzYWdlJywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnLCAncmVzcG9uc2VFbmNvZGluZyddO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5cy5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cykuY29uY2F0KGRpcmVjdE1lcmdlS2V5cyk7XG4gIHZhciBvdGhlcktleXMgPSBPYmplY3Qua2V5cyhjb25maWcxKS5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuICByZXR1cm4gY29uZmlnO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLmNvbmZpZywgbnVsbCwgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIHZhciBjb250ZXh0ID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb250ZXh0LCBkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2NvcmUvZW5oYW5jZUVycm9yJyk7XG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cbnZhciBkZWZhdWx0cyA9IHtcbiAgdHJhbnNpdGlvbmFsOiB7XG4gICAgc2lsZW50SlNPTlBhcnNpbmc6IHRydWUsXG4gICAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2VcbiAgfSxcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8IHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHwgdXRpbHMuaXNGaWxlKGRhdGEpIHx8IHV0aWxzLmlzQmxvYihkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSB8fCBoZWFkZXJzICYmIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbicpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICB2YXIgdHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWw7XG4gICAgdmFyIHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICB2YXIgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIHZhciBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuICAgIGlmIChzdHJpY3RKU09OUGFyc2luZyB8fCBmb3JjZWRKU09OUGFyc2luZyAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGVuaGFuY2VFcnJvcihlLCB0aGlzLCAnRV9KU09OX1BBUlNFJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLnJlcGxhY2UoLyUzQS9naSwgJzonKS5yZXBsYWNlKC8lMjQvZywgJyQnKS5yZXBsYWNlKC8lMkMvZ2ksICcsJykucmVwbGFjZSgvJTIwL2csICcrJykucmVwbGFjZSgvJTVCL2dpLCAnWycpLnJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTCA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKSA6IGJhc2VVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cbi8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4ge1xuICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICB9XG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgfVxuICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgfSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgfVxuICB9O1xufSgpIDpcbi8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbmZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIHtcbiAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gIH07XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JyAmJiBwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHZhciBvcmlnaW5VUkw7XG5cbiAgLyoqXG4gICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICogQHJldHVybnMge09iamVjdH1cbiAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICB2YXIgaHJlZiA9IHVybDtcbiAgICBpZiAobXNpZSkge1xuICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICB9XG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgcGF0aG5hbWU6IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgIH07XG4gIH1cbiAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgLyoqXG4gICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgdmFyIHBhcnNlZCA9IHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgcmV0dXJuIHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdDtcbiAgfTtcbn0oKSA6XG4vLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJywgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLCAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuICBpZiAoIWhlYWRlcnMpIHtcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGtnID0gcmVxdWlyZSgnLi8uLi8uLi9wYWNrYWdlLmpzb24nKTtcbnZhciB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSwgaSkge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcbnZhciBkZXByZWNhdGVkV2FybmluZ3MgPSB7fTtcbnZhciBjdXJyZW50VmVyQXJyID0gcGtnLnZlcnNpb24uc3BsaXQoJy4nKTtcblxuLyoqXG4gKiBDb21wYXJlIHBhY2thZ2UgdmVyc2lvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IHRoYW5WZXJzaW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPbGRlclZlcnNpb24odmVyc2lvbiwgdGhhblZlcnNpb24pIHtcbiAgdmFyIHBrZ1ZlcnNpb25BcnIgPSB0aGFuVmVyc2lvbiA/IHRoYW5WZXJzaW9uLnNwbGl0KCcuJykgOiBjdXJyZW50VmVyQXJyO1xuICB2YXIgZGVzdFZlciA9IHZlcnNpb24uc3BsaXQoJy4nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBpZiAocGtnVmVyc2lvbkFycltpXSA+IGRlc3RWZXJbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAocGtnVmVyc2lvbkFycltpXSA8IGRlc3RWZXJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7c3RyaW5nP30gdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIHZhciBpc0RlcHJlY2F0ZWQgPSB2ZXJzaW9uICYmIGlzT2xkZXJWZXJzaW9uKHZlcnNpb24pO1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgcGtnLnZlcnNpb24gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgb3B0LCBvcHRzKSB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkIGluICcgKyB2ZXJzaW9uKSk7XG4gICAgfVxuICAgIGlmIChpc0RlcHJlY2F0ZWQgJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICB2YXIgb3B0ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNPbGRlclZlcnNpb246IGlzT2xkZXJWZXJzaW9uLFxuICBhc3NlcnRPcHRpb25zOiBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzOiB2YWxpZGF0b3JzXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcikgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgdmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnRyaW0gPyBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi9cbikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICogQHJldHVybiB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgfVxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgfVxufSkoKTtcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfVxuICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICB9XG4gIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfVxuICB0cnkge1xuICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICB9XG4gIH1cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gIH1cbiAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgIGRyYWluUXVldWUoKTtcbiAgfVxufVxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgaWYgKGRyYWluaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChsZW4pIHtcbiAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICB9XG4gIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgfVxuICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICB0aGlzLmZ1biA9IGZ1bjtcbiAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBbXTtcbn07XG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnLyc7XG59O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gMDtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGN1cnJlbnRSb3VuZCBmcm9tIFwiLi9zY3JpcHRzL2N1cnJlbnRSb3VuZFwiO1xuaW1wb3J0IG9wZW5JbnN0cnVjdGlvbnNNb2RhbCBmcm9tIFwiLi9zY3JpcHRzL29wZW5JbnN0cnVjdGlvbnNNb2RhbFwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBsZXQgcm91bmQgPSAnUmVndWxhciBTZWFzb24gLSAxMicgO1xuXG4gIC8vIEdFVCBDVVJSRU5UIFJPVU5EIEFORCBSRU5ERVIgR0FNRVMgQU5EIFNUQU5ESU5HU1xuICBjdXJyZW50Um91bmQoKTtcbiAgb3Blbkluc3RydWN0aW9uc01vZGFsKCk7XG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByZW5kZXJHYW1lcyBmcm9tIFwiLi9nYW1lc1wiO1xuaW1wb3J0IHJlbmRlclN0YW5kaW5ncyBmcm9tIFwiLi9zdGFuZGluZ3NcIjtcblxuY29uc3QgY3VycmVudFJvdW5kID0gKCkgPT4ge1xuICBheGlvc1xuICAgIC5nZXQoYGN1cnJlbnRyb3VuZGApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFIgPSByZXMuZGF0YS5yZXNwb25zZVswXTtcblxuICAgICAgcmVuZGVyR2FtZXMoY3VycmVudFIpO1xuICAgICAgcmVuZGVyU3RhbmRpbmdzKCk7XG5cbiAgICAgIGNvbnN0IG5hdmJhckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1sb2dvXCIpO1xuICAgICAgbmF2YmFyTG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyR2FtZXMoY3VycmVudFIpKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFJvdW5kO1xuIiwiY29uc3QgZHJhd1BpZSA9ICh2b3RlMSwgdm90ZTIpID0+IHtcblxuICAgIGNvbnN0IGRpbXMgPSB7aGVpZ2h0OjMwMCwgd2lkdGg6MzAwLCByYWRpdXM6MTUwfTtcbiAgICBjb25zdCBjZW50ID0ge3g6IChkaW1zLndpZHRoIC8gMiArIDUpLCB5OiAoZGltcy5oZWlnaHQgIC8yICsgNSl9O1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjcGllLWJveCcpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIGRpbXMud2lkdGggKyA1MClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGRpbXMuaGVpZ2h0ICsgNTApXG5cbiAgICBjb25zdCBncmFwaCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgKVxuXG4gICAgY29uc3QgcGllID0gZDMucGllKClcbiAgICAgICAgLnNvcnQobnVsbClcbiAgICAgICAgLnZhbHVlKGQgPT4gZC52YWx1ZSk7XG5cbiAgICBjb25zdCBhcmNQYXRoID0gZDMuYXJjKClcbiAgICAgICAgLm91dGVyUmFkaXVzKGRpbXMucmFkaXVzKVxuICAgICAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMvMS41KVxuICAgIFxuICAgIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKFsnI2Y1YjdjZCcsICcjMEQwRDBFJ10pXG5cbiAgICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuXG4gICAgICAgIGNvbG9yLmRvbWFpbihbJ3RlYW0xJywgJ3RlYW0yJ10pXG4gICAgICAgIGNvbnN0IHBhdGhzID0gZ3JhcGguc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgICAgIC5kYXRhKHBpZShkYXRhKSk7XG5cbiAgICAgICAgcGF0aHMuZXhpdCgpLnJlbW92ZSgpO1xuICAgICAgICBwYXRocy5hdHRyKCdkJywgYXJjUGF0aCk7XG5cbiAgICAgICAgcGF0aHMuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2FyYycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICcjZmZmJylcbiAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcbiAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsIGQ9PmNvbG9yKGQuZGF0YS5kYXRhLm5hbWUpKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTUwMCkgXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBhcmNUd2VlbkVudGVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IHBpZShbXG4gICAgICAgIHsgbmFtZTogJ3RlYW0yJywgdmFsdWU6IHZvdGUyIH0sXG4gICAgICAgIHsgbmFtZTogJ3RlYW0xJywgdmFsdWU6IHZvdGUxIH1cbiAgICBdKVxuXG4gICAgXG4gICAgY29uc3QgYXJjVHdlZW5FbnRlciA9IChkKSA9PiB7XG4gICAgICAgIGxldCBpID0gZDMuaW50ZXJwb2xhdGUoZC5lbmRBbmdsZSwgZC5zdGFydEFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpe1xuICAgICAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcbiAgICAgICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1cGRhdGUoZGF0YSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdQaWU7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGZpZWxkIGZyb20gXCIuLi8uLi9hc3NldHMvZmllbGQucG5nXCI7XG5pbXBvcnQgcmVuZGVyR2FtZVN0YXQgZnJvbSBcIi4vZ2FtZXN0YXRcIjtcbmltcG9ydCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgZnJvbSBcIi4vZ2V0Rml4dHVyZVBsYXllcnNTdGF0XCI7XG5pbXBvcnQgcmVuZGVyUGxheWVyTW9kYWwgZnJvbSBcIi4vcmVuZGVyUGxheWVyTW9kYWxcIjtcbmltcG9ydCBvcGVuSW5zdHJ1Y3Rpb25zTW9kYWwgZnJvbSBcIi4vb3Blbkluc3RydWN0aW9uc01vZGFsXCI7XG5cbmNvbnN0IHJlbmRlckdhbWVCeUlkID0gKGZpeHR1cmVJZCwgc2NvcmUxLCBzY29yZTIpID0+IHtcbiAgY29uc3QgbGVhZ3VlSW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZ3VlLWluZm9cIik7XG4gIGxlYWd1ZUluZm9EaXYuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuICBsZWFndWVJbmZvRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0XCIpO1xuXG4gIGNvbnN0IGFsbEdhbWVzQ29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdhbWVzXCIpO1xuICBhbGxHYW1lc0NvbnRlbnREaXYuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPSdvbmUtZ2FtZSc+PC9kaXY+XCI7XG5cbiAgYXhpb3NcbiAgICAuZ2V0KGAuL2dhbWU/Zml4dHVyZUlkPSR7Zml4dHVyZUlkfWApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy9jbGVhciBsaXZlIHVwZGF0ZXMgaW50ZXJ2YWwgYW5kIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGNsZWFySW50ZXJ2YWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFN0SW50ZXJ2YWxcIikpO1xuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAgIGNvbnN0IG9uZUdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmUtZ2FtZVwiKTtcbiAgICAgIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHNxdWFkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1ib3hcIik7XG4gICAgICBzcXVhZHNEaXYuY2xhc3NMaXN0LmFkZChcInNxdWFkLWJveFwiKTtcblxuICAgICAgc3F1YWRzRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9J3RlYW0tMS1ib3gnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0ndGVhbS0yLWJveCc+PC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgb25lR2FtZUNvbnRlbnREaXYuYXBwZW5kKHNxdWFkc0Rpdik7XG5cbiAgICAgIGZpZWxkRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlXCIgc3JjPVwiJHtmaWVsZH1cIi8+XG4gICAgICAgICAgICA8ZGl2IGlkPSdnay0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdkZWYtMScgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nbWlkLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2Z3ZC0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdmd2QtMicgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nbWlkLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2RlZi0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdnay0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICBvbmVHYW1lQ29udGVudERpdi5hcHBlbmQoZmllbGREaXYpO1xuXG4gICAgICBjb25zdCBnazFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdrLTFcIik7XG4gICAgICBjb25zdCBkZWYxRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWYtMVwiKTtcbiAgICAgIGNvbnN0IG1pZDFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC0xXCIpO1xuICAgICAgY29uc3QgZndkMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZndkLTFcIik7XG4gICAgICBjb25zdCBnazJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdrLTJcIik7XG4gICAgICBjb25zdCBkZWYyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWYtMlwiKTtcbiAgICAgIGNvbnN0IG1pZDJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC0yXCIpO1xuICAgICAgY29uc3QgZndkMkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZndkLTJcIik7XG5cbiAgICAgIC8vYWRkaW5nIHBsYXllcnMgaW5zaWRlIHNxdWFkcyBzZWN0aW9uXG4gICAgICBjb25zdCB0ZWFtMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVhbS0xLWJveFwiKTtcbiAgICAgIHRlYW0xRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0tMS1oZWFkZXItYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz4ke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLnRlYW0ubmFtZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLnRlYW0ubG9nb31cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgY29uc3QgdGVhbTJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW0tMi1ib3hcIik7XG4gICAgICB0ZWFtMkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLTItaGVhZGVyLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgIC8vcGxhY2UgcGxheWVycyBvbiBhIGZpZWxkIGFjY29yZGluZyB0byB0aGVpciBhY3R1YWwgcG9zaXRpb24gYW5kIHRlYW0gZm9ybWF0aW9uXG4gICAgICByZXMuZGF0YS5yZXNwb25zZS5mb3JFYWNoKChjb21tYW5kLCBjaWR4KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1hbmQpXG4gICAgICAgIGNvbW1hbmQuc3RhcnRYSS5mb3JFYWNoKChwbHIsIHBpZHgpID0+IHtcbiAgICAgICAgICBpZiAoY2lkeCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS0xXCIpO1xuICAgICAgICAgICAgcGxheWVyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J251bWJlcic+JHtwbHIucGxheWVyLm51bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cGxyLnBsYXllci5uYW1lfTwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvcyc+ICAoJHtwbHIucGxheWVyLnBvc30pPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBpZiAocGxyLnBsYXllci5wb3MgPT09IFwiR1wiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicGwxXCIsIFwicGwtc2VsZWN0XCIpO1xuICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwicGxheWVySWRcIiwgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJ0ZWFtSWRcIiwgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICBnazFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSBcIkRcIikge1xuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBsMVwiLCBcInBsLXNlbGVjdFwiKTtcbiAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInBsYXllcklkXCIsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwidGVhbUlkXCIsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgZGVmMURpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09IFwiTVwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicGwxXCIsIFwicGwtc2VsZWN0XCIpO1xuICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwicGxheWVySWRcIiwgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJ0ZWFtSWRcIiwgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICBtaWQxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gXCJGXCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbDFcIiwgXCJwbC1zZWxlY3RcIik7XG4gICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJJZFwiLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInRlYW1JZFwiLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgIGZ3ZDFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZWFtMURpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLTJcIik7XG4gICAgICAgICAgICBwbGF5ZXJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbnVtYmVyJz4ke3Bsci5wbGF5ZXIubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtwbHIucGxheWVyLm5hbWV9PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncG9zJz4gICgke3Bsci5wbGF5ZXIucG9zfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGlmIChwbHIucGxheWVyLnBvcyA9PT0gXCJHXCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbDJcIiwgXCJwbC1zZWxlY3RcIik7XG4gICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJJZFwiLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInRlYW1JZFwiLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgIGdrMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09IFwiRFwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicGwyXCIsIFwicGwtc2VsZWN0XCIpO1xuICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwicGxheWVySWRcIiwgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJ0ZWFtSWRcIiwgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICBkZWYyRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbDJcIiwgXCJwbC1zZWxlY3RcIik7XG4gICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJJZFwiLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInRlYW1JZFwiLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgIG1pZDJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSBcIkZcIikge1xuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBsMlwiLCBcInBsLXNlbGVjdFwiKTtcbiAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInBsYXllcklkXCIsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwidGVhbUlkXCIsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgZndkMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlYW0yRGl2LmFwcGVuZENoaWxkKHBsYXllckRpdiwgZml4dHVyZUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGdldEZpeHR1cmVQbGF5ZXJzU3RhdChmaXh0dXJlSWQpLnRoZW4oKEZpeHR1cmVQbGF5ZXJzU3RhdCkgPT4ge1xuICAgICAgICByZW5kZXJHYW1lU3RhdChmaXh0dXJlSWQsIHNjb3JlMSwgc2NvcmUyLCBGaXh0dXJlUGxheWVyc1N0YXQpO1xuXG4gICAgICAgIHJlbmRlclBsYXllck1vZGFsKHNxdWFkc0RpdiwgRml4dHVyZVBsYXllcnNTdGF0LCBmaXh0dXJlSWQpO1xuICAgICAgfSk7XG5cbiAgICAgIG9wZW5JbnN0cnVjdGlvbnNNb2RhbCgpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lQnlJZDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByZW5kZXJHYW1lQnlJZCBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgcmVuZGVyVm90aW5nTW9kYWwgZnJvbSBcIi4vcmVuZGVyVm90aW5nTW9kYWxcIjtcbmltcG9ydCBnYW1lc1JlZnJlc2ggZnJvbSBcIi4vZ2FtZXNSZWZyZXNoXCI7XG5pbXBvcnQgZXBsTG9nbyBmcm9tIFwiLi4vLi4vZGlzdC9pbWFnZXMvYmxhY2tsb2dvLnBuZ1wiO1xuXG5jb25zdCByZW5kZXJHYW1lcyA9IChyb3VuZCkgPT4ge1xuICBjb25zdCBhbGxHYW1lc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdhbWVzXCIpO1xuICBjb25zdCBhbGxHYW1lc0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFsbEdhbWVzRGl2LmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcbiAgY29uc3QgbGVhZ3VlSW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZ3VlLWluZm9cIik7XG4gIGxlYWd1ZUluZm9EaXYuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG5cbiAgYXhpb3NcbiAgICAuZ2V0KGAuL2dhbWVzP3JvdW5kPSR7cm91bmR9YClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCBmaXh0dXJlc0FyciA9IHJlcy5kYXRhLnJlc3BvbnNlO1xuICAgICAgY29uc3Qgc2VjdGlvbk5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2VjdGlvbk5hbWVEaXYuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tbmFtZVwiKTtcblxuICAgICAgbGV0IGxpdmVHYW1lc1N0YXR1cyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBuZXh0U2Vhc29uID0gcmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLnNlYXNvbiArIDE7XG4gICAgICBsZWFndWVJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0nbGVhZ3VlLWJveCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3VudHJ5LWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuY291bnRyeX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGFnJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5mbGFnfVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nby1ib3gnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VwbExvZ299XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdsZWFndWUtbmFtZSc+XG4gICAgICAgICAgICAke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzZWFzb24tYm94Jz5cbiAgICAgICAgICAgICAgICAke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5zZWFzb259LSR7bmV4dFNlYXNvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZXBsLWxpbmsnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnByZW1pZXJsZWFndWUuY29tLycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyB0YXJnZXQ9XCJfYmxhbmtcIj5WaXNpdCBFUEw8L2E+ICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnktbnMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2F0LXllYXInPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jb3B5cmlnaHRcIj48L2k+JHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vbmlrb2xheXNoYXRhbG92LmNvbS8nIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgdGFyZ2V0PVwiX2JsYW5rXCI+YnkgTmlrb2xheSBTaGF0YWxvdjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgIGxldCBjdXJyZW50Um91bmRTdHJpbmcgPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUucm91bmQ7XG4gICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRSb3VuZFN0cmluZ1wiLCBjdXJyZW50Um91bmRTdHJpbmcpO1xuICAgICAgbGV0IGN1cnJlbnRSb3VuZCA9IGAke2N1cnJlbnRSb3VuZFN0cmluZy5zcGxpdChcIiBcIikucG9wKCl9IGA7XG4gICAgICBsZXQgcHJldlJvdW5kID0gcGFyc2VJbnQoY3VycmVudFJvdW5kKSAtIDE7XG4gICAgICBsZXQgbmV4dFJvdW5kID0gcGFyc2VJbnQoY3VycmVudFJvdW5kKSArIDE7XG4gICAgICBzZWN0aW9uTmFtZURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3VuZFByZXYnPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gR08gVE8gUk9VTkQgJHtwcmV2Um91bmR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JvdW5kQ3Vycic+XG4gICAgICAgICAgICAgICAgIEFMTCBHQU1FUyAtIFJPVU5EICR7Y3VycmVudFJvdW5kfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncm91bmROZXh0Jz5cbiAgICAgICAgICAgICAgICBHTyBUTyBST1VORCAke25leHRSb3VuZH0gPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgIGFsbEdhbWVzRGl2LmFwcGVuZChzZWN0aW9uTmFtZURpdik7XG5cbiAgICAgIGNvbnN0IHBSb3VuZCA9IGBSZWd1bGFyIFNlYXNvbiAtICR7cHJldlJvdW5kfWA7XG4gICAgICBjb25zdCBuUm91bmQgPSBgUmVndWxhciBTZWFzb24gLSAke25leHRSb3VuZH1gO1xuICAgICAgY29uc3QgcHJldmlvdXNSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmRQcmV2XCIpO1xuICAgICAgY29uc3QgZm9sbG93aW5nUm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdW5kTmV4dFwiKTtcblxuICAgICAgcHJldlJvdW5kICE9PSAwXG4gICAgICAgID8gcHJldmlvdXNSb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyR2FtZXMocFJvdW5kKSlcbiAgICAgICAgOiBcIlwiO1xuXG4gICAgICBuZXh0Um91bmQgPT09IDM4XG4gICAgICAgID8gXCJcIlxuICAgICAgICA6IGZvbGxvd2luZ1JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZW5kZXJHYW1lcyhuUm91bmQpKTtcblxuICAgICAgYWxsR2FtZXNCb3hEaXYuY2xhc3NMaXN0LmFkZChcImFsbC1nYW1lcy1ib3hcIik7XG4gICAgICBhbGxHYW1lc0Rpdi5hcHBlbmQoYWxsR2FtZXNCb3hEaXYpO1xuICAgICAgY29uc3QgZ2FtZUxpdmVTdGF0dXMgPSBbXCIxSFwiLCBcIkhUXCIsIFwiMkhcIiwgXCJFVFwiLCBcIlBcIiwgXCJCVFwiXTtcbiAgICAgIGNvbnN0IGdhbWVOb3RMaXZlU3RhdHVzID0gW1wiTlNcIiwgXCJGVFwiXTtcblxuICAgICAgZml4dHVyZXNBcnIuZm9yRWFjaCgoZml4LCBpZHgpID0+IHtcbiAgICAgICAgY29uc3QgdGVhbTEgPSBmaXgudGVhbXMuaG9tZS5uYW1lO1xuICAgICAgICBjb25zdCBsb2dvMSA9IGZpeC50ZWFtcy5ob21lLmxvZ287XG4gICAgICAgIGNvbnN0IHRlYW0yID0gZml4LnRlYW1zLmF3YXkubmFtZTtcbiAgICAgICAgY29uc3QgbG9nbzIgPSBmaXgudGVhbXMuYXdheS5sb2dvO1xuICAgICAgICBjb25zdCBzY29yZTEgPSBmaXguZ29hbHMuaG9tZTtcbiAgICAgICAgY29uc3Qgc2NvcmUyID0gZml4LmdvYWxzLmF3YXk7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBmaXguZml4dHVyZS5zdGF0dXMuc2hvcnQ7XG4gICAgICAgIGNvbnN0IGdhbWVJZCA9IGZpeC5maXh0dXJlLmlkO1xuXG4gICAgICAgIC8vIHRvIGNoZWNrIGlmIGF0IGxlYXQgb25lIGdhbWUgaXMgbGl2ZSB0byBlbmFibGUgdXBkYXRlc1xuICAgICAgICBpZiAoZ2FtZUxpdmVTdGF0dXMuaW5jbHVkZXMoZ2FtZVN0YXR1cykpIGxpdmVHYW1lc1N0YXR1cyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZml4dHVyZVJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0dXNSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzY29yZUJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgZml4dHVyZVJvd0Rpdi5jbGFzc0xpc3QuYWRkKFwiZml4dHVyZS1ib3hcIik7XG4gICAgICAgIGdhbWVTdGF0dXNSb3dEaXYuY2xhc3NMaXN0LmFkZChcImdhbWUtc3RhdHVzLXJvd1wiKTtcbiAgICAgICAgc2NvcmVCb3hEaXYuY2xhc3NMaXN0LmFkZChcInNjb3JlLWJveFwiKTtcblxuICAgICAgICBmaXh0dXJlUm93RGl2LnNldEF0dHJpYnV0ZShcImdhbWVJZFwiLCBnYW1lSWQpO1xuXG4gICAgICAgIC8vIGlmIGdhbWUgaXMgbGl2ZSB0aGVuIHNob3cgJ3Njb3JlJywgb3RoZXJ3aXNlIHNob3cgJ3ZzJ1xuICAgICAgICBjb25zdCB0ZW1wID1cbiAgICAgICAgICBnYW1lTGl2ZVN0YXR1cy5pbmNsdWRlcyhnYW1lU3RhdHVzKSB8fCBnYW1lU3RhdHVzID09PSBcIkZUXCJcbiAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzY29yZSc+JHtzY29yZTF9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUnPiR7c2NvcmUyfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA6ICc8ZGl2IGNsYXNzPVwidnNcIj52czwvZGl2Pic7XG5cbiAgICAgICAgLy8gaWYgZ2FtZSBpcyBub3Qgc3RhcnRlZCwgZGlzcGxheSBWT1RFIGJ1dHRvblxuICAgICAgICBjb25zdCB2b3RlQnRuRGlzcGxheSA9XG4gICAgICAgICAgZ2FtZVN0YXR1cyA9PT0gXCJOU1wiXG4gICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPSd2b3RpbmctYnRuLWJveCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3ZvdGluZy1idG4nIFxuICAgICAgICAgICAgICAgICAgICB0ZWFtMS1uYW1lPScke3RlYW0xfSdcbiAgICAgICAgICAgICAgICAgICAgdGVhbTItbmFtZT0nJHt0ZWFtMn0nXG4gICAgICAgICAgICAgICAgICAgIHRlYW0xLWxvZ289JyR7bG9nbzF9J1xuICAgICAgICAgICAgICAgICAgICB0ZWFtMi1sb2dvPScke2xvZ28yfSdcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUlkPSR7Z2FtZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgVk9URVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIGZpeHR1cmVSb3dEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZS1zdGF0dXMtc2VjdGlvbic+JHtmaXguZml4dHVyZS5zdGF0dXMubG9uZ308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0xLWJveCcgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHt0ZWFtMX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjxpbWcgc3JjPVwiJHtsb2dvMX1cIi8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICR7dGVtcH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0yLWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48aW1nIHNyYz1cIiR7bG9nbzJ9XCIvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHt0ZWFtMn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHt2b3RlQnRuRGlzcGxheX1cbiAgICAgICAgICAgIGA7XG5cbiAgICAgICAgaWYgKGdhbWVTdGF0dXMgIT09IFwiTlNcIikge1xuICAgICAgICAgIGZpeHR1cmVSb3dEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICAgICAgICByZW5kZXJHYW1lQnlJZChnYW1lSWQsIHNjb3JlMSwgc2NvcmUyKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChmaXh0dXJlUm93RGl2KTtcbiAgICAgICAgcmVuZGVyVm90aW5nTW9kYWwoYWxsR2FtZXNCb3hEaXYsIHRlYW0xLCB0ZWFtMik7XG4gICAgICB9KTtcblxuICAgICAgLy9saXZlIHVwZGF0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICBjb25zdCBidXR0b25MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBidXR0b25MaXZlVXBkYXRlcy5jbGFzc0xpc3QuYWRkKFwibGl2ZS11cGRhdGVzLWJveFwiKTtcbiAgICAgIGFsbEdhbWVzQm94RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkxpdmVVcGRhdGVzKTtcblxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxTdENvdW50ZXJcIikgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsU3RDb3VudGVyXCIpO1xuICAgICAgICBuZXdDb3VudGVyKys7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxTdENvdW50ZXJcIiwgbmV3Q291bnRlcik7XG4gICAgICAgIGlmIChuZXdDb3VudGVyID09PSAzKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsU3RJbnRlcnZhbFwiKSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nbGl2ZS11cGRhdGVzJz5BQ1RJVkFURSBMSVZFIFVQREFURVM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9J25vLWxpdmUtdXBkYXRlcyc+U1RPUCBMSVZFIFVQREFURVM8L2J1dHRvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICBjb25zdCBidG5MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS11cGRhdGVzXCIpO1xuICAgICAgY29uc3QgYnRuTm9MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm8tbGl2ZS11cGRhdGVzXCIpO1xuXG4gICAgICBnYW1lc1JlZnJlc2goYnRuTGl2ZVVwZGF0ZXMsIGJ0bk5vTGl2ZVVwZGF0ZXMsIHJvdW5kKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZXM7XG4iLCJpbXBvcnQgcmVuZGVyR2FtZXMgZnJvbSAnLi9nYW1lcyc7XG5cbi8vZ2FtZXNSZWZyZXNoLmpzXG5jb25zdCBnYW1lc1JlZnJlc2ggPSAoYnRuTGl2ZVVwZGF0ZXMsIGJ0bk5vTGl2ZVVwZGF0ZXMsIHJvdW5kKSA9PiB7XG5cbiAgICBsZXQgaW50ZXJ2YWw7XG4gICAgXG4gICAgYnRuTGl2ZVVwZGF0ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckdhbWVzKHJvdW5kKVxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHJlbmRlckdhbWVzKHJvdW5kKSwgMTAwMDApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxTdEludGVydmFsJywgaW50ZXJ2YWwpO1xuICAgICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RDb3VudGVyJywgY291bnRlcik7XG4gICAgfSk7XG4gICAgXG4gICAgYnRuTm9MaXZlVXBkYXRlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9jYWxTdEludGVydmFsJyk7XG5cbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnRuTm9MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSk7XG5cblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykgIT09IG51bGwpe1xuICAgICAgICBidG5MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIGJ0bk5vTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYnRuTm9MaXZlVXBkYXRlcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lc1JlZnJlc2g7XG5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVuZGVyR2FtZVN0YXQgPSAoZml4dHVyZUlkLCBzY29yZTEsIHNjb3JlMiwgRml4dHVyZVBsYXllcnNTdGF0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ0hJIEZST00gR0FNRSBTVEFUJyk7XG4gICBcbiAgICBjb25zdCBvbmVHYW1lQ29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25lLWdhbWVcIik7XG4gICAgY29uc3Qgc3RhbmRpbmdzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFuZGluZ3NcIilcbiAgICAvLyBjb25zdCB0ZXN0Qm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB0ZXN0Qm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXN0LWJveFwiKTtcbiAgICBheGlvcy5nZXQoYC9nYW1lc3RhdC8/Zml4dHVyZUlkPSR7Zml4dHVyZUlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXNwb25zZSk7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVTdGF0RGl2LmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3RhdC1ib3gnKTtcbiAgICAgICAgc3RhbmRpbmdzRGl2LmFwcGVuZChnYW1lU3RhdERpdik7XG4gICAgICAgIG9uZUdhbWVDb250ZW50RGl2LmFwcGVuZChnYW1lU3RhdERpdik7XG4gICAgICAgIGNvbnN0IHRlYW1zU3RhdCA9IHJlcy5kYXRhLnJlc3BvbnNlO1xuICAgICAgICBjb25zdCBwb3NzZXNzaW9uID0gW107XG4gICAgICAgIGNvbnN0IHNob3RzT24gPSBbXTtcbiAgICAgICAgY29uc3Qgc2hvdHNPZmYgPSBbXTtcbiAgICAgICAgY29uc3QgZm91bHMgPSBbXTtcbiAgICAgICAgY29uc3QgeWMgPSBbXTtcblxuICAgICAgICB0ZWFtc1N0YXQuZm9yRWFjaCgodGVhbVN0YXQsIGlkeDEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlYW1TdGF0KVxuICAgICAgICAgICAgdGVhbVN0YXQuc3RhdGlzdGljcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiQmFsbCBQb3NzZXNzaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2Vzc2lvbi5wdXNoKHN0YXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIlNob3RzIG9uIEdvYWxcIil7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT24ucHVzaChzdGF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQudHlwZSA9PT0gXCJTaG90cyBvZmYgR29hbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3RzT2ZmLnB1c2goc3RhdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiRm91bHNcIikge1xuICAgICAgICAgICAgICAgICAgICBmb3Vscy5wdXNoKHN0YXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiWWVsbG93IENhcmRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWMucHVzaChzdGF0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBnYW1lU3RhdERpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZS1zdGF0LXRpdGxlJz5HQU1FIFNUQVRJU1RJQ1M8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzY29yZUJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Mb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTmFtZVwiPiR7cmVzLmRhdGEucmVzcG9uc2VbMF0udGVhbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbVNjb3JlMSc+JHtzY29yZTF9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbUhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzFdLnRlYW0ubG9nb31cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbU5hbWVcIj4ke3Jlcy5kYXRhLnJlc3BvbnNlWzFdLnRlYW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW1TY29yZTInPiR7c2NvcmUyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3doby1zY29yZWQtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2hvLXNjb3JlZC10ZWFtMSc+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2hvLXNjb3JlZC10ZWFtMic+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zc1Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3NzXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gQmFsbCBQb3NzZXNzaW9uIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09uUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNob3RzT25cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBTaG90cyBvbiBHb2FscyA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNob3RzT2ZmUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNob3RzT2ZmXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBTaG90cyBvZmYgR29hbHMgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3Vsc1Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3Vsc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gRm91bHMgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwieWNQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwieWNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IFllbGxvdyBDYXJkcyA8L2Rpdj4gIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgIFxuICAgICAgICBjb25zdCB0ZWFtMVBsYXllcnNTdGF0ID0gT2JqZWN0LnZhbHVlcyhGaXh0dXJlUGxheWVyc1N0YXRbMF0ucGxheWVycyk7XG4gICAgICAgIGNvbnN0IHRlYW0yUGxheWVyc1N0YXQgPSBPYmplY3QudmFsdWVzKEZpeHR1cmVQbGF5ZXJzU3RhdFsxXS5wbGF5ZXJzKTtcbiAgICAgICBcbiAgICAgICAgY29uc3QgdGVhbTFTY29yZWRQbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvLXNjb3JlZC10ZWFtMVwiKTtcbiAgICAgICAgY29uc3QgdGVhbTJTY29yZWRQbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvLXNjb3JlZC10ZWFtMlwiKTtcblxuICAgICAgICB0ZWFtMVBsYXllcnNTdGF0LmZvckVhY2gocGxheWVyPT57XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIpXG4gICAgICAgICAgICBpZiAocGxheWVyLnN0YXRpc3RpY3NbMF0uZ29hbHMudG90YWwgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnN0YXRpc3RpY3NbMF0uZ29hbHMudG90YWw7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBzYzFEaXYuY2xhc3NMaXN0LmFkZCgnZ29hbC1zY29yZXInKTtcbiAgICAgICAgICAgICAgICAgICAgc2MxRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cGxheWVyLnBsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIHRlYW0xU2NvcmVkUGxEaXYuYXBwZW5kQ2hpbGQoc2MxRGl2KVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRlYW0yUGxheWVyc1N0YXQuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGxheWVyLnN0YXRpc3RpY3NbMF0uZ29hbHMudG90YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIucGxheWVyLm5hbWUsIHBsYXllci5zdGF0aXN0aWNzWzBdLmdvYWxzLnRvdGFsKVxuICAgICAgICAgICAgICAgIC8vIHBsYXllci5zdGF0aXN0aWNzWzBdLmdvYWxzLnRvdGFsXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuc3RhdGlzdGljc1swXS5nb2Fscy50b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBzYzJEaXYuY2xhc3NMaXN0LmFkZCgnZ29hbC1zY29yZXInKTtcbiAgICAgICAgICAgICAgICAgICAgc2MyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cGxheWVyLnBsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIHRlYW0yU2NvcmVkUGxEaXYuYXBwZW5kQ2hpbGQoc2MyRGl2KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZW5kZXJTdGF0cyA9IChzdGF0MSwgdG90YWwsIGlkTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE5hbWUpO1xuICAgICAgICAgICAgaWYgKGlkTmFtZSA9PT0gJ3Bvc3MnKXtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gc3RhdDE7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAoc3RhdDEgLyB0b3RhbCApICoxMDA7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHJhdGlvICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyU3RhdHMocG9zc2Vzc2lvblswXS52YWx1ZSwgMCwgXCJwb3NzXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09uWzBdLnZhbHVlLCBzaG90c09uWzBdLnZhbHVlICsgc2hvdHNPblsxXS52YWx1ZSwgXCJzaG90c09uXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyhzaG90c09mZlswXS52YWx1ZSwgc2hvdHNPZmZbMF0udmFsdWUgKyBzaG90c09mZlsxXS52YWx1ZSwgXCJzaG90c09mZlwiKTtcbiAgICAgICAgcmVuZGVyU3RhdHMoZm91bHNbMF0udmFsdWUsIGZvdWxzWzBdLnZhbHVlICsgZm91bHNbMV0udmFsdWUsIFwiZm91bHNcIik7XG4gICAgICAgIHJlbmRlclN0YXRzKHljWzBdLnZhbHVlLCB5Y1swXS52YWx1ZSArIHljWzFdLnZhbHVlLCBcInljXCIpO1xuICAgICAgXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZVN0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQgPSAoZml4dHVyZUlkKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgLi9maXh0dXJlX3BsYXllcnNfc3RhdD9maXh0dXJlSWQ9JHtmaXh0dXJlSWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIaSBmcm9tIGZpeHR1cmUgcGxheWVycyBzdGF0IScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCcpO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEucmVzcG9uc2U7XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRGaXh0dXJlUGxheWVyc1N0YXQ7IiwiY29uc3Qgb3Blbkluc3RydWN0aW9uc01vZGFsID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXYtZm9yLW1vZGFsJyk7XG4gICAgY29uc3QgaW5zdHJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25zLWxpbmsnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhpbnN0ckJ0biwgbmF2RGl2KTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRGl2LmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxkaXYgaWQ9XCJteU1vZGFsSW5zdFwiIGNsYXNzPVwibW9kYWxJbnN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlSW50XCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBpZD0nbW9kYWwtYm94LWluc3QnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Fib3V0LXRpdGxlJz5BQk9VVDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Fib3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgOTBQbHVzIGlzIGEgc29jY2VyIHNjb3JlIGFwcCBmb3IgdGhlIEVuZ2xpc2ggUHJlbWllciBMZWFndWUuIFRoaXMgYXBwIGJyaW5ncyB5b3UgdGhlIGZpeHR1cmVzIHdpdGggbGl2ZSB1cGRhdGVzLCBnYW1lIHN0YXRzLCBnYW1lIHdpbm5lciB2b3Rpbmcgb3B0aW9ucyBhbmQgbW9yZS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2luc3QtdGl0bGUnPklOU1RSVUNUSU9OUzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2luc3QnPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q1VSUkVOVCBtYXRjaGRheSBnYW1lcyBhcmUgZGlzcGxheWVkIG9uIHRoZSBtYWluIHBhZ2UgKGV4LiBBTEwgR0FNRVMgLSBST1VORCAxNykuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+T0xERVIgZ2FtZSBpbmZvIGNvdWxkIGJlIGFjY2Vzc2VkIGZyb20gdGhlIHRvcCBuYXZpZ2F0aW9uIGJhciB3aGVuIGNsaWNraW5nIG9uIHBpbmsgYnV0dG9uIChleC4gPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBHTyBUTyBST1VORCAxNjwvc3Bhbj4pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TaW1pbGFybHksIEZVVFVSRSBnYW1lIGluZm8gY291bGQgYmUgYWNjZXNzZWQgZnJvbSB0aGUgdG9wIG5hdmlnYXRpb24gYmFyIChleC4gPHNwYW4+R08gVE8gUk9VTkQgMTggPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L3NwYW4+KS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSB1c2VyIGNhbiBjbGljayBvbiBMSVZFIG9yIEZJTklTSEVEIGZpeHR1cmVzIHRvIHNlZSBkZXRhaWxlZCBzdGF0aXN0aWNzLiBBIHBsYXllcuKAmXMgc3RhdHMgYXJlIGF2YWlsYWJsZSB3aGVuIGhvdmVyaW5nIG92ZXIgYW55IHBsYXllciBvbiB0aGUgcGl0Y2guIFRyeSBpdCE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSB1c2VyIGNhbiB2b3RlIGZvciB0aGUgZ2FtZSBXSU5ORVIgYnkgY2xpY2tpbmcgb24gdGhlIFZPVEUgYnV0dG9uLiBUaGlzIGZlYXR1cmUgaXMgYXZhaWxhYmxlIG9ubHkgZm9yIGZ1dHVyZSBnYW1lcy48L2xpPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5MaXZlIHVwZGF0ZXMgY2FuIGJlIG1hbnVhbGx5IHR1cm5lZCBvbiBieSBzZWxlY3RpbmcgPHNwYW4+QUNUSVZBVEUgTElWRSBVUERBVEVTPC9zcGFuPi4gV2hlbiBzZWxlY3RlZCwgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoIDMgdGltZXMgZXZlcnkgMTAgc2Vjb25kcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3Nlcy4gTGl2ZSB1cGRhdGVzIGNhbiBiZSB0dXJuZWQgb2ZmIGJ5IHNlbGVjdGluZyA8c3Bhbj5TVE9QIExJVkUgVVBEQVRFUzwvc3Bhbj4uPC9saT4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHVsPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnVpbHQtYnknPlxuICAgICAgICAgICAgICAgICAgICBCdWlsdCBieSA8YSBocmVmPSdodHRwczovL25pa29sYXlzaGF0YWxvdi5jb20vJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInIHRhcmdldD1cIl9ibGFua1wiPk5pa29sYXkgU2hhdGFsb3Y8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG4gICAgXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215TW9kYWxJbnN0XCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VJbnRcIilbMF07XG5cbiAgICBpbnN0ckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFxuXG4gICAgfSlcblxuICAgIHNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb3Blbkluc3RydWN0aW9uc01vZGFsOyIsImltcG9ydCByZW5kZXJQbGF5ZXJTdGF0IGZyb20gJy4vcmVuZGVyUGxheWVyU3RhdCc7XG5cbmNvbnN0IHJlbmRlclBsYXllck1vZGFsID0gKHNxdWFkc0RpdiwgRml4dHVyZVBsYXllcnNTdGF0LCBmaXh0dXJlSWQpID0+IHtcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRGl2LmlubmVySFRNTCA9XG4gICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJteU1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J21vZGFsLWJveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb21lIHRleHQgZ29lcyBoZXJlIC4uLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICBzcXVhZHNEaXYuYXBwZW5kQ2hpbGQobW9kYWxEaXYpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215TW9kYWxcIik7XG4gICAgY29uc3QgcGxheWVyc1RvQ2xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsLXNlbGVjdFwiKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4gICAgcGxheWVyc1RvQ2xpY2suZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJZCA9IHBsYXllci5nZXRBdHRyaWJ1dGUoJ3BsYXllcklkJyk7XG4gICAgICAgICAgICBjb25zdCB0ZWFtSWQgPSBwbGF5ZXIuZ2V0QXR0cmlidXRlKCd0ZWFtSWQnKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVySWRtID0gcGFyc2VJbnQocGxheWVySWQpO1xuICAgICAgICAgICAgY29uc3QgdGVhbUlkbSA9IHBhcnNlSW50KHRlYW1JZCk7XG4gICAgICAgICAgICByZW5kZXJQbGF5ZXJTdGF0KHBsYXllcklkbSwgdGVhbUlkbSwgZml4dHVyZUlkLCBGaXh0dXJlUGxheWVyc1N0YXQpO1xuICAgICAgICB9KTtcblxuICAgIH0pXG5cbiAgICBzcGFuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBsYXllck1vZGFsOyIsIlxuY29uc3QgcmVuZGVyUGxheWVyU3RhdCA9IChwbGF5ZXJJZG0sIHRlYW1JZG0sIGZpeHR1cmVJZG0sIEZpeHR1cmVQbGF5ZXJzU3RhdG0pID0+IHtcblxuICAgIGxldCB0ZWFtSW5mbyA9IHt9O1xuICAgIGxldCBwbGF5ZXJJbmZvPXt9O1xuICAgIGxldCBwbGF5ZXJTdGF0ID0ge307XG5cbiAgICBGaXh0dXJlUGxheWVyc1N0YXRtLmZvckVhY2goKHNxdWFkKT0+e1xuXG4gICAgICAgIGlmIChzcXVhZC50ZWFtLmlkID09PSB0ZWFtSWRtKSB7XG4gICAgICAgICAgICB0ZWFtSW5mbyA9IHNxdWFkO1xuICAgICAgICAgICAgc3F1YWQucGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGlkeCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBsYXllci5pZCA9PT0gcGxheWVySWRtKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVySW5mbyA9IHBsYXllci5wbGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclN0YXQgPSBwbGF5ZXIuc3RhdGlzdGljc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH0pXG5cblxuICAgIGNvbnN0IG1vZGFsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1ib3hcIik7XG5cbiAgICBjb25zdCByaWdodEJveERhdGEgPSAocGxheWVyU3RhdC5nYW1lcy5wb3NpdGlvbiA9PT0gJ0cnKSA/XG4gICAgICAgIGA8ZGl2IGNsYXNzPSdzYXZlcy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TYXZlczogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLnNhdmVzID8gcGxheWVyU3RhdC5nb2Fscy5zYXZlcyA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb25jZWRlZC1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5Hb2FscyBjb25jZWRlZDogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdvYWxzLmNvbmNlZGVkID8gcGxheWVyU3RhdC5nb2Fscy5jb25jZWRlZCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgIFxuICAgIDogXG4gICAgICAgIGA8ZGl2IGNsYXNzPSdkdWVscy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5EdWVscyBXb24vVG90YWw6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5kdWVscy53b24gPyBwbGF5ZXJTdGF0LmR1ZWxzLndvbiA6IDB9IC8gJHtwbGF5ZXJTdGF0LmR1ZWxzLnRvdGFsID8gcGxheWVyU3RhdC5kdWVscy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdwYXNzZXMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UGFzc2VzKEFjY3VyYWN5JSk6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5wYXNzZXMudG90YWwgPyBwbGF5ZXJTdGF0LnBhc3Nlcy50b3RhbCA6IDB9ICgke3BsYXllclN0YXQucGFzc2VzLmFjY3VyYWN5ID8gcGxheWVyU3RhdC5wYXNzZXMuYWNjdXJhY3kgOiAwfSUpPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaG90cy1ib3ggcm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5TaG90czogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LnNob3RzLnRvdGFsID8gcGxheWVyU3RhdC5zaG90cy50b3RhbCA6IDB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz0nZ29hbHMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+R29hbHM6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nb2Fscy50b3RhbCA/IHBsYXllclN0YXQuZ29hbHMudG90YWwgOiAwfSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgXG4gICAgO1xuXG4gICAgbW9kYWxCb3guaW5uZXJIVE1MID1cbiAgICAgICAgYCAgIDxkaXYgY2xhc3M9J2xlZnQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbC1pbWctYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BsYXllckluZm8ucGhvdG99XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsLW5hbWUnPiR7cGxheWVySW5mby5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLW51bWJlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+TnVtYmVyOiAke3BsYXllclN0YXQuZ2FtZXMubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc2l0aW9uLWJveCByb3cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+UG9zaXRpb246IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdhbWVzLnBvc2l0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JhdGluZy1ib3ggcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlJhdGluZzogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZ2FtZXMucmF0aW5nID8gcGxheWVyU3RhdC5nYW1lcy5yYXRpbmcgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21pbnV0ZXMtYm94IHJvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5NaW51dGVzOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nYW1lcy5taW51dGVzID8gcGxheWVyU3RhdC5nYW1lcy5taW51dGVzIDogMH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICR7cmlnaHRCb3hEYXRhfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQbGF5ZXJTdGF0OyIsImltcG9ydCByZW5kZXJWb3RpbmdTdGF0IGZyb20gJy4vcmVuZGVyVm90aW5nU3RhdCc7XG5cbmNvbnN0IHJlbmRlclZvdGluZ01vZGFsID0gKGFsbEdhbWVzQm94RGl2LCB0MXJlZiwgdDJyZWYpID0+IHtcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRGl2LmlubmVySFRNTCA9XG4gICAgICAgIGBcbiAgICAgICAgPGRpdiBpZD1cIm15Vm90aW5nTW9kYWxcIiBjbGFzcz1cIm1vZGFsLXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC12LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLXZcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J21vZGFsLXYtYm94Jz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIGFsbEdhbWVzQm94RGl2LmFwcGVuZENoaWxkKG1vZGFsRGl2KTtcblxuICAgIGNvbnN0IG1vZGFsViA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlWb3RpbmdNb2RhbFwiKTtcbiAgICBjb25zdCBzcGFuViA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS12XCIpWzBdO1xuICAgIGNvbnN0IHZvdGluZ0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZvdGluZy1idG5cIik7XG4gICAgXG4gICAgdm90aW5nQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdXNlciBhbm9ueW1vdXMgYXV0aCBsb2dpblxuICAgICAgICAgICAgYXV0aC5zaWduSW5Bbm9ueW1vdXNseSgpO1xuICAgICAgICAgICAgbW9kYWxWLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSEkgRlJPTSBWT1RJTkcgTU9EQUwnKVxuICAgICAgICAgICAgY29uc3QgbmFtZTEgPSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMS1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lMiA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ3RlYW0yLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28xID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbG9nbycpO1xuICAgICAgICAgICAgY29uc3QgbG9nbzIgPSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMi1sb2dvJyk7XG4gICAgICAgICAgICBjb25zdCBnSWQgPSBidG4uZ2V0QXR0cmlidXRlKCdnYW1lSWQnKTtcblxuICAgICAgICAgICAgaWYgKHQxcmVmID09PSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMS1uYW1lJykpe1xuICAgICAgICAgICAgICAgIHJlbmRlclZvdGluZ1N0YXQobmFtZTEsIG5hbWUyLCBsb2dvMSwgbG9nbzIsIGdJZCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIHNwYW5WLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIHVzZXIgYW5vbnltb3VzIGF1dGggbG9naW5cbiAgICAgICAgYXV0aC5zaWduT3V0KCk7XG4gICAgICAgIG1vZGFsVi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbFYpIHtcbiAgICAgICAgICAgIC8vIHVzZXIgYW5vbnltb3VzIGF1dGggbG9naW5cbiAgICAgICAgICAgIGF1dGguc2lnbk91dCgpO1xuICAgICAgICAgICAgbW9kYWxWLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVm90aW5nTW9kYWw7IiwiaW1wb3J0IGRyYXdQaWUgZnJvbSAnLi9kcmF3UGllJztcblxuY29uc3QgcmVuZGVyVm90aW5nU3RhdCA9IChuYW1lMSwgbmFtZTIsIGxvZ28xLCBsb2dvMiwgZ2FtZUlkKSA9PiB7XG5cbiAgICBjb25zdCBtb2RhbFZCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXYtYm94XCIpO1xuICAgIG1vZGFsVkJveC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J3RlYW1zLXJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdidG4tYm94Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSd2b3RlTnVtMScgbmFtZT0nbmFtZTEnPiR7bmFtZTF9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lc3NhZ2UnPiBXaG8gd2lsbCB3aW4/IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnRuLWJveCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ndm90ZU51bTInIG5hbWU9J25hbWUyJz4ke25hbWUyfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPSd2b3RpbmctYm94Jz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3Qgdm90ZURhdGExID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlTnVtMVwiKTtcbiAgICBjb25zdCB2b3RlRGF0YTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGVOdW0yXCIpO1xuXG4gICAgdm90ZURhdGExLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGdldERhdGEoMSwgMSwgcGFyc2VJbnQoZ2FtZUlkKSlcbiAgICB9KVxuXG4gICAgdm90ZURhdGEyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZ2V0RGF0YSgxLCAyLCBwYXJzZUludChnYW1lSWQpKVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgYWRkRGF0YSA9IChkYXRhLCB2b3RlMSwgdm90ZTIpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hvIGZyb20gYWRkRGF0YSBmdW5jdGlvbicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGIuY29sbGVjdGlvbignd2lubmVyLXZvdGVzJykuYWRkKGRhdGEpO1xuICAgICAgICByZW5kZXJWb3Rlcyh2b3RlMSwgdm90ZTIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclZvdGVzID0gKHZvdGUxLCB2b3RlMik9PntcbiAgICAgICAgLy8gY29uc29sZS5sb2codm90ZTEsIHZvdGUyKVxuICAgICAgICBjb25zdCB2b3RpbmdCb3hEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGluZy1ib3hcIik7XG5cbiAgICAgICAgdm90aW5nQm94RGl2LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2b3Rpbmctcm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2b3RlczEgdm90ZSc+JHsodm90ZTEgLyAodm90ZTEgKyB2b3RlMikgKiAxMDApLnRvRml4ZWQoMSl9JTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZvdGVzMiB2b3RlJz4keyh2b3RlMiAvICh2b3RlMSArIHZvdGUyKSAqIDEwMCkudG9GaXhlZCgxKX0lPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3BpZS1ib3gnPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICBgO1xuICAgICAgICBkcmF3UGllKHZvdGUxLCB2b3RlMilcbiAgICB9XG4gICBcblxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSAoZGF0YSwga2V5SWQsIHZvdGUxLCB2b3RlMikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGIuY29sbGVjdGlvbignd2lubmVyLXZvdGVzJykuZG9jKGtleUlkKS51cGRhdGUoZGF0YSk7XG4gICAgICAgIHJlbmRlclZvdGVzKHZvdGUxLCB2b3RlMik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0YSA9ICh2YWwsIG51bSwgZ2FtZUlkKSA9PiB7XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3dpbm5lci12b3RlcycpLmdldCgpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXMuZG9jcy5mb3JFYWNoKGRvYz0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5kYXRhKCksIGRvYy5pZClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtnYW1lSWR9YCk7XG4gICAgICAgICAgICAgICAgLy8gREFUQSBJUyBFWElTVElORyBJTiBEQVRBQkFTRS4gQ0FMTCBVUERBVEVcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChPYmplY3Qua2V5cyhkb2MuZGF0YSgpKVswXSkgPT09IGdhbWVJZCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlJZCA9IGRvYy5pZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGVzID0gKGRvYy5kYXRhKClbZ2FtZUlkXSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZvdGUxPTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2b3RlMj0wO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHZvdGUgaW4gdm90ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGUgPT09ICd0ZWFtMScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUxID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUyID0gdm90ZXNbdm90ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdWb3RlMSA9IHZvdGUxICsgdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IFtnYW1lSWRdOiB7IHRlYW0xOiBuZXdWb3RlMSwgdGVhbTI6IHZvdGUyfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkPXRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgW2dhbWVJZF06IHsgdGVhbTE6IHZvdGUxLCB0ZWFtMjogbmV3Vm90ZTIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhKG5ld0RhdGEsIGtleUlkLCB2b3RlMSwgbmV3Vm90ZTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gREFUQSBJUyBORVcuIENBTEwgQUREIEZVTkNUSU9OXG4gICAgICAgICAgICBpZiAodXBkYXRlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgbGV0IHZvdGUxID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdm90ZTIgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUxID0gdm90ZTEgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogbmV3Vm90ZTEsIHRlYW0yOiB2b3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCBuZXdWb3RlMSwgdm90ZTIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZvdGUyID0gdm90ZTIgKyB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogdm90ZTEsIHRlYW0yOiBuZXdWb3RlMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgYWRkRGF0YShuZXdEYXRhLCB2b3RlMSwgbmV3Vm90ZTIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclZvdGluZ1N0YXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCByZW5kZXJTdGFuZGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YW5kaW5nc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhbmRpbmdzXCIpO1xuICBjb25zdCBzdGFuZGluZ0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YW5kaW5nQm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXN0YW5kaW5nLWJveFwiKTtcbiAgc3RhbmRpbmdzRGl2LmFwcGVuZChzdGFuZGluZ0JveERpdik7XG5cbiAgYXhpb3NcbiAgICAuZ2V0KFwiLi9zdGFuZGluZ3NcIilcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIiByZW5kZXJTdGFuZGluZ3MgcmVzXCIsIHJlcyk7XG4gICAgICBpZiAocmVzLmRhdGEucmVzcG9uc2UubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHRlYW1zQXJyID0gcmVzLmRhdGEucmVzcG9uc2VbMF0ubGVhZ3VlLnN0YW5kaW5nc1swXTtcbiAgICAgICAgdGVhbXNBcnIuZm9yRWFjaCgodGVhbSwgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgdGVhbVJhbmtCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IHRlYW1OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB0ZWFtUG9pbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB0ZWFtR2FtZXNDb3VudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgdGVhbVJhbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IGRhdGFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgdGVhbU5hbWVEaXYuaW5uZXJUZXh0ID0gdGVhbS50ZWFtLm5hbWU7XG4gICAgICAgICAgdGVhbVBvaW50c0Rpdi5pbm5lclRleHQgPSB0ZWFtLnBvaW50cztcbiAgICAgICAgICB0ZWFtR2FtZXNDb3VudERpdi5pbm5lclRleHQgPSB0ZWFtLmFsbC5wbGF5ZWQ7XG4gICAgICAgICAgdGVhbVJhbmtEaXYuaW5uZXJUZXh0ID0gdGVhbS5yYW5rO1xuXG4gICAgICAgICAgdGVhbURpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1zdGFuZGluZy1yb3dcIik7XG4gICAgICAgICAgdGVhbVJhbmtCb3hEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcmFuay1ib3hcIik7XG4gICAgICAgICAgdGVhbVJhbmtEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcmFua1wiKTtcbiAgICAgICAgICB0ZWFtR2FtZXNDb3VudERpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVkLWdhbWVzXCIpO1xuICAgICAgICAgIHRlYW1Qb2ludHNEaXYuY2xhc3NMaXN0LmFkZChcInRlYW0tcG9pbnRzXCIpO1xuICAgICAgICAgIGRhdGFEaXYuY2xhc3NMaXN0LmFkZChcImRhdGEtZGl2XCIpO1xuXG4gICAgICAgICAgdGVhbVJhbmtCb3hEaXYuYXBwZW5kKHRlYW1SYW5rRGl2LCB0ZWFtTmFtZURpdik7XG4gICAgICAgICAgZGF0YURpdi5hcHBlbmQodGVhbUdhbWVzQ291bnREaXYsIHRlYW1Qb2ludHNEaXYpO1xuICAgICAgICAgIHRlYW1EaXYuYXBwZW5kKHRlYW1SYW5rQm94RGl2LCBkYXRhRGl2KTtcbiAgICAgICAgICBzdGFuZGluZ0JveERpdi5hcHBlbmQodGVhbURpdik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZW1wdHlSZXNwb25zZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVtcHR5UmVzcG9uc2VEaXYuaW5uZXJUZXh0ID1cbiAgICAgICAgICBcIlN0YW5kaW5ncyBkYXRhIGlzIG5vdCBhdmFpbGFibGUgYXQgdGhpcyB0aW1lLi4uXCI7XG4gICAgICAgIGVtcHR5UmVzcG9uc2VEaXYuY2xhc3NMaXN0LmFkZChcImVtcHR5LXJlc3BvbnNlXCIpO1xuICAgICAgICBzdGFuZGluZ0JveERpdi5hcHBlbmQoZW1wdHlSZXNwb25zZURpdik7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclN0YW5kaW5ncztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=