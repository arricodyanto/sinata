"use strict";
exports.id = 4112;
exports.ids = [4112];
exports.modules = {

/***/ 4112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DateFieldBasic)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8716);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(298);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3__);




function DateFieldBasic(props) {
    const { ...datefieldProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2__.LocalizationProvider, {
        dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3__.AdapterDayjs,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_2__.DateField, {
            format: "DD/MM/YYYY",
            ...datefieldProps,
            sx: {
                "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                        borderColor: "#0ea5e9"
                    }
                },
                "& .MuiInputBase-root": {
                    fontSize: 14
                },
                "& .Mui-disabled": {
                    "&:hover fieldset": {
                        borderColor: "#bfc0c2"
                    },
                    backgroundColor: "#fafafa"
                }
            },
            slotProps: {
                textField: {
                    size: "small"
                }
            }
        })
    });
}


/***/ })

};
;