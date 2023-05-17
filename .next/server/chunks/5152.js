exports.id = 5152;
exports.ids = [5152];
exports.modules = {

/***/ 4564:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = NoSSR;
exports.suspense = suspense;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
var _noSsrError = __webpack_require__(7342);
function NoSSR({ children  }) {
    if (true) {
        suspense();
    }
    return children;
}
function suspense() {
    const error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 7645:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = dynamic;
exports.noSSR = noSSR;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(6689));
var _loadable = _interop_require_default(__webpack_require__(5832));
var _dynamicNoSsr = _interop_require_default(__webpack_require__(4564));
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadable.default;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: ({ error , isLoading , pastDelay  })=>{
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === "object") {
        loadableOptions = _extends({}, loadableOptions, dynamicOptions);
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = _extends({}, loadableOptions, options);
    const loaderFn = loadableOptions.loader;
    const loader = ()=>loaderFn().then(convertModule);
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = _extends({}, loadableOptions, loadableOptions.loadableGenerated, {
            loader
        });
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).
    if (typeof loadableOptions.ssr === "boolean") {
        if (!loadableOptions.ssr) {
            delete loadableOptions.ssr;
            return noSSR(loader, loadableOptions);
        }
        delete loadableOptions.ssr;
    }
    return loadableFn(loadableOptions);
}
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    return {
        default: mod.default || mod
    };
}
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    const NoSSRComponent = /*#__PURE__*/ (0, _react).lazy(LoadableInitializer);
    const Loading = loadableOptions.loading;
    const fallback = /*#__PURE__*/ _react.default.createElement(Loading, {
        error: null,
        isLoading: true,
        pastDelay: false,
        timedOut: false
    });
    return (props)=>/*#__PURE__*/ _react.default.createElement(_react.Suspense, {
            fallback: fallback
        }, /*#__PURE__*/ _react.default.createElement(_dynamicNoSsr.default, null, /*#__PURE__*/ _react.default.createElement(NoSSRComponent, Object.assign({}, props))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dynamic.js.map


/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7645)


/***/ })

};
;