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

/***/ "./comps/Button.js":
/*!*************************!*\
  !*** ./comps/Button.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BackButton\": () => (/* binding */ BackButton),\n/* harmony export */   \"SkipButton\": () => (/* binding */ SkipButton),\n/* harmony export */   \"CTAButton\": () => (/* binding */ CTAButton),\n/* harmony export */   \"PrimaryButton\": () => (/* binding */ PrimaryButton),\n/* harmony export */   \"NextButton\": () => (/* binding */ NextButton),\n/* harmony export */   \"SecondaryButton\": () => (/* binding */ SecondaryButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_index_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/index_content */ \"./data/index_content.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({\n    displayName: \"Button\",\n    componentId: \"sc-fec9e70c-0\"\n})`\n    background-color: ${(props)=>_data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnStyle[props.BtnStyle].bgcolor\n};\n    color: ${(props)=>_data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnStyle[props.BtnStyle].txtcolor\n};\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 27px;\n    border-radius: 8px;\n    width: 190px;\n    height: 50px;\n    bottom: 15.88%;\n    position: absolute;\n`;\nconst TextButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n    displayName: \"Button__TextButton\",\n    componentId: \"sc-fec9e70c-1\"\n})`\n    display: flex;\n    position: absolute;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 25px;\n    cursor: pointer;\n    left: ${(props)=>_data_index_content__WEBPACK_IMPORTED_MODULE_1__.TextBtnStyle[props.TextBtnStyle].left\n};\n    right: ${(props)=>_data_index_content__WEBPACK_IMPORTED_MODULE_1__.TextBtnStyle[props.TextBtnStyle].right\n};\n    top: 45px;\n    color: ${(props)=>_data_index_content__WEBPACK_IMPORTED_MODULE_1__.TextBtnStyle[props.TextBtnStyle].color\n}\n`;\nconst StartButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({\n    displayName: \"Button__StartButton\",\n    componentId: \"sc-fec9e70c-2\"\n})`\n    background-color: ${(props)=>_data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnStyle[props.BtnStyle].bgcolor\n};\n    color: ${(props)=>_data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnStyle[props.BtnStyle].txtcolor\n};\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 27px;\n    border-radius: 8px;\n    width: 190px;\n    height: 50px;\n`;\nfunction BackButton() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextButton, {\n        TextBtnStyle: \"back\",\n        onClick: ()=>{\n            r.replace({\n                pathname: \"/intro\"\n            });\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"../chevronleft.svg\"\n            }, void 0, false, {\n                fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Button.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            _data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnText.back\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Button.js\",\n        lineNumber: 44,\n        columnNumber: 12\n    }, this);\n}\nfunction SkipButton() {\n    // const r = useRouter();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextButton, {\n        TextBtnStyle: \"skip\",\n        children: _data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnText.skip\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Button.js\",\n        lineNumber: 63,\n        columnNumber: 12\n    }, this);\n}\nfunction CTAButton() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n        BtnStyle: \"white\",\n        onClick: ()=>{\n            r.replace({\n                pathname: \"/intro\"\n            });\n        },\n        children: _data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnText.index\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Button.js\",\n        lineNumber: 72,\n        columnNumber: 12\n    }, this);\n}\nfunction PrimaryButton() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n        BtnStyle: \"orange\",\n        onClick: ()=>{\n            r.replace({\n                pathname: \"/questions\"\n            });\n        },\n        children: _data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnText.intro\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Button.js\",\n        lineNumber: 89,\n        columnNumber: 12\n    }, this);\n}\nfunction NextButton() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n        BtnStyle: \"white\",\n        onClick: ()=>{\n            r.replace({\n                pathname: \"/intro\"\n            });\n        },\n        children: _data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnText.next\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Button.js\",\n        lineNumber: 107,\n        columnNumber: 12\n    }, this);\n}\nfunction SecondaryButton() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StartButton, {\n        BtnStyle: \"blue\",\n        onClick: ()=>{\n            r.replace({\n                pathname: \"./\"\n            });\n        },\n        children: _data_index_content__WEBPACK_IMPORTED_MODULE_1__.BtnText.start\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Button.js\",\n        lineNumber: 125,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRSxPQUFPLENBQ0w7Z0JBQ0lDLFFBQVEsRUFBRSxRQUFRO2FBQ3JCLENBQ0o7U0FDSjtrQkFFUG5CLDZEQUFZOzs7OztZQUNMO0NBQ1o7QUFFTSxTQUFTK0IsZUFBZSxHQUFHO0lBQzlCLE1BQU1mLENBQUMsR0FBR2Qsc0RBQVMsRUFBRTtJQUVyQixxQkFBTyw4REFBQ1ksV0FBVztRQUNmZixRQUFRLEVBQUMsTUFBTTtRQUNma0IsT0FBTyxFQUNILElBQU07WUFDRkQsQ0FBQyxDQUFDRSxPQUFPLENBQ0w7Z0JBQ0lDLFFBQVEsRUFBRSxJQUFJO2FBQ2pCLENBQ0o7U0FDSjtrQkFFUG5CLDhEQUFhOzs7OztZQUNEO0NBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZWFydC8uL2NvbXBzL0J1dHRvbi5qcz9iMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ0blN0eWxlLCBCdG5UZXh0LCBUZXh0QnRuU3R5bGUgfSBmcm9tIFwiLi4vZGF0YS9pbmRleF9jb250ZW50XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBCdG5TdHlsZVtwcm9wcy5CdG5TdHlsZV0uYmdjb2xvcn07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQnRuU3R5bGVbcHJvcHMuQnRuU3R5bGVdLnR4dGNvbG9yfTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3R0b206IDE1Ljg4JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5gXG5jb25zdCBUZXh0QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxlZnQ6ICR7cHJvcHMgPT4gVGV4dEJ0blN0eWxlW3Byb3BzLlRleHRCdG5TdHlsZV0ubGVmdH07XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gVGV4dEJ0blN0eWxlW3Byb3BzLlRleHRCdG5TdHlsZV0ucmlnaHR9O1xuICAgIHRvcDogNDVweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBUZXh0QnRuU3R5bGVbcHJvcHMuVGV4dEJ0blN0eWxlXS5jb2xvcn1cbmBcbmNvbnN0IFN0YXJ0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IEJ0blN0eWxlW3Byb3BzLkJ0blN0eWxlXS5iZ2NvbG9yfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBCdG5TdHlsZVtwcm9wcy5CdG5TdHlsZV0udHh0Y29sb3J9O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTkwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuYFxuXG5leHBvcnQgZnVuY3Rpb24gQmFja0J1dHRvbigpIHtcbiAgICBjb25zdCByID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4gPFRleHRCdXR0b25cbiAgICAgICAgVGV4dEJ0blN0eWxlPVwiYmFja1wiXG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHIucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2ludHJvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAgPGltZyBzcmMgPVwiLi4vY2hldnJvbmxlZnQuc3ZnXCI+PC9pbWc+XG4gICAgICAgIHtCdG5UZXh0LmJhY2t9XG4gICAgPC9UZXh0QnV0dG9uPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2tpcEJ1dHRvbigpIHtcbiAgICAvLyBjb25zdCByID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4gPFRleHRCdXR0b25cbiAgICAgICAgVGV4dEJ0blN0eWxlID0gXCJza2lwXCI+XG4gICAgICAgIHtCdG5UZXh0LnNraXB9XG4gICAgPC9UZXh0QnV0dG9uPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ1RBQnV0dG9uKCkge1xuICAgIGNvbnN0IHIgPSB1c2VSb3V0ZXIoKTtcbiAgICBcbiAgICByZXR1cm4gPEJ1dHRvblxuICAgICAgICBCdG5TdHlsZT1cIndoaXRlXCJcbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgci5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvaW50cm9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgPntCdG5UZXh0LmluZGV4fVxuICAgIDwvQnV0dG9uPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJpbWFyeUJ1dHRvbigpIHtcbiAgICBjb25zdCByID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuIDxCdXR0b25cbiAgICAgICAgQnRuU3R5bGU9XCJvcmFuZ2VcIlxuICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICByLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9xdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgPntCdG5UZXh0LmludHJvfVxuICAgIDwvQnV0dG9uPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gTmV4dEJ1dHRvbigpIHtcbiAgICBjb25zdCByID0gdXNlUm91dGVyKCk7XG4gICAgXG4gICAgcmV0dXJuIDxCdXR0b25cbiAgICAgICAgQnRuU3R5bGU9XCJ3aGl0ZVwiXG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHIucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2ludHJvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgID57QnRuVGV4dC5uZXh0fVxuICAgIDwvQnV0dG9uPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2Vjb25kYXJ5QnV0dG9uKCkge1xuICAgIGNvbnN0IHIgPSB1c2VSb3V0ZXIoKTtcbiAgICBcbiAgICByZXR1cm4gPFN0YXJ0QnV0dG9uXG4gICAgICAgIEJ0blN0eWxlPVwiYmx1ZVwiXG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHIucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiLi9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgPntCdG5UZXh0LnN0YXJ0fVxuICAgIDwvU3RhcnRCdXR0b24+XG59Il0sIm5hbWVzIjpbIkJ0blN0eWxlIiwiQnRuVGV4dCIsIlRleHRCdG5TdHlsZSIsInVzZVJvdXRlciIsInN0eWxlZCIsIkJ1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwiYmdjb2xvciIsInR4dGNvbG9yIiwiVGV4dEJ1dHRvbiIsImRpdiIsImxlZnQiLCJyaWdodCIsImNvbG9yIiwiU3RhcnRCdXR0b24iLCJCYWNrQnV0dG9uIiwiciIsIm9uQ2xpY2siLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJpbWciLCJzcmMiLCJiYWNrIiwiU2tpcEJ1dHRvbiIsInNraXAiLCJDVEFCdXR0b24iLCJpbmRleCIsIlByaW1hcnlCdXR0b24iLCJpbnRybyIsIk5leHRCdXR0b24iLCJuZXh0IiwiU2Vjb25kYXJ5QnV0dG9uIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Button.js\n");

