"use strict";
exports.id = 2801;
exports.ids = [2801];
exports.modules = {

/***/ 2801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextfieldTableSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1920);
/* harmony import */ var _mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function TextfieldTableSearch(props) {
    const { getValue , ...textfieldProps } = props;
    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_4___default().useState("");
    const handleSearch = (event)=>{
        setSearch(event.target.value);
        getValue(event.target.value);
    };
    const handleClear = ()=>{
        setSearch("");
        getValue("");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
        variant: "outlined",
        size: "small",
        ...props,
        value: search,
        onChange: handleSearch,
        inputProps: {
            style: {
                fontSize: 14
            }
        },
        sx: {
            "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                    borderColor: "#0ea5e9"
                },
                borderRadius: "5rem"
            },
            "& .Mui-disabled": {
                "&:hover fieldset": {
                    borderColor: "#bfc0c2"
                },
                backgroundColor: "#fafafa"
            },
            width: "250px"
        },
        InputLabelProps: {
            style: {
                fontSize: 14
            }
        },
        InputProps: {
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                position: "end",
                children: [
                    search !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        size: "small",
                        onClick: handleClear,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default()), {
                            fontSize: "small"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {
                        fontSize: "small"
                    })
                ]
            })
        }
    });
}


/***/ })

};
;