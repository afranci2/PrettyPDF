"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./app/home/page.jsx":
/*!***************************!*\
  !*** ./app/home/page.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _sections_home_TextDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/home/TextDisplay */ \"(app-pages-browser)/./app/sections/home/TextDisplay.jsx\");\n/* harmony import */ var _sections_home_OutlineSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/home/OutlineSection */ \"(app-pages-browser)/./app/sections/home/OutlineSection.jsx\");\n/* harmony import */ var _sections_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/Header */ \"(app-pages-browser)/./app/sections/Header.jsx\");\n/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Footer */ \"(app-pages-browser)/./app/sections/Footer.jsx\");\n/* harmony import */ var _contexts_FileContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FileContext */ \"(app-pages-browser)/./app/contexts/FileContext.js\");\n/* harmony import */ var _libs_dummyOutlineData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../libs/dummyOutlineData */ \"(app-pages-browser)/./app/libs/dummyOutlineData.js\");\n/* harmony import */ var _libs_dummyOutlineData__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_libs_dummyOutlineData__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _libs_dummyData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/dummyData */ \"(app-pages-browser)/./app/libs/dummyData.js\");\n/* harmony import */ var _libs_dummyData__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_libs_dummyData__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Ensure axios is installed (`npm install axios`)\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const { file } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_FileContext__WEBPACK_IMPORTED_MODULE_7__.FileContext);\n    const [uploadStatus, setUploadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [outline, setOutline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleFileUpload = async ()=>{\n        const formData = new FormData();\n        formData.append(\"file\", file);\n        setUploadStatus(\"Uploading...\");\n        try {\n            // Update the URL to your server's upload endpoint\n            const response = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"http://localhost:3000/api/upload\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            // Handle response from the server\n            setUploadStatus(\"Upload successful!\");\n            console.log(response.data.text);\n            setText(response.data.text);\n        } catch (error) {\n            console.error(\"Upload failed:\", error);\n            setUploadStatus(\"Upload failed.\");\n            setText((_libs_dummyData__WEBPACK_IMPORTED_MODULE_9___default()));\n            setOutline((_libs_dummyOutlineData__WEBPACK_IMPORTED_MODULE_8___default()));\n        }\n    };\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Uploaded File Details\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    file ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"File Name: \",\n                            file.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No file uploaded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 53\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleFileUpload,\n                        className: \"bg-blue-500 text-white rounded px-4 py-2 mt-2\",\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    uploadStatus && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-2\",\n                        children: uploadStatus\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 30\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 57,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex-1 p-4 bg-black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            children: text && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_home_TextDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: text\n                            }, void 0, false, {\n                                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 22\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"w-64 bg-white p-4 shadow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            children: outline && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_home_OutlineSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                outline: outline\n                            }, void 0, false, {\n                                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 23\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"7a4lyR2rrxEdMsgt78/v3AKtiQk=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNvRDtBQUNQO0FBQ25CLENBQUMsa0RBQWtEO0FBQ3RCO0FBQ007QUFDckI7QUFDQTtBQUNjO0FBQ0M7QUFDZDtBQUd6QyxNQUFNWSxPQUFPOztJQUNYLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdaLGlEQUFVQSxDQUFDUSw4REFBV0E7SUFDdkMsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMsTUFBTWtCLG1CQUFtQjtRQUd2QixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUVY7UUFFeEJFLGdCQUFnQjtRQUVoQixJQUFJO1lBQ0Ysa0RBQWtEO1lBQ2xELE1BQU1TLFdBQVcsTUFBTXBCLDhDQUFLQSxDQUFDcUIsSUFBSSxDQUFDLG9DQUFvQ0osVUFBVTtnQkFDOUVLLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUEsa0NBQWtDO1lBQ2xDWCxnQkFBZ0I7WUFDaEJZLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0ssSUFBSSxDQUFDYixJQUFJO1lBQzlCQyxRQUFRTyxTQUFTSyxJQUFJLENBQUNiLElBQUk7UUFDNUIsRUFBRSxPQUFPYyxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQyxrQkFBa0JBO1lBQ2hDZixnQkFBZ0I7WUFDaEJFLFFBQVFOLHdEQUFTQTtZQUNqQlEsV0FBV1QsK0RBQWdCQTtRQUM3QjtJQUNGO0lBRUEsSUFBSXFCLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDMUIsd0RBQU1BOzs7OzswQkFDUCw4REFBQzJCO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUVwQyw4REFBQ0Q7O29CQUNFbkIscUJBQU8sOERBQUNzQjs7NEJBQUU7NEJBQVl0QixLQUFLdUIsSUFBSTs7Ozs7O2tEQUFRLDhEQUFDRDtrQ0FBRTs7Ozs7O2tDQUMzQyw4REFBQ0U7d0JBQU9DLFNBQVNsQjt3QkFBa0JhLFdBQVU7a0NBQWdEOzs7Ozs7b0JBQzVGbkIsOEJBQWdCLDhEQUFDcUI7d0JBQUVGLFdBQVU7a0NBQVFuQjs7Ozs7Ozs7Ozs7OzBCQUU1Qyw4REFBQ2tCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ007d0JBQUtOLFdBQVU7a0NBQ2QsNEVBQUNPO3NDQUNFeEIsc0JBQVEsOERBQUNYLGtFQUFXQTtnQ0FBQ1csTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWhDLDhEQUFDeUI7d0JBQU1SLFdBQVU7a0NBRWYsNEVBQUNTO3NDQUNBeEIseUJBQVcsOERBQUNaLHFFQUFjQTtnQ0FBQ1ksU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3pDLDhEQUFDVix3REFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0FsRU1JO0tBQUFBO0FBb0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob21lL3BhZ2UuanN4P2E1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgLy8gRW5zdXJlIGF4aW9zIGlzIGluc3RhbGxlZCAoYG5wbSBpbnN0YWxsIGF4aW9zYClcbmltcG9ydCBUZXh0RGlzcGxheSBmcm9tICcuLi9zZWN0aW9ucy9ob21lL1RleHREaXNwbGF5JztcbmltcG9ydCBPdXRsaW5lU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9ucy9ob21lL091dGxpbmVTZWN0aW9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc2VjdGlvbnMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc2VjdGlvbnMvRm9vdGVyJztcbmltcG9ydCB7IEZpbGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvRmlsZUNvbnRleHQnO1xuaW1wb3J0IGR1bW15T3V0bGluZURhdGEgZnJvbSAnLi4vbGlicy9kdW1teU91dGxpbmVEYXRhJ1xuaW1wb3J0IGR1bW15RGF0YSBmcm9tICcuLi9saWJzL2R1bW15RGF0YSdcblxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGZpbGUgfSA9IHVzZUNvbnRleHQoRmlsZUNvbnRleHQpO1xuICBjb25zdCBbdXBsb2FkU3RhdHVzLCBzZXRVcGxvYWRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvdXRsaW5lLCBzZXRPdXRsaW5lXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuXG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuXG4gICAgc2V0VXBsb2FkU3RhdHVzKCdVcGxvYWRpbmcuLi4nKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIFVSTCB0byB5b3VyIHNlcnZlcidzIHVwbG9hZCBlbmRwb2ludFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VwbG9hZCcsIGZvcm1EYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIHNldFVwbG9hZFN0YXR1cygnVXBsb2FkIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnRleHQpO1xuICAgICAgc2V0VGV4dChyZXNwb25zZS5kYXRhLnRleHQpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgc2V0VXBsb2FkU3RhdHVzKCdVcGxvYWQgZmFpbGVkLicpO1xuICAgICAgc2V0VGV4dChkdW1teURhdGEpXG4gICAgICBzZXRPdXRsaW5lKGR1bW15T3V0bGluZURhdGEpXG4gICAgfVxuICB9O1xuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5VcGxvYWRlZCBGaWxlIERldGFpbHM8L2gxPlxuICAgICAgICAgIHsvKiBVcGxvYWQgc2VjdGlvbiAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2ZpbGUgPyA8cD5GaWxlIE5hbWU6IHtmaWxlLm5hbWV9PC9wPiA6IDxwPk5vIGZpbGUgdXBsb2FkZWQ8L3A+fVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGaWxlVXBsb2FkfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcHgtNCBweS0yIG10LTJcIj5VcGxvYWQgRmlsZTwvYnV0dG9uPlxuICAgICAgICAgICAge3VwbG9hZFN0YXR1cyAmJiA8cCBjbGFzc05hbWU9XCJtdC0yXCI+e3VwbG9hZFN0YXR1c308L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgZmxleFwiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgcC00IGJnLWJsYWNrXCI+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICB7dGV4dCAmJiA8VGV4dERpc3BsYXkgdGV4dD17dGV4dH0gLz59XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIFxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ3LTY0IGJnLXdoaXRlIHAtNCBzaGFkb3dcIj5cbiAgICAgICAgICB7LyogUGxhY2Vob2xkZXIgZm9yIG5hdmlnYXRpb24gaXRlbXMgKi99XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICB7b3V0bGluZSAmJiA8T3V0bGluZVNlY3Rpb24gb3V0bGluZT17b3V0bGluZX0gLz59XG5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJheGlvcyIsIlRleHREaXNwbGF5IiwiT3V0bGluZVNlY3Rpb24iLCJIZWFkZXIiLCJGb290ZXIiLCJGaWxlQ29udGV4dCIsImR1bW15T3V0bGluZURhdGEiLCJkdW1teURhdGEiLCJQYWdlIiwiZmlsZSIsInVwbG9hZFN0YXR1cyIsInNldFVwbG9hZFN0YXR1cyIsInRleHQiLCJzZXRUZXh0Iiwib3V0bGluZSIsInNldE91dGxpbmUiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwic2VjdGlvbiIsImFzaWRlIiwibmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});