/***/ }),

/***/ "./comps/Layout/index.js":
/*!*******************************!*\
  !*** ./comps/Layout/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logomark\": () => (/* binding */ Logomark),\n/* harmony export */   \"BackgroundShape\": () => (/* binding */ BackgroundShape),\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ \"./comps/Button.js\");\n/* harmony import */ var _data_index_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/index_content */ \"./data/index_content.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ \"./comps/Menu.js\");\n\n\n\n\n\n\nconst LayoutComp = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"Layout__LayoutComp\",\n    componentId: \"sc-10ef4ea6-0\"\n})`\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin-top: 6.5em;\n`;\nconst Em = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({\n    displayName: \"Layout__Em\",\n    componentId: \"sc-10ef4ea6-1\"\n})`\ncolor: #6B97ED;\nfont-style: normal;\nfont-weight: 700;\n`;\nfunction Logomark() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        class: \"logomark\",\n        src: \"/logomark.svg\",\n        alt: \"Timearth Logomark\"\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n        lineNumber: 22,\n        columnNumber: 12\n    }, this);\n}\nfunction BackgroundShape() {\n    // return <img class=\"background-shape\" src=\"/pattern.svg\" alt=\"Blue Rounded Shape\" />\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"background-shape\"\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n        lineNumber: 27,\n        columnNumber: 12\n    }, this);\n}\nfunction Layout() {\n    const r = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutComp, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logomark, {}, void 0, false, {\n                fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: _data_index_content__WEBPACK_IMPORTED_MODULE_4__.PageTitle\n            }, void 0, false, {\n                fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Log your daily activities and see how many \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Em, {\n                        children: \"Earth minutes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 60\n                    }, this),\n                    \" you have saved today!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackgroundShape, {}, void 0, false, {\n                fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__.CTAButton, {}, void 0, false, {\n                fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Layout/index.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9MYXlvdXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDRDtBQUNGO0FBQ2U7QUFDekI7QUFFM0IsTUFBTUssVUFBVSxHQUFHSix1RUFBVTs7O0VBQUEsQ0FBQzs7Ozs7O0FBTTlCLENBQUM7QUFFRCxNQUFNTSxFQUFFLEdBQUdOLHdFQUFXOzs7RUFBQSxDQUFDOzs7O0FBSXZCLENBQUM7QUFFTSxTQUFTUSxRQUFRLEdBQUc7SUFDdkIscUJBQU8sOERBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFDLFVBQVU7UUFBQ0MsR0FBRyxFQUFDLGVBQWU7UUFBQ0MsR0FBRyxFQUFDLG1CQUFtQjs7Ozs7WUFBRztDQUM5RTtBQUVNLFNBQVNDLGVBQWUsR0FBRztJQUM5QixzRkFBc0Y7SUFDdEYscUJBQU8sOERBQUNSLEtBQUc7UUFBQ0ssS0FBSyxFQUFDLGtCQUFrQjs7Ozs7WUFBTztDQUM5QztBQUVjLFNBQVNJLE1BQU0sR0FBRztJQUU3QixNQUFNQyxDQUFDLEdBQUdoQixzREFBUyxFQUFFO0lBQ3JCLHFCQUNJLDhEQUFDSyxVQUFVOzswQkFDUCw4REFBQ0QsNkNBQUk7Ozs7b0JBQUc7MEJBQ1IsOERBQUNLLFFBQVE7Ozs7b0JBQUc7MEJBQ1osOERBQUNRLElBQUU7MEJBQUVkLDBEQUFTOzs7OztvQkFBTTswQkFDcEIsOERBQUNlLElBQUU7O29CQUFDLDZDQUEyQztrQ0FBQSw4REFBQ1gsRUFBRTtrQ0FBQyxlQUFhOzs7Ozs0QkFBSztvQkFBQSx3QkFBc0I7Ozs7OztvQkFBSzswQkFDaEcsOERBQUNPLGVBQWU7Ozs7b0JBQUc7MEJBQ25CLDhEQUFDWiw4Q0FBUzs7OztvQkFBRzs7Ozs7O1lBQ0osQ0FDaEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVhcnQvLi9jb21wcy9MYXlvdXQvaW5kZXguanM/MTdmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1RBQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0IHsgUGFnZVRpdGxlIH0gZnJvbSAnLi4vLi4vZGF0YS9pbmRleF9jb250ZW50J1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL01lbnVcIjtcblxuY29uc3QgTGF5b3V0Q29tcCA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1hcmdpbi10b3A6IDYuNWVtO1xuYFxuXG5jb25zdCBFbSA9IHN0eWxlZC5zcGFuYFxuY29sb3I6ICM2Qjk3RUQ7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNzAwO1xuYFxuXG5leHBvcnQgZnVuY3Rpb24gTG9nb21hcmsoKSB7XG4gICAgcmV0dXJuIDxpbWcgY2xhc3M9XCJsb2dvbWFya1wiIHNyYz1cIi9sb2dvbWFyay5zdmdcIiBhbHQ9XCJUaW1lYXJ0aCBMb2dvbWFya1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCYWNrZ3JvdW5kU2hhcGUoKSB7XG4gICAgLy8gcmV0dXJuIDxpbWcgY2xhc3M9XCJiYWNrZ3JvdW5kLXNoYXBlXCIgc3JjPVwiL3BhdHRlcm4uc3ZnXCIgYWx0PVwiQmx1ZSBSb3VuZGVkIFNoYXBlXCIgLz5cbiAgICByZXR1cm4gPGRpdiBjbGFzcz1cImJhY2tncm91bmQtc2hhcGVcIj48L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xuXG4gICAgY29uc3QgciA9IHVzZVJvdXRlcigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXRDb21wPlxuICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgIDxMb2dvbWFyayAvPlxuICAgICAgICAgICAgPGgxPntQYWdlVGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoND5Mb2cgeW91ciBkYWlseSBhY3Rpdml0aWVzIGFuZCBzZWUgaG93IG1hbnkgPEVtPkVhcnRoIG1pbnV0ZXM8L0VtPiB5b3UgaGF2ZSBzYXZlZCB0b2RheSE8L2g0PlxuICAgICAgICAgICAgPEJhY2tncm91bmRTaGFwZSAvPlxuICAgICAgICAgICAgPENUQUJ1dHRvbiAvPlxuICAgICAgICA8L0xheW91dENvbXA+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlZCIsIkNUQUJ1dHRvbiIsIlBhZ2VUaXRsZSIsIk1lbnUiLCJMYXlvdXRDb21wIiwiZGl2IiwiRW0iLCJzcGFuIiwiTG9nb21hcmsiLCJpbWciLCJjbGFzcyIsInNyYyIsImFsdCIsIkJhY2tncm91bmRTaGFwZSIsIkxheW91dCIsInIiLCJoMSIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Layout/index.js\n");

