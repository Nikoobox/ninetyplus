/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "/dist/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./assets/field.png":
      /*!**************************!*\
  !*** ./assets/field.png ***!
  \**************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          "images/field.png";

        /***/
      },

    /***/ "./dist/images/blacklogo.png":
      /*!***********************************!*\
  !*** ./dist/images/blacklogo.png ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          "images/blacklogo.png";

        /***/
      },

    /***/ "./node_modules/axios/index.js":
      /*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./lib/axios */ "./node_modules/axios/lib/axios.js"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/adapters/xhr.js":
      /*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );

        var settle = __webpack_require__(
          /*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js"
        );

        var cookies = __webpack_require__(
          /*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"
        );

        var buildURL = __webpack_require__(
          /*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js"
        );

        var buildFullPath = __webpack_require__(
          /*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js"
        );

        var parseHeaders = __webpack_require__(
          /*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js"
        );

        var isURLSameOrigin = __webpack_require__(
          /*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js"
        );

        var createError = __webpack_require__(
          /*! ../core/createError */ "./node_modules/axios/lib/core/createError.js"
        );

        module.exports = function xhrAdapter(config) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestData = config.data;
            var requestHeaders = config.headers;

            if (utils.isFormData(requestData)) {
              delete requestHeaders["Content-Type"]; // Let the browser set it
            }

            var request = new XMLHttpRequest(); // HTTP basic authentication

            if (config.auth) {
              var username = config.auth.username || "";
              var password = config.auth.password
                ? unescape(encodeURIComponent(config.auth.password))
                : "";
              requestHeaders.Authorization =
                "Basic " + btoa(username + ":" + password);
            }

            var fullPath = buildFullPath(config.baseURL, config.url);
            request.open(
              config.method.toUpperCase(),
              buildURL(fullPath, config.params, config.paramsSerializer),
              true
            ); // Set the request timeout in MS

            request.timeout = config.timeout; // Listen for ready state

            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              } // The request errored out and we didn't get a response, this will be
              // handled by onerror instead
              // With one exception: request that using file: protocol, most browsers
              // will return status as 0 even though it's a successful request

              if (
                request.status === 0 &&
                !(
                  request.responseURL &&
                  request.responseURL.indexOf("file:") === 0
                )
              ) {
                return;
              } // Prepare the response

              var responseHeaders =
                "getAllResponseHeaders" in request
                  ? parseHeaders(request.getAllResponseHeaders())
                  : null;
              var responseData =
                !config.responseType || config.responseType === "text"
                  ? request.responseText
                  : request.response;
              var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request,
              };
              settle(resolve, reject, response); // Clean up request

              request = null;
            }; // Handle browser request cancellation (as opposed to a manual cancellation)

            request.onabort = function handleAbort() {
              if (!request) {
                return;
              }

              reject(
                createError("Request aborted", config, "ECONNABORTED", request)
              ); // Clean up request

              request = null;
            }; // Handle low level network errors

            request.onerror = function handleError() {
              // Real errors are hidden from us by the browser
              // onerror should only fire if it's a network error
              reject(createError("Network Error", config, null, request)); // Clean up request

              request = null;
            }; // Handle timeout

            request.ontimeout = function handleTimeout() {
              var timeoutErrorMessage =
                "timeout of " + config.timeout + "ms exceeded";

              if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
              }

              reject(
                createError(
                  timeoutErrorMessage,
                  config,
                  "ECONNABORTED",
                  request
                )
              ); // Clean up request

              request = null;
            }; // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.

            if (utils.isStandardBrowserEnv()) {
              // Add xsrf header
              var xsrfValue =
                (config.withCredentials || isURLSameOrigin(fullPath)) &&
                config.xsrfCookieName
                  ? cookies.read(config.xsrfCookieName)
                  : undefined;

              if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
              }
            } // Add headers to the request

            if ("setRequestHeader" in request) {
              utils.forEach(
                requestHeaders,
                function setRequestHeader(val, key) {
                  if (
                    typeof requestData === "undefined" &&
                    key.toLowerCase() === "content-type"
                  ) {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                  } else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                  }
                }
              );
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
                if (config.responseType !== "json") {
                  throw e;
                }
              }
            } // Handle progress if needed

            if (typeof config.onDownloadProgress === "function") {
              request.addEventListener("progress", config.onDownloadProgress);
            } // Not all browsers support upload events

            if (
              typeof config.onUploadProgress === "function" &&
              request.upload
            ) {
              request.upload.addEventListener(
                "progress",
                config.onUploadProgress
              );
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

        /***/
      },

    /***/ "./node_modules/axios/lib/axios.js":
      /*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./utils */ "./node_modules/axios/lib/utils.js"
        );

        var bind = __webpack_require__(
          /*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js"
        );

        var Axios = __webpack_require__(
          /*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js"
        );

        var mergeConfig = __webpack_require__(
          /*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js"
        );

        var defaults = __webpack_require__(
          /*! ./defaults */ "./node_modules/axios/lib/defaults.js"
        );
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

        axios.Cancel = __webpack_require__(
          /*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js"
        );
        axios.CancelToken = __webpack_require__(
          /*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js"
        );
        axios.isCancel = __webpack_require__(
          /*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"
        ); // Expose all/spread

        axios.all = function all(promises) {
          return Promise.all(promises);
        };

        axios.spread = __webpack_require__(
          /*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js"
        );
        module.exports = axios; // Allow use of default import syntax in TypeScript

        module.exports.default = axios;

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/Cancel.js":
      /*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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
          return "Cancel" + (this.message ? ": " + this.message : "");
        };

        Cancel.prototype.__CANCEL__ = true;
        module.exports = Cancel;

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/CancelToken.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var Cancel = __webpack_require__(
          /*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js"
        );
        /**
         * A `CancelToken` is an object that can be used to request cancellation of an operation.
         *
         * @class
         * @param {Function} executor The executor function.
         */

        function CancelToken(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
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
            cancel: cancel,
          };
        };

        module.exports = CancelToken;

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/isCancel.js":
      /*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = function isCancel(value) {
          return !!(value && value.__CANCEL__);
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/core/Axios.js":
      /*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );

        var buildURL = __webpack_require__(
          /*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js"
        );

        var InterceptorManager = __webpack_require__(
          /*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js"
        );

        var dispatchRequest = __webpack_require__(
          /*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js"
        );

        var mergeConfig = __webpack_require__(
          /*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js"
        );
        /**
         * Create a new instance of Axios
         *
         * @param {Object} instanceConfig The default config for the instance
         */

        function Axios(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager(),
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
          if (typeof config === "string") {
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
            config.method = "get";
          } // Hook up interceptors middleware

          var chain = [dispatchRequest, undefined];
          var promise = Promise.resolve(config);
          this.interceptors.request.forEach(function unshiftRequestInterceptors(
            interceptor
          ) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          this.interceptors.response.forEach(function pushResponseInterceptors(
            interceptor
          ) {
            chain.push(interceptor.fulfilled, interceptor.rejected);
          });

          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }

          return promise;
        };

        Axios.prototype.getUri = function getUri(config) {
          config = mergeConfig(this.defaults, config);
          return buildURL(
            config.url,
            config.params,
            config.paramsSerializer
          ).replace(/^\?/, "");
        }; // Provide aliases for supported request methods

        utils.forEach(
          ["delete", "get", "head", "options"],
          function forEachMethodNoData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function (url, config) {
              return this.request(
                mergeConfig(config || {}, {
                  method: method,
                  url: url,
                  data: (config || {}).data,
                })
              );
            };
          }
        );
        utils.forEach(
          ["post", "put", "patch"],
          function forEachMethodWithData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function (url, data, config) {
              return this.request(
                mergeConfig(config || {}, {
                  method: method,
                  url: url,
                  data: data,
                })
              );
            };
          }
        );
        module.exports = Axios;

        /***/
      },

    /***/ "./node_modules/axios/lib/core/InterceptorManager.js":
      /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );

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
            rejected: rejected,
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

        /***/
      },

    /***/ "./node_modules/axios/lib/core/buildFullPath.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var isAbsoluteURL = __webpack_require__(
          /*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js"
        );

        var combineURLs = __webpack_require__(
          /*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js"
        );
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

        /***/
      },

    /***/ "./node_modules/axios/lib/core/createError.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var enhanceError = __webpack_require__(
          /*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js"
        );
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

        module.exports = function createError(
          message,
          config,
          code,
          request,
          response
        ) {
          var error = new Error(message);
          return enhanceError(error, config, code, request, response);
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/core/dispatchRequest.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );

        var transformData = __webpack_require__(
          /*! ./transformData */ "./node_modules/axios/lib/core/transformData.js"
        );

        var isCancel = __webpack_require__(
          /*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"
        );

        var defaults = __webpack_require__(
          /*! ../defaults */ "./node_modules/axios/lib/defaults.js"
        );
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

          config.data = transformData(
            config.data,
            config.headers,
            config.transformRequest
          ); // Flatten headers

          config.headers = utils.merge(
            config.headers.common || {},
            config.headers[config.method] || {},
            config.headers
          );
          utils.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function cleanHeaderConfig(method) {
              delete config.headers[method];
            }
          );
          var adapter = config.adapter || defaults.adapter;
          return adapter(config).then(
            function onAdapterResolution(response) {
              throwIfCancellationRequested(config); // Transform response data

              response.data = transformData(
                response.data,
                response.headers,
                config.transformResponse
              );
              return response;
            },
            function onAdapterRejection(reason) {
              if (!isCancel(reason)) {
                throwIfCancellationRequested(config); // Transform response data

                if (reason && reason.response) {
                  reason.response.data = transformData(
                    reason.response.data,
                    reason.response.headers,
                    config.transformResponse
                  );
                }
              }

              return Promise.reject(reason);
            }
          );
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/core/enhanceError.js":
      /*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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

        module.exports = function enhanceError(
          error,
          config,
          code,
          request,
          response
        ) {
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
              code: this.code,
            };
          };

          return error;
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/core/mergeConfig.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ../utils */ "./node_modules/axios/lib/utils.js"
        );
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
          var valueFromConfig2Keys = ["url", "method", "data"];
          var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
          var defaultToConfig2Keys = [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "timeoutMessage",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "decompress",
            "maxContentLength",
            "maxBodyLength",
            "maxRedirects",
            "transport",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
            "responseEncoding",
          ];
          var directMergeKeys = ["validateStatus"];

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
          var axiosKeys = valueFromConfig2Keys
            .concat(mergeDeepPropertiesKeys)
            .concat(defaultToConfig2Keys)
            .concat(directMergeKeys);
          var otherKeys = Object.keys(config1)
            .concat(Object.keys(config2))
            .filter(function filterAxiosKeys(key) {
              return axiosKeys.indexOf(key) === -1;
            });
          utils.forEach(otherKeys, mergeDeepProperties);
          return config;
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/core/settle.js":
      /*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var createError = __webpack_require__(
          /*! ./createError */ "./node_modules/axios/lib/core/createError.js"
        );
        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         */

        module.exports = function settle(resolve, reject, response) {
          var validateStatus = response.config.validateStatus;

          if (
            !response.status ||
            !validateStatus ||
            validateStatus(response.status)
          ) {
            resolve(response);
          } else {
            reject(
              createError(
                "Request failed with status code " + response.status,
                response.config,
                null,
                response.request,
                response
              )
            );
          }
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/core/transformData.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );
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

        /***/
      },

    /***/ "./node_modules/axios/lib/defaults.js":
      /*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (process) {
          var utils = __webpack_require__(
            /*! ./utils */ "./node_modules/axios/lib/utils.js"
          );

          var normalizeHeaderName = __webpack_require__(
            /*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js"
          );

          var DEFAULT_CONTENT_TYPE = {
            "Content-Type": "application/x-www-form-urlencoded",
          };

          function setContentTypeIfUnset(headers, value) {
            if (
              !utils.isUndefined(headers) &&
              utils.isUndefined(headers["Content-Type"])
            ) {
              headers["Content-Type"] = value;
            }
          }

          function getDefaultAdapter() {
            var adapter;

            if (typeof XMLHttpRequest !== "undefined") {
              // For browsers use XHR adapter
              adapter = __webpack_require__(
                /*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js"
              );
            } else if (
              typeof process !== "undefined" &&
              Object.prototype.toString.call(process) === "[object process]"
            ) {
              // For node use HTTP adapter
              adapter = __webpack_require__(
                /*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js"
              );
            }

            return adapter;
          }

          var defaults = {
            adapter: getDefaultAdapter(),
            transformRequest: [
              function transformRequest(data, headers) {
                normalizeHeaderName(headers, "Accept");
                normalizeHeaderName(headers, "Content-Type");

                if (
                  utils.isFormData(data) ||
                  utils.isArrayBuffer(data) ||
                  utils.isBuffer(data) ||
                  utils.isStream(data) ||
                  utils.isFile(data) ||
                  utils.isBlob(data)
                ) {
                  return data;
                }

                if (utils.isArrayBufferView(data)) {
                  return data.buffer;
                }

                if (utils.isURLSearchParams(data)) {
                  setContentTypeIfUnset(
                    headers,
                    "application/x-www-form-urlencoded;charset=utf-8"
                  );
                  return data.toString();
                }

                if (utils.isObject(data)) {
                  setContentTypeIfUnset(
                    headers,
                    "application/json;charset=utf-8"
                  );
                  return JSON.stringify(data);
                }

                return data;
              },
            ],
            transformResponse: [
              function transformResponse(data) {
                /*eslint no-param-reassign:0*/
                if (typeof data === "string") {
                  try {
                    data = JSON.parse(data);
                  } catch (e) {
                    /* Ignore */
                  }
                }

                return data;
              },
            ],

            /**
             * A timeout in milliseconds to abort a request. If set to 0 (default) a
             * timeout is not created.
             */
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function validateStatus(status) {
              return status >= 200 && status < 300;
            },
          };
          defaults.headers = {
            common: {
              Accept: "application/json, text/plain, */*",
            },
          };
          utils.forEach(
            ["delete", "get", "head"],
            function forEachMethodNoData(method) {
              defaults.headers[method] = {};
            }
          );
          utils.forEach(
            ["post", "put", "patch"],
            function forEachMethodWithData(method) {
              defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
            }
          );
          module.exports = defaults;
          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../../process/browser.js */ "./node_modules/process/browser.js"
          )
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/bind.js":
      /*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/buildURL.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );

        function encode(val) {
          return encodeURIComponent(val)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
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
              if (val === null || typeof val === "undefined") {
                return;
              }

              if (utils.isArray(val)) {
                key = key + "[]";
              } else {
                val = [val];
              }

              utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                  v = v.toISOString();
                } else if (utils.isObject(v)) {
                  v = JSON.stringify(v);
                }

                parts.push(encode(key) + "=" + encode(v));
              });
            });
            serializedParams = parts.join("&");
          }

          if (serializedParams) {
            var hashmarkIndex = url.indexOf("#");

            if (hashmarkIndex !== -1) {
              url = url.slice(0, hashmarkIndex);
            }

            url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
          }

          return url;
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/combineURLs.js":
      /*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         * @returns {string} The combined URL
         */

        module.exports = function combineURLs(baseURL, relativeURL) {
          return relativeURL
            ? baseURL.replace(/\/+$/, "") +
                "/" +
                relativeURL.replace(/^\/+/, "")
            : baseURL;
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/cookies.js":
      /*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );

        module.exports = utils.isStandardBrowserEnv() // Standard browser envs support document.cookie
          ? (function standardBrowserEnv() {
              return {
                write: function write(
                  name,
                  value,
                  expires,
                  path,
                  domain,
                  secure
                ) {
                  var cookie = [];
                  cookie.push(name + "=" + encodeURIComponent(value));

                  if (utils.isNumber(expires)) {
                    cookie.push("expires=" + new Date(expires).toGMTString());
                  }

                  if (utils.isString(path)) {
                    cookie.push("path=" + path);
                  }

                  if (utils.isString(domain)) {
                    cookie.push("domain=" + domain);
                  }

                  if (secure === true) {
                    cookie.push("secure");
                  }

                  document.cookie = cookie.join("; ");
                },
                read: function read(name) {
                  var match = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
                  );
                  return match ? decodeURIComponent(match[3]) : null;
                },
                remove: function remove(name) {
                  this.write(name, "", Date.now() - 86400000);
                },
              };
            })() // Non standard browser env (web workers, react-native) lack needed support.
          : (function nonStandardBrowserEnv() {
              return {
                write: function write() {},
                read: function read() {
                  return null;
                },
                remove: function remove() {},
              };
            })();

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
      /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        );

        module.exports = utils.isStandardBrowserEnv() // Standard browser envs have full support of the APIs needed to test
          ? // whether the request URL is of the same origin as current location.
            (function standardBrowserEnv() {
              var msie = /(msie|trident)/i.test(navigator.userAgent);
              var urlParsingNode = document.createElement("a");
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
                  urlParsingNode.setAttribute("href", href);
                  href = urlParsingNode.href;
                }

                urlParsingNode.setAttribute("href", href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

                return {
                  href: urlParsingNode.href,
                  protocol: urlParsingNode.protocol
                    ? urlParsingNode.protocol.replace(/:$/, "")
                    : "",
                  host: urlParsingNode.host,
                  search: urlParsingNode.search
                    ? urlParsingNode.search.replace(/^\?/, "")
                    : "",
                  hash: urlParsingNode.hash
                    ? urlParsingNode.hash.replace(/^#/, "")
                    : "",
                  hostname: urlParsingNode.hostname,
                  port: urlParsingNode.port,
                  pathname:
                    urlParsingNode.pathname.charAt(0) === "/"
                      ? urlParsingNode.pathname
                      : "/" + urlParsingNode.pathname,
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
                var parsed = utils.isString(requestURL)
                  ? resolveURL(requestURL)
                  : requestURL;
                return (
                  parsed.protocol === originURL.protocol &&
                  parsed.host === originURL.host
                );
              };
            })() // Non standard browser envs (web workers, react-native) lack needed support.
          : (function nonStandardBrowserEnv() {
              return function isURLSameOrigin() {
                return true;
              };
            })();

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
      /*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ../utils */ "./node_modules/axios/lib/utils.js"
        );

        module.exports = function normalizeHeaderName(headers, normalizedName) {
          utils.forEach(headers, function processHeader(value, name) {
            if (
              name !== normalizedName &&
              name.toUpperCase() === normalizedName.toUpperCase()
            ) {
              headers[normalizedName] = value;
              delete headers[name];
            }
          });
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
          /*! ./../utils */ "./node_modules/axios/lib/utils.js"
        ); // Headers whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers

        var ignoreDuplicateOf = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
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

          utils.forEach(headers.split("\n"), function parser(line) {
            i = line.indexOf(":");
            key = utils.trim(line.substr(0, i)).toLowerCase();
            val = utils.trim(line.substr(i + 1));

            if (key) {
              if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
              }

              if (key === "set-cookie") {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
              } else {
                parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
              }
            }
          });
          return parsed;
        };

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/spread.js":
      /*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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

        /***/
      },

    /***/ "./node_modules/axios/lib/utils.js":
      /*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var bind = __webpack_require__(
          /*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js"
        );
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
          return toString.call(val) === "[object Array]";
        }
        /**
         * Determine if a value is undefined
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if the value is undefined, otherwise false
         */

        function isUndefined(val) {
          return typeof val === "undefined";
        }
        /**
         * Determine if a value is a Buffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Buffer, otherwise false
         */

        function isBuffer(val) {
          return (
            val !== null &&
            !isUndefined(val) &&
            val.constructor !== null &&
            !isUndefined(val.constructor) &&
            typeof val.constructor.isBuffer === "function" &&
            val.constructor.isBuffer(val)
          );
        }
        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */

        function isArrayBuffer(val) {
          return toString.call(val) === "[object ArrayBuffer]";
        }
        /**
         * Determine if a value is a FormData
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an FormData, otherwise false
         */

        function isFormData(val) {
          return typeof FormData !== "undefined" && val instanceof FormData;
        }
        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */

        function isArrayBufferView(val) {
          var result;

          if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
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
          return typeof val === "string";
        }
        /**
         * Determine if a value is a Number
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Number, otherwise false
         */

        function isNumber(val) {
          return typeof val === "number";
        }
        /**
         * Determine if a value is an Object
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an Object, otherwise false
         */

        function isObject(val) {
          return val !== null && typeof val === "object";
        }
        /**
         * Determine if a value is a plain Object
         *
         * @param {Object} val The value to test
         * @return {boolean} True if value is a plain Object, otherwise false
         */

        function isPlainObject(val) {
          if (toString.call(val) !== "[object Object]") {
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
          return toString.call(val) === "[object Date]";
        }
        /**
         * Determine if a value is a File
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a File, otherwise false
         */

        function isFile(val) {
          return toString.call(val) === "[object File]";
        }
        /**
         * Determine if a value is a Blob
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Blob, otherwise false
         */

        function isBlob(val) {
          return toString.call(val) === "[object Blob]";
        }
        /**
         * Determine if a value is a Function
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */

        function isFunction(val) {
          return toString.call(val) === "[object Function]";
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
          return (
            typeof URLSearchParams !== "undefined" &&
            val instanceof URLSearchParams
          );
        }
        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         * @returns {String} The String freed of excess whitespace
         */

        function trim(str) {
          return str.replace(/^\s*/, "").replace(/\s*$/, "");
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
          if (
            typeof navigator !== "undefined" &&
            (navigator.product === "ReactNative" ||
              navigator.product === "NativeScript" ||
              navigator.product === "NS")
          ) {
            return false;
          }

          return (
            typeof window !== "undefined" && typeof document !== "undefined"
          );
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
          if (obj === null || typeof obj === "undefined") {
            return;
          } // Force an array if not already something iterable

          if (typeof obj !== "object") {
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

        function merge() {
          /* obj1, obj2, obj3, ... */
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
            if (thisArg && typeof val === "function") {
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
          if (content.charCodeAt(0) === 0xfeff) {
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
          stripBOM: stripBOM,
        };

        /***/
      },

    /***/ "./node_modules/process/browser.js":
      /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // shim for using process in browser
        var process = (module.exports = {}); // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }

        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }

        (function () {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }

          try {
            if (typeof clearTimeout === "function") {
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

          if (
            (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
            setTimeout
          ) {
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

          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
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

        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ""; // empty string to avoid regexp issues

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
          throw new Error("process.binding is not supported");
        };

        process.cwd = function () {
          return "/";
        };

        process.chdir = function (dir) {
          throw new Error("process.chdir is not supported");
        };

        process.umask = function () {
          return 0;
        };

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./styles/index.scss */ "./src/styles/index.scss"
          );
        /* harmony import */ var _scripts_currentRound__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./scripts/currentRound */ "./src/scripts/currentRound.js"
          );
        /* harmony import */ var _scripts_standings__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./scripts/standings */ "./src/scripts/standings.js"
          );
        /* harmony import */ var _scripts_openInstructionsModal__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./scripts/openInstructionsModal */ "./src/scripts/openInstructionsModal.js"
          );

        window.addEventListener("DOMContentLoaded", function () {
          // let round = 'Regular Season - 12' ;
          // GET CURRENT ROUND AND RENDER GAMES AND STANDINGS
          Object(
            _scripts_currentRound__WEBPACK_IMPORTED_MODULE_1__["default"]
          )();
          Object(
            _scripts_openInstructionsModal__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ]
          )(); // renderGames(round);
          // renderGameStat();
          // const navbarLogo = document.querySelector("#navbar-logo");
          // navbarLogo.addEventListener('click', () => renderGames(round));
        });

        /***/
      },

    /***/ "./src/scripts/currentRound.js":
      /*!*************************************!*\
  !*** ./src/scripts/currentRound.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./games */ "./src/scripts/games.js");
        /* harmony import */ var _standings__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./standings */ "./src/scripts/standings.js");

        var currentRound = function currentRound() {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a
            .get("currentround")
            .then(function (res) {
              var currentR = res.data.response[0]; // console.log(res.data.response[0]);

              Object(_games__WEBPACK_IMPORTED_MODULE_1__["default"])(currentR);
              Object(_standings__WEBPACK_IMPORTED_MODULE_2__["default"])(); //

              var navbarLogo = document.querySelector("#navbar-logo");
              navbarLogo.addEventListener("click", function () {
                return Object(_games__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  currentR
                );
              });
            })
            .catch(function (err) {
              console.log(err);
            });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          currentRound;

        /***/
      },

    /***/ "./src/scripts/drawPie.js":
      /*!********************************!*\
  !*** ./src/scripts/drawPie.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var drawPie = function drawPie(vote1, vote2) {
          var dims = {
            height: 300,
            width: 300,
            radius: 150,
          };
          var cent = {
            x: dims.width / 2 + 5,
            y: dims.height / 2 + 5,
          };
          var svg = d3
            .select("#pie-box")
            .append("svg")
            .attr("width", dims.width + 50)
            .attr("height", dims.height + 50);
          var graph = svg
            .append("g")
            .attr(
              "transform",
              "translate(".concat(cent.x, ", ").concat(cent.y, ")")
            );
          var pie = d3
            .pie()
            .sort(null)
            .value(function (d) {
              return d.value;
            });
          var arcPath = d3
            .arc()
            .outerRadius(dims.radius)
            .innerRadius(dims.radius / 1.5);
          var color = d3.scaleOrdinal(["#f5b7cd", "#0D0D0E"]);

          var update = function update(data) {
            color.domain(["team1", "team2"]);
            var paths = graph.selectAll("path").data(pie(data));
            paths.exit().remove();
            paths.attr("d", arcPath);
            paths
              .enter()
              .append("path")
              .attr("class", "arc")
              .attr("stroke", "#fff")
              .attr("stroke-width", 2)
              .attr("fill", function (d) {
                return color(d.data.data.name);
              })
              .transition()
              .duration(1500)
              .attrTween("d", arcTweenEnter);
          };

          var data = pie([
            {
              name: "team2",
              value: vote2,
            },
            {
              name: "team1",
              value: vote1,
            },
          ]);

          var arcTweenEnter = function arcTweenEnter(d) {
            var i = d3.interpolate(d.endAngle, d.startAngle);
            return function (t) {
              d.startAngle = i(t);
              return arcPath(d);
            };
          };

          update(data);
        };

        /* harmony default export */ __webpack_exports__["default"] = drawPie;

        /***/
      },

    /***/ "./src/scripts/game.js":
      /*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _assets_field_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../assets/field.png */ "./assets/field.png"
          );
        /* harmony import */ var _gamestat__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./gamestat */ "./src/scripts/gamestat.js");
        /* harmony import */ var _getFixturePlayersStat__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./getFixturePlayersStat */ "./src/scripts/getFixturePlayersStat.js"
          );
        /* harmony import */ var _renderPlayerModal__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./renderPlayerModal */ "./src/scripts/renderPlayerModal.js"
          );
        /* harmony import */ var _openInstructionsModal__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./openInstructionsModal */ "./src/scripts/openInstructionsModal.js"
          );

        var renderGameById = function renderGameById(
          fixtureId,
          score1,
          score2
        ) {
          var leagueInfoDiv = document.getElementById("league-info");
          leagueInfoDiv.innerHTML = "<div></div>";
          leagueInfoDiv.classList.remove("left");
          var allGamesContentDiv = document.getElementById("all-games");
          allGamesContentDiv.innerHTML = "<div id='one-game'></div>";
          axios__WEBPACK_IMPORTED_MODULE_0___default.a
            .get("./game?fixtureId=".concat(fixtureId))
            .then(function (res) {
              // console.log(res.data)
              //clear live updates interval and local storage
              clearInterval(localStorage.getItem("localStInterval"));
              localStorage.clear();
              var oneGameContentDiv = document.getElementById("one-game");
              var fieldDiv = document.createElement("div");
              var squadsDiv = document.createElement("div");
              fieldDiv.classList.add("field-box");
              squadsDiv.classList.add("squad-box");
              squadsDiv.innerHTML =
                "\n            <div id='team-1-box'></div>\n            <div id='team-2-box'></div>\n            ";
              oneGameContentDiv.append(squadsDiv);
              fieldDiv.innerHTML =
                '\n        <div class="field-img">\n            <img class="image" src="'.concat(
                  _assets_field_png__WEBPACK_IMPORTED_MODULE_1__["default"],
                  "\"/>\n            <div id='gk-1' class='rows'></div>\n            <div id='def-1' class='rows'></div>\n            <div id='mid-1' class='rows'></div>\n            <div id='fwd-1' class='rows'></div>\n            <div id='fwd-2' class='rows'></div>\n            <div id='mid-2' class='rows'></div>\n            <div id='def-2' class='rows'></div>\n            <div id='gk-2' class='rows'></div>\n        </div>\n        "
                );
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
              team1Div.innerHTML =
                "\n                        <div class='team-1-header-box'>\n                            <div class='name'>"
                  .concat(
                    res.data.response[0].team.name,
                    " </div>\n                            <div class='logo'>\n                            <img src=\""
                  )
                  .concat(
                    res.data.response[0].team.logo,
                    '"/>\n                            </div> \n                        </div>'
                  );
              var team2Div = document.getElementById("team-2-box");
              team2Div.innerHTML =
                "\n                        <div class='team-2-header-box'>\n                            <div class='name'>"
                  .concat(
                    res.data.response[1].team.name,
                    "</div>\n                            <div class='logo'>\n                                <img src=\""
                  )
                  .concat(
                    res.data.response[1].team.logo,
                    '"/>\n                            </div> \n                        </div>'
                  ); //place players on a field according to their actual position and team formation

              res.data.response.forEach(function (command, cidx) {
                // console.log(command)
                command.startXI.forEach(function (plr, pidx) {
                  if (cidx === 0) {
                    var playerDiv = document.createElement("div");
                    playerDiv.classList.add("team-1");
                    playerDiv.innerHTML =
                      "\n                        <div class='number'>"
                        .concat(
                          plr.player.number,
                          "</div>\n                        <div class='name'>"
                        )
                        .concat(
                          plr.player.name,
                          "</div> \n                        <div class='pos'>  ("
                        )
                        .concat(
                          plr.player.pos,
                          ")</div>\n                    "
                        );

                    if (plr.player.pos === "G") {
                      var div = document.createElement("div");
                      div.classList.add("pl1", "pl-select");
                      div.setAttribute("playerId", plr.player.id);
                      div.setAttribute("teamId", command.team.id);
                      div.innerText = plr.player.number;
                      gk1Div.append(div);
                    } else if (plr.player.pos === "D") {
                      var _div = document.createElement("div");

                      _div.classList.add("pl1", "pl-select");

                      _div.setAttribute("playerId", plr.player.id);

                      _div.setAttribute("teamId", command.team.id);

                      _div.innerText = plr.player.number;
                      def1Div.append(_div);
                    } else if (plr.player.pos === "M") {
                      var _div2 = document.createElement("div");

                      _div2.classList.add("pl1", "pl-select");

                      _div2.setAttribute("playerId", plr.player.id);

                      _div2.setAttribute("teamId", command.team.id);

                      _div2.innerText = plr.player.number;
                      mid1Div.append(_div2);
                    } else if (plr.player.pos === "F") {
                      var _div3 = document.createElement("div");

                      _div3.classList.add("pl1", "pl-select");

                      _div3.setAttribute("playerId", plr.player.id);

                      _div3.setAttribute("teamId", command.team.id);

                      _div3.innerText = plr.player.number;
                      fwd1Div.append(_div3);
                    }

                    team1Div.appendChild(playerDiv);
                  } else {
                    var _playerDiv = document.createElement("div");

                    _playerDiv.classList.add("team-2");

                    _playerDiv.innerHTML =
                      "\n                        <div class='number'>"
                        .concat(
                          plr.player.number,
                          "</div>\n                        <div class='name'>"
                        )
                        .concat(
                          plr.player.name,
                          "</div> \n                        <div class='pos'>  ("
                        )
                        .concat(
                          plr.player.pos,
                          ")</div>\n                    "
                        );

                    if (plr.player.pos === "G") {
                      var _div4 = document.createElement("div");

                      _div4.classList.add("pl2", "pl-select");

                      _div4.setAttribute("playerId", plr.player.id);

                      _div4.setAttribute("teamId", command.team.id);

                      _div4.innerText = plr.player.number;
                      gk2Div.append(_div4);
                    } else if (plr.player.pos === "D") {
                      var _div5 = document.createElement("div");

                      _div5.classList.add("pl2", "pl-select");

                      _div5.setAttribute("playerId", plr.player.id);

                      _div5.setAttribute("teamId", command.team.id);

                      _div5.innerText = plr.player.number;
                      def2Div.append(_div5);
                    } else if (plr.player.pos === "M") {
                      var _div6 = document.createElement("div");

                      _div6.classList.add("pl2", "pl-select");

                      _div6.setAttribute("playerId", plr.player.id);

                      _div6.setAttribute("teamId", command.team.id);

                      _div6.innerText = plr.player.number;
                      mid2Div.append(_div6);
                    } else if (plr.player.pos === "F") {
                      var _div7 = document.createElement("div");

                      _div7.classList.add("pl2", "pl-select");

                      _div7.setAttribute("playerId", plr.player.id);

                      _div7.setAttribute("teamId", command.team.id);

                      _div7.innerText = plr.player.number;
                      fwd2Div.append(_div7);
                    }

                    team2Div.appendChild(_playerDiv, fixtureId);
                  }
                });
              }); // renderGameStat(fixtureId, score1, score2);

              Object(
                _getFixturePlayersStat__WEBPACK_IMPORTED_MODULE_3__["default"]
              )(fixtureId).then(function (FixturePlayersStat) {
                // console.log(FixturePlayersStat)
                Object(_gamestat__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  fixtureId,
                  score1,
                  score2,
                  FixturePlayersStat
                ); //modal functionality

                Object(
                  _renderPlayerModal__WEBPACK_IMPORTED_MODULE_4__["default"]
                )(squadsDiv, FixturePlayersStat, fixtureId);
              });
              Object(
                _openInstructionsModal__WEBPACK_IMPORTED_MODULE_5__["default"]
              )();
            })
            .catch(function (err) {
              console.log(err);
            });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          renderGameById;

        /***/
      },

    /***/ "./src/scripts/games.js":
      /*!******************************!*\
  !*** ./src/scripts/games.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./game */ "./src/scripts/game.js");
        /* harmony import */ var _renderVotingModal__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./renderVotingModal */ "./src/scripts/renderVotingModal.js"
          );
        /* harmony import */ var _gamesRefresh__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./gamesRefresh */ "./src/scripts/gamesRefresh.js"
          );
        /* harmony import */ var _dist_images_blacklogo_png__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../dist/images/blacklogo.png */ "./dist/images/blacklogo.png"
          );

        var renderGames = function renderGames(round) {
          var allGamesDiv = document.getElementById("all-games");
          var allGamesBoxDiv = document.createElement("div");
          allGamesDiv.innerHTML = "<div></div>";
          var leagueInfoDiv = document.getElementById("league-info");
          leagueInfoDiv.classList.add("left");
          axios__WEBPACK_IMPORTED_MODULE_0___default.a
            .get("./games?round=".concat(round))
            .then(function (res) {
              var fixturesArr = res.data.response;
              var sectionNameDiv = document.createElement("div");
              sectionNameDiv.classList.add("section-name");
              var liveGamesStatus = false;
              var nextSeason = res.data.response[0].league.season + 1;
              leagueInfoDiv.innerHTML =
                "\n        <div class='league-box'>\n            <div class='country-box'>\n                <div class='name'>"
                  .concat(
                    res.data.response[0].league.country,
                    "</div>\n                <div class='flag'>\n                    <img src=\""
                  )
                  .concat(
                    res.data.response[0].league.flag,
                    "\"/>\n                </div>\n            </div>\n            <div class='logo-box'>\n            <img src=\""
                  )
                  .concat(
                    _dist_images_blacklogo_png__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ],
                    "\"/>\n            </div>\n            <div class='league-name'>\n            "
                  )
                  .concat(
                    res.data.response[0].league.name,
                    "\n            </div>\n            <div class='season-box'>\n                "
                  )
                  .concat(res.data.response[0].league.season, "-")
                  .concat(
                    nextSeason,
                    "\n            </div>\n          \n            <div class='epl-link'>\n                <a href='https://www.premierleague.com/' rel='noopener noreferrer' target=\"_blank\">Visit EPL</a>   \n            </div>\n\n            <div class='by-ns'>\n                <div class='at-year'>\n                    <i class=\"far fa-copyright\"></i>"
                  )
                  .concat(
                    new Date().getFullYear(),
                    "\n                </div>\n                <div class='name'>\n                    <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target=\"_blank\">by Nikolay Shatalov</a>\n                </div>\n            </div>\n        </div>\n        "
                  );
              var currentRoundString = res.data.response[0].league.round;
              var currentRound = "".concat(
                currentRoundString.split(" ").pop(),
                " "
              );
              var prevRound = parseInt(currentRound) - 1;
              var nextRound = parseInt(currentRound) + 1;
              sectionNameDiv.innerHTML =
                "\n            <div class='roundPrev'>\n                <i class=\"fas fa-chevron-left\"></i> GO TO ROUND "
                  .concat(
                    prevRound,
                    "\n            </div>\n            <div class='roundCurr'>\n                 ALL GAMES - ROUND "
                  )
                  .concat(
                    currentRound,
                    " \n            </div>\n            <div class='roundNext'>\n                GO TO ROUND "
                  )
                  .concat(
                    nextRound,
                    ' <i class="fas fa-chevron-right"></i>\n            </div>\n            '
                  );
              allGamesDiv.append(sectionNameDiv);
              var pRound = "Regular Season - ".concat(prevRound);
              var nRound = "Regular Season - ".concat(nextRound);
              var previousRound = document.querySelector(".roundPrev");
              var followingRound = document.querySelector(".roundNext");
              prevRound !== 0
                ? previousRound.addEventListener("click", function () {
                    return renderGames(pRound);
                  })
                : ""; // previousRound.addEventListener('click', () => renderGames(pRound));

              nextRound === 38
                ? ""
                : followingRound.addEventListener("click", function () {
                    return renderGames(nRound);
                  });
              allGamesBoxDiv.classList.add("all-games-box");
              allGamesDiv.append(allGamesBoxDiv);
              var gameLiveStatus = ["1H", "HT", "2H", "ET", "P", "BT"];
              var gameNotLiveStatus = ["NS", "FT"];
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
                var fixtureRowDiv = document.createElement("div");
                var gameStatusRowDiv = document.createElement("div");
                var scoreBoxDiv = document.createElement("div");
                fixtureRowDiv.classList.add("fixture-box");
                gameStatusRowDiv.classList.add("game-status-row");
                scoreBoxDiv.classList.add("score-box");
                fixtureRowDiv.setAttribute("gameId", gameId); // if game is live then show 'score', otherwise show 'vs'

                var temp =
                  gameLiveStatus.includes(gameStatus) || gameStatus === "FT"
                    ? "\n            <div class='score-box'>\n                <div class='score'>"
                        .concat(
                          score1,
                          "</div>\n                <div class='score'>"
                        )
                        .concat(
                          score2,
                          "</div>\n            </div>\n            "
                        )
                    : '<div class="vs">vs</div>'; // if game is not started, display VOTE button

                var voteBtnDisplay =
                  gameStatus === "NS"
                    ? "<div class='voting-btn-box'>\n                <button \n                    class='voting-btn' \n                    team1-name='"
                        .concat(team1, "'\n                    team2-name='")
                        .concat(team2, "'\n                    team1-logo='")
                        .concat(logo1, "'\n                    team2-logo='")
                        .concat(logo2, "'\n                    gameId=")
                        .concat(
                          gameId,
                          ">\n                    VOTE\n                </button>\n            </div>"
                        )
                    : "";
                fixtureRowDiv.innerHTML =
                  "\n            <div class='game-status-section'>"
                    .concat(
                      fix.fixture.status.long,
                      "</div>\n            <div class='team1-box' >\n                <div class=\"name\">"
                    )
                    .concat(
                      team1,
                      '</div>\n                <div class="logo"><img src="'
                    )
                    .concat(
                      logo1,
                      '"/></div>\n            </div>\n            '
                    )
                    .concat(
                      temp,
                      '\n            <div class=\'team2-box\'>\n                <div class="logo"><img src="'
                    )
                    .concat(
                      logo2,
                      '"/></div>\n                <div class="name">'
                    )
                    .concat(team2, "</div>\n            </div>\n            ")
                    .concat(voteBtnDisplay, "\n            ");

                if (gameStatus !== "NS") {
                  fixtureRowDiv.addEventListener("click", function () {
                    return Object(
                      _game__WEBPACK_IMPORTED_MODULE_1__["default"]
                    )(gameId, score1, score2);
                  });
                }

                allGamesBoxDiv.appendChild(fixtureRowDiv);
                Object(
                  _renderVotingModal__WEBPACK_IMPORTED_MODULE_2__["default"]
                )(allGamesBoxDiv, team1, team2);
              }); //live update functionality

              var buttonLiveUpdates = document.createElement("div");
              buttonLiveUpdates.classList.add("live-updates-box");
              allGamesBoxDiv.appendChild(buttonLiveUpdates);

              if (localStorage.getItem("localStCounter") !== null) {
                var newCounter = localStorage.getItem("localStCounter");
                newCounter++;
                localStorage.setItem("localStCounter", newCounter);

                if (newCounter === 3) {
                  clearInterval(localStorage.getItem("localStInterval"));
                  localStorage.clear();
                }
              } // if (liveGamesStatus){

              buttonLiveUpdates.innerHTML =
                "\n            <button id='live-updates'>ACTIVATE LIVE UPDATES</button>\n            <button id='no-live-updates'>STOP LIVE UPDATES</button>\n            ";
              var btnLiveUpdates = document.getElementById("live-updates");
              var btnNoLiveUpdates = document.getElementById("no-live-updates");
              Object(_gamesRefresh__WEBPACK_IMPORTED_MODULE_3__["default"])(
                btnLiveUpdates,
                btnNoLiveUpdates,
                round
              ); // }else{
              //     buttonLiveUpdates.innerHTML = `
              //     <button class='no-live-updates' disabled>
              //         No live games right now
              //     </button>`;
              //     allGamesBoxDiv.appendChild(buttonLiveUpdates);
              //     clearInterval(localStorage.getItem('localStInterval'));
              // }
            })
            .catch(function (err) {
              console.log(err);
            });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          renderGames;

        /***/
      },

    /***/ "./src/scripts/gamesRefresh.js":
      /*!*************************************!*\
  !*** ./src/scripts/gamesRefresh.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./games */ "./src/scripts/games.js");
        //gamesRefresh.js

        var gamesRefresh = function gamesRefresh(
          btnLiveUpdates,
          btnNoLiveUpdates,
          round
        ) {
          var interval;
          btnLiveUpdates.addEventListener("click", function () {
            Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(round);
            interval = setInterval(function () {
              return Object(_games__WEBPACK_IMPORTED_MODULE_0__["default"])(
                round
              );
            }, 10000);
            localStorage.setItem("localStInterval", interval);
            var counter = 0;
            localStorage.setItem("localStCounter", counter);
          });
          btnNoLiveUpdates.addEventListener("click", function () {
            clearInterval(localStorage.getItem("localStInterval"));
            localStorage.removeItem("localStInterval");
            btnLiveUpdates.disabled = false;
            btnNoLiveUpdates.setAttribute("disabled", true);
          });

          if (localStorage.getItem("localStInterval") !== null) {
            btnLiveUpdates.setAttribute("disabled", true);
            btnNoLiveUpdates.disabled = false;
          } else {
            btnLiveUpdates.disabled = false;
            btnNoLiveUpdates.setAttribute("disabled", true);
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          gamesRefresh;

        /***/
      },

    /***/ "./src/scripts/gamestat.js":
      /*!*********************************!*\
  !*** ./src/scripts/gamestat.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_0__
          );

        var renderGameStat = function renderGameStat(
          fixtureId,
          score1,
          score2,
          FixturePlayersStat
        ) {
          // console.log('HI FROM GAME STAT');
          var oneGameContentDiv = document.getElementById("one-game");
          var standingsDiv = document.getElementById("standings"); // const testBoxDiv = document.createElement("div");
          // testBoxDiv.classList.add("test-box");

          axios__WEBPACK_IMPORTED_MODULE_0___default.a
            .get("/gamestat/?fixtureId=".concat(fixtureId))
            .then(function (res) {
              // console.log(res.data.response);
              var gameStatDiv = document.createElement("div");
              gameStatDiv.classList.add("game-stat-box");
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
              gameStatDiv.innerHTML =
                "\n            <div class='game-stat-title'>GAME STATISTICS</div>\n            <div class='stat-box'>\n                <div class='scoreBox'>\n                    <div class=\"teamHome\">\n                        <div class=\"teamLogo\">\n                        <img src=\""
                  .concat(
                    res.data.response[0].team.logo,
                    '"/>\n                        </div> \n                        <div class="teamName">'
                  )
                  .concat(
                    res.data.response[0].team.name,
                    "</div>\n                        <div class='teamScore1'>"
                  )
                  .concat(
                    score1,
                    '</div>\n                    </div>\n                    <div class="teamHome">\n                        <div class="teamLogo">\n                        <img src="'
                  )
                  .concat(
                    res.data.response[1].team.logo,
                    '"/>\n                        </div> \n                        <div class="teamName">'
                  )
                  .concat(
                    res.data.response[1].team.name,
                    "</div>\n                        <div class='teamScore2'>"
                  )
                  .concat(
                    score2,
                    '</div>\n                    </div>  \n                </div>\n                <div class=\'who-scored-box\'>\n                    <div class=\'who-scored-team1\'>\n                    \n                    </div>\n                    <div class=\'who-scored-team2\'>\n                    \n                    </div>\n                </div>\n                <div id="possProgress">\n                    <div id="poss"></div> \n                </div>\n                <div class="stat-name"> Ball Possession </div>\n                <div id="shotsOnProgress">\n                    <div id="shotsOn"></div> \n                </div>\n                <div class="stat-name"> Shots on Goals </div>\n                 <div id="shotsOffProgress">\n                    <div id="shotsOff"></div>\n                </div>\n                <div class="stat-name"> Shots off Goals </div> \n                <div id="foulsProgress">\n                    <div id="fouls"></div>\n                </div>\n                <div class="stat-name"> Fouls </div>  \n                <div id="ycProgress">\n                    <div id="yc"></div>\n                </div>\n                <div class="stat-name"> Yellow Cards </div>  \n            </div>\n            '
                  );
              var team1PlayersStat = Object.values(
                FixturePlayersStat[0].players
              );
              var team2PlayersStat = Object.values(
                FixturePlayersStat[1].players
              );
              var team1ScoredPlDiv =
                document.querySelector(".who-scored-team1");
              var team2ScoredPlDiv =
                document.querySelector(".who-scored-team2");
              team1PlayersStat.forEach(function (player) {
                // console.log(player)
                if (player.statistics[0].goals.total !== null) {
                  for (var i = 0; i < player.statistics[0].goals.total; i++) {
                    var sc1Div = document.createElement("div");
                    sc1Div.classList.add("goal-scorer");
                    sc1Div.innerHTML = "\n                        ".concat(
                      player.player.name,
                      "\n                    "
                    );
                    team1ScoredPlDiv.appendChild(sc1Div);
                  }
                }
              });
              team2PlayersStat.forEach(function (player) {
                if (player.statistics[0].goals.total !== null) {
                  // console.log(player.player.name, player.statistics[0].goals.total)
                  // player.statistics[0].goals.total
                  for (var i = 0; i < player.statistics[0].goals.total; i++) {
                    var sc2Div = document.createElement("div");
                    sc2Div.classList.add("goal-scorer");
                    sc2Div.innerHTML = "\n                        ".concat(
                      player.player.name,
                      "\n                    "
                    );
                    team2ScoredPlDiv.appendChild(sc2Div);
                  }
                }
              });

              var renderStats = function renderStats(stat1, total, idName) {
                var elem = document.getElementById(idName);

                if (idName === "poss") {
                  elem.style.width = stat1;
                } else {
                  var ratio = (stat1 / total) * 100;
                  elem.style.width = ratio + "%";
                }
              };

              renderStats(possession[0].value, 0, "poss");
              renderStats(
                shotsOn[0].value,
                shotsOn[0].value + shotsOn[1].value,
                "shotsOn"
              );
              renderStats(
                shotsOff[0].value,
                shotsOff[0].value + shotsOff[1].value,
                "shotsOff"
              );
              renderStats(
                fouls[0].value,
                fouls[0].value + fouls[1].value,
                "fouls"
              );
              renderStats(yc[0].value, yc[0].value + yc[1].value, "yc");
            })
            .catch(function (err) {
              console.log(err);
            });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          renderGameStat;

        /***/
      },

    /***/ "./src/scripts/getFixturePlayersStat.js":
      /*!**********************************************!*\
  !*** ./src/scripts/getFixturePlayersStat.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_0__
          );

        var getFixturePlayersStat = function getFixturePlayersStat(fixtureId) {
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a
            .get("./fixture_players_stat?fixtureId=".concat(fixtureId))
            .then(function (res) {
              // console.log('Hi from fixture players stat!')
              // console.log(res.data.response);
              // console.log('end');
              return res.data.response;
            })
            .catch(function (err) {
              console.log(err);
            });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          getFixturePlayersStat;

        /***/
      },

    /***/ "./src/scripts/openInstructionsModal.js":
      /*!**********************************************!*\
  !*** ./src/scripts/openInstructionsModal.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var openInstructionsModal = function openInstructionsModal() {
          var navDiv = document.querySelector(".div-for-modal");
          var instrBtn = document.getElementById("instructions-link"); // console.log(instrBtn, navDiv);

          var modalDiv = document.createElement("div");
          modalDiv.innerHTML =
            "\n    <div id=\"myModalInst\" class=\"modalInst\">\n        <div class=\"modal-content\">\n            <span class=\"closeInt\">&times;</span>\n            \n            <div id='modal-box-inst'>\n                <div class='about-title'>ABOUT</div>\n                <div class='about'>\n                    90Plus is a soccer score app for the English Premier League. This app brings you the fixtures with live updates, game stats, game winner voting options and more.\n                </div>\n\n                <div class='inst-title'>INSTRUCTIONS</div>\n                <div class='inst'>\n                    <ul>\n                        <li>CURRENT matchday games are displayed on the main page (ex. ALL GAMES - ROUND 17).\n                        </li>  \n                        <li>OLDER game info could be accessed from the top navigation bar when clicking on pink button (ex. <span><i class=\"fas fa-chevron-left\"></i> GO TO ROUND 16</span>)</li>\n                        <li>Similarly, FUTURE game info could be accessed from the top navigation bar (ex. <span>GO TO ROUND 18 <i class=\"fas fa-chevron-right\"></i></span>).</li>\n                        <li>The user can click on LIVE or FINISHED fixtures to see detailed statistics. A player\u2019s stats are available when hovering over any player on the pitch. Try it!</li>\n                        <li>The user can vote for the game WINNER by clicking on the VOTE button. This feature is available only for future games.</li>    \n                        <li>Live updates can be manually turned on by selecting <span>ACTIVATE LIVE UPDATES</span>. When selected, the page will refresh 3 times every 10 seconds for demonstration purposes. Live updates can be turned off by selecting <span>STOP LIVE UPDATES</span>.</li>      \n                    <ul>   \n                </div>\n\n                \n                <div class='built-by'>\n                    Built by <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target=\"_blank\">Nikolay Shatalov</a>\n                </div>\n\n            </div>\n        \n        </div>\n    </div>\n    ";
          navDiv.appendChild(modalDiv);
          var modal = document.querySelector("#myModalInst");
          var span = document.getElementsByClassName("closeInt")[0];
          instrBtn.addEventListener("click", function () {
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

        /* harmony default export */ __webpack_exports__["default"] =
          openInstructionsModal;

        /***/
      },

    /***/ "./src/scripts/renderPlayerModal.js":
      /*!******************************************!*\
  !*** ./src/scripts/renderPlayerModal.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _renderPlayerStat__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./renderPlayerStat */ "./src/scripts/renderPlayerStat.js"
          );

        var renderPlayerModal = function renderPlayerModal(
          squadsDiv,
          FixturePlayersStat,
          fixtureId
        ) {
          var modalDiv = document.createElement("div");
          modalDiv.innerHTML =
            '\n            <div id="myModal" class="modal">\n                <div class="modal-content">\n                    <span class="close">&times;</span>\n\n                    <div id=\'modal-box\'>\n                        Some text goes here ...\n                    </div>\n\n                </div>\n            </div>\n        ';
          squadsDiv.appendChild(modalDiv);
          var modal = document.querySelector("#myModal");
          var playersToClick = document.querySelectorAll(".pl-select");
          var span = document.getElementsByClassName("close")[0];
          playersToClick.forEach(function (player) {
            player.addEventListener("click", function () {
              modal.style.display = "block";
              var playerId = player.getAttribute("playerId");
              var teamId = player.getAttribute("teamId");
              var playerIdm = parseInt(playerId);
              var teamIdm = parseInt(teamId);
              Object(_renderPlayerStat__WEBPACK_IMPORTED_MODULE_0__["default"])(
                playerIdm,
                teamIdm,
                fixtureId,
                FixturePlayersStat
              );
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

        /* harmony default export */ __webpack_exports__["default"] =
          renderPlayerModal;

        /***/
      },

    /***/ "./src/scripts/renderPlayerStat.js":
      /*!*****************************************!*\
  !*** ./src/scripts/renderPlayerStat.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var renderPlayerStat = function renderPlayerStat(
          playerIdm,
          teamIdm,
          fixtureIdm,
          FixturePlayersStatm
        ) {
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
          });
          var modalBox = document.getElementById("modal-box");
          var rightBoxData =
            playerStat.games.position === "G"
              ? "<div class='saves-box row'>\n            <div class='title'>Saves: </div>\n            <div class='value'>"
                  .concat(
                    playerStat.goals.saves ? playerStat.goals.saves : 0,
                    "</div>\n        </div>\n        <div class='conceded-box row'>\n            <div class='title'>Goals conceded: </div>\n            <div class='value'>"
                  )
                  .concat(
                    playerStat.goals.conceded ? playerStat.goals.conceded : 0,
                    "</div>\n        </div>\n        "
                  )
              : "<div class='duels-box row'>\n            <div class='title'>Duels Won/Total: </div>\n            <div class='value'>"
                  .concat(
                    playerStat.duels.won ? playerStat.duels.won : 0,
                    " / "
                  )
                  .concat(
                    playerStat.duels.total ? playerStat.duels.total : 0,
                    "</div>\n        </div>\n        <div class='passes-box row'>\n            <div class='title'>Passes(Accuracy%): </div>\n            <div class='value'>"
                  )
                  .concat(
                    playerStat.passes.total ? playerStat.passes.total : 0,
                    " ("
                  )
                  .concat(
                    playerStat.passes.accuracy ? playerStat.passes.accuracy : 0,
                    "%)</div>\n        </div>\n        <div class='shots-box row'>\n            <div class='title'>Shots: </div>\n            <div class='value'>"
                  )
                  .concat(
                    playerStat.shots.total ? playerStat.shots.total : 0,
                    "</div>\n        </div>\n         <div class='goals-box row'>\n            <div class='title'>Goals: </div>\n            <div class='value'>"
                  )
                  .concat(
                    playerStat.goals.total ? playerStat.goals.total : 0,
                    " </div>\n        </div>\n        "
                  );
          modalBox.innerHTML =
            "   <div class='left-box'>\n                <div class='pl-img-box'>\n                    <img src=\""
              .concat(
                playerInfo.photo,
                "\"/>\n                </div>\n                <div class='pl-name'>"
              )
              .concat(
                playerInfo.name,
                "</div>\n                <div class='position-number-box'>\n                    <div class='value'>Number: "
              )
              .concat(
                playerStat.games.number,
                "</div>\n                </div>\n            </div>\n            <div class='right-box'>\n                <div class='position-box row'>\n                    <div class='title'>Position: </div>\n                    <div class='value'>"
              )
              .concat(
                playerStat.games.position,
                "</div>\n                </div>\n                <div class='rating-box row'>\n                    <div class='title'>Rating: </div>\n                    <div class='value'>"
              )
              .concat(
                playerStat.games.rating ? playerStat.games.rating : 0,
                "</div>\n                </div>\n                <div class='minutes-box row'>\n                    <div class='title'>Minutes: </div>\n                    <div class='value'>"
              )
              .concat(
                playerStat.games.minutes ? playerStat.games.minutes : 0,
                "</div>\n                </div>\n\n                "
              )
              .concat(
                rightBoxData,
                "\n                \n            </div>\n        "
              );
        };

        /* harmony default export */ __webpack_exports__["default"] =
          renderPlayerStat;

        /***/
      },

    /***/ "./src/scripts/renderVotingModal.js":
      /*!******************************************!*\
  !*** ./src/scripts/renderVotingModal.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _renderVotingStat__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./renderVotingStat */ "./src/scripts/renderVotingStat.js"
          );

        var renderVotingModal = function renderVotingModal(
          allGamesBoxDiv,
          t1ref,
          t2ref
        ) {
          var modalDiv = document.createElement("div");
          modalDiv.innerHTML =
            '\n        <div id="myVotingModal" class="modal-v">\n            <div class="modal-v-content">\n                <span class="close-v">&times;</span>\n                <div id=\'modal-v-box\'>\n                </div>\n            </div>\n        </div>\n        ';
          allGamesBoxDiv.appendChild(modalDiv);
          var modalV = document.querySelector("#myVotingModal");
          var spanV = document.getElementsByClassName("close-v")[0];
          var votingBtns = document.querySelectorAll(".voting-btn");
          votingBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
              // user anonymous auth login
              auth.signInAnonymously();
              modalV.style.display = "block"; // console.log('HI FROM VOTING MODAL')

              var name1 = btn.getAttribute("team1-name");
              var name2 = btn.getAttribute("team2-name");
              var logo1 = btn.getAttribute("team1-logo");
              var logo2 = btn.getAttribute("team2-logo");
              var gId = btn.getAttribute("gameId");

              if (t1ref === btn.getAttribute("team1-name")) {
                Object(
                  _renderVotingStat__WEBPACK_IMPORTED_MODULE_0__["default"]
                )(name1, name2, logo1, logo2, gId);
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

        /* harmony default export */ __webpack_exports__["default"] =
          renderVotingModal;

        /***/
      },

    /***/ "./src/scripts/renderVotingStat.js":
      /*!*****************************************!*\
  !*** ./src/scripts/renderVotingStat.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _drawPie__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./drawPie */ "./src/scripts/drawPie.js");
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var renderVotingStat = function renderVotingStat(
          name1,
          name2,
          logo1,
          logo2,
          gameId
        ) {
          var modalVBox = document.getElementById("modal-v-box");
          modalVBox.innerHTML =
            "\n        <div class='teams-row'>\n            <div class='btn-box'>\n                <button id='voteNum1' name='name1'>"
              .concat(
                name1,
                "</button>\n            </div>\n            <div class='message'> Who will win? </div>\n            <div class='btn-box'>\n                <button id='voteNum2' name='name2'>"
              )
              .concat(
                name2,
                "</button>\n            </div>\n        </div>\n        <div id='voting-box'>\n            \n        </div>\n    "
              );
          var voteData1 = document.getElementById("voteNum1");
          var voteData2 = document.getElementById("voteNum2");
          voteData1.addEventListener("click", function (e) {
            getData(1, 1, parseInt(gameId));
          });
          voteData2.addEventListener("click", function (e) {
            getData(1, 2, parseInt(gameId));
          });

          var addData = function addData(data, vote1, vote2) {
            // console.log('ho from addData function');
            // console.log(data);
            db.collection("winner-votes").add(data);
            renderVotes(vote1, vote2);
          };

          var renderVotes = function renderVotes(vote1, vote2) {
            // console.log(vote1, vote2)
            var votingBoxDiv = document.getElementById("voting-box");
            votingBoxDiv.innerHTML =
              "\n            <div class='voting-row'>\n                <div class='votes1 vote'>"
                .concat(
                  ((vote1 / (vote1 + vote2)) * 100).toFixed(1),
                  "%</div>\n                <div class='votes2 vote'>"
                )
                .concat(
                  ((vote2 / (vote1 + vote2)) * 100).toFixed(1),
                  "%</div>\n            </div>\n            <div id='pie-box'>\n                \n            </div> \n        "
                );
            Object(_drawPie__WEBPACK_IMPORTED_MODULE_0__["default"])(
              vote1,
              vote2
            );
          };

          var updateData = function updateData(data, keyId, vote1, vote2) {
            // console.log(data);
            db.collection("winner-votes").doc(keyId).update(data);
            renderVotes(vote1, vote2);
          };

          var getData = function getData(val, num, gameId) {
            db.collection("winner-votes")
              .get()
              .then(function (res) {
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
                      if (vote === "team1") {
                        vote1 = votes[vote];
                      } else {
                        vote2 = votes[vote];
                      }
                    }

                    if (num === 1) {
                      var newVote1 = vote1 + val;

                      var newData = _defineProperty({}, gameId, {
                        team1: newVote1,
                        team2: vote2,
                      });

                      updateData(newData, keyId, newVote1, vote2);
                      updated = true;
                    } else {
                      var newVote2 = vote2 + val;

                      var _newData2 = _defineProperty({}, gameId, {
                        team1: vote1,
                        team2: newVote2,
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
                      team2: vote2,
                    });

                    addData(newData, newVote1, vote2);
                  } else {
                    var newVote2 = vote2 + val;

                    var _newData5 = _defineProperty({}, gameId, {
                      team1: vote1,
                      team2: newVote2,
                    });

                    addData(_newData5, vote1, newVote2);
                  }
                }
              })
              .catch(function (err) {
                console.log(err);
              });
          };
        };

        /* harmony default export */ __webpack_exports__["default"] =
          renderVotingStat;

        /***/
      },

    /***/ "./src/scripts/standings.js":
      /*!**********************************!*\
  !*** ./src/scripts/standings.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_0__
          );

        var renderStandings = function renderStandings() {
          var standingsDiv = document.getElementById("standings");
          var standingBoxDiv = document.createElement("div");
          standingBoxDiv.classList.add("team-standing-box");
          standingsDiv.append(standingBoxDiv);
          axios__WEBPACK_IMPORTED_MODULE_0___default.a
            .get("./standings")
            .then(function (res) {
              if (res.data.response.length !== 0) {
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
              } else {
                var emptyResponseDiv = document.createElement("div");
                emptyResponseDiv.innerText =
                  "Standings data is not available at this time...";
                emptyResponseDiv.classList.add("empty-response");
                standingBoxDiv.append(emptyResponseDiv);
              }
            })
            .catch(function (err) {
              console.log(err);
            });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          renderStandings;

        /***/
      },

    /***/ "./src/styles/index.scss":
      /*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpZWxkLnBuZyIsIndlYnBhY2s6Ly8vLi9kaXN0L2ltYWdlcy9ibGFja2xvZ28ucG5nIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cnJlbnRSb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kcmF3UGllLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZXNSZWZyZXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVzdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dldEZpeHR1cmVQbGF5ZXJzU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9vcGVuSW5zdHJ1Y3Rpb25zTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyUGxheWVyTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyUGxheWVyU3RhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJWb3RpbmdNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJWb3RpbmdTdGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N0YW5kaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnRSb3VuZCIsIm9wZW5JbnN0cnVjdGlvbnNNb2RhbCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImN1cnJlbnRSIiwiZGF0YSIsInJlc3BvbnNlIiwicmVuZGVyR2FtZXMiLCJyZW5kZXJTdGFuZGluZ3MiLCJuYXZiYXJMb2dvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZHJhd1BpZSIsInZvdGUxIiwidm90ZTIiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJjZW50IiwieCIsInkiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJncmFwaCIsInBpZSIsInNvcnQiLCJ2YWx1ZSIsImQiLCJhcmNQYXRoIiwiYXJjIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsImNvbG9yIiwic2NhbGVPcmRpbmFsIiwidXBkYXRlIiwiZG9tYWluIiwicGF0aHMiLCJzZWxlY3RBbGwiLCJleGl0IiwicmVtb3ZlIiwiZW50ZXIiLCJuYW1lIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwiYXJjVHdlZW5FbnRlciIsImkiLCJpbnRlcnBvbGF0ZSIsImVuZEFuZ2xlIiwic3RhcnRBbmdsZSIsInQiLCJyZW5kZXJHYW1lQnlJZCIsImZpeHR1cmVJZCIsInNjb3JlMSIsInNjb3JlMiIsImxlYWd1ZUluZm9EaXYiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFsbEdhbWVzQ29udGVudERpdiIsImNsZWFySW50ZXJ2YWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xlYXIiLCJvbmVHYW1lQ29udGVudERpdiIsImZpZWxkRGl2IiwiY3JlYXRlRWxlbWVudCIsInNxdWFkc0RpdiIsImFkZCIsImZpZWxkIiwiZ2sxRGl2IiwiZGVmMURpdiIsIm1pZDFEaXYiLCJmd2QxRGl2IiwiZ2syRGl2IiwiZGVmMkRpdiIsIm1pZDJEaXYiLCJmd2QyRGl2IiwidGVhbTFEaXYiLCJ0ZWFtIiwibG9nbyIsInRlYW0yRGl2IiwiZm9yRWFjaCIsImNvbW1hbmQiLCJjaWR4Iiwic3RhcnRYSSIsInBsciIsInBpZHgiLCJwbGF5ZXJEaXYiLCJwbGF5ZXIiLCJudW1iZXIiLCJwb3MiLCJkaXYiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiZ2V0Rml4dHVyZVBsYXllcnNTdGF0IiwiRml4dHVyZVBsYXllcnNTdGF0IiwicmVuZGVyR2FtZVN0YXQiLCJyZW5kZXJQbGF5ZXJNb2RhbCIsInJvdW5kIiwiYWxsR2FtZXNEaXYiLCJhbGxHYW1lc0JveERpdiIsImZpeHR1cmVzQXJyIiwic2VjdGlvbk5hbWVEaXYiLCJsaXZlR2FtZXNTdGF0dXMiLCJuZXh0U2Vhc29uIiwibGVhZ3VlIiwic2Vhc29uIiwiY291bnRyeSIsImZsYWciLCJlcGxMb2dvIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiY3VycmVudFJvdW5kU3RyaW5nIiwic3BsaXQiLCJwb3AiLCJwcmV2Um91bmQiLCJwYXJzZUludCIsIm5leHRSb3VuZCIsInBSb3VuZCIsIm5Sb3VuZCIsInByZXZpb3VzUm91bmQiLCJmb2xsb3dpbmdSb3VuZCIsImdhbWVMaXZlU3RhdHVzIiwiZ2FtZU5vdExpdmVTdGF0dXMiLCJmaXgiLCJpZHgiLCJ0ZWFtMSIsInRlYW1zIiwiaG9tZSIsImxvZ28xIiwidGVhbTIiLCJhd2F5IiwibG9nbzIiLCJnb2FscyIsImdhbWVTdGF0dXMiLCJmaXh0dXJlIiwic3RhdHVzIiwic2hvcnQiLCJnYW1lSWQiLCJpbmNsdWRlcyIsImZpeHR1cmVSb3dEaXYiLCJnYW1lU3RhdHVzUm93RGl2Iiwic2NvcmVCb3hEaXYiLCJ0ZW1wIiwidm90ZUJ0bkRpc3BsYXkiLCJsb25nIiwicmVuZGVyVm90aW5nTW9kYWwiLCJidXR0b25MaXZlVXBkYXRlcyIsIm5ld0NvdW50ZXIiLCJzZXRJdGVtIiwiYnRuTGl2ZVVwZGF0ZXMiLCJidG5Ob0xpdmVVcGRhdGVzIiwiZ2FtZXNSZWZyZXNoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvdW50ZXIiLCJyZW1vdmVJdGVtIiwiZGlzYWJsZWQiLCJzdGFuZGluZ3NEaXYiLCJnYW1lU3RhdERpdiIsInRlYW1zU3RhdCIsInBvc3Nlc3Npb24iLCJzaG90c09uIiwic2hvdHNPZmYiLCJmb3VscyIsInljIiwidGVhbVN0YXQiLCJpZHgxIiwic3RhdGlzdGljcyIsInN0YXQiLCJ0eXBlIiwicHVzaCIsInRlYW0xUGxheWVyc1N0YXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwbGF5ZXJzIiwidGVhbTJQbGF5ZXJzU3RhdCIsInRlYW0xU2NvcmVkUGxEaXYiLCJ0ZWFtMlNjb3JlZFBsRGl2IiwidG90YWwiLCJzYzFEaXYiLCJzYzJEaXYiLCJyZW5kZXJTdGF0cyIsInN0YXQxIiwiaWROYW1lIiwiZWxlbSIsInN0eWxlIiwicmF0aW8iLCJuYXZEaXYiLCJpbnN0ckJ0biIsIm1vZGFsRGl2IiwibW9kYWwiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRpc3BsYXkiLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGF5ZXJzVG9DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJJZCIsImdldEF0dHJpYnV0ZSIsInRlYW1JZCIsInBsYXllcklkbSIsInRlYW1JZG0iLCJyZW5kZXJQbGF5ZXJTdGF0IiwiZml4dHVyZUlkbSIsIkZpeHR1cmVQbGF5ZXJzU3RhdG0iLCJ0ZWFtSW5mbyIsInBsYXllckluZm8iLCJwbGF5ZXJTdGF0Iiwic3F1YWQiLCJtb2RhbEJveCIsInJpZ2h0Qm94RGF0YSIsImdhbWVzIiwicG9zaXRpb24iLCJzYXZlcyIsImNvbmNlZGVkIiwiZHVlbHMiLCJ3b24iLCJwYXNzZXMiLCJhY2N1cmFjeSIsInNob3RzIiwicGhvdG8iLCJyYXRpbmciLCJtaW51dGVzIiwidDFyZWYiLCJ0MnJlZiIsIm1vZGFsViIsInNwYW5WIiwidm90aW5nQnRucyIsImJ0biIsImF1dGgiLCJzaWduSW5Bbm9ueW1vdXNseSIsIm5hbWUxIiwibmFtZTIiLCJnSWQiLCJyZW5kZXJWb3RpbmdTdGF0Iiwic2lnbk91dCIsIm1vZGFsVkJveCIsInZvdGVEYXRhMSIsInZvdGVEYXRhMiIsImUiLCJnZXREYXRhIiwiYWRkRGF0YSIsImRiIiwiY29sbGVjdGlvbiIsInJlbmRlclZvdGVzIiwidm90aW5nQm94RGl2IiwidG9GaXhlZCIsInVwZGF0ZURhdGEiLCJrZXlJZCIsImRvYyIsInZhbCIsIm51bSIsInVwZGF0ZWQiLCJkb2NzIiwia2V5cyIsInZvdGVzIiwidm90ZSIsIm5ld1ZvdGUxIiwibmV3RGF0YSIsIm5ld1ZvdGUyIiwic3RhbmRpbmdCb3hEaXYiLCJsZW5ndGgiLCJ0ZWFtc0FyciIsInN0YW5kaW5ncyIsInRlYW1EaXYiLCJ0ZWFtUmFua0JveERpdiIsInRlYW1OYW1lRGl2IiwidGVhbVBvaW50c0RpdiIsInRlYW1HYW1lc0NvdW50RGl2IiwidGVhbVJhbmtEaXYiLCJkYXRhRGl2IiwicG9pbnRzIiwiYWxsIiwicGxheWVkIiwicmFuayIsImVtcHR5UmVzcG9uc2VEaXYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQWUscUZBQXNCLEU7Ozs7Ozs7Ozs7O0FDQXJDLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFhLEU7Ozs7Ozs7Ozs7OztBQ0F6Qjs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDLGFBQWEsbUJBQU8sQ0FBQyxpRUFBa0I7O0FBRXZDLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7O0FBRTVDLGVBQWUsbUJBQU8sQ0FBQywyRUFBdUI7O0FBRTlDLG9CQUFvQixtQkFBTyxDQUFDLDZFQUF1Qjs7QUFFbkQsbUJBQW1CLG1CQUFPLENBQUMs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QSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFD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Q0FBc0IsbUJBQXRCO0FBQ0EyTSxzQkFBYyxDQUFDck4sU0FBZixDQUF5QlUsR0FBekIsQ0FBNkIsZUFBN0I7QUFDQStNLG1CQUFXLENBQUN6TixTQUFaLENBQXNCVSxHQUF0QixDQUEwQixXQUExQjtBQUNBOE0seUJBQWlCLENBQUN4TixTQUFsQixDQUE0QlUsR0FBNUIsQ0FBZ0MsY0FBaEM7QUFDQTZNLHFCQUFhLENBQUN2TixTQUFkLENBQXdCVSxHQUF4QixDQUE0QixhQUE1QjtBQUNBZ04sZUFBTyxDQUFDMU4sU0FBUixDQUFrQlUsR0FBbEIsQ0FBc0IsVUFBdEI7QUFFQTJNLHNCQUFjLENBQUMxUCxNQUFmLENBQXNCOFAsV0FBdEIsRUFBbUNILFdBQW5DO0FBQ0FJLGVBQU8sQ0FBQy9QLE1BQVIsQ0FBZTZQLGlCQUFmLEVBQWtDRCxhQUFsQztBQUNBSCxlQUFPLENBQUN6UCxNQUFSLENBQWUwUCxjQUFmLEVBQStCSyxPQUEvQjtBQUNBVixzQkFBYyxDQUFDclAsTUFBZixDQUFzQnlQLE9BQXRCO0FBQ0QsT0F6QkQ7QUEwQkQsS0E1QkQsTUE0Qk87QUFDTCxVQUFNVyxnQkFBZ0IsR0FBR3ZSLFFBQVEsQ0FBQ2dFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7QUFDQXVOLHNCQUFnQixDQUFDMUwsU0FBakIsR0FDRSxpREFERjtBQUVBMEwsc0JBQWdCLENBQUMvTixTQUFqQixDQUEyQlUsR0FBM0IsQ0FBK0IsZ0JBQS9CO0FBQ0FzTSxvQkFBYyxDQUFDclAsTUFBZixDQUFzQm9RLGdCQUF0QjtBQUNEO0FBQ0YsR0F2Q0gsRUF3Q0dyUixLQXhDSCxDQXdDUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxHQTFDSDtBQTJDRCxDQWpERDs7QUFtRGVMLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2ZpZWxkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2JsYWNrbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG5cbnZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG5cbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG5cbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG5cbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7IC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG5cbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDsgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG5cblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcblxuXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG5cblxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuXG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgdGltZW91dFxuXG5cbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG5cbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cblxuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/IGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfSAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuXG5cbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cblxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH0gLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXG5cbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH0gLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfSAvLyBTZW5kIHRoZSByZXF1ZXN0XG5cblxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcblxudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7IC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG5cbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpOyAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcblxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuICByZXR1cm4gaW5zdGFuY2U7XG59IC8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuXG5cbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTsgLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5cbmF4aW9zLkF4aW9zID0gQXhpb3M7IC8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcblxuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07IC8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuXG5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpOyAvLyBFeHBvc2UgYWxsL3NwcmVhZFxuXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7IC8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxuXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cblxuXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuXG5cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cblxuXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG5cbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xuXG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cblxuXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7IC8vIFNldCBjb25maWcubWV0aG9kXG5cbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9IC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcblxuXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59OyAvLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcblxuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xuXG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG5cbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5cblxuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcblxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9OyAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG5cbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKGNvbmZpZy5kYXRhLCBjb25maWcuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QpOyAvLyBGbGF0dGVuIGhlYWRlcnNcblxuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSwgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sIGNvbmZpZy5oZWFkZXJzKTtcbiAgdXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSwgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gIH0pO1xuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEocmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcblxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKHJlYXNvbi5yZXNwb25zZS5kYXRhLCByZWFzb24ucmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG5cbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIGVycm9yO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknLCAncGFyYW1zJ107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFsnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLCAndGltZW91dCcsICd0aW1lb3V0TWVzc2FnZScsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLCAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsICdtYXhDb250ZW50TGVuZ3RoJywgJ21heEJvZHlMZW5ndGgnLCAnbWF4UmVkaXJlY3RzJywgJ3RyYW5zcG9ydCcsICdodHRwQWdlbnQnLCAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJywgJ3Jlc3BvbnNlRW5jb2RpbmcnXTtcbiAgdmFyIGRpcmVjdE1lcmdlS2V5cyA9IFsndmFsaWRhdGVTdGF0dXMnXTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5cy5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cykuY29uY2F0KGRpcmVjdE1lcmdlS2V5cyk7XG4gIHZhciBvdGhlcktleXMgPSBPYmplY3Qua2V5cyhjb25maWcxKS5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuICByZXR1cm4gY29uZmlnO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcblxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5jb25maWcsIG51bGwsIHJlc3BvbnNlLnJlcXVlc3QsIHJlc3BvbnNlKSk7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcblxuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG5cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHwgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fCB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fCB1dGlscy5pc1N0cmVhbShkYXRhKSB8fCB1dGlscy5pc0ZpbGUoZGF0YSkgfHwgdXRpbHMuaXNCbG9iKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qIElnbm9yZSAqL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLnJlcGxhY2UoLyUzQS9naSwgJzonKS5yZXBsYWNlKC8lMjQvZywgJyQnKS5yZXBsYWNlKC8lMkMvZ2ksICcsJykucmVwbGFjZSgvJTIwL2csICcrJykucmVwbGFjZSgvJTVCL2dpLCAnWycpLnJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuXG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuXG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpIDogYmFzZVVSTDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/IC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4ge1xuICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgIH0sXG4gICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgcmV0dXJuIG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGw7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgIH1cbiAgfTtcbn0oKSA6IC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbmZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIHtcbiAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gIH07XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/IC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG5mdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB2YXIgb3JpZ2luVVJMO1xuICAvKipcbiAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAqL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICB9XG5cbiAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTsgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgcGF0aG5hbWU6IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgIH07XG4gIH1cblxuICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgLyoqXG4gICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICB2YXIgcGFyc2VkID0gdXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICByZXR1cm4gcGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiYgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0O1xuICB9O1xufSgpIDogLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbmZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7IC8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG5cblxudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gWydhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJywgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLCAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J107XG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHtcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkO1xufTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKSAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIEFycmF5QnVmZmVyLmlzVmlldykge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHZhbCAmJiB2YWwuYnVmZmVyICYmIHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cblxuXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG59XG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cblxuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG5cblxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1lcmdlKClcbi8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqL1xue1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5cblxuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICogQHJldHVybiB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cblxuXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltLFxuICBzdHJpcEJPTTogc3RyaXBCT01cbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307IC8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfSAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXG5cbiAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH0gLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXG5cbiAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZHJhaW5pbmcgPSBmYWxzZTtcblxuICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICB9XG5cbiAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgIGRyYWluUXVldWUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICBpZiAoZHJhaW5pbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW4pIHtcbiAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuXG4gICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVldWVJbmRleCA9IC0xO1xuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuXG4gIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gIH1cblxuICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuXG4gIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgfVxufTsgLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuXG5cbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICB0aGlzLmZ1biA9IGZ1bjtcbiAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuXG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcblxucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBbXTtcbn07XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJy8nO1xufTtcblxucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAwO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgY3VycmVudFJvdW5kIGZyb20gXCIuL3NjcmlwdHMvY3VycmVudFJvdW5kXCI7XG5pbXBvcnQgcmVuZGVyU3RhbmRpbmdzIGZyb20gXCIuL3NjcmlwdHMvc3RhbmRpbmdzXCI7XG5pbXBvcnQgb3Blbkluc3RydWN0aW9uc01vZGFsIGZyb20gXCIuL3NjcmlwdHMvb3Blbkluc3RydWN0aW9uc01vZGFsXCI7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIGxldCByb3VuZCA9ICdSZWd1bGFyIFNlYXNvbiAtIDEyJyA7XG5cbiAgICAvLyBHRVQgQ1VSUkVOVCBST1VORCBBTkQgUkVOREVSIEdBTUVTIEFORCBTVEFORElOR1NcbiAgICBjdXJyZW50Um91bmQoKVxuICAgICAgICBvcGVuSW5zdHJ1Y3Rpb25zTW9kYWwoKTsgXG4gICAgXG4gICAgLy8gcmVuZGVyR2FtZXMocm91bmQpO1xuICAgIC8vIHJlbmRlckdhbWVTdGF0KCk7XG4gICAgXG5cbiAgICAvLyBjb25zdCBuYXZiYXJMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXItbG9nb1wiKTtcbiAgICAvLyBuYXZiYXJMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMocm91bmQpKTtcbn0pO1xuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcmVuZGVyR2FtZXMgZnJvbSBcIi4vZ2FtZXNcIjtcbmltcG9ydCByZW5kZXJTdGFuZGluZ3MgZnJvbSBcIi4vc3RhbmRpbmdzXCI7XG5cbmNvbnN0IGN1cnJlbnRSb3VuZCA9ICgpID0+IHtcbiAgICBcbiAgICBheGlvcy5nZXQoYGN1cnJlbnRyb3VuZGApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UiA9IHJlcy5kYXRhLnJlc3BvbnNlWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXNwb25zZVswXSk7XG5cbiAgICAgICAgcmVuZGVyR2FtZXMoY3VycmVudFIpO1xuICAgICAgICByZW5kZXJTdGFuZGluZ3MoKTtcbiAgICAgICAgLy8gXG4gICAgICAgIGNvbnN0IG5hdmJhckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1sb2dvXCIpO1xuICAgICAgICBuYXZiYXJMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZXMoY3VycmVudFIpKTtcblxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRSb3VuZDsiLCJjb25zdCBkcmF3UGllID0gKHZvdGUxLCB2b3RlMikgPT4ge1xuXG4gICAgY29uc3QgZGltcyA9IHtoZWlnaHQ6MzAwLCB3aWR0aDozMDAsIHJhZGl1czoxNTB9O1xuICAgIGNvbnN0IGNlbnQgPSB7eDogKGRpbXMud2lkdGggLyAyICsgNSksIHk6IChkaW1zLmhlaWdodCAgLzIgKyA1KX07XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNwaWUtYm94JylcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgZGltcy53aWR0aCArIDUwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZGltcy5oZWlnaHQgKyA1MClcblxuICAgIGNvbnN0IGdyYXBoID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWApXG5cbiAgICBjb25zdCBwaWUgPSBkMy5waWUoKVxuICAgICAgICAuc29ydChudWxsKVxuICAgICAgICAudmFsdWUoZCA9PiBkLnZhbHVlKTtcblxuICAgIGNvbnN0IGFyY1BhdGggPSBkMy5hcmMoKVxuICAgICAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cy8xLjUpXG4gICAgXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoWycjZjViN2NkJywgJyMwRDBEMEUnXSlcblxuICAgIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29sb3IuZG9tYWluKFsndGVhbTEnLCAndGVhbTInXSlcbiAgICAgICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAgICAgLmRhdGEocGllKGRhdGEpKTtcblxuICAgICAgICBwYXRocy5leGl0KCkucmVtb3ZlKCk7XG4gICAgICAgIHBhdGhzLmF0dHIoJ2QnLCBhcmNQYXRoKTtcblxuICAgICAgICBwYXRocy5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJjJylcbiAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJyNmZmYnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZD0+Y29sb3IoZC5kYXRhLmRhdGEubmFtZSkpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxNTAwKSBcbiAgICAgICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGFyY1R3ZWVuRW50ZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gcGllKFtcbiAgICAgICAgeyBuYW1lOiAndGVhbTInLCB2YWx1ZTogdm90ZTIgfSxcbiAgICAgICAgeyBuYW1lOiAndGVhbTEnLCB2YWx1ZTogdm90ZTEgfVxuICAgIF0pXG5cbiAgICBcbiAgICBjb25zdCBhcmNUd2VlbkVudGVyID0gKGQpID0+IHtcbiAgICAgICAgbGV0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLmVuZEFuZ2xlLCBkLnN0YXJ0QW5nbGUpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odCl7XG4gICAgICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVwZGF0ZShkYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd1BpZTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZmllbGQgZnJvbSAnLi4vLi4vYXNzZXRzL2ZpZWxkLnBuZyc7XG5pbXBvcnQgcmVuZGVyR2FtZVN0YXQgZnJvbSAnLi9nYW1lc3RhdCc7XG5pbXBvcnQgZ2V0Rml4dHVyZVBsYXllcnNTdGF0IGZyb20gXCIuL2dldEZpeHR1cmVQbGF5ZXJzU3RhdFwiO1xuaW1wb3J0IHJlbmRlclBsYXllck1vZGFsIGZyb20gJy4vcmVuZGVyUGxheWVyTW9kYWwnO1xuaW1wb3J0IG9wZW5JbnN0cnVjdGlvbnNNb2RhbCBmcm9tICcuL29wZW5JbnN0cnVjdGlvbnNNb2RhbCc7XG5cbmNvbnN0IHJlbmRlckdhbWVCeUlkID0gKGZpeHR1cmVJZCwgc2NvcmUxLCBzY29yZTIpID0+IHtcblxuICAgIGNvbnN0IGxlYWd1ZUluZm9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWd1ZS1pbmZvXCIpO1xuICAgIGxlYWd1ZUluZm9EaXYuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuICAgIGxlYWd1ZUluZm9EaXYuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdCcpO1xuXG4gICAgY29uc3QgYWxsR2FtZXNDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2FtZXNcIik7XG4gICAgYWxsR2FtZXNDb250ZW50RGl2LmlubmVySFRNTCA9IFwiPGRpdiBpZD0nb25lLWdhbWUnPjwvZGl2PlwiO1xuXG4gICAgYXhpb3MuZ2V0KGAuL2dhbWU/Zml4dHVyZUlkPSR7Zml4dHVyZUlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgLy9jbGVhciBsaXZlIHVwZGF0ZXMgaW50ZXJ2YWwgYW5kIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdEludGVydmFsJykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgICAgICBjb25zdCBvbmVHYW1lQ29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25lLWdhbWVcIik7XG4gICAgICAgIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNxdWFkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZCgnZmllbGQtYm94Jyk7XG4gICAgICAgIHNxdWFkc0Rpdi5jbGFzc0xpc3QuYWRkKCdzcXVhZC1ib3gnKTtcbiAgICAgICAgXG4gICAgICAgIHNxdWFkc0Rpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBpZD0ndGVhbS0xLWJveCc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSd0ZWFtLTItYm94Jz48L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIG9uZUdhbWVDb250ZW50RGl2LmFwcGVuZChzcXVhZHNEaXYpO1xuICAgICAgICBcbiAgICAgICAgZmllbGREaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlXCIgc3JjPVwiJHtmaWVsZH1cIi8+XG4gICAgICAgICAgICA8ZGl2IGlkPSdnay0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdkZWYtMScgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nbWlkLTEnIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2Z3ZC0xJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdmd2QtMicgY2xhc3M9J3Jvd3MnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nbWlkLTInIGNsYXNzPSdyb3dzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J2RlZi0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdnay0yJyBjbGFzcz0ncm93cyc+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIG9uZUdhbWVDb250ZW50RGl2LmFwcGVuZChmaWVsZERpdik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnazFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdrLTFcIik7XG4gICAgICAgIGNvbnN0IGRlZjFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZi0xXCIpO1xuICAgICAgICBjb25zdCBtaWQxRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWQtMVwiKTtcbiAgICAgICAgY29uc3QgZndkMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZndkLTFcIik7XG4gICAgICAgIGNvbnN0IGdrMkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2stMlwiKTtcbiAgICAgICAgY29uc3QgZGVmMkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmLTJcIik7XG4gICAgICAgIGNvbnN0IG1pZDJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC0yXCIpO1xuICAgICAgICBjb25zdCBmd2QyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmd2QtMlwiKTtcblxuICAgICAgICAvL2FkZGluZyBwbGF5ZXJzIGluc2lkZSBzcXVhZHMgc2VjdGlvblxuICAgICAgICBjb25zdCB0ZWFtMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVhbS0xLWJveFwiKTtcbiAgICAgICAgICAgIHRlYW0xRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0tMS1oZWFkZXItYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz4ke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLnRlYW0ubmFtZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLnRlYW0ubG9nb31cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgICAgIGNvbnN0IHRlYW0yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtLTItYm94XCIpO1xuICAgICAgICAgICAgdGVhbTJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbS0yLWhlYWRlci1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2xvZ28nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzLmRhdGEucmVzcG9uc2VbMV0udGVhbS5sb2dvfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgLy9wbGFjZSBwbGF5ZXJzIG9uIGEgZmllbGQgYWNjb3JkaW5nIHRvIHRoZWlyIGFjdHVhbCBwb3NpdGlvbiBhbmQgdGVhbSBmb3JtYXRpb25cbiAgICAgICAgcmVzLmRhdGEucmVzcG9uc2UuZm9yRWFjaCgoY29tbWFuZCwgY2lkeCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29tbWFuZClcbiAgICAgICAgICAgIGNvbW1hbmQuc3RhcnRYSS5mb3JFYWNoKChwbHIsIHBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2lkeCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoJ3RlYW0tMScpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdudW1iZXInPiR7cGxyLnBsYXllci5udW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz4ke3Bsci5wbGF5ZXIubmFtZX08L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwb3MnPiAgKCR7cGxyLnBsYXllci5wb3N9KTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsci5wbGF5ZXIucG9zID09PSAnRycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwxJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0PSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdrMURpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0QnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMScsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmMURpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDEnLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZDFEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdGJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwxJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmd2QxRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlYW0xRGl2LmFwcGVuZENoaWxkKHBsYXllckRpdik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKCd0ZWFtLTInKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbnVtYmVyJz4ke3Bsci5wbGF5ZXIubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtwbHIucGxheWVyLm5hbWV9PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncG9zJz4gICgke3Bsci5wbGF5ZXIucG9zfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICBpZiAocGxyLnBsYXllci5wb3MgPT09ICdHJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwyJywncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdrMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHIucGxheWVyLnBvcyA9PT0gJ0QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbDInLCAncGwtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcsIHBsci5wbGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGVhbUlkJywgY29tbWFuZC50ZWFtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBwbHIucGxheWVyLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjJEaXYuYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxyLnBsYXllci5wb3MgPT09ICdNJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGwyJywgJ3BsLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncGxheWVySWQnLCBwbHIucGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RlYW1JZCcsIGNvbW1hbmQudGVhbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gcGxyLnBsYXllci5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWQyRGl2LmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsci5wbGF5ZXIucG9zID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsMicsICdwbC1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3BsYXllcklkJywgcGxyLnBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0ZWFtSWQnLCBjb21tYW5kLnRlYW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IHBsci5wbGF5ZXIubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZndkMkRpdi5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZWFtMkRpdi5hcHBlbmRDaGlsZChwbGF5ZXJEaXYsIGZpeHR1cmVJZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHJlbmRlckdhbWVTdGF0KGZpeHR1cmVJZCwgc2NvcmUxLCBzY29yZTIpO1xuICAgICAgICBcbiAgICAgICAgZ2V0Rml4dHVyZVBsYXllcnNTdGF0KGZpeHR1cmVJZCkudGhlbigoRml4dHVyZVBsYXllcnNTdGF0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhGaXh0dXJlUGxheWVyc1N0YXQpXG4gICAgICAgICAgICByZW5kZXJHYW1lU3RhdChmaXh0dXJlSWQsIHNjb3JlMSwgc2NvcmUyLCBGaXh0dXJlUGxheWVyc1N0YXQpO1xuICAgICAgICAgICAgLy9tb2RhbCBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICByZW5kZXJQbGF5ZXJNb2RhbChzcXVhZHNEaXYsIEZpeHR1cmVQbGF5ZXJzU3RhdCwgZml4dHVyZUlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBvcGVuSW5zdHJ1Y3Rpb25zTW9kYWwoKTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lQnlJZDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByZW5kZXJHYW1lQnlJZCBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHJlbmRlclZvdGluZ01vZGFsIGZyb20gJy4vcmVuZGVyVm90aW5nTW9kYWwnO1xuaW1wb3J0IGdhbWVzUmVmcmVzaCBmcm9tICcuL2dhbWVzUmVmcmVzaCc7XG5pbXBvcnQgZXBsTG9nbyBmcm9tICcuLi8uLi9kaXN0L2ltYWdlcy9ibGFja2xvZ28ucG5nJztcblxuY29uc3QgcmVuZGVyR2FtZXMgPSAocm91bmQpID0+IHtcbiAgICBjb25zdCBhbGxHYW1lc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdhbWVzXCIpXG4gICAgY29uc3QgYWxsR2FtZXNCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFsbEdhbWVzRGl2LmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcbiAgICBjb25zdCBsZWFndWVJbmZvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWFndWUtaW5mb1wiKTtcbiAgICBsZWFndWVJbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcblxuICAgIGF4aW9zLmdldChgLi9nYW1lcz9yb3VuZD0ke3JvdW5kfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBmaXh0dXJlc0FyciA9IHJlcy5kYXRhLnJlc3BvbnNlO1xuICAgICAgICBjb25zdCBzZWN0aW9uTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlY3Rpb25OYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLW5hbWVcIik7XG4gICAgICAgIFxuICAgICAgICBsZXQgbGl2ZUdhbWVzU3RhdHVzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbmV4dFNlYXNvbiA9IHJlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5zZWFzb24gKyAxO1xuICAgICAgICBsZWFndWVJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0nbGVhZ3VlLWJveCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3VudHJ5LWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+JHtyZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuY291bnRyeX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGFnJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5mbGFnfVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbG9nby1ib3gnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VwbExvZ299XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdsZWFndWUtbmFtZSc+XG4gICAgICAgICAgICAke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzZWFzb24tYm94Jz5cbiAgICAgICAgICAgICAgICAke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5zZWFzb259LSR7bmV4dFNlYXNvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZXBsLWxpbmsnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnByZW1pZXJsZWFndWUuY29tLycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyB0YXJnZXQ9XCJfYmxhbmtcIj5WaXNpdCBFUEw8L2E+ICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnktbnMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2F0LXllYXInPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jb3B5cmlnaHRcIj48L2k+JHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vbmlrb2xheXNoYXRhbG92LmNvbS8nIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgdGFyZ2V0PVwiX2JsYW5rXCI+YnkgTmlrb2xheSBTaGF0YWxvdjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgbGV0IGN1cnJlbnRSb3VuZFN0cmluZyA9IHJlcy5kYXRhLnJlc3BvbnNlWzBdLmxlYWd1ZS5yb3VuZDtcbiAgICAgICAgbGV0IGN1cnJlbnRSb3VuZCA9IGAke2N1cnJlbnRSb3VuZFN0cmluZy5zcGxpdCgnICcpLnBvcCgpfSBgO1xuICAgICAgICBsZXQgcHJldlJvdW5kID0gcGFyc2VJbnQoY3VycmVudFJvdW5kKSAtIDE7XG4gICAgICAgIGxldCBuZXh0Um91bmQgPSBwYXJzZUludChjdXJyZW50Um91bmQpICsgMTtcbiAgICAgICAgc2VjdGlvbk5hbWVEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncm91bmRQcmV2Jz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+IEdPIFRPIFJPVU5EICR7IHByZXZSb3VuZH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncm91bmRDdXJyJz5cbiAgICAgICAgICAgICAgICAgQUxMIEdBTUVTIC0gUk9VTkQgJHtjdXJyZW50Um91bmR9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3VuZE5leHQnPlxuICAgICAgICAgICAgICAgIEdPIFRPIFJPVU5EICR7bmV4dFJvdW5kfSA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgIGFsbEdhbWVzRGl2LmFwcGVuZChzZWN0aW9uTmFtZURpdik7XG5cbiAgICAgICAgY29uc3QgcFJvdW5kID0gYFJlZ3VsYXIgU2Vhc29uIC0gJHtwcmV2Um91bmR9YDtcbiAgICAgICAgY29uc3QgblJvdW5kID0gYFJlZ3VsYXIgU2Vhc29uIC0gJHtuZXh0Um91bmR9YDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmRQcmV2XCIpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmROZXh0XCIpO1xuICAgICAgICBcbiAgICAgICAgcHJldlJvdW5kICE9PSAwID8gcHJldmlvdXNSb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVzKHBSb3VuZCkpIDogXCJcIjtcbiAgICAgICAgLy8gcHJldmlvdXNSb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVzKHBSb3VuZCkpO1xuICAgICAgICBuZXh0Um91bmQgPT09IDM4ID8gJycgOlxuICAgICAgICBmb2xsb3dpbmdSb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckdhbWVzKG5Sb3VuZCkpOyAgICBcbiAgICAgICBcbiAgICAgICAgYWxsR2FtZXNCb3hEaXYuY2xhc3NMaXN0LmFkZChcImFsbC1nYW1lcy1ib3hcIik7XG4gICAgICAgIGFsbEdhbWVzRGl2LmFwcGVuZChhbGxHYW1lc0JveERpdik7XG4gICAgICAgIGNvbnN0IGdhbWVMaXZlU3RhdHVzID0gWycxSCcsJ0hUJywnMkgnLCdFVCcsJ1AnLCdCVCddO1xuICAgICAgICBjb25zdCBnYW1lTm90TGl2ZVN0YXR1cyA9IFsnTlMnLCAnRlQnXTtcbiAgICAgICAgXG4gICAgICAgIGZpeHR1cmVzQXJyLmZvckVhY2goKGZpeCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtMSA9IGZpeC50ZWFtcy5ob21lLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsb2dvMSA9IGZpeC50ZWFtcy5ob21lLmxvZ287XG4gICAgICAgICAgICBjb25zdCB0ZWFtMiA9IGZpeC50ZWFtcy5hd2F5Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsb2dvMiA9IGZpeC50ZWFtcy5hd2F5LmxvZ287XG4gICAgICAgICAgICBjb25zdCBzY29yZTEgPSBmaXguZ29hbHMuaG9tZTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlMiA9IGZpeC5nb2Fscy5hd2F5O1xuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGZpeC5maXh0dXJlLnN0YXR1cy5zaG9ydDtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVJZCA9IGZpeC5maXh0dXJlLmlkO1xuXG4gICAgICAgICAgICAvLyB0byBjaGVjayBpZiBhdCBsZWF0IG9uZSBnYW1lIGlzIGxpdmUgdG8gZW5hYmxlIHVwZGF0ZXNcbiAgICAgICAgICAgIGlmIChnYW1lTGl2ZVN0YXR1cy5pbmNsdWRlcyhnYW1lU3RhdHVzKSkgbGl2ZUdhbWVzU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpeHR1cmVSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVTdGF0dXNSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGZpeHR1cmVSb3dEaXYuY2xhc3NMaXN0LmFkZCgnZml4dHVyZS1ib3gnKTtcbiAgICAgICAgICAgIGdhbWVTdGF0dXNSb3dEaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGF0dXMtcm93Jyk7XG4gICAgICAgICAgICBzY29yZUJveERpdi5jbGFzc0xpc3QuYWRkKCdzY29yZS1ib3gnKTtcblxuICAgICAgICAgICAgZml4dHVyZVJvd0Rpdi5zZXRBdHRyaWJ1dGUoJ2dhbWVJZCcsIGdhbWVJZCApO1xuXG4gICAgICAgICAgICAvLyBpZiBnYW1lIGlzIGxpdmUgdGhlbiBzaG93ICdzY29yZScsIG90aGVyd2lzZSBzaG93ICd2cydcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSAoZ2FtZUxpdmVTdGF0dXMuaW5jbHVkZXMoZ2FtZVN0YXR1cykgfHwgKGdhbWVTdGF0dXMgPT09ICdGVCcpKSA/IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlLWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmUnPiR7c2NvcmUxfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Njb3JlJz4ke3Njb3JlMn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDogJzxkaXYgY2xhc3M9XCJ2c1wiPnZzPC9kaXY+JztcblxuICAgICAgICAgICAgLy8gaWYgZ2FtZSBpcyBub3Qgc3RhcnRlZCwgZGlzcGxheSBWT1RFIGJ1dHRvbiBcbiAgICAgICAgICAgIGNvbnN0IHZvdGVCdG5EaXNwbGF5ID0gKGdhbWVTdGF0dXMgPT09ICdOUycpPyBcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSd2b3RpbmctYnRuLWJveCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3ZvdGluZy1idG4nIFxuICAgICAgICAgICAgICAgICAgICB0ZWFtMS1uYW1lPScke3RlYW0xfSdcbiAgICAgICAgICAgICAgICAgICAgdGVhbTItbmFtZT0nJHt0ZWFtMn0nXG4gICAgICAgICAgICAgICAgICAgIHRlYW0xLWxvZ289JyR7bG9nbzF9J1xuICAgICAgICAgICAgICAgICAgICB0ZWFtMi1sb2dvPScke2xvZ28yfSdcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUlkPSR7Z2FtZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgVk9URVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YCA6ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaXh0dXJlUm93RGl2LmlubmVySFRNTCA9ICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lLXN0YXR1cy1zZWN0aW9uJz4ke2ZpeC5maXh0dXJlLnN0YXR1cy5sb25nfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbTEtYm94JyA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke3RlYW0xfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PGltZyBzcmM9XCIke2xvZ28xfVwiLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHt0ZW1wfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbTItYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjxpbWcgc3JjPVwiJHtsb2dvMn1cIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke3RlYW0yfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3ZvdGVCdG5EaXNwbGF5fVxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGdhbWVTdGF0dXMgIT09ICdOUycpIHtcbiAgICAgICAgICAgICAgICBmaXh0dXJlUm93RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyR2FtZUJ5SWQoZ2FtZUlkLCBzY29yZTEsIHNjb3JlMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChmaXh0dXJlUm93RGl2KTtcbiAgICAgICAgICAgIHJlbmRlclZvdGluZ01vZGFsKGFsbEdhbWVzQm94RGl2LCB0ZWFtMSwgdGVhbTIpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vbGl2ZSB1cGRhdGUgZnVuY3Rpb25hbGl0eVxuICAgICAgICBjb25zdCBidXR0b25MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkxpdmVVcGRhdGVzLmNsYXNzTGlzdC5hZGQoJ2xpdmUtdXBkYXRlcy1ib3gnKTtcbiAgICAgICAgYWxsR2FtZXNCb3hEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uTGl2ZVVwZGF0ZXMpO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxTdENvdW50ZXInKSAhPT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgbmV3Q291bnRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFN0Q291bnRlcicpO1xuICAgICAgICAgICAgbmV3Q291bnRlciArKztcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFN0Q291bnRlcicsIG5ld0NvdW50ZXIpO1xuICAgICAgICAgICAgaWYgKG5ld0NvdW50ZXIgPT09IDMpe1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChsaXZlR2FtZXNTdGF0dXMpe1xuICAgICAgICAgICAgYnV0dG9uTGl2ZVVwZGF0ZXMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nbGl2ZS11cGRhdGVzJz5BQ1RJVkFURSBMSVZFIFVQREFURVM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9J25vLWxpdmUtdXBkYXRlcyc+U1RPUCBMSVZFIFVQREFURVM8L2J1dHRvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBjb25zdCBidG5MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS11cGRhdGVzXCIpO1xuICAgICAgICAgICAgY29uc3QgYnRuTm9MaXZlVXBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm8tbGl2ZS11cGRhdGVzXCIpO1xuXG4gICAgICAgICAgICBnYW1lc1JlZnJlc2goYnRuTGl2ZVVwZGF0ZXMsIGJ0bk5vTGl2ZVVwZGF0ZXMsIHJvdW5kKVxuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICAgIGJ1dHRvbkxpdmVVcGRhdGVzLmlubmVySFRNTCA9IGBcbiAgICAgICAgLy8gICAgIDxidXR0b24gY2xhc3M9J25vLWxpdmUtdXBkYXRlcycgZGlzYWJsZWQ+XG4gICAgICAgIC8vICAgICAgICAgTm8gbGl2ZSBnYW1lcyByaWdodCBub3dcbiAgICAgICAgLy8gICAgIDwvYnV0dG9uPmA7XG4gICAgICAgIC8vICAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChidXR0b25MaXZlVXBkYXRlcyk7XG5cbiAgICAgICAgLy8gICAgIGNsZWFySW50ZXJ2YWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZXM7IiwiaW1wb3J0IHJlbmRlckdhbWVzIGZyb20gJy4vZ2FtZXMnO1xuXG4vL2dhbWVzUmVmcmVzaC5qc1xuY29uc3QgZ2FtZXNSZWZyZXNoID0gKGJ0bkxpdmVVcGRhdGVzLCBidG5Ob0xpdmVVcGRhdGVzLCByb3VuZCkgPT4ge1xuXG4gICAgbGV0IGludGVydmFsO1xuICAgIFxuICAgIGJ0bkxpdmVVcGRhdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW5kZXJHYW1lcyhyb3VuZClcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiByZW5kZXJHYW1lcyhyb3VuZCksIDEwMDAwKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcsIGludGVydmFsKTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFN0Q291bnRlcicsIGNvdW50ZXIpO1xuICAgIH0pO1xuICAgIFxuICAgIGJ0bk5vTGl2ZVVwZGF0ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpO1xuXG4gICAgICAgIGJ0bkxpdmVVcGRhdGVzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGJ0bk5vTGl2ZVVwZGF0ZXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH0pO1xuXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RJbnRlcnZhbCcpICE9PSBudWxsKXtcbiAgICAgICAgYnRuTGl2ZVVwZGF0ZXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBidG5Ob0xpdmVVcGRhdGVzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICAgIGJ0bkxpdmVVcGRhdGVzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGJ0bk5vTGl2ZVVwZGF0ZXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZXNSZWZyZXNoO1xuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHJlbmRlckdhbWVTdGF0ID0gKGZpeHR1cmVJZCwgc2NvcmUxLCBzY29yZTIsIEZpeHR1cmVQbGF5ZXJzU3RhdCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdISSBGUk9NIEdBTUUgU1RBVCcpO1xuICAgXG4gICAgY29uc3Qgb25lR2FtZUNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uZS1nYW1lXCIpO1xuICAgIGNvbnN0IHN0YW5kaW5nc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhbmRpbmdzXCIpXG4gICAgLy8gY29uc3QgdGVzdEJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gdGVzdEJveERpdi5jbGFzc0xpc3QuYWRkKFwidGVzdC1ib3hcIik7XG4gICAgYXhpb3MuZ2V0KGAvZ2FtZXN0YXQvP2ZpeHR1cmVJZD0ke2ZpeHR1cmVJZH1gKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEucmVzcG9uc2UpO1xuICAgICAgICBjb25zdCBnYW1lU3RhdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lU3RhdERpdi5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXQtYm94Jyk7XG4gICAgICAgIHN0YW5kaW5nc0Rpdi5hcHBlbmQoZ2FtZVN0YXREaXYpO1xuICAgICAgICBvbmVHYW1lQ29udGVudERpdi5hcHBlbmQoZ2FtZVN0YXREaXYpO1xuICAgICAgICBjb25zdCB0ZWFtc1N0YXQgPSByZXMuZGF0YS5yZXNwb25zZTtcbiAgICAgICAgY29uc3QgcG9zc2Vzc2lvbiA9IFtdO1xuICAgICAgICBjb25zdCBzaG90c09uID0gW107XG4gICAgICAgIGNvbnN0IHNob3RzT2ZmID0gW107XG4gICAgICAgIGNvbnN0IGZvdWxzID0gW107XG4gICAgICAgIGNvbnN0IHljID0gW107XG5cbiAgICAgICAgdGVhbXNTdGF0LmZvckVhY2goKHRlYW1TdGF0LCBpZHgxKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZWFtU3RhdClcbiAgICAgICAgICAgIHRlYW1TdGF0LnN0YXRpc3RpY3MuZm9yRWFjaChzdGF0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIkJhbGwgUG9zc2Vzc2lvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3Nlc3Npb24ucHVzaChzdGF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQudHlwZSA9PT0gXCJTaG90cyBvbiBHb2FsXCIpe1xuICAgICAgICAgICAgICAgICAgICBzaG90c09uLnB1c2goc3RhdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdGF0LnR5cGUgPT09IFwiU2hvdHMgb2ZmIEdvYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaG90c09mZi5wdXNoKHN0YXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIkZvdWxzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bHMucHVzaChzdGF0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdC50eXBlID09PSBcIlllbGxvdyBDYXJkc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHljLnB1c2goc3RhdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgZ2FtZVN0YXREaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dhbWUtc3RhdC10aXRsZSc+R0FNRSBTVEFUSVNUSUNTPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0LWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2NvcmVCb3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbUhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtTG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLnRlYW0ubG9nb31cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbU5hbWVcIj4ke3Jlcy5kYXRhLnJlc3BvbnNlWzBdLnRlYW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW1TY29yZTEnPiR7c2NvcmUxfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1Ib21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLmxvZ299XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1OYW1lXCI+JHtyZXMuZGF0YS5yZXNwb25zZVsxXS50ZWFtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtU2NvcmUyJz4ke3Njb3JlMn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aG8tc2NvcmVkLWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3doby1zY29yZWQtdGVhbTEnPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3doby1zY29yZWQtdGVhbTInPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvc3NQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zc1wiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEJhbGwgUG9zc2Vzc2lvbiA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hvdHNPblByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09uXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb24gR29hbHMgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaG90c09mZlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LW5hbWVcIj4gU2hvdHMgb2ZmIEdvYWxzIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm91bHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1uYW1lXCI+IEZvdWxzIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInljUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInljXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbmFtZVwiPiBZZWxsb3cgQ2FyZHMgPC9kaXY+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICBcbiAgICAgICAgY29uc3QgdGVhbTFQbGF5ZXJzU3RhdCA9IE9iamVjdC52YWx1ZXMoRml4dHVyZVBsYXllcnNTdGF0WzBdLnBsYXllcnMpO1xuICAgICAgICBjb25zdCB0ZWFtMlBsYXllcnNTdGF0ID0gT2JqZWN0LnZhbHVlcyhGaXh0dXJlUGxheWVyc1N0YXRbMV0ucGxheWVycyk7XG4gICAgICAgXG4gICAgICAgIGNvbnN0IHRlYW0xU2NvcmVkUGxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoby1zY29yZWQtdGVhbTFcIik7XG4gICAgICAgIGNvbnN0IHRlYW0yU2NvcmVkUGxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoby1zY29yZWQtdGVhbTJcIik7XG5cbiAgICAgICAgdGVhbTFQbGF5ZXJzU3RhdC5mb3JFYWNoKHBsYXllcj0+e1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyKVxuICAgICAgICAgICAgaWYgKHBsYXllci5zdGF0aXN0aWNzWzBdLmdvYWxzLnRvdGFsICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5zdGF0aXN0aWNzWzBdLmdvYWxzLnRvdGFsOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYzFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgc2MxRGl2LmNsYXNzTGlzdC5hZGQoJ2dvYWwtc2NvcmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHNjMURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3BsYXllci5wbGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICB0ZWFtMVNjb3JlZFBsRGl2LmFwcGVuZENoaWxkKHNjMURpdilcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0ZWFtMlBsYXllcnNTdGF0LmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHBsYXllci5zdGF0aXN0aWNzWzBdLmdvYWxzLnRvdGFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyLnBsYXllci5uYW1lLCBwbGF5ZXIuc3RhdGlzdGljc1swXS5nb2Fscy50b3RhbClcbiAgICAgICAgICAgICAgICAvLyBwbGF5ZXIuc3RhdGlzdGljc1swXS5nb2Fscy50b3RhbFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnN0YXRpc3RpY3NbMF0uZ29hbHMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYzJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgc2MyRGl2LmNsYXNzTGlzdC5hZGQoJ2dvYWwtc2NvcmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHNjMkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3BsYXllci5wbGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICB0ZWFtMlNjb3JlZFBsRGl2LmFwcGVuZENoaWxkKHNjMkRpdilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVuZGVyU3RhdHMgPSAoc3RhdDEsIHRvdGFsLCBpZE5hbWUpID0+IHtcbiAgICAgICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWROYW1lKTtcbiAgICAgICAgICAgIGlmIChpZE5hbWUgPT09ICdwb3NzJyl7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHN0YXQxO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHJhdGlvID0gKHN0YXQxIC8gdG90YWwgKSAqMTAwO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSByYXRpbyArIFwiJVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlclN0YXRzKHBvc3Nlc3Npb25bMF0udmFsdWUsIDAsIFwicG9zc1wiKTtcbiAgICAgICAgcmVuZGVyU3RhdHMoc2hvdHNPblswXS52YWx1ZSwgc2hvdHNPblswXS52YWx1ZSArIHNob3RzT25bMV0udmFsdWUsIFwic2hvdHNPblwiKTtcbiAgICAgICAgcmVuZGVyU3RhdHMoc2hvdHNPZmZbMF0udmFsdWUsIHNob3RzT2ZmWzBdLnZhbHVlICsgc2hvdHNPZmZbMV0udmFsdWUsIFwic2hvdHNPZmZcIik7XG4gICAgICAgIHJlbmRlclN0YXRzKGZvdWxzWzBdLnZhbHVlLCBmb3Vsc1swXS52YWx1ZSArIGZvdWxzWzFdLnZhbHVlLCBcImZvdWxzXCIpO1xuICAgICAgICByZW5kZXJTdGF0cyh5Y1swXS52YWx1ZSwgeWNbMF0udmFsdWUgKyB5Y1sxXS52YWx1ZSwgXCJ5Y1wiKTtcbiAgICAgIFxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVTdGF0OyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgZ2V0Rml4dHVyZVBsYXllcnNTdGF0ID0gKGZpeHR1cmVJZCkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoYC4vZml4dHVyZV9wbGF5ZXJzX3N0YXQ/Zml4dHVyZUlkPSR7Zml4dHVyZUlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSGkgZnJvbSBmaXh0dXJlIHBsYXllcnMgc3RhdCEnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXNwb25zZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbmQnKTtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhLnJlc3BvbnNlO1xuXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rml4dHVyZVBsYXllcnNTdGF0OyIsImNvbnN0IG9wZW5JbnN0cnVjdGlvbnNNb2RhbCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2LWZvci1tb2RhbCcpO1xuICAgIGNvbnN0IGluc3RyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9ucy1saW5rJyk7XG4gICAgLy8gY29uc29sZS5sb2coaW5zdHJCdG4sIG5hdkRpdik7XG4gICAgXG4gICAgXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbERpdi5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8ZGl2IGlkPVwibXlNb2RhbEluc3RcIiBjbGFzcz1cIm1vZGFsSW5zdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZUludFwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgaWQ9J21vZGFsLWJveC1pbnN0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhYm91dC10aXRsZSc+QUJPVVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhYm91dCc+XG4gICAgICAgICAgICAgICAgICAgIDkwUGx1cyBpcyBhIHNvY2NlciBzY29yZSBhcHAgZm9yIHRoZSBFbmdsaXNoIFByZW1pZXIgTGVhZ3VlLiBUaGlzIGFwcCBicmluZ3MgeW91IHRoZSBmaXh0dXJlcyB3aXRoIGxpdmUgdXBkYXRlcywgZ2FtZSBzdGF0cywgZ2FtZSB3aW5uZXIgdm90aW5nIG9wdGlvbnMgYW5kIG1vcmUuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnN0LXRpdGxlJz5JTlNUUlVDVElPTlM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnN0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNVUlJFTlQgbWF0Y2hkYXkgZ2FtZXMgYXJlIGRpc3BsYXllZCBvbiB0aGUgbWFpbiBwYWdlIChleC4gQUxMIEdBTUVTIC0gUk9VTkQgMTcpLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk9MREVSIGdhbWUgaW5mbyBjb3VsZCBiZSBhY2Nlc3NlZCBmcm9tIHRoZSB0b3AgbmF2aWdhdGlvbiBiYXIgd2hlbiBjbGlja2luZyBvbiBwaW5rIGJ1dHRvbiAoZXguIDxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gR08gVE8gUk9VTkQgMTY8L3NwYW4+KTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2ltaWxhcmx5LCBGVVRVUkUgZ2FtZSBpbmZvIGNvdWxkIGJlIGFjY2Vzc2VkIGZyb20gdGhlIHRvcCBuYXZpZ2F0aW9uIGJhciAoZXguIDxzcGFuPkdPIFRPIFJPVU5EIDE4IDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9zcGFuPikuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaGUgdXNlciBjYW4gY2xpY2sgb24gTElWRSBvciBGSU5JU0hFRCBmaXh0dXJlcyB0byBzZWUgZGV0YWlsZWQgc3RhdGlzdGljcy4gQSBwbGF5ZXLigJlzIHN0YXRzIGFyZSBhdmFpbGFibGUgd2hlbiBob3ZlcmluZyBvdmVyIGFueSBwbGF5ZXIgb24gdGhlIHBpdGNoLiBUcnkgaXQhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaGUgdXNlciBjYW4gdm90ZSBmb3IgdGhlIGdhbWUgV0lOTkVSIGJ5IGNsaWNraW5nIG9uIHRoZSBWT1RFIGJ1dHRvbi4gVGhpcyBmZWF0dXJlIGlzIGF2YWlsYWJsZSBvbmx5IGZvciBmdXR1cmUgZ2FtZXMuPC9saT4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGl2ZSB1cGRhdGVzIGNhbiBiZSBtYW51YWxseSB0dXJuZWQgb24gYnkgc2VsZWN0aW5nIDxzcGFuPkFDVElWQVRFIExJVkUgVVBEQVRFUzwvc3Bhbj4uIFdoZW4gc2VsZWN0ZWQsIHRoZSBwYWdlIHdpbGwgcmVmcmVzaCAzIHRpbWVzIGV2ZXJ5IDEwIHNlY29uZHMgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMuIExpdmUgdXBkYXRlcyBjYW4gYmUgdHVybmVkIG9mZiBieSBzZWxlY3RpbmcgPHNwYW4+U1RPUCBMSVZFIFVQREFURVM8L3NwYW4+LjwvbGk+ICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDx1bD4gICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2J1aWx0LWJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgQnVpbHQgYnkgPGEgaHJlZj0naHR0cHM6Ly9uaWtvbGF5c2hhdGFsb3YuY29tLycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyB0YXJnZXQ9XCJfYmxhbmtcIj5OaWtvbGF5IFNoYXRhbG92PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobW9kYWxEaXYpO1xuICAgIFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteU1vZGFsSW5zdFwiKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlSW50XCIpWzBdO1xuXG4gICAgaW5zdHJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBcblxuICAgIH0pXG5cbiAgICBzcGFuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5JbnN0cnVjdGlvbnNNb2RhbDsiLCJpbXBvcnQgcmVuZGVyUGxheWVyU3RhdCBmcm9tICcuL3JlbmRlclBsYXllclN0YXQnO1xuXG5jb25zdCByZW5kZXJQbGF5ZXJNb2RhbCA9IChzcXVhZHNEaXYsIEZpeHR1cmVQbGF5ZXJzU3RhdCwgZml4dHVyZUlkKSA9PiB7XG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbERpdi5pbm5lckhUTUwgPVxuICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwibXlNb2RhbFwiIGNsYXNzPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtb2RhbC1ib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgU29tZSB0ZXh0IGdvZXMgaGVyZSAuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgc3F1YWRzRGl2LmFwcGVuZENoaWxkKG1vZGFsRGl2KTtcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteU1vZGFsXCIpO1xuICAgIGNvbnN0IHBsYXllcnNUb0NsaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbC1zZWxlY3RcIik7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuICAgIHBsYXllcnNUb0NsaWNrLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY29uc3QgcGxheWVySWQgPSBwbGF5ZXIuZ2V0QXR0cmlidXRlKCdwbGF5ZXJJZCcpO1xuICAgICAgICAgICAgY29uc3QgdGVhbUlkID0gcGxheWVyLmdldEF0dHJpYnV0ZSgndGVhbUlkJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllcklkbSA9IHBhcnNlSW50KHBsYXllcklkKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1JZG0gPSBwYXJzZUludCh0ZWFtSWQpO1xuICAgICAgICAgICAgcmVuZGVyUGxheWVyU3RhdChwbGF5ZXJJZG0sIHRlYW1JZG0sIGZpeHR1cmVJZCwgRml4dHVyZVBsYXllcnNTdGF0KTtcbiAgICAgICAgfSk7XG5cbiAgICB9KVxuXG4gICAgc3Bhbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQbGF5ZXJNb2RhbDsiLCJcbmNvbnN0IHJlbmRlclBsYXllclN0YXQgPSAocGxheWVySWRtLCB0ZWFtSWRtLCBmaXh0dXJlSWRtLCBGaXh0dXJlUGxheWVyc1N0YXRtKSA9PiB7XG5cbiAgICBsZXQgdGVhbUluZm8gPSB7fTtcbiAgICBsZXQgcGxheWVySW5mbz17fTtcbiAgICBsZXQgcGxheWVyU3RhdCA9IHt9O1xuXG4gICAgRml4dHVyZVBsYXllcnNTdGF0bS5mb3JFYWNoKChzcXVhZCk9PntcblxuICAgICAgICBpZiAoc3F1YWQudGVhbS5pZCA9PT0gdGVhbUlkbSkge1xuICAgICAgICAgICAgdGVhbUluZm8gPSBzcXVhZDtcbiAgICAgICAgICAgIHNxdWFkLnBsYXllcnMuZm9yRWFjaCgocGxheWVyLCBpZHgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5wbGF5ZXIuaWQgPT09IHBsYXllcklkbSl7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckluZm8gPSBwbGF5ZXIucGxheWVyO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTdGF0ID0gcGxheWVyLnN0YXRpc3RpY3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICB9KVxuXG5cbiAgICBjb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYm94XCIpO1xuXG4gICAgY29uc3QgcmlnaHRCb3hEYXRhID0gKHBsYXllclN0YXQuZ2FtZXMucG9zaXRpb24gPT09ICdHJykgP1xuICAgICAgICBgPGRpdiBjbGFzcz0nc2F2ZXMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+U2F2ZXM6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nb2Fscy5zYXZlcyA/IHBsYXllclN0YXQuZ29hbHMuc2F2ZXMgOiAwfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nY29uY2VkZWQtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+R29hbHMgY29uY2VkZWQ6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nb2Fscy5jb25jZWRlZCA/IHBsYXllclN0YXQuZ29hbHMuY29uY2VkZWQgOiAwfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCBcbiAgICA6IFxuICAgICAgICBgPGRpdiBjbGFzcz0nZHVlbHMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+RHVlbHMgV29uL1RvdGFsOiA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZHVlbHMud29uID8gcGxheWVyU3RhdC5kdWVscy53b24gOiAwfSAvICR7cGxheWVyU3RhdC5kdWVscy50b3RhbCA/IHBsYXllclN0YXQuZHVlbHMudG90YWwgOiAwfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ncGFzc2VzLWJveCByb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlBhc3NlcyhBY2N1cmFjeSUpOiA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQucGFzc2VzLnRvdGFsID8gcGxheWVyU3RhdC5wYXNzZXMudG90YWwgOiAwfSAoJHtwbGF5ZXJTdGF0LnBhc3Nlcy5hY2N1cmFjeSA/IHBsYXllclN0YXQucGFzc2VzLmFjY3VyYWN5IDogMH0lKTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2hvdHMtYm94IHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+U2hvdHM6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5zaG90cy50b3RhbCA/IHBsYXllclN0YXQuc2hvdHMudG90YWwgOiAwfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9J2dvYWxzLWJveCByb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPkdvYWxzOiA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZ29hbHMudG90YWwgPyBwbGF5ZXJTdGF0LmdvYWxzLnRvdGFsIDogMH0gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgIFxuICAgIDtcblxuICAgIG1vZGFsQm94LmlubmVySFRNTCA9XG4gICAgICAgIGAgICA8ZGl2IGNsYXNzPSdsZWZ0LWJveCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncGwtaW1nLWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwbGF5ZXJJbmZvLnBob3RvfVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwbC1uYW1lJz4ke3BsYXllckluZm8ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwb3NpdGlvbi1udW1iZXItYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPk51bWJlcjogJHtwbGF5ZXJTdGF0LmdhbWVzLm51bWJlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQtYm94Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwb3NpdGlvbi1ib3ggcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlBvc2l0aW9uOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmFsdWUnPiR7cGxheWVyU3RhdC5nYW1lcy5wb3NpdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdyYXRpbmctYm94IHJvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz5SYXRpbmc6IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2YWx1ZSc+JHtwbGF5ZXJTdGF0LmdhbWVzLnJhdGluZyA/IHBsYXllclN0YXQuZ2FtZXMucmF0aW5nIDogMH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtaW51dGVzLWJveCByb3cnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+TWludXRlczogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZhbHVlJz4ke3BsYXllclN0YXQuZ2FtZXMubWludXRlcyA/IHBsYXllclN0YXQuZ2FtZXMubWludXRlcyA6IDB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAke3JpZ2h0Qm94RGF0YX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyU3RhdDsiLCJpbXBvcnQgcmVuZGVyVm90aW5nU3RhdCBmcm9tICcuL3JlbmRlclZvdGluZ1N0YXQnO1xuXG5jb25zdCByZW5kZXJWb3RpbmdNb2RhbCA9IChhbGxHYW1lc0JveERpdiwgdDFyZWYsIHQycmVmKSA9PiB7XG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbERpdi5pbm5lckhUTUwgPVxuICAgICAgICBgXG4gICAgICAgIDxkaXYgaWQ9XCJteVZvdGluZ01vZGFsXCIgY2xhc3M9XCJtb2RhbC12XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS12XCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtb2RhbC12LWJveCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICBhbGxHYW1lc0JveERpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICBjb25zdCBtb2RhbFYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Vm90aW5nTW9kYWxcIik7XG4gICAgY29uc3Qgc3BhblYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtdlwiKVswXTtcbiAgICBjb25zdCB2b3RpbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52b3RpbmctYnRuXCIpO1xuICAgIFxuICAgIHZvdGluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHVzZXIgYW5vbnltb3VzIGF1dGggbG9naW5cbiAgICAgICAgICAgIGF1dGguc2lnbkluQW5vbnltb3VzbHkoKTtcbiAgICAgICAgICAgIG1vZGFsVi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0hJIEZST00gVk9USU5HIE1PREFMJylcbiAgICAgICAgICAgIGNvbnN0IG5hbWUxID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgbmFtZTIgPSBidG4uZ2V0QXR0cmlidXRlKCd0ZWFtMi1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBsb2dvMSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ3RlYW0xLWxvZ28nKTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ28yID0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTItbG9nbycpO1xuICAgICAgICAgICAgY29uc3QgZ0lkID0gYnRuLmdldEF0dHJpYnV0ZSgnZ2FtZUlkJyk7XG5cbiAgICAgICAgICAgIGlmICh0MXJlZiA9PT0gYnRuLmdldEF0dHJpYnV0ZSgndGVhbTEtbmFtZScpKXtcbiAgICAgICAgICAgICAgICByZW5kZXJWb3RpbmdTdGF0KG5hbWUxLCBuYW1lMiwgbG9nbzEsIGxvZ28yLCBnSWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICBzcGFuVi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAvLyB1c2VyIGFub255bW91cyBhdXRoIGxvZ2luXG4gICAgICAgIGF1dGguc2lnbk91dCgpO1xuICAgICAgICBtb2RhbFYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWxWKSB7XG4gICAgICAgICAgICAvLyB1c2VyIGFub255bW91cyBhdXRoIGxvZ2luXG4gICAgICAgICAgICBhdXRoLnNpZ25PdXQoKTtcbiAgICAgICAgICAgIG1vZGFsVi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclZvdGluZ01vZGFsOyIsImltcG9ydCBkcmF3UGllIGZyb20gJy4vZHJhd1BpZSc7XG5cbmNvbnN0IHJlbmRlclZvdGluZ1N0YXQgPSAobmFtZTEsIG5hbWUyLCBsb2dvMSwgbG9nbzIsIGdhbWVJZCkgPT4ge1xuXG4gICAgY29uc3QgbW9kYWxWQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC12LWJveFwiKTtcbiAgICBtb2RhbFZCb3guaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtcy1yb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnRuLWJveCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ndm90ZU51bTEnIG5hbWU9J25hbWUxJz4ke25hbWUxfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZXNzYWdlJz4gV2hvIHdpbGwgd2luPyA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2J0bi1ib3gnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J3ZvdGVOdW0yJyBuYW1lPSduYW1lMic+JHtuYW1lMn08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0ndm90aW5nLWJveCc+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IHZvdGVEYXRhMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm90ZU51bTFcIik7XG4gICAgY29uc3Qgdm90ZURhdGEyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlTnVtMlwiKTtcblxuICAgIHZvdGVEYXRhMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBnZXREYXRhKDEsIDEsIHBhcnNlSW50KGdhbWVJZCkpXG4gICAgfSlcblxuICAgIHZvdGVEYXRhMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGdldERhdGEoMSwgMiwgcGFyc2VJbnQoZ2FtZUlkKSlcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGFkZERhdGEgPSAoZGF0YSwgdm90ZTEsIHZvdGUyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdobyBmcm9tIGFkZERhdGEgZnVuY3Rpb24nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3dpbm5lci12b3RlcycpLmFkZChkYXRhKTtcbiAgICAgICAgcmVuZGVyVm90ZXModm90ZTEsIHZvdGUyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJWb3RlcyA9ICh2b3RlMSwgdm90ZTIpPT57XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZvdGUxLCB2b3RlMilcbiAgICAgICAgY29uc3Qgdm90aW5nQm94RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RpbmctYm94XCIpO1xuXG4gICAgICAgIHZvdGluZ0JveERpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndm90aW5nLXJvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndm90ZXMxIHZvdGUnPiR7KHZvdGUxIC8gKHZvdGUxICsgdm90ZTIpICogMTAwKS50b0ZpeGVkKDEpfSU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2b3RlczIgdm90ZSc+JHsodm90ZTIgLyAodm90ZTEgKyB2b3RlMikgKiAxMDApLnRvRml4ZWQoMSl9JTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdwaWUtYm94Jz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgYDtcbiAgICAgICAgZHJhd1BpZSh2b3RlMSwgdm90ZTIpXG4gICAgfVxuICAgXG5cbiAgICBjb25zdCB1cGRhdGVEYXRhID0gKGRhdGEsIGtleUlkLCB2b3RlMSwgdm90ZTIpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3dpbm5lci12b3RlcycpLmRvYyhrZXlJZCkudXBkYXRlKGRhdGEpO1xuICAgICAgICByZW5kZXJWb3Rlcyh2b3RlMSwgdm90ZTIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGEgPSAodmFsLCBudW0sIGdhbWVJZCkgPT4ge1xuICAgICAgICBkYi5jb2xsZWN0aW9uKCd3aW5uZXItdm90ZXMnKS5nZXQoKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzLmRvY3MuZm9yRWFjaChkb2M9PntcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2MuZGF0YSgpLCBkb2MuaWQpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Z2FtZUlkfWApO1xuICAgICAgICAgICAgICAgIC8vIERBVEEgSVMgRVhJU1RJTkcgSU4gREFUQUJBU0UuIENBTEwgVVBEQVRFXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoT2JqZWN0LmtleXMoZG9jLmRhdGEoKSlbMF0pID09PSBnYW1lSWQpe1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5SWQgPSBkb2MuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2b3RlcyA9IChkb2MuZGF0YSgpW2dhbWVJZF0pXG4gICAgICAgICAgICAgICAgICAgIGxldCB2b3RlMT0wO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdm90ZTI9MDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB2b3RlIGluIHZvdGVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b3RlID09PSAndGVhbTEnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3RlMSA9IHZvdGVzW3ZvdGVdXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3RlMiA9IHZvdGVzW3ZvdGVdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Vm90ZTEgPSB2b3RlMSArIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyBbZ2FtZUlkXTogeyB0ZWFtMTogbmV3Vm90ZTEsIHRlYW0yOiB2b3RlMn0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YShuZXdEYXRhLCBrZXlJZCwgbmV3Vm90ZTEsIHZvdGUyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZD10cnVlO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdWb3RlMiA9IHZvdGUyICsgdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IFtnYW1lSWRdOiB7IHRlYW0xOiB2b3RlMSwgdGVhbTI6IG5ld1ZvdGUyIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YShuZXdEYXRhLCBrZXlJZCwgdm90ZTEsIG5ld1ZvdGUyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIERBVEEgSVMgTkVXLiBDQUxMIEFERCBGVU5DVElPTlxuICAgICAgICAgICAgaWYgKHVwZGF0ZWQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGxldCB2b3RlMSA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHZvdGUyID0gMDtcbiAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdWb3RlMSA9IHZvdGUxICsgdmFsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgW2dhbWVJZF06IHsgdGVhbTE6IG5ld1ZvdGUxLCB0ZWFtMjogdm90ZTIgfSB9XG4gICAgICAgICAgICAgICAgICAgIGFkZERhdGEobmV3RGF0YSwgbmV3Vm90ZTEsIHZvdGUyKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdWb3RlMiA9IHZvdGUyICsgdmFsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgW2dhbWVJZF06IHsgdGVhbTE6IHZvdGUxLCB0ZWFtMjogbmV3Vm90ZTIgfSB9XG4gICAgICAgICAgICAgICAgICAgIGFkZERhdGEobmV3RGF0YSwgdm90ZTEsIG5ld1ZvdGUyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSk7XG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJWb3RpbmdTdGF0OyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVuZGVyU3RhbmRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBzdGFuZGluZ3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YW5kaW5nc1wiKTtcbiAgY29uc3Qgc3RhbmRpbmdCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFuZGluZ0JveERpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1zdGFuZGluZy1ib3hcIik7XG4gIHN0YW5kaW5nc0Rpdi5hcHBlbmQoc3RhbmRpbmdCb3hEaXYpO1xuXG4gIGF4aW9zXG4gICAgLmdldChcIi4vc3RhbmRpbmdzXCIpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCIgLSAtIC0gLSAtIC1cIiwgcmVzKTtcbiAgICAgIGlmIChyZXMuZGF0YS5yZXNwb25zZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgdGVhbXNBcnIgPSByZXMuZGF0YS5yZXNwb25zZVswXS5sZWFndWUuc3RhbmRpbmdzWzBdO1xuICAgICAgICB0ZWFtc0Fyci5mb3JFYWNoKCh0ZWFtLCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB0ZWFtUmFua0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgdGVhbU5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IHRlYW1Qb2ludHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IHRlYW1HYW1lc0NvdW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB0ZWFtUmFua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgZGF0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgICB0ZWFtTmFtZURpdi5pbm5lclRleHQgPSB0ZWFtLnRlYW0ubmFtZTtcbiAgICAgICAgICB0ZWFtUG9pbnRzRGl2LmlubmVyVGV4dCA9IHRlYW0ucG9pbnRzO1xuICAgICAgICAgIHRlYW1HYW1lc0NvdW50RGl2LmlubmVyVGV4dCA9IHRlYW0uYWxsLnBsYXllZDtcbiAgICAgICAgICB0ZWFtUmFua0Rpdi5pbm5lclRleHQgPSB0ZWFtLnJhbms7XG5cbiAgICAgICAgICB0ZWFtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXN0YW5kaW5nLXJvd1wiKTtcbiAgICAgICAgICB0ZWFtUmFua0JveERpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1yYW5rLWJveFwiKTtcbiAgICAgICAgICB0ZWFtUmFua0Rpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1yYW5rXCIpO1xuICAgICAgICAgIHRlYW1HYW1lc0NvdW50RGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZWQtZ2FtZXNcIik7XG4gICAgICAgICAgdGVhbVBvaW50c0Rpdi5jbGFzc0xpc3QuYWRkKFwidGVhbS1wb2ludHNcIik7XG4gICAgICAgICAgZGF0YURpdi5jbGFzc0xpc3QuYWRkKFwiZGF0YS1kaXZcIik7XG5cbiAgICAgICAgICB0ZWFtUmFua0JveERpdi5hcHBlbmQodGVhbVJhbmtEaXYsIHRlYW1OYW1lRGl2KTtcbiAgICAgICAgICBkYXRhRGl2LmFwcGVuZCh0ZWFtR2FtZXNDb3VudERpdiwgdGVhbVBvaW50c0Rpdik7XG4gICAgICAgICAgdGVhbURpdi5hcHBlbmQodGVhbVJhbmtCb3hEaXYsIGRhdGFEaXYpO1xuICAgICAgICAgIHN0YW5kaW5nQm94RGl2LmFwcGVuZCh0ZWFtRGl2KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbXB0eVJlc3BvbnNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZW1wdHlSZXNwb25zZURpdi5pbm5lclRleHQgPVxuICAgICAgICAgIFwiU3RhbmRpbmdzIGRhdGEgaXMgbm90IGF2YWlsYWJsZSBhdCB0aGlzIHRpbWUuLi5cIjtcbiAgICAgICAgZW1wdHlSZXNwb25zZURpdi5jbGFzc0xpc3QuYWRkKFwiZW1wdHktcmVzcG9uc2VcIik7XG4gICAgICAgIHN0YW5kaW5nQm94RGl2LmFwcGVuZChlbXB0eVJlc3BvbnNlRGl2KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU3RhbmRpbmdzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
