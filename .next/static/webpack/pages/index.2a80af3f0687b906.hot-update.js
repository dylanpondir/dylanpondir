"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app/Layout.tsx":
/*!***********************************!*\
  !*** ./components/app/Layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nvar PONDIR_LINK = {\n    href: \"https://www.pondir.com\",\n    label: \"Pondir\",\n    description: \"The ultimate toolkit for advertisers\"\n};\nfunction Layout(param) {\n    var children = param.children;\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useScroll)().scrollYProgress;\n    var scaleX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useSpring)(scrollYProgress, {\n        stiffness: 100,\n        damping: 30,\n        restDelta: 0.001\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-black font-sans mx-auto w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-screen w-full p-0 fixed\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/components/app/Layout.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                        className: \"fixed top-0 left-0 right-0 h-2 bg-saffron\",\n                        style: {\n                            scaleX: scaleX\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/components/app/Layout.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                        initial: \"offscreen\",\n                        whileInView: \"onscreen\",\n                        viewport: {\n                            once: true,\n                            amount: 0.8\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/components/app/Layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanpondir/Code/dylanpondir/components/app/Layout.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            \"?\"\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"UYAOtHxiUth0DU6Git6zGRnUBB4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_1__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_1__.useSpring\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcC9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDNkQ7QUFFN0QsSUFBTUcsV0FBVyxHQUFHO0lBQ2xCQyxJQUFJLEVBQUUsd0JBQXdCO0lBQzlCQyxLQUFLLEVBQUUsUUFBUTtJQUNmQyxXQUFXLEVBQUUsc0NBQXNDO0NBQ3BEO0FBRWMsU0FBU0MsTUFBTSxDQUFDLEtBQTJDLEVBQUU7UUFBN0MsUUFBVSxHQUFWLEtBQTJDLENBQXpDQyxRQUFROztJQUN2QyxJQUFNLGVBQWlCLEdBQUtQLHdEQUFTLEVBQUUsQ0FBL0JRLGVBQWU7SUFDdkIsSUFBTUMsTUFBTSxHQUFHUix3REFBUyxDQUFDTyxlQUFlLEVBQUU7UUFDeENFLFNBQVMsRUFBRSxHQUFHO1FBQ2RDLE9BQU8sRUFBRSxFQUFFO1FBQ1hDLFNBQVMsRUFBRSxLQUFLO0tBQ2pCLENBQUM7SUFFRixxQkFDRTs7MEJBQ0UsOERBQUNDLE1BQUk7Z0JBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7O2tDQUNqRCw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLDRCQUE0Qjs7Ozs7NEJBQUc7a0NBRTlDLDhEQUFDZixxREFBVTt3QkFDVGUsU0FBUyxFQUFDLDJDQUEyQzt3QkFDckRFLEtBQUssRUFBRTs0QkFBRVAsTUFBTSxFQUFOQSxNQUFNO3lCQUFFOzs7Ozs0QkFDakI7a0NBQ0YsOERBQUNWLHFEQUFVO3dCQUNUa0IsT0FBTyxFQUFDLFdBQVc7d0JBQ25CQyxXQUFXLEVBQUMsVUFBVTt3QkFDdEJDLFFBQVEsRUFBRTs0QkFBRUMsSUFBSSxFQUFFLElBQUk7NEJBQUVDLE1BQU0sRUFBRSxHQUFHO3lCQUFFO2tDQUVwQ2QsUUFBUTs7Ozs7NEJBQ0U7Ozs7OztvQkFDUjtZQUFBLEdBRVQ7O29CQUFHLENBQ0g7Q0FDSDtHQTVCdUJELE1BQU07O1FBQ0FOLG9EQUFTO1FBQ3RCQyxvREFBUzs7O0FBRkZLLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAvTGF5b3V0LnRzeD8wOTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VTcHJpbmcgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgUE9ORElSX0xJTksgPSB7XG4gIGhyZWY6ICdodHRwczovL3d3dy5wb25kaXIuY29tJyxcbiAgbGFiZWw6ICdQb25kaXInLFxuICBkZXNjcmlwdGlvbjogJ1RoZSB1bHRpbWF0ZSB0b29sa2l0IGZvciBhZHZlcnRpc2VycycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKCk7XG4gIGNvbnN0IHNjYWxlWCA9IHVzZVNwcmluZyhzY3JvbGxZUHJvZ3Jlc3MsIHtcbiAgICBzdGlmZm5lc3M6IDEwMCxcbiAgICBkYW1waW5nOiAzMCxcbiAgICByZXN0RGVsdGE6IDAuMDAxLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2JnLWJsYWNrIGZvbnQtc2FucyBteC1hdXRvIHctZnVsbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgaC1zY3JlZW4gdy1mdWxsIHAtMCBmaXhlZCcgLz5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgaC0yIGJnLXNhZmZyb24nXG4gICAgICAgICAgc3R5bGU9e3sgc2NhbGVYIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD0nb2Zmc2NyZWVuJ1xuICAgICAgICAgIHdoaWxlSW5WaWV3PSdvbnNjcmVlbidcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuOCB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA/XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlU3ByaW5nIiwiUE9ORElSX0xJTksiLCJocmVmIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsIkxheW91dCIsImNoaWxkcmVuIiwic2Nyb2xsWVByb2dyZXNzIiwic2NhbGVYIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInJlc3REZWx0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/app/Layout.tsx\n"));

/***/ })

});