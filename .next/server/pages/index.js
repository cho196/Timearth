"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./comps/Layout/index.js":
/*!*******************************!*\
  !*** ./comps/Layout/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hamburger\": () => (/* binding */ Hamburger),\n/* harmony export */   \"Logomark\": () => (/* binding */ Logomark),\n/* harmony export */   \"BackgroundShape\": () => (/* binding */ BackgroundShape),\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst LayoutComp = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"Layout__LayoutComp\",\n    componentId: \"sc-517ed1c5-0\"\n})`\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin-top: 6.5em;\n`;\nconst Em = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({\n    displayName: \"Layout__Em\",\n    componentId: \"sc-517ed1c5-1\"\n})`\ncolor: #6B97ED;\nfont-style: normal;\nfont-weight: 700;\n`;\nconst StartButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({\n    displayName: \"Layout__StartButton\",\n    componentId: \"sc-517ed1c5-2\"\n})`\nbackground: #FFFFFF;\nposition: absolute;\ntop: 78.2%;\n`;\nfunction Hamburger() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        class: \"hamburger\",\n        src: \"/hamburger.svg\",\n        alt: \"Hamburger Menu\"\n    }, void 0, false, {\n        fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, this);\n}\nfunction Logomark() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        class: \"logomark\",\n        src: \"/logomark.svg\",\n        alt: \"Timearth Logomark\"\n    }, void 0, false, {\n        fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n        lineNumber: 28,\n        columnNumber: 12\n    }, this);\n}\nfunction BackgroundShape() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        class: \"background-shape\",\n        src: \"/pattern.svg\",\n        alt: \"Blue Rounded Shape\"\n    }, void 0, false, {\n        fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n        lineNumber: 32,\n        columnNumber: 12\n    }, this);\n}\nfunction Layout() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutComp, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hamburger, {}, void 0, false, {\n                fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logomark, {}, void 0, false, {\n                fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"It\\u2019s time to log your changes!\"\n            }, void 0, false, {\n                fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Log your daily activities and see how many \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Em, {\n                        children: \"Earth minutes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 60\n                    }, this),\n                    \" you have saved today!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StartButton, {\n                onClick: ()=>r.replace({\n                        pathname: \"/intro\"\n                    })\n                ,\n                children: \"Get Started\"\n            }, void 0, false, {\n                fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackgroundShape, {}, void 0, false, {\n                fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anna/Desktop/Timearth/comps/Layout/index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9MYXlvdXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0Q7QUFFdkMsTUFBTUUsVUFBVSxHQUFHRCx1RUFBVTs7O0VBQUEsQ0FBQzs7Ozs7O0FBTTlCLENBQUM7QUFFRCxNQUFNRyxFQUFFLEdBQUdILHdFQUFXOzs7RUFBQSxDQUFDOzs7O0FBSXZCLENBQUM7QUFDRCxNQUFNSyxXQUFXLEdBQUdMLDBFQUFhOzs7RUFBQSxDQUFDOzs7O0FBSWxDLENBQUM7QUFFTSxTQUFTTyxTQUFTLEdBQUc7SUFDeEIscUJBQU8sOERBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFFLFdBQVc7UUFBQ0MsR0FBRyxFQUFDLGdCQUFnQjtRQUFDQyxHQUFHLEVBQUUsZ0JBQWdCOzs7OztZQUFFO0NBQzlFO0FBRU0sU0FBU0MsUUFBUSxHQUFHO0lBQ3ZCLHFCQUFPLDhEQUFDSixLQUFHO1FBQUNDLEtBQUssRUFBQyxVQUFVO1FBQUNDLEdBQUcsRUFBQyxlQUFlO1FBQUNDLEdBQUcsRUFBQyxtQkFBbUI7Ozs7O1lBQUc7Q0FDOUU7QUFFTSxTQUFTRSxlQUFlLEdBQUc7SUFDOUIscUJBQU8sOERBQUNMLEtBQUc7UUFBQ0MsS0FBSyxFQUFDLGtCQUFrQjtRQUFDQyxHQUFHLEVBQUMsY0FBYztRQUFDQyxHQUFHLEVBQUMsb0JBQW9COzs7OztZQUFHO0NBQ3RGO0FBRWMsU0FBU0csTUFBTSxHQUFHO0lBRTdCLE1BQU1DLENBQUMsR0FBR2hCLHNEQUFTLEVBQUU7SUFDckIscUJBQ0ksOERBQUNFLFVBQVU7OzBCQUNQLDhEQUFDTSxTQUFTOzs7O29CQUFHOzBCQUNiLDhEQUFDSyxRQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDSSxJQUFFOzBCQUFDLHFDQUE4Qjs7Ozs7b0JBQUs7MEJBQ3ZDLDhEQUFDQyxJQUFFOztvQkFBQyw2Q0FBMkM7a0NBQUEsOERBQUNkLEVBQUU7a0NBQUMsZUFBYTs7Ozs7NEJBQUs7b0JBQUEsd0JBQXNCOzs7Ozs7b0JBQUs7MEJBQ2hHLDhEQUFDRSxXQUFXO2dCQUNSYSxPQUFPLEVBQ0gsSUFBTUgsQ0FBQyxDQUFDSSxPQUFPLENBQ1g7d0JBQ0lDLFFBQVEsRUFBRSxRQUFRO3FCQUNyQixDQUNKO2dCQUFBOzBCQUVSLGFBQVc7Ozs7O29CQUFjOzBCQUMxQiw4REFBQ1AsZUFBZTs7OztvQkFBRzs7Ozs7O1lBQ1YsQ0FDaEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVhcnQvLi9jb21wcy9MYXlvdXQvaW5kZXguanM/MTdmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBMYXlvdXRDb21wID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWFyZ2luLXRvcDogNi41ZW07XG5gXG5cbmNvbnN0IEVtID0gc3R5bGVkLnNwYW5gXG5jb2xvcjogIzZCOTdFRDtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA3MDA7XG5gXG5jb25zdCBTdGFydEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiA3OC4yJTtcbmBcblxuZXhwb3J0IGZ1bmN0aW9uIEhhbWJ1cmdlcigpIHtcbiAgICByZXR1cm4gPGltZyBjbGFzcyA9XCJoYW1idXJnZXJcIiBzcmM9XCIvaGFtYnVyZ2VyLnN2Z1wiIGFsdCA9XCJIYW1idXJnZXIgTWVudVwiLz5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ29tYXJrKCkge1xuICAgIHJldHVybiA8aW1nIGNsYXNzPVwibG9nb21hcmtcIiBzcmM9XCIvbG9nb21hcmsuc3ZnXCIgYWx0PVwiVGltZWFydGggTG9nb21hcmtcIiAvPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gQmFja2dyb3VuZFNoYXBlKCkge1xuICAgIHJldHVybiA8aW1nIGNsYXNzPVwiYmFja2dyb3VuZC1zaGFwZVwiIHNyYz1cIi9wYXR0ZXJuLnN2Z1wiIGFsdD1cIkJsdWUgUm91bmRlZCBTaGFwZVwiIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcblxuICAgIGNvbnN0IHIgPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0Q29tcD5cbiAgICAgICAgICAgIDxIYW1idXJnZXIgLz5cbiAgICAgICAgICAgIDxMb2dvbWFyayAvPlxuICAgICAgICAgICAgPGgxPkl04oCZcyB0aW1lIHRvIGxvZyB5b3VyIGNoYW5nZXMhPC9oMT5cbiAgICAgICAgICAgIDxoND5Mb2cgeW91ciBkYWlseSBhY3Rpdml0aWVzIGFuZCBzZWUgaG93IG1hbnkgPEVtPkVhcnRoIG1pbnV0ZXM8L0VtPiB5b3UgaGF2ZSBzYXZlZCB0b2RheSE8L2g0PlxuICAgICAgICAgICAgPFN0YXJ0QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICgpID0+IHIucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvaW50cm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPkdldCBTdGFydGVkPC9TdGFydEJ1dHRvbj5cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kU2hhcGUgLz5cbiAgICAgICAgPC9MYXlvdXRDb21wPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZWQiLCJMYXlvdXRDb21wIiwiZGl2IiwiRW0iLCJzcGFuIiwiU3RhcnRCdXR0b24iLCJidXR0b24iLCJIYW1idXJnZXIiLCJpbWciLCJjbGFzcyIsInNyYyIsImFsdCIsIkxvZ29tYXJrIiwiQmFja2dyb3VuZFNoYXBlIiwiTGF5b3V0IiwiciIsImgxIiwiaDQiLCJvbkNsaWNrIiwicmVwbGFjZSIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Layout/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Layout */ \"./comps/Layout/index.js\");\n\n\n\nfunction Home() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/anna/Desktop/Timearth/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNKO0FBRXJCLFNBQVNFLElBQUksR0FBRztJQUUzQixNQUFNQyxDQUFDLEdBQUdILHNEQUFTLEVBQUU7SUFDckIscUJBQ0ksOERBQUNDLHFEQUFNOzs7O1lBQVUsQ0FDcEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVhcnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTGF5b3V0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIGNvbnN0IHIgPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PjwvTGF5b3V0PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJIb21lIiwiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();