/***/ }),

/***/ "./comps/Menu.js":
/*!***********************!*\
  !*** ./comps/Menu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({\n    displayName: \"Menu__Hamburger\",\n    componentId: \"sc-810112f2-0\"\n})`\n    position: absolute;\n    width: 30px;\n    height: 26px;\n    left: 30px;\n    top: 60px;\n    cursor: pointer;\n`;\nfunction Menu() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hamburger, {\n        src: \"/hamburger.svg\",\n        alt: \"Hamburger Menu\",\n        onClick: ()=>{}\n    }, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/comps/Menu.js\",\n        lineNumber: 15,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9NZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNEO0FBRXZDLE1BQU1FLFNBQVMsR0FBR0QsdUVBQVU7OztFQUFBLENBQUM7Ozs7Ozs7QUFPN0IsQ0FBQztBQUVjLFNBQVNHLElBQUksR0FBRztJQUUzQixxQkFBTyw4REFBQ0YsU0FBUztRQUNiRyxHQUFHLEVBQUMsZ0JBQWdCO1FBQ3BCQyxHQUFHLEVBQUMsZ0JBQWdCO1FBQ3BCQyxPQUFPLEVBQ0gsSUFBTSxFQUVMOzs7OztZQUVQO0NBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lYXJ0Ly4vY29tcHMvTWVudS5qcz82MTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEhhbWJ1cmdlciA9IHN0eWxlZC5pbWdgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogNjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG5cbiAgICByZXR1cm4gPEhhbWJ1cmdlclxuICAgICAgICBzcmM9XCIvaGFtYnVyZ2VyLnN2Z1wiXG4gICAgICAgIGFsdD1cIkhhbWJ1cmdlciBNZW51XCJcbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAoKSA9PiB7XG4gIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgLz5cblxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlZCIsIkhhbWJ1cmdlciIsImltZyIsIk1lbnUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Menu.js\n");

/***/ }),

