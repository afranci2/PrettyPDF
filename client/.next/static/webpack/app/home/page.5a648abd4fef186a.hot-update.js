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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_FileContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FileContext */ \"(app-pages-browser)/./app/contexts/FileContext.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sections_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/Header */ \"(app-pages-browser)/./app/sections/Header.jsx\");\n/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/Footer */ \"(app-pages-browser)/./app/sections/Footer.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _sections_TextDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/TextDisplay */ \"(app-pages-browser)/./app/sections/TextDisplay.jsx\");\n/* harmony import */ var _libs_dummyData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/dummyData */ \"(app-pages-browser)/./app/libs/dummyData.js\");\n/* harmony import */ var _libs_dummyData__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_libs_dummyData__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Additional imports\n // Ensure axios is installed (`npm install axios`)\n\n\n\nconst page = ()=>{\n    _s();\n    const { data: sessionData, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { file } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_FileContext__WEBPACK_IMPORTED_MODULE_2__.FileContext);\n    const [uploadStatus, setUploadStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleFileUpload = async ()=>{\n        if (!file) {\n            alert(\"No file is selected for upload.\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"file\", file);\n        setUploadStatus(\"Uploading...\");\n        try {\n            // Update the URL to your server's upload endpoint\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"http://localhost:3000/api/upload\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            // Handle response from the server\n            setUploadStatus(\"Upload successful!\");\n            console.log(response.data.text);\n            setText(response.data.text);\n        } catch (error) {\n            console.error(\"Upload failed:\", error);\n            setUploadStatus(\"Upload failed.\");\n            setText((_libs_dummyData__WEBPACK_IMPORTED_MODULE_7___default()));\n        }\n    };\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Uploaded File Details\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    file ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"File Name: \",\n                            file.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No file uploaded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 49\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleFileUpload,\n                        children: \"Upload File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    uploadStatus && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: uploadStatus\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 26\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 57,\n                columnNumber: 8\n            }, undefined),\n            uploadStatus && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_TextDisplay__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                text: text\n            }, void 0, false, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 63,\n                columnNumber: 24\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthonyf/Documents/PrettyPDF/client/app/home/page.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"vvDKUOea6PJ0ScgbSQR+0rIGEFQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNvRDtBQUNFO0FBQ1Y7QUFDSjtBQUNBO0FBQ3hDLHFCQUFxQjtBQUNLLENBQUMsa0RBQWtEO0FBQzVCO0FBQ1I7QUFDQztBQUUxQyxNQUFNVyxPQUFPOztJQUNYLE1BQU0sRUFBRUMsTUFBTUMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsR0FBR1YsMkRBQVVBO0lBQ2hELE1BQU0sRUFBRVcsSUFBSSxFQUFFLEdBQUdkLGlEQUFVQSxDQUFDRSw4REFBV0E7SUFDdkMsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZ0IsTUFBTUMsUUFBUSxHQUFHakIsK0NBQVFBO0lBRWhDLE1BQU1rQixtQkFBbUI7UUFDdkIsSUFBSSxDQUFDTCxNQUFNO1lBQ1RNLE1BQU07WUFDTjtRQUNGO1FBRUEsTUFBTUMsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFFBQVFUO1FBRXhCRSxnQkFBZ0I7UUFFaEIsSUFBSTtZQUNGLGtEQUFrRDtZQUNsRCxNQUFNUSxXQUFXLE1BQU1sQiw2Q0FBS0EsQ0FBQ21CLElBQUksQ0FBQyxvQ0FBb0NKLFVBQVU7Z0JBQzlFSyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVBLGtDQUFrQztZQUNsQ1YsZ0JBQWdCO1lBQ2hCVyxRQUFRQyxHQUFHLENBQUNKLFNBQVNiLElBQUksQ0FBQ00sSUFBSTtZQUM5QkMsUUFBUU0sU0FBU2IsSUFBSSxDQUFDTSxJQUFJO1FBQzVCLEVBQUUsT0FBT1ksT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsa0JBQWtCQTtZQUNoQ2IsZ0JBQWdCO1lBQ2hCRSxRQUFRVCx3REFBU0E7UUFDbkI7SUFDRjtJQUVBLElBQUlJLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ2lCO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUMxQix3REFBTUE7Ozs7OzBCQUNQLDhEQUFDMkI7MEJBQUc7Ozs7OzswQkFDSCw4REFBQ0Q7O29CQUNDaEIscUJBQU8sOERBQUNrQjs7NEJBQUU7NEJBQVlsQixLQUFLbUIsSUFBSTs7Ozs7O2tEQUFRLDhEQUFDRDtrQ0FBRTs7Ozs7O2tDQUUzQyw4REFBQ0U7d0JBQU9DLFNBQVNoQjtrQ0FBa0I7Ozs7OztvQkFDbENKLDhCQUFnQiw4REFBQ2lCO2tDQUFHakI7Ozs7Ozs7Ozs7OztZQUV0QkEsOEJBQWdCLDhEQUFDUiw2REFBV0E7Z0JBQUNVLE1BQU1BOzs7Ozs7MEJBQ3BDLDhEQUFDWix3REFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0F0RE1LOztRQUNrQ1AsdURBQVVBOzs7QUF1RGxELCtEQUFlTyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob21lL3BhZ2UuanN4P2E1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpbGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvRmlsZUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc2VjdGlvbnMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc2VjdGlvbnMvRm9vdGVyJztcbi8vIEFkZGl0aW9uYWwgaW1wb3J0c1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgLy8gRW5zdXJlIGF4aW9zIGlzIGluc3RhbGxlZCAoYG5wbSBpbnN0YWxsIGF4aW9zYClcbmltcG9ydCBUZXh0RGlzcGxheSBmcm9tICcuLi9zZWN0aW9ucy9UZXh0RGlzcGxheSdcbmltcG9ydCBEdW1teURhdGEgZnJvbSAnLi4vbGlicy9kdW1teURhdGEnXG5pbXBvcnQgZHVtbXlEYXRhIGZyb20gJy4uL2xpYnMvZHVtbXlEYXRhJztcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uRGF0YSwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHsgZmlsZSB9ID0gdXNlQ29udGV4dChGaWxlQ29udGV4dCk7XG4gIGNvbnN0IFt1cGxvYWRTdGF0dXMsIHNldFVwbG9hZFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKClcblxuICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZmlsZSkge1xuICAgICAgYWxlcnQoJ05vIGZpbGUgaXMgc2VsZWN0ZWQgZm9yIHVwbG9hZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuXG4gICAgc2V0VXBsb2FkU3RhdHVzKCdVcGxvYWRpbmcuLi4nKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIFVSTCB0byB5b3VyIHNlcnZlcidzIHVwbG9hZCBlbmRwb2ludFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VwbG9hZCcsIGZvcm1EYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIHNldFVwbG9hZFN0YXR1cygnVXBsb2FkIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnRleHQpO1xuICAgICAgc2V0VGV4dChyZXNwb25zZS5kYXRhLnRleHQpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgc2V0VXBsb2FkU3RhdHVzKCdVcGxvYWQgZmFpbGVkLicpO1xuICAgICAgc2V0VGV4dChkdW1teURhdGEpXG4gICAgfVxuICB9O1xuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8aDE+VXBsb2FkZWQgRmlsZSBEZXRhaWxzPC9oMT5cbiAgICAgIHs8ZGl2PlxuICAgICAgICB7ZmlsZSA/IDxwPkZpbGUgTmFtZToge2ZpbGUubmFtZX08L3A+IDogPHA+Tm8gZmlsZSB1cGxvYWRlZDwvcD59XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGaWxlVXBsb2FkfT5VcGxvYWQgRmlsZTwvYnV0dG9uPlxuICAgICAgICB7dXBsb2FkU3RhdHVzICYmIDxwPnt1cGxvYWRTdGF0dXN9PC9wPn1cbiAgICAgIDwvZGl2Pn1cbiAgICAgIHt1cGxvYWRTdGF0dXMgJiYgPFRleHREaXNwbGF5IHRleHQ9e3RleHR9Lz59XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiRmlsZUNvbnRleHQiLCJ1c2VTZXNzaW9uIiwiSGVhZGVyIiwiRm9vdGVyIiwiYXhpb3MiLCJUZXh0RGlzcGxheSIsIkR1bW15RGF0YSIsImR1bW15RGF0YSIsInBhZ2UiLCJkYXRhIiwic2Vzc2lvbkRhdGEiLCJzdGF0dXMiLCJmaWxlIiwidXBsb2FkU3RhdHVzIiwic2V0VXBsb2FkU3RhdHVzIiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVGaWxlVXBsb2FkIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImgxIiwicCIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});