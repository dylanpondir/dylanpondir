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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Journey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Journey */ \"./components/Journey.tsx\");\n/* harmony import */ var _components_app_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app/Layout */ \"./components/app/Layout.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_app_AnimatedSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/app/AnimatedSection */ \"./components/app/AnimatedSection.tsx\");\n/* harmony import */ var _components_app_AnimatedParent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/app/AnimatedParent */ \"./components/app/AnimatedParent.tsx\");\n/* harmony import */ var _components_app_AnimatedChild__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/app/AnimatedChild */ \"./components/app/AnimatedChild.tsx\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ActionButtons = {\n    SOCIALS: {\n        label: \"Socials\",\n        icon: null\n    },\n    ABOUT: {\n        label: \"About\",\n        icon: null\n    },\n    CONTACT: {\n        label: \"Contact\",\n        icon: null\n    },\n    RANDOM: {\n        label: \"Random\",\n        icon: null\n    }\n};\nfunction getActiveComponent(activeComponent) {\n    switch(activeComponent){\n        case ActionButtons.ABOUT.label:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Journey__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 14\n            }, this);\n        case ActionButtons.CONTACT.label:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Contact\"\n            }, void 0, false);\n        case ActionButtons.RANDOM.label:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Random\"\n            }, void 0, false);\n        default:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }\n}\nfunction Home() {\n    _s();\n    var section_one_ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var scrollProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useScroll)({\n        container: section_one_ref\n    }).scrollProgress;\n    var yPosAnim = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollYProgress, [\n        0,\n        0.2,\n        0.3\n    ], [\n        0,\n        75,\n        100\n    ]);\n    var yHeaderPosAnim = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollYProgress, [\n        0,\n        0.2,\n        0.3\n    ], [\n        0,\n        50,\n        100\n    ]);\n    var yPosOpacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollYProgress, [\n        0,\n        0.2,\n        0.3\n    ], [\n        1,\n        0.6,\n        0\n    ]);\n    var yPosScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollYProgress, [\n        0,\n        0.2,\n        0.3\n    ], [\n        1,\n        0,\n        0\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dylan Pondir - Advertiser, Developer, and Entrepreneur\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Who is Dylan Pondir?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ref: section_one_ref,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    className: \"fixed\",\n                                    style: {\n                                        opacity: yPosOpacity,\n                                        rotateY: yHeaderPosAnim,\n                                        scale: yPosScale\n                                    },\n                                    transition: {\n                                        type: \"spring\",\n                                        stiffness: 100\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedParent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedChild__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                classNames: \"mb-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-white text-5xl md:text-7xl\",\n                                                    children: \"Dylan Pondir\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedChild__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-xl md:text-2xl font-thin text-white\",\n                                                    children: [\n                                                        \"Entrepreneur,\",\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-saffron\",\n                                                            children: \"Advertiser\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        \", and Developer\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    style: {\n                                        rotateY: yPosAnim,\n                                        opacity: yPosOpacity\n                                    },\n                                    className: \"flex w-full fixed bottom-8 justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold text-gray-200\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_9__.ArrowDownIcon, {\n                                            className: \"animate-pulse\",\n                                            color: \"saffron\",\n                                            width: 25\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedParent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedChild__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-thin text-white\",\n                                        children: \"Entrepreneur, Advertiser, and Developer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"cTFP2M5bOAtu+0PRPGhZ2M3CAU0=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztvQkFDUixDQUNIO0NBQ0g7R0EzRXVCbEIsSUFBSTs7UUFHQ2Ysb0RBQVM7UUFHbkJDLHVEQUFZO1FBQ05BLHVEQUFZO1FBS2ZBLHVEQUFZO1FBQ2RBLHVEQUFZOzs7QUFiUmMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSm91cm5leSBmcm9tICcuLi9jb21wb25lbnRzL0pvdXJuZXknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2FwcC9MYXlvdXQnO1xuaW1wb3J0IGR5bGFuUGljIGZyb20gJy4uL3B1YmxpYy9EeWxhblBvbmRpci5qcGcnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVNwcmluZywgdXNlVHJhbnNmb3JtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQge1xuICBJdGVtQW5pbWF0aW9uLFxuICBMaXN0QW5pbWF0aW9uLFxuICBDaGlsZEFuaW1hdGlvbixcbn0gZnJvbSAnLi4vbGliL2FuaW1hdGlvbnMnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9hcHAvQW5pbWF0ZWRTZWN0aW9uJztcbmltcG9ydCBBbmltYXRlZFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9hcHAvQW5pbWF0ZWRTZWN0aW9uJztcbmltcG9ydCBBbmltYXRlZFBhcmVudCBmcm9tICcuLi9jb21wb25lbnRzL2FwcC9BbmltYXRlZFBhcmVudCc7XG5pbXBvcnQgQW5pbWF0ZWRDaGlsZCBmcm9tICcuLi9jb21wb25lbnRzL2FwcC9BbmltYXRlZENoaWxkJztcbmltcG9ydCB7XG4gIEFycm93RG93bkNpcmNsZUljb24sXG4gIEFycm93RG93bkljb24sXG4gIEFycm93RG93bk9uU3F1YXJlU3RhY2tJY29uLFxuICBBcnJvd0Rvd25SaWdodEljb24sXG4gIEFycm93VXR1cm5Eb3duSWNvbixcbiAgQmVha2VySWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZCc7XG5cbmNvbnN0IEFjdGlvbkJ1dHRvbnMgPSB7XG4gIFNPQ0lBTFM6IHtcbiAgICBsYWJlbDogJ1NvY2lhbHMnLFxuICAgIGljb246IG51bGwsXG4gIH0sXG4gIEFCT1VUOiB7XG4gICAgbGFiZWw6ICdBYm91dCcsXG4gICAgaWNvbjogbnVsbCxcbiAgfSxcbiAgQ09OVEFDVDoge1xuICAgIGxhYmVsOiAnQ29udGFjdCcsXG4gICAgaWNvbjogbnVsbCxcbiAgfSxcbiAgUkFORE9NOiB7XG4gICAgbGFiZWw6ICdSYW5kb20nLFxuICAgIGljb246IG51bGwsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVDb21wb25lbnQoYWN0aXZlQ29tcG9uZW50OiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBBY3Rpb25CdXR0b25zLkFCT1VULmxhYmVsOlxuICAgICAgcmV0dXJuIDxKb3VybmV5IC8+O1xuICAgIGNhc2UgQWN0aW9uQnV0dG9ucy5DT05UQUNULmxhYmVsOlxuICAgICAgcmV0dXJuIDw+Q29udGFjdDwvPjtcbiAgICBjYXNlIEFjdGlvbkJ1dHRvbnMuUkFORE9NLmxhYmVsOlxuICAgICAgcmV0dXJuIDw+UmFuZG9tPC8+O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPD48Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc2VjdGlvbl9vbmVfcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCB7IHNjcm9sbFByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIGNvbnRhaW5lcjogc2VjdGlvbl9vbmVfcmVmLFxuICB9KTtcbiAgY29uc3QgeVBvc0FuaW0gPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yLCAwLjNdLCBbMCwgNzUsIDEwMF0pO1xuICBjb25zdCB5SGVhZGVyUG9zQW5pbSA9IHVzZVRyYW5zZm9ybShcbiAgICBzY3JvbGxZUHJvZ3Jlc3MsXG4gICAgWzAsIDAuMiwgMC4zXSxcbiAgICBbMCwgNTAsIDEwMF1cbiAgKTtcbiAgY29uc3QgeVBvc09wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yLCAwLjNdLCBbMSwgMC42LCAwXSk7XG4gIGNvbnN0IHlQb3NTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjIsIDAuM10sIFsxLCAwLCAwXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EeWxhbiBQb25kaXIgLSBBZHZlcnRpc2VyLCBEZXZlbG9wZXIsIGFuZCBFbnRyZXByZW5ldXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nV2hvIGlzIER5bGFuIFBvbmRpcj8nIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPD5cbiAgICAgICAgICA8QW5pbWF0ZWRTZWN0aW9uIHJlZj17c2VjdGlvbl9vbmVfcmVmfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZml4ZWQnXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogeVBvc09wYWNpdHksXG4gICAgICAgICAgICAgICAgcm90YXRlWTogeUhlYWRlclBvc0FuaW0sXG4gICAgICAgICAgICAgICAgc2NhbGU6IHlQb3NTY2FsZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiAxMDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFuaW1hdGVkUGFyZW50PlxuICAgICAgICAgICAgICAgIDxBbmltYXRlZENoaWxkIGNsYXNzTmFtZXM9J21iLTInPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtNXhsIG1kOnRleHQtN3hsJz5cbiAgICAgICAgICAgICAgICAgICAgRHlsYW4gUG9uZGlyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlZENoaWxkPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlZENoaWxkPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtdGhpbiB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgRW50cmVwcmVuZXVyLHsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zYWZmcm9uJz5BZHZlcnRpc2VyPC9zcGFuPiwgYW5kXG4gICAgICAgICAgICAgICAgICAgIERldmVsb3BlclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRDaGlsZD5cbiAgICAgICAgICAgICAgPC9BbmltYXRlZFBhcmVudD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHJvdGF0ZVk6IHlQb3NBbmltLCBvcGFjaXR5OiB5UG9zT3BhY2l0eSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGZpeGVkIGJvdHRvbS04IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgICA8QXJyb3dEb3duSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhbmltYXRlLXB1bHNlJ1xuICAgICAgICAgICAgICAgICAgY29sb3I9J3NhZmZyb24nXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9BbmltYXRlZFNlY3Rpb24+XG4gICAgICAgICAgPEFuaW1hdGVkU2VjdGlvbj5cbiAgICAgICAgICAgIDxBbmltYXRlZFBhcmVudD5cbiAgICAgICAgICAgICAgPEFuaW1hdGVkQ2hpbGQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXRoaW4gdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICBFbnRyZXByZW5ldXIsIEFkdmVydGlzZXIsIGFuZCBEZXZlbG9wZXJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZWRDaGlsZD5cbiAgICAgICAgICAgIDwvQW5pbWF0ZWRQYXJlbnQ+XG4gICAgICAgICAgPC9BbmltYXRlZFNlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJlZiIsIkpvdXJuZXkiLCJMYXlvdXQiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJBbmltYXRlZFNlY3Rpb24iLCJBbmltYXRlZFBhcmVudCIsIkFuaW1hdGVkQ2hpbGQiLCJBcnJvd0Rvd25JY29uIiwiQWN0aW9uQnV0dG9ucyIsIlNPQ0lBTFMiLCJsYWJlbCIsImljb24iLCJBQk9VVCIsIkNPTlRBQ1QiLCJSQU5ET00iLCJnZXRBY3RpdmVDb21wb25lbnQiLCJhY3RpdmVDb21wb25lbnQiLCJIb21lIiwic2VjdGlvbl9vbmVfcmVmIiwic2Nyb2xsUHJvZ3Jlc3MiLCJjb250YWluZXIiLCJ5UG9zQW5pbSIsInNjcm9sbFlQcm9ncmVzcyIsInlIZWFkZXJQb3NBbmltIiwieVBvc09wYWNpdHkiLCJ5UG9zU2NhbGUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwicmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvcGFjaXR5Iiwicm90YXRlWSIsInNjYWxlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJjbGFzc05hbWVzIiwic3BhbiIsImNvbG9yIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});