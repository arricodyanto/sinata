"use strict";
exports.id = 5561;
exports.ids = [5561];
exports.modules = {

/***/ 5561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SelectLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function SelectLabel(props) {
    const { label , children , ...textfieldProps } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
        className: "w-full mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                className: "mb-1 text-sm",
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                select: true,
                fullWidth: true,
                size: "small",
                InputProps: {
                    style: {
                        fontSize: 14
                    }
                },
                ...textfieldProps,
                sx: {
                    "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                            borderColor: "#0ea5e9"
                        }
                    },
                    "& .Mui-disabled": {
                        "&:hover fieldset": {
                            borderColor: "#bfc0c2"
                        },
                        backgroundColor: "#fafafa"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                        value: "default",
                        sx: {
                            display: "none"
                        },
                        children: "Silakan pilih salah satu"
                    }),
                    "=",
                    children
                ]
            })
        ]
    });
}


/***/ })

};
;