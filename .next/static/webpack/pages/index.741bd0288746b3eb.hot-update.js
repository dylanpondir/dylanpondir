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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Journey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Journey */ \"./components/Journey.tsx\");\n/* harmony import */ var _components_app_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app/Layout */ \"./components/app/Layout.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_app_AnimatedSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/app/AnimatedSection */ \"./components/app/AnimatedSection.tsx\");\n/* harmony import */ var _components_app_AnimatedParent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/app/AnimatedParent */ \"./components/app/AnimatedParent.tsx\");\n/* harmony import */ var _components_app_AnimatedChild__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/app/AnimatedChild */ \"./components/app/AnimatedChild.tsx\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/index.js\");\n/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Social */ \"./components/Social.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ActionButtons = {\n    SOCIALS: {\n        label: \"Socials\",\n        icon: null\n    },\n    ABOUT: {\n        label: \"About\",\n        icon: null\n    },\n    CONTACT: {\n        label: \"Contact\",\n        icon: null\n    },\n    RANDOM: {\n        label: \"Random\",\n        icon: null\n    }\n};\nfunction getActiveComponent(activeComponent) {\n    switch(activeComponent){\n        case ActionButtons.ABOUT.label:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Journey__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 14\n            }, this);\n        case ActionButtons.CONTACT.label:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Contact\"\n            }, void 0, false);\n        case ActionButtons.RANDOM.label:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Random\"\n            }, void 0, false);\n        default:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }\n}\nfunction Home() {\n    _s();\n    var section_one_ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useScroll)({\n        container: section_one_ref\n    }), scrollSectionOne = ref.scrollYProgress;\n    var yPosAnim = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform)(scrollSectionOne, [\n        0,\n        0.2,\n        0.3\n    ], [\n        0,\n        75,\n        100\n    ]);\n    var yHeaderPosAnim = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform)(scrollSectionOne, [\n        0,\n        0.5,\n        0.7\n    ], [\n        0,\n        50,\n        100\n    ]);\n    var yPosOpacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform)(scrollSectionOne, [\n        0,\n        0.2,\n        0.3\n    ], [\n        1,\n        0.6,\n        0\n    ]);\n    var yPosScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform)(scrollSectionOne, [\n        0,\n        0.5,\n        0.7\n    ], [\n        1,\n        2,\n        10\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dylan Pondir - Advertiser, Developer, and Entrepreneur\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Who is Dylan Pondir?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ref: section_one_ref,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                    className: \"fixed\",\n                                    style: {\n                                        opacity: yPosOpacity,\n                                        rotateY: yHeaderPosAnim,\n                                        scale: yPosScale\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedParent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedChild__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                classNames: \"mb-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-white text-5xl md:text-7xl\",\n                                                    children: \"Dylan Pondir\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedChild__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-xl md:text-2xl font-thin text-white\",\n                                                    children: [\n                                                        \"Entrepreneur,\",\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-saffron\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                href: \"https://pondir.com\",\n                                                                target: \"_blank\",\n                                                                rel: \"noreferrer\",\n                                                                className: \"hover:border-b\",\n                                                                children: \"Advertiser\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                                lineNumber: 107,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                            lineNumber: 106,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        \", and Developer\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                    style: {\n                                        rotateY: yPosAnim,\n                                        opacity: yPosOpacity\n                                    },\n                                    className: \"flex w-full fixed bottom-8 justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold text-gray-200\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__.ArrowDownIcon, {\n                                            className: \"animate-pulse\",\n                                            color: \"saffron\",\n                                            width: 25\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ref: section_two_ref,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_AnimatedParent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Social__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/dylanpondir/Code/dylanpondir/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"D44+iOTec6/1ie0BAG8WEKFi4fg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_9__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQUNHLDBEQUFNOzs7O3dDQUFHOzs7OztvQ0FDSzs7Ozs7Z0NBQ0Q7O2dDQUNqQjs7Ozs7b0JBQ0k7O29CQUNSLENBQ0g7Q0FDSDtHQW5GdUJVLElBQUk7O1FBR29CaEIsb0RBQVM7UUFHdENDLHVEQUFZO1FBQ05BLHVEQUFZO1FBS2ZBLHVEQUFZO1FBS2RBLHVEQUFZOzs7QUFqQlJlLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEpvdXJuZXkgZnJvbSAnLi4vY29tcG9uZW50cy9Kb3VybmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAvTGF5b3V0JztcbmltcG9ydCBkeWxhblBpYyBmcm9tICcuLi9wdWJsaWMvRHlsYW5Qb25kaXIuanBnJztcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VTcHJpbmcsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHtcbiAgSXRlbUFuaW1hdGlvbixcbiAgTGlzdEFuaW1hdGlvbixcbiAgQ2hpbGRBbmltYXRpb24sXG59IGZyb20gJy4uL2xpYi9hbmltYXRpb25zJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwL0FuaW1hdGVkU2VjdGlvbic7XG5pbXBvcnQgQW5pbWF0ZWRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwL0FuaW1hdGVkU2VjdGlvbic7XG5pbXBvcnQgQW5pbWF0ZWRQYXJlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAvQW5pbWF0ZWRQYXJlbnQnO1xuaW1wb3J0IEFuaW1hdGVkQ2hpbGQgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAvQW5pbWF0ZWRDaGlsZCc7XG5pbXBvcnQge1xuICBBcnJvd0Rvd25DaXJjbGVJY29uLFxuICBBcnJvd0Rvd25JY29uLFxuICBBcnJvd0Rvd25PblNxdWFyZVN0YWNrSWNvbixcbiAgQXJyb3dEb3duUmlnaHRJY29uLFxuICBBcnJvd1V0dXJuRG93bkljb24sXG4gIEJlYWtlckljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQnO1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9jb21wb25lbnRzL1NvY2lhbCc7XG5cbmNvbnN0IEFjdGlvbkJ1dHRvbnMgPSB7XG4gIFNPQ0lBTFM6IHtcbiAgICBsYWJlbDogJ1NvY2lhbHMnLFxuICAgIGljb246IG51bGwsXG4gIH0sXG4gIEFCT1VUOiB7XG4gICAgbGFiZWw6ICdBYm91dCcsXG4gICAgaWNvbjogbnVsbCxcbiAgfSxcbiAgQ09OVEFDVDoge1xuICAgIGxhYmVsOiAnQ29udGFjdCcsXG4gICAgaWNvbjogbnVsbCxcbiAgfSxcbiAgUkFORE9NOiB7XG4gICAgbGFiZWw6ICdSYW5kb20nLFxuICAgIGljb246IG51bGwsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVDb21wb25lbnQoYWN0aXZlQ29tcG9uZW50OiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBBY3Rpb25CdXR0b25zLkFCT1VULmxhYmVsOlxuICAgICAgcmV0dXJuIDxKb3VybmV5IC8+O1xuICAgIGNhc2UgQWN0aW9uQnV0dG9ucy5DT05UQUNULmxhYmVsOlxuICAgICAgcmV0dXJuIDw+Q29udGFjdDwvPjtcbiAgICBjYXNlIEFjdGlvbkJ1dHRvbnMuUkFORE9NLmxhYmVsOlxuICAgICAgcmV0dXJuIDw+UmFuZG9tPC8+O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPD48Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc2VjdGlvbl9vbmVfcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzczogc2Nyb2xsU2VjdGlvbk9uZSB9ID0gdXNlU2Nyb2xsKHtcbiAgICBjb250YWluZXI6IHNlY3Rpb25fb25lX3JlZixcbiAgfSk7XG4gIGNvbnN0IHlQb3NBbmltID0gdXNlVHJhbnNmb3JtKHNjcm9sbFNlY3Rpb25PbmUsIFswLCAwLjIsIDAuM10sIFswLCA3NSwgMTAwXSk7XG4gIGNvbnN0IHlIZWFkZXJQb3NBbmltID0gdXNlVHJhbnNmb3JtKFxuICAgIHNjcm9sbFNlY3Rpb25PbmUsXG4gICAgWzAsIDAuNSwgMC43XSxcbiAgICBbMCwgNTAsIDEwMF1cbiAgKTtcbiAgY29uc3QgeVBvc09wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oXG4gICAgc2Nyb2xsU2VjdGlvbk9uZSxcbiAgICBbMCwgMC4yLCAwLjNdLFxuICAgIFsxLCAwLjYsIDBdXG4gICk7XG4gIGNvbnN0IHlQb3NTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxTZWN0aW9uT25lLCBbMCwgMC41LCAwLjddLCBbMSwgMiwgMTBdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkR5bGFuIFBvbmRpciAtIEFkdmVydGlzZXIsIERldmVsb3BlciwgYW5kIEVudHJlcHJlbmV1cjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdXaG8gaXMgRHlsYW4gUG9uZGlyPycgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8PlxuICAgICAgICAgIDxBbmltYXRlZFNlY3Rpb24gcmVmPXtzZWN0aW9uX29uZV9yZWZ9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaXhlZCdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB5UG9zT3BhY2l0eSxcbiAgICAgICAgICAgICAgICByb3RhdGVZOiB5SGVhZGVyUG9zQW5pbSxcbiAgICAgICAgICAgICAgICBzY2FsZTogeVBvc1NjYWxlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QW5pbWF0ZWRQYXJlbnQ+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkQ2hpbGQgY2xhc3NOYW1lcz0nbWItMic+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC01eGwgbWQ6dGV4dC03eGwnPlxuICAgICAgICAgICAgICAgICAgICBEeWxhbiBQb25kaXJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkQ2hpbGQ+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteGwgbWQ6dGV4dC0yeGwgZm9udC10aGluIHRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICBFbnRyZXByZW5ldXIseycgJ31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNhZmZyb24nPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3BvbmRpci5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6Ym9yZGVyLWInXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWR2ZXJ0aXNlclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAsIGFuZCBEZXZlbG9wZXJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkQ2hpbGQ+XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZWRQYXJlbnQ+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyByb3RhdGVZOiB5UG9zQW5pbSwgb3BhY2l0eTogeVBvc09wYWNpdHkgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBmaXhlZCBib3R0b20tOCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTIwMCc+XG4gICAgICAgICAgICAgICAgPEFycm93RG93bkljb25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYW5pbWF0ZS1wdWxzZSdcbiAgICAgICAgICAgICAgICAgIGNvbG9yPSdzYWZmcm9uJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZWRTZWN0aW9uPlxuICAgICAgICAgIDxBbmltYXRlZFNlY3Rpb24gcmVmPXtzZWN0aW9uX3R3b19yZWZ9PlxuICAgICAgICAgICAgPEFuaW1hdGVkUGFyZW50PlxuICAgICAgICAgICAgICA8U29jaWFsIC8+XG4gICAgICAgICAgICA8L0FuaW1hdGVkUGFyZW50PlxuICAgICAgICAgIDwvQW5pbWF0ZWRTZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSZWYiLCJKb3VybmV5IiwiTGF5b3V0IiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiQW5pbWF0ZWRTZWN0aW9uIiwiQW5pbWF0ZWRQYXJlbnQiLCJBbmltYXRlZENoaWxkIiwiQXJyb3dEb3duSWNvbiIsIlNvY2lhbCIsIkFjdGlvbkJ1dHRvbnMiLCJTT0NJQUxTIiwibGFiZWwiLCJpY29uIiwiQUJPVVQiLCJDT05UQUNUIiwiUkFORE9NIiwiZ2V0QWN0aXZlQ29tcG9uZW50IiwiYWN0aXZlQ29tcG9uZW50IiwiSG9tZSIsInNlY3Rpb25fb25lX3JlZiIsImNvbnRhaW5lciIsInNjcm9sbFlQcm9ncmVzcyIsInNjcm9sbFNlY3Rpb25PbmUiLCJ5UG9zQW5pbSIsInlIZWFkZXJQb3NBbmltIiwieVBvc09wYWNpdHkiLCJ5UG9zU2NhbGUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwicmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvcGFjaXR5Iiwicm90YXRlWSIsInNjYWxlIiwiY2xhc3NOYW1lcyIsInNwYW4iLCJhIiwidGFyZ2V0IiwiY29sb3IiLCJ3aWR0aCIsInNlY3Rpb25fdHdvX3JlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});