/***/ "./data/index_content.js":
/*!*******************************!*\
  !*** ./data/index_content.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageTitle\": () => (/* binding */ PageTitle),\n/* harmony export */   \"TextBtnStyle\": () => (/* binding */ TextBtnStyle),\n/* harmony export */   \"BtnStyle\": () => (/* binding */ BtnStyle),\n/* harmony export */   \"BtnText\": () => (/* binding */ BtnText)\n/* harmony export */ });\nconst PageTitle = \"It\\u2019s time to log your changes!\";\nconst TextBtnStyle = {\n    back: {\n        color: \"#000000\",\n        left: \"14px\"\n    },\n    skip: {\n        color: \"#BFBFBF\",\n        right: \"30px\"\n    }\n};\nconst BtnStyle = {\n    blue: {\n        bgcolor: \"#6491E9\",\n        txtcolor: \"#FFFFFF\"\n    },\n    orange: {\n        bgcolor: \"#FF9042\",\n        txtcolor: \"#FFFFFF\"\n    },\n    white: {\n        bgcolor: \"#FFFFFF\",\n        txtcolor: \"#000000\"\n    },\n    inactive: {\n        bgcolor: \"#DADADA\",\n        txtcolor: \"#FFFFFF\"\n    }\n};\nconst BtnText = {\n    index: \"Get Started\",\n    intro: \"Start Logging\",\n    next: \"Next\",\n    back: \"Back\",\n    skip: \"Skip\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2luZGV4X2NvbnRlbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFNBQVMsR0FBRyxxQ0FBZ0MsQ0FBQztBQUVuRCxNQUFNQyxZQUFZLEdBQUc7SUFDeEJDLElBQUksRUFBRTtRQUNGQyxLQUFLLEVBQUUsU0FBUztRQUNoQkMsSUFBSSxFQUFFLE1BQU07S0FFZjtJQUVEQyxJQUFJLEVBQUU7UUFDRkYsS0FBSyxFQUFFLFNBQVM7UUFDaEJHLEtBQUssRUFBRSxNQUFNO0tBQ2hCO0NBQ0o7QUFFTSxNQUFNQyxRQUFRLEdBQUc7SUFDcEJDLElBQUksRUFBRTtRQUNGQyxPQUFPLEVBQUUsU0FBUztRQUNsQkMsUUFBUSxFQUFFLFNBQVM7S0FDdEI7SUFFREMsTUFBTSxFQUFFO1FBQ0pGLE9BQU8sRUFBRSxTQUFTO1FBQ2xCQyxRQUFRLEVBQUUsU0FBUztLQUN0QjtJQUVERSxLQUFLLEVBQUU7UUFDSEgsT0FBTyxFQUFFLFNBQVM7UUFDbEJDLFFBQVEsRUFBRSxTQUFTO0tBQ3RCO0lBRURHLFFBQVEsRUFBRTtRQUNOSixPQUFPLEVBQUUsU0FBUztRQUNsQkMsUUFBUSxFQUFFLFNBQVM7S0FDdEI7Q0FDSjtBQUVNLE1BQU1JLE9BQU8sR0FBRztJQUNuQkMsS0FBSyxFQUFFLGFBQWE7SUFDcEJDLEtBQUssRUFBRSxlQUFlO0lBQ3RCQyxJQUFJLEVBQUUsTUFBTTtJQUNaZixJQUFJLEVBQUUsTUFBTTtJQUNaRyxJQUFJLEVBQUUsTUFBTTtDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZWFydC8uL2RhdGEvaW5kZXhfY29udGVudC5qcz8wNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQYWdlVGl0bGUgPSBcIkl04oCZcyB0aW1lIHRvIGxvZyB5b3VyIGNoYW5nZXMhXCI7XG5cbmV4cG9ydCBjb25zdCBUZXh0QnRuU3R5bGUgPSB7XG4gICAgYmFjazoge1xuICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgIGxlZnQ6IFwiMTRweFwiXG5cbiAgICB9LFxuXG4gICAgc2tpcDoge1xuICAgICAgICBjb2xvcjogXCIjQkZCRkJGXCIsXG4gICAgICAgIHJpZ2h0OiBcIjMwcHhcIlxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEJ0blN0eWxlID0ge1xuICAgIGJsdWU6IHtcbiAgICAgICAgYmdjb2xvcjogXCIjNjQ5MUU5XCIsXG4gICAgICAgIHR4dGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH0sXG5cbiAgICBvcmFuZ2U6IHtcbiAgICAgICAgYmdjb2xvcjogXCIjRkY5MDQyXCIsXG4gICAgICAgIHR4dGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH0sXG5cbiAgICB3aGl0ZToge1xuICAgICAgICBiZ2NvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgdHh0Y29sb3I6IFwiIzAwMDAwMFwiXG4gICAgfSxcblxuICAgIGluYWN0aXZlOiB7XG4gICAgICAgIGJnY29sb3I6IFwiI0RBREFEQVwiLFxuICAgICAgICB0eHRjb2xvcjogXCIjRkZGRkZGXCJcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBCdG5UZXh0ID0ge1xuICAgIGluZGV4OiBcIkdldCBTdGFydGVkXCIsXG4gICAgaW50cm86IFwiU3RhcnQgTG9nZ2luZ1wiLFxuICAgIG5leHQ6IFwiTmV4dFwiLFxuICAgIGJhY2s6IFwiQmFja1wiLFxuICAgIHNraXA6IFwiU2tpcFwiXG59XG4iXSwibmFtZXMiOlsiUGFnZVRpdGxlIiwiVGV4dEJ0blN0eWxlIiwiYmFjayIsImNvbG9yIiwibGVmdCIsInNraXAiLCJyaWdodCIsIkJ0blN0eWxlIiwiYmx1ZSIsImJnY29sb3IiLCJ0eHRjb2xvciIsIm9yYW5nZSIsIndoaXRlIiwiaW5hY3RpdmUiLCJCdG5UZXh0IiwiaW5kZXgiLCJpbnRybyIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/index_content.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comps_Layout_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/Layout/index */ \"./comps/Layout/index.js\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Layout_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/cherylho/Desktop/d3t2/mdia2109/Timearth/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEM7QUFFM0IsU0FBU0MsSUFBSSxHQUFHO0lBRTNCLHFCQUNJLDhEQUFDRCwyREFBTTs7OztZQUFVLENBQ3BCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lYXJ0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wcy9MYXlvdXQvaW5kZXhcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD48L0xheW91dD5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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