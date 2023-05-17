"use strict";
exports.id = 2083;
exports.ids = [2083];
exports.modules = {

/***/ 2083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextfieldPass)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7749);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function TextfieldPass(props) {
    const { icon , ...textfieldProps } = props;
    const [showPassword, setShowPassword] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const handleClickShowPassword = ()=>setShowPassword((show)=>!show);
    const handleMouseDownPassword = (event)=>{
        event.preventDefault();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
            fullWidth: true,
            ...textfieldProps,
            type: showPassword ? "text" : "password",
            InputProps: {
                startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                    position: "start",
                    children: icon
                }),
                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                    position: "end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        "aria-label": "toggle password visibility",
                        onClick: handleClickShowPassword,
                        onMouseDown: handleMouseDownPassword,
                        edge: "end",
                        children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2___default()), {})
                    })
                })
            },
            variant: "outlined",
            size: "small",
            inputProps: {
                style: {
                    fontSize: 14
                }
            },
            className: "mb-4",
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
            }
        })
    });
}


/***/ })

};
;